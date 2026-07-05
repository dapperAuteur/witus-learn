import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getSession } from "@/lib/session";
import { getProjectBundle } from "@/db/queries/field-log";
import { ProjectWorkspace } from "@/components/field-log/project-workspace";

export const metadata: Metadata = { title: "Field Log project" };

type Params = { params: Promise<{ id: string }> };

export default async function FieldLogProjectPage({ params }: Params) {
  const { id } = await params;
  const tenant = await requireTenant();
  const session = await getSession();
  // 404 (not redirect) for signed-out or non-owned/cross-tenant — never leak existence.
  if (!session) notFound();
  const bundle = await getProjectBundle(tenant.id, session.user.id, id);
  if (!bundle) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <ProjectWorkspace
        initial={{ project: bundle.project, legs: bundle.legs, captures: bundle.captures, comments: bundle.comments, reviews: bundle.reviews }}
        me={{ id: session.user.id, name: session.user.name }}
      />
    </main>
  );
}
