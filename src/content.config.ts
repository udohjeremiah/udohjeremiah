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
          "coding",
          "death",
          "javascript",
          "life",
          "remix",
          "speaking",
          "typescript",
          "writing",
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
