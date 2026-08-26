import Link from "next/link";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { requirePlatformOwner } from "@/lib/session";
import { futureWorkNotesByItem } from "@/db/queries/future-work-notes";
import {
  FUTURE_WORK_STATUS_LABEL,
  futureWorkGroups,
  type FutureWorkKind,
  type FutureWorkStatus,
} from "@/lib/future-work";
import { Markdown } from "@/components/markdown";
import { FutureWorkNotes } from "@/components/future-work-notes";
import { SavePageOfflineButton } from "@/components/save-page-offline-button";

export const metadata: Metadata = { title: "Future classes & features" };

// Owner-only review surface for everything proposed but not yet built. The proposals are COMMITTED
// content (src/lib/future-work.ts ← src/lib/future-work-content/*, generated from the gitignored
// plans/future-courses/ notes by `pnpm gen:future-work`) — nothing is read from disk at runtime, so
// this renders the same in production. The tenant comes from getScopedDb(), which resolves it from
// the request host; notes are written and read scoped to it.
//
// ── This page can be SAVED FOR OFFLINE, which is unusual and deliberate ───────────────────────
// It's a reading surface — 30-odd long proposals BAM reviews on a plane — so it gets the same
// "Save for offline" treatment as a lesson (SavePageOfflineButton → src/lib/offline.ts caches the
// HTML, the RSC payload, and the JS/CSS chunks it needs to render, then reads it back to verify).
// It is also the ONLY authenticated page in the app that may be cached, and the terms are strict:
//   • the owner must press the button — nothing here is auto-cached or prefetched;
//   • the cached copy is marked `sensitive`, so signing out deletes it, and so does the next online
//     load under a different account (OfflinePrivacyGuard in the (tenant) layout);
//   • requirePlatformOwner() below is untouched. Caching is a client-side copy of a response the
//     server had already decided this user could see; it grants nothing. Online, the page is
//     network-first, so the gate runs on every visit.
// Notes written offline don't vanish: the form queues them (src/lib/offline-outbox.ts) and they're
// sent as soon as there's a connection.
const statusClass: Record<FutureWorkStatus, string> = {
  shipped: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
  proposed: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
  recommended: "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300",
  researching: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  building: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  chapter: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
  deferred: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300",
  cut: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
};

const KINDS: { kind: FutureWorkKind; title: string; blurb: string }[] = [
  {
    kind: "course",
    title: "Future classes",
    blurb: "Course proposals and the research behind them. Read one, then leave a note on it.",
  },
  {
    kind: "feature",
    title: "Future features",
    blurb: "Platform features proposed but not yet scheduled.",
  },
];

