# Prompt 1 — Current rankings and competitors

**Domain:** virtuvespecpasutijuma.lv  
**Search engine / market:** Google Latvia  
**Resolved location:** Latvia (**2428**)  
**Resolved language:** Latvian (**lv**)  
**Research date:** 2026-07-29

## Domain ranking availability

**Domain ranking data was empty.** DataForSEO Labs Google Ranked Keywords returned zero items. DataForSEO competitor-domain and relevant-pages endpoints also returned zero items. This is consistent with the supplied audit: the preview is protected by `noindex, nofollow` and `robots.txt` disallows crawling. The result is an indexation-state limitation, **not evidence of absent market demand**.

Because no ranking URLs were available, every `current_position` and `current_ranking_url` value in the normalized table is null. Positions 4–30, accidental page visibility, ranking-URL overlap, and current-domain cannibalization cannot be evaluated until the site becomes indexable or Search Console data is supplied.

## Incremental evidence from keyword metrics

DataForSEO returned measurable volume for multiple non-branded commercial or commercially adjacent seeds, including:

- `virtuve pēc pasūtījuma`: volume 90, CPC 3.6, transactional, KD 3.
- `virtuves iekārtas pēc pasūtījuma`: volume 90, CPC 2.85, transactional.
- `virtuves mēbeles pēc pasūtījuma`: volume 90, CPC 2.07, transactional.
- `virtuves izgatavošana`: volume 90, CPC 0.94; informational with transactional foreign intent.
- `iebūvējamās virtuves` and `iebūvējamās virtuves iekārtas`: volume 70 each, transactional.
- `cik maksā virtuves iekārta`: volume 40, CPC 0.47, commercial.
- `virtuves projektēšana`: volume 20, CPC 1.25.
- `virtuves uzstādīšana`: volume 10, CPC 2.08, KD 32.

The largest seed volume was `virtuves skapīši` at 1000, but its live SERP was overwhelmingly retail/e-commerce. That metric must not be treated as demand for a custom-cabinet service page without further query refinement.

Monthly values are preserved exactly in the CSV. Several series contain a large September 2025 spike; no smoothing or interpretation was applied.

## Live SERP validation

### Broad custom-kitchen intent

For `virtuves pēc pasūtījuma`, the live Latvia/Latvian SERP was dominated by direct custom-kitchen providers. Repeated direct competitors included `virtuvesjums.lv`, `laurasmebeles.lv`, `srmebeles.lv`, `mkvirtuves.lv`, `up-mebeles.lv`, `alanmebeles.lv`, `santasmebeles.lv`, `profurnitura.lv`, `seldedze.lv`, `abvirtuves.lv`, `mebelesjums.lv`, `4istabas.lv`, and `skandinavuvirtuves.lv`. `getapro.lv` appeared as a marketplace and `abc.lv` as a publisher.

### Manufacture intent

For `virtuves izgatavošana`, direct providers again occupied much of the organic and local result set. Retailers also appeared, so the query is mixed but commercially relevant. The SERP supports using direct providers as business competitors and keeping retailers separately labelled.

### Cabinet/component intent

For `virtuves skapīši`, top organic results included IKEA, 220.lv, Optimus, Gintaro Mēbeles, Bigbox, 24a, DEPO, Ksenukai and 1a. The result set is retail-dominant. `virtuvesskapisi.lv` is the clearest custom-kitchen/provider exception. This is incremental evidence that the existing cabinet page risks intent mismatch unless it is framed around custom storage configuration and complete-project consultation rather than standalone cabinet shopping.

## Commercial usefulness and overlap watchlist

No final page decisions are made here.

- **Homepage vs custom-unit page:** broad custom-kitchen phrases form a tight transactional cluster. Current-domain ranking separation is unavailable.
- **Manufacture vs complete custom unit:** the manufacture SERP contains both production-focused providers and broad kitchen providers; overlap risk remains.
- **Design vs planning vs interior:** metrics exist, but intent varies. `virtuves dizains` is high-volume informational; `virtuves iekārtojums` was detected as transactional; `virtuves interjers` was detected mainly navigational with mixed foreign intents.
- **Price vs installation-price:** price and “how much” terms show commercial value; installation has low volume but CPC 2.08 and KD 32. Installation-only availability remains unverified and must not be implied.
- **Components vs retail:** cabinets are clearly retail-heavy. Facades and fittings were detected transactional, but need dedicated live-SERP validation before being treated as custom-project acquisition terms.
- **Locations:** no new local demand conclusion is made. The earlier 40-phrase location test reported no measurable volume, and this prompt did not produce evidence justifying city-by-service multiplication.

## Existing-page improvement signals

These are research signals, not decisions:

1. The broad custom-kitchen pages should eventually be checked against transactional variants with CPC 2.07–3.6.
2. The price page has evidence from `cik maksā virtuves iekārta` and `virtuves cenas`, but the site still lacks verified price facts.
3. The cabinet page needs especially careful retail-intent separation.
4. The manufacture page has a valid live competitive set and could be benchmarked against providers ranking around positions 4–30.
5. Design/planning/interior pages require more SERPs and later ranking-URL evidence to determine whether their visitor needs are sufficiently distinct.

## Competitor list for Prompt 2

### Direct custom-kitchen providers — high priority

`virtuvesjums.lv`, `laurasmebeles.lv`, `srmebeles.lv`, `mkvirtuves.lv`, `up-mebeles.lv`, `alanmebeles.lv`, `santasmebeles.lv`, `profurnitura.lv`, `virtuves.lv`, `seldedze.lv`, `abvirtuves.lv`, `mebelesjums.lv`, `4istabas.lv`, `skandinavuvirtuves.lv`, `virtuvesdizains.lv`.

### Adjacent / marketplace / publisher

`getapro.lv` — marketplace.  
`modernasmebeles.lv` — adjacent provider/publisher-style content.  
`abc.lv` — publisher.

### Retailer / marketplace — adjacent only

`ikea.com`, `idmebeles.lv`, `220.lv`, `optimus.lv`, `gintaromebeles.lv`, `bigbox.lv`, `24a.lv`, `depo.lv`, `ksenukai.lv`, `1a.lv`.

The separate CSV `prompt-2-competitor-list.csv` preserves these classifications and the live-SERP evidence query.

## Output notes

The normalized table contains all 41 brief seeds. Missing DataForSEO metrics remain null. No position, volume, trend, CPC, competition, difficulty or ranking URL was estimated. Excluded topics were not expanded into recommendations.

Raw evidence is under `compact-keywords/research/raw/prompt-1/`. Files 01–04 contain complete request/response objects. The large keyword-overview and SERP connector responses lacked a raw-download handle; files 05–06 therefore contain exact field-preserving extracts, response IDs and requests, and are explicitly labelled as such rather than misrepresented as full transport dumps.
