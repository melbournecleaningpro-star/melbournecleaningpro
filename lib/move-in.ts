import type { Faq } from "./content";
import { quoteMailto } from "./site";

export const PAGE_PATH = "/services/move-in-cleaning/";

export const moveInQuoteMailHref = quoteMailto(
  "Move-in cleaning quote request",
  "Hi,\n\nI'd like a quote for a move-in clean before I unpack.\n\nProperty type (house, apartment, unit, townhouse):\nSuburb:\nBedrooms:\nBathrooms:\nIs the property empty? (yes / partly / no):\nPreferred date (before move-in day):\nPriority areas:\nAccess arrangements:\n\nThanks,",
);

export type MoveImage = { src: string; alt: string; width: number; height: number };

/** Illustrations for now. Replace with genuine photos of the same filenames in /public/images. */
export const images = {
  emptyHome: {
    src: "/images/move-in-cleaning-melbourne-empty-home.webp",
    alt: "Empty living room with a large steel-framed window, bare timber floor and moving boxes waiting at the door",
    width: 1280,
    height: 960,
  },
  kitchen: {
    src: "/images/move-in-cleaning-melbourne-kitchen.webp",
    alt: "Empty, freshly cleaned kitchen with clear benchtops and an open space for the fridge",
    width: 1280,
    height: 960,
  },
  bedroom: {
    src: "/images/move-in-cleaning-melbourne-bedroom.webp",
    alt: "Empty bedroom with an open built-in wardrobe ready to be filled and a vacuum on the clean floor",
    width: 1280,
    height: 960,
  },
} satisfies Record<string, MoveImage>;

export const cleanSlate = [
  { title: "Floors are fully exposed", text: "With no furniture in the way, floors can be vacuumed and mopped edge to edge." },
  { title: "Surfaces come first", text: "Benchtops, shelves and ledges can be cleaned before anything is placed on them." },
  { title: "Kitchens and bathrooms get prepared", text: "The rooms you'll use on day one are ready before the kettle and toiletries go in." },
  { title: "Dust and marks are dealt with", text: "Visible dust and marks can be addressed before they end up on your belongings." },
  { title: "You settle in faster", text: "Unpacking into a clean space makes the property feel like home sooner." },
];

export type RoomRow = { name: string; items: string[]; note: string; image?: MoveImage };

export const roomRows: RoomRow[] = [
  {
    name: "Kitchen",
    items: ["Benchtops", "Sink", "Splashback", "Cooktop", "Accessible appliance exteriors", "Cabinets and surfaces where included", "Floors"],
    note: "Ready before the first plates and groceries go in.",
    image: images.kitchen,
  },
  {
    name: "Bathrooms",
    items: ["Toilet", "Shower", "Bath", "Vanity", "Mirrors", "Fixtures", "Floors"],
    note: "Cleaned before your own towels and toiletries arrive.",
  },
  {
    name: "Bedrooms",
    items: ["Accessible surfaces", "Built-in areas where included", "Floors", "Dust removal", "Visible marks"],
    note: "Built-in wardrobes are easiest to clean while they're still empty.",
    image: images.bedroom,
  },
  {
    name: "Living Areas",
    items: ["Accessible surfaces", "Floors", "Dust removal", "General presentation"],
    note: "Clear floors before the sofa, rugs and boxes take up the space.",
  },
  {
    name: "Entry & Common Areas",
    items: ["Entry surfaces", "Floors", "Accessible high-touch areas", "Visible dust and marks"],
    note: "The first space you'll walk through on moving day.",
  },
];

export const beforeBoxes = [
  "Floors are accessible",
  "Kitchen surfaces are accessible",
  "Bathrooms are easier to reach",
  "Built-in areas can be cleaned before they're filled",
  "Dust and visible marks can be addressed",
  "You can unpack into a cleaner environment",
];

export const comparison: { label: string; regular: string; moveIn: string }[] = [
  { label: "Purpose", regular: "Maintaining a home that's already lived in", moveIn: "Preparing a property before the new occupant settles in" },
  { label: "Timing", regular: "Ongoing, on a regular schedule", moveIn: "Once, before or around moving day" },
  { label: "The space", regular: "Furnished, with belongings in place", moveIn: "Usually empty or partly empty" },
  { label: "Focus", regular: "Keeping things tidy week to week", moveIn: "Giving you a clean starting point" },
];

