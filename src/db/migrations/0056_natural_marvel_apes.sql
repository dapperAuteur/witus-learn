ALTER TABLE "promotions" ADD COLUMN "slug" text;--> statement-breakpoint
ALTER TABLE "promotions" ADD CONSTRAINT "promotions_tenant_slug_uq" UNIQUE("tenant_id","slug");