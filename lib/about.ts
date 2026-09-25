import type { Faq } from "./content";

export const PAGE_PATH = "/about/";

export const images = {
  doorway: {
    src: "/images/about-melbourne-cleaning-pro-doorway.webp",
    alt: "Front door of a Melbourne home with a cleaning caddy waiting on the step",
    width: 960,
    height: 1280,
  },
  melbourne: {
    src: "/images/about-melbourne-cleaning-pro-melbourne.webp",
    alt: "Illustrated Melbourne skyline with a tram running along the river",
    width: 1600,
    height: 525,
  },
  home: {
    src: "/images/spring-cleaning-melbourne-living.webp",
    alt: "Bright, tidy living room in a Melbourne home",
    width: 1280,
    height: 960,
  },
  workplace: {
    src: "/images/office-cleaning-melbourne-workspace.webp",
    alt: "Clean, organised office workspace",
    width: 1280,
    height: 960,
  },
};

/** Specialist services mentioned in "What we do", linked only when the page exists. */
export const specialist: { label: string; path: string }[] = [
  { label: "Deep Cleaning", path: "/services/deep-cleaning/" },
  { label: "End of Lease Cleaning", path: "/services/end-of-lease-cleaning/" },
  { label: "Airbnb Cleaning", path: "/services/airbnb-cleaning/" },
  { label: "Move-In Cleaning", path: "/services/move-in-cleaning/" },
  { label: "Spring Cleaning", path: "/services/spring-cleaning/" },
  { label: "Window Cleaning", path: "/services/window-cleaning/" },
  { label: "Carpet Cleaning", path: "/services/carpet-cleaning/" },
  { label: "Post-Construction Cleaning", path: "/services/post-construction-cleaning/" },
  { label: "Upholstery Cleaning", path: "/services/upholstery-cleaning/" },
  { label: "Oven Cleaning", path: "/services/oven-cleaning/" },
  { label: "Mattress Cleaning", path: "/services/mattress-cleaning/" },
  { label: "Tile & Grout Cleaning", path: "/services/tile-and-grout-cleaning/" },
  { label: "Blind Cleaning", path: "/services/blind-cleaning/" },
  { label: "Pressure Cleaning", path: "/services/pressure-cleaning/" },
];

export const principles = [
  { word: "Understand", text: "We start by understanding the property and what needs attention." },
  { word: "Scope", text: "The cleaning requirements should be clear before the service begins." },
  { word: "Care", text: "The cleaning approach should be appropriate for the property and agreed scope." },
  { word: "Communicate", text: "You should always know how to ask a question, discuss your requirements and get a quote." },
];

export const values = [
  { title: "Clear Communication", text: "Service information and expectations should be easy to understand, before, during and after a clean." },
  { title: "Attention to Detail", text: "We pay attention to the agreed cleaning scope and the visible areas that need it most." },
  { title: "Practical Service", text: "Cleaning solutions should make sense for the property and the person living or working in it." },
  { title: "Respect for Your Space", text: "Your home or workplace is treated with care and professionalism." },
  { title: "Consistency", text: "We aim for a clear, dependable service experience, visit after visit." },
];

/** "Different homes, different needs": each line names a property, the need, and where to read more. */
export const needs: { property: string; need: string; links: { label: string; path: string }[] }[] = [
  { property: "A family home", need: "may need ongoing routine cleaning.", links: [{ label: "house cleaning", path: "/services/house-cleaning/" }] },
  {
    property: "A rental property",
    need: "may need end-of-lease or move-in cleaning.",
    links: [
      { label: "end of lease", path: "/services/end-of-lease-cleaning/" },
      { label: "move-in", path: "/services/move-in-cleaning/" },
    ],
  },
  { property: "A short-stay property", need: "may need guest turnover cleaning.", links: [{ label: "Airbnb cleaning", path: "/services/airbnb-cleaning/" }] },
  { property: "An office", need: "may need recurring workplace cleaning.", links: [{ label: "office cleaning", path: "/services/office-cleaning/" }] },
  {
    property: "A recently renovated property",
    need: "may need post-construction cleaning.",
    links: [{ label: "post-construction cleaning", path: "/services/post-construction-cleaning/" }],
  },
];

export const audiences = [
  { who: "Homeowners", what: "Ongoing or one-off cleaning for the home." },
  { who: "Renters", what: "Help at the start and end of a lease." },
  { who: "Families", what: "Support keeping a busy household on track." },
  { who: "Airbnb & Short-Stay Hosts", what: "Cleaning between guest stays, where suitable." },
  { who: "Businesses", what: "Cleaning for offices and commercial premises." },
];

export const suburbs = ["Melbourne CBD", "Richmond", "South Yarra", "Brunswick", "Footscray", "Preston", "Werribee", "Point Cook", "Doncaster", "Glen Waverley"];

export const journey = [
  { title: "Tell Us What You Need", text: "Send a message or call with the basics: the property, your suburb and what you'd like cleaned." },
  { title: "Discuss the Property", text: "We talk through the size, condition and any areas that need particular attention." },
  { title: "Confirm the Cleaning Scope", text: "You know what's included before anything is booked." },
  { title: "Arrange the Service", text: "We agree a time that suits you." },
  { title: "Keep Your Space Looking Its Best", text: "Book again when you need to, or set up something ongoing." },
];

export const expectations = [
  "Cleaning scope can vary from property to property.",
  "The condition of a property can affect the work required.",
  "Some specialist cleaning or repairs may need another provider.",
  "You can discuss specific requirements with us before booking.",
  "Pricing can depend on property size, condition and scope.",
];

export const aboutFaqs: Faq[] = [
  {
    question: "What is Melbourne Cleaning Pro?",
    answer:
      "Melbourne Cleaning Pro is a Melbourne-focused cleaning business providing residential and commercial cleaning, with different services for different properties and situations.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Melbourne and surrounding areas, including the CBD and suburbs such as Richmond, Brunswick, Footscray, Werribee and Glen Waverley. Tell us your suburb when you request a quote.",
  },
  {
    question: "Do you provide residential cleaning?",
    answer: "Yes. We clean houses, apartments, units, townhouses, rentals and short-stay properties.",
  },
  {
    question: "Do you provide commercial cleaning?",
    answer: "Yes. We clean offices and suitable commercial premises.",
  },
  {
    question: "What types of cleaning services do you offer?",
    answer:
      "Our services cover routine, detailed, seasonal, moving, short-stay, post-construction, window and carpet cleaning, as well as office and commercial cleaning. The services page lists them all.",
  },
  {
    question: "Can I discuss a specific cleaning requirement before booking?",
    answer:
      "Yes. Tell us about the property and what you need, and we'll talk through the scope before anything is booked.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "Use the Get a Cleaning Quote button, or email or call us with your property type, suburb, the cleaning you need and your preferred date.",
  },
];
