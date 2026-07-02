import "server-only";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { recallAttempts } from "@/db/schema/learning";

// Record one self-grade. Signed-in only; tenant-scoped by the caller.
export async function recordRecallAttempt(input: {
  tenantId: string;
  userId: string;
  courseId: string;
  lessonId: string;
  promptIndex: number;
  gotIt: boolean;
}): Promise<void> {
  await db.insert(recallAttempts).values(input);
}

export interface RecallStats {
  attempts: number;
  gotIt: number;
  /** 0–100, or null when there are no attempts. */
  accuracy: number | null;
}

// Aggregate in-lesson recall accuracy for a course (all learners). Tenant-scoped. Used on the
// teacher page next to quiz accuracy so BAM can see whether it's sticking in-lesson vs at quiz time.
export async function getCourseRecallStats(tenantId: string, courseId: string): Promise<RecallStats> {
  const [row] = await db
    .select({
      attempts: sql<number>`count(*)`.mapWith(Number),
      gotIt: sql<number>`count(*) filter (where ${recallAttempts.gotIt})`.mapWith(Number),
    })
    .from(recallAttempts)
    .where(and(eq(recallAttempts.tenantId, tenantId), eq(recallAttempts.courseId, courseId)));
  const attempts = row?.attempts ?? 0;
  const gotIt = row?.gotIt ?? 0;
  return { attempts, gotIt, accuracy: attempts > 0 ? Math.round((gotIt / attempts) * 100) : null };
}

// A single learner's own recall accuracy in a course (for their results view). Tenant-scoped.
export async function getUserCourseRecallStats(
  tenantId: string,
  userId: string,
  courseId: string,
): Promise<RecallStats> {
  const [row] = await db
    .select({
      attempts: sql<number>`count(*)`.mapWith(Number),
      gotIt: sql<number>`count(*) filter (where ${recallAttempts.gotIt})`.mapWith(Number),
    })
    .from(recallAttempts)
    .where(
      and(
        eq(recallAttempts.tenantId, tenantId),
        eq(recallAttempts.userId, userId),
        eq(recallAttempts.courseId, courseId),
      ),
    );
  const attempts = row?.attempts ?? 0;
  const gotIt = row?.gotIt ?? 0;
  return { attempts, gotIt, accuracy: attempts > 0 ? Math.round((gotIt / attempts) * 100) : null };
}
