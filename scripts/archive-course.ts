// archive-course: archive an old course as an earlier edition of its rebuilt replacement, in one
// transaction (plans/101 section 5, slug rule (a), approved 2026-11-25; src/lib/archive-course.ts).
//
//   pnpm archive:course:prod --old <slug> --new <slug> --dry-run
//   pnpm archive:course:prod --old <slug> --new <slug> [--reason-file <path>] [--tenant <slug>]
//
// What one run does, all or nothing:
//   1. the OLD course's slug becomes <slug>-archived-<year> (the year from the clock, UTC),
//   2. its archived_at, archived_reason and superseded_by_course_id are set,
//   3. the NEW course takes the old course's slug, so every link that named it now reaches the
//      maintained course.
// The reason is the default label from plan 101 section 5 with the new course's title and today's
// date filled in, or the text of --reason-file as given. --tenant defaults to learn-witus.
//
// It refuses, writing nothing, when: the new slug does not exist, the old course is already archived,
// the target slug is taken, either slug names two courses in the tenant, or both name one course.
// --dry-run prints exactly what would change and writes nothing.
//
// Before running it: the old course's file must be out of the seed registry (or its slug updated to
// the archived slug) and the new course's file must use the canonical slug, or the next seed run
// writes the old content onto the replacement, because the seeder matches courses by slug
// (OPERATING.md, "Archived course editions"). The connection string comes from the env file the
// package script loads and is never printed. Caches on the site refresh within the hour
// (PUBLIC_CACHE_SECONDS); the owner's control on /teach clears them at once instead.

import { readFileSync } from "node:fs";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { archiveCourse, ArchiveRefusal, drizzleArchiveRunner } from "../src/lib/archive-course";
import { resolveDbUrl } from "./db-url";

neonConfig.webSocketConstructor = ws;

export interface ArchiveCliArgs {
  oldSlug: string;
  newSlug: string;
  reasonFile: string | null;
  tenantSlug: string;
  dryRun: boolean;
}

/** Parse argv. Exported so the unit suite can pin the flags without a database. */
export function parseArchiveArgs(argv: readonly string[]): ArchiveCliArgs {
  const out: ArchiveCliArgs = { oldSlug: "", newSlug: "", reasonFile: null, tenantSlug: "learn-witus", dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => {
      const v = argv[i + 1];
      if (v == null || v.startsWith("--")) throw new Error(`${a} needs a value.`);
      i++;
      return v;
    };
    if (a === "--old") out.oldSlug = next();
    else if (a === "--new") out.newSlug = next();
    else if (a === "--reason-file") out.reasonFile = next();
    else if (a === "--tenant") out.tenantSlug = next();
    else if (a === "--dry-run") out.dryRun = true;
    else throw new Error(`Unknown argument ${a}. Usage: --old <slug> --new <slug> [--reason-file <path>] [--tenant <slug>] [--dry-run]`);
  }
  if (!out.oldSlug || !out.newSlug) throw new Error("Both --old <slug> and --new <slug> are required.");
  if (out.oldSlug === out.newSlug) throw new Error("--old and --new must be different slugs.");
  return out;
}

async function main() {
  let args: ArchiveCliArgs;
  try {
    args = parseArchiveArgs(process.argv.slice(2));
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }
  const connectionString = resolveDbUrl(true);
  if (!connectionString || connectionString.includes("placeholder")) {
    console.error("DATABASE_URL is not set. Run this through `pnpm archive:course:prod`, which reads .env.prod.");
    process.exit(1);
  }
  const reason = args.reasonFile ? readFileSync(args.reasonFile, "utf8") : null;

  const pool = new Pool({ connectionString });
  const db = drizzle(pool, { schema, casing: "snake_case" });
  try {
    const [tenant] = await db
      .select({ id: schema.tenants.id })
      .from(schema.tenants)
      .where(eq(schema.tenants.slug, args.tenantSlug))
      .limit(1);
    if (!tenant) {
      console.error(`No tenant with slug ${args.tenantSlug}.`);
      process.exitCode = 1;
      return;
    }
    const plan = await archiveCourse(drizzleArchiveRunner(db), {
      tenantId: tenant.id,
      oldSlug: args.oldSlug,
      newSlug: args.newSlug,
      reason,
      dryRun: args.dryRun,
    });
    console.log(args.dryRun ? "Dry run, nothing written. This is what would change:" : "Archived:");
    console.log(`  old: ${plan.old.title}`);
    console.log(`       slug ${plan.old.slugBefore} -> ${plan.old.slugAfter}`);
    console.log(`       archived_at ${plan.archivedAt.toISOString()}, superseded_by ${plan.replacement.id}`);
    console.log(`  new: ${plan.replacement.title}`);
    console.log(`       slug ${plan.replacement.slugBefore} -> ${plan.replacement.slugAfter}`);
    console.log(`  reason: ${plan.reason}`);
    if (!args.dryRun) {
      console.log("Site caches refresh within the hour; the course pages read the new rows at once.");
    }
  } catch (err) {
    if (err instanceof ArchiveRefusal) {
      console.error(`Refused (${err.code}): ${err.message}`);
      process.exitCode = 1;
      return;
    }
    throw err;
  } finally {
    await pool.end();
  }
}

// Only run when invoked directly, so the unit suite can import parseArchiveArgs.
if (process.argv[1] && /archive-course\.ts$/.test(process.argv[1])) void main();
