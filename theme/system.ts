import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react";

// Dark navy surfaces, one blue accent, dressed as a moonlit tarot deck.
const focusRing = {
  outline: "2px solid",
  outlineColor: "brandHi",
  outlineOffset: "3px",
};

const button = defineRecipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    borderRadius: "full",
    fontFamily: "body",
    fontWeight: "500",
    whiteSpace: "nowrap",
    textDecoration: "none",
    cursor: "pointer",
    transitionProperty: "background-color, border-color, box-shadow, transform",
    transitionDuration: "short",
    transitionTimingFunction: "out",
    _hover: { textDecoration: "none" },
    _active: { transform: "translateY(1px)" },
    _focusVisible: focusRing,
    _disabled: { opacity: 0.5, cursor: "not-allowed", transform: "none" },
  },
  variants: {
    variant: {
      solid: {
        bg: "brand",
        color: "white",
        boxShadow: "glow",
        _hover: { bg: "brandHover", boxShadow: "glowStrong" },
      },
      outline: {
        bg: "whiteAlpha.50",
        color: "fg",
        borderWidth: "1px",
        borderColor: "lineStrong",
        _hover: { bg: "whiteAlpha.100", borderColor: "brandHi" },
      },
    },
    size: {
      md: { h: "40px", px: "4", fontSize: "sm" },
      lg: { h: "48px", px: "6", fontSize: "md" },
    },
  },
  defaultVariants: { variant: "solid", size: "lg" },
});

const heading = defineRecipe({
  base: {
    fontFamily: "heading",
    fontWeight: "500",
    color: "fg",
    letterSpacing: "tight",
    lineHeight: 1,
    textWrap: "balance",
    overflowWrap: "break-word",
    minW: 0,
  },
  variants: {
    size: {
      hero: { fontSize: "hero", lineHeight: 0.9, letterSpacing: "tighter" },
      section: { fontSize: "section", letterSpacing: "tighter" },
      card: { fontSize: "2xl", fontWeight: "600", lineHeight: 1.1 },
      sm: { fontSize: "xl", fontWeight: "600", lineHeight: 1.15 },
    },
  },
  defaultVariants: { size: "section" },
});

