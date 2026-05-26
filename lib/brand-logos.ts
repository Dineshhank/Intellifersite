/**
 * Home page brand strip — files in `public/brands/`.
 * Order: Chevron → Indian Defence → Aramco → S-Chem → L&T → KSB
 */
export type BrandLogo = {
  name: string;
  src: string;
};

export const BRAND_LOGOS: BrandLogo[] = [
  { name: "Chevron", src: "/brands/Chevron.jpeg" },
  { name: "Indian Defence", src: "/brands/IndianDefence.png" },
  { name: "Aramco", src: "/brands/Saudi-Aramco-Logo.png" },
  { name: "S-Chem", src: "/brands/Schem.jpeg" },
  { name: "L&T", src: "/brands/LandT.jpeg" },
  { name: "KSB", src: "/brands/KSB.jpeg" },
];

/** About page — International Brands (`public/Internationalbrands/`) */
export const INTERNATIONAL_BRAND_LOGOS: BrandLogo[] = [
  { name: "Chevron", src: "/Internationalbrands/Chevron_Logo.png" },
  { name: "Aramco", src: "/Internationalbrands/Aramco-logo.png" },
  { name: "KSB", src: "/Internationalbrands/KSB_Logo%201.png" },
  { name: "Indian Navy", src: "/Internationalbrands/gov.png" },
  { name: "Apeman", src: "/Internationalbrands/apeman.png" },
  { name: "Saudi Polymers", src: "/Internationalbrands/saudhipolymers.png" },
  { name: "S-Chem", src: "/Internationalbrands/schem.png" },
  { name: "Indian Defence", src: "/Internationalbrands/indiandefence.png" },
  { name: "Apollo Hospitals", src: "/Internationalbrands/Apollo_Hospitals_Logo.png" },
  { name: "Phillips 66", src: "/Internationalbrands/philips.png" },
  { name: "L&T", src: "/Internationalbrands/LandT.png" },
  { name: "CRI", src: "/Internationalbrands/cri.png" },
];
