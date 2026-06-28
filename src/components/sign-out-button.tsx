"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function SignOutButton() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          await authClient.signOut();
          router.refresh();
        })
      }
      className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
    >
      {pending ? "Signing out…" : "Sign out"}
    </button>
  );
}
