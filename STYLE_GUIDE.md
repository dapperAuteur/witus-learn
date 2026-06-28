# Learn.WitUS Style Guide

The contract every commit to this repo agrees to. If a change can't satisfy these, it isn't ready.
Adapted from the WitUS ecosystem guides (`shop-witus`, `wanderlearn`). Re-read before writing code.

Learn.WitUS is a **standalone, multi-tenant, strictly-isolated LMS**. Adding a brand must be a DB
row + DNS change, never a code change. Every design choice is measured against tenant isolation and
the cited, audio-first learning experience.

---

## 0. Git workflow (the most-broken rule — read first)

### Branch per logical change
- One concern per branch. Branch from `main`, push to `origin`, **never merge yourself** — BAM
  merges via the GitHub UI.
- Branch name = `type/short-slug` matching the Conventional prefix: `feat/commodity-map`,
  `fix/cyoa-leak`, `chore/scaffold`, `docs/api-surface`.
- Activate the guard once per clone: `git config core.hooksPath .githooks`.

### Conventional Commits
```
type(scope): summary in present tense, under 70 chars

Body explains the why. Constraints, trade-offs, follow-ups. Wrap ~72 chars.
```
Allowed `type`: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `perf`, `a11y`, `i18n`.

### End-of-branch contract
`branch → commit → push → stop`. Re-check `git branch --show-current` before **every** commit —
mid-session fast-forwards mean local `main` may have moved. No `--force` to shared branches, no
`--no-verify` except a genuine one-off.

### Database migration before merge
Any Drizzle migration must file a `plans/user-tasks/NN-run-migration-<slug>.md` reminder to run
`pnpm db:migrate:prod`. The feature branch can't merge until that user-task is captured.

---

## 1. Tenant isolation (launch gate — non-negotiable)

Every customer-facing surface must pass before it can merge:

- **No unscoped content queries.** All content reads/writes go through `src/db/scoped.ts`
  (`getScopedDb()` / `ScopedDb`). A raw `db.select()` over a tenant-owned table in a route handler
  is a bug.
- **By-id / by-slug 404s across tenants.** Use `ScopedDb.ownOrNotFound(row)`; never redirect.
- **AI/CYOA/SEO are scoped.** Cross-course CYOA passes `tenant_filter`; AI recommendation candidate
  lists are tenant-filtered before any title reaches Gemini; sitemap/OG/JSON-LD use the resolved
  tenant's name + domain, never a hardcoded brand.
- **The isolation test suite must stay green** (`tests/isolation/*`). It gates every phase.

---

## 2. Accessibility & mobile-first (WCAG 2.1 AA)

- Design at **375×667** first; scale up with Tailwind `sm:`/`lg:`. Touch targets ≥ 44×44 px.
- Keyboard-navigable everywhere; visible focus (`focus-visible:outline-2 focus-visible:outline-offset-2`).
- Contrast ≥ 4.5:1 text / ≥ 3:1 large text + UI, in light AND dark.
- Semantic HTML; inputs have associated `<label>`; live regions for status/errors.
- Media: audio players expose chapters + transcript (the BVC curriculum is audio-first); meaningful
  `alt`; motion respects `prefers-reduced-motion`.

---

## 3. Content policy (BVC content rules are product features)

- Every factual claim ties to a verified source; APA 7 in-line + `## Sources` bibliography.
- No fabricated characters — real, cited figures or second-person address.
- No "AI tells": no em/en dashes (use commas/periods/parentheses), no ornate filler.
- Age-gate + per-tenant legal pages where `tenants.requires_age_gate` is set.

---

## 4. Code conventions

- Mirror `shop-witus`: lazy Proxy DB client, zod-validated `env.ts`, `@/*` → `src/*`, schema split
  under `src/db/schema/`, scripts use relative imports + their own pool.
- TypeScript strict; no `any` without a comment justifying it. Zod-validate external input.
- `pnpm typecheck && pnpm lint && pnpm test` green before push.
