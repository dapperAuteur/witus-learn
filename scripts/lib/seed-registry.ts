/**
 * The catalog's static registry: every `seedAuthoredCourse({...})` call across `scripts/seed-*.ts`,
 * with the data module each one seeds.
 *
 * WHY THIS EXISTS. Three tools now need the same answer to "what courses exist, and where does this
 * slug's lesson data live?" — `check-series-codes` (offline, in `pnpm lint`), `audit-course`, and
 * `gen-outline`. Each had, or was about to have, its own copy of the same brace-matching parser.
 *
 * WHY IT PARSES SOURCE RATHER THAN READING THE DATABASE. Same reason the standards and series-code
 * guards do: these have to run offline, with no `DATABASE_URL`, on a fresh clone. The seed scripts
 * are the committed truth about which courses the catalog claims; the database is a deployment of
 * that truth and can be behind it.
 *
 * WHAT IT DELIBERATELY DOES NOT DO. It never fails on a module it cannot load. Several seeders
 * import generated modules that are gitignored (the languages, the health family, BVC episodes), so
 * on a fresh clone those imports do not resolve. A registry that threw would make every consumer
 * unusable on the machines where it matters; instead `loadCourse` returns null and the caller
 * reports the slug as unreadable, which is a fact rather than a crash.
 */

import { readdirSync, readFileSync, existsSync } from "node:fs";
import type { AuthoredCourse } from "../data/authored-course";

export interface SeedEntry {
  /** Seed script the call lives in, e.g. "scripts/seed-courses.ts". */
  file: string;
  slug: string;
  /** The identifier passed as `course:`, e.g. "PICKLEBALL_COURSE". Null for a non-identifier. */
  courseConst: string | null;
  /** Module specifier that identifier was imported from, e.g. "./data/pickleball-course". */
  modulePath: string | null;
  category: string | null;
  seriesSlug: string | null;
  seriesCode: string | null;
  seriesPosition: string | null;
  seriesTrack: string | null;
  visibility: string | null;
}

/** Pull every seedAuthoredCourse({...}) call out of one seed script by brace matching. A regex over
 *  the whole file would run past the end of one call into the next. */
