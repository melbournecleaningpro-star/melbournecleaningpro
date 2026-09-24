import type { Faq } from "./content";
import { quoteMailto } from "./site";

export const PAGE_PATH = "/services/carpet-cleaning/";

export const carpetQuoteMailHref = quoteMailto(
  "Carpet cleaning quote request",
  "Hi,\n\nI'd like a quote for carpet cleaning.\n\nProperty type (house, apartment, unit, townhouse, office, business):\nSuburb:\nNumber of carpeted rooms / areas:\nApproximate carpet area:\nStairs (yes / no):\nCarpet condition and any visible marks:\nPreferred date:\n\nThanks,",
);

export type CarpetImage = { src: string; alt: string; width: number; height: number };

const img = (name: string, alt: string): CarpetImage => ({
  src: `/images/carpet-cleaning-melbourne-${name}.webp`,
  alt,
  width: 1280,
  height: 960,
});

/** Illustrations for now. Replace with genuine photos of the same filenames in /public/images. */
export const images = {
  living: img("living", "Floor-level view of a carpeted living room with fresh vacuum lines, a sofa and a coffee table"),
  bedroom: img("bedroom", "Carpeted bedroom with a made bed, bedside table and slippers on the carpet"),
  hallway: img("hallway", "Carpeted hallway leading to the front door, with a worn traffic lane down the middle"),
  stairs: img("stairs", "Carpeted staircase with a timber banister"),
  office: img("office", "Office floor with grey carpet tiles, desks and chairs"),
  closeup: img("closeup", "Close-up of carpet pile texture"),
};

export const buildUp = ["Dust", "Everyday dirt", "Foot traffic marks", "Surface debris", "Visible spots", "General build-up"];

/** High-traffic zones on the illustrated floor plan (coordinates in the 600x400 SVG). */
export type Zone = { id: string; name: string; text: string; level: 1 | 2 | 3; cx: number; cy: number };

export const zones: Zone[] = [
  { id: "entry", name: "Entryways", text: "The first few steps inside take the most outdoor dirt.", level: 3, cx: 90, cy: 330 },
  { id: "hall", name: "Hallways", text: "Narrow routes where everyone walks the same line.", level: 3, cx: 250, cy: 300 },
  { id: "living", name: "Living Areas", text: "Paths between the sofa, doorways and the TV.", level: 2, cx: 170, cy: 150 },
  { id: "stairs", name: "Stair Areas", text: "Treads and landings, where accessible.", level: 2, cx: 370, cy: 330 },
  { id: "bed", name: "Bedrooms", text: "Beside the bed and in front of wardrobes.", level: 1, cx: 490, cy: 130 },
  { id: "office", name: "Office Areas", text: "Around desks, chairs and walkways at work.", level: 2, cx: 490, cy: 320 },
];

export type RoomStory = { title: string; lede: string; points: string[]; image: CarpetImage };

export const roomStories: RoomStory[] = [
  {
    title: "Living Areas",
    lede: "The living room carries the most everyday use in many homes: walking paths, the spot in front of the sofa, where kids play.",
    points: ["Visible everyday dirt", "Walkways between furniture", "Areas in front of seating"],
    image: images.living,
  },
  {
    title: "Bedrooms",
    lede: "Bedroom carpet sees gentler traffic but still collects dust and marks over time, especially beside the bed.",
    points: ["General carpet refresh", "Areas beside the bed", "Visible spots and marks"],
    image: images.bedroom,
  },
  {
    title: "Hallways & Entries",
    lede: "Hallways and entries take frequent foot traffic, so the central walking lane is often where wear and dirt show first.",
    points: ["Central traffic lanes", "Entry points from outside", "Visible foot traffic marks"],
    image: images.hallway,
  },
  {
    title: "Stairs",
    lede: "Carpeted stairs can be included where they're safely accessible and part of the agreed scope.",
    points: ["Treads and accessible edges", "Landings", "Visible build-up on steps"],
    image: images.stairs,
  },
  {
    title: "Commercial Areas",
    lede: "Suitable carpeted office and business areas, where the space and floor type suit it.",
    points: ["Around desks and chairs", "Walkways and entrances", "Meeting and reception areas"],
    image: images.office,
  },
];

