import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0,
            y: 100,
            rotate: -180,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
            rotate: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0,
            y: 100,
            rotate: 180,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.15,
            y: -6,
            rotate: 8,
            boxShadow: "0px 0px 25px rgba(255, 180, 80, 0.7)",
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-49 w-14 h-14 bg-accent text-cream rounded-full flex items-center justify-center shadow-xl"
          aria-label="Back to top"
        >
          {/* Animated Glow Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent"
            animate={{
              scale: [1, 1.6],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* Arrow */}
          <motion.svg
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 relative z-49"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
