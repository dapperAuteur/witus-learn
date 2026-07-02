Goal: After this lesson you can make "the supervisor runs first and the synthesizer runs last" a structural guarantee, and test it with no API keys.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/graph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-07/src/graph.ts) and [`tests/topology.test.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-07/tests/topology.test.ts).

## Ordering as a property of the graph, not the prompt

"The supervisor runs before any specialist, and the synthesizer runs last." In a lot of agent code that sentence is a hope. It holds because the prompt asks the model to behave, or because the author remembered to call things in the right order. This lesson makes it a structural guarantee instead: the graph's shape makes the wrong order unrepresentable.

A LangGraph graph is a directed graph of nodes and edges; execution follows the edges (LangChain, 2025). Look at the coach's wiring:

```ts
new StateGraph(CoachAnnotation)
  .addNode("supervisor", supervisorNode)
  .addNode("nutrition", nutritionNode)
  // ...workout, recovery, corrective
  .addNode("synthesize", synthesizeNode)
  .addEdge(START, "supervisor")
  .addConditionalEdges("supervisor", routeToSpecialists,
    ["nutrition", "workout", "recovery", "corrective", "synthesize"])
  .addEdge("nutrition", "synthesize")
  // ...workout, recovery, corrective -> synthesize
  .addEdge("synthesize", END)
  .compile();
```

Read the edges, not the intentions:

- `START` goes only to `supervisor`. There's no path that reaches a specialist without first passing through the supervisor, so `state.routing` always exists before a specialist runs.
- Specialists are reachable only through the conditional edge out of the supervisor.
- Every specialist's only out-edge is to `synthesize`; `synthesize`'s only out-edge is `END`. The synthesizer can't run before the specialists, and nothing runs after it.

The ordering isn't enforced by discipline. It's enforced because no other order is expressible in this graph.

## Proving it with a test

A guarantee you don't test is a guarantee you only believe. The repo proves the ordering in [`tests/topology.test.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-07/tests/topology.test.ts), which mocks the LLM and retrieval (so it runs with no API keys) and streams the graph's node-completion order:

```ts
const stream = await coachGraph.stream(
  { sessionId: "topology", userQuery },
  { streamMode: "updates" },
);
for await (const chunk of stream) {
  for (const node of Object.keys(chunk)) order.push(node);
}
// assert: order[0] === "supervisor", last === "synthesize",
//         every specialist index between the two.
```

It asserts the invariant for both a single-specialist route and a full fan-out, so ordering holds regardless of how wide the fan-out is. `streamMode: "updates"` emits one chunk per node as it finishes, which is exactly the signal you need to observe order (LangChain, 2025). Run it:

```bash
pnpm test tests/topology.test.ts
```

## Why this matters beyond tidiness

Two reasons. First, trust: because ordering is structural, every node can assume the state it depends on already exists, so specialists never check "did the supervisor run yet?" Second, debuggability: when a multi-agent system misbehaves, "did it run in the right order?" is the first question, and here the answer is a property of the compiled graph you can inspect and test, not a behavior you have to reproduce.

## In practice

Open `tests/topology.test.ts` and run it green. Then, in a scratch copy of `src/graph.ts`, try to express a wrong order, for example add an edge from a specialist back to `supervisor`. Re-run the topology test and watch the "supervisor first, synthesize last" invariant catch it. The exercise is to feel that the test is checking the structure, not the model's behavior, which is why it needs no keys and never flickers.

## Key Takeaways

- Ordering is a property of the graph's edges, not the prompt: START reaches only the supervisor, specialists reach only synthesize, and synthesize reaches only END.
- No other execution order is expressible in the compiled graph, so the guarantee holds by construction.
- `tests/topology.test.ts` mocks the model and retrieval and streams node order, so it runs with no API keys and never flickers.
- It asserts the invariant for both a single route and a full fan-out.
- Structural ordering buys trust (nodes assume their inputs exist) and debuggability (order is inspectable, not reproduced).

## References

LangChain. (2025). *LangGraph documentation: Graph API and streaming modes*. https://langchain-ai.github.io/langgraphjs/

Vitest. (2025). *Vitest documentation*. https://vitest.dev
