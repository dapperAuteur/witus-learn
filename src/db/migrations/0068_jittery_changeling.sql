CREATE TABLE "lesson_tour_embeds" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"lesson_id" uuid NOT NULL,
	"capture_id" uuid,
	"url" text NOT NULL,
	"credit_line" text NOT NULL,
	"set_by" text,
	"set_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "lesson_tour_embeds_lesson_uq" UNIQUE("lesson_id"),
	CONSTRAINT "lesson_tour_embeds_credit_chk" CHECK (char_length(btrim("lesson_tour_embeds"."credit_line")) > 0 and char_length("lesson_tour_embeds"."credit_line") <= 400),
	CONSTRAINT "lesson_tour_embeds_url_chk" CHECK ("lesson_tour_embeds"."url" like 'https://%' and char_length("lesson_tour_embeds"."url") <= 2000)
);
--> statement-breakpoint
ALTER TABLE "project_legs" ADD COLUMN "permission_note" text;--> statement-breakpoint
ALTER TABLE "lesson_tour_embeds" ADD CONSTRAINT "lesson_tour_embeds_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_tour_embeds" ADD CONSTRAINT "lesson_tour_embeds_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_tour_embeds" ADD CONSTRAINT "lesson_tour_embeds_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_tour_embeds" ADD CONSTRAINT "lesson_tour_embeds_capture_id_project_captures_id_fk" FOREIGN KEY ("capture_id") REFERENCES "public"."project_captures"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_tour_embeds" ADD CONSTRAINT "lesson_tour_embeds_set_by_users_id_fk" FOREIGN KEY ("set_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "lesson_tour_embeds_tenant_course_idx" ON "lesson_tour_embeds" USING btree ("tenant_id","course_id");--> statement-breakpoint
CREATE INDEX "lesson_tour_embeds_capture_idx" ON "lesson_tour_embeds" USING btree ("capture_id");--> statement-breakpoint
ALTER TABLE "project_legs" ADD CONSTRAINT "project_legs_permission_note_chk" CHECK ("project_legs"."permission_note" is null or char_length("project_legs"."permission_note") <= 500);