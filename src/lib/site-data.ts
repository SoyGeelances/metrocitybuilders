export type Project = {
  slug: string;
  name: string;
  category: "Medical" | "Residential" | "Mixed-Use" | "Senior Living";
  location: string;
  status: "Current" | "Completed";
  image: string;
  gallery?: string[];
  summary: string;
  description: string;
  facts: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "citizens-medical-plaza",
    name: "Citizens Medical Plaza",
    category: "Medical",
    location: "Monterey Park, CA",
    status: "Current",
    image: "/images/citizens-medical.jpg",
    summary:
      "A state-of-the-art medical center with atrium lobby, surgical suites and a Japanese Zen courtyard.",
    description:
      "In the center of Monterey Park, with adjacent to 10 freeway and nearby Hospital, this state-of-the-art medical center feature numerous amenities and convenience for physicians and staff alike. Beautiful contemporary architecture with Atrium Lobby. High image office building for marketing strategy. It's having ambulance loading ramp, design & build to for clinical and surgical center. Outdoor sitting area with Japanese Zen Landscape.",
    facts: [
      { label: "Typology", value: "Medical office & surgical center" },
      { label: "Access", value: "Adjacent to the 10 Freeway" },
      { label: "Signature", value: "Atrium lobby, Zen landscape courtyard" },
    ],
  },
  {
    slug: "the-one-luxury-condominiums",
    name: "The One Luxury Condominiums",
    category: "Mixed-Use",
    location: "Valley Blvd, San Gabriel Valley, CA",
    status: "Current",
    image: "/images/the-one.webp",
    summary: "81 residences above 13,000 square feet of ground-floor retail on Valley Boulevard.",
    description:
      "A new, 81-unit, 80,000-square-foot mixed-used residential building in famous Valley Blvd neighborhood. The One also includes more than 13,000 square feet of ground floor retail. The One is in walking distance to some of major attractions, including the Hilton, Sheraton, Hyatt, Focus Shopping Plaza and more. Catering to urbanites and creative professionals, the boutique community offers both gateway access to San Gabriel Valley and a charming neighborhood of its own.",
    facts: [
      { label: "Residences", value: "81 units" },
      { label: "Scale", value: "80,000 sq ft" },
      { label: "Retail", value: "13,000+ sq ft ground floor" },
    ],
  },
  {
    slug: "lido-villa-by-the-beach",
    name: "Lido Villa by the Beach",
    category: "Residential",
    location: "Santa Monica, CA",
    status: "Completed",
    image: "/images/lido-villa.jpg",
    summary:
      "Contemporary townhomes in the heart of the Santa Monica Media District, blocks from the beach.",
    description:
      "Welcome to Lido villas, where Brand New contemporary townhomes converge to create the ideal Santa Monica living space. The site is in the heart of the Santa Monica Media district and just a few blocks from beach, the new Expo line and Bergamot Station. The property is immediately surrounded by the employment centers of the Colorado Center, Water Garden office complex, Sony Music, MTV, Hulu, CBS Television, Lionsgate Entertainment, and numerous other major production and entertainment companies. Additionally, the UCLA and St John's medical facilities are within walking distance to the development.",
    facts: [
      { label: "Typology", value: "Contemporary townhomes" },
      { label: "Context", value: "Media District, Bergamot Station" },
      { label: "Transit", value: "Steps from the Expo line" },
    ],
  },
  {
    slug: "camino-gardens",
    name: "Camino Gardens",
    category: "Residential",
    location: "Walnut, CA",
    status: "Completed",
    image: "/images/camino-gardens.jpg",
    summary: "Detached single-family homes with no Mello-Roos, planned around top-rated schools.",
    description:
      "Camino Gardens is a community of new detached single-family homes for sale with no Mello-Roos, located in Walnut, CA. Providing contemporary open floor plan designs, private onsite amenities, and proximity to top rated schools and popular shopping and dining options, as well as major freeways allowing easy commutes to Los Angeles, Camino Gardens is a comfortable place to live for families at any stage.",
    facts: [
      { label: "Typology", value: "Detached single-family homes" },
      { label: "Ownership", value: "No Mello-Roos" },
      { label: "Plans", value: "Contemporary open floor plans" },
    ],
  },
  {
    slug: "claremont-estate",
    name: "Claremont Estate by Old Town Pasadena",
    category: "Residential",
    location: "Pasadena, CA",
    status: "Completed",
    image: "/images/claremont-estate.jpg",
    summary: "A private collection of 2–3 bedroom townhomes minutes from Old Town Pasadena.",
    description:
      "Experience the ultimate Old Town lifestyle at our new collection of townhomes in Pasadena. This tranquil, private community has spacious 2-3 bedroom, 2.5 bath townhomes with open and airy floor plans, sophisticated finishes, and gourmet kitchens. It's located near Old Town Pasadena and conveniently adjacent to Park and School. Old Town Pasadena has lots of boutique shopping, a farmer's market, monthly art walk, and plenty of dining. Discover the best of new construction, a perfect location, and abundant possibilities at Claremont Estate brought to you by Metro City Builders.",
    facts: [
      { label: "Residences", value: "2–3 bed, 2.5 bath townhomes" },
      { label: "Finishes", value: "Gourmet kitchens, open plans" },
      { label: "Context", value: "Adjacent to park and school" },
    ],
  },
  {
    slug: "hillcrest-gated-community",
    name: "Hillcrest Gated Community",
    category: "Residential",
    location: "Walnut, CA",
    status: "Completed",
    image: "/images/hillcrest.jpg",
    summary:
      "Hillside single-family residences behind private gated entries, high above the City of Walnut.",
    description:
      "Perched on a scenic hillside high above City of Walnut, Porter Ranch has elevated the master planned living experience to a new level of excellence. This serene, upscale community contains a variety of single-family residences. Each Porter Ranch village includes an array of exclusive features and is privately sequestered behind gated entries.",
    facts: [
      { label: "Typology", value: "Master-planned single-family" },
      { label: "Setting", value: "Scenic hillside" },
      { label: "Access", value: "Private gated entries" },
    ],
  },
  {
    slug: "preserve-55-senior-community",
    name: "Preserve 55+ Senior Community",
    category: "Senior Living",
    location: "Jurupa Valley, CA",
    status: "Current",
    image: "/images/preserve-55.jpg",
    summary: "A gated 55+ community across 10 acres of trails, vistas and outdoor amenities.",
    description:
      "In beautiful Jurupa Valley and conveniently close to it all, discover the gated, 55+ community of Preserve at The Ranch. Set on 10 acres with an extensive network of walking trails, lookout points to scenic vistas, pocket parks, dog parks, and an array of impressive outdoor amenities, The Preserve inspires an active lifestyle under the blue skies of Southern California. At the heart of the gated community is the planned 4,900 square foot recreation center with a pool, spa, cabanas, outdoor kitchen and fireplace, bocce and pickleball courts, and more. And when you find yourself in a metropolitan mood, quick access to the 60 makes it easy to visit Los Angeles for work or play.",
    facts: [
      { label: "Site", value: "10 acres" },
      { label: "Recreation center", value: "4,900 sq ft planned" },
      { label: "Amenities", value: "Pool, spa, bocce, pickleball" },
    ],
  },
  {
    slug: "harbor-view-luxury-condominiums",
    name: "Harbor View Luxury Condominiums",
    category: "Residential",
    location: "San Pedro, CA",
    status: "Current",
    image: "/images/harbor-view.jpg",
    summary:
      "Waterfront condominiums beside the new San Pedro Public Market and a 1,300-foot boardwalk.",
    description:
      "Take a walk on the waterside. Stroll the 1,300-foot waterfront boardwalk, take in the view from your balcony, entertain friends in the stunning glazed clubhouse. Savor sunsets. Enjoy life in the exclusive, intimate, San Pedro Beach, just 5 miles from Rancho Palos Verdes and nestled next to the new developed San Pedro Public Market. Coastal living brings the best to this exclusive location on South Bay. This is Harbor View Luxury Condominiums.",
    facts: [
      { label: "Waterfront", value: "1,300-foot boardwalk" },
      { label: "Amenity", value: "Glazed clubhouse" },
      { label: "Location", value: "5 miles from Rancho Palos Verdes" },
    ],
  },
  {
    slug: "allied-healthcare-city",
    name: "Allied Healthcare City",
    category: "Medical",
    location: "Chinatown, Los Angeles, CA",
    status: "Current",
    image: "/images/allied-healthcare.jpg",
    summary:
      "Adaptive redevelopment of the oldest French Hospital into a multi-functional medical district.",
    description:
      "Redevelopment the oldest French Hospital to a multi functional Medical Facility including Clinical office, Senior living, multifamily and shopping center in China Town Los Angeles.",
    facts: [
      { label: "Approach", value: "Adaptive redevelopment" },
      { label: "Program", value: "Clinical office, senior living, multifamily" },
      { label: "Also includes", value: "Neighborhood shopping center" },
    ],
  },
  {
    slug: "allied-supercenter-alhambra",
    name: "Allied Supercenter (Alhambra)",
    category: "Medical",
    location: "Alhambra, CA",
    status: "Current",
    image: "/images/allied-supercenter.jpg",
    summary:
      "Citizen Medical Plaza Phase 2.0 — a second multifunctional medical facility across the street.",
    description:
      "Following the success of Citizen Medical Plaza, we received many inquiries for additional medical facilities in the area. In response, we decided to develop a new multifunctional medical facility right across the street—introducing Citizen Medical Plaza Phase 2.0 in Alhambra.",
    facts: [
      { label: "Phase", value: "Citizen Medical Plaza 2.0" },
      { label: "Typology", value: "Multifunctional medical facility" },
      { label: "Origin", value: "Demand from Citizen Medical Plaza" },
    ],
  },
];

export const categories = ["All", "Medical", "Mixed-Use", "Residential", "Senior Living"] as const;

export type Leader = {
  name: string;
  title: string;
  image?: string;
};

export const leaders: Leader[] = [
  {
    name: "Carol Gao",
    title: "Project Director, Vice President",
    image: "/images/carol-gao.webp",
  },
  {
    name: "Michelle Hong Li",
    title: "Director of Sales, Vice President",
    image: "/images/michelle-li.png",
  },
  {
    name: "Eric Shehata",
    title: "Director of Construction",
    image: "/images/eric-shehata.jpg",
  },
  {
    name: "Alejandro J. Ortiz",
    title: "Director of Design",
    image: "/images/alejandro-ortiz.webp",
  },
];

export const contact = {
  address: "1211 Center Court Dr #208, Covina CA 91724",
  email: "info@metrocitybuilders.com",
};
