Goal: After this lesson you can detect convergence in a reflection loop and exit early when revising stops changing the draft.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see it running in [the deployed app](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/termination.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/examples/support-reply-loop/termination.ts) and [`tests/course/module-1-termination.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/tests/course/module-1-termination.test.ts).

## Why this matters

The counter guarantees the loop stops. It doesn't make the loop smart about stopping. Pattern 2 adds the intelligence: detect when revising has stopped changing anything, and exit early instead of burning the rest of the budget on identical drafts.

## The waste the counter leaves on the table

Run the bounded loop with a writer that keeps emitting the same failing draft. The counter still saves you, stopping at `MAX_REVISIONS`. But look at what happened in between: the loop ran the full budget, producing the identical bad draft three times, paying for three critique passes that could never have changed the outcome. The counter caught the runaway. It didn't catch the stall. A stall is its own failure mode (Lesson 7's stalled writer). Spending three LLM calls to confirm the writer is stuck is three calls too many.

## The pattern

"Converged" means the loop's output has stopped moving. The simplest honest test is exact equality of consecutive drafts:

```ts
export function hasConverged(history: { draft: string }[]): boolean {
  if (history.length < 2) return false;
  const latest = history[history.length - 1]!.draft.trim();
  const previous = history[history.length - 2]!.draft.trim();
  return latest === previous;
}
```

If the two most recent drafts are identical, the writer is no longer responding to the critique. Another pass will produce the same draft, fail the same checks, and waste the same tokens. So the router treats convergence as a reason to stop now:

```ts
if (critique.passed) return "mark_resolved";
if (hasConverged(state.history)) return "flag_for_human";   // Pattern 2
if (state.revisionNumber >= MAX_REVISIONS) return "flag_for_human";
return "write_reply";
```

Note where a converged-but-failing run goes: to a human (Lesson 10), not to `END`. Convergence tells you the loop is done trying. It doesn't tell you the answer is good. Those are different facts, and they route differently.

## Convergence in the real world

Exact-match keeps this lesson deterministic and offline, but production loops rarely emit byte-identical drafts. Two stronger signals, same idea:

- **Semantic convergence.** Embed consecutive drafts and stop when cosine distance falls below a threshold. This catches "changed three words, same draft."
- **Score convergence.** Stop when the critique score stops improving across passes (delta below a threshold), even if the text keeps churning. This reuses the rubric you build in Module 2, and it's often the most reliable signal.

All three are the same pattern: define a measure of movement, and exit when movement falls below a floor. Pick the measure your domain can compute cheaply and trust.

## In practice

A bounded loop should stop for the right reason, as early as it honestly can. The counter is the backstop. Convergence is the early, intelligent exit. Together they mean the loop spends LLM calls only while those calls might still change the answer. Letting a loop run its full budget after its output has stopped changing conflates "the loop is bounded" (true, thanks to the counter) with "the loop is making progress" (false). Detect the stall and exit.

Run the second Module 1 test to see the early exit:

```bash
npm run test -- tests/course/module-1-termination.test.ts
```

It drives the bounded loop with a writer that returns the same draft every pass, and asserts the run escalates at revision 2, the first repeat, strictly before the hard cap. That gap between 2 and `MAX_REVISIONS` is the budget convergence detection just saved you. For a feel of the tradeoff, change `hasConverged` to compare the last three drafts instead of two, so it requires two consecutive repeats before declaring a stall, then re-run and reason about how the escalation revision shifts. The right threshold depends on how noisy your writer is.

## Key Takeaways

- Convergence detection exits early when the loop's output has stopped moving, before the counter's hard cap.
- The simplest honest test is exact equality of the two most recent drafts, after trimming whitespace.
- A converged-but-failing run routes to a human, not to `END`: convergence means the loop is done trying, not that the answer is good.
- Production signals include semantic convergence (cosine distance below a threshold) and score convergence (critique score stops improving).
- All three are one pattern: measure movement, and exit when movement falls below a floor.

## References

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U., Dziri, N., Prabhumoye, S., Yang, Y., Welleck, S., Majumder, B. P., Gupta, S., Yazdanbakhsh, A., & Clark, P. (2023). *Self-Refine: Iterative refinement with self-feedback* (arXiv:2303.17651). arXiv. https://arxiv.org/abs/2303.17651
