"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { FLIPBOOK_VIEWER_URL } from "@/lib/flipbook";

type BrochureFlipbookModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function BrochureFlipbookModal({
  open,
  onClose,
}: BrochureFlipbookModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px] sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Intellifer brochure"
      onClick={onClose}
    >
      <div
        className="relative h-[min(90vh,900px)] w-full max-w-[min(1400px,94vw)] overflow-hidden rounded-md bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-sm text-neutral-600 transition-colors hover:bg-black/5 sm:right-4 sm:top-4"
          aria-label="Close brochure"
        >
          <X className="h-6 w-6 stroke-[1.75]" />
        </button>

        <iframe
          key={FLIPBOOK_VIEWER_URL}
          src={FLIPBOOK_VIEWER_URL}
          title="Intellifer company brochure"
          className="h-full w-full border-0 bg-transparent"
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
