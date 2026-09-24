"use client";

import { Printer } from "lucide-react";

/** Prints only the checklist sheet (see the #print-checklist rules in globals.css). */
export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold text-brand ring-1 ring-inset ring-brand/30 transition-colors hover:bg-brand-50 print:hidden"
    >
      <Printer className="h-4 w-4" aria-hidden="true" />
      Print checklist
    </button>
  );
}
