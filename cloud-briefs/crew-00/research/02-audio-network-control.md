# Cables and Connectors (CREW-00): Audio, Network and Control Facts

**Researched:** October 26, 2026. Every source tagged V below was fetched and read that day.

**Scope.** Outline sections 5 (audio over copper), 6 (audio and video over the network) and 8 (control, comms and data) of `cloud-briefs/crew-00/00-approved-brief.md`. Research tier 2.

**Tags.** **V** = read in a page or PDF fetched on October 26, 2026 (search-result snippets never count). **I** = inferred from V facts, with the reasoning written out; a lesson may teach it only with the reasoning shown. **A** = assumed; never to be taught.

**How the sources were read.** PDFs were downloaded from their owners' sites and their text extracted; page numbers below are the PDF's printed or physical page. Clear-Com's Solution Finder pages render with scripts, so their text was read through Atlassian's public content interface for the same page ID; the page URL is cited. The Sennheiser XLR pin figure is an image and was read as an image. No site that refused a request was retried another way; those are in "Not reachable."

**Standards.** AES3, AES-3id, AES10, AES67, TIA-568, IEEE 802.3 and SMPTE texts are paywalled and were not read. Where a maker's document names one of them, the fact is credited to the maker, not to the standard. ESTA's standards are free to download but sit behind a licence agreement a person must accept; they were not downloaded (see "Not reachable").

## 5. Audio over copper

### 5.1 Balanced and unbalanced

| Fact | Tag | Source |
|---|---|---|
| In a balanced line, "Any noise that is induced will be so equally on both connections"; the receiver brings the two signals back into phase, which "flips the noise 180 degrees out of phase between the two signals." Mackie calls this "Common Mode Rejection." | V | Mackie (n.d.), section on balanced cables |
| XLR mic cables and 1/4 inch TRS are "the most commonly found types of balanced connectors in live sound." | V | Mackie (n.d.) |
| "A standard TS instrument cable is the unbalanced cable you will run into most often." | V | Mackie (n.d.) |
| "Unbalanced cables are generally only good for running signal up to 15 feet." Mackie gives no length for balanced cables. | V | Mackie (n.d.) |
| Rane: the twisted-pair construction of balanced cables "provides much greater immunity to magnetic field interference"; an unbalanced cable's shield also carries the signal's return current. | V | Macatee (2002, p. 2, "Balanced vs. Unbalanced Shields") |
| Rane: balanced interconnect "was developed to be immune to these noise currents," and balanced and unbalanced interconnect "are truly not compatible." | V | Rane Corporation (2015, p. 2, "Ground Loops") |
| Rane's practical rule: "It all boils down to using balanced lines, only balanced lines, and nothing but balanced lines." | V | Rane Corporation (2015, p. 3) |
| Why a balanced line rejects noise, in one sentence: the same noise lands on both legs, the receiver responds only to the difference between the legs, so the shared noise cancels. | I | Built from Mackie (n.d.) and Macatee (2002, p. 2); the "difference" wording is ours and should be checked by the reviewer |

### 5.2 The 3-pin XLR, TRS and TS

| Fact | Tag | Source |
|---|---|---|
| Rane (1995, revised 2002): "the Audio Engineering Society has adopted the 'pin 2 is hot' standard." | V | Macatee (2002, p. 1, "Introduction") |
| Many makers connect balanced shields to signal ground: "pin 1 for XLR connectors, the sleeve on 1/4" (6.35mm) jacks." | V | Macatee (2002, p. 2, "The 'Pin 1' Problem") |
| "Standard XLR cables come with their shields tied to pin 1 at each end (the shells are not tied, nor need be)." | V | Rane Corporation (2015, p. 3) |
| Sennheiser's pin figure for the MK 4 microphone marks pin 2 "+" and joins pin 1 to the cable shield; the capsule's other leg goes to pin 3. | V (read from the figure) | Sennheiser (2026, p. 39, "Pin assignment of the XLR-3 connector") |
| So pin 3 is the other leg of the pair, the "cold" or negative side. | I | From pin 2 "hot" (Macatee, 2002, p. 1), the "+" on pin 2 (Sennheiser, 2026, p. 39) and pin 1 as the shield (Rane Corporation, 2015, p. 3). No fetched source states "pin 3 cold" in words; see open check 3 |
| A Clear-Com cable for a balanced line-level feed wires the pair to XLR pins 2 and 3 and leaves pin 1 floating in that cable. | V | Clear-Com (2019e) |
| Rane's interconnect chart treats ¼ inch TRS (tip-ring-sleeve) as a balanced connector and ¼ inch or 3.5 mm TS (tip-sleeve) and RCA as unbalanced. | V | Rane Corporation (2015, p. 6, Figure 4) |
| Rane's cable figures join + to + and the negative leg to the negative leg, with the shield going "TO XLR PIN 1" or "TO TRS SLEEVE." | V | Rane Corporation (2015, p. 6, cable figure labels) |

### 5.3 Phantom power

| Fact | Tag | Source |
|---|---|---|
| Phantom power is "a standardized method of supplying power to professional analog microphones"; P48 uses 48 V; "The supply voltage is applied as a common-mode DC voltage to both signal wires," and the cable shield is the return. The details are in IEC 61938. | V | Schoeps (n.d.) |
| Phantom powering is "generally safe" for dynamic and ribbon microphones, "whereas 'T' powering can easily damage them." | V | Schoeps (n.d.) |
| Damage can come from "plugging or unplugging it while the powering is on"; Schoeps advises connecting microphones with the supply off. | V | Schoeps (n.d.) |
| Sennheiser's MK 4 manual: connect only to inputs giving "48 V phantom powering as per IEC 61938" (48 ± 4 V, at least 3.5 mA per channel); "An unsuitable power supply can cause damage to the product." | V | Sennheiser (2026, p. 16, "Connecting the microphone," NOTICE) |

### 5.4 Intercom on XLR: 3-pin party-line and 4-pin headsets

| Fact | Tag | Source |
|---|---|---|
| Clear-Com: a balanced 3-pin XLR audio feed is a 4-wire connection "that doesn't use a Vdc component on any of the 3-pins." A 3-pin XLR wired for Clear-Com intercom is "an unbalanced 2-wire connection that uses a +30Vdc on one of the XLR pins to power various intercom stations, beltpacks and interfaces." | V | Clear-Com (2024a) |
| "The two disciplines are not compatible and in order to join them together an interface is required." Clear-Com names the EF-701M (one channel of party-line to balanced audio) and the IF4W4 (four channels). | V | Clear-Com (2024a) |
| Clear-Com party-line 3-pin XLR pin-out: "Pin 1 = Ground Pin 2 = Voltage Pin 3 = Audio." | V | Clear-Com (2019d) |
| The party-line line driver presents a high impedance to the 2-wire line, "which must be terminated with 200 ohms." Every 2-wire party-line converts the 4-wire headset circuit to 2-wire and back with a "hybrid." | V | Clear-Com (2019c, rules 1 to 3) |
| Many camera CCUs label an intercom connector "common," "+," "-". Clear-Com: this is not a 3-wire circuit; "The '+' & '-' pins are a 2-wire party-line, with the 'common' simply being a shield/ground." | V | Clear-Com (2019c, note 14) |
| Clear-Com HelixNet uses XLR for its powerline, and "The HelixNet powerline XLR connection is not your standard 2-wire connection." | V | Clear-Com (2022) |
| Clear-Com XLR-4 headset pin-out (male chassis plug on the beltpack or panel): pin 1 mic low, pin 2 mic high, pin 3 headphone low, pin 4 headphone high. | V | Clear-Com (2026c) |
| Clear-Com XLR-5 headset (female chassis socket): pin 1 mic low, pin 2 mic high, pin 3 headphone low, pin 4 headphone left, pin 5 headphone right. | V | Clear-Com (2026c) |
| On a Clear-Com V-Series panel's 4-pin headset XLR, a balanced handheld mic goes to pin 1 (-) and pin 2 (+). | V | Clear-Com (2024d) |
| The danger of swapping: a 3-pin XLR from a party-line carries DC on pin 2, and a phantom-powered mixer input puts 48 V on pins 2 and 3. Patching one into the other puts DC where neither end expects it. Clear-Com says the two are incompatible and need an interface; Schoeps and Sennheiser say an unsuitable supply or hot-plugging can damage gear. Teach: never patch a party-line cable into an audio input or a mic into a party-line, even though the plugs fit. | I | Clear-Com (2024a); Clear-Com (2019d); Schoeps (n.d.); Sennheiser (2026, p. 16). What exactly breaks, and how fast, is not stated by any source; do not teach a failure mode |

