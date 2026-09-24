import type { Faq } from "./content";
import { quoteMailto } from "./site";

export const PAGE_PATH = "/services/post-construction-cleaning/";

export const postConstructionQuoteMailHref = quoteMailto(
  "Post-construction cleaning quote request",
  "Hi,\n\nI'd like a quote for post-construction / after renovation cleaning.\n\nProperty type:\nSuburb:\nWhat work was done (e.g. kitchen renovation, full refurbishment):\nApproximate size / number of rooms:\nBathrooms and kitchen areas:\nIs the work finished and the site clear of trades?:\nPreferred date:\nNext stage (move in, furniture, photography, handover):\n\nThanks,",
);

export type ProjectImage = { src: string; alt: string; width: number; height: number };

/**
 * Illustrations for now: the worksite and ready-space images show the same
 * illustrated room, not a Melbourne Cleaning Pro project. Replace with genuine
 * photos (same filenames in /public/images) only if they come from real jobs.
 */
export const images = {
  worksite: {
    src: "/images/post-construction-cleaning-melbourne-worksite.webp",
    alt: "Illustration of a just-finished kitchen renovation with dust, a drop sheet, a stepladder and a paint tin",
    width: 1280,
    height: 960,
  },
  ready: {
    src: "/images/post-construction-cleaning-melbourne-ready-space.webp",
    alt: "Illustration of the same renovated kitchen after cleaning, with clear benchtops and a clean polished floor",
    width: 1280,
    height: 960,
  },
  bathroom: {
    src: "/images/post-construction-cleaning-melbourne-bathroom.webp",
    alt: "Newly renovated bathroom with a floating vanity, backlit mirror and frameless shower screen",
    width: 1280,
    height: 960,
  },
} satisfies Record<string, ProjectImage>;

export const stages = ["Construction finished", "Dust & residue", "Detailed clean", "Ready space"];

export const leftovers = [
  { title: "Fine dust", text: "Settles on every horizontal surface, and keeps settling after the tools are packed away." },
  { title: "Surface residue", text: "A film on benchtops, sills, fixtures and glass from cutting, sanding and finishing work." },
  { title: "Marks", text: "Scuffs, fingerprints and tape marks on doors, frames and newly finished surfaces." },
  { title: "Debris", text: "Small offcuts, grit and packaging left behind once the larger materials have gone." },
  { title: "Dust in edges and corners", text: "Build-up along skirting, in corners and around frames where a quick sweep misses." },
  { title: "Dirty floors", text: "Tracked-in dirt and dust across floors that were walked on throughout the project." },
  { title: "General mess", text: "The everyday traces of a worksite that make a finished space still feel unfinished." },
];

export const specSheet: { code: string; area: string; items: string[] }[] = [
  { code: "A1", area: "Surfaces", items: ["Accessible surfaces", "Benchtops", "Shelving", "Fixtures", "Visible dust and residue"] },
  { code: "A2", area: "Floors", items: ["Vacuuming", "Mopping", "Visible construction dust", "Accessible floor areas"] },
  { code: "A3", area: "Kitchens", items: ["Benchtops", "Sink", "Cooktop", "Cabinet exteriors", "Accessible surfaces"] },
  { code: "A4", area: "Bathrooms", items: ["Fixtures", "Vanity", "Mirrors", "Shower / bath surfaces", "Floors"] },
  { code: "A5", area: "General Areas", items: ["Doors", "Accessible ledges", "Common surfaces", "Visible marks", "General presentation"] },
];

/** Hotspot positions are percentages over the ready-space illustration. */
export const detailZones: { n: number; title: string; text: string; x: number; y: number }[] = [
  { n: 1, title: "Edges & Corners", text: "Dust gathers along skirting, in corners and around frames.", x: 6, y: 72 },
  { n: 2, title: "Ledges & Surfaces", text: "Sills, shelves and benchtops hold a fine layer of settled dust.", x: 40, y: 49 },
  { n: 3, title: "Fixtures", text: "Tapware, handles and light fittings can carry residue from finishing work.", x: 45, y: 38 },
  { n: 4, title: "Floors", text: "Tracked dust and grit across the whole floor area.", x: 30, y: 88 },
  { n: 5, title: "Kitchen Areas", text: "Cabinet fronts, splashbacks and cooktops after installation.", x: 18, y: 60 },
  { n: 6, title: "Glass & Frames", text: "New windows and sliding doors, including accessible frames and tracks.", x: 80, y: 30 },
];

export const weFocusOn = [
  "General post-project cleaning",
  "Dust removal",
  "Surface cleaning",
  "Floor cleaning",
  "Kitchen and bathroom cleaning",
  "General presentation",
];

