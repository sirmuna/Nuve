function Services() {
  const services = [
    {
      num: "01",
      name: "Brand Identity",
      desc: "Logos, type systems, colour palettes, and usage guides that give your brand an unmistakable presence across every medium.",
    },
    {
      num: "02",
      name: "Brand Strategy",
      desc: "Positioning, narrative frameworks, and competitive differentiation that make you the only logical choice in your market.",
    },
    {
      num: "03",
      name: "Digital Experience",
      desc: "Websites, landing pages, and digital campaigns built for performance — where beautiful design meets measurable results.",
    },
    {
      num: "04",
      name: "Packaging & Print",
      desc: "Physical touchpoints that stop hands in motion. Unboxing experiences, editorial print, and retail presence design.",
    },
    {
      num: "05",
      name: "Campaign Creation",
      desc: "Full creative campaigns — concept through execution — for brands launching, pivoting, or scaling to new audiences.",
    },
    {
      num: "06",
      name: "Brand Consulting",
      desc: "Fractional creative direction and strategic counsel for teams who need sharp thinking without a full-time overhead.",
    },
  ];

  return (
    <section id="services" className="bg-cream px-6 md:px-16 py-16 md:py-28">
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
        what we do
      </p>{" "}
      <div className="flex flex-row md:flex-row justify-between items-start md:items-end gap-4 mb-12 md:mb-16 w-full">
        <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-none w-1/3 pr-10">
          Services that move the <em className="italic text-accent">Needle</em>
        </p>
        <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-muted hover:text-ink transition-colors group"
          >
            View all Services
            <span className="transition-transform group-hover:translate-x-1 duration-300">
              →
            </span>
          </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-warm">
        {services.map((service) => (
          <div
            key={service.num}
            className="bg-cream p-6 md:p-10 relative overflow-hidden transition-colors duration-300 hover:bg-ink group"
          >
            <div className="font-serif text-xs font-light text-accent mb-6 md:mb-8 tracking-wider transition-colors duration-300 group-hover:text-cream">
              {service.num}
            </div>
            <div className="w-8 h-px bg-warm mb-4 md:mb-6 transition-colors duration-300 group-hover:bg-accent"></div>
            <h3 className="font-serif text-xl md:text-2xl font-normal text-ink mb-2 md:mb-4 leading-tight transition-colors duration-300 group-hover:text-cream">
              {service.name}
            </h3>
            <p className="text-sm font-light leading-relaxed text-muted transition-colors duration-300 group-hover:text-cream/60">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
