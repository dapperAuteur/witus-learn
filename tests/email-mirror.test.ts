import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Every email we send is mirrored to the WitUS Inbox (src/lib/mailer.ts). Several of those emails
 * ARE credentials — the magic-link sign-in URL signs you in, /join/<token> puts you in a class,
 * /family/accept/<token> opens a CHILD's records. Mirroring them verbatim would copy working
 * credentials into a triage inbox.
 *
 * So this file has two jobs, and the first one is the point of the whole feature:
 *   1. prove a token-bearing URL NEVER reaches the Inbox payload — asserted against the raw JSON
 *      of what we'd POST, not against a helper's return value, so a future refactor that pipes the
 *      body somewhere new still gets caught;
 *   2. prove the mirror can never break an actual email send.
 */

// Mailgun is never configured in tests (no env), so sendEmail takes its "log instead" path —
// which still mirrors, flagged `delivered: false`. That is the honest record.
type Mirror = {
  form_type: string;
  submitter_email?: string;
  payload: Record<string, unknown>;
};
const sendToInbox = vi.hoisted(() => vi.fn<(submission: unknown) => Promise<void>>(async () => {}));
vi.mock("@/lib/ecosystem-webhook", () => ({ sendToInbox }));

const { sendEmail } = await import("@/lib/mailer");
const { isSensitiveUrl, redactSecrets } = await import("@/lib/email-redact");

const MAGIC_LINK = "https://bettervice.club/api/auth/magic-link/verify?token=SEKRIT_TOKEN_abc123&callbackURL=%2F";
const JOIN_LINK = "https://bettervice.club/join/inv_9RtQ2xLmPz4KdW7f";
const GUARDIAN_LINK = "https://bettervice.club/family/accept/gu_8sJk2LmQp0ZxNv3T";
const VERIFY_LINK = "https://bettervice.club/verify/cert_7HkL9m2QpXzR4TvB";

/** The exact payload the last sendEmail would have POSTed, as a raw JSON string. Searching the
 *  STRING (not a field) is deliberate: it catches a secret that leaked into any key, at any depth,
 *  including one a future change adds. */
