// Authored "Asia Before European Colonization: The Center of Gravity" — the ANCHOR of the
// precolonial-Asia track (plans/future-courses/precolonial-asia-track-proposal.md). From BAM's
// world.md queue. ORIENTATION depth, deliberately: a map and a frame, not an encyclopedia —
// the major civilizational zones, when each flourished, and the connective tissue between
// them. Depth belongs to the track's follow-on courses (Ancient India, Tang-Song China,
// Islamic Golden Age, Silk Roads, Mongols, SE-Asian maritime empires, Japan & Korea, the
// Great Divergence).
//
// The thesis, CITED NOT ASSERTED: for most of recorded history Asia was the world's economic
// center, and "the rise of the West" is recent and (per one side of a live scholarly debate)
// contingent. Taught from Pomeranz (2000, The Great Divergence) and Maddison's (2007)
// estimates WITH their caveats stated (contested reconstructions; attributed; ranges; no
// false precision), against named critics (Broadberry, Guan & Li 2018). The course's own
// voice asserts only what is settled.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations + a ## Sources list. Backbone:
//     Pomeranz, Maddison (2007) + the Maddison Project (Bolt & van Zanden 2020), Frankopan,
//     Hansen (2012, 2020), Thapar, Ebrey, Elvin, Totman, Seth, Coe, Coedès, Lockard, Gutas,
//     Morgan, Jackson, UNESCO histories and World Heritage documentation, museum records
//     (British Library, BnF).
//   * NOTHING is flattened to "Asia did X." Every claim names a civilization, a period, and
//     a region. The final exercise drills exactly that habit.
//   * HEDGES ARE EXPLICIT where beloved claims are shaky:
//     - The Indus script is UNDECIPHERED — said plainly; whether it encodes language at all
//       is itself a live dispute (Farmer, Sproat & Witzel 2004 vs. Parpola 1994).
//     - Zero/the numeral system is cited carefully: place value in Aryabhata (499 CE), zero
//       as a number in Brahmagupta (628 CE), the Gwalior inscription (876 CE) as the secure
//       epigraphic date, the Bakhshali manuscript's radiocarbon dates flagged as disputed;
//       transmission via al-Khwarizmi credited, "Arabic numerals" named as a misnomer with
//       the Indian origin documented.
//     - Maddison's GDP shares are taught as reconstructions with wide error bars, never as
//       measurements; every figure is attributed and rounded.
//     - Chang'an at "about a million," Tripitaka Koreana at "over 81,000 blocks," Belitung
//       cargo at "tens of thousands," Hartwell's Song iron estimate labeled his estimate.
//     - The Tale of Genji is "often called" the first novel; sakoku is taught as managed
//       trade, not a sealed country; Majapahit's claimed reach is court poetry until
//       corroborated; Angkor's "collapse" is taught as contested (Buckley 2010 droughts +
//       the 1431 Ayutthaya sack, neither asserted as sufficient).
//     - The Mongols are taught as NEITHER only-barbarian NOR only-Pax-Mongolica; chronicle
//       body counts are flagged as unverifiable.
//   * "European colonization" is taught PRECISELY, not as "Asia untouched until Europe":
//     the Mughals were themselves Central Asian outsiders; intra-Asian empire (Chola raids,
//     Mongol conquests, the Imjin War, Ming occupation of Vietnam) long predates Europeans;
//     European rule arrived as coastal enclaves (Goa 1510, Malacca 1511, Manila 1571) and
//     became territorial rule only from Plassey (1757) onward — and Japan, Korea, Siam and
//     most of China were never European colonies at all.
//   * No utopia: caste and hierarchy, hereditary slavery (Korean nobi, per Palais), the
//     Indian Ocean slave trade, and conquest are taught plainly, each named to its region
//     and period.
//
// House format: `section` on every lesson; one single-line :::reveal per teaching lesson
// (answer NOT restated beneath); a quiz per section with a ~15-question bank (above the
// 10-question attempt cap, so retries rotate); every question carries `explanation` +
// `sourceLessonSlug`; recallContent on teaching lessons; one exercise (name the
// civilization · period · region). Registered in scripts/seed-courses.ts under
// "Culture & History"; NO migration — `pnpm seed:courses`.

