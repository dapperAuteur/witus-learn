import { NextResponse } from "next/server";
import { z } from "zod";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { setProblemReportStatusBulk } from "@/db/queries/problem-reports";

// POST /api/admin/reports/bulk — brand-admin/owner sets the status of many problem reports at once
// (the "bulk resolve" action on /admin/reports). Tenant-scoped: ids from another tenant don't match
// and are silently skipped, so this can never write across brands.

const Body = z.object({
  ids: z.array(z.string().uuid()).min(1).max(500),
  status: z.enum(["new", "triaged", "closed"]),
});

export async function POST(req: Request) {
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  const updated = await setProblemReportStatusBulk(sdb.tenantId, parsed.data.ids, parsed.data.status);
  return NextResponse.json({ updated });
}
