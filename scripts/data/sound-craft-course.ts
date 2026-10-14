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
// or cut it. The publishHoldReason in scripts/seed-courses.ts names the QR hold (hearing lessons and
// build lists); the practitioner hold on lessons 14 to 16, 18 and 22 is stated here and in each
// lesson's marker. No reviewer is named yet (brief questions 3 and 4). Lesson 18 does not ship
// without a practitioner (brief section 2).
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
//     23     a lawyer or rights-clearance reviewer (added here: the lesson states no consent law,
//            but its release passages edge toward legal advice; brief marks 6.1 QR "if it ever
//            states consent law", and any consent law added later needs a fetched statute per state)
//            23 is also held for BAM's answer to brief question 6 (where releases are taught)
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
//   BAM decision (brief question 5): 15 to 18, set sound here or in CRAFT-02 Videography.
//   Each P lesson is written only as far as the documents carry it and says, under "Where the
//   practitioner's part begins" or in its closing build note, where the practitioner takes over.
//   Unmarked: 1 to 4, 7 to 13 (9 is the practice drill), 20, 21, 25. Lesson 17 carries only the
//   question 5 marker.
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
  "U.S. Geological Survey. (n.d.). *Tom explains the bioacoustic monitor to USGS scientists* [Image]. https://www.usgs.gov/media/images/tom-explains-bioacoustic-monitor-usgs-scientists";
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

**dB(A).** "Sound levels adjusted for human hearing are expressed as dB(A)." The noise documents in section 2 write it dBA, and most of their limits are measured that way; lesson 6 shows the one that is not.

**Words for what you hear.** "Acoustic resources are physical sound sources, including both natural sounds (wind, water, wildlife, vegetation) and cultural and historic sounds (battle reenactments, tribal ceremonies, quiet reverence). Soundscape can be defined as the human perception of those physical sound resources." And: "The acoustic environment is the combination of all the acoustic resources within a given area." Noise has a definition too: "Noise is a sound that is unwanted or inappropriate in an environment." The same sound can be the subject of one recording and the noise in another. *Pickleball: Play It, Question It, Build With It*, lesson "27 · Courts: conversion, construction, and the problem nobody plans for", shows the same idea from the neighbors' side: the sound of play becomes the noise next door.

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

Look at the right-hand column. Every row but the first names a place, and most name a distance. A level written down without where it was measured cannot be checked or repeated, so this course asks you to log the place and the distance with every level you record.

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
      body: `**A picture of sound.** The Park Service's data page: "Sounds are represented visually using a spectrogram, an image that incorporates frequency (y axis), time (x axis), and amplitude (brightness of color)." The gallery's clip pages for stream, rain and thunder each carry the same caption with their spectrogram: "Spectrograms are graphs that visualize sounds. The brightness of the colors shows sounds' amplitude (loudness) across different frequencies (pitches), shown from bottom to top, and over time, from left to right."

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
- ${NPS_DATA} Locator: sub-headings "Sound Amplitude and Frequency" (frequency range, one-third-octave bands, spectrograms) and "Digital Audio Recordings" (archival recordings).
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
      body: `**Listen as well as record.** Park technicians do not rely on the recorder alone; their manual has them listen on site during the monitoring period. The Park Service: "Acoustic technicians conduct several hours of on-site listening at each monitoring location. This involves sitting quietly and noting each sound heard in a handheld digital device." Its training manual sets the amount, "Several hours of on-site listening (at least 2.5 percent of the site measurement duration)", and the listener: "Investigators should have 'normal' hearing."

The manual's section 4.7 gives the whole idea in one sentence: "During an on-site listening session, one inconspicuously listens to the soundscape and takes note of all audible events as they occur."

