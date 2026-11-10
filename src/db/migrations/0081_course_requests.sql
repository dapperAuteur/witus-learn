-- Course requests and the instructor-change log (BAM, 2026-11-10: teachers request courses; school admins assign
-- teachers to courses). ADDITIVE: two new tables only, so code deployed before this migration keeps working while
-- it runs. Applied by .github/workflows/migrate-production.yml on the merge.
CREATE TABLE "course_instructor_changes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"from_instructor_id" text,
	"to_instructor_id" text,
	"actor_user_id" text,
	"actor_role" text NOT NULL,
	"source" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "course_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"requester_user_id" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"reason" text NOT NULL,
	"brief_url" text,
	"status" text DEFAULT 'requested' NOT NULL,
	"decision_note" text,
	"decided_by_user_id" text,
	"decided_at" timestamp with time zone,
	"course_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "course_requests_status_chk" CHECK ("course_requests"."status" in ('requested','approved','declined'))
);
--> statement-breakpoint
ALTER TABLE "course_instructor_changes" ADD CONSTRAINT "course_instructor_changes_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_instructor_changes" ADD CONSTRAINT "course_instructor_changes_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_instructor_changes" ADD CONSTRAINT "course_instructor_changes_from_instructor_id_users_id_fk" FOREIGN KEY ("from_instructor_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_instructor_changes" ADD CONSTRAINT "course_instructor_changes_to_instructor_id_users_id_fk" FOREIGN KEY ("to_instructor_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_instructor_changes" ADD CONSTRAINT "course_instructor_changes_actor_user_id_users_id_fk" FOREIGN KEY ("actor_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_requests" ADD CONSTRAINT "course_requests_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_requests" ADD CONSTRAINT "course_requests_requester_user_id_users_id_fk" FOREIGN KEY ("requester_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_requests" ADD CONSTRAINT "course_requests_decided_by_user_id_users_id_fk" FOREIGN KEY ("decided_by_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_requests" ADD CONSTRAINT "course_requests_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "course_instructor_changes_course_idx" ON "course_instructor_changes" USING btree ("course_id","created_at");--> statement-breakpoint
CREATE INDEX "course_requests_tenant_status_idx" ON "course_requests" USING btree ("tenant_id","status","created_at");--> statement-breakpoint
CREATE INDEX "course_requests_requester_idx" ON "course_requests" USING btree ("requester_user_id","created_at");