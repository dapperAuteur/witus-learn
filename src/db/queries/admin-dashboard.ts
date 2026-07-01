import "server-only";
import { countDistinct, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { users } from "@/db/schema/auth";
import { courses } from "@/db/schema/courses";
import { enrollments, courseCompletions } from "@/db/schema/billing";

// Read-only aggregates for the brand-admin dashboard. Everything is scoped through
// enrollments.tenant_id (denormalised for exactly this cheap isolation) or courses.tenant_id.

export interface AdminStats {
  learners: number; // distinct enrolled users
  enrollments: number; // active enrollments
  courses: number; // total courses in this school
  publishedCourses: number;
  completions: number; // completion records for this school's courses
}

export async function getAdminStats(tenantId: string): Promise<AdminStats> {
  const [enr] = await db
    .select({
      learners: countDistinct(enrollments.userId),
      enrollments: sql<number>`count(*) filter (where ${enrollments.status} = 'active')`.mapWith(Number),
    })
    .from(enrollments)
    .where(eq(enrollments.tenantId, tenantId));

  const [crs] = await db
    .select({
      courses: sql<number>`count(*)`.mapWith(Number),
      published: sql<number>`count(*) filter (where ${courses.isPublished})`.mapWith(Number),
    })
    .from(courses)
    .where(eq(courses.tenantId, tenantId));

  // Completions join through this tenant's courses (course_completions has no tenant_id).
  const [comp] = await db
    .select({ completions: sql<number>`count(*)`.mapWith(Number) })
    .from(courseCompletions)
    .innerJoin(courses, eq(courseCompletions.courseId, courses.id))
    .where(eq(courses.tenantId, tenantId));

  return {
    learners: Number(enr?.learners ?? 0),
    enrollments: Number(enr?.enrollments ?? 0),
    courses: Number(crs?.courses ?? 0),
    publishedCourses: Number(crs?.published ?? 0),
    completions: Number(comp?.completions ?? 0),
  };
}

export interface LearnerRow {
  userId: string;
  email: string;
  name: string | null;
  enrollments: number;
  completions: number;
  lastSeenAt: Date | null;
  firstEnrolledAt: Date | null;
}

// One row per learner enrolled in this school, most-recently-active first.
export async function listLearners(tenantId: string, limit = 500): Promise<LearnerRow[]> {
  const completions = db
    .select({
      userId: courseCompletions.userId,
      n: sql<number>`count(*)`.as("n"),
    })
    .from(courseCompletions)
    .innerJoin(courses, eq(courseCompletions.courseId, courses.id))
    .where(eq(courses.tenantId, tenantId))
    .groupBy(courseCompletions.userId)
    .as("completions");

  return db
    .select({
      userId: users.id,
      email: users.email,
      name: users.name,
      enrollments: sql<number>`count(${enrollments.id})`.mapWith(Number),
      completions: sql<number>`coalesce(${completions.n}, 0)`.mapWith(Number),
      lastSeenAt: sql<Date | null>`max(${enrollments.lastContentSeenAt})`,
      firstEnrolledAt: sql<Date | null>`min(${enrollments.enrolledAt})`,
    })
    .from(enrollments)
    .innerJoin(users, eq(users.id, enrollments.userId))
    .leftJoin(completions, eq(completions.userId, users.id))
    .where(eq(enrollments.tenantId, tenantId))
    .groupBy(users.id, users.email, users.name, completions.n)
    .orderBy(desc(sql`max(${enrollments.lastContentSeenAt})`))
    .limit(limit);
}
