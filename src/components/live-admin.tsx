"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Tenant {
  id: string;
  name: string;
}
interface Session {
  id: string;
  title: string;
  isLive: boolean;
  visibility: string;
  recordingUrl: string | null;
  playbackUrl: string | null;
}

const field = "min-h-10 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900";

// Platform-owner live-session manager: create + broadcast to schools (fan-out),
// then go live / end / set recording / delete for this school's sessions.
export function LiveAdmin({
  tenants,
  currentTenantId,
  sessions,
}: {
  tenants: Tenant[];
  currentTenantId: string;
  sessions: Session[];
}) {
  const router = useRouter();
  const [picked, setPicked] = useState<Set<string>>(new Set([currentTenantId]));
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [when, setWhen] = useState("");
  const [vis, setVis] = useState("members");
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  function toggle(id: string) {
    setPicked((p) => {
      const n = new Set(p);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  }

  async function create(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const r = await fetch("/api/admin/live", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        tenantIds: [...picked],
        title,
        description: desc || null,
        scheduledAt: when ? new Date(when).toISOString() : null,
        visibility: vis,
        playbackUrl: url || null,
      }),
    });
    setBusy(false);
    if (r.ok) {
      const d = await r.json();
      setMsg(`Created on ${d.count} school(s).`);
      setTitle("");
      setDesc("");
      setWhen("");
      setUrl("");
      router.refresh();
    } else {
      const d = await r.json().catch(() => ({}));
      setMsg(d.error ?? "Could not create.");
    }
  }

  async function patch(id: string, body: Record<string, unknown>) {
    setBusy(true);
    await fetch(`/api/admin/live/${id}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
    setBusy(false);
    router.refresh();
  }
  async function del(id: string) {
    if (!confirm("Delete this session?")) return;
    setBusy(true);
    await fetch(`/api/admin/live/${id}`, { method: "DELETE" });
    setBusy(false);
    router.refresh();
  }

  return (
    <div className="space-y-8">
      <form onSubmit={create} className="space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 className="font-semibold">Schedule a live class</h2>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required maxLength={200} className={field} />
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description (optional)" rows={2} className="w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900" />
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">When (optional)
            <input type="datetime-local" value={when} onChange={(e) => setWhen(e.target.value)} className={`mt-1 ${field}`} />
          </label>
          <label className="text-sm">Visibility
            <select value={vis} onChange={(e) => setVis(e.target.value)} className={`mt-1 ${field}`}>
              <option value="public">Public</option>
              <option value="members">Signed-in members</option>
              <option value="enrolled">Enrolled learners</option>
            </select>
          </label>
        </div>
        <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Player embed URL (from your RTMP/streaming service)" className={field} />
        <fieldset>
          <legend className="text-sm font-medium">Broadcast to</legend>
          <div className="mt-1 flex flex-wrap gap-3 text-sm">
            {tenants.map((t) => (
              <label key={t.id} className="flex items-center gap-1.5">
                <input type="checkbox" checked={picked.has(t.id)} onChange={() => toggle(t.id)} /> {t.name}
              </label>
            ))}
          </div>
        </fieldset>
        <button type="submit" disabled={busy || title.trim().length < 1 || picked.size === 0} className="min-h-10 rounded-md px-4 font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
          Create
        </button>
        {msg ? <p className="text-sm text-neutral-600 dark:text-neutral-400">{msg}</p> : null}
      </form>

      <div>
        <h2 className="font-semibold">This school&apos;s sessions</h2>
        {sessions.length === 0 ? (
          <p className="mt-2 text-sm text-neutral-500">None yet.</p>
        ) : (
          <ul className="mt-3 space-y-3">
            {sessions.map((s) => (
              <ManageRow key={s.id} s={s} busy={busy} onPatch={patch} onDelete={del} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ManageRow({
  s,
  busy,
  onPatch,
  onDelete,
}: {
  s: Session;
  busy: boolean;
  onPatch: (id: string, body: Record<string, unknown>) => void;
  onDelete: (id: string) => void;
}) {
  const [rec, setRec] = useState(s.recordingUrl ?? "");
  return (
    <li className="rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-medium">{s.title}</span>
        {s.isLive ? <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-700 dark:bg-red-900 dark:text-red-200">live</span> : null}
        <span className="text-xs text-neutral-500">{s.visibility}</span>
        <div className="ml-auto flex gap-2">
          <button type="button" disabled={busy} onClick={() => onPatch(s.id, { isLive: !s.isLive })} className="rounded border border-neutral-300 px-2 py-0.5 dark:border-neutral-700">
            {s.isLive ? "End" : "Go live"}
          </button>
          <button type="button" disabled={busy} onClick={() => onDelete(s.id)} className="rounded px-2 py-0.5 text-red-600">Delete</button>
        </div>
      </div>
      <div className="mt-2 flex gap-2">
        <input value={rec} onChange={(e) => setRec(e.target.value)} placeholder="Recording embed URL" className="min-h-9 flex-1 rounded-md border border-neutral-300 px-2 dark:border-neutral-700 dark:bg-neutral-900" />
        <button type="button" disabled={busy} onClick={() => onPatch(s.id, { recordingUrl: rec || null })} className="rounded-md border border-neutral-300 px-2 dark:border-neutral-700">Save recording</button>
      </div>
    </li>
  );
}
