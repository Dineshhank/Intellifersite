"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INTERNATIONAL_BRAND_LOGOS, type BrandLogo } from "@/lib/brand-logos";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/** Map visibility on #06122B — set to "soft" | "medium" | "strong" */
const MAP_VISIBILITY = "strong" as const;

const MAP_STYLES = {
    soft: { opacity: 0.38, brightness: 2.2, contrast: 1.15 },
    medium: { opacity: 0.58, brightness: 3, contrast: 1.45 },
    strong: { opacity: 0.78, brightness: 3.6, contrast: 1.65 },
} as const;

const mapStyle = MAP_STYLES[MAP_VISIBILITY];
const mapFilter = `brightness(${mapStyle.brightness}) contrast(${mapStyle.contrast}) saturate(0)`;
const pinsMapStyle = {
    opacity: Math.min(mapStyle.opacity + 0.1, 0.9),
    filter: `brightness(${mapStyle.brightness - 0.25}) contrast(${mapStyle.contrast - 0.1})`,
};

function BrandLogoCell({
    name,
    src,
    className,
}: BrandLogo & { className?: string }) {
    const [failed, setFailed] = useState(false);

    return (
        <div
            className={`flex h-16 w-full items-center justify-center px-2 sm:h-[4.5rem] sm:px-3 md:h-24 md:px-4 lg:h-28 ${className ?? ""}`}
        >
            {failed ? (
                <span className="text-center text-[10px] font-medium uppercase tracking-widest text-white/40 sm:text-xs">
                    {name}
                </span>
            ) : (
                <Image
                    src={src}
                    alt={`${name} logo`}
                    width={240}
                    height={96}
                    className="h-12 w-auto max-h-14 max-w-[9.5rem] object-contain object-center sm:h-14 sm:max-h-16 sm:max-w-[11rem] md:h-16 md:max-w-[12.5rem] lg:h-[4.25rem] lg:max-w-[13.5rem] xl:h-20 xl:max-w-[14.5rem]"
                    onError={() => setFailed(true)}
                />
            )}
        </div>
    );
}

export default function BrandsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);

    // Refs for animation targets
    const titleRef = useRef<HTMLDivElement>(null);
    const mapBgRef = useRef<HTMLDivElement>(null);
    const mapPinsRef = useRef<HTMLDivElement>(null);
    const brandsGridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!stickyRef.current || !containerRef.current) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    pin: stickyRef.current,
                },
            });

            // INITIAL STATE:
            // Title is visible.
            // Maps and Grid are hidden (handled via CSS opacity/visibility or initial set)

            // PHASE 1: Nudge title up & fade in map
            tl.to(titleRef.current, {
                y: -24,
                scale: 0.92,
                duration: 1,
                ease: "power2.inOut",
            });

            tl.to(mapBgRef.current, {
                opacity: 1,
                y: 40,
                duration: 1,
                ease: "power2.inOut",
            }, "<");

            // Move hidden pins map to same position so it aligns
            tl.set(mapPinsRef.current, { y: 40 }, "<");

            // PHASE 2: Crossfade to Map with Pins
            tl.to(mapPinsRef.current, {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
            });

            // PHASE 3: Display Brands Grid & Hide Pins
            // Fade out pins map, revealing the base map underneath
            tl.to(mapPinsRef.current, {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
            });

            tl.fromTo(brandsGridRef.current,
                { opacity: 0, y: 16, autoAlpha: 0 },
                { opacity: 1, y: 0, autoAlpha: 1, duration: 1, ease: "power2.out" },
                "<"
            );

            // Hold state for the final scroll section
            tl.to({}, { duration: 1 });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative z-10 w-full h-[400vh] bg-[#06122B]"
        >
            <div
                ref={stickyRef}
                className="sticky top-0 flex h-screen w-full flex-col overflow-hidden"
            >
                {/* Heading — stays above the map */}
                <div
                    ref={titleRef}
                    className="relative z-20 w-full shrink-0 px-6 pt-24 text-center will-change-transform md:pt-28"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm md:mb-6">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                        <span className="text-[10px] font-medium uppercase tracking-widest text-white/70">
                            International Brands
                        </span>
                    </div>

                    <h2 className="mx-auto max-w-5xl font-display text-[clamp(2rem,5.5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-white">
                        We are happy to work with{" "}
                        <span className="text-[#22c55e]">global largest brands</span>
                    </h2>
                </div>

                {/*
                  MAP STAGE — map + logos share the same box.
                  Logos use absolute inset-0 + flex center so they sit
                  centered on top of the map (horizontal + vertical).
                */}
                <div className="relative z-0 mx-auto w-full flex-1 px-4 pb-8 md:px-8 md:pb-10">
                    <div className="relative h-full w-full max-w-7xl mx-auto">
                        {/* Map layers (z-0) */}
                        <div
                            ref={mapBgRef}
                            className="absolute inset-0 opacity-0 mix-blend-screen"
                        >
                            <Image
                                src="/map-bg.png"
                                alt="World Map Background"
                                fill
                                className="object-contain object-center"
                                style={{ opacity: mapStyle.opacity, filter: mapFilter }}
                                priority
                            />
                        </div>
                        <div
                            ref={mapPinsRef}
                            className="absolute inset-0 opacity-0 mix-blend-screen"
                        >
                            <Image
                                src="/mapwithpin.png"
                                alt="World Map with Pins"
                                fill
                                className="object-contain object-center"
                                style={{
                                    opacity: pinsMapStyle.opacity,
                                    filter: pinsMapStyle.filter,
                                }}
                                priority
                            />
                        </div>

                        {/* Logo overlay — centered on map (z-20) */}
                        <div
                            ref={brandsGridRef}
                            className="pointer-events-none invisible absolute inset-0 z-20 flex items-center justify-center opacity-0"
                        >
                            <div className="grid w-full max-w-[88rem] grid-cols-2 place-items-center gap-x-8 gap-y-12 px-3 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 md:grid-cols-4 md:gap-x-10 lg:grid-cols-6 lg:gap-x-10 lg:gap-y-14 xl:gap-x-14">
                                {INTERNATIONAL_BRAND_LOGOS.map((brand) => (
                                    <BrandLogoCell
                                        key={`${brand.name}-${brand.src}`}
                                        {...brand}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
