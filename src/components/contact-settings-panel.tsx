"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CONTACT_MODE_HELP,
  CONTACT_MODE_LABELS,
  CONTACT_MODES,
  CONTACT_NOTE_MAX,
  CONTACT_PHONE_MAX,
  type ContactMode,
} from "@/lib/contact";

// A person's contact defaults on this school: how parents of their students may reach them, how
// teachers of their children may reach them, and optional phone and availability note. Shown on
// /family (parent side) and /cohorts (teacher side); `show` decides which default(s) this page
// offers, and both pages save the same record. Per-person overrides live on each person's card.

interface Settings {
  parentsMode: ContactMode;
  teachersMode: ContactMode;
  phone: string | null;
  note: string | null;
}

function ModeFieldset({
  legend,
  name,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  value: ContactMode;
  onChange: (m: ContactMode) => void;
}) {
  return (
    <fieldset className="space-y-1">
      <legend className="font-medium">{legend}</legend>
      {CONTACT_MODES.map((m) => (
        <label key={m} className="flex min-h-11 items-start gap-3 py-1">
          <input type="radio" name={name} checked={value === m} onChange={() => onChange(m)} className="mt-1 size-5 shrink-0" />
          <span>
            {CONTACT_MODE_LABELS[m]}
            <span className="block text-xs text-neutral-600 dark:text-neutral-400">{CONTACT_MODE_HELP[m]}</span>
          </span>
        </label>
      ))}
    </fieldset>
  );
}

export function ContactSettingsPanel({
  initial,
  show,
  accountEmail,
}: {
  initial: Settings;
  show: { parents: boolean; teachers: boolean };
  accountEmail: string;
}) {
  const router = useRouter();
  const [s, setS] = useState<Settings>(initial);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const res = await fetch("/api/contact/settings", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(s),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    setMsg(res.ok ? { ok: true, text: "Saved. Nobody is notified when you change these." } : { ok: false, text: data.error ?? "Couldn't save." });
    if (res.ok) router.refresh();
  }

  return (
    <details className="rounded-lg border border-neutral-200 p-4 text-sm dark:border-neutral-800">
      <summary className="min-h-11 cursor-pointer py-2 font-semibold">Contact preferences</summary>
      <form onSubmit={save} className="mt-3 space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          Only adults already linked to you through a class ever see these choices take effect: a
          student&apos;s parents and that student&apos;s teachers. There are no messages in this app; you
          talk by email or phone. You can also set a different rule for one person from their card, and, if
          you teach, for a whole class from that class&apos;s page. The most specific rule wins.
        </p>
        {show.parents ? (
          <ModeFieldset legend="Parents of my students may" name="parentsMode" value={s.parentsMode} onChange={(m) => setS({ ...s, parentsMode: m })} />
        ) : null}
        {show.teachers ? (
          <ModeFieldset legend="Teachers of my children may" name="teachersMode" value={s.teachersMode} onChange={(m) => setS({ ...s, teachersMode: m })} />
        ) : null}
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          Your account email, <span className="break-all">{accountEmail}</span>, is what they see first. The
          two fields below are optional and never required.
        </p>
        <label className="block">
          Phone (optional)
          <input
            type="tel"
            value={s.phone ?? ""}
            maxLength={CONTACT_PHONE_MAX}
            onChange={(e) => setS({ ...s, phone: e.target.value })}
            className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
          />
        </label>
        <label className="block">
          Best time to reach me (optional, {CONTACT_NOTE_MAX} characters)
          <input
            value={s.note ?? ""}
            maxLength={CONTACT_NOTE_MAX}
            placeholder="Weekdays after 3pm"
            onChange={(e) => setS({ ...s, note: e.target.value })}
            className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
          />
        </label>
        <button type="submit" disabled={busy} className="min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
          {busy ? "Saving…" : "Save"}
        </button>
        {msg ? (
          <p role={msg.ok ? "status" : "alert"} className={msg.ok ? "text-green-700 dark:text-green-400" : "text-red-600"}>
            {msg.text}
          </p>
        ) : null}
      </form>
    </details>
  );
}
