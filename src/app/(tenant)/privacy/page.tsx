import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/tenant";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy Policy" };

export default async function PrivacyPage() {
  const tenant = await requireTenant();
  if (!tenant.legal.privacyUrl) notFound();
  return <LegalPage tenant={tenant} title="Privacy Policy" />;
}
