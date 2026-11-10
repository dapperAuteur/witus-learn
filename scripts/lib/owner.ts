// The platform owner's email address, for the scripts that look up or create the owner's account:
// every content seed (the owner is the instructor on every course), seed:owner, reassign:instructor
// and field-log:import.
//
// It is read from PLATFORM_OWNER_EMAIL, the variable the app already reads (src/lib/env.ts: the
// signed-in user with this address is the platform owner, and it is the fallback pricing-inquiry
// recipient). Locally it comes from .env.local, the :prod scripts load .env.prod (both gitignored),
// and the seed workflow passes the repository secret of the same name
// (.github/workflows/seed-production.yml; OPERATING.md section 3b).
//
// WHY IT THROWS INSTEAD OF FALLING BACK. Until 2026-11-09 about a dozen scripts wrote the address
// into this public repository (witus-learn task 394, decision 2). A default here would put it back,
// and an empty or mistyped fallback would quietly create an instructor nobody can sign in as and
// hang every course on it. A seed with no owner address stops before it writes anything.
// tests/owner-email.test.ts guards both this behaviour and the absence of the address in tracked files.

export const OWNER_EMAIL_VAR = "PLATFORM_OWNER_EMAIL";

export function ownerEmail(env: Record<string, string | undefined> = process.env): string {
  const value = env[OWNER_EMAIL_VAR]?.trim();
  if (!value) {
    throw new Error(
      `${OWNER_EMAIL_VAR} is not set. Put the platform owner's email address in .env.local (and in .env.prod ` +
        `for the :prod scripts); the seed workflow reads the repository secret of the same name ` +
        `(OPERATING.md, section 3b). Scripts refuse to guess it, so no instructor is ever created with a ` +
        `wrong or empty address.`,
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    throw new Error(`${OWNER_EMAIL_VAR} is not an email address (it needs a local part, an @ and a domain).`);
  }
  return value;
}
