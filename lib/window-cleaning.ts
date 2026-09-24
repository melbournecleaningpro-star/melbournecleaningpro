import type { Faq } from "./content";
import { quoteMailto } from "./site";

export const PAGE_PATH = "/services/window-cleaning/";

export const windowQuoteMailHref = quoteMailto(
  "Window cleaning quote request",
  "Hi,\n\nI'd like a quote for window cleaning.\n\nProperty type (house, apartment, unit, townhouse, office, shop):\nSuburb:\nApproximate number of windows:\nWindow sizes / types (standard, sliding, large panels, glass doors):\nInside, outside or both:\nNumber of storeys:\nAnything hard to reach:\nPreferred date:\n\nThanks,",
);

export type GlassImage = { src: string; alt: string; width: number; height: number };

/** Illustrations for now. Replace with genuine photos of the same filenames in /public/images. */
export const images = {
  living: {
    src: "/images/window-cleaning-melbourne-living.webp",
    alt: "Floor-to-ceiling living room windows with a clear view of the city and garden",
    width: 1280,
    height: 960,
  },
  house: {
    src: "/images/window-cleaning-melbourne-house.webp",
    alt: "Single-storey house with clean front windows and a glass-panelled front door",
    width: 1280,
    height: 960,
  },
  office: {
    src: "/images/window-cleaning-melbourne-office.webp",
    alt: "Ground-floor office shopfront with large glass panels and a glass entry door",
    width: 1280,
    height: 960,
  },
} satisfies Record<string, GlassImage>;

export const marks = ["Dust", "Fingerprints", "Water marks", "Smudges", "Everyday grime", "Visible residue"];

/** Callouts on the window anatomy diagram (coordinates in the 400x300 SVG). */
export const anatomy: { id: string; title: string; text: string; x: number; y: number; lx: number; ly: number }[] = [
  { id: "glass", title: "Glass", text: "Cleaning accessible glass surfaces.", x: 150, y: 110, lx: 20, ly: 40 },
  { id: "frames", title: "Frames", text: "Cleaning accessible frame areas where included.", x: 323, y: 70, lx: 380, ly: 40 },
  { id: "sills", title: "Sills", text: "Removing visible dust and build-up from accessible sills.", x: 200, y: 258, lx: 380, ly: 280 },
  { id: "edges", title: "Edges", text: "Attention to accessible edges and surrounding areas.", x: 90, y: 232, lx: 20, ly: 280 },
  { id: "marks", title: "Visible Marks", text: "Addressing fingerprints, smudges and everyday residue.", x: 250, y: 170, lx: 380, ly: 160 },
];

export type WindowType = { id: string; name: string; note: string };

export const windowTypes: WindowType[] = [
  { id: "standard", name: "Standard residential windows", note: "Hinged and fixed windows in homes." },
  { id: "sliding", name: "Sliding windows", note: "Including accessible tracks where agreed." },
  { id: "panel", name: "Large glass panels", note: "Big fixed panes and picture windows." },
  { id: "apartment", name: "Apartment windows", note: "Where they can be reached safely." },
  { id: "office", name: "Commercial office windows", note: "Where the site is suitable." },
  { id: "door", name: "Glass doors", note: "Sliding and hinged, where in the agreed scope." },
];

export const residentialFor = ["Houses", "Apartments", "Units", "Townhouses"];
export const commercialFor = ["Offices", "Small commercial premises", "Retail and business spaces, where appropriate"];

export const visitGlass = ["Dust", "Smudges", "Fingerprints", "Everyday grime", "Visible marks"];
export const visitSurrounds = ["Frames", "Sills", "Edges", "Nearby accessible surfaces"];
export const notRestoration = ["Scratches", "Etched or hard-water damage", "Paint or overspray needing specialist removal", "Cracked or damaged glass"];

export type Side = { id: "inside" | "outside" | "both"; title: string; text: string };

export const sides: Side[] = [
  { id: "inside", title: "Interior Glass", text: "For accessible internal window surfaces." },
  { id: "outside", title: "Exterior Glass", text: "Where exterior access is safe and suitable." },
  { id: "both", title: "Both Sides", text: "Where the property and access conditions allow it." },
];

export type Sign = { title: string; text: string; swatch: string };

