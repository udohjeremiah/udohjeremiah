// Next
import Link from "next/link";

// Dependencies
import { ExternalLinkIcon } from "lucide-react";

// Components
import ThemeToggler from "@/components/ThemeToggler";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Data
import { sections } from "@/data/navigation";

// Lib
import { cn } from "@/lib/utils";

export default function DesktopNavItems({ pathname, isDesktopNavOpened }) {
  return (
    <nav>
      {isDesktopNavOpened ? (
        <>
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
                      href={href}
                      key={name}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={cn(
                        "group flex items-center justify-center gap-2.5 rounded-md border px-3 py-2 text-primary-foreground transition-colors",
                        active?.(pathname)
                          ? "bg-primary"
                          : "border-transparent text-muted-foreground hover:bg-primary/90 hover:text-primary-foreground",
                      )}
                    >
                      {Icon && <Icon className="h-4 w-4 shrink-0" />}
                      <p className="flex-1 text-sm font-medium leading-[22px]">
                        {name}
                      </p>
                      {shortcut ? (
                        <kbd className="bg- flex h-5 w-4 shrink-0 items-center justify-center rounded border bg-muted text-[10px] font-medium uppercase text-muted-foreground">
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
        </>
      ) : (
        sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="px-1 py-3">
            {section.links.map(
              ({ name, href, icon: Icon, shortcut, active }) => (
                <Tooltip key={sectionIndex} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      key={name}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={cn(
                        "group flex items-center justify-center gap-2.5 rounded-md border px-3 py-2 text-primary-foreground transition-colors",
                        active?.(pathname)
                          ? "bg-primary"
                          : "border-transparent text-muted-foreground hover:bg-primary/90 hover:text-primary-foreground",
                      )}
                    >
                      {Icon && <Icon className="h-4 w-4 shrink-0" />}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="flex items-center">
                    <div className="flex items-center">
                      <p>{name}</p>
                      {["http", "mailto:"].some((prefix) =>
                        href.startsWith(prefix),
                      ) ? (
                        <ExternalLinkIcon className="ml-2 h-4 w-4 shrink-0 text-muted-foreground transition-colors" />
                      ) : null}
                    </div>
                  </TooltipContent>
                </Tooltip>
              ),
            )}
          </section>
        ))
      )}
    </nav>
  );
}
