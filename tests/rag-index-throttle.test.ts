import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it, vi } from "vitest";
import {
  BATCH_MAX_TEXTS,
  EMBED_DIMS,
  EMBED_ENDPOINT,
  EmbedRateLimitError,
  MAX_REQUEST_TOKENS,
  backoffMs,
  embedQuery,
  embedTexts,
  estimateTokens,
  planBatches,
  retryAfterMs,
  type EmbedProgress,
} from "@/lib/rag/embed-batch";
import { RAG_HASH_HEADER, chunkText, courseRagContentHash } from "@/lib/rag/content-hash";
import { parseCoursesFile, parseRagIndexArgs } from "@/lib/rag/index-args";
import { classifyIndexState } from "@/lib/rag/index-course";

// The RAG embedder (Mistral since 2026-11-02, after Gemini's free tier failed rag:index:prod with
// 429s on 2026-11-01). No network and no database here: fetch and time are injected, so "waited
// 16 s, then retried the same batch" is asserted, not hoped. Mistral is never called.

const vec = (dims = EMBED_DIMS) => Array.from({ length: dims }, () => 0.5);

function ok(n: number, headers: Record<string, string> = {}, opts: { dims?: number; reverse?: boolean } = {}) {
  const data = Array.from({ length: n }, (_, i) => ({ object: "embedding", index: i, embedding: vec(opts.dims) }));
  if (opts.reverse) data.reverse();
  return new Response(JSON.stringify({ id: "x", object: "list", model: "mistral-embed", data, usage: { prompt_tokens: n } }), {
    status: 200,
    headers: { "content-type": "application/json", ...headers },
  });
}

function rateLimited(retryAfter?: string) {
  return new Response(JSON.stringify({ message: "Requests rate limit exceeded" }), {
    status: 429,
    headers: retryAfter ? { "retry-after": retryAfter } : {},
  });
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

type Call = { url: string; init: RequestInit; texts: string[]; model: string };

function fakeFetch(responses: (() => Response)[]) {
  const calls: Call[] = [];
  const impl = (async (url: string, init: RequestInit) => {
    const body = JSON.parse(String(init.body)) as { model: string; input: string[] };
    calls.push({ url, init, texts: body.input, model: body.model });
    const next = responses.shift();
    if (!next) throw new Error("unexpected fetch");
    return next();
  }) as unknown as typeof fetch;
  return { impl, calls };
}

describe("reading the server's retry hints", () => {
  it("reads Retry-After as seconds or as an HTTP date", () => {
    expect(retryAfterMs("16")).toBe(16_000);
    expect(retryAfterMs("1.5")).toBe(1_500);
    expect(retryAfterMs("Wed, 21 Oct 2015 07:28:10 GMT", Date.parse("Wed, 21 Oct 2015 07:28:00 GMT"))).toBe(10_000);
    expect(retryAfterMs("soon")).toBeNull();
    expect(retryAfterMs(null)).toBeNull();
  });
  it("backs off exponentially with jitter, capped at a minute", () => {
    expect(backoffMs(1, () => 0)).toBe(2_000);
    expect(backoffMs(2, () => 0)).toBe(4_000);
    expect(backoffMs(3, () => 0.5)).toBe(8_500);
    expect(backoffMs(10, () => 0)).toBe(60_000);
  });
});

describe("planning batches", () => {
  it("estimates tokens conservatively (one per three characters)", () => {
    expect(estimateTokens("abc")).toBe(1);
    expect(estimateTokens("abcd")).toBe(2);
  });
  it("splits on the token cap and on the per-request text cap", () => {
    const texts = Array.from({ length: 10 }, () => "x".repeat(300)); // 100 tokens each
    expect(planBatches(texts, 250)).toEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]);
    const many = Array.from({ length: BATCH_MAX_TEXTS + 5 }, () => "x");
    expect(planBatches(many, 1_000_000).map((x) => x.length)).toEqual([BATCH_MAX_TEXTS, 5]);
  });
  it("a course's 1,800-character chunks go about thirteen to a request under our own cap", async () => {
    const clock = fakeClock();
    const chunks = Array.from({ length: 30 }, () => "x".repeat(1800)); // 600 estimated tokens each
    const { impl, calls } = fakeFetch([() => ok(13), () => ok(13), () => ok(4)]);
    const out = await embedTexts(chunks, { apiKey: "k", fetchImpl: impl, sleep: clock.sleep, now: clock.now });
    expect(out).toHaveLength(30);
    expect(calls.map((c) => c.texts.length)).toEqual([13, 13, 4]);
    for (const c of calls) expect(c.texts.reduce((s, t) => s + estimateTokens(t), 0)).toBeLessThanOrEqual(MAX_REQUEST_TOKENS);
  });
});

