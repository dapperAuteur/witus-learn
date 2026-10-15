// follow-ups:list — print every release follow-up and launch to-do with its due state and what was
// done, so Claude can read them between sessions (same idea as `pnpm research:list`).
//
//   pnpm follow-ups:list                       # learn-witus
//   pnpm follow-ups:list --tenant better-vice-club
//   pnpm follow-ups:list:prod
//
// The workflow it closes: BAM releases a course (or a teacher schedules one), the follow-ups waiting
// on it fall due, BAM closes them with a note, and Claude reads the note here, then deletes a finished
// committed follow-up from src/lib/release-followups.ts.

import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import {
  FOLLOW_UP_WHEN_LABEL,
  blogPostUrl,
  courseStage,
  followUpDue,
  followUpsForTenant,
  getFollowUp,
  stageReaches,
  type CourseStage,
  type FollowUpWhen,
} from "../src/lib/release-followups";
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

  const tenantSlug = flag("tenant") ?? "learn-witus";
  const [tenant] = await db.select().from(schema.tenants).where(eq(schema.tenants.slug, tenantSlug)).limit(1);
  if (!tenant) {
    console.error(`Tenant "${tenantSlug}" not found.`);
    await pool.end();
    process.exit(1);
  }

  const [courses, rows, custom] = await Promise.all([
    db.select().from(schema.courses).where(eq(schema.courses.tenantId, tenant.id)),
    db.select().from(schema.courseReleaseFollowups).where(eq(schema.courseReleaseFollowups.tenantId, tenant.id)),
    db.select().from(schema.courseLaunchTodos).where(eq(schema.courseLaunchTodos.tenantId, tenant.id)),
  ]);
  const stageBySlug = new Map<string, CourseStage>();
  for (const c of courses) if (c.slug) stageBySlug.set(c.slug, courseStage(c));
  const byKey = new Map(rows.map((r) => [r.followupKey, r]));

  // Iterate the COMMITTED index, so a follow-up nobody has touched still prints as open.
  const committed = followUpsForTenant(tenantSlug);
  console.log(`Committed follow-ups (${committed.length}) on ${tenantSlug}:`);
  for (const f of committed) {
    const row = byKey.get(f.key);
    const due = followUpDue(f, (s) => stageBySlug.get(s) ?? "missing");
    const status = row?.status ?? "open";
    const state = status !== "open" ? status : due.due ? "DUE NOW" : "waiting";
    console.log(`\n── ${f.key}  [${state}]  (${f.kind}, due ${FOLLOW_UP_WHEN_LABEL[f.when]})`);
    console.log(`   ${f.title}`);
    if (f.blogPost) console.log(`   post: ${blogPostUrl(f.blogPost)}`);
    if (due.waitingOn.length) console.log(`   waiting on: ${due.waitingOn.map((w) => `${w.slug} (${w.stage})`).join(", ")}`);
    if (row?.note) console.log(`   NOTE (${row.updatedAt.toISOString().slice(0, 10)}): ${row.note.replace(/\n/g, "\n     ")}`);
  }

  const courseById = new Map(courses.map((c) => [c.id, c]));
  console.log(`\nLaunch to-dos added on course pages (${custom.length}):`);
  for (const r of custom) {
    const c = courseById.get(r.courseId);
    const stage = c ? courseStage(c) : "missing";
    const due = stageReaches(stage, r.dueWhen as FollowUpWhen);
    const state = r.status !== "open" ? r.status : due ? "DUE NOW" : "waiting";
    console.log(`\n── ${c?.slug ?? r.courseId} (${stage}): [${state}] ${r.kind}: ${r.title}`);
    if (r.blogName) console.log(`   blog: ${r.blogName}${r.postUrl ? ` ${r.postUrl}` : ""}`);
    if (r.note) console.log(`   NOTE: ${r.note.replace(/\n/g, "\n     ")}`);
  }

  // A stored row for a key no longer in the index: the follow-up was finished and deleted, as intended.
  const orphans = rows.filter((r) => !getFollowUp(r.followupKey));
  if (orphans.length) console.log(`\n(${orphans.length} stored row(s) for follow-ups no longer in the index: ${orphans.map((o) => o.followupKey).join(", ")})`);
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
