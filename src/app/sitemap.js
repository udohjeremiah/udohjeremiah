import fs from "node:fs";

const pages = fs
  .readdirSync("src/app", { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .map((folder) => folder.name)
  .filter(
    (folder) =>
      !folder.startsWith("(") && !folder.startsWith("_") && folder !== "og",
  );

const blogs = fs
  .readdirSync("src/content/blog", { withFileTypes: true })
  .filter((file) => !file.isDirectory())
  .map((file) => file.name.replace(".mdx", ""));

export default function sitemap() {
  return [
    {
      url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "").href,
      lastModified: new Date(),
    },
    ...pages.map((page) => ({
      url: new URL(page, process.env.NEXT_PUBLIC_SITE_URL ?? "").href,
      lastModified: new Date(),
    })),
    ...blogs.map((blog) => ({
      url: new URL(`blog/${blog}`, process.env.NEXT_PUBLIC_SITE_URL ?? "").href,
      lastModified: new Date(),
    })),
  ];
}
