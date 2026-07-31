import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { AcceptAuditInvite } from "@/components/accept-audit-invite";

/** Token-gated, one visitor, never shared or indexed, so it carries no social card by design. */
export const metadata: Metadata = {
  title: "Review a course",
  description: "Accept an invitation to read a course before it opens to learners.",
  robots: { index: false, follow: false },
};

// Audit invite-accept landing (plans/52 §5), the link the owner or instructor emails. The token is
// redeemed by a client component so following the link is the whole action; the token itself is
// never trusted for tenant scope, the accept route resolves the tenant from the invite row.
export default async function AuditInvitePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const tenant = await requireTenant();

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-12 text-center">
      <p className="text-sm uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        {brandName(tenant)}
      </p>
      <h1 className="mt-2 text-2xl font-bold">Review a course</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        You have been asked to read this course before it opens to learners.
      </p>
      <div className="mt-6">
        <AcceptAuditInvite token={token} />
      </div>
    </main>
  );
}
