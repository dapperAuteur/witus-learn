Goal: After this lesson you can prove a reflection loop beats single-shot and measure its cost on a new domain by reusing Module 4's eval and Module 5's dashboard unchanged.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/capstone-plain-language/index.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/capstone-plain-language/index.ts), which reuses the eval helpers from [`eval.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/support-reply-loop/eval.ts) and the dashboard metrics from [`production.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/support-reply-loop/production.ts). The capstone test is [`tests/course/module-6-capstone.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/tests/course/module-6-capstone.test.ts).

## The eval, reused

A capstone isn't finished when the loop runs. It's finished when you can prove it works and what it costs on the new domain. Module 4's eval machinery is domain-agnostic. `pairwise`, `meetsThreshold`, and `assertNoInfraErrors` all operate on an `EvalReport`, not on a rubric. So the capstone scores its corpus with a thin wrapper over the same `scoreAgainstRubric` and feeds the results straight into the reused helpers (`examples/capstone-plain-language/index.ts`):

```ts
const loop   = await runCapstoneEval(dataset, loopTarget(plainRewriter, judge), judge);     // 11/12
const single = await runCapstoneEval(dataset, singleShotTarget(echoRewriter), judge);       //  0/12
pairwise(loop, single);            // M4, unchanged: loop wins 11, single wins 0
meetsThreshold(loop, 0.7);         // M4, unchanged: true
assertNoInfraErrors(loop);         // M4/M3, unchanged: guards the fail-soft bug
```

The capstone test asserts all of it: the loop converts 11 of 12 clauses (the legalese-saturated `remittance` is the honest miss), single-shot converts none, the loop wins pairwise, it clears the margin-aware threshold, and a fail-soft judge still aborts loudly. Every one of those guarantees came from Module 4 for free. The capstone wrote a dataset, not an eval.

## The dashboard, reused

Module 5's metrics are equally domain-agnostic. They read run records, not clauses. So the capstone's dashboard is `computeMetrics` over capstone run records and `paretoFrontier` over capstone configs, imported unchanged:

```ts
const records = await runCapstoneProduction(dataset, plainRewriter, judge);
const m = computeMetrics(records, plainLanguageRubric.length);
//   m.convergenceRate ≈ 0.92, m.costPerConvergedOutput finite, m.runawayCount = 0
paretoFrontier([
  { label: "single-shot", quality: 0.0,  cost: 1 },
  { label: "loop-cap-1",  quality: 0.92, cost: 2 },
  { label: "loop-cap-3",  quality: 0.92, cost: 4 },   // dominated, dropped
]);
```

Notice `computeMetrics` takes `plainLanguageRubric.length` as the criteria count. That's the only domain input the cost model needs, because cost scales with rubric size (Lesson 35). Everything else, the convergence rate, the cost-per-converged-output, and the Pareto frontier that drops `loop-cap-3`, is the same code computing the same insights on new data.

## The exit artifact

This is the forkable template the course set out to produce: a reflection loop on a chosen domain with a pre-built eval dataset, a dashboard tracking convergence, iterations, and cost-per-converged-output, and per-lesson git tags so any checkpoint runs. The capstone proves the template is real by instantiating it on a domain, legal-clause rewriting, that shares no vocabulary with the support replies it was built on. A learner forks it, swaps the rubric and dataset, and has a measured loop on their domain.

## In practice

A finished capstone is a measured capstone. The eval that proves the loop beats single-shot, the threshold that gates regressions, the loud-fail guard, the convergence and cost dashboard, and the Pareto frontier all transferred to the new domain by reuse. You supplied a dataset and a rubric, and the instruments came with you. That portability is the deliverable.

See it catch a regression. Run the capstone test and read the three reused-helper assertions (`pairwise`, `meetsThreshold`, `computeMetrics`). Then break the loop by swapping `plainRewriter` for `echoRewriter` in the loop target, and watch the convergence rate collapse and the threshold gate go red. Those are the Module 4 and Module 5 instruments catching a regression on a domain they were never written for.

The next lesson pushes the pattern to a third domain, this time with no scaffolding written for it at all.

## Key Takeaways

- A capstone is finished when you can prove the loop works and what it costs, not just when it runs.
- Module 4's eval helpers operate on an `EvalReport`, so `pairwise`, `meetsThreshold`, and `assertNoInfraErrors` reused unchanged.
- The loop converts 11 of 12 clauses and single-shot converts none, so the loop wins pairwise and clears the threshold.
- Module 5's metrics read run records, so `computeMetrics` and `paretoFrontier` transfer too. The only domain input is `plainLanguageRubric.length`.
- The exit artifact is a forkable template: a measured loop with a dataset, a dashboard, and per-lesson tags, proven on a domain that shares no vocabulary with support replies.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). Judging LLM-as-a-judge with MT-Bench and Chatbot Arena. In *Advances in Neural Information Processing Systems 36* (pp. 46595 to 46623). Curran Associates. https://arxiv.org/abs/2306.05685
