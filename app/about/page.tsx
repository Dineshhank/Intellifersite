"use client";

import { useState } from "react";
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
