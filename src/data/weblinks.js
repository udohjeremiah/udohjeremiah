import {
  HomeIcon,
  EnvelopeClosedIcon,
  ChatBubbleIcon,
  TokensIcon,
  LayersIcon,
  BellIcon,
  Pencil2Icon,
  ReaderIcon,
  VideoIcon,
  GitHubLogoIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";

export const webLinks = [
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
        icon: EnvelopeClosedIcon,
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
      {
        title: "Videos",
        href: "/videos",
        icon: VideoIcon,
        shortcut: "v",
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
        icon: EnvelopeOpenIcon,
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
