Goal: After this lesson you can confirm in LangSmith that a paused run and its resumed run share one thread, and that the resume continued mid-graph rather than starting over.

Follow along in the [durable-HITL quickstart notebook](https://github.com/dapperAuteur/witus-triage-agent/blob/main/docs/course/module-0-durable-hitl/durable-hitl-quickstart.ipynb) (Lesson 4 cells), and open your project in [LangSmith](https://smith.langchain.com/). This step needs a `LANGSMITH_API_KEY`. It's optional; the notebook skips it automatically when the key is unset.

## What changed since last lesson

Last lesson gave us two rules for a durable interrupt. Now we confirm the whole thing visually. The single value that ties the paused run and the resumed run together is the `thread_id`: both processes ran the same thread id, and that's what we go looking for in the trace.

## Find the run

Run the "find your run" cell. It queries LangSmith for runs in this project and prints each one with its `thread` and a clickable URL. You're looking for `durable-demo-1`, the thread from the Postgres crash test in Lesson 2. Click its URL to open the run in the browser.

If you skipped the LangSmith setup, that's fine. The durability itself was already proven by the `SELECT` on the `checkpoints` table in Lesson 2. LangSmith doesn't make the resume work; it lets you see it. This lesson is the visual confirmation, not the mechanism.

## Read the trace

In the LangSmith project view, filter by the thread, `durable-demo-1`. Two runs share it: the one that paused and the one that resumed. Open the resumed run and expand its tree.

Here's the thing to look for. The resumed run doesn't start at `intake`. It starts partway through the graph, at `human_approval` into `finalize`. That's the persisted checkpoint doing its job: the resume didn't replay the whole graph from the beginning, it loaded the saved state and continued from the pause. The run tree is the picture of exactly the durability you built. One thread, paused in a dead process, continued in a live one, and the trace stitches the two halves into a single continuous story.

The live LangSmith UI changes over time. If the layout differs when you record or follow along, the claim to confirm is unchanged: two runs share the thread, and the resumed run enters the graph mid-way, not at the start.

## Why this last step is worth it

You already had proof in Postgres. Why open a trace at all? Because "the row exists" and "the resume entered at `human_approval`, not `intake`" are different facts, and the second is the one that would catch a subtle bug. If a misconfigured resume quietly re-ran the graph from the top, the database row would still be there, but the trace would show the run starting at `intake`, and you'd see the mistake. The `SELECT` proves the checkpoint persisted. The trace proves the resume used it correctly. Module 1 Lesson 4 made the general case for tracing; this is that case, applied to durability.

## In practice

This closes the module. You've watched an in-memory checkpointer lose a paused thread on restart (Lesson 5), fixed it with a roughly ten-line `PostgresSaver` swap (Lesson 6), learned the two rules that keep your own interrupt correct across the crash (Lesson 7), and confirmed the resume in a trace (this lesson). The repo ships a [`migration-checklist.md`](https://github.com/dapperAuteur/witus-triage-agent/blob/main/docs/course/module-0-durable-hitl/migration-checklist.md) that walks you through pointing this pattern at your own agent: swap your checkpointer, move side effects after the gate, and store the thread id where you can find it. That's a durable human-in-the-loop agent, end to end. See the whole thing running at [triage.agent.witus.online](https://triage.agent.witus.online/).

## Key Takeaways

- LangSmith verification is optional and fails soft; the Postgres `SELECT` in Lesson 6 already proved durability.
- Filter the project by `thread_id` to see the paused run and the resumed run as one pair.
- The proof of correctness is that the resumed run enters mid-graph (at `human_approval`), not at `intake`.
- The database row proves the checkpoint persisted; the trace proves the resume used it correctly. They're different checks.
- Use the repo's `migration-checklist.md` to apply the pattern to your own agent.

## References

LangChain. (n.d.). *Intro to LangSmith* [Course notebooks]. GitHub. https://github.com/langchain-ai/intro-to-langsmith

LangChain. (n.d.). *Observability quick start*. LangSmith. https://docs.smith.langchain.com/
