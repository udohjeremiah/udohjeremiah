"use client";

// React
import { useEffect } from "react";

// Next
import { usePathname, useRouter } from "next/navigation";

// Dependencies
import {
  BellIcon,
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  HomeIcon,
  LayersIcon,
  Pencil2Icon,
  ReaderIcon,
  TokensIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

// Components
import DesktopNavItems from "./DesktopNavItems";
import MobileNavItems from "./MobileNavItems";

// Hooks
import { useMediaQuery } from "@/hooks/use-media-query";

export const pages = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
    shortcut: "h",
    active: (pathname) => pathname === "/",
  },
  {
    name: "Mailing List",
    href: "/mailing-list",
    icon: EnvelopeClosedIcon,
    shortcut: "m",
    active: (pathname) => pathname.startsWith("/mailing-list"),
  },
  {
    name: "Contact",
    href: "/contact",
    icon: ChatBubbleIcon,
    shortcut: "c",
    active: (pathname) => pathname.startsWith("/contact"),
  },
];

export const work = [
  {
    name: "Projects",
    href: "/projects",
    icon: TokensIcon,
    shortcut: "p",
    active: (pathname) => pathname.startsWith("/projects"),
  },
  {
    name: "Stack",
    href: "/stack",
    icon: LayersIcon,
    shortcut: "s",
    active: (pathname) => pathname.startsWith("/stack"),
  },
  {
    name: "Services",
    href: "/services",
    icon: BellIcon,
    shortcut: "r",
    active: (pathname) => pathname.startsWith("/services"),
  },
];

export const personal = [
  {
    name: "Blog",
    href: "/blog",
    icon: Pencil2Icon,
    shortcut: "b",
    active: (pathname) => pathname.startsWith("/blog"),
  },
  {
    name: "Books",
    href: "/books",
    icon: ReaderIcon,
    shortcut: "n",
    active: (pathname) => pathname.startsWith("/books"),
  },
  {
    name: "Videos",
    href: "/videos",
    icon: VideoIcon,
    shortcut: "v",
    active: (pathname) => pathname.startsWith("/videos"),
  },
];

export const resources = [
  {
    name: "Code",
    href: "/code",
    icon: GitHubLogoIcon,
    shortcut: "g",
    active: (pathname) => pathname.startsWith("/code"),
  },
];

export const connect = [
  {
    href: "mailto:udohjeremiah@icloud.com",
    name: "Email",
    icon: EnvelopeOpenIcon,
  },
  {
    href: "https://github.com/udohjeremiah",
    name: "Github",
    icon: GitHubLogoIcon,
  },
];

export const sections = [
  { links: pages },
  { name: "Work", links: work },
  { name: "Personal", links: personal },
  { name: "Resources", links: resources },
  { name: "Connect", links: connect },
];

const collections = sections.flatMap(({ links }) => links);
const shortcuts = collections.map(({ shortcut }) => shortcut).filter(Boolean);

if (shortcuts.length !== new Set(shortcuts).size) {
  const duplicates = shortcuts.filter(
    (shortcut, index, array) => array.indexOf(shortcut) !== index,
  );

  throw new Error(
    `Duplicate shortcuts found: ${duplicates
      .map((shortcut) => `"${shortcut}"`)
      .join(", ")}`,
  );
}

export default function Navigation({ setMobileNav }) {
  const pathname = usePathname();
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.target !== document.body
      ) {
        return;
      }

      const collections = sections.flatMap(({ links }) => links);
      const page = collections.find(({ shortcut }) => shortcut === event.key);

      if (page) {
        router.push(page.href);
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { passive: true });
    };
  }, [router]);

  return (
    <>
      {isDesktop ? (
        <DesktopNavItems pathname={pathname} />
      ) : (
        <MobileNavItems setMobileNav={setMobileNav} pathname={pathname} />
      )}
    </>
  );
}
