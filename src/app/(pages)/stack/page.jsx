import Image from "next/image";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Link from "@/components/Link";

import stack from "@/data/stack.json";

import { tw } from "@/lib/utils";

const title = "Stack";
const description = "Tools and technologies I use.";

export const metadata = {
  title,
  description,
};

function Tool({ data }) {
  const { hostname } = new URL(data.href);

  return (
    <Link
      key={data.href}
      href={data.href}
      label={data.name}
      className={tw(
        "flex items-center gap-4 rounded-lg p-4 no-underline transition-colors",
        "hover:bg-neutral-100",
        "dark:hover:bg-neutral-800",
      )}
    >
      <Image
        src={data.image}
        alt={hostname}
        width={32}
        height={32}
        quality={100}
        className="rounded-md"
      />
      <div>
        <div className="flex items-center gap-2">
          <p
            className={tw(
              "text-sm font-medium",
              "text-neutral-900",
              "dark:text-neutral-100",
            )}
          >
            {data.name}
          </p>
          {data.featured && (
            <span
              className={tw(
                "rounded-full px-2 text-xs font-medium",
                "bg-neutral-100 text-neutral-700",
                "dark:bg-neutral-800 dark:text-neutral-300",
              )}
            >
              Featured
            </span>
          )}
        </div>
        <p
          className={tw("text-sm", "text-neutral-500", "dark:text-neutral-400")}
        >
          {data.description}
        </p>
      </div>
    </Link>
  );
}

export default function Stack() {
  return (
    <>
      <Header title={title} description={description} />
      <div className="not-prose mt-8 grid gap-8">
        {Object.values(stack).map(({ items, type }) => (
          <Card
            key={type}
            title={type}
            className={tw("grid gap-x-2 p-2", "sm:grid-cols-2")}
          >
            {items.map((item) => (
              <Tool data={item} key={item.name} />
            ))}
          </Card>
        ))}
      </div>
    </>
  );
}
