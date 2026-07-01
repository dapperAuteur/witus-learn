import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json, loadEditableCourse } from "@/lib/api";
import { deleteCourse, updateCourse } from "@/db/queries/authoring";

type Params = { params: Promise<{ id: string }> };

// GET /api/courses/[id] — by-id read. 404s across tenants (a foreign UUID must
// not resolve), so direct-UUID probing can't leak another brand's course.
export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb } = await apiContext();
  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  return json({ course });
}

const PatchSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  description: z.string().max(5000).nullable().optional(),
  category: z.string().max(120).nullable().optional(),
  coverImageUrl: z.string().url().nullable().optional(),
  isPublished: z.boolean().optional(),
  visibility: z.enum(["public", "members", "scheduled", "private"]).optional(),
  // A non-empty hold blocks publishing and shows a UI banner; null clears it.
  publishHoldReason: z.string().max(500).nullable().optional(),
  navigationMode: z.enum(["linear", "cyoa"]).optional(),
  isSequential: z.boolean().optional(),
  allowCrossCourseCyoa: z.boolean().optional(),
  requiresAgeGate: z.boolean().optional(),
  seasonNumber: z.number().int().min(0).max(99).nullable().optional(),
  seriesSlug: z.string().max(120).nullable().optional(),
  seriesTitle: z.string().max(200).nullable().optional(),
  priceType: z.enum(["free", "one_time", "subscription"]).optional(),
  price: z.number().min(0).max(100000).optional(),
  // Admin-only (stripped below for non-admins)
  isFeatured: z.boolean().optional(),
  featuredOrder: z.number().int().nullable().optional(),
});

// PATCH /api/courses/[id] — instructor (owner) or brand-admin edits a course.
export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;
  const { sdb, session, course } = ctx;

  const body = await req.json().catch(() => null);
  const parsed = PatchSchema.safeParse(body);
  if (!parsed.success) return errorJson("Invalid input", 400);
  const patch: Record<string, unknown> = { ...parsed.data };

  // numeric column wants a string; a free course is always $0.
  if (patch.priceType === "free") patch.price = "0";
  else if (typeof patch.price === "number") patch.price = String(patch.price);

  // Featured flags are admin-only.
  if ("isFeatured" in patch || "featuredOrder" in patch) {
    if (!(await isTenantAdmin(session, sdb.tenantId))) {
      delete patch.isFeatured;
      delete patch.featuredOrder;
    }
  }
  // A HELD course can't be published until the hold clears. Use the incoming hold value if
  // this request sets it, otherwise the stored one — so you can clear the hold and publish
  // in one action, but never publish while a hold stands (guards copyrighted/unvetted content).
  const effectiveHold =
    "publishHoldReason" in patch ? patch.publishHoldReason : course.publishHoldReason;
  if (patch.isPublished === true && effectiveHold) {
    return errorJson(`This course is on hold and can't be published: ${effectiveHold}`, 409);
  }
  // Stamp publish time on first publish.
  if (patch.isPublished === true && !course.publishedAt) patch.publishedAt = new Date();

  const updated = await updateCourse(sdb.tenantId, id, patch);
  return json({ course: updated });
}

// DELETE /api/courses/[id]
export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;
  await deleteCourse(ctx.sdb.tenantId, id);
  return json({ ok: true });
}
