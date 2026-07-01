import { NextResponse } from "next/server";
import { z } from "zod";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { deleteCategory, renameCategory, setCategoryEcosystem } from "@/db/queries/categories-admin";
import { ecosystemProductBySlug } from "@/lib/ecosystem";

type Params = { params: Promise<{ id: string }> };
// Either rename (name) and/or set the cross-promo ecosystem slug (ecosystemProductSlug: string|null).
const Body = z.object({
  name: z.string().min(1).max(120).optional(),
  ecosystemProductSlug: z.string().max(60).nullable().optional(),
});

// PATCH = rename (moves courses onto the new label) and/or set the category's ecosystem cross-promo.
export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input." }, { status: 400 });

  let touched = false;
  let ok = true;
  if (typeof parsed.data.name === "string") {
    ok = await renameCategory(sdb.tenantId, id, parsed.data.name.trim());
    touched = true;
  }
  if ("ecosystemProductSlug" in parsed.data && ok) {
    const slug = parsed.data.ecosystemProductSlug ?? null;
    // Reject unknown slugs so a typo can't persist a dead cross-promo.
    if (slug && !ecosystemProductBySlug(slug)) {
      return NextResponse.json({ error: "Unknown ecosystem product." }, { status: 400 });
    }
    ok = await setCategoryEcosystem(sdb.tenantId, id, slug);
    touched = true;
  }
  if (!touched) return NextResponse.json({ error: "Nothing to update." }, { status: 400 });
  return ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Not found." }, { status: 404 });
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const ok = await deleteCategory(sdb.tenantId, id);
  return ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Not found." }, { status: 404 });
}
