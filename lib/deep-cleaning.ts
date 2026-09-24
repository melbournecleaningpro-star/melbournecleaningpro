import type { LucideIcon } from "lucide-react";
import {
  Bath,
  BedDouble,
  Columns2,
  CookingPot,
  DoorOpen,
  Hammer,
  Hand,
  Leaf,
  LampFloor,
  Grid3x3,
  PanelTop,
  RefreshCw,
  Sofa,
  SquareDashed,
  ToggleRight,
  Truck,
  Hourglass,
  Users,
  ArrowUpToLine,
  Box,
} from "lucide-react";
import type { Faq } from "./content";
import { quoteMailto } from "./site";

export const PAGE_PATH = "/services/deep-cleaning/";

export const DEEP_QUOTE_SUBJECT = "Deep cleaning quote request";

export function deepQuoteMailHref(priorities: string[] = []): string {
  const list = priorities.length ? priorities.map((p) => `- ${p}`).join("\n") : "";
  return quoteMailto(
    DEEP_QUOTE_SUBJECT,
    `Hi,\n\nI'd like a quote for a deep clean.\n\nProperty type (apartment, unit, townhouse, house):\nSuburb:\nBedrooms:\nBathrooms:\n\nPriority areas:\n${list}\n\nPets, access or surfaces needing special care:\n\nThanks,`,
  );
}

export type HomeImage = { src: string; alt: string; width: number; height: number };

/** Illustrations for now. Replace with genuine photos of the same filenames in /public/images. */
export const images = {
  home: {
    src: "/images/deep-cleaning-melbourne-home.webp",
    alt: "Bright living room with a tidy bookshelf, mustard sofa and large garden window",
    width: 1280,
    height: 960,
  },
  kitchen: {
    src: "/images/deep-cleaning-melbourne-kitchen.webp",
    alt: "Clean kitchen with a white island bench, tiled splashback, green cabinetry and open shelves",
    width: 1280,
    height: 960,
  },
  bathroom: {
    src: "/images/deep-cleaning-melbourne-bathroom.webp",
    alt: "Clean bathroom with a freestanding bath, round mirror, timber vanity and tiled walls",
    width: 1280,
    height: 960,
  },
} satisfies Record<string, HomeImage>;

export const scenarios: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "After a Busy Period", text: "When regular cleaning has fallen behind and things have built up.", icon: Hourglass },
  { title: "Before Guests Arrive", text: "For a more thorough reset before visitors, family or a special occasion.", icon: Users },
  { title: "Seasonal Reset", text: "When you want to tackle the areas routine cleaning may not cover.", icon: Leaf },
  { title: "Before or After Moving", text: "For a detailed clean around a move, whether you're leaving or settling in.", icon: Truck },
  { title: "After Renovation", text: "Where appropriate, for dust and general cleaning once the work is done.", icon: Hammer },
  { title: "Simply Ready for a Reset", text: "When your home needs more attention than a routine clean can give.", icon: RefreshCw },
];

export type Comparison = { id: string; label: string; image: HomeImage; note: string };

export const comparisons: Comparison[] = [
  {
    id: "kitchen",
    label: "Kitchen",
    image: images.kitchen,
    note: "Splashbacks, the cooktop and cabinet fronts are where grease and grime tend to build up first.",
  },
  {
    id: "bathroom",
    label: "Bathroom",
    image: images.bathroom,
    note: "Soap residue, water marks and grout lines are the difference between clean and looking clean.",
  },
  {
    id: "living",
    label: "Living room",
    image: images.home,
    note: "Dust on shelves, skirting boards and around furniture builds up slowly and is easy to stop seeing.",
  },
];

export type Room = { id: string; name: string; icon: LucideIcon; items: string[]; focus: string };

export const rooms: Room[] = [
  {
    id: "kitchen",
    name: "Kitchen",
    icon: CookingPot,
    items: ["Benchtops", "Splashbacks", "Sink", "Cooktop", "Cabinet fronts", "Appliance exteriors", "Accessible surfaces", "Floors"],
    focus: "Kitchens usually take the most time in a deep clean. Grease and residue build up gradually around the cooktop and splashback, and cabinet fronts collect fingerprints and splashes.",
  },
  {
    id: "bathroom",
    name: "Bathroom",
    icon: Bath,
    items: ["Shower", "Bath", "Vanity", "Toilet", "Mirrors", "Fixtures", "Tiles", "Floors"],
    focus: "Bathrooms get detailed attention on soap scum, water marks and build-up on tiles and fixtures, beyond the quick wipe-down of a routine clean.",
  },
  {
    id: "living",
    name: "Living Areas",
    icon: Sofa,
    items: ["Dusting", "Surfaces", "Skirting boards", "Doors and handles", "Vacuuming", "Mopping"],
    focus: "Living areas are about the details: dust along skirting boards and ledges, marks on doors and handles, and floors cleaned properly into the edges.",
  },
  {
    id: "bedrooms",
    name: "Bedrooms",
    icon: BedDouble,
    items: ["Dusting", "Surfaces", "Skirting boards", "Doors and handles", "Floors", "Accessible wardrobe surfaces"],
    focus: "Bedrooms collect dust on surfaces, skirting boards and wardrobe fronts, especially in rooms that are used every day but rarely given a full clean.",
  },
  {
    id: "common",
    name: "Common Areas",
    icon: DoorOpen,
    items: ["Hallways", "Entry areas", "Stairs where applicable", "Accessible surfaces"],
    focus: "Hallways, entries and stairs see the most foot traffic, so scuffs, dust and marks build up quickly along walls, rails and floors.",
  },
];

