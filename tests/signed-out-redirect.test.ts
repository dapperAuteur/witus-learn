import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { loginPathFor, safeNextPath, PATHNAME_HEADER } from "@/lib/next-path";

/**
 * The signed-out contract for PAGES.
 *
 * The regression this file exists for: /family (and /cohorts, and both report pages) guarded with
 * requireUser(), which calls forbidden(). A signed-out visitor following a bookmark, a shared link,
 * or browser history therefore got a bare HTTP 403 and no way forward, while every /teach page
 * redirected to /login for the exact same condition. In production that surfaced as
 * `NEXT_HTTP_ERROR_FALLBACK;403` on GET /family and paged the uptime monitor, because every
 * signed-out hit logged an error.
 *
 * What is pinned here, in order of what each would cost if it broke:
 *   1. OPEN REDIRECT. `?next=` is attacker-controlled. If safeNextPath ever lets an absolute or
 *      protocol-relative URL through, our own sign-in page becomes a phishing redirector on a real
 *      learn.witus.online link. This is the one that must never regress.
 *   2. Signed-out on a page REDIRECTS to /login, carrying the original path, instead of 403ing.
 *   3. Signed-out against the API still gets a STATUS (403), never a redirect, or `/api/admin/*`
 *      callers start parsing an HTML sign-in page as JSON.
 *   4. No page component quietly goes back to the 403-shaped guard.
 */

describe("safeNextPath: the open-redirect guard on ?next=", () => {
  it("keeps an ordinary same-origin path", () => {
    expect(safeNextPath("/family")).toBe("/family");
    expect(safeNextPath("/cohorts/abc/report")).toBe("/cohorts/abc/report");
  });

  it("rejects absolute URLs", () => {
    expect(safeNextPath("https://evil.example/steal")).toBe("/");
    expect(safeNextPath("http://evil.example")).toBe("/");
  });

  it("rejects protocol-relative and backslash variants a browser reads as absolute", () => {
    expect(safeNextPath("//evil.example")).toBe("/");
    expect(safeNextPath("/\\evil.example")).toBe("/");
    expect(safeNextPath("\\\\evil.example")).toBe("/");
  });

  it("rejects anything that is not path-absolute, including scheme payloads", () => {
    expect(safeNextPath("javascript:alert(1)")).toBe("/");
    expect(safeNextPath("evil.example")).toBe("/");
    expect(safeNextPath("")).toBe("/");
    expect(safeNextPath(null)).toBe("/");
    expect(safeNextPath(undefined)).toBe("/");
  });

  it("rejects control characters that could smuggle a newline into a Location header", () => {
    expect(safeNextPath("/family\r\nSet-Cookie: a=b")).toBe("/");
    expect(safeNextPath("/family\u0000")).toBe("/");
  });

  it("honours an explicit fallback", () => {
    expect(safeNextPath("https://evil.example", "")).toBe("");
  });
});

describe("loginPathFor", () => {
  it("carries the page the visitor actually wanted", () => {
    expect(loginPathFor("/family")).toBe("/login?next=%2Ffamily");
  });

  it("does not send anyone back to /login (that loops) or tag on a pointless home redirect", () => {
    expect(loginPathFor("/login")).toBe("/login");
    expect(loginPathFor("/login?next=%2Ffamily")).toBe("/login");
    expect(loginPathFor("/")).toBe("/login");
    expect(loginPathFor(null)).toBe("/login");
  });

  it("drops an unsafe path rather than forwarding it", () => {
    expect(loginPathFor("https://evil.example")).toBe("/login");
    expect(loginPathFor("//evil.example")).toBe("/login");
  });
});

// requireUserPage / requireUser behaviour. session.ts pulls in the DB client and Better Auth, so
// both are mocked; the assertions are only about which navigation primitive fires.
const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  redirect: vi.fn(() => {
    throw new Error("NEXT_REDIRECT");
  }),
  forbidden: vi.fn(() => {
    throw new Error("NEXT_HTTP_ERROR_FALLBACK;403");
  }),
  headerGet: vi.fn(),
}));

vi.mock("next/navigation", () => ({ redirect: mocks.redirect, forbidden: mocks.forbidden }));
vi.mock("next/headers", () => ({
  headers: async () => ({ get: mocks.headerGet }),
}));
vi.mock("@/lib/auth", () => ({ auth: { api: { getSession: mocks.getSession } } }));
vi.mock("@/db/client", () => ({ db: {} }));

