import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import Forums from "./sections/Forums";
import Engagements from "./sections/Engagements";
import Contact from "./sections/Contact";

function MinimalHeader() {
  return (
   <header className="fixed left-0 right-0 top-0 z-50 bg-navy">
      <div className="shell">
        <div className="flex min-h-[62px] items-center justify-center">
          <div className="text-center">
            <p className="font-serif text-lg font-light italic tracking-[0.02em] text-ivory/90 sm:text-xl lg:text-2xl">
              “El diálogo abre caminos, la cooperación construye futuro.”
            </p>

            <div className="mx-auto mt-2 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold/60" />

              <span className="font-sans text-[8px] font-medium tracking-[0.32em] text-gold/75 sm:text-[9px]">
                DIÁLOGO · COOPERACIÓN · FUTURO
              </span>

              <span className="h-px w-8 bg-gold/60" />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gold/25" />
      </div>
    </header>
  );
}

export default function App() {
  return (
    <>
      <a
        href="#profile"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-gold focus:px-4 focus:py-2 focus:text-navy-dark"
      >
        Skip to content
      </a>

      <MinimalHeader />

      <main>
        <Hero />
        <Profile />
        <Forums />
        <Engagements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}