### 5.5 5-pin XLR for DMX512, and why mic cable is wrong

| Fact | Tag | Source |
|---|---|---|
| ProSoundWeb (2013): "The standard for DMX calls for using a 5-pin XLR connector and 5-conductor shielded 110-ohm cable." | V | Leerman (2013, p. 2) |
| Some manufacturers "have opted to use 3-pin XLR connectors instead of 5-pin XLR connectors." | V | Leerman (2013, p. 2) |
| DMX 5-pin assignments: pin 1 signal common (shield); pin 2 Data 1 negative; pin 3 Data 1 positive (primary data); pins 4 and 5 an optional secondary data pair. | V | Leerman (2013, p. 2, pin list) |
| "Use of standard microphone cable is not recommended as it could induce dropouts or errors in the data stream, especially over longer cable runs." | V | Leerman (2013, p. 2) |
| ENTTEC: "Typical microphone cable has a characteristic impedance of roughly 40 to 70 ohms," not controlled in manufacture, typically 100 pF/m or more; DMX/EIA-485 data cable is 120 ohms nominal (110 to 120 acceptable) at about 40 to 50 pF/m. | V | ENTTEC (2026) |
| ENTTEC: the mismatch causes reflections that grow with run length and fixture count; faults are intermittent (flicker, twitching moving lights, faults that move when cables are swapped). | V | ENTTEC (2026) |
| ENTTEC: mic cable "will often carry DMX" on a short, simple rig (roughly 10 to 15 m, a handful of fixtures, terminated, indoors), but it is the wrong cable; use 5-pin, 120 ohm shielded twisted pair for new runs and label mic leads audio-only. | V | ENTTEC (2026) |
| ESTA's Technical Standards Program lists E1.11, "USITT DMX512-A Asynchronous Serial Digital Data Transmission Standard for Controlling Lighting Equipment and Accessories," and E1.27-1, "Standard for Portable Control Cables for Use with ANSI E1.11 (DMX512-A) and USITT DMX512/1990 Products." "The downloads are free," under an End User Licensing Agreement. | V | Entertainment Services and Technology Association [ESTA] (n.d.) |
| Why the 3-pin, 4-pin and 5-pin XLRs must not be swapped: the same connector family carries mic-level balanced audio (3-pin), a DC-powered party-line (3-pin), a headset's mic and earphone (4-pin) and lighting data (5-pin). The shell tells you the pin count, not the signal. Read the label and the gear, not the plug. | I | From 5.2, 5.4 and this table. Adapters between 3-pin and 5-pin exist in retail listings (not read); do not teach adapter wiring |

### 5.6 AES3 and AES3id digital audio

| Fact | Tag | Source |
|---|---|---|
| Rane's table (footnoted to AES3-2003 and AES-3id-2001): AES3 is balanced, on XLR-3, 110 Ω, 2 to 7 V peak-to-peak output, shielded twisted pair, maximum distance 100 m. | V | Bohn (2014, p. 2, table "Differences Between AES3 and S/PDIF") |
| Same table: AES3id is unbalanced, on BNC, 75 Ω, 1.0 V peak-to-peak, coax, maximum distance 1000 m. S/PDIF is unbalanced RCA, 75 Ω, 0.5 V, 10 m. | V | Bohn (2014, p. 2, same table) |
| AES3id carries "the same format as AES3 but instead of 110 Ω balanced line, it is a 75 Ω unbalanced line using BNC connectors"; it is "a special AES3 subset for broadcast applications and long distance runs," because "unbalanced coax is superior to balanced lines due to the high capacitance of shielded twisted-pair cable." | V | Bohn (2014, p. 2) |
| "AES3 converted to 75 Ω coax is not S/PDIF ... Nor is AES3id 75 Ω BNC the same as 75 Ω RCA S/PDIF." | V | Bohn (2014, p. 2, "Conversion Caution") |
| Going from AES3 (110 Ω balanced) to AES3id (75 Ω) takes a resistor network ("the AES3id recommended network for creating a 12-dB pad (4:1 voltage divider)"), usable only if one end is transformer coupled and the run is short, or a transformer, which Rane calls "the best passive impedance matchers." Either way it is a converter, not a plain adapter cable. | V | Bohn (2014, p. 2, "AES3 to AES3id or S/PDIF"; p. 3 on transformers; p. 4 figure "AES3 4V out = AES3id 1V in") |
| The run lengths above come from 2003 and 2001 editions as tabulated by Rane in 2014. Teach them as Rane's figures, dated, not as today's standard text. | I | Bohn (2014, p. 2, table footnotes) |

### 5.7 Word clock

| Fact | Tag | Source |
|---|---|---|
| Word clock is the "metronome" that governs sample timing. MADI, AES/EBU and S/PDIF carry clock inside the data stream, but a discrete word clock is often sent as a square wave at the sample rate, and "Dedicated word clock inputs and outputs on digital equipment generally use BNC connectors." | V | Clear-Com (2019b) |
| RME: word clock is ideally "a 5 Volt square wave with the frequency of the sample rate," with harmonics "far above 500 kHz"; "both the cable itself and the terminating resistor at the end of the chain should have an impedance of 75 Ohm." Too low a voltage makes sync fail; reflections cause jitter and sync failure. | V | RME (n.d., p. 17, section 9.2 "Cabling and Termination") |
| RME: word clock is chained with BNC T-adapters; the last device is terminated with a 75 Ω resistor or its internal termination switch; a device with fixed internal 75 Ω can load the chain to 2 × 75 Ω. | V | RME (n.d., p. 17) |
| RME: computer stores "usually" carry 50 Ohm BNC parts; "The 75 Ohm components used for word clock are part of video technology (RG59)." | V | RME (n.d., p. 17) |
| The ADI-648's word clock input is BNC, not terminated (10 kΩ), with a switch for internal 75 Ω termination; its output gives 4.0 Vpp into 75 Ω. | V | RME (n.d., pp. 6 to 7, section 4) |
| A word clock line is the brief's "a cable that fits can still be wrong" case: a 50 Ω BNC network cable fits the jack, but RME asks for 75 Ω cable and termination. | I | RME (n.d., p. 17) |

### 5.8 MADI (AES10)

