# US-spelling sweep — what changed, what did not, and why

Branch `fix/us-spelling-sweep`. Prompted by BAM's 2026-08-04 note on the BVC Wine course: UK
spellings appear across courses; convert to US spelling.

**3,421 replacements across 118 files.** Everything below was decided against a fixed rule: a UK
spelling converts when the text is **ours**, and stays when the text is **someone else's** (a proper
name, a statute, a cited title, a verbatim quotation) or when the string is **machine-read**
(a slug, a quiz prompt hash, an accepted-answer list, a URL, a DB enum).

Nothing in this branch changes behaviour. It is text only, so **no migration is needed**, but the
course text lives in the database: `pnpm seed:courses` (and `pnpm seed:sommelier` for the three BVC
tasting courses) must be re-run after merge or none of it appears in the app.

---

## 1. Counts per word

Course data (`scripts/data/*.ts`), all three passes combined:

| UK → US | n | UK → US | n | UK → US | n |
| --- | ---: | --- | ---: | --- | ---: |
| labour → labor | 371 | judgement → judgment | 40 | traveller → traveler | 5 |
| neighbourhood → neighborhood | 268 | practise → practice | 39 | standardise → standardize | 5 |
| centre → center | 257 | favour → favor | 37 | scepticism → skepticism | 5 |
| organisation → organization | 182 | standardised → standardized | 36 | sceptical → skeptical | 5 |
| colour → color | 182 | neighbouring → neighboring | 34 | moulded → molded | 5 |
| organised → organized | 179 | programmes → programs | 31 | honoured → honored | 5 |
| programme → program | 139 | savoury → savory | 28 | criticise → criticize | 5 |
| organise → organize | 117 | travelling → traveling | 25 | colourful → colorful | 5 |
| flavour → flavor | 103 | recognising → recognizing | 24 | standardisation → standardization | 4 |
| recognised → recognized | 99 | enrolment → enrollment | 23 | practising → practicing | 4 |
| licence → license | 79 | cancelled → canceled | 23 | plough → plow | 4 |
| neighbourhoods → neighborhoods | 73 | memorise → memorize | 22 | modelling → modeling | 4 |
| recognise → recognize | 70 | colours → colors | 20 | centred → centered | 4 |
| defence → defense | 68 | memorising → memorizing | 19 | cancelling → canceling | 4 |
| travelled → traveled | 54 | licences → licenses | 18 | analysed → analyzed | 4 |
| catalogue → catalog | 50 | labelling → labeling | 18 | specialising → specializing | 3 |
| neighbours → neighbors | 49 | centres → centers | 18 | minimising → minimizing | 3 |
| organisations → organizations | 48 | grey → gray | 17 | harbour → harbor | 3 |
| labelled → labeled | 46 | demutualisation → demutualization | 17 | enrol → enroll | 3 |
| organising → organizing | 45 | storey → story | 16 | emphasise → emphasize | 3 |
| behaviour → behavior | 45 | neighbour → neighbor | 15 | defences → defenses | 3 |

Plus the long tail, each under 15: flavours (14), practised (13), favours (13), catalogued (13),
summarised (12), summarise (12), criticised (12), coloured (12), specialised (10), rumour (10),
modelled (10), maximise (9), odour (8), mould (8), honour (8), favourite (8), summarising (7),
paralyse (7), odours (7), minimise (7), greyish (7), favoured (7), artefact (7), memorised (6),
litre (6), catalogues (6), apologise (6), analyse (6), criticising (3), artefacts (3), realised (2),
organisational (2), honours (2), favourites (2), colouring (2), behaviours (2), analysing (2),
**analyses → analyzes (2)**, and one each of vapours, travellers, specialise, specialisation,
sceptic, realising, prioritise, moulds, minimised, litres, humour, honourable, fulfil, flavoured,
favourable.

Outside `scripts/data/` the edits were individually hand-placed; the words were catalogue, centre,
colonisation, colour, travelled, practise, judgement, enrol, behaviour, labelled, licence, labour,
programme, modelling, prioritised, organising, honours, recognise, paralyse, cancelled, traveller
and centrepiece.

### Words explicitly NOT converted, because they are already US
`practise → practice` is the only "practice" change (the noun was already correct everywhere).
**`improvise` / `improvisation` are already US spellings and were left completely alone** — an
earlier abandoned attempt produced `improvization`, which is not a word. Likewise `archaeology`,
`aesthetic`, `towards` and `amid`/`among` were left alone.

