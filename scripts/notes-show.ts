// notes:show — print the notes and highlights a reader left on one course, so Claude can review
// them between sessions. READ-ONLY: this script runs SELECTs and nothing else.
//
//   pnpm notes:show --course cloud-credit-and-living-directory            # .env.local
//   pnpm notes:show:prod --course cloud-credit-and-living-directory       # .env.prod
//   add --tenant <slug> when the course slug exists in more than one school
//
// WHY. Personal notes are private to their author by design (src/db/schema/notes.ts), and the
// notes API serves only the signed-in viewer's own notes. The owner reads an internal ebook as a
// private course, annotates it in the lesson view, and then asks Claude to "review my comments".
// Claude has no session in the app, so this is the sanctioned way to read them: the same pattern as
// scripts/tracker-show.ts, with the output shaped for a reviewer (lesson, quoted passage, note).
import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, asc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

const flag = (n: string) => {
  const i = process.argv.indexOf(`--${n}`);
  return i !== -1 ? process.argv[i + 1] : undefined;
};

async function main() {
  const courseSlug = flag("course");
  if (!courseSlug) {
    console.error("Usage: pnpm notes:show --course <course-slug> [--tenant <tenant-slug>]");
    process.exit(1);
  }
  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });
  try {
    const tenantSlug = flag("tenant");
    const courses = await db
      .select({
        id: schema.courses.id,
        title: schema.courses.title,
        tenantId: schema.courses.tenantId,
        tenantSlug: schema.tenants.slug,
      })
      .from(schema.courses)
      .innerJoin(schema.tenants, eq(schema.tenants.id, schema.courses.tenantId))
      .where(
        tenantSlug
          ? and(eq(schema.courses.slug, courseSlug), eq(schema.tenants.slug, tenantSlug))
          : eq(schema.courses.slug, courseSlug),
      );
    if (!courses.length) {
      console.log(`No course with slug "${courseSlug}"${tenantSlug ? ` in school "${tenantSlug}"` : ""}.`);
      return;
    }
    if (courses.length > 1) {
      console.error(`Slug "${courseSlug}" exists in ${courses.length} schools; pass --tenant one of: ${courses.map((c) => c.tenantSlug).join(", ")}`);
      process.exit(1);
    }
    const course = courses[0];
    const lessons = await db
      .select({ id: schema.lessons.id, slug: schema.lessons.slug, title: schema.lessons.title })
      .from(schema.lessons)
      .where(eq(schema.lessons.courseId, course.id));
    const lessonById = new Map(lessons.map((l) => [l.id, l]));
    const notes = await db
      .select({
        id: schema.lessonNotes.id,
        lessonId: schema.lessonNotes.lessonId,
        kind: schema.lessonNotes.kind,
        body: schema.lessonNotes.body,
        quote: schema.lessonNotes.quote,
        createdAt: schema.lessonNotes.createdAt,
        updatedAt: schema.lessonNotes.updatedAt,
        authorEmail: schema.users.email,
      })
      .from(schema.lessonNotes)
      .innerJoin(schema.users, eq(schema.users.id, schema.lessonNotes.authorId))
      .where(eq(schema.lessonNotes.courseId, course.id))
      .orderBy(asc(schema.lessonNotes.createdAt));
    console.log(`# ${course.title} (${course.tenantSlug}/${courseSlug}): ${notes.length} note(s)\n`);
    let current = "";
    for (const n of notes) {
      const l = n.lessonId ? lessonById.get(n.lessonId) : undefined;
      const where = l ? `${l.slug} · ${l.title}` : "(course-level note)";
      if (where !== current) {
        current = where;
        console.log(`\n## ${where}\n`);
      }
      const when = (n.updatedAt ?? n.createdAt).toISOString().slice(0, 16).replace("T", " ");
      console.log(`- [${n.kind}] ${when} ${n.authorEmail}`);
      if (n.quote) console.log(`  > ${n.quote.replace(/\s+/g, " ").trim()}`);
      console.log(`  ${n.body.replace(/\n/g, "\n  ")}`);
    }
  } finally {
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
