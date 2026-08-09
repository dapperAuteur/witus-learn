CREATE TABLE "media_assets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_slug" text,
	"lesson_slug" text,
	"kind" text NOT NULL,
	"url" text NOT NULL,
	"public_id" text,
	"alt" text,
	"caption" text,
	"credit" text NOT NULL,
	"rights_status" text NOT NULL,
	"source_url" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"reviewed_by" text,
	"reviewed_at" timestamp with time zone,
	"review_note" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "media_assets_tenant_url_uq" UNIQUE("tenant_id","url"),
	CONSTRAINT "media_assets_kind_chk" CHECK ("media_assets"."kind" in ('image','video','audio','document')),
	CONSTRAINT "media_assets_status_chk" CHECK ("media_assets"."status" in ('pending','approved','rejected'))
);
--> statement-breakpoint
ALTER TABLE "media_assets" ADD CONSTRAINT "media_assets_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_assets" ADD CONSTRAINT "media_assets_reviewed_by_users_id_fk" FOREIGN KEY ("reviewed_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "media_assets_tenant_idx" ON "media_assets" USING btree ("tenant_id");--> statement-breakpoint
CREATE INDEX "media_assets_tenant_status_idx" ON "media_assets" USING btree ("tenant_id","status");--> statement-breakpoint
CREATE INDEX "media_assets_tenant_course_idx" ON "media_assets" USING btree ("tenant_id","course_slug");