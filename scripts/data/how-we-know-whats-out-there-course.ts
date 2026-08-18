import type { AuthoredCourse } from "./authored-course";

// How We Know What's Out There. Course 2 of the Science & Math track (SCI-02).
//
// Outline: plans/future-courses/sciences/outlines/02-how-we-know-whats-out-there.md
//
// WHY THIS COURSE EXISTS, and why it is not a survey of the solar system: BAM's niece wants to
// study astrophysics and he wants to be able to talk to her about it. The thing a physics student
// rarely gets taught is WHY ANYONE BELIEVES THE NUMBERS, and that is the half this catalog is
// already built to teach. Every lesson is claim, evidence, and what the evidence does not support,
// which is the same method as the history courses.
//
// FOUR RULES THIS FILE FOLLOWS AND THE NEXT AUTHOR SHOULD NOT BREAK:
//
// 1. NO EQUATIONS. This is Wave 1, the app has no math rendering, and the course is designed so
//    that it never needs any. The maths version is a separate later course; do not merge them.
// 2. THE BIOGRAPHY LESSONS ARE THE RISK, NOT THE PHYSICS. Popular science history is where the
//    mangled anecdotes live. The She Did the Work audit found 14 factual errors in a single social
//    calendar; this material is worse, not better. Five checks are registered in
//    src/lib/research-checks.ts and the lessons hedge IN THE TEXT until they are answered.
// 3. WHERE A STORY IS CONTESTED, SAY SO IN THE LESSON. This is a course about evidence. Modelling
//    "here is what the record supports and here is what got added later" is the subject being
//    taught, not a disclaimer bolted onto it.
// 4. NO FAKE PRECISION. A number gets its uncertainty and its date, or it does not appear. Lesson
//    12 is about two measurements that disagree, so the course cannot be sloppy about this and
//    still make sense.

