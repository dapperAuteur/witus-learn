import formData from "form-data";
import Mailgun from "mailgun.js";
import { env, hasMailgun } from "./env";

interface SendEmailInput {
  to: string;
  subject: string;
  text: string;
  html?: string;
  /** Per-tenant sender (tenants.email.from). Falls back to the platform default. */
  from?: string;
  replyTo?: string;
}

// Sends via Mailgun when configured. Before Mailgun is set up (operator task),
// it logs to the server console so magic-link sign-in still works in local dev —
// copy the link from the terminal. The `from` is per-tenant so BVC mail never
// says Learn.WitUS / CentenarianOS.
export async function sendEmail({
  to,
  subject,
  text,
  html,
  from,
  replyTo,
}: SendEmailInput): Promise<void> {
  const sender = from ?? env.MAIL_FROM;

  if (!hasMailgun) {
    console.log(
      `\n[mailer:dev] (Mailgun not configured — logging instead)\n  From: ${sender}\n  To: ${to}\n  Subject: ${subject}\n  ${text}\n`,
    );
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
    console.log(`\n[mailer:fallback] Email NOT delivered — content (copy any link here to continue):\n  Subject: ${subject}\n  To: ${to}\n  ${text}\n`);
    throw new Error(`Email send failed: ${detail}`);
  }
}
