import Link from "next/link";
import type { RecallHistory, RecallHistoryEntry } from "@/db/queries/recall";

// The learner's check-yourself / quick-recall history on /dashboard: what they missed and when,
// a simple "review again" list (the spaced-recall assist — recency + misses, deliberately not a
// full SRS scheduler), and a per-course miss rate. Server component; data from getRecallHistory.

const dateFmt = (d: Date) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

const KIND_LABEL: Record<RecallHistoryEntry["kind"], string> = {
  check: "Check yourself",
  card: "Quick recall",
};

function EntryRow({ entry, when }: { entry: RecallHistoryEntry; when: string }) {
  return (
    <li>
      <Link
        href={entry.href}
        className="block rounded-xl border border-neutral-200 bg-white p-3 hover:border-current focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <p className="text-sm font-medium">{entry.prompt}</p>
        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-neutral-500">
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 dark:bg-neutral-800">{KIND_LABEL[entry.kind]}</span>
          <span className="min-w-0 truncate">
            {entry.lessonTitle} · {entry.courseTitle}
          </span>
        </p>
        <p className="mt-1 text-xs text-neutral-500">
          Missed {entry.misses} of {entry.attempts} attempt{entry.attempts === 1 ? "" : "s"} · {when}
        </p>
      </Link>
    </li>
  );
}

export function RecallHistoryView({ history }: { history: RecallHistory }) {
  if (history.totalAttempts === 0) {
    return (
      <p className="mt-2 text-sm text-neutral-500">
        Grade yourself on the &ldquo;Check yourself&rdquo; and &ldquo;Quick recall&rdquo; cards inside lessons —
        your history shows up here, with the ones to review again.
      </p>
    );
  }

  return (
    <div className="mt-3 space-y-6">
      {history.dueAgain.length > 0 ? (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Review again</h3>
          <p className="mt-1 text-xs text-neutral-500">
            Checks you haven&apos;t recovered yet, or missed before and haven&apos;t retried in a while — testing
            yourself again after a gap is what makes them stick.
          </p>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {history.dueAgain.map((e) => (
              <EntryRow key={e.key} entry={e} when={`last tried ${dateFmt(e.lastAt)}`} />
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-sm text-neutral-500">
          Nothing due for review — everything you&apos;ve missed has been recovered. Keep grading yourself as
          you learn.
        </p>
      )}

      {history.recentMisses.length > 0 ? (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Recently missed</h3>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {history.recentMisses.map((e) => (
              <EntryRow
                key={e.key}
                entry={e}
                when={e.lastMissAt ? `missed ${dateFmt(e.lastMissAt)}` : `last tried ${dateFmt(e.lastAt)}`}
              />
            ))}
          </ul>
        </div>
      ) : null}

      {history.courses.length > 0 ? (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">By course</h3>
          <ul className="mt-2 space-y-1.5">
            {history.courses.map((c) => (
              <li key={c.courseId}>
                <Link
                  href={c.href}
                  className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm hover:border-current dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <span className="min-w-0 truncate font-medium">{c.courseTitle}</span>
                  <span className="shrink-0 text-xs tabular-nums text-neutral-500">
                    {c.missRate}% missed · {c.attempts} attempt{c.attempts === 1 ? "" : "s"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
