import { and, asc, eq, inArray } from "drizzle-orm";
import { db } from "@/db/client";
import {
  courseCompletions,
  coursePrerequisites,
  courses,
  prerequisiteOverrides,
  type Course,
} from "@/db/schema";
import { unmetRequired } from "@/lib/prerequisites";

export interface PrerequisiteRow {
  prereq: Course;
  enforcement: string;
}

/** A course's prerequisites with the prereq course rows (tenant inherited). */
export async function listPrerequisites(courseId: string): Promise<PrerequisiteRow[]> {
  const rows = await db
    .select({ prereq: courses, enforcement: coursePrerequisites.enforcement })
    .from(coursePrerequisites)
    .innerJoin(courses, eq(courses.id, coursePrerequisites.prerequisiteCourseId))
    .where(eq(coursePrerequisites.courseId, courseId))
    .orderBy(asc(coursePrerequisites.sortOrder));
  return rows.map((r) => ({ prereq: r.prereq, enforcement: r.enforcement }));
}

export async function addPrerequisite(
  courseId: string,
  prerequisiteCourseId: string,
  enforcement: "required" | "recommended",
): Promise<void> {
  await db
    .insert(coursePrerequisites)
    .values({ courseId, prerequisiteCourseId, enforcement })
    .onConflictDoNothing({
      target: [coursePrerequisites.courseId, coursePrerequisites.prerequisiteCourseId],
    });
}

export async function removePrerequisite(
  courseId: string,
  prerequisiteCourseId: string,
): Promise<void> {
  await db
    .delete(coursePrerequisites)
    .where(
      and(
        eq(coursePrerequisites.courseId, courseId),
        eq(coursePrerequisites.prerequisiteCourseId, prerequisiteCourseId),
      ),
    );
}

export async function hasOverride(courseId: string, userId: string): Promise<boolean> {
  const rows = await db
    .select({ id: prerequisiteOverrides.id })
    .from(prerequisiteOverrides)
    .where(and(eq(prerequisiteOverrides.courseId, courseId), eq(prerequisiteOverrides.userId, userId)))
    .limit(1);
  return rows.length > 0;
}

export async function grantOverride(
  courseId: string,
  userId: string,
  grantedBy: string,
  notes?: string,
): Promise<void> {
  await db
    .insert(prerequisiteOverrides)
    .values({ courseId, userId, grantedBy, notes: notes ?? null })
    .onConflictDoNothing({ target: [prerequisiteOverrides.courseId, prerequisiteOverrides.userId] });
}

/** Required prereq courses the user has NOT satisfied (completed or overridden). */
export async function getUnmetRequired(userId: string, courseId: string): Promise<Course[]> {
  const required = await db
    .select({ id: coursePrerequisites.prerequisiteCourseId })
    .from(coursePrerequisites)
    .where(
      and(eq(coursePrerequisites.courseId, courseId), eq(coursePrerequisites.enforcement, "required")),
    );
  const requiredIds = required.map((r) => r.id);
  if (requiredIds.length === 0) return [];

  const [completed, override] = await Promise.all([
    db
      .select({ courseId: courseCompletions.courseId })
      .from(courseCompletions)
      .where(
        and(
          eq(courseCompletions.userId, userId),
          inArray(courseCompletions.courseId, requiredIds),
        ),
      ),
    hasOverride(courseId, userId),
  ]);

  const unmetIds = unmetRequired(
    requiredIds,
    new Set(completed.map((c) => c.courseId)),
    override,
  );
  if (unmetIds.length === 0) return [];

  return db.select().from(courses).where(inArray(courses.id, unmetIds));
}
