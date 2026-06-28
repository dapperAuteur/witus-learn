CREATE TABLE "course_claims" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"course_id" uuid NOT NULL,
	"lesson_id" uuid,
	"source_id" uuid,
	"claim_text" text NOT NULL,
	"location" text,
	"status" text DEFAULT 'unconfirmed' NOT NULL,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"confirmed_at" timestamp with time zone,
	"confirmed_by" text,
	CONSTRAINT "course_claims_status_chk" CHECK ("course_claims"."status" in ('unconfirmed','confirmed','dropped'))
);
--> statement-breakpoint
CREATE TABLE "course_glossary_terms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"course_id" uuid NOT NULL,
	"lesson_id" uuid,
	"term" text NOT NULL,
	"phonetic" text,
	"definition" text NOT NULL,
	"definition_format" text DEFAULT 'markdown' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "course_glossary_course_term_uq" UNIQUE("course_id","term"),
	CONSTRAINT "course_glossary_format_chk" CHECK ("course_glossary_terms"."definition_format" in ('markdown','tiptap'))
);
--> statement-breakpoint
CREATE TABLE "course_sources" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"course_id" uuid NOT NULL,
	"in_text" text,
	"apa" text,
	"doi" text,
	"url" text,
	"pdf_url" text,
	"verified" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "course_claims" ADD CONSTRAINT "course_claims_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_claims" ADD CONSTRAINT "course_claims_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_claims" ADD CONSTRAINT "course_claims_source_id_course_sources_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."course_sources"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_claims" ADD CONSTRAINT "course_claims_confirmed_by_users_id_fk" FOREIGN KEY ("confirmed_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_glossary_terms" ADD CONSTRAINT "course_glossary_terms_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_glossary_terms" ADD CONSTRAINT "course_glossary_terms_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_sources" ADD CONSTRAINT "course_sources_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;