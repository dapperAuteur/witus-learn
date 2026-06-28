# Feature Inventory — everything the Academy does

Exhaustive catalog of CentOS Academy capabilities, each tagged for the new LMS: **`[v1]`** ship first · **`[later]`** post‑v1 · **`[drop]`** CentOS‑specific, don't port. "Current" paths are CentOS references for fidelity only.

> Multi‑tenant note: **every** discovery/listing feature below is implicitly **tenant‑scoped** in the target. Where isolation is subtle, it's flagged ⚠️.

---

## A. Catalog & discovery

| Feature | What it does | Disp. | Current |
|---|---|---|---|
| Course catalog | List published courses; full‑text search on title; category filter; sort by name/created/category/price/teacher (asc/desc); 100/page | `[v1]` | `app/academy/page.tsx`, `GET /api/academy/courses` |
| Visibility modes | `public` (anyone), `members` (authed), `scheduled` (public after `published_at`), plus draft | `[v1]` | enforced in API, not RLS |
| Featured strip | Admin‑curated `is_featured` + `featured_order` | `[v1]` (per‑tenant) | catalog page |
| Series / season grouping | Courses sharing `series_slug` collapse into one card with a season switcher (`season_number`) | `[v1]` | `GET /api/academy/series` |
| Teacher‑featured | Instructor highlights their own courses (`teacher_is_featured`) | `[v1]` | catalog |
| "Learn the App" tutorials | `is_app_tutorial` courses grouped separately | `[drop]` | CentOS‑only concept |
| Categories | Admin‑managed taxonomy w/ sort order | `[v1]` (per‑tenant) | `academy_course_categories`, `/api/academy/course-categories` |
| Teacher directory | Browse instructors + their courses | `[v1]` ⚠️ tenant‑scope the course list | `app/academy/teachers/*` |
| **Commodity Map** | Interactive world map; primary discovery surface (see §R) | `[v1]` signature | `app/academy/explore`, `components/academy/CommodityMap*.tsx` |

## B. Course structure & authoring

| Feature | What it does | Disp. | Current |
|---|---|---|---|
| Courses → modules → lessons | 3‑level hierarchy with ordering | `[v1]` | `039_lms_schema.sql` |
| Draft/publish per level | `is_published` on course, module, lesson; drafts hidden from learners | `[v1]` | migrations 187 etc. |
| Slugs | Auto‑generated, unique per teacher/course; SEO URLs `/{username}/{courseSlug}/lesson/{lessonSlug}` | `[v1]` | course/lesson PATCH |
| Rich metadata | title, description, cover, tags[], category, price/price_type | `[v1]` | courses |
| Navigation mode | `linear` vs `cyoa` per course | `[v1]` | courses |
| Sequential locking | `is_sequential`: lock later modules until prior complete | `[v1]` | lessons API |
| Bulk import/export | Course structure + content backup/restore (CSV/JSON) | `[later]` | `/courses/[id]/export|import` |
| Short links | Auto‑create Switchy short link on first publish | `[later]` | enroll/publish flow |

## C. Lesson formats (the content engine)

| Format | Storage | Disp. |
|---|---|---|
| **Video** | `content_url` (Cloudinary), `duration_seconds` | `[v1]` |
| **Audio** | `content_url`, `audio_chapters` JSONB (chapter markers), `transcript_content` JSONB (timed transcript) | `[v1]` (BVC is audio‑first) |
| **Text** | `text_content` + `content_format` ∈ {`markdown`,`tiptap`} | `[v1]` |
| **Slides** | `content_url` (image/PDF) | `[v1]` |
| **Quiz** | `quiz_content` JSONB (questions, options, correct, explanation, citation, passingScore, attemptsAllowed) | `[v1]` |
| **360° video** | `lesson_type='360video'`, `video_360_autoplay`, `video_360_poster_url` | `[v1]` |
| **360° photo** | `lesson_type='photo_360'`; auto‑completes on view | `[v1]` |
| **Virtual tour** | `lesson_type='virtual_tour'` → `tour_scenes`/`tour_hotspots`/`tour_scene_links` (Pannellum/Three.js) | `[v1]` |
| **Map embed** | `map_content` JSONB (center, zoom, markers, lines, polygons) | `[v1]` |
| **Documents** | `documents` JSONB (linked PDFs etc., absolute URLs only) | `[v1]` |
| **Podcast links** | `podcast_links` JSONB | `[v1]` |
| Free preview | `is_free_preview` per lesson (course‑level default) | `[v1]` |

## D. Enrollment & access control

