function Marquee() {
  const items = ['Visual Identity', 'Packaging Design', 'Digital Experience', 'Art Direction', 'Brand Positioning', 'Campaign Creation', 'Brand Strategy'];

  return (
    <div className="overflow-hidden bg-ink py-4 border-t border-b border-accent/20">
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12 font-serif italic text-sm md:text-base text-cream/50 tracking-wider">
            {item}
            <span className="text-[0.45rem] text-accent">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;