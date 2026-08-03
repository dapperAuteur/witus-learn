import "server-only";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { courseCitationChecks, type CourseCitationCheck } from "@/db/schema";

// Citation verification status. Tenant-scoped on every read and write; the tenant is resolved
// server-side from the request host, never supplied by the client.

export interface UpsertCitationCheck {
  tenantId: string;
  citationKey: string;
  courseSlug: string;
  status: "unverified" | "verified" | "broken" | "mismatch";
  note: string | null;
  checkedBy: string | null;
}

export async function upsertCitationCheck(v: UpsertCitationCheck): Promise<CourseCitationCheck> {
  const [row] = await db
    .insert(courseCitationChecks)
    .values(v)
    .onConflictDoUpdate({
      target: [courseCitationChecks.tenantId, courseCitationChecks.citationKey],
      set: {
        status: v.status,
        note: v.note,
        checkedBy: v.checkedBy,
        courseSlug: v.courseSlug,
        updatedAt: new Date(),
      },
    })
    .returning();
  return row;
}

/** Keyed by citation_key — what both boards render against the committed registry. */
export async function citationChecksByKey(
  tenantId: string,
): Promise<Map<string, CourseCitationCheck>> {
  const rows = await db
    .select()
    .from(courseCitationChecks)
    .where(eq(courseCitationChecks.tenantId, tenantId))
    .limit(10000);
  const map = new Map<string, CourseCitationCheck>();
  for (const r of rows) map.set(r.citationKey, r);
  return map;
}
