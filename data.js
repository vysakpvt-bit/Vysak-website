/* =========================================================
   VYSAK — EVENT DATA
   ---------------------------------------------------------
   To ADD an event: copy one { ... } block, paste it,
   change "id" (lowercase, no spaces), name, tagline, info.
   To ADD a video: put the file in the assets folder and
   write its path in "video", e.g. "assets/weddings.mp4"
   ========================================================= */

const EVENTS = [
  {
    id: "weddings",
    name: "Weddings",
    tagline: "Traditional, destination and luxury weddings",
    video: "",
    image: "assets/wedding.jpg",
    info: [
      "Complete wedding planning and on-ground execution",
      "Venue sourcing, mandap and stage decor",
      "Catering, hospitality and guest management",
      "Sangeet, haldi, reception and after-party production"
    ]
  },
  {
    id: "corporate",
    name: "Corporate Events",
    tagline: "Conferences, offsites, award nights and team events",
    video: "",
    image: "assets/corporate.jpg",
    info: [
      "Annual days, award nights and town halls",
      "Conferences, seminars and dealer meets",
      "Offsites, team-building and retreats",
      "Stage, sound, LED, branding and hospitality"
    ]
  },
  {
    id: "concerts",
    name: "Concerts & Live Shows",
    tagline: "Artist-led shows, DJ nights and live music",
    video: "",
    image: "assets/concert.jpg",
    info: [
      "Artist booking and talent coordination",
      "Stage design, sound and lighting rigs",
      "Ticketing, entry and crowd management",
      "Permissions, security and medical support"
    ]
  },
  {
    id: "birthdays",
    name: "Birthdays & Anniversaries",
    tagline: "Intimate celebrations and milestone parties",
    video: "",
    image: "assets/anniversary.jpg",
    info: [
      "Theme design and custom decor",
      "Cake, catering and entertainment",
      "Kids' parties and milestone birthdays",
      "Photography and video coverage"
    ]
  },
  {
    id: "launches",
    name: "Product Launches",
    tagline: "Reveals, press events and brand activations",
    video: "",
    image: "assets/launch.jpg",
    info: [
      "Concept, stage design and reveal moments",
      "Press, influencer and guest management",
      "AV, lighting and content playback",
      "Mall, hotel and outdoor activations"
    ]
  },
  {
    id: "exhibitions",
    name: "Exhibitions & Expos",
    tagline: "Stalls, pavilions and trade shows",
    video: "",
    image: "assets/expo.jpg",
    info: [
      "Stall design and fabrication",
      "Hall layout and visitor flow planning",
      "Power, signage and vendor coordination",
      "On-site crew for the full show duration"
    ]
  },
  {
    id: "college-fests",
    name: "College Fests",
    tagline: "Cultural nights, pro-shows and campus events",
    video: "",
    image: "assets/college.jpg",
    info: [
      "Pro-show and celebrity night production",
      "Stage, trussing, sound and lighting",
      "Sponsorship and branding integration",
      "Campus-wide permissions and logistics"
    ]
  },
  {
    id: "religious",
    name: "Religious & Festival Events",
    tagline: "Pujas, festival celebrations and community events",
    video: "",
    image: "assets/religion.jpg",
    info: [
      "Mandap, pandal and decor arrangements",
      "Priest, samagri and ritual coordination",
      "Prasadam, catering and crowd flow",
      "Festival lighting and sound"
    ]
  },
  {
    id: "sports",
    name: "Sports Events",
    tagline: "Tournaments, marathons and sports meets",
    video: "",
    image: "assets/sports event.jpg",
    info: [
      "Ground setup, tracks and arena management",
      "Registration, timing and scoring support",
      "Medical, hydration and safety teams",
      "Medals, ceremonies and broadcast setup"
    ]
  },
  {
    id: "private-parties",
    name: "Private Parties",
    tagline: "Sangeets, cocktail nights and house parties",
    video: "",
    image: "assets/private party.jpg",
    info: [
      "Venue styling and lighting",
      "DJ, live music and entertainment",
      "Bar, catering and service staff",
      "Guest list and valet coordination"
    ]
  },
  {
    id: "government",
    name: "Government & Public Events",
    tagline: "Civic functions, inaugurations and public gatherings",
    video: "",
    image: "assets/government event.jpg",
    info: [
      "Stage, barricading and seating plans",
      "Public address and LED wall systems",
      "Protocol, VIP and security coordination",
      "Large-scale crowd and traffic planning"
    ]
  },
  {
    id: "destination",
    name: "Destination Events",
    tagline: "Outstation celebrations anywhere in India",
    video: "",
    image: "assets/destination event.jpg",
    info: [
      "Resort and venue sourcing across India",
      "Travel, stay and guest itineraries",
      "Full crew mobilisation to the location",
      "Multi-day event scheduling and execution"
    ]
  }
];
