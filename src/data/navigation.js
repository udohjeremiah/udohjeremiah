// Dependencies
import {
  BellIcon,
  FolderOpenDotIcon,
  GithubIcon,
  HomeIcon,
  LayersIcon,
  LibraryIcon,
  LinkedinIcon,
  MailIcon,
  MailOpenIcon,
  MessageCircleIcon,
  NotebookPenIcon,
  PlayIcon,
} from "lucide-react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

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
    icon: MailOpenIcon,
    shortcut: "m",
    active: (pathname) => pathname.startsWith("/mailing-list"),
  },
  {
    name: "Contact",
    href: "/contact",
    icon: MessageCircleIcon,
    shortcut: "c",
    active: (pathname) => pathname.startsWith("/contact"),
  },
];

export const work = [
  {
    name: "Projects",
    href: "/projects",
    icon: FolderOpenDotIcon,
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
    icon: NotebookPenIcon,
    shortcut: "b",
    active: (pathname) => pathname.startsWith("/blog"),
  },
  {
    name: "Books",
    href: "/books",
    icon: LibraryIcon,
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
    icon: GithubIcon,
    shortcut: "g",
    active: (pathname) => pathname.startsWith("/code"),
  },
];

export const connect = [
  {
    href: "mailto:udohjeremiah@icloud.com",
    name: "Email",
    icon: MailIcon,
  },
  {
    href: "https://github.com/udohjeremiah",
    name: "GitHub",
    icon: GithubIcon,
  },
  {
    href: "https://linkedin.com/in/udoh-jeremiah-02a640304",
    name: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    href: "https://discordapp.com/users/1229921586149331066",
    name: "Discord",
    icon: DiscordLogoIcon,
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