function lastMirror(): Mirror {
  expect(sendToInbox).toHaveBeenCalled();
  const call = sendToInbox.mock.calls.at(-1);
  expect(call).toBeDefined();
  return call![0] as Mirror;
}
function lastMirrorJson(): string {
  return JSON.stringify(lastMirror());
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.spyOn(console, "log").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

describe("the mirror never leaks a bearer secret", () => {
  it("strips the magic-link sign-in URL — the full-account-takeover one", async () => {
    await sendEmail({
      to: "learner@example.com",
      subject: "Your Better Vice Club sign-in link",
      text: `Sign in to Better Vice Club:\n${MAGIC_LINK}\n\nThis link expires in 10 minutes.`,
      kind: "magic-link",
      tenant: "bvc",
    });

    const json = lastMirrorJson();
    expect(json).not.toContain("SEKRIT_TOKEN_abc123");
    expect(json).not.toContain(MAGIC_LINK);
    expect(json).not.toContain("token=");

    const mirror = lastMirror();
    expect(mirror.form_type).toBe("learn-witus-email:magic-link");
    expect(mirror.payload.body_redacted).toContain("[redacted link]");
    // The prose survives — the record still LOOKS like the email that went out.
    expect(mirror.payload.body_redacted).toContain("This link expires in 10 minutes.");
    expect(mirror.payload.redacted).toBe(true);
    // We record WHERE the link pointed (the route), never the token itself.
    expect(mirror.payload.links_removed).toEqual([
      "https://bettervice.club/api/auth/magic-link/verify?<redacted>",
    ]);
  });

  it("strips /join/<token> (class membership) and /family/accept/<token> (a child's data)", async () => {
    await sendEmail({
      to: "parent@example.com",
      subject: "You're invited",
      text: `Join here:\n${JOIN_LINK}\n`,
      kind: "cohort-invite",
    });
    expect(lastMirrorJson()).not.toContain("inv_9RtQ2xLmPz4KdW7f");

    await sendEmail({
      to: "parent@example.com",
      subject: "See Ada's progress",
      text: `Link your account:\n${GUARDIAN_LINK}\n`,
      kind: "guardian-invite",
    });
    expect(lastMirrorJson()).not.toContain("gu_8sJk2LmQp0ZxNv3T");
    expect(lastMirror().form_type).toBe("learn-witus-email:guardian-invite");
  });

  it("does NOT over-redact /verify/<token> — a certificate check is meant to be shareable", async () => {
    await sendEmail({
      to: "learner@example.com",
      subject: "Your certificate",
      text: `Verify your certificate:\n${VERIFY_LINK}\n`,
      kind: "certificate",
    });
    const mirror = lastMirror();
    expect(mirror.payload.body_redacted).toContain(VERIFY_LINK);
    expect(mirror.payload.redacted).toBe(false);
  });

  it("never mirrors the HTML part, only a flag saying there was one", async () => {
    await sendEmail({
      to: "learner@example.com",
      subject: "Your sign-in link",
      text: `Sign in:\n${MAGIC_LINK}\n`,
      html: `<a href="${MAGIC_LINK}">Sign in</a>`,
      kind: "magic-link",
    });
    const json = lastMirrorJson();
    expect(json).not.toContain("SEKRIT_TOKEN_abc123");
    expect(json).not.toContain("<a href");
    expect(lastMirror().payload.has_html).toBe(true);
  });

  it("mirrors the metadata BAM actually needs: who, what, which tenant, when, delivered", async () => {
    await sendEmail({
      to: "learner@example.com",
      subject: "Your Better Vice Club sign-in link",
      text: "Sign in.",
      from: "BVC <no-reply@bvc.test>",
      replyTo: "hello@bvc.test",
      kind: "magic-link",
      tenant: "bvc",
    });
    const { payload, submitter_email } = lastMirror();
    expect(submitter_email).toBe("learner@example.com");
    expect(payload).toMatchObject({
      kind: "magic-link",
      to: "learner@example.com",
      subject: "Your Better Vice Club sign-in link",
      from: "BVC <no-reply@bvc.test>",
      reply_to: "hello@bvc.test",
      school: "bvc",
      // Mailgun is unconfigured in tests, so the honest answer is "not delivered", with the reason.
      delivered: false,
      failure: "mailgun-not-configured",
    });
    expect(typeof payload.sent_at).toBe("string");
  });
});

describe("the mirror can never break the email send", () => {
  it("a throwing Inbox does not fail sendEmail", async () => {
    sendToInbox.mockRejectedValueOnce(new Error("inbox is down"));
    await expect(
      sendEmail({ to: "learner@example.com", subject: "hi", text: "hello", kind: "magic-link" }),
    ).resolves.toBeUndefined();
  });

  it("mirrors AFTER the delivery attempt, so it can never delay or replace it", async () => {
    const order: string[] = [];
    const log = vi.spyOn(console, "log").mockImplementation(() => {
      order.push("delivery-attempt");
    });
    sendToInbox.mockImplementationOnce(async () => {
      order.push("mirror");
    });
    await sendEmail({ to: "a@b.test", subject: "hi", text: "hello" });
    expect(order).toEqual(["delivery-attempt", "mirror"]);
    log.mockRestore();
  });
});

describe("redaction rules (unit)", () => {
  it("classifies token-bearing URLs as sensitive and public ones as not", () => {
    expect(isSensitiveUrl(MAGIC_LINK)).toBe(true);
    expect(isSensitiveUrl(JOIN_LINK)).toBe(true);
    expect(isSensitiveUrl(GUARDIAN_LINK)).toBe(true);
    expect(isSensitiveUrl(VERIFY_LINK)).toBe(false);
    expect(isSensitiveUrl("https://bettervice.club/admin/leads")).toBe(false);
    expect(isSensitiveUrl("https://bettervice.club/courses/cocoa")).toBe(false);
    // Unparseable → redact. "Unsure" always resolves to "don't mirror it".
    expect(isSensitiveUrl("not a url")).toBe(true);
    // A future /whatever/<token> route nobody remembered to allowlist is still caught.
    expect(isSensitiveUrl("https://bettervice.club/redeem/aB3xK9pQ2mZ7wL4t")).toBe(true);
    // ...and so is any secret-looking query param.
    expect(isSensitiveUrl("https://bettervice.club/x?access_token=abc")).toBe(true);
  });

  it("scrubs a labelled raw secret (PIN / password) without mangling prose", () => {
    expect(redactSecrets("Your PIN: 4821").text).toBe("Your PIN: [redacted]");
    expect(redactSecrets("password is hunter2").text).toBe("password: [redacted]");
    // "pin" as an ordinary word, with no separator, must survive untouched.
    expect(redactSecrets("Pin down the answer.").text).toBe("Pin down the answer.");
  });
});
