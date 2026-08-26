CREATE TABLE "course_interest_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"capacity" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"phone_raw" text,
	"credentials" text,
	"user_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"decided_at" timestamp with time zone,
	"decided_by" text,
	CONSTRAINT "course_interest_tenant_course_email_uq" UNIQUE("tenant_id","course_id","email"),
	CONSTRAINT "course_interest_capacity_chk" CHECK ("course_interest_requests"."capacity" in ('learner','beta','expert')),
	CONSTRAINT "course_interest_status_chk" CHECK ("course_interest_requests"."status" in ('pending','approved','declined'))
);
--> statement-breakpoint
ALTER TABLE "course_interest_requests" ADD CONSTRAINT "course_interest_requests_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_interest_requests" ADD CONSTRAINT "course_interest_requests_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_interest_requests" ADD CONSTRAINT "course_interest_requests_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_interest_requests" ADD CONSTRAINT "course_interest_requests_decided_by_users_id_fk" FOREIGN KEY ("decided_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "course_interest_tenant_course_idx" ON "course_interest_requests" USING btree ("tenant_id","course_id");