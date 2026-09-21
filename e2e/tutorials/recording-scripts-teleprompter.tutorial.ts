import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";
import { openTeachCourse } from "./_helpers";

// Quick-reference clip for the help article "Recording scripts & teleprompter"
// (src/lib/help-articles.ts → slug "recording-scripts-teleprompter"). Captions only, no voice.
//
// AUTH: requiresAuth. Skips without TUTORIAL_STORAGE_STATE. The session must be able to open the
// course under /teach.
//
// Selectors read 2026-09-21 from:
//   src/app/(tenant)/teach/[courseId]/script/page.tsx — <h1>Recording script, {course.title}</h1>
//   src/components/recording-script-view.tsx — the "▶ Teleprompter", "Copy script" and
//     "Print / Save PDF" buttons above the generated script, and, inside the full-screen
//     teleprompter, the control bar: "▶ Play" / "⏸ Pause", "↺ Restart", the Speed and Size range
//     inputs, the Mirror checkbox, "Exit (Esc)", the "Recording to" lesson picker, and the hint
//     "Space = play/pause · ↑/↓ = speed · click text = play/pause"
//
// SAFETY. Read-only, with two deliberate omissions:
//  - The teleprompter's built-in recorder is SHOWN and never started. Starting a take asks for
//    the microphone or camera, and a successful upload attaches media to a real lesson and ticks
//    it recorded (src/components/lesson-recorder.tsx).
//  - "Copy script" writes to the system clipboard, which is shared state on the recording machine,
//    so it is asserted rather than clicked.
// The script itself is regenerated from the current lesson text on each visit, so nothing on this
// page is stored by opening it.

defineTutorial(
  {
    slug: "recording-scripts-teleprompter",
    title: "Read your lessons off a teleprompter",
    startPath: "/teach",
    requiresAuth: true,
  },
  [
    {
      title: "The course, turned into a script",
      narration: "Every course has a Recording script page, rebuilt from the current lesson text each visit.",
      action: async (page) => {
        const coursePath = await openTeachCourse(page);
        await page.goto(`${coursePath.replace(/\/$/, "")}/script`);
        await expect(page.getByRole("heading", { level: 1, name: /^Recording script,/ })).toBeVisible();
      },
    },
    {
      title: "Three ways to use it",
      narration: "Run it as a teleprompter, copy it out, or print it.",
      action: async (page) => {
        await expect(page.getByRole("button", { name: /Teleprompter/ })).toBeVisible();
        // Asserted, not clicked — it writes to the machine's clipboard.
        await expect(page.getByRole("button", { name: /Copy script/ })).toBeVisible();
        await expect(page.getByRole("button", { name: /Print \/ Save PDF/ })).toBeVisible();
      },
    },
    {
      title: "Full screen, scrolling itself",
      narration: "The teleprompter fills the screen and scrolls the script at a speed you set.",
      action: async (page) => {
        await page.getByRole("button", { name: /Teleprompter/ }).click();
        await expect(page.getByRole("button", { name: /Exit \(Esc\)/ })).toBeVisible();
        await expect(page.getByText(/Space = play\/pause/)).toBeVisible();
      },
    },
    {
      title: "Speed, size, mirror",
      narration: "Two sliders set the speed and the text size, and Mirror flips it for a mirror rig.",
      action: async (page) => {
        await expect(page.getByLabel(/^Speed/)).toBeVisible();
        await expect(page.getByLabel(/^Size/)).toBeVisible();
        await expect(page.getByLabel(/^Mirror/)).toBeVisible();
        // The label shows the current value in px/s, so a caption never has to guess it.
        await expect(page.getByText(/px\/s/)).toBeVisible();
      },
    },
    {
      title: "Record without leaving it",
      narration: "Pick a lesson in Recording to, and the take is captured from inside the full-screen script.",
      action: async (page) => {
        // SHOWN, NEVER STARTED — a take asks for the microphone or camera and, on upload,
        // attaches media to a real lesson.
        //
        // The recorder bar renders only when the course has lessons (recording-script-view.tsx:
        // `lessons.length > 0`). This step FAILS rather than logging when it is missing: the
        // caption promises a "Recording to" picker, and a clip that says so over a teleprompter
        // with no recorder bar is a false clip.
        await expect(
          page.getByText("Recording to"),
          "No 'Recording to' picker in the teleprompter — the recorded course has no lessons, so recording-script-view.tsx " +
            "renders no recorder bar and there is also no script to read. Point TUTORIAL_TEACH_COURSE at a course with lessons.",
        ).toBeVisible();
      },
    },
    {
      title: "Escape gets you out",
      narration: "Escape closes the teleprompter and puts the script back on the page.",
      action: async (page) => {
        // The key handler ignores Escape while focus sits on a button, input, select or textarea
        // (recording-script-view.tsx deliberately does not hijack keys on the sliders or the
        // recorder controls), so drop focus first — that is what a reader pressing Escape has.
        await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
        await page.keyboard.press("Escape");
        await expect(page.getByRole("heading", { level: 1, name: /^Recording script,/ })).toBeVisible();
      },
    },
  ],
);
