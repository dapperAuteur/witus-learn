// Authored practical trade/skill course: knot-tying and rope work for the
// Learn.WitUS LMS (category "Trade Skills"). This is a hands-on, description-first
// course — each knot lesson explains WHAT the knot is, a clear step-by-step
// description in words, WHEN to use / when NOT to, and common mistakes.
//
// SOURCING / IP NOTE (load-bearing):
//   • PRIMARY, PUBLIC DOMAIN backbone: A. Hyatt Verrill's "Knots, Splices and
//     Rope Work: A Practical Treatise" (2nd rev. ed., 1917), via Project Gutenberg
//     (public domain). Its terminology and technique descriptions are cited
//     directly in-line (APA 7) and in each lesson's `## Sources` block.
//   • SECONDARY, COPYRIGHTED — topic map / "Further reading" ONLY: Pawson, D.
//     (2012). Knots: The Complete Visual Guide. DK. It is used only to confirm the
//     modern topic set (e.g. taut-line hitch, back splice); NONE of its text or
//     figures are reproduced. It appears solely as a "Further reading" pointer.
//
// The importer upserts lessons by (courseId, slug); slugs are stable.

import type { AuthoredCourse } from "./authored-course";

// A short shared bibliography line for the public-domain backbone, reused across
// lessons' `## Sources` blocks so the citation is consistent.
const VERRILL = "Verrill, A. H. (1917). *Knots, splices and rope work: A practical treatise* (2nd rev. ed.). Project Gutenberg (public domain). https://www.gutenberg.org/ebooks/13510";

