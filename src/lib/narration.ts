// Turn a lesson's markdown body into a clean NARRATION SCRIPT — the words to read aloud
// when recording the audio (and later video) course. Strips things you shouldn't read out:
// the "## Sources" citation block, markdown syntax (**bold**, `code`, headings, links,
// tables), and stray symbols — while keeping the prose, lists, and "Check yourself" prompts.
// Pure + isomorphic (no deps) so it's easy to test and reuse.

export interface NarrationOptions {
  /** Drop the "## Sources"/"## Further reading" block (you don't read citations aloud). Default true. */
  dropSources?: boolean;
  /** Keep "Check yourself." prompts (nice for audio engagement). Default true. */
  keepCheckYourself?: boolean;
}

/** Convert one markdown body to narration text. */
export function markdownToNarration(md: string, opts: NarrationOptions = {}): string {
  const { dropSources = true, keepCheckYourself = true } = opts;
  let text = md.replace(/\r\n/g, "\n");

  // Remove the citations block and anything after it (Sources / Further reading / References).
  if (dropSources) {
    text = text.replace(/\n#{1,6}\s*(sources|further reading|references|bibliography)\b[\s\S]*$/i, "\n");
  }

  const out: string[] = [];
  for (let rawLine of text.split("\n")) {
    let line = rawLine;

    // Skip markdown table separator rows (|---|---|).
    if (/^\s*\|?[\s:|-]*-{2,}[\s:|-]*\|?\s*$/.test(line)) continue;
    // Flatten table rows: drop the pipes, keep the cell text.
    if (/^\s*\|.*\|\s*$/.test(line)) line = line.replace(/\|/g, "  ").trim();

    // Headings → spoken line (drop the # markers).
    line = line.replace(/^\s*#{1,6}\s*/, "");
    // Blockquote / list markers.
    line = line.replace(/^\s*>\s?/, "");
    line = line.replace(/^\s*[-*+]\s+/, "");
    line = line.replace(/^\s*(\d+)\.\s+/, "$1. ");

    // Inline markdown → plain text.
    line = line
      .replace(/\[\[([^\]]+)\]\]/g, "$1") // [[wikilink]]
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // images
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // [text](url) → text
      .replace(/`([^`]+)`/g, "$1") // `code`
      .replace(/(\*\*|__)(.*?)\1/g, "$2") // bold
      .replace(/(\*|_)(.*?)\1/g, "$2") // italic
      .replace(/~~(.*?)~~/g, "$2") // strikethrough
      .replace(/⚠️\s*/g, "Note: ") // warning glyph → spoken cue
      .replace(/[►▶→←↔·•]/g, " ") // stray glyphs
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/\s+/g, " ")
      .trim();

    if (!keepCheckYourself && /^check yourself\b/i.test(line)) continue;
    out.push(line);
  }

  // Collapse 3+ blank lines to a single blank line; trim.
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export interface NarrationLesson {
  title: string;
  /** The lesson's markdown body (textContent). */
  body: string | null;
  section?: string | null;
}

/**
 * Assemble a full course recording script: a spoken header per lesson, the narration, and a
 * [PAUSE] cue between lessons. `title` is the course title. Lessons with no body (quizzes,
 * media-only) are marked so you can skip or ad-lib them.
 */
export function courseToRecordingScript(
  title: string,
  lessons: NarrationLesson[],
  opts: NarrationOptions = {},
): string {
  const parts: string[] = [
    `# Recording script — ${title}`,
    `\n(Read the plain text aloud. "[PAUSE]" marks a break between lessons. Citations and`,
    `formatting have been removed. Review before recording.)\n`,
  ];
  let lastSection: string | null = null;
  lessons.forEach((l, i) => {
    if (l.section && l.section !== lastSection) {
      parts.push(`\n----- SECTION: ${l.section} -----`);
      lastSection = l.section;
    }
    parts.push(`\n=== Lesson ${i + 1}: ${l.title} ===\n`);
    const narration = l.body ? markdownToNarration(l.body, opts) : "";
    parts.push(narration || "[No narration — this lesson is a quiz or media-only. Skip or ad-lib.]");
    parts.push("\n[PAUSE]");
  });
  return parts.join("\n") + "\n";
}
