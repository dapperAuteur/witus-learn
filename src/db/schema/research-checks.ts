import { sql } from "drizzle-orm";
import { check, index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { tenants } from "./tenancy";
import { users } from "./auth";

// Source-verification checks: the facts in a course that Claude could not confirm against a PRIMARY
// source, surfaced at /admin/research so BAM can answer them or mark them verified.
//
// WHY THIS EXISTS. Courses in this catalog cite their claims, and some claims can only be pinned by
// someone with access Claude does not have: a paywalled statute, a phone call to a county clerk, a
// regulator who answers email. Those used to live as prose caveats inside a lesson ("verify before
// relying on this"), which is honest and completely unactionable: nobody has a list, nothing tracks
// whether it was ever done, and the caveat ships to learners forever.
//
// The CHECK DEFINITIONS are committed code (src/lib/research-checks.ts), like the roadmap and the
// future-work index. This table holds only BAM's ANSWER and STATUS, which is the part that is data.
// Same split, and for the same reason: the editorial content stays reviewable in a diff.
//
// One row per (tenant, check). Upserted, so re-answering updates rather than appending; the history
// that matters is the answer as it stands, not a thread.
export const courseResearchChecks = pgTable(
  "course_research_checks",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    /** ResearchCheck.key from src/lib/research-checks.ts. Never renumber these. */
    checkKey: text("check_key").notNull(),
    /** open = nobody has looked. verified = confirmed against a primary source. corrected = the
     *  course was WRONG and the answer says what it should say. blocked = tried, could not get it. */
    status: text("status").notNull().default("open"),
    /** What BAM found: the citation, the quote, what the clerk said, or why it could not be settled. */
    answer: text("answer"),
    answeredBy: text("answered_by").references(() => users.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("course_research_checks_tenant_key_uq").on(t.tenantId, t.checkKey),
    index("course_research_checks_tenant_status_idx").on(t.tenantId, t.status),
    check(
      "course_research_checks_status_chk",
      sql`${t.status} in ('open','verified','corrected','blocked')`,
    ),
  ],
);

export type CourseResearchCheck = typeof courseResearchChecks.$inferSelect;