**The protocol, in the manual's own steps** (section 4.7.1; steps 5, 6 and 9 are not quoted here):
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
- ${NPS_DATA} Locator: sub-headings "On-site Listening" and "Meteorological".
- ${NPS_MANUAL} Locator: section 4.7, p. 46; section 4.7.1, steps 1 to 4, 7, 8 and 10, pp. 46 to 47; the Palm PDA line, p. 46. ${MANUAL_PAGES}
- ${NPS_WEST} Locator: heading "Exceptional Sounds" (the paragraph introducing Jacob Job and his role; the paragraph quoting him on being quiet) and heading "Parting Thoughts" (his closing words on minding your own noise).`,
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

A source that says two incompatible things on one page cannot be the only witness for either. When a source contradicts itself, this course leaves out both claims unless another verified source settles which one is right. That is a habit worth keeping for every manual you read.

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
- ${NPS_DATA} Locator: sub-heading "Sound Amplitude and Frequency" (low-noise, high-sensitivity microphones).
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
          // Lesson 1: frequency, level and the decibel
          { prompt: "How does the Park Service define frequency?", options: ["The number of times per second a sound pressure wave repeats itself", "The relative strength of a sound wave, which we perceive as loudness", "The distance a sound pressure wave travels through still air in one second", "The time a sound takes to fade by ten decibels after it stops"], correctIndex: 0, explanation: "'Frequency, sometimes referred to as pitch, is the number of times per second that a sound pressure wave repeats itself.' Strength perceived as loudness is amplitude.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "What other word does the Park Service say is sometimes used for frequency?", options: ["Volume", "Pitch", "Decibels", "Loudness"], correctIndex: 1, explanation: "'Frequency, sometimes referred to as pitch'. Volume and loudness are how the page describes amplitude.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "What is the unit of frequency?", options: ["The decibel", "The pascal", "The hertz (Hz)", "The watt"], correctIndex: 2, explanation: "'The units of frequency are called hertz (Hz).' The decibel measures amplitude.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "What range of frequencies does the Park Service say a person with normal hearing can hear?", options: ["2 Hz to 2,000 Hz", "12.5 to 20,000 Hz", "200 to 200,000 Hz", "20 Hz to 20,000 Hz"], correctIndex: 3, explanation: "'Humans with normal hearing can hear sounds between 20 Hz and 20,000 Hz.' The 12.5 Hz figure is the park equipment's lower limit, not a person's.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "What does the Park Service call frequencies above 20,000 Hz?", options: ["Ultrasound", "Infrasound", "Subsonic", "White noise"], correctIndex: 0, explanation: "'Frequencies above 20,000 Hz are known as ultrasound.' Infrasound is below 20 Hz.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "What does the Park Service call sound below 20 Hz?", options: ["Ultrasound", "Infrasound", "Room tone", "Low cut"], correctIndex: 1, explanation: "The page puts infrasound '(below 20 Hz)'. Ultrasound is above 20,000 Hz.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "How does the Park Service define amplitude?", options: ["The number of times per second a sound pressure wave repeats itself", "The range of frequencies a microphone turns into electrical energy", "The relative strength of sound waves, perceived as loudness or volume", "The combination of all the acoustic resources within a given area"], correctIndex: 2, explanation: "'Amplitude is the relative strength of sound waves (transmitted vibrations), which we perceive as loudness or volume.' Repetitions per second is frequency.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "In what unit does the Park Service say amplitude is measured?", options: ["Hertz", "Watts per meter", "Cycles per second", "Decibels"], correctIndex: 3, explanation: "'Amplitude is measured in decibels (dB), which refer to the sound pressure level or intensity.'", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "What does the Park Service give as the lower threshold of human hearing?", options: ["0 dB at 1 kHz", "0 dB at 200 Hz", "10 dB at 1 kHz", "20 dB at 20 Hz"], correctIndex: 0, explanation: "'The lower threshold of human hearing is 0 dB at 1kHz.'", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "According to the Park Service, what does a 10 dB increase do to perceived loudness?", options: ["It halves the perceived loudness", "It makes the sound seem twice as loud", "It makes the sound seem ten times as loud", "It changes nothing a listener can hear"], correctIndex: 1, explanation: "'an increase of 10 dB causes a doubling of perceived loudness'. The tenfold figure in the same sentence is about intensity, not loudness.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "In the Park Service's vacuum-cleaner example, if one machine measures 70 dB, what would 80 dB equal?", options: ["Only two vacuum cleaners", "Twenty vacuum cleaners", "Ten vacuum cleaners", "A hundred vacuum cleaners"], correctIndex: 2, explanation: "'if the sound of one vacuum cleaner measures 70 dB, 80 dB would be the equivalent of 10 vacuum cleaners.' Ten machines' worth of intensity, heard as a doubling.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "In the Park Service sentence about 'a ten-fold increase in sound level', what does this course say 'sound level' must mean?", options: ["The loudness a listener's ear reports", "The pitch of the sound wave", "The distance from source to listener", "The physical intensity of the sound"], correctIndex: 3, explanation: "The same sentence says 10 dB doubles perceived loudness, so the tenfold 'sound level' must be the physical intensity, not loudness.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "Why does this course conclude that the Park Service's tenfold 'sound level' cannot mean loudness?", options: ["The same sentence already says perceived loudness only doubles", "The page defines sound level in hertz rather than in decibels", "NIOSH forbids using that phrase for perceived loudness", "The vacuum-cleaner example measures distance, not level"], correctIndex: 0, explanation: "One sentence says the same 10 dB both doubles perceived loudness and is a tenfold increase in sound level. Both cannot describe loudness, so the tenfold figure is intensity.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "What does NIOSH say a 3-dB increase represents?", options: ["Ten times the sound energy", "A doubling of the sound energy", "Doubled perceived loudness", "A halving of exposure risk"], correctIndex: 1, explanation: "NIOSH: 'a 3-dB increase/decrease represents a doubling or halving of the sound energy.' A doubling of perceived loudness is the Park Service's figure for 10 dB.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "What does the Park Service say dB(A) expresses?", options: ["Sound levels measured at the peak of a bang", "Sound levels recorded under water", "Sound levels adjusted for human hearing", "Sound levels averaged over a whole year"], correctIndex: 2, explanation: "'Sound levels adjusted for human hearing are expressed as dB(A).' The noise documents write it dBA.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "How does the Park Service define noise?", options: ["Any sound louder than 85 dBA at the listener's position", "Any sound produced by machines or people rather than by nature", "Any sound above 20,000 Hz that people cannot hear", "A sound that is unwanted or inappropriate in an environment"], correctIndex: 3, explanation: "'Noise is a sound that is unwanted or inappropriate in an environment.' So the same sound can be the subject of one recording and the noise in another.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "What does the Park Service call the human perception of physical sound resources?", options: ["The soundscape", "The acoustic environment", "Noise", "The decibel"], correctIndex: 0, explanation: "'Soundscape can be defined as the human perception of those physical sound resources.' The acoustic environment is the combination of the resources themselves.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "What does the Park Service call the combination of all the acoustic resources within a given area?", options: ["The soundscape", "The acoustic environment", "A management zone", "The spectrogram"], correctIndex: 1, explanation: "'The acoustic environment is the combination of all the acoustic resources within a given area.' The soundscape is how people perceive them.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "Which of these does the Park Service list as a cultural and historic acoustic resource?", options: ["Wind through the vegetation", "Wildlife near the water", "Battle reenactments", "Water running in a stream"], correctIndex: 2, explanation: "Cultural and historic sounds are '(battle reenactments, tribal ceremonies, quiet reverence)'. Wind, water, wildlife and vegetation are the natural ones.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "At what level does the park ladder list leaves rustling in Canyonlands National Park?", options: ["10 dBA", "40 dBA", "60 dBA", "20 dBA"], correctIndex: 3, explanation: "20 dBA, 'Leaves rustling (Canyonlands National Park)'. 10 dBA is the Haleakala volcano crater.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "Which sound does the park ladder list at 100 dBA?", options: ["Thunder (Arches National Park)", "Military jet (Yukon-Charley)", "Cruiser motorcycle at 15 m (Blue Ridge Parkway)", "Crickets at 5 m (Zion National Park)"], correctIndex: 0, explanation: "100 dBA is 'Thunder (Arches National Park)'. The motorcycle is 80 and the military jet 120.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "What level does the park ladder give for cannon fire at 150 m at Vicksburg?", options: ["100 dBA", "126 dBA", "120 dBA", "140 dBA"], correctIndex: 1, explanation: "126 dBA, 'Cannon fire at 150 m (Vicksburg National Military Park)', the loudest row of the ladder.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "Besides a level, what does nearly every row of the park ladder give?", options: ["The frequency of the loudest part", "The time of day it was recorded", "A place, and in most rows a distance", "The make of the microphone used to measure it"], correctIndex: 2, explanation: "Every row but 'Threshold of human hearing' names a place, and most name a distance, such as 'Crickets at 5 m (Zion National Park)'.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "Why does this course ask you to log the place and the distance with every level you record?", options: ["OSHA's noise rule requires both on every field recording", "The recorder cannot store a level without them", "A spectrogram cannot be drawn without them", "A level without them cannot be checked or repeated"], correctIndex: 3, explanation: "A level written down without where it was measured cannot be checked or repeated. The rule is the course's own, drawn from how the park ladder is written.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "What does this course say finishing it certifies you for?", options: ["Nothing, since it is not a qualification", "Entry-level work as an audio utility", "A first-year sound apprenticeship", "Hearing-conservation duties on a crew"], correctIndex: 0, explanation: "Lesson 1: 'It is not a qualification, and finishing it certifies you for nothing.'", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "For a voice recorded in a home booth, which catalog lessons does this course send you to?", options: ["Oral history, lessons 6 to 8, on interviews", "Voice Acting: The Instrument, 10 to 12", "Mockumentary, lessons 2 and 3, on staging", "Civic Documentation, 13 and 14"], correctIndex: 1, explanation: "Voice Acting: The Instrument, lessons 10 to 12, covers a voice in a home booth. Oral history lesson 6 is linked for the seated interview.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "Which catalog lesson does this course link for the seated interview and its files?", options: ["Voice Acting: The Instrument, lesson 11, 'The room: why it matters more than the mic'", "Acting, lesson 23, 'The self-tape: the part you actually control'", "Oral history, lesson 6, 'Recording, metadata, and outliving your laptop'", "Mockumentary, lesson 2, 'The grammar of persuasion, read backwards'"], correctIndex: 2, explanation: "Oral history lesson 6, 'Recording, metadata, and outliving your laptop', is linked for the seated interview and its files.", sourceLessonSlug: "frequency-level-and-the-decibel" },

          // Lesson 2: reading a spectrogram
          { prompt: "On a Park Service spectrogram, what does the y axis show?", options: ["Time", "Loudness", "Distance", "Frequency"], correctIndex: 3, explanation: "A spectrogram incorporates 'frequency (y axis), time (x axis), and amplitude (brightness of color).'", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "On a Park Service spectrogram, what does the x axis show?", options: ["Time, running left to right", "Frequency, low to high", "Amplitude, dim to bright", "Distance from the mic"], correctIndex: 0, explanation: "Time is the x axis, 'over time, from left to right', in the gallery's caption.", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "On a Park Service spectrogram, what does the brightness of color show?", options: ["Frequency, or pitch", "Amplitude, or loudness", "Distance from the source", "The time of day"], correctIndex: 1, explanation: "'The brightness of the colors shows sounds' amplitude (loudness) across different frequencies (pitches)'.", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "Where does a low-pitched sound appear on a gallery spectrogram?", options: ["Near the top", "To the left", "Near the bottom", "To the right"], correctIndex: 2, explanation: "Frequencies are 'shown from bottom to top', so low pitches sit near the bottom.", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "Which way does time run on a gallery spectrogram?", options: ["From right to left", "From bottom to top", "From top to bottom", "From left to right"], correctIndex: 3, explanation: "The caption: 'over time, from left to right'. Bottom to top is frequency.", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "What frequency range does the Park Service say park sound equipment can record?", options: ["12.5 to 20,000 Hz", "20 to 20,000 Hz", "1 to 200,000 Hz", "20 to 96,000 Hz"], correctIndex: 0, explanation: "'Currently, sound equipment used in the parks can record sounds from 12.5 to 20,000 Hz'. 20 to 20,000 Hz is normal human hearing.", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "Into how many ranges do park monitoring systems split the frequency spectrum?", options: ["12, each a full octave of the spectrum", "33, each one-third of an octave", "10, each one decade wide", "96, each one semitone wide"], correctIndex: 1, explanation: "They 'split the frequency spectrum into 33 smaller ranges, each encompassing one-third of an octave.'", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "How often do park monitoring systems record a dB level for each one-third octave band?", options: ["Each minute", "Once per hour", "Once per second", "Once per day"], correctIndex: 2, explanation: "'For each one-third octave band, dB level is recorded once per second for the duration of the monitoring period.'", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "What two kinds of record does a park monitoring system keep, according to the sound gallery?", options: ["Video of the whole site and a written log of every visitor", "Audio as WAV files and a daily weather report", "Sound pressure levels only, with no audio at all", "Audio as mp3 files and sound pressure levels in decibels"], correctIndex: 3, explanation: "The division 'collects data using systems that record audio as mp3 files and sound pressure levels in decibels.'", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "What does the sound gallery say park monitoring systems are designed to replicate?", options: ["The hearing experience of a person on the ground", "The hearing range of a bat in flight", "The hearing of wildlife that lives in the area being monitored", "The noise at the edge of the nearest road"], correctIndex: 0, explanation: "'These are designed to replicate the hearing experience of a person on the ground.'", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "Where does the sound gallery say its recordings are analyzed?", options: ["The CSU Listening Lab in Fort Collins", "The PARC Listening Lab, a collaborative with Penn State", "A Library of Congress archive in the American Folklife Center", "NOAA's Passive Acoustic Data Archive"], correctIndex: 1, explanation: "At 'the Protected Areas Research Collaborative (PARC) Listening Lab, a research collaborative between the NPS and the Department of Recreation, Park, and Tourism Management at Pennsylvania State University.'", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "Which of these does the sound gallery list among the sources its recordings help identify?", options: ["Mining claims", "Radio stations", "Visitors to the park", "Cell towers"], correctIndex: 2, explanation: "The recordings help identify 'wildlife, weather, park visitors, and park operations.'", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "Why does the Park Service keep high-quality archival recordings and not only the numbers?", options: ["Federal law requires every park to keep each of its recordings for fifty years", "Numbers cannot be stored without a recording attached to them", "The recordings are sold to fund the monitoring program", "They make it possible to compute any conceivable metric for future analysis"], correctIndex: 3, explanation: "'High-quality archival recordings make it possible to compute any conceivable metric for future analysis.'", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "What does the Park Service expect of the metrics specified today?", options: ["They will likely change and be inadequate to meet all future needs", "They will never change once they are published", "They will be replaced by an international standard within five years", "They are complete, so the recordings can be deleted after analysis"], correctIndex: 0, explanation: "'Metrics specified today will likely change and be inadequate to meet all future needs.' That is why the recordings are kept.", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "Under what terms does the Park Service offer its sound gallery clips?", options: ["Free for personal listening only, with downloading not allowed at all", "Public domain: they may be downloaded, and credit is asked for", "Licensed for classroom use only, with written permission", "Sold per clip, with the money going to the parks"], correctIndex: 1, explanation: "'The files are in the public domain and may be downloaded. Enjoy, and please give the appropriate credit.'", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "Where was the sound gallery's rain clip recorded?", options: ["Muir Woods, Golden Gate National Recreation Area", "Arches National Park", "Devils Postpile National Monument, California", "Yellowstone National Park"], correctIndex: 2, explanation: "'Sound recording of rain, Devils Postpile National Monument, California.' Muir Woods is the stream clip.", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "Where was the sound gallery's stream clip recorded?", options: ["Devils Postpile National Monument", "Old Faithful, in the Yellowstone National Park library", "Canyonlands National Park", "Muir Woods, Golden Gate National Recreation Area"], correctIndex: 3, explanation: "'Sound recording of a stream in Muir Woods, Golden Gate National Recreation Area, California.'", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "What credit line do the gallery's stream, rain and thunder clip pages carry?", options: ["Credit / Author: NPS", "Credit / Author: Jacob Job", "Credit / Author: CSU", "Credit / Author: LOC"], correctIndex: 0, explanation: "Each of the three pages reads 'Credit / Author: NPS'.", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "Which three Yellowstone library index entries does this course name?", options: ["Cannon Fire, Musket Fire and Reveille", "Mud Pots, Old Faithful Geyser and Thunder", "Chain Saw, Jet and Snowmobile", "Stream, Rain and Helicopter"], correctIndex: 1, explanation: "Lesson 2 names 'Old Faithful Geyser', 'Mud Pots' and 'Thunder' from the Yellowstone index. The other sets are clip names from the main sound gallery, which the course does not name as Yellowstone entries.", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "What does the Yellowstone sound library say its files may be used for?", options: ["Only noncommercial projects that credit the park in writing", "Only listening on the park's own website", "They may be downloaded and used without limitation", "Only research approved by the park's scientists"], correctIndex: 2, explanation: "'They may be downloaded and used without limitation; however, please credit the \"National Park Service \" where appropriate.'", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "Why does this course call the gallery clips fine for practice but not archival?", options: ["They are each too short to show a full spectrogram", "They are recorded below 20 Hz", "They are copyrighted by Penn State", "They are MP3 files, not an archival format"], correctIndex: 3, explanation: "The clips are MP3: fine for listening and spectrogram practice, not the archival format lesson 13 describes.", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "How should you treat recordings from the other libraries the gallery links, such as the CSU Listening Lab's?", options: ["Not as public domain until you have read their terms", "As public domain, because a federal NPS page links to them", "As free for noncommercial use with credit to NPS", "As copyrighted and never usable in any project"], correctIndex: 0, explanation: "This course has not read the terms of those libraries, so their recordings are not to be treated as public domain until you have.", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "In lesson 2's primary-source exercise, which two clip pages do you open with the spectrogram in view?", options: ["The stream clip and then the ocean clip", "The rain clip and the thunder clip", "The cannon clip and the musket clip", "The geyser clip and the mud pots clip"], correctIndex: 1, explanation: "The exercise opens the rain clip page and the thunder clip page and plays each with its spectrogram in view.", sourceLessonSlug: "reading-a-spectrogram" },

          // Lesson 3: listening on site
          { prompt: "How much on-site listening does the park manual ask for at each site?", options: ["Ten minutes at the start and ten at the end of each visit", "One full day, from dawn to dusk, before the monitor is set", "Several hours, at least 2.5 percent of the measurement duration", "Exactly 25 days, the same as the monitoring period itself"], correctIndex: 2, explanation: "'Several hours of on-site listening (at least 2.5 percent of the site measurement duration)'.", sourceLessonSlug: "listening-on-site" },
          { prompt: "What does the park manual say about the hearing of its investigators?", options: ["They must pass an OSHA audiogram first", "They must be trained musicians", "They should wear hearing protectors", "They should have 'normal' hearing"], correctIndex: 3, explanation: "'Investigators should have 'normal' hearing.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "In the park manual's one-sentence summary of on-site listening, how does the listener take note of audible events?", options: ["Inconspicuously, as they occur", "Aloud, for others to hear", "Afterward, from the recording", "Only when they pass 85 dBA"], correctIndex: 0, explanation: "'one inconspicuously listens to the soundscape and takes note of all audible events as they occur.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "Why does step 1 of the listening protocol ask you to approach as inconspicuously as possible?", options: ["So your footsteps never trigger the recorder's limiter", "So as not to alter natural processes such as animal vocalizations", "Because park rules forbid visitors near a monitoring station", "So that your arrival can be logged as the first artifact"], correctIndex: 1, explanation: "'It is best not to alter natural processes such as animal vocalizations or attract the attention of curious humans while listening.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "How far from the acoustic monitor does step 2 of the listening protocol say to sit?", options: ["At least 5 feet (1.5 m)", "At least 500 ft (150 m)", "At least 50 ft (15 m)", "Exactly 50 m, measured by tape"], correctIndex: 2, explanation: "Choose a spot 'at least 50 ft (15 m) from the acoustic monitor'.", sourceLessonSlug: "listening-on-site" },
          { prompt: "Step 2 of the listening protocol says to sit in what kind of spot relative to the monitor?", options: ["The highest point with a view of the monitor", "Downwind of the monitor, facing into the wind", "Inside a parked car by the monitor", "The same vegetation type as the monitor"], correctIndex: 3, explanation: "Sit 'in the same vegetation type as the acoustic monitor.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "By step 2 of the listening protocol, where should the wind be when you sit to listen?", options: ["At your back", "Blowing in your face", "From your left", "It does not matter"], correctIndex: 0, explanation: "'Sit with the wind to your back.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "Why does step 2 tell you to adjust snaps, zippers and velcro before listening?", options: ["They can damage the acoustic monitor", "They might make noise once you are listening", "Park rules require all clothing to be fastened near monitors", "They reflect sound toward the microphone"], correctIndex: 1, explanation: "Make 'any adjustments to clothing or gear that might make noise (e.g. snaps, zippers, velcro).'", sourceLessonSlug: "listening-on-site" },
          { prompt: "What does step 2 of the listening protocol say to avoid sitting near?", options: ["Running water, because it always hides the sound of birds completely", "Other listeners, who must each sit at least 100 m from anyone else", "Large objects or topographical features that might alter the sound", "Trails, because hikers are not permitted anywhere near a monitor"], correctIndex: 2, explanation: "'Avoid sitting near any large objects or topographical features that might alter the quality of sound reaching your ears.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "What does step 3 of the listening protocol tell you to do?", options: ["Put on headphones before you begin", "Close your eyes for the whole of the session", "Face the loudest sound you can hear", "Remove your hat if it covers your ears"], correctIndex: 3, explanation: "'Remove your hat if it covers your ears.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "In step 4 of the listening protocol, what do you make a mental catalog of?", options: ["The constant sounds at the site, such as wind, water or birds", "Every aircraft you hear that day, with its make, model and altitude", "The settings on the recorder before you start", "The names of the plants within 15 m of you"], correctIndex: 0, explanation: "'Make a mental catalog of the constant sounds you hear at the site (such as wind, water, or birds).'", sourceLessonSlug: "listening-on-site" },
          { prompt: "What does step 7 of the listening protocol say to do when one sound is being masked by another?", options: ["Log both sounds, each at its full strength", "Unselect the sound that is being masked", "Move closer until both are clear", "Stop the session and start again"], correctIndex: 1, explanation: "'Unselect a sound if it is being masked by another.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "What warning does step 7 give about a sound you suspect is being made?", options: ["Any suspected sound should be logged anyway, in case it proves real", "Suspected sounds count as artifacts and are left out", "Suspecting it is being made does not mean you can hear it", "A suspected sound must be confirmed by a second listener"], correctIndex: 2, explanation: "'Just because you suspect that a sound is being generated does not mean you can hear it.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "What rule of thumb does step 8 of the listening protocol give for birds?", options: ["Wait one minute after the bird is seen", "Log every call as a separate event", "Ignore any bird calling within 15 m of the acoustic monitor", "Wait ten seconds after the last sound was made"], correctIndex: 3, explanation: "'a good rule of thumb is to wait ten seconds after the last sound was made'.", sourceLessonSlug: "listening-on-site" },
          { prompt: "How does step 8 of the listening protocol describe aircraft?", options: ["It tends to fade in and out", "It is always louder than wind", "It is never audible in a park", "It masks every bird at the site"], correctIndex: 0, explanation: "Aircraft 'tends to fade in and out'.", sourceLessonSlug: "listening-on-site" },
          { prompt: "Which animal does step 8 say makes sounds easily confused with birds?", options: ["Tree frogs", "Squirrels", "Field crickets", "White-tailed deer"], correctIndex: 1, explanation: "Squirrels 'Make sounds easily confused with birds'.", sourceLessonSlug: "listening-on-site" },
          { prompt: "What are 'artifacts' in the park listening protocol?", options: ["Old recordings of the same site, kept on file for later comparison", "Objects left behind at the site that rattle when the wind blows", "Sounds you make at the site that would not happen without you", "Errors in the recorder's file caused by its batteries running low"], correctIndex: 2, explanation: "'Artifacts are sounds that we create at the listening site that would not otherwise happen if we weren't there.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "Which two examples of artifacts does the park manual give?", options: ["Aircraft overhead, and cars passing on a nearby road", "Birdsong, and squirrels in the trees", "Thunder, and wind in the branches", "Sneezing, and raindrops falling on a raincoat"], correctIndex: 3, explanation: "'This includes sounds like sneezing, or raindrops falling on a raincoat.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "What does the park listening protocol tell you to do with artifacts?", options: ["Leave them out: 'Do not enter these noises.'", "Enter them, tagged with the word 'artifact'", "Log them, and subtract them from the total later", "Count them toward the site's list of constant sounds"], correctIndex: 0, explanation: "'Do not enter these noises.' Your own sounds stay out of the log.", sourceLessonSlug: "listening-on-site" },
          { prompt: "How does the park manual tell 'wind' from 'wind induced noise'?", options: ["Wind is under 5 m/s; wind induced noise is anything above that wind speed", "Wind is air turbulence; wind induced noise is wind moving other things", "Wind comes from the left; wind induced noise always arrives from the right", "Wind is natural; wind induced noise is only wind striking the microphone"], correctIndex: 1, explanation: "''Wind' describes the sound of wind turbulence while 'wind induced noise' describes the sound of wind moving other objects to make noise'.", sourceLessonSlug: "listening-on-site" },
          { prompt: "What does step 10 of the listening protocol tell you to take between listening periods, and why?", options: ["Notes, to record the time of every event", "Readings, to recalibrate the sound level meter each time", "Breaks, to avoid compromising data with fatigue", "Photos, to show the weather at each period"], correctIndex: 2, explanation: "'to avoid compromising data with fatigue, take breaks between listening periods.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "Which two weather conditions does the Park Service say influence sound waves traveling through the air?", options: ["Cloud cover and the moonlight", "Barometric pressure and pollen counts", "Snow depth and lake ice cover", "Air temperature and humidity"], correctIndex: 3, explanation: "'Sound waves traveling through the air are influenced by air temperature and humidity.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "Above what wind speed does the Park Service exclude hours from certain types of analysis?", options: ["5 meters per second", "1 meter per second", "15 meters per second", "50 meters per second"], correctIndex: 0, explanation: "'Hours with wind speeds in excess of 5 meters per second are excluded from certain types of analysis due to interference.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "What does Jacob Job say people can hear on trails simply by being quiet?", options: ["Nothing but the wind", "A range of sounds", "Only birdsong at dawn", "Their own heartbeat"], correctIndex: 1, explanation: "'People can hear a range of sounds while hiking on trails or in the backcountry simply by being quiet'.", sourceLessonSlug: "listening-on-site" },
          { prompt: "What did the 2013 park manual use to log on-site listening, and what does this course say will do instead?", options: ["A laptop running a spreadsheet; a phone app will do the job", "A paper form from OSHA; any notebook will do", "A Palm PDA with software; a notebook and a watch will do", "A tape recorder; a smartphone voice memo will do"], correctIndex: 2, explanation: "The manual logs on 'a Palm PDA and NSP Soundscape V5 software'. The device is history; a notebook and a watch will do.", sourceLessonSlug: "listening-on-site" },
          { prompt: "In lesson 3's 'Try it' exercise, how long do you sit and listen outdoors before you ever press record?", options: ["Two minutes", "Two hours", "Twenty-five days", "Twenty minutes"], correctIndex: 3, explanation: "Sit for twenty minutes, list the constant sounds, then each event with its time, and leave your artifacts off the list.", sourceLessonSlug: "listening-on-site" },

          // Lesson 4: how a microphone hears
          { prompt: "How does the 1987 Army television course define a microphone?", options: ["A transducer turning acoustical sound energy into electrical energy", "An amplifier that makes acoustical sound energy louder for a recorder", "A filter that removes unwanted sound before it reaches the recorder", "A meter that measures sound pressure level in decibels"], correctIndex: 0, explanation: "'A microphone, like the ear, is a transducer that converts acoustical sound energy into electrical energy.'", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "What does the 1987 Army course compare a microphone to?", options: ["A loudspeaker", "The ear", "A camera lens", "A tuning fork"], correctIndex: 1, explanation: "'A microphone, like the ear, is a transducer'.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "On what basis does the 1987 Army course group microphones into three classifications?", options: ["Their price and build quality", "The kind of cable and connector each one uses", "Their directional pickup properties", "Their weight and size"], correctIndex: 2, explanation: "Mikes are 'grouped into three classifications according to their directional pickup properties'.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "Where does the 1987 Army course say a cardioid microphone accepts sound best?", options: ["At 90 degrees, to either side", "At the 180 degree point, behind it", "Equally well in every direction", "At the 0 degree point, where it points"], correctIndex: 3, explanation: "Cardioid mikes 'accept sound best at the 0 degree point with minimal response at the 180 degree point'.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "Where does the 1987 Army course say a cardioid microphone has minimal response?", options: ["At the 180 degree point, directly behind", "At 0 degrees, directly in front", "At the 45 degree point, off to one side", "Nowhere; its response is even all round"], correctIndex: 0, explanation: "'minimal response at the 180 degree point', the direction opposite the way it points.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "What plain pair of words does the Library of Congress fieldwork guide use for microphone pickup?", options: ["Cardioid and figure-eight, as in Army texts", "Directional and omnidirectional", "Dynamic and condenser", "Shotgun and lavalier"], correctIndex: 1, explanation: "The guide speaks of 'directional' and 'omnidirectional' microphones, and lesson 10 uses both.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "What does the 1987 Army course say about a dynamic microphone and wind?", options: ["It should never be used outdoors, in any weather", "It breaks in a strong wind", "It has a low wind-noise characteristic", "It needs no windscreen at all"], correctIndex: 2, explanation: "'the dynamic mike has a low wind-noise characteristic'. It is the ribbon that 'should never be used outdoors'.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "Why does a ribbon microphone stay indoors in this course?", options: ["Its ribbon picks up radio stations when used outdoors", "Sunlight can warp the thin ribbon within a few minutes outdoors", "Park rules ban ribbon microphones", "A strong wind may break the ribbon, rendering it useless"], correctIndex: 3, explanation: "The Army text: the ribbon 'should never be used outdoors. A strong wind may break the ribbon rendering the mike useless.'", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "How many types of microphone does page 21 of the 1987 Army course say there are?", options: ["Two: the dynamic and the velocity", "Three: dynamic, velocity and condenser", "Four, including the shotgun", "One: the dynamic"], correctIndex: 0, explanation: "Page 21: 'There are two types of microphones: the dynamic and the velocity'. Page 22 then describes a third, the condenser.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "Which type does page 22 of the 1987 Army course describe after page 21 names only two?", options: ["The shotgun mike", "The condenser", "The lavalier mike", "An underwater hydrophone"], correctIndex: 1, explanation: "Page 22 describes the condenser, a third type, after page 21 says there are two.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "What contradiction does this course find in the 1987 Army text's figure-eight description?", options: ["It calls the front dead, yet says the mike hears best at the front", "It says the mike is omnidirectional, yet gives it two dead sides", "It calls the sides dead, yet says the mike hears best at the sides", "It says the mike is a ribbon, yet describes it as a condenser"], correctIndex: 2, explanation: "'The dead side of the microphone is on either side', and it 'accepts sound best at the 0 degree and 270 degree axis points or sides'.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "What contradiction does this course find in the 1987 Army text on the dynamic microphone's frequencies?", options: ["It favors low frequencies, yet has an inherent low-frequency cutoff", "It records only speech frequencies, yet is the mike used for music", "It is described as cardioid and as omnidirectional on one page", "It favors high frequencies yet has a high-frequency cutoff"], correctIndex: 3, explanation: "The dynamic 'tends to favor high-frequency over low-frequency sounds' and, in the next sentence, has an 'inherent high-frequency cutoff'.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "What does this course do when a source contradicts itself?", options: ["Leaves out both claims unless another verified source settles it", "Teaches whichever claim appears first on the page, and drops the other", "Teaches whichever claim matches current gear", "Teaches both claims and lets the learner choose"], correctIndex: 0, explanation: "A source that says two incompatible things cannot be the only witness for either, so both are left out unless another verified source settles it.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "What does the Park Service say is ideal at sites where sound pressure levels are very low?", options: ["High-noise, low-sensitivity mikes", "Low-noise, high-sensitivity microphones", "Ribbon microphones in a windscreen", "Automatic gain control on the recorder"], correctIndex: 1, explanation: "'At sites where the sound pressure levels are very low, it is ideal to monitor with low-noise, high-sensitivity microphones.'", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "What does the 1987 Army course say windscreens will do?", options: ["Eliminate all of the unwanted wind sound completely", "Make no difference outdoors", "Not eliminate all unwanted sound, but help", "Double the frequency response"], correctIndex: 2, explanation: "Windscreens 'will not eliminate all the unwanted sound but they will help'.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "What cost of a windscreen does the 1987 Army course name?", options: ["They double the recorder's noise floor", "They make the microphone directional", "They stop the limiter working", "They slightly reduce the frequency response"], correctIndex: 3, explanation: "Windscreens 'slightly reduce the frequency response'.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "How does this course sum up a windscreen?", options: ["A trade, not a cure", "A full cure, not a trade", "A must on every indoor take", "A replacement for low cut"], correctIndex: 0, explanation: "It helps against wind and costs a little frequency response: 'A windscreen is a trade, not a cure.'", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "Which catalog lesson tells the story of the electret microphone patent?", options: ["Voice Acting, lesson 10, 'Mic technique: distance, angle, and consistency'", "Who Gets the Credit, lesson 10, 'Working inside the corporation'", "Break Into Sports & Media Broadcasting, lesson 6", "Mockumentary, lesson 2, 'The grammar of persuasion, read backwards'"], correctIndex: 1, explanation: "Who Gets the Credit: Black Inventors and the Machinery of Attribution, lesson '10 · Working inside the corporation', tells the electret microphone story.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "What does this course tell you to do before relying on a 1987 claim about gear?", options: ["Nothing, since Army doctrine never goes out of date", "Ask the Army for a newer edition", "Check it against current documentation", "Assume it holds for digital gear"], correctIndex: 2, explanation: "Take the principles, and check any claim about gear against current documentation before relying on it.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "In the 1987 Army course's cardioid description, what does 0 degrees mean?", options: ["Directly behind the microphone", "The end where the cable plugs into the microphone", "Straight up from the microphone", "The direction the microphone points"], correctIndex: 3, explanation: "Read the degrees as directions around the microphone, with 0 the way it points: best in front, least directly behind.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "For a voice indoors, which catalog lessons does lesson 4 point to?", options: ["Voice Acting lesson 10 and Broadcasting lesson 6", "Oral history lesson 6, and Mockumentary lesson 2 on staging", "Civic Documentation lessons 9 and 13", "Knot-Tying lesson 26 and Rigging lesson 1"], correctIndex: 0, explanation: "Voice Acting: The Instrument lesson 10 and Break Into Sports & Media Broadcasting lesson 6.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "Which statement about the ribbon microphone does this course take from the 1987 Army text?", options: ["It is the most common TV microphone", "It should never be used outdoors", "It is always omnidirectional", "It is the best choice for field recording"], correctIndex: 1, explanation: "The ribbon 'should never be used outdoors'. The Army text names the lavalier as the most common TV microphone.", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "How does this course treat the 1987 Army course's hardware?", options: ["As current practice for every television studio in the country", "As the standard every recorder must meet today", "As history: take the principles, check the gear claims", "As wrong throughout, so the course is not used"], correctIndex: 2, explanation: "The Army course is from 1987 and its hardware is history. Take the principles, and check any claim about gear against current documentation.", sourceLessonSlug: "how-a-microphone-hears" },
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

Measurement takes in a wide band: "All continuous, intermittent and impulsive sound levels from 80 decibels to 130 decibels shall be integrated into the noise measurements" ((d)(2)(i)). Mandatory Appendix A gives the formula "TWA = 16.61 log10 (D/100) + 90" (section I(2)), and its section II adds that "a dose of 50 percent corresponds to a TWA of 85 dB." Hearing tests have a defined warning sign: "a standard threshold shift is a change in hearing threshold relative to the baseline audiogram of an average of 10 dB or more at 2000, 3000, and 4000 Hz in either ear" ((g)(10)(i)).

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
- ${CFR_1910_95} Locator: paragraphs (a), (b)(1), (c)(1), (c)(2), (d)(2)(i), (g)(10)(i), (h)(2), (i)(1), (i)(3), (i)(4) and (k)(3); Table G-16; Appendix A, section I(2) (the formula) and section II (the sentence on a 50 percent dose).
- ${NIOSH} Locator: Foreword, p. iii (PDF p. 5); Abstract, p. v (PDF p. 7); section 1.1 and Table 1-1, printed pp. 1 to 2 (PDF pp. 19 to 20); section 3.3, printed p. 25 (PDF p. 43).
- ${NPS_UNDERSTANDING} Locator: the workplace sentence in the "Amplitude" paragraph under "Defining Key Terms", and the table of park sound levels under "Sound Level".`,
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
          // Lesson 5: two documents, two numbers
          { prompt: "Which of the two federal noise documents in this course is enforceable?", options: ["OSHA's rule, 29 CFR 1910.95", "NIOSH's 1998 criteria document", "Neither; both are only recommendations", "Both equally, as one rule"], correctIndex: 0, explanation: "OSHA's numbers are what an employer can be held to. NIOSH's are a recommendation built on its reading of the evidence.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "How does 1910.95(a) say noise is to be measured?", options: ["On the C scale of a standard sound level meter at fast response", "On the A scale of a standard sound level meter at slow response", "As a peak reading on an unweighted meter at impulse response", "With a personal dosimeter set to NIOSH's 3-dB exchange rate"], correctIndex: 1, explanation: "Paragraph (a): 'when measured on the A scale of a standard sound level meter at slow response.'", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Under OSHA's Table G-16, how long may a worker be exposed at 90 dBA?", options: ["4 hours", "2 hours", "8 hours", "16 hours"], correctIndex: 2, explanation: "Table G-16 permits 8 hours at 90 dBA, slow response.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Under Table G-16, what is the permissible exposure at 95 dBA?", options: ["8 hours a day", "1 full hour", "30 minutes", "4 hours"], correctIndex: 3, explanation: "Table G-16: 4 hours at 95 dBA. It is 8 at 90 and 2 at 100.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Under Table G-16, how long is permitted at 105 dBA?", options: ["1 hour", "2 hours", "15 minutes", "4 hours"], correctIndex: 0, explanation: "Table G-16: 1 hour at 105 dBA.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What is the highest level in Table G-16, and the time it permits?", options: ["140 dBA, for 1 minute", "115 dBA, for 1/4 hour or less", "110 dBA, for 1/2 hour", "130 dBA, for 1/8 hour"], correctIndex: 1, explanation: "The table's last row is 115 dBA for '1/4 or less' hours. 110 dBA is 1/2 hour, one row above.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Reading down Table G-16, what happens to the permitted time with each 5 dBA rise?", options: ["It doubles", "It drops by an hour", "It halves", "It drops by a quarter"], correctIndex: 2, explanation: "90 dBA for 8 hours, 95 for 4, 100 for 2: each rise of 5 dBA halves the permitted time.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What does NIOSH call the halving rule that OSHA uses?", options: ["The 3-dB exchange rate", "The equal-energy rule", "The action level", "The 5-dB exchange rate"], correctIndex: 3, explanation: "NIOSH: 'The 5-dB exchange rate is still used by OSHA and MSHA'. OSHA's own text, in the parts read, does not name the pattern.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Which two agencies does NIOSH say still use the 5-dB exchange rate?", options: ["OSHA and MSHA", "EPA and the Department of Defense", "NIOSH and the CDC", "The Park Service and NOAA"], correctIndex: 0, explanation: "'The 5-dB exchange rate is still used by OSHA and MSHA'. The EPA and the Department of Defense use the 3-dB rate.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What does 1910.95(b)(1) require first when sound exceeds the levels in Table G-16?", options: ["Hearing protectors for every exposed employee", "Feasible administrative or engineering controls", "A hearing test for every employee within a week", "A written warning posted at the work site"], correctIndex: 1, explanation: "'feasible administrative or engineering controls shall be utilized'. Protective equipment follows only if they fail.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "When does 1910.95(b)(1) say personal protective equipment shall be provided and used?", options: ["Before any engineering or administrative controls are tried", "Only when an employee asks for protectors in writing", "If controls fail to reduce sound within Table G-16 levels", "Only when impulse noise passes 140 dB peak sound pressure level"], correctIndex: 2, explanation: "'If such controls fail to reduce sound levels within the levels of Table G-16, personal protective equipment shall be provided and used'. Earplugs come last.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What is OSHA's action level under 1910.95(c)?", options: ["An 8-hour TWA of 90 dBA, or a dose of one hundred percent", "Any moment at which sound reaches 85 dB", "A peak of 140 dB at any time in the day", "An 8-hour TWA of 85 dBA, or a dose of fifty percent"], correctIndex: 3, explanation: "(c)(1): 'an 8-hour time-weighted average sound level (TWA) of 85 decibels measured on the A scale (slow response) or, equivalently, a dose of fifty percent', which (c)(2) calls the action level.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What does 1910.95 require whenever exposures equal or exceed the action level?", options: ["A hearing conservation program", "An immediate stop to all noisy work", "A permit from OSHA's area office", "Engineering controls within 24 hours"], correctIndex: 0, explanation: "(c)(1): a hearing conservation program is required 'whenever employee noise exposures equal or exceed' the action level.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What does 1910.95(i)(1) say employers shall do at an 8-hour TWA of 85 decibels or more?", options: ["Sell hearing protectors to employees at cost price", "Make hearing protectors available at no cost to the employees", "Require employees to bring their own hearing protectors", "Provide hearing protectors only to employees exposed over 90 dBA"], correctIndex: 1, explanation: "'Employers shall make hearing protectors available to all employees exposed to an 8-hour time-weighted average of 85 decibels or greater at no cost to the employees.'", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What choice does 1910.95(i)(3) give employees?", options: ["To refuse protectors entirely if they sign a written waiver", "To choose whether to have a hearing test", "To select their protectors from a variety of suitable ones", "To pick the hours they work in noise"], correctIndex: 2, explanation: "Employees 'shall be given the opportunity to select their hearing protectors from a variety of suitable hearing protectors'.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What does 1910.95(i)(4) require the employer to provide?", options: ["A spare set of protectors for every shift worked", "A personal sound level meter for each exposed employee", "Annual replacement of every pair of protectors", "Training in the use and care of all hearing protectors"], correctIndex: 3, explanation: "'The employer shall provide training in the use and care of all hearing protectors'.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Which of these is one of the training topics listed in 1910.95(k)(3)?", options: ["The purpose of audiometric testing", "How to calibrate a sound level meter", "How to file an OSHA complaint", "How to read a spectrogram"], correctIndex: 0, explanation: "(k)(3) lists the effects of noise on hearing, the purpose and types of hearing protectors, and 'The purpose of audiometric testing'.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Which sound levels does 1910.95(d)(2)(i) say shall be integrated into the noise measurements?", options: ["Only continuous levels between 85 and 115 decibels, with impulses excluded", "All continuous, intermittent and impulsive levels from 80 to 130 decibels", "Only impulsive levels above 140 dB peak", "Every level from 0 to 140 decibels"], correctIndex: 1, explanation: "'All continuous, intermittent and impulsive sound levels from 80 decibels to 130 decibels shall be integrated into the noise measurements.'", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What formula does mandatory Appendix A of 1910.95 give for converting a dose to a TWA?", options: ["T = 480 / 2^((L-85)/3)", "TWA = 10 log10 (D/100) + 85", "TWA = 16.61 log10 (D/100) + 90", "TWA = D / 8 + 85"], correctIndex: 2, explanation: "Appendix A: 'TWA = 16.61 log10 (D/100) + 90'. The 480 / 2^((L-85)/3) formula is NIOSH's.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Who does this course say should measure noise, fit protectors and test hearing?", options: ["Any crew member who has finished this course", "The production's sound mixer", "The performers themselves", "A trained professional"], correctIndex: 3, explanation: "Lesson 5 is not a hearing conservation program: 'Measuring noise, fitting protectors and testing hearing are jobs for a trained professional.'", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "How does 1910.95(g)(10)(i) define a standard threshold shift?", options: ["An average change of 10 dB or more at 2000, 3000 and 4000 Hz in either ear", "Any change of 5 dB or more at any single test frequency, in both ears together", "A change of 25 dB at 1000 Hz in the better ear", "An average change of 3 dB across all frequencies tested"], correctIndex: 0, explanation: "'a change in hearing threshold relative to the baseline audiogram of an average of 10 dB or more at 2000, 3000, and 4000 Hz in either ear.'", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What is NIOSH's recommended exposure limit for noise?", options: ["90 dBA as an 8-hour average", "85 dBA as an 8-hour TWA", "80 dBA averaged over 4 hours", "140 dBA as a ceiling only"], correctIndex: 1, explanation: "'The REL is 85 decibels, A-weighted, as an 8-hr time-weighted average (85 dBA as an 8-hr TWA).'", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What does NIOSH's abstract say about exposures at or above its REL?", options: ["They are safe for 8 hours", "They are illegal at work", "They are hazardous", "They need an OSHA permit"], correctIndex: 2, explanation: "'Exposures at or above this level are hazardous.'", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Which exchange rate does NIOSH now recommend?", options: ["5 dB", "10 dB", "6 dB", "3 dB"], correctIndex: 3, explanation: "'NIOSH now recommends a 3-dB exchange rate'. It previously recommended 5 dB.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Why does NIOSH say it moved from a 5-dB to a 3-dB exchange rate?", options: ["The 3-dB rate is more firmly supported by scientific evidence", "OSHA ordered NIOSH to match the federal noise rule in 1998", "The 3-dB rate is easier to calculate with a field dosimeter", "International law required NIOSH to adopt it in its 1998 revision"], correctIndex: 0, explanation: "'NIOSH now recommends a 3-dB exchange rate, which is more firmly supported by scientific evidence.'", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Why is the 3-dB exchange rate also called the equal-energy rule?", options: ["It gives every worker on a crew an equal share of the daily noise dose", "A 3-dB change represents a doubling or halving of the sound energy", "It treats loud and quiet sounds as equally harmful", "It was agreed equally by OSHA and NIOSH"], correctIndex: 1, explanation: "'because a 3-dB increase/decrease represents a doubling or halving of the sound energy.'", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Which two U.S. bodies does NIOSH say already use the 3-dB exchange rate?", options: ["OSHA and the Mine Safety and Health Administration", "The Park Service and the Forest Service", "The EPA and the U.S. Department of Defense", "The FCC and the Food and Drug Administration"], correctIndex: 2, explanation: "'This rate is already used in the United States by the EPA and the U.S. Department of Defense.' OSHA and MSHA still use 5 dB.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Using NIOSH's formula T (min) = 480 / 2^((L-85)/3), what time is recommended at 100 dBA?", options: ["30 minutes", "2 hours", "1 hour", "15 minutes"], correctIndex: 3, explanation: "(100 minus 85) divided by 3 is 5; 2 to the 5th is 32; 480 divided by 32 is 15 minutes. Table 1-1 agrees.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What does NIOSH's Table 1-1 give for 94 dBA?", options: ["1 hour", "2 hours", "30 minutes", "4 hours"], correctIndex: 0, explanation: "Table 1-1: 85 dBA for 8 hours, 88 for 4, 91 for 2, 94 for 1.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What does NIOSH's Table 1-1 give for 115 dBA?", options: ["56 seconds", "28 seconds", "1/4 hour", "7 minutes 30 seconds"], correctIndex: 1, explanation: "Table 1-1: 28 seconds at 115 dBA. OSHA permits 1/4 hour or less at the same level.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What excess risk of occupational hearing loss does NIOSH give for a 40-year lifetime exposure at its 85-dBA REL?", options: ["25%", "2.5%", "8%", "40%"], correctIndex: 2, explanation: "'With a 40-year lifetime exposure at the 85-dBA REL, the excess risk of developing occupational NIHL is 8%'.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What excess risk does NIOSH give at OSHA's 90-dBA permissible exposure limit?", options: ["8%", "50%", "90%", "25%"], correctIndex: 3, explanation: "NIOSH contrasts its 8% with 'the 25% excess risk at the 90-dBA permissible exposure limit (PEL)'.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "At 100 dBA, how does NIOSH's recommended time compare with OSHA's permitted time?", options: ["It is one eighth as long", "It is half as long", "It is the same", "It is twice as long"], correctIndex: 0, explanation: "OSHA permits 2 hours (120 minutes) and NIOSH recommends 15 minutes: 120 divided by 15 is 8.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "What does this course tell you to ask when someone says 'the limit is 85'?", options: ["85 measured at what distance from the loudest source on site", "85 as what, in which document, with which consequence", "85 for which kind of microphone", "85 according to which state's law"], correctIndex: 1, explanation: "OSHA's 85 is an action level and NIOSH's 85 is a recommended limit: 'ask: 85 as what, in which document, with which consequence?'", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "How does the Park Service's 'employers must provide hearing protection' sentence differ from 1910.95(i)(1)?", options: ["The rule is 90 dB at any moment, and employees must buy their own protectors", "The rule applies only outdoors, and protectors are optional", "The rule is an 8-hour TWA, and protectors are made available at no cost", "There is no difference; the page quotes the rule exactly"], correctIndex: 2, explanation: "The rule is an 8-hour time-weighted average of 85, not any moment at 85, and the duty is to make protectors available at no cost. Cite the regulation, never a summary.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Which standard does 1910.95(h)(2) require audiometers to meet?", options: ["NIOSH 98-126, the 1998 noise criteria document", "OSHA Table G-16, the permissible noise exposure table", "The Park Service's 2013 acoustical training manual", "ANSI S3.6-1969, incorporated by reference"], correctIndex: 3, explanation: "'American National Standard Specification for Audiometers, S3.6-1969, which is incorporated by reference'. It is copyrighted, so the course names it and does not reproduce it.", sourceLessonSlug: "two-documents-two-numbers" },

          // Lesson 6: impulse noise, two different 140s
          { prompt: "What does OSHA's footnote to Table G-16 say about impulsive or impact noise?", options: ["It should not exceed 140 dB peak sound pressure level", "It shall not exceed 140 dBA as an 8-hour time-weighted average", "It may not exceed 126 dBA at 150 m", "It is excluded from all noise measurements"], correctIndex: 0, explanation: "'Exposure to impulsive or impact noise should not exceed 140 dB peak sound pressure level.'", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "What verb does OSHA's Table G-16 footnote use for its 140 limit?", options: ["Must always", "Should", "Shall", "Is required to"], correctIndex: 1, explanation: "The footnote says impulsive noise 'should not exceed' 140 dB peak. The paragraphs around it say 'shall'.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "What unit does OSHA's Table G-16 footnote give for its 140 limit?", options: ["dBA, slow response", "dBA as an 8-hour TWA", "dB peak sound pressure level", "dB(C), fast response"], correctIndex: 2, explanation: "'140 dB peak sound pressure level': a peak, not an A-weighted average.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "What verb do 1910.95(b)(1) and (i)(1) use, which lesson 6 sets against the footnote's verb?", options: ["Should", "May", "Can", "Shall"], correctIndex: 3, explanation: "Paragraphs (b)(1) and (i)(1) say 'shall'. The footnote's verb is 'should'.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "What does this course say about how OSHA's 'should' in the footnote is enforced?", options: ["It does not say; that is a question for the named reviewer", "It is enforced exactly like every 'shall' elsewhere in the same rule", "It is never enforced, so it can be ignored on a set", "It is enforced only on film sets and stages"], correctIndex: 0, explanation: "'This course does not say how the footnote's \"should\" is enforced; that is a question for the reviewer named at the top of this lesson.'", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "What does NIOSH section 1.1.4 say about exposure to noise?", options: ["It should not exceed 140 dB peak", "It shall not exceed 140 dBA", "It shall not exceed 115 dBA at all", "It should not exceed 126 dBA"], correctIndex: 1, explanation: "Section 1.1.4: 'Exposure to continuous, varying, intermittent, or impulsive noise shall not exceed 140 dBA.'", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "Which kinds of noise does NIOSH's 140 dBA ceiling cover?", options: ["Impulsive noise only, such as gunfire and pyrotechnics on a set", "Continuous noise only, averaged over 8 hours", "Continuous, varying, intermittent, or impulsive noise", "Impact noise from machinery only"], correctIndex: 2, explanation: "The ceiling covers 'continuous, varying, intermittent, or impulsive noise', not impulses alone.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "How do the units of OSHA's and NIOSH's 140 limits differ as printed?", options: ["OSHA's is printed as dBA; NIOSH's is a peak sound pressure level", "Both are A-weighted averages over an 8-hour day", "Both are peak readings measured at the ear", "OSHA's is a peak sound pressure level; NIOSH's is printed as dBA"], correctIndex: 3, explanation: "OSHA: '140 dB peak sound pressure level'. NIOSH 1.1.4: '140 dBA', A-weighted as printed.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "On whose report does NIOSH say the 140 dB peak SPL ceiling for impulsive noise is based?", options: ["Kryter et al. (1966)", "Ward (1986)", "OSHA's 1974 rule", "The Park Service (2018)"], correctIndex: 0, explanation: "'The generally accepted ceiling limit of 140 dB peak SPL for impulsive noise is based on a report by Kryter et al. [1966].' Ward (1986) is quoted on it.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "What did Ward (1986) say about the 140 dB peak figure, as NIOSH quotes him?", options: ["It was proven safe by forty years of data", "It was little more than a guess when first proposed", "It was too strict and should be raised to 150 dB peak", "It applied only to military gunfire"], correctIndex: 1, explanation: "Ward: 'this number was little more than a guess when it was first proposed.'", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "What unit appears in NIOSH's sentence on the history of the 140 figure?", options: ["dBA, slow response", "dB(A) as a TWA", "dB peak SPL", "dB, C-weighted"], correctIndex: 2, explanation: "'The generally accepted ceiling limit of 140 dB peak SPL', the same kind of number as OSHA's, in the document whose own ceiling is printed '140 dBA'.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "What lesson does this course draw from NIOSH printing both '140 dB peak SPL' and '140 dBA'?", options: ["Always use the larger of any two printed numbers so as to stay safe", "NIOSH's document is unreliable and should not be used", "Peak and A-weighted levels are the same thing", "Check that two numbers measure the same thing before comparing them"], correctIndex: 3, explanation: "'Units are not decoration. Before you compare two numbers, check that they measure the same thing.'", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "What does NIOSH say its 3-dB rule allows at 115 dBA?", options: ["Less than 28 seconds", "Up to 1 minute 53 seconds", "Up to 1/4 hour", "Up to 2 hours"], correctIndex: 0, explanation: "'an exposure duration of less than 28 sec would be allowed at a 115-dBA level.'", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "Working NIOSH's formula at 115 dBA, what is (115 minus 85) divided by 3?", options: ["5", "10", "15", "30"], correctIndex: 1, explanation: "30 divided by 3 is 10. Then 2 to the 10th is 1,024, and 480 minutes divided by 1,024 is about 28 seconds.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "Working NIOSH's formula at 115 dBA, 480 minutes divided by 1,024 gives about how long?", options: ["4.7 minutes, about 5 minutes", "1.5 minutes, about 90 seconds", "0.47 minutes, about 28 seconds", "0.05 minutes, about 3 seconds"], correctIndex: 2, explanation: "480 / 1,024 is about 0.47 minutes, which is about 28 seconds, matching Table 1-1.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "Why can't the park ladder's 126 dBA cannon reading be set against OSHA's 140 dB peak?", options: ["The ladder's readings were all made indoors", "Cannon fire is exempt from OSHA's rule", "The ladder uses hertz, not decibels", "A dBA level is not a peak reading"], correctIndex: 3, explanation: "One is an A-weighted level at 150 m and the other a peak sound pressure level. They do not measure the same thing.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "What can you conclude from the park ladder's cannon row?", options: ["The page measured that cannon at 126 dBA at 150 m, and nothing nearer", "Cannon fire is safe for crews at any distance beyond 15 m from the gun", "Cannon fire exceeds OSHA's 140 dB peak limit", "The cannon was fired inside a closed building"], correctIndex: 0, explanation: "The page measured that cannon at 150 m, and says nothing about standing nearer.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "Under 1910.95(d)(2)(i), what happens to impulsive sound between 80 and 130 decibels?", options: ["It is ignored, because impulses are too short to count toward a dose", "It is integrated into the noise measurements for the day", "It is measured separately and never added to the dose", "It is counted only if it exceeds 140 dB peak"], correctIndex: 1, explanation: "'All continuous, intermittent and impulsive sound levels from 80 decibels to 130 decibels shall be integrated into the noise measurements.'", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "What figures or practices does this course give for blank gunfire or pyrotechnics on a set?", options: ["A safe distance of 50 ft from any blank", "A limit of 126 dBA at 150 m", "None; no document on them was read", "Earplugs rated for 140 dB peak"], correctIndex: 2, explanation: "'This course has read no document on blank gunfire or pyrotechnics on a set, so it gives no figures or practices for them.'", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "Until a reviewer adds to lesson 6, whom does it tell you to ask about blanks and pyrotechnics on a set?", options: ["The performer who fires the blank, on camera, during the take", "The nearest Park Service ranger on duty", "The production's sound mixer, who sets the levels", "Whoever is responsible for safety on the production"], correctIndex: 3, explanation: "'Ask whoever is responsible for safety on the production, and treat this lesson as incomplete until the reviewer named above has added to it or signed it off.'", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "Which Park Service gallery sounds does lesson 6 name as sudden, impulse-type sounds?", options: ["Cannon Fire and Musket Fire", "Thunder and Rain", "Helicopter and Jet", "Old Faithful and Mud Pots"], correctIndex: 0, explanation: "'The gallery from lesson 2 includes \"Cannon Fire\" and \"Musket Fire\"', and the park ladder puts cannon fire at 126 dBA at 150 m.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "In lesson 6's primary-source exercise, where in 29 CFR 1910.95 do you look?", options: ["Paragraph (c)(1), the action level", "The footnote under Table G-16", "Appendix A, the dose-to-TWA formula", "Paragraph (h)(2), on audiometers"], correctIndex: 1, explanation: "'Open 29 CFR 1910.95 and find the footnote under Table G-16.'", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "Which NIOSH pages does lesson 6's primary-source exercise send you to?", options: ["Printed pages 1 and 2 (PDF pages 19 and 20)", "Printed page iii (PDF page 5) only", "Printed pages 4 and 24 (PDF pages 22 and 42)", "Printed page 25 (PDF page 43) only"], correctIndex: 2, explanation: "Printed page 4 (PDF page 22), the 140 dBA ceiling, and printed page 24 (PDF page 42), the history of the 140 figure.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "How does lesson 6 describe its own status on set safety?", options: ["Complete, because OSHA's footnote covers every film and TV set", "Superseded by the rigging course's lesson on sets", "Final, as approved by NIOSH", "Incomplete until the named reviewer adds to it or signs it off"], correctIndex: 3, explanation: "It asks you to 'treat this lesson as incomplete until the reviewer named above has added to it or signed it off.'", sourceLessonSlug: "impulse-noise-two-140s" },
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
- ${NPS_DATA} Locator: sub-heading "Meteorological".
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

