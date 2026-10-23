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
 *
 * WHICH SCHOOL. Every entry says which school (tenant slug) its call seeds onto, because a slug is no
 * longer unique across the platform: BAM's preview rule (`schoolShareViolations` below) lets a
 * series' first course sit on a second school. A registry that knew only slugs would read that
 * preview as a duplicate, and could not tell a legal preview from a whole series copied across. The
 * school is read the way JavaScript would read it, from source: the call's `tenantId` names a
 * variable, that variable is traced through the `const` declarations whose block encloses the call
 * (`const tenantId = t[0]?.id`, `const [tenant] = await db...`) to a tenant lookup by a string
 * literal or a module-level const (`tenantBySlug("learn-witus")`, `tenants.slug, TARGET_SLUG`).
 * Where the trail ends anywhere else (a lookup by a loop variable, as in the BVC Season 1 share loop;
 * a function parameter, whose caller this parser cannot see; one name bound two ways in one block),
 * `school` is null and means UNKNOWN. It never falls back to a default school: guessing Learn.WitUS
 * would let a course seeded somewhere else pass the preview rule unseen. The rule reports a null
 * school as its own violation instead, and consumers that need a school stop on it.
 */

import { readdirSync, readFileSync, existsSync } from "node:fs";
import type { AuthoredCourse } from "../data/authored-course";

export interface SeedEntry {
  /** Seed script the call lives in, e.g. "scripts/seed-courses.ts". */
  file: string;
  slug: string;
  /** Tenant slug the call seeds onto, e.g. "learn-witus". Null when the source does not say (see the
   *  header): unknown, never a default. */
  school: string | null;
  /** The identifier passed as `course:`, e.g. "PICKLEBALL_COURSE". Null for a non-identifier. */
  courseConst: string | null;
  /** Module specifier that identifier was imported from, e.g. "./data/pickleball-course". */
  modulePath: string | null;
  category: string | null;
  /** Extra categories the course also lists under (`additionalCategories: [...]`), up to five. */
  additionalCategories: string[];
  seriesSlug: string | null;
  seriesCode: string | null;
  seriesPosition: string | null;
  seriesTrack: string | null;
  visibility: string | null;
}

/** Index just past the `}` that closes the `{` at `open`, or -1 when the braces do not balance. */
function matchBrace(src: string, open: number): number {
  let depth = 0;
  for (let i = open; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}") {
      depth--;
      if (depth === 0) return i + 1;
    }
  }
  return -1;
}

/** `name: ["a", "b"]` inside an object body, as a list of string literals (empty when absent). */
function listField(body: string, name: string): string[] {
  const m = new RegExp(`\\b${name}:\\s*\\[([^\\]]*)\\]`).exec(body);
  if (!m) return [];
  return [...m[1].matchAll(/"([^"]*)"/g)].map((x) => x[1]);
}

/**
 * The first seedAuthoredCourse call AFTER `from` (the end of a loop entry), which is the loop's own
 * call: where it sits and its argument object. A loop entry leaves fields to that call, the category
 * sometimes ("Civics" for every state-civics course) and the tenant always.
 */
function loopCall(src: string, from: number): { at: number; body: string } | null {
  const at = src.indexOf("seedAuthoredCourse(", from);
  if (at === -1) return null;
  const open = src.indexOf("{", at);
  const end = open === -1 ? -1 : matchBrace(src, open);
  return end === -1 ? null : { at, body: src.slice(open, end) };
}

/**
 * Every block of one file in a single pass: where each `{` closes, and which `{` is the innermost
 * open one at each asked-for index (-1 at module level). Walking back from every declaration instead
 * made the registry six times slower, and four lint guards read it.
 */
function blocks(src: string, positions: number[]): { closeOf: Map<number, number>; openAt: Map<number, number> } {
  const closeOf = new Map<number, number>();
  const openAt = new Map<number, number>();
  const wanted = [...positions].sort((a, b) => a - b);
  const stack: number[] = [];
  let w = 0;
  for (let i = 0; i < src.length; i++) {
    while (w < wanted.length && wanted[w] === i) openAt.set(wanted[w++], stack.at(-1) ?? -1);
    if (src[i] === "{") stack.push(i);
    else if (src[i] === "}") {
      const open = stack.pop();
      if (open !== undefined) closeOf.set(open, i + 1);
    }
  }
  return { closeOf, openAt };
}

