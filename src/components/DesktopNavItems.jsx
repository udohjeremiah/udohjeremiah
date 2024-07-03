"use client";

// Next
import Link from "next/link";

// Dependencies
import { ExternalLinkIcon } from "lucide-react";

// Components
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Data
import { sections } from "@/data/navigation";

// Lib
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function DesktopNavItems() {
  const pathname = usePathname();

  return (
    <nav>
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="px-1 py-3">
          {section.links.map(({ name, href, icon: Icon, active }) => (
            <Tooltip key={name} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
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
                  ) && (
                    <ExternalLinkIcon className="ml-2 h-4 w-4 shrink-0 transition-colors" />
                  )}
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </section>
      ))}
    </nav>
  );
}
