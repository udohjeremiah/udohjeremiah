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
    month: "short",
    day: "numeric",
    timeZone: "Africa/Lagos",
  }).format(new Date(date));

const blogPostsByYear = allBlogs.reduce((acc, post) => {
  const year = new Date(post.publishedOn).getFullYear();
  return { ...acc, [year]: [...(acc[year] || []), post] };
}, {});

function Post({ slug, title, publishedOn }) {
  return (
    <Link
      key={slug}
      href={slug}
      label={title}
      className="group flex flex-col justify-between gap-1 py-4 font-normal text-inherit no-underline transition-colors sm:flex-row sm:items-center sm:gap-4"
    >
      <p className="m-0 font-medium text-neutral-950 transition-colors group-hover:text-green-500 sm:truncate dark:text-white">
        {title}
      </p>
      <p className="m-0 w-[7rem] text-sm transition-colors group-hover:text-green-400 sm:text-right">
        {formatBlogDate(publishedOn)}
      </p>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <>
      <Header title={title} description={description} />
      <div className="mt-8 divide-y">
        {Object.entries(blogPostsByYear)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, posts]) => (
            <div key={year} className="grid grid-cols-4">
              <p className="m-0 p-4 text-sm">{year}</p>
              <div className="col-span-3 divide-y divide-neutral-200 dark:divide-neutral-700">
                {posts.sort(sortBlogPostByDate).map((post) => (
                  <Post
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    publishedOn={post.publishedOn}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
