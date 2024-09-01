import Image from "next/image";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Link from "@/components/Link";

import books from "@/data/books.json";

import { tw } from "@/lib/utils";

const title = "Books";
const description = "Materials I've read since launching this site.";

export const metadata = {
  title,
  description,
};

function Book({ data }) {
  return (
    <Link
      key={data.href}
      href={data.href}
      label={data.name}
      className={tw(
        "flex flex-col gap-4 rounded-lg p-4 no-underline transition-colors",
        "hover:bg-neutral-100",
        "dark:hover:bg-neutral-800",
      )}
    >
      <Image
        src={data.image}
        alt={data.name}
        width={128}
        height={196}
        quality={100}
        className="rounded-md"
      />
      <div>
        <p
          className={tw(
            "text-sm font-medium",
            "text-neutral-900",
            "dark:text-neutral-100",
          )}
        >
          {data.name}
        </p>
        <p
          className={tw("text-sm", "text-neutral-500", "dark:text-neutral-400")}
        >
          {data.author}
        </p>
      </div>
    </Link>
  );
}

export default function BooksPage() {
  return (
    <>
      <Header title={title} description={description} />
      <div className="not-prose mt-8 grid gap-8">
        {Object.values(books).map(({ category, books }) => (
          <Card
            key={category}
            title={category}
            className={tw(
              "grid grid-cols-2 gap-2 p-2",
              "md:grid-cols-3 lg:grid-cols-4",
            )}
          >
            {books.map((book) => (
              <Book data={book} key={book.name} />
            ))}
          </Card>
        ))}
      </div>
    </>
  );
}
