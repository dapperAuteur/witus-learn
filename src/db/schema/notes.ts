import { check, index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { users } from "./auth";
import { tenants } from "./tenancy";
import { courses, lessons } from "./courses";
import { cohorts } from "./cohorts";

// Notes and inline annotations (plans/61). Two kinds share one table because they share
// everything that is hard (anchoring, search, tenant scoping) and differ only in audience:
//
//   kind = 'personal'  — a learner's (or teacher's) own note. Private to the author unless the
//                        author explicitly shares it with a teacher via lesson_note_shares.
//                        NEVER visible to anyone else by default, including guardians: a
//                        student's private note stays private (plans/61 §0).
//   kind = 'teacher'   — a note a teacher SENDS to their cohort (audience = cohort_id, optionally
//                        narrowed to specific members via lesson_note_recipients; no recipient
//                        rows = the whole cohort). Visible to those students on the lesson, and
//                        to guardians of kid accounts among them (decided 2026-08-10).
//
// The guardrail from plans/59, restated: a teacher note is CONTENT attached to a lesson, visible
// where the lesson is. It is not a notification, not an inbox, and it never goes to email. The
// moment it does, this becomes messaging, with the safeguarding obligations that word carries.
//
// Anchoring (plans/61 §2): quote + ~30 chars of context either side + a content-derived block id
// emitted by the renderer. All nullable — a note with no quote is a lesson-level note. There is
// deliberately NO orphaned_at column: whether the quoted text still exists in the lesson is
// recomputed against the current body at read time, so a re-seeded typo fix never permanently
// flags (or silently deletes) a learner's work.
export const lessonNotes = pgTable(
  "lesson_notes",
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
    authorId: text("author_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** personal | teacher — see the header comment. */
    kind: text("kind").notNull().default("personal"),
    body: text("body").notNull(),
    /** Exact selected text for an inline annotation; null = a lesson-level note. */
    quote: text("quote"),
    /** ~30 chars of lesson text immediately before/after the quote, for re-finding it. */
    contextPrefix: text("context_prefix"),
    contextSuffix: text("context_suffix"),
    /** Content-derived id of the block the quote lives in (src/lib/block-id.ts). */
    blockId: text("block_id"),
    /** Audience of a teacher-sent note. Required for kind='teacher', forbidden otherwise. */
    cohortId: uuid("cohort_id").references(() => cohorts.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    // "My notes on this lesson" — the panel's main read.
    index("lesson_notes_tenant_author_lesson_idx").on(t.tenantId, t.authorId, t.lessonId),
    // "Teacher notes for this lesson" (joined through cohort membership).
    index("lesson_notes_tenant_lesson_kind_idx").on(t.tenantId, t.lessonId, t.kind),
    // "My notes across this course" — export and note search.
    index("lesson_notes_tenant_author_course_idx").on(t.tenantId, t.authorId, t.courseId),
    index("lesson_notes_tenant_cohort_idx").on(t.tenantId, t.cohortId),
    check("lesson_notes_kind_chk", sql`${t.kind} in ('personal','teacher')`),
    // A sent note has an audience; a personal note never does.
    check(
      "lesson_notes_audience_chk",
      sql`(${t.kind} = 'teacher') = (${t.cohortId} is not null)`,
    ),
  ],
);

export type LessonNote = typeof lessonNotes.$inferSelect;

// A student's explicit, per-note share with one teacher (plans/61 §3). Never a bulk toggle, never
// on by default: an existing row IS the consent. Deleting the row withdraws it.
export const lessonNoteShares = pgTable(
  "lesson_note_shares",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    noteId: uuid("note_id")
      .notNull()
      .references(() => lessonNotes.id, { onDelete: "cascade" }),
    teacherUserId: text("teacher_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("lesson_note_shares_note_teacher_uq").on(t.noteId, t.teacherUserId),
    // "Notes shared with me" — the teacher's read.
    index("lesson_note_shares_tenant_teacher_idx").on(t.tenantId, t.teacherUserId),
  ],
);

export type LessonNoteShare = typeof lessonNoteShares.$inferSelect;

// Narrows a teacher-sent note to specific cohort members ("group" and "individual" are both
// subsets of a cohort — one audience model, not three code paths; plans/61 §3). No rows for a
// note = the whole cohort sees it.
export const lessonNoteRecipients = pgTable(
  "lesson_note_recipients",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    noteId: uuid("note_id")
      .notNull()
      .references(() => lessonNotes.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
  },
  (t) => [
    unique("lesson_note_recipients_note_user_uq").on(t.noteId, t.userId),
    // "Notes addressed to me" — the student's read.
    index("lesson_note_recipients_tenant_user_idx").on(t.tenantId, t.userId),
  ],
);

export type LessonNoteRecipient = typeof lessonNoteRecipients.$inferSelect;
