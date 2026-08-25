/**
 * Pure predicates behind `pnpm verify:observability` (scripts/verify-observability.ts).
 *
 * They live here, away from the CLI, for the reason scripts/lib/faa-quiz-placement.ts does: the
 * network wrapper cannot be unit tested without hitting a live deployment, but the JUDGMENT it
 * makes can be, and the judgment is where a silent bug turns the harness into a liar. A CSP matcher
 * that wrongly returns "allowed" reports a green tick over 100% packet loss on browser-side error
 * reports, which is worse than having no harness at all. tests/verify-observability.test.ts pins
 * every rule below, including the real `connect-src 'self' data:` policy that started this work.
 *
 * Three ideas run through all of it:
 *
 *  1. THREE-VALUED, NEVER TWO. Every predicate can answer "yes", "no", or "I could not tell", and
 *     the caller treats the third as a failure. Nothing here ever guesses in the direction of pass.
 *  2. NOTHING IS HARDCODED THAT AN EXTERNAL SYSTEM OWNS. The DSN, its ingest origin, and its
 *     project id are read from config and parsed, never assumed. There is no built-in default DSN,
 *     because a wrong one would verify a fiction (see the authoritative-values rule in CLAUDE.md).
 *  3. READ-ONLY. Nothing here performs I/O at all; the CLI that calls it only ever issues GETs.
 */

/** A check either verified something, disproved it, or could not tell. "unknown" is NOT a pass. */
export type Verdict = "pass" | "fail" | "unknown";

// ---------------------------------------------------------------------------
// Sentry DSN
// ---------------------------------------------------------------------------

/**
 * A DSN in the Sentry grammar. The HOST IS NOT ALWAYS SENTRY: Better Stack (this ecosystem's actual
 * provider) exposes a Sentry-compatible ingest under `*.betterstackdata.com`, and self-hosted and
 * relay setups use other hosts again. That is precisely why every field below is parsed out of the
 * configured value and nothing about the vendor is assumed anywhere in this file.
 */
export type ParsedDsn = {
  /** The DSN exactly as configured. This exact string is what must appear in the client bundle. */
  raw: string;
  /** Public key (the DSN's userinfo). Shipped to browsers by design, so not a secret, but noisy. */
  publicKey: string;
  /** e.g. `o4509...ingest.us.sentry.io` or `s264....betterstackdata.com`. Parsed, never assumed. */
  host: string;
  /** The scheme + host the browser connects to, and therefore what a CSP has to permit. */
  ingestOrigin: string;
  /** Numeric project id, the DSN's path. */
  projectId: string;
  /**
   * The URL the browser SDK actually posts envelopes to. CSP source expressions may carry a path,
   * so matching against this full URL rather than just the origin keeps a path-scoped policy honest.
   */
  envelopeUrl: string;
};

/**
 * Parse a DSN of the form `https://<publicKey>@<host>/<projectId>`.
 *
 * Returns null rather than throwing or half-guessing: an unparseable DSN means the harness cannot
 * know which origin to look for, and the caller must report that as "not verified".
 */
export function parseDsn(raw: string): ParsedDsn | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return null;
  if (!url.username) return null;
  const projectId = url.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!projectId || projectId.includes("/")) return null;
  return {
    raw: trimmed,
    publicKey: url.username,
    host: url.host,
    ingestOrigin: url.origin,
    projectId,
    envelopeUrl: `${url.origin}/api/${projectId}/envelope/`,
  };
}

/**
 * Shorten a DSN for terminal output. The public key is not a secret (every visitor's browser has
 * it), but printing it in full invites it into screenshots and pasted logs for no benefit, so the
 * default output shows enough to tell two DSNs apart and no more. `--show-dsn` prints it whole.
 */
export function redactDsn(dsn: ParsedDsn): string {
  const head = dsn.publicKey.slice(0, 6);
  return `https://${head}...@${dsn.host}/${dsn.projectId}`;
}

// ---------------------------------------------------------------------------
// .env file reading (config-derived values, per the authoritative-values rule)
// ---------------------------------------------------------------------------

/**
 * Minimal dotenv parser. Deliberately not a dependency: it reads `KEY=value`, tolerates a leading
 * `export`, strips one layer of matching quotes, and ignores comments and blanks. Anything more
 * exotic (multi-line values, variable expansion) is out of scope and simply will not match, which
 * surfaces as "DSN not found" rather than as a wrong DSN.
 */
