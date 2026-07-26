// `:::timeline` blocks — a fenced, dated list inside a lesson body (plans/44 Option C). The point is
// to show CO-OCCURRENCE: two things happening at once, on one shared time axis, so a learner sees the
// simultaneity without the prose having to assert it. The renderer stays neutral; the design rule
// (co-occurrence is the claim, not balance) lives in the author's event text, not here.
//
// Syntax (a fenced block, unlike the single-line :::reveal / :::tool directives):
//
//   :::timeline Optional title
//   1936 | built | The first Green Book edition appears
//   1949 | done  | A state passes a new segregation statute
//   1964 | law   | The Civil Rights Act ends legal segregation
//   :::
//
// Each event line is `year | lane | text` or `year | text` (no lane). `year` is any short date label
// ("1936", "Aug 1980", "1940s"). `lane` groups events into tracks (e.g. "built" vs "done"); each
// distinct lane gets its own colour and label, so the two tracks read at a glance on one axis. This is
// pure data plus markup, so it works offline with no dependency.

export const TIMELINE_OPEN_RE = /^:::timeline(?:\s+(.+?))?\s*$/;
export const TIMELINE_CLOSE = ":::";

export interface TimelineEvent {
  year: string;
  lane?: string;
  text: string;
}

/** Parse the inner lines of a `:::timeline … :::` block into events, in order. Blank lines and lines
 *  without at least `year | text` are skipped, so a stray line never breaks the render. */
export function parseTimelineEvents(innerLines: string[]): TimelineEvent[] {
  const out: TimelineEvent[] = [];
  for (const raw of innerLines) {
    const line = raw.trim();
    if (!line) continue;
    const parts = line.split("|").map((s) => s.trim());
    if (parts.length >= 3 && parts[0]) {
      out.push({ year: parts[0], lane: parts[1] || undefined, text: parts.slice(2).join(" | ") });
    } else if (parts.length === 2 && parts[0] && parts[1]) {
      out.push({ year: parts[0], text: parts[1] });
    }
    // a line with no pipe, or an empty year/text, is ignored
  }
  return out;
}

/** Distinct lanes in appearance order (for the legend and colour assignment). */
export function timelineLanes(events: TimelineEvent[]): string[] {
  const seen: string[] = [];
  for (const e of events) if (e.lane && !seen.includes(e.lane)) seen.push(e.lane);
  return seen;
}
