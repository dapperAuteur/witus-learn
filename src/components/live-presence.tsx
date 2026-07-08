"use client";

import { useEffect, useState } from "react";
import type { LivePresence as Present } from "@/db/schema/live-chat";

// "Who's here" roster for the live class (cohort management). Sends a heartbeat every 20s (which also
// returns the current roster), so the instructor can see who's in the room in real time. Renders nothing
// until at least one person is present.
export function LivePresence({ signedIn, meId }: { signedIn: boolean; meId?: string }) {
  const [present, setPresent] = useState<Present[]>([]);

  useEffect(() => {
    if (!signedIn) return;
    let alive = true;
    async function beat() {
      try {
        const res = await fetch("/api/live/presence", { method: "POST" });
        if (!alive || !res.ok) return;
        const data = (await res.json().catch(() => ({}))) as { present?: Present[] };
        setPresent(Array.isArray(data.present) ? data.present : []);
      } catch {
        // transient — next tick retries
      }
    }
    void beat();
    const id = setInterval(() => void beat(), 20_000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [signedIn]);

  if (!signedIn || present.length === 0) return null;

  return (
    <div className="mt-6 rounded-lg border border-neutral-200 p-3 dark:border-neutral-800" aria-label="Who's here">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="font-semibold">👥 {present.length} here</span>
        <span className="flex flex-wrap gap-1">
          {present.map((p) => {
            const me = p.userId === meId;
            return (
              <span
                key={p.id}
                className={`rounded-full px-2 py-0.5 text-xs ${me ? "font-medium text-white" : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"}`}
                style={me ? { backgroundColor: "var(--accent)" } : undefined}
              >
                {p.name ?? "Someone"}{me ? " (you)" : ""}
              </span>
            );
          })}
        </span>
      </div>
    </div>
  );
}
