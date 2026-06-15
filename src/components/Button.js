import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
const Button = ({ children, variant = "primary", size = "md", className = "", href, ...props }) => {
    const baseClasses = "inline-flex items-center justify-center font-sans uppercase tracking-widest transition-all duration-300";
    const variantClasses = {
        primary: "bg-ink text-cream hover:bg-accent",
        secondary: "bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream",
        ghost: "bg-transparent text-muted hover:text-ink",
    };
    const sizeClasses = {
        sm: "px-6 py-2 text-[0.65rem]",
        md: "px-8 py-3 text-xs",
        lg: "px-10 py-4 text-xs",
    };
    const combinedClassName = [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
    ]
        .filter(Boolean)
        .join(" ");
    const motionProps = {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
    };
    if (href) {
        return (_jsx(motion.a, { href: href, className: combinedClassName, ...motionProps, children: children }));
    }
    return (_jsx(motion.button, { className: combinedClassName, ...motionProps, disabled: props.disabled, onClick: props.onClick, type: props.type, children: children }));
};
export default Button;
