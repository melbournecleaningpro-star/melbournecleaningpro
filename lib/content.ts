import type { LucideIcon } from "lucide-react";
import {
  BedDouble,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  ClipboardList,
  House,
  KeyRound,
  MapPin,
  MessageSquareText,
  Search,
  SlidersHorizontal,
  Sparkles,
  SprayCan,
  UserCheck,
} from "lucide-react";
import { routeHref } from "./site";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export const services: Service[] = [
  {
    title: "House Cleaning",
    description:
      "Regular or one-off cleaning for kitchens, bathrooms, living areas and bedrooms, done the way you like it.",
    icon: House,
    href: routeHref("/services/house-cleaning/", "#quote"),
  },
  {
    title: "End of Lease Cleaning",
    description:
      "A thorough move-out clean designed around typical Melbourne rental inspection checklists.",
    icon: KeyRound,
    href: routeHref("/services/end-of-lease-cleaning/", "#quote"),
  },
  {
    title: "Commercial Cleaning",
    description:
      "Scheduled cleaning for shops, clinics, studios and shared commercial spaces, before or after hours.",
    icon: Building2,
    href: routeHref("/services/commercial-cleaning/", "#quote"),
  },
  {
    title: "Deep Cleaning",
    description:
      "A top-to-bottom clean that tackles built-up grime, skirting boards, grout, appliances and hard-to-reach spots.",
    icon: SprayCan,
    href: routeHref("/services/deep-cleaning/", "#quote"),
  },
  {
    title: "Office Cleaning",
    description:
      "Tidy desks, kitchens and bathrooms for a healthier workplace, with daily, weekly or custom schedules.",
    icon: BriefcaseBusiness,
    href: routeHref("/services/office-cleaning/", "#quote"),
  },
  {
    title: "Airbnb Cleaning",
    description:
      "Turnover cleans between guests, including fresh linen changes and a guest-ready reset of every room.",
    icon: BedDouble,
    href: routeHref("/services/airbnb-cleaning/", "#quote"),
  },
];

export type Benefit = { title: string; description: string; icon: LucideIcon };

export const benefits: Benefit[] = [
  {
    title: "Reliable & Professional",
    description:
      "Cleaners who turn up when agreed, communicate clearly and respect your home or workplace.",
    icon: UserCheck,
  },
  {
    title: "Flexible Cleaning Options",
    description:
      "Weekly, fortnightly, monthly or one-off. Choose the schedule and scope that suits you.",
    icon: SlidersHorizontal,
  },
  {
    title: "Attention to Detail",
    description:
      "We follow a room-by-room checklist so the small things like switches, skirting and handles don't get missed.",
    icon: Search,
  },
  {
    title: "Easy Online Quotes",
    description:
      "Tell us what you need and we'll come back with a clear, no-obligation quote.",
    icon: MessageSquareText,
  },
  {
    title: "Residential & Commercial",
    description:
      "One team for your home, rental property, office or commercial space.",
    icon: Building2,
  },
  {
    title: "Local Melbourne Service",
    description:
      "Melbourne cleaners who know the city, its suburbs and what local renters and businesses expect.",
    icon: MapPin,
  },
];

export type Step = { title: string; description: string; icon: LucideIcon };

export const steps: Step[] = [
  {
    title: "Request a Quote",
    description: "Tell us what you need cleaned, where and roughly how big the space is.",
    icon: ClipboardList,
  },
  {
    title: "Choose Your Booking",
    description: "Select a suitable date and the cleaning option that fits your needs.",
    icon: CalendarCheck,
  },
  {
    title: "Enjoy a Cleaner Space",
    description: "Our cleaning team completes the service so you can get on with your day.",
    icon: Sparkles,
  },
];

export const serviceAreas = [
  "Melbourne CBD",
  "Richmond",
  "South Yarra",
  "Brunswick",
  "Footscray",
  "Preston",
  "Werribee",
  "Point Cook",
  "Doncaster",
  "Glen Waverley",
] as const;

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What cleaning services do you offer in Melbourne?",
    answer:
      "We provide house cleaning, end of lease cleaning, deep cleaning, Airbnb turnover cleaning, office cleaning and commercial cleaning across Melbourne. If you need something not listed, ask when you request a quote.",
  },
  {
    question: "Do you provide regular house cleaning?",
    answer:
      "Yes. We offer weekly, fortnightly and monthly house cleaning, and you can adjust the tasks included to suit your home and routine.",
  },
  {
    question: "Do you offer end of lease cleaning?",
    answer:
      "Yes. Our end of lease cleaning covers the areas commonly checked at a final rental inspection, including kitchens, bathrooms, bedrooms, living areas and floors. Extras such as oven cleaning or interior windows can be added to your quote.",
  },
  {
    question: "Do you clean offices and commercial properties?",
    answer:
      "Yes. We clean offices, retail spaces, clinics and other commercial properties, with schedules that can run before or after business hours to minimise disruption.",
  },
  {
    question: "Which Melbourne suburbs do you service?",
    answer:
      "We service Melbourne CBD and suburbs across the inner city, north, south-east, east and west, including Richmond, South Yarra, Brunswick, Footscray, Preston, Werribee, Point Cook, Doncaster and Glen Waverley. Get in touch to confirm your suburb.",
  },
  {
    question: "How can I request a cleaning quote?",
    answer:
      "Call us or send an email with the type of clean, your suburb, the size of the property and your preferred date. We'll reply with a free, no-obligation quote.",
  },
  {
    question: "Can I book a one-off cleaning service?",
    answer:
      "Absolutely. One-off cleans are ideal before an event, after renovations, for a seasonal refresh or when you simply need a hand. There's no ongoing commitment required.",
  },
];
