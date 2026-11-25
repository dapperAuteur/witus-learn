-- Archived course editions (plans/101 section 5, approved 2026-11-25). Additive and idempotent:
-- three nullable columns and one FK, so the code running before this deploy keeps working, and a
-- second run (a ledger/table mismatch, a manual fallback after a partial run) changes nothing.
ALTER TABLE "courses" ADD COLUMN IF NOT EXISTS "archived_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "courses" ADD COLUMN IF NOT EXISTS "archived_reason" text;--> statement-breakpoint
ALTER TABLE "courses" ADD COLUMN IF NOT EXISTS "superseded_by_course_id" uuid;--> statement-breakpoint
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'courses_superseded_by_course_id_courses_id_fk'
  ) THEN
    ALTER TABLE "courses" ADD CONSTRAINT "courses_superseded_by_course_id_courses_id_fk"
      FOREIGN KEY ("superseded_by_course_id") REFERENCES "public"."courses"("id") ON DELETE set null ON UPDATE no action;
  END IF;
END $$;
