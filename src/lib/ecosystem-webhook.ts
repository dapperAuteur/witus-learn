import "server-only";
import { createHmac } from "node:crypto";

// Signed-webhook client for the WitUS ecosystem services (witus-inbox + witus-outbox). Both
// accept POST /api/ingest with headers X-Witus-Source / X-Witus-Timestamp / X-Witus-Signature,
// where the signature is HMAC-SHA256(secret, `${timestamp}.${rawBody}`) hex-encoded. See the
// canonical spec in witus-inbox/docs/webhook-contract.md.
//
// Rules (from the reference sender): sign the EXACT bytes you POST (don't re-serialize between
// hashing and sending); fire-and-forget AFTER the user response (use Next's after()); never log
// the body, secret, or signature. No-op when the target isn't configured, so this is safe to
// call unconditionally.

interface Target {
  url?: string;
  slug?: string;
  secret?: string;
}

const INBOX: Target = { url: process.env.INBOX_INGEST_URL, slug: process.env.INBOX_SOURCE_SLUG, secret: process.env.INBOX_INGEST_SECRET };
const OUTBOX: Target = { url: process.env.OUTBOX_INGEST_URL, slug: process.env.OUTBOX_SOURCE_SLUG, secret: process.env.OUTBOX_INGEST_SECRET };

/** True once the Outbox target is fully configured. Lets a UI refuse to "announce"
 *  (and avoid falsely marking courses announced) when the send would silently no-op. */
export const hasOutbox = Boolean(OUTBOX.url && OUTBOX.slug && OUTBOX.secret);

async function post(target: Target, body: unknown, label: string): Promise<void> {
  if (!target.url || !target.slug || !target.secret) return; // not configured → no-op
  const rawBody = JSON.stringify(body);
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signature = createHmac("sha256", target.secret).update(`${timestamp}.${rawBody}`).digest("hex");
  try {
    const res = await fetch(target.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Witus-Source": target.slug,
        "X-Witus-Timestamp": timestamp,
        "X-Witus-Signature": `sha256=${signature}`,
      },
      body: rawBody,
    });
    if (!res.ok) console.warn(`[${label}] rejected status=${res.status} source=${target.slug}`);
  } catch {
    console.warn(`[${label}] send failed source=${target.slug}`);
  }
}

export interface InboxSubmission {
  /** kebab identifier for which form fired, e.g. "learn-witus-lead". Stable across UI versions. */
  form_type: string;
  submitter_email?: string;
  submitter_name?: string;
  priority?: "normal" | "high";
  /** Raw form fields; keep keys snake_case for the triage UI. */
  payload: Record<string, unknown>;
}

/** Forward a form submission to the central WitUS Inbox triage. No-op if unconfigured. */
export function sendToInbox(submission: InboxSubmission): Promise<void> {
  return post(INBOX, submission, "inbox");
}

/**
 * Request a social publish via the WitUS Outbox (→ Ocoya). Body must match the outbox contract:
 * `{ external_ref, caption, media_urls: string[], scheduled_at, social_profile_ids?, draft? }`.
 * No-op if unconfigured. No publish is triggered automatically yet — this is the helper for a
 * future "announce a new course" flow.
 */
export function sendToOutbox(publishRequest: Record<string, unknown>): Promise<void> {
  return post(OUTBOX, publishRequest, "outbox");
}
