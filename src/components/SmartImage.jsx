import { useEffect, useState } from "react";

/**
 * SmartImage
 * Renders an image, and if the file is missing (or no path was given)
 * shows an elegant placeholder instead of a broken image icon.
 *
 * ratio: any Tailwind aspect class, e.g. "aspect-[4/5]"
 */
export default function SmartImage({
  src,
  alt,
  ratio = "aspect-[4/3]",
  className = "",
  imgClassName = "",
  tone = "light", // "light" | "dark" — placeholder colour
  zoomOnHover = false,
  loading = "lazy",
}) {
  const [failed, setFailed] = useState(!src);

  useEffect(() => {
    setFailed(!src);
  }, [src]);

  const placeholderTone =
    tone === "dark"
      ? "bg-navy-dark text-gold/70 border-gold/20"
      : "bg-[#eceae3] text-navy/45 border-navy/10";

  return (
    <div className={`relative overflow-hidden ${ratio} ${className}`}>
      {failed ? (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 border ${placeholderTone}`}
          role="img"
          aria-label={alt ? `${alt} — image coming soon` : "Image coming soon"}
        >
          <span className="font-serif text-2xl tracking-[0.3em] sm:text-3xl">
            HT
          </span>
          <span className="h-px w-8 bg-current opacity-40" />
          <span className="font-sans text-[11px] tracking-[0.18em] sm:text-xs">
            Image coming soon
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt || ""}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${
            zoomOnHover ? "group-hover:scale-105" : ""
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
