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
  visibility: z.enum(["public", "members", "scheduled"]).optional(),
  navigationMode: z.enum(["linear", "cyoa"]).optional(),
  isSequential: z.boolean().optional(),
  allowCrossCourseCyoa: z.boolean().optional(),
  requiresAgeGate: z.boolean().optional(),
  seasonNumber: z.number().int().min(0).max(99).nullable().optional(),
  seriesSlug: z.string().max(120).nullable().optional(),
  seriesTitle: z.string().max(200).nullable().optional(),
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

  // Featured flags are admin-only.
  if ("isFeatured" in patch || "featuredOrder" in patch) {
    if (!(await isTenantAdmin(session, sdb.tenantId))) {
      delete patch.isFeatured;
      delete patch.featuredOrder;
    }
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
