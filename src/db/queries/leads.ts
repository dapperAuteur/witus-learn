import "server-only";
import { desc, eq } from "drizzle-orm";
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
