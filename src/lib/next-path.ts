// Post-sign-in return path ("?next="). Pure helpers — NO `server-only`, NO next/headers — so the
// tests can exercise them directly, same reasoning as tenant-util.ts.

// Control characters (incl. CR/LF and NUL) can smuggle a newline into a Location header.
// Written as escapes, never literal bytes, so the source stays greppable and lint-clean.
const CONTROL_CHARS = /[\u0000-\u001F\u007F]/;

/**
 * Validate a `?next=` return path before anything redirects a visitor to it.
 *
 * The value arrives in a query string, so treat it as attacker-controlled: without this guard
 * `/login?next=https://evil.example` turns our own sign-in page into an open redirect, which is
 * exactly the shape phishing links want (a real learn.witus.online URL that lands somewhere else).
 *
 * Only a same-origin, path-absolute value survives. Rejected on purpose:
 *   - absolute URLs ("https://evil.example") — different origin
 *   - protocol-relative ("//evil.example") — browsers read this as absolute
 *   - backslash variants ("/\evil.example") — some browsers normalise "\" to "/" first
 *   - scheme-ish values ("javascript:alert(1)") — not path-absolute, so already excluded
 *   - control characters — can smuggle a newline into a header
 */
export function safeNextPath(raw: string | null | undefined, fallback = "/"): string {
  if (typeof raw !== "string") return fallback;
  const value = raw.trim();
  if (!value.startsWith("/")) return fallback;
  if (value.startsWith("//") || value.startsWith("/\\")) return fallback;
  if (CONTROL_CHARS.test(value)) return fallback;
  return value;
}

/**
 * The sign-in URL to send a signed-out visitor to, carrying where they were headed so the magic
 * link can land them back there. Never sends them back to /login itself (that loops).
 */
export function loginPathFor(pathname: string | null | undefined): string {
  const next = safeNextPath(pathname, "");
  if (!next || next === "/" || next.startsWith("/login")) return "/login";
  return `/login?next=${encodeURIComponent(next)}`;
}

/** Request header the proxy sets so server components can read the current path. */
export const PATHNAME_HEADER = "x-pathname";
