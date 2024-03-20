"use client";

// React
import { useEffect, useState } from "react";

// Dependencies
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";

// Components
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Navigation from "./Navigation";

// Hooks
import { useMediaQuery } from "@/hooks/use-media-query";

// Lib
import { cn } from "@/lib/utils";

const toggleIcons = [DragHandleDots2Icon, ChevronLeftIcon, ChevronRightIcon];

export default function DesktopNav() {
  const [open, setOpen] = useState(true);
  const [iconIndex, setIconIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const Icon = toggleIcons[iconIndex];

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
              <Navigation isDesktopNavOpened={open} />
            </ScrollArea>
          </div>
          <div className="sticky top-14 -ml-3 flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  aria-label={open ? "Close sidebar" : "Open sidebar"}
                  variant="outline"
                  onClick={() => setOpen((open) => !open)}
                  onMouseEnter={() => setIconIndex(open ? 1 : 2)}
                  onMouseLeave={() => setIconIndex(0)}
                  className="h-6 w-6 rounded-sm p-0"
                >
                  <Icon />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p className="flex gap-1">
                  {open ? "Close sidebar" : "Open sidebar"}
                  <kbd className="pointer-events-none select-none rounded border px-1 font-mono font-medium">
                    &#93;
                  </kbd>
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      )}
    </>
  );
}
