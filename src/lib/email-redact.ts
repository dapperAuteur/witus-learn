/**
 * Strip bearer secrets out of an email body before it is MIRRORED anywhere (today: the WitUS
 * Inbox — see src/lib/mailer.ts).
 *
 * Why this file exists
 * --------------------
 * Several of our emails are, in effect, credentials in prose:
 *   • the magic-link sign-in URL  → full account takeover;
 *   • /join/<token>               → grants membership of an instructor's class;
 *   • /family/accept/<token>      → grants access to a CHILD's data.
 * Copying those verbatim into a triage inbox puts working credentials in a second, less-guarded
 * place. Anyone who can read the mirror can then sign in as the recipient. That is a security bug,
 * not a feature — so the mirror carries METADATA (who, what, when) plus a body with every
 * token-bearing URL removed.
 *
 * The bias is deliberate: REDACT WHEN UNSURE. A slightly over-redacted triage record costs BAM a
 * click to go look at the real mailbox; an under-redacted one costs a learner their account. The
 * only thing we go out of our way to keep is the certificate-verification link, which is designed
 * to be shared publicly (it's the trust signal — a stranger is supposed to be able to open it).
 *
 * Pure + dependency-free (no "server-only") so it is directly unit-testable — see
 * tests/email-mirror.test.ts, which is the test that matters most in this area.
 */

/** Paths whose tokens are PUBLIC by design. `/verify/<token>` is a certificate check — it grants
 *  nothing, it only *proves* something, and the whole point is that anyone can open it. */
const PUBLIC_PATH_PREFIXES = ["/verify/"];

/** Query-param names that carry (or plausibly carry) a bearer secret. Matched case-insensitively
 *  as a substring, so `callbackToken`, `access_token`, `otp_code`… all trip it. */
const SECRET_PARAM_RE = /(token|secret|code|otp|passcode|password|pwd|pin|key|jwt|sig|signature|hash|auth|credential|session|magic|invite|nonce)/i;

/** Path prefixes that are token-redemption endpoints by construction. Anything under these is
 *  redacted whether or not the token itself "looks" random. */
const SECRET_PATH_RE =
  /^\/(api\/auth|join|invite|accept|family\/accept|reset|reset-password|set-password|magic-link|confirm|activate|unsubscribe)(\/|$)/i;

/** A path segment that looks like a generated token: long, and drawn from the alphabet our token
 *  generators actually use (hex / base64url / nanoid). Deliberately loose — a real URL slug this
 *  long and this random is not something we send in email. */
const TOKENISH_SEGMENT_RE = /^[A-Za-z0-9_-]{16,}$/;

/** Absolute http(s) URLs. Trailing punctuation (a period ending the sentence, a closing bracket)
 *  is excluded so we replace the URL and not the prose around it. */
const URL_RE = /https?:\/\/[^\s<>"')\]]+/g;

/**
 * A raw secret that is NOT a URL: `Password: hunter2`, `PIN — 1234`, `one-time code is 998812`.
 * The separator (`:` `=` `—` `is`) is REQUIRED — without it "pin down the answer" would be
 * mangled in every mirrored email, and there is no format in which we'd ship a secret with no
 * separator at all. Belt-and-braces: we send no PIN email today, and this makes sure a future one
 * can't leak by default.
 */
const SECRET_LABEL_RE =
  /\b(pin|password|passcode|one[-\s]?time code|access code|security code|verification code)\b\s*(?:is|:|=|—)\s*([^\s.,;]{3,})/gi;

export const REDACTED = "[redacted link]";
export const REDACTED_SECRET = "[redacted]";

/**
 * Is this URL carrying a secret that must never be mirrored?
 *
 * Returns TRUE (redact) for anything unparseable — an unparseable URL is exactly the case where we
 * cannot reason about it, and the rule is "redact when unsure".
 */
export function isSensitiveUrl(raw: string): boolean {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return true; // can't reason about it → don't mirror it
  }

  // Any query param that names a secret. Checked BEFORE the public allowlist: a `/verify/…` URL
  // that somehow carried `?token=` is not the harmless verification link we mean.
  for (const key of url.searchParams.keys()) {
    if (SECRET_PARAM_RE.test(key)) return true;
  }

  // Public-by-design paths (certificate verification) — keep them, they're the trust signal.
  if (PUBLIC_PATH_PREFIXES.some((p) => url.pathname.startsWith(p))) return false;

  if (SECRET_PATH_RE.test(url.pathname)) return true;

  // Anything else with a token-shaped segment. Catches a future /whatever/<token> route nobody
  // remembered to add above — which is the whole reason this is a heuristic and not a list.
  return url.pathname.split("/").some((seg) => TOKENISH_SEGMENT_RE.test(seg));
}

/** What a redaction pass removed — surfaced in the mirrored payload so a reader of the Inbox knows
 *  the body they're looking at is not the whole email, and never silently assumes it is. */
export interface RedactionResult {
  text: string;
  /** True when anything at all was stripped. */
  redacted: boolean;
  /** Origin+pathname of each removed URL, WITHOUT its query/secret — enough to see "a sign-in link
   *  went out" without being able to use it. Sensitive path segments are masked too. */
  removed: string[];
}

/** Mask a redacted URL down to something safe to log: scheme://host + path with token-shaped
 *  segments replaced. Never includes the query string. */
function describe(raw: string): string {
  try {
    const url = new URL(raw);
    const path = url.pathname
      .split("/")
      .map((seg) => (TOKENISH_SEGMENT_RE.test(seg) ? "<token>" : seg))
      .join("/");
    return `${url.origin}${path}${url.search ? "?<redacted>" : ""}`;
  } catch {
    return "<unparseable url>";
  }
}

/**
 * Remove every bearer secret from an email body. Token-bearing URLs become `[redacted link]`;
 * labelled raw secrets (PIN, password, one-time code) become `[redacted]`. Everything else — the
 * prose, the brand, the expiry notice, a public /verify link — survives, so the mirrored record is
 * still recognisably the email that went out.
 */
export function redactSecrets(text: string): RedactionResult {
  const removed: string[] = [];

  let out = text.replace(URL_RE, (match) => {
    if (!isSensitiveUrl(match)) return match;
    removed.push(describe(match));
    return REDACTED;
  });

  let scrubbedSecret = false;
  out = out.replace(SECRET_LABEL_RE, (_match, label: string, value: string) => {
    // Don't double-redact the placeholder we just inserted.
    if (value.startsWith("[redacted")) return `${label}: ${value}`;
    scrubbedSecret = true;
    return `${label}: ${REDACTED_SECRET}`;
  });

  return { text: out, redacted: removed.length > 0 || scrubbedSecret, removed };
}
