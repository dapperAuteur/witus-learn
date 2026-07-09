"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

// "Try the demo" — POSTs with an empty body; the server supplies DEMO_VISITOR_PASSWORD
// itself (src/app/api/demo-login/route.ts), so no secret ever reaches this component.
// Only rendered on the Acme host, and only when the login page's server component sees
// DEMO_VISITOR_PASSWORD configured — see src/app/login/page.tsx.
export function DemoLoginButton() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState(false);

  function onClick() {
    setError(false);
    startTransition(async () => {
      const res = await fetch("/api/demo-login", { method: "POST" });
      if (!res.ok) {
        setError(true);
        return;
      }
      // A real session cookie is now set — go straight to the dashboard.
      router.push("/dashboard");
      router.refresh();
    });
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={onClick}
        disabled={pending}
        className="min-h-12 w-full rounded-md border-2 px-4 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
        style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
      >
        {pending ? "Signing you in…" : "Try the demo"}
      </button>
      <p className="mt-2 text-center text-xs text-neutral-500">
        Explore every feature with a shared demo account. Data resets nightly.
      </p>
      {error ? (
        <p role="alert" className="mt-2 text-center text-sm text-red-600">
          Couldn&apos;t start the demo. Please try again.
        </p>
      ) : null}
    </div>
  );
}
