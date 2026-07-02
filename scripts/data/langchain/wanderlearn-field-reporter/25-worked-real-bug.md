Goal: After this lesson you can recognize a fail-soft node masking a total failure, and say what the trace shows that green tests and clean output hide.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the deployed app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/tracing.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/examples/support-reply-loop/tracing.ts) for the `detectFailSoftMasking` function and the fail-soft fixture in [`tests/course/module-3-tracing.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/tests/course/module-3-tracing.test.ts). The `classify`-node snippet it walks through comes from the sibling `witus-triage-agent`, quoted here to show the shape.

## A real bug, not an induced one

Everything so far has been failure modes we induced on purpose. This lesson is a real bug from a shipped agent, a sibling product in this same ecosystem, where the trace was the only thing that revealed it. It's the all-zeros trajectory from Lesson 24, in the wild, and it teaches the module's hardest lesson: a fail-soft node can make a totally broken system look completely healthy.

## The symptom: green tests, useless output

The `witus-triage-agent` is a LangGraph agent that classifies inbound messages into categories with a confidence score. Early in its life, every classification came back identical: category `"other"`, confidence zero. Not some. Every single one. And here's the part that makes this a Module 3 lesson and not a Module 1 one: the runs did not error. The test suite stayed green (McDonald, n.d.).

Nothing threw. No exception, no stack trace, no failed assertion. By every signal a normal debugging workflow looks at, the system was fine. It was completely broken.

## The cause: a fail-soft node catching everything

The `classify` node is fail-soft, exactly the posture Lesson 20 said is correct for keeping a graph moving. On any LLM error it returns an `"other"` and confidence-zero fallback so that one bad input can't crash the whole graph:

```ts
// classify node, simplified: the fallback that hid the bug
try {
  return await model.withStructuredOutput(Schema).invoke(prompt);
} catch (err) {
  return { category: "other", confidence: 0, rationale: String(err) };
}
```

That safety net was silently catching every call. The output it produced, `"other"` and zero, is a valid-looking result: a real category, a real number. So the output assertions saw well-formed data and passed. The fallback meant for one bad input was swallowing all of them, and because it failed soft, it failed invisibly.

## The trace carried the real error

The output said `confidence: 0`. The trace said something completely different. The LangSmith model-call span, the child span under `classify`, the one the output threw away, carried the actual error the fallback had swallowed: "Your credit balance is too low to access the Anthropic API." (McDonald, n.d.).

It wasn't a code bug at all. It was an unfunded API key. Every model call was being rejected for billing, every rejection was caught by the fail-soft fallback, and every fallback became a clean-looking `"other"` and zero. The output couldn't show you this, because by the time the fallback ran, the error was gone. The trace showed it, because the trace records the model-call span including its error, before any fallback rewrites the result. That's the module's thesis in one bug: tracing makes bugs legible, not rarer. The trace didn't prevent the unfunded key. It made an invisible, green-passing, total failure visible in one click.

## The same shape in our loop

You can reproduce the shape exactly in the support-reply loop. A fail-soft judge, one that swallows an error and blanket-returns "fail" for every criterion, makes the loop escalate every ticket while looking unalarming. The Module 3 code detects it (`examples/support-reply-loop/tracing.ts`):

```ts
export function detectFailSoftMasking(trace: RunTrace): boolean {
  const distinctDrafts = new Set(trace.steps.map((s) => s.draft.trim())).size;
  const everPassedAnyCheck = trace.steps.some((s) => s.passedChecks > 0);
  return distinctDrafts >= 2 && !everPassedAnyCheck;   // tried real drafts, scored nothing, ever
}
```

It returns `true` when the loop tried at least two distinct drafts and yet no draft ever passed a single check. The Module 3 test drives the loop with a fail-soft judge and asserts two things that together are the whole lesson. The output is just `outcome: "escalated"`, green and unalarming. The trace shows that even a known-strong draft scored zero of four, the masked failure. Output says "escalated". Trace says "the critic never worked."

## Fail-soft hides bugs, so make the soft failure loud somewhere

Lesson 20 told you fail-soft is correct for infrastructure. This bug is the cost of that correctness. A fallback that keeps the graph moving also keeps the failure moving, silently, into your output. The resolution isn't to remove fail-soft. It's to make the soft failure visible where it matters:

- **In the trace.** The error must survive on the span even when the fallback hides it from the output. LangSmith does this for you, and it's why you trace.
- **In the evals.** This same bug poisoned `witus-triage`'s accuracy eval. The fallback results folded into the score and reported a fake eight percent that was really an infrastructure failure, not a measurement (McDonald, n.d.). The fix, detect the error-fallback signature (confidence zero plus an error in the rationale) and fail the eval loudly rather than score it, is exactly the bridge into Module 4.

## In practice

Run the Module 3 fail-soft test and read both assertions: `npm run test -- tests/course/module-3-tracing.test.ts`. One asserts the output is a bland "escalated". The other asserts the trace shows a known-strong draft scoring zero.

```bash
npm run test -- tests/course/module-3-tracing.test.ts
```

Then imagine changing `detectFailSoftMasking` to also require that a known-strong draft was among the zero-scored ones, and reason about whether that makes the detector stronger or more brittle. It's the real tension: the more you encode "should have passed", the more you must know the right answer, which is what an eval dataset gives you.

Look back at Lesson 19: tracing makes bugs legible, not rarer. You've now seen it on a real shipped agent. A fail-soft node, the very thing that keeps your graph alive, can turn a total, billing-level failure into clean-looking output that passes every test. The output can't save you, because the fallback already erased the evidence. The trace can, because it records what actually happened before the fallback rewrote it. That eval, the one this bug poisoned, is Module 4: turning the runtime rubric into an offline regression test that fails loudly instead of lying quietly.

## Key Takeaways

- A fail-soft node can make a totally broken system look healthy: every classification returned `"other"` and confidence zero, and the tests stayed green.
- The output threw the real error away; the trace kept it on the model-call span: an unfunded API key, rejected for billing on every call.
- Valid-looking fallback output (`"other"`, zero) passes output assertions, so shape-based tests can't catch this class of bug.
- `detectFailSoftMasking` flags the signature: two or more distinct drafts attempted, yet not one check ever passed.
- The fix isn't to drop fail-soft; it's to make the soft failure loud in the trace and in the evals, where the same bug reported a fake eight percent accuracy.
- This is the module's thesis on a real agent: tracing makes bugs legible, not rarer, and it's the bridge into Module 4's loud-failing evals.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

McDonald, B. A. (n.d.). *WitUS triage agent* [Computer software]. Retrieved June 4, 2026,
from the repository `witus-triage-agent` (`README.md`, "A real bug, found in a trace";
`plans/01-fix-accuracy-eval.md`).
