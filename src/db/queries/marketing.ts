import "server-only";
import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { emailCampaigns, enrollments, leads, type EmailCampaign } from "@/db/schema";

/** Audience sizes for the campaign composer — TENANT-SCOPED. */
export async function getAudienceCounts(tenantId: string): Promise<{ leads: number; enrolled: number }> {
  const [l] = await db.select({ n: sql<number>`count(*)::int` }).from(leads).where(eq(leads.tenantId, tenantId));
  const [e] = await db
    .select({ n: sql<number>`count(distinct ${enrollments.userId})::int` })
    .from(enrollments)
    .where(and(eq(enrollments.tenantId, tenantId), eq(enrollments.status, "active")));
  return { leads: l?.n ?? 0, enrolled: e?.n ?? 0 };
}

export async function listCampaigns(tenantId: string): Promise<EmailCampaign[]> {
  return db
    .select()
    .from(emailCampaigns)
    .where(eq(emailCampaigns.tenantId, tenantId))
    .orderBy(desc(emailCampaigns.createdAt));
}

/** Create a DRAFT campaign. Does not send — sending is a separate confirmed step. */
export async function createCampaign(
  tenantId: string,
  userId: string,
  data: { subject: string; body: string; audience: "leads" | "enrolled" },
): Promise<EmailCampaign> {
  const [row] = await db
    .insert(emailCampaigns)
    .values({ tenantId, createdBy: userId, subject: data.subject, body: data.body, audience: data.audience, status: "draft" })
    .returning();
  return row;
}
