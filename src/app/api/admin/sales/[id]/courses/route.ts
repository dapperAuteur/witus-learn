import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";

// Membership of a `courses` campaign: the endpoint the "add courses as they are vetted" workflow
// runs on.
//
//   POST   /api/admin/sales/[id]/courses  { courseId }  add
//   DELETE /api/admin/sales/[id]/courses  { courseId }  remove
//
// Both are tenant-checked on the sale AND the course inside the query layer, because a join table
// is precisely where a crafted request could otherwise attach another brand's course to this
// brand's sale and price it from here.
//
// Adding is idempotent: the button can be pressed twice, and the second press is a no-op rather
// than a 500 from a duplicate key.

const BodySchema = z.object({ courseId: z.string().uuid() });

async function guard(id: string) {
  const { sdb, session } = await apiContext();
  if (!session) return { error: errorJson("Unauthorized", 401) };
  if (!(await isTenantAdmin(session, sdb.tenantId))) return { error: errorJson("Forbidden", 403) };
  return { sdb, id };
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const g = await guard(id);
  if ("error" in g) return g.error;

  const parsed = BodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Pick a course to add.", 400);

  const ok = await g.sdb!.addCourseToPromotion(id, parsed.data.courseId);
  // False covers three cases that all deserve the same answer: the sale is not this tenant's, the
  // course is not this tenant's, or the sale is not a campaign and has no membership to add to.
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const g = await guard(id);
  if ("error" in g) return g.error;

  const parsed = BodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Pick a course to remove.", 400);

  const ok = await g.sdb!.removeCourseFromPromotion(id, parsed.data.courseId);
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true });
}
