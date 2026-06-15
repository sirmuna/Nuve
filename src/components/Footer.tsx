import Text from "@/components/Text";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <motion.footer
        className="bg-ink px-6 md:px-16 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-accent/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="sm:col-span-2 md:col-span-2 lg:col-span-1 border-x">
          <Text
            as="div"
            font="serif"
            size="3xl"
            weight="semibold"
            tracking="custom-0_25em"
            color="cream"
            className="md:text-2xl mb-3 md:mb-4"
          >
            NUVÉ
          </Text>
          <Text
            as="p"
            font="serif"
            italic
            weight="light"
            color="cream-40"
            leading="relaxed"
            className="max-w-xs"
          >
            A brand studio for the ones who <br /> refuse to be ordinary.
          </Text>
        </div>

        <div>
          <Text
            as="p"
            size="custom-0_65rem"
            tracking="custom-0_25em"
            uppercase
            color="accent"
            weight="medium"
            className="mb-4 md:mb-6 text-center"
          >
            Studio
          </Text>
          <ul className="flex flex-col gap-3 list-none text-center">
            <li>
              <Text
                as="a"
                href="#philosophy"
                size="sm"
                weight="light"
                color="cream-50"
                className="hover:text-cream transition-colors"
              >
                Philosophy
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="#services"
                size="sm"
                weight="light"
                color="cream-50"
                className="hover:text-cream transition-colors"
              >
                Our Team
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="#testimonials"
                size="sm"
                weight="light"
                color="cream-50"
                className="hover:text-cream transition-colors"
              >
                Case Studies
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="#"
                size="sm"
                weight="light"
                color="cream-50"
                className="hover:text-cream transition-colors"
              >
                Press
              </Text>
            </li>
          </ul>
        </div>
        <div>
          <Text
            as="p"
            size="custom-0_65rem"
            tracking="custom-0_25em"
            uppercase
            color="accent"
            weight="medium"
            className="mb-4 md:mb-6 text-center"
          >
            Services
          </Text>
          <ul className="flex flex-col gap-3 list-none text-center">
            <li>
              <Text
                as="a"
                href="#philosophy"
                size="sm"
                weight="light"
                color="cream-50"
                className="hover:text-cream transition-colors"
              >
                About
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="#services"
                size="sm"
                weight="light"
                color="cream-50"
                className="hover:text-cream transition-colors"
              >
                Services
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="#testimonials"
                size="sm"
                weight="light"
                color="cream-50"
                className="hover:text-cream transition-colors"
              >
                Reviews
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="#"
                size="sm"
                weight="light"
                color="cream-50"
                className="hover:text-cream transition-colors"
              >
                Consulting
              </Text>
            </li>
          </ul>
        </div>
        <div className="border-x-2">
          <Text
            as="p"
            size="custom-0_65rem"
            tracking="custom-0_25em"
            uppercase
            color="accent"
            weight="medium"
            className="mb-4 md:mb-6 text-center"
          >
            Connect
          </Text>
          <ul className="flex flex-col gap-3 list-none text-center">
            <li>
              <Text
                as="a"
                href="#"
                size="sm"
                weight="light"
                color="cream-50"
                className="hover:text-cream transition-colors"
              >
                Instagram
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="#"
                size="sm"
                weight="light"
                color="cream-50"
                className="hover:text-cream transition-colors"
              >
                Behance
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="#"
                size="sm"
                weight="light"
                color="cream-50"
                className="hover:text-cream transition-colors"
              >
                LinkedIn
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="#contact"
                size="sm"
                weight="light"
                color="cream-50"
                className="hover:text-cream transition-colors"
              >
                Contact
              </Text>
            </li>
          </ul>
        </div>
      </motion.footer>

      <div
        className="px-6 md:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-4"
        style={{
          backgroundColor: "#0f0f0e",
          borderTop: "1px solid rgba(248, 244, 238, 0.07)",
        }}
      >
        <Text as="p" size="xs" color="cream-50" tracking="wider">
          © 2026 NUVÉ Studio. All rights reserved
        </Text>
        <div className="flex gap-6 items-center">
          <Text
            as="a"
            href="#"
            size="xs"
            tracking="widest"
            uppercase
            color="cream-50"
            className="hover:text-accent transition-colors"
          >
            Privacy
          </Text>
          <Text
            as="a"
            href="#"
            size="xs"
            tracking="widest"
            uppercase
            color="cream-50"
            className="hover:text-accent transition-colors"
          >
            Terms
          </Text>
          <Text
            as="a"
            href="#"
            size="xs"
            tracking="widest"
            uppercase
            color="cream-50"
            className="hover:text-accent transition-colors"
          >
            Cookies
          </Text>
        </div>
      </div>
    </>
  );
}

export default Footer;
