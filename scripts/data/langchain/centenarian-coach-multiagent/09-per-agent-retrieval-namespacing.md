Goal: After this lesson you can give each specialist its own retrieval namespace with one table and a namespace column, and say why that beats one shared retriever.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`src/db/schema.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-09/src/db/schema.ts), [`src/lib/pgvector.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-09/src/lib/pgvector.ts), and [`src/agents/nutrition/retrieval.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-09/src/agents/nutrition/retrieval.ts).

## This is the lesson the course is named for

Most multi-agent tutorials give every agent the same retriever over the same documents. Fit T. Cent 3.0 does the opposite: each specialist owns its own retrieval namespace, and that single design choice is what makes the specialists actually specialized.

## One table, a namespace column

You might reach for one vector table per specialist. The coach uses a simpler pattern that scales better: one `coach_kb` table with a `namespace` column:

```ts
export const coachKb = pgTable("coach_kb", {
  id: uuid("id").primaryKey().defaultRandom(),
  namespace: text("namespace").notNull(), // 'nutrition_kb' | 'workout_kb' | ...
  source: text("source").notNull(),
  content: text("content").notNull(),
  embedding: vector("embedding", { dimensions: 768 }),
  // ...
});
```

Retrieval-augmented generation grounds an answer in retrieved documents rather than the model's parameters (Lewis et al., 2020); the `namespace` column decides which documents are even eligible to be retrieved for a given specialist. One table means one schema, one index, one seeding script, and isolation becomes a `WHERE namespace = ...`, not a second database.

## The retrieval function is the boundary

Similarity search runs through `match_coach_kb`, a SQL function that does cosine distance (`embedding <=> query`) filtered by namespace, wrapped in [`src/lib/pgvector.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-09/src/lib/pgvector.ts):

```ts
export async function matchCoachKb(embedding: number[], namespace: string, k: number) {
  const literal = `[${embedding.join(",")}]`;
  const result = await db.execute(
    sql`SELECT id, source, content, similarity
        FROM match_coach_kb(${literal}::vector(768), ${namespace}, ${k})`,
  );
  // ...
}
```

pgvector adds the `vector` type and similarity operators to Postgres (pgvector, 2025), and an approximate-nearest-neighbor index keeps top-k search fast as the corpus grows (Malkov & Yashunin, 2020). The key line is the `namespace` argument: nothing outside the requested namespace can come back.

Then each specialist hard-codes its namespace:

```ts
export async function retrieveNutritionKb(query: string, k = 5): Promise<Citation[]> {
  const embedding = await embed(query);
  const matches = await matchCoachKb(embedding, "nutrition_kb", k);
  return matches.map((m) => ({ source: m.source, snippet: m.content, agent: "nutrition" }));
}
```

The Nutrition specialist can't retrieve workout documents, because its retrieval function only ever passes `"nutrition_kb"`. Isolation is enforced in code, not by a prompt asking the model to "only use nutrition sources."

## Why this beats one shared retriever

A training question against a combined corpus returns a blurry mix of sleep science, recipes, and program design, and the model grounds its answer in whatever ranked highest. Namespacing removes the cross-talk at the source: a nutrition query is scored only against nutrition documents, so the top-k is sharper, the prompt is shorter, and the citation trail is honest, because every snippet the Nutrition finding cites genuinely came from `nutrition_kb`. Each namespace can also be seeded, tuned, and evaluated independently (Module 4 evaluates them per-specialist).

## In practice

Run `pnpm kb:status` and note the row counts per namespace. Then ask the coach a nutrition question and open the LangSmith trace: find the `retrieve` step and confirm every returned `source` is a nutrition document. Now picture adding a fifth namespace, `mindset_kb`, and list the complete set of changes it would take. That the list is short, and that nothing in `pgvector.ts` or the schema has to change, is the containment this pattern buys, and Module 6 makes it concrete.

## Key Takeaways

- Per-agent RAG here is one `coach_kb` table with a `namespace` column, not a database per specialist.
- Isolation is a `WHERE namespace = ...`, so there's one schema, one index, and one seeding script.
- `match_coach_kb` is the boundary: it does namespace-filtered cosine search, and nothing outside the namespace can return.
- Each specialist's retrieval function hard-codes its namespace, so isolation is enforced in code, not by a prompt.
- Namespacing sharpens top-k, shortens the prompt, and keeps the citation trail honest, and it lets each namespace be seeded and evaluated on its own.

## References

Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. In *Advances in Neural Information Processing Systems* (Vol. 33, pp. 9459-9474). Curran Associates.

Malkov, Y. A., & Yashunin, D. A. (2020). Efficient and robust approximate nearest neighbor search using hierarchical navigable small world graphs. *IEEE Transactions on Pattern Analysis and Machine Intelligence, 42*(4), 824-836. https://doi.org/10.1109/TPAMI.2018.2889473

pgvector. (2025). *pgvector: Open-source vector similarity search for Postgres* [Computer software]. GitHub. https://github.com/pgvector/pgvector
