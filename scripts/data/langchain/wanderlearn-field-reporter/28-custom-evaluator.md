Goal: After this lesson you can write a custom evaluator that wraps the runtime judge and either returns a real score or fails loudly on an infrastructure error.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens the evaluator and its guards in [`examples/support-reply-loop/eval.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/examples/support-reply-loop/eval.ts).

## What an evaluator does

In LangSmith's model, `evaluate(target, { data, evaluators })` runs the target on each example and passes the output to each [evaluator](https://docs.smith.langchain.com/), which returns a score or a label (LangChain, n.d.). A custom evaluator is just your own scoring function. Ours wraps the rubric judge:

```ts
export async function evaluateDraft(judge, ticket, draft) {
  const critique = await scoreAgainstRubric(judge, ticket, draft, 0, supportReplyRubric);
  return { passed: critique.passed, errored: looksLikeErrorFallback(critique) };
}
```

It returns two things, and the second is the lesson: `passed`, the score, and `errored`, whether this is a real measurement at all.

## The Module 3 bug this prevents

Recall Lesson 25. The witus-triage eval folded a fail-soft fallback into its accuracy and reported a fake 8% that was really an unfunded API key (McDonald, n.d.). The defect: the evaluator couldn't tell a bad score from a broken run. Ours can, because it detects the error-fallback signature:

```ts
export function looksLikeErrorFallback(critique) {
  const allFailed = critique.checks.every((c) => !c.passed);
  const hasErrorMarker = critique.checks.some((c) => c.evidence.includes("<error"));
  return allFailed && hasErrorMarker;   // every check failed AND an error is in the evidence
}
```

A draft that genuinely fails every criterion, a weak reply, looks different from one where the judge itself errored. The broken run carries an error marker in its evidence. The evaluator separates "this output is bad" from "this measurement is invalid."

## Failing loudly on a poisoned run

The harness then refuses to report a number for a poisoned run:

```ts
export function assertNoInfraErrors(report) {
  if (report.erroredCount > 0) {
    throw new Error(`Eval aborted: infrastructure failure on ${report.erroredCount} case(s) ` +
      `[${ids}]. This is NOT a measurement. Re-run on a working provider.`);
  }
}
```

The [Module 4 test](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-4/tests/course/module-4-evaluation.test.ts) drives the eval with a fail-soft judge and asserts this throws. The eval aborts loudly rather than reporting 0%. This is the single most important property an eval can have: produce a real number, or fail in a way no one can mistake for a measurement. A silent fake number is worse than a crash, because someone will cite it.

## Wrap the judge, don't re-score it

The evaluator wraps the same judge the loop used, for the same reason as Lesson 26: one standard. If the evaluator scored with a different judge or different criteria, a green eval would no longer certify the runtime loop. Wrapping keeps the eval honest. The only thing the evaluator adds is the validity check, `errored`, which is about the measurement, not the standard.

## The trap to avoid

The failure mode is a credulous evaluator: one that returns a score for every run, including runs where the judge or the model errored. It can't tell a bad output from a broken pipeline, so infrastructure failures get averaged into the metric and reported as if real. Detect the error-fallback and abort loudly.

## In practice

An evaluator returns two things, not one: a score, and whether the score is valid. Wrap the runtime judge so the standard stays single, add a validity check so infrastructure failures can't masquerade as measurements, and make the harness fail loudly on a poisoned run. To see the seam, change `failSoftJudge`'s evidence in the Module 4 suite to drop the `"<error"` marker and re-run the infra-error test. `looksLikeErrorFallback` stops firing, and the run scores a fake 0% instead of aborting. That marker is the difference between a caught infrastructure failure and the witus-triage bug. Put it back.

## Key Takeaways

- A custom evaluator is your own scoring function that LangSmith calls on each example's output.
- This evaluator returns both a score (`passed`) and a validity flag (`errored`).
- It detects the error-fallback signature: every check failed and an error marker sits in the evidence.
- The harness throws on any errored case, so a poisoned run can never be reported as a number.
- A silent fake number is worse than a crash, because someone will cite it.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

McDonald, B. A. (n.d.). *WitUS triage agent* [Computer software]. Retrieved June 4, 2026, from the repository `witus-triage-agent` (`plans/01-fix-accuracy-eval.md`).
