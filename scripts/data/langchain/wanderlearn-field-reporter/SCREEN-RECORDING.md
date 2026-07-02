# Screen-recording guide: Reflection Loops in LangGraph (Write, Critique, Revise)

Teacher aid for recording the course. It maps each lesson to the exact code to show
on screen. This is NOT seeded as a lesson; it lives beside the lesson files.

**Repo:** https://github.com/dapperAuteur/wanderlearn-field-reporter
**Deployed app:** https://wanderlearn.field.reporter.witus.online/

## Which version of the code to show

The repo carries **per-module git tags**, `course/module-0` through `course/module-6`,
and does **not** carry per-lesson tags. The source lesson docs mention tags like
`course/lesson-06`, but those were never pushed; only the seven module tags exist:

```bash
git clone https://github.com/dapperAuteur/wanderlearn-field-reporter
cd wanderlearn-field-reporter
git tag        # course/module-0 ... course/module-6 (no course/lesson-NN)
```

So every in-lesson file link points at the lesson's **module tag** (for example a
Module 3 lesson links `examples/support-reply-loop/tracing.ts` at
`/blob/course/module-3/…`). That tag is the state of the repo when that module's code
was finished, so the file exists and matches the lesson. When recording, check out the
module tag for the module you're filming:

```bash
git checkout course/module-3     # then film Module 3's lessons at this state
```

The example code accumulates across tags (each module adds one file to
`examples/support-reply-loop/`), so a later tag also contains the earlier files. If you
want a single frozen reference for the whole course, cut your own tag from
`course/module-6` and swap it into the file URLs in one pass.

The runnable artifact is TypeScript and every example runs **offline** (no API key, no
Docker): `npx tsx examples/support-reply-loop/run.ts` and `npm run test`. Module 0's
Python track is a translation table, not a second codebase, so there's no separate Python
project to film. Each module also ships word-for-word **video scripts** under
`docs/course/module-N-*/video/`; use them for shot-by-shot narration.

## Module 0 · Reflection-Loop Primitive and Setup (`course/module-0`)

| Lesson | Show on screen |
|---|---|
| 1 · Course overview | The `examples/support-reply-loop/` directory; narrate the write, critique, revise shape (no code walk yet) |
| 2 · Getting set up (TypeScript) | `package.json`, `.env.example`, then `npx tsx examples/support-reply-loop/run.ts` and `npm run test -- tests/course/module-0-loop.test.ts` green |
| 3 · Getting set up (Python) | The lesson's Python setup steps and the optional `langgraph dev` studio; no repo file (Python is the Rosetta track) |
| 4 · Translation table | `examples/support-reply-loop/graph.ts` beside the lesson's TypeScript-to-Python mapping table |
| 5 · Why one pass is plausible, not good | `run.ts` single-pass draft versus the looped draft; narrate the plausible-not-good gap |
| 6 · The minimal loop | `graph.ts` (`SupportReplyStateAnnotation`, `scoreReply`, `routeAfterCritique`, the `StateGraph` wiring), then `run.ts` converging and `tests/course/module-0-loop.test.ts` |

## Module 1 · Bounded Termination (`course/module-1`)

| Lesson | Show on screen |
|---|---|
| 7 · Guaranteed exit | `graph.ts` cyclic edge; narrate why an uncapped cycle never halts |
| 8 · Max-iteration counter | `examples/support-reply-loop/termination.ts` (the counter increment + router `>=` check), `tests/course/module-1-termination.test.ts` (ends at the cap) |
| 9 · Convergence detection | `termination.ts` `hasConverged`, the convergence test |
| 10 · Human escalation | `termination.ts` `flag_for_human` terminal + `resolved`/`escalated` outcomes |
| 11 · Composition in priority order | `termination.ts` `routeWithAllPatterns` (success, convergence, cap, revise cascade), the composition test |
| 12 · recursionLimit backstop | `termination.ts` `buildUncappedReplyLoop`; run it to throw `GraphRecursionError` |

## Module 2 · Critique Design (`course/module-2`)

| Lesson | Show on screen |
|---|---|
| 13 · The rubric is the lever | `examples/support-reply-loop/rubric.ts` (the rubric as data) |
| 14 · Vague criteria | `rubric.ts` criteria; the "highlight the words that pass" test in words |
| 15 · Overlapping criteria | `rubric.ts`; narrate the covarying-weight distortion |
| 16 · Compound criteria | `rubric.ts` `findCompoundCriteria`, `tests/course/module-2-critique.test.ts` (the linter) |
| 17 · Evidence and suggestion | `rubric.ts` `CriterionVerdictSchema` (`z.string().min(1)`), the schema test |
| 18 · Weights and pass rules as data | `rubric.ts` `applyPassRule` (all-blocking + weighted-threshold), the pass-rule test |

