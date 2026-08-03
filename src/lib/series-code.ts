// Course codes: the grammar that tells a learner where to start and, when a series has more than
// one route through it, which routes exist.
//
// THE PROBLEM. A series could already say "these courses belong together" (series_slug) and, since
// migration 0045, "this one is before that one" (series_order). Neither is visible outside the
// series page, and neither can express a curriculum that FORKS. The Storytelling series genuinely
// forks: one core course, then three parallel tracks that share a vocabulary but not a sequence,
// then a capstone that only makes sense after one particular track. An integer cannot say that, and
// a learner looking at a catalog card has no way to tell that "Documentary" is a fourth-rung course.
//
// THE GRAMMAR. A code is `<CODE>-<POSITION>`, e.g. STORY-00. Four position shapes, and the whole
// design is that a learner can infer the rule from three examples without being taught it:
//
//   00        Start here. At most one per series, and it is the entry point whatever track follows.
//   01..98    A step on a single linear path. Most series are this and never need a letter.
//   T1, P2    Step 1 of track T, step 2 of track P. Tracks run in PARALLEL: any of them may be
//             taken directly after the 00 course, and none is a prerequisite for another.
//   99        Capstone. Take last. At most one per series.
//
// The parallel-tracks claim is a promise the curriculum has to keep, not just a display convention:
// if track P secretly depends on track T, the code is lying and the fix is the curriculum, not the
// label. That is why `describePosition` states the promise in words on the series page — a claim
// written out is a claim someone will notice is false.
//
// WHY POSITION IS TEXT AND ORDER IS STILL AN INTEGER. Sorting stays on series_order, which is
// unambiguous and indexable; the code is a LABEL. Keeping them separate means a series can be
// re-lettered without a re-sort, and a series with no code still sorts correctly.

/** A position parsed into the four shapes above. `kind` is what the UI switches on. */
export type SeriesPosition =
  | { kind: "start" }
  | { kind: "step"; step: number }
  | { kind: "track"; letter: string; step: number }
  | { kind: "capstone" };

const START = "00";
const CAPSTONE = "99";
const STEP_RE = /^(?:0[1-9]|[1-8][0-9]|9[0-8])$/;
const TRACK_RE = /^([A-Z])([1-9][0-9]?)$/;

/** Parse a raw `series_position`. Returns null for anything outside the grammar, which is how the
 *  guard and the UI both decide "this is not a code" rather than rendering a broken badge. */
export function parseSeriesPosition(raw: string | null | undefined): SeriesPosition | null {
  if (!raw) return null;
  const s = raw.trim().toUpperCase();
  if (s === START) return { kind: "start" };
  if (s === CAPSTONE) return { kind: "capstone" };
  if (STEP_RE.test(s)) return { kind: "step", step: Number(s) };
  const m = TRACK_RE.exec(s);
  if (m) return { kind: "track", letter: m[1], step: Number(m[2]) };
  return null;
}

/** True when a string is a legal series code prefix: 2 to 8 uppercase letters or digits. Short
 *  enough to sit in a badge on a 360px screen without wrapping the title. */
export function isValidSeriesCode(raw: string | null | undefined): boolean {
  return typeof raw === "string" && /^[A-Z0-9]{2,8}$/.test(raw);
}

/** The rendered badge, e.g. "STORY-T3". Returns null unless BOTH halves are present and legal, so
 *  a half-configured course shows no badge rather than a misleading one. */
export function formatCourseCode(
  seriesCode: string | null | undefined,
  seriesPosition: string | null | undefined,
): string | null {
  if (!isValidSeriesCode(seriesCode)) return null;
  if (!parseSeriesPosition(seriesPosition)) return null;
  return `${seriesCode}-${(seriesPosition as string).trim().toUpperCase()}`;
}

/** One sentence a learner can act on, used under the badge on the series page. `trackName` is the
 *  course's own series_track; it is only consulted for a lettered position. */
export function describePosition(
  position: string | null | undefined,
  trackName?: string | null,
): string | null {
  const p = parseSeriesPosition(position);
  if (!p) return null;
  switch (p.kind) {
    case "start":
      return "Start here. Everything else in this series assumes it.";
    case "step":
      return `Step ${p.step} on the single path through this series.`;
    case "track":
      return trackName
        ? `Step ${p.step} of the ${trackName} track. Tracks run in parallel: you can take this one without taking the others.`
        : `Step ${p.step} of one of this series' parallel tracks. You can take this track without taking the others.`;
    case "capstone":
      return "Capstone. Take it last: it works by using what the rest of the series taught you.";
  }
}