| Fact | Tag | Source |
|---|---|---|
| MADI (Multichannel Audio Digital Interface, AES10) carries many channels of digital audio "on a single coaxial or fiber cable"; it supports 28, 56 or 64 channels, sample rates up to 96 kHz at up to 24 bits; it is one-way (one sender, one receiver). | V | Clear-Com (2019b) |
| Clear-Com's table: 56 channels at 32 to 48 kHz ±12.5%; 64 channels at 32 to 48 kHz nominal; 28 channels at 64 to 96 kHz ±12.5%. | V | Clear-Com (2019b) |
| RME ADI-648 MADI output: coaxial via BNC, 75 Ohm, "according to AES10-1991," cable length up to 100 m; optical via FDDI duplex SC connector, 62.5/125 and 50/125 multimode, cable length up to 2,000 m. | V | RME (n.d., p. 7, section 4.2 "Outputs") |
| RME: MADI's hard limit is a data rate of 100 Mbit/s; the port's effective rate is 125 Mbit/s with coding; the 64-channel mode "was introduced officially in 2001"; "Older devices understand and generate only the 56 channel format." | V | RME (n.d., p. 24, section 12.3 "MADI Basics") |
| RME: MADI optical uses multimode fiber "up to almost 2 km"; single mode reaches much farther on "a completely different fibre (8 µm)"; the 1300 nm light is invisible; the plugs are SC, not to be confused with ST. | V | RME (n.d., p. 24) |
| RME dates MADI's definition to 1989, while its specifications cite "AES10-1991." Teach "AES10" without a year. | V (both statements); I (the teaching rule) | RME (n.d., pp. 6, 24) |

## 6. Audio and video over the network

### 6.1 Twisted-pair categories and the 100 m channel

| Fact | Tag | Source |
|---|---|---|
| Belden's Category 5e cable is described as "Category 5e Premise Horizontal Cable (200MHz)" for 1000BASE-T, 100BASE-TX, 10BASE-T, PoE, PoE+ and PoE++, but its notes say "Values above 100 MHz are for Engineering Information Only." | V | Belden (2026, p. 1 description; p. 2 "Product Notes") |
| Siemon's Premium 6 cable meets Category 6 (ANSI/TIA-568.2-E, ISO/IEC 11801-1); its application list runs 10BASE-T, 100BASE-T and 1000BASE-T (no 10GBASE-T), plus IEEE 802.3af, 802.3at and 802.3bt Types 3 and 4. | V | Siemon (n.d.-c, p. 1, "Compliance") |
| Siemon Premium 6 characteristic impedance: 100 Ω ±15% from 1 to 100 MHz, 100 Ω ±20% from 101 to 250 MHz; its performance table runs to 250 MHz. | V | Siemon (n.d.-c, p. 2, "Electrical Specifications") |
| Siemon Category 6A S/FTP "exceeds all standards requirements for category 6A transmission performance up to 500 MHz"; "All performance based on 100 meters (328 ft.)." | V | Siemon (n.d.-a, p. 1; p. 2) |
| Siemon Category 6A UTP with its connectivity forms "a channel capable of supporting 10GBASE-T operation over 100-meter, 4-connector topologies." | V | Siemon (n.d.-b, p. 1) |
| Fluke Networks: the channel is "the connection from one active device to another, including any patch cords and equipment cords," and "should not exceed 100 meters per industry standard guidelines"; "The maximum permitted length of the permanent link is 90 meters"; "standards recommend 5 meter patch cords." | V | Fluke Networks (2016) |
| What the category numbers mean, as these sources show it: a higher category is tested to a higher frequency (Cat5e values to 100 MHz, Cat6 to 250 MHz, Cat6A to 500 MHz) and so supports faster Ethernet over the same 100 m channel; Cat6A is the one these makers rate for 10GBASE-T to 100 m. | I | From Belden (2026), Siemon (n.d.-a, n.d.-b, n.d.-c). The categories are defined in TIA-568 and ISO/IEC 11801, which were not read |
| Twisted-pair Ethernet cable is 100 Ω; DMX data cable is 120 Ω nominal; AES3 is 110 Ω; video and word-clock coax is 75 Ω; RF coax is 50 Ω. Each number names a different cable. | I | Siemon (n.d.-c, p. 2); ENTTEC (2026); Bohn (2014, p. 2); RME (n.d., p. 17); Rohde & Schwarz (2015, p. 5) |

### 6.2 RJ45 and etherCON

| Fact | Tag | Source |
|---|---|---|
| Neutrik's NE8MX6 etherCON is a "CAT6A compliant RJ45 plug" in a cable carrier with "a robust metal shell" and "chuck-type strain relief"; Neutrik calls it a "Ruggedized connector with CAT6A component compliance according to ISO/IEC 11801 and TIA/EIA 568-C.2." | V | Neutrik (n.d.) |
| It is "Intermateable with the existing etherCON CAT5 range" but "Does not intermate with the CAT6 chassis connectors NE8FDY-C6 and NE8FDY-C6-B." | V | Neutrik (n.d.) |
| It is IP65 when mated with the NE8FDX-P6-W or NE8FDX-Y6-W chassis; more than 1000 mating cycles; "PoE++ compliant according to 802.3bt Type4"; cable outside diameter 7.0 to 9.5 mm. | V | Neutrik (n.d.) |
| Not every etherCON mates with every etherCON chassis; check the part numbers. | I | Neutrik (n.d.), the intermating warning |

### 6.3 What Dante asks of a switch (makers' documents; Audinate's own pages refused)

| Fact | Tag | Source |
|---|---|---|
| Shure: "Ensure your network switch has Gigabit ports"; a 100 Mbps switch is possible "but we do not recommend it." | V | Shure (2021) |
| Shure: trust incoming DSCP values; DSCP 56 (CS7) highest priority, for clock; DSCP 46 (EF) second, for audio; DSCP 34 (AF41) third, for video. | V | Shure (2021) |
| Shure: "Disable EEE/Energy Efficient Ethernet." | V | Shure (2021) |
| Shure: enable bridge multicast filtering; do not forward all multicast; disable multicast storm control; enable IGMP snooping (IGMPv2); enable the IGMP querier (the core switch, if several); enable Fast Leave. | V | Shure (2021) |
| Sennheiser: "Use non-blocking layer 2 gigabit switches"; use managed switches with "DiffServ (DSCP) Quality of Service (QoS) with strict priority and 4 queues"; switching capacity at least "1 Gbit/s × the number of ports × 2"; forwarding rate 1.4 Mpps per gigabit connection; VLAN and IGMP snooping support. | V | Sennheiser (n.d.), "Selecting the Network Switch" |
| Sennheiser: EEE "can result in poor synchronization performance and occasional audio dropouts"; disable EEE ("Green Ethernet," IEEE 802.3az) on all ports carrying Dante. | V | Sennheiser (n.d.), "Managing Energy Efficiency Ethernet (EEE)" |
| Sennheiser: Dante devices use DHCP when available, most support static addressing, and all Dante devices including the PC running Dante Controller must be on the same IP subnet. | V | Sennheiser (n.d.), "Configuring Dante network" |
| Symetrix: "Use CAT6 cabling for all Dante interconnects"; "Daisy chains and uplinks should be Gigabit"; "Repeater hubs are not supported"; use managed switches for more than 10 local units or units more than 100 m apart; switches need QoS with four queues and DSCP with strict priority. | V | Symetrix (n.d.) |
| Symetrix: reserve 30% of bandwidth if control traffic shares the network; with that reserve, a 100 Mbit link handles up to 48 x 48 channels and a 1 Gbps link up to 512 x 512 at 48 kHz. | V | Symetrix (n.d.) |
| EAW: a non-blocking layer 2 gigabit switch, able to switch off EEE and other power saving; managed switches and DSCP QoS with strict priority recommended. | V | Eastern Acoustic Works (n.d.) |
| Clear-Com: 1 Gb or more per port; switching capacity twice the port count (a 10-port switch, 20 Gb/s); EEE disabled; QoS; fiber-to-copper conversion "preferable using the SFP/mini-GBIC form factor"; "Pay close attention to the maximum power budget for PoE ports." | V | Clear-Com (2025a) |
| Five makers agree on the core: gigabit, managed, DSCP QoS with strict priority, EEE off, IGMP snooping configured. Teach those, credited to the makers, until Audinate's own page is read. | I | Shure (2021); Sennheiser (n.d.); Symetrix (n.d.); Eastern Acoustic Works (n.d.); Clear-Com (2025a) |
| The DSCP numbers (56, 46, 34) are Shure's configuration for Shure devices; do not present them as Audinate's until open check 1 is answered. | I | Shure (2021) title: "for Shure Devices and Dante/AES67" |

