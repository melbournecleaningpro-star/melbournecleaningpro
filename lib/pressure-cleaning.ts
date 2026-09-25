import type { Faq } from "./content";

export const PAGE_PATH = "/services/pressure-cleaning/";
export const QUOTE_PATH = "/quote/?service=pressure";

export type TextureId = "concrete" | "driveway" | "pavers" | "path" | "patio" | "garage" | "other";

/** Surfaces shown in the inspector. Considerations are general guidance, not a promise for every surface. */
export const surfaces: { id: TextureId; name: string; summary: string; considerations: string[] }[] = [
  {
    id: "concrete",
    name: "Concrete",
    summary:
      "Plain concrete is porous, so dirt and organic growth work their way into the surface rather than just sitting on top. That's why it can look grey-brown and blotchy long before it's actually damaged.",
    considerations: [
      "Older or broom-finished concrete has more texture for grime to settle into.",
      "Exposed aggregate and coloured or sealed concrete need a gentler, more controlled approach.",
      "Cracks, spalling and crumbling edges are checked first, because water pressure can make weak areas worse.",
    ],
  },
  {
    id: "driveway",
    name: "Driveways",
    summary:
      "Driveways take vehicle weight, tyre marks and everything that's walked or driven in from the street. They're often the largest single area on a property, and the first surface visitors see.",
    considerations: [
      "Tyre tracks and the area where cars park usually carry the most build-up.",
      "Edges, expansion joints and the strip beside the garden collect soil and growth.",
      "Oil and fuel marks are a different kind of stain and may only lighten rather than disappear.",
    ],
  },
  {
    id: "pavers",
    name: "Pavers",
    summary:
      "With pavers, the joints matter as much as the faces. Dirt, weeds and moss settle into the gaps, while the paver surface itself weathers and dulls.",
    considerations: [
      "Joint sand can be dislodged by cleaning and may need topping up afterwards.",
      "Softer or older pavers, and some natural stone, need lower pressure to avoid marking the face.",
      "Loose, sunken or cracked pavers are noted before work starts.",
    ],
  },
  {
    id: "path",
    name: "Paths & walkways",
    summary:
      "Paths see the most foot traffic of any outdoor surface. Shaded sections stay damp for longer, which is where slippery-looking organic build-up tends to appear first.",
    considerations: [
      "Edges beside lawns and garden beds hold soil and growth.",
      "Textured or exposed finishes need attention in the grooves, not just across the top.",
      "Uneven or lifting sections are pointed out, since cleaning doesn't change the level of a path.",
    ],
  },
  {
    id: "patio",
    name: "Patios & entertaining areas",
    summary:
      "Patios collect food and drink spills, barbecue residue, leaf litter and the marks left by furniture and pot plants, often under a roof or pergola that limits how quickly they dry.",
    considerations: [
      "Outdoor furniture, pots and barbecues need to be moved or worked around.",
      "Grease near barbecue areas is a different kind of mark from general dirt.",
      "Nearby walls, doors and glass are considered, because spray and runoff can reach them.",
    ],
  },
  {
    id: "garage",
    name: "Garage entrances",
    summary:
      "The strip in front of a garage door gets tyre marks, dripping water and dirt tracked in by vehicles, and it's often where a driveway looks most worn.",
    considerations: [
      "The base of the garage door and its seals need care so water isn't forced underneath.",
      "Oil marks are common here and may not come out fully.",
      "Drainage grates and channels are checked so they aren't blocked with loosened debris.",
    ],
  },
  {
    id: "other",
    name: "Other exterior hard surfaces",
    summary:
      "Some other hard outdoor surfaces, like courtyards, pool surrounds or steps, may also be suitable. It depends entirely on the material, its condition and what's around it.",
    considerations: [
      "We'll ask what the surface is made of and how old it is.",
      "Painted, coated, soft or fragile materials may not suit pressure cleaning at all.",
      "If a surface isn't suitable, we'll tell you rather than risk damaging it.",
    ],
  },
];

export const buildUp = [
  { name: "Dirt & mud", text: "Soil washed or tracked onto hard surfaces, which dries into a dull film." },
  { name: "Weathering", text: "Sun, rain and time slowly change how a surface looks, and not all of it is dirt." },
  { name: "Surface grime", text: "A general grey layer from dust, pollution and everyday outdoor use." },
  { name: "Organic build-up", text: "Moss, algae and mould-like growth, especially in shaded or damp areas." },
  { name: "Everyday marks", text: "Tyre marks, scuffs, bins, furniture feet and pot-plant rings." },
  { name: "Accumulated residue", text: "Leaf staining, spilt drinks, barbecue grease and other residue." },
];

