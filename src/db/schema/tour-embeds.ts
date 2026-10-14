import { sql } from "drizzle-orm";
import { check, index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { courses, lessons } from "./courses";
import { projectCaptures } from "./field-log";
import { tenants } from "./tenancy";

/**
 * Tours from the field (plans/93 section 2): ONE field capture shown in ONE lesson's tour slot.
 *
 * Why its own table and not `lessons.content_url`: the course seeder rewrites content_url on every
 * seed (scripts/lib/seed-authored-course.ts sets it from `excluded.content_url`), and the 13 tour
 * lessons ship without one, so a tour stored there would be erased by the next `pnpm seed:courses`.
 * The seeder never writes this table.
 *
 * LINK ONLY. `url` is a copy of the capture's own `storage_url`, a link to the learner's media;
 * nothing is uploaded or hosted. The copy is what the publisher checked: if the capture's link later
 * changes, the tour is hidden rather than silently showing a different file.
 *
 * Whether a row is SHOWN is decided on every read (src/lib/field-log-tour.ts liveTour), against the
 * capture and its leg as they stand: consent, the minor rule, kind, link, and the leg's permission
 * note. Deleting the capture sets `capture_id` null, which hides the tour; the row stays until an
 * editor removes it, so the slot reads as "hidden, and why" instead of quietly empty.
 *
 * Nothing here is requested or queued: the publisher (the platform owner or the course's own
 * instructor) writes it directly. A learner proposing a tour to an instructor would be a request
 * list, which the no-inbox rule rules out.
 */
export const lessonTourEmbeds = pgTable(
  "lesson_tour_embeds",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    lessonId: uuid("lesson_id")
      .notNull()
      .references(() => lessons.id, { onDelete: "cascade" }),
    captureId: uuid("capture_id").references(() => projectCaptures.id, { onDelete: "set null" }),
    /** A copy of the capture's storage_url at publish time. https only, still a link. */
    url: text("url").notNull(),
    /** Shown under the tour as plain text. 1 to 400 characters, not blank. */
    creditLine: text("credit_line").notNull(),
    setBy: text("set_by").references(() => users.id, { onDelete: "set null" }),
    setAt: timestamp("set_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("lesson_tour_embeds_lesson_uq").on(t.lessonId),
    index("lesson_tour_embeds_tenant_course_idx").on(t.tenantId, t.courseId),
    index("lesson_tour_embeds_capture_idx").on(t.captureId),
    check(
      "lesson_tour_embeds_credit_chk",
      sql`char_length(btrim(${t.creditLine})) > 0 and char_length(${t.creditLine}) <= 400`,
    ),
    check("lesson_tour_embeds_url_chk", sql`${t.url} like 'https://%' and char_length(${t.url}) <= 2000`),
  ],
);

export type LessonTourEmbed = typeof lessonTourEmbeds.$inferSelect;
