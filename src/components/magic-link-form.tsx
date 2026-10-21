"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { NEEDS_CONNECTION, isOffline } from "@/lib/needs-connection";

// Magic-link sign-in. The link is sent for the current origin, so the session
// cookie lands on this tenant's host (see auth.ts rewriteOrigin).
//
// `callbackURL` is where the emailed link drops the learner once the session exists. It defaults to
// the tenant home; the login page passes the validated `?next=` through so someone who was sent
// here from /family lands back on /family instead of the home page. The page validates it with
// safeNextPath BEFORE it reaches this prop, so this component never has to trust a raw query param.
export function MagicLinkForm({ callbackURL = "/" }: { callbackURL?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "offline">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Sending a link needs the server; offline, say so rather than "could not send".
    if (isOffline()) {
      setStatus("offline");
      return;
    }
    setStatus("sending");
    try {
      const { error } = await authClient.signIn.magicLink({ email, callbackURL });
      setStatus(error ? (isOffline() ? "offline" : "error") : "sent");
    } catch {
      setStatus(isOffline() ? "offline" : "error");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" aria-live="polite" className="rounded-md bg-neutral-100 p-4 dark:bg-neutral-800">
        Check your email for a sign-in link. It expires in 10 minutes.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <label htmlFor="email" className="text-sm font-medium">
        Email
      </label>
      <input
        id="email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-h-12 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
        placeholder="you@example.com"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {status === "sending" ? "Sending…" : "Email me a sign-in link"}
      </button>
      {status === "error" ? (
        <p role="alert" className="text-sm text-red-600">
          Could not send the link. Please try again.
        </p>
      ) : null}
      {status === "offline" ? (
        <p role="alert" className="text-sm text-red-600">
          {NEEDS_CONNECTION}
        </p>
      ) : null}
    </form>
  );
}
