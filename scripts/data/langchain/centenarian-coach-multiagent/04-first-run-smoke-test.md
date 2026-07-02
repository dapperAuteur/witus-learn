Goal: After this lesson you can seed a corpus, ask the coach one question, and read both the routed-and-cited answer and its trace, before you know how any of it works inside.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). Check out this lesson's starting state with `git checkout course/lesson-04`. On screen this lesson opens [`kb-fixtures/`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-04/kb-fixtures/README.md), [`scripts/seed-kb.mjs`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-04/scripts/seed-kb.mjs), and [`src/app/api/coach/query/route.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-04/src/app/api/coach/query/route.ts).

## The promise of Module 0

The coach runs before you learn how it works. This lesson seeds a corpus, asks one question, and reads the answer plus its trace. If this works, the rest of the course is dissecting something you've already watched run.

## Seed a corpus

Each specialist retrieves from its own namespace in the `coach_kb` table, so the table needs documents before retrieval returns anything. The repo ships a small public starter corpus in [`kb-fixtures/`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-04/kb-fixtures/README.md): peer-reviewed studies chunked per specialist (nutrition, workout, recovery, corrective). You can extend or replace it with your own corpus. Seed it:

```bash
pnpm kb:seed      # embeds each document and inserts it into coach_kb, by namespace
pnpm kb:status    # prints how many rows landed in each namespace
```

`pnpm kb:seed` embeds every document with the same model the coach uses at query time and writes a 768-dimension vector per row. That "same model at seed and query" rule is the embedding-consistency trap you meet properly in Module 2: a sentence embedding only means something relative to other vectors from the same model (Reimers & Gurevych, 2019). For now, just confirm `pnpm kb:status` shows non-empty namespaces.

## Ask a question

Start the dev server and open the coach, or hit the API directly:

```bash
pnpm dev
# then open http://localhost:3000/coach and ask:
#   "How much protein should a 70-year-old eat to preserve muscle?"
```

The route handler [`src/app/api/coach/query/route.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-04/src/app/api/coach/query/route.ts) streams NDJSON events as the graph runs. You'll see them arrive in order:

1. `session`, a session id.
2. `routing`, the supervisor's decision (this question routes to nutrition), with a rationale.
3. `finding`, the nutrition specialist's answer, with citations to the snippets it retrieved.
4. `answer`, the synthesizer's final, woven answer plus the combined citations.

That ordering isn't luck; it's enforced by the graph's structure, which is the subject of Module 1. The citations are the grounding discipline from Lesson 1 made concrete: the answer rests on retrieved documents, not the model's memory (Lewis et al., 2020).

## Read the trace

If you set `LANGSMITH_API_KEY`, every query writes a [LangSmith](https://docs.langchain.com/langsmith) trace (LangChain, 2025). The `done` event carries a `langsmithRunId`; open that run and you'll see the tree: the supervisor node, the nutrition specialist as a nested subgraph (retrieve, assess, compose), and the synthesizer at the end. Tracing is how you debug a multi-agent system that fails quietly: a wrong route still produces a fluent answer, and the trace is where you see why. If `LANGSMITH_API_KEY` is unset, the app still runs (tracing is fail-soft), but you won't have a trace to open. Set it now; you use traces in every module.

## In practice

You now have a running coach: a seeded corpus, a routed-and-cited answer, and a trace. That's the whole system in miniature. Try a cross-domain question next, "I slept five hours; should I train legs today?", and watch the `routing` event fan out to two specialists. Note which two, and whether the final answer connects their advice or just lists it. You'll make that behavior measurable in Module 4. Module 1 starts where this lesson glossed over: how does the supervisor decide where to route, and why is the ordering guaranteed?

## Key Takeaways

- `pnpm kb:seed` embeds the starter corpus into `coach_kb` by namespace; `pnpm kb:status` confirms non-empty namespaces.
- A single question streams four ordered NDJSON events: `session`, `routing`, `finding`, `answer`.
- Every specialist finding and the final answer carry citations, because the answer rests on retrieved documents, not the model's memory.
- Setting `LANGSMITH_API_KEY` gives you a trace tree (supervisor, nested specialist subgraph, synthesizer) for every run.
- A cross-domain question fans out to more than one specialist, which is the behavior Module 4 turns into a number.

## References

LangChain. (2025). *LangSmith documentation: Observability and tracing*. https://docs.langchain.com/langsmith

Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. In *Advances in Neural Information Processing Systems* (Vol. 33, pp. 9459-9474). Curran Associates.

Reimers, N., & Gurevych, I. (2019). Sentence-BERT: Sentence embeddings using Siamese BERT-networks. In *Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)* (pp. 3982-3992). Association for Computational Linguistics. https://doi.org/10.18653/v1/D19-1410
