import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { getCompletionByToken } from "@/db/queries/enrollment";

export const metadata: Metadata = { title: "Certificate verification" };

// Public certificate verification (no auth). Outside the (tenant) age-gate, but
// branded — and scoped to the current tenant, so a token for another brand's
// course does not verify on this host.
export default async function VerifyPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const tenant = await requireTenant();
  const cert = await getCompletionByToken(tenant.id, token);
  if (!cert) notFound();

  const accent = tenant.theme.colors?.accent ?? tenant.theme.themeColor ?? "#111111";
  const style = { "--accent": accent } as CSSProperties;
  const date = cert.completion.completedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main
      style={style}
      className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-4 px-6 text-center"
    >
      <p className="text-sm uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        {brandName(tenant)}
      </p>
      <p className="text-green-700 dark:text-green-400">✓ Verified certificate</p>
      <h1 className="text-3xl font-bold">{cert.course.title}</h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        {cert.studentName ? <strong>{cert.studentName}</strong> : "This learner"} completed this
        course on {date}.
      </p>
      <p className="text-xs text-neutral-400">Verification token: {token}</p>
    </main>
  );
}
