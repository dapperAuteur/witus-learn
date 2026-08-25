import { existsSync, readFileSync } from "node:fs";
import { lookup } from "node:dns/promises";
import { resolve } from "node:path";
import {
  cspVerdict,
  extractMetaCsp,
  extractScriptUrls,
  healthVerdict,
  parseCspPolicies,
  parseDsn,
  parseEnvFile,
  redactDsn,
  type CspPolicy,
  type Finding,
  type ParsedDsn,
  type Verdict,
} from "./lib/observability-checks";

/**
 * Prove, against a DEPLOYED url, that this app can actually report its own errors.
 *
 *   pnpm verify:observability https://learn.witus.online
 *   pnpm verify:observability https://learn.witus.online https://bettervice.club
 *   pnpm verify:observability --env-file ../flashlearn-ai/.env.local https://flashlearn.ai
 *
 * WHY IT EXISTS. Wiring browser error reporting into an app has three failure modes that look
 * identical from the outside, and two of them are invisible from the inside as well:
 *
 *   1. The browser DSN never made it into the build (the env var is missing in the deploy
 *      environment, or is set for Preview but not Production). The SDK is inert, the app looks fine,
 *      and no browser error is ever reported.
 *   2. The DSN is there, but the site's Content-Security-Policy does not permit the ingest origin.
 *      The browser refuses the request before it leaves the page. 100% of browser-side reports die,
 *      and the SERVER side keeps reporting perfectly, so the dashboard looks healthy and populated.
 *      This is real: a sibling app shipped `connect-src 'self' data:`, which does exactly that.
 *   3. The app cannot reach its database, so the pages that matter are down even though the
 *      homepage renders from cache.
 *
 * None of the three announces itself. This turns "did we remember?" into a check that can be re-run
 * whenever someone tightens a header months from now.
 *
 * THE ONE DESIGN RULE: A CHECK THAT COULD NOT RUN IS A FAILURE, NEVER A PASS. Every check answers
 * pass / fail / unknown, and only "pass" counts as verified. This rollout has already produced
 * false-healthy signals three separate times, so a harness that reports green when it could not
 * really look would be worse than no harness. Whenever this script cannot determine something, it
 * says so, names the reason, and exits non-zero.
 *
 * NOTHING IS GUESSED THAT SOMEONE ELSE OWNS. The DSN is owned by the error-reporting vendor, and
 * the ingest origin is DERIVED from whichever DSN is actually found (it is the DSN's own origin),
 * never assumed from a vendor name. Both are read from configuration (a `--dsn` flag, the
 * environment, or a `.env*` file) and the source is printed on every run. There is NO built-in
 * fallback DSN: a hardcoded one would let this script verify a fiction, which is the exact failure
 * the authoritative-values rule in CLAUDE.md exists to prevent. With no DSN available, the DSN and
 * CSP checks report "unknown" and the run fails.
 *
 * That is not hypothetical. The first live run of this script against learn.witus.online found a
 * DSN pointing at `s2646803.eu-central-1a.betterstackdata.com`, because this ecosystem ingests
 * through BETTER STACK's Sentry-compatible endpoint rather than through sentry.io. A harness that
 * had hardcoded `*.ingest.sentry.io` would have reported a confident, wrong answer. The DSN grammar
 * is Sentry's; the host is whatever the DSN says it is, and this script only ever reads it.
 *
 * READ-ONLY OVER THE NETWORK. GET requests only, and only against the deployment named on the
 * command line. It never POSTs, never sends a test event, and never touches the vendor's API, so
 * running it a hundred times costs no error quota and pollutes no project. The one thing it asks of
 * the outside world is a DNS lookup of the ingest hostname, which catches the DSN whose region or
 * org id is a typo (a typo the other checks would happily call green, since the string is present
 * and the CSP is derived from that same string).
 *
 * NOT PART OF `pnpm lint`, ON PURPOSE. It makes network calls, which must never gate a commit: a
 * flaky airport wifi connection would refuse the commit, and a guard people learn to bypass is
 * worse than no guard. Run it after a deploy, and before trusting a quiet dashboard.
 *
 * Flags:
 *   --dsn <dsn>          Use this DSN instead of reading configuration. Highest precedence.
 *   --env-file <path>    Read the DSN from this .env file (repeatable, tried in order).
 *   --page <path>        Extra page whose chunks to scan, repeatable. Default: /
 *   --health-path <p>    Health endpoint path. Default: /api/health
 *   --max-chunks <n>     Cap on JS files fetched per target. Default: 60
 *   --timeout <ms>       Per-request timeout. Default: 15000
 *   --show-dsn           Print the DSN in full instead of redacting the public key.
 *   --json               Emit a machine-readable summary (for a future CI job).
 */

