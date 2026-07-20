import { describe, expect, it } from "vitest";
import { isChunkLoadError } from "@/components/chunk-error-reloader";

/**
 * The stale-deploy recovery only fires on a real ChunkLoadError, and it MUST fire on the exact
 * shapes production throws — a wrong matcher either loops-reloads on unrelated errors or does nothing
 * on the one it exists for. These pin both the real messages users hit (bettervice.club: "Loading
 * chunk 5035 failed") and the errors it must leave alone.
 */
describe("isChunkLoadError", () => {
  it("matches the webpack ChunkLoadError by name", () => {
    expect(isChunkLoadError({ name: "ChunkLoadError", message: "whatever" })).toBe(true);
  });

  it("matches the real production messages", () => {
    expect(isChunkLoadError(new Error("Loading chunk 5035 failed."))).toBe(true);
    expect(isChunkLoadError(new Error("Loading chunk 9760 failed."))).toBe(true);
    expect(isChunkLoadError(new Error("Loading CSS chunk app-layout failed."))).toBe(true);
    expect(isChunkLoadError("Loading chunk 42 failed. (missing: /_next/static/…)")).toBe(true);
  });

  it("leaves unrelated errors alone (no reload storm)", () => {
    expect(isChunkLoadError(new Error("Network request failed"))).toBe(false);
    expect(isChunkLoadError(new TypeError("Cannot read properties of undefined"))).toBe(false);
    expect(isChunkLoadError("A quiz failed to submit")).toBe(false);
    expect(isChunkLoadError(null)).toBe(false);
    expect(isChunkLoadError(undefined)).toBe(false);
    expect(isChunkLoadError({})).toBe(false);
  });
});
