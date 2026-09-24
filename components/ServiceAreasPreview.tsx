import { ArrowRight, MapPin } from "lucide-react";
import { serviceAreas } from "@/lib/content";
import { routeHref } from "@/lib/site";
import { Container, SectionHeading } from "./ui";

export function ServiceAreasPreview() {
  return (
    <section id="areas" aria-labelledby="areas-heading" className="bg-cream py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="areas-heading"
            align="left"
            eyebrow="Areas we serve"
            title="Cleaning Services Across Melbourne"
            intro="Our Melbourne cleaners look after homes and businesses from the CBD out to the surrounding suburbs, including the inner city, the north and west, and the eastern and south-eastern suburbs. Not sure if we cover your area? Just ask when you request a quote."
          />
          <a
            href={routeHref("/areas/", "#contact")}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            View All Service Areas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-card ring-1 ring-line sm:p-8">
          <p className="text-sm font-semibold text-ink">Popular suburbs we clean in</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-2 text-sm font-medium text-ink"
              >
                <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-5 text-sm text-ink-soft">
            Plus many more suburbs across Greater Melbourne.
          </p>
        </div>
      </Container>
    </section>
  );
}
