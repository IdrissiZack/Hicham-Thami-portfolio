import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon } from "../components/icons/BrandIcons";
import { profile } from "../data/profile";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  // No backend: the message is handed to the visitor's own mail client.
  const handleSend = (e) => {
    e.preventDefault();
    const to = profile.contact.email;
    if (!to) return;
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      form.subject || "Enquiry"
    )}&body=${encodeURIComponent(body)}`;
  };

  const details = [
    profile.contact.email && {
      icon: Mail,
      label: "Email",
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
    },
    profile.contact.phone && {
      icon: Phone,
      label: "Telephone",
      value: profile.contact.phone,
      href: `tel:${profile.contact.phone.replace(/\s/g, "")}`,
    },
    profile.social.linkedin && {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "Professional profile",
      href: profile.social.linkedin,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.contact.location || profile.location,
    },
  ].filter(Boolean);

  const field =
    "w-full border border-ivory/20 bg-transparent px-4 py-3 font-sans text-[15px] text-ivory placeholder:text-ivory/35 transition-colors focus:border-gold focus:outline-none";

  return (
    <Section id="contact" tone="navy">
      <SectionHeading
        title="Contact"
        tone="dark"
        intro="For institutional enquiries, invitations and cooperation proposals."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Coordinates */}
        <Reveal className="lg:col-span-5">
          <ul className="space-y-7">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <Icon size={18} strokeWidth={1.4} className="mt-1 shrink-0 text-gold" />
                <div className="min-w-0">
                  <p className="font-sans text-[11.5px] tracking-[0.14em] text-ivory/50">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="break-words font-serif text-xl text-ivory transition-colors hover:text-gold"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="break-words font-serif text-xl text-ivory">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {!profile.contact.email && (
            <p className="mt-8 font-sans text-[13px] text-ivory/45">
              [Contact details to be added in src/data/profile.js]
            </p>
          )}
        </Reveal>

        {/* Form */}
        <Reveal delay={120} className="lg:col-span-7">
          <form onSubmit={handleSend} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                id="name"
                className={field}
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className={field}
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                className={field}
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className={`${field} resize-y`}
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={!profile.contact.email}
                className="w-full border border-gold bg-gold px-7 py-3.5 font-sans text-[13px] tracking-[0.14em] text-navy-dark transition-colors duration-300 hover:bg-gold-soft hover:border-gold-soft disabled:cursor-not-allowed disabled:border-ivory/20 disabled:bg-transparent disabled:text-ivory/40 sm:w-auto"
              >
                Send message
              </button>
              <p className="mt-3 font-sans text-[12px] text-ivory/40">
                {profile.contact.email
                  ? "Opens your email application with the message ready to send."
                  : "Add an email address in src/data/profile.js to enable this form."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
