CREATE TABLE "course_visibility_changes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"actor_user_id" text,
	"from_visibility" text NOT NULL,
	"to_visibility" text NOT NULL,
	"from_published" boolean NOT NULL,
	"to_published" boolean NOT NULL,
	"overrode_readiness" boolean DEFAULT false NOT NULL,
	"reason" text,
	"cleared_hold_reason" text,
	"readiness" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "visibility" SET DEFAULT 'private';--> statement-breakpoint
ALTER TABLE "course_visibility_changes" ADD CONSTRAINT "course_visibility_changes_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_visibility_changes" ADD CONSTRAINT "course_visibility_changes_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_visibility_changes" ADD CONSTRAINT "course_visibility_changes_actor_user_id_users_id_fk" FOREIGN KEY ("actor_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "course_visibility_changes_course_idx" ON "course_visibility_changes" USING btree ("course_id","created_at");