"use client";

import { useState } from "react";

export interface TenantSettings {
  name: string;
  tagline: string;
  accent: string;
  accentFg: string;
  gamification: "off" | "light" | "full";
  aiTutor: boolean;
  comingSoon: boolean;
  requiresAgeGate: boolean;
}

// Edit the current brand's branding + feature flags. Saving updates the tenant the
// request resolved to (server-side) — accent/branding take effect on next load.
export function TenantSettingsForm({ initial }: { initial: TenantSettings }) {
  const [s, setS] = useState<TenantSettings>(initial);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const set = <K extends keyof TenantSettings>(k: K, v: TenantSettings[K]) =>
    setS((p) => ({ ...p, [k]: v }));

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    const res = await fetch("/api/admin/tenant", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(s),
    });
    setStatus(res.ok ? "saved" : "error");
  }

  const field = "min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <form onSubmit={save} className="space-y-6" style={{ ["--accent" as string]: s.accent, ["--accent-fg" as string]: s.accentFg }}>
      <section className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold">Brand</h2>
        <div className="mt-3 grid gap-3">
          <label className="text-sm font-medium">
            Name
            <input className={`mt-1 ${field}`} value={s.name} maxLength={120} onChange={(e) => set("name", e.target.value)} />
          </label>
          <label className="text-sm font-medium">
            Tagline
            <input className={`mt-1 ${field}`} value={s.tagline} maxLength={200} onChange={(e) => set("tagline", e.target.value)} />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="text-sm font-medium">
              Accent
              <div className="mt-1 flex items-center gap-2">
                <input type="color" value={s.accent} onChange={(e) => set("accent", e.target.value)} className="h-11 w-12 rounded-md border border-neutral-300 dark:border-neutral-700" aria-label="Accent color" />
                <input className={field} value={s.accent} onChange={(e) => set("accent", e.target.value)} />
              </div>
            </label>
            <label className="text-sm font-medium">
              Accent text
              <div className="mt-1 flex items-center gap-2">
                <input type="color" value={s.accentFg} onChange={(e) => set("accentFg", e.target.value)} className="h-11 w-12 rounded-md border border-neutral-300 dark:border-neutral-700" aria-label="Accent foreground color" />
                <input className={field} value={s.accentFg} onChange={(e) => set("accentFg", e.target.value)} />
              </div>
            </label>
          </div>
          {/* live preview */}
          <div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3 dark:border-neutral-800">
            <span className="rounded-lg px-4 py-2 text-sm font-semibold" style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg)" }}>
              Continue →
            </span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-200">
              <div className="h-full rounded-full" style={{ width: "62%", backgroundColor: "var(--accent)" }} />
            </div>
            <span className="text-xs text-neutral-400">Live preview</span>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold">Features</h2>
        <div className="mt-3 grid gap-3">
          <label className="flex items-center justify-between text-sm font-medium">
            Gamification
            <select className="min-h-11 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900" value={s.gamification} onChange={(e) => set("gamification", e.target.value as TenantSettings["gamification"])}>
              <option value="off">Off</option>
              <option value="light">Light (streaks + mastery)</option>
              <option value="full">Full (+ XP, levels, badges)</option>
            </select>
          </label>
          <Toggle label="AI tutor" checked={s.aiTutor} onChange={(v) => set("aiTutor", v)} hint="Off disables the tutor + sentence coach for this brand." />
          <Toggle label="Age gate" checked={s.requiresAgeGate} onChange={(v) => set("requiresAgeGate", v)} hint="Require an age check before entering." />
          <Toggle label="Coming soon" checked={s.comingSoon} onChange={(v) => set("comingSoon", v)} hint="Show a launch holding page instead of the catalog." />
        </div>
      </section>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={status === "saving"} className="min-h-11 rounded-md px-5 font-semibold disabled:opacity-60" style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg)" }}>
          {status === "saving" ? "Saving…" : "Save changes"}
        </button>
        {status === "saved" ? <span className="text-sm text-green-600 dark:text-green-400">Saved. Reload to see branding update.</span> : null}
        {status === "error" ? <span className="text-sm text-red-600">Could not save. Check your permissions.</span> : null}
      </div>
    </form>
  );
}

function Toggle({ label, checked, onChange, hint }: { label: string; checked: boolean; onChange: (v: boolean) => void; hint?: string }) {
  return (
    <label className="flex items-start justify-between gap-4 text-sm font-medium">
      <span>
        {label}
        {hint ? <span className="block text-xs font-normal text-neutral-500">{hint}</span> : null}
      </span>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-1 h-5 w-5 shrink-0" />
    </label>
  );
}
