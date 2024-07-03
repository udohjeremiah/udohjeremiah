"use client";

// Components
import Navigation from "@/components/Navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

// Hooks
import { useMediaQuery } from "@/hooks/use-media-query";

export default function DesktopNav() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {isDesktop && (
        <div className="flex">
          <div className="fixed inset-0 h-full w-14 border-r bg-muted">
            <ScrollArea className="h-full py-14">
              <Navigation />
            </ScrollArea>
          </div>
        </div>
      )}
    </>
  );
}
