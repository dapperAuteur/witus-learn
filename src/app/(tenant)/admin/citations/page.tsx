import Link from "next/link";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { requirePlatformOwner } from "@/lib/session";
import { citationChecksByKey } from "@/db/queries/citation-checks";
import { citationsByCourse, STAGED_COURSES, type CitationStatus } from "@/lib/citations";
import { CitationList, type CitationRow } from "@/components/citation-list";

export const metadata: Metadata = { title: "Citations" };

// LIST A of the two-list verification system: every citation in every staged course.
// LIST B is /admin/research, the small hand-written queue of facts Claude could not confirm.
// They are separate pages on purpose: mixing ten judgment calls into several hundred citations
// buries the ten that matter. See docs/citation-verification-plan.md.
export default async function CitationsPage() {
  await requirePlatformOwner();
  const sdb = await getScopedDb();
  const checks = await citationChecksByKey(sdb.tenantId);
  const groups = citationsByCourse();

  const all = groups.flatMap((g) => g.citations);
  const checked = all.filter((c) => (checks.get(c.key)?.status ?? "unverified") !== "unverified").length;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Citations</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Every source cited by a staged course. The question for each one: does it exist, does it still
        resolve, and does it actually say what the lesson claims?
      </p>
      <p className="mt-2 text-sm font-medium">
        {checked} of {all.length} checked, across {groups.length} of {STAGED_COURSES.length} staged
        courses.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Looking for the questions Claude flagged for you instead?{" "}
        <Link href="/admin/research" className="underline">
          Source checks
        </Link>{" "}
        is the other list.
      </p>

      {groups.map((g) => {
        const rows: CitationRow[] = g.citations.map((c) => {
          const row = checks.get(c.key);
          return {
            ...c,
            status: (row?.status ?? "unverified") as CitationStatus,
            note: row?.note ?? null,
          };
        });
        return (
          <CitationList
            key={g.courseSlug}
            courseSlug={g.courseSlug}
            courseTitle={g.courseTitle}
            rows={rows}
          />
        );
      })}
    </main>
  );
}
