import { ChevronDown } from "lucide-react";
import { profile } from "../data/profile";
import SmartImage from "../components/SmartImage";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy px-0 pt-[100px] pb-16 lg:pt-[110px] lg:pb-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_80%_at_75%_20%,rgba(198,161,91,0.12),transparent_60%)]"
      />

      <div className="shell relative z-10 grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-16">

       {/* Text */}
<div className="order-2 lg:order-1 lg:col-span-7">

  <h1 className="max-w-[8ch] font-serif text-[3.4rem] font-light leading-[0.92] tracking-[-0.02em] text-ivory sm:text-7xl lg:text-[5.8rem]">
    Hicham
    <br />
    Thami
  </h1>

  <div className="mt-7 max-w-[48ch] space-y-2">
    <p className="font-serif text-[17px] font-medium leading-relaxed tracking-[0.02em] text-gold sm:text-[19px]">
  {profile.title}
</p>

   <p className="font-sans text-[12px] font-light tracking-[0.06em] text-ivory/50 sm:text-[13px]">
  {profile.subtitle}
</p>
  </div>

  <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
    <Button href="#profile" variant="solid">
      Explore Profile
    </Button>

    <Button href="#contact" variant="outline">
      Contact
    </Button>
  </div>

</div>

        {/* Portrait */}
        <div className="order-1 lg:order-2 lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[290px] sm:max-w-[350px] lg:max-w-none">

            <SmartImage
              src={profile.portrait}
              alt={`${profile.name}, ${profile.title}`}
              ratio="aspect-[4/5]"
              tone="dark"
              loading="eager"
              imgClassName="slow-zoom"
            />

          </div>
        </div>

      </div>

      <a
        href="#profile"
        aria-label="Scroll to profile"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-ivory/40 transition-colors hover:text-gold lg:block"
      >
        <ChevronDown size={20} strokeWidth={1.2} />
      </a>
    </section>
  );
}