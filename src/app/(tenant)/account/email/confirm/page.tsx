import type { Metadata } from "next";
import Link from "next/link";
import { ConfirmEmailChange } from "@/components/account-settings";

// The link in an email-change message lands here. The token is a bearer credential, so the page is
// never indexed and sends no referrer; the change itself happens only when the person presses Confirm
// (POST /api/account/email/confirm), so a mail scanner that fetches the link changes nothing. No
// session is needed: opening the link proves the person reads the new inbox.
export const metadata: Metadata = {
  title: "Confirm your new email address",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default async function ConfirmEmailPage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
  const { token } = await searchParams;
  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-2xl font-bold">Confirm your new email address</h1>
      {token && token.length >= 16 ? (
        <>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">Press Confirm to move your account to this address. Sign-in links will go here from now on.</p>
          <div className="mt-5">
            <ConfirmEmailChange token={token} />
          </div>
        </>
      ) : (
        <p role="alert" className="mt-3 text-red-600">
          This link is incomplete. Open the whole link from the email, or ask for a new one on{" "}
          <Link href="/account" className="underline">
            Account settings
          </Link>
          .
        </p>
      )}
    </main>
  );
}
