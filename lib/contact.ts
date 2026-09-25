import type { Faq } from "./content";
import { siteConfig } from "./site";

export const PAGE_PATH = "/contact/";

/**
 * Enquiries are delivered by email. The site is a static export with no form
 * backend, so the form composes a pre-filled email in the visitor's own email
 * app (mailto:). To switch to a hosted form service later, replace
 * `sendEnquiry` in components/contact/EnquiryForm.tsx; keep any API keys in
 * server-side configuration, never in this file.
 */

/** Services offered. */
export const serviceOptions = [
  "House Cleaning",
  "End of Lease Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "Office Cleaning",
  "Airbnb Cleaning",
  "Move-In Cleaning",
  "Post-Construction Cleaning",
  "Spring Cleaning",
  "Window Cleaning",
  "Carpet Cleaning",
  "Upholstery Cleaning",
  "Oven Cleaning",
  "Mattress Cleaning",
  "Tile & Grout Cleaning",
  "Blind Cleaning",
  "Other / Not Sure",
];

export const propertyTypes = ["House", "Apartment / Unit", "Townhouse", "Office", "Commercial Property", "Airbnb / Short-Stay", "Other"];

export const detailsToInclude = [
  "Cleaning service required",
  "Property type",
  "Suburb or location",
  "Number of bedrooms or rooms, where relevant",
  "Number of bathrooms, where relevant",
  "Preferred date",
  "Cleaning frequency, if it's recurring",
  "Any specific areas or requirements",
];

export const afterSteps = [
  { title: "Send Your Enquiry", text: "Tell us about the property and the service you need." },
  { title: "We Review Your Requirements", text: "The requested cleaning scope can be discussed." },
  { title: "Confirm the Details", text: "Any relevant questions can be clarified before booking." },
  { title: "Arrange the Service", text: "Once the requirements are confirmed, the service can be arranged." },
];

export const suburbs = ["Melbourne CBD", "Richmond", "South Yarra", "Brunswick", "Footscray", "Preston", "Werribee", "Point Cook", "Doncaster", "Glen Waverley"];

export const contactFaqs: Faq[] = [
  {
    question: "How do I request a cleaning quote?",
    answer:
      "Fill in the enquiry form on this page. It opens your email app with your details already written out, ready for you to send. You can also email us directly.",
  },
  {
    question: "What information should I include in my enquiry?",
    answer:
      "The service you're after, the property type, your suburb, the number of bedrooms and bathrooms where relevant, your preferred date, how often you'd like cleaning if it's recurring, and any specific areas or requirements.",
  },
  {
    question: "Can I ask about a service if I'm not sure which one I need?",
    answer:
      "Yes. Choose Other / Not Sure in the form and describe the property and what needs cleaning. We'll help you work out which service fits.",
  },
  {
    question: "Do you provide residential and commercial cleaning?",
    answer: "Yes. We clean homes, apartments, rentals and short-stay properties, as well as offices and suitable commercial premises.",
  },
  {
    question: "Can I request a specific cleaning date?",
    answer: "Yes. Add your preferred date to the enquiry. The date is confirmed when the service is arranged.",
  },
  {
    question: "How can I contact Melbourne Cleaning Pro?",
    answer: `Use the enquiry form on this page or email ${siteConfig.contact.email.display}.`,
  },
];
