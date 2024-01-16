import clsx from "clsx";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

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
  ExternalLinkIcon,
  GitHubLogoIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";
import ThemeToggler from "./ThemeToggler";

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
    active: (pathname) => pathname.startsWith("/work"),
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

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

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
      {/* Mobile nav */}
      <div className="lg:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              aria-label="Open navigation"
              variant="secondary"
              size="icon"
            >
              <HamburgerMenuIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="max-h-[60vh] overflow-auto">
              <nav>
                {sections.map((section, sectionIndex) => (
                  <section key={sectionIndex} className="space-y-2 p-3">
                    {section.name ? (
                      <h3 className="mx-3 text-xs font-semibold uppercase tracking-wide">
                        {section.name}
                      </h3>
                    ) : null}
                    <div className="space-y-0.5">
                      {section.links.map(
                        ({ name, href, icon: Icon, shortcut, active }) => (
                          <DrawerClose asChild key={name}>
                            <Link
                              href={href}
                              target={
                                href.startsWith("http") ? "_blank" : undefined
                              }
                              rel={
                                href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className={clsx(
                                "group flex items-center gap-2.5 rounded-md border px-3 py-2 transition-colors",
                                active?.(pathname)
                                  ? "bg-secondary"
                                  : "border-transparent text-muted-foreground hover:bg-accent hover:text-foreground",
                              )}
                            >
                              {Icon ? (
                                <Icon className="h-4 w-4 shrink-0" />
                              ) : null}
                              <p className="flex-1 text-sm font-medium leading-[22px]">
                                {name}
                              </p>
                              {shortcut ? (
                                <kbd className="flex h-5 w-4 shrink-0 items-center justify-center rounded border text-[10px] font-medium uppercase text-muted-foreground">
                                  {shortcut}
                                </kbd>
                              ) : null}
                              {href.startsWith("http") ? (
                                <ExternalLinkIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors" />
                              ) : null}
                            </Link>
                          </DrawerClose>
                        ),
                      )}
                    </div>
                  </section>
                ))}
                <section className="space-y-2 p-3">
                  <h3 className="mx-3 text-xs font-semibold uppercase tracking-wide">
                    Other
                  </h3>
                  <div className="space-y-0.5">
                    <ThemeToggler />
                  </div>
                </section>
              </nav>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop nav */}
      <nav className={clsx("hidden", "lg:block")}>
        {sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="space-y-2 p-3">
            {section.name ? (
              <h3 className="mx-3 text-xs font-semibold uppercase tracking-wide">
                {section.name}
              </h3>
            ) : null}
            <div className="space-y-0.5">
              {section.links.map(
                ({ name, href, icon: Icon, shortcut, active }) => (
                  <Link
                    href={href}
                    key={name}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={clsx(
                      "group flex items-center gap-2.5 rounded-md border px-3 py-2 transition-colors",
                      active?.(pathname)
                        ? "bg-primary-foreground dark:border-neutral-600"
                        : "border-transparent text-muted-foreground hover:bg-primary-foreground hover:text-foreground",
                    )}
                  >
                    {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
                    <p className="flex-1 text-sm font-medium leading-[22px]">
                      {name}
                    </p>
                    {shortcut ? (
                      <kbd className="flex h-5 w-4 shrink-0 items-center justify-center rounded border text-[10px] font-medium uppercase text-muted-foreground">
                        {shortcut}
                      </kbd>
                    ) : null}
                    {href.startsWith("http") ? (
                      <ExternalLinkIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors" />
                    ) : null}
                  </Link>
                ),
              )}
            </div>
          </section>
        ))}
        <section className="space-y-2 p-3">
          <h3 className="mx-3 text-xs font-semibold uppercase tracking-wide">
            Other
          </h3>
          <div className="space-y-0.5">
            <ThemeToggler />
          </div>
        </section>
      </nav>
    </>
  );
}
