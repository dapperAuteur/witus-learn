import type { ErrorEvent } from "@sentry/nextjs";
import { redactSecrets } from "@/lib/email-redact";

// Sentry `beforeSend` scrubber. Multi-tenant safety: a crash report must never carry a learner's
// email, a magic-link / invite / family-accept token, a cookie, or an auth header off to a third
// party. We reuse the SAME redactSecrets pass that guards mirrored emails (token-bearing URLs and
// labelled secrets removed), then drop the request cookies/headers and any attached user identity.
// It never returns null: we still want the crash signal, just with the credentials stripped out.
export function scrubEvent(event: ErrorEvent): ErrorEvent {
  const scrub = (s: string | undefined): string | undefined => (s ? redactSecrets(s).text : s);

  if (event.message) event.message = scrub(event.message);
  for (const ex of event.exception?.values ?? []) {
    if (ex.value) ex.value = scrub(ex.value);
  }

  // Never ship the account identity or network origin.
  if (event.user) {
    delete event.user.email;
    delete event.user.ip_address;
    delete event.user.username;
  }

  // Request context: keep a scrubbed URL for triage, drop the credential-bearing parts.
  if (event.request) {
    if (typeof event.request.url === "string") event.request.url = scrub(event.request.url);
    if (typeof event.request.query_string === "string") {
      event.request.query_string = scrub(event.request.query_string);
    }
    delete event.request.cookies;
    const headers = event.request.headers as Record<string, string> | undefined;
    if (headers) {
      delete headers.cookie;
      delete headers.authorization;
      delete headers["set-cookie"];
    }
  }

  return event;
}
