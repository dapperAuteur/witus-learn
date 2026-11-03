"use client";

import { useState } from "react";
import Link from "next/link";
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

/** The course chat's source index, by the same rule as /admin/rag (getCourseIndexState). */
export interface SourceIndexStatus {
  state: "never" | "changed" | "current" | "empty";
  chunkCount: number;
  indexedAt: Date | string | null;
}

// Editor-only course tools. Two DIFFERENT indexes live here, and the labels keep them apart (BAM, 2026-11-03,
// after "118 of 118 lessons changed since last index" read like the chat's index):
//   - the CYOA crossroads index: Gemini `lesson_embeddings`, built by "Generate crossroads embeddings" / "Re-index
//     crossroads" (/api/courses/[id]/generate-embeddings). It only picks the "where next" lessons on the lesson
//     player in CYOA mode, so it is shown only when the course's navigation is CYOA. `index` counts published
//     lessons missing or behind their embedding; publishing auto-indexes, later edits need this button.
//   - the course chat's source index: Mistral `source_chunks`, built on /admin/rag (platform owner), by
//     `pnpm rag:index`, or by the seed workflow after a merge. `sourceIndex` is its one-line status.
export function CourseAdminTools({
  courseId,
  navigationMode,
  index,
  sourceIndex,
  viewerIsOwner = false,
  geminiConfigured = true,
}: {
  courseId: string;
  navigationMode: string;
  /** CYOA crossroads index staleness; pass it only when the navigation mode is CYOA. */
  index?: { published: number; stale: number };
  sourceIndex?: SourceIndexStatus | null;
  viewerIsOwner?: boolean;
  /** Whether this deployment has GOOGLE_GEMINI_API_KEY; the crossroads embedder is Gemini-only. */
  geminiConfigured?: boolean;
}) {
  const router = useRouter();
  const [pending, setPending] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [audit, setAudit] = useState<AuditResult | null>(null);
  const [fit, setFit] = useState<FitResult | null>(null);
  const stale = index && index.stale > 0;
  const cyoa = navigationMode === "cyoa";

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
      <SourceIndexLine status={sourceIndex ?? null} viewerIsOwner={viewerIsOwner} />
      {cyoa ? (
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="font-medium">CYOA crossroads index:</span>
          <button
            type="button"
            onClick={generateEmbeddings}
            disabled={!!pending || !geminiConfigured}
            className="min-h-9 rounded-md border border-neutral-300 px-3 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700"
          >
            {pending === "embed" ? "Embedding…" : stale ? "Re-index crossroads" : "Generate crossroads embeddings"}
          </button>
          {stale ? (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
              {index!.stale} of {index!.published} lesson{index!.published === 1 ? "" : "s"} changed since the last crossroads index
            </span>
          ) : index && index.published > 0 ? (
            <span className="text-xs text-green-700 dark:text-green-400">Crossroads index up to date ✓</span>
          ) : null}
          {!geminiConfigured ? (
            <p role="status" className="w-full text-xs text-amber-800 dark:text-amber-200">
              This deployment has no Gemini key (GOOGLE_GEMINI_API_KEY), so the crossroads index can&apos;t be built or
              refreshed here. Lessons already embedded keep their crossroads; new or edited ones get none. The course
              chat is not affected: it uses its own Mistral index.
            </p>
          ) : null}
        </div>
      ) : null}
      <div className="mt-3 flex flex-wrap items-center gap-3">
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
        {cyoa
          ? "The crossroads index only picks the CYOA \u201cwhere next\u201d lessons on the lesson player (Gemini key needed); it is not the course chat's index. Publishing re-indexes it automatically; re-index by hand after editing lessons on an already-published course. "
          : `Switch navigation to CYOA to get crossroads on the lesson player; its index appears here then${geminiConfigured ? "" : " (it needs a Gemini key, which this deployment doesn't have)"}. `}
        &ldquo;Audit reveals&rdquo; asks the AI
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

/** One line: is the course chat's source index current? Owner gets the /admin/rag link; others are told who runs it. */
function SourceIndexLine({ status, viewerIsOwner }: { status: SourceIndexStatus | null; viewerIsOwner: boolean }) {
  if (!status) return null;
  const when = status.indexedAt ? new Date(status.indexedAt).toISOString().slice(0, 10) : null;
  const text =
    status.state === "current"
      ? `current (${status.chunkCount} passage${status.chunkCount === 1 ? "" : "s"}${when ? `, indexed ${when}` : ""}) ✓`
      : status.state === "changed"
        ? `needs indexing: the course changed since ${when ? `it was indexed on ${when}` : "it was indexed"}`
        : status.state === "never"
          ? "needs indexing: never indexed, so the course chat is hidden"
          : "nothing to index yet (no lesson text or sources)";
  const ok = status.state === "current" || status.state === "empty";
  return (
    <p className="mt-3 text-sm">
      <span className="font-medium">Course chat source index:</span>{" "}
      <span className={ok ? "text-green-700 dark:text-green-400" : "text-amber-800 dark:text-amber-200"}>{text}</span>
      {!ok ? (
        viewerIsOwner ? (
          <>
            {" "}
            <Link href="/admin/rag" className="underline" style={{ color: "var(--accent)" }}>
              Index it on Source chat index
            </Link>
          </>
        ) : (
          " The platform owner re-indexes it (Admin, Source chat index)."
        )
      ) : null}
    </p>
  );
}
