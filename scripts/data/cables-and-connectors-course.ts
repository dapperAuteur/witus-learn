import type { AuthoredCourse } from "./authored-course";

// "Cables and Connectors" (Careers & Media, also listed in Trade Skills and Sports). Slug
// `cables-and-connectors`. Series `the-crew-behind-the-show` ("The Crew Behind the Show"), code CREW,
// position 00: the series' foundation, the thing every other CREW course assumes. CREW-01 is
// `stage-and-broadcast-rigging`, CREW-02 `sound-craft`, CREW-03 `light-on-set`, CREW-04
// `cinema-look-camera-rig`, CREW-05 `arena-transmission`, CREW-06 `renting-out-production-gear`.
// `broadcasting-break-in` stays outside the series; its lesson "6 · Signal flow and audio fundamentals"
// is the prerequisite (brief section 4).
//
// RESEARCH TIER 2 (brief, status line): section 7 is electrical safety. Sections 1 to 5 carry laser
// safety (lesson 15) and the DC that rides some XLR lines (lessons 16 and 17).
// Brief:    cloud-briefs/crew-00/00-approved-brief.md (approved by BAM 2026-10-26: public, CREW-00,
//           held for a qualified reviewer: a broadcast engineer for sections 1 to 6, 8 and 9, and a
//           stage electrician for section 7; capstone hands-on, on video).
// Research: cloud-briefs/crew-00/research/ (fetched 2026-10-26). 01-video-camera-fiber.md covers
//           sections 1 to 4, 02-audio-network-control.md sections 5, 6 and 8, 03-power-and-craft.md
//           sections 7 and 9. Only V lines are asserted. I lines appear only with their reasoning shown
//           in the lesson. A lines are never taught. Each file's "Teach this, not that" list is taught
//           as corrections where the lesson needs it.
//
// BUILD STATUS: pass 1 of 2 (2026-10-26) wrote sections 1 to 5, 18 teaching lessons and five section
// quizzes: why the cable matters; video over copper; camera cables; fiber; audio over copper. Pass 2
// writes sections 6 to 9 (network, power, control and data, craft), the capstone and the final quiz.
//
// VISIBILITY: PUBLIC, and HELD ("Coming soon") until a NAMED qualified reviewer, a broadcast engineer,
// has read every lesson marked QR with authority to change or cut it (a stage electrician joins for
// section 7). The publishHoldReason in scripts/seed-courses.ts says so.
//
// MARKED LESSONS (pass 1). Each starts its body with a "> **Before release:**" line naming who must act.
//   QR (a broadcast engineer): 2 (the 75 against 50 ohm arithmetic), 5 (three published reaches for one
//   cable), 7 (reference termination and the timecode connectors), 8 (all of a triax system's signals
//   and power on one cable), 9 (the hybrid cable's power, bend radius), 10 (tactical fiber carries no
//   power), 13 (the cleaning rule), 14 (the loss-budget arithmetic and the short-link overload), 15
//   (laser safety), 16 (pin 3 as the cold leg), 17 (never patch party-line into audio, and the XLR
//   family), 18 (AES3 run lengths and conversion).
//   Unmarked: 1, 3, 4, 6, 11, 12 (definitions and spec-sheet facts read directly from the sources).
//
// LINK, DO NOT REPEAT. CREW-05's fiber lessons ("20 · Fiber on the map", "21 · Where to learn fiber,
// and what certifies it", "22 · A fiber kit and a first lab"), its "12 · ST 2110: separate streams" and
// "17 · One clock: PTP"; CREW-04's "7 · Outputs, timecode and genlock"; broadcasting-break-in's
// "6 · Signal flow and audio fundamentals". Each is named by title where this course stops.
// Correction to the brief (both research files): the three fiber lessons are in CREW-05, not CREW-02,
// and sound-craft names no Dante.
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, may be hosted later: the FDA laser page (a U.S. government work).
//  - Tier B, link only, never rehost: every maker's spec sheet, manual, product page and knowledge
//    base (AJA, Belden, Blackmagic Design, Camplex, Canare, Clear-Com, Coaxicom, DDK, ENTTEC, HDMI
//    Licensing Administrator, Ikegami, LEMO, Mackie, Markertek, QSC, Rane, RME, Rohde & Schwarz,
//    Schoeps, Semtech, Sennheiser, Sony via its dealer's copy, VESA), the Fischer and LEMO white
//    papers, ProSoundWeb, the FOA's reference pages, SMPTE's free overview documents (OV 297-0 and
//    OV 2082-0) and ESTA's published-documents listing.
//  - Tier C, cite only: the SMPTE, AES, TIA, IEC and NFPA standards themselves, which are paywalled.
//    No lesson quotes or reconstructs their text; every fact about a standard comes from a free page
//    that states it. No ESTA standard was downloaded (downloading accepts its EULA).
//  - FIGURES: none embedded. Sennheiser's XLR pin figure is described in words and cited by page.
//
// VENDORS are worked examples of spec sheets a learner can read, never endorsements (brief section 5).
//
// CITATION LETTERS. Same-author, same-year letters follow the research files. Pass 2 adds sources from
// file 02 whose letters collide with file 01's: Belden's Category 5e sheet (file 02's "Belden, 2026")
// becomes Belden (2026c), and Blackmagic Design's ATEM and HyperDeck tech specs (file 02's n.d.-a and
// n.d.-b) become (n.d.-c) and (n.d.-d), since this course already uses file 01's URSA pages as
// (n.d.-a) and (n.d.-b).
//
// STANDARDS: unmapped for now (BACKLOG entry in scripts/check-standards-coverage.ts).
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts, keys crew00-*):
//  - L2: the 75 against 50 ohm arithmetic (crew00-mismatch-arithmetic); whether mating a 50-ohm BNC
//    with a 75-ohm BNC damages either (crew00-bnc-mating-damage).
//  - L5: Belden's own SDI distance chart (crew00-belden-sdi-distance); 6G-SDI typical distances
//    (crew00-6g-sdi-distance).
//  - L6: a maximum passive HDMI length (crew00-hdmi-max-length).
//  - L7: terminating a reference chain by hand (crew00-reference-termination); which connectors carry
//    LTC (crew00-ltc-connectors).
//  - L8: triax connector families and intermating (crew00-triax-connectors).
//  - L9: the voltage on a hybrid cable's copper (crew00-hybrid-voltage); pulling or installed bend
//    radius for LF-2SM9N (crew00-hybrid-bend-radius).
//  - L10: tactical fiber carries no power (crew00-tactical-no-power).
//  - L13: the default cleaning rule (crew00-cleaning-default).
//  - L14: an attenuator on a very short FiDO link (crew00-short-link-attenuator).
//  - L15: the laser class of fiber camera transmitters (crew00-camera-laser-class).
//  - L16: pin 3 as the cold leg, in words (crew00-xlr-pin3-cold).
//  - L17: other makers' 4-pin headset pin-outs (crew00-headset-pinouts); DMX cable impedance
//    (crew00-dmx-cable-impedance).
//  - L18: current AES3 and AES3id run lengths (crew00-aes3-run-lengths).
//
// House style, matching stage-and-broadcast-rigging-course.ts and arena-transmission-course.ts:
// `section` on every lesson; flush-left single-line `:::reveal q ||| a`; recallContent from the second
// teaching lesson on, quizzing the lesson before; APA 7 in-line citations and a `## Sources` block on
// every teaching lesson with a locator on every entry; a quiz per section pooled to round(words / 35),
// clamped 40 to 100, serving 5, passing 80, shuffled. Option lengths are balanced within each question.
// American spelling in prose; quotations keep their own spelling. No em or en dashes anywhere.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const RETRIEVED = "Retrieved October 26, 2026, from";

// Coax, impedance and SDI (research file 01)
const AJA_12GDA = `AJA Video Systems. (n.d.). *12GDA: 12G-SDI 1x6 distribution amplifier* [Product page]. ${RETRIEVED} https://www.aja.com/products/12gda`;
const AJA_GEN10 =
  "AJA Video Systems. (2014). *GEN10 mini-converter HD/SD sync generator: Installation & operation guide* (Version 1.0r2). https://www.aja.com/support/item-download/90/AJA_manual_GEN10_v1.0r2.pdf";
