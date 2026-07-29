# Project Status — virtuvespecpasutijuma.lv

Last updated: 2026-07-29

- **Workflow state:** QA
- **Build allowed:** Static source passed the hard policy gate
- **Preview:** direct static preview deployed; visual approval pending
- **Production deployment:** NO
- **Template source:** `seasidemedialv/website-template` commit `6164a5664c46ca45a8386c829646facf1c9b4dca`
- **DataForSEO research:** approved and preserved

## Mandatory next action

Run and pass the static-stack policy after the approved URL hierarchy change,
deploy the refreshed preview, then complete desktop and mobile visual
comparison, interaction checks and console review. Do not mark the preview
compliant before those checks pass.

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
- Service architecture: 15 supporting demand pages are grouped under
  `/pakalpojumi/`, with `/pakalpojumi/` as the service hub
- Location pages: deferred; `/pilsetas/` is the service-area hub and future
  approved location pages must use `/pilsetas/virtuves-pec-pasutijuma-<vieta>/`

## Current static source

- Root `index.html`, `styles.css`, `script.js`
- One directory `index.html` for every approved URL
- Service pages use the standard `/pakalpojumi/<slug>/` hierarchy
- The `/pakalpojumi/` and `/pilsetas/` hub pages provide navigation,
  explanatory content and their own local enquiry forms
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
- HTML documents checked before the hierarchy change: 23
- Every document: one H1, title, description and canonical
- Demand-page content: 573–733 rendered words
- Homepage content: 787 rendered words
- JSON-LD syntax: valid
- Internal links: no broken targets
- Unresolved template tokens: none
- Framework references in website source: none
- Forms: non-transmitting and visibly labelled
- Forms after the hierarchy change: 25 identical instances across 25 HTML pages
- Standard fields: name, phone, service area, address, topic and project details
- Required controls: name, phone, address, service and project details
- Every service-area dropdown ends with the stable `other` value labelled `Cits`
- Primary CTA targets: all resolve to the current page’s `#lead-form`
- Preview indexing: blocked by both meta robots and `robots.txt`

## GitHub checks completed

- Static source commit: `8e1372e1f5efffa940628b189a911db1a16a9999`
- Static-stack policy run `30429879248`: passed
- Direct static preview deployment run `30429932394`: passed
- Preview homepage, price page, FAQ, stylesheet, script and hero image: HTTP 200
- Preview URL:
  `https://seasidemedialv.github.io/website-preview/virtuvespecpasutijuma/`

## Remaining gates

1. Static-stack policy and link/SEO QA must pass for the new hierarchy.
2. Desktop and mobile visual QA must pass.
3. Browser console and interaction checks must pass.
4. Content/SEO visual comparison must be recorded.
5. Owner visual review is then required.
6. Production still requires final brand, legal/contact/form facts and explicit
   deployment approval.

**Decision:** static policy and deployment gates passed. Visual QA cannot
continue because the saved browser permission blocks the preview domain and
forbids a workaround.
