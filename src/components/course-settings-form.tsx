"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { estimatedFee, estimatedNet } from "@/lib/fees";
import { CROSS_PROMO_PRODUCTS } from "@/lib/ecosystem";

export interface CourseSettings {
  title: string;
  description: string | null;
  category: string | null;
  navigationMode: "linear" | "cyoa";
  visibility: "public" | "members" | "scheduled" | "private";
  isPublished: boolean;
  /** Non-null = the course is held and can't be published until cleared. */
  publishHoldReason: string | null;
  requiresAgeGate: boolean;
  allowCrossCourseCyoa: boolean;
  isSequential: boolean;
  isFeatured: boolean;
  priceType: "free" | "one_time" | "subscription";
  price: number;
  /** For subscriptions: "month" | "year". */
  billingInterval: "month" | "year" | null;
  /** Cross-promotion: 0–3 WitUS ecosystem product slugs shown as a "Related tools" card. */
  relatedProducts: string[];
}

// Edit course settings (PATCH /api/courses/[id]). isFeatured is platform-owner only
// (the API strips it for non-admins; we only show it when canFeature).
export function CourseSettingsForm({
  courseId,
  initial,
  canFeature,
  categories = [],
  hasStripe = true,
}: {
  courseId: string;
  initial: CourseSettings;
  canFeature: boolean;
  /** This school's category names, offered as suggestions on the Category field. */
  categories?: string[];
  /** Whether Stripe is configured — when false, paid courses can't be purchased yet. */
  hasStripe?: boolean;
}) {
  const router = useRouter();
  const [v, setV] = useState<CourseSettings>(initial);
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [savedSnapshot, setSavedSnapshot] = useState(() => JSON.stringify(initial));
  const dirty = JSON.stringify(v) !== savedSnapshot;

  // Warn before leaving (tab close / refresh / external nav) with unsaved changes.
  useEffect(() => {
    if (!dirty) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  function set<K extends keyof CourseSettings>(k: K, val: CourseSettings[K]) {
    setV((p) => ({ ...p, [k]: val }));
    setState("idle");
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setState("saving");
    const r = await fetch(`/api/courses/${courseId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(v),
    });
    setState(r.ok ? "saved" : "error");
    if (r.ok) {
      setSavedSnapshot(JSON.stringify(v)); // clears the unsaved-changes warning
      router.refresh();
    }
  }

  const field = "min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <form onSubmit={save} className="space-y-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="font-semibold">Course settings</h2>

      <div>
        <label className="text-sm font-medium" htmlFor="cs-title">Title</label>
        <input id="cs-title" value={v.title} onChange={(e) => set("title", e.target.value)} required maxLength={200} className={field} />
      </div>

      <div>
        <label className="text-sm font-medium" htmlFor="cs-desc">Description</label>
        <textarea id="cs-desc" value={v.description ?? ""} onChange={(e) => set("description", e.target.value)} rows={3} className="w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium" htmlFor="cs-cat">Category</label>
          <input id="cs-cat" list="cs-cat-options" value={v.category ?? ""} onChange={(e) => set("category", e.target.value)} maxLength={120} className={field} placeholder="Pick or type a category" />
          <datalist id="cs-cat-options">
            {categories.map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="cs-nav">Navigation</label>
          <select id="cs-nav" value={v.navigationMode} onChange={(e) => set("navigationMode", e.target.value as CourseSettings["navigationMode"])} className={field}>
            <option value="linear">Linear</option>
            <option value="cyoa">CYOA (choose-your-own)</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="cs-vis">Visibility</label>
          <select id="cs-vis" value={v.visibility} onChange={(e) => set("visibility", e.target.value as CourseSettings["visibility"])} className={field}>
            <option value="public">Public</option>
            <option value="members">Members</option>
            <option value="scheduled">Scheduled</option>
            <option value="private">Private (owner only)</option>
          </select>
        </div>
      </div>

      <fieldset className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
        <legend className="px-1 text-sm font-medium">Related WitUS tools (cross-promotion)</legend>
        <p className="text-xs text-neutral-500">
          Optionally surface up to 3 sibling apps as a small labeled card on this course page.
          Off by default; only shown on WitUS-branded domains.
        </p>
        <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
          {CROSS_PROMO_PRODUCTS.map((p) => {
            const checked = v.relatedProducts.includes(p.slug);
            const atLimit = v.relatedProducts.length >= 3;
            return (
              <label key={p.slug} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={!checked && atLimit}
                  onChange={(e) =>
                    set(
                      "relatedProducts",
                      e.target.checked
                        ? [...v.relatedProducts, p.slug]
                        : v.relatedProducts.filter((s) => s !== p.slug),
                    )
                  }
                />
                {p.name}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
        <label className="text-sm font-medium" htmlFor="cs-pricetype">Pricing</label>
        {!hasStripe && v.priceType !== "free" ? (
          <p className="mt-1 rounded-md border border-amber-400 bg-amber-50 px-2 py-1.5 text-xs text-amber-800 dark:border-amber-600 dark:bg-amber-950/40 dark:text-amber-300">
            ⚠️ Stripe isn’t configured, so learners can’t actually purchase a paid course yet —
            checkout will fail. Set the Stripe keys before publishing this as paid.
          </p>
        ) : null}
        <div className="mt-1 grid gap-3 sm:grid-cols-2">
          <select
            id="cs-pricetype"
            value={v.priceType}
            onChange={(e) => set("priceType", e.target.value as CourseSettings["priceType"])}
            className={field}
          >
            <option value="free">Free</option>
            <option value="one_time">One-time purchase</option>
            <option value="subscription">Subscription</option>
          </select>
          {v.priceType === "subscription" ? (
            <select
              aria-label="Billing frequency"
              value={v.billingInterval ?? "month"}
              onChange={(e) => set("billingInterval", e.target.value as "month" | "year")}
              className={field}
            >
              <option value="month">Monthly</option>
              <option value="year">Annually</option>
            </select>
          ) : null}
          {v.priceType !== "free" ? (
            <div className="flex items-center gap-2">
              <span className="text-neutral-500">$</span>
              <input
                type="number"
                min={0}
                step="0.01"
                aria-label="Price in dollars"
                value={v.price}
                onChange={(e) => set("price", Number(e.target.value) || 0)}
                className={field}
              />
            </div>
          ) : null}
        </div>
        {v.priceType !== "free" && v.price > 0 ? (
          <p className="mt-2 text-xs text-neutral-500">
            You keep about <strong>${estimatedNet(v.price).toFixed(2)}</strong> per sale (after an estimated{" "}
            ${estimatedFee(v.price).toFixed(2)} processor fee — actual varies by card/region).
          </p>
        ) : null}
      </div>

      {v.publishHoldReason ? (
        <div className="rounded-md border-2 border-amber-400 bg-amber-50 p-3 text-sm dark:border-amber-600 dark:bg-amber-950/40">
          <p className="font-semibold text-amber-900 dark:text-amber-200">⚠️ This course is on hold — publishing is blocked</p>
          <p className="mt-1 text-amber-800 dark:text-amber-300">{v.publishHoldReason}</p>
          <button
            type="button"
            onClick={() => set("publishHoldReason", null)}
            className="mt-2 min-h-9 rounded-md border border-amber-500 px-3 text-xs font-medium text-amber-900 hover:bg-amber-100 dark:text-amber-200 dark:hover:bg-amber-900"
          >
            Release hold (vetted / cleared) — then you can publish and Save
          </button>
        </div>
      ) : null}

      <fieldset className="space-y-2 text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={v.isPublished}
            disabled={Boolean(v.publishHoldReason)}
            onChange={(e) => set("isPublished", e.target.checked)}
          />{" "}
          Published{v.publishHoldReason ? " (release the hold above first)" : ""}
        </label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={v.requiresAgeGate} onChange={(e) => set("requiresAgeGate", e.target.checked)} /> Requires age gate (18+)</label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={v.isSequential} onChange={(e) => set("isSequential", e.target.checked)} /> Sequential (lessons unlock in order)</label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={v.allowCrossCourseCyoa} onChange={(e) => set("allowCrossCourseCyoa", e.target.checked)} /> Allow this course as a cross-course CYOA destination</label>
        {canFeature ? (
          <label className="flex items-center gap-2"><input type="checkbox" checked={v.isFeatured} onChange={(e) => set("isFeatured", e.target.checked)} /> Featured on the catalog</label>
        ) : null}
      </fieldset>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={state === "saving"} className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
          {state === "saving" ? "Saving…" : "Save settings"}
        </button>
        <span role="status" aria-live="polite" className="text-sm">
          {state === "saved" ? <span className="text-green-700 dark:text-green-400">Saved.</span> : null}
          {state === "error" ? <span className="text-red-600">Could not save.</span> : null}
        </span>
      </div>
    </form>
  );
}
