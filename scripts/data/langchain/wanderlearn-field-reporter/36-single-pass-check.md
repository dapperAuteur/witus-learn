Goal: After this lesson you can measure whether a single pass already clears your rubric and gate the entire reflection loop behind that check.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). On screen this lesson opens [`examples/support-reply-loop/production.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-5/examples/support-reply-loop/production.ts) and [`tests/course/module-5-production.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-5/tests/course/module-5-production.test.ts).

## The cheapest loop is the one you skip

The cheapest reflection loop is the one you don't run. After five modules of building loops, this lesson asks the question that can delete the whole apparatus for a given task: is a single pass already good enough? If it is, looping spends multiples of the cost for nothing. By the end you can make "should this even loop?" a measured decision instead of a default.

## The default that quietly costs you

It's easy to reach for a reflection loop because you have one and it's sophisticated. But for many inputs, a single well-prompted pass already clears the rubric. On those inputs the write, critique, and revise cycle is pure overhead: extra latency, extra calls, identical result. The discipline is to check first whether you need to loop at all.

The check is one comparison against your existing eval.

```ts
export function singlePassGoodEnough(
  singleShotReport: EvalReport,
  threshold: number,
): boolean {
  return singleShotReport.passRate >= threshold;
}
```

Run the single-shot baseline on your dataset. If its pass rate already meets the bar, ship single-shot and skip the loop. The Module 5 test shows both outcomes. With a weak single-shot writer the check says loop (0% single-shot). With a strong single-shot writer it says don't loop: the single pass already passes nine of ten, so the loop would add cost for no gain.

## A gate in front of the graph

In production this is a gate that sits in front of the reflection loop, decided per task and re-checked as models improve.

1. Measure single-shot quality on a representative dataset. You already have the eval.
2. If it clears the threshold with margin, ship single-shot. The loop is unjustified.
3. If it doesn't, loop, and use the rest of Module 5 to keep the loop honest.

This is the production form of Module 4's pairwise lesson. Pairwise told you whether the loop beats single-shot. This gate acts on that answer by not running the loop when the margin is zero. As models get better, single-shot quality rises, so a loop that was justified last year may not be this year. Re-run the check. Don't assume yesterday's answer still holds.

## Why not looping is honest engineering

A course that spent five modules teaching reflection loops and never asked "do you need one?" would be selling a hammer. The honest move, and the one that marks engineering judgment over pattern-collecting, is to make not looping a first-class, measured option. The best reflection loop for a task is sometimes no reflection loop.

## Why looping by default wastes money

Running the reflection loop on every input because you built one, without ever checking whether a single pass already clears the bar, is the trap. On easy inputs the loop is pure overhead: multiples of the cost for an identical result. Gate the loop behind a single-pass check, and you stop paying for revisions the input never needed.

## In practice

Before you spend a loop's cost, ask whether one pass already wins, and measure it rather than assume. If single-shot clears the bar with margin, skip the loop. The cheapest reflection is none. Re-check as models improve, because the answer drifts. Reflection is a budget allocation, and sometimes the right allocation is zero.

Try it yourself. In the Module 5 test, change the threshold in the single-pass check from 0.8 to 0.95 and re-run. Watch the strong single-shot (about 0.9) now fail the check, which flips the decision back to loop. The threshold you pick is the line between "good enough to ship as-is" and "worth the loop." Set it where your product actually needs quality, not at a reflex 100%.

## Key Takeaways

- The single-pass check decides whether to run the loop at all by comparing the single-shot pass rate to a threshold.
- If single-shot already clears the bar with margin, ship it and skip the loop, because the loop then adds cost for no gain.
- Put the check as a gate in front of the loop, decided per task, and re-run it as models improve.
- It's the production form of Module 4's pairwise comparison: pairwise measures the margin, the gate acts on it.
- The threshold is a product decision; set it where your product needs quality, not at a reflex 100%.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U., Dziri, N., Prabhumoye, S., Yang, Y., Welleck, S., Majumder, B. P., Gupta, S., Yazdanbakhsh, A., & Clark, P. (2023). *Self-Refine: Iterative refinement with self-feedback* (arXiv:2303.17651). arXiv. https://arxiv.org/abs/2303.17651
