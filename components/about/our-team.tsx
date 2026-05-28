"use client";

import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TEAM_MEMBERS } from "@/lib/team-members";

gsap.registerPlugin(ScrollTrigger);

function TeamCard({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return (
    <article className="team-card flex h-[13rem] w-[10.5rem] shrink-0 flex-col items-center rounded-2xl border border-white/[0.08] bg-[#0a1f38]/95 px-4 py-5 text-center shadow-[0_16px_40px_-20px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-colors duration-300 hover:border-[#22c55e]/30 sm:h-[14rem] sm:w-44 md:px-5 md:py-6">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-[#d1d5db] sm:h-16 sm:w-16">
        <User className="h-7 w-7 text-[#6b7280] sm:h-8 sm:w-8" strokeWidth={2} />
      </div>
      <h3 className="mt-4 line-clamp-2 font-display text-sm font-bold leading-snug text-white sm:text-[0.9375rem]">
        {name}
      </h3>
      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-400">
        {role}
      </p>
    </article>
  );
}

const navBtnClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0a1f42] text-[#22c55e] shadow-sm transition hover:border-[#22c55e]/40 hover:bg-[#0d2847] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22c55e]/50 md:h-11 md:w-11";

export default function OurTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-section-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".team-carousel", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        y: 28,
        opacity: 0,
        duration: 0.85,
        delay: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-black/[0.06] bg-[#EFECE6] py-20 text-white md:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_100%,rgba(34,197,94,0.07),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:max-w-[1360px] lg:px-10">
        <header className="team-section-heading mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center md:mb-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a1f42]/80 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e] shadow-[0_0_10px_#22c55e]" />
              Our Team
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5.5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-black">
            Built by{" "}
            <span className="text-[#22c55e]">Passionate Minds</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-400 md:text-lg">
            A multidisciplinary team focused on building reliable software and
            lasting partnerships with our clients.
          </p>
        </header>

        <div className="team-carousel mt-12 lg:mt-14">
          <div className="flex items-center gap-3 md:gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              className={`${navBtnClass} hidden sm:flex`}
              aria-label="Previous team members"
            >
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2.5} />
            </button>

            <div
              className="min-w-0 flex-1 cursor-grab overflow-hidden active:cursor-grabbing"
              ref={emblaRef}
            >
              <div className="flex touch-pan-y -ml-4 md:-ml-5">
                {TEAM_MEMBERS.map((member) => (
                  <div key={member.name} className="pl-4 md:pl-5">
                    <TeamCard name={member.name} role={member.role} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollNext}
              className={`${navBtnClass} hidden sm:flex`}
              aria-label="Next team members"
            >
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2.5} />
            </button>
          </div>

          <p className="mt-5 text-center text-xs text-slate-500 sm:hidden">
            Swipe to see more
          </p>
        </div>
      </div>
    </section>
  );
}
