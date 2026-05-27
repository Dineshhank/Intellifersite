"use client";

import { useState } from "react";
import ServiceTabs from "@/components/service-tabs";
import ServiceCard from "@/components/service-card";
import type { ServiceDetail } from "@/components/service-card";

const SERVICE_TABS: ServiceDetail[] = [
  {
    id: "idp",
    label: "Intellifer Document Processing",
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
    id: "facility",
    label: "Facility Management",
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
    id: "web-mobile",
    label: "Custom Web & Mobile App Development",
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

const TICKER_SERVICES = [
  "E-Commerce",
  "HR Tech",
  "FinTech / AI",
  "Edutech / AI",
  "IoT / Mobile Development",
  "Sports Tech / AI",
  "Logistics / Supply Chain",
  "Advertising / Computer Vision",
  "Security / Document Management",
  "Valve Manufacturing / Automation",
  "Defense / IoT",
  "Energy / Industrial IoT",
] as const;

function ServiceTickerStrip({ copyIndex }: { copyIndex: number }) {
  return (
    <div className="flex shrink-0 items-center gap-x-6 sm:gap-x-8 md:gap-x-10">
      {TICKER_SERVICES.map((label) => (
        <span
          key={`${copyIndex}-${label}`}
          className="inline-flex items-center gap-2.5 whitespace-nowrap"
        >
          <span
            className="text-xs font-bold leading-none text-white/85 sm:text-sm"
            aria-hidden
          >
            •
          </span>
          <span className="text-[11px] font-semibold uppercase leading-tight tracking-[0.14em] text-white sm:text-xs sm:tracking-[0.16em]">
            {label}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F5F2ED] pb-0 pt-20 font-sans antialiased md:pt-24 lg:pt-28">
      {/* Match hero/navbar alignment */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14 xl:gap-20">
          <h2 className="max-w-xl shrink-0 text-[2.5rem] font-bold leading-[1.02] tracking-tight text-neutral-900 sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem]">
            <span className="block">Software</span>
            <span className="block">Development</span>
            <span className="block text-[#22c55e]">Services</span>
          </h2>
          <p className="max-w-lg text-left text-[0.9375rem] leading-[1.75] text-neutral-600 sm:text-base lg:ml-auto lg:max-w-[34rem] lg:pt-2 lg:text-right lg:text-[1.05rem] lg:leading-[1.65] xl:max-w-[36rem]">
            We offer tailor-made software development services for startups,
            medium-sized companies, and large enterprises,{" "}
            <br className="hidden md:inline" />
            from dedicated teams to custom software development.
          </p>
        </div>

        <ServiceTabs
          tabs={SERVICE_TABS}
          activeIndex={active}
          onChange={setActive}
        />

        <ServiceCard activeIndex={active} tabs={SERVICE_TABS} />
      </div>

      <div className="mt-14 w-full overflow-hidden bg-[#22c55e] py-3.5 sm:mt-16 sm:py-4 md:py-4">
        <div className="flex w-max animate-marquee [animation-duration:50s] motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center px-6 sm:px-10"
              aria-hidden={copy === 1}
            >
              <ServiceTickerStrip copyIndex={copy} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
