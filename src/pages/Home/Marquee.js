import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Text from "@/components/Text";
import { motion } from "framer-motion";
function Marquee() {
    const items = [
        "Visual Identity",
        "Packaging Design",
        "Digital Experience",
        "Art Direction",
        "Brand Positioning",
        "Campaign Creation",
        "Brand Strategy",
    ];
    return (_jsx(motion.div, { className: "overflow-hidden bg-ink py-4 border-t border-b border-accent/20", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6 }, children: _jsx("div", { className: "flex gap-12 animate-marquee whitespace-nowrap w-max", children: [...items, ...items].map((item, i) => (_jsxs(Text, { as: "span", font: "serif", italic: true, size: "sm", color: "cream-50", tracking: "wider", className: "md:text-base flex items-center gap-12", children: [item, _jsx(Text, { as: "span", size: "custom-0_45rem", color: "accent", children: "\u25C6" })] }, i))) }) }));
}
export default Marquee;
