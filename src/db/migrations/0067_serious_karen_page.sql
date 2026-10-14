CREATE TABLE "lesson_reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"lesson_id" uuid NOT NULL,
	"need_kind" text NOT NULL,
	"auditor_id" uuid,
	"reviewer_user_id" text,
	"reviewer_name" text NOT NULL,
	"reviewer_credential" text NOT NULL,
	"verdict" text NOT NULL,
	"correction" text,
	"correction_applied_at" timestamp with time zone,
	"lesson_hash" text NOT NULL,
	"decided_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "lesson_reviews_tenant_lesson_kind_uq" UNIQUE("tenant_id","lesson_id","need_kind"),
	CONSTRAINT "lesson_reviews_need_kind_chk" CHECK ("lesson_reviews"."need_kind" in ('qr','p')),
	CONSTRAINT "lesson_reviews_verdict_chk" CHECK ("lesson_reviews"."verdict" in ('cleared','cleared_with_correction','not_cleared')),
	CONSTRAINT "lesson_reviews_correction_chk" CHECK (("lesson_reviews"."verdict" = 'cleared_with_correction') = ("lesson_reviews"."correction" is not null) and ("lesson_reviews"."correction" is null or char_length(btrim("lesson_reviews"."correction")) between 1 and 1000)),
	CONSTRAINT "lesson_reviews_credit_chk" CHECK (char_length(btrim("lesson_reviews"."reviewer_name")) > 0 and char_length(btrim("lesson_reviews"."reviewer_credential")) > 0),
	CONSTRAINT "lesson_reviews_applied_chk" CHECK ("lesson_reviews"."correction_applied_at" is null or "lesson_reviews"."verdict" = 'cleared_with_correction')
);
--> statement-breakpoint
ALTER TABLE "lessons" ADD COLUMN "review_needs" jsonb;--> statement-breakpoint
ALTER TABLE "course_auditors" ADD COLUMN "reviewer_name" text;--> statement-breakpoint
ALTER TABLE "course_auditors" ADD COLUMN "reviewer_credential" text;--> statement-breakpoint
ALTER TABLE "lesson_reviews" ADD CONSTRAINT "lesson_reviews_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_reviews" ADD CONSTRAINT "lesson_reviews_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_reviews" ADD CONSTRAINT "lesson_reviews_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_reviews" ADD CONSTRAINT "lesson_reviews_auditor_id_course_auditors_id_fk" FOREIGN KEY ("auditor_id") REFERENCES "public"."course_auditors"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_reviews" ADD CONSTRAINT "lesson_reviews_reviewer_user_id_users_id_fk" FOREIGN KEY ("reviewer_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "lesson_reviews_tenant_course_idx" ON "lesson_reviews" USING btree ("tenant_id","course_id");