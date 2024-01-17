"use client";

import { cn } from "@/lib/utils";

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Profile from "./Profile";
import Navigation from "./Navigation";
import Search from "./Search";
import RandomQuotes from "./RandomQuotes";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-sm">
      {/* Mobile nav */}
      <div
        className={cn(
          "flex items-center justify-between gap-4 px-4 py-3",
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
        <div className="flex gap-2">
          <Search />
          <Navigation />
        </div>
      </div>

      {/* Desktop nav */}
      <div
        className={cn(
          "hidden items-center justify-between gap-4 overflow-y-auto bg-muted px-4",
          "lg:flex",
        )}
      >
        <Profile />
        <Search />
        <RandomQuotes />
      </div>
    </header>
  );
}
