// Throttled, retrying Gemini embeddings for the "chat with the sources" index (plans/97 Q5).
//
// WHY THIS EXISTS. `pnpm rag:index:prod --course where-we-rested` failed every time with Gemini 429
// RESOURCE_EXHAUSTED ("Embed content tokens per minute limit exceeded on Free Tier", quota 30,000
// tokens per minute for the embedding model). One course can hold more than 30,000 tokens, and the
// old script sent one request per chunk as fast as it could, so it could never finish. This module:
//   1. sends chunks in BATCHES (batchEmbedContents, at most BATCH_MAX_REQUESTS texts per call),
//   2. keeps a sliding one-minute token budget (default 25,000, under the 30,000 quota) and waits at
//      the minute boundary rather than hitting the limit,
//   3. on a 429, waits the server's RetryInfo `retryDelay` (or backs off exponentially with jitter
//      when the body names none) and retries the SAME batch, up to a limit,
//   4. fails loudly on anything else (a 400 or 500 is a bug or an outage, not a rate limit).
//
// Endpoint and shape confirmed against Google's API reference on 2026-11-01
// (https://ai.google.dev/api/embeddings): POST
// https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:batchEmbedContents
// with `{ requests: [{ model, content: { parts: [{ text }] }, outputDimensionality }] }`, the key in the
// `x-goog-api-key` header (never in the URL), and `embeddings[].values` returned in request order.
// The reference states no per-batch request cap; BATCH_MAX_REQUESTS = 100 is our own conservative cap.
//
// PURE apart from `fetch` and timers, both injectable, so tests run with no network and fake time.

export const GEMINI_EMBED_MODEL = "gemini-embedding-001";
export const EMBED_DIMS = 768;
/** Our own cap on texts per batch call (the API reference names none). */
export const BATCH_MAX_REQUESTS = 100;
/** Characters sent per text, as the old per-chunk call did (chunks are 1,800 characters anyway). */
export const MAX_TEXT_CHARS = 8000;
export const DEFAULT_TOKENS_PER_MINUTE = 25_000;
export const DEFAULT_MAX_RETRIES = 8;
const WINDOW_MS = 60_000;
const BACKOFF_BASE_MS = 2_000;
const BACKOFF_CAP_MS = 60_000;

