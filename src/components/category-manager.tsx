"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export interface ManagedCategory {
  id: string;
  name: string;
}

// Admin CRUD for course categories: add, rename (inline), delete. Renaming moves its courses
// onto the new label; deleting un-categorizes them.
export function CategoryManager({ categories }: { categories: ManagedCategory[] }) {
  const router = useRouter();
  const [rows, setRows] = useState(categories);
  const [newName, setNewName] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    if (!newName.trim() || busy) return;
    setBusy(true);
    setErr(null);
    const r = await fetch("/api/admin/categories", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: newName.trim() }),
    });
    const data = await r.json().catch(() => ({}));
    if (r.ok) {
      setRows((p) => [...p, { id: data.category.id, name: data.category.name }]);
      setNewName("");
      router.refresh();
    } else {
      setErr(data.error || "Couldn’t add.");
    }
    setBusy(false);
  }

  async function rename(id: string, name: string) {
    const next = window.prompt("Rename category to:", name);
    if (!next || next.trim() === name) return;
    const r = await fetch(`/api/admin/categories/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: next.trim() }),
    });
    if (r.ok) {
      setRows((p) => p.map((c) => (c.id === id ? { ...c, name: next.trim() } : c)));
      router.refresh();
    }
  }

  async function remove(id: string, name: string) {
    if (!window.confirm(`Delete “${name}”? Courses in it become uncategorized.`)) return;
    const r = await fetch(`/api/admin/categories/${id}`, { method: "DELETE" });
    if (r.ok) {
      setRows((p) => p.filter((c) => c.id !== id));
      router.refresh();
    }
  }

  return (
    <div>
      <form onSubmit={add} className="mb-4 flex gap-2">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New category name"
          maxLength={120}
          className="min-h-10 flex-1 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
        />
        <button
          type="submit"
          disabled={busy || !newName.trim()}
          className="min-h-10 rounded-md px-4 text-sm font-medium text-white disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Add
        </button>
      </form>
      {err ? <p className="mb-2 text-sm text-red-600">{err}</p> : null}
      {rows.length === 0 ? (
        <p className="text-neutral-500">No categories yet.</p>
      ) : (
        <ul className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
          {rows.map((c) => (
            <li key={c.id} className="flex items-center justify-between gap-3 p-3">
              <span className="font-medium">{c.name}</span>
              <span className="flex gap-3 text-sm">
                <button type="button" onClick={() => rename(c.id, c.name)} className="underline">
                  Rename
                </button>
                <button type="button" onClick={() => remove(c.id, c.name)} className="text-red-600 underline">
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
