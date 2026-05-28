"use client";

import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import Navbar from "@/components/navbar";
import { CONTACT_MAILTO } from "@/lib/contact";

type UnderConstructionPageProps = {
  title: string;
  description: string;
};

export default function UnderConstructionPage({
  title,
  description,
}: UnderConstructionPageProps) {
  return (
    <main className="min-h-screen bg-[#F5F3EE]">
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 sm:px-10 md:pt-28 lg:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_15%,rgba(34,197,94,0.09),transparent_60%)]" />

        <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#22c55e]/25 bg-[#22c55e]/10 text-[#22c55e] shadow-[0_0_30px_-8px_rgba(34,197,94,0.45)]">
            <Wrench className="h-7 w-7" strokeWidth={1.8} />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-800">
            <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
            Page Status
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.1rem,6vw,4.25rem)] font-bold uppercase leading-[1.03] tracking-tight text-neutral-900">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.8] text-neutral-600 md:text-lg">
            {description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_24px_-8px_rgba(34,197,94,0.5)] transition-transform hover:scale-[1.02]"
            >
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href={CONTACT_MAILTO}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-800 transition-colors hover:border-[#22c55e]/35 hover:text-[#22c55e]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

