import { after } from "next/server";
import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json, loadEditableCourse } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { reindexCourseEmbeddings } from "@/lib/ai/reindex";
import {
  deleteCourse,
  ensureUsernameById,
  instructorSlugTaken,
  isTenantInstructorMember,
  updateCourse,
} from "@/db/queries/authoring";

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
  billingInterval: z.enum(["month", "year"]).nullable().optional(),
  // Cross-promotion: 0–3 ecosystem product slugs curated for this course.
  relatedProducts: z.array(z.string().max(60)).max(3).nullable().optional(),
  // Admin-only (stripped / validated below for non-admins)
  isFeatured: z.boolean().optional(),
  featuredOrder: z.number().int().nullable().optional(),
  // Reassign the course to a different instructor (admin-only; validated in the handler).
  instructorId: z.string().min(1).optional(),
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
  // billingInterval only applies to subscriptions; clear it otherwise.
  if (patch.priceType && patch.priceType !== "subscription") patch.billingInterval = null;

  // If pricing changed, drop the cached Stripe price id so ensureCoursePrice re-creates it at
  // the new amount/interval — otherwise checkout keeps charging the OLD (cached) price after an edit.
  if ("price" in patch || "priceType" in patch || "billingInterval" in patch) patch.stripePriceId = null;

  // Featured flags are admin-only.
  if ("isFeatured" in patch || "featuredOrder" in patch) {
    if (!(await isTenantAdmin(session, sdb.tenantId))) {
      delete patch.isFeatured;
      delete patch.featuredOrder;
    }
  }
  // Reassigning the instructor is admin-only (platform owner or brand_admin) and validated.
  // This is the fix for courses bylined to a stale seed instructor: an admin can hand the
  // course to the real account. NOTE: after this, the OLD instructor loses edit access.
  if ("instructorId" in patch) {
    const newInstructorId = patch.instructorId as string;
    if (!(await isTenantAdmin(session, sdb.tenantId))) {
      delete patch.instructorId; // silently ignore for non-admins (mirrors isFeatured)
    } else if (newInstructorId === course.instructorId) {
      delete patch.instructorId; // no-op, skip the checks
    } else {
      // Target must be allowed to teach here (an instructor/brand_admin member, or the owner).
      const eligible =
        (await isTenantInstructorMember(sdb.tenantId, newInstructorId)) ||
        (await isPlatformOwner(newInstructorId));
      if (!eligible) return errorJson("That person isn't an instructor on this brand.", 400);
      // Pretty course URLs are /{username}/{slug} — the new instructor needs a username.
      const uname = await ensureUsernameById(newInstructorId);
      if (!uname) return errorJson("That instructor has no profile yet, can't build their course URL.", 400);
      // The (tenant, instructor, slug) unique index would collide if they already own this slug.
      if (course.slug && (await instructorSlugTaken(sdb.tenantId, newInstructorId, course.slug, course.id))) {
        return errorJson("That instructor already has a course at this URL, rename this course's slug first.", 409);
      }
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

  // Publishing (re)indexes the course's embeddings so chat-with-sources and CYOA routing reflect
  // the latest lessons without a manual "Generate embeddings" click. Non-blocking (runs after the
  // response) and a no-op when Gemini isn't configured. Lesson edits AFTER publish don't hit this
  // route, so the course page surfaces a staleness badge prompting a manual re-index (CourseAdminTools).
  if (patch.isPublished === true) {
    after(async () => {
      try {
        await reindexCourseEmbeddings(id);
      } catch {
        // Best-effort: a failed auto-index leaves the old index in place; the manual button remains.
      }
    });
  }

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
