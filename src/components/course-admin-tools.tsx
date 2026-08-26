"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AuditFlag {
  lessonTitle: string;
  question: string;
  answer: string;
  note: string;
}
interface AuditResult {
  audited: number;
  flagged: AuditFlag[];
  truncated: boolean;
}

interface FitFlag {
  lessonTitle: string;
  widget: string;
  suggested: string;
  note: string;
}
interface FitResult {
  audited: number;
  flagged: FitFlag[];
  truncated: boolean;
}

// Editor-only course tools: generate embeddings + set the navigation mode. CYOA
// crossroads appear on the lesson player once mode = cyoa AND embeddings exist.
// `index` reports how many published lessons are missing/behind their embedding — publishing
// auto-indexes, but lessons edited afterwards go stale until a manual re-index (this button).
export function CourseAdminTools({
  courseId,
  navigationMode,
  index,
}: {
  courseId: string;
  navigationMode: string;
  index?: { published: number; stale: number };
}) {
  const router = useRouter();
  const [pending, setPending] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [audit, setAudit] = useState<AuditResult | null>(null);
  const [fit, setFit] = useState<FitResult | null>(null);
  const stale = index && index.stale > 0;

  async function generateEmbeddings() {
    setPending("embed");
    setMsg(null);
    const r = await fetch(`/api/courses/${courseId}/generate-embeddings`, { method: "POST" });
    const d = await r.json().catch(() => ({}));
    setPending(null);
    setMsg(r.ok ? `Embedded ${d.embedded} lesson(s).` : (d.error ?? "Failed to embed."));
    if (r.ok) router.refresh(); // pull a fresh staleness count after re-indexing
  }

  async function auditReveals() {
    setPending("audit");
    setMsg(null);
    setAudit(null);
    const r = await fetch(`/api/courses/${courseId}/audit-reveals`, { method: "POST" });
    const d = await r.json().catch(() => ({}));
    setPending(null);
    if (!r.ok) {
      setMsg(d.error ?? "Couldn't audit reveals.");
      return;
    }
    setAudit(d as AuditResult);
  }

  // The SEMANTIC half of the assessment guardrail: "does this widget fit this content?" is a
  // judgment, so it is advisory here and never a build gate. The deterministic half runs in
  // `pnpm lint` (scripts/check-assessment-fit.ts).
  async function auditFit() {
    setPending("fit");
    setMsg(null);
    setFit(null);
    const r = await fetch(`/api/courses/${courseId}/audit-assessment-fit`, { method: "POST" });
    const d = await r.json().catch(() => ({}));
    setPending(null);
    if (!r.ok) {
      setMsg(d.error ?? "Couldn't audit assessment fit.");
      return;
    }
    setFit(d as FitResult);
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
          {pending === "embed" ? "Embedding…" : stale ? "Re-index lessons" : "Generate embeddings"}
        </button>
        {stale ? (
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
            {index!.stale} of {index!.published} lesson{index!.published === 1 ? "" : "s"} changed since last index
          </span>
        ) : index && index.published > 0 ? (
          <span className="text-xs text-green-700 dark:text-green-400">Index up to date ✓</span>
        ) : null}
        <button
          type="button"
          onClick={auditReveals}
          disabled={!!pending}
          className="min-h-9 rounded-md border border-neutral-300 px-3 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700"
        >
          {pending === "audit" ? "Auditing…" : "Audit reveals"}
        </button>
        <button
          type="button"
          onClick={auditFit}
          disabled={!!pending}
          className="min-h-9 rounded-md border border-neutral-300 px-3 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700"
        >
          {pending === "fit" ? "Checking fit…" : "Audit assessment fit"}
        </button>
        <span className="text-neutral-600">Navigation:</span>
        {modeBtn("linear", "Linear")}
        {modeBtn("cyoa", "CYOA")}
      </div>
      <p className="mt-2 text-xs text-neutral-600">
        CYOA crossroads appear on the lesson player once the mode is CYOA and embeddings are
        generated (needs a Gemini key). Publishing re-indexes automatically; re-index by hand after
        editing lessons on an already-published course. &ldquo;Audit reveals&rdquo; asks the AI
        whether each self-check answer is supported by its lesson (advisory, needs an AI key).
        &ldquo;Audit assessment fit&rdquo; asks whether each lesson uses the right WIDGET (scored
        quiz, typed exercise, or self-check reveal) for the content it wraps. Both are suggestions
        to verify, never gates: the mechanical half of the same check runs in{" "}
        <code>pnpm lint</code>.
      </p>
      {msg ? (
        <p role="status" className="mt-2 text-neutral-700 dark:text-neutral-300">
          {msg}
        </p>
      ) : null}
      {audit ? (
        <div role="status" className="mt-3 rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
          {audit.flagged.length === 0 ? (
            <p className="text-green-700 dark:text-green-400">
              Audited {audit.audited} self-check{audit.audited === 1 ? "" : "s"}, none looked wrong ✓
            </p>
          ) : (
            <>
              <p className="font-medium">
                {audit.flagged.length} of {audit.audited} self-check{audit.audited === 1 ? "" : "s"} may not match
                their lesson (AI suggestion, verify yourself):
              </p>
              <ul className="mt-2 space-y-2">
                {audit.flagged.map((f, i) => (
                  <li key={i} className="rounded border border-amber-200 bg-amber-50 p-2 dark:border-amber-900/50 dark:bg-amber-900/20">
                    <p className="text-xs font-semibold text-neutral-600">{f.lessonTitle}</p>
                    <p className="mt-0.5">
                      <span className="font-medium">Q:</span> {f.question}
                    </p>
                    <p>
                      <span className="font-medium">A:</span> {f.answer}
                    </p>
                    <p className="mt-1 text-amber-800 dark:text-amber-200">⚠ {f.note}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
          {audit.truncated ? (
            <p className="mt-2 text-xs text-neutral-600">
              Stopped early to keep the check fast; run again after fixing these to audit the rest.
            </p>
          ) : null}
        </div>
      ) : null}
      {fit ? (
        <div role="status" className="mt-3 rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
          {fit.flagged.length === 0 ? (
            <p className="text-green-700 dark:text-green-400">
              Checked {fit.audited} assessed lesson{fit.audited === 1 ? "" : "s"}, every widget fit its content ✓
            </p>
          ) : (
            <>
              <p className="font-medium">
                {fit.flagged.length} of {fit.audited} assessed lesson{fit.audited === 1 ? "" : "s"} may use the
                wrong widget (AI suggestion, verify yourself):
              </p>
              <ul className="mt-2 space-y-2">
                {fit.flagged.map((f, i) => (
                  <li key={i} className="rounded border border-amber-200 bg-amber-50 p-2 dark:border-amber-900/50 dark:bg-amber-900/20">
                    <p className="text-xs font-semibold text-neutral-600">{f.lessonTitle}</p>
                    <p className="mt-0.5">
                      Uses <span className="font-medium">{f.widget}</span>
                      {f.suggested && f.suggested !== "none" ? (
                        <>
                          , suggests <span className="font-medium">{f.suggested}</span>
                        </>
                      ) : null}
                    </p>
                    <p className="mt-1 text-amber-800 dark:text-amber-200">⚠ {f.note}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
          {fit.truncated ? (
            <p className="mt-2 text-xs text-neutral-600">
              Stopped early to keep the check fast; run again after fixing these to check the rest.
            </p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
