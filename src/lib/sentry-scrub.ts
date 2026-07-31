import type { ErrorEvent } from "@sentry/nextjs";
import { redactSecrets, REDACTED_SECRET } from "@/lib/email-redact";

/**
 * Sentry `beforeSend` scrubber.
 *
 * Multi-tenant safety: a crash report must never carry a learner's email, a magic-link / invite /
 * family-accept token, a cookie, or an auth header off to a third party. We reuse the SAME
 * redactSecrets pass that guards mirrored emails (token-bearing URLs and labelled secrets removed),
 * then drop the request cookies/headers and any attached user identity. It never returns null: we
 * still want the crash signal, just with the credentials stripped out.
 *
 * Three things this file learned the hard way, all of which are the reason it is shaped like this:
 *
 * 1. `request.query_string` is a SEPARATE field from `request.url`. A bare query string is not a
 *    parseable URL, so a URL-only pass never sees it and a `?token=` sails straight through. It
 *    arrives in three shapes (raw string, record, array of pairs) and all three are handled below.
 *
 * 2. Secret-ness usually lives in the NAME, not the value. `client_secret=hunter2` has no value
 *    pattern to match on; the only tell is the key beside it. So the deep walk over `extra`,
 *    `tags`, `contexts` and `breadcrumbs` is KEY-AWARE. `contexts.trace` is exempt so trace and
 *    span ids survive, which is the whole point of having the report.
 *
 * 3. If the scrubber itself throws, we must NOT fall back to shipping the raw event. `beforeSend`
 *    exceptions are swallowed by the SDK, so a bug here would silently send an unscrubbed payload.
 *    `scrubEvent` wraps everything and degrades to an identifier-only event instead.
 *
 * Browser constraint: this module is imported by `src/instrumentation-client.ts`, so it is parsed
 * in the browser. NO REGEX LOOKBEHIND anywhere in this file (or in anything it imports): lookbehind
 * is a SyntaxError on iOS Safari below 16.4, which would break the whole client chunk even with no
 * DSN set. Where a "not preceded by" is needed, capture the preceding character and re-emit it.
 */

/** Placeholder written in place of a secret value. Shared with the email mirror so a reader sees
 *  one vocabulary, and so re-scrubbing an already-scrubbed event is a no-op (see isPlaceholder). */
export const REDACTED = REDACTED_SECRET;

/**
 * Name segments that mean "this is a credential". Matched per SEGMENT, never as a substring: a
 * substring test redacts `design` (sign), `keyboard` (key) and `passenger` (pass), and an
 * over-redacted event is a report nobody can act on. `state` is deliberately NOT here: it is an
 * OAuth CSRF nonce that is public by construction and useful in triage.
 */
const SECRET_SEGMENTS = new Set([
  "token",
  "tokens",
  "secret",
  "secrets",
  "password",
  "passwd",
  "passwords",
  "pwd",
  "passphrase",
  "passcode",
  "pin",
  "otp",
  "code",
  "codes",
  "key",
  "keys",
  "jwt",
  "sig",
  "signature",
  "hash",
  "auth",
  "authorization",
  "credential",
  "credentials",
  "session",
  "sessionid",
  "cookie",
  "cookies",
  "bearer",
  "magic",
  "magiclink",
  "invite",
  "nonce",
  "dsn",
]);

/**
 * Glued compounds a segment split cannot break up: `APIKEY`, `accesstoken`, `clientsecret`. The
 * prefix group is optional but must match one of the listed words, so `keyboard` and `monkey` do
 * not trip it (the suffix has to END the segment).
 */
const GLUED_SECRET_RE =
  /^x?(api|access|refresh|auth|id|client|private|priv|app|sub|csrf|xsrf|reset|verify|confirm|recovery|onetime|otp)?(key|token|secret|password|passwd|pwd|code|jwt|sig|hash)s?$/;

/**
 * Names that CONTAIN a secret-looking segment but are not secrets, checked before the segment test.
 * `statusCode`, `country_code` and `sortKey` are exactly the fields that make a crash reproducible,
 * and blanking them buys no safety at all. Full normalised names only, never substrings.
 */
const BENIGN_NAMES = new Set([
  "status_code",
  "http_code",
  "http_status_code",
  "response_code",
  "error_code",
  "exit_code",
  "country_code",
  "zip_code",
  "postal_code",
  "area_code",
  "currency_code",
  "language_code",
  "locale_code",
  "lang_code",
  "state_code",
  "course_code",
  "sort_key",
  "cache_key",
  "row_key",
  "key_name",
  "keyboard",
  "code_of_conduct",
]);

/** Split a name into lowercase word segments, breaking on separators AND camelCase humps. The
 *  camelCase split is written as a capture+re-emit, not a lookbehind (see the module note). */
function nameSegments(name: string): string[] {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((s) => s.toLowerCase());
}

