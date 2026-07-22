import type { Metadata } from "next";
import { requireUser } from "@/lib/session";
import { getScopedDb } from "@/db/scoped";
import { isGuardianOf, listAttendanceForChild, listChildren, listManagedChildren } from "@/db/queries/family";
import { getLearnerDashboard, getLearnerStats } from "@/db/queries/dashboard";
import { ManageChildren } from "@/components/manage-children";

export const metadata: Metadata = { title: "Family" };

interface ChildView {
  userId: string;
  displayName: string;
  coursePercent: { title: string; percent: number }[];
  recallAccuracy: number;
  quizAvg: number;
  credentials: { courseTitle: string; completedAt: Date }[];
  attendance: { cohortName: string; days: string[] }[];
}

// Parent Family view, hybrid model: read-only progress/grades/credentials/attendance for
// EVERY linked child (Model A — the child has their own account — AND Model B — a
// login-less managed profile the parent created; both flow through the same `guardians`
// link, so they render identically here) PLUS, at the top, the Model-B-only "Manage
// children" panel to add a new managed profile or switch into "studying as" one. THE
// invariant: every per-child data call below is preceded by isGuardianOf — a guardian
// linked to child X can never render child Y's data, even if listChildren (already
// filtered to this guardian) were ever refactored to be looser.
export default async function FamilyPage() {
  const sdb = await getScopedDb();
  const session = await requireUser();

  const [children, managedChildren] = await Promise.all([
    listChildren(sdb.tenantId, session.user.id),
    listManagedChildren(sdb.tenantId, session.user.id),
  ]);

  const views: ChildView[] = [];
  for (const child of children) {
    // Explicit gate — do not remove even though listChildren is already guardian-scoped.
    const allowed = await isGuardianOf(sdb.tenantId, session.user.id, child.userId);
    if (!allowed) continue;

    const [dashboard, stats, attendance] = await Promise.all([
      getLearnerDashboard(sdb.tenantId, child.userId),
      getLearnerStats(sdb.tenantId, child.userId),
      listAttendanceForChild(sdb.tenantId, child.userId),
    ]);

    views.push({
      userId: child.userId,
      displayName: child.displayName,
      coursePercent: dashboard.courses.map((c) => ({ title: c.course.title, percent: c.percent })),
      recallAccuracy: stats.recallAccuracy,
      quizAvg: stats.quizAvg,
      credentials: stats.credentials.map((c) => ({ courseTitle: c.courseTitle, completedAt: c.completedAt })),
      attendance: attendance.map((a) => ({ cohortName: a.cohortName, days: a.days })),
    });
  }

  return (
    <main className="max-w-2xl py-10">
      <h1 className="text-2xl font-bold">Family</h1>
      <p className="mt-1 text-sm text-neutral-500">
        A read-only view of your linked children&apos;s progress, grades, credentials, and live-class
        attendance.
      </p>

      <div className="mt-6">
        <ManageChildren initialChildren={managedChildren} />
      </div>

      {views.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-500">
          No children yet. Add one above if they&apos;re too young for email, or ask your teacher to
          send a parent invite from their cohort roster if they already have their own account.
        </p>
      ) : (
        <div className="mt-8 space-y-10">
          {views.map((child) => (
            <section key={child.userId} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
              <h2 className="text-lg font-semibold">{child.displayName}</h2>

              <div className="mt-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Course progress</h3>
                {child.coursePercent.length === 0 ? (
                  <p className="mt-1 text-sm text-neutral-500">Not enrolled in any courses yet.</p>
                ) : (
                  <ul className="mt-2 space-y-1 text-sm">
                    {child.coursePercent.map((c) => (
                      <li key={c.title} className="flex items-center justify-between gap-3">
                        <span>{c.title}</span>
                        <span className="text-neutral-500">{c.percent}%</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Grades</h3>
                <p className="mt-1 text-sm">
                  Recall accuracy: {child.recallAccuracy}% · Quiz average: {child.quizAvg}%
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Credentials</h3>
                {child.credentials.length === 0 ? (
                  <p className="mt-1 text-sm text-neutral-500">No completed courses yet.</p>
                ) : (
                  <ul className="mt-2 space-y-1 text-sm">
                    {child.credentials.map((c) => (
                      <li key={c.courseTitle}>
                        {c.courseTitle}, {new Date(c.completedAt).toLocaleDateString()}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Live-class attendance</h3>
                {child.attendance.length === 0 ? (
                  <p className="mt-1 text-sm text-neutral-500">No live-class attendance recorded yet.</p>
                ) : (
                  <ul className="mt-2 space-y-1 text-sm">
                    {child.attendance.map((a) => (
                      <li key={a.cohortName}>
                        {a.cohortName}: {a.days.length} {a.days.length === 1 ? "day" : "days"} present
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
