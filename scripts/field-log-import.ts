// field-log:import — load a prepared route of stops into My Field Log: one project, one leg per stop.
//
//   pnpm field-log:import <file.json> [more.json ...] [--email you@example.com] [--tenant learn-witus] [--replace]
//   pnpm field-log:import:prod <file.json> ...
//   pnpm field-log:import <file.json> --check     # validate only; touches no database
//
// WHY THIS EXISTS. A route of forty stops is forty trips through the "Add leg" form, and the notes a
// stop needs (the lesson it serves, what to capture, which permission to get first, how far the next
// stop is) do not fit that form at all. Written for BAM's October 2026 road trip, whose three versions
// are built locally in content/road-trip/, and usable for any route.
//
// PRIVACY. An itinerary says where a person will be and roughly when, and this repository is public.
// The JSON belongs under the gitignored content/ tree, and this script refuses to read a file that git
// tracks: the same guard seed:local-private uses, for the same reason.
//
// RE-RUNS ARE SAFE. Without --replace, a project with the same title (same user, same tenant) is left
// alone. With --replace, legs are matched by NAME: a match is updated in place and KEEPS its visited
// tick, a new name is added, and a leg no longer in the file is listed but never deleted (captures may
// point at it). The project's checklist is never reset.
//
// File shape (every leg field is the API's own, see src/lib/field-log-leg-schema.ts):
//   { "title": "...", "subject": "...", "templateKey": "site-tour", "subjectTag": "travel-place",
//     "medium": null, "kit": ["..."], "legs": [{ "name": "...", "siteType": "other", "locationLabel": "...",
//     "lat": 0, "lng": 0, "notes": "...", "permissionNote": "...", "sortOrder": 0 }] }
//
// `permissionNote` (optional, up to 500 characters) says what permission covers filming at the stop,
// for example "Public viewpoint, no permission needed". A capture on a leg can fill a lesson's tour
// slot only when its leg has one ("Use in a lesson", src/lib/field-log-tour.ts). Older files carried
// it inside `notes`; move it to its own field so the tour rule can read it. On --replace, a leg whose
// file entry has no permissionNote keeps the one already stored.

import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { relative, resolve } from "node:path";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { and, eq } from "drizzle-orm";
import ws from "ws";
import { z } from "zod";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { LegSchema } from "../src/lib/field-log-leg-schema";
import { initialChecklist, templateByKey } from "../src/lib/field-log-templates";

neonConfig.webSocketConstructor = ws;

const ROOT = resolve(import.meta.dirname, "..");

const ImportSchema = z.object({
  title: z.string().min(1).max(200),
  subject: z.string().max(1000).nullish(),
  templateKey: z.string().refine((k) => templateByKey(k) !== undefined, "Unknown field-log template"),
  subjectTag: z.enum(["people", "events", "institutions", "travel-place"]).nullish(),
  medium: z.enum(["words", "sound", "motion", "archive"]).nullish(),
  kit: z.array(z.string().max(200)).max(50).nullish(),
  legs: z.array(LegSchema).min(1).max(500),
});
type ImportFile = z.infer<typeof ImportSchema>;

function arg(flag: string, fallback: string): string {
  const i = process.argv.indexOf(flag);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

function isTracked(absPath: string): boolean {
  try {
    const out = execFileSync("git", ["ls-files", "--error-unmatch", relative(ROOT, absPath)], {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "ignore"],
    });
    return out.toString().trim().length > 0;
  } catch {
    return false;
  }
}

function load(absPath: string): ImportFile {
  const parsed = ImportSchema.safeParse(JSON.parse(readFileSync(absPath, "utf8")));
  if (!parsed.success) {
    throw new Error(`${absPath}: ${parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ")}`);
  }
  const names = parsed.data.legs.map((l) => l.name);
  const dupes = names.filter((n, i) => names.indexOf(n) !== i);
  if (dupes.length) throw new Error(`${absPath}: leg names must be unique (re-runs match on them): ${[...new Set(dupes)].join(", ")}`);
  return parsed.data;
}

