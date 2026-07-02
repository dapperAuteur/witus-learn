# Screen-recording guide, Multi-Agent LangGraph with Per-Agent RAG

Teacher aid for recording the course. It maps each lesson to the exact code to show on
screen. This is NOT seeded as a lesson; it lives beside the lesson files.

**Repo:** https://github.com/dapperAuteur/centenarian-coach-multiagent
**Deployed app:** https://centenarian.coach.multiagent.witus.online/ (gated to one admin
email; everyone else joins the access waitlist, so record signed in as the admin)

## Which version of the code to show

This repo carries **one git tag per lesson**, `course/lesson-NN`, and each tag is that
lesson's screen-recording checkpoint. Before recording lesson N, check its tag out so the
code on screen matches the lesson exactly:

```bash
git clone https://github.com/dapperAuteur/centenarian-coach-multiagent
cd centenarian-coach-multiagent
git checkout course/lesson-04   # the smoke-test state, ready to run
```

Every in-lesson file link already points at `/blob/course/lesson-NN/…`, so the URL in the
lesson and the checked-out tag agree. The full tag list runs `course/lesson-01` through
`course/lesson-28` (verify with `git tag`). The diff between two consecutive tags is that
lesson's work, which is the fastest way to show "what changed and why."

The whole course is one TypeScript artifact. Lesson 3 is a Python translation reference,
not a second codebase, so there's no separate Python track to record. Each module's video
script lives in its module directory as `docs/course/module-N-video-script.md`; the
intro/outro and production guide are in `docs/course/video/`.

## Setup before recording (from the repo README)

- `pnpm install`, then `.env.local` with an LLM key and `GEMINI_API_KEY` for embeddings, OR
  run free and local with Ollama (`COACH_LLM_PROVIDER=ollama`, `COACH_EMBED_PROVIDER=ollama`).
- `pnpm db:migrate` (creates `coach_kb` and `match_coach_kb`), then `pnpm kb:seed` and confirm
  with `pnpm kb:status` (non-empty namespaces).
- Set `LANGSMITH_API_KEY` and a dedicated `LANGSMITH_PROJECT` so the trace and eval views are
  clean. Run a query once off-camera, then reset for the take.

## Module 0 · Setup and Scope

| Lesson | Show on screen (at `course/lesson-NN`) |
|---|---|
| 1 · Course overview | `README.md`, `docs/course/README.md` (the architecture diagram), and the live coach answering one narrow and one cross-domain question |
| 2 · Getting set up (TypeScript) | `.env.example`, `drizzle.config.ts`, `src/db/schema.ts`, then run `pnpm db:migrate` |
| 3 · Getting set up (Python) | `src/state.ts` and `src/agents/supervisor/routing.schema.ts` beside the translation table |
| 4 · First-run smoke test | `kb-fixtures/`, `scripts/seed-kb.mjs`, `src/app/api/coach/query/route.ts`; run `pnpm kb:seed` / `pnpm dev`, hold on the streamed `session → routing → finding → answer` events and the LangSmith trace |

## Module 1 · The Supervisor

| Lesson | Show on screen |
|---|---|
| 5 · Single vs multi-agent | `src/graph.ts` (supervisor plus the four specialists) |
| 6 · Routing schema with Zod | `src/agents/supervisor/routing.schema.ts` (the `RoutingSchema`), `src/agents/supervisor/supervisor.node.ts` (`withStructuredOutput`, the primaryAgent normalization) |
| 7 · Topology enforces ordering | `src/graph.ts` (the edges), `tests/topology.test.ts`; run `pnpm test tests/topology.test.ts` |
| 8 · Fan-out and temperature 0 | `src/graph.ts` (`routeToSpecialists` returning an array), `supervisor.node.ts` (`temperature: 0`), then a cross-domain fan-out in the LangSmith trace |

## Module 2 · Nutrition Specialist

