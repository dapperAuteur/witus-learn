import "server-only";
import type { NextRequest } from "next/server";

// ── Best-effort per-process rate limiting ───────────────────────────────────────────
// An in-memory sliding window keyed by an arbitrary string. This is NOT durable across
// serverless instances/cold starts and resets on redeploy — it protects against a single
// runaway client on a single instance, nothing more. Before any of its callers takes real
// hostile traffic at scale, replace with a shared store (Vercel Firewall rate limiting,
// Upstash Redis, etc.) — see plans/wanderlearn-embed-design.md "Rate limiting".
//
// Extracted from the /api/v1 key limiter so the public unauthenticated forms (pricing
// inquiry) share ONE limiter rather than growing a second parallel implementation.

export interface RateLimitOptions {
  /** Sliding-window length in ms. */
  windowMs: number;
  /** Max requests allowed per key per window. */
  max: number;
}

const hits = new Map<string, number[]>();

/** True when this key is still under its limit (and records the hit). */
export function checkRateLimit(key: string, opts: RateLimitOptions): { allowed: boolean } {
  const now = Date.now();
  const windowStart = now - opts.windowMs;
  const existing = (hits.get(key) ?? []).filter((t) => t > windowStart);
  if (existing.length >= opts.max) {
    hits.set(key, existing);
    return { allowed: false };
  }
  existing.push(now);
  hits.set(key, existing);
  // Bound memory: forget keys once in a while so an attacker cycling random keys can't
  // grow this map unboundedly. Cheap, approximate, fine for MVP.
  if (hits.size > 5000) hits.clear();
  return { allowed: true };
}

/** Test-only: drop all recorded hits. */
export function resetRateLimits(): void {
  hits.clear();
}

/**
 * Best-effort client IP for rate-limiting a PUBLIC endpoint. On Vercel the left-most
 * x-forwarded-for entry is the client. This is spoofable in principle, so it is a speed
 * bump — never an authorization decision. Falls back to a constant so a missing header
 * degrades to a shared (stricter) bucket rather than to no limit at all.
 */
export function clientIp(req: Request | NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  const first = fwd?.split(",")[0]?.trim();
  return first || req.headers.get("x-real-ip") || "unknown";
}