export const driveway = [
  {
    title: "Why driveways weather",
    text: "A driveway sits in full sun and rain, takes the weight of vehicles every day, and is often the lowest point where water and soil drain to. Over time that combination leaves it darker, patchier and more tired-looking than the rest of the property.",
  },
  {
    title: "Vehicle traffic",
    text: "Tyres carry dirt from the road and leave rubber marks where they turn and stop. Parked cars can drip oil, coolant or water, leaving marks in the same place day after day.",
  },
  {
    title: "Where dirt collects",
    text: "Build-up gathers in the textured surface, along expansion joints, at the kerb and beside garden beds. These edges and joints often need more attention than the open middle of the driveway.",
  },
  {
    title: "Surface type matters",
    text: "Plain concrete, exposed aggregate, coloured concrete, pavers and asphalt all respond differently. The approach is chosen for the surface in front of us, not for driveways in general.",
  },
];

export const softVsPressure = {
  pressure: {
    title: "Pressure cleaning",
    text: "Uses a focused flow of water at higher pressure to lift dirt and build-up from hard, durable surfaces such as sound concrete.",
    suits: ["Sound, solid concrete", "Durable hard paving", "Heavily trafficked areas"],
  },
  soft: {
    title: "Soft washing",
    text: "Uses lower pressure, often with a suitable cleaning solution, for surfaces and materials that could be marked or damaged by a stronger flow.",
    suits: ["Softer or older materials", "Some coatings and finishes", "Delicate or weathered areas"],
  },
};

/** The site inspection checklist. */
export const inspection = [
  { code: "01", name: "Surface material", text: "Concrete, pavers, stone and other surfaces each have a safe range of approaches." },
  { code: "02", name: "Condition", text: "Whether the surface is sound, or has weak, flaking or crumbling areas." },
  { code: "03", name: "Age & weathering", text: "Older surfaces are often more porous and can mark more easily." },
  { code: "04", name: "Existing damage", text: "Cracks, chips, loose pavers and lifting sections, noted before any water goes on." },
  { code: "05", name: "Coatings & finishes", text: "Sealers, paint and decorative finishes that could be affected by pressure." },
  { code: "06", name: "Type of build-up", text: "Dirt, organic growth, oil and other marks each respond differently." },
  { code: "07", name: "Surrounding areas", text: "Garden beds, walls, doors, windows, vehicles and anything that could be splashed." },
  { code: "08", name: "Drainage & runoff", text: "Where the water and loosened debris will go, and keeping drains clear." },
  { code: "09", name: "Access", text: "Getting to the area, water supply and working around gates, steps and tight spaces." },
];

export const journey = [
  {
    name: "Assess",
    text: "We look over the surface and the space around it, confirm which areas are included, and point out any damage, stains or limitations before starting.",
  },
  {
    name: "Prepare",
    text: "Movable items are cleared or worked around, nearby areas that could be affected are considered, and drainage points are checked.",
  },
  {
    name: "Clean",
    text: "The surface is cleaned using an approach and pressure suited to the material, working methodically so the finish is as even as the surface allows.",
  },
  {
    name: "Inspect",
    text: "Cleaned areas are checked for missed patches, edges and joints, and any areas that need extra attention are revisited where appropriate.",
  },
  {
    name: "Finish",
    text: "Loosened debris is rinsed away from the cleaned area and the space is left tidy, with anything we noticed during the clean pointed out to you.",
  },
];

export const canDo = [
  "Lift everyday dirt, mud and surface grime",
  "Reduce organic build-up such as moss and algae",
  "Make joints, edges and textured finishes look more even",
  "Improve the overall appearance of a weathered surface",
];

export const cannotDo = [
  "Guarantee that old or deep staining will disappear completely",
  "Repair cracks, chips, spalling or sunken sections",
  "Restore faded colour or a worn-off finish",
  "Always remove oil, rust, paint or other specialised marks",
  "Stop build-up from returning over time",
];

export const audiences = [
  { title: "Homeowners", text: "Driveways, paths and outdoor areas that have lost their fresh look." },
  { title: "Landlords", text: "Refreshing exterior surfaces between tenancies or before an inspection." },
  { title: "Property managers", text: "Keeping shared paths, entries and outdoor areas presentable." },
  { title: "Businesses", text: "Entrances and forecourts that customers walk across every day." },
  { title: "Commercial properties", text: "Suitable outdoor hard surfaces around business premises, by arrangement." },
  { title: "Getting ready to use a space", text: "Before summer, a gathering, or simply using the patio again." },
  { title: "Before presenting a property", text: "Lifting the outside of a home before photos, a sale or a lease." },
];

export const beforeYouBook = [
  { title: "Clear what you can", text: "Move outdoor furniture, pot plants, bins, toys and vehicles away from the areas to be cleaned, if you're able to." },
  { title: "Keep access open", text: "Make sure gates can be opened and the area can be reached, and let us know if access is tight or needs a key." },
  { title: "Point out fragile areas", text: "Tell us about delicate garden beds, older fences, recently laid surfaces or anything nearby that needs care." },
  { title: "Mention known damage", text: "Cracks, loose pavers or flaking finishes are useful to know about before we arrive." },
  { title: "Flag priority spots", text: "Oil marks, heavy growth or a particular area you care most about can be discussed up front." },
];

