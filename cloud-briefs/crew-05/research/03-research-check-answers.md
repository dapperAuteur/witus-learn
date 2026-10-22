# Arena Transmission: Answers to the Open Research Checks

**Researched:** October 21, 2026. Every source cited below was fetched that day. Nothing here comes from memory.

**What this file is.** CREW-05 has 13 open research checks (keys starting `crew05-` in `src/lib/research-checks.ts` on the course branch). This file answers each one so a later session without web access can revise the lessons. It sits beside `01-league-network-facts.md` and `02-teaching-content.md` and follows their rules: name no team and no venue; teach a league arena network in general, with the NBA's High-Speed Arena Network (HSAN) as the cited example.

**Status words.**
- **VERIFIED**: the answer is stated in a primary or defining source fetched today (a standard, an RFC, the maker's own page, the organization's own page).
- **REPORTED**: the answer comes from trade press or a secondary source, or it is partly inferred from verified facts with the reasoning shown. Teach it with its source and, where marked, as a reasoned reading.
- **STILL OPEN**: no public source fetched today answers it. The lesson keeps its hedge.

**Tags inside answers.** V = read in a source fetched today. I = inferred, with the reasoning shown. Never teach an I line as a bare fact.

**Rights.** RFCs are published by the RFC Editor under the IETF Trust's terms; link them, quote short passages, do not rehost (Tier B, as the course already treats RFC 4607). Vendor, trade-press and training pages are Tier B, link only. IEEE 802.1Q is Tier C (cite, do not quote at length); see check 5.

**How this file is ordered.** Sections follow the order of the checks in `research-checks.ts` (1 to 13). The two HIGH checks are 5 and 6. A short note on a newly found free source (the SMPTE ST 2110 standards) sits before check 8.

## Summary

| # | Check key | Severity | Status | In one line |
|---|---|---|---|---|
| 1 | crew05-local-vs-national | medium | REPORTED (partial); path difference STILL OPEN | Regional networks' programming rides the league network; the league shows some games locally; a national event multiplies the paths |
| 2 | crew05-venue-parties | low | STILL OPEN | Trade press confirms league ops, engineering and venue staff coordinate; no source divides ownership |
| 3 | crew05-tracking-data-on-network | low | STILL OPEN | The tracking maker's general design streams camera video to cloud software; the league's path is not named |
| 4 | crew05-third-generation | low | STILL OPEN | Only the league's own line: "from point-to-point networks to a full network" |
| 5 | crew05-ip-definitions | HIGH | VERIFIED | IETF RFCs 791, 950, 1122, 1918, 4632, 768, 9293, 3550, plus free training pages; IEEE 802.1Q not read (free only behind sign-in) |
| 6 | crew05-multicast-definitions | HIGH | VERIFIED (definitions); REPORTED (symptom causes) | RFCs 1112, 2236, 3376, 4541, 4607, 7761, plus a Cisco support page |
| 7 | crew05-lab-switch-snooping | low | VERIFIED: yes | Maker's datasheet lists IGMP snooping v1, v2, v3; no querier is documented |
| 8 | crew05-sdi-vs-2110 | medium | VERIFIED | SMPTE's free standards map SDI's embedded audio and ANC data to ST 2110-30 and -40 |
| 9 | crew05-sdp-contents | medium | VERIFIED | ST 2110-10 Annex B prints a full example; RFC 8866 defines the lines |
| 10 | crew05-arena-handoff-format | medium | STILL OPEN (format); REPORTED context | League tested JPEG XS on the network in 2024; a broadcaster found JPEG XS not visually lossless at 10:1 on sports |
| 11 | crew05-h264-hevc | low | REPORTED | Vendor and broadcaster papers: JPEG XS for low delay, HEVC for low bitrate and delivery |
| 12 | crew05-limits-exceeded | low | VERIFIED (mechanics); picture symptom STILL OPEN | No fragmenting in ST 2110; full switch buffers drop packets; UDP does not resend |
| 13 | crew05-unchecked-course-details | low | Dues VERIFIED; Cisco hours REPORTED; next cohort STILL OPEN | Professional dues $180 a year; Networking Basics about 25 hours; no cohort after July 21, 2026 listed |

**Citation labels when merging.** This file's reference list stands alone, so some year letters differ from the course's. This file's SMPTE (2025b) is the course's SMPTE (2025) FAQ. This file's Professor Messer (n.d.-a to -d) are single video pages, not the course's Professor Messer (n.d.) course index. The course's SMPTE (n.d.-a to -c) course pages are not this file's SMPTE (n.d.-a, -b). Re-letter on merge.

---

## 1. crew05-local-vs-national (medium): local and national broadcasts on the map

**Status: REPORTED** (partial). Trade press, quoting the league, shows that local (regional) programming rides the league network and that a national rights holder's feed can be the base of a league-made feed. **STILL OPEN**: a league-level description of how the two signal paths differ (for example, whether a regional network's program leaves the arena over the league network or over its own transmission). No public source fetched today describes it.

**The answer in plain words.**
- The league network carries regional programming, not only national. The NBA's media operations head told CNET that an average game's roughly 118 streams include "live broadcast video, in-arena content, studio programming by the league and regional sports networks," plus "mobile viewing content and virtual signage" (Carlson, 2026). So a regional sports network's content is among what HSAN moves.
- The league itself also distributes games shown locally. For the 2025-26 season, the league's own channel and app carried "60 non-exclusive live games (games not carried by other national rightsholders but shown in local markets)," and the league described the work of aligning its production standards with "venues and local broadcasters operating with different technical specifications" (Dachman, 2025).
- National productions bring their own trucks. The same article reports national partners deploying mobile units from outside truck vendors for their games (Dachman, 2025). (The course can say "national partners bring their own production trucks" without naming them.)
- At a championship series, which is national, the league expanded its HSAN transmission "from approximately 40 transmit by 10 receive paths" to more than 100 transmit and 26 receive paths, with 36 "dedicated to high-frame-rate camera feeds supporting the NBA Replay Center," and built its world feed primarily from the national rights holder's clean feed (Dachman, 2026). That article names cities and venues; the course must give only these counts.

**What is still not known.** Whether a local game's program and a national game's program take different routes out of the building, and who books and monitors each route.

**Lesson fix (lesson 1).** Replace "No source in this course's research covers that" with: the league network carries regional sports networks' programming as well as the league's own (Carlson, 2026); the league also shows games locally that national partners do not carry, and works with "venues and local broadcasters operating with different technical specifications" (Dachman, 2025); a national event can multiply the league's transmission paths, from about 40 transmit and 10 receive to more than 100 and 26 (Dachman, 2026). Keep "how the two paths differ: to confirm, and ask."

---

## 2. crew05-venue-parties (low): what the truck, venue staff and rights holder own

**Status: STILL OPEN** for who owns what. **REPORTED** for who is involved.

**The answer in plain words.** No public, league-level source fetched today divides ownership among the production truck, the venue's broadcast staff and the rights holder. Two trade-press facts confirm all three are involved:
- Game-night work "requires coordination among league operations, engineering teams, venue staff" (Dachman, 2026), and the league's own team ran more than 20 transmission paths from the venue to its partners at that event (Dachman, 2026); the article does not reconcile that figure with its count of more than 100 transmit paths.
- The league names "venues and local broadcasters operating with different technical specifications" as a challenge (Dachman, 2025), which shows that venues and local broadcasters each own their own technical setups (I).

**Lesson fix (lesson 1).** Keep the three parties marked "to confirm." Add one sentence: trade coverage confirms that league operations, engineering teams and venue staff all coordinate on game night (Dachman, 2026), but no public source says where one party's equipment ends and the next begins, which is the question to ask on the job.

---

## 3. crew05-tracking-data-on-network (low): does tracking data ride the league network?

**Status: STILL OPEN** for this league. **REPORTED** for the tracking maker's general design.

**The answer in plain words.** No source fetched today says whether this league's optical tracking leaves the arena over HSAN or over another path. The October 2026 announcement lists "statistics" and "Other mission-critical league data" among what HSAN carries (AT&T, 2026), and the CNET article does not mention tracking (Carlson, 2026). What is new: an October 2025 engineering post by Amazon Web Services staff, co-written with Sony's sports business, describes Hawk-Eye's general design across sports: "On-site infrastructure with Hawk-Eye cameras streams video to the cloud-hosted tracking services," where "The tracking services analyze the video to determine player and ball positions" (Reddy et al., 2025). The post covers basketball among other sports but does not name this league and does not say what network carries the video from the venue to the cloud.

**Lesson fix (lesson 4).** Keep "No source says so." Add: Hawk-Eye's own engineers describe, for their system in general, cameras on site streaming video to tracking software in the cloud (Reddy et al., 2025). So the tracking system sends video out of the building somehow, but no source names the path for this league. Mark the tracking line on the learner's map "path to confirm."

---

## 4. crew05-third-generation (low): HSAN's third generation

**Status: STILL OPEN.**

