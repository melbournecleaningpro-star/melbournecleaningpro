import type { Faq } from "./content";
import { isLiveRoute } from "./site";

export const PAGE_PATH = "/services/";

export type HubImage = { src: string; alt: string; width: number; height: number };

export type HubService = {
  id: string;
  name: string;
  path: string;
  description: string;
  image?: HubImage;
};

const img = (src: string, alt: string): HubImage => ({ src: `/images/${src}`, alt, width: 1280, height: 960 });

const service = (s: HubService) => s;

export const services = {
  house: service({
    id: "house",
    name: "House Cleaning",
    path: "/services/house-cleaning/",
    description: "Regular and one-off cleaning for Melbourne homes.",
  }),
  deep: service({
    id: "deep",
    name: "Deep Cleaning",
    path: "/services/deep-cleaning/",
    description: "A more detailed clean for areas that need extra attention.",
    image: img("deep-cleaning-melbourne-kitchen.webp", "Kitchen after a detailed deep clean"),
  }),
  spring: service({
    id: "spring",
    name: "Spring Cleaning",
    path: "/services/spring-cleaning/",
    description: "A seasonal opportunity to refresh the home and tackle overlooked areas.",
    image: img("spring-cleaning-melbourne-living.webp", "Bright living room refreshed for spring"),
  }),
  endOfLease: service({
    id: "end-of-lease",
    name: "End of Lease Cleaning",
    path: "/services/end-of-lease-cleaning/",
    description: "Cleaning support for tenants and properties approaching handover.",
    image: img("end-of-lease-cleaning-melbourne.webp", "Empty rental property cleaned for handover"),
  }),
  moveIn: service({
    id: "move-in",
    name: "Move-In Cleaning",
    path: "/services/move-in-cleaning/",
    description: "Prepare a new home or property before unpacking.",
    image: img("move-in-cleaning-melbourne-empty-home.webp", "Empty home cleaned and ready for moving in"),
  }),
  postConstruction: service({
    id: "post-construction",
    name: "Post-Construction Cleaning",
    path: "/services/post-construction-cleaning/",
    description: "Removing dust and residue after building or renovation work, before the space is used.",
    image: img("post-construction-cleaning-melbourne-ready-space.webp", "Renovated room cleaned after building work"),
  }),
  airbnb: service({
    id: "airbnb",
    name: "Airbnb Cleaning",
    path: "/services/airbnb-cleaning/",
    description: "Cleaning for short-stay properties between guest stays.",
    image: img("airbnb-cleaning-melbourne-bedroom.webp", "Short-stay bedroom made up for the next guest"),
  }),
  window: service({
    id: "window",
    name: "Window Cleaning",
    path: "/services/window-cleaning/",
    description: "Professional cleaning for suitable residential and commercial windows.",
    image: img("window-cleaning-melbourne-living.webp", "Clear floor-to-ceiling living room windows"),
  }),
  carpet: service({
    id: "carpet",
    name: "Carpet Cleaning",
    path: "/services/carpet-cleaning/",
    description: "Professional cleaning for suitable carpeted areas.",
    image: img("carpet-cleaning-melbourne-living.webp", "Carpeted living room with fresh vacuum lines"),
  }),
  upholstery: service({
    id: "upholstery",
    name: "Upholstery Cleaning",
    path: "/services/upholstery-cleaning/",
    description: "Cleaning for sofas, armchairs and other suitable fabric furniture.",
    image: img("upholstery-cleaning-melbourne-sofa.webp", "Fabric sofa with cushions in a bright living room"),
  }),
  oven: service({
    id: "oven",
    name: "Oven Cleaning",
    path: "/services/oven-cleaning/",
    description: "Cleaning for built-up grease and cooking residue in the oven.",
  }),
  mattress: service({
    id: "mattress",
    name: "Mattress Cleaning",
    path: "/services/mattress-cleaning/",
    description: "Refreshing the surfaces, seams and well-used areas of mattresses.",
  }),
  tile: service({
    id: "tile",
    name: "Tile & Grout Cleaning",
    path: "/services/tile-and-grout-cleaning/",
    description: "Cleaning for tiled areas and the grout lines between them.",
  }),
  blinds: service({
    id: "blinds",
    name: "Blind Cleaning",
    path: "/services/blind-cleaning/",
    description: "Cleaning for suitable venetian, vertical and roller blinds.",
  }),
  ndis: service({
    id: "ndis",
    name: "NDIS Cleaning",
    path: "/services/ndis-cleaning/",
    description: "Household cleaning arranged around a participant's routine and preferences.",
  }),
  pressure: service({
    id: "pressure",
    name: "Pressure Cleaning",
    path: "/services/pressure-cleaning/",
    description: "Driveways, paths, patios and other outdoor hard surfaces.",
  }),
  commercial: service({
    id: "commercial",
    name: "Commercial Cleaning",
    path: "/services/commercial-cleaning/",
    description: "Cleaning services for suitable commercial properties and business environments.",
    image: img("commercial-cleaning-melbourne-retail.webp", "Clean retail business premises"),
  }),
  office: service({
    id: "office",
    name: "Office Cleaning",
    path: "/services/office-cleaning/",
    description: "Cleaning support for offices and workplace environments.",
    image: img("office-cleaning-melbourne-workspace.webp", "Tidy open-plan office workspace"),
  }),
};

