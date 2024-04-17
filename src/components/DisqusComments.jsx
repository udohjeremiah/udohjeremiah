"use client";

// Dependencies
import { DiscussionEmbed } from "disqus-react";

export default function DisqusComments({ post }) {
  return (
    <DiscussionEmbed
      shortname="udohjeremiah"
      config={{
        url: new URL(post.slug ?? "/", process.env.NEXT_PUBLIC_SITE_URL).href,
        identifier: post.slug,
        title: post.title,
        language: "en",
      }}
    />
  );
}
