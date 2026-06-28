// Teaching "lenses" the supervisor can route a question to. Generic + grounded,
// so they work for any course while embodying the learning-science standard
// (concrete examples = Made to Stick; the practice lens = active retrieval).
export type Lens = "explain" | "examples" | "coach";

export const LENSES: Record<Lens, { label: string; instruction: string }> = {
  explain: {
    label: "Explanation",
    instruction:
      "Explain the answer to the student's question clearly and concisely, using ONLY the course material. Lead with the single core idea, then briefly support it.",
  },
  examples: {
    label: "Examples",
    instruction:
      "Give one or two CONCRETE examples drawn from the course material that make the answer click. If the material has none that fit, say so plainly.",
  },
  coach: {
    label: "Practice",
    instruction:
      "Pose ONE short active-recall or production challenge so the student practices what they just learned (e.g. 'Now try to ...'). Keep it doable in a minute. For a language course, make it a short production drill.",
  },
};

export const ALL_LENSES: Lens[] = ["explain", "examples", "coach"];
