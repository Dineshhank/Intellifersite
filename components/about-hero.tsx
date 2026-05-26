"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      className="relative flex min-h-[85vh] flex-col justify-center bg-[#F5F3EE] px-6 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-28 md:min-h-[82vh] lg:px-16 lg:pb-24 lg:pt-24"
      aria-labelledby="about-hero-heading"
    >
      <div className="mx-auto w-full max-w-7xl animate-in fade-in fill-mode-forwards slide-in-from-bottom-3 duration-700">
        <h1
          id="about-hero-heading"
          className="font-sans font-bold uppercase leading-[1.02] tracking-[-0.02em] text-neutral-900"
        >
          <span className="block text-[clamp(2.25rem,5.5vw+0.5rem,7.5rem)] lg:leading-[1.02] xl:leading-[0.98]">
            WE CREATE
          </span>
          <span className="mt-1 flex flex-wrap items-baseline gap-x-3 text-[clamp(2.25rem,5.5vw+0.5rem,7.5rem)] sm:gap-x-4 lg:leading-[1.02] xl:leading-[0.98]">
            <span className="text-neutral-900">IMPACTFUL</span>
            <span className="text-[#22c55e]">DIGITAL</span>
          </span>
          <span className="mt-1 block text-[clamp(2.25rem,5.5vw+0.5rem,7.5rem)] text-[#22c55e] lg:leading-[1.02] xl:leading-[0.98]">
            SOLUTIONS
          </span>
        </h1>

        <div className="mt-10 max-w-[600px] lg:mt-12">
          <p className="text-base leading-[1.75] text-neutral-600 sm:text-lg">
            We help businesses design, build, and scale digital products through
            technology, strategy, and innovation. From startups to enterprises,
            we deliver reliable and future-ready solutions.
          </p>

          <Link
            href="/services"
            className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#22c55e] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md motion-reduce:hover:scale-100 sm:mt-10 sm:px-6 sm:py-2.5 sm:text-[11px] sm:tracking-[0.2em]"
          >
            Explore our services
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#22c55e] transition-transform duration-300 group-hover:translate-x-0.5 sm:h-8 sm:w-8">
              <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
