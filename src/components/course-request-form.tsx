"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { COURSE_REQUEST_LIMITS } from "@/lib/course-requests";

// "Request a course" on /teach (BAM, 2026-11-10: "teachers should be able to submit or request
// courses"). The server re-checks the teacher's role (POST /api/teach/course-requests).

const field = "mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900";

export function CourseRequestForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reason, setReason] = useState("");
  const [briefUrl, setBriefUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const res = await fetch("/api/teach/course-requests", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, description, reason, briefUrl }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (res.ok) {
      setTitle("");
      setDescription("");
      setReason("");
      setBriefUrl("");
      setMsg({ ok: true, text: "Sent. The school's admin will approve it or reply with a note; you will see the answer here." });
      router.refresh();
    } else {
      setMsg({ ok: false, text: data.error ?? "Couldn't send the request. Try again." });
    }
  }

  return (
    <section aria-labelledby="request-course-h" className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="request-course-h" className="font-semibold">
          Request a course
        </h2>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="min-h-11 rounded-md border border-neutral-300 px-3 text-sm dark:border-neutral-700"
        >
          {open ? "Close" : "Request a course"}
        </button>
      </div>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Propose a course for the school to approve. When it is approved, a private draft appears here under Your courses with you as its
        instructor.
      </p>
      {open ? (
        <form onSubmit={submit} className="mt-4 space-y-3 text-sm">
          <label className="block font-medium">
            Title
            <input required minLength={3} maxLength={COURSE_REQUEST_LIMITS.title} value={title} onChange={(e) => setTitle(e.target.value)} className={`${field} min-h-11`} />
          </label>
          <label className="block font-medium">
            What it covers
            <textarea required minLength={10} maxLength={COURSE_REQUEST_LIMITS.description} rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className={field} />
          </label>
          <label className="block font-medium">
            Why this course
            <textarea required minLength={10} maxLength={COURSE_REQUEST_LIMITS.reason} rows={3} value={reason} onChange={(e) => setReason(e.target.value)} className={field} />
          </label>
          <label className="block font-medium">
            Link to a brief or outline <span className="font-normal text-neutral-500">(optional)</span>
            <input type="url" maxLength={COURSE_REQUEST_LIMITS.briefUrl} placeholder="https://" value={briefUrl} onChange={(e) => setBriefUrl(e.target.value)} className={`${field} min-h-11`} />
          </label>
          <button type="submit" disabled={busy} className="min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
            {busy ? "Sending…" : "Send the request"}
          </button>
        </form>
      ) : null}
      {msg ? (
        <p role={msg.ok ? "status" : "alert"} className={`mt-2 text-sm ${msg.ok ? "text-green-700 dark:text-green-400" : "text-red-600"}`}>
          {msg.text}
        </p>
      ) : null}
    </section>
  );
}