const AJA_FIDO =
  "AJA Video Systems. (2023). *FiDO 12G series SDI/optical fiber mini-converters: Installation and operation guide* (Version 1.4). https://www.aja.com/support/item-download/9429/AJA_FiDO-12G-Series_Manual_v1.4.pdf";
const BELDEN_1800F =
  "Belden. (2025a). *Product 1800F: Digital microphone cable, 1 pr #24 str BC, 95% TC French braid, PVC jkt, CL2R, flexible* [Technical data sheet, revision 0.523]. https://catalog.belden.com/techdata/EN/1800F_techdata.pdf";
const BELDEN_8412 =
  "Belden. (2025b). *Product 8412: Microphone cable, 2 C #20 str TC, rayon & 85% TC braid, cotton serve, EPDM jkt* [Technical data sheet, revision 0.523]. https://catalog.belden.com/techdata/EN/8412_techdata.pdf";
const BELDEN_1694A =
  "Belden. (2026a). *Product 1694A: 75 ohm SDI coax, RG-6, 18 AWG, solid BC, foil + 95% TC braid, PVC jkt, CMR* [Technical data sheet, revision 0.716]. https://catalog.belden.com/techdata/EN/1694A_techdata.pdf";
const BELDEN_4794R =
  "Belden. (2026b). *Product 4794R: 4K UHD coax for 12G-SDI, 75 ohm, series 7, 16 AWG solid SC, tri-shield, PVC jkt, CMR* [Technical data sheet, revision 0.405]. https://catalog.belden.com/techdata/EN/4794R_techdata.pdf";
const BMD_URSA = `Blackmagic Design. (n.d.-a). *Blackmagic URSA Broadcast G2* [Product page]. ${RETRIEVED} https://www.blackmagicdesign.com/products/blackmagicursabroadcast`;
const BMD_URSA_SPECS = `Blackmagic Design. (n.d.-b). *URSA Broadcast: Tech specs* [Product specifications]. ${RETRIEVED} https://www.blackmagicdesign.com/products/blackmagicursabroadcast/techspecs`;
const CANARE_US_MASTERING = `Canare Corporation of America. (n.d.-a). *Mastering Canare 12G-SDI*. ${RETRIEVED} https://www.canare.com/mastering-canare-12g-sdi`;
const CANARE_US_12G = `Canare Corporation of America. (n.d.-b). *12G SDI/4K solutions*. ${RETRIEVED} https://www.canare.com/12gsdi4ksolutions`;
const CANARE_CONNECTORS = `Canare Electric. (n.d.-a). *Connectors* [Catalog 27C, PDF]. ${RETRIEVED} https://canare.co.jp/en/catalog/docs/27C/Canare27C_Connectors.pdf`;
const CANARE_HFO = `Canare Electric. (n.d.-b). *HFO camera cable assemblies (flanged type)* [Product page]. ${RETRIEVED} https://www.canare.co.jp/en/products/fiber_optic_systems/index.php?tid=1_023`;
const CANARE_HYBRID = `Canare Electric. (n.d.-c). *Hybrid fiber-optic camera cables (SMPTE ST 311)* [Product page]. ${RETRIEVED} https://www.canare.co.jp/en/products/fiber_optic_systems/index.php?tid=1_045`;
const CANARE_ULTRA = `Canare Electric. (n.d.-d). *Ultra coax* [Product page]. ${RETRIEVED} https://canare.co.jp/en/products/cables/index.php?tid=4_010_uc`;
const COAXICOM_2014 = "Coaxicom. (2014, August 22). *50 Ω connectors*. https://coaxicom.com/why-50-%CF%89-connectors/";
const COAXICOM_2015 =
  "Coaxicom. (2015, June 18). *Understanding coaxial cable terms, specifications and applications*. https://coaxicom.com/understanding-coaxial-cable-terms-specifications-and-applications/";
const DDK_BNC = `DDK Ltd. (n.d.). *BNC series* [Product page]. Fujikura. ${RETRIEVED} https://www.connector.fujikura.com/English/products/coaxial/BNC/index.html`;
const MARKERTEK = `Markertek. (n.d.). *75 ohm BNC terminator* [Product page, item 2555-3-32]. ${RETRIEVED} https://www.markertek.com/product/2555-3-32/75-ohm-bnc-terminator`;
const ROHDE_2015 =
  "Rohde & Schwarz. (2015). *Guidance on selecting and handling coaxial RF connectors used with Rohde & Schwarz test equipment* (Application Note 1MA99_2e; M. Bailey, Author). https://scdn.rohde-schwarz.com/ur/pws/dl_downloads/dl_application/application_notes/1ma99/1MA99_2E_CoaxConnectorHandling.pdf";
const SEMTECH = `Semtech. (n.d.). *GS12341* [Product page]. ${RETRIEVED} https://www.semtech.com/products/broadcast-video/cable-equalizers/gs12341`;
const SMPTE_2017 =
  "Society of Motion Picture and Television Engineers. (2017). *SMPTE OV 297-0:2017: Serial digital fiber transmission system and multi-link and multi-channel SDI using CWDM, overview for the 297 document suite*. https://pub.smpte.org/doc/ov297-0/20170106-pub/ov0297-0-2017.pdf";
const SMPTE_2018 =
  "Society of Motion Picture and Television Engineers. (2018). *SMPTE OV 2082-0:2018: 12G-SDI bit-serial interfaces, overview for the SMPTE ST 2082 document suite*. https://pub.smpte.org/doc/ov2082-0/20180502-pub/ov2082-0-2018.pdf";
const SONY_2017 =
  "Sony Corporation. (2017). *HXCU-FB80 4K/HD camera control unit: Operating instructions* (4-734-405-12(1)). Full Compass Systems. https://www.fullcompass.com/common/files/41829-HXCUFB80LOperatingInstructions.pdf";
const HDMI_POWER = `HDMI Licensing Administrator. (n.d.). *HDMI cable power*. ${RETRIEVED} https://www.hdmi.org/spec2sub/cablepower`;
const HDMI_2021 = "HDMI Licensing Administrator. (2021, May 17). *What is the best HDMI cable for system installations*. https://www.hdmi.org/blog/detail/128";
const VESA_FAQ = `Video Electronics Standards Association. (n.d.). *FAQ archive*. DisplayPort.org. ${RETRIEVED} https://www.displayport.org/faq/faq-archive/`;
const VESA_2024 =
  "Video Electronics Standards Association. (2024, January 8). *VESA announces DisplayPort updates and extensions for gaming and automotive market at CES* [Press release]. https://vesa.org/press/vesa-announces-displayport-updates-and-extensions-for-gaming-and-automotive-market-at-ces/";
const VESA_2025 =
  "Video Electronics Standards Association. (2025, January 6). *VESA to update DisplayPort 2.1 with new active cable specification for up to 3X longer DP80 cables* [Press release]. https://vesa.org/press/vesa-to-update-displayport-2-1-with-new-active-cable-specification-for-up-to-3x-longer-dp80-cables/";
const QSC_LTC = `QSC. (n.d.). *SMPTE LTC generator*. Q-SYS Help. ${RETRIEVED} https://help.qsys.com/Content/Schematic_Library/linear_timecode_encoder.htm`;

// Camera cables (research file 01)
const IKEGAMI_BST55 = `Ikegami. (n.d.-a). *BST-55: Digital triax base station* [Product page]. ${RETRIEVED} https://www.ikegami.com/product/detail/1058/`;
const IKEGAMI_CCU970 = `Ikegami. (n.d.-b). *CCU-970: 3G camera control unit* [Product page]. ${RETRIEVED} https://www.ikegami.com/product/detail/1060/`;
const IKEGAMI_HDK79EC = `Ikegami. (n.d.-c). *HDK-79EC: Multi-format full digital HDTV camera system* [Brochure]. ${RETRIEVED} https://www.ikegami.com/dl/_en/b46f22daf5b83d18a871992580827815/`;
const IKEGAMI_UHK430 = `Ikegami. (n.d.-d). *UHK-430* [Product page, including the CCU-430]. ${RETRIEVED} https://www.ikegami.com/product/detail/765/`;
const LEMO_3K93C = `LEMO. (n.d.). *EDW.3K.93C.YSE: 3K 93C Y SMPTE connector* [Product data sheet]. ${RETRIEVED} https://www.lemo.com/pdf/EDW.3K.93C.YSE.pdf`;
const LONGHURST_2017 =
  "Longhurst, P., & Brooks, A. (2017). *Fibre optic hybrid broadcast camera systems* [White paper]. LEMO. https://www.lemo.com/whitepaper/White_Paper-Fibre_20optic_hybrid_broadcast_20camera_systems.pdf";
