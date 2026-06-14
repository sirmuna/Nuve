function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      <div className="flex flex-col justify-center px-6 md:pl-16 pr-50 pt-32 md:pt-40 pb-12 md:pb-24 relative z-10 bg-cream">
        <p
          className="font-sans text-xs font-medium tracking-[0.20em] uppercase text-accent mb-4 md:mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Est. 2019 · Premium Brand Studio
        </p>
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.2] text-ink mb-6 md:mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Crafted for those who <em className="italic text-accent">dare</em> to
          be remembered.
        </h1>
        <p
          className="text-sm md:text-base font-light leading-relaxed text-muted max-w-sm mb-8 md:mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          We create brands that feel inevitable — identities so precisely
          crafted, your audience cannot imagine the world without them.
        </p>
        <div
          className="flex flex-wrap gap-4 md:gap-6 items-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#contact"
            className="inline-block px-8 md:px-10 py-3 md:py-3.5 bg-ink text-cream font-sans text-xs font-medium tracking-widest uppercase hover:bg-accent transition-colors"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-muted hover:text-ink transition-colors group"
          >
            Our Work
            <span className="transition-transform group-hover:translate-x-1 duration-300">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden bg-ink h-[60vw] md:h-auto flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a18] via-[#2d2a24] to-[#1a1815]"></div>

        <div
          className="w-[180px] sm:w-[220px] md:w-[260px] h-[240px] sm:h-[290px] md:h-[340px] border border-accent/30 relative opacity-0 animate-fade-in mb-12 md:mb-16"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="absolute top-4 left-4 -right-4 -bottom-4 border border-accent/15"></div>
          <div className="absolute inset-[20px] md:inset-[30px] bg-accent opacity-10"></div>
          <span className="absolute -bottom-10 md:-bottom-12 left-0 font-serif text-4xl md:text-6xl italic text-accent/25 whitespace-nowrap">
            nuvé
          </span>
        </div>
              <div
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.4s" }}
      >
        <span className="text-[0.65rem] tracking-widest uppercase text-cream/40">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent animate-scroll-pulse"></div>
      </div>
      </div>
    </section>
  );
}

export default Hero;
