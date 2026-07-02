Goal: After this lesson you can explain why a cyclic reflection loop needs a guaranteed exit written in code, not in a prompt.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see it running in [the deployed app](https://wanderlearn.field.reporter.witus.online/). This lesson opens [`examples/support-reply-loop/termination.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/examples/support-reply-loop/termination.ts) and the last test in [`tests/course/module-1-termination.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-1/tests/course/module-1-termination.test.ts).

## Why this matters

Module 0 built a reflection loop: write, critique, revise. This module makes it stop reliably. Here's the belief the whole module rests on: the cap lives in code, and counting is the graph's job.

A reflection loop is a cycle. The `write` node can route back to `write` forever. A cycle with no guaranteed exit isn't a feature. It's an outage waiting for the wrong input. This module gives the loop four ways to stop, all of them in code, none of them in a prompt.

Take the counter out of the Module 0 loop and look at what's left. The critic decides whether to revise. The writer decides what the next draft is. Nothing decides when to stop. If the critic never passes the draft, the graph runs the cycle again, and again, with no end.

## Three ways a reflection loop fails to stop on its own

This isn't hypothetical. A loop with no code-level exit fails to terminate in three real ways:

1. **An impossible rubric.** A check the writer can never satisfy, a contradiction or a standard the model just can't meet, means `passed` is never true.
2. **A stalled writer.** The writer stops responding to the critique and emits the same draft every pass. The critique keeps failing, the loop keeps spinning, and nothing changes.
3. **Critic drift.** A nondeterministic LLM critic flip-flops: pass, fail, pass, fail, on essentially the same draft, so the loop never settles.

## What the missing exit costs

An unbounded reflection loop doesn't crash politely. Each iteration is one or more LLM calls. A loop that should take three passes and instead runs two hundred costs you two hundred passes of latency and tokens. That's per stuck request, across every concurrent user who hits the same bad input. Most teams first learn their loop was unbounded from a billing alert or a timeout storm in production. The guard you're about to build is cheap. Its absence is not.

## What a guaranteed exit actually requires

A cycle terminates if and only if some measure strictly decreases toward a bound on every pass and the loop stops at the bound. The counter from Module 0 does exactly this: `revisionNumber` increases by one each pass, and the router exits at `MAX_REVISIONS`. So the loop is guaranteed to halt in at most `MAX_REVISIONS` steps, no matter what the model does. That's the whole idea. The rest of the module is variations on it.

## The four ways this module stops the loop

- **Pattern 1, the counter** (Lesson 8): the hard, always-correct bound.
- **Pattern 2, convergence** (Lesson 9): stop early when revising stops helping.
- **Pattern 3, escalation** (Lesson 10): when you stop unresolved, hand the draft to a human instead of shipping junk.
- **Composition** (Lesson 11): all three in one router, in priority order.
- **`recursionLimit`** (Lesson 12): the framework backstop, the seatbelt and not the steering wheel.

## In practice

A cyclic graph without a guaranteed, code-level exit is a bug, not a loop. "The model will probably converge" isn't termination. It's hope. Open `examples/support-reply-loop/termination.ts` and read `buildUncappedReplyLoop`, the loop with the counter deliberately removed. Before you reach Lesson 12, predict what happens when you drive it with a writer that never passes. Then read the last test in `tests/course/module-1-termination.test.ts` and check your prediction.

## Key Takeaways

- A reflection loop is a cycle, and a cycle with no guaranteed exit runs forever on the wrong input.
- The module's rule: the cap lives in code, and counting is the graph's job, never the prompt's.
- Three ways a loop fails to stop on its own: an impossible rubric, a stalled writer, or a drifting critic.
- An unbounded loop is expensive: every extra pass is one or more LLM calls, paid per stuck request and per user.
- A cycle terminates only when some measure strictly decreases toward a bound and the loop stops at that bound.
- The counter does this with `revisionNumber` and an exit at `MAX_REVISIONS`, guaranteeing a halt regardless of the model.

## References

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., & Yao, S. (2023). *Reflexion: Language agents with verbal reinforcement learning* (arXiv:2303.11366). arXiv. https://arxiv.org/abs/2303.11366
