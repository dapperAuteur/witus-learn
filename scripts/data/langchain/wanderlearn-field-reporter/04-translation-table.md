Goal: After this lesson you can translate any LangGraph step in this course between TypeScript and Python.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the loop running in [the deployed app](https://wanderlearn.field.reporter.witus.online/).

## One mapping for the whole course

Every [LangGraph](https://langchain-ai.github.io/langgraphjs/) concept you meet in the TypeScript artifact has a one-to-one Python equivalent. Reflection loops are structurally identical across the two languages. Only the spelling changes. Once you've internalized this mapping, a Python learner can take every TypeScript lesson and a TypeScript learner can read the Python docs without friction.

## The mapping in words

Here's the mapping read aloud, so it lands even without the table in front of you.

You build a graph the same way in both. In TypeScript you write `new StateGraph(SupportReplyStateAnnotation)`; in Python it's `StateGraph(SupportReplyState)`. You define state with `Annotation.Root({ ... })` in TypeScript and a `TypedDict` with `Annotated[...]` fields in Python. A plain channel is `Annotation<string>` in TypeScript and just a `TypedDict` field in Python. A channel with a reducer is `Annotation<T>({ reducer, default })` versus `Annotated[T, reducer]`.

The building calls line up almost letter for letter. TypeScript's `.addNode`, `.addEdge`, and `.addConditionalEdges` become Python's `.add_node`, `.add_edge`, and `.add_conditional_edges`. Both use the same `START` and `END` sentinels and the same `.compile()`. To run, TypeScript is always `await graph.invoke(state)`, while Python offers both `graph.invoke(state)` and the async `await graph.ainvoke(state)`.

The pieces you meet later map the same way. Structured output is `model.withStructuredOutput(Schema)` in TypeScript and `model.with_structured_output(Schema)` in Python. A chat model is `new ChatAnthropic({ model })` versus `ChatAnthropic(model=...)`. Tracing in Module 3 reads the same `LANGSMITH_API_KEY` in both. Evaluation in Module 4 is `evaluate(target, { data, evaluators })` in TypeScript and `evaluate(target, data=..., evaluators=...)`, or the async `aevaluate`, in Python.

## The table

| Concept | TypeScript (this course) | Python (LangGraph) |
|---|---|---|
| Graph builder | `new StateGraph(SupportReplyStateAnnotation)` | `StateGraph(SupportReplyState)` |
| State definition | `Annotation.Root({ ... })` | `TypedDict` + `Annotated[...]` |
| A plain channel | `Annotation<string>` | a `TypedDict` field |
| Channel + reducer | `Annotation<T>({ reducer, default })` | `Annotated[T, reducer]` |
| Add a node | `.addNode("write_reply", fn)` | `.add_node("write_reply", fn)` |
| Plain edge | `.addEdge(START, "write_reply")` | `.add_edge(START, "write_reply")` |
| Conditional edge | `.addConditionalEdges(src, router, [targets])` | `.add_conditional_edges(src, router, [targets])` |
| Start and end sentinels | `START`, `END` | `START`, `END` |
| Compile | `.compile()` | `.compile()` |
| Run | `await graph.invoke(state)` | `graph.invoke(state)` / `await graph.ainvoke(state)` |
| Structured output (later) | `model.withStructuredOutput(Schema)` | `model.with_structured_output(Schema)` |
| Schema library (later) | Zod | Pydantic |
| Chat model (later) | `new ChatAnthropic({ model })` | `ChatAnthropic(model=...)` |
| Tracing (Module 3) | `LANGSMITH_API_KEY` env | `LANGSMITH_API_KEY` env |
| Evaluation (Module 4) | `evaluate(target, { data, evaluators })` | `evaluate(target, data=..., evaluators=...)` / `aevaluate(...)` |

## The two places they really differ

Almost everything maps one-to-one. Two places genuinely differ:

1. Schema library. TypeScript uses Zod; Python uses Pydantic. Both compile to JSON Schema, which is what `withStructuredOutput` and `with_structured_output` actually send the model, so the model sees the same contract either way. This matters in Module 2, where the rubric becomes a typed schema.
2. Async surface. Python exposes both sync (`invoke`) and async (`ainvoke`, `aevaluate`) entrypoints. TypeScript is async throughout (`await graph.invoke`).

## In practice

Prove the mapping to yourself. Take the TypeScript router you saw in Lesson 3 and hand-translate it to Python using only this table, then check it against the Python sketch in Lesson 3. If your translation matches, you've shown the table is complete for the loop primitive, and you can keep it open with confidence for every later lesson. When a lesson shows TypeScript, you translate it to Python mechanically. The graph is the idea, and the idea is the same in both.

## Key Takeaways

- Every LangGraph concept in this course maps one-to-one between TypeScript and Python; the reflection loop is structurally identical and only the spelling changes.
- The builder calls line up almost letter for letter: `addNode`/`add_node`, `addEdge`/`add_edge`, `addConditionalEdges`/`add_conditional_edges`, with shared `START`, `END`, and `.compile()`.
- The first real divergence is the schema library: Zod in TypeScript, Pydantic in Python, both compiling to the same JSON Schema the model sees.
- The second real divergence is the async surface: Python offers sync and async entrypoints, while TypeScript is async throughout.
- The mapping is a mechanical translation tool, so a TypeScript lesson can be read in Python and the reverse.

## References

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/
