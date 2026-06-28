# PRD — Dedicated Multi‑Tenant LMS

**Status:** Draft for build · **Source:** extracted from CentenarianOS Academy @ migration 195 · **Date:** June 2026

---

## 1. Vision & positioning

Build **the WitUS ecosystem's learning platform**: a standalone, multi‑tenant LMS that hosts cited, media‑rich courses under multiple independent brands, each on its own domain, each isolated so a learner never perceives the others.

The platform is born from the CentenarianOS **Academy** — already a deep LMS (courses, modules, lessons in 8+ formats, CYOA semantic navigation, quizzes, assignments, certificates, Stripe payouts, learning paths, virtual tours, citation verification). We are **extracting and re‑homing** that capability into an app whose single job is teaching, with its own database and identity, and adding **multi‑tenancy** so it can power many brands.

**First tenant:** **Better Vice Club (BVC)** — an audio‑first, rigorously cited vice/drug‑education curriculum (3 seasons, 21 commodity "episodes" from coffee to khat) taught through Geography, Social Studies, Economics, and ELA. Its signature surface is an **interactive Commodity Map**.

**One‑job statement:** *"A multi‑tenant platform for publishing and selling cited, media‑rich courses under isolated brands."* Teaching belongs here, not inside any consumer app.

---

## 2. Goals & non‑goals

### Goals
- **G1.** Reproduce the Academy's learning experience (catalog → enroll → learn → assess → certify) at parity for v1‑scoped features.
- **G2.** **Strict multi‑tenant isolation:** brands share one codebase + one database but never see each other's content, users‑facing branding, or existence.
- **G3.** **Own the stack:** Neon Postgres + Better Auth (magic‑link) + own Stripe + own Resend — no dependency on the CentOS/Supabase shared DB.
- **G4.** **Preserve & improve the signature Commodity Map** as a first‑class, data‑driven, per‑tenant discovery surface.
- **G5.** **Migrate BVC** content and (where feasible) learner data out of the shared Supabase DB with a clean identity remap.
- **G6.** Honor the **BVC content rules** (cited, peer‑reviewed + indigenous knowledge, no fabricated characters, no AI tells) as first‑class platform features (sources, claims, citation verification).

### Non‑goals (v1)
- **NG1.** Porting CentOS personal‑OS modules (finance, health metrics, travel, planner). The LMS only consumes *learning*‑relevant signals if a tenant opts in later.
- **NG2.** A public teacher marketplace with open self‑signup instructors. v1 is **operator/admin‑curated** instructors per tenant. (Self‑serve teacher onboarding is `[later]`.)
- **NG3.** Native mobile apps. Responsive web + offline‑capable PWA only.
- **NG4.** Re‑inventing auth: use Better Auth's magic‑link; don't build bespoke auth.
- **NG5.** Cross‑tenant content sharing. Each course belongs to exactly one tenant (strict separation, by owner decision).

---

## 3. Target users & roles

| Role | Who | Core needs |
|------|-----|-----------|
| **Learner** | Public visitor / enrolled student | Discover (incl. the map), enroll (free/paid), watch/read/listen, take quizzes, submit assignments, earn certificates, navigate CYOA. |
| **Instructor** | Course author for a tenant | Author courses/modules/lessons (8+ formats), build quizzes/assignments/glossary/sources, set prerequisites & paths, see enrollments, get paid (Stripe Connect). |
| **Brand admin** | Operator of one tenant | Curate the catalog (featured, categories), manage the tenant's map dataset, view the lead funnel, manage instructors, set tenant branding/legal. |
| **Platform owner** | You (super‑admin) | Create tenants, set platform fee, manage all tenants, run migrations, see cross‑tenant analytics. |

> **Role model change from CentOS:** today roles are `member | teacher | admin` on a shared `profiles` row, with admin = an env‑var email. Target: roles are **per‑tenant** (a user can be a learner on one brand and an instructor on another) plus a global **platform_owner** flag. See `AUTH_BILLING_INTEGRATIONS.md`.

---

## 4. Scope

Full per‑feature detail + dispositions live in `FEATURE_INVENTORY.md`. Summary:

