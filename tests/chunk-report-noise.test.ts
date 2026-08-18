import { afterEach, describe, expect, it } from "vitest";
import { CHUNK_RELOAD_GUARD_KEY } from "@/components/chunk-error-reloader";
import { shouldReportChunkError } from "@/lib/client-error";

// The chunk-report noise gate (task 226's answer, automated): a chunk-load error is reported
// ONLY when the reloader's guard shows a reload was just attempted — i.e. the reload did not
// fix it. First-sight chunk errors are the reloader's to recover, silently.

function stubSessionStorage(value: string | null) {
  (globalThis as { sessionStorage?: unknown }).sessionStorage = {
    getItem: (k: string) => (k === CHUNK_RELOAD_GUARD_KEY ? value : null),
  };
}

afterEach(() => {
  delete (globalThis as { sessionStorage?: unknown }).sessionStorage;
});

describe("shouldReportChunkError", () => {
  it("always reports non-chunk errors", () => {
    stubSessionStorage(null);
    expect(shouldReportChunkError("TypeError: x is not a function")).toBe(true);
  });

  it("suppresses a first-sight chunk error (the reloader's job, not a report)", () => {
    stubSessionStorage(null);
    expect(shouldReportChunkError("Loading chunk 8039 failed.")).toBe(false);
  });

  it("reports a chunk error shortly after an attempted reload (the reload did not fix it)", () => {
    const now = 1_000_000;
    stubSessionStorage(String(now - 5_000));
    expect(shouldReportChunkError("Loading chunk 8039 failed.", now)).toBe(true);
  });

  it("treats a long-stale guard as first sight again", () => {
    const now = 1_000_000;
    stubSessionStorage(String(now - 120_000));
    expect(shouldReportChunkError("Loading chunk 8039 failed.", now)).toBe(false);
  });

  it("reports when sessionStorage is unavailable (no reloader guard possible either)", () => {
    // No stub: accessing sessionStorage throws in the node environment.
    expect(shouldReportChunkError("Loading CSS chunk 12 failed.")).toBe(true);
  });
});
