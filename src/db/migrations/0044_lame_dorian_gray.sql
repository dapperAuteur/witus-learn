CREATE TABLE "course_citation_checks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"citation_key" text NOT NULL,
	"course_slug" text NOT NULL,
	"status" text DEFAULT 'unverified' NOT NULL,
	"note" text,
	"checked_by" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "course_citation_checks_tenant_key_uq" UNIQUE("tenant_id","citation_key"),
	CONSTRAINT "course_citation_checks_status_chk" CHECK ("course_citation_checks"."status" in ('unverified','verified','broken','mismatch'))
);
--> statement-breakpoint
ALTER TABLE "course_citation_checks" ADD CONSTRAINT "course_citation_checks_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_citation_checks" ADD CONSTRAINT "course_citation_checks_checked_by_users_id_fk" FOREIGN KEY ("checked_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "course_citation_checks_tenant_course_idx" ON "course_citation_checks" USING btree ("tenant_id","course_slug");