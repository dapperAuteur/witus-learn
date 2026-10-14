import { sql } from "drizzle-orm";
import { check, index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { courseAuditors } from "./auditors";
import { courses, lessons } from "./courses";
import { tenants } from "./tenancy";

/**
 * Reviewer sign-off (plans/93 section 1): ONE current verdict per lesson per need kind.
 *
 * A row says: this reviewer, credited as this name and credential, read this lesson as it stood
 * (`lesson_hash`, the sha256 of src/lib/lesson-review.ts materialLessonText) and cleared it, cleared
 * it with one correction to make, or did not clear it. The verdict's meaning TODAY is computed on
 * read by comparing `lesson_hash` with the lesson's current hash, so any later edit of the text (a
 * re-seed or a /teach PATCH, a typo fix included) resets it with no write path having to remember.
 *
 * NOT A MESSAGE (CLAUDE.md, no-inbox rule). `correction` is one-way content attached to one lesson
 * and one need: no recipient, no reply, no parent row, no read or seen state, no notification, no
 * email. A new verdict REPLACES the old one (the unique key below), so there is no history chain to
 * become a conversation. The owner acts on a correction by editing the lesson or pressing "Applied
 * as written", never by answering it. tests/lesson-review-schema.test.ts pins the column list: a
 * new column there is a decision for BAM, not a test to update.
 *
 * `reviewer_name` / `reviewer_credential` are COPIED from the grant at verdict time, so the badge
 * keeps saying who actually read it even if the grant is later edited or revoked (`auditor_id` is
 * then set null; the credit survives).
 */
export const lessonReviews = pgTable(
  "lesson_reviews",
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
    /** qr | p. A "decision" marker is never a verdict; it clears only by editing it away. */
    needKind: text("need_kind").notNull(),
    /** The grant the verdict was recorded under. NULL for the owner's own P verdict, or once revoked. */
    auditorId: uuid("auditor_id").references(() => courseAuditors.id, { onDelete: "set null" }),
    reviewerUserId: text("reviewer_user_id").references(() => users.id, { onDelete: "set null" }),
    reviewerName: text("reviewer_name").notNull(),
    reviewerCredential: text("reviewer_credential").notNull(),
    /** cleared | cleared_with_correction | not_cleared */
    verdict: text("verdict").notNull(),
    /** Present exactly when verdict = cleared_with_correction, 1 to 1,000 characters. */
    correction: text("correction"),
    /** The owner stamped "Applied as written" (which also re-pins lesson_hash to the edited text). */
    correctionAppliedAt: timestamp("correction_applied_at", { withTimezone: true }),
    lessonHash: text("lesson_hash").notNull(),
    decidedAt: timestamp("decided_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("lesson_reviews_tenant_lesson_kind_uq").on(t.tenantId, t.lessonId, t.needKind),
    index("lesson_reviews_tenant_course_idx").on(t.tenantId, t.courseId),
    check("lesson_reviews_need_kind_chk", sql`${t.needKind} in ('qr','p')`),
    check("lesson_reviews_verdict_chk", sql`${t.verdict} in ('cleared','cleared_with_correction','not_cleared')`),
    check(
      "lesson_reviews_correction_chk",
      sql`(${t.verdict} = 'cleared_with_correction') = (${t.correction} is not null) and (${t.correction} is null or char_length(btrim(${t.correction})) between 1 and 1000)`,
    ),
    check(
      "lesson_reviews_credit_chk",
      sql`char_length(btrim(${t.reviewerName})) > 0 and char_length(btrim(${t.reviewerCredential})) > 0`,
    ),
    check("lesson_reviews_applied_chk", sql`${t.correctionAppliedAt} is null or ${t.verdict} = 'cleared_with_correction'`),
  ],
);

export type LessonReview = typeof lessonReviews.$inferSelect;
