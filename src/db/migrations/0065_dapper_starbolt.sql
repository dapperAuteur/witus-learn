CREATE TABLE "contact_cohort_overrides" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"cohort_id" uuid NOT NULL,
	"mode" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "contact_cohort_overrides_tenant_user_cohort_uq" UNIQUE("tenant_id","user_id","cohort_id"),
	CONSTRAINT "contact_cohort_overrides_mode_chk" CHECK ("contact_cohort_overrides"."mode" in ('direct','request','school'))
);
--> statement-breakpoint
ALTER TABLE "contact_pings" ADD COLUMN "closed_by" text;--> statement-breakpoint
ALTER TABLE "contact_cohort_overrides" ADD CONSTRAINT "contact_cohort_overrides_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact_cohort_overrides" ADD CONSTRAINT "contact_cohort_overrides_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact_cohort_overrides" ADD CONSTRAINT "contact_cohort_overrides_cohort_id_cohorts_id_fk" FOREIGN KEY ("cohort_id") REFERENCES "public"."cohorts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact_pings" ADD CONSTRAINT "contact_pings_closed_by_users_id_fk" FOREIGN KEY ("closed_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;