# Compact-keyword project — virtuvespecpasutijuma.lv

- **Domain:** `https://virtuvespecpasutijuma.lv/`
- **Market:** Latvia
- **Research locale:** Google Latvia, Latvian (`lv`)
- **Current stage:** owner-approved pilot implemented; preview publication pending
- **Last updated:** 2026-07-29
- **Implementation approval:** granted 2026-07-29 for the eight-item pilot

## Current decision

The returned DataForSEO packages remain preserved, normalized and reviewed.
The owner approved the eight-item pilot after all 36 shortlisted queries were
validated. The approved page-map decisions have been applied to the static
source and locally audited. Production deployment is still not authorized.

## Important files

- `audit/website-audit.md` — website, SEO, architecture, content and proof audit
- `audit/compact-keywords-research-brief.json` — shared source of truth
- `prompts/dataforseo-prompt-1.md` — current rankings and competitors
- `prompts/dataforseo-prompt-2.md` — competitor mining and expansion
- `prompts/dataforseo-prompt-3.md` — live SERP validation and normalized output
- `research/raw/prompt-*/original-package.zip` — untouched returned packages
- `research/raw/prompt-3/original-complete-package.zip` — untouched complete-query package
- `research/normalized/` — copied normalized tables
- `research/reports/` — returned narrative reports
- `research/reports/prompt-3-complete-evidence-review.md` — completeness reconciliation
- `page-map/prioritized-page-map.md` — decision record and proposed pilot
- `page-map/prioritized-page-map.csv` — machine-readable page map
- `implementation-planning/pilot-implementation-report.md` — implemented changes and QA evidence

## Evidence handling

- Keep API responses untouched under the corresponding `research/raw/` folder.
- Put cleaned rows in `research/normalized/`.
- Put narrative research summaries in `research/reports/`.
- Do not overwrite raw evidence.
- Do not store credentials, access tokens, private customer data or secrets in
  this folder or repository.

## Unresolved questions

- Search Console and analytics exports have not been supplied.
- The production site is not currently indexable.
- Public business identity, contact information, pricing, warranties,
  production timing, material/hardware brands, projects and testimonials are
  not verified.
- Full unmodified Prompt 3 provider response bodies could not be exported by
  the connector; every request and the normalized evidence for all 36 queries
  are present.
