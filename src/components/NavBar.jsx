"use client";

import {
  BriefcaseBusinessIcon,
  CircleUserIcon,
  HomeIcon,
  LayersIcon,
  MessagesSquareIcon,
  NotebookPenIcon,
} from "lucide-react";
import { LibraryIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import Link from "@/components/Link";

import { cn } from "@/lib/utils";

const pages = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "About", path: "/about", icon: CircleUserIcon },
  { name: "Projects", path: "/projects", icon: BriefcaseBusinessIcon },
  { name: "Blog", path: "/blog", icon: NotebookPenIcon },
  { name: "Stack", path: "/stack", icon: LayersIcon },
  { name: "Books", path: "/books", icon: LibraryIcon },
  { name: "Contact", path: "/contact", icon: MessagesSquareIcon },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path) =>
    path === "/" ? path === pathname : pathname.startsWith(path);

  return (
    <nav
      className={cn(
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
          className={cn(
            "relative py-3",
            isActive(link.path)
              ? "font-medium text-green-500"
              : "text-neutral-500 dark:text-neutral-400",
          )}
        >
          <span className="block sm:hidden">
            <link.icon className="h-5 w-5" />
          </span>
          <span className="hidden sm:block">{link.name}</span>
          {isActive(link.path) && (
            <span className="absolute left-0 top-full h-px w-full bg-current" />
          )}
        </Link>
      ))}
    </nav>
  );
}
