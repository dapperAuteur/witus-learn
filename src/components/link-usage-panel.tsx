import type { LinkUsageRow } from "@/db/queries/link-clicks";

// Instructor-only "Link usage" panel: which outbound links learners actually click.
// Counts only — no per-learner data. Ecosystem cross-promo clicks are tagged.
export function LinkUsagePanel({ rows }: { rows: LinkUsageRow[] }) {
  return (
    <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="font-semibold">Link usage</h2>
      <p className="mt-1 text-sm text-neutral-500">
        Outbound-link clicks in this course (counts only — no per-learner tracking).
      </p>
      {rows.length === 0 ? (
        <p className="mt-3 text-sm text-neutral-500">No clicks recorded yet.</p>
      ) : (
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left text-neutral-500 dark:border-neutral-800">
                <th className="py-2 pr-3 font-medium">Link</th>
                <th className="py-2 pr-3 font-medium">Where</th>
                <th className="py-2 pr-3 font-medium">Clicks</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={`${r.url}-${i}`} className="border-b border-neutral-100 last:border-0 dark:border-neutral-800/60">
                  <td className="max-w-md truncate py-2 pr-3">
                    <a href={r.url} target="_blank" rel="noreferrer" className="underline" style={{ color: "var(--accent)" }}>
                      {r.url}
                    </a>
                    {r.kind === "ecosystem" ? (
                      <span className="ml-2 rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
                        cross-promo
                      </span>
                    ) : null}
                  </td>
                  <td className="py-2 pr-3 text-neutral-600 dark:text-neutral-400">{r.lessonTitle ?? "Course page"}</td>
                  <td className="py-2 pr-3 tabular-nums">{r.clickCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
