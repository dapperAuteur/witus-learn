"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type {
  DocumentationProject,
  FieldLogChecklist,
  ProjectCapture,
  ProjectComment,
  ProjectLeg,
  ProjectReview,
} from "@/db/schema/field-log";
import { CREDENTIAL_ENDORSEMENTS_REQUIRED, endorsementCount } from "@/lib/field-log-rubric";
import { templateByKey, type FieldLogTemplate } from "@/lib/field-log-templates";
import { splitNoteLinks } from "@/lib/note-links";
import { patchJson, postJson } from "./client";
import { UseInLesson } from "./use-in-lesson";

// Education, not legal advice — jurisdiction varies (see plans/future/15-field-log-safety-legal.md).
const CONSENT_DISCLAIMER =
  "Trust starts with consent. Log who's in each capture and whether they agreed. If someone declines, don't publish them. For anyone under 18, get a parent/guardian's yes. Laws vary by place, this is guidance, not legal advice.";

const CONSENT_OPTIONS = [
  { v: "na", label: "No identifiable person" },
  { v: "verbal_recorded", label: "Verbal (recorded)" },
  { v: "written", label: "Written" },
  { v: "on_record", label: "On the record" },
  { v: "declined", label: "Declined, do not publish" },
] as const;
const CAPTURE_KINDS = ["photo", "audio", "video", "document", "interview", "artifact", "note"] as const;
const SITE_TYPES = ["farm", "factory", "office", "market", "home", "public-space", "archive", "other"] as const;

/** Visited ticks made offline, keyed by leg id, replayed when the connection returns. */
type VisitQueue = Record<string, boolean>;

function readVisitQueue(key: string): VisitQueue {
  try {
    const q = JSON.parse(localStorage.getItem(key) ?? "{}");
    return q && typeof q === "object" ? (q as VisitQueue) : {};
  } catch {
    return {};
  }
}

function writeVisitQueue(key: string, q: VisitQueue) {
  try {
    localStorage.setItem(key, JSON.stringify(q));
  } catch {
    /* storage full / disabled: the tick stays on screen this session and is retried while it lasts */
  }
}

type PendingCapture = { tempId: string; body: Record<string, unknown>; subject: string; kind: string; consentStatus: string };

const field = "w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900";