const RICHARDS_2018 =
  "Richards, M. (2018). *HD broadcast: Triax or fiber?* (Edition 1.0) [White paper]. Fischer Connectors. https://fischerconnectors.com/app/uploads/2021/10/Fischer_Connectors_White_Paper_Broadcast_Triax_or_Fiber.pdf";
const CAMPLEX_PROTAC = `Camplex. (n.d.-a). *Pro-Tac series: Fiber optic tactical snake on reel* [Product page]. ${RETRIEVED} https://www.camplex.com/products/product/pro-tac-series`;
const CAMPLEX_SM_MM = `Camplex. (n.d.-b). *Single mode multimode fiber cable explained*. ${RETRIEVED} https://www.camplex.com/single-mode-and-multimode-fiber-cable`;
const CAMPLEX_TACTICAL = `Camplex. (n.d.-c). *Tactical cables* [Product category page]. ${RETRIEVED} https://www.camplex.com/products/category/tactical`;
const CAMPLEX_ADAPTERS = `Camplex. (n.d.-d). *Understanding fiber optic adapters: Small components with big impact*. ${RETRIEVED} https://www.camplex.com/resource-center/understanding-fiber-optic-adapters`;
const CAMPLEX_IDENT = "Camplex. (2019a). *Identifying fiber connector & polish types* [Data sheet]. https://www.camplex.com/Portals/0/Documents/Data%20Sheets/identifying.pdf";
const CAMPLEX_INSPECT = "Camplex. (2019b). *Inspecting & cleaning fiber optic connections* [Data sheet]. https://www.camplex.com/Portals/0/Documents/Data%20Sheets/inspecting.pdf";

// Fiber (research file 01)
const FOA_LOSS = `Fiber Optic Association. (n.d.-a). *Calculating fiber optic loss budgets*. ${RETRIEVED} https://www.thefoa.org/tech/lossbudg.htm`;
const FOA_CLEAN = `Fiber Optic Association. (n.d.-b). *Cleaning fiber optic connections*. The FOA reference for fiber optics. ${RETRIEVED} https://www.thefoa.org/tech/ref/termination/cleaning.html`;
const FOA_NAMES = `Fiber Optic Association. (n.d.-c). *Connector types and terminology: What's in a name?* The FOA reference for fiber optics. ${RETRIEVED} https://www.thefoa.org/tech/ref/termination/names.html`;
const FOA_COLORS = `Fiber Optic Association. (n.d.-d). *Fiber optic cable and connector color codes*. ${RETRIEVED} https://www.thefoa.org/tech/ColCodes.htm`;
const FOA_BEND = `Fiber Optic Association. (n.d.-e). *Fiber optic cable bend radius or diameter*. The FOA reference for fiber optics. ${RETRIEVED} https://www.thefoa.org/tech/ref/install/bend_radius.html`;
const FOA_CONNID = `Fiber Optic Association. (n.d.-f). *Fiber optic connector identifier*. ${RETRIEVED} https://www.thefoa.org/tech/connID.htm`;
const FOA_SAFETY = `Fiber Optic Association. (n.d.-g). *Fiber optic safety, part 1: Safety in fiber optic installation*. The FOA reference for fiber optics. ${RETRIEVED} https://www.thefoa.org/tech/ref/safety/safe.html`;
const FOA_SCOPE = `Fiber Optic Association. (n.d.-h). *Visual inspection and cleaning of connectors*. The FOA reference for fiber optics. ${RETRIEVED} https://www.thefoa.org/tech/ref/testing/test/scope.html`;
const FDA_2024 =
  "U.S. Food and Drug Administration. (2024, November 13). *Laser products and instruments*. https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/laser-products-and-instruments";

// Audio over copper (research file 02)
const MACKIE = "Mackie. (n.d.). *Balanced vs unbalanced connectors*. https://mackie.com/en/blog/all/balanced_vs_unbalanced_connectors.html";
const MACATEE_2002 =
  "Macatee, S. (2002). *Grounding and shielding audio devices* (RaneNote 151, revised ed.). Rane Corporation. https://www.ranecommercial.com/legacy/pdf/ranenotes/Grounding_&_Shielding_of_Audio_Devices.pdf";
const RANE_2015 = "Rane Corporation. (2015). *Sound system interconnection* (RaneNote 110). https://www.ranecommercial.com/legacy/pdf/ranenotes/Sound_System_Interconnection.pdf";
const SENNHEISER_MK4 =
  "Sennheiser. (2026). *MK 4 & MK 8 studio microphones: Instruction manual* (02/2026). https://docs.cloud.sennheiser.com/en-us/mk-4-mk-8/mk-4-mk-8_instruction_manual_02_2026_en.pdf";
const SCHOEPS = "Schoeps. (n.d.). *Phantom power P48/P12*. https://schoeps.de/en/knowledge/knowledge-base/technical-basics/phantom-power-p48p12.html";
const CLEARCOM_MADI =
  "Clear-Com. (2019b, April 6). *Other: General information on MADI*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158847191";
const CLEARCOM_CCU_PL =
  "Clear-Com. (2019c, April 6). *Partyline: Camera CCU interfacing to Clear-Com party-line*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158840734";
const CLEARCOM_PL_PINOUT =
  "Clear-Com. (2019d, April 6). *Partyline: What is the 3-pin XLR line pin-out?* Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158784598";
const CLEARCOM_IFB =
  "Clear-Com. (2019e, April 6). *Wireless: Can I connect a PTX-3 IFB transmitter directly to a Matrix +3 or Eclipse port output?* Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158809612";
const CLEARCOM_HELIX = "Clear-Com. (2022, April 5). *HelixNet powerline XLR pin-out*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/513933672";
const CLEARCOM_XLR_DIFF =
  "Clear-Com. (2024a, December 16). *General: What is the difference between an XLR connector wired for balanced audio and one wired for Clear-Com partyline intercom?* Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158808157";
const CLEARCOM_VSERIES =
  "Clear-Com. (2024d, April 2). *Matrix: What are the correct pin outs for balanced microphone input on a V-Series panel?* Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158850612";
const CLEARCOM_HEADSETS =
  "Clear-Com. (2026c, June 4). *Matrix: What are the headset pin outs for 4 pin XLR, 5 pin XLR and 5 pin Din units*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158808488";
const LEERMAN_2013 =
  "Leerman, C. (2013, March 28). *Pro production: Understanding DMX lighting control* (p. 2). ProSoundWeb. https://www.prosoundweb.com/pro-production-understanding-dmx-lighting-control/2/";
const ENTTEC_2026 = "ENTTEC. (2026, July 19). *Can I use a microphone cable for DMX?* ENTTEC Support. https://support.enttec.com/dmx/dmx-basics/can-i-use-a-microphone-cable-for-dmx";
const ESTA_LISTING = `Entertainment Services and Technology Association. (n.d.). *Published documents*. ESTA Technical Standards Program. ${RETRIEVED} https://tsp.esta.org/tsp/documents/published_docs.php`;
const BOHN_2014 = "Bohn, D. (2014). *Interfacing AES3 & S/PDIF* (RaneNote 149). Rane Corporation. https://www.ranecommercial.com/legacy/pdf/ranenotes/Interfacing_AES3_&_SPDIF.pdf";
const RME_ADI648 = "RME. (n.d.). *User's guide: ADI-648 multichannel audio digital interface*. https://www.rme-audio.de/downloads/adi648_e.pdf";

/** The marker every lesson needing a qualified reviewer opens with (authoring checklist, section 3). */
const QR = "> **Before release:** needs a qualified reviewer (QR): a broadcast engineer.";

