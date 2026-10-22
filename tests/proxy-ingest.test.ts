import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { proxy, config } from "@/proxy";

/**
 * The PostHog proxy (/ingest → us.i.posthog.com, next.config.ts) has two silent failure modes this
 * file guards: middleware catching /ingest (it runs BEFORE rewrites, so any redirect eats every
 * event), and skipTrailingSlashRedirect leaving pages reachable at two URLs.
 */

// Next compiles the matcher with path-to-regexp; the single entry here is a plain negative
// lookahead, so anchoring it as a regex is an exact model of what it matches.
const matcher = new RegExp(`^${config.matcher[0]}$`);

describe("proxy matcher", () => {
  it("never runs on the PostHog ingest proxy", () => {
    expect(matcher.test("/ingest/e/")).toBe(false);
    expect(matcher.test("/ingest/static/array.js")).toBe(false);
    expect(matcher.test("/ingest/decide/")).toBe(false);
  });

  it("still runs on page routes", () => {
    expect(matcher.test("/")).toBe(true);
    expect(matcher.test("/courses/some-course")).toBe(true);
  });
});

describe("proxy trailing-slash redirect", () => {
  it("308s a page URL with a trailing slash to the slashless one, keeping the query", () => {
    const res = proxy(new NextRequest("https://learn.witus.online/courses/?tab=all"));
    expect(res.status).toBe(308);
    expect(res.headers.get("location")).toBe("https://learn.witus.online/courses?tab=all");
  });

  it("leaves the root and slashless paths alone", () => {
    expect(proxy(new NextRequest("https://learn.witus.online/")).status).toBe(200);
    expect(proxy(new NextRequest("https://learn.witus.online/courses")).status).toBe(200);
  });
});