describe("embedTexts (Mistral)", () => {
  it("posts the batch to Mistral with the key as a Bearer header, never in the URL", async () => {
    const clock = fakeClock();
    const { impl, calls } = fakeFetch([() => ok(2)]);
    await embedTexts(["alpha", "beta"], { apiKey: "test-key", fetchImpl: impl, sleep: clock.sleep, now: clock.now });
    expect(calls[0].url).toBe("https://api.mistral.ai/v1/embeddings");
    expect(EMBED_ENDPOINT).toBe(calls[0].url);
    expect(calls[0].url).not.toContain("test-key");
    expect((calls[0].init.headers as Record<string, string>).authorization).toBe("Bearer test-key");
    expect(JSON.parse(String(calls[0].init.body))).toEqual({ model: "mistral-embed", input: ["alpha", "beta"] });
  });

  it("places vectors by the response's index, not its array order", async () => {
    const clock = fakeClock();
    const { impl } = fakeFetch([
      () =>
        new Response(
          JSON.stringify({
            data: [
              { index: 1, embedding: vec().map(() => 1) },
              { index: 0, embedding: vec().map(() => 0) },
            ],
          }),
          { status: 200 },
        ),
    ]);
    const out = await embedTexts(["a", "b"], { apiKey: "k", fetchImpl: impl, sleep: clock.sleep, now: clock.now });
    expect(out[0][0]).toBe(0);
    expect(out[1][0]).toBe(1);
  });

  it("refuses a vector that is not 1024 dimensions, and a count mismatch", async () => {
    const clock = fakeClock();
    expect(EMBED_DIMS).toBe(1024);
    const a = fakeFetch([() => ok(1, {}, { dims: 768 })]);
    await expect(embedTexts(["a"], { apiKey: "k", fetchImpl: a.impl, sleep: clock.sleep, now: clock.now })).rejects.toThrow(/dimension 768/);
    const b = fakeFetch([() => ok(1)]);
    await expect(embedTexts(["a", "b"], { apiKey: "k", fetchImpl: b.impl, sleep: clock.sleep, now: clock.now })).rejects.toThrow(
      /1 embeddings for 2 texts/,
    );
  });

  it("waits Retry-After on a 429 and retries the SAME batch", async () => {
    const clock = fakeClock();
    const { impl, calls } = fakeFetch([() => rateLimited("16"), () => ok(2)]);
    const progress: EmbedProgress[] = [];
    const out = await embedTexts(["alpha", "beta"], {
      apiKey: "k",
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

  it("with the real timer path (vitest fake timers), the retry does not fire before Retry-After", async () => {
    vi.useFakeTimers();
    try {
      const { impl, calls } = fakeFetch([() => rateLimited("16"), () => ok(1)]);
      const done = embedTexts(["alpha"], { apiKey: "k", fetchImpl: impl });
      await vi.advanceTimersByTimeAsync(15_999);
      expect(calls).toHaveLength(1);
      await vi.advanceTimersByTimeAsync(1);
      await expect(done).resolves.toHaveLength(1);
      expect(calls).toHaveLength(2);
    } finally {
      vi.useRealTimers();
    }
  });

  it("backs off exponentially when the 429 names no Retry-After", async () => {
    const clock = fakeClock();
    const { impl } = fakeFetch([() => rateLimited(), () => rateLimited(), () => ok(1)]);
    await embedTexts(["alpha"], { apiKey: "k", fetchImpl: impl, sleep: clock.sleep, now: clock.now, random: () => 0 });
    expect(clock.sleeps).toEqual([2_000, 4_000]);
  });

  it("gives up after the retry limit with a rate-limit error", async () => {
    const clock = fakeClock();
    const { impl, calls } = fakeFetch(Array.from({ length: 4 }, () => () => rateLimited("1")));
    await expect(
      embedTexts(["alpha"], { apiKey: "k", fetchImpl: impl, sleep: clock.sleep, now: clock.now, maxRetries: 3 }),
    ).rejects.toBeInstanceOf(EmbedRateLimitError);
    expect(calls).toHaveLength(4);
  });

  it("fails loudly on a non-429 error, and with no key", async () => {
    const clock = fakeClock();
    const { impl } = fakeFetch([() => new Response("bad request", { status: 400 })]);
    await expect(embedTexts(["alpha"], { apiKey: "k", fetchImpl: impl, sleep: clock.sleep, now: clock.now })).rejects.toThrow(/400/);
    const saved = process.env.MISTRAL_API_KEY;
    delete process.env.MISTRAL_API_KEY;
    try {
      await expect(embedTexts(["alpha"], { fetchImpl: impl })).rejects.toThrow("MISTRAL_API_KEY is not set.");
    } finally {
      if (saved !== undefined) process.env.MISTRAL_API_KEY = saved;
    }
  });

  it("paces requests under the per-minute request limit", async () => {
    const clock = fakeClock();
    const texts = Array.from({ length: 3 }, () => "x".repeat(300));
    const { impl, calls } = fakeFetch([() => ok(1), () => ok(1), () => ok(1)]);
    const progress: EmbedProgress[] = [];
    await embedTexts(texts, {
      apiKey: "k",
      fetchImpl: impl,
      sleep: clock.sleep,
      now: clock.now,
      batchSize: 1,
      requestsPerMinute: 2,
      onProgress: (p) => progress.push(p),
    });
    expect(calls).toHaveLength(3);
    expect(clock.sleeps).toEqual([60_000]);
    expect(progress.find((p) => p.kind === "wait-budget")?.message).toBe("batch 3/3, waiting 60 s for the per-minute request budget");
  });

  it("waits for the minute to turn when the server says no requests remain", async () => {
    const clock = fakeClock();
    const { impl, calls } = fakeFetch([() => ok(1, { "x-ratelimit-remaining-req-minute": "0" }), () => ok(1)]);
    const progress: EmbedProgress[] = [];
    await embedTexts(["a", "b"], {
      apiKey: "k",
      fetchImpl: impl,
      sleep: clock.sleep,
      now: clock.now,
      batchSize: 1,
      onProgress: (p) => progress.push(p),
    });
    expect(calls).toHaveLength(2);
    expect(clock.sleeps).toEqual([60_000]);
    expect(progress.find((p) => p.kind === "wait-budget")?.message).toContain("the server's per-minute limit");
  });

  it("an optional token budget still paces at the minute boundary", async () => {
    const clock = fakeClock();
    const texts = Array.from({ length: 4 }, () => "x".repeat(300)); // 100 tokens each
    const { impl, calls } = fakeFetch([() => ok(2), () => ok(2)]);
    await embedTexts(texts, { apiKey: "k", fetchImpl: impl, sleep: clock.sleep, now: clock.now, tokensPerMinute: 200 });
    expect(calls.map((c) => c.texts.length)).toEqual([2, 2]);
    expect(clock.sleeps).toEqual([60_000]);
  });

  it("reads the request limit and retry limit from the environment", async () => {
    process.env.RAG_EMBED_REQUESTS_PER_MINUTE = "1";
    process.env.RAG_EMBED_MAX_RETRIES = "1";
    try {
      const clock = fakeClock();
      const { impl, calls } = fakeFetch([() => ok(1), () => rateLimited("1"), () => rateLimited("1")]);
      await expect(
        embedTexts(["a", "b"], { apiKey: "k", fetchImpl: impl, sleep: clock.sleep, now: clock.now, batchSize: 1 }),
      ).rejects.toBeInstanceOf(EmbedRateLimitError);
      expect(clock.sleeps[0]).toBe(60_000); // one request a minute
      expect(calls).toHaveLength(3); // the first batch, then one try plus one retry on the second
    } finally {
      delete process.env.RAG_EMBED_REQUESTS_PER_MINUTE;
      delete process.env.RAG_EMBED_MAX_RETRIES;
    }
  });

  it("embedQuery embeds one question with the same model and retries a 429 at most twice", async () => {
    const clock = fakeClock();
    const { impl, calls } = fakeFetch([() => rateLimited("1"), () => rateLimited("1"), () => rateLimited("1")]);
    await expect(embedQuery("why the grid?", { apiKey: "k", fetchImpl: impl, sleep: clock.sleep, now: clock.now })).rejects.toBeInstanceOf(
      EmbedRateLimitError,
    );
    expect(calls).toHaveLength(3);
    expect(calls[0].model).toBe("mistral-embed");
    const ok1 = fakeFetch([() => ok(1)]);
    expect(await embedQuery("q", { apiKey: "k", fetchImpl: ok1.impl, sleep: clock.sleep, now: clock.now })).toHaveLength(1024);
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
    expect(RAG_HASH_HEADER).toBe("rag-v1|mistral-embed|1024|1800/200");
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
  it("writes and reads only the 1024-dim column; the legacy Gemini column is left alone", () => {
    expect(code).toContain("embeddingV2: vectors[i]");
    expect(code).not.toMatch(/\bembedding: vectors/);
    const q = readFileSync(join(process.cwd(), "src/db/queries/source-chunks.ts"), "utf8");
    expect(q).toContain("${sourceChunks.embeddingV2} <=> ${vec}::vector");
    expect(q).not.toContain("${sourceChunks.embedding} <=>");
    // The question is embedded with the index's model, never with CYOA's Gemini embedder.
    const chat = readFileSync(join(process.cwd(), "src/lib/ai/source-chat.ts"), "utf8");
    expect(chat).toContain("await embedQuery(question)");
    expect(chat).not.toMatch(/from "\.\/embeddings"/);
  });
  it("the migration is additive and indexes the new column by hand", () => {
    const m = readFileSync(join(process.cwd(), "src/db/migrations/0076_rag_mistral_embedding_v2.sql"), "utf8");
    expect(m).toContain('ADD COLUMN IF NOT EXISTS "embedding_v2" vector(1024)');
    expect(m).toContain('USING hnsw ("embedding_v2" vector_cosine_ops)');
    const statements = m.split("\n").filter((l) => !l.trim().startsWith("--")).join("\n");
    expect(statements).not.toMatch(/\bDROP\b/i);
  });
  it("needs no server-only import, so tsx scripts can run it", () => {
    expect(code).not.toMatch(/import\s+["']server-only["']/);
    expect(readFileSync(join(process.cwd(), "src/lib/rag/embed-batch.ts"), "utf8")).not.toMatch(/import\s+["']server-only["']/);
  });
});
