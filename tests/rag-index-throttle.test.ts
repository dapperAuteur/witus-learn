import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it, vi } from "vitest";
import {
  BATCH_MAX_REQUESTS,
  EMBED_DIMS,
  EmbedRateLimitError,
  backoffMs,
  embedTexts,
  estimateTokens,
  parseDurationMs,
  planBatches,
  retryDelayFromBody,
  type EmbedProgress,
} from "@/lib/rag/embed-batch";
import { RAG_HASH_HEADER, chunkText, courseRagContentHash } from "@/lib/rag/content-hash";
import { parseCoursesFile, parseRagIndexArgs } from "@/lib/rag/index-args";
import { classifyIndexState } from "@/lib/rag/index-course";

// The Gemini 429 fix (2026-11-01): `rag:index:prod --course where-we-rested` failed every time with
// RESOURCE_EXHAUSTED on the free tier's 30,000 embedding tokens a minute. No network and no database
// here: fetch and time are injected, so "waited 16 s, then retried the same batch" is asserted, not hoped.

const vec = () => Array.from({ length: EMBED_DIMS }, () => 0.5);

function ok(n: number) {
  return new Response(JSON.stringify({ embeddings: Array.from({ length: n }, () => ({ values: vec() })) }), { status: 200 });
}

function rateLimited(retryDelay?: string) {
  const details = retryDelay ? [{ "@type": "type.googleapis.com/google.rpc.RetryInfo", retryDelay }] : [];
  return new Response(
    JSON.stringify({ error: { code: 429, status: "RESOURCE_EXHAUSTED", message: "Embed content tokens per minute limit exceeded", details } }),
    { status: 429 },
  );
}

/** A fake clock: sleep advances time instead of waiting. */
function fakeClock() {
  let t = 1_000_000;
  const sleeps: number[] = [];
  return {
    now: () => t,
    sleep: async (ms: number) => {
      sleeps.push(ms);
      t += ms;
    },
    sleeps,
  };
}

type Call = { url: string; init: RequestInit; texts: string[] };

function fakeFetch(responses: (() => Response)[]) {
  const calls: Call[] = [];
  const impl = (async (url: string, init: RequestInit) => {
    const body = JSON.parse(String(init.body)) as { requests: { content: { parts: { text: string }[] } }[] };
    calls.push({ url, init, texts: body.requests.map((r) => r.content.parts[0].text) });
    const next = responses.shift();
    if (!next) throw new Error("unexpected fetch");
    return next();
  }) as unknown as typeof fetch;
  return { impl, calls };
}

describe("parsing Gemini's retry hint", () => {
  it("reads a protobuf duration", () => {
    expect(parseDurationMs("16s")).toBe(16_000);
    expect(parseDurationMs("1.5s")).toBe(1_500);
    expect(parseDurationMs("16")).toBeNull();
    expect(parseDurationMs(undefined)).toBeNull();
  });
  it("finds RetryInfo among the error details", () => {
    const body = {
      error: {
        details: [
          { "@type": "type.googleapis.com/google.rpc.QuotaFailure", violations: [] },
          { "@type": "type.googleapis.com/google.rpc.RetryInfo", retryDelay: "16s" },
        ],
      },
    };
    expect(retryDelayFromBody(body)).toBe(16_000);
    expect(retryDelayFromBody({ error: { details: [] } })).toBeNull();
    expect(retryDelayFromBody(null)).toBeNull();
  });
  it("backs off exponentially with jitter, capped at a minute", () => {
    expect(backoffMs(1, () => 0)).toBe(2_000);
    expect(backoffMs(2, () => 0)).toBe(4_000);
    expect(backoffMs(3, () => 0.5)).toBe(8_500);
    expect(backoffMs(10, () => 0)).toBe(60_000);
  });
});

describe("planning batches under the token budget", () => {
  it("estimates tokens conservatively (one per three characters)", () => {
    expect(estimateTokens("abc")).toBe(1);
    expect(estimateTokens("abcd")).toBe(2);
  });
  it("splits on the budget and on the per-call cap", () => {
    const texts = Array.from({ length: 10 }, () => "x".repeat(300)); // 100 tokens each
    expect(planBatches(texts, 250)).toEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]);
    const many = Array.from({ length: BATCH_MAX_REQUESTS + 5 }, () => "x");
    const b = planBatches(many, 1_000_000);
    expect(b.map((x) => x.length)).toEqual([BATCH_MAX_REQUESTS, 5]);
  });
});

