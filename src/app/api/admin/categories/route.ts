import { NextResponse } from "next/server";
import { z } from "zod";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { addCategory } from "@/db/queries/categories-admin";

// POST /api/admin/categories — add a course category (brand-admin/owner, tenant-scoped).
const Body = z.object({ name: z.string().min(1).max(120), sortOrder: z.number().int().min(0).max(999).optional() });

export async function POST(req: Request) {
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid category." }, { status: 400 });
  const cat = await addCategory(sdb.tenantId, parsed.data.name.trim(), parsed.data.sortOrder ?? 0);
  if (!cat) return NextResponse.json({ error: "That category already exists." }, { status: 409 });
  return NextResponse.json({ category: cat });
}
