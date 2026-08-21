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

import { allSeedEntries, seedScriptFiles, type SeedEntry } from "./lib/seed-registry";
import { isValidSeriesCode, parseSeriesPosition } from "../src/lib/series-code";

// The seed-script parser this guard used to carry lives in scripts/lib/seed-registry.ts now,
// because audit-course and gen-outline need the same answer to "what courses exist, and where does
// this slug's lesson data live?". Behaviour here is unchanged: same files, same fields, same brace
// matching, still offline with no DATABASE_URL.
const entries = allSeedEntries();
const files = seedScriptFiles();
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
const bySeries = new Map<string, SeedEntry[]>();
for (const e of coded) {
  if (!e.seriesSlug) continue;
  const arr = bySeries.get(e.seriesSlug);
  if (arr) arr.push(e);
  else bySeries.set(e.seriesSlug, [e]);
}
const prefixOwner = new Map<string, string>();
for (const [series, arr] of bySeries) {
  const prefixes = new Set(arr.map((e: SeedEntry) => e.seriesCode));
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
    .map((e: SeedEntry) => {
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
