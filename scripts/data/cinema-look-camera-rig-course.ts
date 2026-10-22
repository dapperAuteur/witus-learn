import type { AuthoredCourse } from "./authored-course";

// "Cinema-look camera rig" (Careers & Media, also listed in Sports and Trade Skills).
// Slug `cinema-look-camera-rig`. TITLE: BAM chose the safe name on 2026-10-21 (brief section 7), so the
// title leaves out "Megalodon". The research check `megalodon-trademark` recorded the USPTO findings and
// was closed by that decision (see src/lib/research-checks.ts). "Megalodon" appears in lesson 1 only, as
// Fox Sports' industry nickname cited to Dachman (2021); elsewhere it survives only inside the titles of
// cited works, which are quoted as printed.
// Series `the-crew-behind-the-show` ("The Crew Behind the Show"), code CREW, position 04; CREW-01 is
// `stage-and-broadcast-rigging`, CREW-02 `sound-craft`, CREW-03 `light-on-set`, and CREW-05 (arena
// transmission) follows. `broadcasting-break-in` stays outside the series and links by lesson.
//
// RESEARCH TIER 2 (brief section 3): RF and FCC licensing, lithium batteries, and money.
// Brief:    cloud-briefs/crew-04/00-approved-brief.md (approved by BAM 2026-10-21: public, CREW-04,
//           held for a qualified reviewer; the business of renting gear out is CREW-06 and stays out).
// Research: cloud-briefs/crew-04/research/ (fetched 2026-10-21). Only its [V] lines are asserted.
//           Its [I] lines appear only with their reasoning shown in the lesson. Nothing in
//           00-corrections.md is taught, except as a named misconception followed by its correction
//           (lessons 2, 4, 6, 11, 12, 13). 05-research-check-answers.md (read back 2026-10-22) sourced
//           the circle of confusion (lesson 3), the shutter explanation and its flicker correction
//           (lesson 6), the FX3's HDMI bit depth (lesson 8), gimbal modes (lesson 13), DJI's balancing
//           routine (lesson 14) and the league rule books (lesson 16). Its REPORTED lines (the NCAA rule
//           book read on an officials' association's host, two spotting accounts, one press report)
//           are quoted only with that attribution, never as a general rule.
//
// BUILD STATUS: complete. All eight sections of the brief's outline (the look, the camera body,
// lenses, the gimbal, wireless video, joining the show, troubleshooting, builds and compromises), 32
// teaching lessons, a quiz per section and a final quiz (pool 48, serving 10, passing 80). Sections 1
// to 4 were written 2026-10-21; sections 5 to 8 and the final on 2026-10-22, from research files 00 to
// 04 (00-corrections.md items E1, E2, E4, E9, P1 and P2 appear only as named corrections).
//
// VISIBILITY: PUBLIC, and HELD ("Coming soon") until a NAMED qualified reviewer, for example a
// broadcast engineer in charge or an RF and camera specialist, has read every lesson marked QR with
// authority to change or cut it. The publishHoldReason in scripts/seed-courses.ts says so.
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line naming who must act.
//   QR: 7 (frame sync and converters are engineering judgment), 8 (external power and lithium
//   batteries), 12 (dated prices), 14 (its two cable steps are field practice with no maker's source;
//   the rest of the routine is DJI's), 16 (how a utility spots the operator and where to stand during
//   live play; no fetched source describes either), 20 (the FCC and venue-coordination summary: RF
//   coordinator), 22 (the truck's steps: EIC), 26 (no-signal and breakup fixes: RF technician), 29 to
//   32 (dated prices and rental rates, re-read on release).
//   Practitioner: 28 (the pre-show checklist is field practice built from the parts lessons).
//   Unmarked: 1, 2, 3, 4, 5, 6, 9, 10, 11, 13, 15, 17, 18, 19, 21, 23, 24, 25, 27. Lessons 3 and 6 lost their markers on 2026-10-22,
//   when the answers file sourced what they had been holding for (Zeiss and Sony for the circle of
//   confusion; RED for shutters).
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source): every source in sections 1 to 4
// is Tier B, link only, never rehost: trade press (Sports Video Group, CP Communications, Awful
// Announcing, Sportico via Yahoo Finance, American Cinematographer, Newsshooter, The Ringer) and maker
// and retailer pages (Sony, DJI including its RS 4 manual, RED, Zeiss's Nasse paper, Sigma, Blackmagic
// Design, AJA, Cyanview, Core SWX, Indipro, SmallHD, Portkeys, Focus Camera, Lensrentals, AbelCine),
// the league rule books (NFL, NCAA, MLB) and the BBC Studioworks risk assessment. Sections 5 to 8 add
// more Tier B makers, retailers and rental houses (Hollyland, Accsoon, Teradek, VidOvation, Vaxis,
// Lensrentals, Rental House by Roberts Camera, MPB, Samy's, PROCAM, IDX, Tilta, Aircases), the SVG
// venue white paper (Price & Juniet, 2015) and NFL Football Operations. Tier A, free to host but not
// hosted yet: 47 C.F.R. §§ 15.407 and 74.600 (federal regulations; cited at Cornell LII) and the TSA
// battery page (a federal agency page). No figures are embedded.
//
// PRICES are the ones read on October 21, 2026 (research file 04) and every lesson that gives one says
// so. Lessons 12 and 29 to 32 are marked QR so the prices are re-read before release. Build totals are
// sums of the verified prices only; the research pack's [A] allowances are listed as unpriced items,
// never added in. Rental rates are one house's prices on one day, never a promise (brief section 6).
//
// STANDARDS: unmapped for now (BACKLOG entry in scripts/check-standards-coverage.ts).
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts, narrowed 2026-10-22):
//  - L8: the color sampling of the FX3's HDMI signal (`megalodon-fx3-hdmi-bit-depth`; bit depth is
//    now taught from Sony's help guide).
//  - L13: which follow mode sideline operators use (`megalodon-gimbal-modes`; what each mode does is
//    now taught from DJI's manual).
//  - L16: how a utility spots a handheld operator (`megalodon-sideline-practice`; the league rule
//    books are now taught).
//  - L20: which FCC 6 GHz device class the Bolt 6's US mode uses (`megalodon-bolt6-6ghz-class`).
// Lesson 28's runtime estimate states its two assumptions (80% usable capacity; a 10 W monitor) as
// assumptions, per the research pack's [A] tags.
//
// House style, matching stage-and-broadcast-rigging-course.ts: `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; recallContent from the second teaching lesson on, quizzing the
// lesson before; an APA 7 `## Sources` block on every teaching lesson with a locator on every entry; a
// quiz per section pooled to round(words / 35), clamped 40 to 100, serving 5, passing 80, shuffled.
// Option lengths are balanced within each question. American spelling in prose; quotations keep their
// own spelling. No em or en dashes anywhere.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const RETRIEVED = "Retrieved October 21, 2026, from";

// Trade press and history
const KEELEY_2020 =
  "Keeley, S. (2020b, December 20). *Fox broke out 8K end zone cameras for the Washington-Seattle NFL game*. Awful Announcing. https://awfulannouncing.com/fox/fox-8k-handheld-end-zone-dlsr-cameras-washington-seattle.html";
const COSTA_2020 =
  "Costa, B. (2020, December 22). *Fox Sports worked a live mirrorless camera into an NFL broadcast and it caught viewers' attention*. CP Communications. https://cpcomms.com/fox-sports-worked-a-live-mirrorless-camera-into-an-nfl-broadcast-and-it-caught-viewers-attention/";
const DACHMAN_2021 =
  "Dachman, J. (2021, January 8). *NFL playoffs 2021: Fox Sports boosts Super-Mos, PylonCams and brings back \"Megalodon\" for postseason*. Sports Video Group. https://www.sportsvideo.org/2021/01/08/nfl-playoffs-2021-fox-sports-boosts-super-mos-pyloncams-and-brings-back-megalodon-for-postseason/";
const FELDMAN_2021 =
  "Feldman, J. (2021, January 24). *\"It's not an 8K camera, it's an $8k camera\": Meet the man behind FOX's broadcast sensation*. Sportico, via Yahoo Finance. https://finance.yahoo.com/news/not-8k-camera-8k-camera-190354940.html";
const CP_2021 =
  "CP Communications. (2021, March 9). *FOX Deportes debuts \"Megalodon\" on live Liga MX matches*. https://cpcomms.com/fox-deportes-debuts-megalodon-on-live-liga-mx-matches/";
const SVG_2021 =
  "Sports Video Group. (2021, May 7). *Marquee Sports Network becomes first to use \"Megalodon\" camera on MLB broadcast*. https://www.sportsvideo.org/2021/05/07/marquee-sports-network-becomes-first-to-use-megalodon-camera-on-mlb-broadcast/";
const COSTA_2021 =
  "Costa, B. (2021, May 20). *BaylorVision deploys its own version of \"Megalodon\" on live broadcast of NCATA national championship*. Sports Video Group. https://www.sportsvideo.org/2021/05/20/baylorvision-deploys-its-own-version-of-megalodon-on-live-broadcast-of-ncata-national-championship/";
const KERSCHBAUMER_2021 =
  "Kerschbaumer, K., Dachman, J., Costa, B., & Hernandez, K. (2021, June 29). *The big picture: Inside the shallow-depth-of-field movement and why it is here to stay*. Sports Video Group. https://www.sportsvideo.org/2021/06/29/the-big-picture-inside-the-shallow-depth-of-field-movement-and-why-it-is-here-to-stay/";
const MROZEK_2021 =
  "Mrozek, C. (2021, September 20). A whole new ballgame. *American Cinematographer*. https://theasc.com/article/whole-new-ballgame/";
const HERNANDEZ_2026 =
  "Hernández, K. (2026, July 13). *Netflix christens its first Home Run Derby with new presentation of slugfest in South Philly*. Sports Video Group. https://www.sportsvideo.org/2026/07/13/netflix-christens-first-home-run-derby-with-new-presentation-of-slugfest-in-south-philly/";
const COSTA_2026 =
  "Costa, B. (2026, August 13). *MLB at Field of Dreams returns as Netflix joins the effort, leans into cinematic look at newly permanent ballpark*. Sports Video Group. https://www.sportsvideo.org/2026/08/13/mlb-at-field-of-dreams-returns-as-netflix-joins-the-effort-leans-into-cinematic-look-at-newly-permanent-ballpark/";

// Cameras
const SONY_SPECS = `Sony. (n.d.-b). *ILME-FX3 help guide: Specifications*. ${RETRIEVED} https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000886922.html`;
const SONY_TIMECODE = `Sony. (n.d.-a). *ILME-FX3 help guide: Matching the time code with other devices*. ${RETRIEVED} https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000888835.html`;
const ALLARD_2020 =
  "Allard, M. (2020, November 18). *Sony FX6: Is this the camera you have been waiting for?* Newsshooter. https://www.newsshooter.com/2020/11/18/sony-fx6-is-this-the-camera-you-have-been-waiting-for/";
const ABELCINE = `AbelCine. (n.d.). *RED Digital Cinema KOMODO-X 6K S35 global shutter camera (Canon RF)* [Product page]. ${RETRIEVED} https://www.abelcine.com/buy/cameras-accessories/digital-cinema-cameras/red-digital-cinema-komodo-x-6k-s35-global-shutter-camera-canon-rf`;
const FOCUS_FX3A = `Focus Camera. (n.d.-a). *Sony Alpha FX3A 4K compact full-frame cinema digital camera body* [Product page]. ${RETRIEVED} https://focuscamera.com/products/sony-ilmefx3a-cameras-mirrorless-cameras`;
const FOCUS_FX30 = `Focus Camera. (n.d.-b). *Sony FX30 Super 35 camera (body only)* [Product page]. ${RETRIEVED} https://focuscamera.com/products/sony-ilmefx30b-cameras-point-shoot-cameras`;
const FOCUS_FX6 = `Focus Camera. (n.d.-c). *Sony FX6 Cinema Line full-frame camera body* [Product page]. ${RETRIEVED} https://focuscamera.com/products/sony-ilmefx6v-camcorders-professional-camcorders`;
const LENSRENTALS_FX3 = `Lensrentals. (n.d.-a). *Rent a Sony FX3 (body only)*. ${RETRIEVED} https://www.lensrentals.com/rent/sony-fx3-body-only`;
const DJI_RONIN_4D = `DJI. (n.d.-e). *DJI Ronin 4D* [Store page]. ${RETRIEVED} https://store.dji.com/product/dji-ronin-4d`;
const SONY_HDMI = `Sony. (n.d.-c). *ILME-FX3 help guide: HDMI output settings (movie)*. ${RETRIEVED} https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000885432.html`;
const SONY_MOVIE_SETTINGS = `Sony. (n.d.-d). *ILME-FX3 help guide: Movie settings (movie)*. ${RETRIEVED} https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000868278.html`;
const SONY_RAW_OUT = `Sony. (n.d.-f). *ILME-FX3 help guide: Outputting RAW movies to an external RAW recorder*. ${RETRIEVED} https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1002078215.html`;
const SONY_FX30_SPECS = `Sony. (n.d.-e). *ILME-FX30 help guide: Specifications*. ${RETRIEVED} https://helpguide.sony.net/ilc/2220/v1/en/contents/TP1000888850.html`;
const RED_SHUTTERS = `RED Digital Cinema. (n.d.-a). *Global & rolling shutters* [RED 101 article]. ${RETRIEVED} https://www.reddigitalcinema.com/red-101/global-rolling-shutter`;
const RED_KOMODO_X = `RED Digital Cinema. (n.d.-b). *KOMODO-X RF mount* [Product page]. ${RETRIEVED} https://www.reddigitalcinema.com/komodo-x_2`;
const NASSE_2010 =
  "Nasse, H. H. (2010). *Depth of field and bokeh*. Carl Zeiss Camera Lens Division. https://lenspire.zeiss.com/photo/app/uploads/2018/02/cln35_en_web_special_bokeh.pdf";

// Signal, control and power
const BLACKMAGIC = `Blackmagic Design. (n.d.). *Micro converters* [Product page]. ${RETRIEVED} https://www.blackmagicdesign.com/products/microconverters`;
const AJA_FS_MINI = `AJA Video Systems. (n.d.). *FS-Mini* [Product page]. ${RETRIEVED} https://www.aja.com/products/fs-mini`;
const CYANVIEW_ALPHA = `Cyanview. (n.d.-a). *Sony Alpha* [Support documentation]. ${RETRIEVED} https://support.cyanview.com/docs/Integrations/Sony/SonyAlpha`;
const CYANVIEW_GIMBAL = `Cyanview. (n.d.-b). *Sony mirrorless gimbal* [Support documentation]. ${RETRIEVED} https://support.cyanview.com/docs/Workflows/SonyMirrorlessGimbal`;
const CORE_SWX = `Core SWX. (n.d.-a). *NANO X Micro 98Wh series* [Product page]. ${RETRIEVED} https://www.coreswx.com/products/nano-x-micro-98-series`;
const INDIPRO = `Indipro Tools. (n.d.). *Indipro D-Tap power cable to Sony NP-FZ100 dummy battery (30 in., regulated)* [Product page]. ${RETRIEVED} https://indiprotools.com/products/indipro-d-tap-power-cable-to-sony-np-fz100-dummy-battery-30-regulated`;

// Lenses
const SIGMA_CINE = `Sigma. (n.d.). *24-35mm T2.2 FF* [Cine lens page]. ${RETRIEVED} https://www.sigma-global.com/en/cine-lenses/ff-zoom/24_35_22/`;
const SIGMA_2470 = `Sigma Corporation of America. (n.d.-a). *24-70mm F2.8 DG DN II | Art* [Product page]. ${RETRIEVED} https://www.sigmaphoto.com/24-70mm-f2-8-dg-dn-ii-a`;
const SIGMA_35 = `Sigma Corporation of America. (n.d.-b). *35mm F1.2 DG II | Art* [Product page]. ${RETRIEVED} https://www.sigmaphoto.com/35mm-f1-2-dg-ii-a`;
const SIGMA_50 = `Sigma Corporation of America. (n.d.-c). *50mm F1.2 DG DN | Art* [Product page]. ${RETRIEVED} https://www.sigmaphoto.com/50mm-f1-2-dg-dn-a`;
const FOCUS_SONY_50 = `Focus Camera. (n.d.-d). *Sony FE 50mm f/1.2 GM* [Product page]. ${RETRIEVED} https://focuscamera.com/products/sony-sel50f12gm-camera-lenses-mirrorless-lenses`;
const FOCUS_GM2 = `Focus Camera. (n.d.-e). *Sony SEL2470GM2 FE 24-70mm f/2.8 GM II* [Product page]. ${RETRIEVED} https://focuscamera.com/products/sony-sel2470gm2-camera-lenses-mirrorless-lenses`;
const FOCUS_TAMRON = `Focus Camera. (n.d.-f). *Tamron A063 28-75mm f/2.8 Di III VXD G2 for Sony E-mount* [Product page]. ${RETRIEVED} https://focuscamera.com/products/tamron-a063-tamron-camera-lenses-mirrorless-lenses`;
const LENSRENTALS_SIGMA_50 = `Lensrentals. (n.d.-b). *Rent a Sigma 50mm f/1.2 DG DN Art for Sony E*. ${RETRIEVED} https://www.lensrentals.com/rent/sigma-50mm-f1.2-dg-dn-art-for-sony-e`;
const LENSRENTALS_GM2 = `Lensrentals. (n.d.-c). *Rent a Sony FE 24-70mm f/2.8 GM II*. ${RETRIEVED} https://www.lensrentals.com/rent/sony-fe-24-70mm-f2.8-gm-ii`;

// Gimbals and monitors
const DJI_RS4_PRO_SPECS = `DJI. (n.d.-a). *DJI RS 4 Pro specs*. ${RETRIEVED} https://www.dji.com/rs-4-pro/specs`;
const DJI_RS4_SPECS = `DJI. (n.d.-b). *DJI RS 4 specs*. ${RETRIEVED} https://www.dji.com/rs-4/specs`;
const DJI_RS5_STORE = `DJI. (n.d.-c). *DJI RS 5* [Store page]. ${RETRIEVED} https://store.dji.com/product/dji-rs-5`;
const DJI_RS4_PRO_STORE = `DJI. (n.d.-d). *DJI RS 4 Pro* [Store page]. ${RETRIEVED} https://store.dji.com/product/dji-rs-4-pro`;
const PORTKEYS = `Portkeys. (n.d.). *Portkeys LH5P II 5.5-inch 2000nits* [Product page]. ${RETRIEVED} https://www.portkeys.com/lh5p-ii/`;
const SMALLHD_INDIE_5 = `SmallHD. (n.d.-a). *Indie 5* [Product page]. ${RETRIEVED} https://smallhd.com/products/indie-5`;
const SMALLHD_ULTRA_5 = `SmallHD. (n.d.-b). *Ultra 5* [Product page]. ${RETRIEVED} https://smallhd.com/products/ultra-5`;
const DJI_RS4_MANUAL = `DJI. (2024). *DJI RS 4 / RS 4 Pro user manual* (Version 1.0). ${RETRIEVED} https://dl.djicdn.com/downloads/DJI_RS_4_Pro/UM/DJI_RS_4_User_Manual__v1.0__EN.pdf`;

// Sideline rules and accounts (research file 05, section 4)
const NFL_RULES_2026 = `National Football League. (2026). *2026 official playing rules of the National Football League*. ${RETRIEVED} https://static.www.nfl.com/image/upload/fl_attachment/league/tqivdkzt9mu6wdgsh1ku.pdf`;
const NCAA_RULES_2026 = `National Collegiate Athletic Association. (2026). *2026 NCAA football rules and interpretations*. ${RETRIEVED} https://www.amarefs.org/wp-content/uploads/2026/07/RB-Combined-2026-1.pdf (copy hosted by an officials' association)`;
const MLB_RULES_2026 = `Office of the Commissioner of Baseball. (2026). *Official baseball rules: 2026 edition*. ${RETRIEVED} https://mktg.mlbstatic.com/mlb/official-information/2026-official-baseball-rules.pdf`;
const KEELEY_CART_2020 =
  "Keeley, S. (2020a, September 27). *Raiders safety Johnathan Abram's scary collision with MNF television cart much worse than thought*. Awful Announcing. https://awfulannouncing.com/nfl/raiders-safety-johnathan-abrams-scary-collision-with-mnf-television-cart-much-worse-than-thought.html";
const BBC_STUDIOWORKS_2023 = `BBC Studioworks. (2023). *Risk assessment for safe use of Steadicams* (Version 1.1). ${RETRIEVED} https://bbcstudioworks.com/wp-content/uploads/2023/08/Risk-Assessment-Steadicams.pdf`;
const CURTIS_2019 =
  "Curtis, B. (2019, December 5). *Meet the magician of NFL broadcasts*. The Ringer. https://www.theringer.com/2019/12/5/20996630/fox-broadcasts-don-cornelli-cameraman-joe-buck-troy-aikman";

// Wireless video links (research files 01 and 04)
const HOLLYLAND_C1 = `Hollyland. (n.d.-a). *Cosmo C1* [Product page]. ${RETRIEVED} https://www.hollyland.com/product/cosmo-c1`;
const HOLLYLAND_C1_STORE = `Hollyland. (n.d.-b). *Cosmo C1 (store listing)* [Store page]. ${RETRIEVED} https://store.hollyland.com/products/cosmo-c1`;
const HOLLYLAND_C2 = `Hollyland. (n.d.-c). *Cosmo C2* [Product page]. ${RETRIEVED} https://www.hollyland.com/product/cosmo-c2`;
const HOLLYLAND_C2_STORE = `Hollyland. (n.d.-d). *Cosmo C2 (store listing)* [Store page]. ${RETRIEVED} https://store.hollyland.com/products/cosmo-c2`;
const HOLLYLAND_MARS = `Hollyland. (n.d.-e). *Mars 4K* [Product page]. ${RETRIEVED} https://www.hollyland.com/product/mars-4k`;
const ACCSOON_HE = `Accsoon. (n.d.-a). *Accsoon CineView HE* [Product page]. ${RETRIEVED} https://store.accsoon.com/products/cineview-he`;
const ACCSOON_MASTER = `Accsoon. (n.d.-b). *Accsoon CineView Master 4K* [Product page]. ${RETRIEVED} https://store.accsoon.com/products/cineview-master-4k`;
const DJI_SDR_SPECS = `DJI. (n.d.-f). *DJI SDR Transmission specs*. ${RETRIEVED} https://www.dji.com/sdr-transmission/specs`;
const DJI_SDR_STORE = `DJI. (n.d.-g). *DJI SDR Transmission* [Store page]. ${RETRIEVED} https://store.dji.com/product/dji-sdr-transmission`;
const TERADEK_BOLT4K = `Teradek. (n.d.-a). *Bolt 4K 12G-SDI 750 deluxe kit* [Product page]. ${RETRIEVED} https://teradek.com/products/bolt-4k-750-kit`;
const TERADEK_LT_HDMI = `Teradek. (n.d.-b). *Bolt 6 LT HDMI 750 TX/RX set* [Product page]. ${RETRIEVED} https://teradek.com/products/bolt-6-lt-hdmi-set`;
const TERADEK_LT = `Teradek. (n.d.-c). *Bolt 6 LT set* [Product page]. ${RETRIEVED} https://teradek.com/products/bolt-6-lt-set`;
const TERADEK_XT = `Teradek. (n.d.-d). *Bolt 6 XT set* [Product page]. ${RETRIEVED} https://teradek.com/products/bolt-6-xt-set`;
const TERADEK_2024 =
  "Teradek. (2024, August 5). *Wireless best practices* [User guide]. https://guide.teradek.com/a/1869285-wireless-best-practices";
const TERADEK_2025 =
  "Teradek. (2025, March 21). *Bolt 6 U-NII-5 (6GHz) support by region* [User guide]. https://guide.teradek.com/a/1601470-bolt-6-u-nii-5-6ghz-support-by-region";
const VIDOVATION = `VidOvation. (n.d.). *HCAM HEVC 4K UHD wireless camera system* [Product page]. ${RETRIEVED} https://www.vidovation.com/product/product-hcam-hevc-4k-uhd-wireless-camera-system/`;
const VAXIS_NEW = `Vaxis US. (n.d.-a). *Vaxis Storm 1000S HDMI/SDI WHDI wireless transmission system* [Product page]. ${RETRIEVED} https://vaxis.us/products/vaxis-storm-1000s`;
const VAXIS_USED = `Vaxis US. (n.d.-b). *Vaxis Storm 1000S, used set* [Product page]. ${RETRIEVED} https://vaxis.us/products/vaxis-storm-1000ft`;

// Spectrum rules and coordination
const PRICE_JUNIET_2015 =
  "Price, R., & Juniet, J. (2015). *Recommendations for sports venues: Wireless device management and frequency coordination* [White paper]. Sports Video Group Venue Initiative. https://www.sportsvideo.org/wp-content/uploads/2015/01/White-Paper-RF_Cfnl.pdf";
const NFL_FREQ = `NFL Football Operations. (n.d.). *Event frequency coordinators*. ${RETRIEVED} https://operations.nfl.com/game-operations-logistics/game-day-assistants/event-frequency-coordinators`;
const CFR_74_600 = "Eligibility for license, 47 C.F.R. § 74.600 (2026). https://www.law.cornell.edu/cfr/text/47/74.600";
const CFR_15_407 = "General technical requirements, 47 C.F.R. § 15.407 (2026). https://www.law.cornell.edu/cfr/text/47/15.407";
const TSA = `Transportation Security Administration. (n.d.). *Lithium batteries with more than 100 watt hours*. ${RETRIEVED} https://www.tsa.gov/travel/security-screening/whatcanibring/items/lithium-batteries-more-100-watt-hours`;

// Shading and control
const CYANVIEW_BSC = `Cyanview. (n.d.-c). *Cyanview, the solution to shade cine-style cameras on live events*. ${RETRIEVED} https://www.cyanview.com/bsc-expo/`;
const CYANVIEW_RIO = `Cyanview. (n.d.-d). *RIO Live* [Product page]. ${RETRIEVED} https://www.cyanview.com/products/rio-live/`;

// Builds: rental, retail and used prices (research file 04)
const LENSRENTALS_FX3A = `Lensrentals. (n.d.-d). *Rent a Sony FX3 A (body only)*. ${RETRIEVED} https://www.lensrentals.com/rent/sony-fx3-a-body-only`;
const LENSRENTALS_RS4PRO = `Lensrentals. (n.d.-e). *Rent a DJI RS 4 Pro gimbal stabilizer combo*. ${RETRIEVED} https://www.lensrentals.com/rent/dji-rs-4-pro-gimbal-stabilizer-combo`;
const LENSRENTALS_BOLT = `Lensrentals. (n.d.-f). *Rent a Teradek Bolt 6 LT 750 3G-SDI/HDMI kit (V-mount)*. ${RETRIEVED} https://www.lensrentals.com/rent/teradek-bolt-6-lt-750-3g-sdi-hdmi-kit-v-mount`;
const LENSCAP = `Lensrentals. (n.d.-g). *Lenscap*. ${RETRIEVED} https://www.lensrentals.com/lenscap`;
const RH_GIMBALS = `Rental House by Roberts Camera. (n.d.-a). *Gimbals, stabilizers and sliders* [Rental page]. ${RETRIEVED} https://rentalhouseindy.com/rentals/camera-supports/gimbals-stabilizers-and-sliders`;
const RH_FX3 = `Rental House by Roberts Camera. (n.d.-b). *Sony Cinema Line FX3 w/ XLR top handle* [Rental page]. ${RETRIEVED} https://rentalhouseindy.com/sony-cinema-line-fx3-w-xlr-top-handle`;
const RH_WIRELESS = `Rental House by Roberts Camera. (n.d.-c). *Wireless video transmission systems* [Rental page]. ${RETRIEVED} https://rentalhouseindy.com/rentals/camera-supports/wireless-video-transmission-systems`;
const MPB = `MPB. (n.d.). *Used Sony FX3* [Product page]. ${RETRIEVED} https://www.mpb.com/en-us/product/sony-pxw-fx3`;
const SAMYS = `Samy's Camera. (n.d.). *Sony FX3 full-frame cinema camera (ILME-FX3A)* [Product page]. ${RETRIEVED} https://www.samys.com/p/Digital-Cinema-Cameras/ILME-FX3A/Sony-FX3-Full-Frame-Cinema-Camera/270259.html`;
const PROCAM_RS4 = `PROCAM. (n.d.-a). *DJI RS 4 gimbal stabilizer combo* [Product page]. ${RETRIEVED} https://procam.com/products/dji-rs-4-gimbal-stabilizer-combo`;
const PROCAM_RS4PRO = `PROCAM. (n.d.-b). *DJI RS 4 Pro gimbal stabilizer* [Product page]. ${RETRIEVED} https://procam.com/products/dji-rs-4-pro-gimbal-stabilizer`;
const PROCAM_CAGE = `PROCAM. (n.d.-c). *SmallRig camera cage for Sony FX30 and FX3* [Product page]. ${RETRIEVED} https://procam.com/products/smallrig-camera-cage-for-sony-fx30-and-fx3`;
const PROCAM_PLATE = `PROCAM. (n.d.-d). *SmallRig mini V-lock battery plate* [Product page]. ${RETRIEVED} https://procam.com/products/smallrig-mini-v-lock-battery-plate`;
const CORE_SWX_CHARGER = `Core SWX. (n.d.-b). *Travel dual charger series* [Product page]. ${RETRIEVED} https://www.coreswx.com/products/travel-dual-charger-series`;
const CORE_SWX_PLATE = `Core SWX. (n.d.-c). *V-mt plate with clamp* [Product page]. ${RETRIEVED} https://www.coreswx.com/products/v-mt-plate-with-clamp`;
const IDX = `IDX System Technology. (n.d.). *IMICRO-98P 97Wh high-load Li-ion V-mount battery* [Product page]. ${RETRIEVED} https://idxtek.com/imicro-98p/`;
const TILTA = `Tilta. (n.d.). *Full camera cage for Sony FX3/FX30 V2* [Product page]. ${RETRIEVED} https://tilta.com/shop/full-camera-cage-for-sony-fx3-fx30-v2/`;
const FOCUS_A7S3 = `Focus Camera. (n.d.-g). *Sony Alpha 7S III body* [Product page]. ${RETRIEVED} https://focuscamera.com/products/sony-ilce7sm3b-cameras-mirrorless-cameras`;
const FOCUS_ATOMOS = `Focus Camera. (n.d.-h). *Atomos Ninja RAW 5-inch 1500-nit HDR touchscreen monitor-recorder* [Product page]. ${RETRIEVED} https://focuscamera.com/products/atomos-atomnjrw01-monitors-recorders-on-camera-monitors-recorders`;
const HOLLYLAND_MARS_STORE = `Hollyland. (n.d.-f). *Mars 4K kit (store listing)* [Store page]. ${RETRIEVED} https://store.hollyland.com/products/mars-4k`;
const HOLLYLAND_PYRO = `Hollyland. (n.d.-g). *Pyro Ultra (store listing)* [Store page]. ${RETRIEVED} https://store.hollyland.com/products/pyro-ultra`;
const PROCAM_FX5 = `PROCAM. (n.d.-e). *Sony FX5 cinema camera* [Product page]. ${RETRIEVED} https://procam.com/products/sony-fx5-cinema-camera`;
const AIRCASES_1535 = `Aircases. (n.d.-a). *1535 Pelican Air case* [Product page]. ${RETRIEVED} https://aircases.com/products/pelican-1535-air`;
const AIRCASES_1615 = `Aircases. (n.d.-b). *1615 Pelican Air case* [Product page]. ${RETRIEVED} https://aircases.com/products/pelican-1615-air`;

/** The marker every lesson needing a qualified reviewer opens with (authoring checklist, section 3). */
const QR = (who: string) => `> **Before release:** needs a qualified reviewer (QR): ${who}.`;

export const CINEMA_LOOK_CAMERA_RIG_COURSE: AuthoredCourse = {
  title: "Cinema-look camera rig",
  description:
    "For camera operators and broadcast crew who want to build or run the handheld, shallow-focus camera that live sports broadcasts use for close, film-style shots. The course starts with the look itself: what depth of field is, why a bigger sensor and a faster lens make it thinner, and how Fox Sports put the rig on air at an NFL game on December 20, 2020, before Marquee Sports Network, FOX Deportes, BaylorVision, CBS, ESPN and Netflix built their own versions. It then takes the rig apart one piece at a time: the camera body, the lens, and the gimbal, including its modes, its balancing routine and what the league rule books say about working a sideline. The second half joins the rig to a live show: the three kinds of wireless video link and their delay counted in frames, range and crowded bands, frequency coordination and who may transmit, what the truck does with your picture, shading, tally, intercom and the questions to ask the engineer. It ends with a troubleshooting method and pre-show checklist, and three builds priced on October 21, 2026, with what to own, what to rent, and which compromises are fine for film and documentary work but not for a network sideline. Every fact is cited, and claims an earlier draft got wrong are taught as corrections. Lessons that need a qualified reviewer before release say so at the top. The fourth course in The Crew Behind the Show series.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: Why the look
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-megalodon-is",
      title: "1 · What a Megalodon is",
      section: "1 · Why the look",
      body: `**What this course is for.** It is for camera operators, broadcast crew and anyone who wants to build or run a cinema-look camera on a live sports show. By the end you should be able to name each part of the rig, say what it does and what it gives up, follow the picture from the sideline to the truck, fix it under a live clock, and judge which shortcuts are fine on a film set but not on a network sideline. This first half covers the look, the camera body, the lens and the gimbal.

**A nickname, not a product.** "Megalodon" is the nickname Fox Sports gave a handheld camera with a very shallow depth of field. The player is sharp and the crowd behind melts into blur. Fox's internal name spelled out an acronym: "Mirrorless Gyrostabilized Lightweight DSLR Nonorig" (Dachman, 2021). No company sells a camera called a Megalodon. It is a recipe: a set of parts that work together.

**Fox's original recipe.**

| Part | Fox's original | Its job |
|---|---|---|
| Camera | Sony a7R IV, a full-frame mirrorless camera | Turn light into a live picture |
| Lens | Sony FE 24-70mm f/2.8 GM | Frame the shot and set how much is sharp |
| Stabilizer | DJI Ronin-S handheld gimbal | Cancel the shake and tilt of a walking operator |
| Monitor | A 6-inch field monitor | Let the operator judge focus and framing |
| Power | A battery backpack | Feed the camera, monitor and transmitter |
| Video link | A 1080p wireless transmitter, with transmission from CP Communications | Carry the picture to a receiver |

The camera, lens, gimbal and transmitter come from CP Communications' own account of the first game (Costa, 2020). *American Cinematographer* adds the 6-inch monitor and the battery backpack (Mrozek, 2021).

**The look is standard; the parts are not.** Other crews built the same look from other parts. BaylorVision used a Sony a7R III, a Sigma prime lens and a Zhiyun Crane 3S gimbal (Costa, 2021). Turner used a Canon C500 with a 50mm lens (Kerschbaumer et al., 2021). Lesson 4 follows the look from network to network. The point for now: when someone says "Megalodon," ask which parts they mean.

**How to read this course.** Every fact comes with its source at the end of the lesson. Every price carries the date it was read. An earlier draft about this rig got several claims wrong; this course teaches those only as corrections. A lesson that needs a qualified reviewer before release says so in a box at the top that begins "Before release". The course uses "Megalodon" only as the industry nickname, here in lesson 1, and never as a brand. Its title calls the rig what it is: a cinema-look camera rig.

:::reveal What did Fox's internal name "Megalodon" stand for? ||| "Mirrorless Gyrostabilized Lightweight DSLR Nonorig" (Dachman, 2021).

:::reveal Which camera and gimbal did Fox's original rig use? ||| A Sony a7R IV on a DJI Ronin-S handheld gimbal.

## Sources
- ${DACHMAN_2021} Locator: the paragraph on the "Megalodon" and its acronym.
- ${COSTA_2020} Locator: the paragraphs naming the camera, lens, gimbal and transmitter.
- ${MROZEK_2021} Locator: the passage listing the rig's parts, including the 6-inch monitor and the battery backpack.
- ${COSTA_2021} Locator: the paragraph listing BaylorVision's camera, lens and gimbal.
- ${KERSCHBAUMER_2021} Locator: the section on Turner Sports and its Canon C500.`,
    },
    {
      slug: "the-2020-debut",
      title: "2 · The debut: December 20, 2020",
      section: "1 · Why the look",
      recallContent: [
        {
          prompt: "Is a \"Megalodon\" a product you can buy?",
          answer: "No. It is Fox Sports' nickname for a recipe of parts: camera, lens, gimbal, monitor, power and a wireless video link.",
        },
        {
          prompt: "Which lens did Fox's original rig use?",
          answer: "A Sony FE 24-70mm f/2.8 GM zoom.",
        },
      ],
      body: `**The game.** Fox Sports first put the rig on air on December 20, 2020, when Seattle played Washington (Keeley, 2020b). Fox used it for end-zone shots (Costa, 2020). One trade outlet labels that game "Week 16"; other reporting gives only the date. Learn the date. It is the fact every source agrees on.

**The operator.** Fox's first operator on the rig was Mike Smole (Keeley, 2020b). Fox hired an extra camera operator for that first live game (Feldman, 2021). So the rig added a person to the crew.

**Who built it.** Fox's technical director, Jarrod Ligrani, developed the rig with CP Communications starting in 2018 (Mrozek, 2021). CP built several packages for Fox to Fox's specifications and supplied the transmission (Mrozek, 2021; Costa, 2020). So the rig that reached air was a partnership: a network engineer's design, a vendor's build, and the vendor's radio link.

**What it cost, and what that number covers.** One early headline called them "8K end zone cameras" (Keeley, 2020b). Ligrani put it another way: "It's not an 8K camera, it's an $8k camera" (Feldman, 2021). Read that number with care. The transmission came from CP, a separate company, and the operator was an extra hire. Neither is a camera part. So $8,000 describes the camera rig, not the radio link, the crew or the engineering around it.

**A correction to carry.** An earlier draft about this rig said it "cost roughly $10,000." The sourced figure is Ligrani's $8k, and it covers the camera rig only.

**It came back.** Fox brought the rig back for the 2021 NFL postseason (Dachman, 2021). CP Communications' account of the first game says it "caught viewers' attention" (Costa, 2020).

**Why this history matters to an operator.** Fox's first rig was never one person's kit. A network engineer designed it, an RF vendor built it and ran its link, and the network hired a dedicated operator. On a big show today, the operator is usually one part of that kind of team. Sections 5 and 6 cover the rest of the team.

:::reveal On what date did Fox first use the rig, and at which game? ||| December 20, 2020, Seattle at Washington (Keeley, 2020b).

:::reveal What did Ligrani's "$8k camera" figure cover? ||| The camera rig only, not the radio link from CP, the extra operator or the engineering around it.

## Sources
- ${KEELEY_2020} Locator: headline and opening paragraphs (the date, the teams and the operator's name).
- ${COSTA_2020} Locator: headline, and the paragraphs on end-zone shots and CP's transmission.
- ${DACHMAN_2021} Locator: headline, and the paragraph recalling the rig's first game.
- ${FELDMAN_2021} Locator: headline, and the paragraph on hiring an extra camera operator.
- ${MROZEK_2021} Locator: the passage on Ligrani's work with CP Communications since 2018.`,
    },
    {
      slug: "depth-of-field-and-sensor-size",
      title: "3 · Depth of field and sensor size",
      section: "1 · Why the look",
      recallContent: [
        {
          prompt: "Who developed Fox's rig, and with which vendor?",
          answer: "Fox's technical director Jarrod Ligrani, with CP Communications, starting in 2018.",
        },
        {
          prompt: "Who was Fox's first operator on the rig?",
          answer: "Mike Smole.",
        },
      ],
      body: `**What depth of field is.** Depth of field is the zone, from near to far, where things look sharp. A deep zone keeps the player and the stands both clear. A shallow zone keeps the player sharp and blurs everything else. That blur is the look this course is about.

**How thin Fox works.** Fox's operators work with a depth of field under 2 feet, where "there isn't much margin for error" (Mrozek, 2021).

**A worked example.** The numbers below come from the standard thin-lens depth-of-field formula. They rest on two choices, stated so you can check them. First, the subject stands 3 meters (about 10 feet) away. Second, the "circle of confusion," the largest blur spot that still looks sharp, is 0.03 mm on full frame and 0.02 mm on Super 35. Zeiss calls 0.03 mm "the usual" value for the 24 x 36 mm format, and its tables use one fifteen-hundredth of the format's diagonal (Nasse, 2010). The FX30's sensor is 23.3 mm × 15.5 mm (Sony, n.d.-e); one fifteen-hundredth of its diagonal is about 0.02 mm, which is the same rule applied to the smaller sensor. It is still a choice: Zeiss notes that the circle of confusion belongs to "the sensor format," not the lens, and the sharpest work calls for a stricter value (Nasse, 2010).

| Setup | Total depth in focus |
|---|---|
| Full frame, 50mm, f/1.2 | about 0.26 m (10 in) |
| Full frame, 50mm, f/2.0 | about 0.43 m (17 in) |
| Full frame, 50mm, f/2.8 | about 0.60 m (24 in) |
| Full frame, 50mm, f/4.0 | about 0.87 m (34 in) |
| Super 35, 33mm for the same framing, f/2.8 | about 0.94 m (37 in) |

**What the table shows.** Read down the first four rows: the lower the f-number, the thinner the zone. At f/4 the zone is almost 3 feet deep. At f/1.2 it is about 10 inches, so a player who leans forward can leave the zone and go soft.

**Where sensor size comes in.** Sony's FX3 has a "35 mm full frame (35.6 mm × 23.8 mm)" sensor (Sony, n.d.-b). The FX30 is sold as a Super 35 camera (Focus Camera, n.d.-b), and its sensor is smaller. A smaller sensor needs a shorter lens to frame the same shot: 33mm instead of 50mm in the table, because the full-frame diagonal is about 1.5 times the FX30's. The shorter lens gives a deeper zone. Compare the two f/2.8 rows: 0.94 m against 0.60 m. That is about 1.5 times the depth of field. Zeiss states the rule: at the same aperture, "reducing the size of the sensor format increases the depth of field" (Nasse, 2010).

**What that means for a build.** Full frame makes the look easier. Super 35 makes focus easier to hold. Neither is wrong; they trade one thing for the other. And an f/2.8 lens on full frame already lands at about 24 inches here, right at Fox's "under 2 feet." The faster f/1.2 lens is for chosen moments, such as introductions and celebrations, not for the whole game. Section 3 comes back to this.

:::reveal In the worked example, about how deep is the zone in focus at f/1.2 on full frame? ||| About 0.26 m, roughly 10 inches, with the subject 3 m away.

:::reveal Why does a Super 35 camera give more depth of field for the same framing? ||| Its smaller sensor needs a shorter lens (33mm instead of 50mm) to frame the same shot, and the shorter lens gives a deeper zone: about 1.5 times as deep at f/2.8.

## Sources
- ${MROZEK_2021} Locator: the passage on working with under 2 feet of depth of field.
- ${NASSE_2010} Locator: pp. 7 to 8 (0.03 mm as "the usual" circle of confusion; D/1500 in the tables), p. 9 (the circle of confusion belongs to the format; smaller format, more depth of field).
- ${SONY_SPECS} Locator: "Image sensor" entry.
- ${SONY_FX30_SPECS} Locator: "Image sensor" entry (23.3 mm × 15.5 mm).
- ${FOCUS_FX30} Locator: product title.`,
    },
    {
      slug: "the-look-spreads",
      title: "4 · The look spreads",
      section: "1 · Why the look",
      recallContent: [
        {
          prompt: "How deep is the zone in focus that Fox's operators work with?",
          answer: "Under 2 feet, where \"there isn't much margin for error\" (Mrozek, 2021).",
        },
        {
          prompt: "Which gives more depth of field for the same framing at the same f-number: full frame or Super 35?",
          answer: "Super 35, about 1.5 times as much in the worked example.",
        },
      ],
      body: `**Other networks wanted the look.** Within months of Fox's first game, other broadcasters were using the same kind of shot. A Sports Video Group feature from June 2021 called it "the shallow-depth-of-field movement" and said it was "here to stay" (Kerschbaumer et al., 2021).

**Who used it, and with what.**

| Broadcaster | What they used | Source |
|---|---|---|
| FOX Deportes | Fox's rig, on live Liga MX soccer matches, by March 2021 | CP Communications (2021) |
| Marquee Sports Network | The same kind of camera, first on a live MLB broadcast, May 2021 | Sports Video Group (2021) |
| BaylorVision | Its own version for the NCATA national championship, May 2021: Sony a7R III, a Sigma prime, a Zhiyun Crane 3S | Costa (2021) |
| CBS | A MōVI with a Sony Venice, later an Alpha 1 | Kerschbaumer et al. (2021) |
| ESPN | A Sony Alpha 1 and a Canon C500 | Kerschbaumer et al. (2021) |
| Turner Sports | A Canon C500 with a 50mm lens | Kerschbaumer et al. (2021) |
| Netflix | Three shallow-depth-of-field handheld rigs with cinematic lenses at its Home Run Derby, July 2026 | Hernández (2026) |

The Marquee report also notes that the same type of camera had been used at the Masters golf tournament (Sports Video Group, 2021). CBS used its own Alpha package for PGA Tour golf, not Fox's rig (Mrozek, 2021).

**A correction to carry.** An earlier draft said Turner Sports used Fox's rig at the NBA All-Star Game. That mixes up the look with the rig. Turner used a shallow-depth-of-field Canon C500 with a 50mm lens (Kerschbaumer et al., 2021). Same look, different rig.

**Another one.** The same draft said the rig "typically uses" a Sony a7R IV or a7S III. Look at the table: an a7R IV for Fox, an a7R III for BaylorVision, an Alpha 1 for CBS and ESPN, a Canon C500 for ESPN and Turner. No single camera is typical.

**What BaylorVision teaches.** A college production built its own version. Its camera put out HDMI, and an HDMI-to-SDI converter in the operator's backpack turned that into SDI for its transmitter (Costa, 2021). Lesson 7 explains why that converter was needed. A smaller production can reach the same look; what changes is the work of joining it to the show.

**The rule this lesson leaves you with.** The look is standard. The parts are not. When a show asks for "that shallow-focus camera," the useful questions are about the parts: which camera, which lens, which gimbal, which link, and who supplies each one.

:::reveal Which network was first to use the rig on a live MLB broadcast? ||| Marquee Sports Network, in May 2021 (Sports Video Group, 2021).

:::reveal Did Turner Sports use Fox's rig? ||| No. Turner got the same look from a Canon C500 with a 50mm lens (Kerschbaumer et al., 2021).

## Sources
- ${KERSCHBAUMER_2021} Locator: headline, and the sections on CBS, ESPN and Turner Sports.
- ${CP_2021} Locator: headline and opening paragraph.
- ${SVG_2021} Locator: headline, and the paragraph mentioning the Masters.
- ${COSTA_2021} Locator: the paragraphs listing the camera, lens, gimbal and the converter in the backpack.
- ${MROZEK_2021} Locator: the passage on CBS's Alpha package for PGA Tour golf.
- ${HERNANDEZ_2026} Locator: the paragraph on the three shallow-depth-of-field cameras.`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Why the look",
      section: "1 · Why the look",
      body: "A graded check on what the rig is, how Fox put it on air in 2020, how depth of field and sensor size make the look, and how other broadcasters built their own versions. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What is a \"Megalodon\" in sports broadcasting?", options: ["A camera model Sony sells under that exact name", "A broadcast truck built to carry slow replays", "Fox's nickname for a recipe of shallow-focus parts", "A drone that films games from above the end zone"], correctIndex: 2, explanation: "Lesson 1: \"Megalodon\" is Fox Sports' nickname for a handheld, shallow-depth-of-field camera. No company sells a camera by that name; it is a recipe of parts.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Which phrase did Fox's internal name \"Megalodon\" spell out?", options: ["Mirrorless Gyrostabilized Lightweight DSLR Nonorig", "Mobile Gimbal Lens Optical Digital Overhead Network", "Motorized Gyro Lens Over Digital Optical Network", "Mirrorless Gimbal Linked Optical Data Output Node"], correctIndex: 0, explanation: "Dachman (2021) gives Fox's internal acronym as \"Mirrorless Gyrostabilized Lightweight DSLR Nonorig.\" The others are made up.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Which camera did Fox's original rig use?", options: ["A Canon C500 cinema camera with a 50mm", "A RED Komodo-X with a global shutter", "A Sony FX6 with its built-in SDI out", "A Sony a7R IV full-frame mirrorless camera"], correctIndex: 3, explanation: "Fox's original rig used a Sony a7R IV (Costa, 2020). The Canon C500 was Turner's and ESPN's choice; the Komodo-X and FX6 come up later in the course.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Which stabilizer did Fox's original rig use?", options: ["A Zhiyun Crane 3S handheld gimbal", "A DJI Ronin-S handheld gimbal", "A MōVI rig built for cinema bodies", "A DJI Ronin 4D with its own camera"], correctIndex: 1, explanation: "Fox used a DJI Ronin-S. The Zhiyun Crane 3S was BaylorVision's, MōVI rigs were CBS's and ESPN's, and a Ronin 4D is a camera and gimbal in one.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Which lens did Fox's original rig use?", options: ["Sigma 50mm F1.2 DG DN Art prime", "Sony FE 24-70mm f/2.8 GM zoom", "Tamron 28-75mm f/2.8 G2 zoom", "Sony FE 50mm f/1.2 GM prime"], correctIndex: 1, explanation: "Fox's lens was the Sony FE 24-70mm f/2.8 GM (Costa, 2020). The fast primes and the Tamron zoom appear in section 3.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "What monitor did Fox's original rig carry?", options: ["A 13-inch field monitor", "A 17-inch studio monitor", "No monitor of any kind", "A 6-inch field monitor"], correctIndex: 3, explanation: "American Cinematographer adds a 6-inch monitor to the parts list (Mrozek, 2021).", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "How was Fox's original rig powered?", options: ["By a battery backpack", "By a long AC power cord", "By a solar panel on the rig", "By a cable from the truck"], correctIndex: 0, explanation: "Mrozek (2021) lists a battery backpack among the rig's parts.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Which company supplied the transmission for Fox's original rig?", options: ["Game Creek Video", "Faction Media", "CP Communications", "Bexel Broadcast"], correctIndex: 2, explanation: "The rig used a 1080p wireless transmitter with transmission from CP Communications (Costa, 2020).", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Which source adds the 6-inch monitor and the battery backpack to the parts list?", options: ["Sports Video Group news", "CP Communications blog", "Sportico via Yahoo Finance", "American Cinematographer"], correctIndex: 3, explanation: "Lesson 1: the camera, lens, gimbal and transmitter come from CP Communications' account; American Cinematographer (Mrozek, 2021) adds the monitor and backpack.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Other crews built the same look from other parts. Which rule does lesson 1 draw from that?", options: ["Only Fox's parts can make the look", "Every network must buy the same parts", "The look is standard; the parts are not", "The look needs a Sony a7R IV body"], correctIndex: 2, explanation: "BaylorVision and Turner reached the same look with different cameras, lenses and gimbals, so the look is standard and the parts are not.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "When someone asks for a \"Megalodon,\" what does lesson 1 say to ask?", options: ["Which week it aired", "Which parts they mean", "Which store sells it", "Which brand owns it"], correctIndex: 1, explanation: "Because the parts differ from build to build, the useful question is which parts someone means.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "In the recipe, what is the video link's job?", options: ["Carry the picture to a receiver", "Hold the camera level while running", "Set how much of the shot is sharp", "Feed power to the camera and monitor"], correctIndex: 0, explanation: "The video link carries the picture to a receiver. The gimbal holds the camera steady, the lens sets focus, and the batteries feed power.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "In the recipe, what is the lens's job?", options: ["Frame the shot and set how much is sharp", "Carry the picture to the receive point", "Cancel the shake of a walking operator", "Turn light into a live video signal"], correctIndex: 0, explanation: "The lens frames the shot and sets how much is sharp. The link carries the picture, the gimbal cancels shake, and the camera turns light into a signal.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "How does the course handle claims an earlier draft got wrong?", options: ["It leaves them in until a reviewer asks", "It teaches them only as corrections", "It teaches them as one view among many", "It hides them from every quiz question"], correctIndex: 1, explanation: "Lesson 1: an earlier draft got several claims wrong, and this course teaches those only as corrections.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "How does the course use the word \"Megalodon\"?", options: ["As a registered Sony product name", "As the name of a DJI gimbal line", "As the industry nickname, not a brand", "As a trademark of CP Communications"], correctIndex: 2, explanation: "The course uses \"Megalodon\" as the industry nickname, not as a brand. No company sells a product by that name.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "What does a box at the top of a lesson that begins \"Before release\" mean?", options: ["It is optional reading for new crew", "It holds the graded section quiz", "It was written by a Fox engineer", "It needs a qualified reviewer first"], correctIndex: 3, explanation: "Lesson 1: a lesson that needs a qualified reviewer before release says so in a box at the top that begins \"Before release\".", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "On what date did Fox first put the rig on air?", options: ["September 13, 2020", "February 7, 2021", "December 20, 2020", "January 16, 2021"], correctIndex: 2, explanation: "Fox first used the rig on December 20, 2020 (Keeley, 2020b).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "At which NFL game did the rig make its debut?", options: ["Seattle at Washington", "Dallas at Philadelphia", "Green Bay at Chicago", "Seattle at San Francisco"], correctIndex: 0, explanation: "The debut was Seattle at Washington on December 20, 2020 (Keeley, 2020b).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "Why does the course teach the debut's date rather than \"Week 16\"?", options: ["The NFL does not number its weeks", "Week 16 is the name of a different rig", "Only one source gives any date at all", "The date is what every source agrees on"], correctIndex: 3, explanation: "One trade outlet labels the game Week 16 while other reporting gives only the date, so the date is the fact every source shares.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "Who was Fox's first operator on the rig?", options: ["Mike Davies", "Mike Smole", "Jarrod Ligrani", "The game's director"], correctIndex: 1, explanation: "Keeley (2020b) names Mike Smole as the operator. Jarrod Ligrani developed the rig, and Mike Davies is quoted on focus in lesson 10.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "How did Fox staff the rig for its first live game?", options: ["It moved a hard-camera operator over", "It hired an extra camera operator", "It had the truck's shader run the rig", "It let a utility run it between plays"], correctIndex: 1, explanation: "Fox hired an extra camera operator for that first live game (Feldman, 2021), so the rig added a person to the crew.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "Who developed Fox's rig?", options: ["Director of photography Mike Smole", "Fox's NFL play-by-play producer", "Netflix's live sports engineers", "Technical director Jarrod Ligrani"], correctIndex: 3, explanation: "Fox's technical director, Jarrod Ligrani, developed the rig with CP Communications (Mrozek, 2021).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "In what year did Ligrani start developing the rig with CP Communications?", options: ["2018", "2020", "2015", "2021"], correctIndex: 0, explanation: "Mrozek (2021) says Ligrani developed the rig with CP starting in 2018, two years before its debut.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What did CP Communications do for Fox's rig?", options: ["Sold Fox the cameras and lenses at retail prices", "Wrote the NFL's sideline rules for the camera", "Built packages to Fox's specs and ran transmission", "Trained the operator on focus and the gimbal"], correctIndex: 2, explanation: "CP built several packages for Fox to Fox's specifications and supplied the transmission (Mrozek, 2021; Costa, 2020).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What did one early headline call Fox's new cameras?", options: ["\"zero-delay cameras\"", "\"robot sideline cameras\"", "\"IMAX field cameras\"", "\"8K end zone cameras\""], correctIndex: 3, explanation: "Keeley's (2020b) headline said Fox \"broke out 8K end zone cameras.\" Ligrani's own description, in lesson 2, corrects it.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "How did Ligrani describe the camera, as quoted by Sportico?", options: ["\"It's the first 8K camera on any NFL field\"", "\"It cost us more than a broadcast camera\"", "\"It's not an 8K camera, it's an $8k camera\"", "\"It's a $100k camera in a small body\""], correctIndex: 2, explanation: "The quotation, which is also Sportico's headline: \"It's not an 8K camera, it's an $8k camera\" (Feldman, 2021).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What does Ligrani's $8,000 figure cover?", options: ["The camera, the RF link and the crew", "The camera rig, not the link or crew", "The rig plus a season of RF service", "Only the lens, without the camera"], correctIndex: 1, explanation: "The transmission came from CP, a separate company, and the operator was an extra hire; neither is a camera part, so $8,000 describes the camera rig only.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "Why does the $8k figure leave out the radio link?", options: ["The link came from CP, a separate company", "The rig had no radio link in 2020", "The link was free under the NFL deal", "Radio links are counted as lenses"], correctIndex: 0, explanation: "CP Communications supplied the transmission, so the link was not part of the camera rig Ligrani priced.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "Which figure does the course teach for the cost of Fox's camera rig?", options: ["About $8,000, per Ligrani", "About $10,000, per Fox", "About $25,000, per CP", "About $80,000, per SVG"], correctIndex: 0, explanation: "An earlier draft said \"roughly $10,000.\" The sourced figure is Ligrani's $8k, for the camera rig only.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "When did Fox bring the rig back after its debut?", options: ["For the 2022 Super Bowl only", "For the 2021 NFL postseason", "Never; it ran a single time", "For the 2021 MLB All-Star Game"], correctIndex: 1, explanation: "Dachman (2021) reports Fox brought the rig back for the 2021 NFL postseason.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What does CP Communications' account of the first game say the rig did?", options: ["\"won an Emmy that season\"", "\"replaced the hard cameras\"", "\"caught viewers' attention\"", "\"failed in the second half\""], correctIndex: 2, explanation: "The CP account's headline says the camera \"caught viewers' attention\" (Costa, 2020).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What does the debut's history teach a camera operator?", options: ["One operator can supply the whole show", "The vendor ran the camera on its own", "The network bought it off the shelf", "The rig was a team effort, not one kit"], correctIndex: 3, explanation: "A network engineer designed it, an RF vendor built it and ran its link, and the network hired a dedicated operator.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What kind of shots did Fox use the rig for in its first game?", options: ["Press box shots", "Booth shots", "End-zone shots", "Pylon shots"], correctIndex: 2, explanation: "Fox used the rig for end-zone shots (Costa, 2020).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What is depth of field?", options: ["The zone, near to far, that looks sharp", "The distance from the lens to the sensor", "How far a wireless link can reach", "The brightness range a sensor can hold"], correctIndex: 0, explanation: "Depth of field is the zone, from near to far, where things look sharp.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What does a shallow depth of field do to the crowd behind a player?", options: ["Makes it as sharp as the player", "Makes it brighter than the player", "Removes it from the frame entirely", "Blurs it while the player stays sharp"], correctIndex: 3, explanation: "A shallow zone keeps the player sharp and blurs everything else. That blur is the look this course is about.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "How deep is the zone in focus that Fox's operators work with?", options: ["Under 2 inches", "Under 2 feet", "About 10 feet", "About 6 feet"], correctIndex: 1, explanation: "Fox's operators work with a depth of field under 2 feet, where \"there isn't much margin for error\" (Mrozek, 2021).", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "In lesson 3's worked example, how far from the camera is the subject?", options: ["1 m (about 3 ft)", "3 m (about 10 ft)", "10 m (about 33 ft)", "30 m (about 98 ft)"], correctIndex: 1, explanation: "The example assumes a subject 3 meters, about 10 feet, away.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What is the \"circle of confusion\" in the worked example?", options: ["The round shape of the lens's front glass", "The patch of frame the autofocus box covers", "The ring that adjusts focus on the lens", "The largest blur spot that still looks sharp"], correctIndex: 3, explanation: "The example defines it as the largest blur spot that still looks sharp, and states its assumed size.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Which circle of confusion does the worked example assume for full frame?", options: ["0.03 mm", "0.3 mm", "3 mm", "0.003 mm"], correctIndex: 0, explanation: "It assumes 0.03 mm for full frame and 0.02 mm for Super 35, stated so you can check them.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Full frame, 50mm, subject at 3 m: about how deep is the zone at f/1.2?", options: ["About 0.60 m (24 in)", "About 0.87 m (34 in)", "About 0.26 m (10 in)", "About 0.94 m (37 in)"], correctIndex: 2, explanation: "About 0.26 m at f/1.2. The 0.60 m and 0.87 m figures are for f/2.8 and f/4, and 0.94 m is Super 35 at f/2.8.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Full frame, 50mm, subject at 3 m: about how deep is the zone at f/2.8?", options: ["About 0.26 m (10 in)", "About 0.43 m (17 in)", "About 0.87 m (34 in)", "About 0.60 m (24 in)"], correctIndex: 3, explanation: "About 0.60 m at f/2.8. The others are the f/1.2, f/2.0 and f/4 rows.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Full frame, 50mm, subject at 3 m: about how deep is the zone at f/4?", options: ["About 0.43 m (17 in)", "About 0.26 m (10 in)", "About 0.87 m (34 in)", "About 0.60 m (24 in)"], correctIndex: 2, explanation: "About 0.87 m, almost 3 feet, at f/4.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Reading down the worked table, what happens to the zone as the f-number goes down?", options: ["It gets deeper", "It gets thinner", "It stays the same", "It moves closer"], correctIndex: 1, explanation: "From f/4 down to f/1.2 the zone shrinks from about 0.87 m to about 0.26 m: the lower the f-number, the thinner the zone.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What size is the Sony FX3's sensor?", options: ["35.6 mm × 23.8 mm", "23.5 mm × 15.6 mm", "17.3 mm × 13.0 mm", "43.8 mm × 32.9 mm"], correctIndex: 0, explanation: "Sony lists the FX3's sensor as \"35 mm full frame (35.6 mm × 23.8 mm)\" (Sony, n.d.-b).", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Which sensor format is the Sony FX30?", options: ["Super 35", "Full frame", "Medium format", "Large format"], correctIndex: 0, explanation: "The FX30 is a Super 35 camera (Focus Camera, n.d.-b), smaller than the FX3's full frame.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Why does a Super 35 camera give more depth of field for the same framing?", options: ["Its sensor reads out faster than full frame", "It needs a shorter lens for the same shot", "It uses a global shutter on every model", "Its lenses all stop at f/4 or slower"], correctIndex: 1, explanation: "A smaller sensor needs a shorter lens to frame the same shot, and the shorter lens gives a deeper zone.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "In the example, which lens on Super 35 frames the same shot as 50mm on full frame?", options: ["75mm", "50mm", "33mm", "24mm"], correctIndex: 2, explanation: "The table uses 33mm on Super 35 for the same framing as 50mm on full frame.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "At f/2.8 in the example, about how much more depth does Super 35 give than full frame?", options: ["About 3 times as much", "About half as much", "Exactly the same depth", "About 1.5 times as much"], correctIndex: 3, explanation: "0.94 m against 0.60 m: about 1.5 times the depth of field.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What does lesson 3 say about an f/2.8 lens on full frame at 3 m?", options: ["It is too deep to give the look at all", "It cannot hold focus on any player", "It already lands near Fox's under 2 feet", "It only works on a Super 35 sensor"], correctIndex: 2, explanation: "About 24 inches deep, right at Fox's \"under 2 feet,\" so an f/2.8 lens on full frame already gives the look.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What is the f/1.2 lens for, according to lesson 3?", options: ["Chosen moments, such as celebrations", "Every play of the game, start to end", "Night games only, when light is low", "Wide shots of the whole stadium"], correctIndex: 0, explanation: "At f/1.2 a player who leans forward can go soft, so the faster lens is for chosen moments like introductions and celebrations.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What do you trade when choosing full frame against Super 35?", options: ["Lower cost against a longer battery", "Wireless range against latency", "Weight against a global shutter", "An easier look against easier focus"], correctIndex: 3, explanation: "Full frame makes the look easier; Super 35 makes focus easier to hold. They trade one for the other.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What does Zeiss call 0.03 mm for the 24 x 36 mm format?", options: ["The widest aperture", "The usual circle of confusion", "The sensor's pixel size", "The lens's focus throw"], correctIndex: 1, explanation: "Zeiss's paper calls 0.03 mm \"the usual\" circle of confusion for 35 mm format, and its tables use one fifteen-hundredth of the diagonal (Nasse, 2010, pp. 7 to 8).", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Why does the worked example use 0.02 mm for the FX30?", options: ["Zeiss's rule applied to its smaller sensor", "Sony prints 0.02 mm on the FX30's lens", "Super 35 lenses are always half as sharp", "The FX30 records at a lower bit depth"], correctIndex: 0, explanation: "One fifteen-hundredth of the FX30's 23.3 mm × 15.5 mm diagonal is about 0.02 mm, the same rule Zeiss uses for full frame (Nasse, 2010; Sony, n.d.-e).", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "According to Zeiss, what does the circle of confusion belong to?", options: ["The lens design", "The sensor format", "The focus motor", "The frame rate"], correctIndex: 1, explanation: "\"The acceptable diameter of the circle of confusion is therefore not a characteristic of the lens but rather the sensor format\" (Nasse, 2010, p. 9).", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Which network was first to use the rig on a live MLB broadcast?", options: ["ESPN's baseball crew", "Marquee Sports Network", "Netflix's MLB crew", "Turner Sports' MLB crew"], correctIndex: 1, explanation: "Marquee Sports Network was first on a live MLB broadcast (Sports Video Group, 2021).", sourceLessonSlug: "the-look-spreads" },
          { prompt: "When did Marquee Sports Network first use the rig on an MLB broadcast?", options: ["December 2020", "May 2021", "July 2026", "March 2021"], correctIndex: 1, explanation: "Sports Video Group reported it on May 7, 2021. December 2020 was Fox's debut, March 2021 FOX Deportes, and July 2026 Netflix.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "Where did FOX Deportes use the rig?", options: ["Live MLB home games", "Live college football", "Live NBA playoff games", "Live Liga MX matches"], correctIndex: 3, explanation: "FOX Deportes debuted it on live Liga MX matches (CP Communications, 2021).", sourceLessonSlug: "the-look-spreads" },
          { prompt: "Which gimbal did BaylorVision's version use?", options: ["A Zhiyun Crane 3S", "A DJI Ronin-S", "A MōVI rig", "A DJI RS 4 Pro"], correctIndex: 0, explanation: "BaylorVision used a Zhiyun Crane 3S (Costa, 2021). The Ronin-S was Fox's; MōVI rigs were CBS's and ESPN's.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "Which camera did BaylorVision's version use?", options: ["A Sony a7R IV", "A Sony FX6", "A Sony a7R III", "A Canon C500"], correctIndex: 2, explanation: "BaylorVision used a Sony a7R III (Costa, 2021). Fox used the a7R IV.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "For which event did BaylorVision deploy its version?", options: ["The NFL's 2021 postseason", "The Masters golf tournament", "Netflix's Home Run Derby", "The NCATA national championship"], correctIndex: 3, explanation: "Costa (2021) covers BaylorVision's version at the NCATA national championship.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "Why did BaylorVision carry an HDMI-to-SDI converter in the backpack?", options: ["Its link put out HDMI; the truck took fiber", "Its camera needed the box to record audio", "Its camera put out HDMI; its link took SDI", "Its gimbal needed SDI to control the lens"], correctIndex: 2, explanation: "The camera put out HDMI, and the converter turned that into SDI for the transmitter (Costa, 2021). Lesson 7 explains why.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "What did CBS use for its shallow-focus look?", options: ["A Ronin-S with an a7R IV, like Fox's", "A MōVI with a Venice, later an Alpha 1", "A Crane 3S with an a7R III and a prime", "A Ronin 4D with its built-in camera"], correctIndex: 1, explanation: "Kerschbaumer et al. (2021): CBS used a MōVI with a Sony Venice, later an Alpha 1.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "Did CBS use Fox's rig for PGA Tour golf?", options: ["No; it used its own Alpha package", "Yes; Fox lent CBS its rig for golf", "Yes; CP built CBS a copy of Fox's", "No; it used a fixed tower camera"], correctIndex: 0, explanation: "Mrozek (2021): CBS used its own Alpha package for PGA Tour golf, not Fox's rig.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "Which cameras did ESPN use for the look?", options: ["A Sony Alpha 1 and a Canon C500", "A Sony a7R IV and a RED Komodo-X", "A Sony FX3 and a Sony FX6 body", "A Canon C300 and a Sony Venice"], correctIndex: 0, explanation: "Kerschbaumer et al. (2021): ESPN used a Sony Alpha 1 and a Canon C500.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "How did Turner Sports get its shallow-focus look?", options: ["Fox's own rig, lent for the game", "A Canon C500 with a 50mm lens", "A Sony a7R IV with a 24-70mm", "A RED Komodo-X with a 35mm lens"], correctIndex: 1, explanation: "Turner used a Canon C500 with a 50mm lens (Kerschbaumer et al., 2021), not Fox's rig.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "What is wrong with the claim that Turner used Fox's rig at the NBA All-Star Game?", options: ["Turner never used a shallow look", "The game aired on Fox, not Turner", "It mixes up the look with Fox's rig", "Turner used it at the Super Bowl"], correctIndex: 2, explanation: "Turner got the same look from its own Canon C500 and 50mm lens. Same look, different rig.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "According to lesson 4, which camera is typical of these rigs?", options: ["The Sony a7S III, on most rigs", "The Sony a7R IV, on every rig", "The Canon C500, on every rig", "None; the bodies differ by network"], correctIndex: 3, explanation: "The table shows an a7R IV, an a7R III, an Alpha 1 and a Canon C500 across networks, so no single camera is typical.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "How many shallow-depth-of-field handheld rigs did Netflix use at its 2026 Home Run Derby?", options: ["One", "Six", "Three", "Ten"], correctIndex: 2, explanation: "Hernández (2026) reports three shallow-depth-of-field rigs with cinematic lenses at the July 2026 Home Run Derby.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "What does the Marquee report say about the Masters golf tournament?", options: ["The same type of camera had been used there", "Fox's own rig made its debut at the Masters", "The camera was banned from the Masters", "Marquee shot the Masters with the rig"], correctIndex: 0, explanation: "The report notes that the same type of camera had been used at the Masters (Sports Video Group, 2021).", sourceLessonSlug: "the-look-spreads" },
          { prompt: "What did Sports Video Group's June 2021 feature say about the shallow-focus look?", options: ["That it was a passing fad", "That it cost too much to last", "That it would not work at night", "That it was \"here to stay\""], correctIndex: 3, explanation: "The feature's headline calls it \"the shallow-depth-of-field movement\" and says it is \"here to stay\" (Kerschbaumer et al., 2021).", sourceLessonSlug: "the-look-spreads" },
          { prompt: "When a show asks for the shallow-focus look, which questions does lesson 4 call useful?", options: ["Which network first named the rig", "Which parts, and who supplies each", "Which week of the season it is", "Which fans will be in the shot"], correctIndex: 1, explanation: "The look is standard and the parts are not, so the useful questions are which camera, lens, gimbal and link, and who supplies each.", sourceLessonSlug: "the-look-spreads" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: The camera body
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "choosing-a-body",
      title: "5 · Choosing a body",
      section: "2 · The camera body",
      recallContent: [
        {
          prompt: "Name two broadcasters that built their own shallow-focus rig instead of using Fox's.",
          answer: "Any two of: BaylorVision (a7R III, Sigma prime, Zhiyun Crane 3S), CBS (MōVI with Venice, later Alpha 1), ESPN (Alpha 1 and Canon C500), Turner (Canon C500 with a 50mm lens).",
        },
        {
          prompt: "What rule does lesson 4 leave you with?",
          answer: "The look is standard. The parts are not.",
        },
      ],
      body: `**The body's job.** The camera body turns light into a live video signal and, if you want, a recording too. For this rig it must also be small and light enough to ride a gimbal all game.

**What the documented rigs used.** Fox used a Sony a7R IV (Costa, 2020). BaylorVision used an a7R III (Costa, 2021). CBS moved to a Sony Alpha 1, ESPN used an Alpha 1 and a Canon C500, and Turner used a Canon C500 (Kerschbaumer et al., 2021).

**The body many crews use now.** The Sony FX3 has become a common small body for this work. Its specs explain why:

- **Full frame.** Its sensor is "35 mm full frame (35.6 mm × 23.8 mm)" (Sony, n.d.-b), which makes the shallow look easier, as lesson 3 showed.
- **Light.** It weighs about 715 g with battery and card (Sony, n.d.-b). Every gram rides on the gimbal and the operator's arms.
- **Remote control.** Cyanview, a company whose systems let a video operator in the truck adjust cameras from afar, lists the FX3 as the most popular body for its mirrorless gimbal workflow, and connects to it by USB-C (Cyanview, n.d.-b).

**Its weakness.** The FX3 has a single HDMI video output and no genlock input (Sony, n.d.-b; Sony, n.d.-a). Lesson 7 explains what that costs on a live show.

**Which FX3.** Lensrentals says Sony "has discontinued" the original FX3 (Lensrentals, n.d.-a). The model on sale on October 21, 2026, was the FX3A, sold as the ILME-FX3A (Focus Camera, n.d.-a). The specs in this course come from Sony's help guide for the ILME-FX3; check the help guide for your own model before relying on a number.

**Two neighbors.**

| Body | What it adds or gives up | Source |
|---|---|---|
| Sony FX30 | A Super 35 sensor: deeper depth of field for the same framing, so focus is easier and the look is weaker | Focus Camera (n.d.-b); lesson 3 |
| Sony FX6 | A full-frame body with "12G/6G/3G SDI output and a full-sized HDMI output," BNC timecode, and no genlock; the body alone weighs 890 g | Allard (2020); Focus Camera (n.d.-c) |

**How to choose.** Ask three questions. Does the show need the full-frame look, or is easier focus worth more? How will the picture leave the camera: HDMI through a converter, or SDI straight out? And what will the gimbal carry once the lens, monitor, transmitter and cables are on? The FX6 answers the second question better than the FX3; the FX3 answers the third better than the FX6. Section 8 puts prices on these choices.

:::reveal Why is the Sony FX3 a common small body for this rig? ||| It is full frame, light (about 715 g with battery and card), and accepts USB-C control, and Cyanview lists it as the most popular body for its mirrorless gimbal workflow.

:::reveal What is the FX3's main weakness on a live show? ||| A single HDMI output and no genlock input.

## Sources
- ${COSTA_2020} Locator: the paragraph naming the Sony a7R IV.
- ${COSTA_2021} Locator: the paragraph naming the Sony a7R III.
- ${KERSCHBAUMER_2021} Locator: the sections on CBS, ESPN and Turner Sports.
- ${SONY_SPECS} Locator: "Image sensor", "Mass" and "Input/output terminals" entries.
- ${SONY_TIMECODE} Locator: the whole page (timecode matching only).
- ${CYANVIEW_GIMBAL} Locator: introduction and "Camera" section.
- ${LENSRENTALS_FX3} Locator: the product notice on the page.
- ${FOCUS_FX3A} Locator: product title and model number.
- ${FOCUS_FX30} Locator: product title.
- ${FOCUS_FX6} Locator: product title.
- ${ALLARD_2020} Locator: the specifications section (outputs, timecode, weight).`,
    },
    {
      slug: "rolling-and-global-shutter",
      title: "6 · Rolling and global shutters",
      section: "2 · The camera body",
      recallContent: [
        {
          prompt: "What did Lensrentals say about the original Sony FX3?",
          answer: "That Sony \"has discontinued\" it. The model on sale on October 21, 2026, was the FX3A (ILME-FX3A).",
        },
        {
          prompt: "Which Sony body in lesson 5 has SDI output built in?",
          answer: "The FX6, with \"12G/6G/3G SDI output and a full-sized HDMI output\" (Allard, 2020).",
        },
      ],
      body: `**Two ways to read a sensor.** A camera sensor has to read out millions of pixels for every frame. RED, a cinema camera maker, explains the usual way: "With most digital cameras, the shutter is controlled by the sensor itself. Photosites are read row by row in rapid succession" (RED Digital Cinema, n.d.-a). That is a **rolling shutter**. A **global shutter**, in RED's words, "controls incoming light to all photosites simultaneously."

**Why it matters.** With a rolling shutter, the top of the frame is read a moment before the bottom. RED lists what that does: "fast-moving subjects can appear angled or sheared, and rapid camera movements are more likely to appear as a wobble." It adds that the effects are "most pronounced with whip pans, fast subjects, high shutter speeds or run and gun type shots," and that "Strobes can also partially illuminate the frame" (RED Digital Cinema, n.d.-a). Crews call the wobble "jello." A global shutter "effectively addresses all of the potential rolling shutter artifacts," because every pixel is taken at once.

**Which bodies have which.** The RED Komodo-X has a "6K S35 Global Shutter sensor" (AbelCine, n.d.). Sony's specifications describe the FX3's sensor as CMOS and make no global-shutter claim (Sony, n.d.-b), and the FX6 is described the same way (Allard, 2020). Most digital sensors read row by row, and a maker that built a global shutter would say so, so this course treats the FX3 and FX6 as rolling-shutter cameras. That is a reasoned inference, not a statement from Sony.

**A correction to carry.** An earlier draft grouped the Sony FX6 with the RED Komodo-X as "global shutter / true cine body" cameras. That pairing is wrong. The Komodo-X has a global shutter; nothing in the FX6's description claims one. The same draft listed a DJI Ronin 4D on top of a separate camera body. A Ronin 4D is a camera and gimbal in one unit (DJI, n.d.-e), so it replaces both, and it cannot ride on another gimbal.

**When skew shows up on a sideline.** A gimbal following players mostly moves smoothly. The rolling-shutter lean appears mainly when the operator whips the camera fast, on a fast subject such as a spinning ball, or under strobes. So on most sideline shots, the shutter type is not the problem that limits you. Focus is (section 3).

**Flicker is a different problem.** It is easy to blame the shutter when an LED board or stadium light flickers on camera. RED's list names strobes, not LED boards, and it treats flicker under artificial light separately: "A common misconception is that a global shutter can fix flickering in artificial light, but neither shutter type fully addresses this problem." RED's two ways around it are continuous lighting, or "a safe shutter speed and frame rate combination" (RED Digital Cinema, n.d.-a). So a global shutter does not cure flicker. A shutter speed and frame rate that suit the lights do.

**What a global shutter costs.** RED itself says "Some global shutter designs can also make sensor photosites less efficient, which can in turn compromise image noise" (RED Digital Cinema, n.d.-a). It costs payload too. RED lists the Komodo-X body at 2.62 lb (about 1.19 kg) without body cap and card (RED Digital Cinema, n.d.-b), against about 715 g for the FX3 with battery and card (Sony, n.d.-b). Lesson 7 shows one more thing the Komodo-X adds: a genlock input. But a global shutter mostly solves a problem a sideline operator will rarely meet, so it is seldom the first thing to pay for.

**What to do with a rolling shutter.** Watch for the lean on fast moves in rehearsal. If you see it, slow the move. The camera cannot be changed during a game, but the move can.

:::reveal What is the difference between a rolling and a global shutter? ||| A rolling shutter reads the sensor line by line, so fast moves can lean or wobble; a global shutter exposes every pixel at once.

:::reveal Which body in this lesson has a global shutter sensor? ||| The RED Komodo-X: a "6K S35 Global Shutter sensor" (AbelCine, n.d.).

## Sources
- ${RED_SHUTTERS} Locator: the sections on rolling shutters (row-by-row readout, the artifacts list, strobes), on global shutters, on the noise trade-off, and the paragraph on flicker in artificial light.
- ${RED_KOMODO_X} Locator: specifications, weight.
- ${ABELCINE} Locator: product title and the sensor line in the specifications.
- ${SONY_SPECS} Locator: "Image sensor" and "Mass" entries.
- ${ALLARD_2020} Locator: the sensor description in the specifications section.
- ${DJI_RONIN_4D} Locator: product title and description.`,
    },
    {
      slug: "outputs-timecode-and-genlock",
      title: "7 · Outputs, timecode and genlock",
      section: "2 · The camera body",
      recallContent: [
        {
          prompt: "Why does this course treat the FX3 and FX6 as rolling-shutter cameras?",
          answer: "Their descriptions call the sensors CMOS and make no global-shutter claim, while the Komodo-X's page names its global shutter.",
        },
        {
          prompt: "Why can a DJI Ronin 4D not sit on another gimbal?",
          answer: "It is a camera and gimbal in one unit, so it replaces both.",
        },
      ],
      body: `${QR("a broadcast engineer in charge (EIC), to check the guidance on converters and frame synchronizers")}

**How the picture leaves the camera.** A live camera is only useful if its picture reaches the truck. The first step is the camera's video output.

| Body | Video output | Source |
|---|---|---|
| Sony FX3 | "HDMI type A jack" only | Sony (n.d.-b) |
| Sony FX6 | "12G/6G/3G SDI output and a full-sized HDMI output," plus BNC timecode in and out | Allard (2020) |
| RED Komodo-X | 12G-SDI up to 4096 × 2160 4:2:2 60p, and a "Tri-Level Genlock Input" | AbelCine (n.d.) |

**HDMI against SDI.** A body with SDI out, like the FX6 or the Komodo-X, sends its picture on a locking BNC connector and needs no converter (Allard, 2020; AbelCine, n.d.). That is why the research behind this course rates SDI-out bodies better for network trucks. An HDMI-only body like the FX3 needs a converter, or a transmitter that takes HDMI, for live work. And because its single HDMI jack carries the whole show, use a locking or clamped HDMI cable with strain relief on a moving rig.

**The converter.** Blackmagic Design's Micro Converter HDMI to SDI 3G was listed at $75 MSRP on October 21, 2026 (Blackmagic Design, n.d.). BaylorVision carried an HDMI-to-SDI converter in its operator's backpack (Costa, 2021). That is the workaround lesson 4 mentioned.

**Timecode is not genlock.** These two get mixed up, and they do different jobs.

- **Timecode** is a label on every frame: hours, minutes, seconds and frame number. It lets recordings from different cameras line up later, in replay and in editing.
- **Genlock** locks the timing of the camera's picture to the truck's reference signal, so every camera's frames start at the same instant.

The FX3 can take external timecode through Sony's VMC-BNCM1 adapter on its Multi/Micro USB port. Sony's page describes matching timecode only; it says nothing about genlock (Sony, n.d.-a). The FX6 has BNC timecode in and out, and no genlock (Allard, 2020). Of the three bodies here, only the Komodo-X lists a genlock input (AbelCine, n.d.).

**What the truck does about it.** A camera without genlock sends frames on its own timing. The truck re-times that feed with a **frame synchronizer**, a box that holds each frame and releases it in step with the house reference. AJA's FS-Mini is one: a "utility frame sync" that locks to blackburst or tri-level reference, listed at $989 US MSRP on October 21, 2026 (AJA Video Systems, n.d.). A network truck has frame sync built in. A small show or a stream may not, and then someone has to bring one.

**What to ask before the job.** Will the camera's picture arrive as HDMI or SDI? Who converts it? Who does frame sync? These questions come back in section 6.

:::reveal What is the difference between timecode and genlock? ||| Timecode labels each frame so recordings line up later; genlock locks the camera's picture timing to the truck's reference.

:::reveal How does a truck handle a camera with no genlock? ||| It re-times the feed with a frame synchronizer, such as AJA's FS-Mini, which locks to blackburst or tri-level reference.

## Sources
- ${SONY_SPECS} Locator: "Input/output terminals" entry.
- ${SONY_TIMECODE} Locator: the whole page, the VMC-BNCM1 adapter and the Multi/Micro USB terminal.
- ${ALLARD_2020} Locator: the specifications section (SDI, HDMI, timecode, genlock).
- ${ABELCINE} Locator: specifications, video outputs and the genlock input.
- ${BLACKMAGIC} Locator: Micro Converter HDMI to SDI 3G entry and its price.
- ${AJA_FS_MINI} Locator: product overview and price.
- ${COSTA_2021} Locator: the paragraph on the converter in the backpack.`,
    },
    {
      slug: "recording-power-and-heat",
      title: "8 · Recording, power and heat",
      section: "2 · The camera body",
      recallContent: [
        {
          prompt: "What is the FX3's only video output?",
          answer: "An \"HDMI type A jack\" (Sony, n.d.-b).",
        },
        {
          prompt: "What does a frame synchronizer do?",
          answer: "It holds each frame from an unlocked camera and releases it in step with the truck's reference signal.",
        },
      ],
      body: `${QR("a broadcast camera technician or battery specialist, to check the external-power guidance")}

**Recording is not the live feed.** Live TV takes the camera's video output. The recording inside the camera is a separate copy, used for an isolated ("iso") record, for replay or for editing later. So the recording format matters for those uses, not for the live picture.

**What the FX3 records.** Sony lists XAVC HS (H.265) and XAVC S (H.264) video with LPCM audio. With the XLR handle attached, it records 4 channels of LPCM audio (Sony, n.d.-b).

**What goes out over HDMI.** Bit depth is how many steps of brightness the signal carries. Sony's help guide for the FX3 says the HDMI bit depth depends on whether the camera is also recording to its card (Sony, n.d.-c):

- **Recording at the same time:** "The color depth for the output movie is based on [Record Setting]." The record settings include both 8-bit and 10-bit choices; in XAVC S 4K at 59.94p, for example, there are "200M 4:2:2 10bit" and "150M 4:2:0 8bit" (Sony, n.d.-d). So an 8-bit record setting means an 8-bit feed.
- **HDMI only, no card recording:** every 4K output option is 10-bit, from "[59.94p 10bit]" to "[24.00p 10bit]" (Sony, n.d.-c).

**Two traps on the same page.** With Log shooting on, "the HDMI output resolution becomes 1080" unless the camera is in HDMI-only mode or RAW output (Sony, n.d.-c). And a RAW output exists, but "RAW movies cannot be recorded on the memory card," and the gamma is locked to S-Log3; it is meant for an external RAW recorder, not a live feed (Sony, n.d.-c, n.d.-f).

**What Sony's help guide does not say.** Sony's help guide does not state the color sampling of the HDMI signal (4:2:2 or 4:2:0). A shader in the truck can push color further on a richer signal, so check the sampling on the receiving monitor or converter before you promise a show 4:2:2.

**How much power.** Sony lists the FX3 at about 7.3 W while shooting movies (Sony, n.d.-b). The FX6 draws about 18.0 W (Allard, 2020). A bigger body draws more, which means bigger or more batteries on the rig.

**Heat.** The FX3's operating range is 0 to 40 °C (Sony, n.d.-b). A camera in the sun on a hot field can pass that. Fox found that moving the batteries out of the camera helped with overheating: "Getting the batteries out of the camera helped" (Mrozek, 2021). BaylorVision found the backpack ran hot too: "The battery and RF units got quite hot during both productions" (Costa, 2021). Shade the rig at breaks, and give the backpack airflow.

**External power, and why the cable matters.** Fox's rig fed its parts from a battery backpack (Mrozek, 2021). One way to feed the FX3 from a large battery is a "dummy battery," a plug shaped like the camera's own battery, on the end of a cable. The FX3's battery is rated 7.2 V (Sony, n.d.-b). A common 98 Wh V-mount pack, the Core SWX NANO X Micro, is rated 14.8 V (Core SWX, n.d.-a). That is about twice the camera's rating. So the cable between them must be **regulated**: it must bring the voltage down to what the camera expects. Indipro, for example, sells a regulated D-Tap to NP-FZ100 dummy cable (Indipro Tools, n.d.).

**USB power.** Sony lists a recommended USB adaptor output of "9 V / 2 A or more, 15 V / 2 A or more" for the FX3 (Sony, n.d.-b). An earlier draft said "9V/3A"; use Sony's own figures.

**Batteries are energy, not continuity.** Swapping the main pack cuts power to everything on it, unless something bridges the gap: a plate that takes two packs, or the camera's own battery left inside. Section 7 covers how to plan a swap.

:::reveal Why must a D-Tap to dummy-battery cable for the FX3 be regulated? ||| The FX3's battery is rated 7.2 V, and a typical 98 Wh V-mount pack is 14.8 V, about twice that; a regulated cable brings the voltage down.

:::reveal What did Fox find helped with overheating? ||| Moving the batteries out of the camera: "Getting the batteries out of the camera helped" (Mrozek, 2021).

## Sources
- ${SONY_SPECS} Locator: "Recording format", "Audio recording format", "Power consumption", "Operating temperature", "Rated voltage" and "Recommended USB adaptor" entries.
- ${SONY_HDMI} Locator: [Rec. Media dur HDMI Output], [4K Output Set.(HDMI Only)], [RAW Output] and the note on Log shooting and 1080 output.
- ${SONY_MOVIE_SETTINGS} Locator: [Record Setting] list for XAVC S 4K.
- ${SONY_RAW_OUT} Locator: the notes on recording to the card and on S-Log3.
- ${ALLARD_2020} Locator: the specifications section, power consumption.
- ${MROZEK_2021} Locator: the passages on the battery backpack and quoting Ligrani on moving the batteries.
- ${COSTA_2021} Locator: the paragraph on the battery and RF units running hot.
- ${CORE_SWX} Locator: specifications, voltage and capacity.
- ${INDIPRO} Locator: product title and description.`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The camera body",
      section: "2 · The camera body",
      body: "A graded check on choosing a camera body, rolling and global shutters, video outputs, timecode and genlock, and recording, power and heat. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What is the camera body's job on this rig?", options: ["Carry the picture to the receiver", "Cancel the shake of the operator", "Turn light into a live video signal", "Set how much of the shot is sharp"], correctIndex: 2, explanation: "The body turns light into a live video signal and, if you want, a recording too. The link, gimbal and lens do the other jobs.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which camera body did CBS move to for its shallow-focus look?", options: ["A Sony Alpha 1", "A Sony FX6", "A Canon C500", "A RED Komodo-X"], correctIndex: 0, explanation: "Kerschbaumer et al. (2021): CBS moved to a Sony Alpha 1. The Canon C500 was ESPN's and Turner's.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which body does lesson 5 call a common small body for this work today?", options: ["The Sony Venice", "The Canon C300", "The RED Raptor", "The Sony FX3"], correctIndex: 3, explanation: "The Sony FX3 has become a common small body for this work, for the reasons its specs give.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "About how much does the Sony FX3 weigh?", options: ["About 1.6 kg with battery and card", "About 715 g with battery and card", "About 890 g for the body alone", "About 3 kg with a lens and cage"], correctIndex: 1, explanation: "Sony lists about 715 g with battery and card (Sony, n.d.-b). 890 g is the FX6 body, and 1.6 kg is the Sigma cine zoom.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Why does a body's weight matter on this rig?", options: ["Heavy bodies cannot output HDMI", "Every gram rides the gimbal and arms", "Heavier bodies have shallower focus", "Light bodies overheat more quickly"], correctIndex: 1, explanation: "Every gram rides on the gimbal and the operator's arms, all game.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "How does Cyanview's mirrorless gimbal workflow connect to the FX3?", options: ["By SDI", "By Wi-Fi only", "By BNC timecode", "By USB-C"], correctIndex: 3, explanation: "Cyanview connects to the FX3 by USB-C (Cyanview, n.d.-b).", sourceLessonSlug: "choosing-a-body" },
          { prompt: "How does Cyanview describe the FX3?", options: ["The most popular body for its gimbal workflow", "The only body its systems can control at all", "A body it no longer supports in any workflow", "A body that needs a VP4 for exposure control"], correctIndex: 0, explanation: "Cyanview lists the FX3 as the most popular body for its mirrorless gimbal workflow (Cyanview, n.d.-b).", sourceLessonSlug: "choosing-a-body" },
          { prompt: "What is the FX3's main weakness on a live show?", options: ["No autofocus with Sony's zoom lenses", "No way to take external timecode", "One HDMI output and no genlock input", "A sensor smaller than Super 35"], correctIndex: 2, explanation: "The FX3 has a single HDMI output and no genlock input. It can take external timecode, and its sensor is full frame.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "What did Lensrentals say about the original Sony FX3?", options: ["That Sony cut its price in half", "That Sony added SDI in firmware", "That Sony recalled it for heat", "That Sony \"has discontinued\" it"], correctIndex: 3, explanation: "Lensrentals says Sony \"has discontinued\" the original FX3 (Lensrentals, n.d.-a).", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which FX3 model was on sale on October 21, 2026?", options: ["The original FX3 only", "The FX30 under a new name", "The FX3A (ILME-FX3A)", "The FX6, renamed FX3"], correctIndex: 2, explanation: "The model on sale that day was the FX3A, sold as the ILME-FX3A (Focus Camera, n.d.-a).", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Where do this course's FX3 specifications come from?", options: ["A rental house's listing for the FX3A", "Sony's help guide for the ILME-FX3", "A forum thread about the FX3A", "Fox's internal camera notes"], correctIndex: 1, explanation: "The specs come from Sony's help guide for the ILME-FX3; check the guide for your own model before relying on a number.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "What does the Super 35 FX30 give up to make focus easier?", options: ["Some of the look", "Its HDMI output", "Its autofocus", "Its timecode"], correctIndex: 0, explanation: "A Super 35 sensor gives deeper depth of field for the same framing, so focus is easier and the look is weaker.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "What does the Sony FX6 have that the FX3 lacks?", options: ["SDI output and BNC timecode", "A global-shutter sensor", "A tri-level genlock input", "A lighter body than the FX3"], correctIndex: 0, explanation: "The FX6 adds \"12G/6G/3G SDI output\" and BNC timecode (Allard, 2020). It has no genlock, no global-shutter claim, and weighs more.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "How much does the Sony FX6 body alone weigh?", options: ["715 g", "890 g", "1.6 kg", "4.5 kg"], correctIndex: 1, explanation: "The FX6 body alone is 890 g (Allard, 2020). 715 g is the FX3 with battery and card.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Does the Sony FX6 have a genlock input?", options: ["Yes, on a BNC input", "Yes, through its HDMI", "No, it has no genlock", "Only with an adapter"], correctIndex: 2, explanation: "Allard (2020): the FX6 has SDI, HDMI and BNC timecode in and out, and no genlock.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which of lesson 5's questions does the FX6 answer better than the FX3?", options: ["What the gimbal will carry", "How shallow the look can go", "How long the batteries last", "How the picture leaves the camera"], correctIndex: 3, explanation: "With SDI built in, the FX6 answers how the picture leaves the camera better; the lighter FX3 answers what the gimbal will carry better.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which of lesson 5's questions does the FX3 answer better than the FX6?", options: ["How the picture leaves it", "Which body has genlock", "What the gimbal will carry", "Which has a global shutter"], correctIndex: 2, explanation: "The FX3 is lighter (about 715 g with battery and card against 890 g for the FX6 body), so it answers the gimbal-load question better.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which camera did Turner Sports use?", options: ["A Canon C500", "A Sony FX3", "A Sony a7R IV", "A RED Komodo-X"], correctIndex: 0, explanation: "Turner used a Canon C500 (Kerschbaumer et al., 2021).", sourceLessonSlug: "choosing-a-body" },
          { prompt: "How does a rolling shutter read the sensor?", options: ["Every pixel at the same moment", "One color at a time, red first", "Only while the camera is still", "One line at a time, top to bottom"], correctIndex: 3, explanation: "A rolling shutter reads the sensor one line at a time, top to bottom. A global shutter exposes every pixel at once.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "How does a global shutter expose the sensor?", options: ["One line at a time, top to bottom", "Every pixel at the same moment", "Only the center of the frame", "Every other frame, to save power"], correctIndex: 1, explanation: "A global shutter exposes every pixel at the same moment, so it does not lean on fast movement.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What can a rolling shutter do to the picture on a fast whip pan?", options: ["Turn the picture black and white", "Make the picture lean or wobble", "Drop the audio for one frame", "Double the frame rate briefly"], correctIndex: 1, explanation: "The top of the frame is read before the bottom, so a fast move can make the picture lean or wobble.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What do crews call the wobble a rolling shutter can cause?", options: ["\"Ghosting\"", "\"Breathing\"", "\"Banding\"", "\"Jello\""], correctIndex: 3, explanation: "Lesson 6: crews call the wobble \"jello.\"", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Which camera in lesson 6 has a global shutter?", options: ["RED Komodo-X", "Sony FX6", "Sony FX3", "Sony a7R IV"], correctIndex: 0, explanation: "The RED Komodo-X has a \"6K S35 Global Shutter sensor\" (AbelCine, n.d.).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "How does AbelCine describe the Komodo-X's sensor?", options: ["\"8K full-frame rolling sensor\"", "\"4K Super 35 stacked sensor\"", "\"6K S35 Global Shutter sensor\"", "\"6K full-frame dual-ISO sensor\""], correctIndex: 2, explanation: "AbelCine's page: a \"6K S35 Global Shutter sensor.\"", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Why does the course treat the FX3 as a rolling-shutter camera?", options: ["Sony's page says it is rolling-shutter", "Every full-frame body is rolling-shutter", "Fox's engineers measured its readout", "Its specs make no global-shutter claim"], correctIndex: 3, explanation: "Sony's specifications call the sensor CMOS and make no global-shutter claim; a maker that built one would say so.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What was wrong with grouping the Sony FX6 with the Komodo-X as global-shutter bodies?", options: ["Only the FX6 has a global shutter", "Both cameras lack any SDI output", "Only the Komodo-X has a global shutter", "The FX6 is the one with genlock"], correctIndex: 2, explanation: "The Komodo-X has a global shutter; nothing in the FX6's description claims one. Both have SDI, and only the Komodo-X lists genlock.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What is a DJI Ronin 4D?", options: ["A gimbal for cameras up to 4 kg", "A camera and gimbal in one unit", "A wireless link with 4D audio", "A lens made for cinema gimbals"], correctIndex: 1, explanation: "A Ronin 4D is a camera and gimbal in one unit (DJI, n.d.-e).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Why can a DJI Ronin 4D not ride on a separate gimbal?", options: ["It replaces both body and gimbal", "It only works on a tripod head", "It needs a cable to the truck", "Its shutter cannot be stabilized"], correctIndex: 0, explanation: "Because it is a camera and gimbal in one, it replaces both and cannot sit on another gimbal.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "When does rolling-shutter lean mainly show up on a sideline?", options: ["On fast whips and spinning balls", "On every shot, even slow follows", "Only at night, under the lights", "Only while the camera records"], correctIndex: 0, explanation: "A gimbal following players mostly moves smoothly; the lean appears mainly on fast whips, fast subjects such as a spinning ball, and under strobes (RED Digital Cinema, n.d.-a).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "According to lesson 6, what usually limits a sideline operator more than shutter type?", options: ["Audio", "Focus", "Tally", "Timecode"], correctIndex: 1, explanation: "On most sideline shots, the shutter type is not the problem that limits you. Focus is (section 3).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Besides a global shutter, what does the Komodo-X add that lesson 7 describes?", options: ["An XLR audio input", "A fiber input", "A genlock input", "A tally input"], correctIndex: 2, explanation: "Lesson 6 points ahead to lesson 7: the Komodo-X lists a \"Tri-Level Genlock Input\" (AbelCine, n.d.).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What does lesson 6 advise if you see rolling-shutter lean in rehearsal?", options: ["Swap to a new body", "Raise the f-number", "Turn on autofocus", "Slow down the move"], correctIndex: 3, explanation: "The camera cannot be changed during a game, but the move can. Slow it.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Why is a global shutter seldom the first thing to pay for on a sideline?", options: ["It cannot be used with autofocus lenses", "It is not allowed on NFL sidelines", "It solves a problem you will rarely meet", "It only works with Sony's own lenses"], correctIndex: 2, explanation: "On most sideline shots the camera moves smoothly, so rolling-shutter lean is rarely the limiting problem.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What does a global shutter avoid?", options: ["Lean on fast movement", "Soft focus on players", "Heat in direct sun", "Delay in the wireless link"], correctIndex: 0, explanation: "Every pixel is exposed at once, so the picture does not lean on fast moves. It does nothing for focus, heat or link delay.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Which pair does the course treat as rolling-shutter cameras?", options: ["RED Komodo-X and FX6", "Komodo-X and Ronin 4D", "Sony FX3 and Komodo-X", "Sony FX3 and Sony FX6"], correctIndex: 3, explanation: "Both Sony bodies are described as CMOS with no global-shutter claim. The Komodo-X has a global shutter.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "With a rolling shutter, when is the top of the frame read?", options: ["After the bottom", "Before the bottom", "At the same moment", "Only on odd frames"], correctIndex: 1, explanation: "A rolling shutter reads top to bottom, so the top of the frame is read a moment before the bottom.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "How does RED say most digital camera sensors are read?", options: ["Row by row in rapid succession", "All photosites at the same instant", "Column by column, right to left", "Only the center, then the edges"], correctIndex: 0, explanation: "RED: \"Photosites are read row by row in rapid succession\" (RED Digital Cinema, n.d.-a).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Which shots does RED say show rolling-shutter effects most?", options: ["Locked-off wide shots of a calm stage", "Whip pans, fast subjects, run and gun", "Slow tilts on a tripod in studio light", "Static interviews lit by soft daylight"], correctIndex: 1, explanation: "RED: effects are \"most pronounced with whip pans, fast subjects, high shutter speeds or run and gun type shots\" (RED Digital Cinema, n.d.-a).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Which light source does RED say can partly light a rolling-shutter frame?", options: ["Strobes", "Daylight", "Tungsten", "Moonlight"], correctIndex: 0, explanation: "RED: \"Strobes can also partially illuminate the frame\" (RED Digital Cinema, n.d.-a).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Does a global shutter cure flicker under artificial light?", options: ["Yes, it removes flicker of every kind", "Only under LED boards, not under strobes", "No, neither shutter type fully fixes it", "Only when the camera records RAW internally"], correctIndex: 2, explanation: "RED calls that \"a common misconception\": \"neither shutter type fully addresses this problem\" (RED Digital Cinema, n.d.-a).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What are RED's two ways around flicker from artificial light?", options: ["A global shutter or a faster lens", "Continuous light or a safe shutter speed", "A higher ISO or a lower bit depth", "A frame sync or a genlock input"], correctIndex: 1, explanation: "RED: use \"continuous lighting, or a safe shutter speed and frame rate combination\" (RED Digital Cinema, n.d.-a).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What image cost does RED say some global shutter designs carry?", options: ["Lower resolution", "Shorter battery life", "More image noise", "Slower autofocus"], correctIndex: 2, explanation: "RED: some designs \"make sensor photosites less efficient, which can in turn compromise image noise\" (RED Digital Cinema, n.d.-a).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "How does the Komodo-X body's weight compare with the FX3's, per lesson 6?", options: ["About 1.19 kg against about 715 g", "About 500 g against about 890 g", "About 3 kg against about 1.6 kg", "The two weigh almost exactly the same"], correctIndex: 0, explanation: "RED lists 2.62 lb (about 1.19 kg) without body cap and card (RED Digital Cinema, n.d.-b); Sony lists about 715 g for the FX3 with battery and card (Sony, n.d.-b).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "On what basis does the course call the FX3 a rolling-shutter camera?", options: ["Sony's page says so in plain words", "A reasoned inference from the specs", "RED's article names the FX3 directly", "A test the course ran on a sideline"], correctIndex: 1, explanation: "Sony makes no global-shutter claim and RED says most digital sensors read row by row, so treating the FX3 as rolling shutter is an inference, and the lesson says so.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What does a global shutter do, in RED's words?", options: ["Reads the rows from top to bottom", "Controls light to all photosites at once", "Blocks light with a spinning disk", "Reads only the center of the sensor"], correctIndex: 1, explanation: "\"A global shutter controls incoming light to all photosites simultaneously\" (RED Digital Cinema, n.d.-a).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What is the Sony FX3's video output?", options: ["12G-SDI and full HDMI", "An HDMI type A jack only", "3G-SDI only, on BNC", "HDMI and a fiber port"], correctIndex: 1, explanation: "Sony lists only an \"HDMI type A jack\" (Sony, n.d.-b).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What video outputs does the Sony FX6 have?", options: ["An HDMI type A jack and nothing else", "Fiber out and a mini HDMI jack", "3G-SDI only, with no HDMI at all", "12G/6G/3G SDI and full-size HDMI"], correctIndex: 3, explanation: "Allard (2020): \"12G/6G/3G SDI output and a full-sized HDMI output,\" plus BNC timecode.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What video output does the RED Komodo-X list?", options: ["12G-SDI up to 4096 × 2160 4:2:2 60p", "HDMI only, up to 1920 × 1080 30p", "3G-SDI only, up to 1280 × 720 60p", "Fiber only, up to 7680 × 4320 120p"], correctIndex: 0, explanation: "AbelCine (n.d.): 12G-SDI up to 4096 × 2160 4:2:2 60p, and a tri-level genlock input.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What connector does an SDI output use?", options: ["A USB-C connector", "An HDMI type A jack", "A locking BNC connector", "An XLR connector"], correctIndex: 2, explanation: "SDI-out bodies send the picture on a locking BNC connector (Allard, 2020; AbelCine, n.d.).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What does an HDMI-only body like the FX3 need for live work?", options: ["A second body running in parallel", "A genlock card fitted inside the body", "A fiber cable straight to the router", "A converter or an HDMI-input transmitter"], correctIndex: 3, explanation: "An HDMI-only body needs a converter, or a transmitter that takes HDMI, for live work.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Why does lesson 7 call for a locking or clamped HDMI cable on the FX3?", options: ["It doubles the HDMI bandwidth", "It adds genlock to the camera", "One jack carries the whole show", "It cuts the delay by one frame"], correctIndex: 2, explanation: "The FX3's single HDMI jack carries the whole show, so strain relief on a moving rig matters.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What MSRP did Blackmagic list for its Micro Converter HDMI to SDI 3G on October 21, 2026?", options: ["$989", "$75", "$750", "$175"], correctIndex: 1, explanation: "$75 MSRP (Blackmagic Design, n.d.). $989 is the AJA FS-Mini.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Which production carried an HDMI-to-SDI converter in the operator's backpack?", options: ["BaylorVision", "Turner Sports", "Netflix", "CBS Sports"], correctIndex: 0, explanation: "BaylorVision carried one in its operator's backpack (Costa, 2021).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What is timecode?", options: ["A label on each frame so recordings line up", "A signal that locks the camera's frame timing", "A code that pairs a transmitter with a receiver", "A setting that limits how long a clip runs"], correctIndex: 0, explanation: "Timecode labels every frame (hours, minutes, seconds, frame) so recordings line up later. Locking the timing is genlock.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What is genlock?", options: ["Labeling each frame with hours, minutes and seconds", "Locking the camera's timing to the truck's reference", "Locking the gimbal's motors before a camera swap", "Locking the lens's focus ring on a chosen subject"], correctIndex: 1, explanation: "Genlock locks the timing of the camera's picture to the truck's reference signal. Labeling frames is timecode.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "How does the FX3 take external timecode?", options: ["A BNC timecode input on the side of the body", "An SDI input that carries the house reference", "VMC-BNCM1 adapter on its Multi/Micro USB port", "A Wi-Fi link to a timecode app on a phone"], correctIndex: 2, explanation: "Sony's page: external timecode through the VMC-BNCM1 adapter on the Multi/Micro USB port (Sony, n.d.-a).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What does Sony's timecode page describe for the FX3?", options: ["Timecode and genlock through one adapter", "Genlock only, through the USB port", "Neither timecode nor genlock at all", "Timecode matching only, not genlock"], correctIndex: 3, explanation: "The page describes matching timecode only; it says nothing about genlock (Sony, n.d.-a).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Of the three bodies in lesson 7, which lists a genlock input?", options: ["Sony FX6", "Sony FX3", "RED Komodo-X", "All three of them"], correctIndex: 2, explanation: "Only the Komodo-X lists a \"Tri-Level Genlock Input\" (AbelCine, n.d.). The FX6 and FX3 have none.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What does a frame synchronizer do?", options: ["Re-times a feed to the house reference", "Adds timecode to a camera's recording", "Converts HDMI into a fiber signal", "Pairs a transmitter and a receiver"], correctIndex: 0, explanation: "It holds each frame and releases it in step with the house reference, re-timing a camera that has no genlock.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What reference does AJA's FS-Mini lock to?", options: ["The camera's own HDMI timing only", "A GPS clock on the truck's roof", "The wireless link's channel number", "Blackburst or tri-level reference"], correctIndex: 3, explanation: "AJA: a \"utility frame sync\" that locks to blackburst or tri-level reference (AJA Video Systems, n.d.).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What US MSRP did AJA list for the FS-Mini on October 21, 2026?", options: ["$75", "$989", "$2,390", "$98"], correctIndex: 1, explanation: "$989 US MSRP (AJA Video Systems, n.d.). $75 is the Blackmagic converter.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Which usually has frame sync built in?", options: ["The FX3 camera", "A network truck", "The gimbal grip", "The HDMI cable"], correctIndex: 1, explanation: "A network truck has frame sync built in; a small show or a stream may not, and then someone has to bring one.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Which questions does lesson 7 say to ask before the job?", options: ["Which brand, which color, which case", "Which lens, which f-stop, which ND", "Which week, which team, which coach", "HDMI or SDI, who converts, who syncs"], correctIndex: 3, explanation: "Will the picture arrive as HDMI or SDI? Who converts it? Who does frame sync?", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Why does the research behind the course rate SDI-out bodies better for network trucks?", options: ["Locking connector and no converter needed", "They always weigh less than HDMI bodies", "They have no rolling-shutter lean at all", "They never need a frame synchronizer"], correctIndex: 0, explanation: "An SDI-out body sends its picture on a locking BNC connector and needs no converter (Allard, 2020; AbelCine, n.d.).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Does live TV use the camera's recording?", options: ["Yes; the truck reads the recording", "Yes, but only when shading is on", "No; live TV takes the video output", "No; live TV takes the SD card"], correctIndex: 2, explanation: "Live TV takes the camera's video output. The recording is a separate copy.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What is the camera's internal recording used for?", options: ["Sending the live feed to the truck", "Locking the camera's timing to genlock", "Powering the transmitter on the rig", "An iso record, replay or editing later"], correctIndex: 3, explanation: "The recording is a separate copy used for an isolated (\"iso\") record, for replay or for editing later.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "Which video formats does Sony list for the FX3?", options: ["ProRes RAW and Blackmagic RAW only", "REDCODE RAW and ProRes 4444 XQ", "XAVC HS (H.265) and XAVC S (H.264)", "Uncompressed DPX image sequences"], correctIndex: 2, explanation: "Sony lists XAVC HS (H.265) and XAVC S (H.264), with LPCM audio (Sony, n.d.-b).", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What audio does the FX3 record with the XLR handle attached?", options: ["2 channels of AAC", "4 channels of LPCM", "8 channels of AC-3", "1 channel of MP3"], correctIndex: 1, explanation: "With the XLR handle attached, it records 4 channels of LPCM audio (Sony, n.d.-b).", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "Which HDMI fact does Sony's FX3 help guide leave unstated?", options: ["The color sampling of the signal", "The bit depth in HDMI-only mode", "The output size of RAW over HDMI", "The resolution with Log turned on"], correctIndex: 0, explanation: "The help guide gives bit depth, RAW output size and the 1080 rule for Log, but not the color sampling (4:2:2 or 4:2:0) of the HDMI signal (Sony, n.d.-c).", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What should you do before promising a show 4:2:2 from an FX3?", options: ["Check it on the receiving monitor", "Assume it, since 10-bit implies it", "Ask the gimbal maker to confirm it", "Promise it; the truck can fix it"], correctIndex: 0, explanation: "Sony's help guide does not state the HDMI color sampling, so check it on the receiving monitor or converter first.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "An FX3 records to its card in an 8-bit setting while feeding HDMI. What bit depth is the HDMI feed?", options: ["8-bit, following the record setting", "10-bit, whatever the record setting", "12-bit, because HDMI adds two bits", "It depends on the gimbal's firmware"], correctIndex: 0, explanation: "While recording, \"The color depth for the output movie is based on [Record Setting]\" (Sony, n.d.-c), so an 8-bit setting means an 8-bit feed.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "In HDMI-only mode, with no card recording, what bit depth are the FX3's 4K output options?", options: ["All 8-bit", "All 10-bit", "All 12-bit", "Mixed 8 and 10"], correctIndex: 1, explanation: "Every [4K Output Set.(HDMI Only)] option is 10-bit, from [59.94p 10bit] to [24.00p 10bit] (Sony, n.d.-c).", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "With Log shooting on and the card recording, what happens to the FX3's HDMI resolution?", options: ["It rises to 4K at 120p", "It drops to 720p only", "It becomes 1080", "It switches to RAW"], correctIndex: 2, explanation: "Sony: with Log shooting on, \"the HDMI output resolution becomes 1080\" unless the camera is in HDMI-only mode or RAW output (Sony, n.d.-c).", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "Why is the FX3's RAW output not a live feed for the truck?", options: ["It is for an external RAW recorder", "It only works with the XLR handle", "It sends audio but never video", "It needs a genlock input to run"], correctIndex: 0, explanation: "RAW output goes \"to another RAW-compatible device,\" cannot be recorded on the card, and locks the gamma to S-Log3 (Sony, n.d.-c, n.d.-f).", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "How much power does Sony list for the FX3 while shooting movies?", options: ["About 18.0 W", "About 7.3 W", "About 35 W", "About 73 W"], correctIndex: 1, explanation: "About 7.3 W (Sony, n.d.-b). The FX6 draws about 18.0 W.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "How much power does the Sony FX6 draw?", options: ["About 7.3 W", "About 1.8 W", "About 18.0 W", "About 98 W"], correctIndex: 2, explanation: "About 18.0 W (Allard, 2020), against about 7.3 W for the FX3.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What is the FX3's operating temperature range?", options: ["-20 to 45 °C", "10 to 30 °C", "-10 to 60 °C", "0 to 40 °C"], correctIndex: 3, explanation: "Sony lists 0 to 40 °C (Sony, n.d.-b). -20 to 45 °C is the DJI RS 4 Pro gimbal's range.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What did Fox find helped with overheating?", options: ["Recording at a higher bit rate in sun", "Wrapping the camera in black cloth", "Moving the batteries out of the camera", "Turning the monitor up to full power"], correctIndex: 2, explanation: "Ligrani: \"Getting the batteries out of the camera helped\" (Mrozek, 2021).", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What did BaylorVision report about its backpack?", options: ["The battery and RF units got quite hot", "The backpack froze in the cold rain", "The converter failed at halftime", "The battery lasted only ten minutes"], correctIndex: 0, explanation: "Costa (2021): \"The battery and RF units got quite hot during both productions.\"", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What voltage is the FX3's battery rated at?", options: ["14.8 V", "12 V", "3.7 V", "7.2 V"], correctIndex: 3, explanation: "The FX3's battery is rated 7.2 V (Sony, n.d.-b). 14.8 V is the Core SWX V-mount pack.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What voltage is the Core SWX NANO X Micro 98 Wh pack rated at?", options: ["7.2 V", "14.8 V", "9 V", "48 V"], correctIndex: 1, explanation: "Core SWX lists 14.8 V (Core SWX, n.d.-a), about twice the FX3 battery's 7.2 V.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "Why must a D-Tap to dummy-battery cable for the FX3 be regulated?", options: ["Regulated cables carry the video signal too", "The pack is about twice the camera's rating", "Unregulated cables cannot fit a V-mount", "The camera needs more voltage than the pack"], correctIndex: 1, explanation: "A 14.8 V pack is about twice the FX3's 7.2 V rating, so the cable must bring the voltage down.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What is a \"dummy battery\"?", options: ["A drained battery kept as a spare", "A battery that only powers the monitor", "A fake battery used to balance a gimbal", "A plug shaped like the camera's battery"], correctIndex: 3, explanation: "A dummy battery is a plug shaped like the camera's own battery, on the end of a cable from a larger pack.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What USB adaptor output does Sony recommend for the FX3?", options: ["9 V / 2 A or more, 15 V / 2 A or more", "9 V / 3 A only, with no other option", "5 V / 1 A, like a phone charger", "20 V / 5 A or more, and nothing less"], correctIndex: 0, explanation: "Sony lists \"9 V / 2 A or more, 15 V / 2 A or more\" (Sony, n.d.-b). An earlier draft said \"9V/3A.\"", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What happens when you swap the main battery with nothing to bridge the gap?", options: ["Only the monitor briefly goes dark", "The camera switches to Wi-Fi power", "Everything on that pack loses power", "Nothing; packs swap without a gap"], correctIndex: 2, explanation: "Batteries are energy, not continuity: a swap cuts power to everything on the pack unless something bridges it.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "Which of these can bridge a main-battery swap?", options: ["A longer D-Tap cable to the pack", "A brighter monitor on the rig", "An HDMI-to-SDI converter", "A plate that takes two packs"], correctIndex: 3, explanation: "Lesson 8 names a plate that takes two packs, or the camera's own battery left inside.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What does a bigger body's higher power draw mean for the rig?", options: ["A shorter HDMI cable", "A lower f-number lens", "Bigger or more batteries", "Less heat in the sun"], correctIndex: 2, explanation: "A bigger body draws more power, which means bigger or more batteries on the rig.", sourceLessonSlug: "recording-power-and-heat" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Lenses
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-lens-spec-tells-you",
      title: "9 · What a lens spec tells you",
      section: "3 · Lenses",
      recallContent: [
        {
          prompt: "What does Sony's FX3 help guide leave unstated that a shader cares about?",
          answer: "The color sampling of the HDMI signal (4:2:2 or 4:2:0). Check it on the receiving monitor or converter before promising it.",
        },
        {
          prompt: "What is the FX3's operating temperature range?",
          answer: "0 to 40 °C (Sony, n.d.-b).",
        },
      ],
      body: `**The lens's job.** The lens frames the shot and sets how much of it is sharp. On this rig it also sets how hard the operator's job is, because every bit of extra shallowness is a bit less room for error.

**Fox's choice.** Fox's original rig used a Sony FE 24-70mm f/2.8 GM, an autofocus zoom (Costa, 2020). That one lens covers a wide view at 24mm and a tighter one at 70mm, at f/2.8 the whole way.

**Four specs to read, and why each matters.**

| Spec | What to look for | Why |
|---|---|---|
| Focal length range | Where the wide end starts | A 24mm wide end frames more of a huddle from the sideline than a 28mm one, at the same spot. With a 28mm lens, the operator has to back away to fit the group in, and on a sideline there may be a coach behind. |
| Maximum aperture | The lowest f-number | It sets how thin the depth of field can go (lesson 3) and how much light the lens lets in for night games. |
| Autofocus | A fast, quiet autofocus motor | Shallow-focus live work depends on autofocus, as lesson 10 shows. Fox's lens was an autofocus lens. |
| Weight and balance | Grams, and where the weight sits | Every gram rides on the gimbal and the operator's arms. A zoom must be balanced at the focal length you actually use (section 4). |

**Using the numbers from lesson 3.** At 3 m, a 50mm lens on full frame holds about 0.60 m in focus at f/2.8 and about 0.26 m at f/1.2. Fox's operators already work with "under 2 feet" (Mrozek, 2021). So an f/2.8 zoom on a full-frame body already gives the look. An f/1.2 lens makes the zone less than half as deep. That is a bigger effect, and a bigger risk.

**Zoom or prime.** A zoom changes focal length. A prime has one focal length. In this course's examples the zooms stop at f/2.8, and the f/1.2 lenses are all primes (lessons 11 and 12). BaylorVision used a Sigma prime (Costa, 2021). Turner used a 50mm lens (Kerschbaumer et al., 2021). Fox used a zoom. Lesson 11 compares them.

**The working rule.** Use a lens you can hold focus with for the whole game, and save the fastest glass for moments you choose. Lessons 10 to 12 show why, and what it costs.

:::reveal Why does the wide end of a zoom matter on a sideline? ||| A 24mm wide end frames more of a huddle from the same spot than 28mm, so the operator does not have to back away into the people behind.

:::reveal Which lens did Fox's original rig use? ||| A Sony FE 24-70mm f/2.8 GM, an autofocus zoom.

## Sources
- ${COSTA_2020} Locator: the paragraph naming the lens.
- ${MROZEK_2021} Locator: the passage on working with under 2 feet of depth of field.
- ${COSTA_2021} Locator: the paragraph naming the Sigma prime.
- ${KERSCHBAUMER_2021} Locator: the section on Turner Sports' 50mm lens.`,
    },
    {
      slug: "holding-focus-live",
      title: "10 · Holding focus live",
      section: "3 · Lenses",
      recallContent: [
        {
          prompt: "Name the four lens specs lesson 9 says to read.",
          answer: "Focal length range, maximum aperture, autofocus, and weight and balance.",
        },
        {
          prompt: "At 3 m on full frame with a 50mm lens, how much is in focus at f/2.8 compared with f/1.2?",
          answer: "About 0.60 m at f/2.8 against about 0.26 m at f/1.2.",
        },
      ],
      body: `**Why focus is the hard part.** A thin zone in focus leaves little room. Mike Davies of Fox put it this way: "Keeping focus on a camera like this is like keeping a marble on a mirror" (Kerschbaumer et al., 2021).

**What goes wrong.** Fox's operators have seen autofocus lock onto "the crowd in the background instead of the player in the foreground" (Mrozek, 2021). The troubleshooting notes behind this course name the cause: a shallow depth of field in front of a high-contrast background. 
**What the operator can change.** Each of these moves comes from that cause, so the reason is given with it:

1. **Use subject tracking.** Tell the camera which person to follow, so it does not pick its own target.
2. **Make the autofocus area smaller.** A small box over the player gives the crowd less chance to get in.
3. **Lower how quickly autofocus switches subjects.** A slower switch means a fan walking behind the player does not steal focus for a frame.
4. **Stop down.** A higher f-number makes the zone deeper. In lesson 3's example, going from f/1.2 to f/2.8 more than doubles the zone, from about 0.26 m to about 0.60 m.

**Match the f-stop to the moment.** At f/1.2 the zone at 3 m is under a foot. A fast player can step out of it before autofocus catches up. So shoot live action at f/2.8, and save f/1.2 for moments you set up: an introduction, a celebration, a player standing still. That is a choice about risk, not about looks alone.

**Who controls the iris.** On some shows, a video operator in the truck adjusts the camera from afar. Cyanview's control of Sony Alpha bodies lists iris among the settings it can reach (Cyanview, n.d.-a). The iris is what sets the f-number. So if the truck controls the iris, the truck also changes your depth of field. Ask before the show who owns it.

**Check your own work.** If the camera is recording, look at a few clips at a break. A missed focus is easy to see on a recording and hard to see on a small monitor in the sun.

**One habit.** Write your autofocus settings on a settings card and keep it with the rig. If a menu change goes wrong mid-show, the card puts you back.

:::reveal What did Fox's operators see autofocus do? ||| Lock onto "the crowd in the background instead of the player in the foreground" (Mrozek, 2021).

:::reveal If the truck controls the iris, what else does it control? ||| The f-number, and so the depth of field.

## Sources
- ${KERSCHBAUMER_2021} Locator: the passage quoting Mike Davies ("a marble on a mirror").
- ${MROZEK_2021} Locator: the passage on autofocus locking onto the crowd.
- ${CYANVIEW_ALPHA} Locator: the list of controllable settings.`,
    },
    {
      slug: "zooms-primes-and-weight",
      title: "11 · Zooms, primes and weight",
      section: "3 · Lenses",
      recallContent: [
        {
          prompt: "What did Mike Davies of Fox compare keeping focus to?",
          answer: "\"Keeping a marble on a mirror\" (Kerschbaumer et al., 2021).",
        },
        {
          prompt: "Name two settings changes that keep autofocus off the crowd.",
          answer: "Any two of: subject tracking, a smaller autofocus area, a slower subject switch, or stopping down to a higher f-number.",
        },
      ],
      body: `**Zoom against prime.** A zoom lets the operator reframe without moving. A prime has one focal length; the f/1.2 lenses in this lesson are all primes. For this rig, the choice is less about the picture than about what the operator can carry and hold in focus all game.

**Standard zooms on the market.** Three full-frame standard zooms for Sony's E-mount, with the details that matter here:

| Lens | Range and aperture | Source |
|---|---|---|
| Sony FE 24-70mm f/2.8 GM II | 24 to 70mm, f/2.8 | Focus Camera (n.d.-e) |
| Sigma 24-70mm F2.8 DG DN II Art | 24 to 70mm, f/2.8 | Sigma Corporation of America (n.d.-a) |
| Tamron 28-75mm f/2.8 Di III VXD G2 | 28 to 75mm, f/2.8 | Focus Camera (n.d.-f) |

Note the Tamron's wide end. Tamron's native E-mount standard zoom starts at 28mm, not 24mm. Lesson 9 explained what those 4 millimeters cost on a sideline.

**Fast primes.** For the f/1.2 moments, Sigma makes a 50mm F1.2 DG DN Art (Sigma Corporation of America, n.d.-c) and a 35mm F1.2 DG II Art (Sigma Corporation of America, n.d.-b), and Sony makes the FE 50mm f/1.2 GM (Focus Camera, n.d.-d).

**A correction to carry.** An earlier draft listed a "Sigma Cine Pro 24-70mm T2.2." Treat that lens as one that does not exist. Sigma's full-frame cine zoom page lists only the 24-35mm T2.2 (Sigma, n.d.).

**Weight is part of the spec.** That Sigma 24-35mm T2.2 weighs 1.6 kg in E-mount (Sigma, n.d.). The DJI RS 4 gimbal has a tested payload of 3 kg (DJI, n.d.-b). Do the sum: the lens alone uses more than half the gimbal's payload before the camera, monitor or transmitter is added. The documented rigs used photo lenses instead: a Sony zoom on Fox's rig and a Sigma prime on BaylorVision's (lesson 4). The FX3 body weighs about 715 g with battery and card (Sony, n.d.-b), less than half that cine zoom.

**Balance moves when you zoom.** Zooming shifts a lens's center of gravity. A gimbal balanced at 24mm may be off at 70mm. Balance at the focal length you use most (section 4).

**A working kit.** Many crews pair the two: an f/2.8 zoom as the working lens for the game, and an f/1.2 prime for set pieces. Lesson 12 prices that pair.

:::reveal Why is the "Sigma Cine Pro 24-70mm T2.2" a correction in this course? ||| Sigma's full-frame cine zoom page lists only the 24-35mm T2.2, so treat the 24-70mm T2.2 as nonexistent.

:::reveal What share of a DJI RS 4's 3 kg tested payload does the 1.6 kg Sigma cine zoom use? ||| More than half, before the camera, monitor or transmitter is added.

## Sources
- ${FOCUS_GM2} Locator: product title.
- ${SIGMA_2470} Locator: product title.
- ${FOCUS_TAMRON} Locator: product title.
- ${SIGMA_50} Locator: product title.
- ${SIGMA_35} Locator: product title.
- ${FOCUS_SONY_50} Locator: product title.
- ${SIGMA_CINE} Locator: the full-frame cine zoom lineup and the E-mount weight in the specifications.
- ${DJI_RS4_SPECS} Locator: "Tested payload" entry.
- ${SONY_SPECS} Locator: "Mass" entry.`,
    },
    {
      slug: "the-cost-of-fast-glass",
      title: "12 · The cost of fast glass",
      section: "3 · Lenses",
      recallContent: [
        {
          prompt: "Where does the Tamron 28-75mm G2's range start, and why does that matter?",
          answer: "At 28mm, not 24mm, so it frames less of a huddle from the same sideline spot.",
        },
        {
          prompt: "What does Sigma's full-frame cine zoom page list?",
          answer: "Only the 24-35mm T2.2, at 1.6 kg in E-mount.",
        },
      ],
      body: `${QR("a working camera operator or a rental-house technician, to re-read each price on the date of release")}

**Prices, with their date.** Every price below was shown on the maker's or retailer's page on October 21, 2026. Prices change; check them again before you buy. They exclude sales tax and delivery.

| Lens | New price | Used price | Source |
|---|---|---|---|
| Sony FE 50mm f/1.2 GM | $2,298.00 | $1,865.95 | Focus Camera (n.d.-d) |
| Sigma 50mm F1.2 DG DN Art | $1,539 | | Sigma Corporation of America (n.d.-c) |
| Sigma 35mm F1.2 DG II Art | $1,549 | | Sigma Corporation of America (n.d.-b) |
| Sony FE 24-70mm f/2.8 GM II | $2,448.00 | $1,990.95 | Focus Camera (n.d.-e) |
| Sigma 24-70mm F2.8 DG DN II Art | $1,219.00 (instant savings price) | | Sigma Corporation of America (n.d.-a) |
| Tamron 28-75mm f/2.8 G2 | $899.00 | | Focus Camera (n.d.-f) |

**A correction to carry.** An earlier draft quoted the Sony 50mm f/1.2 GM at about $2,000 and the Sigma 50mm f/1.2 at about $1,400. On October 21, 2026, they were $2,298 and $1,539. Old prices travel a long way online. Always write down the date you read a price.

**What the table says.** The fast primes and the Sony zoom cost far more than the Tamron. The Sigma zoom costs $1,229 less than the Sony GM II zoom: $2,448 minus $1,219. Both are 24-70mm f/2.8 lenses. What you would be testing is how their autofocus behaves on moving players, which a price list cannot tell you.

**Renting first.** Lensrentals listed rental prices on the same day:

| Lens | 3-day rental | 7-day rental | Source |
|---|---|---|---|
| Sigma 50mm f/1.2 DG DN Art | $59 | $84 | Lensrentals (n.d.-b) |
| Sony FE 24-70mm f/2.8 GM II | $79 | $113 | Lensrentals (n.d.-c) |

Do the sum for the Sigma 50mm: $1,539 to buy, $59 for a 3-day rental. That is about 26 rentals before buying costs less ($1,539 ÷ $59 is about 26). If you will use an f/1.2 lens only for a few set pieces a season, renting it for the shows that want it may be the better deal.

**A test before you buy.** Rent both zooms for one game. Watch the autofocus on players running toward you and across the frame. Then decide. A lens that holds focus is worth more on this rig than a lens that is a little sharper.

**What this lesson does not cover.** Renting gear out to others as a business is a separate subject, taught in its own course. This lesson is only about what a lens costs the person who uses it.

:::reveal How much less did the Sigma 24-70mm F2.8 DG DN II cost than the Sony 24-70mm GM II on October 21, 2026? ||| $1,229 less: $1,219 against $2,448.

:::reveal About how many 3-day rentals of the Sigma 50mm f/1.2 equal its purchase price? ||| About 26: $1,539 ÷ $59.

## Sources
- ${FOCUS_SONY_50} Locator: new and used prices on the product page.
- ${SIGMA_50} Locator: price on the product page.
- ${SIGMA_35} Locator: price on the product page.
- ${FOCUS_GM2} Locator: new and used prices on the product page.
- ${SIGMA_2470} Locator: instant savings price on the product page.
- ${FOCUS_TAMRON} Locator: price on the product page.
- ${LENSRENTALS_SIGMA_50} Locator: rental price table (3-day and 7-day).
- ${LENSRENTALS_GM2} Locator: rental price table (3-day and 7-day).`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Lenses",
      section: "3 · Lenses",
      body: "A graded check on reading a lens spec, holding focus live, zooms against primes and weight, and what fast glass cost on October 21, 2026. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What is the lens's job on this rig?", options: ["Carry the live picture to the receiver", "Cancel rotation as the operator walks", "Frame the shot and set how much is sharp", "Turn light into a live video signal"], correctIndex: 2, explanation: "The lens frames the shot and sets how much of it is sharp. The link, gimbal and body do the other jobs.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "What kind of lens was on Fox's original rig?", options: ["An autofocus zoom", "A manual-focus prime", "A cine zoom in T-stops", "A fixed-focus wide"], correctIndex: 0, explanation: "Fox used the Sony FE 24-70mm f/2.8 GM, an autofocus zoom (Costa, 2020).", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "What focal length range does Fox's original lens cover?", options: ["28mm to 75mm", "24mm to 35mm", "50mm only", "24mm to 70mm"], correctIndex: 3, explanation: "24mm to 70mm. 28-75mm is the Tamron, and 24-35mm is Sigma's cine zoom.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "At what aperture does Fox's zoom work across its whole range?", options: ["f/1.2", "f/2.8", "f/4.0", "f/2.0"], correctIndex: 1, explanation: "The Sony FE 24-70mm f/2.8 GM works at f/2.8 the whole way.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Why does a 24mm wide end beat a 28mm one on a sideline?", options: ["It gives a thinner depth of field than 28mm", "It frames more of a huddle from the same spot", "It weighs less on the gimbal than a 28mm", "It holds autofocus better on fast players"], correctIndex: 1, explanation: "A 24mm wide end frames more of a huddle from the same spot, so the operator does not have to back away.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "What does a lens's maximum aperture set?", options: ["How far the lens can zoom in and out", "How many frames the camera records", "How wide the lens frames a huddle", "How thin focus goes and the light at night"], correctIndex: 3, explanation: "Maximum aperture sets how thin the depth of field can go and how much light the lens lets in for night games.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Why does autofocus matter on this rig?", options: ["Shallow-focus live work depends on it", "Autofocus lenses weigh less than others", "The NFL requires autofocus on sidelines", "Autofocus removes rolling-shutter lean"], correctIndex: 0, explanation: "Shallow-focus live work depends on autofocus, as lesson 10 shows.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "At which setting should a zoom be balanced on the gimbal?", options: ["At its widest setting, always", "At its longest setting, always", "At the focal length you use most", "Anywhere; zooms do not shift"], correctIndex: 2, explanation: "A zoom must be balanced at the focal length you actually use (section 4).", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Compared with f/2.8, how deep is the f/1.2 zone in lesson 9's example?", options: ["About twice as deep", "Exactly the same depth", "About ten times as deep", "Less than half as deep"], correctIndex: 3, explanation: "About 0.26 m at f/1.2 against about 0.60 m at f/2.8: less than half as deep.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Does an f/2.8 zoom on a full-frame body give the look, according to lesson 9?", options: ["No; only f/1.2 gives any shallow look", "No; f/2.8 needs a Super 35 sensor", "Yes; it lands at Fox's under 2 feet", "Only at night, when light is low"], correctIndex: 2, explanation: "At 3 m, f/2.8 on full frame holds about 0.60 m, already within Fox's \"under 2 feet.\"", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "What is a prime lens?", options: ["A lens that zooms 24 to 70mm", "A lens with one focal length", "A lens with a global shutter", "A lens marked only in T-stops"], correctIndex: 1, explanation: "A prime has one focal length; a zoom changes focal length.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Which rig used a Sigma prime?", options: ["BaylorVision's", "Fox's original", "CBS's MōVI rig", "ESPN's Alpha 1"], correctIndex: 0, explanation: "BaylorVision used a Sigma prime (Costa, 2021). Fox used a zoom.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Which lens did Turner Sports use?", options: ["A 50mm lens", "A 24-70mm zoom", "A 28-75mm zoom", "A 24-35mm cine zoom"], correctIndex: 0, explanation: "Turner used a 50mm lens on a Canon C500 (Kerschbaumer et al., 2021).", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "What working rule does lesson 9 end with?", options: ["Use the fastest glass for every single play", "Hold focus all game; save the fastest glass", "Use the widest lens the gimbal can carry", "Use manual focus whenever light is low"], correctIndex: 1, explanation: "Use a lens you can hold focus with for the whole game, and save the fastest glass for moments you choose.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "In this course's examples, which lenses reach f/1.2?", options: ["Only the zooms", "Both zooms and primes", "Only the primes", "Neither kind of lens"], correctIndex: 2, explanation: "The zooms in the course stop at f/2.8, and the f/1.2 lenses are all primes.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Why should a sideline operator not have to back away to frame a huddle?", options: ["The link drops past 3 feet", "The gimbal cannot walk back", "The lens stops at 2 meters", "There may be a coach behind"], correctIndex: 3, explanation: "Lesson 9: with a 28mm lens the operator has to back away, and on a sideline there may be a coach behind.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "How did Mike Davies of Fox describe keeping focus on this camera?", options: ["\"like threading a needle in wind\"", "\"like catching a punt in the rain\"", "\"like keeping a marble on a mirror\"", "\"like painting a moving target\""], correctIndex: 2, explanation: "\"Keeping focus on a camera like this is like keeping a marble on a mirror\" (Kerschbaumer et al., 2021).", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Who compared keeping focus to keeping a marble on a mirror?", options: ["Mike Davies of Fox", "Jarrod Ligrani of Fox", "Mike Smole of Fox", "A CBS golf director"], correctIndex: 0, explanation: "Mike Davies of Fox, quoted by Kerschbaumer et al. (2021).", sourceLessonSlug: "holding-focus-live" },
          { prompt: "What have Fox's operators seen autofocus lock onto?", options: ["The ball instead of the player", "The operator's own hand", "The scoreboard's numbers", "The crowd behind the player"], correctIndex: 3, explanation: "\"The crowd in the background instead of the player in the foreground\" (Mrozek, 2021).", sourceLessonSlug: "holding-focus-live" },
          { prompt: "What cause do the troubleshooting notes give for autofocus jumping to the crowd?", options: ["A rolling shutter on a fast whip pan", "Shallow focus before a busy background", "A low battery in the gimbal grip", "A wireless link with too much delay"], correctIndex: 1, explanation: "The cause named is a shallow depth of field in front of a high-contrast background.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why use subject tracking?", options: ["So the gimbal pans toward the ball itself", "So the camera follows the person you chose", "So the truck can take over the iris", "So the link uses less of its channel"], correctIndex: 1, explanation: "Subject tracking tells the camera which person to follow, so it does not pick its own target.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why make the autofocus area smaller?", options: ["It makes the depth of field much deeper", "It cuts the camera's power draw in half", "It lets the camera record in 10-bit", "It gives the crowd less chance to get in"], correctIndex: 3, explanation: "A small box over the player gives the crowd less chance to get in.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why lower how quickly autofocus switches subjects?", options: ["A passing fan does not steal focus", "The lens stays at its widest setting", "The gimbal motors run more quietly", "The transmitter keeps a steady link"], correctIndex: 0, explanation: "A slower switch means a fan walking behind the player does not steal focus for a frame.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "In lesson 3's example, what does stopping down from f/1.2 to f/2.8 do to the zone?", options: ["Cuts it in half", "Leaves it unchanged", "More than doubles it", "Doubles the blur"], correctIndex: 2, explanation: "From about 0.26 m to about 0.60 m: more than double.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "What f-stop rule does lesson 10 give?", options: ["f/1.2 for action; f/2.8 for set-up moments", "f/1.2 all game for the strongest look", "f/4 all game, and never anything else", "f/2.8 for action; f/1.2 for set-up moments"], correctIndex: 3, explanation: "Shoot live action at f/2.8, and save f/1.2 for moments you set up. It is a choice about risk.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why can a fast player go soft at f/1.2?", options: ["The shutter cannot keep up with their speed", "The link drops frames when players run", "They leave the zone before autofocus catches up", "The gimbal tilts away from fast players"], correctIndex: 2, explanation: "At f/1.2 the zone at 3 m is under a foot, so a fast player can step out of it before autofocus catches up.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "What does a lens's iris set?", options: ["The frame rate", "The f-number", "The white balance", "The timecode"], correctIndex: 1, explanation: "The iris is what sets the f-number.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "If the truck controls the iris, what else does it change?", options: ["Your depth of field", "Your frame rate", "Your audio levels", "Your tally light"], correctIndex: 0, explanation: "The iris sets the f-number, and the f-number sets the depth of field.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Which setting in Cyanview's Sony Alpha list changes depth of field?", options: ["Iris", "Knee", "Detail", "Hue"], correctIndex: 0, explanation: "Cyanview's list includes iris (Cyanview, n.d.-a), and the iris sets the f-number.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "What does lesson 10 say to ask before the show?", options: ["Who owns the lens", "Who owns the iris", "Who owns the truck", "Who owns the gimbal"], correctIndex: 1, explanation: "If the truck controls the iris, it also changes your depth of field, so ask who owns it.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why look at a few recorded clips at a break?", options: ["Clips must be deleted every quarter", "The truck cannot see your recordings", "Missed focus shows on a recording", "Recording stops at every break"], correctIndex: 2, explanation: "A missed focus is easy to see on a recording and hard to see on a small monitor in the sun.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why keep your autofocus settings on a settings card?", options: ["To show the league your frequency plan", "To note each player's jersey number", "To log every battery's serial number", "To restore settings after a menu mistake"], correctIndex: 3, explanation: "If a menu change goes wrong mid-show, the card puts you back.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why is a missed focus hard to spot live?", options: ["The live feed is in black and white", "Tally lights cover the monitor's center", "A small monitor in the sun hides it", "The gimbal shakes the monitor too hard"], correctIndex: 2, explanation: "Lesson 10: a missed focus is hard to see on a small monitor in the sun.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "What does a zoom let the operator do?", options: ["Reframe without moving", "Get a global shutter", "Skip all balancing", "Reach f/1.2 at 70mm"], correctIndex: 0, explanation: "A zoom lets the operator reframe without moving.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "Which standard zoom starts at 28mm rather than 24mm?", options: ["Sony 24-70mm GM II", "Sigma 24-70mm DG DN II", "Sony FE 24-70mm GM", "Tamron 28-75mm G2"], correctIndex: 3, explanation: "Tamron's native E-mount standard zoom starts at 28mm (Focus Camera, n.d.-f).", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What maximum aperture do lesson 11's three standard zooms share?", options: ["f/1.2", "f/2.8", "f/4", "T2.2"], correctIndex: 1, explanation: "The Sony GM II, the Sigma DG DN II and the Tamron G2 are all f/2.8 zooms.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "Which fast primes does lesson 11 list?", options: ["Sigma 24-35mm T2.2 and Sony 24-70mm GM II", "Sigma 50 and 35mm F1.2, Sony 50mm f/1.2 GM", "Tamron 28-75mm G2 and Sigma 24-70mm II", "Canon 50mm and Sony 85mm, both at f/1.4"], correctIndex: 1, explanation: "Sigma's 50mm F1.2 DG DN and 35mm F1.2 DG II, and Sony's FE 50mm f/1.2 GM.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "Which lens should you treat as one that does not exist?", options: ["Sigma 24-35mm T2.2 FF", "Tamron 28-75mm f/2.8 G2", "Sony FE 50mm f/1.2 GM", "Sigma Cine Pro 24-70mm T2.2"], correctIndex: 3, explanation: "Sigma's full-frame cine zoom page lists only the 24-35mm T2.2, so the 24-70mm T2.2 from an earlier draft is treated as nonexistent.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What does Sigma's full-frame cine zoom page list?", options: ["Only the 24-35mm T2.2", "Only the 24-70mm T2.2", "A 24-35mm and a 24-70mm", "No zooms, only primes"], correctIndex: 0, explanation: "Only the 24-35mm T2.2 (Sigma, n.d.).", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "How much does the Sigma 24-35mm T2.2 weigh in E-mount?", options: ["715 g", "890 g", "1.6 kg", "4.5 kg"], correctIndex: 2, explanation: "1.6 kg (Sigma, n.d.). 715 g is the FX3, 890 g the FX6 body, 4.5 kg the RS 4 Pro's payload.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What is the DJI RS 4's tested payload?", options: ["4.5 kg", "1.6 kg", "13 kg", "3 kg"], correctIndex: 3, explanation: "3 kg (DJI, n.d.-b). 4.5 kg is the RS 4 Pro.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "How much of a DJI RS 4's 3 kg payload does the 1.6 kg cine zoom use?", options: ["About a tenth, leaving lots of room", "All of it, plus another kilogram", "More than half, before anything else", "None; lenses do not count to payload"], correctIndex: 2, explanation: "1.6 kg of 3 kg is more than half, before the camera, monitor or transmitter is added.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What kind of lenses did the documented rigs use?", options: ["The Sigma cine zoom on all", "Photo lenses, not cine zooms", "No lens; the body is fixed", "Manual cine primes only"], correctIndex: 1, explanation: "A Sony zoom on Fox's rig and a Sigma prime on BaylorVision's: photo lenses.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "How does the FX3's weight compare with the Sigma cine zoom's?", options: ["Less than half the zoom's weight", "About twice the zoom's weight", "Exactly the same as the zoom", "Ten times the zoom's weight"], correctIndex: 0, explanation: "About 715 g against 1.6 kg: less than half.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What happens to a gimbal's balance when you zoom?", options: ["The center of gravity shifts", "The gimbal's payload doubles", "Nothing; zooms keep balance", "The camera's sensor moves"], correctIndex: 0, explanation: "Zooming shifts a lens's center of gravity, so a rig balanced at 24mm may be off at 70mm.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What working kit do many crews pair together?", options: ["Two f/1.2 primes and no zoom", "An f/2.8 zoom plus an f/1.2 prime", "One cine zoom and nothing else", "An f/4 zoom plus a cine zoom"], correctIndex: 1, explanation: "An f/2.8 zoom as the working lens for the game, and an f/1.2 prime for set pieces.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "By how many millimeters does the Tamron's wide end fall short of the Sony and Sigma zooms?", options: ["5mm", "14mm", "4mm", "46mm"], correctIndex: 2, explanation: "28mm against 24mm: 4 millimeters, which lesson 9 explained matter on a sideline.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "Who makes the FE 50mm f/1.2 GM?", options: ["Sigma", "Tamron", "Zeiss", "Sony"], correctIndex: 3, explanation: "The FE 50mm f/1.2 GM is Sony's (Focus Camera, n.d.-d).", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "Which lenses in lesson 11 are f/2.8 zooms?", options: ["Sigma 50mm, Sigma 35mm, Sony 50mm GM", "Sigma 24-35mm T2.2 and two primes", "Sony GM II, Sigma DG DN II, Tamron G2", "Only the Sony GM II; the rest are primes"], correctIndex: 2, explanation: "The three standard zooms are the Sony GM II, the Sigma DG DN II and the Tamron G2.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What kind of lens did BaylorVision use?", options: ["A Sigma prime", "A Sony zoom", "A cine zoom", "A Tamron zoom"], correctIndex: 0, explanation: "BaylorVision used a Sigma prime (Costa, 2021); Fox used a Sony zoom.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What did the Sony FE 50mm f/1.2 GM cost new on October 21, 2026?", options: ["$1,539.00", "$2,000.00", "$899.00", "$2,298.00"], correctIndex: 3, explanation: "$2,298.00 (Focus Camera, n.d.-d). An earlier draft's $2,000 was stale.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What did the Sigma 50mm F1.2 DG DN Art cost on October 21, 2026?", options: ["$1,400", "$1,539", "$2,298", "$1,219"], correctIndex: 1, explanation: "$1,539 (Sigma Corporation of America, n.d.-c). An earlier draft's $1,400 was stale.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What did the Sigma 35mm F1.2 DG II Art cost on October 21, 2026?", options: ["$1,049", "$1,549", "$2,448", "$899"], correctIndex: 1, explanation: "$1,549 (Sigma Corporation of America, n.d.-b).", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What did the Sony FE 24-70mm f/2.8 GM II cost new on October 21, 2026?", options: ["$1,990.95", "$1,219.00", "$2,298.00", "$2,448.00"], correctIndex: 3, explanation: "$2,448.00 new (Focus Camera, n.d.-e). $1,990.95 was its used price.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What was the Sigma 24-70mm F2.8 DG DN II Art's instant savings price on October 21, 2026?", options: ["$1,219.00", "$2,448.00", "$899.00", "$1,539.00"], correctIndex: 0, explanation: "$1,219.00 (Sigma Corporation of America, n.d.-a).", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What did the Tamron 28-75mm f/2.8 G2 cost on October 21, 2026?", options: ["$1,219.00", "$609.00", "$899.00", "$2,098.00"], correctIndex: 2, explanation: "$899.00 (Focus Camera, n.d.-f).", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "How much less did the Sigma 24-70mm zoom cost than the Sony GM II on that date?", options: ["$1,000", "$759", "$2,448", "$1,229"], correctIndex: 3, explanation: "$2,448 minus $1,219 is $1,229.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What was the used price of the Sony FE 24-70mm f/2.8 GM II on October 21, 2026?", options: ["$1,865.95", "$2,448.00", "$1,990.95", "$1,219.00"], correctIndex: 2, explanation: "$1,990.95 used (Focus Camera, n.d.-e). $1,865.95 was the used Sony 50mm f/1.2 GM.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "Why does the course correct an earlier draft's $2,000 for the Sony 50mm f/1.2 GM?", options: ["It was too high; the page showed $1,539", "It was stale; the page showed $2,298", "It was a rental price, not a sale price", "It included tax and delivery charges"], correctIndex: 1, explanation: "On October 21, 2026, the page showed $2,298. Old prices travel a long way online.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What should you always write next to a price you read?", options: ["The date you read it", "The store's phone number", "The lens's serial number", "The tax rate you paid"], correctIndex: 0, explanation: "Prices change, so always write down the date you read a price.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "Do lesson 12's prices include sales tax and delivery?", options: ["No, they exclude both", "Yes, they include both", "Tax only, not delivery", "Delivery only, not tax"], correctIndex: 0, explanation: "Lesson 12: the prices exclude sales tax and delivery.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What did Lensrentals charge for a 3-day rental of the Sigma 50mm f/1.2 on October 21, 2026?", options: ["$84", "$59", "$79", "$113"], correctIndex: 1, explanation: "$59 for 3 days and $84 for 7 days (Lensrentals, n.d.-b). $79 and $113 are the Sony GM II.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What did Lensrentals charge for a 7-day rental of the Sony 24-70mm GM II on October 21, 2026?", options: ["$79", "$84", "$113", "$203"], correctIndex: 2, explanation: "$113 for 7 days and $79 for 3 days (Lensrentals, n.d.-c).", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "About how many 3-day rentals of the Sigma 50mm f/1.2 equal its purchase price?", options: ["About 6", "About 60", "About 2", "About 26"], correctIndex: 3, explanation: "$1,539 ÷ $59 is about 26.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "Comparing the Sigma and Sony 24-70mm zooms, what would you actually be testing?", options: ["Their weight on a kitchen scale", "Whether both reach f/1.2", "Autofocus on moving players", "Their price at other stores"], correctIndex: 2, explanation: "Both are 24-70mm f/2.8 lenses; what a price list cannot tell you is how their autofocus handles moving players.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What does lesson 12 suggest doing before buying a 24-70mm zoom?", options: ["Rent both for one game", "Buy both, return one", "Buy the cheaper one", "Read only online reviews"], correctIndex: 0, explanation: "Rent both zooms for one game, watch the autofocus, then decide.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "According to lesson 12, what is worth more on this rig than a slightly sharper lens?", options: ["A lens that weighs more", "A lens with a cine mark", "A lens that zooms to 75", "A lens that holds focus"], correctIndex: 3, explanation: "A lens that holds focus is worth more on this rig than a lens that is a little sharper.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "Which subject does lesson 12 leave to a course of its own?", options: ["Reading a lens's spec sheet", "Renting gear out as a business", "Holding focus during a game", "Balancing a lens on a gimbal"], correctIndex: 1, explanation: "Renting gear out to others as a business is taught in its own course; this lesson covers only what a lens costs its user.", sourceLessonSlug: "the-cost-of-fast-glass" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: The gimbal
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-gimbal-does",
      title: "13 · What a gimbal does",
      section: "4 · The gimbal",
      recallContent: [
        {
          prompt: "What did the Sony FE 50mm f/1.2 GM cost new on October 21, 2026?",
          answer: "$2,298.00 (Focus Camera, n.d.-d).",
        },
        {
          prompt: "What does lesson 12 say to do before buying a 24-70mm zoom?",
          answer: "Rent both zooms for one game and watch how their autofocus handles moving players.",
        },
      ],
      body: `**The gimbal's job.** A handheld gimbal holds the camera on motors. Its job is to cancel rotation while the operator walks or runs: tilt (nodding up and down), roll (leaning side to side) and pan (turning left and right). The picture stays steady even though the operator's hands do not.

**What it cannot cancel.** The motors turn the camera; they do not lift it or lower it. So a gimbal does not remove the up-and-down bounce of footsteps. That comes from the operator's walk: bent knees and a rolling heel-to-toe step. Some rigs add a separate device for that up-and-down axis. The gimbal handles rotation; the operator handles bounce.

**Which gimbals the documented rigs used.**

| Rig | Gimbal | Source |
|---|---|---|
| Fox's original | DJI Ronin-S | Costa (2020) |
| BaylorVision | Zhiyun Crane 3S | Costa (2021) |
| CBS and ESPN | MōVI rigs | Kerschbaumer et al. (2021) |
| 2026 Field of Dreams game | Two "RF Ronin systems" supplied by Faction Media | Costa (2026) |

**A correction to carry.** An earlier draft said "networks explicitly look for DJI ecosystem compatibility" and called one DJI model "the correct gimbal for broadcast acceptance." No source supports that. Look at the table: DJI, Zhiyun and MōVI gimbals all went to air. What a show accepts is decided by its engineers and its RF vendor, not by a gimbal's brand.

**Why gimbal choice still matters.** The gimbal decides how heavy a camera you can carry (lesson 14), how long you can run (lesson 15) and how the camera is controlled while it rides. On that last point: Cyanview, whose systems let the truck control the camera, says only one device can control a Sony Alpha camera at a time, so a DJI gimbal's USB camera control must be off when the truck takes over (Cyanview, n.d.-a). The gimbal's own camera buttons and the truck's remote control can fight. Decide before the show which one wins.

**Follow modes.** A follow mode decides which axes turn with your hand and which hold still. DJI's manual for the RS 4 and RS 4 Pro, which share the same modes, defines them (DJI, 2024, pp. 33 to 34):

| Mode | What follows the grip | DJI's suggested use |
|---|---|---|
| PF | "only the pan axis" | "walk-through and arc shots or moving from left to right" |
| PTF | "both the pan and tilt axes" | "moving on a slant" |
| FPV | "all three axes" | "rotating the camera" |
| Custom | any axis you turn on; with all three off, it is Lock mode, and nothing follows | "smooth tracking shots and quick reaction shots" |

**Controls worth knowing before a game.** On the RS 4, a switch toggles PF, PTF and FPV (p. 25). Pressing and holding the trigger enters Lock mode; tapping it twice re-centers the gimbal; tapping it three times turns the camera 180° to face you, "selfie mode" (p. 26). A "Disable Selfie" setting "prevents accidentally entering selfie mode and interrupting recording" (p. 30). Holding the M button gives Sport Mode, where "the follow speed of the gimbal increases greatly," which DJI calls "suitable for shooting in scenarios where subjects move suddenly and at fast speeds" (p. 25). One press of the power button puts the gimbal to sleep and locks the axes (p. 25). On air, a stray press or a stray triple tap ends the shot, so learn where your fingers rest.

**What no source says yet.** DJI's manual says what each mode does. No network, operator or trade-press account found for this course says which mode sideline specialty operators actually use. That is left to the qualified reviewer.

**What the gimbal adds to the job.** A gimbal lets one person run with a cinema camera. It also adds weight, batteries, a balancing routine and a new thing that can fail. The next three lessons cover each.

:::reveal What does a gimbal cancel, and what does it not? ||| It cancels rotation (tilt, roll and pan shake); it does not cancel the up-and-down bounce of footsteps, which is the operator's walk.

:::reveal Do networks require a DJI gimbal? ||| No source says so. Documented rigs used DJI, Zhiyun and MōVI gimbals.

## Sources
- ${COSTA_2020} Locator: the paragraph naming the DJI Ronin-S.
- ${COSTA_2021} Locator: the paragraph naming the Zhiyun Crane 3S.
- ${KERSCHBAUMER_2021} Locator: the sections on CBS's and ESPN's MōVI rigs.
- ${COSTA_2026} Locator: the paragraph on Faction Media's RF Ronin systems.
- ${CYANVIEW_ALPHA} Locator: the note on one controlling device at a time.
- ${DJI_RS4_MANUAL} Locator: pp. 25 to 26 (mode switch, trigger, M button, power button), p. 30 (Disable Selfie), pp. 33 to 34 (gimbal follow modes).`,
    },
    {
      slug: "payload-and-balance",
      title: "14 · Payload and balance",
      section: "4 · The gimbal",
      recallContent: [
        {
          prompt: "Which three axes does a gimbal turn the camera around?",
          answer: "Tilt, roll and pan.",
        },
        {
          prompt: "Why must a DJI gimbal's USB camera control be off when the truck controls a Sony Alpha camera through Cyanview?",
          answer: "Only one device can control the camera at a time (Cyanview, n.d.-a).",
        },
      ],
      body: `${QR("a gimbal technician or an experienced gimbal operator, to confirm the two cable steps in the balancing routine, which are field practice with no maker's source")}

**Payload is a ceiling.** DJI rates the RS 4 at a tested payload of 3 kg and the RS 4 Pro at 4.5 kg (DJI, n.d.-b; DJI, n.d.-a). A payload rating is the most the motors are tested to hold when the load is balanced. It does not prove that your camera, cage, monitor and cables fit between the gimbal's arms, or that they clear the arms when the camera tilts.

**Add it up.** A rough sum for one build: the FX3 body is about 715 g with battery and card (Sony, n.d.-b). The FX6 body alone is 890 g (Allard, 2020). Then add the lens, the cage, a monitor if it rides on the gimbal, a transmitter, and every cable. Weigh the real build on a kitchen scale before you trust a payload number. A heavier rig is also harder to carry for a whole game, even if the motors can hold it.

**Balance first.** A balanced camera stays where you leave it with the motors off. The motors then only have to correct movement, not hold the camera up. DJI's manual says why it matters: "An unbalanced gimbal may affect the stability of videos and reduce the battery life. Severe imbalance may cause the device to overheat and go into hibernation" (DJI, 2024, p. 14).

**The routine.** The order and the checks come from DJI's manual for the RS 4 and RS 4 Pro (DJI, 2024). Steps 1 and 7 are field practice, not DJI's, and are marked so.

1. **Build the full rig first (field practice).** Attach every cable, the transmitter and the monitor before balancing. A cable added later changes the weight.
2. **Get the camera and gimbal ready.** Power the camera on if the lens is an optical zoom, and set a varifocal lens to its working focal length; make sure the gimbal is powered off or asleep (p. 14). On a zoom, use the focal length you use most, because the lens's weight moves as it zooms.
3. **Balance the axes in DJI's order:** "the vertical tilt, the depth for the tilt axis, the roll axis and the pan axis in sequence" (p. 14). Vertical tilt is balanced when the camera stays steady pointing up (p. 14); tilt depth when it stays steady tilted up or down by 45° (p. 15); roll when it stays steady level (p. 16); pan when it stays steady as you rotate the pan while tilting the grip (p. 17).
4. **Then tune the motors.** "Auto tune provides the proper stiffness for the motor according to the payload." Put the gimbal on a steady flat surface, and "DO NOT move the gimbal during automatic calibration" (p. 24).
5. **Check the result.** Tilt the gimbal 15° left or right and read the balance status bar: green or gray is balanced, yellow slightly off, red critical (p. 28). In the Ronin app, the motor power values of a balanced gimbal sit within ±5 (p. 45).
6. **Re-tune after a change.** If a new focal length, lens or camera turns the balance icon red, or the gimbal shakes for no reason, DJI recommends running automatic calibration again; raise stiffness if the gimbal is not stable enough and lower it if it starts to shake (p. 28).
7. **Route cables with slack (field practice).** A stiff HDMI or power cable can tug the camera as it tilts, or catch on an arm. Use short, flexible cables with a little slack loop. Where you can, mount the transmitter and battery on the part of the gimbal that does not move.

**Test the extremes.** With everything connected, tilt and roll the camera as far as it will go. Watch for a cable pulling or anything hitting an arm. DJI lets you set tilt end points because "Some longer lenses may hit the gimbal frame" (p. 47). A shot that tilts up for a celebration should not be the first time you find out.

:::reveal What does a gimbal's payload rating not prove? ||| That your full build fits and clears the gimbal's arms; it is the most the motors are tested to hold when the load is balanced.

:::reveal Why balance before running Auto Tune? ||| So the motors only correct movement instead of holding the camera up against gravity; Auto Tune then sets stiffness for that balanced payload (DJI, 2024, p. 24).

## Sources
- ${DJI_RS4_SPECS} Locator: "Tested payload" entry.
- ${DJI_RS4_PRO_SPECS} Locator: "Tested payload" entry.
- ${DJI_RS4_MANUAL} Locator: p. 14 (before balancing, the order, why balance matters), pp. 15 to 17 (the axis tests), p. 24 (Auto Tune), p. 28 (balance status and stiffness), p. 45 (motor power within ±5), p. 47 (tilt end points).
- ${SONY_SPECS} Locator: "Mass" entry.
- ${ALLARD_2020} Locator: the specifications section, body weight.`,
    },
    {
      slug: "runtime-temperature-and-spares",
      title: "15 · Runtime, temperature and spares",
      section: "4 · The gimbal",
      recallContent: [
        {
          prompt: "What are the tested payloads of the DJI RS 4 and RS 4 Pro?",
          answer: "3 kg for the RS 4 and 4.5 kg for the RS 4 Pro.",
        },
        {
          prompt: "At which focal length should a zoom be balanced on a gimbal?",
          answer: "The one you use most, because the lens's weight moves as it zooms.",
        },
      ],
      body: `**Runtime, and the fine print.** DJI rates the RS 4 Pro's battery at "13 hours." Read the note that goes with it: the figure is "Measured with the gimbal balanced in a level and stationary state," and "When the gimbal is in motion, the operating time will be reduced" (DJI, n.d.-a). A sideline gimbal is never level and still for long. So plan on less than the rated time, and carry a charged spare grip for a full show day.

**Temperature.** DJI lists the RS 4 Pro's operating range as -20 to 45 °C (DJI, n.d.-a). Sony lists the FX3's as 0 to 40 °C (Sony, n.d.-b). Compare them: at both ends, the camera's range is narrower than the gimbal's. On a hot afternoon or a freezing night, the camera will hit its limit first. Watch the camera, not just the gimbal.

**Can you get one?** On October 21, 2026, DJI's own US store showed the RS 4 Pro out of stock (DJI, n.d.-d). Its page for the newer RS 5 said it "is not currently available for purchase in the United States" (DJI, n.d.-c). The point is not one brand. It is that a part you cannot replace quickly needs a spare, and a known repair route, before the season starts.

**What to check at every break.** The gimbal's battery level, the camera's heat, and whether the rig still balances. A gimbal that dies mid-game takes the shot with it.

**Spares worth carrying.**

- A second charged gimbal grip or battery, because the stationary runtime figure overstates a moving day.
- Short spare cables, because a tugged cable is a common fault (lesson 14).
- Shade for the rig at breaks, because the camera's heat limit is lower than the gimbal's.

**A note on control.** Lesson 13 said only one device can control a Sony Alpha camera at a time (Cyanview, n.d.-a). If the gimbal's camera-control cable is plugged in and active, the truck's remote control may not work. Settle which one is in charge during the facilities check, not on air.

:::reveal What does DJI's 13-hour runtime figure for the RS 4 Pro assume? ||| A gimbal "balanced in a level and stationary state"; in motion, the operating time is reduced.

:::reveal Which hits its temperature limit first on a hot day, the FX3 or the RS 4 Pro? ||| The FX3: its range is 0 to 40 °C against the gimbal's -20 to 45 °C.

## Sources
- ${DJI_RS4_PRO_SPECS} Locator: "Max runtime" and "Operating temperature" entries, with their notes.
- ${SONY_SPECS} Locator: "Operating temperature" entry.
- ${DJI_RS4_PRO_STORE} Locator: stock status on the store page.
- ${DJI_RS5_STORE} Locator: the availability notice on the store page.
- ${CYANVIEW_ALPHA} Locator: the note on one controlling device at a time.`,
    },
    {
      slug: "running-a-sideline",
      title: "16 · Running a sideline",
      section: "4 · The gimbal",
      recallContent: [
        {
          prompt: "Why carry a spare gimbal grip even though the RS 4 Pro is rated at 13 hours?",
          answer: "The 13 hours is measured level and stationary; DJI says operating time is reduced in motion.",
        },
        {
          prompt: "What did DJI's US store say about the RS 5 on October 21, 2026?",
          answer: "That it \"is not currently available for purchase in the United States.\"",
        },
      ],
      body: `${QR("an experienced sports specialty-camera operator, to supply how a utility spots a handheld operator on a sideline and where an RF gimbal operator should stand during live play, which no fetched league, network or crew-safety source describes")}

**What the rule books say.** Leagues decide who may stand where. These are the lines this course could read in the rule books themselves:

- **NFL.** "The only persons permitted within the solid six-foot white border ... while play is in progress on the field are game officials," for reasons that include "the safety of participating players whose actions may carry them out of bounds." Field-level people outside the benches must be accredited by the home club, and "Photographers and other personnel accredited for field-level work must not be permitted in the end zones or any other part of the official playing field while play is in progress" (National Football League [NFL], 2026, Rule 13, Section 1, Articles 4 and 6). The rule book's diagram labels the outer zone "MEDIA AND ALL OTHERS" (NFL, 2026, p. v).
- **College football.** The NCAA's 2026 rule book, read in a complete copy hosted by an officials' association, keeps everyone outside the team area behind limit lines, with one exception: "Hand-held cameras under the supervision of the television partners may briefly be between the limit lines and the sideline after the ball is dead and the game clock has been stopped," and never on the field or in the end zone (National Collegiate Athletic Association [NCAA], 2026, Rule 1-2-3-b, p. FR-19). Media and their equipment may not be in the team area or coaching box (Rule 1-2-4-d).
- **MLB.** Only listed people may be on the field during a game, including "news photographers authorized by the home team" (Office of the Commissioner of Baseball, 2026, Rule 4.07(a)), and an umpire may eject "broadcasting crew members" (Rule 8.01(e)).

**Allowed is not the same as safe.** In 2020 a player ran into an ESPN camera cart on a Monday night game. A press report says "Technically the cart and its operator were where they were supposed to be," and that the player suffered "a Grade 2 AC joint sprain" (Keeley, 2020a). Standing in the permitted zone did not keep anyone safe.

**Two accounts, not standards.** No league or network document this course found says how a utility spots a handheld operator. Two accounts come close. One UK studio's Steadicam risk assessment says "An assistant will watch the operator's back" and that people nearby "will be avoided by the operator and 'minded' by the assistant" (BBC Studioworks, 2023, pp. 2 to 3); that is one studio, not a sports field. A 2019 profile of a Fox handheld operator says that "when Cornelli is looking into his viewfinder, he sometimes can't tell how close the players are," and that after one collision he "was diagnosed with a concussion" (Curtis, 2019); that is one cabled operator, not an RF gimbal rig. Both point the same way: a person looking at a monitor cannot also watch the field. How a sports crew handles that is for the reviewer named at the top.

**It is a dedicated job.** Fox hired an extra camera operator for the rig's first live game (Feldman, 2021). Its first operator was Mike Smole (Keeley, 2020b). The rig was not a hard-camera operator's side task.

**Who owns the camera settings.** On a show that controls the camera from the truck, the operator stops touching exposure. A source in Sports Video Group's 2021 feature put it this way: "The operator doesn't have to worry about camera settings as it's all done back in the trucks" (Kerschbaumer et al., 2021). Cyanview's control of Sony Alpha bodies can reach settings such as iris, ISO, shutter and white balance (Cyanview, n.d.-a). If a show has no remote control, those settings are yours, and you match the other cameras by eye on your monitor.

**Your monitor is your eyes.** On Fox's original rig the operator had a 6-inch field monitor (Mrozek, 2021). In daylight a dim screen is hard to read, so brightness, measured in nits, matters most on day games. Three examples, as their makers list them:

| Monitor | Brightness | Source |
|---|---|---|
| Portkeys LH5P II, 5.5-inch | 2000 nits | Portkeys (n.d.) |
| SmallHD Indie 5 | 1000 nits, 3G-SDI and HDMI 2.0 | SmallHD (n.d.-a) |
| SmallHD Ultra 5 | 3000 nits, 3G-SDI and HDMI 2.0 | SmallHD (n.d.-b) |

**Focus, all game.** Fox's operators work with under 2 feet in focus (Mrozek, 2021), and autofocus can jump to the crowd. Lesson 10's settings and f-stop rule are the operator's tools for that, play after play.

**The shot itself.** Fox used the rig for end-zone shots in its first game (Costa, 2020). Netflix used three of them for its 2026 Home Run Derby (Hernández, 2026). The director decides when the shot is used; the operator's job is to have it sharp and ready when called.

**Everything else is on the radio.** Picture, intercom, tally and remote control each travel their own path. Sections 5 and 6 follow each one from the rig to the truck.

:::reveal On a show that shades the camera from the truck, who handles exposure? ||| The truck: "The operator doesn't have to worry about camera settings as it's all done back in the trucks" (Kerschbaumer et al., 2021).

:::reveal Why does monitor brightness matter most on day games? ||| A dim screen is hard to read in sunlight, and the operator judges focus and framing on it.

## Sources
- ${NFL_RULES_2026} Locator: Rule 13, Section 1, Articles 4 and 6; p. v (bench-area diagram).
- ${NCAA_RULES_2026} Locator: Rule 1-2-3-b, p. FR-19; Rule 1-2-4-d, pp. FR-19 to FR-20.
- ${MLB_RULES_2026} Locator: Rules 4.07(a) and 8.01(e).
- ${KEELEY_CART_2020} Locator: the paragraphs on where the cart was and on the injury.
- ${BBC_STUDIOWORKS_2023} Locator: pp. 2 to 3, the control measures.
- ${CURTIS_2019} Locator: the passages on the viewfinder and the concussion.
- ${FELDMAN_2021} Locator: the paragraph on hiring an extra camera operator.
- ${KEELEY_2020} Locator: the paragraph naming the operator.
- ${KERSCHBAUMER_2021} Locator: the quotation on camera settings being handled in the trucks.
- ${CYANVIEW_ALPHA} Locator: the list of controllable settings.
- ${MROZEK_2021} Locator: the passages on the 6-inch monitor and on depth of field under 2 feet.
- ${PORTKEYS} Locator: product title and brightness.
- ${SMALLHD_INDIE_5} Locator: specifications, brightness and inputs.
- ${SMALLHD_ULTRA_5} Locator: specifications, brightness and inputs.
- ${COSTA_2020} Locator: the paragraph on end-zone shots.
- ${HERNANDEZ_2026} Locator: the paragraph on the three shallow-depth-of-field cameras.`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · The gimbal",
      section: "4 · The gimbal",
      body: "A graded check on what a gimbal does and cannot do, payload and balance, runtime, temperature and spares, and running the rig on a sideline. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does a handheld gimbal cancel?", options: ["Up-and-down bounce from footsteps", "Delay in the wireless video link", "Rotation: tilt, roll and pan shake", "Lean from the rolling shutter"], correctIndex: 2, explanation: "A gimbal cancels rotation (tilt, roll and pan). It does not cancel bounce, link delay or shutter lean.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What does a gimbal not cancel?", options: ["Up-and-down bounce from footsteps", "Roll as the operator leans over", "Tilt as the operator's wrist nods", "Pan shake as the operator turns"], correctIndex: 0, explanation: "The motors turn the camera; they do not lift or lower it, so footstep bounce stays.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Who handles the up-and-down bounce of footsteps?", options: ["The truck's frame synchronizer", "The camera's rolling shutter", "The lens's autofocus motor", "The operator, by the way they walk"], correctIndex: 3, explanation: "Bounce comes from the operator's walk: bent knees and a rolling heel-to-toe step. The gimbal handles rotation.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "In lesson 13, what is \"tilt\"?", options: ["Leaning side to side", "Nodding up and down", "Turning left and right", "Moving up and down"], correctIndex: 1, explanation: "Tilt is nodding up and down; roll is leaning side to side; pan is turning left and right.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "In lesson 13, what is \"roll\"?", options: ["Nodding up and down", "Leaning side to side", "Turning left and right", "Moving forward and back"], correctIndex: 1, explanation: "Roll is leaning side to side.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "In lesson 13, what is \"pan\"?", options: ["Nodding up and down", "Leaning side to side", "Moving up and down", "Turning left and right"], correctIndex: 3, explanation: "Pan is turning left and right.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Which walk does lesson 13 describe for reducing bounce?", options: ["Bent knees and a heel-to-toe step", "Straight legs and a flat-footed step", "A quick run on the toes, knees locked", "Long strides with both knees locked"], correctIndex: 0, explanation: "Bent knees and a rolling heel-to-toe step.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Which gimbal did Fox's original rig use?", options: ["Zhiyun Crane 3S", "A MōVI rig", "DJI Ronin-S", "DJI RS 5"], correctIndex: 2, explanation: "Fox used a DJI Ronin-S (Costa, 2020).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Which gimbal brand did BaylorVision fly?", options: ["DJI", "MōVI", "Ronin", "Zhiyun"], correctIndex: 3, explanation: "BaylorVision used a Zhiyun Crane 3S (Costa, 2021).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What did CBS and ESPN use to stabilize their cameras?", options: ["DJI RS 5s", "Ronin 4Ds", "MōVI rigs", "Crane 3Ss"], correctIndex: 2, explanation: "Kerschbaumer et al. (2021) describe MōVI rigs at CBS and ESPN.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Who supplied two \"RF Ronin systems\" at the 2026 Field of Dreams game?", options: ["CP Communications", "Faction Media", "Game Creek Video", "Cyanview"], correctIndex: 1, explanation: "Costa (2026): Faction Media supplied two RF Ronin systems.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Do networks require a DJI gimbal for broadcast acceptance?", options: ["No source says so; others went to air", "Yes; the NFL lists DJI as required", "Yes, for broadcast acceptance only", "Only for games shot in 4K or above"], correctIndex: 0, explanation: "DJI, Zhiyun and MōVI gimbals all went to air. The \"DJI ecosystem\" claim from an earlier draft has no source.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Who decides what a show accepts, according to lesson 13?", options: ["Its engineers and its RF vendor", "The gimbal's maker, by brand", "The camera operator alone", "The league's ticket office"], correctIndex: 0, explanation: "What a show accepts is decided by its engineers and its RF vendor, not by a gimbal's brand.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "How many devices can control a Sony Alpha camera at one time, per Cyanview?", options: ["Two", "One", "Four", "Any number"], correctIndex: 1, explanation: "Cyanview says only one device can control a Sony Alpha camera at a time (Cyanview, n.d.-a).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What must be off when the truck controls a Sony Alpha camera through Cyanview?", options: ["The gimbal's motors and its battery", "The camera's HDMI output to the TX", "The DJI gimbal's USB camera control", "The operator's monitor and its LUT"], correctIndex: 2, explanation: "Only one device may control the camera, so a DJI gimbal's USB control must be off (Cyanview, n.d.-a).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What does a gimbal let one person do?", options: ["Shade the camera remotely", "Skip the RF coordinator", "Replace the hard cameras", "Run with a cinema camera"], correctIndex: 3, explanation: "A gimbal lets one person run with a cinema camera; it also adds weight, batteries and a balancing routine.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Which three things does gimbal choice decide, according to lesson 13?", options: ["Lens price, sensor size, codec", "Link range, latency, frequency", "Weight carried, run time, control", "Shutter type, genlock, timecode"], correctIndex: 2, explanation: "How heavy a camera you can carry, how long you can run, and how the camera is controlled while it rides.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "In DJI's PF mode, which axis follows the grip?", options: ["Only the pan axis", "Only the roll axis", "Pan and tilt both", "All three axes"], correctIndex: 0, explanation: "PF is \"Pan follow, where only the pan axis follows the movement of the grip\" (DJI, 2024, p. 33).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "In DJI's PTF mode, which axes follow the grip?", options: ["Only the roll axis", "Pan and tilt", "Tilt and roll", "None of them"], correctIndex: 1, explanation: "PTF is \"Pan and tilt follow, where both the pan and tilt axes follow the movement of the grip\" (DJI, 2024, p. 34).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "In DJI's FPV mode, which axes follow the grip?", options: ["Only pan", "Pan and tilt", "All three", "Only tilt"], correctIndex: 2, explanation: "FPV is \"Pan, tilt, and roll follow, where all three axes follow the movement of the grip\" (DJI, 2024, p. 34).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What is Lock mode on the RS 4?", options: ["Custom with all three axes off", "FPV with the roll axis held", "PF with a slower follow speed", "Sport Mode held on the M button"], correctIndex: 0, explanation: "\"Lock mode is enabled when the three axes are disabled\"; then no axis follows the grip (DJI, 2024, p. 34).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What does tapping the RS 4's trigger twice do?", options: ["Enters Lock mode", "Re-centers the gimbal", "Turns to selfie mode", "Puts it to sleep"], correctIndex: 1, explanation: "\"Tap twice to re-center the gimbal\" (DJI, 2024, p. 26). Three taps turn the camera to face you.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Why turn on DJI's Disable Selfie setting for live work?", options: ["It raises the follow speed", "It locks the pan axis", "It saves gimbal battery", "It blocks a stray triple tap"], correctIndex: 3, explanation: "It \"prevents accidentally entering selfie mode and interrupting recording\" (DJI, 2024, p. 30); three taps would otherwise spin the camera 180°.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What does holding the M button do on the RS 4?", options: ["Enters Sport Mode, faster follow", "Starts Auto Tune on the motors", "Switches the link to 6 GHz", "Turns the gimbal fully off"], correctIndex: 0, explanation: "Holding M enters Sport Mode, where \"the follow speed of the gimbal increases greatly\" (DJI, 2024, p. 25).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Which mode question does no source found for this course answer?", options: ["What PF mode does with the pan", "What Lock mode does to the axes", "Which mode sideline operators use", "What two trigger taps will do"], correctIndex: 2, explanation: "DJI's manual says what each mode does; no network, operator or trade-press account says which mode sideline specialty operators use.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What is the DJI RS 4 Pro's tested payload?", options: ["4.5 kg", "3 kg", "1.6 kg", "13 kg"], correctIndex: 0, explanation: "4.5 kg (DJI, n.d.-a). The RS 4 is 3 kg.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What is a gimbal's payload rating?", options: ["The most the gimbal can hold when unbalanced", "The weight of the gimbal without a camera", "The weight one operator may legally carry", "The most the motors are tested to hold balanced"], correctIndex: 3, explanation: "It is the most the motors are tested to hold when the load is balanced: a ceiling.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What does a payload rating not prove?", options: ["That the motors can hold a balanced load", "That your build fits and clears the arms", "That the gimbal is sold in DJI's store", "That the camera has a global shutter"], correctIndex: 1, explanation: "A payload rating does not prove your camera, cage, monitor and cables fit and clear the gimbal's arms.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Which weighs more on its own: the FX6 body, or the FX3 with battery and card?", options: ["The FX3, at 890 g", "The FX6 body, at 890 g", "They weigh the same", "The FX3, at 1.6 kg"], correctIndex: 1, explanation: "The FX6 body is 890 g (Allard, 2020); the FX3 is about 715 g with battery and card (Sony, n.d.-b).", sourceLessonSlug: "payload-and-balance" },
          { prompt: "How does lesson 14 suggest you check what your real build weighs?", options: ["Add up the box weights", "Trust the payload figure", "Ask the RF vendor to guess", "Weigh it on a kitchen scale"], correctIndex: 3, explanation: "Weigh the real build on a kitchen scale before you trust a payload number.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What does a balanced camera do with the gimbal's motors off?", options: ["Stays where you leave it", "Swings to point at the floor", "Spins slowly to the left", "Tilts up toward the sky"], correctIndex: 0, explanation: "A balanced camera stays where you leave it with the motors off.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Why balance the camera before running the motor-tuning step?", options: ["So tuning can skip the pan axis entirely", "So the camera can record at a higher rate", "So motors correct movement, not gravity", "So the transmitter finds a cleaner channel"], correctIndex: 2, explanation: "With the camera balanced, the motors only have to correct movement, not hold the camera up.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What can an unbalanced camera do to the rig?", options: ["Lower the camera's heat limit", "Raise the wireless link's range", "Turn the shutter from rolling to global", "Make it buzz and drain the battery"], correctIndex: 3, explanation: "The motors work against gravity the whole time, which costs battery and can make the rig buzz or shake.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What is step 1 of lesson 14's balancing routine?", options: ["Run the motor-tuning step first", "Balance the bare camera, then add", "Build the full rig with every cable", "Set the lens to its widest end"], correctIndex: 2, explanation: "Attach every cable, the transmitter and the monitor before balancing; a cable added later changes the weight.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Where should a zoom be set before balancing?", options: ["At its widest, whatever you shoot", "At the focal length you use most", "At its longest, whatever you shoot", "In the middle of its range, always"], correctIndex: 1, explanation: "A rig that balances at 24mm may be off at 70mm, so balance at the focal length you use most.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "When should the gimbal's motor-tuning step run?", options: ["After the camera is balanced", "Before the camera is mounted", "Instead of balancing at all", "Only when the battery is low"], correctIndex: 0, explanation: "Run the gimbal's own motor-tuning step only after the camera is balanced.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "When must you re-balance the gimbal?", options: ["After any lens, accessory or cable change", "Only at the start of each new season", "Only when the gimbal shows a warning", "Only after the gimbal has been dropped"], correctIndex: 0, explanation: "A new lens, a new accessory or a moved cable means starting again.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Why can a cable spoil a gimbal shot?", options: ["It adds delay to the video link", "It can tug the camera as it tilts", "It lowers the gimbal's payload", "It blocks the camera's autofocus"], correctIndex: 1, explanation: "A stiff HDMI or power cable can tug the camera as it tilts, or catch on an arm.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What kind of cables does lesson 14 recommend on the gimbal?", options: ["Long and stiff, pulled tight to the arm", "Coiled up loosely in the backpack", "Short, flexible, with a slack loop", "Run through the gimbal's motor"], correctIndex: 2, explanation: "Short, flexible cables with a little slack loop.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Where should the transmitter and battery go, where you can manage it?", options: ["On the camera's top handle", "On the lens's front end", "On the tilt motor's arm", "On the part that does not move"], correctIndex: 3, explanation: "Mount the transmitter and battery on the part of the gimbal that does not move.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "In what order does DJI's manual say to balance the RS 4's axes?", options: ["Pan, roll, tilt depth, then vertical tilt", "Vertical tilt, tilt depth, roll, then pan", "Roll, pan, vertical tilt, then tilt depth", "Tilt depth, vertical tilt, pan, then roll"], correctIndex: 1, explanation: "\"Balance the vertical tilt, the depth for the tilt axis, the roll axis and the pan axis in sequence\" (DJI, 2024, p. 14).", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What state should the RS 4 be in while you balance it?", options: ["Powered off or in sleep mode", "Powered on in Sport Mode", "Running Auto Tune live", "Locked in selfie mode"], correctIndex: 0, explanation: "DJI: \"Make sure DJI RS 4 / DJI RS 4 Pro is powered off or in sleep mode before balancing\" (DJI, 2024, p. 14).", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Where should the gimbal sit while Auto Tune runs?", options: ["In the operator's hands, walking", "On a steady flat surface, still", "On the truck's roof, facing the RX", "Hanging upside down from a stand"], correctIndex: 1, explanation: "\"Place the gimbal on a steady flat surface. DO NOT move the gimbal during automatic calibration\" (DJI, 2024, p. 24).", sourceLessonSlug: "payload-and-balance" },
          { prompt: "How do you check the RS 4's balance status after tuning?", options: ["Tilt it 15° and read the status bar", "Shake it and listen for a buzz", "Weigh it on a kitchen scale again", "Turn it upside down and wait"], correctIndex: 0, explanation: "\"Tilt the gimbal 15° left or right and check the status bar\" (DJI, 2024, p. 28).", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What does DJI say severe imbalance can do to the gimbal?", options: ["Switch it into FPV mode", "Overheat it into hibernation", "Erase its saved settings", "Break its wireless pairing"], correctIndex: 1, explanation: "\"Severe imbalance may cause the device to overheat and go into hibernation\" (DJI, 2024, p. 14).", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Which two steps of lesson 14's routine are field practice, not DJI's?", options: ["Auto Tune and the 15° check", "The axis order and the tests", "Cabling first and slack loops", "Sleep mode and lens setting"], correctIndex: 2, explanation: "DJI's manual has no cable-routing guidance, so building with every cable first and routing short cables with slack are marked as field practice.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Why does DJI let you set tilt end points?", options: ["Some longer lenses may hit the frame", "It saves battery on long show days", "It makes the gimbal follow faster", "It stops selfie mode by accident"], correctIndex: 0, explanation: "DJI: \"Some longer lenses may hit the gimbal frame\" (DJI, 2024, p. 47).", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Why tilt and roll the camera to its limits with every cable connected?", options: ["To calibrate the wireless channel", "To warm up the camera's sensor", "To find pulls or arm hits before air", "To check the battery's voltage"], correctIndex: 2, explanation: "Watch for a cable pulling or anything hitting an arm. A celebration shot should not be the first time you find out.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Why is a heavier rig a problem even when it is within payload?", options: ["It is harder to carry all game", "It cannot output SDI at all", "It records at a lower bit depth", "It voids the camera's warranty"], correctIndex: 0, explanation: "A heavier rig is harder to carry for a whole game, even if the motors can hold it.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What battery runtime does DJI give for the RS 4 Pro?", options: ["3 hours", "30 hours", "8 hours", "13 hours"], correctIndex: 3, explanation: "DJI rates the RS 4 Pro at \"13 hours\" (DJI, n.d.-a), measured level and stationary.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "Under what conditions is DJI's 13-hour figure measured?", options: ["Moving, with a full camera load", "Balanced, level and stationary", "At 45 °C in direct sunlight", "With the motors switched off"], correctIndex: 1, explanation: "\"Measured with the gimbal balanced in a level and stationary state\" (DJI, n.d.-a).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What does DJI say happens to runtime when the gimbal is in motion?", options: ["Operating time doubles", "Operating time is reduced", "Operating time is the same", "The gimbal shuts off"], correctIndex: 1, explanation: "\"When the gimbal is in motion, the operating time will be reduced\" (DJI, n.d.-a).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "Given DJI's runtime note, what should you carry for a full show day?", options: ["A second camera body", "A spare lens cap", "A longer HDMI cable", "A charged spare grip"], correctIndex: 3, explanation: "A sideline gimbal is never level and still for long, so carry a charged spare grip.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What operating temperature range does DJI list for the RS 4 Pro?", options: ["-20 to 45 °C", "0 to 40 °C", "-10 to 35 °C", "5 to 50 °C"], correctIndex: 0, explanation: "-20 to 45 °C (DJI, n.d.-a). 0 to 40 °C is the FX3.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "On a hot day, which reaches its temperature limit first?", options: ["The RS 4 Pro gimbal", "Both at the same point", "The FX3 camera", "Neither has a limit"], correctIndex: 2, explanation: "The FX3's top is 40 °C against the gimbal's 45 °C, so the camera hits its limit first.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "On a freezing night, which reaches its temperature limit first?", options: ["The gimbal, at -20 °C", "Both, at -10 °C", "Neither, below -40 °C", "The FX3, at 0 °C"], correctIndex: 3, explanation: "The FX3's range starts at 0 °C, the gimbal's at -20 °C, so the camera hits its limit first.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "On a hot day, what should you watch, according to lesson 15?", options: ["The gimbal, not the camera", "The link, not the camera", "The camera, not just the gimbal", "Only the gimbal's battery"], correctIndex: 2, explanation: "At both ends the camera's range is narrower than the gimbal's, so watch the camera.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What did DJI's US store show for the RS 4 Pro on October 21, 2026?", options: ["In stock", "Out of stock", "Discontinued", "Recalled"], correctIndex: 1, explanation: "DJI's own US store showed the RS 4 Pro out of stock that day (DJI, n.d.-d).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What did DJI's US store page say about the RS 5 on October 21, 2026?", options: ["Not available for purchase in the US", "Available only through rental houses", "Available, with a 6-month wait", "Sold only in a Ronin 4D bundle"], correctIndex: 0, explanation: "It \"is not currently available for purchase in the United States\" (DJI, n.d.-c).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What is lesson 15's point about stock and supply?", options: ["A part you cannot replace needs a spare", "Only DJI parts are worth buying", "Stock levels never change once listed", "Out-of-stock parts are always better"], correctIndex: 0, explanation: "A part you cannot replace quickly needs a spare, and a known repair route, before the season starts.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What should you check at every break?", options: ["Tally light, frame rate, timecode", "Gimbal battery, camera heat, balance", "Lens price, rental date, shipping", "Crowd size, weather, scoreboard"], correctIndex: 1, explanation: "The gimbal's battery level, the camera's heat, and whether the rig still balances.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "Why carry short spare cables?", options: ["Short cables raise the payload", "The league requires spare cables", "A tugged cable is a common fault", "Short cables add a genlock input"], correctIndex: 2, explanation: "A tugged cable is a common fault (lesson 14).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "Why shade the rig at breaks?", options: ["Shade makes the link stronger", "Sun drains the gimbal's grip", "Shade lowers the f-number", "The camera's heat limit is lower"], correctIndex: 3, explanation: "The camera's heat limit (40 °C) is lower than the gimbal's (45 °C).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What can happen if the gimbal's camera-control cable is plugged in and active?", options: ["The camera records at double rate", "The gimbal stops balancing itself", "The truck's remote control may fail", "The monitor shows a black picture"], correctIndex: 2, explanation: "Only one device can control a Sony Alpha camera at a time (Cyanview, n.d.-a).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "When should the crew settle which control is in charge of the camera?", options: ["During the facilities check", "During the first play on air", "After the game, in the truck", "Only if a problem appears"], correctIndex: 0, explanation: "Settle it during the facilities check, not on air.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What happens to the shot if the gimbal dies mid-game?", options: ["The truck takes over", "Nothing changes", "The link switches", "The shot goes with it"], correctIndex: 3, explanation: "A gimbal that dies mid-game takes the shot with it.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "Under the NFL's 2026 rules, who may be inside the solid six-foot white border while play is live?", options: ["Only the game officials", "Accredited camera crews", "Coaches and team staff", "Any credentialed media"], correctIndex: 0, explanation: "Rule 13, Section 1, Article 4: \"The only persons permitted within the solid six-foot white border ... while play is in progress on the field are game officials\" (NFL, 2026).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Where may NFL field-level personnel never be while play is in progress?", options: ["Behind the yellow dashed line", "In the end zones or on the field", "Beside the team bench areas", "In the media zone on the diagram"], correctIndex: 1, explanation: "Rule 13, Section 1, Article 6: field-level personnel \"must not be permitted in the end zones or any other part of the official playing field while play is in progress\" (NFL, 2026).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Under the NCAA's 2026 rule book, when may a TV handheld briefly enter the zone inside the limit line?", options: ["During any live play near the sideline", "After the ball is dead and the clock stopped", "Whenever the TV partner's director asks", "Only during the halftime show, not games"], correctIndex: 1, explanation: "Rule 1-2-3-b allows hand-held cameras under the TV partner's supervision there briefly \"after the ball is dead and the game clock has been stopped\" (NCAA, 2026, p. FR-19).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Where does the NCAA rule book bar media and their equipment outright?", options: ["The team area and coaching box", "The press box and the camera wells", "The tunnel and the locker rooms", "The stands behind the end zone"], correctIndex: 0, explanation: "Rule 1-2-4-d: no media personnel \"or their equipment, shall be in the team area or coaching box\" (NCAA, 2026).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "In MLB's 2026 rules, who may eject broadcast crew members from the field?", options: ["The home team's media director", "The league's frequency coordinator", "Any umpire in the game", "The network's stage manager"], correctIndex: 2, explanation: "Rule 8.01(e): each umpire may eject \"any person whose duties permit his presence on the field,\" including \"broadcasting crew members\" (Office of the Commissioner of Baseball, 2026).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "What does the 2020 ESPN camera-cart collision show, per lesson 16?", options: ["Carts are banned from NFL sidelines", "The cart was in the wrong place", "Allowed is not the same as safe", "Only handhelds are ever at risk"], correctIndex: 2, explanation: "A press report says the cart and operator \"were where they were supposed to be,\" yet the player was hurt (Keeley, 2020a).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "How does lesson 16 treat the BBC Studioworks and Fox operator accounts?", options: ["As league rules every crew must follow", "As accounts, not sports standards", "As the network's written spotting plan", "As claims the course has disproved"], correctIndex: 1, explanation: "One is a studio's Steadicam risk assessment and one is a profile of a cabled operator; neither is a league or network standard for spotting.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "What does BBC Studioworks' Steadicam risk assessment say the assistant will do?", options: ["Watch the operator's back", "Shade the camera remotely", "Pull focus from a monitor", "Coordinate the frequencies"], correctIndex: 0, explanation: "\"An assistant will watch the operator's back\" (BBC Studioworks, 2023, pp. 2 to 3).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "What did a 2019 profile say a Fox handheld operator sometimes cannot tell through his viewfinder?", options: ["Which camera is on the air", "How close the players are", "Whether focus is on target", "What the score of the game is"], correctIndex: 1, explanation: "\"When Cornelli is looking into his viewfinder, he sometimes can't tell how close the players are\" (Curtis, 2019).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Which sideline question does lesson 16 leave for the qualified reviewer?", options: ["What the NFL's six-foot border rule says", "Who may eject a broadcast crew in MLB", "How a utility spots a handheld operator", "Which monitor is brightest in daylight"], correctIndex: 2, explanation: "No fetched league, network or crew-safety source describes spotting practice, so the lesson keeps its marker for an experienced operator.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "What shows that running the rig was a dedicated job at Fox?", options: ["Fox hired an extra camera operator", "Fox gave the job to the shader", "Fox had the director run the rig", "Fox let a utility run it at breaks"], correctIndex: 0, explanation: "Fox hired an extra camera operator for the rig's first live game (Feldman, 2021).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "On a show that shades the camera from the truck, who handles camera settings?", options: ["The operator, not the truck", "The gimbal, by itself", "The truck, not the operator", "The RF vendor's tech"], correctIndex: 2, explanation: "\"The operator doesn't have to worry about camera settings as it's all done back in the trucks\" (Kerschbaumer et al., 2021).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Which settings can Cyanview reach on Sony Alpha bodies?", options: ["Pan, tilt, roll and gimbal speed", "Frequency, channel and link power", "Tally, intercom and return video", "Iris, ISO, shutter and white balance"], correctIndex: 3, explanation: "Cyanview's Sony Alpha list includes iris, ISO, shutter and white balance, among others (Cyanview, n.d.-a).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "With no remote control on the show, who owns exposure?", options: ["The director, from the booth", "The RF tech, at the receiver", "The operator, matching by eye", "Nobody; exposure is automatic"], correctIndex: 2, explanation: "Those settings are yours, and you match the other cameras by eye on your monitor.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "What size monitor did Fox's original rig carry?", options: ["5.5-inch", "6-inch", "13-inch", "3-inch"], correctIndex: 1, explanation: "A 6-inch field monitor (Mrozek, 2021). 5.5-inch is the Portkeys LH5P II.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "In which unit does lesson 16 measure monitor brightness?", options: ["Nits", "Lux", "Watts", "Hertz"], correctIndex: 0, explanation: "Monitor brightness is measured in nits.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "When does monitor brightness matter most?", options: ["On day games", "On night games", "Indoors only", "In the rain only"], correctIndex: 0, explanation: "In daylight a dim screen is hard to read.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "How bright is the Portkeys LH5P II?", options: ["1000 nits", "2000 nits", "3000 nits", "500 nits"], correctIndex: 1, explanation: "2000 nits (Portkeys, n.d.). 1000 is the SmallHD Indie 5 and 3000 the Ultra 5.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "How bright is the SmallHD Ultra 5?", options: ["2000 nits", "1000 nits", "3000 nits", "6000 nits"], correctIndex: 2, explanation: "3000 nits (SmallHD, n.d.-b).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "How bright is the SmallHD Indie 5?", options: ["2000 nits", "3000 nits", "500 nits", "1000 nits"], correctIndex: 3, explanation: "1000 nits (SmallHD, n.d.-a).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Which inputs do both SmallHD monitors in lesson 16 list?", options: ["12G-SDI and fiber", "HDMI 1.4 only, no SDI", "3G-SDI and HDMI 2.0", "USB-C and Wi-Fi only"], correctIndex: 2, explanation: "Both the Indie 5 and the Ultra 5 list 3G-SDI and HDMI 2.0.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Who decides when the specialty shot is used?", options: ["The director", "The operator", "The RF tech", "The shader"], correctIndex: 0, explanation: "The director decides when the shot is used; the operator has it sharp and ready.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "What is the operator's job when the shot is called?", options: ["Pick a new frequency", "Switch it on the switcher", "Shade it to match", "Have it sharp and ready"], correctIndex: 3, explanation: "The operator's job is to have the shot sharp and ready when called.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Do picture, intercom, tally and remote control share one path?", options: ["Yes; all ride on the video link", "No; each travels its own path", "Yes; all ride on the intercom", "Only tally rides with video"], correctIndex: 1, explanation: "Each travels its own path; sections 5 and 6 follow each one.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Using lesson 10's tools, what is the operator's task play after play?", options: ["Finding power", "Holding focus", "Reading tally", "Pairing links"], correctIndex: 1, explanation: "With under 2 feet in focus and autofocus that can jump to the crowd, holding focus is the task all game.", sourceLessonSlug: "running-a-sideline" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: Wireless video
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "three-kinds-of-wireless-link",
      title: "17 · Three kinds of wireless link",
      section: "5 · Wireless video",
      recallContent: [
        {
          prompt: "Under the NFL's 2026 rules, who may be inside the solid six-foot white border while play is live?",
          answer: "Only the game officials (NFL, 2026, Rule 13, Section 1, Article 4).",
        },
        {
          prompt: "When does the NCAA rule book let a TV handheld briefly stand between the limit line and the sideline?",
          answer: "After the ball is dead and the game clock has been stopped, under the TV partner's supervision, and never on the field or in the end zone.",
        },
      ],
      body: `**The link's job.** The wireless link carries the live picture from a moving camera to a receiver that stays put. On Fox's first rig, that was a 1080p wireless transmitter, with the transmission supplied by CP Communications (Costa, 2020). Links are not all alike. They fall into three families, and the families differ in delay, in how they cope with a crowded stadium, and in who is allowed to run them.

**The three families, with each maker's own figures.**

| Family | Example | Delay the maker gives | Range the maker gives | Bands |
|---|---|---|---|---|
| Compressed links | Hollyland Cosmo C1 | "0.04s" | 1,000 ft | 5.1 to 5.8 GHz |
| | Hollyland Cosmo C2 | "≥ 33ms," measured in a lab | 3,000 ft | 5.15 to 5.85 GHz |
| | Hollyland Mars 4K | "0.06s" at 1080p60 | 450 ft | 5.1 to 5.8 GHz |
| | Accsoon CineView Master 4K | "below 25ms at 1080p60" | up to 8,202 ft, FCC-tested, unobstructed | 2.4, 5 and 6 GHz |
| | DJI SDR Transmission | 35 ms for the link; 80 ms including camera and screen | 3 km (FCC) | 2.4 and 5 GHz |
| "Zero-delay" film links | Teradek Bolt 6 LT 750 | "Zero-Delay" | 750 ft | 5 and 6 GHz |
| Broadcast RF camera transmitters | Vislink HCAM | "Single frame (4K UHD/1080p)" | not given as a single figure | 1.3 to 7.75 GHz |

Sources for the rows: Hollyland (n.d.-a, n.d.-c, n.d.-e), Accsoon (n.d.-b), DJI (n.d.-f), Teradek (n.d.-c) and VidOvation (n.d.).

**What sets the broadcast family apart.** The HCAM compresses its picture with HEVC (also called H.265) and uses DVB-T and LMS-T modulation, broadcast radio standards, across a wide span of frequencies (VidOvation, n.d.). Its reach depends on where the RF plan puts the receive antennas, which lesson 21 covers, so no single range in feet describes it. On the network shows in lesson 21, this class of system came from RF vendors.

**A correction to carry: "zero latency."** An earlier draft said top-tier broadcast wireless "cannot have latency," and that "only Teradek or Vaxis zero-delay systems are accepted." Neither holds. The HCAM, a broadcast transmitter, compresses with HEVC and specifies a single frame of delay (VidOvation, n.d.). Fox's original rig ran on CP Communications' transmission (Costa, 2020), not on a consumer "zero-delay" link. What a show accepts is decided by its engineers and its RF vendor.

**Another: "zero-latency SDI."** The same draft said the Hollyland Cosmo C1 gives "zero-latency SDI." Hollyland gives the Cosmo C1 a delay of "0.04s" and H.265 coding (Hollyland, n.d.-a). An SDI connector on the receiver does not undo the time spent compressing the picture.

**And a third: "4K" on the box.** The draft said a "4K" Bolt LT link carries 4K60 over SDI. Teradek's page for the Bolt 6 LT gives up to 1080p60 over 3G-SDI and 4K30 over HDMI (Teradek, n.d.-c). Read what each connector carries, not the number on the box.

**How to use this table.** Each family has a home. A compressed link is cheap and light, and it suits small shows and monitoring. A zero-delay film link suits a director's monitor on a film set, where the picture is for watching, not for air. A broadcast transmitter suits a packed stadium on a network show, run by the vendor's RF technician. Lessons 18 to 20 look at delay, range and permission, the three things that decide which family a show will accept.

:::reveal What are the three families of wireless video link? ||| Compressed links (such as Hollyland, Accsoon and DJI), "zero-delay" film links (such as the Teradek Bolt 6 LT) and broadcast RF camera transmitters (such as the Vislink HCAM).

:::reveal What does the Bolt 6 LT carry over 3G-SDI, per Teradek? ||| Up to 1080p60. Its 4K is 4K30, over HDMI (Teradek, n.d.-c).

## Sources
- ${HOLLYLAND_C1} Locator: specifications, latency, range, frequency band and video coding.
- ${HOLLYLAND_C2} Locator: specifications, latency (with its lab note), range and band.
- ${HOLLYLAND_MARS} Locator: specifications, latency at 1080p60, range and band.
- ${ACCSOON_MASTER} Locator: specifications, latency, range note and bands.
- ${DJI_SDR_SPECS} Locator: "Latency," "Transmission range" and "Operating frequency" entries.
- ${TERADEK_LT} Locator: product overview (zero-delay, 750 ft, bands) and the inputs and outputs list.
- ${VIDOVATION} Locator: specifications, compression, latency, frequency range and modulation.
- ${COSTA_2020} Locator: the paragraphs on the 1080p transmitter and CP's transmission.`,
    },
    {
      slug: "delay-in-frames",
      title: "18 · Delay, counted in frames",
      section: "5 · Wireless video",
      recallContent: [
        {
          prompt: "Which delay does Vislink's HCAM, a broadcast RF transmitter, specify?",
          answer: "\"Single frame (4K UHD/1080p),\" with HEVC compression (VidOvation, n.d.).",
        },
        {
          prompt: "Why is \"zero-latency SDI\" from a Cosmo C1 a myth?",
          answer: "Hollyland gives the Cosmo C1 a 0.04 s delay with H.265 coding; an SDI connector does not undo the time spent compressing.",
        },
      ],
      body: `**Why count in frames.** A live show cuts between cameras. If one camera's picture arrives late, the cut shows it: a ball that has already left the hand on one camera is still in the hand on the next. Engineers think about delay in frames because frames are what the switcher cuts.

**The arithmetic.** This lesson works at 59.94 frames per second, one of the frame rates the FX3's HDMI output offers (Sony, n.d.-c); lesson 24 says to ask the engineer which rate your show uses. One frame lasts 1,000 ÷ 59.94, which is about 16.7 milliseconds (ms). Divide any delay in milliseconds by 16.7 to get frames.

| Link | The maker's figure | About how many frames at 59.94 |
|---|---|---|
| Accsoon CineView Master 4K | "below 25ms at 1080p60" | under 1.5 |
| Hollyland Cosmo C2 | "≥ 33ms" | 2 or more |
| Hollyland Cosmo C1 | "0.04s" (40 ms) | 2.4 |
| Hollyland Mars 4K | "0.06s" at 1080p60 (60 ms) | 3.6 |
| DJI SDR Transmission, camera to screen | 80 ms | 4.8 |
| Vislink HCAM | "Single frame" | 1 |

Sources for the figures: Accsoon (n.d.-b), Hollyland (n.d.-c, n.d.-a, n.d.-e), DJI (n.d.-f) and VidOvation (n.d.). The frame counts are this lesson's arithmetic.

**Read the fine print on every figure.** Hollyland's Cosmo C2 figure was measured in a lab (Hollyland, n.d.-c). DJI gives two numbers for one system: 35 ms for the link itself, and 80 ms including the camera and the screen (DJI, n.d.-f). The gap between them is the time the camera and the screen take. That is the lesson inside the DJI figure: a link's delay is only part of the delay a viewer sees.

**What "zero-delay" means.** Teradek sells the Bolt 6 LT as "Zero-Delay" (Teradek, n.d.-c). That describes the radio. The camera still takes time to make its picture before the picture reaches the transmitter, as DJI's two figures show. So a zero-delay link does not make the whole chain zero.

**Delay added in the truck.** A camera with no genlock is re-timed by a frame synchronizer, which holds each frame and releases it in step with the house reference (lesson 7). Holding a frame costs time: each frame held is about 16.7 ms more. So the truck can add delay of its own on top of the link's.

**Measure the whole chain.** Engineers care about total delay, from the lens to the switcher, sometimes called "glass to glass." No single spec sheet gives it, because it adds up parts from different makers. The simple test is a slate: point the wireless camera and a hard camera at the same clap or flash, record the switcher output, and count the frames between the two. Do it during the facilities check, with the real link and the real frame sync, not in the shop.

**What the show does with a late camera.** Two things, and both belong to other people. The technical director can time cuts around a known delay. And the A1, the lead audio engineer, can delay the camera's embedded sound so lips stay in sync, or the show can skip the camera's audio entirely. Either way, they need the number from your slate test.

**A note on cellular links.** Cyanview, the camera-control company from lesson 10, lists 4G encoders such as Aviwest and LiveU as one way to send a mirrorless camera's video, chosen by budget and compromise (Cyanview, n.d.-b). It is an option for some shows. Measure it with the slate test like any other link before a director plans to cut it against hard cameras.

:::reveal About how long is one frame at 59.94 frames per second? ||| About 16.7 ms: 1,000 ÷ 59.94.

:::reveal Why does DJI give two delay figures for its SDR Transmission? ||| 35 ms is the link alone; 80 ms includes the camera and the screen. The difference shows that the link is only part of the total delay.

## Sources
- ${ACCSOON_MASTER} Locator: specifications, latency.
- ${HOLLYLAND_C2} Locator: specifications, latency and its lab note.
- ${HOLLYLAND_C1} Locator: specifications, latency.
- ${HOLLYLAND_MARS} Locator: specifications, latency at 1080p60.
- ${DJI_SDR_SPECS} Locator: "Latency" entry, both figures.
- ${VIDOVATION} Locator: specifications, latency.
- ${TERADEK_LT} Locator: product overview ("Zero-Delay").
- ${CYANVIEW_GIMBAL} Locator: the section on sending video, naming 4G encoders.
- ${SONY_HDMI} Locator: [4K Output Set.(HDMI Only)] options.`,
    },
    {
      slug: "range-and-crowded-bands",
      title: "19 · Range, line of sight and crowded bands",
      section: "5 · Wireless video",
      recallContent: [
        {
          prompt: "How many frames is a 40 ms delay at 59.94 frames per second?",
          answer: "About 2.4 frames: 40 ÷ 16.7.",
        },
        {
          prompt: "How do you measure a wireless camera's total delay against a hard camera?",
          answer: "A slate test: point both at the same clap or flash, record the switcher output, and count the frames between them.",
        },
      ],
      body: `**Every range figure is line of sight.** The ranges in lesson 17 are measured with a clear view between transmitter (TX) and receiver (RX). Accsoon says so in its own figure, which it marks as FCC-tested and unobstructed (Accsoon, n.d.-b). Teradek's guide to its own links says to keep TX and RX in line of sight and to "Minimize obstructions (especially humans and foliage)," and to keep antennas vertical (Teradek, 2024).

**Why a sideline breaks the rule.** Read Teradek's warning again: humans. A stadium full of fans is a wall of people. And the operator is a person too: turn your back to the receiver and your own body sits between the antennas. So the normal sideline route is not the test the range figure describes. Buying a link by its advertised range is buying a number from a different situation.

**The bands are crowded.** A white paper written for sports venues by the Sports Video Group's venue initiative lists what shares the 2.4 and 5 GHz bands at a stadium: wireless HDMI, Wi-Fi, point-of-sale terminals and ticket scanners (Price & Juniet, 2015). A large event commonly has "in excess of 200 individual wireless devices" (Price & Juniet, 2015, p. 3).

**A correction to carry.** An earlier draft said "5.1 to 5.9 GHz is uncrowded" and that "20 channels prevent dropouts." The venue white paper shows the 5 GHz band is shared by many devices (Price & Juniet, 2015). And a long list of channels is not a list of free channels. Lesson 20 shows that at a coordinated venue, which channel you use is the coordinator's decision, not the link's.

**More power is not the fix.** It is tempting to turn the transmitter up. The venue white paper warns that raising transmit power can make things worse: it can overload receivers and add reflections, called multipath (Price & Juniet, 2015, p. 3).

**What does help.** Teradek's guide gives the practical rules (Teradek, 2024):

- Keep TX and RX in line of sight, with as few people and plants between them as possible.
- Keep antennas vertical.
- Keep wireless gear at least 3 feet apart, and receivers at least 18 inches apart.
- Where you are free to choose, pick a fixed frequency with the least interference, or turn off busy channels so the link's automatic mode uses only good ones.

That last point carries a condition. At a venue with a frequency coordinator, you choose only within what the coordinator assigns (lesson 20).

**Where the receiver goes.** Because the link needs a clear view, put the receiver high, looking down on the area you will shoot, wherever the RF plan allows; that may not be next to the truck. A second receive point can cover a dead spot the first one cannot see. Both follow from the line-of-sight rule. The receiver also needs its own power and a cable run back to the truck (lesson 21).

**Rehearsal lies.** A link that is clean in an empty stadium can break up when the stands fill, because the fans' devices and the other crews' gear are now switched on. That is why the venue white paper calls for an all-hands test with every wireless user powered up together (lesson 20). Netflix's 2026 Home Run Derby kept a "backup RF system" on hand (Hernández, 2026). A big show plans for the link to fail.

:::reveal Why is a link's advertised range not the range you will get on a sideline? ||| The figure assumes clear line of sight; a crowd, and the operator's own body, block it. Teradek warns against "humans and foliage" in the path.

:::reveal Why is turning up transmit power a poor fix for breakup? ||| It can overload receivers and add multipath reflections (Price & Juniet, 2015, p. 3).

## Sources
- ${ACCSOON_MASTER} Locator: specifications, the range note (FCC-tested, unobstructed).
- ${TERADEK_2024} Locator: the sections on line of sight, antenna orientation, spacing between devices, and channel selection.
- ${PRICE_JUNIET_2015} Locator: p. 3 (device counts; transmit power and multipath) and the section on devices sharing the 2.4 and 5 GHz bands.
- ${HERNANDEZ_2026} Locator: the paragraph on the backup RF system.`,
    },
    {
      slug: "frequency-coordination-and-licenses",
      title: "20 · Who may transmit: coordination and licenses",
      section: "5 · Wireless video",
      recallContent: [
        {
          prompt: "How many wireless devices does the venue white paper say a large event commonly has?",
          answer: "\"In excess of 200 individual wireless devices\" (Price & Juniet, 2015, p. 3).",
        },
        {
          prompt: "How far apart does Teradek say to keep receivers?",
          answer: "At least 18 inches apart, and wireless gear in general at least 3 feet apart (Teradek, 2024).",
        },
      ],
      body: `${QR("an RF or frequency coordinator, to check the summary of the FCC rules and of venue coordination")}

**Two kinds of permission.** A wireless camera link runs either on spectrum someone is licensed to use, or on unlicensed spectrum that anyone may use within the rules. Each comes with its own catch.

**Unlicensed links.** Unlicensed devices work under the FCC's Part 15 rules. The venue white paper sums up the deal: an unlicensed device must "not cause harmful interference to and must accept interference from authorized users" (Price & Juniet, 2015, p. 14). So an unlicensed link has no right to a clean channel. If a licensed user is on it, you lose.

**The 6 GHz band has classes.** Some newer links also use 6 GHz. The FCC's rule splits unlicensed 6 GHz devices into classes: low-power indoor devices "are limited to indoor locations"; very-low-power devices are capped at 14 dBm of radiated power; and standard-power devices must check an automated frequency coordination system before they transmit (General Technical Requirements, 2026). Teradek says the Bolt 6's 6 GHz channels are enabled for the US (Teradek, 2025), but its pages read for this course do not say which class its US 6 GHz mode uses. An open-air stadium is not indoors, so check the FCC grant for your unit before relying on 6 GHz there.

**Licensed broadcast channels.** Broadcast wireless cameras commonly use 2 GHz, 5.8 GHz and 6.4 GHz (Price & Juniet, 2015). The licensed TV broadcast auxiliary channels go to TV stations, Class A and low-power stations, translators, and "a television broadcast network-entity" (Eligibility for License, 2026). A freelance camera operator is not on that list. So when a freelancer's rig rides a licensed channel, it does so under the network's or the RF vendor's authority, not the operator's own.

**Coordination at the venue.** Licensed or not, a stadium full of radios needs one person deciding who uses what. The venue white paper lays out the steps (Price & Juniet, 2015):

| Step | What to do |
|---|---|
| 1. Find the coordinator | Every venue or league should have a designated frequency coordinator, and each production names one RF contact. |
| 2. Submit early | Send the device type, frequency and user for every wireless device, "ideally two to four weeks in advance" (p. 10). |
| 3. Report backups | Backup units "should be reported just like main units" (p. 11). |
| 4. Check in | Equipment is checked against the frequency plan at the venue. |
| 5. All-hands test | All wireless users power up together and watch their full path for dropouts (p. 7). |
| 6. On interference, call the coordinator | "Users should not scan for new frequencies or resolve the problem by themselves" (p. 12). |

**The NFL's version.** NFL users request frequencies through the league's "Event Frequency Coordination System," an online portal. On game days, broadcast partners rank below football operations, the venue's needs and the teams. "Uncoordinated devices are prohibited," and a violator can have a "working credential revoked." At the Super Bowl, Pro Bowl, Draft and Combine, "the user must check in so their equipment can be inspected" (NFL Football Operations, n.d.).

**It is not only video.** Wireless intercoms share coordinated spectrum too: the UHF TV band (470 to 698 MHz), 900 MHz, 2.4 GHz and 5 GHz (Price & Juniet, 2015). Your beltpack goes on the device list with your transmitter.

**What this means for you.** Put every radio you carry on the coordinator's list, early, backups included. Use only the channel you are assigned. When the link breaks up during the show, report it; do not go hunting for a new channel. Section 7 builds that into the troubleshooting routine.

:::reveal What must an unlicensed device accept, per the venue white paper's summary of Part 15? ||| Interference from authorized users; it also must not cause harmful interference to them (Price & Juniet, 2015, p. 14).

:::reveal What can happen to an NFL user who runs an uncoordinated device? ||| Uncoordinated devices are prohibited, and the user can have a working credential revoked (NFL Football Operations, n.d.).

## Sources
- ${PRICE_JUNIET_2015} Locator: p. 7 (all-hands test), p. 10 (two to four weeks), p. 11 (backups), p. 12 (do not re-scan), p. 14 (Part 15 summary), and the sections on licensed bands and wireless intercoms.
- ${CFR_15_407} Locator: the paragraphs on 6 GHz low-power indoor, very-low-power and standard-power devices.
- ${TERADEK_2025} Locator: the US entry.
- ${CFR_74_600} Locator: the list of eligible licensees.
- ${NFL_FREQ} Locator: the paragraphs on the coordination system, priority on game days, prohibited devices, credential revocation and check-in at league events.`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Wireless video",
      section: "5 · Wireless video",
      body: "A graded check on the three families of wireless link, delay counted in frames, range and crowded bands, and frequency coordination and licenses. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What is the wireless link's job on the rig?", options: ["Carry the live picture to a fixed receiver", "Hold the camera level while the operator runs", "Match the camera's colors to the hard cameras", "Record a backup copy of the game to a card"], correctIndex: 0, explanation: "Lesson 17: the link carries the live picture from a moving camera to a receiver that stays put.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Which three things do the link families differ in, per lesson 17?", options: ["Color, weight and lens mount", "Delay, crowds and permission", "Price, brand and screen size", "Codec, card and battery type"], correctIndex: 1, explanation: "The families differ in delay, in how they cope with a crowded stadium, and in who is allowed to run them.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "What delay does Hollyland give for the Cosmo C1?", options: ["\"below 25ms\"", "\"Zero-Delay\"", "\"0.04s\"", "\"Single frame\""], correctIndex: 2, explanation: "Hollyland (n.d.-a) gives the Cosmo C1 \"0.04s.\" \"Zero-Delay\" is Teradek's phrase and \"Single frame\" the HCAM's.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "What range does Hollyland give for the Cosmo C2?", options: ["450 ft", "750 ft", "1,000 ft", "3,000 ft"], correctIndex: 3, explanation: "Hollyland (n.d.-c) gives the Cosmo C2 3,000 ft, line of sight.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Which link does lesson 17 list with a 750 ft range and \"Zero-Delay\"?", options: ["Teradek Bolt 6 LT 750", "Hollyland Mars 4K", "Accsoon CineView Master", "DJI SDR Transmission"], correctIndex: 0, explanation: "Teradek (n.d.-c) lists the Bolt 6 LT 750 as \"Zero-Delay\" at 750 ft.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "What delay does VidOvation list for the Vislink HCAM?", options: ["\"Zero-Delay\" at 4K", "\"Single frame\"", "Two full seconds", "\"0.06s\" at 1080p60"], correctIndex: 1, explanation: "VidOvation (n.d.) lists \"Single frame (4K UHD/1080p)\" for the HCAM.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Which compression does the HCAM broadcast transmitter use?", options: ["Analog FM, not digital", "None; it is uncompressed", "HEVC, also called H.265", "JPEG still frames only"], correctIndex: 2, explanation: "VidOvation (n.d.): the HCAM compresses with HEVC and uses DVB-T and LMS-T modulation.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Which modulation does VidOvation list for the HCAM?", options: ["AM and FM radio", "4G and 5G cellular", "Wi-Fi 6 and Bluetooth", "DVB-T and LMS-T"], correctIndex: 3, explanation: "VidOvation (n.d.) lists DVB-T and LMS-T modulation, broadcast radio standards.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Why does lesson 17 give no single range in feet for the HCAM?", options: ["Its reach depends on the receive plan", "It only works inside the broadcast truck", "It is illegal to publish broadcast ranges", "VidOvation lists it as unlimited range"], correctIndex: 0, explanation: "Its reach depends on where the RF plan puts the receive antennas, so no single range figure describes it.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "What is wrong with \"only zero-delay systems are accepted\" for broadcast?", options: ["Broadcast links all run over fiber", "Broadcast RF compresses at one frame", "Zero-delay links are illegal on air", "Networks never use wireless cameras"], correctIndex: 1, explanation: "The HCAM, a broadcast transmitter, compresses with HEVC at a single frame of delay, and Fox's rig ran on CP's transmission, not a consumer zero-delay link.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Whose transmission did Fox's original rig run on?", options: ["A consumer Hollyland kit", "A Teradek zero-delay set", "CP Communications'", "The stadium's own Wi-Fi"], correctIndex: 2, explanation: "Fox's rig used a 1080p transmitter with transmission from CP Communications (Costa, 2020).", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Who decides what wireless link a show accepts, per lesson 17?", options: ["The link's maker", "The camera operator", "The league office", "The show's engineers"], correctIndex: 3, explanation: "What a show accepts is decided by its engineers and its RF vendor.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Why does an SDI output not make the Cosmo C1 zero-latency?", options: ["The time spent compressing remains", "SDI only carries audio, not video", "The C1 has no SDI output at all", "SDI cables add two seconds of delay"], correctIndex: 0, explanation: "Hollyland gives 0.04 s with H.265 coding; an SDI connector on the receiver does not undo the time spent compressing.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "What does Teradek's page say the Bolt 6 LT carries over 3G-SDI?", options: ["720p only", "Up to 1080p60", "4K at 60p", "8K at 30p"], correctIndex: 1, explanation: "Teradek (n.d.-c): up to 1080p60 over 3G-SDI, and 4K30 over HDMI.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Which job suits a zero-delay film link, per lesson 17?", options: ["A cellular studio hit from a bar", "A replay server's backup record", "A director's monitor on a film set", "A licensed network stadium feed"], correctIndex: 2, explanation: "A zero-delay film link suits a director's monitor on a film set, where the picture is for watching, not for air.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Which bands does Accsoon list for the CineView Master 4K?", options: ["900 MHz only", "5 GHz only", "2 GHz and 6.4 GHz", "2.4, 5 and 6 GHz"], correctIndex: 3, explanation: "Accsoon (n.d.-b) lists 2.4, 5 and 6 GHz.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Why do engineers count delay in frames?", options: ["Frames are what the switcher cuts", "Frames are easier to buy in bulk", "The FCC sets delay limits in frames", "Frames are measured in kilohertz"], correctIndex: 0, explanation: "Lesson 18: a show cuts between cameras, and frames are what the switcher cuts, so a late camera shows on the cut.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "About how long is one frame at 59.94 frames per second?", options: ["About 1.7 ms", "About 16.7 ms", "About 33.4 ms", "About 59.9 ms"], correctIndex: 1, explanation: "1,000 ÷ 59.94 is about 16.7 ms.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "About how many frames is the Cosmo C1's 40 ms at 59.94?", options: ["About 0.4", "About 1.0", "About 2.4", "About 6.0"], correctIndex: 2, explanation: "40 ÷ 16.7 is about 2.4 frames.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "About how many frames is DJI's 80 ms camera-to-screen figure?", options: ["About 1.2", "About 2.4", "About 3.6", "About 4.8"], correctIndex: 3, explanation: "80 ÷ 16.7 is about 4.8 frames.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "About how many frames is the Mars 4K's 60 ms at 59.94?", options: ["About 3.6", "About 1.6", "About 6.0", "About 0.6"], correctIndex: 0, explanation: "60 ÷ 16.7 is about 3.6 frames.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "What does DJI's gap between 35 ms and 80 ms show?", options: ["The link gets slower in the rain", "The camera and screen add delay", "The FCC adds a test delay", "The second figure is a typo"], correctIndex: 1, explanation: "35 ms is the link alone; 80 ms includes camera and screen (DJI, n.d.-f). The difference is the camera and screen.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Where was Hollyland's Cosmo C2 delay figure measured?", options: ["Over a cellular link", "On a live NFL sideline", "In a lab", "At a film festival"], correctIndex: 2, explanation: "Hollyland (n.d.-c) notes its \"≥ 33ms\" figure was measured in a lab.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "What does \"Zero-Delay\" on a Teradek link describe?", options: ["The frame sync in the truck", "The delay of the switcher", "The whole chain, glass to glass", "The radio link, not the camera"], correctIndex: 3, explanation: "It describes the radio. The camera still takes time to make its picture, as DJI's two figures show.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Why can the truck add delay of its own?", options: ["The frame sync holds each frame", "The switcher slows every picture", "Fiber is slower than coax cable", "Replay servers pause live feeds"], correctIndex: 0, explanation: "A frame synchronizer holds each frame and releases it in step with house reference; each frame held is about 16.7 ms more.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "What is \"glass to glass\" delay?", options: ["The delay inside the lens alone", "The total from lens to switcher", "The delay between two monitors", "The time to clean a lens filter"], correctIndex: 1, explanation: "Engineers care about total delay from the lens to the switcher, sometimes called glass to glass.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Why does no single spec sheet give glass-to-glass delay?", options: ["It only exists in 4K productions", "Makers are not allowed to publish it", "It sums parts from different makers", "It changes with the camera's color"], correctIndex: 2, explanation: "Total delay adds up parts from different makers, so no one spec sheet can state it.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "How does lesson 18's slate test measure delay?", options: ["Time the link with a stopwatch", "Read the receiver's status light", "Ask the maker for its lab figure", "Count frames between two cameras"], correctIndex: 3, explanation: "Point the wireless camera and a hard camera at the same clap or flash, record the switcher output, and count the frames between them.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "When should the slate test be done?", options: ["During the facilities check", "After the game has ended", "Only if the director asks", "In the shop, before packing"], correctIndex: 0, explanation: "Do it during the facilities check, with the real link and real frame sync, not in the shop.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Who can delay the camera's embedded sound to keep lips in sync?", options: ["The coordinator", "The A1", "The utility", "The shader"], correctIndex: 1, explanation: "The A1, the lead audio engineer, can delay the camera's embedded sound, or the show can skip camera audio.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Who can time cuts around a known camera delay?", options: ["The RF coordinator", "The camera operator", "The technical director", "The league's officials"], correctIndex: 2, explanation: "The technical director can time cuts around a known delay; they need the number from your slate test.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Which video senders does Cyanview list as one way to send the picture?", options: ["Satellite trucks parked at the stadium", "Analog microwave dishes on the roof", "Fiber reels run by the camera operator", "4G encoders such as Aviwest and LiveU"], correctIndex: 3, explanation: "Cyanview (n.d.-b) lists 4G encoders such as Aviwest and LiveU, chosen by budget and compromise.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Accsoon's \"below 25ms at 1080p60\" is about how many frames at 59.94?", options: ["Under 1.5", "About 2.4", "About 3.6", "About 4.8"], correctIndex: 0, explanation: "25 ÷ 16.7 is about 1.5, so below 25 ms is under 1.5 frames.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "What conditions are the range figures in lesson 17 measured under?", options: ["Through the operator's body", "Line of sight between TX and RX", "A full stadium during a game", "Indoors behind concrete walls"], correctIndex: 1, explanation: "Lesson 19: every range figure is measured with a clear view between transmitter and receiver.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "How does Accsoon qualify its 8,202 ft range figure?", options: ["With a booster amp", "Rated for crowds", "FCC-tested, unobstructed", "Through two walls"], correctIndex: 2, explanation: "Accsoon (n.d.-b): up to 8,202 ft, FCC-tested and unobstructed.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "Which obstructions does Teradek's guide single out?", options: ["\"cars and trucks\"", "\"glass and steel\"", "\"rain and snow\"", "\"humans and foliage\""], correctIndex: 3, explanation: "\"Minimize obstructions (especially humans and foliage)\" (Teradek, 2024).", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "How should antennas be oriented, per Teradek's guide?", options: ["Vertical", "Flat", "Pointed down", "Coiled"], correctIndex: 0, explanation: "Teradek (2024) says to keep antennas vertical.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "Why is the operator's own body a problem for the link?", options: ["Bodies raise the link's frame rate", "It can block the line of sight", "Bodies change the camera's color", "It lowers the battery's voltage"], correctIndex: 1, explanation: "Turn your back to the receiver and your body sits between the antennas, blocking line of sight.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "Which devices share the 2.4 and 5 GHz bands at a stadium, per the venue white paper?", options: ["Only the broadcast cameras", "Only the stadium's own Wi-Fi", "HDMI links, Wi-Fi, POS, scanners", "Only the referees' headsets"], correctIndex: 2, explanation: "Price and Juniet (2015) list wireless HDMI, Wi-Fi, point-of-sale terminals and ticket scanners.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "What is wrong with \"5.1 to 5.9 GHz is uncrowded\"?", options: ["5 GHz is reserved for police", "5 GHz does not reach 100 ft", "5 GHz was retired in 2020", "Many venue devices share 5 GHz"], correctIndex: 3, explanation: "The venue white paper shows the 5 GHz band is shared by many devices at a stadium.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "Why does \"20 channels prevent dropouts\" fail?", options: ["A channel list is not free channels", "Twenty channels is illegal to use", "Dropouts only come from batteries", "Channels are always fully free"], correctIndex: 0, explanation: "A long list of channels is not a list of free channels, and at a coordinated venue the coordinator assigns the channel.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "What does the venue white paper say raising transmit power can do?", options: ["Fix every dropout at once", "Overload receivers and add multipath", "Lower the delay to zero frames", "Make the link legal on any band"], correctIndex: 1, explanation: "Price and Juniet (2015, p. 3): it can overload receivers and add reflections, called multipath.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "How far apart does Teradek say to keep wireless gear?", options: ["At least 3 inches", "At least 300 feet", "At least 3 feet", "At least 30 feet"], correctIndex: 2, explanation: "Teradek (2024): wireless gear at least 3 feet apart; receivers at least 18 inches apart.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "How far apart does Teradek say to keep receivers?", options: ["At least 6 inches", "At least 18 feet", "At least 60 feet", "At least 18 inches"], correctIndex: 3, explanation: "Teradek (2024): RX units at least 18 inches apart.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "What does Teradek suggest when you are free to choose a channel?", options: ["Pick the least-interfered fixed channel", "Change channels every few minutes", "Use every channel at the same time", "Use the channel with the most traffic"], correctIndex: 0, explanation: "Pick a fixed frequency with the least interference, or turn off busy channels so auto mode uses only good ones (Teradek, 2024).", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "At a venue with a coordinator, what limits your choice of channel?", options: ["The link's own automatic mode", "What the coordinator assigns", "Whatever the fans' phones use", "The camera's recording format"], correctIndex: 1, explanation: "You choose only within what the coordinator assigns (lesson 20).", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "Where does lesson 19 say to put the receiver, and why?", options: ["Inside the truck, to stay dry", "In the backpack, close to the TX", "Up high, for a clear line of sight", "Under the bench, out of the way"], correctIndex: 2, explanation: "Because the link needs a clear view, put the receiver high, looking down on the area you will shoot.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "Why add a second receive point?", options: ["To double the camera's frame rate", "To record a second copy of the audio", "To meet a league rule on two receivers", "To cover a dead spot the first can't see"], correctIndex: 3, explanation: "A second receive point can cover a dead spot the first one cannot see, which follows from the line-of-sight rule.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "Why can a link that was clean in rehearsal break up during the game?", options: ["The fans' and crews' devices are on", "The camera cools down at night", "The league turns off its own radios", "The lens fogs up in the cold air"], correctIndex: 0, explanation: "When the stands fill, the fans' devices and other crews' gear are switched on.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "What did Netflix keep on hand at its 2026 Home Run Derby?", options: ["A spare stadium", "A backup RF system", "A second director", "A satellite uplink"], correctIndex: 1, explanation: "Hernández (2026) reports a \"backup RF system\" on hand.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "Under Part 15, as the venue white paper sums it up, what must an unlicensed device accept?", options: ["Inspection by the league office", "A license fee from the FCC", "Interference from authorized users", "A fixed channel from the maker"], correctIndex: 2, explanation: "It must \"not cause harmful interference to and must accept interference from authorized users\" (Price & Juniet, 2015, p. 14).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "What right to a clean channel does an unlicensed link have?", options: ["A right set by the camera maker", "Full priority over licensed users", "Priority only during live play", "No right to a clean channel"], correctIndex: 3, explanation: "An unlicensed link must accept interference, so if a licensed user is on the channel, the unlicensed link loses.", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "Where are low-power indoor 6 GHz devices allowed, under 47 C.F.R. § 15.407?", options: ["Indoor locations only", "Only in stadiums", "Only on aircraft", "Anywhere outdoors"], correctIndex: 0, explanation: "Low-power indoor devices \"are limited to indoor locations\" (General Technical Requirements, 2026).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "What must a standard-power 6 GHz device do before it transmits?", options: ["Register with the camera's maker", "Check an automated coordination system", "Ask the stadium's ticket office first", "Wait for the game clock to stop"], correctIndex: 1, explanation: "Standard-power devices must check an automated frequency coordination system (General Technical Requirements, 2026).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "What does Teradek's US page say about the Bolt 6 and 6 GHz?", options: ["It needs a broadcast license in the US", "6 GHz is blocked in the US", "Its US 6 GHz channels are enabled", "It is certified for outdoor LPI use"], correctIndex: 2, explanation: "Teradek (2025) says the Bolt 6's 6 GHz channels are enabled for the US; its pages read for this course do not say which device class.", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "Why check the FCC grant before using 6 GHz in an open-air stadium?", options: ["6 GHz is only legal at night", "Stadiums ban all 6 GHz radios", "The grant sets the frame rate", "One class is limited to indoors"], correctIndex: 3, explanation: "Low-power indoor devices are limited to indoor locations, and Teradek's pages do not say which class its US mode uses.", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "Which bands do broadcast wireless cameras commonly use, per the venue white paper?", options: ["2 GHz, 5.8 GHz and 6.4 GHz", "AM, FM and shortwave", "Only 900 MHz", "60 GHz and above"], correctIndex: 0, explanation: "Price and Juniet (2015) give 2 GHz, 5.8 GHz and 6.4 GHz.", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "Who is eligible for TV broadcast auxiliary licenses under 47 C.F.R. § 74.600?", options: ["Any camera operator who applies", "TV stations and network entities", "Only sports leagues and teams", "Camera makers and retailers"], correctIndex: 1, explanation: "The list covers TV stations, Class A and low-power stations, translators, and \"a television broadcast network-entity\" (Eligibility for License, 2026).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "Under whose authority does a freelancer's rig ride a licensed channel?", options: ["The freelancer's own license", "The camera maker's license", "The network's or RF vendor's", "The stadium's ticket office"], correctIndex: 2, explanation: "A freelance operator is not on the eligibility list, so the rig works under the network's or RF vendor's authority.", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "How early does the venue white paper say to submit your device list?", options: ["Six months before the season", "Only after the game starts", "The morning of the game", "Two to four weeks ahead"], correctIndex: 3, explanation: "\"Ideally two to four weeks in advance\" (Price & Juniet, 2015, p. 10).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "How should backup units be reported to the coordinator?", options: ["Just like main units", "Never, to save channels", "After the game, in writing", "Only if the main unit fails"], correctIndex: 0, explanation: "Backup units \"should be reported just like main units\" (Price & Juniet, 2015, p. 11).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "What happens in the all-hands test?", options: ["The fans are asked to turn off phones", "All wireless users power up together", "The league inspects each camera body", "Each crew tests alone, one at a time"], correctIndex: 1, explanation: "All wireless users power up together and watch their full path for dropouts (Price & Juniet, 2015, p. 7).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "What should you do about interference during a coordinated show?", options: ["Scan for a new channel yourself", "Raise transmit power to maximum", "Call the frequency coordinator", "Switch the link to 6 GHz quietly"], correctIndex: 2, explanation: "\"Users should not scan for new frequencies or resolve the problem by themselves\" (Price & Juniet, 2015, p. 12).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "How do NFL users request frequencies?", options: ["By posting on the league's social media", "By emailing the FCC on game day", "By calling the team's front office", "Through the Event Frequency Coordination System"], correctIndex: 3, explanation: "NFL users request frequencies through the online \"Event Frequency Coordination System\" (NFL Football Operations, n.d.).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "Where do broadcast partners rank on NFL game days?", options: ["Below football ops, venue and teams", "Equal with football operations", "Above the venue, below the teams", "First, above the teams"], correctIndex: 0, explanation: "Broadcast partners rank below football operations, the venue's needs and the teams (NFL Football Operations, n.d.).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "At which NFL events must a user check in so equipment can be inspected?", options: ["Every preseason game", "Super Bowl, Pro Bowl, Draft, Combine", "Only Monday night games", "Only games played outdoors"], correctIndex: 1, explanation: "At the Super Bowl, Pro Bowl, Draft and Combine \"the user must check in so their equipment can be inspected\" (NFL Football Operations, n.d.).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "Which bands do wireless intercoms use, per the venue white paper?", options: ["Only the cellular bands for phones", "Only infrared, not radio at all", "UHF TV band, 900 MHz, 2.4 and 5 GHz", "Only the 6.4 GHz broadcast band"], correctIndex: 2, explanation: "Price and Juniet (2015): the UHF TV band (470 to 698 MHz), 900 MHz, 2.4 GHz and 5 GHz.", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "Which of your radios belong on the coordinator's list?", options: ["Only radios over 1 watt", "Only the receiver on the stand", "Only the video transmitter", "Every radio, backups included"], correctIndex: 3, explanation: "Put every radio you carry on the list, early, backups included; your beltpack goes on it too.", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "What range does Hollyland give for the Mars 4K?", options: ["450 ft", "750 ft", "3 km", "8,202 ft"], correctIndex: 0, explanation: "Hollyland (n.d.-e) gives the Mars 4K 450 ft, line of sight.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "What range does DJI give for its SDR Transmission?", options: ["750 ft", "3 km (FCC)", "450 ft", "1,000 ft"], correctIndex: 1, explanation: "DJI (n.d.-f) gives 3 km under FCC rules.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Which frequency span does VidOvation list for the HCAM?", options: ["2.4 GHz only", "5.1 to 5.8 GHz", "1.3 to 7.75 GHz", "470 to 698 MHz"], correctIndex: 2, explanation: "VidOvation (n.d.) lists 1.3 to 7.75 GHz for the HCAM.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Which bands does Teradek list for the Bolt 6 LT 750?", options: ["2 GHz only", "900 MHz only", "2.4 GHz only", "5 and 6 GHz"], correctIndex: 3, explanation: "Teradek (n.d.-c) lists 5 and 6 GHz.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Over which connector does the Bolt 6 LT carry 4K30?", options: ["HDMI", "Fiber", "3G-SDI", "12G-SDI"], correctIndex: 0, explanation: "Teradek (n.d.-c): 4K30 over HDMI, and up to 1080p60 over 3G-SDI.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Which video coding does Hollyland give for the Cosmo C1?", options: ["None", "H.265", "ProRes", "MPEG-1"], correctIndex: 1, explanation: "Hollyland (n.d.-a) gives the Cosmo C1 H.265 coding and a 0.04 s delay.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Which link family does lesson 17 match to small shows and monitoring?", options: ["Fiber camera chains", "Broadcast RF transmitters", "Compressed links", "Bonded satellite links"], correctIndex: 2, explanation: "A compressed link is cheap and light, and it suits small shows and monitoring.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "Which link family does lesson 17 match to a packed stadium on a network show?", options: ["Cellular studio links", "Compressed links", "Zero-delay film links", "Broadcast RF transmitters"], correctIndex: 3, explanation: "A broadcast transmitter suits a packed stadium on a network show, run by the vendor's RF technician.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "What does lesson 17 say to read instead of the number on a link's box?", options: ["What each connector carries", "The color of the case", "The weight of the kit", "The maker's slogan"], correctIndex: 0, explanation: "\"Read what each connector carries, not the number on the box\": the \"4K\" Bolt LT carries 1080p60 over 3G-SDI.", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "How many frames is the HCAM's \"Single frame\" delay?", options: ["Zero", "One", "Two", "Five"], correctIndex: 1, explanation: "A single frame, about 16.7 ms at 59.94.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Why does a late camera show up on a cut?", options: ["The audio turns to mono on cuts", "The frame size gets smaller", "The action jumps back in time", "The colors change on every cut"], correctIndex: 2, explanation: "A ball that has already left the hand on one camera is still in the hand on the late one, so the action jumps back.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Which two people need the frame count from your slate test?", options: ["The shader and the producer", "The league and the referee", "The coordinator and the utility", "The TD and the A1"], correctIndex: 3, explanation: "The technical director times cuts around the delay, and the A1 delays the sound to match; both need the number.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Why run the slate test with the real link and frame sync, not in the shop?", options: ["Total delay includes every part", "The shop has no electrical power", "The league requires a stadium test", "Slates only work on grass fields"], correctIndex: 0, explanation: "Glass-to-glass delay sums every part in the chain, including the real link and the truck's frame sync.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Which frame rate does lesson 18 use for its arithmetic?", options: ["29.97 frames per second", "59.94 frames per second", "120 frames per second", "24 frames per second"], correctIndex: 1, explanation: "Lesson 18 works at 59.94, one of the rates the FX3's HDMI output offers (Sony, n.d.-c), and says to ask which rate your show uses.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Why is buying a link by its advertised range a mistake?", options: ["Range is set by the camera body", "Advertised ranges are for audio", "The figure comes from a clear view", "Range figures are always too low"], correctIndex: 2, explanation: "The range was measured with a clear line of sight, which a crowded sideline does not give you.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "What is the all-hands test meant to catch?", options: ["Lenses that are out of focus", "Cameras with the wrong codec", "Batteries that are too heavy", "Dropouts with every radio on"], correctIndex: 3, explanation: "With every wireless user powered up together, the test shows dropouts that an empty stadium hides.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "What does a full stadium become, from the link's point of view?", options: ["A wall of people", "An empty open field", "A source of free power", "A mirror for the signal"], correctIndex: 0, explanation: "A stadium full of fans is a wall of people, and Teradek warns against humans in the path.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "What are the two kinds of permission a wireless camera link can run under?", options: ["Day and night", "Licensed and unlicensed", "Indoor and outdoor", "Home and away"], correctIndex: 1, explanation: "Lesson 20: a link runs on licensed spectrum or on unlicensed spectrum, each with its own catch.", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "What radiated-power cap does the 6 GHz rule set for very-low-power devices?", options: ["1 watt", "100 watts", "14 dBm", "30 dBm"], correctIndex: 2, explanation: "Very-low-power devices are capped at 14 dBm of radiated power (General Technical Requirements, 2026).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "What happens to your equipment when you check in at a coordinated venue?", options: ["It is weighed for the airline", "It is charged by the venue", "It is painted the team color", "It is checked against the plan"], correctIndex: 3, explanation: "Equipment is checked against the frequency plan at the venue (Price & Juniet, 2015).", sourceLessonSlug: "frequency-coordination-and-licenses" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6: Joining the show
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-owns-which-piece",
      title: "21 · Who owns which piece",
      section: "6 · Joining the show",
      recallContent: [
        {
          prompt: "Under whose authority does a freelancer's rig use a licensed broadcast channel?",
          answer: "The network's or the RF vendor's. The licenses go to TV stations and network entities (Eligibility for License, 2026), not to freelancers.",
        },
        {
          prompt: "What should you do if your coordinated link breaks up during a show?",
          answer: "Call the frequency coordinator. \"Users should not scan for new frequencies or resolve the problem by themselves\" (Price & Juniet, 2015, p. 12).",
        },
      ],
      body: `**A rig is part of a system.** On the network shows written up in the trade press, the specialty camera never worked alone. Look at who supplied what:

| Show | Who supplied what | Source |
|---|---|---|
| Fox, NFL, 2020 | Fox's technical director designed the rig; CP Communications built several packages to Fox's specifications and supplied the transmission; Fox hired an extra operator | Mrozek (2021); Costa (2020); Feldman (2021) |
| Netflix, Home Run Derby, July 2026 | Three shallow-depth-of-field rigs inside a production built on Game Creek Video's Flagship A, B, C and D trucks, with a "backup RF system" on hand | Hernández (2026) |
| MLB at Field of Dreams, August 2026 | BSI, Bexel and CP Communications "among the vendors supporting the production's RF requirements"; Faction Media supplied two RF Ronin systems; a RED Raptor X joined "via an RF system," with its camera settings and color values controlled remotely | Costa (2026) |

**What that means for an operator.** Reading that table, the operator on a national network show is one part of a team of vendors. The realistic jobs are running a vendor's or network's rig, or bringing a camera core that the RF vendor's transmitter plugs into. On smaller shows (regional, college, streaming, corporate), an operator's own kit, from camera through receiver, can be the whole wireless system, if the show's engineer accepts it.

**Three ways the picture reaches the switcher.**

1. **Vendor RF, as on network shows.** Camera, then the vendor's broadcast transmitter, a licensed or coordinated channel, receive antennas placed high in the venue, the vendor's receivers, then fiber or coax to the truck. Lesson 17's broadcast family lives here.
2. **An operator-supplied link.** Camera, then the operator's own transmitter (a Teradek, Hollyland or Accsoon unit), a coordinated channel, a receiver on a stand with a view of the field, then SDI to the truck. BaylorVision ran a version of this: camera HDMI into a converter in the backpack, an RF transmitter in the backpack, and the feed into its control room as a live source (Costa, 2021).
3. **Cellular.** Cyanview lists 4G encoders such as Aviwest and LiveU as one way to send the video (Cyanview, n.d.-b). Lesson 18 said to measure it before cutting it against hard cameras.

**The video link carries only the picture.** A video link carries the picture and the sound embedded in it. It does not carry the director's voice, the tally light, the shader's control or a return picture. Cyanview's workflow for a mirrorless camera on a gimbal shows this plainly: camera control goes over its own separate link, and an external tally box is added, because mirrorless cameras have no tally output (Cyanview, n.d.-b). Each of those is its own system, and lesson 24 follows each one.

**Where the receiver goes.** The receiver goes where the RF plan puts it, which may be high in the stands rather than next to the truck. A cable or fiber run then carries its SDI output to the truck's router. On a vendor show, that is the vendor's work. On a small show where you bring the link, it is yours.

**The question to ask first.** Before you pack anything, ask who supplies the transmitter, the receiver, the antennas and the receive position. Arriving with half a system, or with a link the show did not want, is a failure you can avoid with one email.

:::reveal Who supplied the RF at the 2026 Field of Dreams game? ||| BSI, Bexel and CP Communications were "among the vendors supporting the production's RF requirements," and Faction Media supplied two RF Ronin systems (Costa, 2026).

:::reveal What does a video link not carry? ||| Intercom, tally, camera control and return video. Each is its own system; mirrorless cameras even need an external tally box.

## Sources
- ${MROZEK_2021} Locator: the passage on Ligrani's work with CP Communications.
- ${COSTA_2020} Locator: the paragraphs on CP's packages and transmission.
- ${FELDMAN_2021} Locator: the paragraph on hiring an extra camera operator.
- ${HERNANDEZ_2026} Locator: the paragraphs on Game Creek Video's Flagship units, the three shallow-depth-of-field cameras and the backup RF system.
- ${COSTA_2026} Locator: the paragraphs on the RF vendors, Faction Media's RF Ronin systems and the RED Raptor X.
- ${COSTA_2021} Locator: the paragraphs on the converter, the RF backpack and the control room.
- ${CYANVIEW_GIMBAL} Locator: the sections on sending video, on camera control over 4G, and on tally.`,
    },
    {
      slug: "what-the-truck-does",
      title: "22 · What the truck does with your picture",
      section: "6 · Joining the show",
      recallContent: [
        {
          prompt: "Name the three ways lesson 21 says a wireless camera's picture can reach the switcher.",
          answer: "Vendor RF (as on network shows), an operator-supplied link, and cellular encoders.",
        },
        {
          prompt: "Why does a mirrorless camera on a gimbal need an external tally box?",
          answer: "Mirrorless cameras have no tally output (Cyanview, n.d.-b).",
        },
      ],
      body: `${QR("a broadcast engineer in charge (EIC), to check the steps the truck takes with a wireless camera's feed")}

**From receiver to switcher.** Once your picture leaves the receiver, other people handle it. Knowing their steps tells you what they will ask of you.

| Step | What happens | What it asks of you |
|---|---|---|
| Receive and route | The receiver's output lands on an input of the truck's router, by fiber or coax | Know which receiver is yours and what it outputs |
| Frame sync | The unlocked wireless feed is re-timed to the house reference | Nothing, if the truck has one; if it does not, someone must bring one (lesson 7) |
| Format check | The engineer confirms resolution, frame rate, and standard or high dynamic range | Set the camera, converter and link to the show's format before you arrive |
| Shading | A video operator matches your camera to the others | Lock what the shader needs locked (lesson 23) |
| Audio | The camera's embedded sound is used or ignored | Send it as the A1 asks (lesson 24) |
| Delay alignment | The cut and the sound are timed around your delay | Give them your slate-test number (lesson 18) |
| Replay | Your feed is recorded to the replay servers | Keep the shot clean when it may be replayed |

**Frame sync, again.** The FX3 can match timecode but has no genlock input (Sony, n.d.-a; Sony, n.d.-b). So its picture arrives on its own timing, and the truck re-times it with a frame synchronizer. AJA's FS-Mini, for example, locks to blackburst or tri-level reference (AJA Video Systems, n.d.). A network truck has this built in; lesson 7 showed that a small show or a stream may need to bring one. And lesson 18 showed the cost: each frame the synchronizer holds adds about 16.7 ms.

**The format is the show's choice.** The show picks one format, and every box in your chain must match it: the camera's HDMI output, the converter, the transmitter and the receiver. Lesson 17 showed how this can trip you: the Bolt 6 LT carries up to 1080p60 over 3G-SDI, and its 4K is 4K30 over HDMI (Teradek, n.d.-c). A camera set to a format the link cannot carry gives you no picture at the far end. Ask the exact frame rate, too: 59.94 and 60 are different settings.

**Replay is part of the job.** Fox's crew called its slow-motion playback workflow for the rig "a bit clunky" in 2021 (Kerschbaumer et al., 2021). Shots from the rig go to replay like any other camera's, so a soft or shaky moment can be shown again, slowly.

**Who you answer to.** The engineer in charge (EIC) accepts your format and brings your receiver's output into the truck. That is the person you must satisfy before air. On a vendor show, the RF technician owns the link; on a small show where you bring the link, you are acting as the RF technician as well as the operator. The frequency coordinator owns the venue's RF plan (Price & Juniet, 2015).

**When there is no truck.** A stream or a small show may run from a portable system instead of a truck. The steps do not go away. Someone still has to receive, re-time, match and route your picture, so ask who.

:::reveal Why must a truck re-time an FX3's feed? ||| The FX3 has no genlock input, so its picture arrives on its own timing; a frame synchronizer re-times it to house reference.

:::reveal What did Fox's crew say about the rig's slow-motion playback in 2021? ||| It was "a bit clunky" (Kerschbaumer et al., 2021).

## Sources
- ${SONY_TIMECODE} Locator: the whole page (timecode matching only).
- ${SONY_SPECS} Locator: "Input/output terminals" entry.
- ${AJA_FS_MINI} Locator: product overview, reference inputs.
- ${TERADEK_LT} Locator: the inputs and outputs list.
- ${KERSCHBAUMER_2021} Locator: the section on Fox's replay workflow.
- ${PRICE_JUNIET_2015} Locator: the section on the designated frequency coordinator.`,
    },
    {
      slug: "shading-and-color-match",
      title: "23 · Shading and matching color",
      section: "6 · Joining the show",
      recallContent: [
        {
          prompt: "Who must accept your camera's format before air?",
          answer: "The engineer in charge (EIC), who brings your receiver's output into the truck.",
        },
        {
          prompt: "Why ask whether a show runs at 59.94 or 60?",
          answer: "They are different settings, and every box in the chain (camera, converter, transmitter, receiver) must match the show's format.",
        },
      ],
      body: `**What shading is.** A live show cuts between many cameras. If your shot is darker, bluer or flatter than the rest, viewers notice on the cut. Shading (also called "paint") is a video operator in the truck matching each camera's exposure and color to the others, from a remote control panel (RCP).

**How it is done for cinema-style cameras.** Cyanview makes control systems for shading cinema and mirrorless cameras on live shows. Its own page says "There were 30 field camera feeds going through some kind of Cyanview control at the Superbowl LVII" (Cyanview, n.d.-c). For a Sony mirrorless body on a gimbal, its RIO box connects to the camera by USB-C (Cyanview, n.d.-b).

**What the shader can reach.** Cyanview is frank about the limits. In its gimbal workflow, "mirrorless control is limited (exposure, white balance and REC)," and a separate VP4 color processor adds the rest: black level, multi-matrix, detail and coring (Cyanview, n.d.-b). Its Sony Alpha page lists a longer set of settings it can reach, from iris, ISO, shutter and white balance to knee, saturation and hue, but warns that "The Sony mirrorless protocol changes with Sony updates" (Cyanview, n.d.-a). So what a shader can reach depends on the firmware at both ends. Cyanview even lists different minimum firmware for the FX3 and the FX3A (Cyanview, n.d.-a).

**Rules the camera must follow.** Cyanview's Sony Alpha page sets conditions for remote control (Cyanview, n.d.-a):

- Only one device may control the camera at a time, so turn off the camera's Wi-Fi control and the DJI gimbal's USB camera control (lesson 13 met this).
- Auto white balance tracking (ATW) must be off, with white balance in manual or color-temperature mode.

**How control reaches the camera.** Control travels its own path, separate from the picture. Over cellular, Cyanview gives a delay of about 30 to 60 ms, and warns: "you don't own the infrastructure, and you can't control the quality of service" (Cyanview, n.d.-b). So if the shader loses control while the picture is fine, the control path is down, not the video. Fall back to manual exposure and say so on intercom.

**Some cameras match more easily than others.** In 2021, Fox found its Sony mirrorless bodies matched its Sony HDC-4300 broadcast cameras "relatively easily," while CBS needed a color corrector for its Alpha camera (Mrozek, 2021). At the 2026 Field of Dreams game, a RED Raptor X had its camera settings and color values controlled remotely over its RF system (Costa, 2026). The same tools work on very different cameras; the effort to match them varies.

**Log or a finished look: agree first.** A cinema camera can send a flat "log" picture meant for later grading, or a finished look. If the camera sends S-Log3 and your monitor adds a correction (a LUT) to make it look normal, you see a good picture while the truck sees a flat, gray one. So agree with the shader before the show: either the camera sends a finished look, or it sends log and the truck converts it. Never both. And recall lesson 8: on the FX3, Log shooting can drop the HDMI output to 1080 (Sony, n.d.-c).

**When nobody shades you.** If a show has no remote control, the settings are yours. Lock exposure and white balance by hand, and match the other cameras by eye on your monitor (lesson 16).

:::reveal Which settings does Cyanview say mirrorless control covers in its gimbal workflow, before a VP4 is added? ||| "Exposure, white balance and REC"; the VP4 color processor adds black, multi-matrix, detail and coring (Cyanview, n.d.-b).

:::reveal Why must the camera's Wi-Fi control and a DJI gimbal's USB control be off for Cyanview control? ||| Only one device may control the camera at a time (Cyanview, n.d.-a).

## Sources
- ${CYANVIEW_BSC} Locator: the passage on Super Bowl LVII.
- ${CYANVIEW_GIMBAL} Locator: the sections on the RIO and USB-C, the control limits and the VP4, and control over cellular.
- ${CYANVIEW_ALPHA} Locator: the list of controllable settings, the note on Sony updates, the firmware table, the one-device rule and the white balance requirement.
- ${MROZEK_2021} Locator: the passage comparing Fox's and CBS's color matching.
- ${COSTA_2026} Locator: the paragraph on the RED Raptor X.
- ${SONY_HDMI} Locator: the note on Log shooting and 1080 output.`,
    },
    {
      slug: "tally-comms-and-the-questions",
      title: "24 · Tally, intercom, return video and the questions to ask",
      section: "6 · Joining the show",
      recallContent: [
        {
          prompt: "What did Cyanview's page say about Super Bowl LVII?",
          answer: "\"There were 30 field camera feeds going through some kind of Cyanview control\" (Cyanview, n.d.-c).",
        },
        {
          prompt: "What goes wrong if the camera sends S-Log3 and only your monitor adds a LUT?",
          answer: "You see a normal picture while the truck sees a flat, gray one. Agree with the shader who converts log, and never apply it twice.",
        },
      ],
      body: `**Four more paths.** The picture is one path. Four others reach the operator, and each is its own system.

| Path | What it does | How it reaches you |
|---|---|---|
| Tally | A light that tells you your camera is on air | Mirrorless cameras have no tally output, so an external tally box is added to the rig (Cyanview, n.d.-b) |
| Intercom | Lets you hear the director's cues and talk back | A wireless beltpack and headset on the show's intercom; wireless intercoms use coordinated spectrum in the UHF TV band, 900 MHz, 2.4 GHz and 5 GHz (Price & Juniet, 2015) |
| Return video | Shows you the program on your monitor | Needs a second radio path, because your transmitter only sends |
| Timecode | Labels the frames you record | On the FX3, through Sony's VMC-BNCM1 adapter (Sony, n.d.-a) |

**Tally matters on a roaming camera.** A mirrorless camera on a gimbal has no tally light until you add one. Without it, you cannot tell from the rig when you are on air.

**Intercom is your lifeline.** The director calls the shot on intercom. If you cannot hear, you cannot take cues. Carry spare beltpack batteries. Agree a hand signal with your utility for losing comms, since the person next to you can relay what you cannot hear.

**Return video is optional.** A one-way link sends your picture out; it brings nothing back. Your own monitor shows your camera's picture (lesson 16). To see the program, the show must run a second radio path to your monitor, so ask whether the show provides return video rather than assuming it.

**Timecode, without hurting the picture.** The FX3 matches external timecode through Sony's VMC-BNCM1 adapter (Sony, n.d.-a). Timecode matters for your recordings, which line up later in replay and editing (lesson 7); it does nothing for the live cut. One warning from Sony: "When [Time Code Output] is set to [On], images may not be output properly to the TV or recording device. In this case, set [Time Code Output] to [Off]" (Sony, n.d.-c).

**Audio rides along.** The FX3 records LPCM audio, with 4 channels when the XLR handle is attached (Sony, n.d.-b). Camera sound can ride inside the HDMI signal and through the link as embedded audio. Some broadcast transmitters add their own inputs: the HCAM lists one analog stereo pair at mic or line level, with phantom power (VidOvation, n.d.). The A1 decides whether the show uses your sound.

**The questions to send the engineer before every job.**

| Question | Why it matters |
|---|---|
| What format and exact frame rate (59.94 or 60)? Standard or high dynamic range, and which gamma? | Camera, converter and link must all match (lesson 22). |
| Who supplies the transmitter, receiver, antennas and receive position? | So you do not arrive with half a system (lesson 21). |
| Who coordinates frequencies, and by when do you need my device list? | Two to four weeks is the venue white paper's lead time (Price & Juniet, 2015). |
| Is the camera shaded from the truck? With what system? | It decides who owns exposure (lesson 23). |
| How do I get tally, intercom and return video? | None of them rides on the video link. |
| Who does frame sync and format conversion? | The FX3 cannot genlock (lesson 7). |
| Should the camera record? In what format, and who takes the media? | Recording settings can change the HDMI output (lesson 8). |
| What happens when the link fails? Who do I call, and what may I change? | Users should not re-tune on their own (Price & Juniet, 2015). |

:::reveal Why can a gimbal operator not see a tally light without extra gear? ||| Mirrorless cameras have no tally output, so an external tally box must be added (Cyanview, n.d.-b).

:::reveal What does Sony say to do if images are not output properly with Time Code Output on? ||| Set [Time Code Output] to [Off] (Sony, n.d.-c).

## Sources
- ${CYANVIEW_GIMBAL} Locator: the section on tally.
- ${PRICE_JUNIET_2015} Locator: the section on wireless intercom bands; p. 10 (lead time); p. 12 (do not re-tune).
- ${SONY_TIMECODE} Locator: the VMC-BNCM1 adapter.
- ${SONY_HDMI} Locator: the note under [Time Code Output].
- ${SONY_SPECS} Locator: "Audio recording format" entry.
- ${VIDOVATION} Locator: specifications, audio inputs.`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · Joining the show",
      section: "6 · Joining the show",
      body: "A graded check on who supplies which piece of a wireless camera system, what the truck does with your picture, shading and color matching, and tally, intercom, return video, timecode and the questions to ask the engineer. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Who designed Fox's original rig, per lesson 21's table?", options: ["Fox's technical director", "Game Creek Video's crew", "The NFL's media office", "CP Communications' RF team"], correctIndex: 0, explanation: "Fox's technical director designed it; CP built packages to Fox's specifications and supplied the transmission (Mrozek, 2021).", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "What did CP Communications do for Fox in 2020?", options: ["Hired the extra camera operator", "Built packages and supplied transmission", "Wrote the NFL's frequency plan", "Shaded the rig from the truck"], correctIndex: 1, explanation: "CP built several packages to Fox's specifications and supplied the transmission (Mrozek, 2021; Costa, 2020).", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "Which trucks did Netflix's 2026 Home Run Derby production use?", options: ["Fox's own Super Bowl trucks", "NEP's Supershooter units", "Game Creek Video's Flagship units", "CP Communications' RF trucks"], correctIndex: 2, explanation: "Hernández (2026): a production built on Game Creek Video's Flagship A, B, C and D units.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "How many shallow-depth-of-field rigs did the Netflix Derby use?", options: ["Eight", "One", "Two", "Three"], correctIndex: 3, explanation: "Hernández (2026) reports three shallow-depth-of-field rigs with cinematic lenses.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "Which vendors supported RF at the 2026 Field of Dreams game?", options: ["BSI, Bexel and CP Communications", "Teradek, Hollyland and Accsoon", "Sony, Canon and RED Digital", "DJI, Zhiyun and Freefly"], correctIndex: 0, explanation: "Costa (2026): BSI, Bexel and CP Communications were \"among the vendors supporting the production's RF requirements.\"", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "What did Faction Media supply at the 2026 Field of Dreams game?", options: ["The replay servers", "Two RF Ronin systems", "The broadcast truck", "The stadium lighting"], correctIndex: 1, explanation: "Costa (2026): Faction Media supplied two RF Ronin systems.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "How did the RED Raptor X join the 2026 Field of Dreams show?", options: ["As a recording-only camera", "Over a cable to the truck", "Via an RF system, controlled remotely", "Through a cellular encoder"], correctIndex: 2, explanation: "Costa (2026): it joined \"via an RF system,\" with its camera settings and color values controlled remotely.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "On a national network show, what are an operator's realistic jobs, per lesson 21?", options: ["Coordinating the venue's radios", "Building the truck's frame sync", "Owning the network's licenses", "Running a vendor's rig, or a core"], correctIndex: 3, explanation: "Running a vendor's or network's rig, or bringing a camera core that the RF vendor's transmitter plugs into.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "When can an operator's own kit be the whole wireless system?", options: ["On smaller shows, if the engineer accepts it", "Only when no coordinator exists", "Never; vendors always supply RF", "On every NFL broadcast"], correctIndex: 0, explanation: "On regional, college, streaming and corporate shows, an operator's own kit can be the whole system if the show's engineer accepts it.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "In the vendor-RF path, where do the receive antennas go?", options: ["On the operator", "High in the venue", "In the camera bag", "Under the bench"], correctIndex: 1, explanation: "Vendor RF runs to receive antennas placed high in the venue, then the vendor's receivers.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "Which production ran a version of the operator-supplied path?", options: ["The Masters on CBS", "Netflix's Home Run Derby", "BaylorVision", "Fox's 2021 playoffs"], correctIndex: 2, explanation: "BaylorVision fed camera HDMI to a converter and an RF transmitter in the backpack, then into its control room (Costa, 2021).", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "What does a video link carry, per lesson 21?", options: ["Only the shader's control signals", "Picture plus a return program feed", "Picture, sound, tally and intercom", "Only the picture and embedded sound"], correctIndex: 3, explanation: "A video link carries the picture and the sound embedded in it, nothing else.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "In Cyanview's gimbal workflow, how does camera control travel?", options: ["Over its own separate link", "On the intercom channel", "Through the tally light", "Inside the HDMI cable"], correctIndex: 0, explanation: "Camera control goes over its own separate link (Cyanview, n.d.-b).", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "Where does the receiver go on a show?", options: ["In the operator's pocket", "Wherever the RF plan puts it", "Always inside the truck", "Always beside the bench"], correctIndex: 1, explanation: "The receiver goes where the RF plan puts it, which may be high in the stands, and a cable or fiber run carries SDI to the truck.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "On a small show where you bring the link, whose job is the receiver run?", options: ["The league's", "The stadium's", "Yours", "The shader's"], correctIndex: 2, explanation: "On a vendor show it is the vendor's work; on a small show where you bring the link, it is yours.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "What does lesson 21 say to ask before you pack anything?", options: ["Which fans have the best seats nearby", "What the game's final score will be", "Which brand of tripod the truck uses", "Who supplies TX, RX, antennas and position"], correctIndex: 3, explanation: "Ask who supplies the transmitter, receiver, antennas and receive position, so you do not arrive with half a system.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "What lands first on the truck's router from your rig?", options: ["The receiver's output", "The camera's card", "The gimbal's battery", "The shader's panel"], correctIndex: 0, explanation: "The receiver's output lands on a router input by fiber or coax.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "What does the frame-sync step do to a wireless feed?", options: ["Boosts its radio signal power", "Re-times it to house reference", "Converts it from color to mono", "Records it for the replay team"], correctIndex: 1, explanation: "The unlocked wireless feed is re-timed to the house reference.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "Why does an FX3's picture arrive on its own timing?", options: ["It uses a global shutter", "It sends audio separately", "It has no genlock input", "It records only to cards"], correctIndex: 2, explanation: "The FX3 can match timecode but has no genlock input (Sony, n.d.-a; n.d.-b).", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "Which references does AJA's FS-Mini lock to?", options: ["Wi-Fi or Bluetooth", "GPS or cellular time", "Timecode or tally", "Blackburst or tri-level"], correctIndex: 3, explanation: "AJA Video Systems (n.d.): the FS-Mini locks to blackburst or tri-level reference.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "What does the format check ask of you?", options: ["Set every box to the show's format", "Bring a spare broadcast truck", "Record a backup on your phone", "Let the truck choose your lens"], correctIndex: 0, explanation: "Set the camera, converter and link to the show's format before you arrive.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "What happens if the camera is set to a format the link cannot carry?", options: ["The link converts it for free", "No picture at the far end", "The picture turns black and white", "The audio drops but video works"], correctIndex: 1, explanation: "A camera set to a format the link cannot carry gives you no picture at the far end.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "Why ask whether the show runs at 59.94 or 60?", options: ["59.94 is only for audio", "The truck ignores frame rate", "They are different settings", "60 is illegal in the US"], correctIndex: 2, explanation: "59.94 and 60 are different settings, and every box in the chain must match the show's format.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "What did Fox's crew call its slow-motion playback workflow for the rig in 2021?", options: ["\"broken\"", "\"perfect\"", "\"seamless\"", "\"a bit clunky\""], correctIndex: 3, explanation: "Kerschbaumer et al. (2021): \"a bit clunky.\"", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "Why keep the shot clean even after the moment has aired?", options: ["It may be replayed slowly", "The league grades each shot", "The card fills up faster", "The link needs a still image"], correctIndex: 0, explanation: "Your feed is recorded to the replay servers, so a soft or shaky moment can be shown again, slowly.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "Who must you satisfy before air, per lesson 22?", options: ["The league's referee", "The engineer in charge", "The stadium's usher", "The visiting coach"], correctIndex: 1, explanation: "The EIC accepts your format and brings your receiver's output into the truck.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "On a small show where you bring the link, what second role do you take on?", options: ["The replay producer", "The stadium electrician", "The RF technician", "The play-by-play voice"], correctIndex: 2, explanation: "You are acting as the RF technician as well as the operator.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "Who owns the venue's RF plan?", options: ["The team's head coach", "The A1 in the truck", "The camera operator", "The frequency coordinator"], correctIndex: 3, explanation: "The frequency coordinator owns the venue's RF plan (Price & Juniet, 2015).", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "When a show has no truck, what happens to the truck's steps?", options: ["Someone still has to do them", "The camera does them alone", "The league does them remotely", "They all disappear"], correctIndex: 0, explanation: "Someone still has to receive, re-time, match and route your picture, so ask who.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "What does the delay-alignment step ask of you?", options: ["A faster memory card", "Your slate-test number", "Your camera's serial number", "A second camera body"], correctIndex: 1, explanation: "The cut and the sound are timed around your delay, so give them your slate-test number (lesson 18).", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "How much delay does each frame held in a frame sync add at 59.94?", options: ["About 167 ms", "None at all", "About 16.7 ms", "About 1.67 ms"], correctIndex: 2, explanation: "Lesson 18: each frame the synchronizer holds adds about 16.7 ms.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "What is shading, in lesson 23's words?", options: ["Putting a sunshade over the camera rig", "Choosing which camera goes on the air", "Moving the receiver into the shade", "Matching each camera's exposure and color"], correctIndex: 3, explanation: "Shading (also called paint) is a video operator in the truck matching each camera's exposure and color to the others.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "What is another name for shading?", options: ["Paint", "Patch", "Punch", "Pull"], correctIndex: 0, explanation: "Shading is also called \"paint.\"", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "From what does a shader adjust cameras?", options: ["A phone app on the field", "A remote control panel", "The camera's own menu", "The gimbal's joystick"], correctIndex: 1, explanation: "A video operator works from a remote control panel (RCP) in the truck.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "How many field camera feeds went through Cyanview control at Super Bowl LVII, per Cyanview?", options: ["3", "13", "30", "300"], correctIndex: 2, explanation: "Cyanview (n.d.-c): \"There were 30 field camera feeds going through some kind of Cyanview control at the Superbowl LVII.\"", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "How does Cyanview's RIO connect to a Sony mirrorless body in the gimbal workflow?", options: ["By HDMI", "By fiber", "By XLR", "By USB-C"], correctIndex: 3, explanation: "Cyanview (n.d.-b): the RIO connects by USB-C.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "In Cyanview's gimbal workflow, what does mirrorless control cover before a VP4 is added?", options: ["Exposure, white balance and REC", "Black, detail and multi-matrix", "Focus, zoom and the gimbal axes", "Tally, intercom and return video"], correctIndex: 0, explanation: "\"Mirrorless control is limited (exposure, white balance and REC)\" (Cyanview, n.d.-b).", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "What does the VP4 color processor add?", options: ["Extra battery runtime for the rig", "Black, multi-matrix, detail, coring", "Autofocus, zoom and image stabilizing", "Tally lights and intercom channels"], correctIndex: 1, explanation: "Cyanview (n.d.-b): the VP4 adds black level, multi-matrix, detail and coring.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "What does Cyanview warn about the Sony mirrorless protocol?", options: ["It needs a broadcast license", "It cannot control white balance", "It changes with Sony updates", "It works only on 6 GHz"], correctIndex: 2, explanation: "\"The Sony mirrorless protocol changes with Sony updates\" (Cyanview, n.d.-a).", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "Why does what a shader can reach depend on firmware?", options: ["Firmware sets the lens's maximum aperture", "Firmware decides the link's frequency band", "Older firmware disables HDMI output", "The control protocol changes with updates"], correctIndex: 3, explanation: "The protocol changes with Sony updates, and Cyanview lists different minimum firmware for the FX3 and FX3A (Cyanview, n.d.-a).", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "Which two controls must be off for Cyanview to control a Sony Alpha?", options: ["Camera Wi-Fi and gimbal USB control", "The camera's HDMI and its SD card", "The gimbal's motors and its battery", "The link's receiver and transmitter"], correctIndex: 0, explanation: "Only one device may control the camera at a time, so turn off its Wi-Fi control and the DJI gimbal's USB control (Cyanview, n.d.-a).", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "What white balance setup does Cyanview require for remote control?", options: ["Whatever the gimbal's app selects", "ATW off, manual or color temperature", "ATW on, so the camera adjusts itself", "Daylight preset locked by firmware"], correctIndex: 1, explanation: "Auto white balance tracking must be off, with white balance in manual or color-temperature mode (Cyanview, n.d.-a).", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "What delay does Cyanview give for control over cellular?", options: ["About 300 to 600 ms", "About 3 to 6 ms", "About 30 to 60 ms", "About 3 to 6 s"], correctIndex: 2, explanation: "Cyanview (n.d.-b): about 30 to 60 ms over cellular.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "What does Cyanview warn about control over cellular?", options: ["\"Cellular is illegal in stadiums\"", "\"It only works with fiber backup\"", "\"It doubles the video delay\"", "\"You don't own the infrastructure\""], correctIndex: 3, explanation: "\"You don't own the infrastructure, and you can't control the quality of service\" (Cyanview, n.d.-b).", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "The shader loses control but the picture is fine. What is down?", options: ["The control path", "The video link", "The lens motor", "The tally light"], correctIndex: 0, explanation: "Control travels its own path, so a working picture with no control means the control path is down.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "What should you do if the shader loses control on air?", options: ["Keep quiet until the next break", "Fall back to manual and say so", "Switch the link to a new channel", "Turn the camera off and on again"], correctIndex: 1, explanation: "Fall back to manual exposure and say so on intercom.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "How did Fox's Sony bodies match its HDC-4300s in 2021?", options: ["\"only at night\"", "\"with great effort\"", "\"relatively easily\"", "\"not at all\""], correctIndex: 2, explanation: "Mrozek (2021): Fox found they matched \"relatively easily.\"", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "What did CBS need to match its Alpha camera in 2021?", options: ["A faster lens", "A brighter monitor", "A second camera", "A color corrector"], correctIndex: 3, explanation: "Mrozek (2021): CBS needed a color corrector.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "What was controlled remotely on the RED Raptor X in 2026?", options: ["Its camera settings and color values", "Its battery swaps and charging", "Its lens changes and lens caps", "Its gimbal axes and follow modes"], correctIndex: 0, explanation: "Costa (2026): its camera settings and color values were controlled remotely over its RF system.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "What goes wrong if the camera sends S-Log3 and only your monitor adds a LUT?", options: ["The camera overheats within minutes", "The truck sees a flat, gray picture", "The link refuses to carry the signal", "The gimbal loses its balance setting"], correctIndex: 1, explanation: "You see a normal picture while the truck sees the flat log picture, so agree who converts it.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "What should you agree with the shader about log?", options: ["Only the monitor should convert it", "Both camera and truck should convert", "One side converts it, never both", "Log must never be used on a show"], correctIndex: 2, explanation: "Either the camera sends a finished look, or it sends log and the truck converts it. Never both.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "If nobody shades you, who owns exposure and white balance?", options: ["The RF tech", "The A1", "The league", "You do"], correctIndex: 3, explanation: "If a show has no remote control, the settings are yours; lock them by hand and match by eye.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "What does a tally light tell the operator?", options: ["That the camera is on air", "That the battery is full", "That focus is locked", "That the link is paired"], correctIndex: 0, explanation: "Lesson 24: tally is a light that tells you your camera is on air.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "How does a mirrorless camera on a gimbal get a tally light?", options: ["It is built into every Sony body", "An external tally box is added", "The gimbal's LED turns red itself", "The link's receiver flashes it"], correctIndex: 1, explanation: "Mirrorless cameras have no tally output, so an external tally box is added (Cyanview, n.d.-b).", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "What does intercom let the operator do?", options: ["Send the picture to air", "Change the camera's color", "Hear cues and talk back", "Record the crowd's sound"], correctIndex: 2, explanation: "Intercom lets you hear the director's cues and talk back.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "What should you carry for your intercom beltpack?", options: ["A second lens", "A spare tripod", "A paper map", "Spare batteries"], correctIndex: 3, explanation: "Carry spare beltpack batteries; if you cannot hear, you cannot take cues.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Why agree a hand signal with your utility for losing comms?", options: ["The person next to you can relay cues", "Hand signals are required by the FCC", "Intercoms never work in stadiums", "It replaces the tally light on air"], correctIndex: 0, explanation: "If you lose intercom, the person next to you can relay what you cannot hear.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Why does return video need a second radio path?", options: ["The receiver cannot be moved", "Your transmitter only sends", "Return video is in 8K only", "The FCC requires two links"], correctIndex: 1, explanation: "A one-way link sends your picture out and brings nothing back.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "What should you do about return video?", options: ["Refuse jobs that do not offer it", "Assume every show provides it", "Ask whether the show provides it", "Build your own return link quietly"], correctIndex: 2, explanation: "Ask whether the show provides return video rather than assuming it.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Through which adapter does the FX3 match external timecode?", options: ["XLR-K3M", "NP-FZ100", "HVL-LBPC", "VMC-BNCM1"], correctIndex: 3, explanation: "Sony (n.d.-a): the VMC-BNCM1 adapter.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Does timecode help the live cut?", options: ["No, it serves the recordings", "Yes, it replaces genlock", "Only on 4K productions", "Yes, it removes all delay"], correctIndex: 0, explanation: "Timecode lines up recordings in replay and editing; it does nothing for the live cut.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "What does Sony warn can happen with Time Code Output on?", options: ["The card may refuse to record", "Images may not output properly", "The battery may drain in minutes", "The lens may lose autofocus"], correctIndex: 1, explanation: "\"When [Time Code Output] is set to [On], images may not be output properly ... set [Time Code Output] to [Off]\" (Sony, n.d.-c).", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "How many audio channels does the FX3 record with the XLR handle attached?", options: ["8", "2", "4", "6"], correctIndex: 2, explanation: "Sony (n.d.-b): 4 channels of LPCM with the XLR handle.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Which audio inputs does VidOvation list for the HCAM?", options: ["Eight digital AES pairs only", "No audio inputs at all", "A single USB microphone port", "One analog stereo pair, mic or line"], correctIndex: 3, explanation: "VidOvation (n.d.): one analog stereo pair at mic or line level, with phantom power.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Who decides whether the show uses your camera's sound?", options: ["The A1", "The utility", "The coordinator", "The operator"], correctIndex: 0, explanation: "The A1 decides whether the show uses your sound.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Why ask the engineer about format and exact frame rate?", options: ["So you can pick a different lens", "Every box in the chain must match", "The truck can fix any mismatch", "Frame rate only affects the audio"], correctIndex: 1, explanation: "Camera, converter and link must all match the show's format (lesson 22).", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Why ask who supplies the TX, RX, antennas and receive position?", options: ["So the league can inspect your lens", "So the shader can pick your codec", "So you do not arrive with half a system", "So you can bill the stadium for parking"], correctIndex: 2, explanation: "So you do not arrive with half a system (lesson 21).", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Why ask who coordinates frequencies and by when?", options: ["The coordinator picks your lens", "Frequencies are chosen on air", "The league bills by the minute", "The device list goes in weeks early"], correctIndex: 3, explanation: "Two to four weeks is the venue white paper's lead time (Price & Juniet, 2015).", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Why ask whether the camera is shaded from the truck?", options: ["It decides who owns exposure", "It decides the camera's weight", "It sets the link's frequency", "It changes the lens mount"], correctIndex: 0, explanation: "It decides who owns exposure (lesson 23).", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Why ask how you get tally, intercom and return video?", options: ["They are optional on every show", "None of them rides on the video link", "They all ride on the HDMI cable", "The league supplies all three free"], correctIndex: 1, explanation: "None of them rides on the video link; each is its own system.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Why ask who does frame sync and format conversion?", options: ["Frame sync is illegal", "The link does it free", "The FX3 cannot genlock", "The FX3 has SDI built in"], correctIndex: 2, explanation: "The FX3 cannot genlock, so someone must re-time its feed (lesson 7).", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Why ask whether the camera should record, and in what format?", options: ["Recording doubles the link's range", "Recording turns off the tally box", "Recording is required by the FCC", "Recording settings can change HDMI"], correctIndex: 3, explanation: "Recording settings can change the HDMI output (lesson 8): bit depth follows the record setting.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Why ask what may be changed when the link fails?", options: ["Users should not re-tune on their own", "The link always fixes itself in time", "Only the director may touch radios", "Failures are never allowed on air"], correctIndex: 0, explanation: "Users should not re-tune on their own (Price & Juniet, 2015, p. 12).", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Which intercom bands does the venue white paper list?", options: ["Only cellular 4G and 5G bands", "UHF TV band, 900 MHz, 2.4 and 5 GHz", "Only the 6.4 GHz broadcast band", "Only AM radio frequencies"], correctIndex: 1, explanation: "Price and Juniet (2015): the UHF TV band, 900 MHz, 2.4 GHz and 5 GHz.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "How many paths besides the picture does lesson 24 say reach the operator?", options: ["Eight", "Two", "Four", "Six"], correctIndex: 2, explanation: "Tally, intercom, return video and timecode: four paths, each its own system.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Did the specialty camera work alone on the network shows in lesson 21's table?", options: ["Only at the 2020 Fox debut", "Only at the 2026 Derby", "Yes, one person ran everything", "No, it was part of a vendor team"], correctIndex: 3, explanation: "On every network show in the table, the camera was one part of a system supplied by several vendors.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "In the operator-supplied path, what carries the receiver's picture to the truck?", options: ["SDI over cable", "The intercom", "A memory card", "The tally box"], correctIndex: 0, explanation: "A receiver on a stand with a view of the field, then SDI to the truck.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "In BaylorVision's version, where were the converter and the transmitter?", options: ["Mounted on the scoreboard", "In the operator's backpack", "On a stand beside the field", "Inside the control room"], correctIndex: 1, explanation: "Costa (2021): camera HDMI into a converter in the backpack, and an RF transmitter in the backpack.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "Which lesson 17 family lives on the vendor-RF path?", options: ["Cellular 4G", "Compressed links", "Broadcast RF", "Zero-delay film"], correctIndex: 2, explanation: "The vendor's broadcast transmitter is lesson 17's broadcast family.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "What did Fox add to its crew for the rig's first game?", options: ["A new RF vendor", "A replay producer", "A second shader", "An extra operator"], correctIndex: 3, explanation: "Fox hired an extra camera operator (Feldman, 2021).", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "By what does the receiver's output reach the router?", options: ["Fiber or coax", "Wi-Fi only", "Bluetooth", "A USB stick"], correctIndex: 0, explanation: "The receiver's output lands on a router input by fiber or coax.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "Which Bolt 6 LT limit can trip a show's format, per lesson 22?", options: ["It sends only 720p", "1080p60 max over 3G-SDI", "No HDMI input on the TX", "Audio only at 32 kHz"], correctIndex: 1, explanation: "The Bolt 6 LT carries up to 1080p60 over 3G-SDI, and its 4K is 4K30 over HDMI (Teradek, n.d.-c).", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "What does the shading step ask of you?", options: ["Pick the show's color format", "Turn off the camera's audio", "Lock what the shader needs locked", "Shade the camera with an umbrella"], correctIndex: 2, explanation: "Lock what the shader needs locked (lesson 23), such as manual white balance.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "On the FX3, what can Log shooting do to the HDMI output?", options: ["Raise it to 8K", "Turn it to RAW", "Mute its audio", "Drop it to 1080"], correctIndex: 3, explanation: "Lesson 8: with Log shooting on, \"the HDMI output resolution becomes 1080\" unless HDMI-only or RAW output (Sony, n.d.-c).", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "Which settings does Cyanview's Sony Alpha page list among those it can reach?", options: ["Iris, ISO, shutter, white balance", "Gimbal mode, deadband, follow speed", "Link channel, power, antenna angle", "Battery voltage and charge level"], correctIndex: 0, explanation: "Cyanview (n.d.-a) lists iris, ISO, shutter and white balance, up to knee, saturation and hue.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "Why do viewers notice a camera that is not shaded to match?", options: ["It changes the score bug", "It looks different on the cut", "It makes the audio louder", "It slows down the replay"], correctIndex: 1, explanation: "If your shot is darker, bluer or flatter than the rest, viewers notice on the cut.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "Without a tally box, what can't the gimbal operator tell from the rig?", options: ["How much card space is left", "Which way the wind blows", "When the camera is on air", "Whether the lens is clean"], correctIndex: 2, explanation: "A mirrorless camera on a gimbal has no tally light until you add one, so you cannot tell from the rig when you are on air.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "What does your own monitor show, as opposed to return video?", options: ["The program going to air", "The other cameras' feeds", "The replay operator's clips", "Your own camera's picture"], correctIndex: 3, explanation: "Your own monitor shows your camera's picture (lesson 16); seeing the program takes a second radio path.", sourceLessonSlug: "tally-comms-and-the-questions" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7: Troubleshooting
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "find-the-last-point-that-works",
      title: "25 · Find the last point that works",
      section: "7 · Troubleshooting",
      recallContent: [
        {
          prompt: "How does a gimbal operator get a tally light on a mirrorless camera?",
          answer: "By adding an external tally box; mirrorless cameras have no tally output (Cyanview, n.d.-b).",
        },
        {
          prompt: "What does Sony say to do if the picture misbehaves with Time Code Output on?",
          answer: "Set [Time Code Output] to [Off] (Sony, n.d.-c).",
        },
      ],
      body: `**Faults on a live show.** Something will go wrong during a game, and the clock will not stop for you. This section gives you a method first, then the common faults by symptom, then a checklist that prevents most of them. Most of the fixes follow from how the parts work, which sections 2 to 6 explained; where a maker or a venue source states the cause or the fix, the lesson cites it.

**The chain, in order.** Your picture passes nine points between the lens and the director's screen:

1. The camera's own screen.
2. The camera's output, on a monitor plugged straight in.
3. The converter's output, if you use one (lesson 7).
4. The transmitter's input light.
5. The receiver's link status.
6. The receiver's output, at the receiver.
7. The truck router's input.
8. The frame synchronizer's output.
9. The switcher's preview.

**The method: find the last point that works.** Start at the lens and walk toward the switcher. Stop at the first point where the picture is wrong. Each point feeds the next one, so the fault sits between the last good point and the first bad one. That turns "no picture" into a question about one cable, one box or one setting.

**Change one thing at a time.** If you change two things and the picture comes back, you do not know which one fixed it, and the fault may return on air. Change one, look, then change the next.

**One thing you never change.** At a coordinated venue, do not re-tune your link to escape interference. The venue white paper is plain: "Users should not scan for new frequencies or resolve the problem by themselves" (Price & Juniet, 2015, p. 12). A new channel you pick can land on someone else's, and lesson 20 showed what the NFL does about uncoordinated devices. Call the coordinator instead.

**Who owns which points.** Points 1 to 4 are on your rig. Points 5 and 6 are yours if you brought the link, and the RF vendor's if they did (lesson 21). Points 7 to 9 are in the truck (lesson 22). So the method also tells you whom to call.

**How to report on intercom.** Say three things, in plain words: the last good point, the first bad point, and what you have not touched. For example: "Handheld two: picture good on my monitor, transmitter shows input, receiver shows no link. No frequency change made." The engineer can act on that at once. "My camera's down" tells them nothing.

**A fault you can cause yourself.** The picture is fine, then goes black right after you change a menu. Suspect the change. Lesson 8 showed two ways a camera setting changes the HDMI output: while recording, the output's bit depth follows the record setting, and with Log shooting on, the output drops to 1080 (Sony, n.d.-c). A link or a converter that was happy before may not accept the new signal. Keep a written settings card (lesson 10) and put the settings back.

**Test the whole chain before you travel.** Set up camera, monitor, transmitter, receiver and a test monitor on a bench, with the show's format, and run it. A fault found at home costs an evening. The same fault found at the venue costs the facilities check, and on air it costs the shot.

:::reveal What is the method for finding a fault in the picture chain? ||| Walk from the lens toward the switcher and stop at the first point where the picture is wrong; the fault lies between the last good point and the first bad one.

:::reveal What three things should a fault report on intercom include? ||| The last good point, the first bad point, and what you have not touched.

## Sources
- ${PRICE_JUNIET_2015} Locator: p. 12 (do not scan for new frequencies).
- ${SONY_HDMI} Locator: [Rec. Media dur HDMI Output] and the note on Log shooting and 1080 output.`,
    },
    {
      slug: "no-picture-and-breakup",
      title: "26 · No picture, and a picture that breaks up",
      section: "7 · Troubleshooting",
      recallContent: [
        {
          prompt: "Why does the fault lie between the last good point and the first bad one?",
          answer: "Each point in the chain feeds the next, so the first point that goes wrong marks where the fault entered.",
        },
        {
          prompt: "What should you never do about interference at a coordinated venue?",
          answer: "Re-tune or scan for a new frequency yourself; call the coordinator (Price & Juniet, 2015, p. 12).",
        },
      ],
      body: `${QR("an RF technician, to check the causes and fixes for no signal and for breakup")}

**No picture.** Use the chain from lesson 25. Each row below starts at the first point that is wrong.

| What you see | What to suspect, and why | Check | Fix |
|---|---|---|---|
| Camera screen fine, direct monitor black | The camera's HDMI is set to a format the monitor cannot take, or the plug is loose. The FX3's only video output is an "HDMI type A jack" (Sony, n.d.-b), so one loose plug ends the show. | A known-good short cable into a known-good monitor; read the format the monitor reports | Set the output to the show's format; use a locking or clamped cable with strain relief |
| Monitor fine, transmitter shows no input | The transmitter does not accept the format, or the converter has no power | The input format on the transmitter; the converter's lights | Match formats. The Bolt 6 LT takes up to 1080p60 over 3G-SDI and 4K30 over HDMI (Teradek, n.d.-c), so 4K60 will not lock |
| Transmitter has input, receiver has no link | Not paired, different channels, receiver unpowered, loose antennas | Pairing status and channel on both units; receiver power | Pair on the bench before the show. Do not change channels at the venue without the coordinator (Price & Juniet, 2015, p. 12) |
| Receiver shows a picture, truck sees black | Wrong router input, a bad cable run, or a format the truck does not expect | A monitor on the receiver's output; ask the EIC what the input sees | Fix the patch or the format; ask for frame sync if the input will not lock (lesson 22) |

**Breakup and dropouts.** The picture comes and goes, freezes or tears.

| What you see | What to suspect, and why | Fix |
|---|---|---|
| Drops when you turn your back to the receiver, or walk behind a crowd | No line of sight: your body or the crowd is in the path (lesson 19) | Keep line of sight; "Minimize obstructions (especially humans and foliage)"; keep antennas vertical (Teradek, 2024). Move the receiver higher, or ask for a second receive point |
| Clean in rehearsal, breaks up when the stadium fills | The fans' and other crews' devices are now on (lesson 19) | Report it; the coordinator can assign a cleaner channel. Teradek's advice to pick a fixed low-interference channel, or to turn off busy ones (Teradek, 2024), applies only inside what the coordinator assigns |
| Breaks up only near another crew's gear | Transmitters too close together | Keep wireless gear at least 3 feet apart and receivers 18 inches apart (Teradek, 2024) |
| Breaks up indoors near walls or a big screen | Reflections (multipath) | Move the receiver a few feet and compare. Do not just raise power: it can overload receivers and add multipath (Price & Juniet, 2015, p. 3) |
| Breaks up when it rains | Water on antennas or in connectors | A rain cover over the transmitter; drip loops on cables; dry connectors |
| Link holds, but the picture turns blocky on fast action | A compressed link squeezes the picture to fit its radio channel, and fast detail is the hardest to squeeze (lesson 17) | Ask the RF technician what the link allows, or use a link class the show accepts |

**Why the venue's own test matters.** Two of the rows above only show up with the venue full of radios. That is why the all-hands test, with every wireless user powered up together, comes before the show and not after (Price & Juniet, 2015, p. 7). Walk your whole route during it, and note every dead spot.

**Have a backup plan.** Netflix's 2026 Home Run Derby kept a "backup RF system" on hand (Hernández, 2026). On a smaller show, the backup may be as simple as a wired path: lesson 30's middle build carries an HDMI-to-SDI converter for exactly that. Agree in advance what the backup is and who switches to it.

:::reveal The transmitter shows input but the receiver shows no link. Name three things to check. ||| Pairing on both units, the channel on both units, and the receiver's power (and loose antennas).

:::reveal Why is raising transmit power a poor fix for breakup near walls? ||| It can overload receivers and add multipath reflections (Price & Juniet, 2015, p. 3).

## Sources
- ${SONY_SPECS} Locator: "Input/output terminals" entry.
- ${TERADEK_LT} Locator: the inputs and outputs list.
- ${TERADEK_2024} Locator: the sections on line of sight, antenna orientation, spacing and channel selection.
- ${PRICE_JUNIET_2015} Locator: p. 3 (power and multipath), p. 7 (all-hands test), p. 12 (do not re-tune).
- ${HERNANDEZ_2026} Locator: the paragraph on the backup RF system.`,
    },
    {
      slug: "delay-color-heat-focus-and-gimbal-faults",
      title: "27 · Delay, color, heat, focus and gimbal faults",
      section: "7 · Troubleshooting",
      recallContent: [
        {
          prompt: "What should you suspect if the link breaks up only when you turn your back to the receiver?",
          answer: "No line of sight: your body is in the path. Keep line of sight and move the receiver higher (Teradek, 2024).",
        },
        {
          prompt: "Which Bolt 6 LT input format will not lock over 3G-SDI?",
          answer: "4K60. The Bolt 6 LT takes up to 1080p60 over 3G-SDI and 4K30 over HDMI (Teradek, n.d.-c).",
        },
      ],
      body: `**Delay.** Your shot is visibly late against the hard cameras when the director cuts. Suspect the link's delay plus the frame sync (lesson 18). Run the slate test: film one clap or flash with your camera and a hard camera, and count the frames. Then choose: a lower-delay link, or let the technical director time cuts around the number. If lips are out of sync on your camera's sound, the A1 can delay the sound to match, or the show can skip your audio.

**Color.**

| What you see | What to suspect, and why | Fix |
|---|---|---|
| Your shot looks flat and gray in the truck, normal on your monitor | The camera sends S-Log3 and only your monitor adds a correction (lesson 23) | Agree with the shader: a finished look from the camera, or log converted in the truck. Never both |
| Skin or grass color differs from the hard cameras | Automatic white balance drifting | Lock white balance in manual or color-temperature mode; Cyanview requires ATW off for remote control (Cyanview, n.d.-a). Let the shader match the rest |
| Exposure pumps as you turn toward the sky | Automatic ISO or iris chasing the light | Manual exposure, or remote iris from the truck |
| The shader cannot reach a setting | The control protocol changes with firmware: "The Sony mirrorless protocol changes with Sony updates" (Cyanview, n.d.-a) | Keep camera and control-box firmware matched; turn off the camera's Wi-Fi control and the gimbal's USB control, since only one device may control the camera |

**Heat.** The camera warns or shuts down on a hot day. Sony rates the FX3 from 0 to 40 °C (Sony, n.d.-b), and a camera in direct sun can pass that. Fox found that "Getting the batteries out of the camera helped" (Mrozek, 2021), so run the camera on external power. BaylorVision reported "The battery and RF units got quite hot during both productions" (Costa, 2021), so give the backpack airflow. Shade the rig at every break.

**Focus.**

| What you see | What to suspect, and why | Fix |
|---|---|---|
| Autofocus jumps to the crowd | A shallow depth of field in front of a busy background. Fox has seen autofocus lock onto "the crowd in the background instead of the player in the foreground" (Mrozek, 2021) | Subject tracking, a smaller autofocus area, a slower subject switch, or a higher f-number (lesson 10) |
| Focus misses on fast players | At f/1.2 and 3 m, the zone in focus is about 0.26 m (lesson 3) | Shoot live action at f/2.8; save f/1.2 for moments you set up |

**The gimbal.**

| What you see | What to suspect, and why | Fix |
|---|---|---|
| Buzzing, shaking or vibration | Poor balance, or motor stiffness wrong for the load | Rebalance with every cable attached, then run Auto Tune. DJI: "increase the stiffness if the gimbal is not stable enough and ... lower the stiffness if the gimbal starts to shake" (DJI, 2024, p. 28) |
| Fine at 24mm, poor at 70mm | Zooming moves the lens's weight (lesson 14) | Balance at the focal length you use most |
| A cable tugs, or the lens hits the frame on a tilt | Cable routing, or a long lens | Short, flexible cables with slack; set tilt end points, since "Some longer lenses may hit the gimbal frame" (DJI, 2024, p. 47) |
| The camera suddenly spins to face you | Selfie mode from a triple tap of the trigger (DJI, 2024, p. 26) | Turn on Disable Selfie before the show (DJI, 2024, p. 30) |
| The gimbal dies mid-game | The runtime figure assumes a still gimbal: "When the gimbal is in motion, the operating time will be reduced" (DJI, n.d.-a) | Check the battery at every break; carry a charged spare grip |

:::reveal Your shot looks flat and gray in the truck but fine on your monitor. What is the likely cause? ||| The camera sends S-Log3 and only your monitor applies a LUT; agree with the shader who converts log.

:::reveal What does DJI say to do if the gimbal starts to shake? ||| Lower the motor stiffness; raise it if the gimbal is not stable enough (DJI, 2024, p. 28).

## Sources
- ${CYANVIEW_ALPHA} Locator: the white balance requirement, the note on Sony updates and the one-device rule.
- ${SONY_SPECS} Locator: "Operating temperature" entry.
- ${MROZEK_2021} Locator: the passages quoting Ligrani on batteries and on autofocus locking onto the crowd.
- ${COSTA_2021} Locator: the paragraph on the battery and RF units running hot.
- ${DJI_RS4_MANUAL} Locator: p. 26 (trigger taps), p. 28 (stiffness), p. 30 (Disable Selfie), p. 47 (tilt end points).
- ${DJI_RS4_PRO_SPECS} Locator: "Max runtime" entry and its note.`,
    },
    {
      slug: "power-audio-control-and-the-checklist",
      title: "28 · Power, audio, control and the pre-show checklist",
      section: "7 · Troubleshooting",
      recallContent: [
        {
          prompt: "What does Cyanview require of white balance for remote control?",
          answer: "Auto white balance tracking (ATW) off, with white balance in manual or color-temperature mode (Cyanview, n.d.-a).",
        },
        {
          prompt: "How do you stop a stray triple tap from spinning the camera to face you?",
          answer: "Turn on DJI's Disable Selfie setting before the show (DJI, 2024, p. 30).",
        },
      ],
      body: `> **Before release:** needs a practitioner: an experienced RF handheld operator, to check the pre-show checklist against working practice.

**Power.**

| What you see | What to suspect, and why | Fix |
|---|---|---|
| Everything reboots when you swap the main battery | Nothing bridges the gap between packs (lesson 8) | A plate that takes two packs, or the camera's own battery left inside as a bridge. Swap at a break |
| The camera turns off with a full V-mount | A wrong-voltage or loose dummy cable: the FX3's battery is rated 7.2 V (Sony, n.d.-b), and the pack is 14.8 V (Core SWX, n.d.-a) | Use a regulated D-Tap to NP-FZ100 cable (lesson 8) |
| Runtime far shorter than planned | Old packs, cold, a brighter monitor, extra devices | Measure the real draw and plan from it (worked example below) |
| The receiver dies mid-show | It runs on its own small battery | Put the receiver on mains power or a large battery with a spare |
| A battery is refused at the airport | Over 100 Wh without airline approval, or packed in checked bags | Spares go in carry-on only; 101 to 160 Wh need airline approval and are limited to two (Transportation Security Administration [TSA], n.d.) |

**A worked runtime estimate.** Treat this as a method, with its assumptions stated. The FX3 draws about 7.3 W (Sony, n.d.-b). A Cosmo C1 transmitter draws under 9 W (Hollyland, n.d.-a). Assume a monitor at about 10 W; measure yours. That is about 26 W. Assume you can use 80% of a 98 Wh pack, after age, cold and losses: about 78 Wh. So 78 ÷ 26 gives about 3 hours a pack. Swap in a broadcast transmitter like the HCAM, rated at 35 W maximum (VidOvation, n.d.), and the load passes 50 W, so the same pack lasts about 1.5 hours. A pack count is energy, not a swap plan.

**Audio.** No camera sound in the truck: check the meters on your monitor and on the receiver's output, make sure audio is going out over HDMI, and confirm the channel map with the A1. Wrong channels: the FX3 offers 4-channel LPCM only with the XLR handle or a compatible shoe accessory (Sony, n.d.-b), so agree the map.

**Control, tally and intercom.** The shader has lost control but the picture is fine: the control path is down, not the video (lesson 23). Fall back to manual exposure and tell the shader. No tally light: the rig needs an external tally box (Cyanview, n.d.-b), mapped to the switcher; ask the technical director to punch you up and watch. Cannot hear the director: check the beltpack's channel and battery, and use the hand signal you agreed with your utility.

**The pre-show checklist.**

*The night before.* Every battery charged and labeled, and a spare gimbal grip charged. Firmware written down for camera, transmitter, receiver, monitor, gimbal and control box, with nothing updated the night before a show. A settings card printed. A bench test of the whole chain, with a battery swap under load. Your device list, backups included, sent to the frequency coordinator (Price & Juniet, 2015). Rain cover, spare cables and spare antennas packed.

*At the venue.* Check in with the coordinator and set only the channel you are assigned (NFL Football Operations, n.d.). Put the receiver high with a clear view of your area, on mains power or a large battery (Teradek, 2024). Confirm the picture at the receiver, then at the truck. Confirm format and frame rate with the EIC. Balance the gimbal with every cable attached, at your working focal length.

*During the facilities check and the all-hands test.* Walk your whole route and mark dead spots (Price & Juniet, 2015, p. 7). Run the slate test. Shader match, tally test, intercom test, audio meters.

*Before air.* A fresh battery on the rig and the next two staged. Lens clean, ND set, white balance locked. Recording started if the show wants it.

*At every break.* Battery levels on rig, gimbal, receiver and beltpack; swap early. Heat check, and shade. A look at recorded focus.

*After the show.* Write the fault log while you remember it. Dry, clean and charge everything.

:::reveal Why must the D-Tap to NP-FZ100 cable be regulated? ||| The FX3's battery is rated 7.2 V and a 98 Wh V-mount pack is 14.8 V, about twice that.

:::reveal Where must spare lithium batteries go when you fly? ||| In carry-on only; batteries from 101 to 160 Wh need airline approval and are limited to two (TSA, n.d.).

## Sources
- ${SONY_SPECS} Locator: "Rated voltage," "Power consumption" and "Audio recording format" entries.
- ${CORE_SWX} Locator: specifications, voltage and capacity.
- ${HOLLYLAND_C1} Locator: specifications, power consumption.
- ${VIDOVATION} Locator: specifications, power consumption.
- ${TSA} Locator: the whole page (carry-on only; 101 to 160 Wh; limit of two).
- ${CYANVIEW_GIMBAL} Locator: the section on tally.
- ${PRICE_JUNIET_2015} Locator: the section on device lists; p. 7 (all-hands test).
- ${NFL_FREQ} Locator: the paragraphs on check-in and assigned frequencies.
- ${TERADEK_2024} Locator: the section on line of sight.`,
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz · Troubleshooting",
      section: "7 · Troubleshooting",
      body: "A graded check on the method for finding a fault, no picture and breakup, delay, color, heat, focus and gimbal faults, and power, audio, control and the pre-show checklist. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "How many points does lesson 25 list between the lens and the switcher?", options: ["Nine", "Twelve", "Three", "Five"], correctIndex: 0, explanation: "Lesson 25 lists nine points, from the camera's own screen to the switcher's preview.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Which point comes first in the chain?", options: ["The switcher's preview", "The camera's own screen", "The receiver's output", "The truck router's input"], correctIndex: 1, explanation: "Point 1 is the camera's own screen; point 9 is the switcher's preview.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Which point comes last in the chain?", options: ["The converter's output", "The camera's own screen", "The switcher's preview", "The transmitter's input light"], correctIndex: 2, explanation: "Point 9, the switcher's preview, is the last.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Where does the fault sit, using lesson 25's method?", options: ["Always in the truck's frame sync", "Wherever the director says it is", "Always inside the camera body", "Between the last good and first bad point"], correctIndex: 3, explanation: "Each point feeds the next, so the fault sits between the last good point and the first bad one.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "In which direction does lesson 25 say to walk the chain?", options: ["From the lens toward the switcher", "From the middle out in both ways", "In any order, as long as it is quick", "From the switcher back to the lens"], correctIndex: 0, explanation: "Start at the lens and walk toward the switcher; stop at the first point where the picture is wrong.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Why change only one thing at a time?", options: ["So the battery lasts much longer", "So you know which change fixed it", "Because the FCC requires one change", "Because cameras accept one setting"], correctIndex: 1, explanation: "If you change two things and it works, you do not know which fixed it, and the fault may return on air.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "What should you never do about interference at a coordinated venue?", options: ["Note it in the fault log", "Call the coordinator", "Scan for a new channel", "Report it on intercom"], correctIndex: 2, explanation: "\"Users should not scan for new frequencies or resolve the problem by themselves\" (Price & Juniet, 2015, p. 12).", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Why is picking your own new channel risky?", options: ["It doubles the link's delay", "It erases the camera's card", "It changes the frame rate", "It can land on someone else's"], correctIndex: 3, explanation: "A channel you pick can land on someone else's, and the NFL prohibits uncoordinated devices (lesson 20).", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Which points in the chain are on your rig?", options: ["Points 1 to 4", "Points 5 and 6", "Points 7 to 9", "Only point 9"], correctIndex: 0, explanation: "Points 1 to 4 are on your rig; 5 and 6 depend on who brought the link; 7 to 9 are in the truck.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Whose are points 5 and 6 when the RF vendor brought the link?", options: ["Yours", "The vendor's", "The league's", "The A1's"], correctIndex: 1, explanation: "Points 5 and 6 are yours if you brought the link, and the RF vendor's if they did.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Where are points 7 to 9?", options: ["At the network", "On your rig", "In the truck", "In the stands"], correctIndex: 2, explanation: "The router input, the frame sync output and the switcher preview are in the truck (lesson 22).", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Which three things does a good fault report on intercom say?", options: ["Your name, your camera, your phone number", "The score, the clock and the down", "The weather, the crowd and the time", "Last good point, first bad point, untouched"], correctIndex: 3, explanation: "Say the last good point, the first bad point, and what you have not touched.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Why is \"My camera's down\" a poor report?", options: ["It tells the engineer nothing useful", "It is too long for the intercom", "It breaks the league's radio rules", "It names the wrong camera number"], correctIndex: 0, explanation: "It gives no last good point or first bad point, so the engineer cannot act on it.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "The picture goes black right after you change a menu. What should you suspect first?", options: ["Rain on the receive antenna", "The change you just made", "The stadium's power supply", "A fault in the truck router"], correctIndex: 1, explanation: "Suspect the change: a camera setting can change the HDMI output (lesson 8).", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Which FX3 setting change can drop the HDMI output to 1080?", options: ["Turning on tally output", "Turning off the XLR handle", "Turning on Log shooting", "Turning on Sport Mode"], correctIndex: 2, explanation: "With Log shooting on, the HDMI output resolution becomes 1080 unless HDMI-only or RAW output (Sony, n.d.-c).", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "How do you put settings back after a bad menu change?", options: ["By guessing until it works", "By asking the RF coordinator", "By resetting to factory default", "From your written settings card"], correctIndex: 3, explanation: "Keep a written settings card (lesson 10) and put the settings back.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Why bench-test the whole chain before you travel?", options: ["A fault found at home costs an evening", "The league requires a bench certificate", "Batteries only charge on a bench", "It sets the link's legal channel"], correctIndex: 0, explanation: "A fault found at home costs an evening; at the venue it costs the facilities check, and on air it costs the shot.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "Camera screen fine, direct monitor black. What does lesson 26 suspect?", options: ["The coordinator's channel", "A format or loose HDMI plug", "A bad receiver antenna", "A frame sync in the truck"], correctIndex: 1, explanation: "The camera's HDMI is set to a format the monitor cannot take, or the plug is loose.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "Why does one loose plug end the show on an FX3?", options: ["It has two outputs that must agree", "Its plug carries power to the gimbal", "Its only video output is HDMI type A", "Its SDI port shares the same plug"], correctIndex: 2, explanation: "The FX3's only video output is an \"HDMI type A jack\" (Sony, n.d.-b).", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "What cable does lesson 26 recommend for the FX3's HDMI?", options: ["The longest cable in the kit, coiled", "A thin cable pulled tight to the cage", "Any cable, as long as it is new", "Locking or clamped, with strain relief"], correctIndex: 3, explanation: "Use a locking or clamped cable with strain relief.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "Monitor fine, transmitter shows no input. What should you suspect?", options: ["A format the TX rejects, or no converter power", "The receiver is too far away", "The truck's router is mispatched", "The shader has the wrong panel"], correctIndex: 0, explanation: "The transmitter does not accept the format, or the converter has no power.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "Why will a 4K60 signal not lock into a Bolt 6 LT over 3G-SDI?", options: ["Its SDI port is input-only", "It takes up to 1080p60 there", "It takes only 720p over SDI", "It needs 8K over 3G-SDI"], correctIndex: 1, explanation: "The Bolt 6 LT takes up to 1080p60 over 3G-SDI and 4K30 over HDMI (Teradek, n.d.-c).", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "Transmitter has input, receiver has no link. Which is not one of the suspects?", options: ["Different channels", "Receiver unpowered", "Wrong lens on the camera", "Not paired"], correctIndex: 2, explanation: "Lesson 26 suspects pairing, channels, receiver power and loose antennas; the lens does not affect the link.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "When should you pair transmitter and receiver?", options: ["On air, when the picture drops", "During the national anthem", "Only after the game has ended", "On the bench, before the show"], correctIndex: 3, explanation: "Pair on the bench before the show, and do not change channels at the venue without the coordinator.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "Receiver shows a picture but the truck sees black. Where is the fault likely?", options: ["Between receiver and truck input", "Inside the camera's sensor", "Inside the gimbal's motors", "In the transmitter's antenna"], correctIndex: 0, explanation: "Suspect a wrong router input, a bad cable run, or a format the truck does not expect.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "What can fix a truck input that will not lock to your feed?", options: ["A tally box", "Frame sync", "A new lens", "More battery"], correctIndex: 1, explanation: "Ask for frame sync if the input will not lock (lesson 22).", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "The link drops when you turn your back to the receiver. What is the cause?", options: ["The lens fogs up in the cold", "The battery voltage drops", "Your body blocks the line of sight", "The camera's fan stops running"], correctIndex: 2, explanation: "Your body or the crowd is in the path (lesson 19).", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "Which two moves help when the crowd blocks your link?", options: ["Raise transmit power or change channel", "Lower the frame rate and the bit depth", "Turn the antennas flat and point them up", "Raise the RX or add a second receive point"], correctIndex: 3, explanation: "Move the receiver higher, or ask for a second receive point; keep antennas vertical.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "Clean in rehearsal, breaks up when the stadium fills. What do you do?", options: ["Report it to the coordinator", "Pick a new channel yourself", "Turn the power up to full", "Ignore it until halftime"], correctIndex: 0, explanation: "Report it; the coordinator can assign a cleaner channel.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "When does Teradek's channel advice apply at a coordinated venue?", options: ["Never; it is forbidden", "Only inside what is assigned", "Whenever you feel like it", "Only during live play"], correctIndex: 1, explanation: "Picking a fixed low-interference channel applies only inside what the coordinator assigns.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "Breakup only near another crew's gear. What is the fix?", options: ["Use one shared antenna", "Turn off the other crew's gear", "Keep gear 3 ft apart, RX 18 in", "Stack all receivers together"], correctIndex: 2, explanation: "Teradek (2024): wireless gear at least 3 feet apart and receivers 18 inches apart.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "Breakup indoors near walls. What should you suspect?", options: ["A loose HDMI cable", "A dead tally box", "A wrong lens mount", "Reflections, called multipath"], correctIndex: 3, explanation: "Reflections (multipath); move the receiver a few feet and compare.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "What is the first move for multipath, per lesson 26?", options: ["Move the receiver a few feet", "Raise transmit power to maximum", "Switch the camera to RAW output", "Replace the camera's lens"], correctIndex: 0, explanation: "Move the receiver a few feet and compare; raising power can make multipath worse.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "The link breaks up in the rain. What helps?", options: ["A higher frame rate", "Rain cover and drip loops", "A faster memory card", "A brighter monitor"], correctIndex: 1, explanation: "A rain cover over the transmitter, drip loops on cables, and dry connectors.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "Why does a compressed link turn blocky on fast action?", options: ["The lens cannot focus that fast", "Tally lights flicker on action", "Fast detail is hardest to squeeze", "Fast action uses more battery"], correctIndex: 2, explanation: "A compressed link squeezes the picture to fit its channel, and fast detail is the hardest to squeeze.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "Why does the all-hands test come before the show?", options: ["The league needs your lens list", "It charges every battery at once", "It sets the camera's color look", "Some faults only show with every radio on"], correctIndex: 3, explanation: "Two of the breakup faults only show up with the venue full of radios (Price & Juniet, 2015, p. 7).", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "What should you note while walking your route in the all-hands test?", options: ["Every dead spot", "Every fan's seat", "Every price tag", "Every lens cap"], correctIndex: 0, explanation: "Walk your whole route during it, and note every dead spot.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "What backup can a small show keep for a failed link?", options: ["A cellular phone call to the TD", "A wired path through a converter", "A second stadium down the road", "A spare director in the truck"], correctIndex: 1, explanation: "The backup may be a wired path; lesson 30's middle build carries an HDMI-to-SDI converter for that.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "What should be agreed in advance about the backup?", options: ["How much the backup will cost later", "Which sponsor will pay for it", "What it is and who switches to it", "Which fan will hold the antenna"], correctIndex: 2, explanation: "Agree in advance what the backup is and who switches to it.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "Your shot is late on cuts. What two things should you suspect?", options: ["Lens weight plus gimbal mode", "Battery plus monitor brightness", "Tally plus intercom channel", "Link delay plus frame sync"], correctIndex: 3, explanation: "Suspect the link's delay plus the frame sync (lesson 18).", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "After the slate test, what are the two choices for a late camera?", options: ["A lower-delay link, or timed cuts", "A brighter lens, or a new gimbal", "A shorter cable, or a new battery", "A different show, or a new crew"], correctIndex: 0, explanation: "Choose a lower-delay link, or let the technical director time cuts around the number.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "Lips are out of sync on your camera's sound. What are the options?", options: ["Move the receiver into the truck", "A1 delays the sound, or skips it", "Speed up the camera's frame rate", "Turn off the tally box entirely"], correctIndex: 1, explanation: "The A1 can delay the sound to match, or the show can skip your audio.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "Skin and grass colors differ from the hard cameras. What should you suspect?", options: ["The receiver's antenna angle", "Too much gimbal stiffness", "Automatic white balance drifting", "A loose HDMI cable"], correctIndex: 2, explanation: "Automatic white balance drifting; lock white balance and let the shader match.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "Exposure pumps as you turn toward the sky. What is chasing the light?", options: ["The gimbal's Sport Mode", "The link's auto channel", "The tally box's sensor", "Automatic ISO or iris"], correctIndex: 3, explanation: "Automatic ISO or iris chases the light; use manual exposure or remote iris.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "The shader cannot reach a setting. What does lesson 27 point to?", options: ["Firmware changes the control protocol", "The lens is too heavy to control", "The receiver is out of range", "The tally box is not mapped"], correctIndex: 0, explanation: "\"The Sony mirrorless protocol changes with Sony updates\" (Cyanview, n.d.-a); keep firmware matched.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "What is Sony's operating range for the FX3?", options: ["-10 to 50 °C", "0 to 40 °C", "-20 to 45 °C", "10 to 30 °C"], correctIndex: 1, explanation: "Sony (n.d.-b): 0 to 40 °C. The -20 to 45 °C range is the RS 4 Pro's.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "What did Fox find helped with the camera overheating?", options: ["Turning the monitor up to full", "Wrapping the camera in black tape", "Getting the batteries out of the camera", "Recording at a much higher bit rate"], correctIndex: 2, explanation: "\"Getting the batteries out of the camera helped\" (Mrozek, 2021).", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "What did BaylorVision report about its backpack units?", options: ["\"froze solid\"", "\"never warmed\"", "\"lost their pairing\"", "\"got quite hot\""], correctIndex: 3, explanation: "\"The battery and RF units got quite hot during both productions\" (Costa, 2021).", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "What does lesson 27 say to do at every break on a hot day?", options: ["Shade the rig", "Swap the lens", "Change channel", "Update firmware"], correctIndex: 0, explanation: "Shade the rig at every break, run on external power and give the backpack airflow.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "Autofocus jumps to the crowd. Which fix comes from lesson 10?", options: ["A new channel and a taller stand", "Subject tracking and a smaller AF area", "A brighter monitor and a new cable", "A higher frame rate and more power"], correctIndex: 1, explanation: "Subject tracking, a smaller autofocus area, a slower subject switch, or a higher f-number.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "Focus misses on fast players. What f-stop does lesson 27 say to use for live action?", options: ["f/0.95", "f/1.2", "f/2.8", "f/16"], correctIndex: 2, explanation: "Shoot live action at f/2.8; save f/1.2 for moments you set up.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "About how deep is the zone in focus at f/1.2 and 3 m, per lesson 3?", options: ["About 2.6 m", "About 0.6 m", "About 26 m", "About 0.26 m"], correctIndex: 3, explanation: "Lesson 3's worked example: about 0.26 m at f/1.2 on full frame.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "The gimbal buzzes. What does lesson 27 say to do first?", options: ["Rebalance, then run Auto Tune", "Raise the link's transmit power", "Change to a heavier lens", "Turn on Sport Mode and hold"], correctIndex: 0, explanation: "Rebalance with every cable attached, then run Auto Tune.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "What does DJI say to do if the gimbal is not stable enough?", options: ["Lower the payload limit", "Increase the stiffness", "Remove the battery", "Turn on selfie mode"], correctIndex: 1, explanation: "DJI (2024, p. 28): increase the stiffness if the gimbal is not stable enough.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "Fine at 24mm, poor at 70mm. Why?", options: ["The camera overheats at 70mm", "Tally only works at 24mm", "Zooming moves the lens's weight", "The longer end blocks the radio"], correctIndex: 2, explanation: "Zooming moves the lens's weight (lesson 14); balance at the focal length you use most.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "A long lens hits the gimbal frame on a tilt. What DJI setting helps?", options: ["Sport Mode", "Disable Selfie", "Follow speed", "Tilt end points"], correctIndex: 3, explanation: "Set tilt end points, since \"Some longer lenses may hit the gimbal frame\" (DJI, 2024, p. 47).", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "The camera suddenly spins to face you on air. What happened?", options: ["A triple tap entered selfie mode", "The battery ran down to zero", "The link switched channel", "The shader took control"], correctIndex: 0, explanation: "Selfie mode from a triple tap of the trigger (DJI, 2024, p. 26); turn on Disable Selfie before the show.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "Why can the gimbal die mid-game despite a long rated runtime?", options: ["The rating counts two batteries", "The rating assumes a still gimbal", "The rating is for a lighter camera", "The rating is in minutes, not hours"], correctIndex: 1, explanation: "\"When the gimbal is in motion, the operating time will be reduced\" (DJI, n.d.-a).", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "Everything reboots when you swap the main battery. What is missing?", options: ["A brighter monitor", "A second lens", "Something to bridge the swap", "A faster memory card"], correctIndex: 2, explanation: "Nothing bridges the gap between packs; use a two-pack plate or leave the camera's own battery in.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "Which two bridges does lesson 28 name for a battery swap?", options: ["A longer cable or a bigger lens", "A second gimbal or a spare monitor", "A new channel or a tally box", "A two-pack plate or the internal battery"], correctIndex: 3, explanation: "A plate that takes two packs, or the camera's own battery left inside as a bridge.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "The camera turns off with a full V-mount. What should you suspect?", options: ["A wrong-voltage or loose dummy cable", "A dirty lens or a fogged filter", "A wrong channel on the link", "A missing tally box on the rig"], correctIndex: 0, explanation: "The FX3's battery is rated 7.2 V and the pack is 14.8 V, so suspect the dummy cable; use a regulated one.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "What voltage is the FX3's battery rated at?", options: ["3.7 V", "7.2 V", "14.8 V", "12 V"], correctIndex: 1, explanation: "Sony (n.d.-b): 7.2 V.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "What voltage is the Core SWX NANO X Micro 98 Wh pack?", options: ["5 V", "7.2 V", "14.8 V", "24 V"], correctIndex: 2, explanation: "Core SWX (n.d.-a): 14.8 V.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "The receiver dies mid-show. What does lesson 28 suggest?", options: ["A smaller battery to save weight", "Moving the receiver into the rain", "Turning the receiver off at breaks", "Mains power or a large battery"], correctIndex: 3, explanation: "Put the receiver on mains power or a large battery with a spare.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "Where must spare lithium batteries go when flying, per the TSA?", options: ["Carry-on only", "Checked bags only", "Either is fine", "Shipped ahead"], correctIndex: 0, explanation: "TSA (n.d.): spares go in carry-on only.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "What does the TSA require for spare batteries from 101 to 160 Wh?", options: ["They are banned on all flights", "Airline approval, limit of two", "Nothing beyond carry-on", "A doctor's note and a fee"], correctIndex: 1, explanation: "101 to 160 Wh need airline approval and are limited to two (TSA, n.d.).", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "In lesson 28's worked estimate, what share of a 98 Wh pack is assumed usable?", options: ["About 120%", "About 50%", "About 80%", "About 100%"], correctIndex: 2, explanation: "It assumes about 80% usable after age, cold and losses: about 78 Wh. It is stated as an assumption.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "In the worked estimate, about how long does one pack run a 26 W load?", options: ["About 6 hours", "About 13 hours", "About 1 hour", "About 3 hours"], correctIndex: 3, explanation: "78 Wh ÷ 26 W is about 3 hours.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "What maximum power does VidOvation list for the HCAM transmitter?", options: ["35 W", "98 W", "9 W", "18 W"], correctIndex: 0, explanation: "VidOvation (n.d.): 35 W maximum.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "What does Hollyland give as the Cosmo C1 transmitter's draw?", options: ["Under 1 W", "Under 9 W", "About 35 W", "About 60 W"], correctIndex: 1, explanation: "Hollyland (n.d.-a): under 9 W.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "With a 50 W-plus load, about how long does the same pack last?", options: ["About 15 minutes", "About 10 hours", "About 1.5 hours", "About 5 hours"], correctIndex: 2, explanation: "78 Wh ÷ about 52 W is about 1.5 hours.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "What does \"a pack count is energy, not a swap plan\" mean?", options: ["More packs always mean less weight", "Packs must be used in a fixed order", "Every pack must be the same brand", "Packs alone do not keep power continuous"], correctIndex: 3, explanation: "Enough energy does not prevent a reboot on a swap; something must bridge it (lesson 8).", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "No camera sound reaches the truck. What should you confirm with the A1?", options: ["The channel map", "The lens choice", "The gimbal mode", "The frame sync"], correctIndex: 0, explanation: "Check the meters, make sure audio goes out over HDMI, and confirm the channel map with the A1.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "When does the FX3 offer 4-channel LPCM?", options: ["Always, with no accessory at all", "With the XLR handle or a shoe accessory", "Only when recording to two cards", "Only in HDMI-only output mode"], correctIndex: 1, explanation: "Sony (n.d.-b): 4-channel LPCM only with the XLR handle or a compatible shoe accessory.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "How do you test tally, per lesson 28?", options: ["Point the camera at the scoreboard", "Unplug the HDMI and plug it back", "Ask the TD to punch you up and watch", "Turn the camera off and on again"], correctIndex: 2, explanation: "Ask the technical director to punch you up and watch for the light.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "Which of these belongs on the night-before checklist?", options: ["Pick a new channel", "Rebalance on air", "Update every firmware", "Write firmware down"], correctIndex: 3, explanation: "Write firmware down for every box, and update nothing the night before a show.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "What should go to the frequency coordinator before the show?", options: ["Your device list, backups included", "Your lens and filter list", "Your payroll and tax forms", "Your settings card and LUTs"], correctIndex: 0, explanation: "Send your device list, backups included (Price & Juniet, 2015).", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "At the venue, which channel should you set?", options: ["The one you used last season", "Only the one you are assigned", "The emptiest one you can find", "Whatever the link picks itself"], correctIndex: 1, explanation: "Check in with the coordinator and set only the channel you are assigned (NFL Football Operations, n.d.).", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "Where does lesson 28 say the receiver goes at the venue?", options: ["Inside your backpack, near the TX", "In the truck, far from the field", "High, with a clear view of your area", "Low, out of sight behind a bench"], correctIndex: 2, explanation: "Put the receiver high with a clear view of your area, on mains power or a large battery (Teradek, 2024).", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "Which checks belong in the facilities check and all-hands test?", options: ["Lens shopping and firmware updates", "Writing the fault log and charging", "Booking flights and packing cases", "Route walk, slate, shading, tally, comms"], correctIndex: 3, explanation: "Walk your route and mark dead spots; run the slate test; shader match, tally test, intercom test, audio meters.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "What should be staged before air, besides a fresh battery on the rig?", options: ["The next two batteries", "A second camera body", "A spare broadcast truck", "A new set of lenses"], correctIndex: 0, explanation: "A fresh battery on the rig and the next two staged.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "When should you swap batteries during a show?", options: ["Never during a show", "Early, at a break", "Late, when they die", "Only at halftime"], correctIndex: 1, explanation: "At every break, check levels on rig, gimbal, receiver and beltpack, and swap early.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "What should you do first after the show?", options: ["Sell the old lens", "Change the channel", "Write the fault log", "Update the firmware"], correctIndex: 2, explanation: "Write the fault log while you remember it; then dry, clean and charge everything.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "Why is lesson 28 marked for a practitioner before release?", options: ["It contains prices that must be re-read", "It quotes a league rule book in full", "It teaches gimbal modes without a source", "Its checklist needs a working operator's check"], correctIndex: 3, explanation: "The marker asks an experienced RF handheld operator to check the pre-show checklist against working practice.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "Which point in the chain shows the converter's work?", options: ["Point 3", "Point 8, the frame sync output", "Point 9, the switcher's preview", "Point 5, the receiver's link status"], correctIndex: 0, explanation: "Point 3 is the converter's output, if you use one (lesson 7).", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "What does lesson 25 call the picture's path from lens to switcher?", options: ["The league's broadcast rulebook", "The chain", "The truck's own frame synchronizer", "The coordinator's frequency plan"], correctIndex: 1, explanation: "Lesson 25 lays out the chain of nine points and walks it in order.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "What is the first check when the camera screen is fine but the direct monitor is black?", options: ["Rebalance the gimbal with all cables", "Raise the transmitter to full power", "A known-good cable", "Ask the coordinator for a new channel"], correctIndex: 2, explanation: "Plug a known-good short cable into a known-good monitor and read the format it reports.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "What does lesson 26 call reflections that cause breakup?", options: ["Overheating in the backpack", "Selfie mode on the gimbal", "Frame sync in the truck", "Multipath"], correctIndex: 3, explanation: "Reflections near walls or a big screen are called multipath.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "What should you lock to stop skin tones drifting between shots?", options: ["White balance", "The gimbal's pan axis on the handle", "The receiver's antenna on its stand", "The link's channel in its own menu"], correctIndex: 0, explanation: "Lock white balance in manual or color-temperature mode (Cyanview, n.d.-a).", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "Which DJI setting stops a stray triple tap from turning the camera around?", options: ["Tilt end points set in the app", "Disable Selfie", "Sport Mode held on the M button", "Auto Tune run on a flat surface"], correctIndex: 1, explanation: "Disable Selfie \"prevents accidentally entering selfie mode and interrupting recording\" (DJI, 2024, p. 30).", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "Which FX3 rating does a 14.8 V pack exceed?", options: ["The 715 g mass with battery", "The 4-channel audio limit", "7.2 V", "The 0 to 40 °C operating range"], correctIndex: 2, explanation: "The FX3's battery is rated 7.2 V (Sony, n.d.-b); the 14.8 V pack is about twice that, so the cable must be regulated.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 8: Builds and compromises
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "rent-before-you-buy",
      title: "29 · Rent before you buy",
      section: "8 · Builds and compromises",
      recallContent: [
        {
          prompt: "Why does a battery count not guarantee all-day power?",
          answer: "A pack count is energy, not a swap plan: swapping the main pack drops everything on it unless something bridges the gap.",
        },
        {
          prompt: "In lesson 28's worked estimate, about how long does a 98 Wh pack run a 26 W load?",
          answer: "About 3 hours, assuming about 78 Wh usable (78 ÷ 26).",
        },
      ],
      body: `${QR("a working camera operator or a rental-house technician, to re-read every price and rental rate on the date of release")}

**Prices, with their date.** Every price in this section was shown on the cited maker's, retailer's or rental house's page on October 21, 2026. Prices change; check them again before you spend anything. They leave out sales tax and delivery.

**What renting the core of a kit cost.** Lensrentals listed these rates on that day:

| Item | 3 days | 4 days | 7 days | Source |
|---|---|---|---|---|
| Sony FX3 A body | $155 | $167 | $222 | Lensrentals (n.d.-d) |
| DJI RS 4 Pro combo | $106 | $111 | $135 | Lensrentals (n.d.-e) |
| Teradek Bolt 6 LT 750 kit, transmitter and receiver | $142 | $152 | $203 | Lensrentals (n.d.-f) |
| Sigma 50mm f/1.2 DG DN Art | $59 | $63 | $84 | Lensrentals (n.d.-b) |
| Sony FE 24-70mm f/2.8 GM II | $79 | $85 | $113 | Lensrentals (n.d.-c) |
| **Total** | **$541** | **$578** | **$757** | this lesson's sum |

Lensrentals sells optional damage coverage, Lenscap, which limits what you owe to "the lesser of the cost to repair the equipment or 10% of the replacement cost" (Lensrentals, n.d.-g). Read the terms before you take a rig onto a field.

**One regional example.** A rental house in Indianapolis listed a Sony FX3 with XLR handle at $125 a day or $562.50 a week (Rental House by Roberts Camera, n.d.-b), a DJI RS4 Pro combo at $75 a day or $250 a week (Rental House by Roberts Camera, n.d.-a), and a Hollyland Pyro 7-inch wireless kit at $75 a day or $325 a week (Rental House by Roberts Camera, n.d.-c). Rates differ by market and by house. Treat these as one house's prices on one day, not as what rentals cost everywhere.

**The rent-or-buy sum.** Take the wireless link alone. Teradek listed the Bolt 6 LT 750 set at $2,390 (Teradek, n.d.-c). At $142 for a 3-day rental, $2,390 ÷ $142 is about 17 rentals before owning costs less. At $203 a week, it is about 12. Lesson 12 did the same sum for a fast lens: about 26 three-day rentals of the Sigma 50mm f/1.2 to match its price. If you need a part for a few shows a season, renting it for those shows may cost less than owning it.

**What to own and what to rent, part by part.** The sum gives the rule: own what you use almost every job, and rent what only some jobs need.

| Part | Lean toward owning when | Lean toward renting when |
|---|---|---|
| Camera body | You shoot most weeks, and you know its menus cold | A show asks for a body you rarely use, such as one with SDI out (lesson 7) |
| Working zoom | It is on the rig every game | You are still choosing between two (lesson 12) |
| f/1.2 prime | Shows ask for set pieces often | It is for a few set pieces a season |
| Gimbal | It carries your own balanced build every job | You are testing a payload before buying (lesson 14) |
| Wireless link | Your shows have no RF vendor | The show brings vendor RF, as network shows do (lesson 21) |
| Monitor | You work day games, where brightness matters (lesson 16) | You need a feature for one job only |

**Rent the exact combination before you buy it.** A payload rating does not prove that your cage, monitor and cables fit and clear the arms (lesson 14), and a price list cannot tell you how a lens's autofocus holds a running player (lesson 12). One rented game answers both.

**What this course leaves out.** Renting gear out to other people, as a business, is a different subject with its own course. This section is only about what the gear costs the person who uses it.

:::reveal About how many 3-day rentals of a Bolt 6 LT 750 kit equal its purchase price? ||| About 17: $2,390 ÷ $142.

:::reveal What did the 3-day Lensrentals total for the core kit come to on October 21, 2026? ||| $541, for an FX3 A body, an RS 4 Pro combo, a Bolt 6 LT 750 kit, a Sigma 50mm f/1.2 and a Sony 24-70mm GM II.

## Sources
- ${LENSRENTALS_FX3A} Locator: rental price table.
- ${LENSRENTALS_RS4PRO} Locator: rental price table.
- ${LENSRENTALS_BOLT} Locator: rental price table.
- ${LENSRENTALS_SIGMA_50} Locator: rental price table.
- ${LENSRENTALS_GM2} Locator: rental price table.
- ${LENSCAP} Locator: the paragraph limiting liability.
- ${RH_FX3} Locator: daily and weekly rates.
- ${RH_GIMBALS} Locator: the DJI RS4 Pro combo entry.
- ${RH_WIRELESS} Locator: the Hollyland Pyro 7-inch kit entry.
- ${TERADEK_LT} Locator: price on the product page.`,
    },
    {
      slug: "low-and-middle-builds",
      title: "30 · Two builds an operator can own",
      section: "8 · Builds and compromises",
      recallContent: [
        {
          prompt: "What does Lensrentals' Lenscap limit your liability to?",
          answer: "\"The lesser of the cost to repair the equipment or 10% of the replacement cost\" (Lensrentals, n.d.-g).",
        },
        {
          prompt: "What rule does lesson 29 give for owning against renting?",
          answer: "Own what you use almost every job, and rent what only some jobs need.",
        },
      ],
      body: `${QR("a working camera operator or a rental-house technician, to re-read every price on the date of release")}

**Two kits, priced on October 21, 2026.** Both are camera-side kits an operator could own. Neither includes the licensed broadcast RF that networks bring on major shows (lesson 31). Each total is this lesson's sum of the prices shown; items without a checked price are listed, not guessed.

**The low build: a Super 35 learning and small-show kit.**

| Part | Model | Price | Source |
|---|---|---|---|
| Camera | Sony FX30, body only | $2,098.00 | Focus Camera (n.d.-b) |
| Lens | Tamron 28-75mm f/2.8 G2 | $899.00 | Focus Camera (n.d.-f) |
| Gimbal | DJI RS 4 Combo, 3 kg tested payload | $609.00 | PROCAM (n.d.-a); DJI (n.d.-b) |
| Wireless | Hollyland Cosmo C2, one transmitter and one receiver, HDMI and 3G-SDI | $999.00 | Hollyland (n.d.-d) |
| Monitor | Portkeys LH5P II, 2000 nits (out of stock that day) | $399.00 | Portkeys (n.d.) |
| Cage | SmallRig cage for FX30 and FX3 | $89.00 | PROCAM (n.d.-c) |
| Batteries | 2 × Core SWX NANO X Micro 98 Wh | $396.00 | Core SWX (n.d.-a) |
| Charger | Core SWX travel dual charger | $158.00 | Core SWX (n.d.-b) |
| Camera power | Indipro regulated D-Tap to NP-FZ100 cable | $64.99 | Indipro Tools (n.d.) |
| Battery plate | SmallRig mini V-lock plate | $22.99 | PROCAM (n.d.-d) |
| Case | Pelican 1535 Air with padded dividers | $403.95 | Aircases (n.d.-a) |
| **Subtotal** | | **$6,138.93** | |

**What it can do, and what it cannot.** It suits school and college streams, corporate and documentary work, and learning to run a shallow-focus gimbal. It gives a weaker version of the look: lesson 3 showed that Super 35 holds about 1.5 times the depth of field of full frame at the same framing. And whether a show accepts a compressed link like the Cosmo C2 is the show's decision.

**The middle build: a full-frame FX3A kit with a zero-delay link.**

| Part | Model | Price | Source |
|---|---|---|---|
| Camera | Sony FX3A, with XLR handle, battery and charger | $4,298.00 | Focus Camera (n.d.-a); Samy's Camera (n.d.) |
| Working zoom | Sigma 24-70mm F2.8 DG DN II Art | $1,219.00 | Sigma Corporation of America (n.d.-a) |
| Fast prime | Sigma 50mm F1.2 DG DN Art | $1,539.00 | Sigma Corporation of America (n.d.-c) |
| Gimbal | DJI RS 4 Pro, 4.5 kg tested payload (out of stock at DJI's US store; listed by a retailer) | $869.00 | PROCAM (n.d.-b); DJI (n.d.-d) |
| Wireless | Teradek Bolt 6 LT 750 set, 3G-SDI and HDMI | $2,390.00 | Teradek (n.d.-c) |
| Monitor | Portkeys LH5P II (out of stock that day) | $399.00 | Portkeys (n.d.) |
| Batteries | 4 × Core SWX NANO X Micro 98 Wh | $792.00 | Core SWX (n.d.-a) |
| Charger | Core SWX travel dual charger | $158.00 | Core SWX (n.d.-b) |
| Camera power | Indipro regulated D-Tap to NP-FZ100 cable | $64.99 | Indipro Tools (n.d.) |
| Battery plate | Core SWX V-mount plate with clamp | $135.00 | Core SWX (n.d.-c) |
| Cage | Tilta full cage for FX3/FX30 V2 | $98.00 | Tilta (n.d.) |
| Wired backup | Blackmagic Micro Converter HDMI to SDI 3G with power supply | $85.00 | Blackmagic Design (n.d.) |
| Case | Pelican 1615 Air, wheeled, with padded dividers | $549.95 | Aircases (n.d.-b) |
| **Subtotal** | | **$12,596.94** | |

**Two variants.** MPB, a used-gear dealer, showed 11 used FX3 bodies from $3,549 to $3,929 (MPB, n.d.); with one of those in place of the new FX3A, the subtotal is $11,847.94 to $12,227.94. Without the Bolt, renting a link per job instead, it is $10,206.94.

**What the middle build can do.** The full-frame look; a zero-delay link with SDI out for regional, college, streaming and corporate shows; a director's monitor on film and documentary jobs; and a camera core that plugs into a network RF vendor's transmitter when the show supplies RF. It cannot, by itself, give licensed broadcast RF, remote shading or tally. Those take the added systems in lessons 23 and 24.

**Not priced in either build.** ND filters, memory cards, extra cables, a rain cover, and a stand and power for the receiver. Price them from your own shop before you total a budget.

:::reveal What did the middle build's priced parts total on October 21, 2026? ||| $12,596.94, before the unpriced items (filters, cards, cables, rain cover, receiver stand and power).

:::reveal Why does the low build give a weaker version of the look? ||| Its FX30 is Super 35, which holds about 1.5 times the depth of field of full frame at the same framing (lesson 3).

## Sources
- ${FOCUS_FX30} Locator: price on the product page.
- ${FOCUS_TAMRON} Locator: price on the product page.
- ${PROCAM_RS4} Locator: price on the product page.
- ${DJI_RS4_SPECS} Locator: "Tested payload" entry.
- ${HOLLYLAND_C2_STORE} Locator: price and kit contents.
- ${PORTKEYS} Locator: price and stock notice.
- ${PROCAM_CAGE} Locator: price on the product page.
- ${CORE_SWX} Locator: price on the product page.
- ${CORE_SWX_CHARGER} Locator: price on the product page.
- ${INDIPRO} Locator: price on the product page.
- ${PROCAM_PLATE} Locator: price on the product page.
- ${AIRCASES_1535} Locator: the padded-divider option and its price.
- ${FOCUS_FX3A} Locator: price and what is included.
- ${SAMYS} Locator: what is included with the ILME-FX3A.
- ${SIGMA_2470} Locator: instant savings price.
- ${SIGMA_50} Locator: price on the product page.
- ${PROCAM_RS4PRO} Locator: price on the product page.
- ${DJI_RS4_PRO_STORE} Locator: stock status.
- ${TERADEK_LT} Locator: price and stock notices.
- ${CORE_SWX_PLATE} Locator: price on the product page.
- ${TILTA} Locator: price on the product page.
- ${BLACKMAGIC} Locator: Micro Converter HDMI to SDI 3G with power supply, MSRP.
- ${AIRCASES_1615} Locator: the padded-divider option and its price.
- ${MPB} Locator: the listing count and price range.`,
    },
    {
      slug: "high-build-and-what-vendors-supply",
      title: "31 · The high build, and what vendors supply",
      section: "8 · Builds and compromises",
      recallContent: [
        {
          prompt: "Which camera does lesson 30's low build use, and what does it give up?",
          answer: "The Sony FX30, a Super 35 body; it gives a weaker look, with about 1.5 times the depth of field of full frame at the same framing.",
        },
        {
          prompt: "What did the used FX3 bodies at MPB cost on October 21, 2026?",
          answer: "$3,549 to $3,929, across 11 listings (MPB, n.d.).",
        },
      ],
      body: `${QR("a working camera operator or a rental-house technician, to re-read every price on the date of release")}

**The high build: an FX6 kit with a 12G link and its own frame sync.** Priced on October 21, 2026.

| Part | Model | Price | Source |
|---|---|---|---|
| Camera | Sony FX6: 12G-SDI, BNC timecode, no genlock | $7,298.00 | Focus Camera (n.d.-c); Allard (2020) |
| Working zoom | Sony FE 24-70mm f/2.8 GM II (used: $1,990.95) | $2,448.00 | Focus Camera (n.d.-e) |
| Fast prime | Sony FE 50mm f/1.2 GM (used: $1,865.95) | $2,298.00 | Focus Camera (n.d.-d) |
| Gimbal | DJI RS 4 Pro Combo (out of stock at DJI's US store) | $1,099.00 | DJI (n.d.-d) |
| Wireless | Teradek Bolt 6 XT 750 set, 4K60 10-bit 4:2:2 over 12G-SDI | $4,990.00 | Teradek (n.d.-d) |
| Monitor | SmallHD Ultra 5, 3000 nits, 3G-SDI and HDMI 2.0 | $2,249.00 | SmallHD (n.d.-b) |
| Frame sync | AJA FS-Mini, for shows with no truck frame sync | $989.00 | AJA Video Systems (n.d.) |
| Batteries | 6 × IDX IMICRO-98P 97 Wh, $239 each | $1,434.00 | IDX System Technology (n.d.) |
| Chargers | 2 × Core SWX travel dual charger | $316.00 | Core SWX (n.d.-b) |
| Battery plate | Core SWX V-mount plate with clamp | $135.00 | Core SWX (n.d.-c) |
| Cases | Pelican 1615 Air TrekPak ($594.95) and 1535 Air TrekPak ($449.95) | $1,044.90 | Aircases (n.d.-a, n.d.-b) |
| **Subtotal** | | **$24,300.90** | |

Not priced: an FX6 cage and plates, media, cables, a rain cover, and a stand and power for the receiver. Not included at all: remote shading. Cyanview's RIO Live is sold by quote, with no price on its page (Cyanview, n.d.-d).

**What the high build adds.** SDI straight from the camera, so no converter (lesson 7); BNC timecode; a 12G link that carries 4K60; a brighter monitor; and a frame synchronizer for shows that lack one. What it still does not add is genlock (the FX6 has none), licensed RF or shading. Those come from the show.

**Check the weight before you buy.** The FX6 body alone is 890 g (Allard, 2020). Add the GM II zoom, a cage, the monitor and the transmitter, and the total must fit the RS 4 Pro's 4.5 kg tested payload (DJI, n.d.-a), balance, and clear the arms. Rent the exact combination and weigh it, as lesson 14 said. A heavier rig is also harder to run with for a whole game.

**What the network's vendors supply.** None of the three builds includes these. On the shows in lesson 21, they came from the network and its vendors:

| Item | What it is | Price |
|---|---|---|
| Broadcast RF camera transmitter and receive system, such as the Vislink HCAM | HEVC, "Single frame" delay, 1.3 to 7.75 GHz (VidOvation, n.d.) | By quote (VidOvation, n.d.) |
| RF vendor package with a technician | CP Communications, BSI and Bexel supported the RF at the 2026 Field of Dreams game (Costa, 2026) | No published rates were found for this course |
| Remote shading | Cyanview RIO and RCP (Cyanview, n.d.-b) | By quote (Cyanview, n.d.-d) |
| Frequency authorization | Licensed broadcast channels go to TV stations and network entities (Eligibility for License, 2026) | Through the network or vendor (lesson 20) |

**Other parts that were on sale that day.**

| Part | Option | Price and note | Source |
|---|---|---|---|
| Body | Sony a7S III | $3,998.00 | Focus Camera (n.d.-g) |
| Body | Sony FX5 | $4,898.00 | PROCAM (n.d.-e) |
| Body | RED Komodo-X, RF mount, global shutter | $6,995.00, body; starter pack $8,995.00 | RED Digital Cinema (n.d.-b) |
| Camera and gimbal in one | DJI Ronin 4D-6K | $4,999, out of stock | DJI (n.d.-e) |
| Gimbal | DJI RS 5 | $569, but "not currently available for purchase in the United States" | DJI (n.d.-c) |
| Wireless | Hollyland Cosmo C1 | $549.00 (was $899), out of stock | Hollyland (n.d.-b) |
| Wireless | Hollyland Mars 4K kit | $399.00, sold out | Hollyland (n.d.-f) |
| Wireless | Hollyland Pyro Ultra, one TX and one RX | $1,199.00 | Hollyland (n.d.-g) |
| Wireless | Accsoon CineView Master 4K | $849.00 | Accsoon (n.d.-b) |
| Wireless | Accsoon CineView HE, HDMI only, no SDI | $369.00 | Accsoon (n.d.-a) |
| Wireless | DJI SDR Transmission combo | $469 | DJI (n.d.-g) |
| Wireless | Vaxis Storm 1000S | $2,999.00 new; $2,250 used set | Vaxis US (n.d.-a, n.d.-b) |
| Monitor | SmallHD Indie 5, 1000 nits, SDI and HDMI | $1,299.00 | SmallHD (n.d.-a) |
| Monitor-recorder | Atomos Ninja RAW 5-inch, 1500 nits | $699.00 | Focus Camera (n.d.-h) |

**A correction to carry.** An earlier draft quoted a used Vaxis Storm 1000S at about $1,600 and priced a Teradek Bolt 4K 12G-SDI kit as if it were current. On October 21, 2026, Vaxis listed a used set at $2,250 (Vaxis US, n.d.-b), and Teradek's Bolt 4K 12G-SDI 750 kit page showed "Sold Out" and pointed to the Bolt 6 (Teradek, n.d.-a). Kit lists go stale as fast as prices do.

:::reveal What does the high build still lack, even at $24,300.90? ||| Genlock (the FX6 has none), licensed broadcast RF and remote shading, which come from the show and its vendors.

:::reveal What did Teradek's Bolt 4K 12G-SDI 750 kit page show on October 21, 2026? ||| "Sold Out," pointing to the Bolt 6 (Teradek, n.d.-a).

## Sources
- ${FOCUS_FX6} Locator: price on the product page.
- ${ALLARD_2020} Locator: the specifications section (SDI, timecode, genlock, body weight).
- ${FOCUS_GM2} Locator: new and used prices.
- ${FOCUS_SONY_50} Locator: new and used prices.
- ${DJI_RS4_PRO_STORE} Locator: combo price and stock status.
- ${TERADEK_XT} Locator: price and the 12G-SDI specification.
- ${SMALLHD_ULTRA_5} Locator: price, brightness and inputs.
- ${AJA_FS_MINI} Locator: price.
- ${IDX} Locator: price and stock.
- ${CORE_SWX_CHARGER} Locator: price.
- ${CORE_SWX_PLATE} Locator: price.
- ${AIRCASES_1535} Locator: the TrekPak option and its price.
- ${AIRCASES_1615} Locator: the TrekPak option and its price.
- ${CYANVIEW_RIO} Locator: the request-a-quote notice.
- ${DJI_RS4_PRO_SPECS} Locator: "Tested payload" entry.
- ${VIDOVATION} Locator: specifications, and the request-a-quote notice.
- ${COSTA_2026} Locator: the paragraph on the RF vendors.
- ${CYANVIEW_GIMBAL} Locator: the RIO and RCP in the workflow.
- ${CFR_74_600} Locator: the list of eligible licensees.
- ${FOCUS_A7S3} Locator: price.
- ${PROCAM_FX5} Locator: price.
- ${RED_KOMODO_X} Locator: body price, stock and the starter pack price.
- ${DJI_RONIN_4D} Locator: price and stock status.
- ${DJI_RS5_STORE} Locator: price and the availability notice.
- ${HOLLYLAND_C1_STORE} Locator: price, former price and stock.
- ${HOLLYLAND_MARS_STORE} Locator: price and stock.
- ${HOLLYLAND_PYRO} Locator: price.
- ${ACCSOON_MASTER} Locator: price.
- ${ACCSOON_HE} Locator: price and outputs.
- ${DJI_SDR_STORE} Locator: combo price.
- ${VAXIS_NEW} Locator: price.
- ${VAXIS_USED} Locator: price.
- ${SMALLHD_INDIE_5} Locator: price, brightness and inputs.
- ${FOCUS_ATOMOS} Locator: price and brightness.
- ${TERADEK_BOLT4K} Locator: the stock notice and the pointer to Bolt 6.`,
    },
    {
      slug: "compromises-worth-making",
      title: "32 · Compromises worth making, and ones that are not",
      section: "8 · Builds and compromises",
      recallContent: [
        {
          prompt: "What did the high build's priced parts total, and which camera does it use?",
          answer: "$24,300.90, built around a Sony FX6.",
        },
        {
          prompt: "Name two things the network's vendors supply that none of the three builds includes.",
          answer: "Any two of: a broadcast RF transmitter and receive system, an RF vendor package with a technician, remote shading, and frequency authorization.",
        },
      ],
      body: `${QR("a working camera operator or a rental-house technician, to re-read every price on the date of release")}

**Every build is a set of trades.** Prices are from October 21, 2026, as in lessons 29 to 31. Savings are this lesson's arithmetic on those prices.

**Compromises worth making.**

| Compromise | Why it is worth it |
|---|---|
| Own the camera core; rent or partner for network RF | Network shows bring vendor RF, receive antennas and coordination (Costa, 2026; Hernández, 2026), and licensed channels sit under network authority (Eligibility for License, 2026). Broadcast RF bought before any show needs it sits on a shelf. |
| A compressed 5 GHz link for film, documentary, director's monitors and small streams | There the link is for watching, or the show accepts a few frames of delay. The Cosmo C2 at $999 saves $1,391 against the $2,390 Bolt 6 LT set; the Accsoon CineView Master 4K at $849 saves $1,541 (Hollyland, n.d.-d; Accsoon, n.d.-b; Teradek, n.d.-c). |
| An f/2.8 zoom as the working lens, an f/1.2 prime for set pieces | At 3 m, 50mm holds about 0.60 m in focus at f/2.8 and 0.26 m at f/1.2 (lesson 3); Fox's crews already work under 2 feet (Mrozek, 2021). |
| The Sigma 24-70mm DG DN II instead of the Sony GM II | It saves $1,229: $2,448 against $1,219 (Focus Camera, n.d.-e; Sigma Corporation of America, n.d.-a). Rent both for a game first; autofocus on moving players is the test. |
| A used FX3 from a dealer instead of a new FX3A | It saves $369 to $749 (MPB, n.d.). Check remote control first: Cyanview lists different minimum firmware for the FX3 and the FX3A (Cyanview, n.d.-a). |
| Batteries at or under 100 Wh | Spares fly in carry-on without airline approval; 101 to 160 Wh need approval and are limited to two (TSA, n.d.). More swaps, easier travel. |
| A Portkeys at 2000 nits instead of a SmallHD at 3000 | $399 against $2,249 (Portkeys, n.d.; SmallHD, n.d.-b). Accept a dimmer screen, and check stock first: the Portkeys was out of stock that day. |

**Compromises not worth making.**

| Compromise | Why not |
|---|---|
| A consumer link on a network sideline without the EIC's and coordinator's approval | The NFL prohibits uncoordinated devices and can revoke credentials (NFL Football Operations, n.d.). Unlicensed devices "must accept interference from authorized users" (Price & Juniet, 2015, p. 14). A crowd blocks the path (Teradek, 2024). One dropout on air costs the show more than the link saved. |
| Buying a link by its advertised range | Every range figure is line of sight (lesson 19); a sideline is not. |
| An unregulated D-Tap dummy cable | The FX3's battery is rated 7.2 V (Sony, n.d.-b), and a V-mount pack runs about twice that (lesson 8). A regulated cable cost $64.99 (Indipro Tools, n.d.). |
| Promising "all-day" power with no way to bridge a swap | A pack count is energy, not continuity (lesson 28). |
| Choosing a gimbal by payload alone | A payload rating does not prove balance or clearance with your cage, monitor and cables (lesson 14). |
| Standardizing on one gimbal maker with no parts plan | DJI's US store showed the RS 4 Pro out of stock and said the RS 5 is not for sale in the United States (DJI, n.d.-d; DJI, n.d.-c). Buy a spare grip and know the repair route. |
| Buying the high build before a show asks for SDI, 12G or a frame sync | Its priced parts come to about 1.9 times the middle build's ($24,300.90 against $12,596.94), and it still adds no licensed RF or shading. |
| A global-shutter body or a Ronin 4D as a first purchase | A global shutter mostly fixes skew on whip pans, which is rarely the limit on a sideline (lesson 6); the Komodo-X body alone was $6,995 (RED Digital Cinema, n.d.-b), and the Ronin 4D was out of stock (DJI, n.d.-e). |

**A correction to carry: "network-ready."** An earlier draft offered a "network-ready" kit totaling $8,710. The total does not add up. Its own item list sums to $8,210; adding its two cases gives $8,950; the $8,710 came from shrinking the power line from $940 to $700. And "network-ready" is not something a kit can be. Whether a show accepts your rig is the show's call, made by its engineers and its RF vendor (lesson 17).

**Where a consumer link is fine.**

| Use | Consumer or compressed link | Why |
|---|---|---|
| Film set: director's monitor, focus pulling | Fine | The picture is for watching; the recording is in the camera |
| Documentary, with a producer watching | Fine | Same reason |
| Corporate event on big room screens | Usually fine, if the room accepts the delay | 25 to 80 ms is 1.5 to 5 frames at 59.94 (lesson 18) |
| School or college stream | Often fine, with the producer's approval and a tested route | Check the venue's Wi-Fi and its coordinator |
| Network or league sideline | Only if the show's EIC and frequency coordinator accept it | League coordination rules, crowds in the path, and broadcast RF built for the job (NFL Football Operations, n.d.; Teradek, 2024; VidOvation, n.d.) |

**The rule this course ends on.** The look is standard; the parts are not (lesson 4). The same is true of a build. Start from what the show will accept, own what you use every week, rent the rest, and write the date beside every price.

:::reveal How much does the Sigma 24-70mm DG DN II save against the Sony GM II? ||| $1,229: $2,448 against $1,219 (October 21, 2026).

:::reveal Why is "network-ready" not a property of a kit? ||| Whether a show accepts a rig is the show's call, made by its engineers and its RF vendor.

## Sources
- ${COSTA_2026} Locator: the paragraph on the RF vendors.
- ${HERNANDEZ_2026} Locator: the paragraphs on the production's trucks and backup RF.
- ${CFR_74_600} Locator: the list of eligible licensees.
- ${HOLLYLAND_C2_STORE} Locator: price.
- ${ACCSOON_MASTER} Locator: price.
- ${TERADEK_LT} Locator: price.
- ${MROZEK_2021} Locator: the passage on working with under 2 feet of depth of field.
- ${FOCUS_GM2} Locator: price.
- ${SIGMA_2470} Locator: instant savings price.
- ${MPB} Locator: the price range.
- ${CYANVIEW_ALPHA} Locator: the firmware table.
- ${TSA} Locator: the whole page.
- ${PORTKEYS} Locator: price and stock.
- ${SMALLHD_ULTRA_5} Locator: price.
- ${NFL_FREQ} Locator: the paragraphs on prohibited devices and credentials.
- ${PRICE_JUNIET_2015} Locator: p. 14 (Part 15 summary).
- ${TERADEK_2024} Locator: the section on obstructions.
- ${SONY_SPECS} Locator: "Rated voltage" entry.
- ${INDIPRO} Locator: price.
- ${DJI_RS4_PRO_STORE} Locator: stock status.
- ${DJI_RS5_STORE} Locator: the availability notice.
- ${RED_KOMODO_X} Locator: body price.
- ${DJI_RONIN_4D} Locator: stock status.
- ${VIDOVATION} Locator: product overview.`,
    },
    {
      slug: "section-8-quiz",
      title: "Section 8 quiz · Builds and compromises",
      section: "8 · Builds and compromises",
      body: "A graded check on renting before buying, the low and middle builds, the high build and what vendors supply, and which compromises are worth making. Every price is as read on October 21, 2026. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "On what date were the prices in section 8 read?", options: ["December 20, 2020", "July 13, 2026", "January 1, 2026", "October 21, 2026"], correctIndex: 3, explanation: "Every price in the section was shown on the cited page on October 21, 2026.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "What do section 8's prices leave out?", options: ["Sales tax and delivery", "The camera body itself", "Every lens in the kit", "The used-market prices"], correctIndex: 0, explanation: "They leave out sales tax and delivery.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "What did Lensrentals charge for a 3-day FX3 A body rental?", options: ["$106", "$155", "$222", "$59"], correctIndex: 1, explanation: "Lensrentals (n.d.-d): $155 for 3 days, $222 for 7.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "What did Lensrentals charge for a 3-day DJI RS 4 Pro combo rental?", options: ["$79", "$167", "$106", "$142"], correctIndex: 2, explanation: "Lensrentals (n.d.-e): $106 for 3 days.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "What did Lensrentals charge for a 3-day Bolt 6 LT 750 kit rental?", options: ["$203", "$59", "$106", "$142"], correctIndex: 3, explanation: "Lensrentals (n.d.-f): $142 for 3 days, $203 for 7.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "What did the 3-day Lensrentals total for the core kit come to?", options: ["$541", "$757", "$578", "$2,390"], correctIndex: 0, explanation: "$155 + $106 + $142 + $59 + $79 = $541.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "What did the 7-day Lensrentals total for the core kit come to?", options: ["$578", "$757", "$1,000", "$541"], correctIndex: 1, explanation: "$222 + $135 + $203 + $84 + $113 = $757.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "What does Lenscap limit your liability to?", options: ["Nothing; you owe the full price of the item", "The rental fee, and not one dollar more", "Repair cost or 10% of replacement, whichever is less", "Half the replacement cost, whatever the damage"], correctIndex: 2, explanation: "\"The lesser of the cost to repair the equipment or 10% of the replacement cost\" (Lensrentals, n.d.-g).", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "Where is the rental house in lesson 29's regional example?", options: ["Los Angeles", "New York", "Chicago", "Indianapolis"], correctIndex: 3, explanation: "Rental House by Roberts Camera, in Indianapolis.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "What did that regional house list for an FX3 with XLR handle?", options: ["$125 a day or $562.50 a week", "$75 a day or $250 a week", "$155 for three days", "$2,390 to buy outright"], correctIndex: 0, explanation: "Rental House by Roberts Camera (n.d.-b): $125 a day or $562.50 a week.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "How should the regional rates be treated, per lesson 29?", options: ["As the national average", "As one house on one day", "As a price promise", "As the legal maximum"], correctIndex: 1, explanation: "Rates differ by market and by house; treat these as one house's prices on one day.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "About how many 3-day rentals of the Bolt 6 LT kit equal its $2,390 price?", options: ["About 7", "About 12", "About 17", "About 26"], correctIndex: 2, explanation: "$2,390 ÷ $142 is about 17.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "About how many weekly rentals of the Bolt 6 LT kit equal its price?", options: ["About 17", "About 26", "About 4", "About 12"], correctIndex: 3, explanation: "$2,390 ÷ $203 is about 12.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "What rule does lesson 29 draw from the rent-or-buy sums?", options: ["Own everyday parts; rent the rest", "Always buy every part brand new", "Always rent, never own anything", "Buy whatever is on sale that week"], correctIndex: 0, explanation: "Own what you use almost every job, and rent what only some jobs need.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "When does lesson 29 lean toward renting the wireless link?", options: ["When the stadium is very small", "When the show brings vendor RF", "When you shoot every single week", "When the link is the cheapest part"], correctIndex: 1, explanation: "Lean toward renting the link when the show brings vendor RF, as network shows do (lesson 21).", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "When does lesson 29 lean toward owning the camera body?", options: ["You need SDI out for a single job", "The body is on sale for one weekend", "You shoot most weeks and know its menus", "A show asks for a body you rarely use"], correctIndex: 2, explanation: "Own the body when you shoot most weeks and know its menus cold.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "Why rent the exact combination before buying it?", options: ["Rental houses require it before sales", "It makes the purchase tax-free", "It sets the link's legal channel", "It shows fit and autofocus in practice"], correctIndex: 3, explanation: "A payload rating does not prove fit and clearance, and a price list cannot show autofocus on a running player; one rented game answers both.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "Which subject does section 8 leave to its own course?", options: ["Renting gear out as a business", "Choosing between two zoom lenses", "Pricing a camera body to buy", "Renting a link for one show"], correctIndex: 0, explanation: "Renting gear out to other people, as a business, has its own course; this section covers only what gear costs its user.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "Which camera body does the low build use?", options: ["RED Komodo-X", "Sony FX30", "Sony FX3A", "Sony FX6"], correctIndex: 1, explanation: "The low build uses a Sony FX30, body only, at $2,098.00 (Focus Camera, n.d.-b).", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "What did the FX30 body cost on October 21, 2026?", options: ["$7,298.00", "$3,998.00", "$2,098.00", "$4,298.00"], correctIndex: 2, explanation: "Focus Camera (n.d.-b): $2,098.00.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "Which link does the low build use?", options: ["Teradek Bolt 6 XT", "Vislink HCAM", "Vaxis Storm 1000S", "Hollyland Cosmo C2"], correctIndex: 3, explanation: "A Hollyland Cosmo C2, one transmitter and one receiver, at $999.00 (Hollyland, n.d.-d).", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "Which gimbal does the low build use?", options: ["DJI RS 4 Combo", "DJI RS 4 Pro", "DJI Ronin 4D", "DJI RS 5"], correctIndex: 0, explanation: "A DJI RS 4 Combo, 3 kg tested payload, at $609.00 (PROCAM, n.d.-a).", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "What did the low build's priced parts total?", options: ["$8,710.00", "$6,138.93", "$12,596.94", "$24,300.90"], correctIndex: 1, explanation: "The low build's priced parts sum to $6,138.93.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "Why is the low build's look weaker than full frame's?", options: ["The Tamron lens cannot autofocus", "The Cosmo C2 drops the color", "Super 35 holds more depth of field", "The FX30 records only in 720p"], correctIndex: 2, explanation: "Super 35 holds about 1.5 times the depth of field of full frame at the same framing (lesson 3).", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "Who decides whether a show accepts the low build's Cosmo C2?", options: ["The maker", "The operator", "The retailer", "The show"], correctIndex: 3, explanation: "Whether a show accepts a compressed link is the show's decision.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "Which camera does the middle build use?", options: ["Sony FX3A", "Sony FX30", "Sony FX6", "Sony a7S III"], correctIndex: 0, explanation: "A Sony FX3A, with XLR handle, battery and charger, at $4,298.00.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "What comes with the FX3A in the middle build's listing?", options: ["A cage, plate and V-mount pack", "XLR handle, battery and charger", "A 24-70mm lens and a gimbal", "A wireless transmitter and RX"], correctIndex: 1, explanation: "Focus Camera (n.d.-a) and Samy's Camera (n.d.): XLR handle, battery and charger included.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "Which link does the middle build use?", options: ["DJI SDR Transmission", "Accsoon CineView HE", "Teradek Bolt 6 LT 750", "Hollyland Cosmo C2"], correctIndex: 2, explanation: "A Teradek Bolt 6 LT 750 set at $2,390.00 (Teradek, n.d.-c).", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "What did the middle build's priced parts total?", options: ["$13,556.94", "$24,300.90", "$6,138.93", "$12,596.94"], correctIndex: 3, explanation: "The middle build's priced parts sum to $12,596.94.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "What is the Blackmagic converter for in the middle build?", options: ["A wired backup path", "Charging batteries", "Shading the camera", "Holding the lens"], correctIndex: 0, explanation: "The Micro Converter HDMI to SDI 3G is listed as the wired backup path.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "What did MPB show for used FX3 bodies?", options: ["50 bodies at $2,098 each", "11 bodies from $3,549 to $3,929", "2 bodies at $4,298 each", "None in stock that day"], correctIndex: 1, explanation: "MPB (n.d.): 11 used FX3 bodies from $3,549 to $3,929.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "What is the middle build's subtotal without the Bolt?", options: ["$12,596.94", "$9,806.94", "$10,206.94", "$11,166.94"], correctIndex: 2, explanation: "$12,596.94 − $2,390 = $10,206.94.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "What can the middle build not give by itself?", options: ["The full-frame shallow look", "A zero-delay link with SDI", "A director's monitor feed", "Licensed RF, shading or tally"], correctIndex: 3, explanation: "It cannot, by itself, give licensed broadcast RF, remote shading or tally.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "Which of these is left unpriced in both builds?", options: ["ND filters and memory cards", "The camera body", "The gimbal", "The wireless link"], correctIndex: 0, explanation: "ND filters, memory cards, extra cables, a rain cover, and a receiver stand and power are listed, not guessed.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "Which monitor was out of stock on October 21, 2026?", options: ["Atomos Ninja RAW", "Portkeys LH5P II", "SmallHD Ultra 5", "SmallHD Indie 5"], correctIndex: 1, explanation: "The Portkeys LH5P II was out of stock that day (Portkeys, n.d.).", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "What did the RS 4 Pro show at DJI's own US store that day?", options: ["Discontinued", "Recalled", "Out of stock", "On sale"], correctIndex: 2, explanation: "Out of stock at DJI's US store, though a retailer listed it (DJI, n.d.-d; PROCAM, n.d.-b).", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "Which camera does the high build use?", options: ["Sony FX30", "Sony FX3A", "Sony FX5", "Sony FX6"], correctIndex: 3, explanation: "A Sony FX6 at $7,298.00 (Focus Camera, n.d.-c).", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What did the FX6 body cost on October 21, 2026?", options: ["$7,298.00", "$4,298.00", "$6,995.00", "$4,898.00"], correctIndex: 0, explanation: "Focus Camera (n.d.-c): $7,298.00.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "Which link does the high build use?", options: ["Accsoon CineView HE", "Teradek Bolt 6 XT 750", "Teradek Bolt 6 LT 750", "Hollyland Cosmo C2"], correctIndex: 1, explanation: "A Teradek Bolt 6 XT 750 set, 4K60 10-bit 4:2:2 over 12G-SDI, at $4,990.00 (Teradek, n.d.-d).", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What does the Bolt 6 XT carry over 12G-SDI?", options: ["720p60 only", "8K30 RAW", "4K60 10-bit 4:2:2", "1080p30 8-bit"], correctIndex: 2, explanation: "Teradek (n.d.-d): 4K60 10-bit 4:2:2 over 12G-SDI.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "Why does the high build carry an AJA FS-Mini?", options: ["To shade the camera from the field", "To charge six batteries at once", "To balance the gimbal by itself", "For shows with no truck frame sync"], correctIndex: 3, explanation: "The FS-Mini is listed for shows with no truck frame sync, at $989.00 (AJA Video Systems, n.d.).", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "Which monitor does the high build use?", options: ["SmallHD Ultra 5", "Portkeys LH5P II", "SmallHD Indie 5", "Atomos Ninja RAW"], correctIndex: 0, explanation: "A SmallHD Ultra 5, 3000 nits, at $2,249.00 (SmallHD, n.d.-b).", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What did the high build's priced parts total?", options: ["$18,000.00", "$24,300.90", "$25,700.90", "$12,596.94"], correctIndex: 1, explanation: "The high build's priced parts sum to $24,300.90.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "How is Cyanview's RIO Live priced, per its page?", options: ["$75 a day", "$2,249", "By quote", "$989"], correctIndex: 2, explanation: "Cyanview (n.d.-d): sold by quote, with no price on the page.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "Which of these does the high build still not add?", options: ["12G-SDI", "Timecode", "Frame sync", "Genlock"], correctIndex: 3, explanation: "The FX6 has no genlock; licensed RF and shading also come from the show.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What does the FX6 body alone weigh?", options: ["890 g", "715 g", "1.6 kg", "4.5 kg"], correctIndex: 0, explanation: "Allard (2020): 890 g, body alone.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What tested payload must the high build's full rig fit?", options: ["The case's 20 kg", "The RS 4 Pro's 4.5 kg", "The RS 4's 3 kg", "The FX6's 890 g"], correctIndex: 1, explanation: "The total must fit the RS 4 Pro's 4.5 kg tested payload (DJI, n.d.-a), balance and clear the arms.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "How is a broadcast RF system like the HCAM priced, per VidOvation?", options: ["$849", "$142 for 3 days", "By quote", "$4,990"], correctIndex: 2, explanation: "VidOvation (n.d.): by quote.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "Which vendors supported RF at the 2026 Field of Dreams game?", options: ["Teradek, Hollyland and Accsoon", "Sony, Sigma and Tamron", "Lensrentals and MPB", "CP Communications, BSI and Bexel"], correctIndex: 3, explanation: "Costa (2026): CP Communications, BSI and Bexel.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What did this course find about RF vendor package rates?", options: ["No published rates were found", "$75 a day everywhere", "$2,390 per show", "A fixed national rate"], correctIndex: 0, explanation: "No published rates were found for this course.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "How does a show get frequency authorization for licensed channels?", options: ["By buying a new link", "Through the network or vendor", "From the camera's maker", "From the rental house"], correctIndex: 1, explanation: "Licensed channels go to TV stations and network entities (Eligibility for License, 2026), so authorization comes through the network or vendor.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What did RED's store list for the Komodo-X RF mount body?", options: ["$11,995.00", "$4,999.00", "$6,995.00", "$8,995.00"], correctIndex: 2, explanation: "RED Digital Cinema (n.d.-b): $6,995.00 for the body; the starter pack was $8,995.00.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What did DJI's page say about the RS 5 in the United States?", options: ["On sale at half price this week", "Only sold with a Ronin 4D", "Available by quote only", "Not currently available for purchase"], correctIndex: 3, explanation: "DJI (n.d.-c): the RS 5 \"is not currently available for purchase in the United States.\"", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What did Hollyland list for the Cosmo C1 that day?", options: ["$549.00, was $899, out of stock", "$999.00, in stock, ships today", "$1,199.00, for TX and RX", "$399.00, sold out"], correctIndex: 0, explanation: "Hollyland (n.d.-b): $549.00 (was $899), out of stock.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What did Accsoon list for the CineView Master 4K?", options: ["$469.00", "$849.00", "$369.00", "$999.00"], correctIndex: 1, explanation: "Accsoon (n.d.-b): $849.00.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What is the Accsoon CineView HE's limit for broadcast use?", options: ["Audio only, no video", "Indoor use only", "HDMI only, no SDI", "SDI only, no HDMI"], correctIndex: 2, explanation: "Accsoon (n.d.-a): $369.00, HDMI only, no SDI.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What did Vaxis list for a used Storm 1000S set?", options: ["$1,600", "$2,999", "$1,490", "$2,250"], correctIndex: 3, explanation: "Vaxis US (n.d.-b): $2,250 used; $2,999 new. The draft's $1,600 was stale.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What did Teradek's Bolt 4K 12G-SDI 750 kit page show?", options: ["\"Sold Out,\" pointing to Bolt 6", "In stock at $4,990", "A new low price of $1,490", "Available by quote only"], correctIndex: 0, explanation: "Teradek (n.d.-a): \"Sold Out,\" pointing to the Bolt 6.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What lesson does the Vaxis and Bolt 4K correction teach?", options: ["Vaxis prices never change", "Kit lists go stale like prices", "Used gear is always cheaper", "Teradek no longer sells links"], correctIndex: 1, explanation: "Kit lists go stale as fast as prices do.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What did the Ronin 4D-6K show at DJI's store?", options: ["$1,099, in stock", "$869, at a retailer", "$4,999, out of stock", "$569, not sold in the US"], correctIndex: 2, explanation: "DJI (n.d.-e): $4,999, out of stock.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "Why own the camera core but rent or partner for network RF?", options: ["RF gear never wears out", "Cameras are cheap to rent", "The FCC bans owning RF", "Network shows bring vendor RF"], correctIndex: 3, explanation: "Network shows bring vendor RF, antennas and coordination, and licensed channels sit under network authority.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "How much does the Cosmo C2 save against the Bolt 6 LT set?", options: ["$1,391", "$1,541", "$1,229", "$749"], correctIndex: 0, explanation: "$2,390 − $999 = $1,391.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "How much does the CineView Master 4K save against the Bolt 6 LT set?", options: ["$1,391", "$1,541", "$1,850", "$369"], correctIndex: 1, explanation: "$2,390 − $849 = $1,541.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "Where is a compressed 5 GHz link a compromise worth making?", options: ["A licensed network stadium feed", "Anywhere, as long as range is high", "Film, documentary and small streams", "An NFL sideline without approval"], correctIndex: 2, explanation: "There the link is for watching, or the show accepts a few frames of delay.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "How much does the Sigma 24-70mm save against the Sony GM II?", options: ["$1,391", "$749", "$369", "$1,229"], correctIndex: 3, explanation: "$2,448 − $1,219 = $1,229.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "What is the test before choosing between the two 24-70mm zooms?", options: ["Autofocus on moving players", "Which box looks better", "Which one weighs the most", "Which brand the truck uses"], correctIndex: 0, explanation: "Rent both for a game first; autofocus on moving players is the test.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "How much does a used FX3 from MPB save against a new FX3A?", options: ["$2,000 to $3,000", "$369 to $749", "$1,229 to $1,541", "$50 to $100"], correctIndex: 1, explanation: "$4,298 − $3,929 = $369; $4,298 − $3,549 = $749.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "What should you check before buying a used FX3 instead of an FX3A?", options: ["That it ships in a Pelican case", "That it records 8K internally", "That remote control works on it", "That its lens cap is still on"], correctIndex: 2, explanation: "Cyanview lists different minimum firmware for the FX3 and the FX3A (Cyanview, n.d.-a).", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "Why keep batteries at or under 100 Wh?", options: ["They charge twice as fast as larger", "They are required by the FCC", "They power the gimbal for 13 hours", "Spares fly without airline approval"], correctIndex: 3, explanation: "Under 100 Wh, spares fly in carry-on without airline approval; 101 to 160 Wh need approval and are limited to two (TSA, n.d.).", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "What do the Portkeys and SmallHD Ultra 5 cost, side by side?", options: ["$399 against $2,249", "$1,299 against $699", "$849 against $999", "$89 against $98"], correctIndex: 0, explanation: "$399 (Portkeys, n.d.) against $2,249 (SmallHD, n.d.-b).", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "Why is a consumer link on a network sideline without approval not worth it?", options: ["Network shows never use wireless", "Uncoordinated devices are prohibited", "Consumer links cannot send video", "It is cheaper than vendor RF"], correctIndex: 1, explanation: "The NFL prohibits uncoordinated devices and can revoke credentials, and one dropout costs more than the link saved.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "Why is buying a link by its advertised range not worth it?", options: ["Range is set by the camera body", "Range is the same for every link", "Range figures are line of sight", "Range figures are always too low"], correctIndex: 2, explanation: "Every range figure is line of sight (lesson 19); a sideline is not.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "What did a regulated D-Tap dummy cable cost?", options: ["$22.99", "$135.00", "$158.00", "$64.99"], correctIndex: 3, explanation: "Indipro Tools (n.d.): $64.99.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "Why not choose a gimbal by payload alone?", options: ["Payload does not prove balance or fit", "Payload ratings are always too low", "Payload only matters for drones", "Payload is set by the lens maker"], correctIndex: 0, explanation: "A payload rating does not prove balance or clearance with your cage, monitor and cables (lesson 14).", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "Why plan spares before standardizing on one gimbal maker?", options: ["The league requires two brands", "Stock and US sales were uncertain", "Every gimbal breaks in a month", "Gimbals cannot be repaired at all"], correctIndex: 1, explanation: "DJI's US store showed the RS 4 Pro out of stock and said the RS 5 is not for sale in the US.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "About how many times the middle build's subtotal is the high build's?", options: ["About 3.5", "About 0.5", "About 1.9", "About 1.2"], correctIndex: 2, explanation: "$24,300.90 ÷ $12,596.94 is about 1.9.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "When is the high build worth buying, per lesson 32?", options: ["Before any show has asked for it", "When you want licensed RF included", "When you want shading included", "When a show asks for SDI, 12G or sync"], correctIndex: 3, explanation: "Buying it before a show asks for SDI, 12G or a frame sync is a compromise not worth making.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "Why not buy a global-shutter body as a first purchase?", options: ["It mostly fixes a rare sideline problem", "It cannot record in color at all", "It is too light for any gimbal", "It cannot output a live picture"], correctIndex: 0, explanation: "A global shutter mostly fixes skew on whip pans, rarely the limit on a sideline (lesson 6), and the Komodo-X body was $6,995.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "What does the draft's $8,210 item list show about its \"$8,710 network-ready\" kit?", options: ["The items were all used", "The total does not add up", "The kit was underpriced", "The kit was for film only"], correctIndex: 1, explanation: "The list sums to $8,210; with two cases $8,950; the $8,710 came from shrinking the power line.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "Why is \"network-ready\" not a property of a kit?", options: ["Only Sony kits qualify", "It is a registered brand", "The show decides what it accepts", "Networks accept every kit"], correctIndex: 2, explanation: "Whether a show accepts your rig is the show's call, made by its engineers and its RF vendor (lesson 17).", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "Is a consumer link fine for a film set's director's monitor?", options: ["Never", "Only at night", "Only in 4K", "Fine"], correctIndex: 3, explanation: "Fine: the picture is for watching, and the recording is in the camera.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "About how many frames is 25 to 80 ms at 59.94?", options: ["1.5 to 5 frames", "15 to 50 frames", "0.15 to 0.5 frames", "25 to 80 frames"], correctIndex: 0, explanation: "25 ÷ 16.7 is about 1.5; 80 ÷ 16.7 is about 5 (lesson 18).", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "When is a consumer link acceptable on a network or league sideline?", options: ["Never, under any circumstances", "Only if the EIC and coordinator accept it", "Whenever its range is over 1,000 ft", "Whenever the operator owns it outright"], correctIndex: 1, explanation: "Only if the show's EIC and frequency coordinator accept it; otherwise use the vendor's RF.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "What should you write beside every price, per lesson 32's closing rule?", options: ["The item's weight", "The seller's name", "The date you read it", "The store's address"], correctIndex: 2, explanation: "Start from what the show will accept, own what you use every week, rent the rest, and write the date beside every price.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "What did Lensrentals charge for a 3-day Sony 24-70mm GM II rental?", options: ["$155 for the camera body", "$142 for the wireless kit", "$106 for the gimbal combo", "$79"], correctIndex: 3, explanation: "Lensrentals (n.d.-c): $79 for 3 days, $113 for 7.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "What did the regional house list for a Hollyland Pyro 7-inch wireless kit?", options: ["$75 a day", "$142 for three days at Lensrentals", "$2,390 to buy from Teradek", "$1,199 to buy from Hollyland"], correctIndex: 0, explanation: "Rental House by Roberts Camera (n.d.-c): $75 a day or $325 a week.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "Which lens does the low build use?", options: ["Sony FE 50mm f/1.2 GM prime lens", "Tamron 28-75mm", "Sony FE 24-70mm f/2.8 GM II zoom", "Sigma 50mm F1.2 DG DN Art prime"], correctIndex: 1, explanation: "A Tamron 28-75mm f/2.8 G2 at $899.00 (Focus Camera, n.d.-f).", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "Which fast prime does the middle build use?", options: ["Sigma 35mm F1.2 DG II Art at $1,549", "Tamron 28-75mm f/2.8 G2 at $899", "Sigma 50mm F1.2", "Sony FE 50mm f/1.2 GM at $2,298"], correctIndex: 2, explanation: "A Sigma 50mm F1.2 DG DN Art at $1,539.00 (Sigma Corporation of America, n.d.-c).", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "How many IDX 97 Wh batteries does the high build carry?", options: ["Two packs, as in the low build", "Four packs, as in the middle build", "Ten packs, one per hour of the call", "Six"], correctIndex: 3, explanation: "6 × IDX IMICRO-98P 97 Wh at $239 each, $1,434.00 (IDX System Technology, n.d.).", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What did Focus Camera list for the Sony a7S III body?", options: ["$3,998.00", "$7,298.00 for the FX6 instead", "$4,898.00 for the FX5 instead", "$6,995.00 for the Komodo-X"], correctIndex: 0, explanation: "Focus Camera (n.d.-g): $3,998.00.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "Which part does lesson 32 say to own?", options: ["The truck's remote shading panel", "The camera core", "The network's licensed broadcast RF", "The vendor's receive antenna system"], correctIndex: 1, explanation: "Own the camera core; rent or partner for network RF.", sourceLessonSlug: "compromises-worth-making" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-quiz",
      title: "Final quiz · Cinema-look camera rig",
      section: "Final assessment",
      body: "Ten questions drawn from the whole course, from what the rig is to which compromises are worth making. Prices are as read on October 21, 2026. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          { prompt: "Which statement best describes the rig this course teaches?", options: ["A broadcast truck that carries replay servers", "A drone that films from above the end zone", "A recipe of parts that make a shallow-focus look", "A single camera model sold by one company"], correctIndex: 2, explanation: "Lesson 1: it is a recipe of parts (camera, lens, gimbal, monitor, power, link), not a product you can buy.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "What does Ligrani's \"$8k camera\" figure leave out?", options: ["The camera body and its lens", "The gimbal and the field monitor", "The battery backpack and cables", "The RF link, the extra crew and engineering"], correctIndex: 3, explanation: "Lesson 2: the transmission came from CP and the operator was an extra hire, so $8,000 covers the camera rig only.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "Why does a full-frame sensor make the shallow look easier than Super 35?", options: ["It needs a longer lens for the same framing", "It lets in less light at every f-stop", "It records at a higher bit depth", "It has a global shutter built in"], correctIndex: 0, explanation: "Lesson 3: a bigger sensor needs a longer lens for the same framing, and the longer lens gives a thinner zone in focus.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Which rule does lesson 4 draw from the networks' different rigs?", options: ["The look needs a DJI gimbal", "The look is standard; the parts are not", "Only Sony bodies can make the look", "Every network must use Fox's rig"], correctIndex: 1, explanation: "BaylorVision, CBS, ESPN, Turner and Netflix reached the same look with different parts.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "What is the FX3's main weakness on a live show?", options: ["No internal recording", "A weight over 2 kg", "One HDMI output and no genlock", "A small Super 35 sensor"], correctIndex: 2, explanation: "Lesson 5: the FX3 has a single HDMI output and no genlock input.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which problem does a global shutter not cure, per RED?", options: ["Skew on fast whip pans", "Wobble on run-and-gun shots", "Lean on a spinning ball", "Flicker under artificial light"], correctIndex: 3, explanation: "Lesson 6: \"neither shutter type fully addresses\" flicker in artificial light (RED Digital Cinema, n.d.-a).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What is the difference between timecode and genlock?", options: ["Timecode labels frames; genlock locks timing", "Timecode locks timing; genlock labels frames", "Both are names for the same signal", "Timecode is audio; genlock is video"], correctIndex: 0, explanation: "Lesson 7: timecode labels each frame for lining up recordings; genlock locks the picture's timing to the truck's reference.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "An FX3 is recording an 8-bit setting while feeding HDMI. What does the feed carry?", options: ["4K at 120p, always", "8-bit, following the record setting", "10-bit, whatever the setting", "RAW, locked to S-Log3"], correctIndex: 1, explanation: "Lesson 8: while recording, \"The color depth for the output movie is based on [Record Setting]\" (Sony, n.d.-c).", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "Why does a 24mm wide end matter on a sideline?", options: ["It doubles the depth of field at f/1.2", "It is required by the NFL's rule book", "You can frame a huddle without backing up", "It is the only length that can autofocus"], correctIndex: 2, explanation: "Lesson 9: 24mm frames more of a huddle from the same spot than 28mm, so you need not back into the people behind.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Which f-stop does the course advise for live action, and why?", options: ["f/1.2, for the thinnest possible zone", "f/16, to make everything sharp", "f/0.95, to gather the most light", "f/2.8, to keep a usable zone in focus"], correctIndex: 3, explanation: "Lesson 10: a fast player can leave the f/1.2 zone; shoot live action at f/2.8 and save f/1.2 for set pieces.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why is the \"Sigma Cine Pro 24-70mm T2.2\" treated as a correction?", options: ["Sigma's cine zoom page lists only the 24-35mm", "It was recalled by Sigma in 2024", "It does not fit the Sony E-mount", "It costs more than a broadcast truck"], correctIndex: 0, explanation: "Lesson 11: Sigma's full-frame cine zoom page lists only the 24-35mm T2.2, so treat the 24-70mm as nonexistent.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "Why must every price in this course carry a date?", options: ["Dates make the lessons shorter", "Prices change, and old ones travel far", "Retailers require it for a sale", "The FCC requires dated prices"], correctIndex: 1, explanation: "Lesson 12: old prices travel a long way online, so always write down the date you read a price.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What does a gimbal not cancel?", options: ["The tilt of a nodding operator", "The roll of a leaning operator", "The up-and-down bounce of footsteps", "The pan of a turning operator"], correctIndex: 2, explanation: "Lesson 13: the motors turn the camera but do not lift or lower it, so footstep bounce is the operator's walk.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "In DJI's Lock mode, which axes follow the grip?", options: ["Pan only", "Pan and tilt", "All three", "None"], correctIndex: 3, explanation: "Lesson 13: Lock mode is Custom with all three axes off, so nothing follows the grip (DJI, 2024, p. 34).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "In what order does DJI's manual have you balance the RS 4?", options: ["Vertical tilt, tilt depth, roll, pan", "Pan, roll, tilt depth, vertical tilt", "Roll, pan, vertical tilt, tilt depth", "Any order, as long as all four are done"], correctIndex: 0, explanation: "Lesson 14: \"the vertical tilt, the depth for the tilt axis, the roll axis and the pan axis in sequence\" (DJI, 2024, p. 14).", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Which hits its temperature limit first on a hot day, the FX3 or the RS 4 Pro?", options: ["Neither has a stated limit", "The FX3, rated to 40 °C", "The RS 4 Pro, rated to 30 °C", "Both fail at the same point"], correctIndex: 1, explanation: "Lesson 15: the FX3 runs 0 to 40 °C, the RS 4 Pro -20 to 45 °C.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "Under the NFL's 2026 rules, who alone may be inside the solid six-foot border while play is live?", options: ["Team trainers", "Credentialed media", "Game officials", "Camera operators"], correctIndex: 2, explanation: "Lesson 16: Rule 13, Section 1, Article 4 (NFL, 2026).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Which lesson 16 point does the qualified reviewer still need to supply?", options: ["What the NFL's border rule says", "Who may eject crews in MLB", "What the NCAA allows on dead balls", "How a utility spots the operator"], correctIndex: 3, explanation: "No fetched league, network or crew-safety source describes spotting, so the lesson keeps its marker.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Which link family specifies a single frame of delay with HEVC?", options: ["Broadcast RF, such as the HCAM", "Zero-delay film links", "Compressed consumer links", "Cellular 4G encoders"], correctIndex: 0, explanation: "Lesson 17: the Vislink HCAM lists \"Single frame\" delay with HEVC (VidOvation, n.d.).", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "What does Teradek's page say the \"4K\" Bolt 6 LT carries over 3G-SDI?", options: ["8K at 24p", "Up to 1080p60", "4K at 60p", "4K at 30p"], correctIndex: 1, explanation: "Lesson 17: up to 1080p60 over 3G-SDI; its 4K is 4K30, over HDMI (Teradek, n.d.-c).", sourceLessonSlug: "three-kinds-of-wireless-link" },
          { prompt: "A link adds 40 ms. About how many frames is that at 59.94?", options: ["About 4.0", "About 24", "About 2.4", "About 0.4"], correctIndex: 2, explanation: "Lesson 18: one frame is about 16.7 ms, and 40 ÷ 16.7 is about 2.4.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Why does a \"zero-delay\" link not make the whole chain zero?", options: ["The FCC adds a fixed delay", "Zero-delay links are analog", "The receiver adds a second", "The camera still takes time first"], correctIndex: 3, explanation: "Lesson 18: the label describes the radio; DJI's 35 ms against 80 ms shows the camera and screen add their own delay.", sourceLessonSlug: "delay-in-frames" },
          { prompt: "Why is a link's advertised range a poor guide on a sideline?", options: ["It assumes a clear line of sight", "It is measured underwater", "It counts only indoor use", "It ignores the battery size"], correctIndex: 0, explanation: "Lesson 19: range figures are line of sight, and crowds and the operator's body block it.", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "What does the venue white paper warn about raising transmit power?", options: ["It is required by law", "It can overload receivers", "It is the best first fix", "It shortens the delay"], correctIndex: 1, explanation: "Lesson 19: it can overload receivers and add multipath (Price & Juniet, 2015, p. 3).", sourceLessonSlug: "range-and-crowded-bands" },
          { prompt: "What must an unlicensed link accept, per the Part 15 summary in lesson 20?", options: ["A fixed channel from the league", "Inspection by the camera maker", "Interference from authorized users", "A license fee from the coordinator"], correctIndex: 2, explanation: "It \"must accept interference from authorized users\" (Price & Juniet, 2015, p. 14).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "How early should a device list reach the frequency coordinator?", options: ["The morning of the game", "During the first quarter", "Six months ahead, always", "Two to four weeks ahead"], correctIndex: 3, explanation: "Lesson 20: \"ideally two to four weeks in advance\" (Price & Juniet, 2015, p. 10).", sourceLessonSlug: "frequency-coordination-and-licenses" },
          { prompt: "On a national network show, what is the operator usually part of?", options: ["A team of vendors", "A one-person crew", "The league office", "The FCC's staff"], correctIndex: 0, explanation: "Lesson 21: on the network shows in the trade press, the camera was one part of a system several vendors supplied.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "Which of these does a video link carry?", options: ["A return program feed", "Picture and embedded sound", "Tally and intercom", "Camera control signals"], correctIndex: 1, explanation: "Lesson 21: the link carries the picture and its embedded sound; the rest are separate systems.", sourceLessonSlug: "who-owns-which-piece" },
          { prompt: "Who must accept your format before air?", options: ["The replay operator", "The league's officials", "The engineer in charge", "The frequency coordinator"], correctIndex: 2, explanation: "Lesson 22: the EIC accepts your format and brings your receiver's output into the truck.", sourceLessonSlug: "what-the-truck-does" },
          { prompt: "Why must only one device control a Sony Alpha camera for Cyanview?", options: ["The camera has only one lens", "Two controllers double the delay", "The FCC limits camera control", "Cyanview's page says only one may"], correctIndex: 3, explanation: "Lesson 23: only one device may control the camera, so turn off its Wi-Fi control and the gimbal's USB control (Cyanview, n.d.-a).", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "Who converts log on a show, per lesson 23?", options: ["One side, agreed in advance", "Both camera and truck", "Nobody; log airs as is", "The frequency coordinator"], correctIndex: 0, explanation: "Either the camera sends a finished look, or it sends log and the truck converts it. Never both.", sourceLessonSlug: "shading-and-color-match" },
          { prompt: "Why does a mirrorless camera on a gimbal need a tally box?", options: ["The link blocks its tally", "It has no tally output", "Its tally is too bright", "Tally is illegal on air"], correctIndex: 1, explanation: "Lesson 24: mirrorless cameras have no tally output (Cyanview, n.d.-b).", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "Which question to the engineer decides who owns exposure?", options: ["Who supplies the receiver?", "Should the camera record?", "Is the camera shaded from the truck?", "What is the exact frame rate?"], correctIndex: 2, explanation: "Lesson 24: whether the truck shades the camera decides who owns exposure.", sourceLessonSlug: "tally-comms-and-the-questions" },
          { prompt: "When troubleshooting the chain, where does the fault lie?", options: ["Always at the camera's HDMI jack", "Always in the truck's frame sync", "Wherever the director last looked", "Between the last good and first bad point"], correctIndex: 3, explanation: "Lesson 25: each point feeds the next, so the fault sits between the last good point and the first bad one.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "What should a fault report on intercom say?", options: ["Last good, first bad, untouched", "Name, camera and phone number", "The score and the game clock", "Which lens you are using"], correctIndex: 0, explanation: "Lesson 25: the last good point, the first bad point, and what you have not touched.", sourceLessonSlug: "find-the-last-point-that-works" },
          { prompt: "The link is clean in rehearsal but breaks up when the stands fill. What do you do?", options: ["Switch to 6 GHz quietly", "Report it to the coordinator", "Re-tune to an empty channel", "Raise power to maximum"], correctIndex: 1, explanation: "Lesson 26: report it; the coordinator can assign a cleaner channel.", sourceLessonSlug: "no-picture-and-breakup" },
          { prompt: "The truck sees a flat, gray picture but your monitor looks normal. What is likely?", options: ["The gimbal is out of balance", "The receiver is out of range", "S-Log3 out, with a LUT only on your monitor", "A loose HDMI cable at the camera"], correctIndex: 2, explanation: "Lesson 27: the camera sends log and only your monitor corrects it; agree who converts.", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "What does DJI say to do if the gimbal starts to shake?", options: ["Raise the payload", "Enter Sport Mode", "Turn off Auto Tune", "Lower the stiffness"], correctIndex: 3, explanation: "Lesson 27: \"lower the stiffness if the gimbal starts to shake\" (DJI, 2024, p. 28).", sourceLessonSlug: "delay-color-heat-focus-and-gimbal-faults" },
          { prompt: "Why must a D-Tap to FX3 dummy cable be regulated?", options: ["The pack's voltage is about twice the camera's", "Unregulated cables cannot carry video", "Regulated cables are lighter to carry", "The FCC requires regulated cables"], correctIndex: 0, explanation: "Lesson 28: the FX3's battery is rated 7.2 V and the V-mount pack 14.8 V.", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "Where do spare lithium batteries go when you fly?", options: ["Shipped by freight", "Carry-on only", "Checked bags only", "Either, if taped"], correctIndex: 1, explanation: "Lesson 28: spares go in carry-on only; 101 to 160 Wh need airline approval and are limited to two (TSA, n.d.).", sourceLessonSlug: "power-audio-control-and-the-checklist" },
          { prompt: "About how many 3-day rentals of the Bolt 6 LT kit equal its $2,390 price?", options: ["About 40", "About 100", "About 17", "About 5"], correctIndex: 2, explanation: "Lesson 29: $2,390 ÷ $142 is about 17.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "What rule does lesson 29 give for owning against renting?", options: ["Buy everything new, always", "Rent everything, always", "Buy the cheapest of each part", "Own everyday parts; rent the rest"], correctIndex: 3, explanation: "Own what you use almost every job, and rent what only some jobs need.", sourceLessonSlug: "rent-before-you-buy" },
          { prompt: "What did the middle build's priced parts total on October 21, 2026?", options: ["$12,596.94", "$6,138.93", "$24,300.90", "$8,710.00"], correctIndex: 0, explanation: "Lesson 30: $12,596.94, before the unpriced items.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "Which build uses a Super 35 body?", options: ["None of them", "The low build", "The middle build", "The high build"], correctIndex: 1, explanation: "Lesson 30: the low build uses the Sony FX30, a Super 35 body.", sourceLessonSlug: "low-and-middle-builds" },
          { prompt: "Which of these does none of the three builds include?", options: ["A working zoom", "A battery plate", "Licensed broadcast RF", "A camera body"], correctIndex: 2, explanation: "Lesson 31: licensed RF, an RF vendor package, remote shading and frequency authorization come from the network and its vendors.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "What does the high build's FX6 still lack?", options: ["SDI out", "Timecode", "Full frame", "Genlock"], correctIndex: 3, explanation: "Lesson 31: the FX6 has 12G-SDI and BNC timecode but no genlock.", sourceLessonSlug: "high-build-and-what-vendors-supply" },
          { prompt: "Why is \"network-ready\" not a property of a kit?", options: ["The show decides what it accepts", "Networks accept any kit at all", "Only one brand is ever allowed", "It is a registered product name"], correctIndex: 0, explanation: "Lesson 32: whether a show accepts a rig is the show's call, made by its engineers and RF vendor.", sourceLessonSlug: "compromises-worth-making" },
          { prompt: "Where is a compressed consumer link fine without question?", options: ["Any packed stadium on air", "A film set's director's monitor", "A league sideline, unapproved", "A licensed network feed"], correctIndex: 1, explanation: "Lesson 32: on a film set the picture is for watching, and the recording is in the camera.", sourceLessonSlug: "compromises-worth-making" },
        ],
      },
    },
  ],
};
