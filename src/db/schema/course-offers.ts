import { sql } from "drizzle-orm";
import { check, index, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";
import { tenants } from "./tenancy";
import { users } from "./auth";
import { courses } from "./courses";

// A course offered to a teacher (BAM, 2026-11-10: "approve assigned courses"). A school's admin hands a
// course to a teacher from Admin → Users or the course's settings; the course's instructor does not change
// until the teacher accepts on /teach. Declined, withdrawn and expired offers stay as the record. One
// open offer per course: a new offer withdraws the open one. Tenant-scoped on every read and write.
// The rules are src/lib/course-offers.ts.
export const courseOffers = pgTable(
  "course_offers",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    /** The teacher it is offered to. */
    teacherUserId: text("teacher_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** Who taught the course when it was offered. */
    fromInstructorId: text("from_instructor_id").references(() => users.id, { onDelete: "set null" }),
    /** The admin who offered it. Null if that account is removed later. */
    offeredByUserId: text("offered_by_user_id").references(() => users.id, { onDelete: "set null" }),
    /** platform_owner | brand_admin, as recorded in course_instructor_changes on acceptance. */
    offeredByRole: text("offered_by_role").notNull(),
    /** offered | accepted | declined | withdrawn | expired */
    status: text("status").notNull().default("offered"),
    /** The teacher's optional note on accepting or declining. */
    decisionNote: text("decision_note"),
    decidedAt: timestamp("decided_at", { withTimezone: true }),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("course_offers_open_course_uq").on(t.courseId).where(sql`${t.status} = 'offered'`),
    index("course_offers_teacher_idx").on(t.tenantId, t.teacherUserId, t.status),
    check("course_offers_status_chk", sql`${t.status} in ('offered','accepted','declined','withdrawn','expired')`),
    check("course_offers_role_chk", sql`${t.offeredByRole} in ('platform_owner','brand_admin')`),
  ],
);

export type CourseOffer = typeof courseOffers.$inferSelect;
