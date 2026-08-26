"use client";

import { useId, useRef, useState } from "react";

// "Contact us for pricing" — the /explore enquiry form.
//
// It states NO price, because there isn't one to state: pricing here is a conversation, and the
// honest move is to have it rather than to invent a number. The form is deliberately short (six
// fields, two of them optional) — every extra field costs a reply.
//
// The server (POST /api/pricing-inquiry) re-validates everything with the same rules and resolves
// the tenant from the request host. Nothing here is trusted, and nothing here names a brand.

const ROLES: { value: string; label: string }[] = [
  { value: "parent", label: "Parent" },
  { value: "teacher", label: "Teacher" },
  { value: "homeschooler", label: "Homeschooler" },
  { value: "school_district", label: "School or district" },
  { value: "other", label: "Other" },
];

type FieldErrors = Record<string, string>;

export function PricingContactForm() {
  const id = useId();
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setErrors({});
    setFormError(null);

    const fd = new FormData(e.currentTarget);
    const students = String(fd.get("students") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      role: String(fd.get("role") ?? ""),
      // Omit rather than send "" — the field is optional, and an empty string is not a number.
      ...(students ? { students } : {}),
      ...(message ? { message } : {}),
      company: String(fd.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/pricing-inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string; fieldErrors?: FieldErrors }
        | null;

      if (!res.ok) {
        setErrors(data?.fieldErrors ?? {});
        setFormError(data?.error ?? "Something went wrong. Try again.");
        setState("error");
        return;
      }
      setState("done");
    } catch {
      setFormError("We could not reach the server. Check your connection and try again.");
      setState("error");
    }
  }

  // The confirmation is the same whether or not our own notification email went out, because from
  // the sender's side it is equally true: the message has been received and it is on the record.
  if (state === "done") {
    return (
      <div
        role="status"
        ref={statusRef}
        className="rounded-xl border-2 p-5"
        style={{ borderColor: "var(--accent)" }}
      >
        <h3 className="text-lg font-semibold">Got it, thank you.</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          Your message is with us and a human will read it. We&apos;ll reply to the email address you
          gave us with pricing for the number of students you have in mind.
        </p>
      </div>
    );
  }

  const field =
    "mt-1.5 block w-full min-h-11 rounded-md border border-neutral-300 bg-white px-3 py-2 text-base focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12";
  const labelClass = "block text-sm font-medium";
  const errClass = "mt-1 text-sm text-red-600 dark:text-red-400";

  function describedBy(name: string, hint?: string): string | undefined {
    const ids = [hint, errors[name] ? `${id}-${name}-err` : null].filter(Boolean);
    return ids.length > 0 ? ids.join(" ") : undefined;
  }

  return (
    <form onSubmit={submit} noValidate className="mt-5 max-w-xl">
      {formError ? (
        <p role="alert" className="mb-4 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
          {formError}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor={`${id}-name`} className={labelClass}>
            Your name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            className={field}
          />
          {errors.name ? (
            <p id={`${id}-name-err`} className={errClass}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            className={field}
          />
          {errors.email ? (
            <p id={`${id}-email-err`} className={errClass}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${id}-role`} className={labelClass}>
            You are a…
          </label>
          <select
            id={`${id}-role`}
            name="role"
            required
            defaultValue=""
            aria-invalid={errors.role ? true : undefined}
            aria-describedby={describedBy("role")}
            className={field}
          >
            <option value="" disabled>
              Choose one
            </option>
            {ROLES.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
          {errors.role ? (
            <p id={`${id}-role-err`} className={errClass}>
              {errors.role}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${id}-students`} className={labelClass}>
            How many students?{" "}
            <span className="font-normal text-neutral-600">(optional)</span>
          </label>
          <input
            id={`${id}-students`}
            name="students"
            type="number"
            inputMode="numeric"
            min={1}
            step={1}
            aria-invalid={errors.students ? true : undefined}
            aria-describedby={describedBy("students", `${id}-students-hint`)}
            className={field}
          />
          <p id={`${id}-students-hint`} className="mt-1 text-xs text-neutral-600">
            One child or a whole district, both are fine.
          </p>
          {errors.students ? (
            <p id={`${id}-students-err`} className={errClass}>
              {errors.students}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className={labelClass}>
            Anything we should know? <span className="font-normal text-neutral-600">(optional)</span>
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={4}
            maxLength={2000}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={describedBy("message")}
            className={`${field} min-h-24`}
          />
          {errors.message ? (
            <p id={`${id}-message-err`} className={errClass}>
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {/* Honeypot. Hidden from people and from assistive tech; a bot fills it and gets binned
          server-side. tabIndex -1 + aria-hidden so a keyboard or screen-reader user never lands
          on it, which is what makes it safe to treat as "only a bot could have done this". */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-company`}>Company (leave this empty)</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 sm:w-auto pointer-coarse:min-h-12"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {state === "sending" ? "Sending…" : "Ask about pricing"}
      </button>
      <p className="mt-3 text-xs text-neutral-600">
        We use your email to answer you. That&apos;s it.
      </p>
    </form>
  );
}