/** Focus areas, each shown as a "magnified" swatch of pile in a different state. */
export const focusAreas = [
  { title: "General Carpet Refresh", text: "Everyday dirt and visible build-up across the carpet.", swatch: "fresh" },
  { title: "High-Traffic Areas", text: "Walkways and zones that get frequent foot traffic.", swatch: "traffic" },
  { title: "Visible Marks", text: "Appropriate treatment of visible marks, where possible.", swatch: "marks" },
  { title: "Overall Presentation", text: "Helping carpeted rooms look cleaner and more presentable.", swatch: "lines" },
] as const;

export const resultFactors = [
  { label: "Age of the carpet", symbol: "clock" },
  { label: "Carpet material", symbol: "fibre" },
  { label: "Type of stain", symbol: "drop" },
  { label: "How long a mark has been there", symbol: "hourglass" },
  { label: "Previous cleaning or treatment", symbol: "cycle" },
  { label: "Existing wear", symbol: "wear" },
  { label: "Permanent discoloration", symbol: "fade" },
] as const;

export const propertyTypes = ["Houses", "Apartments", "Units", "Townhouses", "Offices", "Suitable commercial premises"];

export const visitCarpet = ["General carpet cleaning", "High-traffic areas", "Visible dirt", "Appropriate treatment of visible marks"];
export const visitSurrounds = ["Accessible edges", "General floor presentation", "Surrounding-area attention where included"];
export const notOffered = ["moving heavy furniture", "carpet repairs", "re-stretching", "specialised restoration"];

export const whenToBook = [
  { title: "Carpet Looks Dull", text: "The colour and pile look flatter than they used to." },
  { title: "High-Traffic Areas Are Noticeable", text: "You can see the walking lanes from across the room." },
  { title: "Visible Marks Have Built Up", text: "Spots and marks have gathered over time." },
  { title: "The Property Is Being Refreshed", text: "You're freshening up rooms before an inspection, sale or new season." },
  { title: "Before Moving Into a Property", text: "You'd like the carpet cleaned before your furniture goes in." },
  { title: "After a Period of Heavy Use", text: "After gatherings, busy holidays or a full house." },
];

export const residential = ["Houses", "Apartments", "Units", "Townhouses"];
export const commercial = ["Offices", "Small business premises", "Carpeted commercial spaces"];

export const pricingFactors = [
  "Number of carpeted rooms",
  "Carpet area",
  "Property size",
  "Carpet condition",
  "Level of build-up",
  "Type and severity of visible marks",
  "Accessibility",
  "Residential vs commercial scope",
];

export const steps = [
  "Tell Us About Your Carpeted Space",
  "Discuss the Carpet & Cleaning Requirements",
  "Confirm the Scope",
  "Complete the Cleaning",
  "Enjoy a Refreshed Carpeted Space",
];

export const carpetFaqs: Faq[] = [
  {
    question: "What does carpet cleaning include?",
    answer:
      "It covers general cleaning of the agreed carpeted areas, attention to high-traffic zones and visible dirt, and appropriate treatment of visible marks where possible. Accessible edges can be included. The exact scope is agreed before the visit.",
  },
  {
    question: "How much does carpet cleaning cost in Melbourne?",
    answer:
      "It depends on the number of carpeted rooms, carpet area, property size, carpet condition, the level of build-up, the type of marks, accessibility and whether it's residential or commercial. Send us the details for a free quote.",
  },
  {
    question: "Can you clean carpets in apartments?",
    answer:
      "Yes. We clean carpets in apartments, units and townhouses as well as houses. Let us know about building access, parking and any lift or stairs when you request a quote.",
  },
  {
    question: "Can you clean high-traffic carpet areas?",
    answer:
      "Yes. Hallways, entries, living-room walkways and other high-traffic areas can be given extra attention. Results depend on the carpet's condition and how much wear is already there.",
  },
  {
    question: "Can all carpet stains be removed?",
    answer:
      "No. Many marks can be improved, but some stains, older marks, wear and permanent discoloration may not come out fully. It depends on the carpet material, the type of stain, how long it's been there and any previous treatment.",
  },
  {
    question: "Does carpet type affect the cleaning process?",
    answer:
      "Yes. Carpet type and condition can be discussed before the service so the appropriate cleaning approach can be considered. Tell us what you know about the carpet when you get in touch.",
  },
  {
    question: "Do you clean commercial carpets?",
    answer:
      "Yes, in suitable offices, small business premises and carpeted commercial spaces. We'll talk through the area, access and timing so the work fits around your business.",
  },
  {
    question: "Can I book carpet cleaning as part of a move-in clean?",
    answer:
      "Yes. You can ask for carpet cleaning alongside a move-in clean, so the carpets are done before your furniture arrives. Mention both when you request a quote.",
  },
];
