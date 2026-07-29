# Project Status — virtuvespecpasutijuma.lv

Last updated: 2026-07-29

- **Workflow state:** VISUAL_QA_BLOCKED
- **Build allowed:** Static source passed the hard policy gate
- **Preview:** direct static preview deployed; visual approval pending
- **Production deployment:** NO
- **Template source:** `seasidemedialv/website-template` commit `6164a5664c46ca45a8386c829646facf1c9b4dca`
- **DataForSEO research:** approved and preserved

## Mandatory next action

Allow cloud-browser access to `seasidemedialv.github.io`, then complete desktop
and mobile visual comparison, interaction checks and console review for the
new hubs and nested service routes. Do not mark the preview compliant before
those checks pass.

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
- Owner-supplied PNG logo in `public/images/logo.png` is used in every header
  and footer
- Owner-supplied `favicon.png` is used as the favicon on every page
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

Owner-confirmed response commitment: contact is initiated within five minutes
after a successfully submitted enquiry form. The preview displays this planned
production promise while retaining the non-transmitting demo notice.

## Local QA completed

- Local static-stack policy equivalent: passed
- HTML documents checked after the hierarchy change: 25
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
- Every page repeats the five-minute response message in its notification bar,
  a compact floating trust badge and a high-contrast card inside the canonical
  form
- Preview indexing: blocked by both meta robots and `robots.txt`

## GitHub checks completed

- Nested-route source commit: `f5288b4fb40fa65d332e9d4f38a4850ba158f6ac`
- Static-stack policy run `30432498216`: passed
- Direct static preview deployment run `30432537869`: passed
- HTTP verification: both hubs and sampled nested service pages return 200;
  the obsolete flat service URL returns 404
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
