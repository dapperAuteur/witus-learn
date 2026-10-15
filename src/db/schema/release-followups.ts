import { sql } from "drizzle-orm";
import { check, index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { tenants } from "./tenancy";
import { users } from "./auth";
import { courses } from "./courses";

// Release follow-ups: the work that falls due when a course reaches the catalog or goes live (the
// blog post that markets it, a task step to re-check), surfaced owner-only at /admin/follow-ups.
//
// The FOLLOW-UP DEFINITIONS are committed code (src/lib/release-followups.ts), and whether one is DUE
// is computed from the course rows on every read. This table holds only what BAM did about it: the
// status and a note saying what was done (the live URL, what changed). Same split as
// course_research_checks, for the same reason: the editorial content stays reviewable in a diff.
//
// One row per (tenant, follow-up). Upserted, so closing again updates rather than appending. A note
// on the owner's own to-do item, never a message to anyone (the no-inbox rule in CLAUDE.md).
export const courseReleaseFollowups = pgTable(
  "course_release_followups",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    /** ReleaseFollowUp.key from src/lib/release-followups.ts. Never renumber these. */
    followupKey: text("followup_key").notNull(),
    /** open = not done. done = done, and the note says how. skipped = deliberately not doing it. */
    status: text("status").notNull().default("open"),
    /** What was done: the live post's URL, what was updated, or why it was skipped. */
    note: text("note"),
    decidedBy: text("decided_by").references(() => users.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("course_release_followups_tenant_key_uq").on(t.tenantId, t.followupKey),
    index("course_release_followups_tenant_status_idx").on(t.tenantId, t.status),
    check("course_release_followups_status_chk", sql`${t.status} in ('open','done','skipped')`),
  ],
);

export type CourseReleaseFollowup = typeof courseReleaseFollowups.$inferSelect;

// The items a teacher, a school admin or the owner adds to ONE course's launch to-do list on its
// /teach page: a school's own chores before and after a launch (record the welcome video, tell the
// department, publish the post on our blog). Shown with the committed follow-ups above, and in the
// warning that appears whenever someone schedules, publishes or releases the course.
//
// A chore attached to a course, never a message: no recipient, no assignee, no reply, no read state
// (the no-inbox rule in CLAUDE.md). `title` is the chore; `note` says what was done when it closes.
export const courseLaunchTodos = pgTable(
  "course_launch_todos",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    /** task | blog-post. A blog post names its blog, and the post's URL once it has one. */
    kind: text("kind").notNull().default("task"),
    title: text("title").notNull(),
    blogName: text("blog_name"),
    postUrl: text("post_url"),
    /** seeded | scheduled | live: when it falls due (src/lib/release-followups.ts). */
    dueWhen: text("due_when").notNull().default("scheduled"),
    status: text("status").notNull().default("open"),
    note: text("note"),
    createdBy: text("created_by").references(() => users.id, { onDelete: "set null" }),
    decidedBy: text("decided_by").references(() => users.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("course_launch_todos_tenant_course_idx").on(t.tenantId, t.courseId),
    check("course_launch_todos_kind_chk", sql`${t.kind} in ('task','blog-post')`),
    check("course_launch_todos_due_when_chk", sql`${t.dueWhen} in ('seeded','scheduled','live')`),
    check("course_launch_todos_status_chk", sql`${t.status} in ('open','done','skipped')`),
  ],
);

export type CourseLaunchTodo = typeof courseLaunchTodos.$inferSelect;
