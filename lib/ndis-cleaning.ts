import type { Faq } from "./content";

export const PAGE_PATH = "/services/ndis-cleaning/";
export const QUOTE_PATH = "/quote/?service=ndis";

/** The five steps of the "Your Routine" builder. Nothing is sent or stored. */
export const routineSteps: { id: string; label: string; question: string; options: string[] }[] = [
  {
    id: "space",
    label: "Your space",
    question: "Which areas need attention?",
    options: ["Kitchen", "Bathroom", "Bedrooms", "Living areas", "Floors", "Laundry"],
  },
  {
    id: "routine",
    label: "Your routine",
    question: "How often, and when, would cleaning work best?",
    options: ["Weekly", "Fortnightly", "Another agreed schedule", "One-off to start", "Mornings", "Afternoons"],
  },
  {
    id: "priorities",
    label: "Your priorities",
    question: "What matters most to you?",
    options: ["Kitchen surfaces", "A clean bathroom", "Clear floors", "Dust-free surfaces", "Tidy shared spaces"],
  },
  {
    id: "preferences",
    label: "Your preferences",
    question: "How should we communicate and arrive?",
    options: ["Call before arriving", "Text before arriving", "Contact a family member", "Contact my coordinator", "Quiet visit", "Pets at home"],
  },
  {
    id: "service",
    label: "Your service",
    question: "What kind of cleaning support is needed?",
    options: ["Regular household cleaning", "A one-off catch-up clean", "Help deciding"],
  },
];

export const homeAreas = [
  { id: "kitchen", name: "Kitchen", text: "Benchtops, sink, stovetop area, visible cupboard fronts and the floor." },
  { id: "bathroom", name: "Bathroom", text: "Basin, shower, bath, toilet, mirror and the floor." },
  { id: "bedrooms", name: "Bedrooms", text: "Dusting reachable surfaces and cleaning the floor, around belongings you'd like left as they are." },
  { id: "living", name: "Living areas", text: "Dusting, wiping surfaces and cleaning floors where everyday life happens." },
  { id: "laundry", name: "Laundry area", text: "Wiping the sink and benches, and cleaning the floor." },
  { id: "floors", name: "Floors", text: "Vacuuming and mopping hard floors, and vacuuming carpeted areas." },
  { id: "dusting", name: "Dusting", text: "Reachable shelves, sills, skirting and furniture surfaces." },
  { id: "surfaces", name: "General surfaces", text: "Handles, switches, tables and other surfaces used through the day." },
];

/** "Different homes, different routines": the same question, answered two different ways. */
export const differences = [
  { topic: "Cleaning priorities", a: "The bathroom, every visit", b: "Kitchen first, then floors" },
  { topic: "Schedule", a: "Every Tuesday morning", b: "Fortnightly, around appointments" },
  { topic: "Communication", a: "A text the day before", b: "A call to a family member" },
  { topic: "Access", a: "Someone home to let us in", b: "A lockbox code, agreed in advance" },
  { topic: "Household routine", a: "Quiet mornings, cleaning after lunch", b: "Busy afternoons, cleaning early" },
  { topic: "Level of help", a: "The whole home", b: "Two or three rooms only" },
  { topic: "Preferred areas", a: "Leave the study untouched", b: "Extra time in the kitchen" },
];

export const gettingStarted = [
  {
    stage: "Listen",
    you: "Here's my home, and here's what's hard to keep on top of.",
    us: "We ask about the home, the areas that matter and anything we should know before visiting.",
  },
  {
    stage: "Understand",
    you: "This is how my week usually runs.",
    us: "We talk through timing, access, communication and preferences, so the visit fits in rather than disrupting things.",
  },
  {
    stage: "Plan",
    you: "Can we start with the kitchen and bathroom?",
    us: "We agree the scope, the order of priorities and how often cleaning will happen, and put it in the quote.",
  },
  {
    stage: "Clean",
    you: "Please leave the desk as it is.",
    us: "The first clean follows what was agreed, with care around belongings and the areas you've asked us to leave.",
  },
  {
    stage: "Review",
    you: "That worked, but can we swap the order next time?",
    us: "We check in afterwards. If something should change, the routine can be adjusted.",
  },
];

export const oneOffUses = [
  "Catching up on cleaning that has built up over time",
  "Preparing a home before a new routine begins",
  "Giving extra attention to a few selected areas",
  "Resetting a space before regular cleaning starts",
];

export const beforeVisit = [
  { title: "Preferred arrival window", text: "A time of day that suits you, and times to avoid." },
  { title: "Access instructions", text: "Who will let us in, or how keys and codes are arranged." },
  { title: "Areas to prioritise", text: "Where to start, and where the most time should go." },
  { title: "Household preferences", text: "Products you prefer, shoes off, lights, doors or music." },
  { title: "Pets", text: "Any animals at home and how they're best managed." },
  { title: "Sensitive areas", text: "Rooms, items or belongings to leave untouched." },
  { title: "How to communicate", text: "Calls, texts or email, and how much contact you'd like." },
  { title: "If plans change", text: "Who to contact if a visit needs to move." },
];

export const enquirers = [
  { who: "The participant", text: "You can contact us directly about your own home and cleaning." },
  { who: "A family member", text: "Arranging cleaning for someone in the family, with their agreement." },
  { who: "A carer", text: "Organising household cleaning as part of day-to-day support." },
  { who: "A support coordinator", text: "Looking for a cleaning provider on a participant's behalf." },
  { who: "Another authorised person", text: "Someone the participant has asked to help arrange things." },
];

