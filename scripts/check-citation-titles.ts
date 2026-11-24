import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import type { Citation } from "../src/lib/citations";
import { STAGED_CITATIONS } from "../src/lib/citation-content/citations";
import { allSeedEntries } from "./lib/seed-registry";
import {
  CLASS_ORDER,
  UNCHECKABLE,
  citedTitles,
  classify,
  cleanCitationUrl,
  detectCharset,
  extractPageTitles,
  hostOf,
  isPdfResponse,
  isRedirectStatus,
  looksLikeBotWall,
  looksLikeNotFound,
  normalizeTitle,
  type CitationClass,
  type FetchRecord,
} from "./lib/citation-titles";

/**
 * Catalog-wide citation check: does every cited URL still answer, and does the page carry the title
 * the citation gives it? (Bug: plans/bugs/2026-11-24-search-craft-sources-are-landing-pages.md; the
 * rebuild program, plans/101, reads this report to order its waves.)
 *
 *   pnpm check:citation-titles                        # the whole staged catalog, cached fetches
 *   pnpm check:citation-titles --course search-craft  # one course
 *   pnpm check:citation-titles --limit 40             # smoke run: the first 40 unique URLs
 *   pnpm check:citation-titles --offline              # report from the cache only, no network
 *   pnpm check:citation-titles --max-age-days 7       # refetch anything checked more than 7 days ago (default 30)
 *   pnpm check:citation-titles --retry-errors         # also refetch cached timeouts, 5xx and network errors
 *   pnpm check:citation-titles --out-dir <dir>        # cache and report directory (default plans/reports)
 *
 * NOT in `pnpm lint` and NOT in CI. It is network-bound: at most four requests in flight and one
 * request per second per host, a 20 s deadline per request, so the whole catalog (about 5,000 unique
 * URLs) takes an hour or more. Run it by hand, from a laptop, and read the report.
 *
 * WHAT IT READS: src/lib/citation-content/citations.ts, the committed registry `pnpm gen:citations`
 * writes from the lessons in the database. That is the same data /<tenant>/<course>/sources shows a
 * learner and /admin/citations shows a verifier, so a finding here is a finding on the live page.
 * The tenant per course comes from the seed registry (scripts/lib/seed-registry.ts), offline.
 *
 * WHAT IT SENDS: GET with User-Agent "Learn.WitUS (https://learn.witus.online)" and nothing else that
 * identifies anyone. Redirects are followed by hand (up to 10 hops) so the per-host limit applies to
 * every hop and the final URL is recorded. Only the first 512 KB of a page is read; a PDF's body is
 * not read at all.
 *
 * WHAT IT WRITES, under --out-dir (gitignored plans/reports by default):
 *   citation-check-cache.json          one record per URL with the fetch date; reruns fetch only
 *                                      what is missing or older than --max-age-days
 *   YYYY-MM-DD-citation-check.md       the report: summary, per-course table worst first, every
 *                                      dead and mismatched citation, the hosts that block us
 *   YYYY-MM-DD-citation-check.json     the same data for the program plan
 * A --course run adds the slug to the report name; a --limit run adds "-smoke".
 *
 * HOW IT JUDGES (scripts/lib/citation-titles.ts, pinned by tests/citation-titles.test.ts): the cited
 * title is the segment after the APA year, plus every italic segment, plus the pre-year text of a
 * legal citation; it matches when it equals the page's <title> or og:title, or either contains the
 * other, after lowercasing, dropping punctuation and the site name after " | " or " - ". A match is
 * not proof the source supports the lesson; a mismatch is a prompt to open the page. The classes
 * are documented on CitationClass.
 *
 * A host that blocks automated requests (loc.gov answers 403 to curl) is reported as `blocked`,
 * never `dead`; its rows are listed per host at the end so BAM can check them in a browser.
 */

