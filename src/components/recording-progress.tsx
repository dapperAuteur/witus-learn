"use client";

import { useMemo, useState } from "react";
import { LessonRecorder } from "./lesson-recorder";

// "Mark recorded" checklist on the recording-script page. Lets the instructor track which
// lessons they've already recorded across multiple sittings, and see progress. Persists via
// PATCH /api/courses/[courseId]/lessons/[lessonId] { recorded: boolean } → lessons.recordedAt.
export interface ProgressLesson {
  id: string;
  title: string;
  /** ISO string or null. */
  recordedAt: string | null;
}

export function RecordingProgress({ courseId, lessons }: { courseId: string; lessons: ProgressLesson[] }) {
  const [recorded, setRecorded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(lessons.map((l) => [l.id, Boolean(l.recordedAt)])),
  );
  const [busy, setBusy] = useState<string | null>(null);

  const done = useMemo(() => Object.values(recorded).filter(Boolean).length, [recorded]);

  async function toggle(lessonId: string, next: boolean) {
    setBusy(lessonId);
    setRecorded((p) => ({ ...p, [lessonId]: next })); // optimistic
    try {
      const r = await fetch(`/api/courses/${courseId}/lessons/${lessonId}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ recorded: next }),
      });
      if (!r.ok) setRecorded((p) => ({ ...p, [lessonId]: !next })); // revert on failure
    } catch {
      setRecorded((p) => ({ ...p, [lessonId]: !next }));
    } finally {
      setBusy(null);
    }
  }

  return (
    <details className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800 print:hidden" open>
      <summary className="cursor-pointer font-medium">
        Recording progress — {done}/{lessons.length} recorded
      </summary>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
        <div
          className="h-full rounded-full bg-green-500 transition-all"
          style={{ width: `${lessons.length ? (done / lessons.length) * 100 : 0}%` }}
        />
      </div>
      <ul className="mt-3 space-y-3">
        {lessons.map((l, i) => (
          <li key={l.id} className="text-sm">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={Boolean(recorded[l.id])}
                disabled={busy === l.id}
                onChange={(e) => toggle(l.id, e.target.checked)}
                aria-label={`Mark "${l.title}" recorded`}
              />
              <span className={recorded[l.id] ? "text-neutral-400 line-through" : ""}>
                {i + 1}. {l.title}
              </span>
            </div>
            {/* Record in-app (audio, offline-safe). A successful upload ticks the checkbox. */}
            <div className="pl-6">
              <LessonRecorder
                courseId={courseId}
                lessonId={l.id}
                onUploaded={() => setRecorded((p) => ({ ...p, [l.id]: true }))}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-neutral-500">
        Record each lesson right here (audio), or tick it if you recorded elsewhere. Recordings are
        saved on your device first and upload when you’re online — nothing is lost if you lose
        connection. Your progress persists across sittings.
      </p>
    </details>
  );
}
