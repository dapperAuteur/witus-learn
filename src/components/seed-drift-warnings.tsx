import Link from "next/link";
import type { OpenSeedDrift } from "@/db/queries/seed-drift";

/**
 * "Edited in the app since the last seed" (plans/97 Q5): the list on /teach and /admin. It shows on
 * every visit until each warning is acknowledged on the course's own page, where the difference is
 * shown and the author chooses. Server component; renders nothing when there is nothing open.
 */
export function SeedDriftWarnings({ drifts, headingLevel = 2 }: { drifts: OpenSeedDrift[]; headingLevel?: 2 | 3 }) {
  if (drifts.length === 0) return null;
  const H = headingLevel === 2 ? "h2" : "h3";
  const byCourse = new Map<string, OpenSeedDrift[]>();
  for (const d of drifts) byCourse.set(d.courseId, [...(byCourse.get(d.courseId) ?? []), d]);
  return (
    <section
      aria-labelledby="seed-drift-warnings"
      className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100"
    >
      <H id="seed-drift-warnings" className="font-semibold">
        {drifts.length === 1 ? "1 lesson differs" : `${drifts.length} lessons differ`} from its course file
      </H>
      <p className="mt-1">
        These lessons were edited in the app after the last seed, so the seed left them as they are. Open each one,
        compare, and choose: keep the app edit, or take the course file&apos;s version. This warning shows until you do.
      </p>
      <ul className="mt-2 space-y-1">
        {[...byCourse.values()].map((list) => {
          const c = list[0];
          const href = `/teach/${c.courseSlug ?? c.courseId}#seed-drift`;
          return (
            <li key={c.courseId}>
              <Link href={href} className="inline-flex min-h-11 items-center font-medium underline" style={{ color: "var(--accent)" }}>
                {c.courseTitle}
              </Link>
              : {list.map((d) => d.lessonTitle).join("; ")}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
