"use client";

// Components
import DesktopNavBar from "@/components/DesktopNavBar";
import MobileNavBar from "@/components/MobileNavBar";

// Hooks
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-sm">
      {isDesktop ? <DesktopNavBar /> : <MobileNavBar />}
    </header>
  );
}
