// Pure helpers for scripts/check-citation-titles.ts: what a citation says it cites, what a fetched
// page says it is, and how the two compare. No network and no filesystem, so
// tests/citation-titles.test.ts can pin every case without a connection.

/**
 * How one citation compares with the page its URL answers with.
 *
 *   ok                the cited title matches the page's <title> or og:title (see titlesMatch), or
 *                     the URL answered 200 with a PDF (titles are not compared for PDFs)
 *   title-mismatch    the page answered and has a title, and it is not the cited one
 *   dead              404 or 410, a DNS failure, or a 200 whose title says "page not found"
 *   blocked           401, 403, 429, or a bot wall ("Just a moment...", "Access denied", a
 *                     JavaScript challenge) at any status: the page could not be checked from here
 *   redirect-to-home  the final URL is a site root while the cited URL was a deeper page
 *   timeout           no answer within the deadline
 *   no-title          the page answered 2xx with neither <title> nor og:title
 *   error             anything else: a 5xx, another 4xx, a TLS or connection failure, a redirect loop
 *   unchecked         no fetch record for the URL (an --offline or --limit run, or a URL that could
 *                     not be parsed)
 */
export type CitationClass =
  | "ok"
  | "title-mismatch"
  | "dead"
  | "blocked"
  | "redirect-to-home"
  | "timeout"
  | "no-title"
  | "error"
  | "unchecked";

export const CLASS_ORDER: readonly CitationClass[] = [
  "ok",
  "title-mismatch",
  "dead",
  "blocked",
  "redirect-to-home",
  "timeout",
  "no-title",
  "error",
  "unchecked",
];

/** Classes that mean "the page could not be judged from here", so they are left out of the ok share. */
export const UNCHECKABLE: ReadonlySet<CitationClass> = new Set(["blocked", "timeout", "error", "unchecked"]);

/** One fetched URL, as stored in plans/reports/citation-check-cache.json. */
export interface FetchRecord {
  /** The cited URL after cleanCitationUrl. */
  url: string;
  /** ISO timestamp of the fetch. */
  checkedAt: string;
  /** Where the redirects ended; the cited URL itself when there was none. Null on a network error. */
  finalUrl: string | null;
  status: number | null;
  contentType: string | null;
  title: string | null;
  ogTitle: string | null;
  error: "timeout" | "dns" | "network" | null;
  /** The error code or message, for the report. */
  errorDetail?: string;
  /** The page is a bot wall or a challenge page, whatever its status. */
  botWall?: boolean;
  /** A 2xx page whose title says the page does not exist. */
  softNotFound?: boolean;
  /** Redirect hops followed. */
  hops?: number;
}

// ---------------------------------------------------------------------------------------------
// What the citation says it cites

