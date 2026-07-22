// NGSS — a SHARED framework, mapped once. The 20+ NGSS states reference this from their
// data/<state>.ts via `adoptions` (verbatim or with local code aliases); the mapping is never
// redone per state. Indiana is NOT an NGSS state — it publishes its own science standards.
//
// Fetched 2026-07-13 from nextgenscience.org (the one HS-ESS3 performance expectation this
// catalog can honestly touch — see the note on it before relying on it).

import type { SharedFramework } from "../types";

export const NGSS: SharedFramework = {
  id: "ngss",
  subject: "Science",
  name: "Next Generation Science Standards (NGSS)",
  publisher: "NGSS Lead States / nextgenscience.org",
  version: "HS-ESS3 Earth and Human Activity",
  sourceUrl: "https://www.nextgenscience.org/dci-arrangement/hs-ess3-earth-and-human-activity",
  fetchedOn: "2026-07-13",
  standards: [
    {
      code: "HS-ESS3-1",
      text: "Construct an explanation based on evidence for how the availability of natural resources, occurrence of natural hazards, and changes in climate have influenced human activity.",
      claimIds: ["bvc.climate-resources-shape-humans"],
      coverage: "partial",
      note: "Read this one carefully before you rely on it. This is NOT a science course, it has no laboratory work, no investigations and no scientific modelling. What it does have is precisely the content of HS-ESS3-1: resource availability and climate change shaping what humans do and where. The lessons supply the evidence; the STUDENT constructs the explanation only in the Coffee project (Option B). If your science requirement is assessed on the three-dimensional NGSS performance, this contributes to it, it does not discharge it.",
    },
  ],
};
