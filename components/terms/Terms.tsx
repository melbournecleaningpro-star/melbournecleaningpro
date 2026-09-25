import type { ReactNode } from "react";
import { ChevronDown, FileText, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { Container } from "../ui";

/**
 * Written to match how the business and website actually work (September
 * 2026): quote and contact forms open the visitor's email app, there is no
 * online booking, payment or automatic pricing, and no cancellation, fee,
 * deposit or refund policy has been set. Where a policy hasn't been
 * established, the terms say it's agreed with the customer rather than
 * inventing one. Update the relevant section and LAST_UPDATED when that changes.
 */
export const LAST_UPDATED = { iso: "2026-09-25", display: "25 September 2026" };

const { name } = siteConfig;
const email = siteConfig.contact.email;
const a = "font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand";

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 first:mt-0">{children}</p>;
}
function UL({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.72em] h-1 w-3 shrink-0 rounded-full bg-wattle-dark" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type Section = { id: string; title: string; body: ReactNode };

const services = [
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
];

const sections: Section[] = [
  {
    id: "about-these-terms",
    title: "About these terms",
    body: (
      <>
        <P>
          These Terms &amp; Conditions apply to your use of the {name} website and, where relevant, to requesting and
          arranging cleaning services with us. In these terms, &ldquo;we&rdquo;, &ldquo;us&rdquo; and
          &ldquo;our&rdquo; mean {name}, and &ldquo;you&rdquo; means the person using the website or requesting a
          service.
        </P>
        <P>
          By using the website or requesting a service, you agree to these terms. Anything specific that we agree with
          you for a particular service, such as its scope, date or price, applies to that service alongside these terms.
        </P>
      </>
    ),
  },
  {
    id: "using-our-website",
    title: "Using our website",
    body: (
      <>
        <P>When you use the website, please:</P>
        <UL
          items={[
            "Give accurate information when you fill in a form or contact us",
            "Don't submit misleading information or requests on someone else's behalf without their permission",
            "Don't try to interfere with, damage or gain unauthorised access to the website",
            "Use the website lawfully",
          ]}
        />
      </>
    ),
  },
  {
    id: "services",
    title: "Services",
    body: (
      <>
        <P>
          We offer {services.slice(0, -1).join(", ")} and {services[services.length - 1]}. You can read about each one
          on our <a href="/services/" className={a}>services page</a>.
        </P>
        <P>
          What a service includes depends on the service you request, your property and the requirements we agree with
          you. Not every service is available at every location or at every time, and we&apos;ll let you know if we
          can&apos;t provide something you&apos;ve asked for.
        </P>
      </>
    ),
  },
  {
    id: "quotes-and-pricing",
    title: "Quotes & pricing",
    body: (
      <>
        <P>
          Quotes are free and there&apos;s no obligation to book. The website doesn&apos;t calculate prices
          automatically: we prepare each quote from the details you give us. A quote may depend on:
        </P>
        <UL
          items={[
            "The type of service",
            "The type and size of the property",
            "Your cleaning requirements and any areas that need particular attention",
            "The condition of the property",
            "How often you'd like cleaning",
            "Access and other relevant details about the job",
          ]}
        />
        <P>
          Because a quote relies on that information, it may need to be revisited if the property or requirements turn
          out to be materially different from what was described. We&apos;ll discuss any change with you. You can start
          a request through our <a href="/quote/" className={a}>quote form</a>.
        </P>
      </>
    ),
  },
  {
    id: "bookings",
    title: "Bookings & scheduling",
    body: (
      <>
        <P>
          Submitting the quote or contact form, or emailing us, is a request, not a confirmed booking. The website&apos;s
          forms open your own email app with your details filled in, and nothing is sent until you press send.
        </P>
        <P>
          A booking is confirmed only once we&apos;ve agreed the service, date and relevant details with you. A preferred
          date or time in your request is a preference; availability isn&apos;t guaranteed until it&apos;s confirmed.
        </P>
      </>
    ),
  },
  {
    id: "customer-responsibilities",
    title: "Your responsibilities",
    body: (
      <>
        <P>To help the service go as planned, please:</P>
        <UL
          items={[
            "Provide accurate details about the property and what you need",
            "Tell us about any special cleaning requirements or areas that need attention",
            "Let us know about restrictions, such as areas not to be cleaned, surfaces that need particular care, or building rules",
            "Mention pets, hazards or anything else we should know before the clean",
          ]}
        />
      </>
    ),
  },
  {
    id: "access",
    title: "Access to the property",
    body: (
      <>
        <P>
          We need to be able to access the property to carry out the service. You don&apos;t always need to be home, but
          access needs to be arranged in advance, for example keys, a lockbox, building access, swipe cards or alarm
          codes.
        </P>
        <P>
          Please also tell us about parking or building restrictions. If we can&apos;t access the property as arranged,
          we&apos;ll contact you to work out what happens next.
        </P>
      </>
    ),
  },
  {
    id: "cleaning-requirements",
    title: "Cleaning requirements & property condition",
    body: (
      <>
        <P>
          We carry out the cleaning that&apos;s been agreed with you. Results can depend on things such as:
        </P>
        <UL
          items={[
            "The condition of the property and how much dirt or build-up there is",
            "Stains, marks and how long they've been there",
            "Existing damage, age and wear",
            "The surfaces and materials involved",
            "Whether areas can be reached safely",
          ]}
        />
        <P>
          Not every stain, mark or condition can be removed, and cleaning can&apos;t repair existing damage. Heavy
          furniture isn&apos;t moved, and only areas that can be reached safely are cleaned; some work, such as high or
          hard-to-reach windows, may need a specialist.
        </P>
      </>
    ),
  },
  {
    id: "changes-and-cancellations",
    title: "Changes & cancellations",
    body: (
      <P>
        If you need to change or cancel a service, please contact us as soon as possible. Any arrangements that apply to
        changes or cancellations depend on the terms agreed for your service, and we&apos;ll confirm them with you when
        the service is booked.
      </P>
    ),
  },
  {
    id: "payments",
    title: "Payments",
    body: (
      <P>
        The website doesn&apos;t take payments. How and when payment is made for a service is agreed with you before the
        service goes ahead.
      </P>
    ),
  },
  {
    id: "belongings",
    title: "Property & personal belongings",
    body: (
      <P>
        Before the clean, please put away or tell us about anything valuable, fragile, sentimental or sensitive, and let
        us know about surfaces or items that need special care or shouldn&apos;t be cleaned. If something concerns you
        after a service, contact us promptly so we can discuss it with you.
      </P>
    ),
  },
  {
    id: "website-information",
    title: "Website information",
    body: (
      <P>
        The information on this website is general information about our services. We work to keep it accurate and up
        to date, but it may change, and the details agreed for your particular service take priority over general
        website content. Illustrations on the website show the kind of result a service aims for; they aren&apos;t
        photos of specific jobs.
      </P>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <P>
        Personal information you give us through the website or by email is handled as described in our{" "}
        <a href="/privacy-policy/" className={a}>Privacy Policy</a>.
      </P>
    ),
  },
  {
    id: "liability",
    title: "Your rights & our liability",
    body: (
      <>
        <P>
          Nothing in these terms excludes, restricts or changes any rights or remedies you have under the Australian
          Consumer Law or other laws that can&apos;t be excluded.
        </P>
        <P>
          Subject to those rights, we aren&apos;t responsible for problems caused by inaccurate information provided to
          us, by conditions we weren&apos;t told about, or by events outside our reasonable control. If you have a
          concern about a service, please contact us so we can look into it.
        </P>
      </>
    ),
  },
  {
    id: "changes-to-terms",
    title: "Changes to these terms",
    body: (
      <P>
        We may update these terms from time to time, for example when our services or the website change. The date at
        the top of this page shows when they were last updated. The terms that apply to a service are the ones in place
        when that service is agreed.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Questions about these terms?",
    body: (
      <>
        <P>
          If anything here is unclear, or you have a question about a service, we&apos;re happy to help. You may also
          find an answer in our <a href="/faq/" className={a}>FAQ</a>.
        </P>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={email.href}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
          >
            <Mail className="h-4 w-4" aria-hidden="true" /> {email.display}
          </a>
          <a
            href="/contact/"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-ink ring-1 ring-inset ring-ink/20 transition hover:ring-brand focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
          >
            Contact page
          </a>
        </div>
      </>
    ),
  },
];

const keyPoints = [
  "A quote or form submission is a request, not a confirmed booking.",
  "Quotes are free, prepared from your details, and may change if the job differs.",
  "Cleaning can't remove every stain or repair existing damage.",
  "Your rights under the Australian Consumer Law aren't affected.",
];

function TocList() {
  return (
    <ol className="space-y-0.5 text-sm">
      {sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="flex gap-2.5 rounded-lg px-3 py-1.5 text-ink-soft transition hover:bg-white hover:text-ink focus-visible:bg-white focus-visible:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
          >
            <span className="w-5 shrink-0 tabular-nums text-ink-soft/60">{String(i + 1).padStart(2, "0")}</span>
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function TermsDocument({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <>
      <header className="bg-brand-50">
        <Container className="max-w-6xl pb-12 pt-6 sm:pt-8">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 flex items-start gap-4">
            <span className="mt-1 hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand ring-1 ring-brand/15 sm:flex" aria-hidden="true">
              <FileText className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">Legal information</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Terms &amp; Conditions</h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
                The general conditions for using the {name} website, requesting a quote and arranging cleaning services,
                written to be read, not skimmed past.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm text-ink-soft ring-1 ring-line">
                <span className="font-semibold text-ink">Last updated:</span>
                <time dateTime={LAST_UPDATED.iso}>{LAST_UPDATED.display}</time>
              </p>
            </div>
          </div>
        </Container>
      </header>

      <Container className="max-w-6xl py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
          <div className="min-w-0">
            {/* key points */}
            <aside aria-labelledby="key-points-heading" className="rounded-2xl border-l-4 border-wattle bg-white p-6 ring-1 ring-line sm:p-7">
              <h2 id="key-points-heading" className="text-base font-semibold text-ink">
                The key points
              </h2>
              <ol className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {keyPoints.map((k, i) => (
                  <li key={k} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-semibold text-brand">
                      {i + 1}
                    </span>
                    {k}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-ink-soft">These points summarise the terms below; they don&apos;t replace them.</p>
            </aside>

            {/* mobile/tablet contents */}
            <details className="group mt-8 rounded-2xl border border-line bg-white lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-semibold text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25 [&::-webkit-details-marker]:hidden">
                On this page
                <ChevronDown className="h-5 w-5 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <nav aria-label="Terms sections" className="border-t border-line bg-cream p-2">
                <TocList />
              </nav>
            </details>

            <div className="mt-6 max-w-[70ch] text-base leading-[1.75] text-ink-soft sm:text-[17px]">
              {sections.map(({ id, title, body }, i) => (
                <section
                  key={id}
                  id={id}
                  aria-labelledby={`${id}-heading`}
                  className="grid scroll-mt-24 grid-cols-1 gap-2 border-b border-line py-9 last:border-b-0 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-4"
                >
                  <span aria-hidden="true" className="text-sm font-semibold tabular-nums text-brand sm:pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 id={`${id}-heading`} className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                      <span className="sr-only">{i + 1}. </span>
                      {title}
                    </h2>
                    <div className="mt-4">{body}</div>
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* desktop contents (right-hand) */}
          <nav aria-label="Terms sections" className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl bg-cream p-3">
              <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">On this page</p>
              <TocList />
            </div>
          </nav>
        </div>
      </Container>
    </>
  );
}
