"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const steps = [
  {
    title: "PLANNING",
    description:
      "We align on goals, scope, and constraints early—so delivery stays predictable and every later decision maps back to measurable outcomes.",
  },
  {
    title: "DESIGNING",
    description:
      "We shape intuitive experiences and system blueprints—balancing user needs, brand, and technical feasibility before build work begins.",
  },
  {
    title: "DEFINING",
    description:
      "We translate designs into clear requirements, interfaces, and milestones—reducing ambiguity and keeping engineering and stakeholders in sync.",
  },
  {
    title: "DEVELOPMENT",
    description:
      "We implement in iterative cycles with code quality, observability, and integration in mind—so releases stay stable as complexity grows.",
  },
  {
    title: "TESTING",
    description:
      "We validate functionality, performance, and edge cases rigorously—using automated checks and structured QA so launches feel confident.",
  },
  {
    title: "DEPLOYMENT",
    description:
      "We publish the completed product with controlled rollout and release checks, ensuring deployment concerns are addressed with minimal risk.",
  },
  {
    title: "MAINTENANCE",
    description:
      "We provide continuous support to resolve evolving needs and keep the system running reliably under agreed service levels.",
  },
];

/** Workplace-style icon: green tile + three horizontal bars */
function StepIcon() {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#22c55e] shadow-[0_0_24px_-4px_rgba(34,197,94,0.55)] md:h-14 md:w-14 md:rounded-2xl">
      <div className="flex flex-col gap-1.5">
        <span className="h-0.5 w-6 rounded-full bg-white md:w-7" />
        <span className="h-0.5 w-5 rounded-full bg-white/95 md:w-6" />
        <span className="h-0.5 w-4 rounded-full bg-white/90 md:w-5" />
      </div>
    </div>
  );
}

/**
 * Desktop path (viewBox 0 0 100 × 1000): top-center → each left card (jog in, wrap around outside) → straight
 * bridge toward spine → run to opposite card → wrap → repeat for five steps.
 */
const PATH_ZIGZAG =
  "M 50 0 L 50 32 " +
  /* ① Left — jog in, sweep around, bridge right */
  "C 46 56 28 84 18 108 C 8 132 10 148 20 168 C 30 186 42 198 50 206 " +
  "L 74 234 " +
  /* ② Right — wrap, bridge left */
  "C 86 252 92 278 86 302 C 78 322 62 340 46 354 L 32 382 L 18 412 " +
  /* ③ Left */
  "C 8 432 6 458 14 482 C 22 498 36 514 48 524 L 72 556 " +
  /* ④ Right */
  "C 86 576 92 602 84 628 C 76 648 58 666 42 682 L 26 712 " +
  /* ⑤ Testing — wrap left, run down spine below card */
  "C 12 742 6 772 16 802 C 26 832 40 858 48 878 L 50 920 L 50 1000";

/** Mobile: soft zig using same y-rhythm so the dot “steps” toward each card while scrolling */
const PATH_MOBILE =
  "M 50 0 L 50 24 " +
  "C 50 70 28 105 22 145 C 18 175 44 205 50 230 " +
  "C 56 265 78 305 80 340 C 78 375 52 400 50 420 " +
  "C 44 455 22 490 28 520 C 34 550 48 580 50 600 " +
  "C 54 635 76 670 82 705 C 80 740 54 770 50 795 " +
  "C 46 830 20 865 36 895 C 44 915 48 935 50 900 L 50 920 L 50 1000";

/** Map a track pixel position to the closest point on the motion path (0–1) */
function getPathProgressAtPoint(
  pathEl: SVGPathElement,
  trackEl: HTMLElement,
  targetX: number,
  targetY: number
) {
  const trackRect = trackEl.getBoundingClientRect();
  const svg = pathEl.ownerSVGElement;
  if (!svg) return 0;

  const svgRect = svg.getBoundingClientRect();
  const pathLen = pathEl.getTotalLength();
  let bestLen = 0;
  let bestScore = Infinity;

  for (let i = 0; i <= 160; i++) {
    const len = (i / 160) * pathLen;
    const pt = pathEl.getPointAtLength(len);
    const px = svgRect.left + (pt.x / 100) * svgRect.width - trackRect.left;
    const py = svgRect.top + (pt.y / 1000) * svgRect.height - trackRect.top;
    const score = Math.hypot(px - targetX, py - targetY);
    if (score < bestScore) {
      bestScore = score;
      bestLen = len;
    }
  }

  return bestLen / pathLen;
}

