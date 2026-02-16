import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image().optional(),
      publishedOn: z.coerce.date(),
      updatedOn: z.coerce.date().optional(),
      tags: z.array(
        z.enum([
          "ai",
          "api",
          "animation",
          "coding",
          "death",
          "documentation",
          "html",
          "internet",
          "javascript",
          "json schema",
          "learning",
          "life",
          "mongodb",
          "programming",
          "rest api",
          "remix",
          "software engineering",
          "speaking",
          "tailwindcss",
          "typescript",
          "web",
          "writing",
          "youtube",
          "zod",
        ]),
      ),
    }),
});

const notes = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedOn: z.coerce.date(),
    updatedOn: z.coerce.date().optional(),
  }),
});

export const collections = { blog, notes };
