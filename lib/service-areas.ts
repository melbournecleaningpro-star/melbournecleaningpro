import type { Faq } from "./content";
import { serviceAreas } from "./content";

export const PAGE_PATH = "/service-areas/";

type Suburb = (typeof serviceAreas)[number];

/**
 * Editorial groupings only. Regions and suburbs come from what the business
 * already states (lib/content.ts: the inner city, north, west, east and
 * south-east, and the serviceAreas list). They are examples, not a boundary,
 * and never generate URLs.
 */
export type Region = {
  id: string;
  name: string;
  direction: string;
  text: string;
  suburbs: Suburb[];
};

export const regions: Region[] = [
  {
    id: "inner-melbourne",
    name: "Inner Melbourne",
    direction: "City & inner suburbs",
    text: "Apartments, townhouses, terraces and offices in and around the city, where building access, lifts and parking are often part of planning a clean.",
    suburbs: ["Melbourne CBD", "Richmond", "South Yarra"],
  },
  {
    id: "north",
    name: "Melbourne's North",
    direction: "North",
    text: "Homes, units and apartments across the inner north and further out, from regular household cleaning to end of lease and move-in cleans.",
    suburbs: ["Brunswick", "Preston"],
  },
  {
    id: "west",
    name: "Melbourne's West",
    direction: "West",
    text: "From the inner west out to the outer western suburbs: family homes, townhouses, rentals and local business premises.",
    suburbs: ["Footscray", "Werribee", "Point Cook"],
  },
  {
    id: "east",
    name: "Melbourne's East",
    direction: "East",
    text: "Suburban homes and townhouses in the eastern suburbs, including households that want regular cleaning or a detailed seasonal clean.",
    suburbs: ["Doncaster"],
  },
  {
    id: "south-east",
    name: "Melbourne's South-East",
    direction: "South-east",
    text: "Houses, units and local businesses across the south-eastern suburbs, for one-off, regular and moving-related cleaning.",
    suburbs: ["Glen Waverley"],
  },
];

export const serviceLinks: { name: string; path: string }[] = [
  { name: "House Cleaning", path: "/services/house-cleaning/" },
  { name: "End of Lease Cleaning", path: "/services/end-of-lease-cleaning/" },
  { name: "Deep Cleaning", path: "/services/deep-cleaning/" },
  { name: "Move-In Cleaning", path: "/services/move-in-cleaning/" },
  { name: "Spring Cleaning", path: "/services/spring-cleaning/" },
  { name: "Airbnb Cleaning", path: "/services/airbnb-cleaning/" },
  { name: "Post-Construction Cleaning", path: "/services/post-construction-cleaning/" },
  { name: "Window Cleaning", path: "/services/window-cleaning/" },
  { name: "Carpet Cleaning", path: "/services/carpet-cleaning/" },
  { name: "Commercial Cleaning", path: "/services/commercial-cleaning/" },
  { name: "Office Cleaning", path: "/services/office-cleaning/" },
];

export const scenarios: { title: string; text: string; links: { label: string; path: string }[] }[] = [
  {
    title: "Moving house",
    text: "Leaving a rental, or getting a new place ready before the boxes arrive.",
    links: [
      { label: "End of lease cleaning", path: "/services/end-of-lease-cleaning/" },
      { label: "Move-in cleaning", path: "/services/move-in-cleaning/" },
    ],
  },
  {
    title: "Keeping a home maintained",
    text: "Regular help so the house stays on top of things between busy weeks.",
    links: [{ label: "House cleaning", path: "/services/house-cleaning/" }],
  },
  {
    title: "Preparing a short-stay rental",
    text: "Getting an apartment or house ready between guest stays.",
    links: [{ label: "Airbnb cleaning", path: "/services/airbnb-cleaning/" }],
  },
  {
    title: "Workplace cleaning",
    text: "Offices and business premises, scheduled around how you operate.",
    links: [
      { label: "Office cleaning", path: "/services/office-cleaning/" },
      { label: "Commercial cleaning", path: "/services/commercial-cleaning/" },
    ],
  },
];

export const areaFaqs: Faq[] = [
  {
    question: "What areas of Melbourne do you service?",
    answer:
      "We clean across Melbourne, from the CBD and inner suburbs to the north, west, east and south-east. Suburbs such as Richmond, South Yarra, Brunswick, Preston, Footscray, Werribee, Point Cook, Doncaster and Glen Waverley are examples, not a complete list.",
  },
  {
    question: "Do you service my suburb?",
    answer:
      "If your suburb isn't mentioned on this page, it may still be covered. Include your suburb when you request a quote or contact us, and we'll let you know.",
  },
  {
    question: "Do you clean outside Melbourne?",
    answer:
      "Our focus is Melbourne and its suburbs. If your property is further out, ask us and we'll tell you whether we can help.",
  },
  {
    question: "Does availability depend on the type of cleaning?",
    answer:
      "It can. Availability depends on both the service you need and where the property is, so the quickest way to check is to request a quote with your suburb and the service you're after.",
  },
  {
    question: "Do you clean apartments in Melbourne?",
    answer:
      "Yes. We clean apartments and units as well as houses and townhouses. Letting us know about building access, parking and lifts helps with planning.",
  },
  {
    question: "Do you clean both homes and businesses?",
    answer:
      "Yes. We provide residential cleaning for homes and rentals, and commercial and office cleaning for suitable business premises.",
  },
];
