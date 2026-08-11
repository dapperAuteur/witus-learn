// Media batch: Science & Math, Wave 1 (stage 8 of plans/63).
//
// Every file below was opened and LOOKED AT before its alt text was written.
//
// THIS BATCH CLOSES A DEPENDENCY THAT WAS DECLARED WHEN THE COURSE SHIPPED. The outline for
// How We Know What's Out There said plainly: "lesson 7 cannot ship without an HR diagram; lesson 5
// wants a real spectrum." The course shipped without them because Wave 1 was scoped to need no
// figures, and the gap was recorded rather than quietly ignored. These are the two images.
//
// A REJECTION WORTH RECORDING, because it was the obvious choice and it was wrong. The first
// candidate for lesson 5 was an 1875 Popular Science Monthly plate of the solar spectrum with
// Fraunhofer's own A-to-H line labelling. Public domain, historically exact, and thematically ideal
// for a lesson about Fraunhofer. It was dropped on two grounds that only appear once you open it:
// the plate is printed ROTATED, so the spectrum runs vertically and the letters read sideways, and
// it is 478 by 2623 pixels, an aspect ratio near 1:5.5 that renders as a tall thin ribbon on a
// phone. A learner meeting a rotated diagram has to decode the picture before they can read it. The
// modern NSO spectrum below shows the same thing in colour, the right way up.

export const batch = "science-and-math";

export const targets = [
  {
    commons: "File:Solar spectrum, visible (noao-01771).jpg",
    course: "how-we-know-whats-out-there",
    lesson: "light-itself",
    name: "solar-spectrum-absorption-lines",
    alt: "The visible spectrum of the Sun, cut into horizontal strips and stacked one above another against black. The topmost strip is deep red, and the colours run down through orange, yellow, green and blue to faint violet at the bottom. Every strip is crossed by many fine dark vertical lines of varying width and darkness, some isolated and some in tight groups.",
    caption:
      "The Sun's own spectrum, sliced into strips so the whole of it fits on one page. The dark lines are the entire subject of this lesson: each one is light that never arrived, absorbed on the way out by a particular element. Count how many there are, then remember that before anyone could read them, the composition of the stars was the standard example of a thing humans could never know.",
  },
  {
    commons: "File:Updated Hertzsprung-Russell Diagram.jpg",
    course: "how-we-know-whats-out-there",
    lesson: "reading-a-star-the-hr-diagram",
    name: "hertzsprung-russell-diagram",
    alt: "A Hertzsprung-Russell diagram on a black background. Luminosity in solar units runs up the vertical axis from ten to the minus five to ten to the sixth; surface temperature in Kelvin runs along the bottom from about 30,000 on the left down to 3,000 on the right, with a coloured bar labelled O, B, A, F, G, K, M beneath it. A broad diagonal band labelled MAIN SEQUENCE runs from hot and bright at the upper left to cool and faint at the lower right, with the Sun marked near its middle. A separate group labelled GIANTS sits at the right, SUPERGIANTS including Betelgeuse and Antares at the upper right, and a sparse group labelled WHITE DWARFS at the lower left. Named stars, stellar masses and lifetimes are annotated throughout.",
    caption:
      "Do not read this as a catalogue of kinds of star. Find the Sun on the main sequence, then find Sirius B down among the white dwarfs, and notice that nothing here was designed: astronomers plotted measurements, the structure appeared, and only then did anyone work out that they were looking at a population of different ages. The diagram is a snapshot of stellar lives.",
  },
];
