"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export interface ManagedChildRow {
  userId: string;
  displayName: string;
}

// "Add a child" + "Study as" panel for Family Model B (login-less managed child
// profiles). Lives on /family alongside the read-only Model-A guardian view.
export function ManageChildren({ initialChildren }: { initialChildren: ManagedChildRow[] }) {
  const router = useRouter();
  const [children, setChildren] = useState(initialChildren);
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [switchingId, setSwitchingId] = useState<string | null>(null);

  function addChild(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    setError(null);
    startTransition(async () => {
      const res = await fetch("/api/family/children", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: trimmed }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Couldn't add that child. Try again.");
        return;
      }
      setChildren((cs) => [...cs, { userId: data.childUserId, displayName: trimmed }]);
      setName("");
      router.refresh();
    });
  }

  function studyAs(userId: string) {
    setSwitchingId(userId);
    startTransition(async () => {
      await fetch("/api/family/act-as", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ learnerId: userId }),
      });
      router.push("/courses");
      router.refresh();
    });
  }

  return (
    <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="text-lg font-semibold">Manage children</h2>
      <p className="mt-1 text-sm text-neutral-500">
        For young kids without their own email — add a profile, then &quot;study as&quot; it to browse
        and complete courses on their behalf. Their progress shows up below just like a linked child.
      </p>

      <form onSubmit={addChild} className="mt-4 flex flex-wrap items-center gap-2">
        <label htmlFor="child-name" className="sr-only">
          Child&apos;s name
        </label>
        <input
          id="child-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Child's name"
          maxLength={80}
          className="min-h-10 flex-1 rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
        />
        <button
          type="submit"
          disabled={pending || !name.trim()}
          className="min-h-10 rounded-md px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Add a child
        </button>
      </form>
      {error ? (
        <p role="alert" className="mt-2 text-sm text-amber-700 dark:text-amber-400">
          {error}
        </p>
      ) : null}

      {children.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {children.map((c) => (
            <li
              key={c.userId}
              className="flex items-center justify-between gap-3 rounded-md border border-neutral-200 px-3 py-2 text-sm dark:border-neutral-800"
            >
              <span>{c.displayName}</span>
              <button
                type="button"
                onClick={() => studyAs(c.userId)}
                disabled={pending}
                className="min-h-8 rounded-md border border-neutral-300 px-3 py-1 font-medium disabled:opacity-60 dark:border-neutral-700"
              >
                {pending && switchingId === c.userId ? "Switching…" : "Study as"}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