/** `*Title*` segments; `**bold**` is not a title. Group 2 is the segment. */
const ITALIC_RE = /(^|[^*\w])\*(?!\*)([^*\n]+?)\*(?![*\w])/g;
/** The APA date parenthetical: (2015), (2015, June 18), (n.d.), (n.d.-b), (ca. 1850), (in press). */
const YEAR_PAREN_RE = /\((?:n\.d\.(?:-[a-z]+)?|(?:ca\. ?)?\d{4}[a-z]?(?:\s*[\/–-]\s*\d{2,4})?(?:,\s*[^)]*)?|in press)\)\.?\s*/i;
/** Where a title segment ends: a sentence period, a URL, a bracketed descriptor, a locator note. */
const TITLE_END_RE = /[.?!]\s|[.?!]$|\s+https?:\/\/|\s+\[|\s+Locator:|\s+Where to look:/;
/** Legal citations put the title before the year: Shelley v. Kraemer, 334 U.S. 1 (1948). */
const LEGAL_SHAPE_RE = / v\. |C\.F\.R\.|U\.S\.C\.|Pub\. L\.|\bStat\.|§| U\.S\. |\bCFR\b|\bUSC\b/;

function stripEmphasis(s: string): string {
  return s.replace(/\*+/g, "").trim();
}

function trimTitle(s: string): string {
  let t = stripEmphasis(s)
    .replace(/\s+/g, " ")
    .trim();
  // A trailing opening parenthetical that TITLE_END_RE cut short: "Title (Vol" from "(Vol. 1)".
  const open = t.lastIndexOf("(");
  if (open !== -1 && !t.slice(open).includes(")")) t = t.slice(0, open);
  return t.replace(/[\s.,;:]+$/, "").trim();
}

export interface CitedTitles {
  /** The title the report shows for this citation. Empty when nothing title-shaped was found. */
  primary: string;
  /** Every segment that could be the cited title; a page matching any of them counts as ok. */
  candidates: string[];
}

/**
 * The title(s) an APA entry gives its source.
 *
 * Three shapes in the catalog: the house style `Author. (Year). *Title*. URL`, journal articles
 * `Author. (Year). Article title. *Journal, vol*(issue), pages. DOI` (the italic segment is the
 * journal, the title is the plain segment after the year), and legal citations whose title precedes
 * the year. The segment after the year is the primary; every italic segment is a further candidate;
 * a legal-shaped entry adds the text before the year. Matching against several candidates is what
 * keeps a correctly cited journal article from reading as a mismatch because its journal name is not
 * the page title.
 */
export function citedTitles(text: string): CitedTitles {
  const body = text.replace(/^\s*\d+\.\s+/, "").trim();
  const candidates: string[] = [];
  const push = (s: string | undefined | null) => {
    const t = s ? trimTitle(s) : "";
    if (t.length >= 2 && !candidates.includes(t)) candidates.push(t);
  };

  let primary = "";
  const year = YEAR_PAREN_RE.exec(body);
  if (year) {
    const rest = body.slice(year.index + year[0].length);
    const end = TITLE_END_RE.exec(rest);
    // A sentence period is dropped; a title's own question or exclamation mark stays.
    const cut = end ? end.index + (/^[?!]/.test(end[0]) ? 1 : 0) : rest.length;
    const seg = trimTitle(rest.slice(0, cut));
    if (seg && !/^https?:\/\//i.test(seg)) {
      primary = seg;
      push(seg);
    }
  }

  for (const m of body.matchAll(ITALIC_RE)) push(m[2]);
  if (!primary && candidates.length) primary = candidates[0];

  if (LEGAL_SHAPE_RE.test(body)) {
    const before = year ? body.slice(0, year.index) : body.split(/\s+https?:\/\//)[0];
    push(before.replace(/[\s,.;:]+$/, ""));
    const firstSentence = body.split(/\.\s/)[0];
    push(firstSentence);
    if (!primary) primary = candidates[0] ?? "";
  }

  if (!primary) {
    const head = stripEmphasis(body.split(/\s+https?:\/\//)[0]).slice(0, 120).trim();
    primary = head;
    push(head);
  }
  return { primary, candidates };
}

// ---------------------------------------------------------------------------------------------
// Normalising and comparing titles

/** Lowercase, accents and punctuation gone, "&" read as "and", whitespace collapsed. */
export function normalizeTitle(s: string): string {
  return s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[‘’‚‛]/g, "'")
    .replace(/[“”„‟]/g, '"')
    .replace(/&/g, " and ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

/** Separators sites put between a page's title and their own name (the fullwidth bar needs no spaces). */
const SITE_SEPARATOR_RE = /\s+(?:\||-|–|—|·|::|»|«|\/)\s+|\s*｜\s*/;

export interface TitleVariants {
  /** The whole title, the title minus its last segment (the usual site suffix), minus its first. */
  stripped: string[];
  /** The title minus its last segment: the page's own title when the site name trails it. Null for one segment. */
  leading: string | null;
  /** Each segment on its own: "Help - PubMed" gives "help" and "pubmed". */
  segments: string[];
}

/**
 * The page title with its site suffix (or prefix) removed, and its separate segments, normalised.
 * Kept apart because a lone segment is often just the site's name, and a site name inside a cited
 * title ("National Archives" inside "Search tips for the National Archives Catalog") is not a match.
 */
export function titleVariants(pageTitle: string): TitleVariants {
  const stripped = new Set<string>();
  const segments = new Set<string>();
  const full = normalizeTitle(pageTitle);
  if (full) stripped.add(full);
  const parts = pageTitle.split(SITE_SEPARATOR_RE).map((p) => p.trim()).filter(Boolean);
  let leading: string | null = null;
  if (parts.length > 1) {
    leading = normalizeTitle(parts.slice(0, -1).join(" ")) || null;
    for (const v of [parts.slice(0, -1).join(" "), parts.slice(1).join(" ")]) {
      const n = normalizeTitle(v);
      if (n) stripped.add(n);
    }
    for (const p of parts) {
      const n = normalizeTitle(p);
      if (n) segments.add(n);
    }
  }
  return { stripped: [...stripped], leading, segments: [...segments] };
}

const MIN_SUBSTRING = 8;
const MIN_PAGE_IN_CITED = 12;
const MIN_PAGE_IN_CITED_COVER = 0.5;
const MIN_SEGMENT_EQUAL = 6;
const MIN_PREFIX = 20;
const MIN_SLUG = 20;

/**
 * Does the cited title name the page? True when, after normalising, the two are equal; the cited
 * title is inside the page title (at least 8 characters, so "Home" never matches everything); the
 * page title with its site name stripped equals the cited title, or a lone segment of at least 6
 * characters does; the page title (or the stripped one) sits inside the cited title and is at least
 * 12 characters and half the cited title's length (the citation added a subtitle or a series, as
 * opposed to the page title being merely the site's name); the page's own title (before the site
 * name) is the first words of the cited title ("BST-55" for "BST-55: Digital triax base station");
 * or the page title is truncated with an ellipsis and is a prefix of the cited title.
 */
export function titlesMatch(cited: string, pageTitle: string): boolean {
  const c = normalizeTitle(cited);
  if (c.length < 3) return false;
  const full = normalizeTitle(pageTitle);
  if (!full) return false;
  if (c === full) return true;
  if (c.length >= MIN_SUBSTRING && full.includes(c)) return true;
  const { stripped, leading, segments } = titleVariants(pageTitle);
  for (const v of stripped) {
    if (v === c && v.length >= MIN_SEGMENT_EQUAL) return true;
    if (v.length >= MIN_PAGE_IN_CITED && v.length >= c.length * MIN_PAGE_IN_CITED_COVER && c.includes(v)) return true;
  }
  for (const v of segments) {
    if (v === c && v.length >= MIN_SEGMENT_EQUAL) return true;
  }
  for (const v of [full, leading]) {
    if (v && v.length >= MIN_SEGMENT_EQUAL && c.startsWith(`${v} `)) return true;
  }
  if (/(\.\.\.|…)\s*$/.test(pageTitle.trim())) {
    const prefix = normalizeTitle(pageTitle.trim().replace(/(\.\.\.|…)\s*$/, ""));
    if (prefix.length >= MIN_PREFIX && c.startsWith(prefix)) return true;
  }
  return false;
}

/**
 * The last path segment of a URL read as words: "/understanding-coaxial-cable-terms/" gives
 * "understanding coaxial cable terms". Null when the path is empty or the segment is an id.
 */
export function slugTitle(url: string | null): string | null {
  if (!url) return null;
  try {
    const segs = new URL(url).pathname.split("/").filter(Boolean);
    const last = segs.at(-1);
    if (!last) return null;
    const words = normalizeTitle(decodeURIComponent(last).replace(/\.[a-z0-9]{2,5}$/i, "").replace(/[-_+]+/g, " "));
    return /\p{L}{3}/u.test(words) ? words : null;
  } catch {
    return null;
  }
}

/** The URL's slug carries the cited title (at least 20 characters of it): a site retitled its page
 *  but left the address, as coaxicom.com did; the citation named the page correctly when written. */
export function slugMatches(cited: string, url: string | null): boolean {
  const slug = slugTitle(url);
  if (!slug || slug.length < MIN_SLUG) return false;
  const c = normalizeTitle(cited);
  if (c.length < MIN_SUBSTRING) return false;
  return c === slug || c.includes(slug) || slug.includes(c);
}

/** True when any candidate matches the page's <title> or og:title, or the slug of one of the URLs. */
export function anyTitleMatches(candidates: string[], title: string | null, ogTitle: string | null, urls: (string | null)[] = []): boolean {
  const pages = [title, ogTitle].filter((t): t is string => !!t && t.trim().length > 0);
  if (candidates.some((c) => pages.some((p) => titlesMatch(c, p)))) return true;
  return candidates.some((c) => urls.some((u) => slugMatches(c, u)));
}

// ---------------------------------------------------------------------------------------------
// Reading a fetched page

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  ndash: "–",
  mdash: "—",
  hellip: "…",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
  laquo: "«",
  raquo: "»",
  middot: "·",
  bull: "•",
  copy: "©",
  reg: "®",
  trade: "™",
  eacute: "é",
  egrave: "è",
  aacute: "á",
  iacute: "í",
  oacute: "ó",
  uacute: "ú",
  ntilde: "ñ",
  ccedil: "ç",
  uuml: "ü",
  ouml: "ö",
  auml: "ä",
};

export function decodeEntities(s: string): string {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h: string) => safeChar(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d: string) => safeChar(parseInt(d, 10)))
    .replace(/&([a-z]+);/gi, (m, name: string) => NAMED_ENTITIES[name.toLowerCase()] ?? m);
}

function safeChar(code: number): string {
  return Number.isFinite(code) && code > 0 && code < 0x110000 ? String.fromCodePoint(code) : "";
}

function cleanText(s: string): string {
  const t = decodeEntities(s.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
  return t.length ? t : "";
}

/** Attribute name to value for one HTML start tag. */
function attributes(tag: string): Map<string, string> {
  const out = new Map<string, string>();
  const re = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/g;
  for (const m of tag.matchAll(re)) out.set(m[1].toLowerCase(), decodeEntities(m[2] ?? m[3] ?? m[4] ?? ""));
  return out;
}

/** The document <title> and the og:title meta content, from the start of an HTML document. */
export function extractPageTitles(html: string): { title: string | null; ogTitle: string | null } {
  const t = /<title[^>]*>([\s\S]*?)<\/title\s*>/i.exec(html);
  const title = t ? cleanText(t[1]) : "";
  let ogTitle = "";
  for (const m of html.matchAll(/<meta\b[^>]*>/gi)) {
    const a = attributes(m[0]);
    const key = (a.get("property") ?? a.get("name") ?? "").toLowerCase();
    if (key === "og:title" && a.get("content")) {
      ogTitle = a.get("content")!.replace(/\s+/g, " ").trim();
      break;
    }
  }
  return { title: title || null, ogTitle: ogTitle || null };
}

/** The charset a page declares, from its Content-Type header or its first bytes. */
export function detectCharset(contentType: string | null, head: string): string {
  const fromHeader = /charset=["']?([\w-]+)/i.exec(contentType ?? "");
  if (fromHeader) return fromHeader[1];
  const fromMeta = /<meta[^>]+charset=["']?([\w-]+)/i.exec(head);
  return fromMeta ? fromMeta[1] : "utf-8";
}

const BOT_WALL_TITLE_RE =
  /just a moment|attention required|access denied|access to this page has been denied|are you a robot|robot or human|verify (?:that )?you are (?:a )?human|human verification|security check|checking your browser|pardon our interruption|request unsuccessful|bot verification|enable javascript and cookies|ddos-guard|unusual traffic|one more step|captcha|request blocked|you have been blocked|403 forbidden|^forbidden$|radware|incapsula|please wait\.\.\./i;
const BOT_WALL_BODY_RE =
  /cf-browser-verification|cf-chl-|challenge-platform|_Incapsula_Resource|px-captcha|Enable JavaScript and cookies to continue|Please enable JS and disable any ad blocker|Checking if the site connection is secure|verify you are human/i;

/** A challenge page or an outright block, whatever status it carried. */
export function looksLikeBotWall(title: string | null, bodyStart: string): boolean {
  return (!!title && BOT_WALL_TITLE_RE.test(title)) || BOT_WALL_BODY_RE.test(bodyStart);
}

const NOT_FOUND_TITLE_RE =
  /\b(?:page|file|document|article|resource) (?:not found|cannot be found|could not be found|does not exist|doesn't exist)\b|^\s*(?:error\s*)?404\b|\b404 (?:error|not found)\b|\bnot found\s*$|no longer (?:available|exists)/i;

/** A 2xx page whose title says there is nothing here. */
export function looksLikeNotFound(title: string | null): boolean {
  return !!title && NOT_FOUND_TITLE_RE.test(title);
}

export function isPdfResponse(contentType: string | null, url: string): boolean {
  const ct = (contentType ?? "").toLowerCase();
  if (ct.includes("application/pdf") || ct.includes("application/x-pdf")) return true;
  return /\.pdf(?:$|[?#])/i.test(url) && (ct.includes("octet-stream") || ct === "");
}

// ---------------------------------------------------------------------------------------------
// URLs

/** The first URL of an entry, cleaned for fetching: trailing sentence punctuation gone, a bare DOI
 *  given its resolver. Null when it is not an http(s) URL. */
export function cleanCitationUrl(raw: string | undefined | null): string | null {
  if (!raw) return null;
  let u = raw.trim().replace(/[.,;:!?]+$/, "");
  if (/^10\.\d{4,}\//.test(u)) u = `https://doi.org/${u}`;
  if (!/^https?:\/\//i.test(u)) return null;
  try {
    new URL(u);
    return u;
  } catch {
    return null;
  }
}

export function hostOf(url: string): string {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return "";
  }
}

/** The site root, or an index page at it: where a dead deep link often lands. */
export function isRootUrl(url: string | null): boolean {
  if (!url) return false;
  try {
    const p = new URL(url).pathname;
    return p === "" || p === "/" || /^\/(?:index|default|home)\.(?:html?|php|aspx?)$/i.test(p);
  } catch {
    return false;
  }
}

export function isRedirectStatus(status: number): boolean {
  return status === 301 || status === 302 || status === 303 || status === 307 || status === 308;
}

// ---------------------------------------------------------------------------------------------
// Classification

/**
 * One citation against the fetch record for its URL. `candidates` is citedTitles(text).candidates;
 * `rec` is undefined when the URL was never fetched.
 */
export function classify(candidates: string[], citedUrl: string, rec: FetchRecord | undefined): CitationClass {
  if (!rec) return "unchecked";
  if (rec.error === "timeout") return "timeout";
  if (rec.error === "dns") return "dead";
  if (rec.error === "network") return "error";
  if (rec.status === null) return "error";
  if (rec.botWall) return "blocked";
  const s = rec.status;
  if (s === 401 || s === 403 || s === 429) return "blocked";
  if (s === 404 || s === 410) return "dead";
  if (s >= 300) return "error";
  if (rec.softNotFound) return "dead";
  if (isPdfResponse(rec.contentType, rec.finalUrl ?? citedUrl)) return "ok";
  if (isRootUrl(rec.finalUrl) && !isRootUrl(citedUrl)) return "redirect-to-home";
  if (!rec.title && !rec.ogTitle) return "no-title";
  return anyTitleMatches(candidates, rec.title, rec.ogTitle, [citedUrl, rec.finalUrl]) ? "ok" : "title-mismatch";
}
