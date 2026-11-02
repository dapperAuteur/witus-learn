// A course's full bibliography for its learners (BAM, 2026-11-01: "each course's full bibliography
// available to students when the course goes live"), with a "used in" note per source: which
// lessons cite it, and the pinpoints (page, section, part, timestamp) those lessons cite.
//
// PURE: no database, no node built-ins, no next/* imports. The page
// (src/app/(tenant)/[username]/[courseSlug]/sources/page.tsx) reads the course's PUBLISHED lessons
// through the tenant-scoped DAL and hands their bodies here.
//
// Where the data comes from: every lesson already ends with an APA 7 `## Sources` block, and the
// entries are pulled out by the SAME parser the citation registry uses (src/lib/citation-entries.ts),
// so the verifier's board and the learner's page agree on what a source is. The pinpoints come from
// the lesson's own in-text citations, "(Belden, 2026a, p. 1)", matched to the entry by author and
// year (apaSignals in src/lib/lesson-excerpt.ts). Nothing from the lesson prose is shown on the page
// except lesson numbers, titles and the locators themselves, so a paid lesson's text never leaks
// through its bibliography.
//
// WHAT IS NOT COVERED (stated so nobody reads an absent pinpoint as "the whole work"):
//   * an entry with no APA year (a prose source, a bare URL) gets no in-text match, so it lists only
//     the lessons whose Sources block names it, with no pinpoint;
//   * a locator written outside the parenthesis ("Smith (2020) ... on page 12") is not caught;
//   * two different works by the same first author in the same year with no letter suffix
//     ("Smith, 2020" twice) would share their pinpoints. APA requires the a/b suffix, and the
//     catalog uses it (Belden, 2026a), so this is the author's error, not a silent merge.

import { CITATION_URL_RE, extractCitations, normalizeCitationEntry } from "@/lib/citation-entries";
import { apaSignals, stripSourcesBlock } from "@/lib/lesson-excerpt";
import { courseStage, type CourseStageInput } from "@/lib/release-followups";

export interface BibliographyLessonInput {
  slug: string | null;
  title: string;
  /** 1-based position among the course's PUBLISHED lessons, in order. */
  position: number;
  body: string | null;
}

export interface BibliographyUse {
  lessonNumber: number;
  lessonTitle: string;
  lessonSlug: string | null;
  /** The locators this lesson cites for this source, in order of first appearance, de-duplicated. */
  pinpoints: string[];
  /** True when the entry is in this lesson's own Sources block (false: cited in its text only). */
  listed: boolean;
  /** The "Locator: ..." clause this lesson's Sources entry carries for the work, when it has one. */
  entryLocators: string[];
}

export interface BibliographyEntry {
  /**
   * The de-duplication key: the entry normalized as the citation registry normalizes it
   * (src/lib/citation-entries.ts), WITHOUT its "Locator:" clause. Lessons often list one work with a
   * different locator each ("p. 4" here, "p. 9" there); for a learner that is one work used in two
   * places, so it is one entry whose uses carry the two locators. (The registry keys keep the
   * clause, because a verifier checks each claim separately.)
   */
  key: string;
  /** The entry as written in the first lesson that lists it, without any "Locator:" clause. */
  text: string;
  url: string | null;
  uses: BibliographyUse[];
}

const LOCATOR_CLAUSE = /\s*\bLocators?:\s*(.+?)\s*$/i;

/**
 * Does this text after the year read as a locator? Deliberately a list of shapes, not "anything":
 * "(as Smith, 2020, argues)" must not become a pinpoint "argues".
 */
const LOCATOR_SHAPE =
  /^(?:pdf\s+)?(?:pp?\.\s*\S|paras?\.|¶|§|sections?\b|sec\.|parts?\b|chapters?\b|chaps?\.|ch\.|tables?\b|figures?\b|figs?\.|columns?\b|cols?\.|sheets?\b|slides?\b|lines?\b|items?\b|articles?\b|art\.|rules?\b|clauses?\b|appendix\b|app\.|vols?\.|volume\b|notes?\b|n\.\s*\d|folios?\b|fols?\.|leaf\b|minutes?\b|min\.|timestamp\b|at\s+\d|\d{1,2}:\d{2}|\d+\s*(?:cfr|u\.s\.c\.)|star page|printed page|questions?\b|q\.\s*\d|exhibits?\b|plates?\b|frames?\b|steps?\b|entries\b|entry\b|tab\.|docket\b)/i;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function yearPattern(year: string, entry: string): string {
  if (year.toLowerCase() === "n.d.") {
    // apaSignals reads "(n.d.-a)" as "n.d."; keep the letter, so n.d.-a and n.d.-b stay two works.
    const suffix = /\(n\.d\.-([a-z])\)/i.exec(entry.replace(/\*+/g, ""))?.[1];
    return suffix ? `n\\.d\\.-${suffix}(?![A-Za-z])` : "n\\.d\\.(?!-[a-z])";
  }
  // "2026" must not match "2026a", and "2026a" must not match inside "2026ab".
  return `(?<![0-9A-Za-z])${escapeRegExp(year)}(?![0-9A-Za-z])`;
}

