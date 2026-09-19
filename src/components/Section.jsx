/**
 * Section — one page section with consistent vertical rhythm.
 * tone: "ivory" | "white" | "navy"
 */
export default function Section({ id, tone = "ivory", className = "", children }) {
  const tones = {
    ivory: "bg-ivory text-ink",
    white: "bg-white text-ink",
    navy: "bg-navy text-ivory",
  };

  return (
    <section
      id={id}
      className={`${tones[tone]} py-16 sm:py-20 lg:py-28 ${className}`}
    >
      <div className="shell">{children}</div>
    </section>
  );
}
