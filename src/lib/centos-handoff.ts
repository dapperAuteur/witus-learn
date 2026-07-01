import "server-only";
import { createHmac, randomUUID } from "node:crypto";

// One-login handoff to the CentenarianOS metrics module ("Read Your Body's Data" logs its
// daily data there, not here). We mint a short-lived HS256 JWT asserting the signed-in
// learner's email; CentOS verifies it with the shared secret, finds-or-creates the user by
// email, and starts a session. Contract agreed with CentOS: iss "learn.witus.online", aud
// "centenarian-os", TTL ≤120s (we use 90s), jti = single-use. Interim bridge until the shared
// WitUS SSO (accounts.witus.online) lands. Learn.WitUS stores NONE of the health metrics.
//
// The receiver URL is what CentOS gave us; override via env if it changes (authoritative-
// values rule: read it from CentOS, don't hardcode a guess as permanent truth).
const HANDOFF_URL = process.env.CENTOS_HANDOFF_URL ?? "https://centenarianos.com/api/auth/witus/handoff";

function b64url(input: string): string {
  return Buffer.from(input).toString("base64url");
}

/** True when the shared secret is configured (gate the CTA + route on this). */
export function handoffConfigured(): boolean {
  return Boolean(process.env.WITUS_HANDOFF_SECRET);
}

/** Mint a fresh 90-second HS256 handoff token for a signed-in learner. Throws if unset. */
export function mintHandoffToken(email: string, sub?: string): string {
  const secret = process.env.WITUS_HANDOFF_SECRET;
  if (!secret) throw new Error("WITUS_HANDOFF_SECRET is not set");
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = b64url(
    JSON.stringify({
      email,
      ...(sub ? { sub } : {}),
      iss: "learn.witus.online",
      aud: "centenarian-os",
      iat: now,
      exp: now + 90,
      jti: randomUUID(),
    }),
  );
  const signingInput = `${header}.${payload}`;
  const sig = createHmac("sha256", secret).update(signingInput).digest("base64url");
  return `${signingInput}.${sig}`;
}

/** The full CentOS handoff URL carrying a fresh token. Mint per click, server-side only. */
export function metricsHandoffLink(email: string, sub?: string): string {
  return `${HANDOFF_URL}?token=${encodeURIComponent(mintHandoffToken(email, sub))}`;
}
