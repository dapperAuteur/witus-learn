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
pnpm seed:faa        # FAA Part 107 → Trade School
pnpm seed:bvc:real   # real 21-episode BVC content → Better Vice Club
pnpm seed:languages  # Spanish/French/Portuguese/Italian → Learn.WitUS
pnpm seed:health     # health/fitness courses (NASM CPT/CES/CNC, Read Your Body's Data,
                     #   ECS Foundations/Fitness) → Learn.WitUS (see scripts/seed-health.ts TARGET_SLUG)
pnpm seed:speedway   # Speedway docuseries (Indy 500) → ElementaryMBA
```

`*.localhost` subdomains resolve to 127.0.0.1 in modern browsers; no `/etc/hosts` edit needed.

```bash
pnpm typecheck   # next typegen && tsc --noEmit
pnpm lint
pnpm test        # Vitest — unit + the isolation suite
```

## Conventions

This repo follows the WitUS ecosystem rules. Read [CLAUDE.md](CLAUDE.md) and
[STYLE_GUIDE.md](STYLE_GUIDE.md) before contributing — every change starts on a new
`type/short-slug` branch off `main`, and **BAM merges** (never merge to `main` yourself).
