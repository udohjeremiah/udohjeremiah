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
} from "@radix-ui/react-icons";

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
        icon: EnvelopeOpenIcon,
        shortcut: "m",
        items: [],
      },
      {
        title: "Contact",
        href: "/contact",
        icon: ChatBubbleIcon,
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
        icon: TokensIcon,
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
        icon: Pencil2Icon,
        shortcut: "b",
        items: [],
      },
      {
        title: "Books",
        href: "/books",
        icon: ReaderIcon,
        shortcut: "n",
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
        icon: GitHubLogoIcon,
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
        icon: EnvelopeClosedIcon,
        shortcut: "",
        items: [],
      },
      {
        title: "Github",
        href: "https://github.com/udohjeremiah",
        external: true,
        icon: GitHubLogoIcon,
        shortcut: "",
        items: [],
      },
    ],
  },
];
