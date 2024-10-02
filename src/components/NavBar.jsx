"use client";

import { usePathname } from "next/navigation";

import Link from "@/components/Link";
import BriefcaseBusinessIcon from "@/components/icons/BriefcaseBusinessIcon";
import CircleUserIcon from "@/components/icons/CircleUserIcon";
import HouseIcon from "@/components/icons/HouseIcon";
import LayersIcon from "@/components/icons/LayersIcon";
import LibraryIcon from "@/components/icons/LibraryIcon";
import MessagesSquareIcon from "@/components/icons/MessagesSquareIcon";
import NotebookPenIcon from "@/components/icons/NotebookPenIcon";

import { tw } from "@/lib/utils";

const pages = [
  { name: "Home", path: "/", icon: HouseIcon },
  { name: "About", path: "/about", icon: CircleUserIcon },
  { name: "Blog", path: "/blog", icon: NotebookPenIcon },
  { name: "Projects", path: "/projects", icon: BriefcaseBusinessIcon },
  { name: "Stack", path: "/stack", icon: LayersIcon },
  { name: "Readings", path: "/readings", icon: LibraryIcon },
  { name: "Contact", path: "/contact", icon: MessagesSquareIcon },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path) =>
    path === "/" ? path === pathname : pathname.startsWith(path);

  return (
    <nav
      className={tw(
        "fixed bottom-6 left-1/2 isolate z-50 flex -translate-x-1/2 items-center gap-6 rounded-full border bg-opacity-50 px-6 text-sm shadow-lg backdrop-blur-sm backdrop-filter",
        "border-neutral-950/10 bg-white/80",
        "dark:border-neutral-100/10 dark:bg-neutral-950/80",
      )}
    >
      {pages.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          label={link.name}
          className={tw(
            "relative py-3",
            isActive(link.path)
              ? "font-medium text-green-500"
              : "text-neutral-500 dark:text-neutral-400",
          )}
        >
          <span className={tw("block", "sm:hidden")}>
            <link.icon className="h-5 w-5" />
          </span>
          <span className={tw("hidden", "sm:block")}>{link.name}</span>
          {isActive(link.path) && (
            <span className="absolute left-0 top-full h-px w-full bg-current" />
          )}
        </Link>
      ))}
    </nav>
  );
}
