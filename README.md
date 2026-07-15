# Learn.WitUS.Online

A standalone, **multi-tenant** Learning Management System for the WitUS ecosystem — cited,
media-rich courses hosted under multiple independent brands, each on its own domain, each
**strictly isolated** so a learner never perceives the others.

The launch tenant is **Better Vice Club (BVC)**: a cited, audio-first vice/drug-education
curriculum (21 commodity "episodes" across 3 seasons, coffee → khat) whose signature discovery
surface is the **Commodity Map** — an interactive world map, not a generic catalog.

## Status

Phase 1 (Foundation) in progress. See [docs/BUILD_PLAN.md](docs/BUILD_PLAN.md) for the full
phased plan and [docs/spec/dedicated-lms/](docs/spec/dedicated-lms/) for the complete product
specification (PRD, data model, API surface, content/pedagogy, auth/billing, multitenancy,
migration).

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind v4 · Neon Postgres (+ pgvector) · Drizzle ORM ·
Better Auth (magic-link) · Stripe · Mailgun · Gemini (embeddings + recommendations) · Cloudinary.

## Multi-tenancy (the hard requirement)

- Tenants are resolved at runtime from the request **host** (`tenant_domains` → `tenants`); one
  deployment serves many domains. Adding a brand is a DB row + DNS, not a redeploy.
- Every content query flows through a mandatory **tenant-scoped data-access layer**
  ([src/db/scoped.ts](src/db/scoped.ts)); by-id / by-slug reads **404 across tenants** (never
  redirect). CYOA, embeddings, AI recommendations, search, sitemap, and OG/JSON-LD are all
  tenant-scoped. An **isolation test suite** (Phase 2) gates every later phase.
- Branding, legal pages, age-gate, Stripe descriptor, and email sender are all driven by the
  `tenants` row — never hardcoded, never client-supplied.

## Public read API (`/api/v1`)

A read-only, per-tenant, **API-key**-scoped surface so an external app's backend (starting with
WanderLearn) can render real Learn.WitUS lesson content — `GET /api/v1/courses` (paginated,
`?limit=&offset=`), `GET /api/v1/courses/[id]`, and `GET /api/v1/courses/[id]/lessons/[lessonId]`
(full lesson body/media). The tenant comes **only** from `Authorization: Bearer <key>` — never the
host, never client input — and every response is **published + `visibility:"public"` only**. Mint
keys at `/admin/api-keys` (owner/brand-admin). Every response includes a top-level `disclaimer`
field the consumer must display; see [src/lib/disclaimer.ts](src/lib/disclaimer.ts) and the
consumer's guide, `plans/wanderlearn-embed-integration.md`. A chromeless
`/embed/course/[id]` iframe view is also available for embedding without calling the API directly.

## State-standards finder (`/standards`)

