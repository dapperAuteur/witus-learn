# Content & Pedagogy Model

How learning works in the Academy — the engine to reproduce. JSONB shapes, navigation, assessment, rigor, and the signature map.

---

## 1. Content hierarchy
`course → module → lesson`. Each level has `is_published` (draft/publish). A course has a `navigation_mode` of `linear` (ordered) or `cyoa` (branching). Lessons carry an `order`; modules carry an `order`. For `is_sequential` courses, later modules lock until the prior module's lessons are complete.

---

## 2. Lesson formats & JSONB shapes
`lesson_type ∈ {video, text, audio, slides, quiz, 360video, photo_360, virtual_tour, map}`. Type‑specific payloads:

- **video / audio / slides:** `content_url` (Cloudinary), `duration_seconds`. 360 video adds `video_360_autoplay`, `video_360_poster_url` (poster derived client‑side from Cloudinary `so_0`).
- **text:** `text_content` + `content_format ∈ {markdown, tiptap}` (Tiptap = rich JSON; render accordingly).
- **audio_chapters** (audio): `[{ id, title, startTime, endTime }]`.
- **transcript_content** (audio/video): `[{ startTime, endTime, text }]` — timed transcript.
- **map_content** (map): `{ center, zoom, markers, lines, polygons }`.
- **documents:** `[{ id, url, title, description, source_url }]` — absolute http(s) URLs only (local paths rejected). Served inline via `/api/document-proxy`.
- **podcast_links:** external podcast embeds.
- **quiz_content** (quiz): see §5.

**Authoring note (BVC):** episodes are **audio‑first** — the primary lesson is full audio with chapters + transcript; subject micro‑lessons are text. Preserve audio chapters + transcript as first‑class.

---

## 3. Progress & gating
- `lesson_progress(user_id, lesson_id)`: `completed_at`, `watch_seconds`, plus `quiz_score`/`quiz_answers` (quizzes) and `tour_progress.visited_hotspot_ids` (tours).
- **Access gate** (lesson read): owner / enrolled / `is_free_preview` / free‑course → full content; else stripped payload + `{locked, login_required?, module_locked?}`.
- **Sequential lock:** non‑free lessons locked until all prior‑module lessons complete.
- **New/updated badges:** compare lesson `created_at`/`updated_at` vs `enrollment.last_content_seen_at`, with a 24h post‑enroll grace.
- **Photo_360** auto‑completes on first view; **virtual_tour** completes when required hotspots visited (merged across sessions).

---

## 4. CYOA navigation & crossroads
For `cyoa` courses, each lesson exposes **crossroads** — up to ~5 "next" options:
1. **Linear next** — next lesson by `order` (`label: Continue Forward`).
2–3. **Semantic neighbors** — pgvector `match_lessons(query_embedding, course_id, exclude_lesson_id, 2)` → 2 most‑similar in‑course lessons (`Related Path A/B`).
4. **Random** — a random other lesson (`Unexpected Path`).
5. **Cross‑course** (opt‑in) — if `allow_cross_course_cyoa`, `match_lessons_global(...)` finds similar lessons in **other** courses that also opted in; only free‑preview/enrolled targets are offered (`From: {course_title}`).

**Embeddings:** generated per lesson (title + text) via Gemini (`gemini-embedding-001 @ 768d` today), stored in `lesson_embeddings.embedding vector(768)`, ivfflat cosine index. Regenerate when lesson content changes.

> ⚠️ **Tenant isolation:** `match_lessons_global` must take a `tenant_filter` and constrain `courses.tenant_id = tenant_filter`. Without it, CYOA routes a learner into another brand's course — the top leak vector. In‑course `match_lessons` is naturally safe.

---

## 5. Quizzes
`quiz_content` JSONB:
```
{
  questions: [{
    id, questionText, questionType,        // multiple-choice
    options: [{ id, text }],
    correctOptionId,
    explanation, citation?                 // shown after answer; citation links to a source
  }],
  passingScore: number,                    // e.g. 80
  attemptsAllowed: number,
  questionsPerAttempt?: number,            // serve a random subset of a larger pool
  shuffleOptions?: boolean
}
```
**Scoring (server, on `POST .../progress` with `quiz_answers`):** compare to `correctOptionId`; compute `%`; check `attemptsAllowed`; return `{ score, passed, explanations: [{questionId, correct, explanation, citation?}], attempts }`. Persist `quiz_score`/`quiz_answers` on `lesson_progress`.
**BVC quiz pattern:** a **36‑question pool per episode**, **12 per attempt**, **3 fully distinct attempts**, `passingScore: 80`, `shuffleOptions: true`.

