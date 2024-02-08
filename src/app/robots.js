export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", process.env.NEXT_PUBLIC_SITE_URL ?? "")
      .href,
  };
}