function cleanLocator(raw: string): string | null {
  const s = raw
    .replace(/\*+/g, "")
    .replace(/^[\s,;:]+/, "")
    .replace(/[\s,;:]+$/, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!s || s.length > 120) return null;
  return LOCATOR_SHAPE.test(s) ? s : null;
}

/**
 * The locators a lesson's prose cites for one source, in order, de-duplicated.
 *
 * Two forms: parenthetical, "(Belden, 2026a, p. 1)" or a group "(Smith, 2020, pp. 4-5; Doe, 2019)",
 * where each `;` part is checked on its own; and narrative, "Hofstede de Groot (1893, p. 190)".
 * Returns `matched: false` when the source is not cited in the text at all.
 */
export function pinpointsFor(body: string | null | undefined, entry: string): { matched: boolean; pinpoints: string[] } {
  if (!body) return { matched: false, pinpoints: [] };
  const signals = apaSignals(entry);
  if (!signals) return { matched: false, pinpoints: [] };
  const prose = stripSourcesBlock(body);
  const author = escapeRegExp(signals.author);
  const year = yearPattern(signals.year, entry);
  const authorRe = new RegExp(`(?<![A-Za-z])${author}(?![a-z])`, "i");
  const yearRe = new RegExp(year, "i");
  const out: string[] = [];
  let matched = false;
  const add = (loc: string | null) => {
    if (loc && !out.includes(loc)) out.push(loc);
  };

  // Parenthetical groups, each `;` part on its own.
  for (const g of prose.matchAll(/\(([^()\n]{1,500})\)/g)) {
    for (const part of g[1].split(";")) {
      if (!authorRe.test(part)) continue;
      const y = yearRe.exec(part);
      if (!y) continue;
      // The author must come before the year inside the part: "(2020, Smith)" is not a citation.
      const a = authorRe.exec(part);
      if (!a || a.index > y.index) continue;
      matched = true;
      add(cleanLocator(part.slice(y.index + y[0].length)));
    }
  }

  // Narrative: Author (Year) or Author (Year, p. 12), with "et al." or a second author allowed.
  const narrative = new RegExp(
    `(?<![A-Za-z])${author}(?:'s|’s)?(?:,? (?:et al\\.|and [A-Z][\\w'’-]+|& [A-Z][\\w'’-]+))?,? ?\\((${year})([^()\\n]{0,160})\\)`,
    "gi",
  );
  for (const m of prose.matchAll(narrative)) {
    matched = true;
    add(cleanLocator(m[2] ?? ""));
  }
  return { matched, pinpoints: out };
}

/** Split an entry into its text and the "Locator: ..." clause the author put inside it. */
export function splitLocatorClause(entry: string): { text: string; locator: string | null } {
  const m = LOCATOR_CLAUSE.exec(entry);
  if (!m || m.index === undefined) return { text: entry.trim(), locator: null };
  return { text: entry.slice(0, m.index).trim(), locator: m[1].trim() || null };
}

/** APA reference-list order: by the entry's text, ignoring emphasis, quotes and case. */
function sortKey(text: string): string {
  return normalizeCitationEntry(text).replace(/^[^a-z0-9]+/, "");
}

/**
 * Every source the course's published lessons cite, de-duplicated by the registry's normalized entry
 * text, each with the lessons that list or cite it and the pinpoints they cite. Sorted like an APA
 * reference list.
 */
