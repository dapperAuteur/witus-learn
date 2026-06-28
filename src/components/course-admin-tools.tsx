"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Editor-only course tools: generate embeddings + set the navigation mode. CYOA
// crossroads appear on the lesson player once mode = cyoa AND embeddings exist.
export function CourseAdminTools({
  courseId,
  navigationMode,
}: {
  courseId: string;
  navigationMode: string;
}) {
  const router = useRouter();
  const [pending, setPending] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  async function generateEmbeddings() {
    setPending("embed");
    setMsg(null);
    const r = await fetch(`/api/courses/${courseId}/generate-embeddings`, { method: "POST" });
    const d = await r.json().catch(() => ({}));
    setPending(null);
    setMsg(r.ok ? `Embedded ${d.embedded} lesson(s).` : (d.error ?? "Failed to embed."));
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
          {pending === "embed" ? "Embedding…" : "Generate embeddings"}
        </button>
        <span className="text-neutral-500">Navigation:</span>
        {modeBtn("linear", "Linear")}
        {modeBtn("cyoa", "CYOA")}
      </div>
      <p className="mt-2 text-xs text-neutral-500">
        CYOA crossroads appear on the lesson player once the mode is CYOA and embeddings are
        generated (needs a Gemini key). Re-generate after editing lessons.
      </p>
      {msg ? (
        <p role="status" className="mt-2 text-neutral-700 dark:text-neutral-300">
          {msg}
        </p>
      ) : null}
    </section>
  );
}
