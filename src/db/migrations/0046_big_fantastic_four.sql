CREATE TABLE "ebook_approvals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"ebook_slug" text NOT NULL,
	"approved_at" timestamp with time zone DEFAULT now() NOT NULL,
	"approved_by" text,
	"note" text,
	CONSTRAINT "ebook_approvals_tenant_slug_uq" UNIQUE("tenant_id","ebook_slug")
);
--> statement-breakpoint
ALTER TABLE "ebook_approvals" ADD CONSTRAINT "ebook_approvals_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ebook_approvals" ADD CONSTRAINT "ebook_approvals_approved_by_users_id_fk" FOREIGN KEY ("approved_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "ebook_approvals_tenant_idx" ON "ebook_approvals" USING btree ("tenant_id");