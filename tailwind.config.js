/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

const config = {
  content: ["./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        system: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
          "Apple Color Emoji",
          "Twemoji Mozilla",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
          "EmojiOne Color",
          "Android Emoji",
        ],
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
            "figure[data-rehype-pretty-code-figure]": {
              borderWidth: 1,
              borderColor: theme("colors.neutral.800"),
              borderRadius: theme("borderRadius.lg"),
              position: "relative",
            },
            "figcaption[data-rehype-pretty-code-title]": {
              marginTop: "0",
              borderBottomWidth: 1,
              borderColor: theme("colors.neutral.800"),
            },
            "pre:not(figure[data-rehype-pretty-code-figure] > pre)": {
              borderWidth: 1,
              borderColor: theme("colors.neutral.800"),
              borderRadius: theme("borderRadius.lg"),
            },
            pre: {
              padding: theme("spacing.6"),
              backgroundColor: theme("colors.neutral.900"),
            },
            table: {
              display: "block",
              overflowX: "auto",
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.neutral.400"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
