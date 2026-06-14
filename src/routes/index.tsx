import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <Home />
      <Marquee />
      <Philosophy />
      <Services />
      <Clients />
      <Contact />
    </div>
  );
}

function Home() {
  return (
    <main className="pt-18 flex flex-row items-center justify-center w-full">
      <div className="w-1/2 bg-[#F5F0E6] h-screen pl-15 pr-30 justify-center flex flex-col">
        <p className="text-xs tracking-[0.25em] text-[#B8922A] mb-8 font-sans uppercase font-semibold">
          Est. 2019 · Premium Brand Studio
        </p>
        <h1 className="font-serif text-[5.0rem] leading-[1.05] text-[#1a1a1a] mb-10">
          Crafted for those who{" "}
          <em className="text-[#B8922A] not-italic font-serif italic">dare</em>{" "}
          to be remembered.
        </h1>
        <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-sm">
          We create brands that feel inevitable — identities so precisely
          crafted, your audience cannot imagine the world without them.
        </p>
        <div className="flex items-center gap-6 mt-10">
          <button className="bg-[#1a1a1a] text-white text-xs tracking-[0.15em] font-semibold px-8 py-4 hover:bg-[#333] transition-colors">
            START A PROJECT
          </button>
          <button className="text-xs tracking-[0.15em] text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors flex items-center gap-2">
            OUR WORK <span>→</span>
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-[#21201D] h-screen flex items-center justify-center relative overflow-hidden pb-50">
        {/* Outer thin frame */}
        <div className="border border-[#4a4530]/40 w-[300px] h-[380px] flex items-center justify-center relative">
          {/* Inner solid block */}
          <div className="bg-[#3a3424]/60 w-[220px] h-[300px]" />

          {/* nuvé script - bottom left, overlapping the frame */}
          <span className="absolute bottom-[-30px] left-4 font-serif italic text-[#B8922A]/70 text-6xl">
            nuvé
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-3">
          <span className="text-[11px] tracking-[0.3em] text-[#6b6450]">
            SCROLL
          </span>
          <div className="w-px h-10 bg-[#6b6450]" />
        </div>
      </div>
    </main>
  );
}

function Philosophy() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-18 min-h-screen flex items-center justify-around w-full"
    >
      <div className="p-20 w-1/2">
        <p className="text-xs tracking-[0.25em] text-[#B8922A] mb-8 font-sans uppercase font-semibold">
          Our Philosophy
        </p>
        <h1 className="font-serif text-[3.0rem] leading-[1.05] text-[#1a1a1a] mb-10">
          Beauty is not a luxury. <br /> It is a{" "}
          <em className="text-[#B8922A] not-italic font-serif italic">
            strategy
          </em>{" "}
        </h1>
      </div>
      <div className="p-10 w-1/2 ">
        <p className="text-[300] text-[#6b6b6b] leading-relaxed max-w-sm">
          Every brand we touch is built on the belief that aesthetics and
          performance are not opposites — they are the same thing, viewed from
          different angles. We work with founders, CMOs, and creative directors
          who understand that perception is reality.
        </p>
        <p className="text-[#6b6b6b] leading-relaxed max-w-sm pt-10 text-weight-[300] line-1.85">
          Our process is rigorous. Our results are unmistakable. We do not make
          pretty things. We make things that convert, that resonate, that
          endure.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-18 min-h-screen flex items-center justify-center"
    >
      <h2 className="font-serif text-5xl">Services</h2>
    </section>
  );
}

function Clients() {
  return (
    <section
      id="clients"
      className="scroll-mt-18 min-h-screen flex items-center justify-center"
    >
      <h2 className="font-serif text-5xl">Clients</h2>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-18 min-h-screen flex items-center justify-center"
    >
      <h2 className="font-serif text-5xl">Contact</h2>
    </section>
  );
}
