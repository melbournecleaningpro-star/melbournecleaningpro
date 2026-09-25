import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { Container } from "../ui";

/**
 * Written from an audit of the codebase (September 2026): the enquiry form is
 * client-side only and opens the visitor's email app via mailto:, there are no
 * API routes, cookies, analytics, tag managers, storage or third-party scripts,
 * fonts are self-hosted at build time, and the site is hosted on Cloudflare
 * Workers. If any of that changes, update this policy and LAST_UPDATED.
 */
export const LAST_UPDATED = { iso: "2026-09-25", display: "25 September 2026" };

const { name } = siteConfig;
const email = siteConfig.contact.email;

const a = "font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand";

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 first:mt-0">{children}</p>;
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-7 text-lg font-semibold text-ink">{children}</h3>;
}
function UL({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-3 space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type Section = { id: string; title: string; body: ReactNode };

const sections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <>
        <P>
          This Privacy Policy explains how {name} handles personal information collected through this website. It
          covers information you choose to give us through the enquiry and quote forms and by email, and the limited technical
          information involved in delivering the website to you.
        </P>
        <P>
          It should be read together with any other notices published on this website. If anything here is unclear,
          you&apos;re welcome to <a href="#contact-privacy" className={a}>ask us about it</a>.
        </P>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we may collect",
    body: (
      <>
        <P>We only receive personal information that you decide to send us. That can include:</P>
        <H3>Contact information</H3>
        <UL items={["Your name", "Your email address", "Your phone number, if you choose to include it"]} />
        <H3>Property and service information</H3>
        <UL
          items={[
            "Your suburb or area",
            "The type of property",
            "The cleaning service you're asking about",
            "Your preferred date and time",
            "Bedrooms, bathrooms and approximate property size",
            "How often you'd like cleaning, and the areas you'd like us to focus on",
            "Your answer to a short follow-up question about some services",
            "Your preferred contact method",
            "Cleaning requirements and anything else you write in your message",
          ]}
        />
        <H3>Technical information</H3>
        <P>
          The website itself doesn&apos;t run analytics or tracking tools, and it doesn&apos;t collect technical
          information about visitors. As with any website, our hosting provider receives standard technical details
          when your browser requests a page, such as your IP address, browser and device type, the page requested and
          the referring page. This is used to deliver and protect the website (see{" "}
          <a href="#third-party-services" className={a}>third-party services</a>).
        </P>
      </>
    ),
  },
  {
    id: "how-we-collect",
    title: "How we collect information",
    body: (
      <>
        <P>Information reaches us in two ways:</P>
        <UL
          items={[
            <>
              <strong className="font-semibold text-ink">The enquiry and quote forms.</strong> The forms on our{" "}
              <a href="/contact/" className={a}>contact page</a> and <a href="/quote/" className={a}>quote page</a>{" "}
              don&apos;t upload anything to the website. When you submit one, it opens your own email app with your details written into a new email addressed to us.
              Nothing is sent until you press send, and the message travels through your email provider like any other
              email you write. The optional &ldquo;copy&rdquo; button only copies the text to your device&apos;s
              clipboard when you click it.
            </>,
            <>
              <strong className="font-semibold text-ink">Email.</strong> When you email us directly, we receive the
              message and anything you include in it.
            </>,
          ]}
        />
        <P>We don&apos;t collect information through cookies, tracking pixels or analytics on this website.</P>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use information",
    body: (
      <>
        <P>We use the information you send us to:</P>
        <UL
          items={[
            "Reply to your enquiry",
            "Prepare or discuss a cleaning quote",
            "Understand which service you need and what it involves",
            "Arrange cleaning services you ask us to provide",
            "Communicate with you about your enquiry or booking",
            "Keep business records and meet legal obligations, where applicable",
          ]}
        />
        <P>
          We don&apos;t use your information for advertising, profiling or remarketing. The website has no newsletter
          or marketing sign-up, and sending an enquiry doesn&apos;t add you to a mailing list.
        </P>
      </>
    ),
  },
  {
    id: "cookies-analytics",
    title: "Cookies & analytics",
    body: (
      <>
        <P>
          This website doesn&apos;t set cookies, and it doesn&apos;t use analytics, advertising or tracking tools. It
          also doesn&apos;t store information in your browser&apos;s local or session storage. Our fonts are included
          with the website itself, so viewing a page doesn&apos;t contact a font provider.
        </P>
        <P>
          If that changes, for example if we add website analytics in future, we&apos;ll update this policy to explain
          what&apos;s used and how you can manage it.
        </P>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    body: (
      <>
        <H3>Website hosting: Cloudflare</H3>
        <P>
          The website is hosted on Cloudflare&apos;s platform. To deliver pages and protect the site, Cloudflare
          processes technical information about each request, such as IP address, browser and device details, and
          the page requested. Cloudflare handles this information under its own privacy policy.
        </P>
        <H3>Email</H3>
        <P>
          Enquiries arrive by email, so they&apos;re held in our email account with our email service provider, which
          stores and delivers messages for us. Your own email provider also handles the message when you send it.
        </P>
        <P>The website doesn&apos;t use any other third-party service that receives your personal information.</P>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How information is shared",
    body: (
      <>
        <P>
          We only share personal information where it&apos;s needed to run the website, respond to you or provide a
          service you&apos;ve asked for. In practice, that means the service providers described above, which process
          information on our behalf.
        </P>
        <P>
          We may also disclose information where the law requires it. We don&apos;t sell, rent or trade your personal
          information.
        </P>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: (
      <P>
        We keep information for as long as it&apos;s reasonably needed to respond to your enquiry, provide services,
        maintain business records, meet legal obligations and resolve any disputes. When it&apos;s no longer needed for
        those purposes, we take reasonable steps to delete it.
      </P>
    ),
  },
  {
    id: "security",
    title: "Data security",
    body: (
      <>
        <P>
          We take reasonable steps to protect information from unauthorised access, loss, misuse or disclosure. Because
          our forms don&apos;t store submissions, there&apos;s no database of enquiries on the website itself.
        </P>
        <P>
          No method of sending or storing information online is completely secure, so we can&apos;t guarantee the
          security of information sent to us by email. Please avoid including sensitive information that we don&apos;t
          need to prepare a quote.
        </P>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights & choices",
    body: (
      <>
        <P>
          You can contact us about personal information you&apos;ve sent us through the website or by email. Where
          applicable under relevant privacy law, you can ask to:
        </P>
        <UL
          items={[
            "Access the personal information we hold about you",
            "Correct information that's inaccurate or out of date",
            "Ask questions about how your information is handled",
            "Have your information deleted, where applicable",
          ]}
        />
        <P>
          We may need to confirm your identity before acting on a request. In some cases the law may allow or require
          us to keep certain information, and if so we&apos;ll explain why.
        </P>
        <P>You can also simply choose not to send us information. The website works without it.</P>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    body: (
      <P>
        This website isn&apos;t directed at children, and we don&apos;t knowingly collect personal information from
        children. If you believe a child has sent us personal information, please contact us and we&apos;ll deal with
        it.
      </P>
    ),
  },
  {
    id: "external-links",
    title: "External links",
    body: (
      <P>
        This website may link to other websites. We&apos;re not responsible for how those websites handle information,
        so please read their privacy policies when you visit them.
      </P>
    ),
  },
  {
    id: "updates",
    title: "Updates to this policy",
    body: (
      <P>
        We may update this policy when the website, our business practices or legal requirements change. The date at
        the top of this page shows when it was last updated, so please check back from time to time.
      </P>
    ),
  },
  {
    id: "contact-privacy",
    title: "Questions about privacy?",
    body: (
      <>
        <P>
          If you have a question about information you&apos;ve sent through this website, or you&apos;d like to make a
          request, please email us.
        </P>
        <p className="mt-6">
          <a
            href={email.href}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-50 px-5 py-3 font-semibold text-brand ring-1 ring-brand/15 transition hover:bg-brand hover:text-white"
          >
            {email.display}
          </a>
        </p>
        <P>
          For anything else, visit the <a href="/contact/" className={a}>contact page</a>, browse our{" "}
          <a href="/services/" className={a}>services</a> or return to the <a href="/" className={a}>homepage</a>.
        </P>
      </>
    ),
  },
];

export const tocSections = sections.map(({ id, title }) => ({ id, title }));

const glance = [
  "Our enquiry and quote forms open your own email app. Nothing is sent until you press send.",
  "No cookies, analytics or tracking tools are used on this website.",
  "We use what you send us to reply, quote and arrange cleaning, never for advertising.",
];

function Toc({ id }: { id?: string }) {
  return (
    <ol className="space-y-1 text-sm" id={id}>
      {sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="flex gap-3 rounded-lg px-3 py-1.5 text-ink-soft transition hover:bg-brand-50 hover:text-brand focus-visible:bg-brand-50 focus-visible:text-brand"
          >
            <span className="w-5 shrink-0 text-right tabular-nums text-ink-soft/70">{i + 1}.</span>
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function PrivacyPolicy({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <>
      <header className="border-b border-line bg-white">
        <Container className="max-w-5xl pb-10 pt-6 sm:pt-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            How {name} collects, uses and protects information provided through this website.
          </p>
          <p className="mt-5 text-sm text-ink-soft">
            <span className="font-semibold text-ink">Last updated:</span>{" "}
            <time dateTime={LAST_UPDATED.iso}>{LAST_UPDATED.display}</time>
          </p>
        </Container>
      </header>

      <Container className="max-w-5xl py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
          {/* Contents: collapsible on small screens, sticky alongside the text on desktop */}
          <nav aria-label="Privacy policy contents" className="lg:sticky lg:top-24 lg:self-start">
            <details className="group rounded-2xl border border-line bg-cream lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                Contents
                <ChevronDown className="h-5 w-5 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="border-t border-line p-2">
                <Toc />
              </div>
            </details>
            <div className="hidden lg:block">
              <p className="px-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">Contents</p>
              <div className="mt-3">
                <Toc />
              </div>
            </div>
          </nav>

          <article className="max-w-[68ch] text-base leading-[1.75] text-ink-soft sm:text-[17px]">
            <aside aria-label="Summary" className="rounded-2xl border border-line bg-cream p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">In short</p>
              <ul className="mt-3 space-y-2">
                {glance.map((g) => (
                  <li key={g} className="flex gap-3 text-[15px] leading-relaxed">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-wattle-dark" />
                    {g}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-ink-soft">This summary doesn&apos;t replace the full policy below.</p>
            </aside>

            {sections.map(({ id, title, body }, i) => (
              <section key={id} id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 border-b border-line py-10 last:border-b-0">
                <h2 id={`${id}-heading`} className="flex gap-3 text-2xl font-semibold tracking-tight text-ink">
                  <span className="text-brand/70 tabular-nums">{i + 1}.</span>
                  {title}
                </h2>
                <div className="mt-5">{body}</div>
              </section>
            ))}

            {/* Target for the header's "Get a Free Quote" (#quote) link on this page. */}
            <p id="quote" className="scroll-mt-24 rounded-2xl bg-brand-50 px-6 py-5 text-[15px] leading-relaxed">
              Looking for a cleaning quote instead? Use the enquiry form on our{" "}
              <a href="/contact/" className={a}>contact page</a>.
            </p>
          </article>
        </div>
      </Container>
    </>
  );
}
