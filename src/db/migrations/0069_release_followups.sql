CREATE TABLE "course_launch_todos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"kind" text DEFAULT 'task' NOT NULL,
	"title" text NOT NULL,
	"blog_name" text,
	"post_url" text,
	"due_when" text DEFAULT 'scheduled' NOT NULL,
	"status" text DEFAULT 'open' NOT NULL,
	"note" text,
	"created_by" text,
	"decided_by" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "course_launch_todos_kind_chk" CHECK ("course_launch_todos"."kind" in ('task','blog-post')),
	CONSTRAINT "course_launch_todos_due_when_chk" CHECK ("course_launch_todos"."due_when" in ('seeded','scheduled','live')),
	CONSTRAINT "course_launch_todos_status_chk" CHECK ("course_launch_todos"."status" in ('open','done','skipped'))
);
--> statement-breakpoint
CREATE TABLE "course_release_followups" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"followup_key" text NOT NULL,
	"status" text DEFAULT 'open' NOT NULL,
	"note" text,
	"decided_by" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "course_release_followups_tenant_key_uq" UNIQUE("tenant_id","followup_key"),
	CONSTRAINT "course_release_followups_status_chk" CHECK ("course_release_followups"."status" in ('open','done','skipped'))
);
--> statement-breakpoint
ALTER TABLE "course_launch_todos" ADD CONSTRAINT "course_launch_todos_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_launch_todos" ADD CONSTRAINT "course_launch_todos_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_launch_todos" ADD CONSTRAINT "course_launch_todos_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_launch_todos" ADD CONSTRAINT "course_launch_todos_decided_by_users_id_fk" FOREIGN KEY ("decided_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_release_followups" ADD CONSTRAINT "course_release_followups_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_release_followups" ADD CONSTRAINT "course_release_followups_decided_by_users_id_fk" FOREIGN KEY ("decided_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "course_launch_todos_tenant_course_idx" ON "course_launch_todos" USING btree ("tenant_id","course_id");--> statement-breakpoint
CREATE INDEX "course_release_followups_tenant_status_idx" ON "course_release_followups" USING btree ("tenant_id","status");