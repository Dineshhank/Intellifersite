"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SERVICES = [
  "IOT",
  "BLOCKCHAIN",
  "AI",
  "DATA SCIENCE",
  "ERP SOLUTION",
  "DIGITALIZATION",
  "SOFTWARE DEVELOPMENT",
];

const TESTIMONIALS = [
  {
    id: 1,
    text: "Intellifer is built on trust, innovation, and execution excellence. We stay focused on long-term value creation for clients while continuously improving our people and processes.",
    name: "Yotheshkumar",
    role: "CEO",
    company: "Intellifer",
  },
  {
    id: 2,
    text: "Working at Intellifer has been a great experience with a supportive team, positive work culture, and continuous opportunities to learn and grow.",
    name: "Dineshbabu",
    role: "Senior Software Engineer",
    company: "Intellifer",
  },
  {
    id: 3,
    text: "At Intellifer, delivery is planned with clarity and executed with accountability. The collaboration across teams helps us deliver consistent outcomes on time with quality.",
    name: "Suriyaprakash",
    role: "Lead Delivery Person",
    company: "Intellifer",
  },
  {
    id: 4,
    text: "Intellifer has a very positive and supportive work culture where employees are encouraged to learn, collaborate, and grow. The company also provides continuous opportunities for skill development and career growth, which makes the overall experience both rewarding and enjoyable.",
    name: "Shrinithi",
    role: "HR",
    company: "Intellifer",
  },
  {
    id: 5,
    text: "Working at Intellifer gives a positive work environment, supportive colleagues, and constant learning opportunities, making our workplace truly inspiring.",
    name: "Prathibha",
    role: "AI Business Developer",
    company: "Intellifer",
  },
];

const navBtnClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#cfc7ba]/60 bg-[#e3ddd3] text-[#22c55e] shadow-sm transition hover:bg-[#d8d0c4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22c55e]/40 md:h-12 md:w-12";

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full overflow-hidden bg-[#22c55e] py-2.5 md:py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex items-center gap-6 px-5 md:gap-10 md:px-6">
            {SERVICES.map((service, i) => (
              <span
                key={i}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-white md:text-sm"
              >
                {service}
              </span>
            ))}
          </div>
          <div
            className="flex items-center gap-6 px-5 md:gap-10 md:px-6"
            aria-hidden
          >
            {SERVICES.map((service, i) => (
              <span
                key={`dup-${i}`}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-white md:text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#F5F3EE] py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop: arrows in gutters — never stacked on cards */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            <button
              type="button"
              onClick={scrollPrev}
              className={`${navBtnClass} hidden md:flex`}
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="h-5 w-5 stroke-[2.5]" />
            </button>

            <div className="min-w-0 flex-1 overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y -ml-4 md:-ml-5 lg:-ml-6">
                {TESTIMONIALS.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 md:pl-5 lg:basis-1/2 lg:pl-6"
                  >
                    <article className="relative mx-auto flex h-full max-w-xl flex-col md:mx-0 md:max-w-none">
                      <div className="flex min-h-[280px] flex-1 flex-col overflow-hidden rounded-2xl shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)] md:min-h-[300px]">
                        <div className="relative flex min-h-[58%] flex-1 flex-col bg-white px-5 pb-5 pt-7 text-left md:px-7 md:pb-6 md:pt-9">
                          <span
                            className="mb-2 block font-serif text-5xl font-bold leading-none text-[#22c55e] md:text-6xl"
                            aria-hidden
                          >
                            &ldquo;
                          </span>
                          <p className="text-sm leading-relaxed text-neutral-700 md:text-[0.95rem] md:leading-[1.7]">
                            {item.text}
                          </p>
                        </div>

                        <div className="flex shrink-0 items-end justify-between gap-4 bg-[#EBE4DB] px-5 py-4 md:px-7 md:py-5">
                          <div>
                            <h4 className="text-base font-bold text-neutral-900 md:text-lg">
                              {item.name}
                            </h4>
                            <p className="text-xs text-neutral-600 md:text-sm">
                              {item.role}
                            </p>
                          </div>
                          <span className="text-sm font-bold text-neutral-800">
                            {item.company}
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollNext}
              className={`${navBtnClass} hidden md:flex`}
              aria-label="Next testimonials"
            >
              <ArrowRight className="h-5 w-5 stroke-[2.5]" />
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-4 md:hidden">
            <button
              type="button"
              onClick={scrollPrev}
              className={navBtnClass}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5 stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className={navBtnClass}
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
