import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { listSchoolTeachers } from "@/db/queries/school-teachers";
import { teachersMustBeAdults } from "@/db/queries/teacher-age";
import { SCHOOL_TEACHER_STATUS_LABELS } from "@/lib/school-teachers";
import { AddSchoolTeacher, RemoveSchoolTeacher } from "@/components/school-teachers-admin";

export const metadata: Metadata = { title: "Teachers" };

// Brand admin (and platform owner): who teaches at THIS school, and make someone a teacher
// (decided 2026-09-20). Tenant-scoped through getScopedDb; granting here never touches another
// school. A teacher can create classes (still behind the adult rule) and write courses here.
export default async function SchoolTeachersPage() {
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const [rows, ruleOn] = await Promise.all([listSchoolTeachers(sdb.tenantId), teachersMustBeAdults()]);

  return (
    <main className="max-w-3xl py-10">
      <h1 className="text-2xl font-bold">Teachers</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Teachers of {sdb.tenant.name} can create classes and write courses here.
        {ruleOn ? " Teachers must be adults: a person has to confirm they are 18 or older before you can add them." : ""}{" "}
        To let someone run just one class instead, add them as that class&apos;s teacher from the class page.
      </p>

      <section aria-labelledby="add-teacher-h" className="mt-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 id="add-teacher-h" className="font-semibold">
          Make someone a teacher
        </h2>
        <AddSchoolTeacher />
      </section>

      <section aria-labelledby="teachers-h" className="mt-6">
        <h2 id="teachers-h" className="font-semibold">
          Teachers and admins ({rows.length})
        </h2>
        <ul className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">
          {rows.map((r) => (
            <li key={r.userId} className="flex flex-wrap items-start justify-between gap-3 py-3 text-sm">
              <div className="min-w-0">
                <p className="break-words font-medium">{r.name}</p>
                <p className="break-all text-neutral-600 dark:text-neutral-400">{r.email}</p>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  {r.role === "brand_admin" ? "Admin" : "Teacher"},{" "}
                  {SCHOOL_TEACHER_STATUS_LABELS[r.hasException && r.status !== "adult" ? "exception" : r.status].toLowerCase()}
                </p>
              </div>
              {r.role === "instructor" ? <RemoveSchoolTeacher userId={r.userId} name={r.name} /> : null}
            </li>
          ))}
          {rows.length === 0 ? <li className="py-3 text-sm text-neutral-600">No teachers yet.</li> : null}
        </ul>
      </section>
    </main>
  );
}
