function Clients() {
  const clients = [
    {
      quote:
        "Working with NUVÉ felt less like a vendor relationship and more like having a co-founder who happened to be a genius at brand. The results were immediate and lasting.",
      author: "Adaeze Okonkwo",
      role: "Founder, Solana Foods",
    },
    {
      quote:
        "Three months after our rebrand, we raised our prices by 40% and saw a 60% increase in inbound inquiry quality. NUVÉ paid for itself in the first quarter.",
      author: "Marcus Reinholt",
      role: "CEO, Arctis Ventures",
    },
    {
      quote:
        "They asked questions no one else had asked. They understood our audience before we did. The brand they created is the one we have always meant to have.",
      author: "Yemi Fashola",
      role: "Creative Director, Luma Studio",
    },
  ];

  return (
    <section
      id="clients"
      className="bg-ink text-cream px-6 md:px-16 py-16 md:py-28"
    >
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent/80 mb-4">
        What Clients Say
      </p>
      <h2 className="font-serif text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-2xl">
        Results that speak
        <br />
        for themselves.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-16">
        {clients.map((client, i) => (
          <div key={i} className="border-t border-cream/10 pt-6 md:pt-8">
            <p className="font-serif text-base md:text-lg font-light italic leading-[1.8] tracking-wide text-cream/85 mb-6 md:mb-8">
              "{client.quote}"
            </p>
            <p className="text-[0.7rem] tracking-widest uppercase text-accent">
              {client.author}
            </p>
            <p className="text-[0.7rem] text-cream/35 tracking-wider mt-1">
              {client.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
