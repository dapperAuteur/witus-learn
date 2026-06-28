import { apiContext, errorJson, json } from "@/lib/api";
import { enrollFree, isEnrolled } from "@/db/queries/enrollment";
import { getUnmetRequired } from "@/db/queries/prerequisites";
import { isFreeCourse } from "@/lib/gating";
import { createCourseCheckout, ensureCoursePrice, getStripe } from "@/lib/stripe";
import { getSiteUrl } from "@/lib/site-url";

// POST /api/courses/[id]/enroll — free → insert directly; paid → return a Stripe
// Checkout URL. 404s across tenants before doing anything.
export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const course = await sdb.getCourseById(id);
  if (!course || !course.isPublished) return errorJson("Not found", 404);

  if (await isEnrolled(session.user.id, id)) {
    return json({ enrolled: true });
  }

  // Enforce required prerequisites before any enroll / payment.
  const unmet = await getUnmetRequired(session.user.id, id);
  if (unmet.length > 0) {
    return json(
      {
        error: "Complete the required prerequisites first.",
        unmet: unmet.map((c) => ({ id: c.id, title: c.title })),
      },
      403,
    );
  }

  if (isFreeCourse(course)) {
    const enrollment = await enrollFree(sdb.tenantId, session.user.id, id);
    return json({ enrolled: true, enrollment }, 201);
  }

  // Paid → Stripe Checkout (the webhook confirms enrollment on payment).
  const stripe = getStripe();
  if (!stripe) return errorJson("Payments are not configured", 503);
  const priceId = await ensureCoursePrice(stripe, sdb.tenantId, course);
  const url = await createCourseCheckout({
    stripe,
    tenant: sdb.tenant,
    course,
    userId: session.user.id,
    priceId,
    siteUrl: await getSiteUrl(),
  });
  return json({ url });
}
