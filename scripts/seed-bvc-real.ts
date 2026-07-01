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

async function tenantBySlug(slug: string): Promise<string | undefined> {
  const r = await db.select({ id: schema.tenants.id }).from(schema.tenants).where(eq(schema.tenants.slug, slug)).limit(1);
  return r[0]?.id;
}

// Ensure an instructor exists on a tenant; reuse the real user if the email is taken.
async function ensureInstructor(
  tenantId: string,
  who: { id: string; email: string; username: string; displayName: string },
): Promise<string> {
  const existing = await db.select({ id: schema.users.id }).from(schema.users).where(eq(schema.users.email, who.email)).limit(1);
  const userId = existing[0]?.id ?? who.id;
  if (!existing[0]) {
    await db.insert(schema.users).values({ id: who.id, email: who.email, emailVerified: true, name: who.displayName }).onConflictDoNothing();
  }
  await db.insert(schema.userProfiles).values({ userId, username: who.username, displayName: who.displayName }).onConflictDoNothing();
  await db.insert(schema.tenantMemberships).values({ tenantId, userId, role: "instructor" }).onConflictDoNothing();
  return userId;
}

interface Row {
  module_title: string;
  lesson_order: string;
  title: string;
  lesson_type: string;
  text_content: string;
  is_free_preview: string;
  quiz_content: string;
  map_content: string;
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
    const base: AuthoredLesson = {
      slug: `l${r.lesson_order}-${slugify(r.title)}`.slice(0, 90),
      title: r.title,
      body: cleanLessonMarkdown(r.text_content),
    };
    // A lesson with map_content becomes a MAP lesson (producer markers + trade-route
    // lines + production polygons), keeping its script as the context text.
    if (r.map_content?.trim()) {
      try {
        return { ...base, mapContent: JSON.parse(r.map_content) };
      } catch {
        return base;
      }
    }
    return base;
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

  // Reuse the BVC instructor the sample seed uses (same id/email/username), so this
  // is idempotent and never collides on the unique email.
  const instructorId = "seed-bvc-instructor";
  await db.insert(schema.users).values({ id: instructorId, email: "faculty@bettervice.club", emailVerified: true, name: "BVC Faculty" }).onConflictDoNothing();
  await db.insert(schema.userProfiles).values({ userId: instructorId, username: "bvc-faculty", displayName: "BVC Faculty" }).onConflictDoNothing();
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

  // ── Share Season 1 (the caffeine/commodity origin stories — NOT age-gated) with the
  // other schools. Same content, isolated per tenant (own course rows/enrollment/progress).
  // BVC keeps all 3 seasons untouched; only S1 (eps 1-7) goes out. Learn.WitUS keeps the BVC
  // branding; ElementaryMBA gets the neutral collection name.
  const s1Files = files.filter((e) => e.n <= 7);
  const shares = [
    {
      slug: "learn-witus",
      instructor: { id: "bam", email: "bam@awews.com", username: "bam", displayName: "BAM" },
      collection: "Better Vice Club: Origin Stories",
      keepBvcBranding: true,
    },
    {
      slug: "elementary-mba",
      instructor: { id: "seed-emba-instructor", email: "faculty@emba.witus.online", username: "emba-faculty", displayName: "ElementaryMBA Faculty" },
      collection: "Commodity: Origin Stories. Canon Events.",
      keepBvcBranding: false,
    },
  ];
  for (const share of shares) {
    const shareTenant = await tenantBySlug(share.slug);
    if (!shareTenant) {
      console.log(`  skip S1 share → ${share.slug} (tenant missing)`);
      continue;
    }
    const shareInstructor = await ensureInstructor(shareTenant, share.instructor);
    await db.insert(schema.courseCategories).values({ tenantId: shareTenant, name: share.collection, sortOrder: 9 }).onConflictDoNothing();
    for (const ep of s1Files) {
      const course = buildEpisode(ep.file, ep.slug);
      if (!course) continue;
      // ElementaryMBA drops the "BVC — " prefix + vice framing (neutral, kid-appropriate).
      const framed = share.keepBvcBranding
        ? course
        : {
            ...course,
            title: course.title.replace(/^BVC — /, ""),
            description: course.description.replace(/^Better Vice Club: a cited/, "A cited"),
          };
      await seedAuthoredCourse(db, {
        tenantId: shareTenant,
        instructorId: shareInstructor,
        slug: ep.slug,
        course: framed,
        category: share.collection,
        navigationMode: "linear",
        seasonNumber: 1,
        requiresAgeGate: false,
        replaceLessons: true,
      });
    }
    console.log(`  shared S1 (${s1Files.length} eps) → ${share.slug} as "${share.collection}"`);
  }

  await pool.end();
  console.log("Done. Real BVC content migrated + Season 1 shared with Learn.WitUS + ElementaryMBA.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
