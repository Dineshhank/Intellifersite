"use client";

import { useRouter } from "next/navigation";
import HomeScreen from "@/components/home-screen";
import BrochureFlipbookModal from "@/components/brochure-flipbook-modal";

export default function BrochurePage() {
  const router = useRouter();

  return (
    <>
      <HomeScreen />
      <BrochureFlipbookModal open onClose={() => router.push("/")} />
    </>
  );
}
