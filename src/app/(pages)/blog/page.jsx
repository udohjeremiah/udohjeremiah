import { allBlogs } from "@contentlayer/generated";

import Header from "@/components/Header";
import Link from "@/components/Link";

import { sortBlogPostByDate } from "@/lib/utils";

const title = "Blog";
const description = "Thoughts, ideas, and opinions.";

export const metadata = {
  title,
  description,
};

const formatBlogDate = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    month: "2-digit",
    year: "2-digit",
  }).format(new Date(date));

function Post({ title, publishedOn, slug }) {
  return (
    <Link
      key={slug}
      href={slug}
      className="group flex flex-col gap-1 font-normal text-inherit no-underline transition-colors sm:flex-row sm:items-center sm:gap-4 sm:truncate"
    >
      <p className="m-0 font-medium text-neutral-950 transition-colors group-hover:text-green-500 sm:truncate dark:text-white">
        {title}
      </p>
      <hr className="m-0 hidden min-w-7 flex-1 transition-colors group-hover:border-green-400 sm:block" />
      <p className="m-0 shrink-0 text-sm transition-colors group-hover:text-green-400">
        {formatBlogDate(publishedOn)}
      </p>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <>
      <Header title={title} description={description} />
      <div className="mt-8 grid gap-4">
        {allBlogs.sort(sortBlogPostByDate).map((post) => (
          <Post
            key={post.slug}
            title={post.title}
            publishedOn={post.publishedOn}
            slug={post.slug}
          />
        ))}
      </div>
    </>
  );
}
