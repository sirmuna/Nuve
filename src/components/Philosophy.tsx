function Philosophy() {
  const stats = [
    { num: "140", suffix: "+", desc: "Brands Launched" },
    { num: "28", suffix: "+", desc: "Countries Reached" },
    { num: "96", suffix: "%", desc: "Client Retention" },
  ];

  return (
    <section
      id="philosophy"
      className="bg-white grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center px-6 md:px-16 py-16 md:py-28 h-screen"
    >
      <div>
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
          Our Philosophy
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light leading-tight tracking-wide text-ink">
          Beauty is not a luxury. <br /> It is a{" "}
          <em className="italic text-accent">Strategy</em>
        </h2>
      </div>

      <div>
        <p className="text-sm md:text-base font-normal leading-loose text-muted mb-8">
          Every brand we touch is built on the belief that aesthetics and
          performance are not opposites — they are the same thing, viewed from
          different angles. We work with founders, CMOs, and creative directors
          who understand that perception is reality.
        </p>
        <p className="text-sm md:text-base font-normal leading-loose text-muted mb-8">
          Our process is rigorous. Our results are unmistakable. We do not make
          pretty things. We make things that convert, that resonate, that
          endure.
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-warm">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-ink mb-1">
                {stat.num}
                <sup className="text-base md:text-lg">{stat.suffix}</sup>
              </div>
              <div className="text-[0.6rem] md:text-xs uppercase tracking-widest text-muted">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
