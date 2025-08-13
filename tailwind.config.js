/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--color-foreground)",
            "--tw-prose-headings": "var(--color-foreground)",
            "--tw-prose-lead": "var(--color-muted-foreground)",
            "--tw-prose-links": "var(--color-foreground)",
            "--tw-prose-bold": "var(--color-foreground)",
            "--tw-prose-counters": "var(--color-muted-foreground)",
            "--tw-prose-bullets": "var(--color-muted)",
            "--tw-prose-hr": "var(--color-border)",
            "--tw-prose-quotes": "var(--color-foreground)",
            "--tw-prose-quote-borders": "var(--color-border)",
            "--tw-prose-captions": "var(--color-muted-foreground)",
            "--tw-prose-code": "var(--color-foreground)",
            "--tw-prose-pre-code": "var(--color-card-foreground)",
            "--tw-prose-pre-bg": "var(--color-card)",
            "--tw-prose-th-borders": "var(--color-border)",
            "--tw-prose-td-borders": "var(--color-border)",

            table: {
              display: "block",
              overflowX: "auto",
            },

            code: {
              overflowWrap: "break-word",
              backgroundColor: "var(--color-muted)",
              borderRadius: theme("borderRadius.md"),
              paddingInline: theme("spacing.1"),
              paddingBlock: theme("spacing.0.5"),
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },

            a: { textDecoration: "none" },
          },
        },
      }),
    },
  },
};
