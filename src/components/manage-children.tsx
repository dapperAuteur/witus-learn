"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { KID_AVATARS } from "@/lib/kid-avatars";

export interface ManagedChildRow {
  userId: string;
  displayName: string;
  loginMethod: string;
  avatarKey: string | null;
}

interface CohortOption {
  id: string;
  name: string;
}

const LOGIN_METHOD_LABEL: Record<string, string> = {
  none: "Not set up yet",
  magic_link: "Email sign-in",
  avatar_pin: "Avatar + PIN",
};

// "Add a child" + "Study as" + "How does this child sign in?" panel for Family Model B
// (login-less managed child profiles). Lives on /family alongside the read-only Model-A
// guardian view. The avatar+PIN sub-form posts to /api/family/children/[id]/login, which
// re-verifies isManagedChildOf server-side — this component never trusts its own props
// for anything but rendering.
export function ManageChildren({ initialChildren }: { initialChildren: ManagedChildRow[] }) {
  const router = useRouter();
  const [children, setChildren] = useState(initialChildren);
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [switchingId, setSwitchingId] = useState<string | null>(null);
  const [openLoginFor, setOpenLoginFor] = useState<string | null>(null);

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
      setChildren((cs) => [
        ...cs,
        { userId: data.childUserId, displayName: trimmed, loginMethod: "none", avatarKey: null },
      ]);
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

  function onLoginUpdated(userId: string, loginMethod: string, avatarKey: string | null) {
    setChildren((cs) => cs.map((c) => (c.userId === userId ? { ...c, loginMethod, avatarKey } : c)));
  }

  return (
    <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="text-lg font-semibold">Manage children</h2>
      <p className="mt-1 text-sm text-neutral-500">
        For young kids without their own email, add a profile, then &quot;study as&quot; it to browse
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
              className="rounded-md border border-neutral-200 px-3 py-2 text-sm dark:border-neutral-800"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span>{c.displayName}</span>
                  <span className="ml-2 text-xs text-neutral-500">
                    {c.avatarKey ? `${KID_AVATARS.find((a) => a.key === c.avatarKey)?.emoji ?? ""} ` : ""}
                    {LOGIN_METHOD_LABEL[c.loginMethod] ?? c.loginMethod}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setOpenLoginFor(openLoginFor === c.userId ? null : c.userId)}
                    className="min-h-8 rounded-md border border-neutral-300 px-3 py-1 font-medium disabled:opacity-60 dark:border-neutral-700"
                  >
                    Sign-in settings
                  </button>
                  <button
                    type="button"
                    onClick={() => studyAs(c.userId)}
                    disabled={pending}
                    className="min-h-8 rounded-md border border-neutral-300 px-3 py-1 font-medium disabled:opacity-60 dark:border-neutral-700"
                  >
                    {pending && switchingId === c.userId ? "Switching…" : "Study as"}
                  </button>
                </div>
              </div>
              {openLoginFor === c.userId ? (
                <ChildLoginSettings
                  child={c}
                  onUpdated={(method, avatarKey) => onLoginUpdated(c.userId, method, avatarKey)}
                />
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

// "How does this child sign in?" — None / Email / Avatar+PIN. Only Avatar+PIN needs
// extra input (an avatar + a 4-6 digit PIN, plus which class to enroll them in so they
// get a class code). Kept collapsed by default so the child list stays scannable.
function ChildLoginSettings({
  child,
  onUpdated,
}: {
  child: ManagedChildRow;
  onUpdated: (method: string, avatarKey: string | null) => void;
}) {
  const [method, setMethod] = useState(child.loginMethod === "avatar_pin" ? "avatar_pin" : child.loginMethod || "none");
  const [avatarKey, setAvatarKey] = useState<string | null>(child.avatarKey);
  const [pin, setPin] = useState("");
  const [cohorts, setCohorts] = useState<CohortOption[] | null>(null);
  const [cohortId, setCohortId] = useState<string>("");
  const [classCode, setClassCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (method !== "avatar_pin" || cohorts) return;
    fetch("/api/cohorts")
      .then((r) => r.json())
      .then((data) => setCohorts((data.cohorts ?? []).map((co: { id: string; name: string }) => ({ id: co.id, name: co.name }))))
      .catch(() => setCohorts([]));
  }, [method, cohorts]);

  function save(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const res = await fetch(`/api/family/children/${child.userId}/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          method,
          avatarKey: method === "avatar_pin" ? avatarKey : undefined,
          pin: method === "avatar_pin" ? pin : undefined,
          cohortId: method === "avatar_pin" && cohortId ? cohortId : undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Couldn't save that. Try again.");
        return;
      }
      setClassCode(data.classCode ?? null);
      setPin("");
      onUpdated(method, method === "avatar_pin" ? avatarKey : null);
    });
  }

  return (
    <form onSubmit={save} className="mt-3 space-y-3 border-t border-neutral-200 pt-3 dark:border-neutral-800">
      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          How does {child.displayName} sign in?
        </legend>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          {[
            { value: "none", label: "None (study as only)" },
            { value: "magic_link", label: "Email" },
            { value: "avatar_pin", label: "Avatar + PIN" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-1.5">
              <input
                type="radio"
                name={`login-method-${child.userId}`}
                value={opt.value}
                checked={method === opt.value}
                onChange={() => setMethod(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      {method === "avatar_pin" ? (
        <>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Avatar</p>
            <div className="mt-2 grid grid-cols-5 gap-1.5 sm:grid-cols-8">
              {KID_AVATARS.map((a) => (
                <button
                  key={a.key}
                  type="button"
                  aria-label={a.label}
                  aria-pressed={avatarKey === a.key}
                  onClick={() => setAvatarKey(a.key)}
                  className={`flex h-10 w-10 items-center justify-center rounded-md border text-xl ${
                    avatarKey === a.key
                      ? "border-2"
                      : "border-neutral-300 dark:border-neutral-700"
                  }`}
                  style={avatarKey === a.key ? { borderColor: "var(--accent)" } : undefined}
                >
                  {a.emoji}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor={`pin-${child.userId}`} className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              New PIN (4-6 digits)
            </label>
            <input
              id={`pin-${child.userId}`}
              type="password"
              inputMode="numeric"
              pattern="\d*"
              maxLength={6}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
              placeholder={child.loginMethod === "avatar_pin" ? "Leave blank to keep current PIN" : "e.g. 4821"}
              className="mt-1 block min-h-10 w-40 rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            />
          </div>

          <div>
            <label htmlFor={`cohort-${child.userId}`} className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Class (for the class code)
            </label>
            <select
              id={`cohort-${child.userId}`}
              value={cohortId}
              onChange={(e) => setCohortId(e.target.value)}
              className="mt-1 block min-h-10 w-full max-w-xs rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            >
              <option value="">Already in a class / decide later</option>
              {(cohorts ?? []).map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </>
      ) : null}

      {error ? (
        <p role="alert" className="text-sm text-amber-700 dark:text-amber-400">
          {error}
        </p>
      ) : null}
      {classCode ? (
        <p className="text-sm">
          Class code: <span className="font-mono font-semibold">{classCode}</span>, share this with{" "}
          {child.displayName} so they can sign in at <span className="font-mono">/kids</span>.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending || (method === "avatar_pin" && (!avatarKey || (child.loginMethod !== "avatar_pin" && !pin)))}
        className="min-h-9 rounded-md px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {pending ? "Saving…" : "Save"}
      </button>
    </form>
  );
}
