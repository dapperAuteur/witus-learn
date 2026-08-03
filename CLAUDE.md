## ⚠️ Ecosystem repo identity (don't confuse these)

This repo — **witus-learn** — is **Learn.WitUS.Online** (learn.witus.online), a standalone,
multi-tenant LMS. Its launch tenant is **Better Vice Club** (BVC). Don't confuse it with the
other WitUS apps — in particular it is **not** the CentenarianOS "Academy" module it was extracted
from, and not `shop-witus` (the ecommerce-catalog app whose stack conventions it mirrors). Full
ecosystem identity + product index: `gemini/witus/CLAUDE.md`.

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

## Migrations & prod deploys (repo-specific)

Any Drizzle migration must file a `./plans/user-tasks/NN-run-migration-<slug>.md` reminder to run
`pnpm db:migrate:prod` — without it the next prod deploy 500s on the missing column. At bundle
handoff, spell out the exact ordered list of new migrations + `pnpm db:migrate:prod` (plus any
`seed:*` re-runs) BAM must run after merging. (General operator-task, branch-hygiene, and plans
conventions are in the managed block below; durable committed planning lives in `docs/`, e.g.
`docs/BUILD_PLAN.md`.)

## Standards-coverage rule — a new course declares its standards or says why not

Educators shop on **standards coverage**, so it must not rot. `pnpm lint` runs
`scripts/check-standards-coverage.ts`, a **ratchet**: it compares every course registered in
`scripts/seed-courses.ts` against the alignments in `src/lib/standards/`, and **fails on any course
that has neither an alignment nor an entry in that script's `BACKLOG` map**. As of 2026-07-24 only
three genuinely-vocational courses remain excused (knot-tying, off-grid-survival, broadcasting); the
list shrinking is the progress bar.

So when you ship a course, do one of two things:
1. **Map it** — add or extend a claim in `src/lib/standards/claims.ts` and reference it from the
   jurisdiction files (or the shared frameworks in `src/lib/standards/shared/`), then delete its
   `BACKLOG` line, or
2. **Excuse it** — add a one-line reason to `BACKLOG` (practical/vocational courses with no academic
   standard to claim are legitimately permanent entries).

**Accuracy on change, not just on creation (the harder half).** The ratchet only proves a course is
aligned to *something*; it cannot tell whether the *specific* standards a course claims are still
true after its lessons change. So: **whenever you add a course OR materially change a course's
lessons** (add/cut/rewrite lessons, not a typo or a quiz-option-length fix), re-check what it now
claims and make it accurate. Run **`pnpm standards:for <slug>`** — it prints every standard the
course claims, per state, from `src/lib/standards/`. Confirm every code shown is a standard the
course *as it stands today* genuinely teaches: not one a since-cut lesson used to carry, and never
one it does not teach. If a claim's evidence lesson was removed or rewritten, fix the claim (and any
jurisdiction/shared-framework mapping) so the page a teacher reads is true. A wrong standard shown to
an educator is worse than a missing one. The isolation suite guards the verbatim state text and that
every claim slug resolves to a registered course, but the *is-this-still-taught* judgment is yours.

Standards a course meets render **on the course page, under the description**, as a collapsed
`<details>` summarising the count and jurisdictions, linking to `/academic-standards?course=<slug>`
for detail. **An unmapped course renders nothing** rather than "0 standards", because zero reads as
"meets none" when it means "not analysed yet". Never widen a claim to make a standard look fuller,
and never assert a standard the lessons do not actually teach: `src/lib/standards/claims.ts` states
the rule and the isolation suite guards the verbatim state text.

## Quiz-integrity rule — a quiz must not be passable without reading it

Two guards in `pnpm lint` protect the same thing from two directions, and a quiz that fails either is
measuring test-taking rather than learning (which also corrupts every dashboard average built on it).
Two more, below, protect the self-check card and the choice of widget itself:

- `check-quiz-balance.ts` — the **position** tell. Fix by adding `shuffleOptions: true`. Cheap and
  content-preserving. **Shuffle is now the default** (`toSafeQuiz` in `src/lib/quiz.ts` serves
  `shuffleOptions ?? true`), so every attempt AND every retake re-orders a question's options and the
  correct answer never sits in the same slot twice — scoring is by original index, so no score or
  history changes. A bank opts out only with an explicit `shuffleOptions: false`, reserved for a
  question whose options must keep a fixed order; the catalog avoids positional options ("all of the
  above", "A and B"), so that is essentially theoretical. The static guard still wants the explicit
  flag on skewed banks as defense-in-depth.
- `check-longest-option.ts` — the **length** tell: the right answer collects the qualifier and the
  "because" clause while the distractors stay short, so a learner can click the longest option
  without reading. **`shuffleOptions` does NOT fix this** — length travels with the option text.

The length guard is a **ratchet** like the standards one: 138 pre-existing files sit in
`GRANDFATHERED` with their measured score and may not get *worse*; any file not on that list fails.
When you fix a file, delete its line. Never add a line to make new content pass.

**When fixing either, edit option TEXT in place.** Never reorder options or move `correctIndex`
(stored attempts keep the chosen index, so a reorder rewrites what past learners answered on the
results replay), and **never edit the prompt** — `questionKey` hashes the prompt alone, so a reword
resets per-question history for every learner who already answered. Give distractors real, checkable,
and definitively *wrong* specificity; padding them with filler just trades one tell for another.

**Self-checks (`:::reveal`) get their own guard.** `check-reveals.ts` (also in `pnpm lint`, a ratchet
like the two above) fails on a `:::reveal <question> ||| <answer>` card that is malformed, indented,
has a placeholder answer, or whose answer equals its question — each of which renders as dead prose
and silently never grades, so the failure is invisible in the app. Its *semantic* companion — does the
answer actually match the lesson it sits in? — is the advisory **"Audit reveals"** button on the
instructor tools (`/api/courses/[id]/audit-reveals`), deliberately NOT a build gate: an LLM verdict is
non-deterministic and must never be able to block a commit.

**And the widget itself must fit the content.** `check-assessment-fit.ts` (in `pnpm lint`, a ratchet;
rules as pure predicates in `src/lib/assessment-fit.ts`) is the fourth guard, aimed at the mismatch
learners kept reporting one course at a time: a typed fill-in on a civics date where multiple-choice
belongs, a typed open-answer drill on interpretive history, a check-yourself question left as prose.
It carries only rules that are runtime FACTS, never opinions:

- **`positional-explanation` / `positional-option`** — an explanation naming an option by position
  ("the first option is wrong") or an option reading "all of the above". Shuffle is the default, so
  both describe an order no learner ever saw. Fix by naming the option by its CONTENT, editing
  explanation or option text only.
- **`closed-set-fill-in`** — a typed `exercise` item whose every accepted answer is a bare number. An
  exercise is graded by string equality (case and accents forgiven, which buys "1851" nothing), so a
  year or a seat count is a closed-set fact multiple-choice tests better. Convert it to a quiz
  question, or, when producing the number by hand genuinely IS the skill, set `computedAnswer: true`
  on the item, the explicit opt-out equivalent of `shuffleOptions: false`.
- **`prose-self-check`** — a `**Check yourself**` question left as prose instead of
  `:::reveal <q> ||| <a>`: it grades nothing and records nothing. Fix with `pnpm reveal:convert`.

Its *semantic* companion — does this widget genuinely fit this content? — is the advisory **"Audit
assessment fit"** button (`/api/courses/[id]/audit-assessment-fit`), the sibling of "Audit reveals"
and, for the same reason, never a build gate. **Do not widen the deterministic half with judgment
calls.** Candidates were measured against the catalog and rejected on the evidence: long free-text
answers (4 in the whole catalog, all translation drills, so zero true positives), accept-list size
(the best-authored bank has four variants), proper-noun answers (capitalisation is not a signal), and
"are these options mutually exclusive" (pure judgment). A guard that cries wolf gets allowlisted into
uselessness, which is worse than no guard.

## Page-quality rule — every page is found, shared, mobile-first, and usable

A page that works but can't be found, or looks broken on a phone, or shares as a blank card, is a
page that isn't done. Every user-facing page (a `page.tsx`, especially a **marketing/landing page**)
must satisfy all of these **in the same branch that ships it**:

1. **Findable in the menu.** The page is reachable from the site chrome (the header nav, the mobile
   drawer, or the footer), not just by knowing the URL. This is the load-bearing one, and the one that
   rots silently: the per-audience landing pages sat published-but-unlinked until a visitor asked where
   they were. Add the nav/footer link when you add the page. **Gate recruiting-front-door pages**
   (anything that `notFound()`s unless `tenant.flags.recruiting`, e.g. `/for`, `/schools`, `/platform`)
   **on the same flag**, or the link is a dead 404 on every white-label school.
2. **SEO.** Export `metadata` (or `generateMetadata`) with a unique `title` and `description`. Dynamic
   and by-id pages resolve both from tenant-scoped data (never a client-supplied tenant, per the
   multi-tenancy invariant).
3. **Its own social card.** Set `openGraph.images` **and** `twitter.images` to
   `ogImageUrl({ title, subtitle })` (`src/lib/og.ts` → `/api/og`, which paints the page's title over
   the tenant's own map). A page that inherits the generic default card shares identically to every
   other page and says nothing about itself. Login-gated app pages are exempt (behind auth, not shared).
4. **Mobile-first.** Design at 360px first; base Tailwind classes target the phone and `sm:`/`md:`/`lg:`
   layer up. Tap targets are at least ~44px (`min-h-11`, `pointer-coarse:min-h-11`). Nothing forces
   horizontal scroll; wide content (tables, maps, code) scrolls inside its own `overflow-x-auto` box.
5. **Accessible.** One `<h1>`, ordered headings, semantic landmarks, `alt` on meaningful images,
   keyboard-operable controls, visible focus, labelled inputs. (The general a11y conventions live in
   `gemini/witus/docs/shared-ui-ux-dx.md`.)
6. **Marketing pages specifically** lead with a clear value proposition and a call to action, and carry
   **no fabricated stats, testimonials, efficacy claims, or prices** (the audience-landing content type
   states this and the isolation suite guards it).

**Enforced.** `pnpm lint` runs `scripts/check-page-reachability.ts`, a **ratchet** over every top-level
static `(tenant)` page: it fails on a **menu orphan** (a public page linked from no chrome) and on a
**shared-OG-card** public page (one riding the default card). Pre-existing exceptions sit in that
script's `ORPHAN_OK` / `SHARED_CARD_OK` maps with a one-line reason; a new page fails until it is
linked and given its own card, or added to a map with a reason. Delete an entry when you fix its page;
never add one to make a new page pass. Points 4 and 5 are review-enforced, not scripted.

## App-improvements review rule — check `./plans/app-improvements/` at both ends of a task

`./plans/app-improvements/` is BAM's live product backlog — he drops feature notes and bug reports
there as `*.md` (e.g. `course-experience.md`, `live.md`, `pricing.md`). Treat it as authoritative:
- **Before writing code**, read the directory so new/updated notes inform the work.
- **After finishing all changes** in a session, review it again and **ask BAM** whether he wants to
  (a) implement any outstanding notes now, or (b) have you review the ones he picks and propose
  **3 distinct implementation/resolution ideas** for each.
- **When a branch's work is complete**, move each fully-shipped note into
  `./plans/app-improvements/completed/` (create the subdir if needed) so the top level always lists
  only OUTSTANDING work. `plans/` is gitignored → this is a local `mv`, not a commit. Leave partial
  notes and reference docs (`00-report-and-plan.md`) at the top level.
A note isn't "done" until its behavior ships and the roadmap (`src/lib/roadmap.ts`) reflects it.

The BVC content-citation rule is a **product feature**, not just a style guide: every claim ties to a
verified source (`course_sources` / `course_claims`), APA 7 in-line + a `## Sources` bibliography, no
fabricated characters, no "AI tells" — the sources/claims/verify UI is a visible trust signal. (The
general citation, docs-sync, and authoritative-values rules are in the managed block below.)

## Stack & conventions (mirror `shop-witus`)

Next.js 16 App Router (`--webpack`) · TS · Tailwind v4 · `@neondatabase/serverless` + Drizzle ORM +
drizzle-kit · Better Auth 1.6.2 (magic-link) · Zod 4 · Vitest · `tsx` scripts · pnpm. Plus Stripe,
Mailgun, Gemini (pgvector 768d), Cloudinary. `@/*` → `src/*`. Lazy Proxy-wrapped DB client; env
validated in `src/lib/env.ts`; schema split under `src/db/schema/`, Drizzle-generated migrations +
hand-written SQL for the Postgres-specific bits (extensions, ivfflat, triggers).

---

<!-- BEGIN:witus-shared-rules v1 -->
<!-- MANAGED BLOCK — do not edit by hand. Source: gemini/witus/docs/shared-rules.md.
     Update the source, then run `node scripts/sync-claude-rules.mjs` in the witus repo. -->

## ⚠️ Ecosystem identity (shared note — don't confuse repos)

Full ecosystem identity + the canonical product index live in `gemini/witus/CLAUDE.md` and
`gemini/witus/lib/products.ts`. Each repo states *which* product it is in its own hand-owned line
above this managed block; don't infer another app's URLs, routes, IDs, env names, or DB schema —
confirm against that app's own code.

The site **brandanthonymcdonald.com** (BAM's personal portfolio) lives in `claude/bam-landing-page/`
— **NOT** `projects/bam-portfolio/` (the retired legacy static site). Target `bam-landing-page`.

## Operator-task rule — capture user actions in `./plans/user-tasks/`

When Claude proposes work that needs BAM to do something outside the editor (account signup, API
key, DNS change, vendor dashboard, env-var rotation, secret generation, PR review/merge, etc.),
Claude MUST create a `./plans/user-tasks/NN-slug.md` file in this repo. **No exceptions for "small"
steps.** Required sections: **Scope tag** · **What + why** (with explicit *what this blocks* detail
and any hard deadline) · **Steps** · **What Claude will use** · **How to mark done** · **Related**.
Keep `./plans/user-tasks/00-descriptions.md` updated with columns `# | Title | Scope | Blocks |
Status` — the `Blocks` column is the one BAM scans. Ecosystem-wide tasks (Keap, IRL events, retros,
cross-product decisions) live in the canonical witus queue at `gemini/witus/plans/user-tasks/`;
repo-local tasks live here. Read the witus queue at session start before dependent work. Full rule:
`gemini/witus/CLAUDE.md` §"Operator-task rule".

## Branch hygiene — BAM merges, between sessions by default

**Half 1.** Branch → commit → push → stop. Claude does not run `git checkout main && git merge`.
Never `--force` to shared branches. Before every commit run `git branch --show-current`; if it is
`main`/`master`, branch first (`feat/ fix/ chore/ docs/`). After push, hand back the branch name +
summary and stop.

**Half 2.** BAM merges pushed branches via the GitHub UI between sessions. Mid-session, after a
push, BAM may merge in a separate window and the local checkout silently fast-forwards to `main` —
so re-check `git branch --show-current` before **every** commit, not just at branch creation, or you
risk landing follow-up commits directly on `main`.

**Half 3.** Keep branches small (one concern each). When a session produces multiple branches,
consolidate them into one `bundle/<slug>-YYYY-MM-DD` via `git merge --no-ff` (preserves per-concern
history — no squash), resolve conflicts during bundling, run `tsc + lint + build` against the
bundle, push, and file ONE `./plans/user-tasks/NN-merge-bundle-<slug>.md`. BAM does one merge, not N.

**Commit often.** Commit at every working checkpoint — a passing build, a finished sub-step, a green
test — not just at the end. A usage-limit cutoff, a dropped connection, or a crashed session must
never lose more than the last few minutes of work. Small frequent commits on the feature branch keep
the branch un-merged (Half 1 still holds) and give BAM clean per-step history to drill into.

A checked-in `.githooks/pre-commit` guard refuses commits made directly on `main`/`master`. Activate
once per clone: `git config core.hooksPath .githooks`. Full rule: `gemini/witus/CLAUDE.md`
§"Branch-hygiene rule".

## Docs-sync rule — a change isn't done until its docs are current

When a change adds, alters, or removes a user-visible feature/route/scope, update the affected docs
**in the same branch**: README (feature list, env examples, scripts), in-app help/tutorial content,
`ROADMAP.md` **and** any public roadmap page, API/OpenAPI docs, and STYLE_GUIDE/CONTRIBUTING when a
convention changed. State which docs you touched in the handoff. Never leave an aspirational ✅ on a
roadmap — downgrade it with a one-line reason. If a doc update is genuinely out of scope, file it as
a `./plans/` task rather than skipping silently. A Stop hook in `.claude/settings.json` gates on
this: if the session diff changed feature/route files but touched no docs, it blocks once and asks
you to update-or-defer. Schema-only migrations, refactors, perf, and dev-tooling changes don't
trigger it.

## Plans convention

All implementation plans live in `./plans/` as `NN-description-of-plan.md` (two-digit prefix,
kebab-case, next available number, don't skip). Sub-queues: `./plans/user-tasks/NN-slug.md`
(operator tasks), `./plans/bugs/`, `./plans/future/`. (`plans/` is typically gitignored.)

## Citation rule

Anything publishable, teachable, or partner-facing (curriculum, teaching-oriented help articles,
white papers, grant/sponsor/partner writing) uses APA 7 in-line citations with a `## References`
section. Code docs, internal notes, and `plans/user-tasks/*` are out of scope. Full rule:
`gemini/witus/CLAUDE.md` §"Citation rule".

## Authoritative-values rule — never assert guessed external values

When a value is owned by an external system (DNS/registrar, a host like Vercel, a third-party API,
or another ecosystem app's URLs/routes/IDs/env/schema), read it from the authoritative source; don't
hardcode a guessed default and present it as correct. If you must ship a fallback, label it as a
fallback in both UI copy and a code comment. Verify by behavior (does the flow work?), not by
exact-match against a guess. When unsure, flag or ask — never assert. Full rule:
`gemini/witus/CLAUDE.md` §"Authoritative-values rule".

## Coding conventions

UI/UX/DX conventions (a11y, component patterns, TypeScript, microcopy, git-commit vocabulary, the
default Neon+Drizzle+pnpm+Vitest stack) are consolidated in `gemini/witus/docs/shared-ui-ux-dx.md`.
Read it before writing UI or API code. Two repos are grandfathered on Supabase+Jest and documented
there as exceptions.

<!-- END:witus-shared-rules v1 -->