export type ServiceKey = keyof typeof services;

/** Residential services, grouped by the job the visitor has in mind. */
export const residentialGroups: { title: string; intro: string; keys: ServiceKey[]; layout: "rows" | "tiles" }[] = [
  {
    title: "Keeping a home clean",
    intro: "Routine cleaning, a more detailed clean, or a seasonal refresh.",
    keys: ["house", "deep", "spring", "ndis"],
    layout: "rows",
  },
  {
    title: "Moving, handovers & renovations",
    intro: "When a property is changing hands or has just had work done.",
    keys: ["endOfLease", "moveIn", "postConstruction"],
    layout: "rows",
  },
  {
    title: "Short-stay properties",
    intro: "Getting a rental ready between guests.",
    keys: ["airbnb"],
    layout: "rows",
  },
  {
    title: "Specific surfaces",
    intro: "Focused cleaning for one part of the property.",
    keys: ["window", "carpet", "upholstery"],
    layout: "tiles",
  },
  {
    title: "Kitchen, bedroom & fixtures",
    intro: "Detailed cleaning for particular items around the home.",
    keys: ["oven", "mattress", "tile", "blinds"],
    layout: "rows",
  },
  {
    title: "Outside the home",
    intro: "Cleaning for outdoor hard surfaces.",
    keys: ["pressure"],
    layout: "rows",
  },
];

export const commercialKeys: ServiceKey[] = ["commercial", "office"];

export const residentialCount = residentialGroups.reduce((n, g) => n + g.keys.length, 0);

/** "I need…" scenarios for the selection guide. */
export const scenarios: { quote: string; key: ServiceKey }[] = [
  { quote: "I need regular cleaning for my home.", key: "house" },
  { quote: "I'm moving into a property.", key: "moveIn" },
  { quote: "I'm leaving a rental.", key: "endOfLease" },
  { quote: "My home needs a more detailed clean.", key: "deep" },
  { quote: "I manage a short-stay property.", key: "airbnb" },
  { quote: "My carpets need attention.", key: "carpet" },
  { quote: "My furniture needs refreshing.", key: "upholstery" },
  { quote: "My oven needs a proper clean.", key: "oven" },
  { quote: "The grout in my bathroom looks dirty.", key: "tile" },
  { quote: "My driveway and paths look weathered.", key: "pressure" },
  { quote: "I'm arranging regular cleaning for an NDIS participant.", key: "ndis" },
  { quote: "I need office cleaning.", key: "office" },
  { quote: "I need cleaning for a business.", key: "commercial" },
];