**The drill below** gives a description, quoted or close to its source, and asks for the name of the setting, test or term. Type one or two words. Capitals are forgiven and common variants are accepted, but the spelling has to be right.

## Sources
- ${NPS_MANUAL} Locator: section 3.2, p. 16; section 4.3.2, pp. 39 to 40; sections 4.4.2 and 4.4.3, p. 42; section 4.7.1, steps 7 and 8, p. 47. ${MANUAL_PAGES}
- ${NPS_DATA} Locator: sub-heading "Sound Amplitude and Frequency" (spectrograms).
- ${NPS_UNDERSTANDING} Locator: heading "Defining Key Terms".
- ${ARMY_1987} Locator: printed p. 17 (PDF p. 26).
- ${ARMY_1986} Locator: printed p. 100 (PDF p. 192).
- ${AFC} Locator: p. 22 (PDF p. 28). ${AFC_PAGES}`,
      exercise: {
        instructions: "Name the setting, test or term each description points to. One or two words each.",
        items: [
          { prompt: "\"Suppresses noise by lowering the volume level when the sound input is too high.\" The park manual keeps it off.", answer: "limiter", accept: ["the limiter", "limit"], hint: "Section 4.3.2, the first switch.", explanation: "\"Limiter: Off. ... Keep off to prevent sounds from being altered\" (park manual, 4.3.2, p. 39)." },
          { prompt: "\"Cuts out the low frequency sounds.\" Turned off to record the lower frequency range.", answer: "low cut", accept: ["low-cut", "lowcut", "low cut filter", "low-cut filter"], hint: "Section 4.3.2, the second switch.", explanation: "\"Low Cut: Off. Cuts out the low frequency sounds, needs to be turned off to record the lower frequency range\" (4.3.2, p. 39)." },
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

**A multi-year listen.** "NOAA and the U.S. Navy co-led the Sanctuary Soundscape Monitoring Project, SanctSound." It ran from fall 2018 through spring 2022 in "seven National Marine Sanctuaries and one Marine National Monument". "SanctSound assesses sounds produced by marine animals, physical processes like wind and waves, and human activities." Its case for patience: "Underwater sound recordings, when made over long periods of time in standardized ways, can greatly add to the suite of measurement systems that characterize the variety and health of marine environments." The project "has collected close to 300 terabytes of data", found through "the NCEI Passive Acoustic Data Archive web-based map viewer". Among its example sounds are snapping shrimp, which "use their larger claw to create and pop bubbles, resulting in a loud snapping sound".

A graphic caption on the project page adds a detail worth reading closely: "the yellow bar at the base of the graph shows the hearing range of humans in air and is also the range of frequencies that were recorded by SanctSound hydrophones." That project's hydrophones recorded the band people hear.

**On land, by machine.** A U.S. Geological Survey image page shows "a bioacoustic survey monitor, which will parse recorded nighttime sounds into species and numbers of individuals."

**Before you reuse anything.** This course has not read the license on SanctSound's archived audio files, so do not reuse them until you have checked. NOAA's pages also carry photos with other credits; one is credited to the Florida Fish and Wildlife Conservation Commission, which is not a federal agency.

**Scope.** This lesson explains what hydrophones are for and how long monitoring runs. It does not teach putting equipment in water, which raises boat and water-safety questions this course does not cover.

:::reveal What is a hydrophone, in NOAA's words? ||| An underwater microphone: "hydrophones (underwater microphones)".

:::reveal What three kinds of sound make up the ocean soundscape, as NOAA describes it? ||| Environmental sounds such as thunderstorms, human-made sounds such as ship propellers, and biological sounds produced by animals.

:::reveal How long do NOAA's bottom-mounted hydrophones stay on the seafloor? ||| "6 months to a year."

:::reveal What range did SanctSound's hydrophones record, according to the graphic caption? ||| The hearing range of humans in air.

## Sources
- ${NOAA_PAM} Locator: paragraphs on why marine animals use sound, on hydrophones, on long-term bottom-mounted units, on the ocean soundscape, and on humpback song; the photo credit line.
- ${SANCTSOUND} Locator: paragraphs on the project's leadership, dates and sites, what it assesses, its data volume and archive, and snapping shrimp; the graphic caption.
- ${NPS_UNDERSTANDING} Locator: heading "Defining Key Terms" (hearing range, ultrasound, infrasound).
- ${NPS_DATA} Locator: sub-heading "Sound Amplitude and Frequency" (the equipment's frequency range).
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
- ${NPS_WEST} Locator: heading "Binaural Recording" (the paragraphs on post-production editing and the recordists' debate).
- ${NPS_DATA} Locator: sub-heading "Digital Audio Recordings" (archival recordings).`,
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
          // Lesson 7: planning a field session
          { prompt: "What does the Park Service match when it defines a sampling area within a park?", options: ["Similar vegetation, land cover, topography, elevation and climate", "Similar visitor numbers, road access, parking and campground capacity", "Areas within an hour's walk of a ranger station", "Areas that share one acoustic monitor and one recordist"], correctIndex: 0, explanation: "'we identify areas with similar vegetation, land cover, topography, elevation, and climate'.", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "Why does the Park Service group areas by vegetation, land cover, topography, elevation and climate?", options: ["Such areas are cheaper to reach with heavy equipment", "Such areas typically hold similar animals and sounds", "Such areas share a single management zone by law", "Such areas never have any human-caused sound in them"], correctIndex: 1, explanation: "Such areas 'typically contain similar animals, physical processes, and other sources of natural sounds.'", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "Which of these is on the Park Service's list of site-selection priorities?", options: ["Distance from the nearest visitor center", "The color of the surrounding vegetation", "Proximity to natural and human-caused sounds", "The number of hiking trails that cross the site"], correctIndex: 2, explanation: "The list includes 'Proximity to natural and human-caused sounds', with management zones, sound-sensitive areas, data needs and equipment.", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "Which equipment considerations does the Park Service list for site selection?", options: ["Price, weight and brand", "Cable length, plug type and voltage", "Color, size and waterproofing", "Security, solar exposure and visibility"], correctIndex: 3, explanation: "'Equipment considerations (security, solar exposure, visibility, etc.)'.", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "What three questions does this course boil the Park Service's site list down to for one recordist?", options: ["What lives here, what else will I hear, is my gear safe and hidden", "How loud is it, how far away is it, and how long will it last", "Who owns the land, who else records here, and who will buy the recording", "What time is sunrise, what is the forecast, and where can I park"], correctIndex: 0, explanation: "For one recordist the list comes down to: what lives in this sound, what else will I hear here, and will my gear be safe and out of sight?", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "How many seasons of data does the Park Service say will often be useful?", options: ["Four: one for each season of the year", "Two: a high and a low season", "One: the season when the park is busiest", "Three: spring, summer and fall"], correctIndex: 1, explanation: "'Often, two seasons of data will be useful: a high season and a low season for a specific sound source of interest.'", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "What example does the Park Service give for recording in two seasons?", options: ["Elk bugling in the fall against the spring", "Rainfall in spring against fall", "Aircraft tours in summer against winter", "Traffic at night against day"], correctIndex: 2, explanation: "The Park Service's example is aircraft tours, summer against winter.", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "What does the park manual give as the minimum recommended collection period for long-term monitoring?", options: ["7 days", "2.5 days", "70 days", "25 days"], correctIndex: 3, explanation: "'In general, 25 days is the minimum recommended collection period to ensure statistical confidence'.", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "What does the Park Service field page say measurement periods of at least 25 days do?", options: ["Keep ambient uncertainty under three decibels", "Guarantee a recording of every species at the site", "Satisfy OSHA's rule for noise measurement", "Remove the need for on-site listening"], correctIndex: 0, explanation: "'Research shows that measurement periods of at least 25 days limit the uncertainty of ambient data to less than three decibels.'", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "Why does this course call the 25-day figure a working rule rather than a finding you can check?", options: ["The manual and the field page give different numbers", "The field page says 'Research shows' but names no study", "OSHA has rejected the figure", "The figure applies only to marine sanctuaries"], correctIndex: 1, explanation: "The page names no study, so the figure is the Park Service's working rule for monitoring, not a finding you can check.", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "In how many parks has the division conducted acoustical monitoring since it started in 2000?", options: ["More than 7", "More than 400", "More than 70", "Exactly 25"], correctIndex: 2, explanation: "'Acoustical monitoring has been conducted in more than 70 parks since the division started in 2000.'", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "What idea does this course say carries over from 25-day monitoring to a recordist after one good take?", options: ["Every recording must run at least 25 days", "Short recordings are never worth keeping", "Only monitoring stations can record a park", "One visit is a sample of a place, not the place"], correctIndex: 3, explanation: "A recordist after one good take is doing a smaller job, but one visit is a sample of a place, not the place.", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "Lesson 7's weather advice names one forecast to check before you go. Which one?", options: ["The forecast wind", "The phase of the moon", "The pollen count", "The UV index"], correctIndex: 0, explanation: "Wind can mask other sounds, so check the forecast wind before you go and plan around it.", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "What does the park manual tell you to do before taking the kit into the field?", options: ["Order a spare recorder from the manufacturer", "Work through it all indoors first", "File a written monitoring plan with OSHA", "Record a test session at the site at night"], correctIndex: 1, explanation: "'first go through this manual with all of the equipment on hand in an indoor environment'.", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "What 'awful experience' does the Library of Congress guide say most folklorists have had?", options: ["Losing a release form on the way home", "Being refused entry by a landowner", "A dead recorder or a missed voice", "Recording an interview in the wrong language"], correctIndex: 2, explanation: "'returning from an interview to find out the recorder didn't work or the mic didn't pick up the interviewee's voice.'", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "What does the Library of Congress guide suggest you stage to get to know your equipment?", options: ["A full public performance", "A night of unattended recording", "A sound check with a professional crew", "Some test interviews and photo shoots"], correctIndex: 3, explanation: "'stage some test interviews and photo shoots just to get to know your equipment.'", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "Which of these is on the Library of Congress guide's equipment list?", options: ["A steel tape measure", "A sound level meter", "A hydrophone", "A boom pole"], correctIndex: 0, explanation: "The list adds 'An extension cord and power strip.', 'A steel tape measure' and 'Release forms.' to the recorder, microphones and headphones.", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "How does the park manual set its recorder's clock?", options: ["From the recordist's phone", "It is set from GPS time", "From a radio time signal", "It leaves the clock unset"], correctIndex: 1, explanation: "The manual sets its recorder's clock from GPS time.", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "What does this course say about permits to record in a national park or on other public land?", options: ["No permit is ever needed on federal land", "A permit is needed only for commercial recording", "It has not researched them; ask the land manager first", "The Park Service issues permits online in a few minutes"], correctIndex: 2, explanation: "'Whether recording in a national park or on other public land needs a permit is a question this course has not researched. Ask the land manager before you go.'", sourceLessonSlug: "planning-a-field-session" },

          // Lesson 8: a chain that does not change the sound
          { prompt: "Which setting does the park manual keep off because it 'Suppresses noise by lowering the volume level when the sound input is too high'?", options: ["The low cut", "Pre-Rec", "The peak indicator", "The limiter"], correctIndex: 3, explanation: "'Limiter: Off. Suppresses noise by lowering the volume level when the sound input is too high. Keep off to prevent sounds from being altered'.", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "Why does the park manual keep the low cut off?", options: ["To record the lower frequency range", "To save battery during long sessions", "To keep wind noise out of the file", "To make the MP3 files smaller"], correctIndex: 0, explanation: "'Low Cut: Off. Cuts out the low frequency sounds, needs to be turned off to record the lower frequency range.'", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "What does this course say both the limiter and the low cut do, although both exist to help?", options: ["They raise the noise floor", "They change what you recorded", "They double the file size", "They stop the calibration tone"], correctIndex: 1, explanation: "A limiter turns loud moments down and a low cut throws away the bottom of the spectrum: both change what you recorded.", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "How does the park manual set the recording level?", options: ["Exactly at the point where the peak indicator lights", "By switching on automatic gain control", "Two increments below where the peak indicator lights", "Four increments above the normal value of 20"], correctIndex: 2, explanation: "'The correct level should be two increments below the point at which the peak indicator level is illuminated (normal value is 20).'", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "What normal value does the park manual give for its level setting?", options: ["94", "44.1", "96", "20"], correctIndex: 3, explanation: "'(normal value is 20)'. 94 is the calibration tone in dB and 44.1 the sample rate in kHz.", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "Why does the 1986 Army field-production course say to set levels in manual mode, not AGC?", options: ["AGC adds hiss and roar in quiet passages", "AGC drains the batteries twice as fast as manual mode", "AGC is not permitted on federal property", "AGC records only in a compressed format"], correctIndex: 0, explanation: "'the AGC will cause hiss and roar as it seeks a signal during quiet portions of the program.'", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "What sample rate does the park manual set on its recorder?", options: ["96 kHz", "44.1 kHz", "48 kHz", "22 kHz"], correctIndex: 1, explanation: "'Sample Rate: 44.1 kHz'.", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "Which recording mode does the park manual choose?", options: ["WAV at 96 kHz and 24 bits", "WAV at 44.1 kHz and 16 bits", "MP3 at 96 kbps", "MP3 at 320 kbps"], correctIndex: 2, explanation: "'Rec Mode: MP3-96Kbps'. WAV at 96 kHz and 24 bits is the Library of Congress guide's recommendation.", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "What trade does the park manual name for its MP3 setting?", options: ["Higher sound quality for larger files and shorter recording time", "No loss of quality at all, only smaller files", "Better low frequencies at the cost of high ones", "Lower sound quality for smaller files and longer recording time"], correctIndex: 3, explanation: "'Lower sound quality but smaller than WAV files and allows for longer recording time'.", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "What does the Pre-Rec setting capture, according to the park manual?", options: ["Two seconds before you press rec", "The ten seconds after the stop button is pressed", "A calibration tone at the start of each file", "The noise floor before each recording"], correctIndex: 0, explanation: "'Pre-Rec: Off. Captures the two seconds of sound that precedes the moment the rec button is pressed'.", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "What does the park manual record at the start of a session as a reference?", options: ["10 seconds of a 1000 Hz television test tone", "30 seconds of the 94 dB calibration tone", "A spoken statement of the date", "One minute of silence"], correctIndex: 1, explanation: "'Record 30 seconds of the 94dB calibration tone.' The 1000 Hz tone is the Army's television test signal.", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "What does the park manual say standard calibration verifies?", options: ["That the recorder's clock is correct", "That the batteries are fully charged", "That the values recorded are accurate", "That the microphone faces the right way"], correctIndex: 2, explanation: "'Standard calibration verifies the values recorded are accurate, but it does not give a lower bound to the measurements.'", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "How does the park manual define the noise floor of a device?", options: ["The quietest sound a person with normal hearing can hear at 1 kHz", "The level at which the limiter starts to work", "The lowest frequency the microphone can record", "Where the recorder's own noise exceeds the incoming signal"], correctIndex: 3, explanation: "'the point at which internal noise from the electronics of the recorder are greater than the signal coming in to be encoded.'", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "What does the park manual say standard calibration does not give?", options: ["A lower bound to the measurements", "An accurate reading of loud sounds", "A record of the sample rate", "A check on the clock"], correctIndex: 0, explanation: "Calibration 'does not give a lower bound to the measurements. To do so, the inherent noise in the system must be measured'.", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "Which of these does the park manual list as influencing a system's noise floor?", options: ["The color of the windscreen", "The length of cables used", "The time of day", "The file name"], correctIndex: 1, explanation: "The noise floor is 'influenced by factors such as length of cables used, type of power supply, irregularities in the SLM and preamplifier, and any local electromagnetic interference'.", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "What possible source of local electromagnetic interference does the park manual name?", options: ["Aircraft", "Thunder", "Power lines", "Running water"], correctIndex: 2, explanation: "'any local electromagnetic interference (possibly due to power lines).'", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "What is the park manual's dummy-mic test for?", options: ["To check the calibration tone is at 94 dB", "To test whether the limiter is switched off", "To measure the wind speed at the site", "To hear the system's own static"], correctIndex: 3, explanation: "'Record 30 seconds of audio on the R-05 with the dummy mic attached, to be able to differentiate silence in the field with the static of the system.'", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "What does the Library of Congress guide list as the three ways to verify that recording is occurring?", options: ["A moving counter, the meter and headphones", "A red light, a beep and a vibration", "A file name, a time stamp and an entry in the log", "A test tone, a slate and a playback"], correctIndex: 0, explanation: "'it's ideal to have a moving counter, levels visible on the meter, and sound in the headphones.'", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "How does this course treat the Roland R-05 recorder and the Larson Davis 831 meter?", options: ["As the only recorder and meter fit for field work", "As dated: the method is the lesson", "As current equipment every recordist should buy", "As gear the Park Service has banned"], correctIndex: 1, explanation: "They are the manual's 2013 kit. 'The settings and the tests are the lesson.'", sourceLessonSlug: "a-chain-that-does-not-lie" },

          // Lesson 9: practice, name the setting
          { prompt: "What does the practice drill in lesson 9 ask you to type for each description?", options: ["A full sentence explaining each recorder setting", "The page number where each term appears", "The name of the setting, test or term it points to", "The numeric value of each setting"], correctIndex: 2, explanation: "The drill gives a description and asks for the name of the setting, test or term, in one or two words.", sourceLessonSlug: "practice-name-the-setting" },
          { prompt: "How are spelling and capitals treated in lesson 9's practice drill?", options: ["Every letter must match the manual exactly", "Spelling is forgiven, but capitals must match", "Only answers copied from the manual are accepted", "Capitals are forgiven; spelling must still match"], correctIndex: 3, explanation: "'Capitals are forgiven and common variants are accepted, but the spelling has to be right.' A misspelling is marked wrong.", sourceLessonSlug: "practice-name-the-setting" },
          { prompt: "In lesson 9's drill, which term names wind moving other objects so they make noise?", options: ["Wind induced noise", "Artifact, a sound you made", "Masking by another sound", "Low cut filtering"], correctIndex: 0, explanation: "The manual sets 'wind induced noise', wind moving other objects, against plain 'wind', the sound of turbulence.", sourceLessonSlug: "practice-name-the-setting" },
          { prompt: "In lesson 9's drill, which file format does the Library of Congress guide recommend at 96 kHz and 24 bits?", options: ["MP3", "WAV", "AAC", "FLAC"], correctIndex: 1, explanation: "'We recommend recording WAV files at 96khz/24bits.'", sourceLessonSlug: "practice-name-the-setting" },
          { prompt: "How long are the answers in lesson 9's practice drill meant to be?", options: ["A full sentence each", "A short paragraph each", "One or two words each", "A number each"], correctIndex: 2, explanation: "'Type one or two words.'", sourceLessonSlug: "practice-name-the-setting" },

          // Lesson 10: stereo and binaural
          { prompt: "How does the Park Service article say Jacob Job's binaural technique works?", options: ["It spaces one mic per channel at random", "It puts one mic inside a dummy head", "It splits one mic's signal in two", "It simulates how the human head hears"], correctIndex: 3, explanation: "Job 'employs binaural recording techniques that accurately simulate the way the human head is designed to hear the world.'", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "In the binaural rig the Park Service article describes, which way do the two microphones face?", options: ["Opposite directions", "The same direction", "Straight up", "Toward each other"], correctIndex: 0, explanation: "Two microphones on a tripod, 'each facing the opposite direction'.", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "How far apart are the microphones spaced in the binaural rig the Park Service article describes?", options: ["About two feet, and parallel", "About the distance between human ears", "About six feet apart, at 110 degrees", "About 50 m, one on each side"], correctIndex: 1, explanation: "'spaced apart the approximate distance as human ears.'", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "What difference in position does the binaural rig in the Park Service article on Jacob Job set between its two microphones?", options: ["Both at exactly the same height and depth", "One on the ground and one on a pole", "One slightly higher and the other slightly forward", "One in front of the tripod and one 2 m behind it"], correctIndex: 2, explanation: "'with one slightly higher, and the other slightly forward than the other'.", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "What are the two microphones mounted on in the binaural rig the Park Service article describes?", options: ["A boom pole", "A person's shoulders", "A car roof", "A tripod"], correctIndex: 3, explanation: "'positioning two microphones on a tripod'.", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "For two directional microphones at a performance, what spacing and angle does the Library of Congress guide give?", options: ["About 6 inches apart at a 110-degree angle", "About two feet apart and parallel", "About 6 feet apart facing each other", "Touching, at a 90-degree angle"], correctIndex: 0, explanation: "'point two directional microphones toward the performance about 6 inches apart and at a 110-degree angle'.", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "For two omnidirectional microphones at a performance, what does the Library of Congress guide suggest?", options: ["About 6 inches apart at a 110-degree angle", "About two feet apart and parallel to one another", "Back to back at the same point", "One at the stage and one at the back wall"], correctIndex: 1, explanation: "'two omnidirectional mics about two feet apart and parallel to one another'.", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "Besides its two-microphone setups, what third option does the Library of Congress guide offer for a performance?", options: ["A hydrophone", "A shotgun on a boom", "A single stereo mic", "A lavalier on each performer"], correctIndex: 2, explanation: "'or even use a single stereo mic.'", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "What verdict does the Library of Congress guide give on its own performance setups?", options: ["The best possible audio for any concert or wedding", "Suitable only for commercial release", "Unusable without a professional mixer", "Not the best, but still instructive"], correctIndex: 3, explanation: "'It may not make for the best audio or video, but reviewing recordings like this can still teach you a lot about the art forms you're studying.'", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "Why does this course give the Library of Congress guide's two-microphone setups no names?", options: ["The guide names none, and no source read supplies them", "The names are trademarks the course may not legally use", "The setups have no names in any language", "Naming them would break the guide's license"], correctIndex: 0, explanation: "The guide gives the setups no names, and no source read for this course supplies them, so they stay unnamed rather than guessed at.", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "What three basics does a caption in the Library of Congress guide list?", options: ["A recorder, a tripod and a windscreen", "A recorder, a mic and headphones", "A microphone, a mixer and a loudspeaker", "A recorder, a release form and a log"], correctIndex: 1, explanation: "'the basics are the same: a recording device, a microphone, and a set of headphones for monitoring.'", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "What choice did readers of the Library of Congress guide's 1979 first edition face, according to its preface?", options: ["A disc recorder or a wire recorder", "A digital recorder or a cassette deck", "Reel-to-reel tape or a cassette deck", "Mono or stereo microphones"], correctIndex: 2, explanation: "'the better audio quality offered by a bulky reel-to-reel tape recorder or the convenience of the newfangled cassette deck.'", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "Why did Joseph S. Hall need a car on the scene in 1939, according to the Library of Congress guide's caption?", options: ["He had to drive between interviews in one day", "The car shielded the microphone from wind", "The car radio was used to monitor levels", "Car batteries powered his massive disc recorder"], correctIndex: 3, explanation: "'Hall needed a car on the scene because car batteries were required to power his massive disc recorder.'", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "In lesson 10's 'Try it' exercise with only one microphone, what do you write down?", options: ["Where it cannot place the sounds", "The level of each sound in dBA", "The make and model of the microphone", "The time each sound began and ended"], correctIndex: 0, explanation: "With one microphone, record the scene and write down what the recording cannot tell you about where each sound was.", sourceLessonSlug: "stereo-and-binaural" },

          // Lesson 11: under water and beyond hearing
          { prompt: "What does this course note about the park systems' lower limit of 12.5 Hz?", options: ["It stops well above the bottom of human hearing", "It reaches a little below the bottom of human hearing", "It is exactly the bottom of human hearing", "It is the top of the ultrasound range"], correctIndex: 1, explanation: "People hear from 20 Hz; the park systems 'can record sounds from 12.5 to 20,000 Hz', a little below the bottom of human hearing.", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "Why does NOAA Fisheries say hearing matters so much to marine animals?", options: ["Sound travels more slowly in water than in air", "Most marine animals cannot see at all", "Vision is limited under water", "Light is too bright under water for them to see"], correctIndex: 2, explanation: "'In an environment where vision is limited, hearing is one of the most important senses.'", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "What is a hydrophone, in NOAA's words?", options: ["An underwater loudspeaker", "A water-depth meter", "A sonar transmitter", "An underwater microphone"], correctIndex: 3, explanation: "'We deploy hydrophones (underwater microphones) in different regions of the ocean'.", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "How long do NOAA's bottom-mounted hydrophones stay on the seafloor?", options: ["6 months to a year", "One week at a time", "Exactly 25 days", "About ten years"], correctIndex: 0, explanation: "'bottom-mounted hydrophones that are anchored to the seafloor and stay there for 6 months to a year.'", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "What three kinds of sound make up the ocean soundscape, as NOAA describes it?", options: ["Wind, rain and thunder only", "Environmental, human-made and biological sounds", "Whale song, dolphin whistles and snapping shrimp only", "Ship engines, sonar and drilling"], correctIndex: 1, explanation: "'These environmental and human-made sounds, combined with the biological sounds produced by animals, make up the ocean soundscape.'", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "Which two sounds does NOAA give as examples of environmental and human-made sound in the ocean?", options: ["Whale song and fish grunts", "Rain and snapping shrimp", "Thunderstorms and ship propellers", "Breaking waves and dolphin whistles"], correctIndex: 2, explanation: "'Sounds in the ocean such as thunderstorms and ship propellers are within the hearing ranges of many of the marine animals we study.'", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "How does NOAA describe humpback whale song?", options: ["A single click repeated at a steady rate", "High whistles above human hearing", "Silence broken by one call a day", "Patterned moans and growls"], correctIndex: 3, explanation: "'male humpback whales produce a wide variety of moans, growls, and other calls arranged in patterns that make up their song.'", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "What sounds does NOAA say some fish make when spawning?", options: ["Grunting or knocking sounds", "Whistles and clicks", "Songs in long patterns", "No sound at all"], correctIndex: 0, explanation: "'Some fish make grunting or knocking sounds when spawning.'", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "Who co-led the SanctSound project?", options: ["NOAA and the Park Service", "NOAA and the U.S. Navy", "The U.S. Navy and USGS", "NOAA and Penn State"], correctIndex: 1, explanation: "'NOAA and the U.S. Navy co-led the Sanctuary Soundscape Monitoring Project, SanctSound.'", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "When did SanctSound run?", options: ["Spring 2000 through fall 2004", "Summer 2013 only", "Fall 2018 through spring 2022", "2022 through 2026"], correctIndex: 2, explanation: "'From fall 2018 through spring 2022', in seven national marine sanctuaries and one marine national monument.", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "How much data has SanctSound collected?", options: ["About 25 gigabytes", "About 3 terabytes", "Close to 300 petabytes", "Close to 300 terabytes"], correctIndex: 3, explanation: "'SanctSound has collected close to 300 terabytes of data.'", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "How do snapping shrimp make their sound, according to the SanctSound page?", options: ["They pop bubbles with a claw", "They rub their legs against their shells", "They strike rocks with their tails", "They push water through their gills"], correctIndex: 0, explanation: "Snapping shrimp 'use their larger claw to create and pop bubbles, resulting in a loud snapping sound'.", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "What range did SanctSound's hydrophones record, according to the project page's graphic caption?", options: ["Only infrasound below 20 Hz", "The hearing range of humans in air", "Only ultrasound above 20,000 Hz", "The hearing range of whales"], correctIndex: 1, explanation: "'the yellow bar at the base of the graph shows the hearing range of humans in air and is also the range of frequencies that were recorded by SanctSound hydrophones.'", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "What does the U.S. Geological Survey's bioacoustic survey monitor do?", options: ["Measures the noise exposure of USGS field crews", "Records human speech for oral history", "Sorts night sounds into species and counts", "Tracks aircraft over national parks"], correctIndex: 2, explanation: "It 'will parse recorded nighttime sounds into species and numbers of individuals.'", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "What does this course say about reusing SanctSound's archived audio files?", options: ["They are public domain; reuse freely", "Only the U.S. Navy may reuse them", "The sanctuaries hold their copyright", "Check their license before any reuse"], correctIndex: 3, explanation: "'This course has not read the license on SanctSound's archived audio files, so do not reuse them until you have checked.'", sourceLessonSlug: "under-water-and-beyond-hearing" },

          // Lesson 12: your footprint, and the edit
          { prompt: "What two separate questions does lesson 12 ask?", options: ["Your effect on a place, and what you may do to the recording", "Where to place the microphone, and how loud to record each sound", "Who owns the land, and who owns the recording", "When to arrive, and when to leave"], correctIndex: 0, explanation: "It asks what your presence does to a place while you record, and what you may do to the recording afterward.", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "Is step 1 of the park listening protocol a rule about editing?", options: ["Yes; it forbids removing animal sounds in editing", "No; it is about not disturbing the place on approach", "Yes; it requires labeling every edit", "No; it is about where to put the monitor"], correctIndex: 1, explanation: "Step 1 is about approaching 'as inconspicuous in sight and sound as possible'. It says nothing about editing.", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "When leaving a recorder running, what does the park manual have you estimate?", options: ["How long the batteries will last", "When the next aircraft will pass", "When you'll be 50 m away", "How many animals will call"], correctIndex: 2, explanation: "Estimate 'the time when you will be more than 50 meters away (5-10 minutes) from the site'.", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "How long does the park manual expect it to take to get more than 50 meters from the site?", options: ["30 seconds", "1 hour", "25 days", "5 to 10 minutes"], correctIndex: 3, explanation: "'more than 50 meters away (5-10 minutes) from the site'.", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "What reason does this course give, as its own reading, for writing down your departure time?", options: ["So footsteps can be told from the place", "It proves you were paid for every hour you worked", "It is required by OSHA", "It sets the recorder's clock"], correctIndex: 0, explanation: "The manual's words stop at the estimate. The course's reading: a written departure time lets whoever reviews the recording tell your footsteps from the place.", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "When does the Library of Congress guide say location data may be turned off?", options: ["Whenever you record outdoors", "When there is an ethical reason", "Only when the battery runs low", "Never; it must always stay on"], correctIndex: 1, explanation: "Keep it on 'Unless there is an ethical reason to turn them off (for example, you're photographing a sacred site whose location the community doesn't want to reveal)'.", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "What does Jacob Job say he edits out in post-production?", options: ["Wind and rain", "Bird calls that mask other birds", "Human sounds", "His own breathing only"], correctIndex: 2, explanation: "'Job confessed that in post-production he edits out human sounds, like people's conversations, aircraft, and cars.'", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "What question does Jacob Job ask about removing all anthropogenic noise?", options: ["Then is the recording still legal?", "Then will anyone buy it?", "Then is it still in stereo?", "Then is the final product reality?"], correctIndex: 3, explanation: "'If I remove all anthropogenic noise, then is the final product reality?'", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "What does Jacob Job worry that his edited recordings may set up?", options: ["A false expectation", "A copyright claim", "A lawsuit from the park", "A higher noise floor"], correctIndex: 0, explanation: "'I worry that I may be setting up a false expectation.'", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "What does Jacob Job say exists among natural sound recordists about editing?", options: ["A written code banning all edits", "A debate over ethics", "Agreement that every edit is acceptable", "A federal rule on editing"], correctIndex: 1, explanation: "'There is a debate among natural sound recordists as to what sort of editing is ethical or should be allowed.'", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "Which argument for editing does lesson 12 give?", options: ["Edited files are smaller to store", "Edits remove the need to log", "A listener can hear a stream without a jet across it", "Unedited recordings are illegal to publish in any park"], correctIndex: 2, explanation: "An edited track lets a listener hear a stream without a jet across it, which may be exactly what the listener came for.", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "What is this course's own rule on editing a field recording?", options: ["Never edit a nature recording at all", "Edit freely, since the Park Service allows it", "Delete the original once the edit is done", "Keep the original; label edits"], correctIndex: 3, explanation: "'Keep the unedited original. If you publish an edit, say what you removed.'", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "Whose rule is 'keep the unedited original and say what you removed'?", options: ["This course's own, not the Park Service's", "The Park Service's, from its manual", "Jacob Job's, from the article", "The Library of Congress's"], correctIndex: 0, explanation: "'The rule is ours, not the Park Service's; it lets the argument stay open without losing the evidence.'", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "Which catalog lesson reads location sound as a signal a filmmaker can stage?", options: ["Oral history, lesson 6", "Mockumentary, lesson 2", "Voice Acting, lesson 12", "Civic Documentation, lesson 13"], correctIndex: 1, explanation: "Mockumentary, lesson '2 · The grammar of persuasion, read backwards'. Knowing sound can be staged is one more reason to label your edits.", sourceLessonSlug: "footprint-and-the-edit" },

          // Lesson 13: log it and keep it
          { prompt: "Why does the park manual record MP3 at 96 kbps?", options: ["MP3 is the archival standard", "The Library of Congress requires it", "For long recording time", "MP3 captures more low frequencies"], correctIndex: 2, explanation: "MP3 is 'smaller than WAV files and allows for longer recording time': a monitor left out for weeks needs the time.", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "What does the Library of Congress guide recommend recording, for an archive?", options: ["MP3 files at 96 kbps", "WAV files at 22 kHz and 8 bits", "Any lossless compressed format", "WAV files at 96 kHz and 24 bits"], correctIndex: 3, explanation: "'We recommend recording WAV files at 96khz/24bits.'", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "What does the Library of Congress guide say mp3 and other compressed formats involve?", options: ["A loss of fidelity", "A gain in fidelity", "No loss of any kind", "Higher storage costs"], correctIndex: 0, explanation: "'you can save storage space by recording in mp3 or other compressed formats, these involve a loss of fidelity.'", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "Which task does O*NET list for sound engineering technicians that matches lesson 13's log?", options: ["Repair microphones", "Keep logs of recordings", "Sell recordings", "Write release forms"], correctIndex: 1, explanation: "O*NET lists 'Keep logs of recordings.' among the occupation's tasks.", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "What does the catalog's Oral history lesson 6 say about file format?", options: ["MP3 at 96 kbps for long recordings", "WAV at 96 kHz only", "WAV rather than MP3, 44.1 kHz or better", "Any format, as long as it is labeled"], correctIndex: 2, explanation: "Oral history lesson 6 says 'WAV rather than MP3, 44.1 kHz or better'.", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "How does this course settle MP3 against WAV?", options: ["Always choose MP3 to save space", "Always choose WAV, whatever the job", "Choose whatever the recorder defaults to", "Ask what the recording is for, then choose"], correctIndex: 3, explanation: "Two federal sources answer differently, each right for its own job. 'Ask what the recording is for, then choose.'", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "What statement does the Library of Congress guide call 'downright proverbial' at AFC?", options: ["The Fieldworker Is the First Archivist", "Record Everything, Keep Everything", "The Archive Is the Last Word", "No Release, No Recording"], correctIndex: 0, explanation: "'\"The Fieldworker Is the First Archivist.\" Here at AFC, the statement above is downright proverbial.'", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "What is AFC, the publisher of the Library of Congress fieldwork guide?", options: ["The Army Field Communications school", "The American Folklife Center", "The Acoustic Field Commission of NOAA", "The Audio Fidelity Council"], correctIndex: 1, explanation: "AFC is the American Folklife Center at the Library of Congress, the guide's publisher.", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "Which example file name does the Library of Congress guide give?", options: ["Interview_final_version_2_edited.mp3", "2016-recording.wav", "Chicago_Games_Winick_Interview_1.wav", "Winick_2016_interview_recording_one.wav"], correctIndex: 2, explanation: "'Chicago_Games_Winick_Interview_1.wav': place, topic, fieldworker, kind of recording and number.", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "What does the Library of Congress guide's recording log put in its 'TOPIC SUMMARY'?", options: ["One column of keywords", "The interviewee's signature", "The recorder's settings for each file", "Two columns: 'Time or meter / Topic'"], correctIndex: 3, explanation: "A 'TOPIC SUMMARY' in two columns, 'Time or meter / Topic'.", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "Which of these is a field on the Library of Congress guide's AUDIO AND VIDEO RECORDING LOG?", options: ["Rights", "Microphone serial number", "Weather", "Battery level"], correctIndex: 0, explanation: "The fields are title, names, place, date, description, language, formats, rights and keyword tags.", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "What does the Library of Congress guide ask fieldnotes to record about the audio?", options: ["The price of the recorder", "Extraneous sounds", "The sample rate of each file", "The listener's opinion of the recording"], correctIndex: 1, explanation: "Fieldnotes should record 'sources of extraneous sounds picked up by your audio recorder'.", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "How many copies of your files does the Library of Congress guide recommend, and where?", options: ["Two, both kept in the same safe", "One, on a cloud service", "Three, with one kept elsewhere", "Five, all kept in one place"], correctIndex: 2, explanation: "'make three copies of your files on hard drives. We recommend you keep one in a different physical location from the others.'", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "How often does the Library of Congress guide suggest migrating files to new storage devices?", options: ["Every year", "Every 25 years", "Never", "Every 5 years or so"], correctIndex: 3, explanation: "'we recommend you migrate your files to new storage devices every 5 years or so.'", sourceLessonSlug: "log-it-and-keep-it" },
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

