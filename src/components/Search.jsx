"use client";

import { cn } from "@/lib/utils";

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Search() {
  const [openSearchDialog, setSearchDialog] = useState(false);

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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
