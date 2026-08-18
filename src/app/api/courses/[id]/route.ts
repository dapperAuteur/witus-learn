import { after } from "next/server";
import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json, loadEditableCourse } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { reindexCourseEmbeddings } from "@/lib/ai/reindex";
import { countActiveEnrollments } from "@/db/queries/enrollment";
import { hasStripe } from "@/lib/env";
import { assessPriceChange, type PriceType } from "@/lib/price-change";
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
  // Owner-only. A BOOLEAN, never a timestamp: the server stamps vetted_at itself, so a client
  // can't backdate a review (the date is a trust signal shown to educators). Stripped below for
  // anyone but the platform owner. false = back to "Coming soon".
  vetted: z.boolean().optional(),
  // Owner-only, like `vetted`: "live but unvetted" (plans/52). Opens the course's content to the
  // public before review finishes, behind an on-page disclosure. Stripped for non-owners below.
  allowUnvettedPublic: z.boolean().optional(),
  // Admin-only (stripped / validated below for non-admins)
  isFeatured: z.boolean().optional(),
  featuredOrder: z.number().int().nullable().optional(),
  // Reassign the course to a different instructor (admin-only; validated in the handler).
  instructorId: z.string().min(1).optional(),
  // Deliberate acknowledgement of a MATERIAL price change (see the confirm gate below). Never a
  // column: it is deleted from the patch before the UPDATE, the same way `vetted` is.
  confirm: z.boolean().optional(),
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
  const confirmed = parsed.data.confirm === true;
  delete patch.confirm; // never reaches the UPDATE: `confirm` is not a column

  // The SECOND way a price changes (the pricing manager is the other). Same guard, same helper:
  // classify the change while the values are still numbers, and refuse a material one that wasn't
  // confirmed. Only the price fields are inspected, so every other setting still saves silently.
  if ("price" in patch || "priceType" in patch || "billingInterval" in patch) {
    const currentState = {
      price: Number(course.price),
      priceType: course.priceType as PriceType,
      billingInterval: course.billingInterval as "month" | "year" | null,
    };
    const nextType = (parsed.data.priceType ?? currentState.priceType) as PriceType;
    const nextState = {
      price: nextType === "free" ? 0 : (parsed.data.price ?? currentState.price),
      priceType: nextType,
      billingInterval:
        nextType === "subscription"
          ? ((parsed.data.billingInterval ?? currentState.billingInterval) ?? "month")
          : null,
    };
    // The settings form PATCHes every field on every save, so this branch runs on edits that touch
    // no price at all. Classify first (pure, free), and only pay for the enrollment count when the
    // change is material enough to be worth counting.
    const material = assessPriceChange(currentState, nextState, { stripeConfigured: hasStripe }).material;
    const assessment = material
      ? assessPriceChange(currentState, nextState, {
          enrollmentCount: await countActiveEnrollments(course.id),
          stripeConfigured: hasStripe,
        })
      : null;
    if (assessment && !confirmed) {
      return json(
        {
          error: `This changes the price from ${assessment.fromLabel} to ${assessment.toLabel}. Review the consequences, then confirm.`,
          needsConfirmation: true,
          changes: [{ courseId: course.id, title: course.title, slug: course.slug, ...assessment }],
        },
        409,
      );
    }
  }

  // numeric column wants a string; a free course is always $0.
  if (patch.priceType === "free") patch.price = "0";
  else if (typeof patch.price === "number") patch.price = String(patch.price);
  // billingInterval only applies to subscriptions; clear it otherwise.
  if (patch.priceType && patch.priceType !== "subscription") patch.billingInterval = null;

  // If pricing changed, drop the cached Stripe price id so ensureCoursePrice re-creates it at
  // the new amount/interval — otherwise checkout keeps charging the OLD (cached) price after an edit.
  if ("price" in patch || "priceType" in patch || "billingInterval" in patch) patch.stripePriceId = null;

  // Vetting is the PLATFORM OWNER's review, not a per-brand setting: an instructor or brand_admin
  // must not be able to mark their own course reviewed. Silently dropped for everyone else, the
  // same way isFeatured is. Translate the boolean into the column here, never trusting a client
  // timestamp, and keep an existing vetted_at as-is so re-vetting an already-vetted course
  // doesn't move the recorded review date (bulk "Mark vetted" over a mixed selection is common).
  if ("vetted" in patch) {
    const wantVetted = patch.vetted === true;
    delete patch.vetted; // never reaches the UPDATE: `vetted` is not a column
    if (await isPlatformOwner(session.user.id)) {
      patch.vettedAt = wantVetted ? (course.vettedAt ?? new Date()) : null;
    }
  }
  // Same authority as vetting itself: opening an UNREVIEWED course to the public is the platform
  // owner's risk to take, never an instructor's or brand_admin's. This one IS a column, so for
  // anyone else it is stripped rather than translated.
  if ("allowUnvettedPublic" in patch && !(await isPlatformOwner(session.user.id))) {
    delete patch.allowUnvettedPublic;
  }

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
