"use client";

import type { Chapter } from "@/lib/media";
import { formatTimecode, parseTimecode } from "@/lib/srt";

// Editable list of chapter markers. Chapters may be auto-generated from an uploaded .srt
// (see LessonEditor) and then renamed/retimed/reordered here before saving. Each row is a
// { start, title }; time is edited as "m:ss" (or seconds) and stored as seconds.

export function ChapterEditor({
  value,
  onChange,
}: {
  value: Chapter[];
  onChange: (next: Chapter[]) => void;
}) {
  function update(i: number, patch: Partial<Chapter>) {
    onChange(value.map((c, idx) => (idx === i ? { ...c, ...patch } : c)));
  }
  function remove(i: number) {
    onChange(value.filter((_, idx) => idx !== i));
  }
  function add() {
    const last = value[value.length - 1];
    const start = last?.start != null ? last.start + 30 : 0;
    onChange([...value, { title: "New chapter", start }]);
  }
  function sort() {
    onChange([...value].sort((a, b) => (a.start ?? 0) - (b.start ?? 0)));
  }

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-medium">Chapters ({value.length})</span>
        <div className="flex gap-3 text-xs">
          <button type="button" onClick={sort} className="underline" disabled={value.length < 2}>
            Sort by time
          </button>
          <button type="button" onClick={add} className="underline">
            + Add chapter
          </button>
        </div>
      </div>
      {value.length === 0 ? (
        <p className="text-xs text-neutral-500">
          No chapters. Upload an .srt to auto-generate them, or add one manually.
        </p>
      ) : (
        <ul className="space-y-1">
          {value.map((c, i) => (
            <li key={i} className="flex items-center gap-2">
              <input
                type="text"
                defaultValue={c.start != null ? formatTimecode(c.start) : ""}
                onBlur={(e) => {
                  const secs = parseTimecode(e.target.value);
                  if (secs != null) update(i, { start: Math.round(secs * 1000) / 1000 });
                  e.target.value = c.start != null ? formatTimecode(c.start) : "";
                }}
                aria-label={`Chapter ${i + 1} time`}
                className="min-h-8 w-20 rounded-md border border-neutral-300 px-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
                placeholder="m:ss"
              />
              <input
                type="text"
                value={c.title}
                onChange={(e) => update(i, { title: e.target.value })}
                aria-label={`Chapter ${i + 1} title`}
                className="min-h-8 flex-1 rounded-md border border-neutral-300 px-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
                placeholder="Chapter title"
              />
              <button
                type="button"
                onClick={() => remove(i)}
                aria-label={`Remove chapter ${i + 1}`}
                className="px-1 text-neutral-400 hover:text-red-600"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