### 6.4 AES67

| Fact | Tag | Source |
|---|---|---|
| Clear-Com uses AES67 because "It is considered to be broadcast-quality audio" and "The latency is incredibly low"; it relies on PTP, with normally one PTP grandmaster reference clock in the system. | V | Clear-Com (2026b) |
| Clear-Com's AES67 network list: 1 Gb or more per switch port; switch capacity twice the ports; EEE off; IGMP snooping and QoS properly configured; AES67 devices no more than 3 switch hops from the PTP grandmaster; "Ideally place all of your Clear-Com AES67 devices on a dedicated set of Ethernet switches." | V | Clear-Com (2026b) |
| Clear-Com: when Dante runs its PTPv1 clock, the Dante network must be on a separate VLAN or physical network from the AES67 / ST 2110-30 network, "as it relies on PTPv2." | V | Clear-Com (2025a); Clear-Com (2024c) |
| ST 2110-30 carries PCM audio "by reference to AES67": CREW-05 already teaches this; link to it. | V (in CREW-05) | `arena-transmission`, lesson `st-2110-separate-streams` |

### 6.5 ST 2110 on copper and on fiber

| Fact | Tag | Source |
|---|---|---|
| CREW-05 teaches that one uncompressed 1080p59.94 picture is about 2.486 Gbps and that about 4 fit on a 10 Gbps link. | V (in CREW-05) | `arena-transmission`, lesson `bandwidth-math` |
| So one uncompressed HD stream does not fit a gigabit port; ST 2110 video needs 10 Gbps or faster links. On copper that means 10GBASE-T, which Siemon rates over a 100 m Cat6A channel; Siemon's Category 6 sheet lists Ethernet only to 1000BASE-T. | I | CREW-05 `bandwidth-math`; Siemon (n.d.-b, p. 1); Siemon (n.d.-c, p. 1) |
| Clear-Com prefers fiber-to-copper conversion in SFP form on AV switches. Beyond 100 m, or at higher rates, the link goes to fiber; CREW-05 section 6 covers fiber. | I | Clear-Com (2025a); Fluke Networks (2016); link to CREW-05 `fiber-on-the-map` |
| No fetched source states which copper category a broadcast plant uses for ST 2110 in practice. | A (do not teach) | none |

### 6.6 Power over Ethernet

| Fact | Tag | Source |
|---|---|---|
| TI: the TPS2373-4 and TPS2373-3 support "90 W and 60 W respectively. Assuming 100-meter CAT5 cable, this translates into 71.3 W and 51 W at PD input." (PD: the powered device.) | V | Texas Instruments (2018, p. 1, section 3 "Description") |
| TI Table 1, maximum power at the PD by class: class 0, 12.95 W; 1, 3.84 W; 2, 6.49 W; 3, 12.95 W; 4, 25.5 W; 5, 40 W; 6, 51 W; 7, 62 W; 8, 71 W. TI's 2018 datasheet calls 802.3bt "(Draft)." | V | Texas Instruments (2018, p. 18, Table 1 "Class Resistor Selection") |
| Siemon's cables list support for IEEE 802.3af (Type 1 PoE), 802.3at (Type 2), 802.3bt (Type 3) and 802.3bt (Type 4). | V | Siemon (n.d.-a, p. 1); Siemon (n.d.-c, p. 1) |
| Power is lost in the cable: the switch end gives more than the device receives (90 W in, 71.3 W at the device over 100 m, per TI). Plan a switch's PoE budget at the switch end. | I | Texas Instruments (2018, p. 1); Clear-Com (2025a) on PoE power budgets |

### 6.7 Why an AV network is kept apart from the office network

| Fact | Tag | Source |
|---|---|---|
| Shure: "Do not make changes to an Enterprise network or networks managed by others without proper authorization." If the AV switch must uplink to a larger network, set "the uplink port (only) to Forbidden to prevent multicast traffic from leaking out of the network." | V | Shure (2021) |
| Clear-Com: "Ideally place all of your Clear-Com AES67 devices on a dedicated set of Ethernet switches." | V | Clear-Com (2026b) |
| Clear-Com: network administrators may need to filter Dante audio, PTP or other multicast traffic from a corporate network. | V | Clear-Com (2025c) |
| Clear-Com: a company firewall update can stop Dante Controller from working on the company network. | V | Clear-Com (2025b) |
| Sennheiser: "Assign the connected LAN as a private network," and switch off the configuring PC's Wi-Fi. | V | Sennheiser (n.d.) |
| Symetrix: reserve 30% of bandwidth if control traffic shares the network. | V | Symetrix (n.d.) |
| The reasons together: media networks run multicast that floods ports without IGMP snooping (CREW-05 teaches this), need QoS and EEE settings an office network may not have, need a clock the office network does not carry, and belong to someone else when they are the office's. So crews keep media on its own switches or VLANs and touch the house network only with its owner's permission. | I | Shure (2021); Clear-Com (2026b, 2025b, 2025c); CREW-05 `why-multicast-is-on-every-posting` |
| No fetched source says Dante must have a dedicated network; a search snippet suggested Audinate says it need not. Do not teach either way until open check 1 is answered. | A (do not teach) | none |

## 8. Control, comms and data

### 8.1 DMX512 termination and limits

| Fact | Tag | Source |
|---|---|---|
| "The DMX signal must be terminated at the end of a line of fixtures or dimmers"; a terminator is "a 120-ohm resistor, and a male XLR plug"; "Make sure only the last fixture in the line is terminated." | V | Leerman (2013, p. 2) |
| ENTTEC: "A 120 ohm terminator across Data plus and Data minus on the last fixture"; at short lengths termination matters more than cable type, because an unterminated line reflects nearly the full edge. | V | ENTTEC (2026) |
| "DMX512 supports a maximum of 32 devices on a line"; with a repeater, "a total of 63 devices (The repeater counts as a device)." | V | Leerman (2013, p. 2) |

### 8.2 RS-422 deck and camera control, and serial