export const overlooked: { label: string; icon: LucideIcon }[] = [
  { label: "Skirting boards", icon: SquareDashed },
  { label: "Door handles", icon: Hand },
  { label: "Light switches", icon: ToggleRight },
  { label: "Corners", icon: Box },
  { label: "Around accessible furniture", icon: LampFloor },
  { label: "Grout", icon: Grid3x3 },
  { label: "Splashbacks", icon: PanelTop },
  { label: "Hard-to-reach surfaces", icon: ArrowUpToLine },
  { label: "Cabinet fronts", icon: Columns2 },
];

export const regularCleaning = ["Routine dusting", "Vacuuming", "Mopping", "Bathrooms", "Kitchens", "General maintenance"];

export const deepCleaning = [
  "More detailed attention",
  "Built-up grime",
  "Overlooked surfaces",
  "Skirting boards",
  "Detailed bathroom areas",
  "More intensive kitchen cleaning",
  "Additional requested areas",
];

export const priorityOptions = [
  "Kitchen",
  "Bathrooms",
  "Floors",
  "Skirting boards",
  "Living areas",
  "Bedrooms",
  "Particular built-up areas",
];

export const limits = ["Permanent stains", "Damaged surfaces", "Chipped paint", "Broken fixtures", "Worn flooring", "Structural issues"];

export const propertyTypes: { name: string; text: string }[] = [
  { name: "Apartments", text: "Compact spaces where the kitchen and bathroom do a lot of work. A deep clean often focuses there, along with balcony doors and entry areas." },
  { name: "Units", text: "Often older fittings and hard-wearing surfaces, where built-up grime in wet areas benefits from extra time and care." },
  { name: "Townhouses", text: "Multiple levels mean stairs, more than one bathroom and plenty of skirting boards and handrails to cover." },
  { name: "Family homes", text: "More rooms and more traffic. You can choose priority areas, such as the kitchen and bathrooms, rather than every room at once." },
  { name: "Rental properties", text: "Useful for tenants who want a thorough clean mid-lease, or owners preparing a property between occupants." },
];

export const pricingFactors = [
  "Property size",
  "Number of rooms",
  "Bathrooms",
  "Condition",
  "Requested scope",
  "Priority areas",
  "Accessibility",
  "Additional services",
];

export const preparation = [
  "Put away valuables and personal items",
  "Clear surfaces where possible",
  "Identify your priority areas",
  "Tell us about any pets",
  "Explain access arrangements",
  "Mention any surfaces requiring special care",
];

export const journey: { title: string; text: string }[] = [
  { title: "Tell Us", text: "Describe the property and what needs attention." },
  { title: "Choose Your Priorities", text: "Tell us which rooms or areas matter most." },
  { title: "Receive Your Quote", text: "Get a clear quote based on the requested scope." },
  { title: "Enjoy the Reset", text: "The agreed areas receive detailed cleaning." },
];

export const deepFaqs: Faq[] = [
  {
    question: "What is included in a deep clean?",
    answer:
      "A deep clean covers kitchens, bathrooms, living areas, bedrooms and common areas in more detail than a routine clean, including built-up grime, skirting boards, doors and handles, fixtures and other overlooked surfaces. The exact scope depends on your property and what's agreed in your quote.",
  },
  {
    question: "How is deep cleaning different from regular house cleaning?",
    answer:
      "Regular cleaning maintains a home that's already in good shape: dusting, vacuuming, mopping and wiping down kitchens and bathrooms. Deep cleaning spends more time on detail, such as built-up grime, grout, skirting boards and areas that routine cleans don't usually reach.",
  },
  {
    question: "How long does a deep clean take?",
    answer:
      "It depends on the size of the property, its condition and the areas you want covered. A small apartment with a focused scope takes far less time than a larger home with several bathrooms. We'll give you a better idea once we know the details.",
  },
  {
    question: "Can I request specific rooms to be deep cleaned?",
    answer:
      "Yes. You can choose priority rooms or areas, such as just the kitchen and bathrooms, rather than the whole home. Let us know your priorities when you request a quote.",
  },
  {
    question: "Do you clean kitchens and bathrooms?",
    answer:
      "Yes. Kitchens and bathrooms are usually the main focus of a deep clean, including benchtops, splashbacks, cooktops, cabinet fronts, showers, baths, vanities, toilets, tiles and fixtures.",
  },
  {
    question: "Can deep cleaning remove stains?",
    answer:
      "Many marks and built-up stains can be improved or removed, but results depend on the type and age of the stain and the condition of the surface. Some stains are permanent, and cleaning can't repair damaged or worn surfaces.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No, as long as we can access the property. You can arrange keys or access codes in advance. Let us know about pets and any surfaces that need special care before the clean.",
  },
  {
    question: "Do you offer one-off deep cleaning?",
    answer:
      "Yes. A deep clean can be booked as a one-off service, for example before guests arrive, after a busy period or as a seasonal reset. There's no ongoing commitment.",
  },
  {
    question: "How do I get a deep cleaning quote?",
    answer:
      "Send us your property type, suburb, number of bedrooms and bathrooms, and your priority areas. You can use the priority selector on this page to add them to your email automatically, or call us to talk it through.",
  },
];
