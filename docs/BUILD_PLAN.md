# Learn.WitUS.Online — Build Plan

A standalone, **multi-tenant**, strictly-isolated LMS built from `docs/spec/dedicated-lms/`.
First tenant: **Better Vice Club (BVC)** — a cited, audio-first vice/drug-education curriculum
(21 commodity "episodes" across 3 seasons). The signature surface is the **Commodity Map**.

## Context — why this build exists

BVC is currently a module inside CentenarianOS, sharing a Supabase DB (architectural debt).
The ecosystem rules are "one job per app" and "no shared DB". This project extracts teaching
into its own ecosystem-compliant platform: **own Neon DB + Better Auth + own Stripe + own
Resend**, multi-tenant from day one so other brands can run on their own domains, each isolated
so a learner never perceives the others. Success = full BVC learner flow (age-gate → map →
episode → enroll → complete → verified certificate) with **zero CentOS references**, and an
automated isolation suite proving no cross-tenant leak.

## Locked decisions (confirmed with owner)

- **Stack:** Next.js 16 App Router + TS + Tailwind v4, Neon Postgres (pgvector), Better Auth
  (magic-link), own Stripe, own Resend, Gemini embeddings/recs, Cloudinary media. Mirrors the
  ecosystem sibling `shop-witus` conventions.
- **Schema/ORM:** Drizzle ORM for schema + typed queries; **raw-SQL migration files** for the
  Postgres-specific bits (extensions `vector`/`citext`, `gen_random_bytes` defaults, ivfflat &
  partial-unique indexes, `avg_rating`/`review_count`/`like_count` triggers, the `match_lessons*`
  RPCs).
- **Isolation enforcement:** a mandatory **tenant-scoped data-access layer** (single chokepoint;
  no handler runs an unscoped catalog query) + the **isolation test suite** as the hard gate.
  Postgres RLS (per-request `SET app.tenant_id` GUC) is left as a later hardening pass — the Neon
  serverless driver + pooling makes per-request GUCs awkward, and the DAL+tests are the spec's
  primary mechanism.
- **Stripe:** single account + **per-tenant statement descriptors / receipt branding** + per-tenant
  customer records. Designed so a sensitive tenant can later be promoted to its own account.
- **Tenant resolution:** runtime **host → tenant** (one deployment, many domains; adding a brand =
  DB rows + DNS, no redeploy). Local dev uses `bvc.localhost:3040` / `acme.localhost:3040`
  (browsers resolve `*.localhost` → 127.0.0.1) with a `DEV_TENANT_HOST` override.
- **Migration identity remap (Option A vs B):** deferred to Phase 9; build/test against an empty DB
  + a dummy "Acme Academy" tenant until then.

## Architecture: the tenancy chokepoint (the hard gate)