const USER_AGENT = "witus-verify-observability/1.0 (read-only; +https://learn.witus.online)";
const DEFAULT_ENV_FILES = [".env.local", ".env.production.local", ".env.production", ".env"];
const DSN_VARS = ["NEXT_PUBLIC_SENTRY_DSN", "SENTRY_DSN"] as const;

type Check = Finding & { name: string; notes?: string[] };

type Options = {
  targets: string[];
  dsnFlag: string | null;
  envFiles: string[];
  pages: string[];
  healthPath: string;
  maxChunks: number;
  timeoutMs: number;
  showDsn: boolean;
  json: boolean;
};

function usage(message?: string): never {
  if (message) console.error(`verify-observability: ${message}\n`);
  console.error(
    [
      "Usage: pnpm verify:observability <url> [<url> ...] [flags]",
      "",
      "  --dsn <dsn>         DSN to verify (default: NEXT_PUBLIC_SENTRY_DSN / SENTRY_DSN from env or .env*)",
      "  --env-file <path>   .env file to read the DSN from (repeatable)",
      "  --page <path>       extra page whose script chunks to scan (repeatable, default /)",
      "  --health-path <p>   health endpoint path (default /api/health)",
      "  --max-chunks <n>    cap on JS files fetched per target (default 60)",
      "  --timeout <ms>      per-request timeout (default 15000)",
      "  --show-dsn          print the DSN in full",
      "  --json              machine-readable output",
      "",
      "Read-only: GET requests only. Never sends a test event to the error-reporting project.",
    ].join("\n"),
  );
  process.exit(2);
}

function parseArgs(argv: string[]): Options {
  const opts: Options = {
    targets: [],
    dsnFlag: null,
    envFiles: [],
    pages: [],
    healthPath: "/api/health",
    maxChunks: 60,
    timeoutMs: 15_000,
    showDsn: false,
    json: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const next = (): string => {
      const value = argv[++i];
      if (value === undefined) usage(`${arg} needs a value`);
      return value;
    };
    if (arg === "--help" || arg === "-h") usage();
    else if (arg === "--dsn") opts.dsnFlag = next();
    else if (arg === "--env-file") opts.envFiles.push(next());
    else if (arg === "--page") opts.pages.push(next());
    else if (arg === "--health-path") opts.healthPath = next();
    else if (arg === "--max-chunks") opts.maxChunks = Number(next());
    else if (arg === "--timeout") opts.timeoutMs = Number(next());
    else if (arg === "--show-dsn") opts.showDsn = true;
    else if (arg === "--json") opts.json = true;
    else if (arg.startsWith("-")) usage(`unknown flag ${arg}`);
    else opts.targets.push(arg);
  }
  if (opts.targets.length === 0) usage("give at least one deployed URL to check");
  if (opts.pages.length === 0) opts.pages.push("/");
  if (!Number.isFinite(opts.maxChunks) || opts.maxChunks < 1) usage("--max-chunks must be a positive number");
  if (!Number.isFinite(opts.timeoutMs) || opts.timeoutMs < 1) usage("--timeout must be a positive number");
  return opts;
}

// ---------------------------------------------------------------------------
// Where the DSN came from. Printed on every run, because a check is only as
// trustworthy as the value it checked against.
// ---------------------------------------------------------------------------

type DsnResolution =
  | { dsn: ParsedDsn; source: string; warning?: string }
  | { dsn: null; source: null; reason: string };

function readDsnFrom(vars: Record<string, string | undefined>, where: string): { value: string; source: string; warning?: string } | null {
  for (const name of DSN_VARS) {
    const value = vars[name];
    if (!value) continue;
    const warning =
      name === "SENTRY_DSN"
        ? "fell back to the SERVER-side SENTRY_DSN; the browser bundle is built from NEXT_PUBLIC_SENTRY_DSN, so if the two differ this will read as a missing DSN"
        : undefined;
    return { value, source: `${name} from ${where}`, warning };
  }
  return null;
}

