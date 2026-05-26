"use client";

import Image from "next/image";
import { useState } from "react";
import type { BrandLogo } from "@/lib/brand-logos";

function BrandLogoItem({ name, src, className }: BrandLogo & { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <li
        className={`flex min-h-[5.5rem] w-full items-center justify-center md:min-h-[7rem] ${className ?? ""}`}
      >
        <span className="text-center text-xs font-medium uppercase tracking-widest text-neutral-400">
          {name}
        </span>
      </li>
    );
  }

  return (
    <li
      className={`flex min-h-[5.5rem] w-full items-center justify-center px-2 md:min-h-[7rem] md:px-3 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={`${name} logo`}
        width={280}
        height={112}
        className="h-14 w-auto max-h-16 max-w-[12rem] object-contain object-center sm:h-16 sm:max-w-[13.5rem] md:h-[4.25rem] md:max-w-[15rem] lg:h-[4.75rem] lg:max-w-[16.5rem]"
        onError={() => setFailed(true)}
      />
    </li>
  );
}

type BrandLogoGridProps = {
  logos: readonly BrandLogo[];
};

export default function BrandLogoGrid({ logos }: BrandLogoGridProps) {
  return (
    <div className="mx-auto mt-14 w-full max-w-[72rem] lg:mt-16">
      <ul className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-14 sm:gap-x-10 md:grid-cols-6 md:gap-x-6 md:gap-y-0 lg:gap-x-10 xl:gap-x-14">
        {logos.map((brand) => (
          <BrandLogoItem key={`${brand.name}-${brand.src}`} {...brand} />
        ))}
      </ul>
    </div>
  );
}
