import Image from "next/image";
import { Check, Info } from "lucide-react";
import { audiences, guestEye, images, rooms } from "@/lib/airbnb";
import { Container } from "../ui";

const tilt = ["lg:-rotate-2", "lg:rotate-1", "lg:-rotate-1", "lg:rotate-2", "lg:-rotate-1"];
const tops = ["bg-brand", "bg-wattle", "bg-ink", "bg-brand", "bg-wattle"];

/** Room checklist presented as hotel-style door hangers. */
export function DoorHangers() {
  return (
    <section aria-labelledby="rooms-airbnb-heading" className="bg-[#fbf7f0] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="rooms-airbnb-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Room-by-Room Turnover Checklist
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Each room gets its own reset before the next guest walks in.
          </p>
        </div>

        <ul className="-mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 pt-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {rooms.map(({ name, icon: Icon, items }, i) => (
            <li
              key={name}
              className={`relative w-64 shrink-0 snap-center rounded-[1.75rem] bg-white pb-6 shadow-card ring-1 ring-line transition-transform duration-300 hover:rotate-0 sm:w-auto ${tilt[i]}`}
            >
              {/* hanger head with door-handle hole */}
              <div className={`relative rounded-t-[1.75rem] px-6 pb-5 pt-12 text-center ${tops[i]} ${tops[i] === "bg-wattle" ? "text-ink" : "text-white"}`}>
                <span aria-hidden="true" className="absolute left-1/2 top-4 h-6 w-6 -translate-x-1/2 rounded-full bg-[#fbf7f0] ring-4 ring-black/10" />
                <Icon className="mx-auto h-6 w-6" aria-hidden="true" />
                <h3 className="mt-2 text-base font-semibold">{name}</h3>
              </div>
              <ul className="mt-5 space-y-2.5 px-6">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 flex max-w-2xl gap-2.5 text-sm leading-relaxed text-ink-soft">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
          The exact scope is agreed for each property. Laundry, linen changes, restocking and maintenance
          aren&apos;t part of this cleaning checklist.
        </p>
      </Container>
    </section>
  );
}

export function GuestEye() {
  return (
    <section aria-labelledby="guest-eye-heading" className="py-20 sm:py-24">
      <Container>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src={images.apartment.src}
              width={images.apartment.width}
              height={images.apartment.height}
              alt={images.apartment.alt}
              loading="lazy"
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="aspect-[4/3] h-auto w-full object-cover sm:aspect-[16/9]"
            />
          </div>

          <div className="relative -mt-16 mx-3 rounded-[1.75rem] bg-white p-7 shadow-lift ring-1 ring-line sm:mx-8 sm:p-9 xl:absolute xl:bottom-10 xl:right-10 xl:mx-0 xl:mt-0 xl:w-[31rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-wattle-dark">Through the guest&apos;s eyes</p>
            <h2 id="guest-eye-heading" className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
              Clean Is Important. Guest-Ready Is the Goal.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              When a guest opens the door, they form an impression in seconds. Cleaning shapes how the whole
              property looks and feels.
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {guestEye.map(({ title, text }) => (
                <div key={title}>
                  <dt className="text-sm font-semibold text-ink">{title}</dt>
                  <dd className="mt-0.5 text-sm leading-relaxed text-ink-soft">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function WhoWeHelp() {
  return (
    <section aria-labelledby="who-airbnb-heading" className="pb-20 sm:pb-24">
      <Container>
        <h2 id="who-airbnb-heading" className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Who We Help
        </h2>
        <ul className="mt-10 grid grid-cols-1 overflow-hidden rounded-[1.75rem] bg-brand text-white sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ title, text, icon: Icon }, i) => (
            <li
              key={title}
              className={`flex gap-4 p-6 sm:p-7 ${i > 0 ? "border-t border-white/15" : ""} ${
                i === 1 ? "sm:border-l sm:border-t-0" : ""
              } ${i === 2 ? "sm:border-t lg:border-l lg:border-t-0" : ""} ${i === 3 ? "sm:border-l lg:border-t-0" : ""}`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-wattle">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/75">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