function resolveDsn(opts: Options): DsnResolution {
  const attempts: string[] = [];

  const finish = (value: string, source: string, warning?: string): DsnResolution => {
    const parsed = parseDsn(value);
    if (!parsed) {
      return {
        dsn: null,
        source: null,
        reason: `the value found in ${source} is not a valid DSN (expected https://<publicKey>@<host>/<projectId>)`,
      };
    }
    return { dsn: parsed, source, warning };
  };

  if (opts.dsnFlag) return finish(opts.dsnFlag, "the --dsn flag");

  // An explicitly named env file outranks ambient process env: passing --env-file is a deliberate
  // statement about which deployment's configuration to check, and a stale exported shell variable
  // should not quietly win over it.
  for (const file of opts.envFiles) {
    const path = resolve(file);
    if (!existsSync(path)) usage(`--env-file ${file} does not exist (looked at ${path})`);
    const found = readDsnFrom(parseEnvFile(readFileSync(path, "utf-8")), file);
    if (found) return finish(found.value, found.source, found.warning);
    attempts.push(`${file} (no DSN variable set)`);
  }

  const fromEnv = readDsnFrom(process.env, "the environment");
  if (fromEnv) return finish(fromEnv.value, fromEnv.source, fromEnv.warning);
  attempts.push("process environment (no DSN variable set)");

  if (opts.envFiles.length === 0) {
    for (const file of DEFAULT_ENV_FILES) {
      const path = resolve(file);
      if (!existsSync(path)) continue;
      const found = readDsnFrom(parseEnvFile(readFileSync(path, "utf-8")), file);
      if (found) return finish(found.value, found.source, found.warning);
      attempts.push(`${file} (no DSN variable set)`);
    }
  }

  return {
    dsn: null,
    source: null,
    reason:
      `no DSN could be found. Looked at: ${attempts.join(", ")}. ` +
      "Pass --dsn, or --env-file <path>, or run from a directory whose .env.local sets " +
      "NEXT_PUBLIC_SENTRY_DSN. This script ships no default DSN on purpose: a guessed one would " +
      "verify a value nobody owns.",
  };
}

// ---------------------------------------------------------------------------
// Network (GET only)
// ---------------------------------------------------------------------------

type Fetched = {
  ok: true;
  status: number;
  finalUrl: string;
  headers: Headers;
  body: string;
};
type FetchFailed = { ok: false; error: string };

async function get(url: string, timeoutMs: number): Promise<Fetched | FetchFailed> {
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      cache: "no-store",
      headers: { "user-agent": USER_AGENT, accept: "*/*" },
      signal: AbortSignal.timeout(timeoutMs),
    });
    return {
      ok: true,
      status: response.status,
      finalUrl: response.url || url,
      headers: response.headers,
      body: await response.text(),
    };
  } catch (err) {
    const name = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    return { ok: false, error: name };
  }
}

/** Fetch a list of URLs with a small concurrency cap, preserving input order in the result. */
async function getAll(
  urls: string[],
  timeoutMs: number,
  concurrency = 6,
): Promise<Array<{ url: string; result: Fetched | FetchFailed }>> {
  const out: Array<{ url: string; result: Fetched | FetchFailed }> = new Array(urls.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(concurrency, urls.length) }, async () => {
    for (;;) {
      const index = cursor++;
      if (index >= urls.length) return;
      out[index] = { url: urls[index], result: await get(urls[index], timeoutMs) };
    }
  });
  await Promise.all(workers);
  return out;
}

// ---------------------------------------------------------------------------
// The checks
// ---------------------------------------------------------------------------

type PageFetch = { path: string; url: string; fetched: Fetched };

/** CHECK 1 + prerequisite: fetch each requested page and its same-origin JS chunks. */
async function fetchPages(target: string, opts: Options): Promise<{ pages: PageFetch[]; errors: string[] }> {
  const pages: PageFetch[] = [];
  const errors: string[] = [];
  for (const path of opts.pages) {
    const url = new URL(path, target).toString();
    const result = await get(url, opts.timeoutMs);
    if (!result.ok) {
      errors.push(`${url}: ${result.error}`);
      continue;
    }
    if (result.status >= 400) {
      errors.push(`${url}: HTTP ${result.status}`);
      continue;
    }
    pages.push({ path, url: result.finalUrl, fetched: result });
  }
  return { pages, errors };
}

/**
 * CHECK 1. Is the DSN literally present in what the browser downloads?
 *
 * A pass means the exact configured DSN string was found in the served HTML or in one of the page's
 * own JavaScript chunks, which is the only direct evidence that the browser SDK will initialise.
 * Anything short of the exact string is a fail with the reason spelled out, never a shrug.
 */
