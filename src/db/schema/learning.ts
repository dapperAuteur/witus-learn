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
  unique,
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
    unique("assignment_submissions_lesson_user_uq").on(t.lessonId, t.userId),
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

// Privacy-light outbound-link click counter. One row per (tenant, course, lesson?, url),
// incremented by the /api/link/click redirect. NO user id, NO IP, NO cookies — counts only,
// surfaced to the instructor as "Link usage". `kind` distinguishes lesson/source content
// links from ecosystem cross-promo clicks. The dedup index is hand-written (COALESCE on the
// nullable lesson_id) in the migration, since a plain UNIQUE treats NULL lesson_ids as
// distinct and would defeat the upsert.
export const linkClicks = pgTable(
  "link_clicks",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    lessonId: uuid("lesson_id").references(() => lessons.id, { onDelete: "cascade" }),
    /** 'content' (lesson body / Sources link) | 'ecosystem' (cross-promo). */
    kind: text("kind").notNull().default("content"),
    url: text("url").notNull(),
    clickCount: integer("click_count").notNull().default(0),
    firstClickedAt: timestamp("first_clicked_at", { withTimezone: true }).notNull().defaultNow(),
    lastClickedAt: timestamp("last_clicked_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("link_clicks_tenant_course_idx").on(t.tenantId, t.courseId),
    check("link_clicks_kind_chk", sql`${t.kind} in ('content','ecosystem')`),
  ],
);

export type LinkClick = typeof linkClicks.$inferSelect;

// Lead capture (email funnel). Tenant-scoped, one row per (tenant, email). Used by
// the coming-soon landings and any "notify me" form, gated by flags.leadFunnel.
export const leads = pgTable(
  "leads",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    email: text("email").notNull(),
    name: text("name"),
    /** where the lead came from, e.g. "coming-soon" or "home". */
    source: text("source"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("leads_tenant_email_uq").on(t.tenantId, t.email),
    index("leads_tenant_idx").on(t.tenantId),
  ],
);

export type Lead = typeof leads.$inferSelect;

// App-wide bug reports / problem reports (distinct from the per-lesson curriculum feedback
// above). Anyone can submit "Report a problem" (tenant-scoped); admins triage it. Each is also
// mirrored to the central WitUS Inbox (sendToInbox) for triage there.
export const problemReports = pgTable(
  "problem_reports",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    /** Set when the reporter is signed in; null for anonymous. */
    userId: text("user_id").references(() => users.id, { onDelete: "set null" }),
    /** bug | idea | other */
    kind: text("kind").notNull().default("bug"),
    message: text("message").notNull(),
    /** The page the report was filed from. */
    pageUrl: text("page_url"),
    /** Optional contact email (for anonymous reporters). */
    email: text("email"),
    /** new | triaged | closed */
    status: text("status").notNull().default("new"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("problem_reports_tenant_idx").on(t.tenantId),
    check("problem_reports_kind_chk", sql`${t.kind} in ('bug','idea','other')`),
    check("problem_reports_status_chk", sql`${t.status} in ('new','triaged','closed')`),
  ],
);

export type ProblemReport = typeof problemReports.$inferSelect;

// Email campaigns (marketing). Drafts are composed + previewed here; SENDING is a
// separate, explicitly-confirmed step (no send is wired yet). Tenant-scoped.
export const emailCampaigns = pgTable(
  "email_campaigns",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    subject: text("subject").notNull(),
    body: text("body").notNull(),
    audience: text("audience").notNull().default("leads"),
    status: text("status").notNull().default("draft"),
    sentAt: timestamp("sent_at", { withTimezone: true }),
    createdBy: text("created_by").references(() => users.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("email_campaigns_tenant_idx").on(t.tenantId),
    check("email_campaigns_audience_chk", sql`${t.audience} in ('leads','enrolled')`),
    check("email_campaigns_status_chk", sql`${t.status} in ('draft','sent')`),
  ],
);

export type EmailCampaign = typeof emailCampaigns.$inferSelect;

// Learning paths: a curated, ordered track of courses (flags.paths). Tenant-scoped.
export const learningPaths = pgTable(
  "learning_paths",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    description: text("description"),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [unique("learning_paths_tenant_slug_uq").on(t.tenantId, t.slug), index("learning_paths_tenant_idx").on(t.tenantId)],
);

export const learningPathCourses = pgTable(
  "learning_path_courses",
  {
    pathId: uuid("path_id")
      .notNull()
      .references(() => learningPaths.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.pathId, t.courseId] })],
);

export type LearningPath = typeof learningPaths.$inferSelect;
