import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  CalendarClock,
  CalendarRange,
  Clock,
  Layers,
  MapPinned,
  MessagesSquare,
  Moon,
  Palette,
  Repeat,
  Ruler,
  ShieldCheck,
  Sparkles,
  Store,
  Stethoscope,
  Sunrise,
  Users,
  Building2,
  Bath,
  DoorOpen,
  Gauge,
  SlidersHorizontal,
  Timer,
  Waves,
  Wrench,
  LayoutGrid,
} from "lucide-react";
import type { Faq } from "./content";
import { quoteMailto } from "./site";

export const PAGE_PATH = "/services/commercial-cleaning/";

export const commercialQuoteMailHref = quoteMailto(
  "Commercial cleaning quote request",
  "Hi,\n\nWe'd like a quote for commercial cleaning.\n\nBusiness name:\nBusiness type (office, retail, studio, clinic, other):\nSuburb:\nApproximate size (m² or number of rooms):\nBathrooms:\nPreferred frequency (daily, weekly, fortnightly, custom, one-off):\nPreferred time (before opening, after closing, other):\nCleaning requirements:\n\nThanks,",
);

export type WorkplaceImage = { src: string; alt: string; width: number; height: number };

/** Illustrations for now: replace with genuine photos of the same filenames in /public/images. */
export const images = {
  office: {
    src: "/images/commercial-cleaning-melbourne-office.webp",
    alt: "Open-plan office with clean desks and a cleaning trolley in front of city-view windows",
    width: 1280,
    height: 960,
  },
  workplace: {
    src: "/images/commercial-cleaning-melbourne-workplace.webp",
    alt: "Staff kitchenette and glass meeting room with a wet floor sign during cleaning",
    width: 1280,
    height: 960,
  },
  retail: {
    src: "/images/commercial-cleaning-melbourne-retail.webp",
    alt: "Tidy retail store with stocked shelves, a clothing rail, service counter and freshly mopped floor",
    width: 1280,
    height: 960,
  },
} satisfies Record<string, WorkplaceImage>;

export const valuePoints: { label: string; icon: LucideIcon }[] = [
  { label: "Flexible Cleaning Schedules", icon: CalendarClock },
  { label: "Before or After Business Hours", icon: Clock },
  { label: "Regular & One-Off Cleaning", icon: Repeat },
  { label: "Clear Communication", icon: MessagesSquare },
  { label: "Melbourne-Wide Service", icon: MapPinned },
];

export type Space = {
  title: string;
  text: string;
  icon: LucideIcon;
  image?: WorkplaceImage;
};

export const spaces: Space[] = [
  {
    title: "Offices",
    text: "Workspaces, meeting rooms, kitchens and common areas, kept clean and presentable for staff and visitors.",
    icon: Briefcase,
    image: images.office,
  },
  {
    title: "Retail Spaces",
    text: "Customer-facing areas, staff areas and shared spaces, cleaned around your trading hours.",
    icon: Store,
    image: images.retail,
  },
  {
    title: "Studios & Professional Workspaces",
    text: "Suitable for studios and smaller professional premises with their own mix of work and client areas.",
    icon: Palette,
  },
  {
    title: "Clinics & Professional Premises",
    text: "General cleaning of agreed accessible areas, such as reception and waiting areas, according to the required scope.",
    icon: Stethoscope,
  },
  {
    title: "Shared Commercial Spaces",
    text: "Common areas and shared facilities used by multiple tenants or teams.",
    icon: Users,
  },
  {
    title: "Small Business Premises",
    text: "Flexible cleaning for smaller commercial properties that don't need a large-scale service.",
    icon: Building2,
  },
];

export type ScopeGroup = { area: string; icon: LucideIcon; items: string[] };

export const scopeGroups: ScopeGroup[] = [
  {
    area: "Work Areas",
    icon: LayoutGrid,
    items: ["Dusting", "Surface cleaning", "Vacuuming", "Floor cleaning", "Waste removal where agreed"],
  },
  {
    area: "Kitchens & Staff Areas",
    icon: Waves,
    items: ["Benchtops", "Sinks", "Appliance exteriors", "Tables and surfaces", "Floors"],
  },
  {
    area: "Bathrooms",
    icon: Bath,
    items: ["Toilets", "Basins", "Mirrors", "Fixtures", "Floors"],
  },
  {
    area: "Common Areas",
    icon: DoorOpen,
    items: ["Entrances", "Hallways", "Shared spaces", "High-touch surfaces where included"],
  },
];

export type Schedule = {
  name: string;
  tagline: string;
  text: string;
  /** Two-week pattern (Mon–Sun, Mon–Sun) used for the visual only. */
  pattern: (0 | 1 | 2)[];
};

// 1 = cleaning day, 2 = flexible / to be agreed, 0 = no clean
export const schedules: Schedule[] = [
  {
    name: "Daily",
    tagline: "High-traffic workplaces",
    text: "For businesses that require frequent cleaning, such as busy offices or premises with steady customer traffic.",
    pattern: [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  },
  {
    name: "Weekly",
    tagline: "Regular maintenance",
    text: "For regular scheduled maintenance that keeps the workplace consistently clean from week to week.",
    pattern: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  },
  {
    name: "Fortnightly",
    tagline: "Lower-frequency needs",
    text: "For smaller or quieter premises with lower-frequency cleaning requirements.",
    pattern: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: "Custom",
    tagline: "Your own timetable",
    text: "For businesses needing a specific schedule, such as certain days of the week or cleaning timed around events.",
    pattern: [2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0],
  },
];

export const timingOptions: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Before opening",
    text: "The workplace is ready when staff and customers arrive.",
    icon: Sunrise,
  },
  {
    title: "After closing",
    text: "Cleaning happens once the day's work is done, with no one working around it.",
    icon: Moon,
  },
  {
    title: "During quieter periods",
    text: "For premises with predictable lulls, cleaning can be timed to avoid peak activity.",
    icon: Timer,
  },
  {
    title: "At another agreed time",
    text: "If none of these suit, we'll discuss a time that works for your operations.",
    icon: CalendarRange,
  },
];

