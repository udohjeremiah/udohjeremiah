"use client";

// React
import { useEffect } from "react";

// Next
import { usePathname, useRouter } from "next/navigation";

// Components
import DesktopNavItems from "./DesktopNavItems";
import MobileNavItems from "./MobileNavItems";

// Data
import { sections } from "@/data/navigation";

// Hooks
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Navigation({
  mobileAnimateCount,
  setMobileAnimateCount,
  setMobileNav,
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

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

      const collections = sections.flatMap(({ links }) => links);
      const page = collections.find(({ shortcut }) => shortcut === event.key);

      if (page) {
        router.push(page.href);
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { passive: true });
    };
  }, [router]);

  return (
    <>
      {isDesktop ? (
        <DesktopNavItems pathname={pathname} />
      ) : (
        <MobileNavItems
          pathname={pathname}
          mobileAnimateCount={mobileAnimateCount}
          setMobileAnimateCount={setMobileAnimateCount}
          setMobileNav={setMobileNav}
        />
      )}
    </>
  );
}
