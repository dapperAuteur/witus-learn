import "server-only";
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  courses,
  documentationProjects,
  lessonTourEmbeds,
  lessons,
  projectCaptures,
  projectLegs,
  userProfiles,
  type LessonTourEmbed,
} from "@/db/schema";
import type { StoredLessonTour, StoredTour } from "@/lib/field-log-tour";

// Tours from the field (plans/93 section 2). EVERY function takes a tenantId and filters on it, and
// is reached through ScopedDb, which supplies that id itself. Kept free of next/headers so the
// isolation suite can call them directly.
//
// The stored row says what was published; whether it is SHOWN is decided by src/lib/field-log-tour.ts
// against the capture and leg returned alongside it. The capture is joined only through a project in
// the SAME tenant as the tour, so a capture id from another school reads as deleted and hides the tour.

/** The capture and leg facts selected with every tour row, joined tenant-safely. */
const storedTourFields = {
  url: lessonTourEmbeds.url,
  creditLine: lessonTourEmbeds.creditLine,
  captureKind: projectCaptures.kind,
  captureConsent: projectCaptures.consentStatus,
  captureMinor: projectCaptures.involvesMinor,
  captureUrl: projectCaptures.storageUrl,
  captureProjectTenant: documentationProjects.tenantId,
  legId: projectLegs.id,
  permissionNote: projectLegs.permissionNote,
};

type StoredTourRow = {
  url: string;
  creditLine: string;
  captureKind: string | null;
  captureConsent: string | null;
  captureMinor: boolean | null;
  captureUrl: string | null;
  captureProjectTenant: string | null;
  legId: string | null;
  permissionNote: string | null;
};

function toStoredTour(r: StoredTourRow): StoredTour {
  const capture =
    r.captureKind != null && r.captureProjectTenant != null
      ? {
          kind: r.captureKind,
          consentStatus: r.captureConsent ?? "na",
          involvesMinor: r.captureMinor ?? false,
          storageUrl: r.captureUrl,
        }
      : null;
  return { url: r.url, creditLine: r.creditLine, capture, leg: r.legId ? { permissionNote: r.permissionNote } : null };
}

/** The tour rows of this tenant, joined to their capture (through a same-tenant project) and leg. */
function tourRows() {
  return db
    .select({
      ...storedTourFields,
      lessonId: lessonTourEmbeds.lessonId,
      courseId: lessonTourEmbeds.courseId,
      lessonType: lessons.lessonType,
      contentUrl: lessons.contentUrl,
    })
    .from(lessonTourEmbeds)
    .innerJoin(
      lessons,
      and(
        eq(lessons.id, lessonTourEmbeds.lessonId),
        eq(lessons.courseId, lessonTourEmbeds.courseId),
        eq(lessons.tenantId, lessonTourEmbeds.tenantId),
      ),
    )
    .leftJoin(projectCaptures, eq(projectCaptures.id, lessonTourEmbeds.captureId))
    .leftJoin(
      documentationProjects,
      and(
        eq(documentationProjects.id, projectCaptures.projectId),
        eq(documentationProjects.tenantId, lessonTourEmbeds.tenantId),
      ),
    )
    .leftJoin(projectLegs, eq(projectLegs.id, projectCaptures.legId));
}

/** Every field tour stored on one of this tenant's courses, with the facts liveToursByLesson needs. */
export async function listCourseTourEmbeds(tenantId: string, courseId: string): Promise<StoredLessonTour[]> {
  const rows = await tourRows().where(and(eq(lessonTourEmbeds.tenantId, tenantId), eq(lessonTourEmbeds.courseId, courseId)));
  return rows.map((r) => ({ ...toStoredTour(r), lessonId: r.lessonId, lessonType: r.lessonType, contentUrl: r.contentUrl }));
}

/** The field tour stored on one lesson of this tenant, or null. */
export async function getLessonTourEmbed(tenantId: string, lessonId: string): Promise<StoredLessonTour | null> {
  const [r] = await tourRows()
    .where(and(eq(lessonTourEmbeds.tenantId, tenantId), eq(lessonTourEmbeds.lessonId, lessonId)))
    .limit(1);
  return r ? { ...toStoredTour(r), lessonId: r.lessonId, lessonType: r.lessonType, contentUrl: r.contentUrl } : null;
}

export interface TourSlotRow {
  courseId: string;
  courseTitle: string;
  courseSlug: string | null;
  coursePublished: boolean;
  username: string | null;
  lessonId: string;
  lessonTitle: string;
  lessonSlug: string | null;
  lessonPublished: boolean;
  lessonType: string;
  contentUrl: string | null;
  /** The stored field tour, when there is one (shown or not). */
  tour: (StoredTour & { setAt: Date }) | null;
}

/**
 * Every virtual_tour lesson in this tenant that the viewer may publish a tour to: all of the
 * tenant's courses for the platform owner, the viewer's own courses for anyone else. Ordered by
 * course title, then lesson order.
 */
