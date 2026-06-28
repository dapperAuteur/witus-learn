# Migration & Extraction

Getting **Better Vice Club** content (and, if desired, learner data) out of the shared CentOS Supabase DB into the new standalone LMS (Neon + Better Auth), and the CentOS‑side changes that complete the boundary.

> The hardest part is **identity** — CentOS keys everything to Supabase `auth.users` UUIDs; Better Auth issues new IDs. Decide PRD **OQ1** (remap vs. clean‑start) before exporting.

---

## 1. What counts as "BVC content"
Identify the rows to extract (the rest stays in CentOS):
- **Courses:** `bvc_season IS NOT NULL` OR `category = 'Better Vice Club'` OR a known `series_slug` OR `instructor_id` = the BVC author account. (Verify the exact selector against live data — `bvc_season` is the most reliable.)
- **Everything hanging off those courses:** modules, lessons, lesson_embeddings, glossary terms, sources, claims, assignments, tour_scenes/hotspots/links, prerequisites/recommendations, promo_codes, learning_paths that contain only BVC courses.
- **Learner data (optional, OQ1):** enrollments, lesson_progress, course_completions, reviews, likes, saves, messages, submissions for those courses.
- **The map dataset:** today hardcoded in `lib/bvc/commodities.ts` (+ `BELTS` in `CommodityBeltMap.tsx`) — seed `map_commodities`/`map_belts` from these 21 entries (link each to its migrated `course_id`).

## 2. Export
- Use a read‑only export script (Supabase service role) that selects the BVC course IDs, then cascades to all child tables, writing JSON/NDJSON (or a SQL dump) per table. Preserve original UUIDs in an `old_id` field for remapping.
- **Embeddings:** export `lesson_embeddings.embedding` if you keep the same model/dim (`gemini-embedding-001 @768d`) — vectors are portable. Otherwise **re‑generate** in the new app after load (cleaner; avoids model drift). Recommended: re‑generate.
- **Media (Cloudinary):** assets are URL‑referenced; **keep the Cloudinary account** (or copy assets) and carry `content_url`/`media_assets` URLs as‑is. No binary migration needed if the account is retained.

## 3. Identity remap (OQ1)
Pick one:
- **A — Remap by email (preserve history).** For each distinct `auth.users.id` referenced by exported BVC rows, read the email from Supabase, create/find the Better Auth user (magic‑link, no password to migrate), build an `old_uuid → new_uuid` map, and rewrite every `user_id`/`instructor_id`/`student_id`/`granted_by`/`confirmed_by` FK on import. Learners re‑verify via magic‑link on first new‑domain login.
- **B — Clean start (simplest).** Import **courses + content only** (re‑home authorship to a fresh instructor account). Archive old enrollments/progress/completions read‑only in CentOS. Learners re‑enroll on the new domain. Choose this if historical learner counts are low.
- **Certificates:** old verification links point at `centenarianos.com/academy/verify/{token}`. If you remap completions, you can preserve `verification_token` so re‑issued certificates verify on the new domain; old CentOS links can 301 → the new domain (or be left to expire). Decide per OQ1.

## 4. Load into the new LMS
1. Create the **BVC tenant** (`tenants` row + `tenant_domains` for the new host) and stamp `tenant_id` on every imported top‑level row (courses, paths, categories, leads, map_*).
2. Import in FK order: users/profiles → instructor_profiles → courses → modules → lessons → (embeddings) → glossary/sources/claims → assignments → tours → prerequisites/recs → paths → (learner data if remapping) → map_commodities/map_belts.
3. Rewrite all user FKs via the remap (Option A) or to the new author (Option B).
4. **Re‑generate embeddings** (recommended) via `POST /courses/[id]/generate-embeddings` per course.
5. Run the **isolation test suite** (MULTITENANCY §8) with BVC + a dummy tenant before pointing DNS.

## 5. CentOS‑side changes (close the boundary — separate CentOS branch)
Per the docs‑sync rule, do these in the CentOS repo when the new LMS goes live:
- **Decision D2: New LMS owns teaching.** Remove the BVC courses from CentOS (or unpublish), since they now live on the new platform.
- **Keep CentOS in‑app tutorials** (`is_app_tutorial` courses) in CentOS, or migrate them too — owner's call. The CentOS "Learn the App" section can stay for app onboarding.
- **Link out:** point the CentOS `/academy/explore` and any BVC links to the new domain (or retire them).
- Optionally 301 old BVC course/verify URLs → the new domain.
- Update CentOS nav/SEO so it no longer advertises BVC.

## 6. Ecosystem doc update (this repo, `plans/ecosystem/`)
- **Add the new platform** to the WitUS platform index (name, domain, one job: "multi‑tenant cited‑course LMS").
- **Supersede** the line *"The Academy is a module of CentenarianOS — not a separate product. There is no standalone Learn.WitUS app."* — it now IS a standalone platform.
- Note the CentOS↔LMS boundary (CentOS keeps tutorials/links out) and that the new app honors the target architecture (own Neon DB, Better Auth, own Stripe/Resend), reducing — not adding to — the shared‑DB debt.

## 7. Cutover sequence
1. Build the new LMS through PRD Phase 8 (everything but migration) against an empty DB + a dummy tenant; pass isolation tests.
2. Provision infra (operator tasks §8).
3. Run export → remap → load for BVC into staging; QA the full learner flow (age‑gate → map → episode → enroll → complete → certificate) with zero CentOS references.
4. Point the BVC domain at the new app; smoke‑test prod.
5. Land the CentOS‑side boundary changes (§5) + ecosystem doc update (§6).
6. Monitor; keep the Supabase BVC rows read‑only as a fallback for one cycle before deleting.

## 8. Operator prerequisites (belong to the NEW repo, not this one)
File these as `plans/user-tasks/` in the new repo:
- **New git repo** + Vercel project.
- **Neon Postgres** (enable `pgvector`) — pooled + unpooled URLs.
- **Better Auth** configured (magic‑link; `BETTER_AUTH_SECRET`/`URL`).
- **Stripe** account (keys + webhook endpoint; Connect enabled; per‑tenant descriptor).
- **Resend** account + verify the BVC sending domain.
- **Cloudinary** (retain shared, or new) + unsigned preset.
- **Gemini** API key.
- **DNS** for the BVC domain → Vercel; TLS.
- (Optional) FlashLearn eco API key; WitUS Inbox config if wiring those.

## 9. Risks
- **Identity remap correctness** (Option A): a wrong FK rewrite orphans progress/completions. Test the map on a copy first; keep `old_id` for audit.
- **Embedding drift:** if you copy vectors but later change the model, crossroads degrade. Prefer re‑generation.
- **Media coupling:** if Cloudinary is *not* retained, every `content_url` breaks — plan a binary copy + URL rewrite, or keep the account.
- **Partial BVC selector:** if the "what is BVC" query misses rows (e.g. a BVC course without `bvc_season`), content is left behind. Reconcile counts (`SELECT count(*) ... GROUP BY` selector) before and after.
- **Two‑sided cutover:** don't remove BVC from CentOS until the new domain is verified live; otherwise a gap in availability.