export const audiences: { title: string; text: string }[] = [
  { title: "New homeowners", text: "Preparing a recently purchased property before moving in." },
  { title: "Renters", text: "Wanting the property cleaned before unpacking." },
  { title: "Families moving house", text: "Preparing the new place before furniture and boxes arrive." },
  { title: "Property owners", text: "Preparing a property for a new occupant." },
  { title: "People relocating", text: "Wanting the new space ready before settling in." },
];

export const propertyTypes = [
  "Houses",
  "Apartments",
  "Units",
  "Townhouses",
  "Rental properties",
  "Recently renovated homes",
];

export const prep = [
  { title: "Remove personal belongings if possible", text: "An empty property is easiest to clean, but a partly moved-in home is fine too." },
  { title: "Make sure the property is accessible", text: "Power and water connected, and nothing blocking the areas to be cleaned." },
  { title: "Share access instructions", text: "Keys, lockbox codes, building access or agent pick-up details." },
  { title: "Point out your priority areas", text: "Tell us which rooms matter most before you move in." },
  { title: "Mention special requirements", text: "Delicate surfaces, new finishes or anything that needs extra care." },
];

export type Priority = { id: "kitchen" | "bathroom" | "floors" | "whole"; title: string; text: string };

export const priorities: Priority[] = [
  { id: "kitchen", title: "Kitchen Priority", text: "Focus the time on benchtops, splashback, cooktop and cabinets so you can start cooking straight away." },
  { id: "bathroom", title: "Bathroom Priority", text: "Put the emphasis on showers, baths, vanities, toilets and fixtures." },
  { id: "floors", title: "Floors & Surfaces", text: "Concentrate on floors, skirting, ledges and accessible surfaces across the property." },
  { id: "whole", title: "Whole Property", text: "A full move-in clean across every room before you unpack." },
];

export const pricingFactors = [
  "Property size",
  "Bedrooms",
  "Bathrooms",
  "Property condition",
  "Cleaning required",
  "Accessibility",
  "Requested scope",
];

export const steps = [
  "Tell Us About Your New Property",
  "Discuss Your Cleaning Requirements",
  "Confirm the Service",
  "Get the Property Ready Before You Unpack",
];

export const moveInFaqs: Faq[] = [
  {
    question: "What is move-in cleaning?",
    answer:
      "Move-in cleaning is a clean of your new home or property before you unpack. It's done while the property is empty or nearly empty, so you start with a clean space rather than cleaning around furniture and boxes.",
  },
  {
    question: "What does move-in cleaning include?",
    answer:
      "It typically covers the kitchen, bathrooms, bedrooms, living areas and entry, including benchtops, sinks, splashbacks, cooktops, accessible appliance exteriors, toilets, showers, vanities, mirrors, fixtures, accessible surfaces and floors. Built-in areas and cabinets can be included when agreed.",
  },
  {
    question: "Is move-in cleaning suitable for rental properties?",
    answer:
      "Yes. Renters can book a move-in clean before unpacking, and owners can use it to prepare a property for a new occupant. It's separate from end of lease cleaning, which prepares a property for handover and inspection.",
  },
  {
    question: "Should I book cleaning before my furniture arrives?",
    answer:
      "If you can, yes. Empty rooms make floors, built-in areas and surfaces easier to reach. If your furniture is arriving on the same day, we can discuss timing and focus on the areas that matter most.",
  },
  {
    question: "Can you clean an empty house before I move in?",
    answer:
      "Yes. An empty house, apartment or unit is the ideal time for a move-in clean. You don't need to be there, as long as we have access to the property.",
  },
  {
    question: "How much does move-in cleaning cost in Melbourne?",
    answer:
      "It depends on the property size, number of bedrooms and bathrooms, condition, the amount of cleaning required, accessibility and the scope you request. Send us your details for a free quote.",
  },
  {
    question: "Can I request specific areas to be prioritised?",
    answer:
      "Yes. You might want the kitchen and bathrooms done first, or focus on floors and surfaces. Tell us your priorities when you request a quote.",
  },
  {
    question: "How do I request a move-in cleaning quote?",
    answer:
      "Email or call us with the property type, suburb, number of bedrooms and bathrooms, whether it's empty, and your preferred date before moving in. We'll come back with a clear quote.",
  },
];