| Fact | Tag | Source |
|---|---|---|
| Brainboxes describes the Sony protocol as "a 2-way communications protocol for controlling advanced video recorders," on a DB9, and warns that wiring depends on whether a unit is the controller or the device. | V | Brainboxes (2026b) |
| Brainboxes' Sony RS-422 DB9 controller (master) pin-out: 1 frame ground; 2 receive A-; 3 transmit B-; 4 transmit ground; 5 not connected; 6 receive ground; 7 receive B+; 8 transmit A+; 9 not connected. The device (slave) side swaps transmit and receive on pins 2, 3, 7 and 8. | V | Brainboxes (2026b, both tables) |
| RS-422 uses "2 wires ... to carry each signal, configured as a twisted pair"; "one transmitter and up to 10 receivers"; up to 10 Mbit/s for up to 40 feet and up to 100 kbit/s for up to 4000 feet (1219 m). RS-485 allows "up to 32 driver/receivers pairs on a party line data bus." | V | Brainboxes (2026a) |
| RS-232 uses "± 12 Volt logic levels over distances up to 100 feet, at speeds up to 20,000 Baud." | V | Brainboxes (2026a) |
| Blackmagic HyperDeck Studio 4K Pro, HD Pro and HD Plus each list "1 x RS-422 In, 1 x RS-422 Out" (the HD Mini, RS-422 In only) and external control by "RS-422 deck control, SDI start/stop, timecode run." | V | Blackmagic Design (n.d.-b) |
| Blackmagic: the top 4 M/E ATEM Constellation models "include RS-422 for serial control and MADI digital audio connections." | V | Blackmagic Design (n.d.-a) |
| RS-422 reaches farther than RS-232 because each signal rides a twisted pair, the same idea as balanced audio. | I | Brainboxes (2026a); section 5.1 |

### 8.3 Tally and GPI/GPO contacts

| Fact | Tag | Source |
|---|---|---|
| Blackmagic's GPI and Tally Interface "Adds 8 Tally relay contacts to any ATEM switcher." | V | Blackmagic Design (n.d.-a) |
| Clear-Com HelixNet's DB25 relay port gives each relay a pole, a normally closed (NC) and a normally open (NO) contact, beside opto-isolated inputs with + and - pins. | V | Clear-Com (2026a) |
| Clear-Com Eclipse GPI inputs in opto-isolated mode need 7 to 24 V DC at EXTVIN+ relative to EXTVIN-; an input goes active at 5 mA or more; a 1.5 kΩ resistor limits current; the pin must not go above +6 V relative to EXTVIN-. | V | Clear-Com (2019a) |
| An IFB's program feed can be switched by a panel key or by a matrix GPI driven from an external switch. | V | Clear-Com (2024b) |
| A GPO is usually a relay contact (a switch closing or opening) and a GPI is an input that senses a closure or a current; tally is one use of them. Check each device's voltage and current limits before wiring two together. | I | From Clear-Com (2019a, 2026a) and Blackmagic Design (n.d.-a); the general definition is ours |

### 8.4 USB length

| Fact | Tag | Source |
|---|---|---|
| Biamp: "A standard USB 2.0 cable has a maximum cable length of 5 meters"; "If you use a USB 3 or 3.1 cable, your maximum cable length shortens to 3 meters." | V | Biamp (n.d.) |
| Biamp: longer runs need "USB Extenders" (USB over Ethernet cable) or "Active USB" cables; never more than 5 "Hub Hops" from the root hub; problems when a tree goes deeper than tier 7. | V | Biamp (n.d.) |
| Cambrionix: USB 2.0 "Maximum length of 5 meters"; for USB 3.x the USB-IF moved from fixed lengths to performance criteria; it gives up to 2 m for USB 3.2 Gen 1, up to 1 m for Gen 2 and Gen 2x2, and 0.8 m for USB4. | V | Cambrionix (n.d.) |
| USB 2.0's 5 m is agreed; the USB 3.x figure is not (3 m from Biamp, 2 m from Cambrionix). Teach "5 m for USB 2.0, shorter for faster USB, use an active cable or extender beyond that." | I | Biamp (n.d.); Cambrionix (n.d.) |

### 8.5 RF and antenna coax: 50 ohms, and why it is not video coax

| Fact | Tag | Source |
|---|---|---|
| Rohde & Schwarz: Type N (50 Ω), "developed to satisfy the need for a durable, weatherproof, medium-sized RF connector," with maximum frequency 11 GHz (normal) and 18 GHz (precision). | V | Rohde & Schwarz (2015, p. 5, section 3.1) |
| "75 Ω and 50 Ω Type N connectors are not compatible despite sharing a common thread size. The male pin on 50 Ω Type N is larger than the female socket of 75 Ω Type N connectors, resulting in damage if connected together." 75 Ω Type N tops out at 4 GHz. | V | Rohde & Schwarz (2015, p. 5, section 3.1 notes 1 and 2) |
| SMA: 50 Ω, "good electrical performance from DC to 12 GHz" (some makers to 18 GHz), "mechanically rated for only 500 mate / de-mate operations"; mechanical variance between makers means checking compatibility "to avoid physical damage." | V | Rohde & Schwarz (2015, pp. 5 to 6, section 3.2) |
| "The connector type having the lowest frequency range will set the frequency range of the system"; check each connector's performance with its maker. | V | Rohde & Schwarz (2015, p. 4, section 3) |
| Rohde & Schwarz's bar chart (Fig. 3-1) lists BNC, TNC and other series by operating frequency; read in order, it gives BNC about 4 GHz and TNC about 15 GHz. | I (reading a chart's label order) | Rohde & Schwarz (2015, p. 4, Fig. 3-1) |
| RME: 50 Ohm BNC parts are what computer stores usually carry; the 75 Ohm parts for word clock are "part of video technology (RG59)." | V | RME (n.d., p. 17) |
| Shure's UA825 product page: "25-foot coaxial cable offers BNC to BNC connection." The page does not state an impedance. | V | Shure (n.d.) |
| Why RF coax is not video coax: video, word clock and AES3id are 75 Ω; antenna and RF test gear are 50 Ω (Type N and SMA as 50 Ω series). A BNC can be either, so the plug fitting proves nothing; a 50 Ω N plug can damage a 75 Ω N jack; and a mismatched cable reflects signal, the same reason RME and ENTTEC give for matching impedance. | I | Rohde & Schwarz (2015, p. 5); RME (n.d., p. 17); ENTTEC (2026); Bohn (2014, p. 2) |

### 8.6 Wireless mics and IFB (named only), and the FCC

| Fact | Tag | Source |
|---|---|---|
| The FCC's rule for unlicensed wireless mics, 47 C.F.R. § 15.236 (October 1, 2025 edition), is headed for the bands 54 to 72 MHz, 76 to 88 MHz, 174 to 216 MHz, 470 to 608 MHz, 614 to 616 MHz and 657 to 663 MHz. | V | 47 C.F.R. § 15.236 (2025, p. 1036, section heading) |
| The rule defines a wireless microphone as a radiator that sends sound by radio "to a receiver which converts the radio signals back into audio signals," and says wireless microphones "may be used for cue and control communications and synchronization of TV camera signals as defined in § 74.801." | V | 47 C.F.R. § 15.236 (2025, para. (a)) |
| Maximum radiated power: 50 mW EIRP in TV broadcast bands; 20 mW EIRP in the 600 MHz guard band and duplex gap. | V | 47 C.F.R. § 15.236 (2025, para. (d)) |
| Operation must be at least four kilometers outside the protected contours of co-channel TV stations; a mic's channel may not exceed 200 kHz. | V | 47 C.F.R. § 15.236 (2025, paras. (e) and (f)(1)(ii)) |
| An IFB transmitter takes a balanced line-level program feed; Clear-Com wires one from a matrix port to its PTX-3 IFB transmitter. | V | Clear-Com (2019e) |
| For the course: name wireless mics and IFB, name the FCC as the U.S. spectrum authority, and send the learner to the RF coordinator. Do not teach frequencies to use; the FCC's own guide pages refused the fetch (see "Not reachable") and the bands change. | I | 47 C.F.R. § 15.236 (2025); brief section 2, item 8 ("named only") |

## Teach this, not that

