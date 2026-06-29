import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { parse } from "csv-parse/sync";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import { cleanLessonMarkdown, convertCentosQuiz, type CentosQuiz } from "./lib/centos-content";
import type { AuthoredCourse, AuthoredLesson } from "./data/authored-course";

// Migrates the REAL BVC content (CentOS) into the BVC tenant. Reads the per-episode
// lesson CSVs in content/bvc/ (lessons + an embedded quiz), strips stage tags, converts
// the quiz schema, attaches the episode assignment if present, and seeds each episode as
// a course — Season 1 OPEN, Seasons 2-3 age-gated. Replaces the sample seed's content.
// Run: pnpm seed:bvc:real

neonConfig.webSocketConstructor = ws;
const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}
const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

const CONTENT = join(process.cwd(), "content", "bvc");

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 50);
}

interface Row {
  module_title: string;
  lesson_order: string;
  title: string;
  lesson_type: string;
  text_content: string;
  is_free_preview: string;
  quiz_content: string;
}

function buildEpisode(file: string, episodeSlug: string): AuthoredCourse | null {
  const rows = parse(readFileSync(join(CONTENT, file), "utf-8"), {
    columns: true,
    skip_empty_lines: true,
    relax_column_count: true,
  }) as Row[];
  if (rows.length === 0) return null;

  const ordered = [...rows].sort((a, b) => Number(a.lesson_order) - Number(b.lesson_order));
  const lessons: AuthoredLesson[] = ordered.map((r) => {
    if (r.lesson_type === "quiz" && r.quiz_content?.trim()) {
      return {
        slug: `quiz-${r.lesson_order}`,
        title: r.title || "Knowledge Check",
        quiz: convertCentosQuiz(JSON.parse(r.quiz_content) as CentosQuiz),
      };
    }
    return {
      slug: `l${r.lesson_order}-${slugify(r.title)}`.slice(0, 90),
      title: r.title,
      body: cleanLessonMarkdown(r.text_content),
    };
  });

  // Attach the episode assignment if a {slug}-ASSIGNMENT.md exists.
  const assignFile = join(CONTENT, `${episodeSlug}-ASSIGNMENT.md`);
  if (existsSync(assignFile)) {
    lessons.push({
      slug: "assignment",
      title: "Assignment",
      body: readFileSync(assignFile, "utf-8"),
    });
  }

  const title = ordered[0]?.module_title?.replace(/^Episode\s*\d+:\s*/, "").trim() || episodeSlug;
  return {
    title: `BVC — ${title}`,
    description: `Better Vice Club: a cited, audio-first history of ${title}.`,
    lessons,
  };
}

async function main() {
  const t = await db.select({ id: schema.tenants.id }).from(schema.tenants).where(eq(schema.tenants.slug, "better-vice-club")).limit(1);
  const tenantId = t[0]?.id;
  if (!tenantId) {
    console.error("BVC tenant missing — run `pnpm seed:tenants` first.");
    process.exit(1);
  }

  const instructorId = "seed-bvc-faculty";
  await db.insert(schema.users).values({ id: instructorId, email: "faculty@bettervice.club", emailVerified: true, name: "Better Vice Club" }).onConflictDoNothing();
  await db.insert(schema.userProfiles).values({ userId: instructorId, username: "better-vice-club", displayName: "Better Vice Club" }).onConflictDoNothing();
  await db.insert(schema.tenantMemberships).values({ tenantId, userId: instructorId, role: "instructor" }).onConflictDoNothing();

  const files = readdirSync(CONTENT)
    .filter((f) => /^bvc-episode-\d+-.+-lessons\.csv$/.test(f))
    .map((f) => {
      const m = f.match(/^bvc-episode-(\d+)-(.+)-lessons\.csv$/)!;
      return { file: f, n: Number(m[1]), slug: m[2] };
    })
    .sort((a, b) => a.n - b.n);

  for (const ep of files) {
    const season = Math.ceil(ep.n / 7); // 1-7 -> S1, 8-14 -> S2, 15-21 -> S3
    const gated = season >= 2;
    const course = buildEpisode(ep.file, ep.slug);
    if (!course) continue;
    await seedAuthoredCourse(db, {
      tenantId,
      instructorId,
      slug: ep.slug,
      course,
      category: `Season ${season}`,
      navigationMode: "linear",
      seasonNumber: season,
      requiresAgeGate: gated,
      replaceLessons: true,
    });
    console.log(`  episode ${ep.n} (${ep.slug}) — S${season}${gated ? " [age-gated]" : ""}`);
  }

  await pool.end();
  console.log("Done. Real BVC content migrated.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
