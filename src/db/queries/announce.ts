import "server-only";
import { and, eq, inArray } from "drizzle-orm";
import { db } from "@/db/client";
import { courses } from "@/db/schema";

// Tenant-scoped mutation for the batch-announce flow. Like every catalog query, the
// tenantId is baked into the WHERE — a course from another tenant can never be marked,
// even if its id is passed in.

/**
 * Stamp `announced_at` on the given courses (that belong to `tenantId`). Returns the
 * ids actually updated, so the caller can report the true count. No-op for an empty list.
 */
export async function markCoursesAnnounced(
  tenantId: string,
  courseIds: string[],
  at: Date,
): Promise<string[]> {
  if (courseIds.length === 0) return [];
  const rows = await db
    .update(courses)
    .set({ announcedAt: at })
    .where(and(eq(courses.tenantId, tenantId), inArray(courses.id, courseIds)))
    .returning({ id: courses.id });
  return rows.map((r) => r.id);
}
