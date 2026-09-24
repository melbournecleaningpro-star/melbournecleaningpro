import Image from "next/image";
import { Phone } from "lucide-react";
import { images, workday } from "@/lib/office";
import { quoteHref, siteConfig } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

export function OfficeHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="office-hero-heading" className="bg-white">
      <Container className="pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mx-auto mt-12 max-w-3xl text-center lg:mt-16">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
            <span className="h-2 w-2 rounded-sm bg-wattle" aria-hidden="true" />
            Office Cleaning Melbourne
          </p>
          <h1
            id="office-hero-heading"
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Professional Office Cleaning in Melbourne
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Regular and one-off office cleaning planned around your working hours, office layout and business
            requirements, covering workspaces, meeting rooms, kitchens, bathrooms and common areas.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={quoteHref} size="lg">
              Request an Office Cleaning Quote
            </ButtonLink>
            <ButtonLink href={siteConfig.contact.phone.href} variant="secondary" size="lg">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </ButtonLink>
          </div>
        </div>

        {/* Office mosaic: meeting room | workspace | kitchen */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-16 lg:grid-cols-[1fr_1.6fr_1fr]">
          <div className="order-2 overflow-hidden rounded-t-2xl lg:order-1 lg:mt-16">
            <Image
              src={images.meeting.src}
              width={images.meeting.width}
              height={images.meeting.height}
              alt={images.meeting.alt}
              sizes="(min-width: 1024px) 340px, 50vw"
              className="aspect-[4/3] h-auto w-full object-cover lg:aspect-[3/4]"
            />
          </div>
          <div className="order-1 col-span-2 overflow-hidden rounded-t-2xl lg:order-2 lg:col-span-1">
            <Image
              src={images.workspace.src}
              width={images.workspace.width}
              height={images.workspace.height}
              alt={images.workspace.alt}
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="order-3 overflow-hidden rounded-t-2xl lg:mt-16">
            <Image
              src={images.kitchen.src}
              width={images.kitchen.width}
              height={images.kitchen.height}
              alt={images.kitchen.alt}
              sizes="(min-width: 1024px) 340px, 50vw"
              className="aspect-[4/3] h-auto w-full object-cover lg:aspect-[3/4]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function WorkdayStrip() {
  return (
    <section aria-label="Cleaning around your workday" className="border-y border-line bg-white">
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {workday.map(({ label, text, icon: Icon, tone }, i) => (
            <li
              key={label}
              className={`py-6 pr-4 lg:py-7 ${i % 2 === 1 ? "pl-4 sm:pl-6" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
                i > 0 ? "lg:border-l lg:border-line lg:pl-6" : ""
              } ${i % 2 === 1 ? "border-l border-line" : ""}`}
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Icon className={`h-4 w-4 ${tone === "wattle" ? "text-wattle-dark" : "text-brand"}`} aria-hidden="true" />
                {label}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function OfficeIntro() {
  return (
    <section aria-labelledby="office-intro-heading" className="bg-cream py-20 sm:py-24">
      <Container>
        <h2
          id="office-intro-heading"
          className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]"
        >
          Office Cleaning That Fits Around Your Working Day
        </h2>
        <div className="mt-10 gap-12 space-y-5 text-base leading-relaxed text-ink-soft sm:text-[17px] lg:columns-2 lg:space-y-0 [&>p]:break-inside-avoid lg:[&>p+p]:mt-5">
          <p>
            An office is a shared space. Staff use the same kitchens, bathrooms and meeting rooms every day,
            and clients and visitors form an impression from the reception area onwards. Keeping those spaces
            consistently clean is part of running a professional workplace.
          </p>
          <p>
            Good office cleaning works around your business, not the other way round. Cleaning can be arranged
            before staff arrive, after the office closes or during quieter periods, with days and times agreed
            in advance so your team knows what to expect.
          </p>
          <p>
            No two offices are laid out the same way. An open-plan floor with hot desks, a suite of private
            offices and a small practice with a reception area all need a different approach. We tailor the
            scope to your office, whether that means focusing on kitchens and bathrooms, meeting rooms, or
            every area on a regular schedule.
          </p>
          <p>
            Regular office cleaning is ongoing maintenance on an agreed schedule. One-off cleaning suits
            situations like an office move, an event or a periodic detailed clean. Your business might need one,
            the other or a combination of both.
          </p>
          <p>
            To request a quote, tell us your office location, approximate size, the areas you&apos;d like
            cleaned and your preferred frequency and time. We&apos;ll confirm the scope with you before
            anything is booked.
          </p>
        </div>
      </Container>
    </section>
  );
}
