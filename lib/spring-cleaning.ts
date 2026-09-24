import type { Faq } from "./content";
import { quoteMailto } from "./site";

export const PAGE_PATH = "/services/spring-cleaning/";

export const springQuoteMailHref = quoteMailto(
  "Spring cleaning quote request",
  "Hi,\n\nI'd like a quote for a spring clean.\n\nProperty type (house, apartment, unit, townhouse):\nSuburb:\nBedrooms:\nBathrooms:\nPriority areas (whole home, kitchen, bathrooms, dust and surfaces, floors):\nOne-off or recurring:\nPreferred date:\n\nThanks,",
);

export type SpringImage = { src: string; alt: string; width: number; height: number };

/** Illustrations for now. Replace with genuine photos of the same filenames in /public/images. */
export const images = {
  living: {
    src: "/images/spring-cleaning-melbourne-living.webp",
    alt: "Bright living room with an open window, a light breeze through the curtain and spring blossom on the coffee table",
    width: 1280,
    height: 960,
  },
  kitchen: {
    src: "/images/spring-cleaning-melbourne-kitchen.webp",
    alt: "Fresh, sunlit kitchen with clear benchtops, open shelves and a jar of blossom by the window",
    width: 1280,
    height: 960,
  },
  bathroom: {
    src: "/images/spring-cleaning-melbourne-bathroom.webp",
    alt: "Light-filled bathroom with an oval mirror, pale green vanity and a freestanding bath",
    width: 1280,
    height: 960,
  },
  bedroom: {
    src: "/images/spring-cleaning-melbourne-bedroom.webp",
    alt: "Airy bedroom with fresh linen and a blossom tree outside the open window",
    width: 1280,
    height: 960,
  },
} satisfies Record<string, SpringImage>;

/** The four-word story used through the page. */
export const resetWords = [
  { word: "Refresh", line: "Bring the whole home back to a clean baseline." },
  { word: "Declutter", line: "You clear the way, so surfaces can be reached." },
  { word: "Detail", line: "Extra attention for the spots routine cleans skip." },
  { word: "Reset", line: "Start the new season in a cleaner-feeling home." },
];

export const seasonalUses = [
  { title: "Refreshing rooms", text: "Every room brought back to a clean, comfortable baseline." },
  { title: "Tackling overlooked areas", text: "The ledges, frames and corners that routine visits move past." },
  { title: "Clearing accumulated dust", text: "Winter dust on surfaces, skirting and around accessible furniture." },
  { title: "Extra attention for wet areas", text: "More time for kitchens and bathrooms than a quick maintenance clean." },
  { title: "Refreshing floors and surfaces", text: "Accessible floors and surfaces cleaned throughout the home." },
  { title: "Getting ready for the season", text: "A cleaner-feeling home for warmer, lighter months ahead." },
];

export type MapRoom = { id: string; name: string; items: string[] };

export const homeMap: MapRoom[] = [
  { id: "kitchen", name: "Kitchen", items: ["Surfaces", "Sink", "Cooktop", "Accessible cabinet areas", "Floors"] },
  { id: "bathrooms", name: "Bathrooms", items: ["Shower", "Bath", "Vanity", "Mirrors", "Fixtures", "Floors"] },
  { id: "bedrooms", name: "Bedrooms", items: ["Accessible surfaces", "Furniture surfaces", "Floors", "Dust-prone areas"] },
  { id: "living", name: "Living Areas", items: ["Surfaces", "Furniture-accessible areas", "Floors", "General dust removal"] },
  { id: "entry", name: "Entryways", items: ["Entry surfaces", "Door and frame", "Touchpoints", "Floors"] },
  { id: "common", name: "Common Areas", items: ["Hallways", "Stairs where applicable", "Accessible ledges", "Floors"] },
];

export const overlooked = [
  "Behind and around accessible furniture",
  "Skirting boards",
  "Ledges",
  "Door frames",
  "Accessible corners",
  "Light switches and touchpoints",
  "Window-area surfaces",
  "Other visible dust-prone areas",
];

export type RoomStory = { title: string; lede: string; items: string[]; image: SpringImage };

export const roomStories: RoomStory[] = [
  {
    title: "Kitchen Reset",
    lede: "The kitchen gets the most use through winter. A spring reset focuses on accessible surfaces, the presentation of the room and the floors underfoot.",
    items: ["Benchtops and accessible surfaces", "Sink and cooktop", "Accessible cabinet fronts", "Floors"],
    image: images.kitchen,
  },
  {
    title: "Bathroom Refresh",
    lede: "Bathrooms benefit from time that a routine clean doesn't always allow, with attention to fixtures and the areas around them.",
    items: ["Shower and bath areas", "Vanity and mirrors", "Fixtures", "Floors"],
    image: images.bathroom,
  },
  {
    title: "Bedroom Refresh",
    lede: "Bedrooms collect quiet dust over the colder months. A refresh covers surfaces, floors and the accessible dust-prone areas.",
    items: ["Accessible surfaces", "Furniture surfaces", "Dust-prone areas", "Floors"],
    image: images.bedroom,
  },
  {
    title: "Living Space Refresh",
    lede: "The rooms where everyone gathers are the ones guests see first. The focus is surfaces, accessible areas around furniture, floors and general presentation.",
    items: ["Surfaces", "Furniture-accessible areas", "Floors", "General presentation"],
    image: images.living,
  },
];

