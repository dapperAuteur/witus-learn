"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { NOTE_BODY_MAX } from "@/lib/annotations";

// Notes on a lesson (plans/61): the learner's private notes (steps 1+3), per-note sharing with a
// teacher (step 4), the teacher's compose-to-cohort surface (step 4), and search across the
// course's notes (step 5). Private by default and it SAYS so: the single worst failure this
// feature can have is a learner believing a private note was private when it was not, so the
// visibility of every note is stated in words next to it, not implied by an icon.
//
// The teacher note deliberately has no notification, no inbox, and no email behind it — it is
// content attached to a lesson (the plans/59 guardrail against becoming messaging).
//
// The panel refetches on the `lesson-notes:changed` window event, which the inline-annotation
// layer dispatches after creating an anchored note from a text selection, so the two surfaces
// stay in sync without sharing state.

export interface NoteView {
  id: string;
  body: string;
  quote: string | null;
  createdAt: string;
  kind: "personal" | "teacher";
  /** False when the quoted text no longer appears in the current lesson body (orphaned). */
  resolves?: boolean;
  authorName?: string | null;
  sharedWith?: { teacherUserId: string; teacherName: string | null }[];
}

interface SentNote extends NoteView {
  cohortName: string | null;
  recipientCount: number;
}

interface CohortOption {
  id: string;
  name: string;
  members: { userId: string; name: string | null }[];
}

interface NotesResponse {
  own: NoteView[];
  teacherNotes: NoteView[];
  sharedWithMe: NoteView[];
  sent: SentNote[];
  teachers: { id: string; name: string | null }[];
  myCohorts: CohortOption[];
}

interface SearchResult {
  id: string;
  lessonTitle: string | null;
  lessonSlug: string | null;
  kind: "personal" | "teacher";
  /** Which visibility rule put this hit in the results, so it can be labelled rather than
   *  silently presented as the viewer's own writing. */
  source: "mine" | "teacher" | "shared" | "sent";
  authorName: string | null;
  body: string;
  quote: string | null;
}

export const NOTES_CHANGED_EVENT = "lesson-notes:changed";

