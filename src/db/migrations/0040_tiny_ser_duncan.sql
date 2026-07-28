CREATE TABLE "platform_subscriptions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"billing_type" text NOT NULL,
	"interval" text,
	"amount_cents" integer NOT NULL,
	"currency" text DEFAULT 'usd' NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"stripe_customer_id" text,
	"stripe_subscription_id" text,
	"stripe_checkout_session_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "platform_subscriptions_tenant_uq" UNIQUE("tenant_id"),
	CONSTRAINT "platform_subscriptions_type_chk" CHECK ("platform_subscriptions"."billing_type" in ('subscription','lifetime')),
	CONSTRAINT "platform_subscriptions_status_chk" CHECK ("platform_subscriptions"."status" in ('pending','active','past_due','canceled'))
);
--> statement-breakpoint
ALTER TABLE "platform_subscriptions" ADD CONSTRAINT "platform_subscriptions_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;