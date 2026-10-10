
import { ArrowUpRight } from "lucide-react";
import SmartImage from "./SmartImage";

export default function EngagementCard({ item }) {
  return (
    <article className="group flex h-full flex-col border border-white/10 bg-[#101B30] transition-colors duration-500 hover:border-gold/40">
      {item.image && (
        <SmartImage
          src={item.image}
          alt={item.title}
          ratio="aspect-[4/3]"
          tone="dark"
          zoomOnHover
          imgClassName={
            item.status === "upcoming"
              ? "object-cover object-center"
              : ""
          }
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        {item.date && (
          <span className="mb-4 font-sans text-[11px] uppercase tracking-[0.15em] text-gold">
            {item.date}
          </span>
        )}

        <h4 className="font-serif text-xl text-ivory transition-colors group-hover:text-gold">
          {item.title}
        </h4>

        {item.location && (
          <p className="mt-2 font-sans text-xs tracking-wide text-ivory/50">
            {item.location}
          </p>
        )}

        {item.description && (
          <p className="mt-4 flex-1 font-sans text-sm leading-7 text-ivory/65">
            {item.description}
          </p>
        )}

        {item.focus?.length > 0 && (
          <ul className="mt-5 space-y-2 border-t border-ivory/10 pt-4">
            {item.focus.map((point, i) => (
              <li
                key={`${point}-${i}`}
                className="flex items-start gap-2 font-sans text-xs leading-5 text-ivory/60"
              >
                <span className="mt-1 text-gold">—</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-gold transition-colors hover:text-ivory"
          >
            Read more <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}