Goal: After this lesson you can state the reflection-loop model as six stacked beliefs and redeploy it on any domain from the model in your head.

Follow along in the [WanderLearn Field Reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the finished app running at [wanderlearn.field.reporter.witus.online](https://wanderlearn.field.reporter.witus.online/). To build your own loop, reuse the parts in [`examples/capstone-plain-language/index.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/capstone-plain-language/index.ts), chiefly the router in [`termination.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/support-reply-loop/termination.ts) and the scorer in [`rubric.ts`](https://github.com/dapperAuteur/wanderlearn-field-reporter/blob/course/module-6/examples/support-reply-loop/rubric.ts).

## Looking back at Lesson 1

The very first lesson made one promise: reflection is a graph, not a prompt. Everything since has earned that sentence. Stand at the end now and look back down the staircase. Each module installed one belief, and they stack into a single durable model of how to build a reliable write, critique, revise loop.

## The model, in six beliefs

| Module | The belief you installed |
|---|---|
| **0** | Reflection is a graph, not a prompt. Generation and judgment are separate nodes, joined by a cyclic edge. |
| **1** | The cap lives in code, and counting is the graph's job. A loop must have a guaranteed, code-level exit. |
| **2** | Writing checks an LLM can actually score is a craft. The rubric, as data, is the lever. |
| **3** | Tracing makes bugs legible, not rarer. The trace recovers what the output throws away. |
| **4** | The runtime rubric is also the offline test. One standard steers at runtime and measures offline. |
| **5** | Reflection is a budget allocation, not a magic wand. It's a position on a cost and quality curve. |
| **Capstone** | You can redeploy the whole pattern, without the notes, on a domain you've never seen. |

Read that column top to bottom. It isn't seven tricks, it's one method. A reflection loop is a cyclic graph (0) with a guaranteed exit (1), steered by a data rubric an LLM can score (2), made legible by tracing (3), protected by an eval that reuses the rubric (4), and allocated as a budget on a cost and quality curve (5). Because every piece is generic, the whole thing transfers (capstone).

## What you can now do that you couldn't at Lesson 1

- Build a write, critique, revise loop as a typed LangGraph graph.
- Guarantee it terminates, with the cap in code and convergence and escalation composed in priority order.
- Write a rubric an LLM can score, single, observable, independent, weighted criteria, and lint it.
- Read a cyclic trace to diagnose wasted iterations, critic drift, non-convergence, and fail-soft masking.
- Reuse that rubric as an offline regression eval that fails loudly instead of lying.
- Put the loop on a dashboard, convergence and cost-per-converged-output, alert on runaways, and choose a point on the cost and quality Pareto frontier.
- Redeploy all of it to a new domain by writing a rubric and a dataset.

That last bullet is the one that matters. The capstone, running the entire stack on legal-clause rewriting, and the transfer test scoring commit messages, is the proof you hold this as a tool, not a tutorial you followed.

## The anti-pattern this whole course refutes

There's a tempting anti-pattern: "reflection is magic." That's treating a reflection loop as a sophisticated thing you add to make outputs better, on faith. The course's entire arc refutes it. Reflection is a bounded, judged, traced, evaluated, priced graph, and sometimes (Lesson 36) the right amount of it is none. You don't believe in reflection loops now. You measure them.

## In practice

Go back and reread Lesson 1's last line: every hard question in this course is tractable precisely because the loop is a graph you can inspect. You've now inspected it node by node, bounded it, judged it, traced it, evaluated it, priced it, and carried it to new ground. The mental model is installed. The notes were scaffolding; take them down.

Here's the last exercise, and it's the whole course in one instruction. Pick a domain this course never named. Write its rubric, build the loop from the parts in `examples/`, run the eval, read the dashboard, and ship it. If you can, and you can, you're done here.

## Key Takeaways

- The course's one promise was that reflection is a graph, not a prompt, and every module earned it.
- The model is six stacked beliefs, not seven tricks: a cyclic graph, a guaranteed exit, a data rubric, tracing, an eval that reuses the rubric, and a budget on a cost and quality curve.
- Because every piece is generic, the whole loop transfers to a new domain by writing a rubric and a dataset.
- The anti-pattern the course refutes is "reflection is magic." You measure reflection loops now, and sometimes the right amount is none.
- The exit test is to ship a loop on a domain the course never named, from the model in your head.

## References

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U., Dziri, N., Prabhumoye, S., Yang, Y., Welleck, S., Majumder, B. P., Gupta, S., Yazdanbakhsh, A., & Clark, P. (2023). *Self-Refine: Iterative refinement with self-feedback* (arXiv:2303.17651). arXiv. https://arxiv.org/abs/2303.17651

Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., & Yao, S. (2023). *Reflexion: Language agents with verbal reinforcement learning* (arXiv:2303.11366). arXiv. https://arxiv.org/abs/2303.11366
