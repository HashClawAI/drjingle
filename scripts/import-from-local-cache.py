#!/usr/bin/env python3
"""Import published drjingle.com articles from local GEOFlow export cache."""

from __future__ import annotations

import json
import re
import urllib.parse
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WORKSPACE = ROOT.parent
CACHE_DIR = WORKSPACE / "wechat-mp-auto-publish/artifacts/geoflow-en-export"
EN_CACHE_DIR = WORKSPACE / "wechat-mp-auto-publish/artifacts/geoflow-en-cache"
PILLAR_EN_JSON = WORKSPACE / "wechat-mp-auto-publish/scripts/data/pillar-en.json"
SITEMAP = WORKSPACE / "vendor/GEOFlow/public/sitemap.xml"
SERIES_JSON = ROOT / "src/data/series.json"
OUT_DIR = ROOT / "src/content/articles"

EXTRA_SOURCES = [
    {
        "slug": "未来网站-每人打开页面都不一样",
        "path": WORKSPACE
        / "wechat-mp-auto-publish/artifacts/website-of-the-future-2026-07-06.geo.md",
        "title": "未来网站：每人打开页面都不一样",
        "pubDate": "2026-07-06",
        "category": "insights",
        "en_cache_id": 91,
    },
]

RESEARCH_SLUGS = {
    "顶刊qje最新研究-ai没有消灭工作-但正在淘汰你现在的岗位",
    "顶刊jpe最新研究-ai正在让贫富差距越拉越大-原因是什么",
    "让-agent-学会忘记-为什么比让它记住更难",
}


def load_sitemap_dates() -> dict[str, str]:
    tree = ET.parse(SITEMAP)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    dates: dict[str, str] = {}
    for url in tree.findall(".//sm:url", ns):
        loc = url.find("sm:loc", ns)
        if loc is None or loc.text is None or "/article/" not in loc.text:
            continue
        slug = urllib.parse.unquote(loc.text.split("/article/", 1)[1])
        lastmod = url.find("sm:lastmod", ns)
        dates[slug] = lastmod.text[:10] if lastmod is not None and lastmod.text else "2026-01-01"
    return dates


def load_series_index() -> dict[str, tuple[str, int]]:
    data = json.loads(SERIES_JSON.read_text(encoding="utf-8"))
    index: dict[str, tuple[str, int]] = {}
    for series_id, meta in data.items():
        for i, slug in enumerate(meta.get("articles", []), start=1):
            index[slug] = (series_id, i)
    return index


def strip_geo_scoring(markdown: str) -> str:
    marker = "## GEO 优化度评分"
    if marker not in markdown:
        return markdown.strip()
    public = markdown.split(marker)[0].strip()
    tail = re.search(r"本文为框架性观察与评论[\s\S]*$", markdown) or re.search(
        r"本文为公开论文[\s\S]*$", markdown
    )
    disclaimer = tail.group(0).strip() if tail else "本文为作者观点，不构成投资建议。"
    return f"{public}\n\n---\n\n{disclaimer}\n"


def strip_leading_h1(content: str, title: str) -> str:
    lines = content.splitlines()
    if lines and lines[0].startswith("# "):
        h1 = lines[0][2:].strip()
        if h1 == title.strip() or h1.replace("？", "?") == title.replace("？", "?"):
            lines = lines[1:]
            while lines and not lines[0].strip():
                lines = lines[1:]
    return "\n".join(lines).strip() + "\n"


def yaml_escape(value: str) -> str:
    return value.replace('"', '\\"')


def normalize_markdown_assets(markdown: str) -> str:
    """Map legacy relative article assets to public/images/articles/."""

    def repl(match: re.Match[str]) -> str:
        alt, path = match.group(1), match.group(2)
        if path.startswith(("http://", "https://", "/", "images/")):
            return match.group(0)
        return f"![{alt}](/images/articles/{path})"

    return re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", repl, markdown)


