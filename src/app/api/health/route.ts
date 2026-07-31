import * as Sentry from "@sentry/nextjs";
import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/db/client";

/**
 * GET /api/health, the uptime-monitor target (Better Stack and friends).
 *
 * Why it exists: a monitor pointed at the homepage can go green off a CDN-cached page while Neon is
 * down, so learners cannot log in or load a lesson and nothing pages anybody. This route proves the
 * ONE thing that matters: the running instance can reach its database right now.
 *
 * Deliberately TENANT-AGNOSTIC. It never calls the tenant resolver (`getScopedDb` / `apiContext`),
 * because that 404s an unknown host: a monitor hitting the raw Vercel deployment URL, a new domain
 * mid-DNS-cutover, or a health probe with no Host header would all read as "down" while the app was
 * perfectly healthy. This answers "is the app and its database alive", never "does this brand exist".
 * That also means it exposes nothing tenant-specific: no brand names, no domains, no counts.
 *
 * Public and unauthenticated by necessity (a monitor cannot log in), so the payload is deliberately
 * tiny and boring: no version, no env values, no table counts, no user data. The one field that could
 * ever leak is the failure reason, which is why NOTHING derived from the caught error is ever put in
 * the response. See the catch block.
 */

// Never cached, never prerendered. A cached health check is exactly the failure mode this route
// exists to remove, so both the route segment AND the response header say no.
export const dynamic = "force-dynamic";
export const revalidate = 0;

/** How long a hung database gets before we call it down. Comfortably under the platform's own
 *  function timeout, so a stuck connection returns a real 503 instead of a gateway error a monitor
 *  cannot distinguish from a network blip. */
const DB_TIMEOUT_MS = 4000;

const NO_STORE = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
} as const;

/**
 * Generic reason tokens. These are the ONLY failure strings that may reach a client.
 *
 * A database connection failure very commonly embeds the connection string, password and all
 * (`postgres://user:pass@host/db`), in `err.message`. Echoing a caught error here would publish the
 * production credential to anyone who could curl a public URL while the DB was down, which is the
 * exact moment the endpoint gets hit most.
 */
type Reason = "database_unreachable" | "database_timeout";

class DbTimeout extends Error {}

/** Cheapest possible liveness query: no table, no plan, no tenant. Just "is the connection alive". */
async function pingDb(): Promise<void> {
  await db.execute(sql`select 1`);
}

function withTimeout<T>(work: Promise<T>, ms: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_resolve, reject) => {
    timer = setTimeout(() => reject(new DbTimeout("health check timed out")), ms);
  });
  return Promise.race([work, timeout]).finally(() => {
    if (timer) clearTimeout(timer);
  });
}

export async function GET() {
  try {
    await withTimeout(pingDb(), DB_TIMEOUT_MS);
  } catch (err) {
    const reason: Reason = err instanceof DbTimeout ? "database_timeout" : "database_unreachable";

    // Server-side only. Sentry is this repo's logger and its beforeSend scrubber
    // (src/lib/sentry-scrub.ts) redacts labelled secrets before anything leaves the process; it is
    // inert with no DSN configured. The console line carries the error CLASS and nothing else, on
    // purpose: `err.message` is the field that can hold DATABASE_URL, so it is never printed and
    // never returned.
    Sentry.captureException(err, { tags: { health_check: reason } });
    console.error(
      `[health] database check failed (${reason}); error class: ${
        err instanceof Error ? err.name : typeof err
      }`,
    );

    return NextResponse.json(
      { ok: false, error: reason, checks: { db: "fail" } },
      { status: 503, headers: NO_STORE },
    );
  }

  return NextResponse.json({ ok: true, checks: { db: "ok" } }, { status: 200, headers: NO_STORE });
}
