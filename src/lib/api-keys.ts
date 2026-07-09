import "server-only";
import { randomBytes, createHash, timingSafeEqual } from "node:crypto";

// Per-tenant server-to-server API key crypto (see plans/wanderlearn-embed-design.md).
// The raw key is generated once, shown to the admin once, and NEVER persisted — only its
// sha256 hash is stored (src/db/schema/api-keys.ts). Losing the DB does not hand out
// usable keys.

const KEY_PREFIX = "lwus_live_";
/** How many raw-key chars are safe to keep around for display (prefix + a short id). */
const DISPLAY_PREFIX_LEN = KEY_PREFIX.length + 8;

export interface GeneratedApiKey {
  /** Full plaintext key. Show once; never store. */
  raw: string;
  /** sha256(raw), hex — what actually gets persisted + looked up. */
  hash: string;
  /** Short, non-secret prefix for the admin list UI (e.g. "lwus_live_ab12cd34"). */
  displayPrefix: string;
}

export function hashApiKey(raw: string): string {
  return createHash("sha256").update(raw).digest("hex");
}

/** Mint a new key. 32 random bytes (256 bits) of entropy, base64url-encoded. */
export function generateApiKey(): GeneratedApiKey {
  const raw = `${KEY_PREFIX}${randomBytes(32).toString("base64url")}`;
  return {
    raw,
    hash: hashApiKey(raw),
    displayPrefix: raw.slice(0, DISPLAY_PREFIX_LEN),
  };
}

/** Constant-time compare of two hex hashes (defense in depth; the DB lookup is already
 *  by exact hash match, but this avoids any accidental early-exit string compare
 *  creeping in later). */
export function hashesEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "hex");
  const bufB = Buffer.from(b, "hex");
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

/** Pull the raw key out of a `Bearer <key>` Authorization header. Null if malformed. */
export function extractBearerKey(authHeader: string | null): string | null {
  if (!authHeader) return null;
  const match = /^Bearer\s+(.+)$/i.exec(authHeader.trim());
  return match ? match[1].trim() : null;
}
