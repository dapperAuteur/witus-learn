CREATE TABLE "live_presence" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"name" text,
	"last_seen_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "live_presence_tenant_user_uq" UNIQUE("tenant_id","user_id")
);
--> statement-breakpoint
ALTER TABLE "live_presence" ADD CONSTRAINT "live_presence_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "live_presence" ADD CONSTRAINT "live_presence_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "live_presence_tenant_seen_idx" ON "live_presence" USING btree ("tenant_id","last_seen_at");