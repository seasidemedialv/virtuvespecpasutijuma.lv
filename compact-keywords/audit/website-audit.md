# Compact-keyword website audit

**Domain:** `virtuvespecpasutijuma.lv`  
**Audit date:** 2026-07-29  
**Locale:** Latvia / Latvian  
**Guide:** `COMPACT_KEYWORDS_GUIDE.md` read in full  
**Decision state:** research request only; no page map or implementation approved

## 1. Executive finding

The website already covers the broad custom-kitchen offer and 15 measured-demand
service or decision topics. It also contains 20 owner-directed location pages.
The compact-keyword opportunity is therefore not “publish more kitchen pages.”
The research must find specific, commercially useful needs that are not already
satisfied by the existing architecture, or queries for which an existing page
is visible but under-targeted.

The strongest current candidates for **existing-page improvement research** are:

1. the homepage and complete custom-kitchen-unit page, because their broad
   phrases can absorb several close commercial variants;
2. the price page, because price intent is strong but actual price evidence is
   still missing;
3. the cabinet page, because its reported primary volume is high but likely
   mixes custom-project and retail-product intent;
4. installation, design and planning pages, where ranking-query evidence is
   needed to separate service intent from informational intent;
5. service and city hubs, if Search Console shows impressions for category or
   local discovery queries.

Possible **distinct new-page themes for research only** include configuration
needs not presently owned by a page (for example straight, parallel/galley,
U-shaped or peninsula layouts), customer situations (new-build kitchen,
apartment kitchen, open-plan kitchen, family-focused storage) and outcome-led
queries. None is approved. Each requires measurable evidence, live-SERP intent
validation, a clearly different visitor need and page-specific content or proof.

The 20 city pages require special caution. They represent genuine service
coverage and now contain substantially differentiated local content, but the
earlier location follow-up reported no measurable demand for the tested phrases.
Do not multiply city/service combinations without new evidence; that would create
material doorway risk.

## 2. Business and offer inventory

### Verified offer

The business designs, manufactures, delivers and installs custom kitchens
tailored to each customer's home and needs.

Confirmed capabilities:

- kitchen-specific planning and design;
- made-to-measure kitchen manufacture;
- delivery;
- installation as part of the confirmed complete process;
- custom consideration of room geometry, storage, appliance positions,
  movement, facades, cabinets and fittings;
- owner-confirmed contact initiation within five minutes after a successfully
  submitted form.

Important boundaries:

- installation-only availability is not confirmed;
- electrical, plumbing, HVAC and appliance-connection work is not confirmed;
- general whole-home interior design is excluded;
- retail kitchen sets, individual appliances, tables, chairs, taps, extractors
  and unrelated products are excluded;
- exact materials, hardware brands, prices, warranties, production times,
  certifications and payment terms are unknown.

### Likely audiences, requiring research validation

- homeowners planning a complete made-to-measure kitchen;
- apartment owners dealing with limited space or access constraints;
- private-house and new-build owners coordinating the kitchen with a larger
  open-plan room;
- renovators replacing or integrating a kitchen, without assuming demolition
  or construction services;
- people comparing layouts, storage, design, manufacturing, installation and
  total project cost;
- decision-makers in a household rather than business, school or enterprise
  group buyers.

No verified B2B, developer, architect, landlord, hospitality or commercial
kitchen offer exists. Those audiences must not be introduced without owner
confirmation.

### Problems and desired outcomes already addressed

- fitting a kitchen to actual room dimensions;
- arranging work zones, movement and appliance openings;
- using compact, corner, full-height and island layouts;
- coordinating cabinets, facades, fittings and visual composition;
- understanding what affects project price;
- understanding manufacture and installation preparation;
- organizing delivery access by exact property;
- progressing from initial information to a coordinated project.

## 3. Existing information architecture

### Page inventory

The source contains 45 HTML documents: 44 canonical website URLs plus `404.html`.
All 44 canonical URLs are present in `sitemap.xml`.

| Family | Count | Current role |
|---|---:|---|
| Homepage | 1 | broad end-to-end commercial entry |
| Service hub | 1 | groups all service, layout, style and component pages |
| Demand-backed service pages | 15 | distinct service or kitchen-decision intents |
| Location hub | 1 | lists all verified service areas |
| Owner-directed location pages | 20 | local coverage and property/access guidance |
| Functional/trust pages | 6 | process, FAQ, about, contact, privacy and projects |
| Error page | 1 | useful 404 with local form |

### Existing service URLs and intent ownership