1. **Not** "a 3-pin XLR carries balanced audio." **Teach:** a 3-pin XLR usually carries balanced audio, but a Clear-Com party-line uses the same plug with +30 V DC on pin 2 (Clear-Com, 2024a, 2019d).
2. **Not** "a CCU's common, +, - intercom pins are a 3-wire circuit." **Teach:** Clear-Com says they are a 2-wire party-line plus shield (Clear-Com, 2019c).
3. **Not** "phantom power fries dynamic mics." **Teach:** Schoeps says phantom is generally safe for dynamic and ribbon mics; T-power and hot-plugging are the risks (Schoeps, n.d.).
4. **Not** "DMX cable is 110 ohms" or "is 120 ohms" as settled. **Teach:** the terminator is 120 ohms; ProSoundWeb (2013) says 110-ohm cable and ENTTEC (2026) says 120 nominal, 110 to 120 acceptable. Open check 2 settles it from ESTA.
5. **Not** "mic cable will never carry DMX." **Teach:** it often works on a short simple rig, but it is the wrong cable and fails intermittently (ENTTEC, 2026).
6. **Not** "AES3 on a BNC is S/PDIF." **Teach:** AES3id and S/PDIF share 75 Ω coax but differ in level and format (Bohn, 2014, p. 2).
7. **Not** "MADI is 64 channels." **Teach:** 56 or 64 at 48 kHz, 28 at 96 kHz; older gear speaks only 56 (Clear-Com, 2019b; RME, n.d., p. 24).
8. **Not** "AES3id runs 1000 m" as a current spec. **Teach:** Rane's 2014 table, from 2001 and 2003 editions, gives 100 m (AES3) and 1000 m (AES3id).
9. **Not** "Dante needs its own network" or "Dante can share any network." **Teach:** what the makers ask of a switch (6.3) and that Clear-Com and Shure keep media away from enterprise networks (6.7).
10. **Not** "USB 3 is limited to 3 m" as a standard. **Teach:** USB 2.0 is 5 m; faster USB is shorter and makers disagree (Biamp, n.d.; Cambrionix, n.d.).
11. **Not** "Cat6 runs 10 gigabit to 55 m." No fetched source; Siemon's Cat6 sheet lists up to 1000BASE-T. Open check 7.
12. **Not** a PoE Type 1 or Type 2 switch-end wattage (such as 15.4 W or 30 W). Only TI's device-end class table was read. Open check 8.
13. **Not** "any BNC mates safely with any BNC." Rohde & Schwarz documents damage for 50 Ω and 75 Ω Type N only; for BNC no maker source was read. Open check 5.
14. **Not** "TNC is a threaded BNC." No fetched source says so. Open check 6.
15. **Not** the 600 MHz band history or Part 74 licensing details; only search snippets were seen, and fcc.gov refused the fetch.
16. **Brief correction:** brief section 4 says `sound-craft` (CREW-02) names Dante and holds three fiber lessons. It does neither: the only "dante" match in `sound-craft-course.ts` is the French word "abondante," and `fiber-on-the-map`, `where-to-learn-fiber` and `a-fiber-kit-and-first-lab` are in `arena-transmission` (CREW-05).

## Already taught elsewhere in the catalog

