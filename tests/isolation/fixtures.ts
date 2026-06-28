import type { TenantRecord } from "@/lib/tenant";

/** Build a full TenantRecord with sensible defaults for tests. */
export function makeTenant(overrides: Partial<TenantRecord> = {}): TenantRecord {
  return {
    id: "00000000-0000-0000-0000-000000000000",
    slug: "tenant",
    name: "Tenant",
    tagline: null,
    isActive: true,
    requiresAgeGate: false,
    theme: {},
    legal: {},
    flags: {},
    stripe: {},
    email: {},
    createdAt: new Date(0),
    updatedAt: new Date(0),
    ...overrides,
  };
}

export const BVC = makeTenant({
  id: "11111111-1111-1111-1111-111111111111",
  slug: "better-vice-club",
  name: "Better Vice Club",
  tagline: "Cited, audio-first vice education.",
  requiresAgeGate: true,
  theme: {
    name: "Better Vice Club",
    shortName: "BVC",
    themeColor: "#993C1D",
    colors: { accent: "#993C1D" },
  },
  legal: { termsUrl: "/terms", privacyUrl: "/privacy", safetyUrl: "/safety" },
  flags: { commodityMap: true, paths: true },
});

export const ACME = makeTenant({
  id: "22222222-2222-2222-2222-222222222222",
  slug: "acme-academy",
  name: "Acme Academy",
  tagline: "Isolation test tenant.",
  requiresAgeGate: false,
  theme: { name: "Acme Academy", shortName: "Acme", themeColor: "#185FA5" },
  legal: { termsUrl: "/terms", privacyUrl: "/privacy" },
  flags: { commodityMap: false, paths: true },
});