A teacher, homeschooler, or administrator picks their **state** and sees which courses meet which
of that state's published standards — exact code, the standard's **verbatim text**, the lessons
that cover it, a link to the publisher's document, the date it was retrieved, and an honest
`full` | `partial` flag (partials must say what's missing; a test enforces it). Filterable by
subject and course, printable, and copyable as plain text for a state filing. States without a
verified mapping render as "not mapped yet" (Arizona and Arkansas are next), never as errors, and
each mapped state publishes its **"What we don't claim"** rejections alongside the claims.

The data model is a concept hub built to reach all 51 jurisdictions without repeating work:
[src/lib/standards/claims.ts](src/lib/standards/claims.ts) analyzes the catalog **once** into
framework-agnostic course claims; each state file under
[src/lib/standards/data/](src/lib/standards/data/) maps its own codes onto those claims;
multi-state frameworks (NGSS, Common Core) are mapped once in
[src/lib/standards/shared/](src/lib/standards/shared/) and *adopted* per state. Adding a state =
add `data/<state>.ts` + `pnpm gen:standards` (regenerates the committed index) — no other code
changes. Tenant-scoped end to end: standards are keyed by course slug and resolved against the
requesting tenant's own published catalog, so a brand can never surface a standard its courses
don't back.

## Self-serve custom domains

At `/admin/domains`, a school's **brand_admin** maps a domain to their tenant entirely self-serve —
no BAM in the loop. A `<slug>.learn.witus.online` subdomain works instantly (covered by a wildcard
Vercel domain BAM sets up once). A **custom** domain (e.g. `theirschool.com`) is auto-registered
with the Vercel project via the Vercel Domains API
([src/lib/vercel-domains.ts](src/lib/vercel-domains.ts)); the admin sees the DNS records to set at
their own registrar and a **"Check verification"** button that polls status. Optional env vars
`VERCEL_API_TOKEN` / `VERCEL_PROJECT_ID` / `VERCEL_TEAM_ID` gate the Vercel-side automation — without
them the domain manager still maps the host and shows generic DNS records, it just can't register
the domain with Vercel for you. A per-tenant cap (5 domains) keeps this abuse-resistant; Vercel never
serves an unverified domain, so a school can't hijack a domain it doesn't control. See
`plans/user-tasks/64-domain-self-serve-setup.md`.

## Demo account

"Try the demo" on the **Acme** tenant's login page (`acme.learning.witus.online`) signs a visitor
into a **shared demo account** — a `brand_admin` on Acme only, so they can try teacher/admin
surfaces (authoring, `/teach`, `/live`, `/cohorts`) without ever becoming a platform owner or a
member of any other brand. A nightly Vercel cron (`/api/cron/demo-reset`, midnight UTC) wipes the
demo user's Acme data and reseeds a small baseline so every visitor gets a fresh sandbox. Fully
optional: three env vars (`CRON_SECRET`, `DEMO_VISITOR_PASSWORD`, `DEMO_VISITOR_USER_EMAIL`) gate
it — the app boots fine without them. See [src/db/queries/demo.ts](src/db/queries/demo.ts) and
`plans/user-tasks/62-demo-account-setup.md`.

## Develop

```bash
pnpm install
cp .env.example .env.local        # fill in Neon + Better Auth (see plans/user-tasks)
pnpm db:generate && pnpm db:migrate
pnpm seed:tenants                 # creates BVC + a dummy "Acme Academy" test tenant
pnpm dev                          # http://bvc.localhost:3040  /  http://acme.localhost:3040
```

Optional content seeds (each needs `seed:tenants` first; re-seedable — upsert by
`(courseId, slug)`):

```bash
pnpm seed:faa        # FAA Part 107 → Learn.WitUS (14 collapsible modules, a quiz per module,
                     #   click-to-reveal quick checks). `pnpm seed:faa --dry-run` prints the
                     #   module → lesson/quiz breakdown WITHOUT touching the database.
pnpm seed:bvc:real   # real 21-episode BVC content → Better Vice Club
pnpm seed:languages  # Spanish/French/Portuguese/Italian → Learn.WitUS
pnpm seed:health     # health/fitness courses (NASM CPT/CES/CNC, Read Your Body's Data,
                     #   ECS Foundations/Fitness) → Learn.WitUS (see scripts/seed-health.ts TARGET_SLUG)
pnpm seed:speedway   # ElementaryMBA: Speedway docuseries (Indy 500), Intro to Robotics & STEAM,
                     #   Young Makers: AI for Kids (F3), and AI for Entrepreneurs (F4)
pnpm seed:langchain  # 3 LangGraph/LangChain courses → Learn.WitUS (AI & Technology);
                     #   auto-discovers scripts/data/langchain/<repo>/ (course.json + lessons)
pnpm seed:demo       # demo account (brand_admin on Acme) + baseline enrollments — needs
                     #   DEMO_VISITOR_USER_EMAIL set; run once, and after every reseed of Acme content
```

`*.localhost` subdomains resolve to 127.0.0.1 in modern browsers; no `/etc/hosts` edit needed.

**Operating the app** (migrate + seed order, which seed owns which course, keeping content current):
see [OPERATING.md](OPERATING.md) — mirrored in-app at `/help` → "Keeping courses & content current".

```bash
pnpm typecheck   # next typegen && tsc --noEmit
pnpm lint
pnpm test        # Vitest — unit + the isolation suite
```

## Future classes & features (`/admin/future`)

Owner-only review surface for everything proposed but not yet built — the *She Did the Work* course
proposals plus a research seed per subject, the extra civics courses, and the Travel & Living Abroad
track. Leave a note on any item and it lands in `future_work_notes`; read the notes back from a
terminal, no copy-paste:

```bash
pnpm future:list                  # open notes, all schools (--tenant <slug> · --status open|done|all
                                  #   · --item <key> · --limit N)
pnpm gen:future-work              # regenerate src/lib/future-work-content/* from plans/future-courses/
```

The proposals are **committed** (`src/lib/future-work-content/*`, generated from the gitignored
`plans/future-courses/` notes by `gen:future-work`) — the app never reads `plans/` at runtime, so the
page renders the same in production. Add a proposal by dropping markdown in `plans/future-courses/`,
re-running the generator, and registering it in `src/lib/future-work.ts`.

## Conventions

This repo follows the WitUS ecosystem rules. Read [CLAUDE.md](CLAUDE.md) and
[STYLE_GUIDE.md](STYLE_GUIDE.md) before contributing — every change starts on a new
`type/short-slug` branch off `main`, and **BAM merges** (never merge to `main` yourself).

**Keep the docs current — in the same change, not "later."** When a set of tasks ships
user- or operator-facing behavior, update the docs that describe it before wrapping up:

- [README.md](README.md) — feature list, setup, and the seed/migration commands.
- [OPERATING.md](OPERATING.md) — the operator runbook (migrate/seed order, how-to-run).
- [src/lib/help-articles.ts](src/lib/help-articles.ts) — the in-app Help Center (the
  "how to use the app" articles learners and operators read in-product).
- [src/lib/roadmap.ts](src/lib/roadmap.ts) — move the entry to Shipped so the in-app
  roadmap reflects reality.

A feature isn't "done" until its README mention, usage/help note, and roadmap entry match
what shipped. (A local `Stop` hook in `.claude/settings.json` nudges when `src/` code changed
but these files didn't — a reminder, not a gate.)
