import { allBlogs } from "@contentlayer/generated";
import { ArrowLeftToLineIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Link from "@/components/Link";
import Mdx from "@/components/Mdx";

export const generateMetadata = ({ params }) => {
  const currentPath = params.slug;
  const post = allBlogs.find(
    ({ slugAsParams }) => slugAsParams === currentPath,
  );

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: post.image
      ? {
          images: [
            {
              url: new URL(post.image, process.env.NEXT_PUBLIC_SITE_URL).href,
              width: 1920,
              height: 1080,
              alt: post.title,
            },
          ],
        }
      : undefined,
  };
};

export const generateStaticParams = () =>
  allBlogs.map((post) => ({
    slug: post.slug,
  }));

export default function BlogPostPage({ params }) {
  const currentPath = params.slug;
  const post = allBlogs.find(
    ({ slugAsParams }) => slugAsParams === currentPath,
  );

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header title={post.title} description={post.description} />
      <div>
        <p className="text-sm">
          Tags:{" "}
          {post.tags
            .sort((tagA, tagB) => tagA.localeCompare(tagB))
            .map((tag, index) => (
              <span key={index}>
                {tag}
                {index + 1 < post.tags.length && " • "}
              </span>
            ))}
        </p>
        <p className="text-sm">
          Published on{" "}
          {new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(
            new Date(post.publishedOn),
          )}{" "}
          • {post.readingTime}
        </p>
        {post.updatedOn && (
          <p className="text-sm">
            Updated on{" "}
            {new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(
              new Date(post.publishedOn),
            )}
          </p>
        )}
      </div>
      {post.image && post.imageBlur && (
        <Image
          src={post.image}
          width={1920}
          height={1080}
          alt=""
          className="m-0 h-full w-full overflow-hidden rounded object-cover"
          priority
          blurDataURL={`data:image/jpg;base64,${post.imageBlur}`}
          placeholder="blur"
          quality={100}
        />
      )}
      <div>
        <Mdx code={post.body.code} />
      </div>
      <hr />
      <div className="flex items-center gap-2 text-neutral-500 hover:text-green-500 dark:text-neutral-400 dark:hover:text-green-400">
        <ArrowLeftToLineIcon className="h-4 w-4 text-inherit" />
        <Link
          href="/blog"
          label="Back to blog"
          className="text-sm text-inherit no-underline hover:text-inherit"
        >
          Back to blog
        </Link>
      </div>
    </>
  );
}
