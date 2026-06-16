import { useState, useEffect } from "react";
import Text from "@/components/Text";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#philosophy", label: "PHILOSOPHY" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "CLIENTS" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 transition-all duration-400
          ${scrolled ? "bg-cream/90 backdrop-blur-md border-b border-accent/15" : "bg-transparent"}`}
      >
        <Text
          as="a"
          href="/"
          font="serif"
          size="xl"
          weight="medium"
          tracking="custom-0_4em"
          color={scrolled ? "ink" : "ink"}
          className="md:text-2xl"
        >
          NUVÉ
        </Text>

        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Text
                as="a"
                href={link.href}
                size="xs"
                weight="normal"
                tracking="custom-0_20em"
                uppercase
                color={scrolled ? "ink" : "cream"}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </Text>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 rounded"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            backgroundColor: scrolled ? "transparent" : "rgba(15, 15, 14, 0.1)",
          }}
        >
          <motion.span
            animate={
              mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
            }
            className="w-6 h-0.5"
            style={{ backgroundColor: "#0f0f0e" }}
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5"
            style={{ backgroundColor: "#0f0f0e" }}
          />
          <motion.span
            animate={
              mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="w-6 h-0.5"
            style={{ backgroundColor: "#0f0f0e" }}
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed right-0 top-0 bottom-0 z-50 w-3/4 max-w-sm bg-ink md:hidden flex flex-col"
            >
              <div className="p-6 border-b border-accent/20 flex justify-between items-center">
                <Text
                  as="span"
                  font="serif"
                  size="2xl"
                  weight="medium"
                  tracking="custom-0_25em"
                  color="accent"
                >
                  Menu
                </Text>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-cream"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Text
                        as="a"
                        href={link.href}
                        size="lg"
                        font="serif"
                        weight="light"
                        tracking="custom-0_20em"
                        uppercase
                        color="cream"
                        className="hover:text-accent transition-colors block py-2 border-b border-accent/10 hover:border-accent/30"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Text>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-accent/20">
                <Text
                  as="p"
                  size="xs"
                  color="cream-40"
                  tracking="wider"
                  className="text-center"
                >
                  © 2026 NUVÉ Studio
                </Text>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
