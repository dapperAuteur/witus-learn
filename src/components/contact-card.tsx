"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CONTACT_MODE_LABELS, CONTACT_MODES, type ContactMode } from "@/lib/contact";
import type { CardDetails, ContactCard } from "@/lib/contact-cards";

// One related adult, as the viewer is allowed to see them (the server already stripped anything
// they may not: src/lib/contact-cards.ts). Lives inline on /family (under a child) and on a class
// roster (under a student). NOT an inbox: no list page, no history, no read state, no reply box.
// A ping appears here while it is active and is gone once the asker marks it connected or it expires.

export interface SchoolContact {
  brand: string;
  /** The school's own reply-to address from its settings, or null when it has none. */
  email: string | null;
}

export interface ViewerContact {
  adult: boolean;
  email: string;
  phone: string | null;
}

const btn =
  "inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 pointer-coarse:min-h-12";

function day(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function Details({ d }: { d: CardDetails }) {
  return (
    <ul className="mt-1 space-y-1 text-sm">
      <li className="break-all">
        <a href={`mailto:${d.email}`} className="underline">
          {d.email}
        </a>
      </li>
      {d.phone ? (
        <li>
          <a href={`tel:${d.phone.replace(/[^+\d]/g, "")}`} className="underline">
            {d.phone}
          </a>
        </li>
      ) : null}
      {d.note ? <li className="text-neutral-700 dark:text-neutral-300">Best time: {d.note}</li> : null}
    </ul>
  );
}

function OverrideSelect({ card }: { card: ContactCard }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const value = card.myOverride ?? "default";

  async function change(next: string) {
    setBusy(true);
    setErr(null);
    const res = await fetch("/api/contact/overrides", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ otherUserId: card.counterpartId, mode: next }),
    });
    setBusy(false);
    if (!res.ok) setErr("Couldn't save that. Try again.");
    router.refresh();
  }

  return (
    <label className="mt-3 block text-xs text-neutral-600 dark:text-neutral-400">
      How {card.counterpartName} may reach you
      <select
        value={value}
        disabled={busy}
        onChange={(e) => change(e.target.value)}
        className="mt-1 block min-h-11 w-full rounded-md border border-neutral-300 bg-white px-2 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
      >
        <option value="default">Use my default ({CONTACT_MODE_LABELS[card.myDefault].toLowerCase()})</option>
        {CONTACT_MODES.map((m: ContactMode) => (
          <option key={m} value={m}>
            {CONTACT_MODE_LABELS[m]}
          </option>
        ))}
      </select>
      {err ? <span role="alert" className="mt-1 block text-red-600">{err}</span> : null}
    </label>
  );
}

function PingButton({ card, me }: { card: ContactCard; me: ViewerContact }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const label =
    card.view === "details"
      ? `Let ${card.counterpartName} know you'd like to talk`
      : `Ask ${card.counterpartName} to get in touch`;

  async function send() {
    setBusy(true);
    setErr(null);
    const res = await fetch("/api/contact/pings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ toUserId: card.counterpartId, studentUserId: card.studentUserId, cohortId: card.cohortId }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) return setErr(data.error ?? "Couldn't send that. Try again.");
    setOpen(false);
    router.refresh();
  }

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className={`${btn} mt-2 text-white`} style={{ backgroundColor: "var(--accent)" }}>
        {label}
      </button>
    );
  }
  return (
    <div className="mt-2 space-y-2 rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900/60">
      <p>
        {card.counterpartName} will see, next time they open this app, that you&apos;d like to talk about{" "}
        {card.studentName}, along with your account email <span className="break-all font-medium">{me.email}</span>
        {me.phone ? <> and your phone number</> : null}.
      </p>
      <p>
        Once you&apos;ve started talking, mark it here. If you haven&apos;t within 48 hours, we&apos;ll email{" "}
        {card.counterpartName} once, and replying to that email reaches you directly. Nothing you type is
        sent, because there is nothing to type.
      </p>
      <div className="flex flex-wrap gap-2">
        <button type="button" disabled={busy} onClick={send} className={`${btn} text-white`} style={{ backgroundColor: "var(--accent)" }}>
          {busy ? "Sending…" : "Send"}
        </button>
        <button type="button" onClick={() => setOpen(false)} className={`${btn} border border-neutral-300 dark:border-neutral-700`}>
          Cancel
        </button>
      </div>
      {err ? <p role="alert" className="text-red-600">{err}</p> : null}
    </div>
  );
}

function ConnectedButton({ pingId }: { pingId: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  async function mark() {
    setBusy(true);
    await fetch(`/api/contact/pings/${pingId}/connected`, { method: "POST" }).catch(() => {});
    setBusy(false);
    router.refresh();
  }
  return (
    <button type="button" disabled={busy} onClick={mark} className={`${btn} mt-2 border border-neutral-300 dark:border-neutral-700`}>
      {busy ? "Saving…" : "We've started talking"}
    </button>
  );
}

export function ContactCardView({ card, me, school }: { card: ContactCard; me: ViewerContact; school: SchoolContact }) {
  const roleWord = card.counterpartRole === "teacher" ? "Teacher" : "Parent";
  return (
    <div className="rounded-md border border-neutral-200 p-3 text-sm dark:border-neutral-800">
      <p>
        <span className="font-medium">{card.counterpartName}</span>
        <span className="text-neutral-600 dark:text-neutral-400">
          {" "}
          {roleWord}, {card.cohortName}
        </span>
      </p>

      {card.incoming ? (
        <div role="status" className="mt-2 rounded-md border-l-4 bg-neutral-50 p-3 dark:bg-neutral-900/60" style={{ borderColor: "var(--accent)" }}>
          <p className="font-medium">
            {card.counterpartName} would like to talk about{" "}
            <Link href={card.studentHref} className="underline">
              {card.studentName}
            </Link>
            .
          </p>
          <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
            Asked {day(card.incoming.createdAt)}
            {card.incoming.emailedAt ? `, and we emailed you about it on ${day(card.incoming.emailedAt)}` : ""}. Reach them
            directly:
          </p>
          <Details d={card.incoming.details} />
        </div>
      ) : null}

      {!me.adult ? (
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Confirm you are 18 or older (above) to contact {card.counterpartName}.
        </p>
      ) : (
        <>
          {card.view === "details" && card.details && !card.incoming ? <Details d={card.details} /> : null}
          {card.view === "school" ? (
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              {card.counterpartName} asks to be contacted through the school
              {school.email ? (
                <>
                  :{" "}
                  <a href={`mailto:${school.email}`} className="break-all underline">
                    {school.email}
                  </a>
                </>
              ) : (
                <>, {school.brand}</>
              )}
              .
            </p>
          ) : card.outgoing ? (
            <div className="mt-2">
              <p>
                You asked on {day(card.outgoing.createdAt)}.{" "}
                {card.outgoing.emailedAt
                  ? `We emailed ${card.counterpartName} about it on ${day(card.outgoing.emailedAt)}.`
                  : `If you haven't marked this by ${day(card.outgoing.emailDueAt)}, we'll email ${card.counterpartName} once for you.`}
              </p>
              <ConnectedButton pingId={card.outgoing.pingId} />
            </div>
          ) : (
            <PingButton card={card} me={me} />
          )}
          <OverrideSelect card={card} />
        </>
      )}
    </div>
  );
}
