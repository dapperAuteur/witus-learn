"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface FeedbackItem {
  id: string;
  kind: string;
  body: string;
  status: string;
  when: string;
  courseId: string;
  courseTitle: string;
  lessonTitle: string;
}

const STATUS_STYLE: Record<string, string> = {
  open: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  reviewed: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  resolved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
};

// Instructor review queue for curriculum feedback. Lists items with course/lesson
// context and lets the reviewer move status open → reviewed → resolved.
export function FeedbackQueue({ items }: { items: FeedbackItem[] }) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);

  async function setStatus(id: string, status: string) {
    setBusy(id);
    const r = await fetch(`/api/feedback/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setBusy(null);
    if (r.ok) router.refresh();
  }

  if (items.length === 0) {
    return <p className="mt-6 text-neutral-500">No feedback yet.</p>;
  }

  return (
    <ul className="mt-6 space-y-4">
      {items.map((f) => (
        <li key={f.id} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs capitalize text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              {f.kind}
            </span>
            <span className={`rounded-full px-2 py-0.5 text-xs ${STATUS_STYLE[f.status] ?? ""}`}>
              {f.status}
            </span>
            <Link href={`/teach/${f.courseId}`} className="text-neutral-500 hover:underline">
              {f.courseTitle} · {f.lessonTitle}
            </Link>
            <span className="ml-auto text-xs text-neutral-400">{f.when}</span>
          </div>

          <p className="mt-2 whitespace-pre-wrap text-neutral-800 dark:text-neutral-200">{f.body}</p>

          <div className="mt-3 flex gap-2 text-sm">
            {f.status !== "reviewed" ? (
              <button type="button" disabled={busy === f.id} onClick={() => setStatus(f.id, "reviewed")} className="rounded border border-neutral-300 px-2 py-0.5 dark:border-neutral-700">
                Mark reviewed
              </button>
            ) : null}
            {f.status !== "resolved" ? (
              <button type="button" disabled={busy === f.id} onClick={() => setStatus(f.id, "resolved")} className="rounded border border-neutral-300 px-2 py-0.5 dark:border-neutral-700">
                Resolve
              </button>
            ) : (
              <button type="button" disabled={busy === f.id} onClick={() => setStatus(f.id, "open")} className="rounded border border-neutral-300 px-2 py-0.5 dark:border-neutral-700">
                Reopen
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
