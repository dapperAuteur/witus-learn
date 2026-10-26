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
// BUILD STATUS: complete, in two passes on 2026-10-26. Pass 1 wrote sections 1 to 5 (lessons 1 to 18):
// why the cable matters; video over copper; camera cables; fiber; audio over copper. Pass 2 wrote
// sections 6 to 9 (lessons 19 to 29): audio and video over the network; power; control, comms and
// data; craft, ending in the hands-on capstone (lesson 29). Nine section quizzes and a final (pool 44,
// serves 10, passes at 80). 29 teaching lessons, one over the brief's "about 24 to 28": section 7
// (electrical safety) was given four lessons rather than crowding the stop list into a third.
//
// VISIBILITY: PUBLIC, and HELD ("Coming soon") until a NAMED qualified reviewer, a broadcast engineer,
// has read every lesson marked QR with authority to change or cut it (a stage electrician joins for
// section 7). The publishHoldReason in scripts/seed-courses.ts says so.
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line naming who must act.
//   QR (a broadcast engineer): 2 (the 75 against 50 ohm arithmetic), 5 (three published reaches for
//   one cable, one worked out), 7 (reference termination and the timecode connectors), 8 (all of a
//   triax system's signals and power on one cable), 9 (the hybrid cable's power, bend radius), 10
//   (tactical fiber carries no power), 13 (the cleaning rule), 14 (the loss-budget arithmetic and the
//   short-link overload), 15 (laser safety), 16 (the common-mode wording, pin 3 as the cold leg), 17
//   (never patch party-line into audio; DMX cable), 18 (AES3 run lengths and conversion).
//   QR (a broadcast engineer), pass 2: 19 (category reasoning, PoE loss), 20 (the makers' switch
//   list in place of Audinate's, ST 2110 on copper), 25 (DMX limits, the Sony 9-pin pin-out, GPI),
//   26 (RF connectors, the BNC in both worlds), 27 (coil to the bend radius, cable protectors under
//   the ADA), 28 (testers and the fault-finding order).
//   QR (a stage electrician): 21, 22, 23 and 24, all of section 7.
//   Practitioner: 29, the capstone (a recorded model-answer video).
//   Unmarked: 1, 3, 4, 6, 11, 12 (definitions and spec-sheet facts read directly from the sources).
//
// SECTION 7 teaches what the power connectors are, what the rules say about who may do what, and when
// to stop and call a licensed electrician; it never teaches tying in, opening a panel, landing a feeder
// or building a cable. Corrections taught from research file 03: cam connection order is ground,
// neutral, then the hots (reverse to disconnect), from Lex's label, and never live; classic powerCON
// must not be connected or disconnected under load while TRUE1 is rated for it, so learners read the
// exact part's page; the hot colors are reasoning by elimination, not a sourced rule; NEC Article 530
// is described by subject and neither of NFPA's two titles is asserted.
//
// LINK, DO NOT REPEAT. CREW-05's fiber lessons ("20 · Fiber on the map", "21 · Where to learn fiber,
// and what certifies it", "22 · A fiber kit and a first lab"), its "12 · ST 2110: separate streams" and
// "17 · One clock: PTP", "6 · What the job asks you to know about IP", "9 · Why multicast is on every
// posting", "14 · Bandwidth math" and "24 · Source, transport or receiver?"; CREW-04's "7 · Outputs,
// timecode and genlock"; Light on Set's "26 · Cords, plugs and circuits" and "27 · What the rules
// forbid"; Basic Construction Safety's "10 · Subpart K: electricity on a jobsite"; Knot-Tying's
// "28 · Coiling cable over-under"; Sound Craft's "15 · The kit and the site survey";
// broadcasting-break-in's "6 · Signal flow and audio fundamentals" and "9 · Encoding, streaming, and
// the FCC basics". Each is named by title where this course stops.
// Correction to the brief (both research files): the three fiber lessons are in CREW-05, not CREW-02,
// and sound-craft names no Dante.
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, may be hosted later: U.S. government works: the FDA laser page, the 29 C.F.R. sections
//    (eCFR text), 47 C.F.R. § 15.236 (govinfo), the CPSC fact sheets and the Access Board's 2010 ADA
//    Standards.
//  - Tier B, link only, never rehost: every maker's spec sheet, manual, product page and knowledge
//    base (AJA, Belden, Blackmagic Design, Camplex, Canare, Clear-Com, Coaxicom, DDK, ENTTEC, HDMI
//    Licensing Administrator, Ikegami, LEMO, Mackie, Markertek, QSC, Rane, RME, Rohde & Schwarz,
//    Schoeps, Semtech, Sennheiser, Sony via its dealer's copy, VESA), the Fischer and LEMO white
//    papers, ProSoundWeb, the FOA's reference pages, SMPTE's free overview documents (OV 297-0 and
//    OV 2082-0) and ESTA's published-documents listing. Pass 2 adds, all Tier B: Siemon, Fluke
//    Networks, Neutrik, Texas Instruments, Shure, Symetrix, EAW, Brainboxes, Biamp, Cambrionix,
//    Interpower, Leviton, Union Connector, Eaton (a distributor's copy), Lex, Southwire, Rolls,
//    LEWITT (Tobias), Texas A&M PerfTech, NFPA's free chart and panel statement, ETCP and ESTA's
//    handbook, Brookhaven National Laboratory's fact sheet, the Minnesota DLI filming sheet, the
//    Oregon license directory, the LII reproduction of Or. Admin. R. 918-282-0230, and the FOA's
//    testing pages.
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
// (n.d.-a) and (n.d.-b). File 02's single Neutrik page (etherCON NE8MX6) becomes Neutrik (n.d.-h),
// after file 03's Neutrik (n.d.-a) to (n.d.-g).
//
// STANDARDS: unmapped for now (BACKLOG entry in scripts/check-standards-coverage.ts).
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts, keys crew00-*):
//  - L2: the 75 against 50 ohm arithmetic (crew00-mismatch-arithmetic); whether mating a 50-ohm BNC
//    with a 75-ohm BNC damages either (crew00-bnc-mating-damage).
//  - L6: a maximum passive HDMI length (crew00-hdmi-max-length).
//  - L7: terminating a reference chain by hand (crew00-reference-termination); which connectors carry
//    LTC (crew00-ltc-connectors).
//  - L8: whether every signal and the camera's power share the one triax (crew00-triax-single-cable);
//    triax connector families and intermating (crew00-triax-connectors).
//  - L9: the voltage on a hybrid cable's copper (crew00-hybrid-voltage); pulling or installed bend
//    radius for LF-2SM9N (crew00-hybrid-bend-radius).
//  - L10: tactical fiber carries no power (crew00-tactical-no-power).
//  - L13: the default cleaning rule (crew00-cleaning-default).
//  - L14: an attenuator on a very short FiDO link (crew00-short-link-attenuator).
//  - L15: the laser class of fiber camera transmitters (crew00-camera-laser-class).
//  - L16: the one-sentence account of common-mode rejection (crew00-balanced-wording); pin 3 as the
//    cold leg, in words (crew00-xlr-pin3-cold).
//  - L17: other makers' 4-pin headset pin-outs (crew00-headset-pinouts); DMX cable impedance
//    (crew00-dmx-cable-impedance).
//  - L18: current AES3 and AES3id run lengths (crew00-aes3-run-lengths).
//  - L19: 10GBASE-T reach on Category 6 (crew00-cat6-10g-reach); PoE power at the switch end
//    (crew00-poe-switch-end).
//  - L20: Audinate's own switch requirements (crew00-dante-audinate-requirements); whether Dante
//    needs a dedicated network (crew00-dante-dedicated-network); ST 2110 copper in practice
//    (crew00-st2110-copper).
//  - L21: the ground pin on each stage pin size (crew00-stage-pin-ground); whether TRUE1 mates with
//    classic powerCON (crew00-true1-intermating).
//  - L22: black, red and blue as the hots, by elimination (crew00-cam-hot-colors); why reverse gender
//    exists (crew00-reverse-gender-reason); OSHA's 2002 letter on daisy chains
//    (crew00-osha-daisy-chain-letter).
//  - L23: single-conductor cam feeder under OSHA and the NEC (crew00-cam-feeder-osha-nec); Article
//    530's title (crew00-nec-530-title); Oregon's official rule text (crew00-oregon-rule-official);
//    ETCP in place of a license (crew00-etcp-license).
//  - L24: a crew procedure for mismatched cam gender (crew00-turnaround-procedure).
//  - L25: Sony's own 9-pin pin-out (crew00-sony-9pin); USB 3.x length, Biamp against Cambrionix
//    (crew00-usb3-length). DMX device count and termination stay under crew00-dmx-cable-impedance.
//  - L26: the FCC's current licensing and 600 MHz guidance (crew00-fcc-wireless-licensing).
//  - L27: labeling both ends as this course's practice (crew00-label-both-ends); cable protectors
//    under the ADA (crew00-cable-protector-ada).
//  - L29: the kit list as this course's own (crew00-kit-list).
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
const CLEARCOM_XLR_DIFF =
  "Clear-Com. (2024a, December 16). *General: What is the difference between an XLR connector wired for balanced audio and one wired for Clear-Com partyline intercom?* Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158808157";
const CLEARCOM_HEADSETS =
  "Clear-Com. (2026c, June 4). *Matrix: What are the headset pin outs for 4 pin XLR, 5 pin XLR and 5 pin Din units*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158808488";
const LEERMAN_2013 =
  "Leerman, C. (2013, March 28). *Pro production: Understanding DMX lighting control* (p. 2). ProSoundWeb. https://www.prosoundweb.com/pro-production-understanding-dmx-lighting-control/2/";
const ENTTEC_2026 = "ENTTEC. (2026, July 19). *Can I use a microphone cable for DMX?* ENTTEC Support. https://support.enttec.com/dmx/dmx-basics/can-i-use-a-microphone-cable-for-dmx";
const ESTA_LISTING = `Entertainment Services and Technology Association. (n.d.). *Published documents*. ESTA Technical Standards Program. ${RETRIEVED} https://tsp.esta.org/tsp/documents/published_docs.php`;
const BOHN_2014 = "Bohn, D. (2014). *Interfacing AES3 & S/PDIF* (RaneNote 149). Rane Corporation. https://www.ranecommercial.com/legacy/pdf/ranenotes/Interfacing_AES3_&_SPDIF.pdf";
const RME_ADI648 = "RME. (n.d.). *User's guide: ADI-648 multichannel audio digital interface*. https://www.rme-audio.de/downloads/adi648_e.pdf";

// Audio and video over the network (research file 02, section 6)
const BELDEN_5E =
  "Belden. (2026c). *5e LAN Category 5e CMR: Category 5e cable, 4 pair, U/UTP, CMR* [Technical data sheet, revision 0.10]. https://catalog.belden.com/techdata/EN/5eLANCategory5eCMR_techdata.pdf";
const SIEMON_6A_SFTP = `Siemon. (n.d.-a). *Category 6A S/FTP cable: International* [Spec sheet]. ${RETRIEVED} https://files.siemon.com/en/specsheet/siemon-category-6a-s-ftp-cable-international_spec-sheet.pdf`;
const SIEMON_6A_UTP = `Siemon. (n.d.-b). *Category 6A UTP cable: International* [Spec sheet]. ${RETRIEVED} https://files.siemon.com/en/specsheet/siemon-category-6a-utp-lsoh-international_spec-sheet.pdf`;
const SIEMON_P6 = `Siemon. (n.d.-c). *Premium 6 UTP cable* [Spec sheet]. ${RETRIEVED} https://files.siemon.com/en/specsheet/siemon-premium_6_utp_cable_spec-sheet.pdf`;
const FLUKE_2016 =
  "Fluke Networks. (2016, February 9). *Cabling mistakes #1: Specify channel testing while installing permanent links*. https://www.flukenetworks.com/blog/cabling-chronicles/dumb-thing-1-specifying-channel-testing-when-installing-permanent-links";
const NEUTRIK_ETHERCON = `Neutrik. (n.d.-h). *etherCON CAT6A cable connector self-termination, for insulation diameter > 1.1 mm, nickel plating (NE8MX6)* [Product page]. ${RETRIEVED} https://www.neutrik.com/en/product/ne8mx6`;
const TI_2018 =
  "Texas Instruments. (2018). *TPS2373 high-power PoE PD interface with advanced startup* (SLUSCD1C, revised November 2018) [Data sheet]. https://www.ti.com/lit/ds/symlink/tps2373.pdf";
const SHURE_2021 =
  "Shure. (2021, June 17). *Configuring a network switch for Shure devices and Dante/AES67*. Shure Service. https://service.shure.com/articles/en_US/Knowledge/Dante-Switch-Configuration";
const SENNHEISER_DANTE = `Sennheiser. (n.d.). *Designing and configuring Dante network*. TC Bar network guide. ${RETRIEVED} https://docs.cloud.sennheiser.com/en-us/tc-bar/tc-bar/network-guide/designing-configuring-dante-network.html`;
const SYMETRIX = `Symetrix. (n.d.). *Dante requirements*. Symetrix Composer Help. ${RETRIEVED} https://composer-docs.symetrix.co/networking/dante-audio/Dante_Requirements.html`;
const EAW = `Eastern Acoustic Works. (n.d.). *Selecting network switches for Dante*. EAW Knowledge Base. ${RETRIEVED} https://design.eaw.com/en/knowledge/selecting-network-switches-for-dante`;
const CLEARCOM_DANTE_NEW =
  "Clear-Com. (2024c, August 11). *Matrix: New install - Dante requirements*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/3142615056";
const CLEARCOM_DANTE_REQ =
  "Clear-Com. (2025a, January 21). *Dante requirements and recommendations*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/220725331";
const CLEARCOM_FIREWALL =
  "Clear-Com. (2025b, March 13). *Matrix: Dante controller & EHX blocked by company firewall*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/3416293547";
const CLEARCOM_ISOLATE =
  "Clear-Com. (2025c, December 24). *Shure: How do I isolate Dante network*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/4298670090";
const CLEARCOM_AES67 =
  "Clear-Com. (2026b, January 26). *Matrix: New install - Network requirements for AES67 audio*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/3142975501";

// Control, comms and data (research file 02, section 8)
const CLEARCOM_GPI =
  "Clear-Com. (2019a, April 6). *Matrix: What is opto-isolated mode on the Eclipse frame GPI inputs?* Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158851786";
const CLEARCOM_IFB_GPI =
  "Clear-Com. (2024b, November 22). *Matrix: IFB audio, can I switch the PGM via GPI or panel key*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/3376381960";
const CLEARCOM_RELAY =
  "Clear-Com. (2026a, April 28). *HelixNet DB25 relay pin-out*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/513933691";
const BRAINBOXES_SERIAL =
  "Brainboxes. (2026a, February 19). *RS232, RS422 & RS485 standards*. Brainboxes Documentation. https://docs.brainboxes.com/explanation/serial-communications/rs232-rs422-rs485-standards";
const BRAINBOXES_SONY =
  "Brainboxes. (2026b, March 13). *Sony RS-422 DB9 pinout*. Brainboxes Documentation. https://docs.brainboxes.com/reference/pinouts/sony-rs-422-pinout-db9";
const BMD_ATEM = `Blackmagic Design. (n.d.-c). *ATEM* [Tech specs page]. ${RETRIEVED} https://www.blackmagicdesign.com/products/atem/techspecs`;
const BMD_HYPERDECK = `Blackmagic Design. (n.d.-d). *HyperDeck Studio* [Tech specs page]. ${RETRIEVED} https://www.blackmagicdesign.com/products/hyperdeckstudio/techspecs`;
const BIAMP = `Biamp. (n.d.). *What to consider when working with USB*. Biamp Cornerstone. ${RETRIEVED} https://support.biamp.com/Biamp_Control/Troubleshooting/What_to_consider_when_working_with_USB`;
const CAMBRIONIX = `Cambrionix. (n.d.). *Maximum length of a USB cable*. Cambrionix Knowledge Base. ${RETRIEVED} https://knowledge.cambrionix.com/Content/Articles/USB/Maximum-Length-of-a-USB-Cable.htm`;
const SHURE_UA825 = `Shure. (n.d.). *UA825: Coaxial cable* [Product page]. ${RETRIEVED} https://www.shure.com/en-US/products/accessories/ua825`;
const CFR_47_15_236 =
  "47 C.F.R. § 15.236 (2025). U.S. Government Publishing Office, Code of Federal Regulations, October 1, 2025 edition. https://www.govinfo.gov/content/pkg/CFR-2025-title47-vol1/pdf/CFR-2025-title47-vol1-sec15-236.pdf";

// Power (research file 03, section 7). Regulations were read in the official eCFR text current to
// October 22, 2026 (osha.gov refused the fetch).
const ECFR = "eCFR text current to October 22, 2026.";
const CFR_1910_303 = `Occupational Safety and Health Standards, 29 C.F.R. § 1910.303 (2026). ${ECFR} ${RETRIEVED} https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.303`;
const CFR_1910_304 = `Occupational Safety and Health Standards, 29 C.F.R. § 1910.304 (2026). ${ECFR} ${RETRIEVED} https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.304`;
const CFR_1910_305 = `Occupational Safety and Health Standards, 29 C.F.R. § 1910.305 (2026). ${ECFR} ${RETRIEVED} https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.305`;
const CFR_1910_332 = `Occupational Safety and Health Standards, 29 C.F.R. § 1910.332 (2026). ${ECFR} ${RETRIEVED} https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.332`;
const CFR_1910_334 = `Occupational Safety and Health Standards, 29 C.F.R. § 1910.334 (2026). ${ECFR} ${RETRIEVED} https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.334`;
const CFR_1910_399 = `Occupational Safety and Health Standards, 29 C.F.R. § 1910.399 (2026). ${ECFR} ${RETRIEVED} https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.399`;
const CFR_1926_404 = `Safety and Health Regulations for Construction, 29 C.F.R. § 1926.404 (2026). ${ECFR} ${RETRIEVED} https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1926&section=1926.404`;
const CFR_1926_405 = `Safety and Health Regulations for Construction, 29 C.F.R. § 1926.405 (2026). ${ECFR} ${RETRIEVED} https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1926&section=1926.405`;
const CFR_1926_416 = `Safety and Health Regulations for Construction, 29 C.F.R. § 1926.416 (2026). ${ECFR} ${RETRIEVED} https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1926&section=1926.416`;
const INTERPOWER = `Interpower. (n.d.). *NEMA nomenclature*. ${RETRIEVED} https://interpower.com/ic/designers/designing-for-export/guides-and-charts/nema-nomenclature-guide.html`;
const LEVITON_2310 = `Leviton. (n.d.-a). *20 amp, 125 volt, flush mount locking receptacle, industrial grade (2310)*. ${RETRIEVED} https://leviton.com/products/2310`;
const LEVITON_2610 = `Leviton. (n.d.-b). *30 amp, 125 volt, flush mount locking receptacle, industrial grade (2610)*. ${RETRIEVED} https://leviton.com/products/2610`;
const LEVITON_2620 = `Leviton. (n.d.-c). *30 amp, 250 volt, flush mount locking receptacle, industrial grade (2620)*. ${RETRIEVED} https://leviton.com/products/2620`;
const LEVITON_2710 = `Leviton. (n.d.-d). *30 amp, 125/250 volt, flush mount locking receptacle, industrial grade (2710)*. ${RETRIEVED} https://leviton.com/products/2710`;
const LEVITON_2810 = `Leviton. (n.d.-e). *30 amp, 120/208 volt, flush mount locking receptacle, industrial grade (2810)*. ${RETRIEVED} https://leviton.com/products/2810`;
const LEVITON_5252 = `Leviton. (n.d.-g). *15 amp duplex receptacle/outlet, industrial grade, self-grounding (5252)*. ${RETRIEVED} https://leviton.com/products/5252`;
const LEVITON_5362 = `Leviton. (n.d.-h). *20 amp single receptacle/outlet, industrial grade, self-grounding (5362)*. ${RETRIEVED} https://leviton.com/products/5362`;
const LEVITON_SHEET = `Leviton. (n.d.-i). *20A and 30A flush locking receptacle devices* (PK-A3388-10-02-0I) [Instruction sheet]. ${RETRIEVED} https://leviton.com/content/dam/leviton/commercial-industrial/product_documents/instruction_sheet/PK-A3388-10-02-0H-W.pdf`;
const UNION_PIN = `Union Connector. (n.d.-a). *Stage pin connectors, pin connectors*. ${RETRIEVED} https://unionconnector.com/connectors/stage-pin-connectors`;
const UNION_CS = `Union Connector. (n.d.-b). *Basic company switch with Series 16 Cam-Lok receptacle, 100 amp*. ${RETRIEVED} https://unionconnector.com/https-unionconnector-com-company-switch/`;
const UNION_SAFECAM = `Union Connector. (n.d.-c). *Basic company switch with Series 16 SafeCam receptacles, 100 amp*. ${RETRIEVED} https://unionconnector.com/basic-company-switch-with-series-16-safecam-receptacles-100-amp/`;
const UNION_GEN = `Union Connector. (n.d.-d). *Generator connection box: 100 - 400 amp*. ${RETRIEVED} https://unionconnector.com/generator-connection-box-with-series-16-cam-inlets-100-400-amp/`;
const UNION_2016 = `Union Connector. (2016). *Company switch data sheet CSC-4020-CSP-3R* [Data sheet]. ${RETRIEVED} https://unionconnector.com/wp-content/uploads/Company_Switch_Data_Sheet_CSC4020CSP3R.pdf`;
const NEUTRIK_PG = `Neutrik. (n.d.-a). *powerCON connectors & circular connectors* [Product guide; file name "PG EN 202210-V25"]. ${RETRIEVED} https://www.neutrik.com/media/10093/download/Neutrik%20Product%20Guide%20-%2006%20powerCON%20and%20Circular%20Connectors%20PG%20EN%20202210-V25.pdf?v=10`;
const NEUTRIK_NAC3FCA = `Neutrik. (n.d.-b). *NAC3FCA* [Product page]. ${RETRIEVED} https://www.neutrik.com/en/product/nac3fca`;
const NEUTRIK_NAC3FCB = `Neutrik. (n.d.-c). *NAC3FCB* [Product page]. ${RETRIEVED} https://www.neutrik.com/en/product/nac3fcb`;
const NEUTRIK_NAC3FXW = `Neutrik. (n.d.-d). *NAC3FX-W* [Product page]. ${RETRIEVED} https://www.neutrik.com/en/product/nac3fx-w`;
const NEUTRIK_NAC3FXXA = `Neutrik. (n.d.-f). *NAC3FXXA-W-S* [Product page]. ${RETRIEVED} https://www.neutrik.com/en/product/nac3fxxa-w-s`;
const NEUTRIK_NAC3MPA = `Neutrik. (n.d.-g). *NAC3MPA-1* [Product page]. ${RETRIEVED} https://www.neutrik.com/en/product/nac3mpa-1`;
const NEUTRIK_2025 =
  "Neutrik. (2025). *powerCON TRUE1 cable connector NAC3F-TRUE1-CG & NAC3M-TRUE1-CG: Application & safety instruction* (BDA 728 V2) [Product manual]. https://www.neutrik.com/media/20441/download/BDA%20728%20V2%20-%20powerCON%20TRUE1%20Cable%20Connector%20NAC3F-TRUE1-CG%20&%20NAC3M-TRUE1-CG.pdf?v=1";
const EATON_2017 =
  "Eaton. (2017). *Cam-Lok single pole connectors E-Z1016 & E-Z1018 series: Installation and maintenance information IM 1012* (Rev. E) [Instruction sheet; distributor-hosted copy]. https://default.assets-hunzicker-prod.roccommercecloud.com/assets%2F9af5b16fd6300952702ff91767e7b311/E_Z1016_8006_Installation_Manual.pdf";
const LEX_CABLES = `LEX Innovations. (n.d.-a). *Specification of feeder cables*. ${RETRIEVED} https://lexproducts.com/technical/specification-feeder-cables`;
const LEX_FBL305W = `LEX Innovations. (n.d.-b). *100A 5-wire banded cam-type feeder extension (FBL305W)*. ${RETRIEVED} https://lexproducts.com/powerflex_detail?part=FBL305W-xxx`;
const LEX_MMM = `LEX Innovations. (n.d.-c). *Cam-type adapter, (1) male to (1) male (MMM)*. ${RETRIEVED} https://lexproducts.com/powerflex_detail?part=MMM-y`;
const LEX_CS100 = `LEX Innovations. (n.d.-d). *100A company switch black: Indoor CAM & lug panel (CS-100F-C5DS1-BLK)*. ${RETRIEVED} https://lexproducts.com/powergate_detail?part=CS-100F-C5DS1-BLK`;
const LEX_2020 =
  "Lex Products. (2020). *PowerGATE 400A-800A input/output panels user manual* (LM-PIP400). https://lexproducts.com/admin/storage/uploads/2020/04/13/5e94bc9f2ab61400A-800A-Input-Output-Panel-Manual-final.pdf";
const SOUTHWIRE = `Southwire. (n.d.). *600V ROYAL SOOW cord with black jacket 90°C. MSHA approved* (SPEC 70000). ${RETRIEVED} https://www.southwire.com/wire-cable/flexible-cord/600v-royal-soow-cord-with-black-jacket-90-c-msha-approved/p/SPEC70000`;
const BROOKHAVEN_2007 =
  "Brookhaven National Laboratory. (2007). *[Fact sheet on extension cords and power strips]* [Fact sheet, created August 17, 2007]. https://www.bnl.gov/esh/shsd/pdf/electrical/fact%20sheet%20text%201.pdf";
const CPSC_GFCI = `U.S. Consumer Product Safety Commission. (n.d.-a). *CPSC fact sheet: What is a GFCI?* (Pub. 099). ${RETRIEVED} https://www.cpsc.gov/s3fs-public/099_0.pdf`;
const CPSC_2008 = "U.S. Consumer Product Safety Commission. (2008). *Home electrical safety checklist* (Pub. 513). https://www.cpsc.gov/s3fs-public/513.pdf";
const NFPA_2021 =
  "National Fire Protection Association. (2021). *Second revision no. 8529-NFPA 70-2021: Change title of Article 530* [NEC Code-Making Panel 15 second revision statements, 2023 edition cycle]. https://docinfofiles.nfpa.org/files/AboutTheCodes/70/70_A2022_NEC_P15_SD_SRStatements.pdf";
const NFPA_2026 =
  "National Fire Protection Association. (2026). *NEC restructure (2023-2029): Proposed organization of the 2029 National Electrical Code* [Chart]. https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/NEC/NEC-2023-2029-Restructure.pdf?rev=d73eb274f19d4b5ca73f25a26ce3134a";
const ESTA_2016 =
  "Entertainment Services and Technology Association. (2016). *Entertainment Technician Certification Program candidate handbook: Certified entertainment electrician* (Version 5.0). https://etcp.esta.org/certify/documents/electrical/ETCP_Handbook_Electrical.pdf";
const ETCP_GET = `Entertainment Technician Certification Program. (n.d.-a). *Get certified: Entertainment electrician*. ${RETRIEVED} https://etcp.esta.org/certify/certify_electrical.html`;
const ETCP_EXAM = `Entertainment Technician Certification Program. (n.d.-b). *Examination content: Entertainment electrician*. ${RETRIEVED} https://etcp.esta.org/certify/examination_electrical.html`;
const MN_DLI = `Minnesota Department of Labor and Industry. (n.d.). *Filming in Minnesota: Electrical safety requirements* [PDF]. ${RETRIEVED} https://dli.mn.gov/sites/default/files/pdf/eli_filming.pdf`;
const OREGON_ST =
  "Oregon Secretary of State. (2026, February 11). *Limited journeyman stage electrician (ST)* [Oregon license directory entry; issuing agency DCBS Building Codes Division]. https://apps.oregon.gov/SOS/LicenseDirectory/LicenseDetail/18";
const OREGON_RULE = `Limited Journeyman Stage Electrician License, Or. Admin. R. 918-282-0230 (2005). Legal Information Institute reproduction. ${RETRIEVED} https://www.law.cornell.edu/regulations/oregon/Or-Admin-Code-SS-918-282-0230`;

// Craft (research file 03, section 9)
const TOBIAS_2023 = "Tobias, T. K. (2023, July 10). *How to roll your cable*. LEWITT. https://www.lewitt-audio.com/blog/how-to-roll-your-cable";
const MOELLER_2014 = "Moeller, J. (2014, January 28). *Cable wrapping*. PerfTech, Texas A&M University. https://perftech.sites.tamu.edu/2014/01/28/cable-wrapping/";
const CFR_1910_22 = `Occupational Safety and Health Standards, 29 C.F.R. § 1910.22 (2026). ${ECFR} ${RETRIEVED} https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.22`;
const CFR_1910_37 = `Occupational Safety and Health Standards, 29 C.F.R. § 1910.37 (2026). ${ECFR} ${RETRIEVED} https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.37`;
const ACCESS_BOARD = `U.S. Access Board. (n.d.). *ADA accessibility standards: 2010 standards for Titles II and III facilities*. ${RETRIEVED} https://www.access-board.gov/ada/`;
const ROLLS_2001 = "Rolls. (2001). *CT 1 Cable Detective cable tester owner's manual* [Manual dated 10/01]. https://www.rolls.com/doc/manuals/manual_CT1.pdf";
const FLUKE_2018 =
  "Fluke Networks. (2018, September 6). *Wire map testing: It's not all about color*. https://www.flukenetworks.com/blog/cabling-chronicles/wire-map-testing-it-s-not-all-about-color";
const FOA_2019 = `Fiber Optic Association. (2019). *The FOA reference for fiber optics: Link testing*. ${RETRIEVED} https://www.thefoa.org/tech/ref/testing/test/linktest.html`;
const FOA_2020 = `Fiber Optic Association. (2020). *The FOA reference for fiber optics: Fiber optic testing*. ${RETRIEVED} https://www.thefoa.org/tech/ref/basic/test.html`;
const FOA_2021 = `Fiber Optic Association. (2021). *The FOA reference for fiber optics: Testing UTP premises cabling, wiremap*. ${RETRIEVED} https://www.thefoa.org/tech/ref/premises/wiremap.html`;
const FOA_2024 = `Fiber Optic Association. (2024). *The FOA reference for fiber optics: Network troubleshooting*. ${RETRIEVED} https://www.thefoa.org/tech/ref/testing/test/network-troubleshooting.html`;

/** The marker every lesson needing a qualified reviewer opens with (authoring checklist, section 3). */
const QR = "> **Before release:** needs a qualified reviewer (QR): a broadcast engineer.";
/** Section 7 (electrical safety) is held for a stage electrician instead. */
const QR_ELEC = "> **Before release:** needs a qualified reviewer (QR): a stage electrician.";

export const CABLES_AND_CONNECTORS_COURSE: AuthoredCourse = {
  title: "Cables and Connectors",
  description:
    "The first thing a new crew member is handed, and the thing every course in The Crew Behind the Show assumes. Pick up a cable on a broadcast truck, a stage or an arena floor and say what it carries, what connector is on each end and why, how far it can run, what breaks it, and what must never be plugged into it. The course reads makers' spec sheets and free reference pages to teach impedance and why a cable that fits can still be wrong; SDI on 75-ohm coax and BNC from SD to 12G, and where HDMI and DisplayPort stop; reference, timecode and return video; triax, the SMPTE hybrid fiber camera cable and tactical fiber; single-mode and multimode fiber, LC, SC and ST, inspection, loss budgets and laser safety; and balanced audio, the XLR family that carries mic audio, party-line intercom and DMX, AES3, word clock and MADI. Then network cable, Dante and ST 2110; power connectors, what the rules say about who may connect what, and when to stop and call a licensed electrician; DMX, RS-422, tally, USB and 50-ohm RF coax; and the craft of coiling, labeling, testing and fault-finding, ending in a hands-on capstone on video. Vendor products are worked examples, not endorsements. Every lesson that needs a broadcast engineer's or a stage electrician's sign-off says so at the top.",
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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: Fiber
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "single-mode-multimode-and-color-codes",
      title: "11 · Single-mode, multimode and the color codes",
      section: "4 · Fiber",
      recallContent: [
        {
          prompt: "What does Camplex's Pro-Tac tactical fiber carry, and what does it not?",
          answer: "Single-mode fibers with aramid strength members under a polyurethane jacket; no power copper, so the far end needs its own power (reasoned, for the reviewer to confirm).",
        },
        {
          prompt: "Who makes the warning that a 9-micron fiber connector can cause problems in sand, mud or water, and why weigh it?",
          answer: "Fischer, a maker of triax connectors, the competing technology.",
        },
      ],
      body: `**Where this section fits.** CREW-05, *Arena transmission*, lesson "20 · Fiber on the map", ends with a table of what that course does not teach: connector types, inspection and cleaning, polarity, light levels, loss budgets and laser safety. This section supplies connector types, inspection and cleaning, loss budgets and laser safety from the Fiber Optic Association (FOA) and makers' sheets. For free courses and certification, CREW-05's lesson "21 · Where to learn fiber, and what certifies it" is the place to go.

**Two kinds of glass.** All fiber here has a cladding 125 µm across. What differs is the core that carries the light (Camplex, n.d.-b):

| | Single-mode | Multimode |
|---|---|---|
| Core | 9 µm | 62.5 or 50 µm |
| Classes | OS1, OS1a, OS2 | OM1 (62.5/125); OM2, OM3, OM4 (50/125) |
| Light source | 1310 and 1550 nm lasers | 850 and 1300 nm sources |
| Typical distance | "Typically over 2km" | "Typically under 2km" |
| Camplex's examples of use | Outside broadcast, ENG, live events | Data centers, MADI, CCTV |

The OS classes come from FOA's color table, below (Fiber Optic Association [FOA], n.d.-d).

**Loss per kilometer.** FOA's typical figures for planning: multimode 3 dB per km at 850 nm and 1 dB per km at 1300 nm; single-mode 0.4 dB per km at 1310 nm and 0.3 dB per km at 1550 nm (FOA, n.d.-a). Compare that with lesson 3, where 1694A coax loses 17.7 dB in 100 ft at 6 GHz. That gap helps explain why fiber carries a camera kilometers while coax carries it meters.

**Broadcast camera fiber is single-mode.** The SMPTE hybrid cable (Canare Electric, n.d.-c), AJA's FiDO converters (AJA Video Systems, 2023, p. 4) and Sony's 10 km camera link (Sony Corporation, 2017, p. 34) all use single-mode. Camplex lists MADI among multimode's uses, and RME's MADI interface in lesson 18 runs on multimode.

**Never mix them.** Camplex warns against using a multimode adapter on single-mode fiber or the reverse: "the core diameters/mode fields differ," causing high loss or reflection (Camplex, n.d.-d).

**Jacket colors.** FOA restates the TIA-598 color code (FOA, n.d.-d):

| Fiber | Jacket (non-military) |
|---|---|
| OM1 62.5/125 | Orange (military: slate) |
| OM2 50/125 | Orange |
| OM3 and OM4, laser-optimized 50/125 | Aqua |
| OM5 | Lime green |
| Single-mode OS1, OS1a, OS2 | Yellow |
| Polarization-maintaining single-mode | Blue |

Other colors are allowed "providing that the print on the outer jacket identifies fiber classifications," and outdoor cables are generally black, with the markings printed on (FOA, n.d.-d).

**Connector colors** (FOA, n.d.-d):

| Fiber | Connector body or boot |
|---|---|
| 62.5/125 multimode | Beige |
| OM2 | Black |
| OM3 and OM4 | Aqua |
| OM5 | Lime |
| Single-mode | Blue |
| Single-mode APC | Green |

Lesson 12 explains what APC means and why green matters.

**Read the print, reasoned.** Because other jacket colors are allowed and outdoor cable is usually black, a black outdoor or tactical jacket tells you nothing about the fiber inside by itself. Read the printed markings. If you are still unsure, FOA says the core size can be checked by looking at the ferrule through an inspection microscope "while illuminating the fiber with a white light" (FOA, n.d.-d). Lesson 15 explains why you never do that on a live fiber.

:::reveal What core sizes do single-mode and multimode fiber have? ||| Single-mode 9 µm; multimode 62.5 or 50 µm; both have 125 µm cladding (Camplex, n.d.-b).

:::reveal What jacket color does FOA give for single-mode fiber, and for OM3 and OM4? ||| Yellow for single-mode; aqua for OM3 and OM4 (FOA, n.d.-d).

:::reveal Why can you not tell the fiber type from a black jacket? ||| Other colors are allowed when the print identifies the fiber, and outdoor cables are generally black, so read the printed markings (FOA, n.d.-d).

## Sources
- ${CAMPLEX_SM_MM} Locator: "How Does Fiber Optics Work?" and the comparison chart.
- ${FOA_LOSS} Locator: "Step 1. Fiber loss" table.
- ${FOA_COLORS} Locator: "Cable Jacket Colors" table and notes; "Connector Color Codes" table and the text above it.
- ${CAMPLEX_ADAPTERS} Locator: "Common Pitfalls & FAQ Highlights".
- ${CANARE_HYBRID} Locator: specification table.
- ${AJA_FIDO} Locator: p. 4, "Overview" and "Features".
- ${SONY_2017} Locator: p. 34, "About Transmission Distance".`,
    },
    {
      slug: "lc-sc-st-and-the-polish",
      title: "12 · LC, SC and ST, and the polish on the end",
      section: "4 · Fiber",
      recallContent: [
        {
          prompt: "What jacket color does FOA give for single-mode fiber, and what connector color for single-mode APC?",
          answer: "A yellow jacket; a green connector.",
        },
        {
          prompt: "What happens if you use a multimode adapter on single-mode fiber, according to Camplex?",
          answer: "High loss or reflection, because \"the core diameters/mode fields differ.\"",
        },
      ],
      body: `**Three connectors you will meet.** FOA's connector identifier (FOA, n.d.-f):

| Connector | Ferrule | How it holds | What FOA says |
|---|---|---|---|
| ST | 2.5 mm, long and cylindrical, usually ceramic | Bayonet | Spring-loaded, so make sure it is seated. "If you have high loss, reconnect them." |
| SC | 2.5 mm | Snap-in; it "latches with a simple push-pull motion" | Also comes in duplex |
| LC | 1.25 mm, "half the size of the SC" | Small form factor | "Highly favored for singlemode" |

ST, SC and the older FC share the 2.5 mm ferrule, so they can be mated through hybrid adapters (FOA, n.d.-f).

**Where the shapes came from.** FOA's history: AT&T's ST replaced the FC's screw nut "with a bayonet lock like a BNC coax connector," and NTT then introduced the SC (FOA, n.d.-c). Camplex describes the ST the same way, with a keyed ferrule "and a bayonet lock similar to a BNC shell" (Camplex, 2019a).

**Where you will see them.** Camplex notes that LC is often found on SFP and SFP+ transceivers, and that Neutrik's opticalCON puts duplex LCs in a rugged metal housing with a shutter against dirt (Camplex, 2019a). Tactical fiber comes with ST or LC (lesson 10), and RME's MADI interface uses SC (lesson 18).

**Adapters.** A fiber adapter, or coupler, aligns two ferrules in a sleeve. Ceramic sleeves are more precise and durable than metal, and Camplex suggests aiming for adapter loss of 0.2 dB or less (Camplex, n.d.-d).

**The polish on the end.** How the ferrule's end is finished changes how much light reflects back. FOA's history of the step (FOA, n.d.-c):

| Finish | Typical loss | Typical return loss |
|---|---|---|
| Air gap (early connectors) | 0.5 dB or more | 20 dB |
| Physical contact (PC) | 0.3 dB | 30 to 50 dB |

FOA adds that "Super PC or Ultra PC are simply marketing names" for polishing processes. The angled physical contact (APC) connector angles the end 8 degrees, so reflected light "is absorbed in the cladding," for reflection-sensitive single-mode systems such as cable TV and high-bit-rate telephone links (FOA, n.d.-c).

Camplex gives back reflection by polish: PC better than -40 dB, UPC better than -50 dB, APC better than -60 dB. APC generally has higher insertion loss, and Camplex's rule is plain: "Only mate to other angle-polished connectors" (Camplex, 2019a).

**Green means angled.** A green body or boot means single-mode APC; blue means single-mode PC or UPC (FOA, n.d.-d, n.d.-f). So UPC and APC are not interchangeable, even when the connector shapes are the same. Check the color before you mate two connectors.

:::reveal Which connector has a 1.25 mm ferrule, and which two share a 2.5 mm ferrule? ||| LC is 1.25 mm; ST and SC (and FC) share 2.5 mm (FOA, n.d.-f).

:::reveal What does FOA say to do with an ST connection that shows high loss? ||| Reconnect it: the ST is spring-loaded, so make sure it is seated (FOA, n.d.-f).

:::reveal What does Camplex say an APC connector may be mated to? ||| "Only mate to other angle-polished connectors" (Camplex, 2019a).

## Sources
- ${FOA_CONNID} Locator: "ST", "SC", "LC", "Mating Dissimilar Connectors" and the color code note.
- ${FOA_NAMES} Locator: "NTT FC, AT&T ST, NTT SC"; the PC and APC paragraphs.
- ${CAMPLEX_IDENT} Locator: connector panels; "Fiber Optic Connector Polish Types".
- ${CAMPLEX_ADAPTERS} Locator: "What are Fiber Optic Adapters?" and "How to Choose".
- ${FOA_COLORS} Locator: "Connector Color Codes" table.`,
    },
    {
      slug: "inspect-before-you-connect",
      title: "13 · Inspect before you connect",
      section: "4 · Fiber",
      recallContent: [
        {
          prompt: "What do FOA's figures give as typical loss for a PC connector against an early air-gap connector?",
          answer: "About 0.3 dB with 30 to 50 dB return loss, against 0.5 dB or more with 20 dB return loss.",
        },
        {
          prompt: "What does a green connector body mean, and what may it be mated to?",
          answer: "Single-mode APC; only to other angle-polished connectors.",
        },
      ],
      body: `${QR}

**The rule in one line.** Camplex: "Inspection, cleaning and re-inspection are critical steps for the connector as well as the bulkhead before you make any fiber-optic connection" (Camplex, 2019b, p. 1). Both sides of the mating need checking, not only the plug in your hand.

**How small dirt matters.** A single-mode core is 9 µm across (lesson 11). Camplex: a 1 µm dust particle on a single-mode core "can block up to 1% of the light (a 0.05dB loss)," a 9 µm speck can block the core completely, and a human hair is 50 to 75 µm (Camplex, 2019b, p. 1). You will not see that dirt with your eyes.

**What dirt does.** FOA says dirty connectors cause "high connector loss, high reflectance," and can contaminate transceivers. Dirt mated between two ferrules can scratch them and transfer to the other connector (FOA, n.d.-h). One dirty end can spoil a clean one. FOA also reports that network operators "claim that 15-50% of all network problems can be traced to dirty connectors" (FOA, n.d.-h). That is a claim FOA passes on, not a measured statistic, so teach it as a claim.

**Caps help, and are not clean.** Keep dust caps on (FOA, n.d.-b; Sony Corporation, 2017, p. 10). But FOA calls them "protective caps," because a cap can carry dust and mold release, so clean and inspect a connector when its cap comes off (FOA, n.d.-h).

**FOA's cleaning rules** (FOA, n.d.-b):

- "Always clean connectors before mating," and inspect after cleaning.
- Never use cotton swabs or cloth.
- If wet-cleaning, use reagent-grade 99% isopropyl alcohol and lint-free pads.
- Never use shop compressed air, and never blow on a connector.

Where a connector maker gives its own note, follow it. Canare's note for its hybrid camera plugs calls for a non-alcohol cleaning stick (lesson 9).

**Three rules that do not quite agree.** FOA says always clean before mating. LEMO's white paper on hybrid camera connectors says "inspect the endface and if it isn't dirty don't touch it" (Longhurst & Brooks, 2017, p. 5). Camplex says inspect, clean, re-inspect. What all three share is looking before you mate. So this course teaches: **inspect first, clean if needed, re-inspect, and follow your crew chief's house rule.** The reviewer will settle the default wording before release.

**What you inspect with.** FOA: field microscopes run 100X to 400X, good ones filter infrared, and "A video microscope is preferable since it offers no danger to the eye" (FOA, n.d.-h). Lesson 15 explains the danger.

**What you look for.** Camplex lists IEC 61300-3-35 as the endface inspection standard, which divides the end into zones from A, the core, out to D, the contact area, with stricter limits nearest the core (Camplex, 2019b, p. 1). The standard itself is paywalled; the idea to keep is that dirt on the core matters most.

**Kit and practice.** CREW-05, *Arena transmission*, lesson "22 · A fiber kit and a first lab", prices a starter cleaner and fault locator and sets out a five-step home lab. Use it with this lesson's rules.

:::reveal According to Camplex, how much light can a 1 µm dust particle on a single-mode core block? ||| Up to 1%, about a 0.05 dB loss; a 9 µm speck can block the core completely (Camplex, 2019b, p. 1).

:::reveal Name two things FOA says never to clean or dry a fiber connector with. ||| Cotton swabs or cloth; shop compressed air or your breath (FOA, n.d.-b).

:::reveal What order does this course teach for a fiber connection? ||| Inspect first, clean if needed, re-inspect, and follow the crew chief's house rule.

## Sources
- ${CAMPLEX_INSPECT} Locator: p. 1, the opening rule, the dust-particle figures and the IEC 61300-3-35 zones.
- ${FOA_SCOPE} Locator: introduction; "Optical Inspection Of Connectors with Microscopes".
- ${FOA_CLEAN} Locator: body text, the cleaning rules.
- ${SONY_2017} Locator: p. 10, note under item g.
- ${LONGHURST_2017} Locator: PDF p. 5, the inspection rule.`,
    },
    {
      slug: "loss-budgets-and-bend-radius",
      title: "14 · Loss budgets and bend radius",
      section: "4 · Fiber",
      recallContent: [
        {
          prompt: "What order does lesson 13 teach for making a fiber connection?",
          answer: "Inspect first, clean if needed, re-inspect, and follow the crew chief's house rule.",
        },
        {
          prompt: "Why does FOA call dust caps \"protective caps\" rather than clean caps?",
          answer: "They can carry dust and mold release, so clean and inspect a connector when its cap comes off.",
        },
      ],
      body: `${QR}

**Two budgets.** FOA separates them (FOA, n.d.-a):

- The **power budget** is the loss a link can tolerate: the transmitter's output minus the receiver's sensitivity. It can have a minimum as well as a maximum, so the receiver is not overloaded.
- The **loss budget** is the estimated loss of the installed cable plant: fiber loss plus connection loss plus splice loss. It is worked out in design and compared with test results after installation.

A link works when the loss budget fits inside the power budget.

**Connections, not connectors.** FOA: "Connectors have no loss; only connections have loss" (FOA, n.d.-a). Loss happens where two ends meet, a mated pair.

**Typical values** (FOA, n.d.-a):

| Item | Typical loss |
|---|---|
| Multimode connection | 0.2 to 0.5 dB |
| Single-mode connection, factory made | 0.1 to 0.2 dB |
| Single-mode connection, field terminated | As high as 0.5 to 1.0 dB |
| Single-mode fusion splice | Typically under 0.05 dB |
| TIA-568 allowance, as FOA states it | 0.75 dB per connection, 0.3 dB per splice |

Fiber loss per kilometer is in lesson 11.

**FOA's worked example.** A 0.2 km multimode link at 850 nm: 0.6 dB of fiber, 0.9 dB for three connections, and 0.3 dB for a splice (FOA, n.d.-a). Added up, that is 1.8 dB.

**A broadcast example, worked.** AJA's FiDO 12G converters state light levels in dBm. The transmitter puts out -5 dBm at least and +0.5 dBm at most, at 1310 nm. The receiver's sensitivity is -10 dBm at 6 and 12 Gb/s, -14 dBm at lower rates, and it overloads at -2 dBm (AJA Video Systems, 2023, pp. 9, 12). The numbers are negative, and -2 is more light than -10: overload sits above sensitivity.

Reasoned from those figures:

1. Power budget at 12G: -5 minus -10 is about 5 dB.
2. Loss budget for 10 km of single-mode at FOA's 0.4 dB per km: 4 dB of fiber, plus two connections at 0.1 to 0.2 dB each, about 4.2 to 4.4 dB.
3. That fits inside 5 dB, which matches AJA's "up to 10km."

**Too much light, reasoned.** On a very short link there is almost no loss, so a +0.5 dBm transmitter could reach the receiver above its -2 dBm overload point. That is the case FOA describes when it says a power budget can have a minimum. Whether AJA recommends an optical attenuator for very short FiDO links is a question this course leaves open.

CREW-05's lesson "21 · Where to learn fiber, and what certifies it" sets explaining a loss budget as a goal and points to FOA's free courses for more practice.

**Bend radius.** Bending fiber too tightly costs light and can break it. FOA's normal recommendation: a minimum bend radius of 20 times the cable diameter under tension while pulling, and 10 times after installation. Some cables differ, and FOA's advice is "Always check with the manufacturer" (FOA, n.d.-e).

**Radius, not diameter.** A 20-times radius rule means a pulley or capstan 40 times the cable's diameter. FOA's example: a 13 mm cable needs a 260 mm radius under tension (FOA, n.d.-e).

**Damage you cannot see.** Damage from bending "may not always be obvious": broken fibers, higher loss from stress, or structural damage, and damage during installation can void the maker's warranty (FOA, n.d.-e).

**Use the number for the cable in hand.** Makers differ a lot. Canare gives 6 times the outside diameter for its SMPTE hybrid cable (lesson 9); FOA's general rule is 10 to 20 times. Use the maker's figure for the cable you are holding, and when the maker does not say whether a figure is for pulling or installed, ask.

:::reveal What is the difference between a power budget and a loss budget? ||| The power budget is what the link can tolerate (transmitter output minus receiver sensitivity); the loss budget is what the installed cable plant is expected to lose (fiber plus connections plus splices) (FOA, n.d.-a).

:::reveal What does FOA mean by "Connectors have no loss; only connections have loss"? ||| Loss happens where two ends mate, so you count mated pairs, not individual connectors.

:::reveal FOA's rule is 20 times the diameter as a radius under tension. What size pulley does that mean? ||| One 40 times the cable's diameter, because a diameter is twice the radius (FOA, n.d.-e).

## Sources
- ${FOA_LOSS} Locator: "Power Budgets And Loss Budgets"; "Analyze Link Loss In The Design Stage"; the note under the link drawing; "Step 2. Connection Loss"; "Step 3. Splice Loss"; Steps 1 to 4 tables.
- ${AJA_FIDO} Locator: p. 4, "Features"; p. 9, FiDO-T-12G specifications; p. 12, FiDO-R-12G specifications.
- ${FOA_BEND} Locator: "Typical Specifications"; "Bend radius example"; "Bend Radius or Diameter?"
- ${CANARE_HYBRID} Locator: specification table.`,
    },
    {
      slug: "laser-safety",
      title: "15 · Laser safety: the light you cannot see",
      section: "4 · Fiber",
      recallContent: [
        {
          prompt: "Worked from AJA's figures, what is the FiDO 12G power budget, and does 10 km of single-mode fit?",
          answer: "About 5 dB (-5 minus -10 dBm); 10 km at 0.4 dB per km plus two connections is about 4.2 to 4.4 dB, so it fits.",
        },
        {
          prompt: "What bend radius does FOA recommend under tension and after installation?",
          answer: "20 times the cable diameter while pulling, 10 times after installation; check the maker's figure.",
        },
      ],
      body: `${QR}

**Invisible is not off.** FOA: the light in fiber is mostly infrared and invisible. "Never look into a fiber end," and test a fiber with a power meter before working on it (FOA, n.d.-g). A dark connector can be a live one.

**How lasers are classed.** The U.S. Food and Drug Administration (FDA) groups laser products into hazard classes, with the matching IEC classes (U.S. Food and Drug Administration [FDA], 2024):

| FDA class | IEC class | What the FDA table says |
|---|---|---|
| I | 1, 1M | "Considered non-hazardous"; hazard increases if viewed with magnifiers or binoculars |
| II | 2, 2M | |
| IIIa | 3R | |
| IIIb | 3B | "Immediate skin hazard from direct beam and immediate eye hazard when viewed directly" |
| IV | 4 | Hazard from the direct or reflected beam; possible fire hazard |

**One converter's label.** AJA calls its FiDO converters "CDRH Compliant Class 1," and warns that active fiber cables "emit radiation invisible to the human eye. Do not look directly at the end of an active fiber-optic cable or the fiber connector" (AJA Video Systems, 2023, pp. 17, 23).

**Class 1 does not mean look into it, reasoned.** The FDA says the hazard of a class I product increases when it is viewed with optical aids. FOA says a microscope "will focus virtually all the light back into the eye" (FOA, n.d.-g). An inspection microscope is an optical aid. So even a Class 1 source is never inspected through an unfiltered microscope while it is live. FOA's rule: check the power with a meter before inspecting, and use microscopes with infrared filters (FOA, n.d.-g, n.d.-h). Lesson 13 noted that a video microscope "offers no danger to the eye."

**A port can be switched on.** Sony's HXCU-FB80 ships with its LASER DIODE output set to OFF for links that use only single-mode fiber; the user turns it on in a menu, and the setting is not needed with hybrid cable (Sony Corporation, 2017, p. 12). So whether a fiber port is lit can depend on a setting you cannot see from the connector. That is another reason to meter before you look.

**How much power is out there.** FOA says most communications links are too low in power to harm the eye, but cable TV (CATV) links, and some telecom links that use fiber amplifiers (FOA names DWDM links), can be "as much as 100 times more" powerful (FOA, n.d.-g). You will not always know what a strange fiber is connected to. Treat every fiber as live until a meter says otherwise.

What laser class the fiber transmitters in broadcast camera systems carry is not stated in the pages read for this course. Check the label and the manual of the gear in front of you.

**The commoner hazard: glass.** FOA calls bare fiber scraps the more common danger: wear safety glasses with side shields, work on a black mat, put scraps in a sealed container, and keep food and drink out of the work area (FOA, n.d.-g).

**Back in CREW-05.** Its lesson "22 · A fiber kit and a first lab" set a precaution before these sources were read: never look into a fiber end. The FDA, FOA and AJA now back that rule.

:::reveal What does FOA say to do before working on, or inspecting, a fiber? ||| Test it with a power meter; never look into a fiber end; use an infrared-filtered or video microscope (FOA, n.d.-g, n.d.-h).

:::reveal Why is a Class 1 source still not safe to view through a microscope? ||| The FDA says class I hazard increases with optical aids, and FOA says a microscope focuses virtually all the light back into the eye.

:::reveal According to FOA, what is the more common hazard than laser light, and what protects you from it? ||| Bare fiber shards: safety glasses with side shields, a black work mat, a sealed scrap container, and no food or drink in the work area (FOA, n.d.-g).

## Sources
- ${FOA_SAFETY} Locator: "Eye Safety"; "Focusing Light Into The Eye Can Be Dangerous"; "Power In Fiber Optic Networks"; "Safety In High Power OSP Links"; "Bare Fiber Safety"; the safety rules list.
- ${FDA_2024} Locator: "Laser Hazard Classes" table.
- ${AJA_FIDO} Locator: p. 17, "Laser"; p. 23, warning.
- ${FOA_SCOPE} Locator: "Note On Eye Safety"; "Optical Inspection Of Connectors with Microscopes".
- ${SONY_2017} Locator: p. 12, "Settings when Connecting with Only Single-Mode Optical Fiber Cable".`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Fiber",
      section: "4 · Fiber",
      body: "A graded check on single-mode and multimode fiber and their color codes, LC, SC and ST connectors and their polish, inspection and cleaning, loss budgets and bend radius, and laser safety. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does CREW-05's lesson \"Fiber on the map\" end with?", options: ["A table of what that course does not teach", "A five-step home lab with its kit prices", "A list of FOA certificates and exam scores", "A worked loss budget for an arena link"], correctIndex: 0, explanation: "It ends with a table of what CREW-05 does not teach: connector types, inspection and cleaning, polarity, light levels, loss budgets and laser safety. Section 4 supplies most of them.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What cladding diameter does Camplex give for both single-mode and multimode fiber?", options: ["9 µm", "125 µm", "50 µm", "62.5 µm"], correctIndex: 1, explanation: "Camplex (n.d.-b): both have 125 µm cladding; the core is what differs.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What core size does Camplex give for single-mode fiber?", options: ["50 µm", "62.5 µm", "9 µm", "125 µm"], correctIndex: 2, explanation: "Camplex (n.d.-b): single-mode core 9 µm.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What core sizes does Camplex give for multimode fiber?", options: ["9 or 10 µm", "125 or 250 µm", "1 or 2 µm", "62.5 or 50 µm"], correctIndex: 3, explanation: "Camplex (n.d.-b): multimode 62.5 or 50 µm.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "Which light sources does Camplex list for single-mode fiber?", options: ["1310 and 1550 nm lasers", "850 and 1300 nm sources", "650 nm visible red light", "White light from an LED"], correctIndex: 0, explanation: "Camplex (n.d.-b): single-mode uses 1310 and 1550 nm lasers; multimode 850 and 1300 nm sources.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "Which light sources does Camplex list for multimode fiber?", options: ["1310 and 1550 nm lasers", "850 and 1300 nm sources", "650 nm visible red light", "1625 nm test lasers"], correctIndex: 1, explanation: "Camplex (n.d.-b): multimode uses 850 and 1300 nm sources.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What typical distance does Camplex give for multimode fiber?", options: ["Typically over 2 km", "Typically over 20 km", "Typically under 2 km", "Typically under 20 m"], correctIndex: 2, explanation: "Camplex (n.d.-b): multimode \"Typically under 2km\"; single-mode \"Typically over 2km.\"", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "Which uses does Camplex list for single-mode fiber?", options: ["Data centers, MADI and CCTV", "Home theater and gaming", "Short office patch cords", "Outside broadcast, ENG, live events"], correctIndex: 3, explanation: "Camplex (n.d.-b): single-mode for outside broadcast, ENG and live events.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "Which uses does Camplex list for multimode fiber?", options: ["Data centers, MADI and CCTV", "Outside broadcast and ENG", "Live events and stadiums", "Undersea telephone cables"], correctIndex: 0, explanation: "Camplex (n.d.-b): multimode for data centers, MADI and CCTV.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What typical loss does FOA give for single-mode fiber at 1310 nm?", options: ["3 dB per km", "0.4 dB per km", "1 dB per km", "0.3 dB per km"], correctIndex: 1, explanation: "FOA (n.d.-a): single-mode 0.4 dB/km at 1310 nm and 0.3 at 1550; multimode 3 dB/km at 850 and 1 at 1300.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What typical loss does FOA give for multimode fiber at 850 nm?", options: ["0.4 dB per km", "1 dB per km", "3 dB per km", "0.3 dB per km"], correctIndex: 2, explanation: "FOA (n.d.-a): multimode 3 dB/km at 850 nm.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "Which fiber do the SMPTE hybrid cable, AJA's FiDO and Sony's 10 km camera link use?", options: ["OM1 multimode", "OM3 multimode", "OM5 multimode", "Single-mode"], correctIndex: 3, explanation: "Canare Electric (n.d.-c), AJA Video Systems (2023) and Sony Corporation (2017) all describe single-mode.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What does Camplex say happens if you use a multimode adapter on single-mode fiber?", options: ["High loss or reflection", "No effect at all on loss", "Better return loss overall", "A higher laser hazard class"], correctIndex: 0, explanation: "Camplex (n.d.-d): \"the core diameters/mode fields differ,\" causing high loss or reflection.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What jacket color does FOA give for single-mode fiber?", options: ["Aqua", "Yellow", "Orange", "Lime green"], correctIndex: 1, explanation: "FOA (n.d.-d): single-mode (OS1, OS1a, OS2) is yellow.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What jacket color does FOA give for OM3 and OM4 fiber?", options: ["Yellow", "Orange", "Aqua", "Blue"], correctIndex: 2, explanation: "FOA (n.d.-d): OM3 and OM4, laser-optimized 50/125, are aqua.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What jacket color does FOA give for non-military OM1 and OM2 fiber?", options: ["Aqua", "Lime green", "Yellow", "Orange"], correctIndex: 3, explanation: "FOA (n.d.-d): OM1 and OM2 are orange (military OM1 is slate).", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What jacket color does FOA give for OM5 fiber?", options: ["Lime green", "Aqua", "Orange", "Slate"], correctIndex: 0, explanation: "FOA (n.d.-d): OM5 is lime green.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "When does FOA say a jacket may be another color?", options: ["When used indoors only", "When the print identifies the fiber", "When the run is under 2 km", "When the connectors are coded"], correctIndex: 1, explanation: "FOA (n.d.-d): other colors are allowed \"providing that the print on the outer jacket identifies fiber classifications.\"", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What color does FOA say outdoor fiber cables generally are?", options: ["Yellow", "Orange", "Black", "Aqua"], correctIndex: 2, explanation: "FOA (n.d.-d): outdoor cables are generally black, with the markings printed on.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What connector color does FOA give for single-mode PC or UPC?", options: ["Green", "Beige", "Aqua", "Blue"], correctIndex: 3, explanation: "FOA (n.d.-d): single-mode blue; single-mode APC green.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What connector color does FOA give for single-mode APC?", options: ["Green", "Blue", "Black", "Beige"], correctIndex: 0, explanation: "FOA (n.d.-d): single-mode APC is green.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What connector color does FOA give for 62.5/125 multimode?", options: ["Black", "Beige", "Aqua", "Lime"], correctIndex: 1, explanation: "FOA (n.d.-d): 62.5/125 beige; OM2 black; OM3 and OM4 aqua; OM5 lime.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What does a black tactical or outdoor jacket tell you about the fiber inside?", options: ["That it is single-mode", "That it is OM3 multimode", "Nothing alone; read the print", "That it carries power too"], correctIndex: 2, explanation: "Other colors are allowed when the print identifies the fiber, and outdoor cable is generally black, so read the printed markings.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "How does FOA say you can check a fiber's core size if unsure?", options: ["By weighing the reel", "By the dust cap's color", "By a meter on the jacket", "By microscope in white light"], correctIndex: 3, explanation: "FOA (n.d.-d): look at the ferrule with an inspection microscope \"while illuminating the fiber with a white light\"; never on a live fiber (lesson 15).", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "What ferrule does FOA describe for the ST connector?", options: ["2.5 mm, long and cylindrical", "1.25 mm, short and square", "9 µm, glass with no sleeve", "5 mm, threaded at the tip"], correctIndex: 0, explanation: "FOA (n.d.-f): ST has a long cylindrical 2.5 mm ferrule, usually ceramic.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "How does the ST connector lock?", options: ["Snap-in latch", "Bayonet", "Screw nut", "Push-pull"], correctIndex: 1, explanation: "FOA (n.d.-f): ST is a bayonet mount, \"similar to a BNC shell\" (Camplex, 2019a).", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "What does FOA say to do when ST connections show high loss?", options: ["Replace the cable at once", "Clean it with a cotton swab", "Reconnect it and seat it", "Add a 50-ohm terminator"], correctIndex: 2, explanation: "FOA (n.d.-f): ST is spring-loaded, so make sure it is seated; \"If you have high loss, reconnect them.\"", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "How does the SC connector latch?", options: ["Bayonet twist", "Screw collar", "Tape wrap", "Push-pull snap-in"], correctIndex: 3, explanation: "FOA (n.d.-f): SC \"latches with a simple push-pull motion.\"", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "What ferrule size does FOA give for the LC connector?", options: ["1.25 mm", "2.5 mm", "3.0 mm", "0.9 mm"], correctIndex: 0, explanation: "FOA (n.d.-f): LC has a 1.25 mm ferrule, \"half the size of the SC.\"", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "For which fiber does FOA say LC is highly favored?", options: ["Multimode", "Single-mode", "Plastic", "Hybrid"], correctIndex: 1, explanation: "FOA (n.d.-f): LC is \"highly favored for singlemode.\"", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "Which connectors share a 2.5 mm ferrule and can mate through hybrid adapters?", options: ["LC, SC and ST", "LC, MTP and FC", "ST, SC and FC", "LC and SFP only"], correctIndex: 2, explanation: "FOA (n.d.-f): ST, SC and FC share the 2.5 mm ferrule and can be mated through hybrid adapters.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "What did AT&T's ST replace the FC's screw nut with, according to FOA?", options: ["A push-pull latch like SC", "A threaded collar like N", "A spring clip like RJ45", "A bayonet lock like a BNC"], correctIndex: 3, explanation: "FOA (n.d.-c): the ST replaced the FC's screw nut \"with a bayonet lock like a BNC coax connector.\"", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "Who does FOA say introduced the SC after the ST?", options: ["NTT", "AT&T", "Camplex", "Neutrik"], correctIndex: 0, explanation: "FOA (n.d.-c): AT&T's ST came first, then NTT introduced the SC.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "Where does Camplex say LC is often found?", options: ["On SMPTE hybrid camera plugs", "On SFP and SFP+ transceivers", "On triax base stations", "On BNC patch panels"], correctIndex: 1, explanation: "Camplex (2019a): LC is often found on SFP and SFP+ transceivers.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "What is Neutrik's opticalCON, per Camplex?", options: ["Single STs in a plastic body with a cap", "SC pairs in a rubber boot with a latch", "Duplex LCs in metal with a dirt shutter", "Hybrid SMPTE contacts in a push-pull shell"], correctIndex: 2, explanation: "Camplex (2019a): opticalCON puts duplex LCs in a rugged metal housing with a shutter against dirt.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "Which adapter sleeve material does Camplex call more precise and durable?", options: ["Metal", "Plastic", "Rubber", "Ceramic"], correctIndex: 3, explanation: "Camplex (n.d.-d): ceramic sleeves are more precise and durable than metal.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "What adapter loss does Camplex suggest aiming for?", options: ["0.2 dB or less", "2 dB or less", "0.75 dB or less", "0.05 dB or less"], correctIndex: 0, explanation: "Camplex (n.d.-d): aim for adapter loss of 0.2 dB or less.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "What typical loss and return loss does FOA give for physical contact (PC) connectors?", options: ["0.5 dB, 20 dB return loss", "0.3 dB, 30 to 50 dB return loss", "1.0 dB, 60 dB return loss", "0.1 dB, 10 dB return loss"], correctIndex: 1, explanation: "FOA (n.d.-c): PC typically 0.3 dB with 30 to 50 dB return loss; air gap 0.5 dB or more with 20 dB.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "What does FOA say \"Super PC\" and \"Ultra PC\" are?", options: ["Standards for single-mode only", "Angled 8-degree end finishes", "Marketing names for polishing", "Air-gap connector designs"], correctIndex: 2, explanation: "FOA (n.d.-c): \"Super PC or Ultra PC are simply marketing names\" for polishing processes.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "At what angle is an APC ferrule end polished?", options: ["45 degrees", "2 degrees", "15 degrees", "8 degrees"], correctIndex: 3, explanation: "FOA (n.d.-c): APC angles the end 8 degrees.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "Where does FOA say the reflected light from an APC end goes?", options: ["Absorbed in the cladding", "Back into the laser", "Out into the jacket", "Into heat in the core"], correctIndex: 0, explanation: "FOA (n.d.-c): reflected light \"is absorbed in the cladding.\"", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "What back reflection does Camplex give for APC connectors?", options: ["Better than -40 dB", "Better than -60 dB", "Better than -50 dB", "Better than -20 dB"], correctIndex: 1, explanation: "Camplex (2019a): PC better than -40 dB, UPC better than -50 dB, APC better than -60 dB.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "What may an APC connector be mated to, according to Camplex?", options: ["Any blue single-mode plug", "Any 2.5 mm ferrule plug", "Only angle-polished plugs", "UPC plugs, via an adapter"], correctIndex: 2, explanation: "Camplex (2019a): \"Only mate to other angle-polished connectors.\"", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "What does a blue connector body or boot mean, per FOA?", options: ["Single-mode APC", "OM3 multimode", "62.5/125 multimode", "Single-mode PC or UPC"], correctIndex: 3, explanation: "FOA (n.d.-d, n.d.-f): blue is single-mode PC or UPC; green is single-mode APC.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "What does Camplex call critical before any fiber connection?", options: ["Inspect, clean and re-inspect", "Clean once a week, used or not", "Connect, then inspect if needed", "Blow the end clear, then mate"], correctIndex: 0, explanation: "Camplex (2019b, p. 1): \"Inspection, cleaning and re-inspection are critical steps for the connector as well as the bulkhead.\"", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "Which parts does Camplex's rule cover?", options: ["Only the plug in your hand", "The connector and the bulkhead", "Only the far end of the run", "Only new, unused connectors"], correctIndex: 1, explanation: "Camplex (2019b, p. 1): the connector as well as the bulkhead; both sides of the mating.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "How much light can a 1 µm dust particle on a single-mode core block, per Camplex?", options: ["Up to 50% of it", "None of it", "Up to 1% of it", "All of it"], correctIndex: 2, explanation: "Camplex (2019b, p. 1): \"up to 1% of the light (a 0.05dB loss).\"", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "What can a 9 µm speck do to a single-mode core, per Camplex?", options: ["Nothing at all on single-mode", "Affect only multimode cores", "Add exactly 0.05 dB of loss", "Block the core completely"], correctIndex: 3, explanation: "Camplex (2019b, p. 1): a 9 µm speck can completely block a 9 µm core.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "What does FOA say dirty connectors cause?", options: ["High loss, high reflectance", "Lower loss, better return", "A change in core size", "A higher laser class"], correctIndex: 0, explanation: "FOA (n.d.-h): \"high connector loss, high reflectance,\" and they can contaminate transceivers.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "What can dirt mated between two ferrules do, per FOA?", options: ["Polish both to an APC finish", "Scratch them and transfer over", "Lower the laser's power output", "Turn single-mode into multimode"], correctIndex: 1, explanation: "FOA (n.d.-h): it can scratch the ferrules and transfer to the other connector.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "How does lesson 13 treat \"15-50% of all network problems\" being dirty connectors?", options: ["As a measured FOA statistic", "As a TIA-568 requirement", "As a claim FOA reports", "As Camplex's lab result"], correctIndex: 2, explanation: "FOA (n.d.-h) reports that network operators \"claim\" it; teach it as a claim.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "Why does FOA call dust caps \"protective caps\"?", options: ["They are cleaned at the factory", "They block all laser light", "They must stay off in use", "They can carry dust and mold release"], correctIndex: 3, explanation: "FOA (n.d.-h): caps may carry dust and mold release, so clean and inspect a connector when its cap comes off.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "What does FOA say to wet-clean a connector with?", options: ["99% isopropyl and lint-free pads", "Tap water and a cotton swab", "Window cleaner and a cloth", "Compressed air and a brush"], correctIndex: 0, explanation: "FOA (n.d.-b): reagent-grade 99% isopropyl alcohol and lint-free pads.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "What does FOA say never to clean a connector with?", options: ["Lint-free pads", "Cotton swabs or cloth", "Isopropyl alcohol", "A cleaning stick"], correctIndex: 1, explanation: "FOA (n.d.-b): never use cotton swabs or cloth.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "What does FOA say never to use to clear a connector?", options: ["A lint-free pad", "An IR-filtered scope", "Shop air or your breath", "A clean dust cap"], correctIndex: 2, explanation: "FOA (n.d.-b): never use shop compressed air, and never blow on a connector.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "What does Canare's note say to clean its hybrid camera plugs with?", options: ["Isopropyl and a cloth", "Tap water and a swab", "Compressed air", "A non-alcohol stick"], correctIndex: 3, explanation: "Canare Electric (n.d.-b): plugs with a non-alcohol cleaning stick. Where a maker gives a note, follow it.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "What is LEMO's rule for hybrid camera connector end faces?", options: ["Inspect; if it isn't dirty, don't touch it", "Always clean it first, then inspect it", "Clean it with alcohol, then mate it", "Never inspect hybrid connectors at all"], correctIndex: 0, explanation: "Longhurst and Brooks (2017, p. 5): \"inspect the endface and if it isn't dirty don't touch it.\"", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "What order does lesson 13 teach for a fiber connection?", options: ["Clean, mate, then inspect", "Inspect, clean if needed, re-inspect", "Mate, test, then clean", "Blow off, wipe, then mate"], correctIndex: 1, explanation: "FOA, LEMO and Camplex differ, but all look before mating: inspect first, clean if needed, re-inspect, and follow the house rule.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "Who settles the default cleaning wording before release?", options: ["The FOA in its next update", "The camera maker's manual", "The course's reviewer", "Each learner by preference"], correctIndex: 2, explanation: "The lesson says the reviewer will settle the default wording before release.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "What magnification does FOA give for field inspection microscopes?", options: ["2X to 10X", "1000X to 4000X", "10X to 40X", "100X to 400X"], correctIndex: 3, explanation: "FOA (n.d.-h): field microscopes run 100X to 400X.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "Which kind of microscope does FOA say is preferable?", options: ["A video microscope", "An unfiltered optical one", "A hand magnifying glass", "A phone camera at 1X"], correctIndex: 0, explanation: "FOA (n.d.-h): \"A video microscope is preferable since it offers no danger to the eye.\"", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "How does IEC 61300-3-35 divide an end face, as Camplex summarizes it?", options: ["A at the jacket, in to D at the core", "A at the core, out to D at the contact", "One zone for the whole end face", "Zones by color code, not distance"], correctIndex: 1, explanation: "Camplex (2019b, p. 1): zones A (core) to D (contact), with stricter limits nearest the core.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "Where does lesson 13 send you for a starter kit and a home lab?", options: ["CREW-04, \"Outputs, timecode and genlock\"", "CREW-01, \"Which rulebook applies\"", "CREW-05, \"A fiber kit and a first lab\"", "CREW-02, \"The kit and the site survey\""], correctIndex: 2, explanation: "CREW-05, Arena transmission, lesson 22, prices a starter cleaner and fault locator and sets out a five-step home lab.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "How does FOA define a power budget?", options: ["Fiber plus connection and splice loss", "Receiver overload minus transmitter output", "Fiber length times loss per kilometer", "Transmitter output minus receiver sensitivity"], correctIndex: 3, explanation: "FOA (n.d.-a): the loss a link can tolerate, transmitter output minus receiver sensitivity.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "How does FOA define a loss budget?", options: ["Fiber plus connection plus splice loss", "Transmitter output minus sensitivity", "Receiver overload minus sensitivity", "The loss of the worst single connector"], correctIndex: 0, explanation: "FOA (n.d.-a): the estimated loss of the installed cable plant, fiber plus connection plus splice loss.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "Why can a power budget have a minimum as well as a maximum?", options: ["So the fiber is not bent too far", "So the receiver is not overloaded", "So the laser stays at Class 1", "So splices stay under 0.05 dB"], correctIndex: 1, explanation: "FOA (n.d.-a): a minimum keeps the receiver from being overloaded.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What does FOA mean by \"Connectors have no loss; only connections have loss\"?", options: ["Connectors never need cleaning", "Connector loss is too small to count", "Only mated pairs lose light", "Only splices lose any light"], correctIndex: 2, explanation: "Loss happens where two ends mate, so you count mated pairs.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What typical loss does FOA give for a factory-made single-mode connection?", options: ["0.5 to 1.0 dB", "0.2 to 0.5 dB", "Under 0.05 dB", "0.1 to 0.2 dB"], correctIndex: 3, explanation: "FOA (n.d.-a): factory single-mode 0.1 to 0.2 dB; field-terminated as high as 0.5 to 1.0 dB.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What loss can a field-terminated single-mode connection reach, per FOA?", options: ["0.5 to 1.0 dB", "0.1 to 0.2 dB", "Under 0.05 dB", "3 to 5 dB"], correctIndex: 0, explanation: "FOA (n.d.-a): as high as 0.5 to 1.0 dB.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What typical loss does FOA give for a single-mode fusion splice?", options: ["0.3 to 0.5 dB", "Under 0.05 dB", "About 0.75 dB", "About 1.0 dB"], correctIndex: 1, explanation: "FOA (n.d.-a): typically under 0.05 dB.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What per-connection allowance does FOA state for TIA-568?", options: ["0.3 dB", "0.05 dB", "0.75 dB", "1.5 dB"], correctIndex: 2, explanation: "FOA (n.d.-a): TIA-568 allows 0.75 dB per connection and 0.3 dB per splice.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What does FOA's worked 0.2 km multimode example add up to?", options: ["0.9 dB", "3.0 dB", "0.6 dB", "1.8 dB"], correctIndex: 3, explanation: "0.6 dB of fiber + 0.9 dB for three connections + 0.3 dB for a splice = 1.8 dB (FOA, n.d.-a).", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What minimum transmitter output does AJA give for the FiDO-T-12G?", options: ["-5 dBm", "-10 dBm", "+0.5 dBm", "-2 dBm"], correctIndex: 0, explanation: "AJA Video Systems (2023, p. 9): -5 dBm minimum, +0.5 dBm maximum, at 1310 nm.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What receiver sensitivity does AJA give for the FiDO-R-12G at 12 Gb/s?", options: ["-5 dBm", "-10 dBm", "-2 dBm", "-14 dBm"], correctIndex: 1, explanation: "AJA Video Systems (2023, p. 12): -10 dBm at 6 and 12 Gb/s; -14 dBm at lower rates.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "Worked from AJA's figures, about what is the FiDO 12G power budget?", options: ["About 10 dB", "About 2 dB", "About 5 dB", "About 15 dB"], correctIndex: 2, explanation: "-5 dBm minus -10 dBm is about 5 dB.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "About what loss budget does lesson 14 work out for 10 km of single-mode with two connections?", options: ["About 0.4 dB", "About 40 dB", "About 9 dB", "About 4.2 to 4.4 dB"], correctIndex: 3, explanation: "10 km x 0.4 dB/km = 4 dB, plus two connections at 0.1 to 0.2 dB each.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What can go wrong on a very short FiDO link, by lesson 14's reasoning?", options: ["Too much light, past overload", "Too little light to receive", "Too much bend in the fiber", "Too many splices in the run"], correctIndex: 0, explanation: "A +0.5 dBm transmitter over almost no loss can exceed the -2 dBm overload point.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "Does AJA recommend an attenuator for very short FiDO links, according to lesson 14?", options: ["AJA requires one always", "Left open by the course", "AJA forbids using one", "FOA bans attenuators"], correctIndex: 1, explanation: "The course leaves it open: no source read says whether AJA recommends one.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What minimum bend radius does FOA recommend under tension while pulling?", options: ["10 x the cable diameter", "6 x the cable diameter", "20 x the cable diameter", "40 x the cable diameter"], correctIndex: 2, explanation: "FOA (n.d.-e): 20 x under tension, 10 x after installation; check the maker.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "FOA's 20-times rule is a radius. What size pulley or capstan does that mean?", options: ["10 x the diameter", "20 x the diameter", "5 x the diameter", "40 x the diameter"], correctIndex: 3, explanation: "A diameter is twice the radius, so a 20 x radius means a pulley 40 x the cable's diameter (FOA, n.d.-e).", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "In FOA's example, what radius does a 13 mm cable need under tension?", options: ["260 mm", "130 mm", "520 mm", "78 mm"], correctIndex: 0, explanation: "FOA (n.d.-e): 20 x 13 mm = 260 mm radius.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What does FOA say about damage from bending?", options: ["It always shows as a kink", "It may not always be obvious", "It shows only at 850 nm", "It never harms single-mode"], correctIndex: 1, explanation: "FOA (n.d.-e): damage \"may not always be obvious\": broken fibers, higher loss from stress, structural damage.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "Which bend radius figure does lesson 14 tell you to use?", options: ["FOA's 20 x, for any cable", "Canare's 6 x, for any cable", "The maker's, for that cable", "The smallest figure found"], correctIndex: 2, explanation: "Makers differ widely (Canare 6 x; FOA 10 to 20 x), so use the maker's figure for the cable in hand.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What does FOA say about the light in fiber?", options: ["Mostly red and easy to see", "Ultraviolet and harmless", "Visible only on multimode", "Mostly infrared and invisible"], correctIndex: 3, explanation: "FOA (n.d.-g): mostly infrared and invisible; never look into a fiber end.", sourceLessonSlug: "laser-safety" },
          { prompt: "What does FOA say to do before working on a fiber?", options: ["Test it with a power meter", "Look into the end to check", "Shine a flashlight into it", "Wait a minute after unplugging"], correctIndex: 0, explanation: "FOA (n.d.-g): test a fiber with a power meter before working on it.", sourceLessonSlug: "laser-safety" },
          { prompt: "How does the FDA table describe class I lasers?", options: ["Immediate eye hazard", "Considered non-hazardous", "Possible fire hazard", "Skin hazard from beam"], correctIndex: 1, explanation: "FDA (2024): class I is \"Considered non-hazardous,\" with more hazard under magnifiers or binoculars.", sourceLessonSlug: "laser-safety" },
          { prompt: "Which IEC class matches FDA class IIIb?", options: ["1M", "2M", "3B", "4"], correctIndex: 2, explanation: "FDA (2024): IIIb matches IEC 3B; IIIa matches 3R; IV matches 4.", sourceLessonSlug: "laser-safety" },
          { prompt: "What does the FDA table say of class IV?", options: ["Considered non-hazardous", "Hazard only under binoculars", "Skin hazard, never an eye hazard", "Direct or reflected beam; may cause fire"], correctIndex: 3, explanation: "FDA (2024): hazard from the direct or reflected beam, and a possible fire hazard.", sourceLessonSlug: "laser-safety" },
          { prompt: "When does the FDA say a class I laser's hazard increases?", options: ["Viewed with magnifiers or binoculars", "When used at 1310 nm", "On runs longer than 2 km", "When plugged into multimode"], correctIndex: 0, explanation: "FDA (2024): class I hazard increases when viewed with magnifiers or binoculars.", sourceLessonSlug: "laser-safety" },
          { prompt: "How does AJA label its FiDO converters' laser class?", options: ["Class IIIb", "CDRH Compliant Class 1", "Class 4", "Class 3R"], correctIndex: 1, explanation: "AJA Video Systems (2023, p. 17): \"CDRH Compliant Class 1.\"", sourceLessonSlug: "laser-safety" },
          { prompt: "What does AJA warn about active fiber cables?", options: ["Use only multimode fiber", "Keep runs under 2 km", "Don't look at an active end", "Clean with compressed air"], correctIndex: 2, explanation: "AJA Video Systems (2023, p. 23): they \"emit radiation invisible to the human eye. Do not look directly at the end of an active fiber-optic cable.\"", sourceLessonSlug: "laser-safety" },
          { prompt: "What does FOA say a microscope does with the light from a live fiber?", options: ["Blocks all infrared by design", "Spreads it out so it is safe", "Has no effect on eye safety", "Focuses nearly all of it into the eye"], correctIndex: 3, explanation: "FOA (n.d.-g): a microscope \"will focus virtually all the light back into the eye.\"", sourceLessonSlug: "laser-safety" },
          { prompt: "Why is even a Class 1 source never viewed through an unfiltered microscope while live?", options: ["Optical aids raise class I hazard", "Class 1 is a fire hazard", "Microscopes add a laser", "Class 1 means 1 watt"], correctIndex: 0, explanation: "The FDA says class I hazard increases with optical aids, and FOA says a microscope concentrates the light into the eye.", sourceLessonSlug: "laser-safety" },
          { prompt: "What does FOA say to do before inspecting a fiber end?", options: ["Shine a white light into it", "Check its power with a meter", "Look at it with a bare eye", "Remove the far-end connector"], correctIndex: 1, explanation: "FOA (n.d.-g, n.d.-h): check power with a meter before inspecting, and use IR-filtered microscopes.", sourceLessonSlug: "laser-safety" },
          { prompt: "How does Sony's HXCU-FB80 ship its LASER DIODE output for single-mode-only links?", options: ["On whenever powered", "On only for multimode", "Off until set in a menu", "Off only on hybrid cable"], correctIndex: 2, explanation: "Sony Corporation (2017, p. 12): it ships OFF; the user turns it on in a menu; not needed with hybrid cable.", sourceLessonSlug: "laser-safety" },
          { prompt: "How much more powerful does FOA say CATV and amplified links can be?", options: ["About half as much", "Exactly the same", "About 10 times less", "As much as 100 times"], correctIndex: 3, explanation: "FOA (n.d.-g): \"as much as 100 times more\" powerful than most communications links.", sourceLessonSlug: "laser-safety" },
          { prompt: "What laser class do broadcast camera fiber transmitters carry, per this course?", options: ["Not stated in pages read", "Always Class 1", "Always Class 3B", "Always Class 4"], correctIndex: 0, explanation: "The pages read for the course do not state it; check the label and the manual of the gear in front of you.", sourceLessonSlug: "laser-safety" },
          { prompt: "What does FOA call the more common hazard in fiber work?", options: ["Laser burns", "Bare fiber shards", "Electric shock", "Fire"], correctIndex: 1, explanation: "FOA (n.d.-g): bare fiber shards.", sourceLessonSlug: "laser-safety" },
          { prompt: "Which precautions does FOA give against fiber shards?", options: ["Bare hands and a white mat", "Gloves and a snack at the bench", "Side-shield glasses, black mat", "A fan to blow scraps away"], correctIndex: 2, explanation: "FOA (n.d.-g): safety glasses with side shields, a black work mat, scraps in a sealed container, no food or drink.", sourceLessonSlug: "laser-safety" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: Audio over copper
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "balanced-lines-the-xlr-and-phantom-power",
      title: "16 · Balanced lines, the XLR and phantom power",
      section: "5 · Audio over copper",
      recallContent: [
        {
          prompt: "What does FOA say to do before working on or inspecting a fiber?",
          answer: "Test it with a power meter; never look into a fiber end; use an infrared-filtered or video microscope.",
        },
        {
          prompt: "Why is a Class 1 laser source still not safe to view through an unfiltered microscope?",
          answer: "The FDA says class I hazard increases with optical aids, and FOA says a microscope focuses virtually all the light back into the eye.",
        },
      ],
      body: `${QR}

**Where this starts.** *Break Into Sports & Media Broadcasting* lesson "6 · Signal flow and audio fundamentals" covers microphone types, gain and the chain from source to recorder. It does not cover the cable. This lesson does.

**Why balanced lines reject noise.** Mackie explains it this way: in a balanced line, "Any noise that is induced will be so equally on both connections." At the receiving end the two signals are brought back into phase, which "flips the noise 180 degrees out of phase between the two signals," and the noise cancels. Mackie calls this "Common Mode Rejection" (Mackie, n.d.). In one sentence, reasoned from that: the same noise lands on both legs, the receiver responds only to the difference between the legs, and the shared noise drops out. The reviewer will check that wording.

Rane adds two points. The twisted pair inside a balanced cable "provides much greater immunity to magnetic field interference," and in an unbalanced cable the shield also carries the signal's return current (Macatee, 2002, p. 2). Balanced interconnect "was developed to be immune to these noise currents," and balanced and unbalanced interconnect "are truly not compatible." Rane's practical rule: "It all boils down to using balanced lines, only balanced lines, and nothing but balanced lines" (Rane Corporation, 2015, pp. 2 to 3).

**Which plug is which.** Mackie: XLR mic cables and 1/4 inch TRS are "the most commonly found types of balanced connectors in live sound," and "A standard TS instrument cable is the unbalanced cable you will run into most often" (Mackie, n.d.). Rane's interconnect chart treats 1/4 inch TRS (tip, ring, sleeve) as balanced, and 1/4 inch or 3.5 mm TS (tip, sleeve) and RCA as unbalanced (Rane Corporation, 2015, p. 6).

**How far.** Mackie: "Unbalanced cables are generally only good for running signal up to 15 feet." It gives no length for balanced cable (Mackie, n.d.).

**The 3-pin XLR, pin by pin.**

| Pin | What it carries | Source |
|---|---|---|
| 1 | The shield. Many makers tie balanced shields to signal ground at "pin 1 for XLR connectors, the sleeve on 1/4" (6.35mm) jacks" | Macatee (2002, p. 2) |
| 2 | Hot. "The Audio Engineering Society has adopted the 'pin 2 is hot' standard" | Macatee (2002, p. 1) |
| 3 | The other leg of the pair, the cold or negative side | Reasoned below |

Rane: "Standard XLR cables come with their shields tied to pin 1 at each end (the shells are not tied, nor need be)" (Rane Corporation, 2015, p. 3). Sennheiser's pin figure for its MK 4 microphone marks pin 2 "+," joins pin 1 to the cable shield, and runs the capsule's other leg to pin 3 (Sennheiser, 2026, p. 39). Reasoned from those three sources: pin 3 is the other leg of the pair, the cold or negative side. No source read for this course says "pin 3 is cold" in words, and the reviewer will confirm it.

Rane's cable drawings join plus to plus and minus to minus, with the shield going "TO XLR PIN 1" or "TO TRS SLEEVE" (Rane Corporation, 2015, p. 6). Not every cable ties pin 1 at both ends: a Clear-Com cable for a balanced line-level feed wires the pair to pins 2 and 3 and leaves pin 1 floating in that cable (Clear-Com, 2019e). Read the drawing for the cable you are making.

**Phantom power.** Schoeps describes phantom power as "a standardized method of supplying power to professional analog microphones." P48 uses 48 V. "The supply voltage is applied as a common-mode DC voltage to both signal wires," with the cable shield as the return, and the details are in IEC 61938 (Schoeps, n.d.). Sennheiser's manual for the MK 4 says to connect it only to inputs giving "48 V phantom powering as per IEC 61938," 48 V plus or minus 4 V with at least 3.5 mA per channel, and warns: "An unsuitable power supply can cause damage to the product" (Sennheiser, 2026, p. 16).

**What phantom does and does not harm.** Schoeps says phantom powering is "generally safe" for dynamic and ribbon microphones, "whereas 'T' powering can easily damage them," and that damage can come from "plugging or unplugging it while the powering is on." Connect microphones with the supply off (Schoeps, n.d.). So "phantom power fries dynamic mics" is not what the maker says. The risks it names are the wrong kind of powering and hot-plugging.

**What that means for the cable, reasoned.** The two signal wires of a 3-pin XLR are pins 2 and 3. So a mic line with phantom on carries 48 V DC on pins 2 and 3 along with the audio. Lesson 17 shows a 3-pin XLR that carries DC on only one pin, and why the two must never meet.

:::reveal How does a balanced line reject noise, in one sentence? ||| The same noise lands on both legs, and the receiver responds only to the difference between them, so the shared noise cancels (reasoned from Mackie, n.d.; Macatee, 2002).

:::reveal On a 3-pin XLR, which pin is hot and which is the shield? ||| Pin 2 is hot (the AES "pin 2 is hot" standard, per Rane); pin 1 is the shield.

:::reveal What does Schoeps say can damage a microphone when phantom power is on? ||| Plugging or unplugging it while the powering is on; and T powering can easily damage dynamic and ribbon mics.

## Sources
- ${MACKIE} Locator: the section on balanced cables; the connector and length paragraphs.
- ${MACATEE_2002} Locator: p. 1, "Introduction"; p. 2, "The 'Pin 1' Problem" and "Balanced vs. Unbalanced Shields".
- ${RANE_2015} Locator: p. 2, "Ground Loops"; p. 3, the balanced-lines rule and the XLR shield sentence; p. 6, Figure 4 and the cable figure labels.
- ${SENNHEISER_MK4} Locator: p. 16, "Connecting the microphone," NOTICE; p. 39, "Pin assignment of the XLR-3 connector" (figure).
- ${CLEARCOM_IFB} Locator: the cable wiring answer.
- ${SCHOEPS} Locator: page text, the P48 definition, the dynamic and ribbon sentence, and the hot-plugging advice.`,
    },
    {
      slug: "same-plug-different-signal",
      title: "17 · Same plug, different signal: intercom and DMX on XLR",
      section: "5 · Audio over copper",
      recallContent: [
        {
          prompt: "Under P48 phantom power, where does the 48 V go?",
          answer: "As a common-mode DC voltage on both signal wires (pins 2 and 3 of an XLR), with the shield as the return (Schoeps).",
        },
        {
          prompt: "Which pin of a 3-pin XLR is hot, and which carries the shield?",
          answer: "Pin 2 is hot; pin 1 is the shield.",
        },
      ],
      body: `${QR}

**Same shell, different jobs.** The XLR family carries more than microphone audio. This lesson shows three other signals that ride the same connectors, and why the plug fitting proves nothing.

**Party-line intercom on a 3-pin XLR.** Clear-Com draws the line plainly. A balanced 3-pin XLR audio feed is a 4-wire connection "that doesn't use a Vdc component on any of the 3-pins." A 3-pin XLR wired for Clear-Com intercom is "an unbalanced 2-wire connection that uses a +30Vdc on one of the XLR pins to power various intercom stations, beltpacks and interfaces." Then: "The two disciplines are not compatible and in order to join them together an interface is required," such as its EF-701M for one channel or IF4W4 for four (Clear-Com, 2024a).

Clear-Com's party-line pin-out: "Pin 1 = Ground Pin 2 = Voltage Pin 3 = Audio" (Clear-Com, 2019d). The line "must be terminated with 200 ohms," and every 2-wire party-line converts the headset's 4-wire circuit to 2-wire and back with a "hybrid" (Clear-Com, 2019c).

**The CCU's intercom pins.** Many camera CCUs label an intercom connector "common," "+" and "-". It looks like a 3-wire circuit. Clear-Com says it is not: "The '+' & '-' pins are a 2-wire party-line, with the 'common' simply being a shield/ground" (Clear-Com, 2019c).

**Headsets on 4-pin and 5-pin XLR.** Clear-Com's headset pin-outs (Clear-Com, 2026c):

| Pin | 4-pin XLR (male on the beltpack or panel) | 5-pin XLR (female on the unit) |
|---|---|---|
| 1 | Mic low | Mic low |
| 2 | Mic high | Mic high |
| 3 | Headphone low | Headphone low |
| 4 | Headphone high | Headphone left |
| 5 | | Headphone right |

Whether other intercom makers use the same 4-pin pin-out is a question this course leaves open; check the maker's sheet.

**DMX lighting data on a 5-pin XLR.** ProSoundWeb: "The standard for DMX calls for using a 5-pin XLR connector and 5-conductor shielded 110-ohm cable," though some manufacturers "have opted to use 3-pin XLR connectors instead" (Leerman, 2013, p. 2). Its pin list: pin 1 signal common (shield); pin 2 Data 1 negative; pin 3 Data 1 positive, the primary data; pins 4 and 5 an optional second data pair.

**Why mic cable is the wrong DMX cable.** ProSoundWeb: "Use of standard microphone cable is not recommended as it could induce dropouts or errors in the data stream, especially over longer cable runs" (Leerman, 2013, p. 2). ENTTEC's support page explains: "Typical microphone cable has a characteristic impedance of roughly 40 to 70 ohms," not controlled in manufacture, at about 100 pF per meter or more, while DMX data cable is 120 ohms nominal (110 to 120 acceptable) at about 40 to 50 pF per meter. The mismatch causes reflections that grow with run length and fixture count, and the faults are intermittent: flicker, twitching moving lights, faults that move when cables are swapped (ENTTEC, 2026).

ENTTEC is honest about the exception: mic cable "will often carry DMX" on a short, simple rig, roughly 10 to 15 m, a handful of fixtures, terminated, indoors. It is still the wrong cable. ENTTEC's advice is 5-pin, 120-ohm shielded twisted pair for new runs, and labeling mic leads audio-only (ENTTEC, 2026).

**What the cable impedance should be.** ProSoundWeb says 110-ohm cable; ENTTEC says 120 nominal, with 110 to 120 acceptable. ESTA lists the governing documents, E1.11 (DMX512-A) and E1.27-1 (portable control cables), as free downloads under a license agreement (Entertainment Services and Technology Association [ESTA], n.d.). This course did not download them, so it leaves the exact cable figure open. Termination and how many devices a DMX line can carry are in section 8.

**Why the XLRs must never be swapped, reasoned.** Put it together. The same connector family carries:

- mic-level balanced audio on a 3-pin XLR, with 48 V on pins 2 and 3 when phantom is on (lesson 16);
- a party-line on a 3-pin XLR, with +30 V DC on pin 2;
- a headset's mic and earphone on a 4-pin XLR;
- lighting data on a 5-pin XLR, and sometimes on a 3-pin.

Patch a party-line into a phantom-powered mixer input and you put DC where neither end expects it. Clear-Com says the two are incompatible and need an interface; Schoeps and Sennheiser say an unsuitable supply or hot-plugging can damage gear. No source read for this course says exactly what breaks, or how fast, so this course names no failure. The rule is simple: never patch a party-line cable into an audio input, or a mic into a party-line, even though the plugs fit. The shell tells you the pin count, not the signal. Read the label and the gear.

:::reveal What is on each pin of a Clear-Com party-line 3-pin XLR? ||| Pin 1 ground, pin 2 voltage (+30 V DC), pin 3 audio (Clear-Com, 2019d; 2024a).

:::reveal A CCU's intercom pins say "common," "+" and "-". Is that a 3-wire circuit? ||| No. Clear-Com says "+" and "-" are a 2-wire party-line and "common" is just a shield or ground.

:::reveal Why is mic cable the wrong cable for DMX, according to ENTTEC? ||| Its impedance is roughly 40 to 70 ohms and uncontrolled, against 120 ohms for DMX cable, so it causes reflections and intermittent faults that grow with length and fixture count.

## Sources
- ${CLEARCOM_XLR_DIFF} Locator: answer text, the balanced and party-line definitions and the interface sentence.
- ${CLEARCOM_PL_PINOUT} Locator: answer text, the pin-out line.
- ${CLEARCOM_CCU_PL} Locator: rules 1 to 3; note 14.
- ${CLEARCOM_HEADSETS} Locator: the XLR-4 and XLR-5 tables.
- ${LEERMAN_2013} Locator: p. 2, the connector, pin list and microphone-cable paragraphs.
- ${ENTTEC_2026} Locator: page text, the impedance and capacitance figures, the failure symptoms, and the short-rig exception.
- ${ESTA_LISTING} Locator: entries for E1.11 and E1.27-1, and the note on free downloads.
- ${SCHOEPS} Locator: page text, the hot-plugging advice.
- ${SENNHEISER_MK4} Locator: p. 16, NOTICE.`,
    },
    {
      slug: "aes3-word-clock-and-madi",
      title: "18 · AES3, word clock and MADI",
      section: "5 · Audio over copper",
      recallContent: [
        {
          prompt: "What does Clear-Com say a 3-pin XLR wired for its party-line intercom carries?",
          answer: "An unbalanced 2-wire connection with +30 V DC on one pin (pin 2) to power stations, beltpacks and interfaces.",
        },
        {
          prompt: "What range does ENTTEC give for typical microphone cable impedance, and for DMX cable?",
          answer: "Roughly 40 to 70 ohms for mic cable; 120 ohms nominal (110 to 120 acceptable) for DMX cable.",
        },
      ],
      body: `${QR}

**Digital audio on two kinds of copper.** AES3 is digital audio on a balanced pair; AES3id is the same format on coax. The AES standards are paywalled, so this lesson uses Rane's table, which it footnotes to the 2003 and 2001 editions (Bohn, 2014, p. 2):

| | AES3 | AES3id | S/PDIF |
|---|---|---|---|
| Line | Balanced | Unbalanced | Unbalanced |
| Connector | XLR-3 | BNC | RCA |
| Impedance | 110 ohms | 75 ohms | 75 ohms |
| Level | 2 to 7 V peak to peak | 1.0 V peak to peak | 0.5 V |
| Cable | Shielded twisted pair | Coax | |
| Maximum distance | 100 m | 1000 m | 10 m |

Those run lengths come from 2001 and 2003 editions, as Rane tabulated them in 2014. Treat them as Rane's dated figures, not as today's standard. This course did not read a current maker's figure.

Lesson 1 met a 110-ohm "digital microphone cable," Belden's 1800F. Its sheet says digital audio, not AES3 by name, but 110 ohms is the impedance Rane gives for AES3.

**Why a coax version exists.** Rane: AES3id carries "the same format as AES3 but instead of 110 Ω balanced line, it is a 75 Ω unbalanced line using BNC connectors." It is "a special AES3 subset for broadcast applications and long distance runs," because "unbalanced coax is superior to balanced lines due to the high capacitance of shielded twisted-pair cable" (Bohn, 2014, p. 2).

**Coax is not all the same.** Rane's caution: "AES3 converted to 75 Ω coax is not S/PDIF ... Nor is AES3id 75 Ω BNC the same as 75 Ω RCA S/PDIF" (Bohn, 2014, p. 2). The level and format differ. Going from AES3 to AES3id takes either a resistor network, which Rane notes is the AES3id recommended network for a 12 dB pad, usable only if one end is transformer coupled and the run is short, or a transformer, which Rane calls "the best passive impedance matchers" (Bohn, 2014, pp. 2 to 4). Either way it is a converter, not a plain adapter cable.

**Word clock.** Clear-Com calls word clock the "metronome" that governs sample timing. MADI, AES/EBU and S/PDIF carry their clock inside the data stream, but a separate word clock is often sent as a square wave at the sample rate, and "Dedicated word clock inputs and outputs on digital equipment generally use BNC connectors" (Clear-Com, 2019b).

RME's manual is specific. Word clock is ideally "a 5 Volt square wave with the frequency of the sample rate," with harmonics "far above 500 kHz," and "both the cable itself and the terminating resistor at the end of the chain should have an impedance of 75 Ohm." Too low a voltage makes sync fail, and reflections cause jitter and sync failure. Devices are chained with BNC T-adapters, and the last one is terminated with a 75-ohm resistor or its own termination switch; a device with fixed internal 75-ohm termination can load the chain with a second 75-ohm load (RME, n.d., p. 17). On RME's ADI-648, the word clock input is a BNC, unterminated at 10 kilohms with a switch for internal 75-ohm termination, and the output gives 4.0 V peak to peak into 75 ohms (RME, n.d., pp. 6 to 7).

**The trap again, reasoned.** RME warns that computer stores "usually" carry 50-ohm BNC parts, while "The 75 Ohm components used for word clock are part of video technology (RG59)" (RME, n.d., p. 17). So a 50-ohm BNC cable fits a word clock jack and is the wrong cable: lesson 2's "it fits, and it reflects," in an audio rack. The chain rule is the same as reference in lesson 7: one 75-ohm termination, at the end.

**MADI.** MADI, the Multichannel Audio Digital Interface (AES10), carries many channels of digital audio "on a single coaxial or fiber cable." It runs one way, one sender to one receiver (Clear-Com, 2019b). Its channel count depends on the sample rate (Clear-Com, 2019b):

| Channels | Sample rate |
|---|---|
| 56 | 32 to 48 kHz, plus or minus 12.5% |
| 64 | 32 to 48 kHz, nominal |
| 28 | 64 to 96 kHz, plus or minus 12.5% |

RME adds that the 64-channel mode "was introduced officially in 2001" and that "Older devices understand and generate only the 56 channel format" (RME, n.d., p. 24). So "MADI is 64 channels" is only part of the answer. RME dates MADI's definition to 1989 while citing "AES10-1991" for its interface, so this course says AES10 without a year.

**MADI's two cables.** On RME's ADI-648, coaxial MADI is a 75-ohm BNC with cable up to 100 m; optical MADI is a duplex SC connector on 62.5/125 or 50/125 multimode fiber, up to 2,000 m (RME, n.d., p. 7). RME notes that single-mode reaches much farther on a different fiber, that the 1300 nm light is invisible, and that the plugs are SC, not to be confused with ST (RME, n.d., p. 24). Lessons 11, 12 and 15 apply: multimode, an SC connector, and light you cannot see.

:::reveal Give AES3's connector and impedance, and AES3id's. ||| AES3: XLR-3, 110 ohms, balanced. AES3id: BNC, 75 ohms, unbalanced (Bohn, 2014, p. 2).

:::reveal What impedance does RME want for word clock cable and termination, and why does that matter in a computer store? ||| 75 ohms; stores usually carry 50-ohm BNC parts, which fit but are wrong (RME, n.d., p. 17).

:::reveal How many MADI channels at 48 kHz, and at 96 kHz? ||| 56 or 64 at 32 to 48 kHz (older devices only 56); 28 at 64 to 96 kHz (Clear-Com, 2019b; RME, n.d., p. 24).

## Sources
- ${BOHN_2014} Locator: p. 2, table "Differences Between AES3 and S/PDIF," the AES3id paragraph and "Conversion Caution"; pp. 2 to 3, "AES3 to AES3id or S/PDIF" and transformers; p. 4, figure "AES3 4V out = AES3id 1V in".
- ${BELDEN_1800F} Locator: p. 1, title and "Electricals".
- ${CLEARCOM_MADI} Locator: the word clock and MADI paragraphs and the channel table.
- ${RME_ADI648} Locator: pp. 6 to 7, section 4; p. 7, section 4.2 "Outputs"; p. 17, section 9.2 "Cabling and Termination"; p. 24, section 12.3 "MADI Basics".`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Audio over copper",
      section: "5 · Audio over copper",
      body: "A graded check on balanced lines, the XLR and phantom power; party-line intercom, headsets and DMX on the XLR family; and AES3, word clock and MADI. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does broadcasting lesson 6, \"Signal flow and audio fundamentals\", leave for this course to cover?", options: ["The cable and its connectors", "Microphone types and uses", "Gain staging and clipping", "The chain to the recorder"], correctIndex: 0, explanation: "That lesson covers mic types, gain and the chain from source to recorder; lesson 16 covers the cable.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "How does Mackie say noise is induced on a balanced line?", options: ["Only on the shield wire", "Equally on both connections", "Only on the hot leg", "Only near power cables"], correctIndex: 1, explanation: "Mackie (n.d.): \"Any noise that is induced will be so equally on both connections.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What does Mackie say the receiver does to the noise?", options: ["Doubles it to measure it", "Sends it down the shield", "Flips it 180 degrees out of phase", "Filters out every low tone"], correctIndex: 2, explanation: "Mackie (n.d.): bringing the signals back into phase \"flips the noise 180 degrees out of phase between the two signals.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What does Mackie call this noise-cancelling effect?", options: ["Phantom Powering", "Ground Lifting", "Pin 1 Bonding", "Common Mode Rejection"], correctIndex: 3, explanation: "Mackie (n.d.): \"Common Mode Rejection.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "In lesson 16's one-sentence version, why does a balanced line reject noise?", options: ["Shared noise drops out of the difference", "The shield soaks up all of the noise", "Twisting the pair cancels the signal", "The XLR shell grounds out the noise"], correctIndex: 0, explanation: "The same noise lands on both legs, and the receiver responds only to the difference between them, so the shared noise cancels.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What does Rane say the twisted pair in a balanced cable provides?", options: ["Lower loss at high frequency", "Much more magnetic immunity", "Power for phantom microphones", "A 75-ohm match for word clock"], correctIndex: 1, explanation: "Macatee (2002, p. 2): \"much greater immunity to magnetic field interference.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "In an unbalanced cable, what else does the shield carry, per Rane?", options: ["Phantom power at 48 V", "The party-line's 30 V DC", "The signal's return current", "A second copy of the audio"], correctIndex: 2, explanation: "Macatee (2002, p. 2): an unbalanced cable's shield also carries the signal's return current.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What does Rane say about balanced and unbalanced interconnect?", options: ["Fully interchangeable", "Compatible below 15 ft", "Compatible with an XLR", "Truly not compatible"], correctIndex: 3, explanation: "Rane Corporation (2015, p. 2): balanced and unbalanced interconnect \"are truly not compatible.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What is Rane's practical rule for interconnects?", options: ["Balanced lines, only balanced lines", "Unbalanced lines for short runs", "Any line, if the shield is tied", "TS cables for every live job"], correctIndex: 0, explanation: "Rane Corporation (2015, p. 3): \"using balanced lines, only balanced lines, and nothing but balanced lines.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "Which balanced connectors does Mackie call the most common in live sound?", options: ["RCA and 3.5 mm TS", "XLR and 1/4 inch TRS", "BNC and SMA", "RJ45 and etherCON"], correctIndex: 1, explanation: "Mackie (n.d.): XLR mic cables and 1/4 inch TRS.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "Which cable does Mackie call the unbalanced one you will meet most often?", options: ["A 3-pin XLR mic cable", "A 1/4 inch TRS patch", "A TS instrument cable", "A 4-pin XLR headset"], correctIndex: 2, explanation: "Mackie (n.d.): \"A standard TS instrument cable is the unbalanced cable you will run into most often.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "How does Rane's interconnect chart treat 1/4 inch TRS?", options: ["As unbalanced", "As digital", "As powered", "As balanced"], correctIndex: 3, explanation: "Rane Corporation (2015, p. 6): TRS balanced; TS and RCA unbalanced.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "How far does Mackie say unbalanced cables are generally good for?", options: ["Up to 15 feet", "Up to 100 meters", "Up to 1000 feet", "Up to 3 feet"], correctIndex: 0, explanation: "Mackie (n.d.): \"generally only good for running signal up to 15 feet.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What length does Mackie give for balanced cable?", options: ["Up to 15 feet", "None; it gives no length", "Up to 100 meters", "Unlimited by design"], correctIndex: 1, explanation: "Mackie (n.d.) gives no length for balanced cables.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What does pin 1 of a 3-pin XLR carry, per Rane?", options: ["The hot leg", "The cold leg", "The shield", "Phantom only"], correctIndex: 2, explanation: "Macatee (2002, p. 2): shields go to signal ground at \"pin 1 for XLR connectors.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "Which standard does Rane say the Audio Engineering Society adopted?", options: ["Pin 3 is hot", "Pin 1 is hot", "Pin 4 is hot", "Pin 2 is hot"], correctIndex: 3, explanation: "Macatee (2002, p. 1): \"the Audio Engineering Society has adopted the 'pin 2 is hot' standard.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What does lesson 16 say pin 3 of a 3-pin XLR carries?", options: ["The other leg, the cold", "The cable's shield", "Phantom power only", "Nothing; it is unused"], correctIndex: 0, explanation: "Reasoned from pin 2 hot (Rane), the \"+\" on pin 2 and the capsule's other leg to pin 3 (Sennheiser), and pin 1 as shield.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What is the status of \"pin 3 is cold\" in this course?", options: ["Quoted from Rane", "Reasoned; reviewer confirms", "Quoted from AES3", "Measured on a cable"], correctIndex: 1, explanation: "No source read says it in words; the lesson reasons it from three sources and the reviewer will confirm it.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "How does Rane say standard XLR cables tie their shields?", options: ["To the shell at each end", "Floating at both ends", "To pin 1 at each end", "To pin 3 at one end"], correctIndex: 2, explanation: "Rane Corporation (2015, p. 3): \"shields tied to pin 1 at each end.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What does Rane say about the XLR shells?", options: ["Tied to pin 2", "Tied to earth", "Tied to pin 1 at the mic", "Not tied, nor need be"], correctIndex: 3, explanation: "Rane Corporation (2015, p. 3): \"(the shells are not tied, nor need be).\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "Where do Rane's cable drawings send the shield?", options: ["XLR pin 1 or TRS sleeve", "XLR pin 3 or TRS tip", "XLR shell or TRS ring", "XLR pin 2 or TRS ring"], correctIndex: 0, explanation: "Rane Corporation (2015, p. 6): \"TO XLR PIN 1\" or \"TO TRS SLEEVE.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "In Clear-Com's balanced line-level feed cable, what happens to pin 1?", options: ["It is tied to pin 2", "It floats in that cable", "It carries 30 V DC", "It is tied to the shell"], correctIndex: 1, explanation: "Clear-Com (2019e): the pair goes to pins 2 and 3 and pin 1 is left floating in that cable.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "How does Schoeps describe phantom power?", options: ["A way to power intercom beltpacks", "A clock for digital audio gear", "A standard way to power analog mics", "A DC supply for DMX fixtures"], correctIndex: 2, explanation: "Schoeps (n.d.): \"a standardized method of supplying power to professional analog microphones.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What voltage does P48 phantom power use?", options: ["30 V", "12 V", "600 V", "48 V"], correctIndex: 3, explanation: "Schoeps (n.d.): P48 uses 48 V.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "Where does Schoeps say the phantom supply voltage is applied?", options: ["As common-mode DC on both signal wires", "As DC on the cable shield only", "As AC on pin 1 of the XLR", "As DC on pin 2 alone"], correctIndex: 0, explanation: "Schoeps (n.d.): \"applied as a common-mode DC voltage to both signal wires,\" with the shield as return.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "Which standard holds the details of phantom powering, per Schoeps?", options: ["AES3", "IEC 61938", "SMPTE 12M", "TIA-568"], correctIndex: 1, explanation: "Schoeps (n.d.): the details are in IEC 61938.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What phantom supply does Sennheiser require for the MK 4?", options: ["30 V, at least 10 mA", "12 V plus or minus 1 V", "48 V ± 4 V, 3.5 mA or more", "48 V ± 10 V, no minimum"], correctIndex: 2, explanation: "Sennheiser (2026, p. 16): 48 V plus or minus 4 V, at least 3.5 mA per channel, per IEC 61938.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What does Schoeps say about phantom power and dynamic or ribbon mics?", options: ["It always destroys them", "It is never allowed", "It must be 12 V only", "It is generally safe"], correctIndex: 3, explanation: "Schoeps (n.d.): phantom is \"generally safe\" for dynamic and ribbon microphones.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "Which kind of powering does Schoeps say can easily damage dynamic and ribbon mics?", options: ["T powering", "P48 phantom", "Battery power", "USB power"], correctIndex: 0, explanation: "Schoeps (n.d.): \"whereas 'T' powering can easily damage them.\"", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What does Schoeps advise about connecting microphones?", options: ["Connect with phantom on", "Connect with supply off", "Connect via a 50-ohm pad", "Connect only to T power"], correctIndex: 1, explanation: "Schoeps (n.d.): damage can come from plugging or unplugging while powering is on; connect with the supply off.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "Reasoned in lesson 16, what does a mic line with phantom on carry besides audio?", options: ["48 V DC on pin 1 only", "30 V DC on pin 2 only", "48 V DC on pins 2 and 3", "No DC on any pin"], correctIndex: 2, explanation: "The signal wires of a 3-pin XLR are pins 2 and 3, and phantom puts common-mode DC on both.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "How does Clear-Com describe a balanced 3-pin XLR audio feed?", options: ["2-wire, 30 V on pin 2", "2-wire, 48 V on pin 3", "4-wire, 30 V on pin 1", "4-wire, no DC on any pin"], correctIndex: 3, explanation: "Clear-Com (2024a): a 4-wire connection \"that doesn't use a Vdc component on any of the 3-pins.\"", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "How does Clear-Com describe a 3-pin XLR wired for its party-line intercom?", options: ["Unbalanced 2-wire, +30 V DC on a pin", "Balanced 4-wire, no DC on any pin", "Balanced 2-wire, 48 V on two pins", "Unbalanced 4-wire, 12 V on pin 1"], correctIndex: 0, explanation: "Clear-Com (2024a): \"an unbalanced 2-wire connection that uses a +30Vdc on one of the XLR pins.\"", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What does the +30 V on a Clear-Com party-line power?", options: ["Microphones on stage", "Stations, beltpacks, interfaces", "Fixtures on a DMX line", "The camera head on fiber"], correctIndex: 1, explanation: "Clear-Com (2024a): it powers \"various intercom stations, beltpacks and interfaces.\"", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What does Clear-Com say joining balanced audio and party-line requires?", options: ["A plain XLR barrel", "A 3-to-5-pin adapter", "An interface", "A phantom supply"], correctIndex: 2, explanation: "Clear-Com (2024a): \"The two disciplines are not compatible and in order to join them together an interface is required.\"", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "Which Clear-Com interface does lesson 17 name for one channel?", options: ["IF4W4", "HelixNet", "GS12341", "EF-701M"], correctIndex: 3, explanation: "Clear-Com (2024a): the EF-701M for one channel; the IF4W4 for four.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What is on pin 1 of a Clear-Com party-line 3-pin XLR?", options: ["Ground", "Voltage", "Audio", "Data"], correctIndex: 0, explanation: "Clear-Com (2019d): \"Pin 1 = Ground Pin 2 = Voltage Pin 3 = Audio.\"", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What is on pin 2 of a Clear-Com party-line 3-pin XLR?", options: ["Ground", "Voltage", "Audio", "Shield"], correctIndex: 1, explanation: "Clear-Com (2019d): pin 2 is voltage, the +30 V DC.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What is on pin 3 of a Clear-Com party-line 3-pin XLR?", options: ["Ground", "Voltage", "Audio", "Tally"], correctIndex: 2, explanation: "Clear-Com (2019d): pin 3 is audio.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What termination does Clear-Com say a party-line needs?", options: ["120 ohms", "75 ohms", "110 ohms", "200 ohms"], correctIndex: 3, explanation: "Clear-Com (2019c): the line \"must be terminated with 200 ohms.\"", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What converts a headset's 4-wire circuit to the party-line's 2-wire and back?", options: ["A hybrid", "A terminator", "A splitter", "A DA"], correctIndex: 0, explanation: "Clear-Com (2019c): every 2-wire party-line does this with a \"hybrid.\"", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What does Clear-Com say a CCU's \"common,\" \"+\" and \"-\" intercom pins are?", options: ["A true 3-wire circuit", "2-wire party-line plus shield", "A balanced mic line", "A DMX data pair"], correctIndex: 1, explanation: "Clear-Com (2019c): \"The '+' & '-' pins are a 2-wire party-line, with the 'common' simply being a shield/ground.\"", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "On a CCU's intercom connector, what is the pin marked \"common\"?", options: ["A third audio wire", "The 30 V supply", "A shield or ground", "The talk channel"], correctIndex: 2, explanation: "Clear-Com (2019c): \"the 'common' simply being a shield/ground.\"", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "On Clear-Com's 4-pin XLR headset pin-out, what is on pin 2?", options: ["Mic low", "Headphone low", "Headphone high", "Mic high"], correctIndex: 3, explanation: "Clear-Com (2026c): pin 1 mic low, pin 2 mic high, pin 3 headphone low, pin 4 headphone high.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "On Clear-Com's 4-pin XLR headset pin-out, what is on pin 4?", options: ["Headphone high", "Headphone low", "Mic high", "Mic low"], correctIndex: 0, explanation: "Clear-Com (2026c): pin 4 is headphone high.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "On Clear-Com's 5-pin XLR headset pin-out, what is on pin 5?", options: ["Headphone left", "Headphone right", "Mic high", "Mic low"], correctIndex: 1, explanation: "Clear-Com (2026c): pin 4 headphone left, pin 5 headphone right.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "Do other intercom makers use Clear-Com's 4-pin headset pin-out, per lesson 17?", options: ["Yes, every maker matches", "No, every maker differs", "Left open; check the maker", "Only one other maker does"], correctIndex: 2, explanation: "The course leaves it open: no other maker's pin-out was read.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What does ProSoundWeb say the DMX standard calls for?", options: ["3-pin XLR, 67-ohm mic cable", "RJ45, Cat5e 100-ohm cable", "BNC, 75-ohm RG59 coax", "5-pin XLR, 110-ohm shielded cable"], correctIndex: 3, explanation: "Leerman (2013, p. 2): \"a 5-pin XLR connector and 5-conductor shielded 110-ohm cable.\"", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What connector does ProSoundWeb say some DMX makers use instead of 5-pin?", options: ["3-pin XLR", "4-pin XLR", "BNC", "RJ45"], correctIndex: 0, explanation: "Leerman (2013, p. 2): some manufacturers \"have opted to use 3-pin XLR connectors.\"", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "On a DMX 5-pin XLR, what is pin 1?", options: ["Data 1 positive", "Signal common (shield)", "Data 1 negative", "Optional second pair"], correctIndex: 1, explanation: "Leerman (2013, p. 2): pin 1 signal common (shield); pin 2 Data 1 negative; pin 3 Data 1 positive.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "On a DMX 5-pin XLR, what is pin 3?", options: ["Signal common", "Data 1 negative", "Data 1 positive", "Optional data"], correctIndex: 2, explanation: "Leerman (2013, p. 2): pin 3 is Data 1 positive, the primary data.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "On a DMX 5-pin XLR, what is pin 2?", options: ["Signal common", "Data 1 positive", "Optional data", "Data 1 negative"], correctIndex: 3, explanation: "Leerman (2013, p. 2): pin 2 is Data 1 negative.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What does ProSoundWeb say about microphone cable for DMX?", options: ["Not advised: dropouts or errors", "Fine at any length of run", "Required by the DMX standard", "Better than data cable indoors"], correctIndex: 0, explanation: "Leerman (2013, p. 2): \"not recommended as it could induce dropouts or errors in the data stream.\"", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What impedance does ENTTEC give for typical microphone cable?", options: ["Exactly 120 ohms", "Roughly 40 to 70 ohms", "About 75 ohms", "About 600 ohms"], correctIndex: 1, explanation: "ENTTEC (2026): \"roughly 40 to 70 ohms,\" not controlled in manufacture.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What impedance does ENTTEC give for DMX data cable?", options: ["75 nominal; 50 to 75 OK", "67 nominal; 40 to 70 OK", "120 nominal; 110 to 120 OK", "100 nominal; 90 to 110 OK"], correctIndex: 2, explanation: "ENTTEC (2026): 120 ohms nominal, 110 to 120 acceptable, at about 40 to 50 pF per meter.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What capacitance does ENTTEC give for typical microphone cable?", options: ["About 40 to 50 pF/m", "About 16 pF per foot", "Almost none at all", "About 100 pF/m or more"], correctIndex: 3, explanation: "ENTTEC (2026): typically 100 pF per meter or more, against 40 to 50 for DMX cable.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "Which faults does ENTTEC say mic cable on DMX causes?", options: ["Flicker, twitching, faults that move", "Hum and buzz in the PA speakers", "A blank picture on the SDI feed", "A tripped breaker on the dimmer"], correctIndex: 0, explanation: "ENTTEC (2026): intermittent faults such as flicker, twitching moving lights, and faults that move when cables are swapped.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What does ENTTEC say about mic cable on a short, simple rig?", options: ["It never works at all", "It often works, but is wrong", "It is required indoors", "It is best under 15 m"], correctIndex: 1, explanation: "ENTTEC (2026): it \"will often carry DMX\" there, but it is still the wrong cable.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What does ENTTEC advise for new DMX runs?", options: ["Mic cable, kept short", "75-ohm coax and BNC", "5-pin 120-ohm pair; label mic leads", "Cat6 with RJ45 plugs"], correctIndex: 2, explanation: "ENTTEC (2026): 5-pin, 120-ohm shielded twisted pair, and label mic leads audio-only.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "Which ESTA documents does lesson 17 name for DMX?", options: ["AES3 and AES10", "ST 2082-1 and ST 297", "IEC 61938 and 61300", "E1.11 and E1.27-1"], correctIndex: 3, explanation: "ESTA (n.d.): E1.11 (DMX512-A) and E1.27-1 (portable control cables).", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What does lesson 17 say about the exact DMX cable impedance?", options: ["Left open: 110 or 120 ohms", "Settled at 75 ohms", "Settled at 67 ohms", "Settled at 200 ohms"], correctIndex: 0, explanation: "ProSoundWeb says 110-ohm cable and ENTTEC 120 nominal; ESTA's documents were not downloaded, so it stays open.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What is lesson 17's rule for the XLR family?", options: ["Patch anything that fits the jack", "Never patch party-line into audio", "Use 3-pin XLR for all intercom", "Use mic cable for short DMX runs"], correctIndex: 1, explanation: "Never patch a party-line cable into an audio input, or a mic into a party-line, even though the plugs fit.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What does an XLR's shell tell you, per lesson 17?", options: ["The signal it carries", "The voltage on it", "The pin count only", "The cable's impedance"], correctIndex: 2, explanation: "\"The shell tells you the pin count, not the signal.\" Read the label and the gear.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What failure does lesson 17 say happens when party-line meets a phantom-powered input?", options: ["The mic always explodes", "The PA always blows a fuse", "The beltpack always melts", "It names none; no source says"], correctIndex: 3, explanation: "Clear-Com, Schoeps and Sennheiser warn of incompatibility and damage, but none says exactly what breaks, so the course names no failure.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "Which connector does Rane give for AES3?", options: ["XLR-3", "BNC", "RCA", "LC"], correctIndex: 0, explanation: "Bohn (2014, p. 2): AES3 is balanced, on XLR-3, 110 ohms.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "Which impedance does Rane give for AES3?", options: ["75 ohms", "110 ohms", "50 ohms", "67 ohms"], correctIndex: 1, explanation: "Bohn (2014, p. 2): 110 ohms.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "Which connector does Rane give for AES3id?", options: ["XLR-3", "RCA", "BNC", "SC"], correctIndex: 2, explanation: "Bohn (2014, p. 2): AES3id is unbalanced, on BNC, 75 ohms.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "Which impedance does Rane give for AES3id?", options: ["110 ohms", "50 ohms", "120 ohms", "75 ohms"], correctIndex: 3, explanation: "Bohn (2014, p. 2): 75 ohms.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "Which connector does Rane give for S/PDIF?", options: ["RCA", "BNC", "XLR-3", "ST"], correctIndex: 0, explanation: "Bohn (2014, p. 2): S/PDIF is unbalanced RCA, 75 ohms, 0.5 V.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What maximum distance does Rane's table give for AES3?", options: ["1000 m", "100 m", "10 m", "15 ft"], correctIndex: 1, explanation: "Bohn (2014, p. 2): AES3 100 m; AES3id 1000 m; S/PDIF 10 m.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What maximum distance does Rane's table give for AES3id?", options: ["100 m", "10 m", "1000 m", "2,000 m"], correctIndex: 2, explanation: "Bohn (2014, p. 2): 1000 m on coax.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "How does lesson 18 treat Rane's AES3 run lengths?", options: ["As today's AES standard text", "As Belden's spec sheet values", "As measured by this course", "As dated figures from 2001-03"], correctIndex: 3, explanation: "They come from the 2001 and 2003 editions as Rane tabulated them in 2014.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What does Rane say AES3id is for?", options: ["Broadcast and long runs", "Consumer hi-fi on RCA", "Analog mics on XLR", "Phantom-powered mics"], correctIndex: 0, explanation: "Bohn (2014, p. 2): \"a special AES3 subset for broadcast applications and long distance runs.\"", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "Why does Rane say unbalanced coax beats balanced lines for AES3id's job?", options: ["Coax carries phantom power", "Twisted pair has high capacitance", "Coax is always cheaper", "Twisted pair can't be shielded"], correctIndex: 1, explanation: "Bohn (2014, p. 2): \"due to the high capacitance of shielded twisted-pair cable.\"", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "Is AES3 converted to 75-ohm coax the same as S/PDIF?", options: ["Yes; both are on 75-ohm coax", "Yes, with an RCA adapter", "No; level and format differ", "Only at a 48 kHz rate"], correctIndex: 2, explanation: "Bohn (2014, p. 2): \"AES3 converted to 75 Ω coax is not S/PDIF.\"", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What does going from AES3 to AES3id take, per Rane?", options: ["A plain XLR-to-BNC cable", "Any 75-ohm coax and a barrel", "A phantom-power injector", "A resistor network or transformer"], correctIndex: 3, explanation: "Bohn (2014, pp. 2 to 4): a resistor network or a transformer; a converter, not a plain adapter cable.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "When does Rane say the resistor network for AES3 to AES3id is usable?", options: ["One end transformer coupled, short run", "Any length, with no transformer used", "Only on runs longer than 1000 m", "Only with phantom power switched on"], correctIndex: 0, explanation: "Bohn (2014, p. 2): only if one end is transformer coupled and the run is short.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What does Rane call transformers for this job?", options: ["The worst choice for coax", "The best passive matchers", "A cause of S/PDIF errors", "Needed only for analog"], correctIndex: 1, explanation: "Bohn (2014, p. 3): \"the best passive impedance matchers.\"", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "How does Clear-Com describe word clock?", options: ["A timecode for each frame", "A reference for video sync", "A metronome for sample timing", "A clock for the network's PTP"], correctIndex: 2, explanation: "Clear-Com (2019b): the \"metronome\" that governs sample timing.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "Which connector does Clear-Com say dedicated word clock inputs and outputs generally use?", options: ["XLR", "RCA", "LC", "BNC"], correctIndex: 3, explanation: "Clear-Com (2019b): \"generally use BNC connectors.\"", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What does RME say word clock ideally is?", options: ["A 5 V square wave at the sample rate", "48 V DC on XLR pins 2 and 3", "A 0.6 V tri-level sync pulse", "A 1 V sine wave at 10 MHz"], correctIndex: 0, explanation: "RME (n.d., p. 17): \"a 5 Volt square wave with the frequency of the sample rate.\"", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What impedance does RME want for word clock cable and its terminator?", options: ["50 ohms", "75 ohms", "110 ohms", "120 ohms"], correctIndex: 1, explanation: "RME (n.d., p. 17): both \"should have an impedance of 75 Ohm.\"", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What does RME say happens when word clock voltage is too low?", options: ["Mics are damaged", "Fiber overloads", "Sync fails", "Nothing at all"], correctIndex: 2, explanation: "RME (n.d., p. 17): too low a voltage makes sync fail.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What does RME say reflections on a word clock line cause?", options: ["Hum in the speakers", "Laser eye hazard", "A tripped breaker", "Jitter and sync failure"], correctIndex: 3, explanation: "RME (n.d., p. 17): reflections cause jitter and sync failure.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "How does RME say word clock devices are chained?", options: ["BNC T-adapters, last one terminated", "XLR splitters, first one terminated", "An RJ45 switch, none terminated", "RCA links, every one terminated"], correctIndex: 0, explanation: "RME (n.d., p. 17): BNC T-adapters, with the last device terminated in 75 ohms.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What does RME's ADI-648 word clock output give?", options: ["0.8 V p-p into 75 ohms", "4.0 V p-p into 75 ohms", "48 V into 110 ohms", "1.0 V into 50 ohms"], correctIndex: 1, explanation: "RME (n.d., pp. 6 to 7): 4.0 Vpp into 75 ohms.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What BNC parts does RME say computer stores usually carry?", options: ["75-ohm video parts", "110-ohm audio parts", "50-ohm parts", "120-ohm parts"], correctIndex: 2, explanation: "RME (n.d., p. 17): computer stores \"usually\" carry 50-ohm BNC parts; word clock's 75-ohm parts are video technology.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What does MADI stand for?", options: ["Main Audio Data Input", "Mixed Analog Digital Interface", "Media Access Data Interface", "Multichannel Audio Digital Interface"], correctIndex: 3, explanation: "Clear-Com (2019b): Multichannel Audio Digital Interface, AES10.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "In which direction does MADI run, per Clear-Com?", options: ["One way, one sender to one receiver", "Both ways on a single cable", "One sender to many receivers", "A ring of up to 32 devices"], correctIndex: 0, explanation: "Clear-Com (2019b): one-way, one sender and one receiver.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "How many MADI channels at 64 to 96 kHz?", options: ["56", "28", "64", "32"], correctIndex: 1, explanation: "Clear-Com (2019b): 28 channels at 64 to 96 kHz; 56 or 64 at 32 to 48 kHz.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What does RME say older MADI devices understand?", options: ["Only the 64-channel format", "Only the 28-channel format", "Only the 56-channel format", "Only 96 kHz streams"], correctIndex: 2, explanation: "RME (n.d., p. 24): \"Older devices understand and generate only the 56 channel format.\"", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "When does RME say MADI's 64-channel mode was introduced officially?", options: ["1989", "1991", "2014", "2001"], correctIndex: 3, explanation: "RME (n.d., p. 24): \"introduced officially in 2001.\"", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "How long a coax cable does RME give for MADI on the ADI-648?", options: ["Up to 100 m", "Up to 1000 m", "Up to 10 m", "Up to 2 km"], correctIndex: 0, explanation: "RME (n.d., p. 7): coaxial MADI on 75-ohm BNC, cable length up to 100 m.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "What does RME give for optical MADI on the ADI-648?", options: ["Duplex LC, single-mode, 10 km", "Duplex SC, multimode, 2,000 m", "ST on OM5 fiber, up to 500 m", "SMPTE 304 hybrid, up to 4 km"], correctIndex: 1, explanation: "RME (n.d., p. 7): a duplex SC connector on 62.5/125 or 50/125 multimode, up to 2,000 m.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "Why does lesson 18 say \"AES10\" without a year?", options: ["AES10 has never had a year", "SMPTE replaced the standard", "RME's dates for it differ", "Clear-Com forbids the year"], correctIndex: 2, explanation: "RME dates MADI's definition to 1989 but cites \"AES10-1991\" for its interface, so the course gives no year.", sourceLessonSlug: "aes3-word-clock-and-madi" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6: Audio and video over the network
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "network-cable-categories-and-poe",
      title: "19 · Network cable: categories, the 100-meter channel, etherCON and PoE",
      section: "6 · Audio and video over the network",
      recallContent: [
        {
          prompt: "Give AES3's connector and impedance, and AES3id's.",
          answer: "AES3: XLR-3, 110 ohms, balanced. AES3id: BNC, 75 ohms, unbalanced (Rane's table, from the 2003 and 2001 editions).",
        },
        {
          prompt: "What impedance does RME want for word clock cable and its terminator?",
          answer: "75 ohms, the video-coax parts (RG59), not the 50-ohm BNC parts a computer store usually carries.",
        },
      ],
      body: `${QR}

**Where this sits.** Lessons 4 to 18 moved signals on coax, fiber and audio pairs. This section moves them on twisted-pair network cable, the cable sold by "category." CREW-05, *Arena transmission*, teaches the network itself: its lesson "6 · What the job asks you to know about IP" covers layers and VLANs, and "9 · Why multicast is on every posting" covers multicast. This lesson is the cable and the connector under them.

**Three spec sheets side by side.**

| Cable | What the sheet says about frequency | Ethernet the sheet lists |
|---|---|---|
| Belden 5e LAN (Category 5e) | Sold as "Category 5e Premise Horizontal Cable (200MHz)," but "Values above 100 MHz are for Engineering Information Only" | 1000BASE-T, 100BASE-TX, 10BASE-T |
| Siemon Premium 6 (Category 6) | Performance table runs to 250 MHz | 10BASE-T, 100BASE-T, 1000BASE-T; no 10GBASE-T |
| Siemon Category 6A | Performance "up to 500 MHz," all of it "based on 100 meters (328 ft.)" | 10GBASE-T over "100-meter, 4-connector topologies" |

Sources: Belden (2026c, pp. 1 to 2); Siemon (n.d.-c, pp. 1 to 2); Siemon (n.d.-a, pp. 1 to 2; n.d.-b, p. 1).

**What the category number tells you, reasoned.** Read across the table: a higher category is tested to a higher frequency, and its sheet lists faster Ethernet over the same 100-meter channel. Of these sheets, only Category 6A is rated for 10GBASE-T at 100 meters. The categories themselves are defined in TIA-568 and ISO/IEC 11801, which are paywalled and were not read for this course. Siemon's Category 6 sheet lists Ethernet only to 1000BASE-T, so how far 10GBASE-T runs on Category 6 is a question this course leaves open.

**One more impedance.** Siemon's Premium 6 is 100 ohms, plus or minus 15% from 1 to 100 MHz and plus or minus 20% from 101 to 250 MHz (Siemon, n.d.-c, p. 2). Put that beside the earlier lessons: network pairs are 100 ohms, DMX data cable is 120 ohms nominal (lesson 17), AES3 is 110 ohms (lesson 18), video and word clock coax are 75 ohms, and RF coax is 50 ohms (lesson 2). Each number names a different cable.

**The 100-meter channel.** Fluke Networks defines the channel as "the connection from one active device to another, including any patch cords and equipment cords." It "should not exceed 100 meters per industry standard guidelines." Inside it, "The maximum permitted length of the permanent link is 90 meters," and "standards recommend 5 meter patch cords" (Fluke Networks, 2016). So the 100 meters counts every cord from one box to the next, not just the long run in the wall or across the floor.

**etherCON: the RJ45 for the road.** Neutrik's NE8MX6 etherCON is a "CAT6A compliant RJ45 plug" inside a cable carrier with "a robust metal shell" and "chuck-type strain relief." Neutrik calls it a "Ruggedized connector with CAT6A component compliance according to ISO/IEC 11801 and TIA/EIA 568-C.2." It is rated IP65 when mated with the NE8FDX-P6-W or NE8FDX-Y6-W chassis, for more than 1000 mating cycles, and "PoE++ compliant according to 802.3bt Type4," on cable 7.0 to 9.5 mm across (Neutrik, n.d.-h).

Then the catch. It is "Intermateable with the existing etherCON CAT5 range," but it "Does not intermate with the CAT6 chassis connectors NE8FDY-C6 and NE8FDY-C6-B" (Neutrik, n.d.-h). So, reasoned: not every etherCON mates with every etherCON chassis. When one will not seat, read the part numbers before you push.

**Power over Ethernet.** Siemon's sheets list support for IEEE 802.3af (Type 1 PoE), 802.3at (Type 2) and 802.3bt Types 3 and 4 (Siemon, n.d.-a, p. 1; n.d.-c, p. 1). The power at the far end is less than the power sent. Texas Instruments' data sheet for its TPS2373 powered-device (PD) chips says its two versions support "90 W and 60 W respectively. Assuming 100-meter CAT5 cable, this translates into 71.3 W and 51 W at PD input" (Texas Instruments, 2018, p. 1). Its Table 1 gives the most power a device may draw by class:

| Class | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| Watts at the device | 12.95 | 3.84 | 6.49 | 12.95 | 25.5 | 40 | 51 | 62 | 71 |

Source: Texas Instruments (2018, p. 18). The 2018 sheet still calls 802.3bt "(Draft)."

**What that means for a switch, reasoned.** If 90 W leaves the switch and 71.3 W arrives over 100 meters, the cable eats the difference, so a switch's PoE budget is planned at the switch end, from what each port must send. Clear-Com says the same in its own words: "Pay close attention to the maximum power budget for PoE ports" (Clear-Com, 2025a). TI's table is a device-end table. This course read no source for the power each PoE Type delivers at the switch end, and gives no switch-end figures.

:::reveal What does Fluke Networks say a channel includes, and how long may it be? ||| Everything from one active device to another, patch and equipment cords included; no more than 100 meters, with the permanent link at most 90 meters (Fluke Networks, 2016).

:::reveal Which of the three cables is rated for 10GBASE-T over 100 meters? ||| Category 6A (Siemon, n.d.-b). Siemon's Category 6 sheet lists Ethernet only to 1000BASE-T.

:::reveal An NE8MX6 etherCON will not seat in an NE8FDY-C6 chassis. Is it broken? ||| No. Neutrik says the NE8MX6 does not intermate with the NE8FDY-C6 chassis connectors, though it mates with the Cat5 range. Read the part numbers.

## Sources
- ${BELDEN_5E} Locator: p. 1, product description and suitable applications; p. 2, "Product Notes".
- ${SIEMON_P6} Locator: p. 1, "Compliance"; p. 2, "Electrical Specifications".
- ${SIEMON_6A_SFTP} Locator: p. 1, description; p. 2, performance note.
- ${SIEMON_6A_UTP} Locator: p. 1, description.
- ${FLUKE_2016} Locator: body text, the channel and permanent-link definitions.
- ${NEUTRIK_ETHERCON} Locator: product description, features and intermating notes.
- ${TI_2018} Locator: p. 1, section 3 "Description"; p. 18, Table 1 "Class Resistor Selection".
- ${CLEARCOM_DANTE_REQ} Locator: the PoE power budget note.`,
    },
    {
      slug: "dante-st-2110-and-the-media-network",
      title: "20 · Dante, ST 2110, and why a media network is not the office network",
      section: "6 · Audio and video over the network",
      recallContent: [
        {
          prompt: "How does Fluke Networks define the channel, and what is its length limit?",
          answer: "From one active device to another, including patch and equipment cords; no more than 100 meters, with the permanent link at most 90 meters.",
        },
        {
          prompt: "TI's TPS2373 sends 90 W. How much arrives at the device over 100 meters of Cat5?",
          answer: "71.3 W, so a PoE budget is planned at the switch end.",
        },
      ],
      body: `${QR}

**Audio as network traffic.** Dante carries audio channels over Ethernet. Symetrix gives the scale: with 30% of bandwidth held back for control traffic, a 100-megabit link carries up to 48 by 48 channels and a gigabit link up to 512 by 512, at 48 kHz (Symetrix, n.d.). Audinate, which makes Dante, publishes its own network requirements, and this course could not read them. So this lesson teaches what five makers of Dante equipment ask of a switch, credited to each.

**What the makers ask of a switch.**

| Ask | What the makers say |
|---|---|
| Gigabit | Shure: "Ensure your network switch has Gigabit ports"; 100 Mbps is possible "but we do not recommend it." Sennheiser and EAW: non-blocking layer 2 gigabit switches. Symetrix: "Daisy chains and uplinks should be Gigabit." Clear-Com: 1 Gb or more per port. |
| Managed, with QoS | Sennheiser: "DiffServ (DSCP) Quality of Service (QoS) with strict priority and 4 queues." Symetrix: QoS with four queues and DSCP with strict priority, and managed switches for more than 10 local units or units more than 100 m apart. EAW: managed switches and DSCP QoS with strict priority. |
| Energy Efficient Ethernet off | Shure: "Disable EEE/Energy Efficient Ethernet." Sennheiser: EEE "can result in poor synchronization performance and occasional audio dropouts." EAW and Clear-Com: EEE off. |
| Multicast handled | Shure: enable IGMP snooping (IGMPv2) and an IGMP querier, enable Fast Leave, do not forward all multicast, disable multicast storm control. Sennheiser: VLAN and IGMP snooping support. |
| Capacity | Sennheiser: switching capacity at least "1 Gbit/s × the number of ports × 2." Clear-Com: twice the port count, so a 10-port switch needs 20 Gb/s. |

Sources: Shure (2021); Sennheiser (n.d.); Symetrix (n.d.); Eastern Acoustic Works (n.d.); Clear-Com (2025a).

Two more rules from the same pages. Symetrix: "Use CAT6 cabling for all Dante interconnects," and "Repeater hubs are not supported." Sennheiser: every Dante device, and the computer running Dante Controller, must be on the same IP subnet (Symetrix, n.d.; Sennheiser, n.d.).

**Reasoned from the table.** Five makers agree on the core: gigabit, managed, DSCP QoS with strict priority, EEE off, and IGMP snooping set up. CREW-05's lesson 9 explains multicast and snooping; this course does not redefine them. Shure also gives DSCP values: 56 (CS7) for clock, 46 (EF) for audio, 34 (AF41) for video (Shure, 2021). Those are Shure's settings for Shure devices, not Audinate's.

**AES67 and the clock.** Clear-Com uses AES67 because "It is considered to be broadcast-quality audio" and "The latency is incredibly low." It relies on PTP, normally with one grandmaster clock in the system, and Clear-Com asks that AES67 devices sit no more than 3 switch hops from that grandmaster (Clear-Com, 2026b). When Dante runs its PTPv1 clock, Clear-Com says the Dante network must be on a separate VLAN or physical network from the AES67 or ST 2110-30 network, "as it relies on PTPv2" (Clear-Com, 2024c, 2025a). CREW-05's lessons "12 · ST 2110: separate streams" and "17 · One clock: PTP" teach the streams and the clock.

**ST 2110 on copper and on fiber, reasoned.** CREW-05's lesson "14 · Bandwidth math" works out about 2.486 Gbps for one uncompressed 1080p59.94 picture, with about four fitting a 10 Gbps link. So one uncompressed HD stream does not fit a gigabit port, and ST 2110 video needs 10 Gbps or faster links. On copper that means 10GBASE-T, which Siemon rates over a 100-meter Category 6A channel (lesson 19). Clear-Com prefers fiber-to-copper conversion "preferable using the SFP/mini-GBIC form factor" on AV switches (Clear-Com, 2025a). Past 100 meters, or at higher rates, the link goes to fiber: section 4 here, and CREW-05's "20 · Fiber on the map." Which copper category broadcast plants use for ST 2110 in practice is not stated in the pages read for this course.

**Why a media network is not the office network.** The sources point the same way:

- Shure: "Do not make changes to an Enterprise network or networks managed by others without proper authorization." If the AV switch must uplink to a larger network, set "the uplink port (only) to Forbidden to prevent multicast traffic from leaking out of the network" (Shure, 2021).
- Clear-Com: "Ideally place all of your Clear-Com AES67 devices on a dedicated set of Ethernet switches" (Clear-Com, 2026b). Network administrators may need to filter Dante audio, PTP or other multicast traffic from a corporate network (Clear-Com, 2025c), and a company firewall update can stop Dante Controller from working on the company network (Clear-Com, 2025b).
- Sennheiser: "Assign the connected LAN as a private network," and switch off the configuring computer's Wi-Fi (Sennheiser, n.d.).

Reasoned together: media networks run multicast, which floods ports without IGMP snooping (CREW-05, lesson 9); they need QoS and EEE settings an office network may not have; they need a clock the office network does not carry; and an office network belongs to someone else. So crews keep media on its own switches or VLANs, and touch the house network only with its owner's permission. Whether Audinate says Dante must have a dedicated network is a question this course leaves open; the makers above ask for dedicated switches or isolation for their own gear.

:::reveal What five things do the Dante equipment makers agree a switch needs? ||| Gigabit ports, managed switching, DSCP QoS with strict priority, Energy Efficient Ethernet off, and IGMP snooping set up (Shure, Sennheiser, Symetrix, EAW, Clear-Com).

:::reveal Why does Sennheiser say to switch off EEE on Dante ports? ||| It "can result in poor synchronization performance and occasional audio dropouts" (Sennheiser, n.d.).

:::reveal Why can one uncompressed HD ST 2110 stream not ride a gigabit port? ||| It is about 2.486 Gbps (CREW-05, "Bandwidth math"), more than 1 Gbps; it needs a 10 Gbps link, which on copper means Category 6A to 100 meters, or fiber.

## Sources
- ${SYMETRIX} Locator: the cabling, switch and bandwidth sections.
- ${SHURE_2021} Locator: the gigabit, QoS (DSCP table), EEE and multicast settings; the enterprise-network and uplink notes.
- ${SENNHEISER_DANTE} Locator: "Selecting the Network Switch"; "Managing Energy Efficiency Ethernet (EEE)"; "Configuring Dante network".
- ${EAW} Locator: the switch requirements list.
- ${CLEARCOM_DANTE_REQ} Locator: the switch requirements list; the VLAN and PTPv1 note; the SFP note.
- ${CLEARCOM_DANTE_NEW} Locator: the separate-network note for Dante PTPv1.
- ${CLEARCOM_AES67} Locator: the reasons for AES67; the network requirements list.
- ${CLEARCOM_ISOLATE} Locator: answer text.
- ${CLEARCOM_FIREWALL} Locator: answer text.
- ${SIEMON_6A_UTP} Locator: p. 1, description.
- ${SIEMON_P6} Locator: p. 1, "Compliance".
- ${FLUKE_2016} Locator: the 100-meter channel sentence.`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · Audio and video over the network",
      section: "6 · Audio and video over the network",
      body: "A graded check on network cable categories, the 100-meter channel, etherCON and PoE; and on what Dante equipment makers ask of a switch, AES67's clock, ST 2110's bandwidth and why a media network stays off the office network. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which CREW-05 lesson does this course point to for network layers and VLANs?", options: ["Lesson 6, on what the job asks about IP", "Lesson 14, on the bandwidth arithmetic", "Lesson 17, on the PTP grandmaster clock", "Lesson 22, on a fiber kit and first lab"], correctIndex: 0, explanation: "CREW-05's \"6 · What the job asks you to know about IP\" covers layers and VLANs; lesson 19 covers the cable under them.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "How does Belden describe its 5e LAN cable on the sheet's first page?", options: ["Category 6 Premise Riser Cable (250MHz)", "Category 5e Premise Horizontal Cable (200MHz)", "Category 5 Patch Cord Cable (100MHz) only", "Category 6A Shielded Plenum Cable (500MHz)"], correctIndex: 1, explanation: "Belden (2026c, p. 1): \"Category 5e Premise Horizontal Cable (200MHz).\"", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What does Belden's 5e sheet say about its values above 100 MHz?", options: ["They are guaranteed to 250 MHz", "They apply only to shielded cable", "They are for engineering information only", "They were measured on 50 m of cable"], correctIndex: 2, explanation: "Belden (2026c, p. 2): \"Values above 100 MHz are for Engineering Information Only.\"", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "Which Ethernet types does Belden's 5e sheet list?", options: ["10GBASE-T and 5GBASE-T only", "40GBASE-T over 30 meters", "1000BASE-T only, with no PoE", "1000BASE-T, 100BASE-TX, 10BASE-T"], correctIndex: 3, explanation: "Belden (2026c, p. 1) lists 1000BASE-T, 100BASE-TX and 10BASE-T, plus PoE, PoE+ and PoE++.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "Which PoE types does Belden's 5e sheet list among its applications?", options: ["PoE, PoE+ and PoE++", "None; it lists no PoE", "PoE+ only, not PoE++", "PoE++ only, not PoE"], correctIndex: 0, explanation: "Belden (2026c, p. 1) lists PoE, PoE+ and PoE++ with its Ethernet applications.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "To what frequency does Siemon's Premium 6 performance table run?", options: ["100 MHz", "250 MHz", "500 MHz", "200 MHz"], correctIndex: 1, explanation: "Siemon (n.d.-c, p. 2): the Category 6 table runs to 250 MHz. Category 6A runs to 500 MHz.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What is the fastest Ethernet Siemon's Premium 6 (Category 6) sheet lists?", options: ["10GBASE-T", "100BASE-T", "1000BASE-T", "25GBASE-T"], correctIndex: 2, explanation: "Siemon (n.d.-c, p. 1) lists 10BASE-T, 100BASE-T and 1000BASE-T, and no 10GBASE-T.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "To what frequency does Siemon say its Category 6A S/FTP cable performs?", options: ["100 MHz", "250 MHz", "200 MHz", "500 MHz"], correctIndex: 3, explanation: "Siemon (n.d.-a, p. 1): it \"exceeds all standards requirements for category 6A transmission performance up to 500 MHz.\"", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What length are all of Siemon's Category 6A S/FTP performance figures based on?", options: ["100 meters (328 ft.)", "90 meters (295 ft.)", "55 meters (180 ft.)", "5 meters (16 ft.)"], correctIndex: 0, explanation: "Siemon (n.d.-a, p. 2): \"All performance based on 100 meters (328 ft.).\"", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What does Siemon say its Category 6A UTP channel supports?", options: ["1000BASE-T to 55 meters, 2 connectors", "10GBASE-T to 100 meters, 4 connectors", "10GBASE-T to 55 meters, 2 connectors", "40GBASE-T to 100 meters, 4 connectors"], correctIndex: 1, explanation: "Siemon (n.d.-b, p. 1): \"a channel capable of supporting 10GBASE-T operation over 100-meter, 4-connector topologies.\"", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "By lesson 19's reasoning, what does a higher category number buy you?", options: ["A lower impedance on each pair", "Runs well past 100 meters", "Testing to a higher frequency", "A thicker jacket for outdoors"], correctIndex: 2, explanation: "Across the three sheets, a higher category is tested to a higher frequency and lists faster Ethernet over the same 100-meter channel. It does not lengthen the channel.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "Which of lesson 19's cables is rated for 10GBASE-T at 100 meters?", options: ["Belden 5e LAN cable", "Siemon Premium 6 cable", "Belden 1694A coax", "Siemon Category 6A"], correctIndex: 3, explanation: "Siemon's Category 6A UTP is rated for 10GBASE-T over 100 meters (n.d.-b); the Category 6 sheet stops at 1000BASE-T.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "Where are the cable categories themselves defined, per lesson 19?", options: ["TIA-568 and ISO/IEC 11801", "SMPTE ST 2110 and ST 2022", "AES67 and IEEE 802.3az", "NFPA 70 Article 400"], correctIndex: 0, explanation: "The categories are defined in TIA-568 and ISO/IEC 11801, which are paywalled and were not read; the lesson works from makers' sheets.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "How far does lesson 19 say 10GBASE-T runs on Category 6?", options: ["55 meters, per Siemon", "It leaves that open", "100 meters, per Fluke", "90 meters, per Belden"], correctIndex: 1, explanation: "Siemon's Category 6 sheet lists Ethernet only to 1000BASE-T, so the course leaves the Category 6 reach for 10GBASE-T open.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What is Siemon Premium 6's characteristic impedance from 1 to 100 MHz?", options: ["75 ohms, plus or minus 5%", "110 ohms, plus or minus 20%", "100 ohms, plus or minus 15%", "120 ohms, plus or minus 10%"], correctIndex: 2, explanation: "Siemon (n.d.-c, p. 2): 100 ohms, plus or minus 15% from 1 to 100 MHz.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What tolerance does Siemon give Premium 6's impedance from 101 to 250 MHz?", options: ["Plus or minus 5%", "Plus or minus 10%", "Plus or minus 15%", "Plus or minus 20%"], correctIndex: 3, explanation: "Siemon (n.d.-c, p. 2): 100 ohms, plus or minus 20% from 101 to 250 MHz; 15% below 100 MHz.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "Which cable does lesson 19 list at 100 ohms?", options: ["Twisted-pair network cable", "AES3 digital audio cable", "DMX lighting data cable", "Word clock coax cable"], correctIndex: 0, explanation: "Network pairs are 100 ohms (Siemon). AES3 is 110, DMX data cable 120 nominal, word clock coax 75.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "In lesson 19's list of impedances, which belongs to DMX data cable?", options: ["110 ohms nominal", "120 ohms nominal", "100 ohms nominal", "75 ohms nominal"], correctIndex: 1, explanation: "DMX data cable is 120 ohms nominal (ENTTEC, in lesson 17). 110 is AES3, 100 is network cable, 75 is video and word clock coax.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "How does Fluke Networks define the channel?", options: ["Only the cable inside the wall", "Only the patch cords at each end", "Device to device, cords included", "The switch's internal backplane"], correctIndex: 2, explanation: "Fluke Networks (2016): \"the connection from one active device to another, including any patch cords and equipment cords.\"", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What does Fluke say the channel should not exceed?", options: ["90 meters", "55 meters", "5 meters", "100 meters"], correctIndex: 3, explanation: "Fluke Networks (2016): the channel \"should not exceed 100 meters per industry standard guidelines.\" 90 meters is the permanent link.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What is the maximum permitted length of the permanent link, per Fluke?", options: ["90 meters", "100 meters", "55 meters", "10 meters"], correctIndex: 0, explanation: "Fluke Networks (2016): \"The maximum permitted length of the permanent link is 90 meters.\"", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What patch cord length does Fluke say standards recommend?", options: ["1 meter", "5 meters", "10 meters", "15 meters"], correctIndex: 1, explanation: "Fluke Networks (2016): \"standards recommend 5 meter patch cords.\"", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What does the 100-meter channel limit cover?", options: ["The long run in the wall only", "The patch cords at each end only", "Every cord from one box to the next", "Only cable laid across a floor"], correctIndex: 2, explanation: "The channel includes patch and equipment cords, so the 100 meters counts every cord from one active device to the next (Fluke Networks, 2016).", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What does Neutrik call its NE8MX6 etherCON?", options: ["A CAT5e shielded field plug", "A CAT6 crimp plug for patch", "A CAT7 plug with metal latch", "A CAT6A compliant RJ45 plug"], correctIndex: 3, explanation: "Neutrik (n.d.-h): a \"CAT6A compliant RJ45 plug\" in a cable carrier with a robust metal shell.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What strain relief does Neutrik name for the NE8MX6?", options: ["Chuck-type strain relief", "Molded rubber boot relief", "Cable tie and clamp relief", "Heat-shrink sleeve relief"], correctIndex: 0, explanation: "Neutrik (n.d.-h): \"chuck-type strain relief\" inside \"a robust metal shell.\"", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What does Neutrik say the NE8MX6 is intermateable with?", options: ["The NE8FDY-C6 chassis", "The etherCON CAT5 range", "Any RJ45 jack at all", "Its powerCON chassis"], correctIndex: 1, explanation: "Neutrik (n.d.-h): \"Intermateable with the existing etherCON CAT5 range.\" It does not intermate with NE8FDY-C6.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "Which chassis connectors does Neutrik say the NE8MX6 does not intermate with?", options: ["NE8FDX-P6-W and NE8FDX-Y6-W", "Every etherCON CAT5 chassis", "NE8FDY-C6 and NE8FDY-C6-B", "NAC3FCA and NAC3FCB parts"], correctIndex: 2, explanation: "Neutrik (n.d.-h): it \"Does not intermate with the CAT6 chassis connectors NE8FDY-C6 and NE8FDY-C6-B.\"", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "With which chassis is the NE8MX6 rated IP65?", options: ["NE8FDY-C6 and NE8FDY-C6-B", "Any RJ45 jack in a wall box", "NAC3MPA-1 and NAC3MPB-1", "NE8FDX-P6-W or NE8FDX-Y6-W"], correctIndex: 3, explanation: "Neutrik (n.d.-h): IP65 when mated with the NE8FDX-P6-W or NE8FDX-Y6-W chassis.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "How many mating cycles does Neutrik give the NE8MX6?", options: ["More than 1000", "Exactly 500", "About 100", "More than 10000"], correctIndex: 0, explanation: "Neutrik (n.d.-h): more than 1000 mating cycles.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What PoE rating does Neutrik give the NE8MX6?", options: ["PoE only, 802.3af Type 1", "PoE++, 802.3bt Type 4", "PoE+, 802.3at Type 2", "No PoE rating at all"], correctIndex: 1, explanation: "Neutrik (n.d.-h): \"PoE++ compliant according to 802.3bt Type4.\"", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What does lesson 19 tell you to do when an etherCON will not seat?", options: ["Push harder until it clicks", "Swap in a plain RJ45 plug", "Read the part numbers first", "Trim the latch to make it fit"], correctIndex: 2, explanation: "Not every etherCON mates with every etherCON chassis (Neutrik, n.d.-h), so read the part numbers before you push.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "Which IEEE PoE standards do Siemon's sheets list support for?", options: ["802.3af and 802.3at only", "802.3az and 802.3bz only", "802.3bt Type 4 alone", "802.3af, 802.3at, 802.3bt"], correctIndex: 3, explanation: "Siemon (n.d.-a, n.d.-c, p. 1): 802.3af (Type 1), 802.3at (Type 2) and 802.3bt (Types 3 and 4).", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "TI's TPS2373-4 supports 90 W. How much reaches the device over 100 m of Cat5?", options: ["71.3 W", "90 W", "51 W", "60 W"], correctIndex: 0, explanation: "Texas Instruments (2018, p. 1): 90 W and 60 W \"translates into 71.3 W and 51 W at PD input\" over 100-meter Cat5.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "TI's TPS2373-3 supports 60 W. How much reaches the device over 100 m?", options: ["71.3 W", "51 W", "40 W", "60 W"], correctIndex: 1, explanation: "Texas Instruments (2018, p. 1): 51 W at the powered device.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "In TI's Table 1, what is the most a class 4 device may draw?", options: ["12.95 W", "40 W", "25.5 W", "51 W"], correctIndex: 2, explanation: "Texas Instruments (2018, p. 18): class 4, 25.5 W; class 5, 40 W; class 6, 51 W.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "In TI's Table 1, what is the most a class 8 device may draw?", options: ["51 W", "62 W", "90 W", "71 W"], correctIndex: 3, explanation: "Texas Instruments (2018, p. 18): class 8, 71 W; class 7, 62 W.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "Which two PoE classes share 12.95 W in TI's Table 1?", options: ["Classes 0 and 3", "Classes 1 and 2", "Classes 4 and 5", "Classes 6 and 7"], correctIndex: 0, explanation: "Texas Instruments (2018, p. 18): class 0 and class 3 are both 12.95 W.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What does TI's 2018 data sheet still call 802.3bt?", options: ["Withdrawn", "(Draft)", "Obsolete", "Type 5"], correctIndex: 1, explanation: "The 2018 sheet calls 802.3bt \"(Draft)\" (Texas Instruments, 2018).", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "Where does lesson 19 say to plan a switch's PoE budget?", options: ["At the device end, from Table 1", "At the patch panel in the rack", "At the switch end, port by port", "At the midpoint of each cable"], correctIndex: 2, explanation: "The cable loses power (90 W sent, 71.3 W received over 100 m), so the budget is planned at the switch end from what each port must send.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What does Clear-Com tell you to watch on PoE ports?", options: ["Each port's cable color", "Each port's label text", "Each port's link lights", "The PoE power budget"], correctIndex: 3, explanation: "Clear-Com (2025a): \"Pay close attention to the maximum power budget for PoE ports.\"", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "Does lesson 19 give switch-end wattages for each PoE Type?", options: ["No, only TI's device-end table", "Yes, 15.4, 30, 60 and 90 W", "Yes, the same as Table 1", "Yes, 12.95 W for every Type"], correctIndex: 0, explanation: "Only TI's device-end class table was read, so the course gives no switch-end figures.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What does Symetrix say a gigabit link carries with 30% held back for control?", options: ["Up to 48 by 48 channels", "Up to 512 by 512 channels", "Up to 64 by 64 channels", "Up to 1024 by 1024 channels"], correctIndex: 1, explanation: "Symetrix (n.d.): with the 30% reserve, a 1 Gbps link carries up to 512 x 512 channels at 48 kHz.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What does Symetrix say a 100-megabit link carries with the same reserve?", options: ["Up to 512 by 512 channels", "Up to 128 by 128 channels", "Up to 48 by 48 channels", "Up to 16 by 16 channels"], correctIndex: 2, explanation: "Symetrix (n.d.): a 100 Mbit link carries up to 48 x 48 channels at 48 kHz.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "How much bandwidth does Symetrix reserve when control traffic shares the network?", options: ["10%", "50%", "20%", "30%"], correctIndex: 3, explanation: "Symetrix (n.d.): reserve 30% of bandwidth if control traffic shares the network.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "Whose Dante network requirements could this course not read?", options: ["Audinate's own pages", "Shure's service article", "Symetrix's help pages", "Sennheiser's network guide"], correctIndex: 0, explanation: "Audinate makes Dante and publishes its own requirements; the course could not read them, so it credits five equipment makers instead.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What does Shure say about a 100 Mbps switch for Dante?", options: ["It is required for clock", "It is possible but not advised", "It is faster than gigabit", "It is banned by Audinate"], correctIndex: 1, explanation: "Shure (2021): a 100 Mbps switch is possible \"but we do not recommend it\"; use Gigabit ports.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What kind of switch do Sennheiser and EAW ask for?", options: ["An unmanaged 100 Mbps hub", "A layer 3 router with Wi-Fi", "A non-blocking layer 2 gigabit", "A repeater hub with PoE++"], correctIndex: 2, explanation: "Sennheiser (n.d.): \"Use non-blocking layer 2 gigabit switches\"; EAW (n.d.) asks for the same.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What QoS does Sennheiser ask for on a Dante switch?", options: ["None; QoS adds latency", "Two queues, round robin", "Weighted fair queueing only", "DSCP, strict priority, 4 queues"], correctIndex: 3, explanation: "Sennheiser (n.d.): \"DiffServ (DSCP) Quality of Service (QoS) with strict priority and 4 queues.\"", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "When does Symetrix call for managed switches?", options: ["Over 10 local units or 100 m apart", "Only when PoE++ is in use", "Never; unmanaged is preferred", "Only for video, not for audio"], correctIndex: 0, explanation: "Symetrix (n.d.): managed switches for more than 10 local units or units more than 100 m apart.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What does Shure say to do with Energy Efficient Ethernet?", options: ["Enable it on every port", "Disable it on the switch", "Enable it on uplinks only", "Leave it at the default"], correctIndex: 1, explanation: "Shure (2021): \"Disable EEE/Energy Efficient Ethernet.\"", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What does Sennheiser say EEE can cause on a Dante network?", options: ["Higher PoE power draw", "Laser eye hazard on fiber", "Poor sync and audio dropouts", "Ground loops between racks"], correctIndex: 2, explanation: "Sennheiser (n.d.): EEE \"can result in poor synchronization performance and occasional audio dropouts.\"", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What does Shure say to do with IGMP snooping?", options: ["Disable it on all ports", "Enable it on uplinks only", "Replace it with storm control", "Enable it, with a querier"], correctIndex: 3, explanation: "Shure (2021): enable IGMP snooping (IGMPv2) and the IGMP querier, and enable Fast Leave.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What does Shure say to do with multicast storm control?", options: ["Disable it", "Enable it", "Set it to 10%", "Set it to 50%"], correctIndex: 0, explanation: "Shure (2021): disable multicast storm control, and do not forward all multicast.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What switching capacity does Sennheiser ask for?", options: ["1 Gbit/s times the port count", "1 Gbit/s times ports times 2", "10 Gbit/s times the port count", "Half of 1 Gbit/s per port"], correctIndex: 1, explanation: "Sennheiser (n.d.): at least \"1 Gbit/s × the number of ports × 2.\"", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "By Clear-Com's rule, what capacity does a 10-port switch need?", options: ["10 Gb/s", "5 Gb/s", "20 Gb/s", "40 Gb/s"], correctIndex: 2, explanation: "Clear-Com (2025a): switching capacity twice the port count, so a 10-port switch needs 20 Gb/s.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What cable does Symetrix name for all Dante interconnects?", options: ["Cat5e", "Cat5", "Cat7", "Cat6"], correctIndex: 3, explanation: "Symetrix (n.d.): \"Use CAT6 cabling for all Dante interconnects.\"", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What does Symetrix say about repeater hubs on Dante?", options: ["They are not supported", "They are required", "They add redundancy", "They carry the clock"], correctIndex: 0, explanation: "Symetrix (n.d.): \"Repeater hubs are not supported.\"", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What must every Dante device and the Dante Controller computer share, per Sennheiser?", options: ["One PoE switch", "One IP subnet", "One VLAN tag", "One Wi-Fi band"], correctIndex: 1, explanation: "Sennheiser (n.d.): all Dante devices, including the PC running Dante Controller, must be on the same IP subnet.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "Which five things do the makers in lesson 20 agree a Dante switch needs?", options: ["Wi-Fi, PoE++, hubs, EEE on, no QoS", "Fiber only, unmanaged, EEE on, no IGMP", "Gigabit, managed, DSCP QoS, EEE off, IGMP", "100 Mbps, hubs, QoS off, EEE on, VLANs"], correctIndex: 2, explanation: "Shure, Sennheiser, Symetrix, EAW and Clear-Com agree on gigabit, managed switching, DSCP QoS with strict priority, EEE off and IGMP snooping.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "Which DSCP value does Shure give for clock traffic?", options: ["46 (EF)", "34 (AF41)", "0 (best effort)", "56 (CS7)"], correctIndex: 3, explanation: "Shure (2021): DSCP 56 (CS7) highest, for clock; 46 (EF) for audio; 34 (AF41) for video.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "Which DSCP value does Shure give for audio?", options: ["46 (EF)", "56 (CS7)", "34 (AF41)", "8 (CS1)"], correctIndex: 0, explanation: "Shure (2021): DSCP 46 (EF), second priority, for audio.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "Whose settings are the DSCP values 56, 46 and 34, per lesson 20?", options: ["Audinate's, for all Dante", "Shure's, for Shure devices", "SMPTE's, for ST 2110", "The IEEE's, for 802.3"], correctIndex: 1, explanation: "They come from Shure's article for Shure devices (Shure, 2021); the course does not present them as Audinate's.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "Why does Clear-Com use AES67?", options: ["It needs no clock at all", "It runs only on fiber", "Broadcast quality, low latency", "It carries video and audio"], correctIndex: 2, explanation: "Clear-Com (2026b): \"It is considered to be broadcast-quality audio\" and \"The latency is incredibly low.\" It relies on PTP.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "How many switch hops from the PTP grandmaster does Clear-Com allow AES67 devices?", options: ["10", "1", "7", "3"], correctIndex: 3, explanation: "Clear-Com (2026b): AES67 devices no more than 3 switch hops from the PTP grandmaster.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "When Dante runs its PTPv1 clock, where must it sit relative to AES67 or ST 2110-30?", options: ["A separate VLAN or network", "The same VLAN, same switch", "A Wi-Fi bridge between them", "A single shared PoE port"], correctIndex: 0, explanation: "Clear-Com (2024c, 2025a): on a separate VLAN or physical network from the AES67 or ST 2110-30 network.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "Why does Clear-Com separate the Dante PTPv1 network from AES67?", options: ["AES67 needs no clock", "AES67 relies on PTPv2", "Dante cannot use VLANs", "PTPv1 needs fiber links"], correctIndex: 1, explanation: "Clear-Com (2025a): the AES67 or ST 2110-30 network is kept apart \"as it relies on PTPv2.\"", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "About how much bandwidth does one uncompressed 1080p59.94 picture take, per CREW-05?", options: ["About 250 Mbps", "About 1 Gbps", "About 2.486 Gbps", "About 10 Gbps"], correctIndex: 2, explanation: "CREW-05's \"14 · Bandwidth math\" works out about 2.486 Gbps, with about four per 10 Gbps link.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What link speed does lesson 20 conclude ST 2110 video needs?", options: ["100 Mbps or faster", "1 Gbps or faster", "2.5 Gbps or faster", "10 Gbps or faster"], correctIndex: 3, explanation: "One uncompressed HD picture is about 2.486 Gbps, more than a gigabit port carries, so ST 2110 video needs 10 Gbps or faster links.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "On copper, which cable does lesson 20 tie to 10GBASE-T at 100 meters?", options: ["Category 6A", "Category 5e", "Category 6", "Category 5"], correctIndex: 0, explanation: "Siemon rates 10GBASE-T over a 100-meter Category 6A channel (lesson 19); its Category 6 sheet stops at 1000BASE-T.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What form factor does Clear-Com prefer for fiber-to-copper conversion?", options: ["Media converter brick", "SFP or mini-GBIC", "Inline RJ45 coupler", "BNC-to-RJ45 balun"], correctIndex: 1, explanation: "Clear-Com (2025a): fiber-to-copper conversion \"preferable using the SFP/mini-GBIC form factor.\"", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "Which copper category do broadcast plants use for ST 2110 in practice, per lesson 20?", options: ["Category 6, always", "Category 5e, mostly", "The pages read do not say", "Category 7, by SMPTE rule"], correctIndex: 2, explanation: "No page read for the course states it, so the lesson says so rather than guess.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What does Shure say about changing an enterprise network?", options: ["Change it freely for audio", "Change only its Wi-Fi", "Change it freely during a show", "Not without proper authorization"], correctIndex: 3, explanation: "Shure (2021): \"Do not make changes to an Enterprise network or networks managed by others without proper authorization.\"", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What does Shure say to set on an uplink to a larger network?", options: ["The uplink port to Forbidden", "Every port to Forbidden", "The uplink to EEE on", "The uplink to 100 Mbps"], correctIndex: 0, explanation: "Shure (2021): set \"the uplink port (only) to Forbidden to prevent multicast traffic from leaking out of the network.\"", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "Where does Clear-Com ideally place its AES67 devices?", options: ["On the office LAN, with QoS", "On dedicated Ethernet switches", "On a Wi-Fi mesh network", "On a repeater hub chain"], correctIndex: 1, explanation: "Clear-Com (2026b): \"Ideally place all of your Clear-Com AES67 devices on a dedicated set of Ethernet switches.\"", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What can a company firewall update do, per Clear-Com?", options: ["Raise PoE power on ports", "Turn on EEE everywhere", "Stop Dante Controller working", "Swap the PTP grandmaster"], correctIndex: 2, explanation: "Clear-Com (2025b): a company firewall update can stop Dante Controller from working on the company network.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What does Sennheiser say to do with the configuring computer's Wi-Fi?", options: ["Use it for Dante", "Bridge it to the LAN", "Set it to 5 GHz", "Switch it off"], correctIndex: 3, explanation: "Sennheiser (n.d.): assign the connected LAN as a private network and switch off the configuring PC's Wi-Fi.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "By lesson 20's reasoning, when may a crew touch the house network?", options: ["Only with its owner's permission", "Whenever the show needs it", "Only after the show ends", "Only with a managed switch"], correctIndex: 0, explanation: "An office network belongs to someone else (Shure, 2021), so crews keep media on its own switches or VLANs and touch the house network only with permission.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "Does lesson 20 say Audinate requires a dedicated network for Dante?", options: ["Yes, by Audinate's rule", "It leaves that open", "No, any network will do", "Yes, for over 32 channels"], correctIndex: 1, explanation: "The course could not read Audinate's own pages, so it leaves that open; the makers it cites ask for dedicated switches or isolation for their own gear.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7: Power (research tier 2: electrical safety; held for a stage electrician)
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "straight-blade-locking-stage-pin-and-powercon",
      title: "21 · Straight-blade, locking, stage pin and powerCON",
      section: "7 · Power",
      recallContent: [
        {
          prompt: "What five things do the Dante equipment makers in lesson 20 agree a switch needs?",
          answer: "Gigabit ports, managed switching, DSCP QoS with strict priority, Energy Efficient Ethernet off, and IGMP snooping set up.",
        },
        {
          prompt: "Why does Clear-Com keep a Dante network running PTPv1 apart from an AES67 or ST 2110-30 network?",
          answer: "The AES67 and ST 2110-30 network relies on PTPv2, so Dante's PTPv1 network goes on a separate VLAN or physical network.",
        },
      ],
      body: `${QR_ELEC}

**What this section is, and what it is not.** Section 7 teaches what the power connectors on a show are, what the rules say about who may do what, and when to stop and call a licensed electrician. It never teaches anyone to tie in to a power source, open a panel, land a feeder or build a cable. Makers write their wiring instructions for qualified people. Leviton's sheet for its locking receptacles opens: "TO AVOID FIRE, SHOCK, OR DEATH, TURN OFF POWER AT CIRCUIT BREAKER OR FUSE AND TEST THAT THE POWER IS OFF BEFORE WIRING!" and "If you are not sure about any part of these instructions, consult an electrician" (Leviton, n.d.-i, p. 1).

*Light on Set* lesson "26 · Cords, plugs and circuits" already teaches OSHA's rules for cords on a set: inspection before each shift, damaged cords out of service, pinch points, no splices, no wet hands. This section links there and does not repeat it.

**Reading a NEMA code.** A NEMA designation has four parts: a blank or the letter L, a voltage number, an amperage number, and P or R. "L" marks a locking device; no letter means a non-locking, straight-blade device. The first number "determines the voltage rating": 5 is 125 V AC grounded, 6 is 250 V AC grounded, 14 is 125/250 V AC single-phase, three-pole, four-wire, and 21 is 120/208 V AC three-phase, five-wire, four-pole. The number after it is the amperage. P is a plug and R is a receptacle (Interpower, n.d.).

Leviton's devices, read against that code:

| Code | What Leviton's page says | Leviton part |
|---|---|---|
| 5-15R | 15 A, 125 V AC, 2-pole, 3-wire | 5252 |
| 5-20R | 20 A, 125 V AC, 2-pole, 3-wire | 5362 |
| L5-20R | 20 A, 125 V, 2P, 3W, locking, grounding | 2310 |
| L5-30R | 30 A, 125 V, 2P, 3W, locking, grounding | 2610 |
| L6-30R | 30 A, 250 V, 2P, 3W, locking, grounding | 2620 |
| L14-30R | 30 A, 125/250 V, 3P, 4W, locking, grounding | 2710 |
| L21-30R | 30 A, 120/208 V three-phase Y, 4P, 5W, locking, grounding | 2810 |

Sources: Leviton (n.d.-a, n.d.-b, n.d.-c, n.d.-d, n.d.-e, n.d.-g, n.d.-h).

**Why the shapes differ, reasoned from the rule.** OSHA requires that receptacles, cord connectors and plugs "be constructed so that no receptacle or cord connector will accept an attachment plug with a different voltage or current rating than that for which the device is intended." The one exception: a 20 A T-slot receptacle may accept a 15 A plug of the same voltage (29 C.F.R. § 1910.305(j)(2)(ii)). So a different NEMA shape is a physical lock-out of the wrong voltage or current. An L6-30 plug does not fit an L5-30 receptacle because one is rated 250 V and the other 125 V. Forcing or adapting a plug defeats the lock-out.

OSHA adds four rules you can follow without a tool. Before a plug is connected, "the relationship of the plug and receptacle contacts shall first be checked to ensure that they are of proper mating configurations" (§ 1910.334(a)(2)(iii)). Plugs may not be altered "to allow the grounding pole of a plug to be inserted into slots intended for connection to the current-carrying conductors," and adapters that interrupt the grounding connection "may not be used" (§ 1910.334(a)(3)(ii), (iii)). And "Locking-type connectors shall be properly secured after connection" (§ 1910.334(a)(5)(iii)).

**Stage pin.** Union Connector calls its 2P&G stage pin devices "the standard electrical connector used in theatrical lighting." "The 20A pin connector devices are rated for 120V," and "The 60A and 100A stage pin devices are available in either a 120V or 240V rating" (Union Connector, n.d.-a). So stage pin is not one voltage: the 20 A size is 120 V. ESTA lists ANSI E1.24 (2012, reaffirmed 2021), *Dimensional Requirements for Stage Pin Connectors*, which covers mating, contact set-backs and marking, and leaves electrical reliability and flammability to other standards such as UL 498 (Entertainment Services and Technology Association [ESTA], n.d.). Which stage pin is the ground on each size is not stated on the pages read for this course, so this lesson does not teach it.

**powerCON: blue in, grey out.** Neutrik's powerCON is a "Lockable 3 pole single phase equipment (AC) connector," rated 20 A at 250 V AC. It "offers power-in (blue) and power-out (grey) versions with different keying to avoid the possibility of intermating" (Neutrik, n.d.-a, p. 10). "With the two non-interchangeable types of connectors (A type and B type) it is impossible to produce a short circuit. Mating connectors (combination) are identified by mechanical keyways and by color" (p. 11).

**Live or not: read the exact part.** The classic powerCON is not made to be plugged or pulled under power. Neutrik's guide: "ATTENTION: The technical data of the powerCON connectors refer to connectors without breaking capacity, meaning connecting devices not to be engaged and disengaged in normal use when live or under load" (Neutrik, n.d.-a, p. 11). The blue NAC3FCA cable connector "must not be connected or disconnected under load or live!" (Neutrik, n.d.-b). The grey NAC3FCB carries the same statement (n.d.-c), and the NAC3MPA-1 chassis connector says it "should not be connected or disconnected under load or live" (n.d.-g). Neutrik marks those three discontinued. A successor, the NAC3FXXA-W-S, lists "Circuit Breaking Capability when mated with powerCON XX Series receptacles" (n.d.-f).

powerCON TRUE1 is different. The NAC3FX-W is "a locking waterproof 16 A true mains connector" (20 A in the USA), 250 V AC, IP65 when mated, with breaking capacity, and it "can be connected or disconnected under load or live" (Neutrik, n.d.-d). TRUE1 TOP is "Designed to be engaged and disengaged in normal use when live or under load" (Neutrik, n.d.-a, p. 4). Even so, Neutrik's TRUE1 cable connector manual says "To be installed by qualified person only," and that the connector must not be cleaned while under load (Neutrik, 2025, p. 1 and section D).

The rule this lesson teaches: a classic powerCON without breaking capacity is never plugged or unplugged live; TRUE1 and some newer parts are rated for it. Read the exact part's page before you treat any powerCON as safe to pull. If a classic powerCON must come out while loaded, the circuit is switched off first by whoever owns it. Whether TRUE1 mates with a classic blue or grey powerCON is not stated on any Neutrik page read for this course, so do not assume either way.

:::reveal Decode NEMA L21-30R. ||| Locking; 120/208 V three-phase Y; 30 A; a receptacle, 4-pole and 5-wire, grounding (Interpower, n.d.; Leviton, n.d.-e).

:::reveal Why does an L6-30 plug not fit an L5-30 receptacle, and what follows? ||| One is rated 250 V and the other 125 V, and OSHA requires that a receptacle refuse a plug of a different voltage or current rating. The shape is the lock-out, so never force or adapt it.

:::reveal May you pull a classic blue powerCON under load? ||| No. Neutrik says the NAC3FCA "must not be connected or disconnected under load or live!" Only parts with breaking capacity, such as TRUE1, are rated for it; read the exact part's page.

## Sources
- ${LEVITON_SHEET} Locator: p. 1, WARNINGS.
- ${INTERPOWER} Locator: "NEMA Nomenclature".
- ${LEVITON_5252} Locator: Technical Information.
- ${LEVITON_5362} Locator: Technical Information.
- ${LEVITON_2310} Locator: description line.
- ${LEVITON_2610} Locator: description line.
- ${LEVITON_2620} Locator: description line.
- ${LEVITON_2710} Locator: description line.
- ${LEVITON_2810} Locator: description line.
- ${CFR_1910_305} Locator: paragraph (j)(2)(ii).
- ${CFR_1910_334} Locator: paragraphs (a)(2)(iii), (a)(3)(ii), (a)(3)(iii) and (a)(5)(iii).
- ${UNION_PIN} Locator: page text, the ratings and body materials.
- ${ESTA_LISTING} Locator: entry "ANSI E1.24 - 2012 (R2021)".
- ${NEUTRIK_PG} Locator: p. 4, powerCON TRUE1 TOP; p. 10, powerCON; p. 11, "Combination & Keyways" and the ATTENTION note.
- ${NEUTRIK_NAC3FCA} Locator: product description and status.
- ${NEUTRIK_NAC3FCB} Locator: product description and status.
- ${NEUTRIK_NAC3MPA} Locator: product description and status.
- ${NEUTRIK_NAC3FXXA} Locator: product features.
- ${NEUTRIK_NAC3FXW} Locator: product description.
- ${NEUTRIK_2025} Locator: p. 1, installation note; section D, Cleaning.`,
    },
    {
      slug: "cam-feeders-and-the-gender-trap",
      title: "22 · Cam-type feeders, cords, and the gender trap",
      section: "7 · Power",
      recallContent: [
        {
          prompt: "What does each part of NEMA L14-30R mean?",
          answer: "L: locking. 14: 125/250 V single-phase, three-pole, four-wire. 30: 30 A. R: receptacle.",
        },
        {
          prompt: "What does Neutrik say about plugging or pulling a classic powerCON (NAC3FCA) live?",
          answer: "It must not be connected or disconnected under load or live; TRUE1 parts have breaking capacity and are rated for it. Read the exact part's page.",
        },
      ],
      body: `${QR_ELEC}

**A feeder is not an extension cord.** OSHA defines a feeder as the conductors between the service or other supply source and "the final branch-circuit overcurrent device." A branch circuit is the conductors between that final overcurrent device and the outlets (29 C.F.R. § 1910.399). An extension cord is something else: OSHA's rule on using equipment covers "cord- and plug-connected equipment, including flexible cord sets (extension cords)" (§ 1910.334(a)). So a cam feeder run from a generator to a distribution box sits upstream of the breakers that protect the branch circuits. It is not a big extension cord.

**The cam-type connector.** A single-pole cam-type connector carries one conductor. Eaton's Cam-Lok single-pole connectors "are designed to meet NEC code requirements for listed connectors that are of the locking type," and its E-Z series is "rated at 600 Volts up to 400 Amperes continuous." They lock by turning: Eaton's sheet says to "fully engage male to female and rotate 1/3 of a turn clockwise," and to reverse that to unmate (Eaton, 2017, p. 1). That is here so you can recognize a locked connector. It is not permission to make the connection; the rest of this lesson and lesson 23 say who does. Eaton recommends visual, electrical and mechanical checks of all components "at least once per year" (Eaton, 2017, p. 1).

**A five-wire set.** Lex's 100 A five-wire feeder extension uses five 16 Series cam connectors, black, white, red, blue and green, on #2 Type SC cable banded every 2 feet, for theatrical, film and television, concert and live-event work (LEX Innovations, n.d.-b). A Lex company switch's cam outlets are "color-coded, (H,H,H,N,G)" for 120/208Y V: three hots, a neutral and a ground (LEX Innovations, n.d.-d). Union Connector describes a company switch as "a specialized distribution panel" that venues such as theaters and arenas use to power portable equipment (Union Connector, n.d.-b). Lex's panel manual names green as ground and white as neutral, then "the Phase (hot) connections" (Lex Products, 2020, pp. 7 to 8).

So, by elimination, the three colors left on that five-wire set, black, red and blue, are the three hots. That is reasoning, not a rule: no source read for this course assigns black, red and blue to particular phases, or says the code requires those colors.

**The order, and why order is not enough.** Lex's warning label: "Plug connection should be in the following order: 1) Equipment grounding conductor connectors, 2) Grounded circuit conductor connectors, and 3) Ungrounded conductor connectors. Disconnection should be in the reverse order" (Lex Products, 2020, p. 6). In plain words: ground, then neutral, then the hots; to disconnect, the hots, then neutral, then ground. It is not "neutral first."

The order does not make live work safe. The same manual: "DO NOT ATTEMPT CONNECTION WHILE CIRCUITS ARE LIVE" (p. 7), and "Any terminal may be energized when any cable is connected. De-energize cables at the generator prior to connecting or removing any connectors" (p. 6). OSHA says cable connectors "not of the load-break type" may not be used to open or close circuits under load, "except in an emergency" (29 C.F.R. § 1910.334(b)(1)). Lex says installation "should be carried out by qualified personnel in accordance with local electrical codes" (Lex Products, 2020, p. 5), and Union Connector's generator connection box is "for safe connection of portable cables by qualified personnel" (Union Connector, n.d.-d). One maker's company switch, SafeCam, "activates shunt trip whenever a plug is disconnected from a receptacle" and "automatically opens the main circuit breaker if a plug is removed under load" (Union Connector, n.d.-c). Cam connections are made and broken dead, by the qualified person responsible for the distribution.

**The gender trap.** Lex sells cam adapters in black, red, blue, white, green, brown, orange and yellow, including a male-to-male adapter for "reversing the gender" on 16 Series female outlets (LEX Innovations, n.d.-c). Its company switch notes that "Reverse Ground and Neutral are also available" (n.d.-d). Union Connector offers "Reverse Neutral/Ground" as well, with "Laser engraved cam identifiers" and a "Cable connection warning label per NEC Art 520" (Union Connector, 2016).

Reasoned from those pages: if the neutral and ground connectors are the opposite gender from the hots, a hot cannot be mated straight into a neutral or a ground. No maker page read for this course states that reason, so treat it as reasoning. It follows that a reverse-gender system and a same-gender system do not mate without turnaround adapters, and a turnaround can let a hot reach the wrong socket. Mismatched gender, or a turnaround in the run, is a reason to stop and ask the person responsible for the distribution, never to improvise.

**Feeder cable and cord: read the jacket.** Type SC is "STAGE & LIGHTING CABLE," 600 V, 105 °C, "UL listed Type SC per NEC Article 520 and 530, indoor and outdoor locations" (LEX Innovations, n.d.-a). Southwire's 600 V SOOW cord is "designed for extra hard usage" on equipment, tools, portable lights and power extensions, rated from minus 40 °C to 90 °C (Southwire, n.d.). OSHA requires listed cord types to be "durably marked on the surface at intervals not exceeding 610 mm (24 in.) with the type designation, size, and number of conductors," and flexible cords to be "approved for conditions of use and location" (29 C.F.R. § 1910.305(g)(2)(i), (g)(1)(i)). The print on the jacket tells you what a cord is.

**Extension cords and daisy chains.** Brookhaven National Laboratory notes that listed extension cords carry conditions of use near the plug, typically "do not plug one extension cord in to another," and that power strips "are not intended to be series connected (daisy chained) to other relocatable power taps or to extension cords" (Brookhaven National Laboratory, 2007, paras. 2 and 4). OSHA requires listed equipment to be "installed and used in accordance with any instructions included in the listing or labeling" (29 C.F.R. § 1910.303(b)(2)). Reasoned: a daisy chain breaks the listing's own instructions, which OSHA requires you to follow. *Light on Set* lesson "27 · What the rules forbid, shown through the makeshifts of 1928 and 1929" explains that listing rule. OSHA's own interpretation letter on daisy chains could not be read for this course, so this lesson quotes no separate OSHA daisy-chain rule. The U.S. Consumer Product Safety Commission (CPSC) adds that "Extension cords are not as safe as permanent house wiring," that a warm cord or plug "may be overloaded," and that "Using a 3-prong product with a 2-prong extension cord eliminates the protection" (U.S. Consumer Product Safety Commission [CPSC], 2008).

:::reveal In what order does Lex's label say cam connectors are connected, and disconnected? ||| Ground, then neutral, then the hots; disconnect in reverse: hots, neutral, ground. And never live: de-energize at the generator first (Lex Products, 2020, pp. 6 to 7).

:::reveal On a five-wire 120/208 V cam set colored black, white, red, blue and green, which are the hots, and how do you know? ||| Black, red and blue, by elimination: Lex names green ground and white neutral. No source read assigns them to phases or says the code requires those colors.

:::reveal You find a turnaround adapter in a cam run. What do you do? ||| Stop and ask the person responsible for the distribution. A turnaround can let a hot reach the wrong socket.

## Sources
- ${CFR_1910_399} Locator: definitions "Feeder" and "Branch circuit".
- ${CFR_1910_334} Locator: paragraphs (a) and (b)(1).
- ${EATON_2017} Locator: p. 1, introduction, OPERATION and the MAINTENANCE note.
- ${LEX_FBL305W} Locator: product description.
- ${LEX_CS100} Locator: product description, outlet color coding and options.
- ${UNION_CS} Locator: product description.
- ${LEX_2020} Locator: p. 5, Installation; p. 6, warning and DANGER labels; pp. 7 to 8, WARNING and Steps 8 and 11.
- ${UNION_GEN} Locator: product description.
- ${UNION_SAFECAM} Locator: product description.
- ${LEX_MMM} Locator: product description and color list.
- ${UNION_2016} Locator: options and labeling list.
- ${LEX_CABLES} Locator: "Entertainment Cable," Type SC.
- ${SOUTHWIRE} Locator: product description and specifications.
- ${CFR_1910_305} Locator: paragraphs (g)(1)(i) and (g)(2)(i).
- ${BROOKHAVEN_2007} Locator: paragraphs 2 and 4.
- ${CFR_1910_303} Locator: paragraph (b)(2).
- ${CPSC_2008} Locator: "Check Electrical Cords" and "Check Extension Cords Used Outdoors".`,
    },
    {
      slug: "the-law-and-the-license",
      title: "23 · The law and the license: who may connect what",
      section: "7 · Power",
      recallContent: [
        {
          prompt: "How does OSHA define a feeder, and why is a cam feeder not an extension cord?",
          answer: "Conductors between the supply and the final branch-circuit overcurrent device; an extension cord is cord-and-plug equipment downstream of it.",
        },
        {
          prompt: "Why is a turnaround adapter in a cam run a reason to stop?",
          answer: "It can let a hot reach the wrong socket; stop and ask the person responsible for the distribution.",
        },
      ],
      body: `${QR_ELEC}

**OSHA's temporary wiring rules, beyond Light on Set.** *Light on Set* lesson "26 · Cords, plugs and circuits" teaches OSHA's 1997 view that entertainment is generally general industry, and its rules for cords. This lesson adds what OSHA's general industry rule says about feeders and branch circuits in temporary wiring. It opens: "Except as specifically modified in this paragraph, all other requirements of this subpart for permanent wiring shall also apply to temporary wiring installations" (29 C.F.R. § 1910.305(a)(2)). Then:

- "Feeders shall originate in an approved distribution center" ((a)(2)(iv)(A)).
- Feeder conductors "shall be run as multiconductor cord or cable assemblies." Single insulated conductors are allowed only in the cases of (a)(2)(i)(C), experimental or development work and emergencies, "and if accessible only to qualified persons" ((a)(2)(iv)(B)).
- "Branch circuits shall originate in an approved power outlet or panelboard," and "No branch-circuit conductor may be laid on the floor" ((a)(2)(v)(A), (C)).
- Temporary receptacles "shall be of the grounding type," and "No bare conductors nor earth returns may be used for the wiring of any temporary circuit" ((a)(2)(vi), (vii)).
- Cord assemblies "shall be supported in place at intervals that ensure that they will be protected from physical damage" ((a)(2)(xi)).

Reasoned: single-conductor cam feeder (lesson 22) sits in a narrow lane in that text, allowed only in those cases and only where accessible to qualified persons. How OSHA and the NEC together treat single-conductor cam feeder at a US show is a question for the stage electrician; this course does not answer it.

**Qualified, and unqualified.** OSHA defines a qualified person as "One who has received training in and has demonstrated skills and knowledge in the construction and operation of electric equipment and installations and the hazards involved," and notes that a person can be qualified for some equipment and "unqualified" for other equipment (29 C.F.R. § 1910.399). Qualified persons are "those permitted to work on or near exposed energized parts" (§ 1910.332(b)(3)). Three rules follow that every crew member should know:

- "Only qualified persons may perform testing work on electric circuits or equipment" (§ 1910.334(c)(1)).
- After a breaker or fuse opens a circuit, it "may not be manually reenergized until it has been determined that the equipment and circuit can be safely energized," and repeated manual reclosing "is prohibited" (§ 1910.334(b)(2)).
- Overcurrent protection "may not be modified, even on a temporary basis" beyond what the rule allows (§ 1910.334(b)(3)).

**The NEC, by name only.** The National Electrical Code (NFPA 70) is paywalled, and this course quotes none of it. NFPA's own restructure chart lists Article 520, "Theaters, Audience Areas of Motion Picture and Television Studios, Performance Areas, and Similar Locations"; Article 525, "Carnivals, Circuses, Fairs, and Similar Events"; Article 400, "Flexible Cords and Flexible Cables"; and Article 590, "Temporary Installations" (National Fire Protection Association [NFPA], 2026, pp. 3 to 4, 8). Article 530 covers motion picture and television studios. NFPA's chart and an NEC code-making panel's 2021 revision give it different titles, so this course quotes neither (NFPA, 2021, p. 1; 2026, p. 8). The U.S. Consumer Product Safety Commission notes that the NEC "may be adopted into law by states, counties or local jurisdictions for enforcement by inspection authorities and is currently revised every three years" (U.S. Consumer Product Safety Commission [CPSC], n.d.-a, p. 2). Which edition applies where you work is the local authority's call.

**Who may connect what: the license.** Licensing is set by states and cities. Two states show how different the rules look.

Minnesota: "Persons other than licensed employees of licensed electrical contractors are only allowed to connect or inter-connect multi-conductor cords and single-conductor cables that are equipped with approved separable multi-pole or single-pole connectors." Licensed employees "are required to connect or terminate cords and cables that have bare ends, clamps, clips or other types of connections other than approved separable connectors," and must do "all electrical work on interior or exterior premises wiring systems." Generators and temporary distribution for filming "are required to be inspected," and "Electrical equipment must not be energized until it has been inspected and approved" (Minnesota Department of Labor and Industry [MN DLI], n.d., pp. 1 to 2).

Oregon issues a Limited Journeyman Stage Electrician (ST) license to "Install temporary feeders, branch circuits, and equipment used for the production of shows, exhibits, displays, festivals, conventions, stage, theater, film, or video productions." The holder "Must be employed by an electrical contractor" and renews every three years (Oregon Secretary of State, 2026). The rule bars the license holder from installing or extending permanent wiring and from "service conductors or service equipment" (Limited Journeyman Stage Electrician License, 2005). This course read that rule in the Legal Information Institute's unofficial reproduction, not on Oregon's official rules site.

Minnesota's line (separable connectors yes, bare ends no) is one state's rule, not a national one. Reasoned from the two: who may connect a company switch in a given venue is set by the state or city rule, the venue and any labor agreement. Ask the venue and the local authority before you assume.

**ETCP is a certification, not a license.** ETCP's Entertainment Electrician exam is for "experienced electricians" and aims to "validate the competency of the upper third of electricians working in the entertainment industry" (Entertainment Technician Certification Program [ETCP], n.d.-a). Its content outline includes feeder cable with a "single-pole locking connector," the "company switch," and "temporary tie-in means (e.g., lugs, bus bars, sister lugs)" (ETCP, n.d.-b). ETCP's handbook calls certification "the voluntary process by which a nongovernmental organization grants recognition to an individual" (Entertainment Services and Technology Association [ESTA], 2016, p. 5). Reasoned: a voluntary, nongovernmental certification is not a state license, and it does not by itself let anyone do licensed work. Whether any state or city accepts ETCP in place of a license is not answered by the pages read for this course.

:::reveal Under Minnesota's rule, what may someone who is not a licensed contractor's employee connect? ||| Only multi-conductor cords and single-conductor cables fitted with approved separable connectors. Bare ends, clamps and clips, and all premises wiring, are for licensed employees (MN DLI, n.d., p. 2).

:::reveal A breaker trips during the show. May you reset it? ||| Not until it has been determined that the equipment and circuit can be safely energized, and repeated resetting is prohibited (29 C.F.R. § 1910.334(b)(2)). Call the person responsible for the power.

:::reveal Does ETCP Entertainment Electrician certification let you tie in? ||| No. It is a voluntary, nongovernmental certification for experienced electricians; who may tie in is set by state and local licensing rules.

## Sources
- ${CFR_1910_305} Locator: paragraph (a)(2), lead-in and (a)(2)(iv)(A), (iv)(B), (v)(A), (v)(C), (vi), (vii) and (xi).
- ${CFR_1910_399} Locator: definition "Qualified person" and Note 1.
- ${CFR_1910_332} Locator: paragraph (b)(3).
- ${CFR_1910_334} Locator: paragraphs (b)(2), (b)(3) and (c)(1).
- ${NFPA_2026} Locator: pp. 3 to 4, Articles 400 and 590; p. 8, Chapter 19 rows for Articles 520, 525 and 530.
- ${NFPA_2021} Locator: Second Revision No. 8529, p. 1.
- ${CPSC_GFCI} Locator: p. 2, footnote.
- ${MN_DLI} Locator: p. 1, questions 1 and 3; p. 2, question 8.
- ${OREGON_ST} Locator: license description and requirements.
- ${OREGON_RULE} Locator: rule text, the limits on the license.
- ${ETCP_GET} Locator: page text, who the exam is for.
- ${ETCP_EXAM} Locator: content outline, items 1.C.5, 3.B.1 and 3.B.2.
- ${ESTA_2016} Locator: PDF p. 5, "Become ETCP Certified".`,
    },
    {
      slug: "gfci-wet-locations-and-when-to-stop",
      title: "24 · GFCI, wet locations, and when to stop",
      section: "7 · Power",
      recallContent: [
        {
          prompt: "Who does OSHA say may perform testing work on electric circuits?",
          answer: "Only qualified persons (29 C.F.R. § 1910.334(c)(1)).",
        },
        {
          prompt: "Is Minnesota's \"separable connectors yes, bare ends no\" line a national rule?",
          answer: "No. It is one state's rule; Oregon licenses the work differently, and the venue, the local authority and any labor agreement decide who connects what.",
        },
      ],
      body: `${QR_ELEC}

**What a GFCI does.** OSHA defines a ground-fault circuit-interrupter as "A device intended for the protection of personnel that functions to deenergize a circuit or a portion of a circuit within an established period of time when a current to ground exceeds some predetermined value," a value below what would trip the circuit's overcurrent device (29 C.F.R. § 1910.399). The U.S. Consumer Product Safety Commission puts it plainly. A ground fault is "an unintentional electrical path between a power source and a grounded surface," and a GFCI cuts the power when outgoing and returning current differ "by a very small amount (as little as 0.006 amperes)." It is "designed to operate before the electricity can affect your heartbeat" (U.S. Consumer Product Safety Commission [CPSC], n.d.-a, p. 1).

The CPSC says to test every GFCI after installation, at least once a month, after a power failure, and as the maker directs. If the test button does not cut the power to a plugged-in lamp, "Contact a qualified electrician." Portable GFCIs, the plug-in units and GFCI extension cords, are for places where installed GFCIs are not practical (CPSC, n.d.-a, p. 2). ESTA publishes ANSI E1.19 (2021), a recommended practice on how to "select, install, use, and maintain ground fault protection devices in the entertainment industry" (Entertainment Services and Technology Association [ESTA], n.d.).

**Where OSHA requires one.** There are two rules, and which applies depends on the work.

| Rule | What it requires | Source |
|---|---|---|
| Construction sites | GFCIs on all 120 V, single-phase, 15 A and 20 A receptacle outlets that are not part of permanent wiring and are in use by employees, or an assured equipment grounding conductor program | 29 C.F.R. § 1926.404(b)(1) |
| General industry, construction-like activities | GFCI protection on all 125 V, single-phase, 15, 20 and 30 A temporary receptacle outlets in use by personnel; other temporary receptacles need it too, or an assured program where it is not available | § 1910.304(b)(3)(ii) |

Two notes to the general industry rule matter on a show. "A cord connector on an extension cord set is considered to be a receptacle outlet if the cord set is used for temporary electric power." And a GFCI cord set "connected to the receptacle closest to the source of power" is an acceptable form of protection (§ 1910.304(b)(3)(ii)(A), Notes 1 and 2). *Basic Construction Safety* lesson "10 · Subpart K: electricity on a jobsite" explains the assured equipment grounding conductor program. So the rule is not "a GFCI on every temporary circuit at every show." Which paragraph governs your show depends on whether the work is construction or general industry, and *Light on Set* lesson 26 teaches OSHA's 1997 view that entertainment is generally general industry. Ask the person responsible for power which applies.

**Wet locations.** OSHA's wet location includes "locations unprotected and exposed to weather," and a damp location includes partly protected places "under canopies, marquees, roofed open porches" (29 C.F.R. § 1910.399). Equipment and cords in wet or highly conductive work locations "shall be approved for those locations" (§ 1910.334(a)(4)). A wet connection that could conduct to the hand may be handled "only with insulating protective equipment" (§ 1910.334(a)(5)(ii)). Receptacles in wet locations need weatherproof enclosures: weatherproof with the plug in where the load is left unattended, and with the plug removed where it is attended (§ 1910.305(j)(2)(vi), (vii)). On construction sites, portable lighting in wet or conductive locations runs at 12 V or less, or at 120 V with GFCI protection (§ 1926.405(a)(2)(ii)(G)).

**Stop and call an electrician.** Section 7 comes down to this list. Each item names what backs it. When one applies, stop, keep people clear, and call the venue's electrician or the qualified person responsible for the power.

1. **A bare end, lug, clamp or clip.** In Minnesota only licensed employees may connect cords and cables with "bare ends, clamps, clips or other types of connections other than approved separable connectors" (MN DLI, n.d., p. 2; lesson 23).
2. **A panel, premises wiring or a tie-in.** Minnesota reserves premises wiring to licensed employees, Oregon's stage license excludes service equipment, and ETCP's exam treats tie-in means as electrician content (lesson 23).
3. **A generator or company switch on cam feeders.** Qualified personnel only, with the cables de-energized at the generator first (Lex Products, 2020, pp. 5 to 7; lesson 22).
4. **Wiring any receptacle, plug or connector body.** "If you are not sure about any part of these instructions, consult an electrician" (Leviton, n.d.-i, p. 1). TRUE1: "To be installed by qualified person only" (Neutrik, 2025, p. 1).
5. **A tripped breaker or blown fuse.** It is not reset until someone has determined the circuit can be safely energized (§ 1910.334(b)(2)).
6. **Anything that would change overcurrent protection or add load beyond a circuit's rating** (§ 1910.334(b)(3); § 1926.416(c)).
7. **Testing an electric circuit.** Only qualified persons (§ 1910.334(c)(1)).
8. **A GFCI that fails its test.** "Contact a qualified electrician" (CPSC, n.d.-a, p. 2).
9. **A damaged cord, plug or connector.** Out of service until repaired and tested (§ 1910.334(a)(2)(ii); *Light on Set* lesson 26).
10. **A wet energized connection.** Handled only with insulating protective equipment, which this course does not issue (§ 1910.334(a)(5)(ii)).
11. **Plugs that do not match.** Never alter a plug or use an adapter that breaks the ground (§ 1910.334(a)(3)(ii), (iii); lesson 21).
12. **A classic powerCON that must come out under load.** The circuit is switched off first by whoever owns it (Neutrik, n.d.-b; lesson 21).
13. **Mismatched cam gender, or a turnaround in the run.** No source gives a crew procedure; stop and ask the person responsible for the distribution (lesson 22).

:::reveal How small a current difference does the CPSC say a GFCI trips on? ||| As little as 0.006 amperes, designed to act before the electricity can affect your heartbeat (CPSC, n.d.-a, p. 1).

:::reveal Under OSHA's general industry rule, when is an extension cord's connector a receptacle outlet? ||| When the cord set is used for temporary electric power (29 C.F.R. § 1910.304(b)(3)(ii)(A), Note 1).

:::reveal A GFCI's test button does not cut power to the lamp plugged into it. What now? ||| Contact a qualified electrician, as the CPSC says (CPSC, n.d.-a, p. 2). It is item 8 on the stop list.

## Sources
- ${CFR_1910_399} Locator: definitions "Ground-fault circuit-interrupter" and "Location" (1) and (3).
- ${CPSC_GFCI} Locator: p. 1, definitions; p. 2, "How to Test" and "Portable".
- ${ESTA_LISTING} Locator: entry "ANSI E1.19 - 2021".
- ${CFR_1926_404} Locator: paragraph (b)(1).
- ${CFR_1910_304} Locator: paragraph (b)(3)(ii)(A) to (C), Notes 1 and 2.
- ${CFR_1910_334} Locator: paragraphs (a)(2)(ii), (a)(3)(ii), (a)(3)(iii), (a)(4), (a)(5)(ii), (b)(2), (b)(3) and (c)(1).
- ${CFR_1910_305} Locator: paragraphs (j)(2)(vi) and (vii).
- ${CFR_1926_405} Locator: paragraph (a)(2)(ii)(G).
- ${CFR_1926_416} Locator: paragraph (c).
- ${MN_DLI} Locator: p. 2, question 8.
- ${LEX_2020} Locator: pp. 5 to 7.
- ${LEVITON_SHEET} Locator: p. 1, WARNINGS.
- ${NEUTRIK_2025} Locator: p. 1.
- ${NEUTRIK_NAC3FCA} Locator: product description.`,
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz · Power",
      section: "7 · Power",
      body: "A graded check on NEMA codes, stage pin and powerCON; cam-type feeders, cords and the gender trap; OSHA's temporary wiring rules and who may connect what; and GFCI, wet locations and the stop list. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does section 7 say it never teaches?", options: ["Tying in, panels, feeders, cables", "Reading a NEMA plug's code", "When to call an electrician", "What powerCON's colors mean"], correctIndex: 0, explanation: "Section 7 never teaches anyone to tie in to a power source, open a panel, land a feeder or build a cable. The other three are what it does teach.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does Leviton's locking-receptacle sheet tell you if you are unsure of any part of it?", options: ["Call the maker's support line", "Consult an electrician", "Ask the venue's stage manager", "Read the NEMA standard first"], correctIndex: 1, explanation: "Leviton (n.d.-i, p. 1): \"If you are not sure about any part of these instructions, consult an electrician.\"", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "Which lesson does section 7 link for OSHA's cord rules on a set?", options: ["Rigging for crews, lesson 11", "Arena transmission, lesson 24", "Light on Set, lesson 26", "Sound Craft, lesson 15"], correctIndex: 2, explanation: "Light on Set's \"26 · Cords, plugs and circuits\" teaches inspection, damaged cords, pinch points, splices and wet hands; section 7 links rather than repeats.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does the letter L mean at the front of a NEMA code?", options: ["A low-voltage device", "A large-amperage device", "A listed device", "A locking device"], correctIndex: 3, explanation: "Interpower (n.d.): \"L\" marks a locking device; no letter means a non-locking, straight-blade device.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does voltage number 5 mean in a NEMA code?", options: ["125 V AC grounded", "120/208 V three-phase", "250 V AC grounded", "125/250 V AC, four-wire"], correctIndex: 0, explanation: "Interpower (n.d.): 5 is 125 V AC grounded; 6 is 250 V AC grounded.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does voltage number 6 mean in a NEMA code?", options: ["125 V AC grounded", "250 V AC grounded", "125/250 V AC, four-wire", "120/208 V three-phase"], correctIndex: 1, explanation: "Interpower (n.d.): 6 is 250 V AC grounded.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does voltage number 14 mean in a NEMA code?", options: ["120/208 V AC three-phase, 5-wire", "250 V AC grounded, 3-wire", "125/250 V AC single-phase, 4-wire", "125 V AC grounded, 3-wire"], correctIndex: 2, explanation: "Interpower (n.d.): 14 is 125/250 V AC single-phase, three-pole, four-wire. 21 is 120/208 V three-phase.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "In a NEMA code, what do P and R stand for?", options: ["Phase and return", "Pole and rating", "Pin and ring", "Plug and receptacle"], correctIndex: 3, explanation: "Interpower (n.d.): P is a plug and R is a receptacle.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does Leviton's page give for a NEMA 5-20R?", options: ["20 A, 125 V AC, 2-pole, 3-wire", "15 A, 125 V AC, 2-pole, 3-wire", "30 A, 125 V, locking, grounding", "20 A, 250 V, locking, grounding"], correctIndex: 0, explanation: "Leviton (n.d.-h): 5-20R, 20 A, 125 V AC, 2-pole, 3-wire. The 5-15R is 15 A.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What rating does Leviton give its L14-30R receptacle?", options: ["30 A, 250 V, 2P, 3W", "30 A, 125/250 V, 3P, 4W", "30 A, 120/208 V, 4P, 5W", "20 A, 125 V, 2P, 3W"], correctIndex: 1, explanation: "Leviton (n.d.-d): L14-30R, 30 A, 125/250 V, 3P, 4W, locking, grounding.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does Leviton give for its L21-30R receptacle?", options: ["30 A, 125/250 V single-phase, 3P, 4W", "20 A, 125 V single-phase, 2P, 3W", "30 A, 120/208 V three-phase Y, 4P, 5W", "30 A, 250 V single-phase, 2P, 3W"], correctIndex: 2, explanation: "Leviton (n.d.-e): L21-30R, 30 A, 120/208 V three-phase Y, 4P, 5W, locking, grounding.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does OSHA require of receptacles, cord connectors and plugs?", options: ["Every plug must fit every receptacle", "Only locking devices may be used", "All must be colored by voltage", "None may accept a plug of another rating"], correctIndex: 3, explanation: "29 C.F.R. § 1910.305(j)(2)(ii): no receptacle or cord connector may accept a plug with a different voltage or current rating.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What one exception does § 1910.305(j)(2)(ii) allow?", options: ["A 20 A T-slot taking a 15 A plug", "A 15 A slot taking a 20 A plug", "A 250 V slot taking a 125 V plug", "A locking slot taking a straight plug"], correctIndex: 0, explanation: "A 20 A T-slot receptacle may accept a 15 A plug of the same voltage; nothing else crosses ratings.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "By lesson 21's reasoning, what is a different NEMA shape?", options: ["A difference between brands", "A lock-out of the wrong rating", "A sign of a newer model year", "A matter of the maker's taste"], correctIndex: 1, explanation: "Because OSHA bars a device from accepting a plug of another rating, a different shape physically locks out the wrong voltage or current.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does OSHA say to check before a plug is connected?", options: ["The cord's printed date code", "The breaker's trip rating", "That the contacts mate properly", "The color of the cord jacket"], correctIndex: 2, explanation: "29 C.F.R. § 1910.334(a)(2)(iii): first check the plug and receptacle contacts are of proper mating configurations.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does OSHA say about adapters that interrupt the grounding connection?", options: ["They are fine indoors", "They need a label", "They need a GFCI", "They may not be used"], correctIndex: 3, explanation: "29 C.F.R. § 1910.334(a)(3)(iii): adapters that interrupt the grounding connection may not be used.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does Union Connector call 2P&G stage pin?", options: ["The standard in theatrical lighting", "A connector for audio snakes", "A camera power connector", "A three-phase feeder connector"], correctIndex: 0, explanation: "Union Connector (n.d.-a): \"the standard electrical connector used in theatrical lighting.\"", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What voltage does Union Connector give for its 20 A stage pin?", options: ["240 V", "120 V", "250 V", "208 V"], correctIndex: 1, explanation: "Union Connector (n.d.-a): \"The 20A pin connector devices are rated for 120V.\"", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "In what voltages does Union Connector offer 60 A and 100 A stage pin?", options: ["120 V only", "250 V only", "120 V or 240 V", "208 V or 480 V"], correctIndex: 2, explanation: "Union Connector (n.d.-a): 60 A and 100 A stage pin come \"in either a 120V or 240V rating.\"", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does ESTA say ANSI E1.24 covers?", options: ["Stage pin flammability and reliability", "DMX cable impedance and termination", "Cam-type connector colors and gender", "Stage pin dimensions, mating and marking"], correctIndex: 3, explanation: "ESTA (n.d.): mating requirements, contact set-backs and marking; electrical reliability and flammability are outside its scope.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "Which stage pin is the ground on each size, per lesson 21?", options: ["The lesson does not teach it", "The center pin on every size", "The outer pin on 20 A only", "The pin nearest the latch"], correctIndex: 0, explanation: "No page read for the course states it, so the lesson does not teach it; read the maker's sheet.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What do powerCON's blue and grey mean?", options: ["Grey in, blue out", "Blue in, grey out", "120 V and 240 V", "Live and dead"], correctIndex: 1, explanation: "Neutrik (n.d.-a, p. 10): power-in (blue) and power-out (grey), keyed so they cannot intermate.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "Why does Neutrik say powerCON's A and B types cannot produce a short circuit?", options: ["They carry no ground", "They are rated 250 V", "They are not interchangeable", "They lock with a latch"], correctIndex: 2, explanation: "Neutrik (n.d.-a, p. 11): \"With the two non-interchangeable types of connectors (A type and B type) it is impossible to produce a short circuit.\"", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does \"without breaking capacity\" mean in Neutrik's guide?", options: ["Rated to be pulled under load", "Built without a locking latch", "Sold without a strain relief", "Not to be mated or pulled live"], correctIndex: 3, explanation: "Neutrik (n.d.-a, p. 11): connecting devices \"not to be engaged and disengaged in normal use when live or under load.\"", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does Neutrik say about connecting a blue NAC3FCA under load?", options: ["It must not be done", "It is fine below 10 A", "It is fine if locked", "It needs a GFCI first"], correctIndex: 0, explanation: "Neutrik (n.d.-b): it \"must not be connected or disconnected under load or live!\"", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What status does Neutrik show for NAC3FCA, NAC3FCB and NAC3MPA-1?", options: ["Current and best-selling", "Discontinued, with successors", "Recalled for a safety fault", "Renamed as the TRUE1 range"], correctIndex: 1, explanation: "Neutrik's pages mark all three discontinued and name successors (n.d.-b, n.d.-c, n.d.-g).", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does Neutrik list for the NAC3FXXA-W-S successor?", options: ["No breaking capacity at all", "Waterproofing to IP68 alone", "Circuit breaking capability", "A 32 A rating at 400 V AC"], correctIndex: 2, explanation: "Neutrik (n.d.-f): \"Circuit Breaking Capability when mated with powerCON XX Series receptacles.\"", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does Neutrik say powerCON TRUE1 (NAC3FX-W) can do?", options: ["Mate with every classic powerCON", "Carry 32 A at 400 V three-phase", "Carry DMX data beside its power", "Connect or disconnect under load"], correctIndex: 3, explanation: "Neutrik (n.d.-d): TRUE1 has breaking capacity and \"can be connected or disconnected under load or live.\" No page read says it mates with classic powerCON.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What rating does Neutrik give the TRUE1 NAC3FX-W?", options: ["16 A (20 A USA), 250 V AC, IP65", "20 A (16 A EU), 125 V AC, IP20", "32 A (30 A USA), 400 V AC, IP44", "10 A (15 A USA), 125 V AC, IP54"], correctIndex: 0, explanation: "Neutrik (n.d.-d): \"a locking waterproof 16 A true mains connector\" (20 A in the USA), 250 V AC, IP65 when mated.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What does Neutrik's TRUE1 cable connector manual say about installation?", options: ["Anyone may fit it", "Qualified person only", "Fit it only when live", "Fit it with crimp tools"], correctIndex: 1, explanation: "Neutrik (2025, p. 1): \"To be installed by qualified person only.\"", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "What rule does lesson 21 teach for powerCON?", options: ["Every powerCON may be pulled live", "No powerCON may ever be pulled", "Read the exact part's page first", "Blue parts may be pulled live"], correctIndex: 2, explanation: "Classic powerCON without breaking capacity is never plugged or unplugged live; TRUE1 and some newer parts are rated for it. The exact part's page decides.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "Does lesson 21 say TRUE1 mates with classic blue and grey powerCON?", options: ["Yes, every one", "No, never", "Only the grey", "It leaves it open"], correctIndex: 3, explanation: "No Neutrik page read for the course says, so the lesson tells you not to assume either way.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "How does OSHA define a feeder?", options: ["Supply to final branch protection", "A cord from an outlet to a lamp", "Any cord longer than 50 feet", "Conductors from outlets onward"], correctIndex: 0, explanation: "29 C.F.R. § 1910.399: conductors between the service or other supply source and \"the final branch-circuit overcurrent device.\"", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does OSHA's use-of-equipment rule name as cord-and-plug equipment?", options: ["Feeder cables", "Extension cords", "Panelboards", "Service drops"], correctIndex: 1, explanation: "29 C.F.R. § 1910.334(a) covers \"cord- and plug-connected equipment, including flexible cord sets (extension cords).\"", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "Why is a cam feeder from a generator not a big extension cord?", options: ["It is always shorter", "It never carries a ground", "It sits upstream of the breakers", "It is always single-phase"], correctIndex: 2, explanation: "A feeder runs from the supply to the final branch-circuit overcurrent device, upstream of the breakers that protect the branch circuits.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What voltage and current does Eaton give its E-Z series cam connectors?", options: ["250 V up to 100 A", "125 V up to 30 A", "480 V up to 200 A", "600 V up to 400 A"], correctIndex: 3, explanation: "Eaton (2017, p. 1): \"rated at 600 Volts up to 400 Amperes continuous.\"", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "How does Eaton say a cam connector locks?", options: ["Rotate 1/3 turn clockwise", "Push until it clicks", "Screw it a full turn", "Snap a latch closed"], correctIndex: 0, explanation: "Eaton (2017, p. 1): \"fully engage male to female and rotate 1/3 of a turn clockwise.\"", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "Why does lesson 22 describe how a cam connector locks?", options: ["To teach making connections", "To recognize a locked one", "To pass the ETCP exam", "To meet Eaton's warranty"], correctIndex: 1, explanation: "So you can recognize a locked connector; the lesson says it is not permission to make the connection.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What colors are the five cam connectors on Lex's FBL305W feeder?", options: ["Red, red, red, white, green", "Black, black, black, grey, green", "Black, white, red, blue, green", "Brown, orange, yellow, grey, green"], correctIndex: 2, explanation: "LEX Innovations (n.d.-b): black, white, red, blue and green, on #2 Type SC banded every 2 feet.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does Lex's company switch page say its cam outlets are?", options: ["G, N, H, H, H", "H, N, G, N, H", "N, N, H, H, G", "H, H, H, N, G"], correctIndex: 3, explanation: "LEX Innovations (n.d.-d): \"color-coded, (H,H,H,N,G)\" for 120/208Y V: three hots, a neutral and a ground.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "Which colors does Lex's manual name for ground and neutral?", options: ["Green ground, white neutral", "White ground, green neutral", "Black ground, red neutral", "Blue ground, white neutral"], correctIndex: 0, explanation: "Lex Products (2020, pp. 7 to 8): green is ground and white is neutral, then the phase (hot) connections.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "How does lesson 22 know black, red and blue are the hots on Lex's set?", options: ["A code table lists them", "By elimination, reasoned", "Lex's label names them", "Eaton's sheet prints them"], correctIndex: 1, explanation: "Green is ground and white neutral (Lex), and the set is H, H, H, N, G, so the three colors left are the hots. It is reasoning, not a sourced rule.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "Does any source read for the course say the code requires black, red and blue?", options: ["Yes, NEC Article 520", "Yes, OSHA 1910.305", "No source read says so", "Yes, Eaton's IM 1012"], correctIndex: 2, explanation: "No source read assigns those colors to phases or says the code requires them.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does Union Connector call a company switch?", options: ["A portable generator on wheels", "A three-phase plug and cord set", "A cam-type gender adapter kit", "A specialized distribution panel"], correctIndex: 3, explanation: "Union Connector (n.d.-b): \"a specialized distribution panel\" that venues use to power portable equipment.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "In what order does Lex's label say cam connectors are connected?", options: ["Ground, neutral, then hots", "Neutral, ground, then hots", "Hots, neutral, then ground", "Hots, ground, then neutral"], correctIndex: 0, explanation: "Lex Products (2020, p. 6): equipment grounding conductor first, then the grounded conductor (neutral), then the ungrounded conductors (hots).", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "In what order does Lex's label say cam connectors are disconnected?", options: ["Ground, neutral, then hots", "Hots, neutral, then ground", "Neutral, hots, then ground", "Neutral, ground, then hots"], correctIndex: 1, explanation: "Lex Products (2020, p. 6): \"Disconnection should be in the reverse order\": hots, neutral, ground.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "Is \"neutral first on, last off\" what Lex's label says?", options: ["Yes, word for word", "Yes, for 400 A only", "No, ground comes first", "No, hots come first"], correctIndex: 2, explanation: "Lex's label puts the equipment grounding conductor first and the neutral second (Lex Products, 2020, p. 6).", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does Lex say about connecting while circuits are live?", options: ["Allowed in the right order", "Allowed with gloves on", "Allowed below 100 A", "Never attempt it live"], correctIndex: 3, explanation: "Lex Products (2020, p. 7): \"DO NOT ATTEMPT CONNECTION WHILE CIRCUITS ARE LIVE.\" The order does not make live work safe.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "Where does Lex say to de-energize cables before connecting or removing cam connectors?", options: ["At the generator", "At the dimmer rack", "At the far-end box", "At each connector"], correctIndex: 0, explanation: "Lex Products (2020, p. 6): \"De-energize cables at the generator prior to connecting or removing any connectors.\"", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does OSHA say about using non-load-break connectors to switch circuits under load?", options: ["Allowed if they lock", "Not except in an emergency", "Allowed with a GFCI", "Allowed below 50 A"], correctIndex: 1, explanation: "29 C.F.R. § 1910.334(b)(1): cable connectors not of the load-break type may not be used to open or close circuits under load, except in an emergency.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "Who does Union Connector's generator connection box say connects portable cables?", options: ["Any crew member", "The show's producer", "Qualified personnel", "The generator's driver"], correctIndex: 2, explanation: "Union Connector (n.d.-d): \"for safe connection of portable cables by qualified personnel.\"", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does Union Connector's SafeCam company switch do if a plug is pulled under load?", options: ["Sounds an alarm only", "Locks the plug in place", "Lights a red warning lamp", "Opens the main breaker"], correctIndex: 3, explanation: "Union Connector (n.d.-c): it \"automatically opens the main circuit breaker if a plug is removed under load.\"", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does Lex's male-to-male cam adapter do?", options: ["Reverses the gender", "Joins two feeders", "Adds a ground", "Splits one phase"], correctIndex: 0, explanation: "LEX Innovations (n.d.-c): a way of \"reversing the gender\" on 16 Series female outlets.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What option does Union Connector list on its Series 16 company switch?", options: ["A built-in generator", "Reverse Neutral/Ground", "Hot-swap cam outlets", "A 20 A stage pin out"], correctIndex: 1, explanation: "Union Connector (2016): \"Reverse Neutral/Ground,\" with laser-engraved cam identifiers and an NEC Art 520 warning label.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "By lesson 22's reasoning, why reverse the gender of the neutral and ground connectors?", options: ["To save on connector cost", "To let any plug mate any socket", "So a hot cannot mate them", "So turnarounds are not needed"], correctIndex: 2, explanation: "If neutral and ground are the opposite gender from the hots, a hot cannot be mated straight into them. The lesson labels this as reasoning; no maker states it.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What can a turnaround adapter in a cam run do, per lesson 22?", options: ["Raise the run's ampacity", "Ground the run twice over", "Balance the three phases", "Let a hot reach a wrong socket"], correctIndex: 3, explanation: "A turnaround defeats the reverse-gender protection and can let a hot reach the wrong socket.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does lesson 22 tell you to do about mismatched cam gender in a run?", options: ["Stop and ask who owns the power", "Add a turnaround and carry on", "Swap the colored boots around", "Tape the joint and label it"], correctIndex: 0, explanation: "Mismatched gender or a turnaround is a reason to stop and ask the person responsible for the distribution, never to improvise.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does Lex say Type SC cable is?", options: ["Service entrance cable", "Stage and lighting cable", "Shielded control cable", "Solar and cell cable"], correctIndex: 1, explanation: "LEX Innovations (n.d.-a): Type SC is \"STAGE & LIGHTING CABLE,\" 600 V, 105 °C.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "Under which NEC articles does Lex list Type SC as UL listed?", options: ["NEC Article 400 only", "NEC Article 590 only", "NEC Articles 520 and 530", "NEC Article 525 only"], correctIndex: 2, explanation: "LEX Innovations (n.d.-a): \"UL listed Type SC per NEC Article 520 and 530, indoor and outdoor locations.\"", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does Southwire say its SOOW cord is designed for?", options: ["Light duty indoors", "Fixed wall wiring", "Low-voltage data", "Extra hard usage"], correctIndex: 3, explanation: "Southwire (n.d.): \"designed for extra hard usage\" on equipment, tools, portable lights and power extensions.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "How often must listed cord types be marked on the jacket, per OSHA?", options: ["At least every 24 inches", "Once, near each plug", "At least every 10 feet", "Only on the reel label"], correctIndex: 0, explanation: "29 C.F.R. § 1910.305(g)(2)(i): at intervals not exceeding 610 mm (24 in.), with type, size and number of conductors.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does Brookhaven say listed extension cords typically warn?", options: ["Use them only indoors", "Do not plug one into another", "Do not exceed 50 feet", "Use only with 120 V loads"], correctIndex: 1, explanation: "Brookhaven National Laboratory (2007, para. 2): typically \"do not plug one extension cord in to another.\"", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "By lesson 22's reasoning, why is a daisy chain of power strips wrong?", options: ["An OSHA rule names it outright", "It always trips the main breaker", "It breaks the listing instructions", "It doubles the voltage on the strip"], correctIndex: 2, explanation: "Power strips are not intended to be daisy chained (Brookhaven, 2007), and OSHA requires following the listing's instructions (§ 1910.303(b)(2)). The course quotes no separate OSHA daisy-chain rule.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does the CPSC say about a cord or plug that feels warm?", options: ["It is working normally", "It needs a GFCI fitted", "It should be taped over", "It may be overloaded"], correctIndex: 3, explanation: "CPSC (2008): a warm cord, plug or outlet \"may be overloaded.\"", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "What does OSHA say about permanent wiring rules and temporary wiring?", options: ["They apply unless modified", "They never apply to it", "They apply only outdoors", "They apply only to feeders"], correctIndex: 0, explanation: "29 C.F.R. § 1910.305(a)(2): \"Except as specifically modified in this paragraph, all other requirements of this subpart for permanent wiring shall also apply to temporary wiring installations.\"", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "Where does OSHA say temporary feeders must originate?", options: ["At any wall receptacle nearby", "In an approved distribution center", "At a generator's own panel", "In a listed relocatable tap"], correctIndex: 1, explanation: "29 C.F.R. § 1910.305(a)(2)(iv)(A): \"Feeders shall originate in an approved distribution center.\"", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "How does OSHA say temporary feeder conductors are normally run?", options: ["As single insulated wires", "As bare conductors on hooks", "As multiconductor assemblies", "As earth-return circuits"], correctIndex: 2, explanation: "29 C.F.R. § 1910.305(a)(2)(iv)(B): \"run as multiconductor cord or cable assemblies.\"", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "When does OSHA allow single insulated feeder conductors in temporary wiring?", options: ["Any time they are color coded", "Whenever the run is under 100 ft", "Only for 120 V branch circuits", "Listed cases, qualified access only"], correctIndex: 3, explanation: "29 C.F.R. § 1910.305(a)(2)(iv)(B): only in the (a)(2)(i)(C) cases, experimental or development work and emergencies, \"and if accessible only to qualified persons.\"", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "What does OSHA say about branch-circuit conductors and the floor?", options: ["None may be laid on the floor", "They must be taped down", "They need a cable ramp", "They may lie on dry floors"], correctIndex: 0, explanation: "29 C.F.R. § 1910.305(a)(2)(v)(C): \"No branch-circuit conductor may be laid on the floor.\"", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "What type must temporary receptacles be, per OSHA?", options: ["Locking type", "Grounding type", "Weatherproof type", "GFCI type"], correctIndex: 1, explanation: "29 C.F.R. § 1910.305(a)(2)(vi): temporary receptacles \"shall be of the grounding type.\"", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "How does OSHA define a qualified person?", options: ["Anyone who holds a license", "Anyone with ETCP certification", "Trained, and has shown the skills", "Anyone over 18 on the crew"], correctIndex: 2, explanation: "29 C.F.R. § 1910.399: one who has received training in and has demonstrated skills and knowledge of the equipment and its hazards.", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "What does OSHA say about re-energizing a circuit after a breaker trips?", options: ["Reset it at once", "Reset it twice, then call", "Only at the main panel", "Not until it is safe"], correctIndex: 3, explanation: "29 C.F.R. § 1910.334(b)(2): not until it has been determined the equipment and circuit can be safely energized; repeated reclosing is prohibited.", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "What does OSHA say about modifying overcurrent protection on a temporary basis?", options: ["It may not be modified", "Allowed for one show", "Allowed with a GFCI", "Allowed by the crew chief"], correctIndex: 0, explanation: "29 C.F.R. § 1910.334(b)(3): overcurrent protection \"may not be modified, even on a temporary basis.\"", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "What does NFPA's chart list as Article 520's subject?", options: ["Carnivals, circuses and fairs", "Theaters and performance areas", "Flexible cords and cables", "Temporary installations"], correctIndex: 1, explanation: "NFPA (2026, p. 8): Article 520 covers theaters, audience areas of studios, performance areas and similar locations. 525 is carnivals, 400 cords, 590 temporary installations.", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "Which NEC article does NFPA's chart list as \"Temporary Installations\"?", options: ["Article 400", "Article 520", "Article 590", "Article 525"], correctIndex: 2, explanation: "NFPA (2026, pp. 3 to 4): Article 590, \"Temporary Installations.\"", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "Why does the course quote neither title for NEC Article 530?", options: ["The article was repealed", "Its text is free to read", "It covers only Canada", "NFPA's documents disagree"], correctIndex: 3, explanation: "NFPA's 2026 chart and a 2021 panel revision give Article 530 different titles (NFPA, 2021, 2026).", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "What does the CPSC say about how the NEC becomes law?", options: ["States or localities adopt it", "Congress passes each edition", "OSHA adopts it every year", "NFPA enforces it directly"], correctIndex: 0, explanation: "CPSC (n.d.-a, p. 2): the NEC \"may be adopted into law by states, counties or local jurisdictions\" and is revised every three years.", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "Under Minnesota's rule, what may an unlicensed person connect?", options: ["Cords with bare ends or clamps", "Cords with approved connectors", "Premises wiring for a film set", "Generators to a panelboard"], correctIndex: 1, explanation: "MN DLI (n.d., p. 2): only multi-conductor cords and single-conductor cables equipped with approved separable connectors.", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "Under Minnesota's rule, who connects cables with bare ends, clamps or clips?", options: ["Any crew member", "The gaffer only", "Licensed employees", "The producer"], correctIndex: 2, explanation: "MN DLI (n.d., p. 2): licensed employees of licensed electrical contractors.", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "What does Minnesota say about energizing filming equipment?", options: ["Allowed after a GFCI test", "Allowed once the gaffer signs", "Not until the cords are taped", "Not until inspected and approved"], correctIndex: 3, explanation: "MN DLI (n.d., p. 1): \"Electrical equipment must not be energized until it has been inspected and approved.\"", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "What does Oregon's ST license let its holder install?", options: ["Temporary feeders for shows", "Permanent premises wiring", "Service conductors", "Utility service drops"], correctIndex: 0, explanation: "Oregon Secretary of State (2026): \"Install temporary feeders, branch circuits, and equipment used for the production of shows.\" Permanent wiring and service equipment are excluded.", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "What does Oregon require of an ST license holder's employment?", options: ["Work for the venue directly", "Work for an electrical contractor", "Work alone, with insurance", "Work for a union local only"], correctIndex: 1, explanation: "Oregon Secretary of State (2026): \"Must be employed by an electrical contractor.\"", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "How did this course read Oregon's rule on the ST license's limits?", options: ["On Oregon's official rules site", "In a union hall's posted copy", "In an unofficial reproduction", "In ETCP's candidate handbook"], correctIndex: 2, explanation: "It read the Legal Information Institute's unofficial reproduction, and says so.", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "By lesson 23's reasoning, who decides who may connect a company switch in a venue?", options: ["The crew chief, alone", "ETCP's certification board", "The switch's manufacturer", "Local rule, venue and contract"], correctIndex: 3, explanation: "The state or city rule, the venue and any labor agreement; Minnesota and Oregon differ, so ask the venue and the local authority.", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "Who is ETCP's Entertainment Electrician exam for?", options: ["Experienced electricians", "Anyone new to stagecraft", "Students in high school", "Riggers moving to audio"], correctIndex: 0, explanation: "ETCP (n.d.-a): \"experienced electricians,\" to validate the upper third of entertainment electricians.", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "How does ETCP's handbook describe certification?", options: ["A state electrical license", "Voluntary and nongovernmental", "Required for all tie-ins", "Issued by OSHA's office"], correctIndex: 1, explanation: "ESTA (2016, p. 5): \"the voluntary process by which a nongovernmental organization grants recognition to an individual.\" It is not a license.", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "Whom does OSHA say a GFCI is intended to protect?", options: ["Equipment", "Wiring", "Personnel", "Breakers"], correctIndex: 2, explanation: "29 C.F.R. § 1910.399: \"A device intended for the protection of personnel.\"", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "How does the CPSC define a ground fault?", options: ["A breaker tripping on overload", "A neutral wired backward", "A plug missing its ground pin", "An unintended path to ground"], correctIndex: 3, explanation: "CPSC (n.d.-a, p. 1): \"an unintentional electrical path between a power source and a grounded surface.\"", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "At what current difference can a GFCI trip, per the CPSC?", options: ["0.006 amperes", "0.6 amperes", "6 amperes", "0.06 amperes"], correctIndex: 0, explanation: "CPSC (n.d.-a, p. 1): \"as little as 0.006 amperes.\"", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "Which outlets does OSHA's construction GFCI rule cover?", options: ["All 240 V outlets on site", "120 V, 15 and 20 A, temporary", "Every outlet in the building", "Only outlets used outdoors"], correctIndex: 1, explanation: "29 C.F.R. § 1926.404(b)(1): 120 V, single-phase, 15 A and 20 A receptacle outlets not part of permanent wiring, in use by employees, or an assured program.", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "What does the general industry rule add beyond 15 and 20 A temporary outlets?", options: ["50 A outlets", "240 V outlets", "30 A outlets", "DC outlets"], correctIndex: 2, explanation: "29 C.F.R. § 1910.304(b)(3)(ii): 125 V, single-phase, 15, 20 and 30 A temporary receptacle outlets.", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "When is an extension cord's connector a receptacle outlet under § 1910.304?", options: ["When it is outdoors", "When it has three prongs", "When it is over 50 feet", "When used for temporary power"], correctIndex: 3, explanation: "§ 1910.304(b)(3)(ii)(A), Note 1: when the cord set is used for temporary electric power.", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "Where may a GFCI cord set go to count as protection, per Note 2?", options: ["At the outlet nearest the source", "At the far end of the run", "Anywhere along the cord run", "Only inside the panelboard"], correctIndex: 0, explanation: "§ 1910.304(b)(3)(ii)(A), Note 2: \"connected to the receptacle closest to the source of power.\"", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "Does OSHA require a GFCI on every temporary circuit at every show?", options: ["Yes, by § 1910.305", "No; it depends on the work", "Yes, by NEC Article 520", "No; only for 240 V"], correctIndex: 1, explanation: "The construction and general industry rules cover different outlets, and which applies depends on the work.", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "What does OSHA's definition of a wet location include?", options: ["Any room with a sink", "Anywhere below grade", "Places exposed to weather", "Rooms over 60% humidity"], correctIndex: 2, explanation: "29 C.F.R. § 1910.399: \"locations unprotected and exposed to weather.\"", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "How may a wet energized connection be handled, per OSHA?", options: ["By dry hands, quickly", "With a towel wrapped around it", "After a GFCI test, by anyone", "With insulating protective gear"], correctIndex: 3, explanation: "29 C.F.R. § 1910.334(a)(5)(ii): \"only with insulating protective equipment,\" which this course does not issue.", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "At what voltage may portable lighting in wet construction locations run?", options: ["12 V, or 120 V with a GFCI", "240 V, if a GFCI is fitted", "48 V, or 120 V if locked", "Any voltage, if waterproof"], correctIndex: 0, explanation: "29 C.F.R. § 1926.405(a)(2)(ii)(G): 12 V or less, or 120 V with GFCI protection.", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "On the stop list, what happens with a tripped breaker?", options: ["Reset it once and watch", "Stop; it waits for a safe check", "Reset it from the panel", "Swap in a larger breaker"], correctIndex: 1, explanation: "Item 5: it is not reset until someone has determined the circuit can be safely energized (§ 1910.334(b)(2)).", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "On the stop list, what do you do about a GFCI that fails its test?", options: ["Reset it and try again", "Bypass it for the show", "Contact a qualified electrician", "Tape over the test button"], correctIndex: 2, explanation: "Item 8: \"Contact a qualified electrician\" (CPSC, n.d.-a, p. 2).", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "On the stop list, what do you do about mismatched cam gender?", options: ["Use a turnaround and go on", "Swap the colored boots", "Tape it and label it", "Stop and ask who owns the power"], correctIndex: 3, explanation: "Item 13: no source gives a crew procedure; stop and ask the person responsible for the distribution.", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 8: Control, comms and data
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "dmx-rs-422-tally-and-usb",
      title: "25 · DMX, RS-422, tally and USB",
      section: "8 · Control, comms and data",
      recallContent: [
        {
          prompt: "How small a current difference can trip a GFCI, according to the CPSC?",
          answer: "As little as 0.006 amperes, designed to act before the electricity can affect your heartbeat.",
        },
        {
          prompt: "Under OSHA's general industry rule, when is an extension cord's connector treated as a receptacle outlet?",
          answer: "When the cord set is used for temporary electric power (29 C.F.R. § 1910.304(b)(3)(ii)(A), Note 1).",
        },
      ],
      body: `${QR}

**Control lines are cables too.** Not every cable on a show carries a picture, sound or power. Some carry instructions: lighting data, deck control, a tally light, a contact closure, a computer link. This lesson covers four of them.

**DMX: terminate the end of the line.** Lesson 17 met DMX's 5-pin XLR and why microphone cable is the wrong cable for it. Two more rules complete the picture. ProSoundWeb: "The DMX signal must be terminated at the end of a line of fixtures or dimmers." A terminator is "a 120-ohm resistor, and a male XLR plug," and "Make sure only the last fixture in the line is terminated" (Leerman, 2013, p. 2). ENTTEC says the same: "A 120 ohm terminator across Data plus and Data minus on the last fixture." It adds that on short runs termination matters more than cable type, because an unterminated line reflects nearly the full edge of the signal (ENTTEC, 2026).

How many devices: "DMX512 supports a maximum of 32 devices on a line." With a repeater, "a total of 63 devices (The repeater counts as a device)" (Leerman, 2013, p. 2). ESTA's E1.11 is the DMX512-A standard itself (Entertainment Services and Technology Association [ESTA], n.d.); this course did not download it (lesson 17), so these figures are ProSoundWeb's.

Reasoned: this is the word clock rule from lesson 18 again. One termination, at the far end of the line, matched to the cable.

**RS-422: deck and switcher control.** Brainboxes explains the serial standards. RS-422 uses "2 wires ... to carry each signal, configured as a twisted pair," with "one transmitter and up to 10 receivers." It runs up to 10 Mbit/s for up to 40 feet, and up to 100 kbit/s for up to 4000 feet (1219 m). RS-485 allows "up to 32 driver/receivers pairs on a party line data bus." RS-232 uses "± 12 Volt logic levels over distances up to 100 feet, at speeds up to 20,000 Baud" (Brainboxes, 2026a). Reasoned: RS-422 reaches farther than RS-232 because each signal rides a twisted pair, the same idea as the balanced audio line in lesson 16.

Brainboxes describes the Sony protocol as "a 2-way communications protocol for controlling advanced video recorders," on a DB9 connector, and warns that the wiring depends on whether a unit is the controller or the device (Brainboxes, 2026b). Its controller (master) pin-out:

| Pin | Controller side |
|---|---|
| 1 | Frame ground |
| 2 | Receive A- |
| 3 | Transmit B- |
| 4 | Transmit ground |
| 5 | Not connected |
| 6 | Receive ground |
| 7 | Receive B+ |
| 8 | Transmit A+ |
| 9 | Not connected |

The device (slave) side swaps transmit and receive on pins 2, 3, 7 and 8 (Brainboxes, 2026b). Whether Sony's own 9-pin protocol document gives the same pin-out is a question this course leaves open.

Where you meet it: Blackmagic's HyperDeck Studio 4K Pro, HD Pro and HD Plus each list "1 x RS-422 In, 1 x RS-422 Out" (the HD Mini has RS-422 In only), with external control by "RS-422 deck control, SDI start/stop, timecode run" (Blackmagic Design, n.d.-d). Blackmagic's top 4 M/E ATEM Constellation models "include RS-422 for serial control and MADI digital audio connections" (Blackmagic Design, n.d.-c).

**Tally and GPI: contact closures.** Blackmagic's GPI and Tally Interface "Adds 8 Tally relay contacts to any ATEM switcher" (Blackmagic Design, n.d.-c). Clear-Com's HelixNet DB25 relay port gives each relay a pole, a normally closed (NC) contact and a normally open (NO) contact, beside opto-isolated inputs with + and - pins (Clear-Com, 2026a). On Clear-Com's Eclipse matrix, an opto-isolated GPI input needs 7 to 24 V DC at EXTVIN+ relative to EXTVIN-. It goes active at 5 mA or more, a 1.5 kilohm resistor limits the current, and an input pin must not go above +6 V relative to EXTVIN- (Clear-Com, 2019a). A matrix can also switch an IFB's program feed by a panel key or by a GPI driven from an external switch (Clear-Com, 2024b).

Reasoned from those three pages: a general-purpose output (GPO) is usually a relay contact, a switch that closes or opens, and a general-purpose input (GPI) senses a closure or a current. Tally is one use of them. That definition is this course's summary, not a quotation. Each device sets its own voltage and current limits, as the Eclipse figures show, so check both devices' limits before wiring one to the other.

**USB: short by design.** Biamp: "A standard USB 2.0 cable has a maximum cable length of 5 meters," and "If you use a USB 3 or 3.1 cable, your maximum cable length shortens to 3 meters." Longer runs need "USB Extenders" (USB over Ethernet cable) or "Active USB" cables, and never more than 5 "Hub Hops" from the root hub (Biamp, n.d.). Cambrionix agrees on 5 meters for USB 2.0. For USB 3.x, it says the USB-IF moved from fixed lengths to performance criteria, and it gives up to 2 m for USB 3.2 Gen 1, up to 1 m for Gen 2 and Gen 2x2, and 0.8 m for USB4 (Cambrionix, n.d.).

So the rule to carry: 5 meters for USB 2.0; faster USB is shorter, and Biamp (3 m) and Cambrionix (2 m) disagree on the figure; past that, use an active cable or an extender.

:::reveal Where does a DMX line get its terminator, and what is it? ||| Only at the last fixture: a 120-ohm resistor across Data plus and Data minus, in a male XLR plug (Leerman, 2013, p. 2; ENTTEC, 2026).

:::reveal Why does RS-422 reach farther than RS-232? ||| Each RS-422 signal rides a twisted pair, like a balanced audio line: up to 4000 feet at 100 kbit/s, against 100 feet for RS-232 (Brainboxes, 2026a).

:::reveal How long may a USB 2.0 cable be, and what do you do past that? ||| 5 meters; beyond it, use an active USB cable or a USB extender (Biamp, n.d.).

## Sources
- ${LEERMAN_2013} Locator: p. 2, the termination and device-count paragraphs.
- ${ENTTEC_2026} Locator: page text, the terminator and short-run paragraphs.
- ${ESTA_LISTING} Locator: entry for E1.11.
- ${BRAINBOXES_SERIAL} Locator: the RS-422, RS-485 and RS-232 sections.
- ${BRAINBOXES_SONY} Locator: both pin-out tables and the controller and device note.
- ${BMD_HYPERDECK} Locator: "Connections" and "External Control" for each model.
- ${BMD_ATEM} Locator: ATEM Constellation 4 M/E connections; GPI and Tally Interface.
- ${CLEARCOM_RELAY} Locator: the relay and input table.
- ${CLEARCOM_GPI} Locator: answer text, the opto-isolated mode figures.
- ${CLEARCOM_IFB_GPI} Locator: answer text.
- ${BIAMP} Locator: the cable length, extender and hub-hop sections.
- ${CAMBRIONIX} Locator: the USB 2.0 and USB 3.x length paragraphs.`,
    },
    {
      slug: "rf-coax-wireless-mics-and-ifb",
      title: "26 · RF coax, wireless mics and IFB",
      section: "8 · Control, comms and data",
      recallContent: [
        {
          prompt: "Where does a DMX line get terminated, and with what?",
          answer: "Only at the last fixture, with a 120-ohm terminator across Data plus and Data minus.",
        },
        {
          prompt: "How far can RS-422 run at 100 kbit/s, according to Brainboxes?",
          answer: "Up to 4000 feet (1219 m); at 10 Mbit/s, up to 40 feet.",
        },
      ],
      body: `${QR}

**RF lives at 50 ohms.** Lesson 1 met the two coax impedances: 75 ohms for video, and 50 ohms mainly for data, with GPS antennas, cell towers and base stations among its uses and SMA, TNC and N among its connectors (Coaxicom, 2015). Rohde & Schwarz's note on RF connectors gives the details a crew member needs (Rohde & Schwarz, 2015, pp. 4 to 6):

| Connector | What the note says |
|---|---|
| Type N, 50 ohms | "developed to satisfy the need for a durable, weatherproof, medium-sized RF connector"; to 11 GHz (normal) and 18 GHz (precision) |
| Type N, 75 ohms | Tops out at 4 GHz, and is "not compatible despite sharing a common thread size" with the 50-ohm version |
| SMA, 50 ohms | "good electrical performance from DC to 12 GHz" (some makers to 18 GHz), but "mechanically rated for only 500 mate / de-mate operations" |

Two cautions come with the table. The 50-ohm Type N male pin is larger than the 75-ohm female socket, "resulting in damage if connected together" (lesson 2). And SMA parts vary between makers, so check compatibility "to avoid physical damage" (Rohde & Schwarz, 2015, pp. 5 to 6). A system is only as good as its weakest part: "The connector type having the lowest frequency range will set the frequency range of the system" (p. 4).

**Same plug, different cable.** The BNC lives in both worlds. RME notes that 50-ohm BNC parts are what computer stores usually carry, while the 75-ohm parts used for word clock are "part of video technology (RG59)" (RME, n.d., p. 17). Shure's UA825 accessory is a "25-foot coaxial cable" that "offers BNC to BNC connection," and its product page does not state an impedance (Shure, n.d.).

Reasoned from lessons 2, 17 and 18: video, word clock and AES3id run at 75 ohms; antenna and RF test gear run at 50 ohms, with Type N and SMA as 50-ohm series. A BNC can be either, so the plug fitting proves nothing. A 50-ohm N plug can damage a 75-ohm N jack. And a mismatched cable reflects signal, the same reason RME and ENTTEC give for matching impedance. Read the cable's print or the maker's page. When the page does not say, as Shure's does not, ask the RF coordinator before you swap in a different cable.

**Wireless microphones: the rule, named.** In the United States, the FCC's rule for unlicensed wireless microphones is 47 C.F.R. § 15.236. The October 1, 2025 edition is headed for the bands 54 to 72 MHz, 76 to 88 MHz, 174 to 216 MHz, 470 to 608 MHz, 614 to 616 MHz and 657 to 663 MHz. It defines a wireless microphone as a radiator that sends sound by radio "to a receiver which converts the radio signals back into audio signals," and says wireless microphones "may be used for cue and control communications and synchronization of TV camera signals as defined in § 74.801" (47 C.F.R. § 15.236(a), 2025). It also sets limits:

- maximum radiated power of 50 mW EIRP in the TV broadcast bands, and 20 mW EIRP in the 600 MHz guard band and duplex gap ((d));
- operation at least four kilometers outside the protected contours of co-channel TV stations ((e));
- a channel no wider than 200 kHz ((f)(1)(ii)).

*Break Into Sports & Media Broadcasting* lesson "9 · Encoding, streaming, and the FCC basics" explains what the FCC does.

**IFB: named, too.** An IFB carries a program feed. Clear-Com wires a balanced line-level feed from a matrix port to its PTX-3 IFB transmitter (Clear-Com, 2019e), the cable lesson 16 met, and a matrix can switch that program feed by a panel key or a GPI (Clear-Com, 2024b; lesson 25).

**Why this lesson stops there.** This course teaches no frequency to use. The FCC's own wireless microphone guide pages refused this course's requests, so it cannot say what they advise today, and a frequency plan belongs to the show's RF coordinator. What the FCC's pages say today about licensing under Part 74 and the 600 MHz band is a question this course leaves open. Your part is the cable: 50 ohms, the right connector, the right length, and no swaps without asking.

:::reveal Why must a 50-ohm Type N plug never meet a 75-ohm Type N jack? ||| The 50-ohm male pin is larger than the 75-ohm female socket, "resulting in damage if connected together" (Rohde & Schwarz, 2015, p. 5).

:::reveal How many mate and de-mate operations is an SMA rated for? ||| Only 500 (Rohde & Schwarz, 2015, pp. 5 to 6).

:::reveal What maximum radiated power does § 15.236 allow an unlicensed wireless mic in the TV broadcast bands? ||| 50 mW EIRP; 20 mW in the 600 MHz guard band and duplex gap (47 C.F.R. § 15.236(d), 2025).

## Sources
- ${COAXICOM_2015} Locator: applications table.
- ${ROHDE_2015} Locator: p. 4, section 3; p. 5, section 3.1 and notes 1 and 2; pp. 5 to 6, section 3.2.
- ${RME_ADI648} Locator: p. 17, section 9.2 "Cabling and Termination".
- ${SHURE_UA825} Locator: product description.
- ${CFR_47_15_236} Locator: p. 1036, section heading; paragraphs (a), (d), (e) and (f)(1)(ii).
- ${CLEARCOM_IFB} Locator: the cable wiring answer.
- ${CLEARCOM_IFB_GPI} Locator: answer text.`,
    },
    {
      slug: "section-8-quiz",
      title: "Section 8 quiz · Control, comms and data",
      section: "8 · Control, comms and data",
      body: "A graded check on DMX termination and device counts, RS-422 and serial control, tally and GPI contacts, USB length, 50-ohm RF connectors, and the FCC's wireless microphone rule. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Where does ProSoundWeb say a DMX line must be terminated?", options: ["At the end of the line", "At the console output", "At every fixture", "At the first dimmer"], correctIndex: 0, explanation: "Leerman (2013, p. 2): \"The DMX signal must be terminated at the end of a line of fixtures or dimmers.\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What does ProSoundWeb say a DMX terminator is?", options: ["A 75-ohm resistor in a BNC cap", "A 120-ohm resistor in a male XLR", "A ferrite clamp on the last cable", "A 110-ohm resistor in a TRS jack"], correctIndex: 1, explanation: "Leerman (2013, p. 2): \"a 120-ohm resistor, and a male XLR plug.\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "How many fixtures in a DMX line does ProSoundWeb say get terminated?", options: ["Every one of them", "The first and last", "Only the last one", "Every fifth one"], correctIndex: 2, explanation: "Leerman (2013, p. 2): \"Make sure only the last fixture in the line is terminated.\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "Where does ENTTEC put the DMX terminator's 120 ohms?", options: ["Across pin 1 and the shell", "Across pins 4 and 5 only", "Across shield and Data plus", "Across Data plus and Data minus"], correctIndex: 3, explanation: "ENTTEC (2026): \"A 120 ohm terminator across Data plus and Data minus on the last fixture.\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "On short DMX runs, what does ENTTEC say matters more than cable type?", options: ["Termination", "Cable color", "Fixture brand", "Console age"], correctIndex: 0, explanation: "ENTTEC (2026): at short lengths termination matters more than cable type.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "Why does an unterminated short DMX line misbehave, per ENTTEC?", options: ["It picks up phantom power", "It reflects nearly the full edge", "It loses its shield ground", "It clocks the data too slowly"], correctIndex: 1, explanation: "ENTTEC (2026): an unterminated line reflects nearly the full edge of the signal.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "How many devices does ProSoundWeb say DMX512 supports on one line?", options: ["16", "512", "32", "63"], correctIndex: 2, explanation: "Leerman (2013, p. 2): \"DMX512 supports a maximum of 32 devices on a line.\" 512 is the channel count in the name, not devices.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "With a repeater, how many devices does ProSoundWeb give for a DMX line?", options: ["32", "64", "512", "63"], correctIndex: 3, explanation: "Leerman (2013, p. 2): \"a total of 63 devices (The repeater counts as a device).\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "Whose figures are the DMX device counts in lesson 25?", options: ["ProSoundWeb's", "ESTA's E1.11", "ENTTEC's sheet", "Clear-Com's"], correctIndex: 0, explanation: "The course did not download ESTA's E1.11, so the 32 and 63 are ProSoundWeb's figures (Leerman, 2013).", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "Which earlier rule does lesson 25 say DMX termination repeats?", options: ["The phantom power rule", "Word clock's end termination", "The pin 2 is hot rule", "The cam ground-first rule"], correctIndex: 1, explanation: "As with word clock in lesson 18: one termination, at the far end of the line, matched to the cable.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "How does Brainboxes say RS-422 carries each signal?", options: ["On a single wire and ground", "On a coax with a BNC", "On two wires as a twisted pair", "On an optical fiber pair"], correctIndex: 2, explanation: "Brainboxes (2026a): \"2 wires ... to carry each signal, configured as a twisted pair.\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "How many receivers does Brainboxes allow one RS-422 transmitter?", options: ["1", "32", "63", "Up to 10"], correctIndex: 3, explanation: "Brainboxes (2026a): \"one transmitter and up to 10 receivers.\" RS-485 allows 32 driver/receiver pairs.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "How far does Brainboxes say RS-422 runs at 100 kbit/s?", options: ["Up to 4000 feet", "Up to 40 feet", "Up to 100 feet", "Up to 400 feet"], correctIndex: 0, explanation: "Brainboxes (2026a): up to 100 kbit/s for up to 4000 feet (1219 m).", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "How far does Brainboxes say RS-422 runs at 10 Mbit/s?", options: ["Up to 4000 feet", "Up to 40 feet", "Up to 100 feet", "Up to 1219 feet"], correctIndex: 1, explanation: "Brainboxes (2026a): up to 10 Mbit/s for up to 40 feet.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "How many driver/receiver pairs does RS-485 allow on a party line bus?", options: ["Up to 10", "Up to 63", "Up to 32", "Up to 2"], correctIndex: 2, explanation: "Brainboxes (2026a): RS-485 allows \"up to 32 driver/receivers pairs on a party line data bus.\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What does Brainboxes give for RS-232's range and speed?", options: ["4000 feet at 100 kbit/s", "40 feet at 10 Mbit/s", "1219 m at 20,000 Baud", "100 feet at 20,000 Baud"], correctIndex: 3, explanation: "Brainboxes (2026a): \"± 12 Volt logic levels over distances up to 100 feet, at speeds up to 20,000 Baud.\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "Why does RS-422 reach farther than RS-232, by lesson 25's reasoning?", options: ["Each signal rides a twisted pair", "It uses a higher signal voltage", "It runs on a fiber optic pair", "It needs no shield or ground"], correctIndex: 0, explanation: "Each RS-422 signal rides a twisted pair, the same idea as a balanced audio line (Brainboxes, 2026a; lesson 16).", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What does Brainboxes say the Sony protocol is for?", options: ["Lighting fixture control", "Controlling video recorders", "Intercom party-lines", "Camera lens focus"], correctIndex: 1, explanation: "Brainboxes (2026b): \"a 2-way communications protocol for controlling advanced video recorders.\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "On what connector does Brainboxes show the Sony RS-422 protocol?", options: ["XLR-5", "RJ45", "DB9", "BNC"], correctIndex: 2, explanation: "Brainboxes (2026b) gives the Sony RS-422 pin-out on a DB9.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What does Brainboxes warn decides how a Sony RS-422 cable is wired?", options: ["The cable's length", "The baud rate set", "The deck's maker", "Controller or device role"], correctIndex: 3, explanation: "Brainboxes (2026b): wiring depends on whether a unit is the controller or the device; the device side swaps transmit and receive.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "On Brainboxes' controller-side pin-out, what is pin 1?", options: ["Frame ground", "Receive A-", "Transmit A+", "Not connected"], correctIndex: 0, explanation: "Brainboxes (2026b): pin 1, frame ground.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "On Brainboxes' controller side, which pin is Transmit A+?", options: ["Pin 2", "Pin 8", "Pin 7", "Pin 3"], correctIndex: 1, explanation: "Brainboxes (2026b): pin 8, Transmit A+; pin 2 Receive A-, pin 3 Transmit B-, pin 7 Receive B+.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "Which pins swap between the controller and device sides?", options: ["Pins 1, 4, 6 and 9", "Pins 5 and 9 only", "Pins 2, 3, 7 and 8", "Pins 1 and 6 only"], correctIndex: 2, explanation: "Brainboxes (2026b): the device side swaps transmit and receive on pins 2, 3, 7 and 8.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "Does lesson 25 say Sony's own document matches Brainboxes' pin-out?", options: ["Yes, exactly", "No, it differs", "Only for decks", "It leaves it open"], correctIndex: 3, explanation: "Sony's own 9-pin protocol document was not read, so the lesson leaves the match open.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What RS-422 ports does Blackmagic list on the HyperDeck Studio 4K Pro?", options: ["1 x RS-422 In, 1 x RS-422 Out", "1 x RS-422 In, no RS-422 Out", "2 x RS-422 Out, no RS-422 In", "2 x RS-422 In, 2 x RS-422 Out"], correctIndex: 0, explanation: "Blackmagic Design (n.d.-d): \"1 x RS-422 In, 1 x RS-422 Out\" on the 4K Pro, HD Pro and HD Plus.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "Which HyperDeck Studio model lists RS-422 In only?", options: ["HD Plus", "HD Mini", "HD Pro", "4K Pro"], correctIndex: 1, explanation: "Blackmagic Design (n.d.-d): the HD Mini has RS-422 In only.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "Which external control methods does Blackmagic list for HyperDeck Studio?", options: ["DMX, MIDI and USB control", "Dante, AES67 and PTP control", "RS-422, SDI start/stop, timecode", "GPI relay and IR remote only"], correctIndex: 2, explanation: "Blackmagic Design (n.d.-d): \"RS-422 deck control, SDI start/stop, timecode run.\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What do the top 4 M/E ATEM Constellation models include, per Blackmagic?", options: ["DMX and RS-232 ports", "USB-C and Thunderbolt", "Dante and AES67 ports", "RS-422 and MADI"], correctIndex: 3, explanation: "Blackmagic Design (n.d.-c): they \"include RS-422 for serial control and MADI digital audio connections.\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What does Blackmagic's GPI and Tally Interface add to an ATEM switcher?", options: ["8 tally relay contacts", "8 more SDI return feeds", "8 DMX universes of data", "8 extra RS-422 ports"], correctIndex: 0, explanation: "Blackmagic Design (n.d.-c): it \"Adds 8 Tally relay contacts to any ATEM switcher.\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What three contacts does each HelixNet DB25 relay give?", options: ["Hot, cold and a shield", "Pole, NC and NO contact", "Plus, minus and ground", "Tip, ring and a sleeve"], correctIndex: 1, explanation: "Clear-Com (2026a): each relay has a pole, a normally closed (NC) and a normally open (NO) contact.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What voltage does Clear-Com's Eclipse opto-isolated GPI input need at EXTVIN+?", options: ["48 V DC", "5 V DC", "7 to 24 V DC", "120 V AC"], correctIndex: 2, explanation: "Clear-Com (2019a): 7 to 24 V DC at EXTVIN+ relative to EXTVIN-.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "At what current does an Eclipse opto-isolated GPI input go active?", options: ["0.006 A", "50 mA", "1.5 mA", "5 mA or more"], correctIndex: 3, explanation: "Clear-Com (2019a): an input goes active at 5 mA or more.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What limits the current on an Eclipse opto-isolated GPI input?", options: ["A 1.5 kilohm resistor", "A 120-ohm terminator", "A 5 A slow-blow fuse", "A 75-ohm terminator"], correctIndex: 0, explanation: "Clear-Com (2019a): a 1.5 kilohm resistor limits the current.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "How can a Clear-Com matrix switch an IFB's program feed?", options: ["Only by its menus", "A panel key or a GPI", "Only by RS-422", "By DMX cue"], correctIndex: 1, explanation: "Clear-Com (2024b): by a panel key, or by a matrix GPI driven from an external switch.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "By lesson 25's summary, what is a GPO usually?", options: ["A balanced audio pair", "A fiber transceiver", "A relay contact", "A 75-ohm output"], correctIndex: 2, explanation: "A GPO is usually a relay contact that closes or opens; a GPI senses a closure or a current. The lesson labels this its own summary.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What does lesson 25 say to check before wiring one device's GPO to another's GPI?", options: ["The cable's color code", "The maker of each unit", "The serial baud rate", "Each unit's voltage limits"], correctIndex: 3, explanation: "Each device sets its own voltage and current limits, as the Eclipse figures show, so check both before wiring.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What maximum length does Biamp give for a USB 2.0 cable?", options: ["5 meters", "3 meters", "10 meters", "2 meters"], correctIndex: 0, explanation: "Biamp (n.d.): \"A standard USB 2.0 cable has a maximum cable length of 5 meters.\"", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What does Biamp say a USB 3 or 3.1 cable's maximum length shortens to?", options: ["5 meters", "3 meters", "1 meter", "10 meters"], correctIndex: 1, explanation: "Biamp (n.d.): it \"shortens to 3 meters.\" Cambrionix gives 2 m for USB 3.2 Gen 1.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What does Biamp say a longer USB run needs?", options: ["A passive barrel coupler", "A thicker passive cable", "An extender or active cable", "A 75-ohm BNC adapter"], correctIndex: 2, explanation: "Biamp (n.d.): \"USB Extenders\" (USB over Ethernet cable) or \"Active USB\" cables.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "How many hub hops from the root hub does Biamp allow?", options: ["10", "7", "2", "5"], correctIndex: 3, explanation: "Biamp (n.d.): never more than 5 \"Hub Hops\" from the root hub.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What length does Cambrionix give for USB 3.2 Gen 1?", options: ["Up to 2 m", "Up to 5 m", "Up to 3 m", "Up to 0.8 m"], correctIndex: 0, explanation: "Cambrionix (n.d.): up to 2 m for USB 3.2 Gen 1; 1 m for Gen 2 and Gen 2x2; 0.8 m for USB4.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What does Cambrionix say the USB-IF did for USB 3.x lengths?", options: ["Fixed all of them at 3 m", "Moved to performance criteria", "Banned every passive cable", "Kept USB 2.0's 5 m limit"], correctIndex: 1, explanation: "Cambrionix (n.d.): for USB 3.x the USB-IF moved from fixed lengths to performance criteria.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What does lesson 25 conclude about USB 3.x cable length?", options: ["It is 5 m, like USB 2.0", "It is 3 m, by standard", "Shorter, and makers disagree", "Longer than USB 2.0"], correctIndex: 2, explanation: "Faster USB is shorter than USB 2.0's 5 m, and Biamp (3 m) and Cambrionix (2 m) disagree on the figure.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "What does Rohde & Schwarz say Type N was developed to be?", options: ["A tiny connector for boards", "A quick-push video plug", "A low-cost consumer jack", "A durable, weatherproof RF part"], correctIndex: 3, explanation: "Rohde & Schwarz (2015, p. 5): \"developed to satisfy the need for a durable, weatherproof, medium-sized RF connector.\"", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "To what frequency does Rohde & Schwarz rate a normal 50-ohm Type N?", options: ["11 GHz", "4 GHz", "18 GHz", "12 GHz"], correctIndex: 0, explanation: "Rohde & Schwarz (2015, p. 5): 11 GHz normal, 18 GHz precision.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "To what frequency does a precision 50-ohm Type N reach?", options: ["11 GHz", "18 GHz", "4 GHz", "200 MHz"], correctIndex: 1, explanation: "Rohde & Schwarz (2015, p. 5): 18 GHz for precision Type N.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "Where does Rohde & Schwarz say 75-ohm Type N tops out?", options: ["11 GHz", "18 GHz", "4 GHz", "12 GHz"], correctIndex: 2, explanation: "Rohde & Schwarz (2015, p. 5): 75-ohm Type N tops out at 4 GHz.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "What do 50- and 75-ohm Type N share, though they are not compatible?", options: ["Pin size", "Color code", "Frequency limit", "Thread size"], correctIndex: 3, explanation: "Rohde & Schwarz (2015, p. 5): \"not compatible despite sharing a common thread size.\"", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "What happens if a 50-ohm Type N plug meets a 75-ohm Type N jack?", options: ["The jack is damaged", "Nothing at all", "A small reflection only", "The plug will not turn"], correctIndex: 0, explanation: "The larger 50-ohm male pin damages the 75-ohm female socket (Rohde & Schwarz, 2015, p. 5).", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "How many mate and de-mate operations is SMA mechanically rated for?", options: ["5000", "500", "50", "1000"], correctIndex: 1, explanation: "Rohde & Schwarz (2015, pp. 5 to 6): \"mechanically rated for only 500 mate / de-mate operations.\"", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "To what frequency does Rohde & Schwarz give SMA good electrical performance?", options: ["4 GHz", "11 GHz", "12 GHz", "200 MHz"], correctIndex: 2, explanation: "Rohde & Schwarz (2015, p. 5): \"good electrical performance from DC to 12 GHz,\" some makers to 18 GHz.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "Why check SMA compatibility between makers?", options: ["Their colors differ", "Their impedance differs", "Their thread pitch is metric", "To avoid physical damage"], correctIndex: 3, explanation: "Rohde & Schwarz (2015, p. 6): mechanical variance between makers means checking compatibility \"to avoid physical damage.\"", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "What does Rohde & Schwarz say sets a system's frequency range?", options: ["Its lowest-rated connector", "Its highest-rated connector", "The longest cable in it", "The test set's display"], correctIndex: 0, explanation: "Rohde & Schwarz (2015, p. 4): \"The connector type having the lowest frequency range will set the frequency range of the system.\"", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "Which BNC impedance does RME say a computer store usually stocks?", options: ["75 ohms", "50 ohms", "110 ohms", "100 ohms"], correctIndex: 1, explanation: "RME (n.d., p. 17): computer stores usually carry 50-ohm BNC parts; 75-ohm parts belong to video technology (RG59).", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "What does Shure's UA825 product page leave out?", options: ["Its length", "Its connectors", "Its impedance", "Its maker"], correctIndex: 2, explanation: "Shure (n.d.) gives a 25-foot BNC to BNC coaxial cable and states no impedance.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "What length and connectors does Shure give the UA825?", options: ["10 feet, N to N", "50 feet, SMA to BNC", "25 feet, BNC to N", "25 feet, BNC to BNC"], correctIndex: 3, explanation: "Shure (n.d.): \"25-foot coaxial cable offers BNC to BNC connection.\"", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "By lesson 26's reasoning, why does a BNC prove nothing about impedance?", options: ["BNCs come in 50 and 75 ohms", "BNCs carry no outer shield", "BNCs only ever fit video", "BNCs stop at 200 MHz"], correctIndex: 0, explanation: "A BNC can be either impedance, so the plug fitting proves nothing; read the cable's print or the maker's page.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "Which signals in lesson 26's list run at 75 ohms?", options: ["Antenna feeds and RF test", "Video, word clock, AES3id", "Network pairs and DMX", "AES3 and mic lines"], correctIndex: 1, explanation: "Video, word clock and AES3id are 75 ohms; antenna and RF test gear are 50 ohms.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "What does lesson 26 tell you to do when a coax cable's page states no impedance?", options: ["Use it if it fits", "Assume it is 75 ohms", "Ask the RF coordinator", "Assume it is 50 ohms"], correctIndex: 2, explanation: "When the page does not say, as Shure's does not, ask the RF coordinator before swapping in a different cable.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "Which FCC rule covers unlicensed wireless microphones?", options: ["47 C.F.R. § 74.801", "47 C.F.R. § 15.247", "29 C.F.R. § 1910.305", "47 C.F.R. § 15.236"], correctIndex: 3, explanation: "47 C.F.R. § 15.236 (2025 edition). § 74.801 is cited inside it for cue and control definitions.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "How does § 15.236 define a wireless microphone?", options: ["Sends sound by radio to a receiver", "Any mic with a battery inside", "A mic that plugs into a network", "Any mic used on a TV set"], correctIndex: 0, explanation: "47 C.F.R. § 15.236(a): a radiator that sends sound by radio \"to a receiver which converts the radio signals back into audio signals.\"", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "Besides sound, what does § 15.236 say wireless mics may be used for?", options: ["Streaming video to viewers", "Cue, control and camera sync", "Carrying DMX lighting data", "Phone calls to the truck"], correctIndex: 1, explanation: "47 C.F.R. § 15.236(a): \"cue and control communications and synchronization of TV camera signals.\"", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "What is the maximum radiated power for an unlicensed mic in the TV broadcast bands?", options: ["20 mW EIRP", "250 mW EIRP", "50 mW EIRP", "1 W EIRP"], correctIndex: 2, explanation: "47 C.F.R. § 15.236(d): 50 mW EIRP in the TV broadcast bands.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "What maximum power does § 15.236 allow in the 600 MHz guard band and duplex gap?", options: ["50 mW EIRP", "100 mW EIRP", "5 mW EIRP", "20 mW EIRP"], correctIndex: 3, explanation: "47 C.F.R. § 15.236(d): 20 mW EIRP in the 600 MHz guard band and duplex gap.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "How far outside co-channel TV stations' protected contours must unlicensed mics operate?", options: ["At least four kilometers", "At least 400 meters", "At least 40 kilometers", "At least one kilometer"], correctIndex: 0, explanation: "47 C.F.R. § 15.236(e): at least four kilometers outside the protected contours.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "How wide may an unlicensed wireless mic's channel be, per § 15.236?", options: ["2 MHz", "200 kHz", "6 MHz", "20 kHz"], correctIndex: 1, explanation: "47 C.F.R. § 15.236(f)(1)(ii): a channel may not exceed 200 kHz.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "Which of these bands is in § 15.236's heading?", options: ["2400 to 2483 MHz", "902 to 928 MHz", "470 to 608 MHz", "5725 to 5850 MHz"], correctIndex: 2, explanation: "The heading lists 54 to 72, 76 to 88, 174 to 216, 470 to 608, 614 to 616 and 657 to 663 MHz.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "What does Clear-Com wire into its PTX-3 IFB transmitter?", options: ["A 4-pin headset line", "A party-line with 30 V", "A DMX data feed", "A balanced line-level feed"], correctIndex: 3, explanation: "Clear-Com (2019e): a balanced line-level feed from a matrix port.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "Why does lesson 26 teach no wireless frequency to use?", options: ["The plan is the RF coordinator's", "Every band is free to use", "The FCC bans crews from radio", "Mics never need a license"], correctIndex: 0, explanation: "The FCC's guide pages could not be read, and a frequency plan belongs to the show's RF coordinator.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "Which lesson does lesson 26 link for what the FCC does?", options: ["Broadcasting lesson 9", "Light on Set lesson 26", "Arena transmission 4", "Sound Craft lesson 15"], correctIndex: 1, explanation: "Break Into Sports & Media Broadcasting, \"9 · Encoding, streaming, and the FCC basics.\"", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "Does lesson 26 say what the FCC's pages say today about Part 74 licensing?", options: ["Yes, a license is needed", "No, licensing is ended", "It leaves that open", "Yes, for over 50 mW"], correctIndex: 2, explanation: "The FCC's pages refused the course's requests, so it leaves Part 74 and the 600 MHz band open.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 9: Craft
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "coil-label-and-run",
      title: "27 · Coil, label and run",
      section: "9 · Craft",
      recallContent: [
        {
          prompt: "Why must a 50-ohm Type N plug never meet a 75-ohm Type N jack?",
          answer: "Its larger male pin damages the 75-ohm female socket, though the two share a thread size (Rohde & Schwarz).",
        },
        {
          prompt: "What maximum radiated power does § 15.236 allow an unlicensed wireless mic in the TV broadcast bands?",
          answer: "50 mW EIRP; 20 mW in the 600 MHz guard band and duplex gap.",
        },
      ],
      body: `${QR}

**Where this sits.** *Knot-Tying & Rope Work* lesson "28 · Coiling cable over-under" teaches the method step by step, with the common mistakes. *Sound Craft* lesson "15 · The kit and the site survey" covers cable care from 1987 and 1989 Army texts: handle cable by the connector, coil it neatly and not too tight, tape floor runs. This lesson adds what a microphone maker and a university theater shop say, then labeling, then where cable may run.

**Why over-under.** Coil a cable the wrong way and it takes a spiral, so "when you pull it out straight, you will end up with a twisted mess." The method: draw back a loop with your thumb toward the connector, make the next loop with your thumb turned the opposite way, and alternate to the end. For very long cables, Tobias names the figure-8 as an alternative. To relax a badly coiled cable, lay it flat in the sun, but a surface that is too hot can damage it (Tobias, 2023).

Texas A&M's PerfTech shop says the same in its own words: "Wrap your cable using the over-under method," and "Roll the cable in your fingers to guide its natural twist." For cables 25 feet and longer, coils should be "about forearm length," secured with velcro. If a coil twists, back up and redo it, because forcing a cable into shape "can do as much damage as mistreating it did" (Moeller, 2014).

**A coil is also a bend, reasoned.** Lesson 3 gave Belden 1694A's minimum bend radius during installation, 2.75 inches (Belden, 2026a, p. 2), and lesson 14 gave the FOA's rule for fiber. A coil tighter than a cable's minimum bend radius bends the cable tighter than its maker allows, however neat it looks. Coil to the cable, not to the smallest loop your hands can make.

**Labeling: what the rules and makers mark.**

- Power cord: listed cord types must be "durably marked on the surface at intervals not exceeding 610 mm (24 in.) with the type designation, size, and number of conductors," and the grounded and equipment grounding conductors in a cord "shall be distinguishable from other conductors" (29 C.F.R. § 1910.305(g)(2)(i)). Lesson 22 read that print.
- Test records: where an assured equipment grounding conductor program is used, its test records may be kept "by means of logs, color coding, or other effective means" (29 C.F.R. § 1926.404(b)(1)(iii)(G)).
- powerCON is "Colour coded for easy identification": blue in, grey out (Neutrik, n.d.-a, p. 10).
- Neutrik's colored boots use a ten-color code by digit, the "10 resistor colors": 0 black, 1 brown, 2 red, 3 orange, 4 yellow, 5 green, 6 blue, 7 violet, 8 grey, 9 white (Neutrik, n.d.-a, p. 19).
- Lex's feeder is "banded every 2ft with heavy duty sealant type heat shrink" (LEX Innovations, n.d.-b), and Union Connector's panels carry "Laser engraved cam identifiers" (Union Connector, 2016).
- Fiber has its own jacket colors (lesson 11).

This course's practice: label both ends of every cable with what it is and where it goes. No maker or standards source read for this course states that rule, so treat it as this course's practice, not a cited rule.

**Runs: floors, exits and walkways.** OSHA's general industry rule says walking-working surfaces must be "kept in a clean, orderly, and sanitary condition" and "maintained free of hazards such as sharp or protruding objects" (29 C.F.R. § 1910.22(a)(1), (a)(3)). A hazard must be corrected before the surface is used; if it cannot be fixed at once, it "must be guarded to prevent employees from using the walking-working surface until the hazard is corrected" (§ 1910.22(d)(2)). Exits are stricter: "Exit routes must be free and unobstructed. No materials or equipment may be placed, either permanently or temporarily, within the exit route" (§ 1910.37(a)(3)). On construction sites, "Working spaces, walkways, and similar locations shall be kept clear of cords so as not to create a hazard to employees" (§ 1926.416(b)(2)).

*Light on Set* lesson 26 covers protecting cords at doorways and pinch points, and the ban on stapling them. Lesson 23 here adds that "No branch-circuit conductor may be laid on the floor."

**Ramps and the people who cross them.** The 2010 ADA Standards "apply to temporary and permanent buildings and facilities," and their advisory names stages, platforms and exhibit areas (U.S. Access Board, n.d., § 201.3 and Advisory 201.3). A change in level up to 1/4 inch may be vertical. From 1/4 to 1/2 inch it must be beveled, no steeper than 1:2. More than 1/2 inch "shall be ramped" (§§ 303.2 to 303.4), and a ramp's running slope may be "not steeper than 1:12" (§ 405.2).

Reasoned: a cable protector laid across an accessible route is a change in level, so those limits are the test of whether a wheelchair user can cross it. No Access Board or Justice Department page read for this course addresses cable protectors directly, and a vendor's "ADA compliant" label is not evidence.

:::reveal How does Tobias describe over-under coiling? ||| Draw back a loop with your thumb toward the connector, make the next loop with your thumb turned the opposite way, and alternate to the end (Tobias, 2023).

:::reveal How big should the coil be for a cable 25 feet or longer, according to PerfTech? ||| About forearm length, secured with velcro (Moeller, 2014).

:::reveal Can a cable run sit in an exit route if it is only temporary? ||| No. "No materials or equipment may be placed, either permanently or temporarily, within the exit route" (29 C.F.R. § 1910.37(a)(3)).

## Sources
- ${TOBIAS_2023} Locator: the spiral warning, the method, the figure-8 and the sun advice.
- ${MOELLER_2014} Locator: post text.
- ${BELDEN_1694A} Locator: p. 2, "Mechanical Characteristics".
- ${CFR_1910_305} Locator: paragraph (g)(2)(i).
- ${CFR_1926_404} Locator: paragraph (b)(1)(iii)(G).
- ${NEUTRIK_PG} Locator: p. 10, powerCON; p. 19, BSP accessory note.
- ${LEX_FBL305W} Locator: product description.
- ${UNION_2016} Locator: options and labeling list.
- ${CFR_1910_22} Locator: paragraphs (a)(1), (a)(3) and (d)(2).
- ${CFR_1910_37} Locator: paragraph (a)(3).
- ${CFR_1926_416} Locator: paragraph (b)(2).
- ${ACCESS_BOARD} Locator: § 201.3 and Advisory 201.3; §§ 303.2, 303.3, 303.4; § 405.2.`,
    },
    {
      slug: "test-then-find-the-fault",
      title: "28 · Test, then find the fault",
      section: "9 · Craft",
      recallContent: [
        {
          prompt: "What coil size does Texas A&M's PerfTech give for cables 25 feet and longer?",
          answer: "About forearm length, secured with velcro.",
        },
        {
          prompt: "What does 29 C.F.R. § 1910.37(a)(3) say about exit routes?",
          answer: "They must be free and unobstructed; no materials or equipment may be placed in them, permanently or temporarily.",
        },
      ],
      body: `${QR}

**A copper cable tester.** Rolls' CT 1 Cable Detective tests 1/4 inch TS and TRS, RCA, XLR and MIDI cables "for: opens, shorts, intermittents, and crossed wires." Its LEDs show continuity pin by pin: LED 1 for pin 1 (or ground), LED 2 for pin 2 (or tip), LED 3 for pin 3 (or ring). To test, plug in both ends and "wiggle the cable around at different points." If an LED "is off, or goes on and off - the cable is bad." The readout: no LEDs means a bad cord or a dead battery; one LED means shorted wires; three LEDs means a good TRS or XLR cord (Rolls, 2001).

**The words a tester uses.** Fluke Networks defines them for network cable (Fluke Networks, 2018):

| Fault | What it is |
|---|---|
| Open | "the DC signal doesn't reach the other end" |
| Short | "the signal crosses onto another conductor" |
| Reversed pair | A polarity reversal at one end, a "tip/ring reversal" |
| Crossed pair | A pair that lands on a different pair's position at the other end |
| Split pair | "pin to pin continuity is maintained but the physical pairs are separated" |

The split pair is the trap. Fluke: "a simple DC continuity test will still pass," while "a near end crosstalk test will fail" (Fluke Networks, 2018). The Fiber Optic Association (FOA) agrees: a split pair passes a DC wiremap, "some wiremappers which use only DC tests do not check crosstalk," and split pairs usually come from using punchdown color codes on jacks (Fiber Optic Association [FOA], 2021).

Reasoned from both: a continuity tester can pass a network cable that will still fail on a network. Every LED lit proves the pins connect; only a tester that checks crosstalk proves the pairs are pairs.

**Fiber: the power meter and the fault locator.** The FOA's testing page: "dB is for measuring loss, dBm is for measuring power." Multimode is generally tested at 850 nm (optionally 1300 nm) with LED sources, and single-mode at 1310 nm (optionally 1550 nm) with laser sources. Setting the "0 dB" reference "is critical to making good loss measurements." Its rule-of-thumb loss estimate is "(0.5 dB X # connectors) + (0.2 dB x # splices) + fiber loss on the total length of cable." A visual fault locator is a higher-power fiber tracer using a visible laser, "powerful enough for continuity checking or to trace fibers for several kilometers." And before you look: check connectors with a power meter, and check "that no power is present in the cable before you look at it in a microscope" (FOA, 2020). Lessons 13 to 15 cover cleaning, loss budgets and laser safety, and CREW-05's "22 · A fiber kit and a first lab" prices a fault locator and a cleaner.

**Power circuits are different.** "Only qualified persons may perform testing work on electric circuits or equipment," and test instruments must be inspected before use and rated for the circuit (29 C.F.R. § 1910.334(c)(1) to (3)). The testers in this lesson check signal cable that is not powered. Testing a power circuit is item 7 on lesson 24's stop list.

**The fault-finding order.** CREW-05's lesson "24 · Source, transport or receiver?" teaches the three places a fault can live and to take the cheapest evidence first. The FOA's published method for a fiber link says where to start measuring, and it is not the source. "Disconnect the fiber optic cable connector at the receiver, attach the power meter, and measure the power." If that is low, measure the transmitter: "If receiver power is low, but transmitter power is high, there is something wrong with the cables." Transmitter power can be measured with "a known good test jumper," and suspect cables "must be tested at every connection to isolate the bad cable(s) and or connectors." Before any of it: "If there is any question about the condition of the connectors, clean them before testing" (FOA, 2019). For a network link, troubleshooting "should always begin with checking power in the link"; then check the transmitter against its spec, swap in known-good transceivers, and only then troubleshoot loss in the cable plant (FOA, 2024).

The order, as those pages state it:

1. Clean any connector you have doubts about.
2. Measure at the receiver.
3. If the receiver is low, measure the transmitter, through a known-good test jumper.
4. If the transmitter is good and the receiver low, the fault is in the cables: test at every connection until you find it.

Source, cable and receiver are the three places a fault can live. The published fiber method sorts them by measuring at the receiver first, not by starting at the source.

Reasoned, for copper: swapping in a known-good cable is the copper version of the known-good test jumper. That is this course's analogy, not a quoted rule.

:::reveal What does a CT 1 showing one LED mean? ||| Shorted wires. No LEDs means a bad cord or a dead battery; three LEDs means a good TRS or XLR cord (Rolls, 2001).

:::reveal Why can a network cable pass a continuity test and still fail? ||| A split pair keeps pin-to-pin continuity, so a DC test passes, but the pairs are separated, so a near-end crosstalk test fails (Fluke Networks, 2018).

:::reveal Where does the FOA's link troubleshooting start measuring? ||| At the receiver. If receiver power is low, measure the transmitter; if the transmitter is good, test the cables at every connection (FOA, 2019).

## Sources
- ${ROLLS_2001} Locator: Introduction; LED descriptions; test instructions; "TEST INDICATORS".
- ${FLUKE_2018} Locator: the open, short, reversed, crossed and split pair definitions.
- ${FOA_2021} Locator: the split pair paragraphs.
- ${FOA_2020} Locator: "Fiber Optic Testing," the dB and dBm line, test wavelengths, the reference, the loss estimate, the VFL and the safety note.
- ${CFR_1910_334} Locator: paragraph (c)(1) to (3).
- ${FOA_2019} Locator: "Link Testing," the troubleshooting steps.
- ${FOA_2024} Locator: "Network Troubleshooting," the opening steps.`,
    },
    {
      slug: "capstone-ten-cables-on-camera",
      title: "29 · Capstone: the kit, a mock load-in, and ten cables on camera",
      section: "9 · Craft",
      recallContent: [
        {
          prompt: "What does Fluke Networks say about a split pair and a DC continuity test?",
          answer: "The DC continuity test still passes; a near-end crosstalk test fails.",
        },
        {
          prompt: "Where does the FOA's fiber link troubleshooting start measuring?",
          answer: "At the receiver; then the transmitter through a known-good jumper; then the cables at every connection.",
        },
      ],
      body: `> **Before release:** needs a practitioner: a recorded model-answer video.

**The kit.** No training body or union list of a crew cable kit turned up in the research for this course, so this is this course's own list, built from the lessons:

- A copper cable tester that shows continuity pin by pin for XLR and TRS, such as the Rolls CT 1 (lesson 28).
- A network tester that checks crosstalk, not only a DC wiremap, if Cat cable is in the kit (lesson 28).
- A fiber kit: a cleaner, a visual fault locator and spare patch cords (lessons 13 and 28; CREW-05, lesson 22).
- 75-ohm BNC terminators for reference and word clock chains, and 120-ohm DMX terminators (lessons 7, 18 and 25).
- Velcro ties for coils (Moeller, 2014), and labels and a marker (lesson 27).
- A plug-in GFCI or a GFCI cord set where installed protection is not present. The CPSC says portable GFCIs are for places where installed ones are not practical, and OSHA accepts a GFCI cord set "connected to the receptacle closest to the source of power" (U.S. Consumer Product Safety Commission [CPSC], n.d.-a, p. 2; 29 C.F.R. § 1910.304(b)(3)(ii)(A), Note 2).

Cam turnaround and gender adapters are not on the list. Lesson 22 explains why they belong to the person responsible for the distribution.

**A mock load-in.** This is an invented walk-through with no real venue or people in it. Read each beat, decide your call, then reveal the answer.

**Beat 1: the long camera run.** A camera position needs 12G-SDI to the truck, about 90 meters away. The coax on the cart is Belden 1694A.

:::reveal What is your call on 90 meters of 1694A at 12G? ||| Flag it. Belden does not list 12G for 1694A, and the two 12G reaches published for it with a named receiver are 70 m (AJA) and 80 m (Semtech) (lessons 3 and 5). Read the cable and receiver sheets at that rate, and ask the engineer about a lower-loss cable or fiber.

**Beat 2: one more word clock cable.** The audio rack's word clock chain needs one more cable, and the only BNC cable in the spares bin came from a computer store.

:::reveal What is your call on the computer-store BNC cable? ||| Do not use it until you know its impedance. RME says computer stores usually carry 50-ohm BNC parts, while word clock wants 75-ohm cable and one 75-ohm termination at the end of the chain (lesson 18).

**Beat 3: DMX from a mic cable.** Lighting asks for a DMX run, and a 3-pin microphone cable is the closest thing at hand.

:::reveal What is your call on a mic cable for DMX? ||| It is the wrong cable. ENTTEC says mic cable often works on a short, simple rig but causes intermittent faults; use 120-ohm data cable and terminate only the last fixture (lessons 17 and 25).

**Beat 4: a spare intercom line.** A free 3-pin XLR from the party-line intercom is lying by the mixer, and someone wants to patch it into a mixer input.

:::reveal What is your call on patching the party-line into the mixer? ||| No. Clear-Com's party-line puts +30 V DC on pin 2, and Clear-Com says balanced audio and party-line are not compatible without an interface (lesson 17).

**Beat 5: the stage box link.** The Dante stage box needs a link to the console 130 meters away, over Cat6.

:::reveal What is your call on 130 meters of Cat6? ||| It is past the 100-meter channel Fluke Networks gives for twisted pair, cords included. Ask the engineer about fiber (lessons 19 and 20).

**Beat 6: the feeder.** The cam feeder from the generator has a turnaround adapter in the run, and the generator is running.

:::reveal What is your call on the turnaround in the live feeder? ||| Stop, keep clear, and call the person responsible for the distribution. Cam connections are made and broken dead by a qualified person, and a turnaround can let a hot reach the wrong socket (lessons 22 and 24).

**Beat 7: the shortcut.** The quickest path for the audio snake runs along the exit corridor.

:::reveal What is your call on the exit corridor? ||| Find another path. "No materials or equipment may be placed, either permanently or temporarily, within the exit route" (29 C.F.R. § 1910.37(a)(3); lesson 27).

**Beat 8: no picture.** At line-up, a fiber link from a converter to the truck shows no picture.

:::reveal Where do you start on the dead fiber link? ||| Clean any doubtful connector, then measure at the receiver; if it is low, measure the transmitter through a known-good jumper; if that is good, test the cables at every connection. Never look into a fiber end (lessons 15 and 28).

**The capstone, on video.** Gather ten cables from a real kit, unplugged from everything. A good set covers the course: a 75-ohm BNC video coax, a 50-ohm BNC or Type N RF cable, an XLR microphone cable, a 5-pin DMX cable, a 4-pin headset or intercom cable, a Cat6 or Cat6A cable (with etherCON if you have one), a fiber patch cord with its dust caps on, a USB cable, a power cord, and a powerCON cable. Then film yourself with each one in turn. For each cable, say aloud:

1. What it is and what it carries.
2. The connector on each end, and why that connector.
3. Its impedance, category or type, read from the jacket print, the label or the maker's sheet, or say that the cable does not tell you.
4. How far it can run, or which sheet would tell you.
5. What must never be plugged into it.

Then test it on the right tester and say what the tester shows: wiggle a copper cable at several points as Rolls says (lesson 28). Do not power-test the power cords; read their jacket print instead, because testing electric circuits is for qualified persons (lesson 24). Do not look into the fiber; name its connector and polish from the outside (lesson 12). Finish each cable by coiling it over-under to forearm length and securing it with velcro (lesson 27).

You pass when all ten are named correctly, each of the five questions is answered for each cable, every copper signal cable is tested on camera, and every coil lies flat with no twist when you shake it out.

:::reveal Which cables in the capstone set are never tested on camera, and why? ||| The power cords: testing electric circuits is for qualified persons, so read their jacket print instead. The fiber is inspected from the outside, never looked into.

## Sources
- ${ROLLS_2001} Locator: test instructions and "TEST INDICATORS".
- ${MOELLER_2014} Locator: post text, coil size and velcro.
- ${CPSC_GFCI} Locator: p. 2, "Portable".
- ${CFR_1910_304} Locator: paragraph (b)(3)(ii)(A), Note 2.
- ${CFR_1910_37} Locator: paragraph (a)(3).
- ${CFR_1910_334} Locator: paragraph (c)(1).
- ${BELDEN_1694A} Locator: p. 1, "Suitable Applications".
- ${AJA_12GDA} Locator: specifications, cable equalization by rate.
- ${SEMTECH} Locator: product description, reach on Belden 1694A.
- ${RME_ADI648} Locator: p. 17, section 9.2 "Cabling and Termination".
- ${ENTTEC_2026} Locator: page text, the short-rig exception and advice for new runs.
- ${CLEARCOM_XLR_DIFF} Locator: answer text.
- ${FLUKE_2016} Locator: the channel definition.
- ${LEX_2020} Locator: pp. 6 to 7.
- ${FOA_2019} Locator: "Link Testing".`,
    },
    {
      slug: "section-9-quiz",
      title: "Section 9 quiz · Craft",
      section: "9 · Craft",
      body: "A graded check on over-under coiling, labeling, cable runs and ramps; cable testers, fiber test tools and the fault-finding order; and the capstone's kit, mock load-in and on-camera task. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which lesson does lesson 27 link for the step-by-step over-under method?", options: ["Knot-Tying, lesson 28", "Sound Craft, lesson 15", "Light on Set, lesson 26", "Arena transmission, 22"], correctIndex: 0, explanation: "Knot-Tying & Rope Work, \"28 · Coiling cable over-under,\" teaches the method step by step; Sound Craft lesson 15 covers cable care.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What does Tobias say a wrongly coiled cable becomes when pulled straight?", options: ["A tidy flat line", "A twisted mess", "A shorter cable", "A tangle-free run"], correctIndex: 1, explanation: "Tobias (2023): \"when you pull it out straight, you will end up with a twisted mess.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "In Tobias's method, how does each loop differ from the one before?", options: ["It is twice the size", "It goes around a knee", "The thumb turns over", "It wraps on the elbow"], correctIndex: 2, explanation: "Tobias (2023): make the next loop with the thumb turned the opposite way, and alternate to the end.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What alternative does Tobias name for very long cables?", options: ["The elbow wrap", "The overhand coil", "The single loop", "The figure-8"], correctIndex: 3, explanation: "Tobias (2023) names the figure-8 for very long cables.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "How does Tobias say to relax a badly coiled cable?", options: ["Lay it flat in the sun", "Hang it from a hook", "Soak it in warm water", "Freeze it overnight"], correctIndex: 0, explanation: "Tobias (2023): lay it flat in the sun, on a surface that is not too hot.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What caution does Tobias add about relaxing a cable in the sun?", options: ["Sunlight fades the label", "Too hot a surface harms it", "It voids any warranty", "It takes a full week"], correctIndex: 1, explanation: "Tobias (2023): a surface that is too hot can damage the cable.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What does PerfTech say to roll in your fingers while coiling?", options: ["The connector's latch", "The velcro tie's tail", "The cable's natural twist", "The jacket's printed label"], correctIndex: 2, explanation: "Moeller (2014): \"Roll the cable in your fingers to guide its natural twist.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What coil size does PerfTech give for cables 25 feet and longer?", options: ["Fist size", "Plate size", "Hand width", "Forearm length"], correctIndex: 3, explanation: "Moeller (2014): coils \"about forearm length,\" secured with velcro.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What does PerfTech say to secure coils with?", options: ["Velcro", "Tape", "Wire", "Knots"], correctIndex: 0, explanation: "Moeller (2014): secure coils with velcro.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What does PerfTech say to do if a coil twists?", options: ["Force it flat", "Back up and redo it", "Tape the twist", "Leave it for now"], correctIndex: 1, explanation: "Moeller (2014): if a coil twists, back up and redo it.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "Why does PerfTech warn against forcing a cable into shape?", options: ["It voids the warranty", "It slows the load-out", "It harms it like misuse", "It loosens the plugs"], correctIndex: 2, explanation: "Moeller (2014): forcing a cable into shape \"can do as much damage as mistreating it did.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "By lesson 27's reasoning, why is a very tight coil a problem?", options: ["It adds weight to cases", "It looks untidy on carts", "It wastes velcro ties", "It overbends the cable"], correctIndex: 3, explanation: "A coil tighter than a cable's minimum bend radius bends it tighter than its maker allows, however neat it looks.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What minimum installation bend radius does lesson 27 recall for Belden 1694A?", options: ["2.75 inches", "6 inches", "1 inch", "12 inches"], correctIndex: 0, explanation: "Belden (2026a, p. 2): 2.75 in (69.9 mm) during installation.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What three things must a listed cord's jacket print give, per OSHA?", options: ["Maker, date and price", "Type, size and conductors", "Voltage, color and length", "Owner, show and venue"], correctIndex: 1, explanation: "29 C.F.R. § 1910.305(g)(2)(i): the type designation, size, and number of conductors.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What does OSHA say about a cord's grounded and grounding conductors?", options: ["They must be bare wire", "They must be the same color", "They must be distinguishable", "They must be in separate cords"], correctIndex: 2, explanation: "29 C.F.R. § 1910.305(g)(2)(i): they \"shall be distinguishable from other conductors.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "How may assured-program test records be kept, per OSHA?", options: ["Only on signed paper forms", "Only in an online database", "Only by the cord's maker", "Logs, color coding or similar"], correctIndex: 3, explanation: "29 C.F.R. § 1926.404(b)(1)(iii)(G): \"by means of logs, color coding, or other effective means.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What does Neutrik say powerCON's colors are for?", options: ["Easy identification", "Voltage rating", "Country of sale", "Cable length"], correctIndex: 0, explanation: "Neutrik (n.d.-a, p. 10): \"Colour coded for easy identification,\" blue in and grey out.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "In Neutrik's ten-color boot code, which color is digit 2?", options: ["Brown", "Red", "Orange", "Blue"], correctIndex: 1, explanation: "Neutrik (n.d.-a, p. 19): 0 black, 1 brown, 2 red, 3 orange, 4 yellow, 5 green, 6 blue.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "In Neutrik's boot code, which color is digit 0?", options: ["White", "Grey", "Black", "Brown"], correctIndex: 2, explanation: "Neutrik (n.d.-a, p. 19): 0 is black; 9 is white and 8 grey.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "In Neutrik's boot code, which digit is blue?", options: ["3", "8", "5", "6"], correctIndex: 3, explanation: "Neutrik (n.d.-a, p. 19): 6 is blue; 5 green, 8 grey, 3 orange.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "How often does Lex band its feeder, and with what?", options: ["Every 2 ft, with heat shrink", "Every 10 ft, with tape", "Every 6 ft, with paint", "Only at each end, with tags"], correctIndex: 0, explanation: "LEX Innovations (n.d.-b): \"banded every 2ft with heavy duty sealant type heat shrink.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "How does Union Connector mark the cams on its panels?", options: ["Hand-painted letters", "Laser engraved identifiers", "Printed paper stickers", "Colored zip ties only"], correctIndex: 1, explanation: "Union Connector (2016): \"Laser engraved cam identifiers.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What is the status of \"label both ends of every cable\" in lesson 27?", options: ["An OSHA requirement", "A rule in Neutrik's guide", "This course's practice", "A rule in NEC Article 400"], correctIndex: 2, explanation: "No maker or standards source read for the course states it, so it is taught as this course's practice.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What does OSHA say walking-working surfaces must be kept free of?", options: ["Signs, posters and labels", "Rugs, carpets and mats", "Dust, pollen and lint", "Sharp or protruding objects"], correctIndex: 3, explanation: "29 C.F.R. § 1910.22(a)(3): \"free of hazards such as sharp or protruding objects.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What does OSHA say to do with a surface hazard that cannot be fixed at once?", options: ["Guard it until it is fixed", "Leave it, and tell no one", "Mark it in the show report", "Fix it after the show"], correctIndex: 0, explanation: "29 C.F.R. § 1910.22(d)(2): it \"must be guarded to prevent employees from using the walking-working surface until the hazard is corrected.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "Can equipment sit in an exit route if only temporarily, per OSHA?", options: ["Yes, during load-in", "No, not even briefly", "Yes, with a sign", "Yes, if under 1 hour"], correctIndex: 1, explanation: "29 C.F.R. § 1910.37(a)(3): nothing may be placed \"either permanently or temporarily, within the exit route.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What does the construction rule say about cords and walkways?", options: ["Tape them down flat", "Paint them bright yellow", "Keep the walkways clear", "Run them under the rugs"], correctIndex: 2, explanation: "29 C.F.R. § 1926.416(b)(2): walkways \"shall be kept clear of cords so as not to create a hazard to employees.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "Do the 2010 ADA Standards apply to temporary facilities?", options: ["No, only to permanent ones", "Only to outdoor events", "Only to sports arenas", "Yes, to temporary ones too"], correctIndex: 3, explanation: "U.S. Access Board (n.d., § 201.3): they \"apply to temporary and permanent buildings and facilities.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "Up to what height may a change in level be vertical under § 303?", options: ["1/4 inch", "1/2 inch", "1 inch", "2 inches"], correctIndex: 0, explanation: "U.S. Access Board (n.d., § 303.2): up to 1/4 inch may be vertical.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What must a change in level from 1/4 to 1/2 inch be, per § 303?", options: ["Ramped at 1:12 or less", "Beveled no steeper than 1:2", "Left vertical and marked", "Covered with a rubber mat"], correctIndex: 1, explanation: "U.S. Access Board (n.d., § 303.3): beveled, no steeper than 1:2.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What must a change in level of more than 1/2 inch be?", options: ["Beveled at 1:2", "Painted to show", "Ramped per § 405", "Left as vertical"], correctIndex: 2, explanation: "U.S. Access Board (n.d., § 303.4): more than 1/2 inch \"shall be ramped.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What running slope does § 405.2 allow for a ramp?", options: ["No steeper than 1:2", "No steeper than 1:8", "No steeper than 1:4", "No steeper than 1:12"], correctIndex: 3, explanation: "U.S. Access Board (n.d., § 405.2): \"not steeper than 1:12.\"", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "By lesson 27's reasoning, what is a cable protector across an accessible route?", options: ["A change in level", "A ramp by definition", "Exempt from the ADA", "A form of signage"], correctIndex: 0, explanation: "A cable protector is a change in level, so the § 303 limits test whether a wheelchair user can cross it. No Access Board page read addresses protectors directly.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "Which faults does Rolls say the CT 1 tests for?", options: ["Impedance and return loss", "Opens, shorts, intermittents", "Crosstalk and split pairs", "Phantom and PoE voltage"], correctIndex: 1, explanation: "Rolls (2001): \"opens, shorts, intermittents, and crossed wires.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "Which cable types does Rolls list for the CT 1?", options: ["Cat6, Cat6A and fiber", "BNC, N and SMA coax", "TS, TRS, RCA, XLR and MIDI", "Cam, stage pin, powerCON"], correctIndex: 2, explanation: "Rolls (2001): 1/4 inch TS and TRS, RCA, XLR and MIDI.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "On the CT 1, what does LED 2 show?", options: ["Pin 1 or ground", "Pin 3 or ring", "The battery level", "Pin 2 or tip"], correctIndex: 3, explanation: "Rolls (2001): LED 1 pin 1 (or ground), LED 2 pin 2 (or tip), LED 3 pin 3 (or ring).", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What does Rolls say to do to the cable during a test?", options: ["Wiggle it at several points", "Hold it perfectly still", "Coil it tightly first", "Plug in one end only"], correctIndex: 0, explanation: "Rolls (2001): plug in both ends and \"wiggle the cable around at different points.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "On the CT 1, what does an LED that goes on and off mean?", options: ["A good cable", "A bad cable", "A low battery", "A shielded cable"], correctIndex: 1, explanation: "Rolls (2001): if an LED \"is off, or goes on and off - the cable is bad.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "On the CT 1, what does one LED lit mean?", options: ["A good cord", "A dead battery", "Shorted wires", "An open shield"], correctIndex: 2, explanation: "Rolls (2001): one LED means shorted wires.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "On the CT 1, what do three LEDs mean on an XLR cord?", options: ["Shorted wires", "A dead battery", "A crossed pair", "A good cord"], correctIndex: 3, explanation: "Rolls (2001): three LEDs means a good TRS or XLR cord.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "On the CT 1, what can no LEDs at all mean?", options: ["Bad cord or dead battery", "A perfect, shielded cable", "A split pair in the cord", "Phantom power on the line"], correctIndex: 0, explanation: "Rolls (2001): no LEDs means a bad cord or a dead battery.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "How does Fluke define an open?", options: ["The signal crosses to another wire", "The DC signal doesn't reach the end", "A pair lands on another pair", "Polarity reverses at one end"], correctIndex: 1, explanation: "Fluke Networks (2018): an open is when \"the DC signal doesn't reach the other end.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "How does Fluke define a short?", options: ["Polarity reverses at one end", "The DC signal stops partway", "The signal crosses to another wire", "Pairs separate along the run"], correctIndex: 2, explanation: "Fluke Networks (2018): a short is when \"the signal crosses onto another conductor.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What is a reversed pair, per Fluke?", options: ["A pair on another pair's pins", "Two wires touching each other", "A wire that never arrives", "A tip/ring polarity reversal"], correctIndex: 3, explanation: "Fluke Networks (2018): a polarity reversal at one end, a \"tip/ring reversal.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What is a crossed pair, per Fluke?", options: ["A pair on another pair's pins", "A tip/ring polarity reversal", "Two wires touching each other", "A wire that never arrives"], correctIndex: 0, explanation: "Fluke Networks (2018): a pair that lands on a different pair's position at the other end.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What is a split pair, per Fluke?", options: ["A single wire broken in two", "Continuity kept, pairs split", "A pair landed on two jacks", "A short between two pairs"], correctIndex: 1, explanation: "Fluke Networks (2018): \"pin to pin continuity is maintained but the physical pairs are separated.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "Which test does a split pair pass?", options: ["Near-end crosstalk", "Return loss", "DC continuity", "Insertion loss"], correctIndex: 2, explanation: "Fluke Networks (2018): \"a simple DC continuity test will still pass.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "Which test does a split pair fail?", options: ["DC continuity", "LED wiremap", "Pin-to-pin", "Near-end crosstalk"], correctIndex: 3, explanation: "Fluke Networks (2018): \"a near end crosstalk test will fail.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What does the FOA say usually causes split pairs?", options: ["Punchdown color codes on jacks", "Cable longer than 100 meters", "Overtight velcro on coils", "Phantom power on the pair"], correctIndex: 0, explanation: "FOA (2021): split pairs are usually caused by using punchdown color codes on jacks.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "By lesson 28's reasoning, what does every LED lit prove on a network cable?", options: ["The pairs are pairs", "The pins connect", "It passes crosstalk", "It runs 10 gigabit"], correctIndex: 1, explanation: "Continuity proves the pins connect; only a crosstalk test proves the pairs are pairs.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What does the FOA say dBm measures?", options: ["Loss", "Length", "Power", "Bend"], correctIndex: 2, explanation: "FOA (2020): \"dB is for measuring loss, dBm is for measuring power.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "At what wavelength does the FOA say multimode is generally tested?", options: ["1310 nm", "1550 nm", "650 nm", "850 nm"], correctIndex: 3, explanation: "FOA (2020): multimode at 850 nm (optionally 1300 nm) with LED sources.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "At what wavelength does the FOA say single-mode is generally tested?", options: ["1310 nm", "850 nm", "1300 nm", "650 nm"], correctIndex: 0, explanation: "FOA (2020): single-mode at 1310 nm (optionally 1550 nm) with laser sources.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What does the FOA call critical to good loss measurements?", options: ["A very long test cord", "Setting the 0 dB reference", "A visible red laser", "Testing in a dark room"], correctIndex: 1, explanation: "FOA (2020): setting the \"0 dB\" reference \"is critical to making good loss measurements.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What does the FOA's rule of thumb allow per connector?", options: ["0.2 dB", "3 dB", "0.5 dB", "1 dB"], correctIndex: 2, explanation: "FOA (2020): \"(0.5 dB X # connectors) + (0.2 dB x # splices) + fiber loss.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What does the FOA's rule of thumb allow per splice?", options: ["0.5 dB", "1 dB", "0.05 dB", "0.2 dB"], correctIndex: 3, explanation: "FOA (2020): 0.2 dB per splice, 0.5 dB per connector.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What does the FOA say a visual fault locator can do?", options: ["Trace fibers for kilometers", "Measure loss in dB", "Clean a ferrule end", "Set the 0 dB reference"], correctIndex: 0, explanation: "FOA (2020): \"powerful enough for continuity checking or to trace fibers for several kilometers.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What does the FOA say to check before looking at a fiber in a microscope?", options: ["The polish type", "That no power is present", "The jacket color", "The connector's age"], correctIndex: 1, explanation: "FOA (2020): check \"that no power is present in the cable before you look at it in a microscope.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "Who may perform testing work on electric circuits, per OSHA?", options: ["Any crew member", "The show's producer", "Only qualified persons", "Anyone with a tester"], correctIndex: 2, explanation: "29 C.F.R. § 1910.334(c)(1): \"Only qualified persons may perform testing work on electric circuits or equipment.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What must test instruments be before use on a circuit, per OSHA?", options: ["Calibrated yearly", "Bought new", "Battery powered", "Inspected and rated"], correctIndex: 3, explanation: "29 C.F.R. § 1910.334(c)(2) and (3): inspected before use and rated for the circuit.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "Which CREW-05 lesson teaches the source, transport or receiver sort?", options: ["Lesson 24", "Lesson 20", "Lesson 12", "Lesson 9"], correctIndex: 0, explanation: "CREW-05's \"24 · Source, transport or receiver?\" teaches the sort and cheapest evidence first.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "Where does the FOA's link troubleshooting start measuring?", options: ["At the transmitter", "At the receiver", "At the patch panel", "At the midpoint"], correctIndex: 1, explanation: "FOA (2019): \"disconnect the fiber optic cable connector at the receiver, attach the power meter, and measure the power.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "If receiver power is low and transmitter power high, what does the FOA say is wrong?", options: ["The receiver", "The transmitter", "The cables", "The power meter"], correctIndex: 2, explanation: "FOA (2019): \"there is something wrong with the cables.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What does the FOA say to measure transmitter power with?", options: ["A visual fault locator", "An inspection microscope", "The receiver's own meter", "A known-good test jumper"], correctIndex: 3, explanation: "FOA (2019): transmitter power can be measured with \"a known good test jumper.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "Where does the FOA say suspect cables must be tested?", options: ["At every connection", "At the far end only", "At the source only", "At the midpoint only"], correctIndex: 0, explanation: "FOA (2019): suspect cables \"must be tested at every connection to isolate the bad cable(s) and or connectors.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What does the FOA say to do with connectors you have doubts about?", options: ["Replace them all", "Clean them first", "Look into them", "Tape them over"], correctIndex: 1, explanation: "FOA (2019): \"If there is any question about the condition of the connectors, clean them before testing.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "Where does the FOA say network troubleshooting should always begin?", options: ["Swapping cables", "Checking the switch logs", "Checking power in the link", "Cleaning every connector"], correctIndex: 2, explanation: "FOA (2024): it \"should always begin with checking power in the link.\"", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "Why is the capstone's kit list labeled as this course's own?", options: ["OSHA published it", "A union local wrote it", "ETCP requires every item", "No published list was found"], correctIndex: 3, explanation: "No training body or union kit list turned up in the research, so the course builds its own from the lessons.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Which network tester does the kit call for if Cat cable is in it?", options: ["One that checks crosstalk", "One with a DC wiremap only", "One that measures dBm", "One that tests phantom"], correctIndex: 0, explanation: "A DC wiremap misses split pairs, so the kit asks for a tester that checks crosstalk (lesson 28).", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Which terminators does the capstone kit list?", options: ["50-ohm BNC and 110-ohm XLR", "75-ohm BNC and 120-ohm DMX", "100-ohm RJ45 and 75-ohm N", "200-ohm intercom and 50-ohm SMA"], correctIndex: 1, explanation: "75-ohm BNC terminators for reference and word clock, and 120-ohm DMX terminators (lessons 7, 18 and 25).", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "When does the kit call for a plug-in GFCI or GFCI cord set?", options: ["On every circuit, always", "Only on 240 V circuits", "Where no installed GFCI exists", "Only outdoors after dark"], correctIndex: 2, explanation: "CPSC (n.d.-a, p. 2): portable GFCIs are for places where installed ones are not practical; OSHA accepts a GFCI cord set at the receptacle closest to the source.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Why are cam turnaround adapters left off the capstone kit?", options: ["They weigh too much", "They cost too much", "OSHA bans them outright", "The distro's owner holds them"], correctIndex: 3, explanation: "Lesson 22: turnarounds belong to the person responsible for the distribution.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In beat 1, which published 12G reaches does the capstone cite for 1694A?", options: ["70 m (AJA), 80 m (Semtech)", "100 m (Belden), 140 m (Canare)", "44 m and 65 m (Canare US)", "30 m and 50 m (SMPTE)"], correctIndex: 0, explanation: "AJA's 12GDA quotes 70 m and Semtech's GS12341 80 m on 1694A at 12G (lesson 5).", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "What is the call in beat 1, 90 meters of 1694A at 12G?", options: ["Run it, since 1694A suits 12G", "Flag it and ask the engineer", "Add a 50-ohm barrel to boost it", "Run it if the picture appears"], correctIndex: 1, explanation: "Belden does not list 12G for 1694A, and 90 m is past both published receiver figures. Flag it and ask about lower-loss cable or fiber.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In beat 2, why not use the computer-store BNC cable for word clock?", options: ["It is too long", "It has no shield", "It is likely 50 ohms", "It carries phantom"], correctIndex: 2, explanation: "RME (n.d., p. 17): computer stores usually carry 50-ohm BNC parts; word clock wants 75 ohms.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In beat 3, what is the call on a mic cable for DMX?", options: ["Fine at any length", "Fine if it is terminated", "Fine for one fixture only", "Wrong, use 120-ohm cable"], correctIndex: 3, explanation: "ENTTEC (2026): mic cable often works on a short simple rig but is the wrong cable and fails intermittently.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In beat 4, why may the party-line not be patched into the mixer?", options: ["It has +30 V DC on pin 2", "It uses a 4-pin connector", "It runs at 110 ohms only", "It is wired for DMX data"], correctIndex: 0, explanation: "Clear-Com's party-line puts +30 V DC on pin 2 and is not compatible with balanced audio without an interface (lesson 17).", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In beat 5, what is wrong with 130 meters of Cat6?", options: ["Cat6 cannot carry Dante", "It is past the 100 m channel", "Cat6 needs etherCON ends", "Dante runs only on coax"], correctIndex: 1, explanation: "Fluke Networks (2016): the channel should not exceed 100 meters, cords included.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In beat 6, what do you do about the turnaround in the live feeder?", options: ["Pull it out very quickly", "Reverse it where it sits", "Stop and call the distro owner", "Tape over the whole joint"], correctIndex: 2, explanation: "Cam connections are made and broken dead by a qualified person, and a turnaround can let a hot reach the wrong socket (lessons 22 and 24).", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In beat 7, why can the snake not run along the exit corridor?", options: ["Snakes need ramps", "Corridors are too long", "It needs a GFCI", "Exit routes stay clear"], correctIndex: 3, explanation: "29 C.F.R. § 1910.37(a)(3): no materials or equipment in an exit route, permanently or temporarily.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In beat 8, after cleaning doubtful connectors, where do you start on the dead fiber link?", options: ["Measure at the receiver", "Swap the camera first", "Look into the fiber end", "Measure at the source"], correctIndex: 0, explanation: "FOA (2019): measure at the receiver, then the transmitter, then the cables at every connection.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Where must the capstone's ten cables be during filming?", options: ["Live, to show they work", "Unplugged from everything", "Coiled on a reel", "Plugged into a tester"], correctIndex: 1, explanation: "The capstone asks for ten cables unplugged from everything.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Which cable is not in the capstone's suggested set of ten?", options: ["A 5-pin DMX cable", "A USB cable", "A cam feeder", "A powerCON cable"], correctIndex: 2, explanation: "The set includes DMX, USB and powerCON cables, but no cam feeder.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "How many questions must you answer aloud for each capstone cable?", options: ["Two", "Three", "Ten", "Five"], correctIndex: 3, explanation: "Five: what it is, its connectors, its impedance or category, its reach, and what must never plug into it.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In the capstone, what is the first thing you say about each cable?", options: ["What it is and carries", "Its price and maker", "Who last used it", "Its date of purchase"], correctIndex: 0, explanation: "First, what it is and what it carries.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Where does the capstone tell you to read a cable's impedance or category?", options: ["From its connector's color", "From the jacket print or label", "From its weight in the hand", "From its coiled length"], correctIndex: 1, explanation: "From the jacket print, the label or the maker's sheet, or say that the cable does not tell you.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In the capstone, how do you handle the power cords?", options: ["Test them on a live outlet", "Use the CT 1 on them", "Read their print, no test", "Skip them entirely"], correctIndex: 2, explanation: "Read their jacket print; testing electric circuits is for qualified persons (lesson 24).", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In the capstone, how do you handle the fiber patch cord?", options: ["Look into it under light", "Shine the VFL at your eye", "Remove its dust caps", "Inspect it from outside"], correctIndex: 3, explanation: "Name its connector and polish from the outside, dust caps on; never look into it (lessons 12 and 15).", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "How do you test a copper cable in the capstone?", options: ["Wiggle it on the tester", "Plug it into the console", "Bend it to its radius", "Measure it with a tape"], correctIndex: 0, explanation: "On the right tester, wiggling it at several points as Rolls says (lesson 28).", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "How is each capstone cable finished?", options: ["Wrapped around an elbow", "Coiled over-under, velcroed", "Folded flat and taped", "Wound on a cable reel"], correctIndex: 1, explanation: "Coiled over-under to forearm length and secured with velcro (lesson 27).", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "What does a passing coil do when shaken out, per the capstone?", options: ["Springs back to a coil", "Knots once in the middle", "Lies flat with no twist", "Spirals into loops"], correctIndex: 2, explanation: "The pass standard: every coil lies flat with no twist when you shake it out.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Which cables does the capstone say are never power-tested on camera?", options: ["The XLR mic cables", "The DMX data cables", "The Cat6 patch cables", "The power cords"], correctIndex: 3, explanation: "Power cords are read, not tested, because testing electric circuits is for qualified persons.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Why are power cords not tested in the capstone?", options: ["Circuit tests are for the qualified", "They cannot carry any signal", "The CT 1 has no power socket", "They are too heavy to wiggle"], correctIndex: 0, explanation: "29 C.F.R. § 1910.334(c)(1): only qualified persons may test electric circuits.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In the capstone, what must you say about how far a cable runs?", options: ["It is always 100 meters", "Its reach, or which sheet says", "Nothing, reach is not asked", "Only its length in feet"], correctIndex: 1, explanation: "Question 4: how far it can run, or which sheet would tell you.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "What is the fifth thing said about each capstone cable?", options: ["Who owns it now", "Its jacket color", "What never goes in it", "Its weight in pounds"], correctIndex: 2, explanation: "Question 5: what must never be plugged into it.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Which beat in the mock load-in is about word clock?", options: ["Beat 1", "Beat 4", "Beat 6", "Beat 2"], correctIndex: 3, explanation: "Beat 2: one more word clock cable from the spares bin.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Which beat in the mock load-in is about the exit corridor?", options: ["Beat 7", "Beat 3", "Beat 5", "Beat 8"], correctIndex: 0, explanation: "Beat 7: the shortcut along the exit corridor.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "What does the capstone say about the mock load-in's venue and people?", options: ["They are real and named", "They are invented", "They are a CREW-05 arena", "They are from a union"], correctIndex: 1, explanation: "It is an invented walk-through with no real venue or people in it.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Which kit item does the capstone tie to lesson 27?", options: ["The GFCI cord set", "The fiber cleaner", "Labels and a marker", "The DMX terminator"], correctIndex: 2, explanation: "Labels and a marker come from lesson 27's labeling practice.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Which cable in the capstone set keeps its dust caps on?", options: ["The USB cable", "The power cord", "The XLR mic cord", "The fiber cord"], correctIndex: 3, explanation: "The fiber patch cord stays capped and is inspected from the outside.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-quiz",
      title: "Final quiz · Cables and Connectors",
      section: "Final assessment",
      body: "Ten questions drawn from the whole course, from impedance and SDI to power, control lines and the craft of coiling, testing and fault-finding. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          { prompt: "In this course, which impedance does video coax use?", options: ["75 ohms", "50 ohms", "110 ohms", "100 ohms"], correctIndex: 0, explanation: "Coaxicom (2015): 75 ohms for video, 50 ohms mainly for data. Lesson 1.", sourceLessonSlug: "what-a-cable-carries" },
          { prompt: "What does a 50-ohm BNC part do in a 75-ohm video line?", options: ["It cannot be mated", "It fits, and reflects", "It shorts the signal", "It makes no difference"], correctIndex: 1, explanation: "DDK says the two intermate, and a mismatch reflects signal back toward the sender. Lesson 2.", sourceLessonSlug: "it-fits-and-it-reflects" },
          { prompt: "As frequency rises, what happens to a coax's loss per 100 feet?", options: ["It falls", "It holds", "It rises", "It halves"], correctIndex: 2, explanation: "Coaxicom (2015): attenuation \"increases as frequency increases.\" Lesson 3.", sourceLessonSlug: "loss-shielding-and-the-spec-sheet" },
          { prompt: "Which SMPTE standard defines 12G-SDI on coax?", options: ["ST 292-1", "ST 424", "ST 259", "ST 2082-1"], correctIndex: 3, explanation: "SMPTE (2018): ST 2082-1. ST 292-1 is HD-SDI, ST 424 3G, ST 259 SD. Lesson 4.", sourceLessonSlug: "sdi-on-coax-and-the-bnc" },
          { prompt: "What decides how far an SDI signal really runs, per Canare's warning?", options: ["The receiver's equalization", "The color of the BNC boot", "The camera's frame rate", "The cable's jacket print"], correctIndex: 0, explanation: "Canare (n.d.-d): actual distances depend on the equalized distance of the receiver. Lesson 5.", sourceLessonSlug: "how-far-sdi-runs" },
          { prompt: "Past a few meters at Ultra High Speed, what does HDMI LA say is likely needed?", options: ["A thicker passive cable", "Active, powered cables", "A 75-ohm coax adapter", "A shielded RJ45 cable"], correctIndex: 1, explanation: "HDMI LA (n.d.): powered, active HDMI cables are likely the only way to meet Ultra High Speed requirements beyond a few meters. Lesson 6.", sourceLessonSlug: "hdmi-and-displayport-where-they-stop" },
          { prompt: "What kinds of reference does Sony's CCU accept on REFERENCE IN?", options: ["LTC and word clock signals", "PTP and NTP network time", "Tri-level sync, black burst", "Genlock carried over HDMI"], correctIndex: 2, explanation: "Sony Corporation (2017): HD tri-level sync and SD black burst, both at 75 ohms. Lesson 7.", sourceLessonSlug: "reference-timecode-and-return-video" },
          { prompt: "Which three jobs does Sony give a CCU?", options: ["Recording, editing, playout", "Routing, mixing, streaming", "Lighting, rigging, power", "Processing, interface, power"], correctIndex: 3, explanation: "Sony Corporation (2017, p. 3): signal processing, an interface for external equipment, and power for the camera. Lesson 8.", sourceLessonSlug: "the-ccu-and-triax" },
          { prompt: "What fibers does an ST 311 hybrid camera cable such as LF-2SM9N carry?", options: ["Two single-mode fibers", "Two multimode fibers", "Four OM3 fibers", "One plastic fiber"], correctIndex: 0, explanation: "Canare (n.d.-c): two single-mode 9/125 fibers. Lesson 9.", sourceLessonSlug: "the-smpte-hybrid-camera-cable" },
          { prompt: "What does tactical fiber lack that a SMPTE hybrid cable has, by lesson 10's reasoning?", options: ["Single-mode fibers", "Copper for power", "Aramid strength", "An outer jacket"], correctIndex: 1, explanation: "Tactical fiber carries fiber and strength members, no power copper; the lesson reasons this for the reviewer to confirm. Lesson 10.", sourceLessonSlug: "tactical-fiber" },
          { prompt: "Which jacket color marks single-mode fiber, per FOA?", options: ["Aqua", "Orange", "Yellow", "Violet"], correctIndex: 2, explanation: "FOA (n.d.-d): yellow for single-mode; aqua for OM3 and OM4. Lesson 11.", sourceLessonSlug: "single-mode-multimode-and-color-codes" },
          { prompt: "Which fiber connector has a 1.25 mm ferrule?", options: ["ST", "SC", "FC", "LC"], correctIndex: 3, explanation: "FOA (n.d.-f): LC is 1.25 mm; ST, SC and FC share 2.5 mm. Lesson 12.", sourceLessonSlug: "lc-sc-st-and-the-polish" },
          { prompt: "What does Camplex say a 1 µm dust particle on a single-mode core can block?", options: ["Up to 1% of the light", "All of the light", "Half of the light", "None of the light"], correctIndex: 0, explanation: "Camplex (2019b, p. 1): up to 1%, about 0.05 dB; a 9 µm speck can block the core completely. Lesson 13.", sourceLessonSlug: "inspect-before-you-connect" },
          { prompt: "What does a fiber loss budget count, per FOA's rule on connectors and connections?", options: ["Connectors are lossless parts", "Count mated pairs, not connectors", "Loss lives only in the fiber", "Splices never add any loss"], correctIndex: 1, explanation: "Loss happens where two ends mate, so a budget counts mated pairs. Lesson 14.", sourceLessonSlug: "loss-budgets-and-bend-radius" },
          { prompt: "What does FOA say to test a fiber with before inspecting it?", options: ["A visual fault locator", "A quick look by eye", "An optical power meter", "A bright flashlight"], correctIndex: 2, explanation: "FOA (n.d.-g, n.d.-h): test with a power meter, never look into a fiber end. Lesson 15.", sourceLessonSlug: "laser-safety" },
          { prompt: "On a 3-pin XLR, which pin does the AES standard make hot?", options: ["Pin 1", "Pin 3", "The shell", "Pin 2"], correctIndex: 3, explanation: "Macatee (2002, p. 1): the AES \"pin 2 is hot\" standard; pin 1 is the shield. Lesson 16.", sourceLessonSlug: "balanced-lines-the-xlr-and-phantom-power" },
          { prompt: "What sits on pin 2 of a Clear-Com party-line 3-pin XLR?", options: ["+30 V DC", "Audio", "Ground", "Data"], correctIndex: 0, explanation: "Clear-Com (2019d, 2024a): pin 1 ground, pin 2 voltage (+30 V DC), pin 3 audio. Lesson 17.", sourceLessonSlug: "same-plug-different-signal" },
          { prompt: "What connector and impedance does Rane's table give AES3id?", options: ["XLR-3 at 110 ohms", "BNC at 75 ohms", "RCA at 75 ohms", "RJ45 at 100 ohms"], correctIndex: 1, explanation: "Bohn (2014, p. 2): AES3id on BNC at 75 ohms; AES3 on XLR-3 at 110; S/PDIF on RCA at 75. Lesson 18.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "How many MADI channels at 96 kHz?", options: ["56", "64", "28", "32"], correctIndex: 2, explanation: "Clear-Com (2019b): 28 channels at 64 to 96 kHz; 56 or 64 at 32 to 48 kHz. Lesson 18.", sourceLessonSlug: "aes3-word-clock-and-madi" },
          { prompt: "How long may a twisted-pair channel be, cords included, per Fluke?", options: ["90 meters", "55 meters", "5 meters", "100 meters"], correctIndex: 3, explanation: "Fluke Networks (2016): no more than 100 meters; the permanent link at most 90. Lesson 19.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What does Neutrik say about its NE8MX6 and the NE8FDY-C6 chassis?", options: ["They do not intermate", "They mate with no limits", "They mate only for PoE", "They are the same part"], correctIndex: 0, explanation: "Neutrik (n.d.-h): the NE8MX6 \"Does not intermate with the CAT6 chassis connectors NE8FDY-C6 and NE8FDY-C6-B.\" Lesson 19.", sourceLessonSlug: "network-cable-categories-and-poe" },
          { prompt: "What does Sennheiser say to switch off on Dante switch ports?", options: ["IGMP snooping and querier", "Energy Efficient Ethernet", "DSCP Quality of Service", "Gigabit link negotiation"], correctIndex: 1, explanation: "Sennheiser (n.d.): EEE can cause poor synchronization and audio dropouts; disable it on Dante ports. Lesson 20.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What does lesson 20 reason ST 2110 video needs on copper?", options: ["Category 5e at 1 Gbps", "Category 6 at 100 Mbps", "Category 6A at 10 Gbps", "Category 5 at 10 Gbps"], correctIndex: 2, explanation: "One uncompressed HD picture is about 2.486 Gbps, so it needs 10 Gbps, which Siemon rates over 100 m of Category 6A. Lesson 20.", sourceLessonSlug: "dante-st-2110-and-the-media-network" },
          { prompt: "What does the 6 in NEMA L6-30 tell you?", options: ["30 A current", "Locking shape", "Three-phase power", "250 V AC grounded"], correctIndex: 3, explanation: "Interpower (n.d.): 6 is 250 V AC grounded; L means locking and 30 is the amperage. Lesson 21.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "Which powerCON is rated to connect or disconnect under load?", options: ["The TRUE1 NAC3FX-W", "The classic blue NAC3FCA", "The classic grey NAC3FCB", "The NAC3MPA-1 chassis"], correctIndex: 0, explanation: "Neutrik (n.d.-d): TRUE1 has breaking capacity; the classic parts must not be connected or disconnected under load. Lesson 21.", sourceLessonSlug: "straight-blade-locking-stage-pin-and-powercon" },
          { prompt: "Which cam connector goes on first, by Lex's label?", options: ["Neutral", "Equipment ground", "Phase A hot", "Any of the hots"], correctIndex: 1, explanation: "Lex Products (2020, p. 6): equipment grounding conductor first, then neutral, then the hots. Lesson 22.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "When does Lex say cam connections may be made?", options: ["Any time, in order", "While the load is low", "Only when not live", "When a GFCI is fitted"], correctIndex: 2, explanation: "Lex Products (2020, p. 7): \"DO NOT ATTEMPT CONNECTION WHILE CIRCUITS ARE LIVE.\" Lesson 22.", sourceLessonSlug: "cam-feeders-and-the-gender-trap" },
          { prompt: "Which state issues a Limited Journeyman Stage Electrician license, per lesson 23?", options: ["Minnesota", "Nevada", "Texas", "Oregon"], correctIndex: 3, explanation: "Oregon Secretary of State (2026): the ST license, through the DCBS Building Codes Division. Lesson 23.", sourceLessonSlug: "the-law-and-the-license" },
          { prompt: "What should you do when any item on lesson 24's stop list applies?", options: ["Stop and call the electrician", "Fix it, then log it", "Work around it quietly", "Finish the cue first"], correctIndex: 0, explanation: "Stop, keep people clear, and call the venue's electrician or the qualified person responsible for the power. Lesson 24.", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "Which OSHA rule sets the GFCI duty on construction sites?", options: ["§ 1910.399", "§ 1926.404(b)(1)", "§ 1910.37(a)(3)", "47 C.F.R. § 15.236"], correctIndex: 1, explanation: "29 C.F.R. § 1926.404(b)(1); general industry's construction-like rule is § 1910.304(b)(3)(ii). Lesson 24.", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "How many DMX devices does ProSoundWeb allow on a line without a repeater?", options: ["63", "512", "32", "10"], correctIndex: 2, explanation: "Leerman (2013, p. 2): 32 devices; 63 with a repeater, which counts as one. Lesson 25.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "Which twisted-pair serial standard controls HyperDeck recorders?", options: ["RS-232", "USB 2.0", "DMX512", "RS-422"], correctIndex: 3, explanation: "Blackmagic Design (n.d.-d): \"RS-422 deck control.\" Lesson 25.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "How long may a passive USB 2.0 cable be, per Biamp and Cambrionix?", options: ["5 meters", "2 meters", "3 meters", "10 meters"], correctIndex: 0, explanation: "Both give 5 m for USB 2.0; faster USB is shorter. Lesson 25.", sourceLessonSlug: "dmx-rs-422-tally-and-usb" },
          { prompt: "Which impedance do antenna and RF test cables use in this course?", options: ["75 ohms", "50 ohms", "110 ohms", "120 ohms"], correctIndex: 1, explanation: "Antenna and RF test gear are 50 ohms; video, word clock and AES3id are 75. Lesson 26.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "Who picks wireless mic frequencies on a show, per lesson 26?", options: ["The camera operator", "The lighting director", "The RF coordinator", "The stage manager"], correctIndex: 2, explanation: "The course teaches no frequency; a frequency plan belongs to the show's RF coordinator. Lesson 26.", sourceLessonSlug: "rf-coax-wireless-mics-and-ifb" },
          { prompt: "What coiling method do Tobias and PerfTech both teach?", options: ["Elbow wrapping", "Figure-8 only", "Single loop", "Over-under"], correctIndex: 3, explanation: "Tobias (2023) and Moeller (2014) both teach over-under. Lesson 27.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "What is the test for a cable protector on an accessible route, by lesson 27's reasoning?", options: ["The § 303 level limits", "The vendor's ADA label", "Its color and its width", "Its weight in pounds"], correctIndex: 0, explanation: "A protector is a change in level, so the ADA § 303 limits apply; a vendor's label is not evidence. Lesson 27.", sourceLessonSlug: "coil-label-and-run" },
          { prompt: "Which fault can a DC continuity tester miss on network cable?", options: ["Opens", "Split pairs", "Shorts", "Crossed wires"], correctIndex: 1, explanation: "Fluke Networks (2018): a split pair passes a DC continuity test and fails near-end crosstalk. Lesson 28.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What fault-finding order do the FOA's pages state for a fiber link?", options: ["Source, cables, then receiver", "Cables, receiver, then source", "Receiver, transmitter, then cables", "Transmitter, receiver, then cables"], correctIndex: 2, explanation: "FOA (2019): measure at the receiver, then the transmitter, then test the cables at every connection. Lesson 28.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "What is the copper version of the FOA's known-good test jumper, by lesson 28's analogy?", options: ["A new connector", "A 75-ohm terminator", "A longer run", "A known-good cable"], correctIndex: 3, explanation: "Swapping in a known-good cable; the lesson labels it the course's analogy. Lesson 28.", sourceLessonSlug: "test-then-find-the-fault" },
          { prompt: "In the capstone, how many cables do you film?", options: ["Ten", "Five", "Eight", "Twelve"], correctIndex: 0, explanation: "Identify, test and coil ten cables on camera, naming each. Lesson 29.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "In the capstone, what must you never do with the fiber patch cord?", options: ["Name its connector", "Look into its end", "Read its jacket", "Coil it over-under"], correctIndex: 1, explanation: "Never look into a fiber; name its connector and polish from the outside. Lesson 29.", sourceLessonSlug: "capstone-ten-cables-on-camera" },
          { prompt: "Where does lesson 24 put a GFCI cord set so it counts as protection?", options: ["At the far end of a run", "Anywhere along the cords", "Nearest the power source", "Inside the distro panel"], correctIndex: 2, explanation: "29 C.F.R. § 1910.304(b)(3)(ii)(A), Note 2: connected to the receptacle closest to the source of power. Lesson 24.", sourceLessonSlug: "gfci-wet-locations-and-when-to-stop" },
          { prompt: "What protects you from bare fiber shards, per FOA?", options: ["A video microscope", "An infrared filter", "An optical meter", "Side-shield glasses"], correctIndex: 3, explanation: "FOA (n.d.-g): safety glasses with side shields, a black work mat, a sealed scrap container. Lesson 15.", sourceLessonSlug: "laser-safety" },
        ],
      },
    },
  ],
};