### v1 (must‑have)
- **Tenancy & isolation:** tenant registry, per‑tenant domain resolution, theming, strict content/brand isolation, age‑gate + per‑tenant legal pages.
- **Identity:** Better Auth magic‑link; per‑tenant role assignment; platform‑owner super‑admin.
- **Catalog & discovery:** course list with search/category/sort, featured strip, series/season grouping, **Commodity Map** (data‑driven), teacher/instructor profiles.
- **Course structure:** courses → modules → lessons; draft/publish at every level; visibility (public/members/scheduled); slugs & SEO.
- **Lesson formats:** video, audio (with chapters + transcript), text (markdown/rich), slides, quiz, **360° video/photo**, **virtual tour** (scenes/hotspots), map‑embed, documents, podcast links.
- **Enrollment & access:** free + paid (one‑time & subscription), promo codes, prerequisites (required/recommended) + override requests, free‑preview lessons, sequential module locking, guest access to free courses, re‑enrollment/attempts.
- **Learning:** progress tracking, **CYOA crossroads** (linear + semantic via embeddings + random + opt‑in cross‑course), quiz auto‑scoring with attempts/explanations/citations.
- **Assessment & certify:** assignments (course/module/lesson scope, optional metric capture), submissions + threaded teacher feedback, **completion certificates** with public verification tokens.
- **Pedagogical rigor:** glossary terms, **sources + claims + citation verification** (Crossref/Unpaywall resolve).
- **Social:** reviews/ratings, likes, saves, lesson discussions, course DMs + unified inbox.
- **Learning paths:** multi‑course sequences with completion tracking.
- **Billing:** per‑course Stripe checkout, Stripe Connect payouts, platform fee, **per‑tenant Stripe branding/descriptor**.
- **Lead funnel:** consented email capture from free downloads/resources (per tenant).
- **Media:** Cloudinary upload library + document proxy.
- **Admin:** per‑tenant catalog management, categories, lead‑funnel dashboard, map‑dataset editor.

### Later (post‑v1)
- Self‑serve instructor onboarding & a public marketplace per tenant.
- Cohorts / instructor‑led group runs.
- Achievements/streaks/gamification (table exists in CentOS; port if it earns its place).
- Ecosystem deep‑links: FlashLearnAI flashcard export, Wanderlearn 360 previews, instructor profiles on witus.online/learn.
- Live sessions (embed‑based).
- AI course recommendations ("take before/after").

### Out (do not port)
- CentOS personal‑OS modules; the env‑var single‑admin model; CentOS‑specific "Learn the App / app‑tutorial" course flags; the shared‑DB `profiles`/`auth.users` coupling; CentOS marketing nav/footer/branding.

---

## 5. Multi‑tenancy model (the spine — full detail in `MULTITENANCY_AND_BRANDING.md`)

- **Tenant = brand.** A `tenants` registry row (slug, name, primary domain, theme, legal, flags). First row: `better-vice-club`.
- **Resolution:** request host → tenant (a `tenant_domains` table, or env per deployment). Every request carries a resolved `tenant_id`.
- **Scoping:** a `tenant_id` column on every top‑level content table (`courses`, `learning_paths`, instructor records, categories, leads, the map dataset). Child rows inherit via their parent.
- **Isolation guarantees:**
  - Catalog/discovery queries **always** filter `tenant_id = current`.
  - By‑id / by‑slug detail must **404** when the row's tenant ≠ current (except for owner/platform‑owner tooling).
  - CYOA cross‑course, semantic embeddings search, AI recommendations, teacher directories, series grouping, **sitemap/OG/JSON‑LD** are all tenant‑scoped.
  - Auth cookies are domain‑scoped; sessions never bleed across brand domains.
- **Per‑tenant:** branding (name/logo/wordmark/theme/favicon/OG/manifest), legal (Terms/Privacy/Safety), age‑gate flag, Stripe descriptor + (optionally) account, Resend sender, map dataset, feature toggles.
- **Deployment:** one codebase. Either one app serving many domains (host→tenant at runtime) **or** per‑tenant deployments (build‑time tenant). v1 recommendation: **runtime host→tenant** so adding a brand is a DB row + a domain, not a deploy. (The earlier white‑label analysis favored build‑time isolation for a *single* extra brand; for a true multi‑tenant registry, runtime resolution is the right call. Keep branding server‑resolved and never trust the client.)

---

## 6. Success metrics

- **Parity:** every `[v1]` feature in `FEATURE_INVENTORY.md` works end‑to‑end for the BVC tenant.
- **Isolation (hard gate):** automated tests prove no cross‑tenant leak across catalog, detail‑by‑id, slug resolution, CYOA, AI recs, search, sitemap, OG. A second test tenant with its own courses is invisible from the BVC domain and vice‑versa.
- **Migration:** BVC courses/modules/lessons/embeddings/sources/glossary/quizzes load into the new DB; existing completions/enrollments either remap to Better Auth identities or are archived per the migration doc.
- **Activation:** a learner can land on the BVC domain (age‑gate → map → episode → enroll free → complete → verified certificate) with zero CentOS references anywhere (chrome, emails, receipts, share cards).
- **Authoring:** an instructor can build a complete cited episode (audio + 4 subject lessons + glossary + sources + quiz + assignment) and publish it.

