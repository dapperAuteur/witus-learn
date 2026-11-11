"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OFFER_NOTE_MAX } from "@/lib/course-offers";

// "Courses offered to you" on /teach (BAM, 2026-11-10: "approve assigned courses"). A school's admin
// offered this teacher a course; it changes teacher only when they press Accept. The server re-checks
// everything (POST /api/teach/course-offers/[id]); this only sends the answer and shows the result. A
// failed answer keeps the note that was typed.
export function CourseOfferResponse({ offerId, courseTitle }: { offerId: string; courseTitle: string }) {
  const router = useRouter();
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState<"accept" | "decline" | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function answer(action: "accept" | "decline") {
    if (action === "decline" && !confirm(`Decline "${courseTitle}"? The school's admin is told; the course stays with its current teacher.`)) return;
    setBusy(action);
    setMsg(null);
    let res: Response | null = null;
    try {
      res = await fetch(`/api/teach/course-offers/${encodeURIComponent(offerId)}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action, note: note.trim() || undefined }),
      });
    } catch {
      res = null;
    }
    const data = res ? await res.json().catch(() => ({})) : {};
    setBusy(null);
    if (res?.ok) {
      setMsg({ ok: true, text: action === "accept" ? "Accepted. The course is under Your courses now." : "Declined. The school's admin was told." });
      router.refresh();
    } else if (!res) {
      setMsg({ ok: false, text: "You seem to be offline. Try again when you're connected; your note is still here." });
    } else if (res.status >= 500) {
      setMsg({ ok: false, text: "Something went wrong on our side. Try again in a minute; your note is still here." });
    } else {
      setMsg({ ok: false, text: data.error ?? "Couldn't send your answer. Try again." });
    }
  }

  return (
    <div className="mt-3 space-y-2 text-sm">
      <label className="block">
        Note to the school <span className="text-neutral-500">(optional)</span>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={2}
          maxLength={OFFER_NOTE_MAX}
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
        />
      </label>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={busy !== null}
          onClick={() => answer("accept")}
          className="min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {busy === "accept" ? "Accepting…" : "Accept and teach it"}
        </button>
        <button
          type="button"
          disabled={busy !== null}
          onClick={() => answer("decline")}
          className="min-h-11 rounded-md border border-neutral-300 px-4 disabled:opacity-60 dark:border-neutral-700"
        >
          {busy === "decline" ? "Declining…" : "Decline"}
        </button>
      </div>
      {msg ? (
        <p role={msg.ok ? "status" : "alert"} className={msg.ok ? "text-green-700 dark:text-green-400" : "text-red-600"}>
          {msg.text}
        </p>
      ) : null}
    </div>
  );
}

// Admin → Users: withdraw an offer the teacher has not answered (DELETE /api/admin/course-offers/[id]).
export function WithdrawCourseOffer({ offerId }: { offerId: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  async function withdraw() {
    if (!confirm("Withdraw this offer? The teacher can no longer accept it.")) return;
    setBusy(true);
    setErr(null);
    const res = await fetch(`/api/admin/course-offers/${encodeURIComponent(offerId)}`, { method: "DELETE" }).catch(() => null);
    const data = res ? await res.json().catch(() => ({})) : {};
    setBusy(false);
    if (res?.ok) router.refresh();
    else setErr(res ? (data.error ?? "Couldn't withdraw. Try again.") : "You seem to be offline. Try again when you're connected.");
  }
  return (
    <span className="inline-flex flex-col gap-1">
      <button type="button" onClick={withdraw} disabled={busy} className="min-h-11 rounded-md border border-neutral-300 px-3 text-sm disabled:opacity-60 dark:border-neutral-700">
        {busy ? "Withdrawing…" : "Withdraw"}
      </button>
      {err ? (
        <span role="alert" className="text-xs text-red-600">
          {err}
        </span>
      ) : null}
    </span>
  );
}
