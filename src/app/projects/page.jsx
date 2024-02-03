// Next
import Image from "next/image";
import Link from "next/link";

// Dependencies
import { ExternalLinkIcon } from "@radix-ui/react-icons";

// Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/Container";

// Data
import projects from "@/data/projects";

// Lib
import { cn } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";

const title = "Projects";
const description = "Things I have brought to life and currently working on.";

export const metadata = createMetadata({
  title,
  description,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <Container wide>
      <h1 className="mb-0">{title}</h1>
      <p>{description}</p>
      <div className={cn("mt-8 grid gap-8", "sm:grid-cols-2")}>
        {projects.map(
          (
            {
              title,
              description,
              link,
              image,
              name,
              openSource,
              repositoryLink,
            },
            index,
          ) => (
            <Card
              key={index}
              className="not-prose overflow-hidden bg-primary-foreground"
            >
              <Image src={image} alt={name} width={1200} height={600} />
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col gap-2.5">
                {openSource && (
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={repositoryLink}
                      target="_blank"
                      className="flex items-center gap-2.5"
                    >
                      <span>View Source Code</span>
                      <ExternalLinkIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors" />
                    </Link>
                  </Button>
                )}
                <Button asChild className="w-full">
                  <Link
                    href={link}
                    target="_blank"
                    className="flex items-center gap-2.5"
                  >
                    View Project
                    <ExternalLinkIcon className="h-4 w-4 shrink-0 text-muted transition-colors" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ),
        )}
      </div>
    </Container>
  );
}