import type { AuthoredCourse } from "./authored-course";

export const ASIA_BEFORE_EUROPEAN_COLONIZATION_COURSE: AuthoredCourse = {
  title: "Asia Before European Colonization: The Center of Gravity",
  description:
    "For most of recorded history, the center of the world economy was not in Europe. It was in Asia, and this course shows you the map. In eleven survey lessons plus an honest-record section, you will meet the Indus cities and the script nobody has ever read; Ashoka, the emperor who published his conscience on rocks; the Gupta mathematicians whose place-value numerals and zero became the digits you use every day; the Mughals, Central Asian outsiders who ruled India two centuries before the British did; Han, Tang, and Song China, where printing, paper money, the magnetic compass, and gunpowder were in use while Paris was a muddy town; Heian Japan and the shogunates; Korea, which printed with movable metal type before Gutenberg was born; Angkor, the largest preindustrial city footprint archaeologists have mapped; and the maritime empires of Srivijaya and Majapahit that most world-history courses skip entirely. Between them ran the connective tissue: the Silk Roads by land and sea, the translation movement of the Islamic Golden Age, and the Mongol Empire, taught as neither pure destroyer nor pure connector, because the record shows both. The course's central claim is cited, not asserted: economic historians' reconstructions (Maddison, 2007; taught with their caveats) put China and India together at roughly half of world output as late as 1820, and the scholarly fight over when and why 'the West' pulled ahead (Pomeranz, 2000, versus Broadberry and colleagues, 2018) is presented as the live debate it is. It is honest where honesty is uncomfortable: caste, hereditary slavery, and conquest were Asian realities long before any European ship arrived, and 'colonization' was not a European invention, only a European escalation. Every claim names a civilization, a period, and a region. Nothing here is 'Asia did X.'",
  lessons: [
    // ────────────── SECTION 1 · THE MAP AND THE CLAIM ──────────────
    {
      slug: "asia-not-one-place",
      title: "1 · One word, many worlds: the map and the timeline",
      section: "Section 1 · The map and the claim",
      body: `Start with the word itself, because the word is a trap.

"Asia" was never a self-description. It is an ancient Greek term, used by writers like Herodotus in the fifth century BCE for the lands east of the Aegean Sea, and it grew outward from there until it covered everything from the Bosporus to the Pacific. No emperor in Chang'an, no scholar in Baghdad, no priest-king at Angkor ever thought of himself as "an Asian" doing "Asian things." Even the boundary between "Europe" and "Asia" is a convention, not a fact of nature: no ocean separates them, and geographers have drawn the line in different places for centuries (Lewis & Wigen, 1997). Today "Asia" covers roughly 30 percent of Earth's land and roughly 60 percent of its people. A single word for that much of humanity will flatten everything it touches unless you handle it carefully.

So this course adopts one rule before any history: **never say "Asia did X."** Name the civilization, the period, and the region, every time. Not "Asians invented printing": woodblock printing in Tang China by the ninth century CE, movable metal type in Goryeo Korea by 1377. Not "Asia was rich": Mughal Bengal's weavers in the seventeenth century, the Song Chinese iron industry in the eleventh. The final exercise of this course drills exactly this habit, because it is the most transferable skill here.

Here is the map you will carry through the course, zone by zone:

| Zone | Anchor civilizations in this course | When they flourished |
|---|---|---|
| **South Asia** | Indus cities; Maurya; Gupta; Mughals | c. 2600 BCE to 1757 CE |
| **East Asia** | Han, Tang, Song China; Heian Japan and the shogunates; Silla, Goryeo, Joseon Korea | c. 200 BCE to the 1800s |
| **Southeast Asia** | Angkor (Khmer); Srivijaya; Majapahit | c. 650 to c. 1500 |
| **Central Asia** | The steppe and oasis world: Silk Road cities; the Mongol Empire | throughout; empire 1206 to the 1300s |
| **West Asia** | The Abbasid Caliphate and the Islamic Golden Age | 750 to 1258 |

Notice two things about that table. First, **West Asia is on it.** The region usually relabeled "the Middle East" is part of Asia, and cutting it out of "Asian history" is a modern habit this course does not follow: Baghdad's translation movement belongs in this story as much as Kaifeng's printers do. Second, **Southeast Asia is on it.** It is the zone world-history surveys most often skip, which is exactly why this course gives it a full section: while European crusaders were besieging castles, the largest urban footprint on the planet was Khmer.

One more piece of framing, because the course title uses a loaded phrase. "Before European colonization" is **not one date.** Portugal seized Goa on India's west coast in 1510 and Malacca in 1511; Spain took Manila in 1571. But for roughly the next two centuries European power in most of Asia meant coastal enclaves and shipping lanes, not ruled territory. Territorial colonization of Asia's heartlands is usually dated from the East India Company's victory at Plassey in Bengal in 1757, and most of mainland Southeast Asia was annexed only in the nineteenth century. Japan, Korea, Siam (Thailand), and most of China were **never European colonies at all**; Korea's colonizer, from 1910 to 1945, was Japan (Frankopan, 2015; Lockard, 2009). Keep the dates straight and two opposite errors die at once: the error that says Asian history stops mattering in 1500, and the error that says nothing bad happened in Asia until Europeans arrived. Section 6 takes up the second error in detail.

:::reveal Why does this course refuse the sentence "Asia invented printing," and what does it say instead? ||| Because "Asia" is a Greek-derived label covering 60 percent of humanity, not an actor, and flattened claims can't be checked. The course names the civilization, period, and region instead: woodblock printing in Tang China by the ninth century CE; movable metal type in Goryeo Korea by 1377.

## Sources
- Lewis, M. W., & Wigen, K. E. (1997). *The myth of continents: A critique of metageography*. University of California Press.
- Frankopan, P. (2015). *The Silk Roads: A new history of the world*. Bloomsbury.
- Lockard, C. A. (2009). *Southeast Asia in world history*. Oxford University Press.
- Hansen, V. (2020). *The year 1000: When explorers connected the world and globalization began*. Scribner.`,
      recallContent: [
        {
          prompt: "What is the one rule this course adopts before any history, and why?",
          answer:
            "Never say 'Asia did X.' Name the civilization, the period, and the region for every claim, because 'Asia' is an outsiders' label (Greek in origin) covering roughly 60 percent of humanity, and flattened claims can neither be checked nor falsified.",
        },
        {
          prompt: "Give the key dates that show 'European colonization of Asia' was not one event.",
          answer:
            "Coastal enclaves first: Goa 1510, Malacca 1511, Manila 1571. Territorial rule only from Plassey in Bengal, 1757; most of mainland Southeast Asia annexed in the 1800s. Japan, Korea, Siam, and most of China were never European colonies; Korea was colonized by Japan (1910-1945).",
        },
      ],
    },
    {
      slug: "asia-center-of-gravity",
      title: "2 · The center of gravity: the claim, its sources, and its caveats",
      section: "Section 1 · The map and the claim",
      body: `This course makes one big claim, and this lesson shows you exactly where it comes from and how far to trust it. The claim: **for most of recorded history, the economic center of the world was in Asia, and the period in which "the West" leads is recent.** Every part of that sentence has a source, and every source has limits. Learning to hold both is the real lesson.

**The population floor (the sturdy part).** Asia has held a large majority of the world's people for as long as demographers can reconstruct. That much is not seriously disputed, and it matters: in a pre-industrial world, where nearly all wealth was farms and hands, the regions with the most people were, in aggregate, the biggest economies almost by definition.

**The GDP reconstructions (the part with error bars).** The economist Angus Maddison spent decades building estimates of economic output for every region of the world across two thousand years. His figures are the ones you have probably seen quoted: in his reconstruction, **India (South Asia) was roughly a quarter of world output around 1700 and China roughly a fifth; by 1820 China alone was roughly a third, and China and India together roughly half** (Maddison, 2007). Read those numbers the way economic historians do, not the way headlines do. Nobody surveyed Mughal Bengal's GDP. Maddison's figures are reconstructions built from tax rolls, population counts, grain prices, and explicit assumptions, and his successors at the Maddison Project keep revising them as evidence improves (Bolt & van Zanden, 2020). Treat them as **rough shares, attributed to their author**, never as measurements. This course will always write "Maddison's estimate" and round aggressively, and when you see anyone quote a precise percentage for the year 1000 without a name attached, you have caught false precision in the wild.

**The qualitative record (the part you can touch).** Independent of any spreadsheet, the physical evidence points the same direction. Europeans sailed east to buy, not to sell: Indian cotton textiles, Chinese silk and porcelain, and Southeast Asian spices were what the world wanted, and Europe paid overwhelmingly in silver, much of it mined in Spanish America and shipped, via Manila and via Europe, to Asia (Frank, 1998; Pomeranz, 2000). The historian Janet Abu-Lughod (1989) mapped the thirteenth-century trading world as a set of interlocking circuits from Flanders to the South China Sea, with the richest circuits at the Asian end and no single power in charge of the whole.

**The interpretive fight (the honest part).** How late did Asia's lead last, and why did it end? That is a live scholarly debate, and this course teaches it as one. Kenneth Pomeranz's *The Great Divergence* (2000) argued that the most advanced regions of China, especially the Yangzi River delta, were broadly comparable to England in living standards and market development as late as about 1750, and that Europe's breakout after 1800 was **contingent**, riding on accessible coal and New World resources rather than on any long-standing superiority. Stephen Broadberry, Hanhui Guan, and David Daokui Li (2018) rebuilt the national accounts and pushed back: in their reconstruction the divergence begins substantially earlier, with northwestern Europe pulling ahead of China's richest regions well before 1750. The debate continues in the journals; Section 7 walks through it properly. What no serious side disputes is the shape of the story this course tells: Asia's great economies were central for a very long time, and the world in which "the West" clearly leads is, on the scale of this course's timeline, an eyeblink.

So here is the course's claim, stated with the discipline it will demand of every other claim: *according to the standard reconstructions (Maddison, 2007, as revised by the Maddison Project), Asia's two largest economies alone accounted for roughly half of world output as late as 1820; the timing and causes of the reversal are contested among economic historians (Pomeranz, 2000; Broadberry et al., 2018).* That sentence, hedges and all, is stronger than any confident slogan, because every part of it can survive a hostile fact-check.

:::reveal Why does this course insist on writing "Maddison's estimate" instead of just stating the GDP percentages as facts? ||| Because nobody measured GDP in 1700; Maddison's figures are reconstructions from tax rolls, population counts, and explicit assumptions, with wide error bars, and the Maddison Project keeps revising them. Attributing and rounding the numbers keeps the claim honest and lets it survive a hostile fact-check; asserting precise percentages for pre-modern centuries is false precision.

## Sources
- Maddison, A. (2007). *Contours of the world economy, 1-2030 AD: Essays in macro-economic history*. Oxford University Press.
- Bolt, J., & van Zanden, J. L. (2020). *Maddison style estimates of the evolution of the world economy: A new 2020 update* (Maddison Project Working Paper WP-15). University of Groningen.
- Pomeranz, K. (2000). *The Great Divergence: China, Europe, and the making of the modern world economy*. Princeton University Press.
- Broadberry, S., Guan, H., & Li, D. D. (2018). China, Europe, and the Great Divergence: A study in historical national accounting, 980-1850. *The Journal of Economic History, 78*(4), 955-1000.
- Frank, A. G. (1998). *ReOrient: Global economy in the Asian age*. University of California Press.
- Abu-Lughod, J. L. (1989). *Before European hegemony: The world system A.D. 1250-1350*. Oxford University Press.`,
      recallContent: [
        {
          prompt: "State the course's central claim with its full source discipline (attribution + hedges).",
          answer:
            "According to the standard reconstructions (Maddison, 2007, revised by the Maddison Project), China and India together accounted for roughly half of world output as late as 1820; the timing and causes of the reversal are contested (Pomeranz, 2000, argues late and contingent; Broadberry, Guan & Li, 2018, argue earlier).",
        },
        {
          prompt: "What physical, non-spreadsheet evidence points to Asia as the economic center before 1800?",
          answer:
            "The direction of trade: Europeans sailed east to buy Indian cotton, Chinese silk and porcelain, and Southeast Asian spices, and paid overwhelmingly in silver (much of it Spanish-American), because Asia made what the world wanted (Frank, 1998; Pomeranz, 2000).",
        },
      ],
    },
    {
      slug: "asia-quiz-1",
      title: "Section 1 quiz · The map and the claim",
      section: "Section 1 · The map and the claim",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Where does the word 'Asia' come from?",
            options: [
              "It is a Greek-derived term for lands east of the Aegean, later stretched to cover the whole continent; it was never a self-description",
              "It is the ancient Chinese name for the lands west of the Pacific",
              "It was coined by Mughal geographers in the 1500s",
              "It comes from the Sanskrit word for 'sunrise'",
            ],
            correctIndex: 0,
            explanation:
              "Writers like Herodotus used it in the fifth century BCE for the lands east of the Aegean; no historical actor in Chang'an, Baghdad, or Angkor thought of himself as 'an Asian.'",
            sourceLessonSlug: "asia-not-one-place",
          },
          {
            prompt: "What is the one rule this course applies to every historical claim?",
            options: [
              "Name the civilization, the period, and the region; never say 'Asia did X'",
              "Prefer the oldest available source",
              "Trust population figures over trade figures",
              "Always cite at least one European observer",
            ],
            correctIndex: 0,
            explanation:
              "'Asia' covers roughly 60 percent of humanity; a claim flattened to the continent can be neither checked nor falsified. The final exercise drills the naming habit.",
            sourceLessonSlug: "asia-not-one-place",
          },
          {
            prompt: "Why does the course insist that West Asia (the 'Middle East') belongs in Asian history?",
            options: [
              "Because relabeling it out of Asia is a modern habit, and Baghdad's translation movement is part of this story",
              "Because the Abbasids ruled China",
              "Because Europe had no contact with it",
              "Because it was the only literate zone of Asia",
            ],
            correctIndex: 0,
            explanation:
              "The Abbasid world of 750-1258 sits on the course map alongside South, East, Southeast, and Central Asia; cutting it out flattens the connective tissue the course teaches in Section 5.",
            sourceLessonSlug: "asia-not-one-place",
          },
          {
            prompt: "Which zone does the course call 'the chapter most world-history surveys skip'?",
            options: [
              "Southeast Asia (Angkor, Srivijaya, Majapahit)",
              "East Asia",
              "South Asia",
              "West Asia",
            ],
            correctIndex: 0,
            explanation:
              "That omission is why the course gives Southeast Asia a full section: while European crusaders besieged castles, the largest mapped urban footprint on the planet was Khmer.",
            sourceLessonSlug: "asia-not-one-place",
          },
          {
            prompt: "When did European territorial colonization of Asia's heartlands begin, on the usual dating?",
            options: [
              "With the East India Company's victory at Plassey in Bengal, 1757",
              "With Vasco da Gama's arrival in 1498",
              "With the fall of Constantinople in 1453",
              "With the Opium War in 1839",
            ],
            correctIndex: 0,
            explanation:
              "Goa (1510), Malacca (1511), and Manila (1571) were coastal enclaves; ruled territory on a subcontinental scale is usually dated from Plassey, and most of mainland Southeast Asia was annexed only in the 1800s.",
            sourceLessonSlug: "asia-not-one-place",
          },
          {
            prompt: "Which of these Asian countries was colonized by a European power?",
            options: [
              "None of these: Japan, Siam (Thailand), and Korea were never European colonies",
              "Japan, by Portugal",
              "Siam (Thailand), by France",
              "Korea, by Britain",
            ],
            correctIndex: 0,
            explanation:
              "Japan and Siam kept their sovereignty; Korea was colonized in 1910, but by Japan, not by any European power. 'European colonization' has to be taught precisely or it teaches errors.",
            sourceLessonSlug: "asia-not-one-place",
          },
          {
            prompt: "In Maddison's (2007) reconstruction, roughly what share of world output did China and India together hold in 1820?",
            options: [
              "Roughly half",
              "Under 10 percent",
              "About one fifth",
              "Over 90 percent",
            ],
            correctIndex: 0,
            explanation:
              "His estimates put China alone at roughly a third in 1820 and India at roughly a sixth. The course always writes 'Maddison's estimate' and rounds, because these are reconstructions, not measurements.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "How does the course say you should read Maddison's GDP figures?",
            options: [
              "As attributed reconstructions with wide error bars, built from tax rolls and assumptions, and still being revised",
              "As exact measurements from period surveys",
              "As propaganda with no evidentiary value",
              "As accurate for Europe but invented for Asia",
            ],
            correctIndex: 0,
            explanation:
              "Nobody surveyed Mughal Bengal's GDP. The Maddison Project (Bolt & van Zanden, 2020) keeps revising the estimates; quoting a precise unattributed percentage for a pre-modern century is false precision.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "What did Pomeranz (2000) argue in The Great Divergence?",
            options: [
              "Advanced Chinese regions were broadly comparable to England as late as about 1750, and Europe's breakout was contingent on coal and New World resources",
              "Europe had led the world economy since the Roman Empire",
              "China never had market institutions",
              "The divergence is a myth and never happened",
            ],
            correctIndex: 0,
            explanation:
              "Pomeranz compared England with the Yangzi delta rather than with 'China' as a whole, and located the decisive break after 1800, in contingencies rather than deep superiority.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "What is the main published challenge to Pomeranz's late dating taught in this course?",
            options: [
              "Broadberry, Guan, and Li (2018) rebuilt the historical national accounts and place the divergence substantially earlier than 1750",
              "There is none; the question is settled",
              "Maddison (2007) proved the divergence began in 1492",
              "Abu-Lughod (1989) showed Europe led by 1250",
            ],
            correctIndex: 0,
            explanation:
              "The debate is live in the journals, which is exactly how the course presents it: attributed positions, no winner declared. Section 7 walks through it.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "Which direction did silver overwhelmingly flow in the early modern world economy, and why?",
            options: [
              "Toward Asia, because Indian textiles, Chinese silk and porcelain, and Southeast Asian spices were what the world wanted to buy",
              "Toward Europe, because Asia bought European manufactures",
              "It circulated only inside the Americas",
              "Toward Africa, to pay for gold",
            ],
            correctIndex: 0,
            explanation:
              "Europeans sailed east to buy, not to sell, and paid largely in silver, much of it mined in Spanish America (Frank, 1998; Pomeranz, 2000). The trade's direction is physical evidence independent of any GDP spreadsheet.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "What did Abu-Lughod (1989) map in Before European Hegemony?",
            options: [
              "A thirteenth-century world system of interlocking trade circuits from Flanders to the South China Sea, with no single hegemon",
              "The complete road network of the Mongol Empire",
              "The GDP of every medieval state",
              "The spread of the Black Death",
            ],
            correctIndex: 0,
            explanation:
              "Her point was structural: the world economy predates European dominance, and its richest circuits in 1250-1350 were at the Asian end.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "Which of these is an example of 'false precision' as the course defines it?",
            options: [
              "'China produced exactly 28.4 percent of world GDP in the year 1000,' quoted with no author attached",
              "'Maddison's estimate puts China at roughly a third of world output in 1820'",
              "'The timing of the divergence is contested among economic historians'",
              "'Asia has held a large majority of world population for as long as demographers can reconstruct'",
            ],
            correctIndex: 0,
            explanation:
              "A decimal-point percentage for a pre-modern century, asserted without attribution, claims a certainty the evidence cannot support. The other three sentences carry their hedges and attributions.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "Which part of the course's central claim does it call 'the sturdy part'?",
            options: [
              "Asia's population majority: a large majority of the world's people, for as long as demographers can reconstruct",
              "The exact GDP percentages",
              "The claim that no Asian state ever declined",
              "The claim that Europe was always poor",
            ],
            correctIndex: 0,
            explanation:
              "In a pre-industrial world of farms and hands, the regions with the most people were in aggregate the biggest economies almost by definition; the GDP shares are the part with error bars.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "Why does the course teach the Pomeranz-Broadberry disagreement instead of picking a side?",
            options: [
              "Because it is a live scholarly debate, and the course's own voice asserts only what is settled",
              "Because both sides are equally likely to be wrong about everything",
              "Because students are not allowed to see disagreements",
              "Because the debate was resolved in 2018",
            ],
            correctIndex: 0,
            explanation:
              "What is settled (Asia's long centrality, the recency of the West's lead) the course asserts; what is contested (timing, causes) it attributes to named scholars on each side.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
        ],
      },
    },
  ],
};
