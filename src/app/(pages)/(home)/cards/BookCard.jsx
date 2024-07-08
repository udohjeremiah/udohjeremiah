import Image from "next/image";

import Card from "@/components/Card";
import Link from "@/components/Link";

export default function BookCard() {
  const book = {
    image: process.env.NEXT_PUBLIC_CURRENT_BOOK_IMAGE,
    href: process.env.NEXT_PUBLIC_CURRENT_BOOK_HREF,
    name: process.env.NEXT_PUBLIC_CURRENT_BOOK_NAME,
    author: process.env.NEXT_PUBLIC_CURRENT_BOOK_AUTHOR,
  };

  return (
    <Card
      title="Now Reading"
      className="flex flex-row gap-4 p-4 md:flex-col md:justify-between"
    >
      <Image
        src={book.image}
        alt=""
        width={128}
        height={196}
        priority
        unoptimized
        className="h-auto w-12 shrink-0 rounded"
      />
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        <Link href={book.href} label={book.name}>
          {book.name}
        </Link>{" "}
        by {book.author}
      </p>
    </Card>
  );
}
