"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import AboutHero from "@/components/about-hero";
import OurStory from "@/components/our-story";
import HowWeWork from "@/components/how-we-work";
import OurTeam from "@/components/about/our-team";
import TestimonialSection from "@/components/about/testimonial-section";
import BrandsSection from "@/components/about/brands-section";
import ConnectNow from "@/components/about/connect-now";
import Footer from "@/components/footer";
import Preloader from "@/components/preloader";

export default function AboutPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;

        const prevHtmlOverflow = html.style.overflow;
        const prevBodyOverflow = body.style.overflow;

        if (isLoading) {
            html.style.overflow = "hidden";
            body.style.overflow = "hidden";
        } else {
            html.style.overflow = prevHtmlOverflow || "";
            body.style.overflow = prevBodyOverflow || "";
        }

        return () => {
            html.style.overflow = prevHtmlOverflow || "";
            body.style.overflow = prevBodyOverflow || "";
        };
    }, [isLoading]);

    return (
        <main className="relative min-h-screen bg-[#F5F3EE]">
            {isLoading && (
                <Preloader
                    onComplete={() => setIsLoading(false)}
                />
            )}

            <Navbar />
            <AboutHero />
            <div className="bg-[#06122B]">
                <OurStory />
                <HowWeWork />
                <OurTeam />
            </div>
            <BrandsSection />
            <TestimonialSection />
            <ConnectNow />
            <Footer />
        </main>
    );
}
