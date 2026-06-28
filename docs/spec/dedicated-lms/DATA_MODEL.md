# Data Model — target multi‑tenant schema

The complete Academy schema (≈38 tables through CentOS migration 195), re‑expressed for the new LMS on **Neon Postgres + Better Auth**, with **multi‑tenancy** added. Postgres + pgvector throughout (Neon supports `pgvector`).

**Three structural changes from CentOS:**
1. **Identity:** CentOS keys everything to Supabase `auth.users` + a shared `profiles` table. Target uses **Better Auth** `users` + an LMS‑owned `user_profiles`. All `user_id` / `teacher_id` FKs point to Better Auth `users.id`.
2. **Tenancy:** a `tenant_id` column on every top‑level content table; child rows inherit via parent (with a few hot tables denormalizing `tenant_id` for cheap isolation guards). Roles become **per‑tenant**.
3. **The Commodity Map becomes data‑driven** (new `map_commodities` / `map_belts` tables) instead of hardcoded `lib/bvc/commodities.ts`.

> **Isolation posture (see MULTITENANCY doc):** enforce tenancy in a **mandatory data‑access layer** (every query takes `tenantId`). Optionally add defense‑in‑depth Postgres RLS using session GUCs: `SET app.tenant_id`, `SET app.user_id` per request, with policies `USING (tenant_id = current_setting('app.tenant_id')::uuid)`. CentOS RLS uses `auth.uid()`, which does **not** exist under Better Auth — do not copy those policies verbatim.

---

## 0. Identity & tenancy (NEW / re‑homed)

### `users` (Better Auth managed)
Better Auth owns this. Minimum: `id uuid pk`, `email citext unique`, `email_verified bool`, `created_at`. Magic‑link is the primary method (ecosystem auth target). Do not hand‑roll; follow Better Auth's schema + adapters.

### `user_profiles` — LMS‑owned profile (replaces CentOS `profiles`)
`user_id uuid pk → users.id`, `username citext unique` (`^[a-z0-9_-]{3,30}$`), `display_name text`, `bio text`, `avatar_url text`, `is_platform_owner bool default false`, `created_at`, `updated_at`.
*Dropped from CentOS profiles:* `role` (→ per‑tenant memberships), `stripe_customer_id` (→ per‑tenant, see billing), CentOS app columns (`dashboard_home_*`, `clock_format`, …). Username is **global** (one identity across tenants).

### `tenants` — the brand registry (NEW)
`id uuid pk`, `slug citext unique` (e.g. `better-vice-club`), `name text`, `tagline text`, `is_active bool`, `theme jsonb` (accent/colors/wordmark/favicon/og/manifest paths), `legal jsonb` (terms/privacy/safety URLs), `requires_age_gate bool`, `flags jsonb` (feature toggles: paths, lead_funnel, witus_inbox, marketplace…), `stripe jsonb` (account mode, statement_descriptor), `email jsonb` (from, reply_to, from_name), `created_at`.

### `tenant_domains` — host → tenant resolution (NEW)
`id uuid pk`, `tenant_id → tenants.id`, `host citext unique` (e.g. `bettervice.club`), `is_primary bool`, `created_at`. Middleware resolves request host → tenant. (Alternatively, set tenant by build‑time env per deployment; the table is the runtime‑resolution path the PRD recommends.)

### `tenant_memberships` — per‑tenant roles (NEW; replaces global `profiles.role`)
`id uuid pk`, `tenant_id → tenants.id`, `user_id → users.id`, `role text check in ('learner','instructor','brand_admin')`, `created_at`, **unique(tenant_id, user_id)**. A user can be a learner on one brand and an instructor on another. Platform‑owner is global (`user_profiles.is_platform_owner`).

### `platform_settings` — key/value (per CentOS)
`key text` (+ optional `tenant_id` for per‑tenant overrides) `pk`, `value text`, `updated_at`. Seeds: `teacher_fee_percent='15'`, teacher price IDs.

---

## 1. Courses & structure

