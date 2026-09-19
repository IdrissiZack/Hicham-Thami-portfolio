function MinimalHeader() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 bg-navy">
      <div className="shell">
        <div className="flex min-h-[82px] items-center justify-center">
          <div className="text-center">
            <p className="font-serif text-lg font-light italic tracking-[0.02em] text-ivory/90 sm:text-xl lg:text-2xl">
              “El diálogo abre caminos, la cooperación construye futuro.”
            </p>

            <div className="mx-auto mt-3 flex items-center justify-center gap-3">
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