const USER_AGENT = "Learn.WitUS (https://learn.witus.online)";
const HEADERS = {
  "User-Agent": USER_AGENT,
  Accept: "text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8",
  "Accept-Language": "en",
};
const TIMEOUT_MS = 20_000;
const CONCURRENCY = 4;
const PER_HOST_MS = 1_000;
const MAX_HOPS = 10;
const MAX_BODY_BYTES = 512 * 1024;
const CACHE_VERSION = 1;
const SAVE_EVERY = 20;

// ---------------------------------------------------------------------------------------------
// Options

interface Options {
  course: string | null;
  limit: number | null;
  offline: boolean;
  maxAgeDays: number;
  retryErrors: boolean;
  outDir: string;
}

function parseArgs(argv: string[]): Options {
  const opts: Options = {
    course: null,
    limit: null,
    offline: false,
    maxAgeDays: 30,
    retryErrors: false,
    outDir: join(process.cwd(), "plans", "reports"),
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => {
      const v = argv[++i];
      if (v === undefined) throw new Error(`${a} needs a value`);
      return v;
    };
    if (a === "--course") opts.course = next();
    else if (a === "--limit") opts.limit = Number(next());
    else if (a === "--offline") opts.offline = true;
    else if (a === "--max-age-days") opts.maxAgeDays = Number(next());
    else if (a === "--retry-errors") opts.retryErrors = true;
    else if (a === "--out-dir") opts.outDir = resolve(next());
    else throw new Error(`unknown option ${a}`);
  }
  if (opts.limit !== null && (!Number.isFinite(opts.limit) || opts.limit < 1)) throw new Error("--limit needs a positive number");
  if (!Number.isFinite(opts.maxAgeDays) || opts.maxAgeDays < 0) throw new Error("--max-age-days needs a number");
  return opts;
}

// ---------------------------------------------------------------------------------------------
// Cache

interface Cache {
  version: number;
  userAgent: string;
  entries: Record<string, FetchRecord>;
}

function loadCache(path: string): Cache {
  if (!existsSync(path)) return { version: CACHE_VERSION, userAgent: USER_AGENT, entries: {} };
  const parsed = JSON.parse(readFileSync(path, "utf8")) as Partial<Cache>;
  return { version: CACHE_VERSION, userAgent: USER_AGENT, entries: parsed.entries ?? {} };
}

function saveCache(path: string, cache: Cache): void {
  mkdirSync(join(path, ".."), { recursive: true });
  const tmp = `${path}.tmp`;
  writeFileSync(tmp, `${JSON.stringify(cache, null, 1)}\n`);
  renameSync(tmp, path);
}

function isFresh(rec: FetchRecord | undefined, opts: Options, now: number): boolean {
  if (!rec) return false;
  const age = now - Date.parse(rec.checkedAt);
  if (!Number.isFinite(age) || age > opts.maxAgeDays * 86_400_000) return false;
  if (opts.retryErrors && (rec.error !== null || (rec.status !== null && rec.status >= 500))) return false;
  return true;
}

// ---------------------------------------------------------------------------------------------
// Fetching

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/** One request per second per host. acquire() reserves the next slot synchronously, then waits. */
class HostLimiter {
  private next = new Map<string, number>();
  nextFree(host: string): number {
    return this.next.get(host) ?? 0;
  }
  async acquire(host: string): Promise<void> {
    const now = Date.now();
    const at = Math.max(now, this.nextFree(host));
    this.next.set(host, at + PER_HOST_MS);
    if (at > now) await sleep(at - now);
  }
}

/** The queued URL whose host is free soonest, so four workers never all wait on one host. */
function pickNext(queue: string[], limiter: HostLimiter): string | undefined {
  if (!queue.length) return undefined;
  const now = Date.now();
  let bestI = 0;
  let bestAt = Number.POSITIVE_INFINITY;
  for (let i = 0; i < queue.length; i++) {
    const at = limiter.nextFree(hostOf(queue[i]));
    if (at <= now) {
      bestI = i;
      break;
    }
    if (at < bestAt) {
      bestAt = at;
      bestI = i;
    }
  }
  return queue.splice(bestI, 1)[0];
}

