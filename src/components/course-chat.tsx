"use client";

import { useRef, useState } from "react";
import { SourceChatCitations, type SourceChatCitationView } from "@/components/source-chat-citations";
import { CourseSavedChats, type SavedChatView } from "@/components/saved-source-chats";

// The course chat panel (2026-11-03): the one tool that replaced "Ask the course tutor" and "Chat with the
// sources". A conversation: each follow-up goes to the server with the earlier turns, every answer comes from
// the course's indexed sources (strict or mixed, as the course is set) and streams in, and its numbered
// sources link to where they can be read. Rendered only when this viewer may use it and the course is indexed
// (the server checks again). `saved` is the platform owner's saved threads for this course (null for everyone
// else, whose questions are never stored).

interface Turn {
  question: string;
  answer: string;
  citations: SourceChatCitationView[];
  error: string | null;
  done: boolean;
}

type StreamEvent =
  | { type: "meta"; citations?: SourceChatCitationView[]; conversationId?: string }
  | { type: "token"; text?: string }
  | { type: "error"; message?: string }
  | { type: "done"; savedId?: string | null; conversationId?: string };

function newConversationId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  // RFC 4122 v4 from getRandomValues, for the rare browser without randomUUID.
  const b = crypto.getRandomValues(new Uint8Array(16));
  b[6] = (b[6] & 0x0f) | 0x40;
  b[8] = (b[8] & 0x3f) | 0x80;
  const h = [...b].map((x) => x.toString(16).padStart(2, "0")).join("");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

export function CourseChat({
  courseId,
  courseTitle,
  saved = null,
}: {
  courseId: string;
  courseTitle: string;
  saved?: SavedChatView[] | null;
}) {
  const [question, setQuestion] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [asking, setAsking] = useState(false);
  const [savedChats, setSavedChats] = useState<SavedChatView[] | null>(saved);
  const conversationId = useRef<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function patchLast(update: (t: Turn) => Turn) {
    setTurns((all) => (all.length ? [...all.slice(0, -1), update(all[all.length - 1])] : all));
  }

  function startOver() {
    conversationId.current = null;
    setTurns([]);
    setQuestion("");
    inputRef.current?.focus();
  }

  async function ask() {
    const q = question.trim();
    if (!q || asking) return;
    conversationId.current ??= newConversationId();
    const convo = conversationId.current;
    // Only finished, successful turns are context for the follow-up, and the server reads the last six.
    const finished = turns.filter((t) => t.done && !t.error && t.answer).map((t) => ({ question: t.question, answer: t.answer }));
    const history = finished.slice(-6);
    const turnIndex = turns.length;
    setAsking(true);
    setQuestion("");
    setTurns((all) => [...all, { question: q, answer: "", citations: [], error: null, done: false }]);

    let answer = "";
    let citations: SourceChatCitationView[] = [];
    try {
      const res = await fetch(`/api/courses/${courseId}/chat`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ mode: "ask", question: q, history, conversationId: convo, turn: turnIndex }),
      });
      if (!res.ok || !res.body) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        patchLast((t) => ({ ...t, error: data.error ?? "Something went wrong. Please try again.", done: true }));
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.trim()) continue;
          let ev: StreamEvent;
          try {
            ev = JSON.parse(line) as StreamEvent;
          } catch {
            continue;
          }
          if (ev.type === "meta") {
            citations = ev.citations ?? [];
            patchLast((t) => ({ ...t, citations }));
          } else if (ev.type === "token") {
            answer += ev.text ?? "";
            patchLast((t) => ({ ...t, answer }));
          } else if (ev.type === "error") {
            patchLast((t) => ({ ...t, error: ev.message ?? "The course chat hit an error." }));
          } else if (ev.type === "done" && ev.savedId) {
            // The server saved this turn (owner only): show it in the saved threads straight away.
            const savedId = ev.savedId;
            setSavedChats((prev) => prev && [
              {
                id: savedId,
                courseId,
                courseTitle,
                tenantName: prev[0]?.tenantName ?? "",
                question: q,
                answer,
                citations,
                conversationId: convo,
                turn: turnIndex,
                createdAt: new Date().toISOString(),
              },
              ...prev,
            ]);
          }
        }
      }
      patchLast((t) => ({ ...t, done: true }));
    } catch {
      patchLast((t) => ({ ...t, error: "Network error. Please try again.", done: true }));
    } finally {
      setAsking(false);
    }
  }

  const field = "w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <section className="mt-8 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800" aria-labelledby="course-chat-h">
      <h2 id="course-chat-h" className="text-lg font-semibold">Chat with this course</h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Ask about <span className="font-medium">{courseTitle}</span>, then ask follow-ups. Answers come from this
        course&apos;s own sources, numbered, and each number links to where you can read it. If the sources don&apos;t
        cover it, it says so.
      </p>

      {turns.length ? (
        <ol className="mt-4 space-y-4" aria-live="polite">
          {turns.map((t, i) => (
            <li key={i} className="space-y-2">
              <p className="text-sm">
                <span className="sr-only">You asked: </span>
                <span className="font-medium">{t.question}</span>
              </p>
              {t.answer ? (
                <div className="whitespace-pre-wrap rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900">{t.answer}</div>
              ) : !t.done && !t.error ? (
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Thinking…</p>
              ) : null}
              {t.error ? <p role="alert" className="text-sm text-red-600 dark:text-red-400">{t.error}</p> : null}
              {t.citations.length ? (
                <details className="text-xs text-neutral-600 dark:text-neutral-400">
                  <summary className="cursor-pointer pointer-coarse:min-h-11">Sources used ({t.citations.length})</summary>
                  <SourceChatCitations citations={t.citations} className="mt-2 space-y-1" />
                </details>
              ) : null}
            </li>
          ))}
        </ol>
      ) : null}

      <label htmlFor="course-chat-q" className="mt-4 block text-sm font-medium">
        {turns.length ? "Ask a follow-up" : "Your question"}
      </label>
      <textarea
        id="course-chat-q"
        ref={inputRef}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) void ask();
        }}
        rows={2}
        maxLength={2000}
        placeholder={turns.length ? "e.g. Can you give an example of that?" : "e.g. What does the course say about…?"}
        className={`mt-1 ${field}`}
      />
      <div className="mt-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => void ask()}
          disabled={asking || !question.trim()}
          className="min-h-11 rounded-md px-4 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {asking ? "Thinking…" : "Ask"}
        </button>
        {turns.length ? (
          <button
            type="button"
            onClick={startOver}
            disabled={asking}
            className="min-h-11 rounded-md border border-neutral-300 px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700"
          >
            New conversation
          </button>
        ) : null}
      </div>

      {savedChats ? <CourseSavedChats items={savedChats} onItemsChange={setSavedChats} /> : null}
    </section>
  );
}
