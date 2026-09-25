import type { Faq } from "./content";

export const PAGE_PATH = "/services/upholstery-cleaning/";

export const images = {
  sofa: {
    src: "/images/upholstery-cleaning-melbourne-sofa.webp",
    alt: "Three-seater fabric sofa with cushions in a bright living room",
    width: 1280,
    height: 960,
  },
  armchair: {
    src: "/images/upholstery-cleaning-melbourne-armchair.webp",
    alt: "Teal fabric armchair with a cushion, beside an ottoman and a floor lamp",
    width: 1280,
    height: 960,
  },
};

/** Sofa zones shown on the diagram; educational only. */
export const zones = [
  { id: "seat", title: "Seat cushions", text: "Everyday contact and accumulated dirt.", swatch: "bg-[#d8c7a9]" },
  { id: "arms", title: "Armrests", text: "High-contact areas that can show wear and marks.", swatch: "bg-wattle" },
  { id: "back", title: "Back cushions", text: "Regularly exposed to dust and everyday use.", swatch: "bg-[#cfbd9d]" },
  { id: "fabric", title: "Fabric surfaces", text: "The cleaning approach depends on the material and its condition.", swatch: "bg-brand" },
] as const;

export const buildUp = ["Dust", "Everyday dirt", "Food and drink marks", "Body oils", "Pet hair and debris, where there are pets", "General signs of use"];

export type FurnitureId = "sofa" | "armchair" | "chair" | "dining" | "ottoman" | "cushion";

export const furniture: { id: FurnitureId; name: string; text: string }[] = [
  { id: "sofa", name: "Sofas & couches", text: "Two-seaters, three-seaters and modular lounges." },
  { id: "armchair", name: "Armchairs", text: "Reading chairs and occasional chairs." },
  { id: "chair", name: "Fabric chairs", text: "Upholstered accent and bedroom chairs." },
  { id: "dining", name: "Dining chairs", text: "Fabric seats and backs that see daily meals." },
  { id: "ottoman", name: "Ottomans", text: "Footstools and upholstered benches." },
  { id: "cushion", name: "Cushioned furniture", text: "Removable and fixed cushions on other pieces." },
];

export const fabricFactors = [
  "Fabric or material",
  "Manufacturer's care instructions",
  "Colour and dye",
  "Age of the piece",
  "Previous treatment",
  "Current condition",
  "Type of stain",
  "How it's constructed",
  "How accessible it is",
];

export const marks = ["Food marks", "Drink spills", "Everyday dirt", "General grime", "Marks from frequent use"];
export const markFactors = ["How long it's been there", "The material", "Previous cleaning attempts", "What the substance is", "The condition of the fabric"];

export const inspection = [
  { title: "Material", question: "What is the upholstery made from?" },
  { title: "Condition", question: "What condition is it in right now?" },
  { title: "Areas of concern", question: "Where are the marks or the most-used areas?" },
  { title: "Cleaning requirements", question: "What approach is appropriate for this piece?" },
];

export const cleaningSteps = [
  { title: "Assess", text: "Understand the furniture and the cleaning requirements." },
  { title: "Prepare", text: "Prepare the upholstery appropriately before cleaning." },
  { title: "Clean", text: "Carry out the appropriate cleaning process." },
  { title: "Review", text: "Check the cleaned areas and the overall result." },
];

export const careTips = [
  "Deal with spills promptly by blotting rather than rubbing.",
  "Vacuum upholstered surfaces where appropriate, using a soft attachment.",
  "Avoid aggressive DIY treatments and strong household chemicals.",
  "Avoid soaking fabric; excess moisture can cause problems for some materials.",
  "Keep any care labels or manufacturer information for the piece.",
  "Tell us about previous treatments or products used before a professional clean.",
];

export const helps = [
  { title: "Busy households", text: "Furniture gets everyday use and could do with a refresh." },
  { title: "Families", text: "High-use seating tends to gather marks from meals, play and daily life." },
  { title: "Rental properties", text: "Upholstered furniture may need attention between occupants, where applicable." },
  { title: "Airbnb hosts", text: "Furniture can need cleaning as part of getting a property ready for guests." },
];

export const alsoNeed: { question: string; path: string; label: string }[] = [
  { question: "Need the whole home cleaned?", path: "/services/house-cleaning/", label: "House cleaning" },
  { question: "Need a deeper whole-property clean?", path: "/services/deep-cleaning/", label: "Deep cleaning" },
  { question: "Moving out of a rental?", path: "/services/end-of-lease-cleaning/", label: "End of lease cleaning" },
  { question: "Need carpets cleaned too?", path: "/services/carpet-cleaning/", label: "Carpet cleaning" },
  { question: "Need windows cleaned?", path: "/services/window-cleaning/", label: "Window cleaning" },
  { question: "Mattresses need a refresh too?", path: "/services/mattress-cleaning/", label: "Mattress cleaning" },
];

export const quoteFactors = ["Type of furniture", "Number of items", "Material", "Condition", "Cleaning requirements", "Location and access"];

export const upholsteryFaqs: Faq[] = [
  {
    question: "What types of upholstery can be cleaned?",
    answer:
      "Common fabric furniture such as sofas, couches, armchairs, fabric chairs, dining chairs, ottomans and cushioned pieces. Suitability depends on the material and condition, so tell us what the piece is made from when you ask for a quote. Some materials, such as leather, suede or delicate and antique fabrics, may need a specialist.",
  },
  {
    question: "Can you clean sofas and couches?",
    answer:
      "Yes. Sofas and couches are among the most common pieces we're asked about. Let us know the size, the fabric and any areas of concern, such as the seat cushions or armrests.",
  },
  {
    question: "Can stains be removed from upholstery?",
    answer:
      "Many everyday marks can be improved, but not every stain can be removed. Results depend on the type of stain, how long it's been there, the material, the condition of the fabric and any previous cleaning attempts.",
  },
  {
    question: "Does every fabric need the same cleaning method?",
    answer:
      "No. Materials differ in how they respond to cleaning, so the approach is considered for each piece, taking into account the fabric, the manufacturer's care instructions, its condition and the marks involved.",
  },
  {
    question: "How often should upholstery be cleaned?",
    answer:
      "It depends on how much the furniture is used. Pieces in busy homes, or homes with children or pets, tend to need attention more often than furniture that's used occasionally. Regular vacuuming and prompt attention to spills help in between.",
  },
  {
    question: "Can I add upholstery cleaning to another service?",
    answer:
      "You can ask. Mention the upholstery when you request a quote for another clean, such as a deep clean or an end of lease clean, and we'll include it in the discussion.",
  },
  {
    question: "What should I include when I request a quote?",
    answer:
      "The type and number of pieces, what they're made from, their condition, any specific marks or areas of concern, any previous treatment, and your suburb. Photos are welcome if you email us.",
  },
  {
    question: "How do I request upholstery cleaning in Melbourne?",
    answer:
      "Use the quote form and choose upholstery cleaning, or get in touch through the contact page. Tell us about the furniture and your suburb, and we'll talk through the next step.",
  },
];
