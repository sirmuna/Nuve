import { useState } from "react";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    brand: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
  };

  return (
    <motion.section
      id="contact"
      className="bg-white grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start px-6 md:px-16 py-16 md:py-28"
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
          Get in Touch
        </Text>
        <Text
          as="h2"
          font="serif"
          size="3xl"
          weight="light"
          leading="tight"
          color="ink"
          className="sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 pr-10"
        >
          Ready to build something{" "}
          <Text as="em" italic color="accent">
            worth remembering?
          </Text>
        </Text>
        <Text
          as="p"
          size="sm"
          weight="light"
          leading="relaxed"
          color="muted"
          className="md:text-base mb-8 md:mb-12 max-w-md"
        >
          Whether you're starting from scratch or refining what exists, we'd
          like to hear about your challenge. Projects typically begin within 3–4
          weeks of enquiry.
        </Text>
        <div className="flex flex-col gap-6">
          <div>
            <Text
              as="p"
              size="custom-0_65rem"
              tracking="custom-0_25em"
              uppercase
              color="accent"
              weight="medium"
              className="mb-1"
            >
              Email
            </Text>
            <Text
              as="p"
              font="serif"
              size="base"
              weight="light"
              color="ink"
              className="md:text-lg"
            >
              studio@nuve.co
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
              className="mb-1"
            >
              Phone
            </Text>
            <Text
              as="p"
              font="serif"
              size="base"
              weight="light"
              color="ink"
              className="md:text-lg"
            >
              +1 (212) 555 0194
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
              className="mb-1"
            >
              Location
            </Text>
            <Text
              as="p"
              font="serif"
              size="base"
              weight="light"
              color="ink"
              className="md:text-lg"
            >
              New York · Lagos · London
            </Text>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {submitted ? (
          <motion.div
            className="p-6 bg-accent/8 border border-accent/30 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Text
              as="p"
              font="serif"
              italic
              size="base"
              color="accent-dark"
              className="md:text-lg"
            >
              Thank you — we'll be in touch soon.
            </Text>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="flex flex-col gap-2">
                <Text
                  as="label"
                  size="custom-0_65rem"
                  tracking="widest"
                  uppercase
                  color="muted"
                  weight="medium"
                >
                  First Name
                </Text>
                <input
                  type="text"
                  name="name"
                  placeholder="Amara"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cream border border-warm text-sm font-light text-ink outline-none focus:border-accent transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Text
                  as="label"
                  size="custom-0_65rem"
                  tracking="widest"
                  uppercase
                  color="muted"
                  weight="medium"
                >
                  Last Name
                </Text>
                <input
                  type="text"
                  name="name"
                  placeholder="Williams"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cream border border-warm text-sm font-light text-ink outline-none focus:border-accent transition-colors"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Text
                as="label"
                size="custom-0_65rem"
                tracking="widest"
                uppercase
                color="muted"
                weight="medium"
              >
                Email Address
              </Text>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cream border border-warm text-sm font-light text-ink outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Text
                as="label"
                size="custom-0_65rem"
                tracking="widest"
                uppercase
                color="muted"
                weight="medium"
              >
                Company / Brand
              </Text>
              <input
                type="text"
                name="name"
                placeholder="Your brand name"
                value={form.brand}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cream border border-warm text-sm font-light text-ink outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            {/* SERVICE OF INTEREST DROPDOWN */}
            <div className="flex flex-col gap-2">
              <Text
                as="label"
                size="custom-0_65rem"
                tracking="widest"
                uppercase
                color="muted"
                weight="medium"
              >
                Service OF INTEREST
              </Text>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-10 bg-cream border border-warm text-sm font-light text-ink outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237a7268' stroke-width='1.5' fill='none'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                }}
              >
                <option value="">—Select a service—</option>
                <option value="brand-identity">Brand Identity</option>
                <option value="brand strategy">Brand Strategy</option>
                <option value="digital experience">Digital Experience</option>
                <option value="packaging and print">Packaging and print</option>
                <option value="campaign creation">Campaign creation</option>
                <option value="brand Consulting">Brand Consulting</option>
                <option value="not sure yet">Not sure yet</option>
              </select>
            </div>
            {/* ESTIMATED BUDGET DROPDOWN */}
            <div className="flex flex-col gap-2">
              <Text
                as="label"
                size="custom-0_65rem"
                tracking="widest"
                uppercase
                color="muted"
                weight="medium"
              >
                Estimated Budget
              </Text>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-10 bg-cream border border-warm text-sm font-light text-ink outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237a7268' stroke-width='1.5' fill='none'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                }}
              >
                <option value="">—Select a range—</option>
                <option value="under $5,000">Under $5,000</option>
                <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                <option value="$15,000 – $50,000">$15,000 – $50,000</option>
                <option value="$50,000+">$50,000+</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <Text
                as="label"
                size="custom-0_65rem"
                tracking="widest"
                uppercase
                color="muted"
                weight="medium"
              >
                Tell us about your project
              </Text>
              <textarea
                name="message"
                placeholder="Describe what you're building, where you are now, and where you want to go..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-cream border border-warm text-sm font-light text-ink outline-none focus:border-accent transition-colors resize-y min-h-[130px]"
                required
              ></textarea>
            </div>

            <Text
              as="p"
              size="xs"
              color="muted"
              weight="light"
              leading="relaxed"
            >
              We respond to all enquiries within 48 hours. Your information is
              never shared with third parties.
            </Text>
            <Button type="submit" size="lg" className="self-start">
              Send Enquiry
            </Button>
          </motion.form>
        )}
      </motion.div>
    </motion.section>
  );
}

export default Contact;
