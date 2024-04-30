// Dependencies
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import lqip from "lqip-modern";
import readingTime from "reading-time";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePresetMinify from "rehype-preset-minify";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const computeFields = ({
  openGraphEndpoint = "/api/og",
  imagesFolder = "./public",
}) => ({
  slug: {
    type: "string",
    description: "The slug of the document, used in the URL",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    description: "The slug as a path segment",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  readingTime: {
    type: "string",
    description: "The estimated time to read the document, in minutes",
    resolve: (doc) => readingTime(doc.body.raw).text,
  },
  image: {
    type: "string",
    description: "The image of the document",
    resolve: (doc) => {
      if (typeof doc.image === "string") {
        return doc.image;
      }

      const searchParams = new URLSearchParams();

      if (typeof doc.title === "string") {
        searchParams.set("title", doc.title);
      }

      if (typeof doc.description === "string") {
        searchParams.set("description", doc.description);
      }

      return `${openGraphEndpoint}?${searchParams.toString()}`;
    },
  },
  imageBlur: {
    type: "string",
    description: "The image data of the document",
    resolve: async (doc) => {
      if (typeof doc.image !== "string") {
        return "";
      }

      const folderBase = imagesFolder.endsWith("/")
        ? imagesFolder.slice(0, -1)
        : imagesFolder;
      const blur = await lqip(`${folderBase}${doc.image}`);

      return blur.content.toString("base64");
    },
  },
});

const rehypePrettyCodeOptions = {
  keepBackground: false,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

const rehypeAutolinkHeadingsOptions = {
  properties: {
    className: [
      "relative",
      "lg:before:content-['#']",
      "before:block",
      "before:absolute",
      "before:left-[-1.5rem]",
      "before:text-neutral-500",
      "focus:outline-none",
      "focus:before:text-neutral-600",
      "before:transition-colors",
    ],
    ariaLabel: "Link to section",
  },
};

export const remarkPlugins = () => [remarkGfm];

export const rehypePlugins = ({ theme = "one-dark-pro" }) => [
  rehypeAccessibleEmojis,
  rehypeSlug,
  [rehypePrettyCode, { ...rehypePrettyCodeOptions, theme }],
  [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
  rehypePresetMinify,
];

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    publishedOn: {
      type: "date",
      required: true,
    },
    updatedOn: {
      type: "date",
      required: false,
    },
    image: {
      type: "string",
      required: false,
    },
  },
  computedFields: computeFields("Blog", {}),
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: remarkPlugins(),
    rehypePlugins: rehypePlugins({ theme: "monokai" }),
  },
});