export const CABLES_AND_CONNECTORS_COURSE: AuthoredCourse = {
  title: "Cables and Connectors",
  description:
    "The first thing a new crew member is handed, and the thing every course in The Crew Behind the Show assumes. Pick up a cable on a broadcast truck, a stage or an arena floor and say what it carries, what connector is on each end and why, how far it can run, what breaks it, and what must never be plugged into it. The course reads makers' spec sheets and free reference pages to teach impedance and why a cable that fits can still be wrong; SDI on 75-ohm coax and BNC from SD to 12G, and where HDMI and DisplayPort stop; reference, timecode and return video; triax, the SMPTE hybrid fiber camera cable and tactical fiber; single-mode and multimode fiber, LC, SC and ST, inspection, loss budgets and laser safety; and balanced audio, the XLR family that carries mic audio, party-line intercom and DMX, AES3, word clock and MADI. Later sections cover network cable, power connectors and who may connect them, control and data lines, and the craft of coiling, labeling and testing, ending in a hands-on capstone on video. Vendor products are worked examples, not endorsements. Every lesson that needs a broadcast engineer's sign-off says so at the top.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: Why the cable matters
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-cable-carries",
      title: "1 · What a cable carries",
      section: "1 · Why the cable matters",
      body: `**What this course is for.** On a broadcast truck, a stage or an arena floor, cable is everywhere, and most of it looks alike. By the end of this course you should be able to pick one up and say what it carries, what connector is on each end and why, how far it can run, what breaks it, and what must never be plugged into it. Every other course in The Crew Behind the Show assumes you can.

**Where it sits.** *Break Into Sports & Media Broadcasting* lesson "6 · Signal flow and audio fundamentals" follows a signal from source to mixer to recorder. This course is the copper, glass and connectors under that chain. CREW-05, *Arena transmission*, goes deeper on video over IP and fiber, and this course points to its lessons by title rather than repeating them.

**What it is not.** It is not an electrical course. The power section never teaches anyone to tie in to a power source, open a panel or build a feeder. Every product named is a worked example of a spec sheet you can read, not an endorsement.

**The first idea: impedance.** Coax has a characteristic impedance, measured in ohms. It "is a relationship between the capacitance per unit length and the inductance per unit length," and it is set by the ratio of the inner and outer conductor diameters and by the dielectric constant of the insulation between them (Coaxicom, 2015). So impedance is built into how the cable is made.

**Two numbers rule coax.** The two main coax impedances are 50 and 75 ohms. Fifty ohms is used mainly for data signals and 75 ohms for video (Coaxicom, 2015). Fifty is a compromise: the lowest theoretical loss comes at 77.5 ohms and the most power at 30 ohms, and their average, 53.75, was rounded to 50. Seventy-five ohms sits close to the low-loss point (Coaxicom, 2014).

| | 50-ohm coax | 75-ohm coax |
|---|---|---|
| Typical use | GPS antennas, cell towers, base stations | Video |
| Example cables | RG58, RG174, RG213 | RG59, RG6 |
| Typical connectors | SMA, TNC, N | Most often BNC |

Source: Coaxicom (2015), applications table.

Belden's 1694A, the video coax this course uses as its worked example, is sold as "75 Ohm SDI Coax, RG-6, 18 AWG" (Belden, 2026a, p. 1). Its impedance is in its name.

**Audio pairs have impedance too.** Belden's 1800F is a digital microphone cable, one shielded pair, with a nominal impedance of 110 ohms (Belden, 2025a, p. 1). Belden's 8412 is an analog microphone cable, two conductors under a braid, for "balanced analog audio," at 67 ohms (Belden, 2025b, p. 1).

**Why that matters, reasoned.** Both are sold as microphone cable, and both are a pair under a shield. Yet one is 67 ohms and the other 110. So two cables can look alike, and be sold for the same kind of job, and still be built for different signals. A cable that fits the jack is not proof that it is the right cable. Lesson 2 shows what goes wrong when the impedance is wrong, and lesson 18 shows which digital audio signal expects 110 ohms.

**Find the sheet.** A maker's spec sheet states the impedance, the loss and what the cable is for. Lesson 3 reads one line by line.

:::reveal What are the two main coax impedances, and which is used for video? ||| 50 and 75 ohms; 75 ohms is used for video, 50 ohms mainly for data and RF (Coaxicom, 2015).

:::reveal Belden's 8412 and 1800F are both microphone cable. What separates them? ||| Impedance: 8412 (analog) is 67 ohms and 1800F (digital) is 110 ohms (Belden, 2025a, 2025b).

## Sources
- ${COAXICOM_2015} Locator: opening paragraphs; glossary entry "Impedance"; applications table.
- ${COAXICOM_2014} Locator: body text, the 77.5, 30 and 53.75 ohm figures.
- ${BELDEN_1694A} Locator: p. 1, product title and "Product Description".
- ${BELDEN_1800F} Locator: p. 1, title and "Electrical Characteristics: Electricals".
- ${BELDEN_8412} Locator: p. 1, title, "Suitable Applications" and "Electricals".`,
    },
    {
      slug: "it-fits-and-it-reflects",
      title: "2 · It fits, and it reflects",
      section: "1 · Why the cable matters",
      recallContent: [
        {
          prompt: "Why was 50 ohms chosen for RF coax, according to Coaxicom?",
          answer: "It is a compromise: lowest loss is at 77.5 ohms and most power at 30 ohms; their average, 53.75, was rounded to 50.",
        },
        {
          prompt: "Belden's 1800F and 8412 are both sold as microphone cable. What are their impedances?",
          answer: "1800F (digital) is 110 ohms; 8412 (analog) is 67 ohms.",
        },
      ],
      body: `${QR}

**What a mismatch does.** When a coax line ends in a resistance that does not equal its characteristic impedance, it "creates a reflected wave that returns back down the cable to the sending end," and that wave interferes with the one still travelling forward (Canare Electric, n.d.-a, p. 2). Part of your signal bounces back instead of arriving.

**Two ways to measure it.** Makers state a match as VSWR (voltage standing-wave ratio) or as return loss in decibels. Return loss compares the reflected wave to the travelling wave, so a higher return-loss number means a better match. Canare's conversion table (Canare Electric, n.d.-a, p. 2):

| VSWR | Return loss |
|---|---|
| 2 | 9.54 dB |
| 1.5 | 13.98 dB |
| 1.2 | 20.83 dB |
| 1.1 | 26.44 dB |
| 1.05 | 32.26 dB |

VSWR "generally increases with frequency and higher values are not desirable" (Coaxicom, 2015). Hold on to that: the faster the signal, the more a small mismatch costs.

**The BNC trap.** BNC connectors come in 50-ohm and 75-ohm versions. Do they fit together? DDK, a connector maker, says its "BNC 50 ohm connector is intermateable with BNC75 (75 ohm) style connector." It adds that its 50-ohm BNC "is capable of mating with 75 ohm cable for frequencies less than 200MHz," and that above 200 MHz its 75-ohm series should be used (DDK Ltd., n.d.). One reseller's page for a 75-ohm terminator says 75-ohm BNCs reach their impedance with "a reduced dielectric" and "will mate with 50 Ohm BNC connectors with no damage" (Markertek, n.d.). That is one seller describing one product, not a rule for every part. Whether pushing a 50-ohm plug into a current 75-ohm jack can damage it is a question this course leaves open.

So the honest summary is neither "they won't connect" nor "it makes no difference." **It fits, and it reflects.**

**How much it reflects, worked out.** This is standard transmission-line arithmetic, not a figure from a source read for this course, and the reviewer will confirm it. The reflection at a joint between a 75-ohm line and a 50-ohm part is (75 minus 50) divided by (75 plus 50), which is 0.2. A reflection of 0.2 is a VSWR of (1 + 0.2) divided by (1 minus 0.2), which is 1.5. Canare's table pairs VSWR 1.5 with 13.98 dB of return loss. Belden asks its own 1694A video coax to manage at least 15 dB even at its worst band, 4.5 to 6 GHz (Belden, 2026a, p. 1). So, if the arithmetic holds, a single 50-ohm barrel or jumper in an SDI path is a worse match than the cable itself is allowed to be. Lesson 4 shows that SDI now runs into the gigahertz, well past DDK's 200 MHz line.

**Not every connector even fits.** The N connector comes in both impedances too. Canare's 75-ohm N follows the IEC 169-16 75-ohm shape, and "the 50Ω N and other connectors that do not conform to this specification cannot be connected" (Canare Electric, n.d.-a, p. 11). Rohde & Schwarz is blunter: 75- and 50-ohm Type N connectors "are not compatible despite sharing a common thread size," because the 50-ohm male pin is larger than the 75-ohm female socket, "resulting in damage if connected together" (Rohde & Schwarz, 2015, p. 5).

**The same lesson, later in the course.** A word clock line wants 75-ohm cable and a 75-ohm terminator, and the 50-ohm BNC cable from a computer store fits it (lesson 18). Some lighting makers put 3-pin XLRs on DMX gear, so a mic cable plugs straight in, and it is the wrong cable (lesson 17). Each time, the plug is not the test. The label and the spec sheet are.

:::reveal What does DDK say about mating its 50-ohm BNC with 75-ohm parts? ||| They are intermateable, and its 50-ohm BNC can mate with 75-ohm cable below 200 MHz; above that, use its 75-ohm series (DDK Ltd., n.d.).

:::reveal Which way is better: higher or lower return loss? ||| Higher. Return loss measures how small the reflected wave is against the travelling wave, so a bigger number means a better match (Canare Electric, n.d.-a, p. 2).

:::reveal Why must a 50-ohm Type N plug never go into a 75-ohm Type N jack? ||| The 50-ohm male pin is larger than the 75-ohm female socket, "resulting in damage if connected together" (Rohde & Schwarz, 2015, p. 5).

## Sources
- ${CANARE_CONNECTORS} Locator: PDF p. 2, "Voltage Standing-wave Ratio (VSWR) and Return Loss" and "Fig. 2 VSWR to Return Loss Conversion Table"; PDF p. 11, caution under NCJ-BCJR.
- ${COAXICOM_2015} Locator: glossary entry "VSWR".
- ${DDK_BNC} Locator: features list.
- ${MARKERTEK} Locator: "BNC-TP2 Overview".
- ${BELDEN_1694A} Locator: p. 1, "Return Loss".
- ${ROHDE_2015} Locator: p. 5, section 3.1, notes 1 and 2.`,
    },
    {
      slug: "loss-shielding-and-the-spec-sheet",
      title: "3 · Loss, shielding and the spec sheet",
      section: "1 · Why the cable matters",
      recallContent: [
        {
          prompt: "What happens when a coax line is terminated in a resistance that does not match its impedance?",
          answer: "A reflected wave returns down the cable to the sending end and interferes with the travelling wave (Canare).",
        },
        {
          prompt: "What is the short summary of plugging a 50-ohm BNC into a 75-ohm video line?",
          answer: "It fits, and it reflects: DDK says the two intermate, but the mismatch reflects signal, and more so at higher frequencies.",
        },
      ],
      body: `**Shielding keeps signal in and noise out.** A coax's outer conductor shields "to keep interfering signals from getting in and to keep signal from leaking out." Shielding effectiveness is measured in decibels, higher is better, and it rises with how dense the shield is (Coaxicom, 2015).

**Three things a maker changes.** Canare names three parts that set a video coax apart (Canare Electric, n.d.-d, "Technical Note"):

| Part | The choice | The trade |
|---|---|---|
| Center conductor | Solid or stranded | Solid for low loss, stranded for flexibility |
| Insulation | Foamed or highly foamed | Lower loss, but "weak to external pressure" |
| Shield | Braid with aluminum foil | "Perfect screening," but "not suitable for repeated bending and mobile applications" |

Belden's 1694A has a foil shield plus a 95% tinned copper braid. Belden's 4794R, built for 12G-SDI, adds a second foil, which Belden calls "Tri-Shield" (Belden, 2026a, p. 1; Belden, 2026b, p. 1).

**Loss grows with frequency.** Attenuation is loss of power, usually given in decibels per length of cable, and it "increases as frequency increases" (Coaxicom, 2015). Belden's figures for 1694A show how fast (Belden, 2026a, pp. 1 to 2):

| Frequency | 1694A loss per 100 ft |
|---|---|
| 270 MHz | 3.17 dB |
| 750 MHz | 5.4 dB |
| 1500 MHz | 7.8 dB |
| 3000 MHz | 11.5 dB |
| 6000 MHz | 17.7 dB |

4794R, with a 16 AWG center conductor against 1694A's 18 AWG, loses 12.47 dB per 100 ft at 6000 MHz and 19.45 dB at 12000 MHz (Belden, 2026b, pp. 1 to 2). Canare quotes its cables per 100 meters at 6 GHz: 68.5 dB for L-3.3CUHD, 39.5 dB for L-5.5CUHD and 28.5 dB for L-8CUHD (Canare Electric, n.d.-d).

**What the numbers tell you, reasoned.** Loss is quoted per 100 feet or per 100 meters, so doubling a run doubles its loss in decibels. To compare Belden with Canare, convert: one meter is 3.281 feet, so 17.7 dB per 100 ft is about 58 dB per 100 m. Against L-5.5CUHD's 39.5 dB per 100 m, Canare's 12G cable loses about a third less at 6 GHz. Less loss per meter means a longer run before the signal is too weak, and lesson 5 turns that into distances.

**Reading a coax spec sheet.** Here is what 1694A's sheet says, and what each line means to you.

- **Suitable applications.** "Digital Video, 6 Gb/s UHDTV, HD-SDI 1080p" (Belden, 2026a, p. 1). 12G is not in the list. The 4794R sheet lists "4K Single-link 12 Gb/s UHDTV" (Belden, 2026b, p. 1). So 1694A is not sold as a 12G cable. Lesson 5 explains why some equipment makers still quote 12G distances over it.
- **Return loss.** At least 23 dB from 5 to 1600 MHz, 21 dB from 1600 to 4500 MHz and 15 dB from 4500 to 6000 MHz. 4794R holds 15 dB all the way to 12000 MHz (Belden, 2026a, p. 1; Belden, 2026b, p. 1).
- **Impedance:** 75 ohms nominal. **Capacitance:** 16.2 pF per foot.
- **Velocity of propagation:** 82% (4794R: 85%). That is "the transmission speed of electrical energy in a determined length of cable compared to the speed of light" (Coaxicom, 2015).
- **Minimum bend radius** during installation: 2.75 in (69.9 mm). **Maximum pull tension:** 69 lb (31 kg) (Belden, 2026a, p. 2).

**Why velocity matters.** Canare gives propagation delay by insulation: solid polyethylene 5.0 ns per meter, foamed 4.2, highly foamed 3.7, and warns that "large differences in delay can cause transmission errors if they exceed the receiver delay tolerance" (Canare Electric, n.d.-d). Worked out, 82% of the speed of light is about 4.1 ns per meter, in line with Canare's foamed figure. Two signals that must arrive together should not travel on very different cables.

**Sheets change.** The 1694A sheet read for this course is revision 0.716, dated May 27, 2026 (Belden, 2026a, p. 2). Check the revision on the sheet you are reading.

:::reveal Does loss in coax rise or fall as frequency rises? ||| It rises: attenuation "increases as frequency increases" (Coaxicom, 2015). 1694A loses 3.17 dB per 100 ft at 270 MHz and 17.7 dB at 6000 MHz.

:::reveal Is 12G-SDI in the suitable applications on Belden's 1694A sheet? ||| No. It lists "Digital Video, 6 Gb/s UHDTV, HD-SDI 1080p" (Belden, 2026a, p. 1).

## Sources
- ${COAXICOM_2015} Locator: "Shielding Effectiveness"; glossary entries "Attenuation" and "Velocity of Propagation (VP)".
- ${CANARE_ULTRA} Locator: "Technical Note"; specifications table and "75 ohm Coax Cable Nominal Attenuation (dB/100m)"; "What is Propagation Delay?" table.
- ${BELDEN_1694A} Locator: p. 1, "Product Overview", "Outer Shield" and "Return Loss"; pp. 1 to 2, "Attenuation" table; p. 2, "Electricals", "Mechanical Characteristics" and "History".
- ${BELDEN_4794R} Locator: p. 1, "Product Overview", "Outer Shield" and "Return Loss"; pp. 1 to 2, "Attenuation" table and "Electricals".`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Why the cable matters",
      section: "1 · Why the cable matters",
      body: "A graded check on impedance, what a mismatch does, and how to read loss, shielding and a coax spec sheet. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "According to Coaxicom, characteristic impedance is a relationship between what?", options: ["Capacitance and inductance per unit length", "Voltage and current at the two cable ends", "Conductor resistance and jacket thickness", "Signal frequency and the length of the run"], correctIndex: 0, explanation: "Coaxicom (2015): impedance \"is a relationship between the capacitance per unit length and the inductance per unit length.\" Length, jacket and end voltages do not set it.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "Which features of a coax set its characteristic impedance?", options: ["The jacket color and the printed part number", "The conductor diameter ratio and the dielectric", "The length of the run and the connectors on it", "The braid coverage and the jacket's material"], correctIndex: 1, explanation: "Coaxicom (2015): impedance is set by the ratio of the inner and outer conductor diameters and the dielectric constant of the insulation.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "Which two impedances does Coaxicom call the main coax impedances?", options: ["60 and 90 ohms", "67 and 110 ohms", "50 and 75 ohms", "100 and 120 ohms"], correctIndex: 2, explanation: "The two main coax impedances are 50 and 75 ohms (Coaxicom, 2015). 67 and 110 ohms are the two Belden microphone pairs in lesson 1.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "Which coax impedance does Coaxicom say is used for video?", options: ["50 ohms", "110 ohms", "30 ohms", "75 ohms"], correctIndex: 3, explanation: "Coaxicom (2015): 75 ohms for video signal applications, 50 ohms mainly for data. 30 ohms is the theoretical maximum-power point.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "What does Coaxicom say 50-ohm coax is used for mainly?", options: ["Data signal applications", "Analog video between rooms", "Balanced microphone audio", "Timecode and reference sync"], correctIndex: 0, explanation: "Coaxicom (2015): 50 ohms is used mainly for data signal applications; 75 ohms for video.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "Why is 50 ohms called a compromise?", options: ["It splits 75-ohm and 25-ohm cable", "It averages best loss and best power", "It is the cheapest cable to produce", "It is the most a BNC can ever carry"], correctIndex: 1, explanation: "Coaxicom (2014): minimum attenuation is at 77.5 ohms and maximum power at 30 ohms; their average, 53.75, was rounded to 50.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "At what impedance does Coaxicom place the theoretical minimum attenuation?", options: ["30 ohms", "53.75 ohms", "77.5 ohms", "110 ohms"], correctIndex: 2, explanation: "Minimum attenuation is at 77.5 ohms (Coaxicom, 2014). 30 ohms is maximum power, and 53.75 is the average of the two.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "At what impedance does Coaxicom place the theoretical maximum power?", options: ["77.5 ohms", "53.75 ohms", "75 ohms", "30 ohms"], correctIndex: 3, explanation: "Maximum power is at 30 ohms (Coaxicom, 2014). 77.5 ohms is the minimum-attenuation point.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "Why does 75 ohms suit video, by Coaxicom's account?", options: ["It sits near the minimum-loss point", "It carries the most power of any value", "It is the average of 50 and 100 ohms", "It matches a microphone pair exactly"], correctIndex: 0, explanation: "Coaxicom (2014): 75 ohms is close to the minimum-attenuation point of 77.5 ohms. Maximum power is at 30 ohms.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "Which cables does Coaxicom's table list as 75-ohm video coax?", options: ["RG58 and RG174", "RG59 and RG6", "RG213 and RG58", "RG174 and RG213"], correctIndex: 1, explanation: "Coaxicom (2015): 75-ohm coax such as RG59 and RG6 carries video. RG58, RG174 and RG213 are its 50-ohm examples.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "Which connector does Coaxicom say 75-ohm video coax most often uses?", options: ["SMA", "TNC", "BNC", "N"], correctIndex: 2, explanation: "Coaxicom (2015): 75-ohm video coax most often uses BNC. SMA, TNC and N appear with its 50-ohm examples.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "Which uses does Coaxicom list for 50-ohm coax?", options: ["SDI video from a camera to a switcher", "Analog microphone lines on a stage", "Word clock between digital consoles", "GPS antennas, cell towers, base stations"], correctIndex: 3, explanation: "Coaxicom (2015): 50-ohm coax is typical for GPS antennas, cell towers and base stations. SDI and word clock are 75-ohm signals.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "How does Belden describe its 1694A cable?", options: ["75 Ohm SDI Coax, RG-6, 18 AWG", "50 Ohm RF Coax, RG-58, 20 AWG", "110 Ohm digital pair, 24 AWG", "75 Ohm camera triax, 14 AWG"], correctIndex: 0, explanation: "Belden (2026a, p. 1): \"75 Ohm SDI Coax, RG-6, 18 AWG.\" Its impedance is in its name.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "What is the nominal impedance of Belden's 1800F digital microphone cable?", options: ["67 ohms", "110 ohms", "75 ohms", "50 ohms"], correctIndex: 1, explanation: "Belden (2025a, p. 1): 1800F's nominal characteristic impedance is 110 ohms. The analog 8412 is 67 ohms.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "What is the nominal impedance of Belden's 8412 analog microphone cable?", options: ["110 ohms", "75 ohms", "67 ohms", "50 ohms"], correctIndex: 2, explanation: "Belden (2025b, p. 1): 8412 is 67 ohms nominal. The digital 1800F is 110 ohms.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "What application does Belden's 8412 sheet list?", options: ["Digital audio on a 110-ohm pair", "6 Gb/s UHDTV and HD-SDI video", "Antenna feeds for wireless mics", "Balanced analog audio"], correctIndex: 3, explanation: "Belden (2025b, p. 1) lists 8412 for \"balanced analog audio.\" The 110-ohm pair is 1800F.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "What does lesson 1 conclude from comparing Belden's 8412 and 1800F?", options: ["A cable that fits is not proof it is right", "Every microphone cable shares one impedance", "Digital audio cannot run on a shielded pair", "Analog cable always outperforms digital"], correctIndex: 0, explanation: "Both are sold as microphone cable and both are a shielded pair, yet one is 67 ohms and the other 110. So fitting the jack does not prove the cable is right.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "Which of these does the course say its power section never teaches?", options: ["Reading a coax spec sheet", "Building a power feeder", "Naming a cable's connector", "Saying how far a cable runs"], correctIndex: 1, explanation: "Lesson 1: the power section never teaches anyone to tie in to a power source, open a panel or build a feeder. The other three are what the course is for.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "How does the course treat the products it names?", options: ["As the brands every crew is required to use", "As sponsors who checked the lessons' facts", "As worked examples, not as endorsements", "As the only parts that meet SMPTE rules"], correctIndex: 2, explanation: "Lesson 1: every product named is a worked example of a spec sheet you can read, not an endorsement.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "Which lesson does this course build on as its prerequisite?", options: ["Arena transmission, \"Fiber on the map\"", "Light on Set, its first lesson on lamps", "Rigging, \"Which rulebook applies\"", "Broadcasting, \"Signal flow and audio\""], correctIndex: 3, explanation: "Break Into Sports & Media Broadcasting lesson \"6 · Signal flow and audio fundamentals\" follows a signal through the chain; this course is the cable under it.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "Which course does lesson 1 point to for video over IP and fiber in depth?", options: ["CREW-05, Arena transmission", "CREW-01, Rigging for crews", "CREW-03, Light on Set", "CREW-06, Renting out gear"], correctIndex: 0, explanation: "CREW-05, Arena transmission, goes deeper on video over IP and fiber; this course names its lessons rather than repeating them.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "What does a mismatched termination create, according to Canare?", options: ["A short between the core and the shield", "A reflected wave back toward the sender", "A DC voltage on the cable's outer braid", "A ground loop between the two devices"], correctIndex: 1, explanation: "Canare Electric (n.d.-a, p. 2): a termination not equal to the line's impedance \"creates a reflected wave that returns back down the cable to the sending end.\"", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "What does the reflected wave do to the wave still travelling forward?", options: ["Boosts it, doubling the received level", "Cancels the noise picked up on the run", "Interferes with it in a standing wave", "Turns it into a balanced signal pair"], correctIndex: 2, explanation: "Canare (n.d.-a, p. 2): the reflected wave interferes with the travelling wave and forms a standing wave.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "What does return loss compare?", options: ["A cable's length with its bend radius", "A DA's input level with its output", "Shield coverage with braid density", "The reflected wave with the forward one"], correctIndex: 3, explanation: "Return loss measures the size of the reflected wave against the travelling wave (Canare Electric, n.d.-a, p. 2).", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "What does a higher return-loss number mean?", options: ["A better match, with less reflected", "A worse match, with more reflected", "A longer cable with more total loss", "A denser shield with more coverage"], correctIndex: 0, explanation: "Return loss compares the reflected wave to the travelling wave, so a higher number means a smaller reflection and a better match.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "In Canare's conversion table, what return loss goes with a VSWR of 1.5?", options: ["9.54 dB", "13.98 dB", "20.83 dB", "26.44 dB"], correctIndex: 1, explanation: "Canare (n.d.-a, p. 2): VSWR 1.5 = 13.98 dB. VSWR 2 = 9.54 dB, 1.2 = 20.83 dB and 1.1 = 26.44 dB.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "In Canare's table, what return loss goes with a VSWR of 2?", options: ["13.98 dB", "32.26 dB", "9.54 dB", "46.06 dB"], correctIndex: 2, explanation: "Canare (n.d.-a, p. 2): VSWR 2 = 9.54 dB, the worst match in the table.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "In Canare's table, what return loss goes with a VSWR of 1.1?", options: ["20.83 dB", "13.98 dB", "40.09 dB", "26.44 dB"], correctIndex: 3, explanation: "Canare (n.d.-a, p. 2): VSWR 1.1 = 26.44 dB. 1.2 is 20.83 dB and 1.02 is 40.09 dB.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "Which VSWR from Canare's table is the closest match?", options: ["1.05", "1.5", "1.2", "2"], correctIndex: 0, explanation: "The lower the VSWR, the higher the return loss: 1.05 is 32.26 dB, against 20.83 dB for 1.2, 13.98 dB for 1.5 and 9.54 dB for 2.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "What does Coaxicom say happens to VSWR as frequency rises?", options: ["It generally falls", "It generally rises", "It stays the same", "It drops to zero"], correctIndex: 1, explanation: "Coaxicom (2015): VSWR \"generally increases with frequency and higher values are not desirable.\"", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "What does DDK say about its 50-ohm BNC and 75-ohm BNC connectors?", options: ["They cannot be mated", "They mate only via adapter", "They are intermateable", "They mate above 200 MHz"], correctIndex: 2, explanation: "DDK Ltd. (n.d.): its \"BNC 50 ohm connector is intermateable with BNC75 (75 ohm) style connector.\"", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "Below what frequency does DDK say its 50-ohm BNC can mate with 75-ohm cable?", options: ["12 GHz", "750 MHz", "2 GHz", "200 MHz"], correctIndex: 3, explanation: "DDK Ltd. (n.d.): its 50-ohm BNC \"is capable of mating with 75 ohm cable for frequencies less than 200MHz.\"", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "What does DDK tell users to choose above 200 MHz?", options: ["Its BNC75 series", "Its 50-ohm series", "An N-type plug", "An SMA adapter"], correctIndex: 0, explanation: "DDK Ltd. (n.d.): above 200 MHz its BNC75 series should be used.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "How does lesson 2 treat Markertek's statement that its 75-ohm BNCs mate with 50-ohm ones \"with no damage\"?", options: ["As a rule that covers every BNC made", "As one seller on one product, not a rule", "As a SMPTE requirement for terminators", "As a reason to mix 50 and 75 ohm parts"], correctIndex: 1, explanation: "It is a reseller's text about one product (Markertek, n.d.). Whether a 50-ohm plug can damage a current 75-ohm jack is left open.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "How does Markertek's page say 75-ohm BNCs reach their impedance?", options: ["A larger center pin", "A thicker outer shell", "A reduced dielectric", "A gold-plated contact"], correctIndex: 2, explanation: "Markertek (n.d.): 75-ohm BNCs use \"a reduced dielectric to achieve 75 ohm nominal impedance.\"", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "Which phrase sums up a 50-ohm BNC part in a 75-ohm video line?", options: ["It won't fit at all", "It fits with no effect", "It fits, but shorts out", "It fits, and it reflects"], correctIndex: 3, explanation: "DDK says the two intermate, and Canare explains the reflection a mismatch causes: it fits, and it reflects.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "In lesson 2's arithmetic, what is the reflection at a joint between a 75-ohm line and a 50-ohm part?", options: ["0.2", "0.5", "0.04", "1.5"], correctIndex: 0, explanation: "(75 minus 50) divided by (75 plus 50) = 25 / 125 = 0.2. The lesson flags this as standard arithmetic the reviewer will confirm.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "In lesson 2's arithmetic, a reflection of 0.2 is what VSWR?", options: ["1.2", "1.5", "2.0", "1.05"], correctIndex: 1, explanation: "(1 + 0.2) divided by (1 minus 0.2) = 1.2 / 0.8 = 1.5, which Canare's table pairs with 13.98 dB.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "What minimum return loss does Belden specify for 1694A from 4.5 to 6 GHz?", options: ["23 dB", "21 dB", "15 dB", "40 dB"], correctIndex: 2, explanation: "Belden (2026a, p. 1): 15 dB from 4500 to 6000 MHz, after 23 dB and 21 dB in the lower bands.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "Why does lesson 2 conclude a 50-ohm barrel is a worse match than 1694A is allowed to be?", options: ["A barrel doubles the VSWR at any rate", "SMPTE bans 50-ohm parts in SDI paths", "Each 50-ohm barrel adds 15 dB of loss", "About 14 dB is under the 15 dB floor"], correctIndex: 3, explanation: "VSWR 1.5 is about 14 dB of return loss (Canare's 13.98), below the 15 dB Belden requires of 1694A even at 4.5 to 6 GHz.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "What is the status of lesson 2's 75 against 50 ohm arithmetic?", options: ["Standard arithmetic for a reviewer", "A figure from Belden's spec sheet", "A measurement Canare published", "A limit printed in ST 2082-1"], correctIndex: 0, explanation: "The lesson says it is standard transmission-line arithmetic, not a figure from a source read for the course, and the reviewer will confirm it.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "What does Canare say about connecting its 75-ohm N connector to a 50-ohm N?", options: ["They mate with no effect", "They cannot be connected", "They mate below 200 MHz", "They need a 75-ohm barrel"], correctIndex: 1, explanation: "Canare (n.d.-a, p. 11): \"the 50Ω N and other connectors that do not conform to this specification cannot be connected.\"", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "Why does Rohde & Schwarz say a 50-ohm Type N plug damages a 75-ohm Type N jack?", options: ["Its thread is a different pitch", "The 75-ohm jack carries DC", "Its male pin is larger than the socket", "It has no dielectric inside"], correctIndex: 2, explanation: "Rohde & Schwarz (2015, p. 5): the male pin on 50-ohm Type N is larger than the female socket of 75-ohm Type N, \"resulting in damage if connected together.\"", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "What do 50-ohm and 75-ohm Type N connectors share, according to Rohde & Schwarz?", options: ["A common pin size", "A frequency limit", "A color code", "A common thread size"], correctIndex: 3, explanation: "Rohde & Schwarz (2015, p. 5): they \"are not compatible despite sharing a common thread size.\"", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "Which shape does Canare's 75-ohm N connector follow?", options: ["IEC 169-16 75-ohm", "SMPTE ST 2082-1", "TIA-568 Category 6A", "AES3 110-ohm pair"], correctIndex: 0, explanation: "Canare (n.d.-a, p. 11): its 75-ohm N follows the IEC 169-16 75-ohm shape.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "What does lesson 2 say is the real test of whether a cable is right?", options: ["Whether the plug seats and locks", "The label and the spec sheet", "Whether a picture appears at all", "Whether the jacket color matches"], correctIndex: 1, explanation: "\"Each time, the plug is not the test. The label and the spec sheet are.\"", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "Does pushing a 50-ohm BNC plug into a current 75-ohm jack damage it, per lesson 2?", options: ["Yes, it always bends the pin", "No, every maker says it is fine", "The course leaves it open", "Only above 200 MHz, says DDK"], correctIndex: 2, explanation: "Lesson 2 leaves it as an open question: only one reseller's statement about one product was read.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "What does a coax's outer conductor do as a shield, according to Coaxicom?", options: ["Carries the DC that powers a camera", "Sets the cable's impedance by itself", "Stiffens the cable against kinking", "Keeps noise out and signal from leaking"], correctIndex: 3, explanation: "Coaxicom (2015): the outer conductor shields \"to keep interfering signals from getting in and to keep signal from leaking out.\"", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "How is shielding effectiveness measured, and which way is better?", options: ["In decibels, higher is better", "In ohms, lower is better", "In percent, 75% is ideal", "In picofarads, lower is better"], correctIndex: 0, explanation: "Coaxicom (2015): shielding effectiveness is measured in dB, and higher is better.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What makes shielding effectiveness rise, according to Coaxicom?", options: ["A longer cable", "A denser shield", "A higher frequency", "A thicker jacket"], correctIndex: 1, explanation: "Coaxicom (2015): shielding effectiveness rises with shield density.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What does Canare say about solid and stranded center conductors?", options: ["Solid bends better, stranded loses less", "Solid carries power, stranded carries data", "Solid for low loss, stranded for flexing", "Solid is for outdoors, stranded indoors"], correctIndex: 2, explanation: "Canare (n.d.-d, \"Technical Note\"): solid for low loss, stranded for flexibility.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What drawback does Canare name for foamed and highly foamed insulation?", options: ["Higher loss than solid", "A lower impedance", "No BNC will fit it", "Weak to outside pressure"], correctIndex: 3, explanation: "Canare (n.d.-d): foamed insulation gives lower attenuation but is \"weak to external pressure.\"", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What caution does Canare give for a braid-and-foil shield?", options: ["Not for repeated bending or mobile use", "Not for fixed runs inside a building", "Not for signals faster than 270 Mb/s", "Not for crimped BNC connectors at all"], correctIndex: 0, explanation: "Canare (n.d.-d): braid with aluminum foil \"offers perfect screening\" but is \"not suitable for repeated bending and mobile applications.\"", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What does Belden's 4794R add to the foil and braid shield of 1694A?", options: ["A second braid of tinned copper", "A second foil, called Tri-Shield", "A steel armor layer for floors", "An aramid member for pulling"], correctIndex: 1, explanation: "Belden (2026b, p. 1): foil plus 95% braid plus a second foil, which Belden calls \"Tri-Shield.\"", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "How does Coaxicom define attenuation?", options: ["Power reflected back to the sender", "Delay of the signal per meter", "Loss of power, in dB per length", "Noise picked up from power lines"], correctIndex: 2, explanation: "Coaxicom (2015): attenuation is loss of power, usually given in dB per length of cable, and it increases with frequency.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What is Belden 1694A's nominal loss per 100 ft at 6000 MHz?", options: ["3.17 dB", "7.8 dB", "11.5 dB", "17.7 dB"], correctIndex: 3, explanation: "Belden (2026a, pp. 1 to 2): 17.7 dB per 100 ft at 6000 MHz; 3.17 at 270 MHz, 7.8 at 1500 MHz and 11.5 at 3000 MHz.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What is Belden 1694A's nominal loss per 100 ft at 270 MHz?", options: ["3.17 dB", "5.4 dB", "11.5 dB", "17.7 dB"], correctIndex: 0, explanation: "Belden (2026a): 3.17 dB per 100 ft at 270 MHz, rising to 17.7 dB at 6000 MHz.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What is Belden 4794R's nominal loss per 100 ft at 12000 MHz?", options: ["12.47 dB", "19.45 dB", "17.7 dB", "39.5 dB"], correctIndex: 1, explanation: "Belden (2026b): 19.45 dB per 100 ft at 12000 MHz and 12.47 dB at 6000 MHz.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What loss does Canare give for L-5.5CUHD per 100 m at 6 GHz?", options: ["68.5 dB", "28.5 dB", "39.5 dB", "58 dB"], correctIndex: 2, explanation: "Canare (n.d.-d): L-5.5CUHD 39.5 dB per 100 m at 6 GHz; L-3.3CUHD 68.5 and L-8CUHD 28.5.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "Loss is quoted per 100 ft or per 100 m. What happens to it in decibels when a run doubles?", options: ["It halves", "It stays put", "It squares", "It doubles"], correctIndex: 3, explanation: "Because loss is stated per unit length, twice the length means twice the decibels of loss.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "About how much is 1694A's 17.7 dB per 100 ft when stated per 100 m?", options: ["About 58 dB", "About 40 dB", "About 5 dB", "About 18 dB"], correctIndex: 0, explanation: "One meter is 3.281 ft, so 100 m is 328.1 ft: 17.7 x 3.281 is about 58 dB per 100 m.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "Against 1694A, how does Canare's L-5.5CUHD compare at 6 GHz?", options: ["About three times the loss", "About a third less loss", "Exactly the same loss", "About a tenth the loss"], correctIndex: 1, explanation: "About 58 dB per 100 m for 1694A against 39.5 dB for L-5.5CUHD: about a third less.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "Which applications does Belden's 1694A sheet list as suitable?", options: ["4K single-link 12 Gb/s and 8K quad-link", "Balanced analog audio and phantom power", "Digital video, 6 Gb/s UHDTV, HD-SDI 1080p", "RF antenna feeds and GPS receivers"], correctIndex: 2, explanation: "Belden (2026a, p. 1): \"Digital Video, 6 Gb/s UHDTV, HD-SDI 1080p.\" 12G is not in the list; it is on the 4794R sheet.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "Which Belden sheet lists \"4K Single-link 12 Gb/s UHDTV\" among its suitable applications?", options: ["1694A", "1800F", "8412", "4794R"], correctIndex: 3, explanation: "Belden (2026b, p. 1): the 4794R sheet lists 4K single-link 12 Gb/s and 8K quad-link UHDTV. 1694A's sheet does not list 12G.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What minimum return loss does 1694A's sheet give from 5 to 1600 MHz?", options: ["23 dB", "21 dB", "15 dB", "40 dB"], correctIndex: 0, explanation: "Belden (2026a, p. 1): 23 dB from 5 to 1600 MHz, 21 dB to 4500 MHz, 15 dB to 6000 MHz.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "Up to what frequency does 4794R hold its 15 dB minimum return loss?", options: ["6000 MHz", "12000 MHz", "4500 MHz", "1600 MHz"], correctIndex: 1, explanation: "Belden (2026b, p. 1): 15 dB from 4500 to 12000 MHz. 1694A's last band stops at 6000 MHz.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What is 1694A's nominal velocity of propagation?", options: ["85%", "76%", "82%", "66%"], correctIndex: 2, explanation: "Belden (2026a, p. 2): 82%. The 4794R is 85%.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "How does Coaxicom define velocity of propagation?", options: ["Share of the signal left after 100 ft", "Share of the core that the shield covers", "Ratio of capacitance to inductance", "Signal speed in the cable against light"], correctIndex: 3, explanation: "Coaxicom (2015): \"the transmission speed of electrical energy in a determined length of cable compared to the speed of light,\" usually a percentage.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What installation minimum bend radius does Belden give for 1694A?", options: ["2.75 in (69.9 mm)", "3.2 in (81 mm)", "6 in (152 mm)", "1.25 in (32 mm)"], correctIndex: 0, explanation: "Belden (2026a, p. 2): installation minimum bend radius 2.75 in (69.9 mm).", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What maximum pull tension does Belden give for 1694A?", options: ["25 lb (11 kg)", "69 lb (31 kg)", "150 lb (68 kg)", "16 lb (7 kg)"], correctIndex: 1, explanation: "Belden (2026a, p. 2): maximum pull tension 69 lb (31 kg).", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What capacitance does Belden give for 1694A?", options: ["82 pF per foot", "6.2 pF per foot", "16.2 pF per foot", "26.2 pF per foot"], correctIndex: 2, explanation: "Belden (2026a, p. 2): 16.2 pF/ft. 82 is its velocity of propagation in percent.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What propagation delay does Canare give for foamed polyethylene insulation?", options: ["5.0 ns per meter", "3.7 ns per meter", "8.2 ns per meter", "4.2 ns per meter"], correctIndex: 3, explanation: "Canare (n.d.-d): solid PE 5.0 ns/m, foamed PE 4.2 ns/m, highly foamed PE 3.7 ns/m.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "Why does Canare say differences in propagation delay matter?", options: ["Large gaps can cause transmission errors", "Delay is what sets a cable's impedance", "Delay is why loss rises with frequency", "Delay only matters for analog audio"], correctIndex: 0, explanation: "Canare (n.d.-d): \"large differences in delay can cause transmission errors if they exceed the receiver delay tolerance.\"", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "About how many nanoseconds per meter does a velocity of 82% work out to?", options: ["3.3 ns", "4.1 ns", "5.0 ns", "8.2 ns"], correctIndex: 1, explanation: "Light covers about 0.2998 m per ns; 82% of that is about 0.246 m per ns, or about 4.1 ns per meter, in line with Canare's foamed figure.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "What does lesson 3 tell you to check on any spec sheet you read?", options: ["Its print color", "Its page count", "Its revision", "Its file size"], correctIndex: 2, explanation: "Sheets change: the 1694A sheet read for the course is revision 0.716, dated May 27, 2026. Check the revision on the sheet you have.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
        ],
      },
    },
  ],
};
