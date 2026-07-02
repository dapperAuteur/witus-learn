Goal: After this lesson you can install the coach and get its pgvector database ready, either with real API keys or free and local with Ollama.

Follow along in the [Centenarian Coach repo](https://github.com/dapperAuteur/centenarian-coach-multiagent), and see it running at [the deployed coach](https://centenarian.coach.multiagent.witus.online/). On screen this lesson opens [`.env.example`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-02/.env.example), [`drizzle.config.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-02/drizzle.config.ts), and [`src/db/schema.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-02/src/db/schema.ts).

## What you need

The coach is a TypeScript app: a Next.js App Router project whose API routes run a [LangGraph.js](https://langchain-ai.github.io/langgraphjs/) graph (LangChain, 2025). To install and prepare it you need four things.

- Node 20+ and pnpm. The repo pins Node in `.nvmrc`, and the scripts assume pnpm.
- A Postgres database with the pgvector extension. Neon's free tier works and is what the course assumes (Neon, 2025). pgvector adds the vector type and the similarity operators retrieval depends on (pgvector, 2025).
- An LLM provider. Either an API key, `ANTHROPIC_API_KEY` for Claude and `GEMINI_API_KEY` for embeddings, or run the whole coach free and local with Ollama (below). Embeddings default to Gemini, so set `GEMINI_API_KEY` even if you run chat on Claude.
- Optional: `LANGSMITH_API_KEY` for tracing. Tracing is fail-soft, so the app runs without it, but you'll want it by Lesson 4 to see the trace.

## Steps

```bash
# 1. Clone and install
git clone https://github.com/dapperAuteur/centenarian-coach-multiagent.git
cd centenarian-coach-multiagent
pnpm install

# 2. Configure
cp .env.example .env.local
#   Fill ANTHROPIC_API_KEY and/or GEMINI_API_KEY, STORAGE_DATABASE_URL
#   (your Neon connection string), and optionally LANGSMITH_API_KEY.

# 3. Apply the schema to your database
pnpm db:migrate
```

`.env.example` is the annotated source of truth for every variable; read it once. The connection string is read as `STORAGE_DATABASE_URL` (or `DATABASE_URL`).

## What `pnpm db:migrate` actually does

It runs the Drizzle migrations against your database (Drizzle Team, 2025). The first migration creates the `coach_kb` table, one table, with a `namespace` column and an `embedding vector(768)` column, and the `match_coach_kb(query_embedding, namespace_filter, match_count)` SQL function that does the cosine-similarity search each specialist calls. That single namespaced table is the per-agent-RAG pattern you dissect in Module 2. For now, just confirm the migration applies cleanly. The Drizzle config lives in [`drizzle.config.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-02/drizzle.config.ts), and the schema it generates from is [`src/db/schema.ts`](https://github.com/dapperAuteur/centenarian-coach-multiagent/blob/course/lesson-02/src/db/schema.ts).

## Running it free with Ollama

Don't want to sign up for a paid API to try the course? You can run the whole coach free and local with [Ollama](https://ollama.com), which serves open models on your own machine. There's no API key: the coach just points at your local Ollama server.

```bash
# 1. Install Ollama (https://ollama.com), then pull two models:
ollama pull nomic-embed-text   # embeddings (768-dim, matches the coach_kb column)
ollama pull llama3.1           # a local chat model

# 2. In .env.local, point chat AND embeddings at Ollama:
COACH_LLM_PROVIDER=ollama
COACH_EMBED_PROVIDER=ollama
OLLAMA_BASE_URL=http://localhost:11434   # the default; override only if needed
```

That's the whole setup, no `ANTHROPIC_API_KEY` or `GEMINI_API_KEY` needed. You can also mix providers, for example Claude for chat and Ollama for embeddings. One rule, covered in Lesson 10: seed and query must use the same embedding backend, so if you switch `COACH_EMBED_PROVIDER` after seeding, re-seed with `pnpm kb:clear --all && pnpm kb:seed --fresh`.

## In practice

You're set up when `pnpm install` and `pnpm db:migrate` both finish without error. You have not run the coach yet; that needs a seeded corpus, which is Lesson 4. If you prefer Python, Lesson 3 maps the concepts across before you continue. If you're extending the app's routes or pages, read the framework docs bundled under `node_modules/next/dist/docs/` rather than relying on memory, because the App Router's data-fetching APIs move between major versions (Vercel, 2025).

## Key Takeaways

- The coach needs Node 20+, pnpm, and a Postgres database with the pgvector extension (Neon's free tier is the assumed setup).
- `pnpm db:migrate` creates the `coach_kb` table (namespace column, `vector(768)` embedding) and the `match_coach_kb` search function.
- `.env.example` is the annotated source of truth; the database URL is read as `STORAGE_DATABASE_URL` or `DATABASE_URL`.
- You can run the whole coach free with Ollama by pointing both chat and embeddings at a local server, no keys required.
- Switching the embedding provider after seeding means re-seeding, because seed and query must share one embedding space.

## References

Drizzle Team. (2025). *Drizzle ORM documentation*. https://orm.drizzle.team/docs

LangChain. (2025). *LangGraph.js documentation*. https://langchain-ai.github.io/langgraphjs/

Neon. (2025). *Neon documentation: Postgres with pgvector*. https://neon.tech/docs

pgvector. (2025). *pgvector: Open-source vector similarity search for Postgres* [Computer software]. GitHub. https://github.com/pgvector/pgvector

Vercel. (2025). *Next.js documentation: App Router*. https://nextjs.org/docs/app
