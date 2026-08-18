CREATE TABLE "lesson_note_recipients" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"note_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	CONSTRAINT "lesson_note_recipients_note_user_uq" UNIQUE("note_id","user_id")
);
--> statement-breakpoint
CREATE TABLE "lesson_note_shares" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"note_id" uuid NOT NULL,
	"teacher_user_id" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "lesson_note_shares_note_teacher_uq" UNIQUE("note_id","teacher_user_id")
);
--> statement-breakpoint
CREATE TABLE "lesson_notes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"lesson_id" uuid NOT NULL,
	"author_id" text NOT NULL,
	"kind" text DEFAULT 'personal' NOT NULL,
	"body" text NOT NULL,
	"quote" text,
	"context_prefix" text,
	"context_suffix" text,
	"block_id" text,
	"cohort_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "lesson_notes_kind_chk" CHECK ("lesson_notes"."kind" in ('personal','teacher')),
	CONSTRAINT "lesson_notes_audience_chk" CHECK (("lesson_notes"."kind" = 'teacher') = ("lesson_notes"."cohort_id" is not null))
);
--> statement-breakpoint
ALTER TABLE "lesson_note_recipients" ADD CONSTRAINT "lesson_note_recipients_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_note_recipients" ADD CONSTRAINT "lesson_note_recipients_note_id_lesson_notes_id_fk" FOREIGN KEY ("note_id") REFERENCES "public"."lesson_notes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_note_recipients" ADD CONSTRAINT "lesson_note_recipients_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_note_shares" ADD CONSTRAINT "lesson_note_shares_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_note_shares" ADD CONSTRAINT "lesson_note_shares_note_id_lesson_notes_id_fk" FOREIGN KEY ("note_id") REFERENCES "public"."lesson_notes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_note_shares" ADD CONSTRAINT "lesson_note_shares_teacher_user_id_users_id_fk" FOREIGN KEY ("teacher_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_notes" ADD CONSTRAINT "lesson_notes_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_notes" ADD CONSTRAINT "lesson_notes_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_notes" ADD CONSTRAINT "lesson_notes_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_notes" ADD CONSTRAINT "lesson_notes_author_id_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_notes" ADD CONSTRAINT "lesson_notes_cohort_id_cohorts_id_fk" FOREIGN KEY ("cohort_id") REFERENCES "public"."cohorts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "lesson_note_recipients_tenant_user_idx" ON "lesson_note_recipients" USING btree ("tenant_id","user_id");--> statement-breakpoint
CREATE INDEX "lesson_note_shares_tenant_teacher_idx" ON "lesson_note_shares" USING btree ("tenant_id","teacher_user_id");--> statement-breakpoint
CREATE INDEX "lesson_notes_tenant_author_lesson_idx" ON "lesson_notes" USING btree ("tenant_id","author_id","lesson_id");--> statement-breakpoint
CREATE INDEX "lesson_notes_tenant_lesson_kind_idx" ON "lesson_notes" USING btree ("tenant_id","lesson_id","kind");--> statement-breakpoint
CREATE INDEX "lesson_notes_tenant_author_course_idx" ON "lesson_notes" USING btree ("tenant_id","author_id","course_id");--> statement-breakpoint
CREATE INDEX "lesson_notes_tenant_cohort_idx" ON "lesson_notes" USING btree ("tenant_id","cohort_id");