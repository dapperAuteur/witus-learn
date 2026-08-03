/**
 * Guard: course codes are legal, unambiguous, and do not lie about the shape of a series.
 *
 * A course code is a promise to a learner ("start here", "these tracks are independent"). Unlike the
 * content guards this one is NOT a ratchet, because there is nothing to grandfather: codes are new,
 * so every code that exists was written under this rule. It reads the seed scripts rather than the
 * database for the same reason the standards guard does — it has to run in `pnpm lint`, offline, on
 * a machine with no DATABASE_URL.
 *
 * What it fails on, and why each one is a lie rather than a typo:
 *
 *  1. A position outside the grammar. Renders no badge at all (formatCourseCode returns null), so
 *     the course silently loses its place in the series and nobody notices.
 *  2. A code prefix that is not 2-8 uppercase alphanumerics. Same outcome: no badge.
 *  3. Two courses in one series sharing a position. "Which of these two is STORY-T2" has no answer.
 *  4. More than one "00" or more than one "99" in a series. Both claim to be the only one.
 *  5. A lettered position with no series_track. The badge says "T1" and nothing on the page says
 *     what T is, which is worse than no badge because it looks like it means something.
 *  6. One series using two different code prefixes. The prefix IS the series to a learner.
 *  7. A code prefix shared by two different series. Same collision from the other direction.
 *  8. A capstone in a series with no other courses, or a "00" that is the only course: a one-course
 *     series does not need a shape, and coding one implies courses that do not exist.
 */

import { readdirSync, readFileSync } from "node:fs";
import { isValidSeriesCode, parseSeriesPosition } from "../src/lib/series-code";

interface Entry {
  file: string;
  slug: string;
  seriesSlug: string | null;
  seriesCode: string | null;
  seriesPosition: string | null;
  seriesTrack: string | null;
}

/** Pull every seedAuthoredCourse({...}) call out of the seed scripts by brace matching. A regex
 *  over the whole file would run past the end of a call into the next one. */
function extractCalls(file: string): Entry[] {
  const src = readFileSync(file, "utf8");
  const consts = new Map<string, string>();
  for (const m of src.matchAll(/^const\s+([A-Z_][A-Z0-9_]*)\s*=\s*"([^"]*)"/gm)) {
    consts.set(m[1], m[2]);
  }
  const out: Entry[] = [];
  let idx = 0;
  for (;;) {
    const at = src.indexOf("seedAuthoredCourse(", idx);
    if (at === -1) break;
    idx = at + 1;
    const open = src.indexOf("{", at);
    if (open === -1) continue;
    let depth = 0;
    let end = -1;
    for (let i = open; i < src.length; i++) {
      if (src[i] === "{") depth++;
      else if (src[i] === "}") {
        depth--;
        if (depth === 0) {
          end = i;
          break;
        }
      }
    }
    if (end === -1) continue;
    const body = src.slice(open, end);
    const field = (name: string) => {
      // A value is either a literal or a module-level const holding one (seed-sommelier.ts writes
      // `seriesSlug: SERIES_SLUG`). Resolving the identifier matters: treating it as absent would
      // report every course in that series as uncoded and the guard would pass on a real mistake.
      const m = new RegExp(`\\b${name}:\\s*(?:"([^"]*)"|([A-Z_][A-Z0-9_]*))`).exec(body);
      if (!m) return null;
      if (m[1] != null) return m[1];
      return consts.get(m[2]) ?? null;
    };
    const slug = field("slug");
    if (!slug) continue;
    out.push({
      file,
      slug,
      seriesSlug: field("seriesSlug"),
      seriesCode: field("seriesCode"),
      seriesPosition: field("seriesPosition"),
      seriesTrack: field("seriesTrack"),
    });
    idx = end;
  }
  return out;
}

const files = readdirSync("scripts")
  .filter((f) => f.startsWith("seed-") && f.endsWith(".ts"))
  .map((f) => `scripts/${f}`);
