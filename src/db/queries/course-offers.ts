import "server-only";
import { and, desc, eq, gt, lte } from "drizzle-orm";
import { alias } from "drizzle-orm/pg-core";
import { db } from "@/db/client";
import { courseInstructorChanges, courseOffers, courses, userProfiles, users, type Course, type CourseOffer } from "@/db/schema";
import { expireCourse } from "@/lib/cache-tags";
import { offerExpiresAt } from "@/lib/course-offers";

// Course offers: the database half of src/lib/course-offers.ts. Every read and write is keyed on the
// tenant the request's host resolved to; a by-id read for another school's offer returns null and the
// route answers 404. An offer past its expiry is marked expired lazily, by the reads below, so no cron
// job is needed and an expired offer can never be accepted (the accept is guarded on expires_at too).

export interface CourseOfferRow extends CourseOffer {
  courseTitle: string;
  courseSlug: string | null;
  teacherLabel: string;
  teacherEmail: string;
  offeredByLabel: string | null;
  offeredByEmail: string | null;
}

const teacher = alias(users, "offer_teacher");
const teacherProfile = alias(userProfiles, "offer_teacher_profile");
const offeredBy = alias(users, "offer_by");
const offeredByProfile = alias(userProfiles, "offer_by_profile");

function label(displayName: string | null, name: string | null, username: string | null, email: string | null): string {
  return displayName?.trim() || name?.trim() || (username ? `@${username}` : email ?? "a teacher");
}

function selectRows() {
  return db
    .select({
      offer: courseOffers,
      courseTitle: courses.title,
      courseSlug: courses.slug,
      teacherName: teacher.name,
      teacherEmail: teacher.email,
      teacherDisplayName: teacherProfile.displayName,
      teacherUsername: teacherProfile.username,
      byName: offeredBy.name,
      byEmail: offeredBy.email,
      byDisplayName: offeredByProfile.displayName,
      byUsername: offeredByProfile.username,
    })
    .from(courseOffers)
    .innerJoin(courses, eq(courses.id, courseOffers.courseId))
    .innerJoin(teacher, eq(teacher.id, courseOffers.teacherUserId))
    .leftJoin(teacherProfile, eq(teacherProfile.userId, courseOffers.teacherUserId))
    .leftJoin(offeredBy, eq(offeredBy.id, courseOffers.offeredByUserId))
    .leftJoin(offeredByProfile, eq(offeredByProfile.userId, courseOffers.offeredByUserId));
}

type Raw = Awaited<ReturnType<ReturnType<typeof selectRows>["where"]>>[number];

function toRow(r: Raw): CourseOfferRow {
  return {
    ...r.offer,
    courseTitle: r.courseTitle,
    courseSlug: r.courseSlug,
    teacherLabel: label(r.teacherDisplayName, r.teacherName, r.teacherUsername, r.teacherEmail),
    teacherEmail: r.teacherEmail,
    offeredByLabel: r.byEmail ? label(r.byDisplayName, r.byName, r.byUsername, r.byEmail) : null,
    offeredByEmail: r.byEmail ?? null,
  };
}

/** Mark this school's open offers that are past their expiry as expired. Cheap; run before a list. */
export async function expireStaleOffers(tenantId: string, now = new Date()): Promise<void> {
  await db
    .update(courseOffers)
    .set({ status: "expired", updatedAt: now })
    .where(and(eq(courseOffers.tenantId, tenantId), eq(courseOffers.status, "offered"), lte(courseOffers.expiresAt, now)));
}

/**
 * Offer a course to a teacher. Any open offer for the same course is withdrawn first (one open offer per
 * course, which the partial unique index also enforces), in the same transaction.
 */
export async function createCourseOffer(input: {
  tenantId: string;
  course: Pick<Course, "id" | "instructorId">;
  teacherUserId: string;
  offeredBy: { userId: string; role: "platform_owner" | "brand_admin" };
  now?: Date;
}): Promise<CourseOffer> {
  const now = input.now ?? new Date();
  return db.transaction(async (tx) => {
    await tx
      .update(courseOffers)
      .set({ status: "withdrawn", decidedAt: now, updatedAt: now })
      .where(and(eq(courseOffers.courseId, input.course.id), eq(courseOffers.tenantId, input.tenantId), eq(courseOffers.status, "offered")));
    const [row] = await tx
      .insert(courseOffers)
      .values({
        tenantId: input.tenantId,
        courseId: input.course.id,
        teacherUserId: input.teacherUserId,
        fromInstructorId: input.course.instructorId,
        offeredByUserId: input.offeredBy.userId,
        offeredByRole: input.offeredBy.role,
        expiresAt: offerExpiresAt(now),
        createdAt: now,
        updatedAt: now,
      })
      .returning();
    return row;
  });
}

