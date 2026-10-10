
import { engagements } from "../data/engagements";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import EngagementCard from "../components/EngagementCard";
import Reveal from "../components/Reveal";

export default function Engagements() {
  const upcomingVisits = engagements.filter(
    (item) => item.type === "Official Visit" && item.status === "upcoming"
  );

  const completedEngagements = engagements.filter(
    (item) => item.status === "completed"
  );

  return (
    <Section id="engagements" tone="navy">
      <SectionHeading
        eyebrow="Diplomatic Engagements"
        title="Engagements & Official Visits"
        description="Meetings and initiatives fostering dialogue and cooperation."
      />

      {upcomingVisits.length > 0 && (
      <div className="mt-12 -mx-4 bg-navy px-4 py-8 sm:-mx-8 sm:px-8 sm:py-10">
          <h3 className="mb-7 font-serif text-2xl text-ivory">
            Upcoming Presidential Visits
          </h3>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingVisits.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 3) * 80}
                className="h-full"
              >
                <EngagementCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {completedEngagements.length > 0 && (
        <div className="mt-12">
          <h3 className="mb-7 font-serif text-3xl text-ivory sm:text-4xl">
  Past Activities & Initiatives
</h3>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {completedEngagements.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 3) * 80}
                className="h-full"
              >
                <EngagementCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}