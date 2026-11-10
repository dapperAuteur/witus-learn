import type { Metadata } from "next";
import Link from "next/link";
import { getScopedDb } from "@/db/scoped";
import { getSession, isPlatformOwner, requireBrandAdmin } from "@/lib/session";
import { listPendingSchoolGrants, listSchoolMembers } from "@/db/queries/school-members";
import { listAssignableTeachers } from "@/db/queries/course-instructor";
import { listAllTenantCourses } from "@/db/queries/authoring";
import { listCourseRequests } from "@/db/queries/course-requests";
import { ownerOnlyBlocks } from "@/lib/course-visibility";
import { personLabel } from "@/lib/course-instructor";
import { REQUEST_STATUS_LABELS } from "@/lib/course-requests";
import type { CourseRequestStatus, TenantRole } from "@/db/schema";
import { AssignCourseTeacher, CourseRequestDecision, type CourseOption, type TeacherOption } from "@/components/school-users-admin";

export const metadata: Metadata = { title: "Users" };

const ROLE_LABELS: Record<TenantRole, string> = { learner: "Learner", instructor: "Teacher", brand_admin: "Admin" };

function fmtDate(d: Date | null): string {
  if (!d) return "never";
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

// Brand admin (and platform owner): everyone with a role on THIS school, searchable, with the two
// things a school runs on top of that list: handing a course to a teacher, and deciding teachers'
// course requests (BAM, 2026-11-10). Tenant-scoped through getScopedDb and tenant_memberships; a
// member list, a course list and a request list are each keyed on this tenant alone.
export default async function SchoolUsersPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const session = await getSession();
  const owner = session ? await isPlatformOwner(session.user.id) : false;

  const [members, pending, teachers, allCourses, requests] = await Promise.all([
    listSchoolMembers(sdb.tenantId, q),
    listPendingSchoolGrants(sdb.tenantId),
    listAssignableTeachers(sdb.tenantId),
    listAllTenantCourses(sdb.tenantId),
    listCourseRequests(sdb.tenantId),
  ]);
  // An OWNER-ONLY course is left off a brand_admin's picker, as it is off their /teach list.
  const courses: CourseOption[] = allCourses
    .filter((c) => !ownerOnlyBlocks({ isOwner: owner, isInstructor: c.instructorId === session?.user.id }, c))
    .map((c) => ({
      id: c.id,
      title: c.title,
      slug: c.slug,
      instructorId: c.instructorId,
      instructorLabel: c.instructorDisplayName || (c.instructorUsername ? `@${c.instructorUsername}` : "unassigned"),
    }));
  const teacherOptions: TeacherOption[] = teachers.map((t) => ({
    userId: t.userId,
    role: t.role === "brand_admin" ? "brand_admin" : "instructor",
    username: t.username,
    displayName: t.displayName,
    name: t.name,
    email: t.email,
  }));
  const open = requests.filter((r) => r.status === "requested");
  const decided = requests.filter((r) => r.status !== "requested");
  const counts = members.reduce<Record<TenantRole, number>>(
    (acc, m) => ({ ...acc, [m.role]: acc[m.role] + 1 }),
    { learner: 0, instructor: 0, brand_admin: 0 },
  );

  return (
    <main className="max-w-3xl py-10">
      <Link href="/admin" className="text-sm underline" style={{ color: "var(--accent)" }}>
        ← Admin
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Users</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Everyone with a role at {sdb.tenant.name}: {counts.brand_admin} admin{counts.brand_admin === 1 ? "" : "s"},{" "}
        {counts.instructor} teacher{counts.instructor === 1 ? "" : "s"}, {counts.learner} learner{counts.learner === 1 ? "" : "s"}
        {q ? ` matching "${q}"` : ""}. To make someone a teacher, use{" "}
        <Link href="/admin/teachers" className="underline" style={{ color: "var(--accent)" }}>
          Teachers
        </Link>
        .
      </p>

      <form method="get" action="/admin/users" role="search" className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end">
        <label className="flex-1 text-sm">
          Search by name, username or email
          <input
            type="search"
            name="q"
            defaultValue={q ?? ""}
            className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
          />
        </label>
        <button type="submit" className="min-h-11 rounded-md px-4 text-sm font-medium text-white" style={{ backgroundColor: "var(--accent)" }}>
          Search
        </button>
        {q ? (
          <Link href="/admin/users" className="inline-flex min-h-11 items-center text-sm underline" style={{ color: "var(--accent)" }}>
            Clear
          </Link>
        ) : null}
      </form>

      <section aria-labelledby="members-h" className="mt-6">
        <h2 id="members-h" className="font-semibold">
          Members ({members.length})
        </h2>
        <ul className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">
          {members.map((m) => (
            <li key={m.userId} className="py-3 text-sm">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <p className="break-words font-medium">{m.displayName?.trim() || m.name?.trim() || m.email}</p>
                <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-700 dark:text-neutral-300">
                  {ROLE_LABELS[m.role]}
                </span>
              </div>
              <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-xs text-neutral-600 dark:text-neutral-400">
                <dt>Email</dt>
                <dd className="break-all">{m.email}</dd>
                <dt>Username</dt>
                <dd className="break-all">{m.username ? `@${m.username}` : "none yet"}</dd>
                <dt>Joined</dt>
                <dd>{fmtDate(m.joinedAt)}</dd>
                <dt>Last sign-in</dt>
                <dd>{fmtDate(m.lastSignInAt)}</dd>
              </dl>
            </li>
          ))}
          {members.length === 0 ? (
            <li className="py-3 text-sm text-neutral-600 dark:text-neutral-400">{q ? "Nobody matches that search." : "Nobody has a role here yet."}</li>
          ) : null}
        </ul>
      </section>

      {pending.length > 0 ? (
        <section aria-labelledby="pending-h" className="mt-6">
          <h2 id="pending-h" className="font-semibold">
            Waiting for a first sign-in ({pending.length})
          </h2>
          <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
            Roles granted to an address that has no account yet. The role lands the moment that address signs in.
          </p>
          <ul className="mt-2 divide-y divide-neutral-200 text-sm dark:divide-neutral-800">
            {pending.map((p) => (
              <li key={p.email} className="flex flex-wrap items-center justify-between gap-2 py-2">
                <span className="break-all">{p.email}</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400">
                  {ROLE_LABELS[p.role]}, granted {fmtDate(p.createdAt)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section aria-labelledby="assign-h" className="mt-8 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 id="assign-h" className="font-semibold">
          Assign a teacher to a course
        </h2>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
          Any teacher or admin of this school can teach any of its courses. The same control sits in each course&apos;s settings on Teach.
        </p>
        <AssignCourseTeacher teachers={teacherOptions} courses={courses} />
      </section>

      <section id="course-requests" aria-labelledby="requests-h" className="mt-8">
        <h2 id="requests-h" className="font-semibold">
          Course requests ({open.length} waiting)
        </h2>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
          Teachers ask for a course from Teach. Approving creates a private, unpublished draft with that teacher as its instructor;
          declining sends them your note.
        </p>
        <ul className="mt-2 space-y-3">
          {open.map((r) => (
            <li key={r.id} className="rounded-lg border border-neutral-200 p-4 text-sm dark:border-neutral-800">
              <p className="font-medium">{r.title}</p>
              <p className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-400">
                Asked by {personLabel({ displayName: r.requesterName, username: r.requesterUsername, email: r.requesterEmail })} on {fmtDate(r.createdAt)}
              </p>
              <p className="mt-2 whitespace-pre-wrap">{r.description}</p>
              <p className="mt-2 whitespace-pre-wrap">
                <span className="font-medium">Why: </span>
                {r.reason}
              </p>
              {r.briefUrl ? (
                <p className="mt-2 break-all">
                  <a href={r.briefUrl} rel="noopener noreferrer" target="_blank" className="underline" style={{ color: "var(--accent)" }}>
                    Brief
                  </a>
                </p>
              ) : null}
              <CourseRequestDecision requestId={r.id} title={r.title} />
            </li>
          ))}
          {open.length === 0 ? <li className="text-sm text-neutral-600 dark:text-neutral-400">No requests waiting.</li> : null}
        </ul>
        {decided.length > 0 ? (
          <details className="mt-4 text-sm">
            <summary className="cursor-pointer min-h-11 inline-flex items-center">Decided requests ({decided.length})</summary>
            <ul className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">
              {decided.map((r) => (
                <li key={r.id} className="py-2">
                  <p className="font-medium">
                    {r.title} <span className="font-normal text-neutral-600 dark:text-neutral-400">({REQUEST_STATUS_LABELS[r.status as CourseRequestStatus]})</span>
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {personLabel({ displayName: r.requesterName, username: r.requesterUsername, email: r.requesterEmail })}, decided {fmtDate(r.decidedAt)}
                    {r.courseId ? (
                      <>
                        {" · "}
                        <Link href={`/teach/${r.courseSlug ?? r.courseId}`} className="underline" style={{ color: "var(--accent)" }}>
                          Open the course
                        </Link>
                      </>
                    ) : null}
                  </p>
                  {r.decisionNote ? <p className="mt-1 whitespace-pre-wrap text-xs">{r.decisionNote}</p> : null}
                </li>
              ))}
            </ul>
          </details>
        ) : null}
      </section>
    </main>
  );
}
