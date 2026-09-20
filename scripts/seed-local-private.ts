// seed:local-private — seed courses whose TEXT must never enter this repository.
//
//   pnpm seed:local-private          # .env.local
//   pnpm seed:local-private:prod     # .env.prod
//
// WHY THIS EXISTS. A course built from a copyrighted book BAM owns is fine to hold for his own
// study and NOT fine to publish, and "publish" includes pushing it to GitHub. Every other course in
// this catalog lives in `scripts/data/*.ts`, which is tracked, so `visibility: "private"` protects
// the APP and not the TEXT. That distinction is written into
// `content/construction/00-READ-ME-FIRST-private-study-only.md` and it is the whole reason the
// construction courses were built from the federal regulation rather than from the books.
//
// This seeder is the other way to satisfy it: the course text lives in `content/private-courses/`,
// which sits inside the gitignored `/content/` tree, and NOTHING tracked imports it. A fresh clone
// of this repo contains this file and no course. The repo can say that such a course exists without
// carrying a word of it.
//
// THE PRECEDENT, so this reads as a pattern rather than an invention: `scripts/data/nasm-*.ts`,
// `ecs-*.ts` and `speedway-course.ts` are already ignored by name in .gitignore for the same reason.
// The weakness of that approach is that it depends on somebody remembering to add the line, and a
// tracked seeder imports the ignored module, so a missing file breaks the build for everyone else.
// A directory that is ignored by its parent, plus a guard, does not depend on anybody remembering.
//
// WHAT THIS SEEDER REFUSES TO DO, because a safeguard that can be argued with is not a safeguard:
//   - it will not seed a course whose JSON does not say `"visibility": "private"`;
//   - it will not seed one with no `publishHoldReason`;
//   - it will not seed one that is not free;
//   - it will not seed at all if any file under content/private-courses/ has been added to git.
// The last one is the important one: the failure mode is not a wrong setting in the database, it is
// a `git add -f` that puts a publisher's prose on GitHub.

import { readdirSync, readFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { eq } from "drizzle-orm";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import type { AuthoredCourse } from "./data/authored-course";

neonConfig.webSocketConstructor = ws;

const DIR = join(import.meta.dirname, "..", "content", "private-courses");

/** One local course file: the course itself plus the few registration fields it is allowed to set. */
interface LocalPrivateCourse {
  slug: string;
  category: string;
  additionalCategories?: string[];
  /** Must be "private". Present in the file so the intent is visible where the text is. */
  visibility: "private";
  /** Must be present and honest: it is what the owner reads on the course page. */
  publishHoldReason: string;
  price?: number;
  priceType?: "free";
  seriesSlug?: string;
  seriesTitle?: string;
  seriesOrder?: number;
  navigationMode?: "linear" | "cyoa";
  course: AuthoredCourse;
}

/** True when git tracks the path. A tracked file under this directory is the one failure that
 *  matters, so it is checked before anything is written. */
function isTracked(relPath: string): boolean {
  try {
    const out = execFileSync("git", ["ls-files", "--error-unmatch", relPath], {
      cwd: join(import.meta.dirname, ".."),
      stdio: ["ignore", "pipe", "ignore"],
    });
    return out.toString().trim().length > 0;
  } catch {
    return false;
  }
}

function load(file: string): LocalPrivateCourse {
  const raw = JSON.parse(readFileSync(join(DIR, file), "utf-8")) as LocalPrivateCourse;
  const fail = (why: string): never => {
    throw new Error(`${file}: ${why}. Nothing was seeded.`);
  };
  if (raw.visibility !== "private") fail('visibility must be "private"');
  if (!raw.publishHoldReason?.trim()) fail("publishHoldReason is required and must say why");
  if (raw.price != null && raw.price !== 0) fail("a local private course is free");
  if (raw.priceType != null && raw.priceType !== "free") fail("a local private course is free");
  if (!raw.slug || !raw.category || !raw.course?.lessons?.length) fail("slug, category and lessons are required");
  return raw;
}

async function main(): Promise<void> {
  if (!existsSync(DIR)) {
    console.log(`No ${DIR}. Nothing to do.`);
    return;
  }
  const files = readdirSync(DIR).filter((f) => f.endsWith(".json"));
  if (!files.length) {
    console.log("No local private courses found.");
    return;
  }

  const leaked = files.filter((f) => isTracked(`content/private-courses/${f}`));
  if (leaked.length) {
    console.error(
      `REFUSING TO SEED. These files are tracked by git, which is the one thing this pipeline exists to prevent:\n  ${leaked.join("\n  ")}\n` +
        `Run: git rm --cached content/private-courses/<file>  (and check whether it was ever pushed).`,
    );
    process.exit(1);
  }

  const pool = new Pool({ connectionString: resolveDbUrl() });
  const db = drizzle(pool, { schema });
  try {
    const [tenant] = await db
      .select()
      .from(schema.tenants)
      .where(eq(schema.tenants.slug, "learn-witus"))
      .limit(1);
    if (!tenant) throw new Error("learn-witus tenant not found. Run pnpm seed:tenants first.");
    const [owner] = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.email, "bam@awews.com"))
      .limit(1);
    if (!owner) throw new Error("Owner user not found. Run pnpm seed:owner first.");

    for (const file of files) {
      const entry = load(file);
      const id = await seedAuthoredCourse(db, {
        tenantId: tenant.id,
        instructorId: owner.id,
        slug: entry.slug,
        course: entry.course,
        category: entry.category,
        additionalCategories: entry.additionalCategories,
        navigationMode: entry.navigationMode ?? "linear",
        price: 0,
        priceType: "free",
        visibility: "private",
        publishHoldReason: entry.publishHoldReason,
        seriesSlug: entry.seriesSlug,
        seriesTitle: entry.seriesTitle,
        seriesOrder: entry.seriesOrder,
      });
      // Visibility is insert-only in the seeder, by design, so a course that already existed as
      // public would stay public. These must never be public, so it is re-asserted every run.
      await db
        .update(schema.courses)
        .set({ visibility: "private", isPublished: false, publishedAt: null })
        .where(eq(schema.courses.id, id));
      console.log(`  private: ${entry.slug} (${entry.course.lessons.length} lessons) from ${file}`);
    }
    console.log(`Done. ${files.length} local private course(s).`);
  } finally {
    await pool.end();
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
