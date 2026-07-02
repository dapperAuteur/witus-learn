Goal: After this lesson you can add a third specialist and explain why each specialist keeps its own state schema instead of sharing one.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/agents/recovery/subgraph.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-14/src/agents/recovery/subgraph.ts).

## The third copy makes a point one specialist hid

Recovery is the third specialist, and adding it is the same template again: the `recovery_kb` namespace, two tools (`sleepDataMock` and `hrvTrendMock`), and recovery-domain prompts. This lesson uses that third copy to make a point that was easy to miss with one specialist: each specialist defines its own state schema, and that's what keeps three parallel specialists from stomping on each other.

## Three Annotations, deliberately separate

Each specialist has its own `Annotation.Root`: `NutritionAnnotation`, `WorkoutAnnotation`, and now `RecoveryAnnotation`. They look similar but they aren't shared:

```ts
const RecoveryAnnotation = Annotation.Root({
  subQuestion: Annotation<string>(),
  citations: Annotation<Citation[]>({ /* append reducer */ }),
  toolCalls: Annotation<ToolCallRecord[]>({ /* append reducer */ }),
  sleepArgs: Annotation<SleepDataInput | null>(),
  hrvArgs: Annotation<HrvTrendInput | null>(),
  draftText: Annotation<string>(),
});
```

It would be tempting to factor out "the shared specialist state" into one schema all three import. Resist that. Recovery's state has `sleepArgs` and `hrvArgs`; Workout's has `progressionArgs` and `mobilityArgs`. A shared schema would carry every specialist's tool args into every specialist, which is exactly the cross-domain leakage Lesson 12 closed. Separate schemas keep each specialist's state describing only its own work, and (per Lesson 12) none of them has a `findings` channel, so none can read another's output.

## Why separate state matters under fan-out

When the supervisor routes a cross-domain question to Workout and Recovery, both run in parallel (Module 1's conditional fan-out). Each runs its own compiled subgraph against its own `Annotation`, so there's no shared mutable state for the two to race on. Recovery writing `sleepArgs` can't touch Workout's `progressionArgs`, because those fields live in different state objects entirely. Isolation isn't something the parallel branches coordinate to maintain; it's a consequence of each branch having its own schema.

The mock tools (`sleepDataMock`, `hrvTrendMock`) return fixture sleep and HRV summaries so the specialist's behavior is deterministic and key-free for the course. In a production build these become real device integrations, and nothing about the graph shape changes: a tool is a tool, whether it reads a fixture or an API.

## In practice

Ask a Workout plus Recovery question ("I slept five hours, should I do a heavy leg session today?") and open the LangSmith trace. You'll see two nested subgraphs running side by side, each with its own state. Confirm the final answer cites both specialists. Then look at `WorkoutAnnotation` and `RecoveryAnnotation` and convince yourself there's no field either one could use to read the other's state. That absence is the isolation guarantee, repeated per specialist.

## Key Takeaways

- Recovery is the same template again: `recovery_kb` namespace, two mock tools, recovery prompts.
- Each specialist defines its own `Annotation.Root`, so no specialist carries another's tool args.
- Sharing one specialist-state schema would re-open the cross-domain leak Lesson 12 closed, so keep them separate.
- Under parallel fan-out there's no shared mutable state to race on, because each branch runs against its own schema.
- Mock tools keep behavior deterministic and key-free; swapping them for real integrations doesn't change the graph shape.

## References

LangChain. (2025). *LangGraph documentation: State, parallel branches, and subgraphs*. https://langchain-ai.github.io/langgraphjs/

Saltzer, J. H., & Schroeder, M. D. (1975). The protection of information in computer systems. *Proceedings of the IEEE, 63*(9), 1278-1308. https://doi.org/10.1109/PROC.1975.9939
