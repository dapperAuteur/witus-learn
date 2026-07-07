CREATE TABLE "source_chunks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"source_id" uuid,
	"kind" text NOT NULL,
	"title" text,
	"text" text NOT NULL,
	"embedding" vector(768),
	"ord" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "source_chunks_kind_chk" CHECK ("source_chunks"."kind" in ('public_domain_text','lesson','citation'))
);
--> statement-breakpoint
ALTER TABLE "source_chunks" ADD CONSTRAINT "source_chunks_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "source_chunks" ADD CONSTRAINT "source_chunks_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "source_chunks" ADD CONSTRAINT "source_chunks_source_id_course_sources_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."course_sources"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "source_chunks_tenant_course_idx" ON "source_chunks" USING btree ("tenant_id","course_id");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "source_chunks_embedding_idx" ON "source_chunks" USING hnsw ("embedding" vector_cosine_ops);
