import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { listTeacherAgeExceptions, teachersMustBeAdults } from "@/db/queries/teacher-age";
import { TeacherAgeRuleSwitch, TeacherAgeExceptionWizard, RevokeExceptionButton } from "@/components/teacher-age-admin";

export const metadata: Metadata = { title: "Teacher age rule" };

// Owner-only. The platform-wide "teachers must be adults" switch (default ON) and the per-person
// exceptions to it, decided 2026-09-20. The rule itself is src/lib/teacher-age.ts; every step of an
// exception is re-checked on the server, so this page is the friendly half, not the gate.
export default async function TeacherAgePage() {
  await requirePlatformOwner();
  const [ruleOn, exceptions] = await Promise.all([teachersMustBeAdults(), listTeacherAgeExceptions()]);
  const active = exceptions.filter((e) => !e.revokedAt);
  const revoked = exceptions.filter((e) => e.revokedAt);

  return (
    <main className="max-w-3xl py-10">
      <h1 className="text-2xl font-bold">Teacher age rule</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Platform-wide, every school. While the rule is on, only people who have confirmed they are 18
        or older, and whose account shows no sign of belonging to a child, can create a class or be
        assigned to teach one. Parent and teacher contact always requires a confirmed adult, whatever
        this switch says.
      </p>

      <section aria-labelledby="rule-h" className="mt-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 id="rule-h" className="font-semibold">
          The rule
        </h2>
        <TeacherAgeRuleSwitch on={ruleOn} />
      </section>

      <section aria-labelledby="grant-h" className="mt-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 id="grant-h" className="font-semibold">
          Grant an exception
        </h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Lets one person teach without being confirmed as an adult. Four steps, each with its own
          warnings. The exception is kept with your account and your reason, even after it is revoked.
        </p>
        <TeacherAgeExceptionWizard />
      </section>

      <section aria-labelledby="active-h" className="mt-6">
        <h2 id="active-h" className="font-semibold">
          Active exceptions ({active.length})
        </h2>
        {active.length === 0 ? (
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">None.</p>
        ) : (
          <ul className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">
            {active.map((e) => (
              <li key={e.id} className="py-3 text-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="break-words font-medium">
                      {e.name ? `${e.name}, ` : ""}
                      {e.email}
                    </p>
                    <p className="mt-1 break-words text-neutral-700 dark:text-neutral-300">{e.reason}</p>
                    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                      Granted {e.createdAt.toISOString().slice(0, 10)}
                      {e.grantedByEmail ? ` by ${e.grantedByEmail}` : ""}
                    </p>
                  </div>
                  <RevokeExceptionButton userId={e.userId} label={e.email} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {revoked.length > 0 ? (
        <details className="mt-6">
          <summary className="min-h-11 cursor-pointer py-2 font-semibold">Revoked exceptions ({revoked.length})</summary>
          <ul className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">
            {revoked.map((e) => (
              <li key={e.id} className="py-3 text-sm">
                <p className="break-words">{e.email}</p>
                <p className="mt-1 break-words text-neutral-700 dark:text-neutral-300">{e.reason}</p>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  Granted {e.createdAt.toISOString().slice(0, 10)}, revoked{" "}
                  {e.revokedAt?.toISOString().slice(0, 10)}
                </p>
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </main>
  );
}
