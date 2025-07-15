import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "src/constants";

export async function GET(context) {
  const posts = await getCollection("blog");
  const notes = await getCollection("notes");

  const items = [
    ...posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}`,
    })),
    ...notes.map((note) => ({
      ...note.data,
      link: `/notes/${note.id}`,
    })),
  ].sort((a, b) => b.publishedOn.getTime() - a.publishedOn.getTime());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
  });
}