export async function listTourSlots(
  tenantId: string,
  viewer: { userId: string; isOwner: boolean },
): Promise<TourSlotRow[]> {
  const rows = await db
    .select({
      ...storedTourFields,
      tourId: lessonTourEmbeds.id,
      setAt: lessonTourEmbeds.setAt,
      courseId: courses.id,
      courseTitle: courses.title,
      courseSlug: courses.slug,
      coursePublished: courses.isPublished,
      username: userProfiles.username,
      lessonId: lessons.id,
      lessonTitle: lessons.title,
      lessonSlug: lessons.slug,
      lessonPublished: lessons.isPublished,
      lessonType: lessons.lessonType,
      contentUrl: lessons.contentUrl,
    })
    .from(lessons)
    .innerJoin(courses, and(eq(courses.id, lessons.courseId), eq(courses.tenantId, tenantId)))
    .leftJoin(userProfiles, eq(userProfiles.userId, courses.instructorId))
    .leftJoin(
      lessonTourEmbeds,
      and(eq(lessonTourEmbeds.lessonId, lessons.id), eq(lessonTourEmbeds.tenantId, tenantId)),
    )
    .leftJoin(projectCaptures, eq(projectCaptures.id, lessonTourEmbeds.captureId))
    .leftJoin(
      documentationProjects,
      and(eq(documentationProjects.id, projectCaptures.projectId), eq(documentationProjects.tenantId, tenantId)),
    )
    .leftJoin(projectLegs, eq(projectLegs.id, projectCaptures.legId))
    .where(
      and(
        eq(lessons.tenantId, tenantId),
        eq(lessons.lessonType, "virtual_tour"),
        viewer.isOwner ? undefined : eq(courses.instructorId, viewer.userId),
      ),
    )
    .orderBy(asc(courses.title), asc(lessons.sortOrder), asc(lessons.id));
  return rows.map((r) => ({
    courseId: r.courseId,
    courseTitle: r.courseTitle,
    courseSlug: r.courseSlug,
    coursePublished: r.coursePublished,
    username: r.username,
    lessonId: r.lessonId,
    lessonTitle: r.lessonTitle,
    lessonSlug: r.lessonSlug,
    lessonPublished: r.lessonPublished,
    lessonType: r.lessonType,
    contentUrl: r.contentUrl,
    tour: r.tourId && r.url && r.creditLine && r.setAt ? { ...toStoredTour(r as StoredTourRow), setAt: r.setAt } : null,
  }));
}

export interface InsertTourInput {
  tenantId: string;
  courseId: string;
  lessonId: string;
  captureId: string;
  /** A copy of the capture's storage_url, already checked by tourCaptureEligibility. */
  url: string;
  creditLine: string;
  setBy: string;
}

export type InsertTourResult =
  | { ok: true; row: LessonTourEmbed }
  | { ok: false; reason: "not_found" | "not_a_slot" | "taken" };

/**
 * Publish a tour into a lesson. Writes nothing unless the lesson belongs to THIS tenant and THIS
 * course and is still an empty slot (virtual_tour, no tour link of its own); the unique key on
 * lesson_id makes a second tour on the same lesson a no-op ("taken"). The route checks all of it
 * first; this repeats it where the row is written, because the foreign keys alone would accept
 * another school's lesson id under this tenant's name.
 */
export async function insertLessonTourEmbed(input: InsertTourInput): Promise<InsertTourResult> {
  const [lesson] = await db
    .select({ lessonType: lessons.lessonType, contentUrl: lessons.contentUrl })
    .from(lessons)
    .where(
      and(eq(lessons.id, input.lessonId), eq(lessons.tenantId, input.tenantId), eq(lessons.courseId, input.courseId)),
    )
    .limit(1);
  if (!lesson) return { ok: false, reason: "not_found" };
  if (lesson.lessonType !== "virtual_tour" || lesson.contentUrl?.trim()) return { ok: false, reason: "not_a_slot" };
  const [row] = await db
    .insert(lessonTourEmbeds)
    .values({
      tenantId: input.tenantId,
      courseId: input.courseId,
      lessonId: input.lessonId,
      captureId: input.captureId,
      url: input.url,
      creditLine: input.creditLine,
      setBy: input.setBy,
    })
    .onConflictDoNothing({ target: lessonTourEmbeds.lessonId })
    .returning();
  return row ? { ok: true, row } : { ok: false, reason: "taken" };
}

/** Take the tour off one lesson of one of this tenant's courses. False when there was none. */
export async function deleteLessonTourEmbed(tenantId: string, courseId: string, lessonId: string): Promise<boolean> {
  const rows = await db
    .delete(lessonTourEmbeds)
    .where(
      and(
        eq(lessonTourEmbeds.tenantId, tenantId),
        eq(lessonTourEmbeds.courseId, courseId),
        eq(lessonTourEmbeds.lessonId, lessonId),
      ),
    )
    .returning({ id: lessonTourEmbeds.id });
  return rows.length > 0;
}
