import { profile } from "../data/profile";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import SmartImage from "../components/SmartImage";
import Reveal from "../components/Reveal";

export default function Profile() {
  return (
    <Section id="profile" tone="ivory">
    <SectionHeading title="A Profile in Dialogue" />

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Photograph */}
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-24 w-24 border-b border-r border-gold/60 sm:-bottom-4 sm:-right-4 sm:h-32 sm:w-32"
            />

            <SmartImage
              src={profile.portraitSecondary}
              alt={`${profile.name} — portrait`}
              ratio="aspect-[4/5]"
            />
          </div>
        </Reveal>

        {/* Biography */}
        <Reveal delay={120} className="lg:col-span-7">
          <div className="space-y-6">
  {profile.biography.map((paragraph, i) => (
    <p
      key={i}
      className="max-w-[68ch] font-sans text-[15.5px] font-light leading-[1.9] text-navy-dark sm:text-base"
    >
      {paragraph}
    </p>
  ))}
</div>

          {profile.statement && (
            <blockquote className="mt-9 border-l border-gold pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-navy-dark sm:text-2xl">
                {profile.statement}
              </p>
            </blockquote>
          )}

          {/* Professional highlights */}
          {profile.highlights?.length > 0 && (
            <dl className="mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2">
  {profile.highlights.map((item) => (
    <div
      key={item.label}
      className="border-t border-gold/35 pt-4"
    >
      <dt className="font-sans text-[10px] font-medium tracking-[0.22em] text-gold">
        {item.label.toUpperCase()}
      </dt>

      <dd className="mt-2 font-serif text-lg text-navy-dark sm:text-xl">
        {item.value}
      </dd>
    </div>
  ))}
</dl>
          )}
        </Reveal>
      </div>

      {/* Areas of Expertise */}
{profile.expertise?.length > 0 && (
  <Reveal delay={80} className="mt-16 sm:mt-20">
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-gold" />

      <h3 className="font-serif text-2xl text-navy-dark sm:text-3xl">
        Areas of Expertise
      </h3>
    </div>

    <ul className="mt-7 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
      {profile.expertise.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 border-b border-navy/10 py-4 text-[14px] font-light text-navy-dark"
        >
          <span
            aria-hidden="true"
            className="h-px w-5 shrink-0 bg-gold/70"
          />

          {item}
        </li>
      ))}
    </ul>
  </Reveal>
)}
    </Section>
  );
}