### `courses`
`id uuid pk`, **`tenant_id → tenants.id` (NEW, NOT NULL)**, `instructor_id → users.id` (was `teacher_id → profiles.id`), `title text`, `slug text`, `description text`, `cover_image_url text`, `category text`, `tags text[]`, `price numeric(10,2) default 0`, `price_type text check in ('free','one_time','subscription') default 'free'`, `stripe_product_id text`, `stripe_price_id text`, `is_published bool default false`, `visibility text check in ('public','members','scheduled')`, `published_at timestamptz`, `navigation_mode text check in ('linear','cyoa') default 'linear'`, `trial_period_days int default 0`, `is_sequential bool default false`, `override_questions jsonb default '[]'`, `allow_cross_course_cyoa bool default false`, `ai_recommendations jsonb`, `ai_recommendations_at timestamptz`, `like_count int default 0`, `review_count int default 0`, `avg_rating numeric(3,2) default 0`, `season_number smallint`, `series_slug text`, `series_title text`, `is_featured bool default false`, `featured_order int default 0`, `instructor_is_featured bool default false`, `instructor_featured_order int default 0`, `created_at`, `updated_at`.
**Indexes:** `unique(tenant_id, instructor_id, slug) where slug is not null`; `(tenant_id, is_published)`; `(tenant_id, series_slug) where series_slug not null`; featured partials scoped by tenant.
**Dropped:** `bvc_season` (→ generic `season_number` + the map dataset references seasons), `is_app_tutorial`/`teacher_is_featured` CentOS naming kept as `instructor_*`.

### `course_modules`
`id uuid pk`, `course_id → courses.id`, `title text`, `order int default 0`, `is_published bool default true`, `created_at`. (Tenant inherited via course.)

### `lessons`
`id uuid pk`, `course_id → courses.id`, `module_id → course_modules.id` (nullable), **`tenant_id` (denormalized, NEW)** for cheap isolation on by‑id access + embeddings join, `title text`, `lesson_type text check in ('video','text','audio','slides','quiz','360video','photo_360','virtual_tour','map')`, `content_url text`, `text_content text`, `content_format text check in ('markdown','tiptap') default 'markdown'`, `duration_seconds int`, `order int default 0`, `is_free_preview bool default false`, `is_published bool default true`, `slug text`, **JSONB content:** `quiz_content`, `audio_chapters`, `transcript_content`, `map_content`, `documents`, `podcast_links`, **360:** `video_360_autoplay bool`, `video_360_poster_url text`, `created_at`, `updated_at`.
**Indexes:** `unique(course_id, slug) where slug not null`; draft partials.
JSONB shapes are specified in `CONTENT_AND_PEDAGOGY.md`.

---

## 2. Enrollment & progress

### `enrollments`
`id uuid pk`, **`tenant_id` (denormalized, NEW)**, `user_id → users.id`, `course_id → courses.id`, `stripe_checkout_session_id text`, `status text check in ('active','cancelled') default 'active'`, `attempt_number int default 1`, `metric_slots int default 1` *(CentOS health tie‑in; keep as a generic attempt counter or drop)*, `enrolled_at`, `last_content_seen_at timestamptz`. **unique(user_id, course_id, attempt_number)**.

### `lesson_progress`
`(user_id, lesson_id) pk`, `completed_at timestamptz`, `watch_seconds int default 0`, `quiz_score numeric(5,2)`, `quiz_answers jsonb`, `tour_progress jsonb` (`{visited_hotspot_ids:[]}`).

### `course_completions`
`id uuid pk`, `user_id`, `course_id`, `completed_at`, `verification_token text unique default encode(gen_random_bytes(16),'hex')`. **unique(user_id, course_id)**. Public verify page reads by token (no auth).

---

## 3. Assessment

### `assignments`
`id uuid pk`, `course_id`, `lesson_id` (nullable), `module_id` (nullable), `title`, `description`, `due_date timestamptz`, `scope text check in ('course','module','lesson') default 'course'`, `requires_metrics jsonb` *(CentOS health capture — replace with generic `evidence_config` or drop)*, `created_at`.