export const HOW_WE_KNOW_WHATS_OUT_THERE_COURSE: AuthoredCourse = {
  title: "How We Know What's Out There",
  description:
    "Astronomy taught as evidence rather than as facts to memorize. Start where navigation ends, with finding yourself by the sky, then climb the distance ladder one rung at a time: parallax, spectra, variable stars, exploding stars, redshift. Finish able to take any number in a popular astronomy article and trace it back to the thing somebody actually measured. No equations.",
  lessons: [
    // ── Part 1 ─────────────────────────────────────────────────────────────────────────────────
    {
      slug: "finding-yourself-by-the-sky",
      title: "1 · Finding yourself by the sky",
      section: "Part 1 · The sky as an instrument",
      body: `Long before anyone asked what stars *are*, people used them to answer a more urgent question: where am I?

**Latitude is nearly free.** In the northern hemisphere, measure the angle between the horizon and Polaris and you have your latitude, near enough. Polaris sits close to the point the sky appears to turn around, so its height above the horizon is roughly how far north you are. A navigator with a sextant and a clear night knows their latitude within a few miles.

**Longitude was brutal.** East and west have no equivalent fixed marker, because the sky turns. Knowing your longitude means knowing what time it is *somewhere else* at the moment you take your reading, and then comparing. That is a clock problem, not a telescope problem, and it took a working marine chronometer to solve it.

## What that means about astronomy

Notice what a navigator actually needs. Not a theory of stars. They need a **table**: where each body will be, at what time, on what date, for years into the future.

Producing that table is astronomical labor. Somebody observes, somebody calculates, somebody publishes, and a ship's captain on the other side of an ocean stakes lives on the arithmetic. The almanac is the oldest working relationship between astronomy and everybody else, and it is a useful thing to hold onto: **for most of history, the reason to study the sky carefully was that people needed to get somewhere.**

:::reveal A navigator measures Polaris at 40 degrees above the horizon. What do they now know, and what do they still not know? ||| They know they are at roughly 40 degrees north latitude. They know nothing at all about their longitude, which requires comparing their local time against the time at a reference meridian, and therefore requires a clock that kept that reference time accurately across the whole voyage.

## Where this course goes

The rest of the course asks the harder question the navigator never needed answered: not *where am I relative to that star*, but *what is that star, and how far away, and how could anyone possibly know?*

The honest answer runs through a chain of inference, each link resting on the one below it. That chain is the subject.

## Sources

Royal Museums Greenwich. (n.d.). *The longitude problem*. https://www.rmg.co.uk/stories/topics/longitude-problem

U.S. Naval Observatory. (n.d.). *The Astronomical Almanac*. https://aa.usno.navy.mil/publications/asa`,
    },
    {
      slug: "banneker-and-the-almanac",
      title: "2 · Benjamin Banneker and the almanac",
      section: "Part 1 · The sky as an instrument",
      recallContent: [
        {
          prompt: "Why was longitude so much harder to determine at sea than latitude?",
          answer: "Because there is no fixed marker for east and west. Longitude requires comparing your local time to the time at a reference meridian, which is a clock problem rather than a telescope problem.",
        },
      ],
      body: `Benjamin Banneker (1731 to 1806) was a free Black man in Maryland who taught himself astronomy and mathematics, calculated the ephemerides for a series of almanacs published in the 1790s, and worked on the survey of the boundaries of the federal district that became Washington, D.C., as part of the team under Andrew Ellicott.

Any one of those is remarkable. Together, in that place, in that decade, they are extraordinary.

## What an almanac actually required

Calculating an almanac is not gathering folklore. It means predicting, in advance and for a whole year, the positions of the sun, moon and planets, the times of sunrise and sunset, the phases of the moon, and eclipses. It is sustained, unforgiving arithmetic, done by hand, where an error propagates through every entry that follows and a reader will notice when the sky disagrees with the page.

Banneker did that work and it was published. That is the fact, and it is checkable.

## He also wrote to Thomas Jefferson

In 1791 Banneker sent Jefferson, then Secretary of State, a manuscript copy of his almanac calculations along with a letter challenging him directly on slavery and on the contradiction between the words Jefferson had written and the people Jefferson held. Jefferson replied. Both letters survive and are worth reading in full rather than in summary.

The almanac was the credential. The letter is what he spent it on.

## A story to be careful with

You will encounter an account in which Banneker reconstructed the entire plan of Washington from memory after Pierre L'Enfant departed and took the drawings with him.

**Treat that story as unestablished.** It is widely repeated, and historians have questioned whether it holds up. This course is about evidence, so it will not repeat a claim it cannot support, and it does not need to: a self-taught man producing publishable ephemerides in 1792 while writing to the Secretary of State about the immorality of slavery does not require an embellishment.

That is worth sitting with as a method. **When an already-remarkable life acquires an extra story that is better than the documented ones, the extra story is the one to check first.** Admiration produces myth as reliably as hostility produces slander.

:::reveal Why does this course refuse to repeat the "rebuilt the plan from memory" story, even though it is flattering? ||| Because a course about how we know things cannot assert what it cannot support, and a flattering claim is not exempt from evidence. Repeating it would also be unnecessary: the documented achievements are extraordinary on their own, and hanging his reputation on a contested anecdote makes it easier to attack.

## Sources

Library of Congress. (n.d.). *Benjamin Banneker's letter to Thomas Jefferson, August 19, 1791*. https://www.loc.gov/

Maryland Center for History and Culture. (n.d.). *Benjamin Banneker collection*. https://www.mdhistory.org/`,
    },
    {
      slug: "all-you-get-is-an-angle-and-a-brightness",
      title: "3 · All you get is an angle and a brightness",
      section: "Part 1 · The sky as an instrument",
      recallContent: [
        {
          prompt: "What did calculating an almanac actually require Banneker to do?",
          answer: "Predict a full year of positions for the sun, moon and planets by hand, including eclipses and sunrise times, where one arithmetic error propagates through everything after it.",
        },
      ],
      body: `Here is the constraint that shapes the entire science, and once you see it the rest of the course makes sense.

You cannot go there. You cannot bring it back. You cannot run the experiment again with one thing changed. For almost everything in the universe, you have exactly three kinds of measurement:

- **Where it appears to be**, an angle on the sky.
- **How bright it appears**, and in which colors.
- **How those change** over time.

That is the whole input. Every other number you have ever read about a star, its distance, its mass, its temperature, its composition, its age, is **inferred** from those, through a chain of reasoning that can be examined and can be wrong.

## Why this is not a weakness

Astronomers built an extraordinarily reliable picture of the universe from angles and brightnesses, and they did it by being unusually explicit about the chain. When a claim depends on four assumptions, the field tends to say so, and to argue in public about which assumption is shakiest.

It also means the honest question about any astronomical number is never "is it right?" It is:

> **Which link in the chain is weakest, and what would change if that link moved?**

## A distinction worth keeping

**Apparent brightness** is how bright something looks from here. **Intrinsic brightness** is how much light it actually emits. A dim-looking star might be faint and near, or blazing and far.

Those two differ by exactly one thing, distance, which is precisely the quantity you cannot measure directly. Almost every rung of the ladder in Part 2 is a different trick for breaking that deadlock: find some way to know a thing's intrinsic brightness independently, compare it to how bright it looks, and the difference gives you the distance.

Hold that sentence. It is the whole plot.

:::reveal Two stars look equally bright from Earth. What are the possible relationships between them, and what single extra piece of information would settle it? ||| They could be identical twins at the same distance, or one could be intrinsically far brighter and much further away, or intrinsically fainter and much closer. Knowing either star's true intrinsic brightness, by some independent means, settles it, because comparing intrinsic to apparent brightness yields the distance.

## Sources

European Space Agency. (n.d.). *Gaia: Measuring the positions and distances of stars*. https://www.esa.int/Science_Exploration/Space_Science/Gaia

National Institute of Standards and Technology. (n.d.). *Measurement uncertainty*. https://www.nist.gov/`,
    },
    // ── Part 2 ─────────────────────────────────────────────────────────────────────────────────
    {
      slug: "rung-one-parallax",
      title: "4 · Rung one: parallax, the only distance we measure directly",
      section: "Part 2 · The ladder",
      recallContent: [
        {
          prompt: "Astronomy gets three kinds of raw measurement. What are they?",
          answer: "An angle on the sky, an apparent brightness including its colors, and how those change over time. Everything else is inferred.",
        },
      ],
      body: `Hold up a finger and look at it with one eye, then the other. It jumps against the background. That jump is parallax, and its size depends on how far away the finger is.

Do the same with a star: observe it, wait six months while the Earth travels to the opposite side of its orbit, observe again. A nearby star shifts slightly against the more distant ones, and from that shift you get the distance. **This is the only rung of the ladder that is close to a direct measurement**, and everything above it is calibrated on it.

## Why it took so long

The idea is ancient. The measurement was not made until 1838, when Friedrich Bessel published a parallax for the star 61 Cygni.

The delay is the interesting part, and it was not a failure of imagination. **The angles are minuscule.** Even for nearby stars the shift is well under one arcsecond, which is under a 3600th of a degree. Nobody had instruments that could measure it.

That absence had consequences. For centuries the failure to detect any stellar parallax was used as an argument against the Earth moving at all: if we really orbited the sun, the stars ought to shift, and they visibly did not. The counter-argument, that the stars must simply be enormously far away, turned out to be exactly right, and had no evidence behind it at the time.

**A prediction that fails to appear is evidence. It is just not always evidence of what it seems to be.** It can mean the theory is wrong, or that your instrument is not good enough yet. Distinguishing those two is one of the hardest recurring judgments in science, and there is no formula for it.

## How far it reaches

Parallax runs out. The further away a star, the smaller the shift, until it disappears into your measurement error. Ground-based work reached usefully to a modest distance; space-based astrometry, above the atmosphere, extended it dramatically, and the Gaia mission has measured parallaxes for an enormous number of stars.

Even so, parallax alone does not reach across our own galaxy, let alone to another. Hence the ladder.

:::reveal For two centuries, no one could detect stellar parallax, and some took this as evidence the Earth does not move. What was the alternative explanation, and why was it hard to accept? ||| That the stars are so far away the shift is too small to see. It was hard to accept because it required the universe to be vastly larger than anyone was prepared to believe, and because at the time there was no independent evidence for it. It was correct.

## Sources

European Space Agency. (n.d.). *Gaia mission overview and data releases*. https://www.cosmos.esa.int/gaia

NASA. (n.d.). *Parallax and the cosmic distance ladder*. https://science.nasa.gov/`,
    },
    {
      slug: "light-itself",
      title: "5 · Light itself",
      section: "Part 2 · The ladder",
      recallContent: [
        {
          prompt: "Why is parallax the foundation of the whole distance ladder?",
          answer: "Because it is the only rung close to a direct geometric measurement. Every rung above it is calibrated against it, so an error low down propagates all the way up.",
        },
      ],
      body: `Spread starlight out into its colors and something unexpected appears: the smooth band of color is interrupted by sharp dark lines, always in the same places for the same material.

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786416008/witus/courses/science-and-math/how-we-know-whats-out-there/solar-spectrum-absorption-lines.jpg ||| The visible spectrum of the Sun, cut into horizontal strips and stacked one above another against black. The topmost strip is deep red, and the colours run down through orange, yellow, green and blue to faint violet at the bottom. Every strip is crossed by many fine dark vertical lines of varying width and darkness, some isolated and some in tight groups. ||| The Sun's own spectrum, sliced into strips so the whole of it fits on one page. The dark lines are the entire subject of this lesson: each one is light that never arrived, absorbed on the way out by a particular element. Count how many there are, then remember that before anyone could read them, the composition of the stars was the standard example of a thing humans could never know. ||| NSO/AURA/NSF. Solar spectrum, visible (noao-01771).jpg. CC BY 4.0. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Solar_spectrum,_visible_(noao-01771).jpg

Those lines are the single most productive discovery in the history of astronomy, because each element absorbs light at its own specific set of wavelengths. The pattern is a fingerprint. **Starlight arrives carrying a list of what it passed through.**

Before this, the composition of the stars was a standard example of something humans could never know. Then it was routine.

## What a spectrum gives you

| Feature of the spectrum | What it tells you |
|---|---|
| Which absorption lines are present | Which elements are there |
| How strong the lines are | Temperature and pressure conditions, with care |
| The overall color balance | Surface temperature |
| Lines shifted from their laboratory positions | Motion toward or away from us |

That last row deserves its own emphasis. The pattern of lines is fixed by physics, so if you see the whole pattern sitting at longer wavelengths than it should, something has stretched the light on its way here. That shift is measurable, and it becomes the top rung of the ladder in lesson 11.

## The habit this course keeps pointing at

A spectrum is a beautiful example of the chain of inference. You measure brightness at many wavelengths. From that you infer which elements are present, which requires knowing the laboratory patterns. From the line strengths you infer conditions, which requires a model of how atoms behave under those conditions.

Each step is well tested. Each step is a step. The number at the end is not something anybody saw.

:::reveal A star's spectrum shows the hydrogen absorption pattern, but every line sits at a slightly longer wavelength than the same pattern measured in a laboratory. What can you conclude? ||| That the star is moving away from us, or that the light was stretched on its journey. The pattern's internal spacing identifies it as hydrogen; its displacement is the measurement of motion or of expansion, and distinguishing those two possibilities is the subject of lesson 11.

## Sources

National Optical-Infrared Astronomy Research Laboratory. (n.d.). *Spectroscopy and the composition of stars*. https://noirlab.edu/

NASA. (n.d.). *Spectroscopy: Reading the rainbow*. https://science.nasa.gov/`,
    },
    {
      slug: "cecilia-payne-and-what-stars-are-made-of",
      title: "6 · Cecilia Payne and what stars are made of",
      section: "Part 2 · The ladder",
      recallContent: [
        {
          prompt: "What makes an absorption spectrum a fingerprint?",
          answer: "Each element absorbs at its own specific set of wavelengths, so the pattern of dark lines identifies what the light passed through.",
        },
      ],
      body: `By the 1920s astronomers could read spectra well. The expectation was that stars would turn out to be made of roughly the same mix of elements as the Earth, because the spectra showed the same elements and nothing obviously suggested otherwise.

In her 1925 doctoral thesis, Cecilia Payne applied newly developed physics describing how atoms behave at different temperatures, and concluded something else: the line strengths do not directly give you abundances, because temperature governs how strongly a given element absorbs. Correcting for that, stars turn out to be overwhelmingly **hydrogen and helium**, by an enormous margin.

She was right. It is one of the foundational results of modern astrophysics, and it is why the elements chapter later in this course works the way it does.

## The part of the story to handle carefully

Payne's thesis is often told as a story in which she was forced to retract her conclusion by a senior astronomer who later took credit for it. The published thesis does contain language stepping back from the result, describing the derived abundances as "almost certainly not real."

**The compressed version is doing several things at once**, and this course flags rather than repeats it. What the correspondence and the thesis actually show, who advised what, and how the retreat came to be worded is a matter for the primary documents, and it is registered as an open check.

What is not in doubt: she reached the correct conclusion, it went against the expectation of the field, the published thesis hedged it, and the result was accepted a few years later.

## Why it belongs in a course about evidence

This is a clean case of the hardest problem in reading evidence: **she had the right answer and insufficient authority to state it plainly.** The data were not the obstacle and neither was the reasoning.

That happens. It is worth knowing that it happens, because the instinct that science self-corrects quickly and neutrally is a description of the long run and not of any particular year.

:::reveal Why did nobody read hydrogen dominance directly off the spectra before 1925? ||| Because line strength does not translate directly into abundance. How strongly an element absorbs depends on temperature, and the physics needed to correct for that had only recently been developed. Without the correction the spectra genuinely look like a roughly Earth-like mix.

## Sources

Payne, C. H. (1925). *Stellar atmospheres: A contribution to the observational study of high temperature in the reversing layers of stars* [Doctoral thesis, Radcliffe College].

Harvard College Observatory. (n.d.). *Records and plate archive*. https://library.cfa.harvard.edu/`,
    },
    {
      slug: "reading-a-star-the-hr-diagram",
      title: "7 · Reading a star: the HR diagram",
      section: "Part 2 · The ladder",
      recallContent: [
        {
          prompt: "What did Cecilia Payne's 1925 thesis establish, and why had it been missed?",
          answer: "That stars are overwhelmingly hydrogen and helium. It was missed because line strength depends on temperature, and the physics needed to correct for that was new.",
        },
      ],
      body: `Take a large number of stars. For each one, plot its intrinsic brightness against its surface temperature. If stars came in every combination, the result would be a shapeless cloud.

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786416008/witus/courses/science-and-math/how-we-know-whats-out-there/hertzsprung-russell-diagram.jpg ||| A Hertzsprung-Russell diagram on a black background. Luminosity in solar units runs up the vertical axis from ten to the minus five to ten to the sixth; surface temperature in Kelvin runs along the bottom from about 30,000 on the left down to 3,000 on the right, with a coloured bar labelled O, B, A, F, G, K, M beneath it. A broad diagonal band labelled MAIN SEQUENCE runs from hot and bright at the upper left to cool and faint at the lower right, with the Sun marked near its middle. A separate group labelled GIANTS sits at the right, SUPERGIANTS including Betelgeuse and Antares at the upper right, and a sparse group labelled WHITE DWARFS at the lower left. Named stars, stellar masses and lifetimes are annotated throughout. ||| Do not read this as a catalogue of kinds of star. Find the Sun on the main sequence, then find Sirius B down among the white dwarfs, and notice that nothing here was designed: astronomers plotted measurements, the structure appeared, and only then did anyone work out that they were looking at a population of different ages. The diagram is a snapshot of stellar lives. ||| Daniel William "Danny" Wilson. Updated Hertzsprung-Russell Diagram.jpg. CC BY 4.0. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Updated_Hertzsprung-Russell_Diagram.jpg

It is not a cloud. Most stars fall along a single diagonal band, with two smaller populations off it. That structure is the **Hertzsprung-Russell diagram**, and it is the most useful picture in astronomy.

## What the structure means

- **The main sequence**, the diagonal band, holds stars fusing hydrogen in their cores. Most stars, most of the time, are here. Position along it tracks mass: heavier stars are hotter and brighter.
- **Giants**, up and to the right: cool but very luminous, which means they must be enormous, because a cool surface emitting that much light needs a great deal of surface.
- **White dwarfs**, down and to the left: hot but faint, so they must be tiny.

Nobody designed this. It emerged from plotting measurements, and *then* had to be explained. The explanation turned out to be stellar evolution: the diagram is not a catalog of kinds of star, it is a **snapshot of a population at different stages of life**.

That reinterpretation is the good part. A pattern in data got taken seriously as a fact needing explanation, and the explanation turned out to be about time.

## Why it matters for the ladder

If you can work out where a star sits on the diagram from its spectrum alone, you can read off its intrinsic brightness. Compare that with how bright it appears, and you have its distance.

That is exactly the deadlock from lesson 3, broken. It is also a good example of a rung whose reliability depends entirely on the calibration underneath it: the diagram's vertical axis is intrinsic brightness, which had to be established using stars whose distances were known by parallax.

**The ladder is not a metaphor. Each rung is literally built on the one below.**

:::reveal A star is cool at the surface and yet enormously luminous. What must be true of it, and where does it sit on the diagram? ||| It must be very large. A cool surface emits relatively little light per unit area, so producing that much total light requires an enormous amount of surface. It sits up and to the right, in the giant region.

## Sources

European Southern Observatory. (n.d.). *The Hertzsprung-Russell diagram*. https://www.eso.org/public/

NASA. (n.d.). *Stellar evolution and the H-R diagram*. https://science.nasa.gov/`,
    },
    {
      slug: "the-harvard-computers",
      title: "8 · The Harvard Computers",
      section: "Part 2 · The ladder",
      recallContent: [
        {
          prompt: "Why is the HR diagram a snapshot of stellar lives rather than a catalogue of kinds of star?",
          answer: "Because the groupings correspond to stages: main-sequence stars fusing hydrogen, giants later in life, and white dwarfs at the end. The pattern is about time.",
        },
      ],
      body: `The classification system underneath the HR diagram did not appear from nowhere. Somebody had to look at an enormous number of stellar spectra, one at a time, and sort them.

At Harvard College Observatory, from the late nineteenth century onward, that work was done by a group of women employed to examine photographic plates. They were called "computers," which at the time meant a person who computes.

Among them:

- **Williamina Fleming**, who began as a domestic employee in the director's household, was put to work on the plates, and went on to classify many thousands of stellar spectra and to be placed in charge of the plate collection.
- **Annie Jump Cannon**, who reorganised the classification into the sequence that is still in use, and applied it to a catalog of enormous scale.
- **Henrietta Swan Leavitt**, whose work is the next lesson.

## The labor arrangement is part of the science

They were paid a fraction of what a man in comparable work earned. Credit for the resulting catalogs frequently attached to the observatory's director. Several were college-educated in an era when the career their education pointed toward was closed to them, which is exactly why they were available so cheaply.

None of that is a footnote to the astronomy. **It is why the astronomy happened at that scale.** A project requiring painstaking examination of hundreds of thousands of spectra was affordable because the labor was underpaid, and it was underpaid because of who was doing it.

That is an uncomfortable sentence and it is a true one. The catalog is a genuine achievement, the arrangement that produced it was exploitative, and both statements have to be held at once. This catalog's labor courses make the same move about other industries; the observatory is not exempt from it.

## What survives

Cannon's classification sequence is still taught and still used. The plate collection is still consulted, because a photographic plate from the 1890s is a measurement of a sky that no longer exists and cannot be re-observed.

:::reveal What is the argument that the Harvard Computers' pay was not incidental to the science but structural to it? ||| The classification project required examining an enormous number of plates by eye. That was affordable only because the labor was cheap, and it was cheap because educated women were excluded from the careers their training pointed toward. The scale of the result depended on the inequity that produced the workforce.

## Sources

Harvard College Observatory. (n.d.). *The astronomical photographic plate collection*. https://library.cfa.harvard.edu/

Smithsonian Institution. (n.d.). *Women in early American astronomy*. https://www.si.edu/`,
    },
    {
      slug: "rung-two-leavitts-yardstick",
      title: "9 · Rung two: Henrietta Leavitt's yardstick",
      section: "Part 2 · The ladder",
      recallContent: [
        {
          prompt: "Who were the Harvard Computers, and what does the word mean in that context?",
          answer: "Women employed at Harvard College Observatory to examine photographic plates and classify stellar spectra. A computer was a person who computes.",
        },
      ],
      body: `Some stars pulse. They brighten and dim on a regular cycle, taking days or weeks to complete it, and they do it reliably enough to time with a stopwatch.

Studying such stars in the Magellanic Clouds, Henrietta Swan Leavitt noticed something that broke the deadlock of lesson 3: **the ones that took longer to cycle were brighter.** Period predicted brightness.

## Why the Magellanic Clouds mattered

This is the part that makes it work, and it is easy to skate past.

Normally, comparing the brightness of two stars tells you nothing about their intrinsic brightness, because you do not know their distances. But all the stars in the Magellanic Clouds are at *roughly* the same distance from us, in the way that everyone in a distant city is roughly equally far from you even though the city has width.

So within that group, differences in apparent brightness are differences in *actual* brightness. That is what let a relationship between period and true luminosity emerge from measurements of apparent brightness alone.

**It is a beautiful piece of reasoning and the insight is in the choice of sample, not in the arithmetic.**

## What it bought

If period predicts intrinsic brightness, then finding one of these stars anywhere gives you a distance: time its cycle, infer how bright it truly is, compare with how bright it looks, and the difference is the distance.

That reaches vastly further than parallax. It is how the scale of the galaxy, and then the question of whether other galaxies exist at all, became answerable.

The relationship still had to be **calibrated**: knowing that longer period means brighter does not by itself tell you *how* bright, and pinning that required stars of this type whose distances were known by other means, which ultimately traces back to parallax.

## A note on how her story is told

Leavitt is often introduced through an anecdote about a Nobel Prize she was nearly nominated for. That story is usually told inaccurately, and this course leaves it out pending a check against primary sources.

It is also unnecessary, and slightly insulting. **The period-luminosity relation is one of the load-bearing results in astronomy.** Introducing its discoverer through a prize she did not receive makes the prize the measure of the work.

:::reveal Why was it essential that Leavitt's variable stars were in the Magellanic Clouds rather than scattered across the sky? ||| Because the stars in a cloud are all at roughly the same distance from us. That makes differences in apparent brightness genuine differences in intrinsic brightness, which is what allowed a period-to-luminosity relationship to be extracted without knowing any individual distance first.

## Sources

Leavitt, H. S., & Pickering, E. C. (1912). Periods of 25 variable stars in the Small Magellanic Cloud. *Harvard College Observatory Circular, 173*, 1-3.

NASA. (n.d.). *Cepheid variables and the cosmic distance ladder*. https://science.nasa.gov/`,
    },
    {
      slug: "rung-three-standard-candles",
      title: "10 · Rung three: standard candles, and error that compounds",
      section: "Part 2 · The ladder",
      recallContent: [
        {
          prompt: "What does Leavitt's period-luminosity relation let you do that parallax cannot?",
          answer: "Measure distances far beyond parallax's reach: time a variable star's cycle, infer its true brightness, and compare with how bright it looks.",
        },
      ],
      body: `Pulsing variable stars reach far, and not far enough. To measure across the observable universe you need something visible at much greater distance, which in practice means something violent.

A **standard candle** is any object whose intrinsic brightness you believe you know independently. Certain kinds of exploding star serve, because their peak brightness falls within a narrow range that can be further tightened by studying how the brightness rises and falls. They are also, briefly, bright enough to be seen across enormous distances.

## The structure of the whole thing

| Rung | Method | Calibrated by |
|---|---|---|
| 1 | Parallax | Geometry alone |
| 2 | Period-luminosity variables | Rung 1 |
| 3 | Standard-candle explosions | Rung 2 |
| 4 | Redshift and expansion | Rung 3 |

Read that column on the right again, because it is the most important thing in this course.

**Every rung is calibrated on the one below it.** No rung is independently anchored to reality. Which means an error low down does not stay low down: it propagates upward through everything built on it, and it does so silently, because each rung individually looks internally consistent.

## Why that is not a scandal

It would be easy to read the table as damning. It is not, for two reasons.

First, the field knows. Calibration of the ladder is an active, argued-about area of research precisely because everyone understands what depends on it.

Second, there are cross-checks. Where two rungs overlap in range, they can be compared, and independent methods that do not use the ladder at all can be brought against the same objects. Agreement between methods that fail in different ways is genuinely strong evidence.

But it does mean the honest description of any large cosmic distance is not a number. It is a number, an uncertainty, and a list of what it assumes.

**Lesson 12 is what happens when two carefully built chains disagree.**

:::reveal A calibration error is discovered in the period-luminosity relation. Which distances are affected? ||| Every distance measured with that rung, and every distance on every rung above it, since those are calibrated on this one. Parallax distances are unaffected, because parallax is anchored in geometry rather than in another rung.

## Sources

NASA. (n.d.). *Type Ia supernovae as standard candles*. https://science.nasa.gov/

Space Telescope Science Institute. (n.d.). *The extragalactic distance scale*. https://www.stsci.edu/`,
    },
    // ── Part 3 ─────────────────────────────────────────────────────────────────────────────────
    {
      slug: "redshift-and-an-expanding-universe",
      title: "11 · Redshift and an expanding universe",
      section: "Part 3 · The whole thing",
      recallContent: [
        {
          prompt: "What is the structural weakness of the cosmic distance ladder?",
          answer: "Every rung is calibrated on the one below it, so an error low down propagates silently upward through everything built on top.",
        },
      ],
      body: `Lesson 5 established that a spectrum's line pattern is fixed by physics, so a pattern displaced toward longer wavelengths means the light has been stretched.

Look at distant galaxies and nearly all of them show this shift, and the further away a galaxy is, the larger the shift. That relationship between distance and redshift is the observational foundation of modern cosmology.

## What "expanding" does and does not mean

This is where almost every popular account goes wrong, so be precise.

**It does not mean** galaxies are flying outward through space away from a central point where something happened. There is no such point, and we are not near it.

**It means** the distances between things are increasing everywhere. Space itself is expanding, and light traveling through it gets stretched along the way. Every observer anywhere sees distant galaxies receding, which is why "where was the center" is a question with no location as an answer.

The standard image is dots on a balloon being inflated: every dot moves away from every other dot, no dot is the center, and the surface has no edge. Like every analogy it breaks if pushed, but the part it gets right is the part people get wrong.

## Whose law

The relationship is commonly called Hubble's law, after Edwin Hubble's 1929 paper.

**Georges Lemaître had published the relationship, with an estimate of the rate, two years earlier in 1927**, in a French-language journal that the English-speaking astronomical community largely did not read. The International Astronomical Union has recommended the name **Hubble-Lemaître law**, and this course uses it.

That is not housekeeping. It is a live example of something this catalog says constantly: **who gets remembered depends heavily on what language they published in, which journal, and who was reading.** The physics does not care. The naming does, and the naming is what most people learn.

:::reveal Someone asks where the centre of the expansion is, since everything appears to be moving away from us. What is wrong with the question? ||| It assumes expansion means objects flying outward through space from a point. Space itself is expanding everywhere, so every observer anywhere sees the same recession. There is no center to locate, and our seeing galaxies recede in all directions is what any observer would see.

## Sources

Lemaître, G. (1927). Un univers homogène de masse constante et de rayon croissant. *Annales de la Société Scientifique de Bruxelles, 47*, 49-59.

International Astronomical Union. (2018). *Resolution B4 on the naming of the Hubble-Lemaître law*. https://www.iau.org/`,
    },
    {
      slug: "the-hubble-tension",
      title: "12 · The Hubble tension",
      section: "Part 3 · The whole thing",
      recallContent: [
        {
          prompt: "Why does the IAU recommend calling it the Hubble-Lemaître law?",
          answer: "Because Lemaître published the relationship in 1927, two years before Hubble, in a French-language journal the English-speaking community largely did not read.",
        },
      ],
      body: `This is the most valuable lesson in the course, and it is about a disagreement nobody has resolved.

The expansion rate can be measured in more than one way, and two broad families of method exist:

**Build it up from nearby.** Climb the ladder: parallax, then variable stars, then standard candles, then read the expansion rate off the relationship between distance and redshift.

**Predict it from the early universe.** Take detailed measurements of the light left over from the early universe, fit the standard cosmological model to them, and derive what the present-day expansion rate should be.

Both are careful. Both have been refined for decades by people trying hard to find their own mistakes.

**They disagree.** The ladder-based value comes out higher than the early-universe value, and the gap has not closed as the measurements have become more precise. If anything, improving precision has sharpened the disagreement, because the uncertainties shrank while the values did not converge.

## Why this is the best thing in the course

Most science education presents settled results, which teaches an accidental lesson: that science is a body of facts, and disagreement means somebody is doing it wrong.

Here are two well-executed measurements of the same quantity that do not agree, made by people who know exactly how bad that is. The possible explanations are the interesting part:

- An unrecognised systematic error in one of the ladder's rungs.
- An unrecognised systematic error in the early-universe analysis.
- The cosmological model being incomplete, so that the prediction is being derived from an assumption that is not quite right.

Nobody knows which. That is not a crisis and it is not embarrassing. **It is what the frontier looks like from the inside**, and a learner who understands this lesson understands something most popular science coverage never conveys.

## How to read a number about this

Anyone quoting a current value should give you a value, an uncertainty, a method, and a date. A single confident figure with none of those is not a measurement being reported; it is a fact being asserted.

**Deliberate omission:** this course does not print current values for the expansion rate, because they are actively revised and a course is a poor place for a number that moves. Go to a current source, and note which method produced the figure you find.

That is also lesson 1 of Course 1, arriving from the other direction: *when* is one of the four questions.

:::reveal Improving the precision of both measurements made the Hubble tension worse rather than better. Why is that significant? ||| Because if the gap were caused by random measurement noise, tighter measurements would tend to converge. Instead the uncertainties shrank while the values stayed apart, which points to a genuine systematic error in one method or to something missing from the underlying model.

## Sources

NASA. (n.d.). *Measuring the expansion rate of the universe*. https://science.nasa.gov/

European Space Agency. (n.d.). *Planck and the cosmic microwave background*. https://www.esa.int/`,
    },
    {
      slug: "what-stars-make",
      title: "13 · What stars make",
      section: "Part 3 · The whole thing",
      recallContent: [
        {
          prompt: "Name the three candidate explanations for the Hubble tension.",
          answer: "A systematic error somewhere on the distance ladder, a systematic error in the early-universe analysis, or the cosmological model being incomplete.",
        },
      ],
      body: `The early universe was overwhelmingly hydrogen and helium and very little else. Your body contains a great deal of carbon, oxygen, nitrogen, calcium and iron.

Something made those, and the something was stars.

## The mechanism, without equations

A star spends most of its life fusing hydrogen into helium in its core, and the energy released is what holds it up against its own gravity. When the core hydrogen runs low, the core contracts, gets hotter, and heavier elements begin to fuse. Helium into carbon, and onward through progressively heavier elements in the most massive stars.

That process builds elements up to around iron. Past iron, fusion stops paying: it no longer releases net energy, so it cannot hold the star up. What follows depends on the star's mass, and the most dramatic outcomes are the ones that scatter the results.

**Elements heavier than iron require the extreme conditions of stellar death**, including supernovae and the collision of dense stellar remnants, events which have now been observed with both light and gravitational waves.

Either way, the material is thrown out and mixed into the gas that later forms new stars and planets. The atoms in your hand were assembled inside stars and released when those stars ended.

## How anyone knows

This is a course about evidence, so the claim needs its chain:

1. **Spectra tell us what stars are made of** (lessons 5 and 6), including how composition varies between older and younger populations.
2. **Nuclear physics measured in laboratories** tells us which reactions occur at which temperatures and what they produce.
3. **Models built from those two** predict what a star of a given mass should produce over its life.
4. **Observed abundances** across many environments match those predictions, including in the debris of observed explosions.

Four independent-ish lines that agree. That is the shape of a well-supported claim: not one decisive experiment, but several different ways of being wrong that would have to fail in the same direction to fool everyone.

:::reveal Why does element-building in a star's core essentially stop at iron? ||| Because fusing nuclei heavier than iron no longer releases net energy; it consumes it. So it cannot sustain the outward pressure holding the star up, and the heavier elements require the extreme conditions of stellar death rather than ordinary stellar life.

## Sources

NASA. (n.d.). *Stellar nucleosynthesis: The origin of the elements*. https://science.nasa.gov/

National Science Foundation. (n.d.). *Neutron star merger observations and heavy-element production*. https://www.nsf.gov/`,
    },
    {
      slug: "vera-rubin-and-the-stuff-we-cannot-see",
      title: "14 · Vera Rubin and the stuff we cannot see",
      section: "Part 3 · The whole thing",
      recallContent: [
        {
          prompt: "Give two of the four independent lines of evidence that stars produce the elements.",
          answer: "Any two of: spectra showing stellar composition, laboratory nuclear physics, models predicting what a star of a given mass produces, and observed abundances matching those predictions.",
        },
      ],
      body: `Things orbiting a central mass move more slowly the further out they are. The outer planets take longer and travel slower than the inner ones, because gravity weakens with distance. A galaxy, with most of its visible matter concentrated toward the middle, ought to behave the same way.

Working with Kent Ford, **Vera Rubin** measured how fast material orbits at different distances from the centers of spiral galaxies, using spectra to read the motion. The outer regions were not slowing down as expected. They kept moving at roughly the same speed far out.

The result was reproduced across many galaxies. It is now one of the most robust observations in astronomy.

## What it forces

Orbital speed depends on how much mass is inside the orbit. Material at the edge of a galaxy orbiting far faster than the visible matter can account for means one of two things:

1. **There is much more mass than we can see**, distributed differently from the light, or
2. **Gravity does not behave as expected** at those scales.

The first option is the mainstream one, and the unseen mass is called **dark matter**. Other independent lines of evidence point the same way, including the way galaxy clusters bend light passing through them.

## The honest ending

Now hold this course's whole method against that conclusion.

Dark matter is **not a substance anybody has detected directly.** It is a name for a discrepancy: the gap between the gravity we infer and the matter we can see. It is believed because several independent observations require extra mass, and because the alternatives explain the full set of evidence less well.

That is a genuinely different kind of belief from a parallax measurement, and a learner who finishes this course should be able to say why. **Not "one is true and one is not."** Both are well supported. But one is a geometric measurement and the other is the best current explanation of a persistent anomaly, and knowing which kind of claim you are holding is the entire skill this course teaches.

Rubin herself was clear that the data showed something was missing, not what the missing thing was. That distinction is the discipline.

:::reveal Why is "dark matter" a different kind of claim from "this star is 11 light years away by parallax"? ||| The parallax distance is a geometric measurement of an angle. Dark matter is an inference to the best explanation: several independent observations require more mass than we can see, and the alternatives fit the full set of evidence less well. Both are well supported; they are supported in different ways, and only one of them names something anyone has detected.

## Sources

Rubin, V. C., & Ford, W. K. (1970). Rotation of the Andromeda Nebula from a spectroscopic survey of emission regions. *The Astrophysical Journal, 159*, 379-403.

NASA. (n.d.). *Dark matter: What we know and how we know it*. https://science.nasa.gov/`,
    },
    {
      slug: "check-the-ladder",
      title: "15 · Knowledge check: the chain of inference",
      section: "Part 3 · The whole thing",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Why was it essential that Leavitt studied variable stars in the Magellanic Clouds specifically?",
            options: [
              "Stars in a cloud are all at roughly the same distance, so brightness differences between them are real differences",
              "The Magellanic Clouds contain the only variable stars whose cycles are slow enough to time accurately",
              "The Clouds sit far from the plane of the Milky Way, so their stars suffer no dimming from intervening dust",
              "Harvard's plate collection covered the southern sky more completely than it covered the northern sky",
            ],
            correctIndex: 0,
            explanation:
              "Because the stars are all about equally far away, differences in how bright they appear are differences in how bright they truly are. That is what allowed a period-to-luminosity relation to emerge without knowing any single distance first. The insight is in the choice of sample.",
            sourceLessonSlug: "rung-two-leavitts-yardstick",
          },
          {
            prompt: "A calibration error is found in the period-luminosity relation for variable stars. Which measurements are affected?",
            options: [
              "That rung and every rung above it, because each is calibrated on the one below",
              "Only distances to the specific galaxies where those variable stars were observed",
              "Only measurements made before the error was introduced into the calibration",
              "All astronomical distances, including parallax, since parallax uses the same instruments",
            ],
            correctIndex: 0,
            explanation:
              "The ladder is literally built rung on rung, so an error propagates upward silently. Parallax is the exception because it is anchored in geometry rather than calibrated against another rung.",
            sourceLessonSlug: "rung-three-standard-candles",
          },
          {
            prompt: "Two methods of measuring the universe's expansion rate disagree, and improving the precision of both made the disagreement sharper. What does that pattern suggest?",
            options: [
              "A systematic error in one method, or something missing from the underlying model",
              "That random measurement noise is larger than either team had originally estimated",
              "That the expansion rate is genuinely changing over the period the measurements span",
              "That the two methods are measuring different quantities and should not be compared",
            ],
            correctIndex: 0,
            explanation:
              "Random noise shrinks with better measurements and the values would converge. Uncertainties shrinking while values stay apart points at a systematic error in one method or at an incomplete model.",
            sourceLessonSlug: "the-hubble-tension",
          },
          {
            prompt: "Which statement best describes what the observed redshift of distant galaxies means?",
            options: [
              "Distances between objects are increasing everywhere, and light is stretched as it travels",
              "Galaxies are flying outward through space from the location where the universe began",
              "Distant galaxies emit light that is intrinsically redder than the light nearby galaxies emit",
              "Dust between the galaxies and us absorbs blue light more strongly than it absorbs red",
            ],
            correctIndex: 0,
            explanation:
              "There is no central point that things are flying away from. Space itself expands, so every observer everywhere sees distant galaxies receding. Reddening by dust is a real and separate effect that astronomers correct for; it is not what redshift is.",
            sourceLessonSlug: "redshift-and-an-expanding-universe",
          },
          {
            prompt: "For two centuries nobody detected stellar parallax. What was the correct explanation, and what makes this episode instructive?",
            options: [
              "The stars are extremely distant, so a missing prediction can mean the instrument is not good enough rather than the theory being wrong",
              "The Earth's orbit is nearly circular, so the two observation points were closer together than astronomers assumed",
              "Atmospheric refraction cancels the parallax shift exactly, which is why space telescopes were eventually required",
              "The measurements were made only in summer, when the relevant stars were below the horizon at night",
            ],
            correctIndex: 0,
            explanation:
              "The shifts are well under an arcsecond, far below what early instruments could resolve. The absence was read by some as evidence the Earth does not move; it was actually evidence that the stars are much further away than anyone was prepared to believe.",
            sourceLessonSlug: "rung-one-parallax",
          },
          {
            prompt: "What distinguishes the claim 'dark matter exists' from the claim 'this star is a measured number of light years away by parallax'?",
            options: [
              "One is an inference to the best explanation of an anomaly; the other is a geometric measurement",
              "One is supported by evidence and the other remains an untested theoretical proposal",
              "One concerns objects outside our galaxy and the other concerns objects inside it",
              "One was established by a single research group and the other by many independent teams",
            ],
            correctIndex: 0,
            explanation:
              "Both are well supported, and in different ways. Parallax measures an angle. Dark matter names a gap between the gravity we infer and the matter we can see, believed because several independent observations require extra mass and the alternatives fit worse.",
            sourceLessonSlug: "vera-rubin-and-the-stuff-we-cannot-see",
          },
        ],
      },
    },
    {
      slug: "capstone-trace-a-number-down-the-ladder",
      title: "16 · Capstone: trace a number down the ladder",
      section: "Part 3 · The whole thing",
      lessonType: "assignment",
      body: `Find a number in a popular astronomy article: a distance, an age, a mass, a temperature, a composition. A news story, a mission press release, a magazine feature, a museum caption. It must be real and you must link it.

Then trace it down to the measurement it rests on. Aim for roughly 400 to 800 words.

## What to submit

**1. The number and its source.** Quote the sentence, link the article.

**2. The chain, as far as you can follow it.** What was actually observed? Which rungs stand between that observation and the number as printed? You will not always get to the bottom, and where the trail goes cold, say where and why. "The article cites no source and I could not identify the survey" is a real result.

**3. The weakest link, named.** Which step would you least like to be wrong? Say why. It is often a calibration rather than a measurement.

**4. What the number is missing.** Almost every popular number is printed without its uncertainty and without its date. Say what should have accompanied it.

**5. What kind of claim it is.** Is it a geometric measurement, a model-dependent inference, or a best explanation of an anomaly? All three are legitimate. Confusing them is the failure this course exists to prevent.

## How this is assessed

Not on finding an error. Most popular astronomy numbers are roughly right, and correctly concluding "this is well supported, and here is the chain" is a full-credit answer.

You are assessed on whether the chain was genuinely traced rather than asserted, whether the weakest link is defensible, and whether you distinguished what you verified from what you assumed.

One rule, the same as lesson 2: **do not assert what you cannot support.** If you could not find the original measurement, write that. Do not write a sentence implying you read a paper you did not read.

## Sources

NASA. (n.d.). *Science mission directorate: Astrophysics*. https://science.nasa.gov/astrophysics/

European Southern Observatory. (n.d.). *Press releases and science papers*. https://www.eso.org/public/news/`,
    },
  ],
};
