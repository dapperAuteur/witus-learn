import "server-only";
import { asc, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { liveSessions, type LiveSession } from "@/db/schema/learning";
import { tenants } from "@/db/schema/tenancy";

export interface NewLiveSession {
  courseId: string | null;
  title: string;
  description: string | null;
  scheduledAt: Date | null;
  visibility: string;
  playbackUrl: string | null;
}

/** Sessions for a school's /live page (live first, then soonest upcoming, then rest). */
export async function listLiveForViewer(tenantId: string): Promise<LiveSession[]> {
  return db
    .select()
    .from(liveSessions)
    .where(eq(liveSessions.tenantId, tenantId))
    .orderBy(desc(liveSessions.isLive), asc(liveSessions.scheduledAt), desc(liveSessions.createdAt));
}

export async function listLiveForAdmin(tenantId: string): Promise<LiveSession[]> {
  return db
    .select()
    .from(liveSessions)
    .where(eq(liveSessions.tenantId, tenantId))
    .orderBy(desc(liveSessions.createdAt));
}

/** Fan-out: one stream broadcast to several schools = one row per tenant. */
export async function createLiveSessions(
  tenantIds: string[],
  data: NewLiveSession,
  createdBy: string,
): Promise<number> {
  if (tenantIds.length === 0) return 0;
  await db.insert(liveSessions).values(tenantIds.map((tenantId) => ({ tenantId, createdBy, ...data })));
  return tenantIds.length;
}

export async function getLiveTenantId(id: string): Promise<string | null> {
  const r = await db.select({ tenantId: liveSessions.tenantId }).from(liveSessions).where(eq(liveSessions.id, id)).limit(1);
  return r[0]?.tenantId ?? null;
}

export async function updateLiveSession(
  id: string,
  patch: Partial<{ isLive: boolean; recordingUrl: string | null; playbackUrl: string | null; title: string; visibility: string }>,
): Promise<void> {
  await db.update(liveSessions).set(patch).where(eq(liveSessions.id, id));
}

export async function deleteLiveSession(id: string): Promise<void> {
  await db.delete(liveSessions).where(eq(liveSessions.id, id));
}

/** All schools, for the broadcast fan-out picker (platform owner). */
export async function listAllTenants(): Promise<{ id: string; name: string }[]> {
  return db.select({ id: tenants.id, name: tenants.name }).from(tenants).orderBy(asc(tenants.name));
}
