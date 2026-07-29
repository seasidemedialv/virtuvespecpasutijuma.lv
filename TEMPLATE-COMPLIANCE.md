# Template Compliance — virtuvespecpasutijuma.lv

**Status:** FAILED — STATIC REBUILD REQUIRED  
**Review date:** 2026-07-29  
**Required template:** `seasidemedialv/website-template`

## Failure

The repository still uses Next.js, React, Vinext, Vite, TypeScript/TSX, npm, Wrangler and Drizzle. It has no root `index.html`. Therefore it is not a static implementation of the required template.

The previous “PASSED FOR PREVIEW REVIEW” result is withdrawn. A framework conversion is not allowed for this website family. Rendered similarity, passing npm tests, successful export/deployment and HTTP 200 responses do not satisfy the stack contract.

## Requirements to create a new passing record

- root `index.html`;
- root shared `styles.css`;
- root shared `script.js`;
- individual static HTML pages for every approved URL;
- direct GitHub Pages deployment without installation or compilation;
- no package manifests/lockfiles, frameworks, TS/TSX, Node build layer, Workers/Wrangler, database/ORM or Sites starter;
- passed static-stack policy;
- complete section/page mapping to the actual template files;
- page-brief, metadata, internal-link, schema, responsive, accessibility, visual and form QA.

Do not change this status to passing until source inspection and the automated static-stack policy both pass.
