Goal: After this lesson you can use `recursionLimit` as a backstop and explain why it never replaces the termination patterns in your router.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see it running in [the deployed app](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/run.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/examples/support-reply-loop/run.ts) and [`examples/support-reply-loop/termination.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/examples/support-reply-loop/termination.ts), tested in [`tests/course/module-1-termination.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/tests/course/module-1-termination.test.ts).

## Why this matters

LangGraph has its own built-in stop: `recursionLimit`, a cap on how many steps a graph may take before it throws. It's real and it's useful, as a backstop. This lesson draws the line between a backstop and a control. The patterns you just built steer the loop. `recursionLimit` only catches it when steering failed.

## What recursionLimit is

Every LangGraph invocation runs at most `recursionLimit` super-steps. Exceed it and the graph throws a `GraphRecursionError` instead of looping forever (LangChain, n.d.). You set it per call:

```ts
await graph.invoke({ ticket }, { recursionLimit: 25 }); // default is 25
```

It's a framework-level guarantee that no graph, yours or one you imported, can hang the process indefinitely. That's a genuinely good safety net to have underneath everything.

## Why it's a backstop, not a steering wheel

Drive the uncapped loop, the one with the counter and convergence removed, with a writer that never passes:

```bash
npm run test -- tests/course/module-1-termination.test.ts
```

The final test asserts the invocation throws on `recursionLimit`. That throw is the whole demonstration. Compare the two ways the loop can end:

| Question | Your patterns (counter / convergence / escalation) | `recursionLimit` |
|---|---|---|
| How it ends | a clean terminal state (`resolved` or `escalated`) | an exception |
| Carries an outcome | yes: downstream knows what happened | no: you get a stack trace |
| Lets you escalate gracefully | yes: `flag_for_human` with the diagnosis | no: the run is just dead |
| Tunable per reason | yes: different bounds for different exits | one blunt number |
| Meaning | "the loop did its job and stopped" | "you forgot to bound your loop" |

A `GraphRecursionError` in production isn't the system working as designed. It's the system telling you the design was missing. The patterns are the steering wheel: they decide where the loop goes and end it on purpose. `recursionLimit` is the seatbelt: it does nothing in a well-driven run and saves you from a crash in a catastrophic one. You want both. You rely on the wheel.

## Setting recursionLimit correctly

Relying on `recursionLimit` (often tuned down to a small number) as a loop's primary termination looks bounded, because the loop stops. But it stops by throwing, with no outcome, no escalation, and no way to tell a legitimately long run from a stuck one. Set `recursionLimit` generously, above the worst case your own patterns allow, so in a healthy system it never fires. When it does fire, you know immediately that a real bound is missing, and you bound the loop yourself in the router.

## In practice

Look back at Lesson 7's promise: the cap lives in code, and counting is the graph's job. You now have four ways to stop, composed in priority order, every one a deliberate decision your graph makes, plus a framework backstop underneath, set generously, that you never steer with. A reflection loop with this is reliable: it terminates on every input, for a reason you chose, in a state you can read. To feel the difference, take the bounded loop (counter, convergence, and escalation) and invoke it with an absurdly low `recursionLimit: 2`. Your patterns still try to do their job, but the backstop fires first, and the failure is much worse: an exception instead of a clean end. That's why the backstop is set high, so your patterns end the loop, not the seatbelt. That reliability rests entirely on the router trusting the critic's `passed` verdict, which raises the next question: is the critic any good? Module 2 is the craft of writing a rubric an LLM can actually score.

## Key Takeaways

- `recursionLimit` caps the number of super-steps a graph runs, then throws a `GraphRecursionError`; the default is 25.
- It's a framework-level safety net so no graph can hang the process forever.
- Your patterns end the loop in a clean terminal state that carries an outcome; `recursionLimit` ends it with an exception and a stack trace.
- A `GraphRecursionError` in production means a real bound is missing, not that the system worked as designed.
- Set `recursionLimit` generously, above the worst case your patterns allow, so it never fires in a healthy run.
- The patterns are the steering wheel; `recursionLimit` is the seatbelt. You want both and you rely on the wheel.

## References

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., & Yao, S. (2023). *Reflexion: Language agents with verbal reinforcement learning* (arXiv:2303.11366). arXiv. https://arxiv.org/abs/2303.11366
