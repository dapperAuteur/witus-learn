"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Editor-only course tools: generate embeddings + set the navigation mode. CYOA
// crossroads appear on the lesson player once mode = cyoa AND embeddings exist.
// `index` reports how many published lessons are missing/behind their embedding — publishing
// auto-indexes, but lessons edited afterwards go stale until a manual re-index (this button).
export function CourseAdminTools({
  courseId,
  navigationMode,
  index,
}: {
  courseId: string;
  navigationMode: string;
  index?: { published: number; stale: number };
}) {
  const router = useRouter();
  const [pending, setPending] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const stale = index && index.stale > 0;

  async function generateEmbeddings() {
    setPending("embed");
    setMsg(null);
    const r = await fetch(`/api/courses/${courseId}/generate-embeddings`, { method: "POST" });
    const d = await r.json().catch(() => ({}));
    setPending(null);
    setMsg(r.ok ? `Embedded ${d.embedded} lesson(s).` : (d.error ?? "Failed to embed."));
    if (r.ok) router.refresh(); // pull a fresh staleness count after re-indexing
  }

  async function setMode(mode: "linear" | "cyoa") {
    setPending("mode");
    setMsg(null);
    const r = await fetch(`/api/courses/${courseId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ navigationMode: mode }),
    });
    setPending(null);
    if (r.ok) router.refresh();
    else setMsg("Failed to set navigation mode.");
  }

  const modeBtn = (mode: "linear" | "cyoa", label: string) => (
    <button
      type="button"
      onClick={() => setMode(mode)}
      disabled={!!pending}
      aria-pressed={navigationMode === mode}
      className={`rounded-full border px-3 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 ${
        navigationMode === mode ? "border-current font-medium" : "border-neutral-300 dark:border-neutral-700"
      }`}
      style={navigationMode === mode ? { color: "var(--accent)" } : undefined}
    >
      {label}
    </button>
  );

  return (
    <section className="mt-10 rounded-lg border border-dashed border-neutral-300 p-4 text-sm dark:border-neutral-700">
      <h2 className="font-semibold">Instructor tools</h2>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={generateEmbeddings}
          disabled={!!pending}
          className="min-h-9 rounded-md border border-neutral-300 px-3 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700"
        >
          {pending === "embed" ? "Embedding…" : stale ? "Re-index lessons" : "Generate embeddings"}
        </button>
        {stale ? (
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
            {index!.stale} of {index!.published} lesson{index!.published === 1 ? "" : "s"} changed since last index
          </span>
        ) : index && index.published > 0 ? (
          <span className="text-xs text-green-700 dark:text-green-400">Index up to date ✓</span>
        ) : null}
        <span className="text-neutral-500">Navigation:</span>
        {modeBtn("linear", "Linear")}
        {modeBtn("cyoa", "CYOA")}
      </div>
      <p className="mt-2 text-xs text-neutral-500">
        CYOA crossroads appear on the lesson player once the mode is CYOA and embeddings are
        generated (needs a Gemini key). Publishing re-indexes automatically; re-index by hand after
        editing lessons on an already-published course.
      </p>
      {msg ? (
        <p role="status" className="mt-2 text-neutral-700 dark:text-neutral-300">
          {msg}
        </p>
      ) : null}
    </section>
  );
}
