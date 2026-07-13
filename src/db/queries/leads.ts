import "server-only";
import { desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { leads, type Lead, type LeadInquiry } from "@/db/schema/learning";

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

/**
 * Capture a lead who actually ASKED something (the /explore pricing form).
 *
 * Unlike addLead, this must never no-op: leads is unique on (tenant, email), so a prospect who
 * already hit "notify me" would have their pricing enquiry thrown away by ON CONFLICT DO NOTHING.
 * A lost enquiry is a lost sale, so on conflict we APPEND the enquiry to the existing row's
 * jsonb array (`inquiries || excluded.inquiries`) and promote the row's `source` to the newest
 * intent — a pricing question is more actionable than the newsletter signup it supersedes. The
 * name is only overwritten when the new submission actually supplies one.
 */
export async function addLeadInquiry(input: {
  tenantId: string;
  email: string;
  name?: string | null;
  source: string;
  inquiry: LeadInquiry;
}): Promise<void> {
  await db
    .insert(leads)
    .values({
      tenantId: input.tenantId,
      email: input.email.trim().toLowerCase(),
      name: input.name?.trim() || null,
      source: input.source,
      inquiries: [input.inquiry],
    })
    .onConflictDoUpdate({
      target: [leads.tenantId, leads.email],
      set: {
        name: sql`coalesce(excluded.name, ${leads.name})`,
        source: sql`excluded.source`,
        inquiries: sql`coalesce(${leads.inquiries}, '[]'::jsonb) || excluded.inquiries`,
      },
    });
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
