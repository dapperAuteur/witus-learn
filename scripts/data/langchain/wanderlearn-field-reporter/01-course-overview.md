Goal: After this lesson you can explain why a reflection loop is built as a graph instead of a single prompt.

Follow along in the [wanderlearn-field-reporter repo](https://github.com/dapperAuteur/wanderlearn-field-reporter), and see the loop running in [the deployed app](https://wanderlearn.field.reporter.witus.online/).

## The one idea: reflection is a graph

This whole course installs one belief, stated up front so you can watch it become true: reflection is a graph, not a prompt. When you want a language model to improve its own work, the instinct is to write a longer prompt. Draft this, then critique yourself, then revise. That packs generation and judgment into one call, where they blur together and you can't see, measure, or bound any of it.

The alternative makes the loop a structure. Separate nodes for writing and critiquing, a cyclic edge between them, and a counter that decides when to stop. That structure is a [LangGraph](https://langchain-ai.github.io/langgraphjs/) graph. Everything else in the course (termination, rubrics, tracing, evals, production guards) bolts onto that graph because it's a graph.

## What you build across the modules

Across six modules you build one pattern, the reflection loop: an agent that drafts an answer, critiques it against an explicit standard, and revises until the draft passes or a cap is hit. You build it on a single running example so the pieces visibly compose.

- Module 0: the minimal write, critique, revise loop with a stub critic.
- Module 1: bounded termination, how a cyclic graph is guaranteed to exit.
- Module 2: critique design, writing checks an LLM can actually score.
- Module 3: tracing the loop in LangSmith so its bugs become legible.
- Module 4: turning the runtime rubric into an offline regression eval.
- Module 5: keeping the loop honest in production (cost, convergence, alerts).
- Capstone: compose all six on a new domain, to prove the pattern transfers.

## Why the domain rotates

Modules 0 through 4 run on one domain: customer support-ticket replies. A draft reply is easy to judge badly ("make it friendlier") and hard to judge well ("does it name the customer's actual problem and tell them what happens next?"). That makes it a good teacher for the craft of critique. Holding the domain fixed lets you watch the loop change, gaining termination, then a real rubric, then tracing, without the example shifting under you.

Then the capstone switches domains entirely, to rewriting dense legal clauses into plain language. If the patterns you learned only worked on support replies, the capstone exposes it. That's the point. A foundation course should leave you able to redeploy the pattern without the notes, on a domain the course never showed you (Madaan et al., 2023).

## Why a loop beats a single call

A single model call returns a plausible answer, not its best one. Plausible is where next-token prediction stops. Across code generation, reasoning, and writing, agents that critique and revise their own output measurably outperform single-pass agents (Madaan et al., 2023; Shinn et al., 2023). The loop doesn't make the model smarter. It gives the model a target and a second attempt at hitting it. Lesson 5 makes this concrete on a real support reply. Lesson 6 builds the loop you extend for the rest of the course.

A reflection loop is a shape: write, critique, route, repeat. It isn't a clever sentence inside one prompt. Every hard problem later in the course (When does it stop? Is the critic any good? Why did this run waste three revisions?) is tractable precisely because the loop is a graph you can inspect node by node.

## In practice

Before you touch any code, do one thing. Pick a support reply you've personally received, and write down three checks a critic could score by reading the text. Not "be polite," but something verifiable: does it name your actual problem, does it state a next step, does it close properly. Keep the list. In Lesson 6 you'll find your loop is only as good as exactly these checks, so this small exercise is the whole course in miniature.

## Key Takeaways

- Reflection is a graph, not a prompt: writing and judging are separate nodes joined by a cyclic edge and a stop counter.
- Packing "draft, critique, revise" into one prompt blurs generation and judgment so you can't see, measure, or bound them.
- The course builds one pattern, the reflection loop, across six modules plus a capstone, on a single running example.
- A single model call stops at plausible; a loop adds a target and a second attempt, and measurably beats single-pass agents.
- The capstone changes domains on purpose, from support replies to legal clauses, to prove the pattern transfers without the notes.

## References

LangChain. (n.d.). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U., Dziri, N., Prabhumoye, S., Yang, Y., Welleck, S., Majumder, B. P., Gupta, S., Yazdanbakhsh, A., & Clark, P. (2023). *Self-Refine: Iterative refinement with self-feedback* (arXiv:2303.17651). arXiv. https://arxiv.org/abs/2303.17651

Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., & Yao, S. (2023). *Reflexion: Language agents with verbal reinforcement learning* (arXiv:2303.11366). arXiv. https://arxiv.org/abs/2303.11366