**Choose the spot.** The fieldwork guide's advice for choosing where to record applies as much to a rehearsal room or a hall: "politely ask to use the spot that looks the best, and to turn off any TVs, music, or noisy equipment like fans." And: "Avoid noise! Be careful of setting up near a window onto a busy street. Also, try to avoid spots near refrigerators, freezers, air conditioners, furnaces, heat and AC vents, and water heaters. All of these locations might be silent when you arrive and become noisy the second you begin recording." *Civic Documentation: Recording What Happened in Public*, lesson "13 · Audio, photography, and live reporting", says the same for a public meeting: sit where the microphone will hear the speakers "rather than the air conditioning". *Acting: The Frame, the Stage, and the Read*, lesson "23 · The self-tape: the part you actually control", gives an actor recording at home the same advice: "kill the refrigerator and the fan".

**Ask first.** The guide's sample release includes the line: "By giving permission, I understand that I do not give up any copyright or performance rights that I may hold." Record a performance only with the performers' knowledge and the agreement of whoever runs the space. Lesson 23 covers releases.

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

> **Before release:** needs BAM's decision (brief question 5): whether set sound is taught here or in the planned Videography course, which would leave only a link here in its place.

**A 1989 Army kit list.** The Army's 1989 course on electronic field production (EFP), as its title spells the term out, lists the audio side: "EFP audio requirements should include extra mike cables, gaffer tape, and headphones for monitoring audio pickup, spare batteries, fuses and windscreens for the microphones." On microphones: "Shotgun mikes and fishpole boom microphones are used so as not to be seen"; wireless mics were "becoming more common on EFP shoots"; and with several microphones you need "a sound mixer, preferably battery powered". Its glossary: "Fishpole boom: Hand-held and used mainly on location".

**A course that dates itself.** The same course says of itself: "This subcourse reflects the doctrine current at the time the subcourse was prepared." Its lessons also state that their material was derived in part from a separately published book, Alan Wurtzel's *Television Production*, second edition. So this course quotes it briefly and links it, and does not copy it.

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

> **Before release:** needs BAM's decision (brief question 5): whether set sound is taught here or in the planned Videography course, which would leave only a link here in its place.

**The lavalier in 1987.** The Army's television course: "The most commonly used microphone in television is the lavalier". The rules it taught:
- "Have the production personnel place the mike on the subject".
- "place the mike in the direction the performer will face".
- "Do not place a lavalier microphone under a tie or clothing", because "This may result in muffled audio or extraneous clothing noise".

That last rule is about a 1987 studio. How a lavalier is hidden under wardrobe today is current practice this lesson holds for the practitioner: no source read for this course describes it.

**The lavalier in an interview.** The Library of Congress guide: "Set your microphones as close to the speakers (including yourself) as possible. Lavaliere mics are best for one-on-one interviews and should be clipped near the top button of a shirt or blouse", which puts it, the guide says, "about 6 inches below the chin. If you use a standard microphone, it should be mounted to a stand and placed about 6 to 10 inches from the speakers." (The guide spells it "Lavaliere".)

**A microphone in the picture.** For radio, the Army course had microphones "usually placed on a 45 degree angle, about four to six inches from the announcer's mouth". Television changes that: "Microphone placement is more critical for television if and when the mike is to be seen on-camera."

**The shotgun.** The Army course's shotgun microphone is "designed to pick up sound and not be in the picture", and it "may be several feet from the speaker and still pick up acceptable audio". (It is printed page 27, which is PDF page 38 of the scan.) The 1989 course pairs it with the boom: "Shotgun mikes and fishpole boom microphones are used so as not to be seen". How a boom operator aims and moves a shotgun through a take is practitioner's knowledge; no source read for this course describes it.

**Why the 1987 rules still teach.** Read them as reasons, not recipes. The microphone goes where the voice will be (the direction the performer faces), close to the source (about 6 inches below the chin, or about 6 to 10 inches on a stand, in the Library of Congress guide), and away from cloth that can rub it ("extraneous clothing noise"). The equipment has changed; those reasons are what you bring to the practitioner.

**Where the practitioner's part begins.** Hiding a lavalier on wardrobe, and holding, aiming and moving a boom through a take, are hands-on skills no document read for this course describes. They wait for the production sound mixer or boom operator named at the top.

:::reveal Where does the Library of Congress guide clip a lavalier for a one-on-one interview? ||| Near the top button of a shirt or blouse, about 6 inches below the chin.

:::reveal Why did the 1987 Army course say not to put a lavalier under a tie or clothing? ||| "This may result in muffled audio or extraneous clothing noise".

:::reveal What two things does the Army course say about the shotgun microphone? ||| It is "designed to pick up sound and not be in the picture", and it "may be several feet from the speaker and still pick up acceptable audio".

:::reveal At what angle and distance did the Army course place a radio microphone? ||| At a 45 degree angle, about four to six inches from the announcer's mouth.