describe("embedTexts", () => {
  it("waits the server's retryDelay on a 429 and retries the SAME batch", async () => {
    const clock = fakeClock();
    const { impl, calls } = fakeFetch([() => rateLimited("16s"), () => ok(2)]);
    const progress: EmbedProgress[] = [];
    const out = await embedTexts(["alpha", "beta"], {
      apiKey: "test-key",
      fetchImpl: impl,
      sleep: clock.sleep,
      now: clock.now,
      onProgress: (p) => progress.push(p),
    });
    expect(out).toHaveLength(2);
    expect(calls).toHaveLength(2);
    expect(calls[1].texts).toEqual(calls[0].texts);
    expect(clock.sleeps).toEqual([16_000]);
    expect(progress.some((p) => p.kind === "wait-429" && p.message === "batch 1/1, rate limited, waiting 16 s (retry 1/8)")).toBe(true);
  });

  it("with the real timer path (vitest fake timers), the retry does not fire before retryDelay", async () => {
    vi.useFakeTimers();
    try {
      const { impl, calls } = fakeFetch([() => rateLimited("16s"), () => ok(1)]);
      const done = embedTexts(["alpha"], { apiKey: "k", fetchImpl: impl });
      await vi.advanceTimersByTimeAsync(15_999);
      expect(calls).toHaveLength(1);
      await vi.advanceTimersByTimeAsync(1);
      await expect(done).resolves.toHaveLength(1);
      expect(calls).toHaveLength(2);
      expect(calls[1].texts).toEqual(["alpha"]);
    } finally {
      vi.useRealTimers();
    }
  });

  it("sends the key in a header, never in the URL, to the batch endpoint with 768 dimensions", async () => {
    const clock = fakeClock();
    const { impl, calls } = fakeFetch([() => ok(1)]);
    await embedTexts(["alpha"], { apiKey: "test-key", fetchImpl: impl, sleep: clock.sleep, now: clock.now });
    expect(calls[0].url).toBe("https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:batchEmbedContents");
    expect(calls[0].url).not.toContain("test-key");
    expect((calls[0].init.headers as Record<string, string>)["x-goog-api-key"]).toBe("test-key");
    const body = JSON.parse(String(calls[0].init.body));
    expect(body.requests[0]).toEqual({ model: "models/gemini-embedding-001", content: { parts: [{ text: "alpha" }] }, outputDimensionality: 768 });
  });

  it("backs off exponentially when the 429 names no retryDelay", async () => {
    const clock = fakeClock();
    const { impl } = fakeFetch([() => rateLimited(), () => rateLimited(), () => ok(1)]);
    await embedTexts(["alpha"], { apiKey: "k", fetchImpl: impl, sleep: clock.sleep, now: clock.now, random: () => 0 });
    expect(clock.sleeps).toEqual([2_000, 4_000]);
  });

  it("gives up after the retry limit with a rate-limit error", async () => {
    const clock = fakeClock();
    const { impl, calls } = fakeFetch(Array.from({ length: 4 }, () => () => rateLimited("1s")));
    await expect(
      embedTexts(["alpha"], { apiKey: "k", fetchImpl: impl, sleep: clock.sleep, now: clock.now, maxRetries: 3 }),
    ).rejects.toBeInstanceOf(EmbedRateLimitError);
    expect(calls).toHaveLength(4);
  });

  it("fails loudly on a non-429 error", async () => {
    const clock = fakeClock();
    const { impl } = fakeFetch([() => new Response("bad request", { status: 400 })]);
    await expect(embedTexts(["alpha"], { apiKey: "k", fetchImpl: impl, sleep: clock.sleep, now: clock.now })).rejects.toThrow(/400/);
  });

  it("waits at the minute boundary instead of exceeding the token budget", async () => {
    const clock = fakeClock();
    const texts = Array.from({ length: 4 }, () => "x".repeat(300)); // 100 tokens each
    const { impl, calls } = fakeFetch([() => ok(2), () => ok(2)]);
    const progress: EmbedProgress[] = [];
    await embedTexts(texts, {
      apiKey: "k",
      fetchImpl: impl,
      sleep: clock.sleep,
      now: clock.now,
      tokensPerMinute: 200,
      onProgress: (p) => progress.push(p),
    });
    expect(calls.map((c) => c.texts.length)).toEqual([2, 2]);
    expect(clock.sleeps).toEqual([60_000]);
    expect(progress.find((p) => p.kind === "wait-budget")?.message).toBe("batch 2/2, waiting 60 s for the per-minute token budget");
  });

  it("reads the budget and retry limit from the environment", async () => {
    process.env.RAG_EMBED_TOKENS_PER_MINUTE = "200";
    process.env.RAG_EMBED_MAX_RETRIES = "1";
    try {
      const clock = fakeClock();
      const { impl, calls } = fakeFetch([() => rateLimited("1s"), () => rateLimited("1s")]);
      await expect(
        embedTexts(["x".repeat(300), "x".repeat(300), "x".repeat(300)], { apiKey: "k", fetchImpl: impl, sleep: clock.sleep, now: clock.now }),
      ).rejects.toBeInstanceOf(EmbedRateLimitError);
      expect(calls[0].texts).toHaveLength(2); // the 200-token budget split the three texts
      expect(calls).toHaveLength(2); // one try plus one retry
    } finally {
      delete process.env.RAG_EMBED_TOKENS_PER_MINUTE;
      delete process.env.RAG_EMBED_MAX_RETRIES;
    }
  });
});

