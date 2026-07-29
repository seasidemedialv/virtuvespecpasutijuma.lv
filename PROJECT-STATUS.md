# Project Status — virtuvespecpasutijuma.lv

Last updated: 2026-07-29

- **Workflow state:** QA
- **Build allowed:** Static source passed the hard policy gate
- **Preview:** direct static preview deployed; visual approval pending
- **Production deployment:** NO
- **Template source:** `seasidemedialv/website-template` commit `6164a5664c46ca45a8386c829646facf1c9b4dca`
- **DataForSEO research:** approved and preserved

## Mandatory next action

1. Update every canonical form so name, phone, address, requested service and
   more-information controls are all marked required and validate consistently.
2. Add `Cits` as the final selectable option in every service-area dropdown.
3. Migrate every service route to `/pakalpojumi/<service>/` and create the substantive `/pakalpojumi/` hub.
4. Create a substantive `/pilsetas/` hub now for the verified service areas; reserve `/pilsetas/<service>-<city>/` for individually approved city pages.
5. Update all navigation, internal links, breadcrumbs, canonicals, sitemap and schema to the new route inventory.
6. Pass the canonical-form, local-CTA and URL-architecture checks.
7. Then complete desktop/mobile visual comparison, interaction and console QA.
8. Do not mark the preview compliant before these checks pass.

## Research and architecture preserved

- Research ID: `virtuvespecpasutijuma-topic-led-research-2026-07-28`
- Evidence commit: `0bcf238ff4bcef78e8a0f77f02fe440d3176a17c`
- Locale: Google Latvia / Latvian
- Qualified keywords reviewed: 153
- Main research cost: $0.346720
- Location follow-up: $0.090000
- Total research cost: $0.436720
- Review status: approved
- Approved demand architecture: homepage plus 15 supporting pages
- Location pages: deferred; 20 areas remain verified service coverage

## Current static source

- Root `index.html`, `styles.css`, `script.js`
- One directory `index.html` for every approved URL
- Six functional/trust pages
- `404.html`, `robots.txt`, `sitemap.xml`, `favicon.svg`
- Three compressed illustrative WebP images
- Static-stack policy workflow
- Project, research, keyword-map and page-brief documentation

The rejected React/Next/Vinext/Vite/npm/Wrangler/Drizzle/Cloudflare/Sites
implementation has been removed from the repository working tree. A recoverable
local backup exists outside the repository and will not be committed.

## Verified business facts used

- Domain: `virtuvespecpasutijuma.lv`
- Offer: custom-kitchen design, manufacture, delivery and installation tailored
  to each customer’s home and needs
- Service areas: Rīga, Mārupe, Stopiņi, Ulbroka, Ķekava, Babīte, Garkalne,
  Salaspils, Ādaži, Jūrmala, Olaine, Piņķi, Carnikava, Ropaži, Ikšķile, Ogre,
  Baldone, Saulkrasti, Jelgava and Sigulda

No exact brands, prices, warranty duration, production times, certifications,
reviews, customer examples, legal operator, phone, email or address were
invented.

## Local QA completed

- Local static-stack policy equivalent: passed
- HTML documents checked: 23
- Every document: one H1, title, description and canonical
- Demand-page content: 573–733 rendered words
- Homepage content: 787 rendered words
- JSON-LD syntax: valid
- Internal links: no broken targets
- Unresolved template tokens: none
- Framework references in website source: none
- Forms: non-transmitting and visibly labelled
- Forms: 25 visually consistent instances reported across 23 HTML pages
- Standard fields are present: name, phone, service area, address, service and project details
- **Form validation gate: NOT PASSED** — the five mandatory controls are not all marked `required`
- Primary CTA targets were reported as resolving to the current page's `#lead-form`; the new automated policy must verify this
- Preview indexing: blocked by both meta robots and `robots.txt`

## GitHub checks completed

- Static source commit: `8e1372e1f5efffa940628b189a911db1a16a9999`
- Static-stack policy run `30429879248`: passed
- Direct static preview deployment run `30429932394`: passed
- Preview homepage, price page, FAQ, stylesheet, script and hero image: HTTP 200
- Preview URL:
  `https://seasidemedialv.github.io/website-preview/virtuvespecpasutijuma/`

## Remaining gates

1. Desktop and mobile visual QA must pass.
2. Browser console and interaction checks must pass.
3. Content/SEO visual comparison must be recorded.
4. Owner visual review is then required.
5. Production still requires final brand, legal/contact/form facts and explicit
   deployment approval.

**Decision:** static policy and deployment gates passed. Visual QA cannot
continue because the saved browser permission blocks the preview domain and
forbids a workaround.
