import { siteConfig } from "./site";

export const PAGE_PATH = "/faq/";

/**
 * Every answer here is plain text so the visible answer and the FAQPage
 * structured data are identical. Optional links render beneath an answer and
 * only when the target page exists (see isLiveRoute).
 */
export type FaqItem = { q: string; a: string; links?: { path: string; label: string }[] };

export type FaqCategory = {
  id: string;
  title: string;
  short: string;
  intro: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    title: "General Cleaning Questions",
    short: "General",
    intro: "Who we are, what we clean and where.",
    items: [
      {
        q: "What cleaning services does Melbourne Cleaning Pro offer?",
        a: "For homes, we offer house cleaning, deep cleaning, end of lease cleaning, move-in cleaning, spring cleaning, Airbnb cleaning, post-construction cleaning, window cleaning and carpet cleaning. For businesses, we offer commercial cleaning and office cleaning.",
        links: [{ path: "/services/", label: "Browse all services" }],
      },
      {
        q: "Which parts of Melbourne do you cover?",
        a: "We clean across Melbourne, from the CBD and inner suburbs to the north, south-east, east and west, including Richmond, South Yarra, Brunswick, Footscray, Preston, Werribee, Point Cook, Doncaster and Glen Waverley. If you're not sure whether we cover your suburb, just ask.",
      },
      {
        q: "Do you clean apartments and units, or only houses?",
        a: "Both. We clean houses, apartments, units and townhouses. For apartments, it helps to mention building access, parking and whether there's a lift when you get in touch.",
      },
      {
        q: "Who is Melbourne Cleaning Pro?",
        a: "We're a Melbourne-focused cleaning business providing residential and commercial cleaning. Our approach is simple: clear service options, an agreed scope, and a straightforward way to book.",
        links: [{ path: "/about/", label: "More about us" }],
      },
    ],
  },
  {
    id: "booking",
    title: "Booking & Quotes",
    short: "Booking",
    intro: "Requesting a quote, scheduling and changes.",
    items: [
      {
        q: "How do I request a quote?",
        a: "The easiest way is the quote form, which walks you through the service, property and cleaning details. You can also email us or use the contact page if you'd rather describe things in your own words.",
        links: [
          { path: "/quote/", label: "Request a quote" },
          { path: "/contact/", label: "Contact page" },
        ],
      },
      {
        q: "What details should I include when asking for a quote?",
        a: "The service you're interested in, the property type, your suburb, the number of bedrooms and bathrooms where relevant, your preferred date, how often you'd like cleaning if it's ongoing, and any areas that need particular attention.",
      },
      {
        q: "Is there a cost for a quote?",
        a: "No. Quotes are free and there's no obligation to book.",
      },
      {
        q: "How far in advance should I book?",
        a: "Availability varies, so it's best to get in touch as early as you can, especially if you're working to a fixed date such as a lease end, a moving day or an event.",
      },
      {
        q: "Can I book a one-off clean?",
        a: "Yes. One-off cleans suit plenty of situations, like before an event, after renovations or when you just need a hand. There's no ongoing commitment.",
      },
      {
        q: "Can I set up regular cleaning?",
        a: "Yes. Regular cleaning can be arranged weekly, fortnightly or monthly, depending on the service and what suits your property.",
      },
      {
        q: "What if I need to change my booking?",
        a: "Let us know as soon as you can and we'll work with you to find another suitable time. Any arrangements around changes are confirmed with you when the service is booked.",
      },
      {
        q: "How can I contact Melbourne Cleaning Pro?",
        a: `You can email us at ${siteConfig.contact.email.display}, send a message through the contact page, or request a quote through the quote form.`,
        links: [{ path: "/contact/", label: "Contact us" }],
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    short: "Pricing",
    intro: "How quotes are worked out.",
    items: [
      {
        q: "How much does a clean cost?",
        a: "There isn't a single price, because every property and job is different. We quote based on the details you give us, so the more accurate the information, the more useful the quote.",
      },
      {
        q: "What affects the price of a clean?",
        a: "The type of service, the size and type of property, its current condition, the number of rooms and bathrooms, how often you'd like cleaning, any specific areas or extras you need, and access to the property.",
      },
      {
        q: "Why don't you publish a fixed price list?",
        a: "A one-bedroom apartment that's cleaned every week and a large home that hasn't had a thorough clean in months need very different amounts of work. Quoting each job avoids a one-size-fits-all price that doesn't match what you actually need.",
      },
      {
        q: "What if the property needs more cleaning than expected?",
        a: "Quotes are based on the information provided, so if a property turns out to be quite different from the description, the scope may need to be discussed with you. Accurate details help avoid surprises, and you're welcome to include photos when you email us.",
      },
    ],
  },
  {
    id: "preparing",
    title: "Preparing for a Cleaning",
    short: "Preparing",
    intro: "A few things that help on the day.",
    items: [
      {
        q: "How should I prepare my home before the clean?",
        a: "Clear away clutter from benches, floors and surfaces you'd like cleaned, put away valuables and anything fragile, and let us know about priorities, pets and access. That way the time goes into cleaning rather than tidying.",
      },
      {
        q: "Do I need to be home while you clean?",
        a: "Not necessarily, as long as we can access the property. Keys, a lockbox or building access can be arranged in advance.",
      },
      {
        q: "Do I need to supply cleaning products or equipment?",
        a: "What's supplied is confirmed as part of your quote. If you'd like particular products used in your home, let us know when you request a quote.",
      },
      {
        q: "What should I do about pets?",
        a: "Please mention pets when you book so the clean can be planned around them. Keeping them in a separate area or outside during the clean usually works best for everyone.",
      },
      {
        q: "Do you move heavy furniture?",
        a: "Heavy furniture isn't moved. If you'd like areas under or behind furniture cleaned, clear them beforehand where you can.",
      },
      {
        q: "Can I ask you to focus on particular areas?",
        a: "Yes. Tell us which rooms or areas matter most, for example the kitchen or bathrooms, and they'll be part of the agreed scope. The quote form lets you select priority areas.",
      },
    ],
  },
  {
    id: "house",
    title: "House Cleaning",
    short: "House",
    intro: "Regular and one-off cleaning for homes.",
    items: [
      {
        q: "What's included in a standard house clean?",
        a: "A house clean covers the main living spaces: kitchens, bathrooms, living areas and bedrooms. The exact tasks are agreed with you, so the clean fits your home and routine.",
        links: [{ path: "/services/house-cleaning/", label: "About house cleaning" }],
      },
      {
        q: "How often should I have my home cleaned?",
        a: "It depends on the household. Busy homes with kids or pets often suit weekly or fortnightly cleaning, while monthly can work for smaller or quieter homes. You can start with one frequency and change it later.",
      },
      {
        q: "Can I change what's included over time?",
        a: "Yes. The tasks in a regular clean can be adjusted to suit your home and routine. Just let us know what you'd like to change.",
      },
    ],
  },
  {
    id: "deep",
    title: "Deep & Specialised Cleaning",
    short: "Deep cleaning",
    intro: "More detailed cleaning for build-up and overlooked areas.",
    items: [
      {
        q: "What is a deep clean, and how is it different from a regular clean?",
        a: "A regular clean keeps a home ticking over. A deep clean goes further, spending more time on built-up grime and the areas routine cleaning tends to skip, such as skirting boards, grout, appliances and hard-to-reach spots.",
        links: [{ path: "/services/deep-cleaning/", label: "About deep cleaning" }],
      },
      {
        q: "When is a deep clean a good idea?",
        a: "Before starting regular cleaning, after a long gap between cleans, after a busy period at home, or when you'd simply like the whole place reset.",
      },
      {
        q: "Is a spring clean the same as a deep clean?",
        a: "Not quite. A spring clean is a planned seasonal refresh of the whole home. It doesn't automatically include every possible deep-cleaning task, so let us know if there are specific areas you want covered in detail.",
        links: [{ path: "/services/spring-cleaning/", label: "About spring cleaning" }],
      },
    ],
  },
  {
    id: "end-of-lease",
    title: "End of Lease",
    short: "End of lease",
    intro: "Cleaning a rental before handover.",
    items: [
      {
        q: "What does end of lease cleaning cover?",
        a: "It focuses on the areas commonly checked at a final rental inspection, including kitchens, bathrooms, bedrooms, living areas and floors. Extras such as oven cleaning or interior windows can be added to your quote.",
        links: [{ path: "/services/end-of-lease-cleaning/", label: "About end of lease cleaning" }],
      },
      {
        q: "When should I book an end of lease clean?",
        a: "Book as soon as you know your move-out and inspection dates. The clean is usually easiest once your belongings are out and before the final inspection.",
      },
      {
        q: "Will an end of lease clean guarantee my bond back?",
        a: "No cleaning service can guarantee a bond outcome. That decision rests with your landlord or agent after the inspection, and it can depend on things beyond cleaning. The clean focuses on the agreed scope and the areas commonly checked.",
      },
      {
        q: "Does the property need to be empty?",
        a: "Ideally, yes. Cleaning is quicker and more thorough when furniture and belongings have already been moved out.",
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial & Office Cleaning",
    short: "Commercial",
    intro: "Cleaning for workplaces and business premises.",
    items: [
      {
        q: "Do you clean offices and other business premises?",
        a: "Yes. We clean offices, retail spaces, clinics and other suitable commercial properties, on a one-off or scheduled basis.",
        links: [
          { path: "/services/office-cleaning/", label: "About office cleaning" },
          { path: "/services/commercial-cleaning/", label: "About commercial cleaning" },
        ],
      },
      {
        q: "Can cleaning happen outside business hours?",
        a: "Yes. Commercial cleaning can be scheduled before or after business hours to minimise disruption to your team and customers.",
      },
      {
        q: "How do access and security work for a business?",
        a: "Access arrangements such as keys, swipe cards or alarm codes are agreed with you before cleaning starts.",
      },
    ],
  },
  {
    id: "other",
    title: "Other Cleaning Services",
    short: "Other services",
    intro: "Short stays, moving in, renovations, windows and carpets.",
    items: [
      {
        q: "Do you clean Airbnb properties between guests?",
        a: "Yes. Airbnb cleaning is designed for short-stay properties that need to be ready between guest stays. Tell us about the property and how often it turns over when you request a quote.",
        links: [{ path: "/services/airbnb-cleaning/", label: "About Airbnb cleaning" }],
      },
      {
        q: "What is move-in cleaning?",
        a: "A clean of your new home before you unpack, so you're starting fresh in the kitchen, bathrooms, cabinets, wardrobes and living spaces.",
        links: [{ path: "/services/move-in-cleaning/", label: "About move-in cleaning" }],
      },
      {
        q: "Can you clean after building or renovation work?",
        a: "Yes. Post-construction cleaning focuses on the dust and residue left behind after building or renovation work, so the space is ready to use.",
        links: [{ path: "/services/post-construction-cleaning/", label: "About post-construction cleaning" }],
      },
      {
        q: "Do you clean windows, including high ones?",
        a: "We clean windows that can be reached safely, inside and out where access allows. High-rise, rope-access or elevated-platform work isn't something we provide, and we'll let you know if any windows need a specialist.",
        links: [{ path: "/services/window-cleaning/", label: "About window cleaning" }],
      },
      {
        q: "Do you clean carpets, and can every stain be removed?",
        a: "We do clean carpets, but not every stain can be removed. Results depend on the carpet material, the type of stain, how long it's been there and any previous treatment.",
        links: [{ path: "/services/carpet-cleaning/", label: "About carpet cleaning" }],
      },
    ],
  },
];

export const allFaqs = faqCategories.flatMap((c) => c.items);

export const decisions: { need: string; path: string; service: string }[] = [
  { need: "Regular upkeep", path: "/services/house-cleaning/", service: "House Cleaning" },
  { need: "A deeper reset", path: "/services/deep-cleaning/", service: "Deep Cleaning" },
  { need: "Moving out of a rental", path: "/services/end-of-lease-cleaning/", service: "End of Lease Cleaning" },
  { need: "Moving into a property", path: "/services/move-in-cleaning/", service: "Move-In Cleaning" },
  { need: "Short-stay turnover", path: "/services/airbnb-cleaning/", service: "Airbnb Cleaning" },
  { need: "Business premises", path: "/services/commercial-cleaning/", service: "Commercial Cleaning" },
  { need: "An office", path: "/services/office-cleaning/", service: "Office Cleaning" },
];

export const expectSteps = [
  { title: "Tell us what you need", text: "Share the property and cleaning details through the quote form or by email." },
  { title: "Discuss the requirements", text: "The cleaning requirements are clarified based on the service you've asked for." },
  { title: "Arrange the service", text: "The date, time and any access details are confirmed with you." },
  { title: "Cleaning takes place", text: "The agreed cleaning service is carried out." },
];
