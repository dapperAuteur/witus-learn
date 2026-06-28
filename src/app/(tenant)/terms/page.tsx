import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/tenant";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms of Service" };

export default async function TermsPage() {
  const tenant = await requireTenant();
  if (!tenant.legal.termsUrl) notFound();
  return <LegalPage tenant={tenant} title="Terms of Service" />;
}
