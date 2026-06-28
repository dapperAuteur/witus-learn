CREATE TABLE "map_belts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"commodity_id" uuid,
	"name" text NOT NULL,
	"season_number" smallint,
	"color" text,
	"lat_min" double precision,
	"lat_max" double precision,
	"description" text,
	"producers" text,
	"production_country_codes" integer[],
	"fallback_bbox" jsonb,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "map_commodities" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"course_id" uuid,
	"season_number" smallint,
	"episode_label" text,
	"name" text NOT NULL,
	"geo" text,
	"lat" double precision,
	"lon" double precision,
	"color" text,
	"is_home" boolean DEFAULT false NOT NULL,
	"summary" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "map_belts" ADD CONSTRAINT "map_belts_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_belts" ADD CONSTRAINT "map_belts_commodity_id_map_commodities_id_fk" FOREIGN KEY ("commodity_id") REFERENCES "public"."map_commodities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_commodities" ADD CONSTRAINT "map_commodities_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_commodities" ADD CONSTRAINT "map_commodities_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "map_commodities_tenant_idx" ON "map_commodities" USING btree ("tenant_id","season_number","sort_order");