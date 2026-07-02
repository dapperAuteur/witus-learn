Goal: After this lesson you can enforce "specialists can't read each other's findings" with the type system instead of a prompt, and say why that's a stronger guarantee.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/agents/nutrition/subgraph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-12/src/agents/nutrition/subgraph.ts) and [`src/state.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-12/src/state.ts).

## Isolation by what's absent from the schema

"Specialists don't read each other's work" is a property most systems enforce with a prompt ("do not consider other agents' outputs") and hope. Fit T. Cent 3.0 enforces it with the type system: a specialist physically can't reach another specialist's findings, because that data isn't in its state schema. The synthesizer is the only node that sees everything.

Look at the Nutrition subgraph's state:

```ts
const NutritionAnnotation = Annotation.Root({
  subQuestion: Annotation<string>(),
  citations: Annotation<Citation[]>({ /* reducer */ }),
  toolCalls: Annotation<ToolCallRecord[]>({ /* reducer */ }),
  needsCalorieTool: Annotation<boolean>(),
  calorieArgs: Annotation<CalorieInput | null>(),
  draftText: Annotation<string>(),
});
```

There's no `findings` channel here. The subgraph's nodes are typed against `NutritionState`, so `state.findings` isn't just empty, it doesn't type-check. The Workout specialist's findings are unreachable from inside Nutrition, not by discipline but by construction. This is the principle of least privilege applied to graph state: a component is given access only to what it needs (Saltzer & Schroeder, 1975). The Nutrition specialist needs its sub-question and its sources; it doesn't need anyone else's answer, so it can't have it.

## The adapter writes one slot, by type

The top-level state does have a `findings` map, with an object-merge reducer:

```ts
findings: Annotation<FindingsMap>({
  reducer: (prev, next) => ({ ...prev, ...next }),
  default: () => ({}),
}),
```

The adapter `nutritionNode` returns `{ findings: { nutrition: finding } }`, only its own key. When specialists fan out in parallel (Module 1), each writes a different key, and the reducer merges them without collision. A specialist can't clobber another's slot, because it only ever names its own. The synthesizer (Module 3) is the single node that reads the whole `findings` map and weaves them.

## Why "by type" beats "by prompt"

A prompt instruction is a request the model can ignore, and you only discover the leak when an answer cross-contaminates in production. A missing state channel is a compile error: the leak is impossible to write. The guarantee holds regardless of the model, the temperature, or how the prompt drifts over time. For a health assistant where attributability is the whole value proposition, "impossible to write" is the standard you want.

## In practice

In a scratch edit of `nutrition/subgraph.ts`, try to read another specialist's finding from inside a node, for example reference `state.findings` in `composeNode`. TypeScript rejects it: `findings` isn't on `NutritionState`. That red squiggle is the isolation guarantee. Revert the edit. Module 6 relies on this: a new specialist gets the same "no findings channel" subgraph for free, so isolation isn't something you re-earn each time you extend the system.

## Key Takeaways

- Isolation is enforced by absence: the Nutrition subgraph's `Annotation` has no `findings` channel, so other specialists' outputs don't type-check.
- That's the principle of least privilege applied to graph state: a node gets access only to what it needs.
- The top-level `findings` map uses an object-merge reducer, and each adapter writes only its own key, so parallel writes never collide.
- The synthesizer is the single node that reads the whole `findings` map.
- "By type" beats "by prompt" because a missing channel is a compile error, not a request the model can ignore under drift.

## References

Saltzer, J. H., & Schroeder, M. D. (1975). The protection of information in computer systems. *Proceedings of the IEEE, 63*(9), 1278-1308. https://doi.org/10.1109/PROC.1975.9939

LangChain. (2025). *LangGraph documentation: State, channels, and reducers*. https://langchain-ai.github.io/langgraphjs/
