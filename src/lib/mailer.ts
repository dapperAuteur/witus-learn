import { Resend } from "resend";
import { env, hasResend } from "./env";

interface SendEmailInput {
  to: string;
  subject: string;
  text: string;
  html?: string;
  /** Per-tenant sender (tenants.email.from). Falls back to the platform default. */
  from?: string;
  replyTo?: string;
}

let cachedResend: Resend | undefined;

// Sends via Resend when configured. Before Resend is set up (operator task),
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
  if (!hasResend) {
    console.log(
      `\n[mailer:dev] (Resend not configured — logging instead)\n  From: ${from ?? env.RESEND_FROM_EMAIL}\n  To: ${to}\n  Subject: ${subject}\n  ${text}\n`,
    );
    return;
  }

  cachedResend ??= new Resend(env.RESEND_API_KEY);
  await cachedResend.emails.send({
    from: from ?? env.RESEND_FROM_EMAIL,
    to,
    subject,
    text,
    ...(html ? { html } : {}),
    ...(replyTo ? { replyTo } : {}),
  });
}
