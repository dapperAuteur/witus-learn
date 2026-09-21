import { beforeEach, describe, expect, it, vi } from "vitest";

// The 48-hour fallback email for a contact ping (src/lib/emails.ts). What it must do: land Reply-To
// on the ASKER so "reply" reaches them, keep the school's own From, and carry no token or grant.
const sendEmail = vi.hoisted(() => vi.fn<(input: Record<string, unknown>) => Promise<void>>(async () => {}));
vi.mock("@/lib/mailer", () => ({ sendEmail }));

const { sendContactPingEmail } = await import("@/lib/emails");

const tenant = {
  slug: "better-vice-club",
  name: "Better Vice Club",
  theme: { name: "Better Vice Club" },
  email: { from: "BVC <hello@bettervice.club>", replyTo: "office@bettervice.club" },
} as unknown as Parameters<typeof sendContactPingEmail>[0]["tenant"];

beforeEach(() => sendEmail.mockClear());

describe("sendContactPingEmail", () => {
  it("replies go to the asker, and the school stays the sender", async () => {
    await sendContactPingEmail({
      tenant,
      to: "teacher@example.com",
      fromName: "Dana Lee",
      fromEmail: "dana@example.com",
      fromRoleText: "a parent of Sam Lee",
      fromPhone: "555-0100",
      fromNote: "Weekdays after 3pm",
      studentName: "Sam Lee",
      cohortName: "Tuesday Science",
      askedOn: "Sunday, September 20",
      pageUrl: "https://bettervice.club/cohorts/abc",
    });
    const input = sendEmail.mock.calls[0]![0] as { replyTo: string; from: string; kind: string; text: string; subject: string };
    expect(input.replyTo).toBe("dana@example.com");
    expect(input.from).toBe("BVC <hello@bettervice.club>");
    expect(input.kind).toBe("contact-ping");
    expect(input.subject).toContain("Sam Lee");
    expect(input.text).toContain("555-0100");
    expect(input.text).toContain("does not carry messages");
    // The only link is the recipient's own sign-in-required page; nothing that grants access.
    expect(input.text).not.toMatch(/token|\/join\/|\/family\/accept\/|magic-link/i);
  });

  it("leaves out the optional lines when the asker has not set them", async () => {
    await sendContactPingEmail({
      tenant,
      to: "parent@example.com",
      fromName: "Ms Rivera",
      fromEmail: "rivera@example.com",
      fromRoleText: "a teacher of Sam Lee",
      fromPhone: null,
      fromNote: null,
      studentName: "Sam Lee",
      cohortName: "Tuesday Science",
      askedOn: "Sunday, September 20",
      pageUrl: "https://bettervice.club/family",
    });
    const text = (sendEmail.mock.calls[0]![0] as { text: string }).text;
    expect(text).not.toContain("Phone:");
    expect(text).not.toContain("Best time:");
  });
});
