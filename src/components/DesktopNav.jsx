"use client";

// Components
import { ScrollArea } from "@/components/ui/scroll-area";
import Navigation from "./Navigation";

// Hooks
import { useMediaQuery } from "@/hooks/use-media-query";

export default function DesktopNav() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {isDesktop && (
        <div className="sticky top-14 h-[calc(100vh-3.5rem)] w-72 border-r bg-muted">
          <ScrollArea className="h-full py-4">
            <Navigation />
          </ScrollArea>
        </div>
      )}
    </>
  );
}
