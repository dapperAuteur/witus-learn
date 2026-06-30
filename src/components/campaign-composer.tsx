"use client";

import { useState } from "react";

export interface CampaignView {
  id: string;
  subject: string;
  audience: string;
  status: string;
  createdAt: string;
}

// Compose + save email-campaign DRAFTS. No email is sent — the "Send" action is
// intentionally disabled until BAM signs off on audience + rules (see the note).
export function CampaignComposer({
  audience,
  initial,
}: {
  audience: { leads: number; enrolled: number };
  initial: CampaignView[];
}) {
  const [drafts, setDrafts] = useState<CampaignView[]>(initial);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [aud, setAud] = useState<"leads" | "enrolled">("leads");
  const [busy, setBusy] = useState(false);
  const count = aud === "leads" ? audience.leads : audience.enrolled;

  async function saveDraft(e: React.FormEvent) {
    e.preventDefault();
    if (busy || !subject.trim() || !body.trim()) return;
    setBusy(true);
    const res = await fetch("/api/admin/campaigns", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ subject, body, audience: aud }),
    });
    if (res.ok) {
      const { campaign } = await res.json();
      setDrafts((d) => [campaign, ...d]);
      setSubject("");
      setBody("");
    }
    setBusy(false);
  }

  const field = "w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <div className="space-y-6">
      <form onSubmit={saveDraft} className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold">New campaign (draft)</h2>
        <div className="mt-3 space-y-3">
          <label className="block text-sm font-medium">
            Audience
            <select value={aud} onChange={(e) => setAud(e.target.value as "leads" | "enrolled")} className={`mt-1 ${field}`}>
              <option value="leads">Leads ({audience.leads})</option>
              <option value="enrolled">Enrolled learners ({audience.enrolled})</option>
            </select>
          </label>
          <p className="text-xs text-neutral-500">This draft would reach <strong>{count}</strong> {aud}.</p>
          <label className="block text-sm font-medium">
            Subject
            <input value={subject} onChange={(e) => setSubject(e.target.value)} maxLength={200} className={`mt-1 ${field}`} />
          </label>
          <label className="block text-sm font-medium">
            Message
            <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={6} maxLength={20000} className={`mt-1 ${field}`} placeholder="Write your message…" />
          </label>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <button type="submit" disabled={busy || !subject.trim() || !body.trim()} className="min-h-11 rounded-md px-5 font-medium disabled:opacity-60" style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg, #fff)" }}>
            {busy ? "Saving…" : "Save draft"}
          </button>
          <button type="button" disabled title="Sending needs sign-off — see the note below" className="min-h-11 cursor-not-allowed rounded-md border border-neutral-300 px-5 font-medium text-neutral-400 dark:border-neutral-700">
            Send (disabled)
          </button>
        </div>
      </form>

      {drafts.length > 0 ? (
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Drafts</h2>
          <ul className="mt-2 space-y-2">
            {drafts.map((c) => (
              <li key={c.id} className="flex items-center justify-between gap-3 rounded-xl border border-neutral-200 px-4 py-3 dark:border-neutral-800">
                <div className="min-w-0">
                  <span className="block truncate font-medium">{c.subject}</span>
                  <span className="text-xs text-neutral-500">
                    {c.audience} · {c.status} · {new Date(c.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-800">{c.status}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
