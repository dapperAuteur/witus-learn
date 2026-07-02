Goal: After this lesson you can spot a wasted iteration in a trace and reason from the trace about which of its three causes produced it.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the deployed app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/tracing.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/examples/support-reply-loop/tracing.ts) for the `findWastedIterations` function and the trace fixtures in [`tests/course/module-3-tracing.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/tests/course/module-3-tracing.test.ts).

## The first trouble-shape: a revision that moved the score nowhere

The first trouble-shape is a wasted iteration: a revision that cost an LLM call and moved the score nowhere. The loop terminated correctly, because Module 1 guaranteed that, but it spent budget producing drafts no better than the one before. By the end you can spot wasted iterations in a trace and reason about their cause.

## What a wasted iteration looks like in the trace

Read the `passedChecks` down the `critique_reply` spans. A healthy loop climbs:

```
critique_reply  rev 1   2/4 passed
critique_reply  rev 2   4/4 passed      improved, then resolved
```

A wasted iteration is flat or falling:

```
critique_reply  rev 1   2/4 passed
critique_reply  rev 2   2/4 passed      wasted: a call spent, score unchanged
critique_reply  rev 3   4/4 passed
```

Revision two cost a write call and a critique call, and the score didn't move.

## The diagnostic that names it

The diagnostic names the wasted revisions (`examples/support-reply-loop/tracing.ts`):

```ts
export function findWastedIterations(trace: RunTrace): number[] {
  const wasted: number[] = [];
  for (let i = 1; i < trace.steps.length; i++) {
    if (trace.steps[i]!.passedChecks <= trace.steps[i - 1]!.passedChecks) {
      wasted.push(trace.steps[i]!.revisionNumber);
    }
  }
  return wasted;
}
```

It walks the steps and flags any step whose score is less than or equal to the step before it. The Module 3 test feeds it the trace scoring one, then one, then four and asserts it returns `[2]`. In LangSmith you'd see the same thing as a flat run of equal-height critique spans, and you'd click into revision two to ask why it didn't improve.

## Three causes, all read from the trace

A wasted iteration is a symptom. The trace tells you the cause:

1. **The feedback wasn't actionable.** Open revision two's failing criteria. If the `suggestion` was vague, like "make it better", the writer had nothing to act on. That's the Lesson 17 failure showing up downstream. Fix: better suggestions in the rubric.
2. **The writer ignored good feedback.** If the suggestions were specific but the new draft didn't address them, the writer, meaning the model or your write-node prompt, is the problem. Fix: the revise prompt, or a stronger model for the writer.
3. **The criterion is genuinely hard.** Some checks a given model simply can't satisfy. It'll plateau no matter how good the feedback. Fix: lower the bar with Module 2 weights, or escalate sooner.

You can't tell which of the three from the outcome. You can tell instantly from the trace, because the trace carries the suggestion and the next draft side by side.

## Why wasted iterations cost real money

Every wasted iteration is real money and latency. Module 5 makes this a tracked metric, average iterations and cost-per-converged-output. A loop that resolves in two passes but usually wastes one is paying fifty percent overhead you can often remove by fixing the rubric's suggestions. The trace is how you find the waste before the bill does.

Correct termination isn't the same as efficient termination. A loop can stop properly and still squander half its passes, and the only way to see it is the score trajectory in the trace. Flat critique spans are money on the floor.

## In practice

Open `tests/course/module-3-tracing.test.ts` and change the wasted-iteration trace to `passedChecks` two, then three, then four, a steady climb, and watch `findWastedIterations` return an empty array. Then make it two, then two, then two and watch it flag `[2, 3]`, both non-improving steps. You're reading the score trajectory the same way you'd scan critique-span heights in LangSmith: a step that doesn't rise above the one before it is a wasted pass, and picking those up is often the cheapest win in the whole loop.

## Key Takeaways

- A wasted iteration is a revision that spent a write call and a critique call without raising the score.
- You spot it as flat or falling `passedChecks` down the `critique_reply` spans; `findWastedIterations` flags any step no higher than the one before.
- The three causes are unactionable feedback, a writer that ignores good feedback, and a genuinely hard criterion, and each has a different fix.
- The trace tells them apart because it carries the suggestion and the next draft side by side; the outcome can't.
- Correct termination isn't efficient termination; wasted passes are tracked cost you find in the trajectory before the bill.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U.,
Dziri, N., Prabhumoye, S., Yang, Y., Welleck, S., Majumder, B. P., Gupta, S.,
Yazdanbakhsh, A., & Clark, P. (2023). *Self-Refine: Iterative refinement with
self-feedback* (arXiv:2303.17651). arXiv. https://arxiv.org/abs/2303.17651
