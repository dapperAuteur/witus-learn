import { sql } from "drizzle-orm";
import { check, index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { courses } from "./courses";
import { tenants } from "./tenancy";

/**
 * Invite-to-audit (plans/52 §5): a per-course, READ-ONLY grant that lets someone the owner trusts
 * read an UNVETTED course before it opens to learners, without enrolling in it.
 *
 * Why a grant and not an enrollment: an enrollment is a learner record. It writes progress, earns a
 * certificate, and lands in every course statistic and dashboard average. A reviewer is not a
 * learner, and counting their quiz attempts would corrupt exactly the numbers the quiz-integrity
 * rule exists to protect. So auditors get their own table and are refused every write path
 * (src/lib/auditors.ts -> isReadOnlyAuditor, enforced in the progress/quiz/recall/submission/
 * enroll/complete routes).
 *
 * Tenant-scoped like everything else: a grant carries `tenant_id`, every read filters it, and the
 * identity match is one pure function (src/lib/auditors.ts) so the isolation suite can prove a
 * grant in tenant A can never open a course in tenant B.
 *
 * `token` follows the cohort_invites precedent (16-byte hex minted in app code): the accept link is
 * a bearer credential, so it must NOT be the row's primary key, which travels through server logs
 * on the revoke URL. The unique key is (tenant_id, course_id, email), so re-inviting the same
 * address updates the existing row rather than minting a second one.
 */
export const courseAuditors = pgTable(
  "course_auditors",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    /** Lowercased in app code so the unique key is genuinely one address. */
    email: text("email").notNull(),
    /** Set when the invitee accepts while signed in. Null until then. */
    userId: text("user_id").references(() => users.id, { onDelete: "set null" }),
    token: text("token").notNull().unique(),
    invitedAt: timestamp("invited_at", { withTimezone: true }).notNull().defaultNow(),
    /** NULL = invited but not accepted. A pending invite grants NOTHING. */
    acceptedAt: timestamp("accepted_at", { withTimezone: true }),
    invitedBy: text("invited_by")
      .notNull()
      .references(() => users.id),
    /**
     * Reviewer sign-off (plans/93 section 1): how this reviewer is credited on a lesson they clear,
     * e.g. "Ada Okafor" / "Large-animal veterinarian, Indiana". Set by the INVITER (the owner, the
     * course's instructor or a tenant admin), never by the reviewer, so the credential shown to
     * learners is not only self-reported. Both must be set before a verdict can be recorded; each
     * verdict copies them (lesson_reviews), so a later edit here does not rewrite an old badge.
     */
    reviewerName: text("reviewer_name"),
    reviewerCredential: text("reviewer_credential"),
    /**
     * Reviewer sign-off v2 (plans/97 Q2): an optional link to evidence for the credential (a license
     * lookup, a professional profile). Set by the platform owner or the school's admin, shown to them
     * on the sign-off panel, NEVER on a public lesson and never copied into lesson_reviews. https
     * only, at most 500 characters (validated in the route and by the CHECK below).
     */
    credentialEvidenceUrl: text("credential_evidence_url"),
    /**
     * Which tagged need this reviewer clears (migration 0075): '' clears the course's untagged needs,
     * as every grant did before; `native-reviewer` clears ONLY needs tagged `[native-reviewer]`. Set
     * by the inviter beside the credit, so a reviewer cannot pick which need they speak for.
     */
    reviewerKey: text("reviewer_key").notNull().default(""),
  },
  (t) => [
    check(
      "course_auditors_evidence_url_chk",
      sql`${t.credentialEvidenceUrl} is null or (${t.credentialEvidenceUrl} like 'https://%' and char_length(${t.credentialEvidenceUrl}) <= 500)`,
    ),
    check(
      "course_auditors_reviewer_key_chk",
      sql`${t.reviewerKey} = '' or (${t.reviewerKey} ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(${t.reviewerKey}) <= 40)`,
    ),
    unique("course_auditors_tenant_course_email_uq").on(t.tenantId, t.courseId, t.email),
    index("course_auditors_tenant_course_idx").on(t.tenantId, t.courseId),
    index("course_auditors_token_idx").on(t.token),
  ],
);

export type CourseAuditor = typeof courseAuditors.$inferSelect;
