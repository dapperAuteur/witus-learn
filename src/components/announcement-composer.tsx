"use client";

import { useState } from "react";
import {
  announcementBody,
  announcementSubject,
  buildCourseUrl,
  mailtoHref,
  type AnnouncementCourse,
} from "@/lib/marketing/announcement-email";

// "Compose announcement": drafts a course-announcement email from a course's real data.
// NOTHING SENDS FROM HERE. The draft leaves via copy-to-clipboard or a mailto: link into
// BAM's own email tool; it can also be saved as a campaign draft through the existing
// /api/admin/campaigns endpoint. Real in-app sending is an open decision, see
// docs-notes-admin-marketing.md.
export function AnnouncementComposer({ brand, courses }: { brand: string; courses: AnnouncementCourse[] }) {
  const [courseId, setCourseId] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  function pickCourse(id: string) {
    setCourseId(id);
    setStatus(null);
    const course = courses.find((c) => c.id === id);
    if (!course) {
      setSubject("");
      setBody("");
      return;
    }
    const url = buildCourseUrl(window.location.origin, course.id);
    setSubject(announcementSubject(brand, course.title));
    setBody(announcementBody({ brand, course, courseUrl: url }));
  }

  async function copy(label: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setStatus(`${label} copied.`);
    } catch {
      setStatus(`Could not copy. Select the ${label.toLowerCase()} text and copy it by hand.`);
    }
  }

  async function saveDraft() {
    if (busy || !subject.trim() || !body.trim()) return;
    setBusy(true);
    setStatus(null);
    const res = await fetch("/api/admin/campaigns", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ subject, body, audience: "leads" }),
    });
    setStatus(res.ok ? "Saved as a campaign draft (listed below)." : "Could not save the draft.");
    setBusy(false);
  }

  const ready = subject.trim().length > 0 && body.trim().length > 0;
  const field =
    "w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900";
  const secondaryBtn =
    "inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-4 font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700 dark:hover:bg-neutral-800";

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
      <h3 className="font-semibold">Compose announcement</h3>
      <p className="mt-1 text-sm text-neutral-500">
        Drafts a new-course email from the course&apos;s real title and description. Nothing sends
        from here: copy it (or open it in your email app) and send it through your own email tool
        for now.
      </p>

      <div className="mt-3 space-y-3">
        <label className="block text-sm font-medium">
          Course
          <select
            value={courseId}
            onChange={(e) => pickCourse(e.target.value)}
            className={`mt-1 min-h-11 ${field}`}
          >
            <option value="">Pick a published course…</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium">
          Subject
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            maxLength={200}
            className={`mt-1 ${field}`}
          />
        </label>

        <label className="block text-sm font-medium">
          Message
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={7}
            maxLength={20000}
            className={`mt-1 ${field}`}
            placeholder="Pick a course above to draft the message, then edit it here."
          />
        </label>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => copy("Subject", subject)} disabled={!ready} className={secondaryBtn}>
          Copy subject
        </button>
        <button type="button" onClick={() => copy("Message", body)} disabled={!ready} className={secondaryBtn}>
          Copy message
        </button>
        {ready ? (
          <a href={mailtoHref(subject, body)} className={secondaryBtn}>
            Open in your email app
          </a>
        ) : null}
        <button
          type="button"
          onClick={saveDraft}
          disabled={busy || !ready}
          className="min-h-11 rounded-md px-4 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg, #fff)" }}
        >
          {busy ? "Saving…" : "Save as campaign draft"}
        </button>
      </div>

      <p aria-live="polite" className="mt-2 min-h-5 text-sm text-neutral-500">
        {status}
      </p>
    </div>
  );
}
