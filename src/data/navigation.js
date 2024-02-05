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
  PlayIcon,
  ReaderIcon,
  TokensIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

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
    icon: EnvelopeOpenIcon,
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
    name: "Musics",
    href: "/musics",
    icon: PlayIcon,
    shortcut: "u",
    active: (pathname) => pathname.startsWith("/musics"),
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
    icon: EnvelopeClosedIcon,
  },
  {
    href: "https://github.com/udohjeremiah",
    name: "GitHub",
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
