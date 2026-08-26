import "server-only";
import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { courseInterestRequests, type CourseInterestRequest } from "@/db/schema";
import type { InterestCapacity, NormalizedInterestInput } from "@/lib/course-interest";

// Self-nominated course interest, reads and writes. EVERY function here takes a tenantId and
// filters on it, so no caller can list, read or decide a request outside its own school. The
// decision about what an approval GRANTS is not made here: it lives in the pure
// src/lib/course-interest.ts (grantsAuditOnDecision) so the isolation suite owns that definition,
// and the route mints the grant through the EXISTING invite path in src/db/queries/course-auditors.

/** Every request on one of THIS tenant's courses, newest first. Carries the PII. */
export async function listCourseInterest(
  tenantId: string,
  courseId: string,
): Promise<CourseInterestRequest[]> {
  return db
    .select()
    .from(courseInterestRequests)
    .where(
      and(
        eq(courseInterestRequests.tenantId, tenantId),
        eq(courseInterestRequests.courseId, courseId),
      ),
    )
    .orderBy(desc(courseInterestRequests.createdAt));
}

/** One request, or undefined for an id that is not this tenant's (the route then 404s). */
export async function getCourseInterest(
  tenantId: string,
  courseId: string,
  requestId: string,
): Promise<CourseInterestRequest | undefined> {
  const rows = await db
    .select()
    .from(courseInterestRequests)
    .where(
      and(
        eq(courseInterestRequests.tenantId, tenantId),
        eq(courseInterestRequests.courseId, courseId),
        eq(courseInterestRequests.id, requestId),
      ),
    )
    .limit(1);
  return rows[0];
}

/** How many requests on this course are still waiting for a human. Tenant-scoped. */
export async function countPendingCourseInterest(
  tenantId: string,
  courseId: string,
): Promise<number> {
  const rows = await db
    .select({ n: sql<number>`count(*)::int` })
    .from(courseInterestRequests)
    .where(
      and(
        eq(courseInterestRequests.tenantId, tenantId),
        eq(courseInterestRequests.courseId, courseId),
        eq(courseInterestRequests.status, "pending"),
      ),
    );
  return rows[0]?.n ?? 0;
}

/**
 * Record a self-nomination. ALWAYS lands as `pending`, whatever the caller sends: status is never
 * read from a request body, so the public form cannot mint its own approval.
 *
 * Idempotent on (tenant, course, email), which is what makes a double-tap on a phone harmless. On
 * conflict it refreshes the details ONLY while the row is still pending. A DECIDED row is left
 * exactly as it is:
 *   - re-submitting must not quietly revoke an approval that already minted an audit grant, and
 *   - re-submitting must not reopen a decline, or "no" would only ever last until the next reload.
 * Re-deciding stays where it belongs, on the owner's admin panel.
 */
export async function upsertCourseInterest(input: {
  tenantId: string;
  courseId: string;
  userId: string | null;
  request: NormalizedInterestInput;
}): Promise<void> {
  const { request } = input;
  await db
    .insert(courseInterestRequests)
    .values({
      tenantId: input.tenantId,
      courseId: input.courseId,
      userId: input.userId,
      capacity: request.capacity,
      status: "pending",
      name: request.name,
      email: request.email,
      phone: request.phone,
      phoneRaw: request.phoneRaw,
      credentials: request.credentials,
    })
    .onConflictDoUpdate({
      target: [
        courseInterestRequests.tenantId,
        courseInterestRequests.courseId,
        courseInterestRequests.email,
      ],
      set: {
        capacity: sql`excluded.capacity`,
        name: sql`excluded.name`,
        phone: sql`excluded.phone`,
        phoneRaw: sql`excluded.phone_raw`,
        credentials: sql`excluded.credentials`,
        userId: sql`coalesce(excluded.user_id, ${courseInterestRequests.userId})`,
      },
      // Only while nobody has ruled on it yet. Postgres evaluates this against the EXISTING row.
      setWhere: eq(courseInterestRequests.status, "pending"),
    });
}

/**
 * Record the owner's approve/decline decision. Tenant + course scoped, so an id from another school
 * updates nothing and the route reports the same "not found" a made-up id would.
 *
 * This function only moves the STATUS. Minting the audit grant is the route's job, through the
 * existing inviteCourseAuditor path, and only when the pure grantsAuditOnDecision says so.
 */
export async function decideCourseInterest(input: {
  tenantId: string;
  courseId: string;
  requestId: string;
  status: "approved" | "declined";
  decidedBy: string;
}): Promise<CourseInterestRequest | undefined> {
  const rows = await db
    .update(courseInterestRequests)
    .set({ status: input.status, decidedAt: new Date(), decidedBy: input.decidedBy })
    .where(
      and(
        eq(courseInterestRequests.tenantId, input.tenantId),
        eq(courseInterestRequests.courseId, input.courseId),
        eq(courseInterestRequests.id, input.requestId),
      ),
    )
    .returning();
  return rows[0];
}

/** Capacity counts for one course, for the admin summary line. Tenant-scoped. */
export async function countCourseInterestByCapacity(
  tenantId: string,
  courseId: string,
): Promise<Record<InterestCapacity, number>> {
  const rows = await db
    .select({ capacity: courseInterestRequests.capacity, n: sql<number>`count(*)::int` })
    .from(courseInterestRequests)
    .where(
      and(
        eq(courseInterestRequests.tenantId, tenantId),
        eq(courseInterestRequests.courseId, courseId),
      ),
    )
    .groupBy(courseInterestRequests.capacity);
  const out: Record<InterestCapacity, number> = { learner: 0, beta: 0, expert: 0 };
  for (const r of rows) {
    if (r.capacity === "learner" || r.capacity === "beta" || r.capacity === "expert") {
      out[r.capacity] = r.n;
    }
  }
  return out;
}
