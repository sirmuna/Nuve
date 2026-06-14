function Footer() {
  return (
    <>
      <footer className="bg-ink px-6 md:px-16 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-accent/20">
        <div className="sm:col-span-2 md:col-span-2 lg:col-span-1 border-x">
          <div className="font-serif text-3xl md:text-2xl font-semibold tracking-[0.25em] text-cream mb-3 md:mb-4">
            NUVÉ
          </div>
          <p className="font-serif italic font-light text-cream/40 leading-relaxed max-w-xs">
            A brand studio for the ones who <br /> refuse to be ordinary.
          </p>
        </div>

        <div>
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-accent font-medium mb-4 md:mb-6 text-center">
            Studio
          </p>
          <ul className="flex flex-col gap-3 list-none text-center">
            <li>
              <a
                href="#philosophy"
                className="text-sm font-light text-cream/50 hover:text-cream transition-colors"
              >
                Philosophy
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-sm font-light text-cream/50 hover:text-cream transition-colors"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-sm font-light text-cream/50 hover:text-cream transition-colors"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light text-cream/50 hover:text-cream transition-colors"
              >
                Press
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-accent font-medium mb-4 md:mb-6 text-center">
            Services
          </p>
          <ul className="flex flex-col gap-3 list-none text-center">
            <li>
              <a
                href="#philosophy"
                className="text-sm font-light text-cream/50 hover:text-cream transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-sm font-light text-cream/50 hover:text-cream transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-sm font-light text-cream/50 hover:text-cream transition-colors"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light text-cream/50 hover:text-cream transition-colors"
              >
                Consulting
              </a>
            </li>
          </ul>
        </div>
        <div className="border-x-2">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-accent font-medium mb-4 md:mb-6 text-center">
            Connect
          </p>
          <ul className="flex flex-col gap-3 list-none text-center">
            <li>
              <a
                href="#"
                className="text-sm font-light text-cream/50 hover:text-cream transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light text-cream/50 hover:text-cream transition-colors"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light text-cream/50 hover:text-cream transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm font-light text-cream/50 hover:text-cream transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <div className="bg-ink px-6 md:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-cream/[0.07]">
        <p className="text-[0.7rem] text-cream/25 tracking-wider">
          © 2026 NUVÉ Studio. All rights reserved
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-[0.7rem] tracking-widest uppercase text-cream/25 hover:text-accent transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-[0.7rem] tracking-widest uppercase text-cream/25 hover:text-accent transition-colors"
          >
            Terms
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;