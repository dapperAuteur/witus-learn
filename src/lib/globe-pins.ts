// Curated "where our courses take place" pins for the explore globe (plans/45). Each pin is a real
// place a course is about, linked to that course by slug, with a `tier` that drives semantic zoom:
//
//   tier 1  major hub, shown even when zoomed all the way out
//   tier 2  shown at medium zoom
//   tier 3  detail, shown only when zoomed in
//
// Coordinates are [lat, lng] of the well-known place, several reused verbatim from the (already
// verified) How the Tools Travelled lesson map. The page filters these to the courses the TENANT
// actually publishes, so a pin never links to a course a school does not have. No place, date, or
// coordinate here is invented: these are ordinary city/site coordinates, and each pin only asserts
// that the named course is about that place.

export interface GlobePin {
  id: string;
  lat: number;
  lng: number;
  title: string;
  courseSlug: string;
  tier: 1 | 2 | 3;
  /** Optional year this place enters the documented record (a founding, or a key event). Drives the
   *  globe's year brush; a pin with no year always shows. */
  year?: number;
}

export const GLOBE_PINS: GlobePin[] = [
  // ── The route series and its US sites ──
  { id: "dc", lat: 38.9072, lng: -77.0369, title: "Washington, D.C.", courseSlug: "dc-where-the-instrument-was-blessed", tier: 1, year: 1954 },
  { id: "indianapolis", lat: 39.7684, lng: -86.1581, title: "Indianapolis, Indiana", courseSlug: "indiana-avenue-a-district-and-what-replaced-it", tier: 1 },
  { id: "baltimore", lat: 39.2904, lng: -76.6122, title: "Baltimore, Maryland", courseSlug: "baltimore-the-whole-chain", tier: 2 },
  { id: "pittsburgh", lat: 40.4406, lng: -79.9959, title: "Pittsburgh, Pennsylvania", courseSlug: "pittsburgh-where-the-playbook-was-written", tier: 2, year: 1956 },
  { id: "philadelphia", lat: 39.9526, lng: -75.1652, title: "Philadelphia, Pennsylvania", courseSlug: "philadelphia-the-university-and-the-block", tier: 2 },
  { id: "seattle", lat: 47.6062, lng: -122.3321, title: "Seattle, Washington", courseSlug: "seattle-the-modern-bookend", tier: 2 },

  // ── What They Built: the business districts ──
  { id: "durham", lat: 35.994, lng: -78.8986, title: "Durham, North Carolina", courseSlug: "what-they-built", tier: 3, year: 1898 },
  { id: "richmond", lat: 37.5407, lng: -77.436, title: "Richmond, Virginia", courseSlug: "what-they-built", tier: 3, year: 1888 },
  { id: "atlanta", lat: 33.749, lng: -84.388, title: "Atlanta, Georgia", courseSlug: "what-they-built", tier: 3, year: 1905 },
  { id: "tulsa", lat: 36.154, lng: -95.9928, title: "Tulsa, Oklahoma (Greenwood)", courseSlug: "what-they-built", tier: 2, year: 1906 },
  { id: "chicago", lat: 41.8781, lng: -87.6298, title: "Chicago, Illinois (Bronzeville)", courseSlug: "what-they-built", tier: 3 },

  // ── The Great Migration ──
  { id: "mississippi", lat: 32.3547, lng: -89.3985, title: "Mississippi, the Great Migration's source", courseSlug: "great-migration-and-the-world", tier: 3, year: 1916 },

  // ── The labor series, by country ──
  { id: "brazil", lat: -15.7939, lng: -47.8828, title: "Brazil", courseSlug: "labor-brazil", tier: 1 },
  { id: "chile", lat: -33.4489, lng: -70.6693, title: "Chile", courseSlug: "labor-chile", tier: 2 },
  { id: "mexico", lat: 19.4326, lng: -99.1332, title: "Mexico", courseSlug: "labor-mexico", tier: 2 },
  { id: "germany", lat: 52.52, lng: 13.405, title: "Germany", courseSlug: "labor-germany", tier: 1 },
  { id: "poland", lat: 52.2297, lng: 21.0122, title: "Poland", courseSlug: "labor-poland", tier: 2 },
  { id: "sweden", lat: 59.3293, lng: 18.0686, title: "Sweden and Denmark (the Nordic model)", courseSlug: "sweden-denmark-nordic-model", tier: 2 },
  { id: "india", lat: 28.6139, lng: 77.209, title: "India", courseSlug: "labor-india", tier: 1 },
  { id: "south-korea", lat: 37.5665, lng: 126.978, title: "South Korea", courseSlug: "labor-south-korea", tier: 2 },
  { id: "south-africa", lat: -26.2041, lng: 28.0473, title: "South Africa", courseSlug: "labor-south-africa", tier: 1 },

  // ── Precolonial and Pan-African history ──
  { id: "timbuktu", lat: 16.7666, lng: -3.0026, title: "Timbuktu, Mali", courseSlug: "africa-before-colonization", tier: 1 },
  { id: "great-zimbabwe", lat: -20.2674, lng: 30.9337, title: "Great Zimbabwe", courseSlug: "africa-before-colonization", tier: 3 },
  { id: "accra", lat: 5.6037, lng: -0.187, title: "Accra, Ghana", courseSlug: "pan-africanism", tier: 2 },
  { id: "teotihuacan", lat: 19.6925, lng: -98.8438, title: "Teotihuacan, Mesoamerica", courseSlug: "precolumbian-mesoamerica", tier: 2 },
  // ── Here Be Dragons (plans/58): where a claim was made, and where the evidence turned out to be ──
  // Each `year` is the year that MATTERS for the pin, and where those differ the description says so
  // rather than letting the brush imply a discovery date. Lyme Regis is dated to Anning's finds, not
  // to when the papers credited her; the Beijing pin is dated to the documented drugstore collection,
  // not to the older practice it interrupted.
  { id: "hbd-lyme-regis", lat: 50.7256, lng: -2.9366, title: "Lyme Regis, England", courseSlug: "deep-time-and-the-dinosaur-renaissance", tier: 2, year: 1811 },
  { id: "hbd-cardiff-ny", lat: 42.83, lng: -76.15, title: "Cardiff, New York", courseSlug: "giants-dragons-and-the-bones", tier: 3, year: 1869 },
  { id: "hbd-claverack", lat: 42.22, lng: -73.73, title: "Claverack, New York", courseSlug: "giants-dragons-and-the-bones", tier: 3, year: 1705 },
  { id: "hbd-zhoukoudian", lat: 39.6858, lng: 115.9236, title: "Zhoukoudian, near Beijing", courseSlug: "giants-dragons-and-the-bones", tier: 2, year: 1921 },
  { id: "hbd-chicxulub", lat: 21.4, lng: -89.5167, title: "Chicxulub crater, Yucatan", courseSlug: "deep-time-and-the-dinosaur-renaissance", tier: 2, year: 1980 },
  { id: "hbd-uppsala", lat: 59.8586, lng: 17.6389, title: "Uppsala, Sweden", courseSlug: "monsters-at-the-edge-of-the-map", tier: 3, year: 1539 },
  { id: "hbd-hereford", lat: 52.0567, lng: -2.7151, title: "Hereford, England", courseSlug: "monsters-at-the-edge-of-the-map", tier: 2, year: 1300 },
];