---

## 6. Assignments & submissions
- `assignments`: scoped `course|module|lesson`, optional `due_date`. (CentOS `requires_metrics` captured learner health metrics at submit — **replace with a generic `evidence_config` or drop**; not relevant outside the personal‑OS.)
- `assignment_submissions`: `content` + `media_url`, `status` draft/submitted, `grade`, `teacher_feedback`. One per (assignment, student).
- `submission_messages`: threaded teacher↔student feedback per submission.

---

## 7. Certificates & verification
- On `POST /courses/[id]/complete` (all lessons done): create `course_completions` with a 16‑byte hex `verification_token`.
- **Public verification page** `/verify/[token]` (no auth) shows student name, course, instructor, date — rendered in the **tenant's** branding.
- Completion email via Resend (tenant sender) with the verification link; certificate PDF downloadable.

---

## 8. Prerequisites, overrides & recommendations
- `course_prerequisites` (`required`|`recommended`). At enroll, **required** prereqs block unless all their lessons are complete.
- **Override flow:** course defines `override_questions` (JSONB); student submits a `prerequisite_override_requests` row (answers + reason); instructor approves → `prerequisite_overrides` (then enroll allowed). States: pending/approved/rejected/cancelled (one pending per student/course).
- `course_recommendations` (`before`/`after`) — curated "take this around this course."

---

## 9. Learning paths
`learning_paths` = curated multi‑course sequences (`learning_path_courses` with `order_index`, `is_required`). `learning_path_completions` awarded when all required courses complete. (Tenant‑scoped.)

---

## 10. Rigor: glossary, sources, claims (BVC's trust layer)
- **Glossary** (`course_glossary_terms`): `term`, `phonetic`, `definition` (markdown/tiptap), course/lesson scoped. Surfaced as a per‑course glossary + inline term links.
- **Sources** (`course_sources`): `in_text` ("(Author, 2020)"), `apa`, `doi`, `url`, `pdf_url` (open access), `verified`.
- **Claims** (`course_claims`): a fact‑checking ledger — `claim_text`, `location`, `status` (unconfirmed/confirmed/dropped), `source_id`. Each factual claim ties to a verified source.
- **Citation resolver** `POST /sources/resolve`: paste a DOI/URL → **Crossref** (formats APA) + **Unpaywall** (finds an open‑access PDF) → `{inText, apa, doi, url, pdfUrl, title, journal, year}`. This is how instructors build a verified source list fast.

---

## 11. Virtual tours (immersive 360°)
`virtual_tour` lessons compose `tour_scenes` (panorama photo/video, entry scene, start yaw/pitch) with `tour_hotspots` (info / audio / link / scene_jump at yaw/pitch) and `tour_scene_links` (navigable connections). Rendered with a 360 viewer (Pannellum/Three.js). Progress tracks `visited_hotspot_ids`.

---

## 12. BVC content rules (non‑negotiable — port as platform features)
From the BVC Course Authoring Guide. These make the curriculum trustworthy; bake them into authoring + review:

1. **No fabricated content.** Every fact ties to a source; no invented figures, names, quotes, or statistics.
2. **Inline APA citations** on every claim — `(Author, Year)` — plus a `## Sources` bibliography (backed by `course_sources`).
3. **No fabricated characters.** Use real, cited historical figures / named experts, or second‑person address. No invented narrators.
4. **No "AI tells."** **No em‑dashes or en‑dashes** (use commas/periods/parentheses), no rare/ornate words, no filler. (CentOS ships `scripts/scan-ai-tells.mjs`; the new LMS should offer an equivalent authoring lint.)
5. **Sourcing balance.** Peer‑reviewed for science; **indigenous knowledge cited with equal weight**; **name disagreements** rather than picking a side.
6. **Episode structure.** One commodity = one episode = full audio (chapters + transcript) **+ 4 subject micro‑lessons: Geography, Social Studies, Economics, ELA** + Key Terms (glossary) + Sources + Quiz (36‑pool/12‑per) + a Project (assignment). Each lesson ends on a **`[REMEMBER]`** beat — a durable takeaway + a cross‑subject link (replaces "on the test" framing).
7. **Audio‑first.** The episode audio is primary; text lessons support it.

