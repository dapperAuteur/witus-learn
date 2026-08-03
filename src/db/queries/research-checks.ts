import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { courseResearchChecks, type CourseResearchCheck } from "@/db/schema";

// Answers the owner leaves on source-verification checks (/admin/research). Every read and write is
// tenant-scoped, and the tenant is always resolved server-side from the host, never from the client.
//
// One row per (tenant, check): answering again UPDATES rather than appending, because what matters is
// the answer as it stands. The check definitions themselves are committed code in
// src/lib/research-checks.ts and are not stored here.

export interface UpsertResearchCheck {
  tenantId: string;
  checkKey: string;
  status: "open" | "verified" | "corrected" | "blocked";
  answer: string | null;
  answeredBy: string | null;
}

export async function upsertResearchCheck(v: UpsertResearchCheck): Promise<CourseResearchCheck> {
  const [row] = await db
    .insert(courseResearchChecks)
    .values(v)
    .onConflictDoUpdate({
      target: [courseResearchChecks.tenantId, courseResearchChecks.checkKey],
      set: {
        status: v.status,
        answer: v.answer,
        answeredBy: v.answeredBy,
        updatedAt: new Date(),
      },
    })
    .returning();
  return row;
}

export async function listResearchChecks(tenantId: string): Promise<CourseResearchCheck[]> {
  return db
    .select()
    .from(courseResearchChecks)
    .where(eq(courseResearchChecks.tenantId, tenantId))
    .limit(1000);
}

/** Keyed by check_key, which is what the board renders against each committed definition. */
export async function researchChecksByKey(
  tenantId: string,
): Promise<Map<string, CourseResearchCheck>> {
  const map = new Map<string, CourseResearchCheck>();
  for (const row of await listResearchChecks(tenantId)) map.set(row.checkKey, row);
  return map;
}

export async function getResearchCheckRow(
  tenantId: string,
  checkKey: string,
): Promise<CourseResearchCheck | undefined> {
  const [row] = await db
    .select()
    .from(courseResearchChecks)
    .where(
      and(eq(courseResearchChecks.tenantId, tenantId), eq(courseResearchChecks.checkKey, checkKey)),
    )
    .limit(1);
  return row;
}
