"use client";

// React
import { useCallback, useEffect, useState } from "react";

// Next
import { useRouter } from "next/navigation";

// Dependencies
import {
  MonitorIcon,
  ExternalLinkIcon,
  SearchIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { useTheme } from "next-themes";

// Components
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

// Data
import { siteLinks } from "@/data/sitelinks";

// Lib
import { cn } from "@/lib/utils";

export default function Search() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        if (
          (event.target instanceof HTMLElement &&
            event.target.isContentEditable) ||
          event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement ||
          event.target instanceof HTMLSelectElement
        ) {
          return;
        }

        event.preventDefault();
        setOpen((open) => !open);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const runCommand = useCallback((command) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(true)}
        className={cn(
          "group items-center justify-center gap-2 border text-sm",
          "hover:border-muted-foreground",
          "lg:flex lg:w-[60ch] lg:p-2 lg:text-muted-foreground",
        )}
      >
        <SearchIcon className={cn("block h-4 w-4", "lg:hidden")} />
        <span className={cn("hidden", "lg:flex")}>Search website...</span>
        <span className="sr-only">Search website...</span>
        <kbd
          className={cn(
            "pointer-events-none ml-auto hidden h-5 flex-none select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100",
            "group-hover:border-muted-foreground",
            "lg:flex",
          )}
        >
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {siteLinks.map((linkItem) => (
            <CommandGroup key={linkItem.title} heading={linkItem.title}>
              {linkItem.items.map(
                ({ title, href, external, icon: Icon, shortcut }) => (
                  <CommandItem
                    key={href}
                    value={title}
                    onSelect={() => {
                      runCommand(() => router.push(href));
                    }}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span>{title}</span>
                    {external && (
                      <ExternalLinkIcon className="ml-auto h-4 w-4 text-muted-foreground" />
                    )}
                    {shortcut && (
                      <CommandShortcut className="flex h-5 w-4 shrink-0 items-center justify-center rounded border text-[10px] font-medium uppercase text-muted-foreground">
                        {shortcut}
                      </CommandShortcut>
                    )}
                  </CommandItem>
                ),
              )}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <SunIcon className="mr-2 h-4 w-4" />
              <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <MonitorIcon className="mr-2 h-4 w-4" />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
