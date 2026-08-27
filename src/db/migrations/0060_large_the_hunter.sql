CREATE TABLE "cross_link_approvals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"source_course_slug" text NOT NULL,
	"source_lesson_slug" text NOT NULL,
	"target_course_slug" text NOT NULL,
	"approved_at" timestamp with time zone DEFAULT now() NOT NULL,
	"approved_by" text,
	"note" text,
	CONSTRAINT "cross_link_approvals_triple_uq" UNIQUE("tenant_id","source_course_slug","source_lesson_slug","target_course_slug")
);
--> statement-breakpoint
CREATE TABLE "cross_link_dismissals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"source_course_slug" text NOT NULL,
	"source_lesson_slug" text NOT NULL,
	"target_course_slug" text NOT NULL,
	"dismissed_at" timestamp with time zone DEFAULT now() NOT NULL,
	"dismissed_by" text,
	"reason" text,
	CONSTRAINT "cross_link_dismissals_triple_uq" UNIQUE("tenant_id","source_course_slug","source_lesson_slug","target_course_slug")
);
--> statement-breakpoint
ALTER TABLE "cross_link_approvals" ADD CONSTRAINT "cross_link_approvals_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cross_link_approvals" ADD CONSTRAINT "cross_link_approvals_approved_by_users_id_fk" FOREIGN KEY ("approved_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cross_link_dismissals" ADD CONSTRAINT "cross_link_dismissals_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cross_link_dismissals" ADD CONSTRAINT "cross_link_dismissals_dismissed_by_users_id_fk" FOREIGN KEY ("dismissed_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "cross_link_approvals_source_idx" ON "cross_link_approvals" USING btree ("tenant_id","source_course_slug","source_lesson_slug");--> statement-breakpoint
CREATE INDEX "cross_link_dismissals_tenant_idx" ON "cross_link_dismissals" USING btree ("tenant_id");