import type { LucideIcon } from "lucide-react";
import {
  Bath,
  BedDouble,
  Building,
  Building2,
  CalendarDays,
  ClipboardCheck,
  CookingPot,
  DoorOpen,
  Home,
  House,
  KeyRound,
  MapPinned,
  Repeat,
  Sofa,
  UserRound,
  Warehouse,
} from "lucide-react";
import type { Faq } from "./content";
import { quoteMailto } from "./site";

export const PAGE_PATH = "/services/end-of-lease-cleaning/";

export const endOfLeaseQuoteMailHref = quoteMailto(
  "End of lease cleaning quote request",
  "Hi,\n\nI'd like a free quote for an end of lease clean.\n\nSuburb:\nProperty type (apartment, unit, townhouse, house):\nBedrooms:\nBathrooms:\nPreferred date:\nExtras (oven, rangehood, fridge, interior windows, balcony, garage):\nAnything needing special attention:\n\nThanks,",
);

export const trustPoints: { label: string; icon: LucideIcon }[] = [
  { label: "Rental-focused cleaning", icon: KeyRound },
  { label: "Detailed room-by-room approach", icon: ClipboardCheck },
  { label: "One-off bookings", icon: Repeat },
  { label: "Flexible scheduling", icon: CalendarDays },
  { label: "Melbourne-wide service", icon: MapPinned },
];

export type Room = { name: string; icon: LucideIcon; items: string[]; featured?: boolean };

export const checklist: Room[] = [
  {
    name: "Kitchen",
    icon: CookingPot,
    featured: true,
    items: [
      "Benchtops",
      "Splashbacks",
      "Sink",
      "Cooktop",
      "Rangehood exterior",
      "Cabinet fronts",
      "Appliance exteriors",
      "Floors",
      "Visible marks and built-up grime where applicable",
    ],
  },
  {
    name: "Bathrooms",
    icon: Bath,
    items: ["Shower", "Bath", "Toilet", "Vanity", "Mirrors", "Fixtures", "Tiles", "Floors"],
  },
  {
    name: "Bedrooms",
    icon: BedDouble,
    items: ["Dusting", "Built-in wardrobe surfaces", "Skirting boards", "Doors and handles", "Floors"],
  },
  {
    name: "Living & Dining Areas",
    icon: Sofa,
    items: ["Dusting", "Surfaces", "Skirting boards", "Doors and handles", "Vacuuming", "Mopping"],
  },
  {
    name: "Hallways & Entry Areas",
    icon: DoorOpen,
    items: ["Dusting", "Floors", "Skirting boards", "Doors and handles"],
  },
];

export const standardInclusions = [
  "Dusting",
  "Vacuuming",
  "Mopping",
  "Kitchen cleaning",
  "Bathroom cleaning",
  "Surface cleaning",
  "Skirting boards",
  "Doors and handles",
  "General room cleaning",
];

export const additionalCleaning = [
  "Oven cleaning",
  "Rangehood cleaning",
  "Fridge cleaning",
  "Interior windows",
  "Extra detail work",
  "Balcony cleaning",
  "Garage cleaning",
];

export const inspectionTips: { title: string; text: string }[] = [
  {
    title: "Visible surfaces",
    text: "Benchtops, sills, shelves and ledges collect dust quickly once furniture is moved. They're usually the first thing people notice when walking through.",
  },
  {
    title: "Kitchen grease",
    text: "Cooktops, splashbacks, rangehood exteriors and cabinet fronts near the stove often carry a film of grease that takes proper degreasing rather than a quick wipe.",
  },
  {
    title: "Bathroom build-up",
    text: "Soap scum on shower screens, residue on taps and marks around the toilet and vanity are common focus points in a bathroom.",
  },
  {
    title: "Floors",
    text: "Once the rooms are empty, floors are fully exposed. Corners, edges and the areas under where furniture stood need vacuuming and mopping.",
  },
  {
    title: "Skirting boards",
    text: "Dust settles along skirting boards throughout a tenancy and becomes very obvious in an empty room.",
  },
  {
    title: "Doors and handles",
    text: "Fingerprints and scuffs around handles, light switches and door edges are easy to overlook but quick to spot.",
  },
  {
    title: "Accessible windows",
    text: "Interior glass, tracks and sills that can be safely reached can be added to the scope. Windows that are hard to access may need to be discussed first.",
  },
  {
    title: "Appliances in scope",
    text: "If oven, rangehood or fridge cleaning is part of your booking, these are cleaned as agreed. Let us know early so they're included in the quote.",
  },
];

export type ShowcaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  caption: string;
};

/**
 * Illustrations for now. Replace with real (consented) job photos of the same
 * filenames in /public/images. Only use genuine photos from actual jobs.
 */
export const showcase: ShowcaseImage[] = [
  {
    src: "/images/end-of-lease-cleaning-melbourne.webp",
    alt: "Empty rental living area with packed moving boxes, a completed checklist and keys ready for handover",
    width: 1280,
    height: 960,
    label: "Handover",
    caption: "Empty rooms, clean floors and a checklist worked through before the keys go back.",
  },
  {
    src: "/images/rental-kitchen-cleaning-melbourne.webp",
    alt: "Clean rental kitchen with wiped benchtops, splashback, cooktop and oven door",
    width: 1280,
    height: 960,
    label: "Kitchen",
    caption: "Benchtops, splashback, cooktop and cabinet fronts cleaned of grease and marks.",
  },
  {
    src: "/images/rental-bathroom-cleaning-melbourne.webp",
    alt: "Clean rental bathroom with a clear shower screen, polished mirror, vanity and toilet",
    width: 1280,
    height: 960,
    label: "Bathroom",
    caption: "Shower, screen, mirror, vanity and toilet cleaned, with tiles and floors wiped down.",
  },
];

