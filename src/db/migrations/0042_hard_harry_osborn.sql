CREATE TABLE "course_auditors" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"email" text NOT NULL,
	"user_id" text,
	"token" text NOT NULL,
	"invited_at" timestamp with time zone DEFAULT now() NOT NULL,
	"accepted_at" timestamp with time zone,
	"invited_by" text NOT NULL,
	CONSTRAINT "course_auditors_token_unique" UNIQUE("token"),
	CONSTRAINT "course_auditors_tenant_course_email_uq" UNIQUE("tenant_id","course_id","email")
);
--> statement-breakpoint
ALTER TABLE "course_auditors" ADD CONSTRAINT "course_auditors_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_auditors" ADD CONSTRAINT "course_auditors_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_auditors" ADD CONSTRAINT "course_auditors_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_auditors" ADD CONSTRAINT "course_auditors_invited_by_users_id_fk" FOREIGN KEY ("invited_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "course_auditors_tenant_course_idx" ON "course_auditors" USING btree ("tenant_id","course_id");--> statement-breakpoint
CREATE INDEX "course_auditors_token_idx" ON "course_auditors" USING btree ("token");