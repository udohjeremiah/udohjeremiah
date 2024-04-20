// React
import { useState } from "react";

// Dependencies
import { MenuIcon } from "lucide-react";

// Components
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

// Lib
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [animateCount, setAnimateCount] = useState(0);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          aria-label="Open navigation"
          variant="outline"
          size="icon"
          className={cn("border", "hover:border-muted-foreground")}
        >
          <MenuIcon className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="max-h-[60vh] overflow-auto">
          <Navigation
            mobileAnimateCount={animateCount}
            setMobileAnimateCount={setAnimateCount}
            setMobileNav={setOpen}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
