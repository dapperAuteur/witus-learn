## ⚠️ Ecosystem repo identity (don't confuse these)

This repo — **witus-learn** — is **Learn.WitUS.Online** (learn.witus.online), a standalone,
multi-tenant LMS. Its launch tenant is **Better Vice Club** (BVC). Don't confuse it with the
other WitUS apps — in particular it is **not** the CentenarianOS "Academy" module it was extracted
from, and not `shop-witus` (the ecommerce-catalog app whose stack conventions it mirrors). Full
ecosystem identity + product index: `gemini/witus/CLAUDE.md`.

The site **brandanthonymcdonald.com** (BAM's personal portfolio) lives in `claude/bam-landing-page/`.

> **After reading this file, read [STYLE_GUIDE.md](STYLE_GUIDE.md) and
> [docs/BUILD_PLAN.md](docs/BUILD_PLAN.md) before making any changes.** The complete product
> spec is in [docs/spec/dedicated-lms/](docs/spec/dedicated-lms/).

## The one job

Host cited, media-rich courses under multiple independent brands, each on its own domain, each
**strictly isolated** so a learner never perceives the others. If a feature belongs to another
platform's job, it is not built here. The signature surface is the BVC **Commodity Map** — preserve
and improve it; never reduce it to a generic catalog.

## Multi-tenancy is the load-bearing invariant

- Tenants resolve at runtime from the request **host** (`tenant_domains` → `tenants`). One
  deployment, many domains. Branding is server-resolved; **never trust a client-supplied tenant**.
- Every content query goes through the tenant-scoped data-access layer (`src/db/scoped.ts`).
  **No route handler may run an unscoped catalog query.** List queries filter `tenant_id`;
  by-id / by-slug reads **404 across tenants** (never redirect — a redirect leaks existence).
- CYOA `match_lessons_global`, AI recommendation candidate lists, search, series, categories,
  instructor directories, sitemap, and OG/JSON-LD are **all** tenant-scoped. The cross-course CYOA
  `tenant_filter` is the #1 leak vector — it must always be passed.
- The **isolation test suite** (Phase 2) gates every later phase. Any cross-tenant leak fails the build.

## Operator-task rule — capture user actions in `./plans/user-tasks/`

When work needs BAM to do something outside the editor (account signup, API key, DNS change, vendor
dashboard, env-var rotation, secret generation, PR review/merge, running a prod migration, etc.),
create a `./plans/user-tasks/NN-slug.md` file. **No exceptions for "small" steps.** Any Drizzle
migration must file a `./plans/user-tasks/NN-run-migration-<slug>.md` reminder to run
`pnpm db:migrate:prod` — without it the next prod deploy 500s on the missing column.

## Branch hygiene — BAM merges, between sessions by default

**Half 1.** End-of-branch contract: branch → commit → push → stop. Claude does not run
`git checkout main && git merge`. Never `--force` to shared branches. After push, hand back the
branch name + summary and stop. Branch name = `type/short-slug` (`feat/`, `fix/`, `chore/`, `docs/`).

**Half 2.** BAM merges committed-and-pushed branches via the GitHub UI before the next session,
unless told otherwise. **Mid-session, after a push, BAM may merge in a separate window and the local
checkout silently fast-forwards to `main`.** Re-check `git branch --show-current` before EVERY
commit, not just at branch creation, or you risk landing follow-up commits directly on `main`.

**Half 3.** Keep branches small (one concern per branch). When a session produces multiple branches,
consolidate them into one `bundle/<slug>-YYYY-MM-DD` branch before handoff: merge in lowest-conflict
order with `git merge --no-ff` (no squash), resolve conflicts, run a final `tsc + lint + build`,
push, and file ONE `./plans/user-tasks/NN-merge-bundle-<slug>.md` for BAM. BAM does one merge, not N.

A checked-in `.githooks/pre-commit` guard refuses commits on `main`/`master`. Activate once per
clone: `git config core.hooksPath .githooks`. Full rule: `gemini/witus/CLAUDE.md` §"Branch-hygiene rule".

## Plans convention

All implementation plans live in `./plans/` as `NN-description.md` (two-digit prefix, kebab-case,
next number, don't skip). Sub-queues: `./plans/user-tasks/`, `./plans/bugs/`, `./plans/future/`.
`plans/` is gitignored — local working notes. Durable, committed planning lives in `docs/`
(e.g. `docs/BUILD_PLAN.md`).

## Citation rule

BVC curriculum is cited, audio-first, and fact-checked: every claim ties to a verified source
(`course_sources` / `course_claims`), APA 7 in-line + a `## Sources` bibliography, no fabricated
characters, no "AI tells". These content rules are a **product feature** (the sources/claims/verify
UI is a visible trust signal), not just a style guide. Code docs and `plans/*` are out of scope.
Full rule: `gemini/witus/CLAUDE.md` §"Citation rule".

## Stack & conventions (mirror `shop-witus`)

Next.js 16 App Router (`--webpack`) · TS · Tailwind v4 · `@neondatabase/serverless` + Drizzle ORM +
drizzle-kit · Better Auth 1.6.2 (magic-link) · Zod 4 · Vitest · `tsx` scripts · pnpm. Plus Stripe,
Resend, Gemini (pgvector 768d), Cloudinary. `@/*` → `src/*`. Lazy Proxy-wrapped DB client; env
validated in `src/lib/env.ts`; schema split under `src/db/schema/`, Drizzle-generated migrations +
hand-written SQL for the Postgres-specific bits (extensions, ivfflat, triggers).
