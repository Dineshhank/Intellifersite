import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Document Extraction and management System",
    tags: "AI/ML, Automation",
    image: "/Document Extraction.png",
  },
  {
    title: "Document Lifecycle & Approval Management",
    tags: "Cloud, DevOps",
    image: "/Document Lifecycle.png",
  },
  {
    title: "Business Intelligence and Data Analytics",
    tags: "Analytics, Data",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=960&q=80",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-[#111827] px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <h2 className="max-w-[16rem] text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:max-w-none md:text-5xl lg:text-6xl lg:leading-[1.05]">
            <span className="block">Our Case</span>
            <span className="block">Studies</span>
          </h2>

          <p className="max-w-xl text-[0.9375rem] leading-[1.7] text-neutral-400 lg:max-w-lg lg:pt-1 lg:text-base">
            At Intellifer, we are proud to work on some exciting and
            ground-breaking software development projects. These are only a
            small sample of the numerous software development initiatives that we
            are able to share with you. We have created a portfolio of more than
            50 key bespoke software development solutions during the past 8 years.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-2 sm:gap-8 lg:mt-24 lg:grid-cols-3 lg:gap-7">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group flex cursor-pointer flex-col"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)]">
                <img
                  src={study.image}
                  alt={study.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111827]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
              </div>

              <h3 className="mt-6 text-base font-bold leading-snug text-white transition-colors group-hover:text-white sm:text-[1.0625rem] md:text-lg">
                {study.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {study.tags}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center sm:mt-20 lg:mt-24">
          <button
            type="button"
            className="group inline-flex items-center gap-3 rounded-full bg-[#22c55e] px-9 py-3.5 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_24px_-6px_rgba(34,197,94,0.45)] transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[0_12px_28px_-6px_rgba(34,197,94,0.5)] md:text-xs md:tracking-[0.2em]"
          >
            View All Case Studies
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111827] transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4 stroke-[2.5]" aria-hidden />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
