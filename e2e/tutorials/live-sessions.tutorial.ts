import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";

// Quick-reference clip for the help article "Run a live session"
// (src/lib/help-articles.ts → slug "live-sessions"). Captions only, no voice.
//
// SCOPE. Records the public end — the school's /live page, which the article's last sentence
// names ("A dedicated /live page lists all sessions for the school"). The scheduling end
// (Admin → Live: paste an embed URL, set visibility, Go live / End / set the recording) changes
// what a real audience sees on a live broadcast, so it is not driven against production.
//
// Selectors read 2026-09-21 from src/app/(tenant)/live/page.tsx: <h1>Live classes</h1>, the
// standfirst "Join us live, or catch the recordings.", and the four conditional sections, each an
// uppercase <h2>: "Stream" (the always-on player, shown only when nothing is live), "Live now",
// "Upcoming", "Recordings". src/components/live-chat.tsx renders its own <h2>Live chat</h2>
// unconditionally with a sign-in prompt for a signed-out visitor; src/components/live-presence.tsx
// renders nothing at all when signed out.
//
// WHY THE SECTIONS ARE CHECKED SOFTLY. Every section on this page depends on what the school has
// scheduled at the moment of recording — listLiveForViewer() plus a per-session visibility gate
// (public / members / enrolled). Asserting "Upcoming is visible" would make this spec fail on a
// quiet week, which is not a defect. The spec therefore asserts what is structurally always there
// and reports which sections were on screen for the take, so the caption matches the recording.
//
// SAFETY: read-only. No chat message is sent (live-chat.tsx posts to the room), no moderation
// control is touched, and no admin page is opened.

defineTutorial(
  {
    slug: "live-sessions",
    title: "Where a school's live classes live",
    startPath: "/live",
  },
  [
    {
      title: "The Live page",
      narration: "Every school has one Live page: what is on now, what is coming, and what was recorded.",
      action: async (page) => {
        await expect(page.getByRole("heading", { name: "Live classes", level: 1 })).toBeVisible();
        await expect(page.getByText("Join us live, or catch the recordings.")).toBeVisible();
      },
    },
    {
      title: "What is on this page today",
      narration: "Each section appears only when the school has something in it.",
      action: async (page) => {
        const sections = ["Stream", "Live now", "Upcoming", "Recordings"];
        const present: string[] = [];
        for (const s of sections) {
          if (await page.getByRole("heading", { name: s, exact: true }).first().isVisible().catch(() => false)) {
            present.push(s);
          }
        }
        // Recorded in the run log so the caption can be checked against the take.
        console.log(`[live-sessions] sections on screen: ${present.join(", ") || "(none scheduled)"}`);
        // A live session attached to a course also appears on that course's page — the attachment
        // is set in Admin → Live, which this spec does not open.
      },
    },
    {
      title: "Talking during a class",
      narration: "The class chat is below the player, and it asks you to sign in before you can type.",
      action: async (page) => {
        const chat = page.getByRole("heading", { name: "Live chat", exact: true });
        await chat.scrollIntoViewIfNeeded();
        await expect(chat).toBeVisible();
      },
    },
    {
      title: "Who can see a session",
      narration: "A session is public, signed-in only, or for learners enrolled in the course it belongs to.",
      action: async (page) => {
        // Nothing to click: the gate runs server-side in live/page.tsx, so a signed-out visitor
        // simply never receives the sessions they are not entitled to. The caption states the rule
        // over the finished page rather than pretending there is a control for it.
        await expect(page.getByRole("heading", { name: "Live classes", level: 1 })).toBeVisible();
      },
    },
  ],
);
