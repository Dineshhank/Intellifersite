import React from "react"
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";

/* ─────────────────────────────────────────────────────────────
   1. MonaSans (variable) — regular body text  →  font-sans
      Covers every weight (100–900) via the single variable TTF.
───────────────────────────────────────────────────────────── */
const monaSans = localFont({
  src: "../public/fonts/MonaSans-VariableFont_wdth,wght.ttf",
  variable: "--font-mona-sans",
  display: "swap",
  preload: true,
});

/* ─────────────────────────────────────────────────────────────
   2. MonaSans Display — display / heading use  →  font-display
      Three static WOFF weights loaded individually:
        Regular  (400), Medium (500), SemiBold (600)
───────────────────────────────────────────────────────────── */
const monaDisplay = localFont({
  src: [
    {
      path: "../public/fonts/MonaSansDisplay-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MonaSansDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/MonaSansDisplay-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mona-display",
  display: "swap",
  preload: true,
});

/* ─────────────────────────────────────────────────────────────
   3. EB Garamond Italic — editorial / accent use  →  font-garamond
      Single WOFF (italic only) from /public/fonts root.
───────────────────────────────────────────────────────────── */
const ebGaramond = localFont({
  src: "../public/fonts/eb-garamond-italic.woff",
  weight: "400",
  style: "italic",
  variable: "--font-eb-garamond",
  display: "swap",
});

/* ─────────────────────────────────────────────────────────────
   4. Haas Grot — secondary branding font  →  font-haas
      Two static WOFF weights: 55 (Regular/400) and 65 (Medium/600).
───────────────────────────────────────────────────────────── */
const haasGrot = localFont({
  src: [
    {
      path: "../public/fonts/HaasGrot55.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HaasGrot65.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-haas-grot",
  display: "swap",
});

/* ───── Metadata ───── */
export const metadata: Metadata = {
  title: "Intellifer - Intelligent Tech for Modern Enterprises",
  description:
    "Intellifer helps businesses upgrade technology, rethink processes, and alter experiences to stay ahead in a rapidly changing world.",
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

/* ───── Root Layout ───── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*
        CSS variables exposed on <body>:
          --font-mona-sans     →  font-sans    (MonaSans regular body)
          --font-mona-display  →  font-display (MonaSans Display headings)
          --font-eb-garamond   →  font-garamond (EB Garamond italic accent)
          --font-haas-grot     →  font-haas    (HaasGrot Branding)
      */}
      <body
        className={`${monaSans.variable} ${monaDisplay.variable} ${ebGaramond.variable} ${haasGrot.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