> These rules are a feature, not just a style guide: expose **sources/claims/verification** in the UI as a visible trust signal, and provide the AI‑tells lint + citation resolver in the authoring tools.

---

## 13. ⭐ The Commodity Map (signature surface) — full spec & improvements

The BVC curriculum's primary discovery surface. **Keep it; make it data‑driven + per‑tenant; improve it.**

### Current implementation (fidelity baseline)
- **Entry:** `/academy/explore` → `CommodityMapClient` (dynamic, `ssr:false`) → `MapTabs` switches two maps.
- **Data:** **hardcoded** `lib/bvc/commodities.ts` — `COMMODITIES: Commodity[]` (21 entries) `{ id, season(1|2|3), ep, name, geo, lat, lon, body, isHome? }`; `SEASON_COLOR_MAP` (`1:#BA7517, 2:#185FA5, 3:#993C1D, home:#3B6D11`). Belt data is a separate hardcoded `BELTS` array + `PRODUCTION_COUNTRIES` (ISO numeric) map in `CommodityBeltMap.tsx`.
- **Mode A — Episode Origins** (`CommodityMap.tsx`): D3 + world‑atlas TopoJSON (`countries-110m.json`), **Natural Earth** projection. One colored pin per episode at `(lat,lon)`: inner solid + hollow outer ring; home episode enlarged; "Ep N" label. Hover grows the pin; click opens an info card (name, season, episode, origin, `body`). Season filter (All / S1 Daily Rituals / S2 The Oldest Toast / S3 The Forbidden Leaf). An optional `seasonFilter` prop lets a lesson page embed the map locked to one season (`courses.bvc_season`).
- **Mode B — Growing Belts** (`CommodityBeltMap.tsx`): **Equal Earth** projection. Two sub‑modes: **Latitude Bands** (colored rectangles `latMin→latMax`, full longitude, `mix-blend-mode: multiply @0.45` so overlaps blend — equator shows coffee+cacao+tea blending) and **Production Regions** (country polygons by ISO numeric code; sub‑national fallback bounding boxes, e.g. peyote → Chihuahuan Desert). Per‑commodity toggles + an overlap legend (`multiplyBlend()` approximates blended swatches).
- **Standing TODOs:** pins/CTAs link to `/academy` (catalog), not specific episode routes; some belts use bbox fallbacks.

### Target: data‑driven + per‑tenant
- Render from `map_commodities` + `map_belts` (see DATA_MODEL), **filtered by `tenant_id`** (+ optional `season_number`). New episodes appear automatically; other tenants get their own map or none (a tenant flag).
- **`map_commodities`** drives Mode A pins; each row links `course_id` → the real episode route.
- **`map_belts`** drives Mode B (lat band + `production_country_codes` + `fallback_bbox`).
- Keep the rendering quality: D3 + TopoJSON, Natural Earth (pins) & Equal Earth (belts), blend‑mode overlaps, the season color system (move colors into tenant theme or `map_commodities.color`).

### Improvements to build (BAM: "keep it and improve on it")
1. **Wire pins/regions → real episode/course detail** (close the TODO). Click pin → `/{instructor}/{courseSlug}` (or episode lesson).
2. **Audio‑first hover preview** — on pin hover, offer a short audio teaser (it's a podcast curriculum).
3. **Filters** — by season, by **subject** (Geography/Social Studies/Economics/ELA), by latitude band.
4. **Map as a CYOA / learning‑path entry point** — let learners traverse the curriculum geographically (pick the next episode from the map; "nearby commodities" as crossroads).
5. **Optional layers** — historical trade routes; time‑period slider (when each commodity spread).
6. **Per‑tenant maps** — a non‑BVC tenant could plot its own dataset (or hide the map via a flag).

> The map is the brand's hook. Treat it as its own build phase (PRD Phase 7) and don't degrade it into a generic grid.
