import type { Metadata } from "next";
import Link from "next/link";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { getSession } from "@/lib/session";
import { AcceptCohortInvite } from "@/components/accept-cohort-invite";

export const metadata: Metadata = { title: "Join your class" };

// Student invite-accept landing (the link an instructor shares/emails). Not signed in →
// prompt sign-in (there's no return-path param in this repo's magic-link flow yet, so we
// ask the student to reopen this same link after signing in). Signed in → a client
// component redeems the token and links to /live. The token itself is never trusted for
// tenant scope here — acceptInvite resolves tenant from the invite row server-side.
export default async function JoinPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const tenant = await requireTenant();
  const session = await getSession();

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-12 text-center">
      <p className="text-sm uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        {brandName(tenant)}
      </p>
      <h1 className="mt-2 text-2xl font-bold">Join your class</h1>

      {!session ? (
        <div className="mt-6">
          <p className="text-neutral-600 dark:text-neutral-400">
            Sign in first, then come back to this same invite link to finish joining.
          </p>
          <Link
            href="/login"
            className="mt-4 inline-block min-h-11 rounded-md px-5 py-2.5 font-medium text-white"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Sign in
          </Link>
        </div>
      ) : (
        <div className="mt-6">
          <AcceptCohortInvite token={token} />
        </div>
      )}
    </main>
  );
}
