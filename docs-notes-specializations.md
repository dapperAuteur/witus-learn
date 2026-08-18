# Docs notes: specialization credentials (feat/specialization-credentials)

Per the branch instructions, README.md and src/lib/roadmap.ts were NOT touched (a parallel
branch may own them). Apply these sentences when merging, then delete this file.

## No migration needed

Everything is computed at read time from the existing `course_completions` rows. No schema
change, no `pnpm db:generate`, nothing to run against prod.

## src/lib/roadmap.ts

Flip the Platform backlog item (currently line ~549) from ⚪ to ✅ and reword along these lines:

> - ✅ **Gated specialization credentials** (`feat/specialization-credentials`): a *real* credential
>   earned by finishing **shared core + one medium course + one subject course**, surfaced on the
>   learner dashboard (earned + in-progress with the remaining courses) and, earned-only, on the
>   /family child report. Definitions are committed typed course-slug triples in
>   `src/lib/specializations.ts` (launch triples use the shipped catalog: `how-to-research` as the
>   trust core + the STORY True track as the medium + a matching subject course, since plan 12's own
>   Layer 0 / medium-ladder courses aren't built yet); award/progress is **computed at read time
>   from `course_completions`** (no new table, **no migration**), tenant-scoped in
>   `getSpecializations()` (src/db/queries/dashboard.ts) and pinned by `tests/specializations.test.ts`
>   (a triple with any leg unpublished in the tenant does not exist there; foreign-tenant
>   completions never count). Each earned leg links to its existing `/verify/[token]` course
>   credential; the specialization mints no token of its own. UI copy states it is an internal
>   platform record, not an external certification. Plan: `plans/future/12-documentarian-program.md`.

## README.md

In the feature list, extend the credentials/certificates bullet (or add beside it):

> **Specialization credentials**: named three-course tracks (shared research core + craft +
> subject, per the Documentarian program's architecture) earned automatically when all three
> courses are complete. Computed from course completions at read time, tenant-scoped, shown on
> the learner dashboard (with progress) and the Family view (earned only). An internal platform
> record, deliberately never presented as an external certification.

## Docs actually updated in this branch

- `src/lib/help-articles.ts`: the "family" help article now describes earned specializations on
  the Family view (and gained "specialization"/"credential" search keywords).
- This file (README/roadmap sentences deferred, see above).
