Goal: After this lesson you can add a whole new specialist by touching exactly six places, and see why every earlier isolation decision is what makes that possible.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/agents/corrective/retrieval.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-25/src/agents/corrective/retrieval.ts), [`src/agents/corrective/subgraph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-25/src/agents/corrective/subgraph.ts), [`src/state.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-25/src/state.ts), [`src/agents/supervisor/routing.schema.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-25/src/agents/supervisor/routing.schema.ts), and [`src/graph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-25/src/graph.ts).

## The lesson the whole course was building toward

This isn't another feature. It's the shape of adding one. Fit T. Cent 3.0 ships a fourth specialist, Corrective Exercise, that you haven't studied yet. We use it as the worked example, because adding it touched exactly six places and nothing else. That containment is the payoff of every isolation decision in Modules 1 to 3.

## The six-point checklist

To add the Corrective specialist, someone made these changes and no others:

1. **A namespace and corpus.** Documents seeded into `corrective_kb` in `coach_kb` (Module 2). One namespace, one seed source.
2. **A retrieval module.** [`src/agents/corrective/retrieval.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-25/src/agents/corrective/retrieval.ts): `retrieveCorrectiveKb` passes `"corrective_kb"` to `matchCoachKb`. One word different from Nutrition's.
3. **A subgraph.** [`src/agents/corrective/subgraph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-25/src/agents/corrective/subgraph.ts): its own `CorrectiveAnnotation` (with no `findings` channel, so isolation is free, Module 2), and an adapter `correctiveNode` that writes only `findings.corrective`.
4. **The type union.** Add `"corrective"` to `Agent` and a slot to `FindingsMap` in [`src/state.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-25/src/state.ts).
5. **The routing schema and prompt.** Add `"corrective"` to `AgentEnum` in [`routing.schema.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-25/src/agents/supervisor/routing.schema.ts) and one line describing its domain to the supervisor's system prompt.
6. **Register it in the graph.** [`src/graph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-25/src/graph.ts): `addNode("corrective", correctiveNode)`, add it to the fan-out targets, and add the edge to `synthesize`.

That's the entire diff. The synthesizer already loops over all agents, so it picked up Corrective with no change; the merge reducer already handles a new findings key; the topology test already asserts ordering for any specialist.

## A specialist can be simpler than the template

Corrective is the simplest specialist on purpose: its graph is just `retrieve → compose → END`, with no `assess` and no tools, because the v1 corrective agent has no calculator or wearable mock to call. That shows the template flexes: a specialist needs a namespace and a compose step; tools and an assess node are optional. Start a new specialist at this minimum and add an assess or tools node only when it actually has a tool.

## In practice

Every earlier module removed a reason adding a specialist would be hard. Per-agent namespacing (Module 2) means the new corpus doesn't disturb the others. Type-enforced isolation (Module 2) means the new specialist can't leak or be leaked into. The merge reducer (Module 3) means parallel fan-out absorbs it. The eval suite (Module 4) means you can measure whether it routes correctly. Trace it end to end: ask "my right shoulder rounds forward when I press overhead, how do I fix it?", and in the LangSmith trace watch the supervisor route to `corrective` and the `retrieve → compose` subgraph run. Then open the six files above and confirm the change really is contained to them. That's the map you'll follow to add your own.

## Key Takeaways

- Adding a specialist is a six-point change: namespace, retrieval module, subgraph plus adapter, type union, routing schema plus prompt, and graph registration.
- The Corrective specialist proves it: nothing outside those six places changed.
- The synthesizer, merge reducer, and topology test needed no changes, because they were built to handle any specialist.
- The template flexes: a specialist needs only a namespace and a compose step; assess and tools nodes are optional.
- The containment is the payoff of the isolation work in Modules 1 to 3, which is why this is a launching pad, not a wall.

## References

LangChain. (2025). *LangGraph documentation: Subgraphs and multi-agent systems*. https://langchain-ai.github.io/langgraphjs/

Saltzer, J. H., & Schroeder, M. D. (1975). The protection of information in computer systems. *Proceedings of the IEEE, 63*(9), 1278-1308. https://doi.org/10.1109/PROC.1975.9939
