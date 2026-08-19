import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { toSaleView } from "@/lib/sale-pricing";

// Codeless promotions ("Sales and promotions" on /admin/marketing). The sibling of
// /api/admin/promo-codes: a code is typed by one buyer, a sale applies to everyone with no code.
// Tenant is resolved server-side from the host and every read/write goes through ScopedDb, so a
// brand admin can only ever list, create, or end their OWN brand's sales.
async function guard() {
  const { sdb, session } = await apiContext();
  if (!session) return { res: errorJson("Unauthorized", 401) };
  if (!(await isTenantAdmin(session, sdb.tenantId))) return { res: errorJson("Forbidden", 403) };
  return { sdb, session };
}

export async function GET() {
  const ctx = await guard();
  if ("res" in ctx) return ctx.res;
  const rows = await ctx.sdb.listPromotions();
  const now = new Date();
  return json({ sales: rows.map((r) => toSaleView(r, now)) });
}

const PostSchema = z
  .object({
    name: z.string().trim().min(2).max(80),
    scope: z.enum(["course", "bundle", "tenant", "courses"]),
    /** Required for a course/bundle sale, forbidden for a brand-wide or campaign one. */
    targetId: z.string().uuid().nullable().optional(),
    /** Initial members of a `courses` campaign. May be empty: a campaign is meant to be filled
     *  over time as courses are vetted, so starting with none is a normal state, not an error. */
    courseIds: z.array(z.string().uuid()).max(200).optional(),
    kind: z.enum(["percent", "amount", "free"]),
    value: z.number().nullable().optional(),
    /** Null / omitted → starts immediately. */
    startsAt: z.string().datetime().nullable().optional(),
    /** Null / omitted → runs indefinitely until it is ended by hand. */
    endsAt: z.string().datetime().nullable().optional(),
  })
  // The same rules the DB CHECK constraints enforce, restated here so the admin gets a readable
  // message instead of a 500 from Postgres.
  .refine(
    (d) => (d.scope === "tenant" || d.scope === "courses" ? !d.targetId : Boolean(d.targetId)),
    { message: "Pick a course or bundle for a targeted sale." },
  )
  .refine((d) => (d.kind === "free" ? d.value == null : typeof d.value === "number"), {
    message: "A percent or amount sale needs a value.",
  })
  .refine((d) => d.kind !== "percent" || (d.value! >= 1 && d.value! <= 100), {
    message: "A percentage must be between 1 and 100.",
  })
  .refine((d) => d.kind !== "amount" || d.value! > 0, {
    message: "An amount off must be greater than zero.",
  })
  .refine((d) => !d.startsAt || !d.endsAt || new Date(d.endsAt) > new Date(d.startsAt), {
    message: "The end date must be after the start date.",
  });

export async function POST(req: Request) {
  const ctx = await guard();
  if ("res" in ctx) return ctx.res;

  const parsed = PostSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return errorJson(parsed.error.issues[0]?.message ?? "Invalid input", 400);
  }
  const d = parsed.data;

  // The foreign key cannot check the TENANT, so the target is verified here. A course or bundle id
  // from another brand is "not found", never "forbidden": the answer must not confirm it exists.
  if (d.scope === "course" && !(await ctx.sdb.ownsCourse(d.targetId!))) {
    return errorJson("Not found", 404);
  }
  if (d.scope === "bundle" && !(await ctx.sdb.ownsBundle(d.targetId!))) {
    return errorJson("Not found", 404);
  }
  // Same check for every initial member of a campaign. A join table is exactly where a foreign
  // course id would otherwise be insertable, and it would then be priced by this brand's sale.
  if (d.scope === "courses" && d.courseIds?.length) {
    for (const id of d.courseIds) {
      if (!(await ctx.sdb.ownsCourse(id))) return errorJson("Not found", 404);
    }
  }

  const row = await ctx.sdb.createPromotion({
    name: d.name,
    scope: d.scope,
    courseId: d.scope === "course" ? d.targetId! : null,
    bundleId: d.scope === "bundle" ? d.targetId! : null,
    courseIds: d.scope === "courses" ? (d.courseIds ?? []) : null,
    kind: d.kind,
    value: d.kind === "free" ? null : d.value!,
    startsAt: d.startsAt ? new Date(d.startsAt) : null,
    endsAt: d.endsAt ? new Date(d.endsAt) : null,
    createdBy: ctx.session.user.id,
  });
  return json({ sale: toSaleView(row) }, 201);
}
