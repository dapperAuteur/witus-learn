import { sql } from "drizzle-orm";
import { check, index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { tenants } from "./tenancy";
import { users } from "./auth";
import { courses } from "./courses";

// A teacher's request for a course on ONE school (BAM, 2026-11-10: "teachers should be able to
// submit or request courses"). Written by an instructor of the school from /teach; decided by the
// school's brand_admin or the platform owner on /admin/users. Approving creates the draft course with
// the requester as its instructor (born private and unpublished like every course) and links it here;
// declining keeps the row with the note the teacher reads on /teach. Tenant-scoped on every read and
// write: a request is only ever listed, read or decided through the tenant the host resolved to.
export const courseRequests = pgTable(
  "course_requests",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    /** The teacher who asked. The row goes with the account. */
    requesterUserId: text("requester_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    description: text("description").notNull(),
    /** Why this course, in the teacher's words. */
    reason: text("reason").notNull(),
    /** Optional link to a brief or outline the teacher already wrote. */
    briefUrl: text("brief_url"),
    /** requested | approved | declined. A decided request is never re-decided. */
    status: text("status").notNull().default("requested"),
    /** The admin's note on a decision; required on a decline, optional on an approval. */
    decisionNote: text("decision_note"),
    decidedByUserId: text("decided_by_user_id").references(() => users.id, { onDelete: "set null" }),
    decidedAt: timestamp("decided_at", { withTimezone: true }),
    /** The draft course an approval created (kind new), or the course handed over (kind existing). Null
     *  until approved; null again if that course is deleted. */
    courseId: uuid("course_id").references(() => courses.id, { onDelete: "set null" }),
    /** new: a course that does not exist yet (title, description). existing: an existing course of this
     *  school the teacher asks to teach (BAM, 2026-11-10: "allow teacher to choose from list of existing
     *  courses also"). */
    kind: text("kind").notNull().default("new"),
    /** The existing course asked for (kind existing only). The request goes with the course. */
    requestedCourseId: uuid("requested_course_id").references(() => courses.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("course_requests_tenant_status_idx").on(t.tenantId, t.status, t.createdAt),
    index("course_requests_requester_idx").on(t.requesterUserId, t.createdAt),
    check("course_requests_status_chk", sql`${t.status} in ('requested','approved','declined')`),
    check(
      "course_requests_kind_chk",
      sql`(${t.kind} = 'new' and ${t.requestedCourseId} is null) or (${t.kind} = 'existing' and ${t.requestedCourseId} is not null)`,
    ),
  ],
);

export type CourseRequest = typeof courseRequests.$inferSelect;
export type CourseRequestStatus = "requested" | "approved" | "declined";
export type CourseRequestKind = "new" | "existing";

// The log of who handed a course to which teacher (BAM, 2026-11-10: "admin should be able to assign
// teachers to courses"). One row per change that changed the instructor, from the course settings
// picker, the Users page, or a seed that repaired a stale seed account. Append-only, like
// course_visibility_changes.
export const courseInstructorChanges = pgTable(
  "course_instructor_changes",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    /** Who the course was taken from. Null if that account is removed later. */
    fromInstructorId: text("from_instructor_id").references(() => users.id, { onDelete: "set null" }),
    /** Who it was given to. */
    toInstructorId: text("to_instructor_id").references(() => users.id, { onDelete: "set null" }),
    /** Who made the change. Null for a seed run, or if the account is removed later. */
    actorUserId: text("actor_user_id").references(() => users.id, { onDelete: "set null" }),
    /** The role they acted in: platform_owner | brand_admin | seed. */
    actorRole: text("actor_role").notNull(),
    /** Where the change was made: course-settings | admin-users | course-request | course-offer | seed. */
    source: text("source").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("course_instructor_changes_course_idx").on(t.courseId, t.createdAt)],
);

export type CourseInstructorChange = typeof courseInstructorChanges.$inferSelect;
