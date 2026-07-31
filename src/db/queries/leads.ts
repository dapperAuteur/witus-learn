import "server-only";
import { and, asc, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { leads, type Lead, type LeadInquiry } from "@/db/schema/learning";
import { courses } from "@/db/schema/courses";
import { listBundleMemberships } from "@/db/queries/bundles";
import { COURSE_NOTIFY_SOURCE, type InterestCourse } from "@/lib/lead-interest";

/** Capture a lead (idempotent per tenant+email). */
export async function addLead(input: {
  tenantId: string;
  email: string;
  name?: string | null;
  source?: string | null;
}): Promise<void> {
  await db
    .insert(leads)
    .values({
      tenantId: input.tenantId,
      email: input.email.trim().toLowerCase(),
      name: input.name ?? null,
      source: input.source ?? null,
    })
    .onConflictDoNothing();
}

/**
 * Capture a lead who actually ASKED something (the /explore pricing form).
 *
 * Unlike addLead, this must never no-op: leads is unique on (tenant, email), so a prospect who
 * already hit "notify me" would have their pricing enquiry thrown away by ON CONFLICT DO NOTHING.
 * A lost enquiry is a lost sale, so on conflict we APPEND the enquiry to the existing row's
 * jsonb array (`inquiries || excluded.inquiries`) and promote the row's `source` to the newest
 * intent — a pricing question is more actionable than the newsletter signup it supersedes. The
 * name is only overwritten when the new submission actually supplies one.
 */
export async function addLeadInquiry(input: {
  tenantId: string;
  email: string;
  name?: string | null;
  source: string;
  inquiry: LeadInquiry;
}): Promise<void> {
  await db
    .insert(leads)
    .values({
      tenantId: input.tenantId,
      email: input.email.trim().toLowerCase(),
      name: input.name?.trim() || null,
      source: input.source,
      inquiries: [input.inquiry],
    })
    .onConflictDoUpdate({
      target: [leads.tenantId, leads.email],
      set: {
        name: sql`coalesce(excluded.name, ${leads.name})`,
        source: sql`excluded.source`,
        inquiries: sql`coalesce(${leads.inquiries}, '[]'::jsonb) || excluded.inquiries`,
      },
    });
}

// The marker itself lives in the pure module (src/lib/lead-interest.ts) so the admin dashboard can
// read it without importing a server-only file. Re-exported here because every existing caller
// imports it from the queries module.
export { COURSE_NOTIFY_SOURCE };

/**
 * "Get notified when this course opens" from an unvetted course's public landing page.
 *
 * NO new table: `leads` is already the school's one email funnel (unique per tenant+email) and
 * `leads.inquiries` is already the append-only log of what a lead asked for, so a course signup is
 * one more entry in it. That keeps every address BAM has in one place (/admin/leads) instead of
 * splitting the funnel across two tables, and needs no migration.
 *
 * Idempotent twice over: ON CONFLICT on (tenant, email) means no duplicate ROW, and the jsonb
 * containment guard means re-submitting for the SAME course doesn't append a duplicate entry
 * either (a double-tap on a phone must not look like two people waiting). Signing up for a
 * DIFFERENT course does append, which is the point.
 *
 * `source` on the row itself is only promoted to the newest intent when there is nothing there
 * yet: an existing pricing enquiry is a stronger signal than a newsletter-style signup and must
 * not be overwritten by it.
 */
export async function addCourseNotifySignup(input: {
  tenantId: string;
  courseId: string;
  courseTitle: string;
  email: string;
}): Promise<void> {
  const inquiry: LeadInquiry = {
    source: COURSE_NOTIFY_SOURCE,
    courseId: input.courseId,
    courseTitle: input.courseTitle,
    at: new Date().toISOString(),
  };
  // Partial matcher (no `at`): jsonb `@>` on an array asks "is some element a superset of this
  // object", which is exactly "has this person already asked about this course".
  const already = JSON.stringify([{ source: COURSE_NOTIFY_SOURCE, courseId: input.courseId }]);
  await db
    .insert(leads)
    .values({
      tenantId: input.tenantId,
      email: input.email.trim().toLowerCase(),
      source: COURSE_NOTIFY_SOURCE,
      inquiries: [inquiry],
    })
    .onConflictDoUpdate({
      target: [leads.tenantId, leads.email],
      set: {
        source: sql`coalesce(${leads.source}, excluded.source)`,
        inquiries: sql`case when coalesce(${leads.inquiries}, '[]'::jsonb) @> ${already}::jsonb
          then ${leads.inquiries}
          else coalesce(${leads.inquiries}, '[]'::jsonb) || excluded.inquiries end`,
      },
    });
}

/** How many people are waiting to hear that THIS course opened. Tenant-scoped. */
export async function countCourseNotifySignups(tenantId: string, courseId: string): Promise<number> {
  const matcher = JSON.stringify([{ source: COURSE_NOTIFY_SOURCE, courseId }]);
  const [row] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(leads)
    .where(
      and(eq(leads.tenantId, tenantId), sql`coalesce(${leads.inquiries}, '[]'::jsonb) @> ${matcher}::jsonb`),
    );
  return row?.count ?? 0;
}

/**
 * Every lead for one tenant, newest first.
 *
 * The LIMIT is a real ceiling, not a formality: the interest dashboard filters `inquiries` in JS
 * (see the scale note at the top of src/lib/lead-interest.ts), so a school that outgrows this
 * needs the jsonb index or the normalized table described there, NOT a bigger number here. The
 * page says out loud when the ceiling was hit rather than quietly showing a truncated list.
 */
export const LEADS_PAGE_LIMIT = 1000;

export async function listLeads(tenantId: string, limit = 500): Promise<Lead[]> {
  return db
    .select()
    .from(leads)
    .where(eq(leads.tenantId, tenantId))
    .orderBy(desc(leads.createdAt))
    .limit(limit);
}

/**
 * The tenant's courses, reduced to what the interest dashboard needs to resolve the course and
 * track filters. Tenant-scoped: this is the only set a filter can ever resolve against, so a
 * client-supplied course id from another school matches nothing.
 */
export async function listInterestCourses(tenantId: string): Promise<InterestCourse[]> {
  return db
    .select({
      id: courses.id,
      title: courses.title,
      seriesSlug: courses.seriesSlug,
      seriesTitle: courses.seriesTitle,
    })
    .from(courses)
    .where(eq(courses.tenantId, tenantId))
    .orderBy(asc(courses.title));
}

/**
 * Everything the interest dashboard reasons about, for ONE tenant, in one place.
 *
 * The page and the CSV export both call this, so they can never drift into filtering different
 * data. `truncated` is true when the lead list hit its ceiling; the page says so rather than
 * pretending the list is complete.
 */
export async function loadTenantInterest(tenantId: string): Promise<{
  leads: Lead[];
  courses: InterestCourse[];
  bundles: { slug: string; title: string; courseIds: string[] }[];
  truncated: boolean;
}> {
  const [rows, courseList, bundleList] = await Promise.all([
    listLeads(tenantId, LEADS_PAGE_LIMIT),
    listInterestCourses(tenantId),
    listBundleMemberships(tenantId),
  ]);
  return {
    leads: rows,
    courses: courseList,
    bundles: bundleList,
    truncated: rows.length >= LEADS_PAGE_LIMIT,
  };
}

/** Total captured leads for a tenant — the operator-overview headline number. */
export async function countLeads(tenantId: string): Promise<number> {
  const [row] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(leads)
    .where(eq(leads.tenantId, tenantId));
  return row?.count ?? 0;
}

/** Most recent N leads for a tenant (operator-overview card; full list lives at /admin/leads). */
export async function listRecentLeads(tenantId: string, limit = 5): Promise<Lead[]> {
  return db.select().from(leads).where(eq(leads.tenantId, tenantId)).orderBy(desc(leads.createdAt)).limit(limit);
}
