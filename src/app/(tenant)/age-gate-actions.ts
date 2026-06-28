"use server";

import { cookies } from "next/headers";
import { env } from "@/lib/env";
import { requireTenant } from "@/lib/tenant";
import { ageGateCookieName } from "@/lib/tenant-util";

/** Record that the visitor acknowledged the age-gate for the current tenant.
 *  Cookie is domain-scoped (per-brand), server-readable, ~1 year. */
export async function confirmAge(): Promise<void> {
  const tenant = await requireTenant();
  const store = await cookies();
  store.set(ageGateCookieName(tenant.slug), "1", {
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
    sameSite: "lax",
    secure: env.NODE_ENV === "production",
    path: "/",
  });
}
