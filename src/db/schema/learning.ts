import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  index,
  integer,
  jsonb,
  numeric,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { users } from "./auth";
import { courses, lessons } from "./courses";
import { tenants } from "./tenancy";

// Per-(user, lesson) progress. completed_at is set when the learner finishes the
// lesson; watch_seconds / quiz fields support the players (quiz scoring lands in
// Phase 6). Tenant scope is inherited via the lesson.
export const lessonProgress = pgTable(
  "lesson_progress",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lessonId: uuid("lesson_id")
      .notNull()
      .references(() => lessons.id, { onDelete: "cascade" }),
    completedAt: timestamp("completed_at", { withTimezone: true }),
    watchSeconds: integer("watch_seconds").notNull().default(0),
    quizScore: numeric("quiz_score", { precision: 5, scale: 2 }),
    quizAnswers: jsonb("quiz_answers"),
    tourProgress: jsonb("tour_progress"),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.lessonId] })],
);

export type LessonProgress = typeof lessonProgress.$inferSelect;

// Learner-submitted corrections / comments / questions on a lesson — the curriculum
// feedback tool. Tenant-scoped explicitly (so review queries stay isolated). Status
// lets instructors triage. A learner improving the curriculum is a trust signal.
export const lessonFeedback = pgTable(
  "lesson_feedback",
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
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** correction | comment | question */
    kind: text("kind").notNull().default("comment"),
    body: text("body").notNull(),
    /** open | reviewed | resolved */
    status: text("status").notNull().default("open"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("lesson_feedback_lesson_idx").on(t.lessonId),
    index("lesson_feedback_tenant_status_idx").on(t.tenantId, t.status),
    check("lesson_feedback_kind_chk", sql`${t.kind} in ('correction','comment','question')`),
    check("lesson_feedback_status_chk", sql`${t.status} in ('open','reviewed','resolved')`),
  ],
);

export type LessonFeedback = typeof lessonFeedback.$inferSelect;

// Learner submissions to an assignment lesson (lesson_type = 'assignment', prompt in
// the lesson body). One submission per (lesson, user); the instructor grades it.
export const assignmentSubmissions = pgTable(
  "assignment_submissions",
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
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    body: text("body").notNull(),
    /** submitted | graded */
    status: text("status").notNull().default("submitted"),
    /** 0-100, set when graded */
    grade: integer("grade"),
    feedback: text("feedback"),
    submittedAt: timestamp("submitted_at", { withTimezone: true }).notNull().defaultNow(),
    gradedAt: timestamp("graded_at", { withTimezone: true }),
  },
  (t) => [
    primaryKey({ columns: [t.lessonId, t.userId] }),
    index("assignment_submissions_lesson_idx").on(t.lessonId),
    index("assignment_submissions_tenant_status_idx").on(t.tenantId, t.status),
    check("assignment_submissions_status_chk", sql`${t.status} in ('submitted','graded')`),
    check("assignment_submissions_grade_chk", sql`${t.grade} is null or (${t.grade} >= 0 and ${t.grade} <= 100)`),
  ],
);

export type AssignmentSubmission = typeof assignmentSubmissions.$inferSelect;

// Live class sessions. Tenant-scoped; the embed-URL model (playbackUrl is an
// embeddable player URL from any RTMP/VOD service) keeps witus-learn provider-
// agnostic. One stream broadcast to several schools = one row per tenant (fan-out
// on create), so the viewer query stays a simple per-tenant filter (no leak).
export const liveSessions = pgTable(
  "live_sessions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id").references(() => courses.id, { onDelete: "set null" }),
    createdBy: text("created_by").references(() => users.id, { onDelete: "set null" }),
    title: text("title").notNull(),
    description: text("description"),
    scheduledAt: timestamp("scheduled_at", { withTimezone: true }),
    isLive: boolean("is_live").notNull().default(false),
    /** public | members | enrolled */
    visibility: text("visibility").notNull().default("members"),
    /** Embeddable player URL for the live stream (rendered in an iframe). */
    playbackUrl: text("playback_url"),
    /** Embeddable URL for the saved recording, set after the stream. */
    recordingUrl: text("recording_url"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("live_sessions_tenant_idx").on(t.tenantId),
    check("live_sessions_visibility_chk", sql`${t.visibility} in ('public','members','enrolled')`),
  ],
);

export type LiveSession = typeof liveSessions.$inferSelect;