| URL | Current intent |
|---|---|
| `/` | complete custom-kitchen provider |
| `/pakalpojumi/virtuves-iekartas-pec-pasutijuma/` | complete made-to-measure kitchen unit |
| `/pakalpojumi/virtuves-izgatavosana/` | manufacture and production |
| `/pakalpojumi/iebuvetas-virtuves/` | room-integrated built-in kitchens |
| `/pakalpojumi/virtuves-cenas/` | cost factors and quote preparation |
| `/pakalpojumi/virtuves-dizains-un-projektesana/` | kitchen-specific design/project |
| `/pakalpojumi/virtuves-planosana/` | functional layout and ergonomics |
| `/pakalpojumi/virtuves-uzstadisana/` | installation preparation and scope |
| `/pakalpojumi/stura-un-l-veida-virtuves/` | corner/L-shaped configuration |
| `/pakalpojumi/mazas-virtuves/` | compact-space decisions |
| `/pakalpojumi/modernas-virtuves/` | modern kitchen direction |
| `/pakalpojumi/virtuves-ar-salu/` | island feasibility and function |
| `/pakalpojumi/virtuves-skapisi/` | cabinet and storage configuration |
| `/pakalpojumi/virtuves-fasades/` | facade selection |
| `/pakalpojumi/virtuves-furnitura/` | fittings and mechanisms |
| `/pakalpojumi/virtuves-interjers/` | kitchen-only visual composition |

All location URLs follow:
`/pilsetas/virtuves-iekarta-<vieta>/`.

### Navigation and crawl paths

- Main navigation exposes Services, Cities, Process, Prices, FAQ and About.
- The Services dropdown exposes six high-priority service pages.
- `/pakalpojumi/` links all 15 service pages in grouped sections.
- `/pilsetas/` links all 20 location pages.
- Footer links repeat the core service and trust paths.
- Priority service pages are one click from the homepage.
- All location pages are two clicks from the homepage and have one contextual
  inlink from the location hub.
- No internal links are broken.
- The only intentionally unreachable document is `404.html`.

The city pages' single inlink is technically adequate but weak for importance
signals. Do not add more links until the page map determines whether local
queries have evidence and which pages deserve priority.

## 4. Conversion paths and reusable components

Every HTML document contains one local `#lead-form`. Primary CTAs stay on the
current page and scroll to that form.

Canonical form fields:

1. name;
2. phone;
3. service area;
4. address;
5. requested topic/service;
6. project details.

The primary form action is `Pieteikt konsultāciju`. The form is deliberately
non-transmitting in preview; there is no webhook or conversion measurement.

Reusable conversion and content components include:

- announcement bar with five-minute response commitment;
- sticky desktop header and mobile navigation;
- local header, body and mobile CTAs;
- canonical consultation form;
- high-contrast five-minute response card;
- service cards and link grids;
- process steps;
- practical guides and checklists;
- decision tables and callouts;
- mistake/risk cards;
- trust-evidence cards;
- FAQ accordion with matching FAQ schema on demand and city pages;
- breadcrumbs;
- service and location hubs;
- footer and legal-status notices.

## 5. Available proof and trust evidence

Available and usable:

- owner-supplied logo and favicon;
- verified complete four-stage capability;
- verified list of 20 service areas;
- verified five-minute contact-initiation commitment;
- three optimized illustrative kitchen images, clearly disclosed as
  illustrations;
- transparent demo-form and unverified-fact notices;
- local-context sources for the 20 city pages.

Unavailable:

- real project photography or before/after screenshots;
- customer testimonials or reviews;
- case-study results;
- workshop, manufacture or installation photographs;
- named team members;
- legal operator and registration details;
- public phone, email or business address;
- years in business;
- client counts, ratings, awards, associations or certifications;
- verified prices, payment model, warranties or delivery/production timelines;
- material and hardware brands;
- analytics, lead or revenue results.

The uploaded UI screenshots document preview feedback, not business proof. The
`realizetie-projekti` page is intentionally an empty state and must not be
treated as a portfolio.

## 6. Technical SEO audit

### Passing foundation

- plain static HTML/CSS/JavaScript; no build/runtime dependency;
- HTTPS production canonicals;
- one unique title, meta description, H1 and canonical on every document;
- no duplicate titles, descriptions or H1s in the current source;
- semantic headings, breadcrumbs and `lang="lv"`;
- valid sitemap containing all 44 canonical URLs;
- no broken internal links;
- pages are reachable within one or two clicks;
- valid visible-content-matched FAQ schema on service and city pages;
- WebSite schema on the homepage;
- descriptive image alt text; no empty image alt attributes;
- compressed WebP illustrative imagery;
- responsive layout and keyboard-focus styles in source;
- preview is consistently protected from indexing.

### Blocking or material issues

1. **The site is not indexable.** Every page has `noindex, nofollow`, and
   `robots.txt` disallows the entire site. This is appropriate for preview but
   means current-domain ranking data may be empty until production launch.
2. **No Search Console evidence is available.** There is no query/page export,
   index report or verified-property information.
3. **No analytics or conversion tracking exists.** The form does not transmit,
   and there is no baseline for qualified leads.
4. **Production identity and trust are incomplete.** Contact, legal, proof,
   price and warranty facts remain unknown.
5. **Metadata needs evidence-led review.** Thirteen titles exceed 60 characters
   and 20 descriptions are under 120 characters. These are not automatic SEO
   errors, but current SERP data should determine whether clearer wording would
   improve relevance or click-through rate.
