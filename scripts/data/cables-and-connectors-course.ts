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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: Video over copper
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "sdi-on-coax-and-the-bnc",
      title: "4 · SDI on coax and the BNC",
      section: "2 · Video over copper",
      recallContent: [
        {
          prompt: "Is 12G-SDI among the suitable applications on Belden's 1694A sheet?",
          answer: "No. It lists \"Digital Video, 6 Gb/s UHDTV, HD-SDI 1080p\"; 12G is on the 4794R sheet.",
        },
        {
          prompt: "What does doubling a coax run do to its loss in decibels?",
          answer: "Doubles it, because loss is quoted per 100 ft or per 100 m.",
        },
      ],
      body: `**What SDI is.** SDI, the serial digital interface, carries video between broadcast gear as one stream of bits. SMPTE's free overview of its 12G standard says ST 2082-1 "defines a bit-serial data structure, electrical signal and coaxial cable interface," and that it "also specifies the electrical and physical characteristics of coaxial cables and connectors" (Society of Motion Picture and Television Engineers [SMPTE], 2018, p. 2). In other words, the standard covers the cable and the plug, not only the signal. The standards themselves are paywalled; this lesson takes its facts from SMPTE's free overviews and from makers' sheets.

**The rates.** SMPTE's overview of its fiber suite lists the SDI signals and their rates (SMPTE, 2017, p. 1). The names in the last column are the ones Canare uses in its distance table (Canare Electric, n.d.-d), plus 6G, which makers such as Camplex list beside 3G and 12G (Camplex, n.d.-c).

| Standard | Rate | Common name |
|---|---|---|
| ST 259 | 143 through 360 Mb/s | SD-SDI (270 Mb/s for 525 and 625 line) |
| ST 344 | 540 Mb/s | |
| ST 292-1 and -2 | 1.485 and 1.485/1.001 Gb/s | HD-SDI (1080i) |
| ST 424 | 2.970 and 2.970/1.001 Gb/s | 3G-SDI (1080p) |
| ST 2081-1 | 5.940 and 5.940/1.001 Gb/s | 6G-SDI |
| ST 2082-1 | 11.88 and 11.88/1.001 Gb/s | 12G-SDI (4K UHD) |

From HD up, each rate comes in two versions, one divided by 1.001. Gear is built to handle both: AJA's FiDO 12G converters detect and reclock 270 Mb/s, 1.483, 1.485, 2.967, 2.970, 5.934, 5.940, 11.868 and 11.880 Gb/s (AJA Video Systems, 2023, p. 9).

**One, two or four cables.** The ST 2082 suite maps picture formats onto "single-link, dual-link and quad-link" 12 Gb/s interfaces, and ST 2082-10 carries 2160-line formats on one 12G link (SMPTE, 2018, pp. 1, 3). So a 4K picture can travel on one 12G cable. Belden's 4794R sheet lists "8K Quad-link UHDTV" among its uses (Belden, 2026b, p. 1): four 12G links for one picture.

**Fiber carries the same signals.** ST 297-1 defines an optical fiber system for these same SDI signals, and ST 297-2 carries several SDI streams on one fiber (SMPTE, 2017, p. 1). Section 4 is about that fiber.

**What it looks like on a real back panel.** Sony's HXCU-FB80 camera control unit lists its SDI outputs as 0.8 Vp-p into 75 ohms on BNC connectors: HD-SDI per ST 292-1, SD-SDI per SMPTE 259M at 270 Mb/s, and 12G-SDI per ST 2082-1 (Sony Corporation, 2017, pp. 35 to 36). Seventy-five ohms, BNC: lesson 1's numbers on a working machine.

**The BNC for 12G.** A BNC is not just a BNC at these rates. Canare sells a BNC that is "12G-SDI 4K UHD Capable," "SMPTE ST-2082-1 Compliant," and "Specifically engineered for the Canare 12G-SDI Cables." Its smaller micro BNC is "Compatible with Amphenol HD-BNCs" and also ST 2082-1 compliant (Canare Corporation of America, n.d.-b).

**Match the plug to the cable.** Canare's crimp tables pair each BNC with specific cables, including Belden 1694A for one of its micro BNCs (Canare Corporation of America, n.d.-b). Reasoned from those tables: a BNC has to suit the cable it is crimped onto, not only its impedance. A 75-ohm BNC made for a thinner cable is the wrong part for a thicker one.

**Connectors have return loss too.** Canare quotes its 12G connectors' return loss by frequency. One right-angle micro BNC gives 24 dB at 3 GHz, 20 dB at 6 GHz and 13 dB at 12 GHz (Canare Corporation of America, n.d.-b). Lesson 2's rule holds: the higher the frequency, the harder a good match gets.

**Where to go deeper.** CREW-04, *Cinema-look camera rig*, lesson "7 · Outputs, timecode and genlock", shows which camera bodies give SDI, the locking BNC, and an HDMI-to-SDI converter. CREW-05, *Arena transmission*, lesson "12 · ST 2110: separate streams", shows how the audio embedded in SDI and the picture are split apart when video moves onto a network.

:::reveal Which SMPTE standard defines 12G-SDI, and what does it cover besides the signal? ||| ST 2082-1; it also specifies the electrical and physical characteristics of coaxial cables and connectors (SMPTE, 2018, p. 2).

:::reveal What does Sony list as the level and impedance of its CCU's SDI outputs? ||| 0.8 Vp-p into 75 ohms, on BNC (Sony Corporation, 2017, pp. 35 to 36).

## Sources
- ${SMPTE_2018} Locator: p. 1, "Document Overview"; p. 2, section 1; p. 3, section 2.
- ${SMPTE_2017} Locator: p. 1, "Documents in the SMPTE 297 Suite".
- ${CANARE_ULTRA} Locator: "Typical Transmission Distance as per SMPTE Standard," header rows.
- ${BELDEN_4794R} Locator: p. 1, "Product Overview".
- ${CAMPLEX_TACTICAL} Locator: "Signal Extender & Reel Systems".
- ${AJA_FIDO} Locator: p. 9, FiDO-T-12G "Reclocking".
- ${SONY_2017} Locator: pp. 35 to 36, "Specifications: Input/output connectors".
- ${CANARE_US_12G} Locator: "12G BNC Connectors"; micro BNC "Key Features"; connector and crimp-tool tables; micro right-angle BNC "Key Features".`,
    },
    {
      slug: "how-far-sdi-runs",
      title: "5 · How far SDI runs",
      section: "2 · Video over copper",
      recallContent: [
        {
          prompt: "What are the common names and rates for ST 424 and ST 2082-1?",
          answer: "3G-SDI at 2.970 Gb/s (and 2.970/1.001), and 12G-SDI at 11.88 Gb/s (and 11.88/1.001).",
        },
        {
          prompt: "Why does a BNC have to match the cable it is crimped onto, not only the impedance?",
          answer: "Canare's crimp tables pair each BNC with specific cables, so a part made for one cable is the wrong part for another.",
        },
      ],
      body: `${QR}

**There is no single answer.** "How far will this cable go?" depends on the rate, the cable and the receiver at the far end. This lesson shows why, using one maker's table and three published figures for one cable.

**How Canare computes its table.** Canare lists a "typical transmission distance" for each cable, computed as the length at which the cable's loss reaches SMPTE's typical figure at half the clock frequency (Canare Electric, n.d.-d). The loss points it uses:

| Signal | Loss point |
|---|---|
| 270 Mb/s | 30 dB at 135 MHz |
| HD-SDI | 20 dB at 750 MHz |
| 3G-SDI | 30 dB at 1.5 GHz |
| 12G-SDI | 40 dB at 6 GHz |

**Canare's typical distances, in meters** (Canare Electric, n.d.-d):

| Cable | 270 Mb/s | HD | 3G | 12G |
|---|---|---|---|---|
| L-4.5CHD | 415 | 114 | 119 | 74 |
| L-5.5CUHD | 566 | 150 | 157 | 101 |
| L-8CUHD | 789 | 217 | 225 | 140 |
| L-5.5CUHWS (mobile) | 441 | 117 | 120 | 70 |

Read across a row and the distance falls as the rate rises, as lesson 3's loss table predicts. Read down a column and L-8CUHD, the lowest-loss cable in lesson 3's figures, runs farthest. Compare L-5.5CUHD with its mobile sibling L-5.5CUHWS: 101 against 70 meters at 12G. Canare also says L-5.5CUHD is "Designed for fixed installation, please avoid repeated bending or external pressure" (Canare Electric, n.d.-d).

**Canare's own warning.** Under the table: "These values are not equivalent to actual transmission distances, which depends on the equalized distance of receiver." Check the receiver maker's equalized distance (Canare Electric, n.d.-d). Of L-5.5CUHD, it says it can carry 4K UHD on one link "100 m or longer," "Depending on receiving equipment."

**One cable, three answers.** Take Belden 1694A at 12G. Belden does not list 12G for it (lesson 3). Yet:

- AJA's 12GDA distribution amplifier equalizes 70 m of 1694A at 12 Gb/s, 120 m at 6 Gb/s, 190 m at 3 Gb/s and 405 m at 270 Mb/s (AJA Video Systems, n.d.).
- Semtech's GS12341 equalizer chip reaches 80 m at 11.88 Gb/s, 100 m at 5.94, 190 m at 2.97 and 450 m at 270 Mb/s, all on 1694A (Semtech, n.d.).
- Worked from Belden's own sheet with Canare's 12G loss point: 40 dB divided by 17.7 dB per 100 ft is about 226 ft, or about 69 m.

So the same cable has a 69, a 70 and an 80 meter answer at 12G. The difference is the receiver. AJA and Semtech can quote 12G over a cable Belden does not sell for 12G because their receivers equalize it.

**The same maker, three answers.** Canare publishes three different 12G figures for L-4.5CHD: 74 m in its Japanese table, 65 m on its US 12G solutions page, and 143 ft, about 44 m, on its US "Mastering" page. The US pages give no test conditions (Canare Electric, n.d.-d; Canare Corporation of America, n.d.-a, n.d.-b). Canare's US cable cards also list maximum distances, such as 335 ft for L-5.5CUHD, without naming the rate (Canare Corporation of America, n.d.-a). A distance with no rate and no receiver tells you very little.

**The rule to take away.** Read the cable sheet and the receiver sheet together, at the rate you are running.

**When copper runs out.** AJA's FiDO converters equalize coax inputs, reclock the signal, and carry 12G-SDI "up to 10km" on single-mode fiber (AJA Video Systems, 2023, p. 4). Sections 3 and 4 take the signal onto glass.

:::reveal What does Canare say its typical distances are not equivalent to? ||| Actual transmission distances, which depend on the equalized distance of the receiver (Canare Electric, n.d.-d).

:::reveal Give the three 12G reaches this lesson finds for Belden 1694A, and what explains the spread. ||| About 69 m (Belden's loss against Canare's 40 dB point), 70 m (AJA 12GDA) and 80 m (Semtech GS12341). The receiver's equalization explains it.

## Sources
- ${CANARE_ULTRA} Locator: "Typical Transmission Distance as per SMPTE Standard," including the "Cable Loss @ 1/2 Clock" row and the footnotes; "Key Features and Benefits" and notes for L-5.5CUHD.
- ${CANARE_US_12G} Locator: L-CHD "Key Features".
- ${CANARE_US_MASTERING} Locator: L-4.5CHD and L-5.5CUHD cable cards.
- ${AJA_12GDA} Locator: "Specifications: Cable Equalization (Belden 1694A coax)".
- ${SEMTECH} Locator: "Features: Automatic cable equalization".
- ${BELDEN_1694A} Locator: p. 1, "Product Overview"; pp. 1 to 2, "Attenuation" table.
- ${AJA_FIDO} Locator: p. 4, "Overview" and "Features".`,
    },
    {
      slug: "hdmi-and-displayport-where-they-stop",
      title: "6 · HDMI and DisplayPort: where they stop",
      section: "2 · Video over copper",
      recallContent: [
        {
          prompt: "What does Canare's footnote say decides the real SDI transmission distance?",
          answer: "The equalized distance of the receiver; its typical distances are not actual transmission distances.",
        },
        {
          prompt: "At 12G on Belden 1694A, what reach do AJA's 12GDA and Semtech's GS12341 quote?",
          answer: "70 m (AJA) and 80 m (Semtech).",
        },
      ],
      body: `**Short by design.** The bodies behind HDMI and DisplayPort say plainly that their fastest cables are short.

**HDMI.** HDMI Licensing Administrator (HDMI LA) writes of its Ultra High Speed HDMI Cable: "it is likely that the only way to meet the Ultra High Speed HDMI requirements in cables longer than a few meters is through powered, active HDMI Cables" (HDMI Licensing Administrator, n.d.). In a post on cables for installations, it explains that as speeds rose, passive cables were "getting shorter or made thicker." Active optical cables, which run the high-speed lanes on fiber and the rest on copper, allow "much longer lengths in a relatively thin cable," and certification testing is required "for each length as electrical parameters can vary" (HDMI Licensing Administrator, 2021).

Neither HDMI LA page read for this course gives a maximum length in meters. So this course gives none. "A few meters" passive at Ultra High Speed is what the licensing body itself says.

**DisplayPort.** The Video Electronics Standards Association (VESA) is more specific, and its numbers have moved:

| Cable | What VESA says |
|---|---|
| DP54 | Four lanes at UHBR13.5 (54 Gbps) "over a two-meter passive cable" (VESA, 2024) |
| DP80LL | Four lanes at UHBR20 (80 Gbps) "over an active cable up to three meters in length"; before it, users were "limited to a one-meter cable connection" (VESA, 2025) |
| Archived FAQ | "DisplayPort is specified and tested to run 15 meters without the need for a booster station" (VESA, n.d.) |

**Reading that table, reasoned.** The 15-meter answer is from an archived FAQ, written before the UHBR cable classes. The 2024 and 2025 releases give 2 m passive at UHBR13.5, and 1 m passive or 3 m active at UHBR20. So the safe length depends on the data rate: the faster the link, the shorter the cable. Quoting "DisplayPort runs 15 meters" for current high-rate gear would be wrong.

**Compare with SDI.** Lesson 5 found 12G-SDI running about 70 to 100 meters or more on coax, depending on the cable and receiver. The two are not built for the same job: SDI runs on 75-ohm coax, and HDMI's own licensing body says its fastest passive cables stop at a few meters. So a picture that has to go farther than an HDMI cable reaches gets converted, to SDI or to fiber.

**Converting.** CREW-04, *Cinema-look camera rig*, lesson "7 · Outputs, timecode and genlock", shows an HDMI-to-SDI converter on a camera that has only HDMI out. For longer runs, makers sell systems that "Convert and extend 4K HD/3G/6G/12G-SDI, HDMI, 100BaseT Ethernet, and audio signals over tactical fiber" (Camplex, n.d.-c). Lesson 10 covers tactical fiber.

:::reveal What does HDMI LA say is likely the only way to meet Ultra High Speed requirements beyond a few meters? ||| Powered, active HDMI cables (HDMI Licensing Administrator, n.d.).

:::reveal Why is "DisplayPort runs 15 meters" wrong for current high-rate gear? ||| It comes from an archived FAQ that predates the UHBR cable classes; VESA's 2024 and 2025 releases give 2 m passive at UHBR13.5 and 1 m passive or 3 m active at UHBR20.

## Sources
- ${HDMI_POWER} Locator: body text, the Ultra High Speed paragraph.
- ${HDMI_2021} Locator: body text, the paragraphs on passive cables, active optical cables and certification by length.
- ${VESA_2024} Locator: body text, the DP54 paragraph.
- ${VESA_2025} Locator: body text and quotation, the DP80LL paragraphs.
- ${VESA_FAQ} Locator: "How Far Can I Run A DP Cable?"
- ${CAMPLEX_TACTICAL} Locator: "Signal Extender & Reel Systems".`,
    },
    {
      slug: "reference-timecode-and-return-video",
      title: "7 · Reference, timecode and return video",
      section: "2 · Video over copper",
      recallContent: [
        {
          prompt: "What does HDMI LA say about Ultra High Speed HDMI cables longer than a few meters?",
          answer: "It is likely the only way to meet the requirements is through powered, active HDMI cables.",
        },
        {
          prompt: "What did VESA say UHBR20 users were limited to before the DP80LL active cable?",
          answer: "A one-meter cable connection; DP80LL allows up to three meters, active.",
        },
      ],
      body: `${QR}

**Three more BNC lines.** Not every coax on a truck carries the program. Some carry a timing signal, some carry timecode, and some carry pictures back to the camera. CREW-04, *Cinema-look camera rig*, lesson "7 · Outputs, timecode and genlock", explains timecode against genlock on a camera. This lesson is the cable side.

**Reference, which Ikegami's panel calls genlock.** Sony's HXCU-FB80 camera control unit has a REFERENCE IN connector that "Inputs an HD tri-level reference sync signal or SD reference sync signal (black burst signal) for external sync" (Sony Corporation, 2017, p. 10). Its specification (Sony Corporation, 2017, p. 35):

| Reference | Level | Impedance |
|---|---|---|
| HD tri-level sync (SMPTE 274M) | 0.6 Vp-p | 75 ohms |
| SD black burst, NTSC | 0.286 Vp-p | 75 ohms |
| SD black burst, PAL | 0.3 Vp-p | 75 ohms |

The connector is a BNC with a loop-through output, which is "automatically connected to a 75 Ω terminator" when nothing is plugged into it (Sony Corporation, 2017, p. 10). Ikegami's CCU-970 takes the same two kinds of reference, each as a "75Ω bridged connection" (Ikegami, n.d.-b).

**Where reference comes from.** A sync generator makes it. AJA's GEN10 has six video sync outputs on BNC in two groups; each group can be set to HD tri-level sync in 19 formats or to SD color black or 75% bars, all locked to one master time base with 3 ppm accuracy. It adds one AES-11 output on BNC. AJA says its multiple outputs "can synchronize entire systems without requiring a Sync DA," meaning a distribution amplifier (AJA Video Systems, 2014, pp. 4, 10).

**What that means for the cable, reasoned.** Reference is a 75-ohm signal on BNC, so lesson 2 applies: a 50-ohm jumper does not belong in it. A bridged or loop-through input is built to pass the signal on to the next device, so the last device in the chain must be terminated in 75 ohms. Sony's unit does that by itself when the loop-through is empty. Whether you add a terminator by hand on other gear is your engineer's house rule; the reviewer will confirm the wording before release. On an IP plant, timing moves to the network clock instead; CREW-05, *Arena transmission*, lesson "17 · One clock: PTP", covers it.

**Timecode.** QSC describes its generator as making "a Linear Timecode (LTC) audio signal, per the SMPTE 12M specification," at 24, 25, 30 or pulldown rates, with a drop-frame mode "to stay in sync with wall clock time" (QSC, n.d.). Blackmagic's URSA Broadcast G2 lists "Reference Inputs: Tri-Sync/Black Burst/Timecode" and has a BNC timecode input that the camera detects and locks its own generator to, quoting its clock at "Less than 1 frame drift every 8 hours" (Blackmagic Design, n.d.-a, n.d.-b).

**Why they are separate inputs, reasoned.** QSC calls LTC an audio signal. Reference is a video sync signal at 75 ohms, tri-level or black burst. They are different signals for different jobs, which is why a camera has a timecode input and a reference input, even when both are BNC. This course has no source that lists which connector carries LTC on current broadcast gear, so read the device's panel.

**Return video.** Pictures also travel back to the camera. Sony's CCU takes two SDI returns and two analog returns on 75-ohm BNC and sends them up the camera cable (Sony Corporation, 2017, pp. 10, 35). Ikegami's CCU-970 takes four 3G or HD-SDI returns, two when its frame synchronizer is on (Ikegami, n.d.-b). On Blackmagic's URSA Broadcast G2, pressing PGM switches the viewfinder "to the program return feed from the switcher," so an operator far from the switcher can watch the show (Blackmagic Design, n.d.-a).

:::reveal What two kinds of reference does Sony's CCU accept on REFERENCE IN? ||| HD tri-level sync and SD black burst, both at 75 ohms (Sony Corporation, 2017, pp. 10, 35).

:::reveal What does QSC say LTC is? ||| A Linear Timecode audio signal, per SMPTE 12M (QSC, n.d.).

:::reveal What does a camera operator gain from return video? ||| A feed from the switcher, such as the program, in the viewfinder, so they can watch the show far from the switcher (Blackmagic Design, n.d.-a).

## Sources
- ${SONY_2017} Locator: p. 10, "Rear Panel," items e and i; p. 35, "REFERENCE IN/OUT" and return inputs.
- ${IKEGAMI_CCU970} Locator: "Input Signals: GENLOCK signal"; "Features" and "Return signal".
- ${AJA_GEN10} Locator: p. 4, "Overview" and "Features"; p. 5, block diagram; p. 10, "Appendix A: Specifications".
- ${QSC_LTC} Locator: description and properties.
- ${BMD_URSA_SPECS} Locator: "Reference Inputs" and "Timecode Clock".
- ${BMD_URSA} Locator: "Built in Timecode Generator"; the program return paragraph.`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Video over copper",
      section: "2 · Video over copper",
      body: "A graded check on SDI rates and the BNC, how far SDI runs, where HDMI and DisplayPort stop, and the reference, timecode and return lines. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does SMPTE's overview say ST 2082-1 defines?", options: ["A bit-serial data structure, signal and coax interface", "A packet format for sending video over Ethernet", "A fiber connector with two single-mode cores", "A sync signal for locking cameras together"], correctIndex: 0, explanation: "SMPTE (2018, p. 2): ST 2082-1 \"defines a bit-serial data structure, electrical signal and coaxial cable interface.\"", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "Besides the signal, what does ST 2082-1 also specify?", options: ["The camera's lens mount", "The coax cables and connectors", "The power on a hybrid cable", "The IP address of each device"], correctIndex: 1, explanation: "SMPTE (2018, p. 2): it \"also specifies the electrical and physical characteristics of coaxial cables and connectors.\"", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "Where does lesson 4 take its facts about SMPTE standards from?", options: ["The full paywalled text of each standard", "Forum posts by working broadcast engineers", "SMPTE's free overviews and makers' sheets", "Its own reconstruction of each standard"], correctIndex: 2, explanation: "The standards are paywalled; the lesson uses SMPTE's free overview documents and makers' spec sheets, and never reconstructs a standard's text.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "Which standard does SMPTE's overview list for HD-SDI at 1.485 Gb/s?", options: ["ST 259", "ST 424", "ST 2082-1", "ST 292-1"], correctIndex: 3, explanation: "SMPTE (2017, p. 1): ST 292-1 and -2 at 1.485 and 1.485/1.001 Gb/s. ST 259 is SD, ST 424 is 3G, ST 2082-1 is 12G.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What rate does SMPTE's overview give for ST 424, 3G-SDI?", options: ["2.970 Gb/s", "1.485 Gb/s", "5.940 Gb/s", "11.88 Gb/s"], correctIndex: 0, explanation: "SMPTE (2017, p. 1): ST 424 at 2.970 and 2.970/1.001 Gb/s.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What rate does SMPTE's overview give for ST 2082-1, 12G-SDI?", options: ["5.940 Gb/s", "11.88 Gb/s", "2.970 Gb/s", "1.485 Gb/s"], correctIndex: 1, explanation: "SMPTE (2017, p. 1): ST 2082-1 at 11.88 and 11.88/1.001 Gb/s.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "Which standard carries 6G-SDI at 5.940 Gb/s?", options: ["ST 2082-1", "ST 344", "ST 2081-1", "ST 297-1"], correctIndex: 2, explanation: "SMPTE (2017, p. 1): ST 2081-1 at 5.940 and 5.940/1.001 Gb/s. ST 297-1 is the fiber system.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What range of rates does SMPTE's overview give for ST 259?", options: ["540 Mb/s only", "1.485 Gb/s only", "2.970 to 5.940 Gb/s", "143 through 360 Mb/s"], correctIndex: 3, explanation: "SMPTE (2017, p. 1): ST 259 at 143 through 360 Mb/s; Canare's table uses 270 Mb/s for SD-SDI.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "Which rate does SMPTE's overview list for ST 344?", options: ["540 Mb/s", "270 Mb/s", "1.485 Gb/s", "360 Mb/s"], correctIndex: 0, explanation: "SMPTE (2017, p. 1): ST 344 at 540 Mb/s.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "In Canare's distance table, what is the common name for ST 424 at 1080p?", options: ["HD-SDI", "3G-SDI", "SD-SDI", "12G-SDI"], correctIndex: 1, explanation: "Canare Electric (n.d.-d): 3G-SDI is ST 424, 1080p, 2.97 Gb/s. HD-SDI is ST 292 at 1080i.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "In Canare's table, which name goes with ST 2082-1 and 4K UHD?", options: ["3G-SDI", "HD-SDI", "12G-SDI", "6G-SDI"], correctIndex: 2, explanation: "Canare Electric (n.d.-d): 12G-SDI is ST 2082-1, 4K UHD, 11.88 Gb/s.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "From HD up, in how many versions does each SDI rate come?", options: ["One fixed rate only", "Three, one per frame rate", "Four, one per link count", "Two, one divided by 1.001"], correctIndex: 3, explanation: "SMPTE (2017) lists each rate from HD up twice, for example 1.485 and 1.485/1.001 Gb/s.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "Which two rates near 3 Gb/s does AJA's FiDO 12G reclock?", options: ["2.967 and 2.970 Gb/s", "2.970 and 3.000 Gb/s", "2.500 and 2.970 Gb/s", "2.970 and 2.997 Gb/s"], correctIndex: 0, explanation: "AJA Video Systems (2023, p. 9) lists 2.967 and 2.970 Gb/s among the rates FiDO-T-12G detects and reclocks.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "Onto which link counts does the ST 2082 suite map picture formats?", options: ["A single link only", "Single, dual and quad link", "Dual and octal link", "Triple and quad link"], correctIndex: 1, explanation: "SMPTE (2018, p. 1): \"single-link, dual-link and quad-link\" 12 Gb/s interfaces.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What does ST 2082-10 carry on one 12G link?", options: ["1080-line formats only", "4320-line formats", "2160-line formats", "Audio-only streams"], correctIndex: 2, explanation: "SMPTE (2018, p. 3): ST 2082-10 carries 2160-line formats on one 12G link.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "Which use on Belden's 4794R sheet shows a picture spread across four links?", options: ["4K Dual-link UHDTV", "HD Quad-link 1080i", "SD Quad-link 525", "8K Quad-link UHDTV"], correctIndex: 3, explanation: "Belden (2026b, p. 1) lists \"8K Quad-link UHDTV\": four 12G links for one picture.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What does ST 297-1 define, according to SMPTE's overview?", options: ["A fiber system for the same SDI signals", "A coax interface for 12G-SDI at 75 ohms", "A sync signal for HD cameras and CCUs", "A timecode format carried as audio"], correctIndex: 0, explanation: "SMPTE (2017, p. 1): ST 297-1 defines an optical fiber system for the same SDI signals.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What does ST 297-2 do?", options: ["Splits one SDI stream across four coax", "Carries several SDI streams on one fiber", "Sends SDI signals over twisted pair", "Embeds timecode in an SDI stream"], correctIndex: 1, explanation: "SMPTE (2017, p. 1): ST 297-2 carries multiple SDI streams on one fiber.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What level and impedance does Sony list for its HXCU-FB80's SDI outputs?", options: ["0.6 Vp-p into 50 ohms", "2 Vp-p into 110 ohms", "0.8 Vp-p into 75 ohms", "1.0 Vp-p into 600 ohms"], correctIndex: 2, explanation: "Sony Corporation (2017, pp. 35 to 36): SDI outputs are 0.8 Vp-p into 75 ohms on BNC.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "Which connector carries the SDI outputs on Sony's HXCU-FB80?", options: ["XLR", "LC", "N", "BNC"], correctIndex: 3, explanation: "Sony Corporation (2017, pp. 35 to 36): the SDI outputs are on BNC.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What does Canare say its BCP-D55UHD BNC is engineered for?", options: ["Canare's 12G-SDI cables", "Any 50-ohm RF cable", "Belden's triax cables", "HDMI-to-SDI converters"], correctIndex: 0, explanation: "Canare Corporation of America (n.d.-b): \"Specifically engineered for the Canare 12G-SDI Cables.\"", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "Which connectors does Canare say its micro BNC is compatible with?", options: ["Neutrik etherCON", "Amphenol HD-BNCs", "LEMO SMPTE plugs", "50-ohm SMA jacks"], correctIndex: 1, explanation: "Canare Corporation of America (n.d.-b): its micro BNC is \"Compatible with Amphenol HD-BNCs.\"", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What do Canare's crimp tables pair each BNC with?", options: ["Specific cameras", "Specific routers", "Specific cables", "Specific rates"], correctIndex: 2, explanation: "Canare Corporation of America (n.d.-b): each BNC is paired with specific cables, including Belden 1694A for one micro BNC.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What does lesson 4 reason from Canare's crimp tables?", options: ["Any 75-ohm BNC fits any 75-ohm cable", "Crimped BNCs are weaker than soldered", "Micro BNCs suit only 50-ohm cable", "A BNC must suit its cable, not just ohms"], correctIndex: 3, explanation: "Because the tables pair each BNC with particular cables, a BNC has to match the cable it is crimped onto, not only its impedance.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What return loss does Canare quote for its right-angle micro BNC at 12 GHz?", options: ["13 dB", "24 dB", "20 dB", "30 dB"], correctIndex: 0, explanation: "Canare Corporation of America (n.d.-b): 24 dB at 3 GHz, 20 dB at 6 GHz and 13 dB at 12 GHz.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What return loss does Canare quote for its right-angle micro BNC at 3 GHz?", options: ["13 dB", "24 dB", "20 dB", "9 dB"], correctIndex: 1, explanation: "Canare Corporation of America (n.d.-b): 24 dB at 3 GHz, falling to 13 dB at 12 GHz.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "Which lesson in the series shows the locking BNC and an HDMI-to-SDI converter?", options: ["CREW-05, \"ST 2110: separate streams\"", "CREW-05, \"One clock: PTP\"", "CREW-04, \"Outputs, timecode and genlock\"", "CREW-01, \"Which rulebook applies\""], correctIndex: 2, explanation: "CREW-04, Cinema-look camera rig, lesson 7, covers camera outputs, the locking BNC and an HDMI-to-SDI converter.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "Where does lesson 4 send you to see how SDI's embedded audio and picture split onto a network?", options: ["CREW-04, \"Outputs, timecode and genlock\"", "CREW-02, \"The kit and the site survey\"", "CREW-01, \"Who rigs on a show\"", "CREW-05, \"ST 2110: separate streams\""], correctIndex: 3, explanation: "CREW-05, Arena transmission, lesson 12, shows how SDI's parts become separate streams on an IP network.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "How does Canare compute its \"typical transmission distance\"?", options: ["Where cable loss hits SMPTE's figure at half clock", "Where the picture first shows visible errors", "Where the cable's bend radius limit is reached", "Where a receiver's equalizer finally gives up"], correctIndex: 0, explanation: "Canare Electric (n.d.-d): the length at which the cable's loss reaches SMPTE's typical attenuation at half the clock frequency.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "Which loss point does Canare use for 12G-SDI?", options: ["20 dB at 750 MHz", "40 dB at 6 GHz", "30 dB at 1.5 GHz", "30 dB at 135 MHz"], correctIndex: 1, explanation: "Canare Electric (n.d.-d): 40 dB at 6 GHz for 12G-SDI.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "Which loss point does Canare use for HD-SDI?", options: ["30 dB at 135 MHz", "40 dB at 6 GHz", "20 dB at 750 MHz", "30 dB at 1.5 GHz"], correctIndex: 2, explanation: "Canare Electric (n.d.-d): 20 dB at 750 MHz for HD-SDI.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "Which loss point does Canare use for 270 Mb/s?", options: ["40 dB at 6 GHz", "20 dB at 750 MHz", "30 dB at 1.5 GHz", "30 dB at 135 MHz"], correctIndex: 3, explanation: "Canare Electric (n.d.-d): 30 dB at 135 MHz for 270 Mb/s.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "Which loss point does Canare use for 3G-SDI?", options: ["30 dB at 1.5 GHz", "20 dB at 750 MHz", "40 dB at 6 GHz", "30 dB at 135 MHz"], correctIndex: 0, explanation: "Canare Electric (n.d.-d): 30 dB at 1.5 GHz for 3G-SDI.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "What typical 12G distance does Canare give for L-5.5CUHD?", options: ["74 m", "101 m", "140 m", "70 m"], correctIndex: 1, explanation: "Canare Electric (n.d.-d): L-5.5CUHD 101 m at 12G. L-4.5CHD is 74, L-8CUHD 140 and the mobile L-5.5CUHWS 70.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "What typical 12G distance does Canare give for L-8CUHD?", options: ["101 m", "74 m", "140 m", "217 m"], correctIndex: 2, explanation: "Canare Electric (n.d.-d): L-8CUHD 140 m at 12G; 217 m is its HD figure.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "What typical HD-SDI distance does Canare give for L-4.5CHD?", options: ["415 m", "74 m", "150 m", "114 m"], correctIndex: 3, explanation: "Canare Electric (n.d.-d): L-4.5CHD 415 m at 270 Mb/s, 114 m at HD, 119 m at 3G, 74 m at 12G.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "At 12G, how does Canare's mobile L-5.5CUHWS compare with the fixed L-5.5CUHD?", options: ["70 m against 101 m", "101 m against 70 m", "140 m against 101 m", "74 m against 68 m"], correctIndex: 0, explanation: "Canare Electric (n.d.-d): the mobile cable reaches 70 m at 12G against 101 m for the fixed-installation cable.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "Reading across one row of Canare's table, what happens to distance?", options: ["It rises as the rate rises", "It falls as the rate rises", "It stays the same at each rate", "It falls only at 270 Mb/s"], correctIndex: 1, explanation: "Each row shows distance falling from 270 Mb/s to 12G, as loss rises with frequency.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "What does Canare say about how L-5.5CUHD should be installed?", options: ["Mobile use, safe to coil often", "Outdoor burial with no conduit", "Fixed runs; avoid repeated bending", "Short patches only, under 10 m"], correctIndex: 2, explanation: "Canare Electric (n.d.-d): \"Designed for fixed installation, please avoid repeated bending or external pressure.\"", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "What does Canare's footnote say its typical distances are not equivalent to?", options: ["Values measured at 6 GHz", "Values for mobile cable", "Values based on SMPTE loss", "Actual transmission distances"], correctIndex: 3, explanation: "Canare Electric (n.d.-d): \"These values are not equivalent to actual transmission distances, which depends on the equalized distance of receiver.\"", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "According to Canare, what does the actual SDI transmission distance depend on?", options: ["The receiver's equalized distance", "The color of the cable's jacket", "The model of BNC crimp tool used", "The camera's frame rate alone"], correctIndex: 0, explanation: "Canare Electric (n.d.-d): actual distance \"depends on the equalized distance of receiver.\"", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "What does Canare say L-5.5CUHD can do with 4K UHD on one link?", options: ["Exactly 101 m with any receiver", "100 m or longer, by receiver", "No more than 50 m at 12G", "Up to 10 km with an equalizer"], correctIndex: 1, explanation: "Canare Electric (n.d.-d): \"100 m or longer,\" \"Depending on receiving equipment.\"", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "How far does AJA's 12GDA equalize Belden 1694A at 12 Gb/s?", options: ["80 m", "120 m", "70 m", "190 m"], correctIndex: 2, explanation: "AJA Video Systems (n.d.): 70 m at 12 Gb/s, 120 m at 6, 190 m at 3, 405 m at 270 Mb/s.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "How far does AJA's 12GDA equalize Belden 1694A at 270 Mb/s?", options: ["450 m", "566 m", "789 m", "405 m"], correctIndex: 3, explanation: "AJA Video Systems (n.d.): 405 m at 270 Mb/s. Semtech's chip gives 450 m.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "How far does Semtech's GS12341 reach on 1694A at 11.88 Gb/s?", options: ["80 m", "70 m", "69 m", "100 m"], correctIndex: 0, explanation: "Semtech (n.d.): 80 m at 11.88 Gb/s; 100 m at 5.94 Gb/s.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "How far does Semtech's GS12341 reach on 1694A at 270 Mb/s?", options: ["405 m", "450 m", "260 m", "190 m"], correctIndex: 1, explanation: "Semtech (n.d.): 450 m at 270 Mb/s; 260 m at 1.485 Gb/s, 190 m at 2.97.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "What 12G reach does lesson 5 work out from Belden's 1694A loss and Canare's 40 dB point?", options: ["About 58 m", "About 101 m", "About 69 m", "About 140 m"], correctIndex: 2, explanation: "40 dB divided by 17.7 dB per 100 ft is about 226 ft, or about 69 m.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "Why can AJA and Semtech quote 12G reach over 1694A when Belden does not list 12G?", options: ["Belden lists 1694A for 12G", "They use a thicker variant", "They measure it at 6G instead", "Their receivers equalize it"], correctIndex: 3, explanation: "The receiver's equalization sets the reach; the cable sheet alone does not.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "Which three 12G figures does Canare publish for L-4.5CHD?", options: ["74 m, 65 m and about 44 m", "74 m, 101 m and 140 m", "70 m, 80 m and about 69 m", "68 m, 74 m and 114 m"], correctIndex: 0, explanation: "Japanese table 74 m, US 12G page 65 m, US \"Mastering\" page 143 ft (about 44 m), with no test conditions on the US pages.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "What is missing from the maximum distances on Canare's US cable cards?", options: ["The cable's part number", "The rate they apply to", "The unit of measure", "The maker's own name"], correctIndex: 1, explanation: "Canare Corporation of America (n.d.-a) lists distances such as 335 ft for L-5.5CUHD without naming the rate.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "What rule does lesson 5 give for planning an SDI run?", options: ["Trust the longest figure a maker prints", "Use the cable sheet's number on its own", "Read cable and receiver sheets together", "Assume 100 m for any 75-ohm cable"], correctIndex: 2, explanation: "The receiver decides the real distance, so read the cable sheet and the receiver sheet together at the rate you are running.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "How far does AJA say its FiDO converters carry 12G-SDI on fiber?", options: ["Up to 2 km on multimode", "Up to 100 m on Cat6A", "Up to 1 km on tactical coax", "Up to 10 km on single-mode"], correctIndex: 3, explanation: "AJA Video Systems (2023, p. 4): 12G-SDI \"up to 10km\" on single-mode fiber.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "What does HDMI LA say is likely needed for Ultra High Speed HDMI beyond a few meters?", options: ["Powered, active HDMI cables", "Thicker passive HDMI cables", "Any certified passive cable", "A 75-ohm coax adapter"], correctIndex: 0, explanation: "HDMI Licensing Administrator (n.d.): \"powered, active HDMI Cables\" are likely the only way to meet the requirements beyond a few meters.", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "What does HDMI LA say happened to passive cables as speeds rose?", options: ["They got longer and thinner", "They got shorter or thicker", "They stayed the same length", "They were replaced by coax"], correctIndex: 1, explanation: "HDMI Licensing Administrator (2021): passive cables were \"getting shorter or made thicker.\"", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "In an active optical HDMI cable, what carries the high-speed lanes?", options: ["Copper", "Coax", "Fiber", "Radio"], correctIndex: 2, explanation: "HDMI Licensing Administrator (2021): fiber for the high-speed lanes, copper for the auxiliaries.", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "What does HDMI LA say active optical cables make possible?", options: ["Lower cost at short lengths", "Power for the display end", "Analog video at any length", "Long lengths in a thin cable"], correctIndex: 3, explanation: "HDMI Licensing Administrator (2021): \"much longer lengths in a relatively thin cable.\"", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "For what does HDMI LA say certification testing is required?", options: ["Each length", "Each color", "Each maker", "Each display"], correctIndex: 0, explanation: "HDMI Licensing Administrator (2021): testing is required \"for each length as electrical parameters can vary.\"", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "Why does lesson 6 give no maximum HDMI length in meters?", options: ["HDMI has no length limit at all", "Neither HDMI LA page read gives one", "Lengths change with every TV model", "HDMI LA forbids publishing one"], correctIndex: 1, explanation: "Neither HDMI LA page read for the course states a maximum length in meters, so the course gives none.", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "How long a passive cable does VESA say DP54 supports at UHBR13.5?", options: ["1 m", "3 m", "2 m", "15 m"], correctIndex: 2, explanation: "VESA (2024): four-lane UHBR13.5 (54 Gbps) \"over a two-meter passive cable.\"", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "How long an active cable does VESA say DP80LL supports at UHBR20?", options: ["Up to 2 m", "Up to 15 m", "Up to 1 m", "Up to 3 m"], correctIndex: 3, explanation: "VESA (2025): UHBR20 \"over an active cable up to three meters in length.\"", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "Before DP80LL, what cable length were UHBR20 users limited to?", options: ["1 m", "2 m", "3 m", "5 m"], correctIndex: 0, explanation: "VESA (2025): users were \"limited to a one-meter cable connection\" at UHBR20.", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "What does DisplayPort.org's archived FAQ say about length?", options: ["2 m passive at any rate", "15 m without a booster", "3 m active at UHBR20", "100 m on coax adapters"], correctIndex: 1, explanation: "VESA (n.d.): \"DisplayPort is specified and tested to run 15 meters without the need for a booster station.\"", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "Why is \"DisplayPort runs 15 meters\" wrong for current high-rate gear?", options: ["VESA never published it at all", "It applied only to HDMI cables", "It predates the UHBR cable classes", "It was measured on active cable"], correctIndex: 2, explanation: "The 15 m figure is from an archived FAQ that predates UHBR; the 2024 and 2025 releases give 1 to 3 m at the high rates.", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "On what does lesson 6 say a safe DisplayPort cable length depends?", options: ["The display size", "The video format", "The jacket color", "The data rate"], correctIndex: 3, explanation: "Comparing VESA's pages: 15 m at older rates, 2 m passive at UHBR13.5, 1 m passive or 3 m active at UHBR20.", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "What is UHBR13.5 over four lanes, per VESA?", options: ["54 Gbps", "80 Gbps", "48 Gbps", "13.5 Gbps"], correctIndex: 0, explanation: "VESA (2024): four-lane UHBR13.5 is 54 Gbps.", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "What is UHBR20 over four lanes, per VESA?", options: ["54 Gbps", "80 Gbps", "20 Gbps", "40 Gbps"], correctIndex: 1, explanation: "VESA (2025): four-lane UHBR20 is 80 Gbps.", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "What does VESA stand for?", options: ["Video Equipment Safety Agency", "Visual Engineering Standards Alliance", "Video Electronics Standards Association", "Video Electronic Signal Association"], correctIndex: 2, explanation: "The Video Electronics Standards Association publishes the DisplayPort cable specifications cited in lesson 6.", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "How does lesson 6 contrast 12G-SDI on coax with Ultra High Speed HDMI on passive cable?", options: ["Both reach about 15 m", "Both reach about 2 m", "A few m against 70 to 100+ m", "70 to 100+ m against a few m"], correctIndex: 3, explanation: "Lesson 5 found 12G-SDI running about 70 to 100 m or more on coax; HDMI LA says its fastest passive cables stop at a few meters.", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "What does lesson 6 say happens to a picture that must go farther than an HDMI cable reaches?", options: ["It is converted, to SDI or fiber", "It goes on a longer HDMI cable", "It is split across two HDMI runs", "It is cut to standard definition"], correctIndex: 0, explanation: "\"A picture that has to go farther than an HDMI cable reaches gets converted, to SDI or to fiber.\"", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "Which lesson in the series shows an HDMI-to-SDI converter on a camera?", options: ["CREW-05, \"Fiber on the map\"", "CREW-04, \"Outputs, timecode and genlock\"", "CREW-05, \"Bandwidth math\"", "CREW-01, \"Which rulebook applies\""], correctIndex: 1, explanation: "CREW-04, Cinema-look camera rig, lesson 7, shows an HDMI-to-SDI converter on a camera with only HDMI out.", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "Over what do Camplex's systems convert and extend HDMI and SDI?", options: ["Cat5e copper", "Triax cable", "Tactical fiber", "Wi-Fi radio"], correctIndex: 2, explanation: "Camplex (n.d.-c): systems that \"Convert and extend 4K HD/3G/6G/12G-SDI, HDMI, 100BaseT Ethernet, and audio signals over tactical fiber.\"", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "What does Sony's REFERENCE IN accept?", options: ["LTC timecode or word clock", "Return video or program audio", "AES3 audio or MADI streams", "HD tri-level or SD black burst"], correctIndex: 3, explanation: "Sony Corporation (2017, p. 10): \"an HD tri-level reference sync signal or SD reference sync signal (black burst signal).\"", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "What level does Sony list for HD tri-level reference?", options: ["0.6 Vp-p", "0.286 Vp-p", "0.8 Vp-p", "0.3 Vp-p"], correctIndex: 0, explanation: "Sony Corporation (2017, p. 35): HD tri-level 0.6 Vp-p; NTSC black burst 0.286; PAL 0.3.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "What level does Sony list for NTSC black burst?", options: ["0.6 Vp-p", "0.286 Vp-p", "0.8 Vp-p", "1.0 Vp-p"], correctIndex: 1, explanation: "Sony Corporation (2017, p. 35): NTSC black burst 0.286 Vp-p, 75 ohms.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "What level does Sony list for PAL black burst?", options: ["0.6 Vp-p", "0.8 Vp-p", "0.3 Vp-p", "0.286 Vp-p"], correctIndex: 2, explanation: "Sony Corporation (2017, p. 35): PAL black burst 0.3 Vp-p, 75 ohms.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "At what impedance does Sony list every reference signal?", options: ["50 ohms", "110 ohms", "600 ohms", "75 ohms"], correctIndex: 3, explanation: "Sony Corporation (2017, p. 35): tri-level and black burst are all 75 ohms.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "Which SMPTE standard does Sony name for HD tri-level sync?", options: ["SMPTE 274M", "SMPTE 12M", "SMPTE 259M", "ST 2082-1"], correctIndex: 0, explanation: "Sony Corporation (2017, p. 35): HD tri-level sync (SMPTE 274M). SMPTE 12M is LTC, per QSC.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "What does Sony's reference loop-through do when nothing is plugged into it?", options: ["Leaves the line open, unterminated", "Connects a 75-ohm terminator itself", "Switches in a 50-ohm terminator", "Turns the reference input off"], correctIndex: 1, explanation: "Sony Corporation (2017, p. 10): the loop-through output is \"automatically connected to a 75 Ω terminator\" when unused.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "How does Ikegami describe its CCU-970 genlock input?", options: ["A 50-ohm terminated input", "A 110-ohm balanced XLR", "A 75-ohm bridged connection", "A fiber LC receptacle"], correctIndex: 2, explanation: "Ikegami (n.d.-b): tri-sync or black burst, each as a \"75Ω bridged connection.\"", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "What does Ikegami's CCU-970 panel call its reference input?", options: ["Timecode", "Return", "Tally", "Genlock"], correctIndex: 3, explanation: "Ikegami (n.d.-b) lists it as \"GENLOCK signal.\"", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "How many video sync outputs does AJA's GEN10 have?", options: ["Six, in two groups", "Four, in one group", "Eight, in four groups", "Two, one per format"], correctIndex: 0, explanation: "AJA Video Systems (2014, p. 4): six video sync outputs on BNC in two groups.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "To what can each GEN10 output group be set?", options: ["LTC timecode or word clock", "HD tri-level, or SD black or bars", "12G-SDI or 3G-SDI video", "AES3 or MADI audio"], correctIndex: 1, explanation: "AJA Video Systems (2014): each group is HD tri-level (19 formats) or SD color black or 75% bars.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "What accuracy does AJA give for the GEN10?", options: ["1 frame in 8 hours", "0.1 dB", "3 ppm", "30 ppm"], correctIndex: 2, explanation: "AJA Video Systems (2014, p. 10): 3 ppm, all outputs locked to one master time base.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "Besides its six video outputs, what does the GEN10 provide?", options: ["One LTC output on XLR", "One HDMI output", "One MADI output on SC", "One AES-11 output on BNC"], correctIndex: 3, explanation: "AJA Video Systems (2014): one AES-11 output on BNC.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "What does AJA say the GEN10's outputs can synchronize systems without?", options: ["A Sync DA", "A power supply", "A terminator", "A reference input"], correctIndex: 0, explanation: "AJA Video Systems (2014, p. 4): \"can synchronize entire systems without requiring a Sync DA.\"", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "What does DA mean in \"Sync DA\"?", options: ["Digital adapter", "Distribution amplifier", "Delay assembly", "Data acquisition"], correctIndex: 1, explanation: "A DA is a distribution amplifier, as in AJA's 12GDA \"12G-SDI 1x6 distribution amplifier.\"", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "Reasoning from bridged and loop-through inputs, how must a reference chain end?", options: ["Left open at the last device", "With a second reference feed", "Terminated in 75 ohms", "Terminated in 50 ohms"], correctIndex: 2, explanation: "Bridged inputs pass the signal on, so the last device must be terminated in 75 ohms; Sony's unit does this itself when its loop-through is empty.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "Who settles whether you add a reference terminator by hand on other gear?", options: ["The camera operator's taste", "The cable maker's spec sheet", "The SMPTE 274M standard text", "The engineer's house rule"], correctIndex: 3, explanation: "Lesson 7: it is your engineer's house rule, and the reviewer will confirm the wording before release.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "Does a 50-ohm jumper belong in a reference line?", options: ["No: reference is a 75-ohm signal", "Yes: any BNC jumper will serve", "Only when the run is black burst", "Only on a loop-through output"], correctIndex: 0, explanation: "Reference is a 75-ohm BNC signal (Sony; Ikegami), so lesson 2's rule applies: a 50-ohm jumper does not belong in it.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "On an IP plant, what does lesson 7 say timing moves to?", options: ["LTC on an XLR line", "The network clock, PTP", "Word clock on BNC", "Tally on a relay"], correctIndex: 1, explanation: "Timing moves to the network clock; CREW-05 lesson \"17 · One clock: PTP\" covers it.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "How does QSC describe LTC?", options: ["A video sync per SMPTE 274M", "A data packet on Ethernet", "An audio signal per SMPTE 12M", "A tri-level sync at 0.6 Vp-p"], correctIndex: 2, explanation: "QSC (n.d.): \"a Linear Timecode (LTC) audio signal, per the SMPTE 12M specification.\"", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "Why does QSC's LTC generator have a drop-frame mode?", options: ["To drop frames from the program", "To lower the signal level", "To switch over to PAL rates", "To keep pace with wall clock time"], correctIndex: 3, explanation: "QSC (n.d.): drop-frame mode \"to stay in sync with wall clock time.\"", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "Which reference inputs does Blackmagic list for the URSA Broadcast G2?", options: ["Tri-Sync, Black Burst, Timecode", "Word clock, AES3 and MADI", "HDMI, DisplayPort and USB", "Return, tally and intercom"], correctIndex: 0, explanation: "Blackmagic Design (n.d.-b): \"Reference Inputs: Tri-Sync/Black Burst/Timecode.\"", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "What drift does Blackmagic quote for the URSA Broadcast G2's timecode clock?", options: ["Under 1 frame each hour", "Under 1 frame every 8 hours", "Under 1 second per day", "Under 3 frames per minute"], correctIndex: 1, explanation: "Blackmagic Design (n.d.-b): \"Less than 1 frame drift every 8 hours.\"", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "Why does a camera have separate timecode and reference inputs, per lesson 7?", options: ["LTC is 50 ohms; reference is 110", "Timecode needs fiber; sync needs coax", "LTC is audio; reference is video sync", "Reference carries pictures; LTC none"], correctIndex: 2, explanation: "QSC calls LTC an audio signal; reference is a 75-ohm video sync signal. Different signals, different jobs.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "Which connector carries LTC, according to this course?", options: ["Always a BNC on broadcast gear", "Always a 3-pin XLR connector", "Always a LEMO 5-pin connector", "No source lists it; read the panel"], correctIndex: 3, explanation: "The course has no source listing which connector carries LTC on current broadcast gear, so it tells you to read the device's panel.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "Which returns does Sony's HXCU-FB80 take?", options: ["Two SDI and two analog", "Four SDI and no analog", "Two SDI and no analog", "One analog and one SDI"], correctIndex: 0, explanation: "Sony Corporation (2017, pp. 10, 35): two SDI and two analog returns on 75-ohm BNC, sent up the camera cable.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "How many 3G or HD-SDI returns does Ikegami's CCU-970 take?", options: ["Two, or four with frame sync on", "Four, or two with frame sync on", "Six, on two BNC groups", "One, on the camera cable"], correctIndex: 1, explanation: "Ikegami (n.d.-b): four returns, two when its frame synchronizer is on.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "What does the PGM button do on Blackmagic's URSA Broadcast G2?", options: ["Sends the camera's picture to air", "Turns on the camera's tally light", "Shows program return in the viewfinder", "Starts the camera's internal timecode"], correctIndex: 2, explanation: "Blackmagic Design (n.d.-a): PGM switches the viewfinder \"to the program return feed from the switcher.\"", sourceLessonSlug: "reference-timecode-and-return-video" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Camera cables
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-ccu-and-triax",
      title: "8 · The camera control unit and triax",
      section: "3 · Camera cables",
      recallContent: [
        {
          prompt: "What two kinds of reference does Sony's CCU accept, and at what impedance?",
          answer: "HD tri-level sync and SD black burst, both at 75 ohms, on BNC.",
        },
        {
          prompt: "Why does a camera have a timecode input separate from its reference input?",
          answer: "LTC is an audio signal (QSC); reference is a 75-ohm video sync signal. Different signals, different jobs.",
        },
      ],
      body: `${QR}

**The other end of the camera cable.** A broadcast camera's cable runs back to a camera control unit, or CCU. Sony says its HXCU-FB80 "performs signal processing, provides an interface for external equipment, and supplies power to the camera," and with a remote control panel forms a camera control system (Sony Corporation, 2017, p. 3). Ikegami describes its CCU as "connected to the camera using fiber cable to transmit video, audio and control signals, as well as, supplying the power to the camera when hybrid fiber/copper cable is used" (Ikegami, n.d.-d).

So one camera cable carries the camera's pictures and sound to the CCU, return pictures and control back to the camera, and, on hybrid cable, the camera's power.

**Read the back panel.** Ikegami's CCU and base-station pages list what plugs in at the CCU end: SDI program and monitor outputs, return video inputs, a reference input, a prompter feed, intercom (4-wire, Clear-Com or RTS), program sound, tally, and a data trunk (Ikegami, n.d.-a, n.d.-b). Lesson 7 covered reference and returns; lesson 17 covers intercom on XLR.

Smaller systems do the same job. Blackmagic's Studio Fiber Converter "converts SDI video, audio, and remote camera control connections into a single optical fiber cable," with 12G-SDI for the camera feed, three HD return feeds, talkback, tally, and "power for your remote cameras" (Blackmagic Design, n.d.-b).

**Triax.** Triax is a coax-family camera cable that is still in service. Ikegami's DTA-55 and BST-55 form "a triax transmission system" that lets owners move from SD to HD "while still using their existing triax camera cable infrastructure," which Ikegami calls a "rugged easy to repair cable/connector type" (Ikegami, n.d.-a). The BST-55 base station handles reference, two SDI and two analog returns, intercom, program sound, tally and a data trunk, and lists "Power for camera head: less than 180VA." Its maximum cable distance is 800 m on Fujikura 8.8 mm triax (Ikegami, n.d.-a).

**One cable for everything, reasoned.** The triax is the only link between that base station and the camera adaptor. So all of those signals, and the camera's power, share one triax cable. The reviewer will confirm this against a triax system manual before release.

**How far triax runs.** Ikegami's HDK-79EC brochure gives distances by cable (Ikegami, n.d.-c, p. 5):

| Triax cable | Distance |
|---|---|
| Fujikura 8.8 mm | 850 m |
| Fujikura 14.5 mm | 1,550 m |
| Belden 9267, 9.2 mm | 500 m |
| Belden 9232, 13.2 mm | 1,000 m |

Within each maker's pair, the thicker triax runs farther. An older white paper from LEMO puts HDTV on "digital grade RG-11/U type 75 ohm triax" under about 1000 m, and about 2000 m with a repeater, figures it attributes to Grass Valley literature for an older camera (Longhurst & Brooks, 2017, p. 2). Treat those as dated.

**Why crews keep triax.** LEMO's paper says a broken triax can get a "fast and dirty" repair with a stripper and insulation tape, and that triax is terminated with copper tooling (Longhurst & Brooks, 2017, p. 2). Fischer, which makes triax connectors, says its 1051 Triax HD Pro+ reaches "up to 1.5 kilometers" in HD without a repeater, is backward compatible with genuine 1051 parts, and can be repaired in about 10 minutes with simple tools (Richards, 2018, pp. 4 to 5). Those are a maker's claims about its own product.

**Which triax connector?** Fischer's backward-compatibility claim covers its own 1051 family. Whether other triax connector families mate with one another is a question this course leaves open. Match the connector to the camera system in front of you.

:::reveal Name three jobs a CCU does, according to Sony. ||| Signal processing, an interface for external equipment, and power for the camera (Sony Corporation, 2017, p. 3).

:::reveal On Ikegami's HDK-79EC figures, how far does 14.5 mm Fujikura triax run? ||| 1,550 m, against 850 m for 8.8 mm Fujikura (Ikegami, n.d.-c, p. 5).

## Sources
- ${SONY_2017} Locator: p. 3, "Overview".
- ${IKEGAMI_UHK430} Locator: CCU-430 description.
- ${IKEGAMI_BST55} Locator: description and specifications.
- ${IKEGAMI_CCU970} Locator: "Input Signals" and "Output Signals".
- ${BMD_URSA_SPECS} Locator: "Blackmagic Studio Fiber Converter: Description".
- ${IKEGAMI_HDK79EC} Locator: p. 5, "Transmission Distance".
- ${LONGHURST_2017} Locator: PDF p. 2, the triax paragraphs.
- ${RICHARDS_2018} Locator: pp. 4 to 5, the 1051 Triax HD Pro+ claims.`,
    },
    {
      slug: "the-smpte-hybrid-camera-cable",
      title: "9 · The SMPTE hybrid fiber camera cable",
      section: "3 · Camera cables",
      recallContent: [
        {
          prompt: "What does Ikegami list as the BST-55's power for the camera head, and its maximum triax distance?",
          answer: "Less than 180 VA, and 800 m on Fujikura 8.8 mm triax.",
        },
        {
          prompt: "Why does a crew value triax in the field, per LEMO's white paper?",
          answer: "A broken triax can get a \"fast and dirty\" repair with a stripper and insulation tape.",
        },
      ],
      body: `${QR}

**Fiber and copper in one jacket.** The SMPTE hybrid camera cable carries fiber for the signals and copper for power and control. SMPTE ST 311 covers the cable and ST 304 the connector. Those standards are paywalled, so this lesson reads makers' sheets that state what they comply with.

**What is inside.** Canare's LF-2SM9N, sold as SMPTE ST 311 compliant (Canare Electric, n.d.-c):

| Part | LF-2SM9N |
|---|---|
| Fibers | 2 single-mode, 9/125, low water peak |
| Power conductors | 4 x 20 AWG |
| Control conductors | 2 x 25 AWG |
| Outside diameter | 9.2 mm |
| Minimum bend radius | 6 x outside diameter |
| Temperature | -40 to +75 °C |

Its fiber is ITU-T G.657.A2, a "low bending loss" single-mode type (Canare Electric, n.d.-c). The fibers are single-mode. Calling SMPTE camera fiber multimode is wrong.

**What is in the connector.** LEMO's 3K.93C SMPTE insert lists "2 FO Type FS, 2 HV + 2 LV": two fiber contacts, two high-voltage and two low-voltage contacts, for cable type "SMPTE 311M or EBU R100," with push-pull locking, a rated current of 10 A, and a working voltage of 600 V for power and 42 V for signal (LEMO, n.d., p. 2). Camplex describes the LEMO SMPTE 304M connector the same way: "two singlemode fibers, two power conductors and two low voltage conductors in a single connector" (Camplex, 2019a). LEMO states the connector meets SMPTE 304M, ARIB BTA S-1005B and EBU R100, with typical attenuation of 0.1 dB and return loss over 45 dB (Longhurst & Brooks, 2017, p. 7). Canare's assemblies claim ST 304, ST 311 and ARIB compliance, with return loss of 45 dB or more and insertion loss of 0.5 dB or less at 1.3 µm (Canare Electric, n.d.-b).

**Male and female.** Blackmagic's camera-side fiber converter has a male SMPTE 304 connector, and its studio-side converter a female one (Blackmagic Design, n.d.-b).

**Not every hybrid connector mates.** Canare's Japanese-style OC hybrid connectors carry "the same combination of SMPTE but different pinouts" and are "non-compatible with SMPTE connectors"; a conversion cable is needed (Canare Electric, n.d.-b).

**What voltage is on it?** The 600 V figure is LEMO's working-voltage rating for the connector, not the voltage a CCU sends. No source read for this course states what voltage the copper carries, or whether an unmated connector is live, and this course names none. Until the reviewer settles it, treat the hybrid cable as a power cable and follow the engineer's procedure for connecting it. That is this course's precaution, not a quoted rule.

**How far.** With the camera powered from the CCU over the hybrid cable:

| System | Reach |
|---|---|
| Ikegami UHK-430 | Up to 4 km (13,123 ft) (Ikegami, n.d.-d) |
| Sony HXC-FB80, with lens and viewfinder | 600 m on Sony's hybrid cable; 250 m for the camera adaptor (Sony Corporation, 2017, p. 34) |
| Blackmagic URSA Broadcast G2 system | "Up to 2 km" (Blackmagic Design, n.d.-a) |

Sony adds that reach "varies depending on the total power consumption of the connected peripherals" (Sony Corporation, 2017, p. 34). LEMO's paper says that with the camera powered over the hybrid cable, distance "is only limited by the voltage drop in the electrical power part," while with local power, HD can run "well over 20km" of single-mode fiber (Longhurst & Brooks, 2017, p. 3). Without the copper, single-mode fiber alone carries "all signals (except power)": Sony up to 10 km on general single-mode cable with LC connectors, and Ikegami up to 10 km with local camera power (Sony Corporation, 2017, pp. 5 to 6, 10; Ikegami, n.d.-d).

Reasoned from those: the fiber can go much farther than the copper can carry power. When the cable powers the camera, the copper sets the limit.

**Caring for it.** Sony warns that dust on hybrid or single-mode terminations "may" cause transmission errors, and says to put the cable's cap back on when it is not in use (Sony Corporation, 2017, p. 10). LEMO: "Any connector that is filled with water will have problems if it is to handle power," so waterproof end caps are "essential" (Longhurst & Brooks, 2017, p. 3). Canare's cleaning note covers ferrule tips and sides, alignment sleeves and shells: plugs with a non-alcohol cleaning stick, shells with cotton gauze, because scratches or particles on a ferrule tip "can have a disabling effect" (Canare Electric, n.d.-b). Lesson 13 is about inspection and cleaning in general.

**Bending it.** Six times 9.2 mm is about 55 mm minimum bend radius for LF-2SM9N. The sheet does not say whether that is while pulling or after installation; this course leaves that open, and lesson 14 explains why the difference matters.

:::reveal How many fibers does an ST 311 hybrid cable such as Canare's LF-2SM9N carry, and of what type? ||| Two single-mode 9/125 fibers (Canare Electric, n.d.-c).

:::reveal Is 600 V the voltage a CCU puts on the hybrid cable? ||| No. It is LEMO's working-voltage rating for the connector's power contacts. No source read for this course states the actual supply voltage.

:::reveal What limits reach when the hybrid cable powers the camera? ||| The copper: LEMO says distance is then "only limited by the voltage drop in the electrical power part," and Sony says reach varies with the power the peripherals draw.

## Sources
- ${CANARE_HYBRID} Locator: specification table; "Key Features and Benefits".
- ${LEMO_3K93C} Locator: p. 2, "Technical details".
- ${CAMPLEX_IDENT} Locator: "SMPTE Hybrid 304M Connector".
- ${LONGHURST_2017} Locator: PDF p. 3, the hybrid distance and water paragraphs; PDF p. 7, the compliance and loss figures.
- ${CANARE_HFO} Locator: "Key Features and Benefits"; "About Camera Cable Assemblies"; "Technical Note".
- ${BMD_URSA_SPECS} Locator: "Optical Fiber Input" entries.
- ${BMD_URSA} Locator: the camera fiber reach paragraph.
- ${IKEGAMI_UHK430} Locator: CCU-430 description.
- ${SONY_2017} Locator: pp. 5 to 6; p. 10, item g and the note under it; p. 34, "About Transmission Distance".`,
    },
    {
      slug: "tactical-fiber",
      title: "10 · Tactical fiber",
      section: "3 · Camera cables",
      recallContent: [
        {
          prompt: "What do LEMO's \"2 FO, 2 HV + 2 LV\" contacts in a SMPTE hybrid connector stand for?",
          answer: "Two fiber, two high-voltage and two low-voltage contacts.",
        },
        {
          prompt: "Why must Canare's Japanese-style OC hybrid connectors not be mated straight to SMPTE connectors?",
          answer: "They carry the same combination but different pinouts and are \"non-compatible with SMPTE connectors\"; a conversion cable is needed.",
        },
      ],
      body: `${QR}

**Fiber built for the ground.** Tactical fiber is fiber cable made to be laid out and picked up again. Camplex's Pro-Tac is single-mode tactical fiber on reels with 4, 8 or 12 fanouts and ST or LC connectors. Camplex calls it "crush resistant with internal aramid strength members and a polyurethane jacket," built for "multiple deployments in outside broadcast," and says it "Can be used directly on the ground for temporary deployment" (Camplex, n.d.-a).

**What rides on it.** Camplex sells converter and reel systems that "Convert and extend 4K HD/3G/6G/12G-SDI, HDMI, 100BaseT Ethernet, and audio signals over tactical fiber" (Camplex, n.d.-c). AJA's FiDO converters are another example: a pair, with LC or ST single-mode connections, carrying 12G-SDI "up to 10km" (AJA Video Systems, 2023, p. 4). Reasoned from those: SDI usually rides a tactical run through a converter pair, one at each end.

**What does not ride on it, reasoned.** Camplex describes Pro-Tac's fibers, strength members and jacket, and no copper. Canare's SMPTE hybrid cable, in lesson 9, lists power conductors. So tactical fiber carries no power: the camera or converter at the far end needs local power or a separate feed. No source read for this course says that in words, and the reviewer will confirm it before release.

**Three camera cables side by side.**

| | Triax | SMPTE hybrid | Tactical fiber |
|---|---|---|---|
| Carries camera power | Yes: the BST-55 lists under 180 VA for the head (Ikegami, n.d.-a) | Yes, when the CCU powers the camera (Ikegami, n.d.-d) | No, reasoned above |
| Example reach | 500 to 1,550 m, by cable (Ikegami, n.d.-c) | 250 m to 4 km powered; 10 km with local power (Sony Corporation, 2017; Ikegami, n.d.-d) | Set by the converters, such as 10 km for FiDO (AJA Video Systems, 2023) |
| In the field | "Fast and dirty" repair with tape (Longhurst & Brooks, 2017) | Keep it capped, clean and dry (Sony Corporation, 2017; Longhurst & Brooks, 2017) | Laid on the ground; same fiber care |

**Dirt, sand and water.** Fischer, a maker of triax connectors and so of the competing technology, warns that a fiber connector using a 9-micron single-mode core, "such as SMPTE 304," can cause problems in sand, mud or water "without extreme care" (Richards, 2018, p. 4). Weigh the source, but the warning matches what the fiber makers say themselves: Sony on dust (lesson 9) and LEMO on water. Section 4 covers how to inspect and clean a fiber end before it is mated.

:::reveal Which connectors does Camplex offer on its Pro-Tac tactical fiber? ||| ST or LC, on 4, 8 or 12 fanouts (Camplex, n.d.-a).

:::reveal Why does a camera at the far end of tactical fiber need its own power? ||| Tactical fiber carries fiber and strength members, no power copper, unlike the SMPTE hybrid cable. The lesson reasons this from the makers' descriptions, for the reviewer to confirm.

## Sources
- ${CAMPLEX_PROTAC} Locator: description and "Features".
- ${CAMPLEX_TACTICAL} Locator: "Signal Extender & Reel Systems".
- ${AJA_FIDO} Locator: p. 4, "Overview" and "Features".
- ${CANARE_HYBRID} Locator: specification table.
- ${IKEGAMI_BST55} Locator: specifications.
- ${IKEGAMI_HDK79EC} Locator: p. 5, "Transmission Distance".
- ${IKEGAMI_UHK430} Locator: CCU-430 description.
- ${SONY_2017} Locator: p. 10, note under item g; p. 34, "About Transmission Distance".
- ${LONGHURST_2017} Locator: PDF p. 2, triax repair; PDF p. 3, water.
- ${RICHARDS_2018} Locator: p. 4, the SMPTE 304 warning.`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Camera cables",
      section: "3 · Camera cables",
      body: "A graded check on what a camera control unit does, triax, the SMPTE hybrid fiber camera cable and tactical fiber. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which three jobs does Sony say its HXCU-FB80 CCU does?", options: ["Signal processing, an interface, camera power", "Recording, editing and storing camera video", "Switching, graphics and replay for the show", "Lighting control, tally and audio mixing"], correctIndex: 0, explanation: "Sony Corporation (2017, p. 3): it \"performs signal processing, provides an interface for external equipment, and supplies power to the camera.\"", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "With a remote control panel, what does Sony's CCU form?", options: ["A video router", "A camera control system", "A sync generator", "An intercom matrix"], correctIndex: 1, explanation: "Sony Corporation (2017, p. 3): with a Remote Control Panel it forms a camera control system.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "What does Ikegami say its CCU sends to and from the camera over fiber?", options: ["Only the camera's program video", "Only power and intercom audio", "Video, audio and control signals", "Only timecode and reference sync"], correctIndex: 2, explanation: "Ikegami (n.d.-d): fiber carries \"video, audio and control signals.\"", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "When does Ikegami say the CCU also powers the camera?", options: ["Only on tactical fiber runs", "Only when it runs on triax", "Never; heads use batteries", "When hybrid fiber/copper is used"], correctIndex: 3, explanation: "Ikegami (n.d.-d): \"supplying the power to the camera when hybrid fiber/copper cable is used.\"", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "Which intercom types does Ikegami list on its CCU and base-station panels?", options: ["4-wire, Clear-Com or RTS", "Dante, AES67 or MADI", "DMX, RS-232 or USB", "Wireless IFB only"], correctIndex: 0, explanation: "Ikegami (n.d.-a, n.d.-b): intercom (4-wire, Clear-Com or RTS).", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "Which of these does Ikegami list among the connections at the CCU end?", options: ["A DMX output", "A prompter feed", "A power feeder", "A USB hub port"], correctIndex: 1, explanation: "Ikegami's list: SDI program and monitor outputs, returns, reference, prompter feed, intercom, program sound, tally and a data trunk.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "Into what does Blackmagic's Studio Fiber Converter combine video, audio and control?", options: ["Four 12G-SDI coax cables", "A Cat6A Ethernet cable", "A single optical fiber cable", "A triax cable and a BNC"], correctIndex: 2, explanation: "Blackmagic Design (n.d.-b): it \"converts SDI video, audio, and remote camera control connections into a single optical fiber cable.\"", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "Which format does Blackmagic's Studio Fiber Converter give for the camera feed?", options: ["3G-SDI", "HDMI", "ST 2110", "12G-SDI"], correctIndex: 3, explanation: "Blackmagic Design (n.d.-b): 12G-SDI for the camera feed, plus three HD return feeds.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "How many HD return feeds does Blackmagic's Studio Fiber Converter provide?", options: ["Three", "Two", "Four", "One"], correctIndex: 0, explanation: "Blackmagic Design (n.d.-b): three HD return feeds, talkback, tally and power.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "Besides signals, what does Blackmagic's Studio Fiber Converter provide?", options: ["Lighting for the set", "Power for remote cameras", "Storage for recordings", "Wi-Fi for the crew"], correctIndex: 1, explanation: "Blackmagic Design (n.d.-b): \"power for your remote cameras.\"", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "What does Ikegami's DTA-55 and BST-55 triax system let owners do?", options: ["Swap triax for tactical fiber", "Run 12G-SDI over Cat6A", "Go from SD to HD on old triax", "Power cameras from the mains"], correctIndex: 2, explanation: "Ikegami (n.d.-a): move from SD to HD \"while still using their existing triax camera cable infrastructure.\"", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "How does Ikegami describe triax as a cable and connector type?", options: ["Fragile, factory repair only", "Light, for indoor use only", "Cheap, for one-time use", "Rugged and easy to repair"], correctIndex: 3, explanation: "Ikegami (n.d.-a): a \"rugged easy to repair cable/connector type.\"", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "What power for the camera head does Ikegami list for the BST-55?", options: ["Less than 180 VA", "Less than 18 VA", "Exactly 600 V", "Up to 10 A"], correctIndex: 0, explanation: "Ikegami (n.d.-a): \"Power for camera head: less than 180VA.\" 600 V and 10 A are LEMO's hybrid connector ratings.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "What maximum cable distance does Ikegami give for the BST-55?", options: ["4 km on hybrid fiber", "800 m on Fujikura 8.8 mm", "1,550 m on Belden 9267", "100 m on RG6 coax"], correctIndex: 1, explanation: "Ikegami (n.d.-a): maximum 800 m on Fujikura 8.8 mm triax.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "Reasoning from the BST-55's specifications, what shares the one triax cable?", options: ["Only the video; power runs apart", "Only the intercom and tally lines", "All the signals and camera power", "Only power; signals ride fiber"], correctIndex: 2, explanation: "The triax is the only link between base station and camera adaptor, so every signal and the camera's power share it; the reviewer will confirm against a triax manual.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "On Ikegami's HDK-79EC figures, how far does 14.5 mm Fujikura triax run?", options: ["850 m", "1,000 m", "500 m", "1,550 m"], correctIndex: 3, explanation: "Ikegami (n.d.-c, p. 5): 1,550 m on 14.5 mm Fujikura; 850 m on 8.8 mm.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "On Ikegami's HDK-79EC figures, how far does 8.8 mm Fujikura triax run?", options: ["850 m", "1,550 m", "1,000 m", "500 m"], correctIndex: 0, explanation: "Ikegami (n.d.-c, p. 5): 850 m on 8.8 mm Fujikura.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "On Ikegami's HDK-79EC figures, how far does 9.2 mm Belden 9267 triax run?", options: ["1,000 m", "500 m", "850 m", "1,550 m"], correctIndex: 1, explanation: "Ikegami (n.d.-c, p. 5): 500 m on Belden 9267; 1,000 m on 13.2 mm Belden 9232.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "On Ikegami's HDK-79EC figures, how far does 13.2 mm Belden 9232 triax run?", options: ["500 m", "850 m", "1,000 m", "1,550 m"], correctIndex: 2, explanation: "Ikegami (n.d.-c, p. 5): 1,000 m on Belden 9232.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "What pattern does lesson 8 read in Ikegami's triax table?", options: ["Belden always outruns Fujikura", "Thinner triax runs farther", "Every triax runs the same", "For each maker, thicker goes farther"], correctIndex: 3, explanation: "Fujikura 14.5 mm beats 8.8 mm, and Belden 13.2 mm beats 9.2 mm: within each maker's pair, the thicker cable runs farther.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "Under about what length does LEMO's white paper put HDTV on RG-11 type triax?", options: ["About 1000 m", "About 100 m", "About 10 km", "About 400 m"], correctIndex: 0, explanation: "Longhurst and Brooks (2017, p. 2): under about 1000 m, about 2000 m with a repeater.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "How does lesson 8 treat the LEMO paper's triax distances?", options: ["As current SMPTE limits", "As dated, older-camera figures", "As Ikegami's own figures", "As measured by this course"], correctIndex: 1, explanation: "LEMO attributes them to Grass Valley literature for an older camera, so the lesson treats them as dated.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "What does LEMO's white paper say a broken triax can be repaired with in a hurry?", options: ["A fusion splicer and a cleaver", "A crimp tool and a new BNC", "A stripper and insulation tape", "Epoxy and a polishing puck"], correctIndex: 2, explanation: "Longhurst and Brooks (2017, p. 2): a \"fast and dirty\" repair with a stripper and insulation tape.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "How far does Fischer say its 1051 Triax HD Pro+ reaches in HD without a repeater?", options: ["Up to 800 m", "Up to 10 km", "Up to 4 km", "Up to 1.5 km"], correctIndex: 3, explanation: "Richards (2018, pp. 4 to 5): \"up to 1.5 kilometers\" in HD without a repeater.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "How long does Fischer say a repair of its triax connector takes with simple tools?", options: ["About 10 minutes", "About two hours", "About one day", "About one minute"], correctIndex: 0, explanation: "Richards (2018, pp. 4 to 5): about 10 minutes with simple tools.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "How does lesson 8 treat Fischer's reach and repair figures?", options: ["As independent test results", "As a maker's claims about itself", "As SMPTE requirements", "As Ikegami's own specifications"], correctIndex: 1, explanation: "They come from Fischer's own white paper about its own product, and the lesson says so.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "Do the different triax connector families mate with one another, according to lesson 8?", options: ["Yes, every triax plug mates", "No, none of them ever mates", "Left open; match the system", "Only Fischer and LEMO mate"], correctIndex: 2, explanation: "Fischer's compatibility claim covers its own 1051 family. Whether other families mate is left open, so match the connector to the camera system.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "What does the SMPTE hybrid camera cable carry?", options: ["Copper for signals, fiber for power", "Coax for video, pairs for audio", "Fiber only, with aramid members", "Fiber for signals, copper for power"], correctIndex: 3, explanation: "The hybrid cable carries fiber for the signals and copper for power and control (Canare Electric, n.d.-c).", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "Which SMPTE standard covers the hybrid camera cable?", options: ["ST 311", "ST 304", "ST 2082", "ST 297"], correctIndex: 0, explanation: "ST 311 covers the cable and ST 304 the connector; Canare sells LF-2SM9N as ST 311 compliant.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "Which SMPTE standard covers the hybrid camera connector?", options: ["ST 311", "ST 304", "ST 2110", "ST 259"], correctIndex: 1, explanation: "ST 304: Camplex and LEMO describe the SMPTE 304M connector.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "Which fibers does Canare's LF-2SM9N carry?", options: ["Two multimode 50/125", "Four single-mode 9/125", "Two single-mode 9/125", "One multimode 62.5/125"], correctIndex: 2, explanation: "Canare Electric (n.d.-c): two single-mode 9/125 fibers, low water peak.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "Which power conductors does Canare's LF-2SM9N carry?", options: ["2 x 25 AWG", "2 x 14 AWG", "6 x 18 AWG", "4 x 20 AWG"], correctIndex: 3, explanation: "Canare Electric (n.d.-c): 4 x 20 AWG power and 2 x 25 AWG control conductors.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "Which control conductors does Canare's LF-2SM9N carry?", options: ["2 x 25 AWG", "4 x 20 AWG", "2 x 14 AWG", "8 x 24 AWG"], correctIndex: 0, explanation: "Canare Electric (n.d.-c): 2 x 25 AWG control conductors.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What outside diameter does Canare give for LF-2SM9N?", options: ["8.8 mm", "9.2 mm", "14.5 mm", "13.2 mm"], correctIndex: 1, explanation: "Canare Electric (n.d.-c): 9.2 mm. 8.8 and 14.5 mm are the Fujikura triax sizes in lesson 8.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What minimum bend radius does Canare give for LF-2SM9N?", options: ["20 x outside diameter", "10 x outside diameter", "6 x outside diameter", "2 x outside diameter"], correctIndex: 2, explanation: "Canare Electric (n.d.-c): 6 x the nominal outside diameter.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What temperature range does Canare give for LF-2SM9N?", options: ["0 to +40 °C", "-10 to +60 °C", "-20 to +50 °C", "-40 to +75 °C"], correctIndex: 3, explanation: "Canare Electric (n.d.-c): -40 to +75 °C.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What fiber type does Canare name for LF-2SM9N?", options: ["G.657.A2, low bending loss", "OM3 laser-optimized multimode", "OM1 62.5/125 multimode", "Polarization-maintaining type"], correctIndex: 0, explanation: "Canare Electric (n.d.-c): ITU-T G.657.A2, \"low bending loss\" single-mode.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "Someone says SMPTE camera fiber is multimode. What is right?", options: ["Right: it is OM3 multimode", "Wrong: it is single-mode", "Right for HD, wrong for 4K", "Wrong: it is plastic fiber"], correctIndex: 1, explanation: "ST 311 cable carries two single-mode fibers (Canare; LEMO; Camplex).", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What does LEMO's \"2 FO, 2 HV + 2 LV\" mean?", options: ["Two fiber outputs, video, lines", "Two front optics, halves, latches", "Two fiber, high- and low-voltage", "Two frequencies, two levels each"], correctIndex: 2, explanation: "LEMO (n.d., p. 2): two fiber contacts, two high-voltage and two low-voltage contacts.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "Which cable types does LEMO list for its 3K.93C SMPTE insert?", options: ["ARIB OC or Canare HFO", "Belden 1694A or 4794R", "OM3 or OM4 multimode", "SMPTE 311M or EBU R100"], correctIndex: 3, explanation: "LEMO (n.d., p. 2): cable type \"SMPTE 311M or EBU R100.\"", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "How does LEMO's 3K.93C connector lock?", options: ["Push-pull", "Bayonet", "Screw thread", "Snap-in clip"], correctIndex: 0, explanation: "LEMO (n.d., p. 2): push-pull locking.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What rated current does LEMO give for the 3K.93C?", options: ["20 A", "10 A", "600 A", "1 A"], correctIndex: 1, explanation: "LEMO (n.d., p. 2): rated current 10 A.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What working voltage does LEMO give for the 3K.93C's power contacts?", options: ["42 V", "120 V", "600 V", "48 V"], correctIndex: 2, explanation: "LEMO (n.d., p. 2): 600 V for power and 42 V for signal. It is a connector rating, not the voltage a CCU sends.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What working voltage does LEMO give for the 3K.93C's signal contacts?", options: ["600 V", "48 V", "30 V", "42 V"], correctIndex: 3, explanation: "LEMO (n.d., p. 2): 42 V for signal.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "How does Camplex describe the SMPTE 304M hybrid connector?", options: ["Two single-mode fibers, two power, two low-voltage", "Four multimode fibers and two power conductors", "Two fibers and one BNC for the program video", "One fiber and four power conductors in a shell"], correctIndex: 0, explanation: "Camplex (2019a): \"two singlemode fibers, two power conductors and two low voltage conductors in a single connector.\"", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What typical attenuation and return loss does LEMO give for its SMPTE connector?", options: ["0.5 dB, return loss over 20 dB", "0.1 dB, return loss over 45 dB", "1.0 dB, return loss over 30 dB", "0.05 dB, return loss over 60 dB"], correctIndex: 1, explanation: "Longhurst and Brooks (2017, p. 7): typical attenuation 0.1 dB and return loss over 45 dB.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What insertion loss does Canare claim for its SMPTE camera cable assemblies?", options: ["0.1 dB or less at 850 nm", "1.0 dB or less at 1.55 µm", "0.5 dB or less at 1.3 µm", "3 dB or less at 1300 nm"], correctIndex: 2, explanation: "Canare Electric (n.d.-b): insertion loss 0.5 dB or less at 1.3 µm, return loss 45 dB or more.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What gender is the SMPTE 304 connector on Blackmagic's camera-side fiber converter?", options: ["Female", "Genderless", "Either one", "Male"], correctIndex: 3, explanation: "Blackmagic Design (n.d.-b): male on the camera side, female on the studio side.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What gender is the SMPTE 304 connector on Blackmagic's studio-side converter?", options: ["Female", "Male", "Genderless", "Either one"], correctIndex: 0, explanation: "Blackmagic Design (n.d.-b): the studio-side converter has a female SMPTE 304 connector.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "Can Canare's Japanese-style OC hybrid connectors mate straight to SMPTE connectors?", options: ["Yes; they share one pinout", "No; a conversion cable is needed", "Yes, below 1 km of cable", "Yes, once the caps are off"], correctIndex: 1, explanation: "Canare Electric (n.d.-b): \"non-compatible with SMPTE connectors\"; a conversion cable is needed.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "Is 600 V the voltage a CCU puts on the hybrid cable's copper?", options: ["Yes: every CCU sends 600 V", "No: CCUs send exactly 42 V", "No: it is the connector's rating", "Yes, but only on long runs"], correctIndex: 2, explanation: "600 V is LEMO's working-voltage rating for the power contacts. No source read for the course states the supply voltage, and the course names none.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What precaution does lesson 9 set for the hybrid cable until the reviewer settles its voltage?", options: ["Treat it as data and plug it live", "Treat it as fiber and skip the copper", "Treat it as 600 V and call the FCC", "Treat it as power; follow the engineer"], correctIndex: 3, explanation: "\"Treat the hybrid cable as a power cable and follow the engineer's procedure for connecting it.\" The lesson labels this its own precaution.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "How far does Ikegami say the UHK-430 reaches with power from the CCU?", options: ["Up to 4 km", "Up to 600 m", "Up to 2 km", "Up to 20 km"], correctIndex: 0, explanation: "Ikegami (n.d.-d): up to 4 km (13,123 ft).", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "How far does Sony give for the HXC-FB80 with lens and viewfinder on its hybrid cable?", options: ["250 m", "600 m", "4 km", "10 km"], correctIndex: 1, explanation: "Sony Corporation (2017, p. 34): 600 m with lens and viewfinder; 250 m for the camera adaptor.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "According to Sony, what does reach on hybrid cable vary with?", options: ["The number of return feeds", "The SDI rate of the program", "The power peripherals draw", "The color of the jacket"], correctIndex: 2, explanation: "Sony Corporation (2017, p. 34): it \"varies depending on the total power consumption of the connected peripherals.\"", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "With the camera powered over the hybrid cable, what does LEMO say limits distance?", options: ["Loss in the single-mode fiber", "Reflections at the connector", "The CCU's processing delay", "Voltage drop in the power part"], correctIndex: 3, explanation: "Longhurst and Brooks (2017, p. 3): distance \"is only limited by the voltage drop in the electrical power part.\"", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "With local camera power, how far does LEMO say HD can run on single-mode fiber?", options: ["Well over 20 km", "About 600 m", "About 4 km", "Exactly 10 km"], correctIndex: 0, explanation: "Longhurst and Brooks (2017, p. 3): \"well over 20km\" with local power.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "Without the hybrid copper, what does single-mode fiber alone carry on Sony's system?", options: ["Power but no signals", "All signals except power", "Only the program video", "Only control and tally"], correctIndex: 1, explanation: "Sony Corporation (2017): \"all signals (except power),\" up to 10 km on general single-mode cable with LC connectors.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What does Sony say to do with a hybrid cable's end when it is not in use?", options: ["Coil it under tension", "Leave the end open", "Put its cap back on", "Wipe it with water"], correctIndex: 2, explanation: "Sony Corporation (2017, p. 10): dust may cause transmission errors; replace the cable's cap when not in use.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What does LEMO's white paper say about water and hybrid connectors?", options: ["Water helps cool the contacts", "Water matters only for triax", "Dry it with compressed air", "Waterproof end caps are essential"], correctIndex: 3, explanation: "Longhurst and Brooks (2017, p. 3): \"Any connector that is filled with water will have problems if it is to handle power\"; end caps are \"essential.\"", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What does Canare say to clean hybrid camera plugs with?", options: ["A non-alcohol cleaning stick", "A cotton swab and water", "Shop compressed air", "A dry fingertip"], correctIndex: 0, explanation: "Canare Electric (n.d.-b): plugs with a non-alcohol cleaning stick; shells with cotton gauze.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What on a ferrule tip does Canare say \"can have a disabling effect\"?", options: ["A dust cap", "Scratches or particles", "A blue boot", "A push-pull latch"], correctIndex: 1, explanation: "Canare Electric (n.d.-b): scratches or particles on a ferrule tip \"can have a disabling effect.\"", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "About what minimum bend radius is 6 x the outside diameter of LF-2SM9N?", options: ["About 92 mm", "About 184 mm", "About 55 mm", "About 9 mm"], correctIndex: 2, explanation: "6 x 9.2 mm is about 55 mm.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "Does Canare's sheet say whether LF-2SM9N's bend radius is for pulling or after installation?", options: ["Yes, it is the pulling figure", "Yes, it is the installed figure", "Yes, the two are the same", "No; the course leaves it open"], correctIndex: 3, explanation: "The sheet does not say, and the course leaves it open; lesson 14 explains why the difference matters.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What kind of fiber is Camplex's Pro-Tac tactical cable?", options: ["Single-mode", "OM3 multimode", "OM1 multimode", "Plastic fiber"], correctIndex: 0, explanation: "Camplex (n.d.-a): single-mode tactical fiber on reels.", sourceLessonSlug: "tactical-fiber" },
          { prompt: "With how many fanouts does Camplex offer Pro-Tac reels?", options: ["1, 2 or 3", "4, 8 or 12", "16, 24 or 48", "2, 6 or 10"], correctIndex: 1, explanation: "Camplex (n.d.-a): reels with 4, 8 or 12 fanouts.", sourceLessonSlug: "tactical-fiber" },
          { prompt: "Which connectors does Camplex offer on Pro-Tac?", options: ["SC or FC", "BNC or N", "ST or LC", "XLR or DMX"], correctIndex: 2, explanation: "Camplex (n.d.-a): ST or LC connectors.", sourceLessonSlug: "tactical-fiber" },
          { prompt: "How does Camplex describe Pro-Tac's construction?", options: ["Steel armor and a PVC jacket", "Copper power pairs and a braid", "A foil shield and a rubber jacket", "Aramid members, polyurethane jacket"], correctIndex: 3, explanation: "Camplex (n.d.-a): \"crush resistant with internal aramid strength members and a polyurethane jacket.\"", sourceLessonSlug: "tactical-fiber" },
          { prompt: "Where does Camplex say Pro-Tac can be used for a temporary deployment?", options: ["Directly on the ground", "Only inside conduit", "Only on a messenger wire", "Only buried for good"], correctIndex: 0, explanation: "Camplex (n.d.-a): \"Can be used directly on the ground for temporary deployment.\"", sourceLessonSlug: "tactical-fiber" },
          { prompt: "What use does Camplex build Pro-Tac for?", options: ["One permanent building install", "Many outside broadcast deployments", "Links between ships at sea", "Office network patch panels"], correctIndex: 1, explanation: "Camplex (n.d.-a): \"multiple deployments in outside broadcast.\"", sourceLessonSlug: "tactical-fiber" },
          { prompt: "Which signals do Camplex's converter systems carry over tactical fiber?", options: ["Only 12G-SDI video", "Only Ethernet data", "SDI, HDMI, Ethernet and audio", "Power, SDI and DMX"], correctIndex: 2, explanation: "Camplex (n.d.-c): \"4K HD/3G/6G/12G-SDI, HDMI, 100BaseT Ethernet, and audio signals.\"", sourceLessonSlug: "tactical-fiber" },
          { prompt: "How far does AJA say a FiDO pair carries 12G-SDI on single-mode fiber?", options: ["Up to 2 km", "Up to 600 m", "Up to 4 km", "Up to 10 km"], correctIndex: 3, explanation: "AJA Video Systems (2023, p. 4): \"up to 10km.\"", sourceLessonSlug: "tactical-fiber" },
          { prompt: "Which fiber connections does lesson 10 give for AJA's FiDO converters?", options: ["LC or ST single-mode", "SC multimode only", "SMPTE 304 hybrid", "BNC 75-ohm coax"], correctIndex: 0, explanation: "Lesson 10: a FiDO pair with LC or ST single-mode connections (AJA Video Systems, 2023).", sourceLessonSlug: "tactical-fiber" },
          { prompt: "Reasoned in lesson 10, how does SDI usually ride a tactical run?", options: ["Directly, with no converters", "Through a converter at each end", "On a copper pair in the jacket", "Through one HDMI adapter"], correctIndex: 1, explanation: "Camplex and AJA both sell converter pairs, so SDI rides tactical fiber through a converter at each end.", sourceLessonSlug: "tactical-fiber" },
          { prompt: "Does tactical fiber carry power to the far end, by lesson 10's reasoning?", options: ["Yes, on copper pairs inside", "Yes, the light powers it", "No; the far end needs power", "Only on 12-fanout reels"], correctIndex: 2, explanation: "Pro-Tac's description lists fibers and strength members, no copper, so the far end needs local power or a separate feed.", sourceLessonSlug: "tactical-fiber" },
          { prompt: "What is lesson 10's reasoning that tactical fiber carries no power?", options: ["Camplex says it carries 180 VA", "AJA says FiDO powers cameras", "SMPTE ST 311 says it in words", "Camplex lists no copper; Canare does"], correctIndex: 3, explanation: "Camplex describes fibers, strength members and jacket, while Canare's hybrid cable lists power conductors.", sourceLessonSlug: "tactical-fiber" },
          { prompt: "What is the status of the claim that tactical fiber carries no power?", options: ["Reasoned; the reviewer confirms", "Quoted from Camplex's page", "Quoted from SMPTE ST 311", "Measured by this course"], correctIndex: 0, explanation: "No source read says it in words; the lesson reasons it and the reviewer will confirm it before release.", sourceLessonSlug: "tactical-fiber" },
          { prompt: "Which of the three camera cables carries no camera power?", options: ["Triax", "Tactical fiber", "SMPTE hybrid", "All of them carry it"], correctIndex: 1, explanation: "Triax carries power (BST-55, under 180 VA); the hybrid carries it when the CCU powers the camera; tactical fiber does not.", sourceLessonSlug: "tactical-fiber" },
          { prompt: "What example reach does lesson 10's table give for triax?", options: ["Up to 10 km", "Up to 4 km, powered", "500 to 1,550 m, by cable", "About 100 m"], correctIndex: 2, explanation: "Ikegami (n.d.-c): 500 to 1,550 m depending on the cable.", sourceLessonSlug: "tactical-fiber" },
          { prompt: "What sets the reach of a tactical fiber run, per lesson 10's table?", options: ["The color of its jacket", "The CCU's power supply", "A triax repeater", "The converters at each end"], correctIndex: 3, explanation: "Tactical reach is set by the converters, such as 10 km for AJA's FiDO.", sourceLessonSlug: "tactical-fiber" },
          { prompt: "Where does Fischer warn that a 9-micron single-mode connector can cause problems without extreme care?", options: ["Sand, mud or water", "Heat, sun and wind", "Snow, ice and frost", "Rain, but only at night"], correctIndex: 0, explanation: "Richards (2018, p. 4): sand, mud or water, \"without extreme care.\"", sourceLessonSlug: "tactical-fiber" },
          { prompt: "Why does lesson 10 say to weigh Fischer's warning about fiber?", options: ["Fischer makes SMPTE fiber cable", "Fischer makes competing triax gear", "Fischer is a standards body", "Fischer wrote ST 304 itself"], correctIndex: 1, explanation: "Fischer makes triax connectors, the competing technology, so its warning about fiber comes from an interested party.", sourceLessonSlug: "tactical-fiber" },
          { prompt: "Which fiber makers' own warnings does lesson 10 say match Fischer's?", options: ["AJA on lasers, VESA on length", "Canare on bends, Belden on loss", "Sony on dust and LEMO on water", "Coaxicom on VSWR, DDK on BNC"], correctIndex: 2, explanation: "Sony warns that dust may cause transmission errors, and LEMO that water-filled power connectors have problems.", sourceLessonSlug: "tactical-fiber" },
        ],
      },
    },
  ],
};
