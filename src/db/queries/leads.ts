import "server-only";
import { desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { leads, type Lead } from "@/db/schema/learning";

/** Capture a lead (idempotent per tenant+email). */
export async function addLead(input: {
  tenantId: string;
  email: string;
  name?: string | null;
  source?: string | null;
}): Promise<void> {
  await db
    .insert(leads)
    .values({
      tenantId: input.tenantId,
      email: input.email.trim().toLowerCase(),
      name: input.name ?? null,
      source: input.source ?? null,
    })
    .onConflictDoNothing();
}

export async function listLeads(tenantId: string): Promise<Lead[]> {
  return db.select().from(leads).where(eq(leads.tenantId, tenantId)).orderBy(desc(leads.createdAt)).limit(500);
}

/** Total captured leads for a tenant — the operator-overview headline number. */
export async function countLeads(tenantId: string): Promise<number> {
  const [row] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(leads)
    .where(eq(leads.tenantId, tenantId));
  return row?.count ?? 0;
}

/** Most recent N leads for a tenant (operator-overview card; full list lives at /admin/leads). */
export async function listRecentLeads(tenantId: string, limit = 5): Promise<Lead[]> {
  return db.select().from(leads).where(eq(leads.tenantId, tenantId)).orderBy(desc(leads.createdAt)).limit(limit);
}
