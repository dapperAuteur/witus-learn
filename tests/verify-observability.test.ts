import { describe, expect, it } from "vitest";
import {
  cspSourceAllows,
  cspVerdict,
  extractMetaCsp,
  extractScriptUrls,
  healthVerdict,
  parseCspPolicies,
  parseDsn,
  parseEnvFile,
  redactDsn,
} from "../scripts/lib/observability-checks";

/**
 * The judgment behind `pnpm verify:observability`.
 *
 * WHY THESE TESTS EXIST. The harness's whole value is that it is honest, and the only way it can
 * lie is by returning "pass" for something it did not actually establish. Its network layer cannot
 * be tested without a live deployment, but every decision it makes is a pure function in
 * scripts/lib/observability-checks.ts, and those are tested here. The load-bearing cases:
 *
 *   1. `connect-src 'self' data:` BLOCKS the Sentry ingest origin. This is a real policy that
 *      shipped in a sibling app and silently dropped 100% of browser-side error reports while the
 *      server side kept reporting, so the dashboard looked healthy. If this test ever goes green
 *      the wrong way, the harness certifies that exact failure as fine.
 *   2. A 200 that says nothing about health is NOT healthy. Three false-healthy signals in this
 *      rollout came from treating "it responded" as "it is fine".
 *   3. A missing DSN is undetermined, never a pass, and never a guess.
 */

const DSN = "https://abcdef0123456789abcdef0123456789@o4509999.ingest.us.sentry.io/4510000";

describe("parseDsn", () => {
  it("pulls the ingest origin and envelope endpoint out of a real DSN shape", () => {
    const parsed = parseDsn(DSN);
    expect(parsed).not.toBeNull();
    expect(parsed?.publicKey).toBe("abcdef0123456789abcdef0123456789");
    expect(parsed?.host).toBe("o4509999.ingest.us.sentry.io");
    expect(parsed?.ingestOrigin).toBe("https://o4509999.ingest.us.sentry.io");
    expect(parsed?.projectId).toBe("4510000");
    expect(parsed?.envelopeUrl).toBe("https://o4509999.ingest.us.sentry.io/api/4510000/envelope/");
  });

  it("refuses anything that is not a DSN rather than guessing a shape", () => {
    for (const bad of ["", "  ", "not-a-url", "https://o4509999.ingest.us.sentry.io/4510000", "https://key@host", "https://key@host/a/b"]) {
      expect(parseDsn(bad)).toBeNull();
    }
  });

  it("redacts the public key by default so it does not land in pasted logs", () => {
    const parsed = parseDsn(DSN)!;
    const shown = redactDsn(parsed);
    expect(shown).toBe("https://abcdef...@o4509999.ingest.us.sentry.io/4510000");
    expect(shown).not.toContain(parsed.publicKey);
  });
});

describe("parseEnvFile", () => {
  it("reads the forms a real .env.local uses", () => {
    const parsed = parseEnvFile(
      [
        "# a comment",
        "",
        `NEXT_PUBLIC_SENTRY_DSN=${DSN}`,
        'BETTER_AUTH_URL="https://learn.witus.online"',
        "export MAILGUN_REGION=us",
        "SOME_VALUE=plain # trailing comment",
        "MALFORMED",
      ].join("\n"),
    );
    expect(parsed.NEXT_PUBLIC_SENTRY_DSN).toBe(DSN);
    expect(parsed.BETTER_AUTH_URL).toBe("https://learn.witus.online");
    expect(parsed.MAILGUN_REGION).toBe("us");
    expect(parsed.SOME_VALUE).toBe("plain");
    expect(parsed.MALFORMED).toBeUndefined();
  });
});

describe("extractScriptUrls", () => {
  const html = `<!doctype html><html><head>
    <link rel="preload" as="script" href="/_next/static/chunks/preloaded.js"/>
    <script src="/_next/static/chunks/main-app.js"></script>
    <script src="https://cdn.example.com/third-party.js"></script>
    <style>body{}</style>
    </head><body><script>self.__next_f.push([1,"a:/_next/static/chunks/app/layout-abc.js"])</script></body></html>`;

  it("finds script tags, preloads, and chunk paths buried in the flight payload", () => {
    const urls = extractScriptUrls(html, "https://learn.witus.online/");
    expect(urls).toContain("https://learn.witus.online/_next/static/chunks/main-app.js");
    expect(urls).toContain("https://learn.witus.online/_next/static/chunks/preloaded.js");
    expect(urls).toContain("https://learn.witus.online/_next/static/chunks/app/layout-abc.js");
  });

  it("never returns a cross-origin script, so the harness cannot be aimed at a third party", () => {
    const urls = extractScriptUrls(html, "https://learn.witus.online/");
    expect(urls.some((u) => u.includes("cdn.example.com"))).toBe(false);
  });
});