async function checkDsnInBundle(
  dsn: ParsedDsn,
  pages: PageFetch[],
  opts: Options,
): Promise<Check> {
  const name = "dsn-in-client-bundle";
  if (pages.length === 0) {
    return { name, verdict: "unknown", detail: "no page could be fetched, so no bundle was inspected" };
  }

  const notes: string[] = [];
  for (const page of pages) {
    if (page.fetched.body.includes(dsn.raw)) {
      return {
        name,
        verdict: "pass",
        detail: `the exact DSN is inlined in the HTML of ${page.path}`,
        notes,
      };
    }
  }

  const chunkUrls: string[] = [];
  for (const page of pages) {
    for (const url of extractScriptUrls(page.fetched.body, page.url)) {
      if (!chunkUrls.includes(url)) chunkUrls.push(url);
    }
  }
  if (chunkUrls.length === 0) {
    return {
      name,
      verdict: "unknown",
      detail:
        `found no same-origin JavaScript URLs in ${pages.length} page(s), so there was no bundle to inspect. ` +
        "That usually means the page is behind a bot wall, a login redirect, or deployment protection.",
    };
  }

  const capped = chunkUrls.slice(0, opts.maxChunks);
  if (capped.length < chunkUrls.length) {
    notes.push(`scanned the first ${capped.length} of ${chunkUrls.length} chunks (raise --max-chunks to widen)`);
  }
  const results = await getAll(capped, opts.timeoutMs);

  let fetched = 0;
  const failures: string[] = [];
  let partialHit: string | null = null;
  for (const { url, result } of results) {
    if (!result.ok || result.status >= 400) {
      failures.push(`${url} (${result.ok ? `HTTP ${result.status}` : result.error})`);
      continue;
    }
    fetched++;
    if (result.body.includes(dsn.raw)) {
      return {
        name,
        verdict: "pass",
        detail: `the exact DSN is present in ${new URL(url).pathname} (scanned ${fetched} of ${capped.length} chunk(s))`,
        notes,
      };
    }
    if (!partialHit && result.body.includes(dsn.publicKey) && result.body.includes(dsn.host)) {
      partialHit = new URL(url).pathname;
    }
  }

  if (fetched === 0) {
    return {
      name,
      verdict: "unknown",
      detail: `none of the ${capped.length} JavaScript chunk(s) could be fetched: ${failures.slice(0, 3).join("; ")}`,
      notes,
    };
  }
  if (failures.length > 0) notes.push(`${failures.length} chunk(s) could not be fetched`);

  if (partialHit) {
    return {
      name,
      verdict: "fail",
      detail:
        `the DSN's public key and ingest host both appear in ${partialHit}, but the exact DSN string does not. ` +
        "That is usually a minifier splitting the literal, or a DSN assembled at runtime. Verify by hand before trusting it.",
      notes,
    };
  }
  return {
    name,
    verdict: "fail",
    detail:
      `the DSN is NOT in the client bundle: scanned ${fetched} chunk(s) from ${pages.length} page(s) and the HTML, no match. ` +
      "The browser SDK is inert, so no browser-side error has ever been reported. Most likely NEXT_PUBLIC_SENTRY_DSN " +
      "is unset in the deployed environment, or was set after the last build (env changes need a redeploy). " +
      "If the client init lives in a route-specific chunk, re-run with --page <that route> before concluding.",
    notes,
  };
}

/**
 * CHECK 2. Does the site's CSP permit the ingest origin the DSN names?
 *
 * The header is read from the response the browser would actually get, plus any `<meta>` policy in
 * the document, because both are enforced. Report-only policies are listed as information and never
 * counted either way: they cannot block, so they can neither fail nor prove anything.
 */
