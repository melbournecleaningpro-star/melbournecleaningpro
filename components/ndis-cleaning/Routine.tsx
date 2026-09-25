import type { ReactNode } from "react";
import { ArrowRight, Check, Info, MessageCircle, Sun, X } from "lucide-react";
import {
  beforeVisit,
  differences,
  enquirers,
  fundingPoints,
  gettingStarted,
  homeAreas,
  mightSuit,
  ndisFaqs,
  oneOffUses,
  ordinaryCleaning,
  QUOTE_PATH,
  quoteInfo,
  respect,
  specialistWork,
} from "@/lib/ndis-cleaning";
import { isLiveRoute } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

const SAGE = "#3f6b5b";
const link = "font-medium text-[#3f6b5b] underline decoration-[#3f6b5b]/30 underline-offset-4 hover:decoration-[#3f6b5b]";

function MaybeLink({ path, children }: { path: string; children: string }) {
  return isLiveRoute(path) ? (
    <a href={path} className={link}>
      {children}
    </a>
  ) : (
    <span className="font-medium text-ink">{children}</span>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="text-sm font-medium tracking-wide text-[#3f6b5b]">{children}</p>;
}

/* 1 ─ Hero: a calm headline beside an example routine card */
export function NdisHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  const example = [
    ["Space", "Kitchen, bathroom, floors"],
    ["Routine", "Fortnightly, Thursday mornings"],
    ["Priority", "The bathroom first"],
    ["Preferences", "Text the day before; shoes off"],
    ["Contact", "Me, or my sister if plans change"],
  ];
  return (
    <section aria-labelledby="ndis-hero-heading" className="bg-[#eef3ef]">
      <Container className="pb-20 pt-6 sm:pt-8 lg:pb-24">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Kicker>NDIS cleaning in Melbourne</Kicker>
            <h1 id="ndis-hero-heading" className="mt-4 text-[2.4rem] font-medium leading-[1.1] tracking-tight text-ink sm:text-[3.4rem]">
              NDIS Cleaning That Fits Around Your Routine
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Household cleaning planned around you: the areas that matter, the times that suit and the way you like
              things done. We provide cleaning support where your service arrangement permits it, and we&apos;ll talk
              it through with you, or with the person helping you, before anything is booked.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={QUOTE_PATH} size="lg" className="bg-[#3f6b5b] hover:bg-[#335849]">
                Request a Quote
              </ButtonLink>
              <ButtonLink href="#your-routine" variant="secondary" size="lg">
                Talk About Your Cleaning Needs
              </ButtonLink>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-md">
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_60px_-30px_rgb(63_107_91/0.5)] sm:p-8">
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-ink">A cleaning routine</p>
                <Sun className="h-6 w-6 text-[#d9a066]" aria-hidden="true" />
              </div>
              <dl className="mt-6 space-y-4">
                {example.map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b border-dashed border-[#dfe8e0] pb-4 last:border-b-0 last:pb-0">
                    <dt className="w-24 shrink-0 text-sm text-ink-soft">{k}</dt>
                    <dd className="text-[15px] font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <figcaption className="mt-3 text-center text-sm text-ink-soft">An example only, shaped by what you tell us.</figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}

/* 2 ─ Plain-English explanation */
export function WhatItMeans() {
  return (
    <section aria-labelledby="means-heading" className="bg-white py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 id="means-heading" className="text-3xl font-medium leading-tight tracking-tight text-ink sm:text-[2.5rem]">
            What NDIS cleaning means, in plain English
          </h2>
          <p className="mt-8 rounded-3xl bg-[#f6e7da] p-6 text-lg leading-relaxed text-ink">
            The same household cleaning anyone might book, arranged around one person&apos;s home, routine and
            preferences.
          </p>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
          <p>
            &ldquo;NDIS cleaning&rdquo; usually describes domestic cleaning arranged for an NDIS participant: keeping the
            kitchen, bathroom, floors and living spaces clean on a regular basis. It&apos;s practical household help,
            not a clinical service.
          </p>
          <p>
            A clean home is simply easier to live in. For many people, knowing the cleaning happens on a set day, done
            the same way each time, makes it easier to plan the rest of the week and to know what to expect when
            someone comes into the home.
          </p>
          <p>
            No two people need the same thing. One person might want the whole home cleaned weekly; another might only
            need help with the bathroom and floors each fortnight. Some people prefer to be home, others prefer a quiet
            visit while they&apos;re out. That&apos;s why we start by discussing what you actually need, rather than
            offering one fixed package.
          </p>
          <p>
            You can arrange it yourself, or someone who supports you can get in touch on your behalf. Either way, the
            cleaning should fit the person and their home.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* 3 ─ Your Routine builder wrapper */
export function YourRoutine({ children }: { children: ReactNode }) {
  return (
    <section id="your-routine" aria-labelledby="your-routine-heading" className="scroll-mt-24 bg-[#eef3ef] py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Kicker>Your routine</Kicker>
          <h2 id="your-routine-heading" className="mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Start with what you need
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Work through the five steps at your own pace. There are no wrong answers, and you can skip anything.
          </p>
        </div>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}

/* 4 ─ Home map: a house shape containing the areas */
export function HomeMap() {
  return (
    <section aria-labelledby="home-map-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 id="home-map-heading" className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            What we can help clean
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Ordinary household cleaning, room by room. You choose which areas are included, and anything can be left
            out.
          </p>
        </div>
        <div className="mt-12">
          {/* roof */}
          <div aria-hidden="true" className="mx-auto h-16 w-full max-w-5xl bg-[#e4ece4] [clip-path:polygon(50%_0,100%_100%,0_100%)] sm:h-24" />
          <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-3 rounded-b-[2rem] bg-[#e4ece4] p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-4">
            {homeAreas.map((a) => (
              <li key={a.id} className="rounded-2xl bg-white p-5">
                <h3 className="font-medium text-ink">{a.name}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* 5 ─ Different homes, different routines: two answers to each question */
export function DifferentRoutines() {
  return (
    <section aria-labelledby="diff-routines-heading" className="bg-[#fbf6f1] py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <h2 id="diff-routines-heading" className="text-3xl font-medium leading-tight tracking-tight text-ink sm:text-[2.5rem]">
            Different homes, different routines
          </h2>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            The service should fit the person and their home, rather than asking everyone to fit the same routine. Here
            are two very different, equally valid ways the same questions can be answered.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-[2rem] bg-white ring-1 ring-[#efe3d8]">
          <div className="hidden grid-cols-[14rem_1fr_1fr] border-b border-[#efe3d8] bg-[#f6e7da] px-6 py-3 text-sm font-medium text-[#8a5a3c] md:grid">
            <span>&nbsp;</span>
            <span>One home might say</span>
            <span>Another might say</span>
          </div>
          <dl className="divide-y divide-[#f1e8df]">
            {differences.map((d) => (
              <div key={d.topic} className="grid grid-cols-1 gap-2 px-6 py-5 md:grid-cols-[14rem_1fr_1fr] md:items-center md:gap-6">
                <dt className="font-medium text-ink">{d.topic}</dt>
                <dd className="text-[15px] text-ink-soft">
                  <span className="mr-1 text-xs text-[#8a5a3c] md:hidden">A:</span>&ldquo;{d.a}&rdquo;
                </dd>
                <dd className="text-[15px] text-ink-soft">
                  <span className="mr-1 text-xs text-[#8a5a3c] md:hidden">B:</span>&ldquo;{d.b}&rdquo;
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

/* 6 ─ Getting started as a conversation */
export function GettingStarted() {
  return (
    <section aria-labelledby="getting-started-heading" className="bg-white py-20 sm:py-28">
      <Container className="max-w-4xl">
        <div className="text-center">
          <Kicker>Getting started</Kicker>
          <h2 id="getting-started-heading" className="mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            How we approach the first clean
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            It starts with a conversation, not a checklist.
          </p>
        </div>
        <ol className="mt-14 space-y-10">
          {gettingStarted.map((g, i) => (
            <li key={g.stage} className="grid grid-cols-1 gap-3 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-8">
              <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
                <span className="text-sm text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-medium text-[#3f6b5b]">{g.stage}</h3>
              </div>
              <div className="space-y-3">
                <p className="max-w-md rounded-3xl rounded-bl-md bg-[#f6e7da] px-5 py-3.5 text-[15px] text-ink">
                  <span className="sr-only">You: </span>&ldquo;{g.you}&rdquo;
                </p>
                <p className="ml-auto max-w-lg rounded-3xl rounded-br-md bg-[#e4ece4] px-5 py-3.5 text-[15px] leading-relaxed text-ink">
                  <span className="sr-only">Us: </span>
                  {g.us}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* 7 ─ Routine cleaning, with a gentle calendar rhythm */
export function RegularRoutine() {
  const weeks = [0, 1, 2, 3];
  return (
    <section aria-labelledby="regular-ndis-heading" className="bg-[#eef3ef] py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <h2 id="regular-ndis-heading" className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Routine cleaning
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              Most people choose regular cleaning: weekly, fortnightly or another schedule we agree together. The same
              day, a similar time and the same agreed tasks each visit make the service easier to plan around and
              easier to manage.
            </p>
            <p>
              A consistent routine also means less to explain each time. Once priorities and preferences are agreed,
              they carry over from visit to visit, and they can change whenever your needs do.
            </p>
            <p>
              The day and time are confirmed when the service is arranged, depending on availability. If a visit needs
              to move, let us know as early as you can.
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="rounded-[2rem] bg-white p-6 sm:p-8">
          {[
            ["Weekly", [0, 1, 2, 3]],
            ["Fortnightly", [0, 2]],
            ["Another agreed schedule", [1]],
          ].map(([label, active]) => (
            <div key={label as string} className="mb-5 last:mb-0">
              <p className="text-sm font-medium text-ink">{label as string}</p>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {weeks.map((w) => (
                  <span key={w} className={`h-10 rounded-xl ${(active as number[]).includes(w) ? "bg-[#3f6b5b]" : "bg-[#eef3ef]"}`} />
                ))}
              </div>
            </div>
          ))}
          <p className="mt-4 text-xs text-ink-soft">Four weeks, one square each.</p>
        </div>
      </Container>
    </section>
  );
}

/* 8 ─ One-off / deeper cleaning */
export function OneOffCleaning() {
  return (
    <section aria-labelledby="oneoff-ndis-heading" className="bg-white py-20 sm:py-24">
      <Container className="max-w-4xl">
        <h2 id="oneoff-ndis-heading" className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          One-off and deeper cleaning
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
          A one-off clean is different from a regular visit. It&apos;s usually longer and more focused, and it&apos;s often
          the starting point for a routine. It can help with:
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {oneOffUses.map((u) => (
            <li key={u} className="flex items-start gap-3 rounded-2xl bg-[#fbf6f1] px-5 py-4 text-[15px] text-ink">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#3f6b5b]" aria-hidden="true" />
              {u}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-base leading-relaxed text-ink-soft">
          For heavier build-up across the home, a <MaybeLink path="/services/deep-cleaning/">deep clean</MaybeLink> may
          suit better. For ordinary ongoing upkeep, see <MaybeLink path="/services/house-cleaning/">house cleaning</MaybeLink>,
          and if someone is moving out of a rental, <MaybeLink path="/services/end-of-lease-cleaning/">end of lease cleaning</MaybeLink>.
          Specialist work isn&apos;t included; see <a href="#boundaries" className={link}>what may need a different service</a>.
        </p>
      </Container>
    </section>
  );
}

/* 9 ─ Communication & access as a handwritten-style note card */
export function CommunicationAccess() {
  return (
    <section aria-labelledby="comm-heading" className="bg-[#fbf6f1] py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <MessageCircle className="h-10 w-10 text-[#d9a066]" strokeWidth={1.5} aria-hidden="true" />
            <h2 id="comm-heading" className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Communication and access
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              Before the first visit, it helps to share a few practical things. Tell us as much or as little as you
              like; it all helps the visit feel predictable.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-6 rounded-[2rem] bg-white p-6 sm:grid-cols-2 sm:p-9">
            {beforeVisit.map((b) => (
              <li key={b.title} className="border-l-2 border-[#d9a066] pl-4">
                <h3 className="font-medium text-ink">{b.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* 10 ─ Who can make the enquiry: a circle around the home */
export function PeopleAround() {
  return (
    <section aria-labelledby="people-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="people-heading" className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Families, carers and support coordinators
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            The first call often comes from someone other than the person receiving the service, and that&apos;s fine.
            We&apos;ll discuss the cleaning requirement with the appropriate person, and agree who to contact about visits
            and changes.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {enquirers.map((e, i) => (
            <li key={e.who} className={`rounded-[1.75rem] p-5 text-center ${i === 0 ? "bg-[#3f6b5b] text-white" : "bg-[#eef3ef] text-ink"}`}>
              <span aria-hidden="true" className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full text-lg font-medium ${i === 0 ? "bg-white/15" : "bg-white text-[#3f6b5b]"}`}>
                {e.who.replace(/^(The|A|Another) /, "").charAt(0).toUpperCase()}
              </span>
              <h3 className="mt-4 font-medium">{e.who}</h3>
              <p className={`mt-1.5 text-sm leading-relaxed ${i === 0 ? "text-white/85" : "text-ink-soft"}`}>{e.text}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-ink-soft">
          We arrange the cleaning. We don&apos;t coordinate NDIS funding or manage plans.
        </p>
      </Container>
    </section>
  );
}

/* 11 ─ Funding & NDIS arrangements: a clear, careful information panel */
export function FundingInfo() {
  return (
    <section aria-labelledby="funding-heading" className="bg-[#eef3ef] py-20 sm:py-28">
      <Container className="max-w-4xl">
        <div className="rounded-[2rem] border-2 border-[#3f6b5b] bg-white p-6 sm:p-10">
          <div className="flex items-start gap-4">
            <Info className="mt-1 h-7 w-7 shrink-0 text-[#3f6b5b]" aria-hidden="true" />
            <div>
              <h2 id="funding-heading" className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Funding and NDIS arrangements
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-soft sm:text-lg">
                This is general information, not funding or legal advice.
              </p>
            </div>
          </div>
          <ul className="mt-8 space-y-4">
            {fundingPoints.map((f) => (
              <li key={f} className="flex gap-3 text-base leading-relaxed text-ink">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#3f6b5b]" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl bg-[#f6e7da] p-5 text-[15px] leading-relaxed text-ink">
            Melbourne Cleaning Pro doesn&apos;t claim NDIS registration on this website and isn&apos;t an NDIS funding
            authority. We can&apos;t tell you whether cleaning is covered for you, or approve a claim. If your plan has
            requirements about which providers you can use, please check them with us and with your plan manager or
            support coordinator before booking.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* 12 ─ Boundaries: ordinary cleaning vs specialist work */
export function Boundaries() {
  return (
    <section id="boundaries" aria-labelledby="boundaries-heading" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <h2 id="boundaries-heading" className="max-w-3xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          What&apos;s included, and what may need a different service
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Knowing the difference helps you find the right help, rather than a service that can&apos;t do the job.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-[#eef3ef] p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-xl font-medium text-ink">
              <Check className="h-5 w-5 text-[#3f6b5b]" strokeWidth={3} aria-hidden="true" /> Ordinary household cleaning
            </h3>
            <p className="mt-2 text-[15px] text-ink-soft">What we provide:</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ordinaryCleaning.map((o) => (
                <li key={o} className="rounded-full bg-white px-4 py-2 text-[15px] text-ink">
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-[#fbf6f1] p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-xl font-medium text-ink">
              <X className="h-5 w-5 text-[#8a5a3c]" strokeWidth={3} aria-hidden="true" /> Specialist work
            </h3>
            <p className="mt-2 text-[15px] text-ink-soft">Needs a specialist provider and separate arrangements:</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {specialistWork.map((s) => (
                <li key={s} className="rounded-full bg-white px-4 py-2 text-[15px] text-ink">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 13 ─ Respectful cleaning experience: quiet statements */
export function RespectfulExperience() {
  return (
    <section aria-labelledby="respect-heading" style={{ backgroundColor: SAGE }} className="py-20 text-white sm:py-28">
      <Container>
        <h2 id="respect-heading" className="max-w-2xl text-3xl font-medium tracking-tight sm:text-[2.5rem] sm:leading-tight">
          A respectful cleaning experience
        </h2>
        <ul className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {respect.map((r) => (
            <li key={r.title}>
              <span aria-hidden="true" className="block h-px w-12 bg-[#f6e7da]" />
              <h3 className="mt-5 text-xl font-medium">{r.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/80">{r.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* 14 ─ Melbourne + who it may suit */
export function MelbourneAndSuit() {
  return (
    <section aria-label="Melbourne service and who it may suit" className="bg-[#fbf6f1] py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">Cleaning support across Melbourne</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              We provide household cleaning across Melbourne, from apartments in the city to houses and units in the
              suburbs. Homes and routines vary a lot across a city this size, which is exactly why we plan each service
              around the person rather than the postcode.
            </p>
            <p>
              Include your suburb when you get in touch, and we&apos;ll let you know about availability. See our{" "}
              <MaybeLink path="/service-areas/">service areas</MaybeLink> for more.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">Who this service may suit</h2>
          <ul className="mt-6 space-y-3">
            {mightSuit.map((m) => (
              <li key={m} className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 text-[15px] leading-relaxed text-ink">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d9a066]" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* 15 ─ Preparing a quote request */
export function QuotePrep() {
  return (
    <section aria-labelledby="quote-prep-heading" className="bg-white py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <h2 id="quote-prep-heading" className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Requesting a quote
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Quotes are free and based on the actual cleaning you need. There&apos;s no fixed price, so a few details help
            us get it right. Don&apos;t worry if you don&apos;t have them all; we can work them out together.
          </p>
          <ButtonLink href={QUOTE_PATH} size="lg" className="mt-8 bg-[#3f6b5b] hover:bg-[#335849]">
            Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
        <ol className="rounded-[2rem] bg-[#eef3ef] p-6 sm:p-9">
          {quoteInfo.map((q, i) => (
            <li key={q} className="flex items-center gap-4 border-b border-white py-3.5 text-[15px] text-ink last:border-b-0">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-medium text-[#3f6b5b]">{i + 1}</span>
              {q}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* 16 ─ FAQ: two soft columns */
export function NdisFAQ() {
  return (
    <section id="faq" aria-labelledby="ndis-faq-heading" className="bg-[#eef3ef] py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 id="ndis-faq-heading" className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            NDIS cleaning questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            For general questions, see the <a href="/faq/" className={link}>main FAQ</a> or browse{" "}
            <MaybeLink path="/services/">all our services</MaybeLink>.
          </p>
        </div>
        <div className="mt-10 columns-1 gap-4 md:columns-2">
          {ndisFaqs.map(({ question, answer }) => (
            <details key={question} className="group mb-4 break-inside-avoid rounded-3xl bg-white px-6 open:shadow-[0_16px_40px_-28px_rgb(63_107_91/0.6)]">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3f6b5b]/25 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-medium text-ink">{question}</h3>
                <span aria-hidden="true" className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-[#3f6b5b] group-open:bg-[#3f6b5b]" />
              </summary>
              <p className="pb-6 text-[15px] leading-relaxed text-ink-soft">{answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* 17 ─ Calm closing CTA */
export function NdisCTA() {
  return (
    <section id="quote" aria-labelledby="ndis-cta-heading" className="bg-[#f6e7da] py-20 sm:py-28">
      <Container className="max-w-3xl text-center">
        <Sun className="mx-auto h-10 w-10 text-[#d9a066]" strokeWidth={1.5} aria-hidden="true" />
        <h2 id="ndis-cta-heading" className="mt-6 text-3xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
          Let&apos;s build a cleaning routine that works for you.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Tell us about the home, the cleaning you need and when it would suit. We&apos;ll prepare a quote based on your
          actual requirements, and we&apos;re happy to talk it through first.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={QUOTE_PATH} size="lg" className="bg-[#3f6b5b] hover:bg-[#335849]">
            Request a Quote
          </ButtonLink>
          <ButtonLink href="/contact/" variant="secondary" size="lg">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
