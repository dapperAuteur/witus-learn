import "server-only";
import { and, desc, eq, inArray, ne, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { problemReports, type ProblemReport } from "@/db/schema";

// App-wide bug / problem reports (distinct from the per-lesson curriculum feedback queue).

export interface NewProblemReport {
  tenantId: string;
  userId: string | null;
  kind: "bug" | "feedback" | "idea" | "other";
  message: string;
  pageUrl: string | null;
  email: string | null;
}

export async function insertProblemReport(r: NewProblemReport): Promise<ProblemReport> {
  const [row] = await db.insert(problemReports).values(r).returning();
  return row;
}

/** All reports for a tenant, newest first (admin triage). */
export async function listProblemReports(tenantId: string): Promise<ProblemReport[]> {
  return db
    .select()
    .from(problemReports)
    .where(eq(problemReports.tenantId, tenantId))
    .orderBy(desc(problemReports.createdAt))
    .limit(500);
}

/** Count of open (not "closed") reports for a tenant — the operator-overview headline number. */
export async function countOpenProblemReports(tenantId: string): Promise<number> {
  const [row] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(problemReports)
    .where(and(eq(problemReports.tenantId, tenantId), ne(problemReports.status, "closed")));
  return row?.count ?? 0;
}

/** Most recent N reports for a tenant (operator-overview card; full triage lives at /admin/reports). */
export async function listRecentProblemReports(tenantId: string, limit = 5): Promise<ProblemReport[]> {
  return db
    .select()
    .from(problemReports)
    .where(eq(problemReports.tenantId, tenantId))
    .orderBy(desc(problemReports.createdAt))
    .limit(limit);
}

/** Update a report's status (tenant-scoped). */
export async function setProblemReportStatus(
  tenantId: string,
  id: string,
  status: "new" | "triaged" | "closed",
): Promise<ProblemReport | null> {
  const [row] = await db
    .update(problemReports)
    .set({ status })
    .where(and(eq(problemReports.tenantId, tenantId), eq(problemReports.id, id)))
    .returning();
  return row ?? null;
}

/** Set the status of many reports at once (tenant-scoped). Powers the admin "bulk resolve" action
 *  so a batch of already-triaged reports can be closed in one click. Returns the ids actually
 *  updated (ids belonging to another tenant simply don't match and are skipped — no cross-tenant write). */
export async function setProblemReportStatusBulk(
  tenantId: string,
  ids: string[],
  status: "new" | "triaged" | "closed",
): Promise<string[]> {
  if (ids.length === 0) return [];
  const rows = await db
    .update(problemReports)
    .set({ status })
    .where(and(eq(problemReports.tenantId, tenantId), inArray(problemReports.id, ids)))
    .returning({ id: problemReports.id });
  return rows.map((r) => r.id);
}
