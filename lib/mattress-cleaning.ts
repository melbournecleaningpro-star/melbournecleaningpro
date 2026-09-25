import type { Faq } from "./content";

export const PAGE_PATH = "/services/mattress-cleaning/";
export const QUOTE_PATH = "/quote/?service=mattress";

export const bedroomImage = {
  src: "/images/mattress-cleaning-melbourne-bedroom.webp",
  alt: "Calm bedroom in morning light, with the duvet folded back to show a quilted mattress",
  width: 1600,
  height: 900,
};

/** The layers of the "exploded" mattress, top to bottom. */
export const mattressLayers = [
  { name: "Sleeping surface", text: "The quilted top that you lie on every night." },
  { name: "Seams", text: "Stitched lines and quilting, where dust and debris can settle." },
  { name: "Edges", text: "The sides and borders, which get touched when sitting on or making the bed." },
  { name: "Commonly used areas", text: "The parts of the mattress each person uses most." },
];

export const everyday = ["Dust", "Everyday dirt", "Perspiration", "Accidental marks", "Regular use"];

export const assessment = [
  { name: "Material", text: "What the mattress and its cover are made from." },
  { name: "Condition", text: "Its age, wear and current state." },
  { name: "Areas of concern", text: "Marks, stains or the most-used parts." },
  { name: "Suitable approach", text: "What makes sense for this mattress." },
];

export const resultFactors = ["How the mattress is made", "Its materials", "Its age", "Its condition", "The type of stain", "Any previous treatment"];

export const mattressFaqs: Faq[] = [
  {
    question: "What does mattress cleaning involve?",
    answer:
      "It focuses on the mattress surfaces, seams and edges, and on the areas that get used most. The approach is chosen for the mattress's material and condition, and the scope is agreed with you first.",
  },
  {
    question: "Can stains be removed from a mattress?",
    answer:
      "Some marks can be improved, but stain removal can't be guaranteed. Results depend on the type of stain, how long it's been there, the mattress's materials and any previous treatment.",
  },
  {
    question: "Can every type of mattress be cleaned?",
    answer:
      "Not every mattress suits the same approach, and some materials or constructions may not be suitable. Tell us the type of mattress and what it's made from when you request a quote.",
  },
  {
    question: "Does mattress cleaning help with allergies or sleep?",
    answer:
      "We don't make health or sleep claims. Mattress cleaning is about refreshing the surface of a mattress that gets used every night.",
  },
  {
    question: "How many mattresses can be cleaned in one visit?",
    answer:
      "That depends on the number and size of the mattresses and what else is being cleaned. Let us know how many there are, and their sizes, when you ask for a quote.",
  },
  {
    question: "Can mattress cleaning be combined with other services?",
    answer:
      "You can ask. It's often requested alongside upholstery or carpet cleaning, or before moving into a new home. Mention everything you'd like in one quote request.",
  },
  {
    question: "How do I request a mattress cleaning quote?",
    answer:
      "Use the quote form and choose mattress cleaning, or get in touch through the contact page. Include the number of mattresses, their sizes, any marks and your suburb.",
  },
];
