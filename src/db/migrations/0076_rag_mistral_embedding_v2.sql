-- RAG embeddings move from Gemini (768) to mistral-embed (1024). ADDITIVE: the legacy "embedding"
-- column stays so the code deployed before this migration keeps answering while it runs; new code
-- writes and reads only "embedding_v2". A later cleanup migration drops "embedding"
-- (plans/99-rag-embedding-v1-cleanup.md). The hnsw index is written by hand, like 0026's, because
-- drizzle-kit does not emit vector indexes. IF NOT EXISTS makes a second run a no-op.
ALTER TABLE "source_chunks" ADD COLUMN IF NOT EXISTS "embedding_v2" vector(1024);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "source_chunks_embedding_v2_idx" ON "source_chunks" USING hnsw ("embedding_v2" vector_cosine_ops);
