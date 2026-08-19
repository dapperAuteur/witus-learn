import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { z } from "zod";

// Membership of a `scope: 'courses'` campaign: add a course to a running sale, or take one out.
//
// WHY THIS ROUTE EXISTS. A campaign is announced before its courses are ready ("Back to school"),
// and courses join as they are vetted over the following weeks. Without it, the only way to run
// such a sale was one course-scoped promotion per course, which makes ending the sale an N-times
// job and leaves nothing in the admin list that IS the campaign.
//
// Both verbs are tenant-checked inside ScopedDb on BOTH the sale and the course, and both are
// idempotent, because the buttons that call them can be pressed twice.

const BodySchema = z.object({ courseId: z.string().uuid() });

async function guard() {
  const { sdb, session } = await apiContext();
  if (!session) return { res: errorJson("Unauthorized", 401) };
  if (!(await isTenantAdmin(session, sdb.tenantId))) return { res: errorJson("Forbidden", 403) };
  return { sdb };
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const ctx = await guard();
  if ("res" in ctx) return ctx.res;

  const parsed = BodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Pick a course to add.", 400);

  const { id } = await params;
  const ok = await ctx.sdb.addCourseToPromotion(id, parsed.data.courseId);
  // 404 rather than 403 for a sale or course this tenant does not own: the answer must not confirm
  // that another brand's row exists. The same 404 covers "this sale is not a campaign", because a
  // caller has no business knowing the scope of a sale it cannot see.
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const ctx = await guard();
  if ("res" in ctx) return ctx.res;

  const parsed = BodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Pick a course to remove.", 400);

  const { id } = await params;
  const ok = await ctx.sdb.removeCourseFromPromotion(id, parsed.data.courseId);
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true });
}
