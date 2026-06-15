import Text from "@/components/Text";
import { motion } from "framer-motion";

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
    <motion.section
      id="clients"
      className="bg-ink text-cream px-6 md:px-16 py-16 md:py-28"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
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
        color="accent-80"
        className="mb-4"
      >
        What Clients Say
      </Text>
      <Text
        as="h2"
        font="serif"
        size="3xl"
        weight="light"
        leading="tight"
        color="cream"
        className="sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl"
      >
        Results that speak
        <br />
        for themselves.
      </Text>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {clients.map((client, i) => (
          <motion.div
            key={i}
            className="border-t border-cream/10 pt-6 md:pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <Text
              as="p"
              font="serif"
              size="base"
              weight="light"
              italic
              leading="custom-1_8"
              tracking="wide"
              color="cream-85"
              className="md:text-lg mb-6 md:mb-8"
            >
              "{client.quote}"
            </Text>
            <Text
              as="p"
              size="custom-0_7rem"
              tracking="widest"
              uppercase
              color="accent"
            >
              {client.author}
            </Text>
            <Text
              as="p"
              size="custom-0_7rem"
              color="cream-35"
              tracking="wider"
              className="mt-1"
            >
              {client.role}
            </Text>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Clients;
