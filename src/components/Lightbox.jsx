import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "./SmartImage";

/**
 * Lightbox — fullscreen image viewer with keyboard and touch navigation.
 */
export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (index === null || !items[index]) return null;
  const item = items[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title || "Photograph"}
      className="fixed inset-0 z-[60] flex flex-col bg-navy-dark/97 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-8">
        <p className="font-sans text-[12px] text-ivory/60">
          {index + 1} / {items.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image"
          className="p-2 text-ivory transition-colors hover:text-gold"
        >
          <X size={24} strokeWidth={1.5} />
        </button>
      </div>

      <div
        className="flex flex-1 items-center justify-center px-2 pb-2 sm:px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous image"
          className="hidden p-3 text-ivory/70 transition-colors hover:text-gold sm:block"
        >
          <ChevronLeft size={30} strokeWidth={1.2} />
        </button>

        <figure className="max-h-full w-full max-w-4xl">
          <SmartImage
            src={item.image}
            alt={item.title}
            ratio="aspect-[4/3]"
            tone="dark"
            loading="eager"
            imgClassName="object-contain"
          />
          <figcaption className="mt-4 text-center font-sans text-[13px] text-ivory/70">
            {[item.title, item.category, item.year].filter(Boolean).join(" — ")}
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={onNext}
          aria-label="Next image"
          className="hidden p-3 text-ivory/70 transition-colors hover:text-gold sm:block"
        >
          <ChevronRight size={30} strokeWidth={1.2} />
        </button>
      </div>

      {/* Mobile controls */}
      <div
        className="flex items-center justify-center gap-10 pb-8 sm:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous image"
          className="p-3 text-ivory/80"
        >
          <ChevronLeft size={26} strokeWidth={1.2} />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next image"
          className="p-3 text-ivory/80"
        >
          <ChevronRight size={26} strokeWidth={1.2} />
        </button>
      </div>
    </div>
  );
}
