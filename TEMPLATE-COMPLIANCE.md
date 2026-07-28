# Template Compliance — virtuvespecpasutijuma.lv

**Status:** PASSED FOR PREVIEW REVIEW
**Template repository:** `seasidemedialv/website-template`
**Template commit:** `6164a5664c46ca45a8386c829646facf1c9b4dca`
**Review date:** 2026-07-28

This is a framework conversion of the restored static template. The original
Sites/Vinext visual architecture was removed from the rendered site. The
existing framework remains only as the build/runtime layer.

## Required-source record

| Template source | Rebuilt implementation | Mapping |
|---|---|---|
| `AGENTS.md` | this record, `PROJECT-STATUS.md`, QA commands | Mandatory foundation and gates |
| `NICHE-SETUP.md` | `lib/site-data.ts`, `app/layout.tsx`, route files | Niche tokens, page inventory, metadata and factual boundaries |
| `IMAGE-PROMPTS.md` | `public/images/*`, visible illustration labels | Generated images remain illustrative, never customer projects |
| `site-config.json` | `lib/site-data.ts`, `components/template-shell.tsx` | Offer, service areas, navigation, CTA and process content |
| `index.html` | `app/page.tsx` | Dense hero/form, benefits, trust strip, services, process, decision content, areas, FAQ and repeated CTA |
| `service-page.html` | `app/[slug]/page.tsx`, `components/service-page.tsx` | Breadcrumb, keyword-specific hero, long-form body, sticky sidebar, related services, process, FAQ and lead section |
| `geo-page.html` | homepage service-area section; location routes intentionally omitted | Coverage list preserved; no thin geo pages because the approved research found no reportable local demand |
| `prices.html` | `/virtuves-cenas/` plus `PriceCoverage` | Price-factor and scope comparison without invented monetary values |
| `faq.html` | `app/buj/page.tsx` and per-service FAQ sections | Central FAQ route plus intent-specific questions on every demand page |
| `styles.css` | `app/template.css` | Template layout grammar, spacing, cards, form, sticky navigation, conversion sections and responsive breakpoints |
| `script.js` | `public/script.js` | Mobile navigation, dropdown state and non-transmitting demo-form feedback |

## Homepage section mapping

| Template section | Exact implementation |
|---|---|
| Announcement bar | `components/template-shell.tsx` → `TemplateHeader` |
| Sticky desktop/mobile navigation | `TemplateHeader`; behaviour in `public/script.js` |
| Hero with embedded lead form | `app/page.tsx` → `.hero`, `LeadForm` |
| Feature checklist and paired CTA | `app/page.tsx` → `.hero-feats`, `.hero-actions` |
| Trust/fact strip | `app/page.tsx` → `.trust-bar`; uses only 4-stage/16-guide/20-area site facts |
| Service-card grid | `app/page.tsx` → featured service cards |
| Decision/stat section | `app/page.tsx` → `.decision-band` |
| Process | `ProcessSteps` used on home and service pages |
| Supporting decision content | six planning-principle cards |
| Full internal-link inventory | all 15 supporting demand pages |
| Service areas | all 20 verified locations, without separate thin pages |
| FAQ | homepage questions plus `/buj/` and per-page FAQs |
| Repeated conversion section | `LeadSection` |
| Multi-column footer | `TemplateFooter` |

## SEO-page coverage

- Homepage plus 15 supporting demand pages exactly match the approved
  keyword-to-page map.
- Each supporting page uses its brief’s unique H1, title, description, primary
  keyword, supporting terms, content sections and questions.
- Every page adds topic-specific decisions and entities rather than swapping a
  location or keyword in a shared paragraph.
- Each supporting page contains 569–714 rendered words in the QA build, one H1,
  a canonical URL, visible FAQs, FAQ structured data and at least three
  contextual internal links.
- The homepage contains 787 rendered words and links to the full demand-page
  inventory.
- No location pages were generated: 40 researched local phrases had no
  reportable demand. The 20 confirmed service areas remain visible as factual
  coverage.

## Conversion and factual-safety mapping

- Lead forms appear in the hero, repeated CTA sections and contact page.
- Forms are explicitly marked as preview demonstrations and transmit no data.
- No phone, email, legal identity or form destination has been fabricated.
- No reviews, project claims, prices, discounts, guarantees, response times,
  certifications, named material brands or production durations are present.
- The “projects” route explains the evidence requirement and does not present
  generated illustrations as completed work.

## QA evidence

- [x] Template commit SHA recorded
- [x] Homepage section mapping completed
- [x] Service-page template mapping completed
- [x] Location-page decision and template mapping completed
- [x] Price, process, FAQ and form coverage mapped
- [x] Approved 16-page SEO inventory implemented
- [x] Primary and secondary keyword coverage checked per page
- [x] Long-tail questions, entities and internal links checked per page
- [x] No unsupported business claims
- [x] `npm run lint`
- [x] `npm test`
- [x] Production artifact validation
- [ ] Live desktop visual comparison
- [ ] Live mobile visual comparison
- [ ] GitHub Pages preview replaced
- [ ] Owner visual review requested

The remaining boxes are deployment-stage checks. Passing this document means
the source is ready for preview QA, not approved for production launch.
