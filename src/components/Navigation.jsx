"use client";

// Next
import { usePathname, useRouter } from "next/navigation";

// Components
import DesktopNavItems from "@/components/DesktopNavItems";
import MobileNavItems from "@/components/MobileNavItems";

// Hooks
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Navigation({
  mobileAnimateCount,
  setMobileAnimateCount,
  setMobileNav,
}) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {isDesktop ? (
        <DesktopNavItems />
      ) : (
        <MobileNavItems
          mobileAnimateCount={mobileAnimateCount}
          setMobileAnimateCount={setMobileAnimateCount}
          setMobileNav={setMobileNav}
        />
      )}
    </>
  );
}
