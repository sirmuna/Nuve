import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 transition-all duration-400
        ${scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-accent/15' : 'bg-transparent'}`}
    >
      <a href="/" className="font-serif text-xl md:text-2xl font-medium tracking-[0.4em] text-ink">
        NUVÉ
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        <li><a href="#philosophy" className="text-xs font-normal tracking-[0.2em] uppercase text-ink hover:text-accent transition-colors delay-30">PHILOSOPHY</a></li>
        <li><a href="#services" className="text-xs font-normal tracking-[0.2em] uppercase text-ink hover:text-accent transition-colors">Services</a></li>
        <li><a href="#testimonials" className="text-xs font-normal tracking-[0.2em] uppercase text-ink hover:text-accent transition-colors">CLIENTS</a></li>
        <li><a href="#contact" className="text-xs font-normal tracking-[0.2em] uppercase text-ink hover:text-accent transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;