def write_article(
    slug: str,
    title: str,
    content: str,
    excerpt: str,
    pub_date: str,
    category: str,
    locale: str = "zh",
    series: str | None = None,
    series_order: int | None = None,
) -> None:
    body = strip_geo_scoring(content)
    body = strip_leading_h1(body, title)
    body = normalize_markdown_assets(body)
    desc = (excerpt or body.replace("#", "").strip()[:160]).replace("\n", " ")
    fm = [
        "---",
        f'title: "{yaml_escape(title)}"',
        f'description: "{yaml_escape(desc)}"',
        f"pubDate: {pub_date}",
        f"category: {category}",
    ]
    if series:
        fm.append(f"series: {series}")
    if series_order:
        fm.append(f"seriesOrder: {series_order}")
    if locale == "en":
        fm.append(f'articleSlug: "{yaml_escape(slug)}"')
    fm += [f"locale: {locale}", "draft: false", "---", ""]
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    if locale == "en":
        en_dir = OUT_DIR / "en"
        en_dir.mkdir(parents=True, exist_ok=True)
        path = en_dir / f"{slug}.md"
    else:
        path = OUT_DIR / f"{slug}.md"
    path.write_text("\n".join(fm) + body, encoding="utf-8")


def load_pillar_en(slug: str) -> dict | None:
    if not PILLAR_EN_JSON.exists():
        return None
    data = json.loads(PILLAR_EN_JSON.read_text(encoding="utf-8"))
    row = data.get(slug)
    if not row:
        return None
    content = (row.get("content_en") or "").strip()
    title = (row.get("title_en") or "").strip()
    if len(content) < 200 or not title:
        return None
    return {
        "title": title,
        "excerpt": (row.get("excerpt_en") or "").strip(),
        "content": content,
    }


def load_en_cache(article_id: int) -> dict | None:
    path = EN_CACHE_DIR / f"{article_id}.json"
    if not path.exists():
        return None
    data = json.loads(path.read_text(encoding="utf-8"))
    content = (data.get("content_en") or "").strip()
    if len(content) < 200:
        return None
    return {
        "title": (data.get("title_en") or "").strip(),
        "excerpt": (data.get("excerpt_en") or "").strip(),
        "content": content,
    }


def write_en_from_cache(
    slug: str,
    article_id: int,
    pub_date: str,
    category: str,
    series: str | None = None,
    series_order: int | None = None,
) -> bool:
    en = load_en_cache(article_id) or load_pillar_en(slug)
    if not en or not en["title"]:
        return False
    write_article(
        slug=slug,
        title=en["title"],
        content=en["content"],
        excerpt=en["excerpt"],
        pub_date=pub_date,
        category=category,
        locale="en",
        series=series,
        series_order=series_order,
    )
    return True


def main() -> None:
    dates = load_sitemap_dates()
    series_index = load_series_index()
    written: set[str] = set()
    en_written = 0

    for path in sorted(CACHE_DIR.glob("*.zh.json")):
        data = json.loads(path.read_text(encoding="utf-8"))
        slug = data["slug"]
        article_id = int(data["id"])
        title = data["title"]
        category = "research" if slug in RESEARCH_SLUGS else "insights"
        series, order = series_index.get(slug, (None, None))
        pub_date = dates.get(slug, "2026-01-01")
        write_article(
            slug=slug,
            title=title,
            content=data.get("content") or "",
            excerpt=data.get("excerpt") or "",
            pub_date=pub_date,
            category=category,
            locale="zh",
            series=series,
            series_order=order,
        )
        if write_en_from_cache(slug, article_id, pub_date, category, series, order):
            en_written += 1
        written.add(slug)

    for extra in EXTRA_SOURCES:
        md_path: Path = extra["path"]
        if not md_path.exists():
            raise SystemExit(f"Missing extra source: {md_path}")
        raw = md_path.read_text(encoding="utf-8")
        if raw.startswith("---"):
            parts = raw.split("---", 2)
            raw = parts[2] if len(parts) > 2 else raw
        slug = extra["slug"]
        series, order = series_index.get(slug, (None, None))
        pub_date = extra.get("pubDate") or dates.get(slug, "2026-01-01")
        category = extra.get("category", "insights")
        write_article(
            slug=slug,
            title=extra["title"],
            content=raw,
            excerpt="",
            pub_date=pub_date,
            category=category,
            locale="zh",
            series=series,
            series_order=order,
        )
        en_id = extra.get("en_cache_id")
        if en_id and write_en_from_cache(slug, int(en_id), pub_date, category, series, order):
            en_written += 1
        written.add(slug)

    welcome = OUT_DIR / "welcome-github-pages.md"
    if welcome.exists():
        welcome.unlink()

    missing = set(dates) - written
    if missing:
        print("WARNING: sitemap slugs still missing:", ", ".join(sorted(missing)))
    print(f"Imported {len(written)} zh + {en_written} en articles → {OUT_DIR}")


if __name__ == "__main__":
    main()
