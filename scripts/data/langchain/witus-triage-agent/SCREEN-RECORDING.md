# Screen-recording guide: LangGraph in Production, The WitUS Triage Agent

Teacher aid for recording the course. It maps each lesson to the exact code to show
on screen. This is NOT seeded as a lesson; it lives beside the lesson files.

**Repo:** https://github.com/dapperAuteur/witus-triage-agent
**Deployed app:** https://triage.agent.witus.online/

## Which version of the code to show

The Triage Agent repo does **not** carry per-lesson git tags. Record against the
default branch, **`main`**, at a single commit for the whole course so the code on
screen stays consistent shot to shot. Before recording, pin the commit:

```bash
git clone https://github.com/dapperAuteur/witus-triage-agent
cd witus-triage-agent
git rev-parse HEAD    # note this SHA; record the whole course at it
```

If you want a frozen reference, cut a tag yourself before recording (optional):
`git tag course/triage-v1 && git push origin course/triage-v1`, then swap `main`
for `course/triage-v1` in the file URLs below. Every in-lesson file link already
points at `/blob/main/…`; update them in one pass if you tag.

Module 2 is the Python durability track. Its code is the single notebook
`docs/course/module-0-durable-hitl/durable-hitl-quickstart.ipynb`, run top to bottom.
The repo's own `docs/course/module-0-durable-hitl/video/video-script.md` is a full
shot-by-shot script for that module; use it for Module 2 recording.

## Module 1 · LangGraph Patterns (TypeScript)

| Lesson | Show on screen (open at `main`) |
|---|---|
| 1 · From a chain to a graph | `agent/graph.ts` (the `StateGraph` wiring, the `addConditionalEdges` line), `agent/state.ts` |
| 2 · Designing agent state | `agent/state.ts` (`TriageStateAnnotation`), `agent/schemas.ts` (the Zod `ClassificationSchema` + `z.infer`), `__tests__/agent/classify.test.ts` |
| 3 · Tools and the human-in-the-loop interrupt | `agent/tools/searchPastSubmissions.ts`, `agent/nodes/humanApproval.ts` (the two-statement node), `agent/checkpointer.ts`, `__tests__/agent/graph.test.ts` (the paused-then-resumed assertion) |
| 4 · Observability | `lib/env.ts` (LANGSMITH_* optional), `lib/langsmith.ts` (`isTracingEnabled()`), `lib/triage-runner.ts` (`langsmithRunId`), then a real run in LangSmith (https://smith.langchain.com/) |

## Module 2 · Durable Human-in-the-Loop (Python notebook)

All shots are inside `docs/course/module-0-durable-hitl/durable-hitl-quickstart.ipynb`.
Follow `docs/course/module-0-durable-hitl/video/video-script.md` §5 for the exact
shot list, holds, and zooms. The two "money" outputs to hold on: `STATE LOST` (Lesson 5)
and `resumed across the crash → EXECUTED` (Lesson 6).

| Lesson | Notebook cells to show |
|---|---|
| 5 · The crash test | the `%%writefile triage_graph.py` cell (the `interrupt()` call), the two `%%writefile` process files, then `!python step1/step2 … memory …` (hold on `STATE LOST`) |
| 6 · The ten-line fix | the 6-line `PostgresSaver` swap markdown, `make_checkpointer("postgres")`, `!python step1/step2 … postgres …` (hold on `resumed across the crash`), the `SELECT … FROM checkpoints` cell |
| 7 · Two rules | the `get_state` / `get_state_history` cell, the `side_effects` re-run cell (hold on `['ran', 'ran'] <- it ran TWICE`), the quoted `humanApproval.ts` block |
| 8 · Verify in LangSmith | the "find your run" cell, then the LangSmith UI filtered by thread `durable-demo-1` (show the resumed run entering at `human_approval`, not `intake`) |

## Setup before recording (from the repo README)

- Module 1 (TS): `pnpm install`, set `.env` (optional `LANGSMITH_*`), `pnpm test` green.
- Module 2 (Python): `pip install -r requirements.txt`, `docker compose down -v && up -d --wait`
  so the `checkpoints` table starts empty, dedicated `LANGSMITH_PROJECT` so Lesson 8's
  run list is clean. Run the notebook once off-camera, then restart the kernel and reset
  Postgres for the take.
