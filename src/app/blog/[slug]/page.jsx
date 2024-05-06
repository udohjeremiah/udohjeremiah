// Next
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Dependencies
import { allBlogs } from "contentlayer/generated";
import { ArrowLeftIcon } from "lucide-react";

// Components
import Container from "@/components/Container";
import DisqusComments from "@/components/DisqusComments";
import MDXContent from "@/components/MDXContent";

// Lib
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export const generateMetadata = ({ params }) => {
  const currentPath = params.slug;
  const post = allBlogs.find(
    ({ slugAsParams }) => slugAsParams === currentPath,
  );

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: post.slug,
    image: post.image,
  });
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

  const images = [];

  if (post.image) {
    const imageUrl = new URL(post.image, process.env.NEXT_PUBLIC_SITE_URL).href;
    images.push(imageUrl);
  }

  return (
    <Container>
      <article>
        <h1 className="mb-0">{post.title}</h1>
        <p>{post.description}</p>
        <div className="space-y-8">
          <div>
            {post.tags && (
              <p className=" text-sm text-muted-foreground">
                Tags:{" "}
                {post.tags
                  .sort((tagA, tagB) => tagA.localeCompare(tagB))
                  .map((tag, index) => (
                    <span key={index}>
                      {tag}
                      {index + 1 < post.tags.length && ", "}
                    </span>
                  ))}
              </p>
            )}
            {post.publishedOn && (
              <p className="text-sm text-muted-foreground">
                Published on{" "}
                <time dateTime={post.publishedOn}>
                  {formatDate(post.publishedOn)} • {post.readingTime}
                </time>
              </p>
            )}
            {post.updatedOn && (
              <p className="mt-4 text-sm text-muted-foreground">
                Updated on{" "}
                <time dateTime={post.updatedOn}>
                  {formatDate(post.updatedOn)}
                </time>
              </p>
            )}
          </div>
          {post.image && post.imageBlur && (
            <Image
              src={post.image}
              alt=""
              width={1920}
              height={1080}
              priority
              blurDataURL={`data:image/jpg;base64,${post.imageBlur}`}
              placeholder="blur"
              quality={100}
              className="m-0 h-full w-full overflow-hidden rounded object-cover"
            />
          )}
          <MDXContent code={post.body.code} />
        </div>
      </article>
      <DisqusComments post={post} />
      <hr className="my-8" />
      <Link
        className="flex w-max items-center gap-1 text-xs text-muted-foreground underline-offset-2"
        href="/blog"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to Blog
      </Link>
    </Container>
  );
}
