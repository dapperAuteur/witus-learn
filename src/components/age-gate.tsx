"use client";

import { useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { confirmAge } from "@/app/(tenant)/age-gate-actions";

// Full-screen interstitial shown (server-side) before content for tenants with
// requires_age_gate until the visitor confirms. Content is withheld by SSR until
// the cookie is set, so it never ships pre-acknowledgment.
export function AgeGate({ brand, hasSafety }: { brand: string; hasSafety: boolean }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onConfirm = () =>
    startTransition(async () => {
      await confirmAge();
      router.refresh();
    });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="mx-auto flex min-h-screen max-w-lg flex-col justify-center gap-6 px-6"
    >
      <div>
        <p className="text-sm uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          {brand}
        </p>
        <h1 id="age-gate-title" className="mt-2 text-3xl font-bold">
          Adults only
        </h1>
      </div>
      <p className="text-neutral-600 dark:text-neutral-300">
        This site is a cited education resource about vices and drugs, intended for adults. By
        entering you confirm you are 18 or older and understand this is educational content, not
        medical, legal, or harm-avoidance advice.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onConfirm}
          disabled={pending}
          className="min-h-12 rounded-md px-5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {pending ? "Entering…" : "I am 18 or older — enter"}
        </button>
        <a
          href="https://www.google.com"
          className="flex min-h-12 items-center justify-center rounded-md border border-neutral-300 px-5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700"
        >
          Leave
        </a>
      </div>
      {hasSafety ? (
        <Link href="/safety" className="text-sm underline">
          Safety &amp; responsible-use information
        </Link>
      ) : null}
    </div>
  );
}
