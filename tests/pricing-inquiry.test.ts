import { beforeEach, describe, expect, it, vi } from "vitest";
import type { TenantRecord } from "@/lib/tenant";

// The two side effects submitPricingInquiry has. Mocked so we can (a) assert the lead is written
// and (b) make the EMAIL fail while the lead still lands — the failure mode that silently costs
// BAM a sale, and the reason this file exists.
const addLeadInquiry = vi.hoisted(() => vi.fn());
const sendEmail = vi.hoisted(() => vi.fn());
const sendToInbox = vi.hoisted(() => vi.fn());

vi.mock("@/db/queries/leads", () => ({ addLeadInquiry }));
vi.mock("@/lib/mailer", () => ({ sendEmail }));
vi.mock("@/lib/ecosystem-webhook", () => ({ sendToInbox }));

const { pricingInquirySchema, submitPricingInquiry, PRICING_SOURCE } = await import(
  "@/lib/pricing-inquiry"
);

function tenant(overrides: Partial<TenantRecord> = {}): TenantRecord {
  return {
    id: "11111111-1111-1111-1111-111111111111",
    slug: "bvc",
    name: "Better Vice Club",
    email: { from: "BVC <no-reply@bvc.test>", replyTo: "hello@bvc.test" },
    theme: {},
    flags: {},
    stripe: {},
    ...overrides,
  } as unknown as TenantRecord;
}

const valid = {
  name: "Dana Parent",
  email: "Dana@Example.COM",
  role: "homeschooler",
  students: "3",
  message: "  Two kids, one co-op.  ",
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

describe("pricingInquirySchema", () => {
  it("accepts a valid submission, lower-cases the email and coerces students to a number", () => {
    const parsed = pricingInquirySchema.parse(valid);
    expect(parsed.email).toBe("dana@example.com");
    expect(parsed.students).toBe(3);
    expect(parsed.message).toBe("Two kids, one co-op.");
  });

  it("requires a name, a valid email and a known role", () => {
    expect(pricingInquirySchema.safeParse({ ...valid, name: "  " }).success).toBe(false);
    expect(pricingInquirySchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
    expect(pricingInquirySchema.safeParse({ ...valid, role: "principal" }).success).toBe(false);
  });

  it("treats students and message as optional", () => {
    const parsed = pricingInquirySchema.parse({
      name: "A",
      email: "a@b.co",
      role: "parent",
    });
    expect(parsed.students).toBeUndefined();
    expect(parsed.message).toBeUndefined();
  });

  it("rejects a student count that is not a positive whole number", () => {
    expect(pricingInquirySchema.safeParse({ ...valid, students: "0" }).success).toBe(false);
    expect(pricingInquirySchema.safeParse({ ...valid, students: "-4" }).success).toBe(false);
    expect(pricingInquirySchema.safeParse({ ...valid, students: "2.5" }).success).toBe(false);
    expect(pricingInquirySchema.safeParse({ ...valid, students: "abc" }).success).toBe(false);
  });

  it("rejects an over-long message rather than truncating it into the notification email", () => {
    expect(
      pricingInquirySchema.safeParse({ ...valid, message: "x".repeat(2001) }).success,
    ).toBe(false);
  });

  it("rejects a filled honeypot — a human never sees that field", () => {
    expect(pricingInquirySchema.safeParse({ ...valid, company: "Acme" }).success).toBe(false);
    expect(pricingInquirySchema.safeParse({ ...valid, company: "" }).success).toBe(true);
  });
});

describe("submitPricingInquiry", () => {
  const opts = { adminUrl: "https://learn.test/admin/leads" };

  it("persists the lead and reports that the brand was notified", async () => {
    const input = pricingInquirySchema.parse(valid);
    const result = await submitPricingInquiry(tenant(), input, opts);

    expect(result).toEqual({ recorded: true, notified: true });
    expect(addLeadInquiry).toHaveBeenCalledTimes(1);

    const lead = addLeadInquiry.mock.calls[0][0];
    expect(lead.tenantId).toBe("11111111-1111-1111-1111-111111111111");
    expect(lead.email).toBe("dana@example.com");
    expect(lead.source).toBe(PRICING_SOURCE);
    expect(lead.inquiry).toMatchObject({
      source: PRICING_SOURCE,
      role: "homeschooler",
      students: 3,
      message: "Two kids, one co-op.",
    });
    // The timestamp is the server's, never the client's.
    expect(Date.parse(lead.inquiry.at)).not.toBeNaN();

    expect(sendEmail).toHaveBeenCalledTimes(1);
    const mail = sendEmail.mock.calls[0][0];
    expect(mail.to).toBe("hello@bvc.test"); // the BRAND's inbox, not a hardcoded one
    expect(mail.replyTo).toBe("dana@example.com"); // hitting reply answers the customer
    expect(mail.text).toContain("Two kids, one co-op.");
  });

  // THE ONE THAT MATTERS. Mailgun has been flaky in this repo; a dropped lead is a lost sale.
  it("STILL SAVES THE LEAD when the notification email throws", async () => {
    sendEmail.mockRejectedValueOnce(new Error("Mailgun 401: sandbox domain"));

    const input = pricingInquirySchema.parse(valid);
    const result = await submitPricingInquiry(tenant(), input, opts);

    // Did not throw, did not 500, and the row is written.
    expect(result).toEqual({ recorded: true, notified: false });
    expect(addLeadInquiry).toHaveBeenCalledTimes(1);
    expect(addLeadInquiry.mock.calls[0][0].email).toBe("dana@example.com");
  });

  it("still saves the lead when NO recipient is configured at all", async () => {
    const noInbox = tenant({ email: {} } as Partial<TenantRecord>);
    const input = pricingInquirySchema.parse(valid);

    const result = await submitPricingInquiry(noInbox, input, opts);

    expect(result).toEqual({ recorded: true, notified: false });
    expect(addLeadInquiry).toHaveBeenCalledTimes(1);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("persists BEFORE it notifies, so a slow or failing send can never pre-empt the write", async () => {
    const order: string[] = [];
    addLeadInquiry.mockImplementationOnce(async () => {
      order.push("persist");
    });
    sendEmail.mockImplementationOnce(async () => {
      order.push("notify");
    });

    await submitPricingInquiry(tenant(), pricingInquirySchema.parse(valid), opts);
    expect(order).toEqual(["persist", "notify"]);
  });

  it("mirrors the enquiry to the WitUS Inbox tagged with the tenant it came from", async () => {
    await submitPricingInquiry(tenant(), pricingInquirySchema.parse(valid), opts);

    expect(sendToInbox).toHaveBeenCalledTimes(1);
    const submission = sendToInbox.mock.calls[0][0];
    expect(submission.form_type).toBe("learn-witus-pricing-inquiry");
    expect(submission.payload.school).toBe("bvc");
  });

  it("routes a second brand's enquiry to that brand's own inbox", async () => {
    const other = tenant({
      id: "22222222-2222-2222-2222-222222222222",
      slug: "other-school",
      email: { from: "Other <no-reply@other.test>", replyTo: "admissions@other.test" },
    } as Partial<TenantRecord>);

    await submitPricingInquiry(other, pricingInquirySchema.parse(valid), opts);

    expect(sendEmail.mock.calls[0][0].to).toBe("admissions@other.test");
    expect(addLeadInquiry.mock.calls[0][0].tenantId).toBe("22222222-2222-2222-2222-222222222222");
  });
});
