Goal: After this lesson you can explain why a reflection loop can't be debugged from its output alone.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the deployed app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). This lesson stays conceptual and shows no code. The escalated runs it points at come from [`tests/course/module-1-termination.test.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/tests/course/module-1-termination.test.ts), and the diagnostics that read these traces live in [`examples/support-reply-loop/tracing.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-3/examples/support-reply-loop/tracing.ts), which the rest of the module opens.

## Where this module is going

Tracing makes bugs legible, not rarer. A reflection loop won't get fewer bugs because you add tracing. It gets debuggable bugs. By the end of this module you can read a loop's behavior off a trace and name exactly which of its failure modes you're looking at. This first lesson is about why you can't do that from the output alone.

## A wrong answer and a right answer are both just strings

Here's the whole problem in one observation: a wrong answer and a right answer are both just strings. When your support-reply loop escalates a ticket, the final state says `outcome: "escalated"`, and that's all it says. It doesn't tell you which of four very different runs you got:

- The loop tried three good revisions and genuinely ran out of budget.
- The writer stalled on the same draft and convergence caught it.
- The critic flip-flopped on an unchanged draft until the cap fired.
- The judge itself silently errored on every call, so nothing ever truly scored.

All four produce the same one-word outcome. From the output, they're indistinguishable. You can't fix a bug you can't tell apart from three other bugs.

## Why your normal debugging tools don't survive an LLM loop

The tools you reach for in normal code don't survive contact with an LLM loop:

- **A stack trace** points at the line that threw. But the most dangerous LLM bugs don't throw. A fail-soft node swallows the error and returns a plausible fallback (you'll see exactly this in Lesson 25). No exception, no stack trace.
- **A debugger and breakpoints** assume deterministic re-execution. An LLM call is nondeterministic and slow. You can't step through "why did the model say that" the way you step through a null pointer.
- **`console.log`** drowns you. A loop is a cycle, so the same node logs three, five, ten times, and logs from concurrent runs interleave. You get a haystack, not a needle.
- **Unit-test assertions on the output** pass while the system is quietly broken, because the output shape is right (`outcome` is a valid value) even when the process that produced it was wrong end to end.

## What a trace actually is

A trace is a structured record of every step a single run took, shaped as a tree. The graph invocation sits at the root. Each node is a child span. Each LLM call is a span under its node. Every span carries its inputs, outputs, timing, token counts, and any error. That's the standard span model of distributed tracing applied to an agent run (LangChain, n.d.).

A log is a flat stream you grep. A trace is a tree you read. It keeps the structure of the run, so the cyclic write_reply then critique_reply becomes a visible, navigable shape instead of repeated log lines. You stop asking "what did it output" and start asking "what did it do", and the trace is the only artifact that answers the second question.

## In practice

Take the last support reply your loop escalated, or any escalated run from the Module 1 tests. Without looking at any internal state, try to write down which of the four failure modes above caused it. You can't. Hold that feeling. The rest of the module removes it one diagnosis at a time.

The point of this lesson is the gap, not a fix. Tracing doesn't prevent those failures. It makes them legible, and reading them is the skill the next lessons build. You cannot debug a reflection loop from its output, because the output collapses four distinct failures into one indistinguishable string, and your normal tools don't survive a nondeterministic, fail-soft, cyclic system.

## Key Takeaways

- Tracing makes bugs legible, not rarer. It doesn't reduce failures; it makes them readable.
- One escalated outcome can hide at least four different failures, and the output can't tell them apart.
- Stack traces, breakpoints, and `console.log` all break on a nondeterministic, fail-soft, cyclic system.
- Output assertions can pass while the process that produced the output was broken end to end.
- A trace is a tree of spans, one per node and one per LLM call, each carrying inputs, outputs, timing, tokens, and errors.

## References

LangChain. (n.d.). *LangSmith documentation*. https://docs.smith.langchain.com/

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/
