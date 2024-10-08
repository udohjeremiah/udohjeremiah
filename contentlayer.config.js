import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePresetMinify from "rehype-preset-minify";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { sqip } from "sqip";

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

      const blur = await sqip({
        input: `${folderBase}${doc.image}`,
        plugins: [
          "sqip-plugin-primitive",
          "sqip-plugin-svgo",
          "sqip-plugin-data-uri",
        ],
      });

      const result = Array.isArray(blur) ? blur[0] : blur;

      return result.metadata.dataURIBase64;
    },
  },
});

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.mdx`,
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
    publishedOn: {
      type: "date",
      required: true,
    },
    image: {
      type: "string",
      required: false,
    },
  },
  computedFields: computeFields("Blog", {}),
}));

const rehypePrettyCodeOptions = {
  theme: "dark-plus",
  keepBackground: false,
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

const rehypeAutolinkHeadingsOptions = {
  behavior: "wrap",
  properties: {
    ariaLabel: "Link to section",
  },
};

const source = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
      rehypeAccessibleEmojis,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypePresetMinify,
    ],
  },
});

export default source;
