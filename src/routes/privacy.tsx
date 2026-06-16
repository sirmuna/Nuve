import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-cream text-ink px-6 md:px-24 pt-10 pb-32 max-w-3xl mx-auto"
    >
      <a
        href="/"
        className="inline-block mb-5 text-xs tracking-widest uppercase text-accent hover:text-accent transition-colors"
      >
        ← Back to Home
      </a>

      <div className="mb-12">
        <h1 className="font-serif text-5xl md:text-6xl tracking-custom-0_25em mb-2 text-center">
          NUVÉ
        </h1>
        <p className="text-xs tracking-widest uppercase text-accent text-center">
          Privacy Policy
        </p>
      </div>

      <section className="space-y-10 text-sm leading-relaxed font-light">
        <div>
          <h2 className="text-base font-medium tracking-widest uppercase mb-3">
            Cookies
          </h2>
          <p>
            NUVÉ uses cookies solely to remember your preferences across visits.
            We do not use cookies for advertising or to track you across other
            websites. You may decline cookies at any time — the site will
            continue to function normally.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium tracking-widest uppercase mb-3">
            Information We Collect
          </h2>
          <p>
            We only collect information you voluntarily provide, such as your
            name and email when you reach out via our contact form. This
            information is used solely to respond to your enquiry.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium tracking-widest uppercase mb-3">
            Third Parties
          </h2>
          <p>
            We do not sell, trade, or share your personal information with third
            parties. The site may be hosted on Vercel, whose infrastructure
            processes requests in order to serve the site.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-base font-medium tracking-widest uppercase mb-3">
            Contact
          </h2>
          <p>
            For any privacy-related questions, reach us at{" "}
            <a
              href="mailto:hello@nuve.studio"
              className="underline underline-offset-2 hover:text-accent transition-colors"
            >
              hello@nuve.studio
            </a>
            .
          </p>
        </div>
      </section>
    </motion.main>
  );
}
