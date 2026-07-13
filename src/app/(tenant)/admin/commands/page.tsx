import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { COMMAND_IMPACT_LABEL, OPERATOR_COMMANDS, type CommandImpact } from "@/lib/operator-commands";

export const metadata: Metadata = { title: "Commands" };

const impactClass: Record<CommandImpact, string> = {
  read: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
  build: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  "write-dev": "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  "write-prod": "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
};

// Owner-only CLI reference. These run in a TERMINAL from the repo root — the page is a lookup, not a
// runner. Mirrors docs/OPERATOR_COMMANDS.md (both read src/lib/operator-commands.ts).
export default async function CommandsPage() {
  await requirePlatformOwner();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Commands</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Operator CLI reference. Run these in a <strong>terminal</strong> from the repo root (they can&apos;t
        run in the browser). Also in <span className="break-all font-mono">docs/OPERATOR_COMMANDS.md</span>.
      </p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {(Object.keys(COMMAND_IMPACT_LABEL) as CommandImpact[]).map((k) => (
          <span key={k} className={`rounded px-2 py-0.5 ${impactClass[k]}`}>{COMMAND_IMPACT_LABEL[k]}</span>
        ))}
      </div>

      {OPERATOR_COMMANDS.map((group) => (
        <section key={group.title} className="mt-8">
          <h2 className="text-lg font-semibold">{group.title}</h2>
          {group.blurb ? <p className="mt-1 text-sm text-neutral-500">{group.blurb}</p> : null}
          <ul className="mt-3 space-y-3">
            {group.commands.map((c) => (
              <li key={c.cmd} className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <code className="rounded bg-neutral-100 px-2 py-1 text-sm dark:bg-neutral-900">{c.cmd}</code>
                  <span className={`rounded px-2 py-0.5 text-xs ${impactClass[c.impact]}`}>{COMMAND_IMPACT_LABEL[c.impact]}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{c.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
