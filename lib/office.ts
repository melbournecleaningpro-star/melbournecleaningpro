import type { LucideIcon } from "lucide-react";
import {
  Ban,
  Briefcase,
  Building,
  DoorClosed,
  FileLock2,
  FlaskConical,
  Grid2x2,
  LayoutPanelTop,
  Moon,
  Repeat,
  Shuffle,
  SlidersHorizontal,
  Sunrise,
  Users,
  Wrench,
} from "lucide-react";
import type { Faq } from "./content";
import { quoteMailto } from "./site";

export const PAGE_PATH = "/services/office-cleaning/";

export const officeQuoteMailHref = quoteMailto(
  "Office cleaning quote request",
  "Hi,\n\nWe'd like a quote for office cleaning.\n\nBusiness name:\nOffice location (suburb):\nApproximate size (m² or number of rooms):\nBathrooms / kitchen or break areas:\nPreferred frequency (daily, several times a week, weekly, custom, one-off):\nPreferred time (before work, after hours, other):\nAreas requiring cleaning:\nAccess arrangements:\n\nThanks,",
);

export type OfficeImage = { src: string; alt: string; width: number; height: number };

/** Illustrations for now. Replace with genuine photos of the same filenames in /public/images. */
export const images = {
  workspace: {
    src: "/images/office-cleaning-melbourne-workspace.webp",
    alt: "Tidy office workstation with a monitor, desk lamp, chair and window view of the city",
    width: 1280,
    height: 960,
  },
  meeting: {
    src: "/images/office-cleaning-melbourne-meeting-room.webp",
    alt: "Clean meeting room with an oval table, chairs, wall screen and whiteboard",
    width: 1280,
    height: 960,
  },
  kitchen: {
    src: "/images/office-cleaning-melbourne-kitchen.webp",
    alt: "Office kitchenette with a coffee machine, sink, fridge and a small break table",
    width: 1280,
    height: 960,
  },
} satisfies Record<string, OfficeImage>;

export const workday: { label: string; text: string; icon: LucideIcon; tone: "wattle" | "brand" }[] = [
  { label: "Before Work", text: "Cleaning before staff arrive.", icon: Sunrise, tone: "wattle" },
  { label: "After Work", text: "Cleaning after the office closes.", icon: Moon, tone: "wattle" },
  { label: "Regular", text: "Scheduled recurring cleaning.", icon: Repeat, tone: "brand" },
  { label: "Flexible", text: "Cleaning scope based on your workplace.", icon: SlidersHorizontal, tone: "brand" },
];

export type Zone = { id: string; name: string; items: string[] };

export const zones: Zone[] = [
  { id: "reception", name: "Reception & Entrance", items: ["Dusting", "Surface cleaning", "Floors", "Doors and handles"] },
  { id: "workstations", name: "Workstations", items: ["Accessible desk surfaces", "Floors", "General dusting"] },
  { id: "meeting", name: "Meeting Rooms", items: ["Tables", "Accessible surfaces", "Floors", "Waste removal where agreed"] },
  { id: "kitchen", name: "Kitchen & Break Areas", items: ["Benchtops", "Sinks", "Appliance exteriors", "Tables", "Floors"] },
  { id: "bathrooms", name: "Bathrooms", items: ["Toilets", "Basins", "Mirrors", "Fixtures", "Floors"] },
];

export const checklist: { group: string; items: string[] }[] = [
  { group: "Surfaces", items: ["Desks and accessible surfaces", "Tables", "Counters", "Shelving where accessible"] },
  { group: "Floors", items: ["Vacuuming", "Mopping", "General floor care"] },
  { group: "Shared Areas", items: ["Reception", "Meeting rooms", "Kitchens", "Break areas"] },
  { group: "Bathrooms", items: ["Basins", "Toilets", "Mirrors", "Floors"] },
  { group: "General", items: ["Dusting", "Waste handling where agreed", "Doors and handles"] },
];

export type Frequency = {
  id: string;
  name: string;
  short: string;
  text: string;
  suits: string[];
  /** Mon–Fri visual only; true = example cleaning day. null = days you choose. */
  week: boolean[] | null;
};

export const frequencies: Frequency[] = [
  {
    id: "daily",
    name: "Daily",
    short: "Every working day",
    text: "For workplaces with frequent staff and visitor traffic, where kitchens, bathrooms and shared areas are used heavily every day.",
    suits: ["Busy offices", "Client-facing reception areas", "Larger teams"],
    week: [true, true, true, true, true],
  },
  {
    id: "several",
    name: "Several Times a Week",
    short: "Two or three visits",
    text: "For offices needing regular upkeep without daily cleaning, with visits spread across the week.",
    suits: ["Mid-sized teams", "Offices with moderate traffic", "Hybrid workplaces"],
    week: [true, false, true, false, true],
  },
  {
    id: "weekly",
    name: "Weekly",
    short: "One visit a week",
    text: "For smaller or lower-traffic workplaces that need consistent upkeep but not frequent visits.",
    suits: ["Small offices", "Quieter workplaces", "Studios"],
    week: [false, false, false, false, true],
  },
  {
    id: "custom",
    name: "Custom",
    short: "Your own timetable",
    text: "For businesses with specific requirements, such as particular days, cleaning around events, or a schedule that changes with office occupancy.",
    suits: ["Hybrid or variable occupancy", "Event-based needs", "Specific site requirements"],
    week: null,
  },
];

