CREATE TABLE "contact_overrides" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"other_user_id" text NOT NULL,
	"mode" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "contact_overrides_tenant_user_other_uq" UNIQUE("tenant_id","user_id","other_user_id"),
	CONSTRAINT "contact_overrides_mode_chk" CHECK ("contact_overrides"."mode" in ('direct','request','school')),
	CONSTRAINT "contact_overrides_not_self_chk" CHECK ("contact_overrides"."user_id" <> "contact_overrides"."other_user_id")
);
--> statement-breakpoint
CREATE TABLE "contact_pings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"cohort_id" uuid NOT NULL,
	"student_user_id" text NOT NULL,
	"from_user_id" text NOT NULL,
	"to_user_id" text NOT NULL,
	"from_role" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"connected_at" timestamp with time zone,
	"emailed_at" timestamp with time zone,
	CONSTRAINT "contact_pings_role_chk" CHECK ("contact_pings"."from_role" in ('parent','teacher')),
	CONSTRAINT "contact_pings_not_self_chk" CHECK ("contact_pings"."from_user_id" <> "contact_pings"."to_user_id"),
	CONSTRAINT "contact_pings_student_not_party_chk" CHECK ("contact_pings"."student_user_id" <> "contact_pings"."from_user_id" and "contact_pings"."student_user_id" <> "contact_pings"."to_user_id")
);
--> statement-breakpoint
CREATE TABLE "contact_settings" (
	"tenant_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"parents_mode" text DEFAULT 'request' NOT NULL,
	"teachers_mode" text DEFAULT 'request' NOT NULL,
	"phone" text,
	"note" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "contact_settings_tenant_id_user_id_pk" PRIMARY KEY("tenant_id","user_id"),
	CONSTRAINT "contact_settings_parents_mode_chk" CHECK ("contact_settings"."parents_mode" in ('direct','request','school')),
	CONSTRAINT "contact_settings_teachers_mode_chk" CHECK ("contact_settings"."teachers_mode" in ('direct','request','school'))
);
--> statement-breakpoint
ALTER TABLE "contact_overrides" ADD CONSTRAINT "contact_overrides_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact_overrides" ADD CONSTRAINT "contact_overrides_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact_overrides" ADD CONSTRAINT "contact_overrides_other_user_id_users_id_fk" FOREIGN KEY ("other_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact_pings" ADD CONSTRAINT "contact_pings_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact_pings" ADD CONSTRAINT "contact_pings_cohort_id_cohorts_id_fk" FOREIGN KEY ("cohort_id") REFERENCES "public"."cohorts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact_pings" ADD CONSTRAINT "contact_pings_student_user_id_users_id_fk" FOREIGN KEY ("student_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact_pings" ADD CONSTRAINT "contact_pings_from_user_id_users_id_fk" FOREIGN KEY ("from_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact_pings" ADD CONSTRAINT "contact_pings_to_user_id_users_id_fk" FOREIGN KEY ("to_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact_settings" ADD CONSTRAINT "contact_settings_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact_settings" ADD CONSTRAINT "contact_settings_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "contact_pings_tenant_to_idx" ON "contact_pings" USING btree ("tenant_id","to_user_id","created_at");--> statement-breakpoint
CREATE INDEX "contact_pings_tenant_from_idx" ON "contact_pings" USING btree ("tenant_id","from_user_id","created_at");--> statement-breakpoint
CREATE INDEX "contact_pings_email_due_idx" ON "contact_pings" USING btree ("created_at") WHERE "contact_pings"."connected_at" is null and "contact_pings"."emailed_at" is null;