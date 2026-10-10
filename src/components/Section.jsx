/**

* Section — one page section with consistent vertical rhythm.
* tone: "ivory" | "white" | "navy" | "dark"
  */
  export default function Section({ id, tone = "ivory", className = "", children }) {
  const tones = {
  ivory: "bg-ivory text-ink",
  white: "bg-white text-ink",
  navy: "bg-navy text-ivory",
  dark: "bg-[#34343D] text-ivory",
  };

return (
<section
id={id}
className={`${tones[tone] || tones.ivory} py-16 sm:py-20 lg:py-28 ${className}`}
> <div className="shell">{children}</div> </section>
);
}
