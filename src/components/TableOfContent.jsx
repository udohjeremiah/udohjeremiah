"use client";

import { useState } from "react";

import Link from "next/link";

import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { cn } from "@/lib/utils";

export const generateTocList = (headings) => (
  <ul className="list-none text-sm">
    {headings.map((heading, index) => (
      <li key={index}>
        <Link
          href={heading.url}
          className={cn(
            "text-muted-foreground no-underline",
            "hover:underline",
          )}
        >
          {heading.value}
        </Link>
        {heading.children && generateTocList(heading.children)}
      </li>
    ))}
  </ul>
);

export default function TableOfContent({ toc }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="outline">
          {isOpen ? (
            <ChevronDownIcon className="mr-2 h-4 w-4" />
          ) : (
            <ChevronRightIcon className="mr-2 h-4 w-4" />
          )}
          Table of Contents
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="CollapsibleContent">
        <aside className="border-l">{generateTocList(toc)}</aside>
      </CollapsibleContent>
    </Collapsible>
  );
}
