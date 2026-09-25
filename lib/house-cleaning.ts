import type { Faq } from "./content";

export const PAGE_PATH = "/services/house-cleaning/";
export const QUOTE_PATH = "/quote/?service=house";

export const images = {
  living: {
    src: "/images/house-cleaning-melbourne-living.webp",
    alt: "Sunlit living room with a grey sofa, coffee table, floor lamp and tall window",
    width: 1280,
    height: 960,
  },
  openPlan: {
    src: "/images/house-cleaning-melbourne-open-plan.webp",
    alt: "Open-plan home with a front entry, kitchen bench and cupboards, a bathroom doorway and a living area",
    width: 1600,
    height: 960,
  },
};

export const situations = [
  {
    id: "regular",
    title: "Regular home cleaning",
    text: "For ongoing household upkeep, weekly, fortnightly or monthly.",
    cta: "Ask about regular cleaning",
    href: QUOTE_PATH,
  },
  {
    id: "one-off",
    title: "One-off house cleaning",
    text: "For when the home needs a hand getting back into shape.",
    cta: "Ask about a one-off clean",
    href: QUOTE_PATH,
  },
  {
    id: "deep",
    title: "A deeper reset",
    text: "For homes that need more intensive attention.",
    cta: "See deep cleaning",
    href: "/services/deep-cleaning/",
  },
];

export type Room = { id: string; name: string; intro: string; areas: string[] };

/** Floor-plan rooms. Examples of common attention, not a fixed checklist. */
export const rooms: Room[] = [
  {
    id: "kitchen",
    name: "Kitchen",
    intro: "The busiest room in most homes, where everyday build-up shows quickly.",
    areas: ["Benchtops", "Visible surfaces", "Sinks", "Stovetop area", "Floors"],
  },
  {
    id: "bathroom",
    name: "Bathrooms",
    intro: "Small rooms that get used many times a day.",
    areas: ["Sinks", "Showers", "Baths", "Mirrors", "Visible surfaces", "Floors"],
  },
  {
    id: "bedroom",
    name: "Bedrooms",
    intro: "Quieter spaces where dust settles between cleans.",
    areas: ["Accessible surfaces", "Dusting", "Floors", "General cleaning around the room"],
  },
  {
    id: "living",
    name: "Living areas",
    intro: "Where the household spends its time together.",
    areas: ["Accessible surfaces", "Furniture surfaces, where appropriate", "Floors", "General dust and dirt"],
  },
];

/** Hotspots on the open-plan illustration (percentages of the image). */
export const hotspots = [
  { id: "entry", title: "Entry areas", text: "Where outdoor dirt first comes in.", x: 11, y: 77 },
  { id: "touch", title: "Frequently touched areas", text: "Switches, handles and doors used all day.", x: 21, y: 50 },
  { id: "kitchen", title: "Kitchen surfaces", text: "Benches and splashbacks used for every meal.", x: 45.5, y: 53 },
  { id: "floors", title: "Floors", text: "Walkways between the rooms you use most.", x: 60, y: 88 },
  { id: "bathroom", title: "Bathroom surfaces", text: "Basins, mirrors and benches used daily.", x: 80.5, y: 56 },
  { id: "living", title: "Living spaces", text: "Seating and surfaces where everyone gathers.", x: 93, y: 63 },
];

export const commonAreas = [
  "Dusting accessible surfaces",
  "Vacuuming",
  "Mopping",
  "Kitchen surface cleaning",
  "Bathroom cleaning",
  "General surface cleaning",
  "Visible dirt and everyday build-up",
];

export const discussFactors = [
  "The condition of the property",
  "The service you've requested",
  "The time available",
  "Special areas you'd like included",
  "Materials and surfaces that need care",
  "Your priorities",
];

export const priorities = ["Kitchen", "Bathrooms", "Floors", "Bedrooms", "Living areas", "High-use areas"];

export const comparison = [
  {
    id: "regular",
    title: "Regular cleaning",
    text: "Designed around maintaining a home over time, so it stays on top of everyday use.",
    rhythm: "Weekly, fortnightly or monthly",
    days: [1, 8, 15, 22],
  },
  {
    id: "one-off",
    title: "One-off cleaning",
    text: "Useful when the home needs attention at a particular point in time, with no ongoing commitment.",
    rhythm: "A single visit",
    days: [12],
  },
  {
    id: "deep",
    title: "Deep cleaning",
    text: "A more intensive clean for build-up and the areas routine cleaning tends to skip.",
    rhythm: "A longer, detailed visit",
    days: [18],
    path: "/services/deep-cleaning/",
  },
];

