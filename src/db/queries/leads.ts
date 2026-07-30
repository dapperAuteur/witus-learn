import "server-only";
import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { leads, type Lead, type LeadInquiry } from "@/db/schema/learning";

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

/** Marker for a "tell me when this course opens" signup inside `leads.inquiries`. */
export const COURSE_NOTIFY_SOURCE = "course-notify";

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

export async function listLeads(tenantId: string): Promise<Lead[]> {
  return db.select().from(leads).where(eq(leads.tenantId, tenantId)).orderBy(desc(leads.createdAt)).limit(500);
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
