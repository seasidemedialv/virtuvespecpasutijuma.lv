# Template Compliance — virtuvespecpasutijuma.lv

**Status:** VISUAL QA BLOCKED
**Template repository:** `seasidemedialv/website-template`
**Template commit:** `6164a5664c46ca45a8386c829646facf1c9b4dca`
**Review date:** 2026-07-29

The rejected framework implementation has been removed. The editable website
source is plain HTML, one shared root stylesheet, one shared root script and
static images. It opens directly and requires no package installation,
compilation, server or build command.

## Actual template files used

- `AGENTS.md`
- `NICHE-SETUP.md`
- `IMAGE-PROMPTS.md`
- `site-config.json`
- `index.html`
- `service-page.html`
- `geo-page.html`
- `prices.html`
- `faq.html`
- `styles.css`
- `script.js`

## Static implementation mapping

| Template source/system | Exact static implementation |
|---|---|
| `index.html` | root `index.html`: announcement bar, sticky navigation, mobile navigation, dense hero, one canonical embedded form, benefit list, trust bar, service cards, process, planning content, all demand-page links, service areas and FAQ |
| `service-page.html` | fifteen `pakalpojumi/<slug>/index.html` files with breadcrumb hero, brief-led long-form content, keyword boundary, topic entities, internal links, process, FAQ schema and one canonical form |
| `prices.html` | `pakalpojumi/virtuves-cenas/index.html`: price factors and six comparable scope categories without invented monetary values |
| `faq.html` | `buj/index.html` plus visible, intent-specific FAQ sections on every demand page |
| `geo-page.html` | `/pilsetas/index.html` is the substantive verified-coverage hub; individual geo pages remain deferred until independently approved |
| `styles.css` | root `styles.css`: adapted template layout, typography, cards, forms, conversion sections, navigation, responsive grids and focus states |
| `script.js` | root `script.js`: sticky header, mobile menu, FAQ accordions, floating mobile CTA and explicitly non-transmitting preview forms |
| Template images | root `images/`: three compressed WebP illustrations, visibly disclosed as illustrative rather than completed projects |
| Brand assets | owner-supplied `public/images/logo.png` in every header/footer and owner-supplied root `favicon.png` in every document head |

## Approved page inventory

The static source contains the approved homepage plus fifteen DataForSEO-backed
demand pages:

1. `/`
2. `/pakalpojumi/virtuves-iekartas-pec-pasutijuma/`
3. `/pakalpojumi/virtuves-izgatavosana/`
4. `/pakalpojumi/iebuvetas-virtuves/`
5. `/pakalpojumi/virtuves-cenas/`
6. `/pakalpojumi/virtuves-dizains-un-projektesana/`
7. `/pakalpojumi/virtuves-planosana/`
8. `/pakalpojumi/virtuves-uzstadisana/`
9. `/pakalpojumi/stura-un-l-veida-virtuves/`
10. `/pakalpojumi/mazas-virtuves/`
11. `/pakalpojumi/modernas-virtuves/`
12. `/pakalpojumi/virtuves-ar-salu/`
13. `/pakalpojumi/virtuves-skapisi/`
14. `/pakalpojumi/virtuves-fasades/`
15. `/pakalpojumi/virtuves-furnitura/`
16. `/pakalpojumi/virtuves-interjers/`

Hierarchy and hub mapping:

- `service-page.html` → `/pakalpojumi/<service-slug>/index.html`
- service overview/hub → `/pakalpojumi/index.html`
- location overview/hub → `/pilsetas/index.html`
- future independently briefed location pages →
  `/pilsetas/virtuves-pec-pasutijuma-<vieta>/index.html`

Functional pages are `/ka-mes-stradajam/`, `/realizetie-projekti/`,
`/par-mums/`, `/kontakti/`, `/privatuma-politika/` and `/buj/`.

## Content and SEO evidence

- All 25 HTML documents have exactly one H1, a title, description and canonical.
- Homepage rendered-text count: 787 words.
- Demand-page rendered-text range: 573–733 words.
- Each demand page preserves its unique primary keyword, supporting terms,
  approved sections, topic-specific entities, questions and internal links.
- Every demand page has valid visible FAQ content and matching JSON-LD.
- Homepage has valid WebSite JSON-LD.
- `robots.txt` blocks indexing and every page has `noindex, nofollow`.
- `sitemap.xml`, `404.html`, `favicon.svg` and social metadata are present.
- A complete local internal-link pass found no broken links.
- No unresolved template tokens or framework references remain in site source.
- No invented prices, reviews, guarantees, response times, projects,
  certifications, legal operator or contact details were introduced.
- All 25 form instances use the same ordered schema: name, phone, address,
  optional service area, required service and required project-details
  textarea.
- Name, phone, address, service and project details are marked `required`.
- Every service-area selector ends with `<option value="other">Cits</option>`.
- Every HTML page contains the standard form, including privacy and 404 pages.
- Every primary header, mobile, sidebar, body and floating CTA targets that
  page’s local `#lead-form`.
- All 25 pages use the exact owner-approved five-minute response message in the
  notification bar, a prominent conversion strip and beside the form.
- The non-transmitting demo notice remains visible; webhook delivery and the
  five-minute operational process remain production QA requirements.
- Internal-link crawl passed with no obsolete root-level service URLs.
- The 15 service pages, both hubs, canonicals, breadcrumbs and sitemap use the
  same `/pakalpojumi/` and `/pilsetas/` hierarchy.
- Because the site has not launched publicly, obsolete flat preview routes are
  removed rather than retained as duplicate HTML; production redirects are not
  required for an unlaunched URL set.

## Static-stack evidence

- Required root `index.html`, `styles.css` and `script.js`: present.
- React, Next.js, Vinext, Vite, TypeScript/TSX, Node/npm, Wrangler, Drizzle,
  Cloudflare worker code, Sites files and build output: absent.
- Local equivalent of `.github/workflows/static-stack-policy.yml`: passed.
- Local canonical-form, `Cits`, local-CTA and URL-architecture audit: passed
  across 25 pages, 25 forms and 92 local CTAs.
- GitHub Actions static-stack policy run `30432498216`: passed.
- Direct static preview deployment run `30432537869`: passed.

## Remaining gates

- [x] Exact GitHub `static-stack-policy.yml` run passes
- [x] Static preview replaces the rejected framework preview
- [ ] Desktop visual comparison passes
- [ ] Mobile visual comparison passes
- [ ] Browser console and interaction checks pass
- [ ] Owner visual review requested

Automated browser access to `seasidemedialv.github.io` is blocked by a saved
user permission setting. The browser explicitly prohibited alternate browser
surfaces or indirect workarounds. Desktop/mobile visual checks therefore remain
open, and the site is not marked compliant or completed.