function errorKind(err: unknown): { error: FetchRecord["error"]; detail: string } {
  const e = err as { name?: string; message?: string; cause?: { code?: string; message?: string } };
  if (e?.name === "TimeoutError" || e?.name === "AbortError") return { error: "timeout", detail: "timeout" };
  const code = e?.cause?.code ?? "";
  if (code === "ENOTFOUND" || code === "EAI_AGAIN") return { error: "dns", detail: code };
  return { error: "network", detail: code || e?.cause?.message || e?.message || String(err) };
}

/** Read up to MAX_BODY_BYTES of the body, stop early once </head> has gone by. */
async function readHead(res: Response): Promise<string> {
  const reader = res.body?.getReader();
  if (!reader) return "";
  const chunks: Uint8Array[] = [];
  let n = 0;
  try {
    while (n < MAX_BODY_BYTES) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      n += value.length;
      if (n > 4096 && /<\/head\s*>/i.test(Buffer.from(value).toString("latin1"))) break;
    }
  } finally {
    reader.cancel().catch(() => undefined);
  }
  const bytes = Buffer.concat(chunks.map((c) => Buffer.from(c)));
  const sniff = bytes.subarray(0, 2048).toString("latin1");
  const charset = detectCharset(res.headers.get("content-type"), sniff);
  try {
    return new TextDecoder(charset).decode(bytes);
  } catch {
    return bytes.toString("utf8");
  }
}

