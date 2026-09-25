import type { Faq } from "./content";

export const PAGE_PATH = "/services/oven-cleaning/";
export const QUOTE_PATH = "/quote/?service=oven";

export const ovenImage = {
  src: "/images/oven-cleaning-melbourne-oven.webp",
  alt: "Built-in wall oven with a lit interior showing two racks, a tray and a dish behind the door glass",
  width: 1280,
  height: 960,
};

/** Parts highlighted on the oven cutaway. Education only; scope is agreed per job. */
export const ovenParts = [
  { id: "interior", name: "Interior", text: "The inside walls, floor and roof of the oven cavity, where cooking residue builds up." },
  { id: "racks", name: "Racks", text: "Wire racks collect drips and baked-on spills from everything cooked above them." },
  { id: "trays", name: "Trays", text: "Baking trays and drip trays that catch grease and overflow." },
  { id: "glass", name: "Door glass", text: "The inside of the door glass, where splashes and grease can cloud the view." },
  { id: "surfaces", name: "Accessible oven surfaces", text: "The door, handle and control area that are touched every time the oven is used." },
] as const;

export type OvenPartId = (typeof ovenParts)[number]["id"];

export const buildUp = [
  { name: "Grease", note: "Fats that spatter and settle on every surface.", texture: "grease" },
  { name: "Cooking residue", note: "Traces left behind by everyday roasting and baking.", texture: "residue" },
  { name: "Splashes", note: "Sauces and juices that bubble over.", texture: "splash" },
  { name: "Baked-on build-up", note: "Spills that have been heated again and again.", texture: "baked" },
  { name: "Everyday use", note: "The general wear of an oven that gets used often.", texture: "everyday" },
] as const;

export const layers = [
  { label: "A fresh splash", text: "Soft and recent, and usually the easiest to deal with." },
  { label: "Residue from regular cooking", text: "Heated a few times, it starts to set onto surfaces." },
  { label: "Baked-on build-up", text: "Layers that have cooked on over months can take longer and may not all lift." },
];

export const jobSheet = [
  { step: "Inspect", note: "Look at the oven type, its condition and the areas of most build-up." },
  { step: "Prepare", note: "Set up the area and prepare removable parts, such as racks and trays, where appropriate." },
  { step: "Clean", note: "Clean the agreed parts of the oven using an approach suited to the appliance." },
  { step: "Detail", note: "Give attention to details like door glass, edges and the areas you've asked about." },
  { step: "Review", note: "Check the cleaned areas and the overall result with the agreed scope in mind." },
];

export const ovenFaqs: Faq[] = [
  {
    question: "What parts of an oven can be cleaned?",
    answer:
      "Commonly the interior, racks, trays, the inside of the door glass and the accessible outer surfaces. What's included for your oven depends on the appliance, its condition and the scope we agree before the clean.",
  },
  {
    question: "Can oven racks be cleaned?",
    answer:
      "Yes, racks can be included. Racks that have collected years of baked-on build-up may not come up completely, and results depend on their condition.",
  },
  {
    question: "Can the oven door glass be cleaned?",
    answer:
      "The inside of the door glass can be cleaned as part of an oven clean. Residue that has built up between glass panels may not be reachable on every oven, depending on how the door is made.",
  },
  {
    question: "Can a heavily used oven be cleaned?",
    answer:
      "Yes. Heavily used ovens are a common reason people ask for help. Very old or heavily baked-on build-up can take more time and may not lift completely, so let us know the oven's condition when you request a quote.",
  },
  {
    question: "How is the price of oven cleaning worked out?",
    answer:
      "It depends on the type and size of the oven, how much build-up there is, which parts you'd like cleaned and whether other appliances or areas are included. Quotes are free and prepared from the details you give us.",
  },
  {
    question: "Can oven cleaning be added to another service?",
    answer:
      "You can ask. Oven cleaning is often requested alongside an end of lease clean, a deep clean or regular house cleaning. Mention it in your quote request so everything can be discussed together.",
  },
  {
    question: "How do I request an oven cleaning quote?",
    answer:
      "Use the quote form and choose oven cleaning, or contact us. Tell us the type of oven, its condition and your suburb. Photos are welcome if you email us.",
  },
];