**The answer in plain words.** No source fetched today describes a third generation, says when it was built, or says who built it. Every October 2026 source fetched calls the new network the fourth generation without describing the third; the carrier's release says "the fourth generation of the High-Speed Arena Network (HSAN)" (AT&T, 2026; Light Reading, 2026; Saleh, 2026). The carrier's relationship with the league "began in 2018," but the releases describe a marketing and "Official Connectivity Partner" relationship and do not say the carrier ran an earlier network generation (AT&T, 2026; Saleh, 2026). Do not infer that it did.

Two new quotes help the history without filling the gap. The league's media operations head said, "When we built out our first version of the high-speed arena network, we would have never envisioned where we are today," and "We've gone from point-to-point networks to a full network" (Carlson, 2026).

**Lesson fix (lesson 3).** Keep "Third: This course found no source." Add the "point-to-point networks to a full network" quote as the league's own one-line history. Add: the carrier's partnership began in 2018, but no source says it built the third generation.

---

## 5. crew05-ip-definitions (HIGH): IP basics for lesson 6

**Status: VERIFIED** for every term asked. Each definition below rests on a defining document (an IETF RFC), with a free training page for plain wording. VLANs rest on a vendor page and a training page, because the defining standard, IEEE 802.1Q, is free only behind an IEEE sign-in (see below).

### The answer in plain words

- **IP address.** A number that says where a device is on a network. IPv4 addresses are 32 bits long, written as four numbers from 0 to 255. Part of the address names the network and the rest names the device on it. RFC 791 puts it as: "A name indicates what we seek. An address indicates where it is. A route indicates how to get there" (Postel, 1981, section 2.3). And: "Addresses are fixed length of four octets (32 bits). An address begins with a network number, followed by local address" (Postel, 1981, section 2.3). RFC 791 then describes the old class A, B and C split; that split is history (see "Mask and prefix").
- **IP itself is not reliable.** "The internet protocol does not provide a reliable communication facility. There are no acknowledgments either end-to-end or hop-by-hop" (Postel, 1981, section 1.4). RFC 1122 adds that IP datagrams "may arrive at the destination host damaged, duplicated, out of order, or not at all" (Braden, 1989, section 1.1.3). This is why the transport layer above it matters (see UDP and TCP).
- **Mask and prefix (the "/24").** The mask says which bits of the address are the network. Modern practice writes it as a prefix length after a slash. RFC 4632: "In CIDR notation, a prefix is shown as a 4-octet quantity, just like a traditional IPv4 address or network number, followed by the "/" (slash) character, followed by a decimal value between 0 and 32 that describes the number of significant bits" (Fuller & Li, 2006, section 3.1). Its worked example: 192.168.99.0/24 means "the most significant 24 bits are ones and the least significant 8 bits are zeros," which is the mask 255.255.255.0 (Fuller & Li, 2006, section 3.1). The same section's table gives block sizes: a /24 holds 256 addresses, a /25 holds 128, a /30 holds 4.
- **Subnet.** A piece of a network, carved out by lengthening the mask. RFC 950 is the original subnetting standard (Mogul & Postel, 1985). The free training wording: VLANs and subnets go together, "Since VLANs exist in their own layer 3 subnet, routing will need to occur for traffic to flow in between VLANs" (Cisco Meraki, n.d.).
- **Usable range.** In a subnet, the first address names the network and the last (all host bits set to one) is the broadcast address, so neither is given to a device. RFC 1122 lists the all-ones form, "{ <Network-number>, <Subnet-number>, -1 }," as "Directed broadcast to the specified subnet," which "MUST NOT be used as a source address" (Braden, 1989, section 3.2.1.3), and RFC 950 says the address of all ones is "interpreted as meaning "all", as in "all hosts"" (Mogul & Postel, 1985, section 2.1). Professor Messer's plain version: you subtract 2 when counting hosts, for the network address and the broadcast address, and "Everything in the middle would be our host addresses" (Professor Messer, n.d.-a). So a /24 has 256 addresses and 254 usable ones (I, arithmetic from the table in Fuller & Li, 2006).
- **Private addresses.** Three blocks are set aside for private networks and are never handed out on the public Internet: 10.0.0.0 to 10.255.255.255 (10/8), 172.16.0.0 to 172.31.255.255 (172.16/12), and 192.168.0.0 to 192.168.255.255 (192.168/16) (Rekhter et al., 1996, section 3). A lab will almost always use one of these.
- **Gateway (default gateway).** The router a device sends to when the destination is not on its own subnet. RFC 1122 gives the rule a host must follow: if the destination's network bits, taken with the mask, match the host's own, "the datagram is to be transmitted directly to the destination host"; "If not, then the destination is accessible only through a gateway" (Braden, 1989, section 3.3.1.1). With no better information, "the host chooses a "default" gateway and sends the datagram to it" (Braden, 1989, section 3.3.1.2). Plain wording: "A client computer requires a default gateway for layer 3 connectivity to remote subnets" (Cisco Meraki, n.d.). **Where the gateway sits** in a subnet (first or last usable address) is a local choice; no source fetched today sets a rule. Teach "ask, or read the device's settings," not "it is always .1."
- **Layer 2 and Layer 3.** These are layer numbers from the Open Systems Interconnection (OSI) model; "Traditional switching operates at layer 2" of it (Cisco Meraki, n.d.). Layer 2, the data link layer, is where switches work: "the network switches that we use on our network determine how to forward traffic based on the destination MAC address" (Professor Messer, n.d.-c). Layer 3, the network layer, is where IP and routers work: "This is the layer that routers use to determine how to forward traffic," looking at "the destination IP address in order to determine what the next hop might be" (Professor Messer, n.d.-c). The Internet's own model names these the link layer and the internet layer (Braden, 1989, section 1.1.3). A Layer 3 switch "is basically a switch that can perform routing functions in addition to switching" (Cisco Meraki, n.d.).
- **VLAN.** A way to split one physical switch into several separate Layer 2 networks. "VLANs can be used to create a separate of broadcast domains on a single switch" [sic] (Professor Messer, n.d.-d). Juniper's definition: "A VLAN (virtual LAN) abstracts the idea of the local area network (LAN) by providing data link connectivity for a subnet," and "Each VLAN can be uniquely identified by VLAN ID, which is transmitted and received as IEEE 802.1Q tag in an Ethernet frame" (Juniper Networks, n.d.). Devices in different VLANs cannot reach each other without routing: "Since VLANs exist in their own layer 3 subnet, routing will need to occur for traffic to flow in between VLANs" (Cisco Meraki, n.d.). That is exactly what the lesson 8 lab shows with ping.
- **VLAN tag numbers.** Professor Messer gives "a total of 4,094 VLANs" on a trunk (Professor Messer, n.d.-d). He also says "These VLAN tags are 12 bits long"; that is loose wording. SMPTE counts the "Optional 802.1Q VLAN tag" as "4 octets," that is 32 bits (Society of Motion Picture and Television Engineers [SMPTE], 2022b, Annex A). The 12 bits are most likely the VLAN ID field inside the tag, since 2 to the 12th power is 4,096, close to Messer's 4,094 (I; confirm against 802.1Q). Do not quote Messer's sentence. Juniper says a router can be partitioned "into up to 4095 different VLANs" depending on model (Juniper Networks, n.d.). The usable ID range varies by platform, so teach "about four thousand; check the switch's own manual."
- **The defining VLAN standard.** IEEE 802.1Q, the IEEE standard for local and metropolitan area networks titled Bridges and Bridged Networks, active, published December 22, 2022. Its scope covers "the operation of MAC Bridges and VLAN Bridges." IEEE's page says "The PDF of this standard is available at no cost compliments of the IEEE GET program" (IEEE, 2022). The free PDF sits behind an IEEE account sign-in and was **not read** for this file. So VLAN definitions above rest on the authoritative vendor and training summaries named, and a lesson should cite 802.1Q only as "the standard that defines VLAN tagging," not quote it.
- **UDP.** A light transport protocol that sends messages with no setup and no delivery promise. RFC 768: UDP lets programs send messages "with a minimum of protocol mechanism. The protocol is transaction oriented, and delivery and duplicate protection are not guaranteed. Applications requiring ordered reliable delivery of streams of data should use the Transmission Control Protocol (TCP)" (Postel, 1980, Introduction). Plain wording: UDP is "connectionless communication because there's no setup or warning," and "no UDP acknowledgment is ever sent back to the originating device" (Professor Messer, n.d.-b).
- **TCP.** A transport protocol that sets up a connection and guarantees order and delivery by resending. RFC 9293: "TCP provides a reliable, in-order, byte-stream service to applications," and "TCP reliability consists of detecting packet losses (via sequence numbers) and errors (via per-segment checksums), as well as correction via retransmission" (Eddy, 2022, section 2.2). "TCP is connection oriented" (Eddy, 2022, section 2.2), set up by "The "three-way handshake"" (Eddy, 2022, section 3.5). And "TCP supports unicast delivery of data" (Eddy, 2022, section 2.2), which is one reason multicast media does not use it (I).
- **RTP (the posting names it).** RTP "provides end-to-end network transport functions suitable for applications transmitting real-time data, such as audio, video or simulation data, over multicast or unicast network services" (Schulzrinne et al., 2003, Abstract). "Applications typically run RTP on top of UDP" (Schulzrinne et al., 2003, section 1). RTP "does not guarantee delivery or prevent out-of-order delivery"; its sequence numbers "allow the receiver to reconstruct the sender's packet sequence" (Schulzrinne et al., 2003, section 1). So in a capture, RTP packets are UDP packets carrying an RTP header with a sequence number and a timestamp (I, from the same section).

