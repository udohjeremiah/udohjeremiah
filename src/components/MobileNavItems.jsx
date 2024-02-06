// Next
import Link from "next/link";

// Dependencies
import { ExternalLinkIcon } from "@radix-ui/react-icons";

// Components
import RandomQuotes from "./RandomQuotes";
import ThemeToggler from "./ThemeToggler";

// Data
import { sections } from "@/data/navigation";

// Lib
import { cn } from "@/lib/utils";

export default function MobileNavItems({
  pathname,
  mobileAnimateCount,
  setMobileAnimateCount,
  setMobileNav,
}) {
  return (
    <nav>
      <div className="space-y-2 p-3">
        <RandomQuotes
          animateCount={mobileAnimateCount}
          setAnimateCount={setMobileAnimateCount}
        />
      </div>
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="space-y-2 p-3">
          {section.name ? (
            <h3 className="mx-3 text-xs font-semibold uppercase tracking-wide">
              {section.name}
            </h3>
          ) : null}
          <div className="space-y-0.5">
            {section.links.map(
              ({ name, href, icon: Icon, shortcut, active }) => (
                <Link
                  key={name}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  onClick={() => setMobileNav(false)}
                  className={cn(
                    "group flex items-center gap-2.5 rounded-md border px-3 py-2 transition-colors",
                    active?.(pathname)
                      ? "bg-secondary"
                      : "border-transparent text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
                  <p className="flex-1 text-sm font-medium leading-[22px]">
                    {name}
                  </p>
                  {shortcut ? (
                    <kbd className="flex h-5 w-4 shrink-0 items-center justify-center rounded border text-[10px] font-medium uppercase text-muted-foreground">
                      {shortcut}
                    </kbd>
                  ) : null}
                  {["http", "mailto:"].some((prefix) =>
                    href.startsWith(prefix),
                  ) ? (
                    <ExternalLinkIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors" />
                  ) : null}
                </Link>
              ),
            )}
          </div>
        </section>
      ))}
      <section className="space-y-2 p-3">
        <h3 className="mx-3 text-xs font-semibold uppercase tracking-wide">
          Other
        </h3>
        <div className="space-y-0.5">
          <ThemeToggler />
        </div>
      </section>
    </nav>
  );
}