### `assignment_submissions`
`id uuid pk`, `assignment_id`, `student_id → users.id`, `content text`, `media_url text`, `status` (draft/submitted), `submitted_at`, `grade text`, `teacher_feedback text`, `metric_snapshot jsonb` *(drop/replace)*. **unique(assignment_id, student_id)**.

### `submission_messages`
`id uuid pk`, `submission_id`, `sender_id → users.id`, `is_teacher bool`, `body text`, `media_url text`, `created_at`.

---

## 4. Pedagogical rigor (glossary / sources / claims)

### `course_glossary_terms`
`id uuid pk`, `course_id`, `lesson_id` (nullable), `term text`, `phonetic text`, `definition text`, `definition_format text check in ('markdown','tiptap')`, `sort_order int`, `created_at`, `updated_at`. **unique(course_id, term)**.

### `course_sources`
`id uuid pk`, `course_id`, `in_text text` (e.g. "(Author, 2020)"), `apa text`, `doi text`, `url text`, `pdf_url text` (open‑access), `verified bool default false`, `created_at`. Populated/validated via Crossref + Unpaywall (`/sources/resolve`).

### `course_claims`
`id uuid pk`, `course_id`, `lesson_id` (nullable), `claim_text text`, `location text`, `status text check in ('unconfirmed','confirmed','dropped') default 'unconfirmed'`, `source_id → course_sources.id` (nullable), `notes text`, `created_at`, `confirmed_at`, `confirmed_by → users.id`. This is BVC's fact‑checking ledger.

---

## 5. Virtual tours (360° interactive)

### `tour_scenes`
`id uuid pk`, `lesson_id → lessons.id`, `slug text`, `name text`, `caption text`, `panorama_url text`, `panorama_type text check in ('photo','video')`, `poster_url text`, `start_yaw numeric`, `start_pitch numeric`, `is_entry_scene bool`, `order_index int`, timestamps. **unique(lesson_id, slug)**.

### `tour_hotspots`
`id uuid pk`, `scene_id → tour_scenes.id`, `hotspot_type text check in ('info','audio','link','scene_jump')`, `yaw numeric`, `pitch numeric`, `title text`, `body text`, `audio_url text`, `external_url text`, `target_scene_id → tour_scenes.id`, `icon text`, `created_at`.

### `tour_scene_links`
`id uuid pk`, `from_scene_id`, `to_scene_id`, `yaw`, `pitch`, `label text`, `created_at`. **unique(from_scene_id, to_scene_id)**.

---

## 6. CYOA / embeddings

### `lesson_embeddings`
`lesson_id uuid pk → lessons.id`, `embedding vector(768)`, `created_at`. ivfflat cosine index. Generated via Gemini (`gemini-embedding-001 @ 768d` today; new build may adopt the latest embedding model — keep the dim consistent with the index).

### `lesson_paths` (precomputed CYOA edges, optional)
`(source_lesson_id, target_lesson_id) pk`, `path_type text check in ('linear','semantic','random')`, `order int`. CentOS computes crossroads live via RPC; this table is an optional cache.

