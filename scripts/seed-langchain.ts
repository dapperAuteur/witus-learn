import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import type { AuthoredCourse, AuthoredLesson } from "./data/authored-course";
import type { QuizContent } from "../src/lib/quiz";

// Seeds the LangChain / LangGraph courses (vetted + rewritten to the WitUS course
// standard from the lang-chain source repos) onto Learn.WitUS, under the existing
// "AI & Technology" category. Each course is a directory under scripts/data/langchain/
// holding a course.json manifest plus one .md file per text lesson. Re-seedable:
// seedAuthoredCourse upserts lessons by (courseId, slug). Run: pnpm seed:langchain

neonConfig.webSocketConstructor = ws;
const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
  process.exit(1);
}
const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

const ROOT = join(process.cwd(), "scripts", "data", "langchain");

// Manifest shapes (course.json). A lesson is either a text lesson backed by a .md
// file, or a quiz carrying inline QuizContent.
interface ManifestTextLesson {
  type: "text";
  section: string;
  slug: string;
  title: string;
  file: string;
  /** Active-recall cards (click-to-reveal). Keep the answer OUT of the .md body. */
  recall?: { prompt: string; answer: string }[];
}
interface ManifestQuizLesson {
  type: "quiz";
  section: string;
  slug: string;
  title: string;
  quiz: QuizContent;
}
type ManifestLesson = ManifestTextLesson | ManifestQuizLesson;
interface CourseManifest {
  slug: string;
  title: string;
  description: string;
  category: string;
  /** Ecosystem product slugs for the course's "Related WitUS tools" cross-promo card. */
  relatedProducts?: string[];
  lessons: ManifestLesson[];
}

function loadCourse(dir: string): { manifest: CourseManifest; course: AuthoredCourse } {
  const manifestPath = join(ROOT, dir, "course.json");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf-8")) as CourseManifest;
  const lessons: AuthoredLesson[] = manifest.lessons.map((l) => {
    if (l.type === "quiz") {
      return { slug: l.slug, title: l.title, section: l.section, quiz: l.quiz };
    }
    const body = readFileSync(join(ROOT, dir, l.file), "utf-8").trim();
    return { slug: l.slug, title: l.title, section: l.section, body, recallContent: l.recall };
  });
  return {
    manifest,
    course: { title: manifest.title, description: manifest.description, lessons },
  };
}

// GUIDE-01 hard rule: no AI tells in published text. Guard against em/en-dashes
// sneaking into a lesson body or quiz text (they read as machine-written).
function assertNoAiTells(course: AuthoredCourse): void {
  const bad = /[–—]/; // en-dash, em-dash
  for (const l of course.lessons) {
    const texts: string[] = [];
    if (l.body) texts.push(l.body);
    if (l.quiz) {
      for (const q of l.quiz.questions) {
        texts.push(q.prompt, q.explanation ?? "", ...q.options);
        // Accessibility gate: a quiz image must carry alt text (screen-reader description).
        if (q.imageUrl && !q.imageAlt?.trim()) {
          console.error(`Quiz image without alt text in "${l.slug}". Add imageAlt before seeding.`);
          process.exit(1);
        }
      }
    }
    for (const t of texts) {
      if (bad.test(t)) {
        console.error(`AI-tell (en/em dash) in "${l.slug}". Fix before seeding.`);
        process.exit(1);
      }
    }
  }
}

async function main() {
  const learnWitus = await tenantBySlug("learn-witus");
  if (!learnWitus) {
    console.error("Learn.WitUS tenant missing — run `pnpm seed:tenants` first.");
    process.exit(1);
  }
  // BAM is the instructor on Learn.WitUS courses (matches seed-courses.ts).
  const instructorId = await ensureInstructor(learnWitus, {
    id: "bam",
    email: "bam@awews.com",
    username: "bam",
    displayName: "BAM",
  });

  const dirs = readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(ROOT, d.name, "course.json")))
    .map((d) => d.name)
    .sort();

  if (dirs.length === 0) {
    console.error(`No course.json manifests found under ${ROOT}.`);
    process.exit(1);
  }

  for (const dir of dirs) {
    const { manifest, course } = loadCourse(dir);
    assertNoAiTells(course);
    await db
      .insert(schema.courseCategories)
      .values({ tenantId: learnWitus, name: manifest.category, sortOrder: 3 })
      .onConflictDoNothing();
    await seedAuthoredCourse(db, {
      tenantId: learnWitus,
      instructorId,
      slug: manifest.slug,
      course,
      category: manifest.category,
      navigationMode: "linear",
      relatedProducts: manifest.relatedProducts,
    });
    const quizzes = course.lessons.filter((l) => l.quiz).length;
    console.log(`  ${manifest.slug}: ${course.lessons.length} lessons (${quizzes} quizzes) [${manifest.category}]`);
  }

  await pool.end();
  console.log(`Done. Seeded ${dirs.length} LangChain course(s).`);
}

async function tenantBySlug(slug: string): Promise<string | undefined> {
  const r = await db
    .select({ id: schema.tenants.id })
    .from(schema.tenants)
    .where(eq(schema.tenants.slug, slug))
    .limit(1);
  return r[0]?.id;
}

async function ensureInstructor(
  tenantId: string,
  who: { id: string; email: string; username: string; displayName: string },
): Promise<string> {
  // Match seed-courses.ts: reuse the real account when the email already exists so
  // ownership stays on BAM's login and the membership FK resolves.
  const existing = await db
    .select({ id: schema.users.id })
    .from(schema.users)
    .where(eq(schema.users.email, who.email))
    .limit(1);
  const userId = existing[0]?.id ?? who.id;
  if (!existing[0]) {
    await db
      .insert(schema.users)
      .values({ id: who.id, email: who.email, emailVerified: true, name: who.displayName })
      .onConflictDoNothing();
  }
  await db
    .insert(schema.userProfiles)
    .values({ userId, username: who.username, displayName: who.displayName })
    .onConflictDoNothing();
  await db
    .insert(schema.tenantMemberships)
    .values({ tenantId, userId, role: "instructor" })
    .onConflictDoNothing();
  return userId;
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
