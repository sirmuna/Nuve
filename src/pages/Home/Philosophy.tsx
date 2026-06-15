import Text from "@/components/Text";
import { motion } from "framer-motion";

function Philosophy() {
  const stats = [
    { num: "140", suffix: "+", desc: "Brands Launched" },
    { num: "28", suffix: "+", desc: "Countries Reached" },
    { num: "96", suffix: "%", desc: "Client Retention" },
  ];

  return (
    <motion.section
      id="philosophy"
      className="bg-white grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center px-6 md:px-16 py-16 md:py-28 h-screen"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Text
          as="p"
          font="sans"
          size="xs"
          weight="medium"
          tracking="custom-0_3em"
          uppercase
          color="accent"
          className="mb-4"
        >
          Our Philosophy
        </Text>
        <Text
          as="h2"
          font="serif"
          size="3xl"
          weight="light"
          leading="tight"
          tracking="wide"
          color="ink"
          className="sm:text-4xl md:text-5xl lg:text-5xl"
        >
          Beauty is not a luxury. <br /> It is a{" "}
          <Text as="em" italic color="accent">
            Strategy
          </Text>
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Text
          as="p"
          size="sm"
          weight="normal"
          leading="loose"
          color="muted"
          className="md:text-base mb-8"
        >
          Every brand we touch is built on the belief that aesthetics and
          performance are not opposites — they are the same thing, viewed from
          different angles. We work with founders, CMOs, and creative directors
          who understand that perception is reality.
        </Text>
        <Text
          as="p"
          size="sm"
          weight="normal"
          leading="loose"
          color="muted"
          className="md:text-base mb-8"
        >
          Our process is rigorous. Our results are unmistakable. We do not make
          pretty things. We make things that convert, that resonate, that
          endure.
        </Text>

        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-warm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            >
              <Text
                as="div"
                font="serif"
                size="2xl"
                weight="light"
                color="ink"
                className="sm:text-3xl md:text-4xl lg:text-5xl mb-1"
              >
                {stat.num}
                <sup className="text-base md:text-lg">{stat.suffix}</sup>
              </Text>
              <Text
                as="div"
                size="custom-0_65rem"
                tracking="widest"
                uppercase
                color="muted"
                className="md:text-xs"
              >
                {stat.desc}
              </Text>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Philosophy;
