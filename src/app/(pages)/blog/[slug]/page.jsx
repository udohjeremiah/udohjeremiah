import { allBlogs } from "@contentlayer/generated";
import Image from "next/image";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Link from "@/components/Link";
import Mdx from "@/components/Mdx";
import ArrowLeftToLineIcon from "@/components/icons/ArrowLeftToLineIcon";

import { tw } from "@/lib/utils";

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
      <div
        className={tw(
          "flex items-center gap-2",
          "text-neutral-500",
          "hover:text-green-500",
          "dark:text-neutral-400 dark:hover:text-green-400",
        )}
      >
        <ArrowLeftToLineIcon className="h-4 w-4 text-inherit" />
        <Link
          href="/blog"
          label="Back to blog"
          className={tw(
            "text-sm text-inherit no-underline",
            "hover:text-inherit",
          )}
        >
          Back to blog
        </Link>
      </div>
      <div className="space-y-2">
        <Header title={post.title} description={post.description} />
        <div
          className={tw("text-sm", "text-neutral-500", "dark:text-neutral-400")}
        >
          <span className="sr-only">Published on: </span>
          {new Intl.DateTimeFormat("en-GB", { dateStyle: "full" }).format(
            new Date(post.publishedOn),
          )}
        </div>
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
    </>
  );
}
