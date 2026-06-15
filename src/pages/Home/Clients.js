import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Text from "@/components/Text";
import { motion } from "framer-motion";
function Clients() {
    const clients = [
        {
            quote: "Working with NUVÉ felt less like a vendor relationship and more like having a co-founder who happened to be a genius at brand. The results were immediate and lasting.",
            author: "Adaeze Okonkwo",
            role: "Founder, Solana Foods",
        },
        {
            quote: "Three months after our rebrand, we raised our prices by 40% and saw a 60% increase in inbound inquiry quality. NUVÉ paid for itself in the first quarter.",
            author: "Marcus Reinholt",
            role: "CEO, Arctis Ventures",
        },
        {
            quote: "They asked questions no one else had asked. They understood our audience before we did. The brand they created is the one we have always meant to have.",
            author: "Yemi Fashola",
            role: "Creative Director, Luma Studio",
        },
    ];
    return (_jsxs(motion.section, { id: "clients", className: "bg-ink text-cream px-6 md:px-16 py-16 md:py-28", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6 }, children: [_jsx(Text, { as: "p", font: "sans", size: "xs", weight: "medium", tracking: "custom-0_3em", uppercase: true, color: "accent-80", className: "mb-4", children: "What Clients Say" }), _jsxs(Text, { as: "h2", font: "serif", size: "3xl", weight: "light", leading: "tight", color: "cream", className: "sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl", children: ["Results that speak", _jsx("br", {}), "for themselves."] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-16", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6, delay: 0.2 }, children: clients.map((client, i) => (_jsxs(motion.div, { className: "border-t border-cream/10 pt-6 md:pt-8", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.4, delay: i * 0.15 }, children: [_jsxs(Text, { as: "p", font: "serif", size: "base", weight: "light", italic: true, leading: "custom-1_8", tracking: "wide", color: "cream-85", className: "md:text-lg mb-6 md:mb-8", children: ["\"", client.quote, "\""] }), _jsx(Text, { as: "p", size: "custom-0_7rem", tracking: "widest", uppercase: true, color: "accent", children: client.author }), _jsx(Text, { as: "p", size: "custom-0_7rem", color: "cream-35", tracking: "wider", className: "mt-1", children: client.role })] }, i))) })] }));
}
export default Clients;