---

## 7. Milestones / phased build

Each phase is independently verifiable. Build in order; verify before advancing.

1. **Foundation** — Next.js + Tailwind scaffold; Neon + schema (DATA_MODEL); Better Auth magic‑link; `tenants` + host→tenant resolution; platform‑owner bootstrap.
2. **Tenancy & isolation** — tenant‑scoped query layer + the leak‑surface guards + per‑tenant branding/theming + age‑gate + legal pages. **Write the isolation tests now**; they gate every later phase.
3. **Catalog & course structure** — courses/modules/lessons CRUD, draft/publish, visibility, slugs, catalog list (search/sort/category/featured/series), instructor profiles.
4. **Learning experience** — lesson players for all formats (video/audio/text/slides/quiz/360/tour/map), progress, free‑preview/sequential gating, glossary, sources/claims, documents.
5. **Enrollment & billing** — free + paid (Stripe), Connect payouts, promo codes, prerequisites + overrides, completion + certificates + public verification, per‑tenant Stripe branding.
6. **CYOA + AI + assessments** — embeddings generation, crossroads (linear/semantic/random/cross‑course), quizzes (auto‑score/attempts/explanations), assignments + submissions + feedback.
7. **Signature Commodity Map** — data‑driven, per‑tenant map dataset; Episode Origins + Growing Belts; pins → real episode routes; filters; (improvements: audio hover preview, map‑as‑CYOA entry).
8. **Social, paths, lead funnel, media, admin** — reviews/likes/saves/discussions/DMs; learning paths; lead capture; Cloudinary library + document proxy; per‑tenant admin dashboards.
9. **Migration & cutover** — run the extraction (MIGRATION_AND_EXTRACTION), point the BVC domain, smoke‑test the full flow, retire BVC from CentOS (link out).

---

## 8. Key risks

- **Identity remap (highest):** CentOS keys everything to Supabase `auth.users` UUIDs; Better Auth issues new IDs. Existing enrollments/progress/completions must be remapped by email or archived. Decide early (see migration doc).
- **Isolation correctness:** a single missing tenant filter leaks a brand's catalog. Mitigation: a mandatory tenant‑scoped data‑access layer + isolation test suite written in Phase 2.
- **Commodity Map fidelity:** today it's hardcoded (`lib/bvc/commodities.ts`) + D3/TopoJSON with two projections. Making it data‑driven + per‑tenant without losing the visual quality is non‑trivial; treat as its own phase.
- **Citation/content rigor:** BVC's value is trust. The sources/claims/verification system and the "no AI tells / no fabricated characters" rules must be preserved, not simplified away.
- **Scope creep:** the Academy is large. Hold the `[v1]` line; push `[later]` items out.

---

## 9. Decision log (resolved with the owner)

| # | Question | Decision |
|---|----------|----------|
| D1 | White‑label inside CentOS vs. new app? | **New dedicated LMS app** (own repo + DB). Ecosystem‑compliant. |
| D2 | Fate of CentOS Academy? | **New LMS owns teaching.** CentOS keeps in‑app tutorials / links out; real courses migrate. |
| D3 | Single‑brand or multi‑tenant? | **Multi‑tenant from day one.** Brand registry; strict isolation. |
| D4 | Stack? | **Neon + Better Auth (magic‑link) + own Stripe/Resend**, keep Next.js + Tailwind + Gemini. |
| D5 | Course sharing across brands? | **Strict separation** — each course belongs to exactly one tenant. |
| D6 | Commodity Map? | **Keep & improve** — make it data‑driven + per‑tenant; it's the signature surface. |

### Open questions (decide during build)
- **OQ1.** Migrate historical learner accounts (remap by email) or start clean and archive old data read‑only? (Affects Phase 9.)
- **OQ2.** One Stripe account with per‑tenant descriptors, or a separate Stripe account per tenant? (Vice content may warrant separation; start single‑account, design for split.)
- **OQ3.** Runtime host→tenant (one deployment, many domains) vs. per‑tenant deployment. (PRD recommends runtime; confirm with ops preferences.)
- **OQ4.** Keep `gemini-embedding-001 @ 768d` (current) or adopt the latest embedding model + re‑embed? (Keep dim consistent with the pgvector index.)
- **OQ5.** Does BVC need instructor self‑signup at launch, or is it single‑author (operator) for v1? (PRD assumes operator‑curated for v1.)
