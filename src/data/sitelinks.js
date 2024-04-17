// Dependencies
import {
  BellIcon,
  FolderOpenDotIcon,
  GithubIcon,
  HomeIcon,
  LayersIcon,
  LibraryIcon,
  MailIcon,
  MailOpenIcon,
  MessageCircleIcon,
  NotebookPenIcon,
  PlayIcon,
} from "lucide-react";

export const siteLinks = [
  {
    title: "",
    items: [
      {
        title: "Home",
        href: "/",
        icon: HomeIcon,
        shortcut: "h",
        items: [],
      },
      {
        title: "Mailing List",
        href: "/mailing-list",
        icon: MailOpenIcon,
        shortcut: "m",
        items: [],
      },
      {
        title: "Contact",
        href: "/contact",
        icon: MessageCircleIcon,
        shortcut: "c",
        items: [],
      },
    ],
  },

  {
    title: "Work",
    items: [
      {
        title: "Projects",
        href: "/projects",
        icon: FolderOpenDotIcon,
        shortcut: "p",
        items: [],
      },
      {
        title: "Stack",
        href: "/stack",
        icon: LayersIcon,
        shortcut: "s",
        items: [],
      },
      {
        title: "Services",
        href: "/services",
        icon: BellIcon,
        shortcut: "r",
        items: [],
      },
    ],
  },

  {
    title: "Personal",
    items: [
      {
        title: "Blog",
        href: "/blog",
        icon: NotebookPenIcon,
        shortcut: "b",
        items: [],
      },
      {
        title: "Books",
        href: "/books",
        icon: LibraryIcon,
        shortcut: "n",
        items: [],
      },
      {
        title: "Musics",
        href: "/musics",
        icon: PlayIcon,
        shortcut: "u",
        items: [],
      },
    ],
  },

  {
    title: "Resources",
    items: [
      {
        title: "Code",
        href: "/code",
        icon: GithubIcon,
        shortcut: "g",
        items: [],
      },
    ],
  },

  {
    title: "Connect",
    items: [
      {
        title: "Email",
        href: "mailto:udohjeremiah@icloud.com",
        external: true,
        icon: MailIcon,
        shortcut: "",
        items: [],
      },
      {
        title: "Github",
        href: "https://github.com/udohjeremiah",
        external: true,
        icon: GithubIcon,
        shortcut: "",
        items: [],
      },
    ],
  },
];
