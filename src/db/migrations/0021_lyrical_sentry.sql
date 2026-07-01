CREATE TABLE "social_shares" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid,
	"lesson_id" uuid,
	"channel" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "social_shares_channel_chk" CHECK ("social_shares"."channel" in ('copy','native','x','linkedin','facebook','email'))
);
--> statement-breakpoint
ALTER TABLE "problem_reports" DROP CONSTRAINT "problem_reports_kind_chk";--> statement-breakpoint
ALTER TABLE "social_shares" ADD CONSTRAINT "social_shares_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "social_shares" ADD CONSTRAINT "social_shares_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "social_shares" ADD CONSTRAINT "social_shares_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "social_shares_tenant_idx" ON "social_shares" USING btree ("tenant_id");--> statement-breakpoint
ALTER TABLE "problem_reports" ADD CONSTRAINT "problem_reports_kind_chk" CHECK ("problem_reports"."kind" in ('bug','feedback','idea','other'));