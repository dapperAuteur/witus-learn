CREATE TABLE "grade_overrides" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"cohort_id" uuid NOT NULL,
	"student_user_id" text NOT NULL,
	"teacher_user_id" text NOT NULL,
	"course_id" uuid NOT NULL,
	"lesson_id" uuid,
	"kind" text NOT NULL,
	"value" numeric(5, 2),
	"reason" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "grade_overrides_kind_chk" CHECK ("grade_overrides"."kind" in ('quiz_score','lesson_complete','course_complete')),
	CONSTRAINT "grade_overrides_value_chk" CHECK (("grade_overrides"."kind" = 'quiz_score') = ("grade_overrides"."value" is not null)),
	CONSTRAINT "grade_overrides_score_range_chk" CHECK ("grade_overrides"."value" is null or ("grade_overrides"."value" >= 0 and "grade_overrides"."value" <= 100)),
	CONSTRAINT "grade_overrides_lesson_chk" CHECK (("grade_overrides"."kind" = 'lesson_complete') = ("grade_overrides"."lesson_id" is not null)),
	CONSTRAINT "grade_overrides_reason_chk" CHECK (char_length(btrim("grade_overrides"."reason")) > 0)
);
--> statement-breakpoint
ALTER TABLE "grade_overrides" ADD CONSTRAINT "grade_overrides_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grade_overrides" ADD CONSTRAINT "grade_overrides_cohort_id_cohorts_id_fk" FOREIGN KEY ("cohort_id") REFERENCES "public"."cohorts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grade_overrides" ADD CONSTRAINT "grade_overrides_student_user_id_users_id_fk" FOREIGN KEY ("student_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grade_overrides" ADD CONSTRAINT "grade_overrides_teacher_user_id_users_id_fk" FOREIGN KEY ("teacher_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grade_overrides" ADD CONSTRAINT "grade_overrides_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grade_overrides" ADD CONSTRAINT "grade_overrides_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "grade_overrides_tenant_student_course_idx" ON "grade_overrides" USING btree ("tenant_id","student_user_id","course_id");--> statement-breakpoint
CREATE INDEX "grade_overrides_tenant_cohort_idx" ON "grade_overrides" USING btree ("tenant_id","cohort_id");