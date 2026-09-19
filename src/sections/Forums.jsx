import { events } from "../data/events";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import EventCard from "../components/EventCard";
import Reveal from "../components/Reveal";

export default function Forums() {
  return (
    <Section id="forums" tone="ivory">
      <SectionHeading
        title="Forums & Events"
        intro="Participation in international forums, panels and public debates."
      />

      {events.length === 0 ? (
        <p className="mt-10 text-[15px] text-muted">[Events to be added]</p>
      ) : (
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={`${event.title}-${i}`} delay={(i % 3) * 80} className="h-full">
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