| Topic | Where | What it teaches | CREW-00 action |
|---|---|---|---|
| Signal flow, mic types, levels | `broadcasting-break-in` lesson `signal-flow-and-audio` | Source to mixer to recorder; dynamic, condenser, lavalier, shotgun mics; gain and clipping; troubleshooting along the chain. No connectors, balanced lines or phantom power. | Prerequisite; link; teach connectors here |
| FCC licenses stations and manages spectrum | `broadcasting-break-in` lesson `encoding-and-streaming` | FCC basics (FCC, n.d.-a there) | Link for the FCC's role; add the wireless-mic rule here |
| Cable handling | `sound-craft` lesson `kit-and-site-survey` | 1987 and 1989 Army texts: handle cable by the connector, coil neatly and not too tight, tape floor runs, keep electric cables away from audio lines. Leaves coiling method and wireless frequency rules to a practitioner. | Link; section 9 of CREW-00 adds over-under |
| USB mic vs XLR mic plus interface | `voice-acting` lesson `levels-and-the-minimum-chain` | Both paths named; no wiring | Link |
| SDI on a locking BNC; timecode by BNC adapter | `cinema-look-camera-rig` (CREW-04) lesson `outputs-timecode-and-genlock` | Camera outputs | Link from section 2 |
| ST 2110 parts; -30 audio "by reference to AES67"; SDI embedded audio, 16 channels on HD-SDI | `arena-transmission` (CREW-05) lesson `st-2110-separate-streams` | The streams and their parts | Link; do not repeat |
| Bandwidth: 2.486 Gbps per uncompressed 1080p59.94 picture; about 4 per 10 Gbps link | CREW-05 lesson `bandwidth-math` | Arithmetic | Link from 6.5 |
| Packet size, jumbo frames optional | CREW-05 lesson `packets-and-pacing` | ST 2110-10 limits | Link if needed |
| Multicast, IGMP, snooping, querier, PIM, SSM; flooding without snooping | CREW-05 lessons `why-multicast-is-on-every-posting`, `a-multicast-lab` | Definitions from the RFCs | Link from 6.3 and 6.7; do not redefine |
| Layer 2 and 3, VLANs | CREW-05 lesson `what-the-job-asks-about-ip` | Definitions | Link from 6.7 |
| A managed lab switch (NETGEAR GS308E) with IGMP snooping | CREW-05 lesson `a-home-lab-and-its-limits` | Price and datasheet | Link |
| PTP and grandmaster | CREW-05 lesson `one-clock-ptp` | ST 2110-10 timing | Link from 6.4 |
| ST 2022-7 two paths (from Clear-Com's manual) | CREW-05 lesson `two-paths` | Redundancy | Link |
| Fiber at the arena, where to learn it, a kit and first lab | CREW-05 lessons `fiber-on-the-map`, `where-to-learn-fiber`, `a-fiber-kit-and-first-lab` | Fiber | Link from 5.8 and 6.5 |
| Riedel Bolero referee comms | CREW-05 lesson `replay-tracking-and-referee-comms` | Three antennas, beltpacks | Link from 5.4 if wireless intercom is named |

Not taught anywhere in the catalog today (grep of `scripts/data`, October 26, 2026): balanced vs unbalanced, XLR pin-outs, phantom power, party-line intercom, DMX, AES3, word clock, MADI, Cat5e/6/6A, etherCON, Dante switch settings, EEE, DSCP, PoE, RS-422, GPI/tally, USB length, RF connectors.

## Not reachable

| URL | Result | What it should have given |
|---|---|---|
| https://www.getdante.com/support/ (redirects to https://support.getdante.com/hc) | 403 | Audinate's own Dante network and switch requirements |
| https://audinate.com/faq/how-does-dante-use-dscp-diffserv-priority-values-when-configuring-qos | 403 | Audinate's DSCP values and queue priorities |
| https://www.audinate.com/learning/faqs/which-network-switches-can-i-use-dante | 403 | Audinate's switch requirements, EEE |
| https://my.audinate.com/node/266 | 522 | Audinate FAQ on switches and whether a dedicated network is required |
| https://support.focusrite.com/hc/en-gb/articles/33199311590034-What-network-switch-should-I-use-for-Dante-and-RedNet | 403 | A maker's Dante switch list (gigabit, under-32-channel 100 Mbps rule) |
| https://mx.yamaha.com/es/products/contents/proaudio/docs/dante_network_design_guide/101_network_switches.html | 403 | Yamaha Dante network design guide |
| https://www.fcc.gov/wireless-microphones-guide | 403 | FCC consumer guide to wireless mics (bands, licensing, 600 MHz change) |
| https://www.fcc.gov/topic/wireless-microphone | 403 | FCC wireless microphone topic index |
| https://www.fcc.gov/sites/default/files/operation_of_wireless_microphones.pdf | 403 | FCC wireless mic operation summary |
| https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15/subpart-C/subject-group-ECFR2f2e5828339709e/section-15.236 | Bot check (redirect to unblock.federalregister.gov) | Current 47 C.F.R. § 15.236; the govinfo.gov annual edition was read instead |
| https://aes.org/standards-store/?id=113 | 403 | AES67 listing (designation, scope) |
| https://aes.org/standards-store/?id=17 | 403 | AES-3id listing (designation, scope) |
| https://www3-realm.cisco.com/en/US/prod/collateral/switches/ps5718/ps6021/white_paper_c11-609513.html (and the .pdf) | 504 | Cisco, 10GBASE-T reach by cable category (Cat6 55 m) |
| https://www3-realm.cisco.com/en/US/prod/collateral/switches/ps5718/ps10745/product_bulletin_c25-685526.pdf | 504 | Cisco 10GBASE-T reach table |
| https://www.timesmicrowave.com/wp-content/uploads/2022/06/lmr-400-datasheet.pdf | 403 | A 50 Ω RF cable spec (LMR-400) |
| https://www.amphenolrf.com/en-us/resources/faq/what-is-the-frequency-range-of-your-products/ | 403 | Amphenol RF frequency by series (BNC, TNC, N, SMA) |
| https://audio-technica.com/en-us/support/audio-solutions-question-of-the-week-what-is-the-maximum-length-for-a-usb-cable | 403 | A maker's USB length answer |
| https://support.beyerdynamic.com/hc/en-us/articles/201775071-Does-phantom-power-damage-dynamic-microphones-moving-coil-microphones-and-ribbon-microphones | 403 | A maker on phantom power and dynamic mics |
| https://helpdesk.primare.net/hc/en-us/articles/4410229888658-What-XLR-balanced-pin-assignment-does-Primare-use | 403 | A maker's written XLR pin 1, 2, 3 assignment |
| https://www.ar.ametek-cts.com/knowledge-center/resources/guide-to-rf-coaxial-connectors-and-cables/guide-to-rf-coaxial-connectors-and-cables | 404 | AR application note on RF connectors (TNC, BNC) |
| https://developerhelp.microchip.com/xwiki/bin/view/applications/ethernet/poe/terminology/ | Timeout | PoE types and classes |
| https://telecom-data.nexans.com/dam/jcr:97c90ddd-4a7a-4f6d-b28b-ea79e785ad85/AGINODE_WHITE_PAPER_POE_Part1-Introduction_EN_2024.pdf | Connection failed | PoE white paper |
| https://www.shure.com/en-US/docs/guide/SM58 | Page renders by script; no guide text returned | Shure's polarity statement (pin 2 vs pin 3) |
| https://tsp.esta.org/tsp/documents/published_docs.php (E1.11 and E1.27-1 PDFs) | Listing read; PDFs need a person to accept ESTA's EULA with cookies on | DMX cable impedance, connector and termination rules |
| Riedel Bolero user guide (not found on riedel.net; a copy at https://www.cpl.tech/wp-content/uploads/2018/11/Riedel-Bolero-User-Guide.pdf, whose authorization is unknown, was not opened) | Not opened | Riedel's 4-pin XLR headset pin-out |

## Research checks still open

1. What do Audinate's own pages at getdante.com say a Dante switch needs (gigabit, DSCP values and queues, EEE, IGMP), and does Audinate say a dedicated network is required or not?
2. What do ESTA's free E1.11 and E1.27-1 documents say about DMX cable impedance (110 or 120 ohms), 5-pin versus 3-pin connectors, the 32-device limit and termination?
3. Does any free source state in words that pin 3 of a 3-pin XLR is the cold (negative) leg, for example the text of a Shure or Sennheiser user guide?
4. Do RTS and Riedel manuals give the same 4-pin XLR headset pin-out as Clear-Com (pin 1 mic low, 2 mic high, 3 headphone low, 4 headphone high)?
5. Does a connector maker (Amphenol, Canare, Trompeter) say whether mating a 50 Ω BNC with a 75 Ω BNC damages either one?
6. What does a connector maker say a TNC is (threaded coupling, impedance, frequency limit)?
7. How far does a maker (Cisco, Siemon, Fluke) say 10GBASE-T runs on Cat6, and is Cat6A the minimum for 100 m?
8. What does a maker or a free IEEE page give for PoE power at the switch end for Types 1 to 4 (the 15.4, 30, 60 and 90 W figures)?
9. What do the FCC's own wireless microphone pages say today about licensing (Part 74) and the 600 MHz band?
10. What run lengths does a current maker document give for AES3 on 110 Ω cable and AES3id on 75 Ω coax?
11. Does a maker of 110 Ω AES/EBU cable (Canare, Belden) say why microphone cable is a poor choice for AES3?
12. Is there a maker statement on running ST 2110 over 10GBASE-T copper versus SFP fiber in a truck or plant?
13. Is USB 3.x's practical limit 2 m or 3 m, according to the USB-IF or a hub maker?
14. Does Sony's own 9-pin remote protocol document match Brainboxes' RS-422 DB9 pin-out?
15. Which cable categories does the Belden 5e sheet's "(200MHz)" label correspond to in the standard, given its note that values above 100 MHz are for information only?

## References

47 C.F.R. § 15.236 (2025). U.S. Government Publishing Office, Code of Federal Regulations, October 1, 2025 edition. https://www.govinfo.gov/content/pkg/CFR-2025-title47-vol1/pdf/CFR-2025-title47-vol1-sec15-236.pdf (retrieved October 26, 2026)

Belden. (2026). *5e LAN Category 5e CMR: Category 5e cable, 4 pair, U/UTP, CMR* [Technical data sheet, revision 0.10]. https://catalog.belden.com/techdata/EN/5eLANCategory5eCMR_techdata.pdf (retrieved October 26, 2026)

Biamp. (n.d.). *What to consider when working with USB*. Biamp Cornerstone. https://support.biamp.com/Biamp_Control/Troubleshooting/What_to_consider_when_working_with_USB (retrieved October 26, 2026)

Blackmagic Design. (n.d.-a). *ATEM* [Tech specs page]. https://www.blackmagicdesign.com/products/atem/techspecs (retrieved October 26, 2026)

Blackmagic Design. (n.d.-b). *HyperDeck Studio* [Tech specs page]. https://www.blackmagicdesign.com/products/hyperdeckstudio/techspecs (retrieved October 26, 2026)

Bohn, D. (2014). *Interfacing AES3 & S/PDIF* (RaneNote 149). Rane Corporation. https://www.ranecommercial.com/legacy/pdf/ranenotes/Interfacing_AES3_&_SPDIF.pdf (retrieved October 26, 2026)

Brainboxes. (2026a, February 19). *RS232, RS422 & RS485 standards*. Brainboxes Documentation. https://docs.brainboxes.com/explanation/serial-communications/rs232-rs422-rs485-standards (retrieved October 26, 2026)

Brainboxes. (2026b, March 13). *Sony RS-422 DB9 pinout*. Brainboxes Documentation. https://docs.brainboxes.com/reference/pinouts/sony-rs-422-pinout-db9 (retrieved October 26, 2026)

Cambrionix. (n.d.). *Maximum length of a USB cable*. Cambrionix Knowledge Base. https://knowledge.cambrionix.com/Content/Articles/USB/Maximum-Length-of-a-USB-Cable.htm (retrieved October 26, 2026)

Clear-Com. (2019a, April 6). *Matrix: What is opto-isolated mode on the Eclipse frame GPI inputs?* Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158851786 (retrieved October 26, 2026)

Clear-Com. (2019b, April 6). *Other: General information on MADI*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158847191 (retrieved October 26, 2026)

Clear-Com. (2019c, April 6). *Partyline: Camera CCU interfacing to Clear-Com party-line*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158840734 (retrieved October 26, 2026)

Clear-Com. (2019d, April 6). *Partyline: What is the 3-pin XLR line pin-out?* Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158784598 (retrieved October 26, 2026)

Clear-Com. (2019e, April 6). *Wireless: Can I connect a PTX-3 IFB transmitter directly to a Matrix +3 or Eclipse port output?* Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158809612 (retrieved October 26, 2026)

Clear-Com. (2022, April 5). *HelixNet powerline XLR pin-out*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/513933672 (retrieved October 26, 2026)

Clear-Com. (2024a, December 16). *General: What is the difference between an XLR connector wired for balanced audio and one wired for Clear-Com partyline intercom?* Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158808157 (retrieved October 26, 2026)

Clear-Com. (2024b, November 22). *Matrix: IFB audio, can I switch the PGM via GPI or panel key*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/3376381960 (retrieved October 26, 2026)

Clear-Com. (2024c, August 11). *Matrix: New install - Dante requirements*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/3142615056 (retrieved October 26, 2026)

Clear-Com. (2024d, April 2). *Matrix: What are the correct pin outs for balanced microphone input on a V-Series panel?* Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158850612 (retrieved October 26, 2026)

Clear-Com. (2025a, January 21). *Dante requirements and recommendations*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/220725331 (retrieved October 26, 2026)

Clear-Com. (2025b, March 13). *Matrix: Dante controller & EHX blocked by company firewall*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/3416293547 (retrieved October 26, 2026)

Clear-Com. (2025c, December 24). *Shure: How do I isolate Dante network*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/4298670090 (retrieved October 26, 2026)

Clear-Com. (2026a, April 28). *HelixNet DB25 relay pin-out*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/513933691 (retrieved October 26, 2026)

Clear-Com. (2026b, January 26). *Matrix: New install - Network requirements for AES67 audio*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/3142975501 (retrieved October 26, 2026)

Clear-Com. (2026c, June 4). *Matrix: What are the headset pin outs for 4 pin XLR, 5 pin XLR and 5 pin Din units*. Clear-Com Solution Finder. https://clear-com.atlassian.net/wiki/spaces/SF/pages/158808488 (retrieved October 26, 2026)

Eastern Acoustic Works. (n.d.). *Selecting network switches for Dante*. EAW Knowledge Base. https://design.eaw.com/en/knowledge/selecting-network-switches-for-dante (retrieved October 26, 2026)

ENTTEC. (2026, July 19). *Can I use a microphone cable for DMX?* ENTTEC Support. https://support.enttec.com/dmx/dmx-basics/can-i-use-a-microphone-cable-for-dmx (retrieved October 26, 2026)

Entertainment Services and Technology Association. (n.d.). *Published documents*. ESTA Technical Standards Program. https://tsp.esta.org/tsp/documents/published_docs.php (retrieved October 26, 2026)

Fluke Networks. (2016, February 9). *Cabling mistakes #1: Specify channel testing while installing permanent links*. https://www.flukenetworks.com/blog/cabling-chronicles/dumb-thing-1-specifying-channel-testing-when-installing-permanent-links (retrieved October 26, 2026)

Leerman, C. (2013, March 28). *Pro production: Understanding DMX lighting control* (p. 2). ProSoundWeb. https://www.prosoundweb.com/pro-production-understanding-dmx-lighting-control/2/ (retrieved October 26, 2026)

Macatee, S. (2002). *Grounding and shielding audio devices* (RaneNote 151, revised ed.). Rane Corporation. https://www.ranecommercial.com/legacy/pdf/ranenotes/Grounding_&_Shielding_of_Audio_Devices.pdf (retrieved October 26, 2026)

Mackie. (n.d.). *Balanced vs unbalanced connectors*. https://mackie.com/en/blog/all/balanced_vs_unbalanced_connectors.html (retrieved October 26, 2026)

Neutrik. (n.d.). *etherCON CAT6A cable connector self-termination, for insulation diameter > 1.1 mm, nickel plating (NE8MX6)*. https://www.neutrik.com/en/product/ne8mx6 (retrieved October 26, 2026)

Rane Corporation. (2015). *Sound system interconnection* (RaneNote 110). https://www.ranecommercial.com/legacy/pdf/ranenotes/Sound_System_Interconnection.pdf (retrieved October 26, 2026)

RME. (n.d.). *User's guide: ADI-648 multichannel audio digital interface*. https://www.rme-audio.de/downloads/adi648_e.pdf (retrieved October 26, 2026)

Rohde & Schwarz. (2015). *Guidance on selecting and handling coaxial RF connectors used with Rohde & Schwarz test equipment* (Application Note 1MA99_2e; M. Bailey, Author). https://scdn.rohde-schwarz.com/ur/pws/dl_downloads/dl_application/application_notes/1ma99/1MA99_2E_CoaxConnectorHandling.pdf (retrieved October 26, 2026)

Schoeps. (n.d.). *Phantom power P48/P12*. https://schoeps.de/en/knowledge/knowledge-base/technical-basics/phantom-power-p48p12.html (retrieved October 26, 2026)

Sennheiser. (n.d.). *Designing and configuring Dante network*. TC Bar network guide. https://docs.cloud.sennheiser.com/en-us/tc-bar/tc-bar/network-guide/designing-configuring-dante-network.html (retrieved October 26, 2026)

Sennheiser. (2026). *MK 4 & MK 8 studio microphones: Instruction manual* (02/2026). https://docs.cloud.sennheiser.com/en-us/mk-4-mk-8/mk-4-mk-8_instruction_manual_02_2026_en.pdf (retrieved October 26, 2026)

Shure. (2021, June 17). *Configuring a network switch for Shure devices and Dante/AES67*. Shure Service. https://service.shure.com/articles/en_US/Knowledge/Dante-Switch-Configuration (retrieved October 26, 2026)

Shure. (n.d.). *UA825: Coaxial cable*. https://www.shure.com/en-US/products/accessories/ua825 (retrieved October 26, 2026)

Siemon. (n.d.-a). *Category 6A S/FTP cable: International* [Spec sheet]. https://files.siemon.com/en/specsheet/siemon-category-6a-s-ftp-cable-international_spec-sheet.pdf (retrieved October 26, 2026)

Siemon. (n.d.-b). *Category 6A UTP cable: International* [Spec sheet]. https://files.siemon.com/en/specsheet/siemon-category-6a-utp-lsoh-international_spec-sheet.pdf (retrieved October 26, 2026)

Siemon. (n.d.-c). *Premium 6 UTP cable* [Spec sheet]. https://files.siemon.com/en/specsheet/siemon-premium_6_utp_cable_spec-sheet.pdf (retrieved October 26, 2026)

Symetrix. (n.d.). *Dante requirements*. Symetrix Composer Help. https://composer-docs.symetrix.co/networking/dante-audio/Dante_Requirements.html (retrieved October 26, 2026)

Texas Instruments. (2018). *TPS2373 high-power PoE PD interface with advanced startup* (SLUSCD1C, revised November 2018) [Data sheet]. https://www.ti.com/lit/ds/symlink/tps2373.pdf (retrieved October 26, 2026)
