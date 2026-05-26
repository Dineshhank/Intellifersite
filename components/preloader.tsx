"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

interface PreloaderProps {
    onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    onComplete();
                },
            });

            // Initial state: Text is zoomed in and blurred
            gsap.set(textRef.current, {
                scale: 5,
                opacity: 0,
                filter: "blur(10px)",
            });

            tl.to(textRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            })
                .to(
                    textRef.current,
                    {
                        scale: 1, // Zoom out to center
                        filter: "blur(0px)",
                        duration: 1.8,
                        ease: "power4.out", // Smooth landing
                    },
                    "<" // Start slightly overlapping with opacity fade
                )
                .to(
                    containerRef.current,
                    {
                        yPercent: -100, // Slide up like a shutter
                        duration: 1.5,
                        ease: "expo.inOut",
                        delay: 0.2, // Short pause before wipe
                    }
                );
        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
            {/* Fullscreen background image - The content to be revealed through text */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/herobottomimage.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Overlay with Text - Multiply mode makes White text transparent (revealing image), Black bg stays Black */}
            <div className="relative z-10 flex h-full w-full items-center justify-center bg-black mix-blend-multiply">
                <div ref={textRef} className="overflow-hidden px-4 md:px-0">
                    <h1 className="font-haas select-none text-[15vw] font-bold uppercase leading-none tracking-tighter text-white md:text-[12vw]">
                        INTELLIFER
                    </h1>
                </div>
            </div>
        </div>
    );
}
