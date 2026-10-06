import { describe, expect, it } from "vitest";
import { FUTURE_WORK, futureWorkGroups, getFutureWorkItem } from "@/lib/future-work";
import { PROPOSAL_DOCS, SUBDIR_DOCS } from "@/lib/future-work-content/proposals";
import committed from "./fixtures/future-work-keys-2026-10-05.json";

// The Future classes & features content is COMMITTED (generated from the gitignored
// plans/future-courses/ notes by `pnpm gen:future-work`), because /admin/future renders it in a
// deploy where plans/ does not exist. These tests guard the two things that would break silently:
// the content shipping empty, and an item key drifting (item_key is the join key for the notes).
describe("future-work content index", () => {
  it("ships the She Did the Work proposal and every subject seed with a body", () => {
    const proposal = getFutureWorkItem("she-did-the-work");
    expect(proposal).toBeDefined();
    expect(proposal!.body).toContain("14 factual errors");

    const subjects = FUTURE_WORK.filter((i) => i.key.startsWith("sdtw-"));
    expect(subjects.length).toBeGreaterThanOrEqual(28);
    for (const s of subjects) {
      expect(s.body.length, s.key).toBeGreaterThan(100);
      expect(s.summary.length, s.key).toBeGreaterThan(0);
    }
  });

  it("carries the other standing proposals", () => {
    // Named proposals used to be pinned here (travel-abroad, workers-rights-track-proposal,
    // history-of-unions). They shipped and were archived to plans/future-courses/completed/, which
    // the generator excludes on purpose, so pinning slugs made "BAM finished something" look like a
    // broken build. Assert the SHAPE instead: a healthy standing backlog with real bodies.
    // Loose notes now live one folder down, in the category folder they belong to, so they are
    // selected by the array the generator emits them into rather than by path depth.
    const looseKeys = new Set(PROPOSAL_DOCS.map((p) => p.key));
    const standing = FUTURE_WORK.filter((i) => looseKeys.has(i.key));
    expect(standing.length, "loose-note backlog collapsed").toBeGreaterThanOrEqual(10);
    for (const i of standing) expect(i.body.length, i.key).toBeGreaterThan(50);
  });

  // Top-level plans/future-courses/*.md are AUTO-DISCOVERED. Before this, the generator read two
  // hardcoded filenames, so a note BAM filed was invisible in /admin/future until someone edited the
  // script — it looked filed, and wasn't there. This test is the guard against that regressing.
  it("auto-discovers a newly dropped proposal note", () => {
    // Deliberately NOT a hardcoded slug: any note named here can legitimately ship and be archived,
    // and then this guard fails for the one reason it was never meant to catch. What must hold is
    // that discovery finds top-level notes AT ALL, with a date prefix stripped from the key.
    const top = PROPOSAL_DOCS;
    expect(top.length, "no loose notes discovered, is discovery hardcoded again?").toBeGreaterThan(5);
    const dated = top.filter((i) => /^\d{4}-\d{2}-\d{2}-/.test((i.provenance ?? "").split("/").pop()!));
    expect(dated.length, "date-prefixed notes exist but were not discovered").toBeGreaterThan(0);
    for (const i of dated) {
      expect(i.key, `${i.provenance} kept its date prefix in the key`).not.toMatch(/^\d{4}-\d{2}-\d{2}-/);
    }
    // The category folder a note sits in is TRANSPARENT: it never becomes part of the key. If it did,
    // every loose note would have changed key on 2026-10-05 and orphaned its review notes.
    for (const d of PROPOSAL_DOCS) {
      const segs = d.provenance.split("/");
      expect(segs.length, `${d.provenance} is nested deeper than category/file`).toBeLessThanOrEqual(4);
      if (segs.length === 4) {
        expect(d.key.startsWith(`${segs[2]}-`), `category folder leaked into key ${d.key}`).toBe(false);
      }
    }
  });

  // A topic bundle's key is prefixed by ITS OWN folder name (`mansa-gold-…`), never by the category
  // folder above it (`bvc-taster-…`). Same reason: the keys predate the category folders.
  it("prefixes bundle keys with the bundle folder, not the category folder", () => {
    expect(SUBDIR_DOCS.length).toBeGreaterThan(20);
    for (const d of SUBDIR_DOCS) {
      const segs = d.provenance.split("/");
      expect(segs.length, `${d.provenance} should be category/area/file`).toBeGreaterThanOrEqual(4);
      const area = segs[segs.length - 2];
      expect(d.key.startsWith(`${area}-`), `${d.key} is not prefixed by its folder ${area}`).toBe(true);
    }
  });

  // Folders marked `*READ-ME-FIRST-private-study-only.md` hold material BAM reads and does not
  // publish; the generator must not have copied any of it into this committed module.
  it("publishes nothing from a private-study folder", () => {
    for (const i of FUTURE_WORK) {
      expect(i.key, `${i.key} came from a private-study folder`).not.toMatch(/private-study-only|^uncredited-/i);
      expect(i.provenance, `${i.provenance} is a private-study path`).not.toMatch(/\/uncredited\//);
    }
  });

  // The whole committed key set as of 2026-10-05, pinned. A key leaves this list only by an archive
  // to completed/ done on purpose (then edit the fixture in the same commit and say why).
  it("keeps every key that was committed before the folder reorganisation", () => {
    const live = new Set(FUTURE_WORK.map((i) => i.key));
    const missing = committed.keys.filter((k) => !live.has(k));
    expect(missing, "committed keys dropped (orphans their notes)").toEqual([]);
  });

  it("keeps item keys unique — they are the join key for future_work_notes", () => {
    const keys = FUTURE_WORK.map((i) => i.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  // item_key is the join column for future_work_notes. Renaming a key silently orphans every note
  // filed against it — the note stays in the table and never renders again. These two predate
  // auto-discovery (whose keys are filename-derived), so they are pinned by an explicit override.
  it("preserves the pre-existing keys that notes may already be attached to", () => {
    // The real regression this guards is the 2026-08-26 rename of every note to
    // `YYYY-MM-DD-<slug>.md`. The generator derived keys from the raw filename, so regenerating
    // would have rewritten `mansa-gold-interview-prep` to `mansa-gold-07-13-00-interview-prep`
    // (and skipped all 29 She Did the Work subjects outright, since they now all match `^\d+-`).
    // Keys must survive a file rename; these three are committed keys that notes may be joined to.
    for (const k of [
      "mansa-gold-interview-prep",
      "health-prompts",
      "outdoors-kayaking",
      "she-did-the-work",
      "sdtw-ava-duvernay",
      "reporter-learn-to-be-a-reporter",
    ]) {
      expect(getFutureWorkItem(k), `${k} drifted — did a rename change the join key?`).toBeDefined();
    }
    for (const i of FUTURE_WORK) {
      expect(i.key, `${i.key} carries a date prefix`).not.toMatch(/^\d{4}-\d{2}-\d{2}-/);
    }
  });

  // The OTHER half of the same join-key story, and the one that bites. Archiving a note to
  // plans/future-courses/completed/ removes its item, so any future_work_notes row filed against
  // that key stops rendering — the row is still in the table, just unreachable. That is the
  // intended meaning of "done", but it IS a silent data consequence, so assert it on purpose
  // rather than letting a future reader discover it from a mystery test failure.
  it("drops archived proposals, orphaning any notes filed against them", () => {
    for (const archived of ["civics-more", "travel-abroad", "history-of-unions"]) {
      expect(getFutureWorkItem(archived), `${archived} is in completed/`).toBeUndefined();
    }
  });

  it("reflects the proposal's judgment: 5 carry a course, Sage Steele is cut", () => {
    expect(FUTURE_WORK.filter((i) => i.status === "recommended")).toHaveLength(5);
    expect(getFutureWorkItem("sdtw-sage-steele")?.status).toBe("cut");
    expect(getFutureWorkItem("sdtw-mary-bassett")?.status).toBe("deferred");
  });

  // Asserts the KNOWN groups are present and correctly ordered relative to each other — NOT the exact
  // full list. Content is auto-discovered, so a new note/folder legitimately adds a group; pinning the
  // whole list would make every new drop a test failure, which is the brittleness this system removed.
  it("groups by kind, keeping the curated groups in declaration order", () => {
    const courseGroups = futureWorkGroups("course").map((g) => g.title);
    // Civics, Workers' Rights and Travel & Living Abroad were here until their notes were archived.
    for (const g of ["She Did the Work", "She Did the Work, subject research", "Proposals"]) {
      expect(courseGroups, `${g} missing from /admin/future`).toContain(g);
    }
    // She Did the Work is authored first and must stay at the top.
    expect(courseGroups[0]).toBe("She Did the Work");

    // Research bundles are `feature`, one group per subdir of plans/future-courses/.
    const featureGroups = futureWorkGroups("feature").map((g) => g.title);
    // Pricing was curated and has since been archived; Mansa Gold is an auto-discovered subdir.
    expect(featureGroups).toContain("Mansa Gold");
    expect(featureGroups).toContain("Sciences");
  });

  // Subdirectories of plans/future-courses/ are auto-discovered folder-by-folder, one item per .md,
  // grouped by the folder. This is what makes the Mansa Gold interview-prep pack reviewable in
  // /admin/future. The `*-FULL.md` concatenation (a PDF-export artifact) is skipped so it can't
  // duplicate its own sibling files.
  it("auto-discovers a subdirectory research bundle (Mansa Gold)", () => {
    const prep = getFutureWorkItem("mansa-gold-interview-prep");
    expect(prep, "mansa-gold/ subdir was not picked up").toBeDefined();
    expect(prep!.kind).toBe("feature");
    expect(prep!.group).toBe("Mansa Gold");
    expect(prep!.body.length).toBeGreaterThan(200);
    // Its provenance names the real file, under whatever category folder the bundle sits in today.
    expect(prep!.provenance).toMatch(
      /^plans\/future-courses\/(?:[a-z0-9_-]+\/)?mansa-gold\/2026-07-13-00-interview-prep\.md$/,
    );
    // The redundant concatenation must NOT appear as its own item.
    expect(getFutureWorkItem("mansa-gold-mansa-gold-interview-prep-FULL")).toBeUndefined();
  });
});
