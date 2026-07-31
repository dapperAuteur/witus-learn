import formData from "form-data";
import Mailgun from "mailgun.js";
import { env, hasMailgun } from "./env";
import { sendToInbox } from "./ecosystem-webhook";
import { redactSecrets } from "./email-redact";

/** Which email fired. Becomes the Inbox `form_type` (`learn-witus-email:<kind>`) so the triage UI
 *  can sort a sign-in link from a cohort invite from a certificate. Add a member here when you add
 *  an email — the mirror is automatic, only the label is manual. */
export type EmailKind =
  | "magic-link"
  | "certificate"
  | "cohort-invite"
  | "guardian-invite"
  | "course-audit-invite"
  | "pricing-inquiry"
  | "other";

interface SendEmailInput {
  to: string;
  subject: string;
  text: string;
  html?: string;
  /** Per-tenant sender (tenants.email.from). Falls back to the platform default. */
  from?: string;
  replyTo?: string;
  /** What this email IS. Only used to label the Inbox mirror; never affects delivery. */
  kind?: EmailKind;
  /** Tenant slug, for the Inbox record. Never used to route mail. */
  tenant?: string;
}

/**
 * Mirror the fact that an email went out to the central WitUS Inbox — metadata always, body only
 * with every bearer secret stripped (see src/lib/email-redact.ts).
 *
 * THE MIRROR MUST NEVER BREAK THE SEND. It is a record, not a delivery path. So:
 *  • it runs strictly AFTER the delivery attempt has already resolved;
 *  • sendToInbox no-ops when the Inbox isn't configured and swallows its own network errors;
 *  • and it is wrapped here anyway, so even a programming error in the mirror can't take an email
 *    (a learner's sign-in link!) down with it.
 *
 * `delivered` is honest about which of the three worlds we're in: Mailgun accepted it, Mailgun is
 * not configured (dev — the body was logged instead), or Mailgun rejected it.
 */
async function mirrorToInbox(
  input: SendEmailInput,
  sender: string | undefined,
  delivered: boolean,
  failure?: string,
): Promise<void> {
  try {
    const kind = input.kind ?? "other";
    // The BODY is the dangerous part: the magic-link URL, /join/<token>, /family/accept/<token>
    // are all bearer credentials. Only the redacted text is ever mirrored, and the HTML part is
    // never mirrored at all (nothing needs it, and it's a second place for a link to hide).
    const body = redactSecrets(input.text);
    await sendToInbox({
      form_type: `learn-witus-email:${kind}`,
      submitter_email: input.to,
      priority: "normal",
      payload: {
        kind,
        to: input.to,
        subject: input.subject,
        from: sender ?? null,
        reply_to: input.replyTo ?? null,
        school: input.tenant ?? null,
        delivered,
        failure: failure ?? null,
        sent_at: new Date().toISOString(),
        // Redacted body + an explicit flag, so nobody reading the Inbox mistakes a partial record
        // for the whole email. `links_removed` names the ROUTE a stripped link pointed at (never
        // its token), which is enough to answer "did the sign-in link actually go out?".
        body_redacted: body.text,
        redacted: body.redacted,
        links_removed: body.removed,
        has_html: Boolean(input.html),
      },
    });
  } catch {
    // Deliberately silent-ish and non-fatal: a triage mirror is never worth an undelivered email.
    console.warn(`[mailer] Inbox mirror failed (kind=${input.kind ?? "other"}); the email itself is unaffected.`);
  }
}

// Sends via Mailgun when configured. Before Mailgun is set up (operator task),
// it logs to the server console so magic-link sign-in still works in local dev —
// copy the link from the terminal. The `from` is per-tenant so BVC mail never
// says Learn.WitUS / CentenarianOS.
//
// EVERY email also gets mirrored to the WitUS Inbox from here — the chokepoint — rather than from
// each caller, so an email added tomorrow is covered without anyone remembering to wire it up.
// What crosses that boundary is metadata + a REDACTED body; see mirrorToInbox above.
export async function sendEmail({
  to,
  subject,
  text,
  html,
  from,
  replyTo,
  kind,
  tenant,
}: SendEmailInput): Promise<void> {
  const sender = from ?? env.MAIL_FROM;
  const input: SendEmailInput = { to, subject, text, html, from, replyTo, kind, tenant };

  if (!hasMailgun) {
    console.log(
      `\n[mailer:dev] (Mailgun not configured, logging instead)\n  From: ${sender}\n  To: ${to}\n  Subject: ${subject}\n  ${text}\n`,
    );
    await mirrorToInbox(input, sender, false, "mailgun-not-configured");
    return;
  }

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: env.MAILGUN_API_KEY as string,
    url: env.MAILGUN_REGION === "eu" ? "https://api.eu.mailgun.net" : "https://api.mailgun.net",
  });

  try {
    await mg.messages.create(env.MAILGUN_DOMAIN as string, {
      from: sender ?? `Learn.WitUS <no-reply@${env.MAILGUN_DOMAIN}>`,
      to: [to],
      subject,
      text,
      ...(html ? { html } : {}),
      ...(replyTo ? { "h:Reply-To": replyTo } : {}),
    });
  } catch (err) {
    // Surface WHY (so the operator can fix the Mailgun config — common causes: a
    // sandbox domain that only sends to authorized recipients, or a `from` domain
    // that is not the verified MAILGUN_DOMAIN), and log the content as a stopgap so a
    // magic link can still be copied from the server logs while the config is fixed.
    const detail = err instanceof Error ? err.message : String(err);
    console.error(
      `[mailer] Mailgun send FAILED (to=${to}, from=${sender ?? `no-reply@${env.MAILGUN_DOMAIN}`}, domain=${env.MAILGUN_DOMAIN}): ${detail}`,
    );
    console.log(`\n[mailer:fallback] Email NOT delivered, content (copy any link here to continue):\n  Subject: ${subject}\n  To: ${to}\n  ${text}\n`);
    // Record the FAILURE in the Inbox too — "we tried to email X and it bounced" is exactly the
    // kind of thing BAM should find in triage rather than only in a server log.
    await mirrorToInbox(input, sender, false, detail);
    throw new Error(`Email send failed: ${detail}`);
  }

  await mirrorToInbox(input, sender, true);
}
