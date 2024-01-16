"use client";

import clsx from "clsx";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Profile from "./Profile";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className={clsx("sticky top-0 z-50", "lg:static")}>
      {/* Mobile nav */}
      <div
        className={clsx(
          "sticky top-0 z-50 flex justify-between gap-4 border-b px-4 py-3 backdrop-blur-sm",
          "sm:px-8",
          "lg:hidden",
        )}
      >
        <Link aria-label="Home" href="/">
          <Avatar>
            <AvatarImage src="https://source.unsplash.com/random" />
            <AvatarFallback>UJ</AvatarFallback>
          </Avatar>
        </Link>
        <Navigation />
      </div>

      {/* Desktop nav */}
      <div
        className={clsx(
          "fixed bottom-0 left-0 top-0 hidden w-60 flex-col overflow-y-auto border-r bg-muted py-2",
          "lg:flex",
        )}
      >
        <Profile />
        <Navigation />
      </div>
    </header>
  );
}
