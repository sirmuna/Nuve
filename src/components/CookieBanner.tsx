import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "nuve_cookie_consent";

export type ConsentValue = "accepted" | "declined" | null;

export function useCookieConsent(): ConsentValue {
  const stored = Cookies.get(COOKIE_KEY);
  return (stored as ConsentValue) ?? null;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const respond = (value: "accepted" | "declined") => {
    Cookies.set(COOKIE_KEY, value, { expires: 365, sameSite: "Lax" });
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl bg-ink text-cream px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-xl"
        >
          <p className="text-xs tracking-wide leading-relaxed flex-1 font-light">
            We use cookies to remember your preferences and improve your
            experience.{" "}
            <a
              href="/privacy"
              className="underline underline-offset-2 hover:text-accent transition-colors"
            >
              Learn more
            </a>
          </p>

          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => respond("declined")}
              className="text-xs tracking-widest uppercase px-4 py-2 border border-cream/30 hover:border-cream/60 transition-colors font-light"
            >
              Decline
            </button>
            <button
              onClick={() => respond("accepted")}
              className="text-xs tracking-widest uppercase px-4 py-2 bg-accent text-ink hover:bg-accent/80 transition-colors font-medium"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