function checkCsp(dsn: ParsedDsn, pages: PageFetch[]): Check {
  const name = "csp-allows-ingest";
  if (pages.length === 0) {
    return { name, verdict: "unknown", detail: "no page could be fetched, so no headers were read" };
  }
  const target = new URL(dsn.envelopeUrl);
  const notes: string[] = [];
  const results: Check[] = [];

  for (const page of pages) {
    const policies: CspPolicy[] = [];
    const header = page.fetched.headers.get("content-security-policy");
    if (header) policies.push(...parseCspPolicies(header, `${page.path} header`));
    for (const meta of extractMetaCsp(page.fetched.body)) {
      policies.push(...parseCspPolicies(meta, `${page.path} <meta> policy`));
    }
    const reportOnly = page.fetched.headers.get("content-security-policy-report-only");
    if (reportOnly) {
      notes.push(
        `${page.path} also sends a report-only policy, which never blocks and is not evaluated here: ${reportOnly}`,
      );
    }
    const finding = cspVerdict(policies, target, new URL(page.url));
    results.push({ name, ...finding });
  }

  const failed = results.find((r) => r.verdict === "fail");
  if (failed) return { ...failed, notes };
  const unknown = results.find((r) => r.verdict === "unknown");
  if (unknown) return { ...unknown, notes };
  return {
    name,
    verdict: "pass",
    detail: results.map((r) => r.detail).join(" | "),
    notes,
  };
}

/**
 * CHECK 3. Does the ingest hostname exist?
 *
 * Cheap, and it closes a real hole: checks 1 and 2 both derive from the SAME configured string, so a
 * DSN naming a host that does not exist passes both of them while every event in production goes
 * nowhere. A DNS lookup is the least invasive way to ask whether that host is real, and it is a
 * lookup only: no HTTP request is made to the vendor.
 *
 * BE CLEAR ABOUT ITS REACH, because a check people over-trust is its own hazard. Ingest providers
 * wildcard their DNS, so `o9999999.ingest.us.sentry.io` resolves whether or not org 9999999 exists.
 * This catches a wrong or misspelled HOST (a bad region, a stale vendor domain, a mangled DSN); it
 * does NOT prove the org or the project behind it exists, is enabled, or is under quota. Proving
 * that would mean sending an event, which this harness will not do.
 */
async function checkIngestResolves(dsn: ParsedDsn): Promise<Check> {
  const name = "ingest-host-resolves";
  try {
    const { address } = await lookup(dsn.host);
    return { name, verdict: "pass", detail: `${dsn.host} resolves (${address})` };
  } catch (err) {
    // ENOTFOUND is the resolver saying "that name does not exist", which is a real finding about the
    // DSN. Every other failure (EAI_AGAIN, a timeout, no network) is about THIS machine, so it is
    // reported as undetermined rather than blamed on the configuration.
    const code = err instanceof Error && "code" in err ? String((err as { code: unknown }).code) : "";
    if (code === "ENOTFOUND") {
      return {
        name,
        verdict: "fail",
        detail: `${dsn.host} does not resolve, so the configured DSN names a host that does not exist (check the ingest host in the DSN: a mistyped region or a stale vendor domain looks exactly like this)`,
      };
    }
    return {
      name,
      verdict: "unknown",
      detail: `could not resolve ${dsn.host}: ${err instanceof Error ? err.message : String(err)} (this machine's DNS may be the problem, not the DSN)`,
    };
  }
}

/**
 * CHECK 4. Is `/api/health` genuinely healthy?
 *
 * Genuinely, not merely 200: a 200 that returns HTML is what a catch-all route, an SPA fallback, or
 * a bot wall returns, and a 200 whose JSON says nothing about health proves nothing. Both report as
 * "unknown", which fails the run. See healthVerdict in scripts/lib/observability-checks.ts.
 */
async function checkHealth(target: string, opts: Options): Promise<Check> {
  const name = "health-endpoint";
  const url = new URL(opts.healthPath, target).toString();
  const result = await get(url, opts.timeoutMs);
  if (!result.ok) {
    return { name, verdict: "unknown", detail: `${url} could not be fetched: ${result.error}` };
  }
  const notes: string[] = [];
  if (result.finalUrl !== url) notes.push(`redirected to ${result.finalUrl}`);
  if (result.status !== 200) {
    return { name, verdict: "fail", detail: `${url} returned HTTP ${result.status}`, notes };
  }
  const contentType = result.headers.get("content-type") ?? "";
  if (!/json/i.test(contentType)) {
    return {
      name,
      verdict: "unknown",
      detail:
        `${url} returned 200 with content-type "${contentType || "(none)"}" instead of JSON. ` +
        "A 200 HTML page is what a catch-all route or a bot wall returns, so this is not evidence of health.",
      notes,
    };
  }
  let body: unknown;
  try {
    body = JSON.parse(result.body);
  } catch {
    return { name, verdict: "unknown", detail: `${url} returned 200 but the body is not valid JSON`, notes };
  }
  const finding = healthVerdict(body);
  return { name, ...finding, detail: `${finding.detail} (${url})`, notes };
}

