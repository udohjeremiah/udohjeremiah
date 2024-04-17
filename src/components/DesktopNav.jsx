"use client";

// React
import { useEffect, useState } from "react";

// Dependencies
import { PanelLeftOpenIcon, PanelRightOpenIcon } from "lucide-react";

// Components
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Hooks
import { useMediaQuery } from "@/hooks/use-media-query";

// Lib
import { cn } from "@/lib/utils";

export default function DesktopNav() {
  const [open, setOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

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

      if (event.key === "]") {
        if (
          (event.target instanceof HTMLElement &&
            event.target.isContentEditable) ||
          event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement ||
          event.target instanceof HTMLSelectElement
        ) {
          return;
        }

        setOpen((open) => !open);
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { passive: true });
    };
  }, []);

  return (
    <>
      {isDesktop && (
        <div className="flex">
          <div
            className={cn(
              "sticky top-14 h-[calc(100vh-3.5rem)] w-72 border-r bg-muted transition-[opacity_width]",
              !open && "w-14",
            )}
          >
            <ScrollArea className="h-full py-4">
              <div className="flex w-full items-center px-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      aria-label={open ? "Close sidebar" : "Open sidebar"}
                      variant="ghost"
                      onClick={() => setOpen((open) => !open)}
                      className="ml-auto h-5 w-5 p-0"
                    >
                      {open ? <PanelRightOpenIcon /> : <PanelLeftOpenIcon />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p className="flex items-center gap-1">
                      {open ? "Collapse sidebar" : "Expand sidebar"}
                      <kbd className="pointer-events-none flex h-5 flex-none select-none items-center rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-foreground">
                        &#93;
                      </kbd>
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Navigation isDesktopNavOpened={open} />
            </ScrollArea>
          </div>
        </div>
      )}
    </>
  );
}
