"use server";

import { redirect } from "next/navigation";
import { createCourse, ensureUsername } from "@/db/queries/authoring";
import { getMembership, getSession, isPlatformOwner } from "@/lib/session";
import { requireTenant } from "@/lib/tenant";

// Create a course from the /teach form. Re-checks instructor authorization
// server-side (never trust the client) before writing into the resolved tenant.
export async function createCourseAction(formData: FormData) {
  const tenant = await requireTenant();
  const session = await getSession();
  if (!session) redirect("/login");

  const allowed =
    (await isPlatformOwner(session.user.id)) ||
    ["instructor", "brand_admin"].includes((await getMembership(session.user.id, tenant.id)) ?? "");
  if (!allowed) redirect("/teach");

  const title = String(formData.get("title") ?? "").trim();
  if (!title) redirect("/teach");
  const description = String(formData.get("description") ?? "").trim() || null;

  await ensureUsername(session.user.id, session.user.email);
  const course = await createCourse(tenant.id, session.user.id, { title, description });
  redirect(`/course/${course.id}`);
}
