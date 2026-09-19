import { ArrowUpRight } from "lucide-react";
import SmartImage from "./SmartImage";

/**
 * EngagementCard — institutional meetings, conferences, cooperation.
 */
export default function EngagementCard({ item }) {
  return (
    <article className="group flex h-full flex-col border border-ivory/15 bg-navy-dark/40 transition-colors duration-500 hover:border-gold/40">
      {item.image && (
        <SmartImage
          src={item.image}
          alt={item.title}
        ratio="aspect-[4/3]"
          tone="dark"
          zoomOnHover
        />
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">

        {/* Type */}
        {item.type && (
          <p className="font-sans text-[11.5px] tracking-[0.16em] text-gold">
            {item.type}
          </p>
        )}

        {/* Title */}
        <h3 className="mt-3 font-serif text-2xl text-ivory">
          {item.title}
        </h3>

        {/* Role */}
        {item.role && (
          <p className="mt-2 font-sans text-[12px] font-medium tracking-[0.08em] text-gold/90">
            {item.role}
          </p>
        )}

        {/* Date + Location */}
        {(item.date || item.location) && (
          <p className="mt-2 font-sans text-[12px] text-ivory/55">
            {[item.date, item.location].filter(Boolean).join(" — ")}
          </p>
        )}

        {/* Description */}
        {item.description && (
          <p className="mt-4 text-[15px] leading-relaxed text-ivory/75">
            {item.description}
          </p>
        )}

        {/* Focus */}
        {item.focus?.length > 0 && (
          <div className="mt-6">
            <p className="font-sans text-[10px] font-medium tracking-[0.2em] text-gold">
              KEY AREAS
            </p>

            <ul className="mt-3 space-y-2">
              {item.focus.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 font-sans text-[12.5px] leading-relaxed text-ivory/65"
                >
                  <span className="mt-[8px] h-px w-3 shrink-0 bg-gold/60" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Link */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 self-start font-sans text-[12.5px] tracking-[0.1em] text-gold transition-colors hover:text-gold-soft"
          >
            Details
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        )}
      </div>
    </article>
  );
}