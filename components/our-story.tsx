"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STORY_IMAGES = {
    left: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=640&h=800&fit=crop",
    rightTop: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=520&h=650&fit=crop",
    rightBottom:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=560&h=700&fit=crop",
    accent:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&crop=faces",
} as const;

export default function OurStory() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // Text animation
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
            });

            // Images parallax/fade-in
            gsap.utils.toArray<HTMLElement>(".story-image").forEach((img, i) => {
                gsap.from(img, {
                    scrollTrigger: {
                        trigger: img,
                        start: "top 85%",
                        scrub: 1,
                    },
                    y: 50,
                    opacity: 0.5,
                    duration: 1.5,
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative z-10 overflow-hidden bg-[#EFECE6] py-24 lg:py-32 rounded-b-[40px] sm:rounded-b-[44px] lg:rounded-b-[48px]"
        >
            {/* Decorative Side Images - Using absolute positioning */}

            {/* Left Image - partially visible */}
            <div className="story-image absolute -left-16 top-[20%] hidden h-[300px] w-[250px] md:block lg:left-0 lg:h-[400px] lg:w-[320px]">
                <Image
                    src={STORY_IMAGES.left}
                    alt="Modern office workspace"
                    fill
                    sizes="(max-width: 1024px) 250px, 320px"
                    className="rounded-lg object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
            </div>

            {/* Right Top Image */}
            <div className="story-image absolute -right-16 top-[10%] hidden h-[250px] w-[200px] md:block lg:right-0 lg:h-[300px] lg:w-[240px]">
                <Image
                    src={STORY_IMAGES.rightTop}
                    alt="Team collaborating in a meeting"
                    fill
                    sizes="(max-width: 1024px) 200px, 240px"
                    className="rounded-lg object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
            </div>

            {/* Right Bottom Image */}
            <div className="story-image absolute -right-12 bottom-[5%] hidden h-[250px] w-[200px] md:block lg:right-10 lg:h-[350px] lg:w-[280px]">
                <Image
                    src={STORY_IMAGES.rightBottom}
                    alt="Creative workspace environment"
                    fill
                    sizes="(max-width: 1024px) 200px, 280px"
                    className="rounded-lg object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
                <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
                    {/* Pill Badge */}
                    <div className="mb-8">
                        <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-black/70">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]"></span>
                            Our Story
                        </span>
                    </div>

                    {/* Title - Large and bold */}
                    <div ref={headingRef} className="relative mb-16 md:mb-24">
                        <h2 className="font-sans text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-black">
                            A LEGACY OF
                            <br />
                            TECHNOLOGY, INNOVATION,{" "}
                            <span className="text-[#22c55e]">AND TRUST</span>
                        </h2>

                    </div>

                    {/* Content - Separated paragraphs with grey text */}
                    <div
                        ref={textRef}
                        className="flex flex-col gap-9 px-4 text-balance text-center text-[clamp(1rem,1.15vw,1.25rem)] font-semibold leading-[1.95] tracking-[-0.005em] text-[#6A6F78] md:px-8 lg:max-w-[72rem] lg:px-10"
                    >
                        <p>
                            Intellifer Systems is the software and digital solutions division of
                            SD Groups, an organization established in 1989. With decades of
                            experience, we specialize in software development, consulting,
                            system implementation, and technology integration. Our core focus is
                            on digitization, digitalization, and digital
                            transformation-helping businesses modernize operations and scale
                            through smart technology solutions.
                        </p>
                        <p>
                            We work with a diverse range of clients, from global enterprises and
                            Fortune-listed companies to defense organizations and growing SMEs.
                            Our approach blends innovation, engineering excellence, and domain
                            expertise to deliver reliable and future-ready digital products.
                            Built on emerging technologies such as Artificial
                            Intelligence, Machine Learning, and the Internet of Things (IoT), our
                            solutions enable intelligent, connected, and value-driven ecosystems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
