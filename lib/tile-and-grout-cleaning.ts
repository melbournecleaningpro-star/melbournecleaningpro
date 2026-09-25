import type { Faq } from "./content";

export const PAGE_PATH = "/services/tile-and-grout-cleaning/";
export const QUOTE_PATH = "/quote/?service=tile";

/** Rooms on the floor-plan diagram. Suitability depends on the surface, not the room. */
export const tiledAreas = [
  { id: "bathroom", name: "Bathrooms", text: "Floors, shower walls and splash zones." },
  { id: "kitchen", name: "Kitchens", text: "Splashbacks and tiled floors near cooking areas." },
  { id: "floors", name: "Tiled floors", text: "Living and dining areas with tiled flooring." },
  { id: "entry", name: "Entry areas", text: "Where outdoor dirt is walked in first." },
  { id: "laundry", name: "Laundries", text: "Hard-working floors and splashbacks." },
  { id: "other", name: "Other tiled surfaces", text: "Other suitable tiled areas, by arrangement." },
];

export const materialFactors = ["Tile type", "Grout condition", "Age", "Surface finish", "Staining", "Previous treatments"];

export const gridSteps = [
  { name: "Surface", text: "Look at the tile surface and its finish." },
  { name: "Grout", text: "Check the grout lines and their condition." },
  { name: "Problem areas", text: "Note the heavier build-up and marks." },
  { name: "Cleaning approach", text: "Choose an approach suited to the tile and grout." },
  { name: "Final review", text: "Review the cleaned area against what was agreed." },
];

export const limits = [
  { title: "Discolouration isn't always dirt", text: "Permanent discolouration can look like dirt, but it may not come out with cleaning." },
  { title: "Dirty grout isn't damaged grout", text: "Cracked, missing or crumbling grout is a repair job, not a cleaning one." },
  { title: "Cleaning doesn't fix broken tiles", text: "Chips and cracks in tiles stay as they are." },
  { title: "Results depend on condition", text: "The age and condition of the tiles and grout shape what's achievable." },
];

export const tileFaqs: Faq[] = [
  {
    question: "What's the difference between tile cleaning and grout cleaning?",
    answer:
      "Tiles have a smooth surface where everyday dirt sits on top. Grout lines are recessed and more porous, so dirt settles into them and can look darker. Both are considered when cleaning a tiled area.",
  },
  {
    question: "Which areas can be cleaned?",
    answer:
      "Commonly bathrooms, kitchens, tiled floors, entry areas and laundries, as well as other suitable tiled surfaces. Suitability depends on the tile material and its condition rather than the room.",
  },
  {
    question: "Will my grout look new again?",
    answer:
      "That can't be promised. Cleaning can improve the look of dirty grout, but permanent discolouration, staining that has set in and damaged grout may not change.",
  },
  {
    question: "Can every type of tile be cleaned?",
    answer:
      "Not every tile suits the same approach, and some materials or finishes need extra care. Tell us the type of tile if you know it, and we'll talk through what's appropriate.",
  },
  {
    question: "Do you repair or regrout tiles?",
    answer:
      "No. Tile and grout cleaning is a cleaning service. Cracked tiles, missing grout and regrouting need a tiler.",
  },
  {
    question: "Can tile and grout cleaning be added to another clean?",
    answer:
      "You can ask. It's often requested with a deep clean, an end of lease clean, or after building work. Mention it in your quote request.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the quote form and choose tile and grout cleaning, or contact us. Tell us which areas, their approximate size, the tile type if you know it, and your suburb. Photos help.",
  },
];