### RPCs (rewrite for tenancy)
- `match_lessons(query_embedding, course_id_filter, exclude_lesson_id, match_count=2)` → in‑course neighbors.
- `match_lessons_global(query_embedding, exclude_lesson_id, exclude_course_id, match_count=3, **tenant_filter uuid**)` → cross‑course neighbors. **Add `tenant_filter`** and `AND courses.tenant_id = tenant_filter AND courses.allow_cross_course_cyoa` — without it, CYOA leaks across tenants. (This was the #1 leak vector in the white‑label analysis.)

---

## 7. Prerequisites & recommendations

- **`course_prerequisites`** `id, course_id, prerequisite_course_id, enforcement ('required'|'recommended'), sort_order`. **unique(course_id, prerequisite_course_id)**, `check course_id<>prerequisite_course_id`.
- **`course_recommendations`** `id, course_id, recommended_course_id, direction ('before'|'after'), sort_order, notes`. unique + self‑check.
- **`prerequisite_overrides`** `id, course_id, user_id, granted_by → users.id, notes, created_at`. unique(course_id, user_id).
- **`prerequisite_override_requests`** `id, course_id, student_id, status ('pending'|'approved'|'rejected'|'cancelled'), answers jsonb, reason, teacher_response, decided_by, decided_at, timestamps`. Partial unique: one pending per (course, student).

---

## 8. Social

- **`course_reviews`** `id, course_id, student_id, rating int 1–5, body, timestamps`. unique(course_id, student_id). Trigger → `courses.avg_rating`, `review_count`.
- **`course_likes`** `(user_id, course_id) pk, created_at`. Trigger → `courses.like_count`.
- **`course_saves`** `(user_id, course_id) pk, created_at` (private).
- **`lesson_discussions`** `id, lesson_id, user_id, parent_id (1‑level), body, is_pinned, is_teacher, timestamps`.
- **`course_messages`** `id, course_id, sender_id, recipient_id, body, media_url, is_read, created_at` (DMs; unified inbox aggregates these).

---

## 9. Learning paths

- **`learning_paths`** `id, **tenant_id (NEW)**, instructor_id → users.id, title, description, cover_image_url, is_published, timestamps`.
- **`learning_path_courses`** `(path_id, course_id) pk, order_index, is_required bool`.
- **`learning_path_completions`** `id, user_id, path_id, completed_at`. unique(user_id, path_id).

---

## 10. Billing

- **`teacher_profiles`** → rename **`instructor_profiles`** `user_id pk → users.id`, `bio`, `specialties text[]`, `stripe_connect_account_id`, `stripe_connect_onboarded bool`, `stripe_subscription_id`, `created_at`. *(Per‑tenant: an instructor's Connect account is global to them, but their membership/role is per‑tenant.)*
- **`promo_codes`** `id, instructor_id → users.id, course_id (nullable), stripe_coupon_id, code text unique, discount_percent int 1–100, max_uses int, uses_count int, expires_at, created_at`. (Tenant via course.)
- **Stripe customer id:** move CentOS `profiles.stripe_customer_id` to a per‑tenant mapping — **`tenant_stripe_customers`** `(tenant_id, user_id) pk, stripe_customer_id` — because a learner paying two brands needs distinct customers if those brands ever use separate Stripe accounts.

---

## 11. Lead funnel

- **`lead_emails`** `id, **tenant_id (NEW)**, email citext, source_document text, course_id (nullable), session_id text, user_id (nullable), consented bool, created_at`. **unique(tenant_id, lower(email), coalesce(source_document,''))**.
- **`lead_download_events`** `id, **tenant_id (NEW)**, course_id (nullable), document_key, document_title, session_id, user_id (nullable), referrer, created_at`.

---

## 12. Media

- **`media_assets`** `id, owner_id → users.id, **tenant_id (NEW, optional)**, cloudinary_public_id, cloudinary_resource_type, secure_url, asset_kind, name, description, tags text[], file_size_bytes, duration_seconds, width, height, timestamps`. GIN(tags), trigram(name).

---

## 13. Categories & live sessions

- **`academy_course_categories`** → **`course_categories`** `id, **tenant_id (NEW)**, name, sort_order, created_at`. **unique(tenant_id, name)**.
- **`live_sessions`** `[later]` `id, **tenant_id**, host_type ('platform'|'instructor'), instructor_id (nullable), course_id (nullable), title, description, scheduled_at, embed_code, is_live, is_public, created_at`.

---

## 14. ⭐ Commodity Map dataset (NEW — replaces hardcoded `lib/bvc/commodities.ts`)

### `map_commodities`
`id uuid pk`, **`tenant_id → tenants.id`**, `course_id → courses.id` (the episode this pin opens; nullable until published), `season_number smallint`, `episode_label text` ("Episode 1"), `name text` ("Coffee"), `geo text` ("Ethiopian highlands"), `lat numeric`, `lon numeric`, `color text` (or derive from `season_number` via tenant theme), `is_home bool` (synthesis episode), `summary text`, `sort_order int`, timestamps.
**Index:** `(tenant_id, season_number, sort_order)`.

### `map_belts` (Growing Belts mode)
`id uuid pk`, `tenant_id`, `commodity_id → map_commodities.id` (or standalone), `name text`, `season_number smallint`, `color text`, `lat_min numeric`, `lat_max numeric`, `description text`, `producers text`, `mode_b bool` (region polygons available), `production_country_codes int[]` (ISO 3166‑1 numeric), `fallback_bbox jsonb` (sub‑national, e.g. peyote), `sort_order int`.

> The map renders from these tables filtered by `tenant_id` (+ optional `season_number`). New episodes appear automatically; other tenants get their own map or none. Pins/belts link to `course_id` → real episode routes (closing the CentOS TODO).

---

## ER overview

```
users (Better Auth) ─1:1─ user_profiles            tenants ─1:many─ tenant_domains
   │                                                   │  └─1:many─ tenant_memberships ─many:1─ users
   │ (instructor_id / user_id / student_id FKs)        │
   ▼                                                    ▼ (tenant_id on every top-level table)
courses ─1:many─ course_modules ─1:many─ lessons ─┬─ lesson_embeddings (1:1)
   │                                              ├─ lesson_progress (per user)
   │                                              ├─ lesson_discussions
   │                                              ├─ course_glossary_terms
   │                                              └─ tour_scenes ─ tour_hotspots / tour_scene_links
   ├─ enrollments ─ (re-attempts)                 map_commodities ─ map_belts   (tenant map dataset)
   ├─ course_completions (verification_token)     learning_paths ─ learning_path_courses ─ courses
   ├─ assignments ─ assignment_submissions ─ submission_messages
   ├─ course_reviews / course_likes / course_saves / course_messages
   ├─ course_prerequisites / course_recommendations / prerequisite_overrides(+requests)
   ├─ course_sources ─ course_claims
   ├─ promo_codes      instructor_profiles (Stripe Connect)
   └─ lead_emails / lead_download_events           media_assets
```

---

## CentOS → target mapping (cheat sheet)

| CentOS | Target | Note |
|---|---|---|
| `auth.users` (Supabase) | `users` (Better Auth) | new UUIDs → identity remap (see migration doc) |
| `profiles` (shared) | `user_profiles` (LMS‑owned) | drop `role` (→ memberships), `stripe_customer_id` (→ per‑tenant), CentOS app cols |
| `profiles.role` | `tenant_memberships.role` + `user_profiles.is_platform_owner` | per‑tenant roles |
| `teacher_id` (→profiles) | `instructor_id` (→users) | rename + re‑home |
| `teacher_profiles` | `instructor_profiles` | rename |
| `auth.uid()` RLS | app‑layer scoping + GUC RLS | rewrite all policies |
| (none) | `tenants`, `tenant_domains`, `tenant_memberships` | new tenancy |
| `lib/bvc/commodities.ts` (hardcoded) | `map_commodities` / `map_belts` | data‑driven, per‑tenant |
| `bvc_season` | `season_number` + map dataset | generalize |
| `is_app_tutorial`, `module_tours`, `tour_events` | — | drop (CentOS app concept) |

**Tables to add `tenant_id` to (top‑level):** courses, lessons (denormalized), enrollments (denormalized), learning_paths, course_categories, lead_emails, lead_download_events, map_commodities, map_belts, live_sessions, media_assets (optional). All other tables inherit via their parent FK.

**Keep as‑is (logic/structure unchanged, just re‑FK'd):** course_modules, lesson_progress, course_completions, assignments, submissions, glossary, sources, claims, tours, reviews, likes, saves, discussions, messages, prerequisites, paths, promo_codes, embeddings, platform_settings.
