"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { personLabel } from "@/lib/course-instructor";
import { MIN_DECLINE_NOTE } from "@/lib/course-requests";
import { MEMBER_EDIT_OWN_EMAIL } from "@/lib/account-settings";

// Client half of /admin/users. The server re-checks everything (POST /api/admin/courses/[id]/instructor,
// POST /api/admin/course-requests/[id]); these forms only send the choice and show the answer.

export interface TeacherOption {
  userId: string;
  role: "instructor" | "brand_admin";
  username: string | null;
  displayName: string | null;
  name: string | null;
  email: string;
}

export interface CourseOption {
  id: string;
  title: string;
  slug: string | null;
  /** Who teaches it now, as a label, so the admin can see what the change replaces. */
  instructorLabel: string;
  instructorId: string;
}

const field = "mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900";

export function AssignCourseTeacher({ teachers, courses }: { teachers: TeacherOption[]; courses: CourseOption[] }) {
  const router = useRouter();
  const [teacherId, setTeacherId] = useState(teachers[0]?.userId ?? "");
  const [courseId, setCourseId] = useState(courses[0]?.id ?? "");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const course = courses.find((c) => c.id === courseId);
  const teacher = teachers.find((t) => t.userId === teacherId);
  const sameAsNow = Boolean(course && teacher && course.instructorId === teacher.userId);

  async function assign(e: React.FormEvent) {
    e.preventDefault();
    if (!course || !teacher) return;
    setBusy(true);
    setMsg(null);
    const res = await fetch(`/api/admin/courses/${encodeURIComponent(course.id)}/instructor`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ instructorId: teacher.userId }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (res.ok && data.offered) {
      setMsg({
        ok: true,
        text: `Offered. ${personLabel(teacher)} sees "${course.title}" on their Teach page and has 14 days to accept; the course changes teacher when they do. You are emailed their answer.`,
      });
      router.refresh();
    } else if (res.ok) {
      setMsg({ ok: true, text: `Done. ${personLabel(teacher)} now teaches "${course.title}". The course moved to their Teach page.` });
      router.refresh();
    } else {
      setMsg({ ok: false, text: data.error ?? "Couldn't assign. Try again." });
    }
  }

  if (teachers.length === 0 || courses.length === 0) {
    return (
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {teachers.length === 0 ? "No teachers yet: make someone a teacher on Admin → Teachers first." : "No courses on this school yet."}
      </p>
    );
  }

  return (
    <form onSubmit={assign} className="mt-2 space-y-3 text-sm">
      <label className="block">
        Teacher
        <select value={teacherId} onChange={(e) => setTeacherId(e.target.value)} className={field}>
          {teachers.map((t) => (
            <option key={t.userId} value={t.userId}>
              {personLabel(t)}
              {t.role === "brand_admin" ? " (admin)" : ""}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        Course
        <select value={courseId} onChange={(e) => setCourseId(e.target.value)} className={field}>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title} (now: {c.instructorLabel})
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        disabled={busy || sameAsNow}
        className="min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {busy ? "Sending…" : sameAsNow ? "Already their course" : "Offer the course to this teacher"}
      </button>
      <p className="text-xs text-neutral-600 dark:text-neutral-400">
        The teacher gets an offer on their Teach page and by email. When they accept, they become the course&apos;s instructor: they
        edit, record and are bylined on it, and its URL moves to their username. The previous instructor loses edit access; you keep
        yours as an admin. Offers expire after 14 days; a new offer for the same course replaces the old one. Picking yourself takes
        effect at once. Every change is logged.
      </p>
      {msg ? (
        <p role={msg.ok ? "status" : "alert"} className={msg.ok ? "text-green-700 dark:text-green-400" : "text-red-600"}>
          {msg.text}
        </p>
      ) : null}
    </form>
  );
}

export function CourseRequestDecision({ requestId, title, kind = "new" }: { requestId: string; title: string; kind?: "new" | "existing" }) {
  const router = useRouter();
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState<"approve" | "decline" | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function decide(action: "approve" | "decline") {
    if (action === "decline" && note.trim().length < MIN_DECLINE_NOTE) {
      setMsg({ ok: false, text: `Tell the teacher why (at least ${MIN_DECLINE_NOTE} characters) before declining.` });
      return;
    }
    const approveQuestion =
      kind === "existing"
        ? `Approve? The teacher becomes the instructor of "${title}" now, and its current instructor loses edit access.`
        : `Approve "${title}"? A draft course is created with the teacher as its instructor.`;
    if (action === "approve" && !confirm(approveQuestion)) return;
    setBusy(action);
    setMsg(null);
    const res = await fetch(`/api/admin/course-requests/${encodeURIComponent(requestId)}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ action, note: note.trim() || undefined }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(null);
    if (res.ok) {
      setMsg({
        ok: true,
        text:
          action === "decline"
            ? "Declined. The teacher sees your note on Teach."
            : kind === "existing"
              ? "Approved. The course is on the teacher's Teach page now."
              : "Approved. The draft course is on the teacher's Teach page.",
      });
      router.refresh();
    } else {
      setMsg({ ok: false, text: data.error ?? "Couldn't do that. Try again." });
    }
  }

  return (
    <div className="mt-3 space-y-2 text-sm">
      <label className="block">
        Note to the teacher <span className="text-neutral-500">(required to decline, optional to approve)</span>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2} maxLength={1000} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900" />
      </label>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={busy !== null}
          onClick={() => decide("approve")}
          className="min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {busy === "approve" ? "Approving…" : kind === "existing" ? "Approve and hand them the course" : "Approve and create the draft"}
        </button>
        <button
          type="button"
          disabled={busy !== null}
          onClick={() => decide("decline")}
          className="min-h-11 rounded-md border border-red-300 px-4 text-red-700 disabled:opacity-60 dark:border-red-800 dark:text-red-400"
        >
          {busy === "decline" ? "Declining…" : "Decline with note"}
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

// Edit a member's display name, username and email (PATCH /api/admin/users/[userId], BAM 2026-11-10).
// The server decides who may edit whom (src/lib/account-settings.ts decideMemberEdit); this form is
// rendered only on rows the rule admits. On a failed save the fields keep what was typed.
export function MemberEditForm({
  userId,
  initial,
  emailLocked,
}: {
  userId: string;
  initial: { displayName: string; username: string; email: string };
  /** Why the email and username are fixed here (yourself, a child's profile), or null. */
  emailLocked: string | null;
}) {
  const router = useRouter();
  const [displayName, setDisplayName] = useState(initial.displayName);
  const [username, setUsername] = useState(initial.username);
  const [email, setEmail] = useState(initial.email);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    const body: Record<string, string> = {};
    if (displayName !== initial.displayName) body.displayName = displayName;
    if (username.trim() && username.trim().toLowerCase() !== initial.username) body.username = username;
    if (!emailLocked && email.trim().toLowerCase() !== initial.email.toLowerCase()) body.email = email;
    if (Object.keys(body).length === 0) {
      setMsg({ ok: false, text: "Nothing changed yet." });
      return;
    }
    if (body.email && !confirm(`Change this account's sign-in email to ${email.trim()}? It takes effect now, and both addresses get a notice.`)) return;
    setBusy(true);
    setMsg(null);
    let res: Response | null = null;
    try {
      res = await fetch(`/api/admin/users/${encodeURIComponent(userId)}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch {
      res = null;
    }
    const data = res ? await res.json().catch(() => ({})) : {};
    setBusy(false);
    if (res?.ok) {
      setMsg({ ok: true, text: "Saved. The change is logged." });
      router.refresh();
    } else if (!res) {
      setMsg({ ok: false, text: "You seem to be offline. Your changes are still here; try again when you're connected." });
    } else if (res.status >= 500) {
      setMsg({ ok: false, text: "Something went wrong on our side. Your changes are still here; try again in a minute." });
    } else {
      setMsg({ ok: false, text: data.error ?? "Couldn't save. Check the fields and try again." });
    }
  }

  return (
    <form onSubmit={save} className="mt-2 space-y-2 text-sm">
      <label className="block">
        Display name
        <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} maxLength={120} className={field} />
      </label>
      <label className="block">
        Username
        <input value={username} onChange={(e) => setUsername(e.target.value)} maxLength={30} disabled={Boolean(emailLocked) && emailLocked !== MEMBER_EDIT_OWN_EMAIL} autoCapitalize="none" spellCheck={false} className={`${field} disabled:opacity-60`} />
      </label>
      <label className="block">
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={254} disabled={Boolean(emailLocked)} className={`${field} disabled:opacity-60`} />
        {emailLocked ? <span className="mt-1 block text-xs text-neutral-600 dark:text-neutral-400">{emailLocked}</span> : null}
      </label>
      <button type="submit" disabled={busy} className="min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
        {busy ? "Saving…" : "Save changes"}
      </button>
      <p className="text-xs text-neutral-600 dark:text-neutral-400">
        An email change takes effect at once; sign-in links go to the new address. A username change moves the person&apos;s course links.
      </p>
      {msg ? (
        <p role={msg.ok ? "status" : "alert"} className={msg.ok ? "text-green-700 dark:text-green-400" : "text-red-600"}>
          {msg.text}
        </p>
      ) : null}
    </form>
  );
}

// The platform owner marks an "ask to delete my account" request handled (POST /api/admin/deletion-requests/[id]).
export function ResolveDeletionRequest({ requestId }: { requestId: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  async function resolve() {
    if (!confirm("Mark this request handled? Do this after you have deleted the account, or decided with the person to keep it.")) return;
    setBusy(true);
    setMsg(null);
    const res = await fetch(`/api/admin/deletion-requests/${encodeURIComponent(requestId)}`, { method: "POST" }).catch(() => null);
    const data = res ? await res.json().catch(() => ({})) : {};
    setBusy(false);
    if (res?.ok) router.refresh();
    else setMsg({ ok: false, text: res ? (data.error ?? "Couldn't mark it. Try again.") : "You seem to be offline. Try again when you're connected." });
  }
  return (
    <span className="inline-flex flex-col gap-1">
      <button type="button" onClick={resolve} disabled={busy} className="min-h-11 rounded-md border border-neutral-300 px-3 text-sm disabled:opacity-60 dark:border-neutral-700">
        {busy ? "Marking…" : "Mark handled"}
      </button>
      {msg ? (
        <span role="alert" className="text-xs text-red-600">
          {msg.text}
        </span>
      ) : null}
    </span>
  );
}
