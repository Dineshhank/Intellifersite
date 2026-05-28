"use client";

import { useRef, useEffect } from "react";
import NextImage from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const CARD_IMAGES = {
  digitalTwin: "/Digital twin.png",
  digitalTransformation: "/digital transformation.png",
  ai: "/AIII.png",
} as const;

/** Shared card size — compact so cards stay clear of centered copy */
const CARD_CLASS =
  "relative h-[200px] w-[156px] overflow-hidden rounded-2xl bg-neutral-200 shadow-[0_18px_36px_-12px_rgba(0,0,0,0.2)] xl:h-[218px] xl:w-[170px]";

function FloatingCard({
  positionClass,
  rotateClass,
  zClass,
  animRef,
  imageSrc,
  imageAlt,
}: {
  positionClass: string;
  rotateClass: string;
  zClass: string;
  animRef: React.RefObject<HTMLDivElement | null>;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className={`absolute ${positionClass} ${zClass}`}>
      <div className={rotateClass}>
        <div ref={animRef} className={`${CARD_CLASS} will-change-transform`}>
          <NextImage
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="170px"
          />
          <div className="absolute inset-0 bg-black/[0.08]" />
        </div>
      </div>
    </div>
  );
}

export default function WhoWeAre() {
  const topRightAnimRef = useRef<HTMLDivElement>(null);
  const bottomLeftAnimRef = useRef<HTMLDivElement>(null);
  const bottomRightAnimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = [
      { el: topRightAnimRef.current, delay: 0 },
      { el: bottomLeftAnimRef.current, delay: 0.85 },
      { el: bottomRightAnimRef.current, delay: 1.7 },
    ].filter((c) => c.el);

    const tweens = cards.map(({ el, delay }) =>
      gsap.fromTo(
        el,
        { z: -16, scale: 0.97, y: 5 },
        {
          z: 18,
          scale: 1.02,
          y: -4,
          duration: 3.2,
          delay,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          transformOrigin: "center center",
          force3D: true,
        },
      ),
    );

    return () => {
      tweens.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F9F6F2] py-20 md:py-24 lg:min-h-[800px] lg:py-28 xl:min-h-[860px]">
      {/* Card stage — aligned to reference layout */}
      <div
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1320px] lg:block"
        style={{ perspective: "1200px" }}
        aria-hidden
      >
        {/* Top right — clear of heading */}
        <FloatingCard
          positionClass="right-[2%] top-[14%] xl:right-[4%] xl:top-[15%]"
          rotateClass="-rotate-[12deg]"
          zClass="z-0"
          animRef={topRightAnimRef}
          imageSrc={CARD_IMAGES.digitalTwin}
          imageAlt="Digital twin"
        />

        {/* Bottom left — clear of paragraph */}
        <FloatingCard
          positionClass="left-[2%] top-[56%] xl:left-[4%] xl:top-[57%]"
          rotateClass="rotate-[12deg]"
          zClass="z-0"
          animRef={bottomLeftAnimRef}
          imageSrc={CARD_IMAGES.digitalTransformation}
          imageAlt="Digital transformation"
        />

        {/* Bottom right — tucked to corner */}
        <FloatingCard
          positionClass="right-[1%] bottom-[-4%] xl:right-[3%] xl:bottom-[-5%]"
          rotateClass="-rotate-[8deg]"
          zClass="z-0"
          animRef={bottomRightAnimRef}
          imageSrc={CARD_IMAGES.ai}
          imageAlt="AI"
        />
      </div>

      <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:max-w-2xl lg:px-8 xl:max-w-3xl xl:px-12">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/60 px-5 py-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#22c55e]" aria-hidden />
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-800">
            Who we are
          </span>
        </div>

        <h2 className="mb-8 font-display text-4xl font-bold leading-[1.12] tracking-tight text-neutral-900 md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
          A Team Built For{" "}
          <span className="font-garamond font-normal italic text-[#22c55e]">
            Digital
          </span>
          <br className="hidden sm:block" />
          Acceleration
        </h2>

        <p className="mb-10 max-w-2xl text-base leading-[1.75] text-neutral-600 md:text-lg">
          At Intellifer, we bring together technology, strategy, and
          human-centered thinking to help organizations unlock new opportunities.
          Our multidisciplinary team works closely with clients to modernize
          systems, streamline operations, and build solutions that deliver
          measurable business value. With a culture rooted in innovation and
          continuous learning, we turn complex challenges into scalable,
          future-ready outcomes.
        </p>

        <button
          type="button"
          className="group inline-flex items-center gap-3 rounded-full border border-black/[0.1] bg-white/50 py-2 pl-6 pr-2 text-sm font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:border-[#22c55e]/40"
        >
          Explore us
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22c55e] text-white transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </button>
      </div>
    </section>
  );
}
