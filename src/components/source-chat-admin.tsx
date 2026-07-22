"use client";

import { useEffect, useState } from "react";
import type { SourceChatConfig } from "@/db/queries/source-chat-config";

type Lens = "explain" | "examples" | "coach";
const AGENTS: { v: Lens; label: string }[] = [
  { v: "explain", label: "Explanation" },
  { v: "examples", label: "Examples" },
  { v: "coach", label: "Practice" },
];
const PROVIDERS = [
  { v: "", label: "Default (server)" },
  { v: "google", label: "Google (Gemini)" },
  { v: "anthropic", label: "Anthropic (Claude)" },
  { v: "openai", label: "OpenAI" },
];
const DEFAULT: SourceChatConfig = { stage: "owner", agents: ["explain", "examples"], provider: "", temperature: 0.2, topK: 6, grounding: "strict" };

interface Citation { n: number; kind: string; title: string | null; snippet: string }
interface ChatResult { answer: string; citations: Citation[]; agents: string[]; usedChunks: number }

const field = "w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900";

export function SourceChatAdmin({ courses }: { courses: { id: string; title: string }[] }) {
  const [courseId, setCourseId] = useState(courses[0]?.id ?? "");
  const [config, setConfig] = useState<SourceChatConfig>(DEFAULT);
  const [status, setStatus] = useState<{ kind: "ok" | "err"; msg: string } | null>(null);
  const [saving, setSaving] = useState(false);

  const [question, setQuestion] = useState("");
  const [asking, setAsking] = useState(false);
  const [result, setResult] = useState<ChatResult | null>(null);
  const [chatError, setChatError] = useState<string | null>(null);

  // Load the selected course's saved config.
  useEffect(() => {
    if (!courseId) return;
    let cancelled = false;
    void (async () => {
      const res = await fetch(`/api/admin/source-chat/config?courseId=${courseId}`);
      const data = (await res.json().catch(() => null)) as SourceChatConfig | null;
      if (!cancelled && data && res.ok) setConfig({ ...DEFAULT, ...data });
    })();
    return () => { cancelled = true; };
  }, [courseId]);

  function toggleAgent(a: Lens) {
    setConfig((c) => ({ ...c, agents: c.agents.includes(a) ? c.agents.filter((x) => x !== a) : [...c.agents, a] }));
  }

  async function save() {
    setSaving(true);
    setStatus(null);
    const res = await fetch("/api/admin/source-chat/config", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ courseId, config }),
    });
    const data = (await res.json().catch(() => ({}))) as SourceChatConfig & { error?: string };
    setSaving(false);
    if (res.ok) {
      setConfig({ ...DEFAULT, ...data });
      setStatus({ kind: "ok", msg: "Saved." });
    } else {
      setStatus({ kind: "err", msg: data.error ?? "Could not save." });
    }
  }

  async function ask() {
    if (!question.trim()) return;
    setAsking(true);
    setChatError(null);
    setResult(null);
    const res = await fetch(`/api/courses/${courseId}/source-chat`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ question: question.trim(), config }),
    });
    const data = (await res.json().catch(() => ({}))) as ChatResult & { error?: string };
    setAsking(false);
    if (res.ok) setResult(data);
    else setChatError(data.error ?? "Chat failed.");
  }

  return (
    <div className="space-y-6">
      <label className="block text-sm">
        Course
        <select value={courseId} onChange={(e) => setCourseId(e.target.value)} className={`mt-1 ${field}`}>
          {courses.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
        </select>
      </label>

      <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 className="font-semibold">Config</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="block text-sm">
            Who can use it
            <select value={config.stage} onChange={(e) => setConfig((c) => ({ ...c, stage: e.target.value as SourceChatConfig["stage"] }))} className={`mt-1 ${field}`}>
              <option value="owner">Owner / instructor only (test)</option>
              <option value="invited">+ Enrolled learners (invited)</option>
              <option value="paid">+ Enrolled on a paid course</option>
            </select>
          </label>
          <label className="block text-sm">
            Grounding
            <select value={config.grounding} onChange={(e) => setConfig((c) => ({ ...c, grounding: e.target.value as "strict" | "mixed" }))} className={`mt-1 ${field}`}>
              <option value="strict">Strict, answer only from the sources</option>
              <option value="mixed">Mixed, sources + labeled general knowledge</option>
            </select>
          </label>
          <label className="block text-sm">
            Provider
            <select value={config.provider} onChange={(e) => setConfig((c) => ({ ...c, provider: e.target.value }))} className={`mt-1 ${field}`}>
              {PROVIDERS.map((p) => <option key={p.v} value={p.v}>{p.label}</option>)}
            </select>
          </label>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="block text-sm">
              Temperature
              <input type="number" step="0.1" min={0} max={1} value={config.temperature} onChange={(e) => setConfig((c) => ({ ...c, temperature: Number(e.target.value) }))} className={`mt-1 ${field}`} />
            </label>
            <label className="block text-sm">
              Top-k
              <input type="number" min={1} max={12} value={config.topK} onChange={(e) => setConfig((c) => ({ ...c, topK: Number(e.target.value) }))} className={`mt-1 ${field}`} />
            </label>
          </div>
        </div>
        <fieldset className="mt-3">
          <legend className="text-sm">Agents</legend>
          <div className="mt-1 flex flex-wrap gap-3">
            {AGENTS.map((a) => (
              <label key={a.v} className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={config.agents.includes(a.v)} onChange={() => toggleAgent(a.v)} className="h-4 w-4" />
                {a.label}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="mt-4 flex items-center gap-3">
          <button type="button" onClick={save} disabled={saving} className="min-h-9 rounded-md px-4 text-sm font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
            {saving ? "Saving…" : "Save config"}
          </button>
          {status ? <span role="status" className={`text-sm ${status.kind === "ok" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>{status.msg}</span> : null}
        </div>
      </section>

      <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 className="font-semibold">Test chat</h2>
        <p className="mt-1 text-xs text-neutral-500">Runs with the unsaved config above, so you can tune before saving.</p>
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} rows={2} placeholder="Ask a question about this course's sources…" className={`mt-2 ${field}`} />
        <button type="button" onClick={ask} disabled={asking || !question.trim()} className="mt-2 min-h-9 rounded-md border border-neutral-300 px-4 text-sm font-medium disabled:opacity-60 dark:border-neutral-700">
          {asking ? "Thinking…" : "Ask"}
        </button>
        {chatError ? <p role="alert" className="mt-3 text-sm text-red-600 dark:text-red-400">{chatError}</p> : null}
        {result ? (
          <div className="mt-4 space-y-3">
            <div className="whitespace-pre-wrap rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900">{result.answer}</div>
            <div className="text-xs text-neutral-500">
              {result.usedChunks} chunk(s) retrieved · agents: {result.agents.join(", ") || "-"}
            </div>
            {result.citations.length ? (
              <ol className="space-y-1 text-xs text-neutral-500">
                {result.citations.map((c) => (
                  <li key={c.n}>[{c.n}] <span className="font-medium">{c.kind}</span>{c.title ? ` · ${c.title}` : ""}: {c.snippet}…</li>
                ))}
              </ol>
            ) : null}
          </div>
        ) : null}
      </section>
    </div>
  );
}
