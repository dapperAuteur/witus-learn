Goal: After this lesson you can reuse a reflection loop's runtime rubric as its offline eval, so the test measures exactly what the loop optimizes.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens the evaluator in [`examples/support-reply-loop/eval.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/examples/support-reply-loop/eval.ts) and the shared rubric in [`examples/support-reply-loop/rubric.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/examples/support-reply-loop/rubric.ts).

## One rubric, two jobs

Module 4 rests on one belief: the runtime rubric is also the offline test. The rubric you wrote in Module 2 to steer the loop while it runs is the same artifact you use to measure the loop offline. Same criteria, same judge contract, same pass rule.

That rubric does two jobs that look different and are the same check:

- The critic, at runtime. On every revision it scores the draft and decides pass or revise. This is steering, and it happens inside one run.
- The eval, offline. Over a dataset of many inputs it scores each final output and computes a pass rate. This is measuring, and it happens across runs, in CI.

The temptation is to write the offline eval on its own, as "a test that checks the output looks right." Resist it. The moment the eval's standard differs from the runtime critic's, you're measuring something other than what the loop optimizes, and a green eval stops meaning a good loop.

## Reusing the rubric in code

The evaluator doesn't define a new standard. It calls the same `scoreAgainstRubric` over the same `supportReplyRubric` the loop uses:

```ts
export async function evaluateDraft(judge, ticket, draft) {
  const critique = await scoreAgainstRubric(judge, ticket, draft, 0, supportReplyRubric);
  return { passed: critique.passed, errored: looksLikeErrorFallback(critique) };
}
```

`runEval` walks a dataset, runs the loop on each ticket, and scores the final draft with that evaluator. The pass or fail is decided by the identical pass rule the router trusts at runtime. There's one definition of "good," and both the loop and the eval read it. That's the literal meaning of "the runtime rubric is also the offline test."

## Why data as policy makes reuse possible

Module 2 put the weights and the pass rule in data, not in the node. This lesson is the payoff. Because the policy is data, the offline eval applies the exact same policy without re-implementing it.

Had the pass rule been hard-coded inside the critique node, the eval would have to copy that logic, and the copy would drift. One day the loop would ship a draft the eval calls good while the runtime critic would have rejected it. Reuse is only possible because Module 2 made the rubric an artifact, not a code path.

## What reuse buys you

1. The eval measures what the loop optimizes. Pass rate on the eval is the loop's real success rate, by construction, not a proxy.
2. Tuning stays honest. Change a weight to make the loop stricter and the eval reflects the new bar immediately, because it reads the same weight.
3. Nothing drifts. One source of truth means the runtime standard and the test standard can never disagree.

## The trap to avoid

The failure mode is a second, separate scorer: an offline eval whose standard is hand-coded apart from the runtime rubric. It drifts from what the loop actually optimizes, so a passing eval stops meaning a good loop. Reuse the rubric. Never re-implement it.

## In practice

You don't write an eval for a reflection loop. You reuse the critic as one. In [`tests/course/module-4-evaluation.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/tests/course/module-4-evaluation.test.ts), the loop target and the evaluator are handed the same `datasetJudge`. Change one criterion's weight in `supportReplyRubric` and re-run the suite: the loop's behavior and the eval's pass rate move together, because they read the same data. One rubric, two jobs. The rest of the module builds the machinery around that reused rubric: a dataset, a custom evaluator, pairwise comparison, thresholds, and dataset size.

## Key Takeaways

- The rubric that steers the loop at runtime is the same artifact that measures it offline.
- The evaluator wraps the runtime judge and rubric instead of defining a new standard.
- Data as policy from Module 2 is what makes reuse possible: the eval applies the same pass rule without copying it.
- Reuse guarantees the eval measures what the loop optimizes, keeps tuning honest, and prevents drift.
- A second, separate scorer drifts, so a passing eval no longer certifies a good loop.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

Liu, Y., Iter, D., Xu, Y., Wang, S., Xu, R., & Zhu, C. (2023). G-Eval: NLG evaluation using GPT-4 with better human alignment. In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing* (pp. 2511 to 2522). Association for Computational Linguistics. https://doi.org/10.18653/v1/2023.emnlp-main.153
