import { describe, expect, it } from "vitest";
import {
  TOUR_CREDIT_MAX,
  TOUR_REFUSAL_COPY,
  buildTourCredit,
  canPublishTour,
  displayTourBody,
  displayTourTitle,
  forthcomingLead,
  isEmptyTourSlot,
  liveTour,
  normalizeTourCredit,
  suggestSlotFromNotes,
  tourCaptureEligibility,
  tourMediaFor,
  type TourCaptureFacts,
} from "@/lib/field-log-tour";
import { toEmbed } from "@/lib/media";
import { parseReleaseMarkers } from "@/lib/lesson-review";
import type { AuthoredCourse } from "../scripts/data/authored-course";
import { BALTIMORE_CHAIN_COURSE } from "../scripts/data/baltimore-chain-course";
import { DC_BERMAN_COURSE } from "../scripts/data/dc-berman-course";
import { FORT_HARRISON_COURSE } from "../scripts/data/fort-harrison-course";
import { GYM_COLOR_LINE_COURSE } from "../scripts/data/gym-color-line-course";
import { INDIANA_AVENUE_COURSE } from "../scripts/data/indiana-avenue-course";
import { MUDSOCK_BOUNDARY_COURSE } from "../scripts/data/mudsock-boundary-course";
import { PHILADELPHIA_UNIVERSITY_COURSE } from "../scripts/data/philadelphia-university-course";
import { PITTSBURGH_PLAYBOOK_COURSE } from "../scripts/data/pittsburgh-playbook-course";
import { PRESIDENTS_HOUSE_COURSE } from "../scripts/data/presidents-house-course";
import { SCHOOLHOUSE_NETWORK_COURSE } from "../scripts/data/schoolhouse-network-course";
import { SEATTLE_BOOKEND_COURSE } from "../scripts/data/seattle-bookend-course";
import { TWO_RACETRACKS_COURSE } from "../scripts/data/two-racetracks-course";
import { WHERE_WE_RESTED_COURSE } from "../scripts/data/where-we-rested-course";

// Tours from the field (plans/93 section 2). Every rule that decides whether a field capture may
// appear in a lesson is pure and pinned here, including the suffix and paragraph a live tour hides,
// checked against the 13 real tour lessons rather than a made-up fixture.

const ok: TourCaptureFacts = {
  kind: "photo",
  consentStatus: "na",
  involvesMinor: false,
  storageUrl: "https://drive.google.com/file/d/abc123/view?usp=sharing",
};
const leg = { permissionNote: "Public viewpoint, no permission needed" };

describe("tourCaptureEligibility", () => {
  it("accepts a photo with an https file link on a leg with a permission note", () => {
    const e = tourCaptureEligibility(ok, leg);
    expect(e).toEqual({ ok: true, media: { kind: "iframe", src: "https://drive.google.com/file/d/abc123/preview" } });
  });

  it("refuses a declined subject, whatever else is true", () => {
    const e = tourCaptureEligibility({ ...ok, consentStatus: "declined" }, leg);
    expect(e).toMatchObject({ ok: false, reason: "consent_declined" });
    // Declined outranks every other reason, even written consent for a minor being absent.
    expect(tourCaptureEligibility({ ...ok, consentStatus: "declined", involvesMinor: true }, null)).toMatchObject({
      reason: "consent_declined",
    });
  });

  it("refuses a minor without written consent, under every other consent status", () => {
    for (const consentStatus of ["na", "verbal_recorded", "on_record"]) {
      expect(tourCaptureEligibility({ ...ok, consentStatus, involvesMinor: true }, leg), consentStatus).toMatchObject({
        ok: false,
        reason: "minor_without_written_consent",
      });
    }
  });

  it("allows a minor with written consent", () => {
    expect(tourCaptureEligibility({ ...ok, consentStatus: "written", involvesMinor: true }, leg).ok).toBe(true);
  });

  it("allows every non-declined consent for an adult or no person", () => {
    for (const consentStatus of ["na", "verbal_recorded", "written", "on_record"]) {
      expect(tourCaptureEligibility({ ...ok, consentStatus }, leg).ok, consentStatus).toBe(true);
    }
  });

  it("refuses every kind but photo and video", () => {
    for (const kind of ["audio", "document", "interview", "artifact", "note"]) {
      expect(tourCaptureEligibility({ ...ok, kind }, leg), kind).toMatchObject({ ok: false, reason: "not_photo_or_video" });
    }
    expect(tourCaptureEligibility({ ...ok, kind: "video", storageUrl: "https://youtu.be/dQw4w9WgXcQ" }, leg).ok).toBe(true);
  });

  it("refuses a missing, non-https or malformed link", () => {
    for (const storageUrl of [null, "", "http://example.com/a.jpg", "ftp://example.com/a.jpg", "not a url"]) {
      expect(tourCaptureEligibility({ ...ok, storageUrl }, leg), String(storageUrl)).toMatchObject({
        ok: false,
        reason: "no_https_link",
      });
    }
  });

  it("refuses an https link that cannot be shown in a lesson", () => {
    for (const storageUrl of [
      "https://drive.google.com/drive/folders/xyz",
      "https://www.youtube.com/@somechannel",
      "https://example.com/interview.mp3",
    ]) {
      expect(tourCaptureEligibility({ ...ok, storageUrl }, leg), storageUrl).toMatchObject({ ok: false, reason: "not_embeddable" });
    }
  });

  it("refuses a capture whose leg has no permission note, a blank one, or no leg at all", () => {
    for (const l of [null, { permissionNote: null }, { permissionNote: "   " }]) {
      expect(tourCaptureEligibility(ok, l), JSON.stringify(l)).toMatchObject({ ok: false, reason: "no_permission_note" });
    }
  });

  it("carries the plain-language reason with every refusal", () => {
    const e = tourCaptureEligibility({ ...ok, consentStatus: "declined" }, leg);
    expect(e.ok ? "" : e.message).toBe(TOUR_REFUSAL_COPY.consent_declined);
    for (const copy of Object.values(TOUR_REFUSAL_COPY)) expect(copy).not.toMatch(/[–—]/);
  });
});

