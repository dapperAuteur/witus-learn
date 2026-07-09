"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { getAvatarEmoji } from "@/lib/kid-avatars";

interface AvatarOption {
  childUserId: string;
  displayName: string;
  avatarKey: string;
}

type Step = "code" | "avatar" | "pin";

// Big, friendly, high-contrast, large-tap-target sign-in for young kids: enter the class
// code → tap your avatar → tap your PIN. Errors are always generic ("That didn't work")
// — the API never reveals whether the code, the child, or the PIN was the problem, so
// this UI can't either. On success the child lands on /dashboard with their OWN session.
export function KidSignIn() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("code");
  const [classCode, setClassCode] = useState("");
  const [avatars, setAvatars] = useState<AvatarOption[]>([]);
  const [selected, setSelected] = useState<AvatarOption | null>(null);
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function submitCode(e: React.FormEvent) {
    e.preventDefault();
    const code = classCode.trim().toUpperCase();
    if (!code) return;
    setError(null);
    startTransition(async () => {
      const res = await fetch(`/api/kid-login/avatars?classCode=${encodeURIComponent(code)}`);
      const data = await res.json().catch(() => ({ avatars: [] }));
      const list: AvatarOption[] = data.avatars ?? [];
      if (list.length === 0) {
        // Generic: could be a bad code OR a real class with no avatar+PIN kids. Never distinguish.
        setError("We couldn't find that class code. Check it and try again.");
        return;
      }
      setAvatars(list);
      setStep("avatar");
    });
  }

  function pickAvatar(a: AvatarOption) {
    setSelected(a);
    setPin("");
    setError(null);
    setStep("pin");
  }

  function pressDigit(d: string) {
    setError(null);
    setPin((p) => (p.length >= 6 ? p : p + d));
  }

  function backspace() {
    setError(null);
    setPin((p) => p.slice(0, -1));
  }

  function submitPin() {
    if (!selected || pin.length < 4) return;
    setError(null);
    startTransition(async () => {
      const res = await fetch("/api/kid-login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ classCode: classCode.trim().toUpperCase(), childUserId: selected.childUserId, pin }),
      });
      if (!res.ok) {
        setPin("");
        setError("That didn't work. Try your PIN again.");
        return;
      }
      // Their own session cookie is now set — go to their dashboard.
      router.push("/dashboard");
      router.refresh();
    });
  }

  return (
    <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {step === "code" ? (
        <form onSubmit={submitCode}>
          <h1 className="text-2xl font-bold">Hi! What&apos;s your class code?</h1>
          <p className="mt-1 text-sm text-neutral-500">Ask your teacher or grown-up.</p>
          <label htmlFor="class-code" className="sr-only">
            Class code
          </label>
          <input
            id="class-code"
            value={classCode}
            onChange={(e) => setClassCode(e.target.value.toUpperCase())}
            placeholder="ABC123"
            autoComplete="off"
            autoCapitalize="characters"
            maxLength={32}
            className="mt-4 block w-full rounded-xl border-2 border-neutral-300 px-4 py-4 text-center text-3xl font-bold tracking-widest uppercase dark:border-neutral-700 dark:bg-neutral-950"
          />
          {error ? (
            <p role="alert" className="mt-3 text-center text-base font-medium text-amber-700 dark:text-amber-400">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={pending || !classCode.trim()}
            className="mt-4 min-h-14 w-full rounded-xl px-4 text-lg font-bold text-white disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {pending ? "Checking…" : "Next"}
          </button>
        </form>
      ) : null}

      {step === "avatar" ? (
        <div>
          <h1 className="text-2xl font-bold">Tap your picture</h1>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {avatars.map((a) => (
              <button
                key={a.childUserId}
                type="button"
                onClick={() => pickAvatar(a)}
                className="flex flex-col items-center gap-1 rounded-xl border-2 border-neutral-200 p-3 hover:border-[var(--accent)] dark:border-neutral-700"
              >
                <span className="text-5xl" aria-hidden>
                  {getAvatarEmoji(a.avatarKey)}
                </span>
                <span className="text-sm font-semibold">{a.displayName}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              setStep("code");
              setError(null);
            }}
            className="mt-5 min-h-12 w-full rounded-xl border-2 border-neutral-300 px-4 text-base font-semibold dark:border-neutral-700"
          >
            Back
          </button>
        </div>
      ) : null}

      {step === "pin" && selected ? (
        <div>
          <div className="flex items-center gap-3">
            <span className="text-4xl" aria-hidden>
              {getAvatarEmoji(selected.avatarKey)}
            </span>
            <h1 className="text-2xl font-bold">Hi {selected.displayName}! Enter your PIN</h1>
          </div>

          <div className="mt-4 flex justify-center gap-2" aria-label={`PIN has ${pin.length} digits`}>
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className={`h-4 w-4 rounded-full ${i < pin.length ? "" : "opacity-25"}`}
                style={{ backgroundColor: i < pin.length ? "var(--accent)" : "#9ca3af" }}
              />
            ))}
          </div>

          {error ? (
            <p role="alert" className="mt-3 text-center text-base font-medium text-amber-700 dark:text-amber-400">
              {error}
            </p>
          ) : null}

          <div className="mt-5 grid grid-cols-3 gap-3">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => pressDigit(d)}
                disabled={pending}
                className="min-h-16 rounded-xl border-2 border-neutral-200 text-2xl font-bold disabled:opacity-60 dark:border-neutral-700"
              >
                {d}
              </button>
            ))}
            <button
              type="button"
              onClick={backspace}
              disabled={pending}
              className="min-h-16 rounded-xl border-2 border-neutral-200 text-xl font-semibold disabled:opacity-60 dark:border-neutral-700"
              aria-label="Delete"
            >
              ⌫
            </button>
            <button
              type="button"
              onClick={() => pressDigit("0")}
              disabled={pending}
              className="min-h-16 rounded-xl border-2 border-neutral-200 text-2xl font-bold disabled:opacity-60 dark:border-neutral-700"
            >
              0
            </button>
            <button
              type="button"
              onClick={submitPin}
              disabled={pending || pin.length < 4}
              className="min-h-16 rounded-xl px-2 text-base font-bold text-white disabled:opacity-40"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {pending ? "…" : "Go"}
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setStep("avatar");
              setPin("");
              setError(null);
            }}
            className="mt-5 min-h-12 w-full rounded-xl border-2 border-neutral-300 px-4 text-base font-semibold dark:border-neutral-700"
          >
            Back
          </button>
        </div>
      ) : null}
    </div>
  );
}
