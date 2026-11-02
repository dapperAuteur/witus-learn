// The citation-entry parser, shared by `pnpm gen:citations` (scripts/gen-citations.ts, which writes
// the committed registry behind /admin/citations and /audit/citations) and the learner-facing course
// bibliography (src/lib/course-bibliography.ts). One definition, so the board a verifier checks and
// the Sources page a learner reads can never disagree about what counts as a source.
//
// PURE: no database, no node built-ins, no next/* imports. Moved here verbatim from
// scripts/gen-citations.ts; tests/citation-entries.test.ts keeps a frozen copy of the old function and
// proves the outputs match, so the generated registry does not change.

/** A citation entry, normalized for hashing and de-duplication: emphasis stripped, whitespace collapsed, lowercased. */
export function normalizeCitationEntry(entry: string): string {
  return entry
    .replace(/\*+/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/** The first URL or DOI in an entry. */
export const CITATION_URL_RE = /(https?:\/\/[^\s)\]]+|10\.\d{4,}\/[^\s)\]]+)/;

/** Looks like a reference rather than prose: an APA year, an n.d., a URL, or a DOI. */
const REFERENCE_SHAPED = /\((?:n\.d\.|\d{4}[a-z]?)|https?:\/\/|10\.\d{4,}\//i;
/** A bold-only line inside a Sources block is a sub-heading (Law, Science, Labour), not a source. */
const SUBHEADING = /^\*\*[^*]+\*\*:?$/;

/**
 * Pull the citation entries out of a lesson body.
 *
 * A Sources block is a `## Sources` / `## References` heading and everything until the next heading.
 * Getting the ENTRY shape right matters more than it looks, because the catalog uses three:
 *
 *   1. Bulleted APA entries. The house style, and what the first version of this parser assumed.
 *   2. UNBULLETED APA paragraphs, one per blank-line-separated block (langgraph-triage-agent).
 *   3. PROSE that names sources inline with URLs (nasm-cpt's "Sources & Further Reading").
 *
 * The bullets-only version reported 0 citations for three staged courses that plainly have them,
 * which is the silent-undercount this whole feature exists to prevent. So an entry is now: a bullet,
 * or any line that is REFERENCE_SHAPED. Prose that names no source and carries no link is skipped,
 * and bold sub-headings are skipped rather than treated as terminators.
 */
export function extractCitations(body: string): string[] {
  const lines = body.split("\n");
  const out: string[] = [];
  let inSources = false;
  for (const raw of lines) {
    if (/^#{1,6}\s/.test(raw)) {
      inSources = /^#{1,6}\s*(sources|references|further reading|bibliography)/i.test(raw);
      continue;
    }
    if (!inSources) continue;
    const line = raw.trim();
    if (!line || SUBHEADING.test(line)) continue;
    const bullet = line.match(/^[-*]\s+(.*\S)\s*$/);
    if (bullet) {
      out.push(bullet[1].trim());
    } else if (REFERENCE_SHAPED.test(line)) {
      out.push(line);
    }
  }
  return out;
}
