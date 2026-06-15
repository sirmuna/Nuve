import Text from "@/components/Text";
import Button from "@/components/Button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* Left — content */}
      <motion.div
        className="flex flex-col justify-center px-6 md:pl-16 pr-20 pt-32 md:pt-40 pb-12 md:pb-24 relative z-10 bg-cream"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Text
            as="p"
            font="sans"
            size="xs"
            weight="medium"
            tracking="custom-0_20em"
            uppercase
            color="accent"
            className="mb-4 md:mb-6"
          >
            Est. 2019 · Premium Brand Studio
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Text
            as="h1"
            font="serif"
            size="4xl"
            weight="extralight"
            leading="custom-1_2"
            color="ink"
            className="sm:text-7xl md:text-6xl lg:text-7xl mb-6 md:mb-8"
          >
            Crafted for <br /> those who <br />
            <Text as="em" italic color="accent">
              dare
            </Text>{" "}
            to be <br /> remembered.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Text
            as="p"
            size="sm"
            weight="light"
            leading="relaxed"
            color="muted"
            className="md:text-base max-w-sm mb-8 md:mb-12"
          >
            We create brands that feel inevitable — identities so precisely
            crafted, your audience cannot imagine the world without them.
          </Text>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 md:gap-6 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button href="#contact" size="md">
            Start a Project
          </Button>
          <Button variant="ghost" href="#services" className="gap-2 group">
            Our Work
            <span className="transition-transform group-hover:translate-x-1 duration-300">
              →
            </span>
          </Button>
        </motion.div>
      </motion.div>
      {/* Right — visual */}
      <motion.div
        className="relative overflow-hidden bg-ink min-h-[420px] sm:min-h-[480px] md:h-auto flex items-center justify-center py-16 md:py-0"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-ink via-ink to-accent-dark/20"></div>

        <motion.div
          className="w-[clamp(160px,52vw,260px)] h-[clamp(220px,68vw,340px)] border border-accent/30 relative mb-14 md:mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="absolute top-3 left-3 -right-3 -bottom-3 sm:top-4 sm:left-4 sm:-right-4 sm:-bottom-4 border border-accent/15"></div>
          <div className="absolute inset-[16px] sm:inset-[20px] md:inset-[30px] bg-accent opacity-10"></div>
          <Text
            as="span"
            font="serif"
            size="3xl"
            italic
            color="accent-80"
            className="absolute -bottom-9 sm:-bottom-10 md:-bottom-12 left-0 sm:text-5xl md:text-6xl whitespace-nowrap opacity-25"
          >
            nuvé
          </Text>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Text
            as="span"
            size="custom-0_65rem"
            tracking="widest"
            uppercase
            color="cream-40"
          >
            Scroll
          </Text>
          <div className="w-px h-10 md:h-12 bg-linear-to-b from-accent/60 to-transparent animate-scroll-pulse"></div>
        </motion.div>
      </motion.div>{" "}
    </section>
  );
}

export default Hero;
