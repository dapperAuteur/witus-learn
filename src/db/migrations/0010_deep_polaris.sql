CREATE TABLE "assignment_submissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"lesson_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"body" text NOT NULL,
	"status" text DEFAULT 'submitted' NOT NULL,
	"grade" integer,
	"feedback" text,
	"submitted_at" timestamp with time zone DEFAULT now() NOT NULL,
	"graded_at" timestamp with time zone,
	CONSTRAINT "assignment_submissions_lesson_id_user_id_pk" PRIMARY KEY("lesson_id","user_id"),
	CONSTRAINT "assignment_submissions_status_chk" CHECK ("assignment_submissions"."status" in ('submitted','graded')),
	CONSTRAINT "assignment_submissions_grade_chk" CHECK ("assignment_submissions"."grade" is null or ("assignment_submissions"."grade" >= 0 and "assignment_submissions"."grade" <= 100))
);
--> statement-breakpoint
ALTER TABLE "lessons" DROP CONSTRAINT "lessons_type_chk";--> statement-breakpoint
ALTER TABLE "assignment_submissions" ADD CONSTRAINT "assignment_submissions_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignment_submissions" ADD CONSTRAINT "assignment_submissions_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignment_submissions" ADD CONSTRAINT "assignment_submissions_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignment_submissions" ADD CONSTRAINT "assignment_submissions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "assignment_submissions_lesson_idx" ON "assignment_submissions" USING btree ("lesson_id");--> statement-breakpoint
CREATE INDEX "assignment_submissions_tenant_status_idx" ON "assignment_submissions" USING btree ("tenant_id","status");--> statement-breakpoint
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_type_chk" CHECK ("lessons"."lesson_type" in ('video','text','audio','slides','quiz','360video','photo_360','virtual_tour','map','assignment'));