### Ready-to-adapt definitions (HIGH check)

1. **IP address.** An IPv4 address is a 32-bit number, written as four numbers from 0 to 255, that says where a device is: it "begins with a network number, followed by local address" (Postel, 1981, section 2.3).
2. **Prefix and mask.** The number after the slash, as in 192.168.99.0/24, is how many leading bits name the network; /24 means the mask 255.255.255.0 and a block of 256 addresses (Fuller & Li, 2006, section 3.1).
3. **Subnet and usable range.** A subnet is one network block; its first address names the network and its last is the broadcast address, so a /24 leaves 254 addresses for devices (Braden, 1989, section 3.2.1.3; Professor Messer, n.d.-a).
4. **Gateway.** A device sends straight to any address inside its own subnet; for anything outside, it sends to its default gateway, a router on its subnet (Braden, 1989, sections 3.3.1.1 and 3.3.1.2).
5. **Layer 2 and Layer 3.** Layer 2 is where switches forward frames by MAC address inside one network; Layer 3 is where routers forward packets by IP address between networks (Professor Messer, n.d.-c). A Layer 3 switch does both (Cisco Meraki, n.d.).
6. **VLAN.** A VLAN splits one physical switch into separate Layer 2 networks, each its own broadcast domain and usually its own subnet, so traffic between VLANs must be routed (Professor Messer, n.d.-d; Cisco Meraki, n.d.). The tag that marks a frame's VLAN is defined in IEEE 802.1Q (IEEE, 2022; Juniper Networks, n.d.).
7. **UDP.** UDP sends each message with no connection setup and no acknowledgment; "delivery and duplicate protection are not guaranteed" (Postel, 1980). Live media uses it, usually with RTP on top (Schulzrinne et al., 2003, section 1).
8. **TCP.** TCP sets up a connection with a three-way handshake and gives "a reliable, in-order, byte-stream service," resending what is lost (Eddy, 2022, sections 2.2 and 3.5).

**Lesson fix (lesson 6, "What the job asks you to know about IP").** Replace the "What this lesson does not do yet" paragraph with the eight definitions above, each with its citation, and add a worked /24 example (network, broadcast, 254 usable, gateway "ask, or read the settings"). Keep the four skills. Lift the QR line's "none of which the course's research covers" clause; keep a QR line asking the reviewer to check the plain wording. Lesson 8's VLAN lab can now say what to expect: two hosts on different VLANs cannot ping each other, because traffic between VLANs needs a router (Cisco Meraki, n.d.). Add the new sources to the lesson's `## Sources` with section numbers as locators.

---

## 6. crew05-multicast-definitions (HIGH): multicast for lessons 9 and 11

**Status: VERIFIED** for the definitions (multicast group, IGMP join and leave, snooping, the querier, PIM, SSM), from the defining RFCs, with a vendor support page for plain wording. **REPORTED** for the symptom causes: they are inferences from verified mechanisms, shown with their reasoning. **STILL OPEN**: SMPTE EMIP module 1.3's own text (the course page lists the module but its content is behind enrollment and was not read).

### The answer in plain words

- **Unicast, broadcast, multicast.** Unicast goes to one receiver. Broadcast goes to every device on the network. Multicast goes to a group: "IP multicasting is the transmission of an IP datagram to a "host group", a set of zero or more hosts identified by a single IP destination address" (Deering, 1989, section 2). Multicast is not more reliable than unicast; it has the "same "best-efforts" reliability as regular unicast IP datagrams" (Deering, 1989, section 2).
- **Multicast group.** An address in the range 224.0.0.0 to 239.255.255.255 (Deering, 1989, section 4). Membership is open and changing: "hosts may join and leave groups at any time," a host "may be a member of more than one group at a time," and "A host need not be a member of a group to send datagrams to it" (Deering, 1989, section 2). In an arena, one camera's video stream is sent to one group address (I, consistent with lesson 12's separate streams).
- **IGMP.** The protocol receivers use to say which groups they want. "The Internet Group Management Protocol (IGMP) is used by IPv4 systems (hosts and routers) to report their IP multicast group memberships to any neighboring multicast routers" (Cain et al., 2002, section 1). Its purpose is "to enable each multicast router to learn, for each of its directly attached networks, which multicast addresses are of interest to the systems attached to those networks" (Cain et al., 2002, section 6).
- **IGMP join.** A message called a Membership Report. "When a host joins a multicast group, it should immediately transmit an unsolicited Version 2 Membership Report for that group" (Fenner, 1997, section 3). In IGMPv3, the host sends a State-Change Report (Cain et al., 2002, section 5.1), to the address 224.0.0.22 (Cain et al., 2002, section 4.2.14).
- **IGMP leave.** In IGMPv2, a host that leaves "SHOULD send a Leave Group message to the all-routers multicast group (224.0.0.2)" (Fenner, 1997, section 3). The router then checks whether anyone else still wants the group: it "sends [Last Member Query Count] Group-Specific Queries"; "If no Reports are received," it assumes no local members are left (Fenner, 1997, section 3). IGMPv2's improvement was "low leave latency," less time "for a multicast router to learn that there are no longer any members of a particular group" (Cain et al., 2002, section 1). In IGMPv3 a leave is a State-Change Report too (Cain et al., 2002, section 5.1).
- **The querier.** The one device on a network that asks, on a timer, "who still wants which group?" "There is normally only one Querier per physical network"; when routers meet, the one with the lower IP address wins (Fenner, 1997, section 3; Cain et al., 2002, section 6.6.2). It sends "a General Query" to "the all-systems multicast group (224.0.0.1)" to "solicit membership information" (Fenner, 1997, section 3). If no report refreshes a group before its timer runs out, "the router assumes that the group has no local members" (Fenner, 1997, section 3). Where there is no router, a switch can play the querier: "Normally the multicast router will take over this function," but "if there is no multicast router on the VLAN this feature is required" (Cisco Systems, 2018).
- **What a plain switch does with multicast.** It floods it. "When processing a packet whose destination MAC address is a multicast address, the switch will forward a copy of the packet into each of the remaining network interfaces," which wastes bandwidth where "no node has any interest in receiving the packet" (Christensen et al., 2006, section 1). Cisco's plain version: "When a switch receives multicast traffic, it will forward that traffic to all logically connect ports" [sic] (Cisco Systems, 2018).
- **IGMP snooping.** The switch listens to IGMP and sends each group only to the ports that asked for it. "Enabling IGMP (Internet Group Management Protocol) snooping lets a switch listen to IGMP messages" (Cisco Systems, 2018). RFC 4541: a snooping switch "provides the benefit of conserving bandwidth on those segments of the network where no node has expressed interest," in contrast to "normal switch behavior where multicast traffic is typically forwarded on all interfaces" (Christensen et al., 2006, section 1). It "should forward IGMP Membership Reports only to those ports where multicast routers are attached" (section 2.1.1), and data "should be forwarded according to group-based port membership tables and must also be forwarded on router ports" (section 2.1.2). RFC 4541 is Informational: it is guidance from the IETF, not a binding standard, and it notes "Many switch datasheets state support for IGMP snooping, but no recommendations for this exist today" (Christensen et al., 2006, section 1). So behavior varies by maker.
- **Two snooping details that cause lab surprises.** Addresses 224.0.0.x "which are not IGMP must be forwarded on all ports," because that range is link-local (Christensen et al., 2006, section 2.1.2, rule 2). So never use a 224.0.0.x address for a test stream; ST 2110 itself bars senders from the "Local Network Control Block" (SMPTE, 2022b, section 6.5), which RFC 5771 defines as 224.0.0.0 to 224.0.0.255; it also bars the "Internetwork Control Block," 224.0.1.0 to 224.0.1.255 (Cotton et al., 2010, section 3). And "unregistered" multicast (a group nobody has joined) "must" go to router ports and "may" by default go to all ports (section 2.1.2, rule 3); whether a switch floods or drops it is a setting that varies by maker.
- **PIM.** The protocol routers use between themselves to carry multicast across subnets. PIM Sparse Mode "is a multicast routing protocol that can use the underlying unicast routing information base," and "builds unidirectional shared trees rooted at a Rendezvous Point (RP) per group, and it optionally creates shortest-path trees per source" (Fenner et al., 2016, Abstract). In plain steps: a receiver says it wants a group "using IGMP"; its local router "sends a PIM Join message towards the RP"; the joins form a tree, and the data flows down it (Fenner et al., 2016, section 3.1). The direction check routers make is RPF, "Reverse Path Forwarding" (Fenner et al., 2016, section 2.1); SMPTE's lab objective "Trace & fix multicast (IIF/OIF, RPF, PIM neighbor)" uses this word; lesson 9 already cites that objective.
- **Source-specific multicast (SSM).** Addresses 232.0.0.0 to 232.255.255.255 are reserved for SSM (Holbrook & Cain, 2006, Abstract). A receiver asks for one group from one named sender, and the pair is called a "channel": a datagram from source S to group G "is delivered to each upper-layer "socket" that has specifically requested the reception of datagrams sent to address G by source S, and only to those sockets" (Holbrook & Cain, 2006, section 1). IGMPv3 added "source filtering" for this (Cain et al., 2002, section 1). The course already cites RFC 4607 correctly.

