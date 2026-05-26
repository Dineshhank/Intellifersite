"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import gsap from "gsap";


export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const innovateRef = useRef<HTMLSpanElement>(null);
  const transformRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of screen
      const mouseX = (e.clientX - window.innerWidth / 2) / 30;
      const mouseY = (e.clientY - window.innerHeight / 2) / 30;

      // Animate Innovate pill
      if (innovateRef.current) {
        gsap.to(innovateRef.current, {
          x: mouseX,
          y: mouseY,
          duration: 1, // longer duration for smoother "float" feel
          ease: "power2.out",
        });
      }

      // Animate Transform pill (opposite direction or slightly different for depth)
      if (transformRef.current) {
        gsap.to(transformRef.current, {
          x: -mouseX * 1.5, // Move slightly more and in opposite X
          y: mouseY * 1.5,
          duration: 1,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#F9F6F2] pt-24 lg:pt-28"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Main heading area */}
        <div className="relative pb-16 pt-10 lg:pb-20 lg:pt-16">
          {/* Heading with floating pills */}
          <div className="relative">
            <h1
              className="font-haas text-[50px] md:text-[80px] lg:text-[100px] font-bold uppercase leading-[0.9] tracking-tighter text-black cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="block">
                <span className="relative inline-block align-bottom">
                  {/* Whichever word is *relative* sets the box width — avoids a gap before TECH when showing INTELLIFER */}
                  <span
                    className={`inline-block transition-all duration-200 ease-out will-change-[opacity,transform] ${
                      isHovered
                        ? "pointer-events-none absolute left-0 top-0 opacity-0"
                        : "relative opacity-100"
                    }`}
                    style={
                      isHovered
                        ? { transform: "translateY(-12%)" }
                        : { transform: "translateY(0)" }
                    }
                  >
                    INTELLIGENT
                  </span>
                  <span
                    className={`inline-block transition-all duration-200 ease-out will-change-[opacity,transform] ${
                      isHovered
                        ? "relative opacity-100"
                        : "pointer-events-none absolute left-0 top-0 opacity-0"
                    }`}
                    style={
                      isHovered
                        ? { transform: "translateY(0)" }
                        : { transform: "translateY(12%)" }
                    }
                  >
                    INTELLIFER
                  </span>
                </span>{" "}
                <span className="relative inline-block">
                  TECH
                  {/* Innovate pill */}
                  <span
                    ref={innovateRef}
                    className="absolute -bottom-4 -right-10 z-20 hidden lg:inline-flex items-center will-change-transform"
                  >
                    <Image
                      src="/Vector1.png"
                      alt=""
                      width={16}
                      height={16}
                      className="absolute -top-2 -left-3 w-4 h-4 z-30"
                    />
                    <span className="relative bg-[#22c55e] px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-white rounded-sm shadow-lg">
                      Innovate
                    </span>
                  </span>
                </span>
              </span>
              <span className="relative block">
                FOR MODERN
              </span>
              <span className="relative block">
                ENTERPRISES
                {/* Transform pill */}
                <span
                  ref={transformRef}
                  className="absolute -bottom-6 left-0 z-20 hidden lg:inline-flex items-center will-change-transform"
                >
                  <span className="relative bg-[#22c55e] px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-white rounded-sm shadow-lg">
                    Transform
                  </span>
                  <Image
                    src="/Vector2.png"
                    alt=""
                    width={16}
                    height={16}
                    className="absolute -top-3 -right-3 w-4 h-4 z-30"
                  />
                </span>
              </span>
            </h1>
          </div>

          {/* Bottom section */}
          <div className="mt-20 flex flex-col justify-between gap-8 lg:mt-24 lg:flex-row lg:items-end">
            {/* Subtitle */}
            <p className="max-w-xl font-sans text-[16px] font-semibold leading-relaxed text-gray-600">
              In order to stay ahead in a world that is rapidly changing,
              Intellifer helps businesses upgrade technology, rethink processes,
              and alter experiences.
            </p>

            {/* Made in India */}
            <div className="flex items-center gap-2 font-sans text-[16px] font-semibold text-gray-600">
              <span>
                + MADE IN{" "}
                <span className="font-bold text-black">INDIA</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-20 w-full">
        <div className="relative aspect-[16/6] w-full overflow-hidden">
          <Image
            src="/herobottomimage.jpg"
            alt="Hero Bottom Visual"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}