describe("the course content hash", () => {
  const lessons = [
    { title: "One", body: "First body." },
    { title: "Two", body: "Second body." },
    { title: "Quiz", body: null },
  ];
  const sources = [{ apa: "Smith, A. (2020). *A book*.", inText: "(Smith, 2020)" }, { apa: "", inText: "(Jones, 2019)" }, { apa: null, inText: null }];

  it("is stable and ignores order", () => {
    const a = courseRagContentHash(lessons, sources);
    expect(courseRagContentHash([...lessons].reverse(), [...sources].reverse())).toBe(a);
    expect(a).toMatch(/^[0-9a-f]{64}$/);
  });
  it("changes when a lesson body, a title or a citation changes", () => {
    const a = courseRagContentHash(lessons, sources);
    expect(courseRagContentHash([{ ...lessons[0], body: "First body!" }, ...lessons.slice(1)], sources)).not.toBe(a);
    expect(courseRagContentHash([{ ...lessons[0], title: "Uno" }, ...lessons.slice(1)], sources)).not.toBe(a);
    expect(courseRagContentHash(lessons, [{ apa: "Smith, A. (2021). *A book*.", inText: null }, ...sources.slice(1)])).not.toBe(a);
  });
  it("ignores what is never embedded (empty bodies and empty citations)", () => {
    const a = courseRagContentHash(lessons, sources);
    expect(courseRagContentHash([...lessons, { title: "Empty", body: "" }], [...sources, { apa: "", inText: "" }])).toBe(a);
  });
  it("names the model, dimensions and chunking in its header", () => {
    expect(RAG_HASH_HEADER).toBe("rag-v1|gemini-embedding-001|768|1800/200");
  });
  it("the SQL computes the same algorithm (md5 fingerprints, byte-order sort, sha256 over header and lines)", () => {
    const code = readFileSync(join(process.cwd(), "src/lib/rag/index-course.ts"), "utf8");
    expect(code).toContain("md5('L' || chr(31) || l.title || chr(31) || l.text_content)");
    expect(code).toContain("md5('C' || chr(31) || coalesce(nullif(s.apa, ''), s.in_text))");
    expect(code).toContain('order by i.fp collate "C"');
    expect(code).toContain("encode(sha256(convert_to(");
  });
  it("chunks exactly as the old indexer did", () => {
    expect(chunkText("a  b\r\n\n\n\nc")).toEqual(["a b\n\nc"]);
    const long = "x".repeat(4000);
    expect(chunkText(long).map((c) => c.length)).toEqual([1800, 1800, 800]);
  });
});

