"use client";

import { useCallback, useEffect, useState } from "react";
import { NOTE_BODY_MAX } from "@/lib/annotations";

// Personal notes on a lesson (plans/61 step 1), plus read-only display of notes a teacher sent.
// Private by default and it says so: the single worst failure this feature can have is a learner
// believing a private note was private when it was not, so the visibility of every note is stated
// in words next to it, not implied by an icon.
//
// The panel refetches on the `lesson-notes:changed` window event, which the inline-annotation
// layer dispatches after creating an anchored note from a text selection (plans/61 step 3), so
// the two surfaces stay in sync without sharing state.

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

interface NotesResponse {
  own: NoteView[];
  teacherNotes: NoteView[];
}

export const NOTES_CHANGED_EVENT = "lesson-notes:changed";

export function NotesPanel({ courseId, lessonId }: { courseId: string; lessonId: string }) {
  const url = `/api/courses/${courseId}/lessons/${lessonId}/notes`;
  const [data, setData] = useState<NotesResponse | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
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
    refetch();
    const onChanged = () => refetch();
    window.addEventListener(NOTES_CHANGED_EVENT, onChanged);
    return () => window.removeEventListener(NOTES_CHANGED_EVENT, onChanged);
  }, [refetch]);

  async function addNote(e: React.FormEvent) {
    e.preventDefault();
    const body = draft.trim();
    if (!body) return;
    setSaving(true);
    setActionError(null);
    try {
      const r = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ body }),
      });
      if (!r.ok) throw new Error(String(r.status));
      setDraft("");
      await refetch();
    } catch {
      setActionError("Could not save that note. Your text is still here, try again.");
    } finally {
      setSaving(false);
    }
  }

  async function saveEdit(id: string) {
    const body = editText.trim();
    if (!body) return;
    setActionError(null);
    const r = await fetch(`/api/notes/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ body }),
    }).catch(() => null);
    if (!r?.ok) {
      setActionError("Could not save the change. Try again.");
      return;
    }
    setEditingId(null);
    await refetch();
  }

  async function remove(id: string) {
    if (!window.confirm("Delete this note? This cannot be undone.")) return;
    setActionError(null);
    const r = await fetch(`/api/notes/${id}`, { method: "DELETE" }).catch(() => null);
    if (!r?.ok) {
      setActionError("Could not delete the note. Try again.");
      return;
    }
    await refetch();
  }

  const own = data?.own ?? [];
  const teacherNotes = data?.teacherNotes ?? [];

  return (
    <section aria-label="Your notes on this lesson" className="mt-10">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">My notes</h2>
      <p className="mt-1 text-xs text-neutral-500">
        Notes are private to you unless you choose to share one with your teacher.
      </p>

      {loadError ? (
        <p role="status" className="mt-3 text-sm text-red-600 dark:text-red-400">
          Your notes could not be loaded. Reload the page to try again.
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
                <p className="mt-1 text-xs text-neutral-500">
                  {n.authorName ?? "Your teacher"} · visible to you and your guardians
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <ul className="mt-3 space-y-2">
        {own.map((n) => (
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
                    onClick={() => saveEdit(n.id)}
                    className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-white pointer-coarse:min-h-12"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="inline-flex min-h-11 items-center text-sm text-neutral-500 underline pointer-coarse:min-h-12"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="whitespace-pre-wrap wrap-break-word">{n.body}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 text-xs text-neutral-500">
                  <span>Private to you{n.sharedWith && n.sharedWith.length > 0 ? ", shared with " + n.sharedWith.map((s) => s.teacherName ?? "a teacher").join(", ") : ""}</span>
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
                    onClick={() => remove(n.id)}
                    className="inline-flex min-h-11 items-center underline pointer-coarse:min-h-12"
                  >
                    Delete
                  </button>
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
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={saving || draft.trim().length === 0}
            className="inline-flex min-h-11 items-center justify-center rounded-md px-3 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 pointer-coarse:min-h-12"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {saving ? "Saving…" : "Add note"}
          </button>
          {actionError ? (
            <span role="status" className="text-sm text-red-600 dark:text-red-400">
              {actionError}
            </span>
          ) : null}
        </div>
      </form>
    </section>
  );
}

/** The quoted passage a note is anchored to, with the orphan notice when the lesson has since
 *  changed (plans/61 §2: never silently drop a learner's work). */
function NoteQuote({ quote, resolves }: { quote: string; resolves?: boolean }) {
  return (
    <div className="mb-2">
      <blockquote className="border-l-2 pl-2 text-xs italic text-neutral-500" style={{ borderColor: "var(--accent)" }}>
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
