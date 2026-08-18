CREATE TABLE "promotions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"name" text NOT NULL,
	"scope" text NOT NULL,
	"course_id" uuid,
	"bundle_id" uuid,
	"kind" text NOT NULL,
	"value" numeric(10, 2),
	"starts_at" timestamp with time zone,
	"ends_at" timestamp with time zone,
	"ended_at" timestamp with time zone,
	"created_by" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "promotions_scope_chk" CHECK ("promotions"."scope" in ('course','bundle','tenant')),
	CONSTRAINT "promotions_target_chk" CHECK (("promotions"."scope" = 'course' and "promotions"."course_id" is not null and "promotions"."bundle_id" is null)
       or ("promotions"."scope" = 'bundle' and "promotions"."bundle_id" is not null and "promotions"."course_id" is null)
       or ("promotions"."scope" = 'tenant' and "promotions"."course_id" is null and "promotions"."bundle_id" is null)),
	CONSTRAINT "promotions_kind_chk" CHECK ("promotions"."kind" in ('percent','amount','free')),
	CONSTRAINT "promotions_value_chk" CHECK (("promotions"."kind" = 'free' and "promotions"."value" is null)
       or ("promotions"."kind" = 'percent' and "promotions"."value" is not null and "promotions"."value" >= 1 and "promotions"."value" <= 100)
       or ("promotions"."kind" = 'amount' and "promotions"."value" is not null and "promotions"."value" > 0)),
	CONSTRAINT "promotions_window_chk" CHECK ("promotions"."starts_at" is null or "promotions"."ends_at" is null or "promotions"."ends_at" > "promotions"."starts_at")
);
--> statement-breakpoint
ALTER TABLE "promotions" ADD CONSTRAINT "promotions_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "promotions" ADD CONSTRAINT "promotions_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "promotions" ADD CONSTRAINT "promotions_bundle_id_bundles_id_fk" FOREIGN KEY ("bundle_id") REFERENCES "public"."bundles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "promotions" ADD CONSTRAINT "promotions_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;