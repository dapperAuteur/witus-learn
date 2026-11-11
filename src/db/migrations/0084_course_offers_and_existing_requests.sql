-- Course offers and requests for an existing course (BAM, 2026-11-10: "request a course should allow teacher to
-- choose from list of existing courses also, and approve assigned courses"). ADDITIVE: one new table and two new
-- course_requests columns; every existing request reads as kind 'new' with no requested course, which the new check
-- admits, so code deployed before this migration keeps working while it runs. Applied by
-- .github/workflows/migrate-production.yml on the merge.
CREATE TABLE "course_offers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"teacher_user_id" text NOT NULL,
	"from_instructor_id" text,
	"offered_by_user_id" text,
	"offered_by_role" text NOT NULL,
	"status" text DEFAULT 'offered' NOT NULL,
	"decision_note" text,
	"decided_at" timestamp with time zone,
	"expires_at" timestamp with time zone NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "course_offers_status_chk" CHECK ("course_offers"."status" in ('offered','accepted','declined','withdrawn','expired')),
	CONSTRAINT "course_offers_role_chk" CHECK ("course_offers"."offered_by_role" in ('platform_owner','brand_admin'))
);
--> statement-breakpoint
ALTER TABLE "course_requests" ADD COLUMN "kind" text DEFAULT 'new' NOT NULL;--> statement-breakpoint
ALTER TABLE "course_requests" ADD COLUMN "requested_course_id" uuid;--> statement-breakpoint
ALTER TABLE "course_offers" ADD CONSTRAINT "course_offers_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_offers" ADD CONSTRAINT "course_offers_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_offers" ADD CONSTRAINT "course_offers_teacher_user_id_users_id_fk" FOREIGN KEY ("teacher_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_offers" ADD CONSTRAINT "course_offers_from_instructor_id_users_id_fk" FOREIGN KEY ("from_instructor_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_offers" ADD CONSTRAINT "course_offers_offered_by_user_id_users_id_fk" FOREIGN KEY ("offered_by_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "course_offers_open_course_uq" ON "course_offers" USING btree ("course_id") WHERE "course_offers"."status" = 'offered';--> statement-breakpoint
CREATE INDEX "course_offers_teacher_idx" ON "course_offers" USING btree ("tenant_id","teacher_user_id","status");--> statement-breakpoint
ALTER TABLE "course_requests" ADD CONSTRAINT "course_requests_requested_course_id_courses_id_fk" FOREIGN KEY ("requested_course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_requests" ADD CONSTRAINT "course_requests_kind_chk" CHECK (("course_requests"."kind" = 'new' and "course_requests"."requested_course_id" is null) or ("course_requests"."kind" = 'existing' and "course_requests"."requested_course_id" is not null));