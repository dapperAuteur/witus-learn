Goal: After this lesson you can run the same evaluators as tracked LangSmith experiments and say what that adds over the local CI gate.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`evals/run-langsmith.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-19/evals/run-langsmith.ts) and a real experiment in [LangSmith](https://docs.langchain.com/langsmith/evaluation).

## What LangSmith adds

`pnpm eval` gives you a pass/fail gate in CI. It doesn't give you history: which questions regressed between Tuesday and Friday, how two providers compare, or the trace behind a low score. That's what LangSmith adds. The same evaluators, run as tracked experiments you can open, diff, and drill into.

## One runner, the same evaluators

[`evals/run-langsmith.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-19/evals/run-langsmith.ts) pushes the dataset to LangSmith and runs `evaluate()` over the live graph with the very evaluators from Lessons 17 and 18:

```ts
export async function runLangsmithEval() {
  await pushDataset();
  return evaluate(runCoach, {
    data: DATASET_NAME,
    evaluators: [routingEvaluator, citationEvaluator, groundingEvaluator],
    experimentPrefix: "coach-eval",
    maxConcurrency: 2,
    metadata: { provider: process.env.COACH_LLM_PROVIDER ?? "google" },
  });
}
```

Two things to notice. First, `routingEvaluator` and `citationEvaluator` are thin wrappers around the same pure functions the local gate uses, so there's no second copy of the scoring logic to drift. Second, `maxConcurrency: 2` keeps the run gentle on a free-tier model's rate limit. Run it with `pnpm eval:langsmith` (it needs `LANGSMITH_API_KEY`).

## Pushing the dataset

`pushDataset()` creates a LangSmith dataset named `centenarian-coach` from `evals/dataset.json`, mapping each example's `question` to the input and `expectedAgents` to the reference output, and tagging each with its `id` and `addedIn` (Lesson 20). It's idempotent: if the dataset exists, it returns the existing one. The first run creates it; later runs evaluate against it (LangChain, 2025).

## Why both runners exist

| Runner | Question it answers | Needs |
|---|---|---|
| `pnpm eval` | "Does this change pass the bar in CI?" | keys, no LangSmith |
| `pnpm eval:langsmith` | "How does this run compare to the last, and why?" | `LANGSMITH_API_KEY` |

The local gate stays dependency-free and cheap so it can block a pull request. The LangSmith runner is where you go to understand a result: open the experiment, sort by grounding score, click into the worst run, and read the actual trace (Module 0's tracing, now attached to a scored example). The gate tells you something broke; the experiment tells you what and why.

## In practice

With `LANGSMITH_API_KEY` set, run `pnpm eval:langsmith` and open the printed experiment URL. Sort the examples by grounding. Click the lowest one and follow its trace from supervisor to the specialist's `retrieve` node. You're now looking at the same failure from Lesson 18, but with the full execution attached. Keep this experiment open; in Lesson 20 you add an example and run a second experiment to compare against it.

## Key Takeaways

- `pnpm eval:langsmith` runs the same evaluators as tracked experiments, adding history and drill-down over the local gate.
- The routing and citation evaluators are thin wrappers around the same pure functions, so there's one source of truth.
- `pushDataset()` is idempotent: it creates the `centenarian-coach` dataset once and reuses it after.
- `maxConcurrency: 2` keeps the run within a free-tier rate limit.
- The gate tells you something broke; the experiment (sort by score, open the trace) tells you what and why.

## References

LangChain. (2025). *LangSmith documentation: Evaluation and experiments*. https://docs.langchain.com/langsmith/evaluation