export function ProjectWorkspace({
  initial,
  me,
  canUseInLesson = false,
}: {
  initial: {
    project: DocumentationProject;
    legs: ProjectLeg[];
    captures: ProjectCapture[];
    comments: ProjectComment[];
    reviews: ProjectReview[];
  };
  me: { id: string; name?: string | null };
  /** The server found an empty tour slot this viewer may fill (tours from the field, plans/93). */
  canUseInLesson?: boolean;
}) {
  const reviews = initial.reviews;
  const [project, setProject] = useState(initial.project);
  const [checklist, setChecklist] = useState<FieldLogChecklist>(
    (initial.project.checklist as FieldLogChecklist | null) ?? { stages: [] },
  );
  const [legs, setLegs] = useState(initial.legs);
  const [captures, setCaptures] = useState(initial.captures);
  const [comments, setComments] = useState(initial.comments);
  const [tab, setTab] = useState<"checklist" | "legs" | "captures" | "journal" | "reviews">("checklist");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<PendingCapture[]>([]);
  const [pendingVisits, setPendingVisits] = useState(0);

  const projectId = project.id;
  const pendingKey = `fieldlog:pending:${projectId}`;
  const visitKey = `fieldlog:visited:${projectId}`;
  const template = useMemo(() => templateByKey(project.templateKey), [project.templateKey]);

  const fail = useCallback((msg: string) => setError(msg), []);

  // ── Offline capture queue ──────────────────────────────────────────────────
  const flush = useCallback(async () => {
    let queue: PendingCapture[] = [];
    try {
      queue = JSON.parse(localStorage.getItem(pendingKey) ?? "[]");
    } catch {
      queue = [];
    }
    if (queue.length === 0) return; // initial state is already [] — nothing to set before the first await
    const remaining: PendingCapture[] = [];
    for (const item of queue) {
      const res = await postJson<ProjectCapture>(`/api/field-log/projects/${projectId}/captures`, item.body);
      if (res.ok) setCaptures((prev) => [res.data, ...prev]);
      else if (res.offline) remaining.push(item); // still offline — keep the rest queued
      else fail(res.error); // a real rejection (e.g. bad link) — drop it so it can't loop
    }
    localStorage.setItem(pendingKey, JSON.stringify(remaining));
    setPending(remaining);
  }, [pendingKey, projectId, fail]);

  // ── Offline visited ticks ──────────────────────────────────────────────────
  // Same contract as the capture queue: still offline keeps the tick queued (and on screen), a real
  // rejection drops it and says why. setState happens only after an await.
  const flushVisits = useCallback(async () => {
    const queue = readVisitQueue(visitKey);
    const ids = Object.keys(queue);
    if (ids.length === 0) return;
    const remaining: VisitQueue = {};
    for (const legId of ids) {
      const res = await patchJson<ProjectLeg>(`/api/field-log/projects/${projectId}/legs/${legId}`, { visited: queue[legId] });
      if (res.ok) setLegs((prev) => prev.map((l) => (l.id === legId ? res.data : l)));
      else if (res.offline) remaining[legId] = queue[legId];
      else fail(res.error);
    }
    writeVisitQueue(visitKey, remaining);
    setPendingVisits(Object.keys(remaining).length);
    // Still-queued ticks win over the server copy on screen, so a reload offline shows what was ticked.
    setLegs((prev) => prev.map((l) => (l.id in remaining ? { ...l, visited: remaining[l.id] } : l)));
  }, [visitKey, projectId, fail]);

  const syncAll = useCallback(async () => {
    await flush();
    await flushVisits();
  }, [flush, flushVisits]);

  useEffect(() => {
    // Sync the offline queues with the server on mount + when connectivity returns.
    // flush() and flushVisits() only call setState AFTER an await (never synchronously).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void syncAll();
    const onOnline = () => void syncAll();
    window.addEventListener("online", onOnline);
    return () => window.removeEventListener("online", onOnline);
  }, [syncAll]);

  // ── Checklist ──────────────────────────────────────────────────────────────
  const progress = useMemo(() => {
    let done = 0;
    let total = 0;
    for (const s of checklist.stages) for (const i of s.items) {
      total += 1;
      if (i.done) done += 1;
    }
    return { done, total };
  }, [checklist]);

  // Gentle, data-driven reminders (in-app; email/cron delivery is a follow-up).
  const reminders = useMemo(() => {
    const out: string[] = [];
    const now = new Date();
    const noLink = captures.filter((c) => !c.storageUrl).length;
    if (noLink) out.push(`${noLink} capture(s) have no media link yet, back up your files and add the link.`);
    const naWithSubject = captures.filter((c) => c.consentStatus === "na" && c.subject).length;
    if (naWithSubject) out.push(`${naWithSubject} capture(s) have a subject but no consent logged, double-check any people are covered.`);
    const declined = captures.filter((c) => c.consentStatus === "declined").length;
    if (declined) out.push(`${declined} subject(s) declined, don't publish them.`);
    const overdue = legs.filter((l) => l.startDate && !l.visited && new Date(l.startDate) < now).length;
    if (overdue) out.push(`${overdue} planned leg(s) are past their date, revisit or mark visited.`);
    return out;
  }, [captures, legs]);

  async function saveChecklist(next: FieldLogChecklist) {
    setChecklist(next);
    const res = await patchJson<DocumentationProject>(`/api/field-log/projects/${projectId}`, { checklist: next });
    if (!res.ok) fail(res.error);
  }

  function toggleItem(sIdx: number, iIdx: number) {
    const next: FieldLogChecklist = {
      stages: checklist.stages.map((s, si) =>
        si !== sIdx ? s : { ...s, items: s.items.map((it, ii) => (ii !== iIdx ? it : { ...it, done: !it.done })) },
      ),
    };
    void saveChecklist(next);
  }
  function editNote(sIdx: number, iIdx: number, note: string) {
    setChecklist((prev) => ({
      stages: prev.stages.map((s, si) =>
        si !== sIdx ? s : { ...s, items: s.items.map((it, ii) => (ii !== iIdx ? it : { ...it, note })) },
      ),
    }));
  }

  async function patchProject(patch: Record<string, unknown>) {
    const res = await patchJson<DocumentationProject>(`/api/field-log/projects/${projectId}`, patch);
    if (res.ok) setProject(res.data);
    else fail(res.error);
  }

  // ── Legs ───────────────────────────────────────────────────────────────────
  async function addLeg(input: Record<string, unknown>) {
    const res = await postJson<ProjectLeg>(`/api/field-log/projects/${projectId}/legs`, input);
    if (res.ok) setLegs((prev) => [...prev, res.data]);
    else fail(res.error);
    return res.ok;
  }

  // Tick a leg visited (or untick it). Optimistic; offline queues the tick instead of losing it.
  async function setVisited(legId: string, visited: boolean) {
    setLegs((prev) => prev.map((l) => (l.id === legId ? { ...l, visited } : l)));
    const res = await patchJson<ProjectLeg>(`/api/field-log/projects/${projectId}/legs/${legId}`, { visited });
    if (res.ok) {
      setLegs((prev) => prev.map((l) => (l.id === legId ? res.data : l)));
      return;
    }
    if (res.offline) {
      const queue = { ...readVisitQueue(visitKey), [legId]: visited };
      writeVisitQueue(visitKey, queue);
      setPendingVisits(Object.keys(queue).length);
      return;
    }
    setLegs((prev) => prev.map((l) => (l.id === legId ? { ...l, visited: !visited } : l)));
    fail(res.error);
  }

  // ── Captures (with offline queue) ────────────────────────────────────────────
  async function addCapture(body: Record<string, unknown>, meta: { subject: string; kind: string; consentStatus: string }) {
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      queueCapture(body, meta);
      return true;
    }
    const res = await postJson<ProjectCapture>(`/api/field-log/projects/${projectId}/captures`, body);
    if (res.ok) {
      setCaptures((prev) => [res.data, ...prev]);
      return true;
    }
    if (res.offline) {
      queueCapture(body, meta);
      return true;
    }
    fail(res.error);
    return false;
  }
  function queueCapture(body: Record<string, unknown>, meta: { subject: string; kind: string; consentStatus: string }) {
    const item: PendingCapture = { tempId: `${Date.now()}-${pending.length}`, body, ...meta };
    const next = [...pending, item];
    setPending(next);
    try {
      localStorage.setItem(pendingKey, JSON.stringify(next));
    } catch {
      /* storage full / disabled — the item stays in memory this session */
    }
  }

  // ── Journal ──────────────────────────────────────────────────────────────────
  async function addComment(body: string) {
    const res = await postJson<{ ok: true }>(`/api/field-log/projects/${projectId}/comments`, { body });
    if (res.ok) {
      setComments((prev) => [
        { id: `local-${Date.now()}`, projectId, userId: me.id, body, createdAt: new Date() } as ProjectComment,
        ...prev,
      ]);
      return true;
    }
    fail(res.error);
    return false;
  }

  const tabs = [
    { key: "checklist", label: `Checklist ${progress.total ? `(${progress.done}/${progress.total})` : ""}` },
    { key: "legs", label: `Legs (${legs.filter((l) => l.visited).length}/${legs.length})` },
    { key: "captures", label: `Captures (${captures.length}${pending.length ? ` +${pending.length}` : ""})` },
    { key: "journal", label: `Journal (${comments.length})` },
    { key: "reviews", label: `Reviews (${reviews.length})` },
  ] as const;

  return (
    <section aria-label="Project workspace">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/field-log" className="text-sm text-neutral-600 hover:underline">← My Field Log</Link>
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="mt-1 text-xs text-neutral-600">
            {project.status} · {project.visibility}
            {project.selfAttestedAt ? " · self-attested" : ""}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <a href={`/api/field-log/projects/${projectId}/export`} className="rounded-md border border-neutral-300 px-3 py-1.5 dark:border-neutral-700">
            Export JSON
          </a>
          <Link href={`/field-log/${projectId}/export`} className="rounded-md border border-neutral-300 px-3 py-1.5 dark:border-neutral-700">
            Print / PDF
          </Link>
          {project.visibility === "private" ? (
            <button
              type="button"
              onClick={() => patchProject({ selfAttest: true, visibility: "in_review" })}
              className="rounded-md px-3 py-1.5 font-medium text-white"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Self-attest &amp; request review
            </button>
          ) : null}
        </div>
      </div>

      {error ? (
        <div role="alert" className="mt-4 flex items-start justify-between gap-3 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
          <span>{error}</span>
          <button type="button" onClick={() => setError(null)} className="shrink-0 underline">Dismiss</button>
        </div>
      ) : null}
      {pending.length ? (
        <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:bg-amber-950 dark:text-amber-300">
          {pending.length} capture(s) saved offline, they’ll sync when you’re back online.
        </p>
      ) : null}
      {pendingVisits ? (
        <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:bg-amber-950 dark:text-amber-300">
          {pendingVisits} visited tick(s) saved offline, they’ll sync when you’re back online.
        </p>
      ) : null}
      {reminders.length ? (
        <details className="mt-3 rounded-md border border-neutral-200 p-3 text-sm dark:border-neutral-800">
          <summary className="cursor-pointer font-medium">Reminders ({reminders.length})</summary>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-600 dark:text-neutral-400">
            {reminders.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </details>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2 border-b border-neutral-200 dark:border-neutral-800">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`min-h-9 px-3 text-sm ${tab === t.key ? "border-b-2 font-semibold" : "text-neutral-600"}`}
            style={tab === t.key ? { borderColor: "var(--accent)" } : undefined}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-5">
        {tab === "checklist" ? (
          <ChecklistTab checklist={checklist} template={template} onToggle={toggleItem} onNote={editNote} onNoteBlur={() => saveChecklist(checklist)} />
        ) : null}
        {tab === "legs" ? (
          <LegsTab
            legs={legs}
            chainMode={project.chainMode}
            onChainMode={(v) => patchProject({ chainMode: v })}
            onAdd={addLeg}
            onVisited={setVisited}
            tours={
              canUseInLesson
                ? { projectId, onLegUpdated: (leg) => setLegs((prev) => prev.map((l) => (l.id === leg.id ? leg : l))) }
                : null
            }
          />
        ) : null}
        {tab === "captures" ? (
          <CapturesTab captures={captures} pending={pending} legs={legs} onAdd={addCapture} />
        ) : null}
        {tab === "journal" ? <JournalTab comments={comments} onAdd={addComment} /> : null}
        {tab === "reviews" ? <ReviewsTab reviews={reviews} project={project} /> : null}
      </div>
    </section>
  );
}

function ReviewsTab({ reviews, project }: { reviews: ProjectReview[]; project: DocumentationProject }) {
  const endorsements = endorsementCount(reviews);
  const selfAttested = Boolean(project.selfAttestedAt);
  const meets = selfAttested && endorsements >= CREDENTIAL_ENDORSEMENTS_REQUIRED;
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-neutral-200 p-4 text-sm dark:border-neutral-800">
        <p>
          Endorsements: <strong>{endorsements}/{CREDENTIAL_ENDORSEMENTS_REQUIRED}</strong> · self-attested: <strong>{selfAttested ? "yes" : "no"}</strong>
        </p>
        <p className={`mt-1 ${meets ? "text-emerald-600 dark:text-emerald-400" : "text-neutral-600"}`}>
          {meets ? "✓ Meets the credential bar" : "Not yet, needs self-attest + 2 endorsements."}
        </p>
        {project.visibility === "private" ? (
          <p className="mt-1 text-xs text-neutral-600">Use “Self-attest &amp; request review” above to open this to peer reviewers.</p>
        ) : null}
      </div>
      <ul className="space-y-2">
        {reviews.map((r) => (
          <li key={r.id} className="rounded-md border border-neutral-200 p-3 text-sm dark:border-neutral-800">
            <div className="flex items-center justify-between">
              <span className={`font-medium ${r.verdict === "endorse" ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}`}>
                {r.verdict === "endorse" ? "Endorsed" : "Needs revision"}
              </span>
              <span className="text-xs text-neutral-600">{new Date(r.createdAt).toLocaleDateString()}</span>
            </div>
            {r.body ? <p className="mt-1 whitespace-pre-wrap text-neutral-600 dark:text-neutral-400">{r.body}</p> : null}
          </li>
        ))}
        {reviews.length === 0 ? <li className="text-sm text-neutral-600">No reviews yet.</li> : null}
      </ul>
    </div>
  );
}

function ChecklistTab({
  checklist,
  template,
  onToggle,
  onNote,
  onNoteBlur,
}: {
  checklist: FieldLogChecklist;
  template: FieldLogTemplate | undefined;
  onToggle: (s: number, i: number) => void;
  onNote: (s: number, i: number, note: string) => void;
  onNoteBlur: () => void;
}) {
  return (
    <div className="space-y-5">
      {checklist.stages.map((stage, si) => (
        <div key={stage.key} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <h2 className="font-semibold capitalize">{stageTitle(template, stage.key)}</h2>
          <ul className="mt-2 space-y-2">
            {stage.items.map((it, ii) => (
              <li key={it.id}>
                <label className="flex items-start gap-2 text-sm">
                  <input type="checkbox" checked={it.done} onChange={() => onToggle(si, ii)} className="mt-1 h-4 w-4" />
                  <span className={it.done ? "text-neutral-600 line-through" : ""}>{itemLabel(template, stage.key, it.id)}</span>
                </label>
                <input
                  value={it.note}
                  onChange={(e) => onNote(si, ii, e.target.value)}
                  onBlur={onNoteBlur}
                  placeholder="Notes…"
                  className={`mt-1 ml-6 ${field} text-sm`}
                  aria-label="Item note"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// The checklist snapshot stores ids + notes; labels live in the template (the label text isn't
// snapshotted, to keep the row small). Read the label from the project's template, and fall back to
// the id prettified only for an item the template no longer has.
function itemLabel(template: FieldLogTemplate | undefined, stageKey: string, id: string): string {
  const label = template?.stages.find((s) => s.key === stageKey)?.items.find((i) => i.id === id)?.label;
  return label ?? id.replace(/^[a-z]+-/, "").replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

function stageTitle(template: FieldLogTemplate | undefined, stageKey: string): string {
  return template?.stages.find((s) => s.key === stageKey)?.title ?? stageKey;
}

// Leg notes render as text with links (see splitNoteLinks): site paths become in-app links, and
// http(s) URLs open in a new tab.
function NoteText({ text }: { text: string }) {
  return (
    <>
      {splitNoteLinks(text).map((seg, i) =>
        !seg.href ? (
          seg.text
        ) : seg.external ? (
          <a key={i} href={seg.href} target="_blank" rel="noopener noreferrer" className="underline">{seg.text}</a>
        ) : (
          <Link key={i} href={seg.href} className="underline">{seg.text}</Link>
        ),
      )}
    </>
  );
}

function LegsTab({
  legs,
  chainMode,
  onChainMode,
  onAdd,
  onVisited,
  tours,
}: {
  legs: ProjectLeg[];
  chainMode: boolean;
  onChainMode: (v: boolean) => void;
  onAdd: (input: Record<string, unknown>) => Promise<boolean>;
  onVisited: (legId: string, visited: boolean) => void;
  /** Present only when this viewer may fill a lesson's tour slot: "Use in a lesson" per leg. */
  tours: { projectId: string; onLegUpdated: (leg: ProjectLeg) => void } | null;
}) {
  const visitedCount = legs.filter((l) => l.visited).length;
  const nextLeg = legs.find((l) => !l.visited);
  const [name, setName] = useState("");
  const [siteType, setSiteType] = useState<string>("other");
  const [locationLabel, setLocationLabel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [permissionNote, setPermissionNote] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    const ok = await onAdd({
      name: name.trim(),
      siteType,
      locationLabel: locationLabel.trim() || null,
      startDate: startDate || null,
      permissionNote: permissionNote.trim() || null,
    });
    setSaving(false);
    if (ok) {
      setName("");
      setLocationLabel("");
      setStartDate("");
      setPermissionNote("");
    }
  }

  return (
    <div className="space-y-4">
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={chainMode} onChange={(e) => onChainMode(e.target.checked)} className="h-4 w-4" />
        Chain mode, view legs as the nodes of a chain (grower → factory → boardroom)
      </label>

      {legs.length ? (
        <p className="text-sm">
          <span className="font-medium">{visitedCount} of {legs.length} visited.</span>{" "}
          {nextLeg ? (
            <a href={`#leg-${nextLeg.id}`} className="underline">Next stop: {nextLeg.name}</a>
          ) : (
            "Every stop visited."
          )}
        </p>
      ) : null}

      <ol className="space-y-2">
        {legs.map((leg, i) => (
          <li
            key={leg.id}
            id={`leg-${leg.id}`}
            className={`scroll-mt-4 rounded-md border p-3 text-sm ${leg.visited ? "border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900" : "border-neutral-300 dark:border-neutral-700"}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className={`font-medium ${leg.visited ? "text-neutral-600 dark:text-neutral-400" : ""}`}>
                  {chainMode ? `${i + 1}. ` : ""}{leg.name}
                  {leg.siteType ? <span className="ml-2 text-xs font-normal text-neutral-600">{leg.siteType}</span> : null}
                </div>
                <div className="text-xs text-neutral-600">
                  {leg.locationLabel ?? ""}{leg.startDate ? ` · ${leg.startDate}` : ""}
                </div>
              </div>
              <label className="flex min-h-11 shrink-0 cursor-pointer items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={leg.visited}
                  onChange={(e) => onVisited(leg.id, e.target.checked)}
                  className="h-5 w-5"
                  aria-label={`Visited: ${leg.name}`}
                />
                Visited
              </label>
            </div>
            {leg.lat != null && leg.lng != null ? (
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${leg.lat},${leg.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-8 items-center text-xs underline pointer-coarse:min-h-11"
                aria-label={`Directions to ${leg.name} (opens Google Maps)`}
              >
                Directions
              </a>
            ) : null}
            {leg.permissionNote ? (
              <p className="mt-1 break-words text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-medium">Permission:</span> {leg.permissionNote}
              </p>
            ) : null}
            {leg.notes ? (
              <details className="mt-1" open={leg.id === nextLeg?.id}>
                <summary className="min-h-8 cursor-pointer py-1 text-xs font-medium pointer-coarse:min-h-11 pointer-coarse:py-2">Notes</summary>
                <div className="whitespace-pre-line break-words text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                  <NoteText text={leg.notes} />
                </div>
              </details>
            ) : null}
            {tours ? <UseInLesson projectId={tours.projectId} leg={leg} onLegUpdated={tours.onLegUpdated} /> : null}
          </li>
        ))}
        {legs.length === 0 ? <li className="text-sm text-neutral-600">No legs yet.</li> : null}
      </ol>

      <form onSubmit={submit} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <div className="grid gap-2 sm:grid-cols-2">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Site name (e.g. Cocoa farm)" className={`${field} text-sm`} />
          <select value={siteType} onChange={(e) => setSiteType(e.target.value)} className={`${field} text-sm`}>
            {SITE_TYPES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <input value={locationLabel} onChange={(e) => setLocationLabel(e.target.value)} placeholder="Location (e.g. Ashanti Region)" className={`${field} text-sm`} />
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={`${field} text-sm`} />
          <input
            value={permissionNote}
            onChange={(e) => setPermissionNote(e.target.value)}
            maxLength={500}
            placeholder="Permission (e.g. Public viewpoint, no permission needed)"
            aria-label="Permission note: what permission covers filming here"
            className={`${field} text-sm sm:col-span-2`}
          />
        </div>
        <button type="submit" disabled={saving || !name.trim()} className="mt-3 min-h-9 rounded-md px-4 text-sm font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
          {saving ? "Adding…" : "Add leg"}
        </button>
      </form>
    </div>
  );
}

function CapturesTab({
  captures,
  pending,
  legs,
  onAdd,
}: {
  captures: ProjectCapture[];
  pending: PendingCapture[];
  legs: ProjectLeg[];
  onAdd: (body: Record<string, unknown>, meta: { subject: string; kind: string; consentStatus: string }) => Promise<boolean>;
}) {
  const [kind, setKind] = useState<string>("photo");
  const [subject, setSubject] = useState("");
  const [consentStatus, setConsentStatus] = useState<string>("na");
  const [involvesMinor, setInvolvesMinor] = useState(false);
  const [storageUrl, setStorageUrl] = useState("");
  const [legId, setLegId] = useState<string>("");
  const [notes, setNotes] = useState("");
  const [ledger, setLedger] = useState(false);
  const [saving, setSaving] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const body: Record<string, unknown> = {
      kind,
      subject: subject.trim() || null,
      consentStatus,
      involvesMinor,
      storageUrl: storageUrl.trim() || null,
      legId: legId || null,
      notes: notes.trim() || null,
    };
    const ok = await onAdd(body, { subject: subject.trim(), kind, consentStatus });
    setSaving(false);
    if (ok) {
      setSubject("");
      setStorageUrl("");
      setNotes("");
      setInvolvesMinor(false);
    }
  }

  const rows = [
    ...pending.map((p) => ({ id: p.tempId, kind: p.kind, subject: p.subject, consentStatus: p.consentStatus, pending: true, createdAt: null as Date | null })),
    ...captures.map((c) => ({ id: c.id, kind: c.kind, subject: c.subject, consentStatus: c.consentStatus, pending: false, createdAt: c.createdAt })),
  ];

  return (
    <div className="space-y-4">
      <p className="rounded-md bg-neutral-50 p-3 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        {CONSENT_DISCLAIMER}
      </p>

      {/* One-tap, mobile-first capture form */}
      <form onSubmit={submit} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <div className="grid gap-2 sm:grid-cols-2">
          <select value={kind} onChange={(e) => setKind(e.target.value)} className={`${field} text-sm`} aria-label="Capture kind">
            {CAPTURE_KINDS.map((k) => <option key={k} value={k}>{k}</option>)}
          </select>
          <select value={consentStatus} onChange={(e) => setConsentStatus(e.target.value)} className={`${field} text-sm`} aria-label="Consent status">
            {CONSENT_OPTIONS.map((o) => <option key={o.v} value={o.v}>{o.label}</option>)}
          </select>
          <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject (who/what)" className={`${field} text-sm`} />
          {legs.length ? (
            <select value={legId} onChange={(e) => setLegId(e.target.value)} className={`${field} text-sm`} aria-label="Leg">
              <option value="">No leg</option>
              {legs.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
            </select>
          ) : null}
          <input value={storageUrl} onChange={(e) => setStorageUrl(e.target.value)} placeholder="Media link (Drive/YouTube/…), link only" className={`${field} text-sm sm:col-span-2`} />
          <input value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes" className={`${field} text-sm sm:col-span-2`} />
        </div>
        <label className="mt-2 flex items-center gap-2 text-sm">
          <input type="checkbox" checked={involvesMinor} onChange={(e) => setInvolvesMinor(e.target.checked)} className="h-4 w-4" />
          Involves a minor (get parent/guardian consent)
        </label>
        <button type="submit" disabled={saving} className="mt-3 min-h-9 rounded-md px-4 text-sm font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
          {saving ? "Logging…" : "Log capture"}
        </button>
      </form>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={ledger} onChange={(e) => setLedger(e.target.checked)} className="h-4 w-4" />
        Consent ledger view
      </label>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-xs text-neutral-600">
            <tr>
              <th className="py-1 pr-3">Subject</th>
              {ledger ? <th className="py-1 pr-3">Consent</th> : <th className="py-1 pr-3">Kind</th>}
              <th className="py-1 pr-3">When</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-neutral-100 dark:border-neutral-800">
                <td className="py-1 pr-3">{r.subject || <span className="text-neutral-400">-</span>}{r.pending ? <span className="ml-2 text-xs text-amber-600">pending</span> : null}</td>
                <td className="py-1 pr-3">{ledger ? r.consentStatus : r.kind}</td>
                <td className="py-1 pr-3 text-xs text-neutral-600">{r.createdAt ? new Date(r.createdAt).toLocaleString() : "-"}</td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr><td colSpan={3} className="py-2 text-neutral-600">No captures yet.</td></tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function JournalTab({ comments, onAdd }: { comments: ProjectComment[]; onAdd: (body: string) => Promise<boolean> }) {
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit() {
    const body = draft.trim();
    if (!body) return;
    setSaving(true);
    const ok = await onAdd(body);
    setSaving(false);
    if (ok) setDraft("");
  }

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={2} placeholder="Add a note…" className={`${field} text-sm`} />
        <button type="button" onClick={submit} disabled={saving || !draft.trim()} className="min-h-9 rounded-md border border-neutral-300 px-4 text-sm font-medium disabled:opacity-60 dark:border-neutral-700">
          Add note
        </button>
      </div>
      <ul className="space-y-2">
        {comments.map((c) => (
          <li key={c.id} className="rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900">
            <div className="text-xs text-neutral-600">{new Date(c.createdAt).toLocaleString()}</div>
            <div className="mt-1 whitespace-pre-wrap">{c.body}</div>
          </li>
        ))}
        {comments.length === 0 ? <li className="text-sm text-neutral-600">No notes yet.</li> : null}
      </ul>
    </div>
  );
}
