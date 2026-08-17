import { expect, test } from "@playwright/test";
import { defineTutorial, type TutorialStep } from "./tutorial";

// "Buy a course on Learn.WitUS" — Tutorial A from witus plans/31-tutorial-narration-scripts.md,
// second half: steps 6–11, SIGNED IN. Narration lines are VERBATIM from plans/31. The first half
// (steps 1–5, signed out) is purchase-browse.tutorial.ts.
//
// Auth: requiresAuth — SKIPS unless TUTORIAL_STORAGE_STATE points at a signed-in session for a
// PLAIN LEARNER account (not an owner/instructor/brand_admin: editors see draft/private badges in
// the catalog, which don't belong in a tutorial). Create the session with:
//   pnpm exec playwright codegen <url> --save-storage=.auth/tutorial-user.json
//
// ===== MONEY-SAFETY RULES (non-negotiable) =====
// This spec must NEVER complete a real purchase against production.
//  - Default mode: the enroll step prefers a FREE course (found via the catalog card's "Free"
//    price line). If no free course is available, it stops after showing the Buy button and its
//    access-disclosure line — the Buy button is NEVER clicked.
//  - TUTORIAL_STRIPE_TEST=1 enables the paid path (plans/31 steps 8–9): pick a PAID course, click
//    Buy, fill Stripe's hosted checkout with the 4242 test card, and complete the payment. That
//    flag exists ONLY for preview deployments running Stripe TEST-MODE keys. It must never be set
//    against production or any deployment with live Stripe keys — a test card fails there, but the
//    attempt alone is a real checkout session against a live account. Point PLAYWRIGHT_BASE_URL at
//    the test-mode preview (plus VERCEL_AUTOMATION_BYPASS_SECRET if it's protected).
//  - TUTORIAL_CERT_COURSE=/<username>/<courseSlug> enables the certificate step (plans/31 step 10):
//    the path of a course the signed-in account has fully completed (a demo account with a finished
//    course). Unset = the step is omitted, per plans/31: "skip the step if none exists rather than
//    faking it".
//
// CONDITIONAL STEPS AND AUDIO: the steps array is built from the env flags at load time, so
// marks.json always matches what actually recorded — flag-gated steps that didn't run don't appear.
// That means step NUMBERS shift between modes: record the per-step audio (audio/purchase-enroll/
// step-NN.*) against the marks.json of the run you're narrating, not against plans/31's numbering.
// Plans/31 steps 8–9 (Stripe) and 10 (certificate) can stay narration-only in the first cut.
//
// Selectors from the 2026-08-16 flow map: src/app/(tenant)/courses/page.tsx (catalog),
// src/components/course-card.tsx ("Free" / "$X" price line), src/components/course-actions.tsx
// (Enroll for free / "Buy, $X" button, access-disclosure copy, ✓ Enrolled, Claim certificate),
// src/app/api/courses/[id]/enroll (free-enroll POST vs Stripe Checkout redirect).

const STRIPE_TEST = process.env.TUTORIAL_STRIPE_TEST === "1";
const CERT_COURSE = process.env.TUTORIAL_CERT_COURSE;

// Set by the first step (which course kind it found), read by the enroll step.
let mode: "free" | "paid" = STRIPE_TEST ? "paid" : "free";

const steps: TutorialStep[] = [
  {
    // Plans/31 step 6. The magic-link email round-trip can't be driven by Playwright (it lives in
    // an inbox); the storage state stands in for having clicked the link, and the recording shows
    // the signed-in landing the narration describes.
    title: "Signed in, right where you left off",
    narration:
      "Click the link in your inbox and you land right back where you left off — signed in.",
    action: async (page) => {
      const cards = page.locator('a[href^="/course/"]');
      await expect(cards.first()).toBeVisible();
      // Match the course-card PRICE LINE exactly (anchored regex on the <p>), not text anywhere in
      // the card — descriptions can mention "Free"/"$", and unvetted "Coming soon" cards can't be
      // bought (no enroll button on their page). Same selector rationale as purchase-browse step 3.
      const priced = (re: RegExp) =>
        cards
          .filter({ has: page.locator("p", { hasText: re }) })
          .filter({ hasNot: page.getByText(/coming soon/i) });
      const freeCards = priced(/^\s*Free\s*$/);
      const paidCards = priced(/^\s*\$[\d,.]+\s*$/);
      // Fail fast and legibly when the catalog has no vetted course yet (same guard and reason
      // as purchase-browse step 3: un-backfilled vetted_at ⇒ every card is "Coming soon").
      await expect(
        priced(/^\s*(Free|\$[\d,.]+)\s*$/).first(),
        "No priced course card found — every catalog card is 'Coming soon'. Vet at least one course (courses.vetted_at) before recording this tutorial.",
      ).toBeVisible();
      // NOTE: catalog cards show the price even for courses this account already enrolled in
      // (courses/page.tsx passes no `progress` prop), so "first Free card" can land on a course
      // that's already ✓ Enrolled — then the next step's button assertion fails (loudly, safely).
      // Record with a fresh learner account that hasn't enrolled in the catalog's first
      // free (or, under TUTORIAL_STRIPE_TEST, first paid) course.
      if (STRIPE_TEST) {
        await paidCards.first().click();
      } else if ((await freeCards.count()) > 0) {
        // Prefer a FREE course; fall back to displaying (never clicking) a paid one.
        mode = "free";
        await freeCards.first().click();
      } else {
        mode = "paid";
        await paidCards.first().click();
      }
      await expect(page.getByText("← Back to catalog")).toBeVisible();
      await expect(page.locator("h1").first()).toBeVisible();
    },
  },
  {
    // Plans/31 step 7: the live button plus the access-disclosure line under it.
    title: "The button is live",
    narration:
      "Now the button is live. Free courses enroll instantly. Paid courses tell you, in plain words, what you're buying — if the price changes later, your access doesn't.",
    action: async (page) => {
      const button = page.getByRole("button", { name: /enroll for free|buy, \$/i });
      await button.scrollIntoViewIfNeeded();
      await expect(button).toBeVisible();
      // Access disclosure (course-actions.tsx accessNote): one of the three price-type variants.
      await expect(
        page.getByText(/stays open to you, free|stays yours|keeps the amount you signed up at/i),
      ).toBeVisible();
    },
  },
];

