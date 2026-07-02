Goal: After this lesson you can collect parallel specialist findings with a merge reducer and weave them into one cited answer with a synthesizer.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/state.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-15/src/state.ts) and [`src/synthesizer/synthesize.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-15/src/synthesizer/synthesize.ts).

## The fan-in

The specialists fan out and run in parallel. Something has to collect their findings without losing any, and one node has to weave them into a single answer. This lesson is the fan-in: the merge reducer that lets parallel writes coexist, and the synthesizer that reads them all.

## The merge reducer lets parallel writes coexist

The top-level state's `findings` channel has an object-merge reducer:

```ts
findings: Annotation<FindingsMap>({
  reducer: (prev, next) => ({ ...prev, ...next }),
  default: () => ({}),
}),
```

A channel reducer tells LangGraph how to combine writes to the same channel from the same superstep (LangChain, 2025). Without one, two specialists writing `findings` in the same parallel step would conflict and the framework would reject the concurrent update. With the spread-merge reducer, Workout writing `{ workout: ... }` and Recovery writing `{ recovery: ... }` merge into `{ workout: ..., recovery: ... }`. Each adapter writes only its own key (Lesson 12), so the merge never overwrites: the keys are disjoint by construction.

This is the other half of the isolation story. Lesson 12 showed a specialist can't read another's findings. The reducer shows a specialist can't clobber another's findings either. Together they make parallel fan-out safe.

## The synthesizer is the one node that reads everything

After the specialists fan in, the synthesizer runs. It's the only node in the whole graph that reads the full `findings` map:

```ts
const findings: SpecialistFinding[] = [];
for (const agent of ["nutrition", "workout", "recovery", "corrective"] as const) {
  const finding = state.findings[agent];
  if (finding) findings.push(finding);
}
const citations: Citation[] = findings.flatMap((f) => f.citations);
```

It gathers whichever findings exist, concatenates their citations, and asks a model to weave a single answer that connects the specialists' advice rather than listing it. The system prompt forbids inventing facts the specialists didn't provide, and it doesn't write its own citation list: the citations are attached from the findings, so every source in the final answer traces back to a specialist that actually retrieved it. That's the citation-grounding discipline closing at the top of the graph (Lewis et al., 2020). If no specialist ran (an off-topic question that routed to nobody), the synthesizer returns a graceful "no specialist was available" answer instead of failing. The graph always terminates with a `finalAnswer`.

## In practice

Ask a three-domain question ("I'm 70 and want to stay strong for decades, what should my diet, training, and recovery look like?"). In the trace, watch three findings merge into the `findings` channel, then the synthesizer read all three. Read the final answer and check two things: every paragraph traces to a cited source, and the answer connects the domains (eating to support the training load, say) rather than printing three separate mini-answers. Module 4 turns both of those checks into automated evaluators.

## Key Takeaways

- The `findings` channel's object-merge reducer lets parallel specialist writes coexist instead of conflicting.
- Each adapter writes only its own disjoint key, so the merge never overwrites: isolation and safe fan-in are the same guarantee.
- The synthesizer is the single node that reads the full findings map.
- It weaves a connected answer, forbids invented facts, and attaches citations from the findings so every source traces back to a specialist.
- If nothing routed, the synthesizer still returns a graceful answer, so the graph always ends with a `finalAnswer`.

## References

LangChain. (2025). *LangGraph documentation: State channels and reducers*. https://langchain-ai.github.io/langgraphjs/

Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. In *Advances in Neural Information Processing Systems* (Vol. 33, pp. 9459-9474). Curran Associates.
