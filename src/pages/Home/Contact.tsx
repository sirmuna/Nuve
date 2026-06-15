import { useState } from "react";

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
    <section
      id="contact"
      className="bg-white grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start px-6 md:px-16 py-16 md:py-28"
    >
      <div>
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
          Get in Touch
        </p>
        <h2 className="font-serif text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-4 md:mb-6 pr-10">
          Ready to build something{" "}
          <em className="italic text-accent">worth remembering?</em>
        </h2>
        <p className="text-sm md:text-base font-light leading-relaxed text-muted mb-8 md:mb-12 max-w-md">
          Whether you're starting from scratch or refining what exists, we'd
          like to hear about your challenge. Projects typically begin within 3–4
          weeks of enquiry.
        </p>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-accent font-medium mb-1">
              Email
            </p>
            <p className="font-serif text-base md:text-lg font-light text-ink">
              studio@nuve.co
            </p>
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-accent font-medium mb-1">
              Phone
            </p>
            <p className="font-serif text-base md:text-lg font-light text-ink">
              +1 (212) 555 0194
            </p>
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-accent font-medium mb-1">
              Location
            </p>
            <p className="font-serif text-base md:text-lg font-light text-ink">
              New York · Lagos · London
            </p>
          </div>
        </div>
      </div>

      <div>
        {submitted ? (
          <div className="p-6 bg-accent/8 border border-accent/30 text-center">
            <p className="font-serif italic text-base md:text-lg text-accent-dark">
              Thank you — we'll be in touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 md:gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] tracking-widest uppercase text-muted font-medium">
                  First Name
                </label>
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
                <label className="text-[0.65rem] tracking-widest uppercase text-muted font-medium">
                  Last Name
                </label>
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
              <label className="text-[0.65rem] tracking-widest uppercase text-muted font-medium">
                Email Address
              </label>
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
              <label className="text-[0.65rem] tracking-widest uppercase text-muted font-medium">
                Company / Brand
              </label>
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
              <label className="text-[0.65rem] tracking-widest uppercase text-muted font-medium">
                Service OF INTEREST
              </label>
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
              <label className="text-[0.65rem] tracking-widest uppercase text-muted font-medium">
                Estimated Budget
              </label>
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
              <label className="text-[0.65rem] tracking-widest uppercase text-muted font-medium">
                Tell us about your project
              </label>
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

            <p className="text-xs text-muted font-light leading-relaxed">
              We respond to all enquiries within 48 hours. Your information is
              never shared with third parties.
            </p>
            <button
              type="submit"
              className="self-start px-10 py-4 bg-ink text-cream text-xs font-medium tracking-widest uppercase hover:bg-accent transition-colors"
            >
              Send Enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