| Feature | What it does | Disp. |
|---|---|---|
| Free enrollment | Direct insert; idempotent | `[v1]` |
| Guest access | Free courses readable without login (`{enrolled:true, guest:true}`) | `[v1]` |
| Paid enrollment | Stripe Checkout; one‑time & subscription | `[v1]` |
| Promo codes | Discount %, expiry, max_uses, per‑course; Stripe coupon | `[v1]` |
| Trial periods | `trial_period_days` on subscription courses | `[v1]` |
| Prerequisites | required/recommended; block enroll if required unmet | `[v1]` |
| Override requests | Student requests waiver (answers `override_questions`); teacher approves → `prerequisite_overrides` | `[v1]` |
| Re‑enrollment / attempts | `attempt_number`, `metric_slots = min(attempt,3)` | `[v1]` (metric_slots is health‑metric tie‑in; keep counter, see ⚠️) |
| Sequential module unlock | Lock non‑free lessons until prior module complete | `[v1]` |

## E. Learning & navigation (CYOA)

| Feature | What it does | Disp. |
|---|---|---|
| Progress tracking | `lesson_progress` (completed_at, watch_seconds) | `[v1]` |
| **CYOA crossroads** | Per lesson: Linear next + 2 Semantic neighbors (embeddings) + 1 Random + opt‑in Cross‑course | `[v1]` |
| Semantic routing | pgvector `match_lessons()` (in‑course) / `match_lessons_global()` (cross‑course, opt‑in) | `[v1]` ⚠️ tenant‑scope global match |
| Cross‑course CYOA | `allow_cross_course_cyoa` flag; only free‑preview/enrolled targets | `[v1]` ⚠️ tenant‑scope |
| Lesson "new/updated" badges | vs `enrollment.last_content_seen_at`; 24h grace | `[v1]` |
| Offline | Mark lessons for offline storage (PWA) | `[later]` |

## F. Assessment & grading

| Feature | What it does | Disp. |
|---|---|---|
| Quizzes | MC auto‑scoring; `passingScore`; `attemptsAllowed`; per‑question explanation + citation; question pool w/ random subset per attempt | `[v1]` |
| Assignments | Scoped course/module/lesson; optional `due_date` | `[v1]` |
| Submissions | Text + media; draft/submitted; teacher grade + feedback | `[v1]` |
| Threaded feedback | `submission_messages` teacher↔student | `[v1]` |
| Metric‑capture assignments | `requires_metrics` snapshots learner health metrics at submit | `[drop]` (CentOS health tie‑in; replace with generic "evidence upload") |

## G. Certificates & verification

| Feature | What it does | Disp. |
|---|---|---|
| Auto‑completion | When all lessons complete → `course_completions` | `[v1]` |
| Certificate token | 16‑byte hex `verification_token` | `[v1]` |
| Public verification page | `/academy/verify/[token]` (no auth) | `[v1]` (per‑tenant branding) |
| Completion email | Resend congrats w/ verification link | `[v1]` (per‑tenant sender) |
| Certificate download | PDF download button | `[v1]` |

## H. Pedagogical rigor (BVC's trust layer)

| Feature | What it does | Disp. |
|---|---|---|
| Glossary | `course_glossary_terms` (term, phonetic, definition, format), course/lesson scoped | `[v1]` |
| Sources library | `course_sources` (in_text, apa, doi, url, pdf_url, verified) | `[v1]` |
| Claims tracking | `course_claims` (claim_text, location, status unconfirmed/confirmed/dropped, source_id) | `[v1]` |
| Citation resolve | `POST /api/academy/sources/resolve` → Crossref (APA) + Unpaywall (OA PDF) | `[v1]` |
| Document proxy | Serve Cloudinary PDFs inline in iframes | `[v1]` |

## I. Social & community

| Feature | What it does | Disp. |
|---|---|---|
| Reviews/ratings | 1–5 + body; enrolled only; denormalized avg/count via trigger | `[v1]` |
| Likes | Public count (denormalized) | `[v1]` |
| Saves | Private bookmarks | `[v1]` |
| Lesson discussions | One‑level threaded, pinned, teacher flag | `[v1]` |
| Course DMs | student↔teacher messages, read state | `[v1]` |
| Unified inbox | All DM conversations grouped by course+partner, unread counts | `[v1]` |

## J. Learning paths

| Feature | What it does | Disp. |
|---|---|---|
| Paths | Curated multi‑course sequences (`learning_paths` + `learning_path_courses`) | `[v1]` ⚠️ tenant‑scope |
| Required/optional | `is_required` per course; `order_index` | `[v1]` |
| Path completion | `learning_path_completions` when required courses done | `[v1]` |
| AI path recommend | Gemini ranks top‑3 paths for a learner | `[later]` |

## K. Billing & payouts (detail in AUTH_BILLING_INTEGRATIONS.md)

| Feature | Disp. |
|---|---|
| Per‑course Stripe products/prices (lazy‑created) | `[v1]` |
| Platform‑teacher (direct) vs Connect teacher (application_fee) | `[v1]` |
| Platform fee `platform_settings.teacher_fee_percent` | `[v1]` (per‑tenant or global) |
| Promo coupons mirrored to Connect accounts | `[v1]` |
| Subscriptions + trials | `[v1]` |
| Per‑tenant statement descriptor / receipt branding | `[v1]` (new) |
| Academy Stripe webhook (enroll confirm, sub cancel) | `[v1]` |