/** The variable a call's `tenantId` comes from: `tenantId: tenant.id` gives "tenant", the shorthand
 *  `tenantId,` gives "tenantId". Null when it is not a plain variable. */
function tenantVariable(body: string): string | null {
  const m = /\btenantId\b\s*(:)?\s*([A-Za-z_$][\w$]*)?/.exec(body);
  if (!m) return null;
  return m[1] ? (m[2] ?? null) : "tenantId";
}

/**
 * A resolver from (variable, position) to the school that variable holds there, for one seed script.
 *
 * Scope is modelled because the seeders reuse names: `tenantId` is a `const` in `main` and a
 * parameter of `ensureInstructor` in the same file, and `t` is a tenant row in one function and
 * something else in the next. Reading the file's first binding of a name would put a course on
 * whichever school happened to be declared first. Only bindings whose block encloses the position
 * count, the innermost wins, and a parameter there is UNKNOWN because its value comes from a caller.
 */
function schoolResolver(src: string, consts: Map<string, string>): (name: string, at: number) => string | null {
  const UNKNOWN = Symbol("unknown");
  const NOT_A_TENANT = Symbol("not a tenant");
  type Trace = string | typeof UNKNOWN | typeof NOT_A_TENANT;
  /** `rhs` is the declaration's initializer, or null for a function parameter. */
  interface Binding {
    pos: number;
    open: number;
    rhs: string | null;
  }
  // `const x = ...` and `const [x] = ...`, up to the statement's `;` (the seeders are formatted).
  const decls = [
    ...src.matchAll(
      /\b(?:const|let)\s+(?:\[\s*([A-Za-z_$][\w$]*)\s*\]|([A-Za-z_$][\w$]*))\s*(?::[^=;]*)?=(?![=>])([^;]*)/g,
    ),
  ];
  const { closeOf, openAt } = blocks(src, decls.map((m) => m.index ?? 0));
  const bindings = new Map<string, Binding[]>();
  const bind = (name: string, b: Binding) => bindings.set(name, [...(bindings.get(name) ?? []), b]);
  for (const m of decls) {
    const pos = m.index ?? 0;
    bind(m[1] ?? m[2], { pos, open: openAt.get(pos) ?? -1, rhs: m[3] });
  }
  // Parameters of `function f(...) {` and `(...) => {`, scoped to that body.
  for (const m of src.matchAll(/(?:\bfunction\b\s*\*?\s*[\w$]*\s*\(([^)]*)\)[^{;]*|\(([^()]*)\)\s*(?::[^=;{}()]+)?=>\s*)\{/g)) {
    const open = (m.index ?? 0) + m[0].length - 1;
    for (const name of (m[1] ?? m[2]).match(/[A-Za-z_$][\w$]*/g) ?? []) bind(name, { pos: open, open, rhs: null });
  }

  // An unbalanced block reads as closed at -1, so nothing in it is visible: unknown, not a guess.
  const scopeEnd = (open: number) => (open < 0 ? src.length : (closeOf.get(open) ?? -1));
  const trace = (name: string, at: number): Trace => {
    const visible = (bindings.get(name) ?? []).filter(
      (b) => b.pos < at && (b.open < 0 || (b.open < at && at < scopeEnd(b.open))),
    );
    if (!visible.length) return NOT_A_TENANT;
    const innermost = Math.max(...visible.map((b) => b.open));
    const here = visible.filter((b) => b.open === innermost);
    if (here.some((b) => b.rhs === null)) return UNKNOWN;
    const traces = new Set(
      here.map((b): Trace => {
        const rhs = b.rhs ?? "";
        const lookup = /(?:\btenants\.slug\s*,|\btenant(?:Id)?BySlug\s*\()\s*(?:"([^"]*)"|([A-Za-z_$][\w$.]*))/.exec(rhs);
        // A lookup by anything but a literal or a module const (a loop variable, a parameter) names
        // a school only at run time.
        if (lookup) return lookup[1] ?? consts.get(lookup[2]) ?? UNKNOWN;
        // `t[0]?.id`, `tenant.id`, a plain rename: whatever that variable held where this was declared.
        const alias = /^\s*(?:await\s+)?([A-Za-z_$][\w$]*)\s*(?:\[|\??\.|$)/.exec(rhs);
        return alias ? trace(alias[1], b.pos) : NOT_A_TENANT;
      }),
    );
    return traces.size === 1 ? [...traces][0] : UNKNOWN;
  };
  return (name, at) => {
    const t = trace(name, at);
    return typeof t === "string" ? t : null;
  };
}

/** Pull every seedAuthoredCourse({...}) call out of one seed script by brace matching. A regex over
 *  the whole file would run past the end of one call into the next. `src` is there so the tests can
 *  hand it a fabricated seeder; everything else lets it read `file`. */
export function extractSeedEntries(file: string, src: string = readFileSync(file, "utf8")): SeedEntry[] {
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

  const schoolAt = schoolResolver(src, consts);
  const schoolOf = (body: string, at: number): string | null => {
    const name = tenantVariable(body);
    return name ? schoolAt(name, at) : null;
  };

  const out: SeedEntry[] = [];
  /** Where each explicit call's argument object sits, so the loop-entry pass below can tell a call
   *  it has already read from an entry it has not. */
  const callBodies: [number, number][] = [];
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
    callBodies.push([open, end]);
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
      school: schoolOf(body, at),
      courseConst,
      modulePath: courseConst ? (importOf.get(courseConst) ?? null) : null,
      category: field("category"),
      additionalCategories: listField(body, "additionalCategories"),
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
  //
  // What is skipped is decided by WHERE a match sits, not by its slug. An explicit call's own
  // `slug: "...", course: X` matches these patterns too and must not be counted twice; but the same
  // slug in a second place is a second registration (a preview on another school), and dropping it
  // by name would hide exactly what the preview rule has to see.
  const seenEntries = new Set<number>();
  const pairs = [
    /slug:\s*"([a-z0-9-]+)"[^{}]*?course:\s*([A-Z_][A-Za-z0-9_]*)/g,
    /course:\s*([A-Z_][A-Za-z0-9_]*)[^{}]*?slug:\s*"([a-z0-9-]+)"/g,
  ];
  for (const [i, re] of pairs.entries()) {
    for (const m of src.matchAll(re)) {
      const slug = i === 0 ? m[1] : m[2];
      const courseConst = i === 0 ? m[2] : m[1];
      const where = m.index ?? 0;
      if (callBodies.some(([open, end]) => open < where && where < end)) continue;
      // Read the WHOLE entry object, not a fixed window. A loop entry carries its series fields
      // (code, position, track) just like an explicit call, and a 120-character window missed every
      // one of them: `check-series-codes` therefore never saw the CREDIT series' lettered codes and
      // could not have caught a bad one. Walk back to the entry's opening brace and forward to its
      // close, so a loop entry is validated on the same terms as an explicit call.
      const objStart = src.lastIndexOf("{", where);
      if (seenEntries.has(objStart)) continue;
      seenEntries.add(objStart);
      const objEnd = objStart >= 0 ? matchBrace(src, objStart) : -1;
      const around =
        objStart >= 0 && objEnd > objStart
          ? src.slice(objStart, objEnd)
          : src.slice(m.index ?? 0, (m.index ?? 0) + m[0].length + 120);
      const call = objEnd > 0 ? loopCall(src, objEnd) : null;
      const str = (name: string) =>
        new RegExp(`${name}:\\s*"([^"]*)"`).exec(around)?.[1] ?? null;
      out.push({
        file,
        slug,
        school: call ? schoolOf(call.body, call.at) : null,
        courseConst,
        modulePath: importOf.get(courseConst) ?? null,
        // A loop entry often leaves the category to the loop's own seedAuthoredCourse call (every
        // state-civics course is "Civics" there). Read it from that call when the entry has none, so
        // a catalog index built on this registry does not show 73 courses as uncategorised.
        category: str("category") ?? (call ? (/\bcategory:\s*"([^"]*)"/.exec(call.body)?.[1] ?? null) : null),
        additionalCategories: listField(around, "additionalCategories"),
        seriesSlug: str("seriesSlug"),
        seriesCode: str("seriesCode"),
        seriesPosition: str("seriesPosition"),
        seriesTrack: str("seriesTrack"),
        visibility: str("visibility"),
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
  return seedScriptFiles().flatMap((f) => extractSeedEntries(f));
}

/** Resolve one slug. Returns the FIRST match in seed-script order. A slug registered twice is either
 *  a preview on a second school (legal, see `schoolShareViolations`) or a bug that rule reports. */
export function findSeedEntry(slug: string): SeedEntry | undefined {
  return allSeedEntries().find((e) => e.slug === slug);
}

/** The half of the preview rule a registration breaks: its school cannot be read, it is registered
 *  twice on one school, or it is on a second school without being a series' first course. */
export type ShareRule = "unknown-school" | "once-per-school" | "preview-only";

export interface ShareViolation {
  rule: ShareRule;
  slug: string;
  detail: string;
}

/**
 * The only courses Learn.WitUS gives ElementaryMBA in full: the seven business-formation courses the
 * ElementaryMBA plan proposed sharing (BAM, 2026-10-23: "ElementaryMBA doesn't get previews, it gets
 * all of them", then "not all Learn.WitUS courses, just the business courses that were in the
 * original proposal"). Adding a slug here is a decision for BAM, not a fix for a failing test.
 */
export const FULL_SHARE_TO_ELEMENTARY_MBA: ReadonlySet<string> = new Set([
  "what-a-business-entity-is",
  "us-business-forms",
  "cooperatives",
  "financing-without-access",
  "foreign-business-forms",
  "business-governance",
  "choose-a-form-capstone",
]);

/**
 * BAM's sharing rule (2026-10-23, witus-learn task 346 item 2, refined the same day). Within a school
 * every slug is unique. Across schools a slug may sit on at most two, and:
 *   - the seven courses in `FULL_SHARE_TO_ELEMENTARY_MBA` may sit on Learn.WitUS and ElementaryMBA at
 *     any position;
 *   - every other course may appear on a second school only as a PREVIEW: position 01 of its series,
 *     linking to the rest (so Learn.WitUS shows FIRM-01 and points to ElementaryMBA for FIRM-02 on).
 * So nobody can copy a whole series across by accident.
 *
 * "Position 01" means at least one registration says `seriesPosition: "01"` and none says anything
 * else. The preview copy may carry no series fields at all, because the series may not exist on the
 * school that only previews it; a registration that names another position is a different course
 * under the same slug, and fails.
 *
 * Pure, over plain fields, so the test can feed it fabricated entries and prove the rule fails when
 * it should, not only that today's catalog passes.
 */
export function schoolShareViolations(
  entries: Pick<SeedEntry, "file" | "slug" | "school" | "seriesPosition">[],
): ShareViolation[] {
  const out: ShareViolation[] = [];
  const bySlug = new Map<string, { school: string; file: string; position: string | null }[]>();
  for (const e of entries) {
    if (e.school == null) {
      // Not skipped: a seeder whose tenant the registry cannot read would otherwise pass both halves
      // of the rule by being invisible to them.
      out.push({
        rule: "unknown-school",
        slug: e.slug,
        detail: `${e.slug} (${e.file}): cannot tell which school this call seeds, so the preview rule cannot be checked. Pass tenantId from a tenant looked up by a literal slug or a module-level const, or teach scripts/lib/seed-registry.ts the new shape.`,
      });
      continue;
    }
    const regs = bySlug.get(e.slug) ?? [];
    regs.push({ school: e.school, file: e.file, position: e.seriesPosition });
    bySlug.set(e.slug, regs);
  }

  for (const [slug, regs] of bySlug) {
    const schools = new Map<string, string[]>();
    for (const r of regs) schools.set(r.school, [...(schools.get(r.school) ?? []), r.file]);
    for (const [school, files] of schools) {
      if (files.length > 1) {
        out.push({
          rule: "once-per-school",
          slug,
          detail: `${slug}: registered ${files.length} times on ${school} (${files.join(", ")})`,
        });
      }
    }
    if (schools.size < 2) continue;
    const names = [...schools.keys()].sort().join(", ");
    if (schools.size > 2) {
      out.push({
        rule: "preview-only",
        slug,
        detail: `${slug}: on ${schools.size} schools (${names}); a preview adds one school, never more`,
      });
      continue;
    }
    if (FULL_SHARE_TO_ELEMENTARY_MBA.has(slug) && schools.has("learn-witus") && schools.has("elementary-mba")) continue;
    const positions = regs.map((r) => r.position);
    if (!positions.includes("01") || positions.some((p) => p != null && p !== "01")) {
      out.push({
        rule: "preview-only",
        slug,
        detail: `${slug}: on two schools (${names}) but is not position 01 of its series (positions: ${positions.map((p) => p ?? "none").join(", ")}); only a series' first course may appear on a second school, as a preview`,
      });
    }
  }
  return out;
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