export const audiences: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Tenants Moving Out",
    text: "For renters preparing their property for handover, so you can focus on the move itself.",
    icon: UserRound,
  },
  {
    title: "Property Owners",
    text: "For owners preparing a property between tenants or before it's advertised again.",
    icon: House,
  },
  {
    title: "Property Managers",
    text: "For coordinating cleaning between tenancies when a vacated property needs attention.",
    icon: ClipboardCheck,
  },
  {
    title: "Landlords",
    text: "For getting a rental property clean and presentable for the next occupant.",
    icon: KeyRound,
  },
];

export type ProcessStep = { title: string; text: string; details?: string[] };

export const processSteps: ProcessStep[] = [
  {
    title: "Tell Us About the Property",
    text: "Send through the key details so we understand the size and scope of the clean.",
    details: ["Suburb", "Property type", "Bedrooms", "Bathrooms", "Preferred date", "Requested extras"],
  },
  {
    title: "Receive Your Quote",
    text: "We review the requirements and provide a clear quote based on what you've told us.",
  },
  {
    title: "Book Your Clean",
    text: "Choose a suitable date and confirm the scope, including any extras you'd like added.",
  },
  {
    title: "Final Clean",
    text: "The agreed areas are cleaned according to the booking, room by room.",
  },
  {
    title: "Property Handover",
    text: "The property is left clean and ready for the next step, whether that's your final inspection or the next tenant.",
  },
];

export const propertyTypes: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Apartments",
    text: "Compact layouts with a lot of detail in kitchens and bathrooms. Building access and parking are worth sorting out before the day.",
    icon: Building2,
  },
  {
    title: "Units",
    text: "Often a mix of older fittings and hard-wearing floors, where built-up grime in wet areas needs extra care.",
    icon: Building,
  },
  {
    title: "Townhouses",
    text: "Multiple levels mean stairs, extra bathrooms and sometimes a garage or courtyard to consider in the scope.",
    icon: Home,
  },
  {
    title: "Family homes",
    text: "Larger properties with more bedrooms, living spaces and outdoor areas, usually planned as a longer clean.",
    icon: House,
  },
  {
    title: "Rental properties",
    text: "Any vacated rental being handed back to an agent or owner, or prepared for the next tenant.",
    icon: Warehouse,
  },
];

export const pricingFactors = [
  "Property size",
  "Number of bedrooms",
  "Number of bathrooms",
  "Property condition",
  "Cleaning scope",
  "Oven and fridge cleaning",
  "Windows",
  "Balconies",
  "Garages",
  "Other requested extras",
  "Access to the property",
];

export const preparationSteps = [
  "Remove all personal belongings from the property",
  "Empty cupboards, drawers and wardrobes where required",
  "Remove rubbish and anything being left behind",
  "Defrost and empty the fridge or freezer if appliance cleaning is requested",
  "Make sure our cleaners can access the property (keys, codes or lockbox details)",
  "Provide parking and building access information",
  "Tell us about any areas needing special attention",
];

export const notRepairs = [
  "Holes in walls",
  "Broken fittings",
  "Damaged flooring",
  "Chipped paint",
  "Permanent stains",
  "Structural problems",
];

export const endOfLeaseFaqs: Faq[] = [
  {
    question: "What is included in an end of lease clean?",
    answer:
      "A standard end of lease clean covers the kitchen, bathrooms, bedrooms, living and dining areas, hallways and entry, including dusting, surfaces, skirting boards, doors and handles, vacuuming and mopping. Extras such as oven, rangehood or fridge cleaning, interior windows, balconies and garages can be added. The exact scope is confirmed in your quote.",
  },
  {
    question: "Does end of lease cleaning guarantee my bond refund?",
    answer:
      "No cleaning company can guarantee a bond outcome. A thorough clean helps prepare the property for inspection, but bond decisions depend on the property's overall condition, your rental agreement, the final inspection and other factors outside of cleaning, such as damage or repairs.",
  },
  {
    question: "How much does end of lease cleaning cost in Melbourne?",
    answer:
      "It depends on the property. Size, the number of bedrooms and bathrooms, the property's condition, access and any extras such as oven or window cleaning all affect the price. Send us your property details for a free quote.",
  },
  {
    question: "Do you clean ovens during an end of lease clean?",
    answer:
      "Oven cleaning is available as an extra. Whether it's included depends on the scope you choose, so mention it when requesting your quote and it will be listed in the booking.",
  },
  {
    question: "Do I need to be present during the cleaning?",
    answer:
      "No, as long as our cleaners can access the property. You can arrange keys, a lockbox or building access in advance. Some people prefer to be there at the start or end to walk through any specific requests.",
  },
  {
    question: "Can you clean apartments?",
    answer:
      "Yes. We clean apartments and units as well as townhouses and houses. For apartment buildings, please let us know about parking, lifts and any building access requirements.",
  },
  {
    question: "Do you clean windows?",
    answer:
      "Interior windows can be added to your clean. What can be cleaned depends on how accessible the windows are and the scope agreed in your quote. Hard-to-reach or high exterior windows may not be suitable.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "As early as you can once you know your moving date. Availability varies, and end of month is often busy with moves, so booking ahead gives you the best chance of getting the date and time you want.",
  },
  {
    question: "Can I request additional cleaning?",
    answer:
      "Yes. Tell us what else you'd like cleaned, such as extra detail work, a balcony or a garage, and we'll include it in your quote where it's within scope.",
  },
];
