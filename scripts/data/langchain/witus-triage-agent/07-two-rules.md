Goal: After this lesson you can state the two rules that decide whether your own `interrupt()` survives a restart: only graph state is durable, and an interrupt node re-runs from its first line.

Follow along in the [durable-HITL quickstart notebook](https://github.com/dapperAuteur/witus-triage-agent/blob/main/docs/course/module-0-durable-hitl/durable-hitl-quickstart.ipynb) (Lesson 3 cells), and compare with the [`humanApproval.ts`](https://github.com/dapperAuteur/witus-triage-agent/blob/main/agent/nodes/humanApproval.ts) node from Module 1.

## What changed since last lesson

Last lesson we swapped in `PostgresSaver` and a fresh process resumed a paused thread. So is every human-in-the-loop agent now automatically durable? No. The checkpointer is necessary but not sufficient. Two rules decide whether your own interrupt actually survives, and this lesson is both of them.

## Rule one: only what's in graph state is durable

Run the state inspection cell (`get_state` and `get_state_history`) and read what the resumed process can see. The values set before the pause, `submission`, `category`, `proposed_action`, are all present. They were written into graph state, so the checkpointer saved them, so the resumed process has them.

Here's the trap. A local variable inside a node isn't durable. If a node computes something, keeps it in a plain Python variable, and pauses, that variable is gone after a restart. Only fields returned into graph state get written to the checkpoint.

The rule that falls out: if you'll need a value after the interrupt, return it into state before the interrupt. Don't stash it in a closure, a module global, or an instance attribute and expect it on the other side of a crash. The checkpoint is the only thing that crosses the restart, and the checkpoint is exactly your graph state.

## Rule two: the interrupt node re-runs from its first line

Run the side-effects demo cell and watch the output land on:

```
after resume, side_effects = ['ran', 'ran']   <- it ran TWICE
```

This is the same fact Module 1 Lesson 3 warned about, now shown live. On resume, LangGraph re-enters the node that called `interrupt()` and runs it from the top. The first time, it runs up to `interrupt()` and pauses. The second time, on resume, it runs from the first line again and this time `interrupt()` returns. A side effect placed before the `interrupt()` call fires on both passes. In the demo, one approval produced two "ran" entries.

Now picture that side effect is charging a credit card or sending an email. One approval, two charges. The bug isn't loud; it's a duplicated action that only appears after a restart lands between the two passes.

## The production rule, stated bluntly

The Triage Agent's [`humanApproval.ts`](https://github.com/dapperAuteur/witus-triage-agent/blob/main/agent/nodes/humanApproval.ts) node from Module 1 is the model to copy. It does exactly two things: call `interrupt()`, and shape the returned decision into a state update. Nothing else. No database write, no notification, no external call before the interrupt.

> A node that contains `interrupt()` must do nothing but call `interrupt()` and shape the result.

Everything with a side effect, charging the card, sending the email, writing the audit row, lives in a node after the gate: `execute` or `log_rejection` in the triage graph. Those nodes run exactly once, because nothing pauses inside them. Put the irreversible work where it runs once, never where it runs twice.

## In practice

These two rules are a short checklist you can run against any interrupt node you write. First: is every value I need on resume returned into graph state, not held in a local variable? Second: does this node do anything non-idempotent before `interrupt()`? If the answer to the second is yes, move that work into a node after the gate. Durability from the checkpointer plus these two rules is what actually keeps a real agent correct across a restart. The last lesson shows how to confirm, in LangSmith, that a resume really did stitch back onto the same thread.

## Key Takeaways

- Only fields returned into graph state survive a restart; local variables inside a node don't.
- If you need a value after the interrupt, write it into state before the interrupt.
- On resume, the node that called `interrupt()` runs again from its first line, so any side effect before the interrupt fires twice.
- Keep the interrupt node to two moves: call `interrupt()` and shape the result. Put all side effects in a node after the gate, where they run once.

## References

LangChain. (n.d.). *How to add human-in-the-loop with interrupt* [LangGraph how-to guide]. https://langchain-ai.github.io/langgraph/how-tos/human_in_the_loop/

LangChain. (n.d.). *Persistence and checkpointers*. LangChain. https://langchain-ai.github.io/langgraphjs/concepts/persistence/
