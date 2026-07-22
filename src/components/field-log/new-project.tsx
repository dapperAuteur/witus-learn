"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FIELD_LOG_TEMPLATES } from "@/lib/field-log-templates";
import { postJson } from "./client";

// "New project" — pick a template + name it, then jump into the workspace. All failure paths
// surface a clear message (via the shared client helper) instead of a dead end.
export function NewProject() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [templateKey, setTemplateKey] = useState(FIELD_LOG_TEMPLATES[0]?.key ?? "");
  const [title, setTitle] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function create(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    setSaving(true);
    setError(null);
    const res = await postJson<{ id: string }>("/api/field-log/projects", { templateKey, title: title.trim() });
    setSaving(false);
    if (res.ok) {
      router.push(`/field-log/${res.data.id}`);
    } else {
      setError(res.error);
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="min-h-9 rounded-md px-4 text-sm font-medium text-white"
        style={{ backgroundColor: "var(--accent)" }}
      >
        New project
      </button>
    );
  }

  const field =
    "w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <form onSubmit={create} className="w-full rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <div className="space-y-3">
        <label className="block text-sm">
          Template
          <select value={templateKey} onChange={(e) => setTemplateKey(e.target.value)} className={`mt-1 ${field}`}>
            {FIELD_LOG_TEMPLATES.map((t) => (
              <option key={t.key} value={t.key}>{t.title}, {t.description}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          Project title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Ghana chocolate, field collection"
            className={`mt-1 ${field}`}
            autoFocus
          />
        </label>
        {error ? (
          <p role="alert" className="text-sm text-red-600 dark:text-red-400">{error}</p>
        ) : null}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving || !title.trim()}
            className="min-h-9 rounded-md px-4 text-sm font-medium text-white disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {saving ? "Creating…" : "Create project"}
          </button>
          <button type="button" onClick={() => setOpen(false)} className="text-sm text-neutral-500 hover:underline">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
