# Compact-keyword pilot implementation report

Date: 2026-07-29

Status: **implemented locally; automated QA passed; preview publication pending repository push**

## Implemented decisions

- Homepage now owns the five-query G1 core custom-kitchen cluster.
- The competing `/pakalpojumi/virtuves-iekartas-pec-pasutijuma/` document was removed from the unlaunched static URL set after its intent was merged into the homepage.
- Manufacturing, built-in kitchens, price, project work, planning and island pages received the approved titles and H1 boundaries.
- `/pakalpojumi/virtuves-dizains-un-projektesana/` now emphasizes project decisions and consultation before manufacture.
- New `/celvedis/virtuves-dizains/` serves the distinct visual and informational design intent with a 1,071-word rendered page, decision table, examples, FAQ, internal links and the canonical form.
- The island page includes a substantive island-versus-peninsula comparison and does not target retail noun-only `virtuves sala` intent.
- Internal links and `sitemap.xml` were updated atomically.

## Automated evidence

- Static-stack policy equivalent: passed.
- Canonical form and local CTA policy: passed.
- HTML documents: 45.
- Canonical form signatures: 1 across all non-404 pages.
- One H1, title, description and canonical per indexable page: passed.
- JSON-LD parse: passed.
- Internal-link crawl: passed with no broken targets.
- Obsolete synonym-route references in HTML and sitemap: 0.
- `git diff --check`: passed.
- Pilot rendered word counts: homepage 772; manufacturing 1,064; built-in 1,083; price 1,141; project 1,063; planning 1,065; island 1,127; new design guide 1,071.

## Open gates

- The local branch must be pushed before GitHub Actions and the existing Pages preview can reflect this pilot.
- Desktop and mobile visual review remains required after preview deployment.
- Production deployment remains outside this approval.
