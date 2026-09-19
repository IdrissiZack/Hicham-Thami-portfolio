import Reveal from "./Reveal";

export default function SectionHeading({
  title,
  intro,
  tone = "light",
  align = "left",
  number,
}) {
  const isDark = tone === "dark";

  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      {number && (
        <span
          className={`font-sans text-[10px] font-medium tracking-[0.28em] ${
            isDark ? "text-gold" : "text-gold"
          }`}
        >
          {number}
        </span>
      )}

    <h2
  className={`mt-3 font-serif text-[2.2rem] leading-[1.05] sm:text-4xl lg:text-[3.2rem] ${
    isDark ? "text-ivory" : "text-navy-dark"
  }`}
>
  {title}
</h2>
      {intro && (
        <p
          className={`mt-5 max-w-[60ch] text-[15px] font-light leading-[1.9] sm:text-base ${
            isDark ? "text-ivory/65" : "text-navy-dark/65"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}