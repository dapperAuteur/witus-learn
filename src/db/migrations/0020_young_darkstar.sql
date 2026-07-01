CREATE TABLE "link_clicks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"lesson_id" uuid,
	"kind" text DEFAULT 'content' NOT NULL,
	"url" text NOT NULL,
	"click_count" integer DEFAULT 0 NOT NULL,
	"first_clicked_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_clicked_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "link_clicks_kind_chk" CHECK ("link_clicks"."kind" in ('content','ecosystem'))
);
--> statement-breakpoint
ALTER TABLE "course_categories" ADD COLUMN "ecosystem_product_slug" text;--> statement-breakpoint
ALTER TABLE "courses" ADD COLUMN "related_products" jsonb;--> statement-breakpoint
ALTER TABLE "link_clicks" ADD CONSTRAINT "link_clicks_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "link_clicks" ADD CONSTRAINT "link_clicks_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "link_clicks" ADD CONSTRAINT "link_clicks_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "link_clicks_tenant_course_idx" ON "link_clicks" USING btree ("tenant_id","course_id");--> statement-breakpoint
-- Hand-written: dedup key for the click-counter upsert. COALESCE the nullable lesson_id to a
-- zero-UUID sentinel so course-page links (no lesson) still collapse onto one counter row —
-- a plain UNIQUE(tenant,course,lesson,url) treats NULL lesson_ids as distinct and would insert
-- a new row on every click. ON CONFLICT in insertLinkClick targets this exact expression.
CREATE UNIQUE INDEX "link_clicks_dedup_uq" ON "link_clicks" USING btree ("tenant_id","course_id",(COALESCE("lesson_id",'00000000-0000-0000-0000-000000000000'::uuid)),"url");