### `analyses` is not in the word map
It is the plural NOUN (`later analyses have come out on both sides`) far more often than the third
person verb, and the noun keeps its `s` in US English. The bulk pass converted five, three were
wrong, and all three were reverted by hand:

- `scripts/data/deep-time-and-the-dinosaur-renaissance-course.ts:1043` and `:1667`
- `scripts/data/woop-course.ts:1822`

The two genuine verb uses were kept converted:
`scripts/data/intro-to-citizen-science-course.ts:58` and `scripts/data/labor-germany-course.ts:1504`.

---

## 2. Files touched

**102 course files** under `scripts/data/`, plus:

| File | What changed |
| --- | --- |
| `README.md` | "the line labelled with the entity's name"; "Category drives colour and clustering" |
| `STYLE_GUIDE.md` | "reads the licence from the source's own metadata" |
| `src/app/(tenant)/academic-standards/page.tsx` | rendered disclaimer: "partial coverage is labelled as loudly" |
| `src/app/(tenant)/admin/graph/page.tsx` | seven pieces of visible UI copy (label, `<option>`, legend, `aria-label`) |
| `src/app/(tenant)/explore/page.tsx` | FAQ answers and CTA copy: enrol ×3, catalogue, practise, judgement, behaviour, help centre |
| `src/app/(tenant)/languages/page.tsx` | page description: "where they travelled", "the routes colonisation carried" |
| `src/app/(tenant)/roadmap/page.tsx` | "Read the help centre" link text |
| `src/components/citation-list.tsx` | "Verify it against a library or publisher catalogue." |
| `src/lib/bundles.ts` | two bundle descriptions: "The no-licence on-ramp", "Licence to livelihood" |
| `src/lib/course-figures.ts` | figure `alt`/`caption` text merged into lesson bodies at seed time |
| `src/lib/downloads.ts` | one download description ("the prioritised list of places") |
| `src/lib/entities.ts` | two entity notes ("as a colour line", "the 1860s European traveller") |
| `src/lib/price-change.ts` | two admin warnings ("are NOT cancelled by this change") |
| `src/lib/research-checks.ts` | question/claim/where prose for three open source checks |
| `src/lib/roadmap.ts` | 13 roadmap entries, including the three "How the Tools Travelled" references |
| `src/lib/tutorial-scripts.ts` | one tutorial title ("Organising the catalog with categories") |

### Files deliberately NOT touched
- **`src/lib/standards/**`** — off limits by instruction (verbatim state-standard text).
- **Foreign-language courses** — `french-`, `italian-`, `spanish-`, `portuguese-course.ts`, skipped entirely.
- **Generated modules**, each of which carries a `DO NOT EDIT BY HAND` header and is rebuilt from a
  gitignored source: `src/lib/citation-content/citations.ts` (22 hits, all cited titles),
  `src/lib/future-work-content/proposals.ts` (145) and `she-did-the-work.ts` (16),
  `src/lib/ebook-content/ai-course-creation.ts` (3).
- **`scripts/data/media-batches/*.mjs`** — historical upload manifests. The `alt` text they record is
  duplicated (and now corrected) in `src/lib/course-figures.ts`, which is what actually reaches a
  lesson; the manifests are a record of what was uploaded, not a rendering source.
- **Code comments everywhere.** Comments are not user-facing text and were out of scope, so
  `// user cancelled — don't count`, `// named CSS colours`, `// The neighbour list: …` and similar
  all stand.

---

## 3. Untouchable UK spellings left in place

### 3a. Machine-read strings (changing these breaks data or history)

**Lesson `slug:` values — 7.** A slug is the join key between a lesson, its progress rows and every
`sourceLessonSlug` that points at it.

| File:line | Slug |
| --- | --- |
| `scripts/data/baltimore-chain-course.ts:57` | `bc-neighbourhoods` |
| `scripts/data/civic-documentation-course.ts:478` | `civdoc-behaviour` |
| `scripts/data/cooperatives-course.ts:1312` | `coop-demutualisation` |
| `scripts/data/labor-india-course.ts:1350` | `india-child-labour` |
| `scripts/data/labor-south-africa-course.ts:381` | `sa-colour-bar` |
| `scripts/data/labor-south-africa-course.ts:998` | `sa-labour-broking` |
| `scripts/data/river-the-delta-and-the-migration-course.ts:55` | `how-word-travelled` |

