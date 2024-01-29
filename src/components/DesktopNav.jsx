"use client";

// React
import { useState } from "react";

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

  return (
    <>
      {isDesktop && (
        <div className="flex">
          <div
            className={cn(
              "sticky top-14 h-[calc(100vh-3.5rem)] w-72 border-r bg-muted opacity-100 transition-[opacity_width]",
              iconIndex && "opacity-50",
              !open && "invisible w-0 opacity-0",
            )}
          >
            {open && (
              <ScrollArea className="h-full py-4">
                <Navigation />
              </ScrollArea>
            )}
          </div>
          <div className="sticky top-14 flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  aria-label={open ? "Close sidebar" : "Open sidebar"}
                  variant="outline"
                  onClick={() => setOpen((open) => !open)}
                  onMouseEnter={() => setIconIndex(open ? 1 : 2)}
                  onMouseLeave={() => setIconIndex(0)}
                  className="h-6 w-6 rounded-sm rounded-l-none border-l-0 bg-muted p-0"
                >
                  <Icon />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{open ? "Close sidebar" : "Open sidebar"}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      )}
    </>
  );
}
