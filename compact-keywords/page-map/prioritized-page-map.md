# Compact-keyword prioritized page map

Date: 2026-07-29

Market: Google Latvia (`location_code: 2428`)

Language: Latvian (`language_code: lv`)

Evidence status: **36 of 36 shortlisted queries validated**

Implementation status: **owner-approved; implemented 2026-07-29**

## Decision summary

The complete-query package changes the earlier provisional map. It supports an
eight-item pilot: seven existing-page improvements and one genuinely distinct
new informational page.

The evidence does **not** support creating a page for every keyword wording.
Google groups many of the phrases into the same result pattern. Splitting those
phrases would create cannibalization, thin pages or pages that attract retail
and installation-only traffic the verified business does not serve separately.

### Strongest decisions

1. Five transactional custom-kitchen phrases belong to one core cluster:
   `virtuves pēc pasūtījuma`, `virtuve pēc pasūtījuma`,
   `virtuves uz pasūtījumu`, `virtuves mēbeles pēc pasūtījuma` and
   `virtuves iekārtas pēc pasūtījuma`. The homepage should own this cluster.
2. Manufacturing is a distinct commercial cluster and keeps its existing page.
3. Built-in kitchens form their own mixed-commercial cluster and keep their
   existing page.
4. Price and quote searches form a separate decision-stage cluster and belong
   on the existing price page.
5. `virtuves dizains` is primarily visual/informational and differs from the
   stronger service intent behind `virtuves projektēšana`. A new guide page is
   justified, while the existing design/project service page should focus on
   project work.
6. Planning is informational and can remain a separate existing page when it
   answers functional-layout questions rather than duplicating project work.
7. Installation-only, retail product and most layout/property modifiers do not
   justify new pages.
8. The Riga result includes a local pack, but its organic results largely
   overlap the national core query. The evidence does not justify multiplying
   location pages or keyword variants.

## Evidence rules

- Search volume, CPC, difficulty and intent are copied from returned DataForSEO
  evidence.
- All 36 exact queries were executed through SERP Organic Live Advanced.
- The connector could not export unmodified full response bodies. The package
  includes every exact request and the complete normalized SERP evidence used.
- Missing Keyword Overview rows remain `not returned`, not zero.
- No Search Console evidence is available because the site is not yet
  indexable.
- Competitor rankings are not treated as target-domain rankings.
- A new page is approved only when intent, result composition, business fit and
  differentiation all support it.

## Recommended eight-item pilot