**`sourceLessonSlug` references — 36**, all pointing at the seven slugs above (labour ×11, colour ×9,
neighbourhoods ×7, demutualisation ×5, behaviour ×2, travelled ×2).

**Exercise `accept:` arrays — 5.** These are compared by string equality at grade time, and three of
them exist *precisely* to accept the British variant alongside the American one:

| File:line | Array |
| --- | --- |
| `scripts/data/bvc-sommelier-chocolate-course.ts:988` | `"high cocoa butter for coating and moulding"` |
| `scripts/data/golf-course.ts:1263` | `["middle", "centre", "center", "fattest"]` |
| `scripts/data/gym-color-line-course.ts:1713` | `["center township", "centre"]` |
| `scripts/data/how-the-tools-travelled-course.ts:2063` | `["workable", "workable program", "workable programme"]` |
| `scripts/data/how-the-tools-travelled-course.ts:2075` | `["defense", "defence"]` |

**Quiz `prompt:` text — 220.** `quizAttempts.questionKey` is a hash of the prompt alone, so any edit
silently resets per-question history for every learner who already answered.

**`:::reveal` QUESTION halves — 34.** `src/lib/reveals.ts` hashes the normalized question the same
way, so the same rule applies. (The ANSWER half after `|||` **was** edited; 127 of them.)

**One `:::figure` credit field** and **one reveal answer naming a person**:
`scripts/data/deep-time-and-the-dinosaur-renaissance-course.ts:485`, "Credited to 'Mr. Grey'".

**Recall-card prompts were investigated and are NOT hash-keyed.** `recallAttempts` in
`src/db/schema/learning.ts:314` stores `promptIndex integer` — "Index of the prompt within the
lesson's recall_content array" — with no text-derived column anywhere. So recall prompt TEXT is safe
to edit and was edited; what must never change is the **order** of `recallContent`, and nothing here
reorders anything. (Contrast `quizAttempts.responses`, which does carry a `questionKey` string.)

**DB enum values.** `enrollments.status` is checked against `'active','cancelled'`
(`src/db/schema/billing.ts`), written in `src/db/queries/enrollment.ts`. The literal stays British;
only the prose describing it was Americanized.

**Code identifiers.** `src/lib/course-graph.ts` exports `centre`, `centreId`, `centreNode`, and
`src/components/course-graph-svg.tsx`, `src/app/(tenant)/admin/graph/page.tsx` and
`tests/course-graph.test.ts` read them. `scripts/upload-course-media.mjs` uses `licence` as a
parameter name. All untouched.

### 3b. Cited titles, publishers and bibliographies — 255 + 29 with URLs

Every `## Sources` entry was excluded by construction, because the spelling in a reference belongs to
its author. The recurring ones: **UNESCO World Heritage Centre** (14), **Organisation for Economic
Co-operation and Development** (~35), **International Labour Organization** (~40), *Wine grapes: …
including their origins and flavours* (Robinson et al., 6), *People-centred businesses* (Birchall, 6),
the EU regulations on wine **labelling** and the "common **organisation** of the markets" (8),
*Colonial and coloured unity: A programme of action* (Padmore, 2), *Nature Human Behaviour*,
*Transfer: European Review of Labour and Research*, the **South African Labour Bulletin**, the
**Quarterly / Periodic Labour Force Survey**, **Wine Australia's Label Integrity Programme**, and
every `labour.gov.in`, `idea.int/publications/catalogue/`, `gov.za/documents/labour-…` URL path.

Two lines inside `## Sources` blocks were NOT bibliography and were converted: the sub-heading
`**Labour and trade**` in `bvc-sommelier-chocolate-course.ts:1112`, and a `:::reveal` card that sits
after the Sources block in `river-living-on-the-water-course.ts:206`.

### 3c. Verbatim quotations — 18 in-quotation + 5 single-quoted + 1 blockquote + 2 italic

