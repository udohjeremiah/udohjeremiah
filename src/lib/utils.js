import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatTocList(toc, startDepth = 2) {
  const buildTree = (items, depth) => {
    const result = [];
    let currentDepth = depth;

    while (items.length > 0) {
      const item = items[0];

      if (item.depth === currentDepth) {
        result.push({ ...item, children: [] });
        items.shift();
      } else if (item.depth > currentDepth) {
        const lastItem = result[result.length - 1];
        lastItem.children = buildTree(items, currentDepth + 1);
      } else {
        break;
      }
    }

    return result;
  };

  return buildTree(toc, startDepth);
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "Africa/Lagos",
  }).format(new Date(date));
}

export function formatBlogDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    day: "numeric",
    timeZone: "Africa/Lagos",
  }).format(new Date(date));
}

export function sortBlogPostByDate(blogPostA, blogPostB) {
  return new Date(blogPostB.publishedOn).getTime() >
    new Date(blogPostA.publishedOn).getTime()
    ? 1
    : -1;
}
