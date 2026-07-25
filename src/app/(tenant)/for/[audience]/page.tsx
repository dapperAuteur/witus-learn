import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { brandName } from "@/lib/branding";
import { AUDIENCES, audienceBySlug } from "@/lib/marketing/audiences";
import { AudienceLanding } from "@/components/marketing/audience-landing";

type Params = { params: Promise<{ audience: string }> };

// Pre-render the known audiences; an unknown slug still 404s at request time.
export function generateStaticParams() {
  return AUDIENCES.map((a) => ({ audience: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { audience } = await params;
  const content = audienceBySlug(audience);
  if (!content) return { title: "Not found" };
  return { title: content.title, description: content.metaDescription };
}

// A per-audience pitch for Learn.WitUS. Only the recruiting tenant shows these; a white-label school
// on its own domain has no reason to advertise the platform underneath it, so they 404 there, exactly
// like /platform and /demo.
export default async function AudienceLandingPage({ params }: Params) {
  const { audience } = await params;
  const sdb = await getScopedDb();
  if (!sdb.tenant.flags.recruiting) notFound();
  const content = audienceBySlug(audience);
  if (!content) notFound();
  return <AudienceLanding content={content} brand={brandName(sdb.tenant)} />;
}
