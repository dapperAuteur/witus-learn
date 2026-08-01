import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * GET /api/health, the uptime-monitor target.
 *
 * The regressions this file pins, in order of how much they would cost:
 *   1. NO RAW ERROR ESCAPES. A Neon connection failure carries the whole connection string,
 *      password included, in `err.message`. This endpoint is public and unauthenticated, so echoing
 *      that error would publish the production credential to anyone curling a URL at exactly the
 *      moment the endpoint is being hit hardest. The body may only ever contain a reason token.
 *   2. It actually queries the database. A health check that returns static JSON is the failure it
 *      was built to remove (a cached 200 while the DB is down).
 *   3. A hung database returns 503 promptly instead of holding the request open.
 *   4. Never cached, and tenant-agnostic (no tenant resolver, so an unknown host cannot fail it).
 */

const mocks = vi.hoisted(() => ({
  execute: vi.fn(),
  captureException: vi.fn(),
}));

vi.mock("@/db/client", () => ({ db: { execute: mocks.execute } }));
vi.mock("@sentry/nextjs", () => ({ captureException: mocks.captureException }));

import { GET } from "@/app/api/health/route";

/** A realistic Neon failure: the driver puts the whole DSN, password and all, in the message. */
const PASSWORD = "sup3r-s3cret-pw";
const CONNECTION_STRING = `postgres://learn_owner:${PASSWORD}@ep-cool-thing-123456.us-east-2.aws.neon.tech/neondb`;
const LEAKY_ERROR = new Error(`connect ECONNREFUSED for ${CONNECTION_STRING}`);

beforeEach(() => {
  mocks.execute.mockReset();
  mocks.captureException.mockReset();
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("GET /api/health", () => {
  it("returns 200 {ok:true} and actually runs a query when the database answers", async () => {
    mocks.execute.mockResolvedValue({ rows: [{ "?column?": 1 }] });

    const res = await GET();

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true, checks: { db: "ok" } });
    // The whole point: a static 200 would pass a body assertion but not this one.
    expect(mocks.execute).toHaveBeenCalledTimes(1);
  });

  it("is never cached", async () => {
    mocks.execute.mockResolvedValue({ rows: [] });

    const res = await GET();

    expect(res.headers.get("cache-control")).toContain("no-store");
  });

  it("returns 503 with a generic reason token when the database is unreachable", async () => {
    mocks.execute.mockRejectedValue(LEAKY_ERROR);

    const res = await GET();

    expect(res.status).toBe(503);
    expect(await res.json()).toEqual({ ok: false, error: "database_unreachable", checks: { db: "fail" } });
    expect(res.headers.get("cache-control")).toContain("no-store");
  });

  it("never leaks the password, host, or any raw error text into the response body", async () => {
    mocks.execute.mockRejectedValue(LEAKY_ERROR);

    const body = await (await GET()).text();

    expect(body).not.toContain(PASSWORD);
    expect(body).not.toContain(CONNECTION_STRING);
    expect(body).not.toContain("neon.tech");
    expect(body).not.toContain("ECONNREFUSED");
    expect(body).not.toContain(LEAKY_ERROR.message);
    // No stack, no cause, no message field of any kind. Whitelist the shape rather than blacklist
    // strings: the payload is exactly three keys, and `error` may only hold a fixed reason token.
    const parsed = JSON.parse(body) as Record<string, unknown>;
    expect(Object.keys(parsed).sort()).toEqual(["checks", "error", "ok"]);
    expect(["database_unreachable", "database_timeout"]).toContain(parsed.error);
    expect(body).not.toMatch(/stack|cause|message|detail/i);
  });

  it("logs the failure server-side without printing the credential-bearing message", async () => {
    mocks.execute.mockRejectedValue(LEAKY_ERROR);
    const consoleError = vi.mocked(console.error);

    await GET();

    expect(mocks.captureException).toHaveBeenCalledWith(LEAKY_ERROR, {
      tags: { health_check: "database_unreachable" },
    });
    const printed = consoleError.mock.calls.flat().join(" ");
    expect(printed).not.toContain(PASSWORD);
    expect(printed).not.toContain(CONNECTION_STRING);
  });

  it("gives up on a hung database with 503 database_timeout rather than hanging", async () => {
    vi.useFakeTimers();
    // Never settles: the database accepted the connection and then went away.
    mocks.execute.mockReturnValue(new Promise(() => {}));

    const pending = GET();
    await vi.advanceTimersByTimeAsync(5000);
    const res = await pending;

    expect(res.status).toBe(503);
    expect(await res.json()).toEqual({ ok: false, error: "database_timeout", checks: { db: "fail" } });
  });

  it("does not resolve the tenant, so an unknown host cannot make the check fail", async () => {
    // GET takes no Request at all, which is the structural guarantee: there is no host to read and
    // nothing to hand a tenant resolver.
    expect(GET.length).toBe(0);
    mocks.execute.mockResolvedValue({ rows: [] });
    expect((await GET()).status).toBe(200);
  });
});
