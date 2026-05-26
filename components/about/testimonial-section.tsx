"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PERSON_1 =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=faces";
const PERSON_2 =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=faces";

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
    text: "We count on Intellifer system, for professional support in delivering our project. We enjoy the great experience of dealing with a very supportive and committed team during execution and after go",
    name: "James Bond",
    role: "CEO",
    company: "aramco",
    image: PERSON_1,
    companyLogo: "/images/aramco-placeholder.png",
  },
  {
    id: 2,
    text: "Intellifer systems has constantly provided quality service for all our projects. We've been happy to work with their staff, who are always looking out for our interests and have been a key element in our growth. Glad to have chosen Intellifer Systems for all our outsourcing development needs.",
    name: "Emma Watson",
    role: "CEO",
    company: "Chevron",
    image: PERSON_2,
    companyLogo: "/images/chevron-placeholder.png",
  },
  {
    id: 3,
    text: "The team at Intellifer demonstrated exceptional skill and dedication. Their innovative approach to problem-solving helped us achieve our goals ahead of schedule.",
    name: "Robert Downey",
    role: "CTO",
    company: "TechCorp",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=faces",
    companyLogo: "TechCorp",
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
              <div className="flex touch-pan-y gap-4 md:gap-5 lg:gap-6">
                {TESTIMONIALS.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-0 shrink-0 grow-0 basis-full md:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-1.5rem)/2)]"
                  >
                    <article className="relative mx-auto flex h-full max-w-xl flex-col pt-3 md:mx-0 md:max-w-none md:pt-4">
                      <div className="absolute -top-2 left-1/2 z-10 w-[6.75rem] -translate-x-1/2 md:-top-3 md:w-[7.75rem]">
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border-[3px] border-white shadow-[0_6px_24px_-6px_rgba(0,0,0,0.2)]">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 120px, 140px"
                          />
                        </div>
                      </div>

                      <div className="mt-10 flex min-h-[280px] flex-1 flex-col overflow-hidden rounded-2xl shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)] md:mt-12 md:min-h-[300px]">
                        <div className="relative flex min-h-[58%] flex-1 flex-col bg-white px-5 pb-5 pt-11 text-left md:px-7 md:pb-6 md:pt-14">
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
                          <div className="flex shrink-0 items-center">
                            {item.company === "aramco" ? (
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold lowercase text-neutral-500 md:text-sm">
                                  aramco
                                </span>
                                <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600/15">
                                  <div className="h-3.5 w-3.5 rounded-sm bg-blue-600" />
                                </div>
                              </div>
                            ) : item.company === "Chevron" ? (
                              <div className="flex h-8 w-10 items-center justify-center">
                                <div className="flex flex-col">
                                  <div className="relative z-10 h-4 w-9 bg-[#005596] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
                                  <div className="-mt-1 h-4 w-9 bg-[#DA291C] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
                                </div>
                              </div>
                            ) : (
                              <span className="text-sm font-bold text-neutral-800">
                                {item.company}
                              </span>
                            )}
                          </div>
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
