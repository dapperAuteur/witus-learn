// Where each "chat with the sources" citation leads. PURE: no database, no next/* imports, so the
// rules are unit-tested (tests/source-chat-links.test.ts) and the server only gathers the inputs
// (src/db/queries/source-chat-links.ts).
//
// source_chunks has no lesson id, and adding one would mean a migration plus a re-index of every
// course, so a citation is resolved at answer time from what the chunk already carries:
//   lesson             → the lesson in this course whose title is the chunk's title (the indexer
//                        stores the lesson title there), with a URL text fragment so a supporting
//                        browser scrolls to the passage and highlights it. Several lessons with the
//                        same title are told apart by which body contains the chunk; still unsure
//                        (or no match, e.g. renamed since indexing) means no link, never a guess.
//   citation           → the course_sources row (chunk.sourceId): its url, its hosted copy, its DOI,
//                        else the course's own Sources page when the viewer may open it.
//   public_domain_text → the chunk title, which the indexer sets to the text's source URL.
//
// Access: the caller passes only the lessons this viewer may see listed (published ones, or all of
// them for an editor), the same list the lesson route looks its slug up in. A published lesson that
// is gated (paid, not enrolled) is still linked: its page handles the gate. An unpublished lesson is
// never linked for a learner, so a link never reveals more than the citation's title already does.

export interface LinkableLesson {
  id: string;
  title: string;
  slug: string | null;
}

export interface LinkableSource {
  id: string;
  url: string | null;
  pdfUrl: string | null;
  doi: string | null;
}

export interface CitationLinkContext {
  /** Canonical course page, `/{username}/{courseSlug}`, or null when the course has no pretty URL. */
  coursePath: string | null;
  /** Lessons this viewer may open from the course page, in course order. */
  lessons: readonly LinkableLesson[];
  /** course_sources rows of THIS course, by id. */
  sources: ReadonlyMap<string, LinkableSource>;
  /** The course's Sources page, or null when this viewer may not open it. */
  sourcesPageHref: string | null;
  /**
   * Bodies (cleaned with cleanChunkSource) of lessons that share a title with another visible lesson,
   * by lesson id. Only those are loaded, and only they need it.
   */
  duplicateTitleBodies?: ReadonlyMap<string, string>;
}

export interface CitationChunk {
  kind: string;
  title: string | null;
  sourceId: string | null;
  text: string;
  /** Position of the chunk within its lesson; 0 means it starts at the top of the body. */
  ord: number;
}

export interface CitationLink {
  href: string;
  /** True for another site: open in a new tab with rel="noopener noreferrer". */
  external: boolean;
}

/** The URL itself when it is an absolute http(s) URL, else null (no javascript:, data:, relative). */
export function safeHttpUrl(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  try {
    const u = new URL(trimmed);
    return u.protocol === "http:" || u.protocol === "https:" ? u.toString() : null;
  } catch {
    return null;
  }
}

