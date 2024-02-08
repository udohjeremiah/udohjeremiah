"use client";

// Components
import { Button } from "@/components/ui/button";

// Lib
import { cn } from "@/lib/utils";

export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body>
        <div
          className={cn(
            "container prose prose-neutral flex h-[calc(100vh-14.1rem)] flex-col items-center justify-center gap-4",
            "dark:prose-invert",
          )}
        >
          <div>
            <h2
              className={cn(
                "m-0 text-center text-6xl font-bold",
                "sm:text-8xl",
              )}
            >
              500
            </h2>
            <h3 className="text-center">Internal server error</h3>
          </div>
          <p className="text-center">
            An internal server error has occurred, preventing the requested page
            from being displayed. The issue may be due to a server
            misconfiguration or an unexpected error. Please try again.
          </p>
        </div>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
}
