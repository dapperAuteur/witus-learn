CREATE TABLE "promotion_bundles" (
	"promotion_id" uuid NOT NULL,
	"bundle_id" uuid NOT NULL,
	"added_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "promotion_bundles_promotion_id_bundle_id_pk" PRIMARY KEY("promotion_id","bundle_id")
);
--> statement-breakpoint
ALTER TABLE "promotion_bundles" ADD CONSTRAINT "promotion_bundles_promotion_id_promotions_id_fk" FOREIGN KEY ("promotion_id") REFERENCES "public"."promotions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "promotion_bundles" ADD CONSTRAINT "promotion_bundles_bundle_id_bundles_id_fk" FOREIGN KEY ("bundle_id") REFERENCES "public"."bundles"("id") ON DELETE cascade ON UPDATE no action;