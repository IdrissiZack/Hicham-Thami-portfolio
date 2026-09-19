import { Mail, Globe } from "lucide-react";
import { LinkedInIcon, InstagramIcon } from "./icons/BrandIcons";
import { profile } from "../data/profile";
import { navigation } from "../data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    profile.social.linkedin && {
      icon: LinkedInIcon,
      href: profile.social.linkedin,
      label: "LinkedIn",
    },
    profile.contact.email && {
      icon: Mail,
      href: `mailto:${profile.contact.email}`,
      label: "Email",
    },
    profile.social.instagram && {
      icon: InstagramIcon,
      href: profile.social.instagram,
      label: "Instagram",
    },
    profile.social.website && {
      icon: Globe,
      href: profile.social.website,
      label: "Website",
    },
  ].filter(Boolean);

  return (
    <footer className="bg-navy-dark text-ivory">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl tracking-[0.12em]">{profile.name}</p>
            <p className="mt-2 font-sans text-[12.5px] tracking-[0.12em] text-gold">
              {profile.title}
            </p>
            <p className="mt-1 font-sans text-[12.5px] text-ivory/55">
              {profile.location}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="font-sans text-[13px] text-ivory/65 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            {links.length > 0 ? (
              <ul className="flex flex-wrap gap-3">
                {links.map(({ icon: Icon, href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center border border-ivory/20 text-ivory/75 transition-colors hover:border-gold hover:text-gold"
                    >
                      <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-sans text-[13px] text-ivory/45">
                [Professional links to be added]
              </p>
            )}
          </div>
        </div>

        <div className="rule-gold my-10 opacity-40" />

        <p className="text-center font-sans text-[12px] text-ivory/45">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
