"use client";

import Image from "next/image";
import BrandLogoGrid from "@/components/brand-logo-grid";
import { BRAND_LOGOS } from "@/lib/brand-logos";

const AVATARS = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
];

const testimonials = [
  {
    text: "Intellifer proved to be a professional service provider from the outset. We appreciate their proactive approach and ability to suggest improvements to a prospective solution on both architectural and business levels.",
    company: "Indian Defense",
    location: "INDIA",
    avatar: AVATARS[0],
  },
  {
    text: "We count on Intellifer for professional support in delivering our project. The team is supportive and committed during execution and after go-live.",
    company: "Indian Defense",
    location: "INDIA",
    avatar: AVATARS[1],
  },
  {
    text: "Intellifer systems has constantly provided quality service for all our projects. Their staff always looks out for our interests and has been key to our growth.",
    company: "Indian Defense",
    location: "INDIA",
    avatar: AVATARS[2],
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F9F6F2]">
      <div className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/60 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-800">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#22c55e]" aria-hidden />
            Testimonial
          </span>
        </div>

        <h2 className="mx-auto mt-6 max-w-2xl text-center font-display text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl lg:text-[3.25rem]">
          What Our{" "}
          <span className="font-garamond font-normal text-[#22c55e]">Client</span> Say
        </h2>

        <div className="mt-7 flex justify-center">
          <div className="flex -space-x-3">
            {AVATARS.map((src, i) => (
              <div
                key={src}
                className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[#F9F6F2] bg-neutral-200 md:h-12 md:w-12"
                style={{ zIndex: AVATARS.length - i }}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="48px" />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 w-full max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-stretch md:gap-5 lg:gap-6">
            {testimonials.map((t) => (
              <article
                key={t.text.slice(0, 24)}
                className="group flex min-h-[11.5rem] w-full flex-1 flex-col rounded-2xl bg-[#EDE8E1] px-6 py-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_48px_-16px_rgba(0,0,0,0.14)] md:min-h-[12.5rem] md:max-h-[14rem] md:px-7 md:py-6"
              >
                <p className="line-clamp-4 flex-1 text-left text-sm leading-[1.65] text-neutral-600 md:text-[0.9rem] md:leading-[1.7]">
                  {t.text}
                </p>

                <div className="my-4 h-px w-full shrink-0 bg-neutral-300/70 transition-colors duration-300 group-hover:bg-neutral-200" />

                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-neutral-200">
                    <Image
                      src={t.avatar}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-bold text-neutral-900">{t.company}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                      {t.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-black/[0.06] bg-white px-6 pb-20 pt-16 md:px-12 md:pt-20 lg:px-20 lg:pb-28 lg:pt-24">
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl lg:leading-[1.08]">
          <span className="block">
            We&apos;ve worked with{" "}
            <span className="font-garamond font-normal italic text-[#22c55e]">Global</span>
          </span>
          <span className="block">
            <span className="font-garamond font-normal italic text-[#22c55e]">Leading</span> brands
          </span>
        </h2>

        <BrandLogoGrid logos={BRAND_LOGOS} />
      </div>
    </section>
  );
}
