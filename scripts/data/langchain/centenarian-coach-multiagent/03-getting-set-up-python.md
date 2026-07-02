Goal: After this lesson you can map every LangGraph idea in this course from the TypeScript artifact to its Python equivalent, and say why the artifact itself stays TypeScript.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/state.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-03/src/state.ts) and [`src/agents/supervisor/routing.schema.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-03/src/agents/supervisor/routing.schema.ts), the two files the translation table below points at.

## Why this lesson exists

LangChain Academy courses are usually taught in Python. This course's artifact is TypeScript, one runnable coach, so every lesson can point at the real files you deploy. That's what keeps the course honest. This lesson is the bridge for Python-first learners: there's no second Python codebase to maintain, but the concepts map cleanly, and [LangGraph](https://langchain-ai.github.io/langgraph/) ships in both languages with the same mental model (LangChain, 2025a).

## If you want a Python environment alongside

You don't need Python to take this course. But if you want to follow the LangGraph Python docs in parallel, or prototype a node in Python first:

```bash
python -m venv .venv && source .venv/bin/activate
pip install langgraph langchain-anthropic langsmith pydantic
```

Treat this as a Rosetta stone, not a fork. The coach you build, evaluate, and deploy is the TypeScript repo.

## Translation table

| Concept | TypeScript (this repo) | Python (LangGraph) |
|---|---|---|
| Graph builder | `new StateGraph(CoachAnnotation)` | `StateGraph(CoachState)` |
| State definition | `Annotation.Root({ ... })` in `src/state.ts` | `TypedDict` + `Annotated[...]` |
| Channel reducer | `Annotation<T>({ reducer, default })` | `Annotated[T, reducer]` |
| Structured output | `model.withStructuredOutput(Schema, { name })` | `model.with_structured_output(Schema)` |
| Schema library | Zod (`routing.schema.ts`) | Pydantic (Pydantic, 2025) |
| Chat model | `new ChatAnthropic({ ... })` | `ChatAnthropic(...)` |
| Add node / edge | `.addNode(...)` / `.addConditionalEdges(...)` | `.add_node(...)` / `.add_conditional_edges(...)` |
| Run | `await graph.invoke(state)` / `graph.stream(...)` | `graph.invoke(state)` / `graph.stream(...)` |
| Evaluation | `evaluate(target, { data, evaluators })` | `evaluate(target, data=..., evaluators=...)` / `aevaluate(...)` |
| Tracing | `LANGSMITH_API_KEY` + `configureLangSmith()` | `LANGSMITH_API_KEY` env (auto) |

The shapes match because LangGraph models the same thing in both languages: a state graph with typed channels, reducers that merge concurrent writes, and conditional edges for routing (LangChain, 2025a). The two places the languages diverge in this course are the schema library (Zod vs Pydantic, both produce JSON Schema for structured output) and the evaluation SDK surface, which is `evaluate` in the JavaScript `langsmith` package and `evaluate` or `aevaluate` in the Python one (LangChain, 2025b).

## Why the artifact stays TypeScript

A single runnable artifact lets every lesson cite a real file path you can open and a real trace you can inspect, and lets the branch tag one commit per lesson. A parallel Python copy would double the surface that can drift out of sync with the deployed coach. So Python here is a reference, and the rest of the course works the TypeScript repo directly.

## In practice

Read the table once now, then keep it open through Modules 1 to 3. Every time a lesson shows a TypeScript `Annotation` or a `withStructuredOutput` call, glance at the Python column and confirm you could write the same node in Python. If you can, you've understood the concept and not just the syntax, which is the whole point of teaching from one honest artifact.

## Key Takeaways

- The course teaches LangGraph concepts through one TypeScript artifact, so every lesson points at a real, deployable file.
- LangGraph's core (state graph, typed channels, reducers, conditional edges) maps one to one between TypeScript and Python.
- The two real divergences are the schema library (Zod vs Pydantic) and the evaluation call surface (`evaluate` vs `evaluate`/`aevaluate`).
- A single artifact keeps citations and traces truthful and lets the branch tag one commit per lesson.
- You can keep a Python environment alongside as a reference, but you don't build a second copy.

## References

LangChain. (2025a). *LangGraph documentation: Concepts (Python and JavaScript)*. https://langchain-ai.github.io/langgraph/

LangChain. (2025b). *LangSmith documentation: Evaluation*. https://docs.langchain.com/langsmith/evaluation

Pydantic. (2025). *Pydantic documentation*. https://docs.pydantic.dev/