export const audiences = [
  { title: "Busy households", text: "For people who want help with a seasonal reset." },
  { title: "Families", text: "For homes that need a broader refresh." },
  { title: "Homeowners", text: "For a planned whole-home clean." },
  { title: "Renters", text: "For refreshing your current living space." },
  { title: "Anyone ready for a new season", text: "For a cleaner-feeling home as the weather turns." },
];

export const checklist: { area: string; items: string[] }[] = [
  { area: "Kitchen", items: ["Benchtops", "Sink", "Cooktop", "Accessible surfaces", "Floors"] },
  { area: "Bathroom", items: ["Toilet", "Shower / bath", "Vanity", "Mirrors", "Floors"] },
  { area: "Bedrooms", items: ["Accessible surfaces", "Dust-prone areas", "Floors"] },
  { area: "Living Areas", items: ["Surfaces", "Accessible furniture areas", "Floors", "General dust"] },
  { area: "Common Areas", items: ["Entry", "Hallways", "Accessible touchpoints"] },
];

export const priorities: { title: string; text: string; swatch: string }[] = [
  { title: "Whole Home Refresh", text: "Every room, planned as one seasonal reset.", swatch: "bg-brand" },
  { title: "Kitchen Focus", text: "More of the time spent on the kitchen.", swatch: "bg-wattle" },
  { title: "Bathroom Focus", text: "Extra attention for showers, baths and vanities.", swatch: "bg-[#8fc6b6]" },
  { title: "Dust & Surface Focus", text: "Ledges, skirting, frames and accessible surfaces.", swatch: "bg-[#f2b8c6]" },
  { title: "Floors & Common Areas", text: "Floors throughout, plus entries and hallways.", swatch: "bg-[#c9a97e]" },
];

export const pricingFactors = [
  "Property size",
  "Number of rooms",
  "Number of bathrooms",
  "Current condition",
  "Scope of cleaning",
  "Priority areas",
  "Accessibility",
  "One-off vs recurring",
];

export const flow = [
  "Tell us about your home",
  "Discuss your priorities",
  "Confirm the cleaning scope",
  "Complete the seasonal clean",
  "Enjoy a refreshed space",
];

export const springFaqs: Faq[] = [
  {
    question: "What is spring cleaning?",
    answer:
      "Spring cleaning is a planned, whole-home refresh at the change of season. It uses the same professional cleaning methods as a regular clean, but gives more time to the areas that routine cleaning often moves past.",
  },
  {
    question: "What does a spring clean include?",
    answer:
      "It typically covers the kitchen, bathrooms, bedrooms, living areas, entryways and common areas, including accessible surfaces, fixtures, skirting boards, ledges, door frames, touchpoints and floors. The exact scope depends on your home, what's accessible and what we agree when you request a quote.",
  },
  {
    question: "How is spring cleaning different from regular house cleaning?",
    answer:
      "Regular house cleaning maintains the home as part of an ongoing routine. A seasonal clean is a planned, one-time opportunity to give extra attention to areas that may not be part of every visit. It doesn't automatically include every possible deep-cleaning task.",
  },
  {
    question: "Can I request specific areas to be prioritised?",
    answer:
      "Yes. You can ask for a whole-home refresh or focus on the kitchen, bathrooms, dust and surfaces, or floors and common areas. Let us know your priorities when you request a quote.",
  },
  {
    question: "Is spring cleaning suitable for apartments?",
    answer:
      "Yes. A seasonal clean works for apartments and units as well as houses and townhouses. For apartment buildings, let us know about parking and building access.",
  },
  {
    question: "How much does spring cleaning cost in Melbourne?",
    answer:
      "It depends on the property size, number of rooms and bathrooms, current condition, scope, priority areas, accessibility, and whether it's a one-off or recurring clean. Send us your details for a free quote.",
  },
  {
    question: "Can I book a one-off spring clean?",
    answer:
      "Yes. It can be booked as a one-off seasonal reset. There's no ongoing commitment, although you can discuss regular cleaning afterwards if you'd like.",
  },
  {
    question: "How do I request a spring cleaning quote?",
    answer:
      "Email or call us with your property type, suburb, number of bedrooms and bathrooms, your priority areas and your preferred date. We'll come back with a clear quote.",
  },
];
