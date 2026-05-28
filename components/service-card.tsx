"use client";

import Image from "next/image";
import {
  ArrowDown,
  CheckCircle2,
  Layers,
  Link2,
  Monitor,
  PenLine,
} from "lucide-react";

export type ServiceDetail = {
  id: string;
  label: string;
  title: string;
  description: string;
  features: readonly string[];
};

type ServiceCardProps = {
  activeIndex: number;
  tabs: readonly ServiceDetail[];
};

/** Enterprise IDP illustration — workflow hierarchy + glow (placeholder art) */
function IdpWorkflowPanel() {
  const steps = [
    { label: "EXTRACTION", Icon: Layers },
    { label: "VALIDATION", Icon: CheckCircle2 },
    { label: "DIGITAL SIGN", Icon: PenLine },
    { label: "THIRD PARTY INTEGRATION", Icon: Link2 },
  ];
  const blocks = [
    { label: "EXTRACTION", from: "#8ec5ff", to: "#2d6cdf", glow: "rgba(45,108,223,0.45)" },
    { label: "VALIDATION", from: "#6ba8f5", to: "#1d4ed8", glow: "rgba(37,99,235,0.4)" },
    { label: "DIGITAL SIGN", from: "#a5b4fc", to: "#5b4ddb", glow: "rgba(91,77,219,0.45)" },
    { label: "THIRD PARTY INTEGRATION", from: "#7cb0ff", to: "#0f2d6b", glow: "rgba(15,45,107,0.4)" },
  ];

  return (
    <div className="relative h-full min-h-[300px] w-full overflow-hidden bg-gradient-to-b from-[#5a9ef5] via-[#2d72e4] to-[#0a2860] p-5 sm:min-h-[340px] sm:p-6 md:min-h-0 md:p-8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_80%_0%,rgba(255,255,255,0.35),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-1/2 h-56 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.35),transparent_70%)] blur-2xl"
        aria-hidden
      />
      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <div className="flex min-h-0 flex-1 gap-3 sm:gap-4 md:gap-5">
          <div className="flex w-[28%] min-w-[4.75rem] max-w-[7rem] flex-col justify-center sm:min-w-[5.5rem] sm:max-w-[8rem] md:max-w-[8.5rem]">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                <div className="flex w-full flex-col items-center rounded-lg border border-white/30 bg-white/[0.08] px-1 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[2px] sm:px-1.5 sm:py-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/45 text-white shadow-[0_0_14px_rgba(255,255,255,0.25)] sm:h-9 sm:w-9 md:h-10 md:w-10">
                    <step.Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.35} />
                  </div>
                  <span className="mt-1 text-center text-[0.4rem] font-bold uppercase leading-[1.1] tracking-[0.05em] text-white/95 sm:text-[0.48rem] md:text-[0.52rem]">
                    <span className="hidden lg:inline">{step.label}</span>
                    <span className="lg:hidden">
                      {step.label.replace("THIRD PARTY INTEGRATION", "3RD PARTY")}
                    </span>
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <ArrowDown className="my-0.5 h-2.5 w-2.5 shrink-0 text-white/55" strokeWidth={2.5} />
                )}
              </div>
            ))}
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 sm:gap-2 md:gap-2.5">
            {blocks.map((b, idx) => (
              <div
                key={b.label}
                className="relative rounded-lg border border-white/30 px-2.5 py-2 shadow-[0_10px_24px_-6px_rgba(0,0,0,0.35)] sm:px-3 sm:py-2.5 md:px-3.5 md:py-3"
                style={{
                  background: `linear-gradient(145deg, ${b.from} 0%, ${b.to} 100%)`,
                  transform: `perspective(420px) rotateX(${1.5 + idx * 0.4}deg) translateZ(0)`,
                  boxShadow: `0 8px 24px -4px rgba(0,0,0,0.35), 0 0 28px -8px ${b.glow}`,
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[0.48rem] font-bold uppercase tracking-wide text-white sm:text-[0.52rem] md:text-[0.58rem]">
                    {b.label}
                  </span>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-white/50 shadow-[0_0_8px_rgba(255,255,255,0.6)] sm:h-2 sm:w-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-3 flex shrink-0 items-end justify-between gap-3 border-t border-white/20 pt-3 sm:mt-4 sm:pt-4">
          <div className="flex items-end gap-2">
            <div className="flex flex-col items-center">
              <div className="rounded-md border border-white/25 bg-white/10 px-2 py-1 shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                <Monitor className="h-8 w-8 text-white sm:h-9 sm:w-9" strokeWidth={1.15} />
              </div>
              <span className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.2em] text-white/90">
                Intellifer
              </span>
            </div>
            <div className="flex h-11 items-end gap-0.5 sm:h-12 sm:gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 rounded-t border border-white/15 bg-gradient-to-t from-slate-900 to-slate-600 shadow-[0_0_12px_rgba(148,163,184,0.35)] sm:w-2.5"
                  style={{ height: `${38 + i * 10}%` }}
                />
              ))}
            </div>
          </div>
          <div className="flex items-end gap-0.5 pt-1 opacity-90">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1.5 rounded-t bg-gradient-to-t from-white/35 to-white/10 shadow-[0_-2px_8px_rgba(255,255,255,0.15)] sm:w-2"
                style={{ height: `${8 + (i % 3) * 6}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FacilityPanel() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/FacilityMgnt.png"
        alt="Facility Management"
        fill
        className="object-contain"
      />
    </div>
  );
}

function WebMobilePanel() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/CustomWebMobileDev.png"
        alt="Custom Web and Mobile App Development"
        fill
        className="object-contain"
      />
    </div>
  );
}

function ServiceGraphic({ tabIndex }: { tabIndex: number }) {
  if (tabIndex === 0)
    return (
      <div className="relative h-full w-full">
        {/* Use provided IDPP image from public folder */}
        <Image
          src="/IDPP.png"
          alt="Intelligent Document Processing"
          fill
          priority
          className="object-contain"
        />
      </div>
    );
  if (tabIndex === 1) return <FacilityPanel />;
  return <WebMobilePanel />;
}

export default function ServiceCard({ activeIndex, tabs }: ServiceCardProps) {
  const current = tabs[activeIndex];

  return (
    <div className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:mt-12 md:gap-7 lg:mt-14 lg:grid-cols-[3fr_7fr] lg:gap-8">
      {/* LEFT — illustration card */}
      <div
        key={`illustration-${tabs[activeIndex].id}`}
        className="group relative animate-service-fade-in rounded-3xl border border-neutral-900/[0.06] bg-white/40 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out hover:scale-[1.015] hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.14)] lg:hover:scale-[1.02]"
        role="region"
        aria-label="Service illustration"
      >
        <div className="overflow-hidden rounded-3xl">
          {/* Match all service images with the same portrait card ratio as IDP */}
          <div className="aspect-[3/4] w-full">
            <div className="h-full w-full">
              <ServiceGraphic tabIndex={activeIndex} />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — content card */}
      <div
        key={`panel-${tabs[activeIndex].id}`}
        className="group flex animate-service-fade-in flex-col justify-center rounded-3xl border border-neutral-900/[0.06] bg-[#EDE8E0] px-8 py-10 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-out hover:scale-[1.015] hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.12)] sm:px-10 sm:py-11 md:px-11 md:py-12 lg:hover:scale-[1.02]"
        role="region"
        aria-labelledby={`service-title-${current.id}`}
      >
        <h3
          id={`service-title-${current.id}`}
          className="font-sans text-xl font-bold leading-snug tracking-tight text-neutral-900 sm:text-2xl md:text-[1.85rem] md:leading-tight lg:text-[2rem]"
        >
          {current.title}
        </h3>
        <p className="mt-4 font-sans text-[0.9375rem] leading-[1.8] text-neutral-600 sm:mt-5 sm:text-base md:text-[1.05rem]">
          {current.description}
        </p>
        <ul className="mt-8 divide-y divide-neutral-900/[0.1] border-t border-neutral-900/[0.1] sm:mt-10">
          {current.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-3 py-3.5 font-sans text-[0.9375rem] text-neutral-800 first:pt-4 sm:py-4 sm:text-base"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]"
                aria-hidden
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
