import { beforeEach, describe, expect, it, vi } from "vitest";

// The reminder email for a contact ping (src/lib/emails.ts; days 2, 4, 8 and 16, BAM 2026-10-06). What it must do: land Reply-To
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
  const base = {
    tenant,
    to: "teacher@example.com",
    fromName: "Dana Lee",
    fromEmail: "dana@example.com",
    fromRoleText: "a parent of Sam Lee",
    fromPhone: null,
    fromNote: null,
    studentName: "Sam Lee",
    cohortName: "Tuesday Science",
    askedOn: "Sunday, September 20",
    endsOn: "Tuesday, October 20",
    reminderTotal: 4,
    pageUrl: "https://bettervice.club/cohorts/abc",
  };

  it("says which reminder it is, how to stop them, and when the request ends", async () => {
    await sendContactPingEmail({ ...base, reminderNumber: 1 });
    const first = sendEmail.mock.calls[0]![0] as { subject: string; text: string };
    expect(first.subject).not.toMatch(/^Reminder/);
    expect(first.text).toContain("reminder 1 of 4");
    expect(first.text).toContain("close the request");
    expect(first.text).toContain("Tuesday, October 20");

    await sendContactPingEmail({ ...base, reminderNumber: 2 });
    expect((sendEmail.mock.calls[1]![0] as { subject: string }).subject).toMatch(/^Reminder: Dana Lee/);

    await sendContactPingEmail({ ...base, reminderNumber: 4 });
    expect((sendEmail.mock.calls[2]![0] as { text: string }).text).toContain("last reminder (4 of 4)");
  });

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
      endsOn: "Tuesday, October 20",
      reminderNumber: 1,
      reminderTotal: 4,
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
      endsOn: "Tuesday, October 20",
      reminderNumber: 1,
      reminderTotal: 4,
      pageUrl: "https://bettervice.club/family",
    });
    const text = (sendEmail.mock.calls[0]![0] as { text: string }).text;
    expect(text).not.toContain("Phone:");
    expect(text).not.toContain("Best time:");
  });
});
