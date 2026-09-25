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

/** Services actually offered. Upholstery has no page, so it isn't listed. */
export const serviceOptions: ServiceOption[] = [
  { id: "house", name: "House Cleaning", line: "Regular or one-off cleaning for your home.", frequency: "full", areas: "home" },
  { id: "end-of-lease", name: "End of Lease Cleaning", line: "Preparing a rental for handover.", path: "/services/end-of-lease-cleaning/", frequency: "none", areas: "home" },
  { id: "deep", name: "Deep Cleaning", line: "A more detailed clean where it's needed.", path: "/services/deep-cleaning/", frequency: "none", areas: "home" },
  { id: "move-in", name: "Move-In Cleaning", line: "A clean home before you unpack.", path: "/services/move-in-cleaning/", frequency: "none", areas: "home" },
  { id: "spring", name: "Spring Cleaning", line: "A seasonal whole-home refresh.", path: "/services/spring-cleaning/", frequency: "none", areas: "home" },
  { id: "airbnb", name: "Airbnb Cleaning", line: "Turnover cleaning between guest stays.", path: "/services/airbnb-cleaning/", frequency: "full", areas: "home" },
  { id: "post-construction", name: "Post-Construction Cleaning", line: "Dust and residue after building work.", path: "/services/post-construction-cleaning/", frequency: "none", areas: "home" },
  { id: "window", name: "Window Cleaning", line: "Accessible glass, frames and sills.", path: "/services/window-cleaning/", frequency: "occasional", areas: "none" },
  { id: "carpet", name: "Carpet Cleaning", line: "Refreshing carpeted rooms and walkways.", path: "/services/carpet-cleaning/", frequency: "occasional", areas: "none" },
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
};

export const steps = ["Service", "Property", "Cleaning Details", "Your Details", "Review"];
