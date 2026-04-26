#!/usr/bin/env python3
"""Generate _cf_staging/sitemap.xml for https://imgui-bundle.pages.dev/.

Run after `just cf_stage` (or from cf_stage itself). Walks _cf_staging/
and emits one <url> entry per public HTML page:
  - /                    (landing)
  - /doc/**              (jupyter-book pages, excluding aux files)
  - /explorer/           (index only — not every demo)
  - /playground/
"""
from __future__ import annotations

import sys
from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape

THIS_DIR = Path(__file__).parent
BUNDLE_DIR = THIS_DIR.parent.parent.parent
BASE_URL = "https://imgui-bundle.pages.dev"
STAGING = BUNDLE_DIR / "_cf_staging"

# Path fragments that should never appear in the sitemap.
DOC_SKIP_FRAGMENTS = (
    "/_sources/",
    "/_static/",
    "/genindex",
    "/search.html",
    "/searchindex",
)


def url_for(html_path: Path) -> str:
    rel = html_path.relative_to(STAGING).as_posix()
    if rel == "index.html":
        return f"{BASE_URL}/"
    if rel.endswith("/index.html"):
        return f"{BASE_URL}/{rel[: -len('index.html')]}"
    return f"{BASE_URL}/{rel}"


def collect_entries() -> list[tuple[str, float]]:
    entries: list[tuple[str, float]] = []

    def add(p: Path) -> None:
        entries.append((url_for(p), p.stat().st_mtime))

    landing = STAGING / "index.html"
    if landing.exists():
        add(landing)

    doc_root = STAGING / "doc"
    if doc_root.is_dir():
        for html in sorted(doc_root.rglob("*.html")):
            rel = "/" + html.relative_to(STAGING).as_posix()
            if any(frag in rel for frag in DOC_SKIP_FRAGMENTS):
                continue
            add(html)

    for sub in ("explorer", "playground"):
        index = STAGING / sub / "index.html"
        if index.exists():
            add(index)

    return entries


def main() -> int:
    if not STAGING.is_dir():
        print(f"error: {STAGING} not found - run `just cf_stage` first", file=sys.stderr)
        return 1

    entries = collect_entries()
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for loc, mtime in entries:
        lastmod = datetime.fromtimestamp(mtime, tz=timezone.utc).strftime("%Y-%m-%d")
        lines += [
            "  <url>",
            f"    <loc>{escape(loc)}</loc>",
            f"    <lastmod>{lastmod}</lastmod>",
            "  </url>",
        ]
    lines.append("</urlset>")

    out = STAGING / "sitemap.xml"
    out.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"wrote {out} ({len(entries)} urls)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
