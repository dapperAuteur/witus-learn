import { apiContext, errorJson, json } from "@/lib/api";
import { env } from "@/lib/env";
import { checkRateLimit, clientIp } from "@/lib/rate-limit";
import { pricingInquirySchema, submitPricingInquiry } from "@/lib/pricing-inquiry";

// POST /api/pricing-inquiry — the public "contact us for pricing" form on /explore.
//
// Public and unauthenticated, so it is treated as hostile input:
//   · the TENANT comes from apiContext() (resolved from the request HOST), never from the body —
//     a caller cannot file an enquiry against, or leak the existence of, another brand;
//   · Zod validates on the SERVER (the client form's checks are a courtesy, not a control);
//   · a honeypot field bins bots without a captcha dependency;
//   · a per-IP sliding window (the shared limiter from src/lib/rate-limit.ts) caps submissions.
//
// It answers 200 whenever the LEAD IS SAVED — including when the notification email fails. See
// submitPricingInquiry: durability first, notification second.

const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 5;

export async function POST(req: Request) {
  const { sdb } = await apiContext();

  // Per-IP, per-tenant. Best-effort (in-memory, per instance) — a speed bump against a script,
  // not a security boundary. Deliberately quiet about the limit itself.
  const { allowed } = checkRateLimit(`pricing:${sdb.tenantId}:${clientIp(req)}`, {
    windowMs: WINDOW_MS,
    max: MAX_PER_WINDOW,
  });
  if (!allowed) {
    return errorJson("You have sent several messages already — we have them. We'll be in touch.", 429);
  }

  const body = await req.json().catch(() => null);
  const parsed = pricingInquirySchema.safeParse(body);
  if (!parsed.success) {
    // Field-keyed messages so the form can tie each error to its input via aria-describedby.
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return json({ error: "Please check the form", fieldErrors }, 400);
  }

  // Honeypot tripped: a human never sees this field. Answer 200 so the bot believes it worked and
  // does not retry with a different shape — but record nothing.
  if (parsed.data.company) return json({ ok: true, notified: false });

  const result = await submitPricingInquiry(sdb.tenant, parsed.data, {
    adminUrl: `${env.NEXT_PUBLIC_APP_URL}/admin/leads`,
  });

  return json({ ok: true, notified: result.notified });
}
