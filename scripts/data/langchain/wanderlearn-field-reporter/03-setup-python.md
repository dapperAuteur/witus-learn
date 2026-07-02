Goal: After this lesson you can set up an optional Python environment that mirrors the TypeScript loop.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the loop running in [the deployed app](https://wanderlearn.field.reporter.witus.online/).

## Python learners are first-class

Lesson 2 set up the TypeScript track. This lesson is the Python bridge for anyone who'd rather read LangGraph in Python. LangChain Academy is usually taught in Python, and Python learners are first-class here. This course's runnable artifact is TypeScript, one codebase, so every lesson can cite a real file. But LangGraph ships the same mental model in both languages. There's no second Python codebase to maintain, and no Docker either way.

## A Python environment, if you want one

You don't need Python to take this course. But if you want to follow the [LangGraph Python docs](https://langchain-ai.github.io/langgraphjs/) in parallel, or prototype a node in Python first:

```bash
python -m venv .venv && source .venv/bin/activate
pip install -U langgraph langchain-anthropic langsmith pydantic
```

That's the entire Python setup: a virtualenv and four packages. No container, no server. Treat it as a Rosetta stone, not a fork. The loop you run, test, and extend is the TypeScript one.

## The optional langgraph dev server

The Python `langgraph-cli` ships an in-memory dev server. Install it with `pip install -U "langgraph-cli[inmem]"`, then run `langgraph dev`, and it opens LangGraph Studio in the browser with no Docker required. It's a nice way to visualize a graph, and you're welcome to point it at a Python port of the loop. This course doesn't depend on it. Docker only enters with `langgraph up` (self-hosted deploy), which is out of scope here.

## The same loop, written in Python

The graph you read in Lesson 6 looks almost identical in Python: same nodes, same conditional edge, same cap.

```python
from langgraph.graph import StateGraph, START, END

def write_reply(state): ...
def critique_reply(state): ...

def route_after_critique(state):
    if state["critique"]["passed"]:
        return END
    if state["revision_number"] >= MAX_REVISIONS:
        return END
    return "write_reply"

graph = (
    StateGraph(SupportReplyState)
    .add_node("write_reply", write_reply)
    .add_node("critique_reply", critique_reply)
    .add_edge(START, "write_reply")
    .add_edge("write_reply", "critique_reply")
    .add_conditional_edges("critique_reply", route_after_critique,
                           ["write_reply", END])
    .compile()
)
```

The shapes match because LangGraph models the same thing in both languages: a typed state graph with reducers that merge writes and conditional edges that route (LangChain, n.d.). You're not locked out by language. The reflection-loop pattern is language-independent, and the two tracks differ only in surface syntax (Zod vs. Pydantic, `addNode` vs. `add_node`), which Lesson 4 lays out side by side.

## In practice

Open the LangGraph Python quickstart and find its `add_conditional_edges` call. The third argument, the list of reachable nodes, is the same idea you just saw in TypeScript: it names every node the router is allowed to return. Same graph, different spelling. If you plan to prototype in Python, install the four packages now so the environment is ready when a later lesson tempts you to try a node both ways.

## Key Takeaways

- Python learners are first-class; the course's one runnable codebase is TypeScript, but the LangGraph mental model is identical in both languages.
- The full Python setup is a virtualenv plus four packages (`langgraph`, `langchain-anthropic`, `langsmith`, `pydantic`), with no Docker.
- `langgraph dev` opens LangGraph Studio to visualize a graph without Docker; Docker only enters with `langgraph up`, which is out of scope.
- The loop's Python form has the same nodes, conditional edge, and cap as the TypeScript one; only the spelling changes.
- The two tracks differ only in surface syntax, such as Zod vs. Pydantic and `addNode` vs. `add_node`.

## References

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

LangChain. (n.d.). *LangGraph CLI*. https://docs.langchain.com/langsmith/cli
