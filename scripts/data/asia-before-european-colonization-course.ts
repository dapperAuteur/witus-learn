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
    // ────────────── SECTION 2 · SOUTH ASIA ──────────────
    {
      slug: "asia-indus-cities",
      title: "3 · The Indus cities, and the script nobody can read",
      section: "Section 2 · South Asia: Indus to the Mughals",
      body: `South Asia's story opens with a civilization that has no named kings, no readable words, and some of the best municipal engineering of the ancient world.

The **Indus (or Harappan) civilization** flourished in its mature urban phase from roughly **2600 to 1900 BCE**, along the Indus River and the now-dry Ghaggar-Hakra system, in present-day Pakistan and northwest India. Its best-known cities are **Mohenjo-daro** and **Harappa** in Pakistan, and **Dholavira** and **Rakhigarhi** in India. Archaeologists have recorded well over a thousand settlements, spread across an area larger, by common estimates, than ancient Egypt and Mesopotamia combined (Kenoyer, 1998; Possehl, 2002). This was one of the world's first urban civilizations, contemporary with Old Kingdom Egypt and the cities of Sumer, and it traded with the latter: Mesopotamian texts record goods from a land called **Meluhha**, usually identified with the Indus region (Possehl, 2002).

What the cities are famous for is **planning**. Mohenjo-daro's streets run in broadly regular alignments; houses were built of fired brick in standardized proportions; and, most striking to modern eyes, the cities were plumbed. Covered drains ran down the streets, private houses connected to them, and many houses had dedicated bathing platforms. Mohenjo-daro's **Great Bath**, a watertight brick tank about 12 meters long, is among the earliest known public water structures anywhere (Kenoyer, 1998; UNESCO World Heritage Centre, n.d.). Weights recovered across Indus sites follow a single standardized system, which tells you commerce over a huge area ran on shared rules.

Now the part every honest course must say plainly. **The Indus script is undeciphered.** Roughly four to seven hundred distinct signs, by the main catalogs, appear on seals, tablets, and pottery. The inscriptions are short: most are only a few signs long, and even the longest run to just a few dozen. There is no bilingual text, no Rosetta Stone. We do not know what language its makers spoke, and after more than a century of attempts, no proposed decipherment has won scholarly acceptance. The dispute goes even deeper: Farmer, Sproat, and Witzel (2004) argued that the signs may not encode language at all, while specialists like Parpola (1994) maintain that they do. Both positions are live; this course asserts neither. What that means in practice is humbling: a civilization of perhaps a million or more people is known to us **entirely through archaeology**, with no names, no dates in its own voice, no stories.

Notice what is also missing from the digs, because the absence is evidence too. No grand royal tombs. No monumental palaces or unambiguous temples on the Egyptian or Mesopotamian model have been identified (Possehl, 2002). Whether that reflects a genuinely different political order or simply the limits of what survives, archaeologists still debate.

Around **1900 BCE** the urban system faded: cities shrank, writing and the weight system fell out of use, and settlement shifted eastward. The causes are debated (shifting rivers, a weakening monsoon, declining trade), and the old story that invading "Aryans" destroyed the cities is **rejected**: the famous "massacre" once claimed at Mohenjo-daro did not withstand re-examination, and the urban decline predates the period associated with Indo-Aryan migration (Possehl, 2002; Kenoyer, 1998). When a claim dies in the evidence, the course says so.

:::reveal What is the honest, current state of the Indus script, stated with both layers of uncertainty? ||| It is undeciphered: several hundred distinct signs, short inscriptions (the longest only a few dozen signs), no bilingual text, no accepted decipherment, unknown underlying language. And beneath that, scholars actively dispute whether the signs encode language at all (Farmer, Sproat & Witzel 2004 say maybe not; Parpola 1994 says they do). The course asserts neither side.

## Sources
- Kenoyer, J. M. (1998). *Ancient cities of the Indus Valley civilization*. Oxford University Press.
- Possehl, G. L. (2002). *The Indus civilization: A contemporary perspective*. AltaMira Press.
- Farmer, S., Sproat, R., & Witzel, M. (2004). The collapse of the Indus-script thesis: The myth of a literate Harappan civilization. *Electronic Journal of Vedic Studies, 11*(2), 19-57.
- Parpola, A. (1994). *Deciphering the Indus script*. Cambridge University Press.
- UNESCO World Heritage Centre. (n.d.). *Archaeological ruins at Moenjodaro*. https://whc.unesco.org/en/list/138/`,
      recallContent: [
        {
          prompt: "Give the Indus civilization's mature dates, two cities in each modern country, and its scale.",
          answer:
            "Mature urban phase c. 2600-1900 BCE. Mohenjo-daro and Harappa (present-day Pakistan); Dholavira and Rakhigarhi (present-day India). Well over a thousand recorded settlements, covering an area larger by common estimates than Egypt and Mesopotamia combined.",
        },
        {
          prompt: "What physical evidence shows Indus cities were planned, and what is notably absent from the digs?",
          answer:
            "Regular street alignments, standardized fired bricks, a single weight system across sites, covered street drains with house connections, bathing platforms, and the Great Bath at Mohenjo-daro. Absent: readable texts, named rulers, grand royal tombs, and unambiguous palaces or temples.",
        },
      ],
    },
    {
      slug: "asia-maurya-ashoka",
      title: "4 · Maurya: the emperor who published his conscience",
      section: "Section 2 · South Asia: Indus to the Mughals",
      body: `About fifteen centuries after the Indus cities faded, South Asia produced its first documented empire, and with it one of the strangest royal documents in world history: an emperor's public statement of remorse, carved on rocks across a subcontinent.

**Chandragupta Maurya** seized power in the Ganges kingdom of Magadha around **321 BCE**, in the turbulence after Alexander of Macedon's armies withdrew from the Indus region, and built an empire from his capital at **Pataliputra** (near modern Patna). A Greek ambassador, **Megasthenes**, lived at that court and wrote an account of it; his book survives only in fragments quoted by later authors, so historians use it carefully (Thapar, 2002). Note what this already tells you: large-scale empire, professional armies, and diplomatic exchange with the Hellenistic world are features of South Asian history from the fourth century BCE, two thousand years before any European power ruled an acre of it.

The empire's most famous ruler is Chandragupta's grandson, **Ashoka** (reigned c. 268-232 BCE). Early in his reign he conquered **Kalinga**, on India's east coast. Then he did something no other ancient conqueror is known to have done: he had his reaction inscribed on stone, in public, across his empire. In his 13th Major Rock Edict, Ashoka states, in the edict's own figures, that a hundred and fifty thousand people were deported from Kalinga, a hundred thousand were killed, and many times that number perished, and that the killing "weighed heavily on his mind." Treat the numbers as Ashoka's claim rather than a verified census; ancient royal figures are rhetoric as much as arithmetic. But the document itself is real and datable, and its content is unique: a king advertising his own war's cost as a moral failure (Thapar, 2012).

The **edicts** are the earliest substantial body of readable royal writing from South Asia: inscriptions on rocks and polished stone pillars, mostly in **Prakrit** written in the **Brahmi** script (with **Kharosthi** in the northwest, and at Kandahar, in present-day Afghanistan, a bilingual edict in **Greek and Aramaic**, addressed to the region's Hellenistic and Aramaic-reading population). In them Ashoka promotes what he calls *dhamma*: non-injury, truthfulness, respect across sects, provision of medical care and wells along roads. He also patronized Buddhism, and the Sri Lankan chronicles credit missions in his era, including his son Mahinda's to Sri Lanka, with carrying it beyond India; per the chronicles, note, which are later and devotional (Thapar, 2012). The lion capital of his pillar at Sarnath is today the national emblem of India.

Here is the detail that connects this lesson to the whole course's method. After the Maurya empire ended, the Brahmi script was gradually forgotten in India itself. For centuries, people lived among Ashoka's pillars and could not read them. The script was deciphered in **1837** by **James Prinsep**, an East India Company mint official working with Indian pandits and accumulated scholarship, and only then did Ashoka re-emerge from legend into documented history (Thapar, 2012). Records get lost, and recovered, and the recovery is itself work you can date and attribute.

One caution against the romance trap. Ashoka's remorse did not dissolve his empire: the edicts announce that he retained Kalinga, and they warn the forest peoples that he has power to punish. The Mauryan state ran on taxation, an army, and, per the political manual tradition associated with it, surveillance. An empire with a conscience is still an empire. This course will say the same about every state it admires.

:::reveal What makes Ashoka's 13th Major Rock Edict unique among ancient royal inscriptions, and how should its casualty figures be read? ||| It is a conqueror's public, carved admission that his own war was a moral failure: it reports (in its own figures) 150,000 deported and 100,000 killed at Kalinga and says this weighed on the king's mind. The numbers should be read as Ashoka's claim, royal rhetoric rather than a verified census; what is solid is the datable document and its unprecedented content.

## Sources
- Thapar, R. (2012). *Aśoka and the decline of the Mauryas* (3rd ed.). Oxford University Press.
- Thapar, R. (2002). *Early India: From the origins to AD 1300*. University of California Press.
- Dhammika, S. (Trans.). (1993). *The edicts of King Asoka: An English rendering*. Buddhist Publication Society.`,
      recallContent: [
        {
          prompt: "Date the Maurya empire's founding and Ashoka's reign, and name the capital.",
          answer:
            "Chandragupta Maurya took power in Magadha c. 321 BCE, after Alexander's withdrawal from the Indus region; capital Pataliputra (near modern Patna). Ashoka reigned c. 268-232 BCE.",
        },
        {
          prompt: "In what languages and scripts were Ashoka's edicts written, and who read them again after they were forgotten?",
          answer:
            "Mostly Prakrit in the Brahmi script, Kharosthi in the northwest, plus a Greek-and-Aramaic bilingual at Kandahar. Brahmi was forgotten for centuries and deciphered in 1837 by James Prinsep, building on Indian pandits' and earlier scholars' work.",
        },
      ],
    },
    {
      slug: "asia-gupta-zero",
      title: "5 · Gupta India and the numerals you are using right now",
      section: "Section 2 · South Asia: Indus to the Mughals",
      body: `Look at any number on your screen. The system you are reading it in, ten digits, place value, a zero, was worked out in India, and this lesson traces exactly what is documented about that, because few claims in world history are misstated more often in both directions.

The **Gupta empire** (c. **320-550 CE**) united much of northern India from, again, Magadha. Historians often label its era a "classical age" of Sanskrit culture, a convention worth a hedge (golden-age labels always are; this was also a society of hardening caste hierarchy, which Section 6 takes up). What is concrete: courtly Sanskrit literature reached a peak associated with the poet **Kalidasa**; and the Buddhist monastery-university at **Nalanda**, founded in this period, would draw students from across Asia for centuries, including the Chinese pilgrim Xuanzang in the 600s (Thapar, 2002).

Now the mathematics, stated link by documented link (Plofker, 2009):

- **Place value.** The astronomer **Aryabhata**, writing his *Aryabhatiya* in **499 CE**, computed with a decimal place-value system, gave a value of pi accurate to four decimal places, built early trigonometric tables, and proposed that the earth rotates. Place-value notation is in confident use in Indian mathematics from at least this period.
- **Zero as a number.** Several ancient systems, Babylonian and Maya among them, used a placeholder for an empty position. The documented Indian contribution is bigger: treating zero as a **number you can calculate with**. **Brahmagupta**, in his *Brahmasphutasiddhanta* (**628 CE**), states rules for arithmetic with zero and with negative numbers, the earliest known text to do so systematically. (He also ruled that zero divided by zero is zero, which is wrong, and the honesty of recording a great mathematician's error is part of this course's method.)
- **The oldest physical zeros.** A dot-zero appears in a Khmer inscription in Cambodia dated **683 CE**, and the **Gwalior temple inscription** of **876 CE** is the classic securely dated zero in India, written much as we write it. The **Bakhshali manuscript**, a birch-bark mathematical text with hundreds of dot-zeros, made headlines in 2017 when radiocarbon tests at the Bodleian Library returned dates spanning roughly the third to tenth centuries CE; specialist historians of Indian mathematics immediately disputed the library's "oldest zero" framing, arguing the manuscript's text is a unified later composition (Plofker et al., 2017). So: the headline is contested; Gwalior 876 is safe; Brahmagupta 628 is textual bedrock.
- **Transmission.** In Abbasid Baghdad around the **820s CE**, the mathematician **al-Khwarizmi** wrote a treatise on calculating with the Indian numerals; Arabic mathematicians themselves called the system "Hindi" reckoning. Latin translations of such works, and Fibonacci's *Liber Abaci* (**1202**), carried the digits into Europe, which is why Europeans called them "Arabic numerals." The label records the messenger, not the origin, and both deserve credit: Indian invention, Arabic transmission and development, European adoption (Plofker, 2009). That chain, India to Baghdad to Europe, is this course's connective tissue in miniature, and you will see it again in Section 5.

Why does this lesson matter beyond trivia? Because it models how to make a "who invented it" claim survive scrutiny: name the text, name the date, separate placeholder from number, flag the contested manuscript, and credit the transmission chain. "India invented our numbers" done sloppily invites debunking; done precisely, it is one of the best-documented facts in the history of science.

:::reveal Lay out the documented chain for zero and the decimal numerals, with dates, including the contested link. ||| Place value in use by Aryabhata's Aryabhatiya (499 CE); zero treated as a number with arithmetic rules in Brahmagupta's Brahmasphutasiddhanta (628 CE); physical zeros in a Khmer inscription (683 CE) and the Gwalior inscription (876 CE). The Bakhshali manuscript's radiocarbon dates (3rd-10th centuries) are CONTESTED as evidence for an earlier zero (Plofker et al., 2017). Transmission: al-Khwarizmi in Baghdad (c. 820s) wrote on the Indian numerals; Fibonacci's Liber Abaci (1202) helped carry them into Europe, hence the misnomer "Arabic numerals."

## Sources
- Plofker, K. (2009). *Mathematics in India*. Princeton University Press.
- Plofker, K., Keller, A., Hayashi, T., Montelle, C., & Wujastyk, D. (2017). The Bakhshālī manuscript: A response to the Bodleian Library's radiocarbon dating. *History of Science in South Asia, 5*(1), 134-150.
- Thapar, R. (2002). *Early India: From the origins to AD 1300*. University of California Press.`,
      recallContent: [
        {
          prompt: "What exactly did Brahmagupta do in 628 CE, and what error of his does the course record?",
          answer:
            "In the Brahmasphutasiddhanta he stated systematic rules for arithmetic with zero and with negative numbers, the earliest known text to treat zero as a number to calculate with. He also ruled that zero divided by zero equals zero, which is wrong; the course records the error deliberately.",
        },
        {
          prompt: "Why are 'our numbers' called Arabic numerals, and what does the course say the label records?",
          answer:
            "Because Europe received them via the Arabic world: al-Khwarizmi wrote on calculation with the Indian numerals in Baghdad c. 820s, and Latin translations plus Fibonacci's Liber Abaci (1202) spread them in Europe. The label records the messenger, not the origin; Arabic mathematicians themselves called it Hindi reckoning.",
        },
      ],
    },
    {
      slug: "asia-mughals",
      title: "6 · The Mughals: an empire of outsiders, before the Europeans",
      section: "Section 2 · South Asia: Indus to the Mughals",
      body: `The last South Asian empire before British rule was founded by a Central Asian prince who wrote poetry in Turkic, traced his ancestry to both Timur and Genghis Khan, and had never seen India until he invaded it. Getting the Mughals right is the fastest way to get "European colonization" right, so this lesson does both.

**Babur**, a Timurid ruler from the Fergana valley in present-day Uzbekistan, defeated the Delhi sultan Ibrahim Lodi at the **First Battle of Panipat in 1526** and founded the dynasty Europeans came to call **"Mughal," a Persian form of "Mongol."** Even the name is an outsiders' label for outsiders. Babur's own memoir, the *Baburnama*, is refreshingly frank about what he was doing: conquering, and not always admiring what he found. The empire he founded was Muslim-ruled, Persian-speaking at court, and governed a population that remained mostly non-Muslim throughout (Richards, 1993; Eaton, 2019).

His grandson **Akbar** (reigned **1556-1605**) built the machine that made the dynasty durable: a graded imperial service (the *mansabdar* system) that folded Rajput and other Hindu elites into the ruling class, systematic land-revenue measurement associated with his minister Todar Mal, abolition of the tax on non-Muslim pilgrims and then of the *jizya* poll tax, and a court policy of *sulh-i kul*, "peace with all," that staged debates among Muslim, Hindu, Jain, Zoroastrian, and Christian scholars (Richards, 1993). Hedge where the record demands it: Akbar's much-cited "new religion," the *Din-i Ilahi*, was a small court discipleship circle, not a mass faith, and historians debate whether "religion" is even the right word for it (Eaton, 2019).

The Mughal economy is where this course's central thesis gets concrete. In Maddison's (2007) reconstruction, read with the caveats from Lesson 2, the subcontinent under the Mughals was roughly a **quarter of world output around 1700**, and Mughal **Bengal's** cotton weavers supplied textiles to buyers from Southeast Asia to Europe. When England's ambassador **Sir Thomas Roe** reached Emperor Jahangir's court in **1615**, he came as a supplicant asking trade permission, and European trading companies operated for the next century-plus at the empire's sufferance, from coastal footholds (Richards, 1993). Shah Jahan's **Taj Mahal** (completed mid-1600s; UNESCO World Heritage since 1983) is the era's best-known monument, built at the center of that wealth.

Now the teaching point the course title depends on. **The Mughals were themselves outsiders who conquered and ruled India for two centuries before any European power ruled any of it.** Conquest, foreign dynasties, religious difference between rulers and ruled, extraction of revenue: all of it was present in South Asia long before 1757. So "European colonization" cannot mean "the arrival of outsiders"; it names something more specific, and the difference is worth stating carefully. The Mughals settled where they ruled; Delhi and Agra were the empire's centers, its wealth was largely spent and reinvested inside the subcontinent, and the dynasty became a South Asian dynasty. British rule, by contrast, was run by a company and then a distant crown, with sovereignty, profits, and final decisions seated in London. Historians argue about how much weight each difference carries, and the follow-on Great Divergence course takes that up; what this course asserts is only the datable sequence.

That sequence, precisely: **Aurangzeb**, the last of the powerful emperors, died in **1707**; the empire fragmented into successor states over the following decades; and the East India Company's victory at **Plassey (1757)** and its acquisition of the **diwani** (revenue rights) of Bengal in **1765** began territorial European rule, with a Mughal emperor surviving as a figurehead in Delhi until the British deposed the last one in 1857 (Richards, 1993). European colonization of India was real, datable, and transformative. It was not the beginning of Indian contact with conquest, and a course that taught it that way would flatten two millennia of documented South Asian statecraft into a waiting room.

:::reveal Why do the Mughals prove that "European colonization" cannot simply mean "outsiders arrived," and what does the course say it does mean here? ||| Because the Mughals WERE outsiders: a Central Asian, Persian-speaking, Muslim dynasty (Babur, descended from Timur and Genghis Khan, took Delhi in 1526) ruling a mostly non-Muslim subcontinent for two centuries before Plassey (1757). "European colonization" names something more specific and datable: rule seated abroad, with sovereignty and profits flowing to a distant company and crown, beginning territorially with Plassey and the 1765 Bengal diwani, whereas the Mughals settled, spent, and became a South Asian dynasty.

## Sources
- Richards, J. F. (1993). *The Mughal Empire* (The New Cambridge History of India, I.5). Cambridge University Press.
- Eaton, R. M. (2019). *India in the Persianate Age, 1000-1765*. University of California Press.
- Maddison, A. (2007). *Contours of the world economy, 1-2030 AD: Essays in macro-economic history*. Oxford University Press.
- UNESCO World Heritage Centre. (n.d.). *Taj Mahal*. https://whc.unesco.org/en/list/252/`,
      recallContent: [
        {
          prompt: "Who founded the Mughal empire, when, from where, and what does the dynasty's name mean?",
          answer:
            "Babur, a Timurid prince from the Fergana valley (present-day Uzbekistan), descended from Timur and Genghis Khan, defeated Ibrahim Lodi at the First Battle of Panipat in 1526. 'Mughal' is a Persian form of 'Mongol,' an outsiders' label for an outsider dynasty.",
        },
        {
          prompt: "Give the datable sequence from Mughal peak to European territorial rule.",
          answer:
            "Akbar's consolidation 1556-1605; Roe arrives as a supplicant at Jahangir's court 1615; Maddison's estimate puts the subcontinent at roughly a quarter of world output c. 1700; Aurangzeb dies 1707 and the empire fragments; Plassey 1757; the Company takes Bengal's diwani 1765; the last Mughal is deposed 1857.",
        },
      ],
    },
    {
      slug: "asia-quiz-2",
      title: "Section 2 quiz · South Asia",
      section: "Section 2 · South Asia: Indus to the Mughals",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are the dates of the Indus civilization's mature urban phase?",
            options: [
              "Roughly 2600-1900 BCE",
              "Roughly 1500-1000 BCE",
              "Roughly 3500-3000 BCE",
              "Roughly 800-400 BCE",
            ],
            correctIndex: 0,
            explanation:
              "Contemporary with Old Kingdom Egypt and Sumer's cities; Mesopotamian texts record trade with a land called Meluhha, usually identified with the Indus region.",
            sourceLessonSlug: "asia-indus-cities",
          },
          {
            prompt: "What is the current scholarly status of the Indus script?",
            options: [
              "Undeciphered, with no accepted reading; scholars even dispute whether it encodes language at all",
              "Deciphered in 1837 by James Prinsep",
              "Readable but only partially translated",
              "Proven to be an early form of Sanskrit",
            ],
            correctIndex: 0,
            explanation:
              "No bilingual text exists, inscriptions are short, and no decipherment has won acceptance. Farmer, Sproat & Witzel (2004) argue the signs may not encode language; Parpola (1994) maintains they do.",
            sourceLessonSlug: "asia-indus-cities",
          },
          {
            prompt: "Which feature is the Indus cities' engineering signature?",
            options: [
              "Municipal water infrastructure: covered street drains, house connections, bathing platforms, the Great Bath",
              "Stone pyramids over royal tombs",
              "Massive city walls with chariot gates",
              "Aqueducts on arched bridges",
            ],
            correctIndex: 0,
            explanation:
              "Standardized bricks and weights point to shared rules over a huge area; what is missing (readable texts, named kings, unambiguous palaces or temples) is evidence too.",
            sourceLessonSlug: "asia-indus-cities",
          },
          {
            prompt: "What happened to the old claim that invading 'Aryans' destroyed the Indus cities?",
            options: [
              "It is rejected: the claimed massacre evidence did not withstand re-examination, and the urban decline predates the migration period",
              "It was confirmed by radiocarbon dating",
              "It remains the leading explanation",
              "It was replaced by proof of a volcanic eruption",
            ],
            correctIndex: 0,
            explanation:
              "The decline c. 1900 BCE is real; its causes (river shifts, weakening monsoon, trade decline) are debated. When a claim dies in the evidence, the course says so.",
            sourceLessonSlug: "asia-indus-cities",
          },
          {
            prompt: "What is unique about Ashoka's 13th Major Rock Edict?",
            options: [
              "A conqueror publicly inscribed remorse for his own war, reporting its deportations and deaths as a moral failure",
              "It is the oldest writing found in India",
              "It abolished the Mauryan army",
              "It was written in Latin",
            ],
            correctIndex: 0,
            explanation:
              "No other ancient conqueror is known to have published such a statement. Its figures (150,000 deported, 100,000 killed, in the edict's own numbers) are Ashoka's claim, not a verified census.",
            sourceLessonSlug: "asia-maurya-ashoka",
          },
          {
            prompt: "How should the casualty figures in Ashoka's Kalinga edict be treated?",
            options: [
              "As the king's own reported figures, royal rhetoric rather than verified statistics",
              "As exact counts from an imperial census",
              "As a later forgery",
              "As referring to animals, not people",
            ],
            correctIndex: 0,
            explanation:
              "The document is real and datable; the numbers are its author's. Separating the two is the same discipline the course applies to Maddison's percentages.",
            sourceLessonSlug: "asia-maurya-ashoka",
          },
          {
            prompt: "What happened to the Brahmi script of Ashoka's edicts after the Mauryas?",
            options: [
              "It was gradually forgotten in India and deciphered only in 1837, by James Prinsep working with Indian pandits' scholarship",
              "It remained in continuous use until today",
              "It was banned by the Guptas",
              "It was never written down",
            ],
            correctIndex: 0,
            explanation:
              "For centuries people lived among pillars they could not read. Records get lost and recovered, and the recovery is datable, attributable work.",
            sourceLessonSlug: "asia-maurya-ashoka",
          },
          {
            prompt: "Which languages appear on Ashoka's Kandahar edict, and why does that matter?",
            options: [
              "Greek and Aramaic, showing the Mauryan state addressed its Hellenistic and Aramaic-reading subjects in their own languages",
              "Sanskrit and Tamil, showing a north-south divide",
              "Chinese and Prakrit, showing Silk Road contact",
              "Latin and Greek, showing Roman influence",
            ],
            correctIndex: 0,
            explanation:
              "The empire's northwest reached into present-day Afghanistan, where Alexander's successors had settled Greek speakers; most edicts elsewhere are Prakrit in Brahmi or Kharosthi.",
            sourceLessonSlug: "asia-maurya-ashoka",
          },
          {
            prompt: "What is the earliest known text to state systematic rules for arithmetic with zero?",
            options: [
              "Brahmagupta's Brahmasphutasiddhanta, 628 CE",
              "Aryabhata's Aryabhatiya, 499 CE",
              "Fibonacci's Liber Abaci, 1202",
              "Euclid's Elements, c. 300 BCE",
            ],
            correctIndex: 0,
            explanation:
              "Aryabhata computed with place value; Brahmagupta treated zero (and negatives) as numbers with stated rules, though he wrongly ruled that zero divided by zero is zero.",
            sourceLessonSlug: "asia-gupta-zero",
          },
          {
            prompt: "Why is the Bakhshali manuscript's 'world's oldest zero' claim taught as contested?",
            options: [
              "Its 2017 radiocarbon dates span roughly the 3rd to 10th centuries, and specialist historians dispute the oldest-folio framing (Plofker et al., 2017)",
              "The manuscript was proven to be a modern forgery",
              "It contains no zeros at all",
              "Radiocarbon dating cannot be applied to birch bark",
            ],
            correctIndex: 0,
            explanation:
              "The safe anchors are textual and epigraphic: Brahmagupta 628 CE, the Khmer inscription of 683 CE, and the Gwalior inscription of 876 CE.",
            sourceLessonSlug: "asia-gupta-zero",
          },
          {
            prompt: "Why are the decimal digits called 'Arabic numerals' in Europe?",
            options: [
              "Europe received them via the Arabic world (al-Khwarizmi c. 820s; Fibonacci 1202); the label records the messenger, not the Indian origin",
              "They were invented in Baghdad",
              "Arab traders invented them for bookkeeping",
              "The name was chosen at random",
            ],
            correctIndex: 0,
            explanation:
              "Arabic mathematicians themselves called the system Hindi reckoning. Indian invention, Arabic transmission and development, European adoption: all three links deserve credit.",
            sourceLessonSlug: "asia-gupta-zero",
          },
          {
            prompt: "Who founded the Mughal empire, and where was he from?",
            options: [
              "Babur, a Timurid prince from the Fergana valley in Central Asia, who won at Panipat in 1526",
              "Akbar, a Rajput king from Gujarat",
              "Aurangzeb, a Persian shah",
              "Ashoka, from Magadha",
            ],
            correctIndex: 0,
            explanation:
              "He traced descent from both Timur and Genghis Khan; 'Mughal' is a Persian form of 'Mongol.' The dynasty was outsiders by origin and became South Asian by settlement.",
            sourceLessonSlug: "asia-mughals",
          },
          {
            prompt: "What did Akbar's statecraft include?",
            options: [
              "Folding Hindu elites into the imperial service, revenue reform, abolishing the jizya, and staged interfaith debate at court",
              "Forced conversion of the whole population",
              "Abolition of taxation",
              "Closing India to all foreign trade",
            ],
            correctIndex: 0,
            explanation:
              "The mansabdar system and sulh-i kul made a minority-led dynasty durable. His Din-i Ilahi is hedged as a small court circle, not a mass religion.",
            sourceLessonSlug: "asia-mughals",
          },
          {
            prompt: "What was Sir Thomas Roe's position when he reached Jahangir's court in 1615?",
            options: [
              "A supplicant ambassador asking trade permission from a far richer empire",
              "A conqueror dictating terms",
              "A colonial governor taking office",
              "A missionary banned from court",
            ],
            correctIndex: 0,
            explanation:
              "For a century-plus after Roe, European companies operated at Mughal sufferance from coastal footholds; Maddison's (2007) estimate puts the subcontinent at roughly a quarter of world output c. 1700.",
            sourceLessonSlug: "asia-mughals",
          },
          {
            prompt: "Which sequence correctly orders the end of Mughal power and the start of British territorial rule?",
            options: [
              "Aurangzeb dies 1707 → fragmentation → Plassey 1757 → Bengal diwani 1765 → last emperor deposed 1857",
              "Plassey 1757 → Aurangzeb dies 1707 → diwani 1765",
              "Diwani 1765 → Panipat 1526 → Plassey 1757",
              "Last emperor deposed 1857 → Plassey 1757 → Aurangzeb dies 1707",
            ],
            correctIndex: 0,
            explanation:
              "The Company's rule began territorially in Bengal after Plassey and the 1765 revenue grant, amid the fragmentation that followed Aurangzeb's death in 1707.",
            sourceLessonSlug: "asia-mughals",
          },
        ],
      },
    },
  ],
};
