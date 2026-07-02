Goal: After this lesson you can A/B two critic models on the same dataset and rubric, then decide on quality per cost instead of quality alone.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). On screen this lesson opens [`examples/support-reply-loop/production.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-5/examples/support-reply-loop/production.ts) and [`tests/course/module-5-production.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-5/tests/course/module-5-production.test.ts).

## The critic is an LLM, and you get to choose it

The critic is an LLM, and you have a choice of which one. A bigger critic model may judge more accurately, but it costs more per call, and the loop calls the critic on every criterion of every revision. This lesson uses an A/B test to decide whether a more expensive critic earns its price. By the end you can compare two critic models on quality and weigh the result against cost.

## The critic runs far more than the writer

In a reflection loop the critic runs much more than the writer: one critique call per criterion per revision. With a four-criterion rubric and two revisions, that's eight critic calls against one or two writer calls.

So the critic model dominates both the cost and the quality of the loop. A better critic catches more real defects and raises convergence. A pricier one multiplies your bill faster than any other choice. That makes "which critic model?" one of the highest-impact production decisions, and one you should measure instead of guess.

## Comparing two critics on pass rate

Run the same loop on the same dataset with two different judges (critic models) and compare the pass rate each produces.

```ts
export function abCompare(a: EvalReport, b: EvalReport): ABResult {
  let winner: "A" | "B" | "tie" = "tie";
  if (a.passRate > b.passRate) winner = "A";
  else if (b.passRate > a.passRate) winner = "B";
  return { aPassRate: a.passRate, bPassRate: b.passRate, winner };
}
```

The Module 5 test A/Bs a working critic against a broken one and asserts the working critic wins. In production you'd A/B two real critics, say a small fast model against a larger one, on a slice of live traffic. You hold the writer and rubric fixed so the only variable is the critic. It's the same reuse-the-rubric discipline from Module 4: the comparison is fair because both critics are scored against the same standard.

## Quality first, then weigh the cost

The A/B gives you the quality delta. The decision combines it with the cost delta.

- Big quality win, modest cost increase: upgrade the critic. The extra convergence pays for the extra calls.
- Tiny quality win, large cost increase: keep the cheaper critic. You're paying a lot for a little, which is the Module 4 pairwise margin applied to the critic.
- No quality difference: always take the cheaper critic. A pricier model that judges no better is pure waste.

The trap is A/B-ing on quality alone and "upgrading" to a critic that wins by 1% at triple the cost. The metric that decides is quality per cost, which is the Pareto framing in Lesson 37.

## Why bigger is not automatically better

It's tempting to default to the largest available model for the critic because it "judges better." Do that without A/B-ing the quality gain against the cost, and you get the module's classic waste. Since the critic runs every criterion every revision, an oversized critic is where loops quietly bleed money for marginal quality. Measure the delta. Upgrade only when it pays.

## In practice

The critic model is the loop's dominant lever for both cost and quality, because it runs far more than the writer. Choose it with an A/B on the same dataset and the same rubric, then decide on quality per cost, never on quality alone. A pricier critic earns its place only when the convergence it buys is worth the calls it adds.

Try it yourself. In the Module 5 test, replace the broken `failSoftJudge` in the A/B with a second good judge: copy `datasetJudge` and weaken one criterion's cue so it passes slightly fewer cases. Run `abCompare` and read the small delta. Then ask the real question: if that second judge were cheaper, would the tiny quality loss be worth it? That question is the lesson.

## Key Takeaways

- The critic runs once per criterion per revision, far more than the writer, so it dominates both the loop's cost and its quality.
- A/B two critics by running the same loop on the same dataset and rubric, changing only the critic, and compare pass rates.
- `abCompare` returns each pass rate and the winner, giving you the quality delta.
- Decide on quality per cost: upgrade on a big win for modest cost, keep the cheaper critic on a tiny win, and always take the cheaper one when quality ties.
- Defaulting to the biggest critic without measuring the delta is where loops bleed money for marginal quality.

## References

Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). Judging LLM-as-a-judge with MT-Bench and Chatbot Arena. In *Advances in Neural Information Processing Systems 36* (pp. 46595 to 46623). Curran Associates. https://arxiv.org/abs/2306.05685

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/
