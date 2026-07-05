CREATE TABLE "documentation_projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"title" text NOT NULL,
	"subject" text,
	"template_key" text NOT NULL,
	"medium" text,
	"subject_tag" text,
	"chain_mode" boolean DEFAULT false NOT NULL,
	"kit" jsonb,
	"checklist" jsonb,
	"status" text DEFAULT 'planning' NOT NULL,
	"visibility" text DEFAULT 'private' NOT NULL,
	"self_attested_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "documentation_projects_medium_chk" CHECK ("documentation_projects"."medium" is null or "documentation_projects"."medium" in ('words','sound','motion','archive')),
	CONSTRAINT "documentation_projects_subject_tag_chk" CHECK ("documentation_projects"."subject_tag" is null or "documentation_projects"."subject_tag" in ('people','events','institutions','travel-place')),
	CONSTRAINT "documentation_projects_status_chk" CHECK ("documentation_projects"."status" in ('planning','active','assembling','published','archived')),
	CONSTRAINT "documentation_projects_visibility_chk" CHECK ("documentation_projects"."visibility" in ('private','in_review','submitted'))
);
--> statement-breakpoint
CREATE TABLE "project_captures" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"leg_id" uuid,
	"kind" text NOT NULL,
	"subject" text,
	"consent_status" text DEFAULT 'na' NOT NULL,
	"involves_minor" boolean DEFAULT false NOT NULL,
	"storage_url" text,
	"notes" text,
	"captured_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "project_captures_kind_chk" CHECK ("project_captures"."kind" in ('photo','audio','video','document','interview','artifact','note')),
	CONSTRAINT "project_captures_consent_chk" CHECK ("project_captures"."consent_status" in ('na','verbal_recorded','written','on_record','declined'))
);
--> statement-breakpoint
CREATE TABLE "project_comments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"body" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project_legs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"name" text NOT NULL,
	"site_type" text,
	"location_label" text,
	"lat" double precision,
	"lng" double precision,
	"start_date" date,
	"end_date" date,
	"visited" boolean DEFAULT false NOT NULL,
	"notes" text,
	"est_cost_cents" integer,
	"est_currency" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "project_legs_site_type_chk" CHECK ("project_legs"."site_type" is null or "project_legs"."site_type" in ('farm','factory','office','market','home','public-space','archive','other'))
);
--> statement-breakpoint
CREATE TABLE "project_members" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"role" text DEFAULT 'collaborator' NOT NULL,
	"contribution" text,
	"attested_at" timestamp with time zone,
	"added_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "project_members_project_user_uq" UNIQUE("project_id","user_id"),
	CONSTRAINT "project_members_role_chk" CHECK ("project_members"."role" in ('owner','collaborator'))
);
--> statement-breakpoint
CREATE TABLE "project_reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"reviewer_user_id" text NOT NULL,
	"subject_user_id" text,
	"verdict" text NOT NULL,
	"rubric" jsonb,
	"body" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "project_reviews_verdict_chk" CHECK ("project_reviews"."verdict" in ('endorse','revise'))
);
--> statement-breakpoint
ALTER TABLE "documentation_projects" ADD CONSTRAINT "documentation_projects_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "documentation_projects" ADD CONSTRAINT "documentation_projects_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_captures" ADD CONSTRAINT "project_captures_project_id_documentation_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."documentation_projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_captures" ADD CONSTRAINT "project_captures_leg_id_project_legs_id_fk" FOREIGN KEY ("leg_id") REFERENCES "public"."project_legs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_comments" ADD CONSTRAINT "project_comments_project_id_documentation_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."documentation_projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_comments" ADD CONSTRAINT "project_comments_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_legs" ADD CONSTRAINT "project_legs_project_id_documentation_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."documentation_projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_members" ADD CONSTRAINT "project_members_project_id_documentation_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."documentation_projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_members" ADD CONSTRAINT "project_members_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_reviews" ADD CONSTRAINT "project_reviews_project_id_documentation_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."documentation_projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_reviews" ADD CONSTRAINT "project_reviews_reviewer_user_id_users_id_fk" FOREIGN KEY ("reviewer_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_reviews" ADD CONSTRAINT "project_reviews_subject_user_id_users_id_fk" FOREIGN KEY ("subject_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "documentation_projects_tenant_user_idx" ON "documentation_projects" USING btree ("tenant_id","user_id");--> statement-breakpoint
CREATE INDEX "project_captures_project_idx" ON "project_captures" USING btree ("project_id");--> statement-breakpoint
CREATE INDEX "project_captures_leg_idx" ON "project_captures" USING btree ("leg_id");--> statement-breakpoint
CREATE INDEX "project_comments_project_idx" ON "project_comments" USING btree ("project_id");--> statement-breakpoint
CREATE INDEX "project_legs_project_idx" ON "project_legs" USING btree ("project_id");--> statement-breakpoint
CREATE INDEX "project_members_project_idx" ON "project_members" USING btree ("project_id");--> statement-breakpoint
CREATE INDEX "project_members_user_idx" ON "project_members" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "project_reviews_project_idx" ON "project_reviews" USING btree ("project_id");