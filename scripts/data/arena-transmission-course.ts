import type { AuthoredCourse } from "./authored-course";

// "Arena transmission: how a game leaves the building" (Careers & Media, also listed in Sports and
// Trade Skills). Slug `arena-transmission`. Series `the-crew-behind-the-show` ("The Crew Behind the
// Show"), code CREW, position 05; CREW-01 is `stage-and-broadcast-rigging`, CREW-02 `sound-craft`,
// CREW-03 `light-on-set`, CREW-04 `cinema-look-camera-rig`. `broadcasting-break-in` stays outside the
// series and is the prerequisite (brief section 3).
//
// RESEARCH TIER 2 (brief section 3): fiber and laser safety, and heights. Section 6 carries the fiber
// and laser material: it states NO handling or safety rule the research pack cannot source, sets a
// labeled precaution in lesson 22 instead, and marks lesson 22 for a practitioner and a QR. Heights
// are not taught here; lesson 20 points to CREW-01's section 2, "Working at height."
// Brief:    cloud-briefs/crew-05/00-approved-brief.md (approved by BAM 2026-10-21: public, CREW-05,
//           held for a qualified reviewer; teach a league arena network in general, with the NBA's
//           High-Speed Arena Network as the cited worked example; name no team and no venue).
// Research: cloud-briefs/crew-05/research/ (fetched 2026-10-21). Only its V lines are asserted. Its I
//           lines appear only with their reasoning shown in the lesson. Its A lines are never taught.
//           Its third file, 03-research-check-answers.md, answers the 13 research checks session 1
//           filed. Session 2 (2026-10-22) applied every VERIFIED answer: IP definitions (L6, from
//           RFCs 791, 950, 1122, 1918, 4632, 768, 9293, 3550 and free training pages), multicast
//           definitions (L9, RFCs 1112, 2236, 3376, 4541, 4607, 7761), the lab switch's snooping (L8,
//           L11), SDI against ST 2110 (L12), SDP contents (L13), packet limits and buffer drops (L15)
//           and SMPTE dues (L16), each from SMPTE's free standards PDFs where the answer lives there.
//           REPORTED and STILL OPEN answers stay hedged, their checks open.
//           Citation letters were re-sorted when sources merged: SMPTE's FAQ is now (2025b) beside
//           ST 2110-30 (2025a); SMPTE's n.d. pages run EMIP (a), membership (b), practical lab (c),
//           Understanding ST 2110 (d); Professor Messer's course index is (n.d.-c) among four videos.
//
// NO TEAM AND NO VENUE (brief section 7). Where a source names arenas, the lesson gives a count. One
// cited job posting carries an arena's name in its title and its URL; its reference cuts the title
// before the name and points to the league's careers site with the requisition number instead.
//
// BUILD STATUS: complete to the brief's outline, 27 teaching lessons in 7 sections plus a final quiz.
// Session 1 wrote sections 1 to 4 (the map; IP for broadcast crew; multicast; video over IP). Session
// 2 (2026-10-22) wrote sections 5 to 7 (timing and redundancy; fiber and the physical layer;
// monitoring and fault isolation under a clock, ending in a mock game night) and the final, from the
// research pack's topics 5 to 8. Every factual sentence in them cites the pack; the check-in
// checklist, the source/transport/receiver sort, the six-part status update and the report outline
// are labeled teaching frames.
//
// VISIBILITY: PUBLIC, and HELD ("Coming soon") until a NAMED qualified reviewer, for example a
// broadcast network engineer or a league or truck engineer in charge, has read every lesson marked QR
// with authority to change or cut it. The publishHoldReason in scripts/seed-courses.ts says so.
// Practitioner demonstrations are recorded later and added as video lessons (brief section 7).
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line naming who must act.
//   QR: 11 (the multicast lab's expected results and its likely-causes table, reasoned from the
//   protocols), 14 (the codec behind the 250 Mbps figure is a reasoned guess), 17 (PTP grandmaster
//   failover and status readings, named but not defined by the sources), 18 (what a healthy linuxptp
//   log looks like), 23 (the practice check-in list and the three monitoring tools), 26 (the status
//   update, escalation and report outlines).
//   QR and practitioner: 22 (fiber handling and laser-safety rules; a demonstration on camera).
//   Unmarked: 1 to 10, 12, 13, 15, 16, 19, 20, 21, 24, 25, 27. Lessons 6, 9 and 13 lost their QR
//   lines when their definitions were sourced (session 2).
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source): every source here is Tier B,
// link only, never rehost: the league's own pages and job postings, AT&T's and the NBA's press
// releases, trade press (Sports Video Group, CNET via Yahoo Sports, TV Tech, Bull Source), SMPTE's
// public course pages and FAQ, vendor and retailer pages (MDL Communications, AIMS Alliance, NETGEAR,
// Raspberry Pi, Fiber Cables Direct, Fiber Instrument Sales, Clear-Com's manual), the FOA's Fiber U and
// CFOT pages, the linuxptp and SRT project pages, Professor Messer, Cisco Networking Academy and the
// Wireshark guide. The RFCs are
// published by the RFC Editor under the IETF Trust's terms; treat them as Tier B (link, quote short
// passages). SMPTE's free ST 2110 PDFs are marked "All Rights Reserved": Tier B, never rehosted. IEEE
// 802.1Q is cited only as the standard that defines VLAN tagging (not read, not quoted). No figures
// are embedded.
//
// PRICES are the ones read on October 21, 2026, and every lesson that gives one says so.
//
// STANDARDS: unmapped for now (BACKLOG entry in scripts/check-standards-coverage.ts).
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts):
//  - L1: how local and national broadcasts differ on the map; what the truck, the venue's broadcast
//    staff and the rights holder own at an arena.
//  - L3: the network's third generation (no source found).
//  - L4: whether optical tracking data rides the league network.
//  - L11: the likely-causes table and the lab's expected results (crew05-multicast-definitions);
//    whether the GS308E acts as a querier (crew05-lab-switch-snooping).
//  - L14: the codec and picture format an arena hands to the network (the 250 Mbps puzzle); H.264
//    and HEVC as contribution codecs. The 2024 JPEG XS test and BT's 10:1 finding are REPORTED
//    context, taught with their sources named.
//  - L15: what a viewer sees when packets are lost (crew05-limits-exceeded).
//  - L7, L16: Cisco course hours and the next ST 2110 cohort (crew05-unchecked-course-details).
//  - L17: grandmaster selection and failover (crew05-ptp-grandmaster); lock, offset and jitter
//    (crew05-ptp-status-readings, also L18); genlock (crew05-genlock).
//  - L20 to L22: connector, cleaning, polarity and light-level text (crew05-fiber-handling); laser
//    safety (crew05-laser-safety); loss budgets (crew05-loss-budget); unpriced kit items
//    (crew05-fiber-kit-unpriced).
//  - L23: what the three monitoring tools show (crew05-monitoring-tools).
//  - L25: which Linux tool adds packet loss (crew05-traffic-shaping-tool).
//  - L23, L24, L26: the practice frames, for a practitioner's confirmation
//    (crew05-practice-procedures).
//
// House style, matching stage-and-broadcast-rigging-course.ts and cinema-look-camera-rig-course.ts:
// `section` on every lesson; flush-left single-line `:::reveal q ||| a`; recallContent from the second
// teaching lesson on, quizzing the lesson before; an APA 7 `## Sources` block on every teaching lesson
// with a locator on every entry; a quiz per section pooled to round(words / 35), clamped 40 to 100,
// serving 5, passing 80, shuffled. Option lengths are balanced within each question. American
// spelling in prose; quotations keep their own spelling. No em or en dashes anywhere.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const RETRIEVED = "Retrieved October 21, 2026, from";

// The league network
const ATT_2026 =
  "AT&T. (2026, October 19). *AT&T, NBA and WNBA launch next-generation network built for the future of basketball* [Press release]. PR Newswire. https://www.prnewswire.com/news-releases/att-nba-and-wnba-launch-next-generation-network-built-for-the-future-of-basketball-302912017.html";
const NBA_2026A =
  "National Basketball Association. (2026a, October 19). *AT&T, NBA and WNBA launch next-generation network built for the future of basketball*. NBA Communications. https://pr.nba.com/att-nba-wnba-network";
const CARLSON_2026 =
  "Carlson, J. (2026, October 19). *NBA arenas get a massive AT&T network upgrade to boost fan experiences*. Yahoo Sports (originally published by CNET). https://sports.yahoo.com/articles/nba-arenas-massive-t-network-120000155.html";
const BULL_SOURCE = `Bull Source. (2026). *NBA arenas get a massive AT&T network upgrade to boost fan experiences*. ${RETRIEVED} https://bullsource.com/technology/nba-arenas-get-a-massive-att-network-upgrade-to-boost-fan-experiences/`;
const DACHMAN_2014 =
  "Dachman, J. (2014, October 28). *NBA season tip-off: New Replay Center set to revolutionize officiating, video ops*. Sports Video Group. https://www.sportsvideo.org/2014/10/28/nba-season-tip-off-new-replay-center-set-to-revolutionize-officiating-video-ops/";
const DACHMAN_2023 =
  "Dachman, J. (2023, March 9). *NBA taps Sony's Hawk-Eye for data-tracking beginning with 2023-24 season*. Sports Video Group. https://www.sportsvideo.org/2023/03/09/nba-taps-sonys-hawk-eye-for-data-tracking-beginning-with-2023-24-season/";
const NBA_2023 =
  "National Basketball Association. (2023, March 9). *NBA and Sony's Hawk-Eye Innovations launch strategic partnership powering next generation tracking technology*. NBA Communications. https://pr.nba.com/nba-sony-hawk-eye-innovations-partnership/";
const DALEY_2025 =
  "Daley, D. (2025, November 18). *NBA debuts new comms infrastructure and systems for referees*. Sports Video Group. https://www.sportsvideo.org/2025/11/18/nba-debuts-new-comms-infrastructure-and-systems-for-referees/";
const NBA_REPLAY = `National Basketball Association. (n.d.-a). *Replay Center*. NBA Official. ${RETRIEVED} https://official.nba.com/replay/`;
const NBA_RULE_13 = `National Basketball Association. (n.d.-b). *Rule no. 13: Instant replay*. NBA Official. ${RETRIEVED} https://official.nba.com/rule-no-13-instant-replay/`;

// Job postings (all posted October 14, 2026)
const NBA_POST_SUPPORT =
  "National Basketball Association. (2026b, October 14). *Project employee, broadcast support engineer* [Job posting]. https://nba.wd108.myworkdayjobs.com/nbacareers/job/Secaucus-USA/Project-Employee--Broadcast-Support-Engineer_JR000634";
const NBA_POST_OFFICIATING =
  "National Basketball Association. (2026c, October 14). *Project employee, league technology representative, automated officiating* [Job posting; the posting's title continues with the name of the arena, which this course does not give]. NBA Careers, requisition JR001082. https://nba.wd108.myworkdayjobs.com/nbacareers";
const NBA_POST_TECH_MANAGER =
  "National Basketball Association. (2026d, October 14). *Technical manager, local media* [Job posting]. https://nba.wd108.myworkdayjobs.com/nbacareers/job/Secaucus-USA/Technical-Manager--Local-Media_JR000961";

// IP and multicast learning resources
const SMPTE_EMIP = `Society of Motion Picture and Television Engineers. (n.d.-a). *Essentials of Media over IP (EMIP)* [Virtual course]. ${RETRIEVED} https://www.smpte.org/virtual-course-essentials-of-media-over-ip-emip`;
const SMPTE_LAB = `Society of Motion Picture and Television Engineers. (n.d.-c). *ST 2110 practical lab* [Virtual course]. ${RETRIEVED} https://www.smpte.org/st2110-practical-lab`;
const SMPTE_UNDERSTANDING = `Society of Motion Picture and Television Engineers. (n.d.-d). *Understanding SMPTE ST 2110* [Virtual course]. ${RETRIEVED} https://www.smpte.org/virtual-course/st2110`;
const SMPTE_FAQ =
  "Society of Motion Picture and Television Engineers. (2025b, August 15). *SMPTE ST 2110 FAQ*. https://www.smpte.org/smpte-st-2110-faq";
const CISCO = `Cisco Networking Academy. (n.d.). *Networking basics* [Online course]. ${RETRIEVED} https://www.netacad.com/courses/networking-basics?courseLang=en-US`;
const MESSER = `Professor Messer. (n.d.-c). *N10-009 training course*. ${RETRIEVED} https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/`;
const RFC_4607 =
  "Holbrook, H., & Cain, B. (2006). *Source-specific multicast for IP* (RFC 4607). RFC Editor. https://www.rfc-editor.org/rfc/rfc4607.html";
const WIRESHARK = `Wireshark Foundation. (n.d.). *Wireshark user's guide* (Version 5.1.0). ${RETRIEVED} https://www.wireshark.org/docs/wsug_html/`;
const NETGEAR = `NETGEAR. (n.d.). *8-port Gigabit Ethernet Easy Smart Managed Essentials Switch (GS308E)*. ${RETRIEVED} https://www.netgear.com/business/wired/switches/easy-smart/gs308e/`;
const RASPBERRY_PI =
  "Raspberry Pi. (2026, October 1). *Price increases for 2GB Raspberry Pi 4 and Raspberry Pi 5*. https://www.raspberrypi.com/news/price-increases-for-2gb-raspberry-pi-4-and-raspberry-pi-5/";

// Video over IP
const MDL = `MDL Communications. (n.d.). *ST 2110 bandwidth calculator*. ${RETRIEVED} https://www.mdlcommunications.com/engineers-toolkit/st-2110-bandwidth-calculator/`;
const AIMS_2019 =
  "AIMS Alliance. (2019). *SMPTE ST 2110 using JPEG-XS* [Presentation slides]. https://aimsalliance.org/document/smpte-st-2110-using-jpeg-xs/";
const SIMPSON_2017 =
  "Simpson, W. (2017, November 15). *SMPTE ST 2110-10: A base to build on*. TV Tech. https://www.tvtechnology.com/news/smpte-st-211010-a-base-to-build-on";
const SIMPSON_2018 =
  "Simpson, W. (2018, February 9). *SMPTE ST 2110-21: Taming the torrents*. TV Tech. https://www.tvtechnology.com/opinions/smpte-st-211021-taming-the-torrents";

// Defining documents, read for the research-check answers (cloud-briefs/crew-05/research/
// 03-research-check-answers.md, fetched October 21, 2026). RFCs are Tier B (link, quote briefly);
// SMPTE's free standards PDFs are marked "All Rights Reserved," so also Tier B; IEEE 802.1Q is cited
// only as the standard that defines VLAN tagging, never quoted (it was not read).
const RFC_768 =
  "Postel, J. (1980). *User datagram protocol* (RFC 768). RFC Editor. https://www.rfc-editor.org/rfc/rfc768.html";
const RFC_791 =
  "Postel, J. (1981). *Internet protocol* (RFC 791). RFC Editor. https://www.rfc-editor.org/rfc/rfc791.html";
const RFC_950 =
  "Mogul, J., & Postel, J. (1985). *Internet standard subnetting procedure* (RFC 950). RFC Editor. https://www.rfc-editor.org/rfc/rfc950.html";
const RFC_1112 =
  "Deering, S. (1989). *Host extensions for IP multicasting* (RFC 1112). RFC Editor. https://www.rfc-editor.org/rfc/rfc1112.html";
const RFC_1122 =
  "Braden, R. (Ed.). (1989). *Requirements for Internet hosts: Communication layers* (RFC 1122). RFC Editor. https://www.rfc-editor.org/rfc/rfc1122.html";
const RFC_1918 =
  "Rekhter, Y., Moskowitz, B., Karrenberg, D., de Groot, G. J., & Lear, E. (1996). *Address allocation for private internets* (RFC 1918). RFC Editor. https://www.rfc-editor.org/rfc/rfc1918.html";
const RFC_2236 =
  "Fenner, W. (1997). *Internet group management protocol, version 2* (RFC 2236). RFC Editor. https://www.rfc-editor.org/rfc/rfc2236.html";
const RFC_3376 =
  "Cain, B., Deering, S., Kouvelas, I., Fenner, B., & Thyagarajan, A. (2002). *Internet group management protocol, version 3* (RFC 3376). RFC Editor. https://www.rfc-editor.org/rfc/rfc3376.html";
const RFC_3550 =
  "Schulzrinne, H., Casner, S., Frederick, R., & Jacobson, V. (2003). *RTP: A transport protocol for real-time applications* (RFC 3550). RFC Editor. https://www.rfc-editor.org/rfc/rfc3550.html";
const RFC_4541 =
  "Christensen, M., Kimball, K., & Solensky, F. (2006). *Considerations for Internet group management protocol (IGMP) and multicast listener discovery (MLD) snooping switches* (RFC 4541). RFC Editor. https://www.rfc-editor.org/rfc/rfc4541.html";
const RFC_4566 =
  "Handley, M., Jacobson, V., & Perkins, C. (2006). *SDP: Session description protocol* (RFC 4566). RFC Editor. https://www.rfc-editor.org/rfc/rfc4566.html";
const RFC_4632 =
  "Fuller, V., & Li, T. (2006). *Classless inter-domain routing (CIDR): The Internet address assignment and aggregation plan* (RFC 4632). RFC Editor. https://www.rfc-editor.org/rfc/rfc4632.html";
const RFC_5771 =
  "Cotton, M., Vegoda, L., & Meyer, D. (2010). *IANA guidelines for IPv4 multicast address assignments* (RFC 5771). RFC Editor. https://www.rfc-editor.org/rfc/rfc5771.html";
const RFC_7761 =
  "Fenner, B., Handley, M., Holbrook, H., Kouvelas, I., Parekh, R., Zhang, Z., & Zheng, L. (2016). *Protocol independent multicast - sparse mode (PIM-SM): Protocol specification (revised)* (RFC 7761). RFC Editor. https://www.rfc-editor.org/rfc/rfc7761.html";
const RFC_8866 =
  "Begen, A., Kyzivat, P., Perkins, C., & Handley, M. (2021). *SDP: Session description protocol* (RFC 8866). RFC Editor. https://www.rfc-editor.org/rfc/rfc8866.html";
const RFC_9293 =
  "Eddy, W. (Ed.). (2022). *Transmission control protocol (TCP)* (RFC 9293). RFC Editor. https://www.rfc-editor.org/rfc/rfc9293.html";
const IEEE_8021Q =
  "IEEE. (2022). *IEEE standard for local and metropolitan area networks: Bridges and bridged networks* (IEEE Std 802.1Q-2022). IEEE Standards Association. https://standards.ieee.org/ieee/802.1q/10323/";
const MERAKI = `Cisco Meraki. (n.d.). *Comparing layer 3 and layer 2 switches*. Cisco Meraki Documentation. ${RETRIEVED} https://documentation.meraki.com/MS/Layer_3_Switching/Comparing_Layer_3_and_Layer_2_Switches`;
const JUNIPER = `Juniper Networks. (n.d.). *802.1Q VLANs overview*. Junos OS documentation. ${RETRIEVED} https://www.juniper.net/documentation/us/en/software/junos/multicast-l2/topics/concept/interfaces-802-1q-vlans-overview.html`;
const MESSER_SUBNETS = `Professor Messer. (n.d.-a). *Calculating IPv4 subnets and hosts: CompTIA Network+ N10-009, 1.7* [Video]. ${RETRIEVED} https://www.professormesser.com/network-plus/n10-009/n10-009-video/calculating-ipv4-subnets-and-hosts-n10-009/`;
const MESSER_IP = `Professor Messer. (n.d.-b). *Introduction to IP: CompTIA Network+ N10-009, 1.4* [Video]. ${RETRIEVED} https://www.professormesser.com/network-plus/n10-009/n10-009-video/introduction-to-ip-n10-009/`;
const MESSER_OSI = `Professor Messer. (n.d.-d). *Understanding the OSI model: CompTIA Network+ N10-009, 1.1* [Video]. ${RETRIEVED} https://www.professormesser.com/network-plus/n10-009/n10-009-video/understanding-the-osi-model-n10-009/`;
const MESSER_VLANS = `Professor Messer. (n.d.-e). *VLANs and trunking: CompTIA Network+ N10-009, 2.2* [Video]. ${RETRIEVED} https://www.professormesser.com/network-plus/n10-009/n10-009-video/vlans-and-trunking-n10-009/`;
const CISCO_SNOOPING =
  "Cisco Systems. (2018, March 28). *IGMP snooping on the SG350 and SG550* (Document ID SMB5292). https://www.cisco.com/c/en/us/support/docs/smb/switches/cisco-350-series-managed-switches/smb5292-igmp-snooping-on-the-sg350-and-sg550.html";
const CISCO_MICROBURSTS =
  "Cisco Systems. (2017, January 19). *Monitor microbursts on Cisco Nexus 5600 platform and Cisco Nexus 6000 series switches* [White paper]. https://www.cisco.com/c/en/us/products/collateral/switches/nexus-5000-series-switches/white-paper-c11-733020.html";
const NETGEAR_DATASHEET =
  "NETGEAR. (2024). *Plus Gigabit Ethernet switches, 300 series: GS305E and GS308E* [Data sheet D-GS305E/GS308E-24May24]. https://www.downloads.netgear.com/files/GDC/GS308Ev4/GS305E_GS308E_DS.pdf";
const NETGEAR_MANUAL =
  "NETGEAR. (2026). *Gigabit Ethernet Easy Smart Managed Essentials Switch, model GS308Ev4: User manual* (202-12961-01). https://www.downloads.netgear.com/files/GDC/GS308Ev4/GS308Ev4_UM_EN.pdf";
const AMWA_IS05 = `Advanced Media Workflow Association. (n.d.). *AMWA IS-05 NMOS device connection management specification: Overview*. ${RETRIEVED} https://specs.amwa.tv/is-05/v1.1.2/Overview/`;
const SMPTE_OV299 =
  "Society of Motion Picture and Television Engineers. (2010). *24-bit digital audio format for SMPTE bit-serial interfaces at 1.5 Gb/s and 3 Gb/s: Roadmap for the 299 document suite* (SMPTE OV 299-0:2010). https://pub.smpte.org/pub/ov299-0/ov0299-0-2010.pdf";
const SMPTE_2110_22 =
  "Society of Motion Picture and Television Engineers. (2022a). *Professional media over managed IP networks: Constant bit-rate compressed video* (SMPTE ST 2110-22:2022). https://pub.smpte.org/pub/st2110-22/st2110-22-2022.pdf";
const SMPTE_2110_10 =
  "Society of Motion Picture and Television Engineers. (2022b). *Professional media over managed IP networks: System timing and definitions* (SMPTE ST 2110-10:2022). https://pub.smpte.org/pub/st2110-10/st2110-10-2022.pdf";
const SMPTE_2110_21 =
  "Society of Motion Picture and Television Engineers. (2022c). *Professional media over managed IP networks: Traffic shaping and delivery timing for video* (SMPTE ST 2110-21:2022). https://pub.smpte.org/pub/st2110-21/st2110-21-2022.pdf";
const SMPTE_2110_20 =
  "Society of Motion Picture and Television Engineers. (2022d). *Professional media over managed IP networks: Uncompressed active video* (SMPTE ST 2110-20:2022). https://pub.smpte.org/pub/st2110-20/st2110-20-2022.pdf";
const SMPTE_2110_40 =
  "Society of Motion Picture and Television Engineers. (2023). *Professional media over managed IP networks: SMPTE ST 291-1 ancillary data* (SMPTE ST 2110-40:2023). https://pub.smpte.org/pub/st2110-40/st2110-40-2023.pdf";
const SMPTE_2110_30 =
  "Society of Motion Picture and Television Engineers. (2025a). *Professional media over managed IP networks: PCM digital audio* (SMPTE ST 2110-30:2025). https://pub.smpte.org/pub/st2110-30/st2110-30-2025.pdf";
const SMPTE_MEMBERSHIP = `Society of Motion Picture and Television Engineers. (n.d.-b). *Membership overview: Individual*. ${RETRIEVED} https://portal.smpte.org/SMPTEPortal/SMPTEContent/Membership_Overview.aspx`;

// Codec context for lesson 14 (REPORTED: a league test reported by trade press, and a broadcaster's
// own lab white paper; taught with their sources named, never as the network's format)
const DACHMAN_2024 =
  "Dachman, J. (2024, July 19). *NBA Summer League is once again a breeding ground for tech innovation*. Sports Video Group. https://www.sportsvideo.org/2024/07/19/nba-summer-league-once-again-a-breeding-ground-for-tech-innovation/";
const BT_2022 =
  "BT. (2022). *Building a clearer picture of JPEG XS performance* [White paper]. British Telecommunications. https://www.mediaandbroadcast.bt.com/assets/documents/mb-jpeg-xs-whitepaper.pdf";
const JPEG_XS = `JPEG. (n.d.). *Overview of JPEG XS*. ${RETRIEVED} https://jpeg.org/jpegxs/`;

// Timing, redundancy, fiber and monitoring (sections 5 to 7; research pack 02, topics 5 to 8)
const LINUXPTP = `Network Time Foundation. (n.d.). *linuxptp*. ${RETRIEVED} https://linuxptp.nwtime.org/`;
const CLEARCOM = `Clear-Com. (n.d.). *ST 2022-7 seamless protection switching (red/blue redundant networks)*. In *Eclipse HX online manual*. ${RETRIEVED} https://clearcom.com/DownloadCenter/manuals/EclipseHX_EHX_Online_Manual/Content/Chapters/Eclipse%20EHX/Chapter17/ST%202022-7%20Seamless%20Protection%20Switching.htm`;
const FOA_CFOT = `Fiber Optic Association. (n.d.-a). *The Fiber Optic Association CFOT certification*. ${RETRIEVED} https://www.thefoa.org/cfot.htm`;
const FIBER_U = `Fiber Optic Association. (n.d.-b). *Fiber U: FOA online self-study programs*. ${RETRIEVED} https://fiberu.org/`;
const FCD_CLEANER = `Fiber Cables Direct. (n.d.). *Smart Click LC fiber optic connection cleaner* (FCDUS344). ${RETRIEVED} https://fibercablesdirect.com/fiber-optic-cleaners/344-one-click-lc-mu-fiber-optic-cleaner.html`;
const FIS_VFL = `Fiber Instrument Sales. (n.d.). *Visual fault locators*. ${RETRIEVED} https://www.fiberinstrumentsales.com/test-equipment/visual-fault-locators.html`;
const HAIVISION_SRT = `Haivision. (n.d.). *SRT* [Computer software]. GitHub. ${RETRIEVED} https://github.com/Haivision/srt`;

/** The marker every lesson needing a qualified reviewer opens with (authoring checklist, section 3). */
const QR = (who: string) => `> **Before release:** needs a qualified reviewer (QR): ${who}.`;

export const ARENA_TRANSMISSION_COURSE: AuthoredCourse = {
  title: "Arena transmission: how a game leaves the building",
  description:
    "For broadcast crew moving toward technical and transmission work, and for anyone who finished Break Into Sports & Media Broadcasting and wants to know what happens to a game's pictures after the truck. The course follows a live game's video, audio and data out of the arena. It starts with the map: who sends what to whom on game night, using the NBA's High-Speed Arena Network as a documented, cited example of a league arena network, including its 2026 fourth generation, its history, the replay center and tracking systems beside it, and the jobs the league posts to run it. Next come what those jobs ask you to know about IP networks and multicast, defined from the standards that define them, where to learn more for free, and how to build a home lab that is honest about its limits. Then video over IP: the parts of SMPTE ST 2110, how SDI maps onto them, how streams are described and connected, bandwidth math worked step by step, and packet size and pacing. The last three sections cover timing with PTP and two-path protection with ST 2022-7, fiber and the physical layer (where to learn it free, what certifies it, and a starter kit), and monitoring and fault isolation under a clock: feed check-in, sorting a fault into source, transport or receiver, seeing packet loss, status calls and reports, and a mock game night in a home lab. Every fact is cited, guesses are labeled as guesses, and no team or venue is named. Lessons that need a qualified reviewer before release say so at the top. The fifth course in The Crew Behind the Show series.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: The map
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-sends-what-on-game-night",
      title: "1 · Who sends what on game night",
      section: "1 · The map",
      body: `**What this course is for.** It is for broadcast crew who already know a production truck and want to move toward technical and transmission work. By the end of the whole course you should be able to trace a live game's video, audio and data from the arena to the world, explain how video travels over an IP network, read a bandwidth budget, find a fault under a clock, know where to learn fiber handling safely, and speak clearly on comms. Sections 1 to 4 cover the map, IP, multicast and video over IP; sections 5 to 7 cover timing and two-path protection, fiber, and finding faults under a clock.

**A league arena network, in general.** A league arena network is a private network, run by a carrier, that links every arena in a league to the league's own facilities (a replay center, data centers) and to its media partners. It carries video, audio, statistics and league data. That description comes from one well-documented network: the NBA's High-Speed Arena Network, called HSAN (AT&T, 2026; National Basketball Association [NBA], n.d.-a). This course did not research whether other leagues run networks of the same shape. So read HSAN as one documented example, not as how every league works.

**Who is on the map.** These parties appear in the sources:

| Party | What the sources say it does | Source |
|---|---|---|
| The league's media operations and technology group | Its technical managers handle contribution, routing, monitoring, transmission, master control and "HSAN connectivity" | NBA (2026d) |
| The league's Replay Center, in Secaucus, New Jersey | All 30 NBA arenas connect to it directly | NBA (n.d.-a) |
| The carrier | AT&T provides the connectivity and "monitors network performance through its Network Operations Center" | AT&T (2026) |
| Media partners | HSAN links the arenas to them | AT&T (2026) |

Three more parties belong on any game-night map: the production truck, the home venue's broadcast staff and the rights holder. This course has no source that says what each one owns at any arena. On your own map, mark them "to confirm," and ask.

**Local and national.** A full map would also show how a local broadcast differs from a national one. No source in this course's research covers that, so this lesson leaves it out.

**What the network carries.** HSAN carries live game video, replays, highlights, statistics, audio feeds, broadcast content, digital media content and "other mission-critical league data" (AT&T, 2026). It supports live broadcasts, alternate viewing experiences, radio, mobile content and in-arena entertainment (AT&T, 2026).

**Two rules for the whole course.**

1. **Touch only what you own.** The carrier provides the network and watches it from its operations center (AT&T, 2026). It is not yours to change. So on a real job you observe, ask and follow the employer's procedures. That means no packet captures, reboots, repatches or settings changes on live gear without the owner's go-ahead, and no photos of racks or screens without permission.
2. **A home lab is not the league's network.** Sections 2 to 7 suggest labs you can build at home. Label every recording and write-up "home lab," and never present it as output from a real network.

**Draw it.** Sketch the path: cameras, then the truck, then the arena's network equipment, then the Replay Center, data centers and media partners. Add return feeds and referee comms. Mark every part no source confirms as "to confirm."

:::reveal Who monitors HSAN's performance, and from where? ||| AT&T, the carrier, from its Network Operations Center (AT&T, 2026).

:::reveal Why does this course tell you to touch only what you own on a real job? ||| The carrier provides and monitors the network, so changes belong to its owner; you observe, ask and follow the employer's procedures.

## Sources
- ${ATT_2026} Locator: paragraphs describing HSAN, what it carries and supports, and AT&T's Network Operations Center.
- ${NBA_REPLAY} Locator: page text, the sentence on all 30 arenas connecting to the Replay Center.
- ${NBA_POST_TECH_MANAGER} Locator: "Responsibilities" list.`,
    },
    {
      slug: "the-worked-example",
      title: "2 · The worked example: a league arena network",
      section: "1 · The map",
      recallContent: [
        {
          prompt: "Which parties does lesson 1 put on the game-night map from its sources?",
          answer: "The league's media operations and technology group, the league's Replay Center, the carrier (AT&T, with its Network Operations Center) and media partners. The truck, the venue's broadcast staff and the rights holder are marked \"to confirm.\"",
        },
        {
          prompt: "What does lesson 1 say to do with a home lab recording?",
          answer: "Label it \"home lab\" and never present it as output from a real network.",
        },
      ],
      body: `**The backbone.** AT&T calls HSAN "the league's dedicated connectivity backbone." It links NBA arenas, production facilities, data centers and media partners (AT&T, 2026).

**The fourth generation.** On October 19, 2026, the NBA, the WNBA and AT&T announced the network's fourth generation. It rides on more than 68,000 miles of AT&T fiber and is designed for more than 118 concurrent, low-latency streams per game (NBA, 2026a; AT&T, 2026). "Low-latency" means little delay between the arena and the receiver.

**What changes at the arena.** CNET's report on the announcement lists what the new generation brings (Carlson, 2026):

- All-new networking equipment at the venues.
- About four times the bandwidth of the current setup.
- Fiber conduit into some venues from different directions, so no single cut takes the site down.
- Streams split across paths, for redundancy.

The report also says AT&T runs a dedicated engineering unit with 24/7 network telemetry, capacity modeling and automatic rerouting (Carlson, 2026). Telemetry is the network reporting on its own health, all the time. One WNBA arena is also named for the upgrade (Carlson, 2026).

**Why fiber from two directions.** Picture one trench of fiber into a building. A single backhoe in the wrong place cuts the whole site off. Bring a second route in from another direction, and one cut leaves the other path standing. That is the reasoning behind the report's words "so no single cut takes the site down."

**What the network already runs.** By 2025 the NBA had "expanded SMPTE ST 2110 workflows across its arenas," with "remote data centers connected via the league's HSAN network" (Daley, 2025). SMPTE ST 2110 is a family of standards whose parts cover video, audio, ancillary data and timing over IP networks (Society of Motion Picture and Television Engineers [SMPTE], 2025b). Section 4 takes it apart.

**What no source says.** No source breaks the 118 streams down by type: how many are cameras, how many are replays, how many are audio. And no source names the video format the network carries. Do not invent either. Section 4 shows what the numbers suggest, and labels it as a guess.

**What this means for the map.** The fourth generation adds a second kind of answer to "what happens if a fiber is cut": the site stays up, because the streams have another path. Section 5 covers how two paths work together.

:::reveal How many concurrent streams per game is the fourth-generation network designed for? ||| More than 118 concurrent, low-latency streams (NBA, 2026a; AT&T, 2026).

:::reveal Why does the new network bring fiber into some venues from different directions? ||| So no single cut takes the site down (Carlson, 2026).

## Sources
- ${ATT_2026} Locator: the "dedicated connectivity backbone" sentence; the 68,000 miles and 118 streams.
- ${NBA_2026A} Locator: opening paragraphs, the announcement, the fiber miles and the stream count.
- ${CARLSON_2026} Locator: the paragraphs on new equipment, bandwidth, conduit, split streams, the engineering unit and the WNBA arena.
- ${DALEY_2025} Locator: the paragraph on ST 2110 workflows and remote data centers.
- ${SMPTE_FAQ} Locator: the answer listing the parts of ST 2110.`,
    },
    {
      slug: "generations-and-the-timeline",
      title: "3 · Generations and the timeline",
      section: "1 · The map",
      recallContent: [
        {
          prompt: "Name two things the fourth-generation network brings to the arenas.",
          answer: "Any two of: all-new networking equipment, about four times the bandwidth, fiber conduit from different directions, and streams split across paths (Carlson, 2026).",
        },
        {
          prompt: "What do the sources NOT say about the 118 streams?",
          answer: "How they break down by type, and what video format the network carries.",
        },
      ],
      body: `**A network with a history.** HSAN is not new. Knowing its generations keeps you from repeating a wrong date, and tells you which network an arena job will meet.

| Generation | What is known | Source |
|---|---|---|
| First | Existed before 2014. The 2014 network was described as "66 times faster" than it, so an earlier one must have existed. | Dachman (2014) |
| Second (HSAN2, 2014) | A 10-gig, JPEG 2000-based private network built with Zayo. Zayo monitored it and controlled all alarms. Cisco supplied the control and routing gear. Every arena got two new equipment racks, including a Cisco router and firewall. Up to 12 camera feeds per arena at once, with nine primary angles from the production truck as the standard. | Dachman (2014) |
| Third | This course found no source. | None |
| Fourth (2026 onward) | AT&T; lesson 2 | AT&T (2026); Carlson (2026) |

The 2014 details are history. Read them as dated: twelve years later, most of them have likely changed.

**A correction to carry.** An earlier draft said the network "began in the 2014-15 season" and that AT&T built the 2014 network. Both are wrong. In 2014 the network was HSAN2, faster than an earlier HSAN, and it was built with Zayo (Dachman, 2014).

**The fourth generation's timeline.** Three dates, from the sources:

1. Installation starts "with the 2026-2027 season" (Carlson, 2026). Six arenas were named as the first install sites (Carlson, 2026).
2. "The official launch of the updated HSAN will happen in July 2027" (Carlson, 2026).
3. The network is designed for "basketball consumption during the 2027-28 NBA season" (NBA, 2026a; AT&T, 2026).

These are not in conflict. They are three stages of one plan: build during the 2026-27 season, switch on in July 2027 (the off-season), first full season 2027-28. An arena not among the first six has no published install date, so during 2026-27 it most likely still runs on the current network.

**Check where a story comes from.** A second site, Bull Source, repeats the CNET story's facts and quotes nearly word for word (Bull Source, 2026). That makes it a copy, not a second, independent source. Two links that say the same thing in the same words count as one.

**What the timeline means for a job.** Work that starts during 2026-27 probably meets the current network. An install-era job, with new equipment and new conduit going in (Carlson, 2026), needs different skills from an operations-era job, where feeds are checked in and watched on game nights (lesson 5). So the network's generation is a fair question to ask about any arena-side role.

:::reveal Who built the 2014 network, HSAN2? ||| It was built with Zayo, which monitored it and controlled all alarms; Cisco supplied the control and routing gear (Dachman, 2014).

:::reveal What are the three stages of the fourth generation's timeline? ||| Install from the 2026-27 season, official launch in July 2027, and the first full season in 2027-28.

## Sources
- ${DACHMAN_2014} Locator: the paragraphs on HSAN2: "66 times faster," Zayo, Cisco, the two racks and the camera feeds.
- ${CARLSON_2026} Locator: the paragraphs on installation, the first six arenas and the July 2027 launch.
- ${NBA_2026A} Locator: the sentence on the 2027-28 season.
- ${ATT_2026} Locator: the sentence on the 2027-28 season.
- ${BULL_SOURCE} Locator: whole article, compared with Carlson (2026).`,
    },
    {
      slug: "replay-tracking-and-referee-comms",
      title: "4 · Beside the network: replay, tracking and referee comms",
      section: "1 · The map",
      recallContent: [
        {
          prompt: "Is it true that the network began in the 2014-15 season and that AT&T built it?",
          answer: "No. In 2014 the network was HSAN2, faster than an earlier HSAN, and it was built with Zayo (Dachman, 2014).",
        },
        {
          prompt: "When is the fourth-generation network's official launch?",
          answer: "July 2027 (Carlson, 2026).",
        },
      ],
      body: `**Three league systems on game night.** Beside the network, three league systems work at every game: the Replay Center, optical tracking and referee comms. Each one is part of the map.

**The Replay Center.** All 30 NBA arenas connect directly to the NBA Replay Center in Secaucus, New Jersey. It has 94 HD monitors and 23 workstations: 15 Replay Operator stations and 8 Replay Manager stations (NBA, n.d.-a).

**When replay is used.** The league's Rule 13 lists the situations where instant replay may be used. On October 21, 2026, the current rule listed 16 triggers: 14 started by on-court officials and 2 started by the Replay Center official (NBA, n.d.-b). An earlier draft said "15." Count from the current rule, and say the date you counted.

**Optical tracking.** Since the 2023-24 season, Sony's Hawk-Eye 3D optical tracking follows each player and the ball "at sub-second latency" (NBA, 2023). The NBA named possible future automated calls on out-of-bounds and goaltending (NBA, 2023). Hawk-Eye's pose product "uses 12 cameras installed at each arena to capture 29 points on each player's body" (Dachman, 2023).

**Does tracking data ride the network?** No source says so. HSAN carries "other mission-critical league data" (AT&T, 2026). That is consistent with tracking data, but it does not show it. So this course does not say tracking data travels on HSAN.

**Referee comms.** Each arena has referee comms gear, a Riedel Bolero system: three antennas, a beltpack for each referee, and "a full-size Bolero for a technician" (Daley, 2025). An adapter links it to the replay center, the public-address system and the truck (Daley, 2025).

**What that tells you about staffing.** A station built for a technician means someone sits at it. So a league technician most likely works at each arena on game nights, at least for referee comms. That is a reasoned guess from the gear, not a staffing fact.

**Where these go on your map.** Add the Replay Center as a destination for every arena. Add tracking cameras and referee comms as systems inside the arena, with lines marked "to confirm" wherever no source says how they leave the building.

:::reveal How many instant replay triggers did Rule 13 list on October 21, 2026, and who starts them? ||| 16: 14 started by on-court officials and 2 by the Replay Center official (NBA, n.d.-b).

:::reveal Does any source say Hawk-Eye tracking data travels on HSAN? ||| No. HSAN carries "other mission-critical league data," which is consistent with it but does not show it.

## Sources
- ${NBA_REPLAY} Locator: page text, the arena connections and the monitor and workstation counts.
- ${NBA_RULE_13} Locator: the list of review triggers, counted on October 21, 2026.
- ${NBA_2023} Locator: the paragraphs on 3D tracking, "sub-second latency," and possible automated calls.
- ${DACHMAN_2023} Locator: the paragraph on the pose product's 12 cameras and 29 points.
- ${ATT_2026} Locator: the list of what HSAN carries.
- ${DALEY_2025} Locator: the paragraphs on the antennas, beltpacks, the technician's Bolero and the adapter.`,
    },
    {
      slug: "the-jobs-behind-the-network",
      title: "5 · The jobs behind the network",
      section: "1 · The map",
      recallContent: [
        {
          prompt: "How many HD monitors and workstations does the NBA Replay Center have?",
          answer: "94 HD monitors and 23 workstations: 15 Replay Operator and 8 Replay Manager stations (NBA, n.d.-a).",
        },
        {
          prompt: "How many cameras and body points does Hawk-Eye's pose product use?",
          answer: "\"12 cameras installed at each arena to capture 29 points on each player's body\" (Dachman, 2023).",
        },
      ],
      body: `**What the work really looks like.** The best public evidence of what this work involves is the league's own job postings. Three NBA postings, all posted October 14, 2026, describe arena-side and league-side network work. They show the duties. They do not show how any one arena is staffed.

| Posting | Where | Level and pay | What it asks for |
|---|---|---|---|
| Technical Manager, Local Media (NBA, 2026d) | Secaucus, in the office 5 days, with travel to arenas | Director level; $130,000 to $165,000; 8 to 10+ years | Leads freelance Technical Managers; contribution, routing, monitoring, transmission, master control, "HSAN connectivity"; incident response; runbooks; root cause analyses. Prefers ST 2110, NMOS, SRT, NDI, JPEG XS and multicast. |
| Project Employee, Broadcast Support Engineer (NBA, 2026b) | Secaucus "as well as at NBA arenas"; up to 10 months | $3,200 every two weeks; 2 to 5 years | Check in all inbound and outbound feeds; monitor with multiviewers, IP probes and video analyzers; troubleshoot hybrid routers, IP codecs and Layer 2/3 switches; multicast; timing and sync; RTSP, RTMP, SRT, UDP/TCP and RTP; technical reports; 24x7 shifts. |
| Project Employee, League Technology Representative, Automated Officiating (NBA, 2026c) | On site at one G League arena, on game days; up to 10 months | $200 per game day; 1 to 3 years | Pre-game setup to teardown; verify cameras and data flow; troubleshoot under time pressure; read and carry out deployment documents; cabling, connectivity and basic IT; work at heights. Linux and Python preferred. |

The Technical Manager posting is the only live one that names HSAN. The automated-officiating job is a sensor job, not network work, but it shows what an arena-side, per-game league job looks like.

**Two documents to know by name.** The Technical Manager posting asks for runbooks and root cause analyses (NBA, 2026d). Section 7 practices writing both.

**One that is not evidence.** A search also turned up another NBA engineering posting that described HSAN, but its page would not load. A search result is not the page itself, so this course does not quote it.

**What repeats.** Across the three postings, the same duties come back: checking feeds in and out; watching multiviewers and IP monitoring tools; troubleshooting IP-connected broadcast gear; multicast; timing; contribution protocols; written reports; escalation; and nights, weekends and holidays.

**What that means for this course.** Because the postings keep naming them, ST 2110, multicast and timing are core topics here, not extras. Network design, routing protocols and carrier work are not. The carrier owns and monitors the network (AT&T, 2026), so an arena-side role is unlikely to change it. This course teaches the work the postings describe.

:::reveal Which of the three postings is the only one that names HSAN? ||| Technical Manager, Local Media (NBA, 2026d).

:::reveal Why are ST 2110, multicast and timing core topics in this course? ||| The league's postings keep naming them as duties or preferred skills.

## Sources
- ${NBA_POST_TECH_MANAGER} Locator: "Responsibilities," "Qualifications" and the pay range.
- ${NBA_POST_SUPPORT} Locator: "Responsibilities," "Qualifications," location and pay.
- ${NBA_POST_OFFICIATING} Locator: "Responsibilities," "Qualifications," location and pay.
- ${ATT_2026} Locator: the sentence on AT&T providing and monitoring the network.`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · The map",
      section: "1 · The map",
      body: "A graded check on who sends what on game night, the league network used as this course's worked example, its generations and timeline, the replay, tracking and referee comms systems beside it, and the jobs that run it. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Who is this course written for?", options: ["Fans who want to watch games in the arena", "Players learning to read replay angles", "Truck-savvy crew moving into transmission", "Carriers designing a national network"], correctIndex: 2, explanation: "Lesson 1: the course is for broadcast crew who already know a production truck and want to move toward technical and transmission work.", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "What does a league arena network link, in general?", options: ["Arenas to league facilities and partners", "Fans' phones to the arena's public Wi-Fi", "Ticket scanners to the box office server", "Team offices to their practice courts"], correctIndex: 0, explanation: "It links every arena in a league to the league's own facilities (a replay center, data centers) and to its media partners.", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "Who runs a league arena network, in this course's general description?", options: ["The home team", "The fans' ISP", "The truck crew", "A carrier"], correctIndex: 3, explanation: "A league arena network is a private network run by a carrier; in the worked example, AT&T (AT&T, 2026).", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "What does \"HSAN\" stand for?", options: ["Home Station Audio Node", "High-Speed Arena Network", "Hybrid Sports Area Net", "Host Server Access Node"], correctIndex: 1, explanation: "HSAN is the NBA's High-Speed Arena Network, this course's worked example.", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "How should a learner read HSAN, according to lesson 1?", options: ["As how every league's network works", "As one documented example of the idea", "As a network that no longer exists", "As a network owned by the home teams"], correctIndex: 1, explanation: "The course did not research whether other leagues run networks of the same shape, so HSAN is one documented example.", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "Which company provides HSAN's connectivity and monitors it?", options: ["Zayo", "Cisco", "Riedel", "AT&T"], correctIndex: 3, explanation: "AT&T provides the connectivity and monitors performance through its Network Operations Center (AT&T, 2026). Zayo built the 2014 network.", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "From where does AT&T monitor HSAN's performance?", options: ["Its Network Operations Center", "The league's Replay Center", "Each arena's production truck", "The home team's control room"], correctIndex: 0, explanation: "AT&T \"monitors network performance through its Network Operations Center\" (AT&T, 2026).", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "Where is the NBA Replay Center?", options: ["Atlanta, Georgia", "Newark, Delaware", "Secaucus, New Jersey", "Chicago, Illinois"], correctIndex: 2, explanation: "All 30 NBA arenas connect directly to the NBA Replay Center in Secaucus, New Jersey (NBA, n.d.-a).", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "How many NBA arenas connect directly to the Replay Center?", options: ["Only 6", "About 12", "Only 2", "All 30"], correctIndex: 3, explanation: "All 30 NBA arenas connect directly to the Replay Center (NBA, n.d.-a).", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "Which parties does lesson 1 mark \"to confirm\" on the map?", options: ["Carrier, Replay Center and media partners", "League media group, carrier and Replay Center", "Truck, venue broadcast staff, rights holder", "Media partners, carrier and league postings"], correctIndex: 2, explanation: "No source says what the truck, the venue's broadcast staff and the rights holder own at any arena, so they are marked \"to confirm.\"", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "Why does lesson 1 leave out how local and national broadcasts differ?", options: ["Local broadcasts no longer exist", "No source in the research covers it", "The league forbids teaching it", "It is the same at every arena"], correctIndex: 1, explanation: "No source in this course's research covers that difference, so the lesson leaves it out.", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "Which of these does HSAN carry, per AT&T?", options: ["Statistics, audio feeds and league data", "Ticket sales, parking and concessions", "Fans' social posts and text messages", "Payroll, contracts and team emails"], correctIndex: 0, explanation: "HSAN carries live video, replays, highlights, statistics, audio feeds, broadcast and digital content, and \"other mission-critical league data\" (AT&T, 2026).", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "Which of these does HSAN support, per AT&T?", options: ["Radio and in-arena entertainment", "Stadium lighting and HVAC control", "Season-ticket billing and refunds", "Player contracts and team payroll"], correctIndex: 0, explanation: "It supports live broadcasts, alternate viewing experiences, radio, mobile content and in-arena entertainment (AT&T, 2026).", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "On a real job, what does \"touch only what you own\" rule out without the owner's go-ahead?", options: ["Asking questions about the gear's setup", "Captures, reboots, repatches and changes", "Watching the engineer do a check-in", "Writing notes in your own study log"], correctIndex: 1, explanation: "No packet captures, reboots, repatches or settings changes on live gear without the owner's go-ahead. Observing, asking and note-taking are fine.", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "Why does the network belong to someone else on a real job?", options: ["The fans pay for it with their tickets", "The truck crew builds it for each game", "The carrier provides and monitors it", "The players' union owns its fiber"], correctIndex: 2, explanation: "The carrier provides the network and watches it from its operations center (AT&T, 2026), so changes belong to its owner.", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "What label goes on every home lab recording and write-up?", options: ["\"Live feed\"", "\"League data\"", "\"Arena test\"", "\"Home lab\""], correctIndex: 3, explanation: "Label every recording and write-up \"home lab,\" and never present it as output from a real network.", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "When you draw the game-night path, what do you mark \"to confirm\"?", options: ["Only the cameras and truck", "Nothing; draw it as fact", "Every part no source confirms", "Only the Replay Center"], correctIndex: 2, explanation: "Mark every part no source confirms as \"to confirm.\"", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "How does AT&T describe HSAN?", options: ["\"the league's dedicated connectivity backbone\"", "\"the league's public fan Wi-Fi network\"", "\"the league's archive of game footage\"", "\"the league's backup cellular system\""], correctIndex: 0, explanation: "AT&T calls HSAN \"the league's dedicated connectivity backbone\" (AT&T, 2026).", sourceLessonSlug: "the-worked-example" },
          { prompt: "When was the fourth generation of the network announced?", options: ["October 28, 2014", "March 9, 2023", "July 21, 2026", "October 19, 2026"], correctIndex: 3, explanation: "The NBA, the WNBA and AT&T announced it on October 19, 2026 (NBA, 2026a). October 28, 2014 is the HSAN2 article.", sourceLessonSlug: "the-worked-example" },
          { prompt: "Who announced the fourth-generation network?", options: ["The NBA, Zayo and Cisco", "The NBA, the WNBA and AT&T", "AT&T and Sony's Hawk-Eye", "SMPTE and the G League"], correctIndex: 1, explanation: "The announcement came from the NBA, the WNBA and AT&T (NBA, 2026a; AT&T, 2026).", sourceLessonSlug: "the-worked-example" },
          { prompt: "How much AT&T fiber does the fourth-generation network ride on?", options: ["More than 6,800 miles", "More than 68,000 miles", "About 118 miles", "More than 680,000 miles"], correctIndex: 1, explanation: "More than 68,000 miles of AT&T fiber (NBA, 2026a; AT&T, 2026).", sourceLessonSlug: "the-worked-example" },
          { prompt: "How many concurrent streams per game is the new network designed for?", options: ["About 12", "About 30", "More than 1,800", "More than 118"], correctIndex: 3, explanation: "More than 118 concurrent, low-latency streams per game (NBA, 2026a). Up to 12 per arena was the 2014 figure.", sourceLessonSlug: "the-worked-example" },
          { prompt: "About how much bandwidth does the fourth generation bring, against the current setup?", options: ["About four times as much", "About the same amount", "About twice as much", "About ten times less"], correctIndex: 0, explanation: "About four times the bandwidth of the current setup (Carlson, 2026).", sourceLessonSlug: "the-worked-example" },
          { prompt: "Why does the new network bring fiber into some venues from different directions?", options: ["So each team can own one fiber path", "So fans get faster Wi-Fi in the seats", "So no single cut takes the site down", "So the old fiber can be pulled out"], correctIndex: 2, explanation: "Carlson (2026): conduit from different directions, so no single cut takes the site down.", sourceLessonSlug: "the-worked-example" },
          { prompt: "What does the new network do with streams, for redundancy?", options: ["Records them twice locally", "Sends them by satellite", "Compresses them less", "Splits them across paths"], correctIndex: 3, explanation: "Streams are split across paths for redundancy (Carlson, 2026).", sourceLessonSlug: "the-worked-example" },
          { prompt: "What does AT&T's dedicated engineering unit run, per the CNET report?", options: ["Camera shading for each game's truck", "Replay review for on-court officials", "24/7 telemetry and automatic rerouting", "Ticketing for each arena's box office"], correctIndex: 2, explanation: "A dedicated engineering unit with 24/7 network telemetry, capacity modeling and automatic rerouting (Carlson, 2026).", sourceLessonSlug: "the-worked-example" },
          { prompt: "In lesson 2, what is telemetry?", options: ["A camera that follows players in 3D", "The network reporting on its own health", "A beltpack worn by each game referee", "A report written after a failed game"], correctIndex: 1, explanation: "Lesson 2 glosses telemetry as the network reporting on its own health, all the time.", sourceLessonSlug: "the-worked-example" },
          { prompt: "Besides NBA arenas, which other arena does the CNET report name for the upgrade?", options: ["One WNBA arena", "One NFL stadium", "Every G League arena", "No other arena"], correctIndex: 0, explanation: "One WNBA arena is also named for the upgrade (Carlson, 2026).", sourceLessonSlug: "the-worked-example" },
          { prompt: "What had the NBA done with ST 2110 by 2025?", options: ["Expanded ST 2110 across its arenas", "Banned ST 2110 from every arena's truck", "Tested ST 2110 in one arena only", "Replaced ST 2110 with a phone network"], correctIndex: 0, explanation: "Daley (2025): the NBA had \"expanded SMPTE ST 2110 workflows across its arenas.\"", sourceLessonSlug: "the-worked-example" },
          { prompt: "What did the 2025 report say the league's HSAN connects to remotely?", options: ["Fans' home routers", "Remote data centers", "Players' locker rooms", "Rival leagues' trucks"], correctIndex: 1, explanation: "Daley (2025): \"remote data centers connected via the league's HSAN network.\"", sourceLessonSlug: "the-worked-example" },
          { prompt: "What does no source say about the 118 streams?", options: ["Their total count per game", "That they are low-latency", "Their breakdown by type", "That they are concurrent"], correctIndex: 2, explanation: "No source breaks the 118 streams down by type, and no source names the video format. Do not invent either.", sourceLessonSlug: "the-worked-example" },
          { prompt: "In lesson 2's reasoning, what does a second fiber route protect against?", options: ["A referee's beltpack running out", "A camera losing focus on a player", "A truck arriving late to the arena", "One backhoe cutting the whole site off"], correctIndex: 3, explanation: "With one trench, one cut takes the site off; a second route from another direction leaves a path standing.", sourceLessonSlug: "the-worked-example" },
          { prompt: "What does \"low-latency\" mean, as lesson 2 glosses it?", options: ["Low cost per stream sent", "Low picture quality", "Little delay to the receiver", "Little power per stream"], correctIndex: 2, explanation: "Low-latency means little delay between the arena and the receiver.", sourceLessonSlug: "the-worked-example" },
          { prompt: "How was the 2014 network described against the one before it?", options: ["\"66 times faster\"", "\"twice as cheap\"", "\"6 times larger\"", "\"half as fast\""], correctIndex: 0, explanation: "Dachman (2014): HSAN2 was \"66 times faster,\" so an earlier network existed.", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "Which company built HSAN2 with the league in 2014?", options: ["AT&T", "Riedel", "Sony", "Zayo"], correctIndex: 3, explanation: "HSAN2 was built with Zayo, which monitored it and controlled all alarms (Dachman, 2014).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "What compression was HSAN2 based on?", options: ["JPEG XS", "JPEG 2000", "H.264", "MPEG-2"], correctIndex: 1, explanation: "HSAN2 was a 10-gig, JPEG 2000-based private network (Dachman, 2014).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "Who controlled all of HSAN2's alarms in 2014?", options: ["Cisco", "Zayo", "AT&T", "Each team"], correctIndex: 1, explanation: "Zayo monitored HSAN2 and controlled all alarms (Dachman, 2014).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "What did Cisco supply for HSAN2?", options: ["The fiber in the ground", "Referee comms beltpacks", "Tracking cameras", "Control and routing gear"], correctIndex: 3, explanation: "Cisco supplied the control and routing gear, including a router and firewall in each arena (Dachman, 2014).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "What did every arena get for HSAN2 in 2014?", options: ["Two racks, with a router and firewall", "Twelve tracking cameras on the roof", "A new truck dock and power feed", "A replay room with 94 monitors"], correctIndex: 0, explanation: "Every arena got two new equipment racks, including a Cisco router and firewall (Dachman, 2014).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "How many camera feeds per arena could HSAN2 carry at once?", options: ["Up to 118", "Up to 2", "Up to 12", "Up to 94"], correctIndex: 2, explanation: "Up to 12 camera feeds per arena at once, with nine primary angles from the truck as the standard (Dachman, 2014).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "How many primary angles from the truck were standard on HSAN2?", options: ["Two", "Twelve", "Thirty", "Nine"], correctIndex: 3, explanation: "Nine primary angles from the production truck were the standard (Dachman, 2014).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "What did this course find about HSAN's third generation?", options: ["Built by Zayo", "JPEG XS based", "No source", "Launched in 2027"], correctIndex: 2, explanation: "The course found no source for the third generation.", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "What is wrong with saying the network began in 2014-15, built by AT&T?", options: ["AT&T built it in 2010, before the Replay Center", "HSAN2 was built with Zayo, after an earlier HSAN", "The network began in 2023 with Hawk-Eye cameras", "Nothing; the 2014 network was AT&T's first"], correctIndex: 1, explanation: "In 2014 the network was HSAN2, faster than an earlier HSAN, and built with Zayo (Dachman, 2014).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "When does installation of the fourth generation start?", options: ["With the 2026-27 season", "In the 2014-15 season", "In July 2027, at launch", "After the 2027-28 season"], correctIndex: 0, explanation: "Installation starts \"with the 2026-2027 season\" (Carlson, 2026).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "How many arenas were named as the first install sites?", options: ["Six", "Thirty", "Twelve", "One"], correctIndex: 0, explanation: "Six arenas were named as the first install sites (Carlson, 2026).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "When is the official launch of the updated network?", options: ["October 2026", "July 2027", "July 2026", "October 2028"], correctIndex: 1, explanation: "\"The official launch of the updated HSAN will happen in July 2027\" (Carlson, 2026).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "Which season is the new network designed for?", options: ["2014-15", "2023-24", "2027-28", "2026-27"], correctIndex: 2, explanation: "Designed for \"basketball consumption during the 2027-28 NBA season\" (NBA, 2026a).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "How does lesson 3 read the three dates together?", options: ["Three sources that disagree with each other", "Three plans for three different leagues", "Three guesses that no source supports", "Three stages of one plan, not a conflict"], correctIndex: 3, explanation: "Build during 2026-27, switch on in July 2027, first full season 2027-28.", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "During 2026-27, what network does an arena outside the first six most likely run on?", options: ["The 2014 network", "No network at all", "The current network", "The new network"], correctIndex: 2, explanation: "It has no published install date, so it most likely still runs on the current network.", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "Why is Bull Source not a second, independent source?", options: ["It repeats CNET's story nearly word for word", "It was published before the announcement", "It is written by the league's own staff", "It names every arena in the league"], correctIndex: 0, explanation: "Bull Source repeats the CNET story's facts and quotes nearly word for word, so it counts as a copy.", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "Why does lesson 3 call the network's generation a fair question for an arena job?", options: ["Only the newest generation pays a fair salary", "The league hires only during a launch season", "Older generations have no arena-side jobs", "Install and operations jobs need different skills"], correctIndex: 3, explanation: "An install-era job and an operations-era job need different skills, so the generation matters.", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "How many HD monitors does the NBA Replay Center have?", options: ["23", "94", "118", "30"], correctIndex: 1, explanation: "94 HD monitors and 23 workstations (NBA, n.d.-a).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "How many workstations does the Replay Center have?", options: ["94", "23", "15", "8"], correctIndex: 1, explanation: "23 workstations: 15 Replay Operator and 8 Replay Manager stations (NBA, n.d.-a).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "How do the Replay Center's workstations split?", options: ["8 Replay Operator, 15 Replay Manager", "12 Replay Operator, 11 Replay Manager", "23 Replay Operator, no Replay Manager", "15 Replay Operator, 8 Replay Manager"], correctIndex: 3, explanation: "15 Replay Operator and 8 Replay Manager stations (NBA, n.d.-a).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "Which rule lists when instant replay may be used?", options: ["Rule 13", "Rule 16", "Rule 2110", "Rule 4607"], correctIndex: 0, explanation: "The league's Rule 13 covers instant replay (NBA, n.d.-b).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "How many review triggers did Rule 13 list on October 21, 2026?", options: ["15", "14", "16", "12"], correctIndex: 2, explanation: "16 triggers, counted on October 21, 2026 (NBA, n.d.-b). An earlier draft's \"15\" is wrong.", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "How do Rule 13's triggers split by who starts them?", options: ["2 on-court officials, 14 Replay Center", "8 on-court officials, 8 Replay Center", "All 16 by the Replay Center official", "14 on-court officials, 2 Replay Center"], correctIndex: 3, explanation: "14 started by on-court officials and 2 by the Replay Center official (NBA, n.d.-b).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "What should you do when citing a count from a rule like Rule 13?", options: ["Use the number from an earlier draft", "Round it to the nearest five or ten", "Count the current rule and give the date", "Use the number the league used in 2014"], correctIndex: 2, explanation: "Count from the current rule, and say the date you counted.", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "Since which season has Hawk-Eye optical tracking been used?", options: ["2014-15", "2023-24", "2027-28", "2020-21"], correctIndex: 1, explanation: "Since the 2023-24 season (NBA, 2023).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "How fast does Hawk-Eye tracking follow each player and the ball?", options: ["\"at sub-second latency\"", "\"at one frame per minute\"", "\"after each quarter ends\"", "\"overnight, for coaches\""], correctIndex: 0, explanation: "Hawk-Eye follows each player and the ball in 3D \"at sub-second latency\" (NBA, 2023).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "Which possible future automated calls did the NBA name?", options: ["Out-of-bounds and goaltending", "Fouls and traveling calls", "Shot-clock and timeouts", "Substitutions and jump balls"], correctIndex: 0, explanation: "The NBA named possible future automated calls on out-of-bounds and goaltending (NBA, 2023).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "How many cameras does Hawk-Eye's pose product use at each arena?", options: ["29", "12", "94", "3"], correctIndex: 1, explanation: "\"12 cameras installed at each arena\" (Dachman, 2023).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "How many points on each player's body does Hawk-Eye's pose product capture?", options: ["12", "16", "29", "94"], correctIndex: 2, explanation: "\"29 points on each player's body\" (Dachman, 2023).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "Does any source say Hawk-Eye tracking data travels on HSAN?", options: ["Yes; AT&T's release says so", "Yes; Hawk-Eye's page says so", "No; it travels by satellite", "No; it is consistent but not shown"], correctIndex: 3, explanation: "HSAN carries \"other mission-critical league data,\" which is consistent with tracking data but does not show it.", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "Which comms system does each arena use for referees?", options: ["Clear-Com HX", "Cisco Webex", "Riedel Bolero", "Sony Hawk-Eye"], correctIndex: 2, explanation: "Each arena has a Riedel Bolero system for referee comms (Daley, 2025).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "How many antennas does each arena's referee comms setup have?", options: ["Three", "Twelve", "One", "Thirty"], correctIndex: 0, explanation: "Three antennas, a beltpack per referee, and a full-size Bolero for a technician (Daley, 2025).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "What does each referee carry in the arena comms setup?", options: ["A tablet", "A camera", "A router", "A beltpack"], correctIndex: 3, explanation: "A beltpack for each referee (Daley, 2025).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "What does the referee comms adapter link to?", options: ["Fans' phones, Wi-Fi and the scoreboard", "Replay center, PA system and the truck", "Team benches, coaches and locker rooms", "Ticket office, parking and concessions"], correctIndex: 1, explanation: "An adapter links it to the replay center, the public-address system and the truck (Daley, 2025).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "What does \"a full-size Bolero for a technician\" suggest, by lesson 4's reasoning?", options: ["Referees repair their own comms gear", "A league tech likely works each game night", "The truck crew runs referee comms", "No one staffs referee comms at all"], correctIndex: 1, explanation: "A station built for a technician means someone sits at it: a reasoned guess, not a staffing fact.", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "On what date were all three NBA postings in lesson 5 posted?", options: ["October 19, 2026", "October 21, 2026", "March 9, 2023", "October 14, 2026"], correctIndex: 3, explanation: "All three were posted October 14, 2026.", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "What do the three postings show, according to lesson 5?", options: ["The duties, not any arena's staffing", "Each arena's exact staffing plan", "The carrier's network design", "The league's revenue by arena"], correctIndex: 0, explanation: "They are evidence of the duties, not of how any one arena is staffed.", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "What pay range did the Technical Manager, Local Media posting list?", options: ["$3,200 to $6,400", "$200 to $400", "$130,000 to $165,000", "$1.3M to $1.65M"], correctIndex: 2, explanation: "Director level; $130,000 to $165,000 (NBA, 2026d).", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "How much experience did the Technical Manager posting ask for?", options: ["1 to 3 years", "2 to 5 years", "No experience", "8 to 10+ years"], correctIndex: 3, explanation: "8 to 10+ years (NBA, 2026d).", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "What did the Broadcast Support Engineer posting pay?", options: ["$200 per game day", "$165,000 per year", "$3,200 every two weeks", "$99 per shift"], correctIndex: 2, explanation: "$3,200 biweekly, up to 10 months (NBA, 2026b). $200 per game day is the automated-officiating job.", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "Where does the Broadcast Support Engineer work?", options: ["Only from home, remotely", "Secaucus and at NBA arenas", "Only at G League arenas", "Only at AT&T's NOC"], correctIndex: 1, explanation: "Secaucus \"as well as at NBA arenas\" (NBA, 2026b).", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "Which duty appears on the Broadcast Support Engineer posting?", options: ["Check in all inbound and outbound feeds", "Design the carrier's backbone routing", "Install fiber conduit in new arenas", "Officiate games from the Replay Center"], correctIndex: 0, explanation: "\"Check in all inbound and outbound feeds,\" plus monitoring with multiviewers, IP probes and video analyzers (NBA, 2026b).", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "Which monitoring tools does the support posting name?", options: ["Multiviewers, IP probes, video analyzers", "Tally lights, beltpacks and antennas", "Lenses, gimbals and field monitors", "Scoreboards, shot clocks and horns"], correctIndex: 0, explanation: "Monitor with multiviewers, IP probes and video analyzers (NBA, 2026b).", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "What did the automated-officiating posting pay?", options: ["$3,200 per game day", "$200 per game day", "$130,000 per season", "$20 per game day"], correctIndex: 1, explanation: "$200 per game day, for 1 to 3 years' experience (NBA, 2026c).", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "Which skills did the automated-officiating posting prefer?", options: ["Pro Tools and audio", "Avid and editing", "Linux and Python", "Excel and payroll"], correctIndex: 2, explanation: "Linux and Python preferred (NBA, 2026c).", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "What kind of job is the automated-officiating posting, per lesson 5?", options: ["A carrier job at AT&T's NOC", "A replay job in the Replay Center", "A camera job in the main truck", "A sensor job, not network work"], correctIndex: 3, explanation: "It is a sensor job, not HSAN work, but it shows what an arena-side, per-game league job looks like.", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "Which posting is the only live one naming HSAN?", options: ["Broadcast Support Engineer", "League Technology Rep", "Technical Manager, Local Media", "Replay Center Operator"], correctIndex: 2, explanation: "The Technical Manager, Local Media posting is the only live one that names HSAN (NBA, 2026d).", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "Which two documents does the Technical Manager posting ask for?", options: ["Runbooks and root cause analyses", "Contracts and pay invoices", "Shot lists and show scripts", "Rule books and box scores"], correctIndex: 0, explanation: "It asks for runbooks and root cause analyses (NBA, 2026d); section 7 practices both.", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "Why does the course not quote the posting that turned up only in a search?", options: ["It was for a rival league", "It named a single team", "It had no salary listed", "Its page would not load"], correctIndex: 3, explanation: "A search result is not the page itself, and the page would not load, so it is not evidence.", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "Which duty repeats across the postings, per lesson 5?", options: ["Selling sponsorships", "Checking feeds in and out", "Shading the cameras", "Writing game stories"], correctIndex: 1, explanation: "Checking feeds in and out, watching monitoring tools, troubleshooting IP gear, multicast, timing, reports and escalation repeat.", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "Which topics does lesson 5 conclude are core for this course?", options: ["Routing design and carrier work", "ST 2110, multicast and timing", "Ticketing, parking and Wi-Fi", "Camera lenses and gimbals"], correctIndex: 1, explanation: "The postings keep naming ST 2110, multicast and timing, so they are core; network design and carrier work are not.", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "Which schedule do the postings mention for this work?", options: ["Weekday office hours only", "Mornings before noon only", "Summers only, off-season", "Nights, weekends and holidays"], correctIndex: 3, explanation: "Nights, weekends and holidays repeat across the postings.", sourceLessonSlug: "the-jobs-behind-the-network" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: IP for broadcast crew
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-the-job-asks-about-ip",
      title: "6 · What the job asks you to know about IP",
      section: "2 · IP for broadcast crew",
      recallContent: [
        {
          prompt: "What did the Broadcast Support Engineer posting pay, and for how long?",
          answer: "$3,200 every two weeks, for up to 10 months (NBA, 2026b).",
        },
        {
          prompt: "Why does this course leave network design and carrier work out?",
          answer: "The carrier owns and monitors the network, so an arena-side role is unlikely to change it.",
        },
      ],
      body: `**Why IP is in a broadcast course.** The league runs SMPTE ST 2110 workflows across its arenas (Daley, 2025), and ST 2110 sends media over IP networks (SMPTE, 2025b). The league's support posting asks a new hire to troubleshoot "Layer 2/3 switches," hybrid routers and IP codecs, and names UDP/TCP and RTP among the protocols to know (NBA, 2026b). The Technical Manager posting prefers ST 2110, NMOS, SRT, NDI, JPEG XS and multicast (NBA, 2026d).

**The words on the postings.** Here is every networking term the two postings name, sorted by where this course covers it:

| Term | Where it is covered |
|---|---|
| Layer 2 and Layer 3 switches; UDP and TCP | Defined below; lesson 7 lists where to study them |
| RTP, RTSP, RTMP, SRT | Section 7 (monitoring); SRT also appears in the lab list in lesson 8 |
| Multicast | Section 3 |
| ST 2110, NMOS, JPEG XS | Section 4 |
| Timing and sync | Section 5 |
| NDI | Named on one posting; not covered in this course |

**Eight words, defined from the documents that define them.** Each definition below rests on an Internet standard (an RFC, a "Request for Comments" published by the RFC Editor) or a free training page, named in brackets.

1. **IP address.** An IPv4 address is a 32-bit number, written as four numbers from 0 to 255, that says where a device is. RFC 791 puts it this way: "A name indicates what we seek. An address indicates where it is." An address "begins with a network number, followed by local address" (Postel, 1981, section 2.3).
2. **Prefix and mask.** The number after the slash, as in 192.168.99.0/24, is how many leading bits name the network. A /24 means the mask 255.255.255.0 and a block of 256 addresses; a /25 holds 128 and a /30 holds 4 (Fuller & Li, 2006, section 3.1).
3. **Subnet and usable range.** A subnet is one network block, carved out by lengthening the mask (Mogul & Postel, 1985). Its first address names the network and its last, with every host bit set to one, is the broadcast address, which "MUST NOT be used as a source address" (Braden, 1989, section 3.2.1.3). So you subtract 2 when you count hosts, and "Everything in the middle would be our host addresses" (Professor Messer, n.d.-a).
4. **Gateway.** A device sends straight to any address inside its own subnet. "If not, then the destination is accessible only through a gateway," and with no better information the device "chooses a "default" gateway and sends the datagram to it" (Braden, 1989, sections 3.3.1.1 and 3.3.1.2).
5. **Layer 2 and Layer 3.** These are layer numbers from the Open Systems Interconnection (OSI) model. At Layer 2, switches decide where to send traffic "based on the destination MAC address" inside one network; Layer 3 "is the layer that routers use," looking at the destination IP address (Professor Messer, n.d.-d). A Layer 3 switch "is basically a switch that can perform routing functions in addition to switching" (Cisco Meraki, n.d.).
6. **VLAN.** A virtual LAN splits one physical switch into separate Layer 2 networks: "VLANs can be used to create a separate of broadcast domains on a single switch" [sic] (Professor Messer, n.d.-e). Each VLAN is usually its own subnet, so "routing will need to occur for traffic to flow in between VLANs" (Cisco Meraki, n.d.). The tag that marks a frame's VLAN is defined in IEEE 802.1Q (IEEE, 2022; Juniper Networks, n.d.).
7. **UDP.** UDP sends each message with no connection setup and no reply: "delivery and duplicate protection are not guaranteed" (Postel, 1980). In plain words, it is "connectionless communication because there's no setup or warning" (Professor Messer, n.d.-b). Live media uses it, "typically" with RTP on top; RTP's sequence numbers "allow the receiver to reconstruct the sender's packet sequence" (Schulzrinne et al., 2003, section 1).
8. **TCP.** TCP sets up a connection with "The "three-way handshake"" and gives "a reliable, in-order, byte-stream service," resending what is lost (Eddy, 2022, sections 2.2 and 3.5).

**Why the transport matters.** IP on its own makes no promise: "There are no acknowledgments either end-to-end or hop-by-hop" (Postel, 1981, section 1.4). TCP adds one by resending; UDP does not. So a live stream over UDP that loses a packet gets nothing back. Section 5 shows the broadcast answer: a second path.

**A worked /24.** Take a lab device at 192.168.1.20/24.

| Question | Answer | Why |
|---|---|---|
| Network | 192.168.1.0 | The first address of the block names the network |
| Broadcast | 192.168.1.255 | The last address, all host bits set to one |
| Usable range | 192.168.1.1 to 192.168.1.254, which is 254 addresses | 256 minus the network and broadcast addresses |
| Gateway | Ask, or read the device's settings | No rule fixes where the gateway sits in a subnet |

A home lab will almost always use a private block. Three are set aside and never handed out on the public Internet: 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16 (Rekhter et al., 1996, section 3). No source this course read sets a rule for where the gateway sits in a subnet. It is a local choice, so do not assume it ends in ".1."

**The skills to build.** After the study in lesson 7, you should be able to do four things:

1. Given an IP address and a mask, state the network, the usable range and where the gateway sits. A fair target is 18 of 20 right in a 20-minute drill.
2. Explain Layer 2 against Layer 3 and what a VLAN separates, then set up two VLANs on a lab switch and show with ping that they cannot reach each other.
3. Explain UDP against TCP, and point out RTP packets in a capture.
4. Run ping, traceroute and an interface status command, and say what each result means.

These are goals, not facts about any network. They come from the plan this course was built on, and section 7's drills will test them.

**Where the line is.** Network design, routing protocols and carrier work are not the arena-side job. The carrier provides and monitors the network (AT&T, 2026), so an arena-side role is unlikely to change it. Your IP job on a game night is to understand what you see, find where a fault is, and tell the right person, not to redesign the network.

:::reveal Which posting asks a new hire to troubleshoot "Layer 2/3 switches"? ||| The Broadcast Support Engineer posting (NBA, 2026b).

:::reveal A device is at 10.0.5.77/24. What are its network address, its broadcast address and its number of usable addresses? ||| Network 10.0.5.0, broadcast 10.0.5.255, and 254 usable addresses (256 minus the network and broadcast addresses).

:::reveal Why can two computers on different VLANs not ping each other without a router? ||| Each VLAN is a separate Layer 2 network, usually its own subnet, so "routing will need to occur for traffic to flow in between VLANs" (Cisco Meraki, n.d.).

## Sources
- ${NBA_POST_SUPPORT} Locator: "Responsibilities" and "Qualifications," the switches, codecs and protocols.
- ${NBA_POST_TECH_MANAGER} Locator: "Preferred qualifications."
- ${ATT_2026} Locator: the sentence on AT&T providing and monitoring the network.
- ${DALEY_2025} Locator: the paragraph on ST 2110 workflows across the arenas.
- ${SMPTE_FAQ} Locator: the opening answer, what ST 2110 is.
- ${RFC_791} Locator: section 1.4 (no acknowledgments) and section 2.3 (names, addresses and routes; the four-octet address).
- ${RFC_4632} Locator: section 3.1, the prefix notation, the 192.168.99.0/24 example and the table of block sizes.
- ${RFC_950} Locator: the whole standard, the subnetting procedure; section 2.1 on the all-ones address.
- ${RFC_1122} Locator: section 3.2.1.3 (directed broadcast), sections 3.3.1.1 and 3.3.1.2 (local delivery and the default gateway).
- ${RFC_1918} Locator: section 3, the three private address blocks.
- ${MESSER_SUBNETS} Locator: the segment on subtracting the network and broadcast addresses.
- ${MESSER_OSI} Locator: the Layer 2 and Layer 3 segments.
- ${MESSER_VLANS} Locator: the opening segment on VLANs and broadcast domains.
- ${MERAKI} Locator: the sections on Layer 3 switches, VLANs and subnets, and the default gateway.
- ${JUNIPER} Locator: the opening definition of a VLAN and the 802.1Q tag.
- ${IEEE_8021Q} Locator: the standard's page and scope; cited as the standard that defines VLAN tagging, not quoted.
- ${RFC_768} Locator: Introduction.
- ${MESSER_IP} Locator: the segment on UDP as connectionless communication.
- ${RFC_9293} Locator: section 2.2 (the reliable, in-order service) and section 3.5 (the three-way handshake).
- ${RFC_3550} Locator: section 1, RTP on UDP and its sequence numbers.`,
    },
    {
      slug: "where-to-learn-ip-free",
      title: "7 · Where to learn IP for free",
      section: "2 · IP for broadcast crew",
      recallContent: [
        {
          prompt: "Name two networking terms the league's postings list.",
          answer: "Any two of: Layer 2/3 switches, UDP/TCP, RTP, RTSP, RTMP, SRT, multicast, ST 2110, NMOS, NDI, JPEG XS.",
        },
        {
          prompt: "What is the subnet drill target in lesson 6?",
          answer: "18 of 20 right in a 20-minute drill.",
        },
      ],
      body: `**You do not need to pay to start.** Three free resources cover what lesson 6 asks for. The details below were read on each provider's page on October 21, 2026.

| Resource | What it is | What to use | Source |
|---|---|---|---|
| SMPTE's Essentials of Media over IP (EMIP) | A virtual course from the Society of Motion Picture and Television Engineers. Modules 1.1 and 1.2 are free for members and non-members, with ongoing enrollment. | Modules 1.1 and 1.2 for IP basics; module 1.3, "Upper Layers and Multicasting," for section 3; Part 2 (ST 2022 and ST 2110 history, SDP and PTP, NMOS) for sections 4 and 5 | SMPTE (n.d.-a) |
| Cisco Networking Academy, Networking Basics | An online course listed as free. The hours were not checked; read them on the course page. | The whole course, as a foundation | Cisco Networking Academy (n.d.) |
| Professor Messer's N10-009 Network+ course | Videos described as "completely free": 87 videos, 12 hours 55 minutes in all | The videos on addressing, subnetting, VLANs, and ports and protocols | Professor Messer (n.d.-c) |

**Why SMPTE first.** SMPTE writes the ST 2110 standard that the league runs across its arenas (Daley, 2025). Its own course starts from IP basics and goes on to the broadcast standards, so one course carries you from this section to section 5.

**A study plan.** The plan this course was built on budgets about 10 hours for IP basics. That is a planning estimate, not a promise. One way to spend it:

1. EMIP modules 1.1 and 1.2.
2. Professor Messer's addressing and subnetting videos, then the VLAN videos, then ports and protocols.
3. Cisco's Networking Basics for anything still unclear.
4. The lab in lesson 8.

**A drill to measure yourself.** When you are ready, try a timed subnet drill: 20 questions, 20 minutes. Write it as multiple choice. This catalog's quiz rules do not use bare-number fill-in answers, because a number typed into a box is graded only by exact match, and multiple choice tests the same fact more fairly.

**Paid courses can wait.** None of this needs a paid course. SMPTE's paid courses on ST 2110 come later, and lesson 16 lists them with their prices.

**Keep a study log.** Write down what you studied and when. It helps you, and it is honest evidence to show an employer. Do not call a free course a certification unless the provider calls it one.

:::reveal Which modules of SMPTE's Essentials of Media over IP are free to members and non-members? ||| Modules 1.1 and 1.2, with ongoing enrollment (SMPTE, n.d.-a).

:::reveal How many videos, and how long, is Professor Messer's free N10-009 course? ||| 87 videos, 12 hours 55 minutes in all (Professor Messer, n.d.-c).

## Sources
- ${SMPTE_EMIP} Locator: course page, module list and the enrollment and price notes.
- ${CISCO} Locator: course page, price line.
- ${MESSER} Locator: course page, the video count and total running time.
- ${DALEY_2025} Locator: the paragraph on ST 2110 workflows across the arenas.`,
    },
    {
      slug: "a-home-lab-and-its-limits",
      title: "8 · A home lab, and its limits",
      section: "2 · IP for broadcast crew",
      recallContent: [
        {
          prompt: "Which SMPTE module covers \"Upper Layers and Multicasting\"?",
          answer: "Module 1.3 of Essentials of Media over IP (SMPTE, n.d.-a).",
        },
        {
          prompt: "How many hours does the course's plan budget for IP basics?",
          answer: "About 10 hours, as a planning estimate.",
        },
      ],
      body: `**Why build a lab.** Reading about networks is not the same as watching packets move. A small home lab lets you practice the skills in lesson 6 without touching anyone's live gear.

**Lab tiers.** Prices were read on each seller's page on October 21, 2026. Delivery and tax are extra.

| Tier | What | Cost | Source |
|---|---|---|---|
| 0 | Your own computer, free virtual machines, Wireshark, linuxptp in a Linux virtual machine, and the SRT sample apps | $0 | Wireshark Foundation (n.d.) for Wireshark |
| 1 | NETGEAR GS308E 8-port managed switch: $26.99 on sale, $44.99 list. Its datasheet lists 64 VLANs, 802.1Q VLAN tagging, and IGMP snooping (v1, v2 and v3), which section 3 needs. | $26.99 | NETGEAR (n.d.); NETGEAR (2024, p. 2) |
| 1 | A second Linux computer, for example a Raspberry Pi 5 2GB board at $77.50 after the October 2026 price increase. A power supply, a memory card and a case are extra. | $77.50 plus parts | Raspberry Pi (2026) |
| 1 | Ethernet patch cables | Not priced here | |

Tier 1 starts at $26.99 + $77.50 = $104.49, plus cables and the Raspberry Pi's parts. Tier 0 covers lessons 6 and 7. Tier 1 adds the VLAN lab and the multicast lab in section 3.

**The VLAN lab.** On the tier 1 switch, set up two VLANs. Put one computer on each. Then show with ping that they cannot reach each other, and record your screen while you explain it in plain words. The switch's datasheet lists 802.1Q VLAN tagging (NETGEAR, 2024, p. 2). **What you should see:** the pings fail. Each VLAN is its own Layer 2 network, usually its own subnet, and "routing will need to occur for traffic to flow in between VLANs" (Cisco Meraki, n.d.). Your lab has no router between them, so nothing crosses. Move both computers onto the same VLAN and subnet, and the pings should answer.

**Label everything "home lab."** Every recording and write-up from this lab gets that label. Never present lab output as output from a real network.

**What a home lab cannot prove.** A lab proves you can work your own gear. It cannot prove that you can run a league's gear, read its alarms or follow its procedures. Those come only from shadow shifts on real jobs and a supervisor's sign-off. Say that plainly when you show your lab to an employer, and it will count for more, not less.

**On the job.** If an employer lets you shadow, observe and ask. The rule from lesson 1 still holds: no packet captures, reboots, repatches or settings changes on live gear without the owner's go-ahead, and no photos of racks or screens without permission.

**Before you buy.** The GS308E's product page never mentions IGMP snooping, but its datasheet does: "IGMP snooping (v1, v2, and v3)," blocking of unknown multicast, and 128 multicast groups (NETGEAR, 2024, p. 2). That is why you read the datasheet, not just the product page. Lesson 11 covers one gap the datasheet leaves.

:::reveal What did the NETGEAR GS308E cost on October 21, 2026, and what does its datasheet list for VLANs and multicast? ||| $26.99 on sale ($44.99 list); 64 VLANs with 802.1Q tagging, and IGMP snooping v1, v2 and v3 (NETGEAR, n.d.; NETGEAR, 2024, p. 2).

:::reveal What can a home lab not prove to an employer? ||| That you can run a league's gear, read its alarms or follow its procedures; those come from shadow shifts and a supervisor's sign-off.

## Sources
- ${NETGEAR} Locator: product page, price, VLAN support and the features list.
- ${NETGEAR_DATASHEET} Locator: page 2, "L2 Services - Multicast Filtering" and the VLAN rows.
- ${MERAKI} Locator: the section on VLANs and subnets.
- ${RASPBERRY_PI} Locator: the price table for the Raspberry Pi 5 2GB.
- ${WIRESHARK} Locator: title page and table of contents.`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · IP for broadcast crew",
      section: "2 · IP for broadcast crew",
      body: "A graded check on what the league's postings ask you to know about IP, where to learn it for free, and how to build a home lab that is honest about its limits. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which posting asks a new hire to troubleshoot \"Layer 2/3 switches\"?", options: ["Technical Manager, Local Media", "League Technology Rep", "Broadcast Support Engineer", "Replay Center Manager"], correctIndex: 2, explanation: "The Broadcast Support Engineer posting asks for troubleshooting \"Layer 2/3 switches\" (NBA, 2026b).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which protocols does the support posting name?", options: ["RTSP, RTMP, SRT, UDP/TCP and RTP", "HTTP, FTP, SMTP, POP3 and IMAP", "DMX, MIDI, OSC, SMPTE-LTC", "Bluetooth, Zigbee and NFC"], correctIndex: 0, explanation: "The support posting names RTSP, RTMP, SRT, UDP/TCP and RTP (NBA, 2026b).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which gear does the support posting ask a hire to troubleshoot?", options: ["Camera lenses, gimbals and monitors", "Stage lights, dimmers and cables", "Scoreboards, shot clocks and horns", "Hybrid routers, IP codecs, L2/3 switches"], correctIndex: 3, explanation: "Troubleshoot hybrid routers, IP codecs and Layer 2/3 switches (NBA, 2026b).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which skills does the Technical Manager posting prefer?", options: ["DMX, sACN, Art-Net and stage dimming", "ST 2110, NMOS, SRT, NDI, JPEG XS, multicast", "Pro Tools, Dante and microphone care", "Steadicam, gimbals and lens choice"], correctIndex: 1, explanation: "It prefers ST 2110, NMOS, SRT, NDI, JPEG XS and multicast (NBA, 2026d).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Where does this course cover multicast?", options: ["Section 1", "Section 3", "Section 5", "Section 7"], correctIndex: 1, explanation: "Lesson 6's table puts multicast in section 3.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Where does this course cover timing and sync?", options: ["Section 2", "Section 3", "Section 4", "Section 5"], correctIndex: 3, explanation: "Timing and sync are in section 5.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which posted term does this course name but not cover?", options: ["NDI", "RTP", "ST 2110", "Multicast"], correctIndex: 0, explanation: "NDI is named on one posting and not covered in this course.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which document does lesson 6 use to define an IPv4 address?", options: ["RFC 791, Internet Protocol", "RFC 768, the UDP standard", "IEEE 802.1Q, VLAN tags", "RFC 4607, SSM for IP"], correctIndex: 0, explanation: "RFC 791: an address \"begins with a network number, followed by local address\" (Postel, 1981, section 2.3).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "How long is an IPv4 address?", options: ["48 bits", "32 bits", "128 bits", "12 bits"], correctIndex: 1, explanation: "\"Addresses are fixed length of four octets (32 bits)\" (Postel, 1981, section 2.3), written as four numbers from 0 to 255.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What target does lesson 6 set for the subnet drill?", options: ["10 of 20 in 60 minutes", "20 of 20 in 5 minutes", "18 of 20 in 20 minutes", "6 of 6 in 10 minutes"], correctIndex: 2, explanation: "18 of 20 right in a 20-minute drill.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "In the subnet skill, what must you state from an address and a mask?", options: ["Owner, brand and serial number", "Network, usable range and gateway", "Frame rate, codec and bit depth", "Fiber color, length and loss"], correctIndex: 1, explanation: "Given an IP address and mask, state the network, the usable range and where the gateway sits.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "How should you show two VLANs cannot reach each other in the lab?", options: ["With ping", "With a tape measure", "With a light meter", "With a tally light"], correctIndex: 0, explanation: "Set up two VLANs on a lab switch and show with ping that they cannot reach each other.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which packets should you point out in a capture, per lesson 6's skills?", options: ["RTP packets", "DMX packets", "MIDI notes", "PoE frames"], correctIndex: 0, explanation: "Explain UDP against TCP, and point out RTP packets in a capture.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which commands does lesson 6 list for the fourth skill?", options: ["Format, delete and factory reset", "Ping, traceroute and interface status", "Record, play and fast-forward", "Zoom, focus and iris"], correctIndex: 1, explanation: "Run ping, traceroute and an interface status command, and say what each result means.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Where do lesson 6's four skills come from?", options: ["A league rule for every arena", "AT&T's press release", "The plan the course was built on", "The SMPTE ST 2110 FAQ"], correctIndex: 2, explanation: "They are goals from the plan this course was built on, not facts about any network.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What is the arena-side IP job on a game night, per lesson 6?", options: ["Redesign the routing for the whole league", "Replace the carrier's backbone hardware", "Write new routing protocols for the arena", "Understand, locate the fault, tell someone"], correctIndex: 3, explanation: "Understand what you see, find where a fault is, and tell the right person, not redesign the network.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Why is network design outside the arena-side job?", options: ["Arenas have no networks of their own", "Network design is illegal for crews", "The carrier provides and monitors it", "Design is done only by the referees"], correctIndex: 2, explanation: "The carrier provides and monitors the network (AT&T, 2026), so an arena-side role is unlikely to change it.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Why is IP in a broadcast course, per lesson 6?", options: ["The league runs ST 2110, which uses IP", "Cameras no longer have any video outputs", "Fans now watch every game on Wi-Fi", "Trucks are no longer used at games"], correctIndex: 0, explanation: "The league runs ST 2110 workflows across its arenas (Daley, 2025), and ST 2110 sends media over IP networks.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which SMPTE course does lesson 7 recommend first?", options: ["Understanding SMPTE ST 2110", "ST 2110 Practical Lab", "ST 2110 Boot Camp", "Essentials of Media over IP"], correctIndex: 3, explanation: "SMPTE's Essentials of Media over IP (EMIP); modules 1.1 and 1.2 are free (SMPTE, n.d.-a).", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "Which EMIP modules are free to members and non-members?", options: ["Modules 2.1 and 2.2", "Modules 1.1 and 1.2", "Module 3.1 only", "No modules at all"], correctIndex: 1, explanation: "Modules 1.1 and 1.2 are free for members and non-members, with ongoing enrollment (SMPTE, n.d.-a).", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "What enrollment does SMPTE list for the free EMIP modules?", options: ["Once a year only", "Ongoing enrollment", "Members only", "By invitation"], correctIndex: 1, explanation: "Ongoing enrollment (SMPTE, n.d.-a).", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "What does EMIP module 1.3 cover?", options: ["Fiber Inspection and Cleaning", "Lenses and Depth of Field", "Referee Comms and Antennas", "Upper Layers and Multicasting"], correctIndex: 3, explanation: "Module 1.3 is \"Upper Layers and Multicasting\" (SMPTE, n.d.-a).", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "What does EMIP Part 2 cover?", options: ["ST 2022/2110 history, SDP and PTP, NMOS", "Camera shading, lenses and gimbals", "Fiber safety, lasers and cleaning", "Contracts, pay and union rules"], correctIndex: 0, explanation: "Part 2 covers ST 2022 and ST 2110 history, SDP and PTP, and NMOS (SMPTE, n.d.-a).", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "How is Cisco Networking Academy's Networking Basics listed?", options: ["At $399", "At $99", "As free", "Members only"], correctIndex: 2, explanation: "Cisco's Networking Basics is listed as free; its hours were not checked (Cisco Networking Academy, n.d.).", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "What did lesson 7 leave unchecked about Cisco's Networking Basics?", options: ["Its price", "Its name", "Its maker", "Its hours"], correctIndex: 3, explanation: "The hours were not checked; read them on the course page.", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "How does Professor Messer describe the N10-009 videos?", options: ["\"members only\"", "\"$99 per module\"", "\"completely free\"", "\"invite only\""], correctIndex: 2, explanation: "Professor Messer's N10-009 videos are \"completely free\" (Professor Messer, n.d.-c).", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "How many videos are in Professor Messer's N10-009 course?", options: ["12", "87", "55", "118"], correctIndex: 1, explanation: "87 videos, 12 hours 55 minutes in all (Professor Messer, n.d.-c).", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "How long is Professor Messer's N10-009 course in all?", options: ["12 hours 55 minutes", "87 hours in all", "1 hour 30 minutes", "40 hours, 3 weeks"], correctIndex: 0, explanation: "12 hours 55 minutes in all (Professor Messer, n.d.-c).", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "Which Professor Messer videos does lesson 7 point you to?", options: ["Addressing, subnetting, VLANs, ports", "Wireless, cloud, security, printers", "Cabling, racks, power and cooling", "Mobile, Windows, Linux and macOS"], correctIndex: 0, explanation: "Use the addressing, subnetting, VLAN, and ports and protocols videos.", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "Why does lesson 7 suggest SMPTE first?", options: ["SMPTE runs the league's network", "SMPTE writes the ST 2110 standard", "SMPTE owns the NBA's arenas", "SMPTE certifies every carrier"], correctIndex: 1, explanation: "SMPTE writes the ST 2110 standard the league runs, and its course carries you from IP basics to the broadcast standards.", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "How many hours does the plan budget for IP basics?", options: ["About 2", "About 40", "About 10", "About 100"], correctIndex: 2, explanation: "About 10 hours, as a planning estimate, not a promise.", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "How should the timed subnet drill be written?", options: ["As typed numbers", "As essay answers", "As true or false", "As multiple choice"], correctIndex: 3, explanation: "Write it as multiple choice; the catalog's quiz rules do not use bare-number fill-in answers.", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "Why do this catalog's quizzes avoid bare-number fill-in answers?", options: ["Numbers are never tested in any course here", "Learners cannot type numbers on a phone", "A typed number is graded only by exact match", "Multiple choice cannot show any numbers"], correctIndex: 2, explanation: "A number typed into a box is graded only by exact match, and multiple choice tests the same fact more fairly.", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "When does lesson 7 say paid courses are needed?", options: ["Later; none needed now", "Before any study", "Only for lesson 6", "Never, for any job"], correctIndex: 0, explanation: "None of this needs a paid course; SMPTE's paid ST 2110 courses come later (lesson 16).", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "What does lesson 7 say about calling a free course a certification?", options: ["Always, to impress an employer", "Never mention it on a résumé", "Only after a year of study", "Only if its provider calls it one"], correctIndex: 3, explanation: "Do not call a free course a certification unless the provider calls it one.", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "Why keep a study log, per lesson 7?", options: ["The league requires one from all fans", "It is honest evidence for an employer", "SMPTE grades it for a certificate", "It replaces the subnet drill"], correctIndex: 1, explanation: "It helps you, and it is honest evidence to show an employer.", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "What does tier 0 of the home lab cost?", options: ["$26.99", "$0", "$77.50", "$104.49"], correctIndex: 1, explanation: "Tier 0 is your own computer, free virtual machines, Wireshark, linuxptp and the SRT sample apps: $0.", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "Which of these is in tier 0?", options: ["A managed switch", "A Raspberry Pi", "A fiber cleaner", "Wireshark"], correctIndex: 3, explanation: "Tier 0 includes Wireshark; the switch and the Raspberry Pi are tier 1.", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "What did the NETGEAR GS308E cost on sale on October 21, 2026?", options: ["$26.99", "$44.99", "$77.50", "$104.49"], correctIndex: 0, explanation: "$26.99 on sale, $44.99 list (NETGEAR, n.d.).", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "What was the NETGEAR GS308E's list price on October 21, 2026?", options: ["$26.99", "$69.95", "$44.99", "$35.94"], correctIndex: 2, explanation: "$44.99 list, $26.99 on sale (NETGEAR, n.d.).", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "How many VLANs does the GS308E's page say it supports?", options: ["8", "16", "4,096", "64"], correctIndex: 3, explanation: "Its page says it supports VLANs, 64 of them (NETGEAR, n.d.).", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "What does the GS308E's product page not list?", options: ["VLAN support", "Eight ports", "IGMP snooping", "Gigabit speed"], correctIndex: 2, explanation: "The product page lists VLAN support but not IGMP snooping; the datasheet does list it (NETGEAR, 2024, p. 2), which is why you read the datasheet.", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "What did a Raspberry Pi 5 2GB cost after the October 2026 increase?", options: ["$26.99", "$77.50", "$44.99", "$35.00"], correctIndex: 1, explanation: "$77.50 after the October 2026 price increase (Raspberry Pi, 2026).", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "What does the Raspberry Pi 5 2GB price not include, per lesson 8?", options: ["Power supply, card and case", "The board itself", "The 2GB of memory", "The processor chip"], correctIndex: 0, explanation: "A power supply, a memory card and a case are extra.", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "What does tier 1 start at?", options: ["$104.49 plus cables and parts", "$26.99 with everything", "$44.99 plus a fiber kit", "$210 including delivery"], correctIndex: 0, explanation: "$26.99 + $77.50 = $104.49, plus cables and the Raspberry Pi's parts.", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "What does the VLAN lab ask you to show?", options: ["A stream that every port can receive", "Two VLANs that cannot ping each other", "A camera locked to house reference", "A fiber link with no loss at all"], correctIndex: 1, explanation: "Set up two VLANs, put one computer on each, and show with ping they cannot reach each other.", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "In the VLAN lab, what should a ping from one VLAN to the other do?", options: ["Answer, as both share one switch", "Answer only after a DHCP renewal", "Fail, as no router joins the VLANs", "Fail only while snooping is on"], correctIndex: 2, explanation: "Each VLAN is its own Layer 2 network and usually its own subnet, so \"routing will need to occur\" between them (Cisco Meraki, n.d.); the lab has no router.", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "What can a home lab prove?", options: ["That you can run a league's gear", "That you can read league alarms", "That you can follow league rules", "That you can work your own gear"], correctIndex: 3, explanation: "A lab proves you can work your own gear, nothing about a league's gear, alarms or procedures.", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "Where does proof that you can run a league's gear come from?", options: ["A home lab video with good lighting", "A free online course's final quiz", "Shadow shifts and a supervisor's sign-off", "A screenshot of a league's monitor"], correctIndex: 2, explanation: "Those come only from shadow shifts on real jobs and a supervisor's sign-off.", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "How should you present your lab's limits to an employer?", options: ["Say them plainly", "Leave them out", "Call it league gear", "Blur the screens"], correctIndex: 0, explanation: "Say plainly what a lab cannot prove, and it will count for more, not less.", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "When shadowing on a job, what still needs permission?", options: ["Watching the engineer work", "Asking about the network", "Writing your own notes", "Photos of racks or screens"], correctIndex: 3, explanation: "No photos of racks or screens without permission; observing and asking are fine.", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "Where does the GS308E's IGMP snooping support appear?", options: ["Its product page, not its datasheet", "Its box label and its retail receipt", "Nowhere; the switch cannot snoop", "Its datasheet, not its product page"], correctIndex: 3, explanation: "The product page never mentions IGMP snooping; the datasheet lists \"IGMP snooping (v1, v2, and v3)\" (NETGEAR, 2024, p. 2).", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "Which IGMP snooping versions does the GS308E datasheet list?", options: ["v1, v2 and v3", "v2 only, not v3", "v3 only, not v2", "v1 only, no v2"], correctIndex: 0, explanation: "The datasheet lists \"IGMP snooping (v1, v2, and v3)\" (NETGEAR, 2024, p. 2).", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "What does the /24 in 192.168.99.0/24 count?", options: ["Devices allowed on the network", "Leading bits that name the network", "Hops a packet may cross", "Hours before the address expires"], correctIndex: 1, explanation: "The number after the slash is how many leading bits are significant: the network part (Fuller & Li, 2006, section 3.1).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which mask does /24 mean?", options: ["255.255.0.0", "255.255.255.255", "255.255.255.0", "255.0.0.0"], correctIndex: 2, explanation: "/24 means the most significant 24 bits are ones: 255.255.255.0 (Fuller & Li, 2006, section 3.1).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "How many addresses does a /24 block hold?", options: ["254", "128", "512", "256"], correctIndex: 3, explanation: "A /24 holds 256 addresses; 254 of them are usable by devices (Fuller & Li, 2006, section 3.1).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "How many addresses does a /25 block hold?", options: ["128", "256", "64", "254"], correctIndex: 0, explanation: "RFC 4632's table: a /25 holds 128 addresses (Fuller & Li, 2006, section 3.1).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "How many addresses does a /30 block hold?", options: ["2", "4", "8", "30"], correctIndex: 1, explanation: "RFC 4632's table: a /30 holds 4 addresses (Fuller & Li, 2006, section 3.1).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "How many usable device addresses does a /24 leave?", options: ["256", "255", "254", "252"], correctIndex: 2, explanation: "256 addresses minus the network address and the broadcast address leaves 254.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Why are two addresses subtracted when you count hosts in a subnet?", options: ["The gateway and the DNS server", "The first two devices to connect", "The switch port and the router port", "The network and broadcast addresses"], correctIndex: 3, explanation: "The first address names the network and the last is the broadcast address, so neither goes to a device (Professor Messer, n.d.-a).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which address in a subnet is the broadcast address?", options: ["The last, with every host bit set to one", "The first, with every host bit at zero", "The gateway's, which always ends in .1", "Any address the router picks at random"], correctIndex: 0, explanation: "The all-ones form is the directed broadcast to the subnet (Braden, 1989, section 3.2.1.3).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What does RFC 1122 say a subnet's broadcast address must not be used as?", options: ["A group address", "A source address", "A gateway address", "A VLAN tag value"], correctIndex: 1, explanation: "The directed broadcast address \"MUST NOT be used as a source address\" (Braden, 1989, section 3.2.1.3).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Where does a device send a packet bound for an address outside its own subnet?", options: ["Straight to the address", "To every port at once", "To its default gateway", "Back to its own sender"], correctIndex: 2, explanation: "\"If not, then the destination is accessible only through a gateway\" (Braden, 1989, section 3.3.1.1).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Where does a device send a packet bound for an address inside its own subnet?", options: ["To its default gateway first", "To the carrier's operations center", "To the multicast querier first", "Straight to the destination"], correctIndex: 3, explanation: "Inside its own subnet, \"the datagram is to be transmitted directly to the destination host\" (Braden, 1989, section 3.3.1.1).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Where does lesson 6 say a subnet's gateway sits?", options: ["Ask, or read the device's settings", "Always at the first usable address", "Always at the last usable address", "Always at the subnet's broadcast"], correctIndex: 0, explanation: "No source the course read sets a rule; it is a local choice, so do not assume \".1.\"", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which of these is a private address block set aside by RFC 1918?", options: ["8.8.0.0/16", "192.168.0.0/16", "224.0.0.0/4", "232.0.0.0/8"], correctIndex: 1, explanation: "RFC 1918's three private blocks are 10/8, 172.16/12 and 192.168/16 (Rekhter et al., 1996, section 3).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which private block does RFC 1918 set aside starting with 172?", options: ["172.0.0.0/8", "172.31.0.0/24", "172.16.0.0/12", "172.168.0.0/16"], correctIndex: 2, explanation: "172.16.0.0 to 172.31.255.255, written 172.16/12 (Rekhter et al., 1996, section 3).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What do switches use to forward traffic at Layer 2?", options: ["The destination IP address", "The stream's SDP description", "The grandmaster clock's ID", "The destination MAC address"], correctIndex: 3, explanation: "Switches \"determine how to forward traffic based on the destination MAC address\" (Professor Messer, n.d.-d).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What do routers use to forward traffic at Layer 3?", options: ["The destination IP address", "The destination MAC address", "The patch cable's color code", "The number of VLAN ports"], correctIndex: 0, explanation: "Layer 3 \"is the layer that routers use,\" looking at the destination IP address (Professor Messer, n.d.-d).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What is a Layer 3 switch, per Cisco Meraki?", options: ["A switch with three VLANs", "A switch that can also route", "A router with no IP address", "A switch for fiber links only"], correctIndex: 1, explanation: "A Layer 3 switch \"is basically a switch that can perform routing functions in addition to switching\" (Cisco Meraki, n.d.).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What does a VLAN create on a single switch?", options: ["One shared broadcast domain", "A second power supply input", "A separate broadcast domain", "A faster uplink to a router"], correctIndex: 2, explanation: "\"VLANs can be used to create a separate of broadcast domains on a single switch\" [sic] (Professor Messer, n.d.-e).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Why must traffic between two VLANs be routed?", options: ["VLANs block every unicast packet", "Switches cannot carry IP traffic", "VLAN tags erase the IP header", "Each VLAN is usually its own subnet"], correctIndex: 3, explanation: "\"Since VLANs exist in their own layer 3 subnet, routing will need to occur\" (Cisco Meraki, n.d.).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which standard defines the VLAN tag in an Ethernet frame?", options: ["IEEE 802.1Q", "RFC 1918", "ST 2110-10", "RFC 3376"], correctIndex: 0, explanation: "The VLAN ID is \"transmitted and received as IEEE 802.1Q tag in an Ethernet frame\" (Juniper Networks, n.d.; IEEE, 2022).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What does UDP not guarantee, per RFC 768?", options: ["A destination port number", "Delivery or duplicate protection", "A header on each message", "Any way to carry media"], correctIndex: 1, explanation: "\"Delivery and duplicate protection are not guaranteed\" (Postel, 1980).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "How does TCP set up a connection?", options: ["With an IGMP join message", "With a PTP sync message", "With a three-way handshake", "With a VLAN tag exchange"], correctIndex: 2, explanation: "TCP is connection oriented, set up by \"The \"three-way handshake\"\" (Eddy, 2022, section 3.5).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What service does TCP give applications, per RFC 9293?", options: ["Best-effort, unordered datagrams", "Delivery to a multicast group", "Timing to under a microsecond", "A reliable, in-order byte stream"], correctIndex: 3, explanation: "\"TCP provides a reliable, in-order, byte-stream service to applications\" (Eddy, 2022, section 2.2).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What do RTP's sequence numbers let a receiver do?", options: ["Rebuild the sender's packet order", "Ask the sender to resend a packet", "Pick the stream's multicast group", "Set the network's default gateway"], correctIndex: 0, explanation: "Sequence numbers \"allow the receiver to reconstruct the sender's packet sequence\" (Schulzrinne et al., 2003, section 1). RTP does not resend.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which protocol usually sits under RTP when it carries live media?", options: ["TCP", "UDP", "PIM", "PTP"], correctIndex: 1, explanation: "\"Applications typically run RTP on top of UDP\" (Schulzrinne et al., 2003, section 1).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What acknowledgments does IP itself provide, per RFC 791?", options: ["One for each packet delivered", "One per hop, never end to end", "None, end to end or hop by hop", "One per minute of a stream"], correctIndex: 2, explanation: "\"There are no acknowledgments either end-to-end or hop-by-hop\" (Postel, 1981, section 1.4).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "When a live UDP stream loses a packet, what fills the gap?", options: ["A resend from the sender", "A copy from the gateway", "A copy from the querier", "Nothing; UDP does not resend"], correctIndex: 3, explanation: "UDP gives no delivery promise (Postel, 1980), so nothing comes back; section 5 covers the second-path answer.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "For a device at 10.0.5.77/24, what is the network address?", options: ["10.0.5.0", "10.0.0.0", "10.0.5.1", "10.0.5.255"], correctIndex: 0, explanation: "The first address of the /24 block names the network: 10.0.5.0.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "For a device at 192.168.1.20/24, what is the broadcast address?", options: ["192.168.1.0", "192.168.1.255", "192.168.1.1", "192.168.255.255"], correctIndex: 1, explanation: "The last address of the /24 block, all host bits set to one: 192.168.1.255.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What does an address tell you, in RFC 791's words?", options: ["What a device is", "How to get there", "Where a device is", "Who owns the device"], correctIndex: 2, explanation: "\"A name indicates what we seek. An address indicates where it is. A route indicates how to get there\" (Postel, 1981, section 2.3).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "How many multicast groups does the GS308E datasheet list?", options: ["64", "8", "4,094", "128"], correctIndex: 3, explanation: "\"Supported Multicast groups\": 128 (NETGEAR, 2024, p. 2). 64 is its VLAN count.", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "What should happen to pings if both lab computers move to one VLAN and subnet?", options: ["They should answer", "They still all fail", "They flood every port", "They need a querier"], correctIndex: 0, explanation: "Inside one subnet a device sends straight to the destination, so no router is needed (Braden, 1989, section 3.3.1.1).", sourceLessonSlug: "a-home-lab-and-its-limits" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Multicast
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "why-multicast-is-on-every-posting",
      title: "9 · Why multicast is on every posting",
      section: "3 · Multicast",
      recallContent: [
        {
          prompt: "What does the tier 1 lab add, and what did it start at on October 21, 2026?",
          answer: "A managed switch and a second Linux computer: $26.99 + $77.50 = $104.49, plus cables and parts.",
        },
        {
          prompt: "What label goes on every home lab recording?",
          answer: "\"Home lab.\"",
        },
      ],
      body: `**Both postings name it.** The league's support posting requires multicast, and the HSAN-naming Technical Manager posting prefers it (NBA, 2026b, 2026d). When two jobs at different levels both name a skill, it is a core skill.

**Unicast, broadcast, multicast.** Unicast goes to one receiver. Broadcast goes to every device on the network. Multicast goes to a "host group," a set of receivers that share one destination address (Deering, 1989, section 2).

**Eight words, defined from the RFCs that define them.**

1. **Multicast.** Sending one stream to a group address, so every receiver that asked for it gets a copy, instead of one copy per receiver. A group is "a set of zero or more hosts identified by a single IP destination address" (Deering, 1989, section 2). Multicast is not more reliable than unicast: it has the "same "best-efforts" reliability" (Deering, 1989, section 2).
2. **Multicast group.** An address from 224.0.0.0 to 239.255.255.255. "Hosts may join and leave groups at any time," and "A host need not be a member of a group to send datagrams to it" (Deering, 1989, sections 2 and 4).
3. **IGMP join.** IGMP, the Internet Group Management Protocol, is how receivers "report their IP multicast group memberships to any neighboring multicast routers" (Cain et al., 2002, section 1). A join is a Membership Report: "When a host joins a multicast group, it should immediately transmit an unsolicited Version 2 Membership Report for that group" (Fenner, 1997, section 3). In IGMP version 3 it is a State-Change Report (Cain et al., 2002, section 5.1).
4. **IGMP leave.** The message a receiver sends when it no longer wants a group. The router then sends Group-Specific Queries, and "If no Reports are received," it assumes nobody local still wants the group (Fenner, 1997, section 3).
5. **Querier.** The one device per network that asks, on a timer, who still wants which group: "There is normally only one Querier per physical network" (Fenner, 1997, section 3). It is normally a multicast router, but "if there is no multicast router on the VLAN this feature is required" on the switch (Cisco Systems, 2018).
6. **IGMP snooping.** A plain switch floods multicast: it forwards "a copy of the packet into each of the remaining network interfaces" (Christensen et al., 2006, section 1). A snooping switch listens to IGMP and sends each group only to the ports that asked for it, "conserving bandwidth on those segments of the network where no node has expressed interest" (Christensen et al., 2006, section 1). RFC 4541 is guidance, not a binding standard, so snooping behavior varies by maker (Christensen et al., 2006, section 1).
7. **PIM.** Protocol Independent Multicast is what routers use to pass multicast between subnets. A receiver asks for a group "using IGMP"; its router "sends a PIM Join message towards the RP," a meeting point called the Rendezvous Point; and the stream flows back down that path (Fenner et al., 2016, Abstract and section 3.1).
8. **Source-specific multicast (SSM).** A receiver asks for one group from one named sender, a pair called a "channel," using addresses 232.0.0.0 to 232.255.255.255 (Holbrook & Cain, 2006, Abstract and section 1). Delivery goes only to those that "specifically requested" that source and group (Holbrook & Cain, 2006, section 1).

**Why it matters in an arena.** ST 2110 names its version: senders and receivers "shall support IPv4 multicast ... including IGMP signaling as specified in IETF RFC 3376" (SMPTE, 2022b, section 6.5). RFC 3376 is IGMP version 3. SMPTE's free module 1.3, "Upper Layers and Multicasting," teaches the same ground with broadcast examples (SMPTE, n.d.-a).

**One standard you can cite now.** Source-specific multicast for IP is defined in RFC 4607 (Holbrook & Cain, 2006). Do not label source-specific multicast "RFC 4604." RFC 4607 cites RFC 4604, but for the IGMPv3 and MLDv2 side, not for source-specific multicast itself. Getting the number right matters when you look it up during a fault.

**What SMPTE's lab expects.** SMPTE's paid ST 2110 Practical Lab lists "Trace & fix multicast (IIF/OIF, RPF, PIM neighbor)" among its objectives (SMPTE, n.d.-c). That tells you where the skill leads: from knowing the words to tracing and fixing a broken stream.

**The skills to build.** After studying module 1.3 and doing the lab in lesson 11, you should be able to:

1. Explain unicast against multicast, a multicast group, an IGMP join and leave, IGMP snooping, the querier, and, in one sentence, what PIM does between routers.
2. Send a multicast stream in a lab, join it from a second computer, capture the IGMP join in Wireshark, and show what reaches a port that did not join, with snooping on and with it off.
3. Given a symptom such as "receiver joined, no picture" or "every port is flooded," name the two most likely causes and the first check for each.

These are goals from the plan this course was built on. Lesson 11 gives likely causes and first checks for skill 3, reasoned from how the protocols work.

:::reveal What does a switch with no IGMP snooping do with a multicast stream? ||| It floods it, forwarding a copy to every other port, whether or not anything on that port asked for the group (Christensen et al., 2006, section 1).

:::reveal Which RFC defines source-specific multicast for IP? ||| RFC 4607 (Holbrook & Cain, 2006). RFC 4604 is cited by it for the IGMPv3 and MLDv2 side.

:::reveal Which multicast objective does SMPTE's ST 2110 Practical Lab list? ||| "Trace & fix multicast (IIF/OIF, RPF, PIM neighbor)" (SMPTE, n.d.-c).

## Sources
- ${NBA_POST_SUPPORT} Locator: "Qualifications," multicast.
- ${NBA_POST_TECH_MANAGER} Locator: "Preferred qualifications," multicast.
- ${SMPTE_EMIP} Locator: module list, module 1.3.
- ${RFC_4607} Locator: title and abstract, section 1 (channels); the references section, for RFC 4604.
- ${SMPTE_LAB} Locator: "Objectives" list.
- ${RFC_1112} Locator: section 2 (host groups, joining and leaving, best-effort reliability) and section 4 (the group address range).
- ${RFC_2236} Locator: section 3, the Membership Report, the Leave Group message and the Querier.
- ${RFC_3376} Locator: section 1 (what IGMP is for) and section 5.1 (State-Change Reports).
- ${RFC_4541} Locator: section 1, flooding, snooping and its Informational status.
- ${CISCO_SNOOPING} Locator: the passage on the IGMP querier when no multicast router is on the VLAN.
- ${RFC_7761} Locator: Abstract and section 3.1, the PIM join toward the Rendezvous Point.
- ${SMPTE_2110_10} Locator: section 6.5, IPv4 multicast and IGMP signaling per RFC 3376.`,
    },
    {
      slug: "where-to-learn-multicast",
      title: "10 · Where to learn multicast",
      section: "3 · Multicast",
      recallContent: [
        {
          prompt: "Which postings name multicast, and how?",
          answer: "The support posting requires it and the Technical Manager posting prefers it (NBA, 2026b, 2026d).",
        },
        {
          prompt: "Why should you not label source-specific multicast \"RFC 4604\"?",
          answer: "Source-specific multicast for IP is RFC 4607; RFC 4607 cites RFC 4604 only for the IGMPv3 and MLDv2 side.",
        },
      ],
      body: `**Free first.** Two free resources cover what lesson 9 asks for. Details were read on October 21, 2026.

| Resource | What to use | Source |
|---|---|---|
| SMPTE's Essentials of Media over IP | Module 1.3, "Upper Layers and Multicasting" | SMPTE (n.d.-a) |
| The Wireshark User's Guide, version 5.1.0 | How to capture traffic and read what you captured, for the lab in lesson 11 | Wireshark Foundation (n.d.) |

**Why Wireshark.** The lab in lesson 11 asks you to capture an IGMP join, and that takes a capture tool. Wireshark costs nothing (tier 0 in lesson 8) and its guide is free, so it is the tool this course uses for every lab that needs a capture.

**Paid, later.** SMPTE's ST 2110 Practical Lab is a one-day course: $99 for SMPTE members and $199 for non-members. It is open only after SMPTE's ST 2110 Boot Camp or its Understanding SMPTE ST 2110 course (SMPTE, n.d.-c). It is the place to practice tracing and fixing multicast with an instructor. Do not start there; it expects the earlier course first.

**A study plan.** The plan this course was built on budgets about 8 hours for multicast. That is a planning estimate. One way to spend it:

1. EMIP module 1.3.
2. The parts of the Wireshark guide on capturing traffic and reading it.
3. The lab in lesson 11.
4. A one-page write-up, labeled "home lab."

**What to ask on a job.** If an employer allows it, ask how many multicast groups the arena sends and how they are named. You are asking to learn, not asking for access. Write down the answer in your own study log, with nothing confidential in it.

**How to tell you are ready.** You are ready for the paid lab when you can do the three skills in lesson 9 in your own home lab and explain each one in plain words to someone who has never heard of multicast.

:::reveal What does SMPTE's ST 2110 Practical Lab cost, and what must you finish first? ||| $99 for members and $199 for non-members, one day; it is open only after the ST 2110 Boot Camp or Understanding SMPTE ST 2110 (SMPTE, n.d.-c).

:::reveal Which free guide does this course use for packet captures? ||| The Wireshark User's Guide, version 5.1.0 (Wireshark Foundation, n.d.).

## Sources
- ${SMPTE_EMIP} Locator: module list, module 1.3.
- ${WIRESHARK} Locator: table of contents, the capture chapters.
- ${SMPTE_LAB} Locator: course page, price, length and prerequisites.`,
    },
    {
      slug: "a-multicast-lab",
      title: "11 · A multicast lab",
      section: "3 · Multicast",
      recallContent: [
        {
          prompt: "How long does the course's plan budget for multicast?",
          answer: "About 8 hours, as a planning estimate.",
        },
        {
          prompt: "What should you ask about multicast on a job, if allowed?",
          answer: "How many multicast groups the arena sends and how they are named.",
        },
      ],
      body: `${QR("a broadcast network engineer, to confirm this lab's expected results on a real switch and the likely-causes table, which is reasoned from the protocols rather than taken from a broadcast source")}

**What you need.** The tier 1 lab from lesson 8: a managed switch and a second Linux computer. You also need something that sends a video stream. A free tool such as ffmpeg or VLC can, but this course has not reviewed either one, so check its own documentation before you rely on it.

**Check the switch first.** The lab needs IGMP snooping. The GS308E's datasheet lists "IGMP snooping (v1, v2, and v3)," "Block unknown multicast," and 128 multicast groups (NETGEAR, 2024, p. 2). Its user manual adds three defaults: "IGMP snooping is enabled by default," snooping runs on VLAN 1 unless you pick another VLAN, and "By default, multicast traffic from unknown addresses is allowed" (NETGEAR, 2026, pp. 46 to 48).

**The gap: no querier.** Neither the datasheet nor the manual lists an IGMP querier setting. A home lab usually has no multicast router, and Cisco's support note says the querier function is "required" when "there is no multicast router on the VLAN" (Cisco Systems, 2018). Without one, a switch "will periodically remove entries from the membership table" when reports stop (Cisco Systems, 2018). So on this switch alone, a joined stream may start and then drop out after some minutes. That is a reasoned expectation, not a tested result. Record whether it happens.

**Pick a safe group address.** Never use a 224.0.0.x address for a test stream. Snooping switches must forward that range on all ports (Christensen et al., 2006, section 2.1.2), and ST 2110 bars senders from it and from 224.0.1.x (SMPTE, 2022b, section 6.5; Cotton et al., 2010, section 3).

**The lab, step by step.**

1. Send a multicast stream from one computer.
2. Join it from the second computer.
3. Capture the IGMP join in Wireshark, with the display filter igmp (Wireshark Foundation, n.d.).
4. Look at what reaches a switch port that did not join, with snooping on.
5. Turn snooping off and look again.
6. Run steps 4 and 5 once with Block Unknown Multicast off and once with it on.
7. Leave the stream running for a while and note whether, and when, it drops.

**What you should see.** With snooping on and a querier present, a port that did not join gets no stream. With snooping off, every port in the VLAN gets it (Christensen et al., 2006, section 1; Cisco Systems, 2018). Block Unknown Multicast changes how a group nobody has joined is treated: with it on, the switch "forwards multicast traffic only to ports in the multicast group that the switch learned through IGMP snooping" (NETGEAR, 2026, pp. 46 to 48).

**Likely causes, from how the protocols work.** No source this course read gives a broadcast troubleshooting list, so these are reasoned from the mechanisms above. Confirm them on the job.

| Symptom | Likely cause | First check |
|---|---|---|
| Receiver joined, no picture | No querier and no multicast router on the VLAN, so the group ages out (Cisco Systems, 2018) | Is there a querier? Look for regular General Queries to 224.0.0.1 in a capture |
| Receiver joined, no picture | Wrong group, or with SSM the wrong source (Holbrook & Cain, 2006, section 1) | Compare the captured join's group and source with the stream's description (lesson 13) |
| Receiver joined, no picture | Sender and receiver on different subnets with nothing routing multicast (Fenner et al., 2016, section 3.1) | Same VLAN and subnet? If not, who routes multicast between them? |
| Every port is flooded | Snooping off, or not supported (Christensen et al., 2006, section 1) | The switch's snooping setting for that VLAN, and its datasheet |
| Every port is flooded | A group nobody joined, or a 224.0.0.x address (Christensen et al., 2006, section 2.1.2) | The stream's group address and the unknown-multicast setting |

In your lab, make each symptom happen on purpose and write down what you did. Section 7 uses the same symptoms in timed drills.

**The write-up.** Record a 5-minute demo and write one page: what you set up, what you saw at each step, and what you still do not understand. Label both "home lab."

**What it proves, and what it does not.** This lab shows you can make multicast work, and break it, on your own gear. It does not show you can run a league's network (lesson 8). Say both in your write-up.

**On the job.** The same rule holds as always: no captures on live gear without the owner's go-ahead (lesson 1). The lab is where you capture freely, because it is yours.

:::reveal Why might a joined stream drop out after some minutes on a lab switch with snooping on? ||| With no multicast router and no querier on the VLAN, nothing asks receivers to confirm their groups, and the switch removes stale entries from its membership table (Cisco Systems, 2018).

:::reveal Why should you never use a 224.0.0.x address for a test stream? ||| Snooping switches forward that link-local range on every port, and ST 2110 bars senders from it (Christensen et al., 2006, section 2.1.2; SMPTE, 2022b, section 6.5).

## Sources
- ${NETGEAR_DATASHEET} Locator: page 2, "L2 Services - Multicast Filtering."
- ${NETGEAR_MANUAL} Locator: pages 46 to 48, the multicast and IGMP snooping settings.
- ${CISCO_SNOOPING} Locator: the passages on flooding, the querier and membership-table aging.
- ${RFC_4541} Locator: section 1 (flooding and snooping) and section 2.1.2 (forwarding rules 2 and 3).
- ${RFC_5771} Locator: section 3, the Local Network Control Block and Internetwork Control Block.
- ${SMPTE_2110_10} Locator: section 6.5, the barred address blocks.
- ${RFC_4607} Locator: section 1, delivery only to the requested source and group.
- ${RFC_7761} Locator: section 3.1, multicast across subnets.
- ${WIRESHARK} Locator: table of contents, the capture and display filter chapters.`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Multicast",
      section: "3 · Multicast",
      body: "A graded check on why multicast is on every posting, the standard you can cite, where to learn it, and the multicast home lab and its limits. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "How does the support posting treat multicast?", options: ["It forbids it", "It ignores it", "It requires it", "It prefers it"], correctIndex: 2, explanation: "The support posting requires multicast; the Technical Manager posting prefers it (NBA, 2026b, 2026d).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "How does the Technical Manager posting treat multicast?", options: ["It prefers it", "It requires it", "It forbids it", "It omits it"], correctIndex: 0, explanation: "The HSAN-naming Technical Manager posting prefers multicast (NBA, 2026d).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Why does lesson 9 call multicast a core skill?", options: ["Every fan's phone runs on multicast", "AT&T's release names it as required", "It is the only protocol in ST 2110", "Two jobs at different levels name it"], correctIndex: 3, explanation: "When two jobs at different levels both name a skill, it is a core skill.", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Which of these terms does lesson 9 list for you to learn?", options: ["Gimbal payload", "IGMP snooping", "Depth of field", "Circle of confusion"], correctIndex: 1, explanation: "Lesson 9 lists unicast and multicast, a multicast group, IGMP join and leave, IGMP snooping, the querier and PIM.", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Between what does PIM work, per lesson 9?", options: ["Cameras", "Routers", "Beltpacks", "Monitors"], correctIndex: 1, explanation: "PIM works between routers; its full definition awaits a sourced revision.", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "What does IGMP stand for?", options: ["Internal Gateway Media Protocol", "Internet Group Management Protocol", "IP Group Multicast Packet format", "Integrated Gigabit Media Port"], correctIndex: 1, explanation: "IGMP, the Internet Group Management Protocol, is how receivers report the groups they want (Cain et al., 2002, section 1).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Which free SMPTE module teaches the multicast terms?", options: ["Module 1.3", "Module 2.2", "Module 1.1", "Part 3"], correctIndex: 0, explanation: "Module 1.3, \"Upper Layers and Multicasting\" (SMPTE, n.d.-a).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Which RFC defines source-specific multicast for IP?", options: ["RFC 4604", "RFC 2110", "RFC 4607", "RFC 1460"], correctIndex: 2, explanation: "RFC 4607 (Holbrook & Cain, 2006). RFC 4604 is cited by it for the IGMPv3 and MLDv2 side.", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Who wrote RFC 4607?", options: ["Simpson and Dachman", "Daley and Carlson", "Messer and Cisco", "Holbrook and Cain"], correctIndex: 3, explanation: "Holbrook, H., & Cain, B. (2006).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "In what year was RFC 4607 published?", options: ["2014", "2017", "2006", "2025"], correctIndex: 2, explanation: "RFC 4607 was published in 2006.", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Why should source-specific multicast not be labeled RFC 4604?", options: ["4604 was withdrawn and replaced by 4607", "4607 cites 4604 only for IGMPv3 and MLDv2", "4604 covers fiber, not multicast at all", "4604 is a league rule, not an RFC at all"], correctIndex: 1, explanation: "Source-specific multicast for IP is RFC 4607; it cites RFC 4604 for the IGMPv3 and MLDv2 side.", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Why does getting an RFC number right matter, per lesson 9?", options: ["You may look it up during a fault", "The league fines wrong numbers", "RFC numbers change each year", "Quizzes never test RFC numbers"], correctIndex: 0, explanation: "Getting the number right matters when you look it up during a fault.", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Which multicast objective does SMPTE's ST 2110 Practical Lab list?", options: ["Trace & fix multicast (IIF/OIF, RPF, PIM)", "Design a league network from scratch", "Install fiber conduit at an arena", "Write a new multicast RFC by hand"], correctIndex: 0, explanation: "\"Trace & fix multicast (IIF/OIF, RPF, PIM neighbor)\" (SMPTE, n.d.-c).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Where does the multicast skill lead, according to lesson 9?", options: ["From the lab to a carrier's design team", "From the words to tracing and fixing", "From the postings to a referee's job", "From a fan's seat to the Replay Center"], correctIndex: 1, explanation: "SMPTE's lab objective shows the skill leads from knowing the words to tracing and fixing a broken stream.", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Which symptom does lesson 9 name for the drill?", options: ["\"Lens will not focus\"", "\"Gimbal is buzzing\"", "\"Receiver joined, no picture\"", "\"Battery is too hot\""], correctIndex: 2, explanation: "\"Receiver joined, no picture\" and \"every port is flooded.\"", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Which other symptom does lesson 9 name?", options: ["\"Fiber cleaner is dry\"", "\"Tally light is off\"", "\"Audio is too loud\"", "\"Every port is flooded\""], correctIndex: 3, explanation: "\"Every port is flooded\" is the second symptom.", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "How does lesson 11 label its table of symptom causes?", options: ["The league's official fault procedure", "A vendor's certified repair checklist", "Likely causes, reasoned from protocols", "Causes measured on a league network"], correctIndex: 2, explanation: "No source gives a broadcast troubleshooting list, so the table is reasoned from the mechanisms and marked for the reviewer to confirm.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "What does skill 2 in lesson 9 ask you to capture in Wireshark?", options: ["The IGMP join", "The PTP clock", "The SDP file", "The fiber loss"], correctIndex: 0, explanation: "Join the stream from a second computer and capture the IGMP join in Wireshark.", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Which two free resources does lesson 10 list?", options: ["The Practical Lab and the Boot Camp", "Network+ exam and a CFOT exam", "AT&T's release and Rule 13", "EMIP 1.3 and the Wireshark guide"], correctIndex: 3, explanation: "SMPTE's EMIP module 1.3 and the Wireshark User's Guide, version 5.1.0.", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "Which version of the Wireshark User's Guide does the course cite?", options: ["2.1.10", "5.1.0", "1.4.6", "4.6.07"], correctIndex: 1, explanation: "Version 5.1.0 (Wireshark Foundation, n.d.).", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "Why does the course use Wireshark for lab captures?", options: ["The league requires it on live gear", "It costs nothing and its guide is free", "It is the only tool that sees IP", "AT&T supplies it to every arena"], correctIndex: 1, explanation: "Wireshark costs nothing (tier 0) and its guide is free, so it is the course's capture tool.", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "How long is SMPTE's ST 2110 Practical Lab?", options: ["Three weeks", "Ten months", "One hour", "One day"], correctIndex: 3, explanation: "A one-day course (SMPTE, n.d.-c).", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "What does the ST 2110 Practical Lab cost a SMPTE member?", options: ["$99", "$199", "$399", "$599"], correctIndex: 0, explanation: "$99 for members and $199 for non-members (SMPTE, n.d.-c).", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "What does the ST 2110 Practical Lab cost a non-member?", options: ["$99", "$599", "$199", "$798"], correctIndex: 2, explanation: "$199 for non-members (SMPTE, n.d.-c).", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "What must you finish before SMPTE's Practical Lab opens to you?", options: ["The free EMIP modules 1.1 and 1.2", "A Network+ exam with a passing score", "A shadow shift at a league arena", "The Boot Camp or Understanding ST 2110"], correctIndex: 3, explanation: "It is open only after the ST 2110 Boot Camp or Understanding SMPTE ST 2110 (SMPTE, n.d.-c).", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "Why not start with the Practical Lab?", options: ["It is free for anyone who asks", "It covers fiber, not multicast", "It expects the earlier course first", "It is held only in Secaucus"], correctIndex: 2, explanation: "Do not start there; it expects the earlier course first.", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "How many hours does the plan budget for multicast?", options: ["About 1", "About 8", "About 40", "About 80"], correctIndex: 1, explanation: "About 8 hours, as a planning estimate.", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "What is the last step of lesson 10's multicast study plan?", options: ["A one-page \"home lab\" write-up", "A shift on a league network", "A paid certificate exam", "A capture on live gear"], correctIndex: 0, explanation: "The plan ends with a one-page write-up, labeled \"home lab.\"", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "What should you ask about multicast on a job, if allowed?", options: ["How many groups, and how they are named", "Which fans use multicast in the seats", "Whether you may reroute the streams", "How much the carrier charges per group"], correctIndex: 0, explanation: "Ask how many multicast groups the arena sends and how they are named.", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "When you ask about multicast groups on a job, what are you asking for?", options: ["For admin passwords", "To learn, not for access", "For a change window", "For the router keys"], correctIndex: 1, explanation: "You are asking to learn, not asking for access.", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "What goes in your study log about a job's multicast setup?", options: ["Screenshots of the arena's monitors", "The router's admin passwords", "The answer, with nothing confidential", "Copies of the league's runbooks"], correctIndex: 2, explanation: "Write down the answer in your own study log, with nothing confidential in it.", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "How can you tell you are ready for the paid lab?", options: ["You have read every RFC on multicast", "You have watched a full league game", "You own a 48-port managed switch", "You can do and explain lesson 9's skills"], correctIndex: 3, explanation: "You can do the three skills in lesson 9 in your own lab and explain each in plain words.", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "Which EMIP module does lesson 10 point to for multicast?", options: ["Module 2.2", "Module 1.1", "Module 1.3", "Module 2.1"], correctIndex: 2, explanation: "Module 1.3, \"Upper Layers and Multicasting.\"", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "Which lab tier does the multicast lab need?", options: ["Tier 1", "Tier 0", "Tier 2", "Tier 3"], correctIndex: 0, explanation: "The tier 1 lab: a managed switch and a second Linux computer.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "Which tools does lesson 11 name for sending a stream?", options: ["Excel or Word", "Pro Tools or Logic", "Zoom or Teams", "ffmpeg or VLC"], correctIndex: 3, explanation: "A free tool such as ffmpeg or VLC can send a stream, though the course has not reviewed either.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "What has this course done about ffmpeg and VLC?", options: ["Certified both for live use", "Not reviewed either one", "Banned both from the lab", "Bought both for learners"], correctIndex: 1, explanation: "The course has not reviewed either, so check each tool's own documentation.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "What must the switch do for the multicast lab?", options: ["Power over Ethernet", "IGMP snooping", "Fiber conversion", "Wi-Fi broadcast"], correctIndex: 1, explanation: "The lab only works if the switch does IGMP snooping.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "What does the GS308E manual say about IGMP snooping out of the box?", options: ["It is disabled by default", "It runs on VLAN 64 only", "It needs a paid license", "It is enabled by default"], correctIndex: 3, explanation: "\"IGMP snooping is enabled by default\" (NETGEAR, 2026, pp. 46 to 48).", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "What is step 3 of the multicast lab?", options: ["Capture the IGMP join in Wireshark", "Turn snooping off and look again", "Send a stream from one computer", "Write down what changed overall"], correctIndex: 0, explanation: "Step 3: capture the IGMP join in Wireshark.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "What do steps 4 and 5 of the lab compare?", options: ["Two cameras at two different f-stops", "Two fiber cords of different lengths", "A non-joined port, snooping on and off", "Two codecs at two compression ratios"], correctIndex: 2, explanation: "Look at what reaches a port that did not join, with snooping on, then off.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "What does lesson 11 ask you to note about a stream left running?", options: ["Whether, and when, it drops", "Its exact bitrate each second", "The names of other groups", "Its color and audio levels"], correctIndex: 0, explanation: "Step 7: with no querier listed, a joined stream may drop out after some minutes, so record whether it does.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "What does lesson 11 ask you to do with the two symptoms?", options: ["Report them to the league", "Avoid them at all costs", "Make each happen on purpose", "Ignore them until a job"], correctIndex: 2, explanation: "Try to make each symptom happen on purpose, and write down what you did.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "Where are the two symptoms used again later?", options: ["Section 1's map", "Section 7's timed drills", "Lesson 2's network", "Lesson 5's postings"], correctIndex: 1, explanation: "Section 7 uses the same symptoms in timed drills.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "How long is the recorded multicast demo?", options: ["5 minutes", "30 seconds", "1 hour", "12 hours"], correctIndex: 0, explanation: "Record a 5-minute demo and write one page.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "What should the one-page write-up include?", options: ["Setup, results, and what is still unclear", "The league's group names and addresses", "Photos of an arena's network racks", "A copy of the carrier's runbook"], correctIndex: 0, explanation: "What you set up, what you saw with snooping on and off, and what you still do not understand.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "What does the multicast lab not show?", options: ["That you can make multicast work", "That you can run a league's network", "That you can break it on purpose", "That you can capture an IGMP join"], correctIndex: 1, explanation: "It shows you can make multicast work and break it on your own gear, not that you can run a league's network.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "Why can you capture freely in the lab but not on a job?", options: ["Labs have no packets", "Jobs have no packets", "The lab gear is yours", "Captures are illegal"], correctIndex: 2, explanation: "The lab is where you capture freely, because it is yours; live gear needs the owner's go-ahead.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "With snooping on and a querier present, what reaches a port that did not join?", options: ["Every stream", "No stream", "Audio only", "Video only"], correctIndex: 1, explanation: "A snooping switch sends each group only to ports that asked for it (Christensen et al., 2006, section 1; Cisco Systems, 2018).", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "With snooping turned off, which ports in the VLAN get the stream?", options: ["Only the joined port", "No port in the VLAN", "Every port in the VLAN", "Only the router port"], correctIndex: 2, explanation: "Without snooping, the switch forwards multicast to all ports (Christensen et al., 2006, section 1; Cisco Systems, 2018).", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "Which address range holds multicast groups?", options: ["10.0.0.0 to 10.255.255.255", "192.168.0.0 to 192.168.255.255", "172.16.0.0 to 172.31.255.255", "224.0.0.0 to 239.255.255.255"], correctIndex: 3, explanation: "Multicast group addresses run from 224.0.0.0 to 239.255.255.255 (Deering, 1989, section 4).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Must a host join a multicast group to send to it?", options: ["No; any host may send to it", "Yes; only members may send", "Yes; only routers may send", "No; only queriers may send"], correctIndex: 0, explanation: "\"A host need not be a member of a group to send datagrams to it\" (Deering, 1989, section 2).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "How reliable is multicast compared with unicast, per RFC 1112?", options: ["More reliable, since it resends", "The same best-effort reliability", "Less reliable, by its design", "Fully reliable, with replies"], correctIndex: 1, explanation: "Multicast has the \"same \"best-efforts\" reliability as regular unicast IP datagrams\" (Deering, 1989, section 2).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "What message does a receiver send to join a group?", options: ["A Leave Group note", "A General Query", "A Membership Report", "A PIM Prune notice"], correctIndex: 2, explanation: "A host joining a group \"should immediately transmit an unsolicited Version 2 Membership Report\" (Fenner, 1997, section 3).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "When should a host send its Membership Report after joining a group?", options: ["After an hour", "At halftime", "Only if asked", "Immediately"], correctIndex: 3, explanation: "\"When a host joins a multicast group, it should immediately transmit\" a report (Fenner, 1997, section 3).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "In IGMPv3, what kind of report signals a join or a leave?", options: ["A State-Change Report", "A Version 1 Report", "A General Query", "A PIM Register"], correctIndex: 0, explanation: "In IGMPv3, joins and leaves are State-Change Reports (Cain et al., 2002, section 5.1).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "After an IGMPv2 leave, what does the router send before it stops the group?", options: ["A new Membership Report", "Group-Specific Queries", "A PIM Join to the RP", "An SDP file to the sender"], correctIndex: 1, explanation: "It sends Group-Specific Queries; \"If no Reports are received,\" it assumes no local members remain (Fenner, 1997, section 3).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "How many queriers are normally on one physical network?", options: ["Two", "One per port", "One", "One per group"], correctIndex: 2, explanation: "\"There is normally only one Querier per physical network\" (Fenner, 1997, section 3).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "When must a switch act as the querier, per Cisco?", options: ["When more than eight ports are in use", "When a stream runs above 1 Gbps", "When jumbo frames are turned on", "When no multicast router is on the VLAN"], correctIndex: 3, explanation: "\"If there is no multicast router on the VLAN this feature is required\" (Cisco Systems, 2018).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "What does a switch without IGMP snooping do with multicast?", options: ["Floods it to every other port", "Drops it at the port it came in", "Sends it only to the router", "Turns it into unicast copies"], correctIndex: 0, explanation: "It forwards \"a copy of the packet into each of the remaining network interfaces\" (Christensen et al., 2006, section 1).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "What does IGMP snooping let a switch do?", options: ["Send each group to every port", "Send each group only where asked", "Route groups between subnets", "Resend lost multicast packets"], correctIndex: 1, explanation: "A snooping switch conserves bandwidth where \"no node has expressed interest\" (Christensen et al., 2006, section 1).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "What kind of document is RFC 4541, on snooping switches?", options: ["A binding SMPTE media standard", "An IEEE standard for VLAN tags", "Guidance, not a binding standard", "A league rule for every arena"], correctIndex: 2, explanation: "RFC 4541 is Informational guidance, and snooping behavior varies by maker (Christensen et al., 2006, section 1).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "What do routers use to pass multicast between subnets?", options: ["PTP", "SDP", "NMOS", "PIM"], correctIndex: 3, explanation: "PIM, Protocol Independent Multicast (Fenner et al., 2016, Abstract).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "In PIM sparse mode, toward what does a router send its PIM Join?", options: ["The Rendezvous Point", "The default gateway", "The PTP grandmaster", "The NMOS registry"], correctIndex: 0, explanation: "The local router \"sends a PIM Join message towards the RP,\" the Rendezvous Point (Fenner et al., 2016, section 3.1).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Which address range is reserved for source-specific multicast?", options: ["224.0.0.0 to 224.0.0.255", "232.0.0.0 to 232.255.255.255", "10.0.0.0 to 10.255.255.255", "192.168.0.0 to 192.168.0.255"], correctIndex: 1, explanation: "Addresses 232.0.0.0 to 232.255.255.255 are reserved for SSM (Holbrook & Cain, 2006, Abstract).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "In source-specific multicast, what is a \"channel\"?", options: ["One VLAN on one physical switch", "One port on one managed switch", "One group from one named sender", "One fiber pair in one conduit"], correctIndex: 2, explanation: "A receiver asks for group G from source S, a pair called a channel (Holbrook & Cain, 2006, section 1).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Which IGMP version does ST 2110-10 name for senders and receivers?", options: ["IGMPv1, RFC 1112", "IGMPv2, RFC 2236", "No IGMP, only PIM", "IGMPv3, RFC 3376"], correctIndex: 3, explanation: "They \"shall support IPv4 multicast ... including IGMP signaling as specified in IETF RFC 3376\" (SMPTE, 2022b, section 6.5).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "What does IGMP let a multicast router learn?", options: ["Which groups its networks want", "Which sender owns each camera", "Which fiber route is shortest", "Which VLAN is the busiest one"], correctIndex: 0, explanation: "IGMP lets a router learn \"which multicast addresses are of interest\" on each attached network (Cain et al., 2002, section 6).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "What does the GS308E manual say about unknown multicast by default?", options: ["It is blocked", "It is allowed", "It goes to VLAN 64", "It goes to the router"], correctIndex: 1, explanation: "\"By default, multicast traffic from unknown addresses is allowed\" (NETGEAR, 2026, pp. 46 to 48).", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "On which VLAN does the GS308E run IGMP snooping by default?", options: ["VLAN 64", "VLAN 128", "VLAN 1", "No VLAN"], correctIndex: 2, explanation: "\"The default VLAN for IGMP snooping is VLAN 1\" (NETGEAR, 2026, pp. 46 to 48).", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "Which setting do the GS308E's datasheet and manual not list?", options: ["IGMP snooping", "802.1Q VLAN tags", "Unknown multicast", "An IGMP querier"], correctIndex: 3, explanation: "They list snooping, unknown-multicast blocking and VLAN tagging, but no querier setting.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "With no multicast router and no querier, what may happen to a joined stream?", options: ["It may drop out after minutes", "It may double its bitrate", "It may switch to unicast", "It may move to a new group"], correctIndex: 0, explanation: "Nothing refreshes the group, and the switch removes stale membership entries (Cisco Systems, 2018). A reasoned expectation, so record it.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "Why should you never use a 224.0.0.x address for a test stream?", options: ["It is reserved for SSM channels only", "Switches flood it and ST 2110 bars it", "It is one of RFC 1918's private blocks", "It only works on fiber, not copper"], correctIndex: 1, explanation: "Snooping switches forward that range on all ports, and ST 2110 bars senders from it (Christensen et al., 2006, section 2.1.2; SMPTE, 2022b, section 6.5).", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "With Block Unknown Multicast on, where does the GS308E send multicast?", options: ["To every port in the same VLAN", "Only to the switch's uplink port", "Only to ports learned by snooping", "To no port, until it is rebooted"], correctIndex: 2, explanation: "It \"forwards multicast traffic only to ports in the multicast group that the switch learned through IGMP snooping\" (NETGEAR, 2026, pp. 46 to 48).", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "Which Wireshark display filter does lesson 11 use to find the IGMP join?", options: ["rtp", "ptp", "udp", "igmp"], correctIndex: 3, explanation: "Step 3: capture the join and filter with igmp.", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "For \"receiver joined, no picture\" in a lab with no router, what is the first check?", options: ["Is a querier on the VLAN?", "Is the fiber clean at both ends?", "Is the PTP clock in the SDP?", "Is the camera's lens capped?"], correctIndex: 0, explanation: "A likely cause is no querier and no multicast router, so the group ages out (Cisco Systems, 2018).", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "In a capture, what shows that a querier is present?", options: ["A Leave Group message to 224.0.0.2", "Regular General Queries to 224.0.0.1", "RTP packets on UDP port 50000", "A State-Change Report to 232.0.0.1"], correctIndex: 1, explanation: "The querier sends General Queries to the all-systems group, 224.0.0.1 (Fenner, 1997, section 3).", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "For \"every port is flooded,\" what is one likely cause?", options: ["The PTP grandmaster was lost", "A fiber connector is dirty", "Snooping is off or not supported", "The SDP names the wrong port"], correctIndex: 2, explanation: "Without snooping, a switch floods multicast to all ports (Christensen et al., 2006, section 1).", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "If a receiver may have joined the wrong group or source, what do you compare its join with?", options: ["The switch's serial number", "The carrier's alarm list", "The arena's seating chart", "The stream's SDP file"], correctIndex: 3, explanation: "Compare the captured join's group and source with the stream's description (lesson 13).", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "If sender and receiver sit on different subnets, what must carry multicast between them?", options: ["A multicast router running PIM", "A second IGMP querier switch", "A longer patch cable between", "A jumbo frame setting on both"], correctIndex: 0, explanation: "Across subnets, multicast needs a multicast router (Fenner et al., 2016, section 3.1).", sourceLessonSlug: "a-multicast-lab" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: Video over IP
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "st-2110-separate-streams",
      title: "12 · ST 2110: separate streams",
      section: "4 · Video over IP",
      recallContent: [
        {
          prompt: "What must a switch do for the multicast lab, and where do you check?",
          answer: "IGMP snooping; check the switch's datasheet, since the GS308E's product page does not list it.",
        },
        {
          prompt: "What should you record in the multicast lab when snooping is on and off?",
          answer: "What actually reached the port that did not join, each way, and what changed.",
        },
      ],
      body: `**The standard the league runs.** By 2025 the NBA had "expanded SMPTE ST 2110 workflows across its arenas" (Daley, 2025). SMPTE ST 2110 is a family of standards from the Society of Motion Picture and Television Engineers for sending professional media over IP networks. It is split into parts, and each part has its own number.

**The parts.** SMPTE's own FAQ lists them (SMPTE, 2025b):

| Part | What it covers |
|---|---|
| ST 2110-10 | System timing |
| ST 2110-20 | Uncompressed video |
| ST 2110-21 | Traffic shaping (how evenly packets are sent) |
| ST 2110-22 | Constant bit-rate compressed video |
| ST 2110-30 | PCM audio |
| ST 2110-40 | Ancillary data |

**One signal, separate streams.** Look at the table again. Video, audio and ancillary data each have a part of their own. So a camera's picture, its sound and its ancillary data travel as separate streams on the network. A receiver can take the picture without the sound, or the sound without the picture.

**Where SDI fits.** Lesson 7 of the CREW-04 camera course covers SDI as a connector on a camera. On an SDI cable, one signal carries everything for one camera. On an ST 2110 network, the same things travel as separate streams. SMPTE's own documents map one onto the other:

| What | How SDI carries it | ST 2110 part that carries it on IP |
|---|---|---|
| Picture | The video samples, inside a signal that also has blanking time (SMPTE, 2022c, section 6.3.1) | ST 2110-20, "uncompressed active video": the picture without SDI's blanking (SMPTE, 2022d, section 1) |
| Sound | 24-bit audio "multiplexed (embedded) into the horizontal ancillary data space": up to 16 channels on HD-SDI, 32 on 3G-SDI level A (SMPTE, 2010, scope 1.3 and 1.4) | ST 2110-30, PCM audio "by reference to AES67" (SMPTE, 2025a, section 1) |
| Data (captions and more) | Ancillary (ANC) data packets in "either the HANC data space or the VANC data space" (SMPTE, 2023, section 5.1) | ST 2110-40, which maps the same ANC packets into RTP (SMPTE, 2023, section 5.1) |
| Timing | Part of the one SDI signal | ST 2110-10: PTP and RTP timestamps (SMPTE, 2022b, sections 7.2 and 7.6.4) |

The timing row's SDI entry is this course's reading, not a quoted line. SMPTE's FAQ gives the reason for the split: "All elements can be routed separately and brought together again at the endpoint" (SMPTE, 2025b).

**Two details that trip people up.** Embedded audio packets are valid ANC packets, but "they should not be transmitted using this method": audio goes in ST 2110-30, not -40 (SMPTE, 2023, section 5.2.1). And channel counts differ: "SDI allows the carriage of at least 16 embedded audio channels," while an ST 2110-30 sender at its basic level sends them as several smaller streams, for example "One SDI audio group" of 4 channels (SMPTE, 2025a, section 6.2.2).

**Timing holds it together.** If the picture and the sound travel separately, something has to keep them in step. That is the job of part -10, system timing. Wes Simpson's explainer of part -10 describes PTP, the Precision Time Protocol, as giving every device a common reference clock "accurate to better than a microsecond" (Simpson, 2017). Section 5 covers timing.

**Why the parts matter on game night.** When a fault comes in, the parts tell you what to ask. Is the picture missing, or the sound? Is it the uncompressed stream or a compressed one? Each answer points to a different stream, and so to a different place to look.

**A check you can pass.** Name all six parts and what each carries. The plan this course was built on sets the pass mark at 6 of 6.

:::reveal Which ST 2110 part carries PCM audio? ||| ST 2110-30 (SMPTE, 2025b).

:::reveal Why can a receiver take a camera's picture without its sound under ST 2110? ||| Video, audio and ancillary data each have their own part, so they travel as separate streams.

:::reveal Which ST 2110 part carries the embedded audio from an SDI signal? ||| ST 2110-30, not -40. Embedded audio packets are valid ANC packets, but SMPTE says they "should not be transmitted using this method" (SMPTE, 2023, section 5.2.1).

## Sources
- ${DALEY_2025} Locator: the paragraph on ST 2110 workflows across the arenas.
- ${SMPTE_FAQ} Locator: the answer listing the parts of ST 2110.
- ${SIMPSON_2017} Locator: the paragraph on PTP and the common reference clock.
- ${SMPTE_2110_20} Locator: section 1, scope ("uncompressed active video").
- ${SMPTE_2110_21} Locator: section 6.3.1, the gapped sender and SDI's vertical blanking.
- ${SMPTE_OV299} Locator: scope, items 1.3 and 1.4 (embedded audio; 16 and 32 channels).
- ${SMPTE_2110_30} Locator: section 1 (scope, AES67) and section 6.2.2 with its note (SDI audio groups).
- ${SMPTE_2110_40} Locator: section 5.1 (HANC and VANC; mapping into RTP) and section 5.2.1 (audio not sent by this method).
- ${SMPTE_2110_10} Locator: sections 7.2 and 7.6.4, PTP, RTP timestamps and the SDI alignment point.`,
    },
    {
      slug: "finding-and-connecting-streams",
      title: "13 · Finding and connecting streams",
      section: "4 · Video over IP",
      recallContent: [
        {
          prompt: "Which ST 2110 part carries uncompressed video, and which carries ancillary data?",
          answer: "ST 2110-20 carries uncompressed video; ST 2110-40 carries ancillary data.",
        },
        {
          prompt: "What does PTP give every device, according to Simpson (2017)?",
          answer: "A common reference clock \"accurate to better than a microsecond.\"",
        },
      ],
      body: `**The problem.** In lesson 12, one camera became several streams. An arena may have many cameras, so a network can carry a great many streams. Two questions follow. How does a receiver know what a stream is and where to find it? And how does a control system tell a receiver to take one stream instead of another?

**NMOS answers the second question.** SMPTE's course pages teach two NMOS specifications: IS-04, which lets a controller find the devices on the network, and IS-05, which lets it connect a sender to a receiver (SMPTE, n.d.-c, n.d.-d). The league's Technical Manager posting lists NMOS among its preferred skills (NBA, 2026d).

**SDP answers the first.** An SDP (Session Description Protocol) file is a short text file that describes one stream. ST 2110-10 says senders "shall construct one SDP session description ... for each RTP stream (or redundant pair of streams)," and receivers "shall provide a capability to ingest and act upon an SDP object" (SMPTE, 2022b, section 8.1). In NMOS, a sender exposes its SDP file at its transport file endpoint (Advanced Media Workflow Association [AMWA], n.d.). "An SDP description is entirely textual": each line is one letter, an equals sign and a value (Begen et al., 2021, section 5). ST 2110-20 names RFC 4566 for SDP (SMPTE, 2022d, section 7.1; Handley et al., 2006); RFC 8866 replaced it in 2021 and keeps the same line types (Begen et al., 2021). SMPTE's free module 2.2, "SDP and PTP," teaches it too (SMPTE, n.d.-a).

**SMPTE's own example.** This is the first media section of the example in ST 2110-10, Annex B (SMPTE, 2022b, Annex B). The fmtp line wraps here; in a real file it is one line.

\`\`\`
v=0
o=- 123456 11 IN IP4 192.168.100.2
s=Example of a SMPTE ST2110-20 signal
i=this example is for 720p video at 59.94
t=0 0
a=recvonly
a=group:DUP primary secondary
m=video 50000 RTP/AVP 112
c=IN IP4 239.100.9.10/32
a=source-filter: incl IN IP4 239.100.9.10 192.168.100.2
a=rtpmap:112 raw/90000
a=fmtp:112 sampling=YCbCr-4:2:2; width=1280; height=720; exactframerate=60000/1001; depth=10; TCS=SDR; colorimetry=BT709; PM=2110GPM; SSN=ST2110-20:2017; TSMODE=SAMP; TSDELAY=0
a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:37
a=mediaclk:direct=0
a=mid:primary
\`\`\`

**Line by line.**

| Line | What it says | Source |
|---|---|---|
| v=0 | SDP version, always 0 | Begen et al. (2021, section 5.1) |
| t=0 0 | "this session is permanent (has no begin or end time)" | SMPTE (2022b, Annex B) |
| a=group:DUP | Two identical copies are sent, tagged primary and secondary, for ST 2022-7 (section 5) | SMPTE (2022b, section 8.5) |
| m=video 50000 RTP/AVP 112 | Video, on **UDP port 50000**, over RTP, payload type 112 | Begen et al. (2021, section 5.14) |
| c=IN IP4 239.100.9.10/32 | The **multicast group address**; for IPv4 multicast the number after the slash is a time-to-live | Begen et al. (2021, section 5.7) |
| a=source-filter | The **sender's address**, 192.168.100.2, so a receiver can use source-specific multicast | SMPTE (2022b, section 8.4) |
| a=rtpmap:112 raw/90000 | **Format**: "raw" means uncompressed ST 2110-20 video; 90000 is the 90 kHz RTP clock | SMPTE (2022d, section 7.1) |
| a=fmtp | The picture: 4:2:2 sampling, 1280 by 720, 60000/1001 (59.94) frames a second, 10-bit, BT.709 color | SMPTE (2022d, section 7.2) |
| a=ts-refclk | The PTP clock this stream follows: grandmaster 39-A7-94-FF-FE-07-CB-D0, domain 37 | SMPTE (2022b, section 8.2) |
| a=mediaclk:direct=0 | The media clock comes straight from that reference clock | SMPTE (2022b, section 8.3) |

**The skill, with its answer key.** Open an SDP file and point out its address, port and format lines. Address: the c= line, plus the source in source-filter. Port: the number after m=video. Format: rtpmap plus fmtp. One more line to know: ST 2110-21 requires video senders to add TP= (the sender type, lesson 15) to the fmtp line (SMPTE, 2022c, section 8.1), which SMPTE's -10 example leaves out. Practice on an SDP file from your own lab, never on a file from a live network without permission.

**How a receiver uses it.** Put together from the sections above: it joins the c= group (from the source-filter source, if it uses source-specific multicast), listens on the m= port, decodes with rtpmap and fmtp, and checks that ts-refclk names the same PTP clock it follows; ST 2110-21 says receivers "can compare the value of this parameter with their own reference clock source" (SMPTE, 2022c, section 7.2.1). So a receiver that joined the wrong stream (lesson 11's table) is checked against the SDP file.

**Why it matters on game night.** If a receiver is connected to the wrong stream, the picture can look fine and still be the wrong camera. If a controller cannot find a device, nothing can be connected to it. Knowing which system finds devices (IS-04) and which connects them (IS-05) tells you where to look first.

**What to ask on a job.** If an employer allows it, ask whether the arena's gear is connected by an NMOS controller or set up by hand, and where the stream descriptions are kept. Write the answer in your study log.

:::reveal Which NMOS specification lets a controller find devices, and which connects a sender to a receiver? ||| IS-04 finds devices; IS-05 connects a sender to a receiver (SMPTE, n.d.-c, n.d.-d).

:::reveal Where does SMPTE's free course teach SDP? ||| Essentials of Media over IP, module 2.2, "SDP and PTP" (SMPTE, n.d.-a).

:::reveal In SMPTE's example SDP file, which multicast group and port does the primary stream use? ||| Group 239.100.9.10 (the c= line), port 50000 (the number after m=video) (SMPTE, 2022b, Annex B).

## Sources
- ${SMPTE_LAB} Locator: "Objectives" list, NMOS IS-04 and IS-05.
- ${SMPTE_UNDERSTANDING} Locator: course outline, NMOS.
- ${SMPTE_EMIP} Locator: module list, module 2.2.
- ${NBA_POST_TECH_MANAGER} Locator: "Preferred qualifications."
- ${SMPTE_2110_10} Locator: section 8.1 (one SDP per stream), sections 8.2 to 8.5 (ts-refclk, mediaclk, source-filter, DUP), Annex B (the example, informative).
- ${SMPTE_2110_20} Locator: sections 7.1 and 7.2, the rtpmap and fmtp parameters; section 7.1 names RFC 4566.
- ${SMPTE_2110_21} Locator: section 7.2.1 (receivers compare the reference clock) and section 8.1 (TP=).
- ${RFC_8866} Locator: section 5 (the textual format), 5.1 (v=), 5.7 (c=) and 5.14 (m=).
- ${RFC_4566} Locator: the whole standard, as the version ST 2110-20 names.
- ${AMWA_IS05} Locator: the transport file passage in the Overview.`,
    },
    {
      slug: "bandwidth-math",
      title: "14 · Bandwidth math",
      section: "4 · Video over IP",
      recallContent: [
        {
          prompt: "What does NMOS IS-05 do?",
          answer: "It lets a controller connect a sender to a receiver.",
        },
        {
          prompt: "Why can a picture look fine and still be wrong on an IP network?",
          answer: "The receiver may be connected to the wrong stream, so it shows the wrong camera.",
        },
      ],
      body: `${QR("a broadcast network engineer, to confirm or correct the reading of the 250 Mbps figure once a primary source states the format an arena hands to the network")}

**Start with uncompressed video.** MDL Communications' ST 2110 bandwidth calculator gives about 2.486 gigabits per second (Gbps) for the active picture of uncompressed 1080p59.94 video at 10-bit 4:2:2 (MDL Communications, n.d.). That is one camera at a common HD sports format.

**What the league said.** The NBA's Ken DeGennaro told CNET that most video "comes back as uncompressed video at about 250 megabits per second per stream" (Carlson, 2026). A megabit (Mb) is a thousandth of a gigabit.

**The puzzle.** Put the two numbers side by side:

- Uncompressed 1080p59.94: about 2.486 Gbps, which is 2,486 Mbps.
- The quote: about 250 Mbps.

The uncompressed figure is about ten times bigger. One tenth of 2,486 Mbps is about 249 Mbps, which matches the quote closely. So one of two things is likely true. Either the streams are compressed about 10 to 1, or the number was simplified for a general audience.

**A codec that fits, maybe.** JPEG XS is described as visually the same as uncompressed down to about 10 to 1 (AIMS Alliance, 2019), and the JPEG committee gives its "Typical compression ratios are up to 10:1" (JPEG, n.d.). That fits the numbers. But no source names the codec this network uses. So treat it as a reasoned guess: a compressed codec, possibly JPEG XS, at a ratio that depends on the picture format. Say so whenever you use it.

**Three findings that sharpen the guess.** Each is reported by its source, and none says what runs on the network today.

1. **The league tested JPEG XS on this network.** In July 2024, Sports Video Group reported that "The NBA is also working with MediaKind and a handful of other vendors to test JPEG XS encoding on the HSAN" (Dachman, 2024). A test is not a statement of what is in use.
2. **10 to 1 may be too much for sports.** A broadcaster's own lab test on live sports content found that "At compression ratios less than 6:1, JPEG XS is very nearly visually lossless," but "JPEG XS encoded live sports content is not visually lossless at 10:1 compression" (BT, 2022, p. 6). The same paper found "JPEG 2000 is in the order of 25% more efficient than JPEG XS" (BT, 2022, p. 6).
3. **The picture format changes the ratio.** No source gives the format either. If games travel as 1080i59.94, which sends 29.97 full frames a second instead of 59.94, the active picture is about half: 1920 x 1080 pixels x 20 bits x 29.97 frames a second is about 1.243 Gbps. Then 250 Mbps is about 5 to 1, the range where BT found JPEG XS "very nearly visually lossless." That is arithmetic on a guessed format, so it stays a guess too.

**History.** The 2014 network, HSAN2, was "JPEG2000-based" (Dachman, 2014). So compression on this network is not new. Inside ST 2110, compressed video travels under part -22, which carries a codec only if it makes "a constant number of bytes per frame" (Society of Motion Picture and Television Engineers [SMPTE], 2022a, section 4). Other common codecs, such as H.264 and HEVC, are not covered in this course's research, so this lesson does not discuss them.

**Your worksheet.** Work this with a calculator:

| Question | Working | Answer |
|---|---|---|
| How many uncompressed 1080p59.94 streams fit on a 10 Gbps link? | 10 ÷ 2.486 = 4.02 | 4 streams |
| At about 249 Mbps each (10 to 1), how many fit? | 10,000 ÷ 249 = 40.2 | 40 streams |
| If the format is 1080i59.94, about what ratio is 250 Mbps? | 1,243 ÷ 250 = 4.97 | About 5 to 1 |

Ten times the compression gives ten times the streams on the same link. The 2.486 Gbps figure is for the active picture only, so treat these answers as ceilings, not plans.

**Bigger pipes too.** The fourth-generation network brings about four times the bandwidth of the current setup (Carlson, 2026). Compression and bandwidth are two ways to fit more streams, and this network uses at least the second.

**What to ask on a job.** Ask what the truck hands to the league network: SDI, ST 2110, or a compressed format. That one answer settles the guess for your arena.

:::reveal About what bitrate is uncompressed 1080p59.94 at 10-bit 4:2:2, per MDL's calculator? ||| About 2.486 Gbps of active picture (MDL Communications, n.d.).

:::reveal Why is "a compressed codec, possibly JPEG XS" still a guess, not a fact? ||| It fits the numbers, and the league tested JPEG XS on the network in 2024, but no source names the codec or the picture format this network uses.

## Sources
- ${MDL} Locator: calculator, 1080p59.94, 10-bit, 4:2:2, active picture.
- ${CARLSON_2026} Locator: the paragraph quoting Ken DeGennaro on 250 megabits per second, and the paragraph on four times the bandwidth.
- ${AIMS_2019} Locator: the slide on visually lossless compression ratios.
- ${DACHMAN_2014} Locator: the paragraph describing the JPEG2000-based network.
- ${JPEG_XS} Locator: overview page, the typical compression ratios.
- ${DACHMAN_2024} Locator: the paragraph on testing JPEG XS encoding on the HSAN.
- ${BT_2022} Locator: page 6, the findings at 6:1 and 10:1 and the JPEG 2000 comparison.
- ${SMPTE_2110_22} Locator: section 4, constant bytes and constant packets per frame.`,
    },
    {
      slug: "packets-and-pacing",
      title: "15 · Packets and pacing",
      section: "4 · Video over IP",
      recallContent: [
        {
          prompt: "About how many uncompressed 1080p59.94 streams fit on a 10 Gbps link?",
          answer: "4 (10 ÷ 2.486 = 4.02).",
        },
        {
          prompt: "Which compression did the 2014 network use?",
          answer: "JPEG 2000 (Dachman, 2014).",
        },
      ],
      body: `**An extension lesson.** This lesson goes one level deeper. It is useful once lessons 12 to 14 make sense, and a reviewer may ask you about it, but you can come back to it later.

**How big a packet may be.** Video over IP is cut into packets. ST 2110-10 sets "a standard UDP datagram size limit of 1,460 bytes." It also describes an extended limit of 8,960 bytes that "could be useful on networks that support Ethernet Jumbo Frames" (Simpson, 2017). A byte is 8 bits.

**A correction to carry.** An earlier draft said jumbo frames are "typical" for ST 2110. The source says the standard limit is 1,460 bytes, and the larger size "could be useful" on networks that support it. The standard itself agrees: "The Standard UDP Size Limit shall be 1460 octets," and the 8,960-octet limit is the "optional Extended UDP Size Limit" (SMPTE, 2022b, sections 6.3 and 6.4). So jumbo frames are optional, not the norm. The 1,460 comes from Ethernet's payload, "officially limited to a maximum of 1500 octets," minus 40 octets for the larger (IPv6) header; the 8,960 is based on a 9,000-octet jumbo frame, which is "not strictly allowed within the IEEE 802.3 family of standards" (SMPTE, 2022b, Annex A).

**How evenly packets are sent.** ST 2110-21 sorts senders into three types (Simpson, 2018):

| Sender type | How it sends |
|---|---|
| Narrow Linear | Spaces packets evenly |
| Narrow | The same, but sends nothing during blanking (the short gap between frames) |
| Wide | Allowed "significantly greater burstiness" |

**Why it matters.** Because Wide senders are burstier, receivers and switches need bigger buffers to handle them (Simpson, 2018). So the sender type is not a detail for the sender alone: it tells the people who choose receivers and switches how much room to leave.

**When a packet is too big.** ST 2110 does not cut packets up: "Senders shall ensure that there are no fragmented IP packets," and "Receivers need not reassemble fragmented IP datagrams" (SMPTE, 2022b, section 6.3). A sender that goes over 1,460 must say so in its SDP file with a MAXUDP value; without one, "Receivers shall assume the Standard UDP Size Limit" (SMPTE, 2022b, section 8.6). Put together: if a sender uses jumbo packets on a path where any port does not accept them, those packets do not cross that hop. The stream is lost there, not slowed down. The first check is the SDP's MAXUDP value against the packet size set on every port along the path.

**When a burst is too big.** ST 2110-21 limits how bursty a sender may be "in order to promote compatibility with a wide variety of switches with varied buffer sizes" (SMPTE, 2022c, section 6.1). When packets arrive at a switch port faster than it can send them out, they wait in a buffer (SMPTE, 2022c, Annex A). When the buffer fills, packets are dropped: microbursts "can lead to buffer exhaustion, which results in tail drops and lost packets," and ordinary monitoring misses it because those tools are "monitoring very large time intervals" (Cisco Systems, 2017). Nothing is resent. ST 2110 runs on UDP, so "Receivers should be capable of receiving streams with occasional dropped, late or out-of-order packets" (SMPTE, 2022b, section 6.2). The standard's answer to loss on one path is a second copy on another path, which section 5 covers (SMPTE, 2022b, section 8.5).

**What no source says.** What a viewer sees when packets are lost (a frozen frame, a glitch or a black frame) depends on the receiver's design, which ST 2110-21 leaves out of scope (SMPTE, 2022c, section 6.1). No source this course read describes it, so this lesson does not.

**A check you can pass.** Name the three ST 2110-21 sender types and say which needs the most buffering. State ST 2110-10's standard packet size limit.

:::reveal What is ST 2110-10's standard UDP datagram size limit? ||| 1,460 bytes; the 8,960-byte extended limit is optional, for networks that support Ethernet jumbo frames (Simpson, 2017).

:::reveal Which ST 2110-21 sender type needs the biggest buffers, and why? ||| Wide, because it is allowed "significantly greater burstiness" (Simpson, 2018).

:::reveal Why does a stream with 8,960-byte packets fail on a path with one standard 1,500-byte port? ||| ST 2110 does not fragment packets, so a packet too big for that port cannot cross it; the stream is lost at that hop (SMPTE, 2022b, section 6.3).

## Sources
- ${SIMPSON_2017} Locator: the paragraphs on the 1,460-byte limit and the 8,960-byte extended limit.
- ${SIMPSON_2018} Locator: the paragraphs describing Narrow, Narrow Linear and Wide senders and their buffering.
- ${SMPTE_2110_10} Locator: sections 6.2 to 6.4 (UDP, size limits, no fragmenting), section 8.5 (DUP), section 8.6 (MAXUDP), Annex A (Ethernet frame sizes).
- ${SMPTE_2110_21} Locator: section 6.1 (the network compatibility model; receiver design out of scope) and Annex A (buffer demand).
- ${CISCO_MICROBURSTS} Locator: the opening sections on microbursts, buffer exhaustion and monitoring intervals.`,
    },
    {
      slug: "a-study-path-for-media-over-ip",
      title: "16 · A study path for media over IP",
      section: "4 · Video over IP",
      recallContent: [
        {
          prompt: "Are jumbo frames typical for ST 2110?",
          answer: "No. The standard limit is 1,460 bytes; the 8,960-byte limit is optional (Simpson, 2017).",
        },
        {
          prompt: "What does a Narrow sender do during blanking?",
          answer: "It sends nothing.",
        },
      ],
      body: `**Putting it together.** Sections 2 to 4 pointed to many resources. Here they are in one order, free first. Details were read on October 21, 2026.

**Free.**

| Resource | What it gives you | Source |
|---|---|---|
| SMPTE Essentials of Media over IP | Part 1: IP basics and multicast (modules 1.1 to 1.3). Part 2: ST 2022 and ST 2110 history, SDP and PTP, and NMOS. | SMPTE (n.d.-a) |
| SMPTE ST 2110 FAQ | The parts of ST 2110, from SMPTE itself | SMPTE (2025b) |
| MDL Communications' bandwidth calculator | Bitrates for any format, for your worksheet | MDL Communications (n.d.) |
| AIMS Alliance's JPEG XS slides | How JPEG XS fits into ST 2110 | AIMS Alliance (2019) |
| Wes Simpson's TV Tech explainers | ST 2110-10 packet sizes and ST 2110-21 pacing | Simpson (2017, 2018) |

**Paid, when you are ready.**

| Course | Format and length | Price | Source |
|---|---|---|---|
| Understanding SMPTE ST 2110 | Instructor-led, 12 hours over three weeks | $399 for members, $599 for non-members | SMPTE (n.d.-d) |
| ST 2110 Practical Lab | One day, after Understanding ST 2110 or the Boot Camp | $99 for members, $199 for non-members | SMPTE (n.d.-c) |

The Understanding ST 2110 cohort listed on October 21, 2026, began July 21, 2026, so check the page for the next date.

**Membership dues.** SMPTE's individual membership page, read October 21, 2026, lists: Executive $295 a year, Professional $180, Retired $89, Student $15 and Early Career $49. Only the Professional tier is described as including "exclusive discounts on conferences and virtual courses" (SMPTE, n.d.-b).

**The arithmetic of joining.** Taking both paid courses as a non-member costs $599 + $199 = $798. As a Professional member, $399 + $99 = $498, plus $180 dues, is $678: a saving of $120 in the first year. The page does not say whether the other tiers get member course prices, so do not assume they do.

**The questions to carry to a job.** From sections 2 to 4, three questions are worth asking any arena-side employer, if they allow it:

1. What does the truck hand to the league network: SDI, ST 2110, or a compressed format? (lesson 14)
2. How many multicast groups does the arena send, and how are they named? (lesson 10)
3. Is the gear connected by an NMOS controller or by hand? (lesson 13)

**What comes next.** Sections 5 to 7 cover timing and two-path redundancy, fiber and the physical layer, and monitoring and fault isolation under a clock.

:::reveal What do the two paid SMPTE courses cost together for a non-member? ||| $798: $599 for Understanding SMPTE ST 2110 plus $199 for the Practical Lab.

:::reveal What do both paid courses cost in the first year as a Professional member, dues included? ||| $678: $399 + $99 for the courses plus $180 dues, against $798 as a non-member (SMPTE, n.d.-b).

:::reveal Which part of SMPTE's free course covers SDP, PTP and NMOS? ||| Part 2 of Essentials of Media over IP (SMPTE, n.d.-a).

## Sources
- ${SMPTE_EMIP} Locator: course page, Part 1 and Part 2 module lists.
- ${SMPTE_FAQ} Locator: the answer listing the parts of ST 2110.
- ${MDL} Locator: calculator page.
- ${AIMS_2019} Locator: title slide and overview.
- ${SIMPSON_2017} Locator: whole article.
- ${SIMPSON_2018} Locator: whole article.
- ${SMPTE_UNDERSTANDING} Locator: course page, format, length, prices and the listed cohort date.
- ${SMPTE_LAB} Locator: course page, length, prices and prerequisites.
- ${SMPTE_MEMBERSHIP} Locator: the individual membership tiers and their yearly dues; the Professional tier's description.`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Video over IP",
      section: "4 · Video over IP",
      body: "A graded check on the parts of ST 2110, how streams are found and connected, bandwidth math, packet size and pacing, and a study path for media over IP. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which ST 2110 part covers system timing?", options: ["ST 2110-20", "ST 2110-30", "ST 2110-10", "ST 2110-40"], correctIndex: 2, explanation: "ST 2110-10 covers system timing (SMPTE, 2025b).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Which ST 2110 part covers uncompressed video?", options: ["ST 2110-20", "ST 2110-22", "ST 2110-10", "ST 2110-30"], correctIndex: 0, explanation: "ST 2110-20 covers uncompressed video; -22 is constant bit-rate compressed video.", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Which ST 2110 part covers traffic shaping?", options: ["ST 2110-20", "ST 2110-40", "ST 2110-10", "ST 2110-21"], correctIndex: 3, explanation: "ST 2110-21 covers traffic shaping, how evenly packets are sent.", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Which ST 2110 part covers constant bit-rate compressed video?", options: ["ST 2110-20", "ST 2110-22", "ST 2110-21", "ST 2110-30"], correctIndex: 1, explanation: "ST 2110-22 covers constant bit-rate compressed video (SMPTE, 2025b).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Which ST 2110 part carries PCM audio?", options: ["ST 2110-20", "ST 2110-30", "ST 2110-40", "ST 2110-10"], correctIndex: 1, explanation: "ST 2110-30 carries PCM audio (SMPTE, 2025b).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Which ST 2110 part carries ancillary data?", options: ["ST 2110-30", "ST 2110-21", "ST 2110-22", "ST 2110-40"], correctIndex: 3, explanation: "ST 2110-40 carries ancillary data (SMPTE, 2025b).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Where does lesson 12's list of ST 2110 parts come from?", options: ["SMPTE's own FAQ", "The NBA's Rule 13", "AT&T's release", "A job posting"], correctIndex: 0, explanation: "SMPTE's ST 2110 FAQ lists the parts (SMPTE, 2025b).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Under ST 2110, how do a camera's picture, sound and ancillary data travel?", options: ["As one SDI cable", "As one audio file", "As separate streams", "As one fiber color"], correctIndex: 2, explanation: "Video, audio and ancillary data each have a part of their own, so they travel as separate streams.", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "What can a receiver do because ST 2110 streams are separate?", options: ["Skip the network entirely", "Change the camera's lens", "Turn off the arena's PTP", "Take the picture without the sound"], correctIndex: 3, explanation: "A receiver can take the picture without the sound, or the sound without the picture.", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Which ST 2110 part carries SDI's embedded audio on an IP network?", options: ["ST 2110-40", "ST 2110-20", "ST 2110-30", "ST 2110-21"], correctIndex: 2, explanation: "Embedded audio goes in ST 2110-30; SMPTE says it \"should not be transmitted\" in -40 (SMPTE, 2023, section 5.2.1).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "What keeps separate picture and sound streams in step?", options: ["Audio part -30 alone", "System timing, part -10", "The camera's lens", "The fiber's color"], correctIndex: 1, explanation: "Part -10, system timing, keeps them in step; section 5 covers timing.", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "What does PTP give every device, per Simpson's explainer of part -10?", options: ["A clock \"better than a microsecond\"", "A frame rate \"of 59.94 at most\"", "A stream \"of 250 Mbps each\"", "A packet \"of 1,460 bytes\""], correctIndex: 0, explanation: "PTP gives every device a common reference clock \"accurate to better than a microsecond\" (Simpson, 2017).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "What does PTP stand for?", options: ["Precision Time Protocol", "Packet Transfer Path", "Primary Test Picture", "Program Tally Port"], correctIndex: 0, explanation: "PTP is the Precision Time Protocol.", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "What did the NBA expand across its arenas by 2025?", options: ["Satellite uplink trucks", "SMPTE ST 2110 workflows", "Analog audio snakes", "Cellular bonding kits"], correctIndex: 1, explanation: "\"Expanded SMPTE ST 2110 workflows across its arenas\" (Daley, 2025).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Why do the ST 2110 parts help on game night, per lesson 12?", options: ["They tell fans which seat to take", "They set the referee's comms", "Each points to a stream to check", "They decide the replay triggers"], correctIndex: 2, explanation: "Is the picture missing or the sound? Each answer points to a different stream, and so a different place to look.", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "What pass mark does the plan set for naming the six parts?", options: ["4 of 6", "3 of 6", "5 of 6", "6 of 6"], correctIndex: 3, explanation: "Name all six parts and what each carries; the pass mark is 6 of 6.", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "What does NMOS IS-04 do?", options: ["Sets the packet size limit", "Carries the PCM audio", "Lets a controller find devices", "Sends the timing clock"], correctIndex: 2, explanation: "IS-04 lets a controller find the devices on the network (SMPTE, n.d.-c, n.d.-d).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "What does NMOS IS-05 do?", options: ["Connects a sender to a receiver", "Finds devices on the network", "Compresses video by 10 to 1", "Counts the replay triggers"], correctIndex: 0, explanation: "IS-05 lets a controller connect a sender to a receiver (SMPTE, n.d.-c, n.d.-d).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "Which posting lists NMOS among its preferred skills?", options: ["Automated Officiating Rep", "Replay Center Operator", "Hawk-Eye Camera Tech", "Technical Manager, Local Media"], correctIndex: 3, explanation: "The Technical Manager posting prefers NMOS (NBA, 2026d).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "Where does SMPTE's free course teach SDP?", options: ["EMIP module 1.1", "EMIP module 2.2", "The Boot Camp", "RFC 4607"], correctIndex: 1, explanation: "Module 2.2, \"SDP and PTP\" (SMPTE, n.d.-a).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "What is EMIP module 2.2 called?", options: ["\"Fiber and lasers\"", "\"SDP and PTP\"", "\"VLANs and IP\"", "\"Lenses and focus\""], correctIndex: 1, explanation: "Module 2.2 is \"SDP and PTP\" (SMPTE, n.d.-a).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "What is an SDP file?", options: ["A video file of one camera angle", "A firmware file for a switch", "A log of every IGMP join made", "A text file describing one stream"], correctIndex: 3, explanation: "\"An SDP description is entirely textual\" (Begen et al., 2021, section 5), and ST 2110 senders build one per stream (SMPTE, 2022b, section 8.1).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "Which lines should you be able to point out in an SDP file after module 2.2?", options: ["Address, port and format", "Lens, iris and focus", "Owner, price and date", "Fiber, loss and color"], correctIndex: 0, explanation: "Open an SDP file and point out its address, port and format lines: a goal from the course's plan.", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "Where should you practice reading SDP files?", options: ["On a live arena's network", "On a rival league's gear", "On a file from your own lab", "On the carrier's backbone"], correctIndex: 2, explanation: "Practice on an SDP file from your own lab, never on a live network's file without permission.", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "What can happen if a receiver is connected to the wrong stream?", options: ["The arena loses all its power", "The fiber cable melts at once", "The referee's beltpack fails", "A fine picture of the wrong camera"], correctIndex: 3, explanation: "The picture can look fine and still be the wrong camera.", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "If a controller cannot find a device, what follows?", options: ["It connects to every stream", "It sends at double the rate", "Nothing can be connected to it", "It becomes the PTP clock"], correctIndex: 2, explanation: "If a controller cannot find a device, nothing can be connected to it.", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "What should you ask on a job about connecting gear, if allowed?", options: ["Which fans can see the streams?", "NMOS controller or set up by hand?", "Who pays for the fiber miles?", "When is the next replay rule?"], correctIndex: 1, explanation: "Ask whether the arena's gear is connected by an NMOS controller or set up by hand, and where stream descriptions are kept.", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "Which two SMPTE pages does lesson 13 cite for NMOS?", options: ["Practical Lab and Understanding 2110", "The EMIP modules 1.1 and 1.2 only", "The ST 2110 FAQ and the Boot Camp", "RFC 4607 and the Wireshark guide"], correctIndex: 0, explanation: "SMPTE's ST 2110 Practical Lab and Understanding SMPTE ST 2110 pages (SMPTE, n.d.-c, n.d.-d).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "About what bitrate is uncompressed 1080p59.94 at 10-bit 4:2:2, per MDL?", options: ["About 2.486 Gbps", "About 250 Mbps", "About 24.86 Gbps", "About 1.460 Gbps"], correctIndex: 0, explanation: "About 2.486 Gbps of active picture (MDL Communications, n.d.).", sourceLessonSlug: "bandwidth-math" },
          { prompt: "Which part of the picture does MDL's 2.486 Gbps figure cover?", options: ["The whole stream", "The active picture", "The audio only", "The overhead only"], correctIndex: 1, explanation: "The figure is for the active picture only.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "What did the NBA's Ken DeGennaro say most video comes back at?", options: ["About 2.5 Gbps per stream", "About 25 Mbps per stream", "About 250 Mbps per stream", "About 118 Mbps per stream"], correctIndex: 2, explanation: "\"Uncompressed video at about 250 megabits per second per stream\" (Carlson, 2026).", sourceLessonSlug: "bandwidth-math" },
          { prompt: "About how many times bigger is the uncompressed figure than the quote?", options: ["About twice", "About 100 times", "About the same", "About ten times"], correctIndex: 3, explanation: "2,486 Mbps against about 250 Mbps: about ten times.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "What is one tenth of 2,486 Mbps?", options: ["About 24.9 Mbps", "About 2,486 Mbps", "About 249 Mbps", "About 497 Mbps"], correctIndex: 2, explanation: "2,486 ÷ 10 is about 249 Mbps, close to the quoted 250.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "What two readings of the 250 Mbps quote does lesson 14 give?", options: ["About 10:1 compression, or simplified", "A typo, or a different sport entirely", "Audio only, or the replay feeds only", "Fiber loss, or a bad patch cable"], correctIndex: 0, explanation: "Either the streams are compressed about 10 to 1, or the number was simplified for a general audience.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "How is JPEG XS described in the AIMS slides?", options: ["Visually the same down to about 100:1", "Lossless only at full bitrate", "Usable only for audio streams", "Visually the same down to about 10:1"], correctIndex: 3, explanation: "JPEG XS is described as visually the same as uncompressed down to about 10 to 1 (AIMS Alliance, 2019).", sourceLessonSlug: "bandwidth-math" },
          { prompt: "Why does the codec behind the 250 Mbps figure stay a guess?", options: ["No source names the codec or format", "JPEG XS cannot carry sports video", "The league banned all compression", "250 Mbps is the uncompressed rate"], correctIndex: 0, explanation: "It fits the numbers and the league tested JPEG XS in 2024 (Dachman, 2024), but no source names the codec or the picture format in use.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "What compression was the 2014 network based on?", options: ["JPEG XS", "JPEG 2000", "HEVC", "H.264"], correctIndex: 1, explanation: "HSAN2 was \"JPEG2000-based\" (Dachman, 2014).", sourceLessonSlug: "bandwidth-math" },
          { prompt: "What does lesson 14 say about H.264 and HEVC?", options: ["Used by HSAN since 2014", "Banned on every arena feed", "The same as JPEG 2000", "Not covered by the research here"], correctIndex: 3, explanation: "They are not covered in this course's research, so the lesson does not discuss them.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "How many uncompressed 1080p59.94 streams fit on a 10 Gbps link?", options: ["4", "10", "40", "2"], correctIndex: 0, explanation: "10 ÷ 2.486 = 4.02, so 4 streams.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "At about 249 Mbps each, how many streams fit on a 10 Gbps link?", options: ["4", "10", "40", "118"], correctIndex: 2, explanation: "10,000 ÷ 249 = 40.2, so 40 streams.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "Why are the worksheet answers ceilings, not plans?", options: ["Links never carry more than 2 streams", "Every stream is always 250 Mbps", "The league caps each arena at 4", "2.486 Gbps is the active picture only"], correctIndex: 3, explanation: "The 2.486 Gbps figure is for the active picture only, so treat the answers as ceilings.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "What do ten times the compression give you on the same link?", options: ["Ten times the delay", "Ten times the fiber", "Ten times the streams", "Ten times the power"], correctIndex: 2, explanation: "Ten times the compression gives ten times the streams on the same link.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "Which way of fitting more streams does the new network use, at least?", options: ["Fewer cameras", "More bandwidth", "Lower frame rates", "Smaller arenas"], correctIndex: 1, explanation: "The fourth generation brings about four times the bandwidth (Carlson, 2026).", sourceLessonSlug: "bandwidth-math" },
          { prompt: "What question settles the 250 Mbps guess for your arena?", options: ["What does the truck hand the network?", "How many fans are in the arena?", "Which team is playing at home?", "What time does the game start?"], correctIndex: 0, explanation: "Ask what the truck hands to the league network: SDI, ST 2110, or a compressed format.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "How many megabits are in a gigabit, as lesson 14 uses them?", options: ["1,000", "100", "10", "1,024,000"], correctIndex: 0, explanation: "A megabit is a thousandth of a gigabit, so 2.486 Gbps is 2,486 Mbps.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "What is ST 2110-10's standard UDP datagram size limit?", options: ["8,960 bytes", "1,460 bytes", "1,500 bytes", "9,000 bytes"], correctIndex: 1, explanation: "\"A standard UDP datagram size limit of 1,460 bytes\" (Simpson, 2017).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "What extended packet limit does ST 2110-10 describe?", options: ["1,460 bytes", "64 bytes", "8,960 bytes", "2,486 bytes"], correctIndex: 2, explanation: "An extended limit of 8,960 bytes for networks that support jumbo frames (Simpson, 2017).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "Are jumbo frames typical for ST 2110?", options: ["Yes; they are required", "Yes; on every network", "No; they are banned", "No; they are optional"], correctIndex: 3, explanation: "The 8,960-byte limit \"could be useful\" where supported; the standard limit is 1,460 bytes.", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "How many bits are in a byte?", options: ["10", "16", "8", "4"], correctIndex: 2, explanation: "A byte is 8 bits.", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "Which ST 2110-21 sender type spaces packets evenly?", options: ["Narrow Linear", "Wide", "Narrow Burst", "Wide Linear"], correctIndex: 0, explanation: "Narrow Linear spaces packets evenly (Simpson, 2018).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "What does a Narrow sender do differently from Narrow Linear?", options: ["Sends twice as many packets", "Sends only the audio stream", "Sends bigger jumbo packets", "Sends nothing during blanking"], correctIndex: 3, explanation: "Narrow is the same as Narrow Linear but sends nothing during blanking (Simpson, 2018).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "Which ST 2110-21 sender type is allowed \"significantly greater burstiness\"?", options: ["Narrow", "Wide", "Narrow Linear", "Linear"], correctIndex: 1, explanation: "Wide senders are allowed \"significantly greater burstiness\" (Simpson, 2018).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "Which sender type needs the biggest buffers in receivers and switches?", options: ["Narrow", "Wide", "Narrow Linear", "None of them"], correctIndex: 1, explanation: "Because Wide is burstier, receivers and switches need bigger buffers (Simpson, 2018).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "What is blanking, as lesson 15 glosses it?", options: ["A frame that is all black", "A fiber with no light in it", "A stream with no audio", "The short gap between frames"], correctIndex: 3, explanation: "Blanking is the short gap between frames.", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "Who does the sender type tell how much room to leave?", options: ["Those choosing receivers and switches", "The fans choosing seats in the arena", "The referees choosing replay angles", "The carrier choosing fiber colors"], correctIndex: 0, explanation: "The sender type tells the people who choose receivers and switches how much buffer room to leave.", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "Which earlier claim does lesson 15 correct?", options: ["That PTP is under a microsecond", "That -30 carries PCM audio", "That jumbo frames are \"typical\"", "That Wide senders are bursty"], correctIndex: 2, explanation: "An earlier draft called jumbo frames \"typical\" for ST 2110; they are optional (Simpson, 2017).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "What does no source say about packet loss on an ST 2110 network?", options: ["That UDP does not resend", "What a viewer sees on screen", "That full buffers drop packets", "That packets are not fragmented"], correctIndex: 1, explanation: "The picture symptom depends on receiver design, which ST 2110-21 leaves out of scope (SMPTE, 2022c, section 6.1); no source describes it.", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "Which free resource gives the parts of ST 2110 from SMPTE itself?", options: ["MDL's bandwidth tool", "AIMS JPEG XS slides", "The SMPTE ST 2110 FAQ", "The Wireshark guide"], correctIndex: 2, explanation: "The SMPTE ST 2110 FAQ (SMPTE, 2025b).", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "Which free resource gives bitrates for your worksheet?", options: ["SMPTE's ST 2110 FAQ page", "MDL's bandwidth calculator", "The AIMS JPEG XS slides", "Professor Messer's videos"], correctIndex: 1, explanation: "MDL Communications' bandwidth calculator gives bitrates for any format.", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "Which free resource explains ST 2110-10 packet sizes and -21 pacing?", options: ["Wes Simpson's TV Tech explainers", "The NBA's Rule 13 on instant replay", "AT&T's press release on HSAN", "Cisco's Networking Basics course"], correctIndex: 0, explanation: "Simpson (2017, 2018) in TV Tech.", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "How long is Understanding SMPTE ST 2110?", options: ["12 hours over three weeks", "One day, in person", "87 videos, self-paced", "Ten months, full-time"], correctIndex: 0, explanation: "Instructor-led, 12 hours over three weeks (SMPTE, n.d.-d).", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "What does Understanding SMPTE ST 2110 cost a member?", options: ["$599", "$399", "$99", "$199"], correctIndex: 1, explanation: "$399 for members, $599 for non-members (SMPTE, n.d.-d).", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "What does Understanding SMPTE ST 2110 cost a non-member?", options: ["$399", "$199", "$599", "$798"], correctIndex: 2, explanation: "$599 for non-members (SMPTE, n.d.-d).", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "When did the Understanding ST 2110 cohort listed on October 21, 2026 begin?", options: ["October 21, 2026", "July 1, 2027", "March 9, 2023", "July 21, 2026"], correctIndex: 3, explanation: "The listed cohort began July 21, 2026, so check the page for the next date.", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "What do both paid courses cost together for a non-member?", options: ["$498", "$599", "$798", "$300"], correctIndex: 2, explanation: "$599 + $199 = $798.", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "What do both paid courses cost together for a member?", options: ["$498", "$798", "$399", "$300"], correctIndex: 0, explanation: "$399 + $99 = $498.", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "What do both paid courses cost a Professional member in the first year, dues included?", options: ["$498", "$798", "$579", "$678"], correctIndex: 3, explanation: "$399 + $99 + $180 dues = $678, against $798 as a non-member: $120 saved (SMPTE, n.d.-b).", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "What were SMPTE's Professional membership dues on October 21, 2026?", options: ["$295 a year", "$49 a year", "$180 a year", "$15 a year"], correctIndex: 2, explanation: "\"Professional - $180 / Year\" (SMPTE, n.d.-b). $295 is Executive, $49 Early Career, $15 Student.", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "Which question does lesson 16 carry over from lesson 14?", options: ["How many groups the arena sends", "What the truck hands to the network", "Whether gear uses an NMOS controller", "Which fans watch on mobile phones"], correctIndex: 1, explanation: "From lesson 14: what does the truck hand to the league network: SDI, ST 2110, or a compressed format?", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "Which question does lesson 16 carry over from lesson 13?", options: ["Multicast group names", "The truck's handoff format", "The arena's fiber route", "NMOS controller or by hand"], correctIndex: 3, explanation: "From lesson 13: is the gear connected by an NMOS controller or by hand?", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "What do sections 5 to 7 cover?", options: ["Timing, fiber, and fault isolation", "Lenses, gimbals and the batteries", "Rigging, sound and stage lighting", "Contracts, pay and the unions"], correctIndex: 0, explanation: "Timing and two-path redundancy, fiber and the physical layer, and monitoring and fault isolation.", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "What does ST 2110-20 carry, in the standard's words?", options: ["\"uncompressed active video\"", "\"compressed video at 10:1\"", "\"embedded audio channels\"", "\"ancillary data packets\""], correctIndex: 0, explanation: "ST 2110-20 carries \"uncompressed active video\": the picture without SDI's blanking (SMPTE, 2022d, section 1).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Where does SDI carry embedded audio?", options: ["In a separate audio-only cable", "In the horizontal ancillary space", "In the PTP timestamp field", "In the SDP file's fmtp line"], correctIndex: 1, explanation: "Audio is \"multiplexed (embedded) into the horizontal ancillary data space\" (SMPTE, 2010, scope 1.3).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "How many embedded audio channels does HD-SDI carry, per SMPTE OV 299-0?", options: ["Up to 4", "Up to 64", "Up to 16", "Up to 2"], correctIndex: 2, explanation: "Up to 16 channels on HD-SDI, 32 on 3G-SDI level A (SMPTE, 2010, scope 1.3 and 1.4).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Why should embedded audio not travel in ST 2110-40?", options: ["-40 is only for video", "-40 cannot run on RTP", "Audio breaks the PTP clock", "SMPTE says audio goes in -30"], correctIndex: 3, explanation: "Embedded audio packets are valid ANC packets, but \"they should not be transmitted using this method\" (SMPTE, 2023, section 5.2.1).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Why does ST 2110 split a signal's elements, per SMPTE's FAQ?", options: ["To route them apart and rejoin them", "To save power at every arena", "To avoid needing a PTP clock", "To make the SDI cables shorter"], correctIndex: 0, explanation: "\"All elements can be routed separately and brought together again at the endpoint\" (SMPTE, 2025b).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "Which ST 2110 part says senders build one SDP description per stream?", options: ["ST 2110-30", "ST 2110-10", "ST 2110-40", "ST 2110-22"], correctIndex: 1, explanation: "ST 2110-10 section 8.1: one SDP session description for each RTP stream or redundant pair (SMPTE, 2022b).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "In an SDP file, which line gives the multicast group address?", options: ["m=", "v=", "c=", "t="], correctIndex: 2, explanation: "The c= line carries the connection address, the multicast group (Begen et al., 2021, section 5.7).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "In SMPTE's example SDP file, which UDP port does the primary video use?", options: ["50020", "90000", "112", "50000"], correctIndex: 3, explanation: "m=video 50000: port 50000. 90000 is the RTP clock rate and 112 the payload type (SMPTE, 2022b, Annex B).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "What does \"raw\" mean in a=rtpmap:112 raw/90000?", options: ["Uncompressed ST 2110-20 video", "JPEG XS compressed video", "PCM audio sampled at 90 kHz", "Ancillary data, no picture"], correctIndex: 0, explanation: "\"raw\" names uncompressed ST 2110-20 video; 90000 is the 90 kHz RTP clock (SMPTE, 2022d, section 7.1).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "What does the a=ts-refclk line name?", options: ["The sender's multicast group", "The PTP clock the stream follows", "The receiver's UDP port number", "The camera's frame rate setting"], correctIndex: 1, explanation: "ts-refclk names the reference clock: in the example, a PTP grandmaster and domain 37 (SMPTE, 2022b, section 8.2).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "What does a=group:DUP signal in an SDP file?", options: ["Two cameras sharing one group", "A duplicate of the audio only", "Two identical copies on two paths", "A request to resend a packet"], correctIndex: 2, explanation: "DUP marks a primary and secondary copy for ST 2022-7 (SMPTE, 2022b, section 8.5).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "What does t=0 0 mean in SMPTE's example SDP?", options: ["It starts at midnight", "It carries no video", "It is a test session", "The session is permanent"], correctIndex: 3, explanation: "\"this session is permanent (has no begin or end time)\" (SMPTE, 2022b, Annex B).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "Which parameter must ST 2110-21 video senders add to the fmtp line?", options: ["TP=", "TTL=", "PORT=", "GOP="], correctIndex: 0, explanation: "ST 2110-21 requires TP=, the sender type (SMPTE, 2022c, section 8.1); SMPTE's -10 example leaves it out.", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "Which RFC is the current SDP standard?", options: ["RFC 4607", "RFC 8866", "RFC 3376", "RFC 1918"], correctIndex: 1, explanation: "RFC 8866 replaced RFC 4566 in 2021 and keeps the same line types (Begen et al., 2021).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "What did Sports Video Group report the league testing on HSAN in 2024?", options: ["H.264 to phones", "Satellite backup", "JPEG XS encoding", "4K tracking video"], correctIndex: 2, explanation: "\"The NBA is also working with MediaKind and a handful of other vendors to test JPEG XS encoding on the HSAN\" (Dachman, 2024).", sourceLessonSlug: "bandwidth-math" },
          { prompt: "What did BT's lab find for JPEG XS on live sports at 10:1?", options: ["Visually lossless", "Better than JPEG 2000", "Unusable at any ratio", "Not visually lossless"], correctIndex: 3, explanation: "\"JPEG XS encoded live sports content is not visually lossless at 10:1 compression\" (BT, 2022, p. 6).", sourceLessonSlug: "bandwidth-math" },
          { prompt: "Below which ratio did BT find JPEG XS very nearly visually lossless?", options: ["6:1", "10:1", "20:1", "2:1"], correctIndex: 0, explanation: "\"At compression ratios less than 6:1, JPEG XS is very nearly visually lossless\" (BT, 2022, p. 6).", sourceLessonSlug: "bandwidth-math" },
          { prompt: "If games travel as 1080i59.94, about what compression ratio is 250 Mbps?", options: ["About 10 to 1", "About 5 to 1", "About 2 to 1", "About 20 to 1"], correctIndex: 1, explanation: "1080i59.94's active picture is about 1.243 Gbps; 1,243 ÷ 250 is about 5. A guessed format, so still a guess.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "Does ST 2110 fragment a packet that is too big for a link?", options: ["Yes; routers split it up", "Yes; receivers rejoin it", "No; senders must not fragment", "Only on jumbo-frame links"], correctIndex: 2, explanation: "\"Senders shall ensure that there are no fragmented IP packets\" (SMPTE, 2022b, section 6.3).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "Where does a sender declare packets larger than 1,460 bytes?", options: ["TTL in its IP header", "TP= in its PTP message", "A VLAN tag on each frame", "MAXUDP in its SDP file"], correctIndex: 3, explanation: "Without MAXUDP, \"Receivers shall assume the Standard UDP Size Limit\" (SMPTE, 2022b, section 8.6).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "What happens when a switch buffer fills during a microburst?", options: ["Packets are dropped", "Packets are resent", "Packets are split", "Packets are shrunk"], correctIndex: 0, explanation: "Microbursts \"can lead to buffer exhaustion, which results in tail drops and lost packets\" (Cisco Systems, 2017).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "Why can ordinary monitoring miss microbursts, per Cisco?", options: ["It only measures multicast groups", "It watches very long time intervals", "It cannot read UDP packet headers", "It runs only during game breaks"], correctIndex: 1, explanation: "The tools \"are unable to detect microbursts because they are monitoring very large time intervals\" (Cisco Systems, 2017).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "What is ST 2110's answer to losing packets on one network path?", options: ["TCP resends from the sender", "Bigger packets on every link", "A second copy on another path", "Lower frame rates on demand"], correctIndex: 2, explanation: "A duplicate stream on a second path, signaled with a=group:DUP (SMPTE, 2022b, section 8.5); section 5 covers it.", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "What did SMPTE list as Student membership dues on October 21, 2026?", options: ["$49 a year", "$89 a year", "$180 a year", "$15 a year"], correctIndex: 3, explanation: "\"Student - $15 / Year\" (SMPTE, n.d.-b).", sourceLessonSlug: "a-study-path-for-media-over-ip" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: Timing and redundancy
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "one-clock-ptp",
      title: "17 · One clock: PTP",
      section: "5 · Timing and redundancy",
      recallContent: [
        {
          prompt: "What do both paid SMPTE courses cost a Professional member in the first year, dues included?",
          answer: "$678: $399 + $99 for the courses plus $180 dues, against $798 as a non-member (SMPTE, n.d.-b).",
        },
        {
          prompt: "Which three questions does lesson 16 tell you to carry to an arena-side job?",
          answer: "What the truck hands to the league network; how many multicast groups the arena sends and how they are named; and whether the gear is connected by an NMOS controller or by hand.",
        },
      ],
      body: `${QR("a broadcast network engineer, to supply sourced wording on how a PTP grandmaster is chosen and fails over, and on what lock, offset and jitter mean on a status screen, which this course's sources name but do not define")}

**Why a shared clock.** Lesson 12 split one camera into separate streams: picture, sound and data. Something has to keep them in step when they arrive. In ST 2110 that is part -10, system timing, which uses PTP, the Precision Time Protocol, together with RTP timestamps (Society of Motion Picture and Television Engineers [SMPTE], 2022b, section 7.2). PTP gives every device a common reference clock "accurate to better than a microsecond" (Simpson, 2017). A microsecond is a millionth of a second.

**It is on the postings.** The league's support posting lists timing and sync among the duties (National Basketball Association [NBA], 2026b). The postings name it next to multicast and ST 2110, which is why lesson 5 called timing a core topic.

**How a stream names its clock.** Look again at SMPTE's example SDP file from lesson 13. One line reads:

a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:37

It says the stream follows a PTP clock of the IEEE 1588-2008 kind, gives that clock's grandmaster ID (39-A7-94-FF-FE-07-CB-D0), and names PTP domain 37 (SMPTE, 2022b, section 8.2 and Annex B). The next line, a=mediaclk:direct=0, says the media clock comes straight from that reference clock (SMPTE, 2022b, section 8.3).

**How a receiver uses it.** ST 2110-21 says receivers "can compare the value of this parameter with their own reference clock source" (SMPTE, 2022c, section 7.2.1). So one fast check when a sender and a receiver disagree is this: does the SDP name the same grandmaster and domain the receiver follows? If not, they are timing against different clocks. That is reasoning from the two sections above, and it is a first check, not a diagnosis.

**Where SDI's timing goes.** On an SDI cable, timing is part of the one signal (lesson 12). A gateway that turns SDI into ST 2110 timestamps the video at "the Alignment Point of the SDI signal" (SMPTE, 2022b, section 7.6.4). From there on, the separate streams carry their own timestamps against PTP.

**Grandmaster and followers.** The ts-refclk line names a grandmaster: the source of the reference clock the stream follows (SMPTE, 2022b, section 8.2). Devices that take their time from it are its followers. How a grandmaster is chosen, and what happens when it fails, is not in this course's sources. The reviewer named at the top will add it.

**What a status screen shows.** SMPTE's paid ST 2110 Practical Lab lists reading PTP lock, offset and jitter among its objectives (SMPTE, n.d.-c). So those are the three words to find on any PTP status screen. This course's sources name them but do not define them or say what a healthy reading looks like. Learn them in SMPTE's free module 2.2, "SDP and PTP" (SMPTE, n.d.-a), and on a job, ask what normal looks like on that site's gear before you need to know.

**Genlock.** The brief's outline pairs PTP with genlock. This course's sources do not cover genlock, or how an arena bridges it to PTP, so this lesson leaves it out. On a job, ask where the arena's timing reference comes from. That one question covers both.

:::reveal Which line in an ST 2110 SDP file names the PTP clock a stream follows, and what two things does it identify? ||| a=ts-refclk. It gives the grandmaster's ID and the PTP domain, in SMPTE's example 39-A7-94-FF-FE-07-CB-D0 and domain 37 (SMPTE, 2022b, section 8.2).

:::reveal How accurate is PTP's common reference clock, per Simpson (2017)? ||| "Accurate to better than a microsecond," a millionth of a second.

## Sources
- ${SMPTE_2110_10} Locator: section 7.2 (PTP and RTP timestamps), section 7.6.4 (the SDI alignment point), sections 8.2 and 8.3 (ts-refclk and mediaclk), Annex B (the example).
- ${SMPTE_2110_21} Locator: section 7.2.1, receivers comparing the reference clock.
- ${SIMPSON_2017} Locator: the paragraph on PTP and the common reference clock.
- ${NBA_POST_SUPPORT} Locator: "Responsibilities," timing and sync.
- ${SMPTE_LAB} Locator: "Objectives" list, PTP lock, offset and jitter.
- ${SMPTE_EMIP} Locator: module list, module 2.2.`,
    },
    {
      slug: "a-timing-lab",
      title: "18 · A timing lab",
      section: "5 · Timing and redundancy",
      recallContent: [
        {
          prompt: "Which SDP line names the PTP clock a stream follows, and what does it identify?",
          answer: "a=ts-refclk; it gives the grandmaster's ID and the PTP domain (SMPTE, 2022b, section 8.2).",
        },
        {
          prompt: "Which three readings does SMPTE's Practical Lab list for a PTP status screen?",
          answer: "Lock, offset and jitter (SMPTE, n.d.-c).",
        },
      ],
      body: `${QR("a broadcast network engineer, to say what a healthy linuxptp log between two lab computers looks like, which this course's sources do not give")}

**The goal.** See two computers agree on time, and watch the numbers move while they do. You are not building a broadcast clock. You are learning what the words in lesson 17 look like on a screen.

**What you need.** Two Linux computers. The tier 1 lab from lesson 8 has them: your own computer and a Raspberry Pi 5 2GB, $77.50 after the October 2026 price increase, plus its parts (Raspberry Pi, 2026). Two Linux virtual machines on one computer also work, at tier 0.

**The software.** linuxptp is a Linux implementation of IEEE 1588, the PTP standard, and it does not aim to run on other platforms (Network Time Foundation, n.d.). So a Mac or a Windows laptop needs a Linux virtual machine or a second Linux computer. Follow linuxptp's own documentation for the commands, because this course has not reviewed them line by line.

**The lab, step by step.** These steps come from the plan this course was built on:

1. Install linuxptp on both Linux computers.
2. Run one as the clock and the other as its follower.
3. Log the follower's offset for 10 minutes.
4. Write one paragraph reading the log: did it lock, and how did the offset change over the 10 minutes?

**Expect rough numbers.** This course has no source on how close a home lab should get, so the point is to see lock and offset move, not to hit a target. Compare what you see with SMPTE's free module 2.2, "SDP and PTP" (Society of Motion Picture and Television Engineers [SMPTE], n.d.-a), and write down what you do not yet understand.

**Label it "home lab."** Your log is not a league network's timing, and it never stands in for one (lesson 1).

**On the job.** If an employer allows it, ask two questions: where does the arena's timing reference come from, and how are the two network paths labeled? The second question leads into lesson 19.

**Where it leads.** SMPTE's paid ST 2110 Practical Lab checks PTP lock and ST 2022-7 details with an instructor: $99 for members and $199 for non-members, one day, after Understanding SMPTE ST 2110 or the Boot Camp (SMPTE, n.d.-c). The plan this course was built on budgets about 6 hours for timing and two-path redundancy, as a planning estimate.

**The practical.** Hand in the 10-minute log with its one-paragraph reading. Lesson 19 adds the second half: a drawing of two paths for one feed.

:::reveal Why does a Mac need a Linux virtual machine or a second Linux computer for this lab? ||| linuxptp is a Linux implementation of IEEE 1588 and does not aim to run on other platforms (Network Time Foundation, n.d.).

:::reveal What does the timing lab ask you to log, and for how long? ||| The follower's offset, for 10 minutes, with a one-paragraph reading of whether it locked and how the offset changed.

## Sources
- ${LINUXPTP} Locator: home page, what linuxptp is and the platforms it targets.
- ${RASPBERRY_PI} Locator: the price table for the Raspberry Pi 5 2GB.
- ${SMPTE_EMIP} Locator: module list, module 2.2.
- ${SMPTE_LAB} Locator: "Objectives," price, length and prerequisites.`,
    },
    {
      slug: "two-paths",
      title: "19 · Two paths: ST 2022-7 and diverse routes",
      section: "5 · Timing and redundancy",
      recallContent: [
        {
          prompt: "Why does linuxptp need a Linux computer or virtual machine?",
          answer: "It is a Linux implementation of IEEE 1588 and does not aim to run on other platforms (Network Time Foundation, n.d.).",
        },
        {
          prompt: "What two questions does lesson 18 tell you to ask on a job, if allowed?",
          answer: "Where the arena's timing reference comes from, and how the two network paths are labeled.",
        },
      ],
      body: `**The problem.** Live media over IP rides UDP, and UDP does not resend what is lost (Postel, 1980). ST 2110 says so plainly: receivers "should be capable of receiving streams with occasional dropped, late or out-of-order packets" (Society of Motion Picture and Television Engineers [SMPTE], 2022b, section 6.2). So a full switch buffer (lesson 15) or a cut fiber loses packets, and nothing sends them again.

**The answer: send it twice.** SMPTE ST 2022-7 has the sender send "a second, identical copy" over a second network path. The receiver can then survive the loss of one path and fill in packets that never arrive on the other (Clear-Com, n.d.).

**How a stream says it has a twin.** In ST 2110, the SDP file signals the pair with a=group:DUP, tagging one copy primary and the other secondary (SMPTE, 2022b, section 8.5). SMPTE's own example shows both halves (SMPTE, 2022b, Annex B):

| Copy | Group | Port | Sender address |
|---|---|---|---|
| Primary | 239.100.9.10 | 50000 | 192.168.100.2 |
| Secondary | 239.101.9.10 | 50020 | 192.168.101.2 |

Look at the sender addresses. The two copies leave from addresses on different subnets, which fits two separate networks rather than one network used twice. That is a reading of the example, not a rule the example states.

**The colors are a convention, not a rule.** Clear-Com titles its manual section "red/blue redundant networks" (Clear-Com, n.d.). Other makers may name the two paths differently, so do not teach any color scheme as universal. On a job, ask how that site labels them.

**The cost.** Two identical copies means every stream is sent twice, once on each path. The lesson 14 worksheet fit 40 streams of about 249 Mbps on one 10 Gbps link; with a second copy of each, those 40 copies need a second link of the same size. Plan bandwidth for both paths, not one.

**Two copies only help if the paths are different.** If both copies run through the same trench, one backhoe cuts both (lesson 2). That is why diverse routes matter as much as duplicate streams.

**The worked example.** The fourth-generation league network brings fiber conduit into some venues from different directions, "so no single cut takes the site down," and splits streams across paths for redundancy (Carlson, 2026). The league's media operations head put it this way: "Those streams are also split out for redundancy and resiliency" (Carlson, 2026). AT&T's dedicated engineering unit adds 24/7 network telemetry and automatic rerouting (Carlson, 2026).

**What not to say.** No source says the league network uses ST 2022-7. The sources say only that streams are split across paths for redundancy (Carlson, 2026). Keep the two ideas separate: ST 2022-7 is a standard method; the league's method is not named.

**Draw it.** For one camera feed on your lesson 1 map, draw two paths from sender to receiver. Label them the way your site does, or "path 1" and "path 2" if you do not know. Mark any place both paths share a building, a trench or a switch: that is where one fault still takes both down.

:::reveal What does a=group:DUP tell a receiver? ||| That the stream is sent as two identical copies, tagged primary and secondary, for ST 2022-7 protection (SMPTE, 2022b, section 8.5).

:::reveal Why should you not say the league network uses ST 2022-7? ||| No source says so. The sources say only that streams are split across paths for redundancy (Carlson, 2026).

## Sources
- ${RFC_768} Locator: Introduction, delivery not guaranteed.
- ${SMPTE_2110_10} Locator: section 6.2 (dropped, late or out-of-order packets), section 8.5 (DUP), Annex B (the primary and secondary example).
- ${CLEARCOM} Locator: the section on ST 2022-7, its title and its description of the second, identical copy.
- ${CARLSON_2026} Locator: the paragraphs on conduit from different directions, streams split for redundancy, and AT&T's engineering unit.`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Timing and redundancy",
      section: "5 · Timing and redundancy",
      body: "A graded check on why IP video needs one clock, how a stream names its PTP clock, the timing lab and its limits, and how ST 2022-7 and diverse routes protect a feed. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Why does IP video need a shared clock, per lesson 17?", options: ["Every camera needs a clock to record a date", "Switches will not forward packets without one", "Fiber links stop working when clocks drift", "Its streams travel apart and must stay in step"], correctIndex: 3, explanation: "Picture, sound and data travel as separate streams, so something must keep them in step; in ST 2110 that is part -10, system timing.", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "Which ST 2110 part covers system timing?", options: ["ST 2110-10", "ST 2110-20", "ST 2110-30", "ST 2110-40"], correctIndex: 0, explanation: "ST 2110-10, system timing, uses PTP and RTP timestamps (SMPTE, 2022b, section 7.2).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "What does ST 2110-10 use, together with PTP, to time streams?", options: ["IGMP joins", "RTP timestamps", "VLAN tags", "SDP ports"], correctIndex: 1, explanation: "ST 2110-10 times streams with PTP and RTP timestamps (SMPTE, 2022b, section 7.2).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "What does PTP stand for?", options: ["Packet Timing Profile", "Primary Transport Path", "Precision Time Protocol", "Picture Timing Pulse"], correctIndex: 2, explanation: "PTP is the Precision Time Protocol.", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "How accurate is PTP's common reference clock, per Simpson (2017)?", options: ["Better than one second", "Within one video frame", "Within one millisecond", "Better than a microsecond"], correctIndex: 3, explanation: "PTP gives a common reference clock \"accurate to better than a microsecond\" (Simpson, 2017).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "What is a microsecond?", options: ["A millionth of a second", "A thousandth of a second", "A tenth of a second", "A billionth of a second"], correctIndex: 0, explanation: "Lesson 17: a microsecond is a millionth of a second.", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "Which posting lists timing and sync among its duties?", options: ["League Technology Rep", "Broadcast Support Engineer", "Replay Center Operator", "Hawk-Eye Camera Tech"], correctIndex: 1, explanation: "The support posting lists timing and sync (NBA, 2026b).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "Which SDP line names the PTP clock a stream follows?", options: ["a=mediaclk", "a=source-filter", "a=ts-refclk", "a=rtpmap"], correctIndex: 2, explanation: "a=ts-refclk names the reference clock (SMPTE, 2022b, section 8.2).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "In SMPTE's example, which PTP domain does the stream follow?", options: ["112", "50000", "1588", "37"], correctIndex: 3, explanation: "The ts-refclk line ends in domain 37 (SMPTE, 2022b, Annex B).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "In SMPTE's example, what does \"IEEE1588-2008\" in the ts-refclk line name?", options: ["The kind of PTP clock", "The sender's address", "The stream's group", "The video frame rate"], correctIndex: 0, explanation: "It says the stream follows a PTP clock of the IEEE 1588-2008 kind (SMPTE, 2022b, section 8.2).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "What does a=mediaclk:direct=0 say?", options: ["The stream has no clock at all", "The media clock comes straight from it", "The sender restarts every frame", "The receiver sets its own clock"], correctIndex: 1, explanation: "The media clock comes straight from the reference clock (SMPTE, 2022b, section 8.3).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "Per ST 2110-21, what can a receiver compare the ts-refclk value with?", options: ["The sender's MAC address", "The switch's VLAN table", "Its own reference clock source", "The stream's multicast port"], correctIndex: 2, explanation: "Receivers \"can compare the value of this parameter with their own reference clock source\" (SMPTE, 2022c, section 7.2.1).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "If a sender's SDP names a different grandmaster from the receiver's, what follows?", options: ["The receiver joins a new group", "The switch floods every port", "The stream doubles its bitrate", "They time against different clocks"], correctIndex: 3, explanation: "Lesson 17's reasoning: they are timing against different clocks; a first check, not a diagnosis.", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "Where does a gateway timestamp SDI video when it turns it into ST 2110?", options: ["At the SDI signal's alignment point", "At the end of each audio packet", "At the receiver's first IGMP join", "At the first RTP packet's header"], correctIndex: 0, explanation: "At \"the Alignment Point of the SDI signal\" (SMPTE, 2022b, section 7.6.4).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "What does the ts-refclk line's grandmaster ID identify?", options: ["The sender of the video stream", "The source of the reference clock", "The switch that carries the stream", "The receiver that joins the group"], correctIndex: 1, explanation: "The grandmaster is the source of the reference clock the stream follows (SMPTE, 2022b, section 8.2).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "What are devices that take their time from the grandmaster called in lesson 17?", options: ["Queriers", "Senders", "Followers", "Gateways"], correctIndex: 2, explanation: "Devices that take their time from the grandmaster are its followers.", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "What does lesson 17 leave to the reviewer about grandmasters?", options: ["What the letters PTP stand for", "Which SDP line names the clock", "Which part of ST 2110 uses PTP", "How one is chosen and fails over"], correctIndex: 3, explanation: "How a grandmaster is chosen, and what happens when it fails, is not in this course's sources.", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "Which three PTP readings does SMPTE's Practical Lab list?", options: ["Lock, offset and jitter", "Gain, iris and shutter", "Loss, polarity and power", "Group, port and source"], correctIndex: 0, explanation: "Reading PTP lock, offset and jitter is among the lab's objectives (SMPTE, n.d.-c).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "Where does lesson 17 send you to learn what lock, offset and jitter mean?", options: ["The league's Rule 13 text", "SMPTE's free module 2.2", "The Wireshark user's guide", "FOA's Fiber U safety course"], correctIndex: 1, explanation: "Module 2.2, \"SDP and PTP\" (SMPTE, n.d.-a), plus asking on the job what normal looks like.", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "Why does lesson 17 leave genlock out?", options: ["Genlock is banned on ST 2110 gear", "Genlock is the same thing as PTP", "Its sources do not cover genlock", "Arenas stopped using clocks in 2014"], correctIndex: 2, explanation: "The course's sources do not cover genlock or how an arena bridges it to PTP.", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "What one job question does lesson 17 say covers both PTP and genlock?", options: ["How many cameras the truck brings", "Which fans watch on mobile phones", "Who wrote the arena's SDP files", "Where the timing reference comes from"], correctIndex: 3, explanation: "Ask where the arena's timing reference comes from.", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "What is the timing lab's goal?", options: ["See two computers agree on time", "Build a broadcast-grade clock", "Replace the arena's grandmaster", "Certify a PTP network for a league"], correctIndex: 0, explanation: "See two computers agree on time and watch the numbers move; you are not building a broadcast clock.", sourceLessonSlug: "a-timing-lab" },
          { prompt: "What does linuxptp implement?", options: ["RFC 3376, the IGMPv3 standard", "IEEE 1588, the PTP standard", "ST 2022-7, path protection", "IEEE 802.1Q, the VLAN tag"], correctIndex: 1, explanation: "linuxptp is a Linux implementation of IEEE 1588 (Network Time Foundation, n.d.).", sourceLessonSlug: "a-timing-lab" },
          { prompt: "Which platforms does linuxptp aim to run on?", options: ["Mac only", "Windows only", "Linux only", "Any platform"], correctIndex: 2, explanation: "It does not aim to run on platforms other than Linux (Network Time Foundation, n.d.).", sourceLessonSlug: "a-timing-lab" },
          { prompt: "What does a Mac need for the timing lab?", options: ["A paid PTP license from SMPTE", "A fiber link to the second host", "A grandmaster from the carrier", "A Linux VM or a Linux computer"], correctIndex: 3, explanation: "linuxptp targets Linux, so a Mac needs a Linux virtual machine or a second Linux computer.", sourceLessonSlug: "a-timing-lab" },
          { prompt: "What did a Raspberry Pi 5 2GB cost after the October 2026 increase?", options: ["$77.50", "$26.99", "$69.95", "$35.94"], correctIndex: 0, explanation: "$77.50, plus its parts (Raspberry Pi, 2026).", sourceLessonSlug: "a-timing-lab" },
          { prompt: "What tier lab is two Linux virtual machines on one computer?", options: ["Tier 1", "Tier 0", "Tier 2", "Tier 3"], correctIndex: 1, explanation: "Two Linux virtual machines on one computer work at tier 0.", sourceLessonSlug: "a-timing-lab" },
          { prompt: "Where should you get linuxptp's commands?", options: ["The league's support posting", "SMPTE's ST 2110 FAQ page", "linuxptp's own documentation", "The NETGEAR user manual"], correctIndex: 2, explanation: "Follow linuxptp's own documentation; the course has not reviewed the commands line by line.", sourceLessonSlug: "a-timing-lab" },
          { prompt: "How long does the timing lab ask you to log the follower's offset?", options: ["10 seconds", "1 full day", "1 game night", "10 minutes"], correctIndex: 3, explanation: "Log the follower's offset for 10 minutes.", sourceLessonSlug: "a-timing-lab" },
          { prompt: "What should the timing lab's one-paragraph reading answer?", options: ["Did it lock, and how did offset change", "Which arena uses the same grandmaster", "How much the switch cost to install", "Which camera the receiver showed"], correctIndex: 0, explanation: "Did it lock, and how did the offset change over the 10 minutes?", sourceLessonSlug: "a-timing-lab" },
          { prompt: "What does lesson 18 say to expect from home-lab PTP numbers?", options: ["Broadcast-grade accuracy", "Rough numbers, with no target", "Exactly zero offset at once", "The league's own readings"], correctIndex: 1, explanation: "The course has no source on how close a home lab should get; see lock and offset move, not hit a target.", sourceLessonSlug: "a-timing-lab" },
          { prompt: "What label goes on the timing lab's log?", options: ["\"Arena feed\"", "\"League clock\"", "\"Home lab\"", "\"Live PTP\""], correctIndex: 2, explanation: "Label it \"home lab\"; it never stands in for a league network's timing.", sourceLessonSlug: "a-timing-lab" },
          { prompt: "Which two questions does lesson 18 say to ask on a job?", options: ["Ticket counts; seating chart owner", "Camera lens maker; tripod height", "Referee names; replay trigger count", "Timing reference source; path labels"], correctIndex: 3, explanation: "Where the timing reference comes from, and how the two network paths are labeled.", sourceLessonSlug: "a-timing-lab" },
          { prompt: "What does SMPTE's Practical Lab check, per lesson 18?", options: ["PTP lock and ST 2022-7 details", "Fiber polarity and light levels", "Camera shading and lens focus", "Ticketing and arena Wi-Fi"], correctIndex: 0, explanation: "It checks PTP lock and ST 2022-7 details with an instructor (SMPTE, n.d.-c).", sourceLessonSlug: "a-timing-lab" },
          { prompt: "About how many hours does the plan budget for timing and redundancy?", options: ["About 60", "About 6", "About 1", "About 20"], correctIndex: 1, explanation: "About 6 hours, as a planning estimate.", sourceLessonSlug: "a-timing-lab" },
          { prompt: "What does the timing practical ask you to hand in?", options: ["A video of fiber being cleaned", "A copy of the league's runbook", "The 10-minute log and its reading", "A photo of an arena's PTP rack"], correctIndex: 2, explanation: "The 10-minute log with its one-paragraph reading; lesson 19 adds the two-path drawing.", sourceLessonSlug: "a-timing-lab" },
          { prompt: "Why can a lost packet on a live UDP stream not be recovered by asking again?", options: ["PTP blocks all repeat packets", "Switches erase lost packets", "SDP files forbid any resend", "UDP does not resend anything"], correctIndex: 3, explanation: "UDP gives no delivery promise (Postel, 1980), so nothing is resent.", sourceLessonSlug: "two-paths" },
          { prompt: "What does ST 2110-10 say receivers should cope with?", options: ["Occasional dropped or late packets", "Packets resent by the sender", "Fragmented jumbo IP packets", "Streams with no PTP clock"], correctIndex: 0, explanation: "Receivers \"should be capable of receiving streams with occasional dropped, late or out-of-order packets\" (SMPTE, 2022b, section 6.2).", sourceLessonSlug: "two-paths" },
          { prompt: "What does an ST 2022-7 sender do?", options: ["Resends any packet that is lost", "Sends a second, identical copy", "Compresses each stream by half", "Joins every multicast group"], correctIndex: 1, explanation: "It sends \"a second, identical copy\" over a second path (Clear-Com, n.d.).", sourceLessonSlug: "two-paths" },
          { prompt: "What does the receiver gain from ST 2022-7?", options: ["It needs no PTP clock at all", "It can skip its IGMP joins", "It survives losing one path", "It halves the stream's bitrate"], correctIndex: 2, explanation: "The receiver can survive the loss of one path and fill in packets that never arrive on the other (Clear-Com, n.d.).", sourceLessonSlug: "two-paths" },
          { prompt: "How does an ST 2110 SDP file signal a redundant pair?", options: ["a=ts-refclk:ptp primary", "a=source-filter: both paths", "m=video 50000 RTP/DUP 112", "a=group:DUP primary secondary"], correctIndex: 3, explanation: "a=group:DUP, tagging one copy primary and one secondary (SMPTE, 2022b, section 8.5).", sourceLessonSlug: "two-paths" },
          { prompt: "In SMPTE's example, what is the secondary copy's multicast group?", options: ["239.101.9.10", "239.100.9.10", "192.168.101.2", "232.101.9.10"], correctIndex: 0, explanation: "Secondary: group 239.101.9.10, port 50020, from 192.168.101.2 (SMPTE, 2022b, Annex B).", sourceLessonSlug: "two-paths" },
          { prompt: "In SMPTE's example, which port does the secondary copy use?", options: ["50000", "50020", "90000", "37"], correctIndex: 1, explanation: "The secondary copy uses port 50020 (SMPTE, 2022b, Annex B).", sourceLessonSlug: "two-paths" },
          { prompt: "What does lesson 19 read from the two sender addresses in SMPTE's example?", options: ["They are the very same address", "They are both multicast groups", "They sit on different subnets", "They belong to the receiver"], correctIndex: 2, explanation: "192.168.100.2 and 192.168.101.2 sit on different subnets, which fits two separate networks: a reading, not a stated rule.", sourceLessonSlug: "two-paths" },
          { prompt: "How does Clear-Com title its ST 2022-7 manual section?", options: ["\"primary/backup video paths\"", "\"left/right fiber routes\"", "\"A/B house sync feeds\"", "\"red/blue redundant networks\""], correctIndex: 3, explanation: "Clear-Com titles it \"red/blue redundant networks\" (Clear-Com, n.d.).", sourceLessonSlug: "two-paths" },
          { prompt: "Should you teach red and blue as the universal names for the two paths?", options: ["No; names vary by maker", "Yes; SMPTE requires them", "Yes; every league uses them", "No; paths have no names"], correctIndex: 0, explanation: "Path names vary by maker; ask how the site labels them.", sourceLessonSlug: "two-paths" },
          { prompt: "What does ST 2022-7 cost in bandwidth?", options: ["Nothing; copies are free", "Every stream is sent twice", "Half the original stream", "One extra packet a second"], correctIndex: 1, explanation: "Two identical copies means every stream is sent twice, once on each path.", sourceLessonSlug: "two-paths" },
          { prompt: "On lesson 14's worksheet, what do 40 second copies of 249 Mbps streams need?", options: ["No extra bandwidth", "A 1 Gbps link only", "A second 10 Gbps link", "A slower frame rate"], correctIndex: 2, explanation: "Forty copies of about 249 Mbps fill a second 10 Gbps link of the same size.", sourceLessonSlug: "two-paths" },
          { prompt: "When do two copies fail to protect a feed?", options: ["When the paths use two colors", "When the receiver has two ports", "When the SDP says group:DUP", "When both paths share one trench"], correctIndex: 3, explanation: "If both copies run through the same trench, one backhoe cuts both (lesson 2).", sourceLessonSlug: "two-paths" },
          { prompt: "What does the fourth-generation network bring into some venues, per Carlson (2026)?", options: ["Fiber conduit from different directions", "A second production truck for each game", "Satellite dishes on every arena roof", "Copper cable in place of the fiber"], correctIndex: 0, explanation: "Fiber conduit from different directions, \"so no single cut takes the site down\" (Carlson, 2026).", sourceLessonSlug: "two-paths" },
          { prompt: "How did the league's media operations head describe the streams' redundancy?", options: ["\"sent once, with no backup at all\"", "\"split out for redundancy and resiliency\"", "\"recorded locally, then uploaded\"", "\"compressed twice for safety\""], correctIndex: 1, explanation: "\"Those streams are also split out for redundancy and resiliency\" (Carlson, 2026).", sourceLessonSlug: "two-paths" },
          { prompt: "What does AT&T's dedicated engineering unit add, per Carlson (2026)?", options: ["Replay review for on-court officials", "Camera shading for each game's truck", "24/7 telemetry and automatic rerouting", "Ticket scanning at each arena's gate"], correctIndex: 2, explanation: "24/7 network telemetry, capacity modeling and automatic rerouting (Carlson, 2026).", sourceLessonSlug: "two-paths" },
          { prompt: "Does any source say the league network uses ST 2022-7?", options: ["Yes; AT&T's release says so", "Yes; the league's Rule 13 does", "No; it uses satellites instead", "No; only that streams are split"], correctIndex: 3, explanation: "No source says so; the sources say only that streams are split across paths for redundancy (Carlson, 2026).", sourceLessonSlug: "two-paths" },
          { prompt: "What should you mark on your two-path drawing?", options: ["Any place both paths share", "Every fan seat in the arena", "The truck's parking spot only", "The replay center's monitors"], correctIndex: 0, explanation: "Mark any place both paths share a building, a trench or a switch: one fault there still takes both down.", sourceLessonSlug: "two-paths" },
          { prompt: "If you do not know a site's path names, how does lesson 19 say to label them?", options: ["\"red\" and \"blue\"", "\"path 1\" and \"path 2\"", "\"main\" and \"spare\"", "\"left\" and \"right\""], correctIndex: 1, explanation: "Label them the way the site does, or \"path 1\" and \"path 2\" if you do not know.", sourceLessonSlug: "two-paths" },
          { prompt: "Which two answers to loss does lesson 19 keep separate?", options: ["Fiber cuts and camera failures", "Audio loss and video loss", "A standard method and the league's", "Local feeds and national feeds"], correctIndex: 2, explanation: "ST 2022-7 is a standard method; the league's method is not named.", sourceLessonSlug: "two-paths" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6: Fiber and the physical layer
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "fiber-on-the-map",
      title: "20 · Fiber on the map",
      section: "6 · Fiber and the physical layer",
      recallContent: [
        {
          prompt: "What does ST 2022-7 have the sender do, and what does the receiver gain?",
          answer: "Send \"a second, identical copy\" over a second path, so the receiver survives the loss of one path and fills in missing packets (Clear-Com, n.d.).",
        },
        {
          prompt: "Why do two copies only help if the paths are different?",
          answer: "If both copies share one trench, building or switch, one fault takes both down.",
        },
      ],
      body: `**Everything above rides on glass.** Sections 2 to 5 were about packets, groups and clocks. Underneath all of it is a physical path, and on the league network that path is mostly fiber. The fourth generation rides on more than 68,000 miles of AT&T fiber (National Basketball Association [NBA], 2026a; AT&T, 2026).

**What the sources say about fiber at the arena.**

| Fact | Source |
|---|---|
| The fourth generation brings all-new networking equipment to the venues and about four times the bandwidth of the current setup | Carlson (2026) |
| It brings fiber conduit into some venues from different directions, "so no single cut takes the site down" | Carlson (2026) |
| In 2014, HSAN2 was a 10-gig network, and every arena got two new equipment racks, including a router and a firewall | Dachman (2014) |

The 2014 facts are history, dated, as lesson 3 said.

**Why a physical fault matters so much.** A stream that loses packets gets nothing resent (lesson 19). A cut or a bad connection on one path is exactly the loss ST 2022-7 and diverse routes exist to survive. So fiber is not a separate topic from section 5. It is where section 5's second path physically runs.

**Who touches it.** The carrier provides the network and monitors it from its Network Operations Center (AT&T, 2026). The fiber that carries the league network is not yours to repatch. On a job, the plan this course was built on suggests one honest way in: ask to watch fiber patching or cleaning at the truck or the network rack, and offer to clean connectors under supervision. Watching is allowed when the owner says so; touching is allowed when the owner hands it to you.

**Cabling and heights are on the postings.** The league's per-game, arena-side posting asks for "cabling, connectivity and basic IT" and for work at heights (NBA, 2026c). This course does not teach working at heights. CREW-01, Rigging for Stage and Broadcast Crews, gives a whole section to it (its section 2, "Working at height"). Take that section before any job that puts you on a ladder or a lift.

**What this section can teach, and what it cannot yet.** The brief's outline for this section lists connectors, inspection and cleaning, polarity, light levels, loss budgets and laser safety. This course's research sources only part of that:

| Topic | Status in this course |
|---|---|
| Where to learn it free, and what certifies it | Sourced: lesson 21 |
| A starter kit, with prices | Sourced: lesson 22 |
| Connector types, inspection and cleaning steps | Named as goals; the steps come from the Fiber Optic Association's free courses and the reviewer |
| Polarity and light levels | Not covered by this course's sources |
| Loss budgets | Named as a goal; the free course that teaches it is in lesson 21 |
| Laser safety | Not stated here until sourced; lesson 22 sets a precaution until then |

A course that guessed at these would be worse than one that points you to the people who teach them. Lessons 21 and 22 do the pointing.

:::reveal How many miles of AT&T fiber does the fourth-generation network ride on? ||| More than 68,000 miles (NBA, 2026a; AT&T, 2026).

:::reveal The arena-side posting asks for work at heights. Where in this series is working at height taught? ||| In CREW-01, Rigging for Stage and Broadcast Crews, section 2, "Working at height." This course does not teach it.

## Sources
- ${NBA_2026A} Locator: the sentence on 68,000 miles of AT&T fiber.
- ${ATT_2026} Locator: the sentence on fiber miles, and the sentence on AT&T providing and monitoring the network.
- ${CARLSON_2026} Locator: the paragraphs on new equipment, four times the bandwidth, and conduit from different directions.
- ${DACHMAN_2014} Locator: the paragraphs on HSAN2's 10-gig network and the two racks.
- ${NBA_POST_OFFICIATING} Locator: "Responsibilities" and "Qualifications," cabling, connectivity and heights.`,
    },
    {
      slug: "where-to-learn-fiber",
      title: "21 · Where to learn fiber, and what certifies it",
      section: "6 · Fiber and the physical layer",
      recallContent: [
        {
          prompt: "What does the fourth generation bring into some venues, and why?",
          answer: "Fiber conduit from different directions, \"so no single cut takes the site down\" (Carlson, 2026).",
        },
        {
          prompt: "Where in this series is working at height taught?",
          answer: "CREW-01, Rigging for Stage and Broadcast Crews, section 2, \"Working at height.\"",
        },
      ],
      body: `**Free first, again.** The Fiber Optic Association (FOA) runs Fiber U, which it calls "the free online learning website of the FOA" (Fiber Optic Association [FOA], n.d.-b). Details were read on October 21, 2026.

| Fiber U course | Time, as FOA lists it | Use it for |
|---|---|---|
| Fiber Optic Safety | 1 to 2 hours | First, before you open a kit (lesson 22) |
| Connector Inspection and Cleaning | 1 hour | The inspect, clean, re-inspect routine |
| Basic Fiber Optics | 10 to 20 hours | The full foundation course |
| Understanding OTDRs | 2 to 4 hours, optional | Later |

Source for the table: FOA (n.d.-b). FOA marks the OTDR course optional, so leave it for later.

**Small certificates.** Fiber U's MiniCourse certificates cost $10 (FOA, n.d.-b). FOA's MiniCourses also cover decibels (dB) and loss budgets (FOA, n.d.-b), the topic this course names as a goal but does not teach from its own sources. Lesson 7's rule holds: do not call a $10 certificate a certification unless FOA calls it one.

**The certification.** FOA's Certified Fiber Optic Technician (CFOT) is a certification. FOA's page lists two ways in: through an FOA-approved school, or by direct certification with at least two years of relevant field experience. The exam is 100 questions, and you need 70 correct to pass. The page does not list the fees (FOA, n.d.-a).

**Do you need CFOT?** It depends on the work. Lesson 3 split arena jobs into install-era work, with new equipment and conduit going in (Carlson, 2026), and operations-era work, where feeds are checked in and watched on game nights. The CFOT fits install work best. For operations work, the free courses and supervised practice come first. That split is this course's reading of the job, so ask an employer which kind of work it is.

**The goals for this section.** After the free courses and the lab in lesson 22, you should be able to do four things. They come from the plan this course was built on:

1. Identify LC, SC and ST connectors on sight: 10 of 10.
2. Inspect, clean and re-inspect an LC connector with a one-click cleaner, following FOA's inspection and cleaning course and its safety course.
3. Use a visual fault locator to find a bad connector or a break on a patch cord.
4. Explain a link loss budget in decibels in plain words.

This lesson names the goals; FOA's courses teach the how. The steps are not written here because this course's sources do not give them, and a fiber step learned from a guess is a step learned wrong.

**A study plan.** The plan budgets about 6 hours for fiber, as an estimate. One way to spend it: Fiber Optic Safety (1 to 2 hours), then Connector Inspection and Cleaning (1 hour), then the lab in lesson 22. Basic Fiber Optics, at 10 to 20 hours, does not fit in 6, so take it after, when you want the whole foundation. Fiber needs nothing from sections 2 to 5, so you can study it alongside them.

:::reveal What are the two ways into FOA's CFOT certification, and what does the exam take to pass? ||| An FOA-approved school, or direct certification with at least two years of relevant field experience; 70 correct of 100 questions (FOA, n.d.-a).

:::reveal Which Fiber U course does this lesson put first, and how long is it? ||| Fiber Optic Safety, 1 to 2 hours, before you open a kit (FOA, n.d.-b).

## Sources
- ${FIBER_U} Locator: home page, the course list with times, the MiniCourse certificate price and the MiniCourse topics.
- ${FOA_CFOT} Locator: the eligibility paths and the exam's question count and pass mark.
- ${CARLSON_2026} Locator: the paragraphs on new equipment and conduit going in.`,
    },
    {
      slug: "a-fiber-kit-and-first-lab",
      title: "22 · A fiber kit and a first lab",
      section: "6 · Fiber and the physical layer",
      recallContent: [
        {
          prompt: "How many questions is FOA's CFOT exam, and how many must you get right?",
          answer: "100 questions; 70 correct to pass (FOA, n.d.-a).",
        },
        {
          prompt: "What do Fiber U's MiniCourse certificates cost?",
          answer: "$10 (FOA, n.d.-b).",
        },
      ],
      body: `> **Before release:** needs a practitioner: a fiber technician, to demonstrate connector identification, inspection, cleaning and fault finding on camera; and needs a qualified reviewer (QR): a certified fiber optic technician, to supply sourced handling and laser-safety rules for this lesson.

**Safety first, plainly.** This course does not yet state fiber safety rules, because its sources do not give them in words it can quote. Until a reviewer adds them, take this course's precaution: finish FOA's free Fiber Optic Safety course, 1 to 2 hours (Fiber Optic Association [FOA], n.d.-b), before you open the kit; never look into a fiber end or a connector; and never point the fault locator at anyone. That precaution is this course's, not a quoted rule. Follow FOA's course where it says more.

**The kit.** Prices were read on each seller's page on October 21, 2026. Delivery and tax are extra.

| Tier | What | Cost | Source |
|---|---|---|---|
| 2 | Smart Click LC fiber connector cleaner, about 800 cleans | $35.94 | Fiber Cables Direct (n.d.) |
| 2 | FIS Mini Visual Fault Locator, with a 2.5 mm adapter | $69.95 | Fiber Instrument Sales (n.d.) |
| 2 | An LC adapter for the fault locator, which may be needed | Not confirmed | |
| 2 | Two short LC patch cords; a connector inspection scope (optional) | Not priced here | |

Tier 2 comes to $35.94 + $69.95 = $105.89, plus patch cords and anything optional. With tier 1 from lesson 8 ($104.49), the whole lab comes to about $210, plus cables, power and patch cords.

**Why these two tools.** The cleaner serves goal 2 in lesson 21: inspect, clean and re-inspect an LC connector with a one-click cleaner. The visual fault locator serves goal 3: find a bad connector or a break on a patch cord. The inspection scope stays optional here because its price was not checked.

**The lab, step by step.** These steps come from the plan this course was built on. The how of each step comes from FOA's courses, not from this lesson.

1. Finish Fiber Optic Safety and Connector Inspection and Cleaning (FOA, n.d.-b).
2. Sort your patch cords' connectors by type, and name each one. The goal is LC, SC and ST on sight.
3. Inspect, clean and re-inspect one LC connector with the one-click cleaner, as FOA's course shows.
4. Use the fault locator to find a bad connector or a break on a patch cord.
5. Record a video of steps 3 and 4. Label it "home lab."

**What it proves.** Like every lab in this course, it shows you can work your own gear. It does not show you can work a carrier's fiber (lesson 8). A supervisor's sign-off on a real job is what shows that.

**On the job.** Ask to watch fiber patching or cleaning at the truck or the network rack, and offer to clean connectors under supervision. Do not touch live fiber, and do not take photos of racks, without the owner's go-ahead (lesson 1).

**The practical.** A video of inspect, clean and re-inspect, and one fault found with the visual fault locator.

:::reveal What does tier 2 of the lab cost on October 21, 2026, before patch cords? ||| $105.89: $35.94 for the Smart Click LC cleaner plus $69.95 for the FIS Mini Visual Fault Locator.

:::reveal What must you finish before opening the fiber kit, under this course's precaution? ||| FOA's free Fiber Optic Safety course, 1 to 2 hours (FOA, n.d.-b).

## Sources
- ${FIBER_U} Locator: the course list, Fiber Optic Safety and Connector Inspection and Cleaning.
- ${FCD_CLEANER} Locator: product page, price and clean count.
- ${FIS_VFL} Locator: the Mini Visual Fault Locator listing, price and adapter size.`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · Fiber and the physical layer",
      section: "6 · Fiber and the physical layer",
      body: "A graded check on fiber's place on the map, where to learn fiber for free and what certifies it, and the starter kit, its prices and its precautions. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "How many miles of AT&T fiber does the fourth-generation network ride on?", options: ["More than 68,000", "About 6,800", "About 118", "More than 680,000"], correctIndex: 0, explanation: "More than 68,000 miles of AT&T fiber (NBA, 2026a; AT&T, 2026).", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "What does the league network's physical path mostly run on, per lesson 20?", options: ["Satellite", "Fiber", "Copper", "Microwave"], correctIndex: 1, explanation: "Underneath the packets is a physical path, and on the league network that path is mostly fiber.", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "What does the fourth generation bring to the venues besides new conduit?", options: ["A second replay center", "New tracking cameras", "All-new networking equipment", "A fan Wi-Fi upgrade"], correctIndex: 2, explanation: "All-new networking equipment and about four times the bandwidth (Carlson, 2026).", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "Why does the new network bring conduit in from different directions?", options: ["So each team can own its own path", "So the old fiber can stay in use", "So the trucks can park closer", "So no single cut takes the site down"], correctIndex: 3, explanation: "\"So no single cut takes the site down\" (Carlson, 2026).", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "How fast was HSAN2's network in 2014?", options: ["10-gig", "1-gig", "100-gig", "400-gig"], correctIndex: 0, explanation: "HSAN2 was a 10-gig network (Dachman, 2014).", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "What did every arena get for HSAN2 in 2014?", options: ["A fiber cleaner and a fault locator", "Two racks, with a router and firewall", "Two satellite dishes on the roof", "A replay room with 94 monitors"], correctIndex: 1, explanation: "Two new equipment racks, including a router and a firewall (Dachman, 2014).", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "How should you read the 2014 network facts?", options: ["As today's setup", "As a future plan", "As dated history", "As league rules"], correctIndex: 2, explanation: "The 2014 facts are history, dated, as lesson 3 said.", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "Why is fiber not separate from section 5's topic, per lesson 20?", options: ["Fiber carries only the PTP clock", "Fiber replaces the need for ST 2110", "Section 5 is about fiber cleaning", "Section 5's second path runs on it"], correctIndex: 3, explanation: "A cut or bad connection is exactly the loss ST 2022-7 and diverse routes exist to survive.", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "Who provides the league network and monitors it?", options: ["The carrier, AT&T", "The home team", "The truck crew", "The replay center"], correctIndex: 0, explanation: "The carrier provides the network and monitors it from its Network Operations Center (AT&T, 2026).", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "What honest way in does lesson 20 suggest for fiber on a job?", options: ["Repatch the rack to learn the layout", "Watch, then clean under supervision", "Photograph the racks for your notes", "Test the carrier's fiber on your own"], correctIndex: 1, explanation: "Ask to watch patching or cleaning, and offer to clean connectors under supervision.", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "When may you touch fiber on a job, per lesson 20?", options: ["Whenever the game is not live", "Whenever you own a cleaner", "When the owner hands it to you", "Whenever a fault is reported"], correctIndex: 2, explanation: "Watching is allowed when the owner says so; touching is allowed when the owner hands it to you.", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "Which posting asks for cabling, connectivity and basic IT?", options: ["The Technical Manager posting", "The carrier's NOC posting", "The Replay Center posting", "The arena-side, per-game posting"], correctIndex: 3, explanation: "The per-game, arena-side posting asks for \"cabling, connectivity and basic IT\" (NBA, 2026c).", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "What does the arena-side posting ask for besides cabling?", options: ["Work at heights", "A CFOT credential", "A driver's license", "A SMPTE membership"], correctIndex: 0, explanation: "It asks for work at heights (NBA, 2026c).", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "Where in this series is working at height taught?", options: ["CREW-05, section 6", "CREW-01, section 2", "CREW-02, section 7", "CREW-04, section 1"], correctIndex: 1, explanation: "CREW-01, Rigging for Stage and Broadcast Crews, section 2, \"Working at height.\"", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "Does this course teach working at heights?", options: ["Yes; in lesson 22's lab", "Yes; in lesson 20's table", "No; it points to CREW-01", "No; no course covers it"], correctIndex: 2, explanation: "This course does not teach it; CREW-01 gives a whole section to it.", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "Which brief topics does lesson 20 say this course's sources do not cover?", options: ["Fiber miles and conduit", "Free courses and CFOT", "Kit prices and tools", "Polarity and light levels"], correctIndex: 3, explanation: "Polarity and light levels are not covered by the course's sources.", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "Where are connector inspection and cleaning steps to come from?", options: ["FOA's free courses and the reviewer", "This lesson's own best guesses", "The league's support posting", "The carrier's press release"], correctIndex: 0, explanation: "The steps come from the Fiber Optic Association's free courses and the reviewer.", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "Why does this section point to others for fiber handling steps?", options: ["Fiber handling is not a real job", "A guess would be worse than a pointer", "The league forbids fiber training", "Fiber steps change every week"], correctIndex: 1, explanation: "A course that guessed at these would be worse than one that points you to the people who teach them.", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "What does FOA call Fiber U?", options: ["\"the paid certification exam of the FOA\"", "\"the FOA's in-person training center\"", "\"the free online learning website of the FOA\"", "\"the FOA's members-only video library\""], correctIndex: 2, explanation: "Fiber U is \"the free online learning website of the FOA\" (FOA, n.d.-b).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "How long is Fiber U's Fiber Optic Safety course, as FOA lists it?", options: ["10 to 20 hours", "2 to 4 hours", "Half an hour", "1 to 2 hours"], correctIndex: 3, explanation: "Fiber Optic Safety: 1 to 2 hours (FOA, n.d.-b).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "How long is Fiber U's Connector Inspection and Cleaning course?", options: ["1 hour", "6 hours", "20 hours", "3 days"], correctIndex: 0, explanation: "Connector Inspection and Cleaning: 1 hour (FOA, n.d.-b).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "How long is Fiber U's Basic Fiber Optics course, as FOA lists it?", options: ["1 to 2 hours", "10 to 20 hours", "2 to 4 hours", "40 to 60 hours"], correctIndex: 1, explanation: "Basic Fiber Optics: 10 to 20 hours (FOA, n.d.-b).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "Which Fiber U course does FOA mark optional?", options: ["Fiber Optic Safety", "Basic Fiber Optics", "Understanding OTDRs", "Connector Cleaning"], correctIndex: 2, explanation: "Understanding OTDRs, 2 to 4 hours, is optional (FOA, n.d.-b).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "Which Fiber U course does lesson 21 put first?", options: ["Basic Fiber Optics", "Understanding OTDRs", "CFOT exam prep", "Fiber Optic Safety"], correctIndex: 3, explanation: "Fiber Optic Safety comes first, before you open a kit.", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "What do Fiber U's MiniCourse certificates cost?", options: ["$10", "$99", "$180", "$0"], correctIndex: 0, explanation: "MiniCourse certificates cost $10 (FOA, n.d.-b).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "Which topics do FOA's MiniCourses cover that this course names only as a goal?", options: ["Multicast and IGMP joins", "Decibels and loss budgets", "PTP lock and jitter", "SDP and NMOS connections"], correctIndex: 1, explanation: "FOA's MiniCourses cover dB and loss budgets (FOA, n.d.-b).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "Should you call a $10 MiniCourse certificate a certification?", options: ["Yes, on every résumé", "Yes, once you pay for it", "Only if FOA calls it one", "Only after a year of work"], correctIndex: 2, explanation: "Lesson 7's rule: do not call it a certification unless the provider does.", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "What does CFOT stand for?", options: ["Certified Field Operations Tech", "Center for Fiber Optic Training", "Certified Fiber Optic Tester", "Certified Fiber Optic Technician"], correctIndex: 3, explanation: "FOA's Certified Fiber Optic Technician (FOA, n.d.-a).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "What are the two ways into FOA's CFOT, per its page?", options: ["An approved school, or field experience", "A SMPTE course, or a league posting", "A Fiber U certificate, or a fee", "A Network+ pass, or a referral"], correctIndex: 0, explanation: "Through an FOA-approved school, or by direct certification with at least two years of relevant field experience (FOA, n.d.-a).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "How much field experience does direct CFOT certification require?", options: ["At least ten years", "At least two years", "At least six months", "None at all"], correctIndex: 1, explanation: "At least two years of relevant field experience (FOA, n.d.-a).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "How many questions is the CFOT exam?", options: ["70", "40", "100", "16"], correctIndex: 2, explanation: "100 questions, with 70 correct to pass (FOA, n.d.-a).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "How many correct answers does the CFOT exam need to pass?", options: ["100", "50", "80", "70"], correctIndex: 3, explanation: "70 correct of 100 (FOA, n.d.-a).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "What does FOA's CFOT page say about fees?", options: ["It does not list them", "They are $10 each", "They are waived", "They are $599"], correctIndex: 0, explanation: "The page does not list the fees (FOA, n.d.-a).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "Which kind of arena work does lesson 21 say CFOT fits best?", options: ["Replay review", "Install-era work", "Referee comms", "Camera shading"], correctIndex: 1, explanation: "CFOT fits install work best, by the course's reading of the job; ask an employer which kind of work it is.", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "How many LC, SC and ST connectors should you identify on sight, as the goal?", options: ["6 of 10", "18 of 20", "10 of 10", "5 of 6"], correctIndex: 2, explanation: "Identify LC, SC and ST connectors on sight: 10 of 10.", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "Which connector does the cleaning goal use?", options: ["SC", "ST", "BNC", "LC"], correctIndex: 3, explanation: "Inspect, clean and re-inspect an LC connector with a one-click cleaner.", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "What tool does goal 3 use to find a bad connector or a break?", options: ["A visual fault locator", "A multicast querier", "A PTP grandmaster", "A Wireshark capture"], correctIndex: 0, explanation: "Use a visual fault locator to find a bad connector or a break on a patch cord.", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "In what unit does goal 4 ask you to explain a link loss budget?", options: ["Megabits", "Decibels", "Microseconds", "Octets"], correctIndex: 1, explanation: "Explain a link loss budget in decibels in plain words.", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "Why does lesson 21 not write out the fiber steps?", options: ["The steps are trade secrets", "FOA forbids sharing them", "Its sources do not give them", "They need no explanation"], correctIndex: 2, explanation: "The course's sources do not give them, and a fiber step learned from a guess is learned wrong.", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "About how many hours does the plan budget for fiber?", options: ["About 60", "About 1", "About 20", "About 6"], correctIndex: 3, explanation: "About 6 hours, as an estimate.", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "Why does Basic Fiber Optics come after the 6-hour plan?", options: ["Its 10 to 20 hours do not fit in 6", "It is open only to CFOT holders", "It costs more than the whole kit", "It repeats the safety course"], correctIndex: 0, explanation: "At 10 to 20 hours, it does not fit in 6, so take it after.", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "What does fiber study need from sections 2 to 5?", options: ["The whole PTP lab first", "Nothing; it can run alongside", "The multicast lab first", "Every quiz passed first"], correctIndex: 1, explanation: "Fiber needs nothing from sections 2 to 5, so you can study it alongside them.", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "Which kinds of need does lesson 22's Before release line name?", options: ["Only BAM's decision", "Only a practitioner", "A practitioner and a QR", "No need at all"], correctIndex: 2, explanation: "It needs a practitioner to demonstrate and a qualified reviewer to supply sourced rules.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "Why does lesson 22 not state fiber safety rules yet?", options: ["Fiber has no safety concerns", "The rules are the same as PTP's", "The league forbids stating them", "Its sources give no quotable rules"], correctIndex: 3, explanation: "The course's sources do not give them in words it can quote.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "Under lesson 22's precaution, what do you finish before opening the kit?", options: ["FOA's Fiber Optic Safety course", "The CFOT exam with 70 correct", "SMPTE's Practical Lab course", "A shadow shift at an arena"], correctIndex: 0, explanation: "Finish FOA's free Fiber Optic Safety course, 1 to 2 hours (FOA, n.d.-b).", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "Under lesson 22's precaution, where must you never look?", options: ["At the cleaner's clean count", "Into a fiber end or connector", "At the patch cord's label", "At the switch's port lights"], correctIndex: 1, explanation: "Never look into a fiber end or a connector, and never point the fault locator at anyone.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "Whose precaution is \"never point the fault locator at anyone\"?", options: ["FOA's, quoted from its page", "The league's, from a posting", "This course's, not a quoted rule", "The maker's, from its box"], correctIndex: 2, explanation: "That precaution is the course's, not a quoted rule; follow FOA's course where it says more.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "What did the Smart Click LC cleaner cost on October 21, 2026?", options: ["$69.95", "$26.99", "$10.00", "$35.94"], correctIndex: 3, explanation: "$35.94 (Fiber Cables Direct, n.d.).", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "About how many cleans does the Smart Click LC cleaner give?", options: ["About 800", "About 80", "About 8,000", "About 18"], correctIndex: 0, explanation: "About 800 cleans (Fiber Cables Direct, n.d.).", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "What did the FIS Mini Visual Fault Locator cost on October 21, 2026?", options: ["$35.94", "$69.95", "$77.50", "$44.99"], correctIndex: 1, explanation: "$69.95, with a 2.5 mm adapter (Fiber Instrument Sales, n.d.).", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "What adapter size comes with the FIS Mini Visual Fault Locator?", options: ["1.25 mm", "5.0 mm", "2.5 mm", "10 mm"], correctIndex: 2, explanation: "A 2.5 mm adapter (Fiber Instrument Sales, n.d.); an LC adapter may be needed.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "Which kit item may also be needed but was not confirmed?", options: ["A second Raspberry Pi board", "A SMPTE membership card", "A 48-port managed switch", "An LC adapter for the locator"], correctIndex: 3, explanation: "An LC adapter for the fault locator may be needed; it was not confirmed.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "What does tier 2 cost, before patch cords?", options: ["$105.89", "$104.49", "$210.38", "$69.95"], correctIndex: 0, explanation: "$35.94 + $69.95 = $105.89.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "About what does the whole lab, tiers 1 and 2, come to?", options: ["About $106, all in", "About $210, plus cables", "About $799, all in", "About $26, plus parts"], correctIndex: 1, explanation: "$104.49 + $105.89 is about $210, plus cables, power and patch cords.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "Why is the inspection scope optional in lesson 22?", options: ["FOA says never to use one", "It works only on SC plugs", "Its price was not checked", "It is part of the cleaner"], correctIndex: 2, explanation: "The inspection scope stays optional because its price was not checked.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "Where does the how of each fiber lab step come from?", options: ["This lesson", "The league posting", "The SMPTE FAQ", "FOA's courses"], correctIndex: 3, explanation: "The how of each step comes from FOA's courses, not from this lesson.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "What does the fiber practical ask you to hand in?", options: ["A video: clean, re-inspect, find a fault", "A photo of an arena's fiber rack", "A CFOT certificate and its score", "A capture of an IGMP join"], correctIndex: 0, explanation: "A video of inspect, clean and re-inspect, and one fault found with the visual fault locator.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "What does the fiber lab not show?", options: ["That you can clean your own cords", "That you can work a carrier's fiber", "That you can name LC on sight", "That you can use a fault locator"], correctIndex: 1, explanation: "It shows you can work your own gear, not a carrier's fiber; a supervisor's sign-off shows that.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7: Monitoring and fault isolation under a clock
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "feed-check-in",
      title: "23 · Feed check-in and the monitoring tools",
      section: "7 · Monitoring and fault isolation",
      recallContent: [
        {
          prompt: "What does tier 2 of the lab cost, before patch cords?",
          answer: "$105.89: the Smart Click LC cleaner ($35.94) plus the FIS Mini Visual Fault Locator ($69.95), read October 21, 2026.",
        },
        {
          prompt: "What precaution does lesson 22 set until sourced fiber safety rules are added?",
          answer: "Finish FOA's Fiber Optic Safety course first, never look into a fiber end or connector, and never point the fault locator at anyone.",
        },
      ],
      body: `${QR("a league or truck engineer in charge, to compare this practice checklist with a real check-in procedure and to say what a multiviewer, an IP probe and a video analyzer show on that site")}

**The duty, in the league's words.** The support posting's first duty is to "Check in all inbound and outbound feeds." It goes on: monitor with multiviewers, IP probes and video analyzers; troubleshoot hybrid routers, IP codecs and Layer 2/3 switches; timing and sync; technical reports; and 24x7 shifts (National Basketball Association [NBA], 2026b). The arena-side, per-game posting adds pre-game setup to teardown, verifying cameras and data flow, troubleshooting under time pressure, and reading and carrying out deployment documents (NBA, 2026c).

**The three tools.** The support posting names multiviewers, IP probes and video analyzers (NBA, 2026b). This course's sources name them but do not describe what each shows, so this lesson does not. On a shadow shift, they are the first three things to ask to be shown.

**One blind spot to know.** Ordinary network monitoring averages over long stretches of time. Cisco's white paper on microbursts says such tools "are unable to detect microbursts because they are monitoring very large time intervals," while those bursts "can lead to buffer exhaustion, which results in tail drops and lost packets" (Cisco Systems, 2017). So a smooth bandwidth graph does not prove a stream lost nothing. That is why lesson 25 looks at the packets themselves.

**A practice checklist.** This is a practice version, built from the earlier lessons. **Replace it with the employer's procedure** whenever you have one. For every feed on your lesson 1 map, check:

| Check | What you look at | Lesson |
|---|---|---|
| 1. What is it? | Picture, sound or data: which ST 2110 part | 12 |
| 2. Is it described right? | The SDP file: group, port, source and format | 13 |
| 3. Is it on the right clock? | ts-refclk names the expected grandmaster and domain; the device shows lock | 17 |
| 4. Are both paths there? | If the SDP says DUP, both primary and secondary arrive | 19 |
| 5. Did the joins land? | The receiver joined the group it should, from the source it should | 11 |
| 6. Is anything lost? | Packet loss and jitter on a capture, in your lab | 25 |
| 7. Is it logged? | Feed name, time checked, result, your initials | This lesson |

**Inbound and outbound.** The duty says all inbound and outbound feeds (NBA, 2026b). So the checklist runs both ways: feeds coming into the arena (return feeds, for example) and feeds going out. Your lesson 1 map should already show both directions.

**Keep a log.** Write down what you checked and in what order, with nothing confidential in it. On a real job, the employer's log and runbook win. The Technical Manager posting asks for runbooks (NBA, 2026d), so expect one to exist.

**The practice drill.** Run the checklist on your own lab's feeds before every lab session for a week. Time it. The goal is not speed for its own sake. It is knowing the checklist so well that a fault stands out when it appears.

**On the job.** If allowed, shadow the pre-game check-in. Keep your own log of what was checked and in what order, and compare it with this checklist afterward. Where they differ, the real one is right.

:::reveal What is the first duty on the league's support posting? ||| "Check in all inbound and outbound feeds" (NBA, 2026b).

:::reveal Why does a smooth bandwidth graph not prove a stream lost nothing? ||| Ordinary monitoring averages over long time intervals and misses microbursts, which can exhaust buffers and drop packets (Cisco Systems, 2017).

## Sources
- ${NBA_POST_SUPPORT} Locator: "Responsibilities," the full duty list.
- ${NBA_POST_OFFICIATING} Locator: "Responsibilities," setup to teardown and deployment documents.
- ${NBA_POST_TECH_MANAGER} Locator: "Responsibilities," runbooks.
- ${CISCO_MICROBURSTS} Locator: the opening sections on microbursts and monitoring intervals.`,
    },
    {
      slug: "source-transport-or-receiver",
      title: "24 · Source, transport or receiver?",
      section: "7 · Monitoring and fault isolation",
      recallContent: [
        {
          prompt: "Which three monitoring tools does the league's support posting name?",
          answer: "Multiviewers, IP probes and video analyzers (NBA, 2026b).",
        },
        {
          prompt: "What should you do when the practice checklist and an employer's procedure differ?",
          answer: "Follow the employer's procedure; the real one is right.",
        },
      ],
      body: `**A frame, not a rule.** When a feed goes wrong, sort the fault into one of three places before you touch anything: the **source** (the sender), the **transport** (switches and paths between) or the **receiver**. That three-way sort is this course's teaching frame, not a league procedure. It works because each place leaves different evidence, and every piece of evidence below comes from an earlier lesson.

| Place | Evidence that points here | From |
|---|---|---|
| Source | The sender's SDP does not match what was planned: wrong group, port or format | Lesson 13; SMPTE (2022b, section 8.1) |
| Source | The sender names a different grandmaster or domain from the rest of the plant | Lesson 17; SMPTE (2022b, section 8.2) |
| Transport | Ports that did not join are flooded, or a joined stream drops out after minutes | Lesson 11; Christensen et al. (2006, section 1); Cisco Systems (2018) |
| Transport | Sender and receiver sit in different VLANs or subnets with nothing routing between them | Lessons 6 and 11; Cisco Meraki (n.d.); Fenner et al. (2016, section 3.1) |
| Transport | Oversized packets meet a port that does not take them | Lesson 15; SMPTE (2022b, sections 6.3 and 8.6) |
| Transport | Loss that ordinary graphs do not show, from bursts and full buffers | Lessons 15 and 23; Cisco Systems (2017) |
| Transport | One of two paths is gone | Lesson 19; Clear-Com (n.d.) |
| Receiver | It joined the wrong group, or the right group from the wrong source | Lesson 11; Holbrook & Cain (2006, section 1) |
| Receiver | Its clock does not match the ts-refclk in the stream's SDP | Lesson 17; SMPTE (2022c, section 7.2.1) |

**Cheapest evidence first.** A useful order is to start with the question that splits the problem fastest. Does another receiver get the same stream cleanly? If yes, the source and most of the transport are probably fine, so look at this receiver. If no, does the stream leave the sender at all? If it does not, look at the source. If it does, the fault sits in between. That order is reasoning from the table, not a published method.

**Two minutes.** The plan this course was built on sets a drill goal: sort any lab fault into source, transport or receiver within 2 minutes, and name the evidence. Not fix it: sort it. Fixing comes after, and on a real job it may not be yours to do.

**The sort tells you whom to tell.** On a real job, the answer to "where is it?" is usually also the answer to "who owns it?" The carrier provides and monitors the network (AT&T, 2026). A transport fault on carrier gear goes to the owner, through the employer's procedure, not to your hands (lesson 1). Lesson 26 covers how to say it.

**Write down what ruled things out.** "The second receiver is clean" is evidence. So is "the SDP matches the plan." A status update that lists what you ruled out saves the next person from repeating it.

:::reveal A second receiver gets the same stream cleanly. Where does that point? ||| To the first receiver: the source and most of the transport are probably fine.

:::reveal Ports that did not join a group are getting it. Source, transport or receiver? ||| Transport: the switch is flooding, for example because snooping is off (Christensen et al., 2006, section 1).

## Sources
- ${SMPTE_2110_10} Locator: sections 6.3 and 8.6 (size limits and MAXUDP), sections 8.1 and 8.2 (SDP per stream and ts-refclk).
- ${SMPTE_2110_21} Locator: section 7.2.1, receivers comparing the reference clock.
- ${RFC_4541} Locator: section 1, flooding without snooping.
- ${CISCO_SNOOPING} Locator: the passages on the querier and membership-table aging.
- ${MERAKI} Locator: the section on routing between VLANs.
- ${RFC_7761} Locator: section 3.1, multicast across subnets.
- ${CISCO_MICROBURSTS} Locator: the opening sections on microbursts.
- ${CLEARCOM} Locator: the ST 2022-7 section.
- ${RFC_4607} Locator: section 1, delivery only to the requested source and group.
- ${ATT_2026} Locator: the sentence on AT&T providing and monitoring the network.`,
    },
    {
      slug: "seeing-loss-rtp-and-srt",
      title: "25 · Seeing loss: RTP analysis and SRT",
      section: "7 · Monitoring and fault isolation",
      recallContent: [
        {
          prompt: "What are the three places the fault-isolation frame sorts a fault into?",
          answer: "Source (the sender), transport (switches and paths between) and receiver.",
        },
        {
          prompt: "What is the drill goal for sorting a lab fault?",
          answer: "Sort it into source, transport or receiver within 2 minutes, and name the evidence.",
        },
      ],
      body: `**Numbered packets.** RTP usually runs on top of UDP, and it gives every packet a sequence number (Schulzrinne et al., 2003, section 1). Those numbers "allow the receiver to reconstruct the sender's packet sequence" (Schulzrinne et al., 2003, section 1). It follows that a gap in the numbers is a packet that never arrived. That is how loss becomes visible.

**Seeing it in Wireshark.** The Wireshark User's Guide describes an RTP Stream Analysis window, in section 9.11.2, which reads a capture and reports lost packets and jitter for each RTP stream (Wireshark Foundation, n.d.). Use it on captures from your own lab. On live gear, the rule from lesson 1 holds: no captures without the owner's go-ahead.

**A lab exercise.** Capture a multicast stream from the lesson 11 lab, open it in RTP Stream Analysis, and write down the lost-packet count and the jitter. Then create some trouble on purpose, for example by moving the receiver's cable to another port mid-stream, and capture again. Compare the two. Label both "home lab."

**SRT is on the postings.** The support posting names SRT among its protocols, alongside RTSP, RTMP, UDP/TCP and RTP (National Basketball Association [NBA], 2026b), and the Technical Manager posting prefers SRT (NBA, 2026d).

**How SRT answers loss.** SRT takes the opposite approach to ST 2022-7. Instead of sending everything twice, an SRT receiver asks the sender to resend the packets that went missing, and SRT's latency setting trades delay for reliability (Haivision, n.d.). So the two answers to loss cost different things. A second copy costs bandwidth (lesson 19). A resend costs time.

**An SRT lab.** The SRT project on GitHub includes sample applications. Its srt-live-transmit sample is, in the project's own words, not meant for production use (Haivision, n.d.). That makes it fine for a home lab and wrong for a show. The plan this course was built on suggests this exercise:

1. Send an SRT stream from one lab computer to the other with the sample app.
2. Add packet loss on purpose with a Linux traffic-shaping tool.
3. Watch whether the stream survives, and change the latency setting to see what changes.
4. Write down what you saw, in your words, labeled "home lab."

Which traffic-shaping tool to use is not in this course's sources, so this lesson does not name one. Pick one from your Linux distribution's documentation, and say which in your write-up.

**Back to the sort.** Loss that shows up in RTP analysis points to transport in lesson 24's frame, unless the sender's own capture already shows the gap, which points to the source. A capture at each end is what tells them apart.

**On the job.** If allowed, ask which streams on the site run over SRT and which over ST 2110, and how each one's loss is watched. Write the answer in your log.

:::reveal How do RTP sequence numbers make lost packets visible? ||| They let the receiver rebuild the sender's packet order (Schulzrinne et al., 2003, section 1), so a missing number is a packet that never arrived.

:::reveal How does SRT's way of handling loss differ from ST 2022-7's, and what does each cost? ||| SRT asks the sender to resend missing packets and trades delay for reliability through its latency setting (Haivision, n.d.); ST 2022-7 sends a second copy, which costs bandwidth.

## Sources
- ${RFC_3550} Locator: section 1, sequence numbers.
- ${WIRESHARK} Locator: section 9.11.2, RTP Stream Analysis.
- ${NBA_POST_SUPPORT} Locator: "Qualifications," the protocol list.
- ${NBA_POST_TECH_MANAGER} Locator: "Preferred qualifications," SRT.
- ${HAIVISION_SRT} Locator: the README, how SRT recovers lost packets, the latency setting, and the sample applications note on srt-live-transmit.`,
    },
    {
      slug: "status-calls-and-reports",
      title: "26 · Status calls, escalation and reports",
      section: "7 · Monitoring and fault isolation",
      recallContent: [
        {
          prompt: "Which Wireshark window finds lost packets and jitter in a capture?",
          answer: "RTP Stream Analysis, section 9.11.2 of the Wireshark User's Guide (Wireshark Foundation, n.d.).",
        },
        {
          prompt: "Why is srt-live-transmit fine for a home lab but not for a show?",
          answer: "The SRT project says it is not meant for production use (Haivision, n.d.).",
        },
      ],
      body: `${QR("a league or truck engineer in charge, to confirm the six-part status update, the escalation advice and the report outline against real practice")}

**Thirty seconds.** When a feed goes wrong on a live game, people need to know what is happening without a speech. This course teaches a 30-second status update in six parts. The six parts are a teaching frame, not a league standard:

1. **Impact:** what is broken, as the viewer or the next station sees it.
2. **Scope:** which feeds, which path, which direction.
3. **Time:** when it started, and how long it has lasted.
4. **Checks done:** what you have ruled out, and how.
5. **Unknowns:** what you do not know yet.
6. **The ask:** what you need, and from whom.

**An example, from a lab drill.** "Camera 4's picture is missing at receiver B. Only that one stream, primary path; the secondary still arrives. Started 19:42, about two minutes ago. Receiver A gets it clean, and B's join is on the right group. I don't know yet whether B's port lost its group. I need the switch owner to look at port 7." Every clause maps to one of the six parts, and it reads in under 30 seconds.

**Escalation is the employer's procedure.** Who you call depends on who owns what, and that is set by the employer, not by this course. The sources show the shape: the carrier provides the network and monitors it from its Network Operations Center (AT&T, 2026), and its dedicated engineering unit runs 24/7 network telemetry (Carlson, 2026). The Technical Manager posting lists incident response among its duties (National Basketball Association [NBA], 2026d). Your job is to know the procedure before the game, not to invent one during it.

**The comms around you.** Each arena's referee comms setup has three antennas, a beltpack for each referee, and "a full-size Bolero for a technician," with an adapter that links it to the replay center, the public-address system and the truck (Daley, 2025). So comms at an arena already join the league's officials, the replay center and the truck. Listen to how the truck's engineer and the league's facilities talk on comms, and copy the format.

**The change rule, in one line.** No reboot, repatch or settings change on network gear without the owner's go-ahead. That line is this course's, drawn from who provides and monitors the network (AT&T, 2026).

**Reports.** The support posting asks for technical reports (NBA, 2026b). The Technical Manager posting asks for runbooks and root cause analyses (NBA, 2026d). For practice, write a one-page root cause analysis of one lab fault with these parts, which are this course's outline, not the league's: what happened; when, and for how long; the impact; the cause, and the evidence for it; the fix; and what would stop it happening again.

**A post-game report.** After each lab drill, write a short report: what you checked, what failed, what you did, and what is still open. Nothing confidential goes in a practice report.

:::reveal What are the six parts of this course's 30-second status update? ||| Impact, scope, time, checks done, unknowns, and the ask.

:::reveal What does the change rule say, in one line? ||| No reboot, repatch or settings change on network gear without the owner's go-ahead.

## Sources
- ${ATT_2026} Locator: the sentence on AT&T providing and monitoring the network from its Network Operations Center.
- ${CARLSON_2026} Locator: the paragraph on AT&T's dedicated engineering unit.
- ${NBA_POST_TECH_MANAGER} Locator: "Responsibilities," incident response, runbooks and root cause analyses.
- ${NBA_POST_SUPPORT} Locator: "Responsibilities," technical reports.
- ${DALEY_2025} Locator: the paragraphs on the antennas, beltpacks, the technician's Bolero and the adapter.`,
    },
    {
      slug: "a-mock-game-night",
      title: "27 · A mock game night",
      section: "7 · Monitoring and fault isolation",
      recallContent: [
        {
          prompt: "Name the six parts of the 30-second status update.",
          answer: "Impact, scope, time, checks done, unknowns, and the ask.",
        },
        {
          prompt: "Which two documents does the Technical Manager posting ask for?",
          answer: "Runbooks and root cause analyses (NBA, 2026d).",
        },
      ],
      body: `**A practice scenario, not a real game.** Everything in this lesson happens in your home lab. The game, the times and the faults are made up for practice. Nothing here describes a real arena or a real night.

**The setup.** Your tier 1 lab from lesson 8: a managed switch, two Linux computers, a multicast stream (lesson 11) and, if you built it, an SRT stream (lesson 25). A partner plays the role of the night, breaking one thing at a time without telling you what. The plan this course was built on names three drills: a wrong VLAN, a lost multicast join and packet loss. The partner picks the order.

**Before the game: check-in.** Run the lesson 23 checklist on every lab feed and log it. This is your baseline. When something breaks later, the baseline is how you know it changed.

**The clock.** For each fault, you have 5 minutes from the moment you notice it to sort it (lesson 24) and give a 30-second status update (lesson 26). Time yourself.

**Fault 1: a wrong VLAN.** What you might see: a receiver that cannot reach the sender at all, and pings that fail. The evidence: the receiver's port is in a different VLAN, and "routing will need to occur for traffic to flow in between VLANs" (Cisco Meraki, n.d.); your lab has no router. The sort: transport. The status update names the port and the VLAN, and asks for the port to be put back.

**Fault 2: a lost multicast join.** What you might see: a picture that was fine and then stopped, or a receiver that never got one. The evidence depends on which. If the stream dropped after some minutes and your capture shows no General Queries, the querier gap from lesson 11 is the likely cause, a transport fault (Cisco Systems, 2018). If the capture shows the receiver joined a different group from the SDP's, it is the receiver (lesson 13). The capture decides, not the symptom.

**Fault 3: packet loss.** What you might see: a stream that still plays but shows gaps, or an SRT stream that holds on and then fails as loss rises. The evidence: RTP Stream Analysis counts lost packets (Wireshark Foundation, n.d.); the SRT stream's survival depends on its latency setting (Haivision, n.d.). The sort: transport, unless a capture at the sender shows the gap there too.

**After each fault.** Restore the lab, rerun the checklist, and confirm you are back at baseline. Then log what happened.

**After the game.** Write two things (lesson 26): a short post-game report covering all three faults, and a one-page root cause analysis of the one that took you longest. Record your three status updates, as the plan suggests.

**How to score yourself.**

| Measure | Target |
|---|---|
| Fault sorted | Within 2 minutes (lesson 24) |
| Status update given | Within 5 minutes, all six parts |
| Lab restored | Back to the baseline checklist |
| Report and analysis | Written the same day |

**What this proves, and what comes next.** A clean mock game night shows you can find and report faults on your own gear under a clock. It does not show you can run a league's network: that comes only from shadow shifts on real jobs and a supervisor's sign-off (lesson 8). The league's postings describe the work you are preparing for: checking feeds in and out, monitoring, troubleshooting, reports and 24x7 shifts (National Basketball Association [NBA], 2026b). Practitioner demonstrations of this work will be added to this course as video lessons.

:::reveal In the mock game night, how long do you have to sort a fault and give a status update? ||| Sort it within 2 minutes, and give the 30-second, six-part update within 5 minutes of noticing it.

:::reveal A joined stream stopped after some minutes, and the capture shows no General Queries. What is the likely cause, and where does it sort? ||| No querier on the VLAN, so the group aged out (Cisco Systems, 2018): a transport fault.

## Sources
- ${MERAKI} Locator: the section on routing between VLANs.
- ${CISCO_SNOOPING} Locator: the passages on the querier and membership-table aging.
- ${WIRESHARK} Locator: section 9.11.2, RTP Stream Analysis.
- ${HAIVISION_SRT} Locator: the README, the latency setting.
- ${NBA_POST_SUPPORT} Locator: "Responsibilities," the full duty list.`,
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz · Monitoring and fault isolation",
      section: "7 · Monitoring and fault isolation",
      body: "A graded check on feed check-in, sorting a fault into source, transport or receiver, seeing packet loss, status calls and reports, and the mock game night. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What is the first duty on the league's support posting?", options: ["\"Design the carrier's backbone routes\"", "\"Check in all inbound and outbound feeds\"", "\"Install fiber conduit at new arenas\"", "\"Officiate replay reviews on game night\""], correctIndex: 1, explanation: "\"Check in all inbound and outbound feeds\" (NBA, 2026b).", sourceLessonSlug: "feed-check-in" },
          { prompt: "Which monitoring tools does the support posting name?", options: ["Light meters, gimbals and lens charts", "Beltpacks, antennas and comms panels", "Multiviewers, IP probes, video analyzers", "Scoreboards, shot clocks and horns"], correctIndex: 2, explanation: "Monitor with multiviewers, IP probes and video analyzers (NBA, 2026b).", sourceLessonSlug: "feed-check-in" },
          { prompt: "What shifts does the support posting list?", options: ["Weekday days only", "Summer only", "Mornings only", "24x7 shifts"], correctIndex: 3, explanation: "The support posting lists 24x7 shifts (NBA, 2026b).", sourceLessonSlug: "feed-check-in" },
          { prompt: "Which posting adds \"pre-game setup to teardown\"?", options: ["The arena-side, per-game posting", "The Technical Manager posting", "The carrier's NOC posting", "The Replay Center posting"], correctIndex: 0, explanation: "The per-game, arena-side posting adds pre-game setup to teardown (NBA, 2026c).", sourceLessonSlug: "feed-check-in" },
          { prompt: "Which documents does the per-game posting ask you to read and carry out?", options: ["Player contracts", "Deployment documents", "Ticketing reports", "Broadcast rights deals"], correctIndex: 1, explanation: "Reading and carrying out deployment documents (NBA, 2026c).", sourceLessonSlug: "feed-check-in" },
          { prompt: "What does lesson 23 say about what each monitoring tool shows?", options: ["Each one shows only the PTP offset reading", "Each one replaces the need for a checklist", "Its sources name them but do not describe them", "Each one is banned on league networks"], correctIndex: 2, explanation: "The sources name multiviewers, IP probes and video analyzers but do not describe them, so the lesson does not.", sourceLessonSlug: "feed-check-in" },
          { prompt: "On a shadow shift, what does lesson 23 say to ask to be shown first?", options: ["The carrier's admin passwords", "The rights holder's contract", "The arena's seating chart", "The three monitoring tools"], correctIndex: 3, explanation: "The multiviewer, the IP probe and the video analyzer are the first three things to ask to be shown.", sourceLessonSlug: "feed-check-in" },
          { prompt: "Why can ordinary monitoring miss microbursts?", options: ["It averages over long intervals", "It reads only multicast traffic", "It runs only during halftime", "It ignores UDP packets fully"], correctIndex: 0, explanation: "Tools \"are unable to detect microbursts because they are monitoring very large time intervals\" (Cisco Systems, 2017).", sourceLessonSlug: "feed-check-in" },
          { prompt: "What can microbursts lead to, per Cisco?", options: ["Faster streams and lower delay", "Buffer exhaustion and lost packets", "A new PTP grandmaster election", "Automatic ST 2022-7 copies"], correctIndex: 1, explanation: "They \"can lead to buffer exhaustion, which results in tail drops and lost packets\" (Cisco Systems, 2017).", sourceLessonSlug: "feed-check-in" },
          { prompt: "Does a smooth bandwidth graph prove a stream lost nothing?", options: ["Yes; graphs show every packet", "Yes; if the graph is green", "No; bursts can hide in averages", "No; graphs only show audio"], correctIndex: 2, explanation: "Long-interval averages miss microbursts (Cisco Systems, 2017), so a smooth graph proves nothing about loss.", sourceLessonSlug: "feed-check-in" },
          { prompt: "How is lesson 23's checklist labeled?", options: ["The league's official procedure", "A carrier-approved runbook", "A SMPTE standard checklist", "A practice version, to be replaced"], correctIndex: 3, explanation: "It is a practice version; replace it with the employer's procedure whenever you have one.", sourceLessonSlug: "feed-check-in" },
          { prompt: "Checklist item 2 asks whether a feed is described right. What do you look at?", options: ["The SDP file", "The fiber color", "The camera lens", "The PTP offset"], correctIndex: 0, explanation: "The SDP file: group, port, source and format (lesson 13).", sourceLessonSlug: "feed-check-in" },
          { prompt: "Checklist item 3 asks whether a feed is on the right clock. What do you check?", options: ["The SDP's port and payload type", "ts-refclk and the device's lock", "The switch's VLAN membership", "The cleaner's remaining cleans"], correctIndex: 1, explanation: "ts-refclk names the expected grandmaster and domain, and the device shows lock (lesson 17).", sourceLessonSlug: "feed-check-in" },
          { prompt: "Checklist item 4 asks whether both paths are there. When does it apply?", options: ["When the feed is audio", "When the fiber is new", "When the SDP says DUP", "When the game is national"], correctIndex: 2, explanation: "If the SDP says DUP, both primary and secondary should arrive (lesson 19).", sourceLessonSlug: "feed-check-in" },
          { prompt: "What goes in checklist item 7's log entry?", options: ["Fan count, weather and final score", "Carrier passwords and router keys", "Photos of every rack in the arena", "Feed, time checked, result, initials"], correctIndex: 3, explanation: "Feed name, time checked, result and your initials.", sourceLessonSlug: "feed-check-in" },
          { prompt: "Which directions does the check-in duty cover?", options: ["Inbound and outbound", "Outbound only", "Inbound only", "Neither; only audio"], correctIndex: 0, explanation: "The duty says all inbound and outbound feeds (NBA, 2026b).", sourceLessonSlug: "feed-check-in" },
          { prompt: "When the practice checklist and the real procedure differ, which is right?", options: ["The practice list", "The real procedure", "Whichever is shorter", "Whichever is newer"], correctIndex: 1, explanation: "Where they differ, the real one is right.", sourceLessonSlug: "feed-check-in" },
          { prompt: "Which posting asks for runbooks, so you should expect one to exist?", options: ["Broadcast Support", "League Tech Rep", "Technical Manager", "Replay Operator"], correctIndex: 2, explanation: "The Technical Manager posting asks for runbooks (NBA, 2026d).", sourceLessonSlug: "feed-check-in" },
          { prompt: "What are the three places lesson 24 sorts a fault into?", options: ["Camera, truck and replay center", "Audio, video and ancillary data", "Fiber, copper and wireless links", "Source, transport and receiver"], correctIndex: 3, explanation: "The sender, the switches and paths between, and the receiver.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "Is the three-way sort a league procedure?", options: ["No; it is a teaching frame", "Yes; it is in Rule 13", "Yes; AT&T publishes it", "No; it is a SMPTE part"], correctIndex: 0, explanation: "It is the course's teaching frame, not a league procedure.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "A sender's SDP lists a wrong group from the plan. Where does that point?", options: ["Transport", "Source", "Receiver", "Nowhere"], correctIndex: 1, explanation: "The sender's SDP not matching the plan points to the source (lesson 13; SMPTE, 2022b, section 8.1).", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "A sender names a different grandmaster from the rest of the plant. Where does that point?", options: ["Transport", "Receiver", "Source", "Fiber"], correctIndex: 2, explanation: "A sender on the wrong clock points to the source (lesson 17; SMPTE, 2022b, section 8.2).", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "Ports that did not join a group are flooded. Where does that point?", options: ["Source", "Receiver", "Clock", "Transport"], correctIndex: 3, explanation: "Flooding is a switch behavior: transport (Christensen et al., 2006, section 1).", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "A joined stream drops out after minutes, with no querier. Where does that point?", options: ["Transport", "Source", "Receiver", "Fiber"], correctIndex: 0, explanation: "With no querier, the switch ages out the group: transport (Cisco Systems, 2018).", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "Sender and receiver sit in different VLANs with nothing routing. Where does that point?", options: ["Source", "Transport", "Receiver", "Clock"], correctIndex: 1, explanation: "Routing between VLANs is a transport matter (Cisco Meraki, n.d.; Fenner et al., 2016, section 3.1).", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "Oversized packets meet a port that does not take them. Where does that point?", options: ["Source", "Receiver", "Transport", "Audio"], correctIndex: 2, explanation: "No fragmenting, so the hop drops them: transport (SMPTE, 2022b, sections 6.3 and 8.6).", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "One of two ST 2022-7 paths is gone. Where does that point?", options: ["Source", "Receiver", "Audio", "Transport"], correctIndex: 3, explanation: "A lost path is transport (lesson 19; Clear-Com, n.d.).", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "A receiver joined the right group from the wrong source. Where does that point?", options: ["Receiver", "Source", "Transport", "Clock"], correctIndex: 0, explanation: "With SSM, delivery goes only to the source asked for: a receiver fault (Holbrook & Cain, 2006, section 1).", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "A receiver's clock does not match the stream's ts-refclk. Where does that point?", options: ["Source", "Receiver", "Transport", "Fiber"], correctIndex: 1, explanation: "The receiver can compare ts-refclk with its own reference (SMPTE, 2022c, section 7.2.1); a mismatch there points to it.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "What question splits the problem fastest, per lesson 24?", options: ["How old is the switch's firmware?", "What color is the fiber jacket?", "Does another receiver get it cleanly?", "Which team is playing at home?"], correctIndex: 2, explanation: "Start with whether another receiver gets the same stream cleanly.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "Another receiver gets the stream cleanly. Where should you look?", options: ["At the source", "At the carrier", "At the fiber", "At this receiver"], correctIndex: 3, explanation: "If another receiver is clean, the source and most of the transport are probably fine.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "No receiver gets the stream, and it never leaves the sender. Where is the fault?", options: ["Source", "Transport", "Receiver", "Clock"], correctIndex: 0, explanation: "If the stream does not leave the sender, look at the source.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "No receiver gets it, but it does leave the sender. Where is the fault?", options: ["At the source, still", "In between: transport", "At one receiver only", "In the PTP grandmaster"], correctIndex: 1, explanation: "If it leaves the sender but reaches no receiver, the fault sits in between.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "What is the lab drill goal for sorting a fault?", options: ["Fix it within 2 minutes", "Report it within 1 hour", "Sort it within 2 minutes", "Sort it by the next game"], correctIndex: 2, explanation: "Sort any lab fault into source, transport or receiver within 2 minutes, and name the evidence.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "Does the 2-minute drill ask you to fix the fault?", options: ["Yes; to fix it", "Yes; to reboot", "No; to ignore it", "No; to sort it"], correctIndex: 3, explanation: "Not fix it: sort it. Fixing comes after, and on a real job it may not be yours.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "On a real job, what does the sort usually also answer?", options: ["Who owns the fault", "What the fault costs", "When the game ends", "Which fan noticed it"], correctIndex: 0, explanation: "The answer to \"where is it?\" is usually also the answer to \"who owns it?\"", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "A transport fault on carrier gear goes where?", options: ["To your own hands to fix", "To the owner, by procedure", "To the replay center", "To the rights holder"], correctIndex: 1, explanation: "The carrier provides and monitors the network (AT&T, 2026); the fault goes to the owner through the employer's procedure.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "Why write down what ruled things out?", options: ["It makes the status call longer", "The league fines missing notes", "It saves the next person repeating it", "It replaces the post-game report"], correctIndex: 2, explanation: "A status update that lists what you ruled out saves the next person from repeating it.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "What does RTP give every packet?", options: ["A VLAN tag", "A PTP domain", "A fiber color", "A sequence number"], correctIndex: 3, explanation: "RTP gives every packet a sequence number (Schulzrinne et al., 2003, section 1).", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "What do RTP sequence numbers let a receiver do?", options: ["Rebuild the sender's packet order", "Ask the sender to resend packets", "Choose a different PTP grandmaster", "Join a source-specific group"], correctIndex: 0, explanation: "They \"allow the receiver to reconstruct the sender's packet sequence\" (Schulzrinne et al., 2003, section 1).", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "What does a gap in RTP sequence numbers show?", options: ["A packet sent twice on purpose", "A packet that never arrived", "A change of PTP domain", "A new multicast group"], correctIndex: 1, explanation: "It follows from the sequence numbers: a gap is a packet that never arrived.", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "Which Wireshark window reports lost packets and jitter for RTP streams?", options: ["IGMP Group Summary", "PTP Clock Monitor", "RTP Stream Analysis", "SDP File Viewer"], correctIndex: 2, explanation: "The RTP Stream Analysis window (Wireshark Foundation, n.d., section 9.11.2).", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "Which section of the Wireshark guide covers RTP Stream Analysis?", options: ["6.5", "8.6", "2.3", "9.11.2"], correctIndex: 3, explanation: "Section 9.11.2 (Wireshark Foundation, n.d.).", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "Where may you capture freely for RTP analysis?", options: ["In your own lab", "On any live feed", "On carrier gear", "At any arena"], correctIndex: 0, explanation: "Use it on captures from your own lab; live gear needs the owner's go-ahead.", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "Which protocols does the support posting list alongside SRT?", options: ["DMX, MIDI and SMPTE-LTC", "RTSP, RTMP, UDP/TCP and RTP", "HTTP, FTP and SMTP", "PoE, LLDP and STP"], correctIndex: 1, explanation: "The support posting names RTSP, RTMP, SRT, UDP/TCP and RTP (NBA, 2026b).", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "Which posting prefers SRT?", options: ["Replay Operator", "Camera Operator", "Technical Manager", "Ticket Manager"], correctIndex: 2, explanation: "The Technical Manager posting prefers SRT (NBA, 2026d).", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "How does an SRT receiver handle a missing packet?", options: ["It waits for a second copy", "It drops the whole stream", "It switches to a new group", "It asks the sender to resend it"], correctIndex: 3, explanation: "An SRT receiver asks the sender to resend missing packets (Haivision, n.d.).", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "What does SRT's latency setting trade?", options: ["Delay for reliability", "Color for resolution", "Audio for video", "Fiber for copper"], correctIndex: 0, explanation: "The latency setting trades delay for reliability (Haivision, n.d.).", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "What does SRT's resend approach cost, against ST 2022-7's second copy?", options: ["Bandwidth rather than time", "Time rather than bandwidth", "Neither time nor bandwidth", "Both, always, equally"], correctIndex: 1, explanation: "A second copy costs bandwidth (lesson 19); a resend costs time.", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "What does the SRT project say about its srt-live-transmit sample?", options: ["It is the league's standard tool", "It is required for ST 2110", "It is not meant for production", "It only runs on a Mac"], correctIndex: 2, explanation: "In the project's words, it is not meant for production use (Haivision, n.d.).", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "Is srt-live-transmit fine for a home lab?", options: ["No, it is banned in labs", "Yes, and fine for shows", "No, it needs a license", "Yes, but wrong for a show"], correctIndex: 3, explanation: "Not meant for production makes it fine for a home lab and wrong for a show.", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "In the SRT lab, how do you add packet loss?", options: ["With a Linux traffic-shaping tool", "By cutting a live fiber cable", "By unplugging the carrier link", "By changing the PTP domain"], correctIndex: 0, explanation: "Add packet loss on purpose with a Linux traffic-shaping tool.", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "Why does lesson 25 not name a traffic-shaping tool?", options: ["All such tools are paid", "Its sources do not name one", "The league forbids them", "SRT has one built in"], correctIndex: 1, explanation: "Which tool to use is not in the course's sources; pick one and say which in your write-up.", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "In the SRT lab, what do you change to see what happens?", options: ["The PTP domain", "The VLAN number", "The latency setting", "The fiber length"], correctIndex: 2, explanation: "Watch whether the stream survives, and change the latency setting.", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "Loss shows in RTP analysis, and the sender's own capture is clean. Where does that point?", options: ["Source", "Receiver", "Clock", "Transport"], correctIndex: 3, explanation: "Loss after a clean sender capture points to transport in lesson 24's frame.", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "What tells a source gap from a transport gap?", options: ["A capture at each end", "A louder status call", "A second fiber cleaner", "A new SDP port number"], correctIndex: 0, explanation: "A capture at each end is what tells them apart.", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "What does lesson 25 suggest asking on a job, if allowed?", options: ["Which fans stream games at home", "Which streams use SRT or ST 2110", "Which team owns the arena fiber", "Which referee wears which pack"], correctIndex: 1, explanation: "Ask which streams run over SRT and which over ST 2110, and how each one's loss is watched.", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "How long is lesson 26's status update meant to take?", options: ["About 5 minutes", "About 2 seconds", "About 30 seconds", "About 1 hour"], correctIndex: 2, explanation: "A 30-second status update in six parts.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "Is the six-part status update a league standard?", options: ["Yes; from Rule 13", "Yes; from AT&T", "No; it is SMPTE's", "No; it is a teaching frame"], correctIndex: 3, explanation: "The six parts are a teaching frame, not a league standard.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "Which part of the update says what is broken as the next station sees it?", options: ["Impact", "Scope", "Unknowns", "The ask"], correctIndex: 0, explanation: "Impact: what is broken, as the viewer or the next station sees it.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "Which part of the update names which feeds, path and direction?", options: ["Impact", "Scope", "Time", "The ask"], correctIndex: 1, explanation: "Scope: which feeds, which path, which direction.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "Which part of the update says what you have ruled out?", options: ["Impact", "Scope", "Checks done", "Time"], correctIndex: 2, explanation: "Checks done: what you have ruled out, and how.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "Which part of the update says what you need, and from whom?", options: ["Unknowns", "Scope", "Time", "The ask"], correctIndex: 3, explanation: "The ask: what you need, and from whom.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "Which part of the update admits what you do not know yet?", options: ["Unknowns", "Impact", "Checks done", "Scope"], correctIndex: 0, explanation: "Unknowns: what you do not know yet.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "In lesson 26's example, what does \"Receiver A gets it clean\" serve as?", options: ["The impact", "Checks done", "The ask", "The time"], correctIndex: 1, explanation: "It is something ruled out: part 4, checks done.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "Who sets the escalation path on a job?", options: ["This course", "The learner", "The employer", "The fans"], correctIndex: 2, explanation: "Who you call is set by the employer, not by this course.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "From where does the carrier monitor the network?", options: ["The league's Replay Center", "Each arena's truck", "Each team's office", "Its Network Operations Center"], correctIndex: 3, explanation: "AT&T monitors from its Network Operations Center (AT&T, 2026).", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "Which posting lists incident response among its duties?", options: ["Technical Manager", "League Tech Rep", "Replay Operator", "Camera Operator"], correctIndex: 0, explanation: "The Technical Manager posting lists incident response (NBA, 2026d).", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "When should you know the escalation procedure?", options: ["During the fault", "Before the game", "After the report", "Only if asked"], correctIndex: 1, explanation: "Know the procedure before the game, not invent one during it.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "What does the referee comms adapter link to?", options: ["Fans' phones, Wi-Fi and scoreboard", "Team benches, coaches and lockers", "Replay center, PA system and truck", "Ticket office, parking and stores"], correctIndex: 2, explanation: "An adapter links it to the replay center, the public-address system and the truck (Daley, 2025).", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "How does lesson 26 suggest you learn the comms format?", options: ["Invent a format of your own", "Read it from the SMPTE FAQ", "Ask the fans in the seats", "Listen, then copy the format"], correctIndex: 3, explanation: "Listen to how the truck's engineer and the league's facilities talk on comms, and copy the format.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "What does the change rule say?", options: ["No change without the owner's go-ahead", "Reboot first, then tell the owner", "Repatch freely when the game is live", "Change settings if a fault lasts long"], correctIndex: 0, explanation: "No reboot, repatch or settings change on network gear without the owner's go-ahead.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "Where does the change rule come from?", options: ["A clause in the league's Rule 13", "Who provides and monitors the network", "SMPTE's ST 2110-10 standard text", "FOA's CFOT certification page"], correctIndex: 1, explanation: "It is the course's line, drawn from who provides and monitors the network (AT&T, 2026).", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "Which posting asks for technical reports?", options: ["Replay Center Manager", "Hawk-Eye Camera Tech", "Broadcast Support Engineer", "Ticketing Supervisor"], correctIndex: 2, explanation: "The support posting asks for technical reports (NBA, 2026b).", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "Which part comes last in this course's root cause analysis outline?", options: ["The names of everyone on shift", "The cost of the gear involved", "The final score of the game", "What would stop it happening again"], correctIndex: 3, explanation: "The outline ends with what would stop it happening again.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "What must never go in a practice report?", options: ["Anything confidential", "What you checked", "What failed", "What is still open"], correctIndex: 0, explanation: "Nothing confidential goes in a practice report.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "What is lesson 27's mock game night?", options: ["A report on a real game", "A made-up home-lab scenario", "A league-run training event", "A carrier's outage record"], correctIndex: 1, explanation: "Everything happens in your home lab; the game, times and faults are made up for practice.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "Which three drills does the plan name for the mock game night?", options: ["Dirty fiber, bad lens, low battery", "Late truck, no power, rain delay", "Wrong VLAN, lost join, packet loss", "Wrong score, no clock, lost ball"], correctIndex: 2, explanation: "A wrong VLAN, a lost multicast join and packet loss.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "Who picks the order of the faults?", options: ["The carrier", "The league", "The checklist", "Your partner"], correctIndex: 3, explanation: "A partner plays the night and picks the order.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "What is the pre-game check-in for, in the mock game night?", options: ["A baseline to spot changes", "A way to fix every fault", "A test of the fiber kit", "A score for the partner"], correctIndex: 0, explanation: "The baseline is how you know something changed when it breaks.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "How long do you have per fault to sort it and give a status update?", options: ["30 minutes", "5 minutes", "30 seconds", "2 hours"], correctIndex: 1, explanation: "Five minutes from noticing it to sort it and give a 30-second update.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "In the wrong-VLAN drill, why do the pings fail?", options: ["The fiber has a break in the cord", "The PTP clock lost its lock", "The lab has no router between VLANs", "The SDP names a wrong port"], correctIndex: 2, explanation: "\"Routing will need to occur for traffic to flow in between VLANs\" (Cisco Meraki, n.d.), and the lab has no router.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "Where does the wrong-VLAN fault sort?", options: ["Source", "Receiver", "Clock", "Transport"], correctIndex: 3, explanation: "A port in the wrong VLAN is transport.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "A stream dropped after minutes and the capture shows no General Queries. What is likely?", options: ["The querier gap from lesson 11", "A dirty LC connector end", "A wrong PTP domain number", "A sender with Wide pacing"], correctIndex: 0, explanation: "No querier on the VLAN, so the group aged out (Cisco Systems, 2018).", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "The capture shows the receiver joined a different group from the SDP's. Where does it sort?", options: ["Transport", "Receiver", "Source", "Fiber"], correctIndex: 1, explanation: "Joining the wrong group is a receiver fault (lesson 13).", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "In the lost-join drill, what decides the cause?", options: ["The symptom, not the capture", "The partner's hint", "The capture, not the symptom", "The fastest guess"], correctIndex: 2, explanation: "The capture decides, not the symptom.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "In the packet-loss drill, what counts the lost packets?", options: ["The fiber fault locator", "The PTP status screen", "The switch's VLAN table", "RTP Stream Analysis"], correctIndex: 3, explanation: "RTP Stream Analysis counts lost packets (Wireshark Foundation, n.d.).", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "In the packet-loss drill, what does an SRT stream's survival depend on?", options: ["Its latency setting", "Its fiber length", "Its VLAN number", "Its PTP domain"], correctIndex: 0, explanation: "The SRT stream's survival depends on its latency setting (Haivision, n.d.).", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "What do you do after each fault in the mock game night?", options: ["Move on at once to the next fault", "Restore, rerun the checklist, log it", "Reboot every device in the lab", "Delete the capture files"], correctIndex: 1, explanation: "Restore the lab, rerun the checklist, confirm you are back at baseline, then log it.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "Which fault gets the one-page root cause analysis after the game?", options: ["The one that was fastest", "Every fault, in full", "The one that took longest", "None; only a report"], correctIndex: 2, explanation: "Write a root cause analysis of the one that took you longest.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "How many status updates does the plan ask you to record?", options: ["One", "Six", "Ten", "Three"], correctIndex: 3, explanation: "Record your three status updates, as the plan suggests.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "What is the scoring target for having the report and analysis written?", options: ["The same day", "Within a month", "Before next season", "Only if asked"], correctIndex: 0, explanation: "Report and analysis written the same day.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "What does a clean mock game night show?", options: ["You can run a league's network", "You can find faults on your own gear", "You hold a CFOT certification", "You passed SMPTE's Practical Lab"], correctIndex: 1, explanation: "It shows you can find and report faults on your own gear under a clock, not that you can run a league's network.", sourceLessonSlug: "a-mock-game-night" },
          { prompt: "What will be added to this course later, per lesson 27?", options: ["A paid certification exam", "Live access to a league feed", "Practitioner video demonstrations", "A second fiber kit for each learner"], correctIndex: 2, explanation: "Practitioner demonstrations of this work will be added as video lessons.", sourceLessonSlug: "a-mock-game-night" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // FINAL
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-quiz",
      title: "Final quiz · Arena transmission",
      section: "Final assessment",
      body: "Ten questions drawn from the whole course, from the game-night map to the mock game night. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          { prompt: "In this course's general description, what does a league arena network link every arena to?", options: ["Fans' phones and the arena Wi-Fi", "The box office and the parking lots", "League facilities and media partners", "Each team's practice court only"], correctIndex: 2, explanation: "A carrier-run network linking every arena to the league's own facilities and its media partners (lesson 1).", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "Which three game-night parties does lesson 1 mark \"to confirm\"?", options: ["Carrier, replay center and partners", "League media group and the carrier", "Referees, coaches and the players", "Truck, venue staff and rights holder"], correctIndex: 3, explanation: "No source says what the truck, the venue's broadcast staff and the rights holder own at any arena.", sourceLessonSlug: "who-sends-what-on-game-night" },
          { prompt: "How many concurrent, low-latency streams per game is the fourth generation designed for?", options: ["More than 118", "Up to 12", "About 40", "Exactly 30"], correctIndex: 0, explanation: "More than 118 (NBA, 2026a; AT&T, 2026).", sourceLessonSlug: "the-worked-example" },
          { prompt: "Which company built the 2014 network, HSAN2, with the league?", options: ["AT&T", "Zayo", "Sony", "Riedel"], correctIndex: 1, explanation: "HSAN2 was built with Zayo (Dachman, 2014); AT&T runs the fourth generation.", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "What are the fourth generation's three timeline stages?", options: ["Launch 2014, rebuild 2023, close 2027", "Install 2027-28, launch 2029, season 2030", "Install 2026-27, launch July 2027, season 2027-28", "Announce 2026, launch 2026, season 2026-27"], correctIndex: 2, explanation: "Build during 2026-27, switch on in July 2027, first full season 2027-28 (Carlson, 2026; NBA, 2026a).", sourceLessonSlug: "generations-and-the-timeline" },
          { prompt: "How many instant replay triggers did Rule 13 list on October 21, 2026?", options: ["15", "14", "12", "16"], correctIndex: 3, explanation: "16: 14 started by on-court officials and 2 by the Replay Center official (NBA, n.d.-b).", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "Does any source say optical tracking data rides the league network?", options: ["No; it is consistent, not shown", "Yes; AT&T's release says so", "Yes; the league's rule says so", "No; it travels by satellite"], correctIndex: 0, explanation: "HSAN carries \"other mission-critical league data,\" which is consistent with it but does not show it.", sourceLessonSlug: "replay-tracking-and-referee-comms" },
          { prompt: "Which posting is the only live one in lesson 5 that names HSAN?", options: ["Broadcast Support Engineer", "Technical Manager, Local Media", "League Technology Representative", "Replay Center Operator"], correctIndex: 1, explanation: "The Technical Manager, Local Media posting (NBA, 2026d).", sourceLessonSlug: "the-jobs-behind-the-network" },
          { prompt: "A device is at 192.168.1.20/24. How many usable addresses does its subnet have?", options: ["256", "255", "254", "128"], correctIndex: 2, explanation: "256 addresses minus the network and broadcast addresses (Fuller & Li, 2006; Braden, 1989).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Why must traffic between two VLANs be routed?", options: ["VLAN tags block all IP traffic", "Switches cannot forward frames", "VLANs need a PTP clock to talk", "Each VLAN is usually its own subnet"], correctIndex: 3, explanation: "\"Since VLANs exist in their own layer 3 subnet, routing will need to occur\" (Cisco Meraki, n.d.).", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "Which transport protocol resends what is lost?", options: ["TCP", "UDP", "RTP", "IGMP"], correctIndex: 0, explanation: "TCP corrects loss \"via retransmission\" (Eddy, 2022, section 2.2); UDP does not.", sourceLessonSlug: "what-the-job-asks-about-ip" },
          { prompt: "What does lesson 7 say about calling a free course a certification?", options: ["Always, to impress an employer", "Only if the provider calls it one", "Never, even for a real one", "Only after a year of work"], correctIndex: 1, explanation: "Do not call a free course a certification unless the provider calls it one.", sourceLessonSlug: "where-to-learn-ip-free" },
          { prompt: "Where did the course find that the GS308E does IGMP snooping?", options: ["Its product page", "Its retail box", "Its datasheet", "A user forum"], correctIndex: 2, explanation: "The datasheet lists \"IGMP snooping (v1, v2, and v3)\"; the product page does not (NETGEAR, 2024, p. 2).", sourceLessonSlug: "a-home-lab-and-its-limits" },
          { prompt: "What does a switch with no IGMP snooping do with a multicast stream?", options: ["Sends it only to the router", "Drops it at the first hop", "Turns it into unicast copies", "Floods it to every other port"], correctIndex: 3, explanation: "It forwards a copy into each remaining interface (Christensen et al., 2006, section 1).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "What does the querier do?", options: ["Asks, on a timer, who still wants each group", "Sends the stream from the camera to the truck", "Sets the PTP clock for every device", "Routes multicast between two subnets"], correctIndex: 0, explanation: "The querier sends General Queries so receivers keep confirming their groups (Fenner, 1997, section 3).", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "Which RFC defines source-specific multicast for IP?", options: ["RFC 4604", "RFC 4607", "RFC 3376", "RFC 1918"], correctIndex: 1, explanation: "RFC 4607 (Holbrook & Cain, 2006); RFC 4604 is cited by it for the IGMPv3 and MLDv2 side.", sourceLessonSlug: "why-multicast-is-on-every-posting" },
          { prompt: "How much did SMPTE's ST 2110 Practical Lab cost a non-member?", options: ["$99", "$599", "$199", "$15"], correctIndex: 2, explanation: "$99 for members, $199 for non-members (SMPTE, n.d.-c).", sourceLessonSlug: "where-to-learn-multicast" },
          { prompt: "Why should a test stream never use a 224.0.0.x address?", options: ["It is a private address block", "It is the SSM address range", "It works only on fiber links", "Switches flood it and ST 2110 bars it"], correctIndex: 3, explanation: "Snooping switches forward that range on all ports, and ST 2110 bars senders from it (Christensen et al., 2006; SMPTE, 2022b, section 6.5).", sourceLessonSlug: "a-multicast-lab" },
          { prompt: "Which ST 2110 part carries an SDI signal's embedded audio on IP?", options: ["ST 2110-30", "ST 2110-40", "ST 2110-20", "ST 2110-10"], correctIndex: 0, explanation: "ST 2110-30; SMPTE says embedded audio \"should not be transmitted\" in -40 (SMPTE, 2023, section 5.2.1).", sourceLessonSlug: "st-2110-separate-streams" },
          { prompt: "In an SDP file, which line holds the multicast group address?", options: ["m=", "c=", "a=rtpmap", "o="], correctIndex: 1, explanation: "The c= line (Begen et al., 2021, section 5.7).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "Which NMOS specification connects a sender to a receiver?", options: ["IS-04", "IS-07", "IS-05", "IS-02"], correctIndex: 2, explanation: "IS-05 connects; IS-04 finds devices (SMPTE, n.d.-c, n.d.-d).", sourceLessonSlug: "finding-and-connecting-streams" },
          { prompt: "About what bitrate is uncompressed 1080p59.94 at 10-bit 4:2:2, active picture?", options: ["About 250 Mbps", "About 1.243 Gbps", "About 10 Gbps", "About 2.486 Gbps"], correctIndex: 3, explanation: "About 2.486 Gbps (MDL Communications, n.d.); 1.243 Gbps is the 1080i59.94 figure.", sourceLessonSlug: "bandwidth-math" },
          { prompt: "What did a broadcaster's lab find about JPEG XS on live sports at 10:1?", options: ["Not visually lossless", "Visually lossless", "Lossless only for audio", "Better than uncompressed"], correctIndex: 0, explanation: "\"JPEG XS encoded live sports content is not visually lossless at 10:1 compression\" (BT, 2022, p. 6).", sourceLessonSlug: "bandwidth-math" },
          { prompt: "What is ST 2110-10's standard UDP size limit?", options: ["8,960 octets", "1,460 octets", "9,000 octets", "1,500 octets"], correctIndex: 1, explanation: "\"The Standard UDP Size Limit shall be 1460 octets\" (SMPTE, 2022b, section 6.3).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "Which ST 2110-21 sender type needs the biggest buffers?", options: ["Narrow", "Narrow Linear", "Wide", "Gapped"], correctIndex: 2, explanation: "Wide is allowed \"significantly greater burstiness\" (Simpson, 2018).", sourceLessonSlug: "packets-and-pacing" },
          { prompt: "What do both paid SMPTE courses cost a Professional member in year one, dues included?", options: ["$798", "$498", "$399", "$678"], correctIndex: 3, explanation: "$399 + $99 + $180 dues = $678 (SMPTE, n.d.-b).", sourceLessonSlug: "a-study-path-for-media-over-ip" },
          { prompt: "Which SDP line names the PTP clock a stream follows?", options: ["a=ts-refclk", "a=group:DUP", "a=source-filter", "a=fmtp"], correctIndex: 0, explanation: "a=ts-refclk names the grandmaster and domain (SMPTE, 2022b, section 8.2).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "Which three readings does SMPTE's Practical Lab list for a PTP status screen?", options: ["Loss, power and polarity", "Lock, offset and jitter", "Group, port and source", "Gain, shutter and iris"], correctIndex: 1, explanation: "Lock, offset and jitter (SMPTE, n.d.-c).", sourceLessonSlug: "one-clock-ptp" },
          { prompt: "Why does the timing lab need Linux?", options: ["PTP is illegal on other systems", "Only Linux has a network card", "linuxptp does not aim to run elsewhere", "The league requires Linux at home"], correctIndex: 2, explanation: "linuxptp is a Linux implementation of IEEE 1588 and does not aim to run on other platforms (Network Time Foundation, n.d.).", sourceLessonSlug: "a-timing-lab" },
          { prompt: "What does an ST 2022-7 sender send?", options: ["A resend of lost packets", "A lower-bitrate backup", "A copy of the audio only", "A second, identical copy"], correctIndex: 3, explanation: "\"A second, identical copy\" over a second path (Clear-Com, n.d.).", sourceLessonSlug: "two-paths" },
          { prompt: "Does any source say the league network uses ST 2022-7?", options: ["No; only that streams are split", "Yes; the carrier's release says so", "Yes; the league's postings say so", "No; it uses satellites instead"], correctIndex: 0, explanation: "The sources say only that streams are split across paths for redundancy (Carlson, 2026).", sourceLessonSlug: "two-paths" },
          { prompt: "Which arena-side posting asks for work at heights, and where is it taught in this series?", options: ["Support posting; this course, lesson 22", "Per-game posting; CREW-01, section 2", "Manager posting; CREW-05, section 6", "Per-game posting; nowhere in the series"], correctIndex: 1, explanation: "The per-game posting asks for work at heights (NBA, 2026c); CREW-01's section 2 teaches working at height.", sourceLessonSlug: "fiber-on-the-map" },
          { prompt: "How many questions is FOA's CFOT exam, and how many must be right?", options: ["70, with 50 right", "40, with 32 right", "100, with 70 right", "100, with 90 right"], correctIndex: 2, explanation: "100 questions; 70 correct to pass (FOA, n.d.-a).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "Which Fiber U course does this course put before opening a fiber kit?", options: ["Understanding OTDRs", "Basic Fiber Optics", "CFOT exam review", "Fiber Optic Safety"], correctIndex: 3, explanation: "Fiber Optic Safety, 1 to 2 hours (FOA, n.d.-b).", sourceLessonSlug: "where-to-learn-fiber" },
          { prompt: "What does tier 2 of the lab cost, before patch cords?", options: ["$105.89", "$104.49", "$69.95", "$210.38"], correctIndex: 0, explanation: "$35.94 for the cleaner plus $69.95 for the fault locator.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "Under this course's fiber precaution, what must you never do?", options: ["Read FOA's safety course", "Look into a fiber end", "Label a lab video", "Ask to watch cleaning"], correctIndex: 1, explanation: "Never look into a fiber end or connector, and never point the fault locator at anyone.", sourceLessonSlug: "a-fiber-kit-and-first-lab" },
          { prompt: "Why can ordinary monitoring miss packet loss from microbursts?", options: ["It reads only the PTP clock", "It ignores all multicast traffic", "It averages over long time intervals", "It runs only before the game"], correctIndex: 2, explanation: "Such tools are \"monitoring very large time intervals\" (Cisco Systems, 2017).", sourceLessonSlug: "feed-check-in" },
          { prompt: "What is the first duty on the league's support posting?", options: ["Design the carrier's backbone network", "Install new fiber conduit at arenas", "Run replay review for the officials", "Check in all inbound and outbound feeds"], correctIndex: 3, explanation: "\"Check in all inbound and outbound feeds\" (NBA, 2026b).", sourceLessonSlug: "feed-check-in" },
          { prompt: "Another receiver gets the stream cleanly. Where does the three-way sort point?", options: ["This receiver", "The source", "The carrier", "The fiber"], correctIndex: 0, explanation: "If another receiver is clean, the source and most of the transport are probably fine.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "Does the 2-minute drill ask you to fix a fault?", options: ["Yes; to fix it", "No; to sort it", "Yes; to reboot", "No; to ignore it"], correctIndex: 1, explanation: "Sort it, not fix it; on a real job the fix may not be yours.", sourceLessonSlug: "source-transport-or-receiver" },
          { prompt: "How does RTP make a lost packet visible?", options: ["A change in its PTP domain", "A new multicast group joined", "A gap in its sequence numbers", "A larger UDP packet size"], correctIndex: 2, explanation: "Sequence numbers let the receiver rebuild the order (Schulzrinne et al., 2003, section 1), so a gap is a missing packet.", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "What does SRT's resend approach cost, compared with a second copy?", options: ["Bandwidth, not time", "Neither one at all", "Fiber, not copper", "Time, not bandwidth"], correctIndex: 3, explanation: "SRT trades delay for reliability (Haivision, n.d.); a second copy costs bandwidth.", sourceLessonSlug: "seeing-loss-rtp-and-srt" },
          { prompt: "What are the six parts of this course's 30-second status update?", options: ["Impact, scope, time, checks, unknowns, ask", "Name, rank, team, seat, camera, score", "Who, what, why, cost, owner, deadline", "Feed, port, group, clock, path, fiber"], correctIndex: 0, explanation: "Impact, scope, time, checks done, unknowns and the ask: a teaching frame.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "What does the change rule say?", options: ["Change anything once the game is over", "No change without the owner's go-ahead", "Reboot first, then tell the owner", "Repatch freely on your own lab only"], correctIndex: 1, explanation: "No reboot, repatch or settings change on network gear without the owner's go-ahead.", sourceLessonSlug: "status-calls-and-reports" },
          { prompt: "What does a clean mock game night prove?", options: ["You can run a league's network", "You can certify a fiber link", "You can find faults on your own gear", "You can replace a carrier NOC"], correctIndex: 2, explanation: "It shows you can find and report faults on your own gear under a clock; a supervisor's sign-off shows the rest.", sourceLessonSlug: "a-mock-game-night" },
        ],
      },
    },
  ],
};
