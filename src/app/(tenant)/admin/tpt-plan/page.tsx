import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { standardsForCourse, standardsForCourses } from "@/lib/standards";
import { TPT_PLAN, TPT_STRATEGY, type TptPlanItem } from "@/lib/tpt-plan";

export const metadata: Metadata = { title: "Teachers Pay Teachers plan" };

// Owner-only rollout plan for Teachers Pay Teachers: which courses to post, in what order, at what
// price, and why, ordered to optimize reach and sales. The standards count on each row is the REAL
// count the course carries (src/lib/standards), which is itself a TpT selling point. Recommendations,
// not promises; the owner sets final prices on TpT.
function standardsLabel(item: TptPlanItem): string {
  const r = item.bundleSlugs
    ? standardsForCourses(item.bundleSlugs)
    : item.courseSlug
      ? standardsForCourse(item.courseSlug)
      : { total: 0, jurisdictions: [] };
  if (r.total === 0) return "not mapped yet";
  return `${r.total} standards / ${r.jurisdictions.length} states`;
}

const STATUS: Record<TptPlanItem["status"], { label: string; cls: string }> = {
  built: { label: "Packet built", cls: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300" },
  next: { label: "Build next", cls: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300" },
  planned: { label: "Planned", cls: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300" },
};

export default async function TptPlanPage() {
  await requirePlatformOwner();
  const items = [...TPT_PLAN].sort((a, b) => a.order - b.order);
  const built = items.filter((i) => i.status === "built").length;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold">Teachers Pay Teachers plan</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        The order to post packets on TpT to reach the most teachers and convert them into Learn.WitUS
        buyers. {built} of {items.length} packets are built (in{" "}
        <code className="text-sm">plans/future-courses/tpt-packets/</code>); the rest are the queue.
        Prices are recommendations; you set the final price on TpT.
      </p>

      <section aria-labelledby="strategy" className="mt-6 rounded-lg border-2 p-5" style={{ borderColor: "var(--accent)" }}>
        <h2 id="strategy" className="font-semibold">
          The sales strategy, in order
        </h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          {TPT_STRATEGY.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-neutral-300 text-left dark:border-neutral-700">
              <th className="py-2 pr-3 font-semibold">#</th>
              <th className="py-2 pr-3 font-semibold">Product</th>
              <th className="py-2 pr-3 font-semibold">Price</th>
              <th className="py-2 pr-3 font-semibold">Standards</th>
              <th className="py-2 pr-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.order} className="border-b border-neutral-200 align-top dark:border-neutral-800">
                <td className="py-3 pr-3 text-neutral-500">{i.order}</td>
                <td className="py-3 pr-3">
                  <div className="font-medium">{i.title}</div>
                  <div className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    <span className="font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                      {i.tier}
                    </span>{" "}
                    · {i.rationale}
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">Leads to: {i.crossSell}</div>
                  {i.packetDir ? (
                    <div className="mt-1 text-xs text-neutral-400">
                      <code>plans/future-courses/tpt-packets/{i.packetDir}/</code>
                    </div>
                  ) : null}
                </td>
                <td className="py-3 pr-3 font-semibold whitespace-nowrap">{i.price}</td>
                <td className="py-3 pr-3 whitespace-nowrap text-neutral-600 dark:text-neutral-400">
                  {standardsLabel(i)}
                </td>
                <td className="py-3 pr-3">
                  <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${STATUS[i.status].cls}`}>
                    {STATUS[i.status].label}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-neutral-500">
        Every listing description points back to the full cited, standards-aligned course at
        Learn.WitUS.Online. The packet is the taste; the platform is the meal. No figure here is a
        promise about sales.
      </p>
    </main>
  );
}