if (!STRIPE_TEST) {
  steps.push({
    // Free-course enroll (the "you're in" beat — plans/31 step 9's line, which is what the screen
    // shows after a FREE enroll too: button flips to ✓ Enrolled, lessons open).
    title: "Enrolled",
    narration:
      "And you're in. The syllabus is unlocked, and your progress starts counting from lesson one.",
    action: async (page) => {
      if (mode === "paid") {
        // MONEY SAFETY: no free course in this catalog and TUTORIAL_STRIPE_TEST is unset — never
        // click Buy outside a Stripe-test deployment. Hold on the Buy button; this step's video
        // won't match its narration, so re-record it against a catalog with a free course (or a
        // Stripe-test preview).
        test.info().annotations.push({
          type: "warning",
          description:
            "No free course found; Buy was NOT clicked (money safety). Step held on the Buy button — narration will not match.",
        });
        return;
      }
      await page.getByRole("button", { name: /enroll for free/i }).click();
      await expect(page.getByText("✓ Enrolled")).toBeVisible({ timeout: 30_000 });
    },
  });
} else {
  // ONLY for preview deployments with Stripe TEST-MODE keys — see the money-safety header.
  steps.push(
    {
      // Plans/31 step 8: Stripe's hosted checkout.
      title: "Stripe checkout",
      narration:
        "Payment runs through Stripe — the same checkout you've used a hundred times. We never see your card.",
      action: async (page) => {
        await page.getByRole("button", { name: /buy, \$/i }).click();
        // /api/courses/[id]/enroll answers with a Stripe Checkout URL and the client redirects.
        await page.waitForURL(/checkout\.stripe\.com/, { timeout: 60_000 });
        // Stripe's hosted-checkout field names (stable public test-mode form). 4242… is Stripe's
        // universal test card; it only ever succeeds against test-mode keys.
        const email = page.locator('input[name="email"]');
        if (await email.isVisible().catch(() => false)) {
          await email.fill("tutorial@witus.online");
        }
        await page.locator('input[name="cardNumber"]').fill("4242 4242 4242 4242");
        await page.locator('input[name="cardExpiry"]').fill("12 / 34");
        await page.locator('input[name="cardCvc"]').fill("123");
        await page.locator('input[name="billingName"]').fill("Tutorial Tester");
        const zip = page.locator('input[name="billingPostalCode"]');
        if (await zip.isVisible().catch(() => false)) {
          await zip.fill("46204");
        }
      },
    },
    {
      // Plans/31 step 9: back on the course page, enrolled.
      title: "You're in",
      narration:
        "And you're in. The syllabus is unlocked, and your progress starts counting from lesson one.",
      action: async (page) => {
        await page.getByTestId("hosted-payment-submit-button").click();
        // Stripe redirects back to the course page (?enrolled=true) once the webhook/session lands.
        await page.waitForURL(/enrolled=true/, { timeout: 120_000 });
        await expect(page.getByText("✓ Enrolled")).toBeVisible({ timeout: 60_000 });
      },
    },
  );
}

if (CERT_COURSE) {
  steps.push({
    // Plans/31 step 10 — needs a demo account with a COMPLETED course (all lessons done, cert not
    // yet claimed); plans/31: "skip the step if none exists rather than faking it".
    title: "Claim your certificate",
    narration:
      "Finish every lesson and you claim your certificate — with a public link anyone can check. That's the 'prove you took it' part.",
    action: async (page) => {
      await page.goto(CERT_COURSE);
      await page.getByRole("button", { name: /claim certificate/i }).click();
      await page.getByRole("link", { name: /view your certificate/i }).click();
      await page.waitForURL(/\/verify\//, { timeout: 30_000 });
      await expect(page.locator("h1").first()).toBeVisible();
    },
  });
}

steps.push({
  // Plans/31 step 11: back to home. Signed-in home is the learner dashboard, so force the branded
  // catalog home with ?view=catalog — that's the surface the closing line describes.
  title: "Learn.WitUS.online",
  narration: "Learn dot WitUS dot online. Real courses, honest pricing, verifiable certificates.",
  action: async (page) => {
    await page.goto("/?view=catalog");
    await expect(page.locator("h1").first()).toBeVisible();
  },
});

defineTutorial(
  {
    slug: "purchase-enroll",
    title: "Buy a course on Learn.WitUS — enroll (signed in)",
    startPath: "/courses",
    requiresAuth: true,
  },
  steps,
);
