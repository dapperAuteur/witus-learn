"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  RUBRIC_CRITERIA,
  RUBRIC_SCORES,
  suggestVerdict,
  type RubricScore,
  type RubricState,
} from "@/lib/field-log-rubric";
import { postJson } from "./client";

// The reviewer's rubric form. Scores each criterion + the safety gate, suggests a verdict from the
// rubric rule (trust pillars must be Met), lets the reviewer confirm, and submits. Failure paths
// surface a clear message (via the shared client helper).
export function ReviewForm({
  projectId,
  initial,
}: {
  projectId: string;
  initial: { verdict: "endorse" | "revise" | null; rubric: RubricState | null; body: string | null };
}) {
  const router = useRouter();
  const [gate, setGate] = useState<"pass" | "fail">(initial.rubric?.gate ?? "pass");
  const [criteria, setCriteria] = useState<Record<string, RubricScore>>(
    initial.rubric?.criteria ?? Object.fromEntries(RUBRIC_CRITERIA.map((c) => [c.id, "developing" as RubricScore])),
  );
  const [body, setBody] = useState(initial.body ?? "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const suggested = useMemo<"endorse" | "revise">(() => suggestVerdict({ gate, criteria }), [gate, criteria]);
  const [verdict, setVerdict] = useState<"endorse" | "revise" | null>(initial.verdict);
  const effectiveVerdict = verdict ?? suggested;

  const field = "rounded-md border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-900";

  async function submit() {
    setSaving(true);
    setError(null);
    const res = await postJson(`/api/field-log/projects/${projectId}/reviews`, {
      verdict: effectiveVerdict,
      rubric: { gate, criteria } satisfies RubricState,
      body: body.trim() || null,
    });
    setSaving(false);
    if (res.ok) {
      setDone(true);
      router.refresh();
    } else {
      setError(res.error);
    }
  }

  if (done) {
    return (
      <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
        Review submitted, thank you. You can{" "}
        <button type="button" onClick={() => router.push("/field-log/review")} className="underline">
          review another project
        </button>.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={gate === "pass"} onChange={(e) => setGate(e.target.checked ? "pass" : "fail")} className="h-4 w-4" />
          <span>
            <strong>Safety/legal floor passes</strong>, no prohibited content, no subject endangered.
            Uncheck to force a revise.
          </span>
        </label>
      </div>

      <ul className="space-y-3">
        {RUBRIC_CRITERIA.map((c) => (
          <li key={c.id} className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-sm font-medium">{c.label}</span>
                {c.bar === "met" ? <span className="ml-2 text-xs text-red-600 dark:text-red-400">must be Met</span> : <span className="ml-2 text-xs text-neutral-500">developing OK</span>}
              </div>
              <select value={criteria[c.id] ?? "developing"} onChange={(e) => setCriteria((p) => ({ ...p, [c.id]: e.target.value as RubricScore }))} className={field}>
                {RUBRIC_SCORES.filter((s) => c.naAllowed || s.v !== "na").map((s) => (
                  <option key={s.v} value={s.v}>{s.label}</option>
                ))}
              </select>
            </div>
            <p className="mt-1 text-xs text-neutral-500">{c.hint}</p>
          </li>
        ))}
      </ul>

      <label className="block text-sm">
        Notes for the author (what to fix, what worked)
        <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={3} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900" />
      </label>

      <div className="flex flex-wrap items-center gap-3 rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
        <span className="text-sm">
          Rubric suggests: <strong className={suggested === "endorse" ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}>{suggested}</strong>
        </span>
        <label className="flex items-center gap-1 text-sm">
          <input type="radio" name="verdict" checked={effectiveVerdict === "endorse"} onChange={() => setVerdict("endorse")} /> Endorse
        </label>
        <label className="flex items-center gap-1 text-sm">
          <input type="radio" name="verdict" checked={effectiveVerdict === "revise"} onChange={() => setVerdict("revise")} /> Needs revision
        </label>
      </div>

      {error ? <p role="alert" className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}

      <button type="button" onClick={submit} disabled={saving} className="min-h-10 rounded-md px-5 text-sm font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
        {saving ? "Submitting…" : "Submit review"}
      </button>
    </div>
  );
}
