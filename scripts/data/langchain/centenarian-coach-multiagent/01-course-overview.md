Goal: After this lesson you can say what you're building, Fit T. Cent 3.0, and why per-agent retrieval and citation grounding are the spine of the course, not extras bolted on at the end.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and try the coach at [centenarian.coach.multiagent.witus.online](https://centenarian.coach.multiagent.witus.online/) (the live demo is gated to one admin email; everyone else can join the access waitlist). On screen this lesson opens the [repo README](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-01/README.md) and the [course outline](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-01/docs/course/README.md).

## What you're building

One artifact, start to finish: Fit T. Cent 3.0, the Centenarian Coach. You ask it a health question. A supervisor classifies the question and decides which domain specialists to consult, nutrition, workout, recovery. Each specialist answers from its own retrieval store. Then a synthesizer weaves the findings into one cited answer.

That last detail is the spine of the whole course. Retrieval-augmented generation grounds a model's output in retrieved documents instead of its parameters alone (Lewis et al., 2020). Most multi-agent tutorials give every agent the same global tool and retrieval set. Here each specialist owns its own namespace, and they can't read each other's sources. Multi-agent systems coordinate specialized agents that each hold a narrower competence (Wu et al., 2023), and per-agent retrieval is how you make that competence real instead of cosmetic.

## Why grounding is the point, not a feature

This is a health and longevity domain. The recommendations are the kind with actual evidence behind them, for example that older adults need more dietary protein per kilogram of bodyweight than younger adults to preserve muscle (Bauer et al., 2013). Left ungrounded, a large language model produces fluent text that's confidently wrong; hallucination is a well-documented failure mode of natural-language generation (Ji et al., 2023). A coach that invents a protein target is worse than useless. So every answer this system gives carries citations to the snippets it was built from, and in Module 4 you write an evaluator that scores whether each claim is actually traceable to a source.

## The single-artifact promise

Every lesson contributes to the same coach:

- By the end of Module 0 the coach runs locally. You seed a corpus, ask a question, and read the answer plus its [LangSmith](https://docs.langchain.com/langsmith) trace.
- Modules 1 to 3 build the architecture: the supervisor, then the specialists, each with its own retrieval namespace and isolated state.
- Module 4 makes evaluation part of the artifact: routing, citation, and grounding evaluators, plus a dataset that grows as you find bugs.
- Module 5 deploys it to LangGraph Platform.
- Module 6 turns the coach into a launching pad: how to add a new specialist, worked with the repo's fourth (corrective) agent, plus extensions you take on yourself.

There's no separate "now rebuild this on an unrelated domain" exercise. One thing, built well, that you can extend.

## The tools you'll use

The coach is built on the LangChain ecosystem: [LangGraph](https://langchain-ai.github.io/langgraphjs/) for the supervisor and specialist subgraphs (LangChain, 2025a), [LangSmith](https://docs.langchain.com/langsmith) for tracing and evaluation (LangChain, 2025b), pgvector for per-namespace vector retrieval (pgvector, 2025), Drizzle ORM over Postgres, and Zod for the routing schema. You touch each one in the module where it earns its place, so there's no standalone tools tour.

## How to navigate

The branch carries one tagged commit per lesson. To start any lesson from a clean state, check out its tag: `git checkout course/lesson-04` lands you at the first-run smoke test, ready to run. Every file this course puts on screen is linked at that lesson's tag, so the code you read here matches the code in the video.

## In practice

Open the repo and the deployed coach side by side before Module 1. Ask the live coach one narrow question ("how much protein should a 70-year-old eat?") and one cross-domain one ("I slept five hours, should I train legs today?"), and notice the second pulls in more than one specialist. You'll build the machinery behind that difference over the next three modules.

## Key Takeaways

- You build one artifact, Fit T. Cent 3.0: a supervisor that routes to nutrition, workout, and recovery specialists, then synthesizes a cited answer.
- Per-agent RAG means each specialist owns its own retrieval namespace and can't read the others', which is what makes it genuinely specialized.
- Grounding is load-bearing here because a fluent but unsupported health claim is a liability, so every answer carries citations.
- The course adds evaluation (Module 4), deployment (Module 5), and an extension path (Module 6) to that same coach.
- Each lesson has a git tag, `course/lesson-NN`, so you can check out its exact starting state.

## References

Bauer, J., Biolo, G., Cederholm, T., Cesari, M., Cruz-Jentoft, A. J., Morley, J. E., Phillips, S., Sieber, C., Stehle, P., Teta, D., Visvanathan, R., Volpi, E., & Boirie, Y. (2013). Evidence-based recommendations for optimal dietary protein intake in older people: A position paper from the PROT-AGE Study Group. *Journal of the American Medical Directors Association, 14*(8), 542-559. https://doi.org/10.1016/j.jamda.2013.05.021

Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P. (2023). Survey of hallucination in natural language generation. *ACM Computing Surveys, 55*(12), 1-38. https://doi.org/10.1145/3571730

LangChain. (2025a). *LangGraph documentation*. https://langchain-ai.github.io/langgraphjs/

LangChain. (2025b). *LangSmith documentation*. https://docs.langchain.com/langsmith

Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. In *Advances in Neural Information Processing Systems* (Vol. 33, pp. 9459-9474). Curran Associates.

pgvector. (2025). *pgvector: Open-source vector similarity search for Postgres* [Computer software]. GitHub. https://github.com/pgvector/pgvector

Wu, Q., Bansal, G., Zhang, J., Wu, Y., Li, B., Zhu, E., Jiang, L., Zhang, X., Zhang, S., Liu, J., Awadallah, A. H., White, R. W., Burger, D., & Wang, C. (2023). *AutoGen: Enabling next-gen LLM applications via multi-agent conversation* (arXiv:2308.08155). arXiv. https://doi.org/10.48550/arXiv.2308.08155
