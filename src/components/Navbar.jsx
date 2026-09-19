import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/navigation";
import { profile } from "../data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navigation[0]?.id);

  // Solid navbar after the first scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently on screen
  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-navy-dark/95 backdrop-blur-sm shadow-[0_1px_0_rgba(198,161,91,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between lg:h-[88px]">
        {/* Wordmark */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex min-w-0 flex-col leading-none"
        >
          <span className="truncate font-serif text-lg tracking-[0.18em] text-ivory sm:text-xl">
            {profile.name}
          </span>
          <span className="mt-1 truncate font-sans text-[9.5px] tracking-[0.22em] text-gold sm:text-[10px]">
            {profile.title}
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {navigation.slice(1).map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative py-2 font-sans text-[12.5px] tracking-[0.08em] transition-colors duration-300 ${
                    active === item.id
                      ? "text-gold"
                      : "text-ivory/80 hover:text-gold"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                      active === item.id ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu button (everything below xl) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 p-2 text-ivory transition-colors hover:text-gold xl:hidden"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-navy-dark transition-[max-height,opacity] duration-500 ease-out xl:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="shell pb-8 pt-2">
          <ul className="divide-y divide-ivory/10">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-4 font-serif text-xl transition-colors ${
                    active === item.id ? "text-gold" : "text-ivory hover:text-gold"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
