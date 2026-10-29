// The pure half of scripts/gen-invest-tutorial-course.ts: chapter Markdown in, AuthoredCourse out.
// No filesystem, no git, so the tests can hand it a fabricated chapter.
//
// THE SHAPE. One module per chapter (the chapter's own `# ` title is the module name). The chapter is
// split at its level-2 headings, one lesson each; `###` steps stay inside their section's lesson. The
// lines before the first `## ` (Starts from, Written against, Goal, Time) open the module's first
// lesson. Fenced code is copied byte for byte, and a `#` comment inside a fence is never read as a
// heading, which is the one thing a line-by-line split gets wrong on these chapters (their TOML and
// Python listings are full of `# ` comment lines). Every module ends with a Key Terms lesson (rubric
// D2a) built from the hand-written list in invest-tutorial-terms.ts.

import type { AuthoredCourse, AuthoredLesson } from "../data/authored-course";

export interface ChapterSection {
  heading: string;
  body: string;
}

export interface SplitChapter {
  /** The `# ` heading, e.g. "Chapter 00: Set up your machine and your repository". */
  title: string;
  /** Everything between the title and the first `## `, trimmed. */
  preamble: string;
  sections: ChapterSection[];
}

export interface KeyTerm {
  term: string;
  /** One sentence, from the chapter's own text. */
  definition: string;
}

export interface ChapterSource {
  /** "00", "06a", "10": the file's prefix. */
  number: string;
  markdown: string;
}

const FENCE_RE = /^\s*(`{3,}|~{3,})/;

/** Split one chapter at its level-2 headings, ignoring anything inside a fenced block. */
export function splitChapter(markdown: string): SplitChapter {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let fence: string | null = null;
  let title = "";
  const preamble: string[] = [];
  const sections: { heading: string; lines: string[] }[] = [];

  for (const line of lines) {
    const f = FENCE_RE.exec(line);
    if (f) {
      if (fence === null) fence = f[1];
      // A fence closes on the same character, at least as long, with nothing after it.
      else if (f[1][0] === fence[0] && f[1].length >= fence.length && line.trim() === f[1]) fence = null;
    }
    const outside = fence === null && !f;
    if (outside && !title && /^# /.test(line)) {
      title = line.slice(2).trim();
      continue;
    }
    if (outside && /^## /.test(line)) {
      sections.push({ heading: line.slice(3).trim(), lines: [] });
      continue;
    }
    (sections.at(-1)?.lines ?? preamble).push(line);
  }
  if (fence !== null) throw new Error(`unclosed code fence in chapter "${title || "(untitled)"}"`);
  return {
    title,
    preamble: preamble.join("\n").trim(),
    sections: sections.map((s) => ({ heading: s.heading, body: s.lines.join("\n").trim() })),
  };
}

/** Lowercase, ASCII letters and digits joined by single dashes, at most `max` characters. */
export function slugify(text: string, max = 60): string {
  const s = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return s.length <= max ? s : s.slice(0, max).replace(/-+[^-]*$/, "") || s.slice(0, max);
}

/** The Key Terms lesson body: one bullet per term, in the order written. */
export function keyTermsBody(terms: KeyTerm[]): string {
  return [
    "The names this chapter introduces, each defined in one sentence from the chapter's own text.",
    "",
    ...terms.map((t) => `- **${t.term}**: ${t.definition}`),
  ].join("\n");
}

/** One chapter as its lessons: one per `## ` section, then Key Terms. */
export function chapterLessons(source: ChapterSource, terms: KeyTerm[]): AuthoredLesson[] {
  const chapter = splitChapter(source.markdown);
  if (!chapter.title) throw new Error(`chapter ${source.number} has no "# " title`);
  if (!chapter.sections.length) throw new Error(`chapter ${source.number} has no "## " sections`);
  if (!terms.length) throw new Error(`chapter ${source.number} has no key terms`);
  const section = chapter.title;
  const seen = new Set<string>();
  const lessons: AuthoredLesson[] = chapter.sections.map((s, i) => {
    let slug = `ch${source.number}-${slugify(s.heading)}`;
    for (let n = 2; seen.has(slug); n++) slug = `ch${source.number}-${slugify(s.heading)}-${n}`;
    seen.add(slug);
    const body = i === 0 && chapter.preamble ? `${chapter.preamble}\n\n${s.body}` : s.body;
    return { slug, title: `${source.number} · ${s.heading}`, section, body };
  });
  lessons.push({
    slug: `ch${source.number}-key-terms`,
    title: `${source.number} · Key terms`,
    section,
    body: keyTermsBody(terms),
  });
  return lessons;
}

/** The whole course, chapters in the order given. Lesson slugs must be unique across the course. */
export function buildInvestTutorialCourse(
  meta: { title: string; description: string },
  chapters: ChapterSource[],
  termsFor: (chapterNumber: string) => KeyTerm[],
): AuthoredCourse {
  const lessons = chapters.flatMap((c) => chapterLessons(c, termsFor(c.number)));
  const slugs = new Set<string>();
  for (const l of lessons) {
    if (slugs.has(l.slug)) throw new Error(`duplicate lesson slug ${l.slug}`);
    slugs.add(l.slug);
  }
  return { title: meta.title, description: meta.description, lessons };
}
