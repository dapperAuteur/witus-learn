import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { ebookApprovals, type EbookApproval } from "@/db/schema";

// Ebook approval state. A row exists ONLY when the ebook is approved for that tenant, so the default
// (no row) is private. Every read is tenant-scoped; the tenant comes from the request host.

export async function listEbookApprovals(tenantId: string): Promise<Map<string, EbookApproval>> {
  const rows = await db
    .select()
    .from(ebookApprovals)
    .where(eq(ebookApprovals.tenantId, tenantId))
    .limit(200);
  return new Map(rows.map((r) => [r.ebookSlug, r]));
}

/** The single question the public routes ask. Absence means not approved, which is the safe default. */
export async function isEbookApproved(tenantId: string, ebookSlug: string): Promise<boolean> {
  const [row] = await db
    .select({ id: ebookApprovals.id })
    .from(ebookApprovals)
    .where(and(eq(ebookApprovals.tenantId, tenantId), eq(ebookApprovals.ebookSlug, ebookSlug)))
    .limit(1);
  return Boolean(row);
}

export async function approveEbook(v: {
  tenantId: string;
  ebookSlug: string;
  approvedBy: string | null;
  note: string | null;
}): Promise<void> {
  await db
    .insert(ebookApprovals)
    .values(v)
    .onConflictDoUpdate({
      target: [ebookApprovals.tenantId, ebookApprovals.ebookSlug],
      set: { approvedAt: new Date(), approvedBy: v.approvedBy, note: v.note },
    });
}

/** Unapprove by DELETING the row, so the private default is restored exactly. */
export async function unapproveEbook(tenantId: string, ebookSlug: string): Promise<void> {
  await db
    .delete(ebookApprovals)
    .where(and(eq(ebookApprovals.tenantId, tenantId), eq(ebookApprovals.ebookSlug, ebookSlug)));
}
