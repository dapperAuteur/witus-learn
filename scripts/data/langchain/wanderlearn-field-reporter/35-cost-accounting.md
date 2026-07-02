Goal: After this lesson you can price a single run per iteration and compute cost-per-converged-output, the metric that charges failed runs against the good outputs you shipped.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). On screen this lesson opens [`examples/support-reply-loop/production.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-5/examples/support-reply-loop/production.ts).

## You can't manage what you don't price

You can't manage what you don't price. This lesson makes the cost of a reflection loop explicit and per-iteration, so "add another revision" stops feeling free in your head. By the end you can compute what a run costs and, more important, the one metric that matters: cost-per-converged-output, which counts the money you spent on runs that failed too.

## Every revision has a price

A reflection loop's cost is dominated by LLM calls, and each revision makes several: one writer call plus one critic call per criterion. So cost scales with both the number of revisions and the size of the rubric.

```ts
export function runCost(revisions, criteriaCount, model = defaultCostModel): number {
  return revisions * (model.writeCallCost + criteriaCount * model.critiqueCallCostPerCriterion);
}
// 2 revisions, 4 criteria: 2 * (1 + 4 * 0.25) = 4 "calls"
```

Two consequences fall out, and both are design levers.

1. More revisions costs linearly more. A loop tuned to allow five revisions instead of three isn't "a bit slower." It's up to 67% more expensive per run. The `MAX_REVISIONS` you set in Module 1 is a budget cap, and now you can see its price.
2. A bigger rubric costs more on every revision. Each criterion is a critic call, so a ten-criterion rubric costs more than twice a four-criterion one, on every pass. The rubric craft from Module 2 (no redundant or overlapping criteria) is also cost discipline. Every criterion you can't justify is a call you pay for on every revision of every run.

## The metric that counts the failures

The naive cost metric is "average cost per run." It lies, because it spreads the cost over all runs, including the ones that escalated unresolved. That makes a loop that fails half its runs look half as expensive as it really is. The honest metric divides total cost by resolved runs only.

```ts
costPerConvergedOutput: resolved ? totalCost / resolved : Infinity,
```

This charges the money you spent on failures against the good outputs you actually got. A loop that burns three revisions to escalate contributes its full cost to the numerator and nothing to the denominator, so its waste shows up where you'll see it. And when convergence is zero, the metric is `Infinity`: you spent money and got nothing, which is exactly what infinite cost per good output should mean. That's also why it trips the cost alert from Lesson 33.

## The module thesis, made numeric

"Reflection is a budget allocation, not a magic wand" stops being a slogan here. Each revision is a line item. The loop is a spending decision you make per run. Cost accounting per iteration is what lets every later choice be made with the price in view instead of pretending revisions are free: how high to set `MAX_REVISIONS`, whether to loop at all (Lesson 36), which critic to use (Lesson 34), where to sit on the Pareto curve (Lesson 37).

## Why average cost per run lies

Reporting mean cost across all runs dilutes the cost of failed runs into the successes. It hides a loop that pays full price to escalate. Divide by converged outputs so failures count where they belong. The average is comfortable and wrong. The per-converged number is uncomfortable and honest, which is the one you want on the dashboard.

## In practice

Every revision is a priced line item: a writer call plus one critic call per criterion. So more revisions and bigger rubrics cost linearly more. Measure cost-per-converged-output, not per run, so the money spent on failures stays visible against the good outputs you got. With the price in view, reflection becomes a budget you allocate on purpose.

Try it yourself. Use `runCost` to price a single run at `MAX_REVISIONS = 3` with a four-criterion rubric, then again with a ten-criterion rubric. Note how much the rubric size alone raises the per-run cost. Then look back at your Module 2 rubric and ask whether every criterion earns its call.

## Key Takeaways

- One run's cost is revisions times (one write call plus one critique call per criterion), so it scales with both revision count and rubric size.
- Raising the revision cap or adding rubric criteria raises cost linearly on every run.
- Average cost per run hides waste by spreading failed-run cost across the successes.
- Cost-per-converged-output divides total cost by resolved runs only, so failures count against the good outputs you shipped.
- Zero convergence makes the metric Infinity, which is the honest reading of spending money for nothing.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U., Dziri, N., Prabhumoye, S., Yang, Y., Welleck, S., Majumder, B. P., Gupta, S., Yazdanbakhsh, A., & Clark, P. (2023). *Self-Refine: Iterative refinement with self-feedback* (arXiv:2303.17651). arXiv. https://arxiv.org/abs/2303.17651
