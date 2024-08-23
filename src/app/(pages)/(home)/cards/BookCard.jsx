import Image from "next/image";

import Card from "@/components/Card";
import Link from "@/components/Link";

import { tw } from "@/lib/utils";

export default function BookCard() {
  const book = {
    href: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    image: "https://covers.openlibrary.org/b/olid/OL26222911M-M.jpg",
    name: "Clean Code",
    author: "Robert C. Martin",
  };

  return (
    <Card
      title="Now Reading"
      className={tw(
        "flex flex-row gap-4 p-4",
        "md:flex-col md:justify-between",
      )}
    >
      <Image
        src={book.image}
        alt=""
        width={128}
        height={196}
        unoptimized
        className="h-auto w-12 shrink-0 rounded"
      />
      <p className={tw("text-sm", "text-neutral-500", "dark:text-neutral-400")}>
        <Link href={book.href} label={book.name}>
          {book.name}
        </Link>{" "}
        by {book.author}
      </p>
    </Card>
  );
}
