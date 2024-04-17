// Next
import Link from "next/link";

// Dependencies
import { ArrowLeftIcon } from "lucide-react";

// Lib
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div
      className={cn(
        "container prose prose-neutral flex h-[calc(100vh-14.1rem)] flex-col items-center justify-center gap-4",
        "dark:prose-invert",
      )}
    >
      <div>
        <h2 className={cn("m-0 text-center text-6xl font-bold", "sm:text-8xl")}>
          404
        </h2>
        <h3 className="text-center">Page not found</h3>
      </div>
      <p className="text-center">
        The page you are searching for may have been deleted, undergone a name
        change, be temporarily unavailable, or simply not exist.
      </p>
      <Link className="flex items-center gap-1" href="/">
        <ArrowLeftIcon className="h-4 w-4 animate-ping" />
        Return Home
      </Link>
    </div>
  );
}
