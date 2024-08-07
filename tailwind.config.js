/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

const config = {
  content: ["./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.neutral.600"),
            letterSpacing: "-0.01em",
            a: {
              color: theme("colors.green.500"),
              transition: "color 0.2s ease",
              "&:hover": {
                color: theme("colors.green.600"),
              },
            },
            "h1, h2, h3, h4, h5, h6": {
              fontWeight: theme("fontWeight.semibold"),
              letterSpacing: "-0.02em",
            },
            "h2 > a, h3 > a, h4 > a, h5 > a, h6 > a": {
              color: "inherit",
              textDecoration: "inherit",
              "&::after": {
                visibility: "hidden",
                marginLeft: "0.5rem",
                fontSize: "1.5rem",
                content: '"#"',
              },
              "&:hover": {
                color: "inherit",
                "&::after": {
                  visibility: "visible",
                },
              },
              "&:focus": {
                outline: "none",
                "&::after": {
                  visibility: "visible",
                },
              },
            },
            pre: {
              padding: theme("spacing.6"),
              backgroundColor: theme("colors.neutral.900"),
              borderWidth: 1,
              borderColor: theme("colors.neutral.800"),
              borderRadius: theme("borderRadius.lg"),
            },
            code: {
              paddingInline: theme("spacing.2"),
              paddingBlock: theme("spacing.1"),
              backgroundColor: theme("colors.neutral.800"),
              borderRadius: theme("borderRadius.lg"),
              "&::before": {
                content: "unset !important",
              },
              "&::after": {
                content: "unset !important",
              },
            },
            table: {
              display: "block",
              overflowX: "auto",
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.neutral.300"),
          },
        },
      }),
      animation: {
        wave: "wave-animation 2.5s infinite",
      },
      keyframes: {
        "wave-animation": {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
