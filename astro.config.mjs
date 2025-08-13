import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import expressiveCode from "astro-expressive-code";

import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  site: "https://udohjeremiah.com",
  integrations: [expressiveCode(), mdx(), sitemap()],
  markdown: {
    rehypePlugins: [
      rehypeAccessibleEmojis,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            ariaLabel: "Link to section",
            class: [
              "after:text-muted-foreground static [font-weight:inherit] [color:inherit] before:content-none after:ml-1 after:hidden after:text-base after:content-['#'] hover:underline hover:after:inline-block hover:after:no-underline",
            ],
          },
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
