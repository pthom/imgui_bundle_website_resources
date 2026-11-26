#!/usr/bin/env python3
"""Give every page of the sitemap a <link rel="canonical"> to its own sitemap URL, in _cf_staging/.

Run by `just cf_stage`, after generate_sitemap.py. Each page answers at two addresses (`/doc/x/` and
`/doc/x/index.html`, which redirects): without a canonical, Google reports them as duplicates. The pages come from
several generators (the book, the landing page, the playground, the explorer, the release pages); this pass covers
them all, with the same URLs as the sitemap. Idempotent: an existing canonical is replaced.
"""
from __future__ import annotations

import re
import sys
from xml.sax.saxutils import quoteattr

from generate_sitemap import STAGING, collect_pages, url_for

CANONICAL_RE = re.compile(r"<link\b[^>]*\brel=[\"']?canonical\b[^>]*>", re.IGNORECASE)
HEAD_END_RE = re.compile(r"</head\s*>", re.IGNORECASE)


def main() -> int:
    if not STAGING.is_dir():
        print(f"error: {STAGING} not found - run `just cf_stage` first", file=sys.stderr)
        return 1
    pages = collect_pages()
    no_head = []
    for page in pages:
        html = CANONICAL_RE.sub("", page.read_text(encoding="utf-8"))
        tag = f"<link rel=\"canonical\" href={quoteattr(url_for(page))}>"
        html, n = HEAD_END_RE.subn(lambda m: tag + m.group(0), html, count=1)
        if n == 0:
            no_head.append(str(page))
            continue
        page.write_text(html, encoding="utf-8")
    if no_head:
        print("error: no </head> in:\n  " + "\n  ".join(no_head), file=sys.stderr)
        return 1
    print(f"canonicals: {len(pages)} pages")
    return 0


if __name__ == "__main__":
    sys.exit(main())