/** Sort key for a position, used to order a track's courses and to order tracks against each other
 *  when series_order is absent. Start sorts first, capstone last, tracks in letter order between. */
export function positionSortKey(position: string | null | undefined): [number, string, number] {
  const p = parseSeriesPosition(position);
  if (!p) return [3, "", Number.MAX_SAFE_INTEGER];
  switch (p.kind) {
    case "start":
      return [0, "", 0];
    case "step":
      return [1, "", p.step];
    case "track":
      return [2, p.letter, p.step];
    case "capstone":
      return [4, "", 0];
  }
}

export interface CoursePositioned {
  seriesCode: string | null;
  seriesPosition: string | null;
  seriesTrack: string | null;
  seriesOrder: number | null;
  title: string;
}

export interface SeriesGroup<T extends CoursePositioned = CoursePositioned> {
  /** "start" and "capstone" carry at most one course each; "path" is the unlettered linear run;
   *  a track group is one per letter. */
  kind: "start" | "path" | "track" | "capstone" | "unplaced";
  /** Track letter for `kind: "track"`, else null. */
  letter: string | null;
  /** Display heading: the track name, or a fixed label for the other kinds. */
  label: string;
  courses: T[];
}

/**
 * Group a series into the shape the landing page draws: start, then either one linear path or N
 * parallel tracks side by side, then the capstone. Courses with no legal position fall into a final
 * "unplaced" group rather than disappearing — a series being half-coded must degrade to a list,
 * never to a page that silently omits courses.
 */
export function groupSeries<T extends CoursePositioned>(courses: T[]): SeriesGroup<T>[] {
  const byKind = new Map<string, T[]>();
  for (const c of courses) {
    const p = parseSeriesPosition(c.seriesPosition);
    const key = !p ? "unplaced" : p.kind === "track" ? `track:${p.letter}` : p.kind;
    const arr = byKind.get(key);
    if (arr) arr.push(c);
    else byKind.set(key, [c]);
  }

  const sortWithin = (arr: T[]) =>
    [...arr].sort((a, b) => {
      const ka = positionSortKey(a.seriesPosition);
      const kb = positionSortKey(b.seriesPosition);
      if (ka[2] !== kb[2]) return ka[2] - kb[2];
      const ao = a.seriesOrder ?? Number.MAX_SAFE_INTEGER;
      const bo = b.seriesOrder ?? Number.MAX_SAFE_INTEGER;
      return ao !== bo ? ao - bo : a.title.localeCompare(b.title);
    });

  const out: SeriesGroup<T>[] = [];
  const push = (kind: SeriesGroup["kind"], letter: string | null, label: string, arr?: T[]) => {
    if (arr && arr.length > 0) out.push({ kind, letter, label, courses: sortWithin(arr) });
  };

  push("start", null, "Start here", byKind.get("start"));
  push("path", null, "The path", byKind.get("step"));

  // Tracks render in the order the curriculum author intended, which is the lowest series_order in
  // each track, not alphabetically by letter: letters are mnemonics for the track NAME (T for True,
  // P for Performed) and sorting on them would put a series' tracks in an order nobody chose.
  const minOrder = (arr: T[]) =>
    Math.min(...arr.map((c) => c.seriesOrder ?? Number.MAX_SAFE_INTEGER));
  const trackKeys = [...byKind.keys()]
    .filter((k) => k.startsWith("track:"))
    .sort((a, b) => {
      const d = minOrder(byKind.get(a) as T[]) - minOrder(byKind.get(b) as T[]);
      return d !== 0 ? d : a.localeCompare(b);
    });
  for (const k of trackKeys) {
    const arr = byKind.get(k) as T[];
    const letter = k.slice("track:".length);
    const label = arr.find((c) => c.seriesTrack)?.seriesTrack ?? `Track ${letter}`;
    push("track", letter, label, arr);
  }

  push("capstone", null, "Finish here", byKind.get("capstone"));
  push("unplaced", null, "Also in this series", byKind.get("unplaced"));
  return out;
}