export const fundingPoints = [
  "NDIS funding arrangements vary from person to person and plan to plan.",
  "Not every cleaning service is automatically funded, and cleaning isn't automatically claimable.",
  "What can be funded depends on the person's circumstances and what's in their plan.",
  "Rules about which providers can be used can depend on how a plan is managed.",
  "Please confirm with the NDIS, your plan manager or your support coordinator that the cleaning you want is covered under your arrangement before booking.",
];

export const ordinaryCleaning = ["Kitchen surfaces", "Bathrooms", "Floors", "Dusting", "General household areas", "Laundry areas"];
export const specialistWork = [
  "Hazardous waste",
  "Hoarding or squalor situations",
  "Biohazard cleaning",
  "Major restoration after damage",
  "Pest-related contamination",
  "Specialist exterior work",
];

export const respect = [
  { title: "Your home, your way", text: "We follow how you like things done, not a routine that suits us." },
  { title: "Listening first", text: "Priorities and preferences are agreed before the first clean starts." },
  { title: "Clear communication", text: "You know what's planned, and who to contact if something changes." },
  { title: "Predictable visits", text: "Agreed times and an agreed scope, so there are fewer surprises." },
  { title: "Care with belongings", text: "Items are treated carefully, and anything you want left alone is left alone." },
  { title: "Room to adjust", text: "If something isn't working, the routine can change." },
];

export const mightSuit = [
  "People arranging regular household cleaning support",
  "NDIS participants seeking domestic cleaning assistance, where it suits their arrangement",
  "Families organising cleaning for a household member",
  "Carers and support coordinators looking for a cleaning provider",
  "Anyone who would like a consistent, predictable cleaning routine",
];

export const quoteInfo = [
  "Your suburb or area",
  "The type of home",
  "Rooms or areas that need cleaning",
  "Preferred frequency",
  "Preferred day and time",
  "Priority areas",
  "Access considerations",
  "The best contact details, and who to contact",
];

export const ndisFaqs: Faq[] = [
  {
    question: "What is NDIS cleaning?",
    answer:
      "It's a common way of describing household cleaning arranged for an NDIS participant, such as regular cleaning of the kitchen, bathroom, floors and living areas. What's actually included is agreed with the participant or the person arranging the service, around the home and routine.",
  },
  {
    question: "Can Melbourne Cleaning Pro provide NDIS cleaning?",
    answer:
      "We provide household cleaning that can be arranged around a participant's needs and routine. We don't claim NDIS registration on this website. If your plan or arrangement has requirements about which providers can be used, please check these with us and with your plan manager, support coordinator or the NDIS before booking.",
  },
  {
    question: "Is cleaning automatically covered by the NDIS?",
    answer:
      "No. Funding depends on the person's circumstances, their plan and how it's managed. We can't confirm whether cleaning is covered for you. The NDIS, your plan manager or your support coordinator can.",
  },
  {
    question: "Can my family member arrange the cleaning?",
    answer:
      "Yes. A family member can contact us to arrange cleaning, ideally with the participant's agreement. Let us know who should be contacted about visits and changes.",
  },
  {
    question: "Can a support coordinator contact you?",
    answer:
      "Yes. Support coordinators, carers and other authorised people are welcome to contact us to discuss a participant's cleaning needs and request a quote.",
  },
  {
    question: "What household areas can be cleaned?",
    answer:
      "Commonly the kitchen, bathroom, bedrooms, living areas, laundry area and floors, including dusting and wiping general surfaces. The exact areas and tasks are agreed with you.",
  },
  {
    question: "Can I request regular cleaning?",
    answer:
      "Yes. Regular cleaning can be arranged weekly, fortnightly or on another agreed schedule. The day and time are confirmed when the service is arranged, depending on availability.",
  },
  {
    question: "Can I request a one-off clean?",
    answer:
      "Yes. A one-off clean can help catch up on cleaning that has built up, or prepare a home before a regular routine starts. For heavier build-up, a deep clean may suit better.",
  },
  {
    question: "What information do you need for a quote?",
    answer:
      "Your suburb, the type of home, the rooms or areas that need cleaning, how often you'd like cleaning, your preferred day and time, priority areas, access details and who we should contact.",
  },
  {
    question: "Do I need to explain my cleaning preferences?",
    answer:
      "It helps a lot. Tell us about priority areas, anything to leave untouched, products you prefer, pets, and how you'd like us to communicate. The more we know, the better the cleaning can fit your home.",
  },
  {
    question: "Can cleaning be arranged around an existing routine?",
    answer:
      "That's the aim. Let us know which days and times work best, and which to avoid, such as appointments, rest times or other supports, and we'll work out an arrangement that fits where we can.",
  },
  {
    question: "What happens during the first clean?",
    answer:
      "The first clean follows the scope and priorities agreed beforehand. Afterwards, we check in about what worked and what should change, so later visits can be adjusted.",
  },
  {
    question: "Do you provide specialist or hazardous cleaning?",
    answer:
      "No. Hazardous waste, biohazard, hoarding or squalor situations, pest contamination and major restoration need specialist providers. We focus on ordinary household cleaning.",
  },
  {
    question: "Can NDIS cleaning be combined with another cleaning service?",
    answer:
      "You can ask. For example, a deep clean before a regular routine starts, or window or carpet cleaning. Mention everything in your quote request, and check what your arrangement allows.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the quote form and choose NDIS cleaning, or contact us. Tell us about the home, the cleaning needed, your preferred routine and the best person to contact.",
  },
];