1. **`src/proxy.ts`** (Next 16's renamed middleware) — lightweight, no DB on the edge: ensures the
   `Host` is present, performs static **route-surface gating** (redirect CentOS-style/blocked routes
   to tenant home), and lets the age-gate cookie flow through. Heavy work stays server-side.
2. **`src/lib/tenant.ts`** — `getTenantFromHost()` (React `cache()`-wrapped, reads `headers()` host,
   looks up `tenant_domains`, returns the `tenants` row; unknown host → neutral 404) and
   `requireTenant()` for handlers/RSC. **Branding is always server-resolved; never client-supplied.**
3. **`src/db/scoped.ts`** — the mandatory scoped query layer. A `scopedDb(tenantId)` repository whose
   methods bake `tenant_id` into every query:
   - `list*` → `WHERE tenant_id = $current` (catalog/search/series/categories/paths/instructors).
   - `getByIdOrNotFound(id)` → fetch, then `if (row.tenant_id !== current) notFound()` (404, never
     redirect — a redirect reveals existence). Same for slug resolution and enroll-by-id.
   - `matchLessonsGlobal(embedding, { tenantFilter })` → cross-course CYOA **must** pass
     `tenant_filter` and constrain `courses.tenant_id = tenantFilter AND courses.allow_cross_course_cyoa`
     (the #1 leak vector).
   - AI recommendation candidate lists are tenant-filtered before any title reaches Gemini.
4. **Isolation tests** (Vitest, Phase 2) drive in-process route handlers for two tenants and fail the
   build on any leak.

## Repo layout (mirrors `shop-witus`)

```
src/
  app/                     # App Router: (public) catalog/map, /{instructor}/{slug}, /my-courses,
                           #   /verify/[token], /admin, /platform, api/*
  components/              # brand-aware chrome, lesson players, Commodity Map (client)
  db/
    client.ts              # lazy Proxy-wrapped Drizzle over @neondatabase/serverless Pool
    scoped.ts              # tenant-scoped data-access layer (the chokepoint)
    schema/                # auth.ts, tenancy.ts, courses.ts, learning.ts, billing.ts,
                           #   rigor.ts, social.ts, map.ts, index.ts
    migrations/            # drizzle-kit output + NNNN_*.sql raw-SQL for PG-specific bits
    queries/               # composable typed query helpers used by scoped.ts
  lib/
    env.ts auth.ts auth-client.ts tenant.ts mailer.ts(Resend) cloudinary.ts
    stripe.ts gemini.ts seo/ rbac.ts (per-tenant guards)
scripts/                   # migrate.ts, seed-tenants.ts, seed-bvc.ts, generate-embeddings.ts
tests/                     # isolation/*.test.ts (hard gate) + unit tests
docs/  plans/user-tasks/
```

## Phase plan (PRD milestones)

Each phase ends with an explicit **verification gate**. The Phase-2 isolation suite gates every
later phase: any cross-tenant leak fails the build.

### Phase 1 — Foundation
Scaffold Next 16 + Tailwind; `env.ts`; Drizzle/Neon `client.ts`; **auth** + **tenancy** schema
(`users/sessions/accounts/verifications`, `user_profiles`, `tenants`, `tenant_domains`,
`tenant_memberships`, `platform_settings`); Better Auth magic-link via Resend; `proxy.ts` +
`tenant.ts` host→tenant; platform-owner + BVC/Acme tenant bootstrap script.
**Verify:** `pnpm typecheck` clean; initial migration applies to Neon; `bvc.localhost:3040` resolves
to the BVC tenant and `acme.localhost:3040` to Acme; magic-link sign-in issues a session; an unknown
host → neutral 404.

### Phase 2 — Tenancy & isolation (writes the hard gate)
`scopedDb()` data-access layer; per-tenant **branding/theming** (server-resolved metadata, OG,
JSON-LD, favicon, manifest); **age-gate** (cookie `{slug}_age_ok`, server-readable, mounted in the
academy layout on `requires_age_gate`); per-tenant **legal pages** (`/terms /privacy /safety` from
`tenants.legal`); route-surface gating. **Write the isolation test suite now.**
**Verify:** isolation suite green for BVC + Acme (catalog, by-id 404, slug 404, enroll 404, CYOA,
AI recs, instructor directory, sitemap, OG/JSON-LD, blocked-route redirect, cert-email sender);
age-gate withholds content pre-acknowledgment via SSR; BVC chrome shows zero CentOS references.

### Phase 3 — Catalog & course structure
`courses/course_modules/lessons/course_categories` + draft/publish, visibility, slugs; catalog list
(search/sort/category/featured/series); instructor profiles/directory (tenant-scoped course lists).
**Verify:** create→publish a course; catalog + series + categories return only the current tenant's
content; isolation suite still green.

### Phase 4 — Learning experience
Lesson players for every format (video/audio+chapters+transcript/text/slides/quiz/360/tour/map);
`lesson_progress`; free-preview + sequential gating; glossary; sources/claims display; document
proxy. **Verify:** enroll free → play each format → progress + sequential lock behave; locked
payloads strip content.

### Phase 5 — Enrollment & billing
Stripe Checkout (free + one-time + subscription/trial), lazy product/price, Connect payouts +
platform fee, promo codes, prerequisites + override flow, completion → `course_completions` +
certificate + public `/verify/[token]` + Resend completion email; **per-tenant descriptor/sender**.
**Verify:** free + paid enroll; webhook confirms; complete → certificate verifies on tenant branding;
receipt/descriptor + email `from` are the tenant's, never CentOS.

### Phase 6 — CYOA + AI + assessments
Gemini embeddings (`/generate-embeddings`, 768d, ivfflat); crossroads (linear + 2 semantic + random +
opt-in cross-course); quizzes (auto-score/attempts/pool/explanations); assignments + submissions +
threaded feedback. **Verify:** crossroads returns ≤5 options and **never** another tenant's lesson;
cross-course `match_lessons_global` honors `tenant_filter`; quiz scores server-side.

### Phase 7 — Signature Commodity Map
Data-driven `map_commodities`/`map_belts` (per-tenant); preserve dual-projection D3 rendering
(Natural Earth pins + Equal Earth belts with `mix-blend-mode: multiply` overlaps); wire pins → real
episode/course routes; season/subject/latitude filters; seed the 21 BVC commodities (from
`gemini/centenarian-os/lib/bvc/commodities.ts`). **Verify:** BVC map renders 21 pins + belts, pins
route to real episodes, a season filter works, and Acme's map is independent/empty.

### Phase 8 — Social, paths, lead funnel, media, admin
Reviews/likes/saves/discussions/DMs + unified inbox; learning paths; lead capture + download events;
Cloudinary library + document proxy; per-tenant admin dashboards (+ platform tenant registry & map
editor). **Verify:** each surface is tenant-scoped; admin sees only its tenant; platform-owner sees
all; isolation suite green.

### Phase 9 — Migration & cutover
Export BVC from CentOS (by `bvc_season`/`series_slug`/instructor), identity remap (Option A by email
or Option B clean-start — decide here), re-generate embeddings, seed `map_*`, run isolation suite,
point the BVC domain, smoke-test the full flow, then close the CentOS boundary (unpublish/link-out).
**Verify:** full BVC flow on the production domain with zero CentOS references; reconcile row counts
before/after.

### Backlog (post-v1)
Port the LangGraph **multi-agent** pattern from `lang-chain/centenarian-coach-multiagent` to power
adaptive recommendations / cross-course paths; FlashLearnAI export; WitUS Inbox lead notify; offline
PWA; live sessions; AI path recommend.

## Cross-cutting verification

- `pnpm typecheck` + `pnpm lint` clean each phase.
- `pnpm test` (Vitest) — unit + the **isolation suite** (hard gate) green before advancing.
- Manual smoke of the BVC learner flow on `bvc.localhost:3040`.
