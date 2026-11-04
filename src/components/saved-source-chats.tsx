"use client";

import { useState } from "react";
import Link from "next/link";
import { SourceChatCitations, type SourceChatCitationView } from "@/components/source-chat-citations";
import { groupSavedThreads, type SavedThread } from "@/lib/source-chat-history";

// Saved course-chat conversations, platform owner only (BAM, 2026-11-02; threads since 2026-11-03). The
// course page shows the owner's saved threads for that course under the chat; /admin/source-chat-history
// lists them all.
// The server only ever hands these to the owner and only deletes the owner's own rows.

export interface SavedChatView {
  id: string;
  courseId: string;
  courseTitle: string;
  tenantName: string;
  question: string;
  answer: string;
  citations: SourceChatCitationView[];
  /** The conversation this turn belongs to (null for a chat saved before threads, migration 0078). */
  conversationId: string | null;
  turn: number;
  /** ISO timestamp. */
  createdAt: string;
}

/** "2026-11-02 21:40 UTC": the same text on the server and in the browser, so no hydration mismatch. */
function when(iso: string): string {
  return `${iso.slice(0, 10)} ${iso.slice(11, 16)} UTC`;
}

const button =
  "inline-flex min-h-9 items-center rounded-md border border-neutral-300 px-3 text-xs font-medium pointer-coarse:min-h-11 hover:bg-neutral-100 disabled:opacity-60 dark:border-neutral-700 dark:hover:bg-neutral-800";

/**
 * Saved chats as whole threads: the turns of one conversation together, in order, newest thread first.
 * Delete removes the whole thread (one request per thread; a pre-0078 row is deleted by its id).
 */
export function SavedSourceChatList({
  items,
  onItemsChange,
  showCourse = false,
}: {
  items: SavedChatView[];
  onItemsChange: (next: SavedChatView[]) => void;
  showCourse?: boolean;
}) {
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const threads = groupSavedThreads(items);

  async function remove(thread: SavedThread<SavedChatView>) {
    setBusy(thread.key);
    setError(null);
    try {
      const url = thread.conversationId
        ? `/api/admin/source-chat-history?conversationId=${encodeURIComponent(thread.conversationId)}`
        : `/api/admin/source-chat-history/${thread.turns[0].id}`;
      const res = await fetch(url, { method: "DELETE" });
      // A 404 means it is already gone; either way it leaves the list.
      if (res.ok || res.status === 404) {
        const gone = new Set(thread.turns.map((t) => t.id));
        onItemsChange(items.filter((i) => !gone.has(i.id)));
      } else setError("Could not delete that saved chat. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setBusy(null);
    }
  }

  if (threads.length === 0) return <p className="text-sm text-neutral-600 dark:text-neutral-400">No saved chats yet.</p>;

  return (
    <div>
      {error ? <p role="alert" className="mb-2 text-sm text-red-600 dark:text-red-400">{error}</p> : null}
      <ul className="space-y-2">
        {threads.map((thread) => {
          const first = thread.turns[0];
          const more = thread.turns.length - 1;
          return (
            <li key={thread.key} className="rounded-md border border-neutral-200 dark:border-neutral-800">
              <details>
                <summary className="cursor-pointer px-3 py-2 text-sm pointer-coarse:min-h-11">
                  <span className="font-medium">{first.question}</span>
                  <span className="block text-xs text-neutral-600 dark:text-neutral-400">
                    {when(thread.latestAt)}
                    {more > 0 ? ` · ${more} follow-up${more === 1 ? "" : "s"}` : ""}
                    {showCourse ? ` · ${first.courseTitle} (${first.tenantName})` : ""}
                  </span>
                </summary>
                <ol className="space-y-4 px-3 pb-3">
                  {thread.turns.map((c, i) => (
                    <li key={c.id} className="space-y-2">
                      {i > 0 ? <p className="text-sm font-medium">{c.question}</p> : null}
                      <div className="whitespace-pre-wrap rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900">{c.answer}</div>
                      {c.citations.length ? (
                        <SourceChatCitations citations={c.citations} className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400" />
                      ) : null}
                    </li>
                  ))}
                </ol>
                <div className="px-3 pb-3">
                  <button type="button" className={button} disabled={busy === thread.key} onClick={() => remove(thread)}>
                    {busy === thread.key ? "Deleting…" : thread.turns.length > 1 ? "Delete this conversation" : "Delete"}
                  </button>
                </div>
              </details>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** The course page's owner-only block under the chat. Controlled, so a new answer can be prepended. */
export function CourseSavedChats({ items, onItemsChange }: { items: SavedChatView[]; onItemsChange: (next: SavedChatView[]) => void }) {
  return (
    <div className="mt-6 border-t border-neutral-200 pt-4 dark:border-neutral-800">
      <h3 className="text-sm font-semibold">Your saved chats for this course</h3>
      <p className="mt-1 mb-3 text-xs text-neutral-600 dark:text-neutral-400">
        Only you see these; nobody else&apos;s questions are saved.{" "}
        <Link href="/admin/source-chat-history" className="underline" style={{ color: "var(--accent)" }}>
          All saved chats
        </Link>
      </p>
      <SavedSourceChatList items={items} onItemsChange={onItemsChange} />
    </div>
  );
}

/** /admin/source-chat-history: every saved chat (already filtered by the page), with Delete all. */
export function SavedSourceChatManager({ initial, courseId }: { initial: SavedChatView[]; courseId: string | null }) {
  const [items, setItems] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function removeAll() {
    const scope = courseId ? "for this course" : "across every course";
    if (!window.confirm(`Delete all your saved chats ${scope}? This cannot be undone.`)) return;
    setBusy(true);
    setError(null);
    try {
      const qs = courseId ? `?courseId=${encodeURIComponent(courseId)}` : "";
      const res = await fetch(`/api/admin/source-chat-history${qs}`, { method: "DELETE" });
      if (res.ok) setItems([]);
      else setError("Could not delete the saved chats. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  const threadCount = groupSavedThreads(items).length;
  return (
    <div className="mt-6">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {threadCount} saved {threadCount === 1 ? "conversation" : "conversations"} ({items.length}{" "}
          {items.length === 1 ? "question" : "questions"})
        </p>
        {items.length ? (
          <button type="button" className={button} disabled={busy} onClick={removeAll}>
            {busy ? "Deleting…" : courseId ? "Delete all for this course" : "Delete all"}
          </button>
        ) : null}
      </div>
      {error ? <p role="alert" className="mb-2 text-sm text-red-600 dark:text-red-400">{error}</p> : null}
      <SavedSourceChatList items={items} onItemsChange={setItems} showCourse={!courseId} />
    </div>
  );
}
