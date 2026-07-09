CREATE TABLE "kid_login_attempts" (
	"child_user_id" text PRIMARY KEY NOT NULL,
	"tenant_id" uuid NOT NULL,
	"attempts" integer DEFAULT 0 NOT NULL,
	"locked_until" timestamp with time zone,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "login_method" text DEFAULT 'none' NOT NULL;--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "avatar_key" text;--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "pin_hash" text;--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "pin_set_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "cohorts" ADD COLUMN "class_code" text;--> statement-breakpoint
ALTER TABLE "kid_login_attempts" ADD CONSTRAINT "kid_login_attempts_child_user_id_users_id_fk" FOREIGN KEY ("child_user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kid_login_attempts" ADD CONSTRAINT "kid_login_attempts_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cohorts" ADD CONSTRAINT "cohorts_class_code_unique" UNIQUE("class_code");--> statement-breakpoint
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_login_method_chk" CHECK ("user_profiles"."login_method" in ('none','magic_link','avatar_pin'));