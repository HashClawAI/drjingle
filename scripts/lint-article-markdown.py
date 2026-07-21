#!/usr/bin/env python3
"""Lint and fix common GEO / AI artifacts in article markdown."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARTICLES = ROOT / "src/content/articles"
CACHE_DIR = ROOT.parent / "wechat-mp-auto-publish/artifacts/geoflow-en-export"

FULL_MMBIZ_RE = re.compile(r"https?://mmbiz\.qpic\.cn/[^\s\"')\]]+")
IMG_MD_RE = re.compile(r"!\[([^\]]*)\]\(([^)]*)\)")
BULLET_DECOR_RE = re.compile(r"^-\s*●+\s*$")
STANDALONE_DECOR_RE = re.compile(r"^●+\s*$")
BRACKET_BOLD_RE = re.compile(r"\[\*\*([^*]+?)\s*\*\*\]")
PLACEHOLDER_IMG_RE = re.compile(
    r"!\[\]\(https://mmbiz\.\s*(?:See the sections above for more detail\.?"
    r"|See sections above for details\.?"
    r"|更多细节见上文分节论述。?)?\s*\)?\s*$",
    re.I,
)
BARE_MMBIZ_LINE_RE = re.compile(r"^\s*-?\s*!\[\]\(https://mmbiz\.\s*\)?\s*$")
BOILERPLATE_SUFFIX_RE = re.compile(
    r"\s*(?:See the sections above for more detail\.?|See sections above for details\.?"
    r"|更多细节见上文分节论述。?)\s*$",
    re.I,
)
GEO_LABEL_BULLET_RE = re.compile(r"^(-\s*)\*\*([^*]{1,14})\*\*[：:]\s*(.+)$")
GEO_LABEL_INLINE_RE = re.compile(r"\*\*([^*]{1,14})\*\*[：:]\s*")
SUMMARY_HEADING = "## 核心要点摘要"
THEMATIC_BREAK = re.compile(r"^---\s*$")
ATX_HEADING = re.compile(r"^#{1,6}\s+")
FAQ_QUESTION = re.compile(r"^\*\*.+\*\*\s*$")
TAIL_SECTION_H2 = frozenset(
    {
        "Who should buy this book",
        "这本书最值得买给谁",
    }
)


def is_plain_content_line(line: str) -> bool:
    s = line.strip()
    if not s or s == "---":
        return False
    if ATX_HEADING.match(s):
        return False
    if s.startswith(("- ", "* ", "> ", "![")):
        return False
    return True


def h2_title(line: str) -> str | None:
    m = re.match(r"^##\s+(.+?)\s*$", line.strip())
    return m.group(1).strip() if m else None


def _bold_marker_indices(line: str) -> list[int]:
    idx: list[int] = []
    pos = 0
    while True:
        pos = line.find("**", pos)
        if pos < 0:
            break
        idx.append(pos)
        pos += 2
    return idx


def is_broken_bold_line(line: str) -> bool:
    idx = _bold_marker_indices(line)
    if not idx:
        return False
    if len(idx) % 2 != 0:
        return True
    if len(idx) >= 8:
        return True

    long_pairs = 0
    for i in range(0, len(idx), 2):
        inner = line[idx[i] + 2 : idx[i + 1]]
        t = inner.strip()
        if len(t) > 55:
            return True
        if len(t) <= 2:
            return True
        if len(t) > 40:
            long_pairs += 1
        if (";" in inner or "；" in inner) and len(inner) > 20:
            return True
        if inner.endswith(" ") and len(inner) > 15:
            return True

    if len(idx) >= 6 and long_pairs >= 1:
        return True
    return False


def clean_stray_bold(text: str) -> tuple[str, list[str]]:
    """Remove WeChat / GEO stray ** that render literally in HTML."""
    if not text:
        return text, []

    notes: list[str] = []
    s = text

    s = re.sub(r"\[\*\*[^\]]*\*\*\]", "", s)
    s = re.sub(r"\[\*\*[^\]]*\]", "", s)
    s = re.sub(r"\*\* \*\*", "", s)

    before = s
    s = re.sub(r"^\s*-?\s*\*\*\s*$", "", s, flags=re.MULTILINE)
    if s != before:
        notes.append("removed empty ** lines")

    quote_chars = '"\u300c\u300e\u201c\u201d\u300d\u300f'

    def fix_quotes(m: re.Match[str]) -> str:
        return m.group(1)

    s = re.sub(r"\*\*([" + re.escape(quote_chars) + r"])\*\*", fix_quotes, s)
    s = re.sub(r"\*\*([" + re.escape(quote_chars) + r"])", fix_quotes, s)
    s = re.sub(r"([" + re.escape(quote_chars) + r"])\*\*", fix_quotes, s)

    fixed_lines: list[str] = []
    for line in s.split("\n"):
        count = line.count("**")
        if count == 0 or count % 2 == 0:
            fixed_lines.append(line)
            continue

        new_line = line
        if re.match(r"^\s*\*\*", line) and line.count("**") == 1:
            new_line = re.sub(r"^\s*\*\*", lambda m: m.group(0).replace("**", ""), line, count=1)
        elif re.search(r"\*\*\s*$", line):
            new_line = re.sub(r"\*\*\s*$", "", line)
        elif re.search(r"\*\*(?=[.,;:!?」』\"'\\s])", line):
            new_line = re.sub(r"\*\*(?=[.,;:!?」』\"'\\s])", "", line)
        else:
            pos = line.rfind("**")
            if pos >= 0:
                new_line = line[:pos] + line[pos + 2 :]
        if new_line != line:
            notes.append("fixed odd ** count")
        fixed_lines.append(new_line)
    s = "\n".join(fixed_lines)

    s = re.sub(r"\n{3,}", "\n\n", s)
    s = re.sub(r"\*\*~(\$)", r"**\1", s)

    fixed_lines = []
    for line in s.split("\n"):
        if line.count("**") % 2 == 1:
            fixed_lines.append(line.replace("**", ""))
            notes.append("stripped odd ** line")
        else:
            fixed_lines.append(line)
    s = "\n".join(fixed_lines)

    fixed_lines = []
    for line in s.split("\n"):
        if is_broken_bold_line(line):
            fixed_lines.append(line.replace("**", ""))
            notes.append("stripped broken bold line")
            continue
        probe = line
        prev = None
        while probe != prev:
            prev = probe
            probe = re.sub(r"\*\*([^*\n]+?)\*\*", r"\1", probe)
        if "**" in probe:
            fixed_lines.append(line.replace("**", ""))
            notes.append("stripped leftover **")
        else:
            fixed_lines.append(line)
    s = "\n".join(fixed_lines)

    return s, notes


def fix_markdown_block_structure(body: str) -> tuple[str, list[str]]:
    """Prevent setext headings from `---` and normalize GEO tail / FAQ spacing."""
    notes: list[str] = []
    lines = body.splitlines()
    out: list[str] = []
    need_blank = False
    in_faq = False
    in_tail = False

    for line in lines:
        stripped = line.strip()
        title = h2_title(line) if stripped.startswith("## ") else None

        if title == "FAQ":
            in_faq = True
            in_tail = False
        elif title is not None:
            in_faq = False
            in_tail = title in TAIL_SECTION_H2

        if THEMATIC_BREAK.match(stripped):
            in_faq = False
            in_tail = False

        if need_blank:
            if stripped == "":
                need_blank = False
            else:
                out.append("")
                need_blank = False

        if THEMATIC_BREAK.match(stripped):
            if out and out[-1].strip() != "":
                out.append("")
            out.append("---")
            need_blank = True
            notes.append("thematic break spacing")
            continue

        if ATX_HEADING.match(stripped):
            out.append(line)
            need_blank = True
            continue

        if in_faq and FAQ_QUESTION.match(stripped):
            if out and (out[-1].strip().startswith("A:") or out[-1].strip().startswith("A：")):
                out.append("")

        if in_faq and (stripped.startswith("A:") or stripped.startswith("A：")):
            if out and FAQ_QUESTION.match(out[-1].strip()):
                out.append("")

        if (in_faq or in_tail) and is_plain_content_line(line):
            if out and is_plain_content_line(out[-1]):
                out.append("")
                notes.append("split dense paragraph")

        out.append(line)

    collapsed: list[str] = []
    blank_run = 0
    for line in out:
        if line.strip() == "":
            blank_run += 1
            if blank_run <= 1:
                collapsed.append("")
            continue
        blank_run = 0
        collapsed.append(line)

    body_out = "\n".join(collapsed)
    if body_out and not body_out.endswith("\n"):
        body_out += "\n"
    return body_out, notes


def collect_mmbiz_urls(*sources: Path) -> list[str]:
    urls: set[str] = set()
    for base in sources:
        if not base.exists():
            continue
        paths = list(base.rglob("*.md")) if base.is_dir() else [base]
        for p in paths:
            text = p.read_text(encoding="utf-8", errors="replace")
            if p.suffix == ".json":
                data = json.loads(text)
                text = (data.get("content") or "") + (data.get("excerpt") or "")
            for m in FULL_MMBIZ_RE.finditer(text):
                u = m.group(0).rstrip(".,;")
                if "…" not in u and len(u) >= 60:
                    urls.add(u)
    return sorted(urls, key=len, reverse=True)


def resolve_partial_url(partial: str, catalog: list[str]) -> str | None:
    p = partial.strip().rstrip("…").rstrip()
    if not p or p in ("https://mmbiz.", "http://mmbiz.", "https://mmbiz", "http://mmbiz"):
        return None
    if p.startswith("http://mmbiz"):
        p = "https://" + p[7:]
    for full in catalog:
        if full.startswith(p):
            return full
    return None


def fix_image_markdown(match: re.Match[str], catalog: list[str]) -> str:
    alt, target = match.group(1), match.group(2).strip()
    if "mmbiz" not in target:
        return match.group(0)
    if "…" in target or target.rstrip(")") in ("https://mmbiz.", "http://mmbiz."):
        resolved = resolve_partial_url(target.rstrip(")").split()[0], catalog)
        if resolved:
            return f"![{alt}]({resolved})"
        return ""
    if target.startswith("http://mmbiz"):
        return f"![{alt}](https://{target[7:]})"
    return match.group(0)


def yaml_escape(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def strip_broken_images(line: str, catalog: list[str]) -> str | None:
    if BARE_MMBIZ_LINE_RE.match(line) or PLACEHOLDER_IMG_RE.search(line):
        return None
    if BULLET_DECOR_RE.match(line) or STANDALONE_DECOR_RE.match(line):
        return None

    # Unclosed markdown images (truncated export)
    broken = re.search(r"!\[([^\]]*)\]\(([^)\n]+)", line)
    if broken and ("…" in broken.group(2) or broken.group(2).rstrip().endswith("mmbiz.")):
        resolved = resolve_partial_url(broken.group(2), catalog)
        if resolved:
            line = line[: broken.start()] + f"![{broken.group(1)}]({resolved})" + line[broken.end() :]
            line = line.replace("…", "")
        elif re.match(r"^\s*-?\s*!\[[^\]]*\]\([^)\n]*…?\s*$", line):
            return None

    def img_sub(m: re.Match[str]) -> str:
        return fix_image_markdown(m, catalog)

    line = IMG_MD_RE.sub(img_sub, line)
    if re.match(r"^\s*-?\s*!\[[^\]]*\]\(\s*\)\s*$", line):
        return None
    if line.strip().startswith("![](") and "…" in line:
        return None
    if "![](" in line and "mmbiz" in line and "…" in line:
        inner = IMG_MD_RE.search(line)
        if inner and fix_image_markdown(inner, catalog) == "":
            return None
        if not inner and re.search(r"mmbiz[^)]*…", line):
            return None

    line = BRACKET_BOLD_RE.sub(r"**\1**", line)
    line = BOILERPLATE_SUFFIX_RE.sub("", line)
    line = strip_geo_summary_labels(line)
    if not line.strip():
        return None
    return line


def clean_body_line(line: str, catalog: list[str]) -> str | None:
    return strip_broken_images(line, catalog)


def strip_geo_summary_labels(line: str) -> str:
    m = GEO_LABEL_BULLET_RE.match(line.strip())
    if m:
        return f"{m.group(1)}{m.group(3)}"
    if line.strip() == SUMMARY_HEADING:
        return "## 导读"
    return line


def clean_description(raw: str, catalog: list[str]) -> str:
    text = raw
    text = IMG_MD_RE.sub(
        lambda m: fix_image_markdown(m, catalog) if "mmbiz" in m.group(2) else "",
        text,
    )
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", text)
    text = GEO_LABEL_INLINE_RE.sub("", text)
    text = re.sub(r"●+", " ", text)
    text = re.sub(r"[；;]+\s*", " ", text)
    text = re.sub(r"\s+", " ", text).strip(" ；;")
    if len(text) > 200:
        text = text[:197].rstrip() + "…"
    return text or "Dr.Jingle intelligence note."


def split_frontmatter(text: str) -> tuple[str | None, str]:
    if not text.startswith("---"):
        return None, text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return None, text
    return parts[1].strip("\n"), parts[2]


def patch_frontmatter(fm: str, catalog: list[str]) -> str:
    lines = fm.splitlines()
    out: list[str] = []
    for line in lines:
        if line.startswith("description:"):
            m = re.match(r'description:\s*"(.*)"\s*$', line)
            if m:
                desc = clean_description(m.group(1), catalog)
                esc = yaml_escape(desc)
                out.append(f'description: "{esc}"')
                continue
        out.append(line)
    return "\n".join(out)


def first_plain_excerpt(body: str) -> str:
    for line in body.splitlines():
        s = line.strip()
        if not s or s.startswith("#") or s.startswith("![]") or s.startswith("- ![]"):
            continue
        if s.startswith("- ") and ("http" in s or "●" in s):
            continue
        if s.startswith(">"):
            continue
        s = re.sub(r"\*\*([^*]+)\*\*", r"\1", s)
        s = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)
        if len(s) > 40:
            return s[:200]
    return ""


def clean_markdown(text: str, catalog: list[str], refresh_description: bool) -> tuple[str, list[str]]:
    notes: list[str] = []
    fm_raw, body = split_frontmatter(text)
    if fm_raw is not None:
        new_fm = patch_frontmatter(fm_raw, catalog)
        if refresh_description:
            desc_line = next((l for l in new_fm.splitlines() if l.startswith("description:")), "")
            m = re.match(r'description:\s*"(.*)"\s*$', desc_line)
            if m and (len(m.group(1)) < 20 or "mmbiz" in m.group(1) or "●" in m.group(1)):
                excerpt = first_plain_excerpt(body)
                if excerpt:
                    esc = yaml_escape(excerpt)
                    new_fm = re.sub(
                        r'^description:.*$',
                        f'description: "{esc}"',
                        new_fm,
                        flags=re.M,
                    )
                    notes.append("description refreshed")
        body_part = body
    else:
        new_fm = None
        body_part = text

    cleaned_lines: list[str] = []
    for line in body_part.splitlines():
        new_line = clean_body_line(line, catalog)
        if new_line is None:
            if line.strip():
                notes.append(f"removed: {line.strip()[:72]}")
            continue
        cleaned_lines.append(new_line)

    # Drop empty ## 结论 if only heading left before next ##
    out_lines: list[str] = []
    i = 0
    lines = cleaned_lines
    while i < len(lines):
        line = lines[i]
        if line.strip() == "## 结论":
            j = i + 1
            while j < len(lines) and not lines[j].strip():
                j += 1
            if j < len(lines) and lines[j].startswith("## "):
                notes.append("removed empty ## 结论")
                i += 1
                continue
        out_lines.append(line)
        i += 1

    body_out = "\n".join(out_lines)
    body_out, block_notes = fix_markdown_block_structure(body_out)
    notes.extend(block_notes)
    body_out, bold_notes = clean_stray_bold(body_out)
    notes.extend(bold_notes)

    if body_out and not body_out.endswith("\n"):
        body_out += "\n"

    if fm_raw is not None:
        result = f"---\n{new_fm}\n---\n{body_out}"
    else:
        result = body_out
    return result, notes


def sanitize_body(body: str, catalog: list[str] | None = None) -> str:
    """Clean article markdown body (no frontmatter)."""
    if catalog is None:
        catalog = collect_mmbiz_urls(ARTICLES, CACHE_DIR)
    wrapped = f"---\ntitle: x\ndescription: x\n---\n{body}"
    cleaned, _ = clean_markdown(wrapped, catalog, refresh_description=False)
    return cleaned.split("---", 2)[2].lstrip("\n")


def process_file(path: Path, catalog: list[str], write: bool, refresh_description: bool) -> list[str]:
    original = path.read_text(encoding="utf-8")
    updated, notes = clean_markdown(original, catalog, refresh_description)
    rel = path.relative_to(ROOT)
    if updated != original:
        if write:
            path.write_text(updated, encoding="utf-8")
        return [f"{rel}: {len(notes)} fix(es)"]
    return []


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--write", action="store_true", help="Apply fixes to files")
    parser.add_argument("--refresh-description", action="store_true", help="Rebuild weak descriptions")
    args = parser.parse_args()

    catalog = collect_mmbiz_urls(ARTICLES, CACHE_DIR)
    changed: list[str] = []
    for path in sorted(ARTICLES.rglob("*.md")):
        changed.extend(
            process_file(path, catalog, args.write, args.refresh_description)
        )

    if not changed:
        print("No issues found (or already clean).")
        return 0
    print("\n".join(changed))
    print(f"\n{'Updated' if args.write else 'Would update'} {len(changed)} file(s).")
    return 0 if args.write else 1


if __name__ == "__main__":
    sys.exit(main())