/** Each sign has a CSS "glass sample" swatch that illustrates it. */
export const signs: Sign[] = [
  {
    title: "Visible Fingerprints",
    text: "Especially on glass doors and lower panes that get touched.",
    swatch: "[background:radial-gradient(ellipse_14px_20px_at_30%_40%,rgb(120_110_95/0.28),transparent_70%),radial-gradient(ellipse_12px_18px_at_55%_55%,rgb(120_110_95/0.22),transparent_70%),radial-gradient(ellipse_13px_19px_at_72%_35%,rgb(120_110_95/0.2),transparent_70%),linear-gradient(135deg,#d9edf4,#f2f9fb)]",
  },
  {
    title: "Water Marks",
    text: "Dried droplets and runs after rain or sprinklers.",
    swatch: "[background:radial-gradient(circle_at_25%_30%,transparent_5px,rgb(140_150_150/0.35)_6px,transparent_8px),radial-gradient(circle_at_60%_55%,transparent_7px,rgb(140_150_150/0.3)_8px,transparent_10px),radial-gradient(circle_at_80%_25%,transparent_4px,rgb(140_150_150/0.3)_5px,transparent_7px),radial-gradient(circle_at_40%_75%,transparent_5px,rgb(140_150_150/0.3)_6px,transparent_8px),linear-gradient(135deg,#d9edf4,#f2f9fb)]",
  },
  {
    title: "Dust Build-Up",
    text: "A dull film that settles on glass, frames and sills.",
    swatch: "[background:radial-gradient(rgb(150_135_110/0.35)_1px,transparent_1.5px)_0_0/7px_7px,radial-gradient(rgb(150_135_110/0.25)_1px,transparent_1.5px)_3px_4px/9px_9px,linear-gradient(135deg,#d9edf4,#f2f9fb)]",
  },
  {
    title: "Smudged Glass",
    text: "Streaks and wipes that catch the light at an angle.",
    swatch: "[background:linear-gradient(120deg,transparent_30%,rgb(150_150_140/0.25)_40%,transparent_48%,transparent_55%,rgb(150_150_140/0.2)_62%,transparent_70%),linear-gradient(135deg,#d9edf4,#f2f9fb)]",
  },
  {
    title: "Post-Renovation Residue",
    text: "Fine dust and light residue left after building work.",
    swatch: "[background:radial-gradient(circle_at_20%_30%,rgb(255_255_255/0.9)_2px,transparent_3px),radial-gradient(circle_at_70%_60%,rgb(255_255_255/0.9)_2px,transparent_3px),radial-gradient(circle_at_45%_80%,rgb(244_182_63/0.6)_2px,transparent_3px),radial-gradient(rgb(170_160_140/0.3)_1px,transparent_1.5px)_0_0/6px_6px,linear-gradient(135deg,#d9edf4,#f2f9fb)]",
  },
  {
    title: "General Loss of Clarity",
    text: "Glass that just looks a little hazy overall.",
    swatch: "[background:linear-gradient(rgb(235_232_225/0.7),rgb(235_232_225/0.7)),linear-gradient(135deg,#bfe0ef,#f2f9fb)]",
  },
];

export const accessTiers = [
  { level: "Ground level", status: "Usually accessible", text: "Windows that can be reached safely from the ground or inside.", tone: "bg-brand" },
  { level: "Upper storey", status: "Depends on access", text: "Some are reachable from inside or with standard equipment; others aren't.", tone: "bg-wattle" },
  { level: "High or hard to reach", status: "May need a specialist", text: "High-rise, rope-access or elevated-platform work isn't something we provide.", tone: "bg-ink/40" },
];

export const pricingFactors = [
  "Number of windows",
  "Window size",
  "Property type",
  "Interior / exterior scope",
  "Accessibility",
  "Level of build-up",
  "Number of storeys",
  "Overall cleaning requirements",
];

export const flow = [
  "Tell Us About the Property",
  "Discuss the Windows & Access",
  "Confirm the Scope",
  "Schedule the Cleaning",
];

export const windowFaqs: Faq[] = [
  {
    question: "What does window cleaning include?",
    answer:
      "Window cleaning covers accessible glass, removing dust, smudges, fingerprints, everyday grime and visible marks, plus accessible frames, sills and edges where included. The exact scope is agreed based on your property and access.",
  },
  {
    question: "Do you clean interior and exterior windows?",
    answer:
      "We clean interior glass and, where exterior access is safe and suitable, exterior glass too. Whether both sides can be done depends on the property and access conditions.",
  },
  {
    question: "Can you clean apartment windows?",
    answer:
      "Yes, where they can be reached safely, which usually means from inside the apartment or from a balcony. Exterior glass on higher floors that can't be safely reached isn't included.",
  },
  {
    question: "Can you clean windows on upper floors?",
    answer:
      "It depends on access. Some upper-floor windows can be cleaned from inside or with standard equipment. High or difficult-to-access windows may need a specialist with rope-access or elevated-platform equipment, which we don't provide.",
  },
  {
    question: "Do you clean window frames and sills?",
    answer:
      "Yes. Accessible frames, sills and edges can be included, with visible dust and build-up removed. Let us know if you'd like tracks on sliding windows included too.",
  },
  {
    question: "How much does window cleaning cost in Melbourne?",
    answer:
      "It depends on the number and size of windows, property type, whether you want inside, outside or both, accessibility, the level of build-up and the number of storeys. Send us your details for a free quote.",
  },
  {
    question: "Can you clean glass doors?",
    answer:
      "Yes. Sliding and hinged glass doors can be included in the agreed scope, inside and out where accessible.",
  },
  {
    question: "What happens if a window is difficult to access?",
    answer:
      "We'll tell you before the job. We only clean windows that can be reached safely. If some windows need specialist equipment, we'll let you know so you can arrange a specialist for those.",
  },
];
