import { relations, relationsIntro } from "../data/relations";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Relations() {
  if (!relations.length) return null;

  return (
    <Section id="relations" tone="white">
      <SectionHeading
  number="02"
  title="International Relations"
  intro={relationsIntro}
/>

      <div className="mt-14 grid gap-0 border-t border-navy/10 sm:grid-cols-2 lg:grid-cols-3">
        {relations.map((area, i) => (
          <Reveal key={area.title} delay={i * 70}>
            <article
              className="group h-full border-b border-navy/10 p-7 sm:p-9 lg:border-r lg:last:border-r-0"
            >
              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-gold transition-all duration-500 group-hover:w-16"
                />

                <span className="font-sans text-[10px] tracking-[0.22em] text-navy/35">
                  0{i + 1}
                </span>
              </div>

              <h3 className="mt-7 font-serif text-2xl leading-snug text-navy-dark sm:text-[26px]">
                {area.title}
              </h3>

              <p className="mt-4 max-w-[34ch] font-sans text-[14px] font-light leading-[1.85] text-navy-dark/70">
                {area.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}