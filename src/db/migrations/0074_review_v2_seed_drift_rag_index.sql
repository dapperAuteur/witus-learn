CREATE TABLE "course_rag_index" (
	"course_id" uuid PRIMARY KEY NOT NULL,
	"tenant_id" uuid NOT NULL,
	"content_hash" text NOT NULL,
	"indexed_at" timestamp with time zone DEFAULT now() NOT NULL,
	"chunk_count" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "lesson_seed_drifts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"lesson_id" uuid NOT NULL,
	"file_hash" text NOT NULL,
	"app_hash" text NOT NULL,
	"file_content" jsonb NOT NULL,
	"detected_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_checked_at" timestamp with time zone DEFAULT now() NOT NULL,
	"resolution" text,
	"resolved_at" timestamp with time zone,
	"resolved_by" text,
	CONSTRAINT "lesson_seed_drifts_lesson_uq" UNIQUE("lesson_id"),
	CONSTRAINT "lesson_seed_drifts_resolution_chk" CHECK ("lesson_seed_drifts"."resolution" is null or "lesson_seed_drifts"."resolution" in ('kept_app'))
);
--> statement-breakpoint
ALTER TABLE "lessons" ADD COLUMN "seed_hash" text;--> statement-breakpoint
ALTER TABLE "course_auditors" ADD COLUMN "credential_evidence_url" text;--> statement-breakpoint
ALTER TABLE "course_rag_index" ADD CONSTRAINT "course_rag_index_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_rag_index" ADD CONSTRAINT "course_rag_index_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_seed_drifts" ADD CONSTRAINT "lesson_seed_drifts_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_seed_drifts" ADD CONSTRAINT "lesson_seed_drifts_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_seed_drifts" ADD CONSTRAINT "lesson_seed_drifts_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_seed_drifts" ADD CONSTRAINT "lesson_seed_drifts_resolved_by_users_id_fk" FOREIGN KEY ("resolved_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "course_rag_index_tenant_idx" ON "course_rag_index" USING btree ("tenant_id");--> statement-breakpoint
CREATE INDEX "lesson_seed_drifts_tenant_course_idx" ON "lesson_seed_drifts" USING btree ("tenant_id","course_id");--> statement-breakpoint
ALTER TABLE "course_auditors" ADD CONSTRAINT "course_auditors_evidence_url_chk" CHECK ("course_auditors"."credential_evidence_url" is null or ("course_auditors"."credential_evidence_url" like 'https://%' and char_length("course_auditors"."credential_evidence_url") <= 500));