CREATE TABLE "promotion_courses" (
	"promotion_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"added_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "promotion_courses_promotion_id_course_id_pk" PRIMARY KEY("promotion_id","course_id")
);
--> statement-breakpoint
ALTER TABLE "promotions" DROP CONSTRAINT "promotions_scope_chk";--> statement-breakpoint
ALTER TABLE "promotions" DROP CONSTRAINT "promotions_target_chk";--> statement-breakpoint
ALTER TABLE "promotion_courses" ADD CONSTRAINT "promotion_courses_promotion_id_promotions_id_fk" FOREIGN KEY ("promotion_id") REFERENCES "public"."promotions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "promotion_courses" ADD CONSTRAINT "promotion_courses_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "promotions" ADD CONSTRAINT "promotions_scope_chk" CHECK ("promotions"."scope" in ('course','bundle','tenant','courses'));--> statement-breakpoint
ALTER TABLE "promotions" ADD CONSTRAINT "promotions_target_chk" CHECK (("promotions"."scope" = 'course' and "promotions"."course_id" is not null and "promotions"."bundle_id" is null)
       or ("promotions"."scope" = 'bundle' and "promotions"."bundle_id" is not null and "promotions"."course_id" is null)
       or ("promotions"."scope" in ('tenant','courses') and "promotions"."course_id" is null and "promotions"."bundle_id" is null));