| File:line | Left as-is | Because |
| --- | --- | --- |
| `us-constitution-course.ts:53` | "provide for the common **defence**" | US Constitution, Preamble |
| `us-constitution-course.ts:152`, `supreme-court-judicial-branch-course.ts:42,46,63,249,251` | "during good **Behaviour**" | US Constitution, Art. III §1 (`:249` is also an exercise ANSWER) |
| `state-vs-federal-course.ts:95` | "the common **Defence** and general Welfare" | US Constitution, Art. I §8 |
| `croquet-course.ts:63,97,343,373,2343,2783` | **centre** peg, WCF **recognised**, **colour** sequence, our **organisation**, WCF Development **Programme** | verbatim World Croquet Federation / Croquet England, each with a citation |
| `ai-y2-robotics-ai-course.ts:50` | "**recognise** and respond to your movements" | micro:bit CreateAI's own product copy |
| `dual-citizenship-course.ts:216` | "cannot be **cancelled** or set aside" | INA § 351(b) |
| `labor-germany-course.ts:427,535` | "monitor the **behaviour** or performance", "dis**favoured** or **favoured**" | BetrVG official English text |
| `labor-india-course.ts:1312` | "not merely a division of **labour** … a division of **labourers**" | Ambedkar (1936) |
| `labor-nordics-course.ts:682,691,809` | "the constitution of the Danish **labour** market" | translated epithet for the September Compromise |
| `labor-chile-course.ts:382` | "…and **organised** labor must never again be what it was in 1973" | quoted architect of the Plan Laboral |
| `labor-south-africa-course.ts:388` | a "civilised **labour**" policy | the 1924 policy's own name |
| `pan-africanism-course.ts:151,157,314,386,1020,1042` | "the problem of the **colour** line" | Du Bois's 1900 Address to the Nations of the World, issued in London; the address as published carries the British spelling |
| `presidents-house-course.ts:540` | "the **neighbourhood** suffered from poverty" | quoted from the site's own history |
| `schoolhouse-network-course.ts:540` | "put in their **labour** as well" | quoted in Obenauer & Brown (2015, p. 24) |
| `labor-poland-course.ts:59` | European Solidarity **Centre** | proper noun inside an italic aside |
| `labor-south-korea-course.ts:68` | the forced-**labour** Convention 29 | ILO Convention 29's official title |

### 3d. Proper nouns — 145 capitalized occurrences

Every capitalized hit was read in context; 145 are names, not spellings.

| File | Word | n | The name |
| --- | --- | ---: | --- |
| `labor-india-course.ts` | Labour | 41 | Labour Codes, Periodic Labour Force Survey, Ministry of Labour & Employment, Textile Labour Association, Gujarat Labour Department, Contract Labour Act 1970, Child and Adolescent Labour Act, ILO |
| `labor-south-africa-course.ts` | Labour | 19 | Labour Relations Act 66 of 1995 and its 2014 Amendment, Labour Court, Department of Labour, Quarterly Labour Force Survey, South African Labour Bulletin, NEDLAC, French Labour Code |
| `labor-poland-course.ts` | Labour / Centre / Defence | 10 / 5 / 2 | Labour Code (*Kodeks pracy*), European Solidarity Centre, Workers' Defence Committee (KOR) |
| `labor-germany-course.ts` | Labour | 6 | Federal Labour Court (*Bundesarbeitsgericht*), Federal Ministry of Labour and Social Affairs, ILO |
| `dc-berman-course.ts` | Harbour | 6 | Harbour Square, the real Southwest DC development |
| `pittsburgh-playbook-course.ts` | Centre | 6 | Centre Avenue / "Crawford and Centre", Freedom Corner |
| `supreme-court-judicial-branch-course.ts` | Behaviour | 5 | Art. III "during good Behaviour" |
| `labor-india-course.ts` | Centre | 4 | Centre of Indian Trade Unions (CITU); "the Centre" as India's union government |
| `history-of-unions-course.ts` | Labour / Organise | 3 / 2 | International Labour Organization, International Labour Conference, Ministry of Health, Labour and Welfare (Japan); ILO Conventions 87 and 98 by their full titles ("…Right to Organise…") |
| `asia-before-european-colonization-course.ts` | Centre | 3 | UNESCO World Heritage Centre |
| `governments-without-states-course.ts` | Organisation | 3 | Organisation of African Unity |
| `labor-nordics-course.ts` | Labour | 3 | Labour Court (*Arbetsdomstolen* / *Arbejdsretten*) |
| `labor-chile-course.ts`, `labor-mexico-course.ts`, `football-course.ts` | Labour | 2 each | International Labour Organization |
| `labor-south-africa-course.ts` | Colour / Organisational / Programme | 2 / 1 / 1 | Colour Bar Act (1926); "organisational rights", the LRA's own statutory term; Reconstruction and Development Programme |
| `pan-africanism-course.ts` | Organisation / Coloured | 2 / 2 | Organisation of African Unity; *Colonial and Coloured Unity* (Padmore, 1947) |
| `croquet-course.ts` | Recognised / Organisations / Programme / Sulphur | 1 each | "Recognised Croquet Organisations" (a WCF membership class); WCF Development Programme; White Sulphur Springs, WV |
| `africa-before-colonization-course.ts` | Centre | 1 | UNESCO World Heritage Centre |
| `bvc-sommelier-wine-course.ts` | Programme | 1 | Wine Australia's Label Integrity Programme |
| `tennis-course.ts` | Centre / Programme | 1 / 1 | Wimbledon's Centre Court; the ITF Joint Certification Programme |
| `jim-crow-export-course.ts` | Grey | 1 | the Glen Grey Act |
| `labor-brazil-course.ts` | Labour | 1 | International Labour Organization |
| `state-vs-federal-course.ts`, `us-constitution-course.ts` | Defence / Behaviour | 1 each | US Constitution |

