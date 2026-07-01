// feedback:list — dump recent curriculum feedback (corrections/comments/questions learners left on
// lessons) so it can be read directly, no copy-paste. Joins course + lesson titles.
//   pnpm feedback:list                      # all schools, newest 50
//   pnpm feedback:list --tenant learn-witus # one school
//   pnpm feedback:list --status open        # open / reviewed / resolved
//   pnpm feedback:list --kind correction    # correction / comment / question
//   pnpm feedback:list --limit 100

import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

const flag = (n: string) => {
  const i = process.argv.indexOf(`--${n}`);
  return i !== -1 ? process.argv[i + 1] : undefined;
};

async function main() {
  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });

  const conds = [];
  const tenantSlug = flag("tenant");
  if (tenantSlug) {
    const [t] = await db.select({ id: schema.tenants.id }).from(schema.tenants).where(eq(schema.tenants.slug, tenantSlug)).limit(1);
    if (!t) {
      console.error(`Tenant "${tenantSlug}" not found.`);
      await pool.end();
      process.exit(1);
    }
    conds.push(eq(schema.lessonFeedback.tenantId, t.id));
  }
  const status = flag("status");
  if (status) conds.push(eq(schema.lessonFeedback.status, status));
  const kind = flag("kind");
  if (kind) conds.push(eq(schema.lessonFeedback.kind, kind));
  const limit = flag("limit") ? parseInt(flag("limit") as string, 10) : 50;

  const rows = await db
    .select({
      created: schema.lessonFeedback.createdAt,
      kind: schema.lessonFeedback.kind,
      status: schema.lessonFeedback.status,
      body: schema.lessonFeedback.body,
      course: schema.courses.title,
      lesson: schema.lessons.title,
      tenant: schema.tenants.slug,
    })
    .from(schema.lessonFeedback)
    .innerJoin(schema.courses, eq(schema.courses.id, schema.lessonFeedback.courseId))
    .innerJoin(schema.lessons, eq(schema.lessons.id, schema.lessonFeedback.lessonId))
    .innerJoin(schema.tenants, eq(schema.tenants.id, schema.lessonFeedback.tenantId))
    .where(conds.length ? and(...conds) : undefined)
    .orderBy(desc(schema.lessonFeedback.createdAt))
    .limit(limit);

  console.error(`${rows.length} feedback item(s):\n`);
  for (const r of rows) {
    console.log(
      `[${r.status.toUpperCase()}] ${r.kind} · ${r.tenant} · ${r.course} › ${r.lesson} · ${new Date(r.created).toISOString()}\n  ${r.body.replace(/\n/g, "\n  ")}\n`,
    );
  }
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
