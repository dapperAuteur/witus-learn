Goal: After this lesson you can compose a capstone reflection graph that reuses Module 1's router and state and Module 2's scorer, writing only two thin nodes and one rubric argument.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/capstone-plain-language/index.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/capstone-plain-language/index.ts), which reuses the state and router from [`termination.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/support-reply-loop/termination.ts) and the scorer from [`rubric.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/support-reply-loop/rubric.ts).

## The loop, assembled from imports

With the rubric written, the graph almost builds itself, because the graph is reused, not rewritten. Here's the whole capstone graph (`examples/capstone-plain-language/index.ts`):

```ts
export function buildPlainLanguageLoop(writer, judge) {
  async function writeRewrite(state) {
    const draft = await writer({ ticket: state.ticket, draft: state.draft, critique: state.critique });
    return { draft, revisionNumber: state.revisionNumber + 1, history: [{ revisionNumber: …, draft }] };
  }
  async function critiqueRewrite(state) {
    const critique = await scoreAgainstRubric(judge, state.ticket, state.draft ?? "", state.revisionNumber, plainLanguageRubric);
    return { critique };
  }
  return new StateGraph(TerminatingReplyStateAnnotation)        // M1 state, reused
    .addNode("write_reply", writeRewrite)
    .addNode("critique_reply", critiqueRewrite)
    .addNode("mark_resolved", () => ({ outcome: "resolved" }))
    .addNode("flag_for_human", () => ({ escalated: true, outcome: "escalated" }))
    .addEdge(START, "write_reply")
    .addEdge("write_reply", "critique_reply")
    .addConditionalEdges("critique_reply", routeWithAllPatterns, [  // M1 router, reused verbatim
      "write_reply", "mark_resolved", "flag_for_human",
    ])
    .addEdge("mark_resolved", END)
    .addEdge("flag_for_human", END)
    .compile();
}
```

Look at what's new and what's reused:

- **Reused verbatim:** `TerminatingReplyStateAnnotation` (Module 1 state, with the history and escalation channels), `routeWithAllPatterns` (Module 1's success, convergence, cap, revise priority router), and `scoreAgainstRubric` (Module 2's scorer). The termination guarantees, the convergence detection, and the escalation terminal all carry over for free.
- **New:** two node bodies, `writeRewrite` and `critiqueRewrite`. They're thin. They call the injected writer and the reused scorer, and they pass `plainLanguageRubric` instead of the support rubric. That single argument is the entire domain-specific change in the graph.

## Why the router needs no changes

This is the payoff of building termination as a generic function in Module 1. `routeWithAllPatterns` reads only `critique.passed`, `revisionNumber`, and the draft history, none of which is domain-specific. So the capstone inherits, with zero new code: the hard `MAX_REVISIONS` cap, convergence detection (the legalese-saturated clause escalates by convergence when the rewriter stalls on it), and a distinct human-escalation terminal. A domain-coupled router would have forced you to re-derive all three. A generic one just works.

## The writer is still injected

As in every module, the writer is a parameter. The capstone's offline stand-in, `plainRewriter`, produces a short, direct rewrite that echoes the clause's key term. A real run injects a chat-model writer prompted to rewrite legalese into plain language. The graph doesn't change either way. The same reuse-the-injection discipline from Module 0 means swapping in a real model is a one-line change, not a graph rewrite.

## In practice

Composing the capstone graph is mostly naming what you reuse. The state and the router come from Module 1 unchanged, the scorer from Module 2, and the writer is injected as always. The only new code is two thin nodes that hand the reused scorer your new rubric. A new domain costs you a rubric and a dataset, not a new graph, which is the strongest possible evidence the pattern is durable.

One coupling is worth feeling directly. In `buildPlainLanguageLoop`, the node names are `write_reply` and `critique_reply`, reused so they match `routeWithAllPatterns`'s expected targets. Rename them to `write_rewrite` and `critique_rewrite` and the build breaks, because the router's target list no longer matches. Restore them. That coupling is the seam where reuse meets your domain, so mind it.

The next lesson proves the loop works and measures what it costs, again by reusing helpers you already have.

## Key Takeaways

- The capstone graph is reused, not rewritten. State and router come from Module 1, and the scorer from Module 2.
- The only new code is two thin nodes, `writeRewrite` and `critiqueRewrite`, and they differ from support only by passing `plainLanguageRubric`.
- `routeWithAllPatterns` needs no changes because it reads `critique.passed`, `revisionNumber`, and history, none of which is domain-specific.
- The capstone inherits the hard cap, convergence detection, and the escalation terminal for free.
- The writer stays injected, so swapping the offline stand-in for a real chat model is a one-line change.

## References

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., & Yao, S. (2023). *Reflexion: Language agents with verbal reinforcement learning* (arXiv:2303.11366). arXiv. https://arxiv.org/abs/2303.11366