export const disruption: { title: string; text: string }[] = [
  { title: "Before opening", text: "Cleaning is done before your team arrives, so the office is ready for the day." },
  { title: "After hours", text: "Cleaning happens once staff have left, when desks and meeting rooms are free." },
  { title: "Quieter periods", text: "If your office has predictable quiet times, some tasks can be scheduled then." },
  { title: "Agreed schedules", text: "Days and times are set with you in advance, so everyone knows when cleaning happens." },
  { title: "Access arrangements", text: "Keys, swipe cards, alarm codes and building access are organised before the first clean." },
];

export const officeTypes: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Small Offices", text: "Flexible cleaning for smaller teams.", icon: Briefcase },
  { title: "Professional Offices", text: "Suitable for professional workplaces and shared areas.", icon: Building },
  { title: "Open-Plan Offices", text: "Cleaning for shared workspaces and common areas.", icon: Grid2x2 },
  { title: "Hybrid Workplaces", text: "Flexible scheduling where office occupancy varies.", icon: Shuffle },
  { title: "Multi-Room Offices", text: "Cleaning across multiple rooms and shared facilities.", icon: LayoutPanelTop },
];

export const oneOffSituations = [
  "Office move",
  "Workplace reset",
  "Event preparation",
  "Post-event cleaning",
  "Occasional detailed cleaning",
  "Preparing a new office space, where appropriate",
];

export const recurringFactors = [
  "Cleaning frequency",
  "Office size",
  "Rooms",
  "Operating hours",
  "Required areas",
  "Agreed checklist",
];

export const quoteFactors: { factor: string; why: string }[] = [
  { factor: "Office size", why: "Overall floor area to be covered" },
  { factor: "Number of rooms", why: "Separate offices and meeting rooms" },
  { factor: "Bathrooms", why: "How many, and how heavily used" },
  { factor: "Kitchen & break areas", why: "Number and size of shared spaces" },
  { factor: "Floor types", why: "Carpet, hard floors or a mix" },
  { factor: "Cleaning frequency", why: "Daily, several times a week, weekly or custom" },
  { factor: "Current condition", why: "Especially for a first or one-off clean" },
  { factor: "Required scope", why: "The areas and tasks you choose" },
  { factor: "Access arrangements", why: "Building access, parking and security" },
  { factor: "Preferred cleaning time", why: "Before opening, after hours or other" },
];

export const processSteps: { title: string; text: string }[] = [
  { title: "Tell Us About Your Office", text: "Business type, location, size and cleaning requirements." },
  { title: "Define the Scope", text: "Agree on the areas and tasks required." },
  { title: "Choose Your Schedule", text: "Select a suitable frequency and timing." },
  { title: "Receive Your Quote", text: "Receive a clear quote based on the agreed scope." },
  { title: "Start Cleaning", text: "The team follows the agreed cleaning plan." },
];

export const boundaries: { text: string; icon: LucideIcon }[] = [
  { text: "Move confidential documents", icon: FileLock2 },
  { text: "Handle personal belongings", icon: Ban },
  { text: "Reorganise desks", icon: Users },
  { text: "Access locked areas", icon: DoorClosed },
  { text: "Clean specialist equipment", icon: Wrench },
  { text: "Handle hazardous materials", icon: FlaskConical },
];


export const ctaBrief = ["Office location", "Approximate size", "Cleaning frequency", "Preferred time", "Areas requiring cleaning"];

export const officeFaqs: Faq[] = [
  {
    question: "What does office cleaning include?",
    answer:
      "Office cleaning typically covers reception and entrance areas, workstations, meeting rooms, kitchens and break areas, and bathrooms, including dusting, accessible surfaces, floors, doors and handles. Waste handling can be included where agreed. The final checklist depends on the scope you choose.",
  },
  {
    question: "How often should an office be cleaned?",
    answer:
      "It depends on how many people use the office and how busy it is. Busy offices may need daily cleaning, while smaller or lower-traffic workplaces may only need weekly visits. We'll help you choose a frequency that fits rather than assume one option suits everyone.",
  },
  {
    question: "Can office cleaning happen before or after business hours?",
    answer:
      "Yes. Cleaning can be scheduled before staff arrive, after the office closes or during quieter periods, depending on what's agreed and on building access.",
  },
  {
    question: "Do you offer one-off office cleaning?",
    answer:
      "Yes. One-off cleans are useful for office moves, workplace resets, before or after events, and occasional detailed cleaning. You don't need a recurring arrangement to book one.",
  },
  {
    question: "Do you clean kitchens and staff areas?",
    answer:
      "Yes. Kitchen and break area cleaning can include benchtops, sinks, appliance exteriors, tables and floors, as part of the agreed scope.",
  },
  {
    question: "Can I request a custom office cleaning checklist?",
    answer:
      "Yes. The checklist can be adjusted to your office layout and priorities, so the areas that matter most to your team are covered.",
  },
  {
    question: "How much does office cleaning cost in Melbourne?",
    answer:
      "Pricing depends on your office size, number of rooms and bathrooms, kitchen and break areas, floor types, cleaning frequency, condition, required scope, access arrangements and preferred cleaning time. Send us your details for a free quote.",
  },
  {
    question: "Do I need to be at the office during cleaning?",
    answer:
      "No. Cleaning can take place outside business hours. Access arrangements such as keys, swipe cards or alarm codes are agreed before cleaning starts.",
  },
  {
    question: "How do I request an office cleaning quote?",
    answer:
      "Email or call us with your office location, approximate size, preferred cleaning frequency, preferred time and the areas you'd like cleaned. We'll review your requirements and come back with a clear quote.",
  },
];
