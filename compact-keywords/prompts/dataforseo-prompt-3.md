# DataForSEO Prompt 3 — live SERP validation and normalized output

Copy everything below into the custom GPT. Attach:

- `compact-keywords/audit/compact-keywords-research-brief.json`;
- the complete Prompt 1 and Prompt 2 evidence;
- both earlier Markdown reports; and
- the 20–40 keyword shortlist returned by Prompt 2.

---

You are validating shortlisted compact-keyword candidates for
`virtuvespecpasutijuma.lv` in Google Latvia and Latvian.

The attached research brief is the source of truth. Validate every shortlisted
query with current DataForSEO Google organic SERP data. Do not skip zero-volume
queries when they were deliberately shortlisted; live intent and result overlap
still matter.

For each query return:

- keyword;
- seed keyword;
- originating source;
- source endpoint;
- competitor source and competitor type;
- resolved location name/code;
- resolved language name/code;
- search volume;
- monthly trend;
- CPC;
- paid competition, if returned;
- organic keyword difficulty;
- detected intent;
- current domain position;
- current ranking URL;
- top organic results with rank, domain, URL, title and result type;
- top-10 domains;
- top-10 URLs;
- available authority or backlink metrics, with metric source;
- dominant result types: service, product, category, article, list, video,
  local pack, forum, marketplace, retailer or other;
- whether a ranking page targets the query directly in a natural title and URL;
- whether lower-authority sites rank prominently;
- whether the observed intent is transactional, commercial, informational,
  navigational, local or mixed;
- a concise factual SERP observation;
- data update timestamp.

Required comparisons:

- compare close custom-kitchen/homepage and kitchen-unit phrases;
- compare design, planning and interior phrases;
- compare manufacture, built-in and complete custom-kitchen phrases;
- compare full-project price and installation-price phrases;
- compare cabinet/facade/fittings phrases against retail and ecommerce results;
- compare layout/configuration variants;
- compare residential-situation variants such as apartment, private house,
  new build and open plan;
- compare any local queries retained from Prompt 2;
- identify when an existing page already matches the observed intent.

Assign a shared `serp_similarity_group` when related queries have substantially
the same top results or satisfy the same visitor need. Include the number or
percentage of overlapping top-10 organic URLs used for that judgment.

Do not recommend separate pages for:

- singular/plural or spelling differences;
- simple adjective changes;
- queries with substantially the same results and need;
- city/service permutations without distinct evidence and local value;
- retail or trade intent outside the verified offer.

Do not make the final existing-page-versus-new-page decision. The
website-aware AI will combine this evidence with the current architecture and
proof limitations.

Return two primary evidence outputs:

1. all unmodified API request/response evidence for this prompt, packaged for
   `compact-keywords/research/raw/prompt-3/`;
2. `compact-keyword-candidates.csv`, suitable for
   `compact-keywords/research/normalized/`, with exactly these columns:

```text
keyword
seed_keyword
source
source_endpoint
competitor_source
location
language
search_volume
monthly_trend
cpc
organic_difficulty
detected_intent
current_domain_position
current_ranking_url
top_10_domains
top_10_urls
serp_result_types
serp_similarity_group
serp_observation
data_updated_at
```

Use one normalized row per keyword. Preserve API numeric values exactly. Never
estimate missing values; use blank or `null` and explain omissions in the
report. Where a list is stored in one CSV cell, use a consistent JSON-array
string.

Also return:

3. `prompt-3-live-serp-validation.md` for
   `compact-keywords/research/reports/`, summarizing factual result patterns,
   overlap groups, mixed/retail intent, lower-authority ranking observations and
   evidence limitations;
4. a manifest listing every raw file, endpoint, request date and the normalized
   rows derived from it.

Do not expose DataForSEO credentials. For large responses, return downloadable
files rather than truncating evidence inside the chat.

