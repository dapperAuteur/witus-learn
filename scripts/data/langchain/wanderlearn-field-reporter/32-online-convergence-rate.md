Goal: After this lesson you can compute a reflection loop's convergence rate from the records it already produces and read it as the first sign that production has shifted.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). On screen this lesson opens [`examples/support-reply-loop/production.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-5/examples/support-reply-loop/production.ts) and [`tests/course/module-5-production.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-5/tests/course/module-5-production.test.ts).

## Reflection is a budget, not a magic wand

This module runs on one belief: reflection is a budget you allocate, not a magic wand you wave. Module 4's eval ran offline on a fixed dataset. Production runs on live traffic you can't see in advance. This lesson installs the headline online metric, convergence rate, and shows how to watch it on traffic the dataset never contained. By the end you can compute the number every production loop should put on a dashboard first.

## Offline gates the deploy, online watches production

The Module 4 eval answered one question against a curated dataset in CI: "did this change make the loop worse?" An online eval answers a different question, continuously, on real inputs: "is the loop healthy right now, on traffic I've never seen?"

The dataset is fixed and known. Live traffic is open-ended and surprising. You want both. The offline eval gates deploys, the online eval watches production, and they share the same rubric from Module 2. So "healthy" means the same thing in both places.

## The one number that says the loop is working

The single number that tells you a reflection loop is working in production is its convergence rate: the fraction of runs that resolved (passed the rubric) instead of escalating. The loop already records what it needs.

```ts
export interface RunRecord {
  id: string;
  outcome: "resolved" | "escalated";
  revisions: number;
}
```

`computeMetrics` aggregates those records, and convergence rate leads the result:

```ts
export function computeMetrics(records, criteriaCount, maxRevisions, model): ProductionMetrics {
  const resolved = records.filter((r) => r.outcome === "resolved").length;
  return {
    convergenceRate: resolved / total,          // the headline health metric
    escalationRate: (total - resolved) / total,
    avgIterations: /* mean revisions */,
    runawayCount: /* runs that hit the cap unresolved */,
    costPerConvergedOutput: /* total cost / resolved */,
  };
}
```

The Module 5 test runs the loop over the dataset and asserts a 0.9 convergence rate: nine of ten tickets resolved.

## You aggregate what the loop already knows

The metrics come from run records shaped like `{ id, outcome, revisions }`, and the loop already produces them. The `outcome` and `revisionNumber` are the same fields you built in Modules 1 and 2. You're not adding instrumentation. You're aggregating what the loop already reports. That's why the online eval costs almost nothing to stand up: the data was already there.

## Why convergence rate comes first

- It's the loop's actual job, measured. A reflection loop exists to turn drafts into passing outputs, and convergence rate is the fraction of times it did. Cost and iteration counts are secondary to "did it work."
- It moves when reality changes. A model regression, a shift in the kinds of tickets arriving, a rubric edit that raised the bar: each shows up as a convergence-rate change, even on traffic your offline dataset never had. It's the canary for "something is different now."
- It's comparable over time. Because it's a rate, you can chart it by hour or by day and see trends a single run never reveals.

## The rate finds the when, the trace finds the why

Module 3 taught you to diagnose one escalation from its trace. Convergence rate is the aggregate. It won't tell you why any single run escalated. It tells you when to go look.

A 2% escalation rate is normal. A jump to 20% means something changed, and that's when you open the traces from Module 3 to find the cause. The online metric finds the when. The trace finds the why. You need both, in that order.

## In practice

Production health starts with one number: the fraction of live runs that converge. It's computed from records the loop already produces, it shares the rubric with your offline eval so "healthy" stays consistent, and it's the canary that tells you when reality has shifted.

Try it yourself. Run `runProduction` over the dataset with the good writer, then again with a writer that fails half the tickets, and compare `computeMetrics(...).convergenceRate`. Watch the number drop. Now picture that drop happening on live traffic at 3am with nobody looking. That alert is the next lesson.

## Key Takeaways

- Convergence rate is the fraction of live runs that resolved rather than escalated, and it's the first metric a production loop should chart.
- Offline evals gate deploys on a fixed dataset; online evals watch production on live traffic; they share one rubric so "healthy" is consistent.
- The metric is computed from run records the loop already produces, so it needs no new instrumentation.
- Convergence rate moves when reality shifts, which makes it the canary for model regressions, traffic changes, and rubric edits.
- The rate tells you when to investigate; the Module 3 trace tells you why a given run failed.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

Liu, Y., Iter, D., Xu, Y., Wang, S., Xu, R., & Zhu, C. (2023). G-Eval: NLG evaluation using GPT-4 with better human alignment. In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing* (pp. 2511 to 2522). Association for Computational Linguistics. https://doi.org/10.18653/v1/2023.emnlp-main.153