export const KNOTS_COURSE: AuthoredCourse = {
  title: "Knot-Tying & Rope Work",
  description:
    "A practical, hands-on trade course in knots, hitches, bends, whippings, and splices — the foundational rope skills behind rigging, sailing, climbing, and survival. Description-first (every knot is taught in words: what it is, how to tie it step by step, when to use it and when NOT to, and the common mistakes). Built on the public-domain classic by A. Hyatt Verrill (1917). This course pairs with the Sports/Media Broadcasting course: rope and rigging skill is core to broadcast \"utility technician\" roles (cable and rigging) and to the trades, sailing, climbing, and survival.",
  lessons: [
    // ── Intro ──────────────────────────────────────────────────────────────
    {
      slug: "why-rope-work",
      title: "0 · Why rope work is a trade skill",
      section: "Introduction",
      body: `**What this course is.** A practical, description-first course in knots and rope work. You will not just memorize shapes — for every knot you will learn *what it is*, a clear *step-by-step description in words*, *when to use it and when NOT to*, and the *common mistakes* that make a knot fail.

**Why it's a trade skill (and where it pays).** Knot and rigging skill is foundational across a surprising number of careers:

- **Broadcast "utility technician" (utility / cable / rigging) roles.** On a live sports or event broadcast, utility techs run and dress cable, secure runs, and help rig cameras and equipment. Clean, correct rope and cable work is the job. **This course pairs directly with the Sports/Media Broadcasting course** — treat the two as a set.
- **The trades** — construction, arborism, roofing, and utility work all hoist, secure, and lash loads.
- **Sailing** — the whole vocabulary of knots comes from the sea; a boat is run on rope work.
- **Climbing** — where the right knot, correctly tied, is a life-safety item.
- **Survival / outdoors** — shelters, lashings, and securing gear all come down to a handful of reliable knots.

**A safety word up front.** Several sections touch load-bearing, rescue, and rigging uses. Those lessons are **educational** — they are **not** a substitute for certified rigging, climbing, or rescue training. Where a life or a heavy load depends on the rope, use rated gear and get trained and supervised. This is flagged again at each such point.

**How to practice.** Get a few feet of soft, flexible rope (about 3/8 inch / 10 mm). Tie each knot as you read, slowly, until your hands know it without the words.

## Sources
- ${VERRILL}
- *Further reading (copyrighted; not reproduced here):* Pawson, D. (2012). *Knots: The complete visual guide.* DK.`,
    },

    // ── Section 1 ──────────────────────────────────────────────────────────
    {
      slug: "rope-fibers-and-materials",
      title: "1 · Rope fibers and materials",
      section: "1 · Rope, cord & materials",
      body: `**What it is.** "Rope" is fiber twisted into yarns, yarns twisted into strands, and strands twisted (laid) together into rope. The direction of the final twist is the rope's *lay* — most traditional rope is right-handed (Z-laid). Understanding what a rope is made of tells you how it will behave under load, weather, and abrasion.

**Natural fibers (traditional).** Verrill (1917) notes that cordage is made from "hemp, jute, cotton, or other material," and that **Manila or hemp** rope is the common working rope, while **cotton** is used mainly for "small hand-lines, clothes-lines, twine, etc." Natural fiber is grippy and holds knots well, but it rots when kept wet, weakens with mildew, and loses strength as it ages.

**Synthetic fibers (modern).** Nylon (strong and stretchy — good for shock loads, poor where you don't want stretch), polyester/Dacron (strong, low-stretch, UV-resistant), and polypropylene (cheap, floats, but weak and UV-degrades). Synthetics resist rot but many are slippery, so knots in them must be chosen and dressed carefully.

**Construction types.** *Laid* (twisted, three-strand) rope is what most classic splices are made for. *Braided* rope (a core inside a braided sheath) is common in modern climbing and utility work and generally will not accept a traditional splice.

**When it matters.** Pick the fiber for the job: nylon to absorb a shock, polyester for a low-stretch control line, natural fiber where grip and tradition matter (and it can be splice-worked).

**Common mistakes.** Using a floating, UV-weak polypropylene rope for a load-bearing task; trusting old, sun-faded, or mildewed natural rope; assuming a knot that holds in grippy natural fiber will hold in slick synthetic (often it won't).

## Sources
- ${VERRILL}`,
    },
    {
      slug: "parts-of-a-rope",
      title: "2 · Parts of a rope: the vocabulary",
      section: "1 · Rope, cord & materials",
      body: `**What it is.** Every knot description uses three words. Verrill (1917) defines them precisely:

- **Standing part** — "the principal portion or longest part of the rope." This is the part under load, the part you do *not* move while tying.
- **Bight** — "the part curved or bent while working or handling." A bight is any U-shaped bend in the rope that does not cross itself. (When it crosses itself it becomes a *loop*.)
- **End** (the *working end* or *running end*) — "that part used in forming the knot or hitch." This is the short tail you actively weave.

**Two more useful terms.** A **turn** is one wrap of the rope around an object; a **round turn** is a full wrap-and-a-bit so the rope leaves alongside where it entered (it takes friction load before the knot ever does).

**Why it matters.** Almost every step in this course reads "pass the *end* around/over/under the *standing part*." If those two words are clear, the instructions become easy to follow. Verrill also names the "cuckold's-neck" — a crossed loop — which is the starting shape for the overhand knot and the bowline.

**When it matters.** Reading any knot description, teaching a knot to someone else, or calling out rigging on a crew ("take a round turn and make it fast").

**Common mistakes.** Confusing a *bight* (open U) with a *loop* (crossed); loading the *end* instead of the *standing part*; not leaving enough *end* (tail) to finish the knot safely.

## Sources
- ${VERRILL}`,
    },
    {
      slug: "care-and-coiling",
      title: "3 · Care, coiling & storing rope",
      section: "1 · Rope, cord & materials",
      body: `**What it is.** Rope is a tool, and coiling and storing it well is part of the trade. A coiled rope deploys tangle-free; a badly stored rope kinks, hockles (forms tight snarls that damage the lay), and fails early.

**Coiling a laid rope, step by step.**
1. Hold the standing end in one hand.
2. With the other hand, form loops of even size, **feeding a slight clockwise twist into each loop** so a right-laid rope lies flat instead of figure-eighting. (Braided rope prefers a figure-eight or "flake" coil instead, because it has no lay to twist with.)
3. When the coil is complete, wrap the working end several times around the whole coil, then pass a bight of the end up through the top of the coil and over the crown to lock it.

**Care rules.** Keep natural-fiber rope dry and let it air-dry before storing (Verrill's era knew wet hemp rots). Keep all rope out of direct sun over time (UV kills synthetics). Avoid dragging rope over grit and sharp edges (abrasion is the #1 killer of working rope). Inspect for cuts, glazing (heat damage), and a soft/mushy core before trusting a rope with load.

**When it matters.** Every time you finish a job — a well-kept, well-coiled rope is faster and safer next time.

**Common mistakes.** Coiling a laid rope without the twist (it fights you and kinks); putting a wet natural rope away (rot); stepping on rope over grit; keeping a glazed, cut, or sun-rotted rope in service.

## Sources
- ${VERRILL}`,
    },

    // ── Section 2 ──────────────────────────────────────────────────────────
    {
      slug: "overhand-knot",
      title: "4 · The overhand knot",
      section: "2 · Foundational knots",
      body: `**What it is.** The simplest knot there is. Verrill (1917) describes it: "If the loose end of the rope is passed over the standing part and through the cuckold's-neck, the simplest of all knots, known as the Overhand Knot, is made." It is the seed of many other knots and a basic *stopper* (a knot that keeps a rope end from pulling through a hole).

**Step by step.**
1. Make a small loop by crossing the **end** over the **standing part** (this crossed loop is Verrill's "cuckold's-neck").
2. Pass the **end** through that loop.
3. Draw it tight.

**When to use it.** As a quick stopper; to keep the end of a yarn or strand from unlaying while you splice (Verrill's stated use); as the building block of the fisherman's knot (Section 5).

**When NOT to use it.** As your permanent stopper on a busy line — it jams hard under load and can be very difficult to untie, and it weakens the rope more than a figure-eight. Prefer the figure-eight for that job.

**Common mistakes.** Relying on it as a load stopper (it jams); tying it accidentally in the middle of a working line, where it creates a weak point.

## Sources
- ${VERRILL}`,
    },
    {
      slug: "figure-eight-stopper",
      title: "5 · The figure-eight (stopper) knot",
      section: "2 · Foundational knots",
      body: `**What it is.** A stopper knot that is bulkier than the overhand but — crucially — does **not** jam, so it unties easily even after loading. Verrill (1917) presents it as "almost as simple as the overhand." It is the standard stopper at the end of a line so the line cannot run out through a block, ring, or fairlead.

**Step by step.**
1. Make a loop by crossing the **end** over the **standing part**.
2. Take the **end** *around behind* the standing part.
3. Bring the **end** back and pass it *down through* the original loop (from the top). You have drawn a shape like the numeral **8**.
4. Draw it snug.

**When to use it.** As the go-to stopper knot on any running line (sheets, halyards, belay lines); anywhere you want a stopper you can still untie.

**When NOT to use it.** Where you actually need a loop or a bend — a stopper only blocks an end; it does not attach or join.

**Common mistakes.** Tying an overhand instead (jams); making it too close to the very tip so it can pull off — leave a short tail; forgetting it entirely and letting a sheet run out through the block.

## Sources
- ${VERRILL}`,
    },
    {
      slug: "square-reef-knot",
      title: "6 · The square (reef) knot",
      section: "2 · Foundational knots",
      body: `**What it is.** A knot for joining two ends of the *same* rope around an object — reefing a sail, tying a bundle, or closing a whipping. Verrill (1917) gives the method: "take the ends of the rope and pass the left end over and under the right end, then the right over and under the left," and offers the memory formula **"Left over, Right over."** Tied right, he says, it "is very strong, never slips or becomes jammed." The **reef knot** is the same knot tied with a bight of one end (a slipped square knot) so it "can be cast off more readily."

**Step by step.**
1. Pass the **left** end over and under the right end.
2. Pass the (now on the right) end **over and under** the left end.
3. Both standing parts and both ends should exit the knot **on the same side** as their partner. Draw tight.

**When to use it.** Binding and reefing: tying a bundle, a reef in a sail, a bandage, a package. The reef (slipped) version when you'll want to release it fast.

**When NOT to use it — important.** A square knot is a *binding* knot, **not** a bend for joining two separate loaded ropes. If loaded as a bend it can capsize and slip, especially in slick synthetic rope, and it fails badly if the two ropes differ in thickness. For joining two ropes, use a sheet bend (Section 5).

**Common mistakes.** Tying a **granny** by mistake (next lesson) — the single most common knot error; using it to join two ropes under real load; using it on very different rope sizes.

## Sources
- ${VERRILL}`,
    },
    {
      slug: "granny-knot",
      title: "7 · The granny knot — and why it fails",
      section: "2 · Foundational knots",
      body: `**What it is.** The granny is the square knot tied *wrong* — "Right over, Right over" instead of "Left over, Right over." It looks almost identical at a glance but behaves completely differently. Verrill (1917) is blunt about it: learn the formula "and you will never make a mistake and form the despised 'Granny,' a most useless, bothersome, and deceptive makeshift."

**Why it fails.** In a correct square knot the two ends exit *parallel* to their standing parts and the knot locks against itself. In a granny the ends exit *across* the knot; under load the granny either **slips** (the ends work loose) or **jams** so hard it can't be untied — the worst of both outcomes.

**How to tell them apart.** In a finished square knot, each **end lies alongside its own standing part** (both parts of each rope exit the same side, forming two neat interlocked bights). In a granny, an end crosses over the top at right angles and the whole knot looks twisted or "cocked."

**When to use it.** Never, intentionally. It is included here only so you can *recognize and correct* it.

**Common mistakes.** The mistake *is* the granny — usually from tying on autopilot. The fix: say "left over, right over" out loud as you tie, and check that the ends run parallel to their standing parts before you trust it.

## Sources
- ${VERRILL}`,
    },

    // ── Section 3 ──────────────────────────────────────────────────────────
    {
      slug: "bowline",
      title: "8 · The bowline — the \"king of knots\"",
      section: "3 · Loops",
      body: `**What it is.** A fixed loop at the end of a rope that does not slip, does not jam, and unties easily even after heavy load — the reason it is called the king of knots. Verrill (1917) says the bowline "is a true sailor's knot and never slips, jams, or fails; is easily and quickly untied, and is useful in a hundred places around boats."

**Step by step.**
1. Decide how big the loop should be, and make a small overhand loop (a "cuckold's-neck") in the **standing part**, with the **end** coming up through it. Verrill: form the crossed loop with the end over the standing part.
2. The classic mnemonic: the **end** is "the rabbit." Bring the rabbit **up out of the hole** (up through the small loop).
3. Pass it **around the back of the standing part** ("around the tree").
4. Bring it **back down into the hole** (down through the small loop, alongside the part that came up).
5. Hold the loop size, and pull the standing part to draw it taut.

**When to use it.** Any time you need a reliable fixed loop: a mooring loop over a piling, a loop to clip into, throwing a loop around an object, the end of a rescue line (see safety note below).

**When NOT to use it.** In life-critical climbing/rescue use it can shake loose if the loop is not dressed and the tail is not secured — climbers back it up (e.g. with a stopper or a double/Yosemite finish) and get trained. It is also awkward to tie under heavy tension; set the loop before loading.

**Common mistakes.** Reversing the tuck so you get a slip knot; leaving too short a tail (leave several inches); not dressing the knot before loading. **Safety:** for climbing, rescue, or any life-load, this lesson is *educational* — get certified training and use rated systems; do not learn life-safety knots from text alone.

## Sources
- ${VERRILL}`,
    },
    {
      slug: "running-bowline",
      title: "9 · The running bowline",
      section: "3 · Loops",
      body: `**What it is.** A bowline whose loop is tied *around its own standing part*, so the loop becomes a noose that draws tight under load. Verrill (1917): "A Running Bow-line is merely a bow-line with the end passed through the loop, thus forming a slip knot." It is a reliable, easily-untied running noose.

**Step by step.**
1. Lead the **end** of the rope around the object (or simply lay the end across its own standing part).
2. Tie a **bowline (Lesson 8) around the standing part** — that is, form the small loop and complete the bowline exactly as before, but with the standing part running *through* the fixed loop you create.
3. The result is a large loop that slides down and cinches when the standing part is pulled.

**When to use it.** Catching and cinching a floating or hard-to-reach object; snugging a line down onto a piling or spar from a distance; any place you want a self-tightening loop you can still untie later.

**When NOT to use it.** Anywhere you need a *fixed-size* loop (use a plain bowline). Never as a lifting sling around a person or as a load choke where a slipping cinch would be dangerous — a running noose tightens without limit.

**Common mistakes.** Tying the underlying bowline wrong so the noose won't run; letting it cinch onto something you'll want to release under load (it can jam the object, not the knot).

## Sources
- ${VERRILL}`,
    },
    {
      slug: "figure-eight-loop",
      title: "10 · The figure-eight loop",
      section: "3 · Loops",
      body: `**What it is.** A fixed loop built from the figure-eight (Lesson 5) instead of the bowline. It is strong, easy to *inspect* (the "8" shape is obvious — you can see at a glance it's tied right), and it is the standard tie-in loop in climbing. It trades the bowline's easy-untying for security and inspectability.

**Step by step (the "figure-eight on a bight" — the common form).**
1. Take a **bight** (a doubled section) of rope.
2. With the doubled rope, tie a figure-eight exactly as in Lesson 5: make a loop, take the doubled end around behind the standing parts, and back down through the loop.
3. Dress it so the two strands lie neatly parallel all the way through the knot — no crossed strands. You are left with a fixed loop at the bight.

*(A "figure-eight follow-through," where you re-thread a single end back along a figure-eight, gives the same knot around a fixed point such as a harness.)*

**When to use it.** A strong, easily-checked fixed loop; the standard climbing tie-in; anywhere a partner should be able to verify your knot from across the room.

**When NOT to use it.** Where you'll need to untie it repeatedly after heavy loading — it can set hard (though it's still more workable than an overhand loop). Where a running noose is wanted (use a running bowline).

**Common mistakes.** Crossed strands inside the knot (dress it flat); too short a tail. **Safety:** as a life-safety climbing knot this is *educational only* — get hands-on instruction and use rated gear.

## Sources
- ${VERRILL}
- *Topic reference (copyrighted; not reproduced):* Pawson, D. (2012). *Knots: The complete visual guide.* DK.`,
    },

    // ── Section 4 ──────────────────────────────────────────────────────────
    {
      slug: "clove-hitch",
      title: "11 · The clove hitch",
      section: "4 · Hitches",
      body: `**What it is.** A fast, fundamental hitch for fastening a rope to a spar, post, or rail. Verrill (1917) calls it one of the "most valuable and important of knots" that "will hold fast on a smooth timber." His method: "pass the end of rope around the spar or timber, then over itself; over and around the spar, and pass the end under itself and between rope and spar."

**Step by step.**
1. Pass the **end** around the spar.
2. Bring it **across over its own standing part** and around the spar a **second** time.
3. Tuck the **end under that second wrap** (between the rope and the spar). You now have two turns with the end trapped beneath the diagonal.
4. Draw both ends tight.

**When to use it.** Quickly securing a line to a post or rail; starting and finishing lashings (Section 8); temporary tie-offs; the classic way a fender or a guy line is made fast.

**When NOT to use it.** As a permanent or unattended hold on a slick or tapering object — a clove hitch can *roll* and work loose if the load direction changes or the rope is slippery. For anything important, back it up with a half-hitch on the standing part, or use two half-hitches instead.

**Common mistakes.** Only one turn (that's not a clove hitch and won't hold); loading it sideways so it rolls; trusting it un-backed on a smooth or tapered spar.

## Sources
- ${VERRILL}`,
    },
    {
      slug: "two-half-hitches",
      title: "12 · Two half-hitches",
      section: "4 · Hitches",
      body: `**What it is.** A rope made fast to a post, ring, or spar by tying two successive half-hitches around its own standing part — a secure, general-purpose "attach a rope to a thing" hitch. Verrill (1917) describes passing "the end around the post, ring, or other object, then over and around the standing part between the post and itself, then under and around the standing part," and notes such hitches "will hold forever without loosening." Best practice adds a **round turn** first (round turn, *then* two half-hitches) so friction takes the load before the knot does.

**Step by step.**
1. Take a **round turn** — pass the end around the object and bring it back alongside the standing part (this is the friction-bearing wrap).
2. Pass the **end over and around the standing part**, then back through the loop you just formed — that is one half-hitch.
3. Repeat the *same* wrap in the *same* direction to make the **second** half-hitch snug against the first. (Two half-hitches in the same direction actually form a clove hitch *around the standing part* — that's what makes it grip.)
4. Draw tight; slide the hitches down against the round turn.

**When to use it.** Tying a line to a ring, rail, post, or mooring cleat; securing the end of a load line; any dependable "make it fast" hitch.

**When NOT to use it.** Where you need to *adjust* tension after tying (use a taut-line hitch instead); as a life-load without rated backup.

**Common mistakes.** Second hitch tied the opposite way (it won't lock — you get a loose slip instead of a gripping clove); skipping the round turn on a heavy or shock load (the friction wrap is what protects the knot).

## Sources
- ${VERRILL}`,
    },
    {
      slug: "timber-hitch",
      title: "13 · The timber hitch",
      section: "4 · Hitches",
      body: `**What it is.** A hitch for hauling or hoisting a log, spar, or bundle — it grips hard under load yet falls apart instantly when the load comes off. Verrill (1917): "It is easily made by passing the end of a rope around the spar or log, round the standing part of the rope and then twist it three or more times around, under and over itself," and he rates it "even better than the Clove hitch" for this job.

**Step by step.**
1. Pass the **end** around the spar or log.
2. Bring the **end around its own standing part** to form a loop.
3. **Twist (dog) the end back around itself three or more times**, tucking it under and over its own part inside the loop.
4. Pull the standing part; the turns bite down and grip the spar.

**When to use it.** Dragging or hoisting timber, poles, or cylindrical loads; the starting hitch for lashing a spar; anywhere you want a grip that releases the instant the load is removed. For lifting a long spar level, add a single half-hitch farther along toward the hauling end (a "killick hitch") to steer it.

**When NOT to use it.** As a hitch that must hold when the load *comes and goes* or reverses — it depends on continuous tension; slack it and it can spill. Not for a fixed permanent tie-off.

**Common mistakes.** Too few dog-turns (fewer than three) so it slips; expecting it to hold once the load is released; using it where the pull direction reverses.

## Sources
- ${VERRILL}`,
    },
    {
      slug: "taut-line-hitch",
      title: "14 · The taut-line hitch (adjustable)",
      section: "4 · Hitches",
      body: `**What it is.** An *adjustable* friction hitch: a loop whose size you can slide to tension or slacken, and which then grips and holds under load. It is the classic tent-guyline knot. This is a modern practical hitch (a rolling / Midshipman's-style friction hitch); it is not one of Verrill's named knots, so it's presented here as standard field practice, with a copyrighted visual guide listed only as *further reading*.

**Step by step.**
1. Pass the **end** around the anchor (stake, ring, tree) and bring it back alongside the standing part.
2. Working *toward* the anchor, take **two turns around the standing part**, both *inside* the loop (wrapping over the standing part and back through, twice).
3. Then take **one more turn around the standing part on the far side** (outside, below the first two), and snug all three turns together.
4. To adjust: grip the knot body and slide it along the standing part to set tension; under load the wraps bind and hold.

**When to use it.** Tent and tarp guy lines, clotheslines, tie-downs — anywhere you want to *dial in* and then hold tension without a hardware tensioner.

**When NOT to use it.** On very slick synthetic rope it can creep — add a wrap or use a mechanical tensioner. Not for shock loads or life-load use.

**Common mistakes.** Taking the extra turn on the wrong side so it won't grip; too few wraps on slippery rope (it slides); loading it before snugging the turns together.

## Sources
- ${VERRILL} *(for the general hitch terminology; the taut-line hitch itself is standard modern field practice, not from this source).*
- *Topic reference (copyrighted; not reproduced):* Pawson, D. (2012). *Knots: The complete visual guide.* DK.`,
    },

    // ── Section 5 ──────────────────────────────────────────────────────────
    {
      slug: "sheet-bend",
      title: "15 · The sheet bend (weaver's knot)",
      section: "5 · Bends (joining two ropes)",
      body: `**What it is.** The workhorse **bend** — the correct knot for joining two *separate* ropes end to end, including two ropes of **different thickness**. Verrill (1917) treats it under joining knots and calls the weaver's-knot form "the best knot known" for joining lines. (Modern rope work calls this the *sheet bend* or *becket bend*.)

**Step by step.**
1. In the **thicker** (or stiffer) rope, form a **bight** (a U-shape). Hold it in one hand.
2. Pass the **end of the thinner** rope **up through** that bight from below.
3. Take the thin end **around behind both legs** of the bight.
4. Then tuck the thin end **back under its own standing part** — over the near leg, under itself — without going back through the bight. Verrill's weaver's form: end A is looped back over end B, and B is slipped through the loop and drawn tight.
5. Draw all four parts snug. The two short ends should end up on the **same side** of the knot (if they're on opposite sides you've tied a weaker "left-hand" sheet bend — retie).

**When to use it.** Joining two ropes, especially unequal ones (where a square knot would fail); attaching a line to a fixed loop/becket; extending a rope.

**When NOT to use it.** As a *binding* knot (that's the square knot's job); under a load that goes slack and shakes — a plain sheet bend can work loose when unloaded, so for security use the double sheet bend (next lesson).

**Common mistakes.** Putting the two ends on opposite sides (the weak "left-handed" version); making the bight in the thin rope instead of the thick one; not seating it before loading.

## Sources
- ${VERRILL}`,
    },
    {
      slug: "double-sheet-bend",
      title: "16 · The double sheet bend",
      section: "5 · Bends (joining two ropes)",
      body: `**What it is.** A more secure sheet bend for slippery rope, ropes of very different sizes, or a join that will be shaken while unloaded — it simply adds a **second wrap**. It builds directly on Lesson 15.

**Step by step.**
1. Tie a sheet bend exactly as in Lesson 15, up to the point where the thin end has gone around behind the thick rope's bight.
2. Before the final tuck, take the thin end **around the bight a second time** (a second complete wrap around both legs).
3. Then tuck it **under its own standing part** as before, ends finishing on the same side.
4. Draw snug — you now have two turns gripping the bight instead of one.

**When to use it.** Joining ropes that differ a lot in diameter; slick synthetic rope where a single sheet bend might slip; any bend that will be repeatedly loaded and unloaded.

**When NOT to use it.** When a single sheet bend already holds securely in grippy, similar-sized rope and you want less bulk — the double is only needed for the harder cases above. Still not a life-load bend without rated backup.

**Common mistakes.** Making the extra turn in the wrong direction so the knot won't seat; ending with the tails on opposite sides; treating the extra bulk as optional on very unequal ropes (there it's the point).

## Sources
- ${VERRILL}`,
    },
    {
      slug: "fishermans-knot",
      title: "17 · The fisherman's knot",
      section: "5 · Bends (joining two ropes)",
      body: `**What it is.** A bend made of **two overhand knots**, each tied around the other rope's standing part, that slide together and jam into a compact, secure join — good for thin line, fishing line, and cord. Verrill (1917): it is "formed by two simple overhand knots slipped over each rope," and the two lines can even be "drawn apart by taking hold of the ends" to insert more line.

**Step by step.**
1. Lay the two rope ends alongside each other, pointing in opposite directions.
2. With the **end of rope A**, tie an **overhand knot around the standing part of rope B**.
3. With the **end of rope B**, tie an **overhand knot around the standing part of rope A**.
4. Pull the two standing parts apart — the two overhand knots slide together and jam back-to-back into one tidy knot.

**When to use it.** Joining thin cord, twine, or fishing line; a secure join in small-diameter rope where a sheet bend is fiddly; any bend you want to stay put in slick, thin line. (Doubling each overhand into a "double fisherman's" makes it more secure still — the standard join for climbing cord.)

**When NOT to use it.** In thick, stiff rope it sets very hard and is difficult to untie — use a sheet bend there. Not for life-load without the doubled version and proper training.

**Common mistakes.** Tying both overhands around the *same* rope (they must each grip the *other* standing part); leaving them un-slid so they don't seat together; expecting to untie it easily after heavy load in thick rope.

## Sources
- ${VERRILL}`,
    },

    // ── Section 6 ──────────────────────────────────────────────────────────
    {
      slug: "whipping-a-rope-end",
      title: "18 · Whipping a rope end",
      section: "6 · Whippings & seizings",
      body: `**What it is.** Binding the end of a rope with small twine so it cannot fray and unlay — the traditional, non-melting way to finish an end. Verrill (1917) gives the "common whipping": "Take a piece of twine or string and lay it on the rope an inch or two from the end, pass the twine several times around the rope, keeping the ends of the twine under the first few turns to hold it in place; then make a large loop with the free end of twine; bring it back to the rope and continue winding for three or four turns around both rope and end of twine; and then finish by drawing the loop tight."

**Step by step (Verrill's common whipping).**
1. Lay a length of twine along the rope, an inch or two from the end, so a tail points toward the rope's end.
2. Wrap the twine tightly **around both the rope and that tail** several turns, trapping the tail under the wraps.
3. Now lay a **loop (bight) of the free twine** back along the rope pointing toward the end, and wrap **over the loop** for three or four more turns.
4. Pass the working end of the twine **through that loop**, then pull the *other* buried tail so the loop — and the working end with it — is dragged **back under the wraps**. Trim both tails. The whipping is locked with no visible knot.

**When to use it.** Finishing the cut end of any laid or braided rope; whenever you want a professional, heat-free end that won't fray. (On synthetic rope a whipping outlasts a melted end and won't crack off.)

**When NOT to use it.** Where a *permanent* factory finish is fine and looks aren't important — a melted or taped end may do for scrap line. But for any rope you respect, whip it.

**Common mistakes.** Wrapping too loosely (the whipping slides off); too short a whipping (make it roughly as long as the rope is wide, or more); not trapping the first tail so the start unravels.

## Sources
- ${VERRILL}`,
    },
    {
      slug: "seizings",
      title: "19 · Seizings — binding two ropes together",
      section: "6 · Whippings & seizings",
      body: `**What it is.** A seizing binds **two ropes (or two parts of one rope) side by side** with turns of small stuff (twine or marline), so they act as one — for example to make a permanent eye, or to hold two standing parts together. Where a whipping finishes *one* end, a seizing lashes *two* parts together. Verrill (1917) covers seizings alongside whippings and lashings as the way to bind parts of rope securely.

**Step by step (a simple flat seizing).**
1. Lay the two ropes (or the two legs of a loop) together, parallel.
2. Make a small eye in the seizing twine and pass the twine around both ropes, reeving the end through the eye to start it snug.
3. Take a series of **firm round turns around both ropes**, laying each turn neatly beside the last (not overlapping), for the length of the seizing.
4. Then take **two or three "frapping" turns** — turns passed *between* the two ropes and *around the round turns themselves* — to squeeze the seizing tight.
5. Finish with a small knot or tuck under the last turns so it can't unwind.

**When to use it.** Making a permanent eye or loop; holding two ropes together so they share a load; binding the throat of a hook or the neck of a splice; any semi-permanent "make these two parts one."

**When NOT to use it.** As a load-*bearing* join between two ropes carrying full tension in line — that's a *bend's* job (Section 5). A seizing binds parts that lie *alongside* each other, it does not join ropes end-to-end under pull.

**Common mistakes.** Turns too loose or overlapping (the seizing slips); skipping the frapping turns (they're what make it grip); trusting a seizing to do a bend's job.

## Sources
- ${VERRILL}`,
    },

    // ── Section 7 ──────────────────────────────────────────────────────────
    {
      slug: "eye-splice",
      title: "20 · The eye splice",
      section: "7 · Splices",
      body: `**What it is.** A permanent **loop (eye)** worked into the end of a laid rope by unlaying the strands and tucking them back into the standing part — far stronger and neater than a knotted loop, and the traditional way to put a fixed eye in three-strand rope. Verrill (1917): "the end of the rope is unlaid and then bent around and spliced into its own strands of the standing part," made "in the same manner as the short splice."

**Step by step.**
1. **Unlay** the three strands of the rope end a short distance and whip or tape the very tips so they don't fray.
2. Bend the end around to form the eye you want, laying the three loose strands across the standing part where the splice will be.
3. Open the lay of the standing part with a **marline-spike** (a pointed tool). Tuck the **middle** loose strand under one standing strand, *against the lay*.
4. Tuck the **left** strand under the next standing strand, and the **right** strand under the remaining one — each strand goes under a different standing strand, over one and under the next.
5. Turn the work and repeat: each loose strand goes **over the next standing strand and under the following one**, for at least **three full rounds** of tucks (more in slippery synthetic rope).
6. Optionally **taper** — halve each strand after the first tucks for a smooth finish (Verrill's neatness tip) — then trim the ends.

**When to use it.** A permanent, high-strength eye: mooring lines, hawsers, slings, a fixed loop that will be loaded hard for a long time.

**When NOT to use it.** On braided (kernmantle) rope, which won't take a traditional laid splice; when you need a *temporary* loop (tie a bowline). **Safety:** a splice for lifting or life-load must be done to a rated standard and inspected — this lesson is *educational*, not a rigging certification.

**Common mistakes.** Fewer than three rounds of tucks (it can pull out); tucking *with* the lay instead of *against* it; not tapering, so the splice is lumpy and snags.

## Sources
- ${VERRILL}`,
    },
    {
      slug: "short-splice",
      title: "21 · The short splice",
      section: "7 · Splices",
      body: `**What it is.** A permanent join of **two ropes** made by unlaying both ends and tucking the strands of each into the other — stronger than any bend, but it **thickens** the rope at the join (so it won't run through a block). Verrill (1917) describes unlaying the ends, marrying (interlacing) the two sets of strands, then tucking each strand over-one-under-one into the opposite rope, tapering by "cut[ting] away about half the yarns from each" for a neat finish.

**Step by step.**
1. **Unlay** a few inches of strands on **both** rope ends; whip the tips.
2. **"Marry"** the two ropes: push the ends together so the strands of one rope interlace between the strands of the other, alternating, and the two ropes butt together.
3. Temporarily seize (or hold) one rope's strands out of the way. Take the **three strands of the other rope** and tuck each **over one standing strand and under the next**, against the lay, working away from the join. Do this for two or three rounds of tucks.
4. **Turn the work around**, unseize the other set, and tuck **its** three strands into the first rope the same way, the same number of rounds.
5. **Taper**: halve the strands and tuck once or twice more for a smooth shoulder; trim the ends close.

**When to use it.** A permanent, maximum-strength join where the extra thickness at the splice doesn't matter — standing rigging, dock lines, a rope that will never pass through a sheave.

**When NOT to use it.** Where the rope must **run through a block, ring, or fairlead** (the bulge jams) — use a long splice or a bend there; on braided rope; for a temporary join (use a bend).

**Common mistakes.** Too few tucks (pulls apart under load); tucking with the lay; not tapering (a lumpy splice that snags and jams).

## Sources
- ${VERRILL}`,
    },
    {
      slug: "back-splice",
      title: "22 · The back splice (crown finish)",
      section: "7 · Splices",
      body: `**What it is.** A way to permanently finish a rope's **end** by unlaying the strands, tying a **crown knot**, and then tucking the strands back down into the standing part — so the end can never fray. It makes a slightly thickened, hard-wearing end without any twine. Verrill (1917) describes the crown finish: "leave the projecting ends long and then by bringing them down tuck under the strands of the standing part," and then "halve the strands and tuck again, as in making a short splice."

**Step by step.**
1. **Unlay** the three strands a few inches and whip the tips.
2. Tie a **crown knot**: hold the three strands up, and lay each strand **over its neighbor in turn** (strand 1 over 2, 2 over 3, and 3 down through the bight of 1), forming a tidy crown that points the three ends back **down** the standing part.
3. Now **tuck each strand down into the standing part**, over one standing strand and under the next, against the lay — exactly the short-splice tuck — for **three rounds**.
4. **Taper** (halve the strands, tuck once more) and trim for a smooth, tapered end.

**When to use it.** A permanent, twine-free, hard-wearing rope end — a hand-line, a lanyard, a rope's-end that gets handled a lot (the crown gives a nice "knob" to grip).

**When NOT to use it.** Where the thickened end must pass through a hole, block, or grommet (it won't fit) — whip the end flat instead; on braided rope.

**Common mistakes.** A loose or wrong crown (the whole thing unravels) — make sure each strand passes *over* the next and down through the first; too few tucks; skipping the taper so the end is a snag-prone lump.

## Sources
- ${VERRILL}`,
    },

    // ── Section 8 ──────────────────────────────────────────────────────────
    {
      slug: "lashings",
      title: "23 · Lashings — binding spars together",
      section: "8 · Practical applications",
      body: `**What it is.** A lashing binds two poles or spars together with many turns of rope so they hold as a rigid joint — the basis of shelters, frames, gates, rafts, and scaffolding. Verrill (1917) treats lashings alongside seizings and splices as core "how you actually hold things together with rope" skills.

**Step by step (a square lashing, for two spars crossing at right angles).**
1. Start with a **clove hitch (Lesson 11)** on one spar, right next to the crossing point, and tuck the short end under the coming turns.
2. Take the rope **around both spars in a square pattern** — over one spar, under the other, around and around — pulling each of about **three to five wrapping turns** tight and laying them neatly side by side.
3. Take **two or three "frapping" turns** *between* the spars, around the wrapping turns themselves, and heave them tight — this is what clamps the joint solid.
4. Finish with a **clove hitch on the opposite spar**. Test the joint: it should not wobble.

*(Other forms: a **diagonal lashing** pulls together spars that spring apart; a **shear lashing** binds two parallel spars that are then opened into an A-frame.)*

**When to use it.** Building shelters and camp gadgets, frames, rafts, temporary structures, splinting a broken spar.

**When NOT to use it.** As engineered scaffolding or anything that must bear people's weight structurally — that's rated, certified rigging/scaffolding work, not a camp lashing. **Safety flag:** load-bearing structures are *educational* here, not a substitute for proper training.

**Common mistakes.** Too few or loose wrapping turns; skipping the frapping turns (the joint stays floppy); starting/finishing without a clove hitch so it unwinds.

## Sources
- ${VERRILL}`,
    },
    {
      slug: "securing-loads",
      title: "24 · Securing loads",
      section: "8 · Practical applications",
      body: `**What it is.** Using rope to hold a load so it cannot shift, slide, or fall — on a vehicle, a boat, a hand truck, a cargo net. The core idea is *friction plus a lockable, releasable tie*.

**Step by step (a practical tie-down, using knots from this course).**
1. Anchor one end with a **round turn and two half-hitches (Lesson 12)** to a fixed point — the round turn takes the strain, the half-hitches lock it.
2. Run the rope over/through the load to the opposite anchor.
3. Tension it with an **adjustable taut-line hitch (Lesson 14)**, or a trucker's-hitch-style purchase if you need serious mechanical advantage, and lock it off.
4. Add **guarding half-hitches** where a line crosses an edge so it can't creep, and finish so the end can't flog loose.

**When to use it.** Any time a load rides — securing gear on a roof or trailer, lashing cargo in a boat, tying down equipment on a broadcast cart or hand truck.

**When NOT to use it.** As the *only* restraint for a heavy or hazardous load where regulations require rated straps/chains (e.g. commercial vehicle cargo) — rope tie-downs are for light, appropriate loads. **Safety flag:** heavy or public-road loads need rated hardware and, often, certification.

**Common mistakes.** No round turn, so the anchor knot takes shock and jams or fails; a non-adjustable knot where you needed to re-tension; an unprotected line over a sharp edge (it chafes through); a tail left to flog free.

## Sources
- ${VERRILL}`,
    },
    {
      slug: "rescue-and-safety-uses",
      title: "25 · Basic rescue uses (safety-flagged)",
      section: "8 · Practical applications",
      body: `**What it is — and a hard safety flag first.** Rope is used in rescue: a **throwing line** to reach someone in the water, a **fixed bowline loop** to hold onto, hauling systems to move a load or person. **This lesson is educational awareness only. Real rescue and any life-load rope work require certified training, rated gear, and supervision. Do not perform a rope rescue on the strength of a text lesson.** With that stated:

**Awareness-level points.**
- A **throw bag / throwing line** reaches a person in moving water without you entering it — you throw, they grab, you belay from a braced, safe position. Never tie *yourself* rigidly into a line in current.
- A **bowline (Lesson 8)** makes a non-slipping loop that won't tighten around a person — which is exactly why a fixed loop (bowline / figure-eight loop) is preferred over a running noose for anything near a body.
- A **running bowline (Lesson 9) must never** be used around a person — it cinches without limit.
- Hauling a load uses **mechanical advantage** (pulleys/purchases); doing it safely is a trained skill with rated anchors, not something to improvise under load.

**When to use it.** As background so you understand *why* certain knots are chosen near people, and so you know to defer to trained rescuers and rated systems.

**When NOT to use it.** As instructions to *carry out* a rescue. Get trained (swiftwater, rope rescue, climbing) before any real life-load rope work.

**Common mistakes.** Using a cinching noose near a person; tying into a fixed line in current; improvising a haul system without training; treating any of this as a substitute for certification.

## Sources
- ${VERRILL}
- *Further reading (copyrighted; not reproduced):* Pawson, D. (2012). *Knots: The complete visual guide.* DK.`,
    },
    {
      slug: "broadcast-stage-rigging-basics",
      title: "26 · Broadcast & stage rigging basics (safety-flagged)",
      section: "8 · Practical applications",
      body: `**What it is.** How the rope skills in this course show up in **broadcast, event, and stage work** — the "utility technician" world this course pairs with (see the Sports/Media Broadcasting course). **Safety flag: overhead rigging that can fall on people is life-safety work governed by rated hardware, load limits, and certification (e.g. ETCP-style standards). This lesson is educational orientation, not a rigging qualification.**

**Where rope work fits, day to day.**
- **Dressing and securing cable.** A utility tech runs camera and audio cable, then secures and tidies runs so nobody trips and nothing pulls loose. Clean **hitches** (clove hitch, two half-hitches) and neat **coiling** (Lesson 3) are the daily craft — including the broadcast habit of coiling cable "over-under" so it lays flat and pays out clean.
- **Securing gear on carts and stands.** Tying down equipment with **round turn + two half-hitches** and **adjustable taut-line** tension (Lessons 12, 14, 24) keeps gear safe as it's moved.
- **Temporary tie-offs and guys.** Steadying a stand or a light with a guy line uses the same hitches — but **anything overhead or over people is rated rigging**, not a rope-and-knot improvisation.
- **Knowing your limits.** The single most important professional skill here is knowing which tasks are "utility rope work" (fine to do) versus "overhead rigging / flying loads" (defer to certified riggers, rated slings, shackles, and load calcs).

**When to use these skills.** Cable management, gear tie-down, ground-level securing, coiling — the utility-tech craft.

**When NOT to.** Suspending anything over people, flying loads, truss and motor work — certified riggers and rated hardware only.

**Common mistakes.** Treating overhead rigging as ordinary rope work; using knots where rated slings/shackles are required; sloppy cable coils that tangle or trip; no strain relief so a plug or run pulls loose under a boot.

## Sources
- ${VERRILL}
- *Further reading (copyrighted; not reproduced):* Pawson, D. (2012). *Knots: The complete visual guide.* DK.`,
    },

    // ── Exercise ───────────────────────────────────────────────────────────
    {
      slug: "knots-exercise",
      title: "27 · Practice: name the knot",
      section: "Practice & assessment",
      body: "Fill-in practice on the core vocabulary and knot choices. Type the term the description points to. Answers are checked forgivingly (case and small spelling differences count as close).",
      exercise: {
        instructions:
          "Fill in the missing term. One or two words each. These reinforce the vocabulary and the \"which knot for which job\" judgment from the course.",
        items: [
          {
            prompt:
              "The longest, load-bearing part of a rope — the part you do NOT move while tying — is the ________ ________.",
            answer: "standing part",
            accept: ["the standing part"],
            explanation:
              "Verrill (1917) defines the standing part as \"the principal portion or longest part of the rope.\" (Lesson 2)",
          },
          {
            prompt:
              "The go-to STOPPER knot that will not jam and unties easily after loading is the ________-________ knot.",
            answer: "figure-eight",
            accept: ["figure eight", "figure of eight", "figure-8"],
            explanation:
              "The figure-eight is the standard non-jamming stopper; the overhand jams. (Lesson 5)",
          },
          {
            prompt:
              "The square knot tied WRONG — which slips or jams and should never be used on purpose — is the ________ knot.",
            answer: "granny",
            accept: ["granny knot"],
            explanation:
              "Verrill (1917) calls the granny \"a most useless, bothersome, and deceptive makeshift,\" made by breaking the \"Left over, Right over\" rule. (Lesson 7)",
          },
          {
            prompt:
              "The reliable fixed loop that \"never slips, jams, or fails\" and unties easily — the \"king of knots\" — is the ________.",
            answer: "bowline",
            accept: ["the bowline", "bow-line"],
            explanation:
              "Verrill (1917): the bowline \"never slips, jams, or fails; is easily and quickly untied.\" (Lesson 8)",
          },
          {
            prompt:
              "To JOIN two separate ropes of DIFFERENT thickness, do not use a square knot — use the ________ ________ (also called the weaver's knot or becket bend).",
            answer: "sheet bend",
            accept: ["sheet-bend", "becket bend", "weaver's knot", "weavers knot"],
            explanation:
              "The sheet bend joins two ropes, including unequal ones, where a square knot would slip. (Lesson 15)",
          },
          {
            prompt:
              "Binding a rope's cut END with small twine so it can't fray is called ________ the rope.",
            answer: "whipping",
            accept: ["a whipping", "to whip", "whip"],
            explanation:
              "Verrill (1917) gives the \"common whipping\": wrap twine over the rope and a buried loop, then draw it under. (Lesson 18)",
          },
        ],
      },
    },

    // ── Quiz ───────────────────────────────────────────────────────────────
    {
      slug: "knots-final-quiz",
      title: "28 · Final quiz",
      section: "Practice & assessment",
      body: "A short graded quiz covering the whole course. Passing score is 70%. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "In rope terminology, what is the \"bight\"?",
            options: [
              "The longest, load-bearing part of the rope",
              "The curved or bent part of the rope while working — an open U that does not cross itself",
              "The short working end used to form the knot",
              "The direction in which the strands are twisted",
            ],
            correctIndex: 1,
            explanation:
              "Verrill (1917) defines the bight as \"the part curved or bent while working or handling.\" A bight is an open U; once it crosses itself it becomes a loop.",
            sourceLessonSlug: "parts-of-a-rope",
          },
          {
            prompt: "Why choose a figure-eight over an overhand as a stopper knot?",
            options: [
              "The overhand is stronger but slower to tie",
              "The figure-eight jams hard so it stays put permanently",
              "The figure-eight is bulkier but does NOT jam, so it unties easily even after loading",
              "There is no practical difference between them",
            ],
            correctIndex: 2,
            explanation:
              "The overhand jams under load and can be very hard to untie; the figure-eight is the standard stopper precisely because it does not jam.",
            sourceLessonSlug: "figure-eight-stopper",
          },
          {
            prompt: "What is the memory formula that keeps you from tying a granny knot?",
            options: [
              "\"Right over, Right over\"",
              "\"Over, under, around, through\"",
              "\"Left over, Right over\"",
              "\"Rabbit out of the hole and around the tree\"",
            ],
            correctIndex: 2,
            explanation:
              "Verrill (1917) gives the formula \"Left over, Right over\" — learn it \"and you will never make a mistake and form the despised 'Granny.'\"",
            sourceLessonSlug: "square-reef-knot",
          },
          {
            prompt:
              "You need to join two ropes of clearly different thickness under load. Which knot is correct?",
            options: [
              "A square (reef) knot",
              "A sheet bend (weaver's knot / becket bend)",
              "A clove hitch",
              "A granny knot",
            ],
            correctIndex: 1,
            explanation:
              "A square knot is a binding knot and slips when used to join two ropes, especially unequal ones. The sheet bend is the correct bend for joining ropes, including different sizes.",
            sourceLessonSlug: "sheet-bend",
          },
          {
            prompt: "Which statement about the bowline is TRUE?",
            options: [
              "It is a self-tightening noose that cinches down under load",
              "It is a fixed loop that does not slip or jam and unties easily — the \"king of knots\"",
              "It is used only to finish a frayed rope end",
              "It is the weakest of all the loops and should be avoided",
            ],
            correctIndex: 1,
            explanation:
              "Verrill (1917): the bowline \"never slips, jams, or fails; is easily and quickly untied.\" The running bowline — a different knot — is the self-tightening noose.",
            sourceLessonSlug: "bowline",
          },
          {
            prompt:
              "Best practice for making a rope fast to a ring or post with two half-hitches is to first take a ________.",
            options: [
              "granny knot for backup",
              "round turn, so friction takes the load before the knot does",
              "second bowline",
              "short splice",
            ],
            correctIndex: 1,
            explanation:
              "A round turn (\"round turn and two half-hitches\") lets the wrap's friction carry the strain, protecting the hitches from shock. The two half-hitches then lock it.",
            sourceLessonSlug: "two-half-hitches",
          },
          {
            prompt:
              "The timber hitch is ideal for hauling a log because it grips under load but ________.",
            options: [
              "holds equally well when the load is removed or reversed",
              "can never be untied once tied",
              "falls apart easily the instant the load comes off",
              "is only for joining two ropes together",
            ],
            correctIndex: 2,
            explanation:
              "Verrill (1917) rates the timber hitch \"even better than the Clove hitch\" for spars; it depends on continuous tension and spills the moment the load is released — handy for hauling.",
            sourceLessonSlug: "timber-hitch",
          },
          {
            prompt:
              "You need to put a permanent, high-strength fixed LOOP in the end of a three-strand laid rope. Which technique?",
            options: [
              "An eye splice — unlay the strands and tuck them back into the standing part",
              "A short splice",
              "A common whipping",
              "A taut-line hitch",
            ],
            correctIndex: 0,
            explanation:
              "The eye splice, made \"in the same manner as the short splice\" (Verrill, 1917), forms a permanent eye far stronger than a knotted loop. A short splice joins two ropes; a whipping finishes an end.",
            sourceLessonSlug: "eye-splice",
          },
          {
            prompt:
              "Which is the correct SAFETY framing for the rescue and rigging lessons in this course?",
            options: [
              "They fully qualify you to perform rope rescue and overhead rigging",
              "They are educational awareness only — real rescue and life-load/overhead rigging require certified training and rated gear",
              "They replace the need for rated slings and shackles in stage work",
              "They show that a running bowline is the preferred knot to put around a person",
            ],
            correctIndex: 1,
            explanation:
              "The course flags all load-bearing, rescue, and overhead-rigging content as educational only — not a substitute for certified training and rated equipment. A running bowline must never go around a person.",
            sourceLessonSlug: "rescue-and-safety-uses",
          },
          {
            prompt:
              "In broadcast \"utility technician\" work, which of these is ordinary utility rope work — versus a job for certified riggers?",
            options: [
              "Flying a lighting truss over the audience",
              "Suspending a load on a motor above people",
              "Dressing and securing cable runs and tying gear down on a cart",
              "Rigging overhead speaker arrays",
            ],
            correctIndex: 2,
            explanation:
              "Cable dressing, coiling, and ground-level gear tie-down are the utility tech's daily craft. Anything overhead or over people is rated rigging for certified riggers.",
            sourceLessonSlug: "broadcast-stage-rigging-basics",
          },
        ],
      },
    },
  ],
};
