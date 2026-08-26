"use client";

import { useId, useState } from "react";
import {
  CAPACITIES,
  INTEREST_ACK,
  INTEREST_PRIVACY_NOTICE,
  INTEREST_ROUTING_NOTICE,
  PHONE_HINT,
  type InterestCapacity,
} from "@/lib/course-interest";

// "Put my hand up on this course", the self-nomination form on an UNVETTED course's public landing
// page. Rendered only for the stranger view: the owner, the course's instructor and anyone already
// enrolled get the real course, so they never see this.
//
// Three capacities, one radio group, because they are three different jobs and a checkbox list
// would let someone claim all three and mean none of them. Picking beta or expert asks for a
// background, since that is the only thing the instructor can weigh a self-nomination on.
//
// WHAT IS REQUIRED, and why email rather than phone: a name and an email address. Email, because
// approval mints a course_auditors grant and that grant is keyed on an EMAIL address, so without
// one there is literally no way to approve anybody. Phone is optional and is only a nicety for the
// instructor. Credentials are optional too.
//
// The privacy copy is not decorative and it is not summarised: INTEREST_PRIVACY_NOTICE and
// INTEREST_ROUTING_NOTICE are rendered verbatim, above the button, in normal reading colour, and
// the isolation suite pins both strings. Between them they say who sees the sensitive fields and
// where the rest of the submission goes, which is the whole of what we do with it.
//
// The server (POST /api/course-interest) re-validates everything, resolves the tenant from the
// request host, and refuses any course that is not actually published-and-unvetted. It records a
// PENDING request and nothing more: nothing here can grant access to anything.
export function CourseInterestForm({
  courseId,
  defaultEmail,
  defaultName,
}: {
  courseId: string;
  /** The signed-in visitor's address, prefilled but editable so they confirm or change it. */
  defaultEmail?: string;
  defaultName?: string;
}) {
  const id = useId();
  const [capacity, setCapacity] = useState<InterestCapacity>("learner");
  const [name, setName] = useState(defaultName ?? "");
  const [email, setEmail] = useState(defaultEmail ?? "");
  const [phone, setPhone] = useState("");
  const [credentials, setCredentials] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const wantsBackground = capacity !== "learner";

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    setError(null);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/course-interest", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          courseId,
          capacity,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          credentials: credentials.trim(),
          company: String(fd.get("company") ?? ""),
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "That did not go through. Try again.");
        setState("error");
        return;
      }
      setState("done");
    } catch {
      setError("We could not reach the server. Check your connection and try again.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p role="status" className="mt-4 text-sm font-medium" style={{ color: "var(--accent)" }}>
        {INTEREST_ACK}
      </p>
    );
  }

  const inputClass =
    "mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12 dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <form onSubmit={submit} className="mt-4">
      <fieldset>
        <legend className="text-sm font-medium">How would you like to be involved?</legend>
        <div className="mt-2 space-y-2">
          {CAPACITIES.map((c) => (
            <label
              key={c.value}
              htmlFor={`${id}-${c.value}`}
              className="flex min-h-11 cursor-pointer items-start gap-3 rounded-md border border-neutral-200 p-3 pointer-coarse:min-h-12 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 dark:border-neutral-800"
            >
              <input
                id={`${id}-${c.value}`}
                type="radio"
                name={`${id}-capacity`}
                value={c.value}
                checked={capacity === c.value}
                onChange={() => setCapacity(c.value)}
                className="mt-1 h-5 w-5 shrink-0"
              />
              <span className="min-w-0">
                <span className="block text-sm font-medium">{c.label}</span>
                <span className="mt-0.5 block text-xs text-neutral-600 dark:text-neutral-400">
                  {c.blurb}
                </span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="block text-sm font-medium">
            Your name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="block text-sm font-medium">
            Email address
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
          <p id={`${id}-email-hint`} className="mt-1 text-xs text-neutral-600">
            How we reply, and how a review invitation would reach you.
          </p>
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor={`${id}-phone`} className="block text-sm font-medium">
          Phone number <span className="font-normal text-neutral-600">(optional)</span>
        </label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
          placeholder="+44 20 7123 4567"
          aria-describedby={`${id}-phone-hint`}
          className={inputClass}
        />
        <p id={`${id}-phone-hint`} className="mt-1 text-xs text-neutral-600">
          {PHONE_HINT}
        </p>
      </div>

      <div className="mt-3">
        <label htmlFor={`${id}-credentials`} className="block text-sm font-medium">
          {wantsBackground ? "Your background" : "Anything else"}{" "}
          <span className="font-normal text-neutral-600">(optional)</span>
        </label>
        <textarea
          id={`${id}-credentials`}
          name="credentials"
          rows={4}
          maxLength={2000}
          value={credentials}
          onChange={(ev) => setCredentials(ev.target.value)}
          aria-describedby={`${id}-credentials-hint`}
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900"
        />
        <p id={`${id}-credentials-hint`} className="mt-1 text-xs text-neutral-600">
          {wantsBackground
            ? "Qualifications, licences, publications, years in the field: whatever tells the instructor how to weigh your notes."
            : "Anything you want the instructor to know."}
        </p>
      </div>

      {/* Honeypot: off-screen, not hidden, so a bot fills it and a screen reader skips it. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="mt-4 rounded-md bg-neutral-100 p-3 text-xs text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
        <p>{INTEREST_PRIVACY_NOTICE}</p>
        <p className="mt-2">{INTEREST_ROUTING_NOTICE}</p>
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-4 min-h-11 w-full rounded-md px-4 font-medium text-white disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12 sm:w-auto"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {state === "sending" ? "Sending…" : "Put my name in"}
      </button>

      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </form>
  );
}
