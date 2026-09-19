/**
 * Button — renders an <a> (link / anchor). Two institutional variants.
 */
export default function Button({
  href = "#",
  variant = "solid", // "solid" | "outline"
  external = false,
  className = "",
  children,
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 text-[13px] tracking-[0.14em] font-sans font-medium transition-colors duration-300 border";
  const variants = {
    solid:
      "bg-gold text-navy-dark border-gold hover:bg-gold-soft hover:border-gold-soft",
    outline:
      "bg-transparent text-ivory border-ivory/35 hover:border-gold hover:text-gold",
    outlineDark:
      "bg-transparent text-navy border-navy/25 hover:border-gold hover:text-gold",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