## Sources
- ${ARMY_1987} Locator: printed p. 23 (PDF p. 34); p. 24 (PDF p. 35); p. 25 (PDF p. 36); the shotgun passage, printed p. 27 (PDF p. 38).
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
      body: `> **Before release:** needs BAM's decision (brief question 5): whether set sound is taught here or in the planned Videography course, which would leave only a link here in its place.

**What a console is for.** The 1987 Army course gives a console "three primary functions: 1. amplify sound 2. control sound 3. route sound".

**The VU meter, in the Army's words.** "The normal acceptable level for riding audio is between 80-100 per cent VU modulation". The same page, printed p. 36, also uses three phrases: "in the red", "the needle is pegged" and "riding in the mud". This lesson quotes only the normal band and does not define the three phrases, because their meanings are not in the notes this course was checked against. Open printed p. 36 and read them in context.

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

> **Before release:** needs BAM's decision (brief question 5): whether set sound is taught here or in the planned Videography course, which would leave only a link here in its place.

**The documented part: say who, where and when, on the recording.** The Library of Congress guide: "At the start of the recording, make a brief opening statement that specifies the date and place of the interview, the names of the people on the recording, yourself included, and the general topic of the interview." And at the end: "Make a brief closing announcement on the recording at the end of the interview." A spoken label at the head of a file stays with the file even if the paperwork is lost.

**A known reference.** Lessons 8 and 17 added two more things a recording can begin with: a calibration tone (the park manual's 30 seconds at 94 dB) or a test signal (the Army's 1000 Hz tone), and 30 seconds through the dummy microphone to capture the system's own noise (a noise floor the park manual calls "system specific"). A recording that starts with who, where, when and a reference can be checked by someone who was not there.

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
          // Lesson 14: a performance in a hall
          { prompt: "What does the Library of Congress guide say about the best on-location techniques for concerts, parades and weddings?", options: ["They are beyond the scope of its advice", "They are set out in full in its appendix", "They need a single shotgun microphone on a boom", "They are the same as for a seated interview"], correctIndex: 0, explanation: "'The best on-location recording techniques for art forms like concerts, parades, and weddings are beyond the scope of our advice'.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "What kind of recording does lesson 14 teach?", options: ["A broadcast mix of a show for commercial release", "A documentation recording of a performance, for study", "A reinforcement setup that feeds the house speakers", "A multitrack recording with one mic per performer"], correctIndex: 1, explanation: "Lesson 14 teaches a documentation recording of a performance, made for study. It is not how a production records or amplifies a show.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "What does lesson 14 say its two-microphone setup is not?", options: ["A way to learn a great deal about the art form", "A recording you can review later", "How a production records or amplifies a show", "Something the guide itself suggests"], correctIndex: 2, explanation: "'That is the setup this lesson teaches: a documentation recording of a performance, made for study. It is not how a production records or amplifies a show.'", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "Which of these can the Library of Congress guide's two-microphone performance setup not do, according to lesson 14?", options: ["Record the room from one position", "Capture a run-through for later study", "Be monitored on headphones", "Feed the house speakers"], correctIndex: 3, explanation: "It records the room from one position. It does not feed the house speakers, cannot bring one voice forward in a mix, and plays no cues.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "According to lesson 14, from how many positions does the Library of Congress guide's two-microphone setup record the room?", options: ["One, wherever the pair is set up", "Two, one at each side of the stage", "One for each performer on stage", "Four, one in each corner of the hall"], correctIndex: 0, explanation: "Lesson 14: 'It records the room from one position.' Both of the guide's pairs sit together, about 6 inches or about two feet apart.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "What does lesson 14 say the two-microphone setup cannot do with one voice?", options: ["Capture it from the audience position", "Bring it forward in a mix", "Hear it on headphones", "Record it at all"], correctIndex: 1, explanation: "'it cannot bring one voice forward in a mix'. Those jobs are left to the practitioner.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "What does the 1987 Army course say about an empty room?", options: ["It records exactly like the same room when it is full of furniture", "It absorbs more sound than a furnished room does", "It reflects sound, so it records unlike the same room furnished", "It is the best place to record a voice"], correctIndex: 2, explanation: "'An empty room reflects sound and therefore, records differently than that same room filled with furniture'.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "Who does lesson 14 say must answer whether a full audience changes a hall the way furniture changes a room?", options: ["The Army course, which answers it on the same page", "The Library of Congress guide", "Nobody; the answer is plainly yes", "The practitioner who reviews the lesson"], correctIndex: 3, explanation: "The source speaks of furniture. Whether a full audience changes a hall the same way is a question for the practitioner who reviews the lesson.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "What does the Library of Congress guide say to ask for when choosing where to record?", options: ["The best-looking spot, with TVs, music and fans off", "The quietest room in the building, even if it is a closet", "A spot right next to the loudest instrument", "A seat in the back row of the hall"], correctIndex: 0, explanation: "'politely ask to use the spot that looks the best, and to turn off any TVs, music, or noisy equipment like fans.'", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "Which of these does the Library of Congress guide warn against setting up near?", options: ["A full bookcase", "Heat and AC vents", "A thick carpet", "A heavy velvet curtain"], correctIndex: 1, explanation: "'try to avoid spots near refrigerators, freezers, air conditioners, furnaces, heat and AC vents, and water heaters.'", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "Why does the Library of Congress guide warn about refrigerators, freezers and furnaces?", options: ["They make electrical interference in every microphone", "They are always louder than the performance", "They can start up once you record", "They are fire hazards near recording gear"], correctIndex: 2, explanation: "'All of these locations might be silent when you arrive and become noisy the second you begin recording.'", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "What does the Library of Congress guide say to be careful of setting up near?", options: ["A doorway into a quiet hall", "A wall covered in carpet", "The front row of seats", "A window onto a busy street"], correctIndex: 3, explanation: "'Be careful of setting up near a window onto a busy street.'", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "What does Civic Documentation lesson 13 say about where to sit at a public meeting?", options: ["Where the mic hears speakers, not the air conditioning", "At the back, so the mic picks up the whole room evenly", "At the loudest speaker's table, beside the gavel", "Outside the room, recording through the open door"], correctIndex: 0, explanation: "It says to sit where the microphone will hear the speakers 'rather than the air conditioning'.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "What does the Library of Congress guide's sample release say the person giving permission does not give up?", options: ["The right to be paid for every use", "Copyright or performance rights", "The right to see the recording first", "Their name, their image and their voice"], correctIndex: 1, explanation: "'By giving permission, I understand that I do not give up any copyright or performance rights that I may hold.'", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "Besides the performers' knowledge, whose agreement does lesson 14 say you need to record a performance?", options: ["The local police", "The Park Service", "Whoever runs the space", "Each audience member"], correctIndex: 2, explanation: "'Record a performance only with the performers' knowledge and the agreement of whoever runs the space.'", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "Which of these does lesson 14 leave to the practitioner?", options: ["Choosing a quiet spot to record from", "Asking the performers first", "Setting two omnis about two feet apart", "Playback of recorded cues"], correctIndex: 3, explanation: "Reinforcement, playback of recorded cues, show control and cueing an effects operator live wait for the theater sound designer or operator.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "Which of these is in the part lesson 14 leaves to a theater sound designer or operator?", options: ["Reinforcement and show control", "Turning off fans before recording", "Reading the guide's verdict on its setups", "Recording a run-through for study"], correctIndex: 0, explanation: "No source read covers sound in a theater beyond capturing a run-through: reinforcement, playback, show control and live cueing wait for the practitioner.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "How many federal texts on recording a performance does lesson 14 say this course found?", options: ["Three Army manuals on theater sound reinforcement", "One, which says where its advice stops", "None at all", "A dozen theater textbooks"], correctIndex: 1, explanation: "'The one federal text this course found on recording a performance says where its advice stops'.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "In the Library of Congress guide's directional setup for a performance, at what angle are the two microphones set?", options: ["90 degrees", "180 degrees", "110 degrees", "45 degrees"], correctIndex: 2, explanation: "Two directional microphones 'about 6 inches apart and at a 110-degree angle'.", sourceLessonSlug: "a-performance-in-a-hall" },

          // Lesson 15: the kit and the site survey
          { prompt: "Which of these is on the 1989 Army course's EFP audio list?", options: ["A boom operator", "Gaffer tape", "A timecode slate", "A wireless receiver"], correctIndex: 1, explanation: "'EFP audio requirements should include extra mike cables, gaffer tape, and headphones for monitoring audio pickup, spare batteries, fuses and windscreens for the microphones.'", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "Why does the 1989 Army course say shotgun and fishpole boom microphones are used?", options: ["So the talent can hold them", "So wind noise disappears", "So as not to be seen", "So no cables are needed"], correctIndex: 2, explanation: "'Shotgun mikes and fishpole boom microphones are used so as not to be seen'.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "What did the 1989 Army course say about wireless mics?", options: ["They were banned on Army shoots", "They had already replaced every wired mic", "They worked only indoors", "They were becoming more common on EFP shoots"], correctIndex: 3, explanation: "Wireless mics were 'becoming more common on EFP shoots'.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "What does the 1989 Army course say you need when using several microphones?", options: ["A sound mixer, preferably battery powered", "A separate recorder for each of the mikes", "A second boom operator for each extra mike", "A generator, since mixers need mains power"], correctIndex: 0, explanation: "With several mikes you need 'a sound mixer, preferably battery powered'.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "How does the 1989 Army course's glossary define a fishpole boom?", options: ["Mounted on a dolly and used in studios", "Hand-held and used mainly on location", "Clipped to the talent's clothing", "Hung from the lighting grid"], correctIndex: 1, explanation: "'Fishpole boom: Hand-held and used mainly on location'.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "What does the 1989 Army course say of itself?", options: ["It is the current standard for all set sound", "It replaces every earlier Army course", "It reflects doctrine of its day", "It was written by a film union"], correctIndex: 2, explanation: "'This subcourse reflects the doctrine current at the time the subcourse was prepared.'", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "Why does this course quote the 1989 Army course only briefly, and link it?", options: ["It is classified and cannot be copied", "Its text is too damaged to read", "The Army forbids quoting it", "It draws partly on a published book"], correctIndex: 3, explanation: "Its lessons state their material was derived in part from Alan Wurtzel's Television Production, so the course quotes briefly, links, and does not copy.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "Which book do the 1989 Army course's lessons name as a source?", options: ["Wurtzel's Television Production", "Brachart's Machinerie scénique", "The Library of Congress fieldwork guide", "The Park Service's training manual"], correctIndex: 0, explanation: "Each lesson names 'Television Production, second edition, Wurtzel, Alan.' among its sources.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "When does the 1989 Army course say to survey a location?", options: ["At night, when the site is quietest", "At the same hour as the event", "One week after the shoot", "Only when the site is empty"], correctIndex: 1, explanation: "Survey 'at the same time of day the event is scheduled'.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "What question does the 1989 Army site survey ask about microphones?", options: ["Whether they are older than five years", "Whether they are wired or battery powered", "Whether mics will be hidden or seen", "Whether the talent owns them"], correctIndex: 2, explanation: "'Does this shoot require hidden microphones or will they be visible on camera?'", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "What does the 1989 Army course say to avoid laying near video or audio lines?", options: ["Gaffer tape", "Headphones", "Spare batteries", "Electric cables"], correctIndex: 3, explanation: "Avoid 'laying electric cables near video or audio lines'.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "How does the 1987 Army course say to handle a cable?", options: ["By the metal connector, not by the wire", "By the wire, never by the connector", "By wrapping it around your elbow", "By pulling it from the far end"], correctIndex: 0, explanation: "Handle a cable 'by the metal connector, NOT by the wire'.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "What does the 1987 Army course say about cables not in use?", options: ["Wrap them as tight as possible", "Coil them neatly, not too tight", "Leave them on the floor", "Cut them to length"], correctIndex: 1, explanation: "'Cables that are not in use should be neatly coiled. Be careful not to wrap them too tight'.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "What does the 1987 Army course say to do with cables run across the floor?", options: ["Hang them from the ceiling", "Cover them with carpet", "Tape them down", "Run them under doors"], correctIndex: 2, explanation: "'When cables are run across the floor, tape them down so that no one will trip.'", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "Why does this course leave the method of coiling cable to the practitioner?", options: ["The Army bans coiling", "Coiling damages every cable", "Knot-Tying lesson 26 forbids it", "Neither Army text describes one"], correctIndex: 3, explanation: "The coiling method is a hands-on skill left to the practitioner, since neither Army text describes one.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "Which catalog lesson covers cable runs on a broadcast?", options: ["Knot-Tying & Rope Work, lesson 26", "Voice Acting, lesson 12, on recording chains", "Oral history, lesson 6", "Mockumentary, lesson 2"], correctIndex: 0, explanation: "Knot-Tying & Rope Work, lesson '26 · Broadcast & stage rigging basics (safety-flagged)'.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "Which three items does the Library of Congress list add to a field kit?", options: ["A boom pole, a slate and a timecode box", "Power strip, tape measure, release forms", "A generator, a mixing desk and a video monitor", "A tripod, a foam windscreen and a hydrophone"], correctIndex: 1, explanation: "'An extension cord and power strip.', 'A steel tape measure' and 'Release forms.'", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "Which of these was not researched for this course and waits for the practitioner in lesson 15?", options: ["The 1989 Army kit list", "Taping cables to the floor", "Wireless frequency rules", "Surveying at the same time of day"], correctIndex: 2, explanation: "Current wireless systems and any rules on their radio frequencies were not researched; nor were timecode or today's mixers and recorders.", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "What does EFP stand for in the 1989 Army course's title?", options: ["External film projector", "Electric feed power", "Engineering field practice", "Electronic field production"], correctIndex: 3, explanation: "The course is titled Plan and produce an electronic field production/television spot announcement: EFP is electronic field production.", sourceLessonSlug: "kit-and-site-survey" },

          // Lesson 16: placing a lav, pointing a shotgun
          { prompt: "Which microphone does the 1987 Army course call the most commonly used in television?", options: ["The lavalier", "The shotgun", "The ribbon", "The hand-held"], correctIndex: 0, explanation: "'The most commonly used microphone in television is the lavalier'.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "Who does the 1987 Army course say should place the lavalier on the subject?", options: ["The subject alone", "The production personnel", "Another performer on set", "A member of the audience"], correctIndex: 1, explanation: "'Have the production personnel place the mike on the subject'.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "In which direction does the 1987 Army course say to place a lavalier?", options: ["Toward the camera lens, always", "Toward the nearest studio light", "The way the performer will face", "Straight down at the studio floor"], correctIndex: 2, explanation: "'place the mike in the direction the performer will face'.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "Why did the 1987 Army course say not to place a lavalier under a tie or clothing?", options: ["It may overheat the microphone's battery", "It breaks the Army's dress code", "It makes the cable too short", "Muffled audio or clothing noise"], correctIndex: 3, explanation: "'This may result in muffled audio or extraneous clothing noise'.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "How does this course treat the 1987 rule against putting a lavalier under clothing?", options: ["As a rule about a 1987 studio", "As the current rule on every film set", "As wrong, so lavs always go under clothing", "As a safety rule enforced by OSHA"], correctIndex: 0, explanation: "That rule is about a 1987 studio. How a lavalier is hidden under wardrobe today is held for the practitioner: no source read describes it.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "Where does the Library of Congress guide say to set your microphones?", options: ["As far from the speakers as the cable allows", "As close to the speakers as possible", "In the center of the room, on the floor", "Behind the interviewee, out of sight"], correctIndex: 1, explanation: "'Set your microphones as close to the speakers (including yourself) as possible.'", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "For what does the Library of Congress guide say lavalier mics are best?", options: ["Concerts, parades and weddings", "Recording birds", "One-on-one interviews", "Group discussions"], correctIndex: 2, explanation: "'Lavaliere mics are best for one-on-one interviews'.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "Where does the Library of Congress guide clip a lavalier?", options: ["On the belt, about 2 feet below the chin", "On the collar at the back of the neck", "On the lapel, a foot below the chin", "Top button, about 6 inches below the chin"], correctIndex: 3, explanation: "'clipped near the top button of a shirt or blouse', 'about 6 inches below the chin.'", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "How far from the speakers does the Library of Congress guide place a standard microphone on a stand?", options: ["About 6 to 10 inches", "About 2 to 3 feet", "About 1 inch", "About 6 feet"], correctIndex: 0, explanation: "'it should be mounted to a stand and placed about 6 to 10 inches from the speakers.'", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "At what angle and distance did the 1987 Army course place a radio microphone?", options: ["Straight on, about two feet from the mouth", "45 degrees, four to six inches away", "A 90 degree angle, touching the chin", "A 110 degree angle, six inches apart"], correctIndex: 1, explanation: "Radio mics were 'usually placed on a 45 degree angle, about four to six inches from the announcer's mouth'.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "Why does the 1987 Army course say microphone placement is more critical for television?", options: ["Television needs louder levels", "Studios have more echo", "The mike may be seen on camera", "Cameras make more noise"], correctIndex: 2, explanation: "'Microphone placement is more critical for television if and when the mike is to be seen on-camera.'", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "What is the shotgun microphone designed to do, according to the 1987 Army course?", options: ["Pick up every sound in the room equally", "Clip to the talent's clothing", "Record under water", "Pick up sound and not be in the picture"], correctIndex: 3, explanation: "The shotgun is 'designed to pick up sound and not be in the picture'.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "How far from the speaker does the 1987 Army course say a shotgun may be and still pick up acceptable audio?", options: ["Several feet", "A few inches", "Fifty meters", "Exactly 6 inches"], correctIndex: 0, explanation: "It 'may be several feet from the speaker and still pick up acceptable audio'.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "What does the 1989 Army course pair the shotgun with?", options: ["The lavalier", "The ribbon mike", "The fishpole boom", "The hydrophone"], correctIndex: 2, explanation: "'Shotgun mikes and fishpole boom microphones are used so as not to be seen'.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "What does lesson 16 say about how a boom operator aims and moves a shotgun through a take?", options: ["The 1989 Army course gives full instructions", "The Library of Congress guide covers it on page 25", "It is the same as placing a lavalier", "No source read for this course describes it"], correctIndex: 3, explanation: "'How a boom operator aims and moves a shotgun through a take is practitioner's knowledge; no source read for this course describes it.'", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "What reason behind the 1987 rules does lesson 16 draw from 'the direction the performer will face'?", options: ["The microphone goes where the voice will be", "The microphone must always face toward the camera", "The performer must not move", "The microphone points at the floor"], correctIndex: 0, explanation: "Read the rules as reasons: the microphone goes where the voice will be.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "What reason does lesson 16 draw from '6 inches below the chin' and '6 to 10 inches on a stand'?", options: ["Keep the microphone out of the picture", "Keep the microphone close to the source", "Keep the microphone away from the voice", "Keep the microphone level with the eyes"], correctIndex: 1, explanation: "The microphone goes close to the source: 6 inches below the chin, or 6 to 10 inches on a stand.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "What reason does lesson 16 draw from the warning about 'extraneous clothing noise'?", options: ["Keep clothing off the cable", "Dress talent in silk", "Keep it away from rubbing cloth", "Use two lavs on every speaker"], correctIndex: 2, explanation: "Away from cloth that can rub it ('extraneous clothing noise').", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "Which two skills does lesson 16 say wait for a production sound mixer or boom operator?", options: ["Facing a lav and spacing a stand mic", "Angling a radio mic and taping down cable", "Surveying the site and handling cable", "Hiding a lav and working a boom"], correctIndex: 3, explanation: "'Hiding a lavalier on wardrobe, and holding, aiming and moving a boom through a take, are hands-on skills no document read for this course describes.'", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "What does lesson 16 say you bring to the practitioner from the 1987 rules?", options: ["The reasons behind the rules", "The 1987 equipment itself", "A finished boom technique", "A list of current lav models"], correctIndex: 0, explanation: "'The equipment has changed; those reasons are what you bring to the practitioner.'", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },

          // Lesson 17: meters, tone and gain
          { prompt: "What three primary functions does the 1987 Army course give a console?", options: ["Record, edit and mix sound", "Amplify, control and route sound", "Filter, limit and compress sound", "Store, copy and play sound"], correctIndex: 1, explanation: "A console's 'three primary functions: 1. amplify sound 2. control sound 3. route sound'.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "In lesson 17's 'Try it' exercise, at what level do you speak while setting the input?", options: ["The softest level you expect", "A whisper, to find the noise floor", "The loudest level you expect", "Your normal reading level"], correctIndex: 2, explanation: "'Speak at the loudest level you expect, raise the input until the peak light just comes on, then lower it two steps.'", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "What does the 1987 Army course give as the normal acceptable level for riding audio?", options: ["Between 20 and 40 per cent of full VU modulation", "Always above 100 per cent VU modulation", "Exactly 94 dB on the console", "Between 80 and 100 per cent VU modulation"], correctIndex: 3, explanation: "'The normal acceptable level for riding audio is between 80-100 per cent VU modulation'.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "Which of these phrases appears on printed page 36 of the 1987 Army course?", options: ["Riding in the mud", "Hitting the red wall", "Clipping the top", "Going to black"], correctIndex: 0, explanation: "Page 36 uses 'in the red', 'the needle is pegged' and 'riding in the mud'.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "Why does lesson 17 not define 'in the red', 'the needle is pegged' and 'riding in the mud'?", options: ["The Army course forbids defining them", "Their meanings were not checked", "They are offensive in modern usage", "They mean the same as 'DOWN and UNDER'"], correctIndex: 1, explanation: "Their meanings are not in the notes this course was checked against, so it sends you to printed p. 36 to read them in context.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "Which term does the 1987 Army course list beside fading, crossfade and segue?", options: ["In the red", "Room tone", "DOWN and UNDER", "Pre-Rec"], correctIndex: 2, explanation: "The course names 'DOWN and UNDER' in its list beside fading, crossfade and segue.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "From where does the 1987 Army course say a failed unit is bypassed?", options: ["From the input of the failed piece of equipment", "From the microphone, straight to the recorder", "From the loudspeaker back to the console", "From the output of the last good piece of equipment"], correctIndex: 3, explanation: "Bypassing 'is always done from the \"output\" of the last good piece of equipment, around the bad piece of equipment'.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "What does the 1986 Army field-production course record as its audio test signal?", options: ["A 1000 Hz tone", "A 94 dB tone", "A spoken slate", "White noise"], correctIndex: 0, explanation: "'The audio test signal recorded is a 1000 Hz tone'.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "What tone does the park manual record, and for what?", options: ["A 1000 Hz tone, as a television test signal", "A 94 dB tone, for calibration", "A 20 Hz tone, to test infrasound", "A 20,000 Hz tone, to test ultrasound"], correctIndex: 1, explanation: "'Record 30 seconds of the 94dB calibration tone'; calibration 'verifies the values recorded are accurate'.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "How does lesson 17 sum up the Army's 1000 Hz tone and the park manual's 94 dB tone?", options: ["Two names for one thing", "Two errors in one manual", "Two documents, two jobs", "Two tones to play together"], correctIndex: 2, explanation: "The Army calls its tone an audio test signal for a television chain; the park manual's tone is for calibration.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "What problem does the 1986 Army course say automatic gain control causes?", options: ["Distortion during the loudest portions", "Silence at the start of a take", "A hum from power lines", "Hiss and roar during quiet portions"], correctIndex: 3, explanation: "'the AGC will cause hiss and roar as it seeks a signal during quiet portions of the program.'", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "What is the park manual's hands-on rule for setting a level on a digital recorder?", options: ["Two steps below the peak light", "Exactly where the peak indicator lights", "As high as the recorder allows", "Halfway up the meter"], correctIndex: 0, explanation: "Set the level 'two increments below the point at which the peak indicator level is illuminated'.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "What does the Library of Congress guide say the meters should tell you?", options: ["The internal temperature of the recorder", "If the recording levels are good", "How much storage remains", "The noise floor of the system"], correctIndex: 1, explanation: "'the meters should tell you if the recording levels are good.'", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "Why does lesson 17 give no target figure for a digital meter?", options: ["Digital meters have no scale", "OSHA forbids digital targets", "None of its sources gives one", "Every target is a trade secret"], correctIndex: 2, explanation: "'This course gives no target figure for a digital meter, because no source read for it states one.'", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "What does lesson 17 ask you to do when a practitioner or a manual gives you a digital target?", options: ["Ignore it in favor of the VU band", "Apply it to analog meters as well", "Report it to the Army", "Write down where it came from"], correctIndex: 3, explanation: "'When a practitioner or a manufacturer's manual gives you one, write down where it came from.'", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "In lesson 17's 'Try it' exercise, what do you do once the peak light just comes on?", options: ["Lower the input two steps", "Raise the input two steps", "Switch on AGC", "Turn the limiter on"], correctIndex: 0, explanation: "Raise the input until the peak light just comes on, then lower it two steps.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "In lesson 17's 'Try it' exercise, how long do you record before playing back on headphones?", options: ["Thirty minutes", "Ten seconds", "Two hours", "One second"], correctIndex: 1, explanation: "'Record ten seconds, and play it back on headphones.'", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "Which kind of meter does the 1987 Army course's 80 to 100 per cent band refer to?", options: ["A peak indicator light", "A sound level meter on the A scale", "A VU meter", "A noise dosimeter"], correctIndex: 2, explanation: "'between 80-100 per cent VU modulation': the VU meter.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "What does the Army's bypass rule have you find first when a unit fails?", options: ["The newest unit in the chain", "The manufacturer's phone number", "The loudest input", "The last unit that works"], correctIndex: 3, explanation: "'Find the last unit that works, and route around the one that does not.'", sourceLessonSlug: "meters-tone-and-gain" },

          // Lesson 18: slates, room tone and sync
          { prompt: "What does the Library of Congress guide say a brief opening statement should specify?", options: ["The date and place, everyone's names, and the general topic", "The recorder's make, model and sample rate", "The weather, the wind speed and the noise floor", "The release form's serial number and the archive's postal address"], correctIndex: 0, explanation: "'make a brief opening statement that specifies the date and place of the interview, the names of the people on the recording, yourself included, and the general topic'.", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "Does the Library of Congress guide's opening statement include the interviewer's own name?", options: ["No, only the interviewee's", "Yes, 'yourself included'", "Only if the interviewer is well known", "Only on commercial recordings"], correctIndex: 1, explanation: "The names of the people on the recording, 'yourself included'.", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "What does the Library of Congress guide ask you to record at the end of an interview?", options: ["Thirty seconds of silence", "A 1000 Hz tone", "A brief closing announcement", "The whole release form, read aloud"], correctIndex: 2, explanation: "'Make a brief closing announcement on the recording at the end of the interview.'", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "Why does lesson 18 value a spoken label at the head of a file?", options: ["It replaces the need for a release form", "It raises the recording level", "It is required by OSHA", "It stays with the file"], correctIndex: 3, explanation: "'A spoken label at the head of a file stays with the file even if the paperwork is lost.'", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "What does lesson 18 say a recording that starts with who, where, when and a reference allows?", options: ["Someone who was not there can check it", "The file to skip its log", "The recorder to set its own level automatically", "Editing without keeping the original"], correctIndex: 0, explanation: "'A recording that starts with who, where, when and a reference can be checked by someone who was not there.'", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "Which of these, from lesson 18, captures the recording system's own noise?", options: ["The spoken opening statement", "The dummy-microphone recording", "The Army's 1000 Hz test signal", "The 94 dB calibration tone"], correctIndex: 1, explanation: "Lesson 8's dummy-mic test: 'Record 30 seconds of audio on the R-05 with the dummy mic attached, to be able to differentiate silence in the field with the static of the system.' Calibration, the manual says, 'does not give a lower bound to the measurements'.", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "Why does the Library of Congress guide tell interviewers not to keep saying 'I see' or 'uh-huh'?", options: ["It is rude to the interviewee", "It confuses the transcriber's software", "It mars the recording", "It breaks the release agreement"], correctIndex: 2, explanation: "'it mars the recording, distracts listeners, and makes it difficult to use the audio for production.'", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "What does the Library of Congress guide say usually works well instead of saying 'uh-huh'?", options: ["Writing notes", "Saying 'yes' quietly", "Holding up a card", "Nodding in approval"], correctIndex: 3, explanation: "'Nodding in approval usually works well.'", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "In an audio-only recording, what does the Library of Congress guide say to do when the speaker gestures?", options: ["Describe it aloud", "Ask them to stop gesturing", "Note it later in the log only", "Pause the recording"], correctIndex: 0, explanation: "'if the speaker makes a gesture indicating size or distance, and the recording is audio only, quickly describe what the interviewee is doing.'", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "How long a session does the Library of Congress guide recommend?", options: ["About ten minutes", "About an hour", "About four hours", "A full day"], correctIndex: 1, explanation: "'We recommend about an hour for a session.'", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "Why did the 1942 farm-radio handbook want copy typed on one side of the sheet?", options: ["Paper was rationed in wartime", "Engineers read the back for cues", "Page turns might be heard", "Typewriters could print only one side"], correctIndex: 2, explanation: "'because the sound of turning pages might be picked up by the microphone'.", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "Which catalog lesson recommends recording room tone?", options: ["Oral history, lesson 8, on transcription", "Mockumentary, lesson 2", "Acting, lesson 23", "Voice Acting, lesson 12"], correctIndex: 3, explanation: "Voice Acting: The Instrument, lesson '12 · Levels, files, and the honest minimum chain', recommends recording room tone.", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "Why does lesson 18 leave room tone on a set to the practitioner?", options: ["No document read describes it", "Room tone is not allowed on union sets", "The Army course forbids it", "Room tone is the same as a calibration tone"], correctIndex: 0, explanation: "'No document read for this course describes how room tone is recorded on a set, so this lesson leaves it to the practitioner.'", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "Which set convention does lesson 18 name but leave to the practitioner?", options: ["The spoken opening statement", "The sound report", "The closing announcement", "Avoiding 'uh-huh'"], correctIndex: 1, explanation: "Wild tracks, slating, timecode and sync, and the sound report are named so you know they exist; how each is done waits for the practitioner.", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "Which of these does lesson 18 say no source read for the course describes?", options: ["Saying the date at the start", "Describing a gesture aloud", "Timecode and picture sync", "Typing copy on one side"], correctIndex: 2, explanation: "Timecode and keeping picture and sound in sync are among the set conventions no source read describes.", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "What reference does lesson 18 say a recording can begin with?", options: ["A recorded weather report", "A tone or test signal", "A song", "A countdown from ten"], correctIndex: 1, explanation: "A calibration tone (the park manual's 30 seconds at 94 dB) or a test signal (the Army's 1000 Hz tone).", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "What does the Library of Congress guide's 'uh-huh' passage say such expressions do to listeners?", options: ["Reassure them", "Wake them", "Distract them", "Teach them"], correctIndex: 2, explanation: "It 'mars the recording, distracts listeners, and makes it difficult to use the audio for production.'", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "Which 1942 document does lesson 18 cite on the noise of paper?", options: ["The Neglected Crop, a radio drama", "Folklife and Fieldwork, a guide", "Basic Television Lighting, Audio and Scenery, a course", "Tips on Radio Broadcasting, a farm-radio handbook"], correctIndex: 3, explanation: "The 1942 handbook Tips on Radio Broadcasting: copy typed on one side only, 'because the sound of turning pages might be picked up by the microphone'.", sourceLessonSlug: "slates-room-tone-and-sync" },
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
- ${BRACHART} Locator: title page (PDF p. 5), with the same price on the front cover (PDF p. 3); the painted train, printed p. 20 (PDF p. 24); snow, printed p. 28 (PDF p. 32); the moving sea cloth ("tapis de mer"), printed p. 31 (PDF p. 35); hooves, soft ground, cavalry and artillery, printed p. 22 (PDF p. 26); thunder, printed pp. 25 to 26 (PDF pp. 29 to 30); hail, printed p. 26 (PDF p. 30); rain, printed pp. 26 to 27 (PDF pp. 30 to 31); wind, printed pp. 27 to 28 (PDF pp. 31 to 32). Read in the archive.org text; translations are ours.
- ${NPS_WEST} Locator: heading "Lewis and Clark National Historical Park, Oregon", the paragraph quoting Job on Fort Clatsop and the one after it on the exhibit.`,
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

