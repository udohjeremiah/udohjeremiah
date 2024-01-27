"use client";

// Components
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

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
