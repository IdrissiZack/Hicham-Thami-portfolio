import { useMemo, useState } from "react";
import { gallery } from "../data/gallery";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import SmartImage from "../components/SmartImage";
import Lightbox from "../components/Lightbox";
import Reveal from "../components/Reveal";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  // Categories are derived from the data — no list to maintain by hand.
  const categories = useMemo(
    () => ["All", ...new Set(gallery.map((p) => p.category).filter(Boolean))],
    []
  );

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <Section id="gallery" tone="ivory">
      <SectionHeading
        title="Gallery"
        intro="Photographs from forums, institutional meetings and international engagements."
      />

      {gallery.length === 0 ? (
        <p className="mt-10 text-[15px] text-muted">[Photographs to be added]</p>
      ) : (
        <>
          {categories.length > 2 && (
            <Reveal className="mt-8 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
              <div className="flex min-w-max gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setFilter(category);
                      setOpenIndex(null);
                    }}
                    className={`border px-5 py-2 font-sans text-[12.5px] tracking-[0.1em] transition-colors duration-300 ${
                      filter === category
                        ? "border-gold bg-gold text-navy-dark"
                        : "border-navy/20 text-navy/70 hover:border-gold hover:text-navy"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Reveal>
          )}

          {/* Editorial mosaic: every third photograph is given more room */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal
                key={`${item.image}-${i}`}
                delay={(i % 3) * 70}
                className={i % 5 === 0 ? "sm:col-span-2" : ""}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group relative block w-full text-left"
                  aria-label={`Open photograph: ${item.title}`}
                >
                  <SmartImage
                    src={item.image}
                    alt={item.title}
                    ratio={i % 5 === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}
                    zoomOnHover
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-serif text-lg text-ivory">{item.title}</p>
                    <p className="font-sans text-[11.5px] tracking-[0.12em] text-gold">
                      {[item.category, item.year].filter(Boolean).join(" — ")}
                    </p>
                  </div>
                </button>

                {/* Caption always visible on touch screens */}
                <div className="mt-3 lg:hidden">
                  <p className="font-serif text-lg text-navy">{item.title}</p>
                  <p className="font-sans text-[11.5px] tracking-[0.12em] text-muted">
                    {[item.category, item.year].filter(Boolean).join(" — ")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </>
      )}

      {openIndex !== null && (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrev={() => setOpenIndex((i) => (i - 1 + items.length) % items.length)}
          onNext={() => setOpenIndex((i) => (i + 1) % items.length)}
        />
      )}
    </Section>
  );
}
