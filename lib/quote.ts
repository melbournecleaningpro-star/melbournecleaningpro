export const PAGE_PATH = "/quote/";

/**
 * Where quote requests go.
 *
 * The site is a static export with no backend. By default a request is handed
 * to the visitor's own email app (mailto:), and the confirmation says it's
 * ready to send, never that it has been sent.
 *
 * To post requests to a hosted form service instead, set
 * NEXT_PUBLIC_QUOTE_ENDPOINT at build time to that service's public submit URL
 * (it receives a JSON POST). Keep any secret keys with the provider, never
 * here: anything NEXT_PUBLIC_ is visible in the browser. If you do this, also
 * update the privacy policy (components/privacy/Policy.tsx).
 */
export const QUOTE_ENDPOINT = process.env.NEXT_PUBLIC_QUOTE_ENDPOINT ?? "";

export type ServiceId =
  | "house"
  | "end-of-lease"
  | "commercial"
  | "deep"
  | "office"
  | "airbnb"
  | "move-in"
  | "post-construction"
  | "spring"
  | "window"
  | "carpet"
  | "upholstery"
  | "oven"
  | "mattress"
  | "tile"
  | "blinds"
  | "pressure"
  | "ndis"
  | "not-sure";

type Frequency = "full" | "occasional" | "none";

export type ServiceOption = {
  id: ServiceId;
  name: string;
  line: string;
  path?: string;
  /** full = recurring options, occasional = one-off / as needed, none = one-off service (field hidden). */
  frequency: Frequency;
  areas: "home" | "work" | "none";
};

/** Services actually offered, each with its own page (house cleaning excepted). */
export const serviceOptions: ServiceOption[] = [
  { id: "house", name: "House Cleaning", line: "Regular or one-off cleaning for your home.", path: "/services/house-cleaning/", frequency: "full", areas: "home" },
  { id: "end-of-lease", name: "End of Lease Cleaning", line: "Preparing a rental for handover.", path: "/services/end-of-lease-cleaning/", frequency: "none", areas: "home" },
  { id: "deep", name: "Deep Cleaning", line: "A more detailed clean where it's needed.", path: "/services/deep-cleaning/", frequency: "none", areas: "home" },
  { id: "move-in", name: "Move-In Cleaning", line: "A clean home before you unpack.", path: "/services/move-in-cleaning/", frequency: "none", areas: "home" },
  { id: "spring", name: "Spring Cleaning", line: "A seasonal whole-home refresh.", path: "/services/spring-cleaning/", frequency: "none", areas: "home" },
  { id: "airbnb", name: "Airbnb Cleaning", line: "Turnover cleaning between guest stays.", path: "/services/airbnb-cleaning/", frequency: "full", areas: "home" },
  { id: "post-construction", name: "Post-Construction Cleaning", line: "Dust and residue after building work.", path: "/services/post-construction-cleaning/", frequency: "none", areas: "home" },
  { id: "window", name: "Window Cleaning", line: "Accessible glass, frames and sills.", path: "/services/window-cleaning/", frequency: "occasional", areas: "none" },
  { id: "carpet", name: "Carpet Cleaning", line: "Refreshing carpeted rooms and walkways.", path: "/services/carpet-cleaning/", frequency: "occasional", areas: "none" },
  { id: "upholstery", name: "Upholstery Cleaning", line: "Sofas, armchairs and fabric furniture.", path: "/services/upholstery-cleaning/", frequency: "occasional", areas: "none" },
  { id: "oven", name: "Oven Cleaning", line: "Grease and baked-on residue in the oven.", path: "/services/oven-cleaning/", frequency: "occasional", areas: "none" },
  { id: "mattress", name: "Mattress Cleaning", line: "Refreshing well-used mattresses.", path: "/services/mattress-cleaning/", frequency: "occasional", areas: "none" },
  { id: "tile", name: "Tile & Grout Cleaning", line: "Tiled surfaces and grout lines.", path: "/services/tile-and-grout-cleaning/", frequency: "occasional", areas: "none" },
  { id: "blinds", name: "Blind Cleaning", line: "Venetian, vertical and roller blinds.", path: "/services/blind-cleaning/", frequency: "occasional", areas: "none" },
  { id: "ndis", name: "NDIS Cleaning", line: "Household cleaning arranged around a routine.", path: "/services/ndis-cleaning/", frequency: "full", areas: "home" },
  { id: "pressure", name: "Pressure Cleaning", line: "Driveways, paths, patios and outdoor surfaces.", path: "/services/pressure-cleaning/", frequency: "occasional", areas: "none" },
  { id: "office", name: "Office Cleaning", line: "Scheduled cleaning for workplaces.", path: "/services/office-cleaning/", frequency: "full", areas: "work" },
  { id: "commercial", name: "Commercial Cleaning", line: "Shops, studios and business premises.", path: "/services/commercial-cleaning/", frequency: "full", areas: "work" },
  { id: "not-sure", name: "Not Sure", line: "Describe the job and we'll suggest a service.", frequency: "full", areas: "home" },
];

