# DataForSEO Prompt 2 — competitor mining and keyword expansion

Copy everything below into the custom GPT. Attach:

- `compact-keywords/audit/compact-keywords-research-brief.json`;
- the complete raw and normalized output from Prompt 1; and
- `prompt-1-current-rankings-and-competitors.md`.

---

You are continuing the compact-keyword research project for
`virtuvespecpasutijuma.lv`.

The attached research brief is the source of truth. Work in Google Latvia and
Latvian. Use the relevant competitors discovered in Prompt 1, but keep direct
custom-kitchen providers separate from retailers, marketplaces, publishers and
other adjacent domains.

Verified business boundary:

- custom-kitchen design/planning, manufacture, delivery and installation as a
  complete tailored service;
- no verified retail catalogue;
- no confirmed general interior design, appliance retail, electrical,
  plumbing, HVAC, demolition or general renovation service;
- installation-only availability is unknown;
- no verified material/hardware brands, prices, warranties, production times,
  projects or testimonials;
- only the 20 locations in the brief are confirmed.

Use the appropriate DataForSEO endpoints for:

- competitor ranked keywords;
- keyword suggestions;
- related keywords;
- keyword ideas;
- keywords for site;
- domain or page intersections where useful;
- search intent;
- search volume, monthly trend, CPC, paid competition and organic difficulty.

Mine and expand searches representing needs this business can genuinely
satisfy:

- custom kitchen or kitchen unit for a specific residential situation;
- configuration-led intent such as straight/single-wall, parallel/galley,
  U-shaped, peninsula, island, corner or L-shaped;
- apartment, private-house, new-build or open-plan situations, while treating
  each as a hypothesis rather than a confirmed separate service;
- space, storage, appliance-integration, access, planning or quote outcomes;
- design, planning, manufacture, delivery or installation questions with
  commercial intent;
- legitimate local-service combinations for verified locations;
- queries already visible through an imperfect page;
- high-value consultation or quote intent.

Also test close variants of the existing mapped topics so the later review can
decide whether to improve an existing page rather than create another one.

For every candidate retain:

- keyword;
- originating seed;
- originating competitor/domain/page, if applicable;
- competitor type;
- source endpoint;
- location and language;
- search volume;
- monthly trend;
- CPC;
- paid competition, if returned;
- organic keyword difficulty;
- detected intent;
- current domain position and ranking URL, if available;
- short business-fit note;
- exclusion flag and exact exclusion reason, if it conflicts with the brief;
- data update timestamp.

Rules:

- Do not reject a query solely because reported volume is zero or low.
- Do not include a query merely because a competitor ranks for it.
- Preserve low and zero values for later human review.
- Preserve returned metrics exactly.
- Use blank or `null` for unavailable metrics.
- Distinguish paid competition from organic keyword difficulty.
- Do not silently deduplicate wording variants before live SERP comparison.
- Do not decide that wording variations automatically need separate pages.
- Do not make final existing-page-versus-new-page decisions.
- Exclude subjects in `excluded_topics`, but retain excluded rows with a reason
  in a separate rejected-candidates table.
- Do not expose API credentials.

Target a broad evidence set of approximately 100–300 raw candidates. Then
prepare a shortlist of approximately 20–40 candidates for Prompt 3. The
shortlist should cover:

- clear existing-page improvement opportunities;
- plausible distinct configurations or residential situations;
- price/quote and consultation intent;
- a limited local sample only where evidence exists;
- uncertain terms where live SERP validation is necessary;
- potential cannibalization groups.

Required outputs:

1. all unmodified API request/response evidence used for this prompt, packaged
   for `compact-keywords/research/raw/prompt-2/`;
2. a normalized full-candidate table;
3. a separate rejected-candidate table with reasons;
4. a Markdown report named
   `prompt-2-competitor-mining-and-expansion.md` suitable for
   `compact-keywords/research/reports/`;
5. a Prompt 3 shortlist containing approximately 20–40 keywords, with each
   keyword's seed, source and reason for validation.

For large responses, return downloadable files rather than truncating evidence
inside the chat.

