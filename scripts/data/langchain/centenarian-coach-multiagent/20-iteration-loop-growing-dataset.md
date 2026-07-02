Goal: After this lesson you can run the eval iteration loop, find a bug, pin it with a tagged example, re-run, and say why a growing dataset is the point of the module.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`evals/dataset.json`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-20/evals/dataset.json) and [`evals/rubric.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-20/evals/rubric.ts).

## The other half of the system

The evaluators are only half the system. The other half is the loop they feed: find a bug, add an example that pins it, re-run. A dataset that grows every time you find a failure is the difference between evals you run once and evals that get sharper as the system gets older.

## The loop, concretely

1. **Observe a failure.** From `pnpm eval` output, a low grounding score (Lesson 18), or a trace in a LangSmith experiment (Lesson 19), you spot a misroute or an ungrounded answer.
2. **Add an example that pins it.** Append one entry to [`evals/dataset.json`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-20/evals/dataset.json), tagged with where it came from and why:

   ```jsonc
   { "id": "c1",
     "question": "My right shoulder rounds forward when I press overhead. How do I fix it?",
     "expectedAgents": ["corrective"],
     "addedIn": "module-4",
     "note": "regression: a postural/corrective question leaked to the workout specialist" }
   ```
3. **Re-run.** `pnpm eval` (the gate) and `pnpm eval:langsmith` (the tracked experiment) now include the new case. Fix the supervisor prompt or retrieval until the example passes, without regressing the rest.

## Provenance is the feature

The `addedIn` and `note` fields on `EvalExample` (added in [`evals/rubric.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-20/evals/rubric.ts)) are optional and backward compatible, but they carry the dataset's history. The original twenty examples are the baseline; everything added later says which module and which bug introduced it. The course's own dataset already grew this way, with three regression examples added during the build:

- `wr3`, a sleep-plus-tightness question that was misrouting to workout only,
- `c1`, a postural question leaking away from the corrective specialist (also the first corrective-only case in the set),
- `nwr4`, a three-domain question that under-routed and dropped nutrition.

Each is a bug someone found, written down so it can never silently come back. A test suite that only ever has its original cases is testing yesterday's understanding of the system; a growing one tracks what you've actually learned about how it breaks (LangChain, 2025).

## In practice

Run the loop once for real. Ask the coach a question you suspect it routes wrong, confirm it in the trace, add a tagged example to `evals/dataset.json`, and re-run `pnpm eval`. You've now done the single most valuable thing in this module: turned a one-off observation into a permanent regression test. That habit, not the evaluators alone, is what keeps the coach trustworthy as it grows, and Module 6 returns to it when you extend the system.

## Key Takeaways

- The eval loop is three steps: observe a failure, add a tagged example that pins it, re-run and fix without regressing.
- New examples carry `addedIn` and `note`, so the dataset records which module and which bug added each case.
- The coach's own dataset grew by three regression cases (`wr3`, `c1`, `nwr4`) during the build.
- A fixed dataset tests yesterday's understanding; a growing one tracks how the system actually breaks.
- Turning a one-off observation into a permanent regression test is the most valuable habit in the module.

## References

LangChain. (2025). *LangSmith documentation: Datasets and evaluation*. https://docs.langchain.com/langsmith/evaluation

Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). Judging LLM-as-a-judge with MT-Bench and Chatbot Arena. In *Advances in Neural Information Processing Systems* (Vol. 36). Curran Associates.