---

## 4. Judgment calls

### 4a. `theatre` — 84 occurrences, ALL left in place
"Theatre" is a valid US spelling for the art form and is overwhelmingly the house style in American
theatre writing; it is also the correct spelling of a great many proper names in this catalog (the
**Royal Theatre** in Baltimore, the **Douglass Theatre**, the **Walker Theatre**). Distinguishing
"the building on the corner" from "the art form" from "the venue's actual name" is a judgment per
sentence, and the instruction was to leave it and log it when in doubt. So none of the following were
touched: `baltimore-chain-course.ts` (21), `monodrama-performing-course.ts` (17),
`monodrama-writing-course.ts` (13), `indiana-avenue-course.ts` (6), `how-stories-work-course.ts` (6),
`forms-of-government-course.ts` (4), `what-they-built-course.ts` (3), `short-form-drama-course.ts` (3),
`dc-berman-course.ts` (3), `bvc-sommelier-wine-course.ts` (2), and one each in
`pittsburgh-playbook-`, `mudsock-boundary-`, `mockumentary-`, `digital-social-storytelling-`,
`croquet-` and `bvc-sommelier-coffee-course.ts`. **If BAM wants these converted, it is a separate,
sentence-by-sentence pass.**

### 4b. Calls made, and why

- **`programme` → `program` everywhere it is a common noun (139 + 31).** Only three stayed, all
  registered names: Wine Australia's *Label Integrity Programme*, the WCF *Development Programme*,
  the ITF *Joint Certification Programme*, and South Africa's *Reconstruction and Development
  Programme*.
- **Football coaching licences (`football-course.ts:3403-3439, 3732-3735`) were converted**, including
  the option reading "the more advanced **UEFA B** coaching Licence". UEFA's own term is "Licence",
  but the ladder in that lesson is explicitly the US Soccer one (it names MLS, NWSL and USL, and US
  Soccer writes "License"), and leaving one option British inside a converted quiz would read as a
  typo. Flagging it because it is the one place a governing body's own spelling was overruled.
- **Croquet's `centre peg` in our own prose was converted** (the verbatim WCF quotations at `:63`,
  `:97`, `:343` and `:373` were not). The course teaches WCF and USCA side by side and USCA says
  "center", so the mixed result is the accurate one, but it does mean one lesson shows both.
- **Croquet England's "U18s licence" (`croquet-course.ts:3097`) was converted.** It is a British
  body's term for a British qualification, sitting in a table of their requirements. Converting it is
  consistent with the sweep; reverting it is defensible. Flagging it rather than deciding silently.
- **"spring labour offensive" (*shuntō*) was converted** in all three places
  (`history-of-unions-course.ts:1876, 1902, 2200`). It is a translation, not a quotation of a named
  source, and both spellings appear in the literature.
