-- CYOA crossroads embeddings move from Gemini (768) to mistral-embed (1024), like the source index did in
-- 0076. ADDITIVE: the legacy "embedding" column stays so the code deployed before this migration keeps
-- answering while it runs; new code writes and reads only "embedding_v2" and records "content_hash" (md5
-- of the text it embedded) so staleness is a comparison, not a timestamp. A later cleanup migration drops
-- "embedding" (plans/99-rag-embedding-v1-cleanup.md). The hnsw index is written by hand, like 0007's and
-- 0076's, because drizzle-kit does not emit vector indexes. IF NOT EXISTS makes a second run a no-op.
ALTER TABLE "lesson_embeddings" ADD COLUMN IF NOT EXISTS "embedding_v2" vector(1024);
--> statement-breakpoint
ALTER TABLE "lesson_embeddings" ADD COLUMN IF NOT EXISTS "content_hash" text;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "lesson_embeddings_embedding_v2_idx" ON "lesson_embeddings" USING hnsw ("embedding_v2" vector_cosine_ops);