export function extractSeedEntries(file: string): SeedEntry[] {
  const src = readFileSync(file, "utf8");

  // Module-level string consts, because seed-sommelier.ts writes `seriesSlug: SERIES_SLUG`.
  // Resolving the identifier matters: treating it as absent would report every course in that
  // series as uncoded, and a guard built on this would pass on a real mistake.
  const consts = new Map<string, string>();
  for (const m of src.matchAll(/^const\s+([A-Z_][A-Z0-9_]*)\s*=\s*"([^"]*)"/gm)) {
    consts.set(m[1], m[2]);
  }

  // Named imports, so a `course:` identifier can be traced back to its module.
  const importOf = new Map<string, string>();
  for (const m of src.matchAll(/import\s*\{([^}]*)\}\s*from\s*"([^"]+)"/g)) {
    for (const name of m[1].split(",").map((s) => s.trim().split(/\s+as\s+/)[0]).filter(Boolean)) {
      importOf.set(name, m[2]);
    }
  }

  const out: SeedEntry[] = [];
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

    /** A value is either a string literal or a module-level const holding one. */
    const field = (name: string): string | null => {
      const m = new RegExp(`\\b${name}:\\s*(?:"([^"]*)"|([A-Z_][A-Z0-9_]*))`).exec(body);
      if (!m) return null;
      if (m[1] != null) return m[1];
      return consts.get(m[2]) ?? null;
    };
    /** The `course:` value is an identifier, never a literal. */
    const ident = (name: string): string | null =>
      new RegExp(`\\b${name}:\\s*([A-Z_][A-Za-z0-9_]*)`).exec(body)?.[1] ?? null;

    const slug = field("slug");
    if (!slug) {
      idx = end;
      continue;
    }
    const courseConst = ident("course");
    out.push({
      file,
      slug,
      courseConst,
      modulePath: courseConst ? (importOf.get(courseConst) ?? null) : null,
      category: field("category"),
      seriesSlug: field("seriesSlug"),
      seriesCode: field("seriesCode"),
      seriesPosition: field("seriesPosition"),
      seriesTrack: field("seriesTrack"),
      visibility: field("visibility"),
    });
    idx = end;
  }

  // Second shape: a loop over an array of `{ slug, course }` pairs, which is how the 51 state-civics
  // courses and most of the trade/sports/culture batch are registered. The slug there is a loop
  // VARIABLE at the seedAuthoredCourse call, so the brace matcher above sees `slug: slug` and skips
  // it. Missing 120-odd courses would make this registry lie about the size of the catalog, and the
  // tools built on it would silently audit a third of it. Order-insensitive because both
  // `{ slug, course }` and `{ course, slug }` appear.
  const known = new Set(out.map((e) => e.slug));
  const pairs = [
    /slug:\s*"([a-z0-9-]+)"[^{}]*?course:\s*([A-Z_][A-Za-z0-9_]*)/g,
    /course:\s*([A-Z_][A-Za-z0-9_]*)[^{}]*?slug:\s*"([a-z0-9-]+)"/g,
  ];
  for (const [i, re] of pairs.entries()) {
    for (const m of src.matchAll(re)) {
      const slug = i === 0 ? m[1] : m[2];
      const courseConst = i === 0 ? m[2] : m[1];
      if (known.has(slug)) continue;
      known.add(slug);
      const around = src.slice(m.index ?? 0, (m.index ?? 0) + m[0].length + 120);
      out.push({
        file,
        slug,
        courseConst,
        modulePath: importOf.get(courseConst) ?? null,
        category: /category:\s*"([^"]*)"/.exec(around)?.[1] ?? null,
        seriesSlug: null,
        seriesCode: null,
        seriesPosition: null,
        seriesTrack: null,
        visibility: null,
      });
    }
  }
  return out;
}

/** Every `scripts/seed-*.ts`, including the ones that seed no authored course (tenants, bundles). */
export function seedScriptFiles(): string[] {
  return readdirSync("scripts")
    .filter((f) => f.startsWith("seed-") && f.endsWith(".ts"))
    .sort()
    .map((f) => `scripts/${f}`);
}

/** Every seedAuthoredCourse call in the repo, in seed-script filename order. */
export function allSeedEntries(): SeedEntry[] {
  return seedScriptFiles().flatMap(extractSeedEntries);
}

/** Resolve one slug. Returns the FIRST match; a duplicate slug across seeders is a separate bug that
 *  the series-code guard and the seeders' own upserts already surface. */
export function findSeedEntry(slug: string): SeedEntry | undefined {
  return allSeedEntries().find((e) => e.slug === slug);
}

/**
 * Import the entry's data module and hand back the AuthoredCourse.
 *
 * Returns null rather than throwing when the module is missing (gitignored generated modules) or
 * exports nothing course-shaped. Callers report that as an unreadable course.
 */
export async function loadCourse(entry: SeedEntry): Promise<AuthoredCourse | null> {
  if (!entry.modulePath) return null;
  const rel = entry.modulePath.replace(/^\.\//, "");
  if (!existsSync(`scripts/${rel}.ts`) && !existsSync(`scripts/${rel}`)) return null;
  let mod: Record<string, unknown>;
  try {
    mod = (await import(`../${rel}`)) as Record<string, unknown>;
  } catch {
    return null;
  }
  const isCourse = (v: unknown): v is AuthoredCourse =>
    !!v && typeof v === "object" && Array.isArray((v as AuthoredCourse).lessons);
  if (entry.courseConst) {
    const named = mod[entry.courseConst];
    if (isCourse(named)) return named;
  }
  for (const v of Object.values(mod)) {
    if (isCourse(v)) return v;
    // A default export that re-exports the course object.
    if (v && typeof v === "object") {
      for (const inner of Object.values(v as Record<string, unknown>)) {
        if (isCourse(inner)) return inner;
      }
    }
  }
  return null;
}