export default async function FutureWorkPage() {
  const sdb = await getScopedDb();
  const session = await requirePlatformOwner();
  const notes = await futureWorkNotesByItem(sdb.tenantId);
  const itemCount = KINDS.reduce(
    (n, { kind }) => n + futureWorkGroups(kind).reduce((m, g) => m + g.items.length, 0),
    0,
  );

  return (
    <main className="max-w-3xl py-10">
      <h1 className="text-2xl font-bold">Future classes &amp; features</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Everything proposed but not yet built. Notes you leave here go straight into the database,
        Claude reads them with <span className="font-mono">pnpm future:list</span>, so nothing needs
        to be pasted into a chat. To add a proposal, drop the markdown in{" "}
        <span className="break-all font-mono">plans/future-courses/</span> and run{" "}
        <span className="font-mono">pnpm gen:future-work</span>.
      </p>

      {/* `savedByUserId` is what makes the cached copy revocable — the purge compares it against
          whoever is signed in and deletes anything that isn't theirs. It is NOT an authorisation
          check (the server's requirePlatformOwner above is); it's a "whose device-copy is this". */}
      <SavePageOfflineButton
        pagePath="/admin/future"
        meta={{
          pageTitle: "Future classes & features",
          pageSummary: `${itemCount} proposal${itemCount === 1 ? "" : "s"} to review`,
          sensitive: true,
          savedByUserId: session.user.id,
        }}
      />

      {KINDS.map(({ kind, title, blurb }, kindIdx) => {
        const groups = futureWorkGroups(kind);
        return (
          <section key={kind} className="mt-10">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-neutral-600">{blurb}</p>

            {groups.length === 0 ? (
              <p className="mt-4 rounded-lg border border-dashed border-neutral-300 p-4 text-sm text-neutral-600 dark:border-neutral-700">
                None yet.
              </p>
            ) : null}

            {/* Each group is a native <details> (the same house pattern as a course page's
                Sections), so 40+ proposals collapse to a screenful of headings with counts.
                Only the very first group on the page starts open — it's the 1-item "She Did
                the Work" overview; opening the 29-subject research group by default would
                recreate the exact scroll this collapse exists to kill. Native <details> also
                keeps the saved-offline copy working with zero extra JS. NOT `group`-classed:
                the item cards inside use bare `group-open:` for their proposal toggles, and an
                open ancestor carrying `.group` would flip every card's label. */}
            {groups.map((group, groupIdx) => (
              <details key={group.title} open={kindIdx === 0 && groupIdx === 0} className="group/fw mt-6">
                <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-md text-sm font-semibold uppercase tracking-wide text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12">
                  <span aria-hidden className="text-xs transition-transform group-open/fw:rotate-90">
                    ▸
                  </span>
                  <h3 className="min-w-0 flex-1 wrap-break-word">
                    {group.title}{" "}
                    <span className="font-normal normal-case">({group.items.length})</span>
                  </h3>
                </summary>

                <ul className="mt-3 space-y-4">
                  {group.items.map((item) => {
                    const itemNotes = notes.get(item.key) ?? [];
                    const open = itemNotes.filter((n) => n.status !== "done").length;
                    return (
                      <li
                        key={item.key}
                        className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800 sm:p-5"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <h4 className="min-w-0 font-semibold wrap-break-word">{item.title}</h4>
                          <span className={`rounded px-2 py-0.5 text-xs ${statusClass[item.status]}`}>
                            {FUTURE_WORK_STATUS_LABEL[item.status]}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{item.summary}</p>
                        {/* A shipped proposal links to what it produced, so built work stops appearing in the
                            queue as an open idea. One proposal can produce several courses. */}
                        {item.courseSlugs && item.courseSlugs.length > 0 ? (
                          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                            <span className="text-neutral-600">Built:</span>
                            {item.courseSlugs.map((slug) => (
                              <Link key={slug} href={`/bam/${slug}`} className="underline underline-offset-2" style={{ color: "var(--accent)" }}>
                                {slug}
                              </Link>
                            ))}
                          </p>
                        ) : null}

                        <details className="group mt-3">
                          <summary className="inline-flex min-h-11 cursor-pointer items-center text-sm underline pointer-coarse:min-h-12" style={{ color: "var(--accent)" }}>
                            <span className="group-open:hidden">Read the full proposal</span>
                            <span className="hidden group-open:inline">Hide the full proposal</span>
                          </summary>
                          <div className="mt-2 min-w-0 overflow-x-auto">
                            <Markdown>{item.body}</Markdown>
                          </div>
                          <p className="mt-3 break-all text-xs text-neutral-400">
                            Source: {item.provenance}
                          </p>
                        </details>

                        {itemNotes.length > 0 ? (
                          <p className="mt-3 text-xs text-neutral-600">
                            {itemNotes.length} note{itemNotes.length === 1 ? "" : "s"}
                            {open > 0 ? ` · ${open} open` : ""}
                          </p>
                        ) : null}

                        <FutureWorkNotes
                          itemKey={item.key}
                          initial={itemNotes.map((n) => ({
                            id: n.id,
                            body: n.body,
                            status: n.status,
                            createdAt: n.createdAt.toISOString(),
                          }))}
                        />
                      </li>
                    );
                  })}
                </ul>
              </details>
            ))}
          </section>
        );
      })}
    </main>
  );
}