const container = defineRecipe({
  base: {
    position: "relative",
    w: "100%",
    maxW: "76rem",
    mx: "auto",
    px: "var(--gutter)",
  },
});

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "40rem",
      md: "60rem",
      lg: "80rem",
      xl: "90rem",
      "2xl": "96rem",
    },
    tokens: {
      colors: {
        bg: { value: "#060a13" },
        bgDeep: { value: "#03060c" },
        surface: { value: "#0b1221" },
        surface2: { value: "#101a2f" },
        line: { value: "rgba(148, 178, 255, 0.12)" },
        lineStrong: { value: "rgba(148, 178, 255, 0.22)" },
        fg: { value: "#eaf0fd" },
        fg2: { value: "#b6c2dc" },
        muted: { value: "#8593b0" },
        brand: { value: "#2563eb" },
        brandHover: { value: "#1d4fd8" },
        brandHi: { value: "#7fb2ff" },
        brandSoft: { value: "rgba(59, 130, 246, 0.14)" },
        brandLine: { value: "rgba(96, 165, 250, 0.45)" },
      },
      fonts: {
        heading: { value: '"Cormorant Garamond", Georgia, serif' },
        label: { value: 'Cinzel, "Cormorant Garamond", Georgia, serif' },
        body: { value: '"Funnel Sans", ui-sans-serif, system-ui, sans-serif' },
      },
      fontSizes: {
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.375rem" },
        "2xl": { value: "1.75rem" },
        "3xl": { value: "2.25rem" },
        lead: { value: "clamp(1.125rem, 0.4vw + 1rem, 1.3125rem)" },
        section: { value: "clamp(2.75rem, 3.5vw + 1rem, 4.5rem)" },
        hero: { value: "clamp(3.5rem, 6vw, 6.5rem)" },
        figure: { value: "clamp(5rem, 9vw, 8.5rem)" },
      },
      letterSpacings: {
        tight: { value: "-0.01em" },
        tighter: { value: "-0.02em" },
        caps: { value: "0.16em" },
      },
      radii: {
        card: { value: "20px" },
        inner: { value: "12px" },
      },
      shadows: {
        glow: {
          value:
            "0 0 0 1px rgba(96, 165, 250, 0.35) inset, 0 8px 24px -8px rgba(37, 99, 235, 0.6)",
        },
        glowStrong: {
          value:
            "0 0 0 1px rgba(147, 197, 253, 0.5) inset, 0 12px 32px -8px rgba(37, 99, 235, 0.8)",
        },
        card: { value: "0 24px 48px -24px rgba(0, 0, 0, 0.6)" },
        lift: {
          value:
            "0 0 0 1px rgba(96, 165, 250, 0.5), 0 24px 60px -20px rgba(37, 99, 235, 0.55)",
        },
      },
      durations: {
        short: { value: "200ms" },
        long: { value: "400ms" },
      },
      easings: {
        out: { value: "cubic-bezier(0.16, 1, 0.3, 1)" },
      },
    },
    textStyles: {
      lead: { value: { fontSize: "lead", lineHeight: 1.55, color: "fg2" } },
      eyebrow: {
        value: {
          fontFamily: "label",
          fontSize: "xs",
          fontWeight: "600",
          letterSpacing: "caps",
          textTransform: "uppercase",
          color: "brandHi",
        },
      },
      meta: {
        value: {
          fontFamily: "label",
          fontSize: "sm",
          letterSpacing: "0.04em",
          color: "muted",
        },
      },
    },
    layerStyles: {
      card: {
        value: {
          position: "relative",
          bg: "surface",
          borderWidth: "1px",
          borderColor: "line",
          borderRadius: "card",
          boxShadow: "card",
          // The inner hairline of a tarot card's border
          _after: {
            content: '""',
            position: "absolute",
            inset: "6px",
            borderWidth: "1px",
            borderColor: "rgba(127, 178, 255, 0.14)",
            borderRadius: "14px",
            pointerEvents: "none",
          },
        },
      },
    },
    recipes: { button, heading, container },
  },
  globalCss: {
    ":root": {
      colorScheme: "dark",
      "--nav-offset": "88px",
      "--gutter": { base: "20px", sm: "32px", md: "48px" },
      "--section-gap": { base: "80px", sm: "104px", md: "136px" },
    },
    "html, body": { overflowX: "clip" },
    html: {
      bg: "bg",
      scrollPaddingTop: "var(--nav-offset)",
      scrollBehavior: "smooth",
      scrollbarColor: "{colors.surface2} {colors.bg}",
    },
    body: {
      bg: "bg",
      color: "fg2",
      fontFamily: "body",
      fontSize: "md",
      lineHeight: 1.65,
      // Two moonlight glows over a faint, scattered starfield
      backgroundImage: [
        "radial-gradient(56rem 36rem at 78% -8%, rgba(37, 99, 235, 0.22), transparent 62%)",
        "radial-gradient(40rem 28rem at -10% 18%, rgba(56, 189, 248, 0.07), transparent 60%)",
        "radial-gradient(1.5px 1.5px at 37px 61px, rgba(234, 240, 253, 0.55) 50%, transparent)",
        "radial-gradient(1.5px 1.5px at 181px 23px, rgba(234, 240, 253, 0.4) 50%, transparent)",
        "radial-gradient(1.5px 1.5px at 90px 270px, rgba(234, 240, 253, 0.5) 50%, transparent)",
        "radial-gradient(1.5px 1.5px at 310px 140px, rgba(234, 240, 253, 0.35) 50%, transparent)",
        "radial-gradient(1.5px 1.5px at 420px 380px, rgba(234, 240, 253, 0.6) 50%, transparent)",
        "radial-gradient(1.5px 1.5px at 120px 100px, rgba(234, 240, 253, 0.25) 50%, transparent)",
      ].join(", "),
      backgroundSize:
        "auto, auto, 211px 211px, 293px 293px, 347px 347px, 419px 419px, 503px 503px, 157px 157px",
      backgroundRepeat:
        "no-repeat, no-repeat, repeat, repeat, repeat, repeat, repeat, repeat",
    },
    "::selection": { bg: "rgba(59, 130, 246, 0.35)", color: "fg" },
    ":focus-visible": {
      outline: "2px solid",
      outlineColor: "brandHi",
      outlineOffset: "2px",
    },
    a: { color: "inherit" },
    p: { textWrap: "pretty" },
    "*, *::before, *::after": {
      _motionReduce: {
        animationDuration: "0.01ms !important",
        animationIterationCount: "1 !important",
        transitionDuration: "0.01ms !important",
        scrollBehavior: "auto !important",
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
