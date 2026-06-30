import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getSession } from "@/lib/session";
import { getEditableProfile } from "@/db/queries/authoring";
import { ProfileEditForm } from "@/components/profile-edit-form";

export const metadata: Metadata = { title: "Edit profile" };

// Self-serve profile editor. Profiles are global to the user (not tenant-scoped), so any
// signed-in user reaches their own; the public page lives at /instructors/[username].
export default async function EditProfilePage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const profile = await getEditableProfile(session.user.id);
  const publicUrl = profile.username ? `/instructors/${profile.username}` : null;

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link href="/teach" className="text-sm text-neutral-500 hover:underline">← Your courses</Link>
      <h1 className="mt-4 text-2xl font-bold">Edit your profile</h1>
      <p className="mt-1 text-sm text-neutral-500">
        {profile.username
          ? <>This appears on your public instructor page (<code>/instructors/{profile.username}</code>).</>
          : "Your public instructor page activates once you create your first course."}
      </p>
      <div className="mt-6">
        <ProfileEditForm initial={profile} publicUrl={publicUrl} />
      </div>
    </main>
  );
}