describe("tourMediaFor", () => {
  it("renders image files as images and video files as video", () => {
    expect(tourMediaFor("https://res.cloudinary.com/demo/image/upload/v1/porch.jpg")).toEqual({
      kind: "image",
      src: "https://res.cloudinary.com/demo/image/upload/v1/porch.jpg",
    });
    expect(tourMediaFor("https://example.com/walk.mp4?x=1")).toEqual({ kind: "video", src: "https://example.com/walk.mp4?x=1" });
  });

  it("embeds YouTube, Vimeo and Drive files", () => {
    expect(tourMediaFor("https://www.youtube.com/watch?v=dQw4w9WgXcQ")?.src).toBe("https://www.youtube.com/embed/dQw4w9WgXcQ");
    expect(tourMediaFor("https://vimeo.com/76979871")?.src).toBe("https://player.vimeo.com/video/76979871");
    expect(tourMediaFor("https://drive.google.com/open?id=FILEID")?.src).toBe("https://drive.google.com/file/d/FILEID/preview");
  });

  it("refuses non-https, folders, audio, channels, and nothing", () => {
    for (const url of [null, undefined, "", "http://example.com/a.png", "https://drive.google.com/drive/folders/1", "https://a.com/b.wav", "https://youtube.com/results?search_query=x"]) {
      expect(tourMediaFor(url), String(url)).toBeNull();
    }
  });
});

describe("toEmbed: the Google Drive rule", () => {
  it("turns a shared file's /view link into its /preview form", () => {
    expect(toEmbed("https://drive.google.com/file/d/1AbC_dEf/view?usp=sharing")).toEqual({
      kind: "iframe",
      src: "https://drive.google.com/file/d/1AbC_dEf/preview",
    });
    expect(toEmbed("https://drive.google.com/file/d/1AbC_dEf/edit")?.src).toBe("https://drive.google.com/file/d/1AbC_dEf/preview");
    expect(toEmbed("https://drive.google.com/open?id=1AbC_dEf")?.src).toBe("https://drive.google.com/file/d/1AbC_dEf/preview");
  });

  it("keeps a resourcekey and leaves a folder link alone", () => {
    expect(toEmbed("https://drive.google.com/file/d/X/view?resourcekey=0-k")?.src).toBe(
      "https://drive.google.com/file/d/X/preview?resourcekey=0-k",
    );
    expect(toEmbed("https://drive.google.com/drive/folders/F")?.src).toBe("https://drive.google.com/drive/folders/F");
  });

  it("does not touch the other providers", () => {
    expect(toEmbed("https://youtu.be/dQw4w9WgXcQ")?.src).toBe("https://www.youtube.com/embed/dQw4w9WgXcQ");
    expect(toEmbed("https://docs.google.com/presentation/d/P/edit")?.src).toBe("https://docs.google.com/presentation/d/P/embed");
  });
});

