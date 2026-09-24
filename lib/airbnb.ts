import type { LucideIcon } from "lucide-react";
import {
  Bath,
  BedDouble,
  Building,
  Building2,
  CookingPot,
  DoorOpen,
  Eye,
  Home,
  House,
  KeyRound,
  LayoutGrid,
  LogOut,
  Sofa,
  SprayCan,
  SearchCheck,
  Hotel,
  Waves,
  UserRound,
  Briefcase,
  TreePalm,
  ChartLine,
} from "lucide-react";
import type { Faq } from "./content";
import { quoteMailto } from "./site";

export const PAGE_PATH = "/services/airbnb-cleaning/";

export const airbnbQuoteMailHref = quoteMailto(
  "Airbnb cleaning quote request",
  "Hi,\n\nI'd like a quote for Airbnb / short-stay cleaning.\n\nProperty type (apartment, unit, house, townhouse):\nSuburb:\nBedrooms:\nBathrooms:\nTypical booking pattern (e.g. turnovers per week):\nCleaning required (between stays, scheduled, one-off):\nAnything else we should know:\n\nThanks,",
);

export type StayImage = { src: string; alt: string; width: number; height: number };

/** Illustrations for now. Replace with genuine photos of the same filenames in /public/images. */
export const images = {
  bedroom: {
    src: "/images/airbnb-cleaning-melbourne-bedroom.webp",
    alt: "Guest-ready short-stay bedroom with a tidy bed, bedside lamps and a garden window",
    width: 1280,
    height: 960,
  },
  apartment: {
    src: "/images/airbnb-cleaning-melbourne-apartment.webp",
    alt: "Clean short-stay apartment living area with a city view and a guest suitcase by the door",
    width: 1280,
    height: 960,
  },
  bathroom: {
    src: "/images/airbnb-cleaning-melbourne-bathroom.webp",
    alt: "Clean short-stay bathroom with an arched mirror, vanity, toilet and walk-in shower",
    width: 1280,
    height: 960,
  },
} satisfies Record<string, StayImage>;

export const turnover: { step: string; title: string; text: string; icon: LucideIcon; status: string }[] = [
  { step: "01", title: "Guest Checks Out", text: "The previous stay is complete and the property needs resetting.", icon: LogOut, status: "Checked out" },
  { step: "02", title: "Cleaning & Reset", text: "Bathrooms, kitchen, bedrooms, living areas and key touchpoints are cleaned.", icon: SprayCan, status: "In progress" },
  { step: "03", title: "Final Check", text: "The property is reviewed for presentation and obvious missed areas.", icon: SearchCheck, status: "Checking" },
  { step: "04", title: "Guest Ready", text: "The accommodation is prepared for the next stay.", icon: KeyRound, status: "Ready" },
];

export const differences: { lead: string; text: string }[] = [
  { lead: "Turnover is frequent.", text: "A short-stay property can be cleaned several times in a week, often with limited time between check-out and check-in." },
  { lead: "Every guest starts fresh.", text: "Different people use the same bathroom, kitchen and bedroom in quick succession, so nothing from the last stay should be left behind." },
  { lead: "Presentation matters.", text: "Guests compare what they see with the listing photos. Surfaces, floors and bathrooms need to look cared for, not just wiped." },
  { lead: "Wet areas need care.", text: "Soap and water residue, marks on mirrors and splashes on benchtops are what guests notice first in bathrooms and kitchens." },
  { lead: "Bedrooms set the tone.", text: "A bedroom should feel fresh and prepared, with clean surfaces and floors and nothing left from the previous guest." },
  { lead: "Touchpoints add up.", text: "Handles, switches, remotes and tabletops are touched by every guest and deserve attention every time." },
  { lead: "Consistency is the point.", text: "The fifth guest this month should walk into the same standard as the first." },
];

export type Room = { name: string; icon: LucideIcon; items: string[] };

export const rooms: Room[] = [
  { name: "Kitchen", icon: CookingPot, items: ["Benchtops", "Sink", "Cooktop", "Appliance exteriors", "Dining surfaces", "Floors", "Visible marks and residue"] },
  { name: "Bathrooms", icon: Bath, items: ["Toilet", "Shower / bath", "Vanity", "Mirrors", "Fixtures", "Floors", "Visible soap and water residue"] },
  { name: "Bedrooms", icon: BedDouble, items: ["Surfaces", "Floors", "Furniture", "Visible dust", "Guest-facing presentation"] },
  { name: "Living Areas", icon: Sofa, items: ["Tables and surfaces", "Furniture", "Floors", "Visible dust", "Guest-facing areas"] },
  { name: "Entry & Common Areas", icon: DoorOpen, items: ["Entry surfaces", "Floors", "High-touch areas", "General presentation"] },
];

export const guestEye = [
  { title: "First impressions", text: "The entry and living area are the first things a guest sees." },
  { title: "Clean-looking surfaces", text: "Benchtops, tables and ledges free of crumbs, marks and dust." },
  { title: "Fresh bathrooms", text: "Mirrors, taps and the shower without residue from the last stay." },
  { title: "Presentable bedrooms", text: "Clear surfaces, clean floors and a room that feels ready." },
  { title: "Tidy common spaces", text: "Hallways and shared areas that look looked-after." },
  { title: "Consistent presentation", text: "The same standard from one booking to the next." },
];

