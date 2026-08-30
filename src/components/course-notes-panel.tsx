"use client";

import { useCallback, useEffect, useState } from "react";
import { NOTE_BODY_MAX } from "@/lib/annotations";

// Notes about the COURSE as a whole (2026-08-30), the companion to the per-lesson panel in
// notes-panel.tsx. A learner keeps two different kinds of note and only one of them had a home:
// "this paragraph is confusing" belongs to a lesson, but "come back to the worksheet in section
// 3" belongs to the course.
//
// These are PRIVATE, with no share control at all — not hidden, absent. A teacher note is content
// attached to a lesson (the plans/59 guardrail), so there is nothing here to share with and
// nothing to share from, and the copy says so plainly rather than implying it with an icon: a
// learner believing a private note was private when it was not is the single worst failure this
// feature can have.

interface CourseNote {
  id: string;
  body: string;
  createdAt: string;
}

export function CourseNotesPanel({ courseId }: { courseId: string }) {
  const url = `/api/courses/${courseId}/notes`;
  const [notes, setNotes] = useState<CourseNote[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const refetch = useCallback(async () => {
    try {
      const r = await fetch(url);
      if (!r.ok) throw new Error(String(r.status));
      const data = (await r.json()) as { own: CourseNote[] };
      setNotes(data.own);
      setLoadError(false);
    } catch {
      setLoadError(true);
    }
  }, [url]);

  useEffect(() => {
    // Deferred a tick so the effect body itself sets no state (the React effect rule).
    const t = setTimeout(() => void refetch(), 0);
    return () => clearTimeout(t);
  }, [refetch]);

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
      await refetch();
    }
  }

  const list = notes ?? [];

  return (
    <section aria-label="Your notes on this course" className="mt-8">
      <h2 className="text-lg font-semibold">My notes on this course</h2>
      <p className="mt-1 text-xs text-neutral-600">
        Private to you. Notes about a particular lesson live on that lesson&rsquo;s page, where you
        can also attach one to an exact passage.
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

      <ul className="mt-3 space-y-2">
        {list.map((n) => (
          <li key={n.id} className="rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800">
            {editingId === n.id ? (
              <div>
                <label htmlFor={`course-note-edit-${n.id}`} className="sr-only">
                  Edit note
                </label>
                <textarea
                  id={`course-note-edit-${n.id}`}
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  maxLength={NOTE_BODY_MAX}
                  rows={3}
                  className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900"
                />
                <div className="mt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={async () => {
                      const body = editText.trim();
                      if (!body) return;
                      if (
                        await call(
                          `/api/notes/${n.id}`,
                          {
                            method: "PATCH",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify({ body }),
                          },
                          "Could not save the change. Try again.",
                        )
                      ) {
                        setEditingId(null);
                        await refetch();
                      }
                    }}
                    className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="inline-flex min-h-11 items-center text-sm text-neutral-600 underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="whitespace-pre-wrap wrap-break-word">{n.body}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-600">
                  <span>Private to you</span>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(n.id);
                      setEditText(n.body);
                    }}
                    className="inline-flex min-h-11 items-center underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={async () => {
                      if (!window.confirm("Delete this note? This cannot be undone.")) return;
                      if (
                        await call(
                          `/api/notes/${n.id}`,
                          { method: "DELETE" },
                          "Could not delete the note. Try again.",
                        )
                      )
                        await refetch();
                    }}
                    className="inline-flex min-h-11 items-center underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
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
        <label htmlFor="course-note-draft" className="sr-only">
          New note on this course
        </label>
        <textarea
          id="course-note-draft"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          maxLength={NOTE_BODY_MAX}
          rows={3}
          placeholder="A note about the course as a whole: what to come back to, a question to ask, how you plan to work through it."
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900"
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
          <a
            href={`/api/courses/${courseId}/notes/export`}
            className="inline-flex min-h-11 items-center text-xs underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
            style={{ color: "var(--accent)" }}
          >
            Download all my notes for this course (.md)
          </a>
        </div>
      </form>
    </section>
  );
}
