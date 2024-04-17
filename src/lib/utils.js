// Dependencies
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
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
