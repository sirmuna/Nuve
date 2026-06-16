import { useState } from "react";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    brand: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address";
    if (!form.brand.trim()) newErrors.brand = "Company/Brand name is required";
    if (!form.message.trim())
      newErrors.message = "Please tell us about your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(form);
      setSubmitted(true);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-cream border text-sm font-light text-ink outline-none transition-colors ${errors[field] ? "border-red-500 focus:border-red-500" : "border-warm focus:border-accent"}`;

  const selectClass =
    "w-full px-4 py-3 pr-10 bg-cream border border-warm text-sm font-light text-ink outline-none focus:border-accent transition-colors appearance-none cursor-pointer";

  const selectStyle = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237a7268' stroke-width='1.5' fill='none'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat" as const,
    backgroundPosition: "right 1rem center",
  };

  const ErrorMsg = ({ field }: { field: string }) =>
    errors[field] ? (
      <p className="text-xs mt-1" style={{ color: "#ef4444" }}>
        {errors[field]}
      </p>
    ) : null;

  const Label = ({
    htmlFor,
    children,
  }: {
    htmlFor: string;
    children: string;
  }) => (
    <Text
      as="label"
      htmlFor={htmlFor}
      size="custom-0_65rem"
      tracking="widest"
      uppercase
      color="muted"
      weight="medium"
    >
      {children}
    </Text>
  );

  return (
    <motion.section
      id="contact"
      className="bg-white grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start px-6 md:px-16 py-16 md:py-28"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Left column */}
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

      {/* Right column */}
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
            {/* First + Last name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="Amara"
                  value={form.firstName}
                  onChange={handleChange}
                  className={inputClass("firstName")}
                />
                <ErrorMsg field="firstName" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                  placeholder="Williams"
                  value={form.lastName}
                  onChange={handleChange}
                  className={inputClass("lastName")}
                />
                <ErrorMsg field="lastName" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email Address</Label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              <ErrorMsg field="email" />
            </div>

            {/* Brand */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="brand">Company / Brand</Label>
              <input
                id="brand"
                type="text"
                name="brand"
                autoComplete="organization"
                placeholder="Your brand name"
                value={form.brand}
                onChange={handleChange}
                className={inputClass("brand")}
              />
              <ErrorMsg field="brand" />
            </div>

            {/* Service */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="service">Service of Interest</Label>
              <select
                id="service"
                name="service"
                autoComplete="off"
                value={form.service}
                onChange={handleChange}
                className={selectClass}
                style={selectStyle}
              >
                <option value="">— Select a service —</option>
                <option value="brand-identity">Brand Identity</option>
                <option value="brand-strategy">Brand Strategy</option>
                <option value="digital-experience">Digital Experience</option>
                <option value="packaging-print">Packaging and Print</option>
                <option value="campaign-creation">Campaign Creation</option>
                <option value="brand-consulting">Brand Consulting</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="budget">Estimated Budget</Label>
              <select
                id="budget"
                name="budget"
                autoComplete="off"
                value={form.budget}
                onChange={handleChange}
                className={selectClass}
                style={selectStyle}
              >
                <option value="">— Select a range —</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 – $15,000</option>
                <option value="15k-50k">$15,000 – $50,000</option>
                <option value="50k-plus">$50,000+</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Tell us about your project</Label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                placeholder="Describe what you're building, where you are now, and where you want to go..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={inputClass("message") + " resize-y min-h-[130px]"}
              />
              <ErrorMsg field="message" />
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
