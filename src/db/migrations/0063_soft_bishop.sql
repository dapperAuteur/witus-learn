CREATE TABLE "cohort_teachers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"cohort_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"assigned_by" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "cohort_teachers_cohort_user_uq" UNIQUE("cohort_id","user_id")
);
--> statement-breakpoint
CREATE TABLE "teacher_age_exceptions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"granted_by" text NOT NULL,
	"reason" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"revoked_at" timestamp with time zone,
	"revoked_by" text
);
--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "adult_attested_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "cohort_teachers" ADD CONSTRAINT "cohort_teachers_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cohort_teachers" ADD CONSTRAINT "cohort_teachers_cohort_id_cohorts_id_fk" FOREIGN KEY ("cohort_id") REFERENCES "public"."cohorts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cohort_teachers" ADD CONSTRAINT "cohort_teachers_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cohort_teachers" ADD CONSTRAINT "cohort_teachers_assigned_by_users_id_fk" FOREIGN KEY ("assigned_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "teacher_age_exceptions" ADD CONSTRAINT "teacher_age_exceptions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "teacher_age_exceptions" ADD CONSTRAINT "teacher_age_exceptions_granted_by_users_id_fk" FOREIGN KEY ("granted_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "teacher_age_exceptions" ADD CONSTRAINT "teacher_age_exceptions_revoked_by_users_id_fk" FOREIGN KEY ("revoked_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "cohort_teachers_tenant_user_idx" ON "cohort_teachers" USING btree ("tenant_id","user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "teacher_age_exceptions_active_uq" ON "teacher_age_exceptions" USING btree ("user_id") WHERE "teacher_age_exceptions"."revoked_at" is null;--> statement-breakpoint
CREATE INDEX "teacher_age_exceptions_created_idx" ON "teacher_age_exceptions" USING btree ("created_at");--> statement-breakpoint
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_managed_not_adult_chk" CHECK ("user_profiles"."managed_by_user_id" is null or "user_profiles"."adult_attested_at" is null);--> statement-breakpoint
-- Hand-written backfill: every existing cohort's owner becomes a teacher of it, so the new
-- teacher-based checks (canManageCohort, the parent contact list) keep treating today's owners
-- exactly as they did before this migration. assigned_by stays NULL to mark these as backfilled.
INSERT INTO "cohort_teachers" ("tenant_id", "cohort_id", "user_id")
SELECT "tenant_id", "id", "owner_id" FROM "cohorts"
ON CONFLICT ("cohort_id", "user_id") DO NOTHING;
