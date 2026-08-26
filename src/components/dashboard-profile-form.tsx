"use client";

import { useEffect, useState } from "react";
import { ProfileEditForm } from "./profile-edit-form";

type CustomLink = { label: string; url: string };
type Links = { website?: string; linkedin?: string; portfolio?: string; custom?: CustomLink[] };
type Profile = { username: string | null; displayName: string | null; bio: string | null; avatarUrl: string | null; links: Links };

// The dashboard's inline profile editor. Fetches the signed-in user's OWN profile
// client-side (GET /api/profile) — profiles are global to the user, not tenant-scoped —
// then hands off to the same edit form used at /teach/profile (one PATCH endpoint, two
// entry points). Fails gracefully: a load error shows an inline message, never throws.
export function DashboardProfileForm() {
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/profile")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`status ${r.status}`))))
      .then((data: { profile: Profile }) => {
        if (!cancelled) {
          setProfile(data.profile);
          setState("ready");
        }
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (state === "loading") {
    return <p className="text-sm text-neutral-600">Loading your profile…</p>;
  }
  if (state === "error" || !profile) {
    return <p className="text-sm text-red-600">Could not load your profile. Try refreshing the page.</p>;
  }

  const publicUrl = profile.username ? `/instructors/${profile.username}` : null;
  return <ProfileEditForm initial={profile} publicUrl={publicUrl} />;
}
