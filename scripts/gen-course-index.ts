// gen:course-index: write scripts/data/README.md, every registered course grouped by school and by
// category, the way the app lists them.
//
//   pnpm gen:course-index            # write the index
//   pnpm gen:course-index -- --check # fail if the committed index is stale (runs in `pnpm lint`)
//
// WHY AN INDEX AND NOT FOLDERS. BAM asked on 2026-10-05 for course files organised by the categories
// the app lists them under, and on 2026-10-06 chose this generated index over moving the files (the
// SWOT is in plans/90-fibre-and-farm-courses-and-folders-by-category.md). A course's category is DATA:
// it lives in its registration, a course can list under up to six categories, and the owner can rename
// a category in the admin UI. A folder could only ever show the first of those, and moving 311 files
// would break eight exact-path .gitignore lines that keep copyrighted course text out of git. This
// index reads the same registry the lint guards read (scripts/lib/seed-registry.ts), so it cannot
// disagree with them.
//
// DETERMINISTIC ON PURPOSE. Everything here comes from TRACKED files, so `--check` gives the same answer
// on BAM's machine, in a worktree and on a fresh clone. A course whose data module is gitignored (the
// generated health courses, Speedway, the FAA course) is listed by slug, marked as not in git, rather
// than read from a file only some machines have.
//
// WHAT IS NOT LISTED, and why, is printed at the foot of the index.

import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { allSeedEntries, type SeedEntry } from "./lib/seed-registry";

const OUT = "scripts/data/README.md";
const CHECK = process.argv.includes("--check");

/** Schools, in the order the index shows them. */
const TENANTS: { slug: string; label: string }[] = [
  { slug: "learn-witus", label: "Learn.WitUS (learn.witus.online)" },
  { slug: "better-vice-club", label: "Better Vice Club" },
  { slug: "elementary-mba", label: "ElementaryMBA" },
  { slug: "acme-academy", label: "Acme Academy (the isolation-test school)" },
];

/**
 * Which school each seed script seeds. A seed script that registers courses and is missing here stops
 * the generator, so a new seeder cannot silently leave its courses out of the index.
 */
const SEED_TENANT: Record<string, string> = {
  "scripts/seed-courses.ts": "learn-witus",
  "scripts/seed-faa.ts": "learn-witus",
  "scripts/seed-health.ts": "learn-witus",
  "scripts/seed-well.ts": "learn-witus",
  "scripts/seed-neuromatch.ts": "learn-witus",
  "scripts/seed-langchain.ts": "learn-witus",
  "scripts/seed-languages.ts": "learn-witus",
  "scripts/seed-sommelier.ts": "better-vice-club",
  "scripts/seed-speedway.ts": "elementary-mba",
};

/** Seed scripts whose courses come from data this index deliberately does not read. */
const NOT_INDEXED_SEEDERS = new Set(["scripts/seed-bvc-real.ts"]);

interface Row {
  tenant: string;
  slug: string;
  title: string;
  category: string;
  additionalCategories: string[];
  /** Repo-relative path of the file that holds the course, for the link. */
  file: string | null;
  inGit: boolean;
  series: string | null;
  code: string | null;
  isPrivate: boolean;
}

const tracked = new Set(
  execFileSync("git", ["ls-files", "scripts"], { encoding: "utf-8" })
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean),
);