// ---------------------------------------------------------------------------
// Reporting
// ---------------------------------------------------------------------------

const LABEL: Record<Verdict, string> = {
  pass: "PASS     ",
  fail: "FAIL     ",
  unknown: "NOT KNOWN",
};

function printChecks(target: string, checks: Check[]): void {
  console.log(`\n== ${target}`);
  for (const check of checks) {
    console.log(`  ${LABEL[check.verdict]}  ${check.name}`);
    console.log(`             ${check.detail}`);
    for (const note of check.notes ?? []) console.log(`             note: ${note}`);
  }
}

async function main(): Promise<void> {
  const opts = parseArgs(process.argv.slice(2));
  const resolution = resolveDsn(opts);

  if (!opts.json) {
    console.log("verify-observability: read-only checks against a deployed URL (GET requests only).");
    if (resolution.dsn) {
      console.log(`DSN source: ${resolution.source}`);
      console.log(`DSN:        ${opts.showDsn ? resolution.dsn.raw : redactDsn(resolution.dsn)}`);
      console.log(`Ingest:     ${resolution.dsn.ingestOrigin} (derived from the DSN, not assumed)`);
      if (resolution.warning) console.log(`Warning:    ${resolution.warning}`);
    } else {
      console.log(`DSN source: NONE. ${resolution.reason}`);
    }
  }

  const report: Array<{ target: string; checks: Check[] }> = [];

  for (const rawTarget of opts.targets) {
    const target = /^https?:\/\//i.test(rawTarget) ? rawTarget : `https://${rawTarget}`;
    const checks: Check[] = [];

    const { pages, errors } = await fetchPages(target, opts);
    for (const error of errors) {
      checks.push({ name: "page-fetch", verdict: "unknown", detail: `could not fetch ${error}` });
    }

    if (resolution.dsn) {
      checks.push(await checkDsnInBundle(resolution.dsn, pages, opts));
      checks.push(checkCsp(resolution.dsn, pages));
      checks.push(await checkIngestResolves(resolution.dsn));
    } else {
      // The full reason is printed once in the header (and carried in --json as dsnReason), so the
      // per-check line stays short. What it must never do is soften: three "not known" rows and a
      // non-zero exit, not a hedge that reads like a pass.
      const detail = "cannot be checked: no DSN could be determined (see the DSN source line above)";
      checks.push({ name: "dsn-in-client-bundle", verdict: "unknown", detail });
      checks.push({
        name: "csp-allows-ingest",
        verdict: "unknown",
        detail: "cannot be checked: without a DSN there is no ingest origin to test the policy against",
      });
      checks.push({ name: "ingest-host-resolves", verdict: "unknown", detail });
    }

    checks.push(await checkHealth(target, opts));
    report.push({ target, checks });
    if (!opts.json) printChecks(target, checks);
  }

  const allChecks = report.flatMap((r) => r.checks);
  const passed = allChecks.filter((c) => c.verdict === "pass").length;
  const failed = allChecks.filter((c) => c.verdict === "fail").length;
  const unknown = allChecks.filter((c) => c.verdict === "unknown").length;
  const verified = failed === 0 && unknown === 0;

  if (opts.json) {
    console.log(
      JSON.stringify(
        {
          verified,
          dsnSource: resolution.dsn ? resolution.source : null,
          dsnReason: resolution.dsn ? null : resolution.reason,
          ingestOrigin: resolution.dsn ? resolution.dsn.ingestOrigin : null,
          totals: { passed, failed, unknown },
          targets: report.map((r) => ({
            target: r.target,
            checks: r.checks.map((c) => ({ name: c.name, verdict: c.verdict, detail: c.detail, notes: c.notes ?? [] })),
          })),
        },
        null,
        2,
      ),
    );
  } else {
    console.log(
      `\n${opts.targets.length} target(s): ${passed} verified, ${failed} failed, ${unknown} could not be determined.`,
    );
    if (!verified) {
      console.log(
        "A check that could not be determined counts as NOT verified, on purpose: reporting green " +
          "on something this script could not actually look at is the failure mode it exists to prevent.",
      );
    }
  }

  process.exit(verified ? 0 : 1);
}

main().catch((err: unknown) => {
  console.error(`verify-observability failed: ${err instanceof Error ? err.stack : String(err)}`);
  process.exit(1);
});
