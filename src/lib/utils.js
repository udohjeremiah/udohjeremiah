export function tw(...args) {
  return args
    .flat()
    .filter((x) => typeof x === "string")
    .join(" ");
}

export function parseError(error) {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "An unknown error occurred";
}

export function sortBlogPostByDate(blogPostA, blogPostB) {
  return blogPostB.publishedOn > blogPostA.publishedOn ? 1 : -1;
}
