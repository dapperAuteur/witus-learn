CREATE TABLE "course_research_checks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"check_key" text NOT NULL,
	"status" text DEFAULT 'open' NOT NULL,
	"answer" text,
	"answered_by" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "course_research_checks_tenant_key_uq" UNIQUE("tenant_id","check_key"),
	CONSTRAINT "course_research_checks_status_chk" CHECK ("course_research_checks"."status" in ('open','verified','corrected','blocked'))
);
--> statement-breakpoint
ALTER TABLE "course_research_checks" ADD CONSTRAINT "course_research_checks_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_research_checks" ADD CONSTRAINT "course_research_checks_answered_by_users_id_fk" FOREIGN KEY ("answered_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "course_research_checks_tenant_status_idx" ON "course_research_checks" USING btree ("tenant_id","status");