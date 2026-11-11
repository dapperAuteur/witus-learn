import type { Metadata } from "next";
import Link from "next/link";
import { requireUserPage } from "@/lib/session";
import { getAccountFacts, getOpenDeletionRequest, getPendingEmailChange } from "@/db/queries/account-settings";
import { accountLockReason, EMAIL_CONFIRM_MESSAGES, type EmailConfirmOutcome } from "@/lib/account-settings";
import { AccountEmailForm, AccountProfileForm, DeletionRequestCard } from "@/components/account-settings";
import { SignOutButton } from "@/components/sign-out-button";

export const metadata: Metadata = { title: "Account settings", robots: { index: false, follow: false } };

const card = "rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900";

// Account settings for every signed-in person, on every school's host (BAM, 2026-11-10: "users should
// be able to manage their accounts"). An account is global, so this page is the same everywhere: name
// and username, email (changed through a link mailed to the new address), sign out of this device, and
// "ask to delete my account". Linked from the header's Account menu and from /teach/profile.
export default async function AccountPage({ searchParams }: { searchParams: Promise<{ email?: string }> }) {
  const session = await requireUserPage();
  const { email: emailParam } = await searchParams;
  const facts = await getAccountFacts(session.user.id);
  if (!facts) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-2xl font-bold">Account settings</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          We couldn&apos;t find your account. <Link href="/login" className="underline">Sign in again</Link>.
        </p>
      </main>
    );
  }
  // The two waiting-state reads are off the critical path: a deploy that lands before migration 0082
  // still renders the page, with the forms working once the tables exist.
  let pending: { newEmail: string; expiresAt: Date } | null = null;
  let deletionSince: Date | null = null;
  try {
    [pending, deletionSince] = await Promise.all([
      getPendingEmailChange(session.user.id),
      getOpenDeletionRequest(session.user.id).then((r) => r?.createdAt ?? null),
    ]);
  } catch (err) {
    console.error("account settings: waiting state unavailable", err);
  }
  const lock = accountLockReason(facts);
  const outcome = emailParam && emailParam in EMAIL_CONFIRM_MESSAGES ? (emailParam as EmailConfirmOutcome) : null;

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold">Account settings</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        One account signs you in to every school on this platform, so changes here apply everywhere.
        {facts.username ? (
          <>
            {" "}
            Teaching? Your public instructor page is edited on{" "}
            <Link href="/teach/profile" className="underline" style={{ color: "var(--accent)" }}>
              Edit profile
            </Link>
            .
          </>
        ) : null}
      </p>

      <section aria-labelledby="acct-name-h" className={`mt-6 ${card}`}>
        <h2 id="acct-name-h" className="font-semibold">
          Name and username
        </h2>
        <div className="mt-3">
          <AccountProfileForm initial={{ displayName: facts.displayName ?? facts.name ?? "", username: facts.username ?? "" }} locked={lock} />
        </div>
      </section>

      <section aria-labelledby="acct-email-h" className={`mt-6 ${card}`}>
        <h2 id="acct-email-h" className="font-semibold">
          Email address
        </h2>
        <div className="mt-3">
          <AccountEmailForm
            currentEmail={facts.email}
            pending={pending ? { newEmail: pending.newEmail, expiresAt: pending.expiresAt.toISOString() } : null}
            locked={lock}
            confirmOutcome={outcome}
          />
        </div>
      </section>

      <section aria-labelledby="acct-signout-h" className={`mt-6 ${card}`}>
        <h2 id="acct-signout-h" className="font-semibold">
          Sign out
        </h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Signs you out on this device only. Downloaded private pages are removed from it.</p>
        <div className="mt-3">
          <SignOutButton className="min-h-11 rounded-md border border-neutral-300 px-4 text-sm disabled:opacity-60 dark:border-neutral-700" />
        </div>
      </section>

      {facts.isManagedChild ? null : (
        <section aria-labelledby="acct-delete-h" className={`mt-6 ${card}`}>
          <h2 id="acct-delete-h" className="font-semibold">
            Delete your account
          </h2>
          <div className="mt-3">
            <DeletionRequestCard openSince={deletionSince ? deletionSince.toISOString() : null} />
          </div>
        </section>
      )}
    </main>
  );
}
