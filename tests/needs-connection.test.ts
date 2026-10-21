import { afterEach, describe, expect, it, vi } from "vitest";
import {
  NEEDS_CONNECTION,
  NeedsConnectionError,
  failureMessage,
  isOffline,
  serverFetch,
} from "@/lib/needs-connection";

/** "Needs a connection": the one message server-backed buttons show when there is no network. */

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("serverFetch", () => {
  it("fails at once, without trying, when the browser is offline", async () => {
    const fetchSpy = vi.fn();
    vi.stubGlobal("navigator", { onLine: false });
    vi.stubGlobal("fetch", fetchSpy);
    await expect(serverFetch("/api/courses/c1/enroll", { method: "POST" })).rejects.toBeInstanceOf(
      NeedsConnectionError,
    );
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("turns a network failure into NeedsConnectionError, keeping the cause", async () => {
    const cause = new TypeError("Failed to fetch");
    vi.stubGlobal("navigator", { onLine: true });
    vi.stubGlobal("fetch", vi.fn(async () => Promise.reject(cause)));
    const err = await serverFetch("/api/x").catch((e: unknown) => e);
    expect(err).toBeInstanceOf(NeedsConnectionError);
    expect((err as Error).cause).toBe(cause);
  });

  it("resolves a server answer of any status, so callers keep their own message for it", async () => {
    vi.stubGlobal("navigator", { onLine: true });
    vi.stubGlobal("fetch", vi.fn(async () => new Response("no", { status: 403 })));
    expect((await serverFetch("/api/x")).status).toBe(403);
  });

  it("passes an abort through untouched", async () => {
    vi.stubGlobal("navigator", { onLine: true });
    vi.stubGlobal("fetch", vi.fn(async () => Promise.reject(new DOMException("aborted", "AbortError"))));
    const err = await serverFetch("/api/x").catch((e: unknown) => e);
    expect(err).not.toBeInstanceOf(NeedsConnectionError);
    expect((err as DOMException).name).toBe("AbortError");
  });
});

describe("failureMessage and isOffline", () => {
  it("says 'Needs a connection' for no network, and the caller's own words otherwise", () => {
    expect(failureMessage(new NeedsConnectionError(), "Could not enroll.")).toBe(NEEDS_CONNECTION);
    expect(failureMessage(new Error("boom"), "Could not enroll.")).toBe("Could not enroll.");
    expect(NEEDS_CONNECTION).toMatch(/^Needs a connection/);
  });

  it("reports offline only when the browser says so", () => {
    vi.stubGlobal("navigator", { onLine: false });
    expect(isOffline()).toBe(true);
    vi.stubGlobal("navigator", { onLine: true });
    expect(isOffline()).toBe(false);
    vi.stubGlobal("navigator", undefined);
    expect(isOffline()).toBe(false);
  });
});