6. **OG imagery is generic.** All pages use the same illustrative hero image.
   Future high-priority pages would benefit from relevant, authentic proof.
7. **Documentation drift exists.** Some status word counts and earlier form
   counts do not match the current 45-document source. Future decisions must use
   the live files, not old totals.
8. **Visual QA is still blocked.** Source checks cannot confirm desktop/mobile
   hierarchy, clipping, table behavior or interaction quality.

## 7. Content and cannibalization audit

### Existing overlap to watch

- `/` versus `/pakalpojumi/virtuves-iekartas-pec-pasutijuma/`: broad provider
  intent versus product/system intent; live SERPs must confirm separation.
- design versus planning versus interior: visual project, functional layout and
  kitchen-only composition are distinct in copy, but ranking overlap is unknown.
- manufacture versus complete kitchen unit: production process versus final
  coordinated system.
- built-in kitchens versus custom kitchens: room integration versus broad
  made-to-measure offer.
- prices versus installation-price phrasing: full-project cost versus
  installation scope.
- cabinet, facade and fittings pages: current copy is project-led, but SERPs may
  be dominated by retail/ecommerce intent.
- every location page targets one broad local service phrase; combining each
  city with every service topic is not justified.

### Existing-page improvement opportunities to test

| Existing page | Research question |
|---|---|
| `/` | Which commercial custom-kitchen variants already produce impressions or competitor visibility? |
| Complete kitchen-unit page | Does Google separate `virtuves iekārtas pēc pasūtījuma` from the homepage phrase? |
| Prices | Which price, quote and “how much” variants share one commercial SERP, and what evidence do ranking pages provide? |
| Cabinets | How much of `virtuves skapīši` is retail intent versus made-to-measure project intent? |
| Installation | Is the target query looking for installation-only labor, total installation cost or full-project providers? |
| Design / planning / interior | Which terms share results and which represent distinct deliverables? |
| Service hub | Does it receive broad service-category impressions that justify stronger category copy? |
| City hub/pages | Is there any current local visibility despite zero measured location follow-up volume? |

### Possible distinct new-page themes to validate

These are research seeds, not recommendations:

- straight/single-wall kitchen;
- parallel or galley kitchen;
- U-shaped kitchen;
- kitchen with peninsula;
- open-plan kitchen;
- kitchen for an apartment;
- kitchen for a private house or new build;
- storage-led kitchen for a family;
- appliance-integration planning;
- floor-to-ceiling or full-height kitchen storage;
- made-to-measure corner cabinet solutions, only if distinct from existing
  cabinet and corner-kitchen pages;
- consultation/quote intent variants not already satisfied by the price page.

Reject or merge any theme whose live results substantially overlap an existing
page. Do not create pages for adjective, singular/plural, spelling or city-name
variations alone.

## 8. Compact-keyword evaluation rules for returned research

The later page map must:

- prefer improvement of an existing page when one coherent page can satisfy the
  query;
- retain low/zero-volume evidence for review but never treat it as proof;
- distinguish DataForSEO estimates from Search Console observations;
- compare related queries by live top-result overlap;
- reject retail/product intent the business does not satisfy;
- reject general interior design, construction trades and appliance retail;
- require page-specific proof, examples or useful decision content;
- keep priority pages within two or three clicks;
- avoid new city/service permutations without demand and distinct local value;
- propose only approximately five to ten pilot changes after research;
- wait for explicit page-map approval before implementation.

## 9. Missing information that would materially improve research

### Search Console

- verified property type and production launch/indexation date;
- last 16 months of query-by-page data for Google Web, Latvia and Latvian;
- clicks, impressions, CTR and average position;
- device, country and search-appearance breakdowns;
- queries at positions approximately 4–30;
- queries ranking through an unintended page;
- page-indexing and canonical reports;
- submitted sitemap status and crawl issues;
- Core Web Vitals/mobile usability data.

If the production domain has never been indexable, state that clearly; an empty
export is not evidence of no demand.

### Analytics and conversion data

- qualified form submissions by landing page;
- form-start and form-completion rates;
- phone/email conversions once those channels exist;
- lead quality, project value and closed-project outcomes;
- device and location performance.

### Business facts

- public brand and legal operator;
- phone, email, physical/service address and opening hours;
- exact service inclusions and exclusions;
- whether installation-only requests are accepted;
- design deliverables and revision process;
- measurement, delivery and installation workflow;
- actual material, facade, worktop and hardware options;
- genuine prices or example project ranges;
- warranties, production times and payment terms;
- real projects, images, problems solved and permission to publish;
- testimonials and review sources;
- team/workshop information;
- strongest-margin or highest-value project types;
- actual competitors the owner considers comparable;
- whether apartment, private-house, new-build, renovation, developer or B2B
  audiences are actively served.

## 10. Stop condition

No website files, pages, navigation, copy or design were changed during this
audit. The next permitted action is for the owner to run the three prompts and
return all raw and normalized evidence. A page map comes after that evidence
and requires separate approval before implementation.