export const benefits: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Reliable Scheduling", text: "Consistent, agreed cleaning arrangements you can plan around.", icon: CalendarClock },
  { title: "Flexible Service", text: "Cleaning scope discussed and set according to your property.", icon: SlidersHorizontal },
  { title: "Clear Communication", text: "Straightforward communication about requirements, changes and bookings.", icon: MessagesSquare },
  { title: "Professional Presentation", text: "A cleaner workplace for staff, clients and visitors.", icon: Sparkles },
  { title: "Minimal Disruption", text: "Cleaning scheduled around your business operations where possible.", icon: ShieldCheck },
  { title: "Local Melbourne Service", text: "Serving commercial customers across Melbourne and surrounding suburbs.", icon: MapPinned },
];

export type ProcessStep = { title: string; text: string; details?: string[] };

export const processSteps: ProcessStep[] = [
  {
    title: "Tell Us About Your Business",
    text: "Share the basics so we can understand the premises.",
    details: ["Business type", "Property location", "Approximate size", "Rooms / areas", "Preferred schedule", "Cleaning requirements"],
  },
  { title: "Discuss Your Requirements", text: "We review the cleaning scope and your scheduling needs with you." },
  { title: "Receive Your Quote", text: "You receive a clear quote based on the agreed requirements." },
  { title: "Confirm Your Schedule", text: "Choose a suitable service frequency and timing." },
  { title: "Cleaning Service", text: "The agreed areas are cleaned according to the selected scope." },
];

export const checklistAreas = [
  "Entrance and reception",
  "Workstations",
  "Meeting rooms",
  "Kitchens",
  "Bathrooms",
  "Floors",
  "Common areas",
  "Waste areas",
  "Frequently touched surfaces where included",
];

export const costFactors: { label: string; icon: LucideIcon }[] = [
  { label: "Property size", icon: Ruler },
  { label: "Number of rooms", icon: LayoutGrid },
  { label: "Number of bathrooms", icon: Bath },
  { label: "Floor type", icon: Layers },
  { label: "Cleaning frequency", icon: Repeat },
  { label: "Operating hours", icon: Clock },
  { label: "Current condition", icon: Gauge },
  { label: "Cleaning scope", icon: SlidersHorizontal },
  { label: "Additional services", icon: Wrench },
];

export const oneOffUses = [
  "Special events",
  "Workplace resets",
  "Occasional deep cleaning",
  "Preparing a property",
  "Post-renovation situations where applicable",
];

export const recurringUses = ["Offices", "Retail spaces", "Workplaces", "Shared commercial properties"];

export const commercialFaqs: Faq[] = [
  {
    question: "What types of businesses do you clean?",
    answer:
      "We clean offices, retail spaces, studios, clinics and professional premises, shared commercial spaces and small business premises. If your workplace doesn't fit neatly into one of these, tell us about it when you request a quote.",
  },
  {
    question: "How often can commercial cleaning be scheduled?",
    answer:
      "Cleaning can be scheduled daily, weekly, fortnightly or on a custom timetable, such as specific days of the week. The right frequency depends on how busy your premises are, so we'll talk it through with you rather than assume you need daily cleaning.",
  },
  {
    question: "Can cleaning be done outside business hours?",
    answer:
      "Yes. Many businesses prefer cleaning before opening or after closing, and some choose quieter periods during the day. We'll agree on a time that suits your operations when the schedule is set.",
  },
  {
    question: "Do you provide one-off commercial cleaning?",
    answer:
      "Yes. One-off cleans are useful for special events, workplace resets, occasional deep cleaning, preparing a property, or after renovations where applicable. You don't need to sign up for a recurring service.",
  },
  {
    question: "What areas can be included in a commercial cleaning service?",
    answer:
      "Commonly included areas are work areas, kitchens and staff areas, bathrooms and common areas such as entrances and hallways. Tasks like waste removal and cleaning of high-touch surfaces can be included where agreed. The exact scope is confirmed in your quote.",
  },
  {
    question: "How much does commercial cleaning cost in Melbourne?",
    answer:
      "It depends on your property and requirements. Size, the number of rooms and bathrooms, floor types, cleaning frequency, operating hours, the current condition and any additional services all affect the price. Send us your details for a free quote.",
  },
  {
    question: "Can I request a custom cleaning checklist?",
    answer:
      "Yes. The checklist can be adjusted to suit your property and the agreed scope, so you can prioritise the areas that matter most to your business.",
  },
  {
    question: "Do you clean offices and retail spaces?",
    answer:
      "Yes. Offices and retail spaces are two of the most common commercial premises we clean, from workstations and meeting rooms to customer-facing floors and staff areas.",
  },
  {
    question: "How do I request a commercial cleaning quote?",
    answer:
      "Email or call us with your business type, suburb, approximate property size, preferred cleaning frequency and preferred cleaning time. We'll review your requirements and come back with a clear quote.",
  },
];

export const quoteBrief: { label: string; hint: string; icon: LucideIcon }[] = [
  { label: "Business type", hint: "Office, retail, studio, clinic…", icon: Briefcase },
  { label: "Suburb", hint: "Where the premises are located", icon: MapPinned },
  { label: "Property size", hint: "Approximate m² or number of rooms", icon: Ruler },
  { label: "Cleaning frequency", hint: "Daily, weekly, fortnightly or custom", icon: Repeat },
  { label: "Preferred time", hint: "Before opening, after closing or other", icon: Clock },
];

