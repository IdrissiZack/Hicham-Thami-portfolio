import { ArrowUpRight } from "lucide-react";
import SmartImage from "./SmartImage";

/**
 * PublicationCard — editorial row: image on one side, text on the other.
 * Alternates sides on desktop via the `flip` prop.
 */
export default function PublicationCard({ item, flip = false }) {
  return (
    <article className="group grid gap-6 border-t border-navy/10 pt-8 sm:gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
      <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
        <SmartImage
          src={item.image}
          alt={item.title}
          ratio="aspect-[3/2]"
          zoomOnHover
        />
      </div>

      <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
        <p className="font-sans text-[12px] text-muted">
          {[item.publication, item.date].filter(Boolean).join(", ")}
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-snug text-navy sm:text-3xl">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-ink/75">
            {item.description}
          </p>
        )}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 font-sans text-[12.5px] tracking-[0.1em] text-navy transition-colors hover:text-gold"
          >
            Read the publication
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        )}
      </div>
    </article>
  );
}