- **"the Centre" as India's union government was kept** (`labor-india-course.ts`), and so was
  "Labour is on the Concurrent List". Both are the constitutional vocabulary a reader will meet in
  Indian sources; "the Center" would look like a typo to anyone who knows the subject.
- **Du Bois's "colour line" was kept in all six places.** The 1900 Address to the Nations of the World
  was issued in London and the British spelling is the published one. But note *The Souls of Black
  Folk* (1903, US) prints "color-line", so a future reviewer may reasonably decide the American
  spelling is the better one to show. Left as found rather than changed on a guess.
- **One course TITLE changed**: `How the Tools Travelled` → `How the Tools Traveled`. Its slug
  (`how-the-tools-travelled`) is untouched, as are the `courseSlug` references in `src/lib/bundles.ts`,
  `src/lib/entities.ts`, `src/lib/course-pricing.ts` and `src/lib/future-work.ts`. The three prose
  references in `src/lib/roadmap.ts` were updated to match. No other course title contained a UK
  spelling outside a proper noun.
- **`storey` → `story` was applied only to building floors** (16, all of the form "three-storey",
  "two-storey", "multi-storey", "five-storey"). No narrative "story" was touched, because `story` was
  never in the word map as a source.
- **`grey` → `gray` was applied to the map-legend bucket in `the-local-layer-course.ts`** (prose,
  table header and row label together). Its `regionLegend` categories are `home rule (broad)`,
  `Dillon's Rule (limited)` and `mixed / contested`, so no data key was affected.
- **Stripe/enrollment prose was Americanized but the enum was not**, so `src/lib/price-change.ts` now
  says "are NOT canceled by this change" while `src/db/schema/billing.ts` still checks
  `in ('active','cancelled')`. That mismatch is correct and deliberate.

---

## 5. Verification

- `git diff -U0 | grep -nE "slug:|prompt:|accept|https?://|sourceLessonSlug"` — zero matches on added
  (`+`) lines. (Raw matches exist only in hunk-header context lines and in prose containing the word
  "accepted".)
- `pnpm typecheck` — clean.
- `pnpm lint` — clean, including all four quiz-integrity ratchets: `check-quiz-balance` 0 violations,
  `check-longest-option` **0 files over the 60% length-tell limit and 0 grandfathered**,
  `check-reveals` 1,820 cards 0 broken, `check-assessment-fit` 0 violations, plus `check-em-dashes`
  (2,140 protected), `check-figures`, `check-standards-coverage`, `check-citations`,
  `check-series-codes` and `check-page-reachability`. No quiz bank needed rebalancing: the edits are
  ±2 characters and shifted nothing past a threshold.
- `pnpm test` — 795 passed, 52 skipped (the skips are the DB-backed isolation tests, which need a
  database URL and were already skipped on `main`).

## 6. After merge

**No migration.** Nothing in this branch touches the schema. But the lesson text lives in the
database, so in this order:

1. `pnpm seed:courses`
2. `pnpm seed:sommelier` — the three BVC tasting courses (`bvc-taster-wine`, `-coffee`,
   `-chocolate`), all three of which are in `STAGED_COURSES`
3. `pnpm gen:citations`, then commit the regenerated `src/lib/citation-content/citations.ts`

Step 3 is needed even though **no `- ` reference entry was edited**, so no citation `key` moves and
nobody's verification is reset. What *does* drift is `Citation.excerpt`, which `scripts/gen-citations.ts`
derives from the surrounding LESSON text via `inTextCitationExcerpt`. Eleven staged courses had lesson
prose edited here (`bvc-taster-wine`, `bvc-taster-coffee`, `bvc-taster-chocolate`,
`surplus-funds-basics`, `green-book-how-to-read-a-route`, `monsters-at-the-edge-of-the-map`,
`giants-dragons-and-the-bones`, `deep-time-and-the-dinosaur-renaissance`, `wrong-for-good-reasons`,
`writing-the-world`, `how-to-create-a-course`), so without a regenerate their excerpts at
`/admin/citations` would keep quoting UK spellings the lessons no longer contain.

One line inside a staged course's `## Sources` block *was* edited: the sub-heading
`**Labour and trade**` → `**Labor and trade**` in `bvc-sommelier-chocolate-course.ts:1112`. It is a
grouping heading, not a reference entry, so the extractor never reads it.

A `./plans/user-tasks/` reminder carrying these three commands has been filed.
