import type { Faq } from "./content";

export const PAGE_PATH = "/services/blind-cleaning/";
export const QUOTE_PATH = "/quote/?service=blinds";

export type BlindTypeId = "venetian" | "vertical" | "roller" | "other";

/** Educational only; suitability depends on each blind's material, construction and condition. */
export const blindTypes: { id: BlindTypeId; name: string; text: string; note: string }[] = [
  {
    id: "venetian",
    name: "Venetian blinds",
    text: "Horizontal slats that tilt open and closed. Dust settles along the top of every slat.",
    note: "Slats, edges and the headrail are the usual areas of attention.",
  },
  {
    id: "vertical",
    name: "Vertical blinds",
    text: "Tall vanes that hang from a track and turn to let light in.",
    note: "Vanes, the bottom edges and the track area can collect dust.",
  },
  {
    id: "roller",
    name: "Roller blinds",
    text: "A single fabric or vinyl sheet that rolls up at the top.",
    note: "The fabric surface and bottom bar are the main areas; fabrics vary a lot.",
  },
  {
    id: "other",
    name: "Other suitable blinds",
    text: "Other styles may be suitable depending on how they're made.",
    note: "Tell us the type and material, and we'll let you know what's appropriate.",
  },
];

export const dustSpots = [
  { name: "Slats", text: "Every horizontal surface collects a fine layer of dust." },
  { name: "Edges", text: "Slat edges and ends, where dust lines up." },
  { name: "Cords & components", text: "Cords, ladders and fittings, where appropriate." },
  { name: "Surfaces", text: "Headrails, bottom rails and the blind's visible faces." },
  { name: "Near the window", text: "Blinds close to windows that open can gather more outdoor dust." },
];

export const blindFactors = ["Material", "Construction", "Age", "Condition", "Staining", "Mechanism", "Accessibility"];

export const openingSteps = [
  { name: "Assess", text: "Identify the blind type, material and condition." },
  { name: "Access", text: "Check the blinds can be reached safely." },
  { name: "Clean", text: "Clean the agreed blinds using a suitable approach." },
  { name: "Detail", text: "Attend to edges, rails and the areas you've pointed out." },
  { name: "Review", text: "Check the result across the blinds that were cleaned." },
];

export const blindFaqs: Faq[] = [
  {
    question: "What types of blinds can be cleaned?",
    answer:
      "Commonly venetian, vertical and roller blinds, along with other styles depending on how they're made. Suitability depends on each blind's material, construction and condition, so tell us what you have.",
  },
  {
    question: "Do you clean blinds in homes and offices?",
    answer:
      "We clean suitable blinds in homes, and in workplaces as part of an agreed scope. Tell us about the property and roughly how many blinds there are.",
  },
  {
    question: "Can stained or discoloured blinds be restored?",
    answer:
      "Cleaning focuses on dust and everyday build-up. Stains, sun fading and discolouration may not change, and we don't restore or repair blinds.",
  },
  {
    question: "Do the blinds need to be taken down?",
    answer:
      "It depends on the blind type and what's agreed. We'll talk through the approach for your blinds when you request a quote.",
  },
  {
    question: "Can you clean blinds that are hard to reach?",
    answer:
      "Only blinds that can be reached safely are cleaned. Let us know about high windows or awkward spots in advance.",
  },
  {
    question: "Can blind cleaning be combined with window cleaning?",
    answer:
      "You can ask. Blinds and windows are often done together, and they can also be added to a deep clean. Mention everything in one quote request.",
  },
  {
    question: "How do I request a blind cleaning quote?",
    answer:
      "Use the quote form and choose blind cleaning, or contact us. Include the types of blinds, roughly how many, their sizes and your suburb.",
  },
];