/** The course title from its data module: the first `title:` after `export const <CONST>`. */
function titleFromModule(file: string, courseConst: string | null): string | null {
  if (!existsSync(file)) return null;
  const src = readFileSync(file, "utf-8");
  let from = 0;
  if (courseConst) {
    const at = src.search(new RegExp(`export\\s+const\\s+${courseConst}\\b`));
    if (at >= 0) from = at;
  }
  const m = /\btitle:\s*(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/.exec(src.slice(from));
  return m ? m[2].replace(/\\(["'`])/g, "$1").replace(/\s+/g, " ").trim() : null;
}

function moduleFile(modulePath: string | null): string | null {
  if (!modulePath) return null;
  const rel = modulePath.replace(/^\.\//, "");
  return `scripts/${rel}.ts`;
}

function fromRegistry(e: SeedEntry): Row {
  const tenant = SEED_TENANT[e.file];
  if (!tenant) {
    throw new Error(
      `${e.file} registers "${e.slug}" but has no school in SEED_TENANT (scripts/gen-course-index.ts). Add it.`,
    );
  }
  const file = moduleFile(e.modulePath);
  const inGit = !!file && tracked.has(file);
  return {
    tenant,
    slug: e.slug,
    title: (inGit && file ? titleFromModule(file, e.courseConst) : null) ?? e.slug,
    category: e.category ?? "(no category)",
    additionalCategories: e.additionalCategories,
    file,
    inGit,
    series: e.seriesSlug,
    code: e.seriesCode && e.seriesPosition ? `${e.seriesCode}-${e.seriesPosition}` : null,
    isPrivate: e.visibility === "private",
  };
}

/** The four languages: registered in a loop over LANGUAGES, with variable slugs the registry skips. */
function languages(): Row[] {
  const src = readFileSync("scripts/seed-languages.ts", "utf-8");
  const imports = new Map<string, string>();
  for (const m of src.matchAll(/import\s*\{([^}]*)\}\s*from\s*"([^"]+)"/g)) {
    for (const n of m[1].split(",").map((s) => s.trim()).filter(Boolean)) imports.set(n, m[2]);
  }
  const rows: Row[] = [];
  for (const m of src.matchAll(/\{\s*name:\s*"([^"]+)",\s*slug:\s*"([a-z0-9-]+)"[^}]*?authored:\s*([A-Z_][A-Z0-9_]*)\s*\}/g)) {
    const file = moduleFile(imports.get(m[3]) ?? null);
    const inGit = !!file && tracked.has(file);
    rows.push({
      tenant: "learn-witus",
      slug: m[2],
      title: (inGit && file ? titleFromModule(file, m[3]) : null) ?? m[1],
      category: "Languages",
      additionalCategories: [],
      file,
      inGit,
      series: null,
      code: null,
      isPrivate: false,
    });
  }
  return rows;
}

/** The three LangChain courses: one directory each under scripts/data/langchain/, with a course.json. */
function langchain(): Row[] {
  const base = "scripts/data/langchain";
  if (!existsSync(base)) return [];
  return readdirSync(base, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(base, d.name, "course.json")))
    .map((d) => {
      const file = `${base}/${d.name}/course.json`;
      const m = JSON.parse(readFileSync(file, "utf-8")) as {
        slug: string;
        title: string;
        category: string;
        visibility?: string;
      };
      return {
        tenant: "learn-witus",
        slug: m.slug,
        title: m.title,
        category: m.category,
        additionalCategories: [],
        file,
        inGit: tracked.has(file),
        series: null,
        code: null,
        isPrivate: m.visibility === "private",
      };
    });
}

/** The BVC and Acme demo courses: inserted by ensureCourse() in seed-bvc.ts, not seedAuthoredCourse. */
function bvcDemo(): Row[] {
  const file = "scripts/seed-bvc.ts";
  const src = readFileSync(file, "utf-8");
  const tenantOfVar: Record<string, string> = { bvc: "better-vice-club", acme: "acme-academy" };
  const rows: Row[] = [];
  for (const m of src.matchAll(/ensureCourse\(\s*(\w+)\s*,\s*\w+\s*,\s*\{/g)) {
    const open = (m.index ?? 0) + m[0].length - 1;
    let depth = 0;
    let end = -1;
    for (let i = open; i < src.length; i++) {
      if (src[i] === "{") depth++;
      else if (src[i] === "}" && --depth === 0) {
        end = i;
        break;
      }
    }
    if (end === -1) continue;
    // Only the course object's own top-level fields: lessons nested inside carry slugs too.
    const body = src.slice(open, end);
    const top = body.split(/\blessons:\s*\[/)[0];
    const str = (n: string) => new RegExp(`\\b${n}:\\s*"([^"]*)"`).exec(top)?.[1] ?? null;
    const slug = str("slug");
    const tenant = tenantOfVar[m[1]];
    if (!slug || !tenant) continue;
    rows.push({
      tenant,
      slug,
      title: str("title") ?? slug,
      category: str("category") ?? "(no category)",
      additionalCategories: [],
      file,
      inGit: tracked.has(file),
      series: null,
      code: null,
      isPrivate: false,
    });
  }
  return rows;
}

/**
 * The category order each school declares in its seed scripts: the lowest literal `sortOrder` seen
 * for that name (`.values({ name, sortOrder })`, loop arrays, and `ensureCategory(tenant, name, n)`).
 * The app sorts by the DATABASE's sortOrder, then name; that is set on first insert and editable at
 * /admin/categories, so this is the declared order and the index says so.
 */
function declaredOrder(): Map<string, number> {
  const order = new Map<string, number>();
  const keep = (name: string, n: number) => order.set(name, Math.min(order.get(name) ?? Infinity, n));
  for (const f of readdirSync("scripts").filter((n) => n.startsWith("seed-") && n.endsWith(".ts"))) {
    const src = readFileSync(join("scripts", f), "utf-8");
    for (const m of src.matchAll(/name:\s*"([^"]+)",\s*sortOrder:\s*(\d+)/g)) keep(m[1], Number(m[2]));
    for (const m of src.matchAll(/ensureCategory\(\s*\w+\s*,\s*"([^"]+)"\s*,\s*(\d+)\s*\)/g)) keep(m[1], Number(m[2]));
    const consts = new Map([...src.matchAll(/^const\s+([A-Z_][A-Z0-9_]*)\s*=\s*"([^"]*)"/gm)].map((c) => [c[1], c[2]]));
    for (const m of src.matchAll(/name:\s*([A-Z_][A-Z0-9_]*),\s*sortOrder:\s*(\d+)/g)) {
      const name = consts.get(m[1]);
      if (name) keep(name, Number(m[2]));
    }
  }
  return order;
}

function line(r: Row, alsoFrom?: string): string {
  const link = r.file ? `[\`${r.slug}\`](${r.file.replace(/^scripts\/data\//, "./").replace(/^scripts\//, "../")})` : `\`${r.slug}\``;
  const title = r.inGit ? r.title : `${r.title} (course data not in git: generated, or kept outside the repository)`;
  const bits = [`${link} ${title}`];
  if (r.code) bits.push(`${r.code}${r.series ? ` (${r.series})` : ""}`);
  else if (r.series) bits.push(`series ${r.series}`);
  if (r.isPrivate) bits.push("private");
  if (alsoFrom) bits.push(`listed here as an extra category; primary: ${alsoFrom}`);
  else if (r.additionalCategories.length) bits.push(`also in: ${r.additionalCategories.join(", ")}`);
  return `- ${bits.join(" · ")}`;
}

function build(): string {
  const registry = allSeedEntries();
  const unmapped = [...new Set(registry.map((e) => e.file))].filter(
    (f) => !SEED_TENANT[f] && !NOT_INDEXED_SEEDERS.has(f),
  );
  if (unmapped.length) {
    throw new Error(`Seed scripts with courses but no school in SEED_TENANT: ${unmapped.join(", ")}`);
  }
  const rows = [
    ...registry.filter((e) => !NOT_INDEXED_SEEDERS.has(e.file)).map(fromRegistry),
    ...languages(),
    ...langchain(),
    ...bvcDemo(),
  ];
  const dupes = rows.map((r) => `${r.tenant}/${r.slug}`).filter((k, i, all) => all.indexOf(k) !== i);
  if (dupes.length) throw new Error(`Course registered twice on one school: ${[...new Set(dupes)].join(", ")}`);

  const order = declaredOrder();
  const out: string[] = [
    "# Course index, by school and category",
    "",
    "> **GENERATED** by `pnpm gen:course-index` (`scripts/gen-course-index.ts`). Do not edit by hand:",
    "> re-run it after registering a course, and `pnpm lint` fails while it is stale.",
    ">",
    "> Every registered course, grouped the way the app lists them: by school, then by category in the",
    "> order the seed scripts declare (the live order is the database's, editable at",
    "> `/admin/categories`). A course that lists under extra categories appears under each, marked.",
    "> The files themselves stay flat in this folder: a course's category is data in its registration,",
    "> not its location (BAM's choice, 2026-10-06; the reasoning is in",
    "> `plans/90-fibre-and-farm-courses-and-folders-by-category.md`).",
    "",
  ];

  for (const t of TENANTS) {
    const mine = rows.filter((r) => r.tenant === t.slug);
    if (!mine.length) continue;
    out.push(`## ${t.label}`, "");
    const cats = new Set<string>();
    for (const r of mine) {
      cats.add(r.category);
      for (const c of r.additionalCategories) cats.add(c);
    }
    const sorted = [...cats].sort((a, b) => (order.get(a) ?? 1e9) - (order.get(b) ?? 1e9) || a.localeCompare(b));
    for (const c of sorted) {
      out.push(`### ${c}`, "");
      const primary = mine.filter((r) => r.category === c).sort((a, b) => a.slug.localeCompare(b.slug));
      const extra = mine.filter((r) => r.additionalCategories.includes(c)).sort((a, b) => a.slug.localeCompare(b.slug));
      for (const r of primary) out.push(line(r));
      for (const r of extra) out.push(line(r, r.category));
      out.push("");
    }
  }

  out.push(
    "## Not listed here",
    "",
    "- **Better Vice Club episodes** (`scripts/seed-bvc-real.ts`): seeded from the episode CSVs in the",
    "  gitignored `content/bvc/`, so their slugs are not in any tracked file.",
    "- **Local private courses** (`content/private-courses/*.json`, `scripts/seed-local-private.ts`):",
    "  their text must never enter git, so this index does not name them either.",
    "",
  );
  return out.join("\n");
}

const next = build();
if (CHECK) {
  const current = existsSync(OUT) ? readFileSync(OUT, "utf-8") : "";
  if (current !== next) {
    console.error(`${OUT} is stale. Run \`pnpm gen:course-index\` and commit the result.`);
    process.exit(1);
  }
  console.log(`${OUT} is current.`);
} else {
  writeFileSync(OUT, next);
  console.log(`Wrote ${OUT}.`);
}
