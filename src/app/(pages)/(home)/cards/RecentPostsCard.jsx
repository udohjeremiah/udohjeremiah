import { allBlogs } from "@contentlayer/generated";

import Card from "@/components/Card";
import Link from "@/components/Link";

import { sortBlogPostByDate, tw } from "@/lib/utils";

const formatBlogDate = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    timeZone: "Africa/Lagos",
  }).format(new Date(date));

export default async function RecentPostsCard() {
  return (
    <Card
      title="Recent Posts"
      className="flex flex-wrap items-center gap-4 p-4"
    >
      {allBlogs
        .sort(sortBlogPostByDate)
        .slice(0, 3)
        .map(({ slug, title, publishedOn }) => (
          <Link
            key={slug}
            href={slug}
            label={title}
            className="group text-sm font-normal text-inherit no-underline"
          >
            <p
              className={tw(
                "text-neutral-950 transition-colors",
                "group-hover:text-green-500",
                "dark:text-white",
              )}
            >
              {title}
            </p>
            <p className={tw("text-neutral-500", "dark:text-neutral-400")}>
              {formatBlogDate(publishedOn)}
            </p>
          </Link>
        ))}
    </Card>
  );
}