export const choiceFactors = [
  { title: "Property type", text: "A studio apartment, a family home and an office floor need different things." },
  { title: "Current condition", text: "Light upkeep is a different job from heavy build-up." },
  { title: "Cleaning frequency", text: "Regular visits keep on top of things; one-off cleans reset them." },
  { title: "Reason for cleaning", text: "Moving out, moving in, hosting guests or just catching up." },
  { title: "Areas requiring attention", text: "Sometimes it's the whole property, sometimes just the carpets or windows." },
  { title: "Residential vs commercial use", text: "Workplaces have their own schedules, access and expectations." },
];

export const reasons: { reason: string; keys: ServiceKey[] }[] = [
  { reason: "Routine maintenance", keys: ["house"] },
  { reason: "Move-in", keys: ["moveIn"] },
  { reason: "End of lease", keys: ["endOfLease"] },
  { reason: "Seasonal refresh", keys: ["spring"] },
  { reason: "Short-stay turnover", keys: ["airbnb"] },
  { reason: "Specialised area cleaning", keys: ["window", "carpet", "upholstery", "oven", "mattress", "tile", "blinds", "pressure"] },
];

export const suburbs = ["Melbourne CBD", "Richmond", "South Yarra", "Brunswick", "Footscray", "Preston", "Werribee", "Point Cook", "Doncaster", "Glen Waverley"];

export const reasonsToChoose = [
  { title: "Service-Specific Cleaning", text: "Different cleaning needs have different service options, each with its own scope." },
  { title: "Clear Scope", text: "You can discuss what you actually need cleaned before anything is booked." },
  { title: "Residential & Commercial", text: "Services cover both homes and suitable business environments." },
  { title: "Melbourne Focus", text: "Everything here is built around cleaning services in Melbourne." },
];

export type HubFaq = Faq & { link?: { key: ServiceKey; label: string } };

export const hubFaqs: HubFaq[] = [
  {
    question: "What cleaning services do you offer?",
    answer:
      "We offer residential services for everyday, detailed, seasonal, moving, short-stay, window and carpet cleaning, plus commercial and office cleaning for suitable business premises. Each service is listed on this page with a link to more detail.",
  },
  {
    question: "Do you provide residential and commercial cleaning?",
    answer:
      "Yes. We clean houses, apartments, units and townhouses, as well as offices and suitable commercial premises.",
    link: { key: "commercial", label: "About commercial cleaning" },
  },
  {
    question: "Which service is best for regular house cleaning?",
    answer:
      "House cleaning is designed for regular or one-off upkeep. If the home hasn't had a thorough clean in a while, a deep clean first can be a good starting point.",
    link: { key: "deep", label: "About deep cleaning" },
  },
  {
    question: "What cleaning service do I need when moving into a home?",
    answer:
      "Move-in cleaning prepares a property before you unpack. If the home has just been renovated, post-construction cleaning may suit better.",
    link: { key: "moveIn", label: "About move-in cleaning" },
  },
  {
    question: "Do you offer end of lease cleaning?",
    answer: "Yes. End of lease cleaning helps tenants prepare a rental for handover and the final inspection.",
    link: { key: "endOfLease", label: "About end of lease cleaning" },
  },
  {
    question: "Do you clean Airbnb properties?",
    answer: "Yes. We clean short-stay properties between guest stays.",
    link: { key: "airbnb", label: "About Airbnb cleaning" },
  },
  {
    question: "Do you provide office cleaning?",
    answer: "Yes. Office cleaning covers workspaces, kitchens, bathrooms and shared areas on a schedule that suits you.",
    link: { key: "office", label: "About office cleaning" },
  },
  {
    question: "How do I request a cleaning quote?",
    answer:
      "Use the Get a Cleaning Quote button, email or call us. Tell us the property type, your suburb, the service you're interested in and your preferred date.",
  },
];

/** Only services with a live page are linked; the rest render as plain text. */
export const hrefFor = (key: ServiceKey) => (isLiveRoute(services[key].path) ? services[key].path : undefined);
