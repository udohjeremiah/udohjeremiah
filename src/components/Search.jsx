"use client";

import { cn } from "@/lib/utils";

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Search() {
  const [openSearchDialog, setSearchDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setSearchDialog((open) => !open);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Dialog open={openSearchDialog} onOpenChange={setSearchDialog}>
      <DialogTrigger asChild>
        <div>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MagnifyingGlassIcon />
          </Button>
          <Button
            className={cn(
              "hidden w-64 items-center gap-2 border bg-primary-foreground text-sm text-muted-foreground",
              "hover:border-card hover:bg-primary-foreground",
              "lg:flex",
              "xl:w-96",
            )}
          >
            <MagnifyingGlassIcon />
            <span>Search website...</span>
            <kbd className="pointer-events-none ml-auto flex h-5 flex-none select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-semibold opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="flex max-h-screen w-4/5 flex-col overflow-y-auto rounded-lg">
        <DialogHeader className="flex border-b">
          <div className="flex flex-1 items-center">
            <Label id="website-search-label" htmlFor="website-search-input">
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon />
            </Label>
            <Input
              aria-labelledby="website-search-label"
              aria-autocomplete="both"
              id="website-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoCorrect="off"
              autoComplete="off"
              autoCapitalize="off"
              aria-controls="website-search-list"
              enterKeyHint="go"
              spellCheck="false"
              type="text"
              placeholder="Search website"
              maxLength="64"
              className={cn(
                "flex-auto appearance-none border-none pl-3 shadow-none outline-none",
                "focus-visible:ring-0",
              )}
            />
          </div>
        </DialogHeader>
        <div></div>
      </DialogContent>
    </Dialog>
  );
}
