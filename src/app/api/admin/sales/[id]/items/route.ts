import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";

// The named set of a sale: the endpoint behind "add courses as they get vetted", and behind taking
// one back out again.
//
//   POST   /api/admin/sales/[id]/items  { kind, id }   name it
//   DELETE /api/admin/sales/[id]/items  { kind, id }   un-name it
//
// What naming MEANS depends on the sale's scope, and both readings use this one endpoint:
//   · campaign (`courses`)  the item is a member, so naming it puts it on sale
//   · brand-wide (`tenant`) the item is an exception, so naming it takes it OFF the sale
//
// REMOVAL TOUCHES EXACTLY ONE ROW. Everything else in the sale keeps its pricing, and the sale's
// own window and discount are untouched, so pulling one course out of a running campaign cannot
// disturb what a learner is being shown for the others.
//
// Tenant-checked on the sale AND the item inside the query layer, because a join table is precisely
// where a crafted request could attach another brand's course to this brand's sale.

const BodySchema = z.object({
  kind: z.enum(["course", "bundle"]),
  id: z.string().uuid(),
});

async function guard() {
  const { sdb, session } = await apiContext();
  if (!session) return { error: errorJson("Unauthorized", 401) };
  if (!(await isTenantAdmin(session, sdb.tenantId))) return { error: errorJson("Forbidden", 403) };
  return { sdb };
}

async function body(req: Request) {
  const parsed = BodySchema.safeParse(await req.json().catch(() => null));
  return parsed.success ? parsed.data : null;
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const g = await guard();
  if ("error" in g) return g.error;
  const item = await body(req);
  if (!item) return errorJson("Pick a course or bundle.", 400);

  const ok = await g.sdb.addItemToPromotion(id, item);
  // False covers three cases that all deserve the same answer: the sale is not this tenant's, the
  // item is not this tenant's, or the sale has a single target and so has no set to add to.
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const g = await guard();
  if ("error" in g) return g.error;
  const item = await body(req);
  if (!item) return errorJson("Pick a course or bundle.", 400);

  const ok = await g.sdb.removeItemFromPromotion(id, item);
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true });
}
