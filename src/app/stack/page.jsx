// Next
import Image from "next/image";
import Link from "next/link";

// Components
import { Badge } from "@/components/ui/badge";
import Container from "@/components/Container";

// Data
import stack from "@/data/stack";

// Lib
import { cn } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";

const title = "Stack";
const description = "Tools and technologies I use.";

export const metadata = createMetadata({ title, description, path: "/stack" });

export default function StackPage() {
  return (
    <Container wide>
      <h1 className="mb-0">{title}</h1>
      <p>{description}</p>
      <div className="not-prose mt-8 grid gap-8">
        {Object.values(stack).map(({ type, items }, index) => (
          <div key={index} className="space-y-4 rounded-md border p-4">
            <h2 className="font-semibold">{type}</h2>
            <div className={cn("grid", "sm:grid-cols-2")}>
              {items.map(
                ({ name, href, description, image, featured }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    className={cn(
                      "flex items-center gap-4 rounded-md p-4 no-underline transition-colors",
                      "hover:bg-muted",
                    )}
                  >
                    <Image
                      src={image}
                      alt={name}
                      width={32}
                      height={32}
                      className="rounded-md"
                      quality={100}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">{name}</p>
                        {featured ? (
                          <Badge variant="secondary" className="rounded-full">
                            Featured
                          </Badge>
                        ) : null}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