:::reveal Who wrote the FilmSound.org page on Jack Foley? ||| Nobody signs it. It is written in the first person, and its writer says it was assembled with help from Foley's former co-workers, friends and daughter.

:::reveal Which primary document does the page quote, and has it been found? ||| A column Foley wrote in 1952 for the Universal International Studio Club News. It has not been located.

:::reveal Which two tools does George Pal remember Foley using besides his own feet? ||| A cane, to make the footsteps of two or three people, and a large cloth kept in his pocket to simulate movement.

:::reveal Why does this lesson not quote the 2016 CineMontage article? ||| It was read only through a summarizing tool, which can paraphrase, so its words could not be checked.

## Sources
- ${FILMSOUND} Locator: the first three paragraphs (the terms, the writer's sources, the 1891 birth); the paragraph quoting the 1952 column and the "Jack continued" paragraph after it (the Fox-Case unit, "Melody Of Love"); the paragraph on the composite track; the paragraphs quoting George Pal and Joe Sikorsky. Unsigned; link only.
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
          // Lesson 19: older than the name
          { prompt: "How does this course render the title Machinerie scénique et bruits de coulisses?", options: ["Scenic painting, costume design and makeup", "Stage machinery and backstage noises", "Theater lighting and stage rigging", "Sound effects for radio and film"], correctIndex: 1, explanation: "The title means stage machinery and backstage noises, which is what the book covers.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What price does the title page of Brachart's 1913 book give?", options: ["10 francs", "100 francs", "1 franc", "Free"], correctIndex: 2, explanation: "Its title page prices it at 'PRIX : 1 FRANC'.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What is most of Brachart's 1913 book about?", options: ["Sound effects, page after page", "Acting technique for melodrama", "Costumes for opera", "Stage machinery, like painted trains"], correctIndex: 3, explanation: "Most of it is machinery: trains painted on flats, a sea of moving cloth, snow from glove-leather clippings. A few pages make sound with objects.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What does lesson 19 say Brachart's stage snow was made from?", options: ["Clippings of glove leather", "Torn newspaper", "Rice poured from a height onto zinc", "Goose feathers"], correctIndex: 0, explanation: "Snow made from clippings of glove leather. Rice on zinc is his hail.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "Whose are the English translations of Brachart's French in this course?", options: ["The University of Toronto's", "The course's own", "The Library of Congress's", "Brachart's own"], correctIndex: 1, explanation: "'The French below is quoted from the scan's text, read through its errors; the translations are ours.'", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What two hoof-makers does Brachart describe?", options: ["Wooden spoons, or a pair of leather gloves", "Two bricks, or two halves of a melon", "Coconut halves, or horseshoe blocks", "Tin cups, or the soles of old leather boots"], correctIndex: 2, explanation: "Two halves of an emptied coconut shell, or, better, two wooden blocks with real horseshoes nailed on.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "Which hoof-maker does Brachart prefer?", options: ["Two halves of an emptied coconut shell", "His bare hands, cupped and beaten on a wooden table", "A pair of wooden spoons", "Wooden blocks with real horseshoes nailed on"], correctIndex: 3, explanation: "'Ou mieux encore avec deux blocs de bois auxquels sont cloués de vrais fers à cheval': or better, wooden blocks with real horseshoes.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "How are Brachart's horseshoe blocks held?", options: ["Strapped to the hands", "Tied to the performer's feet", "Nailed to a board", "Held in the teeth"], correctIndex: 0, explanation: "'qu'on chausse aux mains au moyens de courroies': strapped to the hands.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "On what does Brachart say the hooves are beaten in natural rhythm?", options: ["A sheet of zinc", "Paving stones", "A wooden drum", "A barrel"], correctIndex: 1, explanation: "The hooves 'se martèlent selon la cadence naturelle sur des pavés': on paving stones.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "How does Brachart make the sound of sandy ground?", options: ["A sack of sand dropped on the stage", "A tray of dried peas shaken slowly", "A flat metal box of clay", "A drum filled with gravel"], correctIndex: 2, explanation: "'une caisse métallique rectangulaire et plate, remplie d'une couche égale d'argile': a flat metal box with an even layer of clay.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "How many prop handlers does Brachart say a cavalry charge needs?", options: ["Two", "Twelve", "Six", "Four"], correctIndex: 3, explanation: "'Quatre accessoiristes sont nécessaires pour reproduire une charge de cavalerie.'", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What does Brachart say about learning the rhythm of hooves?", options: ["It cannot be learned overnight", "Anyone can do it on the first try", "It needs a metronome set to 120", "It is the same for every gait"], correctIndex: 0, explanation: "Nobody learns the rhythm overnight; it takes practice to vary it for each gait.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "Which four gaits does Brachart say take practice to vary?", options: ["Walk, amble, canter and a standing halt", "Walk, trot, gallop and full gallop", "Trot, canter, leap and halt", "Slow, medium, fast and stop"], correctIndex: 1, explanation: "'le pas, le trot, le galop et le fond-de-train': walk, trot, gallop and full gallop.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "How does Brachart make hail?", options: ["Lentils spun in a wooden barrel", "Gravel shaken in a wooden box", "Rice poured onto a zinc sheet", "Salt thrown against a window"], correctIndex: 2, explanation: "'Un sac de riz, vidé d'une certaine hauteur sur une plaque de zinc': a bag of rice poured from a height onto zinc.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "How does Brachart rate the likeness of his rice-on-zinc hail?", options: ["Perfect", "Poor", "Identical to real hail", "Quite acceptable"], correctIndex: 3, explanation: "It gives 'un crépitement d'une fort acceptable vraisemblance': a crackle of quite acceptable likeness.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What fills Brachart's rain drum?", options: ["Plenty of dried peas", "Sand mixed with fine gravel", "Rice and beans", "Water"], correctIndex: 0, explanation: "'On garnit l'intérieur du tambour d'une abondante provision de pois secs.'", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What divides the inside of Brachart's rain drum?", options: ["A ring of wooden pegs set in rows", "Slanted sheet-metal vanes", "A coiled spring", "A layer of clay"], correctIndex: 1, explanation: "The drum's inside is divided by slanted sheet-metal vanes, and the peas 'ricochent de l'une à l'autre'.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What covers Brachart's wind-machine cylinder?", options: ["A loose canvas sheet", "Leather from old gloves", "Strips of tin", "Fine metal mesh"], correctIndex: 3, explanation: "'une toile métallique, à fine mailles, fortement tendue': fine, tightly stretched metal mesh.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What rubs the mesh on Brachart's wind machine?", options: ["A metal double-bass string", "A wooden paddle", "A rosined violin bow of horsehair", "A leather strap"], correctIndex: 0, explanation: "'que frotte une corde, également métallique, de contrebasse': a metal double-bass string.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What sound does Brachart say his wind machine imitates?", options: ["Wind roaring across an open plain", "Wind whistling down chimneys", "A gale tearing at a ship's sails", "A breeze in the treetops"], correctIndex: 1, explanation: "'les sifflements prolongés du vent qui s'engouffre dans les cheminées ou passe par les interstices des portes et fenêtres'.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "Why does Brachart say a silk band is a poor alternative on the wind machine?", options: ["It is too quiet to hear", "It catches fire easily", "It wears out too fast", "It sounds like rain"], correctIndex: 2, explanation: "Silk works, 'mais celle-ci s'use avec une rapidité qui ne laisse pas d'être coûteuse': it wears out fast enough to be expensive.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What two elements does Brachart say thunder is made of?", options: ["A bright flash and a loud bang", "A low hiss and a long roar", "A boom and its echo off the hills", "A distant rumble and a crack nearby"], correctIndex: 3, explanation: "'le grondement lointain et l'éclat tombant tout-à-coup dans un lieu voisin'.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "How is Brachart's thunder sheet hung?", options: ["On chains, by two corners", "Flat on the floor", "Hung by a rope", "Inside a wooden frame"], correctIndex: 0, explanation: "A metal sheet hung by its two nearer corners on chains and shaken by a handle.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What does Brachart say happens as the thunder sheet is shaken harder?", options: ["The rumble grows higher and thinner in pitch", "The rumble grows louder and fuller", "The sheet stops sounding", "The rumble turns into a crack"], correctIndex: 1, explanation: "'Plus on secoue la tôle, plus ces grondements deviennent forts et nourris.'", sourceLessonSlug: "older-than-the-name" },
          { prompt: "Why does this course give no dimensions for Brachart's thunder sheet?", options: ["Brachart gives no dimensions", "Any size works", "They are garbled in the scan", "They are copyrighted"], correctIndex: 2, explanation: "The dimensions are garbled in the scan's text and the page image has not been checked, so the course gives none.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "How did Brachart make the thunder crack, which this course shows as history only?", options: ["A gunshot fired backstage", "A drum struck with a mallet", "A plank dropped flat on the floor", "Staves and lead plates, dropped"], correctIndex: 3, explanation: "About ten barrel staves threaded on a rope with as many lead plates, hoisted on a pulley and dropped.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "Why is Brachart's thunder crack never built from this course?", options: ["It uses lead, and it drops a weight", "It is too quiet for a big hall", "It needs four prop handlers", "It sounds nothing like thunder"], correctIndex: 0, explanation: "'Nobody builds that from this course. It uses lead, and it drops a weight.'", sourceLessonSlug: "older-than-the-name" },
          { prompt: "How did Brachart imitate artillery, which this course also shows only as history?", options: ["A cannon fired with blanks", "Scrap iron rolled in a barrow", "Coconut shells beaten on stones", "Rocks dropped down stairs"], correctIndex: 1, explanation: "'en empilant de la vieille ferraille dans une brouette en fer et en faisant rouler celle-ci'.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What did Jacob Job record for a Lewis and Clark exhibit, according to the Park Service article?", options: ["Thunder, rain and wind made by hand", "Interviews with descendants of the expedition", "Muskets, flint, candles, songs and fiddles", "Modern traffic noise near Fort Clatsop"], correctIndex: 2, explanation: "'the firing of muskets, striking of flint for fire making, candle pouring, singing, and playing of instruments such as mouth harps and fiddles'.", sourceLessonSlug: "older-than-the-name" },

          // Lesson 20: writing the cue
          { prompt: "Who wrote the 1928 radio play The Neglected Crop?", options: ["The U.S. Army Signal School", "The Library of Congress staff", "The National Park Service", "The USDA's Radio Service"], correctIndex: 3, explanation: "It was 'Prepared by RADIO SERVICE, UNITED STATES DEPARTMENT OF AGRICULTURE'.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "What does the 1928 play's header say the drama suggests?", options: ["A way to keep our best young farmers on the farm", "A way to sell more radios to farm families across the nation", "A way to grow a bigger wheat crop", "A way to prepare farms for drought"], correctIndex: 0, explanation: "'A Radio Drama in One Act Suggesting a Way to Keep Our Best Young Farmers On the Farm'.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "How are sound effects marked in the 1928 USDA script?", options: ["In capitals in the margin", "In parentheses inside the script", "On a separate cue sheet", "In red ink"], correctIndex: 1, explanation: "The effects are written into the script in parentheses.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "Which cue appears in the 1928 USDA script?", options: ["(Sound of a horse galloping away down the road)", "(Thunder and heavy rain)", "(Sound of knocking as if at door)", "(Music up, then under)"], correctIndex: 2, explanation: "'(Sound of knocking as if at door)' is one of the script's parenthetical cues.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "What does this course say the words 'as if' and 'as of' in the 1928 cues ask for?", options: ["The real object itself, recorded live on location", "A musical note in place of a noise", "Silence until the actor speaks", "The sound of a thing, not the thing itself"], correctIndex: 3, explanation: "'\"As if\" and \"as of\" ask for the sound of a thing, not the thing itself.'", sourceLessonSlug: "writing-the-cue" },
          { prompt: "What do several of the 1928 cues tie each sound to?", options: ["The action in the story", "The time on the studio clock", "A musical key", "A page number"], correctIndex: 0, explanation: "Several tie the sound to the action ('as Bob goes out', 'as she runs to door'), so the effect lands with the moment.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "What does the library's stamp on the 1928 scan warn?", options: ["Not to be broadcast without permission", "Its content may not be current", "For agricultural extension use only", "Property of the U.S. Army"], correctIndex: 1, explanation: "'Historic, archived document Do not assume content reflects current scientific knowledge'.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "What does the 1986 Army course say a two-column script identifies?", options: ["Camera angles and lens choices only", "The budget and the shooting schedule", "Music, effects and talent directions", "The names of the crew and their union"], correctIndex: 2, explanation: "'Music and sound effects are identified as well as directions for talent'.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "What does the 1989 Army course say music must do?", options: ["Play under every scene without a break", "Come only from Army-owned recordings", "Be louder than the dialogue", "Support the message, not distract"], correctIndex: 3, explanation: "Music 'must enhance or support the message, not distract from it'.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "Under which guidelines does the 1989 Army course place sound effects?", options: ["The same guidelines as music and lyrics", "The guidelines for camera movement", "Their own separate and much stricter set of rules", "The rules for live news"], correctIndex: 0, explanation: "'The use of sound effects falls under the same guidelines as music and lyrics.'", sourceLessonSlug: "writing-the-cue" },
          { prompt: "What kind of rule does this course say the 1989 Army rule on sound effects is?", options: ["About clearing the rights to a sound", "About serving the message", "About loudness limits on air", "About which union does the work"], correctIndex: 1, explanation: "'That is a rule about serving the message, not about rights.' Lesson 24 covers rights.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "What noise was the 1942 handbook's one-sided copy meant to keep off the air?", options: ["Typewriter keys", "Coughing", "Turning pages", "Studio doors"], correctIndex: 2, explanation: "Type on one side only, 'because the sound of turning pages might be picked up by the microphone'.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "What does the 1942 handbook say the engineer will want before air time?", options: ["A copy of every script in triplicate", "A signed release from each speaker", "Payment for studio time", "A chance to audition your voices"], correctIndex: 3, explanation: "'The engineer will want a chance to audition your voices, before air time'.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "Why does the 1942 handbook say the engineer auditions your voices?", options: ["To adjust your position before the microphone", "To decide which of you may go on the air", "To record a backup copy", "To set the station's power"], correctIndex: 0, explanation: "'so he can adjust your position before the microphone'.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "In lesson 20's 'Try it' exercise, what order does a cue in the 1928 style take?", options: ["The action, then the music", "Sound first, then action", "The time first, then the sound", "The actor's name, then the line"], correctIndex: 1, explanation: "Write the sound, then the action in the story that causes it.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "In lesson 20's exercise, what do you do with a cue that distracts from the message?", options: ["Make it louder", "Move it earlier", "Cut it from the script", "Keep it for later"], correctIndex: 2, explanation: "Test each cue against the 1989 rule: 'Cut any that distract.'", sourceLessonSlug: "writing-the-cue" },
          { prompt: "In what year was the handbook Tips on Radio Broadcasting issued?", options: ["1928", "1913", "1987", "1942"], correctIndex: 3, explanation: "Tips on Radio Broadcasting is the 1942 farm-radio handbook of the Agricultural Adjustment Administration.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "How many columns does the 1986 Army course's television script have?", options: ["Two", "One", "Three", "Four"], correctIndex: 0, explanation: "It describes the two-column script, in which music, sound effects and talent directions are identified.", sourceLessonSlug: "writing-the-cue" },

          // Lesson 21: the Foley story, as an open record
          { prompt: "What does the FilmSound.org page's writer say they did not realize for some years?", options: ["That foley work was always done after filming ended", "That the term foley was the name of a man", "That foley studios used real props", "That foley was a union job"], correctIndex: 1, explanation: "'without fully realizing, for some years, that the term foley was the name of a man.'", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "Which of these terms does the FilmSound page list as built on the name Foley?", options: ["Foley mixer", "Foley camera", "Foley walker", "Foley boom"], correctIndex: 2, explanation: "The page lists 'foley studio, foley sheets, foley footsteps, foley reels, foley walker, foley editor'.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "Who signs the FilmSound.org page on Jack Foley?", options: ["Jack Foley's daughter", "George Pal", "The Motion Picture Editors Guild", "Nobody; it is unsigned"], correctIndex: 3, explanation: "The page is written in the first person and signed by nobody.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "Whose help does the FilmSound page's writer say the account drew on?", options: ["His co-workers, friends and daughter", "Universal's studio archive and payroll", "The Library of Congress film collection", "Foley's own diaries"], correctIndex: 0, explanation: "It was put together 'through the help of his former co-workers, friends, and his daughter'.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "What birth year and place does the FilmSound page give for Jack Foley?", options: ["1913, Paris", "1891, Yorkville, N.Y.", "1928, Hollywood", "1952, Universal City"], correctIndex: 1, explanation: "'Jack was born in Yorkville, N.Y. in 1891'. The course treats it as reported, not verified.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "What status does this course give the FilmSound page's birth date for Foley?", options: ["Verified from a birth record", "Verified from the 1952 column", "Reported, not verified", "Disproved by CineMontage"], correctIndex: 2, explanation: "'Every date and story about Jack Foley in this lesson is, for now, reported and not verified.'", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "Where did Foley's 1952 column appear, according to the FilmSound page?", options: ["The Hollywood trade paper Variety", "The New York Times Sunday film pages", "American Cinematographer, the ASC's magazine", "The Universal International Studio Club News"], correctIndex: 3, explanation: "The page quotes a column Foley wrote in 1952 for the Universal International Studio Club News.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "In the 1952 column the FilmSound page quotes, which film was 'a SILENT picture' at Universal?", options: ["Showboat", "The Jazz Singer", "Melody Of Love", "Spartacus"], correctIndex: 0, explanation: "'the great American musical, 'Showboat', a SILENT picture.'", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "In the 1952 column the FilmSound page quotes, who had 'just come up with a sound picture'?", options: ["The boys on the U ranch", "The Warner kids on the neighboring ranch", "Universal's own sound department", "Fox's newsreel crew"], correctIndex: 1, explanation: "'The Warner kids on the neighboring ranch had just come up with a sound picture 'The Jazz Singer''.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "What does the FilmSound page admit about Foley's 1952 article?", options: ["It was written by someone else", "It was never published", "Its sequence of events was unclear", "It names every film he worked on"], correctIndex: 2, explanation: "'Jack's article was not so clear as to actual sequence of events'.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "What does the FilmSound page say was added to the silent Showboat?", options: ["A dialogue track recorded on set", "Color tinting of every reel", "A spoken narration by Foley", "A composite music and effects track"], correctIndex: 3, explanation: "'evidently a composite music and effects track was then added to the hitherto silent \"Showboat\".'", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "Which film does the FilmSound page say the studio first spent three days and nights making?", options: ["Melody Of Love", "Showboat", "The Jazz Singer", "Spartacus"], correctIndex: 0, explanation: "'the next three days and nights making \"Melody Of Love...\"' on a borrowed Fox-Case unit.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "On what does the FilmSound page say the studio made Melody Of Love?", options: ["A rented radio station studio in town", "A borrowed Fox-Case sound unit", "Its own brand-new sound stage", "A truck lent by the Army"], correctIndex: 1, explanation: "The page says the studio used a borrowed Fox-Case sound unit.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "Why does this course say even the FilmSound page's own sequence is unsettled?", options: ["It gives two different birth years for Foley", "It says the column was written in 1929", "It names two different first films", "It contradicts the Library of Congress"], correctIndex: 2, explanation: "It calls the Showboat session the first, and also says the studio first spent three days and nights on Melody Of Love.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "What does George Pal recall about Foley's technique for a reel?", options: ["He recorded each effect on a separate day", "He let actors make their own effects", "He used only library recordings", "He recorded a whole reel's effects at once"], correctIndex: 3, explanation: "'Jack's technique was to record all the effects for a reel at one time'.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "What does George Pal say Foley used a cane for?", options: ["Footsteps of two to three people", "To tap out the tempo for the orchestra", "To point at the screen during takes", "To test the floor for loose boards"], correctIndex: 0, explanation: "'With that cane, he could make the footsteps of two to three people.'", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "What did Foley keep in his pocket to simulate movement, according to George Pal?", options: ["A set of keys", "A large cloth", "A small bell", "A leather glove"], correctIndex: 1, explanation: "'He kept a large cloth in his pocket which could be used to simulate movement.'", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "What does Joe Sikorsky remember Foley emphasizing?", options: ["You must never watch the picture", "Every effect must come from the studio's library", "You have to act the scene, as the actors did", "Footsteps should all sound the same"], correctIndex: 2, explanation: "'Jack emphasized you have to act the scene... you have to be the actors and get into the spirit of the story'.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "How does lesson 21 classify the colleagues' memories of Foley's technique?", options: ["Primary documents from Universal's archive", "Sworn testimony from a court case", "Entries in Foley's own logbook", "Recollections, not documents"], correctIndex: 3, explanation: "'These are recollections, reported on an unsigned page. They describe a method worth trying. They are not documents.'", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "Why does lesson 21 leave out the FilmSound page's anecdotes about particular films?", options: ["Nothing behind them has been found", "They are too long to quote", "They are copyrighted by a film studio", "They are about other artists"], correctIndex: 0, explanation: "'This course leaves them out, because nothing behind them has been found.'", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "Which searches does lesson 21 say turned up nothing relevant on Foley?", options: ["Searches of Universal's payroll", "Searches of the Library of Congress", "Searches of the Park Service", "Searches of the Army's archive"], correctIndex: 1, explanation: "'Searches of the Library of Congress for Foley material found nothing relevant'.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "Why does lesson 21 neither quote nor rely on the 2016 CineMontage article?", options: ["It is behind a union paywall", "It contradicts the FilmSound page", "It was read only in summary", "It was published after Foley died"], correctIndex: 2, explanation: "It could be read only through a tool that summarizes web pages and can paraphrase them, so its words could not be checked.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "What does lesson 21 say to do when a source you rely on is unsigned?", options: ["Guess the likely author and name them", "Credit it to whoever runs the site", "Treat it as verified once it is quoted", "Say so, whenever you tell the story"], correctIndex: 3, explanation: "'And when a source is unsigned, say so, as this lesson has.' Tell the name's story with its sources showing.", sourceLessonSlug: "the-foley-story-open-record" },

          // Lesson 22: made against real
          { prompt: "What did Brachart call sounding thunder before the lightning has flashed?", options: ["Absolutely irrational", "Perfectly acceptable on stage", "A matter of taste", "Required by custom"], correctIndex: 0, explanation: "'Faire entendre le tonnerre avant d'avoir fait briller l'éclair est absolument irrationnel.'", sourceLessonSlug: "made-against-real" },
          { prompt: "What does Brachart say an intelligent stage manager must study and observe closely?", options: ["The audience's reactions", "Natural phenomena", "Other theaters' effects", "The price of props"], correctIndex: 1, explanation: "'l'étude et l'observation des phénomènes naturels doivent faire l'objet des soins les plus attentifs d'un régisseur intelligent.'", sourceLessonSlug: "made-against-real" },
          { prompt: "What rule does lesson 22 draw from Brachart's thunder-before-lightning remark?", options: ["Always play thunder before lightning", "Never imitate natural sounds on stage", "Listen to the world before you imitate it", "Use recordings instead of props"], correctIndex: 2, explanation: "'The rule is older than any recording in this course: listen to the world before you imitate it.'", sourceLessonSlug: "made-against-real" },
          { prompt: "Which Park Service clips does lesson 22 set made sounds against?", options: ["The stream clip and the ocean surf clip", "The cannon clip and the musket clip", "The helicopter clip and the jet clip", "The thunder clip and the rain clip"], correctIndex: 3, explanation: "The Park Service's thunder clip and rain clip, both public domain, with Yellowstone's 'Thunder'.", sourceLessonSlug: "made-against-real" },
          { prompt: "Which Yellowstone index entry does lesson 22 add to its list of real things?", options: ["Thunder", "Mud Pots", "Old Faithful Geyser", "Snowmobile"], correctIndex: 0, explanation: "Lesson 22 lists the NPS thunder and rain clips 'and Yellowstone's \"Thunder\"'.", sourceLessonSlug: "made-against-real" },
          { prompt: "What French phrase does Brachart use for the likeness of his rice-on-zinc hail?", options: ["Absolument irrationnel", "Une fort acceptable vraisemblance", "Assez bien", "Le clapotement d'une forte averse"], correctIndex: 1, explanation: "'une fort acceptable vraisemblance', a quite acceptable likeness. 'Assez bien' is his rating of the pea drum.", sourceLessonSlug: "made-against-real" },
          { prompt: "How well does Brachart say his rain drum imitates a downpour?", options: ["Perfectly, beyond any doubt", "Badly, as a last resort", "Fairly well, 'assez bien'", "Exactly like real rain"], correctIndex: 2, explanation: "The pea drum imitates a downpour 'assez bien', fairly well: a likeness, not the real thing.", sourceLessonSlug: "made-against-real" },
          { prompt: "What standard does lesson 22 draw from how Brachart rated his own effects?", options: ["Claim identity, not likeness", "Claim nothing at all", "Claim what sells tickets", "Claim likeness, not identity"], correctIndex: 3, explanation: "'The man who wrote the recipes claimed likeness, not identity. Hold your own made sounds to the same honest standard.'", sourceLessonSlug: "made-against-real" },
          { prompt: "What is step 1 of lesson 22's method?", options: ["Listen to the real thing first", "Build the thunder sheet from Brachart's notes", "Record your made sound with the limiter on", "Set the limiter on"], correctIndex: 0, explanation: "Step 1: listen to the real recording on headphones and make a list, as in lesson 3.", sourceLessonSlug: "made-against-real" },
          { prompt: "What is step 2 of lesson 22's method?", options: ["Pour rice on a zinc sheet", "Read its spectrogram", "Write out a release form", "Turn on automatic gain"], correctIndex: 1, explanation: "Step 2: read the real recording's spectrogram, as in lesson 2.", sourceLessonSlug: "made-against-real" },
          { prompt: "In step 3 of lesson 22's method, how is your made sound recorded?", options: ["Automatic gain on, limiter on, low cut on", "Any phone app left at its default settings", "Limiter and low cut off, manual level", "A broadcast chain with a 1000 Hz tone"], correctIndex: 2, explanation: "Record it with the chain from lesson 8: limiter off, low cut off, level set by hand.", sourceLessonSlug: "made-against-real" },
          { prompt: "In step 4 of lesson 22's method, how do you compare your sound with the real one?", options: ["By loudness alone, read on a sound level meter", "By asking an audience to vote", "By file size", "By ear and by spectrogram, side by side"], correctIndex: 3, explanation: "Set the two side by side, by ear and by spectrogram.", sourceLessonSlug: "made-against-real" },
          { prompt: "In step 4 of lesson 22's method, what do you write down?", options: ["What your imitation gets wrong", "What your imitation gets right only", "The price of your materials", "The time of day"], correctIndex: 0, explanation: "'write down what your imitation gets wrong.'", sourceLessonSlug: "made-against-real" },
          { prompt: "What is step 5 of lesson 22's method?", options: ["Publish the made sound", "Change one thing and record again", "Delete the real recording", "Change everything at once and start over"], correctIndex: 1, explanation: "'Change one thing and record again.'", sourceLessonSlug: "made-against-real" },
          { prompt: "Why does lesson 22 give no building instructions yet?", options: ["Brachart gives no details", "The devices are illegal", "No safety review yet", "Nobody makes sounds by hand now"], correctIndex: 2, explanation: "No building instructions are given until the safety reviewer named at the top has read them.", sourceLessonSlug: "made-against-real" },
          { prompt: "What hazards does lesson 22 name in Brachart's thunder sheet, rain drum and wind machine?", options: ["Electric shock from the motor, and fire", "Loud noise and dust", "Poisonous paint", "Edges, weight or moving parts"], correctIndex: 3, explanation: "'Each has edges, weight or moving parts'.", sourceLessonSlug: "made-against-real" },
          { prompt: "Which of Brachart's devices are never built from this course at all?", options: ["The thunder crack and the artillery", "The hooves and the hail", "The rain drum and the wind machine", "The clay box and coconut shells"], correctIndex: 0, explanation: "'Brachart's thunder crack and artillery are never built from this course at all.'", sourceLessonSlug: "made-against-real" },
          { prompt: "Until build lists are reviewed, what does lesson 22 have you do?", options: ["Build them anyway, carefully", "Listen, read, and describe in words", "Skip the lesson entirely", "Use Freesound effects instead"], correctIndex: 1, explanation: "'work steps 1 and 2 on the clips, and write down in words what a made version would have to get right.'", sourceLessonSlug: "made-against-real" },
          { prompt: "Who must read lesson 22 before any build list is added?", options: ["A licensing reviewer", "A theater sound designer", "A lawyer", "A safety reviewer"], correctIndex: 3, explanation: "The QR marker names a safety reviewer, before any build list for a thunder sheet, rain drum or wind machine is added.", sourceLessonSlug: "made-against-real" },
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
      body: `${QR("a lawyer or rights-clearance reviewer, to confirm that the release passages are framed correctly and that nothing here reads as consent law; any consent law added later needs that reviewer or a fetched statute for each state named")}

> **Before release:** needs BAM's decision (brief question 6): whether this lesson teaches the Library of Congress release form, or links to a release lesson added to *Rights, Permissions and Clearances Research*, as the craft-course boundary table asks.

**The floor.** The Library of Congress fieldwork guide puts the ethic plainly: "Since our interviewees are giving us their time and trust, it's also important that we be honest and truthful with them. For these reasons, you shouldn't record anyone without their knowledge, do research under false pretenses, or lie to the community you're studying. You shouldn't use their voices or images without permission. You don't want to use the information they give you in a way they don't approve of, or publish it in ways that will harm or embarrass them."

It notes that universities treat this as regulated research: "Interviewees are often considered "human subjects," just like people in medical experiments, and universities are very careful about regulating human subject research."

**A release, in writing.** "If you plan to use the information from your interviews in publications, podcasts, films, or online presentations (and it's safest to assume you will at some point), it's important to obtain a statement from both the interviewer and interviewee granting permission." The guide offers its own form, under the page heading "Design Release Forms (or Just Use Ours!)". Its table of contents words that heading differently; quote the page. Three rules from that page:
- The form is a starting point: "if you already know you may want to use the interview in a commercial context, you might need to design your own form by adding language to ours."
- The person can say no: "Remember, after the interview, interviewees always have the right to refuse to sign a release form if they have reservations about what was discussed."
- The paper outlasts your word: "If the collection and its release forms go to another institution or individual in the future, they're only bound by what it says on the release, not by a promise you made personally."

**Read the form itself.** The sample release in the guide's appendix says: "By giving permission, I understand that I do not give up any copyright or performance rights that I may hold." It grants use of "my name, video or photographic image or likeness, statements, performance, and voice reproduction, or other sound effects without further approval on my part." It was written for recordings deposited in an archive, not for commercial use; the guide itself says commercial use may need added language. A recording for a commercial production, on a set or in a theater, may need a release written for that use, and no source read for this course supplies one.

**What this lesson does not tell you: the law.** This course states no law on recording people. Whether one person's consent is enough or everyone's is needed, what a location or talent release must contain, and what union rules apply on a set were not researched for it. The guide's ethic is the floor, not the law. For the law of recording in public, the catalog's lesson is *Civic Documentation: Recording What Happened in Public*, "9 · What the law protects, and what it does not". For rights in what you record, see *Rights, Permissions and Clearances Research*, "5 · The trap: when the rights field is about the wrong object".

**Places as well as people.** From lesson 12: the guide would turn location data off for "a sacred site whose location the community doesn't want to reveal". The same respect extends to where you recorded.

:::reveal What are the first two things the Library of Congress guide says you shouldn't do? ||| Record anyone without their knowledge, or do research under false pretenses.

:::reveal What does the guide say about using its release form commercially? ||| You "might need to design your own form by adding language to ours."

:::reveal After the interview, can a person refuse to sign the release? ||| Yes: "interviewees always have the right to refuse to sign a release form if they have reservations about what was discussed."

:::reveal Why does a promise you made personally not protect an interviewee later? ||| Because a later holder of the collection is "only bound by what it says on the release, not by a promise you made personally."

## Sources
- ${AFC} Locator: pp. 10 to 11 (PDF pp. 16 to 17), the ethics passage; p. 11 (PDF p. 17), human subjects; p. 16 (PDF p. 22), release forms and location data; table of contents, p. iii (PDF p. 4); appendix, p. 40 (PDF p. 46), the sample release. ${AFC_PAGES}`,
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
- ${NPS_RAIN} Locator: credit line.
- ${NPS_THUNDER} Locator: credit line.
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
          // Lesson 23: consent before you press record
          { prompt: "According to the Library of Congress guide, why should fieldworkers be honest and truthful with interviewees?", options: ["They are giving their time and trust", "Federal law requires it of all fieldworkers", "Universities will not publish dishonest work", "It makes the audio easier to edit"], correctIndex: 0, explanation: "'Since our interviewees are giving us their time and trust, it's also important that we be honest and truthful with them.'", sourceLessonSlug: "consent-before-record" },
          { prompt: "Which of these does the Library of Congress guide say you shouldn't do?", options: ["Record anyone in a public place", "Record anyone without their knowledge", "Record outdoors without a permit", "Record in WAV format"], correctIndex: 1, explanation: "'you shouldn't record anyone without their knowledge, do research under false pretenses, or lie to the community you're studying.'", sourceLessonSlug: "consent-before-record" },
          { prompt: "What does the Library of Congress guide say about using people's voices or images?", options: ["You may use them once they are recorded", "You may use them for any noncommercial work", "You shouldn't use them without permission", "You must pay a set fee for each use"], correctIndex: 2, explanation: "'You shouldn't use their voices or images without permission.'", sourceLessonSlug: "consent-before-record" },
          { prompt: "Which use of what interviewees tell you does the Library of Congress guide warn against?", options: ["Transcribing it word for word for the archive", "Storing it in an archive for later study", "Summarizing it in a written log", "Publishing it to harm or embarrass them"], correctIndex: 3, explanation: "Don't 'publish it in ways that will harm or embarrass them.'", sourceLessonSlug: "consent-before-record" },
          { prompt: "How does the Library of Congress guide say universities often consider interviewees?", options: ["As 'human subjects' in regulated research", "As co-authors of every publication", "As employees of the university", "As members of the public with no special status"], correctIndex: 0, explanation: "'Interviewees are often considered \"human subjects,\" just like people in medical experiments'.", sourceLessonSlug: "consent-before-record" },
          { prompt: "When does the Library of Congress guide say you should obtain a release statement?", options: ["Only if the interview will be sold for profit", "If you plan to use the interviews publicly", "If the interviewee is a public figure", "Once an interview runs past an hour"], correctIndex: 1, explanation: "'If you plan to use the information from your interviews in publications, podcasts, films, or online presentations'.", sourceLessonSlug: "consent-before-record" },
          { prompt: "What does the Library of Congress guide say it is safest to assume about using your interviews?", options: ["That you will never use them", "That they belong to the university", "That you will use them at some point", "That they are public domain"], correctIndex: 2, explanation: "'(and it's safest to assume you will at some point)'.", sourceLessonSlug: "consent-before-record" },
          { prompt: "From whom does the Library of Congress guide say a statement granting permission should come?", options: ["Only the interviewee, signed in front of a witness", "Only the archive", "The interviewee's employer", "Both the interviewer and the interviewee"], correctIndex: 3, explanation: "'obtain a statement from both the interviewer and interviewee granting permission.'", sourceLessonSlug: "consent-before-record" },
          { prompt: "What page heading does the Library of Congress guide give its release-form section?", options: ["Design Release Forms (or Just Use Ours!)", "Design Release Forms (or Just Steal Ours!)", "Release Forms (and Why You Need Them)", "Design Your Own Release Forms"], correctIndex: 0, explanation: "The page heading reads 'Design Release Forms (or Just Use Ours!)'. The table of contents words it differently.", sourceLessonSlug: "consent-before-record" },
          { prompt: "Why does lesson 23 tell you to quote the Library of Congress guide's page heading rather than its table of contents?", options: ["The table of contents is missing from the PDF", "The table of contents words the heading differently", "The page heading is in larger type", "The table of contents is copyrighted"], correctIndex: 1, explanation: "'Its table of contents words that heading differently; quote the page.'", sourceLessonSlug: "consent-before-record" },
          { prompt: "What does the Library of Congress guide say you might need if you plan commercial use of an interview?", options: ["Nothing beyond the guide's own form", "A permit from the Library of Congress", "Your own form, with added language", "A second interview on camera"], correctIndex: 2, explanation: "'you might need to design your own form by adding language to ours.'", sourceLessonSlug: "consent-before-record" },
          { prompt: "When does the Library of Congress guide say interviewees always have the right to refuse to sign a release?", options: ["While the recorder is still running", "Only before the recording starts", "Only if they are under 18", "After the interview is over"], correctIndex: 3, explanation: "'after the interview, interviewees always have the right to refuse to sign a release form if they have reservations about what was discussed.'", sourceLessonSlug: "consent-before-record" },
          { prompt: "If a collection moves to another institution, what are later holders bound by, according to the Library of Congress guide?", options: ["Only what the release says", "Every promise the fieldworker made", "The fieldworker's private notes", "Whatever the new holder decides"], correctIndex: 0, explanation: "'they're only bound by what it says on the release, not by a promise you made personally.'", sourceLessonSlug: "consent-before-record" },
          { prompt: "What does the Library of Congress guide's sample release say the person giving permission keeps?", options: ["Only the right to be paid", "Copyright and performance rights", "Nothing; all rights pass to the archive", "The right to edit the recording"], correctIndex: 1, explanation: "'I understand that I do not give up any copyright or performance rights that I may hold.'", sourceLessonSlug: "consent-before-record" },
          { prompt: "Which of these does the Library of Congress guide's sample release let the recipient use without further approval?", options: ["Any copyright they hold", "Their performance rights", "Voice and sound effects", "The person's home address"], correctIndex: 2, explanation: "It grants use of 'my name, video or photographic image or likeness, statements, performance, and voice reproduction, or other sound effects without further approval on my part.'", sourceLessonSlug: "consent-before-record" },
          { prompt: "For what kind of use was the Library of Congress guide's sample release written?", options: ["Commercial film and television production", "Advertising and promotion", "Broadcast news", "Recordings deposited in an archive"], correctIndex: 3, explanation: "It was written for recordings deposited in an archive, not for commercial use.", sourceLessonSlug: "consent-before-record" },
          { prompt: "What does lesson 23 say a recording for a commercial production may need?", options: ["A release written for that specific use", "Only the guide's sample release, unchanged", "No release at all, if it is in a theater", "A verbal promise from the performer"], correctIndex: 0, explanation: "It may need a release written for that use, and no source read for this course supplies one.", sourceLessonSlug: "consent-before-record" },
          { prompt: "What does lesson 23 say about the law on recording people?", options: ["One person's consent is always enough", "It states none, and points elsewhere", "Everyone's consent is always required", "The law is the same in every state"], correctIndex: 1, explanation: "'This course states no law on recording people.' The guide's ethic is the floor, not the law.", sourceLessonSlug: "consent-before-record" },
          { prompt: "Which of these does lesson 23 say was not researched for this course?", options: ["What the guide's release form says", "Whether interviewees may refuse to sign", "What union rules apply on a set", "What the guide calls its release section"], correctIndex: 2, explanation: "Whether one person's consent is enough, what a location or talent release must contain, and what union rules apply on a set were not researched.", sourceLessonSlug: "consent-before-record" },
          { prompt: "Which catalog lesson does lesson 23 name for the law of recording in public?", options: ["Oral history, lesson 6, on recording and metadata", "Mockumentary, lesson 2", "Voice Acting, lesson 15", "Civic Documentation, lesson 9"], correctIndex: 3, explanation: "Civic Documentation: Recording What Happened in Public, '9 · What the law protects, and what it does not'.", sourceLessonSlug: "consent-before-record" },
          { prompt: "Which catalog lesson does lesson 23 name for rights in what you record?", options: ["Rights, Permissions and Clearances Research, lesson 5", "Rights, Permissions and Clearances Research, lesson 3", "Break Into Sports & Media Broadcasting, lesson 15", "Rights, Permissions and Clearances Research, lesson 10"], correctIndex: 0, explanation: "Rights, Permissions and Clearances Research, '5 · The trap: when the rights field is about the wrong object'.", sourceLessonSlug: "consent-before-record" },
          { prompt: "What does lesson 23 say the Library of Congress guide's respect for a sacred site's location extends to?", options: ["Who you recorded", "Where you recorded", "How long you recorded", "What equipment you used"], correctIndex: 1, explanation: "'The same respect extends to where you recorded.'", sourceLessonSlug: "consent-before-record" },
          { prompt: "Who must review lesson 23 before release, according to its marker?", options: ["An occupational-noise or hearing professional", "A theater sound designer", "A lawyer or rights-clearance reviewer", "A safety reviewer for build lists"], correctIndex: 2, explanation: "Its QR marker names a lawyer or rights-clearance reviewer, to confirm nothing reads as consent law.", sourceLessonSlug: "consent-before-record" },

          // Lesson 24: public domain, CC0, BY and BY-NC
          { prompt: "Which law does the Park Service disclaimer cite on works of the U.S. Government?", options: ["29 C.F.R. § 1910.95", "17 U.S.C. § 512", "16 U.S.C. § 1", "17 U.S.C. §§ 101, 105"], correctIndex: 3, explanation: "'(See, 17 U.S.C. §§ 101, 105)'.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "How does the Park Service disclaimer describe NPS-created material on its site?", options: ["Generally public domain, unless otherwise indicated", "Copyrighted by the Park Service and licensed for reuse", "Free for noncommercial use only, with credit", "Owned by the Interior Department, all rights reserved"], correctIndex: 0, explanation: "'material created by the National Park Service and presented on this website, unless otherwise indicated, is generally considered in the public domain.'", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "Which two phrases in the Park Service disclaimer keep 'public domain' from covering everything on its site?", options: ["'all rights reserved' and 'licensed'", "'unless otherwise indicated' and 'generally'", "'for personal use only' and 'with written credit'", "'noncommercial' and 'attribution'"], correctIndex: 1, explanation: "'Two phrases in that sentence do real work: \"unless otherwise indicated\" and \"generally\".'", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "What does the Park Service disclaimer say about content on the Park Service site that the Park Service did not create?", options: ["It is all in the public domain anyway", "It is removed within a year", "Some has third-party rights", "It is licensed under CC0"], correctIndex: 2, explanation: "'Some content is protected by third party rights'.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "What does the Park Service disclaimer say about the NPS Arrowhead?", options: ["It may be used freely with credit", "It is in the public domain", "It may be used on noncommercial pages only", "Not without written permission"], correctIndex: 3, explanation: "The Arrowhead 'may not be used without prior written permission'.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "What does lesson 24 say to check on each Park Service clip before reuse?", options: ["Its credit line", "Its file size", "Its sample rate", "Its length"], correctIndex: 0, explanation: "'So check each item.' The stream, rain and thunder clip pages each carry 'Credit / Author: NPS'.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "How does the Park Service article on Jacob Job credit its photos?", options: ["'Photo by CSU Listening Lab'", "'courtesy of Jacob Job'", "'Public Domain'", "'NPS Photo by Jacob Job'"], correctIndex: 1, explanation: "The article credits its photos 'courtesy of Jacob Job'.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "Why are Jacob Job's recordings not treated as public domain in this course?", options: ["They are too short", "They were recorded abroad", "They are not shown to be federal work", "He sold the rights to them to Penn State"], correctIndex: 2, explanation: "His recordings are not shown to be federal work, so the Park Service page does not make them public domain.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "What does the Park Service disclaimer say about citing it as a source?", options: ["A citation is required by law", "A fee is due for every use", "Citation is forbidden", "It is appreciated"], correctIndex: 3, explanation: "'a citation or acknowledgement of the National Park Service as the source is appreciated'.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "Where does Yellowstone ask you to credit the 'National Park Service'?", options: ["Where appropriate", "In the file's metadata", "In every file name", "Only in print"], correctIndex: 0, explanation: "'please credit the \"National Park Service \" where appropriate.'", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "What notice does the Park Service disclaimer suggest for commercial republication?", options: ["'All rights reserved by the National Park Service'", "'No protection is claimed in original U.S. Government works'", "'Used under a written license from the Department of the Interior'", "'Copyright the United States of America'"], correctIndex: 1, explanation: "'No protection is claimed in original U.S. Government works' (or 'No claim to original U.S. Government works').", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "What does Freesound say it aims to create?", options: ["A paid stock-music store for film studios", "A national archive of federal recordings", "A huge collaborative database of sounds", "A social network for sound engineers"], correctIndex: 2, explanation: "'Freesound aims to create a huge collaborative database of audio snippets, samples, recordings, bleeps, ... released under Creative Commons licenses that allow their reuse.'", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "What did Freesound introduce as of July 2026?", options: ["A paid subscription tier", "A ban on all commercial use", "A new CC0-only policy", "A Generative AI preferences panel"], correctIndex: 3, explanation: "'as of July 2026 Freesound has introduced a new Generative AI preferences panel', on top of the Creative Commons license.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "Which of these is one of Freesound's three current licenses?", options: ["Attribution noncommercial (by-nc)", "Sampling plus (sampling+)", "Attribution share-alike (by-sa)", "Attribution no-derivatives (by-nd)"], correctIndex: 0, explanation: "The three are 'zero (cc0)', 'attribution (by)' and 'attribution noncommercial (by-nc)'. Sampling plus is the old fourth.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "Which point from Rights, Permissions and Clearances Research lesson 5 does lesson 24 quote?", options: ["Every recording becomes public domain after exactly 50 years", "The composition and the recording are separate rights", "A license is needed only for music, not effects", "Sound effects cannot be copyrighted"], correctIndex: 1, explanation: "'The composition and the recording are separate rights'.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "How does Freesound's own summary of its licenses open?", options: ["'Every sound here is free for any use'", "'Read the full license before downloading'", "'We aren't lawyers so this isn't legal advice'", "'All sounds are public domain'"], correctIndex: 2, explanation: "Its summary opens with 'We aren't lawyers so this isn't legal advice'.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "According to Freesound's summary, what can't you do with a CC0 sound?", options: ["Sell it", "Use it in a commercial film", "Change it", "Claim you are the author"], correctIndex: 3, explanation: "'You could even sell the sound, ... but you can't claim you are the author!'", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "According to Freesound's summary, what should you always do with an attribution (by) sound?", options: ["Credit the creators", "Pay the creator a fee", "Ask permission first", "Keep it unedited"], correctIndex: 0, explanation: "'For \"attribution\" you should always mention the original creators of the sounds when you use them.'", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "According to Freesound's summary, what can't you do with a noncommercial sound?", options: ["Use it at all", "Earn money with the work you create", "Edit it", "Credit its creator in the final work"], correctIndex: 1, explanation: "'\"Noncommercial\" works like attribution, but you can't earn any money with the piece of work you create!'", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "What does Freesound's attribution template include?", options: ["Only the uploader's real name", "The date of download and your IP address", "Name, user, link and license", "A copyright symbol and a year"], correctIndex: 2, explanation: "'\"sound1\" by user1 ( http://freesound.org/s/soundID/ ) licensed under CCBYNC 4.0'.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "Under Freesound's remix rules, may a BY-NC sound be re-released as BY?", options: ["Yes", "Only with a fee", "Only after a year", "No"], correctIndex: 3, explanation: "A BY-NC sound may not be re-released as BY, and neither BY nor BY-NC may be re-released as CC0.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "Under Freesound's remix rules, may a BY sound be re-released as CC0?", options: ["No; neither BY nor BY-NC may become CC0", "Yes, once you have credited the creator", "Yes, if your remix is long enough", "Only if Freesound approves it"], correctIndex: 0, explanation: "A sound under BY or BY-NC may not be re-released as CC0.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "What does Freesound say about users uploading copyrighted material?", options: ["It is impossible, because staff check every single upload", "Some may be (un)knowingly uploading illegal content", "It is allowed if the uploader credits the owner", "It happens only with legacy licenses"], correctIndex: 1, explanation: "'there might be cases where the users of our site are (un)knowingly uploading illegal content.'", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "What do Freesound's terms have the uploader warrant?", options: ["That the sound is under 30 seconds long", "That they will never delete the sound", "That they hold the needed rights", "That they live in the European Union"], correctIndex: 2, explanation: "The uploader warrants 'that he/she has all necessary rights in the sound and metadata to grant such license'.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "Why does lesson 24 say an uploader's warranty is not enough?", options: ["Warranties expire automatically after one year", "Freesound does not ask for one", "Only lawyers may give warranties", "A warranty is a promise, not proof"], correctIndex: 3, explanation: "'A warranty is the uploader's promise, not proof.'", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "What does Freesound's FAQ warn can happen when a later commercial song uses a raw Freesound effect?", options: ["A Content ID claim against your video", "Your Freesound account is closed", "The sound becomes public domain", "The song's owner must pay you"], correctIndex: 0, explanation: "Sound effects are 'being used \"raw\" in songs', so a later commercial song can bring a Content ID claim against your video.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "What does Freesound advise when disputing a Content ID claim over a Freesound effect?", options: ["Delete your video and upload it again", "Show the upload came first", "Pay the claimant and move on", "Change the sound's license to CC0"], correctIndex: 1, explanation: "Dispute with evidence 'that the Freesound upload predates the copyrighted work'.", sourceLessonSlug: "licenses-for-sounds" },
          { prompt: "Why could this course not read xeno-canto's terms?", options: ["The terms are in Latin", "The site charges for access", "The site blocked the request", "The terms were withdrawn in 2020"], correctIndex: 2, explanation: "'This course could not read xeno-canto's terms, because the site blocked the request'.", sourceLessonSlug: "licenses-for-sounds" },
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

**The numbers, as O\\*NET shows them.** "Median wages (2025) $35.16 hourly, $73,130 annual"; "Employment (2025) 15,000 employees"; "Projected growth (2025-2035) Decline (-1% or lower)"; "Projected job openings (2025-2035) 1,000". These are national figures for one occupation, read on O\\*NET when the site showed "Site updated October 6, 2026". Check the live page before you rely on any of them.

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
          // Lesson 25: who does sound work
          { prompt: "What is the O*NET code for Sound Engineering Technicians?", options: ["27-4014.00", "27-4011.00", "49-9096.00", "27-4015.00"], correctIndex: 0, explanation: "27-4014.00 is Sound Engineering Technicians. 27-4011.00 is Audio and Video Technicians.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "Which of these does O*NET's description of sound engineering technicians list as a production they work on?", options: ["Conventions", "Podcasts", "Presentations", "Meetings"], correctIndex: 1, explanation: "'for theater, video, film, television, podcasts, sporting events, and other productions.' Meetings, conventions and presentations are in the audio and video technicians' description, 27-4011.00, not this one.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "Which words open O*NET's description of sound engineering technicians?", options: ["Design and sell equipment for recording studios", "Teach and certify new sound engineers", "Assemble and operate equipment", "Repair and calibrate hearing aids"], correctIndex: 2, explanation: "'Assemble and operate equipment to record, synchronize, mix, edit, or reproduce sound'.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "Which logging duty appears among O*NET's tasks for sound engineering technicians?", options: ["Keep logs of hearing tests", "Keep logs of crew hours", "Keep logs of power use", "Keep logs of recordings"], correctIndex: 3, explanation: "'Keep logs of recordings.', the habit from lesson 13.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "Which reported job titles does this course quote from O*NET for sound engineering technicians?", options: ["Audio, Recording and Sound Engineer, Sound Tech", "Rigger, Grip, Gaffer, Stagehand", "Foley Artist, Boom Operator, Production Mixer, Dialogue Editor", "Announcer, Producer, Director, Writer"], correctIndex: 0, explanation: "'Audio Engineer', 'Recording Engineer', 'Sound Engineer' and 'Sound Technician (Sound Tech)'.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "What median annual wage (2025) does O*NET show for sound engineering technicians?", options: ["$58,100", "$73,130", "$35,160", "$27,930"], correctIndex: 1, explanation: "'Median wages (2025) $35.16 hourly, $73,130 annual'. $58,100 is audio and video technicians.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "Which lesson of the series' first course opens with who is on a show crew?", options: ["Sound Craft, lesson 25, Who does sound work", "Voice Acting: The Instrument, lesson 1", "Rigging for Stage and Broadcast Crews, lesson 1", "Break Into Sports & Media Broadcasting, lesson 13"], correctIndex: 2, explanation: "Rigging for Stage and Broadcast Crews, lesson '1 · Who rigs on a show'. Lesson 25 does not repeat it.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "What employment figure (2025) does O*NET show for sound engineering technicians?", options: ["Only 1,000 employees", "150,000 employees", "73,130 employees", "15,000 employees"], correctIndex: 3, explanation: "'Employment (2025) 15,000 employees'. 1,000 is the projected job openings.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "What projected growth (2025-2035) does O*NET show for sound engineering technicians?", options: ["Decline (-1% or lower)", "Much faster than average (7% or higher)", "Average (3% to 4%)", "Faster than average (5% to 6%)"], correctIndex: 0, explanation: "'Projected growth (2025-2035) Decline (-1% or lower)'.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "How many projected job openings (2025-2035) does O*NET show for sound engineering technicians?", options: ["15,000", "1,000", "100", "73,130"], correctIndex: 1, explanation: "'Projected job openings (2025-2035) 1,000'.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "What does lesson 25 tell you to do before relying on O*NET's figures?", options: ["Treat them as local", "Average both occupations", "Check the live page", "Use the 2015 figures"], correctIndex: 2, explanation: "They are national figures, read when O*NET's site showed 'Site updated October 6, 2026'. 'Check the live page before you rely on any of them.'", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "Under which O*NET occupation is 'Stagehand' a reported job title?", options: ["27-4014.00, Sound Engineering Technicians", "49-9096.00, Riggers", "27-4012.00, Broadcast Technicians", "27-4011.00, Audio and Video Technicians"], correctIndex: 3, explanation: "'Stagehand' is among the reported job titles of 27-4011.00, Audio and Video Technicians.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "What median wage (2025) does O*NET show for audio and video technicians?", options: ["$27.93 hourly, $58,100 annual", "$35.16 hourly, $73,130 annual", "$15.00 hourly, $31,200 annual", "$50 hourly, $104,000 annual"], correctIndex: 0, explanation: "'(2025) $27.93 hourly, $58,100 annual'. $35.16 and $73,130 are sound engineering technicians.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "Which task does O*NET list for audio and video technicians?", options: ["Compose music for films and television", "Control the lights and sound of events", "Write scripts for radio dramas and podcasts", "Repair musical instruments"], correctIndex: 1, explanation: "'Control the lights and sound of events, such as live concerts, before and after performances, and during intermissions.'", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "In which Job Zone does O*NET place sound engineering technicians?", options: ["Job Zone One", "Job Zone Five", "Job Zone Three", "Job Zone Two"], correctIndex: 2, explanation: "O*NET places them in Job Zone Three.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "How does O*NET describe the training for Job Zone Three?", options: ["A four-year degree in acoustics", "A two-week safety course", "No training of any kind", "One or two years, on the job"], correctIndex: 3, explanation: "'one or two years of training involving both on-the-job experience and informal training with experienced workers'.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "Which two apprenticeship titles does O*NET list for sound engineering technicians?", options: ["Recording Engineer and Sound Mixer", "Boom Operator and Foley Artist", "Stagehand and Rigger", "Audio Engineer and Sound Tech"], correctIndex: 0, explanation: "'Recording Engineer' and 'Sound Mixer', 'approved by the U.S. Department of Labor for use in a Registered Apprenticeship Program'.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "What does lesson 25 say finishing this course earns you?", options: ["A Registered Apprenticeship certificate", "No credential at all", "Job Zone Three status", "Union membership"], correctIndex: 1, explanation: "'This course is not that training and earns no credential. It is a map of the craft and of the documents behind it.'", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "Which of these is among the unions and associations O*NET lists for sound engineering technicians?", options: ["The International Brotherhood of Teamsters", "The Writers Guild of America", "The Society of Broadcast Engineers", "The Directors Guild of America"], correctIndex: 2, explanation: "O*NET lists IATSE, the IBEW, the Motion Picture Editors Guild, NABET-CWA and the Society of Broadcast Engineers, with the Audio Engineering Society and the Cinema Audio Society among associations.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "Does O*NET say which union covers which sound job?", options: ["Yes, one union per job title", "Yes, IATSE covers every job", "Only for broadcast jobs", "No, it simply lists them"], correctIndex: 3, explanation: "'O*NET lists them; it does not say which one covers which job, and neither does this course.'", sourceLessonSlug: "who-does-sound-work" },

          // Lesson 26: capstone
          { prompt: "What two pieces does the capstone ask you to hand in?", options: ["A logged recording and a made sound", "A written essay and a multiple-choice test", "A release form and a recording log", "A spectrogram and a hearing test"], correctIndex: 0, explanation: "A logged field recording with its spectrogram read, and one made sound set beside a public-domain recording of the real thing.", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "In capstone Part A, what weather should you check while planning?", options: ["The UV index", "The forecast wind", "The pollen count", "The tide table"], correctIndex: 1, explanation: "'Choose a place and a time. Check the forecast wind.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "In capstone Part A's planning step, what should you find out besides place, time and wind?", options: ["Whether the site will need automatic gain", "Which limiter setting the site will need", "Whether you need anyone's permission", "Who owns the nearest power outlet"], correctIndex: 2, explanation: "'Find out whether you need anyone's permission to be there.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "Which recorder settings does capstone Part A set at home?", options: ["Limiter on, low cut on, automatic gain on", "MP3 at the highest compression", "Pre-Rec on and the clock unset", "Limiter and low cut off, level by hand"], correctIndex: 3, explanation: "'Limiter off, low cut off, level set by hand two steps below the peak light.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "How much of your own system's noise does capstone Part A ask you to record at home?", options: ["30 seconds", "5 minutes", "1 second", "25 days"], correctIndex: 0, explanation: "'Record 30 seconds of your own system's noise.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "How long does capstone Part A have you listen before you record?", options: ["Two minutes", "Twenty minutes", "Two hours", "No time at all"], correctIndex: 1, explanation: "'Arrive quietly and listen for twenty minutes before you record'.", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "In capstone Part A's listening step, what do you leave off the list?", options: ["The constant sounds", "The events and their times", "Your artifacts", "The bird calls"], correctIndex: 2, explanation: "List the constant sounds and the events with their times, with your artifacts left out.", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "What does capstone Part A's spoken statement at the start of a recording contain?", options: ["The recorder's model, the sample rate and the file name", "The weather, the wind speed and the noise floor", "Your name, the weather and the time you plan to leave", "The date, the place, your name and what you are recording"], correctIndex: 3, explanation: "'Begin with a spoken statement: the date, the place, your name and what you are recording.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "Which three checks does capstone Part A ask for once recording starts?", options: ["The counter, the meter and the headphones", "The battery, the clock and the remaining file space", "The weather, the wind and the light", "The cables, the tripod and the bag"], correctIndex: 0, explanation: "'Check the counter, the meter and the headphones.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "What does capstone Part A ask you to write down if you leave the recorder running?", options: ["The weather as you left", "The time that you left", "How far you walked", "Your battery level"], correctIndex: 1, explanation: "'If you leave the recorder running, write down when you left.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "Which fields does capstone Part A's log include?", options: ["Only the file name", "The microphone's model and its serial number", "Title, place, date, format, rights, times", "Battery level and remaining card space"], correctIndex: 2, explanation: "'Title, place, date, description, format, rights, and a time list of what you heard.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "How many sentences does capstone Part A ask you to write about the recording's spectrogram?", options: ["One", "Ten", "Twenty", "Three"], correctIndex: 3, explanation: "'write three sentences on what it shows and when.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "How does capstone Part A ask you to keep your files?", options: ["Three copies, one kept elsewhere", "One copy, on the recorder", "Two copies, both kept in the same drawer", "Uploaded to Freesound only"], correctIndex: 0, explanation: "'Three copies, one kept elsewhere.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "What does capstone Part A ask you to do if you make an edit?", options: ["Delete the original to save space", "Say what you removed in the edit", "Publish without saying anything", "Re-record the whole session"], correctIndex: 1, explanation: "'Keep the unedited original; if you make an edit, say what you removed.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "Which Park Service clips may you choose from for capstone Part B?", options: ["The stream clip or the ocean surf clip", "The cannon clip or the musket clip", "The rain clip or the thunder clip", "The jet clip or the helicopter clip"], correctIndex: 2, explanation: "'Choose the Park Service's rain clip or its thunder clip'.", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "In capstone Part B, how is the cue written?", options: ["As a two-line poem", "In the Army's VU meter notation", "As a list of microphone settings", "Sound first, then the action"], correctIndex: 3, explanation: "'in the 1928 style: the sound, then the action that causes it.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "When may you make a sound for capstone Part B?", options: ["Only from a reviewed build list", "Any time, with whatever is at hand", "Only after buying a commercial kit", "Never, under any circumstances at all"], correctIndex: 0, explanation: "'When lessons 19 and 22 carry a build list a safety reviewer has approved, make the sound from it.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "Until a reviewed build list exists, where does capstone Part B stop?", options: ["Before listening to the clip", "After the cue and a note", "After building the thunder sheet", "At the comparison step"], correctIndex: 1, explanation: "'Until then, stop after the cue and write in words what a made version would have to get right.'", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "In capstone Part B's comparison, how do you set the two sounds side by side?", options: ["By their waveforms", "By ear alone", "By their spectrograms", "By their peak meter readings"], correctIndex: 2, explanation: "Record it with the lesson 8 chain and set the two spectrograms side by side.", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "Who must review capstone Part B before any sound is built for it?", options: ["A licensing reviewer", "A theater sound designer", "Nobody", "A safety reviewer"], correctIndex: 3, explanation: "The capstone's QR marker: no sound is built until the build lists in lessons 19 and 22 have been reviewed by a safety reviewer.", sourceLessonSlug: "capstone-logged-and-made" },
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
          { prompt: "A recordist logs '60 dBA' with no place or distance. What is wrong with that entry, by this course's rule?", options: ["It can't be checked or repeated", "It should have been written in hertz", "It is too loud a level to log at all", "Nothing; a level needs no context"], correctIndex: 0, explanation: "Eight of the nine rows of the park ladder name a place and five name a distance; a level without them cannot be checked or repeated.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "Which describes a 10 dB rise most accurately, by this course's reading of the Park Service page?", options: ["Ten times as loud to the ear, twice the intensity", "About twice as loud to the ear, ten times the intensity", "Twice as loud to the ear, and exactly twice the intensity", "No change the ear can detect"], correctIndex: 1, explanation: "The page says 10 dB doubles perceived loudness and is a 'ten-fold increase in sound level', which must mean intensity.", sourceLessonSlug: "frequency-level-and-the-decibel" },
          { prompt: "On a gallery spectrogram, a bright band appears high up and late in the clip. What does that show?", options: ["A quiet, low-pitched sound at the start", "A loud, low-pitched sound near the end", "A loud, high-pitched sound near the end", "A gap in the recording"], correctIndex: 2, explanation: "Frequency runs bottom to top, time left to right, and brightness shows amplitude: high, late and bright is a loud, high sound near the end.", sourceLessonSlug: "reading-a-spectrogram" },
          { prompt: "During on-site listening your raincoat rattles in the rain. What does the park protocol tell you to do with that sound?", options: ["Log it as a constant sound", "Log it as wind induced noise", "Stop and restart the session", "Leave it out as an artifact"], correctIndex: 3, explanation: "Artifacts include 'raindrops falling on a raincoat'. 'Do not enter these noises.'", sourceLessonSlug: "listening-on-site" },
          { prompt: "Branches creak in a gust while you listen. Which term from the park manual fits that sound?", options: ["Wind induced noise", "Wind turbulence alone", "An artifact you made", "Masking by birdsong"], correctIndex: 0, explanation: "The manual: 'wind induced noise' describes the sound of wind moving other objects to make noise (such as branches creaking or scraping against each other).", sourceLessonSlug: "listening-on-site" },
          { prompt: "Why would this course keep a ribbon microphone off a windy ridge?", options: ["Ribbons cannot record birdsong", "A strong wind may break the ribbon", "Ribbons need mains power", "Ribbons are banned in parks"], correctIndex: 1, explanation: "The 1987 Army course: the ribbon 'should never be used outdoors. A strong wind may break the ribbon rendering the mike useless.'", sourceLessonSlug: "how-a-microphone-hears" },
          { prompt: "A crew member is exposed to 100 dBA. How do the times in the two federal noise documents compare?", options: ["OSHA permits 15 minutes; NIOSH recommends 2 hours", "Both documents give 8 hours", "OSHA permits 2 hours; NIOSH recommends 15 minutes", "Both documents give 15 minutes"], correctIndex: 2, explanation: "Table G-16 gives 2 hours at 100 dBA; NIOSH's Table 1-1 gives 15 minutes, one eighth as long.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Which order does 1910.95(b)(1) set for dealing with noise above Table G-16?", options: ["Protective equipment first, then controls", "Hearing tests first, then controls", "Warnings first, then nothing more", "Controls first, then protectors if they fail"], correctIndex: 3, explanation: "'feasible administrative or engineering controls shall be utilized. If such controls fail ... personal protective equipment shall be provided and used'.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Which statement about OSHA's and NIOSH's noise numbers matches this course?", options: ["Two documents with two jobs, not one rule", "The same rule written twice", "NIOSH's numbers have replaced OSHA's", "OSHA adopted all of NIOSH's numbers in 1998"], correctIndex: 0, explanation: "OSHA's numbers are enforceable; NIOSH's are a recommendation built on its reading of the evidence.", sourceLessonSlug: "two-documents-two-numbers" },
          { prompt: "Why can't OSHA's 140 limit and NIOSH's 140 ceiling be compared directly as printed?", options: ["One is in hertz and the other is in decibels", "One is a peak level; the other is printed in dBA", "One of them applies only outdoors", "They are the same number, so nothing differs"], correctIndex: 1, explanation: "OSHA's footnote gives '140 dB peak sound pressure level'; NIOSH 1.1.4 prints '140 dBA'. Check that two numbers measure the same thing.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "What does this course say about blank gunfire and pyrotechnics on a set?", options: ["Keep a 50 ft gap from any blank", "Use the park ladder's 126 dBA", "No figures; ask the safety lead", "Wear earplugs rated for 140 dB peak"], correctIndex: 2, explanation: "No document on them was read, so the course gives no figures: ask whoever is responsible for safety on the production.", sourceLessonSlug: "impulse-noise-two-140s" },
          { prompt: "A recordist wants park tour aircraft in both busy and quiet months. Which Park Service idea fits?", options: ["Sampling areas of similar vegetation", "Hours over 5 m/s wind excluded", "Learning the kit indoors first", "Two seasons: a high and a low season"], correctIndex: 3, explanation: "'Often, two seasons of data will be useful: a high season and a low season for a specific sound source of interest.'", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "What does this course say one visit to a place gives you?", options: ["A sample of the place, not the place", "A complete and permanent record of the place", "Enough for the 25-day minimum", "A legal right to record there"], correctIndex: 0, explanation: "The idea carries over from 25-day monitoring: one visit is a sample of a place, not the place.", sourceLessonSlug: "planning-a-field-session" },
          { prompt: "Your recorder's automatic gain hunts during quiet passages. What does the 1986 Army course say it will add?", options: ["Clicks and pops", "Hiss and roar", "Echo and delay", "Hum and buzz"], correctIndex: 1, explanation: "'the AGC will cause hiss and roar as it seeks a signal during quiet portions of the program.'", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "Which test tells you what your own kit's silence sounds like?", options: ["Thirty seconds of a 94 dB calibration tone", "A spoken statement of the date and place", "A 30-second dummy-mic recording", "A recording made with the limiter on"], correctIndex: 2, explanation: "The dummy-mic test, 'to be able to differentiate silence in the field with the static of the system.'", sourceLessonSlug: "a-chain-that-does-not-lie" },
          { prompt: "Which pair of wind terms does the park manual set against each other?", options: ["Wind and wind speed", "Windscreen and the wind machine", "Wind speed and windscreens", "Wind and wind induced noise"], correctIndex: 3, explanation: "The drill asks for 'wind induced noise', which the manual sets against plain 'wind'.", sourceLessonSlug: "listening-on-site" },
          { prompt: "How do the Library of Congress guide's two two-microphone setups differ?", options: ["Directional mics close at 110 degrees, or omnis two feet apart", "Omnis close at 110 degrees, or directional mics two feet apart", "One uses a boom and the other a lavalier", "One records in mono and the other in surround"], correctIndex: 0, explanation: "Two directional mics 'about 6 inches apart and at a 110-degree angle', or two omnidirectional mics 'about two feet apart and parallel'.", sourceLessonSlug: "stereo-and-binaural" },
          { prompt: "Which animal does the SanctSound page say makes its sound by popping bubbles?", options: ["Humpback whales", "Snapping shrimp", "Dolphins", "Spawning fish"], correctIndex: 1, explanation: "Snapping shrimp 'use their larger claw to create and pop bubbles, resulting in a loud snapping sound'.", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "What is the ocean soundscape made of, by NOAA's account?", options: ["Biological, human-made, recorder self-noise", "Environmental, biological, artifacts", "Environmental, human-made, biological", "Human-made, biological, calibration tone"], correctIndex: 2, explanation: "'These environmental and human-made sounds, combined with the biological sounds produced by animals, make up the ocean soundscape.'", sourceLessonSlug: "under-water-and-beyond-hearing" },
          { prompt: "A recordist removes a jet from a stream recording and publishes it. What does this course's rule require?", options: ["Delete the original so no one hears the jet", "Never publish an edited recording", "Ask the Park Service for approval", "Keep the original and say what was removed"], correctIndex: 3, explanation: "'Keep the unedited original. If you publish an edit, say what you removed.' The rule is the course's own.", sourceLessonSlug: "footprint-and-the-edit" },
          { prompt: "In the capstone, which three things show your recording chain is honest about itself?", options: ["Switches off, manual level, noise floor", "Automatic gain, a limiter and a low cut", "An MP3 file, a release form and a log", "A boom, a lavalier and a slate"], correctIndex: 0, explanation: "The limiter and low cut off, a level set by hand, and a recording of your own system's noise floor.", sourceLessonSlug: "capstone-logged-and-made" },
          { prompt: "You will leave a recorder out for weeks to monitor a site. Which format does the park manual choose, and why?", options: ["WAV, for archival fidelity", "MP3, for longer recording time", "MP3, because archives demand it", "WAV, because it uses less storage"], correctIndex: 1, explanation: "'MP3-96Kbps. Lower sound quality but smaller than WAV files and allows for longer recording time'.", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "You are recording an interview to deposit in an archive. What does the Library of Congress guide recommend?", options: ["MP3 at 96 kbps", "Any lossless compressed format", "WAV at 96 kHz and 24 bits", "WAV at 22 kHz and 8 bits"], correctIndex: 2, explanation: "'We recommend recording WAV files at 96khz/24bits.'", sourceLessonSlug: "log-it-and-keep-it" },
          { prompt: "Which jobs does this course leave to a theater sound practitioner?", options: ["Choosing a quiet spot and asking permission", "Setting two mics 6 inches apart", "Avoiding fridges and AC vents", "Reinforcement and playback"], correctIndex: 3, explanation: "No source read covers sound in a theater beyond a run-through; those jobs wait for the theater sound designer or operator.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "Why should a sound check in an empty room make you cautious, by the 1987 Army course?", options: ["It records differently than the same room furnished", "An empty room is always quieter than a full one", "An empty room has no echo at all", "An empty room cannot be recorded"], correctIndex: 0, explanation: "'An empty room reflects sound and therefore, records differently than that same room filled with furniture'.", sourceLessonSlug: "a-performance-in-a-hall" },
          { prompt: "The 1989 Army EFP audio list includes fuses. What else does it name?", options: ["A generator and a dolly", "Spare batteries and windscreens", "A clapper slate and a timecode box", "Earplugs and a sound level meter"], correctIndex: 1, explanation: "'extra mike cables, gaffer tape, and headphones for monitoring audio pickup, spare batteries, fuses and windscreens for the microphones.'", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "Which rule for cables does the 1987 Army course give for everyone's safety?", options: ["Hang every cable from the ceiling", "Never coil a cable", "Tape floor runs down so no one trips", "Run cables beside power lines"], correctIndex: 2, explanation: "'When cables are run across the floor, tape them down so that no one will trip.'", sourceLessonSlug: "kit-and-site-survey" },
          { prompt: "A lavalier sits about 6 inches below the chin. Which source gives that figure?", options: ["The 1987 Army television course, on lavaliers", "The park acoustical manual", "Brachart's 1913 stage manual", "The Library of Congress fieldwork guide"], correctIndex: 3, explanation: "The guide: clip it 'near the top button of a shirt or blouse', 'about 6 inches below the chin.'", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "Which microphone does the 1987 Army course describe as working several feet from the speaker?", options: ["The shotgun", "The lavalier", "The ribbon", "The hand-held"], correctIndex: 0, explanation: "The shotgun 'may be several feet from the speaker and still pick up acceptable audio'.", sourceLessonSlug: "placing-a-lav-pointing-a-shotgun" },
          { prompt: "What normal VU band does the 1987 Army course give, and what digital target does this course give?", options: ["0 to 20 per cent VU; minus 20 digital", "80 to 100 per cent VU; no digital target", "100 to 120 per cent VU; minus 6 digital", "80 to 100 per cent VU; minus 12 digital"], correctIndex: 1, explanation: "'between 80-100 per cent VU modulation'. No digital target is given, because no source read states one.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "A unit in your chain fails during a show. What does the 1987 Army course say to do?", options: ["Turn every unit off and restart", "Raise the gain on the failed unit", "Bypass from the last good unit", "Switch the recorder to AGC"], correctIndex: 2, explanation: "Bypassing 'is always done from the \"output\" of the last good piece of equipment, around the bad piece of equipment'.", sourceLessonSlug: "meters-tone-and-gain" },
          { prompt: "What does the Library of Congress guide's opening statement let a later listener know?", options: ["The recorder's settings", "The release form's terms", "The archive's address", "Who, where, when, what"], correctIndex: 3, explanation: "The date and place, the names of the people on the recording, and the general topic.", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "Which set conventions does this course name but leave untaught until a practitioner writes them?", options: ["Wild tracks, slating, timecode, the sound report", "Opening and closing announcements", "Avoiding 'uh-huh' and describing gestures aloud", "Typing copy on one side of the page"], correctIndex: 0, explanation: "Lesson 18 names wild tracks, slating, timecode and sync, and the sound report, and is not released until a practitioner writes that part.", sourceLessonSlug: "slates-room-tone-and-sync" },
          { prompt: "Which of Brachart's devices does this course show only as history and never as a build?", options: ["The coconut hooves and the clay box", "The lead-plate crack and the scrap-iron artillery", "The pea drum and the wind machine", "The rice-on-zinc hail and the hanging thunder sheet"], correctIndex: 1, explanation: "The thunder crack uses lead and drops a weight, and the artillery is scrap iron in a barrow: both stay history.", sourceLessonSlug: "older-than-the-name" },
          { prompt: "What training does O*NET describe for sound engineering technicians?", options: ["A four-year degree in acoustics", "A one-day safety course", "One or two years", "No training of any kind"], correctIndex: 2, explanation: "Job Zone Three: 'one or two years of training involving both on-the-job experience and informal training with experienced workers'.", sourceLessonSlug: "who-does-sound-work" },
          { prompt: "How does a 1928 USDA cue tell the effects person what to do?", options: ["It gives a page and line number only", "It plays a recording in the margin", "It gives each sound's duration", "Sound and action, in parentheses"], correctIndex: 3, explanation: "Each cue names a sound in parentheses, and several tie it to the action, such as '(Sound of knocking as if at door)'.", sourceLessonSlug: "writing-the-cue" },
          { prompt: "What is the status, in this course, of the story of how Foley got its name?", options: ["An open record: every account found is reported", "Settled by Foley's 1952 column", "Settled by a record in the Library of Congress archive", "Disproved by the 1989 Army course"], correctIndex: 0, explanation: "The 1952 column has not been found, and every date and story about Jack Foley is reported, not verified.", sourceLessonSlug: "the-foley-story-open-record" },
          { prompt: "What should you do before imitating thunder, by the rule lesson 22 draws from Brachart?", options: ["Build the thunder sheet first", "Listen to real thunder first", "Write the cue first", "Ask a lawyer first"], correctIndex: 1, explanation: "'listen to the world before you imitate it.' Brachart called thunder before lightning 'absolument irrationnel'.", sourceLessonSlug: "made-against-real" },
          { prompt: "An interviewee decides after the session not to sign the release. What does the Library of Congress guide say?", options: ["They lose that right once recording starts", "They must sign if they spoke on tape", "They always have the right to refuse", "They may refuse only before recording"], correctIndex: 2, explanation: "'after the interview, interviewees always have the right to refuse to sign a release form'.", sourceLessonSlug: "consent-before-record" },
          { prompt: "A sound on Freesound is marked BY. What must you do when you use it, by Freesound's summary?", options: ["Pay a fee to Freesound", "Keep the work noncommercial", "Release your work as CC0", "Mention the original creators"], correctIndex: 3, explanation: "'For \"attribution\" you should always mention the original creators of the sounds when you use them.'", sourceLessonSlug: "licenses-for-sounds" },
        ],
      },
    },
  ],
};