| Priority | Type and decision | Target URL | Primary query | Supporting queries | Evidence | Proposed title / H1 | Required differentiation | Risk | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| P1 | **Existing: merge + improve** | `/` | `virtuves pēc pasūtījuma` | `virtuve pēc pasūtījuma`; `virtuves uz pasūtījumu`; `virtuves mēbeles pēc pasūtījuma`; `virtuves iekārtas pēc pasūtījuma` | All five are G1 and transactional. Each has volume 90. Direct custom-kitchen providers dominate. Singular/plural core SERPs overlap 7/10 URLs. | Title: `Virtuves pēc pasūtījuma — projektēšana, izgatavošana un uzstādīšana`; H1: `Virtuves pēc pasūtījuma jūsu telpai un ikdienai` | Complete offer, decision path, process, verified service coverage and project proof when available. | **High cannibalization** if `/pakalpojumi/virtuves-iekartas-pec-pasutijuma/` continues targeting the same cluster. That URL should be merged or materially retargeted during implementation. | **High** |
| P2 | **Existing: improve** | `/pakalpojumi/virtuves-izgatavosana/` | `virtuves izgatavošana` | `virtuves iekārtas izgatavošana`; `virtuves mēbeļu izgatavošana`; `virtuves izgatavošana un uzstādīšana` | G2 manufacturing cluster. Primary volume 90; two supporting terms volume 70. Result sets mix direct manufacturers, retail, marketplaces and calculators. The primary overlaps the core cluster by only 4/10 URLs. | Title: `Virtuves izgatavošana pēc individuāla projekta`; H1: `Virtuves izgatavošana no saskaņota projekta līdz uzstādīšanai` | Manufacturing workflow, inputs, handoffs, quality checks and installation preparation using only verified facts. | Moderate overlap if it becomes another generic custom-kitchen landing page. | **High** |
| P3 | **Existing: improve** | `/pakalpojumi/iebuvetas-virtuves/` | `iebūvējamās virtuves` | `iebūvējamās virtuves iekārtas` | G3 mixed-commercial built-in cluster. Both have volume 70. Custom built-in providers rank alongside marketplaces and ready-made retail categories. | Title: `Iebūvējamās virtuves pēc individuāliem izmēriem`; H1: `Iebūvējamā virtuve, kas pielāgota telpai` | Exact-fit decisions, appliance integration, tall storage, utilities and difference from ready-made retail units. | Ambiguity with built-in appliances; keep language explicitly about complete fitted furniture. | **High** |
| P4 | **Existing: improve** | `/pakalpojumi/virtuves-cenas/` | `iebūvējamās virtuves cenas` | `virtuves tāme`; `virtuves cenas aprēķins`; `cik maksā virtuves iekārta` | G4 quote/price cluster. Primary volume 70, CPC €1.46, KD 16; `cik maksā...` volume 40. Calculators and price pages dominate, while `virtuves tāme` is more ambiguous. | Title: `Virtuves cenas un tāme — kas veido kopējo izmaksu`; H1: `Kas veido virtuves pēc pasūtījuma cenu` | Cost drivers, estimate inputs, scope checklist and honest explanation of why a project must be specified. No invented ranges or calculator. | Expectation mismatch if the page promises exact prices without owner data. | **High** for price intent; medium for `tāme` |
| P5 | **New page: approve** | `/celvedis/virtuves-dizains/` | `virtuves dizains` | visual style, colour, material and composition questions from genuine content research | Volume 320, CPC €0.83. G5 is mostly informational and visual inspiration; it is not a pure service SERP and is distinct from G6 project work. | Title: `Virtuves dizains: kā saskaņot izskatu un funkcionalitāti`; H1: `Virtuves dizains no idejas līdz pārdomātam risinājumam` | A substantial visual decision guide, examples using available suitable images, design checklist and contextual path to project consultation. | Thin or sales-led copy would fail the informational intent. Must not duplicate the project-service page. | **High** |
| P6 | **Existing: retarget + improve** | `/pakalpojumi/virtuves-dizains-un-projektesana/` | `virtuves projektēšana` | `virtuves konsultācija` | G6 has stronger commercial/service intent than `virtuves dizains`; volume 20, CPC €1.25. Dedicated project pages, planners and marketplaces rank. Consultation is G8 mixed and belongs as a conversion step, not a separate page. | Title: `Virtuves projektēšana un konsultācija`; H1: `Virtuves projektēšana pirms izgatavošanas` | Required measurements, workflow, decisions resolved by the project and outputs described without inventing deliverables. | Existing title currently overlaps design. Separate informational design content clearly. | **High** |
| P7 | **Existing: improve** | `/pakalpojumi/virtuves-planosana/` | `virtuves plānošana` | `funkcionāls virtuves plānojums` | G7 informational planning cluster. Primary volume 50. Advice dominates; IKEA is the main explicit planning-service result. | Title: `Virtuves plānošana un funkcionāls plānojums`; H1: `Virtuves plānošana ērtai ikdienai` | Work zones, movement, storage, clearances, utilities and a practical pre-project checklist. | Cannibalizes project page if it discusses the same service outputs instead of planning decisions. | **High** |
| P8 | **Existing: improve, narrow target** | `/pakalpojumi/virtuves-ar-salu/` | `virtuve ar salu` | `virtuve ar pussalu` as a comparison section | `virtuve ar salu` has volume 10 and G12 mixed project/service intent. `virtuves sala` is G13 ecommerce and must be excluded. Peninsula results are sparse and informational, so they support a section rather than a page. | Title: `Virtuve ar salu vai pussalu — plānošanas nosacījumi`; H1: `Virtuve ar salu pēc individuāla plāna` | Space requirements, movement, utilities, seating, storage and island-versus-peninsula decision framework. | Accidentally targeting noun-only `virtuves sala` would attract product-shopping traffic. | **Medium–high** |

Every pilot page uses the existing site-wide CTA: `Pieteikt konsultāciju`.

## Complete 23-group disposition

