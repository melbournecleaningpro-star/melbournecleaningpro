"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { routineSteps } from "@/lib/ndis-cleaning";

/**
 * "Your Routine": choose answers across five steps to build a plain summary
 * to mention in a quote request. Nothing is sent or stored.
 */
export function RoutineBuilder({ quoteHref }: { quoteHref: string }) {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<Record<string, string[]>>({});
  const current = routineSteps[step];

  const toggle = (id: string, o: string) =>
    setPicked((p) => {
      const list = p[id] ?? [];
      return { ...p, [id]: list.includes(o) ? list.filter((x) => x !== o) : [...list, o] };
    });

  const summary = routineSteps.filter((s) => picked[s.id]?.length);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
      <div className="rounded-[2rem] bg-white p-5 shadow-[0_20px_50px_-30px_rgb(63_107_91/0.45)] ring-1 ring-[#dfe8e0] sm:p-8">
        <div role="group" aria-label="Routine steps" className="flex flex-wrap gap-1.5">
          {routineSteps.map((s, i) => {
            const on = i === step;
            const done = (picked[s.id]?.length ?? 0) > 0;
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={on}
                aria-controls={`routine-panel-${s.id}`}
                onClick={() => setStep(i)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3f6b5b]/30 ${
                  on ? "bg-[#3f6b5b] text-white" : "bg-[#eef3ef] text-ink hover:bg-[#e2ebe4]"
                }`}
              >
                {done && !on ? <Check className="h-3.5 w-3.5 text-[#3f6b5b]" strokeWidth={3} aria-hidden="true" /> : <span aria-hidden="true" className="text-xs opacity-60">{i + 1}</span>}
                {s.label}
              </button>
            );
          })}
        </div>

        {routineSteps.map((s, i) => (
          <div key={s.id} id={`routine-panel-${s.id}`} hidden={i !== step} className="mt-8">
            <h3 className="text-2xl font-medium tracking-tight text-ink">{s.question}</h3>
            <p className="mt-1 text-sm text-ink-soft">Choose any that apply.</p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {s.options.map((o) => {
                const on = picked[s.id]?.includes(o) ?? false;
                return (
                  <li key={o}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(s.id, o)}
                      className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-[15px] transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3f6b5b]/30 ${
                        on ? "border-[#3f6b5b] bg-[#e4ece4] text-ink" : "border-[#dfe8e0] bg-white text-ink hover:border-[#3f6b5b]/50"
                      }`}
                    >
                      <span aria-hidden="true" className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${on ? "border-[#3f6b5b] bg-[#3f6b5b] text-white" : "border-[#c8d6cb]"}`}>
                        {on && <Check className="h-3 w-3" strokeWidth={3} />}
                      </span>
                      {o}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#e6ede7] pt-5">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft hover:text-ink disabled:opacity-40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3f6b5b]/30"
          >
            Back
          </button>
          <span className="text-sm text-ink-soft">
            Step {step + 1} of {routineSteps.length}
          </span>
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(routineSteps.length - 1, s + 1))}
            disabled={step === routineSteps.length - 1}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#3f6b5b] px-4 py-2 text-sm font-medium text-white hover:bg-[#335849] disabled:opacity-40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3f6b5b]/30"
          >
            Next <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <aside aria-live="polite" aria-label="Your routine summary" className="rounded-[2rem] bg-[#f6e7da] p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8a5a3c]">Your routine</p>
        {summary.length === 0 ? (
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            As you choose options, a short summary appears here. You can mention it when you request a quote. Nothing
            is sent from this page.
          </p>
        ) : (
          <dl className="mt-5 space-y-4">
            {summary.map((s) => (
              <div key={s.id}>
                <dt className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">{s.label}</dt>
                <dd className="mt-1 text-[15px] leading-snug text-ink">{picked[s.id].join(", ")}</dd>
              </div>
            ))}
          </dl>
        )}
        <a href={quoteHref} className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-[#3f6b5b] underline decoration-[#3f6b5b]/30 underline-offset-4 hover:decoration-[#3f6b5b]">
          Request a quote with these details <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </aside>
    </div>
  );
}