describe("cspSourceAllows", () => {
  const target = new URL("https://o4509999.ingest.us.sentry.io/api/4510000/envelope/");
  const page = new URL("https://learn.witus.online/");

  it("treats 'self' as the page origin only, which is the whole flashlearn failure", () => {
    expect(cspSourceAllows("'self'", target, page)).toBe(false);
    expect(cspSourceAllows("'self'", new URL("https://learn.witus.online/api/x"), page)).toBe(true);
  });

  it("matches an exact host, a scheme, and a wildcard subdomain", () => {
    expect(cspSourceAllows("https://o4509999.ingest.us.sentry.io", target, page)).toBe(true);
    expect(cspSourceAllows("o4509999.ingest.us.sentry.io", target, page)).toBe(true);
    expect(cspSourceAllows("*.sentry.io", target, page)).toBe(true);
    expect(cspSourceAllows("https:", target, page)).toBe(true);
    expect(cspSourceAllows("*", target, page)).toBe(true);
  });

  it("does not let a wildcard match the bare registrable domain, or a wrong host slip through", () => {
    expect(cspSourceAllows("*.sentry.io", new URL("https://sentry.io/api"), page)).toBe(false);
    expect(cspSourceAllows("https://o1111.ingest.de.sentry.io", target, page)).toBe(false);
    expect(cspSourceAllows("data:", target, page)).toBe(false);
    expect(cspSourceAllows("'none'", target, page)).toBe(false);
    expect(cspSourceAllows("'unsafe-inline'", target, page)).toBe(false);
    expect(cspSourceAllows("'nonce-abc123'", target, page)).toBe(false);
  });

  it("honours a port and a path when the policy carries one", () => {
    expect(cspSourceAllows("https://o4509999.ingest.us.sentry.io:443", target, page)).toBe(true);
    expect(cspSourceAllows("https://o4509999.ingest.us.sentry.io:8443", target, page)).toBe(false);
    expect(cspSourceAllows("https://o4509999.ingest.us.sentry.io/api/", target, page)).toBe(true);
    expect(cspSourceAllows("https://o4509999.ingest.us.sentry.io/other/", target, page)).toBe(false);
  });
});

describe("cspVerdict", () => {
  const dsn = parseDsn(DSN)!;
  const target = new URL(dsn.envelopeUrl);
  const page = new URL("https://learn.witus.online/");

  it("passes when there is no policy at all, and says why", () => {
    const finding = cspVerdict([], target, page);
    expect(finding.verdict).toBe("pass");
    expect(finding.detail).toContain("no enforced Content-Security-Policy");
  });

  it("passes a policy that constrains framing but not connections (learn.witus.online today)", () => {
    const policies = parseCspPolicies("frame-ancestors 'self'", "/ header");
    const finding = cspVerdict(policies, target, page);
    expect(finding.verdict).toBe("pass");
    expect(finding.detail).toContain("no connect-src and no default-src");
  });

  it("FAILS the exact policy that silently dropped every browser-side report", () => {
    const policies = parseCspPolicies("default-src 'self'; connect-src 'self' data:", "/ header");
    const finding = cspVerdict(policies, target, page);
    expect(finding.verdict).toBe("fail");
    expect(finding.detail).toContain("does not permit https://o4509999.ingest.us.sentry.io");
  });

  it("falls back to default-src when connect-src is absent, per the spec", () => {
    expect(cspVerdict(parseCspPolicies("default-src 'self'", "h"), target, page).verdict).toBe("fail");
    expect(cspVerdict(parseCspPolicies("default-src https:", "h"), target, page).verdict).toBe("pass");
  });

  it("treats an empty connect-src as 'none' rather than as no restriction", () => {
    expect(cspVerdict(parseCspPolicies("connect-src", "h"), target, page).verdict).toBe("fail");
  });

  it("requires EVERY policy to allow, since each is enforced independently", () => {
    const policies = parseCspPolicies(
      "connect-src https://o4509999.ingest.us.sentry.io, connect-src 'self'",
      "h",
    );
    expect(policies).toHaveLength(2);
    expect(cspVerdict(policies, target, page).verdict).toBe("fail");
  });

  it("passes once the ingest origin is added to connect-src", () => {
    const policies = parseCspPolicies(
      "default-src 'self'; connect-src 'self' https://o4509999.ingest.us.sentry.io",
      "h",
    );
    expect(cspVerdict(policies, target, page).verdict).toBe("pass");
  });
});

describe("extractMetaCsp", () => {
  it("finds a meta-delivered policy, which is enforced exactly like the header", () => {
    const html = `<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="connect-src 'self'">`;
    expect(extractMetaCsp(html)).toEqual(["connect-src 'self'"]);
  });

  it("returns nothing when there is no CSP meta tag", () => {
    expect(extractMetaCsp(`<meta name="viewport" content="width=device-width">`)).toEqual([]);
  });
});

describe("healthVerdict", () => {
  it("passes this app's real healthy payload", () => {
    const finding = healthVerdict({ ok: true, checks: { db: "ok" } });
    expect(finding.verdict).toBe("pass");
    expect(finding.detail).toContain("db=ok");
  });

  it("passes the shapes sibling apps use", () => {
    expect(healthVerdict({ status: "ok" }).verdict).toBe("pass");
    expect(healthVerdict({ healthy: true }).verdict).toBe("pass");
  });

  it("fails an explicit unhealthy payload", () => {
    expect(healthVerdict({ ok: false, error: "database_unreachable" }).verdict).toBe("fail");
    expect(healthVerdict({ status: "degraded" }).verdict).toBe("fail");
  });

  it("fails a payload that claims ok while a named check is failing", () => {
    const finding = healthVerdict({ ok: true, checks: { db: "fail" } });
    expect(finding.verdict).toBe("fail");
    expect(finding.detail).toContain("checks.db");
  });

  it("returns UNKNOWN, not pass, for a 200 body that affirms nothing", () => {
    for (const body of [{}, { version: "1.2.3" }, [], "OK", null, 42]) {
      expect(healthVerdict(body).verdict).toBe("unknown");
    }
  });
});
