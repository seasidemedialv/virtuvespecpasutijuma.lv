# Project Status — virtuvespecpasutijuma.lv

Last updated: 2026-07-29

- **Workflow state:** STATIC_REBUILD_REQUIRED
- **Build allowed:** NO
- **Current implementation:** REJECTED
- **Current preview:** REJECTED — availability only
- **Visual QA:** BLOCKED until static-stack compliance passes
- **Production deployment:** NO
- **DataForSEO research ID:** `virtuvespecpasutijuma-topic-led-research-2026-07-28`
- **Research evidence:** retained and approved
- **Approved demand-page inventory:** 16 pages

## Why the current implementation is rejected

Repository inspection found:

- `package.json` identifying `site-creator-vinext-starter`;
- Next.js, React, Vinext, Vite and TypeScript dependencies;
- Wrangler, Cloudflare Vite tooling, Drizzle and npm scripts;
- TSX components and application routes;
- no root `index.html`.

This violates the required `website-template` technology contract. Styling framework-rendered pages to resemble the template is not a valid rebuild.

Previous claims such as “rebuilt,” “template compliance passed,” successful npm checks, successful GitHub Pages deployment and HTTP 200 responses are superseded. They demonstrate technical execution only.

## Mandatory next action

1. Preserve approved research, verified facts, keyword mapping, page briefs, usable Latvian content and suitable static assets.
2. Rebuild from the actual static `website-template` files.
3. Create root `index.html`, `styles.css`, `script.js` and individual static HTML files for all approved URLs.
4. Remove all framework, TypeScript, package-manager, build, Worker, database and Sites-starter source/configuration.
5. Make GitHub Pages publish the static source directly without npm or a build step.
6. Pass `.github/workflows/static-stack-policy.yml`.
7. Recreate `TEMPLATE-COMPLIANCE.md` with honest static-file mapping.
8. Only then perform desktop/mobile visual, content, SEO, accessibility and form QA.

## Preserved evidence and scope

Keep the approved DataForSEO evidence, 16-page keyword map, independent page briefs, verified service offer and verified 20-area coverage. Location pages remain a separate evidence/owner-strategy decision.

Approved reference family:

- atkritumuizvesanariga.lv
- atsledznieksriga.lv
- iztiripats.lv
- kondicionierauzstadisana.lv
- kurjersriga.lv
- parvaksanaskastes.lv
- rigaselektrikis.lv
- sadzivestehnikasremonts.lv
- santehnikisriga.lv
- saulespaneluuzstadisana.lv
- siltumsuknuuzstadisana.lv
- uzladesstacijas.lv

The rebuild must preserve their useful shared qualities—dense service coverage, prominent forms, repeated CTAs, price/process/FAQ sections, long-form intent coverage and strong mobile conversion—without copying unsupported claims or branding.

## Completion condition

The state may move to `QA` only when the static-stack workflow passes and source inspection confirms direct static HTML/CSS/JS. A successful deployment cannot override this requirement.
