import { publications } from "../data/publications";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import PublicationCard from "../components/PublicationCard";
import Reveal from "../components/Reveal";

export default function Publications() {
  return (
    <Section id="publications" tone="white">
      <SectionHeading
        title="Publications"
        intro="Articles, analyses and contributions on international affairs."
      />

      {publications.length === 0 ? (
        <p className="mt-10 text-[15px] text-muted">[Publications to be added]</p>
      ) : (
        <div className="mt-12 space-y-10 sm:space-y-12">
          {publications.map((item, i) => (
            <Reveal key={`${item.title}-${i}`}>
              <PublicationCard item={item} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
