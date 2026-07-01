import { NextResponse } from "next/server";
import { z } from "zod";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { deleteCategory, renameCategory } from "@/db/queries/categories-admin";

type Params = { params: Promise<{ id: string }> };
const Body = z.object({ name: z.string().min(1).max(120) });

// PATCH = rename (moves courses onto the new label). DELETE = remove (un-categorizes its courses).
export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid name." }, { status: 400 });
  const ok = await renameCategory(sdb.tenantId, id, parsed.data.name.trim());
  return ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Not found." }, { status: 404 });
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const ok = await deleteCategory(sdb.tenantId, id);
  return ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Not found." }, { status: 404 });
}
