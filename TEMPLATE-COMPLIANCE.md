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
| `index.html` | root `index.html`: announcement bar, sticky navigation, mobile navigation, dense hero, embedded form, benefit list, trust bar, service cards, process, planning content, all demand-page links, service areas, FAQ and repeated form |
| `service-page.html` | fifteen `<slug>/index.html` files with breadcrumb hero, brief-led long-form content, keyword boundary, topic entities, internal links, process, FAQ schema and repeated form |
| `prices.html` | `virtuves-cenas/index.html`: price factors and six comparable scope categories without invented monetary values |
| `faq.html` | `buj/index.html` plus visible, intent-specific FAQ sections on every demand page |
| `geo-page.html` | no geo pages generated; all 20 verified areas appear on the homepage because the approved research did not support unique location URLs |
| `styles.css` | root `styles.css`: adapted template layout, typography, cards, forms, conversion sections, navigation, responsive grids and focus states |
| `script.js` | root `script.js`: sticky header, mobile menu, FAQ accordions, floating mobile CTA and explicitly non-transmitting preview forms |
| Template images | root `images/`: three compressed WebP illustrations, visibly disclosed as illustrative rather than completed projects |

## Approved page inventory

The static source contains the approved homepage plus fifteen DataForSEO-backed
demand pages:

1. `/`
2. `/virtuves-iekartas-pec-pasutijuma/`
3. `/virtuves-izgatavosana/`
4. `/iebuvetas-virtuves/`
5. `/virtuves-cenas/`
6. `/virtuves-dizains-un-projektesana/`
7. `/virtuves-planosana/`
8. `/virtuves-uzstadisana/`
9. `/stura-un-l-veida-virtuves/`
10. `/mazas-virtuves/`
11. `/modernas-virtuves/`
12. `/virtuves-ar-salu/`
13. `/virtuves-skapisi/`
14. `/virtuves-fasades/`
15. `/virtuves-furnitura/`
16. `/virtuves-interjers/`

Functional pages are `/ka-mes-stradajam/`, `/realizetie-projekti/`,
`/par-mums/`, `/kontakti/`, `/privatuma-politika/` and `/buj/`.

## Content and SEO evidence

- All 23 HTML documents have exactly one H1, a title, description and canonical.
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

## Static-stack evidence

- Required root `index.html`, `styles.css` and `script.js`: present.
- React, Next.js, Vinext, Vite, TypeScript/TSX, Node/npm, Wrangler, Drizzle,
  Cloudflare worker code, Sites files and build output: absent.
- Local equivalent of `.github/workflows/static-stack-policy.yml`: passed.
- GitHub Actions static-stack policy run `30429879248`: passed.
- Direct static preview deployment run `30429932394`: passed.

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