/** The open offers made to one teacher on this school, newest first. */
export async function listOffersForTeacher(tenantId: string, teacherUserId: string): Promise<CourseOfferRow[]> {
  await expireStaleOffers(tenantId);
  const rows = await selectRows()
    .where(and(eq(courseOffers.tenantId, tenantId), eq(courseOffers.teacherUserId, teacherUserId), eq(courseOffers.status, "offered")))
    .orderBy(desc(courseOffers.createdAt));
  return rows.map(toRow);
}

/** The open offers on this school, for Admin → Users, newest first. */
export async function listOpenOffers(tenantId: string): Promise<CourseOfferRow[]> {
  await expireStaleOffers(tenantId);
  const rows = await selectRows()
    .where(and(eq(courseOffers.tenantId, tenantId), eq(courseOffers.status, "offered")))
    .orderBy(desc(courseOffers.createdAt));
  return rows.map(toRow);
}

/** Offers answered in the last 30 days on this school, so the admin sees a decline. Newest first. */
export async function listRecentlyAnsweredOffers(tenantId: string, now = new Date()): Promise<CourseOfferRow[]> {
  const since = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const rows = await selectRows()
    .where(and(eq(courseOffers.tenantId, tenantId), gt(courseOffers.updatedAt, since)))
    .orderBy(desc(courseOffers.updatedAt))
    .limit(50);
  return rows.map(toRow).filter((r) => r.status !== "offered");
}

/** By id, on THIS school only. */
export async function getCourseOffer(tenantId: string, id: string): Promise<CourseOfferRow | null> {
  const rows = await selectRows()
    .where(and(eq(courseOffers.id, id), eq(courseOffers.tenantId, tenantId)))
    .limit(1);
  return rows[0] ? toRow(rows[0]) : null;
}

/**
 * Accept: in one transaction, claim the offer (guarded on status, teacher and expiry), move the course to
 * the teacher, and log the change in course_instructor_changes with the ADMIN who offered it as the actor
 * (source course-offer). The caller has run both rules (decideOfferResponse, and the assignment rule
 * through checkInstructorAssignment). Null when the offer was answered, withdrawn or expired meanwhile.
 */
export async function acceptCourseOffer(input: {
  tenantId: string;
  offer: CourseOffer;
  note: string | null;
  now?: Date;
}): Promise<{ offer: CourseOffer; course: Course; fromInstructorId: string } | null> {
  const now = input.now ?? new Date();
  const { tenantId, offer } = input;
  const result = await db.transaction(async (tx) => {
    const [claimed] = await tx
      .update(courseOffers)
      .set({ status: "accepted", decisionNote: input.note, decidedAt: now, updatedAt: now })
      .where(
        and(
          eq(courseOffers.id, offer.id),
          eq(courseOffers.tenantId, tenantId),
          eq(courseOffers.teacherUserId, offer.teacherUserId),
          eq(courseOffers.status, "offered"),
          gt(courseOffers.expiresAt, now),
        ),
      )
      .returning();
    if (!claimed) return null;
    const [before] = await tx
      .select({ instructorId: courses.instructorId })
      .from(courses)
      .where(and(eq(courses.id, offer.courseId), eq(courses.tenantId, tenantId)))
      .limit(1);
    if (!before) return null;
    const [course] = await tx
      .update(courses)
      .set({ instructorId: offer.teacherUserId, updatedAt: now })
      .where(and(eq(courses.id, offer.courseId), eq(courses.tenantId, tenantId)))
      .returning();
    if (before.instructorId !== offer.teacherUserId) {
      await tx.insert(courseInstructorChanges).values({
        tenantId,
        courseId: offer.courseId,
        fromInstructorId: before.instructorId,
        toInstructorId: offer.teacherUserId,
        actorUserId: offer.offeredByUserId,
        actorRole: offer.offeredByRole,
        source: "course-offer",
      });
    }
    return { offer: claimed, course, fromInstructorId: before.instructorId };
  });
  if (result) expireCourse(tenantId, offer.courseId);
  return result;
}

/** Decline: the instructor does not change. Null when the offer was answered or withdrawn meanwhile. */
export async function declineCourseOffer(input: { tenantId: string; offer: CourseOffer; note: string | null }): Promise<CourseOffer | null> {
  const now = new Date();
  const [row] = await db
    .update(courseOffers)
    .set({ status: "declined", decisionNote: input.note, decidedAt: now, updatedAt: now })
    .where(
      and(
        eq(courseOffers.id, input.offer.id),
        eq(courseOffers.tenantId, input.tenantId),
        eq(courseOffers.teacherUserId, input.offer.teacherUserId),
        eq(courseOffers.status, "offered"),
      ),
    )
    .returning();
  return row ?? null;
}

/** The admin withdraws an open offer. False when it was not open. */
export async function withdrawCourseOffer(tenantId: string, id: string): Promise<boolean> {
  const now = new Date();
  const rows = await db
    .update(courseOffers)
    .set({ status: "withdrawn", decidedAt: now, updatedAt: now })
    .where(and(eq(courseOffers.id, id), eq(courseOffers.tenantId, tenantId), eq(courseOffers.status, "offered")))
    .returning({ id: courseOffers.id });
  return rows.length > 0;
}
