# Project Agent Instructions

This website follows `seasidemedialv/website-building-guide`.

## Mandatory turn preflight

1. Read the central guide's `README.md`, `AGENTS.md`, and `WORKFLOW-GATES.md`.
2. Read this repository's `PROJECT-STATUS.md`, `PROJECT-BRIEF.md`, `WEBSITE-FOUNDATION.md`, and `TEMPLATE-COMPLIANCE.md`.
3. Read `website-template/AGENTS.md` and its actual HTML/CSS/JS source.
4. Inspect the repository source; do not trust status claims that contradict it.
5. Perform only the next action allowed by the recorded state and update status.

## Current blocking state — static rebuild required

The current source is rejected because it contains Next.js, React, Vinext, Vite, TypeScript/TSX, Wrangler, Drizzle and npm build tooling. A framework that renders a template-like page is not template compliance.

The mandatory next action is a complete static-source rebuild:

- preserve approved research, verified facts, SEO page briefs, valid Latvian content and suitable static images;
- discard the application framework and build/runtime layer;
- copy and adapt the actual `website-template` HTML/CSS/JS files;
- create a root `index.html`, root `styles.css`, root `script.js`, and individual static HTML pages for every approved URL;
- use only static assets and optional static JSON;
- deploy the static files directly with GitHub Pages;
- run `.github/workflows/static-stack-policy.yml`;
- update `TEMPLATE-COMPLIANCE.md` only after the policy passes.

There is no framework-conversion exception. Do not proceed to visual QA and do not call the site rebuilt, completed, premium, compliant or approved while the policy fails.

## Project autonomy and evidence

The agent owns research-to-build delivery. DataForSEO research and AI review remain the source for SEO architecture and page briefs. Never invent business facts, reviews, prices, guarantees, credentials, projects or contact details. Production launch remains subject to explicit owner approval.

## Mandatory form contract

Follow `seasidemedialv/website-template/FORM-STANDARD.md`. Every qualifying page must contain the same canonical `#lead-form`. The mandatory required fields, in order, are name, phone, address, requested service and more information. Service area may remain as an additional field. Every primary lead CTA must point to the current page's own `#lead-form`. Verify this across all HTML pages and record the result before visual approval.

## Mandatory URL architecture

Follow `seasidemedialv/website-template/URL-STANDARD.md`. Move every service page under `/pakalpojumi/`, create `/pakalpojumi/index.html`, and use `/pilsetas/<service>-<city>/` with `/pilsetas/index.html` for any future approved city pages. Update navigation, internal links, breadcrumbs, canonicals, sitemap and schema as one atomic migration. Root-level service pages are not acceptable final URLs.
