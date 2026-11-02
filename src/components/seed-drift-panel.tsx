"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { FieldDiff } from "@/lib/seed-drift";

export interface DriftItem {
  id: string;
  lessonTitle: string;
  /** ISO date the seed last saw the difference. */
  lastCheckedAt: string;
  diffs: FieldDiff[];
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });

/**
 * Seed drift on a course's /teach page (plans/97 Q5): each lesson edited in the app since the last
 * seed, the difference between the app's version and the course file's, and the two choices. Taking
 * the file version asks once more, because it replaces the app's text.
 */
export function SeedDriftPanel({ courseId, items }: { courseId: string; items: DriftItem[] }) {
  if (items.length === 0) return null;
  return (
    <section
      id="seed-drift"
      aria-labelledby="seed-drift-heading"
      className="scroll-mt-24 rounded-lg border border-amber-300 p-4 dark:border-amber-800"
    >
      <h2 id="seed-drift-heading" className="font-semibold">
        Lessons that differ from the course file
      </h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Someone edited these lessons in the app after the last seed, so the seed left them alone. Lines marked
        &ldquo;app&rdquo; are only in the lesson as it stands; lines marked &ldquo;file&rdquo; are only in the course
        file. Choose for each lesson; the warning stays on Teach until you do.
      </p>
      <ul className="mt-3 space-y-4">
        {items.map((it) => (
          <DriftRow key={it.id} courseId={courseId} item={it} />
        ))}
      </ul>
    </section>
  );
}

function DriftRow({ courseId, item }: { courseId: string; item: DriftItem }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const takeRef = useRef<HTMLButtonElement>(null);

  async function resolve(action: "keep_app" | "take_file") {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/courses/${courseId}/seed-drift/${item.id}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "That choice could not be saved.");
        return;
      }
      setDone(action === "keep_app" ? "Kept the app edit." : "Took the course file's version.");
      router.refresh();
    } catch {
      setError("Network error, please try again.");
    } finally {
      setBusy(false);
      setConfirming(false);
    }
  }

  const btn =
    "min-h-11 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700";
  return (
    <li className="border-t border-neutral-100 pt-3 dark:border-neutral-800/60">
      <h3 className="font-medium">{item.lessonTitle}</h3>
      <p className="text-xs text-neutral-600 dark:text-neutral-400">Found by the seed on {fmt(item.lastCheckedAt)}</p>
      {item.diffs.map((d) => (
        <details key={d.field} className="mt-2">
          <summary className="inline-flex min-h-11 cursor-pointer items-center text-sm">{d.label} differs</summary>
          {d.lines ? (
            <div className="mt-1 overflow-x-auto rounded-md border border-neutral-200 dark:border-neutral-800">
              <pre className="min-w-0 p-2 text-xs leading-5">
                {d.lines.map((l, i) => (
                  <div
                    key={i}
                    className={
                      l.op === "add"
                        ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-100"
                        : l.op === "del"
                          ? "bg-rose-50 text-rose-900 dark:bg-rose-950/50 dark:text-rose-100"
                          : l.op === "gap"
                            ? "italic text-neutral-500"
                            : ""
                    }
                  >
                    {l.op === "add" ? "file " : l.op === "del" ? "app  " : "     "}
                    {l.text}
                  </div>
                ))}
              </pre>
            </div>
          ) : (
            <p className="mt-1 text-sm">
              Too long to compare here: the app has {d.appLength.toLocaleString("en-US")} characters, the file{" "}
              {d.fileLength.toLocaleString("en-US")}.
            </p>
          )}
        </details>
      ))}
      {done ? (
        <p role="status" className="mt-2 text-sm text-emerald-700 dark:text-emerald-400">
          {done}
        </p>
      ) : (
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <button type="button" className={btn} disabled={busy} onClick={() => resolve("keep_app")}>
            Keep the app edit
          </button>
          {confirming ? (
            <span role="group" aria-label="Confirm taking the file version" className="flex flex-col gap-2 sm:flex-row">
              <button type="button" className={btn} disabled={busy} onClick={() => resolve("take_file")} autoFocus>
                Yes, replace the app&apos;s text with the file&apos;s
              </button>
              <button
                type="button"
                className={btn}
                disabled={busy}
                onClick={() => {
                  setConfirming(false);
                  takeRef.current?.focus();
                }}
              >
                Cancel
              </button>
            </span>
          ) : (
            <button ref={takeRef} type="button" className={btn} disabled={busy} onClick={() => setConfirming(true)}>
              Take the course file&apos;s version
            </button>
          )}
        </div>
      )}
      {error ? (
        <p role="alert" className="mt-1 text-sm text-amber-700 dark:text-amber-400">
          {error}
        </p>
      ) : null}
    </li>
  );
}
