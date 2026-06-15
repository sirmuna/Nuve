import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { motion } from "framer-motion";
function Services() {
    const services = [
        {
            num: "01",
            name: "Brand Identity",
            desc: "Logos, type systems, colour palettes, and usage guides that give your brand an unmistakable presence across every medium.",
        },
        {
            num: "02",
            name: "Brand Strategy",
            desc: "Positioning, narrative frameworks, and competitive differentiation that make you the only logical choice in your market.",
        },
        {
            num: "03",
            name: "Digital Experience",
            desc: "Websites, landing pages, and digital campaigns built for performance — where beautiful design meets measurable results.",
        },
        {
            num: "04",
            name: "Packaging & Print",
            desc: "Physical touchpoints that stop hands in motion. Unboxing experiences, editorial print, and retail presence design.",
        },
        {
            num: "05",
            name: "Campaign Creation",
            desc: "Full creative campaigns — concept through execution — for brands launching, pivoting, or scaling to new audiences.",
        },
        {
            num: "06",
            name: "Brand Consulting",
            desc: "Fractional creative direction and strategic counsel for teams who need sharp thinking without a full-time overhead.",
        },
    ];
    return (_jsxs("section", { id: "services", className: "bg-cream px-6 md:px-16 py-16 md:py-28", children: [_jsx(Text, { as: "p", font: "sans", size: "xs", weight: "medium", tracking: "custom-0_3em", uppercase: true, color: "accent", className: "mb-4", children: "what we do" }), _jsxs("div", { className: "flex flex-row md:flex-row justify-between items-start md:items-end gap-4 mb-12 md:mb-16 w-full", children: [_jsxs(Text, { as: "p", font: "serif", size: "2xl", weight: "light", leading: "none", color: "ink", className: "sm:text-3xl md:text-4xl lg:text-5xl w-1/3 pr-10", children: ["Services that move the", " ", _jsx(Text, { as: "em", italic: true, color: "accent", children: "Needle" })] }), _jsxs(Button, { variant: "ghost", href: "#contact", className: "gap-2 group", children: ["View all Services", _jsx("span", { className: "transition-transform group-hover:translate-x-1 duration-300", children: "\u2192" })] })] }), _jsx(motion.div, { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-warm", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6 }, children: services.map((service, index) => (_jsxs(motion.div, { className: "bg-cream p-6 md:p-10 relative overflow-hidden transition-colors duration-300 hover:bg-ink group", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.4, delay: index * 0.1 }, whileHover: { scale: 1.02 }, children: [_jsx(Text, { as: "div", font: "serif", size: "xs", weight: "light", tracking: "wider", color: "accent", className: "mb-6 md:mb-8 transition-colors duration-300 group-hover:text-cream", children: service.num }), _jsx("div", { className: "w-8 h-px bg-warm mb-4 md:mb-6 transition-colors duration-300 group-hover:bg-accent" }), _jsx(Text, { as: "h3", font: "serif", size: "xl", weight: "normal", color: "ink", leading: "tight", className: "md:text-2xl mb-2 md:mb-4 transition-colors duration-300 group-hover:text-cream", children: service.name }), _jsx(Text, { as: "p", size: "sm", weight: "light", leading: "relaxed", color: "muted", className: "transition-colors duration-300 group-hover:text-cream/60", children: service.desc })] }, service.num))) })] }));
}
export default Services;
