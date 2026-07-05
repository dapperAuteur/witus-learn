"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { postJson } from "./client";

// Confirm + create for the capstone deep-link. Name it, then create → jump into the workspace.
// Uses the shared client helper so failures surface a clear message (never a dead end).
export function StartProjectButton({ templateKey, defaultTitle }: { templateKey: string; defaultTitle: string }) {
  const router = useRouter();
  const [title, setTitle] = useState(defaultTitle);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function start() {
    if (!title.trim()) return;
    setSaving(true);
    setError(null);
    const res = await postJson<{ id: string }>("/api/field-log/projects", { templateKey, title: title.trim() });
    setSaving(false);
    if (res.ok) router.push(`/field-log/${res.data.id}`);
    else setError(res.error);
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm">
        Project title
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
        />
      </label>
      {error ? <p role="alert" className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}
      <button
        type="button"
        onClick={start}
        disabled={saving || !title.trim()}
        className="min-h-10 rounded-md px-5 text-sm font-medium text-white disabled:opacity-60"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {saving ? "Creating…" : "Start your project"}
      </button>
    </div>
  );
}
