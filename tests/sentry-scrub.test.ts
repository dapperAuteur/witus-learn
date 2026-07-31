import { describe, expect, it } from "vitest";
import type { ErrorEvent } from "@sentry/nextjs";
import { isSecretName, scrubEvent, scrubQueryStringText, scrubText } from "@/lib/sentry-scrub";

/**
 * The scrubber is the last thing standing between a crash and a third party holding a working
 * credential, so these tests assert against JSON.stringify(scrubbedEvent) rather than against the
 * one field we happened to think about: if a secret survives ANYWHERE in the payload (a breadcrumb,
 * an extra, a context, a nested object) the whole-event assertion still trips.
 *
 * Every credential fixture is ASSEMBLED AT RUNTIME. A Stripe- or Slack-shaped literal in a test file
 * is rejected by GitHub push protection, which has bounced sibling repos of this same module.
 */
const secret = (prefix: string, body: string) => [prefix, body].join("_");
const TOKEN = secret("mlt", "9f3aBc72Qz10XvNq44Lm");
const STRIPE_LIKE = ["sk", "live", "51Hq9ZzAbCdEfGhIjKlMnOp"].join("_");
const SLACK_LIKE = ["xoxb", "1234567890", "0987654321", "AbCdEfGhIjKlMnOpQrStUv"].join("-");
const JWT_LIKE = ["eyJhbGciOiJIUzI1NiJ9", "eyJzdWIiOiIxMjM0NSJ9", "V3rYS3cr3tS1gnatur3XY"].join(".");

const baseEvent = (over: Partial<ErrorEvent> = {}): ErrorEvent =>
  ({ event_id: "abc123", platform: "javascript", ...over }) as ErrorEvent;

const json = (event: ErrorEvent) => JSON.stringify(scrubEvent(event));

describe("isSecretName", () => {
  it("matches per name segment, including across underscores", () => {
    // The `\b` trap: /\b(secret)\b/ never fires inside INBOX_INGEST_SECRET because `_` is a word
    // character, so a boundary-based test lets the value through.
    expect(isSecretName("INBOX_INGEST_SECRET")).toBe(true);
    expect(isSecretName("client_secret")).toBe(true);
    expect(isSecretName("accessToken")).toBe(true);
    expect(isSecretName("APIKEY")).toBe(true);
    expect(isSecretName("x-api-key")).toBe(true);
  });

  it("does not treat a secret word as a substring of an innocent one", () => {
    for (const name of ["design", "keyboard", "passenger", "monkey", "designer", "encoded_video"]) {
      expect(isSecretName(name), name).toBe(false);
    }
  });

  it("keeps triage fields readable: state is not a secret", () => {
    for (const name of ["state", "statusCode", "country_code", "sortKey", "page", "courseId"]) {
      expect(isSecretName(name), name).toBe(false);
    }
  });
});

describe("query_string (the gap this branch closes)", () => {
  it("scrubs a RAW STRING query_string, which is never a parseable URL", () => {
    const event = baseEvent({ request: { url: "https://learn.witus.online/join", query_string: `token=${TOKEN}&page=3` } });
    const out = json(event);
    expect(out).not.toContain(TOKEN);
    // Counter-assertion: the harmless param stays readable, or the report is useless.
    expect(out).toContain("page=3");
  });

  it("scrubs a RECORD query_string", () => {
    const event = baseEvent({
      request: { query_string: { code: TOKEN, client_secret: STRIPE_LIKE, sort: "name" } },
    });
    const out = json(event);
    expect(out).not.toContain(TOKEN);
    expect(out).not.toContain(STRIPE_LIKE);
    expect(out).toContain("name");
  });

  it("scrubs an ARRAY-OF-PAIRS query_string", () => {
    const event = baseEvent({
      request: {
        query_string: [
          ["invite", TOKEN],
          ["utm_source", "newsletter"],
        ] as Array<[string, string]>,
      },
    });
    const out = json(event);
    expect(out).not.toContain(TOKEN);
    expect(out).toContain("newsletter");
  });

  it("does not mis-parse a full URL in the query_string field as name `https`", () => {
    // The trap: splitting on the first `:` reads the name as `https` (benign) and hands everything
    // after it through untouched.
    const out = scrubQueryStringText(`https://learn.witus.online/p?token=${TOKEN}`);
    expect(out).not.toContain(TOKEN);
  });

  it("leaves an entirely harmless query string alone", () => {
    expect(scrubQueryStringText("page=3&sort=name&state=open")).toBe("page=3&sort=name&state=open");
  });
});