### Symptom causes and first checks (lesson 9 skill 3; lesson 11)

These are reasoned from the verified mechanisms above (REPORTED, tag I). No source fetched today gives a broadcast-specific troubleshooting list, so the lesson must present them as "likely causes, from how the protocols work," and the reviewer must confirm them.

**"Receiver joined, no picture."**
1. *The join never reached anything that acts on it.* With snooping on and no querier and no multicast router on the VLAN, the switch has no one to report to and may not keep the group alive; Cisco says the querier function "is required" when there is no multicast router (Cisco Systems, 2018), and the switch "will periodically remove entries from the membership table" when reports stop (Cisco Systems, 2018). A common shape of this fault is a picture that works and then stops after a few minutes (I). **First check:** is there a querier on this VLAN? Look at the switch's IGMP snooping status page, or capture and look for periodic General Queries to 224.0.0.1.
2. *The receiver asked for the wrong thing.* Wrong group address, or, with SSM, the right group from the wrong source: SSM delivers only the exact (S,G) asked for (Holbrook & Cain, 2006, section 1). **First check:** capture the receiver's join (Wireshark display filter `igmp`) and compare its group, and its source list for IGMPv3, with the stream's description (its SDP file; see check 9).
3. *Version mismatch on a snooping switch.* An IGMPv2-only snooping switch may not understand IGMPv3 reports, and the groups are then "either be flooded ... or pruned" (Christensen et al., 2006, section 2.2). **First check:** the IGMP version in the captured join against what the switch supports.
4. *The stream is on another subnet and nothing routes it.* Across subnets, multicast needs a multicast router (PIM) (Fenner et al., 2016, section 3.1); and a sender whose packets have a time-to-live of 1 never leaves its own network, since routers forward only when "the datagram has an IP time-to-live greater than 1" (Deering, 1989, section 2). **First check:** are sender and receiver on the same VLAN and subnet? If not, who routes multicast between them?

**"Every port is flooded."**
1. *Snooping is off, or the switch does not do it.* Without snooping, the switch forwards multicast to all ports (Christensen et al., 2006, section 1; Cisco Systems, 2018). **First check:** the switch's snooping setting for that VLAN, and its datasheet (check 7).
2. *The traffic is "unregistered" or link-local.* Groups nobody has joined may be flooded by default (Christensen et al., 2006, section 2.1.2, rule 3), and 224.0.0.x is always flooded (rule 2). **First check:** the stream's group address, and the switch's setting for unknown or unregistered multicast.
3. *No querier, on some switches.* Some switches fall back to flooding when they hear no querier (I; reported only on a user forum, so not citable; the reviewer should confirm per maker). **First check:** as in the first "no picture" cause.

### Ready-to-adapt definitions (HIGH check)

1. **Multicast.** Sending one stream to a group address so that every receiver that asked for it gets a copy, instead of one copy per receiver; a group is "a set of zero or more hosts identified by a single IP destination address" (Deering, 1989, section 2).
2. **Multicast group.** An address from 224.0.0.0 to 239.255.255.255; any host may join or leave at any time, and a sender does not need to join to send (Deering, 1989, sections 2 and 4).
3. **IGMP join.** The Membership Report a receiver sends to say "I want this group"; a host sends one at once when it joins (Fenner, 1997, section 3; Cain et al., 2002, section 5.1).
4. **IGMP leave.** The message a receiver sends when it no longer wants a group, after which the querier asks whether anyone else still does before it stops the stream (Fenner, 1997, section 3).
5. **Querier.** The one device per network, normally a multicast router, that sends regular General Queries so receivers keep confirming their groups; if there is no router, a switch must do it (Fenner, 1997, section 3; Cisco Systems, 2018).
6. **IGMP snooping.** A switch feature that listens to IGMP and sends each group only to the ports that asked for it, instead of flooding every port (Christensen et al., 2006, section 1; Cisco Systems, 2018).
7. **PIM.** The protocol routers use to pass multicast between subnets: joins travel from the receiver's router toward the source or a meeting point called the Rendezvous Point, and the stream flows back down that path (Fenner et al., 2016, Abstract and section 3.1).
8. **Source-specific multicast.** Multicast where a receiver asks for one group from one named sender, the (S,G) "channel," using addresses 232.0.0.0 to 232.255.255.255 (Holbrook & Cain, 2006).

**Lesson fix.** Lesson 9: replace "What this lesson does not do yet" with definitions 1 to 8 and their citations; keep the RFC 4607 paragraph. Lesson 11: add "What you should see" (V by mechanism, but a home lab result still needs the reviewer): with snooping on and a querier present, a port that did not join gets no stream; with snooping off, every port in the VLAN gets it (Christensen et al., 2006, section 1; Cisco Systems, 2018). Add the "no querier" step: if no router is in the lab, turn on the switch's querier function, or expect the stream to drop out (Cisco Systems, 2018). Add the symptom table above, labeled "likely causes, from how the protocols work; confirm on the job." Add: never use a 224.0.0.x address for a test stream. Both lessons keep a QR line for the reviewer to confirm the symptom table.

---

## 7. crew05-lab-switch-snooping (low): does the GS308E do IGMP snooping?