export function NotesPanel({
  courseId,
  lessonId,
  base,
}: {
  courseId: string;
  lessonId: string;
  /** The course's base path (/{username}/{courseSlug}) for lesson links in search results. */
  base: string;
}) {
  const url = `/api/courses/${courseId}/lessons/${lessonId}/notes`;
  const [data, setData] = useState<NotesResponse | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    try {
      const r = await fetch(url);
      if (!r.ok) throw new Error(String(r.status));
      setData((await r.json()) as NotesResponse);
      setLoadError(false);
    } catch {
      setLoadError(true);
    }
  }, [url]);

  useEffect(() => {
    const load = () => void refetch();
    // Deferred a tick so the effect body itself sets no state (the React effect rule); after
    // that the panel only refetches on the annotation layer's event.
    const t = setTimeout(load, 0);
    window.addEventListener(NOTES_CHANGED_EVENT, load);
    return () => {
      clearTimeout(t);
      window.removeEventListener(NOTES_CHANGED_EVENT, load);
    };
  }, [refetch]);

  const notify = () => window.dispatchEvent(new Event(NOTES_CHANGED_EVENT));

  const call = useCallback(
    async (input: RequestInfo, init: RequestInit, failMessage: string): Promise<boolean> => {
      setActionError(null);
      const r = await fetch(input, init).catch(() => null);
      if (!r?.ok) {
        setActionError(failMessage);
        return false;
      }
      return true;
    },
    [],
  );

  const own = data?.own ?? [];
  const teacherNotes = data?.teacherNotes ?? [];
  const sharedWithMe = data?.sharedWithMe ?? [];
  const sent = data?.sent ?? [];
  const teachers = data?.teachers ?? [];
  const myCohorts = data?.myCohorts ?? [];

  return (
    <section aria-label="Your notes on this lesson" className="mt-10">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">My notes</h2>
        <a
          href={`/api/courses/${courseId}/notes/export`}
          className="text-xs underline hover:no-underline"
          style={{ color: "var(--accent)" }}
        >
          Download my notes for this course (.md)
        </a>
      </div>
      <p className="mt-1 text-xs text-neutral-600">
        Notes are private to you unless you choose to share one with your teacher.
      </p>

      {loadError ? (
        <p role="status" className="mt-3 text-sm text-red-600 dark:text-red-400">
          Your notes could not be loaded. Reload the page to try again.
        </p>
      ) : null}
      {actionError ? (
        <p role="status" className="mt-3 text-sm text-red-600 dark:text-red-400">
          {actionError}
        </p>
      ) : null}

      {teacherNotes.length > 0 ? (
        <div className="mt-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
            From your teacher
          </h3>
          <ul className="mt-2 space-y-2">
            {teacherNotes.map((n) => (
              <li
                key={n.id}
                className="rounded-lg border p-3 text-sm"
                style={{ borderColor: "color-mix(in srgb, var(--accent) 40%, transparent)" }}
              >
                {n.quote ? <NoteQuote quote={n.quote} resolves={n.resolves} /> : null}
                <p className="whitespace-pre-wrap wrap-break-word">{n.body}</p>
                <p className="mt-1 text-xs text-neutral-600">
                  {n.authorName ?? "Your teacher"} · visible to you and your guardians
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <OwnNotes
        notes={own}
        teachers={teachers}
        url={url}
        call={call}
        notify={notify}
      />

      {myCohorts.length > 0 ? (
        <TeacherCompose courseId={courseId} lessonId={lessonId} cohorts={myCohorts} call={call} notify={notify} />
      ) : null}

      {sent.length > 0 ? (
        <div className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
            Sent to your classes
          </h3>
          <ul className="mt-2 space-y-2">
            {sent.map((n) => (
              <li key={n.id} className="rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800">
                {n.quote ? <NoteQuote quote={n.quote} resolves={n.resolves} /> : null}
                <p className="whitespace-pre-wrap wrap-break-word">{n.body}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 text-xs text-neutral-600">
                  <span>
                    To {n.cohortName ?? "your class"}
                    {n.recipientCount > 0 ? ` (${n.recipientCount} selected member${n.recipientCount === 1 ? "" : "s"})` : " (everyone)"}
                  </span>
                  <button
                    type="button"
                    onClick={async () => {
                      if (!window.confirm("Withdraw this note from your class? This cannot be undone.")) return;
                      if (await call(`/api/notes/${n.id}`, { method: "DELETE" }, "Could not withdraw the note. Try again.")) notify();
                    }}
                    className="inline-flex min-h-11 items-center underline pointer-coarse:min-h-12"
                  >
                    Withdraw
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {sharedWithMe.length > 0 ? (
        <div className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
            Shared with you by students
          </h3>
          <ul className="mt-2 space-y-2">
            {sharedWithMe.map((n) => (
              <li key={n.id} className="rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800">
                {n.quote ? <NoteQuote quote={n.quote} resolves={n.resolves} /> : null}
                <p className="whitespace-pre-wrap wrap-break-word">{n.body}</p>
                <p className="mt-1 text-xs text-neutral-600">
                  {n.authorName ?? "A student"} shared this with you. They can withdraw it at any time.
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <NoteSearch courseId={courseId} base={base} teaches={myCohorts.length > 0} />
    </section>
  );
}

// ── The learner's own notes: list, composer, share controls ───────────────────

function OwnNotes({
  notes,
  teachers,
  url,
  call,
  notify,
}: {
  notes: NoteView[];
  teachers: { id: string; name: string | null }[];
  url: string;
  call: (input: RequestInfo, init: RequestInit, failMessage: string) => Promise<boolean>;
  notify: () => void;
}) {
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  async function addNote(e: React.FormEvent) {
    e.preventDefault();
    const body = draft.trim();
    if (!body) return;
    setSaving(true);
    const ok = await call(
      url,
      { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ body }) },
      "Could not save that note. Your text is still here, try again.",
    );
    setSaving(false);
    if (ok) {
      setDraft("");
      notify();
    }
  }

  return (
    <>
      <ul className="mt-3 space-y-2">
        {notes.map((n) => (
          <li key={n.id} className="rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800">
            {n.quote ? <NoteQuote quote={n.quote} resolves={n.resolves} /> : null}
            {editingId === n.id ? (
              <div>
                <label htmlFor={`note-edit-${n.id}`} className="sr-only">
                  Edit note
                </label>
                <textarea
                  id={`note-edit-${n.id}`}
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  maxLength={NOTE_BODY_MAX}
                  rows={3}
                  className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
                />
                <div className="mt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={async () => {
                      const body = editText.trim();
                      if (!body) return;
                      if (
                        await call(
                          `/api/notes/${n.id}`,
                          { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ body }) },
                          "Could not save the change. Try again.",
                        )
                      ) {
                        setEditingId(null);
                        notify();
                      }
                    }}
                    className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-white pointer-coarse:min-h-12"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="inline-flex min-h-11 items-center text-sm text-neutral-600 underline pointer-coarse:min-h-12"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="whitespace-pre-wrap wrap-break-word">{n.body}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-600">
                  <ShareState note={n} call={call} notify={notify} />
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(n.id);
                      setEditText(n.body);
                    }}
                    className="inline-flex min-h-11 items-center underline pointer-coarse:min-h-12"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={async () => {
                      if (!window.confirm("Delete this note? This cannot be undone.")) return;
                      if (await call(`/api/notes/${n.id}`, { method: "DELETE" }, "Could not delete the note. Try again.")) notify();
                    }}
                    className="inline-flex min-h-11 items-center underline pointer-coarse:min-h-12"
                  >
                    Delete
                  </button>
                  {teachers.length > 0 && (n.sharedWith?.length ?? 0) === 0 ? (
                    <ShareMenu noteId={n.id} teachers={teachers} call={call} notify={notify} />
                  ) : null}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={addNote} className="mt-3">
        <label htmlFor="note-draft" className="sr-only">
          New note on this lesson
        </label>
        <textarea
          id="note-draft"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          maxLength={NOTE_BODY_MAX}
          rows={3}
          placeholder="Write a note for yourself about this lesson. Tip: select any text in the lesson to attach a note to that exact passage."
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
        />
        <button
          type="submit"
          disabled={saving || draft.trim().length === 0}
          className="mt-2 inline-flex min-h-11 items-center justify-center rounded-md px-3 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 pointer-coarse:min-h-12"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {saving ? "Saving…" : "Add note"}
        </button>
      </form>
    </>
  );
}

/** "Private to you" / "shared with X (unshare)" — the visibility of a note, in words. */
function ShareState({
  note,
  call,
  notify,
}: {
  note: NoteView;
  call: (input: RequestInfo, init: RequestInit, failMessage: string) => Promise<boolean>;
  notify: () => void;
}) {
  const shared = note.sharedWith ?? [];
  if (shared.length === 0) return <span>Private to you</span>;
  return (
    <span>
      Shared with{" "}
      {shared.map((s, i) => (
        <span key={s.teacherUserId}>
          {i > 0 ? ", " : ""}
          {s.teacherName ?? "a teacher"}{" "}
          <button
            type="button"
            onClick={async () => {
              if (
                await call(
                  `/api/notes/${note.id}/share`,
                  {
                    method: "DELETE",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ teacherUserId: s.teacherUserId }),
                  },
                  "Could not withdraw the share. Try again.",
                )
              )
                notify();
            }}
            className="inline-flex min-h-11 items-center underline pointer-coarse:min-h-12"
          >
            (unshare)
          </button>
        </span>
      ))}
    </span>
  );
}

/** The explicit per-note share control. Never a bulk toggle (plans/61 §3). */
function ShareMenu({
  noteId,
  teachers,
  call,
  notify,
}: {
  noteId: string;
  teachers: { id: string; name: string | null }[];
  call: (input: RequestInfo, init: RequestInit, failMessage: string) => Promise<boolean>;
  notify: () => void;
}) {
  const [open, setOpen] = useState(false);
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 items-center underline pointer-coarse:min-h-12"
      >
        Share with teacher…
      </button>
    );
  }
  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      {teachers.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={async () => {
            if (
              await call(
                `/api/notes/${noteId}/share`,
                {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ teacherUserId: t.id }),
                },
                "Could not share the note. Try again.",
              )
            ) {
              setOpen(false);
              notify();
            }
          }}
          className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-2 text-xs dark:border-neutral-700 pointer-coarse:min-h-12"
        >
          Share with {t.name ?? "your teacher"}
        </button>
      ))}
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="inline-flex min-h-11 items-center underline pointer-coarse:min-h-12"
      >
        Cancel
      </button>
    </span>
  );
}

// ── The teacher's compose-to-cohort surface ───────────────────────────────────

function TeacherCompose({
  courseId,
  lessonId,
  cohorts,
  call,
  notify,
}: {
  courseId: string;
  lessonId: string;
  cohorts: CohortOption[];
  call: (input: RequestInfo, init: RequestInit, failMessage: string) => Promise<boolean>;
  notify: () => void;
}) {
  const [cohortId, setCohortId] = useState(cohorts[0]?.id ?? "");
  const [narrow, setNarrow] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const cohort = cohorts.find((c) => c.id === cohortId) ?? cohorts[0];

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const text = body.trim();
    if (!text || !cohort) return;
    setSending(true);
    const ok = await call(
      `/api/courses/${courseId}/lessons/${lessonId}/teacher-notes`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          cohortId: cohort.id,
          recipientIds: narrow ? [...selected] : undefined,
          body: text,
        }),
      },
      "Could not send the note. Try again.",
    );
    setSending(false);
    if (ok) {
      setBody("");
      setSelected(new Set());
      setNarrow(false);
      notify();
    }
  }

  return (
    <details className="mt-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <summary className="cursor-pointer text-sm font-medium">Send a note to your class</summary>
      <p className="mt-2 text-xs text-neutral-600">
        The note appears on this lesson for the students you choose (and the guardians of kid
        accounts). It is not an email and sends no notification.
      </p>
      <form onSubmit={send} className="mt-3 space-y-3">
        {cohorts.length > 1 ? (
          <div>
            <label htmlFor="tn-cohort" className="text-sm font-medium">
              Class
            </label>
            <select
              id="tn-cohort"
              value={cohortId}
              onChange={(e) => {
                setCohortId(e.target.value);
                setSelected(new Set());
              }}
              className="ml-2 rounded-md border border-neutral-300 px-2 py-1.5 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            >
              {cohorts.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <label className="flex min-h-11 items-center gap-2 text-sm pointer-coarse:min-h-12">
          <input type="checkbox" checked={narrow} onChange={(e) => setNarrow(e.target.checked)} />
          Only specific students
        </label>
        {narrow && cohort ? (
          <fieldset className="rounded-md border border-neutral-200 p-2 dark:border-neutral-800">
            <legend className="px-1 text-xs text-neutral-600">Choose students</legend>
            {cohort.members.length === 0 ? (
              <p className="text-xs text-neutral-600">This class has no members yet.</p>
            ) : (
              <ul className="grid gap-1 sm:grid-cols-2">
                {cohort.members.map((m) => (
                  <li key={m.userId}>
                    <label className="flex min-h-11 items-center gap-2 text-sm pointer-coarse:min-h-12">
                      <input
                        type="checkbox"
                        checked={selected.has(m.userId)}
                        onChange={(e) => {
                          const next = new Set(selected);
                          if (e.target.checked) next.add(m.userId);
                          else next.delete(m.userId);
                          setSelected(next);
                        }}
                      />
                      {m.name ?? "Unnamed student"}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </fieldset>
        ) : null}
        <label htmlFor="tn-body" className="sr-only">
          Note to your class
        </label>
        <textarea
          id="tn-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          maxLength={NOTE_BODY_MAX}
          rows={3}
          placeholder="A pointer, a caution, or an assignment note for this lesson."
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
        />
        <button
          type="submit"
          disabled={sending || body.trim().length === 0 || (narrow && selected.size === 0)}
          className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-white disabled:opacity-60 pointer-coarse:min-h-12"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {sending ? "Sending…" : "Attach note to this lesson"}
        </button>
      </form>
    </details>
  );
}

// ── Search across the course's notes (plans/61 step 5) ────────────────────────

/** Says whose note a hit is. An unlabelled result reads as the viewer's own writing, which is
 *  exactly the confusion this feature cannot afford, so only "mine" goes unlabelled. */
function sourceLabel(r: SearchResult): string {
  switch (r.source) {
    case "teacher":
      return `From ${r.authorName ?? "your teacher"} · `;
    case "shared":
      return `${r.authorName ?? "A student"} shared this with you · `;
    case "sent":
      return "You sent this to a class · ";
    default:
      return "";
  }
}

function NoteSearch({
  courseId,
  base,
  teaches,
}: {
  courseId: string;
  base: string;
  /** The viewer owns at least one class, so their results also cover notes students shared with
   *  them and notes they sent. The scope is stated in words either way: a search box that says
   *  "my notes" while returning someone else's is the same broken promise as one that hides them. */
  teaches: boolean;
}) {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<SearchResult[] | null>(null);
  const [searching, setSearching] = useState(false);

  async function search(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    if (query.length < 2) return;
    setSearching(true);
    try {
      const r = await fetch(`/api/courses/${courseId}/notes/search?q=${encodeURIComponent(query)}`);
      setResults(r.ok ? ((await r.json()) as { results: SearchResult[] }).results : []);
    } catch {
      setResults([]);
    } finally {
      setSearching(false);
    }
  }

  return (
    <div className="mt-6">
      <form onSubmit={search} className="flex flex-wrap items-center gap-2">
        <label htmlFor="note-search" className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
          Search notes in this course
        </label>
        <input
          id="note-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          minLength={2}
          maxLength={200}
          placeholder="A word from a note or a highlighted passage"
          className="min-h-11 w-full rounded-md border border-neutral-300 px-3 text-sm dark:border-neutral-700 dark:bg-neutral-900 sm:w-80 pointer-coarse:min-h-12"
        />
        <button
          type="submit"
          disabled={searching || q.trim().length < 2}
          className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-3 text-sm dark:border-neutral-700 disabled:opacity-60 pointer-coarse:min-h-12"
        >
          {searching ? "Searching…" : "Search"}
        </button>
      </form>
      <p className="mt-1 text-xs text-neutral-600">
        {teaches
          ? "Your own notes, notes your teacher sent you, notes students shared with you, and notes you sent to your classes."
          : "Your own notes and notes your teacher sent you. Nobody else's notes are searchable."}
      </p>
      <div aria-live="polite">
        {results !== null ? (
          results.length === 0 ? (
            <p className="mt-2 text-sm text-neutral-600">No matching notes in this course.</p>
          ) : (
            <ul className="mt-2 space-y-2">
              {results.map((r) => (
                <li key={r.id} className="rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800">
                  {r.quote ? (
                    <blockquote className="mb-1 border-l-2 pl-2 text-xs italic text-neutral-600" style={{ borderColor: "var(--accent)" }}>
                      {r.quote}
                    </blockquote>
                  ) : null}
                  <p className="whitespace-pre-wrap wrap-break-word">{r.body}</p>
                  <p className="mt-1 text-xs text-neutral-600">
                    {sourceLabel(r)}
                    {r.lessonSlug ? (
                      <Link href={`${base}/lesson/${r.lessonSlug}`} className="underline hover:no-underline" style={{ color: "var(--accent)" }}>
                        {r.lessonTitle ?? "Open lesson"}
                      </Link>
                    ) : (
                      (r.lessonTitle ?? "")
                    )}
                  </p>
                </li>
              ))}
            </ul>
          )
        ) : null}
      </div>
    </div>
  );
}

/** The quoted passage a note is anchored to, with the orphan notice when the lesson has since
 *  changed (plans/61 §2: never silently drop a learner's work). */
function NoteQuote({ quote, resolves }: { quote: string; resolves?: boolean }) {
  return (
    <div className="mb-2">
      <blockquote className="border-l-2 pl-2 text-xs italic text-neutral-600" style={{ borderColor: "var(--accent)" }}>
        {quote}
      </blockquote>
      {resolves === false ? (
        <p className="mt-1 text-xs text-amber-700 dark:text-amber-500">
          The lesson text this was attached to has changed. Your note is kept.
        </p>
      ) : null}
    </div>
  );
}
