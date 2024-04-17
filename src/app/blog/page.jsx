// Next
import Link from "next/link";

// Dependencies
import { allBlogs } from "contentlayer/generated";
import { RssIcon } from "lucide-react";

// Components
import Container from "@/components/Container";

// Lib
import { cn } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";
import { formatBlogDate, sortBlogPostByDate } from "@/lib/utils";

const title = "Blog";
const description = "Thoughts, ideas, and opinions.";

export const metadata = createMetadata({
  title,
  description,
  path: "/blog",
});

const blogPostsByYear = allBlogs.reduce((acc, post) => {
  const year = new Date(post.publishedOn).getFullYear();
  return { ...acc, [year]: [...(acc[year] || []), post] };
}, {});

export default function BlogPage() {
  return (
    <Container wide>
      <h1 className="mb-0">{title}</h1>
      <p>{description}</p>
      <Link href="/rss.xml" className="block w-max">
        <RssIcon
          className={cn(
            "h-8 w-8 font-bold text-orange-500",
            "hover:text-orange-400",
          )}
        />
        <span className="sr-only">RSS Feed</span>
      </Link>
      <div className="mt-8 divide-y border-t">
        {Object.entries(blogPostsByYear)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, posts]) => (
            <div key={year} className="grid grid-cols-4">
              <p className="m-0 p-4 text-sm">{year}</p>
              <div className="col-span-3 divide-y">
                {posts.sort(sortBlogPostByDate).map((post) => (
                  <Link
                    className={cn(
                      "flex flex-col justify-between gap-1 p-4 no-underline",
                      "hover:bg-muted",
                      "sm:flex-row sm:items-center sm:gap-4",
                    )}
                    key={post.slug}
                    href={post.slug}
                  >
                    <span className={cn("m-0 text-sm", "sm:truncate")}>
                      {post.title}
                    </span>
                    <span
                      className={cn(
                        "m-0 w-[7rem] text-sm text-muted-foreground",
                        "sm:text-right",
                      )}
                    >
                      {formatBlogDate(post.publishedOn)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
}
