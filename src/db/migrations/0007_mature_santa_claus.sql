CREATE TABLE "lesson_embeddings" (
	"lesson_id" uuid PRIMARY KEY NOT NULL,
	"embedding" vector(768),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "lesson_embeddings" ADD CONSTRAINT "lesson_embeddings_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
-- pgvector cosine ANN index (HNSW: no training needed, robust on an empty table).
CREATE INDEX IF NOT EXISTS "lesson_embeddings_embedding_idx" ON "lesson_embeddings" USING hnsw ("embedding" vector_cosine_ops);