async function fetchRecord(url: string, limiter: HostLimiter): Promise<FetchRecord> {
  const base: FetchRecord = {
    url,
    checkedAt: new Date().toISOString(),
    finalUrl: null,
    status: null,
    contentType: null,
    title: null,
    ogTitle: null,
    error: null,
  };
  let current = url;
  const visited = new Set<string>([url]);
  let hops = 0;
  for (;;) {
    await limiter.acquire(hostOf(current));
    let res: Response;
    try {
      res = await fetch(current, {
        method: "GET",
        redirect: "manual",
        headers: HEADERS,
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
    } catch (err) {
      const { error, detail } = errorKind(err);
      return { ...base, finalUrl: current, error, errorDetail: detail, hops };
    }
    if (isRedirectStatus(res.status)) {
      const loc = res.headers.get("location");
      res.body?.cancel().catch(() => undefined);
      if (!loc || hops >= MAX_HOPS) return { ...base, finalUrl: current, status: res.status, hops };
      let next: string;
      try {
        next = new URL(loc, current).toString();
      } catch {
        return { ...base, finalUrl: current, status: res.status, hops, errorDetail: `bad Location ${loc}` };
      }
      if (visited.has(next)) return { ...base, finalUrl: next, status: res.status, hops, error: "network", errorDetail: "redirect loop" };
      visited.add(next);
      current = next;
      hops++;
      continue;
    }
    const contentType = res.headers.get("content-type");
    if (isPdfResponse(contentType, current)) {
      res.body?.cancel().catch(() => undefined);
      return { ...base, finalUrl: current, status: res.status, contentType, hops };
    }
    let html = "";
    try {
      html = await readHead(res);
    } catch (err) {
      const { error, detail } = errorKind(err);
      return { ...base, finalUrl: current, status: res.status, contentType, error, errorDetail: detail, hops };
    }
    const { title, ogTitle } = extractPageTitles(html);
    const botWall = looksLikeBotWall(title, html.slice(0, 16_384));
    const softNotFound = res.ok && looksLikeNotFound(title);
    return { ...base, finalUrl: current, status: res.status, contentType, title, ogTitle, hops, botWall, softNotFound };
  }
}

async function fetchAll(urls: string[], cache: Cache, cachePath: string): Promise<{ fetched: number; seconds: number }> {
  const started = Date.now();
  const limiter = new HostLimiter();
  const queue = [...urls];
  const total = queue.length;
  let done = 0;
  let sinceSave = 0;
  const worker = async () => {
    for (;;) {
      const url = pickNext(queue, limiter);
      if (!url) return;
      const rec = await fetchRecord(url, limiter);
      cache.entries[url] = rec;
      done++;
      sinceSave++;
      if (sinceSave >= SAVE_EVERY) {
        sinceSave = 0;
        saveCache(cachePath, cache);
      }
      if (done % 50 === 0 || done === total) {
        const elapsed = (Date.now() - started) / 1000;
        const eta = done ? ((total - done) * elapsed) / done : 0;
        console.log(`  ${done}/${total} fetched, ${Math.round(elapsed)}s elapsed, about ${Math.round(eta / 60)} min left`);
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, total) }, worker));
  saveCache(cachePath, cache);
  return { fetched: done, seconds: (Date.now() - started) / 1000 };
}

// ---------------------------------------------------------------------------------------------
// Classifying and reporting

interface Row {
  key: string;
  courseSlug: string;
  courseTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  citedTitle: string;
  url: string;
  finalUrl: string | null;
  status: number | null;
  pageTitle: string | null;
  ogTitle: string | null;
  detail: string | null;
  cls: CitationClass;
}

type Counts = Record<CitationClass, number>;

const emptyCounts = (): Counts => Object.fromEntries(CLASS_ORDER.map((c) => [c, 0])) as Counts;

interface CourseSummary {
  slug: string;
  title: string;
  tenants: string[];
  citations: number;
  counts: Counts;
  checkable: number;
  /** ok / checkable, or null when nothing was checkable. */
  okShare: number | null;
}

function tenantsByCourse(): Map<string, string[]> {
  const out = new Map<string, Set<string>>();
  try {
    for (const e of allSeedEntries()) {
      if (!e.school) continue;
      if (!out.has(e.slug)) out.set(e.slug, new Set());
      out.get(e.slug)!.add(e.school);
    }
  } catch (err) {
    console.warn(`! could not read the seed registry for tenants: ${String(err)}`);
  }
  return new Map([...out].map(([slug, set]) => [slug, [...set].sort()]));
}

function buildRows(citations: Citation[], cache: Cache): Row[] {
  return citations.map((c) => {
    const url = cleanCitationUrl(c.url)!;
    const rec = cache.entries[url];
    const { primary, candidates } = citedTitles(c.text);
    const cls = classify(candidates, url, rec);
    return {
      key: c.key,
      courseSlug: c.courseSlug,
      courseTitle: c.courseTitle,
      lessonSlug: c.lessonSlug,
      lessonTitle: c.lessonTitle,
      citedTitle: primary,
      url,
      finalUrl: rec?.finalUrl ?? null,
      status: rec?.status ?? null,
      pageTitle: rec?.title ?? null,
      ogTitle: rec?.ogTitle ?? null,
      detail: rec?.errorDetail ?? (rec?.botWall ? "bot wall" : rec?.softNotFound ? "page says not found" : null),
      cls,
    };
  });
}

function summarizeCourses(rows: Row[], tenants: Map<string, string[]>): CourseSummary[] {
  const by = new Map<string, CourseSummary>();
  for (const r of rows) {
    let s = by.get(r.courseSlug);
    if (!s) {
      s = { slug: r.courseSlug, title: r.courseTitle, tenants: tenants.get(r.courseSlug) ?? [], citations: 0, counts: emptyCounts(), checkable: 0, okShare: null };
      by.set(r.courseSlug, s);
    }
    s.citations++;
    s.counts[r.cls]++;
    if (!UNCHECKABLE.has(r.cls)) s.checkable++;
  }
  for (const s of by.values()) s.okShare = s.checkable ? s.counts.ok / s.checkable : null;
  const problems = (s: CourseSummary) => s.counts.dead + s.counts["title-mismatch"] + s.counts["redirect-to-home"];
  return [...by.values()].sort((a, b) => {
    if (a.okShare === null && b.okShare !== null) return 1;
    if (b.okShare === null && a.okShare !== null) return -1;
    if (a.okShare !== null && b.okShare !== null && a.okShare !== b.okShare) return a.okShare - b.okShare;
    return problems(b) - problems(a) || a.slug.localeCompare(b.slug);
  });
}

function countBy<T>(items: T[], key: (t: T) => string): Map<string, number> {
  const m = new Map<string, number>();
  for (const it of items) m.set(key(it), (m.get(key(it)) ?? 0) + 1);
  return m;
}

/** Markdown table cell: pipes escaped, newlines and dashes flattened, long text cut. */
function cell(s: string | number | null | undefined, max = 110): string {
  if (s === null || s === undefined) return "";
  const t = String(s)
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .replace(/\|/g, "\\|")
    .trim();
  return t.length > max ? `${t.slice(0, max - 1)}…` : t;
}

const pct = (n: number | null) => (n === null ? "n/a" : `${Math.round(n * 100)}%`);

interface RunInfo {
  date: string;
  options: Options;
  fetched: number;
  fromCache: number;
  seconds: number;
}

function writeReport(
  mdPath: string,
  jsonPath: string,
  rows: Row[],
  courses: CourseSummary[],
  noUrl: Citation[],
  uniqueUrls: string[],
  cache: Cache,
  run: RunInfo,
): void {
  const byClassCitations = emptyCounts();
  for (const r of rows) byClassCitations[r.cls]++;
  const byClassUrls = emptyCounts();
  const urlClass = new Map<string, CitationClass>();
  for (const r of rows) if (!urlClass.has(r.url)) urlClass.set(r.url, r.cls);
  for (const c of urlClass.values()) byClassUrls[c]++;

  // The same URL cited under several titles is itself a finding.
  const titlesByUrl = new Map<string, Map<string, { title: string; courses: Set<string> }>>();
  for (const r of rows) {
    const n = normalizeTitle(r.citedTitle);
    if (!n) continue;
    if (!titlesByUrl.has(r.url)) titlesByUrl.set(r.url, new Map());
    const m = titlesByUrl.get(r.url)!;
    if (!m.has(n)) m.set(n, { title: r.citedTitle, courses: new Set() });
    m.get(n)!.courses.add(r.courseSlug);
  }
  const duplicateTitles = [...titlesByUrl]
    .filter(([, m]) => m.size > 1)
    .map(([url, m]) => ({
      url,
      titles: [...m.values()].map((v) => v.title),
      courses: [...new Set([...m.values()].flatMap((v) => [...v.courses]))].sort(),
      pageTitle: cache.entries[url]?.title ?? null,
    }))
    .sort((a, b) => b.titles.length - a.titles.length || a.url.localeCompare(b.url));

  const blockedUrls = [...urlClass].filter(([, c]) => c === "blocked").map(([u]) => u);
  const blockedHosts = [...countBy(blockedUrls, hostOf)]
    .map(([host, count]) => {
      const statuses = new Set(blockedUrls.filter((u) => hostOf(u) === host).map((u) => cache.entries[u]?.status ?? "wall"));
      return { host, count, statuses: [...statuses].map(String).sort() };
    })
    .sort((a, b) => b.count - a.count || a.host.localeCompare(b.host));
  const errorUrls = [...urlClass].filter(([, c]) => c === "timeout" || c === "error").map(([u]) => u);
  const errorHosts = [...countBy(errorUrls, hostOf)]
    .map(([host, count]) => ({
      host,
      count,
      details: [...new Set(errorUrls.filter((u) => hostOf(u) === host).map((u) => cache.entries[u]?.errorDetail ?? String(cache.entries[u]?.status ?? "")))].sort(),
    }))
    .sort((a, b) => b.count - a.count || a.host.localeCompare(b.host));

  const order = new Map(courses.map((c, i) => [c.slug, i]));
  const sortRows = (a: Row, b: Row) =>
    (order.get(a.courseSlug) ?? 0) - (order.get(b.courseSlug) ?? 0) || a.lessonSlug.localeCompare(b.lessonSlug) || a.url.localeCompare(b.url);
  const deadRows = rows.filter((r) => r.cls === "dead").sort(sortRows);
  const mismatchRows = rows.filter((r) => r.cls === "title-mismatch").sort(sortRows);
  const homeRows = rows.filter((r) => r.cls === "redirect-to-home").sort(sortRows);
  const blockedRows = rows.filter((r) => r.cls === "blocked").sort(sortRows);

  const L: string[] = [];
  const scope = run.options.course ? `course \`${run.options.course}\`` : run.options.limit ? `smoke run, first ${run.options.limit} URLs` : "the whole staged catalog";
  L.push(`# Citation check, ${run.date}`);
  L.push("");
  L.push(
    `Run of \`scripts/check-citation-titles.ts\` over ${scope}: ${run.fetched} URL(s) fetched this run, ${run.fromCache} read from the cache, ` +
      `${Math.round(run.seconds / 60)} min of fetching. User-Agent "${USER_AGENT}", four requests at once, one per second per host, 20 s deadline. ` +
      "Source of the citations: `src/lib/citation-content/citations.ts`, the registry behind every `/<tenant>/<course>/sources` page.",
  );
  L.push("");
  L.push(
    "**How to read it.** `ok` means the page answered and its title (or og:title) matches the cited title after lowercasing, " +
      "dropping punctuation and the site name; a PDF that answers 200 is `ok` without a title comparison. `title-mismatch` means the page " +
      "has a title and it is not the one cited: open the page before deciding (a paraphrased title is cheap to fix; a home page cited " +
      "under an invented title is the Search Craft finding). `dead` is a 404, 410, DNS failure or a page that says \"not found\". " +
      "`blocked` (401, 403, 429, bot walls) and `timeout`/`error` could not be judged from here and are left out of the ok share; " +
      "the blocked hosts are listed at the end so they can be checked in a browser. `redirect-to-home` means a deep link now lands on " +
      "a site root. A match is not proof the source supports the lesson. Dashes inside fetched titles are shown as hyphens here; the JSON beside this file keeps them.",
  );
  L.push("");
  L.push("## Summary");
  L.push("");
  L.push("| Measure | Count |");
  L.push("|---|---:|");
  L.push(`| Citations in the registry (staged courses) | ${rows.length + noUrl.length} |`);
  L.push(`| Citations with a URL (checked) | ${rows.length} |`);
  L.push(`| Citations without a URL (books, statutes, handbooks; not checked) | ${noUrl.length} |`);
  L.push(`| Unique URLs | ${uniqueUrls.length} |`);
  L.push(`| Courses with checked citations | ${courses.length} |`);
  L.push(`| URLs cited under more than one title | ${duplicateTitles.length} |`);
  L.push("");
  L.push("| Class | Citations | Unique URLs |");
  L.push("|---|---:|---:|");
  for (const c of CLASS_ORDER) L.push(`| ${c} | ${byClassCitations[c]} | ${byClassUrls[c]} |`);
  L.push("");
  const checkable = rows.filter((r) => !UNCHECKABLE.has(r.cls)).length;
  L.push(`Ok share of checkable citations, catalog-wide: **${pct(checkable ? byClassCitations.ok / checkable : null)}** (${byClassCitations.ok} of ${checkable}).`);
  L.push("");

  L.push("## Courses, worst first");
  L.push("");
  L.push("Sorted by the ok share of checkable citations (blocked, timeout, error and unchecked left out), then by the number of dead, mismatched and home-redirected citations.");
  L.push("");
  L.push("| # | Course | Tenant | Citations | ok | mismatch | dead | blocked | home | timeout | no-title | error | unchecked | ok share |");
  L.push("|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
  courses.forEach((c, i) => {
    const link = c.tenants.length === 1 ? `[${cell(c.title, 60)}](https://learn.witus.online/${c.tenants[0]}/${c.slug}/sources)` : cell(c.title, 60);
    L.push(
      `| ${i + 1} | ${link} \`${c.slug}\` | ${cell(c.tenants.join(", ") || "?", 40)} | ${c.citations} | ${c.counts.ok} | ${c.counts["title-mismatch"]} | ${c.counts.dead} | ${c.counts.blocked} | ${c.counts["redirect-to-home"]} | ${c.counts.timeout} | ${c.counts["no-title"]} | ${c.counts.error} | ${c.counts.unchecked} | ${pct(c.okShare)} |`,
    );
  });
  L.push("");

  const rowTable = (title: string, list: Row[], pageCol: (r: Row) => string) => {
    L.push(`## ${title} (${list.length})`);
    L.push("");
    if (!list.length) {
      L.push("None.");
      L.push("");
      return;
    }
    L.push("| Course | Lesson | Cited title | Page title | URL |");
    L.push("|---|---|---|---|---|");
    for (const r of list) L.push(`| \`${r.courseSlug}\` | ${cell(r.lessonTitle, 50)} | ${cell(r.citedTitle)} | ${cell(pageCol(r))} | ${cell(r.url, 160)} |`);
    L.push("");
  };
  rowTable("Dead links", deadRows, (r) => (r.status ? `HTTP ${r.status}${r.detail ? `, ${r.detail}` : ""}` : r.detail ?? "DNS failure"));
  rowTable("Title mismatches", mismatchRows, (r) => (r.pageTitle && r.ogTitle && r.pageTitle !== r.ogTitle ? `${r.pageTitle} [og: ${r.ogTitle}]` : r.pageTitle ?? r.ogTitle ?? ""));
  rowTable("Redirected to a home page", homeRows, (r) => `${r.pageTitle ?? ""} (now ${r.finalUrl ?? ""})`);

  L.push(`## One URL, several cited titles (${duplicateTitles.length})`);
  L.push("");
  if (duplicateTitles.length) {
    L.push("| URL | Page title | Cited as | Courses |");
    L.push("|---|---|---|---|");
    for (const d of duplicateTitles) L.push(`| ${cell(d.url, 120)} | ${cell(d.pageTitle)} | ${cell(d.titles.join(" / "), 200)} | ${cell(d.courses.join(", "), 120)} |`);
  } else L.push("None.");
  L.push("");

  L.push(`## Blocked hosts (${blockedHosts.length})`);
  L.push("");
  L.push("These hosts refuse automated requests from here; their citations could not be judged and are not counted against any course. Check a sample in a browser.");
  L.push("");
  if (blockedHosts.length) {
    L.push("| Host | Blocked URLs | Status |");
    L.push("|---|---:|---|");
    for (const h of blockedHosts) L.push(`| ${h.host} | ${h.count} | ${h.statuses.join(", ")} |`);
  } else L.push("None.");
  L.push("");
  L.push(`### Blocked citations by course (${blockedRows.length})`);
  L.push("");
  if (blockedRows.length) {
    L.push("| Course | Lesson | Cited title | Host | URL |");
    L.push("|---|---|---|---|---|");
    for (const r of blockedRows) L.push(`| \`${r.courseSlug}\` | ${cell(r.lessonTitle, 50)} | ${cell(r.citedTitle)} | ${hostOf(r.url)} | ${cell(r.url, 160)} |`);
  } else L.push("None.");
  L.push("");

  L.push(`## Timeouts and errors by host (${errorHosts.length})`);
  L.push("");
  L.push("Rerun with `--retry-errors` to fetch these again; a host that fails twice is probably refusing us in a way the bot-wall patterns do not recognise.");
  L.push("");
  if (errorHosts.length) {
    L.push("| Host | URLs | Detail |");
    L.push("|---|---:|---|");
    for (const h of errorHosts) L.push(`| ${h.host} | ${h.count} | ${cell(h.details.join(", "), 120)} |`);
  } else L.push("None.");
  L.push("");

  mkdirSync(join(mdPath, ".."), { recursive: true });
  writeFileSync(mdPath, `${L.join("\n")}\n`);

  const json = {
    generatedAt: new Date().toISOString(),
    run: { ...run, options: { ...run.options } },
    userAgent: USER_AGENT,
    summary: {
      citations: rows.length + noUrl.length,
      withUrl: rows.length,
      withoutUrl: noUrl.length,
      uniqueUrls: uniqueUrls.length,
      courses: courses.length,
      checkable,
      okShare: checkable ? byClassCitations.ok / checkable : null,
      byClassCitations,
      byClassUrls,
    },
    courses,
    rows,
    noUrl: noUrl.map((c) => ({ key: c.key, courseSlug: c.courseSlug, lessonSlug: c.lessonSlug, text: c.text })),
    duplicateTitles,
    blockedHosts,
    errorHosts,
  };
  writeFileSync(jsonPath, `${JSON.stringify(json, null, 1)}\n`);
}

// ---------------------------------------------------------------------------------------------

async function main(): Promise<number> {
  const opts = parseArgs(process.argv.slice(2));
  const date = new Date().toISOString().slice(0, 10);
  mkdirSync(opts.outDir, { recursive: true });
  const cachePath = join(opts.outDir, "citation-check-cache.json");
  const suffix = opts.course ? `-${opts.course}` : opts.limit ? "-smoke" : "";
  const mdPath = join(opts.outDir, `${date}-citation-check${suffix}.md`);
  const jsonPath = join(opts.outDir, `${date}-citation-check${suffix}.json`);

  const all = opts.course ? STAGED_CITATIONS.filter((c) => c.courseSlug === opts.course) : STAGED_CITATIONS;
  if (opts.course && !all.length) {
    console.error(`No staged citations for course "${opts.course}". Is it in STAGED_COURSES (src/lib/citations.ts) and generated?`);
    return 1;
  }
  const withUrl = all.filter((c) => cleanCitationUrl(c.url));
  const noUrl = all.filter((c) => !cleanCitationUrl(c.url));
  const uniqueUrls = [...new Set(withUrl.map((c) => cleanCitationUrl(c.url)!))];
  console.log(`Citation check: ${all.length} citation(s) in ${new Set(all.map((c) => c.courseSlug)).size} course(s); ${withUrl.length} with a URL, ${uniqueUrls.length} unique URL(s).`);

  const cache = loadCache(cachePath);
  const now = Date.now();
  let toFetch = uniqueUrls.filter((u) => !isFresh(cache.entries[u], opts, now));
  const fromCache = uniqueUrls.length - toFetch.length;
  if (opts.limit !== null) toFetch = toFetch.slice(0, opts.limit);
  let fetched = 0;
  let seconds = 0;
  if (opts.offline) {
    console.log(`Offline: ${fromCache} URL(s) in the cache, ${toFetch.length} would be fetched.`);
  } else if (toFetch.length) {
    console.log(`Fetching ${toFetch.length} URL(s) (${fromCache} fresh in the cache, max age ${opts.maxAgeDays} days), ${CONCURRENCY} at once, 1/s per host, ${TIMEOUT_MS / 1000}s deadline...`);
    const r = await fetchAll(toFetch, cache, cachePath);
    fetched = r.fetched;
    seconds = r.seconds;
    console.log(`Fetched ${fetched} URL(s) in ${Math.round(seconds)}s. Cache: ${cachePath}`);
  } else {
    console.log(`Nothing to fetch: all ${uniqueUrls.length} URL(s) are fresh in the cache.`);
  }

  const rows = buildRows(withUrl, cache);
  const courses = summarizeCourses(rows, tenantsByCourse());
  writeReport(mdPath, jsonPath, rows, courses, noUrl, uniqueUrls, cache, { date, options: opts, fetched, fromCache, seconds });

  const counts = emptyCounts();
  for (const r of rows) counts[r.cls]++;
  console.log(`\nClasses: ${CLASS_ORDER.map((c) => `${c} ${counts[c]}`).join(", ")}.`);
  console.log("Worst five courses by ok share of checkable citations:");
  for (const c of courses.slice(0, 5)) {
    console.log(`  ${pct(c.okShare).padStart(4)}  ${c.slug}  (${c.citations} citations: ${c.counts["title-mismatch"]} mismatch, ${c.counts.dead} dead, ${c.counts.blocked} blocked)`);
  }
  console.log(`\nReport: ${mdPath}\nJSON:   ${jsonPath}`);
  return 0;
}

main().then(
  (code) => process.exit(code),
  (err) => {
    console.error(err);
    process.exit(1);
  },
);
