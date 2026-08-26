"use client";

import { useEffect, useRef, useState } from "react";
import type { LiveMessage } from "@/db/schema/live-chat";

// Live class chat panel on the /live page. Polls /api/live/chat every 4s for new messages and posts to
// it. Signed-in users read + post; moderators (tenant admins) can delete a message. Simple polling keeps
// it dependency-free (no websocket server) — plenty for a class-sized room.
export function LiveChat({ signedIn, canModerate }: { signedIn: boolean; canModerate: boolean }) {
  const [messages, setMessages] = useState<LiveMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const afterRef = useRef<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!signedIn) return;
    let alive = true;
    async function poll() {
      try {
        const q = afterRef.current ? `?after=${encodeURIComponent(afterRef.current)}` : "";
        const res = await fetch(`/api/live/chat${q}`);
        if (!alive || !res.ok) return;
        const data = (await res.json().catch(() => ({}))) as { messages?: LiveMessage[] };
        const incoming = data.messages ?? [];
        if (incoming.length) {
          setMessages((prev) => {
            const seen = new Set(prev.map((m) => m.id));
            return [...prev, ...incoming.filter((m) => !seen.has(m.id))];
          });
          afterRef.current = String(incoming[incoming.length - 1].createdAt);
        }
      } catch {
        // transient network error — the next tick retries
      }
    }
    void poll(); // poll() only setState()s after an await, so no cascading render
    const id = setInterval(() => void poll(), 4000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [signedIn]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const body = input.trim();
    if (!body) return;
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/live/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ body }),
      });
      const data = (await res.json().catch(() => ({}))) as LiveMessage & { error?: string };
      if (res.ok) {
        setInput("");
        setMessages((prev) => (prev.some((m) => m.id === data.id) ? prev : [...prev, data]));
        afterRef.current = String(data.createdAt);
      } else {
        setError(data.error ?? "Couldn't send. Try again.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setSending(false);
    }
  }

  async function remove(id: string) {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    await fetch(`/api/live/chat?id=${encodeURIComponent(id)}`, { method: "DELETE" }).catch(() => {});
  }

  const field = "w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <section className="mt-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800" aria-label="Live chat">
      <h2 className="font-semibold">Live chat</h2>
      {!signedIn ? (
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Please sign in to join the live chat.</p>
      ) : (
        <>
          <div ref={scrollRef} className="mt-3 h-64 space-y-2 overflow-y-auto rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900">
            {messages.map((m) => (
              <div key={m.id} className="group">
                <span className="font-medium">{m.name ?? "Someone"}</span>{" "}
                <span className="text-xs text-neutral-400">{new Date(m.createdAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</span>
                {canModerate ? (
                  <button type="button" onClick={() => remove(m.id)} className="ml-1 inline-flex min-h-8 min-w-8 items-center justify-center rounded text-sm text-red-500 opacity-70 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2" aria-label="Delete message">×</button>
                ) : null}
                <p className="whitespace-pre-wrap break-words">{m.body}</p>
              </div>
            ))}
            {messages.length === 0 ? <p className="text-neutral-600">No messages yet. Say hi 👋</p> : null}
          </div>
          <form onSubmit={send} className="mt-3 flex items-center gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} maxLength={500} placeholder="Message the class…" className={field} aria-label="Message" />
            <button type="submit" disabled={sending || !input.trim()} className="min-h-9 shrink-0 rounded-md px-4 text-sm font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
              Send
            </button>
          </form>
          {error ? <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p> : null}
        </>
      )}
    </section>
  );
}