export function parseEnvFile(contents: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = /^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/.exec(trimmed);
    if (!match) continue;
    let value = match[2].trim();
    const quoted =
      (value.startsWith('"') && value.endsWith('"') && value.length > 1) ||
      (value.startsWith("'") && value.endsWith("'") && value.length > 1);
    if (quoted) {
      value = value.slice(1, -1);
    } else {
      // An unquoted trailing comment is not part of the value.
      const hash = value.indexOf(" #");
      if (hash >= 0) value = value.slice(0, hash).trim();
    }
    out[match[1]] = value;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Script-URL extraction from a served page
// ---------------------------------------------------------------------------

/**
 * Every same-origin JavaScript URL a page pulls in, resolved absolute and de-duplicated.
 *
 * It reads three surfaces because Next.js uses all three and which one carries the client entry
 * changes between releases: `<script src>`, `<link ... as="script" href>` preloads, and bare
 * `/_next/static/...js` paths that appear inside the RSC flight payload (`self.__next_f.push`).
 * Missing the chunk that holds the SDK init would look identical to "the DSN is not in the bundle",
 * so over-collecting here is the safe direction.
 *
 * CROSS-ORIGIN SCRIPTS ARE SKIPPED on purpose: this harness only ever fetches the deployment it was
 * pointed at, so it can never be turned into a request generator against a third party.
 */
export function extractScriptUrls(html: string, pageUrl: string): string[] {
  const base = new URL(pageUrl);
  const found = new Set<string>();
  const add = (candidate: string): void => {
    let resolved: URL;
    try {
      resolved = new URL(candidate, base);
    } catch {
      return;
    }
    if (resolved.origin !== base.origin) return;
    if (!/\.js(\?|$)/i.test(resolved.pathname + resolved.search)) return;
    found.add(resolved.toString());
  };

  for (const m of html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)) add(m[1]);
  for (const m of html.matchAll(/<link[^>]+href=["']([^"']+\.js[^"']*)["'][^>]*>/gi)) add(m[1]);
  for (const m of html.matchAll(/\/_next\/static\/[A-Za-z0-9_\-./]+?\.js/g)) add(m[0]);

  return [...found];
}

// ---------------------------------------------------------------------------
// Content-Security-Policy
// ---------------------------------------------------------------------------

export type CspPolicy = {
  /** Where this policy arrived from, for the failure message. */
  source: string;
  /** Directive name (lowercased) to its source list. */
  directives: Map<string, string[]>;
  raw: string;
};

/**
 * Split one header or meta value into policies and directives.
 *
 * A single `Content-Security-Policy` header may carry several comma-separated policies, and `fetch`
 * joins repeated headers the same way, so a comma split at the top level is the correct reading of
 * both. Each policy is enforced independently and ALL of them must allow a request, which is the
 * rule `cspVerdict` applies below.
 */
export function parseCspPolicies(headerValue: string, source: string): CspPolicy[] {
  return headerValue
    .split(",")
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((raw) => {
      const directives = new Map<string, string[]>();
      for (const part of raw.split(";")) {
        const tokens = part.trim().split(/\s+/).filter(Boolean);
        if (tokens.length === 0) continue;
        const name = tokens[0].toLowerCase();
        if (!directives.has(name)) directives.set(name, tokens.slice(1));
      }
      return { source, directives, raw };
    });
}

/** Pull `<meta http-equiv="Content-Security-Policy" content="...">` values out of a page. */
export function extractMetaCsp(html: string): string[] {
  const out: string[] = [];
  const tags = html.matchAll(/<meta\b[^>]*>/gi);
  for (const tag of tags) {
    const text = tag[0];
    if (!/http-equiv\s*=\s*["']?content-security-policy["']?/i.test(text)) continue;
    // The quote characters have to be matched as a PAIR, not as a character class: a CSP value is
    // full of single-quoted keywords ('self', 'none'), so a `["']` terminator would truncate the
    // policy at the first one and quietly turn `connect-src 'self'` into `connect-src `, which then
    // reads as an empty source list. That truncation flips the verdict, so it is worth the regex.
    const content = /content\s*=\s*(?:"([^"]*)"|'([^']*)')/i.exec(text);
    if (content) out.push(content[1] ?? content[2]);
  }
  return out;
}

/**
 * Does one CSP source expression permit `target`?
 *
 * A faithful-enough subset of the CSP3 matching algorithm for the one question this harness asks
 * (may the browser open a connection to the error-ingest envelope endpoint?):
 *
 *  - `*` matches any http/https URL. `'none'` matches nothing.
 *  - `'self'` matches only the page's own origin, which is exactly why `connect-src 'self' data:`
 *    silently kills every browser-side error report.
 *  - Other quoted keywords (`'unsafe-inline'`, nonces, hashes, `'strict-dynamic'`) are not host
 *    sources and never permit a connection on their own.
 *  - A bare scheme (`https:`) matches by scheme.
 *  - A host source may carry a scheme, a `*.` label wildcard, a port, and a path. An `http` scheme
 *    in the source also matches an `https` target, per the spec's upgrade allowance. A wildcard
 *    matches subdomains only, never the bare registrable domain. A path, if present, is matched as
 *    an exact path or, when it ends in `/`, as a prefix.
 */
export function cspSourceAllows(source: string, target: URL, pageOrigin: URL): boolean {
  const token = source.trim();
  if (!token) return false;
  const lower = token.toLowerCase();

  if (lower === "*") return target.protocol === "https:" || target.protocol === "http:";
  if (lower === "'none'") return false;
  if (lower === "'self'") return target.origin === pageOrigin.origin;
  if (lower.startsWith("'")) return false; // nonce, hash, unsafe-*, strict-dynamic, report-sample
  if (/^[a-z][a-z0-9+\-.]*:$/.test(lower)) {
    return lower === `${target.protocol}` || (lower === "http:" && target.protocol === "https:");
  }

  let rest = token;
  let scheme: string | null = null;
  const schemeMatch = /^([a-zA-Z][a-zA-Z0-9+\-.]*):\/\//.exec(rest);
  if (schemeMatch) {
    scheme = schemeMatch[1].toLowerCase();
    rest = rest.slice(schemeMatch[0].length);
  }
  if (scheme) {
    const targetScheme = target.protocol.replace(":", "");
    const schemeOk = scheme === targetScheme || (scheme === "http" && targetScheme === "https");
    if (!schemeOk) return false;
  }

  const slash = rest.indexOf("/");
  const hostPort = slash === -1 ? rest : rest.slice(0, slash);
  const path = slash === -1 ? "" : rest.slice(slash);

  const portSplit = /^(.*?)(?::(\*|\d+))?$/.exec(hostPort);
  if (!portSplit) return false;
  const hostPattern = portSplit[1].toLowerCase();
  const portPattern = portSplit[2];
  if (!hostPattern) return false;

  const targetHost = target.hostname.toLowerCase();
  const hostOk =
    hostPattern === "*"
      ? true
      : hostPattern.startsWith("*.")
        ? targetHost.endsWith(hostPattern.slice(1)) && targetHost !== hostPattern.slice(2)
        : hostPattern === targetHost;
  if (!hostOk) return false;

  if (portPattern && portPattern !== "*") {
    const targetPort = target.port || (target.protocol === "https:" ? "443" : "80");
    if (portPattern !== targetPort) return false;
  }

  if (path && path !== "/") {
    const targetPath = target.pathname;
    if (path.endsWith("/")) {
      if (!targetPath.startsWith(path)) return false;
    } else if (targetPath !== path) {
      return false;
    }
  }
  return true;
}

/** The answer to one question: a verdict plus one already-written line explaining it. */
export type Finding = {
  verdict: Verdict;
  /** One line, already written for a terminal, saying what was decided and why. */
  detail: string;
};

/**
 * Do the enforced policies on this response permit the ingest envelope endpoint?
 *
 * The fallback chain is the spec's: `connect-src`, else `default-src`, else no restriction at all.
 * "No CSP" and "a CSP that does not constrain connections" are both genuine passes and are reported
 * with the reason, so a reader can tell a permissive result from a deliberate allowance. A policy
 * with an empty `connect-src` is `'none'` by another spelling and blocks.
 *
 * REPORT-ONLY POLICIES ARE NOT EVALUATED HERE. They never block a request, so treating one as a
 * blocker would produce a false red, and treating one as an allowance would produce a false green.
 * The CLI prints them as information instead.
 */
export function cspVerdict(policies: CspPolicy[], target: URL, pageOrigin: URL): Finding {
  if (policies.length === 0) {
    return {
      verdict: "pass",
      detail: `no enforced Content-Security-Policy on the response, so nothing restricts the connection to ${target.origin}`,
    };
  }

  const reasons: string[] = [];
  for (const policy of policies) {
    const hasConnect = policy.directives.has("connect-src");
    const list = hasConnect
      ? (policy.directives.get("connect-src") ?? [])
      : (policy.directives.get("default-src") ?? null);
    const which = hasConnect ? "connect-src" : "default-src";

    if (list === null) {
      reasons.push(`${policy.source}: no connect-src and no default-src, so connections are unrestricted`);
      continue;
    }
    if (list.length === 0) {
      return {
        verdict: "fail",
        detail: `${policy.source}: ${which} is empty, which blocks every connection including ${target.origin}`,
      };
    }
    const allowed = list.some((src) => cspSourceAllows(src, target, pageOrigin));
    if (!allowed) {
      return {
        verdict: "fail",
        detail:
          `${policy.source}: ${which} (${list.join(" ")}) does not permit ${target.origin}. ` +
          "Every browser-side error report is being dropped by the browser before it leaves the page, " +
          `while server-side reporting looks perfectly healthy. Fix: add ${target.origin} to ${which}.`,
      };
    }
    reasons.push(`${policy.source}: ${which} permits ${target.origin}`);
  }

  return { verdict: "pass", detail: reasons.join("; ") };
}

// ---------------------------------------------------------------------------
// Health payloads
// ---------------------------------------------------------------------------

const HEALTHY_WORDS = new Set(["ok", "up", "pass", "passing", "alive", "healthy", "green"]);
const UNHEALTHY_WORDS = new Set([
  "fail",
  "failing",
  "failed",
  "down",
  "error",
  "unhealthy",
  "degraded",
  "red",
]);

function leafVerdict(value: unknown): Verdict {
  if (value === true) return "pass";
  if (value === false) return "fail";
  if (typeof value === "string") {
    const word = value.trim().toLowerCase();
    if (HEALTHY_WORDS.has(word)) return "pass";
    if (UNHEALTHY_WORDS.has(word)) return "fail";
  }
  return "unknown";
}

/**
 * Read a health payload and decide whether it says "genuinely healthy".
 *
 * This is the check with the worst historical record, and the reason the rest of the harness is
 * built the way it is: a health endpoint that returns 200 with an HTML page, or 200 with JSON that
 * says nothing about health, has already reported false-healthy three times in this rollout. So the
 * bar is a payload that AFFIRMS health in a recognised field. A 200 nobody can interpret is
 * "unknown", never a pass.
 *
 * It stays shape-tolerant because sibling apps answer differently (`{ok:true}` here,
 * `{status:"ok"}` elsewhere), but tolerance never extends to inventing a verdict: a `checks` map
 * with any failing member fails the whole payload even when a sibling field claims `ok`, because
 * that contradiction is itself a bug worth stopping on.
 */
export function healthVerdict(body: unknown): Finding {
  if (body === null || typeof body !== "object") {
    return {
      verdict: "unknown",
      detail: "the response parsed as JSON but is not an object, so nothing in it affirms health",
    };
  }
  const record = body as Record<string, unknown>;

  const failing: string[] = [];
  const passing: string[] = [];
  for (const field of ["ok", "healthy", "status", "state", "result"]) {
    if (!(field in record)) continue;
    const verdict = leafVerdict(record[field]);
    if (verdict === "fail") failing.push(`${field}=${JSON.stringify(record[field])}`);
    if (verdict === "pass") passing.push(`${field}=${JSON.stringify(record[field])}`);
  }

  const checks = record.checks;
  const checkNotes: string[] = [];
  if (checks !== null && typeof checks === "object") {
    for (const [name, value] of Object.entries(checks as Record<string, unknown>)) {
      const verdict = leafVerdict(value);
      if (verdict === "fail") failing.push(`checks.${name}=${JSON.stringify(value)}`);
      else if (verdict === "pass") checkNotes.push(`${name}=ok`);
      else checkNotes.push(`${name}=${JSON.stringify(value)} (unrecognised)`);
    }
  }

  if (failing.length > 0) {
    return { verdict: "fail", detail: `the payload reports failure: ${failing.join(", ")}` };
  }
  if (passing.length === 0) {
    return {
      verdict: "unknown",
      detail:
        "200 with a JSON body that carries no recognised health field (ok / healthy / status / state / result). " +
        "A 200 nobody can interpret is exactly the false-healthy signal this harness exists to catch.",
    };
  }
  const suffix = checkNotes.length > 0 ? `; checks: ${checkNotes.join(", ")}` : "";
  return { verdict: "pass", detail: `${passing.join(", ")}${suffix}` };
}
