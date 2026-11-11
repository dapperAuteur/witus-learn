-- Account settings (BAM, 2026-11-10: "users should be able to manage their accounts"): the account change log,
-- pending email changes (only the token's SHA-256 is stored) and "ask to delete my account" requests. ADDITIVE:
-- three new tables only, so code deployed before this migration keeps working while it runs. Applied by
-- .github/workflows/migrate-production.yml on the merge.
CREATE TABLE "account_changes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"tenant_id" uuid,
	"actor_user_id" text,
	"actor_role" text NOT NULL,
	"field" text NOT NULL,
	"from_value" text,
	"to_value" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "account_changes_actor_role_chk" CHECK ("account_changes"."actor_role" in ('self','platform_owner','brand_admin','migration')),
	CONSTRAINT "account_changes_field_chk" CHECK ("account_changes"."field" in ('email','username','display_name'))
);
--> statement-breakpoint
CREATE TABLE "account_deletion_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"tenant_id" uuid,
	"status" text DEFAULT 'requested' NOT NULL,
	"resolved_by_user_id" text,
	"resolved_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "account_deletion_requests_status_chk" CHECK ("account_deletion_requests"."status" in ('requested','handled','withdrawn'))
);
--> statement-breakpoint
CREATE TABLE "email_change_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"tenant_id" uuid,
	"new_email" text NOT NULL,
	"token_hash" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"used_at" timestamp with time zone,
	"cancelled_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "account_changes" ADD CONSTRAINT "account_changes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account_changes" ADD CONSTRAINT "account_changes_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account_changes" ADD CONSTRAINT "account_changes_actor_user_id_users_id_fk" FOREIGN KEY ("actor_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account_deletion_requests" ADD CONSTRAINT "account_deletion_requests_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account_deletion_requests" ADD CONSTRAINT "account_deletion_requests_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account_deletion_requests" ADD CONSTRAINT "account_deletion_requests_resolved_by_user_id_users_id_fk" FOREIGN KEY ("resolved_by_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "email_change_requests" ADD CONSTRAINT "email_change_requests_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "email_change_requests" ADD CONSTRAINT "email_change_requests_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "account_changes_user_idx" ON "account_changes" USING btree ("user_id","created_at");--> statement-breakpoint
CREATE UNIQUE INDEX "account_deletion_requests_open_uq" ON "account_deletion_requests" USING btree ("user_id") WHERE "account_deletion_requests"."status" = 'requested';--> statement-breakpoint
CREATE UNIQUE INDEX "email_change_requests_token_uq" ON "email_change_requests" USING btree ("token_hash");--> statement-breakpoint
CREATE INDEX "email_change_requests_user_idx" ON "email_change_requests" USING btree ("user_id","created_at");