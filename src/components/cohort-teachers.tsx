"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Teacher {
  userId: string;
  name: string;
  email: string;
  isOwner: boolean;
}

// The "Teachers" panel on a class's page: who teaches it (the people its families can reach, and
// who can run it), plus add-by-email and remove for the class's creator or a school admin
// (`canAssign`). Everyone else who can open the page sees the list read-only. The server enforces
// all of it (POST/DELETE /api/cohorts/[id]/teachers); this only hides controls that would 403.
export function CohortTeachers({
  cohortId,
  teachers,
  canAssign,
}: {
  cohortId: string;
  teachers: Teacher[];
  canAssign: boolean;
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const res = await fetch(`/api/cohorts/${cohortId}/teachers`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (res.ok) {
      setEmail("");
      setMsg({ ok: true, text: "Teacher added." });
      router.refresh();
    } else {
      setMsg({ ok: false, text: data.error ?? "Couldn't add that teacher. Try again." });
    }
  }

  async function remove(t: Teacher) {
    if (!confirm(`Remove ${t.name} as a teacher of this class? Families will no longer see them listed.`)) return;
    const res = await fetch(`/api/cohorts/${cohortId}/teachers/${t.userId}`, { method: "DELETE" });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) setMsg({ ok: false, text: data.error ?? "Couldn't remove that teacher." });
    router.refresh();
  }

  return (
    <section aria-labelledby="cohort-teachers-h" className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 id="cohort-teachers-h" className="font-semibold">
        Teachers
      </h2>
      <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
        Teachers run this class and are the people its families can ask to talk. Teachers must be
        adults.
      </p>
      <ul className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">
        {teachers.map((t) => (
          <li key={t.userId} className="flex items-center justify-between gap-3 py-2 text-sm">
            <span className="min-w-0 break-words">
              {t.name}
              <span className="ml-2 text-xs text-neutral-600 dark:text-neutral-400">
                {t.email}
                {t.isOwner ? ", created this class" : ""}
              </span>
            </span>
            {canAssign ? (
              <button
                type="button"
                onClick={() => remove(t)}
                className="min-h-11 shrink-0 rounded px-2 text-xs text-red-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Remove
              </button>
            ) : null}
          </li>
        ))}
      </ul>
      {canAssign ? (
        <form onSubmit={add} className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end">
          <label className="flex-1 text-sm">
            Add a teacher by email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="teacher@example.com"
              className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
            />
          </label>
          <button
            type="submit"
            disabled={busy || email.trim().length === 0}
            className="min-h-11 shrink-0 rounded-md px-4 font-medium text-white disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {busy ? "Adding…" : "Add teacher"}
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
