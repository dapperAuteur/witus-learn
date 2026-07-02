Goal: After this lesson you can explain why seeding and querying must use the same embedding model, and name the two guardrails that make a mismatch fail loudly.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/lib/embeddings.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-10/src/lib/embeddings.ts).

## A bug that doesn't throw

Here's a bug that doesn't throw, doesn't show up in a unit test, and quietly ruins every answer: seeding the knowledge base with one embedding model and querying it with another. This short lesson is about why that happens and how the coach prevents it.

## Embeddings only mean something relative to their own model

A sentence embedding is a vector whose only meaning is its position relative to other vectors produced by the same model (Reimers & Gurevych, 2019). Two different models, even two that both output 768 numbers, place text in different, incompatible spaces. Cosine similarity between a vector from model A and a vector from model B is noise. So if you seed `coach_kb` with model A and embed queries with model B, retrieval returns near-random documents, the specialist grounds its answer in irrelevant snippets, and nothing errors. You just get confidently wrong answers.

## One module for both seed-time and query-time

The coach routes every embedding, seeding and querying, through a single factory, [`src/lib/embeddings.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-10/src/lib/embeddings.ts):

```ts
const EMBEDDING_DIMS = 768;

export async function embed(text: string): Promise<number[]> {
  return activeProvider() === "ollama" ? ollamaEmbed(text) : geminiEmbed(text);
}
```

Both `scripts/seed-kb.mjs` and the specialists' `retrieve` nodes call `embed()`. Because they share one code path, they can't drift: whatever backend seeded the corpus is the backend that embeds the query. The header comment says it plainly, "switching providers means re-seeding the whole KB," because the stored vectors and the query vectors must live in the same space.

## Two guardrails worth copying

1. **Pin the dimensionality.** The column is `vector(768)`, and the Gemini call requests `outputDimensionality: 768` explicitly. The Ollama path asserts it:

   ```ts
   if (values.length !== EMBEDDING_DIMS) {
     throw new Error(`Ollama model returned ${values.length}-dim vectors; coach_kb expects 768...`);
   }
   ```

   A dimension mismatch fails loudly at insert or query time instead of silently corrupting search. Google's Gemini embedding model supports configurable output dimensionality; the coach pins it to 768 (Google, 2025).

2. **Make the provider an explicit, logged choice.** `COACH_EMBED_PROVIDER` selects the backend (`gemini` default, `ollama` local). The trap is switching it on a seeded database. The documented fix is a full re-seed (`pnpm kb:clear --all && pnpm kb:seed --fresh`), not a partial one, because a half-Gemini, half-Ollama table is the worst of both.

## In practice

It's tempting to treat "the embedding model" as an implementation detail you can swap. It isn't: it's part of your data's identity. Choosing a different embedding model is choosing to rebuild your index. As a thought experiment, trace what would break if you set `COACH_EMBED_PROVIDER=ollama` and restarted without re-seeding: which step returns garbage, and would any test catch it? Retrieval would return low-similarity, wrong-feeling results, and the grounding evaluator in Module 4 is the thing that would finally catch it. The deterministic routing and citation tests would not, which is exactly why grounding needs its own evaluator.

## Key Takeaways

- An embedding only has meaning relative to other vectors from the same model, so mixing seed and query models makes similarity noise.
- A mismatch doesn't throw; it returns near-random documents and confidently wrong answers.
- The coach funnels seed-time and query-time through one `embed()` function, so the two can't drift.
- Guardrail one: pin dimensionality to 768 (column type, explicit Gemini request, Ollama assertion) so a mismatch fails loudly.
- Guardrail two: make the provider an explicit, logged choice, and always do a full re-seed when you switch it.

## References

Google. (2025). *Gemini API documentation: Embeddings*. https://ai.google.dev/gemini-api/docs/embeddings

Reimers, N., & Gurevych, I. (2019). Sentence-BERT: Sentence embeddings using Siamese BERT-networks. In *Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)* (pp. 3982-3992). Association for Computational Linguistics. https://doi.org/10.18653/v1/D19-1410