const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_EMBED_MODEL}:batchEmbedContents`;

/**
 * A CONSERVATIVE token estimate: one token per three characters, rounded up. English prose runs near
 * four characters per token, so this over-counts by about a third, which only makes the budget
 * stricter. Calling Gemini's countTokens first would cost a request per batch against the same quota.
 */
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 3);
}

/** Split texts (by index) into batches of at most `batchSize` texts and `tokenBudget` estimated tokens. */
export function planBatches(texts: readonly string[], tokenBudget: number, batchSize = BATCH_MAX_REQUESTS): number[][] {
  const out: number[][] = [];
  let cur: number[] = [];
  let curTokens = 0;
  texts.forEach((t, i) => {
    const tokens = estimateTokens(t.slice(0, MAX_TEXT_CHARS));
    if (cur.length > 0 && (cur.length >= batchSize || curTokens + tokens > tokenBudget)) {
      out.push(cur);
      cur = [];
      curTokens = 0;
    }
    cur.push(i);
    curTokens += tokens;
  });
  if (cur.length) out.push(cur);
  return out;
}

/** Parse a protobuf Duration string such as "16s" or "1.5s" into milliseconds. */
export function parseDurationMs(value: unknown): number | null {
  if (typeof value !== "string") return null;
  const m = /^(\d+(?:\.\d+)?)s$/.exec(value.trim());
  return m ? Math.round(Number(m[1]) * 1000) : null;
}

/** The RetryInfo retryDelay from a Google API error body, in ms, or null when it names none. */
export function retryDelayFromBody(body: unknown): number | null {
  const details = (body as { error?: { details?: unknown } } | null)?.error?.details;
  if (!Array.isArray(details)) return null;
  for (const d of details) {
    if (d && typeof d === "object" && String((d as Record<string, unknown>)["@type"] ?? "").endsWith("google.rpc.RetryInfo")) {
      const ms = parseDurationMs((d as Record<string, unknown>).retryDelay);
      if (ms != null) return ms;
    }
  }
  return null;
}

/** Exponential backoff with jitter for a 429 that names no retryDelay. attempt is 1-based. */
export function backoffMs(attempt: number, random: () => number = Math.random): number {
  const base = Math.min(BACKOFF_CAP_MS, BACKOFF_BASE_MS * 2 ** (attempt - 1));
  return base + Math.floor(random() * 1000);
}

export interface EmbedProgress {
  kind: "batch" | "wait-budget" | "wait-429";
  batch: number;
  batches: number;
  waitMs?: number;
  message: string;
}

export interface EmbedTextsOptions {
  apiKey?: string;
  tokensPerMinute?: number;
  maxRetries?: number;
  batchSize?: number;
  onProgress?: (p: EmbedProgress) => void;
  fetchImpl?: typeof fetch;
  sleep?: (ms: number) => Promise<void>;
  now?: () => number;
  random?: () => number;
}

export class EmbedRateLimitError extends Error {}

const realSleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function envInt(name: string): number | undefined {
  const v = process.env[name];
  if (!v) return undefined;
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : undefined;
}

const seconds = (ms: number) => `${Math.round(ms / 100) / 10} s`;

/**
 * Embed every text (768 dimensions each), in order. Throws on a non-429 error, on a malformed
 * response, and after `maxRetries` consecutive 429s on one batch.
 */
export async function embedTexts(texts: readonly string[], opts: EmbedTextsOptions = {}): Promise<number[][]> {
  if (texts.length === 0) return [];
  const apiKey = opts.apiKey ?? process.env.GOOGLE_GEMINI_API_KEY;
  if (!apiKey) throw new Error("GOOGLE_GEMINI_API_KEY is not set.");
  const budget = opts.tokensPerMinute ?? envInt("RAG_EMBED_TOKENS_PER_MINUTE") ?? DEFAULT_TOKENS_PER_MINUTE;
  const maxRetries = opts.maxRetries ?? envInt("RAG_EMBED_MAX_RETRIES") ?? DEFAULT_MAX_RETRIES;
  const doFetch = opts.fetchImpl ?? fetch;
  const sleep = opts.sleep ?? realSleep;
  const now = opts.now ?? Date.now;
  const report = opts.onProgress ?? (() => {});

  const clipped = texts.map((t) => t.slice(0, MAX_TEXT_CHARS));
  const batches = planBatches(clipped, budget, opts.batchSize ?? BATCH_MAX_REQUESTS);
  const out: number[][] = new Array(texts.length);
  // Tokens sent in the last minute, as [timestamp, tokens], oldest first.
  const sent: [number, number][] = [];

  for (let b = 0; b < batches.length; b++) {
    const idx = batches[b];
    const tokens = idx.reduce((s, i) => s + estimateTokens(clipped[i]), 0);
    const label = `batch ${b + 1}/${batches.length}`;

    // Wait at the minute boundary until this batch fits the budget.
    for (;;) {
      const t = now();
      while (sent.length && t - sent[0][0] >= WINDOW_MS) sent.shift();
      const used = sent.reduce((s, [, n]) => s + n, 0);
      if (used + tokens <= budget || sent.length === 0) break;
      const waitMs = sent[0][0] + WINDOW_MS - t;
      report({ kind: "wait-budget", batch: b + 1, batches: batches.length, waitMs, message: `${label}, waiting ${seconds(waitMs)} for the per-minute token budget` });
      await sleep(waitMs);
    }

    for (let attempt = 1; ; attempt++) {
      report({ kind: "batch", batch: b + 1, batches: batches.length, message: `${label} (${idx.length} texts, about ${tokens} tokens)` });
      sent.push([now(), tokens]);
      const res = await doFetch(ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
        body: JSON.stringify({
          requests: idx.map((i) => ({
            model: `models/${GEMINI_EMBED_MODEL}`,
            content: { parts: [{ text: clipped[i] }] },
            outputDimensionality: EMBED_DIMS,
          })),
        }),
      });
      if (res.status === 429) {
        const body = await res.json().catch(() => null);
        if (attempt > maxRetries) {
          throw new EmbedRateLimitError(`Gemini kept answering 429 on ${label} after ${maxRetries} retries.`);
        }
        const waitMs = retryDelayFromBody(body) ?? backoffMs(attempt, opts.random);
        report({ kind: "wait-429", batch: b + 1, batches: batches.length, waitMs, message: `${label}, rate limited, waiting ${seconds(waitMs)} (retry ${attempt}/${maxRetries})` });
        await sleep(waitMs);
        continue;
      }
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Gemini batch embed failed on ${label}: ${res.status} ${text.slice(0, 500)}`);
      }
      const data = (await res.json()) as { embeddings?: { values?: number[] }[] };
      const embs = data.embeddings;
      if (!Array.isArray(embs) || embs.length !== idx.length) {
        throw new Error(`Gemini returned ${embs?.length ?? 0} embeddings for ${idx.length} texts on ${label}.`);
      }
      embs.forEach((e, k) => {
        if (!Array.isArray(e.values) || e.values.length !== EMBED_DIMS) {
          throw new Error(`Unexpected embedding dimension ${e.values?.length} on ${label}.`);
        }
        out[idx[k]] = e.values;
      });
      break;
    }
  }
  return out;
}
