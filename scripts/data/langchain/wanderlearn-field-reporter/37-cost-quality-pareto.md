Goal: After this lesson you can place every loop configuration on a cost and quality curve, drop the dominated ones, and pick a point on purpose.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). On screen this lesson opens [`examples/support-reply-loop/production.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-5/examples/support-reply-loop/production.ts) and [`tests/course/module-5-production.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-5/tests/course/module-5-production.test.ts).

## Every knob trades cost against quality

Every production knob you've turned in this module trades cost against quality: `MAX_REVISIONS`, the critic model, loop versus single-shot. This final lesson gives you the framework that organizes all of them: the cost and quality Pareto frontier, the set of configurations where you can't get more quality without paying more, or pay less without losing quality. By the end you can place every config on one curve and pick a point deliberately.

## Every configuration is a point with two coordinates

Each way you can run the loop is a point with two coordinates: how good it is, and what it costs.

```ts
export interface ParetoPoint {
  label: string;
  quality: number; // e.g. convergence rate or pass rate
  cost: number; // e.g. cost per converged output
}
```

For the support-reply loop you might have:

| Config | Quality (convergence) | Cost (per converged) |
|---|---|---|
| single-shot | 0.1 | 1 |
| loop, cap 1 | 0.9 | 2 |
| loop, cap 3 | 0.9 | 4 |

## Dropping the dominated configs

A config is dominated when another is at least as good and at least as cheap, and strictly better on one axis. Dominated configs are never worth running, because something beats them on both axes. The Pareto frontier is what's left.

```ts
export function paretoFrontier(points) {
  return points.filter((p) =>
    !points.some((q) => q !== p &&
      q.quality >= p.quality && q.cost <= p.cost &&
      (q.quality > p.quality || q.cost < p.cost)));
}
```

In the table, loop-cap-3 is dominated by loop-cap-1: same 0.9 quality, double the cost. The frontier is single-shot and loop-cap-1, and the Module 5 test asserts exactly that. The insight is concrete. Raising `MAX_REVISIONS` from 1 to 3 bought no quality here and doubled the cost, so cap-3 is strictly wasteful. You'd never have seen that without putting both configs on the same curve.

## Choosing a point on the frontier

The frontier doesn't pick for you. It eliminates the configs that are strictly worse and leaves the real choices, which are genuine trade-offs.

- single-shot (0.1 quality, 1 cost): cheapest, but probably below your quality bar.
- loop-cap-1 (0.9 quality, 2 cost): double the cost for nine times the quality. For support replies, obviously worth it.

Where you sit is a product decision, not an engineering one. A legal-document assistant lives at the high-quality end and pays for it. An internal draft tool may sit cheap. The engineer's job is to compute the frontier so the product decision is made with the trade-off visible, not guessed.

## The module, and the course, in one frame

This is where "reflection is a budget allocation, not a magic wand" lands completely. Reflection isn't on or off, and it isn't always better. It's a position on a cost and quality curve, and the whole module gave you the instruments to find that curve: convergence rate (quality), cost-per-converged-output (cost), A/B and single-pass checks (which points exist), and the frontier (which points are real). You no longer hope the loop is worth it. You place it on the curve and choose.

## Why maxing one axis backfires

Tuning purely for quality (cap revisions high, biggest critic) or purely for cost (never loop), without looking at the frontier, lands you at a dominated point. You end up paying for quality you didn't need, or missing quality you could have afforded cheaply. Plot both axes. Choose a non-dominated point that matches the product's bar.

## In practice

Every config is a point in cost and quality space. The dominated ones are waste. The frontier is your real menu, and where you sit on it is a deliberate product decision made with the trade-off in view. Reflection, finally, is something you allocate: measured, bounded, judged, traced, evaluated, and priced.

This is the last production lesson. The capstone takes the whole stack, the primitive, termination, rubric, tracing, eval, and these production guards, to a brand-new domain to prove the pattern transfers without the notes.

Try it yourself. Add a fourth config to the Pareto test, loop-cap-2 at quality 0.92 and cost 3, and recompute the frontier. Does it join the frontier as a new non-dominated trade-off, or get dominated? Reason about it before you run it, then check. Reading a frontier is the production skill this whole module built toward.

## Key Takeaways

- Each loop configuration is a point with two coordinates: quality (like convergence) and cost (like cost per converged output).
- A config is dominated when another is at least as good and at least as cheap, and strictly better on one axis; dominated configs are never worth running.
- `paretoFrontier` keeps only the non-dominated configs, which is your real menu of choices.
- In the example, loop-cap-3 is dominated by loop-cap-1: same quality, double the cost, so raising the cap bought nothing.
- Where you sit on the frontier is a product decision; the engineer's job is to compute the frontier so that decision is made with the trade-off visible.

## References

Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). Judging LLM-as-a-judge with MT-Bench and Chatbot Arena. In *Advances in Neural Information Processing Systems 36* (pp. 46595 to 46623). Curran Associates. https://arxiv.org/abs/2306.05685

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/
