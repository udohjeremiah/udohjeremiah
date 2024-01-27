// React
import { useState } from "react";

// Dependencies
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

// Components
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Navigation from "./Navigation";

// Lib
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          aria-label="Open navigation"
          variant="secondary"
          size="icon"
          className={cn(
            "border bg-primary-foreground",
            "hover:border-muted-foreground",
          )}
        >
          <HamburgerMenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="max-h-[60vh] overflow-auto">
          <Navigation setMobileNav={setOpen} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
