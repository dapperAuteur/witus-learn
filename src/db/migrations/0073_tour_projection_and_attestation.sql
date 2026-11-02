ALTER TABLE "project_captures" ADD COLUMN "projection" text;--> statement-breakpoint
ALTER TABLE "lesson_tour_embeds" ADD COLUMN "people_attested_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "project_captures" ADD CONSTRAINT "project_captures_projection_chk" CHECK ("project_captures"."projection" is null or "project_captures"."projection" in ('flat','equirectangular'));