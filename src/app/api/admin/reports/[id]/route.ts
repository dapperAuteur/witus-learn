import { NextResponse } from "next/server";
import { z } from "zod";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { setProblemReportStatus } from "@/db/queries/problem-reports";

// PATCH /api/admin/reports/[id] — brand-admin/owner triages a problem report (tenant-scoped).

const Body = z.object({ status: z.enum(["new", "triaged", "closed"]) });

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  const updated = await setProblemReportStatus(sdb.tenantId, id, parsed.data.status);
  if (!updated) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json({ report: updated });
}
