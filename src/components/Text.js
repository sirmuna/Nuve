import React from "react";
const Text = ({ as: Component = "p", children, className, font, size, weight, color, italic, uppercase, tracking, leading, ...props }) => {
    const classes = [];
    if (font)
        classes.push(`font-${font}`);
    if (size) {
        const sizeMap = {
            xs: "text-xs",
            sm: "text-sm",
            base: "text-base",
            lg: "text-lg",
            xl: "text-xl",
            "2xl": "text-2xl",
            "3xl": "text-3xl",
            "4xl": "text-4xl",
            "5xl": "text-5xl",
            "6xl": "text-6xl",
            "7xl": "text-7xl",
            "custom-0_45rem": "text-[0.45rem]",
            "custom-0_65rem": "text-[0.65rem]",
            "custom-0_7rem": "text-[0.7rem]",
        };
        classes.push(sizeMap[size]);
    }
    if (weight)
        classes.push(`font-${weight}`);
    if (color) {
        const colorMap = {
            ink: "text-ink",
            accent: "text-accent",
            muted: "text-muted",
            cream: "text-cream",
            "accent-dark": "text-accent-dark",
            "cream-25": "text-cream/25",
            "cream-35": "text-cream/35",
            "cream-40": "text-cream/40",
            "cream-50": "text-cream/50",
            "cream-85": "text-cream/85",
            "accent-80": "text-accent/80",
        };
        classes.push(colorMap[color]);
    }
    if (italic)
        classes.push("italic");
    if (uppercase)
        classes.push("uppercase");
    if (tracking) {
        const trackingMap = {
            tight: "tracking-tight",
            normal: "tracking-normal",
            wide: "tracking-wide",
            wider: "tracking-wider",
            widest: "tracking-widest",
            "custom-0_20em": "tracking-[0.20em]",
            "custom-0_25em": "tracking-[0.25em]",
            "custom-0_3em": "tracking-[0.3em]",
            "custom-0_4em": "tracking-[0.4em]",
        };
        classes.push(trackingMap[tracking]);
    }
    if (leading) {
        const leadingMap = {
            none: "leading-none",
            tight: "leading-tight",
            snug: "leading-snug",
            normal: "leading-normal",
            relaxed: "leading-relaxed",
            loose: "leading-loose",
            "custom-1_2": "leading-[1.2]",
            "custom-1_8": "leading-[1.8]",
        };
        classes.push(leadingMap[leading]);
    }
    const combinedClassName = [classes.join(" "), className]
        .filter(Boolean)
        .join(" ");
    return React.createElement(Component, { className: combinedClassName, ...props }, children);
};
export default Text;
