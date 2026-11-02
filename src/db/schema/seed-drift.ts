import { sql } from "drizzle-orm";
import { check, index, jsonb, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { courses, lessons } from "./courses";
import { tenants } from "./tenancy";

/**
 * Seed drift (plans/97 Q5, BAM 2026-11-01: "skip and report, plus edit warnings").
 *
 * A course file in scripts/data and the lesson in the database can disagree for two reasons: the
 * file changed (the seeder should write it) or someone edited the lesson in the app (the seeder must
 * not overwrite it). `lessons.seed_hash` tells them apart. When the row no longer matches what the
 * seeder last wrote, the seeder skips the lesson's content and upserts ONE row here per lesson,
 * holding the file's version so the author can take it later without the course files on the server.
 *
 * The lesson's instructor and the platform owner see each open row as a warning on /teach (every
 * visit) and on /admin until they acknowledge it: "keep the app edit" (resolution kept_app, which
 * keeps the warning quiet until the FILE changes again, i.e. until file_hash differs) or "take the
 * file version" (the app writes file_content into the lesson and sets seed_hash, then the row goes).
 *
 * Not a message: no recipient, no reply, no thread (CLAUDE.md no-inbox rule). It is a fact about one
 * lesson's content, shown where the lesson is edited.
 */
export const lessonSeedDrifts = pgTable(
  "lesson_seed_drifts",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    lessonId: uuid("lesson_id")
      .notNull()
      .references(() => lessons.id, { onDelete: "cascade" }),
    /** Content hash of the course file's version of the lesson when the seeder last saw it. */
    fileHash: text("file_hash").notNull(),
    /** Content hash of the app's version when the seeder last saw it. */
    appHash: text("app_hash").notNull(),
    /** The file's version of the content fields (src/lib/seed-drift.ts SeedContent). */
    fileContent: jsonb("file_content").notNull(),
    detectedAt: timestamp("detected_at", { withTimezone: true }).notNull().defaultNow(),
    lastSeenAt: timestamp("last_seen_at", { withTimezone: true }).notNull().defaultNow(),
    /** null = open (warn); kept_app = acknowledged, quiet until file_hash changes. */
    resolution: text("resolution"),
    resolvedAt: timestamp("resolved_at", { withTimezone: true }),
    resolvedBy: text("resolved_by").references(() => users.id, { onDelete: "set null" }),
  },
  (t) => [
    unique("lesson_seed_drifts_lesson_uq").on(t.lessonId),
    index("lesson_seed_drifts_tenant_course_idx").on(t.tenantId, t.courseId),
    check("lesson_seed_drifts_resolution_chk", sql`${t.resolution} is null or ${t.resolution} in ('kept_app')`),
  ],
);

export type LessonSeedDrift = typeof lessonSeedDrifts.$inferSelect;
