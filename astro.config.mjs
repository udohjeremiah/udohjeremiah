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
              "before:text-muted-foreground [font-weight:inherit] [color:inherit] [background:unset] [transition:unset] before:mr-1 before:-ml-3.5 before:hidden before:text-base before:content-['#'] hover:underline hover:before:inline-block before:hover:no-underline",
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