describe("liveTour: re-checked on every read", () => {
  const stored = { url: ok.storageUrl!, creditLine: "Photo by BAM at the porch.", capture: ok, leg };

  it("shows a tour whose capture still passes, with its stored credit", () => {
    expect(liveTour(stored)).toEqual({
      ok: true,
      media: { kind: "iframe", src: "https://drive.google.com/file/d/abc123/preview" },
      credit: "Photo by BAM at the porch.",
    });
  });

  it("hides a tour whose capture was deleted, or whose link changed", () => {
    expect(liveTour({ ...stored, capture: null })).toMatchObject({ ok: false, reason: "capture_removed" });
    expect(liveTour({ ...stored, capture: { ...ok, storageUrl: "https://youtu.be/dQw4w9WgXcQ" } })).toMatchObject({
      ok: false,
      reason: "link_changed",
    });
  });

  it("hides a tour when consent later becomes declined, or the permission note is removed", () => {
    expect(liveTour({ ...stored, capture: { ...ok, consentStatus: "declined" } })).toMatchObject({ reason: "consent_declined" });
    expect(liveTour({ ...stored, leg: { permissionNote: "" } })).toMatchObject({ reason: "no_permission_note" });
    expect(liveTour({ ...stored, leg: null })).toMatchObject({ reason: "no_permission_note" });
  });
});

describe("canPublishTour", () => {
  it("is the platform owner or the course's own instructor, nobody else", () => {
    expect(canPublishTour({ isOwner: true, isInstructor: false })).toBe(true);
    expect(canPublishTour({ isOwner: false, isInstructor: true })).toBe(true);
    expect(canPublishTour({ isOwner: false, isInstructor: false })).toBe(false);
  });
});

describe("credit", () => {
  it("names the kind, the person, the place and the month", () => {
    expect(
      buildTourCredit({
        kind: "photo",
        capturedBy: "Brand Anthony McDonald",
        legName: "Fort Benjamin Harrison",
        locationLabel: "Lawrence, Indiana",
        capturedAt: "2026-10-12T15:00:00Z",
      }),
    ).toBe("Photo by Brand Anthony McDonald at Fort Benjamin Harrison, Lawrence, Indiana, October 2026.");
  });

  it("reads sensibly without a name, a place label or a date", () => {
    expect(buildTourCredit({ kind: "video", capturedBy: null, legName: "The Speedway" })).toBe(
      "Video from the field at The Speedway.",
    );
    expect(buildTourCredit({ kind: "video", capturedBy: "  ", legName: "Gate 2.", capturedAt: "garbage" })).toBe(
      "Video from the field at Gate 2.",
    );
  });

  it("never exceeds the column's limit", () => {
    const long = buildTourCredit({ kind: "photo", capturedBy: "A", legName: "x".repeat(600) });
    expect(long.length).toBeLessThanOrEqual(TOUR_CREDIT_MAX);
    expect(long.endsWith(".")).toBe(true);
  });

  it("normalizes a typed credit to one trimmed line, 1 to 400 characters", () => {
    expect(normalizeTourCredit("  Photo by BAM\n at the porch.  ")).toEqual({ ok: true, credit: "Photo by BAM at the porch." });
    expect(normalizeTourCredit("   ")).toMatchObject({ ok: false });
    expect(normalizeTourCredit(null)).toMatchObject({ ok: false });
    expect(normalizeTourCredit("x".repeat(TOUR_CREDIT_MAX)).ok).toBe(true);
    expect(normalizeTourCredit("x".repeat(TOUR_CREDIT_MAX + 1))).toMatchObject({ ok: false });
  });
});

describe("isEmptyTourSlot", () => {
  it("is a virtual_tour with no link of its own and no field tour", () => {
    expect(isEmptyTourSlot({ lessonType: "virtual_tour", contentUrl: null }, false)).toBe(true);
    expect(isEmptyTourSlot({ lessonType: "virtual_tour", contentUrl: "  " }, false)).toBe(true);
    expect(isEmptyTourSlot({ lessonType: "virtual_tour", contentUrl: "https://wanderlearn.example/t" }, false)).toBe(false);
    expect(isEmptyTourSlot({ lessonType: "virtual_tour", contentUrl: null }, true)).toBe(false);
    expect(isEmptyTourSlot({ lessonType: "text", contentUrl: null }, false)).toBe(false);
  });
});

