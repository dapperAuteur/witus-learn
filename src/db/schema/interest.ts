import { check, index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { users } from "./auth";
import { courses } from "./courses";
import { tenants } from "./tenancy";

/**
 * Self-nominated interest in ONE course: "I want to take this", "I will test it", "I can vet it".
 *
 * This is the SELF-SERVICE side of the invite-to-audit grant in ./auditors.ts, and the whole design
 * hangs off one sentence in that file's header: an audit grant lets someone read an UNVETTED
 * course. If anyone on the internet could type "I am an expert" and be handed one, the grant would
 * be worthless. So a row here is a REQUEST, never access:
 *
 *   status = 'pending'    the default, and it grants NOTHING. No read access, no enrollment.
 *   status = 'approved'   a human (the owner, the course's instructor, or a tenant admin) decided.
 *                         For 'beta' and 'expert' that decision, and only that decision, mints the
 *                         EXISTING course_auditors grant through the EXISTING invite code path.
 *                         There is no second grant mechanism, so there is one place to audit.
 *   status = 'declined'   also grants nothing, and is not reopened by re-submitting the form.
 *
 * Approval never enrolls anybody, for the reason ./auditors.ts gives: an enrollment writes
 * progress, earns a certificate and lands in every course statistic, so a tester's quiz attempts
 * would corrupt exactly the numbers the quiz-integrity rule protects. A beta tester approved here
 * gets the same read-only auditor grant a reviewer gets. Making someone a real learner stays a
 * separate, deliberate act through the enrollment path.
 *
 * WHY ITS OWN TABLE rather than another `leads.inquiries` entry (src/lib/lead-interest.ts is the
 * existing interest capture, and it was the first thing considered):
 *   1. `leads.inquiries` is an append-only jsonb log. This needs a per-request STATUS that a human
 *      flips later, which a jsonb array element cannot carry without rewriting the array.
 *   2. PII CONTAINMENT. `leads` is the marketing funnel: it feeds the /admin/leads CSV export and
 *      the 'leads' audience of email campaigns. A volunteered phone number and a paragraph of
 *      credentials must not be one forgotten column away from a bulk mailing. Keeping them in a
 *      table nothing marketing-shaped reads is a structural boundary, not a convention.
 * The email itself still reaches the funnel for the two learner-shaped capacities, through the
 * existing addCourseNotifySignup, so the demand board keeps counting people the way it does today.
 *
 * PII: `phone`, `phone_raw` and `credentials` are volunteered by someone who may have no account.
 * They are
 * readable ONLY by the course owner / its instructor / a tenant admin, through
 * ScopedDb.listCourseInterest, and are serialized in exactly one place (serializeForOwner in
 * src/lib/course-interest.ts). No public page, no learner-reachable API, no OG card, no sitemap,
 * no email, no ecosystem webhook carries them.
 *
 * Tenant-scoped like everything else: every read filters `tenant_id`, and the unique key
 * (tenant_id, course_id, email) means a second submission updates the same row instead of minting a
 * duplicate, which is also what makes a double-tap on a phone harmless.
 */
export const courseInterestRequests = pgTable(
  "course_interest_requests",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    /** learner | beta | expert. See CAPACITIES in src/lib/course-interest.ts. */
    capacity: text("capacity").notNull(),
    /** pending | approved | declined. Never anything else, and never set from a request body. */
    status: text("status").notNull().default("pending"),
    name: text("name").notNull(),
    /** Lowercased in app code so the unique key is genuinely one address. */
    email: text("email").notNull(),
    /**
     * OPTIONAL, owner-visible only. INTERNATIONAL, stored E.164-style as TEXT: a leading "+" and
     * digits, e.g. "+442071234567". Text and not a numeric type on purpose, because the "+" and
     * the leading zeros some national formats carry are meaningful and a number column destroys
     * both. Normalized loosely (src/lib/course-interest.ts -> normalizePhone): the classic failure
     * in this field is a strict pattern that silently refuses a real person's real number, so when
     * in doubt it is accepted, and `phone_raw` keeps whatever they actually typed.
     */
    phone: text("phone"),
    /** Exactly as typed, so the owner can see the original if normalization ever mangles it. */
    phoneRaw: text("phone_raw"),
    /** OPTIONAL, owner-visible only. What they say qualifies them to test or vet the course. */
    credentials: text("credentials"),
    /** Set when the person was signed in. Null for a signed-out visitor, which is allowed. */
    userId: text("user_id").references(() => users.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    /** NULL while pending. Stamped by the approve/decline decision. */
    decidedAt: timestamp("decided_at", { withTimezone: true }),
    decidedBy: text("decided_by").references(() => users.id, { onDelete: "set null" }),
  },
  (t) => [
    unique("course_interest_tenant_course_email_uq").on(t.tenantId, t.courseId, t.email),
    index("course_interest_tenant_course_idx").on(t.tenantId, t.courseId),
    check("course_interest_capacity_chk", sql`${t.capacity} in ('learner','beta','expert')`),
    check("course_interest_status_chk", sql`${t.status} in ('pending','approved','declined')`),
  ],
);

export type CourseInterestRequest = typeof courseInterestRequests.$inferSelect;
