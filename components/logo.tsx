"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export default function Logo({ className, showText = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            {/* Icon portion - "IN" in a box style */}
            <div className="relative w-10 h-10 flex items-center justify-center">
                <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <defs>
                        <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#4ade80" /> {/* Emerging green */}
                            <stop offset="100%" stopColor="#16a34a" /> {/* Deep green */}
                        </linearGradient>
                    </defs>

                    {/* Border Box with opening */}
                    <path
                        d="M8 8 H32 V32 H8 V8"
                        stroke="url(#logoGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-90"
                    />

                    {/* Styled "IN" inside */}
                    {/* I */}
                    <rect x="13" y="14" width="3" height="12" rx="1.5" fill="white" />
                    <circle cx="14.5" cy="11.5" r="1.5" fill="white" />

                    {/* N */}
                    <path
                        d="M20 14 V26 L26 14 V26"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                {/* Background glow for better visibility on dark */}
                <div className="absolute inset-0 bg-green-500/20 blur-lg -z-10 rounded-full"></div>
            </div>

            {showText && (
                <div className="flex flex-col leading-none">
                    <span className="text-xl md:text-2xl font-bold tracking-wide text-white">
                        INTELLIFER
                    </span>
                </div>
            )}
        </div>
    );
}
