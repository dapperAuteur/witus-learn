Goal: After this lesson you can compose the three termination patterns into one router and defend the priority order of its branches.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see it running in [the deployed app](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/termination.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/examples/support-reply-loop/termination.ts) and [`tests/course/module-1-termination.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/tests/course/module-1-termination.test.ts).

## Why this matters

You have three exits, counter, convergence, and escalation, plus the revise edge. This lesson composes them into one router, and the lesson is the order. The branches must be checked in a deliberate priority, because more than one can be true at once and the order changes the outcome.

## One router, four branches

```ts
export function routeWithAllPatterns(state): TerminationRoute {
  const { critique } = state;
  if (!critique) throw new Error("critique must run before routing.");

  if (critique.passed) return "mark_resolved";                 // 1. success
  if (hasConverged(state.history)) return "flag_for_human";    // 2. stalled
  if (state.revisionNumber >= MAX_REVISIONS) return "flag_for_human"; // 3. cap
  return "write_reply";                                        // 4. revise
}
```

Four mutually exclusive outcomes from a top-to-bottom cascade. The cascade is the point: at the moment of routing, several conditions can hold at once, and the first matching branch wins.

## Why this exact order

Read each adjacency and the bug the order prevents:

- **Success first, above everything.** If the draft passed, you ship it, even if it also happens to be the third revision (cap) or identical to the last (convergence). A draft that passes on the final allowed pass is a win, not an escalation. Put the cap check first and you'd escalate a perfectly good reply. Success must dominate.
- **Convergence before the cap.** Both route to a human, so the order seems not to matter. But it changes when and why. Checking convergence first lets the loop escalate at revision 2 (the stall) instead of grinding to revision 3 (the cap) to reach the same human. Same destination, two fewer wasted LLM calls, and a truer reason recorded for why it escalated.
- **Cap before revise, always last among the stoppers.** The counter is the backstop. It only gets to act if nothing smarter already stopped the loop. It sits just above the revise branch, so it's the final gate before another pass.
- **Revise is the default.** Only if no exit condition holds does the loop spend another iteration. "Keep going" is what you do when no reason to stop has fired yet, never the other way around.

## Stop conditions are a priority list, not a set

Here's the deep idea, redeployable far beyond this loop: when several termination conditions can be simultaneously true, termination is a priority-ordered list, not an unordered set. Success beats give-up. Cheap give-up beats expensive give-up. The hard backstop is last. Get the order wrong and you don't get a crash. You get a subtly wrong outcome, a good draft escalated or a stall ground out to the cap, that no type checker will catch. The order is a design decision. Make it on purpose and write it down.

## In practice

Termination isn't one trick. It's a small ordered policy: succeed if you can, give up cheaply if you must, and never run unbounded. Stacking checks in whatever order they were added type-checks and passes the happy-path test, but it mis-routes exactly the edge cases termination exists to handle. The Module 1 tests probe the overlaps on purpose: the success test uses a writer that passes on a revision (success beats cap), the convergence test uses a stalling writer (convergence beats cap, escalating at 2 not 3), and the counter test uses an always-different failing writer (only the cap can fire). To feel why priority is a correctness property and not a style preference, move the `MAX_REVISIONS` check above the `critique.passed` check and re-run. The success test fails when a draft passes on the capped revision. Restore the order.

## Key Takeaways

- One router holds four mutually exclusive branches, checked top to bottom, and the first match wins.
- The order is: success, then convergence, then cap, then revise.
- Success must be first so a draft that passes on the final allowed pass ships as a win instead of escalating.
- Convergence sits before the cap so a stall escalates early (revision 2) instead of grinding to the cap (revision 3).
- When several stop conditions can be true at once, termination is a priority-ordered list, not an unordered set.
- Getting the order wrong produces no crash, just a subtly wrong outcome no type checker catches.

## References

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U., Dziri, N., Prabhumoye, S., Yang, Y., Welleck, S., Majumder, B. P., Gupta, S., Yazdanbakhsh, A., & Clark, P. (2023). *Self-Refine: Iterative refinement with self-feedback* (arXiv:2303.17651). arXiv. https://arxiv.org/abs/2303.17651