/**
 * Does this key NAME mean its value is a credential?
 *
 * Segment-wise, so `INBOX_INGEST_SECRET` trips it. This is the reason we do not use `\b(secret)\b`:
 * `_` is a word character, so `\b` never fires at the boundary in `INBOX_INGEST_SECRET` and the
 * value survives. Splitting on non-alphanumerics has no such blind spot.
 */
export function isSecretName(name: string): boolean {
  const segments = nameSegments(name);
  if (segments.length === 0) return false;
  if (BENIGN_NAMES.has(segments.join("_"))) return false;
  return segments.some((s) => SECRET_SEGMENTS.has(s) || GLUED_SECRET_RE.test(s));
}

/** Already-scrubbed? Guards idempotence: re-scrubbing must never yield `[[redacted]]`. */
function isPlaceholder(value: string): boolean {
  return value.trim().startsWith("[redacted");
}

/**
 * `NAME=VALUE` / `NAME: VALUE` inside free text. We match the pair structurally and then ask
 * isSecretName about the NAME, rather than baking the secret words into the regex: that keeps the
 * underscore blind spot out of the picture entirely, and keeps one list of secret words.
 *
 * The name charset excludes `:` and `/`, so `https://host/p?token=X` cannot be read as name
 * `https` with a benign value: the only pair the regex can find in it is `...?token` = `X`, whose
 * name splits to [https, host, p, token] and trips.
 */
const NAME_VALUE_RE = /([A-Za-z0-9_.?&[\]-]{2,80})(\s*[:=]\s*)("?)([^\s"'`,;)}\]]{3,})\3/g;

/** `Authorization: Bearer <jwt>` pasted into a message. The leading boundary is captured and
 *  re-emitted because lookbehind is banned here. */
const BEARER_RE = /(^|[^A-Za-z0-9_])(bearer\s+)([A-Za-z0-9._~+/=-]{8,})/gi;

/** Scrub a free-text string: token-bearing URLs, labelled secrets, then key-aware `name=value`. */
export function scrubText(text: string): string {
  let out = redactSecrets(text).text;

  out = out.replace(BEARER_RE, (_m, lead: string, label: string) => `${lead}${label}${REDACTED}`);

  out = out.replace(NAME_VALUE_RE, (match, name: string, sep: string, quote: string, value: string) => {
    if (!isSecretName(name)) return match;
    if (isPlaceholder(value)) return match;
    return `${name}${sep}${quote}${REDACTED}${quote}`;
  });

  return out;
}

/**
 * Scrub a BARE query string (`a=1&token=xyz`, with or without the leading `?`). Blank the value of
 * any param whose NAME trips the secret test and leave the harmless ones readable, because
 * `?page=3&sort=name` is exactly the context that makes a crash reproducible.
 *
 * Absolute URLs are handled first by redactSecrets, so a full URL that arrives in this field is
 * redacted as a URL rather than mis-parsed as a pair.
 */
export function scrubQueryStringText(raw: string): string {
  const urlScrubbed = redactSecrets(raw).text;

  const pairScrubbed = urlScrubbed
    .split("&")
    .map((part) => {
      const eq = part.indexOf("=");
      if (eq < 0) return part;
      const name = part.slice(0, eq);
      const value = part.slice(eq + 1);
      if (!isSecretName(name)) return part;
      if (value === "" || isPlaceholder(value)) return part;
      return `${name}=${REDACTED}`;
    })
    .join("&");

  return scrubText(pairScrubbed);
}

/** Sentry's QueryParams: a raw string, a record, or an array of `[key, value]` pairs. All three
 *  are shapes we have actually seen in the wild, and a URL-only pass sees none of them. */
type QueryParams = string | Record<string, string> | Array<[string, string]>;

export function scrubQueryParams(qs: QueryParams): QueryParams {
  if (typeof qs === "string") return scrubQueryStringText(qs);

  if (Array.isArray(qs)) {
    return qs.map((pair) => {
      if (!Array.isArray(pair)) return pair;
      const [name, value] = pair;
      const key = String(name ?? "");
      if (isSecretName(key) && value !== "" && !isPlaceholder(String(value ?? ""))) {
        return [key, REDACTED] as [string, string];
      }
      return [key, scrubText(String(value ?? ""))] as [string, string];
    });
  }

  if (qs && typeof qs === "object") {
    const out: Record<string, string> = {};
    for (const [key, value] of Object.entries(qs)) {
      const str = String(value ?? "");
      out[key] = isSecretName(key) && str !== "" && !isPlaceholder(str) ? REDACTED : scrubText(str);
    }
    return out;
  }

  return qs;
}

const MAX_DEPTH = 8;

/**
 * Key-aware deep scrub. `keyIsSecret` carries the verdict DOWN one level so
 * `extra.auth = { header: "..." }` blanks the whole subtree: a credential's neighbours in an object
 * named `auth` are credentials too, and the value alone would match nothing.
 */
function scrubDeep(value: unknown, keyIsSecret: boolean, depth: number, seen: WeakSet<object>): unknown {
  if (value == null) return value;

  if (typeof value === "string") {
    if (isPlaceholder(value)) return value;
    return keyIsSecret && value !== "" ? REDACTED : scrubText(value);
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return keyIsSecret ? REDACTED : value;
  }

  if (typeof value !== "object") return value;
  if (depth >= MAX_DEPTH) return keyIsSecret ? REDACTED : value;

  const obj = value as object;
  if (seen.has(obj)) return value;
  seen.add(obj);

  if (Array.isArray(value)) {
    return value.map((item) => scrubDeep(item, keyIsSecret, depth + 1, seen));
  }

  const out: Record<string, unknown> = {};
  for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
    out[key] = scrubDeep(child, keyIsSecret || isSecretName(key), depth + 1, seen);
  }
  return out;
}