describe("index state", () => {
  it("classifies current, changed, never and empty", () => {
    expect(classifyIndexState({ indexedHash: "a", currentHash: "a", items: 3, hasChunks: true })).toBe("current");
    expect(classifyIndexState({ indexedHash: "a", currentHash: "b", items: 3, hasChunks: true })).toBe("changed");
    // Indexed before records existed: chunks but no hash, so re-index to be sure.
    expect(classifyIndexState({ indexedHash: null, currentHash: "b", items: 3, hasChunks: true })).toBe("changed");
    expect(classifyIndexState({ indexedHash: null, currentHash: "b", items: 3, hasChunks: false })).toBe("never");
    expect(classifyIndexState({ indexedHash: null, currentHash: "b", items: 0, hasChunks: false })).toBe("empty");
  });
});

describe("rag:index arguments", () => {
  it("parses each mode", () => {
    expect(parseRagIndexArgs(["--course", "hoodoo"])).toEqual({ mode: "course", course: "hoodoo", tenant: undefined, allTenants: false, sourceUrl: undefined });
    expect(parseRagIndexArgs(["--course", "rts", "--tenant", "speedway"])).toMatchObject({ mode: "course", tenant: "speedway" });
    expect(parseRagIndexArgs(["--course", "rts", "--all-tenants"])).toMatchObject({ mode: "course", allTenants: true });
    expect(parseRagIndexArgs(["--course", "h", "--source-url", "https://archive.org/x.txt"])).toMatchObject({ sourceUrl: "https://archive.org/x.txt" });
    expect(parseRagIndexArgs(["--courses-file", "changed.json"])).toEqual({ mode: "courses-file", path: "changed.json" });
    expect(parseRagIndexArgs(["--needing"])).toEqual({ mode: "needing", changedOnly: false });
    expect(parseRagIndexArgs(["--needing", "--changed-only"])).toEqual({ mode: "needing", changedOnly: true });
  });
  it("refuses ambiguous or incomplete input", () => {
    for (const bad of [
      [],
      ["--course"],
      ["--course", "--tenant", "x"],
      ["--course", "a", "--needing"],
      ["--course", "a", "--tenant", "t", "--all-tenants"],
      ["--course", "a", "--source-url", "ftp://x"],
      ["--course", "a", "--all-tenants", "--source-url", "https://x"],
      ["--courses-file"],
    ]) {
      expect(parseRagIndexArgs(bad), bad.join(" ")).toHaveProperty("error");
    }
  });
  it("validates the courses file the workflow writes", () => {
    expect(parseCoursesFile([{ tenantSlug: "learn-witus", courseSlug: "a" }, { tenantSlug: "learn-witus", courseSlug: "a" }])).toEqual([
      { tenantSlug: "learn-witus", courseSlug: "a" },
    ]);
    expect(parseCoursesFile({})).toHaveProperty("error");
    expect(parseCoursesFile([{ tenantSlug: "x" }])).toHaveProperty("error");
  });
});

describe("indexCourse rebuild rules (static, no database)", () => {
  const code = readFileSync(join(process.cwd(), "src/lib/rag/index-course.ts"), "utf8");
  it("keeps public-domain chunks unless a new source URL replaces them", () => {
    expect(code).toContain('opts.sourceUrl ? ["lesson", "citation", "public_domain_text"] : ["lesson", "citation"]');
  });
  it("embeds before deleting, and swaps chunks and the record in one transaction", () => {
    expect(code.indexOf("await embed(")).toBeLessThan(code.indexOf("db.transaction("));
    const tx = code.slice(code.indexOf("db.transaction("));
    expect(tx).toContain("tx\n      .delete(schema.sourceChunks)");
    expect(tx).toContain("tx.insert(schema.sourceChunks)");
    expect(tx).toContain("insert(schema.courseRagIndex)");
  });
  it("needs no server-only import, so tsx scripts can run it", () => {
    expect(code).not.toMatch(/import\s+["']server-only["']/);
    expect(readFileSync(join(process.cwd(), "src/lib/rag/embed-batch.ts"), "utf8")).not.toMatch(/import\s+["']server-only["']/);
  });
});
