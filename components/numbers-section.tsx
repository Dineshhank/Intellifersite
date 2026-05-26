"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { end: 20, suffix: "+", lines: ["Active", "Clients"], start: 1 },
  { end: 75, suffix: "+", lines: ["Projects", "Done"], start: 1 },
  { end: 95, suffix: "%", lines: ["Customer", "Delight"], start: 0 },
  { end: 10, suffix: "+", lines: ["Successful", "Years"], start: 1 },
] as const;

const STAGGER = 0.35;
const DURATION = 2;

function formatStatValue(value: number, suffix: "+" | "%") {
  return `${Math.round(value)}${suffix}`;
}

export default function NumbersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const nodes = valueRefs.current.filter(Boolean) as HTMLSpanElement[];
    if (!section || nodes.length !== stats.length) return;

    const ctx = gsap.context(() => {
      stats.forEach((stat, index) => {
        const el = nodes[index];
        const counter = { value: stat.start };

        el.textContent = formatStatValue(stat.start, stat.suffix);

        gsap.to(counter, {
          value: stat.end,
          duration: DURATION,
          ease: "power2.out",
          delay: index * STAGGER,
          snap: { value: 1 },
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none none",
            once: true,
          },
          onUpdate: () => {
            el.textContent = formatStatValue(counter.value, stat.suffix);
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 rounded-b-[40px] bg-[#F9F6F2] px-6 py-12 outline-none sm:rounded-b-[44px] sm:py-14 lg:rounded-b-[48px] lg:px-16 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] lg:rounded-3xl">
          <div className="grid grid-cols-2 divide-y divide-neutral-200/80 md:grid-cols-4 md:divide-y-0">
            {stats.map((stat, index) => (
              <div
                key={stat.lines.join("-")}
                className="relative flex flex-col items-center justify-center px-6 py-12 text-center sm:py-14 md:py-16 lg:py-[4.5rem]"
              >
                {index > 0 && index % 2 !== 0 && (
                  <span
                    className="absolute left-0 top-1/2 h-14 w-px -translate-y-1/2 bg-neutral-200/80 sm:h-16 md:hidden"
                    aria-hidden
                  />
                )}
                {index > 0 && (
                  <span
                    className="absolute left-0 top-1/2 hidden h-[3.5rem] w-px -translate-y-1/2 bg-neutral-200/80 sm:h-16 md:block lg:h-[4.25rem]"
                    aria-hidden
                  />
                )}
                <p className="font-display text-[2.75rem] font-bold leading-none tracking-tight text-neutral-900 sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem]">
                  <span
                    ref={(el) => {
                      valueRefs.current[index] = el;
                    }}
                  >
                    {formatStatValue(stat.start, stat.suffix)}
                  </span>
                </p>
                <p className="mt-5 text-sm leading-snug text-neutral-500 sm:mt-6 sm:text-[0.9375rem]">
                  {stat.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
