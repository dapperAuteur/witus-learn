"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export interface CourseSettings {
  title: string;
  description: string | null;
  category: string | null;
  navigationMode: "linear" | "cyoa";
  visibility: "public" | "members" | "scheduled";
  isPublished: boolean;
  requiresAgeGate: boolean;
  allowCrossCourseCyoa: boolean;
  isSequential: boolean;
  isFeatured: boolean;
}

// Edit course settings (PATCH /api/courses/[id]). isFeatured is platform-owner only
// (the API strips it for non-admins; we only show it when canFeature).
export function CourseSettingsForm({
  courseId,
  initial,
  canFeature,
}: {
  courseId: string;
  initial: CourseSettings;
  canFeature: boolean;
}) {
  const router = useRouter();
  const [v, setV] = useState<CourseSettings>(initial);
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  function set<K extends keyof CourseSettings>(k: K, val: CourseSettings[K]) {
    setV((p) => ({ ...p, [k]: val }));
    setState("idle");
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setState("saving");
    const r = await fetch(`/api/courses/${courseId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(v),
    });
    setState(r.ok ? "saved" : "error");
    if (r.ok) router.refresh();
  }

  const field = "min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <form onSubmit={save} className="space-y-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="font-semibold">Course settings</h2>

      <div>
        <label className="text-sm font-medium" htmlFor="cs-title">Title</label>
        <input id="cs-title" value={v.title} onChange={(e) => set("title", e.target.value)} required maxLength={200} className={field} />
      </div>

      <div>
        <label className="text-sm font-medium" htmlFor="cs-desc">Description</label>
        <textarea id="cs-desc" value={v.description ?? ""} onChange={(e) => set("description", e.target.value)} rows={3} className="w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium" htmlFor="cs-cat">Category</label>
          <input id="cs-cat" value={v.category ?? ""} onChange={(e) => set("category", e.target.value)} maxLength={120} className={field} />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="cs-nav">Navigation</label>
          <select id="cs-nav" value={v.navigationMode} onChange={(e) => set("navigationMode", e.target.value as CourseSettings["navigationMode"])} className={field}>
            <option value="linear">Linear</option>
            <option value="cyoa">CYOA (choose-your-own)</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="cs-vis">Visibility</label>
          <select id="cs-vis" value={v.visibility} onChange={(e) => set("visibility", e.target.value as CourseSettings["visibility"])} className={field}>
            <option value="public">Public</option>
            <option value="members">Members</option>
            <option value="scheduled">Scheduled</option>
          </select>
        </div>
      </div>

      <fieldset className="space-y-2 text-sm">
        <label className="flex items-center gap-2"><input type="checkbox" checked={v.isPublished} onChange={(e) => set("isPublished", e.target.checked)} /> Published</label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={v.requiresAgeGate} onChange={(e) => set("requiresAgeGate", e.target.checked)} /> Requires age gate (18+)</label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={v.isSequential} onChange={(e) => set("isSequential", e.target.checked)} /> Sequential (lessons unlock in order)</label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={v.allowCrossCourseCyoa} onChange={(e) => set("allowCrossCourseCyoa", e.target.checked)} /> Allow this course as a cross-course CYOA destination</label>
        {canFeature ? (
          <label className="flex items-center gap-2"><input type="checkbox" checked={v.isFeatured} onChange={(e) => set("isFeatured", e.target.checked)} /> Featured on the catalog</label>
        ) : null}
      </fieldset>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={state === "saving"} className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
          {state === "saving" ? "Saving…" : "Save settings"}
        </button>
        {state === "saved" ? <span className="text-sm text-green-700 dark:text-green-400">Saved.</span> : null}
        {state === "error" ? <span className="text-sm text-red-600">Could not save.</span> : null}
      </div>
    </form>
  );
}
