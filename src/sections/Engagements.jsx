import { engagements } from "../data/engagements";
import { partners } from "../data/partners";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import EngagementCard from "../components/EngagementCard";
import Reveal from "../components/Reveal";

export default function Engagements() {
  return (
    <Section id="engagements" tone="navy">
      <SectionHeading
        title="Engagements"
        tone="dark"
        intro="Institutional meetings, conferences, partnerships and international cooperation."
      />

      {engagements.length === 0 ? (
        <p className="mt-10 text-[15px] text-ivory/50">[Engagements to be added]</p>
      ) : (
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {engagements.map((item, i) => (
            <Reveal key={`${item.title}-${i}`} delay={(i % 3) * 80} className="h-full">
              <EngagementCard item={item} />
            </Reveal>
          ))}
        </div>
      )}

      {partners.length > 0 && (
        <Reveal className="mt-16">
          <div className="rule-gold opacity-40" />
          <h3 className="mt-10 text-center font-serif text-2xl text-ivory">
            Institutions & Partners
          </h3>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((partner, i) => (
              <li key={`${partner.name}-${i}`}>
                {partner.link ? (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[13px] tracking-[0.1em] text-ivory/65 transition-colors hover:text-gold"
                  >
                    {partner.name}
                  </a>
                ) : (
                  <span className="font-sans text-[13px] tracking-[0.1em] text-ivory/65">
                    {partner.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  );
}
