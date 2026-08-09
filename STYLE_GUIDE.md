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
- **Pages redirect signed-out visitors, APIs return a status.** In a page component use
  `requireUserPage()` (307 to `/login?next=<here>`); in a route handler use `requireUser()` (403 via
  `forbidden()`). Getting this backwards is a real bug in both directions: a page that 403s
  dead-ends a learner who followed a bookmark, and an API that redirects hands the admin UI's
  `fetch` an HTML page to parse as JSON. "Not signed in" is a redirect; "signed in but wrong role"
  stays a 403 and renders `src/app/forbidden.tsx`. Any `?next=` value must pass `safeNextPath()`
  before use, or the sign-in page becomes an open redirect. Pinned by
  `tests/signed-out-redirect.test.ts`.

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
- **A new course joins the citation list before it ships.** Add its slug to `STAGED_COURSES` in
  [src/lib/citations.ts](src/lib/citations.ts), run `pnpm gen:citations`, and commit the regenerated
  registry. `pnpm check:citations` (part of `pnpm lint`) fails a staged course that generated zero
  citations, which catches both "forgot to regenerate" and "the Sources block is in a shape the
  extractor does not read". The citations then appear at `/admin/citations` for BAM and at
  `/audit/citations` for invited reviewers, who verify that each source exists, still resolves, and
  actually says what the lesson claims.
- **When you write a hedge you cannot resolve, file a source check.** A sentence like "verify the
  current text before relying on this" is honest and completely unactionable on its own: nobody has a
  list and nothing records whether it was ever done. Add an entry to
  [src/lib/research-checks.ts](src/lib/research-checks.ts) so it lands at `/admin/research` with the
  question, what the course currently claims, and exactly what is needed to close it. Delete the entry
  once the answer ships in the lesson.
- **A course in a series carries a course code, and the code must not lie.** `seriesOrder` sorts;
  the CODE is what a learner reads on a card in search results, on an instructor profile, anywhere
  outside the series page. Set `seriesCode` (the prefix, e.g. `STORY`) and `seriesPosition` in the
  `seedAuthoredCourse` call. The grammar is in [src/lib/series-code.ts](src/lib/series-code.ts):
  `00` = start here, `01`–`98` = a step on one linear path, `T1`/`P2` = step 1 of track T / step 2
  of track P, `99` = capstone taken last. Give `seriesTrack` a human name whenever the position
  carries a letter, or the badge says "T1" with nothing on the page explaining what T is.
  - **A letter is a promise that the tracks are independent.** Any track may be taken directly after
    the `00` course, in any order, without the others. If a track secretly depends on another, the
    fix is the curriculum, not the label: renumber it into the track it actually follows.
  - **Never prefix the code onto `course.title`.** The title is also the OG card, the JSON-LD name,
    the citation-list heading and what search matches against; `"STORY-T3 · Documentary"` breaks a
    search for "Documentary" in all of them. The badge is rendered from the columns.
  - `pnpm check:series-codes` (part of `pnpm lint`) fails a duplicate position, two courses claiming
    the start or the capstone, a lettered position with no track name, and a prefix shared by two
    series. It is **not** a ratchet and has no exception map: codes are new, so every code that
    exists was written under this rule and there is nothing to grandfather.
- No fabricated characters: real, cited figures or second-person address.
- No "AI tells": no em/en dashes (use commas/periods/parentheses/colons), no ornate filler.
  Four things keep their dashes, because changing them would be an error, not a style fix:
  verbatim quotations, reference entries whose cited title contains a dash, verbatim
  state-standard text in `src/lib/standards/data/`, and code (comments, regex literals).
- Age-gate + per-tenant legal pages where `tenants.requires_age_gate` is set.
- **Quiz banks must not leak the answer by position.** Any bank of 8+ questions sets
  `shuffleOptions: true`, which makes the stored `correctIndex` unreachable as a fixed screen slot
  (scoring is by identity, so nothing about the answers changes). Without it, a bank that parks
  most correct answers at one index lets a learner score 100% by clicking one letter, and every
  score and dashboard average from that course means nothing. `pnpm check:quiz-balance` (part of
  `pnpm lint`) fails when over 60% of a bank's answers share an index and it does not shuffle.
  Fix it by adding the flag, never by reordering options or editing prompts:
  `quiz_attempts.questionKey` is derived from the prompt text, so an edited prompt silently resets
  every learner's history for that question. On a bank of 15 or more, add `questionsPerAttempt: 8`
  so a retake draws a fresh subset (never above the bank size, never below 5).
- **The assessment widget must fit its content.** `pnpm check:assessment-fit` (also part of
  `pnpm lint`, a ratchet) fails on four mechanically-decidable mismatches: an explanation or option
  that names a screen POSITION ("the first option is wrong", "all of the above"), which the default
  shuffle makes false on screen; a typed `exercise` item whose every accepted answer is a bare
  number, which is closed-set recall a multiple-choice question tests better; and a
  `**Check yourself**` question left as prose instead of `:::reveal <q> ||| <a>`, which grades
  nothing. Fix by editing explanation/option text or converting the widget, never by reordering
  options or editing a prompt. When producing a number by hand genuinely IS the skill, set
  `computedAnswer: true` on that item. Whether a widget *genuinely* fits is a judgment, so it lives
  on the advisory "Audit assessment fit" instructor button, never in the build.
- **An image in a lesson uses `:::figure`, never markdown's `![]()`.** One flush-left line, four
  fields, the same `|||` separator as `:::reveal`:

  ```
  :::figure <url> ||| <alt> ||| <caption> ||| <credit>
  ```

  The reason is the fourth field. `![alt](url)` has nowhere to put a **credit**, and in this catalog
  an unattributed image is the visual equivalent of an uncited claim; for third-party media it is
  also how a takedown starts. So the credit is the same discipline as the `## Sources` block, and
  the directive makes it structurally impossible to omit.

  `alt` and `caption` are different things and `pnpm check:figures` (part of `pnpm lint`, a ratchet)
  fails if they are identical: **alt** describes the image for someone who cannot see it, **caption**
  says what to look at and why it is in this lesson. The guard also fails on a malformed or indented
  directive (which renders as literal text, so the failure is invisible in the app), on a placeholder
  or missing alt/caption/credit, and on any URL that is not `https://res.cloudinary.com` (hotlinking
  a museum server means the image can rotate or 404 unnoticed).

  **Get the image there first.** `scripts/upload-course-media.mjs` reads the licence from the source's
  own metadata, refuses anything it cannot classify as free-with-commercial-use, and copies the asset
  into Cloudinary. Then `pnpm register:media <manifest>` puts it in the owner's review queue at
  `/admin/media`, where a human approves it before the course goes live. Never publish an image whose
  rights you have not established: dropping it and letting the lesson stand on its text is the correct
  trade, and every lesson should be written so that it can.

---

## 4. Code conventions

- Mirror `shop-witus`: lazy Proxy DB client, zod-validated `env.ts`, `@/*` → `src/*`, schema split
  under `src/db/schema/`, scripts use relative imports + their own pool.
- TypeScript strict; no `any` without a comment justifying it. Zod-validate external input.
- `pnpm typecheck && pnpm lint && pnpm test` green before push.
