// Next
import Image from "next/image";

// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/Container";

// Data
import books from "@/data/books";

// Lib
import { cn } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";

const title = "Books";
const description =
  "Print and non-print materials I've read that have proven valuable in enhancing my spirituality, philosophy, psychology, productivity, programming skills, design skills, public speaking, and more (listed in alphabetical order).";

export const metadata = createMetadata({ title, description, path: "/books" });

export default async function BooksPage() {
  return (
    <Container wide>
      <h1 className="mb-0">{title}</h1>
      <p>{description}</p>
      <Accordion type="single" collapsible className="not-prose w-full">
        {books.map(({ category, items }, index) => (
          <AccordionItem key={index} value={category}>
            <AccordionTrigger>{category}</AccordionTrigger>
            <AccordionContent
              className={cn(
                "grid grid-cols-2 place-items-center gap-x-4 gap-y-8",
                "md:grid-cols-4 md:place-items-start",
              )}
            >
              {items
                .sort((bookA, bookB) => bookA.title.localeCompare(bookB.title))
                .map((book, index) => (
                  <figure key={index} className="space-y-3">
                    <Image
                      src={book.cover}
                      alt={book.title}
                      width={128}
                      height={196}
                      className={cn(
                        "rounded-md transition-all",
                        "hover:scale-105",
                      )}
                    />
                    <figcaption className="space-y-1">
                      <h3 className="font-medium leading-none">{book.title}</h3>
                      <p className="text-muted-foreground">{book.author}</p>
                    </figcaption>
                  </figure>
                ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