function doiUrl(doi: string | null): string | null {
  if (!doi) return null;
  const bare = doi.trim().replace(/^https?:\/\/(dx\.)?doi\.org\//i, "").replace(/^doi:\s*/i, "");
  return /^10\.\d{4,9}\/\S+$/.test(bare) ? `https://doi.org/${bare}` : null;
}

// ── Text fragments ───────────────────────────────────────────────────────────

const MIN_WORDS = 4;
const MAX_WORDS = 8;

// A word that renders exactly as written: letters or digits with ordinary punctuation. Anything that
// carries Markdown syntax (*, _, `, [, ], #, |, <, >, ~, :::, a URL's slashes) may render differently
// or not at all, and a text fragment that does not match the rendered text simply does nothing.
const PLAIN_WORD = /^["'“‘(]?[\p{L}\p{N}][\p{L}\p{N}'’.,;:!?%)"”-]*$/u;

// Block markers at the start of a Markdown line: headings, list bullets, numbered items, quotes.
const BLOCK_MARKERS = /^\s*(?:(?:#{1,6}|[-*+]|>|\d+[.)])\s+)+/;

/**
 * Percent-encode a text-directive term per the URL Fragment Text Directives spec: on top of normal
 * component encoding, `-`, `,` and `&` are syntax inside the directive and must be encoded too.
 * encodeURIComponent already encodes `,` and `&`; it leaves `-` alone, so that one is done by hand.
 */
export function encodeTextDirectiveTerm(term: string): string {
  return encodeURIComponent(term).replace(/-/g, "%2D");
}

/**
 * The first run of plain words in the chunk, as a `#:~:text=` fragment, or "" when there is none.
 * A text directive cannot match across block elements, so the run is taken from a single line. A
 * chunk after the first (ord > 0) was cut at a character offset, so its first word may be a partial
 * word and is skipped; the chunk's very last word may be cut the same way and is never used.
 */
export function textFragmentFor(text: string, ord: number): string {
  const lines = text.split("\n");
  const lastLine = lines.length - 1;
  for (let i = 0; i < lines.length; i++) {
    let words = lines[i].replace(BLOCK_MARKERS, "").split(/\s+/).filter(Boolean);
    if (i === 0 && ord > 0) words = words.slice(1);
    if (i === lastLine) words = words.slice(0, -1);
    let run: string[] = [];
    for (const w of words) {
      if (PLAIN_WORD.test(w)) {
        run.push(w);
        if (run.length === MAX_WORDS) break;
      } else {
        if (run.length >= MIN_WORDS) break;
        run = [];
      }
    }
    if (run.length >= MIN_WORDS) return `#:~:text=${encodeTextDirectiveTerm(run.join(" "))}`;
  }
  return "";
}

// ── Resolution ───────────────────────────────────────────────────────────────

/** The one lesson a lesson chunk came from, or null when it cannot be told for sure. */
export function matchLesson(chunk: CitationChunk, ctx: CitationLinkContext): LinkableLesson | null {
  const title = chunk.title?.trim();
  if (!title) return null;
  const candidates = ctx.lessons.filter((l) => l.title.trim() === title && l.slug);
  if (candidates.length <= 1) return candidates[0] ?? null;
  const bodies = ctx.duplicateTitleBodies;
  if (!bodies) return null;
  const containing = candidates.filter((l) => bodies.get(l.id)?.includes(chunk.text));
  return containing.length === 1 ? containing[0] : null;
}

export function resolveCitationLink(chunk: CitationChunk, ctx: CitationLinkContext): CitationLink | null {
  switch (chunk.kind) {
    case "lesson": {
      if (!ctx.coursePath) return null;
      const lesson = matchLesson(chunk, ctx);
      if (!lesson?.slug) return null;
      return {
        href: `${ctx.coursePath}/lesson/${encodeURIComponent(lesson.slug)}${textFragmentFor(chunk.text, chunk.ord)}`,
        external: false,
      };
    }
    case "citation": {
      const source = chunk.sourceId ? ctx.sources.get(chunk.sourceId) : undefined;
      const external = source ? (safeHttpUrl(source.url) ?? safeHttpUrl(source.pdfUrl) ?? doiUrl(source.doi)) : null;
      if (external) return { href: external, external: true };
      return ctx.sourcesPageHref ? { href: ctx.sourcesPageHref, external: false } : null;
    }
    case "public_domain_text": {
      const href = safeHttpUrl(chunk.title);
      return href ? { href, external: true } : null;
    }
    default:
      return null;
  }
}

/** Lesson ids whose title is shared with another visible lesson and is one of the cited titles. */
export function duplicateTitleLessonIds(lessons: readonly LinkableLesson[], citedTitles: Iterable<string>): string[] {
  const wanted = new Set([...citedTitles].map((t) => t.trim()));
  const byTitle = new Map<string, string[]>();
  for (const l of lessons) {
    const t = l.title.trim();
    if (!wanted.has(t) || !l.slug) continue;
    byTitle.set(t, [...(byTitle.get(t) ?? []), l.id]);
  }
  return [...byTitle.values()].filter((ids) => ids.length > 1).flat();
}
