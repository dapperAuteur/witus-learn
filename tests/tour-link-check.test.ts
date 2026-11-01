import { describe, expect, it, vi } from "vitest";
import { checkTourLink, describeLinkCheck, isBlockedHost, isCheckableUrl } from "@/lib/tour-link-check";

// "Check link" (plans/96 v2): a server-side fetch of a stored link, fenced so it can only reach public
// https hosts, follows at most 3 redirects (each checked), and never reads the body.

const answer = (status: number, location?: string) =>
  new Response(null, { status, headers: location ? { location } : undefined });

describe("which links may be fetched", () => {
  it("allows public https hosts only", () => {
    expect(isCheckableUrl("https://drive.google.com/file/d/x/view")).not.toBeNull();
    for (const bad of [
      "http://example.org/a.jpg",
      "https://localhost/a.jpg",
      "https://127.0.0.1/a.jpg",
      "https://169.254.169.254/latest/meta-data",
      "https://10.0.0.5/a.jpg",
      "https://[::1]/a.jpg",
      "https://intranet/a.jpg",
      "https://printer.local/a.jpg",
      "https://user:pass@example.org/a.jpg",
      "https://example.org:8443/a.jpg",
      "not a url",
    ]) {
      expect({ bad, ok: isCheckableUrl(bad) !== null }).toEqual({ bad, ok: false });
    }
    expect(isBlockedHost("metadata.google.internal")).toBe(true);
  });
});

describe("checkTourLink", () => {
  it("reports a 200 as reachable, a 404 as not", async () => {
    expect(await checkTourLink("https://example.org/a.jpg", { fetchImpl: async () => answer(200) })).toEqual({
      status: 200,
      reachable: true,
      finalHost: "example.org",
      redirects: 0,
    });
    expect(await checkTourLink("https://example.org/a.jpg", { fetchImpl: async () => answer(404) })).toMatchObject({
      status: 404,
      reachable: false,
    });
  });

  it("follows up to 3 redirects, re-checking each hop, and names where it ended", async () => {
    const hops = [answer(302, "https://www.example.net/b"), answer(301, "/c"), answer(200)];
    const fetchImpl = vi.fn(async () => hops.shift()!);
    expect(await checkTourLink("https://example.org/a", { fetchImpl })).toEqual({
      status: 200,
      reachable: true,
      finalHost: "example.net",
      redirects: 2,
    });
    expect(fetchImpl.mock.calls.map((c) => (c as unknown as [string])[0])).toEqual([
      "https://example.org/a",
      "https://www.example.net/b",
      "https://www.example.net/c",
    ]);
  });

  it("stops after 3 redirects, and refuses a redirect to a private host", async () => {
    const loop = vi.fn(async () => answer(302, "https://example.org/again"));
    expect(await checkTourLink("https://example.org/a", { fetchImpl: loop })).toMatchObject({ error: "too_many_redirects" });
    expect(loop).toHaveBeenCalledTimes(4);
    const sneaky = async () => answer(302, "https://169.254.169.254/latest");
    expect(await checkTourLink("https://example.org/a", { fetchImpl: sneaky })).toMatchObject({ error: "blocked" });
  });

  it("does not fetch a blocked link at all, and reports a timeout and a network failure", async () => {
    const never = vi.fn(async () => answer(200));
    expect(await checkTourLink("http://example.org/a", { fetchImpl: never })).toMatchObject({ error: "blocked" });
    expect(never).not.toHaveBeenCalled();
    const slow = async (_u: string, init: RequestInit) =>
      new Promise<Response>((_, reject) => init.signal?.addEventListener("abort", () => reject(init.signal?.reason)));
    expect(await checkTourLink("https://example.org/a", { fetchImpl: slow, timeoutMs: 20 })).toMatchObject({ error: "timeout" });
    const down = async () => {
      throw new TypeError("fetch failed");
    };
    expect(await checkTourLink("https://example.org/a", { fetchImpl: down })).toMatchObject({ error: "network" });
  });
});

describe("describeLinkCheck", () => {
  it("says what happened in one sentence, naming a different final host", () => {
    expect(describeLinkCheck({ status: 200, reachable: true, finalHost: "drive.google.com", redirects: 0 }, "drive.google.com")).toBe(
      "Reachable: the link answered 200.",
    );
    expect(
      describeLinkCheck({ status: 200, reachable: true, finalHost: "accounts.google.com", redirects: 2 }, "drive.google.com"),
    ).toContain("accounts.google.com");
    expect(describeLinkCheck({ status: null, reachable: false, error: "timeout" }, "x")).toContain("5 seconds");
  });
});
