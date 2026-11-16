/**
 * Phrase lists for the AI-writing-tells check (`pnpm check:ai-tells`, rubric v1.7 gate D4).
 *
 * COPIED, NOT SHARED. These three lists are a copy of
 * claude/bam-landing-page/scripts/lib/ai-writing-tells.mjs (the blog's audit and draft gate), taken on
 * 2026-11-16. The two repos share no code, so the copy is the only way the courses and the blog are
 * held to the same list. When the blog's list changes, copy it here again, update the date above, and
 * expect the baseline (scripts/lib/ai-tells-baseline.json) to need the owner's `--update-baseline`.
 *
 * HIGH: near-diagnostic cliches. MED: common but telling. LOW: weak signals. Matched
 * case-insensitively as whole phrases (no letter directly before or after), the same as the blog's
 * auditor. Both apostrophe forms are listed, as in the source.
 */

export const HIGH: readonly string[] = [
  "delve into", "delved into", "in today’s fast-paced", "in today's fast-paced",
  "a testament to", "stands as a testament", "rich tapestry", "tapestry of",
  "navigating the complexities", "navigate the complexities", "in the realm of",
  "treasure trove", "unlock the power", "unlock the potential", "unlock the secrets",
  "embark on a journey", "ever-evolving", "ever-changing landscape", "needless to say",
  "without further ado", "when it comes to", "harness the power", "look no further",
  "dive into the world", "in the world of", "at the end of the day", "it goes without saying",
  "the power of", "unleash the", "paving the way", "a game-changer", "game changer",
  "in conclusion", "last but not least",
];

export const MED: readonly string[] = [
  "it’s important to note", "it's important to note", "it’s worth noting", "it's worth noting",
  "it is worth noting", "that being said", "moreover", "furthermore", "additionally,",
  "in summary", "leverage", "seamless", "seamlessly", "robust", "elevate your",
  "cutting-edge", "boasts", "plays a crucial role", "plays a pivotal role",
  "plays a vital role", "plays a key role", "foster a", "underscore", "pivotal",
  "myriad", "showcase", "holistic", "first and foremost", "on the other hand",
];

export const LOW: readonly string[] = [
  "let’s dive", "let's dive", "let’s explore", "let's explore", "let’s take a look",
  "let's take a look", "firstly", "secondly", "thirdly", "in this article", "in this post",
  "in this guide", "by the end of this", "keep in mind", "whether you’re a", "whether you're a",
  "remember,", "crucial", "vital", "comprehensive", "vibrant",
];
