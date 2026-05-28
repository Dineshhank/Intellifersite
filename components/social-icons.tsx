"use client";

import { Mail } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/contact";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconBase = "h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]";

type SocialIconsProps = {
  className?: string;
};

export default function SocialIcons({ className = "" }: SocialIconsProps) {
  return (
    <div
      className={`flex flex-shrink-0 flex-wrap items-center justify-start gap-3 sm:gap-4 ${className}`}
      role="list"
    >
      <a
        href="https://www.linkedin.com/company/intellifer-systems/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Intellifer on LinkedIn"
        role="listitem"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white/90 transition-all duration-300 ease-out hover:scale-110 hover:border-[#22c55e] hover:bg-[#22c55e] hover:text-white hover:shadow-[0_4px_14px_-3px_rgba(34,197,94,0.55)] motion-reduce:transition-none sm:h-12 sm:w-12"
      >
        <LinkedInIcon className={iconBase} />
      </a>

      <a
        href="https://www.instagram.com/intellifer_systems/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Intellifer on Instagram"
        role="listitem"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white/90 transition-all duration-300 ease-out hover:scale-110 hover:border-[#22c55e] hover:bg-[#22c55e] hover:text-white hover:shadow-[0_4px_14px_-3px_rgba(34,197,94,0.55)] motion-reduce:transition-none sm:h-12 sm:w-12"
      >
        <InstagramIcon className={iconBase} />
      </a>

      <a
        href="https://x.com/intellifer"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Intellifer on X"
        role="listitem"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white/90 transition-all duration-300 ease-out hover:scale-110 hover:border-[#22c55e] hover:bg-[#22c55e] hover:text-white hover:shadow-[0_4px_14px_-3px_rgba(34,197,94,0.55)] motion-reduce:transition-none sm:h-12 sm:w-12"
      >
        <XIcon className="h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem]" />
      </a>

      <a
        href={CONTACT_MAILTO}
        aria-label={`Email Intellifer at ${CONTACT_EMAIL}`}
        role="listitem"
        className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white/90 transition-all duration-300 ease-out hover:scale-110 hover:border-[#22c55e] hover:bg-[#22c55e] hover:text-white hover:shadow-[0_4px_14px_-3px_rgba(34,197,94,0.55)] motion-reduce:transition-none sm:h-12 sm:w-12"
      >
        <Mail className={iconBase} strokeWidth={1.5} aria-hidden />
        <span className="pointer-events-none absolute -top-11 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2.5 py-1.5 text-[11px] font-medium text-[#06122B] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:text-xs">
          {CONTACT_EMAIL}
        </span>
      </a>
    </div>
  );
}
