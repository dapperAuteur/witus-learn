import "server-only";
import { z } from "zod";
import type { LeadInquiry } from "@/db/schema";
import type { TenantRecord } from "@/lib/tenant";
import { addLeadInquiry } from "@/db/queries/leads";
import { pricingInquiryRecipient, sendPricingInquiryEmail } from "@/lib/emails";
import { sendToInbox } from "@/lib/ecosystem-webhook";

// "Contact us for pricing" — the /explore enquiry form.
//
// The ordering here is the whole point. PERSIST FIRST, notify second. Mailgun has been flaky in
// this repo, and a pricing enquiry that vanishes because an email bounced is a lost sale. So the
// lead row is written before anything is sent, the send is wrapped, and a failed send degrades to
// "we have it, we just could not shout about it" — never to a 500 and never to a dropped lead.
//
// The tenant is passed in by the route, which resolved it from the request HOST. Nothing in the
// payload names a tenant, so a client cannot file an enquiry against another brand.

export const PRICING_SOURCE = "explore-pricing";

export const ROLES = ["parent", "teacher", "homeschooler", "school_district", "other"] as const;

export const pricingInquirySchema = z.object({
  name: z.string().trim().min(1, "Tell us your name").max(200),
  email: z.string().trim().toLowerCase().email("Enter a valid email address").max(320),
  role: z.enum(ROLES, { message: "Choose the option that fits best" }),
  // Coerced because an <input type="number"> posts a string. Capped at something a real school
  // could plausibly say, so the field cannot be used to stuff junk into the notification email.
  students: z.coerce
    .number({ message: "Enter a number" })
    .int("Enter a whole number")
    .min(1, "Enter at least 1")
    .max(100_000, "Get in touch directly for anything this large")
    .optional(),
  message: z.string().trim().max(2000, "Keep it under 2000 characters").optional(),
  // Honeypot: a real person never sees this field, so anything in it is a bot. Named to look
  // tempting to a naive form-filler.
  company: z.string().max(0).optional(),
});

export type PricingInquiryInput = z.infer<typeof pricingInquirySchema>;

export interface PricingInquiryResult {
  /** The lead was written. If this is false we never got here — the route threw. */
  recorded: true;
  /** Whether the brand's inbox was actually emailed. False = configuration gap or Mailgun failure. */
  notified: boolean;
}

/**
 * Record the enquiry, then try to tell the brand about it.
 *
 * Returns once the lead is durably stored. `notified: false` means the row is safe but the email
 * did not go out — the caller still reports success to the visitor, because from their side the
 * message HAS been received, and it is visible at /admin/leads either way.
 */
export async function submitPricingInquiry(
  tenant: TenantRecord,
  input: PricingInquiryInput,
  opts: { adminUrl: string },
): Promise<PricingInquiryResult> {
  const inquiry: LeadInquiry = {
    source: PRICING_SOURCE,
    role: input.role,
    students: input.students ?? null,
    message: input.message?.trim() || null,
    // Server clock, never the client's.
    at: new Date().toISOString(),
  };

  // 1. Durability first. If THIS throws, the route 500s and the visitor is told to try again —
  //    which is honest, because nothing was kept.
  await addLeadInquiry({
    tenantId: tenant.id,
    email: input.email,
    name: input.name,
    source: PRICING_SOURCE,
    inquiry,
  });

  // 2. Best-effort notification. Everything below this line is allowed to fail.
  let notified = false;
  const to = pricingInquiryRecipient(tenant);
  if (!to) {
    console.warn(
      `[pricing-inquiry] No recipient configured for tenant ${tenant.slug} (set tenants.email.replyTo or PLATFORM_OWNER_EMAIL). Lead saved; no email sent.`,
    );
  } else {
    try {
      await sendPricingInquiryEmail({
        tenant,
        to,
        fromName: input.name,
        fromEmail: input.email,
        inquiry,
        adminUrl: opts.adminUrl,
      });
      notified = true;
    } catch (err) {
      // Mailgun rejected it (sandbox domain, unverified sender, outage...). The lead is ALREADY
      // saved, so this is a notification problem, not a data-loss problem. Loudly logged so the
      // operator can fix the config; never surfaced to the visitor as a failure.
      console.error(
        `[pricing-inquiry] Lead SAVED but the notification email FAILED for tenant ${tenant.slug}. Check /admin/leads, the enquiry is there. Cause:`,
        err,
      );
    }
  }

  // 3. Mirror into the central WitUS Inbox triage, exactly as /api/leads does. No-op when the
  //    inbox isn't configured, and it swallows its own errors.
  await sendToInbox({
    form_type: "learn-witus-pricing-inquiry",
    submitter_email: input.email,
    submitter_name: input.name,
    priority: "high",
    payload: {
      email: input.email,
      name: input.name,
      role: input.role,
      students: input.students ?? null,
      message: inquiry.message,
      source: PRICING_SOURCE,
      school: tenant.slug,
    },
  });

  return { recorded: true, notified };
}
