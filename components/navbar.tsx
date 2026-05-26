"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CONTACT_MAILTO } from "@/lib/contact";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ShoppingBag,
  Users,
  TrendingUp,
  BookOpen,
  Smartphone,
  Trophy,
  Truck,
  Eye,
  Shield,
  Settings,
  Crosshair,
  Zap,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
];

const services = [
  {
    title: "E-Commerce",
    description: "Lorem ipsum heading",
    icon: ShoppingBag,
    href: "/services/e-commerce",
    highlight: false,
  },
  {
    title: "HR Tech",
    description: "Lorem ipsum heading",
    icon: Users,
    href: "/services/hr-tech",
    highlight: false,
  },
  {
    title: "FinTech / AI",
    description: "Lorem ipsum heading",
    icon: TrendingUp,
    href: "/services/fintech-ai",
    highlight: false,
  },
  {
    title: "Edutech / AI",
    description: "Lorem ipsum heading",
    icon: BookOpen,
    href: "/services/edutech-ai",
    highlight: false,
  },
  {
    title: "IoT / Mobile Development",
    description: "Lorem ipsum heading",
    icon: Smartphone,
    href: "/services/iot-mobile",
    highlight: false,
  },
  {
    title: "Sports Tech / AI",
    description: "Lorem ipsum heading",
    icon: Trophy,
    href: "/services/sports-tech-ai",
    highlight: false,
  },
  {
    title: "Logistics / Supply Chain",
    description: "Lorem ipsum heading",
    icon: Truck,
    href: "/services/logistics",
    highlight: false,
  },
  {
    title: "Advertising / Computer Vision",
    description: "Lorem ipsum heading",
    icon: Eye,
    href: "/services/advertising-cv",
    highlight: false,
  },
  {
    title: "Security / Document Management",
    description: "Lorem ipsum heading",
    icon: Shield,
    href: "/services/security",
    highlight: false,
  },
  {
    title: "Valve Manufacturing / Automation",
    description: "Lorem ipsum heading",
    icon: Settings,
    href: "/services/valve-automation",
    highlight: false,
  },
  {
    title: "Defense / IoT",
    description: "Lorem ipsum heading",
    icon: Crosshair,
    href: "/services/defense-iot",
    highlight: false,
  },
  {
    title: "Energy / Industrial IoT",
    description: "Lorem ipsum heading",
    icon: Zap,
    href: "/services/energy-industrial-iot",
    highlight: false,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".services-zone")) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "border-b border-black/[0.06] bg-[#F5F3EE]/95 backdrop-blur-md" : "bg-transparent"
          }`}
      >
        <div className="relative mx-auto flex h-[3.25rem] max-w-7xl items-center px-6 sm:h-14 lg:px-10">
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

              <div
                className="services-zone relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${pathname.startsWith("/services")
                    ? "text-black underline decoration-[#22c55e] decoration-2 underline-offset-8"
                    : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Service
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </button>
              </div>

              <Link
                href="/case-studies"
                className={`text-sm font-medium transition-colors duration-200 ${pathname === "/case-studies"
                  ? "text-black underline decoration-[#22c55e] decoration-2 underline-offset-8"
                  : "text-neutral-600 hover:text-neutral-900"
                  }`}
              >
                Case Studies
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

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-base font-semibold text-gray-600"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Service
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-3 flex flex-col gap-1 pl-2">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${service.highlight
                            ? "bg-[#22c55e] text-white"
                            : "text-gray-600 hover:bg-[#22c55e] hover:text-white"
                            }`}
                        >
                          <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                          {service.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

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

      {/* ── Services Mega-Menu (fixed, outside nav flow) ── */}
      <div
        className={`services-zone fixed left-[10%] top-14 z-40 w-[80%] transition-all duration-200 ${servicesOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
          }`}
        onMouseEnter={openServices}
        onMouseLeave={scheduleClose}
      >
        {/* White Card */}
        <div className="rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-7 pb-3">
            <p className="text-base font-semibold text-gray-900 tracking-tight">
              Software Development Services
            </p>
          </div>

          {/* Services Grid — 3 columns */}
          <div className="grid grid-cols-3 gap-1 px-4 pb-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  onClick={() => setServicesOpen(false)}
                  className={`group flex items-start gap-4 rounded-xl px-5 py-4 transition-all duration-150 ${service.highlight
                    ? "bg-[#22c55e]"
                    : "hover:bg-[#22c55e]"
                    }`}
                >
                  {/* Icon */}
                  <div
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${service.highlight
                      ? "bg-white/25"
                      : "bg-gray-100 group-hover:bg-white/25"
                      }`}
                  >
                    <Icon
                      className={`h-[18px] w-[18px] transition-colors ${service.highlight
                        ? "text-white"
                        : "text-gray-500 group-hover:text-white"
                        }`}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p
                      className={`text-sm font-semibold leading-snug transition-colors ${service.highlight
                        ? "text-white"
                        : "text-gray-900 group-hover:text-white"
                        }`}
                    >
                      {service.title}
                    </p>
                    <p
                      className={`mt-0.5 text-xs transition-colors ${service.highlight
                        ? "text-white/75"
                        : "text-gray-400 group-hover:text-white/75"
                        }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