export const quoteFactors = [
  { name: "Area size", text: "How many square metres, roughly, need cleaning." },
  { name: "Surface type", text: "Concrete, pavers, stone and other materials need different approaches." },
  { name: "Condition", text: "Weathered, fragile or damaged surfaces can take more care." },
  { name: "Accessibility", text: "Tight side paths, steps and restricted access affect the job." },
  { name: "Build-up", text: "The type and amount of dirt, growth and marks." },
  { name: "Preparation", text: "Items to move or areas to protect before starting." },
  { name: "Number of areas", text: "A driveway alone, or the driveway, paths and patio together." },
  { name: "Complexity", text: "Edges, joints, levels, drainage and surroundings." },
];

export const pressureFaqs: Faq[] = [
  {
    question: "What is pressure cleaning?",
    answer:
      "Pressure cleaning uses a focused flow of water to lift dirt, grime and build-up from hard outdoor surfaces like concrete, driveways, paths and patios. The pressure and approach are adjusted for each surface, because what suits sound concrete may be too strong for softer or older materials.",
  },
  {
    question: "What surfaces can be pressure cleaned?",
    answer:
      "Commonly concrete, driveways, pavers, paths and walkways, patios, outdoor entertaining areas and garage entrances, as well as some other exterior hard surfaces. Suitability depends on the material and its condition, so we'll check before starting and let you know if something isn't suitable.",
  },
  {
    question: "Can you pressure clean driveways?",
    answer:
      "Yes. Driveways are one of the most common requests. We pay particular attention to tyre tracks, parking areas, edges and joints. Oil and fuel marks are a different kind of stain and may only lighten rather than come out fully.",
  },
  {
    question: "Can pressure cleaning damage surfaces?",
    answer:
      "It can if the wrong pressure or technique is used, or if a surface is already weak. That's why the material, condition, existing damage and any coatings are checked first, and the approach is matched to the surface. Existing cracks or loose sections are pointed out before cleaning.",
  },
  {
    question: "Is pressure washing suitable for pavers?",
    answer:
      "Often, yes, with care. The pressure needs to suit the paver material, and joint sand can be dislodged during cleaning, so the joints may need topping up afterwards. Softer, older or natural-stone pavers may need a gentler approach.",
  },
  {
    question: "What's the difference between pressure cleaning and soft washing?",
    answer:
      "Pressure cleaning uses a stronger, focused flow of water for durable hard surfaces. Soft washing uses lower pressure, often with a suitable cleaning solution, for materials that could be marked or damaged by more force. Higher pressure isn't automatically better; the right method depends on the surface.",
  },
  {
    question: "Can pressure cleaning remove old stains?",
    answer:
      "Sometimes, but not always. Everyday dirt and organic build-up usually respond well. Old, deep or specialised stains, such as oil, rust, paint or long-term discolouration, may lighten without disappearing completely, and some need a different treatment altogether.",
  },
  {
    question: "How long does pressure cleaning take?",
    answer:
      "It depends on the size of the area, the surface, how much build-up there is, access and how much preparation is needed. A single path is a very different job from a large driveway plus patio, so timing is discussed when you request a quote.",
  },
  {
    question: "Do I need to prepare the area?",
    answer:
      "It helps to move outdoor furniture, pot plants, bins and vehicles if you can, keep gates and access open, and tell us about fragile areas or known damage. If there's something you can't move, let us know and we'll discuss how to work around it.",
  },
  {
    question: "Can you pressure clean around outdoor furniture?",
    answer:
      "Where possible, furniture should be moved so the whole surface can be cleaned evenly. If items can't be moved, we can work around them, though the area underneath won't be cleaned and may look different from the rest.",
  },
  {
    question: "Do you pressure clean commercial properties?",
    answer:
      "We can clean suitable outdoor hard surfaces around business premises, like entrances and forecourts, by arrangement. Tell us about the site, the surfaces and any access or timing requirements when you get in touch.",
  },
  {
    question: "How often should outdoor surfaces be cleaned?",
    answer:
      "There's no single answer. Shaded, damp and high-traffic areas build up faster than open, sunny ones. Many people clean when a surface starts to look dull or slippery-looking, before a gathering, or before presenting a property.",
  },
  {
    question: "Can you clean patios and paths?",
    answer:
      "Yes. Patios, outdoor entertaining areas, paths and walkways are all common requests. We'll look at the surface, edges and joints, as well as nearby walls, doors and garden beds that could be affected by spray and runoff.",
  },
  {
    question: "How do I request a pressure cleaning quote?",
    answer:
      "Use the quote form and choose pressure cleaning, or contact us. Tell us which surfaces need cleaning, the approximate area, your suburb, your preferred timing and anything we should know about, such as damage or stubborn marks. Photos help.",
  },
];