/** Scrub a container (extra / tags / contexts / a breadcrumb) unless a key is exempt. */
function scrubContainer<T extends Record<string, unknown>>(
  container: T | undefined,
  exempt: readonly string[] = [],
): T | undefined {
  if (!container || typeof container !== "object") return container;
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(container)) {
    out[key] = exempt.includes(key) ? value : scrubDeep(value, isSecretName(key), 0, new WeakSet());
  }
  return out as T;
}

/** Exception class names are safe to keep, but only if they LOOK like class names. */
const SAFE_TYPE_RE = /^[A-Za-z0-9_$.]{1,64}$/;

/**
 * The fail-safe. If the scrub throws we ship identifiers and nothing else, so a bug in this file
 * can cost us triage detail but can never cost a learner their account.
 */
function identifiersOnly(event: ErrorEvent): ErrorEvent {
  const values = (event.exception?.values ?? [])
    .map((v) => ({ type: typeof v?.type === "string" && SAFE_TYPE_RE.test(v.type) ? v.type : "Error" }))
    .slice(0, 10);

  return {
    type: undefined,
    event_id: event.event_id,
    timestamp: event.timestamp,
    platform: event.platform,
    level: event.level,
    environment: event.environment,
    release: event.release,
    message: "[scrub failed: event reduced to identifiers]",
    exception: values.length ? { values } : undefined,
    tags: { scrub_failed: "true" },
  } as ErrorEvent;
}

function scrubEventUnsafe(event: ErrorEvent): ErrorEvent {
  if (event.message) event.message = scrubText(event.message);
  for (const ex of event.exception?.values ?? []) {
    if (ex.value) ex.value = scrubText(ex.value);
  }

  // Never ship the account identity or network origin.
  if (event.user) {
    delete event.user.email;
    delete event.user.ip_address;
    delete event.user.username;
  }

  // Request context: keep a scrubbed URL for triage, drop the credential-bearing parts.
  if (event.request) {
    if (typeof event.request.url === "string") event.request.url = scrubText(event.request.url);
    if (event.request.query_string != null) {
      event.request.query_string = scrubQueryParams(event.request.query_string as QueryParams);
    }
    if (event.request.data != null) {
      event.request.data = scrubDeep(event.request.data, false, 0, new WeakSet());
    }
    delete event.request.cookies;
    const headers = event.request.headers as Record<string, string> | undefined;
    if (headers) {
      delete headers.cookie;
      delete headers.authorization;
      delete headers["set-cookie"];
    }
  }

  // Everything a payload can hide in. `contexts.trace` is exempt: trace/span ids are the thread we
  // pull to correlate a report, they carry no learner data, and blanking them makes the whole
  // report useless.
  event.extra = scrubContainer(event.extra as Record<string, unknown> | undefined);
  event.tags = scrubContainer(event.tags as Record<string, unknown> | undefined) as ErrorEvent["tags"];
  event.contexts = scrubContainer(event.contexts as Record<string, unknown> | undefined, [
    "trace",
  ]) as ErrorEvent["contexts"];

  // The browser SDK records EVERY fetch/xhr URL as a breadcrumb, which is the single richest
  // source of stray tokens in a client report.
  if (Array.isArray(event.breadcrumbs)) {
    event.breadcrumbs = event.breadcrumbs.map((crumb) => ({
      ...crumb,
      ...(typeof crumb?.message === "string" ? { message: scrubText(crumb.message) } : {}),
      ...(crumb?.data ? { data: scrubDeep(crumb.data, false, 0, new WeakSet()) as typeof crumb.data } : {}),
    }));
  }

  return event;
}

export function scrubEvent(event: ErrorEvent): ErrorEvent {
  try {
    return scrubEventUnsafe(event);
  } catch {
    try {
      return identifiersOnly(event);
    } catch {
      return { message: "[scrub failed]" } as ErrorEvent;
    }
  }
}
