import Image from "next/image";

import Card from "@/components/Card";
import Header from "@/components/Header";

import readings from "@/data/readings.json";

import { tw } from "@/lib/utils";

const title = "Readings";
const description = "Materials I've read since launching this site.";

export const metadata = {
  title,
  description,
};

function Book({ data }) {
  return (
    <figure
      key={data.href}
      className="flex flex-col gap-4 rounded-lg p-4 no-underline"
    >
      <Image
        src={data.image}
        alt={data.name}
        width={128}
        height={196}
        quality={100}
        className="rounded-md"
      />
      <figcaption className="flex flex-col">
        <span
          className={tw(
            "text-sm font-medium",
            "text-neutral-900",
            "dark:text-neutral-100",
          )}
        >
          {data.name}
        </span>
        <span className="sr-only"> by</span>
        <span
          className={tw("text-sm", "text-neutral-500", "dark:text-neutral-400")}
        >
          {data.author}
        </span>
      </figcaption>
    </figure>
  );
}

export default function ReadingsPage() {
  return (
    <>
      <Header title={title} description={description} />
      <div className="not-prose mt-8 grid gap-8">
        {Object.values(readings).map(({ category, books }) => (
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
