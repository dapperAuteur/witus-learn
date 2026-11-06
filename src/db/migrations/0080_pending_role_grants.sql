-- Pending role grants (scripts/test-users.ts): a role on one school waiting for an address with no account yet,
-- claimed by the auth hook when that account is created. ADDITIVE: a new table only, so code deployed before
-- this migration keeps working while it runs.
CREATE TABLE "pending_role_grants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"email" "citext" NOT NULL,
	"role" text NOT NULL,
	"claimed_at" timestamp with time zone,
	"claimed_user_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "pending_role_grants_tenant_email_uq" UNIQUE("tenant_id","email"),
	CONSTRAINT "pending_role_grants_role_chk" CHECK ("pending_role_grants"."role" in ('learner','instructor','brand_admin'))
);
--> statement-breakpoint
ALTER TABLE "pending_role_grants" ADD CONSTRAINT "pending_role_grants_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pending_role_grants" ADD CONSTRAINT "pending_role_grants_claimed_user_id_users_id_fk" FOREIGN KEY ("claimed_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;