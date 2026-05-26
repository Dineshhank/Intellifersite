"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FooterLayoutProps {
    children: ReactNode;
    footer: ReactNode;
}

export default function FooterLayout({ children, footer }: FooterLayoutProps) {
    // Parallax effect commented out due to glitches
    // const [footerHeight, setFooterHeight] = useState(0);
    // const footerRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const updateHeight = () => {
    //         if (footerRef.current) {
    //             setFooterHeight(footerRef.current.offsetHeight);
    //         }
    //     };
    //
    //     updateHeight();
    //     window.addEventListener("resize", updateHeight);
    //
    //     const resizeObserver = new ResizeObserver(() => {
    //         updateHeight();
    //     });
    //
    //     if (footerRef.current) {
    //         resizeObserver.observe(footerRef.current);
    //     }
    //
    //     return () => {
    //         window.removeEventListener("resize", updateHeight);
    //         resizeObserver.disconnect();
    //     };
    // }, []);

    return (
        <>
            {children}
            {footer}
        </>
    );
}
