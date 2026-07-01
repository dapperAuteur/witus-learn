CREATE TABLE "recall_attempts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"course_id" uuid NOT NULL,
	"lesson_id" uuid NOT NULL,
	"prompt_index" integer DEFAULT 0 NOT NULL,
	"got_it" boolean NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "lessons" ADD COLUMN "recall_content" jsonb;--> statement-breakpoint
ALTER TABLE "recall_attempts" ADD CONSTRAINT "recall_attempts_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "recall_attempts" ADD CONSTRAINT "recall_attempts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "recall_attempts" ADD CONSTRAINT "recall_attempts_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "recall_attempts" ADD CONSTRAINT "recall_attempts_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "recall_attempts_tenant_course_idx" ON "recall_attempts" USING btree ("tenant_id","course_id");--> statement-breakpoint
CREATE INDEX "recall_attempts_user_idx" ON "recall_attempts" USING btree ("user_id");