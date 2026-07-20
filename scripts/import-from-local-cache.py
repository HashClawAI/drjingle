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


def write_article(
    slug: str,
    title: str,
    content: str,
    excerpt: str,
    pub_date: str,
    category: str,
    series: str | None = None,
    series_order: int | None = None,
) -> None:
    body = strip_geo_scoring(content)
    body = strip_leading_h1(body, title)
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
    fm += ["locale: zh", "draft: false", "---", ""]
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    path = OUT_DIR / f"{slug}.md"
    path.write_text("\n".join(fm) + body, encoding="utf-8")


def main() -> None:
    dates = load_sitemap_dates()
    series_index = load_series_index()
    written: set[str] = set()

    for path in sorted(CACHE_DIR.glob("*.zh.json")):
        data = json.loads(path.read_text(encoding="utf-8"))
        slug = data["slug"]
        title = data["title"]
        category = "research" if slug in RESEARCH_SLUGS else "insights"
        series, order = series_index.get(slug, (None, None))
        write_article(
            slug=slug,
            title=title,
            content=data.get("content") or "",
            excerpt=data.get("excerpt") or "",
            pub_date=dates.get(slug, "2026-01-01"),
            category=category,
            series=series,
            series_order=order,
        )
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
        write_article(
            slug=slug,
            title=extra["title"],
            content=raw,
            excerpt="",
            pub_date=extra.get("pubDate") or dates.get(slug, "2026-01-01"),
            category=extra.get("category", "insights"),
            series=series,
            series_order=order,
        )
        written.add(slug)

    welcome = OUT_DIR / "welcome-github-pages.md"
    if welcome.exists():
        welcome.unlink()

    missing = set(dates) - written
    if missing:
        print("WARNING: sitemap slugs still missing:", ", ".join(sorted(missing)))
    print(f"Imported {len(written)} articles → {OUT_DIR}")


if __name__ == "__main__":
    main()
