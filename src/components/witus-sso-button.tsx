"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

/**
 * "Sign in with WitUS" — starts the ecosystem OIDC flow against accounts.witus.online.
 * Only rendered for tenants with flags.ecosystemSso (the WitUS-branded base tenant);
 * white-label tenants never show this, so they stay isolated from the IdP.
 */
export function WitusSsoButton() {
  const [pending, setPending] = useState(false);

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        setPending(true);
        void authClient.signIn
          .oauth2({ providerId: "witus", callbackURL: `${window.location.origin}/` })
          .finally(() => setPending(false));
      }}
      className="min-h-12 w-full rounded-md border border-neutral-300 px-4 font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700 dark:hover:bg-neutral-800"
    >
      {pending ? "Redirecting…" : "Sign in with WitUS"}
    </button>
  );
}
