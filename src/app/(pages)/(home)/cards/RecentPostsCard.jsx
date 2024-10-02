import { allBlogs } from "@contentlayer/generated";

import Card from "@/components/Card";
import Link from "@/components/Link";

import { sortBlogPostByDate, tw } from "@/lib/utils";

const formatBlogDate = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeZone: "Africa/Lagos",
  }).format(new Date(date));

export default async function RecentPostsCard() {
  return (
    <Card
      title="Recent Posts"
      className={tw(
        "flex flex-wrap items-center gap-4 p-4",
        "text-neutral-500",
        "dark:text-neutral-400",
      )}
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
              className={tw("transition-colors", "group-hover:text-green-500")}
            >
              {title}
            </p>
            <time dateTime={publishedOn}>{formatBlogDate(publishedOn)}</time>
          </Link>
        ))}
    </Card>
  );
}