describe("suggestSlotFromNotes", () => {
  const slots = [
    { courseId: "c1", courseSlug: "fort-harrison", lessonId: "l1", lessonSlug: "fh-now-tour", username: "bam" },
    { courseId: "c2", courseSlug: "indiana-avenue", lessonId: "l2", lessonSlug: "ia-now-tour", username: "bam" },
  ];

  it("picks the slot whose lesson the notes link", () => {
    expect(suggestSlotFromNotes("Serves /bam/indiana-avenue/lesson/ia-now-tour ; park on the east side", slots)?.lessonId).toBe("l2");
  });

  it("falls back to the course a note links, including another lesson of it", () => {
    expect(suggestSlotFromNotes("Read /bam/fort-harrison/lesson/fh-the-post first", slots)?.lessonId).toBe("l1");
    expect(suggestSlotFromNotes("Course: /bam/fort-harrison", slots)?.lessonId).toBe("l1");
  });

  it("suggests nothing for another instructor's address, external links, or no notes", () => {
    expect(suggestSlotFromNotes("/someone-else/fort-harrison/lesson/fh-now-tour", slots)).toBeNull();
    expect(suggestSlotFromNotes("https://www.nps.gov/fort-harrison", slots)).toBeNull();
    expect(suggestSlotFromNotes(null, slots)).toBeNull();
    expect(suggestSlotFromNotes("/bam/fort-harrison", [])).toBeNull();
  });
});

describe("what a live tour hides, on all 13 real tour lessons", () => {
  const COURSES: [string, AuthoredCourse][] = [
    ["baltimore-chain", BALTIMORE_CHAIN_COURSE],
    ["dc-berman", DC_BERMAN_COURSE],
    ["fort-harrison", FORT_HARRISON_COURSE],
    ["gym-color-line", GYM_COLOR_LINE_COURSE],
    ["indiana-avenue", INDIANA_AVENUE_COURSE],
    ["mudsock-boundary", MUDSOCK_BOUNDARY_COURSE],
    ["philadelphia-university", PHILADELPHIA_UNIVERSITY_COURSE],
    ["pittsburgh-playbook", PITTSBURGH_PLAYBOOK_COURSE],
    ["presidents-house", PRESIDENTS_HOUSE_COURSE],
    ["schoolhouse-network", SCHOOLHOUSE_NETWORK_COURSE],
    ["seattle-bookend", SEATTLE_BOOKEND_COURSE],
    ["two-racetracks", TWO_RACETRACKS_COURSE],
    ["where-we-rested", WHERE_WE_RESTED_COURSE],
  ];
  const tours = COURSES.flatMap(([name, c]) =>
    c.lessons.filter((l) => l.lessonType === "virtual_tour").map((l) => ({ name, lesson: l })),
  );

  it("finds exactly one tour lesson per course, none with a link of its own", () => {
    expect(tours.map((t) => t.name)).toEqual(COURSES.map(([n]) => n));
    expect(tours.every((t) => !t.lesson.contentUrl)).toBe(true);
  });

  for (const { name, lesson } of tours) {
    // The text as the seeder stores it (release markers stripped), which is what the page renders.
    const stored = parseReleaseMarkers(lesson.body ?? "").body;

    it(`${name}: strips the title suffix only when filled`, () => {
      expect(displayTourTitle(lesson.title, false)).toBe(lesson.title);
      const shown = displayTourTitle(lesson.title, true);
      expect(shown).not.toMatch(/forthcoming/i);
      expect(shown).not.toMatch(/\(\s*$/);
      expect(lesson.title.startsWith(shown)).toBe(true);
      expect(lesson.title.length - shown.length).toBeGreaterThan(10);
    });

    it(`${name}: hides exactly the forthcoming paragraph only when filled`, () => {
      const lead = forthcomingLead(stored);
      expect(lead).toMatch(/^\*\*The (360|virtual) tour for this lesson is forthcoming\.\*\*/);
      expect(lead).not.toContain("\n\n");
      expect(displayTourBody(stored, false)).toBe(stored);
      const shown = displayTourBody(stored, true)!;
      expect(shown).not.toContain("for this lesson is forthcoming");
      // Nothing after the lead paragraph is lost: the shown body is the stored one minus that paragraph.
      expect(stored.endsWith(shown)).toBe(true);
      expect(shown.length).toBeGreaterThan(stored.length / 2);
      expect(shown.startsWith("**")).toBe(true);
    });
  }

  it("leaves a lesson that does not open with the notice untouched", () => {
    const body = "**Read this first.** The tour for this lesson is forthcoming.\n\nMore.";
    expect(forthcomingLead(body)).toBeNull();
    expect(displayTourBody(body, true)).toBe(body);
    expect(displayTourTitle("Walk the post", true)).toBe("Walk the post");
    expect(displayTourBody(null, true)).toBeNull();
  });
});
