CREATE TABLE "future_work_notes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"item_key" text NOT NULL,
	"body" text NOT NULL,
	"author_user_id" text,
	"status" text DEFAULT 'open' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "future_work_notes_status_chk" CHECK ("future_work_notes"."status" in ('open','done'))
);
--> statement-breakpoint
ALTER TABLE "future_work_notes" ADD CONSTRAINT "future_work_notes_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "future_work_notes" ADD CONSTRAINT "future_work_notes_author_user_id_users_id_fk" FOREIGN KEY ("author_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "future_work_notes_tenant_item_idx" ON "future_work_notes" USING btree ("tenant_id","item_key");