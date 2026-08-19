import { apiContext, errorJson, json } from "@/lib/api";
import { getActiveLearner } from "@/lib/active-learner";
import { getBundleBySlug } from "@/db/queries/bundles";
import { enrollFree } from "@/db/queries/enrollment";
import {
  createBundleCheckout,
  ensureBundlePrice,
  ensureBundleProduct,
  getStripe,
} from "@/lib/stripe";
import { bundlePriceView } from "@/lib/sale-pricing";
import { getSiteUrl } from "@/lib/site-url";

// POST /api/bundles/[slug]/buy — buy a bundle. A free bundle (price 0) enrolls the learner in every
// member course immediately; a paid one returns a Stripe Checkout URL and the webhook enrolls on
// payment. 404s across tenants (the bundle query is tenant-scoped). Enrollment is attributed to the
// ACTIVE learner (self or a managed child), same as the course flow.
export async function POST(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const learner = (await getActiveLearner(session))!;

  const found = await getBundleBySlug(sdb.tenantId, slug); // published only
  if (!found) return errorJson("Not found", 404);
  const { bundle, courses } = found;
  if (courses.length === 0) return errorJson("This bundle has no available courses", 409);

  // Codeless promotions, resolved server-side from this tenant's own rows (the client sends no
  // price and is never believed about one). Matches what /bundles/[slug] rendered.
  const priceView = bundlePriceView(bundle, sdb.tenantId, await sdb.listActivePromotions());

  // Free bundle, by list price or because a promotion took it to zero: enroll in every member
  // course directly (idempotent per course).
  if (Number(bundle.price) === 0 || bundle.priceType === "free" || priceView.isFree) {
    for (const c of courses) await enrollFree(sdb.tenantId, learner.id, c.id);
    return json({ enrolled: true, courses: courses.length }, 201);
  }

  // Paid bundle: Stripe Checkout, the webhook grants access on payment.
  const stripe = getStripe();
  if (!stripe) return errorJson("Payments are not configured", 503);
  const onSale = priceView.discounted;
  const saleAmountCents = onSale ? Math.round(priceView.effectivePrice * 100) : null;
  const productId = onSale ? await ensureBundleProduct(stripe, sdb.tenantId, bundle) : null;
  const priceId = onSale ? null : await ensureBundlePrice(stripe, sdb.tenantId, bundle);
  const url = await createBundleCheckout({
    stripe,
    tenant: sdb.tenant,
    bundle,
    userId: learner.id,
    priceId,
    saleAmountCents,
    productId,
    promotionId: priceView.promotion?.id ?? null,
    siteUrl: await getSiteUrl(),
  });
  return json({ url });
}