describe("key-aware deep scrub", () => {
  it("blanks a bare value that only its KEY identifies as a credential", () => {
    // `hunter2` matches no value pattern anywhere. The key beside it is the only tell.
    const event = baseEvent({ extra: { client_secret: "hunter2", courseSlug: "knot-tying" } });
    const out = json(event);
    expect(out).not.toContain("hunter2");
    expect(out).toContain("knot-tying");
  });

  it("walks extra, tags, contexts and breadcrumbs", () => {
    const event = baseEvent({
      extra: { nested: { deep: { INBOX_INGEST_SECRET: STRIPE_LIKE } } },
      tags: { auth_token: TOKEN, tenant: "bvc" } as unknown as ErrorEvent["tags"],
      contexts: { app: { app_key: SLACK_LIKE } } as unknown as ErrorEvent["contexts"],
      breadcrumbs: [
        { category: "fetch", data: { url: `https://learn.witus.online/api/x?token=${TOKEN}` } },
        { category: "navigation", message: "navigated to /courses/knot-tying" },
      ],
    });
    const out = json(event);
    for (const leak of [STRIPE_LIKE, TOKEN, SLACK_LIKE]) expect(out).not.toContain(leak);
    expect(out).toContain("bvc");
    expect(out).toContain("knot-tying");
  });

  it("exempts contexts.trace so trace and span ids survive", () => {
    const event = baseEvent({
      contexts: {
        trace: { trace_id: "4b1e0f9a2c3d4e5f60718293a4b5c6d7", span_id: "a1b2c3d4e5f60718" },
      } as unknown as ErrorEvent["contexts"],
    });
    const out = json(event);
    expect(out).toContain("4b1e0f9a2c3d4e5f60718293a4b5c6d7");
    expect(out).toContain("a1b2c3d4e5f60718");
  });

  it("scrubs labelled secrets in a message, including a bearer header", () => {
    const event = baseEvent({ message: `POST failed: authorization=Bearer ${JWT_LIKE}` });
    expect(json(event)).not.toContain(JWT_LIKE);
  });
});

describe("fail-safe wrapper", () => {
  it("degrades to identifiers rather than shipping raw when the scrub throws", () => {
    const exploding = {
      event_id: "boom1",
      level: "error",
      exception: { values: [{ type: "TypeError" }] },
      get message(): string {
        throw new Error("scrubber bug");
      },
      extra: { client_secret: STRIPE_LIKE },
    } as unknown as ErrorEvent;

    const scrubbed = scrubEvent(exploding);
    const out = JSON.stringify(scrubbed);
    expect(out).not.toContain(STRIPE_LIKE);
    expect(scrubbed.event_id).toBe("boom1");
    expect(scrubbed.tags?.scrub_failed).toBe("true");
    expect(out).toContain("TypeError");
  });
});

describe("regex traps", () => {
  it("contains no lookbehind (a SyntaxError on iOS Safari below 16.4)", async () => {
    const { readFile } = await import("node:fs/promises");
    const source = await readFile(new URL("../src/lib/sentry-scrub.ts", import.meta.url), "utf8");
    const emailRedact = await readFile(new URL("../src/lib/email-redact.ts", import.meta.url), "utf8");
    // `(?<=` and `(?<!` — but NOT a named capture group `(?<name>`, which is fine everywhere.
    const LOOKBEHIND = /\(\?<[=!]/;
    expect(LOOKBEHIND.test(source)).toBe(false);
    expect(LOOKBEHIND.test(emailRedact)).toBe(false);
  });

  it("is idempotent: re-scrubbing never nests the placeholder", () => {
    const event = baseEvent({
      request: { url: `https://learn.witus.online/join?token=${TOKEN}`, query_string: `token=${TOKEN}&page=3` },
      extra: { client_secret: "hunter2" },
      message: `secret=${TOKEN}`,
    });
    const once = scrubEvent(structuredClone(event));
    const twice = scrubEvent(structuredClone(once));
    const out = JSON.stringify(twice);
    expect(out).not.toContain("[[redacted");
    expect(out).not.toContain("redacted]]");
    expect(out).toBe(JSON.stringify(once));
  });

  it("does not over-redact ordinary prose", () => {
    const prose = "The keyboard design encoded 3 lessons; state=open, page=2, statusCode=404.";
    expect(scrubText(prose)).toBe(prose);
  });
});

describe("existing guarantees still hold", () => {
  it("drops identity, cookies and auth headers", () => {
    const event = baseEvent({
      user: { id: "u1", email: "learner@example.com", ip_address: "203.0.113.9", username: "learner" },
      request: {
        url: "https://learn.witus.online/dashboard",
        cookies: { session: TOKEN },
        headers: { authorization: `Bearer ${JWT_LIKE}`, cookie: `s=${TOKEN}`, "user-agent": "Firefox" },
      },
    });
    const scrubbed = scrubEvent(event);
    const out = JSON.stringify(scrubbed);
    expect(out).not.toContain("learner@example.com");
    expect(out).not.toContain("203.0.113.9");
    expect(out).not.toContain(TOKEN);
    expect(out).not.toContain(JWT_LIKE);
    expect(scrubbed.user?.id).toBe("u1");
    expect(out).toContain("Firefox");
  });
});