async function main(): Promise<void> {
  const valueFlags = new Set(["--email", "--tenant"]);
  const files = process.argv.slice(2).filter((a, i, all) => !a.startsWith("--") && !valueFlags.has(all[i - 1] ?? ""));
  if (!files.length) {
    console.error("Usage: pnpm field-log:import <file.json> [more.json ...] [--email you@example.com] [--tenant learn-witus] [--replace] [--check]");
    process.exit(1);
  }
  const email = arg("--email", "bam@awews.com");
  const tenantSlug = arg("--tenant", "learn-witus");
  const replace = process.argv.includes("--replace");

  const paths = files.map((f) => resolve(f));
  const tracked = paths.filter(isTracked);
  if (tracked.length) {
    console.error(`REFUSING TO IMPORT. These files are tracked by git, and an itinerary must not be published:\n  ${tracked.join("\n  ")}`);
    process.exit(1);
  }
  const entries = paths.map((p) => ({ path: p, data: load(p) }));
  if (process.argv.includes("--check")) {
    for (const { path, data } of entries) console.log(`  ok: "${data.title}" · ${data.legs.length} legs · ${relative(ROOT, path)}`);
    return;
  }

  const url = resolveDbUrl(true);
  if (!url) throw new Error("No database URL in the environment (see scripts/db-url.ts).");
  console.log(`Database host: ${new URL(url).host} · tenant ${tenantSlug} · user ${email}${replace ? " · --replace" : ""}`);

  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });
  try {
    const [tenant] = await db.select().from(schema.tenants).where(eq(schema.tenants.slug, tenantSlug)).limit(1);
    if (!tenant) throw new Error(`Tenant "${tenantSlug}" not found.`);
    const [user] = await db.select().from(schema.users).where(eq(schema.users.email, email)).limit(1);
    if (!user) throw new Error(`No user with email ${email}.`);

    for (const { path, data } of entries) {
      const [existing] = await db
        .select()
        .from(schema.documentationProjects)
        .where(
          and(
            eq(schema.documentationProjects.tenantId, tenant.id),
            eq(schema.documentationProjects.userId, user.id),
            eq(schema.documentationProjects.title, data.title),
          ),
        )
        .limit(1);

      if (existing && !replace) {
        console.log(`  skipped: "${data.title}" already exists (pass --replace to update its legs). ${relative(ROOT, path)}`);
        continue;
      }

      await db.transaction(async (tx) => {
        let projectId: string;
        if (existing) {
          projectId = existing.id;
          await tx
            .update(schema.documentationProjects)
            .set({ subject: data.subject ?? null, kit: data.kit ?? null, updatedAt: new Date() })
            .where(eq(schema.documentationProjects.id, projectId));
        } else {
          const template = templateByKey(data.templateKey)!;
          const [project] = await tx
            .insert(schema.documentationProjects)
            .values({
              tenantId: tenant.id,
              userId: user.id,
              title: data.title,
              subject: data.subject ?? null,
              templateKey: data.templateKey,
              medium: data.medium ?? null,
              subjectTag: data.subjectTag ?? null,
              kit: data.kit ?? null,
              checklist: initialChecklist(template),
            })
            .returning();
          projectId = project.id;
          await tx.insert(schema.projectMembers).values({ projectId, userId: user.id, role: "owner" });
        }

        const current = await tx.select().from(schema.projectLegs).where(eq(schema.projectLegs.projectId, projectId));
        const byName = new Map(current.map((l) => [l.name, l]));
        let added = 0;
        let updated = 0;
        for (const leg of data.legs) {
          // `visited` is never taken from the file on an update: a re-run must not untick the road.
          const { visited, ...fields } = leg;
          const match = byName.get(leg.name);
          if (match) {
            await tx.update(schema.projectLegs).set(fields).where(eq(schema.projectLegs.id, match.id));
            updated += 1;
          } else {
            await tx.insert(schema.projectLegs).values({ ...fields, visited: visited ?? false, projectId });
            added += 1;
          }
        }
        const fileNames = new Set(data.legs.map((l) => l.name));
        const orphans = current.filter((l) => !fileNames.has(l.name)).map((l) => l.name);
        console.log(
          `  ${existing ? "updated" : "created"}: "${data.title}" · ${added} leg(s) added, ${updated} updated` +
            (orphans.length ? ` · not in the file, left as they are: ${orphans.join("; ")}` : ""),
        );
      });
    }
  } finally {
    await pool.end();
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