export const prepNotes = [
  "Put away valuable or fragile personal items.",
  "Tell us about areas that need special attention.",
  "Share accurate details about the property and access.",
  "Mention surfaces or materials that need care.",
  "Arrange keys or building access if you won't be home.",
];

export const journey = [
  { title: "Tell us about your home", text: "Share the property details and what you'd like cleaned." },
  { title: "Discuss the details", text: "Your cleaning priorities and any requirements are understood." },
  { title: "Arrange the service", text: "The clean is scheduled according to availability." },
  { title: "Your home gets the attention it needs", text: "The agreed cleaning is carried out." },
];

export const homes = [
  { id: "apartment", title: "Apartment", text: "Compact spaces and everyday living areas, often with building access to plan around." },
  { id: "family", title: "Family home", text: "Multiple rooms and frequently used spaces that need regular attention." },
  { id: "rental", title: "Rental property", text: "Cleaning requirements can vary with occupancy and the property's condition." },
  { id: "busy", title: "Busy household", text: "Useful when keeping on top of home upkeep becomes hard to manage." },
];

export const notSure: { q: string; label: string; path: string }[] = [
  { q: "Everyday upkeep?", label: "House cleaning", path: "/quote/?service=house" },
  { q: "Need a deeper reset?", label: "Deep cleaning", path: "/services/deep-cleaning/" },
  { q: "Moving out?", label: "End of lease cleaning", path: "/services/end-of-lease-cleaning/" },
  { q: "Moving in?", label: "Move-in cleaning", path: "/services/move-in-cleaning/" },
  { q: "Short-term rental?", label: "Airbnb cleaning", path: "/services/airbnb-cleaning/" },
  { q: "Furniture needs attention?", label: "Upholstery cleaning", path: "/services/upholstery-cleaning/" },
  { q: "Carpet needs attention?", label: "Carpet cleaning", path: "/services/carpet-cleaning/" },
];

export const quoteFactors = ["Property size", "Number of rooms", "Cleaning requirements", "Property condition", "Requested frequency", "Specific priorities"];

export const houseFaqs: Faq[] = [
  {
    question: "What does house cleaning include?",
    answer:
      "It covers the main living spaces: kitchens, bathrooms, living areas and bedrooms. That typically means dusting accessible surfaces, vacuuming, mopping and cleaning kitchen and bathroom surfaces. The exact tasks are agreed with you, so they fit your home.",
  },
  {
    question: "Do you offer one-off house cleaning?",
    answer:
      "Yes. A one-off clean suits times when the home needs a hand, like before guests arrive or after a busy stretch. There's no ongoing commitment.",
  },
  {
    question: "Do you offer regular house cleaning?",
    answer:
      "Yes. Regular cleaning can be weekly, fortnightly or monthly, and the tasks included can be adjusted over time to suit your routine.",
  },
  {
    question: "Can I ask for certain areas to be prioritised?",
    answer:
      "Yes. Tell us which rooms or areas matter most to you, such as the kitchen, bathrooms or floors, and they'll be part of the agreed scope.",
  },
  {
    question: "Do you clean kitchens and bathrooms?",
    answer:
      "Yes. Kitchens and bathrooms are a core part of house cleaning. If there's heavy build-up, a deep clean may suit better as a starting point.",
  },
  {
    question: "Do you clean apartments and units?",
    answer:
      "Yes. We clean apartments, units and townhouses as well as houses. Let us know about building access, parking and lifts when you request a quote.",
  },
  {
    question: "How should I prepare my home for a clean?",
    answer:
      "Put away valuables and fragile items, clear clutter from surfaces you'd like cleaned, and let us know about priorities, pets and access. You don't need to be home if access is arranged in advance.",
  },
  {
    question: "What affects the cost of house cleaning?",
    answer:
      "The size of the property, the number of rooms, its condition, how often you'd like cleaning, your specific priorities and any other requirements. Quotes are free and prepared from the details you provide.",
  },
  {
    question: "Can house cleaning be combined with other services?",
    answer:
      "You can ask. If you'd also like windows, carpets or upholstery looked at, mention it when you request a quote so everything can be discussed together.",
  },
  {
    question: "How do I request a house cleaning quote?",
    answer:
      "Use the quote form and choose house cleaning, or get in touch through the contact page. Include your suburb, the size of the home and how often you'd like cleaning.",
  },
];