| SERP group | Queries | Page action | Decision and rationale |
|---|---|---|---|
| G1 core custom kitchen | Five core custom-kitchen variants | Homepage | **Merge.** Same transactional visitor need and provider-dominated SERPs. Do not maintain a synonym page competing with the homepage. |
| G2 manufacture | Three manufacture variants plus manufacture-and-install | Existing manufacturing page | **Approve.** Distinct mixed-commercial manufacturing need. Include installation only as the final stage of the full project. |
| G3 built-in | `iebūvējamās virtuves`; `iebūvējamās virtuves iekārtas` | Existing built-in page | **Approve.** Distinct built-in terminology and result set, with retail ambiguity addressed in content. |
| G4 price/quote | `iebūvējamās virtuves cenas`; `virtuves tāme`; `virtuves cenas aprēķins` | Existing price page | **Approve and merge.** Strong calculator/price intent. `Tāme` is ambiguous, so it remains supporting rather than primary. |
| G5 design information | `virtuves dizains` | New guide page | **Approve new page.** High measured informational demand and a result set distinct from project services. |
| G6 project/planning service | `virtuves projektēšana` | Existing project-service page | **Approve.** Commercial/service pattern is stronger than design inspiration. |
| G7 planning information | `virtuves plānošana`; `funkcionāls virtuves plānojums` | Existing planning page | **Approve and merge.** Informational advice need distinct from project-service output. |
| G8 consultation | `virtuves konsultācija` | Project-page section and site CTA | **Merge.** Mixed SERP and no returned overview metric; not enough for a separate page. |
| G9 installation | `virtuves piegāde un uzstādīšana`; `virtuves uzstādīšanas cena` | Existing installation page only as verified full-project coverage | **Reject as acquisition targets.** SERPs emphasize retail logistics, appliance installation and installation-only trades outside the verified complete-project boundary. |
| G10 corner/L | `stūra virtuves`; `L veida virtuve` | Existing corner/L page | **Keep, not pilot.** `stūra virtuves` has volume 70, but retail/product results dominate and L-shape intent is mixed. Reassess after core pilot. |
| G11 U layout | `U veida virtuve` | Section on layout page | **Reject new page.** Informational/retail results dominate with no clear service-page pattern. |
| G12 island project | `virtuve ar salu` | Existing island page | **Approve narrow improvement.** Some custom-project/service intent and measurable volume 10. |
| G13 island retail | `virtuves sala` | None | **Reject.** Volume 320 but overwhelmingly ecommerce/product intent outside the complete-kitchen offer. |
| G14 peninsula | `virtuve ar pussalu` | Section on island page | **Merge.** Sparse informational/social SERP without stable service-page pattern. |
| G15 one-wall ambiguous | `vienas sienas virtuve` | Optional section | **Reject new page.** Google frequently interprets “sienas” as wall panels or decoration. |
| G16 parallel/noisy | `paralēla virtuve` | Optional section | **Reject new page.** Low-quality and semantically noisy results. |
| G17 galley | `gaiteņa tipa virtuve` | Optional small-kitchen section | **Reject new page.** Mostly informational and loosely related results. |
| G18 small apartment | `virtuve mazam dzīvoklim` | Existing small-kitchen page | **Keep, not pilot.** Informational content and project examples dominate; direct service intent is weak. |
| G19 hruščovka | `virtuves iekārtas hruščovkām` | Section on small-kitchen page | **Merge.** Specific context and volume 10, but mixed articles/retail and only one full-cycle provider. |
| G20 private house | `virtuve privātmājai` | Future proof-led guide/section | **Reject new page now.** Galleries dominate and no overview row was returned. Real project proof would be required. |
| G21 new build | `virtuve jaunbūvei` | Future guide/section | **Manual review after pilot.** Providers dominate, but the modifier is rarely targeted and no overview row was returned. Do not create a page under the measurable-demand rule. |
| G22 open plan | `atvērta plānojuma virtuve` | Planning-page section | **Merge.** Informational intent dominates and direct service evidence is limited. |
| G23 Riga core | `virtuves pēc pasūtījuma Rīga` | Existing Riga page, no new variants | **Manual review.** Local pack exists, but organic URLs substantially overlap the non-local core query and no overview row was returned. Preserve the verified-location page; do not multiply local keyword pages from this evidence. |

## Existing URLs requiring a later implementation decision

### `/pakalpojumi/virtuves-iekartas-pec-pasutijuma/`

Its target phrase belongs to G1 with the homepage. Keeping both pages aimed at
the same need is not evidence-supported. During implementation, either:

- merge its strongest useful content into the homepage and permanently
  redirect the URL; or
- retarget it to a genuinely narrower, non-G1 topic only if the content and
  business facts support that distinction.

The evidence currently favours the merge.

### `/pakalpojumi/virtuves-interjers/`

Do not make it a second `virtuves dizains` page. It must either serve a clearly
different supporting purpose, remain outside the compact-keyword pilot, or be
consolidated later.

### City pages

The research does not justify deleting verified service-location pages, but it
also does not validate 20 separate organic intents. They require ongoing
doorway-risk review, genuinely local utility and eventual Search Console
evidence. Do not create additional city/query permutations.

## Explicit rejections

- Separate pages for singular/plural or `mēbeles`/`iekārtas` core synonyms.
- A standalone `virtuves konsultācija` page.
- Delivery-only or installation-price acquisition pages.
- A standalone page targeting retail `virtuves sala`.
- Separate U-shape, peninsula, one-wall, parallel, galley, private-house,
  new-build or open-plan pages at this stage.
- Any additional city pages or keyword-swapped city duplicates.
- Broad `virtuves skapīši` acquisition targeting: earlier research recorded
  volume 1000, but the SERP was retail-dominant and mismatched to the verified
  full-project offer.

## Approval gate

The owner approved this revised map and the pilot was implemented locally on
2026-07-29. Automated implementation evidence is recorded in
`compact-keywords/implementation-planning/pilot-implementation-report.md`.

Approval of this map authorizes:

1. seven existing-page improvements;
2. one new informational design guide;
3. merging the G1 synonym page into the homepage with an appropriate redirect;
4. internal-link and metadata adjustments required by those decisions; and
5. content and SEO QA for the pilot.

It does not authorize public production deployment or invented business facts.

## Missing evidence for later measurement

- Search Console query/page data after the production domain is indexable.
- Owner-approved price ranges or estimate examples.
- Verified project examples and proof for layout/property/location topics.
- Analytics conversion data by landing page.
