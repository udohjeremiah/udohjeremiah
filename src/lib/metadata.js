const applicationName = "Udoh Jeremiah";
const author = {
  name: applicationName,
  url: "https://udohjeremiah.com/",
};
const publisher = applicationName;
const twitterHandle = "@udohjeremiah";

export const createMetadata = ({
  title,
  description,
  path,
  image,
  ...props
}) => {
  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    throw new Error("NEXT_PUBLIC_SITE_URL is not defined");
  }

  const parsedTitle = `${title} | ${applicationName}`;

  const defaultMetadata = {
    title: parsedTitle,
    description,
    applicationName,
    authors: [author],
    creator: author.name,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
    formatDetection: {
      telephone: false,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: parsedTitle,
    },
    openGraph: {
      title: parsedTitle,
      description,
      type: "website",
      siteName: applicationName,
      locale: "en_US",
      url: new URL(path ?? "/", process.env.NEXT_PUBLIC_SITE_URL).toString(),
    },
    publisher,
    twitter: {
      card: "summary_large_image",
      creator: twitterHandle,
    },
  };

  const metadata = { ...defaultMetadata, ...props };

  if (image && metadata.openGraph) {
    metadata.openGraph.images = [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ];
  }

  return metadata;
};