**Status: VERIFIED** (yes, it does snooping). **STILL OPEN**: a querier function on this switch (the maker's documents do not list one), and a dated price for a querier-capable alternative.

**The answer in plain words.** Yes. NETGEAR's own datasheet for the GS305E and GS308E, under "L2 Services - Multicast Filtering," lists "IGMP snooping (v1, v2, and v3)": Yes, "Block unknown multicast": Yes, and "Supported Multicast groups": 128, for both models (NETGEAR, 2024, p. 2). The same page lists "VLAN (# Supported)": 64 and "IEEE 802.1Q VLAN Tagging": Yes (NETGEAR, 2024, p. 2). The datasheet's footer code is D-GS305E/GS308E-24May24. The product page still does not mention IGMP, snooping or multicast anywhere in its HTML (checked October 21, 2026), which is why the course missed it; the datasheet, linked from that product page, does.

The user manual (model GS308Ev4, document 202-12961-01, July 2026) adds three facts for the lab (NETGEAR, 2026, pp. 46 to 48):
- "IGMP snooping is enabled by default."
- Snooping works per VLAN: "the default VLAN for IGMP snooping is VLAN 1," and you can pick another VLAN ID.
- "By default, multicast traffic from unknown addresses is allowed." Turning on Block Unknown Multicast means "the switch forwards multicast traffic only to ports in the multicast group that the switch learned through IGMP snooping."

**The gap that matters for lesson 11.** Neither the datasheet nor the manual mentions an IGMP querier setting (the manual's multicast pages describe snooping, unknown-multicast blocking and IGMPv3 header checks only; searched October 21, 2026). In a home lab there is usually no multicast router, and Cisco's support note says a querier is "required" when "there is no multicast router on the VLAN" (Cisco Systems, 2018). So with the GS308E alone, a joined stream may start and later drop out when the switch ages out its group table (I, from Cisco Systems, 2018; not tested on this switch). This is a reviewer question, and it is a good teaching moment rather than a reason to change switches.

**Price, read October 21, 2026, on netgear.com:** $26.99 sale, $44.99 list, unchanged from the course's figures (NETGEAR, n.d.). No querier-capable alternative was confirmed on a maker's own page today, so none is priced.

**Lesson fix.** Lessons 8 and 11: replace "It does not list IGMP snooping" and "Do not buy it for the multicast lab until you have checked its datasheet" with: the datasheet lists IGMP snooping v1, v2 and v3, blocking of unknown multicast, and 128 groups (NETGEAR, 2024, p. 2); snooping is on by default, on VLAN 1 by default, and unknown multicast is allowed by default (NETGEAR, 2026, pp. 46 to 48). Add a lab step: run the test once with Block Unknown Multicast off and once on, and record the difference. Add a hedge: the switch's documents list no querier, so expect a stream to drop out after some minutes with no multicast router in the lab, and record whether it does. Swap the NETGEAR source's locator in lesson 11 to the datasheet, page 2.

---

## A note on a new free source: the SMPTE ST 2110 standards themselves

SMPTE publishes the current ST 2110 parts as free PDFs at pub.smpte.org (fetched October 21, 2026): ST 2110-10:2022, -20:2022, -21:2022, -22:2022, -30:2025 and -40:2023. Each is marked "© SMPTE ... All Rights Reserved," so treat them as Tier B: link, cite with section numbers, quote briefly, never rehost. They are the defining documents for checks 8, 9 and 12 below, and they let the course check its secondary sources against the standard. Two such checks, both confirmed:
- ST 2110-10 section 6.3: "The Standard UDP Size Limit shall be 1460 octets," and section 6.4: "The Extended UDP Size Limit shall be 8960 octets" (SMPTE, 2022b). This matches Simpson (2017) as the course already teaches it.
- ST 2110-30 is now the 2025 revision (approved October 1, 2025), titled with PCM digital audio, "by reference to AES67" (SMPTE, 2025a, section 1). The course's FAQ-based table is still right.

One more fact from the standard that lesson 11 can use: ST 2110 senders "shall not transmit media signals on IPv4 multicast addresses within the "Local Network Control Block" nor the "Internetwork Control Block"" (SMPTE, 2022b, section 6.5), and senders and receivers "shall support IPv4 multicast ... including IGMP signaling as specified in IETF RFC 3376" (section 6.5). So IGMPv3 is the version ST 2110 names.

---

## 8. crew05-sdi-vs-2110 (medium): how SDI carries what ST 2110 splits

**Status: VERIFIED** for the mapping (SMPTE's own documents). **REPORTED** for one plain-language step: that HANC and VANC sit in the blanking intervals is named by the SMPTE documents' terms and by ST 2110-21's reference to "the vertical blanking time of SDI," but no fetched SMPTE text defines the spaces in one sentence.

**The answer in plain words.** On an SDI cable, one signal carries everything for one camera: the picture, and in the gaps around the picture (the blanking), the sound and the data. On an ST 2110 network, the same things travel as separate streams that can be routed one by one.

| What | How SDI carries it | ST 2110 part that carries it on IP | Sources |
|---|---|---|---|
| Picture | The video samples, inside a signal that also has blanking time | ST 2110-20 carries "uncompressed active video" only: the picture, without SDI's blanking | SMPTE (2022d, section 1); SMPTE (2022c, section 6.3.1) |
| Sound | Embedded audio: 24-bit AES audio is "multiplexed (embedded) into the horizontal ancillary data space"; up to 16 channels on HD-SDI (ST 299-1), 32 on 3G-SDI level A (ST 299-2) | ST 2110-30: PCM audio "by reference to AES67" | SMPTE (2010, scope 1.3 and 1.4); SMPTE (2025a, section 1) |
| Data (captions, AFD and more) | Ancillary (ANC) data packets "transported over the Serial Digital Interface (SDI) in either the HANC data space or the VANC data space" | ST 2110-40 maps the same ST 291-1 ANC packets into RTP | SMPTE (2023, section 5.1) |
| Timing | Part of the one SDI signal, not a separate stream (I) | ST 2110-10: PTP and RTP timestamps; a gateway timestamps SDI video at "the Alignment Point of the SDI signal" | SMPTE (2022b, sections 7.2 and 7.6.4) |

Four details worth teaching:
- **Why split at all.** SMPTE's FAQ: "ST 2110 standards make it possible to separately route and break away ancillary data, as well as the audio and video," and "All elements can be routed separately and brought together again at the endpoint" (SMPTE, 2025b).
- **Audio does not travel in ST 2110-40.** Embedded audio packets are valid ANC packets, but "they should not be transmitted using this method"; audio goes in ST 2110-30 (SMPTE, 2023, section 5.2.1).
- **Channel counts differ.** "SDI allows the carriage of at least 16 embedded audio channels"; an ST 2110-30 sender at its basic level sends them as several AES67 streams, grouped, for example, as "One SDI audio group" of 4 channels (SMPTE, 2025a, section 6.2.2 and its note).
- **Blanking is gone, but its timing echoes.** ST 2110-21's "gapped" sender schedule "loosely approximates the delivery of samples in the SDI signal, including a gap in the transmission corresponding to the vertical blanking time of SDI" (SMPTE, 2022c, section 6.3.1). That is the Narrow sender's pause the course already teaches.

**Lesson fix (lesson 12).** Replace "How SDI carries picture, sound and data together ... is not in this course's research" with the four-row table above and the FAQ's "routed separately and brought together again" sentence. Add a reveal: "Which ST 2110 part carries the embedded audio from an SDI signal?" (ST 2110-30, not -40). Cite the SMPTE PDFs with section numbers. Leave "HANC/VANC sit in blanking" as plain wording only if the reviewer agrees, or cite it to the reviewer.

---

## 9. crew05-sdp-contents (medium): what an SDP file contains

**Status: VERIFIED.** The SDP standard (RFC 8866, which obsoletes RFC 4566) and ST 2110-10, which requires an SDP for every stream and prints a full example.

**The answer in plain words.** An SDP file is a short text file that describes one stream: where it is (multicast group and port), who sends it (source address), what it is (video format, size, frame rate, bit depth), and which clock it follows. A receiver, or the controller that drives it, reads the SDP and joins the right group with the right settings. ST 2110-10: senders "shall construct one SDP session description ... for each RTP stream (or redundant pair of streams)," made available "through a management API of the device," and receivers "shall provide a capability to ingest and act upon an SDP object" (SMPTE, 2022b, section 8.1). In NMOS, a sender exposes it at its `/transportfile` endpoint: "This provides the means to expose a Session Description Protocol (SDP) file in the case of RTP for example" (Advanced Media Workflow Association [AMWA], n.d.).

**The format.** "An SDP description is entirely textual," made of lines of the form `<type>=<value>`, where the type is one letter; it has a session section starting with `v=`, then media sections each starting with `m=` (Begen et al., 2021, section 5). ST 2110-20 says senders and receivers "shall adhere to IETF RFC 4566" (SMPTE, 2022d, section 7.1); RFC 8866 replaced RFC 4566 (Handley et al., 2006) in January 2021 and keeps the same line types (Begen et al., 2021, Abstract and section 5). Cite both: 4566 because the standard names it, 8866 as the current text.

**The example, line by line.** SMPTE's own example, from ST 2110-10 Annex B (informative), first media section (SMPTE, 2022b, Annex B). Quote it in the lesson as SMPTE's, with the citation:

```
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
```

(The standard's example then repeats the media section for the `secondary` copy on group 239.101.9.10, port 50020, source 192.168.101.2. The `a=fmtp` line wraps across lines in the PDF; in a real file it is one line.)

| Line | What it says | Source |
|---|---|---|
| `v=0` | SDP version; always 0 | Begen et al. (2021, section 5.1) |
| `o=` | Who made it and the session's ID and version: "session ID of 123456 and a session version of 11" | SMPTE (2022b, Annex B) |
| `s=`, `i=` | A name and a description, for people | SMPTE (2022b, Annex B) |
| `t=0 0` | "this session is permanent (has no begin or end time)" | SMPTE (2022b, Annex B) |
| `a=group:DUP` | Two identical copies are sent, tagged primary and secondary, for ST 2022-7 | SMPTE (2022b, sections 8.5 and Annex B) |
| `m=video 50000 RTP/AVP 112` | Media type video, **UDP port 50000**, RTP, payload type 112 (dynamic types run 96 to 127) | Begen et al. (2021, section 5.14); SMPTE (2022b, section 6.2) |
| `c=IN IP4 239.100.9.10/32` | The **multicast group address**; for IPv4 multicast the number after the slash is a time-to-live, which RFC 8866 requires but calls deprecated for scoping | Begen et al. (2021, section 5.7) |
| `a=source-filter: incl ...` | The **sender's address** (192.168.100.2) for that group, so a receiver can do source-specific multicast | SMPTE (2022b, section 8.4) |
| `a=rtpmap:112 raw/90000` | **Format**: "raw" means uncompressed ST 2110-20 video; 90000 is the 90 kHz RTP clock | SMPTE (2022d, section 7.1) |
| `a=fmtp:...` | The picture: sampling (4:2:2), width and height (1280x720), exactframerate (60000/1001, that is 59.94), depth (10-bit), colorimetry (BT.709), packing mode, standard number; plus timing mode and delay | SMPTE (2022d, section 7.2); SMPTE (2022b, section 8.7) |
| `a=ts-refclk:ptp=...` | The PTP clock this stream follows: grandmaster ID 39-A7-94-FF-FE-07-CB-D0, domain 37 | SMPTE (2022b, section 8.2) |
| `a=mediaclk:direct=0` | The media clock comes straight from that reference clock, offset zero | SMPTE (2022b, section 8.3) |
| `a=mid:primary` | Tags this section as the primary copy | SMPTE (2022b, Annex B) |

A teaching note: ST 2110-21 requires video senders to add `TP=` (sender type: 2110TPN, 2110TPNL or 2110TPW) to the `a=fmtp` line (SMPTE, 2022c, section 8.1). SMPTE's -10 example leaves it out. Lesson 15's sender types and lesson 13's SDP meet here: the `TP=` value in an SDP tells a receiver which sender type it faces.

**How a receiver uses it (plain words).** It joins the `c=` group, from the `source-filter` source if it does SSM, listens on the `m=` port, decodes using `rtpmap` and `fmtp`, and checks that `ts-refclk` names the same PTP clock it follows (I, assembled from SMPTE, 2022b, sections 8.1 to 8.4, and SMPTE, 2022c, section 7.2.1, which says receivers "can compare the value of this parameter with their own reference clock source").

**Lesson fix (lesson 13).** Replace "What an SDP file contains ... is not in this course's research" with the example and the table. The skill "point out its address, port and format lines" now has an answer key: address = `c=` (and source = `source-filter`), port = the number after `m=video`, format = `rtpmap` plus `fmtp`. Add a reveal: "In the SMPTE example, which multicast group and port does the primary stream use?" (239.100.9.10, port 50000). Link SDP to lesson 11's symptom table: a receiver joining the wrong group or source is checked against the SDP. Keep the QR line only for the reviewer's look at the plain wording.

---

## 10. crew05-arena-handoff-format (medium): what an arena hands to the network (the 250 Mbps puzzle)

**Status: STILL OPEN** for the format. No primary statement from the league, the carrier or a vendor names the codec or format in use. **REPORTED**: three new facts that change how lesson 14 should frame its guess.

**What was found.**
1. **The quote, in full.** "The majority of the video content comes back as uncompressed video at about 250 megabits per second per stream," followed by "so it's quite a bit of throughput bandwidth on the network" (Carlson, 2026). The same article: an average game "uses about 118 streams," and "Those streams are also split out for redundancy and resiliency" (Carlson, 2026).
2. **The league was testing JPEG XS on this network in 2024.** Sports Video Group reported in July 2024 that "The NBA is also working with MediaKind and a handful of other vendors to test JPEG XS encoding on the HSAN" (Dachman, 2024). That is a test, not a statement of what runs today.
3. **10 to 1 may be too much for JPEG XS on sports.** A broadcaster's own lab test of JPEG XS and JPEG 2000 on live sports content found: "At compression ratios less than 6:1, JPEG XS is very nearly visually lossless"; "JPEG XS encoded live sports content is not visually lossless at 10:1 compression"; and "JPEG 2000 is in the order of 25% more efficient than JPEG XS" (BT, 2022, p. 6). The JPEG committee says JPEG XS's "Typical compression ratios are up to 10:1" (JPEG, n.d.). BT also reports that on a 1 Gb connection "you'll see a difference of four (JPEG XS) or five to six (JPEG 2000) 1080i/25 flows per connection" (BT, 2022, p. 6); four flows on 1 Gb is about 250 Mbps each (I, arithmetic).

**What this means (I, reasoning shown).**
- "Uncompressed" at 250 Mbps cannot be literal for HD: uncompressed 1080p59.94 at 10-bit 4:2:2 is about 2.486 Gbps of active picture (the course's MDL figure). So the stream is compressed, or the number was simplified, as lesson 14 already says.
- The course's guess, "JPEG XS at about 10 to 1," fits the arithmetic only if the picture is 1080p59.94. The format is also unknown. If the games travel as 1080i59.94, which sends 29.97 full frames a second instead of 59.94, the active picture is about 1.243 Gbps (1920 x 1080 pixels x 20 bits x 29.97 frames per second), and 250 Mbps would be about 5 to 1, the range where BT found JPEG XS "very nearly visually lossless." Neither the frame format nor the codec is sourced, so both readings stay guesses.
- So the honest lesson is: a compressed contribution codec is almost certain; JPEG XS was being tested on this network in 2024; the ratio depends on a picture format no source gives.

**Lesson fix (lesson 14).** Keep the QR line and the "reasoned guess" label. Change "JPEG XS at 10 to 1" to "a compressed codec, possibly JPEG XS, at a ratio that depends on the picture format." Add the 2024 JPEG XS test (Dachman, 2024) as REPORTED context, BT's finding that 10 to 1 is not visually lossless on live sports (BT, 2022), and a worksheet row for 1080i59.94 (about 1.243 Gbps; 250 Mbps is about 5 to 1). Keep the on-the-job question: "What does the truck hand to the league network?"

---

## 11. crew05-h264-hevc (low): where H.264 and HEVC fit

**Status: REPORTED.** The comparison comes from vendor and broadcaster white papers, and the codec makers have a stake. No independent, side-by-side test of all four codecs for live sports contribution was found. Teach it as "what the industry says," with the sources named.

**The answer in plain words.** Live sports uses two kinds of codec for different jobs.
- **Light, frame-by-frame codecs (JPEG XS, JPEG 2000):** high bitrates and very low delay; JPEG XS is "optimized for visual lossless compression" (JPEG, n.d.); used inside production and for contribution where the link is big. JPEG XS has "an end-to-end delay equal to a fraction of a frame" and "Typical compression ratios are up to 10:1" (JPEG, n.d.). A JPEG XS vendor: JPEG XS "is not intended to focus on delivering particularly high compression ratios"; with "latency optimised HEVC or even JPEG 2K, latency will be in the order of 100ms or more," while JPEG XS "is likely to be sub 10ms" (Appear, 2022).
- **Heavy, group-of-pictures codecs (H.264/AVC, H.265/HEVC):** much lower bitrates for the same picture, but more delay and more processing; "AVC, HEVC or even JPEG 2K will prove superior" on compression ratio (Appear, 2022). Another JPEG XS vendor: H.264 and HEVC "require a lot of memory due to their inter-frame / GOP-based scheme," and using them "in a live production workflow with multiple encoding & decoding steps would lead to a compiled latency of many seconds"; "we need H.265 for the last mile to distribute it to the consumers" (Van Roy, 2020). So HEVC is the usual choice where bandwidth is scarce and for delivery to viewers.
- **How they travel.** ST 2110-22 carries compressed video only if the codec makes "a constant number of bytes per frame" and "a constant number of RTP packets per frame" (SMPTE, 2022a, section 4). That suits frame-by-frame codecs; JPEG XS has a VSF profile for ST 2110-22 (VSF TR-08) and one for MPEG-2 transport streams (VSF TR-07) (BT, 2022, p. 4). H.264, HEVC and JPEG 2000 are commonly "encapsulated in MPEG TS" (Appear, 2022), which is what SRT and similar contribution protocols carry (I; the course's SRT lesson can check this against the SRT project's own documentation).

**Lesson fix (lesson 14).** Replace "H.264 and HEVC ... are not covered in this course's research" with a three-row table (JPEG XS, JPEG 2000, H.264/HEVC: relative bitrate, delay, typical job), labeled "from vendor and broadcaster white papers," citing JPEG (n.d.), BT (2022), Appear (2022) and Van Roy (2020). Note that the league's postings name JPEG XS (the Technical Manager posting already cited in lesson 6) and do not name H.264 or HEVC, and that the NBA support posting's protocols (SRT, RTMP, RTSP) are the ones that commonly carry H.264 and HEVC (I).

---

## 12. crew05-limits-exceeded (low): packets too big, bursts too big

**Status: VERIFIED** for what the standards require and what a switch does when its buffer overflows (vendor documents). **STILL OPEN** for what the picture looks like when packets are lost: no fetched source describes it, so the lesson should not.

**Packet too big.**
- ST 2110 senders must keep each UDP packet within 1,460 octets unless they declare the extended limit: "Senders shall not generate IP Datagrams containing UDP packet sizes larger than this limit unless operating conformant to the optional Extended UDP Size Limit" (SMPTE, 2022b, section 6.3). Over the standard limit, a sender "shall include a Format Specific Parameter MAXUDP" in its SDP, and without MAXUDP "Receivers shall assume the Standard UDP Size Limit" (SMPTE, 2022b, section 8.6).
- **No fragmenting.** "Senders shall ensure that there are no fragmented IP packets," and "Receivers need not reassemble fragmented IP datagrams" (SMPTE, 2022b, section 6.3). In plain IP, a datagram marked "don't fragment" that "cannot be delivered to its destination without fragmenting it ... is to be discarded instead" (Postel, 1981, section 2.3).
- **Why 1,460.** Ethernet's payload is "officially limited to a maximum of 1500 octets"; minus 40 for the larger (IPv6) header gives 1,460. The 8,960 extended limit is based on a 9,000-octet jumbo frame, which is "not strictly allowed within the IEEE 802.3 family of standards" but common (SMPTE, 2022b, Annex A).
- **So, in plain words (I, from the above):** if a sender uses large packets on a path where any link or switch port does not accept jumbo frames, those packets cannot cross it; they are not cut up and put back together, and the receiver may not take them even if they arrive. The stream is lost at that hop, not slowed down. The first check is the SDP's MAXUDP value against the MTU set on every port along the path.

**Burst too big for a buffer.**
- ST 2110-21 does not say what a switch does; it limits senders so switches can cope. It sets a network compatibility model that "regulates the burst characteristics of senders in order to promote compatibility with a wide variety of switches with varied buffer sizes" (SMPTE, 2022c, section 6.1), and a virtual receiver buffer that a compliant sender must never let "overflow" or "underflow" (section 6.6.2). It also says "Design of receivers is outside the scope of this standard," and that real receivers "ought to accommodate a reasonable amount of accumulated packet arrival jitter and delay" (sections 6.1 and 7.2.1).
- Its annex shows why: "Demand for buffer occurs when the rate of packets arriving for egress at the port exceeds the maximum egress rate of the port," and its sender limits assume "highly loaded networks" at 90 percent; "The marketplace also contains switches with larger buffer capacity ... should these assumptions be inadequate" (SMPTE, 2022c, Annex A).
- **What happens when the buffer is full:** packets are dropped. Cisco: microburst congestion "can lead to buffer exhaustion, which results in tail drops and lost packets," and usual monitoring misses it because "these measurement tools are unable to detect microbursts because they are monitoring very large time intervals" (Cisco Systems, 2017). Simpson: heavy buffer demand "can cause problems, such as lost or deleted packets when buffers are filled up," worse "when multiple senders are all trying to transmit bursts of data at the same time" (Simpson, 2018).
- **What the receiver does with a loss:** ST 2110 runs on UDP, which "does not guarantee reliable data transport," so "Receivers should be capable of receiving streams with occasional dropped, late or out-of-order packets" (SMPTE, 2022b, section 6.2). Nothing is resent. The standard's remedy for loss on one path is a duplicate stream on a second path (ST 2022-7, signaled with `a=group:DUP`; SMPTE, 2022b, section 8.5).
- **STILL OPEN:** what a viewer sees when packets are lost (a frozen frame, a glitch, or a black frame) depends on the receiver's design, which the standard leaves out of scope (SMPTE, 2022c, section 6.1). No source fetched today describes it. Do not teach a picture symptom.

**Lesson fix (lesson 15).** Replace "How a network behaves when a packet is too big or a buffer is too small is not in this course's research" with two short paragraphs: (1) too big: no fragmenting, so oversized packets do not get through a non-jumbo hop, and MAXUDP in the SDP is what to check; (2) too bursty: a full switch buffer drops packets, average-rate monitoring hides it, and UDP does not resend, which is why ST 2110-21 limits bursts and why ST 2022-7 sends a second copy. Add a reveal: "Why does a stream with 8,960-byte packets fail on a path with one standard 1,500-byte port?" Update the lesson's jumbo-frame correction to cite the standard as well as Simpson (2017).

---

## 13. crew05-unchecked-course-details (low): Cisco hours, SMPTE dues, next ST 2110 class

**Status:** dues **VERIFIED**; Cisco hours **REPORTED**; next cohort **STILL OPEN**. All read October 21, 2026.

- **Cisco Networking Academy, Networking Basics: hours.** Cisco's own course page loads its details with JavaScript; the fetched page gave only its title, "Free Computer Networking Course by Cisco: Start Learning Now," and the description "Free online course to learn about Networking Basics" (Cisco Networking Academy, n.d.). No hours appeared. A state library's guide to the same Cisco courses, updated October 13, 2026, lists "Networking Basics (25 hours)" (Washington State Library, 2026). **Lesson fix (lesson 7):** "about 25 hours, as listed by a library partner of Cisco's academy; check the course page."
- **SMPTE membership dues.** SMPTE's individual membership page lists: "Executive - $295 / Year," "Professional - $180 / Year," "Retired - $89 / Year," "Student - $15 / Year," "Early Career - $49 / Year." Only the Professional tier is described as including "exclusive discounts on conferences and virtual courses" (SMPTE, n.d.-a). **Lesson fix (lesson 16):** the joining arithmetic can now finish: as a Professional member, both paid courses cost $399 + $99 = $498 (the $99 lab price is the course's October 21 figure and was not re-read for this file), plus $180 dues = $678, against $798 as a non-member, a saving of $120 in the first year (I, arithmetic; whether other tiers get member course prices is not stated, so do not assume it).
- **Understanding SMPTE ST 2110: next cohort.** The course page still lists only "Instructor-Led Course July 21, 2026," "(12h over 3 weeks remote live sessions)," "Member Price - $399.00," "Non-Member Price - $599.00," and an outline item "Deep Dive into NMOS IS-04 & IS-05" (SMPTE, n.d.-b). No later cohort is listed. The page's upcoming list shows a different program, the "ST 2110 Intensive Boot Camp for IP Networking Professionals," dated "01/11/2027 - 04/22/2027" (SMPTE, n.d.-b). **Lesson fix (lesson 16):** keep "check the page for the next date"; the prices and the NMOS outline item are re-confirmed.

---

## References

Every source below was fetched on October 21, 2026.

Advanced Media Workflow Association. (n.d.). *AMWA IS-05 NMOS device connection management specification: Overview*. Retrieved October 21, 2026, from https://specs.amwa.tv/is-05/v1.1.2/Overview/

Appear. (2022, July 28). *Paving the way for innovation and differentiation in JPEG XS* [Blog post]. https://www.appear.net/blog/2022/07/28/jpeg-xs-innovation-and-differentiation/

AT&T. (2026, October 19). *AT&T, NBA and WNBA launch next-generation network built for the future of basketball* [Press release]. PR Newswire. https://www.prnewswire.com/news-releases/att-nba-and-wnba-launch-next-generation-network-built-for-the-future-of-basketball-302912017.html

Begen, A., Kyzivat, P., Perkins, C., & Handley, M. (2021). *SDP: Session description protocol* (RFC 8866). RFC Editor. https://www.rfc-editor.org/rfc/rfc8866.html

Braden, R. (Ed.). (1989). *Requirements for Internet hosts: Communication layers* (RFC 1122). RFC Editor. https://www.rfc-editor.org/rfc/rfc1122.html

BT. (2022). *Building a clearer picture of JPEG XS performance* [White paper]. British Telecommunications. https://www.mediaandbroadcast.bt.com/assets/documents/mb-jpeg-xs-whitepaper.pdf

Cain, B., Deering, S., Kouvelas, I., Fenner, B., & Thyagarajan, A. (2002). *Internet group management protocol, version 3* (RFC 3376). RFC Editor. https://www.rfc-editor.org/rfc/rfc3376.html

Carlson, J. (2026, October 19). *NBA arenas get a massive AT&T network upgrade to boost fan experiences*. Yahoo Sports (originally published by CNET). https://sports.yahoo.com/articles/nba-arenas-massive-t-network-120000155.html

Christensen, M., Kimball, K., & Solensky, F. (2006). *Considerations for Internet group management protocol (IGMP) and multicast listener discovery (MLD) snooping switches* (RFC 4541). RFC Editor. https://www.rfc-editor.org/rfc/rfc4541.html

Cisco Meraki. (n.d.). *Comparing layer 3 and layer 2 switches*. Cisco Meraki Documentation. Retrieved October 21, 2026, from https://documentation.meraki.com/MS/Layer_3_Switching/Comparing_Layer_3_and_Layer_2_Switches

Cisco Networking Academy. (n.d.). *Networking basics* [Online course]. Retrieved October 21, 2026, from https://www.netacad.com/courses/networking-basics?courseLang=en-US

Cisco Systems. (2017, January 19). *Monitor microbursts on Cisco Nexus 5600 platform and Cisco Nexus 6000 series switches* [White paper]. https://www.cisco.com/c/en/us/products/collateral/switches/nexus-5000-series-switches/white-paper-c11-733020.html

Cisco Systems. (2018, March 28). *IGMP snooping on the SG350 and SG550* (Document ID SMB5292). https://www.cisco.com/c/en/us/support/docs/smb/switches/cisco-350-series-managed-switches/smb5292-igmp-snooping-on-the-sg350-and-sg550.html

Cotton, M., Vegoda, L., & Meyer, D. (2010). *IANA guidelines for IPv4 multicast address assignments* (RFC 5771). RFC Editor. https://www.rfc-editor.org/rfc/rfc5771.html

Dachman, J. (2024, July 19). *NBA Summer League is once again a breeding ground for tech innovation*. Sports Video Group. https://www.sportsvideo.org/2024/07/19/nba-summer-league-once-again-a-breeding-ground-for-tech-innovation/

Dachman, J. (2025, October 23). *NBA tip-off: League starts season with two new broadcast partners, in-house NBA TV/NBA App ops*. Sports Video Group. https://www.sportsvideo.org/2025/10/23/nba-tip-off-league-starts-season-with-two-new-broadcast-partners-in-house-nba-tv-nba-app-ops/

Dachman, J. (2026, June 10). *NBA's in-house broadcast ops & engineering teams power global Finals coverage* [Article; the title continues with two city names, which this course does not give]. Sports Video Group. Listed in the site's archive for that date: https://www.sportsvideo.org/2026/06/10/

Deering, S. (1989). *Host extensions for IP multicasting* (RFC 1112). RFC Editor. https://www.rfc-editor.org/rfc/rfc1112.html

Eddy, W. (Ed.). (2022). *Transmission control protocol (TCP)* (RFC 9293). RFC Editor. https://www.rfc-editor.org/rfc/rfc9293.html

Fenner, B., Handley, M., Holbrook, H., Kouvelas, I., Parekh, R., Zhang, Z., & Zheng, L. (2016). *Protocol independent multicast - sparse mode (PIM-SM): Protocol specification (revised)* (RFC 7761). RFC Editor. https://www.rfc-editor.org/rfc/rfc7761.html

Fenner, W. (1997). *Internet group management protocol, version 2* (RFC 2236). RFC Editor. https://www.rfc-editor.org/rfc/rfc2236.html

Fuller, V., & Li, T. (2006). *Classless inter-domain routing (CIDR): The Internet address assignment and aggregation plan* (RFC 4632). RFC Editor. https://www.rfc-editor.org/rfc/rfc4632.html

Handley, M., Jacobson, V., & Perkins, C. (2006). *SDP: Session description protocol* (RFC 4566). RFC Editor. https://www.rfc-editor.org/rfc/rfc4566.html

Holbrook, H., & Cain, B. (2006). *Source-specific multicast for IP* (RFC 4607). RFC Editor. https://www.rfc-editor.org/rfc/rfc4607.html

IEEE. (2022). *IEEE standard for local and metropolitan area networks: Bridges and bridged networks* (IEEE Std 802.1Q-2022). IEEE Standards Association. https://standards.ieee.org/ieee/802.1q/10323/

JPEG. (n.d.). *Overview of JPEG XS*. Retrieved October 21, 2026, from https://jpeg.org/jpegxs/

Juniper Networks. (n.d.). *802.1Q VLANs overview*. Junos OS documentation. Retrieved October 21, 2026, from https://www.juniper.net/documentation/us/en/software/junos/multicast-l2/topics/concept/interfaces-802-1q-vlans-overview.html

Light Reading. (2026, October 19). *AT&T, WNBA, NBA launch next-gen basketball network*. https://www.lightreading.com/fttx/at-t-wnba-nba-launch-next-gen-basketball-network

Mogul, J., & Postel, J. (1985). *Internet standard subnetting procedure* (RFC 950). RFC Editor. https://www.rfc-editor.org/rfc/rfc950.html

NETGEAR. (n.d.). *8-port Gigabit Ethernet Easy Smart Managed Essentials Switch (GS308E)*. Retrieved October 21, 2026, from https://www.netgear.com/business/wired/switches/easy-smart/gs308e/

NETGEAR. (2024). *Plus Gigabit Ethernet switches, 300 series: GS305E and GS308E* [Data sheet D-GS305E/GS308E-24May24]. https://www.downloads.netgear.com/files/GDC/GS308Ev4/GS305E_GS308E_DS.pdf

NETGEAR. (2026). *Gigabit Ethernet Easy Smart Managed Essentials Switch, model GS308Ev4: User manual* (202-12961-01). https://www.downloads.netgear.com/files/GDC/GS308Ev4/GS308Ev4_UM_EN.pdf

Postel, J. (1980). *User datagram protocol* (RFC 768). RFC Editor. https://www.rfc-editor.org/rfc/rfc768.html

Postel, J. (1981). *Internet protocol* (RFC 791). RFC Editor. https://www.rfc-editor.org/rfc/rfc791.html

Professor Messer. (n.d.-a). *Calculating IPv4 subnets and hosts: CompTIA Network+ N10-009, 1.7* [Video]. Retrieved October 21, 2026, from https://www.professormesser.com/network-plus/n10-009/n10-009-video/calculating-ipv4-subnets-and-hosts-n10-009/

Professor Messer. (n.d.-b). *Introduction to IP: CompTIA Network+ N10-009, 1.4* [Video]. Retrieved October 21, 2026, from https://www.professormesser.com/network-plus/n10-009/n10-009-video/introduction-to-ip-n10-009/

Professor Messer. (n.d.-c). *Understanding the OSI model: CompTIA Network+ N10-009, 1.1* [Video]. Retrieved October 21, 2026, from https://www.professormesser.com/network-plus/n10-009/n10-009-video/understanding-the-osi-model-n10-009/

Professor Messer. (n.d.-d). *VLANs and trunking: CompTIA Network+ N10-009, 2.2* [Video]. Retrieved October 21, 2026, from https://www.professormesser.com/network-plus/n10-009/n10-009-video/vlans-and-trunking-n10-009/

Reddy, R., Clinton, C., Morillo, F., & Bennetts, R. (2025, October 9). *Hawk-Eye Innovations powers real-time sports data with Flink and Amazon MSK*. AWS for M&E Blog, Amazon Web Services. https://aws.amazon.com/blogs/media/hawk-eye-innovations-powers-real-time-sports-data-with-flink-and-amazon-msk/

Rekhter, Y., Moskowitz, B., Karrenberg, D., de Groot, G. J., & Lear, E. (1996). *Address allocation for private internets* (RFC 1918). RFC Editor. https://www.rfc-editor.org/rfc/rfc1918.html

Saleh, T. (2026, October 21). *AT&T stays connected with NBA, WNBA in multi-year renewal*. Sportcal. https://www.sportcal.com/news/att-stays-connected-with-nba-wnba-in-multi-year-renewal/

Schulzrinne, H., Casner, S., Frederick, R., & Jacobson, V. (2003). *RTP: A transport protocol for real-time applications* (RFC 3550). RFC Editor. https://www.rfc-editor.org/rfc/rfc3550.html

Simpson, W. (2017, November 15). *SMPTE ST 2110-10: A base to build on*. TV Tech. https://www.tvtechnology.com/news/smpte-st-211010-a-base-to-build-on

Simpson, W. (2018, February 9). *SMPTE ST 2110-21: Taming the torrents*. TV Tech. https://www.tvtechnology.com/opinions/smpte-st-211021-taming-the-torrents

Society of Motion Picture and Television Engineers. (n.d.-a). *Membership overview: Individual*. Retrieved October 21, 2026, from https://portal.smpte.org/SMPTEPortal/SMPTEContent/Membership_Overview.aspx

Society of Motion Picture and Television Engineers. (n.d.-b). *Understanding SMPTE ST 2110* [Virtual course]. Retrieved October 21, 2026, from https://www.smpte.org/virtual-course/st2110

Society of Motion Picture and Television Engineers. (2010). *24-bit digital audio format for SMPTE bit-serial interfaces at 1.5 Gb/s and 3 Gb/s: Roadmap for the 299 document suite* (SMPTE OV 299-0:2010). https://pub.smpte.org/pub/ov299-0/ov0299-0-2010.pdf

Society of Motion Picture and Television Engineers. (2022a). *Professional media over managed IP networks: Constant bit-rate compressed video* (SMPTE ST 2110-22:2022). https://pub.smpte.org/pub/st2110-22/st2110-22-2022.pdf

Society of Motion Picture and Television Engineers. (2022b). *Professional media over managed IP networks: System timing and definitions* (SMPTE ST 2110-10:2022). https://pub.smpte.org/pub/st2110-10/st2110-10-2022.pdf

Society of Motion Picture and Television Engineers. (2022c). *Professional media over managed IP networks: Traffic shaping and delivery timing for video* (SMPTE ST 2110-21:2022). https://pub.smpte.org/pub/st2110-21/st2110-21-2022.pdf

Society of Motion Picture and Television Engineers. (2022d). *Professional media over managed IP networks: Uncompressed active video* (SMPTE ST 2110-20:2022). https://pub.smpte.org/pub/st2110-20/st2110-20-2022.pdf

Society of Motion Picture and Television Engineers. (2023). *Professional media over managed IP networks: SMPTE ST 291-1 ancillary data* (SMPTE ST 2110-40:2023). https://pub.smpte.org/pub/st2110-40/st2110-40-2023.pdf

Society of Motion Picture and Television Engineers. (2025a). *Professional media over managed IP networks: PCM digital audio* (SMPTE ST 2110-30:2025). https://pub.smpte.org/pub/st2110-30/st2110-30-2025.pdf

Society of Motion Picture and Television Engineers. (2025b, August 15). *SMPTE ST 2110 FAQ*. https://www.smpte.org/smpte-st-2110-faq

Van Roy, J. (2020). *What makes JPEG XS technology different from other codecs?* [White paper]. intoPIX. https://www.intopix.com/Blog%20Pictures/intoPIX_White-Paper_What%20makes%20JPEG%20XS%20technology%20different%20from%20other%20codecs.pdf

Washington State Library. (2026, October 13). *Digital skills resources for Washingtonians: Cisco Networking Academy*. https://washstatelib.libguides.com/Digital-skills-resources/Cisco-networking-academy
