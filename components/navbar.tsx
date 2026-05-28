"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CONTACT_MAILTO } from "@/lib/contact";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "border-b border-black/[0.06] bg-[#F5F3EE]/95 backdrop-blur-md" : "bg-transparent"
          }`}
      >
        <div className="relative mx-auto flex h-[3.25rem] max-w-[1400px] items-center px-6 sm:h-14 lg:px-10">
          {/* Logo */}
          <div className="flex flex-1 items-center justify-start">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/IntelliferLogo.png"
                alt="Intellifer"
                width={190}
                height={48}
                className="h-9 w-auto object-contain sm:h-10 lg:h-11"
                priority
              />
            </Link>
          </div>

          {/* Desktop: centered menu */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
            <div className="flex items-center gap-6 xl:gap-8">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors duration-200 ${pathname === "/"
                  ? "text-black underline decoration-[#22c55e] decoration-2 underline-offset-8"
                  : "text-neutral-600 hover:text-neutral-900"
                  }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`text-sm font-medium transition-colors duration-200 ${pathname === "/about"
                  ? "text-black underline decoration-[#22c55e] decoration-2 underline-offset-8"
                  : "text-neutral-600 hover:text-neutral-900"
                  }`}
              >
                About
              </Link>

              <Link
                href="/careers"
                className={`text-sm font-medium transition-colors duration-200 ${pathname === "/careers"
                  ? "text-black underline decoration-[#22c55e] decoration-2 underline-offset-8"
                  : "text-neutral-600 hover:text-neutral-900"
                  }`}
              >
                Careers
              </Link>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end gap-3">
            <Link
              href={CONTACT_MAILTO}
              className="hidden items-center gap-1.5 rounded-full bg-[#22c55e] px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-[#1ea34e] hover:shadow active:scale-[0.98] sm:px-4 sm:py-2 sm:text-xs lg:inline-flex"
            >
              Connect Now
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/30 sm:h-6 sm:w-6">
                <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
              </span>
            </Link>

            <button
              type="button"
              className="text-neutral-900 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-black/[0.06] bg-[#F5F3EE] px-6 pb-6 pt-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-base font-semibold ${pathname === link.href ? "text-black" : "text-gray-600"
                    }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href={CONTACT_MAILTO}
                className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-[#22c55e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
                onClick={() => setMobileOpen(false)}
              >
                Connect Now
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30">
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            </div>
          </div>
        )}
      </nav>

    </>
  );
}