export const audiences: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Airbnb Hosts", text: "For owners managing their own short-stay property.", icon: UserRound },
  { title: "Short-Stay Property Managers", text: "For managers coordinating cleaning across guest stays.", icon: Briefcase },
  { title: "Holiday Rental Owners", text: "For properties that need reliable cleaning between bookings.", icon: TreePalm },
  { title: "Investment Property Hosts", text: "For owners using their property as a short-term rental.", icon: ChartLine },
];

export const frequencyOptions: { title: string; text: string }[] = [
  { title: "Between every guest stay", text: "A turnover clean after each check-out, timed around your bookings." },
  { title: "Regular scheduled cleaning", text: "A set schedule, useful for longer stays or steady occupancy." },
  { title: "Multiple turnovers per week", text: "For busy listings with frequent short bookings." },
  { title: "Occasional / one-off cleaning", text: "A thorough reset between seasons or before a listing goes live." },
];

export const propertyTypes: { name: string; icon: LucideIcon; height: string }[] = [
  { name: "Apartments", icon: Building2, height: "h-44" },
  { name: "Units", icon: Building, height: "h-32" },
  { name: "Houses", icon: House, height: "h-28" },
  { name: "Townhouses", icon: Home, height: "h-36" },
  { name: "Guest accommodation", icon: Hotel, height: "h-40" },
  { name: "Short-stay properties", icon: KeyRound, height: "h-32" },
];

export const inclusions: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Surface Cleaning", text: "Benchtops, tables, ledges and accessible surfaces wiped and dusted.", icon: LayoutGrid },
  { title: "Bathroom Cleaning", text: "Toilet, shower or bath, vanity, mirrors, fixtures and floors.", icon: Bath },
  { title: "Kitchen Cleaning", text: "Benchtops, sink, cooktop, appliance exteriors and dining surfaces.", icon: CookingPot },
  { title: "Floor Cleaning", text: "Vacuuming and mopping throughout the property.", icon: Waves },
  { title: "Bedroom Reset", text: "Surfaces, furniture and floors cleaned so the room is presentable.", icon: BedDouble },
  { title: "Common Area Cleaning", text: "Entry, hallways and high-touch areas such as handles and switches.", icon: DoorOpen },
  { title: "General Presentation", text: "A final look over the property for visible dust and marks.", icon: Eye },
];

export const qualityChecks = [
  "Bathrooms presentable",
  "Kitchen surfaces clean",
  "Bedrooms reset",
  "Floors clean",
  "Common areas presentable",
  "Visible dust and marks addressed",
];

export const pricingFactors = [
  "Property size",
  "Number of bedrooms",
  "Number of bathrooms",
  "Property condition",
  "Cleaning frequency",
  "Turnover requirements",
  "Scope of cleaning",
];

export const booking: { title: string; text: string }[] = [
  { title: "Tell Us About the Property", text: "Type, size, suburb and booking pattern." },
  { title: "Discuss Cleaning Requirements", text: "What needs cleaning, and when." },
  { title: "Confirm the Service", text: "Agree the scope and schedule." },
  { title: "Cleaning Visit", text: "The property is reset as agreed." },
];


export const airbnbFaqs: Faq[] = [
  {
    question: "What does Airbnb cleaning include?",
    answer:
      "A turnover clean covers the kitchen, bathrooms, bedrooms, living areas and entry, including surfaces, floors, fixtures and high-touch areas, followed by a final look over the property's presentation. Laundry, linen changes and restocking aren't part of this cleaning scope, so let us know your requirements when you request a quote.",
  },
  {
    question: "Do you clean Airbnb apartments and houses?",
    answer:
      "Yes. We clean apartments, units, townhouses, houses and other short-stay accommodation across Melbourne. For apartment buildings, tell us about parking and building access.",
  },
  {
    question: "Can Airbnb cleaning be arranged between guest stays?",
    answer:
      "Yes, cleaning can be arranged between stays. Availability depends on your check-out and check-in times and our schedule, so share your typical booking pattern and we'll discuss what we can offer.",
  },
  {
    question: "How is Airbnb cleaning different from regular house cleaning?",
    answer:
      "Regular house cleaning maintains a home someone lives in. A short-stay turnover resets a property for a new guest, so the focus is on presentation, bathrooms, kitchens, high-touch areas and leaving nothing behind from the previous stay.",
  },
  {
    question: "How much does Airbnb cleaning cost in Melbourne?",
    answer:
      "It depends on the property size, number of bedrooms and bathrooms, condition, cleaning frequency, turnover requirements and scope. Send us your property details for a free quote.",
  },
  {
    question: "Do you clean kitchens and bathrooms between guests?",
    answer:
      "Yes. Kitchens and bathrooms are a key part of every turnover clean, including benchtops, sinks, cooktops, appliance exteriors, toilets, showers, vanities, mirrors and fixtures.",
  },
  {
    question: "Can I arrange recurring Airbnb cleaning?",
    answer:
      "Yes. Recurring cleaning can be discussed based on how often your property is booked, whether that's between every stay, several times a week or on a regular schedule.",
  },
  {
    question: "How do I request an Airbnb cleaning quote?",
    answer:
      "Email or call us with your property type, suburb, number of bedrooms and bathrooms, and your typical booking pattern. We'll come back with a clear quote.",
  },
];
