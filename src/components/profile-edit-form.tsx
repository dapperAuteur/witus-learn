"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type CustomLink = { label: string; url: string };
type Links = { website?: string; linkedin?: string; portfolio?: string; custom?: CustomLink[] };

export function ProfileEditForm({
  initial,
  publicUrl,
}: {
  initial: { displayName: string | null; bio: string | null; avatarUrl: string | null; links: Links };
  publicUrl: string | null;
}) {
  const router = useRouter();
  const [displayName, setDisplayName] = useState(initial.displayName ?? "");
  const [bio, setBio] = useState(initial.bio ?? "");
  const [avatarUrl, setAvatarUrl] = useState(initial.avatarUrl ?? "");
  const [website, setWebsite] = useState(initial.links.website ?? "");
  const [linkedin, setLinkedin] = useState(initial.links.linkedin ?? "");
  const [portfolio, setPortfolio] = useState(initial.links.portfolio ?? "");
  const [custom, setCustom] = useState<CustomLink[]>(initial.links.custom ?? []);
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const field =
    "mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900";

  function setCustomAt(i: number, key: keyof CustomLink, val: string) {
    setCustom((p) => p.map((c, j) => (j === i ? { ...c, [key]: val } : c)));
    setState("idle");
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setState("saving");
    const r = await fetch("/api/profile", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        displayName,
        bio,
        avatarUrl,
        links: { website, linkedin, portfolio, custom: custom.filter((c) => c.label.trim() && c.url.trim()) },
      }),
    });
    setState(r.ok ? "saved" : "error");
    if (r.ok) router.refresh();
  }

  return (
    <form onSubmit={save} className="space-y-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <div>
        <label className="text-sm font-medium" htmlFor="pf-name">Display name</label>
        <input id="pf-name" value={displayName} onChange={(e) => { setDisplayName(e.target.value); setState("idle"); }} maxLength={120} className={field} />
      </div>

      <div>
        <label className="text-sm font-medium" htmlFor="pf-bio">Bio</label>
        <textarea id="pf-bio" value={bio} onChange={(e) => { setBio(e.target.value); setState("idle"); }} rows={4} maxLength={2000} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900" />
        <p className="mt-1 text-xs text-neutral-500">Shown on your public instructor page.</p>
      </div>

      <div>
        <label className="text-sm font-medium" htmlFor="pf-avatar">Avatar image URL</label>
        <input id="pf-avatar" type="url" inputMode="url" value={avatarUrl} onChange={(e) => { setAvatarUrl(e.target.value); setState("idle"); }} placeholder="https://…" className={field} />
      </div>

      <fieldset className="grid gap-3 sm:grid-cols-2">
        <legend className="text-sm font-medium">Links</legend>
        <label className="text-sm">Website
          <input type="url" value={website} onChange={(e) => { setWebsite(e.target.value); setState("idle"); }} placeholder="https://…" className={field} />
        </label>
        <label className="text-sm">LinkedIn
          <input type="url" value={linkedin} onChange={(e) => { setLinkedin(e.target.value); setState("idle"); }} placeholder="https://linkedin.com/in/…" className={field} />
        </label>
        <label className="text-sm">Portfolio
          <input type="url" value={portfolio} onChange={(e) => { setPortfolio(e.target.value); setState("idle"); }} placeholder="https://…" className={field} />
        </label>
      </fieldset>

      <div>
        <p className="text-sm font-medium">Other links</p>
        <div className="mt-1 space-y-2">
          {custom.map((c, i) => (
            <div key={i} className="flex flex-wrap items-center gap-2">
              <input aria-label={`Link ${i + 1} label`} value={c.label} onChange={(e) => setCustomAt(i, "label", e.target.value)} placeholder="Label" maxLength={60} className="min-h-11 flex-1 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900" />
              <input aria-label={`Link ${i + 1} URL`} type="url" value={c.url} onChange={(e) => setCustomAt(i, "url", e.target.value)} placeholder="https://…" className="min-h-11 flex-2 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900" />
              <button type="button" onClick={() => setCustom((p) => p.filter((_, j) => j !== i))} className="rounded px-2 py-1 text-xs text-red-600">Remove</button>
            </div>
          ))}
          {custom.length < 8 ? (
            <button type="button" onClick={() => setCustom((p) => [...p, { label: "", url: "" }])} className="text-sm underline" style={{ color: "var(--accent)" }}>
              + Add a link
            </button>
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={state === "saving"} className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
          {state === "saving" ? "Saving…" : "Save profile"}
        </button>
        <span role="status" aria-live="polite" className="text-sm">
          {state === "saved" ? <span className="text-green-700 dark:text-green-400">Saved.</span> : null}
          {state === "error" ? <span className="text-red-600">Could not save.</span> : null}
        </span>
        {publicUrl ? (
          <a href={publicUrl} className="ml-auto text-sm underline" style={{ color: "var(--accent)" }}>View public page →</a>
        ) : null}
      </div>
    </form>
  );
}
