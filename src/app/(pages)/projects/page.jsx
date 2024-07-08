import Image from "next/image";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Link from "@/components/Link";

import projects from "@/data/projects.json";

import { cn } from "@/lib/utils";

const title = "Projects";
const description = "Things I have brought to life and currently working on.";

export const metadata = {
  title,
  description,
};

function Project({ data }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg p-4">
      <Image
        src={data.image}
        alt={data.name}
        width={1200}
        height={600}
        priority
        quality={100}
        className="rounded-md"
      />
      <div>
        <div className="flex items-center gap-2">
          <p
            className={cn(
              "text-sm font-medium",
              "text-neutral-900",
              "dark:text-neutral-100",
            )}
          >
            {data.name}
          </p>
          {data.openSource && (
            <span
              className={cn(
                "rounded-full px-2 text-xs font-medium",
                "bg-neutral-100 text-neutral-700",
                "dark:bg-neutral-800 dark:text-neutral-300",
              )}
            >
              Open-source
            </span>
          )}
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {data.description}
        </p>
        <div className="mt-4 flex gap-8">
          <Link
            href={data.href}
            className="text-green-500 underline transition-colors duration-200  hover:text-green-600"
          >
            Live site
          </Link>
          {data.openSource && (
            <Link
              href={data.repositoryHref}
              className="text-green-500 underline transition-colors duration-200 hover:text-green-600"
            >
              View code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Header title={title} description={description} />
      <div className="not-prose mt-8 grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} title={project.name} className="grid gap-x-2 p-2">
            <Project data={project} />
          </Card>
        ))}
      </div>
    </>
  );
}
