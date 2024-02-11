// Next
import Link from "next/link";

// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MobileNav from "./MobileNav";
import Search from "./Search";

// Lib
import { cn } from "@/lib/utils";

export default function MobileNavBar() {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 px-4 py-3",
        "sm:px-8",
      )}
    >
      <Link aria-label="Home" href="/">
        <Avatar>
          <AvatarImage src="/avatar.webp" alt="Udoh Jeremiah" />
          <AvatarFallback>UJ</AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex gap-2">
        <Search />
        <MobileNav />
      </div>
    </div>
  );
}
