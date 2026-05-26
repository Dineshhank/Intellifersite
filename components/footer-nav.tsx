import Link from "next/link";

const links = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "CAREERS", href: "/careers" },
  { label: "FAQ", href: "/faq" },
] as const;

type FooterNavProps = {
  className?: string;
};

export default function FooterNav({ className = "" }: FooterNavProps) {
  return (
    <nav
      className={`flex flex-wrap items-center justify-start gap-x-6 gap-y-3 sm:gap-x-8 md:justify-end ${className}`}
      aria-label="Footer"
    >
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 transition-colors duration-200 hover:text-white sm:text-xs sm:tracking-[0.2em]"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
