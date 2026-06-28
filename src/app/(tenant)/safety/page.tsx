import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/tenant";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Safety & Responsible Use" };

export default async function SafetyPage() {
  const tenant = await requireTenant();
  if (!tenant.legal.safetyUrl) notFound();
  return (
    <LegalPage tenant={tenant} title="Safety & Responsible Use">
      <p>
        This is a cited education resource, not medical, legal, or harm-avoidance advice. If you or
        someone you know is in crisis, contact local emergency services or a qualified professional.
      </p>
      <p>Full, per-tenant safety and responsible-use guidance is published before launch.</p>
    </LegalPage>
  );
}
