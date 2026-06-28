CREATE TABLE "course_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"name" "citext" NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "course_categories_tenant_name_uq" UNIQUE("tenant_id","name")
);
--> statement-breakpoint
CREATE TABLE "course_modules" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"course_id" uuid NOT NULL,
	"title" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"is_published" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "courses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"instructor_id" text NOT NULL,
	"title" text NOT NULL,
	"slug" text,
	"description" text,
	"cover_image_url" text,
	"category" text,
	"tags" text[],
	"price" numeric(10, 2) DEFAULT '0' NOT NULL,
	"price_type" text DEFAULT 'free' NOT NULL,
	"stripe_product_id" text,
	"stripe_price_id" text,
	"is_published" boolean DEFAULT false NOT NULL,
	"visibility" text DEFAULT 'public' NOT NULL,
	"published_at" timestamp with time zone,
	"navigation_mode" text DEFAULT 'linear' NOT NULL,
	"is_sequential" boolean DEFAULT false NOT NULL,
	"allow_cross_course_cyoa" boolean DEFAULT false NOT NULL,
	"trial_period_days" integer,
	"requires_age_gate" boolean DEFAULT false NOT NULL,
	"like_count" integer DEFAULT 0 NOT NULL,
	"review_count" integer DEFAULT 0 NOT NULL,
	"avg_rating" numeric(3, 2),
	"season_number" smallint,
	"series_slug" text,
	"series_title" text,
	"is_featured" boolean DEFAULT false NOT NULL,
	"featured_order" integer,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "courses_price_type_chk" CHECK ("courses"."price_type" in ('free','one_time','subscription')),
	CONSTRAINT "courses_visibility_chk" CHECK ("courses"."visibility" in ('public','members','scheduled')),
	CONSTRAINT "courses_navigation_mode_chk" CHECK ("courses"."navigation_mode" in ('linear','cyoa'))
);
--> statement-breakpoint
CREATE TABLE "lessons" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"course_id" uuid NOT NULL,
	"module_id" uuid,
	"tenant_id" uuid NOT NULL,
	"title" text NOT NULL,
	"lesson_type" text DEFAULT 'text' NOT NULL,
	"content_url" text,
	"text_content" text,
	"content_format" text,
	"duration_seconds" integer,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"is_free_preview" boolean DEFAULT false NOT NULL,
	"is_published" boolean DEFAULT false NOT NULL,
	"slug" text,
	"quiz_content" jsonb,
	"audio_chapters" jsonb,
	"transcript_content" jsonb,
	"map_content" jsonb,
	"documents" jsonb,
	"podcast_links" jsonb,
	"video_360_autoplay" boolean,
	"video_360_poster_url" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "lessons_type_chk" CHECK ("lessons"."lesson_type" in ('video','text','audio','slides','quiz','360video','photo_360','virtual_tour','map')),
	CONSTRAINT "lessons_content_format_chk" CHECK ("lessons"."content_format" is null or "lessons"."content_format" in ('markdown','tiptap'))
);
--> statement-breakpoint
ALTER TABLE "course_categories" ADD CONSTRAINT "course_categories_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "course_modules" ADD CONSTRAINT "course_modules_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "courses" ADD CONSTRAINT "courses_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "courses" ADD CONSTRAINT "courses_instructor_id_users_id_fk" FOREIGN KEY ("instructor_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_module_id_course_modules_id_fk" FOREIGN KEY ("module_id") REFERENCES "public"."course_modules"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "courses_tenant_instructor_slug_uq" ON "courses" USING btree ("tenant_id","instructor_id","slug") WHERE "courses"."slug" is not null;--> statement-breakpoint
CREATE INDEX "courses_tenant_published_idx" ON "courses" USING btree ("tenant_id","is_published");--> statement-breakpoint
CREATE INDEX "courses_tenant_series_idx" ON "courses" USING btree ("tenant_id","series_slug");--> statement-breakpoint
CREATE UNIQUE INDEX "lessons_course_slug_uq" ON "lessons" USING btree ("course_id","slug") WHERE "lessons"."slug" is not null;--> statement-breakpoint
CREATE INDEX "lessons_course_idx" ON "lessons" USING btree ("course_id");