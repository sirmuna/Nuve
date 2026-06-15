import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Text from "@/components/Text";
import { motion } from "framer-motion";
function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (_jsxs(motion.nav, { initial: { y: -100 }, animate: { y: 0 }, transition: { duration: 0.6 }, className: `fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 transition-all duration-400
        ${scrolled ? "bg-cream/90 backdrop-blur-md border-b border-accent/15" : "bg-transparent"}`, children: [_jsx(Text, { as: "a", href: "/", font: "serif", size: "xl", weight: "medium", tracking: "custom-0_4em", color: scrolled ? "ink" : "ink", className: "md:text-2xl", children: "NUV\u00C9" }), _jsxs("ul", { className: "hidden md:flex gap-10 list-none", children: [_jsx("li", { children: _jsx(Text, { as: "a", href: "#philosophy", size: "xs", weight: "normal", tracking: "custom-0_20em", uppercase: true, color: scrolled ? "ink" : "cream", className: "hover:text-accent transition-colors delay-30", children: "PHILOSOPHY" }) }), _jsx("li", { children: _jsx(Text, { as: "a", href: "#services", size: "xs", weight: "normal", tracking: "custom-0_20em", uppercase: true, color: scrolled ? "ink" : "cream", className: "hover:text-accent transition-colors", children: "Services" }) }), _jsx("li", { children: _jsx(Text, { as: "a", href: "#testimonials", size: "xs", weight: "normal", tracking: "custom-0_20em", uppercase: true, color: scrolled ? "ink" : "cream", className: "hover:text-accent transition-colors", children: "CLIENTS" }) }), _jsx("li", { children: _jsx(Text, { as: "a", href: "#contact", size: "xs", weight: "normal", tracking: "custom-0_20em", uppercase: true, color: scrolled ? "ink" : "cream", className: "hover:text-accent transition-colors", children: "Contact" }) })] })] }));
}
export default Navbar;
