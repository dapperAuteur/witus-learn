// Throttled, retrying Mistral embeddings for the "chat with the sources" index (plans/97 Q5).
//
// WHY MISTRAL (BAM, 2026-11-02: "Instead of Gemini for the indexer on the Learn admin page for RAG,
// use one of the other AI tools connected"). Gemini's free tier capped embeddings at 30,000 tokens a
// minute and failed `rag:index:prod` with 429s. Of the keys Learn already holds, Anthropic has no
// embeddings API and Together's only embedding model (bge-base-en-v1.5) has a 512-token context, too
// close to our 1,800-character chunks; mistral-embed takes 8k tokens per input and also suits the
// planned Spanish editions. This module covers the RAG index and the RAG query only. CYOA's
// lesson_embeddings keep Gemini (src/lib/ai/embeddings.ts) and are not touched.
//
// What it does:
//   1. sends texts in BATCHES (one POST per batch, at most BATCH_MAX_TEXTS texts and
//      MAX_REQUEST_TOKENS estimated tokens each; both are our own conservative caps, see below),
//   2. paces REQUESTS under a per-minute limit (default 60, the `x-ratelimit-limit-req-minute`
//      Learn's key returned on 2026-11-02; env RAG_EMBED_REQUESTS_PER_MINUTE), and optionally TOKENS
//      under RAG_EMBED_TOKENS_PER_MINUTE (no default: Mistral's docs name no embedding token quota),
//   3. honors the server: after a response whose `x-ratelimit-remaining-req-minute` is 0 it waits for
//      the minute to turn; on a 429 it waits `Retry-After` (seconds or an HTTP date) or backs off
//      exponentially with jitter, and retries the SAME batch, up to a limit,
//   4. fails loudly on anything else (a 400 or 500 is a bug or an outage, not a rate limit), on a
//      count mismatch, and on any vector that is not EMBED_DIMS long.
//
// Endpoint and shape, from Mistral's API reference (https://docs.mistral.ai/api/endpoint/embeddings,
// read 2026-11-02) and confirmed with Learn's key the same day: POST https://api.mistral.ai/v1/embeddings
// with `{ model: "mistral-embed", input: string[] }` and `Authorization: Bearer <key>` (never in the
// URL); the response's `data[]` carries `embedding` and `index`, plus `usage.prompt_tokens`.
// Dimension 1024 for every text (https://docs.mistral.ai/studio/knowledge-rag/embeddings/text_embeddings).
// Context 8k tokens per input and price USD 0.1 per million tokens (model card,
// https://docs.mistral.ai/models/model-cards/mistral-embed-23-12, read 2026-11-02). The API reference
// states NO cap on inputs or total tokens per request, so BATCH_MAX_TEXTS and MAX_REQUEST_TOKENS are
// our own, deliberately small; raise them only against a documented limit.
//
// PURE apart from `fetch` and timers, both injectable, so tests run with no network and fake time.

export const EMBED_MODEL = "mistral-embed";
export const EMBED_DIMS = 1024;
export const EMBED_ENDPOINT = "https://api.mistral.ai/v1/embeddings";
/** Our own cap on texts per request (Mistral's reference names none). */
export const BATCH_MAX_TEXTS = 64;
/** Our own cap on ESTIMATED tokens per request (Mistral's reference names none; one input may hold 8k). */
export const MAX_REQUEST_TOKENS = 8_000;
/** Characters sent per text. Chunks are 1,800 characters; this only guards a stray long one (about 2,700 tokens at most). */
export const MAX_TEXT_CHARS = 8000;
/** The per-minute request limit Learn's key reported on 2026-11-02 (x-ratelimit-limit-req-minute). */
export const DEFAULT_REQUESTS_PER_MINUTE = 60;
export const DEFAULT_MAX_RETRIES = 8;
const WINDOW_MS = 60_000;
const BACKOFF_BASE_MS = 2_000;
const BACKOFF_CAP_MS = 60_000;

/**
 * A CONSERVATIVE token estimate: one token per three characters, rounded up. English prose runs near
 * four characters per token, so this over-counts by about a third, which only makes the caps stricter.
 */
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 3);
}

