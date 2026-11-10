"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { personLabel } from "@/lib/course-instructor";
import { MIN_DECLINE_NOTE } from "@/lib/course-requests";

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
    if (res.ok) {
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
        {busy ? "Assigning…" : sameAsNow ? "Already their course" : "Assign this teacher"}
      </button>
      <p className="text-xs text-neutral-600 dark:text-neutral-400">
        The teacher becomes the course&apos;s instructor: they edit, record and are bylined on it, and its URL moves to their
        username. The previous instructor loses edit access; you keep yours as an admin. Every change is logged.
      </p>
      {msg ? (
        <p role={msg.ok ? "status" : "alert"} className={msg.ok ? "text-green-700 dark:text-green-400" : "text-red-600"}>
          {msg.text}
        </p>
      ) : null}
    </form>
  );
}

export function CourseRequestDecision({ requestId, title }: { requestId: string; title: string }) {
  const router = useRouter();
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState<"approve" | "decline" | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function decide(action: "approve" | "decline") {
    if (action === "decline" && note.trim().length < MIN_DECLINE_NOTE) {
      setMsg({ ok: false, text: `Tell the teacher why (at least ${MIN_DECLINE_NOTE} characters) before declining.` });
      return;
    }
    if (action === "approve" && !confirm(`Approve "${title}"? A draft course is created with the teacher as its instructor.`)) return;
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
      setMsg({ ok: true, text: action === "approve" ? "Approved. The draft course is on the teacher's Teach page." : "Declined. The teacher sees your note on Teach." });
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
          {busy === "approve" ? "Approving…" : "Approve and create the draft"}
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