describe("page guard: signed-out visitors are sent to sign in, not dead-ended", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.headerGet.mockReturnValue("/family");
  });

  it("redirects to /login carrying the path, and does NOT call forbidden()", async () => {
    mocks.getSession.mockResolvedValue(null);
    const { requireUserPage } = await import("@/lib/session");

    await expect(requireUserPage()).rejects.toThrow("NEXT_REDIRECT");
    expect(mocks.redirect).toHaveBeenCalledWith("/login?next=%2Ffamily");
    expect(mocks.forbidden).not.toHaveBeenCalled();
  });

  it("falls back to a plain /login when the proxy header is missing", async () => {
    mocks.getSession.mockResolvedValue(null);
    mocks.headerGet.mockReturnValue(null);
    const { requireUserPage } = await import("@/lib/session");

    await expect(requireUserPage()).rejects.toThrow("NEXT_REDIRECT");
    expect(mocks.redirect).toHaveBeenCalledWith("/login");
  });

  it("never forwards an attacker-supplied header value into the redirect", async () => {
    mocks.getSession.mockResolvedValue(null);
    mocks.headerGet.mockReturnValue("https://evil.example");
    const { requireUserPage } = await import("@/lib/session");

    await expect(requireUserPage()).rejects.toThrow("NEXT_REDIRECT");
    expect(mocks.redirect).toHaveBeenCalledWith("/login");
  });

  it("returns the session untouched when one exists", async () => {
    const session = { user: { id: "u1" } };
    mocks.getSession.mockResolvedValue(session);
    const { requireUserPage } = await import("@/lib/session");

    await expect(requireUserPage()).resolves.toBe(session);
    expect(mocks.redirect).not.toHaveBeenCalled();
    expect(mocks.forbidden).not.toHaveBeenCalled();
  });
});

describe("API guard: requireUser keeps returning a status, never a redirect", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("403s a signed-out caller so /api/admin/* stays JSON-shaped", async () => {
    mocks.getSession.mockResolvedValue(null);
    const { requireUser } = await import("@/lib/session");

    await expect(requireUser()).rejects.toThrow("NEXT_HTTP_ERROR_FALLBACK;403");
    expect(mocks.forbidden).toHaveBeenCalled();
    expect(mocks.redirect).not.toHaveBeenCalled();
  });
});

// Source-level guards. The behavioural tests above only cover the helper; these stop the original
// mistake (a page reaching for the API-shaped guard) from reappearing anywhere in the tree.
const TENANT_PAGES_DIR = join(process.cwd(), "src/app/(tenant)");

function pageFiles(dir: string, found: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) pageFiles(full, found);
    else if (entry === "page.tsx" || entry === "layout.tsx") found.push(full);
  }
  return found;
}

describe("no page component reaches for the 403-shaped guard", () => {
  it("every (tenant) page/layout uses requireUserPage, never bare requireUser", () => {
    const offenders = pageFiles(TENANT_PAGES_DIR).filter((file) => {
      const src = readFileSync(file, "utf8");
      // requireUserPage contains "requireUser" as a prefix, so match the call boundary.
      return /\brequireUser\s*\(/.test(src);
    });

    expect(offenders.map((f) => f.replace(process.cwd() + "/", ""))).toEqual([]);
  });

  it("the five pages that caused the incident are guarded", () => {
    const guarded = [
      "src/app/(tenant)/family/page.tsx",
      "src/app/(tenant)/family/[childId]/report/page.tsx",
      "src/app/(tenant)/cohorts/page.tsx",
      "src/app/(tenant)/cohorts/[id]/page.tsx",
      "src/app/(tenant)/cohorts/[id]/report/page.tsx",
    ];
    for (const rel of guarded) {
      const src = readFileSync(join(process.cwd(), rel), "utf8");
      expect(src, `${rel} must use the page guard`).toMatch(/requireUserPage\s*\(/);
    }
  });

  it("forbidden() has a branded UI to render, so a denial is never Next's bare fallback", () => {
    const src = readFileSync(join(process.cwd(), "src/app/forbidden.tsx"), "utf8");
    expect(src).toMatch(/export default async function Forbidden/);
    // A signed-out visitor who lands here still needs a way forward.
    expect(src).toMatch(/loginPathFor/);
  });

  it("the proxy stamps the pathname header the guard depends on", () => {
    const src = readFileSync(join(process.cwd(), "src/proxy.ts"), "utf8");
    expect(src).toMatch(/PATHNAME_HEADER/);
    expect(src).toMatch(/NextResponse\.next\(\{\s*request:\s*\{\s*headers/);
    expect(PATHNAME_HEADER).toBe("x-pathname");
  });
});
