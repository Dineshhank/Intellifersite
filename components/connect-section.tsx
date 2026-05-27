"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACT_MAILTO } from "@/lib/contact";
import SocialIcons from "@/components/social-icons";
import FooterNav from "@/components/footer-nav";

export default function ConnectSection() {
  return (
    <footer className="animate-in fade-in fill-mode-forwards duration-700">
      <div className="rounded-t-[40px] bg-[#06122B] sm:rounded-t-[44px] lg:rounded-t-[48px]">
        {/* Match hero/navbar/services alignment */}
        <div className="mx-auto max-w-[1400px] px-6 pb-8 pt-16 text-left sm:px-10 sm:pb-10 sm:pt-20 lg:px-10 lg:pb-12 lg:pt-24 xl:pt-28">
          {/* Heading row: left title, social top-right on large screens */}
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <h2 className="font-sans">
              <span className="block text-[clamp(3rem,11vw,7.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white xl:text-[120px]">
                LET&apos;S
              </span>
              <span className="mt-[-0.02em] flex flex-wrap items-baseline justify-start gap-0">
                <span className="text-[clamp(3rem,11vw,7.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white xl:text-[120px]">
                  C
                </span>
                <span className="font-garamond text-[clamp(3rem,11vw,7.5rem)] font-light italic leading-[0.88] tracking-[-0.03em] text-white xl:text-[120px]">
                  O
                </span>
                <span className="text-[clamp(3rem,11vw,7.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white xl:text-[120px]">
                  NNECT
                </span>
              </span>
            </h2>

            <SocialIcons className="lg:ml-auto lg:pt-4" />
          </div>

          <p className="mt-12 max-w-3xl text-base leading-[1.75] text-white/75 sm:mt-14 sm:text-lg lg:text-[1.05rem]">
            With almost a decade of experience in the industry, we have the
            expertise of handling software development projects of diverse
            complexity levels, making Intellifer the right fit for your business
            needs.
          </p>

          <div className="mt-10 sm:mt-12">
            <Link
              href={CONTACT_MAILTO}
              className="group inline-flex items-center gap-3 rounded-full border border-white px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 ease-out hover:bg-white hover:text-[#06122B] sm:px-9 sm:py-3 sm:text-sm"
            >
              Connect Now
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#22c55e] text-white transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          </div>

          <div
            className="mt-14 border-t border-white/[0.12] sm:mt-16 lg:mt-20"
            role="separator"
          />

          <div className="mt-6 flex flex-col items-start justify-between gap-6 sm:mt-8 md:flex-row md:items-center">
            <p className="text-left text-xs leading-relaxed text-white/55 sm:text-sm">
              &copy; 2025 - 2026 | All rights reserved by Intellifer System
            </p>
            <FooterNav className="w-full md:w-auto md:self-center" />
          </div>
        </div>
      </div>
    </footer>
  );
}
