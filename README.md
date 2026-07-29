# virtuvespecpasutijuma.lv

Production repository for a Latvian lead-generation website about custom-made kitchens.

## Current stage

Static implementation and policy validation. The website is plain HTML, CSS and
JavaScript and works without installation, compilation or a build command.

## Project documents

- `PROJECT-BRIEF.md` — verified facts, goals, constraints, and open questions
- `WEBSITE-FOUNDATION.md` — SEO, architecture, content, conversion, and readiness decision
- `PROJECT-STATUS.md` — current progress, blockers, and next actions

## Working rules

Follow `seasidemedialv/website-building-guide`, including `WORKFLOW-GATES.md`, then the applicable instructions in `seasidemedialv/website-template`, `seasidemedialv/seo-guidelines`, and `seasidemedialv/website-seo-plugin-dataforseo`.

Mandatory DataForSEO research and an approved AI review are required before final architecture, SEO copy, or production page building. Read this repository's `AGENTS.md` before every continuation.

Unknown business facts stay `TBD`. Do not publish invented claims, contact details, reviews, prices, service areas, guarantees, or structured data.

## Static website

- Open `index.html` directly or serve the repository directory.
- Every approved URL has its own directory `index.html`.
- Shared presentation and behaviour live in root `styles.css` and `script.js`.
- Preview forms intentionally do not transmit data.
- Frameworks, package managers and build tooling are forbidden.