/** Split texts (by index) into batches of at most `batchSize` texts and `tokenCap` estimated tokens. */
export function planBatches(texts: readonly string[], tokenCap: number, batchSize = BATCH_MAX_TEXTS): number[][] {
  const out: number[][] = [];
  let cur: number[] = [];
  let curTokens = 0;
  texts.forEach((t, i) => {
    const tokens = estimateTokens(t.slice(0, MAX_TEXT_CHARS));
    if (cur.length > 0 && (cur.length >= batchSize || curTokens + tokens > tokenCap)) {
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

/** A `Retry-After` header in ms: delta seconds ("16", "1.5") or an HTTP date. Null when absent or unreadable. */
export function retryAfterMs(value: string | null | undefined, now: number = Date.now()): number | null {
  if (!value) return null;
  const v = value.trim();
  if (/^\d+(?:\.\d+)?$/.test(v)) return Math.round(Number(v) * 1000);
  const at = Date.parse(v);
  return Number.isNaN(at) ? null : Math.max(0, at - now);
}

/** Exponential backoff with jitter for a 429 that names no Retry-After. attempt is 1-based. */
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
  requestsPerMinute?: number;
  /** Optional token pacing; unset means requests are the only per-minute limit. */
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
 * Embed every text (EMBED_DIMS dimensions each), in order. Throws on a non-429 error, on a malformed
 * response, and after `maxRetries` consecutive 429s on one batch.
 */
export async function embedTexts(texts: readonly string[], opts: EmbedTextsOptions = {}): Promise<number[][]> {
  if (texts.length === 0) return [];
  const apiKey = opts.apiKey ?? process.env.MISTRAL_API_KEY;
  if (!apiKey) throw new Error("MISTRAL_API_KEY is not set.");
  const rpm = opts.requestsPerMinute ?? envInt("RAG_EMBED_REQUESTS_PER_MINUTE") ?? DEFAULT_REQUESTS_PER_MINUTE;
  const tpm = opts.tokensPerMinute ?? envInt("RAG_EMBED_TOKENS_PER_MINUTE") ?? Infinity;
  const maxRetries = opts.maxRetries ?? envInt("RAG_EMBED_MAX_RETRIES") ?? DEFAULT_MAX_RETRIES;
  const doFetch = opts.fetchImpl ?? fetch;
  const sleep = opts.sleep ?? realSleep;
  const now = opts.now ?? Date.now;
  const report = opts.onProgress ?? (() => {});

  const clipped = texts.map((t) => t.slice(0, MAX_TEXT_CHARS));
  const batches = planBatches(clipped, Math.min(MAX_REQUEST_TOKENS, tpm), opts.batchSize ?? BATCH_MAX_TEXTS);
  const out: number[][] = new Array(texts.length);
  // Requests sent in the last minute, as [timestamp, estimated tokens], oldest first.
  const sent: [number, number][] = [];
  // Set when the server said this minute's requests are used up.
  let blockedUntil = 0;

  for (let b = 0; b < batches.length; b++) {
    const idx = batches[b];
    const tokens = idx.reduce((s, i) => s + estimateTokens(clipped[i]), 0);
    const label = `batch ${b + 1}/${batches.length}`;

    for (let attempt = 1; ; attempt++) {
      // Wait until this request fits the per-minute request and token limits, and the server's own.
      for (;;) {
        const t = now();
        while (sent.length && t - sent[0][0] >= WINDOW_MS) sent.shift();
        const used = sent.reduce((s, [, n]) => s + n, 0);
        let waitMs = 0;
        if (blockedUntil > t) waitMs = blockedUntil - t;
        else if (sent.length >= rpm || (sent.length > 0 && used + tokens > tpm)) waitMs = sent[0][0] + WINDOW_MS - t;
        if (waitMs <= 0) break;
        const why = blockedUntil > t ? "the server's per-minute limit" : "the per-minute request budget";
        report({ kind: "wait-budget", batch: b + 1, batches: batches.length, waitMs, message: `${label}, waiting ${seconds(waitMs)} for ${why}` });
        await sleep(waitMs);
      }

      report({ kind: "batch", batch: b + 1, batches: batches.length, message: `${label} (${idx.length} texts, about ${tokens} tokens)` });
      sent.push([now(), tokens]);
      const res = await doFetch(EMBED_ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json", authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({ model: EMBED_MODEL, input: idx.map((i) => clipped[i]) }),
      });
      if (res.status === 429) {
        await res.text().catch(() => "");
        if (attempt > maxRetries) {
          throw new EmbedRateLimitError(`Mistral kept answering 429 on ${label} after ${maxRetries} retries.`);
        }
        const waitMs = retryAfterMs(res.headers.get("retry-after"), now()) ?? backoffMs(attempt, opts.random);
        report({ kind: "wait-429", batch: b + 1, batches: batches.length, waitMs, message: `${label}, rate limited, waiting ${seconds(waitMs)} (retry ${attempt}/${maxRetries})` });
        await sleep(waitMs);
        continue;
      }
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Mistral embeddings failed on ${label}: ${res.status} ${text.slice(0, 500)}`);
      }
      // The server's own count: when this minute's requests are spent, wait for the window to turn.
      if (res.headers.get("x-ratelimit-remaining-req-minute")?.trim() === "0") {
        const oldest = sent[0]?.[0] ?? now();
        blockedUntil = Math.max(blockedUntil, oldest + WINDOW_MS);
      }
      const data = (await res.json()) as { data?: { embedding?: number[]; index?: number }[] };
      const rows = data.data;
      if (!Array.isArray(rows) || rows.length !== idx.length) {
        throw new Error(`Mistral returned ${rows?.length ?? 0} embeddings for ${idx.length} texts on ${label}.`);
      }
      const seen = new Set<number>();
      rows.forEach((r, k) => {
        // `index` is the input's position in this request; fall back to array order when absent.
        const pos = Number.isInteger(r.index) ? (r.index as number) : k;
        if (pos < 0 || pos >= idx.length || seen.has(pos)) throw new Error(`Mistral returned a bad index ${r.index} on ${label}.`);
        seen.add(pos);
        if (!Array.isArray(r.embedding) || r.embedding.length !== EMBED_DIMS) {
          throw new Error(`Unexpected embedding dimension ${r.embedding?.length} on ${label} (expected ${EMBED_DIMS}).`);
        }
        out[idx[pos]] = r.embedding;
      });
      break;
    }
  }
  return out;
}

/**
 * Embed ONE question for retrieval, with the same model as the index (a query embedded by any other
 * model returns nearest neighbors that mean nothing). A learner is waiting, so it retries a 429 at
 * most twice instead of eight times.
 */
export async function embedQuery(text: string, opts: Omit<EmbedTextsOptions, "maxRetries" | "batchSize"> = {}): Promise<number[]> {
  const [v] = await embedTexts([text], { ...opts, maxRetries: 2 });
  return v;
}