export function buildCourseBibliography(lessons: readonly BibliographyLessonInput[]): BibliographyEntry[] {
  const ordered = [...lessons].sort((a, b) => a.position - b.position);
  const byKey = new Map<string, BibliographyEntry>();
  // key -> lesson position -> the Locator clauses that lesson's entry carries.
  const listedIn = new Map<string, Map<number, string[]>>();
  for (const l of ordered) {
    for (const raw of extractCitations(l.body ?? "")) {
      const { text, locator } = splitLocatorClause(raw);
      const key = normalizeCitationEntry(text);
      if (!byKey.has(key)) {
        const url = text.match(CITATION_URL_RE)?.[1] ?? null;
        byKey.set(key, { key, text, url, uses: [] });
        listedIn.set(key, new Map());
      }
      const here = listedIn.get(key)!;
      const locs = here.get(l.position) ?? [];
      if (locator && !locs.includes(locator)) locs.push(locator);
      here.set(l.position, locs);
    }
  }
  for (const entry of byKey.values()) {
    const listed = listedIn.get(entry.key)!;
    for (const l of ordered) {
      const { matched, pinpoints } = pinpointsFor(l.body, entry.text);
      const isListed = listed.has(l.position);
      if (!matched && !isListed) continue;
      entry.uses.push({
        lessonNumber: l.position,
        lessonTitle: l.title,
        lessonSlug: l.slug,
        pinpoints,
        listed: isListed,
        entryLocators: listed.get(l.position) ?? [],
      });
    }
  }
  return [...byKey.values()].sort((a, b) => sortKey(a.text).localeCompare(sortKey(b.text)));
}

// ── Who may see it ───────────────────────────────────────────────────────────

export type BibliographyAccess = "public" | "preview" | "not-found";

/**
 * The gate, computed on read so releasing a course turns the page on with no other step:
 *   * a LIVE course (courseStage: public or members, published, vetted, no hold) → anyone who can
 *     open the course in this tenant;
 *   * anything else (held, unvetted, scheduled, unpublished, private, owner-only) → the course's
 *     editors (canAccessCourse) and holders of an ACCEPTED audit grant on it, with a banner;
 *   * everyone else → not found (never a redirect, which would leak that the course exists).
 */
export function bibliographyAccess(
  course: CourseStageInput,
  viewer: { isEditor: boolean; isAuditor: boolean },
): BibliographyAccess {
  if (courseStage(course) === "live") return "public";
  if (viewer.isEditor || viewer.isAuditor) return "preview";
  return "not-found";
}

// ── Rendering an entry safely ────────────────────────────────────────────────

export type CitationSegment = { kind: "text" | "em"; value: string } | { kind: "link"; value: string; href: string };

/**
 * An APA entry as plain segments: `*Title*` becomes emphasis and a URL or DOI becomes a link. No HTML
 * is ever produced from the entry, so nothing in a lesson file can inject markup into the page.
 */
export function citationSegments(text: string): CitationSegment[] {
  const out: CitationSegment[] = [];
  const parts = text.split(/(\*[^*\n]+\*)/g);
  for (const part of parts) {
    if (!part) continue;
    const em = /^\*([^*\n]+)\*$/.exec(part);
    if (em) {
      out.push({ kind: "em", value: em[1] });
      continue;
    }
    let rest = part;
    const linkRe = /(https?:\/\/[^\s)\]]+|\b10\.\d{4,}\/[^\s)\]]+)/;
    for (;;) {
      const m = linkRe.exec(rest);
      if (!m || m.index === undefined) break;
      if (m.index > 0) out.push({ kind: "text", value: rest.slice(0, m.index) });
      // A trailing period ends the sentence, not the URL.
      const url = m[1].replace(/[.,;:]+$/, "");
      const href = url.startsWith("10.") ? `https://doi.org/${url}` : url;
      out.push({ kind: "link", value: url, href });
      rest = rest.slice(m.index + url.length);
    }
    if (rest) out.push({ kind: "text", value: rest.replace(/\*+/g, "") });
  }
  return out;
}

/**
 * Where in the source one lesson uses it, as one line, or null for "the work as a whole". The
 * "Locator:" clause the author wrote in that lesson's Sources entry wins, because it is the most
 * specific ("p. 9, FiDO-T-12G 'Reclocking'"); otherwise the locators the lesson's in-text citations
 * carry ("p. 9; pp. 40-41").
 */
export function whereInSource(use: Pick<BibliographyUse, "pinpoints" | "entryLocators">): string | null {
  const parts = use.entryLocators.length ? use.entryLocators : use.pinpoints;
  return parts.length ? parts.map((p) => p.replace(/\.$/, "")).join("; ") : null;
}
