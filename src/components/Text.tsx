import React from "react";

type Font = "sans" | "serif";
type Size =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "custom-0_45rem" // text-[0.45rem]
  | "custom-0_65rem" // text-[0.65rem]
  | "custom-0_7rem"; // text-[0.7rem]
type Weight =
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold";
type Color =
  | "ink"
  | "accent"
  | "muted"
  | "cream"
  | "accent-dark"
  | "cream-25" // text-cream/25
  | "cream-35" // text-cream/35
  | "cream-40" // text-cream/40
  | "cream-50" // text-cream/50
  | "cream-85" // text-cream/85
  | "accent-80"; // text-accent/80
type Tracking =
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest"
  | "custom-0_20em"
  | "custom-0_25em"
  | "custom-0_3em"
  | "custom-0_4em";
type Leading =
  | "none"
  | "tight"
  | "snug"
  | "normal"
  | "relaxed"
  | "loose"
  | "custom-1_2"
  | "custom-1_8";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?:
    | "p"
    | "span"
    | "div"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "em"
    | "strong"
    | "label"
    | "a";
  children: React.ReactNode;
  className?: string;
  font?: Font;
  size?: Size;
  weight?: Weight;
  color?: Color;
  italic?: boolean;
  uppercase?: boolean;
  tracking?: Tracking;
  leading?: Leading;
  href?: string;
  htmlFor?: string;
}

const Text: React.FC<TextProps> = ({
  as: Component = "p",
  children,
  className,
  font,
  size,
  weight,
  color,
  italic,
  uppercase,
  tracking,
  leading,
  ...props
}) => {
  const classes: string[] = [];

  if (font) classes.push(`font-${font}`);

  if (size) {
    const sizeMap: Record<Size, string> = {
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

  if (weight) classes.push(`font-${weight}`);

  if (color) {
    const colorMap: Record<Color, string> = {
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

  if (italic) classes.push("italic");
  if (uppercase) classes.push("uppercase");

  if (tracking) {
    const trackingMap: Record<Tracking, string> = {
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
    const leadingMap: Record<Leading, string> = {
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

  return React.createElement(
    Component,
    { className: combinedClassName, ...props },
    children,
  );
};

export default Text;