| Lesson | Show on screen |
|---|---|
| 9 · Per-agent retrieval namespacing | `src/db/schema.ts` (the `namespace` column), `src/lib/pgvector.ts` (`match_coach_kb`), `src/agents/nutrition/retrieval.ts`; run `pnpm kb:status` |
| 10 · The embedding-consistency trap | `src/lib/embeddings.ts` (the single `embed()`, the 768 assertion) |
| 11 · Building the Nutrition subgraph | `src/agents/nutrition/subgraph.ts`; in the trace, the nested `retrieve → assess → compose` subgraph, then a full-data question that fires `tools` |
| 12 · Type-enforced isolation | `src/agents/nutrition/subgraph.ts` (`NutritionAnnotation`, no `findings`), `src/state.ts` (the merge reducer); the scratch edit that red-squiggles `state.findings` |

## Module 3 · Workout and Recovery Specialists

| Lesson | Show on screen |
|---|---|
| 13 · Adding Workout | `src/agents/workout/subgraph.ts`; `git diff --no-index src/agents/nutrition/subgraph.ts src/agents/workout/subgraph.ts` |
| 14 · Adding Recovery and isolation | `src/agents/recovery/subgraph.ts` (`RecoveryAnnotation`); a Workout-plus-Recovery trace with two parallel subgraphs |
| 15 · State passing and fan-in | `src/state.ts` (the `findings` reducer), `src/synthesizer/synthesize.ts`; a three-domain trace, three findings merging then the synthesizer reading all three |

## Module 4 · LangSmith Evaluation

| Lesson | Show on screen |
|---|---|
| 16 · Why multi-agent fails quietly | `evals/dataset.json` (the example shape) |
| 17 · Deterministic evaluators | `evals/rubric.ts` (`routingScore`, `citationScore`), `tests/coach.eval.test.ts`; run `pnpm test evals.rubric.test.ts`, then `pnpm eval` |
| 18 · LLM-judge grounding | `evals/grounding.ts` (`GroundingSchema`); run `RUN_GROUNDING=1 pnpm eval`, hold on the lowest score's `unsupportedClaims` |
| 19 · Running evals in LangSmith | `evals/run-langsmith.ts`; run `pnpm eval:langsmith`, open the experiment URL, sort by grounding, open the worst trace |
| 20 · Iteration loop and growing dataset | `evals/dataset.json` (`addedIn` / `note` on `wr3`, `c1`, `nwr4`), `evals/rubric.ts` |

## Module 5 · Deployment and Multi-Tenant

| Lesson | Show on screen |
|---|---|
| 21 · LangGraph Platform and langgraph.json | `langgraph.json`, `src/deployment/graph.ts`; run `pnpm deploy:dev`, open the local Agent Server, ask the coach a question |
| 22 · Deploying, env and database | `.env.example`; run `pnpm kb:status` against the production `DATABASE_URL`, then the live app's answer carrying citations |
| 23 · Per-user state and auth | `src/state.ts` (the single-tenant comment), `src/db/schema.ts` (`coach_sessions`); the admin gate and waitlist on the live app |
| 24 · Cost and latency dashboards | `src/lib/langsmith.ts`; the LangSmith project dashboard (per-run latency, tokens, cost), then A/B a provider swap in the admin dashboard |

## Module 6 · Extension Launching Pad

| Lesson | Show on screen |
|---|---|
| 25 · Add a new specialist | the six files: `src/agents/corrective/retrieval.ts`, `src/agents/corrective/subgraph.ts`, `src/state.ts`, `src/agents/supervisor/routing.schema.ts`, `src/graph.ts`; a Corrective `retrieve → compose` trace |
| 26 · Five extensions with file paths | `src/graph.ts`, `src/state.ts`, `src/app/api/coach/query/route.ts`, `src/agents/nutrition/subgraph.ts`, `src/agents/corrective/` (each extension's starting file) |
| 27 · Extending the eval suite | `evals/dataset.json` (the `c1` and `wr3` corrective examples) |
| 28 · Capstone | the tags (`git checkout course/lesson-09`, `git checkout course/lesson-25`), and the whole-arc recap |

## Operator gate (Module 5)

The free path (Vercel live app plus `pnpm deploy:dev`) needs no operator step beyond a
seeded production database. A fully managed LangGraph Platform Cloud deployment needs the
paid Plus plan and an operator action (account, secrets); it gates only the managed URL, so
record Module 5 against the free path and note the managed deploy as optional polish.