## Module 3 · Tracing Reflection Loops (`course/module-3`)

| Lesson | Show on screen |
|---|---|
| 19 · Undebuggable without tracing | An output-only assertion passing on a quietly-broken run; narrate the collapsed-outcome problem |
| 20 · Fail-soft wiring | `examples/support-reply-loop/tracing.ts` (`tracingConfig`, `isTracingEnabled`, the three LANGSMITH_* vars) |
| 21 · What a trace tree shows | `tracing.ts` `buildTracedReplyLoop` (the `RunTrace`), then the LangSmith UI (https://smith.langchain.com/) reading the span tree |
| 22 · Wasted iterations | `tracing.ts` `findWastedIterations`, `tests/course/module-3-tracing.test.ts` |
| 23 · Critic drift | `tracing.ts` `detectCriticDrift`, its test |
| 24 · Non-convergence | `tracing.ts` `didNotConverge`; narrate triage by score trajectory |
| 25 · A worked real bug | `tracing.ts` `detectFailSoftMasking`, its test; narrate the witus-triage credit-balance error surfaced in the model-call span |

## Module 4 · Eval-Driven Reflection (`course/module-4`)

| Lesson | Show on screen |
|---|---|
| 26 · Rubric reuse | `examples/support-reply-loop/eval.ts` `evaluateDraft` (reuses `scoreAgainstRubric`) |
| 27 · Creating a dataset | `eval.ts` `supportReplyDataset` (the `dead` ticket that can't pass) |
| 28 · Custom evaluator | `eval.ts` `assertNoInfraErrors` + the evaluator returning `passed`/`errored`, `tests/course/module-4-evaluation.test.ts` |
| 29 · Pairwise eval | `eval.ts` `pairwise` (loop 9/10 vs single-shot 0/10), its test |
| 30 · Thresholds with margin | `eval.ts` `meetsThreshold`, the margin test |
| 31 · Why a small dataset works | `eval.ts` `supportReplyDataset` (10 examples); narrate regressions as cliffs |

## Module 5 · Production Reliability (`course/module-5`)

| Lesson | Show on screen |
|---|---|
| 32 · Online convergence rate | `examples/support-reply-loop/production.ts` `computeMetrics` (convergence rate) |
| 33 · Alerts on runaway loops | `production.ts` `runProduction` + `checkAlerts` (the runaway signature) |
| 34 · A/B testing critics | `production.ts` `abCompare`; narrate quality-per-cost |
| 35 · Cost accounting | `production.ts` `runCost` and cost-per-converged-output |
| 36 · Single-pass good-enough | `production.ts` `singlePassGoodEnough` |
| 37 · Cost and quality Pareto | `production.ts` `paretoFrontier` (loop-cap-3 dominated by loop-cap-1), `tests/course/module-5-production.test.ts` |

## Module 6 · Capstone on a New Domain (`course/module-6`)

| Lesson | Show on screen |
|---|---|
| 38 · Composing the whole stack | `examples/capstone-plain-language/index.ts` (the import list from M1, M2, M4, M5 is the transfer proof) |
| 39 · Rubric for a new domain | `index.ts` `plainLanguageRubric` (`preserves_obligation` + `plain_language` both blocking) |
| 40 · Composing the capstone graph | `index.ts` `buildPlainLanguageLoop` (reuses M1's `routeWithAllPatterns`, M2's `scoreAgainstRubric`) |
| 41 · Capstone eval and dashboard | `index.ts` `runCapstoneEval` / `runCapstoneProduction`; the `remittance` clause failing on purpose |
| 42 · Transfer test (third domain) | `tests/course/module-6-capstone.test.ts` (the commit-message rubric on the same `scoreAgainstRubric`) |
| 43 · Course close | No code; recap the six module beliefs assembled into one sentence |

## Setup before recording (from the repo README)

- `npm install`, optional `.env` with `LANGSMITH_*` for Module 3's live-trace shots.
- `npm run test` should be green across all module test files before filming.
- Module 3's real-trace shots need a LangSmith account (free tier is enough); the diagnostics
  themselves run offline on a local `RunTrace`, so only Lesson 21's UI walk needs the account.
