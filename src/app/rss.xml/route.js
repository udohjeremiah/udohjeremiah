import { allBlogs } from "@contentlayer/generated";
import RSS from "rss";

import { sortBlogPostByDate } from "@/lib/utils";

export async function GET() {
  const feed = new RSS({
    title: "Udoh Jeremiah",
    description: `I'm a Software Developer and Technical Writer based in ${process.env.NEXT_PUBLIC_LOCATION}.`,
    feed_url: `${process.env.NEXT_PUBLIC_SITE_URL}/rss.xml`,
    site_url: process.env.NEXT_PUBLIC_SITE_URL,
    copyright: `© 2024 - ${new Date().getFullYear()} Udoh Jeremiah. All rights reserved.`,
    language: "en",
    pubDate: new Date(),
  });

  allBlogs.sort(sortBlogPostByDate).map((post) =>
    feed.item({
      title: post.title,
      description: post.description,
      url: new URL(post.slug ?? "/", process.env.NEXT_PUBLIC_SITE_URL).href,
      date: post.publishedOn,
    }),
  );

  return new Response(feed.xml(), {
    headers: { "Content-Type": "application/rss+xml; charset=UTF-8" },
  });
}
