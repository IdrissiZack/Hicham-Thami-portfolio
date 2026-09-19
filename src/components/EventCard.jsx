import { MapPin, CalendarDays, ArrowUpRight } from "lucide-react";
import SmartImage from "./SmartImage";

/**
 * EventCard — one forum / event. Used by the Forums section for any
 * number of entries coming from src/data/events.js
 */
export default function EventCard({ event }) {
  return (
    <article className="group flex h-full flex-col bg-white shadow-[0_1px_2px_rgba(11,31,51,0.06)]">
      <SmartImage
        src={event.image}
        alt={event.title}
        ratio="aspect-[16/10]"
        zoomOnHover
      />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-sans text-[12px] text-muted">
          {event.date && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={13} strokeWidth={1.5} className="text-gold" />
              {event.date}
            </span>
          )}
          {event.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} strokeWidth={1.5} className="text-gold" />
              {event.location}
            </span>
          )}
        </div>

        <h3 className="mt-3 font-serif text-2xl text-navy">{event.title}</h3>
        <div className="mt-4 h-px w-10 bg-gold/60" />

        {event.description && (
          <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
            {event.description}
          </p>
        )}

        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 self-start font-sans text-[12.5px] tracking-[0.1em] text-navy transition-colors hover:text-gold"
          >
            Read more
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        )}
      </div>
    </article>
  );
}
