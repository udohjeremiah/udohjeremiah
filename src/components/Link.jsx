import NextLink from "next/link";

export default function Link({ href, children, label, ...properties }) {
  return (
    <>
      {href.startsWith("/") ? (
        <NextLink href={href} aria-label={label} {...properties}>
          {children}
        </NextLink>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          {...properties}
        >
          {children}
        </a>
      )}
    </>
  );
}
