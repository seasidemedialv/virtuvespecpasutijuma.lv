# Template Compliance — virtuvespecpasutijuma.lv

## Trilingual implementation addendum — 2026-07-31

The Latvian static template system is mirrored under `/en/` and `/ru/` without
a build layer or client-side translation. Each language contains 45 static
documents and reuses the same header, navigation, content sections, conversion
panels, canonical form, footer, images, stylesheet and JavaScript behavior.
Localized routes, canonicals and reciprocal `lv`, `en`, `ru` and `x-default`
`hreflang` relationships preserve exact page-to-page parity. Every desktop and
mobile navigation exposes all three language choices at once, with the current
language visibly active. Visual comparison remains required.

## Compact-keyword implementation addendum — 2026-07-29

The owner-approved pilot preserves the static template system and canonical
form contract. The former G1 synonym service document was consolidated into
the homepage. The new `/celvedis/virtuves-dizains/index.html` maps to the
template's long-form content pattern: breadcrumb hero, dense guide sections,
decision table, contextual links, FAQ, verified trust module and the same
canonical form. Local QA confirms 45 HTML documents, one form signature, valid
metadata and JSON-LD, no broken internal targets and no obsolete synonym-route
references. Visual comparison remains a post-deployment gate.

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
| `service-page.html` | fifteen `pakalpojumi/<slug>/index.html` files with breadcrumb hero, brief-led long-form content, practical guide, decision matrix, failure-mode cards, preparation panel, contextual internal links, FAQ schema, trust evidence and one canonical form |
| `prices.html` | `pakalpojumi/virtuves-cenas/index.html`: price factors and six comparable scope categories without invented monetary values |
| `faq.html` | `buj/index.html` plus visible, intent-specific FAQ sections on every demand page |
| `geo-page.html` | `/pilsetas/index.html` plus twenty `/pilsetas/virtuves-iekarta-<vieta>/index.html` pages with local context, planning constraints, delivery checks, source notes, FAQs, trust content and canonical forms |
| `styles.css` | root `styles.css`: adapted template layout, typography, cards, forms, conversion sections, navigation, responsive grids and focus states |
| `script.js` | root `script.js`: sticky header, mobile menu, FAQ accordions, floating mobile CTA and explicitly non-transmitting preview forms |
| Template images | `public/images/projects/`: eight optimized WebP assets selected from an owner-supplied real-project archive; selection and exclusions are recorded in `IMAGE-ASSET-REVIEW.md` |
| Brand assets | owner-supplied `public/images/logo.png` in every header/footer and owner-supplied root `favicon.png` in every document head |

## Approved page inventory

The static source contains the approved homepage plus fifteen DataForSEO-backed
demand pages:

1. `/`
2. `/celvedis/virtuves-dizains/`
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
- twenty owner-approved location pages →
  `/pilsetas/virtuves-iekarta-<vieta>/index.html`

Functional pages are `/ka-mes-stradajam/`, `/realizetie-projekti/`,
`/par-mums/`, `/kontakti/`, `/privatuma-politika/` and `/buj/`.

## Content and SEO evidence

- All 45 HTML documents have exactly one H1, a title, description and canonical.
- Homepage rendered-text count: 787 words.
- Service-page rendered-text range: 687–853 words; total: 11,198 words.
- Each demand page preserves its unique primary keyword, supporting terms,
  approved sections, topic-specific entities, questions and internal links.
- Every service page contains unique subject paragraphs, a page-specific
  three-row decision matrix, three page-specific mistakes and tailored
  consultation-preparation guidance. Exposed SEO labels and repetitive generic
  process paragraphs were removed.
- Every approved primary, secondary and long-tail term was checked against its
  mapped service page. No unresearched page or unsupported intent was added.
- The shared three-card trust section is limited to verified facts: the solution
  is tailored to the room, important scope is aligned before manufacture, and
  the confirmed offer includes design, manufacture, delivery and installation.
- Every demand page has valid visible FAQ content and matching JSON-LD.
- Homepage has valid WebSite JSON-LD.
- `robots.txt` blocks indexing and every page has `noindex, nofollow`.
- `sitemap.xml`, `404.html`, `favicon.svg` and social metadata are present.
- A complete local internal-link pass found no broken links.
- No unresolved template tokens or framework references remain in site source.
- No invented prices, reviews, guarantees, response times, projects,
  certifications, legal operator or contact details were introduced.
- All 25 form instances use the same ordered schema: name, phone, optional
  service area, address, required service and required project-details
  textarea. The service area precedes the street address so visitors select
  the city or territory first.
- Name, phone, address, service and project details are marked `required`.
- Every canonical name field includes a localized example placeholder:
  `Jānis Bērziņš` in Latvian, `John Smith` in English and `Иван Иванов` in
  Russian. The placeholder does not prefill or submit a value.
- Every service-area selector ends with `<option value="other">Cits</option>`.
- Every HTML page contains the standard form, including privacy and 404 pages.
- Every primary header, mobile, sidebar, body and floating CTA targets that
  page’s local `#lead-form`.
- All 25 pages use the exact owner-approved five-minute response message in the
  notification bar, a large responsive in-page trust panel and a high-contrast
  card beside the form.
- The non-transmitting demo notice remains visible; webhook delivery and the
  five-minute operational process remain production QA requirements.
- Internal-link crawl passed with no obsolete root-level service URLs.
- The 15 service pages, both hubs, canonicals, breadcrumbs and sitemap use the
  same `/pakalpojumi/` and `/pilsetas/` hierarchy.
- All 20 verified service areas have distinct city-page titles, H1s,
  descriptions, canonicals, local context, address/access guidance, local FAQ
  wording, source attribution and local risk-and-decision guidance. The set
  contains 777–821 rendered words per page and is reviewed in
  `CITY-CONTENT-REVIEW.md`.
- The supplied Wikipedia pages are used only for paraphrased administrative,
  geographic and settlement context. No encyclopedia copy is reproduced as
  generic filler, and local facts do not replace the project-specific room and
  delivery checks.
- City routes use `/pilsetas/virtuves-iekarta-<vieta>/` consistently across
  directories, hub links, canonicals, Open Graph URLs and sitemap entries.
- The light geo hero overrides the template's white-on-dark typography with
  explicit dark heading, paragraph, breadcrumb and metadata-chip colors.
- Because the site has not launched publicly, obsolete flat preview routes are
  removed rather than retained as duplicate HTML; production redirects are not
  required for an unlaunched URL set.

## Static-stack evidence

- City-page static-stack run `30446969961`: passed.
- City-page GitHub Pages deployment run `30447014736`: passed.
- The hub and five representative city routes return HTTP 200 with the new
  local content and shared static assets.
- Premium-content static-stack run `30442112887`: passed.
- Premium-content GitHub Pages deployment run `30442186176`: passed.
- Served HTML spot-check confirms the new page-specific guide and trust content
  on sampled service URLs.
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
