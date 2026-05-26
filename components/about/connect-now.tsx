"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACT_MAILTO } from "@/lib/contact";

export default function ConnectNow() {
    return (
        <section className="relative w-full overflow-hidden bg-[#F5F3EE] py-14 md:py-20 lg:py-24">
            <div className="container relative z-10 flex flex-col items-center px-4 text-center md:px-6">

                <div className="relative mb-6 inline-block md:mb-8">
                    <h2 className="text-center font-bold tracking-tight text-neutral-900">
                        <span className="block text-[clamp(1.75rem,4vw,2.65rem)] leading-[1.1] md:text-[clamp(1.9rem,3.5vw,2.85rem)]">
                            <span className="text-[#22c55e]">Ready</span>{" "}
                            <span className="text-neutral-900">To</span>
                        </span>
                        <span className="mt-0.5 block text-[clamp(2.1rem,6vw,3.75rem)] leading-[1.05] md:mt-1 md:text-[clamp(2.35rem,5.5vw,4.25rem)]">
                            Collaborate
                        </span>
                    </h2>

                    <div className="absolute bottom-0 right-0 z-20 translate-x-[12%] translate-y-[40%] rotate-[-6deg] transform sm:translate-x-1/4 md:bottom-1 md:right-0 md:translate-x-0 md:translate-y-1/2 lg:-right-4 xl:-right-12">
                        <Link
                            href={CONTACT_MAILTO}
                            className="group flex items-center gap-1.5 rounded-full bg-[#22c55e] px-4 py-1.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:rotate-1 md:gap-2 md:px-6 md:py-2.5 md:text-base"
                        >
                            Connect Now
                            <span className="flex items-center justify-center rounded-full bg-black/20 p-1 transition-colors group-hover:bg-black/30 md:p-1.5">
                                <ArrowRight className="h-3.5 w-3.5 text-white md:h-4 md:w-4" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="mt-8 max-w-xl space-y-1 text-center md:mt-10">
                    <p className="text-base font-medium text-neutral-800 md:text-lg">
                        Have a project in mind?
                    </p>
                    <p className="text-sm font-light text-neutral-600 md:text-base">
                        Let&apos;s build something meaningful together.
                    </p>
                </div>

            </div>
        </section>
    );
}