export const specialistOnly = [
  "Asbestos removal",
  "Hazardous-material removal",
  "Heavy construction waste removal",
  "Specialist industrial cleaning",
  "Repairs or construction defects",
];

export const whoNeedsIt: { role: string; when: string }[] = [
  { role: "Homeowners", when: "After renovation or improvement work." },
  { role: "Builders & trades", when: "When a completed project needs a general cleaning stage." },
  { role: "Property owners", when: "Preparing a renovated property for occupation." },
  { role: "Property managers", when: "Preparing a completed property for its next use." },
  { role: "Renovation projects", when: "Before furniture, occupants or photography arrive." },
];

export const nextStages: { title: string; text: string }[] = [
  { title: "Move in", text: "Unpack into a space that's already been cleaned." },
  { title: "Furniture installation", text: "Clean floors and surfaces before furniture goes in." },
  { title: "Property presentation", text: "A tidy, cared-for look for inspections or viewings." },
  { title: "Photography", text: "Surfaces and floors free of visible dust before the camera comes out." },
  { title: "Handover", text: "A cleaner property to hand over to its owner or occupant." },
  { title: "General occupation", text: "Everyday use without working around construction dust." },
];

export const priorities = [
  { title: "Construction Dust", text: "Removing the fine dust that settles across surfaces and floors." },
  { title: "Visible Surface Residue", text: "Wiping down the film left on benchtops, fixtures and ledges." },
  { title: "Floors & Accessible Areas", text: "Vacuuming and mopping throughout, into edges and corners." },
  { title: "Kitchen & Bathroom Presentation", text: "Detailed attention to the rooms with the most fixtures." },
  { title: "Final General Appearance", text: "A last pass so the space looks finished, not just built." },
];

export const pricingFactors = [
  "Property size",
  "Scope of construction work",
  "Level of dust and residue",
  "Number of rooms",
  "Bathrooms and kitchen areas",
  "Accessibility",
  "Condition of the property",
  "Amount of detailed cleaning required",
];

export const process: { title: string; start: number; span: number }[] = [
  { title: "Tell Us About the Project", start: 0, span: 2 },
  { title: "Discuss the Property & Cleaning Scope", start: 1, span: 2 },
  { title: "Confirm the Cleaning Requirements", start: 2, span: 2 },
  { title: "Complete the Post-Project Clean", start: 3, span: 3 },
  { title: "Leave the Property Ready for Its Next Stage", start: 5, span: 3 },
];

export const postConstructionFaqs: Faq[] = [
  {
    question: "What is post-construction cleaning?",
    answer:
      "Post-construction cleaning, sometimes called a builders clean or after renovation cleaning, is a detailed clean once building or renovation work is finished. It removes construction dust, visible residue and general mess so the property can move to its next stage.",
  },
  {
    question: "What does post-construction cleaning include?",
    answer:
      "It can include accessible surfaces, benchtops, shelving, fixtures, floors, kitchens, bathrooms, doors, ledges and visible marks, with the exact scope agreed before the clean. It doesn't include hazardous-material removal, heavy waste removal or repairs.",
  },
  {
    question: "Can you clean after a home renovation?",
    answer:
      "Yes. We clean homes after kitchen, bathroom and whole-home renovations once the trades have finished. Let us know what work was done so we can plan the scope.",
  },
  {
    question: "Do you remove construction dust?",
    answer:
      "Yes. Removing construction dust from accessible surfaces, ledges, fixtures and floors is a central part of the service. Very fine dust can keep settling for a while after work finishes, so timing the clean after the trades are done helps.",
  },
  {
    question: "Can you clean renovated kitchens and bathrooms?",
    answer:
      "Yes. Renovated kitchens and bathrooms get detailed attention, including benchtops, sinks, cooktops, cabinet exteriors, vanities, mirrors, fixtures, shower and bath surfaces, and floors.",
  },
  {
    question: "Do you remove construction waste?",
    answer:
      "No. We don't remove heavy construction waste, building materials or hazardous materials such as asbestos. These need to be cleared by your builder or a licensed specialist before the clean.",
  },
  {
    question: "Can post-construction cleaning be used before moving in?",
    answer:
      "Yes. It's a practical step before moving in, installing furniture, photographing the property or handing it over. Cleaning is one part of finishing a project, not a substitute for builder sign-off or inspections.",
  },
  {
    question: "How much does post-construction cleaning cost in Melbourne?",
    answer:
      "It depends on the property size, the scope of the construction work, the level of dust and residue, the number of rooms, bathrooms and kitchen areas, accessibility, condition and how much detailed cleaning is needed. Send us the project details for a free quote.",
  },
];