export const propertyTypes = ["House", "Apartment / Unit", "Townhouse", "Office", "Commercial Property", "Airbnb / Short-Stay", "Other"];
export const bedroomOptions = ["Studio", "1", "2", "3", "4", "5+", "Not applicable"];
export const bathroomOptions = ["1", "2", "3", "4+", "Not applicable"];
export const sizeOptions = ["Small", "Medium", "Large", "Not sure"];

export const frequencyOptions: Record<Exclude<Frequency, "none">, string[]> = {
  full: ["One-off", "Weekly", "Fortnightly", "Monthly", "As needed", "Not sure"],
  occasional: ["One-off", "As needed", "Not sure"],
};

export const timeOptions = ["Morning", "Afternoon", "Flexible"];

export const areaOptions = {
  home: ["Kitchen", "Bathrooms", "Bedrooms", "Living areas", "Floors", "Windows", "Carpet", "Whole property"],
  work: ["Office / work areas", "Kitchen", "Bathrooms", "Floors", "Windows", "Carpet", "Whole property"],
};

export const contactMethods = ["Email", "Phone", "Either"];

/** One short follow-up question for services that need it. Office uses its own frequency label instead. */
export const serviceQuestions: Partial<Record<ServiceId, { question: string; options: string[] }>> = {
  "end-of-lease": { question: "Is the property being prepared for a rental handover?", options: ["Yes", "No", "Not sure"] },
  airbnb: { question: "Is this cleaning between guest stays?", options: ["Yes", "No", "Not sure"] },
  window: { question: "Are the windows easily accessible?", options: ["Yes, easy to reach", "Some are hard to reach", "Not sure"] },
  carpet: { question: "Approximately how many rooms have carpet?", options: ["1", "2", "3", "4", "5+", "Not sure"] },
  oven: { question: "What type of oven is it?", options: ["Single wall oven", "Double oven", "Freestanding oven / range", "Not sure"] },
  mattress: { question: "How many mattresses would you like cleaned?", options: ["1", "2", "3", "4+", "Not sure"] },
  tile: { question: "Which tiled areas would you like cleaned?", options: ["Bathroom", "Kitchen", "Floors", "Laundry", "A mix of areas", "Not sure"] },
  blinds: { question: "What type of blinds do you have?", options: ["Venetian", "Vertical", "Roller", "A mix", "Not sure"] },
  ndis: { question: "Who is arranging the cleaning?", options: ["The person receiving it", "A family member", "A carer", "A support coordinator", "Someone else"] },
  pressure: { question: "Which outdoor areas would you like cleaned?", options: ["Driveway", "Paths", "Patio / outdoor area", "A mix of areas", "Not sure"] },
  upholstery: { question: "What type of furniture would you like cleaned?", options: ["Sofa / couch", "Armchairs", "Dining chairs", "Ottoman", "A mix of pieces", "Not sure"] },
};

export const steps = ["Service", "Property", "Cleaning Details", "Your Details", "Review"];
