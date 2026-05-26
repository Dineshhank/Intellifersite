"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Tab / service data
───────────────────────────────────────────── */
const tabs = [
  {
    label: "Intellifer Document Processing",
    image: "/service-1.png",
    title: "Intelligent Document Processing",
    description:
      "Empower your business with intelligent document workflows, ensuring seamless automation from upload to final approval. Optimize efficiency and compliance with a future-ready document management system.",
    features: [
      "Document Upload",
      "Data Extraction & Validation",
      "Seamless Integration",
      "Digital Signature",
    ],
  },
  {
    label: "Facility Management",
    image: "/service-2.png",
    title: "Facility Management",
    description:
      "Streamline your facility operations with our comprehensive management solutions. Monitor assets, schedule maintenance, and optimize resource usage effectively across every location.",
    features: [
      "Asset Tracking",
      "Maintenance Scheduling",
      "Resource Optimization",
      "Real-time Monitoring",
    ],
  },
  {
    label: "Custom Web & Mobile App Development",
    image: "/service-3.png",
    title: "Custom Web & Mobile App Development",
    description:
      "Build scalable and robust applications tailored to your business needs using the latest technologies. We deliver high-performance web and mobile solutions that grow with you.",
    features: [
      "Custom UI/UX Design",
      "Cross-platform Development",
      "API Integration",
      "Scalable Architecture",
    ],
  },
];

const AUTO_INTERVAL = 4000;

export default function ServicesOffered() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── auto-cycle logic ── */
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % tabs.length);
        setAnimating(false);
      }, 200);
    }, AUTO_INTERVAL);
  }, []);

  useEffect(() => {
    if (!isPaused) startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, startTimer]);

  const handleTabClick = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPaused(true);   // stop auto-cycling on manual click
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(index);
      setAnimating(false);
    }, 150);
  };

  const current = tabs[activeTab];

  return (
    <section className="bg-black px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* ── Header ── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="max-w-sm font-sans text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Software<br />Development<br />
            <span className="text-white/50">Services</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/50 lg:pt-2">
            We offer tailor-made software development services for startups,
            medium-sized companies, and large enterprises, from dedicated teams
            to custom software development.
          </p>
        </div>

        {/* ── Tab Pills ── */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => handleTabClick(i)}
              className={`relative overflow-hidden rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${activeTab === i
                ? "border-white bg-white text-black"
                : "border-white/20 bg-transparent text-white/60 hover:border-white/50 hover:text-white"
                }`}
            >
              {tab.label}
              {/* progress bar on active tab when auto-cycling */}
              {activeTab === i && !isPaused && (
                <span
                  key={`bar-${activeTab}`}
                  className="absolute bottom-0 left-0 h-[2px] bg-black/30 rounded-full"
                  style={{
                    animation: `tab-progress ${AUTO_INTERVAL}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── Content Card ── */}
        <div
          className={`mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] transition-opacity duration-200 ${animating ? "opacity-0" : "opacity-100"
            }`}
        >
          <div className="flex flex-col lg:flex-row">

            {/* Left — Image Panel */}
            <div className="relative h-64 w-full shrink-0 overflow-hidden lg:h-auto lg:w-[38%]">
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover"
                onError={(e) => {
                  /* hide broken image; the dark bg shows through */
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d0d]/60" />
              {/* brand watermark */}
              <div className="absolute bottom-5 left-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
                  Intellifer
                </span>
              </div>
            </div>

            {/* Right — Info Panel */}
            <div className="flex flex-1 flex-col justify-center px-8 py-10 lg:px-12 lg:py-14">
              <h3 className="text-2xl font-bold leading-snug text-white md:text-3xl lg:text-[2rem]">
                {current.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/50 lg:max-w-lg">
                {current.description}
              </p>

              {/* Feature list */}
              <ul className="mt-8 flex flex-col">
                {current.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 border-b border-white/10 py-3.5 first:pt-0 last:border-none last:pb-0"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]" />
                    <span className="text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>

      {/* progress-bar keyframe */}
      <style jsx>{`
        @keyframes tab-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
