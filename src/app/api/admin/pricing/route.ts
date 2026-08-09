import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { updateCourse } from "@/db/queries/authoring";
import { listCourses } from "@/db/queries/catalog";
import { countActiveEnrollmentsByCourse } from "@/db/queries/enrollment";
import { hasStripe } from "@/lib/env";
import { assessPriceChange, type PriceType } from "@/lib/price-change";

// One price change from the /admin/pricing manager. `subscriptionInterval` is the request-body name
// for what the DB stores as `billing_interval` (courses.billingInterval); it only applies to a
// subscription and is ignored otherwise.
const Update = z.object({
  courseId: z.string().uuid(),
  price: z.number().min(0).max(100_000),
  priceType: z.enum(["free", "one_time", "subscription"]),
  subscriptionInterval: z.enum(["month", "year"]).nullish(),
});

const Body = z.object({
  updates: z.array(Update).min(1).max(500),
  // Deliberate acknowledgement of the warnings below. A MATERIAL change without it is refused with a
  // 409 and the warning list, so the guard holds for a direct API call, not just for the UI button.
  confirm: z.boolean().optional(),
});

// POST /api/admin/pricing (owner-only). Change one OR many courses' price / type / interval from the
// pricing manager. Cross-tenant owner tooling, so it authorizes with isPlatformOwner (not a per-tenant
// admin check). Every course shown on the page is loaded tenant-scoped via listCourses(sdb.tenantId),
// so the writes go through updateCourse(sdb.tenantId, ...); a courseId from another tenant simply
// misses the WHERE and updates nothing.
//
// CRITICAL: whenever price/type/interval changes we clear stripePriceId. ensureCoursePrice caches the
// Stripe price id on the course; if we left the old id, checkout would keep charging the OLD amount.
// Clearing it forces a fresh Stripe price at the new amount on the next checkout. Free courses need no
// Stripe price at all.
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session || !(await isPlatformOwner(session.user.id))) return errorJson("Owner only.", 403);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Check the values and try again.", 400);

  // Validate the price against the type before touching the DB, so a partial batch never lands.
  for (const u of parsed.data.updates) {
    if (u.priceType === "free" && u.price !== 0) {
      return errorJson("A free course must have a price of 0.", 400);
    }
    if (u.priceType !== "free" && u.price <= 0) {
      return errorJson("A paid course needs a price above 0.", 400);
    }
  }

  // Confirmation gate. Read every course ONCE (listCourses is one tenant-scoped query) plus one
  // grouped enrollment count, classify each proposed change, and refuse a material batch that did
  // not say `confirm: true`. A no-op or an immaterial edit passes straight through, so the warning
  // only ever fires on a change that genuinely does something.
  const current = new Map(
    (await listCourses(sdb.tenantId, { includeUnpublished: true })).map((c) => [c.id, c] as const),
  );
  const enrollmentCounts = await countActiveEnrollmentsByCourse(sdb.tenantId);
  const material = parsed.data.updates.flatMap((u) => {
    const c = current.get(u.courseId);
    if (!c) return []; // another tenant's id, or deleted: the UPDATE below misses it anyway
    const assessment = assessPriceChange(
      {
        price: Number(c.price),
        priceType: c.priceType as PriceType,
        billingInterval: c.billingInterval as "month" | "year" | null,
      },
      {
        price: u.price,
        priceType: u.priceType,
        billingInterval: u.priceType === "subscription" ? (u.subscriptionInterval ?? "month") : null,
      },
      { enrollmentCount: enrollmentCounts.get(u.courseId) ?? 0, stripeConfigured: hasStripe },
    );
    return assessment.material
      ? [{ courseId: c.id, title: c.title, slug: c.slug, ...assessment }]
      : [];
  });

  if (material.length > 0 && parsed.data.confirm !== true) {
    return json(
      {
        error: `${material.length} price change${material.length === 1 ? "" : "s"} need${material.length === 1 ? "s" : ""} confirmation. Review the consequences, then send confirm: true.`,
        needsConfirmation: true,
        changes: material,
      },
      409,
    );
  }

  let updated = 0;
  for (const u of parsed.data.updates) {
    const row = await updateCourse(sdb.tenantId, u.courseId, {
      price: String(u.price),
      priceType: u.priceType,
      billingInterval: u.priceType === "subscription" ? u.subscriptionInterval ?? "month" : null,
      // Clear the cached Stripe price so the next checkout mints one at the new amount.
      stripePriceId: null,
    });
    if (row) updated += 1;
  }

  return json({ ok: true, updated });
}
