DROP INDEX "contact_pings_email_due_idx";--> statement-breakpoint
ALTER TABLE "contact_pings" ADD COLUMN "reminders_sent" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
-- Hand-written (2026-10-06): a ping that already got the old single 48-hour email has had reminder 1,
-- so the new schedule continues at day 4 instead of sending a second "first" email.
UPDATE "contact_pings" SET "reminders_sent" = 1 WHERE "emailed_at" IS NOT NULL;--> statement-breakpoint
-- Hand-written (2026-10-06): requests now last 30 days instead of 14. A ping already past its old
-- 14-day life had ENDED; without this it would come back to life and start emailing. End it as of
-- the day it used to end. closed_by stays null: nobody closed it, it ran out.
UPDATE "contact_pings" SET "connected_at" = "created_at" + interval '14 days'
  WHERE "connected_at" IS NULL AND "created_at" <= now() - interval '14 days';--> statement-breakpoint
CREATE INDEX "contact_pings_email_due_idx" ON "contact_pings" USING btree ("created_at") WHERE "contact_pings"."connected_at" is null;--> statement-breakpoint
ALTER TABLE "contact_pings" ADD CONSTRAINT "contact_pings_reminders_chk" CHECK ("contact_pings"."reminders_sent" between 0 and 4);