ALTER TABLE "courses" ADD COLUMN "owner_only" boolean DEFAULT false NOT NULL;--> statement-breakpoint
-- Hand-written (2026-10-29): mark the private pipeline's courses owner-only BEFORE the code that lets
-- a school's brand_admin into private courses can serve them. Fail-closed: every course that is
-- private on the learn-witus school right now, which is a superset of what scripts/seed-local-private.ts
-- loads (it seeds learn-witus only and re-asserts private on every run). A course caught here that a
-- brand_admin should manage is opened by the platform owner unticking "Owner only" in its settings.
-- Private courses on every other school are left to that school's brand_admins (BAM 2026-10-29).
UPDATE "courses" SET "owner_only" = true
  WHERE "visibility" = 'private'
    AND "tenant_id" IN (SELECT "id" FROM "tenants" WHERE "slug" = 'learn-witus');--> statement-breakpoint
-- The default is 'platform_owner' on purpose: every row written before this migration, and every row
-- the code deployed before it can write (its switch was owner-only), was the owner's. The new code
-- always sets the role. Additive, so migrating ahead of the deploy is safe.
ALTER TABLE "course_visibility_changes" ADD COLUMN "actor_role" text DEFAULT 'platform_owner' NOT NULL;
