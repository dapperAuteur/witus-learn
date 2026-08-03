import { sql } from "drizzle-orm";
import { check, index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { tenants } from "./tenancy";
import { users } from "./auth";

// Verification status for one citation in one tenant's copy of a course. LIST A of the two-list
// verification system; LIST B is `course_research_checks`.
//
// The citations themselves are COMMITTED content (src/lib/citations.ts, generated from the database
// by `pnpm gen:citations`). Only status and note live here, which is the same split as the roadmap,
// the future-work board and the source checks.
//
// WHO WRITES HERE. The platform owner, and an accepted `course_auditors` grant holder for the course
// the citation belongs to. That grant already means "this person may read this unvetted course"; it
// now also means "and may verify its citations, and only its citations." Reusing it avoids inventing
// a second invitation system, and keeps the per-course, tenant-scoped, read-only shape intact: an
// auditor of course A still cannot touch course B, in this table or anywhere else.
export const courseCitationChecks = pgTable(
  "course_citation_checks",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    /** Citation.key from src/lib/citations.ts: `<courseSlug>:<hash of the entry text>`. */
    citationKey: text("citation_key").notNull(),
    /** Denormalized so a checker's work can be filtered and revoked per course without parsing the
     *  key, and so an auditor grant can be enforced with a plain equality check. */
    courseSlug: text("course_slug").notNull(),
    /** unverified | verified | broken | mismatch. `mismatch` is the important one: the source exists
     *  and does not support the claim, which is the failure a dead-link checker never catches. */
    status: text("status").notNull().default("unverified"),
    /** What the checker found. Required for anything other than `unverified`. */
    note: text("note"),
    checkedBy: text("checked_by").references(() => users.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("course_citation_checks_tenant_key_uq").on(t.tenantId, t.citationKey),
    index("course_citation_checks_tenant_course_idx").on(t.tenantId, t.courseSlug),
    check(
      "course_citation_checks_status_chk",
      sql`${t.status} in ('unverified','verified','broken','mismatch')`,
    ),
  ],
);

export type CourseCitationCheck = typeof courseCitationChecks.$inferSelect;
