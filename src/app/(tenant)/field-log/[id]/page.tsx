import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getSession, isPlatformOwner } from "@/lib/session";
import { getProjectBundle } from "@/db/queries/field-log";
import { getScopedDb } from "@/db/scoped";
import { isEmptyTourSlot } from "@/lib/field-log-tour";
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

  // Tours from the field (plans/93 section 2): "Use in a lesson" appears on each leg only when this
  // viewer may fill at least one empty tour slot here (the platform owner, or a course's own
  // instructor). Everyone else's Field Log is unchanged. Degrades to "no" on error, so a missing
  // migration never breaks the Field Log itself.
  let canUseInLesson = false;
  try {
    const sdb = await getScopedDb();
    const slots = await sdb.listTourSlots({ userId: session.user.id, isOwner: await isPlatformOwner(session.user.id) });
    canUseInLesson = slots.some((s) => isEmptyTourSlot(s, s.tour !== null));
  } catch (err) {
    console.error("tours: could not list tour slots for the Field Log", err);
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <ProjectWorkspace
        initial={{ project: bundle.project, legs: bundle.legs, captures: bundle.captures, comments: bundle.comments, reviews: bundle.reviews }}
        me={{ id: session.user.id, name: session.user.name }}
        canUseInLesson={canUseInLesson}
      />
    </main>
  );
}
