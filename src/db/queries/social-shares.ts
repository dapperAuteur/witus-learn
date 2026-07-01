import "server-only";
import { eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { socialShares } from "@/db/schema/learning";

export type ShareChannel = "copy" | "native" | "x" | "linkedin" | "facebook" | "email";

// Record one share action (privacy-light — no user id). Tenant-scoped by the caller.
export async function recordShare(input: {
  tenantId: string;
  courseId: string | null;
  lessonId: string | null;
  channel: ShareChannel;
}): Promise<void> {
  await db.insert(socialShares).values(input);
}

export interface ShareStats {
  total: number;
  byChannel: { channel: string; count: number }[];
}

// Aggregate share counts for a school's admin dashboard. Tenant-scoped.
export async function getShareStats(tenantId: string): Promise<ShareStats> {
  const rows = await db
    .select({ channel: socialShares.channel, count: sql<number>`count(*)`.mapWith(Number) })
    .from(socialShares)
    .where(eq(socialShares.tenantId, tenantId))
    .groupBy(socialShares.channel)
    .orderBy(sql`count(*) desc`);
  return { total: rows.reduce((s, r) => s + r.count, 0), byChannel: rows };
}