const entries = files.flatMap(extractCalls);
const coded = entries.filter((e) => e.seriesCode != null || e.seriesPosition != null);
const violations: string[] = [];

for (const e of coded) {
  if (!isValidSeriesCode(e.seriesCode)) {
    violations.push(
      `${e.slug} (${e.file}): seriesCode ${JSON.stringify(e.seriesCode)} is not 2-8 uppercase letters or digits`,
    );
  }
  const p = parseSeriesPosition(e.seriesPosition);
  if (!p) {
    violations.push(
      `${e.slug} (${e.file}): seriesPosition ${JSON.stringify(e.seriesPosition)} is outside the grammar (00 | 01-98 | <LETTER><1-99> | 99)`,
    );
    continue;
  }
  if (p.kind === "track" && !e.seriesTrack) {
    violations.push(
      `${e.slug} (${e.file}): position "${e.seriesPosition}" names track ${p.letter} but has no seriesTrack, so the badge says "${e.seriesPosition}" with nothing to explain it`,
    );
  }
  if (!e.seriesSlug) {
    violations.push(`${e.slug} (${e.file}): has a course code but no seriesSlug to belong to`);
  }
}

// Per-series checks.
const bySeries = new Map<string, Entry[]>();
for (const e of coded) {
  if (!e.seriesSlug) continue;
  const arr = bySeries.get(e.seriesSlug);
  if (arr) arr.push(e);
  else bySeries.set(e.seriesSlug, [e]);
}
const prefixOwner = new Map<string, string>();
for (const [series, arr] of bySeries) {
  const prefixes = new Set(arr.map((e: Entry) => e.seriesCode));
  if (prefixes.size > 1) {
    violations.push(
      `series "${series}": uses more than one code prefix (${[...prefixes].join(", ")}); the prefix IS the series to a learner`,
    );
  }
  const prefix = arr[0].seriesCode;
  if (prefix) {
    const owner = prefixOwner.get(prefix);
    if (owner && owner !== series) {
      violations.push(
        `code prefix "${prefix}" is used by two different series ("${owner}" and "${series}")`,
      );
    } else prefixOwner.set(prefix, series);
  }

  const seen = new Map<string, string>();
  let starts = 0;
  let capstones = 0;
  for (const e of arr) {
    const pos = (e.seriesPosition ?? "").toUpperCase();
    const dup = seen.get(pos);
    if (dup) violations.push(`series "${series}": ${dup} and ${e.slug} both claim position ${pos}`);
    else seen.set(pos, e.slug);
    if (pos === "00") starts++;
    if (pos === "99") capstones++;
  }
  if (starts > 1) violations.push(`series "${series}": ${starts} courses claim to be the start (00)`);
  if (capstones > 1)
    violations.push(`series "${series}": ${capstones} courses claim to be the capstone (99)`);
  if (arr.length === 1 && ["00", "99"].includes((arr[0].seriesPosition ?? "").toUpperCase())) {
    violations.push(
      `series "${series}": a one-course series coded "${arr[0].seriesPosition}" implies courses that do not exist`,
    );
  }
}

const seriesCount = bySeries.size;
const trackCount = new Set(
  coded
    .map((e: Entry) => {
      const p = parseSeriesPosition(e.seriesPosition);
      return p?.kind === "track" ? `${e.seriesSlug}:${p.letter}` : null;
    })
    .filter(Boolean),
).size;

console.log(
  `Scanned ${files.length} seed script(s): ${coded.length} coded course(s) across ${seriesCount} series, ${trackCount} track(s), ${violations.length} violation(s).`,
);
if (violations.length > 0) {
  for (const v of violations) console.error(`  ✗ ${v}`);
  console.error(
    "\nCourse-code grammar lives in src/lib/series-code.ts. Fix the seed script; never widen the grammar to make a code pass.",
  );
  process.exit(1);
}