function getOffsetWithinTrack(trackEl: HTMLElement, el: HTMLElement) {
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== trackEl) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return y;
}

function getCardTargetOnTrack(
  trackEl: HTMLElement,
  cardEl: HTMLElement,
  isMobile: boolean
) {
  const row = (cardEl.closest("li") as HTMLElement | null) ?? cardEl;
  const targetX = isMobile ? 48 : trackEl.offsetWidth / 2;
  const targetY = getOffsetWithinTrack(trackEl, row) + row.offsetHeight / 2;
  return { targetX, targetY };
}

/** Ball stops on the center spine, below the full last step row */
function getLastStepEndTarget(
  trackEl: HTMLElement,
  cardEl: HTMLElement,
  isMobile: boolean
) {
  const row = (cardEl.closest("li") as HTMLElement | null) ?? cardEl;
  const targetX = isMobile ? 48 : trackEl.offsetWidth / 2;
  const targetY = getOffsetWithinTrack(trackEl, row) + row.offsetHeight + 96;
  return { targetX, targetY };
}

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pathDesktopRef = useRef<SVGPathElement>(null);
  const pathMobileRef = useRef<SVGPathElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const lastStepCardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const ball = ballRef.current;
    const pathDesktop = pathDesktopRef.current;
    const pathMobile = pathMobileRef.current;
    const lastStepCard = lastStepCardRef.current;
    if (
      !section ||
      !track ||
      !ball ||
      !pathDesktop ||
      !pathMobile ||
      !lastStepCard
    )
      return;

    const scrub = 1;
    const cards = gsap.utils.toArray<HTMLElement>(".work-step-card");

    const buildScrollBallTimeline = (
      activePath: SVGPathElement,
      isMobile: boolean
    ) => {
      const pathLen = activePath.getTotalLength();
      const lastStepEnd = getLastStepEndTarget(track, lastStepCard, isMobile);
      let endProgress = getPathProgressAtPoint(
        activePath,
        track,
        lastStepEnd.targetX,
        lastStepEnd.targetY
      );
      endProgress = Math.min(Math.max(endProgress, 0.94), 1);

      gsap.set(activePath, {
        strokeDasharray: pathLen,
        strokeDashoffset: pathLen,
      });
      gsap.set(ball, { clearProps: "transform" });
      gsap.set(ball, { xPercent: -50, yPercent: -50 });
      gsap.set(cards, { opacity: 0.35, y: 12 });

      const lastStepRow = lastStepCard.closest("li") as HTMLElement;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: track,
          start: "top center",
          endTrigger: lastStepRow,
          end: "bottom center",
          scrub,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        activePath,
        {
          strokeDashoffset: pathLen * (1 - endProgress),
          ease: "none",
          duration: 1,
        },
        0
      );

      tl.to(
        ball,
        {
          ease: "none",
          duration: 1,
          motionPath: {
            path: activePath,
            align: activePath,
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 0,
            end: endProgress,
          },
        },
        0
      );

      const cardTimes = cards.map((card) => {
        const { targetX, targetY } = getCardTargetOnTrack(track, card, isMobile);
        return getPathProgressAtPoint(activePath, track, targetX, targetY);
      });

      cards.forEach((card, i) => {
        const t = Math.min(cardTimes[i] / endProgress, 0.9);
        tl.fromTo(
          card,
          { opacity: 0.35, y: 12 },
          { opacity: 1, y: 0, duration: 0.14, ease: "power2.out" },
          t
        );
        if (i > 0) {
          tl.to(
            cards[i - 1],
            { opacity: 0.35, y: -8, duration: 0.1, ease: "power2.in" },
            t
          );
        }
      });

      /* Ball keeps moving below the final row while the card stays highlighted */
      tl.to(
        lastStepCard,
        { opacity: 1, y: 0, duration: 0.12, ease: "none" },
        0.9
      );

      return tl;
    };

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(min-width: 768px)", () => {
        gsap.set(pathMobile, { opacity: 0 });
        gsap.set(pathDesktop, { opacity: 1 });
        buildScrollBallTimeline(pathDesktop, false);
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(pathDesktop, { opacity: 0 });
        gsap.set(pathMobile, { opacity: 1 });
        buildScrollBallTimeline(pathMobile, true);
      });
    }, section);

    const refreshId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(refreshId);
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#06122B] py-20 text-white md:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.08),transparent_55%)]" />

      <header className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a1f42]/80 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e] shadow-[0_0_10px_#22c55e]" />
              Workflow
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5.5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-white">
            How we <span className="text-[#22c55e]">work</span>
          </h2>
      </header>

      <div
        ref={trackRef}
        className="relative z-10 mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:max-w-[1360px] lg:px-10"
      >
        {/* Center line + ball layer (desktop + mobile) */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          <svg
            className="absolute left-1/2 top-0 h-full w-[min(100%,20rem)] -translate-x-1/2 overflow-visible lg:w-[min(100%,22rem)]"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              ref={pathDesktopRef}
              d={PATH_ZIGZAG}
              fill="none"
              stroke="rgba(148,163,184,0.28)"
              strokeWidth={0.45}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="pointer-events-none absolute inset-0 z-0 md:hidden">
          <svg
            className="absolute left-8 top-0 h-full w-8"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              ref={pathMobileRef}
              d={PATH_MOBILE}
              fill="none"
              stroke="rgba(148,163,184,0.25)"
              strokeWidth={0.7}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Ball — motion path moves this; translate centers on path */}
        <div
          ref={ballRef}
          className="pointer-events-none absolute left-0 top-0 z-[15] h-3.5 w-3.5 rounded-full bg-[#22c55e] shadow-[0_0_16px_3px_rgba(34,197,94,0.75)] md:h-4 md:w-4 md:shadow-[0_0_22px_5px_rgba(34,197,94,0.65)]"
          aria-hidden
        />

        <ol className="relative z-10 m-0 list-none space-y-10 p-0 pl-11 md:space-y-0 md:pl-0">
          {steps.map((step, index) => {
            const isRight = index % 2 === 1;
            const isLastStep = index === steps.length - 1;
            return (
              <li
                key={step.title}
                className="relative min-h-0 md:flex md:min-h-[292px] md:items-center md:py-5 lg:min-h-[300px]"
              >
                <div
                  ref={isLastStep ? lastStepCardRef : undefined}
                  className={`work-step-card flex w-full md:max-w-[580px] lg:max-w-[640px] xl:max-w-[720px] ${
                    isRight ? "md:ml-auto md:pl-2 lg:pl-4" : "md:mr-auto md:pr-2 lg:pr-4"
                  } ${isRight ? "text-right" : "text-left"}`}
                >
                  <div
                    className={`w-full rounded-2xl border border-white/[0.08] bg-[#0a1f38]/95 p-6 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] backdrop-blur-sm md:rounded-3xl md:p-9 lg:p-10 ${
                      isRight ? "md:ml-4 lg:ml-6" : "md:mr-4 lg:mr-6"
                    }`}
                  >
                    <div
                      className={`flex flex-col gap-5 ${
                        isRight
                          ? "items-end md:flex-row-reverse md:items-start"
                          : "items-start md:flex-row md:items-start"
                      }`}
                    >
                      <StepIcon />
                      <div className={`min-w-0 flex-1 ${isRight ? "text-right" : ""}`}>
                        <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-400 md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile row spacer for vertical rhythm */}
                <div className="h-px shrink-0 md:hidden" aria-hidden />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
