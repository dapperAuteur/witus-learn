Goal: After this lesson you can model human escalation as a first-class terminal state distinct from success.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see it running in [the deployed app](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/termination.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/examples/support-reply-loop/termination.ts) and the builder wiring in [`examples/support-reply-loop/graph.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/examples/support-reply-loop/graph.ts), tested in [`tests/course/module-1-termination.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/tests/course/module-1-termination.test.ts).

## Why this matters

The counter and convergence both stop the loop unresolved. They fire precisely when the draft did not pass. Pattern 3 answers the question those two leave open: what do you do with a draft you decided to stop improving but never made good? You hand it to a human. This lesson models "needs a person" as a first-class terminal state, distinct from success.

## Two ways to stop aren't the same outcome

A reflection loop has exactly two honest endings, and conflating them is a mistake:

- **Resolved.** The critique passed. The output is good enough to ship.
- **Escalated.** The loop stopped (cap or convergence) without passing. A human must own what happens next.

If your loop only has `END`, both endings look identical to everything downstream, and you'll ship an unresolved draft to a customer because nothing distinguished "we fixed it" from "we gave up." Pattern 3 makes the distinction structural.

## The pattern: a terminal node, not just an edge

Escalation is its own node with its own side effect, reached by its own route:

```ts
function markResolved() {
  return { outcome: "resolved" as const };
}

function flagForHuman() {
  return { escalated: true, outcome: "escalated" as const };
}

// in the builder:
  .addNode("mark_resolved", markResolved)
  .addNode("flag_for_human", flagForHuman)
  .addConditionalEdges("critique_reply", routeWithAllPatterns, [
    "write_reply", "mark_resolved", "flag_for_human",
  ])
  .addEdge("mark_resolved", END)
  .addEdge("flag_for_human", END)
```

Now the run ends in one of two named states. `flag_for_human` is where you would, in a real system, open a ticket, page the on-call support lead, or drop the draft into a review queue with the failing critique attached, so the human starts with the diagnosis and not a blank page. The field-reporter agent in this repo does exactly this: its graph routes to a `flag_for_human_review` node when the rubric fails past `MAX_REVISIONS`.

## Why escalation belongs inside the graph

You might think escalation is an application concern: let the caller check `critique.passed` and decide. Two reasons it belongs in the graph:

1. **One source of truth for how it ended.** The graph already knows why it stopped (passed vs. cap vs. convergence). Re-deriving that outside the graph duplicates the logic and invites drift.
2. **It composes with the routing.** Escalation is one of the router's branches, so it sits beside the other exits in priority order (next lesson) rather than in a separate `if` the router can't see.

Ending an unresolved loop at a plain `END` makes a failing draft indistinguishable from a passing one. Downstream code can't tell "shipped" from "gave up," so the gave-up draft gets shipped. The fix is a distinct escalation terminal that carries the outcome.

## In practice

"The loop stopped" and "the loop succeeded" are different claims, and a reliable system encodes the difference. Human escalation isn't an error path bolted on. It's the loop being honest that not every input is one it can resolve alone. Every Module 1 escalation test asserts `outcome === "escalated"` and `escalated === true`, while the success test asserts `outcome === "resolved"`, so the two endings are observable, testable facts. To see what a reviewer would receive, add a `console.log` (or a real notification stub) inside `flagForHuman` that prints the ticket and the failing critique's `feedback`, then re-run the convergence test. A good escalation hands the human the diagnosis; make sure yours does.

## Key Takeaways

- A reflection loop has two honest endings: resolved (the critique passed) and escalated (it stopped without passing).
- If the loop only ends at `END`, downstream code can't tell a shipped draft from a gave-up one, and the gave-up draft gets shipped.
- Pattern 3 makes escalation a named terminal node with its own side effect and outcome, not just an edge.
- Escalation belongs inside the graph: the graph is the one source of truth for how the run ended, and it composes with the router's other branches.
- A good escalation hands the human the failing critique and diagnosis, not a blank page.

## References

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., & Yao, S. (2023). *Reflexion: Language agents with verbal reinforcement learning* (arXiv:2303.11366). arXiv. https://arxiv.org/abs/2303.11366
