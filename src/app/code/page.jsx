// Next
import Image from "next/image";
import Link from "next/link";

// Dependencies
import { GitForkIcon, StarIcon } from "lucide-react";
import glimpse from "react-glimpse/server";

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/Container";

// Lib
import { cn } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";
import { octokit } from "@/lib/octokit";

const title = "Code";
const description = "Open source projects and contributions.";

export const metadata = createMetadata({ title, description, path: "/code" });

const Project = async ({ data }) => {
  const { image } = await glimpse(data.html_url);

  return (
    <Link
      key={data.name}
      href={data.html_url}
      target="_blank"
      className={cn(
        "no-underline transition-transform",
        "hover:-translate-y-1",
      )}
    >
      <Card className="not-prose overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt=""
            width={1200}
            height={600}
            priority
            unoptimized
          />
        ) : null}
        <CardHeader>
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="flex items-center gap-1">
              <StarIcon className="h-3 w-3" />
              {data.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <GitForkIcon className="h-3 w-3" />
              {data.forks_count}
            </span>
          </div>
          <p className="text-sm font-medium">{data.language}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default async function CodePage() {
  const { data: repos } = await octokit.rest.repos.listForUser({
    username: "udohjeremiah",
    per_page: 100,
  });

  return (
    <Container wide>
      <h1 className="mb-0">{title}</h1>
      <p>{description}</p>
      <div className={cn("mt-8 grid gap-8", "sm:grid-cols-2")}>
        {repos
          .filter((repo) => !repo.fork && !repo.private && !repo.disabled)
          .sort(
            (repoA, repoB) =>
              (repoB.stargazers_count ?? 0) - (repoA.stargazers_count ?? 0),
          )
          .map((repo) => (
            <Project key={repo.id} data={repo} />
          ))}
      </div>
    </Container>
  );
}