## L. Lead funnel

| Feature | What it does | Disp. |
|---|---|---|
| Consented email capture | From free downloads/resources; `lead_emails` (idempotent per email+doc) | `[v1]` (per‑tenant) |
| Download events | `lead_download_events` | `[v1]` |
| Session correlation | `lead_session_id` cookie → links anon → signup | `[v1]` |
| WitUS Inbox notify | `notifyLead()` → HMAC POST to Inbox | `[later]` (ecosystem; keep behind a tenant flag) |

## M. Media

| Feature | What it does | Disp. |
|---|---|---|
| Cloudinary library | `media_assets` per owner; tags, search, dims, duration | `[v1]` |
| Media references | List lessons/assignments using an asset | `[v1]` |
| Document proxy | Inline PDF serving (whitelist Cloudinary hosts) | `[v1]` |

## N. Admin (per‑tenant + platform)

| Feature | Disp. |
|---|---|
| Course management (all courses, enrollment counts) | `[v1]` (tenant‑scoped for brand admin; cross‑tenant for owner) |
| Category CRUD | `[v1]` |
| Lead‑funnel dashboard | `[v1]` |
| Platform settings (fee, price IDs) | `[v1]` |
| **Tenant registry CRUD** (new) | `[v1]` platform‑owner |
| **Map dataset editor** (new) | `[v1]` brand‑admin |

## O. Live sessions

| Feature | Disp. |
|---|---|
| `live_sessions` generic `embed_code` (Viloud/iframe), centos_team vs teacher host | `[later]` |

## P. Onboarding tours / analytics (CentOS app tours)

| Feature | Disp. |
|---|---|
| `module_tours`, `tour_events` (app onboarding analytics) | `[drop]` (CentOS app‑tour system, not course content). NB: distinct from course **virtual tours** in §C. |

## Q. Achievements

| Feature | Disp. |
|---|---|
| `user_achievements` (course_complete, path_complete, streak_7/30/90, first_log…) | `[later]` (port course/path achievements; drop CentOS streak/log types) |

## R. ⭐ Signature: BVC Commodity Map

**What it is.** The curriculum's primary discovery surface: an interactive world map plotting **21 commodity "episodes" across 3 seasons**, in two switchable modes (`MapTabs`):

- **Episode Origins** (`CommodityMap.tsx`) — D3 + world‑atlas TopoJSON, **Natural Earth** projection; a colored pin per episode at its origin lat/lon; click → episode detail card; season filter (All / S1 Daily Rituals / S2 The Oldest Toast / S3 The Forbidden Leaf).
- **Growing Belts** (`CommodityBeltMap.tsx`) — **Equal Earth** projection; latitude bands + production‑region polygons (by ISO numeric country code) per commodity; `mix-blend-mode: multiply` so overlaps blend; per‑commodity toggles; an overlap legend; sub‑national fallback (e.g. peyote → Chihuahuan Desert bounding box).

**Current data source.** ⚠️ **Hardcoded** in `lib/bvc/commodities.ts` (`COMMODITIES: Commodity[]`, 21 entries: `{id, season, ep, name, geo, lat, lon, body, isHome?}`) + a `SEASON_COLOR_MAP`; belt data is a separate hardcoded `BELTS` array + `PRODUCTION_COUNTRIES` map in `CommodityBeltMap.tsx`. No DB backing. An optional `seasonFilter` prop lets a lesson page embed the map filtered to one season (`courses.bvc_season`).

**Standing limitations (TODOs in code).** Pins/CTAs currently link to `/academy` (the catalog), not to specific episode/course routes; some belt regions use bounding‑box fallbacks.

**Disposition: `[v1]` — keep & improve.**
- **Make it data‑driven + per‑tenant:** a `map_commodities` (and `map_belts`/`map_regions`) table keyed by `tenant_id`, so new episodes appear automatically and other brands can have their own map (or none). See `DATA_MODEL.md`.
- **Wire pins → real episode routes** (close the standing TODO).
- **Improvements:** filter by season/subject/latitude band; **audio‑first hover preview** (it's a podcast curriculum); optional trade‑route & time‑period layers; **make the map a CYOA / learning‑path entry point** so learners navigate the curriculum geographically.
- Preserve the dual‑projection rendering quality (Natural Earth pins + Equal Earth belts with blend‑mode overlaps). Full spec in `CONTENT_AND_PEDAGOGY.md §Commodity Map`.

---

## Cross‑cutting dispositions

- **`[drop]` everywhere:** CentOS personal‑OS tie‑ins (health‑metric assignment capture, `metric_slots` semantics, app‑tutorial flags, module_tours/tour_events app‑onboarding), the env‑var single‑admin, shared `profiles`/`auth.users` coupling, CentOS marketing chrome.
- **`[new]` for the LMS:** `tenants` registry + host→tenant resolution; per‑tenant branding/legal/age‑gate; per‑tenant Stripe descriptor; data‑driven per‑tenant map dataset; per‑tenant role assignment + platform‑owner.
