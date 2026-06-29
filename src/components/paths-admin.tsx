"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Course {
  id: string;
  title: string;
}
interface Path {
  id: string;
  slug: string;
  title: string;
  courseIds: string[];
}

const field = "min-h-10 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900";

// Platform-owner learning-path manager: create a path, then check the courses it
// includes (order follows the course list; reordering is a later refinement).
export function PathsAdmin({ paths, courses }: { paths: Path[]; courses: Course[] }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function create(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    const r = await fetch("/api/admin/paths", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, slug, description: desc || null }),
    });
    setBusy(false);
    if (r.ok) {
      setTitle("");
      setSlug("");
      setDesc("");
      router.refresh();
    } else {
      const d = await r.json().catch(() => ({}));
      setErr(d.error ?? "Could not create.");
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={create} className="space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 className="font-semibold">New path</h2>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required maxLength={200} className={field} />
        <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="slug (lowercase-hyphens)" required maxLength={120} className={field} />
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description (optional)" rows={2} className="w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900" />
        <button type="submit" disabled={busy || title.trim().length < 1 || slug.trim().length < 1} className="min-h-10 rounded-md px-4 font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
          Create path
        </button>
        {err ? <p className="text-sm text-red-600">{err}</p> : null}
      </form>

      {paths.map((p) => (
        <PathRow key={p.id} path={p} courses={courses} />
      ))}
    </div>
  );
}

function PathRow({ path, courses }: { path: Path; courses: Course[] }) {
  const router = useRouter();
  const [checked, setChecked] = useState<Set<string>>(new Set(path.courseIds));
  const [busy, setBusy] = useState(false);

  function toggle(id: string) {
    setChecked((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  }

  async function save() {
    setBusy(true);
    // Order follows the course list.
    const courseIds = courses.filter((c) => checked.has(c.id)).map((c) => c.id);
    await fetch(`/api/admin/paths/${path.id}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ courseIds }) });
    setBusy(false);
    router.refresh();
  }
  async function del() {
    if (!confirm(`Delete the "${path.title}" path?`)) return;
    setBusy(true);
    await fetch(`/api/admin/paths/${path.id}`, { method: "DELETE" });
    setBusy(false);
    router.refresh();
  }

  return (
    <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          {path.title} <span className="text-sm font-normal text-neutral-500">/{path.slug}</span>
        </h3>
        <button type="button" disabled={busy} onClick={del} className="text-sm text-red-600">Delete</button>
      </div>
      <div className="mt-3 space-y-1 text-sm">
        {courses.length === 0 ? <p className="text-neutral-500">No courses on this school yet.</p> : null}
        {courses.map((c) => (
          <label key={c.id} className="flex items-center gap-2">
            <input type="checkbox" checked={checked.has(c.id)} onChange={() => toggle(c.id)} /> {c.title}
          </label>
        ))}
      </div>
      <button type="button" disabled={busy} onClick={save} className="mt-3 min-h-9 rounded-md px-3 text-sm font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
        Save courses
      </button>
    </div>
  );
}
