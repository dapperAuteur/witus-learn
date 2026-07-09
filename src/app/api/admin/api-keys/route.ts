import { NextResponse } from "next/server";
import { z } from "zod";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { createApiKey } from "@/db/queries/api-keys";

// POST /api/admin/api-keys — mint a new server-to-server read key for THIS tenant
// (brand-admin/owner, host-resolved tenant — same as every other /admin route). Returns
// the raw key exactly once; it is never retrievable again after this response.
const Body = z.object({ name: z.string().min(1).max(120) });

export async function POST(req: Request) {
  const sdb = await getScopedDb();
  const session = await requireBrandAdmin(sdb.tenantId);
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Give the key a name." }, { status: 400 });

  const { key, raw } = await createApiKey(sdb.tenantId, parsed.data.name.trim(), session.user.id);
  return NextResponse.json({ key, raw });
}
