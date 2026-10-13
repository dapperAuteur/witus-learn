import type { AuthoredCourse } from "./authored-course";

// "Sound Craft" (Careers & Media, also listed in Storytelling). Slug `sound-craft`.
// Series `the-crew-behind-the-show` ("The Crew Behind the Show"), code CREW, position 02;
// CREW-01 is `stage-and-broadcast-rigging` and CREW-03 is `light-on-set`. `voice-acting`,
// `oral-history` and `broadcasting-break-in` stay outside the series and are linked by lesson.
//
// RESEARCH TIER 2 for the hearing lessons (5, 6), any build list for a sound-making device (19, 22,
// and the effect half of 26) and the licensing lesson (24); TIER 1 for the rest
// (docs/course-method/README.md; brief header).
// Brief:   plans/future-courses/careers-and-media/2026-10-06-sound-craft-brief.md
//          (approved by BAM 2026-10-08, section 8: a course, public, in the CREW series, research
//          tier 2 where the brief says so; lessons that need a reviewer or practitioner are marked).
// Dossier: plans/future-courses/careers-and-media/_research-2026-10-06/sound-sources.md
//          Only its VERIFIED lines are asserted, plus the VERIFIED lines N1 to N4 in brief section 6
//          (the 1986 to 1989 Army television subcourses and O*NET 27-4014.00) and rigging-sources.md
//          S19 (O*NET 27-4011.00). DERIVED lines appear only with their arithmetic or reasoning shown
//          (lessons 1, 5, 6, 13). REPORTED lines (the Foley story beyond the FilmSound page's own
//          words, CineMontage, the encyclopedia trace, xeno-canto, CDC) are never asserted; lesson 21
//          names them as unread or unconfirmed. UNVERIFIED items are left out and said to be left out.
//          Translations from Brachart (1913) are ours, as the dossier marks them.
//
// VISIBILITY: PUBLIC, and HELD ("Coming soon") until a NAMED qualified reviewer has read every
// lesson marked QR, and a practitioner has read every lesson marked P, each with authority to change
// or cut it. The publishHoldReason in scripts/seed-courses.ts says so. No reviewer is named yet
// (brief questions 3 and 4). Lesson 18 does not ship without a practitioner (brief section 2).
//
// WHAT IT IS NOT, said in the description and in lessons 1, 5 and 25: a qualification, a
// hearing-conservation program, legal advice on recording people, or a build manual. No consent law
// is stated anywhere. No dBFS target is given. Brachart's lead-plate thunder crack and scrap-iron
// artillery are shown as history only and never as builds.
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line naming who must act.
//   QR (qualified reviewer):
//     5, 6   an occupational-noise or hearing-conservation professional (brief marks 2.1, 2.2)
//     19, 22 a safety reviewer for every device description before it becomes a build list
//            (brief marks 5.1, 5.4 "QR for any build list")
//     24     a licensing reviewer (added here: the brief makes 6.2 tier 2, "QR by a licensing
//            reviewer, or taught only by quoting the Creative Commons deeds and the Freesound FAQ";
//            the CC deeds are not in the dossier, so the QR route is taken)
//     26     a safety reviewer for the capstone's made-sound half (added here: it points at the
//            build lists in 19 and 22)
//   P (practitioner or BAM's demonstration):
//     14     a theater sound designer or operator (brief 4.1)
//     15, 16 a production sound mixer or boom operator (brief 4.2, 4.3)
//     18     a production sound mixer, boom operator or BAM (brief 4.5; does not ship without one)
//     22     BAM's demonstration of made sounds beside the NPS clips (brief 5.4)
//   Unmarked: 1 to 4, 7 to 13 (9 is the practice drill), 17, 20, 21, 23, 25. Lesson 23 states no
//   consent law; if a later edit adds any, it becomes QR (a lawyer, or a fetched statute per state).
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, may be hosted on Cloudinary later: NPS page TEXT and clips credited "NPS" (S1 to S5, S7,
//    the S6 article text, the S8 manual); 29 CFR 1910.95; NIOSH 98-126 TEXT (its front-cover photos
//    are copyrighted: link the PDF, never host the cover); NOAA and NCEI text (S10, S11; their
//    third-party photos and graphics are not hosted); the USGS image page (S12); Brachart 1913 (S16,
//    out of copyright); the 1928 USDA and 1942 AAA texts (S17, S18); the Army subcourses N1 (PDF 1 is
//    a reseller page: remove it before hosting) and N3; O*NET pages (CC BY 4.0, attribute the U.S.
//    Department of Labor, Employment and Training Administration).
//  - Held to LINK ONLY although marked A: the Library of Congress fieldwork guide (S9; contributors'
//    federal authorship is reported, photos individually credited) and N2 (its lessons say they were
//    derived in part from Wurtzel's Television Production). Short quotations, linked.
//  - Tier B, link only, never rehost: Jacob Job's recordings and photos (S6), the FilmSound.org page
//    (S19), CineMontage (S20), Freesound (S22; a single CC0 or CC BY sound becomes A only after its own
//    page is checked), xeno-canto (S23), and the university and park libraries S1 links.
//  - Copyrighted standards: ANSI S3.6-1969, incorporated by reference in 1910.95(h)(2), is named and
//    never reproduced. Any ANSI or ESTA E1 standard a reviewer adds is cited and linked to its listing
//    page, never reproduced. Tier C books (Turnbull 1951, Napier 1962, Mott 2009, Viers 2008) are not
//    used.
//  - FIGURES: none embedded. Spectrograms are described and the learner is sent to the clip pages.
//
// STANDARDS: unmapped for now (BACKLOG entry in scripts/check-standards-coverage.ts). NGSS waves (PS4)
// and a CTE standard for A/V production are the candidates once a reviewer has read the lessons.
//
// HEDGES WRITTEN INTO LESSONS (each needs a check in src/lib/research-checks.ts; the report that
// accompanies this draft quotes each sentence):
//  - L2 and L24: the terms of the CSU, Rocky Mountain and Glacier Bay libraries linked from the NPS
//    gallery are unread.
//  - L6: how OSHA's "should" in the Table G-16 footnote is enforced; blanks and pyrotechnics on a set.
//  - L7: whether recording on national park or other public land needs a permit.
//  - L10: names for the Library of Congress guide's two-microphone setups.
//  - L11: the license on SanctSound's archived audio.
//  - L12: why the NPS manual asks for the departure time (this course's reading, flagged as such).
//  - L14: whether a full audience changes a hall the way furniture changes a room.
//  - L15: rules for wireless microphone frequencies; timecode and current set kit.
//  - L16: current practice for hiding a lavalier; boom technique.
//  - L17: the meanings of N1's three meter phrases (not in the dossier); no digital-meter target.
//  - L18: room tone, wild tracks, slating, timecode and the sound report.
//  - L19: Brachart's thunder-sheet dimensions (OCR garbled, page image unchecked).
//  - L21: Foley's 1952 column and the sound version of Show Boat (no primary document found).
//  - L23: consent law for recording people; releases for commercial use; union rules on sets.
//  - L24: xeno-canto's terms (bot wall); the Creative Commons deeds (not read).
//
// House style, matching stage-and-broadcast-rigging-course.ts and making-string-course.ts:
// `section` on every lesson; flush-left single-line `:::reveal q ||| a`; recallContent from the second
// teaching lesson on, quizzing the teaching lesson before; an APA 7 `## Sources` block on every
// teaching lesson with a locator on every entry (CFR paragraph; printed page AND PDF page where they
// differ: the S9 guide is PDF = printed + 6, NIOSH Arabic pages PDF = printed + 18, Brachart PDF =
// printed + 4, N1 and N2 as given per page; the NPS manual's printed and PDF pages match); a quiz per
// section pooled to round(words / 35), clamped 40 to 100, serving 5, passing 80, shuffled; a final
// pooling 40+ and serving 10, placed last. Option lengths are balanced within each question so the
// correct option is neither visibly the longest nor the shortest. American spelling in prose;
// quotations keep their own spelling. No em or en dashes anywhere: where a source prints a dash, the
// quotation is split at it.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
// National Park Service works sharing an author and a year carry APA 7 letters, ordered by title.
const NPS_DISCLAIMER = "National Park Service. (2025a, March 5). *Disclaimer*. https://www.nps.gov/aboutus/disclaimer.htm";
const NPS_RAIN =
  "National Park Service. (2025b, May 5). *Rain* [Sound clip page]. Sound gallery. https://www.nps.gov/subjects/sound/sounds-rain.htm";
const NPS_GALLERY =
  "National Park Service. (2025c, September 3). *Sound gallery* [Natural Sounds]. U.S. Department of the Interior. https://www.nps.gov/subjects/sound/gallery.htm";
const YELL_LIBRARY =
  "National Park Service. (2025d, April 17). *Sound library* [Yellowstone National Park]. https://www.nps.gov/yell/learn/photosmultimedia/soundlibrary.htm";
const NPS_STREAM =
  "National Park Service. (2025e, May 7). *Stream* [Sound clip page]. Sound gallery. https://www.nps.gov/subjects/sound/sounds-stream.htm";
const NPS_THUNDER =
  "National Park Service. (2025f, May 1). *Thunder* [Sound clip page]. Sound gallery. https://www.nps.gov/subjects/sound/sounds-thunder.htm";
const NPS_DATA = "National Park Service. (2025g, July 16). *Types of data* [Natural Sounds]. https://www.nps.gov/subjects/sound/data.htm";
const NPS_FIELD = "National Park Service. (2018a, August 20). *In the field* [Natural Sounds]. https://www.nps.gov/subjects/sound/field.htm";
const NPS_UNDERSTANDING =
  "National Park Service. (2018b, July 3). *Understanding sound* [Natural Sounds]. https://www.nps.gov/subjects/sound/understandingsound.htm";
const NPS_WEST =
  "West, J. (2025, March 10, last updated). *Deep listening brings rewards* [Article]. National Park Service, Natural Sounds and Night Skies Division. https://www.nps.gov/articles/deeplisteningbringsrewards.htm";
const NPS_MANUAL =
  "National Park Service, Natural Sounds and Night Skies Division. (2013, May 20). *Acoustical monitoring training manual* (Revision May 20, 2013). https://www.nps.gov/subjects/sound/upload/NSNSDTrainingManual_AcousticalAmbientMonitoring-508-2.pdf";
const AFC =
  "Winick, S., & Bartis, P. (2016). *Folklife and fieldwork: An introduction to cultural documentation* (4th ed.; Publications of the American Folklife Center, No. 3). Library of Congress. https://www.loc.gov/item/2019667028/";
const NOAA_PAM =
  "NOAA Fisheries, Northeast Fisheries Science Center. (2025, September 23, last updated). *Passive acoustic research in the Northeast*. https://www.fisheries.noaa.gov/new-england-mid-atlantic/endangered-species-conservation/passive-acoustic-research-northeast";
const SANCTSOUND =
  "National Centers for Environmental Information. (2022, April 22). *SanctSound: Studying the underwater world of sound* [News]. NOAA. https://www.ncei.noaa.gov/node/2092";
const USGS_MONITOR =
  "U.S. Geological Survey. (n.d.). *Tom explains bioacoustic monitor to USGS scientists* [Image]. https://www.usgs.gov/media/images/tom-explains-bioacoustic-monitor-usgs-scientists";
const CFR_1910_95 = "Occupational noise exposure, 29 C.F.R. § 1910.95 (2026). https://www.ecfr.gov/current/title-29/section-1910.95";
const NIOSH =
  "National Institute for Occupational Safety and Health. (1998). *Criteria for a recommended standard: Occupational noise exposure, revised criteria 1998* (DHHS [NIOSH] Publication No. 98-126). https://stacks.cdc.gov/view/cdc/6376";
const BRACHART =
  "Brachart, A. (1913). *Machinerie scénique et bruits de coulisses* (2e éd. augmentée et illustrée). P.-V. Stock; E. Lelong. https://archive.org/details/machineriescni00bracuoft";
const USDA_1928 =
  "U.S. Department of Agriculture, Radio Service. (1928). *The neglected crop or The farmer's spare time: A radio drama in one act*. https://archive.org/details/neglectedcroporf1928unit";
const AAA_1942 =
  "U.S. Agricultural Adjustment Administration, Division of Information. (1942, January). *Tips on radio broadcasting*. U.S. Department of Agriculture. https://archive.org/details/CAT10674827";
const ARMY_1987 =
  "Army Public Affairs Center. (1987, October). *Basic television lighting, audio and scenery* (Subcourse DI0370, Ed. 7). https://archive.org/details/di-0370-basic-television-lighting-audio-and-scenary-edition-7";
const ARMY_1989 =
  "U.S. Army Public Affairs Proponent Center. (1989, September). *Plan and produce an electronic field production/television spot announcement* (Subcourse DI0460, Ed. 9). https://archive.org/details/di-0460-plan-and-produce-an-electronic-field-production-television-spot-announcement-edition-9";
const ARMY_1986 = "U.S. Army Signal School. (1986). *Field television production* (Subcourse SS0547-6). https://archive.org/details/ss-0547-field-television-production-edition-6";
const FILMSOUND = "*The story of Jack Foley*. (n.d.). FilmSound.org. https://www.filmsound.org/foley/jackfoley.htm";
const CINEMONTAGE = "Almo, L. (2016, February 1). Why is it called \"Foley\" artist, anyway? *CineMontage*. https://cinemontage.org/called-foley-anyway/";
const FREESOUND_FAQ = "Freesound. (n.d.-a). *Frequently asked questions*. Universitat Pompeu Fabra, Music Technology Group. https://freesound.org/help/faq/";
const FREESOUND_TERMS = "Freesound. (n.d.-b). *Terms of use*. Universitat Pompeu Fabra, Music Technology Group. https://freesound.org/help/tos_web/";
const ONET_LICENSE = "Licensed under CC BY 4.0; attribution: U.S. Department of Labor, Employment and Training Administration.";
const ONET_SOUND = `National Center for O\\*NET Development. (2026). *27-4014.00: Sound engineering technicians*. O\\*NET OnLine. https://www.onetonline.org/link/summary/27-4014.00 ${ONET_LICENSE}`;
const ONET_AV = `National Center for O\\*NET Development. (2026). *27-4011.00: Audio and video technicians*. O\\*NET OnLine. https://www.onetonline.org/link/summary/27-4011.00 ${ONET_LICENSE}`;

/** Page note for the Library of Congress guide, whose PDF runs six pages ahead of its print. */
const AFC_PAGES = "Printed page first, PDF page in parentheses (the PDF runs six pages ahead).";
/** Page note for the NPS manual, whose printed and PDF page numbers match. */
const MANUAL_PAGES = "Printed and PDF page numbers match.";

/** The marker every lesson needing a qualified reviewer opens with (BAM, 2026-10-08). */
const QR = (who: string) => `> **Before release:** needs a qualified reviewer (QR): ${who}.`;
/** The marker every lesson needing a practitioner or BAM's demonstration opens with. */
const P = (what: string) => `> **Before release:** needs a practitioner or BAM's demonstration: ${what}.`;

export const SOUND_CRAFT_COURSE: AuthoredCourse = {
  title: "Sound Craft",
  description:
    "For anyone who wants to come back from a park, a hall or a set with a recording they can trust and defend. The course starts with listening, the way National Park Service technicians are trained to listen, and with what a decibel and a spectrogram actually say. It reads OSHA's noise rule and NIOSH's recommended limit as two documents with two numbers, sets up a recorder that does not quietly change the sound, and plans a field session around season, wind and the recordist's own footprint. It records a performance with two microphones and says what that setup cannot do, reads 1980s Army television courses for the kit, the lavalier and the meter, and marks plainly where film-set practice needs a practitioner. It reads hooves, hail, rain and thunder made by hand in a 1913 Paris stage manual, writes cues the way a 1928 federal radio script did, treats the story of Foley's name as an open record, and reads a sound's license and a person's release before using either. It ends with what O*NET says about sound work. It is not a qualification, a hearing-conservation program or legal advice, and every lesson that needs a qualified reviewer or a practitioner says so at the top. The second course in The Crew Behind the Show series.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: Listening before recording
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "frequency-level-and-the-decibel",
      title: "1 · Frequency, level and the decibel",
      section: "1 · Listening before recording",
      body: `**What this course is for.** By the end you should be able to go outdoors and come back with a recording you can trust and defend; record a performance or an interview on location and say what your setup cannot do; read how sounds were made by hand for the stage and set them beside the real thing; read a sound's license and a person's release before using either; and protect your hearing, knowing which limit is a rule and which is a recommendation.

**What it is not.** It is not a qualification, and finishing it certifies you for nothing. Lessons that touch hearing safety, the building of sound-making devices, licensing, or film-set practice say at the top who must read them before they are released. Lesson 25 shows what training the work itself asks for.

**What it does not repeat.** The catalog already teaches three neighbors of this course, and this course links to them rather than re-teaching them: *Voice Acting: The Instrument*, lessons "10 · Mic technique: distance, angle, and consistency" to "12 · Levels, files, and the honest minimum chain", for a voice in a home booth; *Oral history*, lesson "6 · Recording, metadata, and outliving your laptop", for the seated interview and its files; and *Break Into Sports & Media Broadcasting*, lesson "6 · Signal flow and audio fundamentals", for live broadcast audio.

**Frequency.** The National Park Service's Natural Sounds pages define it this way: "Frequency, sometimes referred to as pitch, is the number of times per second that a sound pressure wave repeats itself." Its unit is the hertz: "The units of frequency are called hertz (Hz). Humans with normal hearing can hear sounds between 20 Hz and 20,000 Hz. Frequencies above 20,000 Hz are known as ultrasound." Sound below 20 Hz is infrasound. Lesson 11 comes back to both.

**Amplitude and the decibel.** "Amplitude is the relative strength of sound waves (transmitted vibrations), which we perceive as loudness or volume. Amplitude is measured in decibels (dB), which refer to the sound pressure level or intensity. The lower threshold of human hearing is 0 dB at 1kHz."

**Why ten more decibels is not ten times louder.** The same page: "Decibels are measured on a logarithmic scale, so an increase of 10 dB causes a doubling of perceived loudness and represents a ten-fold increase in sound level". Its example: if one vacuum cleaner measures 70 dB, "80 dB would be the equivalent of 10 vacuum cleaners." Read the sentence slowly. It says two things about the same 10 dB: the sound is perceived as twice as loud, and the "sound level" is ten times greater. Both cannot describe loudness, so "sound level" here means the physical intensity, ten machines' worth of it, while the ear reports only a doubling. NIOSH, the National Institute for Occupational Safety and Health, states the energy side in its own terms: "a 3-dB increase/decrease represents a doubling or halving of the sound energy." Lesson 5 puts that rule to work.

**dB(A).** "Sound levels adjusted for human hearing are expressed as dB(A)." The noise documents in section 2 write it dBA, and every limit in them is measured that way.

**Words for what you hear.** "Acoustic resources are physical sound sources, including both natural sounds (wind, water, wildlife, vegetation) and cultural and historic sounds (battle reenactments, tribal ceremonies, quiet reverence). Soundscape can be defined as the human perception of those physical sound resources." And: "The acoustic environment is the combination of all the acoustic resources within a given area." Noise has a definition too: "Noise is a sound that is unwanted or inappropriate in an environment." The same sound can be the subject of one recording and the noise in another.

**The park ladder.** The page lists measured levels from national parks:

| dBA | Sound, as the Park Service lists it |
|---|---|
| 0 | Threshold of human hearing |
| 10 | Volcano crater (Haleakala National Park) |
| 20 | Leaves rustling (Canyonlands National Park) |
| 40 | Crickets at 5 m (Zion National Park) |
| 60 | Conversational speech at 5 m (Whitman Mission National Historic Site) |
| 80 | Cruiser motorcycle at 15 m (Blue Ridge Parkway) |
| 100 | Thunder (Arches National Park) |
| 120 | Military jet at 100 m AGL (Yukon-Charley Rivers National Park) |
| 126 | Cannon fire at 150 m (Vicksburg National Military Park) |

Look at the right-hand column. Every row names a place, and most name a distance. A level written down without where it was measured cannot be checked or repeated, so this course asks you to log the place and the distance with every level you record.

:::reveal What range of frequencies can a person with normal hearing hear, according to the Park Service? ||| "between 20 Hz and 20,000 Hz". Above 20,000 Hz is ultrasound; below 20 Hz is infrasound.

:::reveal A sound rises by 10 dB. What happens to its perceived loudness, and to its intensity? ||| Perceived loudness doubles, while the intensity (the page's "sound level") is ten times greater, like ten vacuum cleaners instead of one.

:::reveal Besides the level, what does nearly every row of the park ladder give? ||| A place and, in most rows, a distance, such as "Crickets at 5 m (Zion National Park)".

## Sources
- ${NPS_UNDERSTANDING} Locator: headings "Defining Key Terms" and "Sound Level" (frequency, amplitude, the logarithmic scale, dB(A), noise, acoustic resources, soundscape, acoustic environment), and the table of park sound levels.
- ${NIOSH} Locator: section 3.3, printed p. 25 (PDF p. 43).`,
    },
    {
      slug: "reading-a-spectrogram",
      title: "2 · Reading a spectrogram",
      section: "1 · Listening before recording",
      recallContent: [
        {
          prompt: "What happens to perceived loudness and to intensity when a sound rises by 10 dB?",
          answer: "Perceived loudness doubles; the intensity is ten times greater (the Park Service's \"ten-fold increase in sound level\", like ten vacuum cleaners instead of one).",
        },
        {
          prompt: "How does the Park Service define noise?",
          answer: "\"Noise is a sound that is unwanted or inappropriate in an environment.\"",
        },
      ],
      body: `**A picture of sound.** The Park Service's data page: "Sounds are represented visually using a spectrogram, an image that incorporates frequency (y axis), time (x axis), and amplitude (brightness of color)." Every clip page in its sound gallery carries the same caption under its spectrogram: "Spectrograms are graphs that visualize sounds. The brightness of the colors shows sounds' amplitude (loudness) across different frequencies (pitches), shown from bottom to top, and over time, from left to right."

So: low pitches near the bottom, high pitches near the top, time running left to right, and brighter meaning louder.

**How the parks measure.** "Currently, sound equipment used in the parks can record sounds from 12.5 to 20,000 Hz". The monitoring systems "split the frequency spectrum into 33 smaller ranges, each encompassing one-third of an octave," and "For each one-third octave band, dB level is recorded once per second for the duration of the monitoring period." A park monitor keeps two records at once, as the gallery page says: "The Natural Sounds and Night Skies Division collects data using systems that record audio as mp3 files and sound pressure levels in decibels. These are designed to replicate the hearing experience of a person on the ground."

**Who listens to the recordings.** "Sounds gathered are analyzed at the Protected Areas Research Collaborative (PARC) Listening Lab, a research collaborative between the NPS and the Department of Recreation, Park, and Tourism Management at Pennsylvania State University." The recordings "help technicians identify sounds' source of origin, such as wildlife, weather, park visitors, and park operations."

**Why keep the recording, not just the numbers.** "High-quality archival recordings make it possible to compute any conceivable metric for future analysis. Metrics specified today will likely change and be inadequate to meet all future needs. Digital recordings provide an archival record of the soundscape of the area." Lesson 13 turns that into a habit.

**A practice set you may use.** The gallery's rights line: "The files are in the public domain and may be downloaded. Enjoy, and please give the appropriate credit." Its categories run in alphabetical order from amphibians to reptiles, and include natural sounds such as "Stream", "Rain" and "Thunder" and human-made ones such as "Chain Saw", "Helicopter", "Snowmobile" and "Cannon Fire". Three clip pages to start with, each credited "NPS":
- Stream: "Sound recording of a stream in Muir Woods, Golden Gate National Recreation Area, California."
- Rain: "Sound recording of rain, Devils Postpile National Monument, California."
- Thunder: "Audio recording of thunder, NPS Natural Sounds and Night Skies Division."

Yellowstone keeps its own library: "The files available here were recorded in the park and are in the public domain. They may be downloaded and used without limitation". Its index includes "Old Faithful Geyser", "Mud Pots" and "Thunder".

**Two cautions.** The clips are MP3 files: fine for listening and for spectrogram practice, but not the archival format lesson 13 describes. And the gallery also points to libraries run by others, such as "Sounds of the Parks by the Colorado State University Listening Lab"; this course has not read the terms of those libraries, so do not treat their recordings as public domain until you have. Lesson 24 explains why.

**Primary-source exercise.** Open the rain clip page and the thunder clip page, and play each with the spectrogram in view.

:::reveal On a Park Service spectrogram, where does a low-pitched sound appear? ||| Near the bottom: the caption says frequencies are "shown from bottom to top".

:::reveal Which way does time run on the spectrogram? ||| From left to right: time is the x axis.

:::reveal What does a brighter patch on the spectrogram tell you? ||| That the sound is louder at that frequency and moment: "The brightness of the colors shows sounds' amplitude (loudness)".

:::reveal Besides the audio, what does a park monitoring system record? ||| Sound pressure levels in decibels, once per second for each of 33 one-third-octave bands.

## Sources
- ${NPS_DATA} Locator: the passages on the equipment's frequency range and one-third-octave bands, on spectrograms, and on archival recordings.
- ${NPS_GALLERY} Locator: introduction (data collection, the PARC Listening Lab); the rights line above the clip list; the category headings; the list of other libraries.
- ${NPS_STREAM} Locator: clip caption and credit line.
- ${NPS_RAIN} Locator: clip caption, credit line and spectrogram caption.
- ${NPS_THUNDER} Locator: clip caption, credit line and spectrogram caption.
- ${YELL_LIBRARY} Locator: introduction; index entries "Mud Pots", "Old Faithful Geyser" and "Thunder".`,
    },
    {
      slug: "listening-on-site",
      title: "3 · Listening on site: the park protocol",
      section: "1 · Listening before recording",
      recallContent: [
        {
          prompt: "What do the two axes and the brightness of a Park Service spectrogram show?",
          answer: "Frequency on the y axis (low at the bottom), time on the x axis (left to right), and amplitude as brightness of color.",
        },
        {
          prompt: "Under what terms does the Park Service offer its sound gallery clips?",
          answer: "\"The files are in the public domain and may be downloaded. Enjoy, and please give the appropriate credit.\"",
        },
      ],
      body: `**Listen before you record.** Park technicians do not start with a recorder. The Park Service: "Acoustic technicians conduct several hours of on-site listening at each monitoring location. This involves sitting quietly and noting each sound heard in a handheld digital device." Its training manual sets the amount, "Several hours of on-site listening (at least 2.5 percent of the site measurement duration)", and the listener: "Investigators should have 'normal' hearing."

The manual's section 4.7 gives the whole idea in one sentence: "During an on-site listening session, one inconspicuously listens to the soundscape and takes note of all audible events as they occur."

**The protocol, in the manual's own steps** (section 4.7.1; the steps not quoted here deal with the monitoring equipment):
- **Step 1, arrive quietly.** "As you approach, and while listening, try to be as inconspicuous in sight and sound as possible. It is best not to alter natural processes such as animal vocalizations or attract the attention of curious humans while listening."
- **Step 2, settle.** Choose a spot "at least 50 ft (15 m) from the acoustic monitor and in the same vegetation type as the acoustic monitor." Then: "Get settled-if you wish, eat or drink, and make any adjustments to clothing or gear that might make noise (e.g. snaps, zippers, velcro). Sit with the wind to your back. Avoid sitting near any large objects or topographical features that might alter the quality of sound reaching your ears."
- **Step 3.** "Remove your hat if it covers your ears."
- **Step 4, the constant sounds.** "Make a mental catalog of the constant sounds you hear at the site (such as wind, water, or birds)."
- **Step 7, masking.** "Multiple sounds may be audible at the same time, but you MUST be aware of when one sound obscures another. Just because you suspect that a sound is being generated does not mean you can hear it. Unselect a sound if it is being masked by another."
- **Step 8, know your sources.** For birds, "a good rule of thumb is to wait ten seconds after the last sound was made"; aircraft "tends to fade in and out"; squirrels "Make sounds easily confused with birds". Leave yourself out: "Artifacts are sounds that we create at the listening site that would not otherwise happen if we weren't there. This includes sounds like sneezing, or raindrops falling on a raincoat. Do not enter these noises." And tell wind from what it moves: "'Wind' describes the sound of wind turbulence while 'wind induced noise' describes the sound of wind moving other objects to make noise (such as branches creaking or scraping against each other)."
- **Step 10, rest.** "to avoid compromising data with fatigue, take breaks between listening periods."

**Weather is in the recording.** "Sound waves traveling through the air are influenced by air temperature and humidity. Wind can sometimes mask other sounds, making them difficult to hear." The parks draw a line: "Hours with wind speeds in excess of 5 meters per second are excluded from certain types of analysis due to interference."

**A recordist's version.** A Park Service article quotes Jacob Job, former manager of the Colorado State University Listening Lab, which works in a research partnership with the Park Service's Natural Sounds and Night Skies Division: "People can hear a range of sounds while hiking on trails or in the backcountry simply by being quiet," and "be mindful of your own noise, and good things will come to you".

**The method, not the gadget.** The 2013 manual logs on "a Palm PDA and NSP Soundscape V5 software". The device is history; the method is not. A notebook and a watch will do.

**Try it.** Before you ever press record, sit for twenty minutes somewhere outdoors. List the constant sounds first, then each event with its time. Keep a separate note of the artifacts you made, and leave them off the list.

:::reveal What are "artifacts" in the park protocol, and what do you do with them? ||| Sounds you create at the site that would not happen if you were not there, such as sneezing or rain on a raincoat. "Do not enter these noises."

:::reveal What should you do when one sound masks another? ||| "Unselect a sound if it is being masked by another." Suspecting that a sound is there is not the same as hearing it.

:::reveal What is the difference between "wind" and "wind induced noise"? ||| Wind is the sound of the air's turbulence; wind-induced noise is wind moving other things, such as branches creaking.

:::reveal How long does the manual's rule of thumb say to wait after a bird's last sound? ||| Ten seconds.

## Sources
- ${NPS_DATA} Locator: the passages on on-site listening and on weather.
- ${NPS_MANUAL} Locator: section 4.7, p. 46; section 4.7.1, steps 1 to 4, 7, 8 and 10, pp. 46 to 47; the Palm PDA line, p. 46. ${MANUAL_PAGES}
- ${NPS_WEST} Locator: the paragraph introducing Jacob Job and his role; the paragraph quoting him on being quiet.`,
    },
    {
      slug: "how-a-microphone-hears",
      title: "4 · How a microphone hears",
      section: "1 · Listening before recording",
      recallContent: [
        {
          prompt: "What does the park protocol tell you to do with artifacts?",
          answer: "Leave them out: they are sounds you made at the site, such as sneezing or rain on a raincoat. \"Do not enter these noises.\"",
        },
        {
          prompt: "Name two things step 2 of the protocol asks you to do before you listen.",
          answer: "Any two of: sit at least 50 ft (15 m) from the monitor in the same vegetation; silence snaps, zippers and velcro; sit with the wind to your back; avoid large objects or landforms nearby.",
        },
      ],
      body: `**The ear's twin.** A 1987 Army television course, *Basic Television Lighting, Audio and Scenery*, opens its audio lesson with a definition that still holds: "A microphone, like the ear, is a transducer that converts acoustical sound energy into electrical energy." The rest of this course is about getting that conversion to tell the truth.

**Which way it listens.** The same course says microphones are "grouped into three classifications according to their directional pickup properties". Of the cardioid it says it will "accept sound best at the 0 degree point with minimal response at the 180 degree point". Read the degrees as directions around the microphone, with 0 the way it points: best in front, least directly behind. The Library of Congress fieldwork guide uses a plainer pair of words, "directional" and "omnidirectional", and lesson 10 puts both to work.

**Types, as the Army text names them.** On one page the course compares types. "the dynamic mike has a low wind-noise characteristic". The ribbon "should never be used outdoors. A strong wind may break the ribbon rendering the mike useless." The condenser is described on the same page. That sentence about wind is why, in this course, a ribbon microphone stays indoors.

**When an old manual contradicts itself.** Read the course's pages 21 and 22 together and three problems appear:
- Page 21 says "There are two types of microphones: the dynamic and the velocity", and page 22 then describes a third, the condenser.
- Page 21 says of the figure-eight microphone that "The dead side of the microphone is on either side", and also that it "accepts sound best at the 0 degree and 270 degree axis points or sides".
- Page 22 says the dynamic "tends to favor high-frequency over low-frequency sounds" and, in the next sentence, gives it an "inherent high-frequency cutoff".

A source that says two incompatible things on one page cannot be the only witness for either. This course teaches only what is consistent within a source and agrees with another verified source, and leaves the rest out. That is a habit worth keeping for every manual you read.

**Quiet places need quiet microphones.** The Park Service: "At sites where the sound pressure levels are very low, it is ideal to monitor with low-noise, high-sensitivity microphones." Lesson 8 shows how to measure your own kit's noise.

**Wind and the windscreen.** The Army course is honest about windscreens: they "will not eliminate all the unwanted sound but they will help", and they "slightly reduce the frequency response". A windscreen is a trade, not a cure.

**Where the catalog goes further.** For a voice indoors: *Voice Acting: The Instrument*, lesson "10 · Mic technique: distance, angle, and consistency", and *Break Into Sports & Media Broadcasting*, lesson "6 · Signal flow and audio fundamentals". For the history of one microphone, *Who Gets the Credit: Black Inventors and the Machinery of Attribution*, lesson "10 · Working inside the corporation", tells the story of the electret microphone patent.

**Dated parts.** The Army course is from 1987 and its hardware is history. Take the principles, and check any claim about gear against current documentation before relying on it.

:::reveal What does the 1987 Army course call a microphone, and why? ||| A transducer: "A microphone, like the ear, is a transducer that converts acoustical sound energy into electrical energy."

:::reveal Why does a ribbon microphone stay indoors in this course? ||| The Army text: it "should never be used outdoors. A strong wind may break the ribbon rendering the mike useless."

:::reveal Where does a cardioid microphone pick up best and worst? ||| Best "at the 0 degree point", the way it points, with "minimal response at the 180 degree point", directly behind.

:::reveal Why does this course leave out the Army text's figure-eight description? ||| Because the same page contradicts itself: it calls the sides dead and also says the microphone accepts sound best at the sides.

## Sources
- ${ARMY_1987} Locator: printed p. 17 (PDF p. 26); p. 19 (PDF p. 28); p. 20 (PDF p. 30); p. 21 (PDF p. 32); p. 22 (PDF p. 33); p. 29 (PDF p. 42); p. 30 (PDF p. 43). The scan's text layer sometimes prints a page's number on the next PDF page, so check the page image.
- ${NPS_DATA} Locator: the sentence on low-noise, high-sensitivity microphones.
- ${AFC} Locator: p. 25 (PDF p. 31). ${AFC_PAGES}`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Listening before recording",
      section: "1 · Listening before recording",
      body: "A graded check on frequency, the decibel and dB(A), reading a spectrogram, the park listening protocol, and how a microphone hears. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: Protecting the instrument (QR)
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "two-documents-two-numbers",
      title: "5 · Two documents, two numbers",
      section: "2 · Protecting the instrument",
      recallContent: [
        {
          prompt: "How does the 1987 Army course define a microphone?",
          answer: "\"A microphone, like the ear, is a transducer that converts acoustical sound energy into electrical energy.\"",
        },
        {
          prompt: "What does the Army course say windscreens do?",
          answer: "They \"will not eliminate all the unwanted sound but they will help\", and they \"slightly reduce the frequency response\".",
        },
      ],
      body: `${QR("an occupational-noise or hearing-conservation professional, to check every figure, the arithmetic, and the framing of the two documents before release")}

**Why a sound course has a hearing section.** Your ears are the instrument the rest of this course depends on, and the work puts them near loud things: the park ladder in lesson 1 runs to thunder at 100 dBA and cannon fire at 126 dBA at 150 m. Two federal documents set numbers for noise at work. They are not one rule, and they do not agree.

**Document one: the rule.** OSHA's occupational noise standard, 29 CFR 1910.95, is enforceable. It measures "on the A scale of a standard sound level meter at slow response" (paragraph (a)), and its Table G-16, "Permissible Noise Exposures", reads:

| Hours per day | dBA, slow response |
|---|---|
| 8 | 90 |
| 6 | 92 |
| 4 | 95 |
| 3 | 97 |
| 2 | 100 |
| 1 1/2 | 102 |
| 1 | 105 |
| 1/2 | 110 |
| 1/4 or less | 115 |

Look down the table: 90 dBA for 8 hours, 95 for 4, 100 for 2. Each rise of 5 dBA halves the permitted time. OSHA's text, in the parts read for this course, does not name that pattern; NIOSH does: "The 5-dB exchange rate is still used by OSHA and MSHA".

**Controls come first.** "When employees are subjected to sound exceeding those listed in Table G-16, feasible administrative or engineering controls shall be utilized. If such controls fail to reduce sound levels within the levels of Table G-16, personal protective equipment shall be provided and used" ((b)(1)). Earplugs come last, not first.

**The action level.** A hearing conservation program is required "whenever employee noise exposures equal or exceed an 8-hour time-weighted average sound level (TWA) of 85 decibels measured on the A scale (slow response) or, equivalently, a dose of fifty percent" ((c)(1)), which "shall also be referred to as the action level" ((c)(2)). Then:
- "Employers shall make hearing protectors available to all employees exposed to an 8-hour time-weighted average of 85 decibels or greater at no cost to the employees" ((i)(1)).
- Employees "shall be given the opportunity to select their hearing protectors from a variety of suitable hearing protectors" ((i)(3)).
- "The employer shall provide training in the use and care of all hearing protectors" ((i)(4)).
- Training covers "(i) The effects of noise on hearing; (ii) The purpose of hearing protectors, the advantages, disadvantages, and attenuation of various types, and instructions on selection, fitting, use, and care; and (iii) The purpose of audiometric testing" ((k)(3)).

Measurement takes in a wide band: "All continuous, intermittent and impulsive sound levels from 80 decibels to 130 decibels shall be integrated into the noise measurements" ((d)(2)(i)). Mandatory Appendix A gives the formula "TWA = 16.61 log10 (D/100) + 90", and a non-mandatory appendix adds that "a dose of 50 percent corresponds to a TWA of 85 dB." Hearing tests have a defined warning sign: "a standard threshold shift is a change in hearing threshold relative to the baseline audiogram of an average of 10 dB or more at 2000, 3000, and 4000 Hz in either ear" ((g)(10)(i)).

**Document two: the recommendation.** NIOSH's 1998 criteria document: "The REL is 85 decibels, A-weighted, as an 8-hr time-weighted average (85 dBA as an 8-hr TWA). Exposures at or above this level are hazardous." It changes the halving rule too: "NIOSH previously recommended an exchange rate of 5 dB for the calculation of time-weighted average (TWA) exposures to noise. However, NIOSH now recommends a 3-dB exchange rate, which is more firmly supported by scientific evidence." The 3-dB rule "is also known as the equal-energy rule or hypothesis, because a 3-dB increase/decrease represents a doubling or halving of the sound energy", and it "is already used in the United States by the EPA and the U.S. Department of Defense."

Its formula is "T (min) = 480 / 2^((L-85)/3) where 3 = the exchange rate". Check it at 100 dBA: (100 minus 85) divided by 3 is 5; 2 to the 5th is 32; 480 divided by 32 is 15 minutes. Its Table 1-1 agrees: 85 dBA for 8 hours, 88 for 4, 91 for 2, 94 for 1, 97 for 30 minutes, 100 for 15 minutes, 115 for 28 seconds.

**Why NIOSH asks for less.** "With a 40-year lifetime exposure at the 85-dBA REL, the excess risk of developing occupational NIHL is 8%", which NIOSH calls "considerably lower than the 25% excess risk at the 90-dBA permissible exposure limit (PEL) currently enforced by the Occupational Safety and Health Administration (OSHA) and the Mine Safety and Health Administration (MSHA)."

**Two numbers side by side.** At 100 dBA, OSHA's table permits 2 hours and NIOSH's 15 minutes. Two hours is 120 minutes, and 120 divided by 15 is 8: NIOSH's time is one eighth of OSHA's. At 115 dBA, OSHA permits 1/4 hour or less; NIOSH, 28 seconds. OSHA's numbers are what an employer can be held to. NIOSH's are a recommendation built on its reading of the evidence. When someone says "the limit is 85", ask: 85 as what, in which document, with which consequence?

**A simplification to notice.** The Park Service page from lesson 1 says: "When workplace sound levels reach or exceed 85 dB, employers must provide hearing protection." Set it beside (i)(1). The rule is an 8-hour time-weighted average of 85, not any moment at 85, and the duty is to make protectors available at no cost. Cite the regulation for the rule, never a summary of it.

**Which rulebook covers your job** is its own question. The first course in this series, *Rigging for Stage and Broadcast Crews*, reads OSHA's letter on it in lesson "4 · Which rulebook applies".

**What this lesson is not.** It is not a hearing conservation program, and it does not teach anyone to measure exposure. The rule requires audiometers to meet "American National Standard Specification for Audiometers, S3.6-1969, which is incorporated by reference" ((h)(2)): a copyrighted standard, named here and not reproduced. Measuring noise, fitting protectors and testing hearing are jobs for a trained professional.

:::reveal Under OSHA's Table G-16, how long may a worker be exposed at 100 dBA? ||| 2 hours. NIOSH's recommended time at the same level is 15 minutes.

:::reveal What follows when exposure reaches OSHA's action level? ||| A hearing conservation program is required, with protectors available at no cost, a choice among suitable types, and training in their use and care.

:::reveal What exchange rate does NIOSH recommend, and why is it called the equal-energy rule? ||| 3 dB, because "a 3-dB increase/decrease represents a doubling or halving of the sound energy."

:::reveal What does 1910.95(b)(1) require before hearing protectors? ||| "feasible administrative or engineering controls".

## Sources
- ${CFR_1910_95} Locator: paragraphs (a), (b)(1), (c)(1), (c)(2), (d)(2)(i), (g)(10)(i), (h)(2), (i)(1), (i)(3), (i)(4) and (k)(3); Table G-16; Appendix A and the non-mandatory appendix sentence on a 50 percent dose.
- ${NIOSH} Locator: Foreword, p. iii (PDF p. 5); Abstract, p. v (PDF p. 7); section 1.1 and Table 1-1, printed pp. 1 to 2 (PDF pp. 19 to 20); section 3.3, printed p. 25 (PDF p. 43).
- ${NPS_UNDERSTANDING} Locator: the workplace sentence under "Sound Level", and the table of park sound levels.`,
    },
    {
      slug: "impulse-noise-two-140s",
      title: "6 · Impulse noise: two different 140s",
      section: "2 · Protecting the instrument",
      recallContent: [
        {
          prompt: "What are OSHA's permissible exposure at 8 hours and its action level?",
          answer: "90 dBA for 8 hours (Table G-16); the action level is an 8-hour TWA of 85 dBA, or a 50 percent dose.",
        },
        {
          prompt: "At 100 dBA, how do OSHA's permitted time and NIOSH's recommended time compare?",
          answer: "OSHA permits 2 hours; NIOSH recommends 15 minutes, one eighth as long.",
        },
      ],
      body: `${QR("an occupational-noise or hearing-conservation professional, who must also supply or approve anything this lesson says about blanks, pyrotechnics or other impulse noise on a set")}

**A bang is a different problem.** Fields and sets have sudden sounds as well as steady ones. The gallery from lesson 2 includes "Cannon Fire" and "Musket Fire", and the park ladder puts cannon fire at 126 dBA at 150 m. Both noise documents give a ceiling of 140 for sound like this. Read them exactly and they are not the same 140.

**OSHA's 140.** A footnote to Table G-16: "Exposure to impulsive or impact noise should not exceed 140 dB peak sound pressure level." Notice two things. The unit is "dB peak sound pressure level", a peak, not an A-weighted average. And the verb is "should". The paragraphs quoted in lesson 5, (b)(1) and (i)(1), say "shall". This course does not say how the footnote's "should" is enforced; that is a question for the reviewer named at the top of this lesson.

**NIOSH's 140.** Section 1.1.4 of the criteria document: "Exposure to continuous, varying, intermittent, or impulsive noise shall not exceed 140 dBA." Here the verb is "shall", the unit as printed is "dBA", A-weighted, and the ceiling covers every kind of noise the sentence lists, not impulses alone.

**Where the number came from.** NIOSH tells its own history: "The generally accepted ceiling limit of 140 dB peak SPL for impulsive noise is based on a report by Kryter et al. [1966]. Ward [1986] indicated that "this number was little more than a guess when it was first proposed."" Notice the unit in that sentence, "dB peak SPL", the same kind of number as OSHA's, inside the same document that prints its own ceiling as "140 dBA". Units are not decoration. Before you compare two numbers, check that they measure the same thing.

**The long tail of NIOSH's table.** The same section works the 3-dB rule to its end: "with an 85-dBA REL and a 3-dB exchange rate, an exposure duration of less than 28 sec would be allowed at a 115-dBA level." Check it with lesson 5's formula: (115 minus 85) divided by 3 is 10; 2 to the 10th is 1,024; 480 minutes divided by 1,024 is about 0.47 minutes, which is about 28 seconds.

**What the park ladder can and cannot tell you.** The ladder is in dBA and names a distance: cannon fire, 126 dBA at 150 m. A dBA level is not a peak reading, so you cannot set it against OSHA's 140 dB peak and conclude anything. You can conclude that the page measured that cannon at 150 m, and says nothing about standing nearer.

**What still counts toward the day.** From lesson 5: under 1910.95, "All continuous, intermittent and impulsive sound levels from 80 decibels to 130 decibels shall be integrated into the noise measurements." Impulsive sound inside that band counts toward the day's measured exposure along with the steady sound.

**On a set.** This course has read no document on blank gunfire or pyrotechnics on a set, so it gives no figures or practices for them. Ask whoever is responsible for safety on the production, and treat this lesson as incomplete until the reviewer named above has added to it or signed it off.

**Primary-source exercise.** Open 29 CFR 1910.95 and find the footnote under Table G-16. Then open the NIOSH document at printed page 4 (PDF page 22) and printed page 24 (PDF page 42).

:::reveal What is OSHA's verb for the 140 limit, and what is NIOSH's? ||| OSHA's footnote says "should not exceed"; NIOSH section 1.1.4 says "shall not exceed".

:::reveal OSHA's 140 is in "dB peak sound pressure level". In what unit does NIOSH print its 140 ceiling? ||| "dBA", A-weighted, in section 1.1.4.

:::reveal Whom does NIOSH quote on how the 140 dB peak figure began? ||| Ward (1986): "this number was little more than a guess when it was first proposed."

:::reveal Can you compare the park ladder's 126 dBA cannon reading with OSHA's 140 dB peak? ||| No: one is an A-weighted level at 150 m and the other is a peak sound pressure level. They do not measure the same thing.

## Sources
- ${CFR_1910_95} Locator: Table G-16 and its footnote; paragraphs (b)(1), (d)(2)(i) and (i)(1).
- ${NIOSH} Locator: section 1.1.4, printed p. 4 (PDF p. 22); section 3.2, printed p. 24 (PDF p. 42); section 1.1, printed p. 1 (PDF p. 19), the formula.
- ${NPS_GALLERY} Locator: the Cultural-Historical category ("Cannon Fire", "Musket Fire").
- ${NPS_UNDERSTANDING} Locator: the table of park sound levels, the 126 dBA row.`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Protecting the instrument",
      section: "2 · Protecting the instrument",
      body: "A graded check on OSHA's noise rule and NIOSH's recommended limit, the exchange rates, the action level, and the two different 140s for impulse noise. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Field recording in nature
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "planning-a-field-session",
      title: "7 · Planning a field session",
      section: "3 · Field recording in nature",
      recallContent: [
        {
          prompt: "What verb does OSHA's Table G-16 footnote use for the 140 limit, and in what unit?",
          answer: "\"should not exceed 140 dB peak sound pressure level\": a should, and a peak, not an A-weighted level.",
        },
        {
          prompt: "What did Ward say about the 140 dB peak figure, as NIOSH quotes him?",
          answer: "\"this number was little more than a guess when it was first proposed.\"",
        },
      ],
      body: `**Choose where.** The Park Service starts with places that sound alike: "To define sampling areas within a park, we identify areas with similar vegetation, land cover, topography, elevation, and climate that typically contain similar animals, physical processes, and other sources of natural sounds." Then it weighs each candidate site by:
- "Park management zones and their soundscape management objectives"
- "Specific sound-sensitive areas"
- "Specific acoustical data needs"
- "Proximity to natural and human-caused sounds"
- "Equipment considerations (security, solar exposure, visibility, etc.)"

For one recordist the same list comes down to three questions: what lives in this sound, what else will I hear here, and will my gear be safe and out of sight?

**Choose when.** "Often, two seasons of data will be useful: a high season and a low season for a specific sound source of interest." The Park Service's example is aircraft tours, summer against winter. The same place can be two different recordings.

**Choose how long.** For long-term monitoring, the manual says: "In general, 25 days is the minimum recommended collection period to ensure statistical confidence". The field page puts it this way: "Research shows that measurement periods of at least 25 days limit the uncertainty of ambient data to less than three decibels." That page names no study, so take the figure as the Park Service's working rule for monitoring, not a finding you can check. The division has worked at scale: "Acoustical monitoring has been conducted in more than 70 parks since the division started in 2000." A recordist after one good take is doing a smaller job, but the idea carries over: one visit is a sample of a place, not the place.

**Watch the weather.** From lesson 3: wind can mask other sounds, and the parks exclude hours with wind speeds "in excess of 5 meters per second" from certain analyses; temperature and humidity also influence how sound travels. Check the forecast wind before you go, and plan around it.

**Learn the kit indoors first.** The manual: "first go through this manual with all of the equipment on hand in an indoor environment where you can take your time exploring each section of the manual. Once you feel comfortable, this SOP should be taken into the field as a reference." The Library of Congress fieldwork guide says the same from hard experience: "Most folklorists have had the awful experience of returning from an interview to find out the recorder didn't work or the mic didn't pick up the interviewee's voice. Minimize the chance of this happening by learning how to use all your equipment in advance." It suggests you "stage some test interviews and photo shoots just to get to know your equipment."

**Pack the list.** The guide's kit: "A digital audio or video recorder with 2 microphones, mic cables, extra memory cards, batteries, and a pair of headphones." It adds "An extension cord and power strip.", "A steel tape measure" and "Release forms." Set the recorder's clock accurately before you go; the park manual sets its recorder's clock from GPS time. The guide leaves location data on "Unless there is an ethical reason to turn them off (for example, you're photographing a sacred site whose location the community doesn't want to reveal)". Lesson 12 returns to that.

**Permission to be there.** Whether recording in a national park or on other public land needs a permit is a question this course has not researched. Ask the land manager before you go. Recording people is lesson 23.

:::reveal What does the Park Service match when it defines a sampling area? ||| Similar vegetation, land cover, topography, elevation and climate, which "typically contain similar animals, physical processes, and other sources of natural sounds."

:::reveal Why record in two seasons? ||| "a high season and a low season for a specific sound source of interest", such as summer and winter aircraft tours.

:::reveal Why does this course call the 25-day figure a working rule rather than a checkable finding? ||| The field page says "Research shows" but names no study.

:::reveal What does the manual tell you to do before taking the kit into the field? ||| Go through the manual "with all of the equipment on hand in an indoor environment".

## Sources
- ${NPS_FIELD} Locator: headings "Sampling Scheme", "Site Selection", "Measuring by season" and "Duration".
- ${NPS_MANUAL} Locator: section 1.2, p. 8; sections 1.4 and 1.5, p. 9; section 4.3.2, p. 40 (clock set from GPS). ${MANUAL_PAGES}
- ${NPS_DATA} Locator: the passage on weather.
- ${AFC} Locator: p. 11 (PDF p. 17), the equipment list; p. 15 (PDF p. 21); p. 16 (PDF p. 22). ${AFC_PAGES}`,
    },
    {
      slug: "a-chain-that-does-not-lie",
      title: "8 · A chain that does not change the sound",
      section: "3 · Field recording in nature",
      recallContent: [
        {
          prompt: "How many seasons of data does the Park Service say will often be useful, and which?",
          answer: "Two: \"a high season and a low season for a specific sound source of interest.\"",
        },
        {
          prompt: "Where does the park manual tell you to learn the equipment first?",
          answer: "Indoors: \"first go through this manual with all of the equipment on hand in an indoor environment\".",
        },
      ],
      body: `**Two switches off.** The park manual sets its recorder this way (section 4.3.2):
- "Limiter: Off. Suppresses noise by lowering the volume level when the sound input is too high. Keep off to prevent sounds from being altered"
- "Low Cut: Off. Cuts out the low frequency sounds, needs to be turned off to record the lower frequency range."

Both switches exist to help, and both change what you recorded: a limiter turns loud moments down, and a low cut throws away the bottom of the spectrum. If you want a record of what was there, leave them off and manage the sound with placement and level.

**Set the level by hand.** "The correct level should be two increments below the point at which the peak indicator level is illuminated (normal value is 20)." That is a manual level, set against the recorder's own peak light. The Army's 1986 field-production course gives the reason to avoid automatic level: "set the levels in the manual mode, not the automatic gain control (AGC) mode, as the AGC will cause hiss and roar as it seeks a signal during quiet portions of the program."

**Know the other settings.** The manual runs its recorder at "Sample Rate: 44.1 kHz" and "Rec Mode: MP3-96Kbps. Lower sound quality but smaller than WAV files and allows for longer recording time", with "Pre-Rec: Off. Captures the two seconds of sound that precedes the moment the rec button is pressed". MP3 is a choice the manual makes on purpose, for long unattended recording; lesson 13 weighs it against WAV.

**A reference at the start.** "Record 30 seconds of the 94dB calibration tone." Calibration, the manual says, "verifies the values recorded are accurate".

**The floor under everything.** "most digital audio recorders are consumer grade and relatively inexpensive. As such, they will not be able to record sounds below a certain threshold. This limit is called the noise floor of the device", which the manual defines as "the point at which internal noise from the electronics of the recorder are greater than the signal coming in to be encoded."

Calibration does not find it: "Standard calibration verifies the values recorded are accurate, but it does not give a lower bound to the measurements. To do so, the inherent noise in the system must be measured, giving a value below which measurements are no longer valid. This noise floor is system specific, influenced by factors such as length of cables used, type of power supply, irregularities in the SLM and preamplifier, and any local electromagnetic interference (possibly due to power lines)."

The test swaps in a "dummy mic": "Record 30 seconds of audio on the R-05 with the dummy mic attached, to be able to differentiate silence in the field with the static of the system." The R-05 is the manual's 2013 recorder. The method works on any kit: record your own system with the dummy in place of the microphone, and you will know what your own silence sounds like.

**Three ways to know it is recording.** The Library of Congress guide: "It's always good to have more than one way to verify that recording is occurring: it's ideal to have a moving counter, levels visible on the meter, and sound in the headphones." Check all three before you walk away from the recorder.

**Dated gear.** The Roland R-05 recorder and the Larson Davis 831 meter are the manual's 2013 kit. The settings and the tests are the lesson.

:::reveal Why does the park manual keep the limiter off? ||| A limiter "Suppresses noise by lowering the volume level when the sound input is too high"; it is kept off "to prevent sounds from being altered".

:::reveal Why does the Army course say not to use automatic gain control? ||| "the AGC will cause hiss and roar as it seeks a signal during quiet portions of the program."

:::reveal What is the noise floor of a recorder? ||| "the point at which internal noise from the electronics of the recorder are greater than the signal coming in to be encoded."

:::reveal What are the three signs the Library of Congress guide uses to confirm a recorder is recording? ||| "a moving counter, levels visible on the meter, and sound in the headphones."

## Sources
- ${NPS_MANUAL} Locator: section 3.2, p. 16; section 4.3.2, pp. 39 to 40; section 4.4.2, p. 42; section 4.4.3, p. 42. ${MANUAL_PAGES}
- ${ARMY_1986} Locator: printed p. 100 (PDF p. 192).
- ${AFC} Locator: p. 20 (PDF p. 26). ${AFC_PAGES}`,
    },
    {
      slug: "practice-name-the-setting",
      title: "9 · Practice: name the setting",
      section: "3 · Field recording in nature",
      body: `**The words so far.** Lessons 1 to 8 gave you a working vocabulary: the terms the Park Service uses to describe sound and listening, the parts of a recorder's setup that change a sound if you let them, and the tests that tell you what your own kit adds.

**The drill below** gives a description, quoted or close to its source, and asks for the name of the setting, test or term. Type one or two words. Spelling and capitals are forgiven; the word is the point.

## Sources
- ${NPS_MANUAL} Locator: section 3.2, p. 16; section 4.3.2, pp. 39 to 40; sections 4.4.2 and 4.4.3, p. 42; section 4.7.1, step 8, p. 47. ${MANUAL_PAGES}
- ${NPS_DATA} Locator: the passage on spectrograms.
- ${NPS_UNDERSTANDING} Locator: heading "Defining Key Terms".
- ${ARMY_1987} Locator: printed p. 17 (PDF p. 26).
- ${ARMY_1986} Locator: printed p. 100 (PDF p. 192).
- ${AFC} Locator: p. 22 (PDF p. 28). ${AFC_PAGES}`,
      exercise: {
        instructions: "Name the setting, test or term each description points to. One or two words each.",
        items: [
          { prompt: "\"Suppresses noise by lowering the volume level when the sound input is too high.\" The park manual keeps it off.", answer: "limiter", accept: ["the limiter", "limit"], hint: "Section 4.3.2, the first switch.", explanation: "\"Limiter: Off. ... Keep off to prevent sounds from being altered\" (park manual, 4.3.2, p. 39)." },
          { prompt: "\"Cuts out the low frequency sounds.\" Turned off to record the lower frequency range.", answer: "low cut", accept: ["low-cut", "lowcut", "low cut filter", "low-cut filter"], hint: "Section 4.3.2, the second switch.", explanation: "\"Low Cut: Off. Cuts out the low frequency sounds, needs to be turned off to record the lower frequency range\" (4.3.2, p. 40)." },
          { prompt: "\"Captures the two seconds of sound that precedes the moment the rec button is pressed.\"", answer: "pre-rec", accept: ["prerec", "pre rec", "pre-record", "prerecord", "pre record"], hint: "The manual sets it to Off.", explanation: "\"Pre-Rec: Off. Captures the two seconds of sound that precedes the moment the rec button is pressed\" (4.3.2, p. 40)." },
          { prompt: "The point at which the recorder's own electronic noise is greater than the signal coming in.", answer: "noise floor", accept: ["the noise floor", "floor"], hint: "Section 3.2 names this limit of the device.", explanation: "\"This limit is called the noise floor of the device\" (3.2, p. 16)." },
          { prompt: "Attached in place of the microphone to record 30 seconds of the system's own static.", answer: "dummy mic", accept: ["dummy microphone", "a dummy mic", "dummy"], hint: "Section 4.4.3.", explanation: "\"Record 30 seconds of audio on the R-05 with the dummy mic attached, to be able to differentiate silence in the field with the static of the system\" (4.4.3, p. 42)." },
          { prompt: "The automatic level mode that \"will cause hiss and roar as it seeks a signal during quiet portions of the program.\"", answer: "AGC", accept: ["automatic gain control", "auto gain", "automatic gain"], hint: "Three letters, from the 1986 Army course.", explanation: "Set the levels \"in the manual mode, not the automatic gain control (AGC) mode\" (Army field-production course, p. 100)." },
          { prompt: "Thirty seconds of a 94 dB reference recorded at the start of a park session.", answer: "calibration tone", accept: ["calibration", "the calibration tone", "cal tone", "tone"], hint: "Section 4.4.2.", explanation: "\"Record 30 seconds of the 94dB calibration tone\" (4.4.2, p. 42)." },
          { prompt: "The recorder light the park manual sets the level against: two increments below where it lights.", answer: "peak indicator", accept: ["peak light", "peak", "peak indicator light", "peak meter"], hint: "Section 4.4.2.", explanation: "\"two increments below the point at which the peak indicator level is illuminated\" (4.4.2, p. 42)." },
          { prompt: "The lossy file format the park manual chooses because it \"allows for longer recording time\".", answer: "MP3", accept: ["mp3", "mp3-96", "mp-3"], hint: "Rec Mode in section 4.3.2.", explanation: "\"Rec Mode: MP3-96Kbps. Lower sound quality but smaller than WAV files and allows for longer recording time\" (4.3.2, p. 40)." },
          { prompt: "The file format the Library of Congress guide recommends at 96 kHz and 24 bits.", answer: "WAV", accept: ["wav", "wave", ".wav"], hint: "Not the compressed one.", explanation: "\"We recommend recording WAV files at 96khz/24bits\" (Library of Congress guide, p. 22)." },
          { prompt: "What the 1987 Army course calls a device that, like the ear, converts acoustical sound energy into electrical energy.", answer: "transducer", accept: ["a transducer"], hint: "The first definition in the Army audio lesson.", explanation: "\"A microphone, like the ear, is a transducer that converts acoustical sound energy into electrical energy\" (Army course, p. 17)." },
          { prompt: "Sounds you create at the listening site, such as sneezing, which you do not enter in the log.", answer: "artifacts", accept: ["artifact", "artefacts", "artefact"], hint: "Step 8 of the listening protocol.", explanation: "\"Artifacts are sounds that we create at the listening site that would not otherwise happen if we weren't there\" (4.7.1, p. 47)." },
          { prompt: "Wind moving other objects so they make noise, such as branches creaking. Name the term.", answer: "wind induced noise", accept: ["wind-induced noise", "wind induced", "wind-induced"], hint: "The manual sets it against plain \"wind\".", explanation: "\"'wind induced noise' describes the sound of wind moving other objects to make noise\" (4.7.1, p. 47)." },
          { prompt: "When one sound obscures another, the second is said to be this, and you unselect it.", answer: "masked", accept: ["masking", "mask"], hint: "Step 7 of the listening protocol.", explanation: "\"Unselect a sound if it is being masked by another\" (4.7.1, p. 47)." },
          { prompt: "An image with frequency on the y axis, time on the x axis and amplitude as brightness of color.", answer: "spectrogram", accept: ["a spectrogram", "sonogram"], hint: "Lesson 2.", explanation: "\"Sounds are represented visually using a spectrogram\" (Park Service, Types of data)." },
          { prompt: "The Park Service's name for sound above 20,000 Hz.", answer: "ultrasound", accept: ["ultrasonic"], hint: "Lesson 1. Its opposite, below 20 Hz, is infrasound.", explanation: "\"Frequencies above 20,000 Hz are known as ultrasound\" (Park Service, Understanding sound)." },
        ],
      },
    },
    {
      slug: "stereo-and-binaural",
      title: "10 · Stereo and binaural",
      section: "3 · Field recording in nature",
      recallContent: [
        {
          prompt: "Which two recorder switches does the park manual keep off, and why?",
          answer: "The limiter, which lowers loud input, and the low cut, which cuts low frequencies: both alter the sound, so both stay off.",
        },
        {
          prompt: "What is the dummy-mic test for?",
          answer: "Measuring the system's own noise floor: 30 seconds recorded with the dummy mic attached, \"to be able to differentiate silence in the field with the static of the system.\"",
        },
      ],
      body: `**Two ears, two microphones.** Everything so far has used one microphone. People hear with two ears, and recordists copy that in more than one way.

**The binaural rig.** A Park Service article describes how Jacob Job records: he "employs binaural recording techniques that accurately simulate the way the human head is designed to hear the world. This involves positioning two microphones on a tripod", and the article goes on, "each facing the opposite direction, with one slightly higher, and the other slightly forward than the other, and spaced apart the approximate distance as human ears." Read it as a build note: two microphones on one tripod, pointed opposite ways, one a little higher and one a little forward, about an ear-width apart.

**Three setups from the Library of Congress.** For a performance, the fieldwork guide offers three: "you could point two directional microphones toward the performance about 6 inches apart and at a 110-degree angle, or two omnidirectional mics about two feet apart and parallel to one another, or even use a single stereo mic." Its verdict is modest: "It may not make for the best audio or video, but reviewing recordings like this can still teach you a lot about the art forms you're studying." The guide gives these setups no names, and no source read for this course supplies them, so they stay unnamed here rather than guessed at.

**Headphones are part of the kit.** A caption in the same guide: "the basics are the same: a recording device, a microphone, and a set of headphones for monitoring." With two microphones, listen on headphones before and during the take; they are one of the three checks from lesson 8.

**The gear changes; the problem does not.** The guide's preface: "When the first edition of Folklife and Fieldwork was published in 1979, our readers had a difficult choice to make: the better audio quality offered by a bulky reel-to-reel tape recorder or the convenience of the newfangled cassette deck." A 1939 photograph in the guide, which its caption calls "This National Park Service photo", shows why a fieldworker once needed a car: "Hall needed a car on the scene because car batteries were required to power his massive disc recorder." The recorders changed. Placement, monitoring and honest settings still decide the recording.

**Try it.** If you have two microphones, record the same scene twice: once with two directional microphones about 6 inches apart at about 110 degrees, once with two omnidirectional microphones about two feet apart and parallel. Listen on headphones and write down what changes. With one microphone, record the scene and write down what the recording cannot tell you about where each sound was.

:::reveal How are the two microphones placed in the binaural rig the Park Service article describes? ||| On a tripod, facing opposite directions, one slightly higher and one slightly forward, spaced about as far apart as human ears.

:::reveal What are the Library of Congress guide's two two-microphone setups? ||| Two directional microphones about 6 inches apart at a 110-degree angle, or two omnidirectional microphones about two feet apart and parallel.

:::reveal Why does this course give those setups no names? ||| The guide names none, and no source read for this course supplies the names.

:::reveal What three basics does the guide's caption list? ||| "a recording device, a microphone, and a set of headphones for monitoring."

## Sources
- ${NPS_WEST} Locator: heading "Binaural Recording".
- ${AFC} Locator: preface, p. v (PDF p. 6); p. 11 (PDF p. 17); p. 20 (PDF p. 26); p. 25 (PDF p. 31), the performance setups and the 1939 caption. ${AFC_PAGES}`,
    },
    {
      slug: "under-water-and-beyond-hearing",
      title: "11 · Under water and beyond hearing",
      section: "3 · Field recording in nature",
      recallContent: [
        {
          prompt: "Describe the binaural rig in the Park Service article on Jacob Job.",
          answer: "Two microphones on a tripod, facing opposite directions, one slightly higher and one slightly forward, about an ear-width apart.",
        },
        {
          prompt: "What does the Library of Congress guide say about its own performance setups?",
          answer: "\"It may not make for the best audio or video, but reviewing recordings like this can still teach you a lot about the art forms you're studying.\"",
        },
      ],
      body: `**Sound the ear cannot reach.** From lesson 1: people with normal hearing hear "between 20 Hz and 20,000 Hz"; above that is ultrasound, below 20 Hz infrasound. The park systems "can record sounds from 12.5 to 20,000 Hz", which reaches a little below the bottom of human hearing.

**Under water.** NOAA Fisheries: "Marine mammals and some fish and invertebrates produce and listen for sound in the ocean. In an environment where vision is limited, hearing is one of the most important senses." Their tool: "We deploy hydrophones (underwater microphones) in different regions of the ocean and record sounds. We study the acoustic data we collect to identify where and when different species are present and how they might be using sound to survive in the ocean." Their summary: "Acoustic technologies allow us to hear what we cannot see."

The kit follows the goal: "for long-term acoustic monitoring at specific sites, we use bottom-mounted hydrophones that are anchored to the seafloor and stay there for 6 months to a year."

**The ocean has a soundscape too.** "Sounds in the ocean such as thunderstorms and ship propellers are within the hearing ranges of many of the marine animals we study. These environmental and human-made sounds, combined with the biological sounds produced by animals, make up the ocean soundscape." Some of those biological sounds are song: "male humpback whales produce a wide variety of moans, growls, and other calls arranged in patterns that make up their song. Some fish make grunting or knocking sounds when spawning."

**A four-year listen.** "NOAA and the U.S. Navy co-led the Sanctuary Soundscape Monitoring Project, SanctSound." It ran from fall 2018 through spring 2022 in "seven National Marine Sanctuaries and one Marine National Monument". "SanctSound assesses sounds produced by marine animals, physical processes like wind and waves, and human activities." Its case for patience: "Underwater sound recordings, when made over long periods of time in standardized ways, can greatly add to the suite of measurement systems that characterize the variety and health of marine environments." The project "has collected close to 300 terabytes of data", found through "the NCEI Passive Acoustic Data Archive web-based map viewer". Among its example sounds are snapping shrimp, which "use their larger claw to create and pop bubbles, resulting in a loud snapping sound".

A graphic caption on the project page adds a detail worth reading closely: "the yellow bar at the base of the graph shows the hearing range of humans in air and is also the range of frequencies that were recorded by SanctSound hydrophones." That project's hydrophones recorded the band people hear.

**On land, by machine.** A U.S. Geological Survey image page shows "a bioacoustic survey monitor, which will parse recorded nighttime sounds into species and numbers of individuals."

**Before you reuse anything.** This course has not read the license on SanctSound's archived audio files, so do not reuse them until you have checked. NOAA's pages also carry photos with other credits; one is credited to the Florida Fish and Wildlife Conservation Commission, a state agency, not a federal one.

**Scope.** This lesson explains what hydrophones are for and how long monitoring runs. It does not teach putting equipment in water, which raises boat and water-safety questions this course does not cover.

:::reveal What is a hydrophone, in NOAA's words? ||| An underwater microphone: "hydrophones (underwater microphones)".

:::reveal What three kinds of sound make up the ocean soundscape, as NOAA describes it? ||| Environmental sounds such as thunderstorms, human-made sounds such as ship propellers, and biological sounds produced by animals.

:::reveal How long do NOAA's bottom-mounted hydrophones stay on the seafloor? ||| "6 months to a year."

:::reveal What range did SanctSound's hydrophones record, according to the graphic caption? ||| The hearing range of humans in air.

## Sources
- ${NOAA_PAM} Locator: paragraphs on why marine animals use sound, on hydrophones, on long-term bottom-mounted units, on the ocean soundscape, and on humpback song; the photo credit line.
- ${SANCTSOUND} Locator: paragraphs on the project's leadership, dates and sites, what it assesses, its data volume and archive, and snapping shrimp; the graphic caption.
- ${NPS_UNDERSTANDING} Locator: heading "Defining Key Terms" (hearing range, ultrasound, infrasound).
- ${NPS_DATA} Locator: the sentence on the equipment's frequency range.
- ${USGS_MONITOR} Locator: "Detailed Description".`,
    },
    {
      slug: "footprint-and-the-edit",
      title: "12 · Your footprint, and the edit",
      section: "3 · Field recording in nature",
      recallContent: [
        {
          prompt: "What is a hydrophone, and how long do NOAA's bottom-mounted units stay down?",
          answer: "An underwater microphone; bottom-mounted hydrophones stay on the seafloor for 6 months to a year.",
        },
        {
          prompt: "Who co-led SanctSound, and when did it run?",
          answer: "NOAA and the U.S. Navy, from fall 2018 through spring 2022.",
        },
      ],
      body: `**Two separate questions.** This lesson asks what your presence does to a place while you record, and what you may do to the recording afterward. The Park Service manual speaks to the first. The second is an open argument among recordists.

**On the way in.** Step 1 of the listening protocol, from lesson 3: "As you approach, and while listening, try to be as inconspicuous in sight and sound as possible. It is best not to alter natural processes such as animal vocalizations or attract the attention of curious humans while listening." That sentence is about not disturbing the place on approach. It says nothing about editing.

**On the way out.** When leaving a recorder running, the manual has you estimate "the time when you will be more than 50 meters away (5-10 minutes) from the site". The manual's own words stop there. This course's reading of why: the listening protocol keeps your own sounds out of the data ("Do not enter these noises"), and a written departure time lets whoever reviews the recording tell your footsteps from the place.

**Where not to lead others.** The fieldwork guide keeps location data on "Unless there is an ethical reason to turn them off (for example, you're photographing a sacred site whose location the community doesn't want to reveal)". The same care applies to the location tags on a recording you publish.

**The edit.** The Park Service article on Jacob Job: "Job confessed that in post-production he edits out human sounds, like people's conversations, aircraft, and cars." In his own words: "There is a debate among natural sound recordists as to what sort of editing is ethical or should be allowed. If I remove all anthropogenic noise, then is the final product reality? I worry that I may be setting up a false expectation."

**Both sides.** On one side, an edited track lets a listener hear a stream without a jet across it, which may be exactly what the listener came for. On the other side is Job's own worry: a place heard only in edited recordings sets "a false expectation" of what a visitor will hear. The Park Service's data page adds a reason to keep the original whatever you publish: "High-quality archival recordings make it possible to compute any conceivable metric for future analysis."

**This course's rule.** Keep the unedited original. If you publish an edit, say what you removed. The rule is ours, not the Park Service's; it lets the argument stay open without losing the evidence.

**A related case.** *Mockumentary*, lesson "2 · The grammar of persuasion, read backwards", reads location sound as a signal a filmmaker can stage. Knowing that sound can be staged is one more reason to label your edits.

:::reveal Is step 1 of the listening protocol a rule about editing? ||| No. It is about approaching "as inconspicuous in sight and sound as possible" so as "not to alter natural processes such as animal vocalizations".

:::reveal What does the manual ask you to estimate when you leave a recorder running? ||| "the time when you will be more than 50 meters away (5-10 minutes) from the site".

:::reveal What question does Jacob Job ask about removing human noise? ||| "If I remove all anthropogenic noise, then is the final product reality?"

:::reveal What is this course's own rule on editing? ||| Keep the unedited original, and if you publish an edit, say what you removed.

## Sources
- ${NPS_MANUAL} Locator: section 4.6.1, p. 46; section 4.7.1, step 1, p. 46, and step 8, p. 47. ${MANUAL_PAGES}
- ${AFC} Locator: p. 16 (PDF p. 22). ${AFC_PAGES}
- ${NPS_WEST} Locator: the paragraphs on post-production editing and the recordists' debate.
- ${NPS_DATA} Locator: the passage on archival recordings.`,
    },
    {
      slug: "log-it-and-keep-it",
      title: "13 · Log it and keep it",
      section: "3 · Field recording in nature",
      recallContent: [
        {
          prompt: "What did Jacob Job say he removes in post-production, and what does he worry about?",
          answer: "Human sounds such as conversations, aircraft and cars; he worries that \"I may be setting up a false expectation.\"",
        },
        {
          prompt: "Why does this course say to keep the unedited original?",
          answer: "So the argument over editing can stay open without losing the evidence; archival recordings make it possible \"to compute any conceivable metric for future analysis.\"",
        },
      ],
      body: `**MP3 or WAV is a question of purpose.** Two federal sources answer differently, and each is right for its own job. The park manual records "MP3-96Kbps. Lower sound quality but smaller than WAV files and allows for longer recording time": a monitor left out for weeks needs the recording time. The Library of Congress guide, writing for recordings bound for an archive: "We recommend recording WAV files at 96khz/24bits. Although you can save storage space by recording in mp3 or other compressed formats, these involve a loss of fidelity. Formats that offer lossless compression aren't standard for many archives." The catalog's *Oral history*, lesson "6 · Recording, metadata, and outliving your laptop", says "WAV rather than MP3, 44.1 kHz or better". Ask what the recording is for, then choose.

**The first archivist is you.** The guide: ""The Fieldworker Is the First Archivist." Here at AFC, the statement above is downright proverbial." AFC is the guide's publisher, the American Folklife Center at the Library of Congress.

**Name the file.** The guide's example: "Chicago_Games_Winick_Interview_1.wav". Read it as place, topic, fieldworker, kind of recording and number: a name that sorts and explains itself.

**Keep a log.** The guide's appendix form, "AUDIO AND VIDEO RECORDING LOG", has fields for title, the names of interviewers and interviewees, place, date, description, language, formats, rights and keyword tags, then a "TOPIC SUMMARY" in two columns, "Time or meter / Topic". For a field recording the same frame holds: where, when, what you heard and at what time, and who owns the file. The guide also asks fieldnotes to record "sources of extraneous sounds picked up by your audio recorder". Add the habits from earlier lessons: the place and distance with every level (lesson 1), the constant sounds and the timed events with your artifacts left out (lesson 3), and your departure time if you left a recorder running (lesson 12).

O\\*NET, the U.S. Department of Labor's occupation database, lists the same duty among a sound engineering technician's tasks: "Keep logs of recordings." Lesson 25 returns to the occupation.

**Three copies.** "we recommend that you make three copies of your files on hard drives. We recommend you keep one in a different physical location from the others." And: "we recommend you migrate your files to new storage devices every 5 years or so." *Oral history* lesson 6 teaches preservation in more depth; this course does not repeat it.

:::reveal Why does the park manual choose MP3, and why does the Library of Congress guide choose WAV? ||| The manual trades quality for longer recording time on long unattended monitoring; the guide wants archival fidelity, since compressed formats "involve a loss of fidelity".

:::reveal What does the guide's log put in its "TOPIC SUMMARY"? ||| Two columns: "Time or meter / Topic".

:::reveal How many copies does the guide recommend, and where should one be kept? ||| Three, with one "in a different physical location from the others".

:::reveal How often does the guide suggest migrating files to new storage? ||| "every 5 years or so".

## Sources
- ${NPS_MANUAL} Locator: section 4.3.2, p. 40. ${MANUAL_PAGES}
- ${AFC} Locator: p. 10 (PDF p. 16), the proverb and the file name; p. 18 (PDF p. 24); p. 22 (PDF p. 28); p. 35 (PDF p. 41); appendix, p. 39 (PDF p. 45). ${AFC_PAGES}
- ${ONET_SOUND} Locator: summary page, "Tasks".`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Field recording in nature",
      section: "3 · Field recording in nature",
      body: "A graded check on planning a session, a recording chain that does not change the sound, stereo and binaural setups, recording under water and beyond hearing, your footprint and the edit, and logging and keeping files. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: Recording in a theater and on a set
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-performance-in-a-hall",
      title: "14 · A performance in a hall",
      section: "4 · Recording in a theater and on a set",
      recallContent: [
        {
          prompt: "What file format does the Library of Congress guide recommend, and at what settings?",
          answer: "WAV at 96 kHz and 24 bits (\"WAV files at 96khz/24bits\").",
        },
        {
          prompt: "What does the guide recommend for keeping files?",
          answer: "Three copies on hard drives, one kept in a different physical location, migrated to new storage every 5 years or so.",
        },
      ],
      body: `${P("a theater sound designer or operator, for everything past the Library of Congress guide's two-microphone setups: placement in a real house, reinforcement, playback and live cueing")}

**The honest starting point.** The one federal text this course found on recording a performance says where its advice stops: "The best on-location recording techniques for art forms like concerts, parades, and weddings are beyond the scope of our advice". What it does offer, from lesson 10: two directional microphones "about 6 inches apart and at a 110-degree angle", two omnidirectional microphones "about two feet apart and parallel to one another", or "a single stereo mic". And its verdict: "It may not make for the best audio or video, but reviewing recordings like this can still teach you a lot about the art forms you're studying."

That is the setup this lesson teaches: a documentation recording of a performance, made for study. It is not how a production records or amplifies a show.

**What such a setup cannot do.** It records the room from one position. It does not feed the house speakers, it cannot bring one voice forward in a mix, and it plays no cues. Those are the jobs this lesson leaves to the practitioner.

**A room changes what you record.** The 1987 Army television course: "An empty room reflects sound and therefore, records differently than that same room filled with furniture". The source speaks of furniture. Whether a full audience changes a hall in the same way is a question for the practitioner who reviews this lesson; do not assume it from this sentence.

**Choose the spot.** The fieldwork guide's advice for choosing where to record applies as much to a rehearsal room or a hall: "politely ask to use the spot that looks the best, and to turn off any TVs, music, or noisy equipment like fans." And: "Avoid noise! Be careful of setting up near a window onto a busy street. Also, try to avoid spots near refrigerators, freezers, air conditioners, furnaces, heat and AC vents, and water heaters. All of these locations might be silent when you arrive and become noisy the second you begin recording." *Civic Documentation: Recording What Happened in Public*, lesson "13 · Audio, photography, and live reporting", says the same for a public meeting: sit where the microphone will hear the speakers "rather than the air conditioning".

**Ask first.** A performance belongs to the people giving it. The guide's sample release includes the line: "By giving permission, I understand that I do not give up any copyright or performance rights that I may hold." Record a performance only with the performers' knowledge and the agreement of whoever runs the space. Lesson 23 covers releases.

**Where the practitioner's part begins.** No source read for this course covers sound in a theater beyond capturing a run-through: reinforcement, playback of recorded cues, show control, and cueing an effects operator live. Those parts of this lesson wait for the theater sound designer or operator named at the top.

:::reveal What does the Library of Congress guide say about the best on-location techniques for concerts, parades and weddings? ||| They "are beyond the scope of our advice".

:::reveal What does the Army course say about an empty room? ||| It "reflects sound and therefore, records differently than that same room filled with furniture".

:::reveal Name four places the guide tells you to avoid setting up near. ||| Any four of: a window onto a busy street, refrigerators, freezers, air conditioners, furnaces, heat and AC vents, water heaters.

:::reveal What does the guide's release say the person giving permission does not give up? ||| "any copyright or performance rights that I may hold."

## Sources
- ${AFC} Locator: p. 19 (PDF p. 25), choosing a spot; p. 25 (PDF p. 31), performances; appendix, p. 40 (PDF p. 46), the sample release. ${AFC_PAGES}
- ${ARMY_1987} Locator: the acoustics passage, printed p. 28 by the course's contents (PDF p. 40).`,
    },
    {
      slug: "kit-and-site-survey",
      title: "15 · The kit and the site survey",
      section: "4 · Recording in a theater and on a set",
      recallContent: [
        {
          prompt: "Where does the Library of Congress guide's advice on recording performances stop?",
          answer: "At the best on-location techniques for concerts, parades and weddings, which \"are beyond the scope of our advice\".",
        },
        {
          prompt: "Why might a sound check in an empty room mislead, by the Army course's account?",
          answer: "\"An empty room reflects sound and therefore, records differently than that same room filled with furniture\".",
        },
      ],
      body: `${P("a production sound mixer or boom operator, to bring the 1989 kit list up to current practice and to add what the documents do not carry: wireless systems and frequencies, timecode, and today's mixers and recorders")}

**A 1989 Army kit list.** The Army's 1989 course on electronic field production (EFP), its term for television shot in the field, lists the audio side: "EFP audio requirements should include extra mike cables, gaffer tape, and headphones for monitoring audio pickup, spare batteries, fuses and windscreens for the microphones." On microphones: "Shotgun mikes and fishpole boom microphones are used so as not to be seen"; wireless mics were "becoming more common on EFP shoots"; and with several microphones you need "a sound mixer, preferably battery powered". Its glossary: "Fishpole boom: Hand-held and used mainly on location".

**A course that dates itself.** The same course says of itself: "This subcourse reflects the doctrine current at the time the subcourse was prepared." Its lessons also state that their material was derived in part from a published textbook, Alan Wurtzel's *Television Production*, second edition. So this course quotes it briefly and links it, and does not copy it.

**Survey before the shoot.** Go at the hour you will record: survey "at the same time of day the event is scheduled". Ask the question that shapes the whole kit: "Does this shoot require hidden microphones or will they be visible on camera?" And keep power away from signal: avoid "laying electric cables near video or audio lines".

**Care of cable.** The 1987 course: handle a cable "by the metal connector, NOT by the wire". "Cables that are not in use should be neatly coiled. Be careful not to wrap them too tight". And for everyone's safety: "When cables are run across the floor, tape them down so that no one will trip." *Knot-Tying & Rope Work*, lesson "26 · Broadcast & stage rigging basics (safety-flagged)", covers cable runs on a broadcast. The coiling method itself is a hands-on skill this course leaves to the practitioner, since neither Army text describes one.

**The fieldworker's additions.** From lesson 7, the Library of Congress list adds "An extension cord and power strip.", "A steel tape measure" and "Release forms."

**Where the practitioner's part begins.** The documents stop in 1989. Current wireless systems, and any rules on the radio frequencies they use, were not researched for this course; nor were timecode, today's mixers and recorders, or how a sound department divides the work on a set. Those wait for the production sound mixer or boom operator named at the top.

:::reveal Why does the 1989 Army course say shotgun and fishpole boom microphones are used? ||| "so as not to be seen".

:::reveal Name four items on the Army's EFP audio list. ||| Any four of: extra mike cables, gaffer tape, headphones for monitoring, spare batteries, fuses, windscreens.

:::reveal When should you survey a location, by the Army course's rule? ||| "at the same time of day the event is scheduled".

:::reveal What should you keep away from video and audio lines? ||| Electric cables: avoid "laying electric cables near video or audio lines".

## Sources
- ${ARMY_1989} Locator: PDF p. 2 (the doctrine statement); printed p. 1 (PDF p. 5), the references; p. 3 (PDF p. 7); p. 4 (PDF p. 8); p. 11 (PDF p. 15); p. 12 (PDF p. 16); glossary, p. 29 (PDF p. 32).
- ${ARMY_1987} Locator: printed p. 30 (PDF p. 43); p. 31 (PDF p. 45).
- ${AFC} Locator: p. 11 (PDF p. 17). ${AFC_PAGES}`,
    },
    {
      slug: "placing-a-lav-pointing-a-shotgun",
      title: "16 · Placing a lav, pointing a shotgun",
      section: "4 · Recording in a theater and on a set",
      recallContent: [
        {
          prompt: "What did the 1989 Army course say should be on the EFP audio list?",
          answer: "\"extra mike cables, gaffer tape, and headphones for monitoring audio pickup, spare batteries, fuses and windscreens for the microphones.\"",
        },
        {
          prompt: "What question does the Army's site survey ask about microphones?",
          answer: "\"Does this shoot require hidden microphones or will they be visible on camera?\"",
        },
      ],
      body: `${P("a production sound mixer or boom operator, to check the 1987 placement rules against current practice, to show how a lavalier is hidden on wardrobe and how a boom is worked, and to correct anything dated")}

**The lavalier in 1987.** The Army's television course: "The most commonly used microphone in television is the lavalier". The rules it taught:
- "Have the production personnel place the mike on the subject".
- "place the mike in the direction the performer will face".
- "Do not place a lavalier microphone under a tie or clothing", because "This may result in muffled audio or extraneous clothing noise".

That last rule is about a 1987 studio. How a lavalier is hidden under wardrobe today is current practice this lesson holds for the practitioner: no source read for this course describes it.

**The lavalier in an interview.** The Library of Congress guide: "Set your microphones as close to the speakers (including yourself) as possible. Lavaliere mics are best for one-on-one interviews and should be clipped near the top button of a shirt or blouse", which puts it, the guide says, "about 6 inches below the chin. If you use a standard microphone, it should be mounted to a stand and placed about 6 to 10 inches from the speakers." (The guide spells it "Lavaliere".)

**A microphone in the picture.** For radio, the Army course had microphones "usually placed on a 45 degree angle, about four to six inches from the announcer's mouth". Television changes that: "Microphone placement is more critical for television if and when the mike is to be seen on-camera."

**The shotgun.** The Army course's shotgun microphone is "designed to pick up sound and not be in the picture", and it "may be several feet from the speaker and still pick up acceptable audio". (Its page in the scan is PDF page 38; the printed number there is unclear, so check the page image.) The 1989 course pairs it with the boom: "Shotgun mikes and fishpole boom microphones are used so as not to be seen". How a boom operator aims and moves a shotgun through a take is practitioner's knowledge; no source read for this course describes it.

**Why the 1987 rules still teach.** Read them as reasons, not recipes. The microphone goes where the voice will be (the direction the performer faces), close to the source (6 inches below the chin, or 6 to 10 inches on a stand), and away from cloth that can rub it ("extraneous clothing noise"). The equipment has changed; those reasons are what you bring to the practitioner.

:::reveal Where does the Library of Congress guide clip a lavalier for a one-on-one interview? ||| Near the top button of a shirt or blouse, about 6 inches below the chin.

:::reveal Why did the 1987 Army course say not to put a lavalier under a tie or clothing? ||| "This may result in muffled audio or extraneous clothing noise".

:::reveal What two things does the Army course say about the shotgun microphone? ||| It is "designed to pick up sound and not be in the picture", and it "may be several feet from the speaker and still pick up acceptable audio".

:::reveal At what angle and distance did the Army course place a radio microphone? ||| At a 45 degree angle, about four to six inches from the announcer's mouth.

## Sources
- ${ARMY_1987} Locator: printed p. 23 (PDF p. 34); p. 24 (PDF p. 35); p. 25 (PDF p. 36); the shotgun passage, PDF p. 38 (printed page unclear in the scan).
- ${ARMY_1989} Locator: printed p. 3 (PDF p. 7).
- ${AFC} Locator: p. 19 (PDF p. 25). ${AFC_PAGES}`,
    },
    {
      slug: "meters-tone-and-gain",
      title: "17 · Meters, tone and gain",
      section: "4 · Recording in a theater and on a set",
      recallContent: [
        {
          prompt: "Name two of the 1987 Army course's lavalier rules.",
          answer: "Any two of: production personnel place the mike on the subject; place it in the direction the performer will face; do not place it under a tie or clothing.",
        },
        {
          prompt: "How far below the chin does the Library of Congress guide place a lavalier?",
          answer: "About 6 inches, clipped near the top button of a shirt or blouse.",
        },
      ],
      body: `**What a console is for.** The 1987 Army course gives a console "three primary functions: 1. amplify sound 2. control sound 3. route sound". The catalog's *Break Into Sports & Media Broadcasting*, lesson "6 · Signal flow and audio fundamentals", follows a signal through a broadcast; this lesson stays with the meter and the level.

**The VU meter, in the Army's words.** "The normal acceptable level for riding audio is between 80-100 per cent VU modulation". The same page, printed p. 36, teaches three phrases an operator will hear at the console: "in the red", "the needle is pegged" and "riding in the mud". This lesson quotes only the normal band. The page explains each phrase; open it for the explanations, which are not repeated here.

**Moving between sources.** The same course names "DOWN and UNDER" in its list beside fading, crossfade and segue.

**When a unit fails.** Bypassing "is always done from the "output" of the last good piece of equipment, around the bad piece of equipment". Find the last unit that works, and route around the one that does not.

**A tone at the head of the tape.** The Army's 1986 field-production course: "The audio test signal recorded is a 1000 Hz tone". The park manual records "30 seconds of the 94dB calibration tone" (lesson 8). Two documents, two jobs: the Army calls its tone an "audio test signal" for a television chain, and the park manual's tone is for calibration, which "verifies the values recorded are accurate".

**Manual gain, again.** The 1986 course: "set the levels in the manual mode, not the automatic gain control (AGC) mode, as the AGC will cause hiss and roar as it seeks a signal during quiet portions of the program." On a digital recorder, the park manual's rule from lesson 8 is the hands-on version: set the level "two increments below the point at which the peak indicator level is illuminated". And the Library of Congress guide's check from lesson 8 applies here too: "the meters should tell you if the recording levels are good."

**No digital target here.** This course gives no target figure for a digital meter, because no source read for it states one. When a practitioner or a manufacturer's manual gives you one, write down where it came from.

**Try it.** On your own recorder, find the peak indicator. Speak at the loudest level you expect, raise the input until the peak light just comes on, then lower it two steps. Record ten seconds, and play it back on headphones.

:::reveal What three primary functions does the Army course give a console? ||| Amplify sound, control sound and route sound.

:::reveal What is the Army course's normal acceptable level for riding audio? ||| "between 80-100 per cent VU modulation".

:::reveal Where is a failed unit bypassed from, by the Army course's rule? ||| From "the "output" of the last good piece of equipment, around the bad piece of equipment".

:::reveal What tone does the 1986 Army course record as its audio test signal? ||| "a 1000 Hz tone".

## Sources
- ${ARMY_1987} Locator: printed p. 32 (PDF p. 46); p. 36 (PDF p. 51); p. 41 (PDF p. 56); p. 42 (PDF p. 57).
- ${ARMY_1986} Locator: printed p. 100 (PDF p. 192).
- ${NPS_MANUAL} Locator: section 4.4.2, p. 42; section 4.4.3, p. 42. ${MANUAL_PAGES}
- ${AFC} Locator: p. 20 (PDF p. 26). ${AFC_PAGES}`,
    },
    {
      slug: "slates-room-tone-and-sync",
      title: "18 · Slates, room tone and sync: where the documents stop",
      section: "4 · Recording in a theater and on a set",
      recallContent: [
        {
          prompt: "What is the 1986 Army course's audio test signal?",
          answer: "\"a 1000 Hz tone\".",
        },
        {
          prompt: "What did the 1987 Army course give as the normal acceptable level for riding audio?",
          answer: "\"between 80-100 per cent VU modulation\".",
        },
      ],
      body: `${P("a production sound mixer or boom operator, or BAM from his own set experience, to write the part on room tone, wild tracks, slating, timecode and the sound report; this lesson is not released without one")}

**The documented part: say who, where and when, on the recording.** The Library of Congress guide: "At the start of the recording, make a brief opening statement that specifies the date and place of the interview, the names of the people on the recording, yourself included, and the general topic of the interview." And at the end: "Make a brief closing announcement on the recording at the end of the interview." A spoken label at the head of a file stays with the file even if the paperwork is lost.

**A known reference.** Lessons 8 and 17 added two more things a recording can begin with: a calibration tone (the park manual's 30 seconds at 94 dB) or a test signal (the Army's 1000 Hz tone), and, once for each system, 30 seconds through the dummy microphone to capture its own noise. A recording that starts with who, where, when and a reference can be checked by someone who was not there.

**Keep your own sounds off the take.** "Avoid overusing such expressions as "I see" or "uh-huh" while your interviewee is talking. Although this is polite in everyday conversation, it mars the recording, distracts listeners, and makes it difficult to use the audio for production. Nodding in approval usually works well." If the recording is audio only and the speaker gestures, "quickly describe what the interviewee is doing." The guide recommends "about an hour for a session." The 1942 farm-radio handbook in lesson 20 makes the same point about paper: copy typed on one side only, "because the sound of turning pages might be picked up by the microphone".

**Room tone: recommended, not yet sourced.** *Voice Acting: The Instrument*, lesson "12 · Levels, files, and the honest minimum chain", recommends recording room tone. No document read for this course describes how room tone is recorded on a set, so this lesson leaves it to the practitioner.

**Where the practitioner's part begins.** A film or television set adds conventions that no source read for this course describes: wild tracks, slating, timecode and keeping picture and sound in sync, and the sound report. They are named here so you know they exist. How each is done today waits for the production sound mixer, boom operator or BAM named at the top, and this lesson is not released until one of them has written that part.

:::reveal What does the Library of Congress guide's opening statement specify? ||| The date and place, the names of the people on the recording (yourself included), and the general topic.

:::reveal Why does the guide tell you not to keep saying "I see" or "uh-huh"? ||| It "mars the recording, distracts listeners, and makes it difficult to use the audio for production." Nodding works instead.

:::reveal What should you do in an audio-only recording when the speaker gestures? ||| "quickly describe what the interviewee is doing."

:::reveal Which set conventions does this lesson name but leave to the practitioner? ||| Room tone, wild tracks, slating, timecode and sync, and the sound report.

## Sources
- ${AFC} Locator: p. 20 (PDF p. 26), the opening statement and the "uh-huh" passage; p. 21 (PDF p. 27); p. 22 (PDF p. 28), the closing announcement. ${AFC_PAGES}
- ${NPS_MANUAL} Locator: sections 4.4.2 and 4.4.3, p. 42. ${MANUAL_PAGES}
- ${ARMY_1986} Locator: printed p. 100 (PDF p. 192).
- ${AAA_1942} Locator: section "Preparing the Final Copy" (the scan's printed page numbers are partly lost in its text).`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Recording in a theater and on a set",
      section: "4 · Recording in a theater and on a set",
      body: "A graded check on recording a performance, the kit and the site survey, placing a lavalier and a shotgun, meters, tone and gain, and the spoken slate, with the places the documents stop. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: Sounds made by hand
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "older-than-the-name",
      title: "19 · Older than the name",
      section: "5 · Sounds made by hand",
      recallContent: [
        {
          prompt: "What does the Library of Congress guide's opening statement specify?",
          answer: "The date and place, the names of the people on the recording (yourself included), and the general topic.",
        },
        {
          prompt: "Which set conventions does lesson 18 name but leave to a practitioner?",
          answer: "Room tone, wild tracks, slating, timecode and sync, and the sound report.",
        },
      ],
      body: `${QR("a safety reviewer, to read every device described here before any of it becomes a build list; nothing with lead is built at all, and the scrap-iron artillery stays history")}

**A 1913 stage manual.** In 1913 Adolphe Brachart published in Paris a small book, *Machinerie scénique et bruits de coulisses*: stage machinery and backstage noises. Its title page prices it at "PRIX : 1 FRANC". Most of it is machinery, such as trains painted on flats, a sea of moving cloth, and snow made from clippings of glove leather. A few pages make sound with objects, and they are the oldest document in this course on doing it. The French below is quoted from the scan's text, read through its errors; the translations are ours.

**Hooves.** "On réalise le piaffement des chevaux à l'aide de deux moitiés d'une écaille de noix de coco vidée de son fruit. Ou mieux encore avec deux blocs de bois auxquels sont cloués de vrais fers à cheval et qu'on chausse aux mains au moyens de courroies". In English: horses' hooves are made with two halves of an emptied coconut shell or, better, with two wooden blocks with real horseshoes nailed on, strapped to the hands. The hooves "se martèlent selon la cadence naturelle sur des pavés": they are beaten in natural rhythm on paving stones. For sandy ground, "une caisse métallique rectangulaire et plate, remplie d'une couche égale d'argile": a flat rectangular metal box holding an even layer of clay.

Then a warning about skill: "Quatre accessoiristes sont nécessaires pour reproduire une charge de cavalerie. On n'arrive pas à imiter du jour au lendemain le rythme des sabots. Il faut toujours un certain apprentissage pour varier le ton, afin d'obtenir : le pas, le trot, le galop et le fond-de-train." Four prop handlers are needed for a cavalry charge; nobody learns the rhythm of hooves overnight, and it takes practice to vary it for walk, trot, gallop and full gallop.

**Hail.** "Un sac de riz, vidé d'une certaine hauteur sur une plaque de zinc, produit un crépitement d'une fort acceptable vraisemblance." A bag of rice, poured from a height onto a zinc sheet, gives a crackle of quite acceptable likeness.

**Rain.** A metal drum turns on its axis, its inside divided by slanted sheet-metal vanes. "On garnit l'intérieur du tambour d'une abondante provision de pois secs." "Les pois alors roulent en bondissant sur les vannes et ricochent de l'une à l'autre : il s'ensuit des sons qui imitent assez bien le clapotement d'une forte averse." Fill the drum with plenty of dried peas; as it turns they bounce from vane to vane, and the sound imitates a heavy downpour fairly well.

**Wind.** "un grand cylindre de bois", covered with "une toile métallique, à fine mailles, fortement tendue, que frotte une corde, également métallique, de contrebasse": a large wooden cylinder covered in fine, tightly stretched metal mesh, rubbed by a metal double-bass string. Turning the crank imitates "les sifflements prolongés du vent qui s'engouffre dans les cheminées ou passe par les interstices des portes et fenêtres", the long whistling of wind rushing into chimneys or through the gaps around doors and windows. A band of silk works too, "mais celle-ci s'use avec une rapidité qui ne laisse pas d'être coûteuse": it wears out fast enough to be expensive.

**Thunder, in two parts.** "Le tonnerre se compose de deux éléments : le grondement lointain et l'éclat tombant tout-à-coup dans un lieu voisin." Thunder has two elements: the distant rumble, and the crack that falls suddenly close by. The rumble comes from a sheet of metal hung by its two nearer corners on chains and shaken by a handle: "Plus on secoue la tôle, plus ces grondements deviennent forts et nourris", the harder the sheet is shaken, the louder and fuller the rumble. The sheet's dimensions are garbled in the scan's text, and this course has not checked the page image, so it gives none.

The crack is shown here as history only: "une dizaine de douves de tonneaux, enfilées alternativement à autant de plaques de plomb sur un cordage", about ten barrel staves threaded on a rope alternately with as many lead plates, hoisted on a pulley and dropped. Nobody builds that from this course. It uses lead, and it drops a weight.

**Artillery**, also history only: "en empilant de la vieille ferraille dans une brouette en fer et en faisant rouler celle-ci", by piling old scrap iron into an iron wheelbarrow and rolling it.

**Why it matters.** In this document, made sound is ordinary stage practice, printed in 1913 and sold for a franc. Lesson 21 asks where the name "Foley" came from; this lesson shows the method does not need the name.

**A modern federal example.** The Park Service article on Jacob Job reports that for an exhibit on Lewis and Clark he recorded "the firing of muskets, striking of flint for fire making, candle pouring, singing, and playing of instruments such as mouth harps and fiddles". Period sounds, made with period objects, recorded for visitors.

:::reveal Which two hoof-makers does Brachart describe, and which does he prefer? ||| Two halves of an emptied coconut shell, or, better, two wooden blocks with real horseshoes nailed on, strapped to the hands.

:::reveal How many prop handlers does Brachart say a cavalry charge needs? ||| Four, and the rhythm of walk, trot, gallop and full gallop takes practice.

:::reveal What does Brachart pour, and onto what, to make hail? ||| A bag of rice, poured from a height onto a zinc sheet.

:::reveal Which of Brachart's devices does this course show as history only, never as a build? ||| The thunder crack (barrel staves and lead plates, dropped) and the artillery (scrap iron in an iron wheelbarrow).

## Sources
- ${BRACHART} Locator: title page (PDF pp. 2 to 3); hooves, soft ground, cavalry and artillery, printed p. 22 (PDF p. 26); thunder, printed pp. 25 to 26 (PDF pp. 29 to 30); hail, printed p. 26 (PDF p. 30); rain, printed pp. 26 to 27 (PDF pp. 30 to 31); wind, printed pp. 27 to 28 (PDF pp. 31 to 32). Read in the archive.org text; translations are ours.
- ${NPS_WEST} Locator: the paragraph on the Lewis and Clark exhibit recordings.`,
    },
    {
      slug: "writing-the-cue",
      title: "20 · Writing the cue",
      section: "5 · Sounds made by hand",
      recallContent: [
        {
          prompt: "How does Brachart make rain?",
          answer: "A metal drum with slanted sheet-metal vanes inside, filled with plenty of dried peas; as it turns, the peas bounce from vane to vane like a heavy downpour.",
        },
        {
          prompt: "What two elements does Brachart say thunder is made of?",
          answer: "The distant rumble and the crack that falls suddenly close by.",
        },
      ],
      body: `**A cue in parentheses.** In 1928 the U.S. Department of Agriculture's Radio Service wrote a short radio play, *The Neglected Crop or The Farmer's Spare Time*. Its header, read through the scan's errors: "A Radio Drama in One Act Suggesting a Way to Keep Our Best Young Farmers On the Farm". Its effects are written into the script in parentheses:
- "(Sound of door slamming as Bob goes out door to right and sound of scraping and then heavy walking as Henry Allen enters from left.)"
- "(Sound as of door closing)"
- "(Sounds as if a chair is knocked over as she runs to door and calls"
- "(Sound of knocking as if at door)"

Read them as instructions to whoever makes the sound. Each names a sound, and several tie it to the action in the story ("as Bob goes out", "as she runs to door"), so the effect lands with the moment. "As if" and "as of" ask for the sound of a thing, not the thing itself.

The library's stamp on the scan is a reminder about any old document: "Historic, archived document Do not assume content reflects current scientific knowledge".

**Two columns.** The Army's 1986 field-production course describes the two-column script, in which "Music and sound effects are identified as well as directions for talent".

**The test every effect must pass.** The Army's 1989 field-production course: music "must enhance or support the message, not distract from it", and then, "The use of sound effects falls under the same guidelines as music and lyrics." That is a rule about serving the message, not about rights. Lesson 24 covers rights.

**Paper is a sound too.** The 1942 farm-radio handbook *Tips on Radio Broadcasting*: "It's better if copy is typed on only one side of the sheet, because the sound of turning pages might be picked up by the microphone". And on the day itself: "The engineer will want a chance to audition your voices, before air time, so he can adjust your position before the microphone".

**Try it.** Take a short scene you know and write three cues in the 1928 style: the sound, then the action in the story that causes it. Then test each against the 1989 rule: does it support the message, or distract from it? Cut any that distract.

:::reveal How does the 1928 USDA script mark its sound effects? ||| In parentheses inside the script, for example "(Sound of knocking as if at door)".

:::reveal What rule does the 1989 Army course apply to sound effects? ||| The same as for music: it "must enhance or support the message, not distract from it".

:::reveal Why did the 1942 handbook want copy typed on one side of the sheet? ||| "because the sound of turning pages might be picked up by the microphone".

:::reveal Write a cue in the 1928 style for a character leaving a room in anger. ||| One possible answer: "(Sound of door slamming as Ann goes out door to left.)" The sound first, then the action that causes it.

## Sources
- ${USDA_1928} Locator: header and library stamp; the parenthetical cues (leaves are not mapped in the scan; search its full text for "Sound of knocking").
- ${ARMY_1986} Locator: printed p. 21 (PDF p. 53).
- ${ARMY_1989} Locator: printed p. 23 (PDF p. 26).
- ${AAA_1942} Locator: sections "Preparing the Final Copy" and "The Broadcast" (the scan's printed page numbers are partly lost in its text).`,
    },
    {
      slug: "the-foley-story-open-record",
      title: "21 · The Foley story, as an open record",
      section: "5 · Sounds made by hand",
      recallContent: [
        {
          prompt: "How does the 1928 USDA radio script mark its effects?",
          answer: "In parentheses, naming the sound and often the action that causes it, such as \"(Sound of knocking as if at door)\".",
        },
        {
          prompt: "What guideline does the 1989 Army course say sound effects fall under?",
          answer: "The same as music and lyrics: they must \"enhance or support the message, not distract from it\".",
        },
      ],
      body: `**A name built into the job.** Film sound has a whole vocabulary built on one surname. An unsigned page on FilmSound.org begins: "Like many other workers in post production, I heard the terms foley studio, foley sheets, foley footsteps, foley reels, foley walker, foley editor, without fully realizing, for some years, that the term foley was the name of a man."

**What the page says.** The page is written in the first person and signed by nobody. Its writer says the account was put together "through the help of his former co-workers, friends, and his daughter". It says "Jack was born in Yorkville, N.Y. in 1891". It quotes a column Foley wrote in 1952 for the *Universal International Studio Club News*: "The Warner kids on the neighboring ranch had just come up with a sound picture 'The Jazz Singer' while the hard riding, cliff-hanging shoot-from-the-hip boys on the U ranch were complacently rounding up the last few scenes of the great American musical, 'Showboat', a SILENT picture."

It also hedges its own story: "Jack's article was not so clear as to actual sequence of events, but evidently a composite music and effects track was then added to the hitherto silent "Showboat". The music and effects were added simultaneously and the first "Foley" session was born." The same page says the studio first spent "the next three days and nights making "Melody Of Love..."" on a borrowed Fox-Case sound unit. So even the page's own sequence is unsettled.

**What the colleagues remember.** The page credits the technique to colleagues' memories. From George Pal: "Jack's technique was to record all the effects for a reel at one time," and "Jack added the footsteps, the movement, the sound of various props-all in one track. He used a cane as an adjunct to his own footsteps. With that cane, he could make the footsteps of two to three people. He kept a large cloth in his pocket which could be used to simulate movement." From Joe Sikorsky: "Jack emphasized you have to act the scene... you have to be the actors and get into the spirit of the story the same as the actors did, on the set." These are recollections, reported on an unsigned page. They describe a method worth trying. They are not documents.

The page also tells anecdotes about particular films. This course leaves them out, because nothing behind them has been found.

**What has not been found.** Foley's 1952 column has not been located. Searches of the Library of Congress for Foley material found nothing relevant, and no trade-press report of the sound version of *Show Boat* turned up. A 2016 article in *CineMontage*, the Motion Picture Editors Guild's magazine, gives another account of how the name started. This course could read that article only through a tool that summarizes web pages and can paraphrase them, so it neither quotes nor relies on it. Every date and story about Jack Foley in this lesson is, for now, reported and not verified. The search for the 1952 column stays open; if it is found, this lesson changes.

**How to hold an open record.** Teach the method from the documents (lessons 19 and 20). Tell the name's story with its sources showing: who wrote it, when, and what they relied on. And when a source is unsigned, say so, as this lesson has.

**A credit case.** *Who the Rule Leaves Out: Delia Derbyshire, Ruby Payne-Scott, Zitkala-Šá, and the Paper Each Rule Left*, lesson "4 · A BBC document that names nobody", treats the BBC Radiophonic Workshop as a case about who gets credited for sound.

:::reveal Who wrote the FilmSound.org page on Jack Foley? ||| Nobody signs it. It is written in the first person, and its writer says it was assembled with help from Foley's former co-workers, friends and daughter.

:::reveal Which primary document does the page quote, and has it been found? ||| A column Foley wrote in 1952 for the Universal International Studio Club News. It has not been located.

:::reveal Which two tools does George Pal remember Foley using besides his own feet? ||| A cane, to make the footsteps of two or three people, and a large cloth kept in his pocket to simulate movement.

:::reveal Why does this lesson not quote the 2016 CineMontage article? ||| It was read only through a summarizing tool, which can paraphrase, so its words could not be checked.

## Sources
- ${FILMSOUND} Locator: opening paragraph; the paragraph quoting the 1952 column; the paragraph on the composite track; the paragraphs quoting George Pal and Joe Sikorsky. Unsigned; link only.
- ${CINEMONTAGE} Locator: not used for any claim; named only as an account this course could not read directly.`,
    },
    {
      slug: "made-against-real",
      title: "22 · Made against real",
      section: "5 · Sounds made by hand",
      recallContent: [
        {
          prompt: "What is the status of every date and story about Jack Foley in this course?",
          answer: "Reported, not verified: the main account is an unsigned page, and the 1952 column it quotes has not been found.",
        },
        {
          prompt: "What technique does Joe Sikorsky remember Foley emphasizing?",
          answer: "\"you have to act the scene... you have to be the actors and get into the spirit of the story\".",
        },
      ],
      body: `${QR("a safety reviewer, before any build list for a thunder sheet, rain drum or wind machine is added to this lesson")}

${P("BAM's demonstration: a thunder sheet, a dried-pea rain drum and rice poured on a metal sheet, each recorded with the lesson 8 chain and set beside the Park Service's thunder and rain clips")}

**Listen to the real thing first.** Brachart, 1913: "Faire entendre le tonnerre avant d'avoir fait briller l'éclair est absolument irrationnel. Il est certain que l'étude et l'observation des phénomènes naturels doivent faire l'objet des soins les plus attentifs d'un régisseur intelligent." Our translation: sounding the thunder before the lightning has flashed is plainly irrational; the study and observation of natural phenomena must have the closest attention of an intelligent stage manager. The rule is older than any recording in this course: listen to the world before you imitate it.

**The real things, free to use.** From lesson 2: the Park Service's thunder clip ("Audio recording of thunder, NPS Natural Sounds and Night Skies Division") and rain clip ("Sound recording of rain, Devils Postpile National Monument, California"), both in the public domain, and Yellowstone's "Thunder".

**How much Brachart claimed.** Rice on zinc gives "une fort acceptable vraisemblance", a quite acceptable likeness; the pea drum imitates a downpour "assez bien", fairly well. The man who wrote the recipes claimed likeness, not identity. Hold your own made sounds to the same honest standard.

**The method.**
1. Listen to the real recording on headphones and make a list, as in lesson 3: what is constant, what happens, and when.
2. Read its spectrogram, as in lesson 2: where the sound sits from bottom to top, how it changes from left to right, where it is brightest.
3. Make your sound, and record it with the chain from lesson 8: limiter off, low cut off, level set by hand.
4. Set the two side by side, by ear and by spectrogram, and write down what your imitation gets wrong.
5. Change one thing and record again.

**What this lesson does not yet give: the build.** Brachart's thunder sheet is a sheet of metal hung on chains, his rain drum turns on its axis, and his wind machine is a cylinder turned by a crank. Each has edges, weight or moving parts, and this lesson gives no building instructions until the safety reviewer named at the top has read them. Brachart's thunder crack and artillery are never built from this course at all (lesson 19). Until the build lists are added, work steps 1 and 2 on the clips, and write down in words what a made version would have to get right.

:::reveal What did Brachart call sounding thunder before the lightning? ||| "absolument irrationnel": plainly irrational.

:::reveal Which two Park Service clips does this lesson set made sounds against? ||| The thunder clip from the Natural Sounds and Night Skies Division and the rain clip from Devils Postpile National Monument.

:::reveal How did Brachart rate his own rain drum? ||| It imitates a heavy downpour "assez bien", fairly well: a likeness, not the real thing.

:::reveal What should you do before building anything from this lesson? ||| Wait for the build lists a safety reviewer has read; until then, listen, read the spectrogram and describe in words what a made version must get right.

## Sources
- ${BRACHART} Locator: thunder before lightning and hail, printed p. 26 (PDF p. 30); thunder sheet, printed pp. 25 to 26 (PDF pp. 29 to 30); rain, printed pp. 26 to 27 (PDF pp. 30 to 31); wind, printed pp. 27 to 28 (PDF pp. 31 to 32). Translations are ours.
- ${NPS_THUNDER} Locator: clip caption and spectrogram.
- ${NPS_RAIN} Locator: clip caption and spectrogram.
- ${YELL_LIBRARY} Locator: index entry "Thunder".`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Sounds made by hand",
      section: "5 · Sounds made by hand",
      body: "A graded check on Brachart's 1913 stage sounds, writing a cue, the Foley story as an open record, and setting a made sound against the real thing. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6: Permission: people, and other people's sounds
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "consent-before-record",
      title: "23 · Consent before you press record",
      section: "6 · Permission: people, and other people's sounds",
      recallContent: [
        {
          prompt: "What did Brachart say about thunder before lightning?",
          answer: "It is \"absolument irrationnel\", plainly irrational; a stage manager must study and observe natural phenomena with the closest attention.",
        },
        {
          prompt: "What are the first two steps of the made-against-real method?",
          answer: "Listen to the real recording and list what you hear, then read its spectrogram.",
        },
      ],
      body: `**The floor.** The Library of Congress fieldwork guide puts the ethic plainly: "Since our interviewees are giving us their time and trust, it's also important that we be honest and truthful with them. For these reasons, you shouldn't record anyone without their knowledge, do research under false pretenses, or lie to the community you're studying. You shouldn't use their voices or images without permission. You don't want to use the information they give you in a way they don't approve of, or publish it in ways that will harm or embarrass them."

It notes that universities treat this as regulated research: "Interviewees are often considered "human subjects," just like people in medical experiments, and universities are very careful about regulating human subject research."

**A release, in writing.** "If you plan to use the information from your interviews in publications, podcasts, films, or online presentations (and it's safest to assume you will at some point), it's important to obtain a statement from both the interviewer and interviewee granting permission." The guide offers its own form, under the page heading "Design Release Forms (or Just Use Ours!)". Its table of contents words that heading differently; quote the page. Three rules from that page:
- The form is a starting point: "if you already know you may want to use the interview in a commercial context, you might need to design your own form by adding language to ours."
- The person can say no: "Remember, after the interview, interviewees always have the right to refuse to sign a release form if they have reservations about what was discussed."
- The paper outlasts your word: "If the collection and its release forms go to another institution or individual in the future, they're only bound by what it says on the release, not by a promise you made personally."

**Read the form itself.** The sample release in the guide's appendix says: "By giving permission, I understand that I do not give up any copyright or performance rights that I may hold." It grants use of "my name, video or photographic image or likeness, statements, performance, and voice reproduction, or other sound effects without further approval on my part." It was written for recordings deposited in an archive, not for commercial use. A recording for a commercial production, on a set or in a theater, needs a release written for that use, and no source read for this course supplies one.

**What this lesson does not tell you: the law.** This course states no law on recording people. Whether one person's consent is enough or everyone's is needed, what a location or talent release must contain, and what union rules apply on a set were not researched for it. The guide's ethic is the floor, not the law. For the law of recording in public, the catalog's lesson is *Civic Documentation: Recording What Happened in Public*, "9 · What the law protects, and what it does not". For rights in what you record, see *Rights, Permissions and Clearances Research*, "5 · The trap: when the rights field is about the wrong object".

**Places as well as people.** From lesson 12: the guide would turn location data off for "a sacred site whose location the community doesn't want to reveal". The same respect extends to where you recorded.

:::reveal What are the first two things the Library of Congress guide says you shouldn't do? ||| Record anyone without their knowledge, or do research under false pretenses.

:::reveal What does the guide say about using its release form commercially? ||| You "might need to design your own form by adding language to ours."

:::reveal After the interview, can a person refuse to sign the release? ||| Yes: "interviewees always have the right to refuse to sign a release form if they have reservations about what was discussed."

:::reveal Why does a promise you made personally not protect an interviewee later? ||| Because a later holder of the collection is "only bound by what it says on the release, not by a promise you made personally."

## Sources
- ${AFC} Locator: pp. 10 to 11 (PDF pp. 16 to 17), the ethics passage; p. 11 (PDF p. 17), human subjects; p. 16 (PDF p. 22), release forms and location data; table of contents, p. iii; appendix, p. 40 (PDF p. 46), the sample release. ${AFC_PAGES}`,
    },
    {
      slug: "licenses-for-sounds",
      title: "24 · Public domain, CC0, BY and BY-NC",
      section: "6 · Permission: people, and other people's sounds",
      recallContent: [
        {
          prompt: "Who is a later holder of a fieldwork collection bound by, according to the Library of Congress guide?",
          answer: "Only by \"what it says on the release, not by a promise you made personally.\"",
        },
        {
          prompt: "For what kind of use was the guide's sample release written?",
          answer: "Archival deposit, not commercial use; the guide says commercial use may need added language.",
        },
      ],
      body: `${QR("a licensing reviewer, because the Creative Commons license deeds themselves were not read for this course, and this lesson teaches only from the Park Service's disclaimer and Freesound's own FAQ and terms")}

**Federal sound, and its limits.** The Park Service's disclaimer: "Copyright law does not protect "any work of the U.S. Government" where "a work prepared by an officer or employee of the U.S. Government as part of that person's official duties" (See, 17 U.S.C. §§ 101, 105). Thus, material created by the National Park Service and presented on this website, unless otherwise indicated, is generally considered in the public domain." Two phrases in that sentence do real work: "unless otherwise indicated" and "generally". The same page: "Not all information or content on this website has been created or is owned by the National Park Service. Some content is protected by third party rights". And the Park Service's Arrowhead "may not be used without prior written permission".

So check each item. In the gallery from lesson 2, the stream, rain and thunder clip pages each carry a credit line, "Credit / Author: NPS". A photo on a Park Service page may carry a named person's credit instead: the article on Jacob Job credits its photos "courtesy of Jacob Job", and his recordings are not shown to be federal work. Credit is asked for even where it is not required: "a citation or acknowledgement of the National Park Service as the source is appreciated", and Yellowstone asks you to credit the "National Park Service" where appropriate. For commercial republication, the disclaimer suggests a notice such as "No protection is claimed in original U.S. Government works".

**Freesound: a license chosen per sound.** "Freesound aims to create a huge collaborative database of audio snippets, samples, recordings, bleeps, ... released under Creative Commons licenses that allow their reuse." It "lets the user select one of three licenses for their sounds. And, we used to have a 4th license, which complicates matters." The three are "zero (cc0)", "attribution (by)" and "attribution noncommercial (by-nc)"; the old fourth is "sampling plus".

Freesound's own summary, which opens with "We aren't lawyers so this isn't legal advice": "for the "zero" license you can do pretty much what you want with the sound. You could even sell the sound, ... but you can't claim you are the author! For "attribution" you should always mention the original creators of the sounds when you use them. "Noncommercial" works like attribution, but you can't earn any money with the piece of work you create!"

Its attribution template: ""sound1" by user1 ( http://freesound.org/s/soundID/ ) licensed under CCBYNC 4.0".

Its remix rules: a sound under BY or BY-NC may not be re-released as CC0, and a BY-NC sound may not be re-released as BY.

**"It is on the site" is not a license check.** Freesound itself says: "As per our terms of service our users are required to follow the rules and not upload any copyrighted material. However ... there might be cases where the users of our site are (un)knowingly uploading illegal content." Its terms have the uploader warrant "that he/she has all necessary rights in the sound and metadata to grant such license". A warranty is the uploader's promise, not proof. The FAQ also warns that "a lot of the sound effects from this site are being used "raw" in songs", so a commercial song released later can bring a Content ID claim against your video; it advises disputing with evidence "that the Freesound upload predates the copyrighted work". And "as of July 2026 Freesound has introduced a new Generative AI preferences panel", where uploaders can state preferences "on top of those already defined by the corresponding Creative Commons license".

**Libraries this course could not read.** This course could not read xeno-canto's terms, because the site blocked the request, and it has not read the terms of the university and park libraries the gallery links. Read each one yourself before you reuse a recording from it.

**The composition is not the recording.** *Rights, Permissions and Clearances Research*, lesson "5 · The trap: when the rights field is about the wrong object", makes the point for music: "The composition and the recording are separate rights".

:::reveal Which two phrases in the Park Service disclaimer keep "public domain" from covering everything on its site? ||| "unless otherwise indicated" and "generally".

:::reveal What are Freesound's three current licenses? ||| "zero (cc0)", "attribution (by)" and "attribution noncommercial (by-nc)".

:::reveal Can a sound under BY-NC be re-released as BY, by Freesound's remix rules? ||| No. BY-NC may not be re-released as BY, and neither BY nor BY-NC may be re-released as CC0.

:::reveal Why is "it is on Freesound" not proof the uploader had the rights? ||| Freesound says users may be "(un)knowingly uploading illegal content", and the uploader's warranty is a promise, not proof.

## Sources
- ${NPS_DISCLAIMER} Locator: heading "Ownership".
- ${NPS_GALLERY} Locator: the rights line above the clip list; the list of other libraries.
- ${NPS_STREAM} Locator: credit line.
- ${YELL_LIBRARY} Locator: introduction.
- ${NPS_WEST} Locator: photo credit lines.
- ${FREESOUND_FAQ} Locator: "What is this site anyway?" and the entries on licenses, attribution, remixing, Content ID, uploads of copyrighted material, and generative AI preferences. Link only.
- ${FREESOUND_TERMS} Locator: the uploader's warranty and the license sentence. Link only.`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · Permission: people, and other people's sounds",
      section: "6 · Permission: people, and other people's sounds",
      body: "A graded check on consent and releases from the Library of Congress fieldwork guide, and on what public domain, CC0, BY and BY-NC mean for a sound you did not make. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7: Sound as work
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-does-sound-work",
      title: "25 · Who does sound work",
      section: "7 · Sound as work",
      recallContent: [
        {
          prompt: "What does Freesound's own summary say a CC0 sound lets you do, and not do?",
          answer: "\"you can do pretty much what you want with the sound. You could even sell the sound, ... but you can't claim you are the author!\"",
        },
        {
          prompt: "What notice does the Park Service disclaimer suggest for commercial republication?",
          answer: "\"No protection is claimed in original U.S. Government works\" (or \"No claim to original U.S. Government works\").",
        },
      ],
      body: `**The occupation.** O\\*NET, the U.S. Department of Labor's occupation database, describes 27-4014.00, Sound Engineering Technicians: "Assemble and operate equipment to record, synchronize, mix, edit, or reproduce sound, including music, voices, or sound effects, for theater, video, film, television, podcasts, sporting events, and other productions." One listed task is the habit from lesson 13: "Keep logs of recordings." Reported job titles include "Audio Engineer", "Recording Engineer", "Sound Engineer" and "Sound Technician (Sound Tech)".

**The numbers, as O\\*NET shows them.** "Median wages (2025) $35.16 hourly, $73,130 annual"; "Employment (2025) 15,000 employees"; "Projected growth (2025-2035) Decline (-1% or lower)"; "Projected job openings (2025-2035) 1,000". These are national figures for one occupation, from a page updated October 6, 2026. Check the live page before you rely on any of them.

**A neighbor occupation.** 27-4011.00, Audio and Video Technicians, "Set up, maintain, and dismantle audio and video equipment ... for live or recorded events, such as concerts, meetings, conventions, presentations, podcasts, news conferences, and sporting events." One task reads: "Control the lights and sound of events, such as live concerts, before and after performances, and during intermissions." "Stagehand" is among its reported job titles, and O\\*NET shows its median wage as "(2025) $27.93 hourly, $58,100 annual".

**Training.** O\\*NET places sound engineering technicians in Job Zone Three: "one or two years of training involving both on-the-job experience and informal training with experienced workers". It lists two apprenticeship titles, "Recording Engineer" and "Sound Mixer", "approved by the U.S. Department of Labor for use in a Registered Apprenticeship Program". This course is not that training and earns no credential. It is a map of the craft and of the documents behind it.

**Unions and associations.** Under "Accreditation, Certification, & Unions", O\\*NET lists the International Alliance of Theatrical Stage Employees, Moving Picture Technicians, Artists and Allied Crafts; the International Brotherhood of Electrical Workers; the Motion Picture Editors Guild; the National Association of Broadcast Employees and Technicians - Communications Workers of America; and the Society of Broadcast Engineers. Its associations include the Audio Engineering Society and the Cinema Audio Society. O\\*NET lists them; it does not say which one covers which job, and neither does this course.

**The crew around you.** The first course in this series, *Rigging for Stage and Broadcast Crews*, opens with who is on a show crew, in lesson "1 · Who rigs on a show", and reads which federal rulebook applies, in lesson "4 · Which rulebook applies"; this course does not repeat them. For broadcast careers, *Break Into Sports & Media Broadcasting* covers getting in, in lessons "13 · Game day: roles, call times, and where utility fits", "14 · Internships, freelancing, and building credits" and "15 · Unions, networking, and landing the first job".

:::reveal Which O*NET code is Sound Engineering Technicians? ||| 27-4014.00.

:::reveal What does O*NET say about training for Job Zone Three? ||| "one or two years of training involving both on-the-job experience and informal training with experienced workers".

:::reveal Which two apprenticeship titles does O*NET list for sound engineering technicians? ||| "Recording Engineer" and "Sound Mixer".

:::reveal Does O*NET say which union covers which sound job? ||| No. It lists unions and associations without saying which covers which job.

## Sources
- ${ONET_SOUND} Locator: summary page, description, "Tasks", "Sample of reported job titles", "Job Zone", apprenticeship titles, "Wages & Employment Trends", and "Accreditation, Certification, & Unions" with the associations list.
- ${ONET_AV} Locator: summary page, description, "Tasks", "Sample of reported job titles", wages.`,
    },
    {
      slug: "capstone-logged-and-made",
      title: "26 · Capstone: a logged recording and a made sound",
      section: "7 · Sound as work",
      recallContent: [
        {
          prompt: "What were O*NET's median wages (2025) for sound engineering technicians?",
          answer: "$35.16 hourly, $73,130 annual.",
        },
        {
          prompt: "Under which O*NET occupation is \"Stagehand\" a reported job title?",
          answer: "27-4011.00, Audio and Video Technicians.",
        },
      ],
      body: `${QR("a safety reviewer, for part B: no sound is built for this capstone until the build lists in lessons 19 and 22 have been reviewed")}

**What you will hand in.** Two pieces: a logged field recording with its spectrogram read, and one made sound set beside a public-domain recording of the real thing. Each step names the lesson that teaches it.

**Part A: a logged field recording.**
1. **Plan** (lesson 7). Choose a place and a time. Check the forecast wind. Find out whether you need anyone's permission to be there.
2. **Learn the kit at home** (lessons 7 and 8). Limiter off, low cut off, level set by hand two steps below the peak light. Record 30 seconds of your own system's noise.
3. **Listen first** (lesson 3). Arrive quietly and listen for twenty minutes before you record: the constant sounds, the events with their times, and your artifacts left out.
4. **Record** (lessons 8, 12 and 18). Begin with a spoken statement: the date, the place, your name and what you are recording. Check the counter, the meter and the headphones. If you leave the recorder running, write down when you left.
5. **Log it** (lesson 13). Title, place, date, description, format, rights, and a time list of what you heard.
6. **Read it** (lesson 2). Open the recording's spectrogram and write three sentences on what it shows and when.
7. **Keep it** (lessons 12 and 13). Three copies, one kept elsewhere. Keep the unedited original; if you make an edit, say what you removed.

**Part B: a made sound, set against the real thing.** Choose the Park Service's rain clip or its thunder clip (lesson 2).
1. **Listen and look** (lesson 22). Listen on headphones, list what you hear, and read the clip's spectrogram.
2. **Write the cue** (lesson 20), in the 1928 style: the sound, then the action that causes it.
3. **Make it only from a reviewed build list.** When lessons 19 and 22 carry a build list a safety reviewer has approved, make the sound from it. Until then, stop after the cue and write in words what a made version would have to get right.
4. **Compare** (lesson 22). If you made it, record it with the chain from lesson 8 and set the two spectrograms side by side. Write down what your sound gets wrong.

**Grade your own work.**

:::reveal Which three things in Part A show your recording chain is honest about itself? ||| The limiter and low cut off, a level set by hand, and a recording of your own system's noise floor.

:::reveal What should the spoken statement at the start of your recording contain? ||| The date, the place, your name and what you are recording.

:::reveal What should your log record about time? ||| A time list of the events you heard, and your departure time if you left the recorder running.

:::reveal Why does Part B stop at the cue for now? ||| No build list for the thunder sheet or rain drum has yet been read by a safety reviewer, so the course gives none.

## Sources
- ${NPS_MANUAL} Locator: section 4.3.2, pp. 39 to 40; sections 4.4.2 and 4.4.3, p. 42; sections 4.6.1 and 4.7.1, pp. 46 to 47. ${MANUAL_PAGES}
- ${AFC} Locator: p. 20 (PDF p. 26); p. 35 (PDF p. 41); appendix, p. 39 (PDF p. 45). ${AFC_PAGES}
- ${NPS_RAIN} Locator: clip and spectrogram.
- ${NPS_THUNDER} Locator: clip and spectrogram.
- ${USDA_1928} Locator: the parenthetical cues (search the full text for "Sound of knocking").`,
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz · Sound as work",
      section: "7 · Sound as work",
      body: "A graded check on what O*NET says about sound engineering technicians and audio and video technicians, the training and apprenticeship routes, and the steps of the capstone. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // FINAL
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-quiz",
      title: "Final quiz · Sound Craft",
      section: "Final assessment",
      body: "Ten questions drawn from the whole course, from the decibel to the capstone. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
        ],
      },
    },
  ],
};
