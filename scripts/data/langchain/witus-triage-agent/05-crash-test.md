Goal: After this lesson you can reproduce the core failure of human-in-the-loop agents: a worker restart under the default in-memory checkpointer destroys a paused thread.

Follow along in the [durable-HITL quickstart notebook](https://github.com/dapperAuteur/witus-triage-agent/blob/main/docs/course/module-0-durable-hitl/durable-hitl-quickstart.ipynb) (Lesson 1 cells), in the [WitUS Triage Agent repo](https://github.com/dapperAuteur/witus-triage-agent). This module is Python. The pattern is identical in the TypeScript agent from Module 1; only the syntax changes.

## Where you are

Module 1 built the Triage Agent and, in Lesson 3, a human gate: `interrupt()` pauses the graph, a checkpointer saves the paused state, a later request resumes it. We took "the checkpointer saves the state" on faith. This module makes you earn it. We crash the process on purpose and watch what survives. The honest test of durability is to swap the checkpointer and see which one keeps a thread alive through a real crash. That's the whole module.

## The setup: a four-node graph that pauses

The demo graph is a deliberately minimal triage: `intake → propose → human_approval → finalize`. The `human_approval` node calls `interrupt()`. There's no model call anywhere. Durability is a property of the checkpointer, not of the model, so an API key would only add friction. You can add a real model node later in one line, but the crash test doesn't need one.

```python
def human_approval(state: State) -> dict:
    decision = interrupt({"proposed_action": state["proposed_action"]})
    return {"approval": decision}
```

The graph is written to a file with `%%writefile` so that two separate Python processes can import it. This matters. A fake restart inside one process wouldn't prove anything. We want two real processes: one that pauses and exits, and a brand-new one that tries to pick up where the first left off.

## The crash test with `MemorySaver`

`MemorySaver` is LangGraph's default in-memory checkpointer. Compile the graph with it, then run the two-process test.

Process one runs the graph until it pauses at `interrupt()`, prints "paused at node, process exiting now," and exits. That exit is the crash. Process two is a fresh Python process. It tries to resume the same `thread_id`.

```bash
python step1_interrupt.py memory crash-test-mem
python step2_resume.py memory crash-test-mem
```

Watch process two. It prints:

```
X  STATE LOST: no checkpoint for thread 'crash-test-mem'
```

## Why the state is gone

`MemorySaver` keeps every checkpoint in the first process's heap. That's what "in-memory" means. When process one exited, its heap went with it, and the paused approval died there. Process two starts with an empty checkpoint store, looks up `crash-test-mem`, and finds nothing to resume.

This is the gap no human-in-the-loop tutorial shows you. The tutorials demonstrate `interrupt()` and resume inside one long-lived process, where `MemorySaver` looks like it works. It does, right up until the process restarts, which in production it always eventually does: a deploy, a crash, an autoscaler killing an idle worker. Anything that holds a paused human request in process memory is one restart away from losing it.

## In practice

The lesson isn't "MemorySaver is bad." It's fine for tests and for graphs that never pause. The lesson is that durability across restarts is exactly the property `MemorySaver` doesn't have, and a human-in-the-loop pause is exactly the case that needs it. A human might take hours. Your process won't stay up for all of them. The next lesson closes the gap with a checkpointer that writes somewhere the crash can't reach.

## Key Takeaways

- The demo graph pauses at a `human_approval` node that calls `interrupt()`; it uses no model, because durability lives in the checkpointer.
- The crash test uses two real processes, written to a file, so a restart is genuine rather than simulated.
- `MemorySaver` stores checkpoints in the process heap, so a restart erases every paused thread.
- Human-in-the-loop pauses are the case most likely to outlive a process, which is why in-memory persistence fails them.

## References

LangChain. (n.d.). *How to add human-in-the-loop with interrupt* [LangGraph how-to guide]. https://langchain-ai.github.io/langgraph/how-tos/human_in_the_loop/

LangChain. (n.d.). *Add persistence (memory)* [LangGraph how-to guide]. https://langchain-ai.github.io/langgraph/how-tos/persistence/
