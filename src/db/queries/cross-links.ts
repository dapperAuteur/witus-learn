import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  crossLinkApprovals,
  crossLinkDismissals,
  type CrossLinkApproval,
  type CrossLinkDismissal,
} from "@/db/schema";
import { crossLinkKey } from "@/lib/cross-links";

// Cross-link decisions, tenant-scoped. Every function takes an explicit tenantId and bakes it into
// the WHERE, like the catalog queries; there is no unscoped variant, and the tenant always comes
// from the request host. Kept free of next/headers so the isolation suite can call them directly.
//
// The table shapes and the argument for two tables are in src/db/schema/cross-links.ts. The one
// thing to remember when reading anything here: the RENDER path touches approvals only, so no
// mistake in the dismissal half can put a link in front of a learner.

export interface CrossLinkTriple {
  sourceCourseSlug: string;
  sourceLessonSlug: string;
  targetCourseSlug: string;
}

function whereTriple(tenantId: string, t: CrossLinkTriple) {
  return and(
    eq(crossLinkApprovals.tenantId, tenantId),
    eq(crossLinkApprovals.sourceCourseSlug, t.sourceCourseSlug),
    eq(crossLinkApprovals.sourceLessonSlug, t.sourceLessonSlug),
    eq(crossLinkApprovals.targetCourseSlug, t.targetCourseSlug),
  );
}

function whereDismissedTriple(tenantId: string, t: CrossLinkTriple) {
  return and(
    eq(crossLinkDismissals.tenantId, tenantId),
    eq(crossLinkDismissals.sourceCourseSlug, t.sourceCourseSlug),
    eq(crossLinkDismissals.sourceLessonSlug, t.sourceLessonSlug),
    eq(crossLinkDismissals.targetCourseSlug, t.targetCourseSlug),
  );
}

export interface CrossLinkDecisions {
  approvals: Map<string, CrossLinkApproval>;
  dismissals: Map<string, CrossLinkDismissal>;
}

/** Every decision this tenant has made, keyed by crossLinkKey, for the owner's board. */
export async function listCrossLinkDecisions(tenantId: string): Promise<CrossLinkDecisions> {
  const [approved, dismissed] = await Promise.all([
    db
      .select()
      .from(crossLinkApprovals)
      .where(eq(crossLinkApprovals.tenantId, tenantId))
      .limit(2000),
    db
      .select()
      .from(crossLinkDismissals)
      .where(eq(crossLinkDismissals.tenantId, tenantId))
      .limit(2000),
  ]);
  return {
    approvals: new Map(approved.map((r) => [crossLinkKey(r), r])),
    dismissals: new Map(dismissed.map((r) => [crossLinkKey(r), r])),
  };
}

/**
 * The single question the lesson page asks: which target courses did this tenant's owner approve for
 * this lesson? Absence means not approved, which is the safe default, and the query cannot see the
 * dismissals table at all.
 */
export async function listApprovedCrossLinkTargets(
  tenantId: string,
  sourceCourseSlug: string,
  sourceLessonSlug: string,
): Promise<string[]> {
  const rows = await db
    .select({ targetCourseSlug: crossLinkApprovals.targetCourseSlug })
    .from(crossLinkApprovals)
    .where(
      and(
        eq(crossLinkApprovals.tenantId, tenantId),
        eq(crossLinkApprovals.sourceCourseSlug, sourceCourseSlug),
        eq(crossLinkApprovals.sourceLessonSlug, sourceLessonSlug),
      ),
    )
    .limit(20);
  return rows.map((r) => r.targetCourseSlug);
}

/**
 * Approve a link, and clear any dismissal of the same triple.
 *
 * The delete is what keeps the two tables from ever disagreeing: with both rows present a reader
 * would need a precedence rule, and a precedence rule is one more thing to get wrong in the
 * direction that publishes something.
 */
export async function approveCrossLink(v: {
  tenantId: string;
  triple: CrossLinkTriple;
  approvedBy: string | null;
  note: string | null;
}): Promise<void> {
  await db.delete(crossLinkDismissals).where(whereDismissedTriple(v.tenantId, v.triple));
  await db
    .insert(crossLinkApprovals)
    .values({ tenantId: v.tenantId, ...v.triple, approvedBy: v.approvedBy, note: v.note })
    .onConflictDoUpdate({
      target: [
        crossLinkApprovals.tenantId,
        crossLinkApprovals.sourceCourseSlug,
        crossLinkApprovals.sourceLessonSlug,
        crossLinkApprovals.targetCourseSlug,
      ],
      set: { approvedAt: new Date(), approvedBy: v.approvedBy, note: v.note },
    });
}

/** Turn a candidate down, and clear any approval of the same triple so the link stops rendering. */
export async function dismissCrossLink(v: {
  tenantId: string;
  triple: CrossLinkTriple;
  dismissedBy: string | null;
  reason: string | null;
}): Promise<void> {
  await db.delete(crossLinkApprovals).where(whereTriple(v.tenantId, v.triple));
  await db
    .insert(crossLinkDismissals)
    .values({ tenantId: v.tenantId, ...v.triple, dismissedBy: v.dismissedBy, reason: v.reason })
    .onConflictDoUpdate({
      target: [
        crossLinkDismissals.tenantId,
        crossLinkDismissals.sourceCourseSlug,
        crossLinkDismissals.sourceLessonSlug,
        crossLinkDismissals.targetCourseSlug,
      ],
      set: { dismissedAt: new Date(), dismissedBy: v.dismissedBy, reason: v.reason },
    });
}

/**
 * Undo a decision by DELETING both rows, so the unreviewed default is restored exactly and the
 * candidate comes back to the queue. This is the only path back to "nobody has looked at this".
 */
export async function resetCrossLink(tenantId: string, triple: CrossLinkTriple): Promise<void> {
  await db.delete(crossLinkApprovals).where(whereTriple(tenantId, triple));
  await db.delete(crossLinkDismissals).where(whereDismissedTriple(tenantId, triple));
}
